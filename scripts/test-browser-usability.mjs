import assert from "node:assert/strict";
import { once } from "node:events";
import { spawn } from "node:child_process";
import fs from "node:fs";
import { chromium } from "playwright";

const previewProcess = spawn("bunx", ["vocs", "preview"], { cwd: process.cwd(), stdio: ["ignore", "pipe", "pipe"] });
let previewOutput = "";
const baseUrl = await new Promise((resolve, reject) => {
  const timeout = setTimeout(() => reject(new Error(`Vocs preview did not start:\n${previewOutput}`)), 30_000);
  const inspect = (chunk) => {
    previewOutput += chunk;
    const match = previewOutput.match(/http:\/\/localhost:(\d+)/);
    if (match) {
      clearTimeout(timeout);
      resolve(`http://localhost:${match[1]}`);
    }
  };
  previewProcess.stdout.on("data", inspect);
  previewProcess.stderr.on("data", inspect);
  previewProcess.on("error", reject);
  previewProcess.on("exit", (code) => reject(new Error(`Vocs preview exited (${code}):\n${previewOutput}`)));
});
const pdfPath = "/assets/writing/salus-whitepaper/salus-modular-trading-and-solving-infrastructure.pdf";
const imagePath = "/assets/work/salus/salus-runtime-architecture.png";
const routeFigurePath = "/assets/writing/salus-whitepaper/06-route-construction-graph.svg";
const appendixAnchor = "#appendix-b--mathematical-models-and-route-evaluation";
const searchIndexPath = `/.vocs/${fs.readdirSync("docs/dist/.vocs").find((name) => name.startsWith("search-index-") && name.endsWith(".json"))}`;

const contrast = (first, second) => {
  const channels = (color) => color.match(/\d+/g).map(Number).map((value) => value / 255);
  const luminance = (color) => channels(color).map((value) => value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4)
    .reduce((sum, value, index) => sum + value * [0.2126, 0.7152, 0.0722][index], 0);
  return (Math.max(luminance(first), luminance(second)) + 0.05) / (Math.min(luminance(first), luminance(second)) + 0.05);
};

const browser = await chromium.launch({ headless: true });
try {
  const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const page = await context.newPage();
  const consoleIssues = [];
  page.on("console", (message) => {
    if (["error", "warning"].includes(message.type())) consoleIssues.push(message.text());
  });

  await page.goto(`${baseUrl}/salus/architecture/`, { waitUntil: "domcontentloaded" });
  const palette = await page.locator("pre.shiki").first().evaluate((pre) => {
    const background = getComputedStyle(pre).backgroundColor;
    const tokens = [...pre.querySelectorAll('span[style*="--shiki-dark"]')]
      .map((token) => ({ text: token.textContent?.trim(), color: getComputedStyle(token).color }))
      .filter((token) => token.text);
    return { background, tokens };
  });
  assert.ok(palette.tokens.length > 0, "Salus Architecture must render highlighted Rust tokens");
  for (const token of palette.tokens) {
    assert.ok(contrast(token.color, palette.background) >= 4.5, `${token.text} must be readable`);
  }
  const inlineCode = await page.locator(".vocs_Content code").evaluateAll((codes) => codes
    .filter((code) => !code.closest("pre"))
    .map((code) => ({ color: getComputedStyle(code).color, background: getComputedStyle(code).backgroundColor }))
    .find((code) => code.background !== "rgba(0, 0, 0, 0)"));
  assert.ok(inlineCode && contrast(inlineCode.color, inlineCode.background) >= 4.5, "inline code must be readable");

  for (const [path, language] of [
    ["/proposals/atomic-arbitrage/", "Bash"],
    ["/research/deprecated/resources/", "Solidity"],
    ["/product/previous/2023-02-23-rainbow-costs/", "Go"],
  ]) {
    await page.goto(`${baseUrl}${path}`, { waitUntil: "domcontentloaded" });
    const code = await page.locator("pre.shiki").first().evaluate((pre) => ({
      background: getComputedStyle(pre).backgroundColor,
      colors: [...pre.querySelectorAll('span[style*="--shiki-dark"]')]
        .map((token) => ({ text: token.textContent?.trim(), color: getComputedStyle(token).color }))
        .filter((token) => token.text),
    }));
    assert.ok(code.colors.length > 0, `${language} must retain syntax tokens`);
    for (const token of code.colors) assert.ok(contrast(token.color, code.background) >= 4.5, `${language} token ${token.text} must be readable`);
  }

  await page.goto(`${baseUrl}/salus/architecture/`, { waitUntil: "domcontentloaded" });
  await page.setViewportSize({ width: 390, height: 844 });
  const narrow = await page.evaluate(() => ({ page: document.documentElement.scrollWidth, viewport: window.innerWidth }));
  assert.ok(narrow.page <= narrow.viewport, "code must not create page-level overflow at 390px");

  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto(`${baseUrl}/salus/whitepaper/`, { waitUntil: "domcontentloaded" });
  const pdfLink = page.getByRole("link", { name: /View or download the Salus Whitepaper/i });
  const pdfResponse = page.waitForResponse((response) => new URL(response.url()).pathname === pdfPath);
  await pdfLink.click();
  const pdf = await pdfResponse;
  assert.equal(pdf.status(), 200, "the PDF must load on its first click");
  assert.match(pdf.headers()["content-type"] ?? "", /application\/pdf/);
  assert.equal(new URL(page.url()).pathname, "/salus/whitepaper/", "native PDF handling must not enter the SPA not-found route");
  assert.equal(await page.getByText("Page Not Found", { exact: true }).count(), 0);

  await page.goto(`${baseUrl}/salus/whitepaper/${appendixAnchor}`, { waitUntil: "domcontentloaded" });
  const routeFigure = page.locator(`img[src="${routeFigurePath}"]`);
  const figureCaption = page.getByText(/^Figure 4\. A symbolic, bounded route catalogue\./);
  assert.equal(await routeFigure.count(), 1, "Figure 4 must have one public image element");
  const figure = await routeFigure.evaluate((image) => {
    const caption = [...document.querySelectorAll("p")].find((paragraph) => paragraph.textContent?.startsWith("Figure 4."));
    const imageRect = image.getBoundingClientRect();
    const captionRect = caption?.getBoundingClientRect();
    const imageStyle = getComputedStyle(image);
    const buttonStyle = getComputedStyle(image.closest("button"));
    return {
      alt: image.alt,
      complete: image.complete,
      naturalHeight: image.naturalHeight,
      naturalWidth: image.naturalWidth,
      height: imageRect.height,
      width: imageRect.width,
      beforeCaption: imageRect.bottom <= (captionRect?.top ?? -1),
      styles: {
        buttonDisplay: buttonStyle.display,
        buttonHeight: buttonStyle.height,
        buttonWidth: buttonStyle.width,
        imageDisplay: imageStyle.display,
        imageHeight: imageStyle.height,
        imageWidth: imageStyle.width,
      },
    };
  });
  assert.match(figure.alt, /directed graph of four symbolic token nodes/i);
  assert.equal(figure.complete, true, "Figure 4 must load at the Appendix B anchor");
  assert.ok(figure.naturalWidth > 0 && figure.naturalHeight > 0, "Figure 4 must have natural dimensions");
  assert.ok(figure.width > 0 && figure.height > 0, `Figure 4 must have displayed dimensions: ${JSON.stringify(figure)}`);
  assert.equal(figure.beforeCaption, true, "Figure 4 must render above its caption");
  assert.equal(await figureCaption.count(), 1);

  const figureButton = routeFigure.locator("xpath=ancestor::button[1]");
  await figureButton.focus();
  await figureButton.click();
  assert.equal(await page.locator("dialog.jincubator-image-zoom-dialog[open]").count(), 1, "Figure 4 must open in the full-size zoom dialog");
  await page.keyboard.press("Escape");
  assert.equal(await page.locator("dialog.jincubator-image-zoom-dialog[open]").count(), 0, "Escape must close Figure 4 zoom");
  assert.equal(await figureButton.evaluate((button) => document.activeElement === button), true, "zoom close must restore focus to Figure 4");

  const fixedInput = await page.locator("p", { hasText: "Fixed-input route evaluation" }).evaluate((paragraph) => ({
    display: [...paragraph.querySelectorAll("mjx-container > svg")].map((svg) => getComputedStyle(svg).display),
    inlineMathCount: paragraph.querySelectorAll("mjx-container:not([display])").length,
    text: paragraph.textContent,
  }));
  assert.match(fixedInput.text, /Fixed-input route evaluation\. For ordered route input .*sequential evaluation is:/s, "the fixed-input sentence must remain one semantic paragraph");
  assert.equal(fixedInput.inlineMathCount, 3, "the fixed-input sentence must retain x₀, sᵢ, and fᵢ as inline mathematics");
  assert.deepEqual(fixedInput.display, ["inline", "inline", "inline"], "inline MathJax SVGs must remain inline");
  assert.ok(await page.locator('mjx-container[display="true"]').count() > 0, "display equations must remain distinct blocks");
  assert.equal(await page.locator('mjx-container[display="true"]').first().evaluate((math) => getComputedStyle(math).display), "block");

  await page.goto(`${baseUrl}/salus/whitepaper/`, { waitUntil: "domcontentloaded" });
  const appendixLink = page.locator(`a[href="/salus/whitepaper${appendixAnchor}"]`).first();
  assert.equal(await appendixLink.count(), 1, "the Whitepaper Appendix B heading must expose its anchor link");
  await appendixLink.click({ force: true });
  await page.waitForURL((url) => url.hash === appendixAnchor);
  assert.ok(await routeFigure.evaluate((image) => image.getBoundingClientRect().width > 0), "client-side Appendix B navigation must retain Figure 4");

  await page.setViewportSize({ width: 390, height: 844 });
  const narrowMath = await page.evaluate(() => ({ page: document.documentElement.scrollWidth, viewport: window.innerWidth }));
  assert.ok(narrowMath.page <= narrowMath.viewport, "Appendix B mathematics must not create page-level overflow at 390px");
  await page.setViewportSize({ width: 1280, height: 900 });

  await page.goto(`${baseUrl}/salus/architecture/`, { waitUntil: "domcontentloaded" });
  assert.equal(
    await page.locator('mjx-container:not([display="true"]) > svg').first().evaluate((math) => getComputedStyle(math).display),
    "inline",
    "the shared inline-math fix must also preserve Salus Architecture notation",
  );

  await page.goto(`${baseUrl}/salus/whitepaper/`, { waitUntil: "domcontentloaded" });
  const salusLinks = page.locator('a[href="/salus"]');
  assert.ok(await salusLinks.count() >= 2, "top navigation and sidebar must expose Salus");
  await salusLinks.first().click();
  await page.waitForURL((url) => url.pathname === "/salus", { waitUntil: "domcontentloaded" });
  assert.equal(await page.getByText("Page Not Found", { exact: true }).count(), 0, "normal document links must remain SPA links");
  await page.goto(`${baseUrl}/research/`, { waitUntil: "domcontentloaded" });
  await page.locator('aside a[href="/salus"]').first().click();
  await page.waitForURL((url) => url.pathname === "/salus", { waitUntil: "domcontentloaded" });
  await page.goto(`${baseUrl}/work/salus/`, { waitUntil: "domcontentloaded" });
  assert.equal(await page.getByText("Page Not Found", { exact: true }).count(), 0, "legacy Salus alias must remain valid");

  await page.goto(`${baseUrl}/writing/salus-low-latency-trading/`, { waitUntil: "domcontentloaded" });
  assert.equal(await page.getByRole("heading", { level: 1, name: "Async Concurrency in Rust for Low-Latency Trading Systems" }).count(), 1);
  assert.equal(await page.getByText(/Draft.*under active independent review/i).count(), 1);
  const articleFigures = page.locator('img[src^="/assets/writing/salus-low-latency-trading/"]');
  assert.equal(await articleFigures.count(), 5, "the low-latency article must retain its five SVG figures");
  for (const figure of await articleFigures.all()) {
    const dimensions = await figure.evaluate((image) => ({ width: image.naturalWidth, height: image.naturalHeight }));
    assert.ok(dimensions.width > 0 && dimensions.height > 0, "low-latency SVG figure must load");
  }
  await page.setViewportSize({ width: 390, height: 844 });
  const narrowArticle = await page.evaluate(() => ({ page: document.documentElement.scrollWidth, viewport: window.innerWidth }));
  assert.ok(narrowArticle.page <= narrowArticle.viewport, "low-latency article must not overflow at 390px");
  await page.setViewportSize({ width: 1280, height: 900 });

  for (const [asset, type] of [[pdfPath, /application\/pdf/], [imagePath, /image\/png/], [routeFigurePath, /image\/svg\+xml/], [searchIndexPath, /application\/json/]]) {
    const response = await fetch(`${baseUrl}${asset}`);
    assert.equal(response.status, 200, `${asset} must be served`);
    assert.match(response.headers.get("content-type") ?? "", type);
  }
  assert.deepEqual(consoleIssues, [], "the reviewed pages must not emit console warnings or errors");
} finally {
  await browser.close();
  previewProcess.kill("SIGTERM");
  await once(previewProcess, "close");
}
