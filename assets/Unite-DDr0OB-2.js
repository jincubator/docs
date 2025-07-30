import{f as s,j as e}from"./index-BJTdkYSN.js";const l={title:"Jincubator Limit Order Protocol: Unite Defi (2025)",description:"undefined"};function i(r){const n={a:"a",code:"code",defs:"defs",div:"div",g:"g",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li","mjx-container":"mjx-container",ol:"ol",p:"p",path:"path",strong:"strong",style:"style",svg:"svg",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",use:"use",...s(),...r.components},t=n["mjx-container"];return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"jincubator-limit-order-protocol-unite-defi-2025",children:["Jincubator Limit Order Protocol: Unite Defi (2025)",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#jincubator-limit-order-protocol-unite-defi-2025",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(n.h2,{id:"overview",children:["Overview",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#overview",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"The protocol implements extensions to the 1inch limit-order-protocol. To enable ERC-6909 support, resource locking and enhanced price discovery. It also facilitates back running of swaps as part of Interaction Order Extensions."}),`
`,e.jsx(n.p,{children:"Stretch Goals include enhance price discovery and NEAR Fusion+ integration."}),`
`,e.jsxs(n.p,{children:["Public page is ",e.jsx(n.a,{href:"https://ethglobal.com/showcase/defiunite-jincubator-g1h0p",children:"here"})," and hackmd article is ",e.jsx(n.a,{href:"https://hackmd.io/@jincubator/DeFi2025JincubatorDesign",children:"here"})]}),`
`,e.jsxs(n.h2,{id:"design",children:["Design",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#design",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"For Unite Defi we are working on 3 separate but compatible streams."}),`
`,e.jsxs(n.h3,{id:"limit-order-protocol",children:["Limit Order Protocol",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#limit-order-protocol",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Here are the Key Features Under Consideration"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Price Discovery: Integrating Pyth Oracles such as Redstone to improve Price Discovery"}),`
`,e.jsx(n.li,{children:"Stop Loss Orders: Implementing a Holistic Advanced Limit Order (HALO) using a Predicate which passes price criteria for execution"}),`
`,e.jsx(n.li,{children:"ERC-6909 Support: We implement the ability to Lock Resources in an ERC-6909 compatible Extension"}),`
`,e.jsx(n.li,{children:"No Liquidity Solving (Same Chain Only): Provide the ability for Resolvers to use the Locked Resources as part of the Solve"}),`
`,e.jsx(n.li,{children:"Portfolio Management: We implement the ability to rebalance the maker or takers assets during the fill with an Interaction"}),`
`]}),`
`,e.jsxs(n.h3,{id:"near-fusion",children:["Near Fusion+",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#near-fusion",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["We Integrate Near and 1inch Fusion (see ",e.jsx(n.a,{href:"https://github.com/jincubator-united-defi-2025/near-fusion-plus",children:"near-fusion-plus"}),")"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Near Contracts for hash lock and time lock functionality"}),`
`,e.jsx(n.li,{children:"Swap Functionality between Ethereum and Near via Fusion Plus"}),`
`,e.jsx(n.li,{children:"Demonstration of bidirectional token transfers between Ethereum and NEAR"}),`
`]}),`
`,e.jsxs(n.h3,{id:"near-solver-built-with-nears-shade-agent-framework",children:["Near Solver Built with NEAR's Shade Agent Framework",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#near-solver-built-with-nears-shade-agent-framework",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"A decentralized solver which works with 1inch Fusion+"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.strong,{children:"Smart Contracts"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"solver-registry"}),": Support liquidity pools creation. Manage registration and verification of TEE solvers for each liquidity pool."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"intents-vault"}),": The vault contract that manage the pool's asset within NEAR Intents."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.strong,{children:"Solver Management Server"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"A Rust based server that manages the lifecycle of TEE solvers"}),`
`,e.jsx(n.li,{children:"Handles solver deployment and monitoring for each liquidity pool"}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.h3,{id:"design-questions",children:["Design Questions",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#design-questions",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Passing of ",e.jsx(n.a,{href:"https://github.com/1inch/limit-order-protocol/blob/master/description.md#extensions-structure",children:"Extension Information"})," when ",e.jsx(n.a,{href:"https://github.com/1inch/limit-order-protocol/blob/master/description.md#how-to-build-an-order",children:"building an order"})]}),`
`,e.jsxs(n.li,{children:["Custom Limit Orders should not be posted to official Limit Order API. ",e.jsx(n.a,{href:"https://discord.com/channels/554623348622098432/1385673870941618348/1399699600515796992",children:"Answered"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Scripting is fine for the Hackathon"}),`
`,e.jsx(n.li,{children:"We don't need to build out our own API"}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:"Resolver - Contract as part of protocol?"}),`
`,e.jsx(n.li,{children:"Relayer - Is relayer a contract or service?"}),`
`]}),`
`,e.jsxs(n.h2,{id:"implementation-details",children:["Implementation Details",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#implementation-details",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h3,{id:"limit-order-protocol-improvements",children:["Limit Order Protocol Improvements",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#limit-order-protocol-improvements",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Stop Loss and Take profit",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Both basic and trailing SL/TP orders"}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/1inch/limit-order-protocol/blob/master/test/ChainLinkExample.js",children:"ChainLink Example"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/1inch/limit-order-protocol/blob/master/description.md#order-extensions",children:"Order Creation Logic to Populate Order Extension Information"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/1inch/limit-order-protocol/blob/master/description.md",children:"Order Extensions"})," : ",e.jsx(n.a,{href:"https://github.com/1inch/limit-order-protocol/tree/master/contracts/extensions",children:"Extensions Code"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["ERC-6909 extension similar to ",e.jsx(n.a,{href:"https://github.com/1inch/limit-order-protocol/blob/master/contracts/extensions/ERC1155Proxy.sol",children:"ERC1155PROXY.sol"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Resource Locking Functionality integrating with ",e.jsx(n.a,{href:"https://github.com/uniswap/the-compact",children:"the-compact"})]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Price Discovery",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/1inch/limit-order-protocol/blob/master/contracts/extensions/ChainlinkCalculator.sol",children:"ChainCalculator.sol"}),": Reference Implementation see Price Discovery codebases below."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/1inch/limit-order-protocol/blob/master/description.md#interactions",children:"Interactions"}),": Interactions are callbacks that enable the execution of arbitrary code, which is provided by the maker’s order or taker’s fill execution.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"ERC-6909 Settlement (including EIP-712 Signature Verification)"}),`
`,e.jsx(n.li,{children:"BackRunning Of Order"}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.h3,{id:"price-discovery-improvements",children:["Price Discovery Improvements",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#price-discovery-improvements",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Tycho Indexing: For Streaming of State Changes of DeFi Protocols"}),`
`,e.jsx(n.li,{children:"Tycho Simulation: For Price Discovery"}),`
`,e.jsx(n.li,{children:"Pyth Oracle Integration: For Price Discovery"}),`
`]}),`
`,e.jsxs(n.h3,{id:"fusion-to-near-implementations-stretch-goal",children:["Fusion+ to Near Implementations (Stretch Goal)",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#fusion-to-near-implementations-stretch-goal",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Relayer"}),`
`,e.jsx(n.li,{children:"Resolver"}),`
`]}),`
`,e.jsxs(n.h3,{id:"near-solver-built-with-nears-shade-agent-framework-1",children:["Near Solver Built with NEAR's Shade Agent Framework",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#near-solver-built-with-nears-shade-agent-framework-1",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h3,{id:"components",children:["Components",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#components",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/jincubator-united-defi-2025/near-fusion-plus",children:"Jincubator Near Fusion+"}),": NEAR Fusion+ Smart contracts"]}),`
`]}),`
`,e.jsxs(n.h3,{id:"foundational-git-modules",children:["Foundational (git modules)",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#foundational-git-modules",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/1inch/limit-order-protocol",children:"limit-order-protocol"}),": 1inch Limit Order Protocol Smart Contract. Key features of the protocol are extreme flexibility and high gas efficiency"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/1inch/cross-chain-swap",children:"https://github.com/1inch/cross-chain-swap"}),": 1inch Network Fusion Atomic Swaps"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/uniswap/the-compact",children:"the-compact"})," : The Compact 🤝 ERC-6909 Resource Locking Mechanism an ownerless ERC6909 contract that facilitates the voluntary formation (and, if necessary, eventual dissolution) of reusable resource locks."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/propeller-heads/tycho-execution",children:"Tycho Execution"}),": Tycho Execution makes it easy to trade on different DEXs by handling the complex encoding for you. Instead of creating custom code for each DEX, you get a simple, ready-to-use tool that generates the necessary data to execute trades. It's designed to be safe, straightforward, and quick to set up, so anyone can start trading without extra effort."]}),`
`]}),`
`,e.jsxs(n.h2,{id:"references",children:["References",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#references",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h3,{id:"code",children:["Code",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#code",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/1inch/limit-order-sdk",children:"Limit Order SDK"}),":1inch Limit Order Protocol v4 SDK"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/1inch/cross-chain-resolver-example",children:"Cross Chain Resolver Example"}),": An example Cross Chain Resolver"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/1inch/cross-chain-sdk",children:"Cross Chain SDK"}),": SDK for creating atomic swaps through 1inch"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/1inch/p2p-network",children:"p2p network (Relayer)"}),": consists of several key components that work in concert to provide a decentralized service layer for Web3 applications.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/1inch/p2p-network/blob/dev/cmd/relayer/README.md",children:"Relayer Node"}),": The Relayer Node enables clients to interact with the decentralized network. It utilizes HTTP for SDP signaling and WebRTC data channels on the front-facing API while communicating with Resolver nodes through gRPC requests."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/1inch/p2p-network/blob/dev/cmd/resolver/README.md",children:"Resolver"}),": Resolver application serves as a lowest-level endpoint in the p2p-network architecture. It processes requests received from the relayer and forwards them to the API(s) that it wraps."]}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/itskillian/hookathon-hooks/blob/02cedce8376943267be9582094ec544eede78e4e/src/ArbPinHook.sol#L205",children:"LP Hub BackRunner"})}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.p,{children:"Price Discovery"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/1inch/limit-order-protocol/blob/master/contracts/extensions/ChainlinkCalculator.sol",children:"ChainLinkCalculator"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/propeller-heads/tycho-simulation/blob/main/token-proxy/src/TokenProxy.sol",children:"Tycho Simulation TokenProxy"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/SkyYap/SkySwap/blob/main/src/OracleManager.sol",children:"SkySwap Oracle Manager"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/YOLO-Protocol/yolo-core-v0/tree/main/src/oracles",children:"Yolo Protocol Oracle"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/euler-xyz/euler-price-oracle",children:"Euler Price Oracle"}),": See adapters below"]}),`
`]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Adapter"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Method"}),e.jsx(n.th,{children:"Supported Pairs"}),e.jsx(n.th,{children:"Parameters"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.a,{href:"src/adapter/chainlink/ChainlinkOracle.sol",children:"ChainlinkOracle"})}),e.jsx(n.td,{children:"External"}),e.jsx(n.td,{children:"Push"}),e.jsx(n.td,{children:"Provider feeds"}),e.jsx(n.td,{children:"feed, max staleness"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.a,{href:"src/adapter/chainlink/ChronicleOracle.sol",children:"ChronicleOracle"})}),e.jsx(n.td,{children:"External"}),e.jsx(n.td,{children:"Push"}),e.jsx(n.td,{children:"Provider feeds"}),e.jsx(n.td,{children:"feed, max staleness"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.a,{href:"src/adapter/pyth/PythOracle.sol",children:"PythOracle"})}),e.jsx(n.td,{children:"External"}),e.jsx(n.td,{children:"Pull"}),e.jsx(n.td,{children:"Provider feeds"}),e.jsx(n.td,{children:"feed, max staleness, max confidence interval"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.a,{href:"src/adapter/redstone/RedstoneCoreOracle.sol",children:"RedstoneCoreOracle"})}),e.jsx(n.td,{children:"External"}),e.jsx(n.td,{children:"Pull"}),e.jsx(n.td,{children:"Provider feeds"}),e.jsx(n.td,{children:"feed, max staleness, cache ttl"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.a,{href:"src/adapter/lido/LidoOracle.sol",children:"LidoOracle"})}),e.jsx(n.td,{children:"Onchain"}),e.jsx(n.td,{children:"Rate"}),e.jsx(n.td,{children:"wstETH/stETH"}),e.jsx(n.td,{children:"-"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.a,{href:"src/adapter/lido/LidoFundamentalOracle.sol",children:"LidoFundamentalOracle"})}),e.jsx(n.td,{children:"Onchain"}),e.jsx(n.td,{children:"Rate"}),e.jsx(n.td,{children:"wstETH/ETH"}),e.jsx(n.td,{children:"-"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.a,{href:"src/adapter/uniswap/UniswapV3Oracle.sol",children:"UniswapV3Oracle"})}),e.jsx(n.td,{children:"Onchain"}),e.jsx(n.td,{children:"TWAP"}),e.jsx(n.td,{children:"UniV3 pools"}),e.jsx(n.td,{children:"fee, twap window"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.a,{href:"src/adapter/pendle/PendleOracle.sol",children:"PendleOracle"})}),e.jsx(n.td,{children:"Onchain"}),e.jsx(n.td,{children:"TWAP"}),e.jsx(n.td,{children:"Pendle markets"}),e.jsx(n.td,{children:"pendle market, twap window"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.a,{href:"src/adapter/rate/RateProviderOracle.sol",children:"RateProviderOracle"})}),e.jsx(n.td,{children:"Onchain"}),e.jsx(n.td,{children:"Rate"}),e.jsx(n.td,{children:"Balancer rate providers"}),e.jsx(n.td,{children:"rate provider"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.a,{href:"src/adapter/fixed/FixedRateOracle.sol",children:"FixedRateOracle"})}),e.jsx(n.td,{children:"Onchain"}),e.jsx(n.td,{children:"Rate"}),e.jsx(n.td,{children:"Any"}),e.jsx(n.td,{children:"rate"})]})]})]}),`
`,e.jsx(n.p,{children:"NEAR Integration"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/jincubator-united-defi-2025/near-fusion-plus",children:"Jincubator Near Fusion+"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/near/cargo-near",children:"Cargo Near"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/near-examples/donation-examples",children:"Donation Examples"})}),`
`,e.jsxs(n.li,{children:["Frontend: ",e.jsx(n.code,{children:"npx create-near-app@latest"})]}),`
`,e.jsxs(n.li,{children:["Solver manager and deployer ",e.jsx(n.a,{href:"https://github.com/jincubator-united-defi-2025/tee-solver",children:"https://github.com/jincubator-united-defi-2025/tee-solver"})]}),`
`,e.jsxs(n.li,{children:["Solver ",e.jsx(n.a,{href:"https://github.com/jincubator-united-defi-2025/near-intents-tee-amm-solver",children:"https://github.com/jincubator-united-defi-2025/near-intents-tee-amm-solver"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://docs.near.org/chain-abstraction/intents/overview",children:"Near Intents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://near-intents.org/",children:"https://near-intents.org/"})}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.h3,{id:"documentation",children:["Documentation",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#documentation",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/1inch/limit-order-protocol/blob/master/description.md",children:"Limit order protocol v4"}),": Technical documentation for 1nch Limit Order Protocol including Order Extensions"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://portal.1inch.dev/documentation/apis/orderbook/introduction",children:"1inch OrderBook API"}),": 1inch Orderbook API is using the 1inch Limit Order Protocol, which is a set of smart contracts that can work on any EVM-based blockchains. Key features of the protocol are extreme flexibility and high gas efficiency."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://portal.1inch.dev/documentation/apis/swap/fusion-plus/introduction",children:"1inch Fusion+ (intent-based atomic cross-chain swaps)"}),": built on the cross-chain-sdk"]}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.youtube.com/watch?v=EnHov0tCalU&t=860s",children:"1inch Cross-chain swaps - Fusion+ Tanner Moore"})}),`
`]}),`
`,e.jsx(n.p,{children:"NEAR Integration"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://dev.near.org/documentation/smart-contracts/what-is",children:"Near Smart Contracts"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://docs.near.org/sdk/rust/introduction",children:"NEAR Rust SDK Documentation"})}),`
`]}),`
`,e.jsxs(n.h3,{id:"prize-streams",children:["Prize Streams",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#prize-streams",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h4,{id:"-expand-limit-order-protocol--65000-10000-x-3-7000-x-3-3500-x-4-",children:["🍾 Expand Limit Order Protocol ⸺ ",e.jsx(t,{className:"MathJax",jax:"SVG",children:e.jsxs(n.svg,{style:{verticalAlign:"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"7.542ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 3333.7 1000",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[e.jsxs(n.defs,{children:[e.jsx(n.path,{id:"MJX-1-TEX-N-36",d:"M42 313Q42 476 123 571T303 666Q372 666 402 630T432 550Q432 525 418 510T379 495Q356 495 341 509T326 548Q326 592 373 601Q351 623 311 626Q240 626 194 566Q147 500 147 364L148 360Q153 366 156 373Q197 433 263 433H267Q313 433 348 414Q372 400 396 374T435 317Q456 268 456 210V192Q456 169 451 149Q440 90 387 34T253 -22Q225 -22 199 -14T143 16T92 75T56 172T42 313ZM257 397Q227 397 205 380T171 335T154 278T148 216Q148 133 160 97T198 39Q222 21 251 21Q302 21 329 59Q342 77 347 104T352 209Q352 289 347 316T329 361Q302 397 257 397Z"}),e.jsx(n.path,{id:"MJX-1-TEX-N-35",d:"M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z"}),e.jsx(n.path,{id:"MJX-1-TEX-N-2C",d:"M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"}),e.jsx(n.path,{id:"MJX-1-TEX-N-30",d:"M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"}),e.jsx(n.path,{id:"MJX-1-TEX-N-28",d:"M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"})]}),e.jsx(n.g,{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",transform:"scale(1,-1)",children:e.jsxs(n.g,{"data-mml-node":"math",children:[e.jsxs(n.g,{"data-mml-node":"mn",children:[e.jsx(n.use,{"data-c":"36",xlinkHref:"#MJX-1-TEX-N-36"}),e.jsx(n.use,{"data-c":"35",xlinkHref:"#MJX-1-TEX-N-35",transform:"translate(500,0)"})]}),e.jsx(n.g,{"data-mml-node":"mo",transform:"translate(1000,0)",children:e.jsx(n.use,{"data-c":"2C",xlinkHref:"#MJX-1-TEX-N-2C"})}),e.jsxs(n.g,{"data-mml-node":"mn",transform:"translate(1444.7,0)",children:[e.jsx(n.use,{"data-c":"30",xlinkHref:"#MJX-1-TEX-N-30"}),e.jsx(n.use,{"data-c":"30",xlinkHref:"#MJX-1-TEX-N-30",transform:"translate(500,0)"}),e.jsx(n.use,{"data-c":"30",xlinkHref:"#MJX-1-TEX-N-30",transform:"translate(1000,0)"})]}),e.jsx(n.g,{"data-mml-node":"mo",transform:"translate(2944.7,0)",children:e.jsx(n.use,{"data-c":"28",xlinkHref:"#MJX-1-TEX-N-28"})})]})})]})}),"10,000 x 3, ",e.jsx(t,{className:"MathJax",jax:"SVG",children:e.jsxs(n.svg,{style:{verticalAlign:"-0.439ex"},xmlns:"http://www.w3.org/2000/svg",width:"8.585ex",height:"1.968ex",role:"img",focusable:"false",viewBox:"0 -676 3794.7 870",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[e.jsxs(n.defs,{children:[e.jsx(n.path,{id:"MJX-2-TEX-N-37",d:"M55 458Q56 460 72 567L88 674Q88 676 108 676H128V672Q128 662 143 655T195 646T364 644H485V605L417 512Q408 500 387 472T360 435T339 403T319 367T305 330T292 284T284 230T278 162T275 80Q275 66 275 52T274 28V19Q270 2 255 -10T221 -22Q210 -22 200 -19T179 0T168 40Q168 198 265 368Q285 400 349 489L395 552H302Q128 552 119 546Q113 543 108 522T98 479L95 458V455H55V458Z"}),e.jsx(n.path,{id:"MJX-2-TEX-N-2C",d:"M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"}),e.jsx(n.path,{id:"MJX-2-TEX-N-30",d:"M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"}),e.jsx(n.path,{id:"MJX-2-TEX-I-1D465",d:"M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"}),e.jsx(n.path,{id:"MJX-2-TEX-N-33",d:"M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z"})]}),e.jsx(n.g,{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",transform:"scale(1,-1)",children:e.jsxs(n.g,{"data-mml-node":"math",children:[e.jsx(n.g,{"data-mml-node":"mn",children:e.jsx(n.use,{"data-c":"37",xlinkHref:"#MJX-2-TEX-N-37"})}),e.jsx(n.g,{"data-mml-node":"mo",transform:"translate(500,0)",children:e.jsx(n.use,{"data-c":"2C",xlinkHref:"#MJX-2-TEX-N-2C"})}),e.jsxs(n.g,{"data-mml-node":"mn",transform:"translate(944.7,0)",children:[e.jsx(n.use,{"data-c":"30",xlinkHref:"#MJX-2-TEX-N-30"}),e.jsx(n.use,{"data-c":"30",xlinkHref:"#MJX-2-TEX-N-30",transform:"translate(500,0)"}),e.jsx(n.use,{"data-c":"30",xlinkHref:"#MJX-2-TEX-N-30",transform:"translate(1000,0)"})]}),e.jsx(n.g,{"data-mml-node":"mi",transform:"translate(2444.7,0)",children:e.jsx(n.use,{"data-c":"1D465",xlinkHref:"#MJX-2-TEX-I-1D465"})}),e.jsx(n.g,{"data-mml-node":"mn",transform:"translate(3016.7,0)",children:e.jsx(n.use,{"data-c":"33",xlinkHref:"#MJX-2-TEX-N-33"})}),e.jsx(n.g,{"data-mml-node":"mo",transform:"translate(3516.7,0)",children:e.jsx(n.use,{"data-c":"2C",xlinkHref:"#MJX-2-TEX-N-2C"})})]})})]})}),"3500 x 4 )",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#-expand-limit-order-protocol--65000-10000-x-3-7000-x-3-3500-x-4-",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"1inch Limit Order Protocol is an onchain orderbook that can be extended to do much more. Build advanced strategies and hooks for the 1inch Limit Order Protocol like options, concentrated liquidity, TWAP swaps, etc."}),`
`,e.jsx(n.p,{children:"Qualification Requirements:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Onchain execution of strategy should be presented during the final demo"}),`
`,e.jsx(n.li,{children:"Custom Limit Orders should not be posted to official Limit Order API"}),`
`,e.jsx(n.li,{children:"Consistent commit history should be in the GitHub project. No low or single-commit entries allowed!"}),`
`]}),`
`,e.jsx(n.p,{children:"Stretch goals (not hard requirements):"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"UI"}),`
`]}),`
`,e.jsxs(n.h4,{id:"-extend-fusion-to-near--32000-12000-7500-5000-4000-3500",children:["🌐 Extend Fusion+ to Near ⸺ ",e.jsx(t,{className:"MathJax",jax:"SVG",children:e.jsxs(n.svg,{style:{verticalAlign:"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"7.542ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 3333.7 1000",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[e.jsxs(n.defs,{children:[e.jsx(n.path,{id:"MJX-3-TEX-N-33",d:"M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z"}),e.jsx(n.path,{id:"MJX-3-TEX-N-32",d:"M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"}),e.jsx(n.path,{id:"MJX-3-TEX-N-2C",d:"M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"}),e.jsx(n.path,{id:"MJX-3-TEX-N-30",d:"M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"}),e.jsx(n.path,{id:"MJX-3-TEX-N-28",d:"M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"})]}),e.jsx(n.g,{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",transform:"scale(1,-1)",children:e.jsxs(n.g,{"data-mml-node":"math",children:[e.jsxs(n.g,{"data-mml-node":"mn",children:[e.jsx(n.use,{"data-c":"33",xlinkHref:"#MJX-3-TEX-N-33"}),e.jsx(n.use,{"data-c":"32",xlinkHref:"#MJX-3-TEX-N-32",transform:"translate(500,0)"})]}),e.jsx(n.g,{"data-mml-node":"mo",transform:"translate(1000,0)",children:e.jsx(n.use,{"data-c":"2C",xlinkHref:"#MJX-3-TEX-N-2C"})}),e.jsxs(n.g,{"data-mml-node":"mn",transform:"translate(1444.7,0)",children:[e.jsx(n.use,{"data-c":"30",xlinkHref:"#MJX-3-TEX-N-30"}),e.jsx(n.use,{"data-c":"30",xlinkHref:"#MJX-3-TEX-N-30",transform:"translate(500,0)"}),e.jsx(n.use,{"data-c":"30",xlinkHref:"#MJX-3-TEX-N-30",transform:"translate(1000,0)"})]}),e.jsx(n.g,{"data-mml-node":"mo",transform:"translate(2944.7,0)",children:e.jsx(n.use,{"data-c":"28",xlinkHref:"#MJX-3-TEX-N-28"})})]})})]})}),"12,000, ",e.jsx(t,{className:"MathJax",jax:"SVG",children:e.jsxs(n.svg,{style:{verticalAlign:"-0.439ex"},xmlns:"http://www.w3.org/2000/svg",width:"6.16ex",height:"1.968ex",role:"img",focusable:"false",viewBox:"0 -676 2722.7 870",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[e.jsxs(n.defs,{children:[e.jsx(n.path,{id:"MJX-4-TEX-N-37",d:"M55 458Q56 460 72 567L88 674Q88 676 108 676H128V672Q128 662 143 655T195 646T364 644H485V605L417 512Q408 500 387 472T360 435T339 403T319 367T305 330T292 284T284 230T278 162T275 80Q275 66 275 52T274 28V19Q270 2 255 -10T221 -22Q210 -22 200 -19T179 0T168 40Q168 198 265 368Q285 400 349 489L395 552H302Q128 552 119 546Q113 543 108 522T98 479L95 458V455H55V458Z"}),e.jsx(n.path,{id:"MJX-4-TEX-N-2C",d:"M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"}),e.jsx(n.path,{id:"MJX-4-TEX-N-35",d:"M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z"}),e.jsx(n.path,{id:"MJX-4-TEX-N-30",d:"M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"})]}),e.jsx(n.g,{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",transform:"scale(1,-1)",children:e.jsxs(n.g,{"data-mml-node":"math",children:[e.jsx(n.g,{"data-mml-node":"mn",children:e.jsx(n.use,{"data-c":"37",xlinkHref:"#MJX-4-TEX-N-37"})}),e.jsx(n.g,{"data-mml-node":"mo",transform:"translate(500,0)",children:e.jsx(n.use,{"data-c":"2C",xlinkHref:"#MJX-4-TEX-N-2C"})}),e.jsxs(n.g,{"data-mml-node":"mn",transform:"translate(944.7,0)",children:[e.jsx(n.use,{"data-c":"35",xlinkHref:"#MJX-4-TEX-N-35"}),e.jsx(n.use,{"data-c":"30",xlinkHref:"#MJX-4-TEX-N-30",transform:"translate(500,0)"}),e.jsx(n.use,{"data-c":"30",xlinkHref:"#MJX-4-TEX-N-30",transform:"translate(1000,0)"})]}),e.jsx(n.g,{"data-mml-node":"mo",transform:"translate(2444.7,0)",children:e.jsx(n.use,{"data-c":"2C",xlinkHref:"#MJX-4-TEX-N-2C"})})]})})]})}),"5,000, 4,000, $3500)",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#-extend-fusion-to-near--32000-12000-7500-5000-4000-3500",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Build a novel extension for 1inch Cross-chain Swap (Fusion+) that enables swaps between Ethereum and Near."}),`
`,e.jsx(n.p,{children:"Qualification Requirements:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Preserve hashlock and timelock functionality for the non-EVM implementation"}),`
`,e.jsx(n.li,{children:"Swap functionality should be bidirectional (swaps should be possible to and from Ethereum)"}),`
`,e.jsx(n.li,{children:"Onchain (mainnet or testnet) execution of token transfers should be presented during the final demo"}),`
`]}),`
`,e.jsx(n.p,{children:"Stretch goals (not hard requirements):"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"UI"}),`
`,e.jsx(n.li,{children:"Enable partial fills"}),`
`,e.jsx(n.li,{children:"Relayer and resolver"}),`
`]}),`
`,e.jsxs(n.h4,{id:"-best-1inch-fusion-solver-built-with-nears-shade-agent-framework--10000-2x-5000",children:["🔗 Best 1inch Fusion+ Solver Built with NEAR's Shade Agent Framework ⸺ ",e.jsx(t,{className:"MathJax",jax:"SVG",children:e.jsxs(n.svg,{style:{verticalAlign:"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"9.968ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 4405.7 1000",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[e.jsxs(n.defs,{children:[e.jsx(n.path,{id:"MJX-5-TEX-N-31",d:"M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"}),e.jsx(n.path,{id:"MJX-5-TEX-N-30",d:"M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"}),e.jsx(n.path,{id:"MJX-5-TEX-N-2C",d:"M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"}),e.jsx(n.path,{id:"MJX-5-TEX-N-28",d:"M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"}),e.jsx(n.path,{id:"MJX-5-TEX-N-32",d:"M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"}),e.jsx(n.path,{id:"MJX-5-TEX-I-1D465",d:"M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"})]}),e.jsx(n.g,{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",transform:"scale(1,-1)",children:e.jsxs(n.g,{"data-mml-node":"math",children:[e.jsxs(n.g,{"data-mml-node":"mn",children:[e.jsx(n.use,{"data-c":"31",xlinkHref:"#MJX-5-TEX-N-31"}),e.jsx(n.use,{"data-c":"30",xlinkHref:"#MJX-5-TEX-N-30",transform:"translate(500,0)"})]}),e.jsx(n.g,{"data-mml-node":"mo",transform:"translate(1000,0)",children:e.jsx(n.use,{"data-c":"2C",xlinkHref:"#MJX-5-TEX-N-2C"})}),e.jsxs(n.g,{"data-mml-node":"mn",transform:"translate(1444.7,0)",children:[e.jsx(n.use,{"data-c":"30",xlinkHref:"#MJX-5-TEX-N-30"}),e.jsx(n.use,{"data-c":"30",xlinkHref:"#MJX-5-TEX-N-30",transform:"translate(500,0)"}),e.jsx(n.use,{"data-c":"30",xlinkHref:"#MJX-5-TEX-N-30",transform:"translate(1000,0)"})]}),e.jsx(n.g,{"data-mml-node":"mo",transform:"translate(2944.7,0)",children:e.jsx(n.use,{"data-c":"28",xlinkHref:"#MJX-5-TEX-N-28"})}),e.jsx(n.g,{"data-mml-node":"mn",transform:"translate(3333.7,0)",children:e.jsx(n.use,{"data-c":"32",xlinkHref:"#MJX-5-TEX-N-32"})}),e.jsx(n.g,{"data-mml-node":"mi",transform:"translate(3833.7,0)",children:e.jsx(n.use,{"data-c":"1D465",xlinkHref:"#MJX-5-TEX-I-1D465"})})]})})]})}),"5000)",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#-best-1inch-fusion-solver-built-with-nears-shade-agent-framework--10000-2x-5000",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Build a decentralized solver that integrates with 1inch Fusion+ for cross-chain swaps using NEAR's Shade Agent Framework and Trusted Execution Environment."}),`
`,e.jsx(n.p,{children:"There is an existing decentralized NEAR Intents solver here:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Solver manager and deployer ",e.jsx(n.a,{href:"https://github.com/Near-One/tee-solver/",children:"https://github.com/Near-One/tee-solver/"})]}),`
`,e.jsxs(n.li,{children:["Solver ",e.jsx(n.a,{href:"https://github.com/think-in-universe/near-intents-tee-amm-solver/tree/feat/tee-solver",children:"https://github.com/think-in-universe/near-intents-tee-amm-solver/tree/feat/tee-solver"})]}),`
`]}),`
`,e.jsx(n.p,{children:"It listens for intents, generates quotes, and submits them for execution on NEAR Intents. Your task is to build a similar system that works with 1inch Fusion+ and its meta-order format. Make sure the solver is created using NEAR’s Shade Agent Framework and is deployed in a Trusted Execution Environment."}),`
`,e.jsx(n.p,{children:"The Shade Agent Framework allows you to build decentralized solvers, enabling users to delegate and provide liquidity to solvers without requiring trust that the solver will behave correctly or having to set up their own solver."}),`
`,e.jsx(n.p,{children:"Qualification Requirements:"}),`
`,e.jsx(n.p,{children:"Your solver must listen for quote requests (mocked or real), produce valid 1inch Fusion meta-orders using NEAR's Chain Signatures, include comprehensive documentation with setup instructions, and demonstrate end-to-end functionality. Bonus points for modular architecture that extends to other protocols."}),e.jsx(n.style,{children:`
mjx-container[jax="SVG"] {
  direction: ltr;
}

mjx-container[jax="SVG"] > svg {
  overflow: visible;
  min-height: 1px;
  min-width: 1px;
}

mjx-container[jax="SVG"] > svg a {
  fill: blue;
  stroke: blue;
}

mjx-container[jax="SVG"][display="true"] {
  display: block;
  text-align: center;
  margin: 1em 0;
}

mjx-container[jax="SVG"][display="true"][width="full"] {
  display: flex;
}

mjx-container[jax="SVG"][justify="left"] {
  text-align: left;
}

mjx-container[jax="SVG"][justify="right"] {
  text-align: right;
}

g[data-mml-node="merror"] > g {
  fill: red;
  stroke: red;
}

g[data-mml-node="merror"] > rect[data-background] {
  fill: yellow;
  stroke: none;
}

g[data-mml-node="mtable"] > line[data-line], svg[data-table] > g > line[data-line] {
  stroke-width: 70px;
  fill: none;
}

g[data-mml-node="mtable"] > rect[data-frame], svg[data-table] > g > rect[data-frame] {
  stroke-width: 70px;
  fill: none;
}

g[data-mml-node="mtable"] > .mjx-dashed, svg[data-table] > g > .mjx-dashed {
  stroke-dasharray: 140;
}

g[data-mml-node="mtable"] > .mjx-dotted, svg[data-table] > g > .mjx-dotted {
  stroke-linecap: round;
  stroke-dasharray: 0,140;
}

g[data-mml-node="mtable"] > g > svg {
  overflow: visible;
}

[jax="SVG"] mjx-tool {
  display: inline-block;
  position: relative;
  width: 0;
  height: 0;
}

[jax="SVG"] mjx-tool > mjx-tip {
  position: absolute;
  top: 0;
  left: 0;
}

mjx-tool > mjx-tip {
  display: inline-block;
  padding: .2em;
  border: 1px solid #888;
  font-size: 70%;
  background-color: #F8F8F8;
  color: black;
  box-shadow: 2px 2px 5px #AAAAAA;
}

g[data-mml-node="maction"][data-toggle] {
  cursor: pointer;
}

mjx-status {
  display: block;
  position: fixed;
  left: 1em;
  bottom: 1em;
  min-width: 25%;
  padding: .2em .4em;
  border: 1px solid #888;
  font-size: 90%;
  background-color: #F8F8F8;
  color: black;
}

foreignObject[data-mjx-xml] {
  font-family: initial;
  line-height: normal;
  overflow: visible;
}

mjx-container[jax="SVG"] path[data-c], mjx-container[jax="SVG"] use[data-c] {
  stroke-width: 3;
}
`})]})}function o(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(i,{...r})}):i(r)}export{o as default,l as frontmatter};
