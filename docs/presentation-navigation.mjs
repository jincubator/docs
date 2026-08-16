/**
 * Public navigation projection for the Vocs presentation shell.
 *
 * Its section order, labels, and hierarchy implement the approved Knowledge
 * Base review navigation contract. Published artifact routes remain the
 * package destinations already integrated into this repository; the restricted
 * competitor-economics draft is deliberately absent.
 */

export const presentationTopNav = [
  { text: "Salus", link: "/salus" },
  { text: "Work", link: "/work" },
  { text: "Research", link: "/research" },
  { text: "Architecture", link: "/architecture" },
  { text: "Writing", link: "/writing" },
  { text: "John Whitton ↗", link: "https://johnwhitton.com/" },
];

export const primaryNavigation = presentationTopNav.map((item) => item.text);

const salusItems = [
  { text: "Overview", link: "/salus" },
  { text: "Whitepaper — Draft", link: "/salus/whitepaper" },
  { text: "Architecture — Draft", link: "/salus/architecture" },
  {
    text: "Low Latency Trading — Draft",
    link: "/writing/salus-low-latency-trading",
  },
];

const workItems = [
  { text: "Overview", link: "/work" },
  { text: "Digital Banking", link: "/work/digital-banking" },
  { text: "DeFi Leveraging", link: "/work/defi-leveraging" },
  { text: "Intent Systems Prototypes", link: "/work/prototypes" },
  { text: "Stablecoin Intents", link: "/work/stablecoin-intents" },
  {
    text: "Building a Polkadot Parachain — EAVE",
    link: "/work/building-polkadot-parachain-eave",
  },
  {
    text: "DeFi Protocol Engineering — Kanga",
    link: "/work/defi-protocol-engineering-kanga",
  },
  { text: "Enterprise SOA", link: "/work/enterprise-soa" },
];

const researchItems = [
  { text: "Overview", link: "/research" },
  {
    text: "High-Performance Route Evaluation",
    link: "/research/high-performance-route-evaluation",
  },
  {
    text: "Deterministic Replay as Engineering Evidence",
    link: "/research/deterministic-replay-as-engineering-evidence",
  },
  {
    text: "What Trading-System Validation Evidence Can Prove",
    link: "/research/trading-system-validation-evidence",
  },
  {
    text: "Durable Financial Settlement",
    link: "/research/financial-infrastructure/settlement/intro",
  },
  {
    text: "Intent-Based Execution",
    link: "/research/defi-protocol-engineering/intro",
  },
];

const architectureItems = [
  { text: "Overview", link: "/architecture" },
  {
    text: "Trading-System Execution Pipelines",
    link: "/architecture/trading-system-execution-pipelines",
  },
  {
    text: "Evidence-Grounded AI for Trading Systems",
    link: "/architecture/evidence-grounded-ai-for-trading-systems",
  },
  {
    text: "From Liquidity State to Route Graphs",
    link: "/architecture/liquidity-state-to-route-graphs",
  },
  {
    text: "Backpressure and Queue Ownership",
    link: "/architecture/backpressure-and-queue-ownership",
  },
  {
    text: "Inspectable Read Models for Trading Systems",
    link: "/architecture/inspectable-trading-read-models",
  },
  {
    text: "Protocol Simulation Boundaries",
    link: "/architecture/protocol-simulation-boundaries",
  },
  {
    text: "Capital-Efficient Funding Models",
    link: "/architecture/capital-efficient-funding-models",
  },
  {
    text: "Durable Settlement Control Planes",
    link: "/architecture/financial-infrastructure/settlement",
  },
  {
    text: "Intent Execution Boundaries",
    link: "/architecture/defi-systems/intents",
  },
];

const writingItems = [
  { text: "Overview", link: "/writing" },
  {
    text: "Salus Low Latency Trading — Draft",
    link: "/writing/salus-low-latency-trading",
  },
];

const archiveItems = [
  { text: "Archive overview", link: "/archive" },
  {
    text: "Research",
    collapsed: true,
    items: [
      {
        text: "Historical Chains",
        collapsed: true,
        items: [
          { text: "Overview", link: "/research/chains/intro" },
          { text: "Avalanche", link: "/research/chains/avalanche" },
          { text: "Binance Smart Chain", link: "/research/chains/binance" },
          { text: "Cosmos", link: "/research/chains/cosmos" },
          { text: "Ethereum 1.0", link: "/research/chains/ethereum-1-0" },
          { text: "Ethereum", link: "/research/chains/ethereum" },
          { text: "NEAR", link: "/research/chains/near" },
          { text: "Harmony", link: "/research/chains/harmony" },
          { text: "Polkadot", link: "/research/chains/polkadot" },
          { text: "Polygon", link: "/research/chains/polygon" },
        ],
      },
      {
        text: "Historical Code Reviews",
        collapsed: true,
        items: [
          { text: "Overview", link: "/research/code/intro" },
          { text: "Horizon Bridge", link: "/research/code/Horizon" },
          { text: "Ethereum Code", link: "/research/code/ethereum" },
          {
            text: "Ethereum Near Bridging",
            link: "/research/code/ethereum-near",
          },
        ],
      },
      {
        text: "Historical Bridges",
        collapsed: true,
        items: [
          { text: "Overview", link: "/research/bridge/intro" },
          { text: "Cosmos IBC", link: "/research/bridge/cosmos-ibc" },
          { text: "Harmony Horizon", link: "/research/bridge/harmony-horizon" },
          { text: "Isomorph", link: "/research/bridge/isomorph" },
          {
            text: "Near Rainbow Bridge",
            link: "/research/bridge/near-rainbow",
          },
          { text: "Polymer Labs", link: "/research/bridge/polymerlabs" },
          { text: "Snowbridge", link: "/research/bridge/snowbridge" },
          { text: "Succinct Labs", link: "/research/bridge/succinct" },
        ],
      },
      {
        text: "Historical Zero Knowledge",
        collapsed: true,
        items: [
          { text: "Overview", link: "/research/zk/intro" },
          { text: "ZK Proof of Stake", link: "/research/zk/zkpos" },
          { text: "zk-SNARKs", link: "/research/zk/zksnarks" },
          { text: "Axiom", link: "/research/zk/axiom" },
        ],
      },
      {
        text: "Historical Primitives",
        collapsed: true,
        items: [{ text: "Primitives", link: "/research/primitives/intro" }],
      },
      {
        text: "Other Research",
        collapsed: true,
        items: [
          { text: "AI Engineering", link: "/research/ai-engineering/intro" },
          {
            text: "Circle Architecture Research Dossier",
            link: "/research/architecture/circle",
          },
          {
            text: "FalconX Architecture Research Dossier",
            link: "/research/architecture/falconx",
          },
          {
            text: "System Design & Architecture Portfolio",
            link: "/research/architecture/john",
          },
          { text: "Overview", link: "/research/deprecated/architecture" },
          { text: "IntentSwap", link: "/research/deprecated/flow" },
          {
            text: "Uniswap V4 Hook Development — WIP",
            link: "/research/deprecated/hooks",
          },
          {
            text: "Solving and Arbitrage Research",
            link: "/research/deprecated/intro",
          },
          { text: "Protocol", link: "/research/deprecated/protocol" },
          {
            text: "Resource Management",
            link: "/research/deprecated/resources",
          },
          {
            text: "Distributed Systems",
            link: "/research/distributed-systems/intro",
          },
          {
            text: "Financial Infrastructure",
            link: "/research/financial-infrastructure/intro",
          },
          {
            text: "Payments",
            link: "/research/financial-infrastructure/payments/intro",
          },
          {
            text: "Stablecoins",
            link: "/research/financial-infrastructure/stablecoins/intro",
          },
          {
            text: "Tycho and 1inch Solving",
            link: "/research/solving/tycho1inchNOL",
          },
          { text: "Trading Systems", link: "/research/trading-systems/intro" },
        ],
      },
    ],
  },
  {
    text: "Architecture",
    collapsed: true,
    items: [
      {
        text: "AI Systems Architecture",
        link: "/architecture/ai-systems/intro",
      },
      {
        text: "DeFi Systems Architecture",
        link: "/architecture/defi-systems/intro",
      },
      {
        text: "Distributed Systems Architecture",
        link: "/architecture/distributed-systems/intro",
      },
      {
        text: "Enterprise Architecture",
        link: "/architecture/enterprise-architecture/intro",
      },
      {
        text: "Financial Infrastructure Architecture",
        link: "/architecture/financial-infrastructure/intro",
      },
      { text: "Architecture Portfolio", link: "/architecture/portfolio" },
      {
        text: "Reference Architecture: FalconX",
        link: "/architecture/trading-systems/falconx",
      },
      {
        text: "Trading Systems Architecture",
        link: "/architecture/trading-systems/intro",
      },
    ],
  },
  {
    text: "Product",
    collapsed: true,
    items: [
      {
        text: "Project-X Technical White Paper",
        link: "/product/previous/2018-07-17-projectx",
      },
      {
        text: "Lessons Learned from Devcon5",
        link: "/product/previous/2019-10-16-devcon5",
      },
      {
        text: "EAVE Parachain Design",
        link: "/product/previous/2021-04-01-eave-parachain",
      },
      {
        text: "Kanga Protocol Whitepaper",
        link: "/product/previous/2021-05-01-kanga",
      },
      {
        text: "Draft EAVE Whitepaper",
        link: "/product/previous/2021-12-01-eave-defi",
      },
      {
        text: "Ethereum Bridging using Light Clients — Rainbow Costing",
        link: "/product/previous/2023-02-23-rainbow-costs",
      },
    ],
  },
  {
    text: "Proposals",
    collapsed: true,
    items: [
      {
        text: "Kanga Finance: Harmony Hackathon 2021",
        link: "/proposals/Harmony",
      },
      {
        text: "Research Proposal: Solvers, Arbitrage & Intent-Based Protocols",
        link: "/proposals/solving-arbitrage",
      },
      { text: "Sunrise DEX", link: "/proposals/sunrise" },
    ],
  },
];

export const presentationSidebar = [
  { text: "Salus", link: "/salus", collapsed: true, items: salusItems },
  { text: "Work", link: "/work", collapsed: true, items: workItems },
  {
    text: "Research",
    link: "/research",
    collapsed: true,
    items: researchItems,
  },
  {
    text: "Architecture",
    link: "/architecture",
    collapsed: true,
    items: architectureItems,
  },
  { text: "Writing", link: "/writing", collapsed: true, items: writingItems },
  { text: "John Whitton ↗", link: "https://johnwhitton.com/" },
  { text: "Archive", link: "/archive", collapsed: true, items: archiveItems },
];
