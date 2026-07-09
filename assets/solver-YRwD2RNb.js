import{f as a,j as e}from"./index-Cr2c_iiu.js";import{Z as n}from"./ZoomImage-CzOSwfbb.js";/* empty css               */const h={title:"Solver Architecture",description:"undefined"};function t(i){const r={a:"a",div:"div",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...a(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r.header,{children:e.jsxs(r.h1,{id:"solver-architecture",children:["Solver Architecture",e.jsx(r.a,{"aria-hidden":"true",tabIndex:"-1",href:"#solver-architecture",children:e.jsx(r.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(r.p,{children:"Solver architecture is the original trading and execution infrastructure foundation for Jincubator."}),`
`,e.jsx(r.p,{children:"It covers route discovery, Tycho-backed market data, simulation, profitability gates, execution queues, and the runtime path from liquidity discovery to transaction execution."}),`
`,e.jsx(n,{src:"/images/architecture/v4/solver-architecture.png",alt:"Solver architecture"}),`
`,e.jsx(n,{src:"/images/architecture/v4/solver-walkthrough.png",alt:"Solver walkthrough"}),`
`,e.jsxs(r.h2,{id:"architecture-lens",children:["Architecture Lens",e.jsx(r.a,{"aria-hidden":"true",tabIndex:"-1",href:"#architecture-lens",children:e.jsx(r.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Route universe construction and graph updates."}),`
`,e.jsx(r.li,{children:"Simulation and profitability gating before execution."}),`
`,e.jsx(r.li,{children:"Queue-separated hot path and execution queue."}),`
`,e.jsx(r.li,{children:"Integration with Tycho indexing, simulation, and execution services."}),`
`]}),`
`,e.jsxs(r.h2,{id:"deeper-research",children:["Deeper Research",e.jsx(r.a,{"aria-hidden":"true",tabIndex:"-1",href:"#deeper-research",children:e.jsx(r.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"/research/architecture/john",children:"System Design & Architecture Portfolio"})}),`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"/research/solving/solving",children:"High Performance Route Evaluation"})}),`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"/research/solving/tycho1inchNOL",children:"No Liquidity Solving with Tycho and 1inch"})}),`
`]})]})}function d(i={}){const{wrapper:r}={...a(),...i.components};return r?e.jsx(r,{...i,children:e.jsx(t,{...i})}):t(i)}export{d as default,h as frontmatter};
