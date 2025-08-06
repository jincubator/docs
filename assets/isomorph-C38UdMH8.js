import{f as r,j as e}from"./index-DqfsgKWs.js";const l={title:"Isomorph",description:"undefined"};function a(i){const n={a:"a",blockquote:"blockquote",code:"code",defs:"defs",div:"div",g:"g",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li","mjx-container":"mjx-container",ol:"ol",p:"p",path:"path",pre:"pre",section:"section",span:"span",style:"style",sup:"sup",svg:"svg",ul:"ul",use:"use",...r(),...i.components},s=n["mjx-container"];return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"isomorph",children:["Isomorph",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#isomorph",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"date: 2023-02-24"}),`
`,e.jsx(n.li,{children:"last updated: 2023-02-24"}),`
`]}),`
`,e.jsxs(n.h2,{id:"overview",children:["Overview",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#overview",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Isomorph is a Zero Knowledge trustless multichain bridge."}),`
`,e.jsxs(n.h2,{id:"approach",children:["Approach",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#approach",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h2,{id:"sample-process-flow",children:["Sample Process Flow",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#sample-process-flow",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"At a high level when an event happens on chain 1 we want to trigger a corresponding action on chain 2."}),`
`,e.jsx(n.p,{children:"For a simple bridging of funds this looks as follows"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Alice deposits 100 TokenX into TokenLocker on Chain 1 (which are locked) **a1"}),`
`,e.jsx(n.li,{children:"A transaction t1 is triggered in Block b1 and an event e1 is sent"}),`
`,e.jsx(n.li,{children:"The relayer listens to event e1 and relays the transaction receipt information to Chain 2."}),`
`,e.jsx(n.li,{children:"Verifier verifies that t1 is in block b1"}),`
`,e.jsx(n.li,{children:"Verifier verifies that block b1 is a valid block"}),`
`,e.jsx(n.li,{children:"Verifier verifies that b1 is in Chain1 canoninical chain"}),`
`,e.jsx(n.li,{children:"Executor1 triggers a minting of corresponding 100 TokenX∆ on TokenLocker∆ on Chain 2"}),`
`,e.jsx(n.li,{children:"A transaction t2 is triggered in Block b2 and an event e2 is sent"}),`
`,e.jsx(n.li,{children:"The relayer listens to event e2 and relays the transaction receipt information to Chain 1."}),`
`,e.jsx(n.li,{children:"Verifier verifies that t2 is in block b2"}),`
`,e.jsx(n.li,{children:"Verifier verifies that block b2 is a valid block"}),`
`,e.jsx(n.li,{children:"Verifier verifies that b2 is in Chain2 canoninical chain"}),`
`,e.jsx(n.li,{children:"Executor2 marks the bridge transaction as complete"}),`
`]}),`
`,e.jsxs(n.h2,{id:"proof-components",children:["Proof Components",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#proof-components",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Valid Signers : Who are eligible to sign"}),`
`,e.jsx(n.li,{children:"Valid Signature:"}),`
`,e.jsx(n.li,{children:"Valid Block : (Epoch)"}),`
`]}),`
`,e.jsxs(n.h2,{id:"technology",children:["Technology",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#technology",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["TokenLocker: ",e.jsx(n.a,{href:"https://github.com/johnwhitton/horizon/blob/refactorV2/src/eprover/txProof.js",children:"horizon txProof.js"})," ",e.jsx(n.a,{href:"https://www.npmjs.com/package/eth-proof",children:"npm EthProof"})]}),`
`,e.jsxs(n.li,{children:["TransactionVerify: Proves a ",e.jsx(n.a,{href:"https://ethereum.org/en/developers/docs/data-structures-and-encoding/patricia-merkle-trie/",children:"Merkle Patricia Trie"})," using ",e.jsx(n.a,{href:"https://github.com/ethereum/consensus-specs/blob/dev/ssz/merkle-proofs.mdx",children:"merkle Proof"})," which verifies the ",e.jsx(n.a,{href:"https://github.com/ethereum/go-ethereum/blob/release/1.9/core/types/transaction.go#L44",children:"Transaction.Hash"})," against ",e.jsx(n.a,{href:"https://github.com/ethereum/go-ethereum/blob/release/1.9/core/types/block.go#L77",children:"Header.txHash"}),". Here is an example from horizon using ",e.jsx(n.a,{href:"https://github.com/johnwhitton/horizon/blob/refactorV2/src/eprover/txProof.js",children:"horizon txProof.js"})," which calls ",e.jsx(n.a,{href:"https://www.npmjs.com/package/eth-proof",children:"npm EthProof"}),"."]}),`
`,e.jsxs(n.li,{children:["BlockSignatureVerification",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"On Chain Verification : example is Near Rainbow Bridge Fraud Proof"}),`
`,e.jsx(n.li,{children:"Optimistic"}),`
`,e.jsx(n.li,{children:"Secure Enclave"}),`
`,e.jsxs(n.li,{children:["Zero Knowledge",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Prover"}),`
`,e.jsx(n.li,{children:"Verification"}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["BlockCanonicalVerification",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Wait Number of Blocks"}),`
`,e.jsx(n.li,{children:"Optimistic"}),`
`,e.jsx(n.li,{children:"Light Client (Finality Gadgets)"}),`
`,e.jsx(n.li,{children:"Finalized Epoch"}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:"EventLister"}),`
`,e.jsx(n.li,{children:"Executor"}),`
`]}),`
`,e.jsxs(n.h2,{id:"proving-mechanisms",children:["Proving Mechanisms",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#proving-mechanisms",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h3,{id:"avalanche",children:["Avalanche",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#avalanche",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h3,{id:"binance",children:["Binance",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#binance",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h3,{id:"cosmos",children:["Cosmos",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#cosmos",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h3,{id:"ethereum",children:["Ethereum",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#ethereum",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h3,{id:"near",children:["NEAR",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#near",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["The leading NEAR Ethereum Bridge today Near Rainbow Bridge uses an optimistic approach. Following is an excerpt from NearOnEthClient ",e.jsx(n.sup,{children:e.jsx(n.a,{href:"#user-content-fn-near-1",id:"user-content-fnref-near-1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})}),"."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["we adopt the optimistic ",e.jsx(n.sup,{children:e.jsx(n.a,{href:"#user-content-fn-near-2",id:"user-content-fnref-near-2","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"2"})})," approach where NearOnEthClient verifies everything in the NEAR header except the signatures. Then anyone can challenge a signature in a submitted header within a 4-hour challenge window. The challenge requires verification of a single Ed25519 signature which would cost about 500k Ethereum gas (expensive, but possible)."]}),`
`]}),`
`,e.jsxs(n.h3,{id:"harmony",children:["Harmony",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#harmony",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h3,{id:"polygon",children:["Polygon",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#polygon",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h3,{id:"polkadot",children:["Polkadot",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#polkadot",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["Previous proving mechanisms for Polkadot leverage BEEFY (Bridge Effiency Enabling Finality Yielder) ",e.jsx(n.sup,{children:e.jsx(n.a,{href:"#user-content-fn-dot-3",id:"user-content-fnref-dot-3","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"3"})})," an example is Snowbridge ",e.jsx(n.sup,{children:e.jsx(n.a,{href:"#user-content-fn-dot-1",id:"user-content-fnref-dot-1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"4"})})," which developed their own Interactive Update Protocol ",e.jsx(n.sup,{children:e.jsx(n.a,{href:"#user-content-fn-dot-2",id:"user-content-fnref-dot-2","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"5"})}),"."]}),`
`,e.jsxs(n.h2,{id:"verification-mechanism",children:["Verification Mechanism",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#verification-mechanism",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h2,{id:"relayer-mechanisms",children:["Relayer Mechanisms",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#relayer-mechanisms",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h2,{id:"token-lockers",children:["Token Lockers",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#token-lockers",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h2,{id:"references",children:["References",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#references",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h2,{id:"appendices",children:["Appendices",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#appendices",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h3,{id:"appendix-f-data-structures",children:["Appendix F: Data Structures",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#appendix-f-data-structures",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Block Structure from ",e.jsx(n.a,{href:"https://github.com/ethereum/go-ethereum/blob/release/1.9/core/types/block.go#L72",children:"go-ethereum"})]}),`
`]}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"// SealHash returns the hash of a block prior to it being sealed."})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"func (ethash *Ethash) SealHash(header *types.Header) (hash common.Hash) {"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" hasher := sha3.NewLegacyKeccak256()"})}),`
`,e.jsx(n.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" rlp.Encode(hasher, []interface{}{"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  header.ParentHash,"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  header.UncleHash,"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  header.Coinbase,"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  header.Root,"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  header.TxHash,"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  header.ReceiptHash,"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  header.Bloom,"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  header.Difficulty,"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  header.Number,"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  header.GasLimit,"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  header.GasUsed,"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  header.Time,"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  header.Extra,"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" })"})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" hasher.Sum(hash["}),e.jsx(n.span,{style:{color:"#032F62",textDecoration:"underline","--shiki-dark":"#96D0FF","--shiki-dark-text-decoration":"inherit"},children:":0"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"])"})]}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" return hash"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Transaction structure from ",e.jsx(n.a,{href:"https://github.com/ethereum/go-ethereum/blob/release/1.9/core/types/transaction.go#LL39-L64C2",children:"go-ethereum"})]}),`
`]}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"type Transaction struct {"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" data txdata    // Consensus contents of a transaction"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" time time.Time // Time first seen locally (spam avoidance)"})}),`
`,e.jsx(n.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" // caches"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" hash atomic.Value"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" size atomic.Value"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" from atomic.Value"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})}),`
`,e.jsx(n.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"type txdata struct {"})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" AccountNonce uint64          "}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:'`json:"nonce"    gencodec:"required"`'})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" Price        *big.Int        "}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:'`json:"gasPrice" gencodec:"required"`'})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" GasLimit     uint64          "}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:'`json:"gas"      gencodec:"required"`'})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" Recipient    *common.Address "}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:'`json:"to"       rlp:"nil"`'}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" // nil means contract creation"})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" Amount       *big.Int        "}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:'`json:"value"    gencodec:"required"`'})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" Payload      []byte          "}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:'`json:"input"    gencodec:"required"`'})]}),`
`,e.jsx(n.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" // Signature values"})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" V *big.Int "}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:'`json:"v" gencodec:"required"`'})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" R *big.Int "}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:'`json:"r" gencodec:"required"`'})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" S *big.Int "}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:'`json:"s" gencodec:"required"`'})]}),`
`,e.jsx(n.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" // This is only used when marshaling to JSON."})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" Hash *common.Hash "}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:'`json:"hash" rlp:"-"`'})]}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})})}),`
`,e.jsxs(n.h2,{id:"footnotes",children:["FootNotes",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#footnotes",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"NEAR"}),`
`,e.jsx(n.p,{children:"Polkadot"}),`
`,e.jsxs(n.section,{"data-footnotes":!0,className:"footnotes",children:[e.jsxs(n.h2,{className:"sr-only",id:"footnote-label",children:["Footnotes",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#footnote-label",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{id:"user-content-fn-near-1",children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://near.org/blog/eth-near-rainbow-bridge/",children:"NEAR: ETH-NEAR Rainbow Bridge"}),": a bridge, called Rainbow Bridge, to connect the Ethereum and NEAR blockchains. ",e.jsx(n.a,{href:"#user-content-fnref-near-1","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"↩"})]}),`
`]}),`
`,e.jsxs(n.li,{id:"user-content-fn-near-2",children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://medium.com/@deaneigenmann/optimistic-contracts-fb75efa7ca84",children:"Optimistic Contracts"}),": contracts that accept all information as fact until proven to be non-factual. This allows for a reduction in the cost of verifying data, as on-chain verification would only be necessary when one is sure that the data is false. ",e.jsx(n.a,{href:"#user-content-fnref-near-2","data-footnote-backref":"","aria-label":"Back to reference 2",className:"data-footnote-backref",children:"↩"})]}),`
`]}),`
`,e.jsxs(n.li,{id:"user-content-fn-dot-3",children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://spec.polkadot.network/#sect-grandpa-beefy",children:"Polkadot: BEEFY"}),": The BEEFY (Bridge Effiency Enabling Finality Yielder) is a secondary protocol to GRANDPA to support efficient bridging between the Polkadot network (relay chain) and remote, segregated blockchains, such as Ethereum, which were not built with the Polkadot interchain operability in mind. ",e.jsx(n.a,{href:"#user-content-fnref-dot-3","data-footnote-backref":"","aria-label":"Back to reference 3",className:"data-footnote-backref",children:"↩"})]}),`
`]}),`
`,e.jsxs(n.li,{id:"user-content-fn-dot-1",children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://docs.snowbridge.network/architecture/verification/polkadot",children:"SnowBridge: Polkadot Verification"}),": use Polkadot’s BEEFY gadget to implement an efficient light client that only needs to verify a very small subset of relay chain validator signatures. ",e.jsx(n.a,{href:"#user-content-fnref-dot-1","data-footnote-backref":"","aria-label":"Back to reference 4",className:"data-footnote-backref",children:"↩"})]}),`
`]}),`
`,e.jsxs(n.li,{id:"user-content-fn-dot-2",children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://docs.snowbridge.network/architecture/verification/polkadot/interactive-update-protocol",children:"Snowbridge: Interactive Update Protocol"}),": A prover wants to convince a light client that at least ",e.jsx(s,{className:"MathJax",jax:"SVG",children:e.jsxs(n.svg,{style:{verticalAlign:"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"3.394ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 1500 1000",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[e.jsxs(n.defs,{children:[e.jsx(n.path,{id:"MJX-1-TEX-N-31",d:"M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"}),e.jsx(n.path,{id:"MJX-1-TEX-N-2F",d:"M423 750Q432 750 438 744T444 730Q444 725 271 248T92 -240Q85 -250 75 -250Q68 -250 62 -245T56 -231Q56 -221 230 257T407 740Q411 750 423 750Z"}),e.jsx(n.path,{id:"MJX-1-TEX-N-33",d:"M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z"})]}),e.jsx(n.g,{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",transform:"scale(1,-1)",children:e.jsxs(n.g,{"data-mml-node":"math",children:[e.jsx(n.g,{"data-mml-node":"mn",children:e.jsx(n.use,{"data-c":"31",xlinkHref:"#MJX-1-TEX-N-31"})}),e.jsx(n.g,{"data-mml-node":"TeXAtom","data-mjx-texclass":"ORD",transform:"translate(500,0)",children:e.jsx(n.g,{"data-mml-node":"mo",children:e.jsx(n.use,{"data-c":"2F",xlinkHref:"#MJX-1-TEX-N-2F"})})}),e.jsx(n.g,{"data-mml-node":"mn",transform:"translate(1000,0)",children:e.jsx(n.use,{"data-c":"33",xlinkHref:"#MJX-1-TEX-N-33"})})]})})]})})," of validators signed a statement, which they claim that a specific set of at least ",e.jsx(s,{className:"MathJax",jax:"SVG",children:e.jsxs(n.svg,{style:{verticalAlign:"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"3.394ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 1500 1000",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[e.jsxs(n.defs,{children:[e.jsx(n.path,{id:"MJX-2-TEX-N-32",d:"M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"}),e.jsx(n.path,{id:"MJX-2-TEX-N-2F",d:"M423 750Q432 750 438 744T444 730Q444 725 271 248T92 -240Q85 -250 75 -250Q68 -250 62 -245T56 -231Q56 -221 230 257T407 740Q411 750 423 750Z"}),e.jsx(n.path,{id:"MJX-2-TEX-N-33",d:"M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z"})]}),e.jsx(n.g,{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",transform:"scale(1,-1)",children:e.jsxs(n.g,{"data-mml-node":"math",children:[e.jsx(n.g,{"data-mml-node":"mn",children:e.jsx(n.use,{"data-c":"32",xlinkHref:"#MJX-2-TEX-N-32"})}),e.jsx(n.g,{"data-mml-node":"TeXAtom","data-mjx-texclass":"ORD",transform:"translate(500,0)",children:e.jsx(n.g,{"data-mml-node":"mo",children:e.jsx(n.use,{"data-c":"2F",xlinkHref:"#MJX-2-TEX-N-2F"})})}),e.jsx(n.g,{"data-mml-node":"mn",transform:"translate(1000,0)",children:e.jsx(n.use,{"data-c":"33",xlinkHref:"#MJX-2-TEX-N-33"})})]})})]})})," of validators do. ",e.jsx(n.a,{href:"#user-content-fnref-dot-2","data-footnote-backref":"","aria-label":"Back to reference 5",className:"data-footnote-backref",children:"↩"})]}),`
`]}),`
`]}),`
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
`})]})}function o(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(a,{...i})}):a(i)}export{o as default,l as frontmatter};
