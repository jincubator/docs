export const ACTIVE_ROUTES = Object.freeze([
  "/",
  "/work",
  "/work/salus",
  "/work/digital-banking",
  "/work/defi-leveraging",
  "/work/prototypes",
  "/work/stablecoin-intents",
  "/work/building-polkadot-parachain-eave",
  "/work/defi-protocol-engineering-kanga",
  "/work/enterprise-soa",
  "/research",
  "/research/high-performance-route-evaluation",
  "/research/deterministic-replay-as-engineering-evidence",
  "/research/trading-system-validation-evidence",
  "/research/financial-infrastructure/settlement/intro",
  "/research/defi-protocol-engineering/intro",
  "/architecture",
  "/architecture/trading-system-execution-pipelines",
  "/architecture/evidence-grounded-ai-for-trading-systems",
  "/architecture/liquidity-state-to-route-graphs",
  "/architecture/backpressure-and-queue-ownership",
  "/architecture/inspectable-trading-read-models",
  "/architecture/protocol-simulation-boundaries",
  "/architecture/capital-efficient-funding-models",
  "/architecture/financial-infrastructure/settlement",
  "/architecture/defi-systems/intents",
  "/writing",
  "/writing/solving-arbitrage-market-making",
  "/writing/mapping-liquidity-to-routes-at-scale",
  "/writing/speed-wasnt-the-problem",
  "/about",
  "/archive",
]);

export const COMPATIBILITY_ROUTES = Object.freeze([
  { route: "/prototypes/intro", current: "/work/prototypes" },
  { route: "/product/intro", current: "/work" },
  { route: "/proposals/intro", current: "/work/prototypes" },
  { route: "/partnerships/intro", current: "/about" },
]);

const HISTORICAL_CONTEXT_EXEMPT_ROUTES = new Set([
  ...ACTIVE_ROUTES,
  ...COMPATIBILITY_ROUTES.map(({ route }) => route),
]);

export function needsHistoricalContext(route) {
  return !HISTORICAL_CONTEXT_EXEMPT_ROUTES.has(route);
}
