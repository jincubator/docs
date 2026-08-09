import { createElement, Fragment } from "react";
import { defineConfig } from "vocs";
import remarkMath from "remark-math";
import rehypeMathjax from "rehype-mathjax";
import remarkMermaid from "remark-mermaidjs";
import { rehypeMermaidZoom } from "./rehype-mermaid-zoom.js";
import { rehypeHistoricalContext } from "./rehype-historical-context.js";

const siteUrl = "https://www.jincubator.com";
const architecturePath = "/research/architecture/john";
const architectureImageUrl = `${siteUrl}/images/research/solver-enterprise-infographic.png`;
const defaultOgImageUrl = `${siteUrl}/images/jincubator.png`;

export default defineConfig({
  title: "Jincubator",
  titleTemplate: "%s — Jincubator",
  description:
    "John Whitton's independent research and engineering studio for financial and distributed systems.",
  iconUrl: "/images/jincubator.png",
  ogImageUrl: {
    "/": defaultOgImageUrl,
    [architecturePath]: architectureImageUrl,
  },
  head: ({ path }) => {
    const canonicalUrl = new URL(path, siteUrl).toString();
    return createElement(
      Fragment,
      null,
      createElement("link", {
        rel: "canonical",
        href: canonicalUrl,
      }),
      createElement("meta", {
        property: "og:url",
        content: canonicalUrl,
      }),
    );
  },
  vite: {
    plugins: [
      {
        name: "inject-mermaid-zoom",
        transformIndexHtml(html) {
          return html.replace(
            "</head>",
            '<script src="/zoom-mermaid.js" defer></script></head>',
          );
        },
      },
    ],
  },
  markdown: {
    remarkPlugins: [remarkMath, remarkMermaid],
    rehypePlugins: [
      rehypeMathjax,
      rehypeMermaidZoom,
      rehypeHistoricalContext,
    ],
  },
  topNav: [
    { text: "Work", link: "/work" },
    { text: "Salus", link: "/work/salus" },
    { text: "Research", link: "/research" },
    { text: "Architecture", link: "/architecture" },
    { text: "Writing", link: "/writing" },
    { text: "About", link: "/about" },
  ],
  sidebar: {
    "/work": [
      { text: "Work", link: "/work" },
      { text: "Salus", link: "/work/salus" },
      { text: "Digital Banking", link: "/work/digital-banking" },
      { text: "DeFi Leveraging", link: "/work/defi-leveraging" },
      { text: "Prototypes", link: "/work/prototypes" },
      { text: "Stablecoin Intents", link: "/work/stablecoin-intents" },
      { text: "EAVE", link: "/work/building-polkadot-parachain-eave" },
      { text: "Kanga", link: "/work/defi-protocol-engineering-kanga" },
      { text: "Enterprise SOA", link: "/work/enterprise-soa" },
    ],
    "/research": [
      { text: "Research", link: "/research" },
      { text: "High-Performance Route Evaluation", link: "/research/high-performance-route-evaluation" },
      { text: "Deterministic Replay", link: "/research/deterministic-replay-as-engineering-evidence" },
      { text: "Validation Evidence", link: "/research/trading-system-validation-evidence" },
      {
        text: "Durable Financial Settlement",
        link: "/research/financial-infrastructure/settlement/intro",
      },
      {
        text: "Intent-Based Execution",
        link: "/research/defi-protocol-engineering/intro",
      },
      { text: "Archive", link: "/archive" },
    ],
    "/architecture": [
      { text: "Architecture", link: "/architecture" },
      { text: "Trading-System Pipelines", link: "/architecture/trading-system-execution-pipelines" },
      { text: "Evidence-Grounded AI", link: "/architecture/evidence-grounded-ai-for-trading-systems" },
      { text: "Liquidity Graphs", link: "/architecture/liquidity-state-to-route-graphs" },
      { text: "Backpressure", link: "/architecture/backpressure-and-queue-ownership" },
      { text: "Read Models", link: "/architecture/inspectable-trading-read-models" },
      { text: "Simulation", link: "/architecture/protocol-simulation-boundaries" },
      { text: "Capital", link: "/architecture/capital-efficient-funding-models" },
      {
        text: "Settlement Control Planes",
        link: "/architecture/financial-infrastructure/settlement",
      },
      {
        text: "Intent Execution",
        link: "/architecture/defi-systems/intents",
      },
      { text: "Archive", link: "/archive" },
    ],
    "/writing": [
      { text: "Writing", link: "/writing" },
      { text: "Solving, Arbitrage & Market Making", link: "/writing/solving-arbitrage-market-making" },
      { text: "Mapping Liquidity to Routes at Scale", link: "/writing/mapping-liquidity-to-routes-at-scale" },
      { text: "I Built a Fast Arbitrage Engine. Speed Wasn't the Problem.", link: "/writing/speed-wasnt-the-problem" },
    ],
    "/about": [{ text: "About", link: "/about" }, { text: "Archive", link: "/archive" }],
    "/archive": [{ text: "Archive", link: "/archive" }],
    "/prototypes": [
      { text: "Current Prototypes", link: "/work/prototypes" },
      { text: "Archive", link: "/archive/intro" },
    ],
    "/proposals": [
      { text: "Current Prototypes", link: "/work/prototypes" },
      { text: "Archive", link: "/archive/intro" },
    ],
    "/product": [
      { text: "Current Work", link: "/work/intro" },
      { text: "Archive", link: "/archive/intro" },
    ],
    "/partnerships": [
      { text: "Engage", link: "/engage/intro" },
      { text: "Archive", link: "/archive/intro" },
    ],
  },
  socials: [
    { icon: "github", link: "https://github.com/jincubator" },
    { icon: "x", link: "https://twitter.com/jincubatorX" },
    { icon: "telegram", link: "https://t.me/jincubator" },
  ],
});
