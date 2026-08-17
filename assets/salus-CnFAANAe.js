import{u as r,j as e}from"./index-VjbClsXE.js";const t={title:"Salus — Active Trading-System Research",description:"The architecture, engineering contribution, retained results, and limitations of the Salus trading-system reference implementation."};function n(i){const s={a:"a",button:"button",code:"code",div:"div",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[`
`,e.jsx(s.header,{children:e.jsxs(s.h1,{id:"salus",children:["Salus",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#salus",children:e.jsx(s.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(s.h2,{id:"modular-trading-and-solving-infrastructure-for-decentralized-markets",children:["Modular Trading and Solving Infrastructure for Decentralized Markets",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#modular-trading-and-solving-infrastructure-for-decentralized-markets",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:`Salus is a Jincubator-owned research and engineering initiative. John Whitton
designed and built the system boundaries that turn changing decentralized-market
state into bounded, inspectable evaluation work and guarded execution
decisions. It is a reference implementation, not a customer deployment, fund,
commercially validated product, or proven-profitable trading system.`}),`
`,e.jsx(s.p,{children:`The engineering problem is that market state changes while a system is
ingesting data, updating topology, evaluating routes, simulating outcomes, and
deciding whether an action is still valid. A result can become stale between
discovery and execution. A fast evaluator can also appear more successful than
it is if catalog routes, evaluations, opportunities, submissions, and realized
outcomes are collapsed into one number.`}),`
`,e.jsx(s.p,{children:"Salus addresses that engineering problem by separating three responsibilities:"}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Capture"}),` turns external state into bounded, inspectable graph and
route-evaluation work.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Causality"}),` preserves identity and evidence about why an observed
opportunity changed, including when attribution remains unresolved.`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Execution"}),` applies freshness, cost, simulation, submission, and outcome
gates without treating an earlier modeled result as proof of a later event.`]}),`
`]}),`
`,e.jsx(s.p,{children:`Salus is an active reference implementation. Commercial validation remains
ongoing. Its evidence does not establish a production trading platform or
profitable after-gas production execution.`}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Hiring overview:"})," read ",e.jsx(s.em,{children:"What John built"}),", ",e.jsx(s.em,{children:"System architecture at a glance"}),`,
and `,e.jsx(s.em,{children:"Evidence and limitations"}),`.
`,e.jsx(s.strong,{children:"Founder technical diligence:"})," read the same overview, then ",e.jsx(s.em,{children:"Execution"}),` and
the linked funding models and validation evidence.
`,e.jsx(s.strong,{children:"System-design interview:"})," follow ",e.jsx(s.em,{children:"Capture"}),", ",e.jsx(s.em,{children:"Causality"}),", and ",e.jsx(s.em,{children:"Execution"}),`.
`,e.jsx(s.strong,{children:"Principal-engineer deep dive:"})," use ",e.jsx(s.em,{children:"Explore Salus"}),` to enter the focused Research
and Architecture pages.`]}),`
`,e.jsxs(s.h2,{id:"what-john-built",children:["What John built",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#what-john-built",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:`John Whitton leads and implements Salus as a Jincubator research and
engineering initiative. The supported contribution spans the Rust system,
component boundaries, walkthrough corpus, deterministic test and replay
surfaces, controlled execution path, and retained measurement workflow.`}),`
`,e.jsx(s.p,{children:`The reviewed implementation includes a 13-crate Rust workspace and a
16-document walkthrough corpus. Its principal flow is organized as explicit
state, evaluation, evidence, and execution responsibilities.`}),`
`,e.jsxs(s.h2,{id:"system-architecture-at-a-glance",children:["System architecture at a glance",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#system-architecture-at-a-glance",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Stage"}),e.jsx(s.th,{children:"Responsibility"}),e.jsx(s.th,{children:"Evidence boundary"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"State ingestion"}),e.jsx(s.td,{children:"Normalize changing block and market observations with source identity."}),e.jsx(s.td,{children:"An observation is not current executable state."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Read models and topology"}),e.jsx(s.td,{children:"Preserve inspectable current views, graph identity, and bounded route catalogs."}),e.jsx(s.td,{children:"Stored topology is not opportunity or outcome authority."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Affected-work selection"}),e.jsx(s.td,{children:"Use component indexes and queue ownership to narrow and schedule work."}),e.jsx(s.td,{children:"Admission and ordering do not prove profitable-family recall."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Evaluation and simulation"}),e.jsx(s.td,{children:"Evaluate exact inputs and reject unsupported or invalid paths."}),e.jsx(s.td,{children:"A modeled candidate is not selected, submitted, or executed."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Causal analysis"}),e.jsx(s.td,{children:"Compare point-in-time observations, retain attribution strength, and abstain when evidence is insufficient."}),e.jsx(s.td,{children:"Correlation or a ranking signal is not a causal or profitable outcome."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Execution control"}),e.jsx(s.td,{children:"Recheck state and cost, preflight, submit through the configured path, and retain lifecycle evidence."}),e.jsx(s.td,{children:"Preflight or transport acceptance is not inclusion, finality, or profit."})]})]})]}),`
`,e.jsx(s.p,{children:`The design choice is deliberately explicit: each owner produces a typed fact
that the next owner must validate rather than a shared “profitable” flag that
silently accumulates assumptions.`}),`
`,e.jsxs(s.button,{type:"button",className:"jincubator-image-zoom","aria-label":"Open full-size image: Salus runtime architecture showing external state, configuration boundaries, state and persistence, the runtime hot path, and execution controls.",children:[e.jsx("img",{src:"/assets/work/salus/salus-runtime-architecture.png",alt:"Salus runtime architecture showing external state, configuration boundaries, state and persistence, the runtime hot path, and execution controls.",className:"jincubator-image-zoom__image"}),e.jsx(s.span,{className:"jincubator-image-zoom__indicator","aria-hidden":"true"})]}),`
`,e.jsxs(s.h2,{id:"evidence-and-limitations",children:["Evidence and limitations",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#evidence-and-limitations",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"The approved retained evidence records:"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Observation"}),e.jsx(s.th,{children:"Measured subject"}),e.jsx(s.th,{style:{textAlign:"right"},children:"Result"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Workspace structure"}),e.jsx(s.td,{children:"Cargo workspace members"}),e.jsx(s.td,{style:{textAlign:"right"},children:"13 Rust crates"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Walkthrough corpus"}),e.jsxs(s.td,{children:["Directory README, index, shared synthesis, and walkthroughs ",e.jsx(s.code,{children:"01"}),"–",e.jsx(s.code,{children:"13"})]}),e.jsx(s.td,{style:{textAlign:"right"},children:"16 files"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Ethereum retained graph snapshot"}),e.jsx(s.td,{children:"Token nodes"}),e.jsx(s.td,{style:{textAlign:"right"},children:"3,415"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Ethereum retained graph snapshot"}),e.jsx(s.td,{children:"Pool components"}),e.jsx(s.td,{style:{textAlign:"right"},children:"4,552"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Ethereum retained graph snapshot"}),e.jsx(s.td,{children:"Catalog routes with a maximum of four hops"}),e.jsx(s.td,{style:{textAlign:"right"},children:"2,401,108"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Base retained runtime run"}),e.jsx(s.td,{children:"Sustained route evaluations per second"}),e.jsx(s.td,{style:{textAlign:"right"},children:"16,537"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Base retained runtime run"}),e.jsx(s.td,{children:"Peak route evaluations per second"}),e.jsx(s.td,{style:{textAlign:"right"},children:"38,462"})]})]})]}),`
`,e.jsx(s.p,{children:`The graph figures describe one retained catalog snapshot. The Base rates
describe completed route evaluations divided by measured evaluation-service
time for the retained July 2026 workload. They are not end-to-end throughput,
opportunity, submission, execution, or profit rates.`}),`
`,e.jsx(s.p,{children:`The cited retained runs selected zero after-gas routes. No new live benchmark
was run for this migration.`}),`
`,e.jsx(s.p,{children:"Current limits are explicit:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"profitable after-gas production execution has not been established;"}),`
`,e.jsx(s.li,{children:"commercial validation remains ongoing;"}),`
`,e.jsx(s.li,{children:`retained observations do not establish opportunity recall or current live
performance;`}),`
`,e.jsx(s.li,{children:`catalog routes, evaluations, opportunities, selected routes, preflights,
submissions, transport acceptance, inclusion, finality, and realized profit
are different facts;`}),`
`,e.jsx(s.li,{children:`current Causality evidence is small and inconclusive, and its latest
collection is incomplete;`}),`
`,e.jsx(s.li,{children:`live adaptive fee policy, a gas canary, and complete finality/settlement
evidence remain absent or unauthorized; and`}),`
`,e.jsx(s.li,{children:`provider configuration, gas-bidding logic, thresholds, route-selection and
ranking details, opportunity identities or values, active strategy
parameters, vulnerabilities, and private evidence are excluded.`}),`
`]}),`
`,e.jsx(s.p,{children:`Salus does not require upfront trading principal for the modeled transaction
structure. It still requires infrastructure, RPC, operational, and gas
expenditure, and unsuccessful transactions may incur unreimbursed costs.`}),`
`,e.jsxs(s.h2,{id:"capture",children:["Capture",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#capture",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:`Capture begins with heterogeneous liquidity state and separates relatively
stable topology from block-scoped change. Deterministic graph construction and
route catalogs make the workload inspectable. Component-to-route indexes then
scope evaluation to affected work instead of rediscovering the entire topology
for every update.`}),`
`,e.jsx(s.p,{children:`Bounded queues carry typed work, while domain owners decide freshness,
coalescing, cancellation, retry, and shutdown. This matters because a perfectly
ordered queue can still deliver stale work, and a larger queue can preserve
more invalid work rather than more value.`}),`
`,e.jsx(s.p,{children:`The route evaluator uses exact inputs and explicit simulation coverage.
Retained performance evidence is scoped to its workload and measurement
boundary. Current state-change-aware ordering research remains passive and
test-only: its latest evidence did not meet the accepted performance,
liveness, and dataset gates, so it has no live policy or submission authority.`}),`
`,e.jsx(s.p,{children:"The reusable design questions are explained in:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"/architecture/liquidity-state-to-route-graphs",children:"From Liquidity State to Route Graphs"}),";"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"/architecture/backpressure-and-queue-ownership",children:"Backpressure and Queue Ownership"}),";"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"/architecture/protocol-simulation-boundaries",children:"Protocol Simulation Boundaries"}),"; and"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"/research/high-performance-route-evaluation",children:"High-Performance Route Evaluation"}),"."]}),`
`]}),`
`,e.jsxs(s.h2,{id:"causality",children:["Causality",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#causality",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:`When an opportunity changes, “the market moved” is not a sufficient
explanation. Salus distinguishes a route-family identity, an episode, an
observation, and its source state. Comparisons can then describe whether a
state change created, removed, revealed, preserved, or left an effect
unresolved without pretending that every associated change caused the
outcome.`}),`
`,e.jsx(s.p,{children:`The current implementation includes passive state-change facts, deterministic
comparison, leakage-aware offline evidence, typed abstention, and an
equal-budget comparison against the current ordering. The result is useful
negative engineering evidence: the small committed corpus did not support a
threshold or promotion, the latest collection was incomplete, and the current
default behavior remains unchanged.`}),`
`,e.jsx(s.p,{children:`That boundary is the important public lesson. A causal hypothesis earns
authority only after identity, comparison budget, evidence integrity,
attribution strength, performance, and liveness gates pass. Salus has not
reached that point, so no separate public Causality Research article is
created in this iteration.`}),`
`,e.jsxs(s.h2,{id:"execution",children:["Execution",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#execution",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:`Execution starts only after evaluation has produced a candidate. It preserves
the candidate’s source-state identity, recalculates the economic boundary,
checks freshness, performs the required preflight and private-path simulation,
and records what happened after handoff.`}),`
`,e.jsx(s.p,{children:"The current implementation includes:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"checked gas and transaction-cost arithmetic;"}),`
`,e.jsx(s.li,{children:`deterministic recommend, skip, or insufficient-evidence decisions in
offline/shadow form;`}),`
`,e.jsx(s.li,{children:"stale-state and canonicality checks before submission;"}),`
`,e.jsx(s.li,{children:`private submission with durable pre-broadcast evidence and bounded
reconciliation;`}),`
`,e.jsx(s.li,{children:"typed preflight, transport, expiry, receipt, and revert outcomes; and"}),`
`,e.jsx(s.li,{children:`restart behavior that separates a durable prior attempt from permission to
submit again.`}),`
`]}),`
`,e.jsx(s.p,{children:`The live adaptive fee policy is not implemented, and no live gas canary is
authorized. Preflight can reject a transaction that is already invalid at the
checked state, but it cannot guarantee later inclusion or success. Private
transport can reduce public exposure, but acceptance by that transport is not
proof of ordering, inclusion, finality, or realized profit. An included revert
may still consume gas.`}),`
`,e.jsxs(s.p,{children:[e.jsx(s.a,{href:"/architecture/trading-system-execution-pipelines",children:"Designing Evidence-Aware Trading-System Pipelines"}),`
owns the reusable architecture. Current provider configuration, bidding logic,
accounts, thresholds, replacement tactics, and exploitable failure behavior
remain private implementation material.`]}),`
`,e.jsxs(s.h2,{id:"technical-code-walkthrough",children:["Technical code walkthrough",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#technical-code-walkthrough",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:`The architecture overview shows the responsibilities a reader needs for a
first pass. This technical drill-down maps those responsibilities to the
reviewed codebase shape—runtime entry, state and read models, route evaluation,
execution handoff, persistence, and evidence—without turning the page into an
implementation manual or operational runbook.`}),`
`,e.jsx(s.p,{children:`It is a bounded technical snapshot. It does not establish live transport
availability, production readiness, inclusion, finality, or realized profit.`}),`
`,e.jsxs(s.button,{type:"button",className:"jincubator-image-zoom","aria-label":"Open full-size image: Salus code walkthrough showing public runtime ownership, route evaluation, execution handoff, persistence, and evidence boundaries.",children:[e.jsx("img",{src:"/assets/work/salus/salus-code-walkthrough.png",alt:"Salus code walkthrough showing public runtime ownership, route evaluation, execution handoff, persistence, and evidence boundaries.",className:"jincubator-image-zoom__image"}),e.jsx(s.span,{className:"jincubator-image-zoom__indicator","aria-hidden":"true"})]}),`
`,e.jsxs(s.h2,{id:"engineering-implementation-notes",children:["Engineering Implementation Notes",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#engineering-implementation-notes",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h3,{id:"overload-freshness-and-task-ownership-are-one-runtime-contract",children:["Overload, freshness, and task ownership are one runtime contract",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#overload-freshness-and-task-ownership-are-one-runtime-contract",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    pub"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" fn"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" new"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(config"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" QueueConfig"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:") "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"->"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" Self"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"        let"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" (sender, receiver) "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" mpsc"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"::"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"channel"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(config"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"."}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"capacity);"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"        let"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" metrics "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" Arc"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"::"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"new"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"Mutex"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"::"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"new"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"QueueMetrics"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"::"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"default"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"()));"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"        let"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" monitored_sender "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" MonitoredSender"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"            inner"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" sender,"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"            config,"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"            metrics"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" Arc"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"::"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"clone"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"&"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"metrics),"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"        };"})}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"        Self"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"            sender"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" monitored_sender,"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"            receiver,"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"            metrics,"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"        }"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    }"})}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    pub"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" fn"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" split"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"self"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:") "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"->"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ("}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"MonitoredSender"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"<"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"T"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:">, "}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"mpsc"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"::"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"Receiver"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"<"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"T"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:">, "}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"SharedQueueMetrics"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:") {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"        ("}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"self"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"."}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"sender, "}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"self"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"."}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"receiver, "}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"self"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"."}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"metrics)"})]})]})})}),`
`,e.jsxs(s.p,{children:[`The invariant is that overload and stage ownership must be explicit. A reusable
queue constructs a bounded Tokio MPSC channel from declared capacity, then
shares its metrics through `,e.jsx(s.code,{children:"Arc<Mutex<_>>"}),` while moving the sender and receiver
to their respective owners. Capacity, overflow policy, and counters therefore
travel with the transport instead of becoming an accidental property of a
worker loop.`]}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    pub"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"super"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:") "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"fn"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" new"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(worker_context"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" RouteEvaluationWorkerContext"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", block_limit"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" usize"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:") "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"->"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" Self"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"        let"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" keep_previous_blocks "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" worker_context"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"            ."}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"evaluation_controls"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"            ."}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"evaluate_routes_for_previous_blocks;"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"        let"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" queue_capacity "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" route_eval_queue_capacity"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(block_limit, keep_previous_blocks);"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"        let"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" queue"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" RuntimeQueue"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"<"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"QueuedRouteEvaluationRequest"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"> "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"            RuntimeQueue"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"::"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"new"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"QueueConfig"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"::"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"new"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'                "live_route_evaluation"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"                queue_capacity,"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"                QueueOverflowPolicy"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"::"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"BlockProducer"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"            ));"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"        let"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" (sender, "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"mut"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" receiver, _) "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" queue"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"split"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"();"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"        let"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" adapter "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" Arc"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"::"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"new"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"QueueStageAdapter"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"::"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"new"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"live_route_evaluation_adapter"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"));"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"        let"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" shared_state "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" Arc"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"::"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"new"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"StdMutex"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"::"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"new"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"RouteEvaluationSharedState"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"::"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"default"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"()));"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"        let"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" latest_block_number "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" Arc"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"::"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"new"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"AtomicU64"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"::"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"new"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"0"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"));"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"        let"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" adapter_task "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" Arc"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"::"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"clone"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"&"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"adapter);"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"        let"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" shared_state_task "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" Arc"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"::"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"clone"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"&"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"shared_state);"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"        let"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" latest_block_number_task "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" Arc"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"::"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"clone"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"&"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"latest_block_number);"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"        let"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" runtime_metrics "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" worker_context"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"."}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"runtime_metrics"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"clone"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"();"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"        let"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" runtime_metrics_task "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" runtime_metrics"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"clone"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"();"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"        let"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" handle "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" salus_runtime"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"::"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"spawn_named"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"live-route-evaluation"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"async"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" move"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"            loop"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"                let"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" queued_request "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" match"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" receiver"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"recv"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"()"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:".await"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"                    Some"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(request) "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"=>"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" request,"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"                    None"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" =>"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"                        adapter_task"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"record_closed_receive"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"();"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"                        break"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"                    }"})})]})})}),`
`,e.jsxs(s.p,{children:[`The live stage then combines that ownership with shared mutable bookkeeping, a
retained `,e.jsx(s.code,{children:"JoinHandle"}),", and an ",e.jsx(s.code,{children:"AtomicU64"}),` latest-block marker. Newer blocks are
published with atomic ordering, and workers use the marker to reject stale work
at their freshness boundary. The trade-off is deliberate: a bounded queue may
block a producer or discard work according to policy, but it makes pressure,
freshness, and stage lifecycle observable. None of those mechanisms makes a
catalog route an opportunity, a selected after-gas route, a submission, or a
commercial result.`]}),`
`,e.jsxs(s.h2,{id:"explore-salus",children:["Explore Salus",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#explore-salus",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"Choose the path that matches the question:"}),`
`,e.jsxs(s.h3,{id:"overview",children:["Overview",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#overview",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:[e.jsx(s.a,{href:"/salus/whitepaper",children:"Salus Whitepaper — Draft"}),":"]}),` a self-contained account
of the system proposition, use-case boundaries, retained evidence, and
future direction.`]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:[e.jsx(s.a,{href:"/salus/architecture",children:"Salus Architecture — Draft"}),":"]}),`
the detailed implementation companion covering runtime ownership, freshness,
guarded execution, and evidence contracts.`]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:[e.jsx(s.a,{href:"/salus",children:"Salus overview"}),":"]}),` the integrated account of what John built,
the Capture–Causality–Execution framing, retained evidence, and current
limits. You are here.`]}),`
`]}),`
`,e.jsxs(s.h3,{id:"research",children:["Research",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#research",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:[e.jsx(s.a,{href:"/research/high-performance-route-evaluation",children:"High-Performance Route Evaluation"}),":"]}),`
interpret the retained graph, catalog, and evaluation measurements without
treating throughput as execution or profit.`]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:[e.jsx(s.a,{href:"/research/deterministic-replay-as-engineering-evidence",children:"Deterministic Replay as Engineering Evidence"}),":"]}),`
understand what repeatability establishes and which historical facts remain
absent.`]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:[e.jsx(s.a,{href:"/research/trading-system-validation-evidence",children:"Trading-System Validation Evidence"}),":"]}),`
distinguish the claims supported by tests, replay, analytics, preflight,
submission, receipts, reconciliation, and settlement.`]}),`
`]}),`
`,e.jsxs(s.h3,{id:"architecture",children:["Architecture",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#architecture",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:[e.jsx(s.a,{href:"/architecture/trading-system-execution-pipelines",children:"Trading-System Execution Pipelines"}),":"]}),`
separate observed state, decisions, simulation, submission, and outcomes.`]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:[e.jsx(s.a,{href:"/architecture/liquidity-state-to-route-graphs",children:"Liquidity State to Route Graphs"}),":"]}),`
turn heterogeneous changing state into deterministic topology and catalogs.`]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:[e.jsx(s.a,{href:"/architecture/backpressure-and-queue-ownership",children:"Backpressure and Queue Ownership"}),":"]}),`
make capacity, freshness, overflow, retry, and shutdown explicit ownership
decisions.`]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:[e.jsx(s.a,{href:"/architecture/inspectable-trading-read-models",children:"Inspectable Trading Read Models"}),":"]}),`
accelerate recovery without mistaking current views for history or outcome
authority.`]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:[e.jsx(s.a,{href:"/architecture/protocol-simulation-boundaries",children:"Protocol Simulation Boundaries"}),":"]}),`
preserve coverage, provenance, mutation, and failure semantics across
heterogeneous protocols.`]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:[e.jsx(s.a,{href:"/architecture/capital-efficient-funding-models",children:"Capital-Efficient Funding Models"}),":"]}),`
compare funding authority, cost, repayment, and failure exposure without
implying free or profitable execution.`]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:[e.jsx(s.a,{href:"/architecture/evidence-grounded-ai-for-trading-systems",children:"Evidence-Grounded AI for Trading Systems"}),":"]}),`
bound predictive and investigative assistance outside deterministic safety
and execution authority.`]}),`
`]}),`
`,e.jsxs(s.h3,{id:"writing",children:["Writing",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#writing",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:[e.jsx(s.a,{href:"/writing/mapping-liquidity-to-routes-at-scale",children:"Mapping Liquidity to Routes at Scale"}),":"]}),`
follow one changed liquidity component through affected-route recall, queue
policy, retained evaluator evidence, and the boundary before profit.`]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:[e.jsx(s.a,{href:"/writing/solving-arbitrage-market-making",children:"Solving, Arbitrage & Market Making"}),":"]}),`
follow the longer engineering journey from protocol research to a reviewable
end-to-end system.`]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:[e.jsx(s.a,{href:"/writing/speed-wasnt-the-problem",children:"I Built a Fast Arbitrage Engine. Speed Wasn't the Problem."}),":"]}),`
examine how successful infrastructure work exposed a strategy and commercial
validation problem, and why evidence now precedes further optimization.`]}),`
`]}),`
`,e.jsxs(s.h3,{id:"historical-publications",children:["Historical publications",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#historical-publications",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Historical Version 1:"}),` the
`,e.jsx("a",{href:"/images/salus_technical_deep_dive.pdf",children:"Salus Technical Deep Dive (PDF)"}),`
and
`,e.jsx("a",{href:"/images/salus_engineering_case_study.pdf",children:"Salus Engineering Case Study (PDF)"}),`
are immutable Historical Version 1.0 publications from July 2026. Their
older metrics and roadmap language are not current claim authority.`]}),`
`]}),`
`,e.jsxs(s.p,{children:["For broader context, visit ",e.jsx(s.a,{href:"https://portfolio.johnwhitton.com/",children:"John Whitton’s engineering portfolio"}),`
or `,e.jsx(s.a,{href:"mailto:john@johnwhitton.com",children:"contact John"}),"."]}),`
`,e.jsx(s.p,{children:`Current implementation truth remains in the Salus repository. Because that
repository is private, this page records the immutable reviewed revision but
does not present it as a visitor destination or copy its living documentation.`})]})}function l(i={}){const{wrapper:s}={...r(),...i.components};return s?e.jsx(s,{...i,children:e.jsx(n,{...i})}):n(i)}export{l as default,t as frontmatter};
