import assert from "node:assert/strict";
import crypto from "node:crypto";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";


const validator = await import("./validate-site.mjs").catch(() => null);
assert.ok(validator, "validate-site.mjs must exist");
const vocsLinkSource = fs.readFileSync(
  path.join(process.cwd(), "node_modules/vocs/_lib/app/components/Link.js"),
  "utf8",
);
assert.doesNotMatch(
  vocsLinkSource,
  /_jsx\(RouterLink,\s*\{\s*\.\.\.props,/,
  "Vocs internal links must not forward hideExternalIcon to the DOM",
);
assert.equal(
  validator.readingTimeMinutes("word ".repeat(1_125)),
  5,
  "reading time must use max(1, ceil(words / 225))",
);
assert.equal(
  typeof validator.validatePublications,
  "function",
  "the validator must validate the complete publication handoff",
);
assert.deepEqual(
  validator.topNavigation(`
    topNav: [
      { text: "Work", link: "/work/intro" },
      { text: "Articles", link: "/articles/intro" },
    ],
    sidebar: {},
  `),
  ["Work", "Articles"],
  "top navigation must be objectively readable from the site config",
);

assert.deepEqual(validator.findForbidden(`<a href="/${"Users"}/name/repo">x</a>`), [
  "local filesystem path",
]);
assert.deepEqual(validator.findForbidden("Ethereum block 3000000"), []);
assert.deepEqual(validator.findForbidden("EAVE reported approximately $300,000"), [
  "unsupported EAVE precision",
]);
assert.deepEqual(validator.findForbidden("without provisioning up front capital"), [
  "unqualified capital claim",
]);
assert.deepEqual(validator.findForbidden("- **Owner:** John Whitton"), [
  "internal portfolio metadata",
]);
assert.deepEqual(validator.findForbidden("Registry version `2026-07-21.1`"), [
  "registry presentation",
]);
assert.deepEqual(validator.findForbidden('<HomePage.Button href="/work/intro">Work</HomePage.Button>'), [
  "duplicate homepage navigation",
]);
assert.deepEqual(validator.findForbidden("**Next:** Review the project"), [
  "dashboard-style call to action",
]);
assert.deepEqual(validator.findForbidden("The retained evidence is dated and limited."), []);

const route = "/work/intro";
const validHtml = `<!doctype html><html><head>
  <title>Work — Jincubator</title>
  <meta name="description" content="Selected current work.">
  <link rel="canonical" href="https://www.jincubator.com/work/intro">
  <meta property="og:url" content="https://www.jincubator.com/work/intro">
  <meta property="og:image" content="https://www.jincubator.com/images/jincubator.png">
</head><body><h1>Work</h1><h2 id="current">Current</h2>
  <img src="/images/jincubator.png" alt="Jincubator infinity logo">
  <a href="#current">Current work</a>
</body></html>`;
assert.deepEqual(validator.validateHtml(validHtml, route, true), []);

const invalidHtml = validHtml
  .replace("<h1>Work</h1>", "<h1>Work</h1><h1>Again</h1>")
  .replace("Jincubator infinity logo", "Logo")
  .replace("#current", "#missing");
assert.deepEqual(validator.validateHtml(invalidHtml, route, true), [
  "/work/intro: expected one H1, found 2",
  '/work/intro: missing fragment "missing"',
  '/work/intro: image alt text is not meaningful: "Logo"',
]);

const linkRoot = fs.mkdtempSync(path.join(os.tmpdir(), "built-links-"));
try {
  const target = path.join(linkRoot, "target/index.html");
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, '<h1>Target</h1><h2 id="present">Present</h2>');
  assert.deepEqual(
    validator.validateLinks(
      linkRoot,
      "/source",
      '<a href="/target#present">ok</a><a href="/target#missing">bad</a><a href="/missing">gone</a>',
    ),
    [
      "/source: missing fragment /target#missing",
      "/source: missing internal target /missing",
    ],
  );
} finally {
  fs.rmSync(linkRoot, { recursive: true, force: true });
}

const fixtureRoot = fs.mkdtempSync(path.join(os.tmpdir(), "salus-publication-"));
try {
  const sourceCommit = "a".repeat(40);
  const pagePath = path.join(fixtureRoot, "docs/pages/work/salus.mdx");
  const manifestPath = path.join(
    fixtureRoot,
    "docs/public/data/publications/work-salus.json",
  );
  const page = `---
title: "Salus — Active Trading-System Research"
description: "A bounded Salus case study."
---

{/* Generated from https://github.com/jincubator/knowledge-base/blob/${sourceCommit}/work/salus/README.md. Do not edit directly. */}

# Salus

Public introduction.

## Problem

Problem.

## Approach

Approach.

## What John built

Contribution.

## Technical challenges

Challenges.

## Retained results

Results.

## Limitations

Limitations.

## Go deeper

[Architecture](/architecture/trading-systems/salus).
[Current work](/work/salus).
`;
  const manifest = {
    schema_version: 1,
    artifact: { id: "work/salus", type: "work", title: "Salus" },
    route: "/work/salus",
    format: "vocs-mdx",
    presentation: { label: "Work", reading_time_minutes: null },
    source: {
      repository: "https://github.com/jincubator/knowledge-base",
      path: "work/salus/README.md",
      commit: sourceCommit,
      revision_date: "2026-07-22",
    },
    lifecycle_state: "ready to publish",
    publication_status: "not published",
    reviews: {
      technical: "Approved",
      claim: "Approved",
      editorial: "Approved",
    },
    generator: { name: "knowledge-base-publication", version: 2 },
    outputs: [
      {
        destination: "docs/pages/work/salus.mdx",
        media_type: "text/mdx",
        sha256: crypto.createHash("sha256").update(page).digest("hex"),
      },
    ],
    provenance_notice:
      "Generated from the canonical Knowledge Base source; do not edit the distribution copy directly.",
    publication_date: null,
  };
  fs.mkdirSync(path.dirname(pagePath), { recursive: true });
  fs.mkdirSync(path.dirname(manifestPath), { recursive: true });
  fs.writeFileSync(pagePath, page);
  fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);

  assert.deepEqual(
    validator.validatePublicationByArtifact(fixtureRoot, "work/salus"),
    [],
  );

  const absoluteInternalLinkPage = page.replace(
    "[Architecture](/architecture/trading-systems/salus)",
    "[Architecture](https://www.jincubator.com/architecture/trading-systems/salus)",
  );
  const absoluteInternalLinkManifest = structuredClone(manifest);
  absoluteInternalLinkManifest.outputs[0].sha256 = crypto
    .createHash("sha256")
    .update(absoluteInternalLinkPage)
    .digest("hex");
  fs.writeFileSync(pagePath, absoluteInternalLinkPage);
  fs.writeFileSync(
    manifestPath,
    `${JSON.stringify(absoluteInternalLinkManifest, null, 2)}\n`,
  );
  assert.ok(
    validator.validatePublicationByArtifact(fixtureRoot, "work/salus").some((issue) =>
      issue.includes("internal Jincubator links must be site-relative"),
    ),
  );
  fs.writeFileSync(pagePath, page);
  fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);

  fs.appendFileSync(pagePath, "\nmanual edit\n");
  assert.ok(
    validator.validatePublicationByArtifact(fixtureRoot, "work/salus").some((issue) =>
      issue.includes("MDX SHA-256 does not match manifest"),
    ),
  );
  fs.writeFileSync(pagePath, page);

  const sectionMutations = [
    page.replace("## Approach", "## Method"),
    page.replace(
      "## Problem\n\nProblem.\n\n## Approach\n\nApproach.",
      "## Approach\n\nApproach.\n\n## Problem\n\nProblem.",
    ),
    page.replace("\n## Approach\n\nApproach.\n", ""),
    page.replace("\n## Go deeper\n", "\n## Evidence\n\nPrivate.\n\n## Go deeper\n"),
  ];
  for (const invalidPage of sectionMutations) {
    const invalid = structuredClone(manifest);
    invalid.outputs[0].sha256 = crypto
      .createHash("sha256")
      .update(invalidPage)
      .digest("hex");
    fs.writeFileSync(pagePath, invalidPage);
    fs.writeFileSync(manifestPath, `${JSON.stringify(invalid, null, 2)}\n`);
    assert.ok(
      validator.validatePublicationByArtifact(fixtureRoot, "work/salus").some((issue) =>
        issue.includes("public sections"),
      ),
      "expected exact ordered public-section validation issue",
    );
  }

  const absolutePaths = [
    "/home/alice/private-evidence",
    String.raw`C:\Users\alice\private-evidence`,
    String.raw`\\server\share\private-evidence`,
    "file:///tmp/private-evidence",
  ];
  for (const absolutePath of absolutePaths) {
    const invalidPage = `${page}\n${absolutePath}\n`;
    const invalid = structuredClone(manifest);
    invalid.outputs[0].sha256 = crypto
      .createHash("sha256")
      .update(invalidPage)
      .digest("hex");
    fs.writeFileSync(pagePath, invalidPage);
    fs.writeFileSync(manifestPath, `${JSON.stringify(invalid, null, 2)}\n`);
    assert.ok(
      validator.validatePublicationByArtifact(fixtureRoot, "work/salus").some((issue) =>
        issue.includes("absolute filesystem path"),
      ),
      `expected absolute filesystem path issue for ${absolutePath}`,
    );
  }

  fs.writeFileSync(pagePath, page);
  fs.writeFileSync(manifestPath, "null\n");
  assert.deepEqual(validator.validatePublicationByArtifact(fixtureRoot, "work/salus"), [
    "Salus publication manifest must be an object",
  ]);

  const mutations = [
    ["schema_version", (value) => { value.schema_version = 2; }],
    ["artifact identity", (value) => { value.artifact.id = "work/other"; }],
    ["route", (value) => { value.route = "/work/other"; }],
    ["source", (value) => { value.source.path = "work/other/README.md"; }],
    ["source commit", (value) => { value.source.commit = "A".repeat(40); }],
    ["output", (value) => { value.outputs[0].destination = "docs/pages/work/other.mdx"; }],
    ["reviews", (value) => { value.reviews.claim = "Needs Revision"; }],
    ["publication_date", (value) => { value.publication_date = "2026-07-22"; }],
    ["generator", (value) => { value.generator.version = 1; }],
    ["fields", (value) => { value.evidence_location = "private"; }],
    ["private reference", (value) => { value.provenance_notice = "johnwhitton/prep"; }],
  ];
  for (const [label, mutate] of mutations) {
    const invalid = structuredClone(manifest);
    mutate(invalid);
    fs.writeFileSync(manifestPath, `${JSON.stringify(invalid, null, 2)}\n`);
    assert.ok(
      validator.validatePublicationByArtifact(fixtureRoot, "work/salus").some((issue) =>
        issue.includes(label),
      ),
      `expected ${label} validation issue`,
    );
  }

  assert.equal(
    validator.countCanonicalUrl(
      [
        '<link rel="canonical" href="https://www.jincubator.com/work/salus">',
        '<link rel="canonical" href="https://www.jincubator.com/architecture/trading-systems/salus">',
      ],
      "https://www.jincubator.com/work/salus",
    ),
    1,
  );
  assert.equal(
    validator.countCanonicalUrl(
      [
        '<link rel="canonical" href="https://www.jincubator.com/work/salus">',
        '<link rel="canonical" href="https://www.jincubator.com/work/salus">',
      ],
      "https://www.jincubator.com/work/salus",
    ),
    2,
  );
} finally {
  fs.rmSync(fixtureRoot, { recursive: true, force: true });
}

assert.deepEqual(
  validator.validatePublications(process.cwd()),
  [],
  "the tracked ten-package handoff must pass generalized validation",
);

const handoffRoot = fs.mkdtempSync(path.join(os.tmpdir(), "publication-handoff-"));
try {
  const handoffFiles = [
    "docs/pages/work/salus.mdx",
    "docs/pages/work/digital-banking.mdx",
    "docs/pages/work/prototypes.mdx",
    "docs/pages/research/solving/solving.mdx",
    "docs/pages/research/financial-infrastructure/settlement/intro.mdx",
    "docs/pages/research/defi-protocol-engineering/intro.mdx",
    "docs/pages/architecture/trading-systems/solver.mdx",
    "docs/pages/architecture/financial-infrastructure/settlement.mdx",
    "docs/pages/architecture/defi-systems/intents.mdx",
    "docs/pages/articles/solving-arbitrage-market-making.mdx",
    "docs/public/data/publications/work-salus.json",
    "docs/public/data/publications/work-digital-banking.json",
    "docs/public/data/publications/work-intent-systems-prototypes.json",
    "docs/public/data/publications/research-high-performance-route-evaluation.json",
    "docs/public/data/publications/research-durable-financial-settlement.json",
    "docs/public/data/publications/research-intent-based-execution.json",
    "docs/public/data/publications/architecture-trading-system-execution-pipelines.json",
    "docs/public/data/publications/architecture-durable-settlement-control-planes.json",
    "docs/public/data/publications/architecture-intent-execution-boundaries.json",
    "docs/public/data/publications/collection-solving-arbitrage-market-making.json",
  ];
  for (const relative of handoffFiles) {
    const destination = path.join(handoffRoot, relative);
    fs.mkdirSync(path.dirname(destination), { recursive: true });
    fs.copyFileSync(path.join(process.cwd(), relative), destination);
  }
  const articleManifestPath = path.join(
    handoffRoot,
    "docs/public/data/publications/collection-solving-arbitrage-market-making.json",
  );
  const articleManifest = JSON.parse(fs.readFileSync(articleManifestPath, "utf8"));
  articleManifest.source.commit = "b".repeat(40);
  fs.writeFileSync(articleManifestPath, `${JSON.stringify(articleManifest, null, 2)}\n`);
  assert.ok(
    validator.validatePublications(handoffRoot).includes(
      "publication manifests must identify one Knowledge Base source commit",
    ),
    "mixed source commits must fail the handoff",
  );
} finally {
  fs.rmSync(handoffRoot, { recursive: true, force: true });
}
