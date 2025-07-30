import{f as a,j as e}from"./index-BJTdkYSN.js";import{Z as o}from"./ZoomImage--5MT6v14.js";/* empty css               */const c={title:"Overview",description:"undefined"};function i(t){const n={a:"a",defs:"defs",div:"div",em:"em",g:"g",h1:"h1",h2:"h2",header:"header",li:"li","mjx-container":"mjx-container",p:"p",path:"path",style:"style",svg:"svg",ul:"ul",use:"use",...a(),...t.components},s=n["mjx-container"];return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"overview",children:["Overview",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#overview",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(n.p,{children:"This is an opinionated architecture for an intent based solving protocol which facilitates single and mult-chain solving of intents. Intents can be solved on a single chain without provisioning up front capital as we arbiters can confirm mandates have been met by solvers at execution time, thus solvers may used the swappers locked funds for execution."}),`
`,e.jsxs(n.h2,{id:"goals",children:["Goals",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#goals",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Key Goals for this design include"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Intent Based Architecture to improve execution"}),`
`,e.jsx(n.li,{children:"Ability for Solvers to execute fills without needing to provide upfront capital"}),`
`]}),`
`,e.jsx(n.p,{children:"Future work includes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Capital Efficient Liquidity Provisioning including rehypothecation"}),`
`,e.jsx(n.li,{children:"Improved Price Discover via the use of Oracles and external services"}),`
`,e.jsx(n.li,{children:"Incorporating BackRunning of Transactions into Protocols such as Uniswap V4 via hooks"}),`
`]}),`
`,e.jsxs(n.h2,{id:"architecture-digrams",children:["Architecture Digrams",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#architecture-digrams",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(o,{src:"/images/IntentSwapProtocolMonoChain.png",alt:"IntentSwap Components",title:"IntentSwap Components"}),`
`,e.jsxs(n.h2,{id:"opinionated-sample-architecture-from-jincubator",children:["Opinionated Sample Architecture from ",e.jsx(n.a,{href:"https://github.com/jincubator",children:"jincubator"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#opinionated-sample-architecture-from-jincubator",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["This work focuses on designing and building solutions around Solving, Arbitrage and Indexing. This work is being done in a combination of public and private repositories on ",e.jsx(n.a,{href:"https://github.com/jincubator",children:"jincubator"}),". The project is drawing inspiration from and leveraging the following codebases for key components"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Solving built in RUST leveraging ",e.jsx(n.a,{href:"https://docs.propellerheads.xyz/tycho/overview",children:"Tycho"})," from ",e.jsx(n.a,{href:"https://www.propellerheads.xyz/",children:"Propellor Heads"})," including",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/propeller-heads/tycho-protocol-sdk",children:"tycho-sdk"}),": For integrate DEXs and other onchain liquidity protocols"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/propeller-heads/tycho-indexer",children:"tycho-indexer"}),": a low-latency, reorg-aware stream of all attributes you need to simulate swaps over DEX and other on-chain liquidity built on ",e.jsx(n.a,{href:"https://github.com/streamingfast/substreams",children:"substreams"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/propeller-heads/tycho-simulation",children:"tycho-simulation"}),": a Rust crate which allows simulating a set of supported protocols off-chain"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/propeller-heads/tycho-execution",children:"tycho-execution"}),": a simple, ready-to-use tool that generates the necessary data to execute trades on multiple chains and DEX's"]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Intent Management platform allowing optimized trading routes optimized by solvers who do not need to provide liquidity up front",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/Uniswap/the-compact",children:"the-compact"}),": an ownerless ERC6909 contract that facilitates the voluntary formation (and, if necessary, eventual dissolution) of reusable resource locks."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/Uniswap/arbiters",children:"arbiters"}),": selects a claim method based on the type of Compact message signed by the sponsor and allocator and on the desired settlement behavior. To finalize a claim, some actor must call into the arbiter, which will act on the input and translate it into their preferred claim method. The arbiter then must call the derived claim method on The Compact to finalize the claim process."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/uniswap/tribunal",children:"Tribunal"}),": a framework for processing cross-chain swap settlements against PGA (priority gas auction) blockchains. It ensures that tokens are transferred according to the mandate specified by the originating sponsor and enforces that a single party is able to perform the settlement in the event of a dispute. ",e.jsxs(n.em,{children:["Note: currently working on enhancing the ",e.jsx(n.a,{href:"https://eips.ethereum.org/EIPS/eip-712",children:"EIP712 Signing"})," of the ",e.jsx(n.a,{href:"https://github.com/uniswap/tribunal?tab=readme-ov-file#mandate-structure",children:"mandates"})," so that the protocol can be used for solving on a single chain and multichain settlement."]})]}),`
`,e.jsxs(n.li,{children:["Services that enable Solving and Arbitrage are drawn primarily from uniswap prototypes for ",e.jsx(n.a,{href:"https://github.com/uniswap/compactx",children:"compactX"}),". ",e.jsx(n.em,{children:"Note: it would be good to develop the majority of these in Rust and leverage Tycho's indexing and execution services"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/Uniswap/Calibrator",children:"callibrator"}),": An intent parameterization service, demo is ",e.jsx(n.a,{href:"https://calibrat0r.com/",children:"here"}),". ",e.jsxs(n.em,{children:["Note: This will need to incorprate/integrate ",e.jsx(n.a,{href:"https://github.com/uniswap/tribunal?tab=readme-ov-file#mandate-structure",children:"mandates"})," as we build a solution for solving."]})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/jincubator/v4-router",children:"v4-router"}),": a simple and optimized router for swapping on Uniswap V4. ",e.jsx(n.em,{children:"Note: Currently working on integrating intents into this management into this codebase and integrating this with an optimized smart order router."})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/uniswap/autocator",children:"autocator"}),": A server-based allocator for The Compact that leverages protocol signatures and transactions for authentication, API reference is ",e.jsx(n.a,{href:"https://autocator.org/",children:"here"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/Uniswap/Smallocator",children:"smallocator"}),": Similar to autocator with smart contract support via EIP-4361 session authentication and signing EIP-712 Compact messages."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/Uniswap/Fillanthropist",children:"Fillanthropist"}),": receiving and filling broadcasted cross-chain swap intents, demo is ",e.jsx(n.a,{href:"https://fillanthropist.org/",children:"here"}),". ",e.jsx(n.em,{children:"Note: This infrastructure can be replaced by solver technology built on tycho as well as an update dissemination approach (see repo below) which can leverage tycho indexing."})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/Uniswap/disseminator",children:"disseminator"}),": A TypeScript WebSocket server implementation that broadcasts messages to both HTTP endpoints and WebSocket clients. The server validates incoming messages using Zod schemas and ensures proper message delivery to all connected clients. ",e.jsx(n.em,{children:"Note: Design work still needs to be done as to the most efficient way to store and transmit detailed intent and mandate information"})]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Frontend would include swapping and also liquidity provisioning and optimized Yield strategies for Liquidity Providers two inspirational repositories are",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/uniswap/compactx",children:"compactX"}),": a proof-of-concept, React-based web interface for performing cross-chain swaps."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://yolo-demo-ui-hackathon-chainlink-ch.vercel.app/",children:"YOLO Protocol"}),": A Demo app developed for a hackathon by ",e.jsx(n.a,{href:"https://linktr.ee/yolo.protocol",children:"YOLO Protocol"})," which includes a dashboard for Liquidity Providers to manage their positions."]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.h2,{id:"proposed-rollout-strategy",children:["Proposed Rollout Strategy",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#proposed-rollout-strategy",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"The following diagram gives an overview of the components to be developed."}),`
`,e.jsxs(n.p,{children:["Technology: Proposed developing ",e.jsx(s,{className:"MathJax",jax:"SVG",children:e.jsxs(n.svg,{style:{verticalAlign:"-0.186ex"},xmlns:"http://www.w3.org/2000/svg",width:"8.699ex",height:"2.072ex",role:"img",focusable:"false",viewBox:"0 -833.9 3845.1 915.9",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[e.jsxs(n.defs,{children:[e.jsx(n.path,{id:"MJX-1-TEX-I-1D438",d:"M492 213Q472 213 472 226Q472 230 477 250T482 285Q482 316 461 323T364 330H312Q311 328 277 192T243 52Q243 48 254 48T334 46Q428 46 458 48T518 61Q567 77 599 117T670 248Q680 270 683 272Q690 274 698 274Q718 274 718 261Q613 7 608 2Q605 0 322 0H133Q31 0 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q146 66 215 342T285 622Q285 629 281 629Q273 632 228 634H197Q191 640 191 642T193 659Q197 676 203 680H757Q764 676 764 669Q764 664 751 557T737 447Q735 440 717 440H705Q698 445 698 453L701 476Q704 500 704 528Q704 558 697 578T678 609T643 625T596 632T532 634H485Q397 633 392 631Q388 629 386 622Q385 619 355 499T324 377Q347 376 372 376H398Q464 376 489 391T534 472Q538 488 540 490T557 493Q562 493 565 493T570 492T572 491T574 487T577 483L544 351Q511 218 508 216Q505 213 492 213Z"}),e.jsx(n.path,{id:"MJX-1-TEX-N-3D",d:"M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"}),e.jsx(n.path,{id:"MJX-1-TEX-I-1D45A",d:"M21 287Q22 293 24 303T36 341T56 388T88 425T132 442T175 435T205 417T221 395T229 376L231 369Q231 367 232 367L243 378Q303 442 384 442Q401 442 415 440T441 433T460 423T475 411T485 398T493 385T497 373T500 364T502 357L510 367Q573 442 659 442Q713 442 746 415T780 336Q780 285 742 178T704 50Q705 36 709 31T724 26Q752 26 776 56T815 138Q818 149 821 151T837 153Q857 153 857 145Q857 144 853 130Q845 101 831 73T785 17T716 -10Q669 -10 648 17T627 73Q627 92 663 193T700 345Q700 404 656 404H651Q565 404 506 303L499 291L466 157Q433 26 428 16Q415 -11 385 -11Q372 -11 364 -4T353 8T350 18Q350 29 384 161L420 307Q423 322 423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 181Q151 335 151 342Q154 357 154 369Q154 405 129 405Q107 405 92 377T69 316T57 280Q55 278 41 278H27Q21 284 21 287Z"}),e.jsx(n.path,{id:"MJX-1-TEX-I-1D450",d:"M34 159Q34 268 120 355T306 442Q362 442 394 418T427 355Q427 326 408 306T360 285Q341 285 330 295T319 325T330 359T352 380T366 386H367Q367 388 361 392T340 400T306 404Q276 404 249 390Q228 381 206 359Q162 315 142 235T121 119Q121 73 147 50Q169 26 205 26H209Q321 26 394 111Q403 121 406 121Q410 121 419 112T429 98T420 83T391 55T346 25T282 0T202 -11Q127 -11 81 37T34 159Z"}),e.jsx(n.path,{id:"MJX-1-TEX-N-32",d:"M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"})]}),e.jsx(n.g,{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",transform:"scale(1,-1)",children:e.jsxs(n.g,{"data-mml-node":"math",children:[e.jsx(n.g,{"data-mml-node":"mi",children:e.jsx(n.use,{"data-c":"1D438",xlinkHref:"#MJX-1-TEX-I-1D438"})}),e.jsx(n.g,{"data-mml-node":"mo",transform:"translate(1041.8,0)",children:e.jsx(n.use,{"data-c":"3D",xlinkHref:"#MJX-1-TEX-N-3D"})}),e.jsx(n.g,{"data-mml-node":"mi",transform:"translate(2097.6,0)",children:e.jsx(n.use,{"data-c":"1D45A",xlinkHref:"#MJX-1-TEX-I-1D45A"})}),e.jsxs(n.g,{"data-mml-node":"msup",transform:"translate(2975.6,0)",children:[e.jsx(n.g,{"data-mml-node":"mi",children:e.jsx(n.use,{"data-c":"1D450",xlinkHref:"#MJX-1-TEX-I-1D450"})}),e.jsx(n.g,{"data-mml-node":"mn",transform:"translate(466,363) scale(0.707)",children:e.jsx(n.use,{"data-c":"32",xlinkHref:"#MJX-1-TEX-N-32"})})]})]})})]})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Back end services predominately in ",e.jsx(n.a,{href:"https://www.rust-lang.org/",children:"RUST"})," using ",e.jsx(n.a,{href:"https://alloy.rs/",children:"Alloy"}),"."]}),`
`,e.jsxs(n.li,{children:["Off Chain Persistence and Indexing: using ",e.jsx(n.a,{href:"https://docs.substreams.dev/",children:"Substreams"})," and ",e.jsx(n.a,{href:"https://www.propellerheads.xyz/tycho",children:"Tycho"})]}),`
`,e.jsxs(n.li,{children:["Frontend Components leveraging ",e.jsx(n.a,{href:"https://porto.sh/",children:"Porto"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Outstanding Design Considerations:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Intent Management: Should detail intent information be stored completely off chain, or can it be passed in callData and leveraged in events, with only the Hash on chain?"}),`
`,e.jsx(n.li,{children:"Source of Funds: The proposed architecture's goal is to allow Solvers to use Swappers funds through mandate validation using EIP-721."}),`
`,e.jsxs(n.li,{children:["Price Discovery: What is the most accurate price to be used for quoting, is it the best price we can get on-chain using Tycho Simulation or should we use feeds such as Coingecko and Uniswap API as used in ",e.jsx(n.a,{href:"https://github.com/Uniswap/calibrator",children:"calibrator"}),"."]}),`
`]}),e.jsx(n.style,{children:`
mjx-container[jax="SVG"] {
  direction: ltr;
}

mjx-container[jax="SVG"] > svg {
  overflow: visible;
  min-height: 1px;
  min-width: 1px;
}

mjx-container[jax="SVG"] > svg a {
  fill: blue;
  stroke: blue;
}

mjx-container[jax="SVG"][display="true"] {
  display: block;
  text-align: center;
  margin: 1em 0;
}

mjx-container[jax="SVG"][display="true"][width="full"] {
  display: flex;
}

mjx-container[jax="SVG"][justify="left"] {
  text-align: left;
}

mjx-container[jax="SVG"][justify="right"] {
  text-align: right;
}

g[data-mml-node="merror"] > g {
  fill: red;
  stroke: red;
}

g[data-mml-node="merror"] > rect[data-background] {
  fill: yellow;
  stroke: none;
}

g[data-mml-node="mtable"] > line[data-line], svg[data-table] > g > line[data-line] {
  stroke-width: 70px;
  fill: none;
}

g[data-mml-node="mtable"] > rect[data-frame], svg[data-table] > g > rect[data-frame] {
  stroke-width: 70px;
  fill: none;
}

g[data-mml-node="mtable"] > .mjx-dashed, svg[data-table] > g > .mjx-dashed {
  stroke-dasharray: 140;
}

g[data-mml-node="mtable"] > .mjx-dotted, svg[data-table] > g > .mjx-dotted {
  stroke-linecap: round;
  stroke-dasharray: 0,140;
}

g[data-mml-node="mtable"] > g > svg {
  overflow: visible;
}

[jax="SVG"] mjx-tool {
  display: inline-block;
  position: relative;
  width: 0;
  height: 0;
}

[jax="SVG"] mjx-tool > mjx-tip {
  position: absolute;
  top: 0;
  left: 0;
}

mjx-tool > mjx-tip {
  display: inline-block;
  padding: .2em;
  border: 1px solid #888;
  font-size: 70%;
  background-color: #F8F8F8;
  color: black;
  box-shadow: 2px 2px 5px #AAAAAA;
}

g[data-mml-node="maction"][data-toggle] {
  cursor: pointer;
}

mjx-status {
  display: block;
  position: fixed;
  left: 1em;
  bottom: 1em;
  min-width: 25%;
  padding: .2em .4em;
  border: 1px solid #888;
  font-size: 90%;
  background-color: #F8F8F8;
  color: black;
}

foreignObject[data-mjx-xml] {
  font-family: initial;
  line-height: normal;
  overflow: visible;
}

mjx-container[jax="SVG"] path[data-c], mjx-container[jax="SVG"] use[data-c] {
  stroke-width: 3;
}
`})]})}function h(t={}){const{wrapper:n}={...a(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{h as default,c as frontmatter};
