import { defineConfig } from "vocs";
import remarkMath from "remark-math";
import rehypeMathjax from "rehype-mathjax";

export default defineConfig({
  title: "Jincubator",
  description:
    "Jincubator is a protocol for creating and managing intent swaps.",
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
      text: "Home",
      link: "/",
    },
    {
      text: "Writing",
      link: "/writing/intro",
    },
    {
      text: "Research",
      link: "/research/intro",
    },
  ],
  sidebar: [
    {
      text: "Overview",
      link: "/overview",
    },
    {
      text: "Writing",
      link: "/writing/intro",
    },
    {
      text: "Research",
      link: "/research/intro",
    },
    {
      text: "Design",
      collapsed: false,
      items: [
        { text: "Design Intro", link: "/design/intro" },
        { text: "Architecture", link: "/design/architecture" },
        { text: "Protocol", link: "/design/protocol" },
        { text: "Resource Management", link: "/design/resources" },
        { text: "IntentSwap Flow", link: "/design/flow" },
        { text: "Hook Design - WIP", link: "/design/hooks" },
      ],
    },
    {
      text: "Writing",
      link: "/writing/intro",
      items: [
        { text: "John's Writing", link: "/writing/intro" },
        {
          text: "Ethereum Bridging using Light Clients - Rainbow Costing",
          link: "/writing/2023-02-23-rainbow-costs",
        },
        {
          text: "Draft EAVE Whitepaper",
          link: "/writing/2021-12-01-eave-defi",
        },
        {
          text: "Kanga Protocol Whitepaper",
          link: "/writing/2021-05-01-kanga",
        },
        {
          text: "EAVE Parachain Design",
          link: "/writing/2021-04-01-eave-parachain",
        },
        {
          text: "Lessons Learned from Devcon5",
          link: "/writing/2019-10-16-devcon5",
        },
        {
          text: "Project-X Technical White Paper",
          link: "/writing/2018-07-17-projectx",
        },
      ],
    },
  ],
});
