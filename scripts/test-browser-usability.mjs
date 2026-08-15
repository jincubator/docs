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

  for (const [asset, type] of [[pdfPath, "application/pdf"], [imagePath, "image/png"], [searchIndexPath, "application/json"]]) {
    const response = await fetch(`${baseUrl}${asset}`);
    assert.equal(response.status, 200, `${asset} must be served`);
    assert.match(response.headers.get("content-type") ?? "", new RegExp(type));
  }
  assert.deepEqual(consoleIssues, [], "the reviewed pages must not emit console warnings or errors");
} finally {
  await browser.close();
  previewProcess.kill("SIGTERM");
  await once(previewProcess, "close");
}
