import{u as r,j as e}from"./index-Cai1_f7o.js";const o={title:"Cosmos IBC",description:"undefined"};function n(s){const i={a:"a",blockquote:"blockquote",div:"div",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i.blockquote,{"data-historical-context":"true",children:e.jsxs(i.p,{children:["Historical page retained for compatibility. It may contain superseded assumptions, incomplete plans, or outdated links and is not current canonical content. See the ",e.jsx(i.a,{href:"/archive",children:"Archive"})," for context."]})}),`
`,e.jsx(i.header,{children:e.jsxs(i.h1,{id:"cosmos-ibc",children:["Cosmos IBC",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#cosmos-ibc",children:e.jsx(i.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"date: 2023-02-24"}),`
`,e.jsx(i.li,{children:"last updated: 2023-04-04"}),`
`]}),`
`,e.jsxs(i.h2,{id:"overview",children:["Overview",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#overview",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.p,{children:["Cosmos is a network of the many blockchains built on IBC protocol. The IBC protocol is a universal interoperability protocol that allows two different blockchains to communicate with one another. IBC guarantees reliable, ordered, and authenticated communication. See ",e.jsx(i.a,{href:"https://v1.cosmos.network/resources/whitepaper",children:"Cosmos Network Whitepaper"})]}),`
`,e.jsxs(i.p,{children:["Blockchains based on IBC protocol may use validity based proofs for interchain communication. See ",e.jsx(i.a,{href:"https://medium.com/the-interchain-foundation/eli5-what-is-ibc-def44d7b5b4c",children:"IBC Protocol ELI5: What is IBC?"})]}),`
`,e.jsxs(i.h3,{id:"protocol",children:["Protocol",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#protocol",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://github.com/cosmos/ibc",children:"Design"}),": the primary repository for development and documentation"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://tutorials.cosmos.network/academy/3-ibc/",children:"Docs"}),": a quick introduction. See also ",e.jsx(i.a,{href:"https://ibc.cosmos.network/",children:"ibc-go documentation"})]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://github.com/cosmos/ibc-go",children:"Implementation"}),": Implementation in Golang, built as a Cosmos SDK module."]}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"https://ibc.cosmos.network/main/roadmap/roadmap.html",children:"Roadmap"})}),`
`]}),`
`,e.jsxs(i.h3,{id:"bridging",children:["Bridging",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#bridging",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://github.com/cosmos/relayer",children:"Relayer"}),': "...blockchains do not directly pass messages to each other over the network. This is where relayer comes in. A relayer process monitors for updates on opens paths between sets of IBC enabled chains..."']}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://ibc.cosmos.network/main/ibc/light-clients/overview.html",children:"Light Clients"}),': "...Light clients operate under a strict set of rules which provide security guarantees for state updates and facilitate the ability to verify the state of a remote blockchain using merkle proofs"']}),`
`]}),`
`,e.jsxs(i.h3,{id:"utilities",children:["Utilities",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#utilities",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://hub.mintscan.io/chains/ibc-network",children:"Explorer"}),": Monitoring interchain activities and messaging in 3D"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://www.keplr.app/",children:"Keplr"}),": Wallet designed to work across blockchains on IBC (see ",e.jsx(i.a,{href:"https://catdotfish.medium.com/getting-started-with-ibc-transfers-276e9ce91e17",children:"Getting Started with Cosmos IBC Transfers"}),")"]}),`
`]}),`
`,e.jsx(i.p,{children:"(to be continued)"}),`
`,e.jsx(i.p,{children:"*============ Content below requires significant revision =========="}),`
`,e.jsxs(i.h2,{id:"code-review",children:["Code Review",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#code-review",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.p,{children:["Following is a review of ",e.jsx(i.a,{href:"https://github.com/cosmos/ibc-go",children:"ibc-go"})]}),`
`,e.jsxs(i.h3,{id:"signing-mechanisms-from-cosmos-sdk",children:["Signing Mechanisms from ",e.jsx(i.a,{href:"https://github.com/cosmos/cosmos-sdk",children:"cosmos-sdk"}),e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#signing-mechanisms-from-cosmos-sdk",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"https://www.usenix.org/legacy/event/usenix99/provos/provos.pdf",children:"bcrypt"})}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"https://github.com/cosmos/cosmos-sdk/tree/main/crypto/keys/bcrypt",children:"cosmos-sdk bcrypt"})}),`
`]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"https://ed25519.cr.yp.to/ed25519-20110926.pdf",children:"ed25519"})}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"https://github.com/cosmos/cosmos-sdk/tree/main/crypto/keys/ed25519",children:"cosmos-sdk ed25519"})}),`
`]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm",children:"ecdsa"})}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"https://github.com/cosmos/cosmos-sdk/tree/main/crypto/keys/internal/ecdsa",children:"cosmos-sdk ecdsa"})}),`
`]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"https://www.secg.org/sec2-v2.pdf",children:"secp256k1"})}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"https://github.com/cosmos/cosmos-sdk/tree/main/crypto/keys/secp256k1",children:"cosmos-sdk secp256k1"})}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://www.secg.org/sec2-v2.pdf",children:"secp256r1"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"https://github.com/cosmos/cosmos-sdk/tree/main/crypto/keys/secp256r1",children:"cosmos-sdk secp256r1"})}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"https://github.com/cosmos/ibc-go/blob/main/modules/core/23-commitment/types/merkle.go",children:"merkle.go"})}),`
`]}),`
`]}),`
`,e.jsxs(i.h3,{id:"proving-mechanisms",children:["Proving Mechanisms",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#proving-mechanisms",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.h3,{id:"relayer-mechanisms",children:["Relayer Mechanisms",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#relayer-mechanisms",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://github.com/cosmos/ibc-go/blob/main/e2e/relayer/relayer.go",children:"e2e relayer.go"})," uses ",e.jsx(i.a,{href:"https://github.com/strangelove-ventures/interchaintest/tree/main/relayer",children:"strangelove-ventures interchaintest relayer"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"https://github.com/strangelove-ventures/interchaintest/blob/main/relayer/rly/cosmos_relayer.go",children:"cosmos-relayer.go"})}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(i.h3,{id:"light-client-functionality",children:["Light Client Functionality",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#light-client-functionality",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"https://github.com/cosmos/ibc-go/tree/main/modules/light-clients",children:"light-clients"})}),`
`]}),`
`,e.jsxs(i.h3,{id:"token-lockers",children:["Token Lockers",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#token-lockers",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.h2,{id:"references",children:["References",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#references",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.h2,{id:"appendices",children:["Appendices",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#appendices",children:e.jsx(i.div,{"data-autolink-icon":!0})})]})]})}function c(s={}){const{wrapper:i}={...r(),...s.components};return i?e.jsx(i,{...s,children:e.jsx(n,{...s})}):n(s)}export{c as default,o as frontmatter};
