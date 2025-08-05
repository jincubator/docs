import{f as s,j as e}from"./index-CDZIoDU0.js";const r={title:"Weak Subjectivity",description:"undefined"};function i(n){const t={a:"a",blockquote:"blockquote",div:"div",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",section:"section",sup:"sup",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.header,{children:e.jsxs(t.h1,{id:"weak-subjectivity",children:["Weak Subjectivity",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#weak-subjectivity",children:e.jsx(t.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"date: 2023-02-04"}),`
`,e.jsx(t.li,{children:"last updated: 2023-02-04"}),`
`]}),`
`,e.jsxs(t.h2,{id:"overview",children:["Overview",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#overview",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(t.p,{children:["Following is an excerpt from ",e.jsx(t.em,{children:"Analysis on Weak Subjectivity in Ethereum 2.0"})," ",e.jsx(t.sup,{children:e.jsx(t.a,{href:"#user-content-fn-1",id:"user-content-fnref-1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})})," ."]}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:["Weak subjectivity ",e.jsx(t.sup,{children:e.jsx(t.a,{href:"#user-content-fn-2",id:"user-content-fnref-2","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"2"})})," is a social-consensus-driven approach for solving the fun- damental “nothing-at-stake” problem of proof-of-stake protocols. In particular, it addresses the problem in the presence of long-range forks, while the slash- ing mechanism handles the case of short-range forks. Specifically, the current weak subjectivity mechanism deals with the following two types of long-range attacks ",e.jsx(t.sup,{children:e.jsx(t.a,{href:"#user-content-fn-3",id:"user-content-fnref-3","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"3"})})]}),`
`,e.jsxs(t.p,{children:["– ",e.jsx(t.em,{children:"Exploiting retired validators:"})," Adversaries can create and reveal a new chain branching from a certain block on the canonical chain, after 2/3 of validators who were active for the block have exited. Note that such validators can still justify and finalize conflicting blocks at earlier slots without being slashed after they have exited."]}),`
`,e.jsxs(t.p,{children:["– ",e.jsx(t.em,{children:"Exploiting diverging validator sets:"})," Adversaries can build a new chain until the validator set for the new chain is sufficiently different from that of the canonical chain. The larger the difference between the two validator sets, the lower the accountable safety tolerance. For example, if the intersection of the two sets is smaller than 2/3 of each set, then it is possible to have conflicting blocks to be finalized without any validators violating the slashing conditions."]}),`
`,e.jsx(t.p,{children:e.jsx(t.em,{children:"It is unknown whether this mechanism can deal with other types of long-range attacks, if any, in general."})}),`
`,e.jsx(t.p,{children:"The current weak subjectivity mechanism employs a social consensus layer in parallel to maintain sufficiently many checkpoints (called weak subjectivity check- points) so that there exist no conflicting finalized blocks that are descendants of the latest weak subjectivity checkpoint. In other words, the purpose of the latest weak subjectivity checkpoints is to deterministically identify the unique canonical chain even in the presence of conflicting finalized blocks caused by the long-range attacks."}),`
`]}),`
`,e.jsxs(t.h2,{id:"references",children:["References",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#references",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(t.p,{children:"Articles and guides"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[`
`,e.jsxs(t.p,{children:[e.jsx(t.a,{href:"https://notes.ethereum.org/@adiasg/weak-subjectvity-eth2",children:"Weak Subjectivity in Eth2.0"}),": This document is aimed for Eth2.0 client teams to understand weak subjectivity periods and their implication."]}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsxs(t.p,{children:[e.jsx(t.a,{href:"https://github.com/ethereum/consensus-specs/blob/master/specs/phase0/weak-subjectivity.mdx",children:"Phase 0 -- Weak Subjectivity Guide"}),": This document is a guide for implementing the Weak Subjectivity protections in Phase 0."]}),`
`]}),`
`]}),`
`,e.jsx(t.p,{children:"Documentation"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[`
`,e.jsxs(t.p,{children:[e.jsx(t.a,{href:"https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/weak-subjectivity/",children:"Ethereum Docs: WEAK SUBJECTIVITY"}),": This refers to a chain that can progress objectively after some initial seed of information is retrieved socially."]}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsxs(t.p,{children:[e.jsx(t.a,{href:"https://docs.teku.consensys.net/Concepts/Weak-Subjectivity/",children:"Teku Docs: Weak Subjectivity"}),": The weak subjectivity period refers to how far behind the chain head a node can be before 1/3 of validators may have exited since the node was last in sync."]}),`
`]}),`
`]}),`
`,e.jsx(t.p,{children:"Implementations"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://github.com/prysmaticlabs/prysm/blob/develop/beacon-chain/blockchain/weak_subjectivity_checks.go",children:"Prysm: weak_subjectivity_checks.go"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://github.com/prysmaticlabs/prysm/blob/develop/beacon-chain/blockchain/weak_subjectivity_checks.go#L31",children:"NewWeakSubjectivityVerifier"})," validates a checkpoint, and if valid, uses it to initialize a weak subjectivity verifier."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://github.com/prysmaticlabs/prysm/blob/develop/beacon-chain/blockchain/weak_subjectivity_checks.go#L52",children:"VerifyWeakSubjectivity"})," verifies the weak subjectivity root in the service struct."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(t.p,{children:"Footnotes"}),`
`,e.jsxs(t.section,{"data-footnotes":!0,className:"footnotes",children:[e.jsxs(t.h2,{className:"sr-only",id:"footnote-label",children:["Footnotes",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#footnote-label",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsxs(t.li,{id:"user-content-fn-1",children:[`
`,e.jsxs(t.p,{children:[e.jsx(t.a,{href:"https://github.com/runtimeverification/beacon-chain-verification/blob/master/weak-subjectivity/weak-subjectivity-analysis.pdf",children:"Analysis on Weak Subjectivity in Ethereum 2.0"}),": ",e.jsx(t.a,{href:"#user-content-fnref-1","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"↩"})]}),`
`]}),`
`,e.jsxs(t.li,{id:"user-content-fn-2",children:[`
`,e.jsxs(t.p,{children:[e.jsx(t.a,{href:"https://blog.ethereum.org/2014/11/25/proof-stake-learned-love-weak-subjectivity",children:"Proof of Stake: How I Learned to Love Weak Subjectivity"}),": ",e.jsx(t.a,{href:"#user-content-fnref-2","data-footnote-backref":"","aria-label":"Back to reference 2",className:"data-footnote-backref",children:"↩"})]}),`
`]}),`
`,e.jsxs(t.li,{id:"user-content-fn-3",children:[`
`,e.jsxs(t.p,{children:["It is unknown whether this mechanism can deal with other types of long-range attacks, if any, in general ",e.jsx(t.a,{href:"#user-content-fnref-3","data-footnote-backref":"","aria-label":"Back to reference 3",className:"data-footnote-backref",children:"↩"})]}),`
`]}),`
`]}),`
`]})]})}function c(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{c as default,r as frontmatter};
