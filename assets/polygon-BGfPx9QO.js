import{f as r,j as e}from"./index-gXrJDCdi.js";const o={title:"Polygon",description:"undefined"};function i(n){const s={a:"a",blockquote:"blockquote",code:"code",div:"div",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.header,{children:e.jsxs(s.h1,{id:"polygon",children:["Polygon",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#polygon",children:e.jsx(s.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"date: 2023-02-04"}),`
`,e.jsx(s.li,{children:"last updated: 2023-02-04"}),`
`]}),`
`,e.jsxs(s.h2,{id:"overview",children:["Overview",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#overview",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"Polygon is representative because it uses ECDSA on secp256k1 and a relatively fixed validator set."}),`
`,e.jsxs(s.p,{children:["The consensus protocol is based on Peppermint",e.jsx("sup",{children:e.jsx(s.a,{href:"#f8",children:"8"})}),", a modified version of Tendermint. Validators sign produced blocks using the ECDSA signature scheme on secp256k1 curves",e.jsx("sup",{children:e.jsx(s.a,{href:"#f9",children:"9"})}),". Currently, the validator set size is fixed at 100 and only changes when a current validator resigns. This restriction will change when a new auction mechanism is implemented.",e.jsx("sup",{children:e.jsx(s.a,{href:"#f10",children:"10"})})]}),`
`,e.jsxs(s.h2,{id:"consensus-mechanism",children:["Consensus Mechanism",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#consensus-mechanism",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"Polygon uses Peppermint (a modified version of tendermint) Consensus."}),`
`,e.jsxs(s.p,{children:["Following is an excerpt from ",e.jsx(s.a,{href:"https://github.com/maticnetwork/matic-docs/blob/master/docs/pos/polygon-architecture.mdx",children:"Polygon Architecture"}),"."]}),`
`,e.jsx(s.strong,{children:"Polygon Architecture"}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:"Heimdall is the proof of stake validation layer that handles the aggregation of blocks produced by Bor into a Merkle tree and publishes the Merkle root periodically to the root chain. The periodic publishing of snapshots of the Bor sidechain is called checkpoints."}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsx(s.li,{children:"Validates all the blocks since the last checkpoint."}),`
`,e.jsx(s.li,{children:"Creates a Merkle tree of the block hashes."}),`
`,e.jsx(s.li,{children:"Publishes the Merkle root hash to the Ethereum mainnet."}),`
`]}),`
`,e.jsx(s.p,{children:"Checkpoints are important for two reasons:"}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsx(s.li,{children:"Providing finality on the root chain."}),`
`,e.jsx(s.li,{children:"Providing proof of burn in withdrawal of assets."}),`
`]}),`
`,e.jsx(s.p,{children:"An overview of the process:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"A subset of active validators from the pool is selected to act as block producers for a span. These block producers are responsible for creating blocks and broadcasting the created blocks on the network."}),`
`,e.jsx(s.li,{children:"A checkpoint includes the Merkle root hash of all blocks created during any given interval. All nodes validate the Merkle root hash and attach their signature to it."}),`
`,e.jsx(s.li,{children:"A selected proposer from the validator set is responsible for collecting all signatures for a particular checkpoint and committing the checkpoint on the Ethereum mainnet."}),`
`,e.jsx(s.li,{children:"The responsibility of creating blocks and proposing checkpoints is variably dependent on a validator’s stake ratio in the overall pool."}),`
`]}),`
`,e.jsx(s.p,{children:"More details on Heimdall are available on the Heimdall architecture guide."}),`
`]}),`
`,e.jsxs(s.p,{children:["This image from ",e.jsx(s.a,{href:"https://wiki.polygon.technology/docs/pos/bor/",children:"Bor Architecture"})," helps give a better understanding of how Ethereum, Heimdall and Bor work together."]}),`
`,e.jsx(s.p,{children:e.jsx(s.img,{src:"/images/research/matic_structure.png",alt:"Matic Structure",title:"Matic Structure"})}),`
`,e.jsxs(s.h2,{id:"signing-mechanism",children:["Signing Mechanism",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#signing-mechanism",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["Following is an excerpt from and ",e.jsx(s.a,{href:"https://github.com/maticnetwork/matic-docs/blob/master/docs/pos/peppermint.mdx",children:"Peppermint.md"}),"."]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:"Peppermint is a modified Tendermint. It is changed to make it compatible with Ethereum addresses and verifiable on Ethereum chain."}),`
`,e.jsx(s.p,{children:"Overview"}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsx(s.li,{children:"Changes to signature scheme"}),`
`,e.jsxs(s.li,{children:["Changes to ",e.jsx(s.code,{children:"vote"})," to make it verifiable on Ethereum smart contract"]}),`
`,e.jsxs(s.li,{children:["Changes to ",e.jsx(s.code,{children:"vote"})," encoding scheme"]}),`
`]}),`
`,e.jsxs(s.p,{children:["Peppermint uses ",e.jsx(s.code,{children:"secp256k1"})," signature scheme to verify Tendermint votes on solidity smart contract."]}),`
`,e.jsxs(s.p,{children:["Source: ",e.jsx(s.a,{href:"https://github.com/maticnetwork/tendermint/blob/peppermint/crypto/secp256k1/secp256k1_nocgo.go",children:"https://github.com/maticnetwork/tendermint/blob/peppermint/crypto/secp256k1/secp256k1_nocgo.go"})]}),`
`,e.jsxs(s.p,{children:["It adds ",e.jsx(s.code,{children:"Data"})," field into ",e.jsx(s.code,{children:"Vote"})," and ",e.jsx(s.code,{children:"Proposal"})," struct to get ",e.jsx(s.code,{children:"hash"})," for transactions in the block. On smart contract, it checks if ",e.jsx(s.code,{children:"Data"})," matches with checkpoint data hash and majority (⅔+1) of validator signatures. The idea is to verify if majority of the validator set agrees on transaction in the contract."]}),`
`,e.jsxs(s.p,{children:["Peppermint uses RLP to get ",e.jsx(s.code,{children:"Vote"})," bytes instead of Amino encoding. Here ",e.jsx(s.code,{children:"Data"})," is ",e.jsx(s.code,{children:"Txs.Hash()"})," for the block."]}),`
`,e.jsxs(s.p,{children:["Source: ",e.jsx(s.a,{href:"https://github.com/maticnetwork/tendermint/blob/peppermint/types/canonical.go",children:"https://github.com/maticnetwork/tendermint/blob/peppermint/types/canonical.go"})]}),`
`]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// [peppermint] create RLP vote to decode in contract"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"type"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" CanonicalRLPVote"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" struct"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ChainID "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"string"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" Type    "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"byte"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" Height  "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"uint"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" Round   "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"uint"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" Data    []"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"byte"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})})}),`
`,e.jsx(s.p,{children:"And using RLP encoding lib to get byte data for signature on Vote."}),`
`,e.jsxs(s.p,{children:["Source: ",e.jsx(s.a,{href:"https://github.com/maticnetwork/tendermint/blob/peppermint/types/vote.go#L75-L82",children:"https://github.com/maticnetwork/tendermint/blob/peppermint/types/vote.go#L75-L82"})]}),`
`]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"func"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ("}),e.jsx(s.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"vote "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"*"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"Vote"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:") "}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"SignBytes"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"chainID"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" string"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:") []"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"byte"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:" // [peppermint] converted from amino to rlp"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" bz, err "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":="}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" rlp."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"EncodeToBytes"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"CanonicalizeVote"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(chainID, vote))"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" if"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" err "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"!="}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" nil"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"  panic"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(err)"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" }"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" return"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" bz"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})})}),`
`,e.jsxs(s.p,{children:["Complete Source: ",e.jsx(s.a,{href:"https://github.com/maticnetwork/tendermint",children:"https://github.com/maticnetwork/tendermint"})]}),`
`]}),`
`,e.jsx(s.strong,{children:"Note: As of March 12th, 2023 the pepperming votes function now uses amino"}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/maticnetwork/tendermint/blob/peppermint/types/vote.go",children:"tendermint/types/vote.go"})}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"func"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ("}),e.jsx(s.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"vote "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"*"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"Vote"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:") "}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"SignBytes"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"chainID"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" string"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:") []"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"byte"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:" // [peppermint] converted from amino to rlp"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" bz, err "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":="}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" cdc."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"MarshalBinaryLengthPrefixed"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"CanonicalizeVote"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(chainID, vote))"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" if"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" err "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"!="}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" nil"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"  panic"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(err)"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" }"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" return"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" bz"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})})}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/maticnetwork/tendermint/blob/peppermint/consensus/codec.go",children:"tendermint/consensus/codec.go"})}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"package"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" consensus"})]}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"import"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ("})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" amino "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"'}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"github.com/tendermint/go-amino"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"'})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "'}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"github.com/tendermint/tendermint/types"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"'})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:")"})}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"var"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" cdc "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" amino."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"NewCodec"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"()"})]}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"func"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" init"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"() {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" RegisterConsensusMessages"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(cdc)"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" RegisterWALMessages"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(cdc)"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" types."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"RegisterBlockAmino"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(cdc)"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})})}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/maticnetwork/tendermint/blob/peppermint/p2p/codec.go",children:"tendermint/p2p/codec.go"})}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"package"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" p2p"})]}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"import"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ("})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" amino "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"'}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"github.com/tendermint/go-amino"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"'})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" cryptoAmino "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"'}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"github.com/tendermint/tendermint/crypto/encoding/amino"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"'})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:")"})}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"var"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" cdc "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" amino."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"NewCodec"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"()"})]}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"func"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" init"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"() {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" cryptoAmino."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"RegisterAmino"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(cdc)"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})})}),`
`,e.jsxs(s.h2,{id:"code-review",children:["Code Review",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#code-review",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["Polygon's ",e.jsx(s.a,{href:"https://github.com/maticnetwork/tendermint",children:"peppermint fork of tendermint"})," was forked from ",e.jsx(s.a,{href:"https://github.com/tendermint/tendermint",children:"tendermint"})," and as such the codebase has similar functions to those documented in ",e.jsx(s.a,{href:"/cosmos#code-review",children:"cosmos code review"}),"."]}),`
`,e.jsx(s.p,{children:"The major changes are to the consensus and signing (see above)"}),`
`,e.jsxs(s.p,{children:["Polygon's ",e.jsx(s.a,{href:"https://github.com/maticnetwork/bor",children:"bor"})," is cloned from ",e.jsx(s.a,{href:"https://github.com/ethereum/go-ethereum",children:"geth"})," and as such the codebase has similar functions to those documented in ",e.jsx(s.a,{href:"/ethereum-1-0#code-review",children:"ethereum 1-0 code review"}),"."]}),`
`,e.jsxs(s.h3,{id:"signing",children:["Signing",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#signing",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/maticnetwork/tendermint/tree/peppermint/crypto/secp256k1",children:"Peppermint secp256k1 Codebase"}),": Peppermint ECDSA Secp256k1 curve codebase (go).",`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/maticnetwork/tendermint/blob/peppermint/crypto/secp256k1/secp256k1_nocgo.go#L21",children:"Peppermint secp256k1 signing code"}),": Peppermint sign function (go). ",e.jsxs(s.em,{children:["Sign creates an ECDSA signature on curve Secp256k1, using SHA256 on the msg. The returned signature will be of the form R ",e.jsx(s.code,{children:"||"})," S (in lower-S form)."]})]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(s.h3,{id:"consensus",children:["Consensus",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#consensus",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/maticnetwork/tendermint",children:"Peppermint"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/maticnetwork/tendermint/blob/peppermint/consensus/state.go#L886",children:"state.go"}),": Modified to support ",e.jsx(s.a,{href:"https://wiki.polygon.technology/docs/pos/heimdall/overview",children:"heimdall"}),"."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(s.h2,{id:"references",children:["References",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#references",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.strong,{children:"Consensus"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://arxiv.org/pdf/1807.04938.pdf",children:"The latest gossip on BFT consensus"}),": The paper presents Tendermint, a new protocol for ordering events in a distributed network under adversarial conditions."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://wiki.polygon.technology/docs/pos/heimdall/overview/",children:"Heimdall Documentation"}),": Heimdall consensus engine uses the Cosmos-SDK and a forked version of Tendermint, called Peppermint."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://wiki.polygon.technology/docs/pos/peppermint/",children:"Peppermint Documentation"}),": Peppermint is a modified Tendermint. It is changed to make it compatible with Ethereum addresses and verifiable on Ethereum chain."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/maticnetwork/tendermint/tree/peppermint",children:"Peppermint Codebase"}),": Polygon fork of tendermint codebase (go).",`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/maticnetwork/tendermint/blob/peppermint/consensus/state.go#L70",children:"Peppermint Consensus Code"}),": Peppermint Consensus (go). ",e.jsx(s.em,{children:"ConsensusState handles execution of the consensus algorithm. It processes votes and proposals, and upon reaching agreement, commits blocks to the chain and executes them against the application. The internal state machine receives input from peers, the internal validator, and from a timer."})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/maticnetwork/tendermint/blob/master/config/config.go#L443",children:"Peppermint Consenus Configuration Code"}),": Peppermint Consensus Configuration(go). ",e.jsx(s.em,{children:"defines the configuration for the Tendermint consensus service, including timeouts and details about the Write Ahead Logs (WAL) and the block structure."})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/maticnetwork/tendermint/blob/peppermint/types/validator_set.go",children:"Peppermint Validator Set Code"}),": Peppermint Validators (go). ",e.jsx(s.em,{children:"ValidatorSet represent a set of"}),"Validator at a given height.*"]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://wiki.polygon.technology/docs/pos/bor/consensus/",children:"Bor Consensus Documentation"}),": Bor consensus is inspired by Clique consensus: ",e.jsx(s.a,{href:"https://eips.ethereum.org/EIPS/eip-225",children:"https://eips.ethereum.org/EIPS/eip-225"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://eips.ethereum.org/EIPS/eip-225",children:"EIP-225: Clique proof-of-authority consensus protocol"}),": Clique is a proof-of-authority consensus protocol. It shadows the design of Ethereum mainnet, so it can be added to any client with minimal effort."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://polygon.technology/blog/heimdall-and-bor",children:"Heimdall and Bor Article"}),": Article explaining Polygon(Matic) hybrid Plasma + Proof-of-Stake (PoS) platform."]}),`
`]}),`
`,e.jsx(s.strong,{children:"Staking"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://wiki.polygon.technology/docs/pos/heimdall/modules/staking/",children:"Hemidall Staking Documentation"})}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://staking.polygon.technology/",children:"Polygon Staking App"}),": Polygon Staking Application listing 100 validators"]}),`
`]}),`
`,e.jsx(s.strong,{children:"Additional"}),`
`,e.jsxs(s.p,{children:[e.jsx("a",{name:"f8",children:"[8]"}),`
`,e.jsx("a",{name:"f9",children:"[9]"})," See notes and links to code in ",e.jsx(s.a,{href:"https://wiki.polygon.technology/docs/pos/peppermint/",children:`Peppermint
summary`})]}),`
`,e.jsxs(s.p,{children:[e.jsx("a",{name:"f10",children:"[10]"}),` See Polygon validator
`,e.jsx(s.a,{href:"https://wiki.polygon.technology/docs/maintain/validate/validator-responsibilities/",children:"documentations"})]})]})}function t(n={}){const{wrapper:s}={...r(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(i,{...n})}):i(n)}export{t as default,o as frontmatter};
