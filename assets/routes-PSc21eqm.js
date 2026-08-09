import{u as s,j as e}from"./index-wW6orVgR.js";const i={title:"Route Evaluation — Public Summary",description:"Definitions and public architecture boundaries for Salus candidate-route generation and evaluation."};function a(n){const t={a:"a",blockquote:"blockquote",div:"div",h1:"h1",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.blockquote,{"data-historical-context":"true",children:e.jsxs(t.p,{children:["Historical page retained for compatibility. It may contain superseded assumptions, incomplete plans, or outdated links and is not current canonical content. See the ",e.jsx(t.a,{href:"/archive",children:"Archive"})," for context."]})}),`
`,e.jsx(t.header,{children:e.jsxs(t.h1,{id:"route-evaluation",children:["Route Evaluation",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#route-evaluation",children:e.jsx(t.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(t.p,{children:"This implemented research component models tokens and pool components as a graph, generates bounded candidate paths, and evaluates affected subsets against observed state."}),`
`,e.jsx(t.p,{children:"The terms are deliberately separate:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Generated route:"})," a candidate graph path."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Evaluated route:"})," one assessment under a particular state and model."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Filtered opportunity:"})," a candidate that passes named research gates."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Simulated profit:"})," a model result, not settled value."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Submitted or included execution:"})," a transaction lifecycle event."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Realized after-gas profit:"})," settled economic value after costs and failures."]}),`
`]}),`
`,e.jsx(t.p,{children:"Flash liquidity can remove the need to pre-fund trading principal. Infrastructure, data/RPC, operational, and transaction-gas costs still exist; reverted, unsuccessful, or non-included attempts may leave unreimbursed costs."}),`
`,e.jsx(t.p,{children:"Current route-selection rules, thresholds, opportunity values, and execution policy remain outside the public summary."}),`
`,e.jsxs(t.p,{children:["See the ",e.jsx(t.a,{href:"/work/salus",children:"Salus project overview"})," for retained results and limitations."]})]})}function o(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(a,{...n})}):a(n)}export{o as default,i as frontmatter};
