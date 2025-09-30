import { defineConfig } from "vocs";
import remarkMath from "remark-math";
import rehypeMathjax from "rehype-mathjax";
import remarkMermaid from "remark-mermaidjs";
import { rehypeInjectZoom } from "./rehype-inject-zoom.js";

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
    remarkPlugins: [remarkMath, remarkMermaid],
    rehypePlugins: [rehypeMathjax, rehypeInjectZoom],
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
      text: "Product",
      link: "/product/intro",
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
          {
            text: "High Performance Route Evaluation",
            link: "/research/solving/solving",
          },
          {
            text: "No Liquidity Solving (Tycho 1inch)",
            link: "/research/solving/tycho1inchNOL",
          },
          {
            text: "Near Contract Development (1inch Contracts)",
            link: "/research/solving/near",
          },
          {
            text: "Liquidity Management with ERC-6909 Vault",
            link: "/research/Intents/protocol",
          },
          {
            text: "Uniswap V4 - Intent Management Hook",
            link: "/research/solving/intent-management-hook",
          },
        ],
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
        text: "Grant Proposals",
        items: [
          {
            text: "Tycho Atomic Arbitrage (2025)",
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
    "/product": [
      { text: "Product", link: "/product/intro" },
      {
        text: "High Performance Solving",
        items: [
          { text: "Overview", link: "/product/solving/overview" },
          { text: "Collectors", link: "/product/solving/collectors" },
          { text: "Route Evaluation", link: "/product/solving/routes" },
          { text: "Strategies", link: "/product/solving/strategies" },
          { text: "Protocol Onboarding", link: "/product/solving/protocols" },
          {
            text: "Solver Support",
            items: [
              { text: "CowSwap", link: "/product/solving/intentsolve/cowswap" },
              { text: "1inch", link: "/product/solving/intentsolve/1inch" },
              {
                text: "Uniswap X",
                link: "/product/solving/intentsolve/uniswapx",
              },
            ],
          },
          {
            text: "FlashHook (Uniswap v4)",
            link: "/product/solving/flash-hook",
          },
          {
            text: "Liquidity Management",
            link: "/product/solving/liquidity-management",
          },
          { text: "Roadmap", link: "/product/solving/roadmap" },
          { text: "System Design", link: "/product/solving/design" },
          { text: "Design 0.2", link: "/product/solving/design-0-2" },
          { text: "Design 1.0", link: "/product/solving/design-1-0" },
          { text: "Design 2.0", link: "/product/solving/design-2-0" },
          { text: "Implementation", link: "/product/solving/implementation" },
        ],
      },
      {
        text: "Previous Work",
        items: [
          {
            text: "Rainbow Bridge Research (Harmony 2022)",
            link: "/product/previous/2023-02-23-rainbow-costs",
          },
          {
            text: "Draft EAVE Whitepaper",
            link: "/product/previous/2021-12-01-eave-defi",
          },
          {
            text: "Kanga Protocol Whitepaper",
            link: "/product/previous/2021-05-01-kanga",
          },
          {
            text: "EAVE Parachain Design",
            link: "/product/previous/2021-04-01-eave-parachain",
          },
          {
            text: "Lessons Learned from Devcon5",
            link: "/product/previous/2019-10-16-devcon5",
          },
          {
            text: "Project-X Technical White Paper",
            link: "/product/previous/2018-07-17-projectx",
          },
        ],
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
