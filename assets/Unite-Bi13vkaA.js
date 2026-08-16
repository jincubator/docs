import{u as r,j as e}from"./index-D-rcQcWz.js";const a={title:"Unite DeFi Prototype (2025)",description:"Historical Jincubator limit-order and solver prototype from the 2025 Unite DeFi event."};function i(n){const t={a:"a",blockquote:"blockquote",div:"div",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.blockquote,{"data-historical-context":"true",children:e.jsxs(t.p,{children:["Historical page retained for compatibility. It may contain superseded assumptions, incomplete plans, or outdated links and is not current canonical content. See the ",e.jsx(t.a,{href:"/archive",children:"Archive"})," for context."]})}),`
`,e.jsx(t.header,{children:e.jsxs(t.h1,{id:"unite-defi-prototype-2025",children:["Unite DeFi Prototype (2025)",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#unite-defi-prototype-2025",children:e.jsx(t.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(t.p,{children:"John and Jincubator built this as a historical 2025 hackathon prototype, not a current product. It explored how a limit-order protocol could delegate a swap through a solver payload, use approved maker or taker funds during atomic settlement, and return excess value according to the order contract's rules."}),`
`,e.jsxs(t.h2,{id:"public-architecture",children:["Public architecture",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#public-architecture",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(t.p,{children:"The bounded prototype combined:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"a 1inch Limit Order Protocol extension;"}),`
`,e.jsx(t.li,{children:"Tycho-backed indexing, simulation, and swap execution;"}),`
`,e.jsx(t.li,{children:"oracle-calculated order conditions;"}),`
`,e.jsx(t.li,{children:"ERC-6909-oriented resource locking;"}),`
`,e.jsx(t.li,{children:"post-interaction treasury handling;"}),`
`,e.jsx(t.li,{children:"Solidity tests around order and settlement flows."}),`
`]}),`
`,e.jsx(t.p,{children:"The design could remove the solver's need to pre-fund trading principal for the bounded atomic flow. Infrastructure, data/RPC, operational, and transaction-gas costs still exist; reverted, unsuccessful, or non-included attempts may leave unreimbursed costs."}),`
`,e.jsxs(t.p,{children:["This page does not claim current deployment, commercial validation, repeatable profit, or completed production operation. Historical implementation material remains in the ",e.jsx(t.a,{href:"https://github.com/jincubator-united-defi-2025",children:"public project organization"}),"."]})]})}function c(n={}){const{wrapper:t}={...r(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{c as default,a as frontmatter};
