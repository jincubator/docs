import{f as n,j as e}from"./index-bBjUqOe_.js";const a={title:"Polkadot",description:"undefined"};function i(s){const t={a:"a",blockquote:"blockquote",code:"code",div:"div",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...n(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.header,{children:e.jsxs(t.h1,{id:"polkadot",children:["Polkadot",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#polkadot",children:e.jsx(t.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"date: 2023-02-04"}),`
`,e.jsx(t.li,{children:"last updated: 2023-02-04"}),`
`]}),`
`,e.jsxs(t.h2,{id:"overview",children:["Overview",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#overview",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(t.p,{children:e.jsxs(t.em,{children:["Note: The majority of this research was done in early 2019 and has been updated recently with some notes on consenus and signing. In 2021 John built and deployed a Parachain called ",e.jsx(t.a,{href:"https://eave.network/",children:"Eave Network"})," codebase is ",e.jsx(t.a,{href:"https://github.com/EaveNetwork",children:"here"}),". The parachain was deployed to the Rococo Testnet. John self funded this initiative, but failed to raise seed funding, due to this and other priorities this project was never fully developed and deployed on Kusama or Polkadot. Polkadot is one of John's favourite development frameworks and he is extremely grateful for Gavin Wood and Tomasz Drwięga who he was fortunate enough to collaborate with briefly on the Parity Ethereum Client in early 2016 as he began his blockchain journey."]})}),`
`,e.jsx(t.p,{children:'Polkadot substrate is a chain layer which allows pluggable consensus, definition of storage through the seperation of "extrinsics" and abstracts the runtime design allowing for blockchain providers to decide which runtime best suits there application needs. It also has been built with light client protocol in mind with a number of storage and pruning options giving the ability to clearly seperated different actors requirements for infrastructure (e.g. participants can run a light client on a mobile device and validators can run full nodes with gauranteed performance and uptime). On top of this Polkadot sits as a relay chain (built on Substrate) which allows private chains to share infrastucture such as validators.'}),`
`,e.jsxs(t.h2,{id:"consensus-mechanism",children:["Consensus Mechanism",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#consensus-mechanism",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(t.p,{children:["Following is an excerpt from ",e.jsx(t.a,{href:"https://github.com/w3f/polkadot-wiki/blob/master/docs/learn/learn-consensus.mdx",children:"Polkadot learn consensus"})]}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsx(t.strong,{children:"Nominated Proof of Stake"}),`
`]}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsx(t.p,{children:"In traditional PoS systems, block production participation is dependent on token holdings as opposed to computational power. While PoS developers usually have a proponent for equitable participation in a decentralized manner, most projects end up proposing some level of centralized operation, where the number of validators with full participation rights is limited. These validators are often seen to be the most wealthy, and, as a result, influence the PoS network as they are the most staked. Usually, the number of candidates to maintain the network with the necessary knowledge (and equipment) is limited; this can directly increase operational costs as well. Systems with a large number of validators tend to form pools to decrease the variance of their revenue and profit from economies of scale. These pools are often off-chain."}),`
`]}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsx(t.p,{children:"A way to alleviate this is to implement pool formation on-chain and allow token holders to vote with their stake for validators to represent them."}),`
`]}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:["Polkadot uses NPoS (Nominated Proof-of-Stake) as its mechanism for selecting the validator set. It is designed with the roles of ",e.jsx(t.strong,{children:"validators"})," and ",e.jsx(t.strong,{children:"nominators"}),", to maximize chain security. Actors who are interested in maintaining the network can run a validator node."]}),`
`]}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:["Validators assume the role of producing new blocks in ",e.jsx(t.a,{href:"#block-production-babe",children:"BABE"}),", validating parachain blocks, and guaranteeing finality. Nominators can choose to back select validators with their stake. Nominators can approve candidates that they trust and back them with their tokens."]}),`
`]}),`
`,e.jsxs(t.h2,{id:"references",children:["References",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#references",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(t.strong,{children:"Consensus"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[`
`,e.jsxs(t.p,{children:[e.jsx(t.a,{href:"https://wiki.polkadot.network/docs/learn-consensus",children:"NPoS"}),": Polkadot Nominated Proof of Stake Documentation"]}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsxs(t.p,{children:[e.jsx(t.a,{href:"https://wiki.polkadot.network/docs/learn-consensus",children:"Polkadot Consensus"}),": Polkadot's documentation on consenus."]}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"http://slides.com/paritytech/paritysubstrate#/17",children:"Hybrid Consensus Slide"})}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://github.com/paritytech/substrate/pull/883",children:"Generalized Consensus Pull Request"})}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://github.com/paritytech/substrate/tree/master/core/consensus",children:"Consensus Code"})}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://github.com/paritytech/rhododendron",children:"Rhododendron - Asynchronously safe BFT consensus, implementation in Rust"})}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://en.wikipedia.org/wiki/Cryptographically_secure_pseudorandom_number_generator",children:"Random Number Generation CSPRNG"})}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://github.com/rust-random/rand",children:"Rust-Random"})}),`
`]}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(t.p,{children:"Block Finality"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://medium.com/polkadot-network/grandpa-block-finality-in-polkadot-an-introduction-part-1-d08a24a021b5",children:"GRANDPA (GHOST-based Recursive Ancestor Deriving Prefix Agreement)"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://github.com/paritytech/finality-grandpa",children:"Finality GANDPA Code"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://github.com/paritytech/substrate/blob/master/core/finality-grandpa/src/lib.rs",children:"Substrate using GRANDPA"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://github.com/paritytech/substrate/issues/1026",children:"Full nodes should store a GRANDPA commit message"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://github.com/paritytech/substrate/pull/1014",children:"Dynamic Authority sets in GRANDPA"})}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(t.strong,{children:"Signing"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://wiki.polkadot.network/docs/learn-cryptography#what-is-sr25519-and-where-did-it-come-from",children:"Sr25519 Documentation"}),": Polkadots sr25519 Documentation. ",e.jsx(t.em,{children:"The implementation of Schnorr signatures that is used in Polkadot and implements the Schnorrkel protocols over the Ristretto compression of the Curve25519 is known as sr25519."})]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://github.com/paritytech/substrate/blob/master/primitives/application-crypto/src/sr25519.rs",children:"Substrate sr25519 codebase"}),": Polkadot's sr25519 code (rust)."]}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://ed25519.cr.yp.to/",children:"ED25519"})}),`
`]}),`
`,e.jsx(t.strong,{children:"Staking"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://wiki.polkadot.network/docs/learn-staking",children:"Polkadot Staking Documentation"}),": Documentation on Polkadot including staking validators and Nominiated Pools"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://staking.polkadot.network/?utm_source=polkadot.network#/validators",children:"Staking Polkadot Application"}),": Polkadot Staking Application validator view."]}),`
`]}),`
`,e.jsx(t.strong,{children:"Parachains"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://polkadot.subscan.io/parachain",children:"Subscan Explorer"}),": Block Explorer built for Polkadot and supporting all Parachains"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://wiki.polkadot.network/docs/learn-parachains",children:"parachains"}),": Polkadot documentation on Parachains"]}),`
`]}),`
`,e.jsx(t.strong,{children:"Additional"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["Blockchain Explorers",`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"http://polkadash.io/",children:"polkadash.io"})}),`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://polkascan.io/",children:"polkascan.io"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://polkascan.io/n-pre/bbqbirch/",children:"BBQ Birch - Testnet"})}),`
`]}),`
`]}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://poc-2.polkadot.io/#/explorer",children:"poc-2.plokadot.io"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://polkadot.js.org/apps/next/#/explorer",children:"Substrate Explorer"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://telemetry.polkadot.io/#/Krumme%20Lanke",children:"Telemetry.polkadot.io"})}),`
`]}),`
`]}),`
`,e.jsxs(t.li,{children:["Substrate Overview",`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://www.parity.io/what-is-substrate/",children:"What is Substrate"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["Substrate ",e.jsx(t.a,{href:"https://www.youtube.com/watch?v=iUMZyL5kTwc",children:"Video"})," - ",e.jsx(t.a,{href:"http://slides.com/paritytech/paritysubstrate#/",children:"Slides"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"http://slides.com/paritytech/paritysubstrate#/29",children:"Potential Runtime Designs"})}),`
`]}),`
`]}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://wiki.parity.io/Parity-Substrate",children:"Parity Substrate Wiki"})}),`
`]}),`
`]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://polkadot.network/#whatisit",children:"What is PolKadot"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["Polkadot Governance ",e.jsx(t.a,{href:"https://www.youtube.com/watch?v=VsZuDJMmVPY&t=24735s&list=PL6-IF807eaBG5sH-SQXlosqKRM2BZkrqw&index=4",children:"Video"})," - ",e.jsx(t.a,{href:"https://slides.com/paritytech/polkadot-governance#/",children:"Slides"})]}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://polkadot.network/PolkaDotPaper.pdf",children:"Polkadot Whitepaper"})}),`
`,e.jsxs(t.li,{children:["Polkadot ",e.jsx(t.a,{href:"https://youtu.be/lIghiCmHz0U?list=PLaZFi8ZkzUvKGyWTQ999rbHUXfDQv2LRF",children:"Video"})," ",e.jsx(t.a,{href:"https://www.slideshare.net/gavofyork/polkadot-presentation",children:"Slides"})]}),`
`,e.jsxs(t.li,{children:["Substrate : A Rustic Vision of Polkadot by Gavin Wood ",e.jsx(t.a,{href:"https://www.youtube.com/watch?v=0IoUZdDi5Is&feature=youtu.be",children:"Video"})," - ",e.jsx(t.a,{href:"https://slides.com/paritytech/substrate_web3summit#/1",children:"Slides"})]}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://www.zeroknowledge.fm/46",children:"Gavin Wood Podcast on Polkadot, Sharding and Substrate"})}),`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://docs.google.com/document/d/1iaIWmfV-uA7Uv1O4yt9G2t_86q18h_r7i5T1t-_EZ-s/edit",children:"Polkadot runtime Environment : Alternative Implementation Grant"})," - ",e.jsx(t.a,{href:"https://github.com/w3f/Web3-collaboration/issues/12",children:"Github"})]}),`
`]}),`
`]}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://polkadot.network/memorandum",children:"Token Economics - DOTS"})}),`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://wiki.parity.io/Secret-Store.html",children:"Secret Store"})," shard key generation"]}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://wiki.parity.io/IPFS",children:"Parity Ethereum IPFS"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://medium.com/@davekaj/blockchain-interoperability-cosmos-vs-polkadot-48097d54d2e2",children:"Cosmos vs Polkadot"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://medium.com/coinmonks/polkadot-hello-world-3-poc-3-on-substrate-is-here-c45d100f72e3",children:"Polkadot POC Tutorials"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://www.reddit.com/r/dot/",children:"Polkadot on Reddit"})}),`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://substrate.readme.io/",children:"substrate.readme.io"})," - Substrate Developers Hub"]}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://www.youtube.com/watch?time_continue=278&v=26ucTSSaqog",children:"Substrate Workshop - Video"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"http://slides.com/paritytech/substrate_web3summit#/",children:"Substrate Web 3 Summit - Slides"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://hackmd.io/p_v1M8WGRyy9PggYiKA_Xw#",children:"Building on Substrate"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://medium.com/@gavofyork/polkadot-2018-recap-677dab3e995b",children:"Polkadot 2018 Recap"})}),`
`]}),`
`]}),`
`,e.jsxs(t.li,{children:["Relevant Code Links",`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["Key Repositories",`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://github.com/paritytech",children:"ParityTech"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://github.com/paritytech/substrate",children:"Substrate"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://github.com/paritytech/substrate/pull/883",children:"Generalize the Consensus Infrastructure"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://github.com/paritytech/substrate/issues/784",children:"Pluggable Consensus Import Queue"})}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://github.com/paritytech/polkadot",children:"Polkadot"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://github.com/paritytech/wasmi",children:"WASMI"})}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://webassembly.org/",children:"Web Assembly (WASM)"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://github.com/golang/go/issues/18892",children:"GO - support for WASM"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://github.com/go-interpreter/wagon",children:"GO WAGON"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://github.com/perlin-network/life",children:"GO Perlin"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://github.com/paritytech/wasmi",children:"Rust Parity Tech WASMI"})}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(t.li,{children:["Functional Breakdown",`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["Persistence",`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["Storage",`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://rocksdb.org/",children:"RocksDB"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://github.com/paritytech/substrate/tree/master/core/client/db",children:"DB Code"})}),`
`,e.jsxs(t.li,{children:["Data Overview - Light Client",`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["Block Structure ",e.jsx(t.a,{href:"http://slides.com/paritytech/paritysubstrate#/17",children:"Slide 17"})," to ",e.jsx(t.a,{href:"http://slides.com/paritytech/paritysubstrate#/28",children:"28"})]}),`
`]}),`
`]}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://wiki.parity.io/decl_storage",children:"decl_storage - macro"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"http://slides.com/paritytech/paritysubstrate#/14",children:"Get and Set Storage"})}),`
`]}),`
`]}),`
`,e.jsxs(t.li,{children:["Light Client",`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://github.com/paritytech/substrate/blob/master/core/client/db/src/light.rs",children:"DB Code"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://github.com/paritytech/substrate/tree/master/core/client/src/light",children:"Light Client Code"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://github.com/paritytech/substrate/issues/131",children:"Protocol Light Client Storage"})}),`
`]}),`
`]}),`
`,e.jsxs(t.li,{children:["Node",`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://github.com/paritytech/substrate/tree/master/core/client/src",children:"Client Code"})}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(t.li,{children:["Gossip",`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://github.com/ethereum/wiki/wiki/libp2p-Whitepaper",children:"libp2p"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://github.com/paritytech/substrate/tree/master/core/network-libp2p",children:"Substrate Code - network libp2p"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"http://slides.com/paritytech/paritysubstrate#/14",children:"Get and Set Storage"})}),`
`,e.jsxs(t.li,{children:["Message Format",`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://github.com/paritytech/substrate/tree/master/core/primitives",children:"Substrate Primitives"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://github.com/paritytech/polkadot/blob/master/primitives/src/parachain.rs",children:"Polkadot Parachain Primitives"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://github.com/paritytech/polkadot/blob/master/collator/src/lib.rs#L17",children:"Polkadot Collator - Logic"})}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"http://slides.com/paritytech/paritysubstrate#/15",children:"Execution"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://wiki.parity.io/impl_stubs",children:"Runtime"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://wiki.parity.io/impl_stubs",children:"impl-stubs"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://github.com/paritytech/substrate/tree/master/srml",children:"SRML"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://github.com/paritytech/substrate-node-template",children:"SRML Node Template"})}),`
`]}),`
`]}),`
`,e.jsxs(t.li,{children:["Polkadot - Relay Chain",`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://polkadot.network/PolkaDotPaper.pdf",children:"Whitepaper Overview - Participation in Polkadot"})," - Page 4 gives an overview of the actors"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://github.com/paritytech/substrate/blob/v0.2/polkadot/collator/src/lib.rs",children:"Collator"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"A collator node lives on a distinct parachain and submits a proposal fora state transition, along with a proof for its validity (what we might call a witness or block data)."}),`
`]}),`
`]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://github.com/paritytech/substrate/blob/v0.2/polkadot/parachain/src/lib.rs",children:"Pokadot Parachain"})," - Defines primitive types for creating or validating a parachain."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://github.com/paritytech/substrate/blob/v0.2/polkadot/statement-table/src/lib.rs",children:"Statement Table"})," - This stores messages other authorities issue about candidates."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://github.com/paritytech/substrate/tree/v0.2/polkadot/network",children:"Network"})," - Does the heavy lifting of routing the statements and gaining consensus across the relay chain (and associated parachains)",`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://github.com/paritytech/substrate/blob/v0.2/polkadot/network/src/consensus.rs",children:"Consensus"}),' - The "consensus" networking code built on top of the base network service. This fulfills the ',e.jsx(t.code,{children:"polkadot_consensus::Network"})," trait, providing a hook to be called each time consensus begins on a new chain head."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://github.com/paritytech/substrate/blob/v0.2/polkadot/network/src/collator_pool.rs",children:"Consensus Pool"})," - Bridge between the network and consensus service for getting collations to it."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://github.com/paritytech/substrate/blob/v0.2/polkadot/network/src/router.rs",children:"Router"})," - Statement routing and consensus table router implementation."]}),`
`]}),`
`]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://github.com/paritytech/substrate/blob/v0.2/substrate/misbehavior-check/src/lib.rs",children:"Fisherman (Misbehaviour check)"})," - Utility for substrate-based runtimes that want to check misbehavior reports."]}),`
`]}),`
`]}),`
`,e.jsxs(t.li,{children:["Hashing",`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://github.com/paritytech/substrate/blob/master/core/primitives/src/hashing.rs",children:"Substrate Code - hashing.rs"})}),`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://blake2.net/",children:"Blake2"})," ",e.jsx(t.a,{href:"https://github.com/paritytech/substrate/search?q=blake2&unscoped_q=blake2",children:"use in substrate"})]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://cyan4973.github.io/xxHash/",children:"XXHASH"})," ",e.jsx(t.a,{href:"https://github.com/paritytech/substrate/search?q=TWOX&unscoped_q=TWOX",children:"use in substrate"})]}),`
`]}),`
`]}),`
`,e.jsxs(t.li,{children:["Chaincode (See WASM above)",`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://github.com/paritytech/wasmi",children:"Rust Parity Tech WASMI"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://github.com/paritytech/substrate/search?q=wasmi&unscoped_q=wasmi",children:"Use in Substrate Code"})}),`
`]}),`
`]}),`
`,e.jsxs(t.li,{children:["Deployment",`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["Substrate",`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://github.com/paritytech/substrate#on-mac",children:"Locally on Mac"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://github.com/paritytech/substrate#on-mac",children:"From Code Base"})}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(t.li,{children:["Polkadot Developer Tools",`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["API",`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://polkadot.js.org/api/",children:"Polkadot Javascript API"})}),`
`]}),`
`]}),`
`,e.jsxs(t.li,{children:["RPC",`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://github.com/paritytech/substrate/tree/master/core/rpc",children:"Substrate Code"})}),`
`]}),`
`]}),`
`,e.jsxs(t.li,{children:["CLI",`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://github.com/paritytech/substrate/tree/master/core/cli",children:"CLI"})}),`
`]}),`
`]}),`
`,e.jsx(t.li,{children:"SDK"}),`
`]}),`
`]}),`
`,e.jsxs(t.li,{children:["Polkadot Chain Tools",`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["Governance",`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://github.com/paritytech/substrate/blob/master/srml/democracy/src/lib.rs",children:"Democracy - Github"})}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(t.li,{children:["Substrate Prototyping",`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://medium.com/coinmonks/polkadot-hello-world-3-poc-3-on-substrate-is-here-c45d100f72e3",children:"Background Material"})}),`
`,e.jsxs(t.li,{children:["Deploying a Substrate Chain",`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://hackmd.io/y-E9Q9jTRreni6z9EU0kkA#",children:"Overview"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://github.com/paritytech/substrate#on-mac",children:"Locally"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://github.com/paritytech/substrate#on-mac",children:"From Code Base"})}),`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://github.com/paritytech/substrate/issues/949",children:"Current Issue with BBQ Birch"})," - ",e.jsx(t.a,{href:"https://github.com/paritytech/substrate/pull/900",children:"cause"})]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(t.li,{children:["Deploying Polkadot",`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://github.com/paritytech/polkadot#4-hacking-on-polkadot",children:"Overview"})}),`
`]}),`
`]}),`
`,e.jsxs(t.li,{children:["Deploying a simple contract",`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://medium.com/polkadot-network/preparing-to-build-on-polkadot-349ff5002885",children:"Preparing to build on Polkadot"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://wiki.parity.io/WebAssembly-Home",children:"Writing a WASM Contract"})}),`
`]}),`
`]}),`
`,e.jsxs(t.li,{children:["Running a Transaction",`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://polkadot.js.org/api/examples/promise/07_transfer_dots/",children:"Balance Transfer via API"})}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]})]})}function l(s={}){const{wrapper:t}={...n(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(i,{...s})}):i(s)}export{l as default,a as frontmatter};
