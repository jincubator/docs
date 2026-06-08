import { createElement, Fragment } from "react";
import { defineConfig } from "vocs";
import remarkMath from "remark-math";
import rehypeMathjax from "rehype-mathjax";
import remarkMermaid from "remark-mermaidjs";
import { rehypeMermaidZoom } from "./rehype-mermaid-zoom.js";

const siteUrl = "https://www.jincubator.com";
const architecturePath = "/research/architecture/john";
const architectureUrl = `${siteUrl}${architecturePath}/`;
const architectureImageUrl = `${siteUrl}/images/research/solver-enterprise-infographic.png`;
const architectureTitle = "System Design & Architecture Portfolio";
const architectureDescription =
  "Selected architecture, system design, and engineering leadership work spanning enterprise integration, payments, distributed systems, blockchain infrastructure, DeFi protocols, and trading systems.";
const defaultOgImageUrl = `https://vocs.dev/api/og?logo=${siteUrl}/images/jincubator.png&title=%title&description=%description`;

export default defineConfig({
  title: "Jincubator",
  description:
    "Research and innovation studio exploring technical systems through research, architecture, prototypes, and product development.",
  iconUrl: "/images/jincubator.png",
  logoUrl: "/images/jincubator.png",
  ogImageUrl: {
    "/": defaultOgImageUrl,
    [architecturePath]: architectureImageUrl,
  },
  head: {
    [architecturePath]: createElement(
      Fragment,
      null,
      createElement("link", {
        rel: "canonical",
        href: architectureUrl,
      }),
      createElement("meta", {
        property: "og:url",
        content: architectureUrl,
      }),
      createElement("meta", {
        name: "twitter:title",
        content: architectureTitle,
      }),
      createElement("meta", {
        name: "twitter:description",
        content: architectureDescription,
      }),
      createElement("meta", {
        name: "twitter:image",
        content: architectureImageUrl,
      }),
    ),
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
    rehypePlugins: [rehypeMathjax, rehypeMermaidZoom],
  },
  topNav: [
    {
      text: "Home",
      link: "/",
    },
    {
      text: "Research",
      link: "/research/intro",
    },
    {
      text: "Architecture",
      link: "/architecture/intro",
    },
    {
      text: "Product",
      link: "/product/intro",
    },
    {
      text: "Proposals",
      link: "/proposals/intro",
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
        text: "Trading Systems",
        items: [
          { text: "Intro", link: "/research/trading-systems/intro" },
          {
            text: "High Performance Route Evaluation",
            link: "/research/solving/solving",
          },
          {
            text: "Tycho and 1inch Solving",
            link: "/research/solving/tycho1inchNOL",
          },
          {
            text: "1inch NEAR Contracts",
            link: "/research/solving/near",
          },
          {
            text: "Intent Management Hook",
            link: "/research/solving/intent-management-hook",
          },
        ],
      },
      {
        text: "Financial Infrastructure",
        items: [
          { text: "Intro", link: "/research/financial-infrastructure/intro" },
          {
            text: "Payments",
            link: "/research/financial-infrastructure/payments/intro",
          },
          {
            text: "Settlement",
            link: "/research/financial-infrastructure/settlement/intro",
          },
          {
            text: "Stablecoins",
            link: "/research/financial-infrastructure/stablecoins/intro",
          },
        ],
      },
      {
        text: "DeFi Protocol Engineering",
        items: [
          { text: "Intro", link: "/research/defi-protocol-engineering/intro" },
          { text: "Intents", link: "/research/Intents/intro" },
          {
            text: "Intent Flow",
            link: "/research/Intents/flow",
          },
          {
            text: "Protocol and Resource Locking",
            link: "/research/Intents/protocol",
          },
          { text: "Resource Management", link: "/research/Intents/resources" },
          { text: "Uniswap V4 Hooks", link: "/research/Intents/hooks" },
          {
            text: "Uniswap V4 - Intent Management Hook",
            link: "/research/solving/intent-management-hook",
          },
          {
            text: "Tycho and 1inch Solving",
            link: "/research/solving/tycho1inchNOL",
          },
        ],
      },
      {
        text: "Distributed Systems",
        items: [
          { text: "Intro", link: "/research/distributed-systems/intro" },
          {
            text: "Chains",
            link: "/research/chains/intro",
          },
          {
            text: "Bridges",
            link: "/research/bridge/intro",
          },
          {
            text: "Zero Knowledge",
            link: "/research/zk/intro",
          },
          {
            text: "Primitives",
            link: "/research/primitives/intro",
          },
          {
            text: "Data Availability",
            link: "/research/dataAvailabilty/celestia",
          },
          {
            text: "Code Reviews",
            link: "/research/code/intro",
          },
        ],
      },
      {
        text: "AI Engineering",
        items: [{ text: "Intro", link: "/research/ai-engineering/intro" }],
      },
      {
        text: "Historical Chains",
        collapsed: true,
        items: [
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
            link: "/research/chains/near",
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
        text: "Historical Code Reviews",
        collapsed: true,
        items: [
          {
            text: "Horizon Bridge",
            link: "/research/code/Horizon",
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
        text: "Historical Bridges",
        collapsed: true,
        items: [
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
        text: "Historical Zero Knowledge",
        collapsed: true,
        items: [
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
        text: "Historical Primitives",
        collapsed: true,
        items: [
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

    "/architecture": [
      { text: "Architecture", link: "/architecture/intro" },
      { text: "Architecture Portfolio", link: "/architecture/portfolio" },
      {
        text: "Trading Systems",
        items: [
          {
            text: "Overview",
            link: "/architecture/trading-systems/intro",
          },
          {
            text: "Solver Architecture",
            link: "/architecture/trading-systems/solver",
          },
          {
            text: "Salus Architecture",
            link: "/architecture/trading-systems/salus",
          },
          {
            text: "Trading Evolution",
            link: "/architecture/trading-systems/evolution",
          },
          {
            text: "Reference Architecture: FalconX",
            link: "/architecture/trading-systems/falconx",
          },
        ],
      },
      {
        text: "Financial Infrastructure",
        items: [
          {
            text: "Overview",
            link: "/architecture/financial-infrastructure/intro",
          },
          {
            text: "Settlement Architecture",
            link: "/architecture/financial-infrastructure/settlement",
          },
          {
            text: "Financial Platform Engineering",
            link: "/architecture/financial-infrastructure/platform-engineering",
          },
          {
            text: "Enterprise SOA",
            link: "/architecture/enterprise-architecture/soa",
          },
          {
            text: "Reference Architecture: Circle",
            link: "/architecture/financial-infrastructure/circle",
          },
        ],
      },
      {
        text: "DeFi Systems",
        items: [
          {
            text: "Overview",
            link: "/architecture/defi-systems/intro",
          },
          {
            text: "Intent Architecture",
            link: "/architecture/defi-systems/intents",
          },
          {
            text: "Protocol Architecture",
            link: "/architecture/defi-systems/protocol",
          },
          {
            text: "Kanga AMM Incentives Migration",
            link: "/architecture/defi-systems/kanga",
          },
        ],
      },
      {
        text: "Distributed Systems",
        items: [
          {
            text: "Overview",
            link: "/architecture/distributed-systems/intro",
          },
          {
            text: "EAVE Parachain Architecture",
            link: "/architecture/distributed-systems/eave",
          },
        ],
      },
      {
        text: "Enterprise Architecture",
        items: [
          {
            text: "Overview",
            link: "/architecture/enterprise-architecture/intro",
          },
          {
            text: "Enterprise SOA",
            link: "/architecture/enterprise-architecture/soa",
          },
        ],
      },
      {
        text: "AI Systems",
        items: [
          {
            text: "Overview",
            link: "/architecture/ai-systems/intro",
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
        ],
      },
      {
        text: "Roadmap",
        items: [
          { text: "Roadmap", link: "/product/solving/roadmap" },
          { text: "Design", link: "/product/solving/design" },
          { text: "Design 0.2", link: "/product/solving/design-0-2" },
          { text: "Design 1.0", link: "/product/solving/design-1-0" },
          { text: "Design 2.0", link: "/product/solving/design-2-0" },
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
