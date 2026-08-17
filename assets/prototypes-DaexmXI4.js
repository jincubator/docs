import{u as a,j as e}from"./index-j4tXYcFA.js";const r={title:"Intent Systems Prototypes",description:"Bounded experiments in mandates, authority, solver coordination, resource locking, execution, and settlement."};function i(t){const n={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...a(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,e.jsx(n.header,{children:e.jsxs(n.h1,{id:"intent-systems-prototypes",children:["Intent Systems Prototypes",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#intent-systems-prototypes",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(n.p,{children:"Intent Systems Prototypes is a bounded record of experiments in turning a user's desired outcome into an authorized, constrained execution that another actor can coordinate and perform."}),`
`,e.jsxs(n.h2,{id:"mandates-as-executable-constraints",children:["Mandates as executable constraints",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#mandates-as-executable-constraints",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"A mandate represents the conditions under which a sponsor is willing to let another actor act on committed resources. It is more precise than a plain-language goal but less prescriptive than a fixed transaction path."}),`
`,e.jsx(n.p,{children:"In the strongest retained model, the mandate binds details such as:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"the recipient and asset expected from the fill;"}),`
`,e.jsx(n.li,{children:"an expiry that limits when the request remains valid;"}),`
`,e.jsx(n.li,{children:"a minimum acceptable amount;"}),`
`,e.jsx(n.li,{children:"fee-sensitive amount parameters;"}),`
`,e.jsx(n.li,{children:"a salt used in the signed data; and"}),`
`,e.jsx(n.li,{children:"the chain and contract context in which the authorization applies."}),`
`]}),`
`,e.jsx(n.p,{children:"The mandate is attached to a resource commitment and signed as structured data. A solver can choose a route, but it cannot silently change the signed result boundary. An arbiter derives hashes from the commitment and mandate, rejects an expired or already-used claim, derives the permitted amounts, checks the fill, records the disposition, and invokes the settlement-specific directive."}),`
`,e.jsx(n.p,{children:"This distinction is the core design idea. The mandate says what an acceptable outcome is. The solver payload says how a candidate executor proposes to reach it. Keeping those two objects separate lets routing evolve without changing the sponsor's authority."}),`
`,e.jsx(n.p,{children:"The prototypes do not establish one final mandate schema for every use case. General mandate types, hook-specific intent types, resource-lock data, and limit-order conditions coexist. The useful result is the boundary they reveal, not a claim that all of those models have converged."}),`
`,e.jsxs(n.h2,{id:"authority-and-constraint-boundaries",children:["Authority and constraint boundaries",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#authority-and-constraint-boundaries",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Intent execution distributes responsibility across actors and contracts. The retained work explored the following boundaries:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Sponsor authority."})," The resource owner or sponsor authorizes a commitment and its conditions. A solver's ability to propose calls does not give it unrestricted control of the sponsor's assets."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Allocator authorization."})," An allocator protects the integrity of a resource lock and helps prevent the same committed balance from being promised more than once. The retained allocator path is incomplete, so this remains a design and prototype boundary."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Arbiter judgment."})," An arbiter checks mandate expiry, hashes, disposition, amount rules, and fill conditions before processing a claim. The base directive-processing extension point is not a complete settlement implementation."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Solver discretion."})," A solver chooses and encodes an execution path within the mandate. That freedom is security-sensitive: targets, calldata, value, token flow, and failure behavior must be constrained by the caller and settlement context."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Protocol entrypoint."})," Hook callbacks, limit-order interactions, and destination-settler adapters each impose their own caller and state assumptions. Passing one local test does not validate all entrypoints."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Resource custody."})," Resource locks and maker-authorized funds can make assets available to a valid execution path. They do not remove infrastructure, RPC, operating, or transaction-gas costs, and they do not by themselves prove correct settlement."]}),`
`]}),`
`,e.jsx(n.p,{children:"Replay protection appears in more than one place: signed nonces, derived claim hashes, recorded fill or cancellation dispositions, and hook storage. The layers are not interchangeable. A system must define which state is authoritative, when it becomes final, how it is cleared, and what happens after partial failure."}),`
`,e.jsxs(n.h2,{id:"intent-lifecycle",children:["Intent lifecycle",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#intent-lifecycle",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"The experiments support a partial lifecycle:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"express outcome and constraints"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"  -> commit or authorize resources"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"  -> expose the request to an executor"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"  -> find and simulate a route"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"  -> submit a bounded execution payload"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"  -> verify authority, time, replay, and amounts"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"  -> execute atomically or revert"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"  -> transfer or claim the result"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"  -> record disposition and reconcile"})})]})})}),`
`,e.jsx(n.p,{children:"Several stages have concrete source:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"structured intent, mandate, compact, claim, call, and swap types;"}),`
`,e.jsx(n.li,{children:"signed commitment and allocator-signature surfaces;"}),`
`,e.jsx(n.li,{children:"arbiter fill, cancellation, quotation, hash derivation, and disposition logic;"}),`
`,e.jsx(n.li,{children:"a hook path that stores a delayed swap request and accepts a solver payload;"}),`
`,e.jsx(n.li,{children:"flash and multi-protocol routing experiments;"}),`
`,e.jsx(n.li,{children:"limit-order interactions with oracle-calculated conditions and resource handling; and"}),`
`,e.jsx(n.li,{children:"local Solidity tests around selected contracts and flows."}),`
`]}),`
`,e.jsx(n.p,{children:"Other stages are deliberately incomplete. The general intent manager and solver abstraction contain placeholder behavior. The hook's create and solve paths exist, while later execute, sweep, cleanup, and recovery behavior is unfinished. The destination adapter delegates into arbiter logic but does not complete every settlement directive. Solver discovery, auctioning, reputation, and off-chain coordination are not implemented as a coherent network."}),`
`,e.jsx(n.p,{children:"That mixed state matters editorially. The prototypes show how lifecycle pieces can meet at explicit boundaries. They do not show a completed end-to-end service in which every request can be discovered, authorized, executed, settled, recovered, and reconciled."}),`
`,e.jsxs(n.h2,{id:"coordination-and-execution-responsibilities",children:["Coordination and execution responsibilities",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#coordination-and-execution-responsibilities",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"The coordinator and executor answer different questions."}),`
`,e.jsx(n.p,{children:"A coordinator determines whether a request is eligible to proceed: is the authorization valid, are the resources committed, is the request still live, has it already been consumed, and which actor may attempt it? Depending on the design, those responsibilities may be split among an allocator, arbiter, relayer, hook, order protocol, or off-chain service."}),`
`,e.jsx(n.p,{children:"An executor determines how to satisfy the request: which venues to use, which calls to make, in what order, and whether the simulated result remains inside the mandate. The executor must then submit a payload through an entrypoint that can enforce the relevant authority and settlement invariants."}),`
`,e.jsx(n.p,{children:"The prototypes tested both sides without resolving them into one production topology:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"arbiter logic made expiry, claim identity, disposition, amount derivation, and fill transfer explicit;"}),`
`,e.jsx(n.li,{children:"resource-lock work explored how committed assets and allocator authorization could support a claim;"}),`
`,e.jsx(n.li,{children:"delayed-hook work explored storing an intent during a swap callback and allowing a later solver path;"}),`
`,e.jsx(n.li,{children:"flash-routing work explored an execution backend spanning protocol-specific callbacks;"}),`
`,e.jsx(n.li,{children:"limit-order work explored maker-authorized assets, post-interactions, oracle conditions, and a swap executor; and"}),`
`,e.jsx(n.li,{children:"adapter work explored a standard destination-settler entrypoint."}),`
`]}),`
`,e.jsx(n.p,{children:"Atomic reversion is helpful but not sufficient. A failed call can roll back on-chain state while still consuming RPC, infrastructure, and gas expenditure. A successful local transaction can still leave unanswered questions about off-chain request delivery, conflicting executors, monitoring, recovery, finality, and operational ownership."}),`
`,e.jsxs(n.h2,{id:"prototype-scope",children:["Prototype scope",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#prototype-scope",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"The retained public history supports a direct, commit-scoped account of John's work on the prototype repositories. It includes Solidity design and implementation across arbiter mechanics, mandate and intent types, hook experiments, routing integrations, resource management, limit-order interactions, and tests. The commits and source trees provide stronger evidence than roadmap prose alone, but the work remains mixed in maturity."}),`
`,e.jsx(n.p,{children:"What the prototypes establish:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"mandates can bind outcome constraints separately from solver-selected calls;"}),`
`,e.jsx(n.li,{children:"commitment, authorization, arbitration, and execution are distinct trust boundaries;"}),`
`,e.jsx(n.li,{children:"claim hashes and dispositions can make replay state explicit;"}),`
`,e.jsx(n.li,{children:"hook and order-protocol entrypoints can carry intent-specific execution data;"}),`
`,e.jsx(n.li,{children:"locked or maker-authorized resources can be made available to a bounded atomic flow; and"}),`
`,e.jsx(n.li,{children:"partial implementations reveal concrete settlement, recovery, and coordination gaps."}),`
`]}),`
`,e.jsx(n.p,{children:"What they do not establish:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"one canonical intent model across the experiments;"}),`
`,e.jsx(n.li,{children:"a deployed solver marketplace or reliable discovery network;"}),`
`,e.jsx(n.li,{children:"completed allocator, directive, hook cleanup, fallback, and recovery behavior;"}),`
`,e.jsx(n.li,{children:"end-to-end cross-chain settlement and finality;"}),`
`,e.jsx(n.li,{children:"validated protection against arbitrary or malicious solver payloads;"}),`
`,e.jsx(n.li,{children:"current production deployment, independent security audit, customer use, commercial validation, sustained volume, or profitable operation."}),`
`]}),`
`,e.jsx(n.p,{children:"No new build, live deployment, fork test, or benchmark was run for this editorial rewrite. Technical statements are limited to the retained committed sources and the existing source review."}),`
`,e.jsxs(n.h2,{id:"experimental-limitations",children:["Experimental limitations",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#experimental-limitations",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The codebase combines active mechanics, placeholders, disabled tests, demonstrations, and future-work notes. Their presence in one repository does not give them equal maturity."}),`
`,e.jsx(n.li,{children:"General intent and hook-specific intent models overlap and have not been shown to form one canonical lifecycle."}),`
`,e.jsx(n.li,{children:"Base settlement directive handling is incomplete; an adapter or arbiter entrypoint is not a complete settlement proof."}),`
`,e.jsx(n.li,{children:"Solver payloads are powerful and security-sensitive. Final authorization of call targets, calldata, value, token custody, and recipient behavior remains unresolved."}),`
`,e.jsx(n.li,{children:"Hook execute, sweep, cleanup, fallback, and recovery paths are unfinished in the retained evidence."}),`
`,e.jsx(n.li,{children:"The allocator path and some signature/domain behavior remain prototype-grade."}),`
`,e.jsx(n.li,{children:"Flash and external execution integrations have incomplete or disabled validation in the retained snapshot."}),`
`,e.jsx(n.li,{children:"Off-chain discovery, auctioning, reputation, conflict resolution, monitoring, incident recovery, and reconciliation are not evidenced as one operated system."}),`
`,e.jsx(n.li,{children:"Third-party protocols and libraries retain their own licenses, assumptions, audits, and risks; none transfer a maturity guarantee to this work."}),`
`,e.jsx(n.li,{children:"No production, customer, partner, audit, revenue, profitability, or security-outcome claim is made."}),`
`]}),`
`,e.jsxs(n.h2,{id:"related-research-and-architecture",children:["Related research and architecture",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#related-research-and-architecture",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Read ",e.jsx(n.a,{href:"/research/defi-protocol-engineering/intro",children:"Intent-Based Execution"})," for the evidence question behind authority, solver participation, and execution."]}),`
`,e.jsxs(n.li,{children:["Read ",e.jsx(n.a,{href:"/architecture/defi-systems/intents",children:"Intent Execution Boundaries"})," for the reusable lifecycle, trust, and failure model."]}),`
`]}),`
`,e.jsx(n.p,{children:"Those pages answer different reader questions. Research evaluates what the evidence supports. Architecture describes reusable boundaries. This Work page remains the account of what the prototypes actually explored."})]})}function o(t={}){const{wrapper:n}={...a(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{o as default,r as frontmatter};
