import { createElement, Fragment } from "react";
import { defineConfig } from "vocs";
import remarkMath from "remark-math";
import rehypeMathjax from "rehype-mathjax";
import remarkMermaid from "remark-mermaidjs";
import { rehypeMermaidZoom } from "./rehype-mermaid-zoom.js";

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
    rehypePlugins: [rehypeMathjax, rehypeMermaidZoom],
  },
  topNav: [
    {
      text: "Work",
      link: "/work/intro",
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
      text: "Articles",
      link: "/articles/intro",
    },
    {
      text: "Engage",
      link: "/engage/intro",
    },
    {
      text: "John Whitton",
      link: "https://johnwhitton.com/",
    },
  ],
  sidebar: {
    "/work": [
      { text: "Work", link: "/work/intro" },
      { text: "Salus", link: "/work/salus" },
      { text: "Prototypes", link: "/prototypes/intro" },
    ],
    "/articles": [
      { text: "Articles", link: "/articles/intro" },
      {
        text: "Solving, Arbitrage & Market Making",
        link: "/articles/solving-arbitrage-market-making",
      },
    ],
    "/prototypes": [
      { text: "Prototypes", link: "/prototypes/intro" },
    ],
    "/archive": [{ text: "Archive", link: "/archive/intro" }],
    "/engage": [{ text: "Engage", link: "/engage/intro" }],
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
      { text: "Legacy Product Route", link: "/product/intro" },
      {
        text: "Public Architecture Summaries",
        items: [
          { text: "Overview", link: "/product/solving/overview" },
          { text: "Collectors", link: "/product/solving/collectors" },
          { text: "Route Evaluation", link: "/product/solving/routes" },
          { text: "Strategies", link: "/product/solving/strategies" },
          { text: "Protocol Onboarding", link: "/product/solving/protocols" },
        ],
      },
    ],
    "/partnerships": [{ text: "Engage", link: "/engage/intro" }],
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
