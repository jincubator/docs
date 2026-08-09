import{u as r,j as e}from"./index-DYIkDnBo.js";const o={title:"Intent Execution Boundaries",description:"Architecture for preserving mandate, resource authority, solver discretion, validation, execution, and settlement evidence."};function a(i){const n={a:"a",div:"div",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[`
`,e.jsx(n.header,{children:e.jsxs(n.h1,{id:"intent-execution-boundaries",children:["Intent Execution Boundaries",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#intent-execution-boundaries",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(n.p,{children:"An intent architecture is safe only when it preserves the user's mandate, resource authority, solver discretion, execution payload, and settlement evidence as separate boundaries."}),`
`,e.jsxs(n.h2,{id:"the-design-problem",children:["The design problem",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#the-design-problem",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"An intent states an acceptable outcome while leaving some execution choices open. That flexibility can improve routing or user experience, but it creates a trust boundary: another actor may choose venues, timing, payloads, or counterparties while using resources the user controls."}),`
`,e.jsx(n.p,{children:"The architecture must make the allowed freedom machine-checkable and retain enough evidence to explain why one execution was permitted."}),`
`,e.jsxs(n.h2,{id:"mandate-and-resource-boundaries",children:["Mandate and resource boundaries",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#mandate-and-resource-boundaries",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"The mandate should bind:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"input and acceptable output assets;"}),`
`,e.jsx(n.li,{children:"minimum, maximum, or pricing conditions;"}),`
`,e.jsx(n.li,{children:"amount and permitted partial behavior;"}),`
`,e.jsx(n.li,{children:"expiry and replay domain;"}),`
`,e.jsx(n.li,{children:"permitted fillers, solvers, or execution classes;"}),`
`,e.jsx(n.li,{children:"fee and residual-value rules; and"}),`
`,e.jsx(n.li,{children:"settlement destination."}),`
`]}),`
`,e.jsx(n.p,{children:"Resource authority should be narrower than the application roadmap. A lock, approval, or signed order identifies the resource, owner, amount, scope, delegate, expiry, and revocation model. It should not silently authorize arbitrary calls or future features."}),`
`,e.jsxs(n.h2,{id:"discovery-and-validation",children:["Discovery and validation",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#discovery-and-validation",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Solvers can produce quotes, routes, payloads, or proofs. Those are proposals until validated against the mandate and current state."}),`
`,e.jsx(n.p,{children:"A validation boundary should:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"parse the proposal into a bounded execution model;"}),`
`,e.jsx(n.li,{children:"verify solver or filler eligibility;"}),`
`,e.jsx(n.li,{children:"check authorization, expiry, nonce, and replay state;"}),`
`,e.jsx(n.li,{children:"evaluate price or oracle conditions;"}),`
`,e.jsx(n.li,{children:"simulate or otherwise validate effects where the domain requires it;"}),`
`,e.jsx(n.li,{children:"cap fees and residual-value behavior; and"}),`
`,e.jsx(n.li,{children:"produce one exact authorized payload."}),`
`]}),`
`,e.jsx(n.p,{children:"Missing or failed validation is a rejection or retryable evaluation state—not permission to execute."}),`
`,e.jsxs(n.h2,{id:"execution-and-settlement",children:["Execution and settlement",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#execution-and-settlement",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Execution consumes the exact authorized payload and records submission separately from outcome. Atomic execution can keep resource movement and exchange in one transaction, but it does not prove user satisfaction until outputs, fees, and residual value are observed and checked."}),`
`,e.jsx(n.p,{children:"Delayed or cross-chain execution requires explicit states for expiry, cancellation, partial fulfillment, ambiguity, destination observation, and recovery. No generic “filled” flag should replace the evidence needed by the mandate."}),`
`,e.jsxs(n.h2,{id:"failure-modes-and-controls",children:["Failure modes and controls",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#failure-modes-and-controls",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Important failure modes include:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"a solver payload exceeding the signed mandate;"}),`
`,e.jsx(n.li,{children:"stale oracle or route data passing after conditions move;"}),`
`,e.jsx(n.li,{children:"reusable resource authority being replayed or retained too long;"}),`
`,e.jsx(n.li,{children:"callback or hook reentrancy crossing an authority boundary;"}),`
`,e.jsx(n.li,{children:"residual value or fees going to an unintended party;"}),`
`,e.jsx(n.li,{children:"submission being presented as settlement;"}),`
`,e.jsx(n.li,{children:"a delayed intent becoming unowned after expiry or failure; and"}),`
`,e.jsx(n.li,{children:"third-party protocol guarantees being assumed rather than verified."}),`
`]}),`
`,e.jsx(n.p,{children:"Controls should be local to the boundary they protect: exact authorization, nonce and expiry, allowlisted call surfaces, fail-closed validation, bounded callbacks, independent outcome checks, and explicit recovery states."}),`
`,e.jsxs(n.h2,{id:"alternatives-and-trade-offs",children:["Alternatives and trade-offs",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#alternatives-and-trade-offs",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Direct swaps reduce solver and mandate complexity but expose route choice and timing to the user or application. Request-for-quote systems narrow competition to invited counterparties and can simplify validation, at the cost of less open discovery. Onchain auctions improve transparency but may expose intent information and add latency or transaction cost."}),`
`,e.jsx(n.p,{children:"Reusable resource locks can reduce repeated approvals and capital movement, but they increase revocation, lifecycle, and delegate-risk obligations. Atomic financing can reduce upfront principal for a bounded transaction while retaining infrastructure, RPC, operational, gas, and failed-transaction costs."}),`
`,e.jsxs(n.h2,{id:"validation-boundaries",children:["Validation boundaries",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#validation-boundaries",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Prototype validation should prove:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"mandate encoding and signature domain;"}),`
`,e.jsx(n.li,{children:"expiry, nonce, cancellation, and replay behavior;"}),`
`,e.jsx(n.li,{children:"exact asset and amount authority;"}),`
`,e.jsx(n.li,{children:"allowed and rejected solver payloads;"}),`
`,e.jsx(n.li,{children:"callback and reentrancy behavior;"}),`
`,e.jsx(n.li,{children:"oracle and simulation failure handling;"}),`
`,e.jsx(n.li,{children:"output, fee, and residual-value accounting; and"}),`
`,e.jsx(n.li,{children:"recovery after delay, revert, ambiguous response, or partial progress."}),`
`]}),`
`,e.jsx(n.p,{children:"Passing local contract tests does not establish an audited protocol, production solver network, partner integration, economic sustainability, or cross-chain security."}),`
`,e.jsxs(n.h2,{id:"go-deeper",children:["Go deeper",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#go-deeper",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["See the ",e.jsx(n.a,{href:"/work/prototypes",children:"Intent Systems Prototypes"}),"."]}),`
`,e.jsxs(n.li,{children:["Read the ",e.jsx(n.a,{href:"/research/defi-protocol-engineering/intro",children:"Intent-Based Execution research"}),"."]}),`
`,e.jsxs(n.li,{children:["Continue to ",e.jsx(n.a,{href:"/architecture/trading-system-execution-pipelines",children:"Designing Evidence-Aware Trading-System Pipelines"})," for related evaluation-to-execution boundaries."]}),`
`,e.jsxs(n.li,{children:["Browse historical protocol, proposal, and hook pages through the ",e.jsx(n.a,{href:"/archive/intro",children:"Archive"}),"."]}),`
`]})]})}function s(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(a,{...i})}):a(i)}export{s as default,o as frontmatter};
