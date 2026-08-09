/**
 * Public navigation projection for the Vocs presentation shell.
 *
 * Its section order, labels, and hierarchy implement the approved Knowledge
 * Base review navigation contract. Published artifact routes remain the
 * package destinations already integrated into this repository; the restricted
 * competitor-economics draft is deliberately absent.
 */

export const presentationTopNav = [
  { text: "Work", link: "/work" },
  { text: "Salus", link: "/work/salus" },
  { text: "Research", link: "/research" },
  { text: "Architecture", link: "/architecture" },
  { text: "Writing", link: "/writing" },
  { text: "About", link: "/about" },
];

export const primaryNavigation = presentationTopNav.map((item) => item.text);

const workItems = [
  { text: "Overview", link: "/work" },
  { text: "Salus", link: "/work/salus" },
  { text: "Digital Banking", link: "/work/digital-banking" },
  { text: "DeFi Leveraging", link: "/work/defi-leveraging" },
  { text: "Intent Systems Prototypes", link: "/work/prototypes" },
  { text: "Stablecoin Intents", link: "/work/stablecoin-intents" },
  { text: "Building a Polkadot Parachain — EAVE", link: "/work/building-polkadot-parachain-eave" },
  { text: "DeFi Protocol Engineering — Kanga", link: "/work/defi-protocol-engineering-kanga" },
  { text: "Enterprise SOA", link: "/work/enterprise-soa" },
];

const researchItems = [
  { text: "Overview", link: "/research" },
  { text: "High-Performance Route Evaluation", link: "/research/high-performance-route-evaluation" },
  { text: "Deterministic Replay as Engineering Evidence", link: "/research/deterministic-replay-as-engineering-evidence" },
  { text: "What Trading-System Validation Evidence Can Prove", link: "/research/trading-system-validation-evidence" },
  { text: "Durable Financial Settlement", link: "/research/financial-infrastructure/settlement/intro" },
  { text: "Intent-Based Execution", link: "/research/defi-protocol-engineering/intro" },
];

const architectureItems = [
  { text: "Overview", link: "/architecture" },
  { text: "Trading-System Execution Pipelines", link: "/architecture/trading-system-execution-pipelines" },
  { text: "Evidence-Grounded AI for Trading Systems", link: "/architecture/evidence-grounded-ai-for-trading-systems" },
  { text: "From Liquidity State to Route Graphs", link: "/architecture/liquidity-state-to-route-graphs" },
  { text: "Backpressure and Queue Ownership", link: "/architecture/backpressure-and-queue-ownership" },
  { text: "Inspectable Read Models for Trading Systems", link: "/architecture/inspectable-trading-read-models" },
  { text: "Protocol Simulation Boundaries", link: "/architecture/protocol-simulation-boundaries" },
  { text: "Capital-Efficient Funding Models", link: "/architecture/capital-efficient-funding-models" },
  { text: "Durable Settlement Control Planes", link: "/architecture/financial-infrastructure/settlement" },
  { text: "Intent Execution Boundaries", link: "/architecture/defi-systems/intents" },
];

const writingItems = [
  { text: "Overview", link: "/writing" },
  { text: "Solving, Arbitrage & Market Making", link: "/writing/solving-arbitrage-market-making" },
  { text: "Mapping Liquidity to Routes at Scale", link: "/writing/mapping-liquidity-to-routes-at-scale" },
  { text: "I Built a Fast Arbitrage Engine. Speed Wasn't the Problem.", link: "/writing/speed-wasnt-the-problem" },
];

const archiveItems = [
  { text: "Archive overview", link: "/archive" },
  {
    text: "Research",
    collapsed: true,
    items: [
      { text: "Historical Chains", link: "/research/chains/intro" },
      { text: "Historical Code Reviews", link: "/research/code/intro" },
      { text: "Historical Bridges", link: "/research/bridge/intro" },
      { text: "Historical Zero Knowledge", link: "/research/zk/intro" },
      { text: "Historical Primitives", link: "/research/primitives/intro" },
      { text: "Other Research", link: "/research/intro" },
    ],
  },
  {
    text: "Architecture",
    collapsed: true,
    items: [{ text: "Historical Architecture", link: "/architecture/intro" }],
  },
  {
    text: "Product",
    collapsed: true,
    items: [{ text: "Historical Product", link: "/product/intro" }],
  },
  {
    text: "Proposals",
    collapsed: true,
    items: [{ text: "Historical Proposals", link: "/proposals/intro" }],
  },
];

export const presentationSidebar = [
  { text: "Work", link: "/work", collapsed: true, items: workItems },
  { text: "Research", link: "/research", collapsed: true, items: researchItems },
  { text: "Architecture", link: "/architecture", collapsed: true, items: architectureItems },
  { text: "Writing", link: "/writing", collapsed: true, items: writingItems },
  { text: "About", link: "/about", collapsed: true, items: [{ text: "Overview", link: "/about" }] },
  { text: "Archive", link: "/archive", collapsed: true, items: archiveItems },
];
