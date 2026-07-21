import assert from "node:assert/strict";


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
