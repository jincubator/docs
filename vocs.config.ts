import { defineConfig } from "vocs";
import remarkMath from "remark-math";
import rehypeMathjax from "rehype-mathjax";

export default defineConfig({
  title: "Jincubator",
  description:
    "Research focused on Intent BasedSolving, Arbitrage and Market Making",
  iconUrl: "/images/jincubator.png",
  logoUrl: "/images/jincubator.png",
  baseUrl: "/",
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
      text: "Proposals",
      link: "/proposals/intro",
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
    "/research": [
      { text: "Research", link: "/research/intro" },
      {
        text: "Solving and Arbitrage (2025)",
        items: [
          { text: "Design Intro", link: "/research/solving/intro" },
          { text: "Architecture", link: "/research/solving/architecture" },
          { text: "Protocol", link: "/research/solving/protocol" },
          { text: "Resource Management", link: "/research/solving/resources" },
          { text: "IntentSwap Flow", link: "/research/solving/flow" },
          {
            text: "NoLiquidity Solving (Tycho 1inch)",
            link: "/research/solving/tycho1inchNOL",
          },
          { text: "Hook Design - WIP", link: "/research/solving/hooks" },
        ],
      },
      {
        text: "Brainstorming",
        items: [{ text: "Design", link: "/research/brainstorming/design" }],
      },
      {
        text: "Layer 1 Platforms (2022/2023)",
        collapsed: false,
        items: [
          {
            text: "Layer 1 Intro",
            link: "/research/chains/intro",
          },
          {
            text: "Avalanche",
            link: "/research/chains/avalanche",
          },
          {
            text: "Binance Smart Chain",
            link: "/research/chains/binance",
          },
          {
            text: "Cosmos",
            link: "/research/chains/cosmos",
          },
          {
            text: "Ethereum 1.0",
            link: "/research/chains/ethereum-1-0",
          },
          {
            text: "Ethereum",
            link: "/research/chains/ethereum",
          },
          {
            text: "NEAR",
            link: "/research/chains/NEAR",
          },
          {
            text: "Harmony",
            link: "/research/chains/harmony",
          },
          {
            text: "Polkadot",
            link: "/research/chains/polkadot",
          },
          {
            text: "Polygon",
            link: "/research/chains/polygon",
          },
        ],
      },
      {
        text: "Code Reviews (2022/2023)",
        items: [
          {
            text: "Code Review Intro",
            link: "/research/code/intro",
          },
          {
            text: "Horizon Bridge",
            link: "/research/code/horizon",
          },
          {
            text: "Ethereum Near Bridge",
            link: "/research/code/ethereum-near",
          },
          {
            text: "Ethereum",
            link: "/research/code/ethereum",
          },
        ],
      },
      {
        text: "Cross Chain Bridges (2022/2023)",
        items: [
          {
            text: "Bridging Intro",
            link: "/research/bridge/intro",
          },
          {
            text: "Cosmos IBC",
            link: "/research/bridge/cosmos-ibc",
          },
          {
            text: "Harmony Horizon",
            link: "/research/bridge/harmony-horizon",
          },
          {
            text: "Isomorph",
            link: "/research/bridge/isomorph",
          },
          {
            text: "Near Rainbow Bridge",
            link: "/research/bridge/near-rainbow",
          },
          {
            text: "Polymer Labs",
            link: "/research/bridge/polymerlabs",
          },
          {
            text: "Snowbridge",
            link: "/research/bridge/snowbridge",
          },
          {
            text: "Succint",
            link: "/research/bridge/succinct",
          },
        ],
      },
      {
        text: "Zero Knowledge (2022/2023)",
        items: [
          {
            text: "Zero Knowledge Intro",
            link: "/research/zk/intro",
          },
          {
            text: "ZK Proof of Stake",
            link: "/research/zk/zkpos",
          },
          {
            text: "zk-Snarks",
            link: "/research/zk/zksnarks",
          },
          {
            text: "Axiom",
            link: "/research/zk/axiom",
          },
        ],
      },
      {
        text: "Primitives (2022/2023)",
        items: [
          {
            text: "Primitives Intro",
            link: "/research/primitives/intro",
          },
          {
            text: "Fraud Proofs",
            link: "/research/primitives/fraud-proofs",
          },
          {
            text: "Light Clients",
            link: "/research/primitives/light-clients",
          },
          {
            text: "Cryptogaphic Primitives",
            link: "/research/primitives/primitives",
          },
          {
            text: "Weak Subjectivity",
            link: "/research/primitives/weak-subjectivity",
          },
          {
            text: "Signature Schemes",
            link: "/research/primitives/signatures",
          },
        ],
      },
    ],

    "/proposals": [
      {
        text: "Research Proposals",
        items: [
          {
            text: "Solving and Arbitrage",
            link: "/proposals/solving-arbitrage",
          },
        ],
      },
      {
        text: "Grant Proposals",
        items: [
          {
            text: "Tycho Atomic Arbitrage(2025",
            link: "/proposals/atomic-arbitrage",
          },
          { text: "Sunrise Protocol (2020)", link: "/proposals/sunrise" },
        ],
      },
      {
        text: "Coding Events",
        items: [
          { text: "Unite Defi (2025)", link: "/proposals/Unite" },
          { text: "Uniswap Hook Incubator 5 (2025)", link: "/proposals/UHI5" },
          { text: "Harmony Hackathon 2021", link: "/proposals/Harmony" },
        ],
      },
    ],
    "/products": [
      { text: "Products", link: "/products/intro" },
      {
        text: "Rainbow Bridge Research (Harmony 2022)",
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
    "/partnerships": [{ text: "Partnerships", link: "/partnerships/intro" }],
  },
  socials: [
    {
      icon: "github",
      link: "https://github.com/jincubator",
    },
    {
      icon: "x",
      link: "https://twitter.com/jincubatorX",
    },
    { icon: "telegram", link: "https://t.me/jincubator" },
  ],
});
