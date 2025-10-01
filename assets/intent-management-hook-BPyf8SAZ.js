import{f as s,j as e}from"./index-BZW_0xgh.js";const o={title:"Uniswap V4 Intent Hook",description:"undefined"};function t(i){const n={a:"a",div:"div",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"uniswap-v4-intent-hook",children:["Uniswap V4 Intent Hook",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#uniswap-v4-intent-hook",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(n.h2,{id:"overview",children:["Overview",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#overview",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:`This project was an exploration into the use of hooks for intent based solving.
The goal was to implement an intent based hook, that would allow a pool to receive swaps, publish them to a solver network to find the best price for the swap. If a solver returned a more profitable swap (for the swapper) the intent would be executed, the swapper would receive a better return than the pool could offer and the solver would claim the funds. If after the deadline (usually 1 to 2 blocks) no solution with a better return has been provided. Then the swap would be executed as normal upon the pool.`}),`
`,e.jsx(n.p,{children:"Result of the Project was that due to the way PoolManager enforced netting of token balances, it was difficult to hold the funds for a multi-cycle swap."}),`
`,e.jsxs(n.h2,{id:"presentation",children:["Presentation",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#presentation",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Below is the presentation submitted for Atrium Academy UHI5."}),`
`,e.jsx("iframe",{src:"https://docs.google.com/presentation/d/e/2PACX-1vRI3svpe1qNrtamn2aDuSlp4_eawgY237ae49o_4P50X8vBA2dVZguio3eA5nauS3ubdOWvwwxl-7tl/embed?start=false&loop=false&delayms=3000",frameBorder:"0",allowFullScreen:!0,allow:"autoplay; encrypted-media",style:{width:"100%",height:"500px",borderRadius:"12px"}}),`
`,e.jsxs(n.h2,{id:"uhi5-submission",children:["UHI5 Submission",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#uhi5-submission",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["Email: ",e.jsx(n.a,{href:"mailto:john@johnwhitton.com",children:"john@johnwhitton.com"})]}),`
`,e.jsx(n.p,{children:"Description: Jincubator IntentSwapHook allows swaps to be created with a delay period before execution, enabling solvers to find a more efficient trade and provide higher-return tokens to the swapper."}),`
`,e.jsx(n.p,{children:"Tags: CoW, Cross-Chain, Custom hooks, DEX, LP Liquidity, Unichain"}),`
`,e.jsx(n.p,{children:"Integrations: Across, Circle, EigenLayer, Flaunch, Ink"}),`
`,e.jsx(n.p,{children:"Submission Type: Hook Incubator (UHI)"}),`
`,e.jsx(n.p,{children:"Cohort: UHI5"}),`
`,e.jsx(n.p,{children:"Created by: John Whitton"}),`
`,e.jsxs(n.h3,{id:"how-did-you-integrate-our-partners-if-any",children:["How did you integrate our partners, if any?",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#how-did-you-integrate-our-partners-if-any",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["For the UHI5 project. The focus was on the IntentSwapHook; partner integration is planned for subsequent phases, and I will reach out to each partner with detailed implementation plans. Please see ",e.jsx(n.a,{href:"https://deck.jincubator.com",children:"https://deck.jincubator.com"})," for high-level integration overviews with EigenLayer, Circle, Across, Ink, and Flaunch."]}),`
`,e.jsxs(n.h3,{id:"what-are-the-key-links-to-share-ex-demo-video-github-deck",children:["What are the key links to share? (Ex. demo video, GitHub, deck)",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#what-are-the-key-links-to-share-ex-demo-video-github-deck",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["Github: ",e.jsx(n.a,{href:"https://github.com/jincubator/uhi5-protocol",children:"https://github.com/jincubator/uhi5-protocol"})]}),`
`,e.jsxs(n.p,{children:["Slides: ",e.jsx(n.a,{href:"https://uhi5-deck.jincubator.com/",children:"https://uhi5-deck.jincubator.com/"})]}),`
`,e.jsxs(n.p,{children:["Project Link: ",e.jsx(n.a,{href:"https://jincubator.com/",children:"https://jincubator.com/"})]}),`
`,e.jsxs(n.p,{children:["Demo Video: ",e.jsx(n.a,{href:"https://uhi5-demo.jincubator.com/",children:"https://uhi5-demo.jincubator.com/"})]}),`
`,e.jsxs(n.h3,{id:"problem--background-what-inspired-the-idea-what-problems-are-you-solving",children:["Problem / Background: What inspired the idea? What problems are you solving?",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#problem--background-what-inspired-the-idea-what-problems-are-you-solving",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Liquidity Fragmentation and Capital Efficiency are two of the largest problems as we roll out more protocols and blockchains. This is addressed by two approaches that work together in unison. Intent-based swaps using solvers and Chain Abstraction using Cross-chain Intents (ERC-7683), enabling the seamless flow of funds between chains."}),`
`,e.jsxs(n.h3,{id:"impact-what-makes-this-project-unique-what-impact-will-this-make",children:["Impact: What makes this project unique? What impact will this make?",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#impact-what-makes-this-project-unique-what-impact-will-this-make",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"This project lays the foundation for any pool to provide a better return for swappers and more capital efficiency for Liquidity Providers. It achieves this by creating a hook that allows swaps to be created with a delay period before execution, enabling solvers to find a more efficient trade and provide higher-return tokens to the swapper."}),`
`,e.jsx(n.p,{children:"This is part of a broader technical landscape design to be built on 4 key components"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"IntentSwap Hook - A hook allowing swaps to be created with a delay period before execution, enabling solvers to find a more efficient trade, giving higher return tokens to the swapper."}),`
`,e.jsx(n.li,{children:`Liquidity Indexing - Comprehensive liquidity indexing tooling allowing for
a. Indexing of all Protocols
b. Simulating swaps over all protocols in milliseconds to find the best trading route
c. Execution of swaps via a unified interface`}),`
`,e.jsx(n.li,{children:"Intent execution framework that enables the trade execution across multiple protocols."}),`
`,e.jsx(n.li,{children:"Liquidity rebalancing and settlement tools enabling liquidity providers to rebalance their portfolios across both yield-earning protocols, assets, and chains."}),`
`]}),`
`,e.jsxs(n.p,{children:["Note: Currently there is no front end but docs can be found at ",e.jsx(n.a,{href:"https://jincubator.com",children:"https://jincubator.com"})]}),`
`,e.jsxs(n.h3,{id:"challenges-what-was-challenging-about-building-this-project",children:["Challenges: What was challenging about building this project?",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#challenges-what-was-challenging-about-building-this-project",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"The solutions space is quite large, making prioritizing which components to build for this project challenging. As such, sponsor integrations were deprioritized and have only a high-level specification rather than a working proof of concept."}),`
`,e.jsx(n.p,{children:"Secondly, this space is rapidly evolving with new tooling and solutions becoming available. Specifically, Intent execution frameworks like Uniswap's the-compact and Liquidity Indexing solutions, such as Tycho’s SDK, are still under development and"}),`
`,e.jsxs(n.h3,{id:"team-who-is-on-the-team-what-are-their-backgrounds",children:["Team: Who is on the team? What are their backgrounds?",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#team-who-is-on-the-team-what-are-their-backgrounds",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Development is being lead by John Whitton, below are some handy links about him."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/johnwhitton",children:"github"}),": Johns github profile"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://johnwhitton.com/",children:"johnwhitton.com"}),": All about John, his work, writing, research etc."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://resume.johnwhitton.com/",children:"My Resume"}),": One-page resume in pdf format."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://overview.johnwhitton.com/",children:"Overview"}),": A little infographic of John's history"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://johnwhitton.com/posts.html",children:"Writing"})," and ",e.jsx(n.a,{href:"https://johnwhitton.com/research.html",children:"Research"}),": Some writing and research John has done (a little outdated)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/johnwhitton/uhi5-exercises",children:"Uniswap v4"}),": Completed exercises and references for the Uniswap Hook Incubator"]}),`
`]}),`
`,e.jsxs(n.h2,{id:"repository",children:["Repository",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#repository",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["The repository resides at ",e.jsx(n.a,{href:"https://github.com/jincubator/uhi5-Protocol/blob/main/notes/SCENARIOS.md",children:"uhi5-protocol"}),`
Below are some sample scenarios`]}),`
`,e.jsxs(n.h3,{id:"scenarios",children:["Scenarios",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#scenarios",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Gives an Overview of the Actors, Contracts and Scenarios for Jincubator."}),`
`,e.jsxs(n.h4,{id:"actors",children:["Actors",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#actors",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Liquidity Provider: Provides Liquidity"}),`
`,e.jsx(n.li,{children:"Swapper: Performs Swaps"}),`
`,e.jsx(n.li,{children:"Solver: Finds Most Efficient Swaps"}),`
`,e.jsx(n.li,{children:"Jincubator: Deploys UniswapHook and Liquidity Pools - may have privileged owner functions for prototyping."}),`
`]}),`
`,e.jsxs(n.h4,{id:"contracts",children:["Contracts",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#contracts",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"UniswapHook"}),`
`,e.jsxs(n.li,{children:["Pools",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"ETH/USD - Reference Pool"}),`
`,e.jsx(n.li,{children:"ETH/USD - Intent Pool using Uniswap Hook"}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.h4,{id:"the-compact",children:[e.jsx(n.a,{href:"https://deepwiki.com/jincubator/the-compact",children:"The-compact"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#the-compact",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/jincubator/the-compact?tab=readme-ov-file#sponsors-depositors",children:"Sponsors(depositors)"}),": Sponsors own the underlying assets and create resource locks to make them available under specific conditions.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Swapper"}),`
`,e.jsx(n.li,{children:"Liquidity Provider"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/jincubator/the-compact?tab=readme-ov-file#arbiters--claimants-eg-fillers",children:"Arbiters"}),": Arbiters verify conditions and process claims."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/jincubator/the-compact?tab=readme-ov-file#arbiters--claimants-eg-fillers",children:"Claimants(e.g. Fillers)"}),": Claimants are the recipients."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/jincubator/the-compact?tab=readme-ov-file#relayers",children:"Relayers"}),": Relayers can perform certain interactions on behalf of sponsors and/or claimants."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/jincubator/the-compact?tab=readme-ov-file#allocators-infrastructure",children:"Allocators (Infrastructure)"}),": Allocators are crucial infrastructure for ensuring resource lock integrity."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/jincubator/the-compact?tab=readme-ov-file#summary",children:"Emmisaries"}),": Sponsors can also optionally assign an emissary to act as a fallback signer for authorizing claims against their compacts. This is particularly helpful for smart contract accounts or other scenarios where signing keys might change."]}),`
`]}),`
`,e.jsxs(n.h3,{id:"protocol-deployment",children:["Protocol Deployment",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#protocol-deployment",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h3,{id:"liquidity-provisioning",children:["Liquidity Provisioning",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#liquidity-provisioning",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Pool (providing tokens to a pool)"}),`
`,e.jsx(n.li,{children:"Pool Manager (providing tokens to the pool manager to be used dynamically)"}),`
`,e.jsx(n.li,{children:"Compact (to be used by Solvers for Swaps using Pools)"}),`
`,e.jsx(n.li,{children:"Compact (to be used by Solvers for Direct Swaps based on Price Oracle and Profit)"}),`
`]}),`
`,e.jsxs(n.h4,{id:"pool",children:["Pool",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#pool",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h4,{id:"yield-earning-vaults-erc-4626",children:["Yield Earning Vaults (ERC-4626)",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#yield-earning-vaults-erc-4626",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h4,{id:"assets-for-solving-intents",children:["Assets for Solving Intents",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#assets-for-solving-intents",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h3,{id:"intent-swap---no-lp-funds",children:["Intent Swap - No LP Funds",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#intent-swap---no-lp-funds",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Swapper creates Swap which creates a compact for the output tokens required (locks funds)",`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Pricing comes from ...."}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:"Solver listens to the event calls simulate and finds the best price (a swap on a pool using Swappers Funds)"}),`
`,e.jsx(n.li,{children:"Solver gets exclusivity"}),`
`,e.jsx(n.li,{children:"Solver executes the swap using swappers funds and returning output tokens to swapper"}),`
`]}),`
`,e.jsxs(n.h3,{id:"intent-swap---lp-funds",children:["Intent Swap - LP funds",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#intent-swap---lp-funds",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"LP Provides funds for Solving to the-compact and permissions solver"}),`
`,e.jsxs(n.li,{children:["Swapper creates Swap which creates a compact for the output tokens required (locks funds)",`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Pricing comes from ...."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Solver listens to the event calls simulate and finds the best price",`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Option 1 - a swap on a pool using Swappers Funds"}),`
`,e.jsx(n.li,{children:"Option 2 - a direct swap using LP's funds"}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:"Solver gets exclusivity"}),`
`,e.jsxs(n.li,{children:["Solver executes the swap",`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Option 1 - Using Swappers funds and returning tokens to swapper"}),`
`,e.jsx(n.li,{children:"Option 2 - Using LP's funds and returning funds to the-compact"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Settlement",`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"FastTrak"}),`
`,e.jsx(n.li,{children:"Batch"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Rebalancing",`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Rebalancing Job"}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.h3,{id:"swap-vanilla",children:["Swap Vanilla",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#swap-vanilla",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h3,{id:"swap-booster",children:["Swap Booster",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#swap-booster",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h3,{id:"async-swap-and-then-solve-double-spend",children:["Async Swap and then Solve (double spend)",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#async-swap-and-then-solve-double-spend",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Swapper creates a swap on Uniswap v4 Pool (Booster Pool or Vanilla Pool)"}),`
`,e.jsx(n.li,{children:"Input tokens are held based on Time Delay (say 10 blocks)"}),`
`,e.jsxs(n.li,{children:[`Intent is created by Solver locking LP funds for Input Token and Output Token Amount above - gas fees and profit %
4a. Intent is executed (note this is outside of Pool, other option is to pass solve calldata to Pool and execute solve in Pool)`,`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"LP deposits liquidity in the form of Output Token with intentId (CompactId)"}),`
`,e.jsx(n.li,{children:`Deposited Output Tokens are given to the original swapper and Locked Input Tokens are given to the Solver
4b. Intent is not executed and swap is attempted at time of deadline.`}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.h3,{id:"swap-then-solve-lock-funds-and-then-double-spend",children:["Swap then Solve (lock funds and then double spend)",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#swap-then-solve-lock-funds-and-then-double-spend",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h3,{id:"async-swap-then-solve",children:["Async Swap then Solve",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#async-swap-then-solve",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h3,{id:"swap-and-solve-pass-payload-data-in",children:["Swap and Solve (Pass Payload Data In)",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#swap-and-solve-pass-payload-data-in",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h3,{id:"compact-introduction",children:["Compact Introduction.",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#compact-introduction",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h3,{id:"swap-intent-based",children:["Swap Intent Based",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#swap-intent-based",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Swap 1 ETH for max USDC on Unichain"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Swap is created",`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Locks ETH on PoolManager"}),`
`,e.jsx(n.li,{children:"Create compact for Solver to use 1 ETH if they can provide $2470 USDC or more"}),`
`,e.jsx(n.li,{children:"Emits event for Intent Creation"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Solver provides Solution",`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Accesses Funds (provide our own initially)"}),`
`,e.jsx(n.li,{children:"Does Swap"}),`
`,e.jsx(n.li,{children:"Proves have satisfied condition"}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.h3,{id:"cross-chain-swap",children:["Cross Chain Swap",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#cross-chain-swap",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h3,{id:"rehypothecation",children:["ReHypothecation",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#rehypothecation",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h3,{id:"liquidity-settlement",children:["Liquidity Settlement",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#liquidity-settlement",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})]})}function r(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{r as default,o as frontmatter};
