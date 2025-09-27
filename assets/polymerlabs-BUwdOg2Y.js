import{f as r,j as e}from"./index-bBjUqOe_.js";const a={title:"Polymer Labs",description:"undefined"};function t(i){const n={a:"a",div:"div",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",section:"section",sup:"sup",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"polymer-labs",children:["Polymer Labs",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#polymer-labs",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"date: 2023-02-24"}),`
`,e.jsx(n.li,{children:"last updated: 2023-02-24"}),`
`]}),`
`,e.jsxs(n.h2,{id:"overview",children:["Overview",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#overview",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["Polymer’s",e.jsx(n.sup,{children:e.jsx(n.a,{href:"#user-content-fn-ov-1",id:"user-content-fnref-ov-1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})})," modular IBC",e.jsx(n.sup,{children:e.jsx(n.a,{href:"#user-content-fn-ov-2",id:"user-content-fnref-ov-2","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"2"})})," design allows for chains, like Ethereum",e.jsx(n.sup,{children:e.jsx(n.a,{href:"#user-content-fn-ov-3",id:"user-content-fnref-ov-3","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"3"})}),", to easily integrate IBC transport and become interoperable across all ecosystems in a decentralized manner."]}),`
`,e.jsxs(n.p,{children:["Our protocol combines a novel consensus engine",e.jsx(n.sup,{children:e.jsx(n.a,{href:"#user-content-fn-ov-4",id:"user-content-fnref-ov-4","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"4"})}),", zero knowledge technology",e.jsx(n.sup,{children:e.jsx(n.a,{href:"#user-content-fn-ov-5",id:"user-content-fnref-ov-5","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"5"})}),", and modular IBC",e.jsx(n.sup,{children:e.jsx(n.a,{href:"#user-content-fn-ov-6",id:"user-content-fnref-ov-6","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"6"})}),` to create the most efficient and scalable IBC routing solution.
Polymer is the first chain dedicated to the routing of IBC packets.`]}),`
`,e.jsxs(n.h2,{id:"approach",children:["Approach",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#approach",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h2,{id:"sample-process-flow",children:["Sample Process Flow",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#sample-process-flow",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h2,{id:"design-notes",children:["Design Notes",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#design-notes",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h2,{id:"code-review",children:["Code Review",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#code-review",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/mir-protocol/plonky2",children:"plonky2"}),": a SNARK implementation based on techniques from PLONK and FRI. It has since expanded to include tools such as Starky, a highly performant STARK implementation.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/polymerdao/plonky2-solidity-verifier",children:"plonky2-solidity-verifier"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/polymerdao/plonky2-circom",children:"plonky2-circom"}),": Plonky2 verifier in Circom"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/polymerdao/plonky2-ed25519",children:"plonky2-ed25519"}),": SNARK verification circuits of a digital signature scheme Ed25519 implemented with Plonky2."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/polymerdao/plonky2-sha256",children:"plonky2-sha256"}),": SNARK circuits of a cryptographic hash function SHA-256 implemented with Plonky2."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/polymerdao/plonky2-sha512",children:"plonky2-sha512"}),": SNARK circuits of a cryptographic hash function SHA-512 implemented with Plonky2."]}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/polymerdao/plonky2-pairing",children:"plonky2-pairing"})}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.h3,{id:"signing-mechanisms",children:["Signing Mechanisms",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#signing-mechanisms",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h3,{id:"cryptographic-primitives",children:["Cryptographic Primitives",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#cryptographic-primitives",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h3,{id:"proving-mechanisms",children:["Proving Mechanisms",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#proving-mechanisms",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h3,{id:"relayer-mechanisms",children:["Relayer Mechanisms",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#relayer-mechanisms",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h3,{id:"light-client-functionality",children:["Light Client Functionality",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#light-client-functionality",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h3,{id:"token-lockers",children:["Token Lockers",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#token-lockers",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h2,{id:"references",children:["References",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#references",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h2,{id:"appendices",children:["Appendices",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#appendices",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h2,{id:"footnotes",children:["Footnotes",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#footnotes",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.section,{"data-footnotes":!0,className:"footnotes",children:[e.jsxs(n.h2,{className:"sr-only",id:"footnote-label",children:["Footnotes",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#footnote-label",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{id:"user-content-fn-ov-1",children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://polymerlabs.medium.com/an-introduction-to-polymer-labs-cosmos-and-ibc-inter-blockchain-communication-b9f941ee2cdb",children:"An Introduction to Polymer Labs, Cosmos, and IBC (Inter-Blockchain Communication)"}),": Polymer Chain provides a seamless way to provide cross chain communication by utilizing IBC to connect chains even when they may not support IBC natively. ",e.jsx(n.a,{href:"#user-content-fnref-ov-1","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"↩"})]}),`
`]}),`
`,e.jsxs(n.li,{id:"user-content-fn-ov-2",children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://ibcprotocol.org/",children:"INTER‑BLOCKCHAIN COMMUNICATION PROTOCOL"}),": IBC is an interoperability protocol for communicating arbitrary data between arbitrary state machines. ",e.jsx(n.a,{href:"#user-content-fnref-ov-2","data-footnote-backref":"","aria-label":"Back to reference 2",className:"data-footnote-backref",children:"↩"})]}),`
`]}),`
`,e.jsxs(n.li,{id:"user-content-fn-ov-3",children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://polymerlabs.medium.com/the-multi-hop-ibc-upgrade-will-take-ibc-to-ethereum-and-beyond-b4bee43523e",children:"The Multi-hop IBC upgrade will take IBC to Ethereum and beyond"}),": A discussion on some key areas of improvement that Polymer is tackling to upgrade IBC functionality and expand the IBC network across the industry. ",e.jsx(n.a,{href:"#user-content-fnref-ov-3","data-footnote-backref":"","aria-label":"Back to reference 3",className:"data-footnote-backref",children:"↩"})]}),`
`]}),`
`,e.jsxs(n.li,{id:"user-content-fn-ov-4",children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://polymerlabs.medium.com/zkmint-the-first-zk-friendly-tendermint-consensus-engine-116000b9d4f9",children:"zkMint: The First ZK-friendly Tendermint Consensus Engine"}),": Polymer’s solution that optimizes IBC across all major chains. ",e.jsx(n.a,{href:"#user-content-fnref-ov-4","data-footnote-backref":"","aria-label":"Back to reference 4",className:"data-footnote-backref",children:"↩"})]}),`
`]}),`
`,e.jsxs(n.li,{id:"user-content-fn-ov-5",children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://polymerlabs.medium.com/developing-the-most-truly-decentralized-interoperability-solution-polymer-zk-ibc-f0287ea84a2b",children:"Developing the Most Truly Decentralized Interoperability Solution : Polymer ZK-IBC"}),": ZK-IBC allows different blockchain protocols to communicate with each other without trusting third parties. It does this by verifying the blockchain consensus on-chain. ",e.jsx(n.a,{href:"#user-content-fnref-ov-5","data-footnote-backref":"","aria-label":"Back to reference 5",className:"data-footnote-backref",children:"↩"})]}),`
`]}),`
`,e.jsxs(n.li,{id:"user-content-fn-ov-6",children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://polymerlabs.medium.com/modular-ibc-for-the-modular-world-9fc021f6322e",children:"Modular IBC for the Modular World"}),": IBC network topology is changing from a homogenous and densely connected network to a heterogenous and sparsely connected network. Modular IBC adapts the IBC protocol to this dynamic environment. ",e.jsx(n.a,{href:"#user-content-fnref-ov-6","data-footnote-backref":"","aria-label":"Back to reference 6",className:"data-footnote-backref",children:"↩"})]}),`
`]}),`
`]}),`
`]})]})}function s(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{s as default,a as frontmatter};
