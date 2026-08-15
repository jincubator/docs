import{u as s,j as e}from"./index-M_9vezYc.js";const r={title:"Designing Evidence-Aware Trading-System Pipelines",description:"A reusable architecture for separating observed state, modeled opportunities, controlled execution, and realized outcomes."};function t(n){const i={a:"a",blockquote:"blockquote",div:"div",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i.blockquote,{"data-historical-context":"true",children:e.jsxs(i.p,{children:["Historical page retained for compatibility. It may contain superseded assumptions, incomplete plans, or outdated links and is not current canonical content. See the ",e.jsx(i.a,{href:"/archive",children:"Archive"})," for context."]})}),`
`,`
`,e.jsx(i.header,{children:e.jsxs(i.h1,{id:"designing-evidence-aware-trading-system-pipelines",children:["Designing Evidence-Aware Trading-System Pipelines",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#designing-evidence-aware-trading-system-pipelines",children:e.jsx(i.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(i.p,{children:"A trading system becomes reviewable when market state, modeled opportunities, execution decisions, and realized outcomes remain distinct. This architecture describes boundaries that preserve those distinctions without copying one implementation."}),`
`,e.jsxs(i.h2,{id:"the-design-problem",children:["The design problem",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#the-design-problem",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.p,{children:"Event-driven trading systems operate across several clocks. Market state changes while catalogs are updated, routes are evaluated, transactions are simulated, and execution conditions move again. If one “profitable” flag crosses every boundary, later code and public evidence inherit assumptions they cannot verify."}),`
`,e.jsx(i.p,{children:"The architecture must support speed while making every advancement explicit: what state was observed, what was modeled, which gate was passed, what action was attempted, and what outcome was retained."}),`
`,e.jsxs(i.h2,{id:"evidence-states",children:["Evidence states",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#evidence-states",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.p,{children:"A useful model treats each stage as a different evidence state:"}),`
`,e.jsxs(i.ol,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Observed state"})," records the market inputs and their provenance."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Catalog state"})," records bounded candidate paths derived from that state."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Evaluation state"})," records modeled outputs for a named route and input."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Opportunity state"})," records an economically interesting candidate before later costs and controls."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Selection state"})," records that the candidate passed the current cost-aware decision gate."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Preflight state"})," records simulation or validation against a later view of the world."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Submission state"})," records an attempted transaction."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Outcome state"})," records execution and realized economic results."]}),`
`]}),`
`,e.jsx(i.p,{children:"Advancing through the sequence requires new evidence. A high evaluation rate does not imply an opportunity; a modeled opportunity does not imply selection; selection does not imply submission; and an execution receipt does not by itself establish realized profit."}),`
`,e.jsxs(i.h2,{id:"pipeline-boundaries",children:["Pipeline boundaries",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#pipeline-boundaries",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.p,{children:"The system can be decomposed into five responsibilities:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Collection"})," ingests changing external state and preserves observation identity."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Catalog and strategy"})," derive candidates and evaluate them against a bounded state view."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Simulation and decision gates"})," revalidate assumptions and decide whether a candidate may advance."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Execution"})," constructs and submits an approved action without redefining the strategy result."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Outcome evidence"})," reconciles attempted actions with receipts, costs, failures, and realized results."]}),`
`]}),`
`,e.jsx(i.p,{children:"Each boundary exchanges a versioned record rather than shared mutable interpretation. The record identifies its inputs, creation time, state revision, and current evidence status. This makes stale decisions detectable and lets downstream failures be attributed to the stage that changed."}),`
`,e.jsxs(i.h2,{id:"decision-gates",children:["Decision gates",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#decision-gates",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.p,{children:"Gates should be monotonic in evidence, not optimism. A candidate advances only when the next stage adds a fact required by the decision. If the relevant state has changed, the candidate returns to evaluation or expires rather than inheriting an earlier approval."}),`
`,e.jsx(i.p,{children:"Fail-closed behavior is especially important at the simulation-to-execution boundary. A failed or unavailable preflight is evidence that execution has not been validated; it is not permission to submit. The same principle applies to incomplete cost information and missing outcome reconciliation."}),`
`,e.jsx(i.p,{children:"The exact thresholds, provider configuration, bidding policy, and route-selection behavior belong to the implementation and operational owner. The reusable architectural requirement is that those inputs are explicit, reviewable, and captured with the decision they influenced."}),`
`,e.jsxs(i.h2,{id:"failure-modes-and-observability",children:["Failure modes and observability",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#failure-modes-and-observability",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.p,{children:"Common failures include:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"state and catalog revisions drifting apart;"}),`
`,e.jsx(i.li,{children:"duplicated or stale evaluations remaining eligible;"}),`
`,e.jsx(i.li,{children:"queues obscuring which revision a result describes;"}),`
`,e.jsx(i.li,{children:"simulation failure being logged without stopping advancement;"}),`
`,e.jsx(i.li,{children:"submission being counted as execution;"}),`
`,e.jsx(i.li,{children:"execution being reported without complete cost reconciliation;"}),`
`,e.jsx(i.li,{children:"throughput metrics crossing stage boundaries and changing meaning."}),`
`]}),`
`,e.jsx(i.p,{children:"Observability should follow the evidence states. Counters name their subject, identifiers connect stage records, and terminal outcomes reconcile with the earlier decision. Retained negative results—such as no candidate passing a later gate—are part of the evidence rather than noise to discard."}),`
`,e.jsxs(i.h2,{id:"alternatives-and-trade-offs",children:["Alternatives and trade-offs",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#alternatives-and-trade-offs",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.p,{children:"A single in-process pipeline can be simpler and faster to prototype, but shared state makes it harder to prove which inputs produced a decision. Fully isolated services improve ownership and scaling but introduce delivery, ordering, duplication, and operational costs."}),`
`,e.jsx(i.p,{children:"The useful compromise is logical separation first: explicit stage records, idempotent consumers, bounded queues, and fail-closed gates. Process or service boundaries can then follow measured scaling or reliability needs. The architecture does not require distributed deployment merely to look modular."}),`
`,e.jsx(i.p,{children:"Persisting every intermediate record improves replay and review but increases storage and privacy obligations. Retention should therefore follow the evidence needed for diagnosis, claim support, and operational accountability—not an assumption that more telemetry is always better."}),`
`,e.jsxs(i.h2,{id:"applying-the-pattern",children:["Applying the pattern",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#applying-the-pattern",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.p,{children:"Salus is one reference implementation of these boundaries, not the definition of them. Its retained evidence demonstrates why graph size, catalog routes, route evaluations, selected after-gas routes, submissions, executions, and realized profit need different names and records."}),`
`,e.jsx(i.p,{children:"The pattern also applies to intent solvers, liquidation systems, routing services, and other event-driven decision engines. Their strategies differ, but each must preserve the boundary between modeled output, authorized action, and observed outcome."}),`
`,e.jsxs(i.h2,{id:"go-deeper",children:["Go deeper",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#go-deeper",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Review the ",e.jsx(i.a,{href:"/research/solving/solving",children:"measurement model and retained route-evaluation evidence"}),"."]}),`
`,e.jsxs(i.li,{children:["See the bounded ",e.jsx(i.a,{href:"/work/salus",children:"Salus Work case study"}),"."]}),`
`,e.jsxs(i.li,{children:["Read ",e.jsx(i.a,{href:"/writing/solving-arbitrage-market-making",children:"Solving, Arbitrage & Market Making"})," for the narrative synthesis."]}),`
`]})]})}function d(n={}){const{wrapper:i}={...s(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(t,{...n})}):t(n)}export{d as default,r as frontmatter};
