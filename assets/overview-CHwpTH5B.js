import{f as r,j as e}from"./index-DFo0gy5F.js";const a={title:"High Performance Solving and Market Making Infrastructure",description:"undefined"};function t(n){const i={a:"a",div:"div",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i.header,{children:e.jsxs(i.h1,{id:"high-performance-solving-and-market-making-infrastructure",children:["High Performance Solving and Market Making Infrastructure",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#high-performance-solving-and-market-making-infrastructure",children:e.jsx(i.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(i.p,{children:"The DeFi Arbitrage Solver is a Rust-based system designed to detect and execute arbitrage opportunities across multiple blockchain networks. The system follows a modular collector-strategy-executor architecture with real-time streaming capabilities."}),`
`,e.jsxs(i.h2,{id:"key-features",children:["Key Features",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#key-features",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Multi-chain Support"}),": Base, Ethereum, Unichain networks"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Real-time Processing"}),": WebSocket connections to Tycho APIs for live data"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Strategy-Based Execution"}),": CARB (Cyclical Arbitrage) and TOKEN (Token-Based Arbitrage) strategies"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Flash Loan Integration"}),": Automated flash loan execution for arbitrage"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Route Blacklisting"}),": Intelligent route management to prevent repeated failures"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Performance Optimization"}),": Sub-millisecond route calculations with in-memory caching"]}),`
`]}),`
`,e.jsxs(i.p,{children:["The architecture follows the principle: ",e.jsx(i.strong,{children:"Collectors → Strategies → Execution"})," and layers on route evaluation and liquidity mapping."]}),`
`,e.jsxs(i.h2,{id:"liquidity-mapping",children:["Liquidity Mapping",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#liquidity-mapping",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.p,{children:"Conceptually this was fairly straight forward, create a graph with Tokens as Nodes, Pools as edges and then create routes for that graph. With the protocol abstraction offered by Tycho's component and state model. A pool is a pool is a pool regardless of what the underlying protocol is. This simplified the implementation considerably"}),`
`,e.jsxs(i.h2,{id:"route-evaluation",children:["Route Evaluation",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#route-evaluation",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.h2,{id:"collectors-continuously-stream-on-chain-data",children:["Collectors: Continuously stream on-chain data",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#collectors-continuously-stream-on-chain-data",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.p,{children:["The bedrock of the collection architecture is the ",e.jsx(i.a,{href:"https://docs.propellerheads.xyz/tycho/for-solvers/indexer",children:"Tycho Indexer"})," built on ",e.jsx(i.a,{href:"https://docs.substreams.dev/",children:"substreams"}),". It provides real time state updates for multiple protocols filtered by TVL values for those protocols."]}),`
`,e.jsx(i.p,{children:"On top of this we build a graph manager and a route manager using Depth First Search of the graph to create the routes with a little flash_loan_manager to determine the optimal flash loan available. This includes choosing the flash loan with the lowest fee which does not have any locking conflicts with the route."}),`
`,e.jsx(i.p,{children:"The key point for collection, once again enabled by Tycho streaming technology, is that on a state change to any of the protocols which I am monitoring. I trigger route evaluations for all routes that contain that pool. Evaluating whether a positive arbitrage cycle exists or not. I must admit its tireless work for the route evaluate and its queue manager, evaluating hundreds or even thousands of routes per block, but occasionally, just occasionally an opportunity will be found, which makes it all worthwhile."}),`
`,e.jsxs(i.h2,{id:"strategies-analyze-and-simulate-opportunities",children:["Strategies: Analyze and simulate opportunities",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#strategies-analyze-and-simulate-opportunities",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.p,{children:"The system implements two primary strategies for arbitrage execution:"}),`
`,e.jsxs(i.h3,{id:"carb-strategy-cyclical-arbitrage",children:["CARB Strategy (Cyclical Arbitrage)",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#carb-strategy-cyclical-arbitrage",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Traditional Approach"}),": Evaluates all profitable routes independently"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Execution Model"}),": Multiple routes can be executed per arbitrage cycle"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Use Case"}),": General-purpose arbitrage detection with profit optimization"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Algorithm"}),": Bellman-Ford cycle detection for negative cycles"]}),`
`]}),`
`,e.jsxs(i.h3,{id:"token-strategy-token-based-arbitrage",children:["TOKEN Strategy (Token-Based Arbitrage)",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#token-strategy-token-based-arbitrage",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Grouped Execution"}),": Routes are grouped by input token"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Selection Logic"}),": Only the best route per token group is executed"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Risk Management"}),": Prevents duplicate execution of similar opportunities"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Testing Mode"}),": Supports forced execution of even negative profit routes for validation"]}),`
`]}),`
`,e.jsx(i.p,{children:"The TOKEN strategy addresses two critical issues:"}),`
`,e.jsxs(i.ol,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Duplicate Execution Risk"}),": Multiple routes executing for the same opportunity"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Repeated Failing Transactions"}),": Same failed routes being retried continuously"]}),`
`]}),`
`,e.jsxs(i.h3,{id:"profitability-calculation",children:["Profitability Calculation",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#profitability-calculation",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.p,{children:"Each route evaluation includes:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Base Profit"}),": Output amount minus input amount"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Flash Loan Fees"}),": Calculated based on flash loan provider (typically 30 bps for Uniswap V3)"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Gas Costs"}),": Dynamic gas estimation with current network conditions"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Net Profit"}),": Base profit minus all fees and costs"]}),`
`]}),`
`,e.jsxs(i.h2,{id:"execution-executing-the-transactions",children:["Execution: Executing the transactions",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#execution-executing-the-transactions",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.p,{children:"The execution layer provides robust transaction execution with comprehensive validation and error handling."}),`
`,e.jsxs(i.h3,{id:"execution-pipeline",children:["Execution Pipeline",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#execution-pipeline",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ol,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Route Validation"}),": Structural validation of route components"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Pre-flight Simulation"}),": On-chain simulation to verify profitability"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Transaction Building"}),": EIP-1559 compliant transaction construction"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Gas Optimization"}),": Dynamic gas parameter adjustment"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Transaction Submission"}),": Retry logic with nonce synchronization"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Result Monitoring"}),": Transaction confirmation and result logging"]}),`
`]}),`
`,e.jsxs(i.h3,{id:"flash-loan-integration",children:["Flash Loan Integration",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#flash-loan-integration",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.p,{children:"The system supports multiple flash loan providers:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Uniswap V3"}),": Primary provider (30 bps fee)"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Uniswap V4"}),": With overflow protection"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Balancer V2"}),": 0 bps fee option"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Aave V3"}),": Variable fee structure"]}),`
`]}),`
`,e.jsx(i.p,{children:"Flash loan selection criteria:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Must contain the starting token for the route"}),`
`,e.jsx(i.li,{children:"Flash token must NOT be in the route path"}),`
`,e.jsx(i.li,{children:"Lowest fee provider is automatically selected"}),`
`]}),`
`,e.jsxs(i.h3,{id:"error-handling--blacklisting",children:["Error Handling & Blacklisting",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#error-handling--blacklisting",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.p,{children:"Failed routes are automatically blacklisted based on:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Pre-flight Failures"}),": Invalid route structure, missing components"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Simulation Failures"}),": Routes that would revert on-chain"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Validation Errors"}),": Protocol compatibility issues"]}),`
`]}),`
`,e.jsxs(i.p,{children:[e.jsx(i.strong,{children:"Note"}),": Post-flight transaction reverts are logged but NOT automatically blacklisted to avoid removing routes that fail due to temporary conditions (MEV, slippage, etc.)."]})]})}function o(n={}){const{wrapper:i}={...r(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(t,{...n})}):t(n)}export{o as default,a as frontmatter};
