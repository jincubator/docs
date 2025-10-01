import{f as r,j as e}from"./index-BZW_0xgh.js";const h={title:"Code bases and reviews",description:"undefined"};function i(s){const n={a:"a",div:"div",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"code-bases-and-reviews",children:["Code bases and reviews",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#code-bases-and-reviews",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"date: 2023-02-04"}),`
`,e.jsx(n.li,{children:"last updated: 2023-02-04"}),`
`]}),`
`,e.jsxs(n.h2,{id:"overview",children:["Overview",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#overview",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.strong,{children:"Disclaimer: The content in this section are notes I took doing research and design work, primarily around bridging and consensus. Some are incomplete and they lack structure. I have included them here for completeness."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#code-bases-and-reviews",children:"Code bases and reviews"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#functionality",children:"Functionality"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#reference-codebases",children:"Reference Codebases"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#blockchains",children:"Blockchains"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#bridging-and-light-clients",children:"Bridging and Light Clients"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#zero-knowledge",children:"Zero Knowledge"})}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.h2,{id:"functionality",children:["Functionality",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#functionality",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"In this section we list codebases that implement cryptographic functions. We organize by functional areas such as signing, hashing, primitives and consensus. Where possible we provide a link to the algorithms/specifications being implemented followed by reference codebases."}),`
`,e.jsx(n.p,{children:"We have summarized the functionality in three areas"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/Users/johnwhitton/dev/jincubator/docs/docs/pages/research/primitives/signatures",children:"Signing"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/Users/johnwhitton/dev/jincubator/docs/docs/pages/research/primitives/primitives",children:"Cryptographic Primitives"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/Users/johnwhitton/dev/jincubator/docs/docs/pages/research/chains/intro",children:"Consensus"})}),`
`]}),`
`,e.jsxs(n.h2,{id:"reference-codebases",children:["Reference Codebases",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#reference-codebases",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h3,{id:"blockchains",children:["Blockchains",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#blockchains",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/bnb-chain/bsc",children:"Binance"})," (go)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/ava-labs/avalanchego",children:"Avalanche"})," (go)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://clientdiversity.org/#distribution",children:"Ethereum"})," ",e.jsx(n.a,{href:"https://notes.ethereum.org/@domothy/roadmap",children:"roadmap"})," ",e.jsx(n.a,{href:"https://eth2book.info/bellatrix/contents/",children:"upgrading ethereum"})," ",e.jsx(n.a,{href:"https://github.com/ethereum/consensus-specs",children:"consensus-specs"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Consensus Clients (Beacon Chain)",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/prysmaticlabs/prysm",children:"prysm"})," (go)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/sigp/lighthouse/",children:"lighthouse"})," (rust)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/ConsenSys/teku",children:"teku"})," (java)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/status-im/nimbus-eth2",children:"nimbus"})," (",e.jsx(n.a,{href:"https://nim-lang.org/",children:"nim"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/ChainSafe/lodestar",children:"lodestar"})," (typescript)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/sifraitech/grandine",children:"grandine"})," (rust) not open source"]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Execution Clients (Execution Chain)",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/ethereum/go-ethereum",children:"geth"})," (go)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/NethermindEth/nethermind",children:"nethermind"})," (c#)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/ledgerwatch/erigon",children:"Erigon"})," (go)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/hyperledger/besu",children:"Besu"})," (java)"]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Light Client",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/a16z/helios",children:"helios"})," (rust): ",e.jsx(n.a,{href:"https://a16zcrypto.com/building-helios-ethereum-light-client/",children:"article"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/tree/master/contracts/near/eth2-client",children:"near rainbow bridge eth2-client"})," (rust)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/succinctlabs/eth-proof-of-consensus/tree/main/contracts/src/lightclient",children:"succinctlabs"})," (solidity)"]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/harmony-one/harmony",children:"Harmony"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/peekpi/harmony/tree/mmrHardfork",children:"Harmony MMRHardFork"})}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/near/nearcore",children:"Near"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/orgs/paritytech/repositories",children:"Polkadot"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/paritytech/substrate",children:"substrate"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/paritytech/cumulus",children:"cumulus"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/smol-dot/smoldot",children:"smoldot"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/open-web3-stack/open-runtime-module-library",children:"open-runtime-module-library"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/maticnetwork",children:"Polygon"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/maticnetwork/tendermint/tree/peppermint",children:"peppermint"})," (go) fork of tendermint"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/maticnetwork/heimdall",children:"heimdall"})," (go)"]}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/tendermint/tendermint",children:"Tendermint"})}),`
`]}),`
`,e.jsxs(n.h3,{id:"bridging-and-light-clients",children:["Bridging and Light Clients",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#bridging-and-light-clients",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Light Clients"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/peekpi/harmony/tree/mmrHardfork",children:"Harmony MMRHardFork"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Bridging"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"/Horizon",children:"Harmony Horizon Bridge"}),": Detailed code review",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/johnwhitton/horizon/tree/refactorV2",children:"Horizon"}),": javascript, solidity"]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"/ethereum-near",children:"Near Rainbow Bridge"}),": Detailed code review",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge",children:"Near Rainbow Bridge"}),": rust, go, solidity, javascript"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-token-connector",children:"Near Rainbow Token Connector"}),": soldity"]}),`
`,e.jsxs(n.li,{children:["SDK",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge-client/tree/main/packages/client",children:"Near Rainbow Bridge Client"}),": typescript"]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Frontend",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge-frontend",children:"NEAR Rainbow Bridge Frontend"})}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/nomad-xyz/monorepo",children:"Nomad monprepo"}),": Nomad is a cross-chain communication protocol. This repo contains the following: Smart contracts for the core Nomad protocol, Smart contracts for the Nomad token bridge SDKs for Nomad's core protocol, bridge, and governance systems, Tooling for local environment simulation and Smart contract deployment tooling.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/nomad-xyz/rust",children:"Nomad rust"}),": Nomad is a cross-chain communication standard that supports passing messages between blockchains easily and inexpensively. Like IBC light clients and similar systems, Nomad establishes message-passing channels between chains. Once a channel is established, any application on that chain can use it to send messages to others chains."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/nomad-xyz/gelato-sdk",children:"Nomad gelato-sdk"}),": This crate reimplements Gelato's Relay SDK in Rust. It simply wraps Gelato Relay requests and responses to/from Gelato endpoints with Rust types and methods."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"/Users/johnwhitton/dev/jincubator/docs/docs/pages/research/bridge/succinct",children:"Succinct labs"}),": Deep dive on Succinct labs Proof of Consensus for Ethreum.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/succinctlabs/eth-proof-of-consensus",children:"Proof of Consensus for Ethereum"}),": contains both the zkSNARK circuits as well as the smart contracts needed for our succinct light client implementation, as well as prototype message passing contracts and bridge contracts."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/datachainlab:",children:"Datachain lcp"}),"A proxy for light client verification executed in TEE."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/cosmos/ibc-go",children:"Cosmos ibc-go"}),": allows blockchains to talk to each other. This end-to-end, connection-oriented, stateful protocol provides reliable, ordered, and authenticated communication between heterogeneous blockchains.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/cosmos/ibc",children:"Cosmos ibc"}),": ibc specification"]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/cosmos/gravity-bridge",children:"Cosmos gravity bridge"}),": Cosmos and Ethereum bridge designed to run on the Cosmos Hub focused on maximum design simplicity and efficiency."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/axelarnetwork/axelar-core",children:"Axelar"}),": based on the Cosmos SDK is the main application of the axelar network. ",e.jsx(n.a,{href:"https://axelar.network/axelar_whitepaper.pdf",children:"whitepaper"})," ",e.jsx(n.a,{href:"https://docs.axelar.dev/",children:"docs"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/celer-network/cBridge-node",children:"Celer cBridge-node"}),": Celer cBridge relay node implementation in Golang. (",e.jsx(n.a,{href:"https://cbridge-docs.celer.network/",children:"docs"}),")",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/celer-network/cBridge-contracts",children:"Celer cBridge-contracts"}),": Contracts for cBridge, cross-chain liquidity solution powered by Hashed-Timelock Transfers"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/celer-network/cbridge-cowa",children:"Celer cBridge-cowa"}),": CosmWasm Rust smart contracts for cbridge"]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/wormhole-foundation/wormhole",children:"Wormhole"}),": the reference implementation of the Wormhole protocol. (",e.jsx(n.a,{href:"https://book.wormhole.com/introduction/introduction.html",children:"docs"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/LayerZero-Labs/LayerZero",children:"LayerZero Labs LayerZero"}),": contains the smart contracts for LayerZero Endpoints. (",e.jsx(n.a,{href:"https://layerzero.gitbook.io/docs/",children:"docs"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/anyswap/CrossChain-Bridge",children:"Multichain CrossChain-Bridge"}),": Cross-Chain bridge based on Anyswap MPC network. (",e.jsx(n.a,{href:"https://docs.multichain.org/getting-started/introduction",children:"docs"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/synapsecns",children:"Synapse Protocol"}),": a universal interoperability protocol that enables secure cross-chain communication.( ",e.jsx(n.a,{href:"https://docs.synapseprotocol.com/",children:"docs"}),")",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/synapsecns/synapse-contracts",children:"synapse-contracts"}),": smart contracts for Synapse Protocol."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/hop-protocol/contracts",children:"Hop Protocol contracts"}),": Hop is a scalable rollup-to-rollup general token bridge. Heare are the smart contracts that power the Hop Exchange. (",e.jsx(n.a,{href:"https://hop.exchange/whitepaper.pdf",children:"whitepaper"}),", ",e.jsx(n.a,{href:"https://docs.hop.exchange/basics/a-short-explainer",children:"docs"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/orgs/router-protocol/repositories",children:"Router Protocol"}),": (",e.jsx(n.a,{href:"https://docs.routerprotocol.com/whitepaper/introducing-router-protocol",children:"whitepaper"}),", ",e.jsx(n.a,{href:"https://dev.routerprotocol.com/",children:"docs"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/paritytech/parity-bridges-common",children:"Parity Bridges Common"}),": a collection of components for building bridges."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/Snowfork/snowbridge",children:"Snowfork snowbridge"}),": A trustless bridge between Polkadot and Ethereum. (",e.jsx(n.a,{href:"https://docs.snowbridge.network/",children:"docs"}),")"]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.h3,{id:"zero-knowledge",children:["Zero Knowledge",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#zero-knowledge",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Foundational",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/zcash/halo2",children:"halo2"})," (rust)",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/privacy-scaling-explorations/halo2/commits/main",children:"halo2 privacy-scaling-explorations"})," (rust) fork"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/junyu0312/halo2",children:"junyu0312"})," (rust) fork"]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/iden3/circom",children:"Circom"})," a novel domain-specific language for defining arithmetic circuits that can be used to generate zero-knowledge proofs"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/arkworks-rs",children:"Arkworks"})," (rust)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/noir-lang/noir",children:"noir"})," (rust)"]}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/starkware-industries/poseidon",children:"StarkWare's Poseidon Hash"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Applications",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/DelphinusLab/halo2ecc-s",children:"halo2ecc-s"})," (rust): ecc circuits with halo2"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/darkforest-eth",children:"DarkForest"})," zkSNARK space warfare"]}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/snowtigersoft/awesome-darkforest",children:"Awesome List"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Proof of Consensus/Bridging",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/succinctlabs/eth-proof-of-consensus",children:"succinctlabs"})," (circom)"]}),`
`]}),`
`]}),`
`]})]})}function o(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{o as default,h as frontmatter};
