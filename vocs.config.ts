import { createElement, Fragment } from "react";
import { defineConfig } from "vocs";
import remarkMath from "remark-math";
import rehypeMathjax from "rehype-mathjax";
import remarkMermaid from "remark-mermaidjs";
import { rehypeImageZoom } from "./rehype-image-zoom.js";
import { rehypeMermaidZoom } from "./rehype-mermaid-zoom.js";
import { rehypeHistoricalContext } from "./rehype-historical-context.js";
import { remarkImageZoom } from "./remark-image-zoom.js";
import { presentationSidebar, presentationTopNav } from "./docs/presentation-navigation.mjs";

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
        name: "inject-zoom-controls",
        transformIndexHtml(html) {
          return html.replace(
            "</head>",
            '<script src="/zoom-mermaid.js" defer></script><script src="/zoom-images.js" defer></script></head>',
          );
        },
      },
    ],
  },
  markdown: {
    remarkPlugins: [remarkMath, remarkMermaid, remarkImageZoom],
    rehypePlugins: [
      rehypeMathjax,
      rehypeImageZoom,
      rehypeMermaidZoom,
      rehypeHistoricalContext,
    ],
  },
  topNav: presentationTopNav,
  sidebar: presentationSidebar,
  theme: {
    colorScheme: "light",
    accentColor: "#476457",
    variables: {
      borderRadius: { "6": "0.65rem", "8": "0.8rem" },
      content: { width: "min(1120px, 100vw)", verticalPadding: "clamp(3rem, 7vw, 7rem)" },
      fontFamily: {
        default: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
      },
      sidebar: { horizontalPadding: "1.25rem", width: "280px" },
    },
  },
  socials: [
    { icon: "github", link: "https://github.com/jincubator" },
    { icon: "x", link: "https://twitter.com/jincubatorX" },
    { icon: "telegram", link: "https://t.me/jincubator" },
  ],
});
