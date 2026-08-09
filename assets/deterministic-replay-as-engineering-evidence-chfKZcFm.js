import{u as s,j as e}from"./index-BdRdoMvu.js";const t={title:"Deterministic Replay as Engineering Evidence",description:"What repeatable replay results prove, which inputs must be retained, and why replay does not establish live execution."};function a(i){const n={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[`
`,e.jsx(n.header,{children:e.jsxs(n.h1,{id:"deterministic-replay-as-engineering-evidence",children:["Deterministic Replay as Engineering Evidence",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#deterministic-replay-as-engineering-evidence",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(n.p,{children:"Replay can make an engineering result repeatable, but only within the inputs, state, code, and external dependencies actually retained. This research asks what a deterministic replay can legitimately prove."}),`
`,e.jsxs(n.h2,{id:"the-question",children:["The question",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#the-question",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"When does deterministic replay constitute credible engineering evidence?"}),`
`,e.jsx(n.p,{children:"A replay is valuable because it turns an observed or constructed state into a repeatable input for evaluation, regression testing, and dry-run materialization. The same command can be run after a code change and its outputs compared. That does not mean the replay reconstructs everything that happened in a live market or proves what would have happened on-chain."}),`
`,e.jsx(n.p,{children:"The distinction matters most when a replay result is used to support a claim. “This evaluator returns the same result for this retained input” is narrower than “this was the market state,” which is narrower than “this route could have been included,” which is narrower again than “this execution would have produced realized profit.”"}),`
`,e.jsxs(n.h2,{id:"method",children:["Method",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#method",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:`The investigation reviewed the current Salus replay walkthrough and the
implementation surfaces it described at the source revision reviewed on
2026-07-29. It compared seven input and output boundaries:`}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"code revision;"}),`
`,e.jsx(n.li,{children:"replay payload;"}),`
`,e.jsx(n.li,{children:"configuration and blacklists;"}),`
`,e.jsx(n.li,{children:"persisted route, component, and token read models;"}),`
`,e.jsx(n.li,{children:"pricing and gas inputs;"}),`
`,e.jsx(n.li,{children:"generated evaluation or dry-run artifacts; and"}),`
`,e.jsx(n.li,{children:"live execution evidence that replay does not produce."}),`
`]}),`
`,e.jsx(n.p,{children:"No new live benchmark, historical reconstruction, transaction, or execution test was run. The method is a source-bounded evidence analysis, not an empirical comparison of multiple replay systems."}),`
`,e.jsxs(n.h2,{id:"evidence-boundary",children:["Evidence boundary",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#evidence-boundary",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Current replay is a family of bounded workflows rather than a single self-contained historical runtime. It can rebuild route read models from a fixture, evaluate one or more retained batches, construct local dry-run candidates, and feed a non-submitting analytics path."}),`
`,e.jsx(n.p,{children:"The retained replay payload is only one part of the input. Evaluation may also depend on current database read models, token and component metadata, route summaries and legs, configuration, blacklists, gas defaults, and code behavior. Unless those dependencies are pinned and retained together, repeating the JSON payload alone does not reproduce the original decision environment."}),`
`,e.jsx(n.p,{children:"Two replay forms expose different limits:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"reserve-snapshot replay supports a bounded approximation for retained fixtures;"}),`
`,e.jsx(n.li,{children:"decoded protocol-state replay exercises protocol-specific simulators and rejects a route when only some legs have decoded state."}),`
`]}),`
`,e.jsx(n.p,{children:"Both forms can support regression evidence. Neither becomes canonical live-state authority merely because it carries a block number. Strong historical claims also require block identity, source provenance, completeness, ordering, relevant configuration, and an explanation of how mutable external data was captured."}),`
`,e.jsxs(n.h2,{id:"findings",children:["Findings",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#findings",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Replay supports four useful classes of claim."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Deterministic transformation."})," Given the same complete declared inputs and code, a pipeline can demonstrate that it derives the same normalized state, route evaluation, classification, or output artifact."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Regression detection."})," A changed output can expose a code, schema, configuration, or dependency change. The comparison is strongest when the producer, inputs, expected output, and allowed tolerances are explicit."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Boundary validation."})," Replay can confirm that malformed, unsupported, incomplete, or stale inputs fail in the expected way. Negative results are evidence when they remain visible."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Local candidate construction."})," Dry-run workflows can test whether an evaluation artifact can become a structurally valid execution candidate without signing, preflight, broadcast, receipt, or token-flow effects."]}),`
`,e.jsx(n.p,{children:`Case-specific point-in-time reconstruction can also explain why one observed
decision changed when selected inputs changed. That is bounded causal
evidence, not a reusable canonical-chain replay backend: it remains limited by
the retained route universe, source identity, ordering, configuration, and
unavailable state.`}),`
`,e.jsx(n.p,{children:"Replay does not by itself establish:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"that the retained input was complete or canonical live state;"}),`
`,e.jsx(n.li,{children:"that route catalogs and market state described the same historical instant;"}),`
`,e.jsx(n.li,{children:"that a quote survived later ordering, latency, or liquidity changes;"}),`
`,e.jsx(n.li,{children:"that calldata would pass RPC preflight;"}),`
`,e.jsx(n.li,{children:"that a transaction was signed, submitted, included, or finalized; or"}),`
`,e.jsx(n.li,{children:"that receipt gas, token flows, funding, and settlement reconciled to realized profit."}),`
`]}),`
`,e.jsxs(n.h2,{id:"what-must-be-retained",children:["What must be retained",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#what-must-be-retained",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"A reviewable replay package should identify:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"producer and schema version;"}),`
`,e.jsx(n.li,{children:"code revision;"}),`
`,e.jsx(n.li,{children:"source chain and block identity;"}),`
`,e.jsx(n.li,{children:"state authority and completeness;"}),`
`,e.jsx(n.li,{children:"route-universe identity;"}),`
`,e.jsx(n.li,{children:"configuration and policy inputs that affect the result;"}),`
`,e.jsx(n.li,{children:"token, component, pricing, gas, and funding inputs;"}),`
`,e.jsx(n.li,{children:"expected outputs and comparison rules; and"}),`
`,e.jsx(n.li,{children:"unavailable facts that prevent a stronger interpretation."}),`
`]}),`
`,e.jsx(n.p,{children:"Content addressing can prove that retained bytes did not change. It cannot prove that those bytes were complete, authoritative, or independently obtained. Provenance and evidence class must therefore travel alongside hashes."}),`
`,e.jsxs(n.h2,{id:"limitations",children:["Limitations",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#limitations",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"This research uses one evolving implementation as its primary case."}),`
`,e.jsx(n.li,{children:"It does not compare replay products or establish a universal storage format."}),`
`,e.jsx(n.li,{children:"Several current replay paths still join retained payloads with mutable storage or configuration."}),`
`,e.jsx(n.li,{children:"A deterministic result can remain self-referential when the same code produces both the subject and expected output."}),`
`,e.jsx(n.li,{children:"Historical route truth, state root, transaction ordering, reorg handling, and finality are not inferred when they are absent."}),`
`,e.jsx(n.li,{children:"No live result is converted into replay evidence by this page."}),`
`]}),`
`,e.jsxs(n.h2,{id:"implications",children:["Implications",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#implications",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Teams should state replay claims in the form “fixed inputs X under revision Y produced result Z through boundary B.” If an input was not retained, name it as unavailable rather than allowing a default to impersonate history."}),`
`,e.jsx(n.p,{children:"Replay should sit inside a validation portfolio. Unit tests prove local invariants; replay proves bounded transformation; independent comparisons can corroborate selected fields; preflight tests a later state view; submission and receipt evidence establish operational progress; reconciliation establishes financial outcome. No layer should inherit the meaning of the next."}),`
`,e.jsxs(n.h2,{id:"engineering-implementation-notes",children:["Engineering Implementation Notes",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#engineering-implementation-notes",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h3,{id:"replay-begins-with-a-typed-source-identity",children:["Replay begins with a typed source identity",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#replay-begins-with-a-typed-source-identity",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"pub"}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" struct"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" SourceBlockIdentityV1"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    pub"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" schema_version"}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" u16"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    pub"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" chain"}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" ChainName"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    pub"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" chain_id"}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" u64"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    pub"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" block_number"}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" u64"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    pub"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" block_hash"}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" String"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    pub"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" parent_hash"}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" Option"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"<"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"String"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:">,"})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    pub"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" block_timestamp_unix_seconds"}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" Option"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"<"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"i64"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:">,"})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    pub"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" state_root"}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" SourceBlockStateRootV1"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})})}),`
`,e.jsx(n.p,{children:`Replay input is not represented as an unqualified block number. The identity
binds chain, height, hash, parent, time, and state-root availability so a
replay result can state what it was evaluated against and refuse a weaker
substitute.`}),`
`,e.jsxs(n.h2,{id:"related-work-and-architecture",children:["Related work and architecture",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#related-work-and-architecture",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"/work/salus",children:"Salus"})," provides the bounded Work context."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"/research/trading-system-validation-evidence",children:"What Trading-System Validation Evidence Can Prove"})," provides the evidence taxonomy applied here."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"/research/high-performance-route-evaluation",children:"High-Performance Route Evaluation"})," defines the measured subjects that replay must not conflate."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"/architecture/trading-system-execution-pipelines",children:"Designing Evidence-Aware Trading-System Pipelines"})," places replay inside a larger observed-state-to-outcome sequence."]}),`
`]})]})}function l(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(a,{...i})}):a(i)}export{l as default,t as frontmatter};
