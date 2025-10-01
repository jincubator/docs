import{f as t,j as e}from"./index-BZW_0xgh.js";const r={title:"Binance Smart Chain",description:"undefined"};function i(s){const n={a:"a",blockquote:"blockquote",div:"div",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"binance-smart-chain",children:["Binance Smart Chain",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#binance-smart-chain",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"date: 2023-02-04"}),`
`,e.jsx(n.li,{children:"last updated: 2023-02-04"}),`
`]}),`
`,e.jsxs(n.h2,{id:"overview",children:["Overview",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#overview",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Binanace Smart Chain (BSC) has similar signature schemes to Polygon but with a much smaller set of validators and some degree of random (yet predictable and deterministic) perturbation to the active validator set."}),`
`,e.jsxs(n.p,{children:["The consensus protocol is based on Parlia",e.jsx("sup",{children:e.jsx(n.a,{href:"#f19",children:"19"})}),", a variation that adds staking, validators, and elections to the proof-of-authority consensus protocol Clique, initially proposed in the Ethereum community. The protocol uses 21 validators for producing and signing blocks, with 19 of them picked from stakers with top voting power and 2 randomly chosen every 200 blocks ",e.jsx("sup",{children:e.jsx(n.a,{href:"#f20",children:"20"})}),". Blocks are signed using ECDSA on secp256k1 curves, and block headers can be verified following the standard signature verification process",e.jsx("sup",{children:e.jsx(n.a,{href:"#f21",children:"21"})}),"."]}),`
`,e.jsxs(n.h2,{id:"consensus-mechanism",children:["Consensus Mechanism",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#consensus-mechanism",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["Following is an excerpt from ",e.jsx(n.a,{href:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/learn/consensus.mdx",children:"Binance Consensus Engine documentation"})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Although Proof-of-Work (PoW) has been recognized as a practical mechanism to implement a decentralized network, it is not friendly to the environment and also requires a large size of participants to maintain the security."}),`
`,e.jsxs(n.p,{children:["Ethereum and some other blockchain networks, such as ",e.jsx(n.a,{href:"https://github.com/maticnetwork/bor",children:"MATIC Bor"}),", ",e.jsx(n.a,{href:"https://tomochain.com/",children:"TOMOChain"}),", ",e.jsx(n.a,{href:"https://gochain.io/",children:"GoChain"}),", ",e.jsx(n.a,{href:"https://xdai.io/",children:"xDAI"}),", do use ",e.jsx(n.a,{href:"https://en.wikipedia.org/wiki/Proof_of_authority",children:"Proof-of-Authority(PoA)"})," or its variants in different scenarios, including both testnet and mainnet. PoA provides some defense to 51% attack, with improved efficiency and tolerance to certain levels of Byzantine players (malicious or hacked). It serves as an easy choice to pick as the fundamentals."]}),`
`,e.jsxs(n.p,{children:["Meanwhile, the PoA protocol is most criticized for being not as decentralized as PoW, as the validators, i.e. the nodes that take turns to produce blocks, have all the authorities and are prone to corruption and security attacks. Other blockchains, such as EOS and Lisk both, introduce different types of ",e.jsx(n.a,{href:"https://en.bitcoinwiki.org/wiki/DPoS",children:"Delegated Proof of Stake (DPoS)"})," to allow the token holders to vote and elect the validator set. It increases the decentralization and favors community governance."]}),`
`,e.jsx(n.p,{children:"BSC here proposes to combine DPoS and PoA for consensus, so that:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Blocks are produced by a limited set of validators"}),`
`,e.jsxs(n.li,{children:["Validators take turns to produce blocks in a PoA manner, similar to ",e.jsx(n.a,{href:"https://eips.ethereum.org/EIPS/eip-225",children:"Ethereum's Clique"})," consensus design"]}),`
`,e.jsx(n.li,{children:"Validator set are elected in and out based on a staking based governance"}),`
`]}),`
`,e.jsx(n.p,{children:"The consensus protocol of BSC fulfills the following goals:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Short Blocking time, 3 seconds on mainnet."}),`
`,e.jsx(n.li,{children:"It requires limited time to confirm the finality of transactions, around 45s for mainnet."}),`
`,e.jsx(n.li,{children:"There is no inflation of native token: BNB, the block reward is collected from transaction fees, and it will be paid in BNB."}),`
`,e.jsx(n.li,{children:"It is 100% compatible with Ethereum system ."}),`
`,e.jsx(n.li,{children:"It allows modern proof-of-stake blockchain network governance."}),`
`]}),`
`]}),`
`,e.jsxs(n.h2,{id:"signing-mechanism",children:["Signing Mechanism",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#signing-mechanism",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"BSC uses the same signing mechanism as Ethereum 1.0."}),`
`,e.jsxs(n.p,{children:["Transactions are signed using recoverable ECDSA signatures. This method utilises the SECP-256k1 curve. (see the ",e.jsx(n.a,{href:"https://ethereum.github.io/yellowpaper/paper.pdf",children:"Ethereum Yellow Paper"})," Appendix F. Signing Transactions). go-ethereum utilizes the ",e.jsx(n.a,{href:"https://github.com/bnb-chain/bsc/tree/master/crypto/secp256k1",children:"secp256k1"})," package which wraps the bitcoin secp256k1 C library. Signing is handled by the ",e.jsx(n.a,{href:"https://github.com/bnb-chain/bsc/tree/master/signer",children:"signer"})," receives a request and produces a signature. Note, the produced signature conforms to the secp256k1 curve R, S and V values, where the V value will be 27 or 28 for legacy reasons, if legacyV==true."]}),`
`,e.jsx(n.strong,{children:"Signing"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://docs.bnbchain.org/docs/beaconchain/learn/signature/",children:"Signature Documentation"}),": Binance overview of how transactions are signed using ECDSA curve Secp256k1."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/ethereum/go-ethereum/tree/master/crypto/secp256k1",children:"secp256k1 codebase"}),": Binance secp256k1 crytpographic library (go)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/bnb-chain/bsc/blob/03ff2992ab4674c1df8f568ee9a31596f3503c26/crypto/signature_cgo.go#L32",children:"secp256k1 Public Key"}),": Binance codebase(go) recovering the uncompressed secp256k1 key that created a given signature."]}),`
`]}),`
`,e.jsxs(n.h2,{id:"code-review",children:["Code Review",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#code-review",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["The Binance Smart chain is cloned from ",e.jsx(n.a,{href:"/ethereum-1-0",children:"Ethereum 1.0"})," and thus the majority of code incuding primitives, signing are similar. The key addtions are"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/bnb-chain/bsc/tree/master/consensus/parlia",children:"Consensus - Parlia"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/bnb-chain/bsc/tree/master/core/systemcontracts",children:"systemcontracts"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/bnb-chain/bsc/tree/master/mobile",children:"Mobile"}),": Outdated library."]}),`
`]}),`
`,e.jsxs(n.p,{children:["Some ommissions include the majority of work done for Ethereum 2.0 for example BSC has no ",e.jsx(n.a,{href:"https://github.com/ethereum/go-ethereum/tree/master/beacon/engine",children:"beacon/engine"}),"."]}),`
`,e.jsxs(n.h2,{id:"references",children:["References",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#references",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.strong,{children:"Consensus"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://docs.bnbchain.org/docs/learn/consensus/#parlia",children:"Parlia Documentation"}),": Binance Consensus Engine Parlia Documentation"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/bnb-chain/bsc/blob/master/consensus/consensus.go",children:"Consenus Engine Codebase"}),": Binance algorithm agnostic consensus engine. (go)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/bnb-chain/bsc/blob/master/consensus/parlia/parlia.go",children:"Parlia Consensus Codebase"}),": Binance Parlia codebase (go)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/bnb-chain/bsc/blob/master/consensus/clique/clique.go",children:"Clique Consensus Codebase"}),": Clique implements the proof-of-authority consensus engine (go). It is what Parlia was based of."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/bnb-chain/bsc/blob/master/consensus/parlia/parlia.go#L546",children:"Parlia Consensus Verify Seal"}),": Binance seal verification codebase (go). ",e.jsx(n.em,{children:"verifySeal checks whether the signature contained in the header satisfies the consensus protocol requirements. The method accepts an optional list of parent headers that aren't yet part of the local blockchain to generate the snapshots from. The transition rule is described in the eth1/2 merge spec EIP-3675."})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://eips.ethereum.org/EIPS/eip-3675",children:"EIP-3675: Upgrade consensus to Proof-of-Stake"}),": Specification of the consensus mechanism upgrade on Ethereum Mainnet that introduces Proof-of-Stake."]}),`
`]}),`
`,e.jsx(n.strong,{children:"Staking"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://docs.bnbchain.org/docs/stake/Staking/#staking-economics",children:"BNB Staking Economics"}),": Binance Staking Documentation"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://www.bnbchain.org/en/staking",children:"BNB Chain Staking"}),": Binance Staking App"]}),`
`]}),`
`,e.jsx(n.strong,{children:"Additional"}),`
`,e.jsxs(n.p,{children:[e.jsx("a",{name:"f19",children:"[19]"})," See ",e.jsx(n.a,{href:"https://docs.bnbchain.org/docs/learn/consensus/#consensus-protocol",children:`BSC Consensus Engine
documentations`})]}),`
`,e.jsxs(n.p,{children:[e.jsx("a",{name:"f20",children:"[20]"}),` Following BEP-131, see a
`,e.jsx(n.a,{href:"https://www.bnbchain.org/en/blog/bep131-introducing-candidate-validators-bnb-smart-chain/",children:"summary"}),`
and `,e.jsx(n.a,{href:"https://github.com/bnb-chain/BEPs/pull/131",children:"detailed specifications"}),`. Note
that the proportion of randomly selected validators may increase, as proposed in
the BEP.`]}),`
`,e.jsxs(n.p,{children:[e.jsx("a",{name:"f21",children:"[21]"}),` See
`,e.jsx(n.a,{href:"https://github.com/bnb-chain/bsc/blob/cb9e50bdf62c6b46a71724066d39f9851181a5af/consensus/parlia/parlia.go#L546",children:"code"}),`
for full procedure and how ecrecover is used for signature verification.`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://messari.io/report/state-of-bnb-chain-q4-2022",children:"State of BNB Chain Q4 2022"})}),`
`]})]})}function o(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{o as default,r as frontmatter};
