import{f as r,j as e}from"./index-B3aGu-ft.js";const a={title:"CowSwap",description:"undefined"};function n(s){const i={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i.header,{children:e.jsxs(i.h1,{id:"cowswap",children:["CowSwap",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#cowswap",children:e.jsx(i.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(i.h2,{id:"overview",children:["Overview",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#overview",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.p,{children:"CowSwap is a MEV-protected DEX that uses batch auctions and coincidence of wants to provide better prices and protection from MEV. Our solver infrastructure provides comprehensive support for CowSwap's intent-based solving system, enabling efficient order filling and improved user outcomes."}),`
`,e.jsxs(i.h2,{id:"using-our-solution",children:["Using our Solution",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#using-our-solution",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.p,{children:"Our CowSwap solver integration enables:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Batch Auction Solving"}),": Participate in CowSwap's batch auction mechanism for optimal price discovery"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"MEV Protection"}),": Leverage CowSwap's inherent MEV protection while providing competitive pricing"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Coincidence of Wants"}),": Identify and execute direct token-to-token matches between traders"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Multi-protocol Routing"}),": Use our comprehensive liquidity aggregation for order filling"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Real-time Optimization"}),": Process and solve orders with microsecond-level evaluation"]}),`
`]}),`
`,e.jsxs(i.h2,{id:"solution-overview",children:["Solution Overview",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#solution-overview",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.p,{children:"The CowSwap solver integration leverages our high-performance solving infrastructure to participate in CowSwap's decentralized solver ecosystem. The system can evaluate multiple orders simultaneously and find optimal execution paths using our multi-protocol liquidity aggregation."}),`
`,e.jsxs(i.h3,{id:"cowswap-protocol-integration",children:["CowSwap Protocol Integration",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#cowswap-protocol-integration",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.h4,{id:"batch-auction-mechanics",children:["Batch Auction Mechanics",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#batch-auction-mechanics",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.p,{children:"CowSwap operates on batch auctions where multiple orders are solved together in discrete time intervals:"}),`
`,e.jsxs(i.ol,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Order Collection"}),": Gather user orders during auction period"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Solver Competition"}),": Multiple solvers compete to provide best execution"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Settlement"}),": Winning solver executes all orders in single transaction"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Fee Distribution"}),": Solvers earn fees based on execution quality"]}),`
`]}),`
`,e.jsxs(i.h4,{id:"order-types-supported",children:["Order Types Supported",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#order-types-supported",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Market Orders"}),": Immediate execution at current market prices"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Limit Orders"}),": Execution only when price conditions are met"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Fill-or-Kill"}),": Complete execution or cancellation"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Partial Fill"}),": Allow partial order execution"]}),`
`]}),`
`,e.jsxs(i.h3,{id:"architecture-integration",children:["Architecture Integration",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#architecture-integration",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.p,{children:"Our solver infrastructure integrates with CowSwap through several key components:"}),`
`,e.jsxs(i.h4,{id:"order-monitoring",children:["Order Monitoring",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#order-monitoring",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Real-time Order Streaming"}),": Monitor new orders as they enter the auction"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Order Parsing"}),": Extract order parameters and constraints"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Profitability Assessment"}),": Evaluate potential profit from solving each order"]}),`
`]}),`
`,e.jsxs(i.h4,{id:"solution-generation",children:["Solution Generation",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#solution-generation",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Route Discovery"}),": Find optimal execution paths using our route evaluation engine"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Multi-order Optimization"}),": Solve multiple orders together for improved efficiency"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Coincidence of Wants Detection"}),": Identify opportunities for direct order matching"]}),`
`]}),`
`,e.jsxs(i.h4,{id:"settlement-execution",children:["Settlement Execution",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#settlement-execution",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Solution Encoding"}),": Convert execution plans to CowSwap settlement format"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Gas Optimization"}),": Minimize transaction costs through efficient batching"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"MEV Protection"}),": Ensure execution maintains MEV protection guarantees"]}),`
`]}),`
`,e.jsxs(i.h2,{id:"technical-reference",children:["Technical Reference",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#technical-reference",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.h3,{id:"solver-architecture",children:["Solver Architecture",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#solver-architecture",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.h4,{id:"cowswap-solver-interface",children:["CowSwap Solver Interface",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#cowswap-solver-interface",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(e.Fragment,{children:e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(i.code,{children:[e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"pub"}),e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" struct"}),e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" CowSwapSolver"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    pub"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" route_analyzer"}),e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" RouteAnalyzer"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    pub"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" liquidity_aggregator"}),e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" LiquidityAggregator"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    pub"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" settlement_encoder"}),e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" SettlementEncoder"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    pub"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" order_monitor"}),e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" OrderMonitor"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})}),`
`,e.jsx(i.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"impl"}),e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" CowSwapSolver"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    pub"}),e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" async"}),e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" fn"}),e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" solve_batch"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"&"}),e.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"self"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", orders"}),e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" Vec"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"<"}),e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"Order"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:">) "}),e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"->"}),e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" Result"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"<"}),e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"Settlement"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"> {"})]}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"        // Analyze each order for solvability"})}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"        let"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" solvable_orders "}),e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),e.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" self"}),e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"."}),e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"filter_solvable_orders"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(orders)"}),e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:".await?"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,e.jsx(i.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"        // Find optimal execution paths"})}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"        let"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" solutions "}),e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),e.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" self"}),e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"."}),e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"generate_solutions"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(solvable_orders)"}),e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:".await?"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,e.jsx(i.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"        // Optimize for batch execution"})}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"        let"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" optimized_settlement "}),e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),e.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" self"}),e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"."}),e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"optimize_settlement"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(solutions)"}),e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:".await?"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,e.jsx(i.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"        Ok"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(optimized_settlement)"})]}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    }"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})})}),`
`,e.jsxs(i.h4,{id:"order-evaluation-process",children:["Order Evaluation Process",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#order-evaluation-process",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ol,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Order Validation"}),": Verify order parameters and constraints"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Liquidity Assessment"}),": Check available liquidity for execution"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Route Generation"}),": Create execution paths using our route discovery"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Profitability Check"}),": Ensure positive profit after fees and gas costs"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Solution Ranking"}),": Rank solutions by execution quality and profit"]}),`
`]}),`
`,e.jsxs(i.h3,{id:"integration-with-our-infrastructure",children:["Integration with Our Infrastructure",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#integration-with-our-infrastructure",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.h4,{id:"collectors-integration",children:["Collectors Integration",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#collectors-integration",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Order Stream Monitoring"}),": Real-time monitoring of CowSwap order placement"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Pool State Synchronization"}),": Ensure pool states are current for accurate pricing"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Cross-protocol Data"}),": Aggregate liquidity data from all supported protocols"]}),`
`]}),`
`,e.jsxs(i.h4,{id:"route-evaluation",children:["Route Evaluation",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#route-evaluation",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"CowSwap-specific Constraints"}),": Account for settlement deadlines and constraints"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Multi-order Routes"}),": Evaluate routes that can satisfy multiple orders"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"CoW Opportunity Detection"}),": Identify direct trading opportunities between orders"]}),`
`]}),`
`,e.jsxs(i.h4,{id:"strategy-framework",children:["Strategy Framework",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#strategy-framework",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Batch Optimization Strategy"}),": Specialized strategy for batch auction solving"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Priority Handling"}),": Handle order prioritization based on fees and timing"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Risk Management"}),": Manage solver reputation and execution risks"]}),`
`]}),`
`,e.jsxs(i.h3,{id:"settlement-mechanics",children:["Settlement Mechanics",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#settlement-mechanics",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.h4,{id:"settlement-encoding",children:["Settlement Encoding",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#settlement-encoding",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.p,{children:"Convert our internal route representations to CowSwap settlement format:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(i.code,{children:[e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"pub"}),e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" fn"}),e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" encode_cowswap_settlement"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("})]}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    solutions"}),e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" Vec"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"<"}),e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"RouteSolution"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:">,"})]}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    orders"}),e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" Vec"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"<"}),e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"Order"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:">,"})]}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:") "}),e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"->"}),e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" Result"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"<"}),e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"Settlement"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"> {"})]}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    let"}),e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" mut"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" settlement "}),e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" Settlement"}),e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"::"}),e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"new"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"();"})]}),`
`,e.jsx(i.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    // Add order executions"})}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    for"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" (solution, order) "}),e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"in"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" solutions"}),e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"."}),e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"iter"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"()"}),e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"."}),e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"zip"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(orders"}),e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"."}),e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"iter"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"()) {"})]}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"        settlement"}),e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"."}),e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"add_trade"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"Trade"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"            order_uid"}),e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" order"}),e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"."}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"uid,"})]}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"            executed_amount"}),e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" solution"}),e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"."}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"output_amount,"})]}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"            fee_amount"}),e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" solution"}),e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"."}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"fee_amount,"})]}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"        });"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    }"})}),`
`,e.jsx(i.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    // Add liquidity interactions"})}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    for"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" interaction "}),e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"in"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" solution"}),e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"."}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"interactions {"})]}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"        settlement"}),e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"."}),e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"add_interaction"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(interaction);"})]}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    }"})}),`
`,e.jsx(i.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"    Ok"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(settlement)"})]}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})})}),`
`,e.jsxs(i.h4,{id:"gas-optimization",children:["Gas Optimization",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#gas-optimization",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Batch Interactions"}),": Combine multiple protocol interactions"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Interaction Ordering"}),": Optimize interaction sequence for gas efficiency"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Flash Loan Integration"}),": Use flash loans for capital-efficient execution"]}),`
`]}),`
`,e.jsxs(i.h3,{id:"performance-characteristics",children:["Performance Characteristics",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#performance-characteristics",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.h4,{id:"solving-performance",children:["Solving Performance",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#solving-performance",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Order Processing"}),": Process hundreds of orders per batch"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Solution Generation"}),": Generate solutions within auction time constraints"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Quality Optimization"}),": Optimize for price improvement and execution probability"]}),`
`]}),`
`,e.jsxs(i.h4,{id:"competitive-advantages",children:["Competitive Advantages",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#competitive-advantages",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Multi-protocol Access"}),": Access to broader liquidity than single-protocol solvers"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Advanced Routing"}),": Sophisticated route discovery and optimization"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Real-time Updates"}),": Live pool state updates for accurate pricing"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Flash Loan Efficiency"}),": Capital-efficient execution without inventory requirements"]}),`
`]}),`
`,e.jsxs(i.h3,{id:"best-practices",children:["Best Practices",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#best-practices",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.h4,{id:"solver-operation",children:["Solver Operation",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#solver-operation",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Competitive Bidding"}),": Submit competitive solutions to win auctions"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Quality Focus"}),": Prioritize execution quality over maximum profit extraction"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Reliability"}),": Maintain high solver reliability and reputation"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Gas Management"}),": Optimize gas usage for profitable execution"]}),`
`]}),`
`,e.jsxs(i.h4,{id:"risk-management",children:["Risk Management",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#risk-management",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Execution Risk"}),": Manage risks from failed settlements"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Market Risk"}),": Handle price movements during auction periods"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Reputation Risk"}),": Maintain solver standing in CowSwap ecosystem"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Capital Risk"}),": Manage flash loan and execution capital requirements"]}),`
`]}),`
`,e.jsxs(i.h3,{id:"future-enhancements",children:["Future Enhancements",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#future-enhancements",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.h4,{id:"planned-improvements",children:["Planned Improvements",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#planned-improvements",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Advanced CoW Detection"}),": Enhanced algorithms for coincidence of wants"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Cross-chain Support"}),": Support for CowSwap cross-chain intents"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Intent Abstraction"}),": Higher-level intent solving beyond simple swaps"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Solver Coordination"}),": Coordination mechanisms with other solvers"]}),`
`]}),`
`,e.jsxs(i.h4,{id:"integration-roadmap",children:["Integration Roadmap",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#integration-roadmap",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Enhanced Order Types"}),": Support for complex order types and conditions"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Real-time Optimization"}),": Sub-second optimization for competitive advantage"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Machine Learning"}),": ML-based solution optimization and ranking"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Protocol Extensions"}),": Integration with CowSwap protocol upgrades"]}),`
`]})]})}function t(s={}){const{wrapper:i}={...r(),...s.components};return i?e.jsx(i,{...s,children:e.jsx(n,{...s})}):n(s)}export{t as default,a as frontmatter};
