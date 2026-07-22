import assert from "node:assert/strict";
import crypto from "node:crypto";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";


const validator = await import("./validate-site.mjs").catch(() => null);
assert.ok(validator, "validate-site.mjs must exist");

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

[Architecture](https://www.jincubator.com/architecture/trading-systems/salus).
`;
  const manifest = {
    schema_version: 1,
    artifact: { id: "work/salus", type: "work", title: "Salus" },
    route: "/work/salus",
    format: "vocs-mdx",
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
    generator: { name: "knowledge-base-publication", version: 1 },
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

  assert.deepEqual(validator.validateSalusPublication(fixtureRoot), []);

  fs.appendFileSync(pagePath, "\nmanual edit\n");
  assert.ok(
    validator.validateSalusPublication(fixtureRoot).some((issue) =>
      issue.includes("MDX SHA-256 does not match manifest"),
    ),
  );
  fs.writeFileSync(pagePath, page);

  const mutations = [
    ["schema_version", (value) => { value.schema_version = 2; }],
    ["artifact identity", (value) => { value.artifact.id = "work/other"; }],
    ["route", (value) => { value.route = "/work/other"; }],
    ["source", (value) => { value.source.path = "work/other/README.md"; }],
    ["source commit", (value) => { value.source.commit = "A".repeat(40); }],
    ["output", (value) => { value.outputs[0].destination = "docs/pages/work/other.mdx"; }],
    ["reviews", (value) => { value.reviews.claim = "Needs Revision"; }],
    ["publication_date", (value) => { value.publication_date = "2026-07-22"; }],
    ["generator", (value) => { value.generator.version = 2; }],
    ["fields", (value) => { value.evidence_location = "private"; }],
    ["private reference", (value) => { value.provenance_notice = "johnwhitton/prep"; }],
  ];
  for (const [label, mutate] of mutations) {
    const invalid = structuredClone(manifest);
    mutate(invalid);
    fs.writeFileSync(manifestPath, `${JSON.stringify(invalid, null, 2)}\n`);
    assert.ok(
      validator.validateSalusPublication(fixtureRoot).some((issue) =>
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
