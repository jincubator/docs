import{f as s,j as e}from"./index-gXrJDCdi.js";const o={title:"Crosschain Bridge Analysis - An Introduction",description:"undefined"};function n(r){const t={a:"a",blockquote:"blockquote",defs:"defs",div:"div",em:"em",g:"g",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li","mjx-container":"mjx-container",ol:"ol",p:"p",path:"path",style:"style",svg:"svg",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",use:"use",...s(),...r.components},i=t["mjx-container"];return e.jsxs(e.Fragment,{children:[e.jsx(t.header,{children:e.jsxs(t.h1,{id:"crosschain-bridge-analysis---an-introduction",children:["Crosschain Bridge Analysis - An Introduction",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#crosschain-bridge-analysis---an-introduction",children:e.jsx(t.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"date: 2023-02-04"}),`
`,e.jsx(t.li,{children:"last updated: 2023-02-04"}),`
`]}),`
`,e.jsx(t.p,{children:"Here we present a survey of existing bridge designs, historical security incidents, and a brief discussion of common components and where ZKP may be used."}),`
`,e.jsxs(t.h2,{id:"bridge-taxonomy",children:["Bridge Taxonomy",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#bridge-taxonomy",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(t.p,{children:["Bridge designs evolved as DeFi and multi-chain paradigm gained popularity. Our summary is inspired by prior taxonomy work by ",e.jsx(t.a,{href:"https://twitter.com/gupadhyaya",children:"Ganesha Upadhyaya"})," in ",e.jsx(t.a,{href:"https://medium.com/harmony-one/harmonys-cross-chain-future-41d02d53b10",children:"A Classification of Various Bridging Technologies"}),", ",e.jsx(t.a,{href:"https://twitter.com/dberenzon",children:"Dmitriy Berenzon"})," in ",e.jsx(t.a,{href:"https://medium.com/1kxnetwork/blockchain-bridges-5db6afac44f8",children:"Blockchain Bridges: Building Networks of Cryptonetworks"}),", and by multiple researchers from Jump Crypto in ",e.jsx(t.a,{href:"https://jumpcrypto.com/security-stack-up-how-bridges-compare/",children:"Security Stack-Up: How Bridges Compare"})]}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsx(t.p,{children:"At a very high level, there are two types of bridging solutions: 1) proof-based and 2) committee-based. The proof-based solutions entail cryptographic proving of the validity of any transaction of one chain in the other, whereas the committee-based solution relies on the social consensus of the bridge validators to attest for the transaction validity, which often involves no cryptographic proving."}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:'Ganesha Upadhyaya in "A Classification of Various Bridging Technologies"'}),`
`]}),`
`]}),`
`,e.jsxs(t.h3,{id:"proof-based",children:["Proof Based",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#proof-based",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(t.h4,{id:"validity-proofs",children:["Validity Proofs",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#validity-proofs",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(t.p,{children:"Validity-proof based bridges prioritize security, trustlessness, permissionlessness, and delay minimization"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"Type"}),e.jsx(t.th,{children:"Design"}),e.jsx(t.th,{children:"Code"}),e.jsx(t.th,{children:"UI"}),e.jsx(t.th,{children:"Note"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"ZKP"}),e.jsx(t.td,{children:e.jsx(t.a,{href:"https://rdi.berkeley.edu/zkp/zkBridge/uploads/paper.pdf",children:"zkBridge"})}),e.jsx(t.td,{children:"TBD"}),e.jsx(t.td,{children:"TBD"}),e.jsxs(t.td,{children:["By Berkeley researcehrs (",e.jsx(t.a,{href:"https://twitter.com/zkcollective",children:"Twitter"}),")"]})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"ZKP"}),e.jsx(t.td,{children:e.jsx(t.a,{href:"https://docs.telepathy.xyz/protocol/overview",children:"Telepathy"})}),e.jsx(t.td,{children:e.jsx(t.a,{href:"https://github.com/succinctlabs?q=telepathy&type=all&language=&sort=",children:"Telepathy"})}),e.jsx(t.td,{children:e.jsx(t.a,{href:"https://demo.telepathy.xyz/",children:"Demo"})}),e.jsxs(t.td,{children:["By ",e.jsx(t.a,{href:"https://succinct.xyz",children:"Succint Labs"})]})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"Native"}),e.jsx(t.td,{children:e.jsx(t.a,{href:"https://arxiv.org/pdf/2101.06000.pdf",children:"Horizon"})}),e.jsx(t.td,{children:e.jsx(t.a,{href:"https://github.com/harmony-one/horizon",children:"Horizon"})}),e.jsx(t.td,{children:"TBD"}),e.jsx(t.td,{children:"Inactive. By Harmony"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"Native"}),e.jsxs(t.td,{children:[e.jsx(t.a,{href:"https://github.com/cosmos/ibc",children:"IBC"})," (",e.jsx(t.a,{href:"https://tutorials.cosmos.network/academy/3-ibc/1-what-is-ibc.html",children:"Intro"}),")"]}),e.jsx(t.td,{children:e.jsx(t.a,{href:"https://github.com/cosmos/ibc-go",children:"ibc-go"})}),e.jsxs(t.td,{children:["Various / ",e.jsx(t.a,{href:"https://hub.mintscan.io/chains/ibc-network",children:"Explorer"})]}),e.jsx(t.td,{children:"Within Cosmos Network"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"Native"}),e.jsx(t.td,{children:e.jsx(t.a,{href:"https://github.com/Gravity-Bridge/Gravity-Bridge/blob/main/docs/design/overview.mdx",children:"Gravity"})}),e.jsx(t.td,{children:e.jsx(t.a,{href:"https://github.com/Gravity-Bridge/Gravity-Bridge",children:"Gravity"})}),e.jsx(t.td,{children:e.jsx(t.a,{href:"https://bridge.blockscape.network/",children:"Gravity"})}),e.jsx(t.td,{children:"Ethereum and Cosmos"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"Native"}),e.jsxs(t.td,{children:[e.jsx(t.a,{href:"https://github.com/ava-labs/xsvm",children:"AWM"})," (",e.jsx(t.a,{href:"https://medium.com/avalancheavax/avalanche-warp-messaging-awm-launches-with-the-first-native-subnet-to-subnet-message-on-avalanche-c0ceec32144a",children:"Intro"}),")"]}),e.jsxs(t.td,{children:[e.jsx(t.a,{href:"https://github.com/ava-labs/avalanchego/tree/master/vms/platformvm/warp",children:"Wrap"})," / ",e.jsx(t.a,{href:"https://github.com/ava-labs/xsvm",children:"XSVM"})]}),e.jsxs(t.td,{children:["TBD / ",e.jsx(t.a,{href:"https://subnets.avax.network/subnets",children:"Explorer"})]}),e.jsx(t.td,{children:"Within Avalanche Subnets"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"Native"}),e.jsx(t.td,{children:e.jsx(t.a,{href:"https://docs.snowbridge.network/architecture/overview",children:"Snowbridge"})}),e.jsx(t.td,{children:e.jsx(t.a,{href:"https://github.com/Snowfork/snowbridge",children:"snowbridge"})}),e.jsx(t.td,{children:"TBD"}),e.jsx(t.td,{})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"LCP"}),e.jsx(t.td,{children:e.jsx(t.a,{href:"https://medium.com/lcp-network/lcp-a-proxy-for-light-client-verification-to-realize-trust-minimized-and-gas-efficient-f7d5868e4b0",children:"Datachain LCP"})}),e.jsxs(t.td,{children:[e.jsx(t.a,{href:"https://github.com/datachainlab/lcp",children:"LCP"})," / ",e.jsx(t.a,{href:"https://github.com/datachainlab/harmony-cosmos-bridge-demo",children:"Demo"})]}),e.jsx(t.td,{children:"TBD"}),e.jsx(t.td,{children:"Relies on TEE enclave"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"LCP"}),e.jsx(t.td,{children:e.jsx(t.a,{href:"https://medium.com/avalancheavax/avalanche-bridge-secure-cross-chain-asset-transfers-using-intel-sgx-b04f5a4c7ad1",children:"Avalanche"})}),e.jsxs(t.td,{children:["TBD / ",e.jsx(t.a,{href:"https://github.com/ava-labs/audits/blob/main/bridge/Avalanche_Bridge_Security_Audit_Report_Halborn_v1_1.pdf",children:"Audit"})]}),e.jsx(t.td,{children:e.jsx(t.a,{href:"https://core.app/bridge/",children:"core.app"})}),e.jsx(t.td,{children:"Relies on TEE enclave (Intel SGX)"})]})]})]}),`
`,e.jsxs(t.h4,{id:"fraud-proofs",children:["Fraud Proofs",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#fraud-proofs",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(t.p,{children:"Fraud-proof based bridges assume all participants are truthful unless someone presents a proof showing otherwise. As a result, they must leave a wide fraud-proof time window and carefully design economic incentives for such. This limitation inevitably incurs much higher delay, but makes implementation substantially easier and costs significantly less to operate and maintain. Fraud-proof based bridges face more security risks due to reliance on fraud-prover and economic incentives, but still far less risky than committee-based bridges."}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"Design"}),e.jsx(t.th,{children:"Code"}),e.jsx(t.th,{children:"UI"}),e.jsx(t.th,{children:"Note"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.a,{href:"https://near.org/blog/eth-near-rainbow-bridge/",children:"Rainbow"})}),e.jsx(t.td,{children:e.jsx(t.a,{href:"https://github.com/aurora-is-near/rainbow-bridge",children:"rainbow-bridge"})}),e.jsx(t.td,{children:e.jsx(t.a,{href:"https://rainbowbridge.app/transfer",children:"rainbowbridge.app"})}),e.jsx(t.td,{children:"By NEAR"})]}),e.jsxs(t.tr,{children:[e.jsxs(t.td,{children:[e.jsx(t.a,{href:"https://docs.nomad.xyz/governance-bridge/architecture",children:"Nomad"})," (",e.jsx(t.a,{href:"https://medium.com/nomad-xyz-blog/the-nomad-design-philosophy-6fc0eacf3263",children:"Intro"}),")"]}),e.jsx(t.td,{children:e.jsx(t.a,{href:"https://github.com/nomad-xyz/monorepo",children:"monorepo"})}),e.jsx(t.td,{children:e.jsx(t.a,{href:"https://app.nomad.xyz/",children:"app.nomad.xyz"})}),e.jsx(t.td,{children:"Hacked $200M (engineering flaw)"})]}),e.jsxs(t.tr,{children:[e.jsxs(t.td,{children:[e.jsx(t.a,{href:"https://docs.darwinia.network/",children:"Darwinia"})," (",e.jsx(t.a,{href:"https://darwinia.network/itering_io_optimistic_bridge_technical_paper_en.pdf",children:"Paper"}),")"]}),e.jsx(t.td,{children:e.jsx(t.a,{href:"https://github.com/darwinia-network/darwinia",children:"darwinia"})}),e.jsxs(t.td,{children:["TBD / ",e.jsx(t.a,{href:"https://darwinia.subscan.io/",children:"Explorer"})]}),e.jsx(t.td,{})]})]})]}),`
`,e.jsxs(t.h3,{id:"committee-based",children:["Committee Based",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#committee-based",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"Sub Category"}),e.jsx(t.th,{children:"Type"}),e.jsx(t.th,{children:"Design/Docs"}),e.jsx(t.th,{children:"Implementation"}),e.jsx(t.th,{children:"Frontend"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"Protocol Validators"}),e.jsx(t.td,{}),e.jsx(t.td,{children:e.jsx(t.a,{href:"https://www.gravitybridge.net/faq",children:"Cosmos Gravity Bridge"})}),e.jsx(t.td,{children:e.jsx(t.a,{href:"https://github.com/cosmos/gravity-bridge",children:"gravity-bridge"})}),e.jsxs(t.td,{children:[e.jsx(t.a,{href:"https://bridge.blockscape.network/",children:"https://bridge.blockscape.network/"})," ",e.jsx(t.a,{href:"https://emeris.com/",children:"https://emeris.com/ (ON HOLD)"})]})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"Proof of Stake Chain"}),e.jsx(t.td,{}),e.jsxs(t.td,{children:[e.jsx(t.a,{href:"https://axelar.network/axelar_whitepaper.pdf",children:"Axelar"})," ",e.jsx(t.a,{href:"https://docs.axelar.dev/",children:"docs"})]}),e.jsx(t.td,{children:e.jsx(t.a,{href:"https://github.com/axelarnetwork/axelar-core",children:"axelar-core"})}),e.jsx(t.td,{children:"TBD"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"Proof of Stake Chain"}),e.jsx(t.td,{}),e.jsxs(t.td,{children:[e.jsx(t.a,{href:"https://cbridge-docs.celer.network/",children:"Celer cBridge"})," ",e.jsx(t.a,{href:"https://celer.network/doc/CelerNetwork-Whitepaper.pdf",children:"Celer Network Whitepaper"})]}),e.jsxs(t.td,{children:[e.jsx(t.a,{href:"https://github.com/celer-network/cBridge-node",children:"cBridge-node"}),", ",e.jsx(t.a,{href:"https://github.com/celer-network/cBridge-contracts",children:"cBridge-contracts"}),", ",e.jsx(t.a,{href:"https://github.com/celer-network/cbridge-cowa",children:"cBridge-cowa"})]}),e.jsx(t.td,{children:e.jsx(t.a,{href:"https://cbridge.celer.network/",children:"https://cbridge.celer.network/"})})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"External Networks"}),e.jsx(t.td,{children:"Multisig"}),e.jsx(t.td,{children:e.jsx(t.a,{href:"https://medium.com/harmony-one/introducing-horizon-an-ethereum-harmony-cross-chain-bridge-2f56ed7214b3",children:"Horizon 1.0"})}),e.jsx(t.td,{children:e.jsx(t.a,{href:"https://github.com/harmony-one/horizon",children:"github"})}),e.jsx(t.td,{children:"OBSOLETE"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"External Networks"}),e.jsx(t.td,{children:"Multisig"}),e.jsx(t.td,{children:e.jsx(t.a,{href:"https://book.wormhole.com/wormhole/2_architectureOverview.html",children:"Wormhole"})}),e.jsx(t.td,{children:e.jsx(t.a,{href:"https://github.com/wormhole-foundation/wormhole",children:"wormhole"})}),e.jsxs(t.td,{children:[e.jsx(t.a,{href:"https://wormhole.com/network/",children:"network"})," ",e.jsx(t.a,{href:"https://wormhole.com/ecosystem/",children:"ecosystem"})]})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"External Networks"}),e.jsx(t.td,{children:"Decentralized Oracle Network (DON)"}),e.jsxs(t.td,{children:[e.jsx(t.a,{href:"https://blog.chain.link/introducing-the-cross-chain-interoperability-protocol-ccip/",children:"Chainlink (CCIP)"}),", ",e.jsx(t.a,{href:"https://chain.link/cross-chain",children:"web"})," ",e.jsx(t.a,{href:"https://research.chain.link/whitepaper-v2.pdf?_ga=2.40239147.884807142.1677705772-204109244.1677705772",children:"Chainlink Whitepaper"})]}),e.jsx(t.td,{children:e.jsx(t.a,{href:"https://github.com/smartcontractkit/ccip-read",children:"ccip-read"})}),e.jsx(t.td,{children:"N/A"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"External Networks"}),e.jsx(t.td,{children:"Decentralized Oracle Network (DON)"}),e.jsxs(t.td,{children:[e.jsx(t.a,{href:"https://layerzero.network/pdf/LayerZero_Whitepaper_Release.pdf",children:"LayerZero"}),", ",e.jsx(t.a,{href:"https://layerzero.gitbook.io/docs/",children:"docs"})]}),e.jsx(t.td,{children:e.jsx(t.a,{href:"https://github.com/LayerZero-Labs/LayerZero",children:"LayerZero"})}),e.jsxs(t.td,{children:[e.jsx(t.a,{href:"https://theaptosbridge.com/bridge",children:"https://theaptosbridge.com/bridge"})," ",e.jsx(t.a,{href:"https://bitcoinbridge.network/bridge",children:"https://bitcoinbridge.network/bridge"})," ",e.jsx(t.a,{href:"https://bridge.harmony.one/one",children:"https://bridge.harmony.one/one"})]})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"External Networks"}),e.jsx(t.td,{children:"Multi-Party Communication (MPC)"}),e.jsx(t.td,{children:e.jsx(t.a,{href:"https://docs.multichain.org/getting-started/introduction",children:"Multichain bridge"})}),e.jsx(t.td,{children:e.jsx(t.a,{href:"https://github.com/anyswap/CrossChain-Bridge",children:"Cross-Chain-Bridge"})}),e.jsx(t.td,{children:e.jsx(t.a,{href:"https://bsc.anyswap.exchange/bridge#/router",children:"https://bsc.anyswap.exchange/"})})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"External Networks"}),e.jsx(t.td,{children:"Multi-Party Communication (MPC)"}),e.jsxs(t.td,{children:[e.jsx(t.a,{href:"https://medium.com/synapse-protocol/introducing-synapse-protocol-2af926143deb",children:"Synapse Protocol"}),", ",e.jsx(t.a,{href:"https://docs.synapseprotocol.com/",children:"docs"})]}),e.jsx(t.td,{children:e.jsx(t.a,{href:"https://github.com/orgs/synapsecns/repositories",children:"synapsecns"})}),e.jsx(t.td,{children:e.jsx(t.a,{href:"https://synapseprotocol.com/",children:"https://synapseprotocol.com/"})})]})]})]}),`
`,e.jsxs(t.h3,{id:"others",children:["Others",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#others",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"Sub Category"}),e.jsx(t.th,{children:"Type"}),e.jsx(t.th,{children:"Design/Docs"}),e.jsx(t.th,{children:"Implementation"}),e.jsx(t.th,{children:"Frontend"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"rollup-to-rollup"}),e.jsx(t.td,{}),e.jsxs(t.td,{children:[e.jsx(t.a,{href:"https://hop.exchange/whitepaper.pdf",children:"Hop Protocol"}),", ",e.jsx(t.a,{href:"https://docs.hop.exchange/basics/a-short-explainer",children:"docs"})]}),e.jsx(t.td,{children:e.jsx(t.a,{href:"https://github.com/hop-protocol/contracts",children:"contracts"})}),e.jsx(t.td,{children:e.jsx(t.a,{href:"https://app.hop.exchange/",children:"https://app.hop.exchange/"})})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"mesh-network"}),e.jsx(t.td,{}),e.jsxs(t.td,{children:[e.jsx(t.a,{href:"https://docs.routerprotocol.com/whitepaper/introducing-router-protocol/architecture",children:"Router Protocol"}),", ",e.jsx(t.a,{href:"https://dev.routerprotocol.com/",children:"docs"})]}),e.jsx(t.td,{children:e.jsx(t.a,{href:"https://github.com/orgs/router-protocol/repositories",children:"Router Protocol"})}),e.jsx(t.td,{children:e.jsx(t.a,{href:"https://app.thevoyager.io/swap",children:"https://app.thevoyager.io/swap"})})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"Bridge Components"}),e.jsx(t.td,{}),e.jsx(t.td,{children:e.jsx(t.a,{href:"https://github.com/paritytech/parity-bridges-common#high-level-architecture",children:"Parity Bridges Common"})}),e.jsx(t.td,{children:e.jsx(t.a,{href:"https://github.com/paritytech/parity-bridges-common",children:"parity-bridges-common"})}),e.jsx(t.td,{children:"TBD"})]})]})]}),`
`,e.jsxs(t.h3,{id:"miscellaneous",children:["Miscellaneous",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#miscellaneous",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["TVL of bridges can be found on ",e.jsx(t.a,{href:"https://defillama.com/protocols/Bridge",children:"DeFi Llama"})]}),`
`,e.jsxs(t.li,{children:["Some tools and queries are already prepared on Dune Analytics for analysis of bridge volume. See for example: ",e.jsx(t.a,{href:"https://dune.com/queries/511393",children:"https://dune.com/queries/511393"}),"."]}),`
`]}),`
`,e.jsxs(t.h2,{id:"bridging-components",children:["Bridging Components",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#bridging-components",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(t.p,{children:"Following are the main components for Cross-Chain Bridges we review"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"Approach : The design approach for the bridge"}),`
`,e.jsxs(t.li,{children:["Proving Mechanisms: How do we ensure transactions are valid",`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"Transaction Proofs: How do we ensure a transacion was included in a valid block"}),`
`,e.jsx(t.li,{children:"Block Proofs: How do we ensure a block was included in the canonical chain"}),`
`]}),`
`]}),`
`,e.jsxs(t.li,{children:["Relayer Mechanisms",`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"Relaying: How do we relay messages (blocks and transactions) between chains"}),`
`]}),`
`]}),`
`,e.jsx(t.li,{children:"Light Clients: What Light client approaches can we leverage"}),`
`,e.jsx(t.li,{children:"Token Lockers: How do we safely store bridged assets in a trustless cost effective way"}),`
`,e.jsx(t.li,{children:"Multi-chain support: What chains are supported and what is the proces to add additional chains."}),`
`,e.jsx(t.li,{children:"Economics: What are the costs for bridging between chains and how do we secure and incentivize validators and relayers."}),`
`]}),`
`,e.jsxs(t.h2,{id:"cross-chain-communication-protocols",children:["Cross Chain Communication Protocols",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#cross-chain-communication-protocols",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://ibcprotocol.org/",children:"INTER‑BLOCKCHAINCOMMUNICATION PROTOCOL"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://github.com/cosmos/ibc",children:"Cosmos IBC: Interchain Standards"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://blog.cosmos.network/ibc-update-the-internet-of-blockchains-is-growing-fast-dae883228ebf",children:"IBC Update— The Internet of Blockchains Is Growing Fast"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://github.com/paritytech/xcm-format/blob/master/README.mdx",children:"Polkadot Cross-Consensus Message (XCM) Format"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://research.web3.foundation/en/latest/polkadot/XCMP/index.html",children:"XCMP Design"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://research.web3.foundation/en/latest/polkadot/XCMP/HRMP%20channels.html",children:"HRMP Channels"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://polkadot.network/blog/the-path-of-a-parachain-block/",children:"The Path of a Parachain Block"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://github.com/paritytech/parity-bridges-common/blob/master/README.mdx",children:"Parity Bridges Common"})}),`
`]}),`
`,e.jsxs(t.h2,{id:"bridge-attack-vectors-and-hacks",children:["Bridge Attack Vectors and Hacks",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#bridge-attack-vectors-and-hacks",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(t.p,{children:"Following is an overview of some common bridge attack vectors."}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://old.reddit.com/r/ethereum/comments/rwojtk/ama_we_are_the_efs_research_team_pt_7_07_january/hrngyk8/",children:"Vitalik; security limits of bridges"})}),`
`]}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsx(t.p,{children:"Now, imagine what happens if you move 100 ETH onto a bridge on Solana to get 100 Solana-WETH, and then Ethereum gets 51% attacked. The attacker deposited a bunch of their own ETH into Solana-WETH and then reverted that transaction on the Ethereum side as soon as the Solana side confirmed it. The Solana-WETH contract is now no longer fully backed, and perhaps your 100 Solana-WETH is now only worth 60 ETH. Even if there's a perfect ZK-SNARK-based bridge that fully validates consensus, it's still vulnerable to theft through 51% attacks like this."}),`
`,e.jsx(t.p,{children:`It's always safer to hold Ethereum-native assets on Ethereum or Solana-native assets on Solana than it is to hold Ethereum-native assets on Solana or Solana-native assets on Ethereum. And in this context, "Ethereum" refers not just to the base chain, but also any proper L2 that is built on it. If Ethereum gets 51% attacked and reverts, Arbitrum and Optimism revert too, and so "cross-rollup" applications that hold state on Arbitrum and Optimism are guaranteed to remain consistent even if Ethereum gets 51% attacked. And if Ethereum does not get 51% attacked, there's no way to 51% attack Arbitrum and Optimism separately. Hence, holding assets issued on Optimism wrapped on Arbitrum is still perfectly safe.`}),`
`,e.jsx(t.p,{children:`Why a rollup can't just "go use another data layer". If a rollup stores its data on Celestia or BCH or whatever else but deals with assets on Ethereum, if that layer gets 51% attacked you're screwed. The DAS on Celestia providing 51% attack resistance doesn't actually help you because the Ethereum network isn't reading that DAS; it would be reading a bridge, which would be vulnerable to 51% attacks. To be a rollup that provides security to applications using Ethereum-native assets, you have to use the Ethereum data layer (and likewise for any other ecosystem).`}),`
`]}),`
`,e.jsx(t.p,{children:"Here are some sample hacks"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://blog.chainalysis.com/reports/cross-chain-bridge-hacks-2022/",children:"Vulnerabilities in Cross-chain Bridge Protocols Emerge as Top Security Risk"})}),`
`]}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsx(t.p,{children:"Following last night’s exploit of the Nomad Bridge, Chainalysis estimates that $2 billion in cryptocurrency has been stolen across 13 separate cross-chain bridge hacks, the majority of which was stolen this year. Attacks on bridges account for 69% of total funds stolen in 2022 so far."}),`
`]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://halborn.com/explained-the-qubit-hack-january-2022/",children:"EXPLAINED: THE QUBIT HACK (JANUARY 2022)"})}),`
`]}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsx(t.p,{children:"The exploited contract used a modified safeTransferFrom() function which instead of making use of functionCall() to verify that the target address contained contract code, used the call() function directly. As the 0 address has no code at all, no code is run, and the call is completed successfully without reverting. As a result, the deposit function executed successfully but no real tokens were deposited."}),`
`,e.jsx(t.p,{children:"The Ethereum QBridge caught the Deposit event and interpreted it as a valid deposit of ETH. As a result, qXETH tokens were minted for the attacker on BSC."}),`
`]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://halborn.com/explained-the-wormhole-hack-february-2022/",children:"EXPLAINED: THE WORMHOLE HACK (FEBRUARY 2022)"})}),`
`]}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsx(t.p,{children:"The actual extraction of 120k ETH from the Wormhole bridge came at the end of a series of events. The actual flow of the attack was:"}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsx(t.li,{children:"The attacker creates a validator action approval (VAA) with a call to post_vaa"}),`
`,e.jsx(t.li,{children:"This VAA was used in a call to complete_wrapped to mint the 120,000 ETH extracted in the attack"}),`
`,e.jsx(t.li,{children:"The attacker “legitimately” extracted the minted tokens from the bridge"}),`
`]}),`
`,e.jsx(t.p,{children:"The vulnerability that made the attack possible was a failure to perform proper signature verification in the VAA creation process. The role of signature verification is delegated several times from post_vaa to verify_signatures to Secp256k1."}),`
`]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://halborn.com/explained-the-ronin-hack-march-2022/",children:"EXPLAINED: THE RONIN HACK (MARCH 2022)"})}),`
`]}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsx(t.p,{children:"The Ronin Network attack was extremely stealthy. In fact, the hack wasn’t noticed until six days after it occurred when the project team was notified by a user that they couldn’t withdraw about 5k ETH from the project’s bridge. Further investigation discovered the largest hack in DeFi history to date."}),`
`,e.jsx(t.p,{children:"The Ronin Network hack was made possible by compromised private keys. The Ronin Network uses a set of nine validator nodes to approve transactions on the bridge, and a deposit or withdrawal requires approval by a majority of five of these nodes. The attacker gained control of four validators controlled by Sky Mavis and a third-party Axie DAO validator that signed their malicious transactions."}),`
`]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://halborn.com/explained-the-harmony-horizon-bridge-hack/",children:"EXPLAINED: THE HARMONY HORIZON BRIDGE HACK"})}),`
`]}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsx(t.p,{children:"Like most cross-chain bridges, the Harmony Horizon Bridge has a validation process for approving transactions being transferred over the bridge. In this case, the approvals process uses a multi-signature scheme with five validators."}),`
`,e.jsx(t.p,{children:"However, the bridge only used a 2 of 5 validation scheme. This means that only two blockchain accounts needed to be compromised for an attacker to approve any malicious transaction that they wished."}),`
`,e.jsx(t.p,{children:"The Harmony Horizon bridge was exploited via the theft of two private keys. These private keys were encrypted with both a passphrase and a key management service, and no system had access to multiple plaintext keys. However, the attacker managed to access and decrypt multiple keys."}),`
`,e.jsx(t.p,{children:"With access to two of the bridge’s private keys, the attacker could create a transaction extracting $100 million from the bridge and confirm it using two accounts under their control."}),`
`]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://halborn.com/the-nomad-bridge-hack-a-deeper-dive/",children:"THE NOMAD BRIDGE HACK: A DEEPER DIVE"})}),`
`]}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsx(t.p,{children:"On August 1, DeFi bridge Nomad was hacked for over $190M."}),`
`,e.jsxs(t.p,{children:["After a frenzied hack from hundreds of wallets, the bridge’s TVL dropped from ",e.jsx(i,{className:"MathJax",jax:"SVG",children:e.jsxs(t.svg,{style:{verticalAlign:"-0.439ex"},xmlns:"http://www.w3.org/2000/svg",width:"14.107ex",height:"1.971ex",role:"img",focusable:"false",viewBox:"0 -677 6235.3 871",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[e.jsxs(t.defs,{children:[e.jsx(t.path,{id:"MJX-1-TEX-N-31",d:"M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"}),e.jsx(t.path,{id:"MJX-1-TEX-N-39",d:"M352 287Q304 211 232 211Q154 211 104 270T44 396Q42 412 42 436V444Q42 537 111 606Q171 666 243 666Q245 666 249 666T257 665H261Q273 665 286 663T323 651T370 619T413 560Q456 472 456 334Q456 194 396 97Q361 41 312 10T208 -22Q147 -22 108 7T68 93T121 149Q143 149 158 135T173 96Q173 78 164 65T148 49T135 44L131 43Q131 41 138 37T164 27T206 22H212Q272 22 313 86Q352 142 352 280V287ZM244 248Q292 248 321 297T351 430Q351 508 343 542Q341 552 337 562T323 588T293 615T246 625Q208 625 181 598Q160 576 154 546T147 441Q147 358 152 329T172 282Q197 248 244 248Z"}),e.jsx(t.path,{id:"MJX-1-TEX-N-30",d:"M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"}),e.jsx(t.path,{id:"MJX-1-TEX-N-2C",d:"M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"}),e.jsx(t.path,{id:"MJX-1-TEX-N-37",d:"M55 458Q56 460 72 567L88 674Q88 676 108 676H128V672Q128 662 143 655T195 646T364 644H485V605L417 512Q408 500 387 472T360 435T339 403T319 367T305 330T292 284T284 230T278 162T275 80Q275 66 275 52T274 28V19Q270 2 255 -10T221 -22Q210 -22 200 -19T179 0T168 40Q168 198 265 368Q285 400 349 489L395 552H302Q128 552 119 546Q113 543 108 522T98 479L95 458V455H55V458Z"}),e.jsx(t.path,{id:"MJX-1-TEX-N-34",d:"M462 0Q444 3 333 3Q217 3 199 0H190V46H221Q241 46 248 46T265 48T279 53T286 61Q287 63 287 115V165H28V211L179 442Q332 674 334 675Q336 677 355 677H373L379 671V211H471V165H379V114Q379 73 379 66T385 54Q393 47 442 46H471V0H462ZM293 211V545L74 212L183 211H293Z"}),e.jsx(t.path,{id:"MJX-1-TEX-I-1D461",d:"M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z"}),e.jsx(t.path,{id:"MJX-1-TEX-I-1D45C",d:"M201 -11Q126 -11 80 38T34 156Q34 221 64 279T146 380Q222 441 301 441Q333 441 341 440Q354 437 367 433T402 417T438 387T464 338T476 268Q476 161 390 75T201 -11ZM121 120Q121 70 147 48T206 26Q250 26 289 58T351 142Q360 163 374 216T388 308Q388 352 370 375Q346 405 306 405Q243 405 195 347Q158 303 140 230T121 120Z"})]}),e.jsx(t.g,{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",transform:"scale(1,-1)",children:e.jsxs(t.g,{"data-mml-node":"math",children:[e.jsxs(t.g,{"data-mml-node":"mn",children:[e.jsx(t.use,{"data-c":"31",xlinkHref:"#MJX-1-TEX-N-31"}),e.jsx(t.use,{"data-c":"39",xlinkHref:"#MJX-1-TEX-N-39",transform:"translate(500,0)"}),e.jsx(t.use,{"data-c":"30",xlinkHref:"#MJX-1-TEX-N-30",transform:"translate(1000,0)"})]}),e.jsx(t.g,{"data-mml-node":"mo",transform:"translate(1500,0)",children:e.jsx(t.use,{"data-c":"2C",xlinkHref:"#MJX-1-TEX-N-2C"})}),e.jsxs(t.g,{"data-mml-node":"mn",transform:"translate(1944.7,0)",children:[e.jsx(t.use,{"data-c":"37",xlinkHref:"#MJX-1-TEX-N-37"}),e.jsx(t.use,{"data-c":"34",xlinkHref:"#MJX-1-TEX-N-34",transform:"translate(500,0)"}),e.jsx(t.use,{"data-c":"30",xlinkHref:"#MJX-1-TEX-N-30",transform:"translate(1000,0)"})]}),e.jsx(t.g,{"data-mml-node":"mo",transform:"translate(3444.7,0)",children:e.jsx(t.use,{"data-c":"2C",xlinkHref:"#MJX-1-TEX-N-2C"})}),e.jsxs(t.g,{"data-mml-node":"mn",transform:"translate(3889.3,0)",children:[e.jsx(t.use,{"data-c":"30",xlinkHref:"#MJX-1-TEX-N-30"}),e.jsx(t.use,{"data-c":"30",xlinkHref:"#MJX-1-TEX-N-30",transform:"translate(500,0)"}),e.jsx(t.use,{"data-c":"30",xlinkHref:"#MJX-1-TEX-N-30",transform:"translate(1000,0)"})]}),e.jsx(t.g,{"data-mml-node":"mi",transform:"translate(5389.3,0)",children:e.jsx(t.use,{"data-c":"1D461",xlinkHref:"#MJX-1-TEX-I-1D461"})}),e.jsx(t.g,{"data-mml-node":"mi",transform:"translate(5750.3,0)",children:e.jsx(t.use,{"data-c":"1D45C",xlinkHref:"#MJX-1-TEX-I-1D45C"})})]})})]})}),`1,794 in mere hours. The hack involved a total of 960 transactions with 1,175 individual withdrawals from the bridge.
According to Nomad’s post-mortem, an implementation bug in a June 21 smart contract upgrade caused the Replica contract to fail to authenticate messages properly. This issue meant that any message could be forged as long as it had not already been processed.`]}),`
`,e.jsx(t.p,{children:"As a result, contracts relying on the Replica for authentication of inbound messages suffered security failures. From there, this authentication failure resulted in fraudulent messages being passed to the Nomad BridgeRouter contract."}),`
`]}),`
`,e.jsxs(t.h2,{id:"references",children:["References",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#references",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(t.p,{children:"Background and Overview"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://medium.com/harmony-one/harmonys-cross-chain-future-41d02d53b10",children:"Harmony’s Cross-Chain Future"})}),`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://github.com/nomad-xyz/awesome-interop",children:"Awesome Interoperability"}),": A curated list of awesome interoperability resources, libraries, tools and more."]}),`
`,e.jsx(t.li,{children:e.jsxs(t.a,{href:"https://twitter.com/vitalikbuterin/status/1479501366192132099?lang=en",children:["Vitalik: why the future will be ",e.jsx(t.em,{children:"multi-chain"}),", but it will not be ",e.jsx(t.em,{children:"cross-chain"})]})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://notes.ethereum.org/@vbuterin/SkeyEI3xv",children:"Vitalik’s Annotated Ethereum 2.0 Spec"})}),`
`]}),`
`,e.jsx(t.p,{children:"Background and Overview (Zero Knowledge Related)"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://medium.com/@ingonyama/bridging-the-multichain-universe-with-zero-knowledge-proofs-6157464fbc86",children:"Bridging the Multichain Universe with Zero Knowledge Proofs"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://github.com/worldcoin/awesome-zkml",children:"awesome-zkml"})}),`
`]}),`
`,e.jsx(t.p,{children:"Mathematical Theory"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://andrea.corbellini.name/2015/05/17/elliptic-curve-cryptography-a-gentle-introduction/",children:"Elliptic Curve Cryptography: a gentle introduction"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://vitalik.ca/general/2017/01/14/exploring_ecp.html",children:"Exploring Elliptic Curve Pairings"})}),`
`]}),`
`,e.jsx(t.p,{children:"Mathematical Theory (Zero Knowledge Related)"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://dankradfeist.de/ethereum/2020/06/16/kate-polynomial-commitments.html",children:"KZG polynomial commitments"})}),`
`]}),`
`,e.jsx(t.p,{children:"Research Papers"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://arxiv.org/pdf/1809.09044.pdf",children:"Fraud and Data Availability Proofs"}),": Maximising Light Client Security and Scaling Blockchains with Dishonest Majorities. ",e.jsx(t.em,{children:"Light clients, also known as Simple Payment Verification (SPV) clients, are nodes which only download a small portion of the data in a blockchain, and use indirect means to verify that a given chain is valid."})]}),`
`]}),`
`,e.jsx(t.p,{children:"Research Articles"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://notes.ethereum.org/@vbuterin/single_slot_finality",children:"Paths toward single-slot finality"}),": A look at how to improve Ethereum’s LMD GHOST + Casper FFG consensus."]}),`
`]}),`
`,e.jsx(t.p,{children:"Research Papers (Zero Knowledge Related)"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://rdi.berkeley.edu/zkp/zkBridge/uploads/paper.pdf",children:"zkBridge: Trustless Cross-chain Bridges Made Practical"})}),`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://hyperoracle.medium.com/zkpos-end-to-end-trustless-65edccd87c5a",children:"zkPoS: End-to-End Trustless"}),": HyperOracle article on how zkPoS provides the ability of proving the consensus with ZK."]}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://eprint.iacr.org/2022/621.pdf",children:"Caulk: Lookup Arguments in Sublinear Time"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://eprint.iacr.org/2022/1355.pdf",children:"HyperPlonk: Plonk with Linear-Time Prover and High-Degree Custom Gates"})}),`
`]}),`
`,e.jsx(t.p,{children:"Research Articles (Zero Knowledge Related)"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://ethresear.ch/t/slonk-a-simple-universal-snark/6420",children:"SLONK—a simple universal SNARK"}),": a simplification to PLONK called SLONK. We replace the permutation argument (the “P” in PLONK) in favour of a shift argument (the “S” in SLONK). We get a universal SNARK with the smallest known proof size and verification time."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://notes.ethereum.org/T0ZVaaywQAqP4jegqO3asg?view",children:"Kate commitments from the Lagrange basis without FFTs"}),": how to commit, evaluate and open polynomials in the Lagrange basis without FFTs. This is the first part in a series (see part 1, part 2, part 3) showing how to do PLONK-style universal SNARKs without FFTs"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://notes.ethereum.org/Il4z42lmQtaUYFigsjsk2Q?view",children:"Hadamard checks from the Lagrange basis without FFTs"}),": how to prove Hadamard relations between polynomials in the Lagrange basis without FFTs. This is the second part (see part 1, part 2, part 3) in a series showing how to do PLONK-style universal SNARKs without FFTs."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://notes.ethereum.org/DLRqK9V7RIOsTZkab8Hm_Q?view",children:"PLONK-style SNARKs without FFTs"}),": how to do PLONK-style universal SNARKs without FFTs. This is part 3 in a series (part 1, part 2, part 3)."]}),`
`]}),`
`,e.jsx(t.p,{children:"Implementation Articles"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://rdi.berkeley.edu/zkp/zkBridge/zkBridge.html",children:"zkBridge: Trustless Cross-chain Bridges Made Practical"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://blog.succinct.xyz/post/2022/09/20/proof-of-consensus",children:"Succinct Towards the endgame of blockchain interoperability with proof of consensus"})}),`
`]}),`
`,e.jsx(t.p,{children:"Implementations"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://github.com/wormhole-foundation/wormhole/blob/dev.v2/ethereum/contracts/Implementation.sol",children:"Wormhole ethereum contracts Implementaion.sol"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://github.com/semaraugusto/bls-verification-contract/blob/master/contracts/verifier.sol",children:"bls verification contract"})}),`
`]}),`
`,e.jsx(t.p,{children:"Documentation"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://ethereum.org/en/developers/docs/",children:"ETHEREUM DEVELOPMENT DOCUMENTATION"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://docs.minaprotocol.com/",children:"MINA docs"})}),`
`]}),`
`,e.jsx(t.p,{children:"Additional References"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://minacrypto.com/2022/04/27/nil-foundation/",children:"nil-Foundation ETH-Mina bridge live on Ethereum testnet Ropsten"})}),`
`]}),`
`,e.jsxs(t.h2,{id:"bridge-implementation-references",children:["Bridge Implementation References",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#bridge-implementation-references",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"/harmony-horizon",children:"Harmony Horizon Bridge"}),": Detailed code review",`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://github.com/johnwhitton/horizon/tree/refactorV2",children:"Horizon"}),": javascript, solidity"]}),`
`]}),`
`]}),`
`,e.jsxs(t.li,{children:["Near Rainbow Bridge: Codebases",`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://github.com/aurora-is-near/rainbow-bridge",children:"Near Rainbow Bridge"}),": rust, go, solidity, javascript"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://github.com/aurora-is-near/rainbow-token-connector",children:"Near Rainbow Token Connector"}),": soldity"]}),`
`,e.jsxs(t.li,{children:["SDK",`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://github.com/aurora-is-near/rainbow-bridge-client/tree/main/packages/client",children:"Near Rainbow Bridge Client"}),": typescript"]}),`
`]}),`
`]}),`
`,e.jsxs(t.li,{children:["Frontend",`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://github.com/aurora-is-near/rainbow-bridge-frontend",children:"NEAR Rainbow Bridge Frontend"})}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://github.com/nomad-xyz/monorepo",children:"Nomad monprepo"}),": Nomad is a cross-chain communication protocol. This repo contains the following: Smart contracts for the core Nomad protocol, Smart contracts for the Nomad token bridge SDKs for Nomad's core protocol, bridge, and governance systems, Tooling for local environment simulation and Smart contract deployment tooling.",`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://github.com/nomad-xyz/rust",children:"Nomad rust"}),": Nomad is a cross-chain communication standard that supports passing messages between blockchains easily and inexpensively. Like IBC light clients and similar systems, Nomad establishes message-passing channels between chains. Once a channel is established, any application on that chain can use it to send messages to others chains."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://github.com/nomad-xyz/gelato-sdk",children:"Nomad gelato-sdk"}),": This crate reimplements Gelato's Relay SDK in Rust. It simply wraps Gelato Relay requests and responses to/from Gelato endpoints with Rust types and methods."]}),`
`]}),`
`]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"/succinct",children:"Succinct labs"}),": Deep dive on Succinct labs Proof of Consensus for Ethreum.",`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://github.com/succinctlabs/eth-proof-of-consensus",children:"Proof of Consensus for Ethereum"}),": contains both the zkSNARK circuits as well as the smart contracts needed for our succinct light client implementation, as well as prototype message passing contracts and bridge contracts."]}),`
`]}),`
`]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://github.com/datachainlab/harmony-cosmos-bridge-demo",children:"Datachain lcp"}),"A proxy for light client verification executed in TEE."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://github.com/cosmos/ibc-go",children:"Cosmos ibc-go"}),": allows blockchains to talk to each other. This end-to-end, connection-oriented, stateful protocol provides reliable, ordered, and authenticated communication between heterogeneous blockchains.",`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://github.com/cosmos/ibc",children:"Cosmos ibc"}),": ibc specification"]}),`
`]}),`
`]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://github.com/cosmos/gravity-bridge",children:"Cosmos gravity bridge"}),": Cosmos and Ethereum bridge designed to run on the Cosmos Hub focused on maximum design simplicity and efficiency."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://github.com/axelarnetwork/axelar-core",children:"Axelar"}),": based on the Cosmos SDK is the main application of the axelar network. ",e.jsx(t.a,{href:"https://axelar.network/axelar_whitepaper.pdf",children:"whitepaper"})," ",e.jsx(t.a,{href:"https://docs.axelar.dev/",children:"docs"})]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://github.com/celer-network/cBridge-node",children:"Celer cBridge-node"}),": Celer cBridge relay node implementation in Golang. (",e.jsx(t.a,{href:"https://cbridge-docs.celer.network/",children:"docs"}),")",`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://github.com/celer-network/cBridge-contracts",children:"Celer cBridge-contracts"}),": Contracts for cBridge, cross-chain liquidity solution powered by Hashed-Timelock Transfers"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://github.com/celer-network/cbridge-cowa",children:"Celer cBridge-cowa"}),": CosmWasm Rust smart contracts for cbridge"]}),`
`]}),`
`]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://github.com/wormhole-foundation/wormhole",children:"Wormhole"}),": the reference implementation of the Wormhole protocol. (",e.jsx(t.a,{href:"https://book.wormhole.com/introduction/introduction.html",children:"docs"}),")"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://github.com/LayerZero-Labs/LayerZero",children:"LayerZero Labs LayerZero"}),": contains the smart contracts for LayerZero Endpoints. (",e.jsx(t.a,{href:"https://layerzero.gitbook.io/docs/",children:"docs"}),")"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://github.com/anyswap/CrossChain-Bridge",children:"Multichain CrossChain-Bridge"}),": Cross-Chain bridge based on Anyswap MPC network. (",e.jsx(t.a,{href:"https://docs.multichain.org/getting-started/introduction",children:"docs"}),")"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://github.com/synapsecns",children:"Synapse Protocol"}),": a universal interoperability protocol that enables secure cross-chain communication.( ",e.jsx(t.a,{href:"https://docs.synapseprotocol.com/",children:"docs"}),")",`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://github.com/synapsecns/synapse-contracts",children:"synapse-contracts"}),": smart contracts for Synapse Protocol."]}),`
`]}),`
`]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://github.com/hop-protocol/contracts",children:"Hop Protocol contracts"}),": Hop is a scalable rollup-to-rollup general token bridge. Heare are the smart contracts that power the Hop Exchange. (",e.jsx(t.a,{href:"https://hop.exchange/whitepaper.pdf",children:"whitepaper"}),", ",e.jsx(t.a,{href:"https://docs.hop.exchange/basics/a-short-explainer",children:"docs"}),")."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://github.com/orgs/router-protocol/repositories",children:"Router Protocol"}),": (",e.jsx(t.a,{href:"https://docs.routerprotocol.com/whitepaper/introducing-router-protocol",children:"whitepaper"}),", ",e.jsx(t.a,{href:"https://dev.routerprotocol.com/",children:"docs"}),")"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://github.com/paritytech/parity-bridges-common",children:"Parity Bridges Common"}),": a collection of components for building bridges."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://github.com/Snowfork/snowbridge",children:"Snowfork snowbridge"}),": A trustless bridge between Polkadot and Ethereum. (",e.jsx(t.a,{href:"https://docs.snowbridge.network/",children:"docs"}),")"]}),`
`]}),e.jsx(t.style,{children:`
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
`})]})}function h(r={}){const{wrapper:t}={...s(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(n,{...r})}):n(r)}export{h as default,o as frontmatter};
