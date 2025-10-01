import{f as r,j as e}from"./index-DFo0gy5F.js";const a={title:"Jincubator Limit Order Protocol: Unite Defi (2025)",description:"undefined"};function i(n){const s={a:"a",code:"code",div:"div",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.header,{children:e.jsxs(s.h1,{id:"jincubator-limit-order-protocol-unite-defi-2025",children:["Jincubator Limit Order Protocol: Unite Defi (2025)",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#jincubator-limit-order-protocol-unite-defi-2025",children:e.jsx(s.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(s.header,{children:e.jsxs(s.h1,{id:"unite-defi-2025-jincubator-1inch-tycho-noliquidity-swap",children:["Unite Defi 2025 Jincubator 1inch Tycho NoLiquidity Swap",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#unite-defi-2025-jincubator-1inch-tycho-noliquidity-swap",children:e.jsx(s.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(s.h2,{id:"jincubator-unite-defi-overview",children:["Jincubator Unite Defi Overview",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#jincubator-unite-defi-overview",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.a,{href:"https://jincubator.com",children:"Jincbuator"})," is a research and development lab focusing on Solving, Arbitrage and Capital Efficient"]}),`
`,e.jsxs(s.h2,{id:"no-liquidity-solving-walkthrough",children:["No Liquidity Solving Walkthrough",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#no-liquidity-solving-walkthrough",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx("iframe",{src:"https://www.loom.com/embed/c59e1a9eb2064d4a855cabab3941a514",frameborder:"0",allowfullscreen:!0,allow:"autoplay; encrypted-media",style:{width:"100%",height:"500px",borderRadius:"12px"}}),`
`,e.jsx(s.p,{children:"The following Actions are Taken"}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsx(s.li,{children:"Mary has one ETH"}),`
`,e.jsx(s.li,{children:"Chainlink Oracle has 1ETH = 2000DAI"}),`
`,e.jsx(s.li,{children:"Mary creates a an order 1ETH for 2000DAI"}),`
`,e.jsx(s.li,{children:"Tabatha using Tycho finds Uniswap V2 will swap 1ETH for 2018DAI"}),`
`,e.jsx(s.li,{children:"Tabatha Takes the Order"}),`
`,e.jsx(s.li,{children:"Order Settles"}),`
`]}),`
`,e.jsx(s.strong,{children:"Additional Notes"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"*This uses a modified version of 1inch Limit Order Protocol which allows TychoSwapExecutor to settle the Makers Funds"}),`
`,e.jsx(s.li,{children:"**Mary approves 1ETH to be used by Limit-Order-Protocol (and Tycho Swap Router)"}),`
`,e.jsx(s.li,{children:"**Mary’s 1ETH is used for the swap - No Liquidity is provided by Tabatha - Transaction reverts if < 2000 DAI is returned"}),`
`,e.jsx(s.li,{children:"***Taking and Settling the order is an atomic transaction integrating TychoSwapExecutor.sol as a TakerInteraction in LimitOrderProtocol.sol"}),`
`]}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Action"}),e.jsx(s.th,{children:"Mary Maker"}),e.jsx(s.th,{children:"Limit Order Protocol"}),e.jsx(s.th,{children:"Tabatha Tycho Taker"}),e.jsx(s.th,{children:"Jincubator Protocol"}),e.jsx(s.th,{children:"Tycho Simulation"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"1"}),e.jsx(s.td,{children:"1 ETH"}),e.jsx(s.td,{}),e.jsx(s.td,{}),e.jsx(s.td,{}),e.jsx(s.td,{})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"2"}),e.jsx(s.td,{children:"1 ETH"}),e.jsx(s.td,{}),e.jsx(s.td,{}),e.jsx(s.td,{}),e.jsx(s.td,{})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"3"}),e.jsx(s.td,{children:"1ETH"}),e.jsx(s.td,{children:e.jsx(s.em,{children:"1ETH*"})}),e.jsx(s.td,{}),e.jsx(s.td,{children:"OrderCalculator.sol integrates price oracles for creating spread orders"}),e.jsx(s.td,{})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"4"}),e.jsx(s.td,{children:"1ETH"}),e.jsx(s.td,{children:e.jsx(s.em,{children:"1ETH*"})}),e.jsx(s.td,{}),e.jsx(s.td,{}),e.jsx(s.td,{children:"Tycho Indexing and Simulation (Off Chain Price Discovery)"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"5"}),e.jsx(s.td,{}),e.jsx(s.td,{children:"2018DAI**"}),e.jsx(s.td,{}),e.jsx(s.td,{children:"TychoExecutor.sol executes the trade on UniswapV3"}),e.jsx(s.td,{children:"TychoRouter is called by TychoSwapRouter to execute the trade"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"6"}),e.jsx(s.td,{children:"200DAI"}),e.jsx(s.td,{}),e.jsx(s.td,{children:"18DAI"}),e.jsx(s.td,{children:"LimitOrderProtocol.sol sends Mary 2000 DAI from Tabatha"}),e.jsx(s.td,{})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{}),e.jsx(s.td,{}),e.jsx(s.td,{}),e.jsx(s.td,{}),e.jsx(s.td,{}),e.jsx(s.td,{})]})]})]}),`
`,e.jsxs(s.h2,{id:"jincubator-limit-order-protocol",children:["Jincubator Limit Order Protocol",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#jincubator-limit-order-protocol",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["This protocol implements four key enhancements to the ",e.jsx(s.a,{href:"https://github.com/1inch/limit-order-protocol",children:"1inch Limit Order Protocol"}),":"]}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Enhanced Swap Execution"}),": ",e.jsx(s.a,{href:"https://github.com/jincubator-united-defi-2025/protocol/tree/main/src/TychoSwapExecutor.sol",children:"TychoSwapExecutor.sol"})," integrates ",e.jsx(s.a,{href:"https://github.com/propeller-heads/tycho-execution",children:"Tycho Execution"})," to enable complex swaps across multiple DEXs without upfront liquidity"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Stop Loss and Profit Taking Orders"}),": ",e.jsx(s.a,{href:"https://github.com/jincubator-united-defi-2025/protocol/tree/main/src/OracleCalculator.sol",children:"OracleIntegration.sol"})," Oracle-based (starting with chainlink) pricing calculator for advanced order strategies"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Treasury Management"}),": ",e.jsx(s.a,{href:"https://github.com/jincubator-united-defi-2025/protocol/tree/main/src/RebalancerInteraction.sol",children:"RebalancerInteraction.sol"})," enables makers and takers to immediately balance their funds to a treasury (and moving forward more advanced asset management strategies)."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Resource Management"}),": ",e.jsx(s.a,{href:"https://github.com/jincubator-united-defi-2025/protocol/tree/main/src/CompactInteraction.sol",children:"CompactInteraction.sol"})," integrates the ",e.jsx(s.a,{href:"https://github.com/1inch/limit-order-protocol",children:"1inch Limit Order Protocol"})," with ",e.jsx(s.a,{href:"https://github.com/uniswap/the-compact",children:"The Compact"})," for ",e.jsx(s.a,{href:"https://eips.ethereum.org/EIPS/eip-6909",children:"ERC-6909"})," support and moving forward integration with additional cross chain intent standards such as ",e.jsx(s.a,{href:"https://www.erc7683.org/",children:"ERC-7683"})," leveraging ",e.jsx(s.a,{href:"https://www.jincubator.com/research/solving/protocol",children:"Mandates and Solver Payloads"})," and ",e.jsx(s.a,{href:"https://www.jincubator.com/research/solving/resources",children:"Advanced Resource Locking"}),"."]}),`
`]}),`
`,e.jsxs(s.h3,{id:"enhanced-swap-execution",children:["Enhanced Swap Execution",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#enhanced-swap-execution",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"We integrate with Tycho's indexing, simulation and execution via a TcyhoSwapExecutor which allows Solvers to provide a payload with complex routing solutions across multiple liquidity protocols. The design for United Defi allows the taker to submit a Payload with Call Data which will be executed as part of the TakerInteraction flow. This allows, if permitted by the maker, the solver to use the takers tokens and execute the trade without providing any upfront capital."}),`
`,e.jsxs(s.h3,{id:"stop-loss-and-profit-taking-orders",children:["Stop Loss and Profit Taking Orders",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#stop-loss-and-profit-taking-orders",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"The OracleCalculator extension is a powerful addition to the 1inch Limit Order Protocol that enables dynamic pricing based on Chainlink oracle data. This extension allows orders to be filled at prices that are calculated on-chain using real-time oracle feeds, making it possible to create orders that automatically adjust to market conditions."}),`
`,e.jsxs(s.h3,{id:"treasury-management",children:["Treasury Management",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#treasury-management",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"Implemented as an IPostInteraction the RebalancerInteraction contract allows both makers and takers to instantly move their funds to their Treasury of choice."}),`
`,e.jsxs(s.h3,{id:"resource-management",children:["Resource Management",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#resource-management",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"We Implemented integration with an ERC-6909 compliant locking mechanism enabling advanced resource management capabilities and laying the foundation to extend the 1inch Limit Order Protocol to open standards such as ERC-7683."}),`
`,e.jsxs(s.h2,{id:"near-fusion-smart-contract-development",children:["NEAR FUSION+ Smart Contract Development",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#near-fusion-smart-contract-development",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"NEAR Fusion+ is a comprehensive DeFi protocol that migrates 1inch's proven Limit Order Protocol and Cross-Chain Swap functionality to the NEAR blockchain. The system provides two primary capabilities: advanced limit order trading with partial fills and extensible features, and atomic cross-chain swaps secured by time-locked escrow contracts."}),`
`,e.jsxs(s.h2,{id:"implementation-limit-order-protocol",children:["Implementation Limit Order Protocol",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#implementation-limit-order-protocol",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h3,{id:"core-components",children:["Core Components",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#core-components",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Compact"}),": ERC-6909 enabled Chainlink calculator for price discovery"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"ResourceManager"}),": Manages resource locks for ERC-6909 integration"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"TychoSwapExecutor"}),": Executes complex swaps using Tycho Execution"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"CompactInteraction"}),": Post-interaction handler for resource allocation"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"RebalancerInteraction"}),": Treasury management and portfolio rebalancing"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"OracleCalculator"}),": Price oracle integration for advanced order strategies"]}),`
`]}),`
`,e.jsxs(s.h3,{id:"key-features",children:["Key Features",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#key-features",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Resource Locking"}),": ERC-6909 compliant resource management"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Multi-DEX Execution"}),": Cross-platform swap execution via Tycho"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Advanced Order Types"}),": Stop-loss and take-profit orders"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Treasury Management"}),": Automated portfolio rebalancing"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Oracle Integration"}),": Chainlink price feeds for accurate pricing"]}),`
`]}),`
`,e.jsxs(s.h3,{id:"key-technology-enhancements",children:["Key Technology Enhancements",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#key-technology-enhancements",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Solidity based tests including a migration from ",e.jsx(s.code,{children:"OrderUtils.js"})," to solidity based ",e.jsx(s.a,{href:"https://github.com/jincubator-united-defi-2025/protocol/tree/main/test/utils/orderUtils/README_OrderUtils.md",children:"OrderUtils"})]}),`
`,e.jsxs(s.li,{children:["Solidity ",e.jsx(s.code,{children:"^0.8.30"})," compatibility provided by creating an interface ",e.jsx(s.a,{href:"https://github.com/jincubator-united-defi-2025/protocol/tree/main/src/interfaces/1inch/ILimitOrderProtocol.sol",children:"ILimitOrderProtocol.sol"})," and introducing ",e.jsx(s.a,{href:"https://github.com/jincubator-united-defi-2025/protocol/tree/main/test/helpers/LimitOrderProtocolManager.sol",children:"LimitOrderProtocolManager"})," for testing."]}),`
`]}),`
`,e.jsxs(s.h3,{id:"architecture",children:["Architecture",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#architecture",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.img,{src:"https://hackmd.io/_uploads/ByIAaIhwel.png",alt:"Architecture"})}),`
`,e.jsxs(s.h3,{id:"interactions",children:["Interactions",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#interactions",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.img,{src:"https://hackmd.io/_uploads/B1XQRU3wex.png",alt:"Interactions"})}),`
`,e.jsxs(s.h2,{id:"enhanced-swap-execution-1",children:["Enhanced Swap Execution",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#enhanced-swap-execution-1",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h3,{id:"tycho-execution-flow",children:["Tycho Execution Flow",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#tycho-execution-flow",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.img,{src:"https://hackmd.io/_uploads/HyRf1vnwgl.png",alt:"TychoFlow"})}),`
`,e.jsxs(s.h3,{id:"tycho-components",children:["Tycho Components",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#tycho-components",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.img,{src:"https://hackmd.io/_uploads/HkytJP3Plg.png",alt:"TychoComponents"})}),`
`,e.jsxs(s.h3,{id:"actors",children:["Actors",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#actors",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:["Maker",`
`,e.jsxs(s.ol,{children:[`
`,e.jsx(s.li,{children:"Creates orders specifying the spread price they are looking for (currently using chainlink Oracle)"}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:["Solver Service",`
`,e.jsxs(s.ol,{children:[`
`,e.jsx(s.li,{children:"Monitors 1inch Intents created"}),`
`,e.jsx(s.li,{children:"Monitors Liquidity Positions on Chain using Tycho-indexer"}),`
`,e.jsx(s.li,{children:"Simulates Solves for Orders (to see if profitable)"}),`
`,e.jsxs(s.li,{children:["Calls Resolver Contract to execute the Swap",`
`,e.jsxs(s.ol,{children:[`
`,e.jsx(s.li,{children:"Solver Payload - encoded to call TychoResolver a modified version of Tycho Execution"}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:["Calls Order Fill passing",`
`,e.jsxs(s.ol,{children:[`
`,e.jsx(s.li,{children:"target: TychoResolver address"}),`
`,e.jsx(s.li,{children:"interaction: SolverPayload"}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:["Resolver Contract (modified version combining ResolverCrossChain and Tycho Dispatcher)",`
`,e.jsxs(s.ol,{children:[`
`,e.jsx(s.li,{children:"Called by LimitOrderProtocol as part of Order.fill"}),`
`,e.jsx(s.li,{children:"Executes swap using Makers Tokens"}),`
`,e.jsx(s.li,{children:"Provides TakerToken to Relayer to pass back to Taker"}),`
`,e.jsx(s.li,{children:"Transfers excess maker (or taker) tokens to Treasury"}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(s.h3,{id:"implementation-approach",children:["Implementation Approach",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#implementation-approach",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsx(s.li,{children:"TychoFillPredicate.sol (Predicate): copied from OracleCalculator.sol"}),`
`,e.jsx(s.li,{children:"TychoFillInteraction.sol : copied from RebalancerInteraction.sol"}),`
`,e.jsx(s.li,{children:"TychoResolver.sol: Copied from ResolverCrossChain.sol and Dispatcher.sol"}),`
`,e.jsxs(s.li,{children:["Tests copied from RebalancerInteraction.t.sol and enhanced with",`
`,e.jsxs(s.ol,{children:[`
`,e.jsx(s.li,{children:"Creation of Swap (MakerTokens to TakerTokens) similar to"}),`
`,e.jsxs(s.li,{children:["Call of Fill Contract passing",`
`,e.jsxs(s.ol,{children:[`
`,e.jsx(s.li,{children:"target: TychoResolver address"}),`
`,e.jsx(s.li,{children:"interaction: SolverPayload"}),`
`]}),`
`]}),`
`,e.jsx(s.li,{children:"Checking of Treasurer Balances after swap is executed"}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(s.h3,{id:"flow",children:["Flow",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#flow",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h4,{id:"interactions-1",children:["Interactions",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#interactions-1",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"Interactions are callbacks that enable the execution of arbitrary code, which is provided by the maker’s order or taker’s fill execution."}),`
`,e.jsx(s.p,{children:"The order execution logic includes several steps that also involve interaction calls:"}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsx(s.li,{children:"Validate the order"}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.strong,{children:"Call the maker's pre-interaction"}),`
`]}),`
`,e.jsx(s.li,{children:"Transfer the maker's asset to the taker"}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.strong,{children:"Call the taker's interaction"}),`
`]}),`
`,e.jsx(s.li,{children:"Transfer the taker's asset to the maker"}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.strong,{children:"Call the maker's post-interaction"}),`
`]}),`
`,e.jsx(s.li,{children:"Emit the OrderFilled event"}),`
`]}),`
`,e.jsxs(s.p,{children:["Calls are executed in the context of the limit order protocol. The target contract should implement the ",e.jsx(s.code,{children:"IPreInteraction"})," or ",e.jsx(s.code,{children:"IPostInteraction"})," interfaces for the maker's pre- and post-interactions and the ",e.jsx(s.code,{children:"ITakerInteraction"})," interface for the taker's interaction. These interfaces declare the single callback function for maker and taker interactions, respectively."]}),`
`,e.jsx(s.p,{children:"Here is how the maker’s pre- & post- interactions and the taker’s interaction are defined in the interfaces:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"//Maker's pre-interaction"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"function"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" preInteraction"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"        IOrderMixin"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"."}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"Order"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" calldata"}),e.jsx(s.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:" order"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"        bytes32"}),e.jsx(s.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:" orderHash"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"        address"}),e.jsx(s.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:" taker"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"        uint256"}),e.jsx(s.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:" makingAmount"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"        uint256"}),e.jsx(s.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:" takingAmount"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"        uint256"}),e.jsx(s.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:" remainingMakingAmount"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"        bytes"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" calldata"}),e.jsx(s.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:" extraData"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    ) "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"external"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"//Maker's post-interaction"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"function"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" postInteraction"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"        IOrderMixin"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"."}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"Order"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" calldata"}),e.jsx(s.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:" order"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"        bytes32"}),e.jsx(s.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:" orderHash"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"        address"}),e.jsx(s.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:" taker"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"        uint256"}),e.jsx(s.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:" makingAmount"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"        uint256"}),e.jsx(s.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:" takingAmount"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"        uint256"}),e.jsx(s.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:" remainingMakingAmount"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"        bytes"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" calldata"}),e.jsx(s.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:" extraData"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    ) "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"external"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"//Taker's interaction"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"function"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" takerInteraction"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"        IOrderMixin"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"."}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"Order"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" calldata"}),e.jsx(s.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:" order"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"        bytes32"}),e.jsx(s.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:" orderHash"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"        address"}),e.jsx(s.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:" taker"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"        uint256"}),e.jsx(s.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:" makingAmount"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"        uint256"}),e.jsx(s.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:" takingAmount"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"        uint256"}),e.jsx(s.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:" remainingMakingAmount"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"        bytes"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" calldata"}),e.jsx(s.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:" extraData"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    ) "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"external"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" returns"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"uint256"}),e.jsx(s.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:" offeredTakingAmount"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})]})]})})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Resolver Contract executes calls to Tycho Dispatcher or Router"}),`
`,e.jsxs(s.li,{children:["Three functions",`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"preInteraction: used in OracleCalculator (to ensure price before swap)"}),`
`,e.jsx(s.li,{children:"takerInteraction used in SwapExecutor to Execute Swap by Taker"}),`
`,e.jsx(s.li,{children:"postInteraction used in Rebalancer to Send Funds to Treasury"}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(s.h3,{id:"design-questions",children:["Design Questions",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#design-questions",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Interface Compatibility"}),":"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"How will the TychoResolver interface be defined to ensure compatibility with the LimitOrderProtocol bytecode deployment approach?"}),`
`,e.jsx(s.li,{children:"Should we create a custom interface for TychoResolver or use the concrete type like the working project?"}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Predicate Logic"}),":"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"What predicate logic will TychoFill.sol use? Will it be similar to OracleCalculator.sol with price comparisons?"}),`
`,e.jsx(s.li,{children:"How will the predicate determine when a solve is profitable vs. when it should execute?"}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Solver Payload Structure"}),":"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"What data structure will the SolverPayload contain? Will it include target addresses, amounts, and execution parameters?"}),`
`,e.jsx(s.li,{children:"How will the payload be encoded/decoded between the Solver Service and TychoResolver?"}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Treasury Integration"}),":"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"How will excess tokens be calculated and transferred to Treasury?"}),`
`,e.jsx(s.li,{children:"What mechanism will prevent MEV attacks on the treasury transfers?"}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Error Handling"}),":"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"How will failed solves be handled? Will orders be cancelled or retried?"}),`
`,e.jsx(s.li,{children:"What happens if the TychoResolver execution fails during the order fill?"}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Gas Optimization"}),":"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"How will the solver service optimize gas costs across multiple orders?"}),`
`,e.jsx(s.li,{children:"Will batch processing be implemented for multiple orders?"}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Oracle Integration"}),":"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Will TychoFill use the same Chainlink oracle approach as OracleCalculator ?"}),`
`,e.jsx(s.li,{children:"How will price feeds be validated and updated?"}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Cross-Chain Considerations"}),":"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"How will the ResolverCrossChain functionality be integrated with Tycho Dispatcher?"}),`
`,e.jsx(s.li,{children:"What bridge mechanisms will be used for cross-chain swaps?"}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(s.h3,{id:"implementation-plan",children:["Implementation Plan",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#implementation-plan",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.strong,{children:"Phase 1: Core Contract Development"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:["Create ",e.jsx(s.code,{children:"TychoFill.sol"})," based on ",e.jsx(s.code,{children:"OracleCalculator.sol"})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Implement predicate logic for profitable solve detection"}),`
`,e.jsx(s.li,{children:"Add Tycho-specific price calculation methods"}),`
`,e.jsx(s.li,{children:"Ensure interface compatibility with LimitOrderProtocol"}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:["Create ",e.jsx(s.code,{children:"TychoFillInteraction.sol"})," based on ",e.jsx(s.code,{children:"RebalancerInteraction.sol"})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Implement post-interaction logic for treasury transfers"}),`
`,e.jsx(s.li,{children:"Add balance validation and excess token calculation"}),`
`,e.jsx(s.li,{children:"Integrate with TychoResolver for swap execution"}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.strong,{children:"Phase 2: Resolver Contract Development"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Create ",e.jsx(s.code,{children:"TychoResolver.sol"})," combining ResolverCrossChain and Dispatcher functionality",`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Implement swap execution using maker tokens"}),`
`,e.jsx(s.li,{children:"Add taker token provision for relayer"}),`
`,e.jsx(s.li,{children:"Integrate treasury transfer logic"}),`
`,e.jsx(s.li,{children:"Ensure proper error handling and revert conditions"}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.strong,{children:"Phase 3: Testing Framework"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Create comprehensive test suite based on ",e.jsx(s.code,{children:"RebalancerInteraction.t.sol"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Test order creation with Tycho-specific predicates"}),`
`,e.jsx(s.li,{children:"Test solver payload encoding/decoding"}),`
`,e.jsx(s.li,{children:"Test treasury balance validation"}),`
`,e.jsx(s.li,{children:"Test cross-chain swap scenarios"}),`
`,e.jsx(s.li,{children:"Test error conditions and edge cases"}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.strong,{children:"Phase 4: Integration Testing"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Test end-to-end flow from order creation to execution"}),`
`,e.jsx(s.li,{children:"Validate predicate execution with bytecode deployment"}),`
`,e.jsx(s.li,{children:"Test solver service integration with Tycho-indexer"}),`
`,e.jsx(s.li,{children:"Verify treasury transfers and balance calculations"}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.strong,{children:"Phase 5: Optimization and Security"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Implement gas optimization strategies"}),`
`,e.jsx(s.li,{children:"Add comprehensive error handling"}),`
`,e.jsx(s.li,{children:"Implement MEV protection mechanisms"}),`
`,e.jsx(s.li,{children:"Add monitoring and logging capabilities"}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.strong,{children:"Phase 6: Deployment and Monitoring"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Deploy contracts with proper bytecode generation"}),`
`,e.jsx(s.li,{children:"Set up monitoring for solver service"}),`
`,e.jsx(s.li,{children:"Implement alerting for failed solves"}),`
`,e.jsx(s.li,{children:"Add analytics for treasury performance"}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(s.h2,{id:"stop-loss-and-profit-taking-orders-1",children:["Stop Loss and Profit Taking Orders",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#stop-loss-and-profit-taking-orders-1",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h3,{id:"oracle-example-order",children:["Oracle Example Order",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#oracle-example-order",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.img,{src:"https://hackmd.io/_uploads/ByKclv3Del.png",alt:"OracleExampleOrder"})}),`
`,e.jsxs(s.h3,{id:"oracle-order-integration",children:["Oracle Order Integration",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#oracle-order-integration",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.img,{src:"https://hackmd.io/_uploads/ry6slPnvxg.png",alt:"OracleIntegration"})}),`
`,e.jsxs(s.h3,{id:"overview",children:["Overview",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#overview",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"The OracleCalculator extension is a powerful addition to the 1inch Limit Order Protocol that enables dynamic pricing based on Chainlink oracle data. This extension allows orders to be filled at prices that are calculated on-chain using real-time oracle feeds, making it possible to create orders that automatically adjust to market conditions."}),`
`,e.jsxs(s.h3,{id:"1-what-the-oraclecalculator-extension-does",children:["1. What the OracleCalculator Extension Does",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#1-what-the-oraclecalculator-extension-does",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["The OracleCalculator extension serves as an ",e.jsx(s.code,{children:"IAmountGetter"})," implementation that:"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Calculates dynamic exchange rates"})," using Chainlink oracle data"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Supports both single and double oracle pricing"})," for different token pairs"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Applies configurable spreads"})," to provide maker/taker incentives"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Handles inverse pricing"})," for tokens quoted in different base currencies"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Validates oracle freshness"})," to ensure price data is current (within 4 hours)"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Integrates with predicates"})," for conditional order execution"]}),`
`]}),`
`,e.jsxs(s.h4,{id:"key-features-1",children:["Key Features:",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#key-features-1",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Single Oracle Pricing"}),": Uses one oracle to price a token relative to ETH or USD"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Double Oracle Pricing"}),": Uses two oracles to price custom token pairs (e.g., INCH/DAI)"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Spread Application"}),": Applies maker and taker spreads to create profitable order books"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Inverse Flag Support"}),": Handles cases where oracle prices need to be inverted"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Oracle Freshness Check"}),": Ensures oracle data is not stale (within 4 hours TTL)"]}),`
`]}),`
`,e.jsxs(s.h3,{id:"2-types-of-orders-that-can-be-created",children:["2. Types of Orders That Can Be Created",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#2-types-of-orders-that-can-be-created",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h4,{id:"a-single-oracle-orders",children:["A. Single Oracle Orders",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#a-single-oracle-orders",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"Orders that use one Chainlink oracle to price a token relative to ETH or USD:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"ETH → DAI"}),": Using DAI/ETH oracle"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"DAI → ETH"}),": Using DAI/ETH oracle with inverse flag"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"WETH → USDC"}),": Using USDC/ETH oracle"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"USDC → WETH"}),": Using USDC/ETH oracle with inverse flag"]}),`
`]}),`
`,e.jsxs(s.h4,{id:"b-double-oracle-orders",children:["B. Double Oracle Orders",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#b-double-oracle-orders",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"Orders that use two oracles to price custom token pairs:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"INCH → DAI"}),": Using INCH/ETH and DAI/ETH oracles"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"DAI → INCH"}),": Using DAI/ETH and INCH/ETH oracles"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Custom Token Pairs"}),": Any combination of tokens with available oracles"]}),`
`]}),`
`,e.jsxs(s.h4,{id:"c-conditional-orders-predicates",children:["C. Conditional Orders (Predicates)",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#c-conditional-orders-predicates",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"Orders that only execute under specific oracle conditions:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Stop-Loss Orders"}),": Execute only when price falls below threshold"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Take-Profit Orders"}),": Execute only when price rises above threshold"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Range Orders"}),": Execute only within specific price ranges"]}),`
`]}),`
`,e.jsxs(s.h3,{id:"3-fields-passed-to-the-extension-and-how-they-are-populated",children:["3. Fields Passed to the Extension and How They Are Populated",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#3-fields-passed-to-the-extension-and-how-they-are-populated",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h4,{id:"extension-data-structure",children:["Extension Data Structure",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#extension-data-structure",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["The extension data is passed as ",e.jsx(s.code,{children:"bytes calldata extraData"})," to the ",e.jsx(s.code,{children:"getMakingAmount"})," and ",e.jsx(s.code,{children:"getTakingAmount"})," functions:"]}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"function"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" getMakingAmount"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    IOrderMixin"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"."}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"Order"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" calldata"}),e.jsx(s.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:" order"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    bytes"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" calldata"}),e.jsx(s.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:" extension"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    bytes32"}),e.jsx(s.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:" orderHash"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    address"}),e.jsx(s.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:" taker"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    uint256"}),e.jsx(s.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:" takingAmount"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    uint256"}),e.jsx(s.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:" remainingMakingAmount"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    bytes"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" calldata"}),e.jsx(s.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:" extraData"}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"  // ← Extension data here"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:") "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"external"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" view"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" returns"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ("}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"uint256"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:")"})]})]})})}),`
`,e.jsxs(s.h4,{id:"single-oracle-data-format",children:["Single Oracle Data Format",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#single-oracle-data-format",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["For single oracle pricing, the ",e.jsx(s.code,{children:"extraData"})," contains:"]}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"["}),e.jsx(s.span,{style:{color:"#032F62",textDecoration:"underline","--shiki-dark":"#96D0FF","--shiki-dark-text-decoration":"inherit"},children:"1 byte flags"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"]["}),e.jsx(s.span,{style:{color:"#032F62",textDecoration:"underline","--shiki-dark":"#96D0FF","--shiki-dark-text-decoration":"inherit"},children:"20 bytes oracle address"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"][32 bytes spread]"})]})})})}),`
`,e.jsx(s.strong,{children:"Flags Byte:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Bit 7 (0x80): Inverse flag - if set, invert the oracle price"}),`
`,e.jsx(s.li,{children:"Bit 6 (0x40): Double price flag - if set, use double oracle mode"}),`
`,e.jsx(s.li,{children:"Bits 0-5: Reserved"}),`
`]}),`
`,e.jsx(s.strong,{children:"Example:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// DAI/ETH oracle at 0x1234... with 0.99 spread, no inverse"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"bytes"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" memory"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" data "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" abi"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"encodePacked"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    bytes1"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"0x00"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"),           "}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// flags: no inverse, no double price"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    address"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(daiOracle),      "}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// oracle address"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    uint256"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"990000000"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:")       "}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// spread: 0.99 (990000000 / 1e9)"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})})]})})}),`
`,e.jsxs(s.h4,{id:"double-oracle-data-format",children:["Double Oracle Data Format",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#double-oracle-data-format",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["For double oracle pricing, the ",e.jsx(s.code,{children:"extraData"})," contains:"]}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"["}),e.jsx(s.span,{style:{color:"#032F62",textDecoration:"underline","--shiki-dark":"#96D0FF","--shiki-dark-text-decoration":"inherit"},children:"1 byte flags"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"]["}),e.jsx(s.span,{style:{color:"#032F62",textDecoration:"underline","--shiki-dark":"#96D0FF","--shiki-dark-text-decoration":"inherit"},children:"20 bytes oracle1"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"][20 bytes oracle2][32 bytes decimalsScale][32 bytes spread]"})]})})})}),`
`,e.jsx(s.strong,{children:"Example:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// INCH/DAI pricing using INCH/ETH and DAI/ETH oracles"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"bytes"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" memory"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" data "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" abi"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"encodePacked"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    bytes1"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"0x40"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"),           "}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// flags: double price mode"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    address"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(inchOracle),     "}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// oracle1: INCH/ETH"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    address"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(daiOracle),      "}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// oracle2: DAI/ETH"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    int256"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"0"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"),              "}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// decimalsScale: no adjustment"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    uint256"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"1010000000"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:")     "}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// spread: 1.01 (1010000000 / 1e9)"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})})]})})}),`
`,e.jsxs(s.h4,{id:"how-fields-are-populated",children:["How Fields Are Populated",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#how-fields-are-populated",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Oracle Addresses"}),": Retrieved from Chainlink's oracle registry or deployment"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Spreads"}),": Calculated based on desired maker/taker incentives (typically 0.99 for maker, 1.01 for taker)"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Flags"}),": Set based on pricing requirements (inverse needed, double oracle needed)"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Decimals Scale"}),": Used to adjust for different oracle decimal precisions"]}),`
`]}),`
`,e.jsxs(s.h3,{id:"4-test-case-walkthrough",children:["4. Test Case Walkthrough",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#4-test-case-walkthrough",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h4,{id:"test-case-1-eth--dai-chainlink-order",children:["Test Case 1: ETH → DAI Chainlink Order",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#test-case-1-eth--dai-chainlink-order",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Scenario"}),": Maker wants to sell 1 ETH for DAI at oracle price with spreads"]}),`
`,e.jsx(s.strong,{children:"Order Details:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Maker: makerAddr"}),`
`,e.jsx(s.li,{children:"Taker: takerAddr"}),`
`,e.jsx(s.li,{children:"Maker Asset: WETH (1 ether)"}),`
`,e.jsx(s.li,{children:"Taker Asset: DAI (4000 ether)"}),`
`,e.jsx(s.li,{children:"Oracle: DAI/ETH at 0.00025 ETH per DAI (1 ETH = 4000 DAI)"}),`
`]}),`
`,e.jsx(s.strong,{children:"Extension Data:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Making amount data (maker spread: 0.99)"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"bytes"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" memory"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" makingAmountData "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" abi"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"encodePacked"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    chainlinkCalcAddress,    "}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Calculator address"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    bytes1"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"0x00"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"),           "}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// No inverse flag"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    oracleAddress,           "}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// DAI oracle"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    uint256"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"990000000"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:")       "}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// 0.99 spread"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Taking amount data (taker spread: 1.01)"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"bytes"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" memory"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" takingAmountData "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" abi"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"encodePacked"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    chainlinkCalcAddress,    "}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Calculator address"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    bytes1"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"0x80"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"),           "}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Inverse flag set"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    oracleAddress,           "}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// DAI oracle"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    uint256"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"1010000000"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:")     "}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// 1.01 spread"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})})]})})}),`
`,e.jsx(s.strong,{children:"Execution Flow:"}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:["Taker calls ",e.jsx(s.code,{children:"fillOrderArgs"})," with 4000 DAI"]}),`
`,e.jsxs(s.li,{children:["Protocol calls ",e.jsx(s.code,{children:"getTakingAmount"})," with 4000 DAI"]}),`
`,e.jsx(s.li,{children:"Calculator applies 1.01 spread: 4000 * 1.01 = 4040 DAI"}),`
`,e.jsxs(s.li,{children:["Protocol calls ",e.jsx(s.code,{children:"getMakingAmount"})," with 4040 DAI"]}),`
`,e.jsx(s.li,{children:"Calculator applies 0.99 spread: 4040 * 0.99 / 4000 = 0.99 ETH"}),`
`,e.jsx(s.li,{children:"Order executes: taker receives 0.99 ETH, maker receives 4000 DAI"}),`
`]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Result"}),": Taker pays 4000 DAI, receives 0.99 ETH (effective rate: 1 ETH = 4040.4 DAI)"]}),`
`,e.jsxs(s.h4,{id:"test-case-2-dai--eth-chainlink-order",children:["Test Case 2: DAI → ETH Chainlink Order",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#test-case-2-dai--eth-chainlink-order",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Scenario"}),": Maker wants to sell 4000 DAI for ETH at oracle price"]}),`
`,e.jsx(s.strong,{children:"Order Details:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Maker: makerAddr"}),`
`,e.jsx(s.li,{children:"Taker: takerAddr"}),`
`,e.jsx(s.li,{children:"Maker Asset: DAI (4000 ether)"}),`
`,e.jsx(s.li,{children:"Taker Asset: WETH (1 ether)"}),`
`,e.jsx(s.li,{children:"Oracle: DAI/ETH at 0.00025 ETH per DAI"}),`
`]}),`
`,e.jsx(s.strong,{children:"Extension Data:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Making amount data (inverse + maker spread)"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"bytes"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" memory"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" makingAmountData "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" abi"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"encodePacked"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    chainlinkCalcAddress,"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    bytes1"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"0x80"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"),           "}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Inverse flag"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    oracleAddress,"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    uint256"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"990000000"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:")       "}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// 0.99 spread"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Taking amount data (no inverse + taker spread)"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"bytes"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" memory"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" takingAmountData "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" abi"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"encodePacked"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    chainlinkCalcAddress,"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    bytes1"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"0x00"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"),           "}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// No inverse flag"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    oracleAddress,"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    uint256"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"1010000000"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:")     "}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// 1.01 spread"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})})]})})}),`
`,e.jsx(s.strong,{children:"Execution Flow:"}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:["Taker calls with ",e.jsx(s.code,{children:"makingAmount"})," flag set to true"]}),`
`,e.jsxs(s.li,{children:["Protocol calls ",e.jsx(s.code,{children:"getMakingAmount"})," with 4000 DAI"]}),`
`,e.jsx(s.li,{children:"Calculator applies inverse + 0.99 spread: 4000 * 0.99 / 4000 = 0.99 ETH"}),`
`,e.jsxs(s.li,{children:["Protocol calls ",e.jsx(s.code,{children:"getTakingAmount"})," with 0.99 ETH"]}),`
`,e.jsx(s.li,{children:"Calculator applies 1.01 spread: 0.99 * 1.01 = 1.01 ETH"}),`
`,e.jsx(s.li,{children:"Order executes: taker receives 4000 DAI, maker receives 1.01 ETH"}),`
`]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Result"}),": Taker pays 1.01 ETH, receives 4000 DAI (effective rate: 1 ETH = 3960.4 DAI)"]}),`
`,e.jsxs(s.h4,{id:"test-case-3-inch--dai-double-oracle-order",children:["Test Case 3: INCH → DAI Double Oracle Order",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#test-case-3-inch--dai-double-oracle-order",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Scenario"}),": Maker wants to sell 100 INCH for DAI using double oracle pricing"]}),`
`,e.jsx(s.strong,{children:"Order Details:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Maker: makerAddr"}),`
`,e.jsx(s.li,{children:"Taker: takerAddr"}),`
`,e.jsx(s.li,{children:"Maker Asset: INCH (100 ether)"}),`
`,e.jsx(s.li,{children:"Taker Asset: DAI (632 ether)"}),`
`,e.jsx(s.li,{children:"Oracles: INCH/ETH (0.0001577615249227853 ETH) and DAI/ETH (0.00025 ETH)"}),`
`]}),`
`,e.jsx(s.strong,{children:"Extension Data:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Making amount data (double oracle + maker spread)"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"bytes"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" memory"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" makingAmountData "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" abi"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"encodePacked"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    chainlinkCalcAddress,"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    bytes1"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"0x40"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"),           "}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Double price flag"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    address"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(daiOracle),      "}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Oracle1: DAI/ETH"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    address"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(inchOracle),     "}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Oracle2: INCH/ETH"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    int256"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"0"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"),              "}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// No decimals adjustment"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    uint256"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"990000000"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:")       "}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// 0.99 spread"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Taking amount data (double oracle + taker spread)"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"bytes"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" memory"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" takingAmountData "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" abi"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"encodePacked"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    chainlinkCalcAddress,"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    bytes1"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"0x40"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"),           "}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Double price flag"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    address"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(inchOracle),     "}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Oracle1: INCH/ETH"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    address"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(daiOracle),      "}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Oracle2: DAI/ETH"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    int256"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"0"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"),              "}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// No decimals adjustment"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    uint256"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"1010000000"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:")     "}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// 1.01 spread"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})})]})})}),`
`,e.jsx(s.strong,{children:"Execution Flow:"}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:["Taker calls with ",e.jsx(s.code,{children:"makingAmount"})," flag set to true"]}),`
`,e.jsxs(s.li,{children:["Protocol calls ",e.jsx(s.code,{children:"getMakingAmount"})," with 100 INCH"]}),`
`,e.jsxs(s.li,{children:["Calculator applies double oracle calculation:",`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"INCH price in ETH: 0.0001577615249227853"}),`
`,e.jsx(s.li,{children:"DAI price in ETH: 0.00025"}),`
`,e.jsx(s.li,{children:"INCH/DAI rate: 0.0001577615249227853 / 0.00025 = 0.631046"}),`
`,e.jsx(s.li,{children:"With 0.99 spread: 100 _ 0.631046 _ 0.99 = 62.47 DAI"}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:["Protocol calls ",e.jsx(s.code,{children:"getTakingAmount"})," with 62.47 DAI"]}),`
`,e.jsx(s.li,{children:"Calculator applies inverse calculation with 1.01 spread"}),`
`,e.jsx(s.li,{children:"Order executes with calculated amounts"}),`
`]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Result"}),": Complex pricing based on two oracle feeds with spread adjustments"]}),`
`,e.jsxs(s.h4,{id:"test-case-4-stop-loss-order-with-predicate",children:["Test Case 4: Stop-Loss Order with Predicate",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#test-case-4-stop-loss-order-with-predicate",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Scenario"}),": Maker wants to sell INCH for DAI only if INCH/DAI price falls below 6.32"]}),`
`,e.jsx(s.strong,{children:"Order Details:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Maker: makerAddr"}),`
`,e.jsx(s.li,{children:"Taker: takerAddr"}),`
`,e.jsx(s.li,{children:"Maker Asset: INCH (100 ether)"}),`
`,e.jsx(s.li,{children:"Taker Asset: DAI (631 ether)"}),`
`,e.jsx(s.li,{children:"Predicate: INCH/DAI price < 6.32"}),`
`]}),`
`,e.jsx(s.strong,{children:"Predicate Construction:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Build price call for predicate"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"bytes"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" memory"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" priceCall "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" abi"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"encodeWithSelector"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    OracleCalculator .doublePrice.selector,"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    inchOracle,    "}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// INCH/ETH oracle"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    daiOracle,     "}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// DAI/ETH oracle"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    int256"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"0"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"),     "}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// No decimals adjustment"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    1"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" ether"}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"        // Base amount"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Build predicate call"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"bytes"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" memory"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" predicate "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" abi"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"encodeWithSelector"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    swap.lt.selector,        "}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Less than comparison"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    6.32"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" ether"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:",             "}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Threshold: 6.32"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    abi"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"encodeWithSelector"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"        swap.arbitraryStaticCall.selector,"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"        address"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(oracleCalculator ),"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"        priceCall"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    )"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})})]})})}),`
`,e.jsx(s.strong,{children:"Execution Flow:"}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsx(s.li,{children:"Order fill is attempted"}),`
`,e.jsx(s.li,{children:"Protocol evaluates predicate before execution"}),`
`,e.jsxs(s.li,{children:["Predicate calls ",e.jsx(s.code,{children:"OracleCalculator .doublePrice()"})," with oracle data"]}),`
`,e.jsx(s.li,{children:"Calculated INCH/DAI price is compared to 6.32 threshold"}),`
`,e.jsx(s.li,{children:"If price < 6.32: order executes normally"}),`
`,e.jsx(s.li,{children:"If price ≥ 6.32: order reverts with predicate failure"}),`
`]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Result"}),": Order only executes when INCH/DAI price is below the specified threshold"]}),`
`,e.jsxs(s.h4,{id:"test-case-5-simple-order-without-extension",children:["Test Case 5: Simple Order Without Extension",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#test-case-5-simple-order-without-extension",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Scenario"}),": Basic order without any Chainlink integration"]}),`
`,e.jsx(s.strong,{children:"Order Details:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Maker: makerAddr"}),`
`,e.jsx(s.li,{children:"Taker: takerAddr"}),`
`,e.jsx(s.li,{children:"Maker Asset: WETH (1 ether)"}),`
`,e.jsx(s.li,{children:"Taker Asset: DAI (4000 ether)"}),`
`,e.jsx(s.li,{children:"No extensions or predicates"}),`
`]}),`
`,e.jsx(s.strong,{children:"Execution Flow:"}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:["Taker calls ",e.jsx(s.code,{children:"fillOrderArgs"})," with 4000 DAI"]}),`
`,e.jsx(s.li,{children:"No extension data provided"}),`
`,e.jsx(s.li,{children:"Protocol uses default proportional calculation"}),`
`,e.jsx(s.li,{children:"Order executes at fixed 1:4000 ratio"}),`
`]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Result"}),": Simple fixed-rate order execution without dynamic pricing"]}),`
`,e.jsxs(s.h3,{id:"key-implementation-details",children:["Key Implementation Details",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#key-implementation-details",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h4,{id:"oracle-freshness-check",children:["Oracle Freshness Check",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#oracle-freshness-check",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"if"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" (updatedAt "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"+"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" _ORACLE_TTL "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"<"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" block"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:".timestamp) "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"revert"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" StaleOraclePrice"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"();"})]})})})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Ensures oracle data is not older than 4 hours"}),`
`,e.jsx(s.li,{children:"Prevents execution with stale price data"}),`
`]}),`
`,e.jsxs(s.h4,{id:"spread-application",children:["Spread Application",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#spread-application",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"return"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" spread "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"*"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" amount "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"*"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" latestAnswer."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"toUint256"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"() "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"/"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ("}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"10"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" **"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" oracle."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"decimals"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"()) "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"/"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" _SPREAD_DENOMINATOR;"})]})})})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Spreads are applied as multipliers (e.g., 990000000 = 0.99)"}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"_SPREAD_DENOMINATOR = 1e9"})," for 9-decimal precision"]}),`
`]}),`
`,e.jsxs(s.h4,{id:"double-oracle-calculation",children:["Double Oracle Calculation",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#double-oracle-calculation",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"result "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" amount "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"*"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" latestAnswer1."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"toUint256"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"();"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"if"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" (decimalsScale "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:">"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 0"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:") {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    result "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"*="}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 10"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" **"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" decimalsScale."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"toUint256"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"();"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"} "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"else"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" if"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" (decimalsScale "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"<"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 0"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:") {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    result "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"/="}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 10"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" **"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ("}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"-"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"decimalsScale)."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"toUint256"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"();"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"result "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"/="}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" latestAnswer2."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"toUint256"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"();"})]})]})})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Calculates cross-oracle pricing for custom token pairs"}),`
`,e.jsx(s.li,{children:"Handles decimal precision adjustments between oracles"}),`
`]}),`
`,e.jsx(s.p,{children:"This extension enables sophisticated DeFi applications that can automatically adjust to market conditions while providing liquidity providers with profitable spreads."}),`
`,e.jsxs(s.h2,{id:"treasury-management-1",children:["Treasury Management",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#treasury-management-1",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h3,{id:"treasury-management-flow",children:["Treasury Management Flow",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#treasury-management-flow",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.img,{src:"https://hackmd.io/_uploads/BkDBWwhDee.png",alt:"TreasuryInteraction"})}),`
`,e.jsxs(s.h3,{id:"rebalancer-requirements",children:["Rebalancer Requirements",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#rebalancer-requirements",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsx(s.li,{children:"Create an Interaction Contract called RebalancerInteraction.sol (in the src directory)"}),`
`,e.jsx(s.li,{children:"Create a test contract called RebalancerInteraction.t.sol (in the test directory)"}),`
`,e.jsxs(s.li,{children:["In RebalancerInteraction.t.sol",`
`,e.jsxs(s.ol,{children:[`
`,e.jsx(s.li,{children:"Create test scenarios the same as in OracleCalculator .t.sol"}),`
`,e.jsxs(s.li,{children:["Add to that an Interaction using RebalancerInteraction.sol which",`
`,e.jsxs(s.ol,{children:[`
`,e.jsx(s.li,{children:"Takes the output tokens the taker receives"}),`
`,e.jsx(s.li,{children:"Transfers them to a third wallet (addr3) which is a treasurer"}),`
`,e.jsx(s.li,{children:"If the transfer fails reject the order."}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(s.h3,{id:"rebalancer-implementation",children:["Rebalancer Implementation",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#rebalancer-implementation",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"The Rebalancer implementation has been successfully completed with the following components:"}),`
`,e.jsxs(s.h3,{id:"1-rebalancerinteractionsol-src-directory",children:["1. RebalancerInteraction.sol (src directory)",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#1-rebalancerinteractionsol-src-directory",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Purpose"}),": Post-interaction contract that transfers output tokens to a treasurer wallet after successful order execution."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Key Features"}),":"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Implements ",e.jsx(s.code,{children:"IPostInteraction"})," interface for Limit Order Protocol integration"]}),`
`,e.jsx(s.li,{children:"Transfers the taker's received tokens (maker asset) to a designated treasurer address"}),`
`,e.jsxs(s.li,{children:["Uses ",e.jsx(s.code,{children:"SafeERC20"})," for secure token transfers with proper error handling"]}),`
`,e.jsx(s.li,{children:"Reverts the entire order if transfer fails, ensuring atomic execution"}),`
`,e.jsxs(s.li,{children:["Emits ",e.jsx(s.code,{children:"TokensTransferredToTreasurer"})," events for successful transfers"]}),`
`,e.jsx(s.li,{children:"Validates treasurer address in constructor to prevent zero address usage"}),`
`]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Core Functionality"}),":"]}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"function"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" postInteraction"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    IOrderMixin"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"."}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"Order"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" calldata"}),e.jsx(s.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:" order"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    bytes32"}),e.jsx(s.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:" orderHash"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    address"}),e.jsx(s.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:" taker"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    uint256"}),e.jsx(s.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:" makingAmount"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    uint256"}),e.jsx(s.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:" takingAmount"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    uint256"}),e.jsx(s.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:" remainingMakingAmount"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    bytes"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" calldata"}),e.jsx(s.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:" extraData"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:") "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"external"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" override"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    address"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" outputToken "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" order.makerAsset;"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    uint256"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" outputAmount "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" makingAmount;"})]}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    try"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" IERC20"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(outputToken)."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"safeTransferFrom"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(taker, treasurer, outputAmount) {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"        emit"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" TokensTransferredToTreasurer"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(outputToken, taker, treasurer, outputAmount);"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    } "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"catch"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"        revert"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" TransferFailed"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"();"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    }"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})})}),`
`,e.jsxs(s.h3,{id:"2-rebalancerinteractiontsol-test-directory",children:["2. RebalancerInteraction.t.sol (test directory)",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#2-rebalancerinteractiontsol-test-directory",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Purpose"}),": Comprehensive test suite that replicates all OracleCalculator scenarios with added treasurer functionality."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Test Coverage"}),":"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Single Oracle Orders"}),": ETH→DAI, DAI→ETH with treasurer receiving output tokens"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Double Oracle Orders"}),": INCH→DAI with complex pricing and treasurer transfer"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Conditional Orders"}),": Stop-loss orders with predicate validation and treasurer transfer"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Simple Orders"}),": Basic orders without Chainlink but with treasurer transfer"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Failure Scenarios"}),": Tests unauthorized transfers that should revert"]}),`
`]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Test Scenarios Implemented"}),":"]}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"test_eth_to_dai_chainlink_order_with_rebalancer()"})," - Single oracle ETH→DAI"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"test_dai_to_eth_chainlink_order_with_rebalancer()"})," - Single oracle DAI→ETH with inverse"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"test_dai_to_1inch_chainlink_order_takingAmountData_with_rebalancer()"})," - Double oracle INCH→DAI"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"test_dai_to_1inch_chainlink_order_makingAmountData_with_rebalancer()"})," - Double oracle with making amount"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"test_dai_to_1inch_stop_loss_order_with_rebalancer()"})," - Conditional order with predicate"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"test_dai_to_1inch_stop_loss_order_predicate_invalid_with_rebalancer()"})," - Invalid predicate test"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"test_eth_to_dai_stop_loss_order_with_rebalancer()"})," - ETH→DAI with stop-loss"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"test_simple_order_without_extension_with_rebalancer()"})," - Basic order with treasurer"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"test_simple_order_with_different_amounts_with_rebalancer()"})," - Partial amounts"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"test_rebalancer_transfer_failure()"})," - Failure scenario testing"]}),`
`]}),`
`,e.jsxs(s.h3,{id:"3-key-implementation-details",children:["3. Key Implementation Details",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#3-key-implementation-details",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h4,{id:"post-interaction-integration",children:[e.jsx(s.strong,{children:"Post-Interaction Integration"}),e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#post-interaction-integration",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Each test includes ",e.jsx(s.code,{children:"buildPostInteractionCalldata(address(rebalancerInteraction))"})]}),`
`,e.jsxs(s.li,{children:["Post-interaction data is added to order extensions via ",e.jsx(s.code,{children:"PostInteractionData"})]}),`
`,e.jsx(s.li,{children:"Treasurer (addr3) receives the output tokens after successful order execution"}),`
`]}),`
`,e.jsxs(s.h4,{id:"transfer-logic",children:[e.jsx(s.strong,{children:"Transfer Logic"}),e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#transfer-logic",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Takes output tokens"}),": The tokens the taker receives (maker asset from the order)"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Transfers to treasurer"}),": Moves tokens to addr3 (treasurer wallet) using ",e.jsx(s.code,{children:"safeTransferFrom"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Rejects order on failure"}),": If transfer fails, entire order reverts with ",e.jsx(s.code,{children:"TransferFailed"})," error"]}),`
`]}),`
`,e.jsxs(s.h4,{id:"test-verification",children:[e.jsx(s.strong,{children:"Test Verification"}),e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#test-verification",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"Each test verifies:"}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Order executes successfully"})," with Chainlink pricing (where applicable)"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Treasurer receives tokens"}),": ",e.jsx(s.code,{children:"assertEq(token.balanceOf(addr3), expectedAmount)"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"All balances are correct"})," for maker, taker, and treasurer"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Failure scenarios revert"})," when transfers are unauthorized"]}),`
`]}),`
`,e.jsxs(s.h4,{id:"error-handling",children:[e.jsx(s.strong,{children:"Error Handling"}),e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#error-handling",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"TransferFailed"}),": Reverts entire order if ",e.jsx(s.code,{children:"safeTransferFrom"})," fails"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"InvalidTreasurer"}),": Prevents deployment with zero address treasurer"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Predicate failures"}),": Orders with invalid predicates revert before interaction"]}),`
`]}),`
`,e.jsxs(s.h3,{id:"4-integration-with-limit-order-protocol",children:["4. Integration with Limit Order Protocol",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#4-integration-with-limit-order-protocol",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"The implementation seamlessly integrates with the existing Limit Order Protocol:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Extension System"}),": Uses ",e.jsx(s.code,{children:"PostInteractionData"})," extension for post-execution callbacks"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Order Flow"}),": Maintains existing order execution flow while adding treasurer transfer"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Atomic Execution"}),": Ensures either complete success (order + transfer) or complete failure"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Event Emission"}),": Provides transparency through ",e.jsx(s.code,{children:"TokensTransferredToTreasurer"})," events"]}),`
`]}),`
`,e.jsxs(s.h3,{id:"5-security-considerations",children:["5. Security Considerations",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#5-security-considerations",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"SafeERC20"}),": Uses OpenZeppelin's SafeERC20 for secure token transfers"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Try-Catch"}),": Graceful error handling prevents partial state changes"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Address Validation"}),": Constructor validates treasurer address"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Atomic Operations"}),": Order reverts entirely if transfer fails"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Authorization"}),": Relies on existing token approval mechanisms"]}),`
`]}),`
`,e.jsxs(s.h3,{id:"6-use-cases",children:["6. Use Cases",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#6-use-cases",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"This implementation enables:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Automated Treasury Management"}),": Automatic transfer of trading profits to treasury"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Risk Management"}),": Centralized control of trading outputs"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Compliance"}),": Regulatory requirements for fund segregation"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Portfolio Rebalancing"}),": Systematic reallocation of trading proceeds"]}),`
`]}),`
`,e.jsx(s.p,{children:"The Rebalancer implementation successfully meets all requirements from the specification and provides a robust, secure, and comprehensive solution for automated treasury management in limit order trading."}),`
`,e.jsxs(s.h3,{id:"test-results",children:["Test Results",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#test-results",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.strong,{children:"10 out of 10 tests passing (100% success rate)"}),`
`,e.jsxs(s.h4,{id:"-all-tests-passing",children:["✅ ",e.jsx(s.strong,{children:"All Tests Passing:"}),e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#-all-tests-passing",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"test_eth_to_dai_chainlink_order_with_rebalancer()"})," - Single oracle ETH→DAI"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"test_dai_to_eth_chainlink_order_with_rebalancer()"})," - Single oracle DAI→ETH with inverse"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"test_eth_to_dai_stop_loss_order_with_rebalancer()"})," - Stop-loss with predicate"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"test_simple_order_without_extension_with_rebalancer()"})," - Basic order without extensions"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"test_simple_order_with_different_amounts_with_rebalancer()"})," - Different order amounts"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"test_rebalancer_transfer_failure()"})," - Transfer failure handling"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"test_dai_to_1inch_stop_loss_order_predicate_invalid_with_rebalancer()"})," - Invalid predicate"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"test_dai_to_1inch_chainlink_order_makingAmountData_with_rebalancer()"})," - Double oracle with making amount"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"test_dai_to_1inch_chainlink_order_takingAmountData_with_rebalancer()"})," - Double oracle with taking amount"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"test_dai_to_1inch_stop_loss_order_with_rebalancer()"})," - Complex double oracle with stop-loss predicate"]}),`
`]}),`
`,e.jsxs(s.h4,{id:"-core-functionality-verified",children:["🎯 ",e.jsx(s.strong,{children:"Core Functionality Verified:"}),e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#-core-functionality-verified",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"✅ Post-interaction transfers tokens to treasurer"}),`
`,e.jsx(s.li,{children:"✅ Proper token approvals and transfers"}),`
`,e.jsx(s.li,{children:"✅ Balance verification accounting for treasurer transfers"}),`
`,e.jsx(s.li,{children:"✅ Error handling with transfer failures"}),`
`,e.jsx(s.li,{children:"✅ Atomic execution (orders either complete fully or revert entirely)"}),`
`,e.jsx(s.li,{children:"✅ Support for multiple token types (WETH, DAI, INCH)"}),`
`,e.jsx(s.li,{children:"✅ Complex oracle-based pricing scenarios"}),`
`]}),`
`,e.jsxs(s.h2,{id:"resource-management-1",children:["Resource Management",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#resource-management-1",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h3,{id:"resource-management-architecture",children:["Resource Management Architecture",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#resource-management-architecture",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.img,{src:"https://hackmd.io/_uploads/S12jGDhPge.png",alt:"ResourceArchitecture"})}),`
`,e.jsxs(s.h3,{id:"resource-management-components",children:["Resource Management Components",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#resource-management-components",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.img,{src:"https://hackmd.io/_uploads/HJ-pzD3Peg.png",alt:"ResourceComponents"})}),`
`,e.jsxs(s.h3,{id:"requirements",children:["Requirements",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#requirements",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsx(s.li,{children:"Read lib\\the-compact\\README.md (open in editor) to understand how the compact works"}),`
`,e.jsxs(s.li,{children:["We are looking to create an end to end flow where",`
`,e.jsxs(s.ol,{children:[`
`,e.jsx(s.li,{children:"We register a new contract ResourceManager.sol as a ResourceManager"}),`
`,e.jsx(s.li,{children:"We Register ChainLinkCompactInteraction.sol as the Arbiter"}),`
`,e.jsx(s.li,{children:"The Maker (the Swapper in compact terms signs permission for their tokens (or ETH) to be stored in the-compact as ERC-6909)"}),`
`,e.jsx(s.li,{children:"ChainLinkCompact.sol checks that the we have a ResourceLock for the amount required."}),`
`,e.jsx(s.li,{children:"ChainLinkCompact then executes the trade using the same logic that was in ChainLinkCalculator and creates a resource lock for their (tokens/ETH)"}),`
`,e.jsx(s.li,{children:"ChainLinkCompactInteraction is copied from RebalancerInteraction it takes the output tokens provided by the Taker and"}),`
`,e.jsx(s.li,{children:"If they are >= TakerAmount then it calls the ResourceManager to lock the funds"}),`
`,e.jsx(s.li,{children:"It then does the token transfer to the treasurer the same as it was done in the original RebalancerInteraction"}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(s.h3,{id:"design-questions-1",children:["Design Questions",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#design-questions-1",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Resource Manager Registration"}),": How should we register the LimitOrderProtocol as a ResourceManager in The Compact? Should it be a separate contract or integrated directly?"]}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsx(s.li,{children:"Answer: We are registering it as a separate contract let's call it ResourceManager.sol and this contract will be called by ChainLinkCompact to lock the resources before calling the swap on LimitOrderProtocl"}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Arbiter Implementation"}),": Should ChainLinkCompactInteraction.sol be a standalone arbiter or integrated with existing ChainLinkCalculator logic?"]}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsx(s.li,{children:"Answer: It should be Standalone ChainLinkCalculator and RebalancerInteraction remain unchanged"}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Token Locking Strategy"}),": Should makers lock their entire balance upfront or lock tokens dynamically when orders are matched?"]}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsx(s.li,{children:"Answer: Initially Lock their whole balance"}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Resource Lock Scope"}),": Should resource locks be chain-specific or multichain for cross-chain order execution?"]}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsx(s.li,{children:"Answer: Chain-specific"}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Allocator Selection"}),": Which allocator should we use for the resource locks? Should we create a custom allocator or use existing ones like Smallocator/Autocator?"]}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsx(s.li,{children:"Answer: Create a custom Allocator based on Autocator(which is used for End User signing which is the Maker in our case)"}),`
`,e.jsx(s.li,{children:"The logic for calling this should be in ChainLinkCompact.t.sol"}),`
`,e.jsx(s.li,{children:"Moving forward we will also create a custom Smallocator used when smart contract call this"}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"EIP-712 Signature Structure"}),": How should we structure the EIP-712 signatures for the compact agreements? Should we include mandate data for additional conditions?"]}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsx(s.li,{children:"Answer: For Phase 1 we do not need to add mandate data or Solver Payloads we will incorporate those in a later phase"}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Fallback Mechanisms"}),": What should happen if the arbiter fails to process a claim? Should we implement emissary fallbacks?"]}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsx(s.li,{children:"If an arbiter fails to process the claim the swap should revert"}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Gas Optimization"}),": How can we optimize gas usage for the ERC-6909 integration, especially for batch operations?"]}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsx(s.li,{children:"We will optimize gas in phase 2"}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Error Handling"}),": How should we handle cases where resource locks are insufficient or expired?"]}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsx(s.li,{children:"We revert the transaction with custom errors stating the reason for the failure"}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Integration Points"}),": Should the ERC-6909 functionality be optional (opt-in) or mandatory for all orders?"]}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsx(s.li,{children:"Optional set by a boolean ERC-6909 flag for now"}),`
`,e.jsx(s.li,{children:"Later this may move to an enum with additional swap types"}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(s.h3,{id:"implementation",children:["Implementation",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#implementation",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h4,{id:"phase-1-core-contract-development",children:["Phase 1: Core Contract Development",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#phase-1-core-contract-development",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Create ResourceManager.sol"})," - New contract"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Register as ResourceManager in The Compact"}),`
`,e.jsx(s.li,{children:"Handle resource lock creation and management for makers"}),`
`,e.jsx(s.li,{children:"Implement allocator integration for order validation"}),`
`,e.jsx(s.li,{children:"Called by ChainLinkCompact to lock resources before swap execution"}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Create ChainLinkCompact.sol"})," - Copy from ChainLinkCalculator.sol"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Add ERC-6909 flag for optional functionality"}),`
`,e.jsx(s.li,{children:"Integrate with The Compact for resource lock verification"}),`
`,e.jsx(s.li,{children:"Add ERC-6909 token validation before order execution"}),`
`,e.jsx(s.li,{children:"Call ResourceManager.sol to lock resources before LimitOrderProtocol execution"}),`
`,e.jsx(s.li,{children:"Implement custom error handling for insufficient/expired locks"}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Create ChainLinkCompactInteraction.sol"})," - Copy from RebalancerInteraction.sol"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Implement IArbiter interface for The Compact"}),`
`,e.jsx(s.li,{children:"Add resource lock creation for taker's output tokens"}),`
`,e.jsx(s.li,{children:"Maintain treasurer transfer functionality"}),`
`,e.jsx(s.li,{children:"Add EIP-712 signature verification for compact agreements"}),`
`,e.jsx(s.li,{children:"Revert entire transaction if arbiter fails to process claim"}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Create Custom Allocator"})," - Based on Autocator"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Implement IAllocator interface"}),`
`,e.jsx(s.li,{children:"Handle end-user (Maker) signing authorization"}),`
`,e.jsx(s.li,{children:"Add nonce management for compact claims"}),`
`,e.jsx(s.li,{children:"Implement claim authorization logic"}),`
`,e.jsx(s.li,{children:"Logic for calling this should be in ChainLinkCompact.t.sol"}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(s.h4,{id:"phase-2-integration--testing",children:["Phase 2: Integration & Testing",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#phase-2-integration--testing",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ol,{start:"5",children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.strong,{children:"Compact Registration System"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Implement EIP-712 signature generation for makers (no mandate data for Phase 1)"}),`
`,e.jsx(s.li,{children:"Create compact registration functions"}),`
`,e.jsx(s.li,{children:"Add chain-specific resource lock scope"}),`
`,e.jsx(s.li,{children:"Implement upfront token locking strategy"}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.strong,{children:"Testing Suite"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Unit tests for each contract"}),`
`,e.jsx(s.li,{children:"Integration tests for end-to-end flow"}),`
`,e.jsx(s.li,{children:"Test ERC-6909 flag functionality"}),`
`,e.jsx(s.li,{children:"Test custom error handling scenarios"}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(s.h4,{id:"phase-3-advanced-features",children:["Phase 3: Advanced Features",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#phase-3-advanced-features",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ol,{start:"7",children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.strong,{children:"Gas Optimization"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Optimize gas usage for ERC-6909 integration"}),`
`,e.jsx(s.li,{children:"Implement batch operations optimization"}),`
`,e.jsx(s.li,{children:"Profile and optimize critical paths"}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.strong,{children:"Enhanced Features"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Add mandate data structure for order conditions"}),`
`,e.jsx(s.li,{children:"Implement multichain support"}),`
`,e.jsx(s.li,{children:"Create custom Smallocator for smart contract calls"}),`
`,e.jsx(s.li,{children:"Add emissary fallback mechanisms"}),`
`,e.jsx(s.li,{children:"Implement enum for additional swap types beyond boolean flag"}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(s.h3,{id:"technical-architecture",children:["Technical Architecture",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#technical-architecture",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.strong,{children:"Core Flow:"}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsx(s.li,{children:"Maker deposits tokens into The Compact (creates ERC-6909 resource lock)"}),`
`,e.jsx(s.li,{children:"Maker signs EIP-712 compact agreement with arbiter (ChainLinkCompactInteraction)"}),`
`,e.jsx(s.li,{children:"Order is posted to LimitOrderProtocol with ERC-6909 extension"}),`
`,e.jsx(s.li,{children:"Taker fills order through ChainLinkCompact.sol"}),`
`,e.jsxs(s.li,{children:["ChainLinkCompactInteraction processes claim:",`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Verifies resource lock availability"}),`
`,e.jsx(s.li,{children:"Executes trade using ChainLinkCalculator logic"}),`
`,e.jsx(s.li,{children:"Creates new resource lock for taker's output tokens"}),`
`,e.jsx(s.li,{children:"Transfers tokens to treasurer"}),`
`,e.jsx(s.li,{children:"Calls ResourceManager to lock funds"}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(s.strong,{children:"Key Interfaces:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"ITheCompact"})," - For resource lock management"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"IAllocator"})," - For claim authorization"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"IArbiter"})," - For claim processing"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"IEmissary"})," - For fallback verification"]}),`
`]}),`
`,e.jsx(s.strong,{children:"Data Structures:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"Compact"})," - EIP-712 payload for single resource lock"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"BatchCompact"})," - EIP-712 payload for multiple resource locks"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"Mandate"})," - Witness data for order conditions"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"Claim"})," - Claim payload for processing"]}),`
`]}),`
`,e.jsxs(s.h3,{id:"future-test-enhancements",children:["Future Test Enhancements",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#future-test-enhancements",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"For ERC-6909 integration, additional test categories will be needed:"}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.strong,{children:"ERC-6909 Resource Lock Tests"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Resource lock creation and validation"}),`
`,e.jsx(s.li,{children:"Insufficient lock handling"}),`
`,e.jsx(s.li,{children:"Lock expiration scenarios"}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.strong,{children:"Compact Integration Tests"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"EIP-712 signature verification"}),`
`,e.jsx(s.li,{children:"Compact agreement validation"}),`
`,e.jsx(s.li,{children:"Arbiter claim processing"}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.strong,{children:"Resource Manager Tests"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Lock management functionality"}),`
`,e.jsx(s.li,{children:"Allocator integration"}),`
`,e.jsx(s.li,{children:"Error handling for resource conflicts"}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.strong,{children:"End-to-End Flow Tests"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Complete maker-to-taker flow"}),`
`,e.jsx(s.li,{children:"Treasurer integration"}),`
`,e.jsx(s.li,{children:"Cross-contract interaction validation"}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(s.h2,{id:"near-fusion-smart-contract-development-1",children:["NEAR FUSION+ Smart Contract Development",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#near-fusion-smart-contract-development-1",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h3,{id:"near-smart-contract-architecture",children:["NEAR Smart Contract Architecture",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#near-smart-contract-architecture",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.img,{src:"https://hackmd.io/_uploads/HydB7D3Pxe.png",alt:"NEARArchitecture"})}),`
`,e.jsxs(s.h3,{id:"near-limit-order-protocol-contracts",children:["NEAR Limit Order Protocol Contracts",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#near-limit-order-protocol-contracts",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.img,{src:"https://hackmd.io/_uploads/Hkg8QPnvee.png",alt:"NEARLimitOrder"})}),`
`,e.jsxs(s.h3,{id:"near-escrow-smart-contracts",children:["NEAR Escrow Smart Contracts",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#near-escrow-smart-contracts",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.img,{src:"https://hackmd.io/_uploads/S1tqDDhvgg.png",alt:"NEAR Escrow"})}),`
`,e.jsxs(s.h3,{id:"overview-1",children:["Overview",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#overview-1",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"NEAR Fusion+ is a comprehensive DeFi protocol that migrates 1inch's Limit Order Protocol and Cross-Chain Swap functionality to the NEAR blockchain. This project implements advanced trading features including limit orders, cross-chain atomic swaps, and sophisticated escrow mechanisms."}),`
`,e.jsxs(s.h3,{id:"architecture-1",children:["Architecture",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#architecture-1",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"The protocol consists of several interconnected smart contracts that work together to provide a complete DeFi trading experience:"}),`
`,e.jsxs(s.h4,{id:"core-components-1",children:["Core Components",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#core-components-1",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Limit Order Protocol"})," - Handles limit order creation, execution, and management"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Cross-Chain Swap"})," - Enables atomic swaps across different blockchains"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Escrow System"})," - Manages secure fund escrow for cross-chain operations"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Fee Management"})," - Handles fee collection and distribution"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Merkle Validation"})," - Provides proof validation for complex order structures"]}),`
`]}),`
`,e.jsxs(s.h4,{id:"contract-structure",children:["Contract Structure",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#contract-structure",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"src/"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"├── limit-order-protocol/     # Main limit order functionality"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"├── cross-chain-swap/         # Cross-chain atomic swap implementation"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"├── base-escrow-factory/      # Advanced escrow factory with Merkle validation"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"├── escrow-factory/           # Standard escrow factory"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"├── escrow-src/              # Source chain escrow contract"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"├── escrow-dst/              # Destination chain escrow contract"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"├── fee-taker/               # Fee collection and management"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"└── merkle-storage-invalidator/ # Merkle proof validation"})})]})})}),`
`,e.jsxs(s.h3,{id:"key-features-2",children:["Key Features",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#key-features-2",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Limit Orders"}),": Advanced limit order protocol with partial fills and multiple execution strategies"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Cross-Chain Swaps"}),": Atomic swaps between different blockchains with time-locked escrows"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Merkle Proofs"}),": Efficient validation for complex order structures"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Fee Management"}),": Flexible fee collection and distribution mechanisms"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Security"}),": Comprehensive validation and timelock mechanisms"]}),`
`]}),`
`,e.jsxs(s.h3,{id:"documentation-sections",children:["Documentation Sections",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#documentation-sections",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://github.com/jincubator-united-defi-2025/near-fusion-plus/protocol/tree/main/docs.architecture.md",children:"Architecture Overview"})}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/jincubator-united-defi-2025/near-fusion-plus/protocol/tree/main/docs.contracts/",children:"Contract Documentation"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://github.com/jincubator-united-defi-2025/near-fusion-plus/protocol/tree/main/docs.contracts/limit-order-protocol.md",children:"Limit Order Protocol"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://github.com/jincubator-united-defi-2025/near-fusion-plus/protocol/tree/main/docs.contracts/cross-chain-swap.md",children:"Cross-Chain Swap"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://github.com/jincubator-united-defi-2025/near-fusion-plus/protocol/tree/main/docs.contracts/escrow-system.md",children:"Escrow System"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://github.com/jincubator-united-defi-2025/near-fusion-plus/protocol/tree/main/docs.contracts/fee-taker.md",children:"Fee Taker"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://github.com/jincubator-united-defi-2025/near-fusion-plus/protocol/tree/main/docs.contracts/merkle-storage-invalidator.md",children:"Merkle Storage Invalidator"})}),`
`]}),`
`]}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://github.com/jincubator-united-defi-2025/near-fusion-plus/protocol/tree/main/docs.integration.md",children:"Integration Guide"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://github.com/jincubator-united-defi-2025/near-fusion-plus/protocol/tree/main/docs.security.md",children:"Security Considerations"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://github.com/jincubator-united-defi-2025/near-fusion-plus/protocol/tree/main/docs.api-reference.md",children:"API Reference"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://github.com/jincubator-united-defi-2025/near-fusion-plus/protocol/tree/main/docs.deployment.md",children:"Deployment Guide"})}),`
`]}),`
`,e.jsxs(s.h3,{id:"quick-start",children:["Quick Start",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#quick-start",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Build Contracts"}),": ",e.jsx(s.code,{children:"cargo near build"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Run Tests"}),": ",e.jsx(s.code,{children:"cargo test"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Deploy"}),": Use the deployment scripts in ",e.jsx(s.code,{children:"deployment-scripts/"})]}),`
`]}),`
`,e.jsxs(s.h3,{id:"development",children:["Development",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#development",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Rust Version"}),": See ",e.jsx(s.code,{children:"rust-toolchain.toml"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"NEAR SDK"}),": v5.15.1"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Testing"}),": Integration tests in ",e.jsx(s.code,{children:"integration-tests/"})]}),`
`]}),`
`,e.jsxs(s.h3,{id:"contributing",children:["Contributing",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#contributing",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["Please refer to the main ",e.jsx(s.a,{href:"https://github.com/jincubator-united-defi-2025/near-fusion-plus/blob/main/README.md",children:"README.md"})," for development setup and contribution guidelines."]})]})}function t(n={}){const{wrapper:s}={...r(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(i,{...n})}):i(n)}export{t as default,a as frontmatter};
