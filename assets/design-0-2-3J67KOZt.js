import{f as r,j as n}from"./index-DFo0gy5F.js";const t={title:"Solver System Design Document - Phase 0.2",description:"undefined"};function s(e){const i={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...r(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(i.header,{children:n.jsxs(i.h1,{id:"solver-system-design-document---phase-02",children:["Solver System Design Document - Phase 0.2",n.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#solver-system-design-document---phase-02",children:n.jsx(i.div,{"data-autolink-icon":!0})})]})}),`
`,n.jsxs(i.h2,{id:"abstract",children:["Abstract",n.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#abstract",children:n.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,n.jsx(i.p,{children:"Phase 0.2 represents the critical transition from pure arbitrage to intent-based solving, introducing the foundational infrastructure for multi-protocol intent resolution. This release establishes the SOLO (Solve Optimal) optimization engine, implements comprehensive Ethereum support with MEV protection, and creates the foundation for solver ecosystem expansion through API services and centralized vault infrastructure."}),`
`,n.jsxs(i.h2,{id:"overview",children:["Overview",n.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#overview",children:n.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,n.jsx(i.p,{children:"Building on the proven 0.1 arbitrage foundation, Phase 0.2 introduces three major feature implementations that transform the solver from a single-purpose arbitrage engine to a sophisticated intent-solving platform:"}),`
`,n.jsxs(i.ol,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:n.jsx(i.a,{href:"#TODO",children:"Ethereum Support"})}),": Advanced gas optimization, price oracle integration, and MEV bundling"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:n.jsx(i.a,{href:"#TODO",children:"UniswapX Support"})}),": Intent-based solving with SOLO optimization and external solver coordination"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:n.jsx(i.a,{href:"#TODO",children:"MultiSolver Support"})}),": Ecosystem expansion through API services, SDK distribution, and centralized vault systems"]}),`
`]}),`
`,n.jsxs(i.h2,{id:"key-design-changes-from-01",children:["Key Design Changes from 0.1",n.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#key-design-changes-from-01",children:n.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,n.jsxs(i.h3,{id:"intent-based-architecture-evolution",children:["Intent-Based Architecture Evolution",n.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#intent-based-architecture-evolution",children:n.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"From Arbitrage-Only to Intent Solving"}),":"]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"0.1 Design"}),": Pure arbitrage cycle detection with fixed execution patterns"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"0.2 Design"}),": Flexible intent resolution with dynamic route generation through SOLO engine"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Impact"}),": Enables participation in UniswapX auctions and solver competition ecosystems"]}),`
`]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"Enhanced Strategy Framework"}),":"]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"New Strategy Types"}),": UNIX (UniswapX) strategy alongside existing CARB and TOKEN strategies"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"SOLO Integration"}),": Universal optimization engine serving all strategy types"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"External Coordination"}),": Signals component enhanced for external solver network participation"]}),`
`]}),`
`,n.jsxs(i.h3,{id:"ethereum-specific-optimizations",children:["Ethereum-Specific Optimizations",n.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#ethereum-specific-optimizations",children:n.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"Advanced Profitability Calculation"}),":"]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Price Oracle Integration"}),": External price validation with Chainlink, Pyth, and TWAP sources"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Gas Calculator Enhancement"}),": EIP-1559 optimization with network congestion awareness"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"MEV-Aware Pricing"}),": Gas strategies accounting for MEV competition"]}),`
`]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"MEV Protection Framework"}),":"]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Bundle-Based Execution"}),": Transaction bundling through Flashbots integration"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Private Mempool Access"}),": Alternative private mempool providers for MEV protection"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Enhanced Execution"}),": MEV bundling capabilities in Execution component"]}),`
`]}),`
`,n.jsxs(i.h3,{id:"liquidity-management-revolution",children:["Liquidity Management Revolution",n.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#liquidity-management-revolution",children:n.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"Permit2 Integration"}),":"]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Signature-Based Access"}),": Reduced flash loan dependency through pre-authorized funds"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Hybrid Funding"}),": Intelligent combination of Permit2 funds and flash loans"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Gas Optimization"}),": Streamlined execution paths with reduced transaction complexity"]}),`
`]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"FlashRouterHook Implementation"}),":"]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Embedded Execution"}),": Flash loan logic embedded directly in Uniswap V4 hooks"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Lock Optimization"}),": Leverages existing V4 lock context for efficiency"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Performance Gains"}),": 20-30% gas savings through hook-based execution"]}),`
`]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"Centralized Vault System"}),":"]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"The Compact Integration"}),": ERC6909 compliant vault using The Compact protocol"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Single Entity Control"}),": Solver acts as allocator, arbiter, and resource manager"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Capital Efficiency"}),": Instant spend capability across arbitrary environments"]}),`
`]}),`
`,n.jsxs(i.h3,{id:"multi-solver-ecosystem-foundation",children:["Multi-Solver Ecosystem Foundation",n.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#multi-solver-ecosystem-foundation",children:n.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"API Infrastructure"}),":"]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"REST and WebSocket APIs"}),": Real-time liquidity data and route optimization services"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"SDK Distribution"}),": Rust crate for embedded solver functionality"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Developer Tooling"}),": Comprehensive tools for ecosystem development"]}),`
`]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"Service Architecture"}),":"]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Microservices Design"}),": Scalable API gateway with specialized services"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Authentication Framework"}),": Secure access control with usage tracking"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Performance Optimization"}),": less than 50ms request latency with 10,000+ requests/second capacity"]}),`
`]}),`
`,n.jsxs(i.h2,{id:"component-architecture-changes",children:["Component Architecture Changes",n.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#component-architecture-changes",children:n.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,n.jsxs(i.h3,{id:"enhanced-components",children:["Enhanced Components",n.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#enhanced-components",children:n.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,n.jsxs(i.h4,{id:"profitability-calculator",children:["Profitability Calculator",n.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#profitability-calculator",children:n.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"New Sub-Components"}),":"]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Price Oracle"}),": Multi-source price validation with deviation analysis"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Gas Calculator"}),": EIP-1559 optimization with MEV-aware pricing"]}),`
`]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"Design Changes"}),":"]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"External price validation pipeline with anomaly detection"}),`
`,n.jsx(i.li,{children:"Dynamic gas price prediction with congestion awareness"}),`
`,n.jsx(i.li,{children:"MEV cost consideration in profit calculations"}),`
`]}),`
`,n.jsxs(i.h4,{id:"liquidity-mapper",children:["Liquidity Mapper",n.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#liquidity-mapper",children:n.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"New Sub-Components"}),":"]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"SOLO Support"}),": Dynamic route generation from liquidity graphs"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"API Hosted"}),": REST and WebSocket services for data distribution"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Crate SDK"}),": Embedded solver functionality distribution"]}),`
`]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"Design Changes"}),":"]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Universal optimization engine serving all strategy types"}),`
`,n.jsx(i.li,{children:"Real-time route optimization for intent-based solving"}),`
`,n.jsx(i.li,{children:"External API infrastructure for ecosystem expansion"}),`
`]}),`
`,n.jsxs(i.h4,{id:"collectors",children:["Collectors",n.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#collectors",children:n.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"New Sub-Components"}),":"]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"UniswapX (UNIX)"}),": Intent monitoring and settlement coordination"]}),`
`]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"Design Changes"}),":"]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Intent lifecycle tracking and auction participation"}),`
`,n.jsx(i.li,{children:"Real-time order book updates with settlement status monitoring"}),`
`,n.jsx(i.li,{children:"Cross-chain intent support architecture"}),`
`]}),`
`,n.jsxs(i.h4,{id:"strategies",children:["Strategies",n.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#strategies",children:n.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"New Sub-Components"}),":"]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"UniswapX (UNIX)"}),": Intent-based solving strategy leveraging SOLO"]}),`
`]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"Design Changes"}),":"]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Intent analysis and optimal route calculation"}),`
`,n.jsx(i.li,{children:"Bid optimization for solver competition"}),`
`,n.jsx(i.li,{children:"Settlement coordination and execution"}),`
`]}),`
`,n.jsxs(i.h4,{id:"signals",children:["Signals",n.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#signals",children:n.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"New Sub-Components"}),":"]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"External Solving Solution"}),": Bid management and solver network coordination"]}),`
`]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"Design Changes"}),":"]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"External solver network integration"}),`
`,n.jsx(i.li,{children:"Competition participation and bid management"}),`
`,n.jsx(i.li,{children:"Cross-solver coordination and communication protocols"}),`
`]}),`
`,n.jsxs(i.h4,{id:"execution",children:["Execution",n.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#execution",children:n.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"New Sub-Components"}),":"]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"MEV Bundling"}),": Transaction bundling for MEV protection"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Permit2"}),": Signature-based fund access integration"]}),`
`]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"Design Changes"}),":"]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Bundle construction and submission to private mempools"}),`
`,n.jsx(i.li,{children:"Hybrid funding strategies combining multiple sources"}),`
`,n.jsx(i.li,{children:"Enhanced execution paths with MEV protection"}),`
`]}),`
`,n.jsxs(i.h4,{id:"liquidity-manager",children:["Liquidity Manager",n.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#liquidity-manager",children:n.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"New Sub-Components"}),":"]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Provided Liquidity Permit2"}),": Pre-authorized fund access"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"No Liquidity FlashRouterHook"}),": Embedded V4 hook execution"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Liquidity Manager Vault"}),": Centralized vault with The Compact integration"]}),`
`]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"Design Changes"}),":"]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Multi-source funding optimization"}),`
`,n.jsx(i.li,{children:"Hook-based execution for V4 pools"}),`
`,n.jsx(i.li,{children:"ERC6909 resource lock management through The Compact"}),`
`]}),`
`,n.jsxs(i.h2,{id:"technical-implementation",children:["Technical Implementation",n.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#technical-implementation",children:n.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,n.jsxs(i.h3,{id:"solo-solve-optimal-engine",children:["SOLO (Solve Optimal) Engine",n.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#solo-solve-optimal-engine",children:n.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"Architecture"}),":"]}),`
`,n.jsx(n.Fragment,{children:n.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:n.jsxs(i.code,{children:[n.jsxs(i.span,{className:"line",children:[n.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"pub"}),n.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" struct"}),n.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" SOLOEngine"}),n.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,n.jsxs(i.span,{className:"line",children:[n.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    liquidity_graph"}),n.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),n.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" Arc"}),n.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"<"}),n.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"LiquidityGraph"}),n.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:">,"})]}),`
`,n.jsxs(i.span,{className:"line",children:[n.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    route_optimizer"}),n.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),n.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" RouteOptimizer"}),n.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,n.jsxs(i.span,{className:"line",children:[n.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    intent_analyzer"}),n.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),n.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" IntentAnalyzer"}),n.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,n.jsxs(i.span,{className:"line",children:[n.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    cache_manager"}),n.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),n.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" CacheManager"}),n.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,n.jsx(i.span,{className:"line",children:n.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})}),`
`,n.jsx(i.span,{className:"line","data-empty-line":!0,children:" "}),`
`,n.jsxs(i.span,{className:"line",children:[n.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"impl"}),n.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" SOLOEngine"}),n.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,n.jsxs(i.span,{className:"line",children:[n.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    pub"}),n.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" async"}),n.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" fn"}),n.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" generate_optimal_route"}),n.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),n.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"&"}),n.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"self"}),n.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", intent"}),n.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),n.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" &"}),n.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"Intent"}),n.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:") "}),n.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"->"}),n.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" Result"}),n.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"<"}),n.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"OptimalRoute"}),n.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),n.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"SOLOError"}),n.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"> {"})]}),`
`,n.jsx(i.span,{className:"line",children:n.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"        // Intent-specific route generation with real-time optimization"})}),`
`,n.jsx(i.span,{className:"line",children:n.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"        // Multi-objective optimization (amount, gas, slippage)"})}),`
`,n.jsx(i.span,{className:"line",children:n.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"        // Dynamic route generation from current liquidity state"})}),`
`,n.jsx(i.span,{className:"line",children:n.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    }"})}),`
`,n.jsx(i.span,{className:"line",children:n.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})})}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"Key Features"}),":"]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Sub-millisecond route generation for competitive bidding"}),`
`,n.jsx(i.li,{children:"Multi-objective optimization across amount, gas cost, and slippage"}),`
`,n.jsx(i.li,{children:"Intent-specific solution encoding for different protocols"}),`
`,n.jsx(i.li,{children:"Performance: 99%+ optimal solutions with less than 1ms generation time"}),`
`]}),`
`,n.jsxs(i.h3,{id:"ethereum-mev-protection",children:["Ethereum MEV Protection",n.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#ethereum-mev-protection",children:n.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"MEV Protection Framework"}),":"]}),`
`,n.jsx(n.Fragment,{children:n.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:n.jsxs(i.code,{children:[n.jsxs(i.span,{className:"line",children:[n.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"pub"}),n.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" struct"}),n.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" MEVProtector"}),n.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,n.jsxs(i.span,{className:"line",children:[n.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    flashbots_client"}),n.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),n.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" FlashbotsClient"}),n.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,n.jsxs(i.span,{className:"line",children:[n.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    bundle_builder"}),n.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),n.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" BundleBuilder"}),n.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,n.jsxs(i.span,{className:"line",children:[n.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    protection_strategy"}),n.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),n.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" ProtectionStrategy"}),n.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,n.jsx(i.span,{className:"line",children:n.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})}),`
`,n.jsx(i.span,{className:"line","data-empty-line":!0,children:" "}),`
`,n.jsxs(i.span,{className:"line",children:[n.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"impl"}),n.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" MEVProtector"}),n.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,n.jsxs(i.span,{className:"line",children:[n.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    pub"}),n.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" async"}),n.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" fn"}),n.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" protect_transaction"}),n.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),n.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"&"}),n.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"self"}),n.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", tx"}),n.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),n.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" Transaction"}),n.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:") "}),n.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"->"}),n.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" Result"}),n.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"<"}),n.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"ProtectedExecution"}),n.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),n.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"MEVError"}),n.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"> {"})]}),`
`,n.jsx(i.span,{className:"line",children:n.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"        // Bundle construction for MEV protection"})}),`
`,n.jsx(i.span,{className:"line",children:n.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"        // Private mempool submission strategies"})}),`
`,n.jsx(i.span,{className:"line",children:n.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"        // Slippage protection in high-MEV environments"})}),`
`,n.jsx(i.span,{className:"line",children:n.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    }"})}),`
`,n.jsx(i.span,{className:"line",children:n.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})})}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"Protection Strategies"}),":"]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Bundle-based execution through Flashbots Protect"}),`
`,n.jsx(i.li,{children:"Private mempool providers for front-running protection"}),`
`,n.jsx(i.li,{children:"MEV-aware gas pricing strategies"}),`
`,n.jsx(i.li,{children:"99% protection rate against common MEV attacks"}),`
`]}),`
`,n.jsxs(i.h3,{id:"the-compact-vault-integration",children:["The Compact Vault Integration",n.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#the-compact-vault-integration",children:n.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"Centralized Vault Architecture"}),":"]}),`
`,n.jsx(n.Fragment,{children:n.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:n.jsxs(i.code,{children:[n.jsxs(i.span,{className:"line",children:[n.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"pub"}),n.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" struct"}),n.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" CompactVaultCentralized"}),n.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,n.jsxs(i.span,{className:"line",children:[n.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    compact"}),n.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),n.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" TheCompact"}),n.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,n.jsxs(i.span,{className:"line",children:[n.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    vault_allocator"}),n.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),n.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" VaultAllocator"}),n.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,n.jsxs(i.span,{className:"line",children:[n.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    solver_arbiter"}),n.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),n.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" SolverArbiter"}),n.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,n.jsxs(i.span,{className:"line",children:[n.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    resource_locks"}),n.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),n.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" HashMap"}),n.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"<"}),n.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"ResourceLockId"}),n.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),n.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"ResourceLockInfo"}),n.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:">,"})]}),`
`,n.jsx(i.span,{className:"line",children:n.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})}),`
`,n.jsx(i.span,{className:"line","data-empty-line":!0,children:" "}),`
`,n.jsxs(i.span,{className:"line",children:[n.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"impl"}),n.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" CompactVaultCentralized"}),n.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,n.jsxs(i.span,{className:"line",children:[n.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    pub"}),n.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" async"}),n.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" fn"}),n.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" create_vault_deposit"}),n.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),n.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"&"}),n.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"self"}),n.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", depositor"}),n.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),n.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" Address"}),n.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", token"}),n.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),n.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" Address"}),n.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", amount"}),n.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),n.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" U256"}),n.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:") "}),n.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"->"}),n.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" Result"}),n.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"<"}),n.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"ResourceLockId"}),n.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),n.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"VaultError"}),n.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"> {"})]}),`
`,n.jsx(i.span,{className:"line",children:n.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"        // ERC6909 resource lock creation"})}),`
`,n.jsx(i.span,{className:"line",children:n.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"        // Vault allocator registration and management"})}),`
`,n.jsx(i.span,{className:"line",children:n.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"        // Single entity control for streamlined operations"})}),`
`,n.jsx(i.span,{className:"line",children:n.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    }"})}),`
`,n.jsx(i.span,{className:"line",children:n.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})})}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"Key Benefits"}),":"]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"ERC6909 compliance through The Compact protocol"}),`
`,n.jsx(i.li,{children:"Instant spend capability across arbitrary environments"}),`
`,n.jsx(i.li,{children:"99%+ capital utilization with centralized control"}),`
`,n.jsx(i.li,{children:"Zero upfront capital through resource lock activation"}),`
`]}),`
`,n.jsxs(i.h3,{id:"api-and-sdk-infrastructure",children:["API and SDK Infrastructure",n.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#api-and-sdk-infrastructure",children:n.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"API Gateway Architecture"}),":"]}),`
`,n.jsx(n.Fragment,{children:n.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:n.jsxs(i.code,{children:[n.jsxs(i.span,{className:"line",children:[n.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"pub"}),n.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" struct"}),n.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" APIGateway"}),n.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,n.jsxs(i.span,{className:"line",children:[n.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    auth_service"}),n.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),n.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" AuthenticationService"}),n.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,n.jsxs(i.span,{className:"line",children:[n.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    data_service"}),n.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),n.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" LiquidityDataService"}),n.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,n.jsxs(i.span,{className:"line",children:[n.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    route_service"}),n.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),n.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" RouteOptimizationService"}),n.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,n.jsxs(i.span,{className:"line",children:[n.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    metrics_service"}),n.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),n.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" MetricsService"}),n.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,n.jsx(i.span,{className:"line",children:n.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})}),`
`,n.jsx(i.span,{className:"line","data-empty-line":!0,children:" "}),`
`,n.jsxs(i.span,{className:"line",children:[n.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"impl"}),n.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" APIGateway"}),n.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,n.jsxs(i.span,{className:"line",children:[n.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    pub"}),n.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" async"}),n.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" fn"}),n.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" handle_request"}),n.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),n.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"&"}),n.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"self"}),n.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", request"}),n.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),n.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" APIRequest"}),n.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:") "}),n.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"->"}),n.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" APIResponse"}),n.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,n.jsx(i.span,{className:"line",children:n.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"        // Authentication and rate limiting"})}),`
`,n.jsx(i.span,{className:"line",children:n.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"        // Real-time data serving"})}),`
`,n.jsx(i.span,{className:"line",children:n.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"        // Route optimization services"})}),`
`,n.jsx(i.span,{className:"line",children:n.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    }"})}),`
`,n.jsx(i.span,{className:"line",children:n.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})})}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"Performance Characteristics"}),":"]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"less than 50ms request latency for standard data requests"}),`
`,n.jsx(i.li,{children:"less than 100ms for complex multi-hop route calculations"}),`
`,n.jsx(i.li,{children:"10,000+ requests per second capacity"}),`
`,n.jsx(i.li,{children:"99.9% uptime with redundant infrastructure"}),`
`]}),`
`,n.jsxs(i.h2,{id:"performance-enhancements",children:["Performance Enhancements",n.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#performance-enhancements",children:n.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,n.jsxs(i.h3,{id:"optimization-metrics",children:["Optimization Metrics",n.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#optimization-metrics",children:n.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"Intent Processing Performance"}),":"]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Route Generation"}),": less than 1ms for typical intents via SOLO engine"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Auction Participation"}),": less than 10ms from intent detection to bid submission"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Settlement Speed"}),": less than 5s average settlement time"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Win Rate Target"}),": 15-25% in competitive solver auctions"]}),`
`]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"Ethereum-Specific Performance"}),":"]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Gas Optimization"}),": 15-30% cost reduction through advanced strategies"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"MEV Protection"}),": 99% protection rate with less than 5% execution latency impact"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Oracle Integration"}),": less than 100ms for multi-source price validation"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Bundle Success"}),": 85% successful bundle inclusion rate"]}),`
`]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"Vault Operations"}),":"]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Capital Utilization"}),": 99%+ utilization rate with centralized control"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Compact Processing"}),": less than 10ms for compact creation and verification"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Resource Lock Management"}),": less than 2s for deposit and lock creation"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Yield Generation"}),": Competitive yields through optimized strategies"]}),`
`]}),`
`,n.jsxs(i.h3,{id:"scalability-improvements",children:["Scalability Improvements",n.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#scalability-improvements",children:n.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"Multi-Chain Coordination"}),":"]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Support for Base, Ethereum, and Unichain networks"}),`
`,n.jsx(i.li,{children:"Chain-specific optimization parameters"}),`
`,n.jsx(i.li,{children:"Cross-chain intent resolution capabilities"}),`
`,n.jsx(i.li,{children:"Network health monitoring and automatic failover"}),`
`]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"Ecosystem Scaling"}),":"]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"API infrastructure supporting 1000+ concurrent solver instances"}),`
`,n.jsx(i.li,{children:"SDK distribution enabling embedded functionality"}),`
`,n.jsx(i.li,{children:"Centralized vault supporting multiple participant strategies"}),`
`,n.jsx(i.li,{children:"Real-time performance monitoring across all components"}),`
`]}),`
`,n.jsxs(i.h2,{id:"integration-architecture",children:["Integration Architecture",n.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#integration-architecture",children:n.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,n.jsxs(i.h3,{id:"protocol-integration-matrix",children:["Protocol Integration Matrix",n.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#protocol-integration-matrix",children:n.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,n.jsxs(i.table,{children:[n.jsx(i.thead,{children:n.jsxs(i.tr,{children:[n.jsx(i.th,{children:"Protocol"}),n.jsx(i.th,{children:"Integration Type"}),n.jsx(i.th,{children:"Component"}),n.jsx(i.th,{children:"Performance Target"})]})}),n.jsxs(i.tbody,{children:[n.jsxs(i.tr,{children:[n.jsx(i.td,{children:"UniswapX"}),n.jsx(i.td,{children:"Intent Solving"}),n.jsx(i.td,{children:"UNIX Strategy + SOLO"}),n.jsx(i.td,{children:"15-25% win rate"})]}),n.jsxs(i.tr,{children:[n.jsx(i.td,{children:"Ethereum Mainnet"}),n.jsx(i.td,{children:"Network Support"}),n.jsx(i.td,{children:"Enhanced Profitability"}),n.jsx(i.td,{children:"15-30% gas savings"})]}),n.jsxs(i.tr,{children:[n.jsx(i.td,{children:"The Compact"}),n.jsx(i.td,{children:"Vault Infrastructure"}),n.jsx(i.td,{children:"Liquidity Manager"}),n.jsx(i.td,{children:"99% capital utilization"})]}),n.jsxs(i.tr,{children:[n.jsx(i.td,{children:"Flashbots"}),n.jsx(i.td,{children:"MEV Protection"}),n.jsx(i.td,{children:"Execution Enhancement"}),n.jsx(i.td,{children:"99% protection rate"})]}),n.jsxs(i.tr,{children:[n.jsx(i.td,{children:"Permit2"}),n.jsx(i.td,{children:"Fund Access"}),n.jsx(i.td,{children:"Liquidity Manager"}),n.jsx(i.td,{children:"20-30% gas savings"})]})]})]}),`
`,n.jsxs(i.h3,{id:"external-system-dependencies",children:["External System Dependencies",n.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#external-system-dependencies",children:n.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"Oracle Networks"}),":"]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Chainlink: Primary price feed source"}),`
`,n.jsx(i.li,{children:"Pyth Network: High-frequency updates"}),`
`,n.jsx(i.li,{children:"Uniswap V3 TWAP: On-chain validation"}),`
`,n.jsx(i.li,{children:"99.9% availability with automatic failover"}),`
`]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"MEV Infrastructure"}),":"]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Flashbots Protect: Primary bundle submission"}),`
`,n.jsx(i.li,{children:"Private mempools: Alternative protection"}),`
`,n.jsx(i.li,{children:"MEV-Boost integration ready for future"}),`
`,n.jsx(i.li,{children:"Comprehensive threat monitoring"}),`
`]}),`
`,n.jsxs(i.h2,{id:"risk-management",children:["Risk Management",n.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#risk-management",children:n.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,n.jsxs(i.h3,{id:"new-risk-categories",children:["New Risk Categories",n.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#new-risk-categories",children:n.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"Intent Solving Risks"}),":"]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Competition risk from other sophisticated solvers"}),`
`,n.jsx(i.li,{children:"Intent validation and execution failures"}),`
`,n.jsx(i.li,{children:"Auction mechanism changes and adaptation lag"}),`
`,n.jsx(i.li,{children:"Cross-chain coordination and settlement failures"}),`
`]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"MEV Protection Risks"}),":"]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Bundle inclusion failures in high-competition environments"}),`
`,n.jsx(i.li,{children:"Private mempool reliability and performance"}),`
`,n.jsx(i.li,{children:"MEV attack surface expansion with new protocols"}),`
`,n.jsx(i.li,{children:"Gas optimization vs. MEV protection trade-offs"}),`
`]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"Vault Operation Risks"}),":"]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"The Compact protocol dependencies and upgrade risks"}),`
`,n.jsx(i.li,{children:"ERC6909 standard adoption and compatibility"}),`
`,n.jsx(i.li,{children:"Resource lock security and forced withdrawal scenarios"}),`
`,n.jsx(i.li,{children:"Single entity control points and centralization risks"}),`
`]}),`
`,n.jsxs(i.h3,{id:"mitigation-strategies",children:["Mitigation Strategies",n.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#mitigation-strategies",children:n.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"Technical Mitigation"}),":"]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Comprehensive testing of all new components"}),`
`,n.jsx(i.li,{children:"Gradual rollout with performance monitoring"}),`
`,n.jsx(i.li,{children:"Fallback mechanisms for all external dependencies"}),`
`,n.jsx(i.li,{children:"Real-time alerting and automated response systems"}),`
`]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"Operational Mitigation"}),":"]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Multi-layer redundancy for critical infrastructure"}),`
`,n.jsx(i.li,{children:"Regular security audits of new components"}),`
`,n.jsx(i.li,{children:"Performance benchmarking and optimization"}),`
`,n.jsx(i.li,{children:"Incident response procedures for new attack vectors"}),`
`]}),`
`,n.jsxs(i.h2,{id:"future-compatibility",children:["Future Compatibility",n.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#future-compatibility",children:n.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,n.jsxs(i.h3,{id:"phase-10-preparation",children:["Phase 1.0 Preparation",n.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#phase-10-preparation",children:n.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"Portfolio Management Foundation"}),":"]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Enhanced signal processing infrastructure ready for internal solutions"}),`
`,n.jsx(i.li,{children:"Execution framework prepared for FLASH mapping and PreFlight checks"}),`
`,n.jsx(i.li,{children:"Vault architecture ready for advanced institutional features"}),`
`]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"Additional Protocol Support"}),":"]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Collector framework extensible to CowSwap and 1inch protocols"}),`
`,n.jsx(i.li,{children:"Strategy framework ready for batch auction and limit order participation"}),`
`,n.jsx(i.li,{children:"Signal processing ready for internal portfolio coordination"}),`
`]}),`
`,n.jsxs(i.h3,{id:"phase-20-architecture",children:["Phase 2.0 Architecture",n.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#phase-20-architecture",children:n.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"Decentralization Readiness"}),":"]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Centralized vault architecture designed for community transition"}),`
`,n.jsx(i.li,{children:"API and SDK infrastructure ready for ecosystem expansion"}),`
`,n.jsx(i.li,{children:"Governance framework preparation for protocol launch"}),`
`]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"Ecosystem Foundation"}),":"]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Developer tools and SDK ready for third-party integration"}),`
`,n.jsx(i.li,{children:"Analytics infrastructure ready for ecosystem-wide insights"}),`
`,n.jsx(i.li,{children:"Performance monitoring ready for decentralized operations"}),`
`]}),`
`,n.jsxs(i.h2,{id:"conclusion",children:["Conclusion",n.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#conclusion",children:n.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,n.jsx(i.p,{children:"Phase 0.2 represents a fundamental architectural evolution that transforms the solver from a specialized arbitrage tool to a comprehensive intent-solving platform. The introduction of SOLO optimization, Ethereum-specific enhancements, and multi-solver ecosystem foundations creates a robust platform for the advanced features planned in subsequent releases."}),`
`,n.jsx(i.p,{children:"The design maintains the proven performance characteristics of the 0.1 foundation while adding the flexibility and sophistication required for intent-based solving across multiple protocols. This balance of stability and innovation positions the system for successful deployment in the competitive intent-solving landscape."}),`
`,n.jsxs(i.h2,{id:"references",children:["References",n.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#references",children:n.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:n.jsx(i.a,{href:"#TODO",children:"Ethereum Support Feature"})}),`
`,n.jsx(i.li,{children:n.jsx(i.a,{href:"#TODO",children:"UniswapX Support Feature"})}),`
`,n.jsx(i.li,{children:n.jsx(i.a,{href:"#TODO",children:"MultiSolver Support Feature"})}),`
`,n.jsx(i.li,{children:n.jsx(i.a,{href:"design.md",children:"Phase 0.1 Design Document"})}),`
`,n.jsx(i.li,{children:n.jsx(i.a,{href:"#TODO",children:"Component Architecture Documentation"})}),`
`,n.jsx(i.li,{children:n.jsx(i.a,{href:"https://github.com/Uniswap/the-compact",children:"The Compact Protocol"})}),`
`,n.jsx(i.li,{children:n.jsx(i.a,{href:"https://docs.uniswap.org/contracts/uniswapx/overview",children:"UniswapX Documentation"})}),`
`,n.jsx(i.li,{children:n.jsx(i.a,{href:"https://docs.flashbots.net/",children:"Flashbots Documentation"})}),`
`]})]})}function a(e={}){const{wrapper:i}={...r(),...e.components};return i?n.jsx(i,{...e,children:n.jsx(s,{...e})}):s(e)}export{a as default,t as frontmatter};
