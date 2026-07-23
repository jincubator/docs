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
    { text: "Work", link: "/work/intro" },
    { text: "Research", link: "/research/intro" },
    { text: "Architecture", link: "/architecture/intro" },
    { text: "Articles", link: "/articles/intro" },
    { text: "Engage", link: "/engage/intro" },
    { text: "John Whitton", link: "https://johnwhitton.com/" },
  ],
  sidebar: {
    "/work": [
      { text: "Work", link: "/work/intro" },
      { text: "Salus", link: "/work/salus" },
      { text: "Digital Banking", link: "/work/digital-banking" },
      { text: "Prototypes", link: "/work/prototypes" },
    ],
    "/research": [
      { text: "Research", link: "/research/intro" },
      {
        text: "High-Performance Route Evaluation",
        link: "/research/solving/solving",
      },
      {
        text: "Durable Financial Settlement",
        link: "/research/financial-infrastructure/settlement/intro",
      },
      {
        text: "Intent-Based Execution",
        link: "/research/defi-protocol-engineering/intro",
      },
      { text: "Historical research", link: "/archive/intro" },
    ],
    "/architecture": [
      { text: "Architecture", link: "/architecture/intro" },
      { text: "Architecture Portfolio", link: "/architecture/portfolio" },
      {
        text: "Trading-System Pipelines",
        link: "/architecture/trading-systems/solver",
      },
      {
        text: "Settlement Control Planes",
        link: "/architecture/financial-infrastructure/settlement",
      },
      {
        text: "Intent Execution",
        link: "/architecture/defi-systems/intents",
      },
      { text: "Historical architecture", link: "/archive/intro" },
    ],
    "/articles": [
      { text: "Articles", link: "/articles/intro" },
      {
        text: "Solving, Arbitrage & Market Making",
        link: "/articles/solving-arbitrage-market-making",
      },
    ],
    "/engage": [{ text: "Engage", link: "/engage/intro" }],
    "/archive": [{ text: "Archive", link: "/archive/intro" }],
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
