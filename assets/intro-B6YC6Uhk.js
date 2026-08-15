import{u as r,j as e}from"./index-AG_q_k1k.js";const o={title:"Intent-Based Execution",description:"A prototype-grounded model for reviewing intent expression, resource authority, solver output, execution, and settlement."};function i(t){const n={a:"a",div:"div",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,e.jsx(n.header,{children:e.jsxs(n.h1,{id:"intent-based-execution",children:["Intent-Based Execution",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#intent-based-execution",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(n.p,{children:"An intent can simplify what a user expresses while moving complexity into authorization, competition, resource control, execution, and settlement boundaries."}),`
`,e.jsxs(n.h2,{id:"the-question",children:["The question",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#the-question",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"What must an intent system prove between a user's desired outcome and an observed settlement?"}),`
`,e.jsx(n.p,{children:"Intent interfaces can reduce the choices exposed to a user, but the system still needs an executable mandate, controlled resources, a method for discovering or selecting execution, and evidence that the outcome satisfied the mandate."}),`
`,e.jsxs(n.h2,{id:"a-boundary-model",children:["A boundary model",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#a-boundary-model",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"A useful review follows six boundaries:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Expression"})," — what outcome, limits, expiry, and permitted flexibility did the user authorize?"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Resource control"})," — which assets or permissions are available, for how long, and to whom?"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Discovery"})," — how can solvers or fillers propose an execution without gaining excess authority?"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Validation"})," — which oracle, simulation, or onchain conditions determine acceptability?"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Execution"})," — what exact payload can move resources, and what prevents replay or substitution?"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Settlement"})," — what evidence establishes the user outcome, fees, residual value, and failure state?"]}),`
`]}),`
`,e.jsx(n.p,{children:"The label “intent” does not answer these questions. It changes where they are implemented."}),`
`,e.jsxs(n.h2,{id:"prototype-findings",children:["Prototype findings",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#prototype-findings",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"The UHI5 and Unite DeFi experiments expose complementary parts of the model:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"a delayed Uniswap v4 hook tests how execution can be deferred while another actor seeks a route;"}),`
`,e.jsx(n.li,{children:"limit-order interactions test how a signed order can permit bounded pre- and post-execution behavior;"}),`
`,e.jsx(n.li,{children:"a Tycho-backed executor tests one path from solver-selected route material to multi-DEX execution;"}),`
`,e.jsx(n.li,{children:"oracle-conditioned orders test the difference between price evidence and execution authority; and"}),`
`,e.jsx(n.li,{children:"ERC-6909-oriented resource locking tests how reusable permissions can be separated from immediate custody transfer."}),`
`]}),`
`,e.jsx(n.p,{children:"The public prototype records also show the limits of early integration work: intent creation, listener, solver, partner, cross-chain, and production paths can remain planned even when one hook or contract interaction is executable."}),`
`,e.jsxs(n.h2,{id:"engineering-conclusions",children:["Engineering conclusions",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#engineering-conclusions",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"An intent system should:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"make the mandate and permitted solver discretion explicit;"}),`
`,e.jsx(n.li,{children:"bind resource authority to an identity, scope, expiry, and replay rule;"}),`
`,e.jsx(n.li,{children:"distinguish quote, proposal, selection, simulation, submission, and settlement;"}),`
`,e.jsx(n.li,{children:"validate solver output without granting arbitrary-call authority;"}),`
`,e.jsx(n.li,{children:"define who receives residual value and who bears execution costs;"}),`
`,e.jsx(n.li,{children:"preserve a recoverable state when execution is delayed, rejected, reverted, or ambiguous; and"}),`
`,e.jsx(n.li,{children:"record which claims are prototype observations versus protocol goals."}),`
`]}),`
`,e.jsx(n.p,{children:"Atomic execution can reduce principal exposure for a bounded flow, but it does not remove infrastructure, RPC, operational, or gas expenditure. Failed transactions may still incur unreimbursed costs."}),`
`,e.jsxs(n.h2,{id:"alternatives-and-counterevidence",children:["Alternatives and counterevidence",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#alternatives-and-counterevidence",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Direct user-authored transactions can be simpler when the execution path is known and user choice is acceptable. Traditional order books or request-for-quote systems can make price discovery and counterparty selection more explicit. A general solver network adds value only when its search and competition benefits justify additional authority, availability, privacy, and settlement complexity."}),`
`,e.jsx(n.p,{children:"Resource locking can reduce repeated custody movement, but it expands the importance of revocation, expiry, replay, and downstream permission review."}),`
`,e.jsxs(n.h2,{id:"limitations-and-freshness",children:["Limitations and freshness",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#limitations-and-freshness",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The implementation evidence is historical prototype evidence, not a production solver network or audited protocol."}),`
`,e.jsx(n.li,{children:"The analysis does not assert current behavior for Uniswap, 1inch, Tycho, The Compact, ERC-7683, or other third-party systems beyond the cited prototype context."}),`
`,e.jsx(n.li,{children:"Seamless material is excluded from the active evidence set because contribution and disclosure boundaries remain unresolved."}),`
`,e.jsx(n.li,{children:"Private solver strategy, partner plans, opportunity details, and operational configuration are excluded."}),`
`,e.jsx(n.li,{children:"Revisit the analysis when a prototype supplies a complete intent-to-settlement trace and independently reviewed security boundary."}),`
`]}),`
`,e.jsxs(n.h2,{id:"go-deeper",children:["Go deeper",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#go-deeper",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Review the ",e.jsx(n.a,{href:"/work/prototypes",children:"Intent Systems Prototypes"}),"."]}),`
`,e.jsxs(n.li,{children:["Continue to ",e.jsx(n.a,{href:"/architecture/defi-systems/intents",children:"Intent Execution Boundaries"}),"."]}),`
`,e.jsxs(n.li,{children:["Read the ",e.jsx(n.a,{href:"https://github.com/jincubator-united-defi-2025",children:"2025 Unite DeFi prototype organization"}),"."]}),`
`,e.jsxs(n.li,{children:["Browse superseded intent and protocol notes through the ",e.jsx(n.a,{href:"/archive/intro",children:"Archive"}),"."]}),`
`]})]})}function a(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{a as default,o as frontmatter};
