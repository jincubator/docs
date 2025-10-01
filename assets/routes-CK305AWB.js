import{f as a,j as e}from"./index-BZW_0xgh.js";const l={title:"Route Evaluation",description:"undefined"};function r(i){const n={a:"a",code:"code",defs:"defs",div:"div",g:"g",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li","mjx-container":"mjx-container",ol:"ol",p:"p",path:"path",pre:"pre",span:"span",strong:"strong",style:"style",svg:"svg",ul:"ul",use:"use",...a(),...i.components},s=n["mjx-container"];return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"route-evaluation",children:["Route Evaluation",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#route-evaluation",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(n.h2,{id:"overview",children:["Overview",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#overview",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Route evaluation is the process of analyzing and scoring different possible paths for executing trades or solving intents. The system uses sophisticated algorithms to discover profitable arbitrage opportunities and optimize capital efficiency across multiple DEX protocols."}),`
`,e.jsxs(n.h2,{id:"using-our-solution",children:["Using our Solution",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#using-our-solution",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Our route evaluation system enables:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Multi-hop Route Discovery"}),": Supports 2-5 hop cycles for comprehensive arbitrage detection"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Real-time Profitability Analysis"}),": Evaluates routes for positive arbitrage cycles in real-time"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Capital Efficiency"}),": Uses flash loans to eliminate upfront capital requirements"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Performance Optimization"}),": Processes over 1,000 routes per second with microsecond evaluation times"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Cross-protocol Support"}),": Works across Uniswap V2/V3/V4, Balancer, Curve, SushiSwap, and more"]}),`
`]}),`
`,e.jsxs(n.h2,{id:"solution-overview",children:["Solution Overview",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#solution-overview",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"The route evaluation system creates a liquidity mapping layer where tokens serve as nodes and pools serve as edges in a graph structure. With Tycho's protocol abstraction, a pool is uniformly treated regardless of the underlying protocol, simplifying implementation considerably."}),`
`,e.jsxs(n.h3,{id:"architecture-components",children:["Architecture Components",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#architecture-components",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h4,{id:"graph-manager",children:["Graph Manager",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#graph-manager",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"The Graph Manager constructs and maintains trading graphs using tokens as nodes and pools as edges in a multi-graph structure:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"pub"}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" struct"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" GraphManager"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    token_to_id"}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" HashMap"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"<"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"Bytes"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"u32"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:">,"})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    id_to_token"}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" HashMap"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"<"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"u32"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"Bytes"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:">,"})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    pool_to_id"}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" HashMap"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"<"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"String"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"u32"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:">,"})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    id_to_pool"}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" HashMap"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"<"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"u32"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"String"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:">,"})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    next_token_id"}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" u32"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    next_pool_id"}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" u32"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})})}),`
`,e.jsxs(n.h4,{id:"route-manager",children:["Route Manager",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#route-manager",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"The Route Manager discovers and manages arbitrage routes using sophisticated algorithms with BFS-based discovery and incremental updates."}),`
`,e.jsxs(n.h4,{id:"flash-loan-manager",children:["Flash Loan Manager",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#flash-loan-manager",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Selects optimal flash loan pools based on fee structure and compatibility rules, supporting both Uniswap V3 (30 bps fee) and V4 (0 bps fee) flash loans."}),`
`,e.jsxs(n.h3,{id:"route-discovery-process",children:["Route Discovery Process",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#route-discovery-process",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Graph Construction"}),": Build liquidity graph with tokens as nodes and pools as edges"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Route Generation"}),": Use Depth-First Search to enumerate possible multi-hop routes"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Flash Loan Selection"}),": Choose optimal flash loan provider based on compatibility and fees"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Profitability Evaluation"}),": Calculate expected profit using real-time pool states"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Optimization"}),": Find optimal input amounts using binary search algorithms"]}),`
`]}),`
`,e.jsxs(n.h2,{id:"technical-reference",children:["Technical Reference",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#technical-reference",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h3,{id:"liquidity-mapping",children:["Liquidity Mapping",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#liquidity-mapping",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"The system creates a graph with tokens as nodes and pools as edges. With Tycho's protocol abstraction, pools are treated uniformly regardless of underlying protocol:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Nodes"}),": Tokens with metadata and properties"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Edges"}),": Pool connections with protocol, fee, and liquidity data"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Multi-graph"}),": Multiple pools can exist between the same token pair"]}),`
`]}),`
`,e.jsxs(n.h3,{id:"route-manager-mathematics",children:["Route Manager Mathematics",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#route-manager-mathematics",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"The Route Manager enumerates all possible multi-hop routes through the liquidity graph using a modified Depth-First Search (DFS) traversal:"}),`
`,e.jsxs(n.p,{children:["For a graph ",e.jsx(s,{className:"MathJax",jax:"SVG",children:e.jsxs(n.svg,{style:{verticalAlign:"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"11.03ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 4875.2 1000",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[e.jsxs(n.defs,{children:[e.jsx(n.path,{id:"MJX-1-TEX-I-1D43A",d:"M50 252Q50 367 117 473T286 641T490 704Q580 704 633 653Q642 643 648 636T656 626L657 623Q660 623 684 649Q691 655 699 663T715 679T725 690L740 705H746Q760 705 760 698Q760 694 728 561Q692 422 692 421Q690 416 687 415T669 413H653Q647 419 647 422Q647 423 648 429T650 449T651 481Q651 552 619 605T510 659Q492 659 471 656T418 643T357 615T294 567T236 496T189 394T158 260Q156 242 156 221Q156 173 170 136T206 79T256 45T308 28T353 24Q407 24 452 47T514 106Q517 114 529 161T541 214Q541 222 528 224T468 227H431Q425 233 425 235T427 254Q431 267 437 273H454Q494 271 594 271Q634 271 659 271T695 272T707 272Q721 272 721 263Q721 261 719 249Q714 230 709 228Q706 227 694 227Q674 227 653 224Q646 221 643 215T629 164Q620 131 614 108Q589 6 586 3Q584 1 581 1Q571 1 553 21T530 52Q530 53 528 52T522 47Q448 -22 322 -22Q201 -22 126 55T50 252Z"}),e.jsx(n.path,{id:"MJX-1-TEX-N-3D",d:"M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"}),e.jsx(n.path,{id:"MJX-1-TEX-N-28",d:"M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"}),e.jsx(n.path,{id:"MJX-1-TEX-I-1D449",d:"M52 648Q52 670 65 683H76Q118 680 181 680Q299 680 320 683H330Q336 677 336 674T334 656Q329 641 325 637H304Q282 635 274 635Q245 630 242 620Q242 618 271 369T301 118L374 235Q447 352 520 471T595 594Q599 601 599 609Q599 633 555 637Q537 637 537 648Q537 649 539 661Q542 675 545 679T558 683Q560 683 570 683T604 682T668 681Q737 681 755 683H762Q769 676 769 672Q769 655 760 640Q757 637 743 637Q730 636 719 635T698 630T682 623T670 615T660 608T652 599T645 592L452 282Q272 -9 266 -16Q263 -18 259 -21L241 -22H234Q216 -22 216 -15Q213 -9 177 305Q139 623 138 626Q133 637 76 637H59Q52 642 52 648Z"}),e.jsx(n.path,{id:"MJX-1-TEX-N-2C",d:"M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"}),e.jsx(n.path,{id:"MJX-1-TEX-I-1D438",d:"M492 213Q472 213 472 226Q472 230 477 250T482 285Q482 316 461 323T364 330H312Q311 328 277 192T243 52Q243 48 254 48T334 46Q428 46 458 48T518 61Q567 77 599 117T670 248Q680 270 683 272Q690 274 698 274Q718 274 718 261Q613 7 608 2Q605 0 322 0H133Q31 0 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q146 66 215 342T285 622Q285 629 281 629Q273 632 228 634H197Q191 640 191 642T193 659Q197 676 203 680H757Q764 676 764 669Q764 664 751 557T737 447Q735 440 717 440H705Q698 445 698 453L701 476Q704 500 704 528Q704 558 697 578T678 609T643 625T596 632T532 634H485Q397 633 392 631Q388 629 386 622Q385 619 355 499T324 377Q347 376 372 376H398Q464 376 489 391T534 472Q538 488 540 490T557 493Q562 493 565 493T570 492T572 491T574 487T577 483L544 351Q511 218 508 216Q505 213 492 213Z"}),e.jsx(n.path,{id:"MJX-1-TEX-N-29",d:"M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z"})]}),e.jsx(n.g,{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",transform:"scale(1,-1)",children:e.jsxs(n.g,{"data-mml-node":"math",children:[e.jsx(n.g,{"data-mml-node":"mi",children:e.jsx(n.use,{"data-c":"1D43A",xlinkHref:"#MJX-1-TEX-I-1D43A"})}),e.jsx(n.g,{"data-mml-node":"mo",transform:"translate(1063.8,0)",children:e.jsx(n.use,{"data-c":"3D",xlinkHref:"#MJX-1-TEX-N-3D"})}),e.jsx(n.g,{"data-mml-node":"mo",transform:"translate(2119.6,0)",children:e.jsx(n.use,{"data-c":"28",xlinkHref:"#MJX-1-TEX-N-28"})}),e.jsx(n.g,{"data-mml-node":"mi",transform:"translate(2508.6,0)",children:e.jsx(n.use,{"data-c":"1D449",xlinkHref:"#MJX-1-TEX-I-1D449"})}),e.jsx(n.g,{"data-mml-node":"mo",transform:"translate(3277.6,0)",children:e.jsx(n.use,{"data-c":"2C",xlinkHref:"#MJX-1-TEX-N-2C"})}),e.jsx(n.g,{"data-mml-node":"mi",transform:"translate(3722.2,0)",children:e.jsx(n.use,{"data-c":"1D438",xlinkHref:"#MJX-1-TEX-I-1D438"})}),e.jsx(n.g,{"data-mml-node":"mo",transform:"translate(4486.2,0)",children:e.jsx(n.use,{"data-c":"29",xlinkHref:"#MJX-1-TEX-N-29"})})]})})]})})," with vertices ",e.jsx(s,{className:"MathJax",jax:"SVG",children:e.jsxs(n.svg,{style:{verticalAlign:"-0.05ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.74ex",height:"1.595ex",role:"img",focusable:"false",viewBox:"0 -683 769 705",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[e.jsx(n.defs,{children:e.jsx(n.path,{id:"MJX-2-TEX-I-1D449",d:"M52 648Q52 670 65 683H76Q118 680 181 680Q299 680 320 683H330Q336 677 336 674T334 656Q329 641 325 637H304Q282 635 274 635Q245 630 242 620Q242 618 271 369T301 118L374 235Q447 352 520 471T595 594Q599 601 599 609Q599 633 555 637Q537 637 537 648Q537 649 539 661Q542 675 545 679T558 683Q560 683 570 683T604 682T668 681Q737 681 755 683H762Q769 676 769 672Q769 655 760 640Q757 637 743 637Q730 636 719 635T698 630T682 623T670 615T660 608T652 599T645 592L452 282Q272 -9 266 -16Q263 -18 259 -21L241 -22H234Q216 -22 216 -15Q213 -9 177 305Q139 623 138 626Q133 637 76 637H59Q52 642 52 648Z"})}),e.jsx(n.g,{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",transform:"scale(1,-1)",children:e.jsx(n.g,{"data-mml-node":"math",children:e.jsx(n.g,{"data-mml-node":"mi",children:e.jsx(n.use,{"data-c":"1D449",xlinkHref:"#MJX-2-TEX-I-1D449"})})})})]})})," representing tokens and edges ",e.jsx(s,{className:"MathJax",jax:"SVG",children:e.jsxs(n.svg,{style:{verticalAlign:"0"},xmlns:"http://www.w3.org/2000/svg",width:"1.729ex",height:"1.538ex",role:"img",focusable:"false",viewBox:"0 -680 764 680",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[e.jsx(n.defs,{children:e.jsx(n.path,{id:"MJX-3-TEX-I-1D438",d:"M492 213Q472 213 472 226Q472 230 477 250T482 285Q482 316 461 323T364 330H312Q311 328 277 192T243 52Q243 48 254 48T334 46Q428 46 458 48T518 61Q567 77 599 117T670 248Q680 270 683 272Q690 274 698 274Q718 274 718 261Q613 7 608 2Q605 0 322 0H133Q31 0 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q146 66 215 342T285 622Q285 629 281 629Q273 632 228 634H197Q191 640 191 642T193 659Q197 676 203 680H757Q764 676 764 669Q764 664 751 557T737 447Q735 440 717 440H705Q698 445 698 453L701 476Q704 500 704 528Q704 558 697 578T678 609T643 625T596 632T532 634H485Q397 633 392 631Q388 629 386 622Q385 619 355 499T324 377Q347 376 372 376H398Q464 376 489 391T534 472Q538 488 540 490T557 493Q562 493 565 493T570 492T572 491T574 487T577 483L544 351Q511 218 508 216Q505 213 492 213Z"})}),e.jsx(n.g,{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",transform:"scale(1,-1)",children:e.jsx(n.g,{"data-mml-node":"math",children:e.jsx(n.g,{"data-mml-node":"mi",children:e.jsx(n.use,{"data-c":"1D438",xlinkHref:"#MJX-3-TEX-I-1D438"})})})})]})})," representing liquidity pools:"]}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(n.code,{children:e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"DFS(v) = visit all neighbors of v recursively without revisiting nodes in the current path"})})})})}),`
`,e.jsxs(n.p,{children:[`Edges are bidirectional between token pairs:
`,e.jsx(s,{className:"MathJax",jax:"SVG",children:e.jsxs(n.svg,{style:{verticalAlign:"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"6.933ex",height:"1.645ex",role:"img",focusable:"false",viewBox:"0 -716 3064.6 727",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[e.jsxs(n.defs,{children:[e.jsx(n.path,{id:"MJX-4-TEX-I-1D434",d:"M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z"}),e.jsx(n.path,{id:"MJX-4-TEX-N-2194",d:"M263 479Q267 501 271 506T288 511Q308 511 308 500Q308 493 303 475Q293 438 278 406T246 352T215 315T185 287T165 270H835Q729 349 696 475Q691 493 691 500Q691 511 711 511Q720 511 723 510T729 506T732 497T735 481T743 456Q765 389 816 336T935 261Q944 258 944 250Q944 244 939 241T915 231T877 212Q836 186 806 152T761 85T740 35T732 4Q730 -6 727 -8T711 -11Q691 -11 691 0Q691 7 696 25Q728 151 835 230H165Q167 228 182 216T211 189T244 152T277 96T303 25Q308 7 308 0Q308 -11 288 -11Q281 -11 278 -11T272 -7T267 2T263 21Q245 94 195 151T73 236Q58 242 55 247Q55 254 59 257T73 264Q144 292 194 349T263 479Z"}),e.jsx(n.path,{id:"MJX-4-TEX-I-1D435",d:"M231 637Q204 637 199 638T194 649Q194 676 205 682Q206 683 335 683Q594 683 608 681Q671 671 713 636T756 544Q756 480 698 429T565 360L555 357Q619 348 660 311T702 219Q702 146 630 78T453 1Q446 0 242 0Q42 0 39 2Q35 5 35 10Q35 17 37 24Q42 43 47 45Q51 46 62 46H68Q95 46 128 49Q142 52 147 61Q150 65 219 339T288 628Q288 635 231 637ZM649 544Q649 574 634 600T585 634Q578 636 493 637Q473 637 451 637T416 636H403Q388 635 384 626Q382 622 352 506Q352 503 351 500L320 374H401Q482 374 494 376Q554 386 601 434T649 544ZM595 229Q595 273 572 302T512 336Q506 337 429 337Q311 337 310 336Q310 334 293 263T258 122L240 52Q240 48 252 48T333 46Q422 46 429 47Q491 54 543 105T595 229Z"})]}),e.jsx(n.g,{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",transform:"scale(1,-1)",children:e.jsxs(n.g,{"data-mml-node":"math",children:[e.jsx(n.g,{"data-mml-node":"mi",children:e.jsx(n.use,{"data-c":"1D434",xlinkHref:"#MJX-4-TEX-I-1D434"})}),e.jsx(n.g,{"data-mml-node":"mo",transform:"translate(1027.8,0)",children:e.jsx(n.use,{"data-c":"2194",xlinkHref:"#MJX-4-TEX-N-2194"})}),e.jsx(n.g,{"data-mml-node":"mi",transform:"translate(2305.6,0)",children:e.jsx(n.use,{"data-c":"1D435",xlinkHref:"#MJX-4-TEX-I-1D435"})})]})})]})})]}),`
`,e.jsxs(n.h4,{id:"modified-dfs-traversal",children:["Modified DFS Traversal",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#modified-dfs-traversal",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"The route manager iteratively explores each node while accounting for:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Pool and token blacklists to prevent invalid routes"}),`
`,e.jsx(n.li,{children:"Multi-protocol support (Uniswap V2/V3/V4, SushiSwap, Pancakeswap, Ekubo, Balancer, Curve)"}),`
`,e.jsx(n.li,{children:"Flash loan constraints to avoid locking conflicts"}),`
`,e.jsx(n.li,{children:"Real-time V4 eligibility of tokens"}),`
`]}),`
`,e.jsxs(n.h3,{id:"route-evaluation-algorithm",children:["Route Evaluation Algorithm",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#route-evaluation-algorithm",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"The route evaluation process leverages the Bellman-Ford algorithm to detect negative-weight cycles that correspond to profitable arbitrage opportunities:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(n.code,{children:e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"d(v) = min_{(u,v) in E} [ d(u) + w(u,v) ]"})})})})}),`
`,e.jsx(n.p,{children:"Negative-weight cycles represent opportunities where the sequence of swaps results in a net gain after accounting for fees."}),`
`,e.jsxs(n.h3,{id:"optimal-amount-calculator",children:["Optimal Amount Calculator",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#optimal-amount-calculator",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["The system uses a sophisticated ",e.jsx(n.strong,{children:"exponential search + binary search"})," algorithm to find the optimal input amount:"]}),`
`,e.jsxs(n.h4,{id:"phase-1-doubling-search-exponential-growth",children:["Phase 1: Doubling Search (Exponential Growth)",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#phase-1-doubling-search-exponential-growth",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Set ",e.jsx(n.code,{children:"A = A_min"})]}),`
`,e.jsxs(n.li,{children:["Repeat for maximum iterations:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Evaluate profit: ",e.jsx(n.code,{children:"P = profit(A)"})]}),`
`,e.jsxs(n.li,{children:["If ",e.jsx(n.code,{children:"P > P_best"}),", update best values"]}),`
`,e.jsx(n.li,{children:"If profit drops below threshold, stop doubling"}),`
`,e.jsxs(n.li,{children:["Else, double the input: ",e.jsx(n.code,{children:"A = 2 * A"})]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.h4,{id:"phase-2-binary-search-refinement",children:["Phase 2: Binary Search (Refinement)",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#phase-2-binary-search-refinement",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["While ",e.jsx(n.code,{children:"A_max - A_min > ε"})," and iterations < max:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Compute midpoint: ",e.jsx(n.code,{children:"A_mid = (A_min + A_max) / 2"})]}),`
`,e.jsx(n.li,{children:"Evaluate profit at midpoint"}),`
`,e.jsx(n.li,{children:"Update best if midpoint is better"}),`
`,e.jsx(n.li,{children:"Update bounds based on profit comparison"}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.h3,{id:"profitability-calculation",children:["Profitability Calculation",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#profitability-calculation",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["Let ",e.jsx(n.code,{children:"A0"})," be amount_in (start token), ",e.jsx(n.code,{children:"Ak"})," be amount_out (end token), ",e.jsx(n.code,{children:"fee_hundredths_bip"})," the flash fee in 1e-6 units:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"swap_profit_percentage = ((Ak − A0) / A0) × 100"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"flash_fee_pct = fee_hundredths_bip / 10_000"})," (as percent)"]}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"net_profit_percentage = swap_profit_percentage − flash_fee_pct"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"net_profit_token = Ak − A0 − floor(A0 × fee_hundredths_bip / 1_000_000)"})}),`
`]}),`
`,e.jsxs(n.p,{children:["Threshold gating uses ",e.jsx(n.code,{children:"net_profit_percentage >= profit_threshold"})," (default 0.0%)."]}),`
`,e.jsxs(n.h3,{id:"performance-metrics",children:["Performance Metrics",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#performance-metrics",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h4,{id:"route-generation-performance",children:["Route Generation Performance",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#route-generation-performance",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"2.42µs"})," for 3-hop routes"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"833ns"})," for 4-hop routes"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"791ns"})," for 5-hop routes"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"1,983,160 routes"})," (3-hop) generated in ~222 seconds"]}),`
`]}),`
`,e.jsxs(n.h4,{id:"graph-building-performance",children:["Graph Building Performance",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#graph-building-performance",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"193µs"})," for 37 pools"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"33µs"})," for 2 pools"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"O(deg)"})," updates for efficient streaming"]}),`
`]}),`
`,e.jsxs(n.h4,{id:"evaluation-performance",children:["Evaluation Performance",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#evaluation-performance",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Over 1,000 routes/second"})," evaluation capability"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"424µs"})," average route evaluation time"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"100%"})," execution success rate in production testing"]}),`
`]}),`
`,e.jsxs(n.h3,{id:"route-compatibility-rules",children:["Route Compatibility Rules",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#route-compatibility-rules",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h4,{id:"flash-loan-compatibility",children:["Flash Loan Compatibility",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#flash-loan-compatibility",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"✅ Route [USDC → WETH → WBTC] (V2/V3 only) → V4 flash loans allowed"}),`
`,e.jsx(n.li,{children:"❌ Route [USDC → WETH (V4) → DAI] → V4 flash loans blocked, fallback to V3"}),`
`]}),`
`,e.jsxs(n.h4,{id:"pruning-heuristics",children:["Pruning Heuristics",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#pruning-heuristics",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Avoid cycles (unless for cycle arbitrage)"}),`
`,e.jsx(n.li,{children:"Check for duplicate pools in route"}),`
`,e.jsx(n.li,{children:"Limit routes per token to prevent explosion"}),`
`,e.jsx(n.li,{children:"Protocol-specific pruning (V4 overflow protection)"}),`
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
`})]})}function o(i={}){const{wrapper:n}={...a(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{o as default,l as frontmatter};
