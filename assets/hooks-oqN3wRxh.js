import{f as s,j as e}from"./index-BJTdkYSN.js";const r={title:"Uniswap V4 Hook Development - WIP",description:"undefined"};function o(i){const n={a:"a",div:"div",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"uniswap-v4-hook-development---wip",children:["Uniswap V4 Hook Development - WIP",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#uniswap-v4-hook-development---wip",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(n.h2,{id:"overview",children:["Overview",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#overview",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"This section documents design work to be done for enhancing Uniswap V4 through the use of hooks for better price discovery, swapping and solver execution."}),`
`,e.jsxs(n.p,{children:["It leverages ",e.jsx(n.a,{href:"https://docs.propellerheads.xyz/tycho/overview",children:"Tycho"}),", Intents using ",e.jsx(n.a,{href:"https://www.erc7683.org/spec",children:"ERC-7683"}),", ",e.jsx(n.a,{href:"https://eips.ethereum.org/EIPS/eip-712",children:"EIP-712"}),", ",e.jsx(n.a,{href:"https://github.com/uniswap/compactx",children:"Compactx"})," and ",e.jsx(n.a,{href:"https://docs.uniswap.org/contracts/v4/overview",children:"Uniswap V4 Hooks"}),". Development can be found in the github organization ",e.jsx(n.a,{href:"https://github.com/jincubator",children:"jincubator"}),"."]}),`
`,e.jsxs(n.h3,{id:"hook-mods",children:["Hook Mods",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#hook-mods",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Booster Pools"}),`
`,e.jsx(n.li,{children:"BackRunning"}),`
`,e.jsx(n.li,{children:"ReHypothecation"}),`
`,e.jsx(n.li,{children:"Paymaster"}),`
`,e.jsx(n.li,{children:"Settlement Pools - CrossChain"}),`
`,e.jsx(n.li,{children:"Router change to Slippage Failure to create an Intent."}),`
`,e.jsx(n.li,{children:"HOOK"}),`
`]}),`
`,e.jsxs(n.h3,{id:"deliverables",children:["Deliverables",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#deliverables",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["No Liquidity Pool",`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Swap via preferred LP at fixed price from Oracle"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["IntentSwap",`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"CreateIntentSwap (includes output amount in each call)"}),`
`,e.jsx(n.li,{children:"ExecuteIntentSwap (uses funds from compact)"}),`
`,e.jsx(n.li,{children:"SweepIntentSwap (passed a compact)"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["BoosterPool",`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Adds IntentManagement to Any Pool"}),`
`,e.jsx(n.li,{children:"Adds Dynamic fees to Any Pool"}),`
`,e.jsx(n.li,{children:"Adds BackRunning via Solver"}),`
`,e.jsx(n.li,{children:"Adds ReHypothecation to any pool USDCY"}),`
`,e.jsx(n.li,{children:"Adds Oracle Pricing to any pool EULER-ORACLES"}),`
`,e.jsx(n.li,{children:"Adds Gas Sponsorship"}),`
`]}),`
`]}),`
`]})]})}function d(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(o,{...i})}):o(i)}export{d as default,r as frontmatter};
