import{u as a,j as e}from"./index-j4tXYcFA.js";const s={title:"Stablecoin Intents — Proof-Backed Settlement",description:"A bounded case study of stablecoin intent authorization, solver-funded destination execution, proving, and reward settlement."};function i(t){const n={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",ul:"ul",...a(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,e.jsx(n.header,{children:e.jsxs(n.h1,{id:"stablecoin-intents",children:["Stablecoin Intents",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#stablecoin-intents",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(n.p,{children:"Stablecoin Intents is a bounded case study in coordinating source-chain rewards, destination-chain fulfillment, and proof-backed settlement across a multi-chain system."}),`
`,e.jsxs(n.h2,{id:"problem-and-constraints",children:["Problem and constraints",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#problem-and-constraints",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Moving a stablecoin outcome across chains is not one atomic action. A user authorizes a source-chain reward, a solver or filler advances destination liquidity, a destination contract records what happened, a prover carries acceptable evidence back, and a source contract decides whether the reward may be withdrawn or refunded."}),`
`,e.jsx(n.p,{children:"That creates several distinct questions:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"What exact outcome did the user authorize?"}),`
`,e.jsx(n.li,{children:"Who is allowed to fund, fulfill, prove, withdraw, or refund?"}),`
`,e.jsx(n.li,{children:"Which chain owns each fact?"}),`
`,e.jsx(n.li,{children:"What evidence connects destination fulfillment to source-chain payment?"}),`
`,e.jsx(n.li,{children:"How are expiry, partial funding, replay, claimant identity, and failed proving handled?"}),`
`,e.jsx(n.li,{children:"Which party bears liquidity, gas, finality, and inventory risk while the chains disagree in time?"}),`
`]}),`
`,e.jsx(n.p,{children:"An intent makes the requested outcome portable, but it does not make trust or settlement disappear. The system still needs durable identities, bounded call targets, explicit deadlines, exact token amounts, proof finality, and a source-side authority that will not release funds on an ambiguous claim."}),`
`,e.jsxs(n.h2,{id:"intent-and-settlement-flow",children:["Intent and settlement flow",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#intent-and-settlement-flow",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"A generic stablecoin intent has two halves. The route names the destination chain, desired token outcome, recipient calls, and execution constraints. The reward names the source-chain assets, creator, deadline, and approved prover."}),`
`,e.jsx(n.p,{children:"The reviewed flow is:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"The user publishes an intent and funds its source-chain reward."}),`
`,e.jsx(n.li,{children:"The source contract derives a stable intent identity and associates the reward with a deterministic escrow boundary."}),`
`,e.jsx(n.li,{children:"A solver observes the intent, checks supported chains, targets, selectors, expiry, available destination liquidity, and basic economics."}),`
`,e.jsx(n.li,{children:"The solver advances destination assets and invokes the destination fulfillment boundary."}),`
`,e.jsx(n.li,{children:"The destination contract executes the authorized calls and records the claimant for the intent."}),`
`,e.jsx(n.li,{children:"A prover carries acceptable fulfillment evidence to the source-side proof state."}),`
`,e.jsx(n.li,{children:"The source contract verifies the claimant and destination before releasing the reward."}),`
`,e.jsx(n.li,{children:"If the deadline passes without valid proof, the creator follows a separate refund path."}),`
`]}),`
`,e.jsxs(n.h3,{id:"proof-backed-reward-release",children:["Proof-backed reward release",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#proof-backed-reward-release",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"The key design principle is that destination execution and source payment are separate facts. A solver should not receive the source reward merely because it submitted a transaction or reported success."}),`
`,e.jsx(n.p,{children:"The reviewed material distinguishes two proof models:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"a message-based path in which an approved cross-chain messaging system delivers the destination claim to a source-side prover; and"}),`
`,e.jsx(n.li,{children:"a storage-proof path that verifies a ladder of settlement-chain state, destination world state, destination account state, and the fulfilled-intent storage slot before recording the claimant."}),`
`]}),`
`,e.jsx(n.p,{children:"Those models have different trust, finality, configuration, and failure assumptions. Treating them as interchangeable would hide the real security boundary."}),`
`,e.jsxs(n.h2,{id:"contribution-and-scope",children:["Contribution and scope",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#contribution-and-scope",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"The approved evidence supports two bounded dimensions of John's work."}),`
`,e.jsx(n.p,{children:"First, John led a team of eight engineers from 2023 through 2025 working on stablecoin, settlement, and intent-based payments infrastructure. The retained leadership material supports hiring and mentoring, architecture roadmaps, planning, and delivery. It does not supply an approved public quantitative business outcome, so this draft makes none."}),`
`,e.jsx(n.p,{children:"Second, the documented architecture contribution focuses on the proving boundary between destination fulfillment and source reward release. The reviewed local design decomposes a storage-proof ladder into:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"settlement-chain state"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"  -> destination world state"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"  -> destination account and fulfilled-intent storage"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"  -> proven claimant"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"  -> source reward withdrawal"})})]})})}),`
`,e.jsx(n.p,{children:"John's architecture work made the trust differences among messaging, storage proofs, EVM storage, destination execution, solver services, and reward escrow explicit. The evidence also records a detailed source-to-destination walkthrough and separates current public architecture from an older local solver shape and a non-production proof branch."}),`
`,e.jsx(n.p,{children:"The page does not claim that John personally implemented every source, destination, solver, messaging, or escrow component. Exact design authority, code ownership, collaborators, and production operating responsibility remain John-owned review items."}),`
`,e.jsxs(n.h2,{id:"trust-and-security-boundaries",children:["Trust and security boundaries",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#trust-and-security-boundaries",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h3,{id:"authorization",children:["Authorization",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#authorization",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"An intent must bind creator, chains, assets, amounts, target calls, deadline, and prover. Solver flexibility is bounded by that mandate; it is not authority to invent a different outcome."}),`
`,e.jsxs(n.h3,{id:"escrow-and-reward-state",children:["Escrow and reward state",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#escrow-and-reward-state",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Funding, withdrawal, and refund are separate transitions. A deterministic vault or equivalent escrow boundary must not release the same reward to both claimant and creator, and partial or late funding must not silently change the authorized intent."}),`
`,e.jsxs(n.h3,{id:"destination-execution",children:["Destination execution",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#destination-execution",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"The destination boundary must validate the intent identity, deadline, target calls, assets, and claimant before recording fulfillment. A transaction being included is not enough if the requested calls or amounts did not complete."}),`
`,e.jsxs(n.h3,{id:"proving",children:["Proving",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#proving",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"A message-based prover depends on its mailbox, sender allow-list, security module, relayer path, and finality policy. A storage prover depends on block or state-root authority, settlement configuration, account-proof correctness, storage layout, mapping-slot construction, and chain-specific finality. Either model can fail through stale configuration or incorrect claimant binding."}),`
`,e.jsxs(n.h3,{id:"solver-operations-and-liquidity",children:["Solver operations and liquidity",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#solver-operations-and-liquidity",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"The solver advances destination liquidity before receiving the source reward. It therefore bears inventory, exchange-rate, gas, proof-latency, and failure risk. Source-present queues, persistence, health checks, and cloud integrations describe an implementation shape but do not prove the production topology or its reliability."}),`
`,e.jsxs(n.h3,{id:"evm-and-non-evm-state",children:["EVM and non-EVM state",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#evm-and-non-evm-state",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Similar intent lifecycles can use different state primitives. An EVM mapping, account proof, and call sequence cannot be projected unchanged onto another runtime's account and program model. Interoperability requires preserving the lifecycle semantics while adapting the proof and authorization mechanisms."}),`
`,e.jsxs(n.h2,{id:"status-and-limitations",children:["Status and limitations",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#status-and-limitations",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Publicly documented intent-routing concepts and reviewed local contract paths support the architecture described here."}),`
`,e.jsx(n.li,{children:"The storage-proof branch is local, bounded, and non-production; shipped or current deployment status was not established."}),`
`,e.jsx(n.li,{children:"The current public contract naming and an older local solver interface differ. This draft describes the stable lifecycle rather than presenting either snapshot as complete production topology."}),`
`,e.jsx(n.li,{children:"Current deployed addresses, prover set, solver fleet, indexers, cloud services, dashboards, service levels, and operating ownership were not validated."}),`
`,e.jsx(n.li,{children:"No partner, customer, client, endorsement, production-volume, performance, revenue, adoption, or commercial-success claim is made."}),`
`,e.jsx(n.li,{children:"No approved quantitative outcome is available. Leadership scope is stated separately from business outcome."}),`
`,e.jsx(n.li,{children:"No private solver detail, source-company identity, local path, screenshot, or diagram is included."}),`
`]}),`
`,e.jsxs(n.h2,{id:"related-research-and-architecture",children:["Related research and architecture",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#related-research-and-architecture",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Continue to ",e.jsx(n.a,{href:"/research/defi-protocol-engineering/intro",children:"Intent-Based Execution"})," for mandate, solver, authorization, and evidence distinctions."]}),`
`,e.jsxs(n.li,{children:["Apply ",e.jsx(n.a,{href:"/architecture/defi-systems/intents",children:"Intent Execution Boundaries"})," when separating intent creation, solving, settlement, and proof."]}),`
`,e.jsxs(n.li,{children:["Compare the financial evidence model in ",e.jsx(n.a,{href:"/research/financial-infrastructure/settlement/intro",children:"Durable Financial Settlement"}),"."]}),`
`,e.jsxs(n.li,{children:["See ",e.jsx(n.a,{href:"/architecture/financial-infrastructure/settlement",children:"Durable Settlement Control Planes"})," for authority, workflow, finality, and reconciliation patterns."]}),`
`]})]})}function o(t={}){const{wrapper:n}={...a(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{o as default,s as frontmatter};
