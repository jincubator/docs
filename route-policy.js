export const ACTIVE_ROUTES = Object.freeze([
  "/",
  "/work/intro",
  "/work/salus",
  "/work/digital-banking",
  "/work/prototypes",
  "/research/intro",
  "/research/solving/solving",
  "/research/financial-infrastructure/settlement/intro",
  "/research/defi-protocol-engineering/intro",
  "/architecture/intro",
  "/architecture/portfolio",
  "/architecture/trading-systems/solver",
  "/architecture/financial-infrastructure/settlement",
  "/architecture/defi-systems/intents",
  "/articles/intro",
  "/articles/solving-arbitrage-market-making",
  "/archive/intro",
  "/engage/intro",
]);

export const COMPATIBILITY_ROUTES = Object.freeze([
  { route: "/prototypes/intro", current: "/work/prototypes" },
  { route: "/product/intro", current: "/work/intro" },
  { route: "/proposals/intro", current: "/work/prototypes" },
  { route: "/partnerships/intro", current: "/engage/intro" },
]);

const HISTORICAL_CONTEXT_EXEMPT_ROUTES = new Set([
  ...ACTIVE_ROUTES,
  ...COMPATIBILITY_ROUTES.map(({ route }) => route),
]);

export function needsHistoricalContext(route) {
  return !HISTORICAL_CONTEXT_EXEMPT_ROUTES.has(route);
}
