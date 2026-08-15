import assert from "node:assert/strict";
import crypto from "node:crypto";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const validator = await import("./validate-site.mjs");
const presentation = await import("../docs/presentation-navigation.mjs");
const routePolicy = await import("../route-policy.js");
const { remarkImageZoom } = await import("../remark-image-zoom.js");
const expectedNavigation = ["Work", "Salus", "Research", "Architecture", "Writing", "John Whitton ↗"];
const config = fs.readFileSync(path.join(process.cwd(), "vocs.config.ts"), "utf8");
const vocsPatch = fs.readFileSync(path.join(process.cwd(), "patches/vocs@1.0.13.patch"), "utf8");
const packageJson = JSON.parse(fs.readFileSync(path.join(process.cwd(), "package.json"), "utf8"));

assert.match(vocsPatch, /const \{ basePath, description, markdown, rootDir, title = 'Docs' \} = config \?\? \{\};/);
assert.match(vocsPatch, /getRemarkPlugins\(\{ markdown \}\)/);
assert.match(vocsPatch, /mathToMarkdown\(\)/);
assert.match(vocsPatch, /fs\.existsSync\(resolve\(rootDir, `\.\/public\$\{url\}`\)\)/);
assert.equal(packageJson.devDependencies.globby, "^14.1.0", "Vocs must resolve its ESM globby dependency from the root");
assert.match(packageJson.scripts.sitedeploy, /--dotfiles/, "Deployment must retain Vocs search and icon assets");

assert.deepEqual(validator.topNavigation(config), expectedNavigation);
assert.deepEqual(presentation.primaryNavigation, expectedNavigation);
assert.match(config, /sidebar:\s*presentationSidebar,/);
assert.deepEqual(
  presentation.presentationSidebar.map((group) => group.text),
  ["Work", "Salus", "Research", "Architecture", "Writing", "John Whitton ↗", "Archive"],
);
for (const group of presentation.presentationSidebar) {
  if (group.text === "John Whitton ↗") {
    assert.equal(group.link, "https://johnwhitton.com/");
    continue;
  }
  assert.equal(group.collapsed, true, `${group.text} must be collapsible`);
  assert.ok(group.items?.length, `${group.text} must contain navigable items`);
}
const workNavigation = presentation.presentationSidebar.find((group) => group.text === "Work");
assert.equal(workNavigation.items.some((item) => item.link === "/salus"), false);
const salusNavigation = presentation.presentationSidebar.find((group) => group.text === "Salus");
assert.deepEqual(salusNavigation.items, [
  { text: "Overview", link: "/salus" },
  { text: "Whitepaper — Draft", link: "/salus/whitepaper" },
  { text: "Architecture — Draft", link: "/salus/architecture" },
]);
const writingNavigation = presentation.presentationSidebar.find((group) => group.text === "Writing");
assert.deepEqual(writingNavigation.items, [{ text: "Overview", link: "/writing" }]);
assert.equal(routePolicy.ACTIVE_ROUTES.includes("/salus"), true);
assert.equal(routePolicy.ACTIVE_ROUTES.includes("/salus/whitepaper"), true);
assert.equal(routePolicy.ACTIVE_ROUTES.includes("/salus/architecture"), true);
for (const route of ["/work/salus", "/writing/salus-whitepaper", "/architecture/salus-trading-and-solving-infrastructure"]) {
  assert.equal(routePolicy.COMPATIBILITY_ROUTES.some((entry) => entry.route === route), true);
}
assert.equal(
  routePolicy.COMPATIBILITY_ROUTES.find((entry) => entry.route === "/partnerships/intro").current,
  "https://johnwhitton.com/",
);
const archiveNavigation = presentation.presentationSidebar.find((group) => group.text === "Archive");
const archiveRoutes = (archiveNavigation.items ?? []).flatMap(function collectArchive(item) {
  return [item.link, ...(item.items ?? []).flatMap(collectArchive)].filter(Boolean);
}).filter((route) => route !== "/archive");
assert.equal(archiveRoutes.length, 60, "Archive must expose every approved historical target");
assert.equal(new Set(archiveRoutes).size, 60, "Archive targets must not be duplicated");
assert.equal(archiveRoutes.includes("/product/solving/design"), false, "Excluded solver placeholders must remain absent");
for (const route of archiveRoutes) {
  assert.equal(
    fs.existsSync(`docs/pages${route}.mdx`),
    true,
    `Archive target must retain its route file: ${route}`,
  );
}
const archiveResearch = archiveNavigation.items.find((item) => item.text === "Research");
const historicalPrimitives = archiveResearch.items.find((item) => item.text === "Historical Primitives");
assert.deepEqual(historicalPrimitives.items, [{ text: "Primitives", link: "/research/primitives/intro" }]);
for (const family of ["Historical Chains", "Historical Code Reviews", "Historical Bridges", "Historical Zero Knowledge"]) {
  const item = archiveResearch.items.find((candidate) => candidate.text === family);
  assert.equal(item.collapsed, true, `${family} must remain collapsible`);
  assert.ok(item.items.length > 1, `${family} must expose its historical pages`);
}
const publicNavigationRoutes = presentation.presentationSidebar.flatMap(function collect(item) {
  return [item.link, ...(item.items ?? []).flatMap(collect)].filter(Boolean);
});
const hiddenWritingArtifacts = new Set([
  "collection/solving-arbitrage-market-making",
  "collection/mapping-liquidity-to-routes-at-scale",
  "collection/speed-wasnt-the-problem",
]);
for (const manifestName of fs.readdirSync("docs/public/data/publications").filter((name) => name.endsWith(".json"))) {
  const manifest = JSON.parse(fs.readFileSync(path.join("docs/public/data/publications", manifestName), "utf8"));
  if (!hiddenWritingArtifacts.has(manifest.artifact.id))
    assert.ok(publicNavigationRoutes.includes(manifest.route), `${manifest.artifact.id} must be discoverable in the presentation sidebar`);
}
assert.equal(publicNavigationRoutes.includes("/writing/portfolio-strategy-competitor-analysis"), false);
const presentationCss = fs.readFileSync("docs/presentation.css", "utf8");
for (const token of [
  "--vocs-color_background: #ffffff",
  "--vocs-color_background2: #f8faf9",
  "--vocs-color_border: #d9dedb",
  "background: #ffffff",
]) {
  assert.ok(presentationCss.includes(token), `missing white baseline token: ${token}`);
}
assert.doesNotMatch(presentationCss, /#f7f5ef|#fffefa/);
const hexContrast = (first, second) => {
  const luminance = (hex) => {
    const channels = [1, 3, 5].map((offset) => Number.parseInt(hex.slice(offset, offset + 2), 16) / 255);
    return channels.map((value) => value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4)
      .reduce((sum, value, index) => sum + value * [0.2126, 0.7152, 0.0722][index], 0);
  };
  return (Math.max(luminance(first), luminance(second)) + 0.05) / (Math.min(luminance(first), luminance(second)) + 0.05);
};

for (const token of [
  "--jincubator-code-foreground: #adbac7",
  "--jincubator-code-comment: #8a98a6",
  "pre.shiki span:not(.line)",
  "var(--shiki-dark) !important",
]) {
  assert.ok(presentationCss.includes(token), `missing syntax palette token: ${token}`);
}
for (const color of ["#adbac7", "#8a98a6", "#f47067", "#dcbdfb", "#f69d50", "#6cb6ff", "#96d0ff"]) {
  assert.ok(hexContrast(color, "#17222d") >= 4.5, `${color} must meet AA contrast on the code surface`);
}
assert.match(vocsPatch, /staticAssetPattern/);
assert.match(vocsPatch, /if \(href\?\.match\(staticAssetPattern\)\)/);
assert.match(vocsPatch, /href: href/);

for (const token of [
  "#ffffff",
  "Georgia",
  "--vocs-color_background",
  ".vocs_Content h1",
  ".vocs_H2",
  "margin-top: 3rem",
  ".vocs_DocsLayout_sidebar",
  "prefers-reduced-motion",
]) {
  assert.match(presentationCss, new RegExp(token.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
}
assert.match(config, /zoom-images\.js/);
assert.match(config, /zoom-images\.js" defer><\/script><script src="\/zoom-mermaid\.js/);
for (const token of [".vocs_Content .jincubator-image-zoom", ".jincubator-image-zoom__indicator", "cursor: zoom-in"]) {
  assert.match(presentationCss, new RegExp(token.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
}
for (const token of ["width: 100dvw", "height: 100dvh", "max-width: none", "max-height: none", "inset: 0"]) {
  assert.match(presentationCss, new RegExp(token.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
}
const imageZoomScript = fs.readFileSync("docs/public/zoom-images.js", "utf8");
for (const token of ["showModal", "Open the .* at full size", "vocs:route-update", ".vocs_Content", 'event.key === "Escape"', "event.target === media"]) {
  assert.match(imageZoomScript, new RegExp(token));
}
const imageZoomTree = {
  type: "root",
  children: [{
    type: "mdxJsxFlowElement",
    name: "img",
    attributes: [
      { type: "mdxJsxAttribute", name: "src", value: "/assets/example.png" },
      { type: "mdxJsxAttribute", name: "alt", value: "Example image" },
    ],
    children: [],
  }],
};
remarkImageZoom()(imageZoomTree);
assert.equal(imageZoomTree.children[0].name, "button");
assert.equal(imageZoomTree.children[0].attributes.find((attribute) => attribute.name === "aria-label").value, "Open full-size image: Example image");

const zoomImage = fs.readFileSync("docs/public/components/ZoomImage.tsx", "utf8");
assert.doesNotMatch(zoomImage, /react-medium-image-zoom/);
assert.match(zoomImage, /className="jincubator-image-zoom"/);
assert.match(zoomImage, /jincubator-image-zoom__indicator/);

const mermaidZoom = fs.readFileSync("docs/public/zoom-mermaid.js", "utf8");
assert.match(mermaidZoom, /JincubatorImageZoom/);
assert.doesNotMatch(mermaidZoom, /console\.log|rm-zoom-img|position: fixed/);

for (const page of [
  "docs/pages/work/salus.mdx",
  "docs/pages/work/digital-banking.mdx",
  "docs/pages/work/building-polkadot-parachain-eave.mdx",
  "docs/pages/work/defi-protocol-engineering-kanga.mdx",
]) {
  assert.doesNotMatch(
    fs.readFileSync(page, "utf8"),
    /Open the (?:full-size|runtime|technical).+?(?:at )?full size/i,
    `${page} must rely on click-to-zoom rather than a redundant full-size link`,
  );
}
for (const [page, key, componentPath] of [
  ["docs/pages/index.mdx", "home", "../components/LandingPage"],
  ["docs/pages/work/index.mdx", "work", "../../components/LandingPage"],
  ["docs/pages/research/index.mdx", "research", "../../components/LandingPage"],
  ["docs/pages/architecture/index.mdx", "architecture", "../../components/LandingPage"],
  ["docs/pages/writing/index.mdx", "writing", "../../components/LandingPage"],
  ["docs/pages/about/index.mdx", "about", "../../components/LandingPage"],
  ["docs/pages/archive/index.mdx", "archive", "../../components/LandingPage"],
]) {
  const source = fs.readFileSync(page, "utf8");
  assert.ok(source.includes(`import { LandingPage } from "${componentPath}";`));
  assert.match(source, new RegExp(`<LandingPage page="${key}" />`));
}
assert.deepEqual(validator.findForbidden("Ethereum block 3000000"), []);
assert.deepEqual(validator.findForbidden("PHASE1=/home/ubuntu/ceremony.ptau"), ["local filesystem path"]);
assert.equal(validator.readingTimeMinutes("word ".repeat(1_125)), 5);
assert.deepEqual(validator.validatePublications(process.cwd()), []);

const manifests = fs.readdirSync("docs/public/data/publications").filter((name) => name.endsWith(".json"));
assert.equal(manifests.length, 28);
assert.equal(manifests.includes("collection-portfolio-strategy-competitor-analysis.json"), false);
assert.equal(manifests.filter((name) => name === "work-salus.json").length, 1);
assert.equal(
  manifests.includes("research-cryptographic-and-mathematical-primitives.json"),
  true,
);

const salusManifestPath = path.join("docs/public/data/publications", "work-salus.json");
const salusManifest = JSON.parse(fs.readFileSync(salusManifestPath, "utf8"));
assert.equal(salusManifest.schema_version, 2);
for (const privateField of ["source", "reviews", "lifecycle_state", "publication_status", "publication_date"]) {
  assert.equal(Object.hasOwn(salusManifest, privateField), false, `${privateField} must remain private`);
}
assert.equal(salusManifest.route, "/salus");
assert.deepEqual(salusManifest.artifact.compatibility_routes, ["/work/salus"]);
for (const [manifestName, route, alias] of [
  ["collection-salus-whitepaper.json", "/salus/whitepaper", "/writing/salus-whitepaper"],
  ["architecture-salus-trading-and-solving-infrastructure.json", "/salus/architecture", "/architecture/salus-trading-and-solving-infrastructure"],
]) {
  const manifest = JSON.parse(fs.readFileSync(path.join("docs/public/data/publications", manifestName), "utf8"));
  assert.equal(manifest.route, route);
  assert.equal(manifest.artifact.publication_availability, "visible_draft");
  assert.deepEqual(manifest.artifact.compatibility_routes, [alias]);
  const page = manifest.outputs.find((output) => output.media_type === "text/mdx");
  assert.match(fs.readFileSync(page.destination, "utf8"), /\*\*Draft\*\*/);
}

const salusPage = fs.readFileSync("docs/pages/salus.mdx", "utf8");
assert.match(salusPage, /Generated canonical editorial projection/);
assert.doesNotMatch(salusPage, /KNOWLEDGE BASE REVIEW|Provisional production|github\.com\/jincubator\/knowledge-base|\/Users\//i);
for (const [canonical, alias] of [
  ["docs/pages/salus.mdx", "docs/pages/work/salus.mdx"],
  ["docs/pages/salus/whitepaper.mdx", "docs/pages/writing/salus-whitepaper.mdx"],
  ["docs/pages/salus/architecture.mdx", "docs/pages/architecture/salus-trading-and-solving-infrastructure.mdx"],
]) assert.deepEqual(fs.readFileSync(alias), fs.readFileSync(canonical), `${alias} must be byte-identical to ${canonical}`);

const landingPage = fs.readFileSync("docs/components/LandingPage.tsx", "utf8");
assert.match(landingPage, /href: "\/salus"/);

const primitivesPage = fs.readFileSync("docs/pages/research/primitives/intro.mdx", "utf8");
assert.match(primitivesPage, /^# Cryptographic and Mathematical Primitives$/m);
for (const heading of [
  "Reference implementations and primitive families",
  "Signature schemes in consensus protocols",
  "Light clients",
  "Fraud proofs",
  "Fast Fourier transforms",
  "Weak subjectivity",
]) {
  assert.match(primitivesPage, new RegExp(`^## ${heading}$`, "m"));
}
assert.doesNotMatch(primitivesPage, /\/Users\/|github\.com\/jincubator\/knowledge-base/i);
for (const route of [
  "fast-fourier-transforms",
  "fraud-proofs",
  "light-clients",
  "primitives",
  "signatures",
  "weak-subjectivity",
]) {
  assert.equal(fs.existsSync(`docs/pages/research/primitives/${route}.mdx`), true);
}

const fixtureRoot = fs.mkdtempSync(path.join(os.tmpdir(), "jincubator-publication-"));
try {
  const pagePath = path.join(fixtureRoot, "docs/pages/work/salus.mdx");
  const manifestPath = path.join(fixtureRoot, "docs/public/data/publications/work-salus.json");
  fs.mkdirSync(path.dirname(pagePath), { recursive: true });
  fs.mkdirSync(path.dirname(manifestPath), { recursive: true });
  const page = `---\ntitle: "Salus"\ndescription: "Test"\n---\n\n{/* Generated canonical editorial projection. Do not edit directly. */}\n\n# Salus\n`;
  const manifest = {
    schema_version: 2,
    artifact: { id: "work/salus", type: "work", title: "Salus" },
    route: "/work/salus",
    format: "vocs-mdx",
    presentation: { label: "Work", reading_time_minutes: null },
    generator: { name: "jincubator-publication", version: 4 },
    outputs: [{ destination: "docs/pages/work/salus.mdx", media_type: "text/mdx", sha256: crypto.createHash("sha256").update(page).digest("hex") }],
    provenance_notice: "Generated editorial projection; do not edit the distribution copy directly.",
  };
  fs.writeFileSync(pagePath, page);
  fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
  assert.deepEqual(validator.validatePublicationByArtifact(fixtureRoot, "work/salus"), []);
  manifest.source = { commit: "a".repeat(40) };
  fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
  assert.ok(validator.validatePublicationByArtifact(fixtureRoot, "work/salus").some((issue) => issue.includes("leaks internal source")));
} finally {
  fs.rmSync(fixtureRoot, { recursive: true, force: true });
}
