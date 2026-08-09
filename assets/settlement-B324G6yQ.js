import{u as a,j as e}from"./index-DYIkDnBo.js";const s={title:"Durable Settlement Control Planes",description:"Architecture for preserving authority, durable workflow, external effects, accounting, finality, and reconciliation across financial settlement."};function t(i){const n={a:"a",div:"div",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...a(),...i.components};return e.jsxs(e.Fragment,{children:[`
`,e.jsx(n.header,{children:e.jsxs(n.h1,{id:"durable-settlement-control-planes",children:["Durable Settlement Control Planes",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#durable-settlement-control-planes",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(n.p,{children:"A settlement control plane should coordinate authority and evidence without pretending that one API, signer, ledger, or external network owns the complete outcome."}),`
`,e.jsxs(n.h2,{id:"the-design-problem",children:["The design problem",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#the-design-problem",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Financial settlement crosses systems that cannot share one database transaction or one authority. A business API accepts an obligation, a policy service permits it, a signer authorizes exact bytes, an external rail attempts an effect, observers report native state, a ledger records financial consequences, and reconciliation determines whether the records agree."}),`
`,e.jsx(n.p,{children:"If any one response becomes the universal status, the platform loses information needed to prevent duplicate effects and recover from ambiguity."}),`
`,e.jsxs(n.h2,{id:"trust-and-authority-boundaries",children:["Trust and authority boundaries",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#trust-and-authority-boundaries",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"The control plane coordinates six independent responsibilities:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Business API and policy"})," authenticate a participant and authorize an exact command."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Durable workflow"})," owns stable identity, sequencing, idempotency, timers, and recovery."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Signing authority"})," approves exact native material under a separate policy."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Rail or chain adapter"})," preserves native transaction and lifetime semantics."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Accounting and inventory"})," record financial consequences from trusted evidence."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Observation and reconciliation"})," compare native, workflow, and financial state."]}),`
`]}),`
`,e.jsx(n.p,{children:"Trust does not flow transitively. API authentication does not grant signing authority. A signer does not decide customer or accounting finality. A submission provider does not become the only observer. Reconciliation may identify a break without gaining authority to rewrite the records it compares."}),`
`,e.jsxs(n.h2,{id:"durable-state-model",children:["Durable state model",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#durable-state-model",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"The core state model should preserve:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"the original business command and versioned policy context;"}),`
`,e.jsx(n.li,{children:"one stable workflow or operation identity;"}),`
`,e.jsx(n.li,{children:"child-effect identities for bank, token, or rail actions;"}),`
`,e.jsx(n.li,{children:"one or more fenced attempts for each external effect;"}),`
`,e.jsx(n.li,{children:"exact submitted material and its authority evidence;"}),`
`,e.jsx(n.li,{children:"append-only observations and finality decisions;"}),`
`,e.jsx(n.li,{children:"financial postings linked to consumed evidence; and"}),`
`,e.jsx(n.li,{children:"reconciliation findings and explicit correction records."}),`
`]}),`
`,e.jsx(n.p,{children:"Each transition adds evidence. A timeout creates an inquiry state, not permission to create a second effect. A later observation can supersede an earlier interpretation without rewriting history."}),`
`,e.jsxs(n.h2,{id:"execution-and-recovery",children:["Execution and recovery",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#execution-and-recovery",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"External effects should follow a submit-once, inquire-before-retry discipline:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"durably accept and bind the command;"}),`
`,e.jsx(n.li,{children:"resolve server-owned policy, route, asset, and authority context;"}),`
`,e.jsx(n.li,{children:"create and fence an attempt;"}),`
`,e.jsx(n.li,{children:"build and authorize exact native material;"}),`
`,e.jsx(n.li,{children:"submit that material once;"}),`
`,e.jsx(n.li,{children:"classify a response as accepted, rejected, or ambiguous;"}),`
`,e.jsx(n.li,{children:"observe through a suitable read path;"}),`
`,e.jsx(n.li,{children:"advance financial state only from sufficient evidence; and"}),`
`,e.jsx(n.li,{children:"reconcile all terminal and incomplete paths."}),`
`]}),`
`,e.jsx(n.p,{children:"Recovery resumes from durable identity and evidence. It does not infer safety from a process restart or missing response."}),`
`,e.jsxs(n.h2,{id:"finality-and-reconciliation",children:["Finality and reconciliation",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#finality-and-reconciliation",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Blockchain or rail finality is one dimension. Accounting, legal or policy, and customer-visible finality may advance on different clocks."}),`
`,e.jsx(n.p,{children:"A reconciler should report complete, incomplete, stale, contradictory, or unsupported evidence. It should not mutate balances to force agreement. Financial corrections should append a digest-bound reversal or adjustment linked to the original entry."}),`
`,e.jsx(n.p,{children:"This makes negative outcomes operationally useful: an unresolved observation, incomplete payout, stale supply view, or reserve mismatch becomes a named state rather than an exception hidden in logs."}),`
`,e.jsxs(n.h2,{id:"alternatives-and-trade-offs",children:["Alternatives and trade-offs",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#alternatives-and-trade-offs",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"A synchronous service with a single provider can reduce implementation cost, but only when the provider supplies authoritative idempotency, inquiry, and settlement evidence that the consumer can retain. It still needs a recoverable business identity."}),`
`,e.jsx(n.p,{children:"A general workflow engine can improve timers, visibility, and long-running orchestration. A database-backed worker can be simpler and more self-contained. Either is acceptable when the domain—not the runtime—owns identities, transitions, evidence, and authorization."}),`
`,e.jsx(n.p,{children:"A universal chain or payment abstraction reduces surface area but risks erasing native transaction lifetime, signing, commitment, and observation semantics. Share the control-plane contract; keep native safety rules in the adapter."}),`
`,e.jsxs(n.h2,{id:"validation-boundaries",children:["Validation boundaries",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#validation-boundaries",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Validation should combine:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"pure domain tests for identity, exact quantities, lifecycle, and finality rules;"}),`
`,e.jsx(n.li,{children:"real-database tests for atomic acceptance, outbox/inbox delivery, leasing, concurrency, and restart;"}),`
`,e.jsx(n.li,{children:"native local-network tests for signing, submission, observation, and response-loss recovery;"}),`
`,e.jsx(n.li,{children:"end-to-end synthetic workflows that assert exact effects and reconciliation; and"}),`
`,e.jsx(n.li,{children:"retained evidence describing the environment, revision, and limit of each proof."}),`
`]}),`
`,e.jsx(n.p,{children:"Local demonstrations establish executable boundaries. They do not establish production custody, bank integration, regulatory approval, audited accounting, security certification, or operational readiness."}),`
`,e.jsxs(n.h2,{id:"go-deeper",children:["Go deeper",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#go-deeper",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["See the ",e.jsx(n.a,{href:"/work/digital-banking",children:"Digital Banking Work case study"}),"."]}),`
`,e.jsxs(n.li,{children:["Read the ",e.jsx(n.a,{href:"/research/financial-infrastructure/settlement/intro",children:"Durable Financial Settlement research"}),"."]}),`
`,e.jsxs(n.li,{children:["Explore the ",e.jsx(n.a,{href:"https://github.com/johnwhitton/digital-banking",children:"Digital Banking implementation"}),"."]}),`
`,e.jsxs(n.li,{children:["Browse historical payment, stablecoin, bridge, and independent-study material through the ",e.jsx(n.a,{href:"/archive/intro",children:"Archive"}),"."]}),`
`]})]})}function o(i={}){const{wrapper:n}={...a(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{o as default,s as frontmatter};
