import{f as s,j as e}from"./index-CDZIoDU0.js";const l={title:"Snowbridge",description:"undefined"};function i(r){const n={a:"a",blockquote:"blockquote",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"snowbridge",children:["Snowbridge",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#snowbridge",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"date: 2023-02-24"}),`
`,e.jsx(n.li,{children:"last-updated: 2023-02-24"}),`
`]}),`
`,e.jsxs(n.h2,{id:"overview",children:["Overview",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#overview",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:[`Snowbridge is a general purpose, trustless and decentralized bridge between Polkadot and Ethereum. The goal is to launch as common-good bridge on the proposed BridgeHub parachain.
`,e.jsx(n.strong,{children:"Quick Links"})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Bridge Type : Proof Based Validity Proofs"}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://docs.snowbridge.network/architecture/overview",children:"Design"}),": bridge has a layered architecture, inspired by networking protocols such as TCP/IP. At the lowest level we have channels, which send messages across the bridge. At the highest level, we have apps, which can invoke methods on apps living on foreign chains."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://docs.snowbridge.network/",children:"Docs"}),": Snowbridge documentation"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/Snowfork/snowbridge",children:"Implementation snowfork snowbridge"}),": A trustless bridge between Polkadot and Ethereum."]}),`
`,e.jsx(n.li,{children:"FronteEnd: Still Under Development"}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://polkadot.subscan.io/parachain",children:"Explorer"}),": Can be used to review if a common good parachain is deployed. Bridge messages will be displayed as Cross Chain Messages (XCM) on this ",e.jsx(n.a,{href:"https://polkadot.subscan.io/xcm_dashboard",children:"xcm dashboard"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://gateway.pinata.cloud/ipfs/QmfYGxQvyjVrgm9ajfzCysbuvLXdsRxP5R5HFjWcrj2yYY",children:"Roadmap"}),": The ",e.jsx(n.a,{href:"https://polkadot.polkassembly.io/post/1341",children:"Snowbridge Funding Proposal"})," includes a link to the ",e.jsx(n.a,{href:"https://gateway.pinata.cloud/ipfs/QmfYGxQvyjVrgm9ajfzCysbuvLXdsRxP5R5HFjWcrj2yYY",children:"roadmap"})," which details the milestones and rollout."]}),`
`]}),`
`,e.jsxs(n.h2,{id:"design-notes",children:["Design Notes",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#design-notes",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.strong,{children:e.jsx(n.a,{href:"https://docs.snowbridge.network/architecture/verification/polkadot",children:"light-client verification polkadot"})}),`
`,e.jsx(n.p,{children:`We use Polkadot’s BEEFY gadget to implement an efficient light client that only needs to verify a very small subset of relay chain validator signatures. BEEFY is live on Rococo, and is awaiting deployment on Kusama and Polkadot.
Fundamentally, the BEEFY light client allows the bridge to prove that a specified parachain header was finalized by the relay chain.`}),`
`,e.jsx(n.strong,{children:e.jsx(n.a,{href:"https://github.com/paritytech/parity-bridges-common/blob/master/modules/beefy/src/lib.rs",children:"BEEFY light client"})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"BEEFY bridge pallet."}),`
`,e.jsxs(n.p,{children:["This pallet is an on-chain BEEFY light client for Substrate-based chains that are using the following pallets bundle: ",e.jsx(n.code,{children:"pallet-mmr"}),", ",e.jsx(n.code,{children:"pallet-beefy"})," and ",e.jsx(n.code,{children:"pallet-beefy-mmr"}),"."]}),`
`,e.jsx(n.p,{children:"The pallet is able to verify MMR leaf proofs and BEEFY commitments, so it has access to the following data of the bridged chain:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"header hashes"}),`
`,e.jsx(n.li,{children:"changes of BEEFY authorities"}),`
`,e.jsx(n.li,{children:"extra data of MMR leafs"}),`
`]}),`
`,e.jsx(n.p,{children:"Given the header hash, other pallets are able to verify header-based proofs (e.g. storage proofs, transaction inclusion proofs, etc.)."}),`
`]}),`
`,e.jsx(n.strong,{children:e.jsx(n.a,{href:"https://docs.snowbridge.network/architecture/verification/ethereum",children:"light-client verification ethereum"})}),`
`,e.jsx(n.p,{children:"We have implemented a Proof-of-Stake (PoS) light client for the Beacon chain. This client deprecates the older PoW light client we developed in 2020."}),`
`,e.jsx(n.p,{children:"The beacon client tracks the beacon chain, the new Ethereum chain that will replace Ethereum's Proof-of-Work consensus method around mid-September, called the Merge. The work we have done consists of the following parts:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Beacon Client pallet",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Initial chain snapshot (forms part of the Genesis Config)"}),`
`,e.jsx(n.li,{children:"Sync committee updates"}),`
`,e.jsx(n.li,{children:"Finalized beacon header updates"}),`
`,e.jsx(n.li,{children:"Execution header updates"}),`
`,e.jsx(n.li,{children:"Message verification"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Beacon Relayer",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Sends data from a beacon node to the beacon client"}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.h2,{id:"code-review",children:["Code Review",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#code-review",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h3,{id:"signing-mechanisms",children:["Signing Mechanisms",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#signing-mechanisms",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://www.secg.org/sec2-v2.pdf",children:"secp256k1"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/Snowfork/snowbridge/tree/main/relayer/crypto/secp256k1",children:"snowbridge secp256k1"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://wiki.polkadot.network/docs/learn-cryptography#what-is-sr25519-and-where-did-it-come-from",children:"sr25519"}),": schnorr over ristretto25519",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/Snowfork/snowbridge/tree/main/relayer/crypto/secp256k1",children:"snowbridge sr25519"})}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.h3,{id:"cryptographic-primitives",children:["Cryptographic Primitives",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#cryptographic-primitives",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://keccak.team/keccak.html",children:"keccak256"})," hash function",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/Snowfork/snowbridge/blob/main/relayer/crypto/keccak/keccak.go",children:"snowbridge keccak"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://en.wikipedia.org/wiki/Merkle_tree",children:"merkle trees"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/Snowfork/snowbridge/blob/main/relayer/crypto/merkle/merkle.go",children:"snowbridge merkle.go"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/Snowfork/snowbridge/blob/main/parachain/pallets/ethereum-beacon-client/src/merkleization.rs",children:"snowbridge merkleization.rs"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/ethereum/consensus-specs/blob/dev/ssz/merkle-proofs.mdx",children:"merkle_proof"})," ",e.jsx(n.a,{href:"https://soliditydeveloper.com/merkle-tree",children:"explainer"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/Snowfork/snowbridge/blob/main/relayer/crypto/merkle/simplified_mmr_proof.go",children:"snowbridge simplified_mmr_proof.go"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/Snowfork/snowbridge/tree/main/parachain/pallets/basic-channel/merkle-proof",children:"snowbridge merkle-proof rust"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/Snowfork/snowbridge/blob/main/core/packages/contracts/contracts/utils/MerkleProof.sol",children:"snowbridge MerkleProof.sol"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://docs.grin.mw/wiki/chain-state/merkle-mountain-range/",children:"Merkle Mountain Range"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/Snowfork/snowbridge/blob/main/core/packages/contracts/contracts/utils/MMRProof.sol",children:"snowbridge MMRProof.sol"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/Snowfork/merkle-mountain-range",children:"snowfork merkle-mountain-range"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://ethereum.org/en/developers/docs/data-structures-and-encoding/ssz/",children:"Simple Serialize"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/Snowfork/snowbridge/blob/main/parachain/pallets/ethereum-beacon-client/src/ssz.rs",children:"snowbridge ssz.rs"})}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.h3,{id:"proving-mechanisms",children:["Proving Mechanisms",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#proving-mechanisms",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://wiki.polkadot.network/docs/learn-consensus#bridging-beefy",children:"Beefy"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/Snowfork/snowbridge/blob/main/core/packages/contracts/contracts/BeefyClient.sol",children:"snowbridge BeefyClient.sol"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://github.com/Snowfork/snowbridge/tree/main/parachain/pallets/ethereum-beacon-client",children:"snowbridge ethereum-beacon-client rust"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://github.com/Snowfork/snowbridge/tree/main/parachain/pallets/ethereum-light-client",children:"snowbridge ethereum-light-client rust"})}),`
`]}),`
`]}),`
`,e.jsxs(n.h3,{id:"relayer-mechanisms",children:["Relayer Mechanisms",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#relayer-mechanisms",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.a,{href:"https://github.com/Snowfork/snowbridge/tree/main/relayer/relays",children:"relays folder"})," has multiple relayers controlled by ",e.jsx(n.a,{href:"https://github.com/Snowfork/snowbridge/blob/main/relayer/relays/execution/main.go",children:"execution"}),". All written in go."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Relaying from Ethereum to Polkadot",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/Snowfork/snowbridge/tree/main/relayer/relays/beacon",children:"beacon"}),": Responsible for retrieving state from the beacon chain including",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/Snowfork/snowbridge/blob/main/relayer/relays/beacon/header/syncer/syncer.go",children:"synching"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/Snowfork/snowbridge/blob/main/relayer/relays/beacon/header/syncer/syncer.go#L47",children:"Header"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/Snowfork/snowbridge/blob/main/relayer/relays/beacon/header/syncer/syncer.go#L55",children:"CurrentSyncCommittee"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/Snowfork/snowbridge/blob/main/relayer/relays/beacon/header/syncer/syncer.go#LL60C12-L60C12",children:"SyncAggregate"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["functions include",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/Snowfork/snowbridge/blob/main/relayer/relays/beacon/header/syncer/syncer.go#L65",children:"GetSyncPeriodsToFetch"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/Snowfork/snowbridge/blob/main/relayer/relays/beacon/header/syncer/syncer.go#L83",children:"GetInitialSync"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/Snowfork/snowbridge/blob/main/relayer/relays/beacon/header/syncer/syncer.go#L118",children:"GetSyncCommitteePeriodUpdate"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/Snowfork/snowbridge/blob/main/relayer/relays/beacon/header/syncer/syncer.go#L187",children:"GetBlockRoots"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/Snowfork/snowbridge/blob/main/relayer/relays/beacon/header/syncer/syncer.go#L252",children:"GetFinalizedUpdate"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/Snowfork/snowbridge/blob/main/relayer/relays/beacon/header/syncer/syncer.go#L305",children:"HasFinalizedHeaderChanged"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/Snowfork/snowbridge/blob/main/relayer/relays/beacon/header/syncer/syncer.go#L326",children:"GetLatestFinalizedHeader"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/Snowfork/snowbridge/blob/main/relayer/relays/beacon/header/syncer/syncer.go#L379",children:"getNextBlockRootBySlot"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/Snowfork/snowbridge/blob/main/relayer/relays/beacon/header/syncer/syncer.go#L425",children:"GetNextHeaderUpdateBySlotWithAncestryProof"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/Snowfork/snowbridge/blob/main/relayer/relays/beacon/header/syncer/syncer.go#L434",children:"GetNextHeaderUpdateBySlot"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/Snowfork/snowbridge/blob/main/relayer/relays/beacon/header/syncer/syncer.go#L457",children:"GetHeaderUpdateWithAncestryProof"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/Snowfork/snowbridge/blob/main/relayer/relays/beacon/header/syncer/syncer.go#L495",children:"getBlockHeaderAncestryProof"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/Snowfork/snowbridge/blob/main/relayer/relays/beacon/header/syncer/syncer.go#L520",children:"GetSyncAggregate"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/Snowfork/snowbridge/blob/main/relayer/relays/beacon/header/syncer/syncer.go#L534",children:"GetSyncAggregateForSlot"})}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/Snowfork/snowbridge/tree/main/relayer/relays/ethereum",children:"ethereum"}),": Responsible for retreiving block headers from the execution chain."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Relaying from Polkadot to Etherem",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/Snowfork/snowbridge/tree/main/relayer/relays/parachain",children:"parachain"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/Snowfork/snowbridge/tree/main/relayer/relays/beefy",children:"beefy"})}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.h3,{id:"light-client-functionality",children:["Light Client Functionality",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#light-client-functionality",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://wiki.polkadot.network/docs/learn-consensus#bridging-beefy",children:"Beefy"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/Snowfork/snowbridge/blob/main/core/packages/contracts/contracts/BeefyClient.sol",children:"snowbridge BeefyClient.sol"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://github.com/Snowfork/snowbridge/tree/main/parachain/pallets/ethereum-beacon-client",children:"snowbridge ethereum-beacon-client rust"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://github.com/Snowfork/snowbridge/tree/main/parachain/pallets/ethereum-light-client",children:"snowbridge ethereum-light-client rust"})}),`
`]}),`
`]}),`
`,e.jsxs(n.h3,{id:"token-lockers",children:["Token Lockers",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#token-lockers",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/Snowfork/snowbridge/blob/main/core/packages/contracts/contracts/ERC20Vault.sol",children:"snowbridge ERC20Vault.sol"})}),`
`]}),`
`,e.jsxs(n.h2,{id:"references",children:["References",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#references",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h2,{id:"appendices",children:["Appendices",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#appendices",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})]})}function t(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(i,{...r})}):i(r)}export{t as default,l as frontmatter};
