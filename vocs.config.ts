import { defineConfig } from "vocs";
import remarkMath from "remark-math";
import rehypeMathjax from "rehype-mathjax";

export default defineConfig({
  title: "Jincubator",
  description:
    "Research focused on Intent BasedSolving, Arbitrage and Market Making",
  iconUrl: "/images/jincubator.png",
  logoUrl: "/images/jincubator.png",
  ogImageUrl:
    "https://vocs.dev/api/og?logo=%logo&title=%title&description=%description",
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeMathjax],
  },
  topNav: [
    {
      text: "Research",
      link: "/research/intro",
    },
    {
      text: "Products",
      link: "/products/intro",
    },
    {
      text: "Partnerships",
      link: "/partnerships/intro",
    },
  ],
  sidebar: {
    "/products": [
      { text: "Products", link: "/products/intro" },
      {
        text: "Ethereum Bridging using Light Clients - Rainbow Costing",
        link: "/products/2023-02-23-rainbow-costs",
      },
      { text: "Draft EAVE Whitepaper", link: "/products/2021-12-01-eave-defi" },
      { text: "Kanga Protocol Whitepaper", link: "/products/2021-05-01-kanga" },
      {
        text: "EAVE Parachain Design",
        link: "/products/2021-04-01-eave-parachain",
      },
      {
        text: "Lessons Learned from Devcon5",
        link: "/products/2019-10-16-devcon5",
      },
      {
        text: "Project-X Technical White Paper",
        link: "/products/2018-07-17-projectx",
      },
    ],
    "/research": [
      {
        text: "Research",
        collapsed: false,
        link: "/research/intro",
      },
      { text: "Design Intro", link: "/design/intro" },
      { text: "Architecture", link: "/design/architecture" },
      { text: "Protocol", link: "/design/protocol" },
      { text: "Resource Management", link: "/design/resources" },
      { text: "IntentSwap Flow", link: "/design/flow" },
      { text: "Hook Design - WIP", link: "/design/hooks" },
    ],
    "/partnerships": [{ text: "Partnerships", link: "/partnerships/intro" }],
  },
});
