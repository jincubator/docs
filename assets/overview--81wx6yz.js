import{u as r,j as e}from"./index-AG_q_k1k.js";const s={title:"Salus Architecture Overview — Legacy Route",description:"Public architectural summary of the Salus trading-system research and reference implementation."};function n(i){const t={a:"a",blockquote:"blockquote",div:"div",h1:"h1",header:"header",li:"li",ol:"ol",p:"p",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.blockquote,{"data-historical-context":"true",children:e.jsxs(t.p,{children:["Historical page retained for compatibility. It may contain superseded assumptions, incomplete plans, or outdated links and is not current canonical content. See the ",e.jsx(t.a,{href:"/archive",children:"Archive"})," for context."]})}),`
`,e.jsx(t.header,{children:e.jsxs(t.h1,{id:"salus-architecture-overview",children:["Salus Architecture Overview",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#salus-architecture-overview",children:e.jsx(t.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(t.p,{children:["Salus is active research and a reference implementation. Its ",e.jsx(t.a,{href:"/work/salus",children:"project overview"})," explains the retained results and limitations."]}),`
`,e.jsx(t.p,{children:"The public architecture follows a simple boundary:"}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsx(t.li,{children:"ingest and normalize market state;"}),`
`,e.jsx(t.li,{children:"maintain graph and candidate-route views;"}),`
`,e.jsx(t.li,{children:"evaluate affected routes and apply named gates;"}),`
`,e.jsx(t.li,{children:"simulate separately from submission or inclusion;"}),`
`,e.jsx(t.li,{children:"record evidence without equating a signal with realized value."}),`
`]}),`
`,e.jsx(t.p,{children:"Current provider policy, fees, thresholds, prioritization, route selection, opportunity values, and submission strategy are not public operating instructions."}),`
`,e.jsxs(t.p,{children:["Continue to the ",e.jsx(t.a,{href:"/architecture/trading-systems/salus",children:"Salus architecture"})," for the deeper system view."]})]})}function o(i={}){const{wrapper:t}={...r(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(n,{...i})}):n(i)}export{o as default,s as frontmatter};
