#!/usr/bin/env node
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";


const SITE_URL = "https://www.jincubator.com";
const REGISTRY_DIGEST = "e9bbb94305ef988e480b6c133a3595700e6598ec76c9485f39d28e3a05bcad90";
const ACTIVE_ROUTES = [
  "/",
  "/work/intro",
  "/work/salus",
  "/research/intro",
  "/architecture/intro",
  "/prototypes/intro",
  "/archive/intro",
  "/engage/intro",
];
const CHECKED_ROUTES = [
  ...ACTIVE_ROUTES,
  "/product/intro",
  "/product/solving/overview",
  "/product/solving/collectors",
  "/product/solving/routes",
  "/product/solving/strategies",
  "/product/solving/protocols",
  "/product/solving/design",
  "/product/solving/design-0-2",
  "/product/solving/design-1-0",
  "/product/solving/design-2-0",
  "/product/solving/implementation-original",
  "/product/solving/roadmap",
  "/product/solving/intentsolve/1inch",
  "/product/solving/intentsolve/cowswap",
  "/product/solving/intentsolve/uniswapx",
  "/proposals/Unite",
  "/partnerships/intro",
  "/research/solving/tycho1inchNOL",
  "/research/solving/solving",
];
const SALUS_MANIFEST_FIELDS = [
  "schema_version",
  "artifact",
  "route",
  "format",
  "source",
  "lifecycle_state",
  "publication_status",
  "reviews",
  "generator",
  "outputs",
  "provenance_notice",
  "publication_date",
];
const SALUS_ARTIFACT_FIELDS = ["id", "type", "title"];
const SALUS_SOURCE_FIELDS = ["repository", "path", "commit", "revision_date"];
const SALUS_REVIEW_FIELDS = ["technical", "claim", "editorial"];
const SALUS_GENERATOR_FIELDS = ["name", "version"];
const SALUS_OUTPUT_FIELDS = ["destination", "media_type", "sha256"];
const PRIVATE_PUBLICATION_REFERENCE =
  /(?:johnwhitton\/prep|\/prep\/|evidence_location|private_reviewer_notes|raw_benchmark_logs|sensitive_strategy)/i;


export function findForbidden(text) {
  const checks = [
    ["local filesystem path", /\/(?:Users|private)\//],
    ["unqualified capital claim", /no up[- ]?front capital|without [^\n.]{0,80}up[- ]?front capital|eliminates up[- ]?front capital/i],
    ["unsupported execution-success claim", /100% execution success rate in production testing/i],
    ["unsupported EAVE precision", /EAVE[^\n]{0,100}(?:(?:\$\s*)?300,?000|\$?300k)|(?:(?:\$\s*)?300,?000|\$?300k)[^\n]{0,100}EAVE/i],
    ["internal portfolio metadata", /(?:\*\*|<strong>)(?:owner(?: and contact)?|primary contributor|contributor|maturity|status|lifecycle|evidence(?: date| cutoff)?|relationship|engagement model|registry version|updated|current phase):(?:\*\*|<\/strong>)/i],
    ["registry presentation", /\bregistry (?:version|digest)\b/i],
    ["duplicate homepage navigation", /<HomePage\.Button\b[^>]*\bhref="\/(?:work\/intro|research\/intro|architecture\/intro|prototypes\/intro|archive\/intro|engage\/intro)"[^>]*>/i],
    ["dashboard-style call to action", /\*\*Next:\*\*/i],
  ];
  return checks.filter(([, pattern]) => pattern.test(text)).map(([label]) => label);
}


function checkExactKeys(value, expected, label, issues) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    issues.push(`Salus publication ${label} must be an object`);
    return false;
  }
  const actual = Object.keys(value).sort();
  const wanted = [...expected].sort();
  if (JSON.stringify(actual) !== JSON.stringify(wanted)) {
    issues.push(`Salus publication ${label} fields differ`);
    return false;
  }
  return true;
}


export function validateSalusPublication(root) {
  const issues = [];
  const pagePath = path.join(root, "docs/pages/work/salus.mdx");
  const manifestPath = path.join(
    root,
    "docs/public/data/publications/work-salus.json",
  );
  if (!fs.existsSync(pagePath)) issues.push("Salus publication MDX is missing");
  if (!fs.existsSync(manifestPath)) issues.push("Salus publication manifest is missing");
  if (issues.length) return issues;

  const pageBytes = fs.readFileSync(pagePath);
  const page = pageBytes.toString("utf8");
  let manifest;
  try {
    manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
  } catch {
    return ["Salus publication manifest is not valid JSON"];
  }

  checkExactKeys(manifest, SALUS_MANIFEST_FIELDS, "manifest", issues);
  checkExactKeys(manifest.artifact, SALUS_ARTIFACT_FIELDS, "artifact", issues);
  checkExactKeys(manifest.source, SALUS_SOURCE_FIELDS, "source", issues);
  checkExactKeys(manifest.reviews, SALUS_REVIEW_FIELDS, "reviews", issues);
  checkExactKeys(manifest.generator, SALUS_GENERATOR_FIELDS, "generator", issues);

  if (manifest.schema_version !== 1)
    issues.push("Salus publication schema_version must be 1");
  if (
    manifest.artifact?.id !== "work/salus" ||
    manifest.artifact?.type !== "work" ||
    manifest.artifact?.title !== "Salus"
  ) issues.push("Salus publication artifact identity is invalid");
  if (manifest.route !== "/work/salus")
    issues.push("Salus publication route must be /work/salus");
  if (manifest.format !== "vocs-mdx")
    issues.push("Salus publication format must be vocs-mdx");
  if (
    manifest.source?.repository !== "https://github.com/jincubator/knowledge-base" ||
    manifest.source?.path !== "work/salus/README.md" ||
    !/^\d{4}-\d{2}-\d{2}$/.test(manifest.source?.revision_date ?? "")
  ) issues.push("Salus publication source is invalid");
  if (!/^[0-9a-f]{40,64}$/.test(manifest.source?.commit ?? ""))
    issues.push("Salus publication source commit is invalid");
  if (manifest.lifecycle_state !== "ready to publish")
    issues.push("Salus publication lifecycle_state must be ready to publish");
  if (manifest.publication_status !== "not published")
    issues.push("Salus publication publication_status must be not published");
  if (
    manifest.reviews?.technical !== "Approved" ||
    manifest.reviews?.claim !== "Approved" ||
    manifest.reviews?.editorial !== "Approved"
  ) issues.push("Salus publication reviews must be Approved");
  if (
    manifest.generator?.name !== "knowledge-base-publication" ||
    manifest.generator?.version !== 1
  ) issues.push("Salus publication generator is invalid");
  if (manifest.publication_date !== null)
    issues.push("Salus publication publication_date must be null");
  if (
    manifest.provenance_notice !==
      "Generated from the canonical Knowledge Base source; do not edit the distribution copy directly."
  ) issues.push("Salus publication provenance notice is invalid");

  const output = Array.isArray(manifest.outputs) && manifest.outputs.length === 1
    ? manifest.outputs[0]
    : null;
  if (!output) {
    issues.push("Salus publication output must contain exactly one entry");
  } else {
    checkExactKeys(output, SALUS_OUTPUT_FIELDS, "output", issues);
    if (
      output.destination !== "docs/pages/work/salus.mdx" ||
      output.media_type !== "text/mdx" ||
      !/^[0-9a-f]{64}$/.test(output.sha256 ?? "")
    ) issues.push("Salus publication output is invalid");
    const digest = crypto.createHash("sha256").update(pageBytes).digest("hex");
    if (output.sha256 !== digest)
      issues.push("Salus publication MDX SHA-256 does not match manifest");
  }

  const expectedNotice =
    `{/* Generated from ${manifest.source?.repository}/blob/` +
    `${manifest.source?.commit}/${manifest.source?.path}. Do not edit directly. */}`;
  if (!page.includes(expectedNotice))
    issues.push("Salus publication generated notice does not match manifest");

  const serialized = JSON.stringify(manifest);
  for (const label of findForbidden(page))
    issues.push(`Salus publication MDX: ${label}`);
  for (const label of findForbidden(serialized))
    issues.push(`Salus publication manifest: ${label}`);
  if (PRIVATE_PUBLICATION_REFERENCE.test(page) || PRIVATE_PUBLICATION_REFERENCE.test(serialized))
    issues.push("Salus publication contains a private reference");
  return issues;
}


export function countCanonicalUrl(htmlDocuments, expectedUrl) {
  return htmlDocuments.filter((html) =>
    html.match(/<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"/i)?.[1] === expectedUrl
  ).length;
}


function attribute(tag, name) {
  return tag.match(new RegExp(`\\b${name}="([^"]*)"`, "i"))?.[1];
}


function unescapeHtml(value) {
  return value.replaceAll("&amp;", "&").replaceAll("&quot;", '"');
}


function anchors(html) {
  return [...html.matchAll(/<a\b[^>]*\bhref="([^"]+)"[^>]*>/gi)].map((match) => unescapeHtml(match[1]));
}


export function validateHtml(html, route, requireMetadata) {
  const issues = [];
  const h1Count = (html.match(/<h1\b/gi) ?? []).length;
  if (h1Count !== 1) issues.push(`${route}: expected one H1, found ${h1Count}`);

  if (requireMetadata) {
    const expected = new URL(route, SITE_URL).toString();
    const title = html.match(/<title>([^<]+)<\/title>/i)?.[1]?.trim();
    const description = html.match(/<meta\b[^>]*name="description"[^>]*content="([^"]+)"/i)?.[1];
    const canonical = html.match(/<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"/i)?.[1];
    const ogUrl = html.match(/<meta\b[^>]*property="og:url"[^>]*content="([^"]+)"/i)?.[1];
    const ogImage = html.match(/<meta\b[^>]*property="og:image"[^>]*content="([^"]+)"/i)?.[1];
    if (!title) issues.push(`${route}: missing title`);
    if (!description) issues.push(`${route}: missing description`);
    if (canonical !== expected) issues.push(`${route}: canonical is ${canonical ?? "missing"}; expected ${expected}`);
    if (ogUrl !== expected) issues.push(`${route}: og:url is ${ogUrl ?? "missing"}; expected ${expected}`);
    if (!ogImage?.startsWith(`${SITE_URL}/`)) issues.push(`${route}: Open Graph image is not owned`);
  }

  for (const href of anchors(html).filter((href) => href.startsWith("#"))) {
    const id = decodeURIComponent(href.slice(1));
    if (id && !new RegExp(`\\bid="${id.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"`).test(html))
      issues.push(`${route}: missing fragment "${id}"`);
  }

  for (const match of html.matchAll(/<img\b[^>]*>/gi)) {
    const alt = attribute(match[0], "alt")?.trim() ?? "";
    if (!alt || /^(?:image|logo|architecture|diagram|screenshot|photo)$/i.test(alt))
      issues.push(`${route}: image alt text is not meaningful: "${alt}"`);
  }
  return issues;
}


function walk(directory, excluded = new Set()) {
  if (!fs.existsSync(directory)) return [];
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    if (excluded.has(entry.name)) return [];
    const resolved = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(resolved, excluded) : [resolved];
  });
}


function routeFile(dist, route) {
  return route === "/" ? path.join(dist, "index.html") : path.join(dist, route.slice(1), "index.html");
}


function targetFile(dist, pathname) {
  const decoded = decodeURIComponent(pathname);
  if (path.extname(decoded)) return path.join(dist, decoded.slice(1));
  return routeFile(dist, decoded.replace(/\/$/, "") || "/");
}


function validateSource(root) {
  const issues = [];
  const files = walk(root, new Set([".git", "node_modules", "dist"]));
  for (const file of files) {
    const relative = path.relative(root, file);
    if (path.basename(file) === ".DS_Store") issues.push(`${relative}: .DS_Store is present`);
    if (relative === ".claude/settings.local.json") issues.push(`${relative}: local settings are present`);
    if (relative.endsWith(".mdx.original")) issues.push(`${relative}: backup source is present`);
  }
  const pages = walk(path.join(root, "docs/pages"));
  for (const page of pages) {
    const text = fs.readFileSync(page, "utf8");
    for (const label of findForbidden(text)) issues.push(`${path.relative(root, page)}: ${label}`);
  }
  const packageJson = fs.readFileSync(path.join(root, "package.json"), "utf8");
  if (/"latest"/.test(packageJson)) issues.push("package.json: latest selector is present");
  if (fs.existsSync(path.join(root, "package-lock.json"))) issues.push("package-lock.json: competing lockfile is present");
  const config = fs.readFileSync(path.join(root, "vocs.config.ts"), "utf8");
  if (config.includes("vocs.dev/api/og")) issues.push("vocs.config.ts: external Vocs Open Graph service is present");

  const registryPath = path.join(root, "docs/public/data/rebranding-registry.json");
  const registry = JSON.parse(fs.readFileSync(registryPath, "utf8"));
  if (registry.registry_digest !== REGISTRY_DIGEST) issues.push("public registry digest does not match the approved private registry");
  if (registry.registry_version !== "2026-07-21.1") issues.push("public registry version is not approved");
  if (registry.facts.length !== 14) issues.push(`public registry contains ${registry.facts.length} facts; expected 14`);
  const serialized = JSON.stringify(registry);
  for (const field of ["evidence_location", "private_reviewer_notes", "raw_benchmark_logs", "sensitive_strategy"])
    if (serialized.includes(field)) issues.push(`public registry leaks ${field}`);
  for (const label of findForbidden(serialized)) issues.push(`public registry: ${label}`);
  issues.push(...validateSalusPublication(root));
  return issues;
}


function validateLinks(dist, route, html) {
  const issues = [];
  for (const href of anchors(html)) {
    if (/^(?:mailto:|tel:|javascript:)/i.test(href)) continue;
    const url = new URL(href, `${SITE_URL}${route === "/" ? "/" : `${route}/`}`);
    if (url.origin !== SITE_URL) continue;
    const target = targetFile(dist, url.pathname);
    if (!fs.existsSync(target)) {
      issues.push(`${route}: missing internal target ${url.pathname}`);
      continue;
    }
    if (url.hash && target.endsWith(".html")) {
      const id = decodeURIComponent(url.hash.slice(1));
      const targetHtml = fs.readFileSync(target, "utf8");
      if (!new RegExp(`\\bid="${id.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"`).test(targetHtml))
        issues.push(`${route}: missing fragment ${url.pathname}${url.hash}`);
    }
  }
  return issues;
}


function validateBuild(root) {
  const dist = path.join(root, "docs/dist");
  const issues = [];
  const builtFiles = walk(dist);
  const htmlDocuments = builtFiles
    .filter((file) => file.endsWith(".html"))
    .map((file) => fs.readFileSync(file, "utf8"));
  const salusRouteCount = countCanonicalUrl(
    htmlDocuments,
    `${SITE_URL}/work/salus`,
  );
  if (salusRouteCount !== 1)
    issues.push(`expected exactly one canonical /work/salus route, found ${salusRouteCount}`);
  for (const file of builtFiles) {
    const relative = path.relative(dist, file);
    if (path.basename(file) === ".DS_Store") issues.push(`${relative}: .DS_Store copied into build`);
    if (relative.includes("settings.local.json")) issues.push(`${relative}: local settings copied into build`);
    if (relative.includes(".mdx.original")) issues.push(`${relative}: backup route copied into build`);
    if (file.endsWith(".html"))
      for (const label of findForbidden(fs.readFileSync(file, "utf8"))) issues.push(`${relative}: ${label}`);
  }

  const titles = new Map();
  for (const route of CHECKED_ROUTES) {
    const file = routeFile(dist, route);
    if (!fs.existsSync(file)) {
      issues.push(`${route}: required route is missing`);
      continue;
    }
    const html = fs.readFileSync(file, "utf8");
    const metadata = ACTIVE_ROUTES.includes(route);
    issues.push(...validateHtml(html, route, metadata));
    issues.push(...validateLinks(dist, route, html));
    if (metadata) {
      const title = html.match(/<title>([^<]+)<\/title>/i)?.[1]?.trim();
      if (title) titles.set(title, [...(titles.get(title) ?? []), route]);
    }
  }
  for (const [title, routes] of titles)
    if (routes.length > 1) issues.push(`duplicate active title "${title}": ${routes.join(", ")}`);

  return { issues, routeCount: builtFiles.filter((file) => file.endsWith("/index.html") || file.endsWith("dist/index.html")).length };
}


async function checkExternal(root) {
  const dist = path.join(root, "docs/dist");
  const urls = new Set();
  for (const route of CHECKED_ROUTES) {
    const file = routeFile(dist, route);
    if (!fs.existsSync(file)) continue;
    for (const href of anchors(fs.readFileSync(file, "utf8")))
      if (/^https?:\/\//i.test(href) && new URL(href).origin !== SITE_URL) urls.add(href);
  }

  async function request(url, method) {
    try {
      const response = await fetch(url, { method, redirect: "follow", signal: AbortSignal.timeout(12000) });
      return response.status;
    } catch {
      return 0;
    }
  }

  const results = await Promise.all([...urls].sort().map(async (url) => {
    const head = await request(url, "HEAD");
    const status = [400, 404, 405, 410].includes(head) ? await request(url, "GET") : head;
    if (status >= 200 && status < 400) return { url, result: "reachable", status };
    if ([401, 403, 429].includes(status)) return { url, result: "access-controlled", status };
    if ([404, 410].includes(status)) return { url, result: "definitive-failure", status };
    return { url, result: "inconclusive", status };
  }));
  const counts = Object.fromEntries(["reachable", "definitive-failure", "access-controlled", "inconclusive"].map(
    (key) => [key, results.filter((result) => result.result === key).length],
  ));
  console.log(`External links: ${results.length} checked; ${counts.reachable} reachable; ${counts["definitive-failure"]} definitive failures; ${counts["access-controlled"]} access/rate controlled; ${counts.inconclusive} inconclusive`);
  for (const result of results.filter((result) => result.result !== "reachable"))
    console.log(`${result.result}: ${result.status || "timeout"} ${result.url}`);
  return results.filter((result) => result.result === "definitive-failure").map((result) => `external ${result.status}: ${result.url}`);
}


async function main() {
  const root = process.cwd();
  const sourceIssues = validateSource(root);
  const build = validateBuild(root);
  const externalIssues = process.argv.includes("--external") ? await checkExternal(root) : [];
  const issues = [...sourceIssues, ...build.issues, ...externalIssues];
  console.log(`Validation: ${build.routeCount} built routes; ${ACTIVE_ROUTES.length} active metadata routes; ${CHECKED_ROUTES.length} checked routes`);
  if (issues.length) {
    for (const issue of issues) console.error(`ERROR: ${issue}`);
    process.exitCode = 1;
  } else {
    console.log("Validation passed");
  }
}


if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) await main();
