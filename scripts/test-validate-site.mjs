import assert from "node:assert/strict";
import crypto from "node:crypto";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const validator = await import("./validate-site.mjs");
const presentation = await import("../docs/presentation-navigation.mjs");
const { remarkImageZoom } = await import("../remark-image-zoom.js");
const expectedNavigation = ["Work", "Salus", "Research", "Architecture", "Writing", "About"];
const config = fs.readFileSync(path.join(process.cwd(), "vocs.config.ts"), "utf8");

assert.deepEqual(validator.topNavigation(config), expectedNavigation);
assert.deepEqual(presentation.primaryNavigation, expectedNavigation);
assert.match(config, /sidebar:\s*presentationSidebar,/);
assert.deepEqual(
  presentation.presentationSidebar.map((group) => group.text),
  ["Work", "Research", "Architecture", "Writing", "About", "Archive"],
);
for (const group of presentation.presentationSidebar) {
  assert.equal(group.collapsed, true, `${group.text} must be collapsible`);
  assert.ok(group.items?.length, `${group.text} must contain navigable items`);
}
const publicNavigationRoutes = presentation.presentationSidebar.flatMap(function collect(item) {
  return [item.link, ...(item.items ?? []).flatMap(collect)].filter(Boolean);
});
for (const manifestName of fs.readdirSync("docs/public/data/publications").filter((name) => name.endsWith(".json"))) {
  const manifest = JSON.parse(fs.readFileSync(path.join("docs/public/data/publications", manifestName), "utf8"));
  assert.ok(publicNavigationRoutes.includes(manifest.route), `${manifest.artifact.id} must be discoverable in the presentation sidebar`);
}
assert.equal(publicNavigationRoutes.includes("/writing/portfolio-strategy-competitor-analysis"), false);
const presentationCss = fs.readFileSync("docs/presentation.css", "utf8");
for (const token of ["#f7f5ef", "Georgia", ".vocs_DocsLayout_sidebar", "prefers-reduced-motion"]) {
  assert.match(presentationCss, new RegExp(token.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
}
assert.match(config, /zoom-images\.js/);
for (const token of [".vocs_Content .jincubator-image-zoom", ".jincubator-image-zoom__indicator", "cursor: zoom-in"]) {
  assert.match(presentationCss, new RegExp(token.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
}
for (const token of ["width: 100dvw", "height: 100dvh", "max-width: none", "max-height: none", "inset: 0"]) {
  assert.match(presentationCss, new RegExp(token.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
}
const imageZoomScript = fs.readFileSync("docs/public/zoom-images.js", "utf8");
for (const token of ["showModal", "Open the .* at full size", "vocs:route-update", ".vocs_Content", 'event.key === "Escape"', "event.target === image"]) {
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
assert.equal(manifests.length, 25);
assert.equal(manifests.includes("collection-portfolio-strategy-competitor-analysis.json"), false);
assert.equal(manifests.filter((name) => name === "work-salus.json").length, 1);

const salusManifestPath = path.join("docs/public/data/publications", "work-salus.json");
const salusManifest = JSON.parse(fs.readFileSync(salusManifestPath, "utf8"));
assert.equal(salusManifest.schema_version, 2);
for (const privateField of ["source", "reviews", "lifecycle_state", "publication_status", "publication_date"]) {
  assert.equal(Object.hasOwn(salusManifest, privateField), false, `${privateField} must remain private`);
}

const salusPage = fs.readFileSync("docs/pages/work/salus.mdx", "utf8");
assert.match(salusPage, /Generated canonical editorial projection/);
assert.doesNotMatch(salusPage, /KNOWLEDGE BASE REVIEW|Provisional production|github\.com\/jincubator\/knowledge-base|\/Users\//i);

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
