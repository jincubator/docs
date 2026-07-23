#!/usr/bin/env node
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  ACTIVE_ROUTES,
  COMPATIBILITY_ROUTES,
  needsHistoricalContext,
} from "../route-policy.js";


const SITE_URL = "https://www.jincubator.com";
const REGISTRY_DIGEST = "e9bbb94305ef988e480b6c133a3595700e6598ec76c9485f39d28e3a05bcad90";
const CHECKED_ROUTES = [
  ...ACTIVE_ROUTES,
  "/prototypes/intro",
  "/product/intro",
  "/proposals/intro",
  "/proposals/UHI5",
  "/proposals/Unite",
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
  "/partnerships/intro",
  "/research/solving/tycho1inchNOL",
];
const PUBLICATION_MANIFEST_FIELDS = [
  "schema_version",
  "artifact",
  "route",
  "format",
  "presentation",
  "source",
  "lifecycle_state",
  "publication_status",
  "reviews",
  "generator",
  "outputs",
  "provenance_notice",
  "publication_date",
];
const PUBLICATION_ARTIFACT_FIELDS = ["id", "type", "title"];
const PUBLICATION_PRESENTATION_FIELDS = ["label", "reading_time_minutes"];
const PUBLICATION_SOURCE_FIELDS = ["repository", "path", "commit", "revision_date"];
const PUBLICATION_REVIEW_FIELDS = ["technical", "claim", "editorial"];
const PUBLICATION_GENERATOR_FIELDS = ["name", "version"];
const PUBLICATION_OUTPUT_FIELDS = ["destination", "media_type", "sha256"];
const PUBLICATIONS = [
  {
    artifact: { id: "work/salus", type: "work", title: "Salus" },
    route: "/work/salus",
    page: "docs/pages/work/salus.mdx",
    manifest: "docs/public/data/publications/work-salus.json",
    source: "work/salus/README.md",
    label: "Work",
    readingTime: null,
    sections: [
      "Problem",
      "Approach",
      "What John built",
      "Technical challenges",
      "Retained results",
      "Limitations",
      "Go deeper",
    ],
  },
  {
    artifact: {
      id: "work/digital-banking",
      type: "work",
      title: "Digital Banking Reference Implementation",
    },
    route: "/work/digital-banking",
    page: "docs/pages/work/digital-banking.mdx",
    manifest: "docs/public/data/publications/work-digital-banking.json",
    source: "work/digital-banking/README.md",
    label: "Work",
    readingTime: null,
    sections: [
      "Problem",
      "Approach",
      "What John built",
      "Verified scope",
      "Boundaries and limitations",
      "Go deeper",
    ],
  },
  {
    artifact: {
      id: "work/intent-systems-prototypes",
      type: "work",
      title: "Intent Systems Prototypes",
    },
    route: "/work/prototypes",
    page: "docs/pages/work/prototypes.mdx",
    manifest:
      "docs/public/data/publications/work-intent-systems-prototypes.json",
    source: "work/intent-systems-prototypes/README.md",
    label: "Work",
    readingTime: null,
    sections: [
      "Why prototype",
      "UHI5 intent hook",
      "Unite DeFi solver prototype",
      "What the experiments establish",
      "Limitations",
      "Go deeper",
    ],
  },
  {
    artifact: {
      id: "research/high-performance-route-evaluation",
      type: "research",
      title: "High-Performance Route Evaluation",
    },
    route: "/research/solving/solving",
    page: "docs/pages/research/solving/solving.mdx",
    manifest:
      "docs/public/data/publications/research-high-performance-route-evaluation.json",
    source: "research/high-performance-route-evaluation/README.md",
    label: "Research",
    readingTime: null,
    sections: [
      "The question",
      "A measurement model",
      "Retained observations",
      "What the evidence establishes",
      "What it does not establish",
      "Engineering implications",
      "Go deeper",
    ],
  },
  {
    artifact: {
      id: "research/durable-financial-settlement",
      type: "research",
      title: "Durable Financial Settlement",
    },
    route: "/research/financial-infrastructure/settlement/intro",
    page: "docs/pages/research/financial-infrastructure/settlement/intro.mdx",
    manifest:
      "docs/public/data/publications/research-durable-financial-settlement.json",
    source: "research/durable-financial-settlement/README.md",
    label: "Research",
    readingTime: null,
    sections: [
      "The question",
      "Evidence layers",
      "Findings",
      "Engineering conclusions",
      "Alternatives and counterevidence",
      "Limitations and freshness",
      "Go deeper",
    ],
  },
  {
    artifact: {
      id: "research/intent-based-execution",
      type: "research",
      title: "Intent-Based Execution",
    },
    route: "/research/defi-protocol-engineering/intro",
    page: "docs/pages/research/defi-protocol-engineering/intro.mdx",
    manifest:
      "docs/public/data/publications/research-intent-based-execution.json",
    source: "research/intent-based-execution/README.md",
    label: "Research",
    readingTime: null,
    sections: [
      "The question",
      "A boundary model",
      "Prototype findings",
      "Engineering conclusions",
      "Alternatives and counterevidence",
      "Limitations and freshness",
      "Go deeper",
    ],
  },
  {
    artifact: {
      id: "architecture/trading-system-execution-pipelines",
      type: "architecture",
      title: "Designing Evidence-Aware Trading-System Pipelines",
    },
    route: "/architecture/trading-systems/solver",
    page: "docs/pages/architecture/trading-systems/solver.mdx",
    manifest:
      "docs/public/data/publications/architecture-trading-system-execution-pipelines.json",
    source: "architecture/trading-system-execution-pipelines/README.md",
    label: "Architecture",
    readingTime: null,
    sections: [
      "The design problem",
      "Evidence states",
      "Pipeline boundaries",
      "Decision gates",
      "Failure modes and observability",
      "Alternatives and trade-offs",
      "Applying the pattern",
      "Go deeper",
    ],
  },
  {
    artifact: {
      id: "architecture/durable-settlement-control-planes",
      type: "architecture",
      title: "Durable Settlement Control Planes",
    },
    route: "/architecture/financial-infrastructure/settlement",
    page: "docs/pages/architecture/financial-infrastructure/settlement.mdx",
    manifest:
      "docs/public/data/publications/architecture-durable-settlement-control-planes.json",
    source: "architecture/durable-settlement-control-planes/README.md",
    label: "Architecture",
    readingTime: null,
    sections: [
      "The design problem",
      "Trust and authority boundaries",
      "Durable state model",
      "Execution and recovery",
      "Finality and reconciliation",
      "Alternatives and trade-offs",
      "Validation boundaries",
      "Go deeper",
    ],
  },
  {
    artifact: {
      id: "architecture/intent-execution-boundaries",
      type: "architecture",
      title: "Intent Execution Boundaries",
    },
    route: "/architecture/defi-systems/intents",
    page: "docs/pages/architecture/defi-systems/intents.mdx",
    manifest:
      "docs/public/data/publications/architecture-intent-execution-boundaries.json",
    source: "architecture/intent-execution-boundaries/README.md",
    label: "Architecture",
    readingTime: null,
    sections: [
      "The design problem",
      "Mandate and resource boundaries",
      "Discovery and validation",
      "Execution and settlement",
      "Failure modes and controls",
      "Alternatives and trade-offs",
      "Validation boundaries",
      "Go deeper",
    ],
  },
  {
    artifact: {
      id: "collection/solving-arbitrage-market-making",
      type: "collection",
      title: "Solving, Arbitrage & Market Making",
    },
    route: "/articles/solving-arbitrage-market-making",
    page: "docs/pages/articles/solving-arbitrage-market-making.mdx",
    manifest:
      "docs/public/data/publications/collection-solving-arbitrage-market-making.json",
    source: "collections/solving-arbitrage-market-making/README.md",
    label: "Article",
    readingTime: 5,
    sections: [
      "Why build the whole path",
      "From changing state to a reviewable decision",
      "Throughput is evidence, not outcome",
      "Capital efficiency changes the constraint",
      "What the work demonstrates",
      "Where the evidence stops",
      "What to take away",
      "Go deeper",
    ],
  },
];
const PRIVATE_PUBLICATION_REFERENCE =
  /(?:johnwhitton\/prep|\/prep\/|evidence_location|private_reviewer_notes|raw_benchmark_logs|sensitive_strategy)/i;
const EXPECTED_TOP_NAVIGATION = [
  "Work",
  "Research",
  "Architecture",
  "Articles",
  "Engage",
  "John Whitton",
];
const ABSOLUTE_FILESYSTEM_PATHS = [
  /\bfile:\/\//i,
  /(?:^|[\s("'`=])[A-Za-z]:[\\/]/m,
  /(?:^|[\s("'`=])\\\\[^\\/\s]+[\\/][^\\/\s]+/m,
  /(?:^|[\s("'`=])\/(?:Users|home|private|tmp|var|etc|opt|usr|root|mnt|srv|Volumes)(?:[\\/]|$)/im,
];


export function findForbidden(text) {
  const checks = [
    ["unqualified capital claim", /no up[- ]?front capital|without [^\n.]{0,80}up[- ]?front capital|eliminates up[- ]?front capital/i],
    ["unsupported execution-success claim", /100% execution success rate in production testing/i],
    ["unsupported EAVE precision", /EAVE[^\n]{0,100}(?:(?:\$\s*)?300,?000|\$?300k)|(?:(?:\$\s*)?300,?000|\$?300k)[^\n]{0,100}EAVE/i],
    ["internal portfolio metadata", /(?:\*\*|<strong>)(?:owner(?: and contact)?|primary contributor|contributor|maturity|status|lifecycle|evidence(?: date| cutoff)?|relationship|engagement model|registry version|updated|current phase):(?:\*\*|<\/strong>)/i],
    ["registry presentation", /\bregistry (?:version|digest)\b/i],
    ["duplicate homepage navigation", /<HomePage\.Button\b[^>]*\bhref="\/(?:work\/intro|research\/intro|architecture\/intro|prototypes\/intro|archive\/intro|engage\/intro)"[^>]*>/i],
    ["dashboard-style call to action", /\*\*Next:\*\*/i],
  ];
  const labels = checks
    .filter(([, pattern]) => pattern.test(text))
    .map(([label]) => label);
  if (containsAbsoluteFilesystemPath(text)) labels.unshift("local filesystem path");
  return labels;
}


export function topNavigation(config) {
  const block = config.match(/topNav:\s*\[([\s\S]*?)\n\s*\],\n\s*sidebar:/)?.[1] ?? "";
  return [...block.matchAll(/\btext:\s*"([^"]+)"/g)].map((match) => match[1]);
}


function checkExactKeys(value, expected, subject, label, issues) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    issues.push(`${subject} ${label} must be an object`);
    return false;
  }
  const actual = Object.keys(value).sort();
  const wanted = [...expected].sort();
  if (JSON.stringify(actual) !== JSON.stringify(wanted)) {
    issues.push(`${subject} ${label} fields differ`);
    return false;
  }
  return true;
}


function containsAbsoluteFilesystemPath(text) {
  return ABSOLUTE_FILESYSTEM_PATHS.some((pattern) => pattern.test(text));
}


export function readingTimeMinutes(text) {
  const withoutCode = text.replace(
    /^[ \t]*(```|~~~)[^\n]*\n[\s\S]*?^[ \t]*\1[^\n]*(?:\n|$)/gm,
    "",
  );
  const visible = withoutCode
    .split("\n")
    .filter((line) => {
      const trimmed = line.trim();
      return !(trimmed.startsWith("|") && trimmed.endsWith("|")) &&
        !/^[ \t]*\[[^\]]+\]:/.test(line);
    })
    .join("\n")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\[([^\]]+)\]\[[^\]]+\]/g, "$1")
    .replace(/<https?:\/\/[^>]+>/g, "")
    .replace(/https?:\/\/\S+/g, "")
    .replace(/<[^>]+>/g, "");
  const words = visible.match(/\b[\p{L}\p{N}_]+(?:[’'-][\p{L}\p{N}_]+)*\b/gu) ?? [];
  return Math.max(1, Math.ceil(words.length / 225));
}


function articleNarrative(page) {
  return page
    .replace(/^---\n[\s\S]*?\n---\n/, "")
    .replace(/^\{\/\* Generated from .+? \*\/\}\n/m, "")
    .replace(/^# .+\n/m, "")
    .replace(/^\*\d+ min read\*\n/m, "")
    .trim();
}


function validatePublication(root, spec) {
  const issues = [];
  const subject = `${spec.artifact.title} publication`;
  const pagePath = path.join(root, spec.page);
  const manifestPath = path.join(root, spec.manifest);
  if (!fs.existsSync(pagePath)) issues.push(`${subject} MDX is missing`);
  if (!fs.existsSync(manifestPath)) issues.push(`${subject} manifest is missing`);
  if (issues.length) return issues;

  const pageBytes = fs.readFileSync(pagePath);
  const page = pageBytes.toString("utf8");
  let manifest;
  try {
    manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
  } catch {
    return [`${subject} manifest is not valid JSON`];
  }

  if (!checkExactKeys(
    manifest,
    PUBLICATION_MANIFEST_FIELDS,
    subject,
    "manifest",
    issues,
  ))
    return issues;
  checkExactKeys(
    manifest.artifact,
    PUBLICATION_ARTIFACT_FIELDS,
    subject,
    "artifact",
    issues,
  );
  checkExactKeys(
    manifest.presentation,
    PUBLICATION_PRESENTATION_FIELDS,
    subject,
    "presentation",
    issues,
  );
  checkExactKeys(manifest.source, PUBLICATION_SOURCE_FIELDS, subject, "source", issues);
  checkExactKeys(manifest.reviews, PUBLICATION_REVIEW_FIELDS, subject, "reviews", issues);
  checkExactKeys(
    manifest.generator,
    PUBLICATION_GENERATOR_FIELDS,
    subject,
    "generator",
    issues,
  );

  if (manifest.schema_version !== 1)
    issues.push(`${subject} schema_version must be 1`);
  if (JSON.stringify(manifest.artifact) !== JSON.stringify(spec.artifact))
    issues.push(`${subject} artifact identity is invalid`);
  if (manifest.route !== spec.route)
    issues.push(`${subject} route must be ${spec.route}`);
  if (manifest.format !== "vocs-mdx")
    issues.push(`${subject} format must be vocs-mdx`);
  if (
    manifest.presentation?.label !== spec.label ||
    manifest.presentation?.reading_time_minutes !== spec.readingTime
  ) issues.push(`${subject} presentation is invalid`);
  if (
    manifest.source?.repository !== "https://github.com/jincubator/knowledge-base" ||
    manifest.source?.path !== spec.source ||
    !/^\d{4}-\d{2}-\d{2}$/.test(manifest.source?.revision_date ?? "")
  ) issues.push(`${subject} source is invalid`);
  if (!/^[0-9a-f]{40,64}$/.test(manifest.source?.commit ?? ""))
    issues.push(`${subject} source commit is invalid`);
  if (manifest.lifecycle_state !== "ready to publish")
    issues.push(`${subject} lifecycle_state must be ready to publish`);
  if (manifest.publication_status !== "not published")
    issues.push(`${subject} publication_status must be not published`);
  if (
    manifest.reviews?.technical !== "Approved" ||
    manifest.reviews?.claim !== "Approved" ||
    manifest.reviews?.editorial !== "Approved"
  ) issues.push(`${subject} reviews must be Approved`);
  if (
    manifest.generator?.name !== "knowledge-base-publication" ||
    manifest.generator?.version !== 2
  ) issues.push(`${subject} generator is invalid`);
  if (manifest.publication_date !== null)
    issues.push(`${subject} publication_date must be null`);
  if (
    manifest.provenance_notice !==
      "Generated from the canonical Knowledge Base source; do not edit the distribution copy directly."
  ) issues.push(`${subject} provenance notice is invalid`);

  const output = Array.isArray(manifest.outputs) && manifest.outputs.length === 1
    ? manifest.outputs[0]
    : null;
  if (!output) {
    issues.push(`${subject} output must contain exactly one entry`);
  } else {
    checkExactKeys(output, PUBLICATION_OUTPUT_FIELDS, subject, "output", issues);
    if (
      output.destination !== spec.page ||
      output.media_type !== "text/mdx" ||
      !/^[0-9a-f]{64}$/.test(output.sha256 ?? "")
    ) issues.push(`${subject} output is invalid`);
    const digest = crypto.createHash("sha256").update(pageBytes).digest("hex");
    if (output.sha256 !== digest)
      issues.push(`${subject} MDX SHA-256 does not match manifest`);
  }

  const expectedNotice =
    `{/* Generated from ${manifest.source?.repository}/blob/` +
    `${manifest.source?.commit}/${manifest.source?.path}. Do not edit directly. */}`;
  if (!page.includes(expectedNotice))
    issues.push(`${subject} generated notice does not match manifest`);

  const publicSections = [...page.matchAll(/^##\s+(.+?)\s*$/gm)]
    .map((match) => match[1]);
  if (JSON.stringify(publicSections) !== JSON.stringify(spec.sections))
    issues.push(`${subject} public sections must match the projection contract`);
  if (spec.readingTime !== null) {
    if (!page.includes(`*${spec.readingTime} min read*`))
      issues.push(`${subject} reading-time label is missing`);
    if (readingTimeMinutes(articleNarrative(page)) !== spec.readingTime)
      issues.push(`${subject} reading time does not match the public narrative`);
  }

  const serialized = JSON.stringify(manifest);
  for (const label of findForbidden(page))
    issues.push(`${subject} MDX: ${label}`);
  for (const label of findForbidden(serialized))
    issues.push(`${subject} manifest: ${label}`);
  if (PRIVATE_PUBLICATION_REFERENCE.test(page) || PRIVATE_PUBLICATION_REFERENCE.test(serialized))
    issues.push(`${subject} contains a private reference`);
  if (containsAbsoluteFilesystemPath(page) || containsAbsoluteFilesystemPath(serialized))
    issues.push(`${subject} contains an absolute filesystem path`);
  if (/\]\(https:\/\/(?:www\.)?jincubator\.com\//i.test(page))
    issues.push(`${subject} internal Jincubator links must be site-relative`);
  return issues;
}


export function validatePublicationByArtifact(root, artifactId) {
  const spec = PUBLICATIONS.find(({ artifact }) => artifact.id === artifactId);
  return spec
    ? validatePublication(root, spec)
    : [`unknown publication artifact: ${artifactId}`];
}


export function validatePublications(root) {
  const issues = PUBLICATIONS.flatMap((spec) => validatePublication(root, spec));
  const manifestDirectory = path.join(root, "docs/public/data/publications");
  const registeredManifests = PUBLICATIONS.map(({ manifest }) => manifest).sort();
  const trackedManifests = fs.existsSync(manifestDirectory)
    ? fs.readdirSync(manifestDirectory)
      .filter((name) => name.endsWith(".json"))
      .map((name) => `docs/public/data/publications/${name}`)
      .sort()
    : [];
  if (JSON.stringify(registeredManifests) !== JSON.stringify(trackedManifests))
    issues.push("publication manifest registry does not match tracked manifests");
  for (const [field, values] of [
    ["artifact", PUBLICATIONS.map(({ artifact }) => artifact.id)],
    ["route", PUBLICATIONS.map(({ route }) => route)],
    ["page", PUBLICATIONS.map(({ page }) => page)],
    ["manifest", PUBLICATIONS.map(({ manifest }) => manifest)],
  ]) {
    if (new Set(values).size !== values.length)
      issues.push(`publication registry contains a duplicate ${field}`);
  }
  const commits = PUBLICATIONS.flatMap((spec) => {
    try {
      const manifest = JSON.parse(
        fs.readFileSync(path.join(root, spec.manifest), "utf8"),
      );
      return typeof manifest.source?.commit === "string"
        ? [manifest.source.commit]
        : [];
    } catch {
      return [];
    }
  });
  if (commits.length === PUBLICATIONS.length && new Set(commits).size !== 1)
    issues.push("publication manifests must identify one Knowledge Base source commit");
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
  if (
    JSON.stringify(topNavigation(config)) !==
    JSON.stringify(EXPECTED_TOP_NAVIGATION)
  ) issues.push("vocs.config.ts: primary navigation does not match the approved taxonomy");

  const registryPath = path.join(root, "docs/public/data/rebranding-registry.json");
  const registry = JSON.parse(fs.readFileSync(registryPath, "utf8"));
  if (registry.registry_digest !== REGISTRY_DIGEST) issues.push("public registry digest does not match the approved private registry");
  if (registry.registry_version !== "2026-07-21.1") issues.push("public registry version is not approved");
  if (registry.facts.length !== 14) issues.push(`public registry contains ${registry.facts.length} facts; expected 14`);
  const serialized = JSON.stringify(registry);
  for (const field of ["evidence_location", "private_reviewer_notes", "raw_benchmark_logs", "sensitive_strategy"])
    if (serialized.includes(field)) issues.push(`public registry leaks ${field}`);
  for (const label of findForbidden(serialized)) issues.push(`public registry: ${label}`);
  issues.push(...validatePublications(root));
  return issues;
}


export function validateLinks(dist, route, html) {
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


function routeFromIndexFile(dist, file) {
  const relative = path.relative(dist, file);
  return relative === "index.html"
    ? "/"
    : `/${path.dirname(relative).split(path.sep).join("/")}`;
}


export function validateRouteCorpus(dist) {
  const issues = [];
  const routeFiles = walk(dist)
    .filter((file) => path.basename(file) === "index.html")
    .sort();
  for (const file of routeFiles) {
    const route = routeFromIndexFile(dist, file);
    const html = fs.readFileSync(file, "utf8");
    if (
      needsHistoricalContext(route) &&
      !html.includes('data-historical-context="true"')
    ) {
      issues.push(`${route}: historical route is missing the visible Archive context`);
    }
    issues.push(...validateHtml(html, route, false));
    issues.push(...validateLinks(dist, route, html));
    if (containsAbsoluteFilesystemPath(html))
      issues.push(`${route}: contains an absolute filesystem path`);
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
  for (const { route } of PUBLICATIONS) {
    const routeCount = countCanonicalUrl(htmlDocuments, `${SITE_URL}${route}`);
    if (routeCount !== 1)
      issues.push(`expected exactly one canonical ${route} route, found ${routeCount}`);
  }
  for (const { route, current } of COMPATIBILITY_ROUTES) {
    const file = routeFile(dist, route);
    if (!fs.existsSync(file)) {
      issues.push(`${route}: compatibility route is missing`);
      continue;
    }
    if (!anchors(fs.readFileSync(file, "utf8")).includes(current))
      issues.push(`${route}: compatibility route must identify ${current}`);
  }
  for (const file of builtFiles) {
    const relative = path.relative(dist, file);
    if (path.basename(file) === ".DS_Store") issues.push(`${relative}: .DS_Store copied into build`);
    if (relative.includes("settings.local.json")) issues.push(`${relative}: local settings copied into build`);
    if (relative.includes(".mdx.original")) issues.push(`${relative}: backup route copied into build`);
    if (file.endsWith(".html"))
      for (const label of findForbidden(fs.readFileSync(file, "utf8"))) issues.push(`${relative}: ${label}`);
  }
  issues.push(...validateRouteCorpus(dist));

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
