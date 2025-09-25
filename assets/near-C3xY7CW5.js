import{f as r,j as e}from"./index-CxegV_nk.js";const s={title:"NEAR",description:"undefined"};function o(t){const n={a:"a",blockquote:"blockquote",code:"code",defs:"defs",div:"div",em:"em",g:"g",h1:"h1",h2:"h2",header:"header",li:"li","mjx-container":"mjx-container",ol:"ol",p:"p",path:"path",strong:"strong",style:"style",svg:"svg",ul:"ul",use:"use",...r(),...t.components},i=n["mjx-container"];return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"near",children:["NEAR",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#near",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"date: 2023-02-04"}),`
`,e.jsx(n.li,{children:"last updated: 2023-02-04"}),`
`]}),`
`,e.jsxs(n.h2,{id:"overview",children:["Overview",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#overview",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Near supports We both secp256k1 and ed25519 for account keys and ed25519 for signing transactions. They currently use the ed25519_dalek and sha2 libraries for crypto."}),`
`,e.jsxs(n.h2,{id:"consensus-mechanism",children:["Consensus Mechanism",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#consensus-mechanism",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["Please review ",e.jsx(n.a,{href:"https://github.com/near/NEPs/blob/master/specs/ChainSpec/Consensus.md",children:"NEAR Chainspec for Consensus"})]}),`
`,e.jsxs(n.h2,{id:"light-client-support",children:["Light Client Support",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#light-client-support",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://nomicon.io/ChainSpec/LightClient",children:"NEAR Light Client Documentation"})," gives an overview of how light clients work. At a high level the light client needs to fetch at least one block per ",e.jsx(n.a,{href:"https://docs.near.org/concepts/basics/epoch",children:"epoch"})," i.e. every 42,200 blocks or approxmiately 12 hours. Also Having the LightClientBlockView for block ",e.jsx(i,{className:"MathJax",jax:"SVG",children:e.jsxs(n.svg,{style:{verticalAlign:"0"},xmlns:"http://www.w3.org/2000/svg",width:"1.717ex",height:"1.545ex",role:"img",focusable:"false",viewBox:"0 -683 759 683",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[e.jsx(n.defs,{children:e.jsx(n.path,{id:"MJX-1-TEX-I-1D435",d:"M231 637Q204 637 199 638T194 649Q194 676 205 682Q206 683 335 683Q594 683 608 681Q671 671 713 636T756 544Q756 480 698 429T565 360L555 357Q619 348 660 311T702 219Q702 146 630 78T453 1Q446 0 242 0Q42 0 39 2Q35 5 35 10Q35 17 37 24Q42 43 47 45Q51 46 62 46H68Q95 46 128 49Q142 52 147 61Q150 65 219 339T288 628Q288 635 231 637ZM649 544Q649 574 634 600T585 634Q578 636 493 637Q473 637 451 637T416 636H403Q388 635 384 626Q382 622 352 506Q352 503 351 500L320 374H401Q482 374 494 376Q554 386 601 434T649 544ZM595 229Q595 273 572 302T512 336Q506 337 429 337Q311 337 310 336Q310 334 293 263T258 122L240 52Q240 48 252 48T333 46Q422 46 429 47Q491 54 543 105T595 229Z"})}),e.jsx(n.g,{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",transform:"scale(1,-1)",children:e.jsx(n.g,{"data-mml-node":"math",children:e.jsx(n.g,{"data-mml-node":"mi",children:e.jsx(n.use,{"data-c":"1D435",xlinkHref:"#MJX-1-TEX-I-1D435"})})})})]})})," is sufficient to be able to verify any statement about state or outcomes in any block in the ancestry of ",e.jsx(i,{className:"MathJax",jax:"SVG",children:e.jsxs(n.svg,{style:{verticalAlign:"0"},xmlns:"http://www.w3.org/2000/svg",width:"1.717ex",height:"1.545ex",role:"img",focusable:"false",viewBox:"0 -683 759 683",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[e.jsx(n.defs,{children:e.jsx(n.path,{id:"MJX-2-TEX-I-1D435",d:"M231 637Q204 637 199 638T194 649Q194 676 205 682Q206 683 335 683Q594 683 608 681Q671 671 713 636T756 544Q756 480 698 429T565 360L555 357Q619 348 660 311T702 219Q702 146 630 78T453 1Q446 0 242 0Q42 0 39 2Q35 5 35 10Q35 17 37 24Q42 43 47 45Q51 46 62 46H68Q95 46 128 49Q142 52 147 61Q150 65 219 339T288 628Q288 635 231 637ZM649 544Q649 574 634 600T585 634Q578 636 493 637Q473 637 451 637T416 636H403Q388 635 384 626Q382 622 352 506Q352 503 351 500L320 374H401Q482 374 494 376Q554 386 601 434T649 544ZM595 229Q595 273 572 302T512 336Q506 337 429 337Q311 337 310 336Q310 334 293 263T258 122L240 52Q240 48 252 48T333 46Q422 46 429 47Q491 54 543 105T595 229Z"})}),e.jsx(n.g,{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",transform:"scale(1,-1)",children:e.jsx(n.g,{"data-mml-node":"math",children:e.jsx(n.g,{"data-mml-node":"mi",children:e.jsx(n.use,{"data-c":"1D435",xlinkHref:"#MJX-2-TEX-I-1D435"})})})})]})})," (including ",e.jsx(i,{className:"MathJax",jax:"SVG",children:e.jsxs(n.svg,{style:{verticalAlign:"0"},xmlns:"http://www.w3.org/2000/svg",width:"1.717ex",height:"1.545ex",role:"img",focusable:"false",viewBox:"0 -683 759 683",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[e.jsx(n.defs,{children:e.jsx(n.path,{id:"MJX-3-TEX-I-1D435",d:"M231 637Q204 637 199 638T194 649Q194 676 205 682Q206 683 335 683Q594 683 608 681Q671 671 713 636T756 544Q756 480 698 429T565 360L555 357Q619 348 660 311T702 219Q702 146 630 78T453 1Q446 0 242 0Q42 0 39 2Q35 5 35 10Q35 17 37 24Q42 43 47 45Q51 46 62 46H68Q95 46 128 49Q142 52 147 61Q150 65 219 339T288 628Q288 635 231 637ZM649 544Q649 574 634 600T585 634Q578 636 493 637Q473 637 451 637T416 636H403Q388 635 384 626Q382 622 352 506Q352 503 351 500L320 374H401Q482 374 494 376Q554 386 601 434T649 544ZM595 229Q595 273 572 302T512 336Q506 337 429 337Q311 337 310 336Q310 334 293 263T258 122L240 52Q240 48 252 48T333 46Q422 46 429 47Q491 54 543 105T595 229Z"})}),e.jsx(n.g,{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",transform:"scale(1,-1)",children:e.jsx(n.g,{"data-mml-node":"math",children:e.jsx(n.g,{"data-mml-node":"mi",children:e.jsx(n.use,{"data-c":"1D435",xlinkHref:"#MJX-3-TEX-I-1D435"})})})})]})})," itself)."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"The RPC returns the LightClientBlock for the block as far into the future from the last known hash as possible for the light client to still accept it. Specifically, it either returns the last final block of the next epoch, or the last final known block. If there's no newer final block than the one the light client knows about, the RPC returns an empty result."}),`
`,e.jsx(n.p,{children:"A standalone light client would bootstrap by requesting next blocks until it receives an empty result, and then periodically request the next light client block."}),`
`,e.jsx(n.p,{children:"A smart contract-based light client that enables a bridge to NEAR on a different blockchain naturally cannot request blocks itself. Instead external oracles query the next light client block from one of the full nodes, and submit it to the light client smart contract. The smart contract-based light client performs the same checks described above, so the oracle doesn't need to be trusted."}),`
`]}),`
`,e.jsxs(n.p,{children:["Following is an exerpt from the ",e.jsx(n.a,{href:"https://github.com/near/NEPs/blob/master/specs/ChainSpec/LightClient.md",children:"Near Light Client Specification"})]}),`
`,e.jsx(n.strong,{children:"Near Light Client"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"The state of the light client is defined by:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"BlockHeaderInnerLiteView"})," for the current head (which contains ",e.jsx(n.code,{children:"height"}),", ",e.jsx(n.code,{children:"epoch_id"}),", ",e.jsx(n.code,{children:"next_epoch_id"}),", ",e.jsx(n.code,{children:"prev_state_root"}),", ",e.jsx(n.code,{children:"outcome_root"}),", ",e.jsx(n.code,{children:"timestamp"}),", the hash of the block producers set for the next epoch ",e.jsx(n.code,{children:"next_bp_hash"}),", and the merkle root of all the block hashes ",e.jsx(n.code,{children:"block_merkle_root"}),");"]}),`
`,e.jsx(n.li,{children:"The set of block producers for the current and next epochs."}),`
`]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"epoch_id"})," refers to the epoch to which the block that is the current known head belongs, and ",e.jsx(n.code,{children:"next_epoch_id"})," is the epoch that will follow."]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Light clients operate by periodically fetching instances of ",e.jsx(n.code,{children:"LightClientBlockView"})," via particular RPC end-point described ",e.jsx(n.a,{href:"#rpc-end-points",children:"below"}),"."]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Light client doesn't need to receive ",e.jsx(n.code,{children:"LightClientBlockView"})," for all the blocks. Having the ",e.jsx(n.code,{children:"LightClientBlockView"})," for block ",e.jsx(n.code,{children:"B"})," is sufficient to be able to verify any statement about state or outcomes in any block in the ancestry of ",e.jsx(n.code,{children:"B"})," (including ",e.jsx(n.code,{children:"B"})," itself). In particular, having the ",e.jsx(n.code,{children:"LightClientBlockView"})," for the head is sufficient to locally verify any statement about state or outcomes in any block on the canonical chain."]}),`
`,e.jsxs(n.p,{children:["However, to verify the validity of a particular ",e.jsx(n.code,{children:"LightClientBlockView"}),", the light client must have verified a ",e.jsx(n.code,{children:"LightClientBlockView"})," for at least one block in the preceding epoch, thus to sync to the head the light client will have to fetch and verify a ",e.jsx(n.code,{children:"LightClientBlockView"})," per epoch passed."]}),`
`]}),`
`,e.jsx(n.strong,{children:"Near Rainbow Bridge: NEAR Light Client on Ethereum Sample Implementation"}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["The following is an excerpt from a blog by near on ",e.jsx(n.a,{href:"https://near.org/blog/eth-near-rainbow-bridge/",children:"eth-near-rainbow-bridge"})]})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"NearOnEthClient is an implementation of the NEAR light client in Solidity as an Ethereum contract. Unlike EthOnNearClient it does not need to verify every single NEAR header and can skip most of them as long as it verifies at least one header per NEAR epoch, which is about 43k blocks and lasts about half a day. As a result, NearOnEthClient can memorize hashes of all submitted NEAR headers in history, so if you are making a transfer from NEAR to Ethereum and it gets interrupted you don’t need to worry and you can resume it any time, even months later. Another useful property of the NEAR light client is that every NEAR header contains a root of the merkle tree computed from all headers before it. As a result, if you have one NEAR header you can efficiently verify any event that happened in any header before it."}),`
`,e.jsx(n.p,{children:"Another useful property of the NEAR light client is that it only accepts final blocks, and final blocks cannot leave the canonical chain in NEAR. This means that NearOnEthClient does not need to worry about forks."}),`
`,e.jsxs(n.p,{children:["However, unfortunately, NEAR uses ",e.jsx(n.a,{href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-665.md",children:"Ed25519"})," to sign messages of the validators who approve the blocks, and this signature is not available as an EVM precompile. It makes verification of all signatures of a single NEAR header prohibitively expensive. So technically, we cannot verify one NEAR header within one contract call to NearOnEthClient. Therefore we adopt the ",e.jsx(n.a,{href:"https://medium.com/@deaneigenmann/optimistic-contracts-fb75efa7ca84",children:"optimistic approach"})," where NearOnEthClient verifies everything in the NEAR header except the signatures. Then anyone can challenge a signature in a submitted header within a 4-hour challenge window. The challenge requires verification of a single Ed25519 signature which would cost about 500k Ethereum gas (expensive, but possible). The user submitting the NEAR header would have to post a bond in Ethereum tokens, and a successful challenge would burn half of the bond and return the other half to the challenger. The bond should be large enough to pay for the gas even if the gas price increases exponentially during the 4 hours. For instance, a 20 ETH bond would cover gas price hikes up to 20000 Gwei. This optimistic approach requires having a watchdog service that monitors submitted NEAR headers and challenges any headers with invalid signatures. For added security, independent users can run several watchdog services."]}),`
`]}),`
`,e.jsxs(n.h2,{id:"references",children:["References",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#references",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.strong,{children:"Consensus"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://nomicon.io/ChainSpec/Consensus",children:"Consensus, NEAR Nomicon"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/near/nearcore",children:"NEAR blockchain core, (near)"})}),`
`]}),`
`,e.jsx(n.strong,{children:"Signing"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://docs.near.org/integrator/faq#how-are-cryptographic-functions-used",children:"Near Signing"}),": Near documentation on cryptographic functions."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/near/nearcore/blob/master/core/crypto/src/signature.rs",children:"nearcore signature.rs (codebase)"}),": Near signature code (rust)."]}),`
`]}),`
`,e.jsx(n.strong,{children:"Staking"}),`
`,e.jsx(n.strong,{children:"Light Client"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://nomicon.io/ChainSpec/LightClient",children:"Near Light Client"}),": Near Lithg Client Specification document."]}),`
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
`})]})}function l(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{l as default,s as frontmatter};
