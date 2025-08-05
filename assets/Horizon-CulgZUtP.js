import{f as r,j as e}from"./index-CDZIoDU0.js";const t={title:"Horizon Bridge",description:"undefined"};function s(i){const n={a:"a",code:"code",div:"div",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"horizon-bridge",children:["Horizon Bridge",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#horizon-bridge",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"date: 2023-02-04"}),`
`,e.jsx(n.li,{children:"last updated: 2023-02-04"}),`
`]}),`
`,e.jsxs(n.h2,{id:"overview",children:["Overview",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#overview",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["This document reviews the ",e.jsx(n.a,{href:"https://github.com/johnwhitton/horizon/tree/refactorV2",children:"horizon"})," current implementation, development tasks that need to be done to support POW and offers some thoughts on next steps to support Ethereum 2.0 and other chains."]}),`
`,e.jsxs(n.p,{children:["Further thoughts on ETH 2.0 support, removing the ETHHASH logic and SPV client and potentially replacing with MMR trees per epoch and checkpoints similar to Harmony Light Client on Ethereum, can be found ",e.jsx(n.a,{href:"/research/chains/ethereum",children:"here"}),"."]}),`
`,e.jsxs(n.h2,{id:"next-steps",children:["Next Steps",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#next-steps",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Following are some of the improvements needed broken down by functional areas."}),`
`,e.jsxs(n.h3,{id:"ethereum-light-client",children:["Ethereum Light Client",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#ethereum-light-client",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["ETH 2.0 support see ",e.jsx(n.a,{href:"/research/chains/ethereum",children:"here"})]}),`
`,e.jsx(n.li,{children:"Queuing mechanism should be implemented to queue bridge transactions. The queue can be polled as part of the block relay functionality to process bridge transactions once the blocks have been relayed."}),`
`,e.jsx(n.li,{children:"Consider whether we can use p2p messaging to receive published blocks rather than looping and polling via an RPC."}),`
`]}),`
`,e.jsxs(n.h3,{id:"harmony-light-client",children:["Harmony Light Client",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#harmony-light-client",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Needs to implement a process to ",e.jsx(n.code,{children:"submitCheckpoint"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"eprove"})," logic needs to be reviewed"]}),`
`,e.jsxs(n.li,{children:["Queuing mechanism should be implemented to queue bridge transactions. The queue can be polled as part of the ",e.jsx(n.code,{children:"submitCheckpoint"})," functionality to process bridge transactions once the blocks have been relayed."]}),`
`,e.jsxs(n.li,{children:["Need to facilitate the core protocol ",e.jsx(n.a,{href:"https://github.com/harmony-one/harmony/pull/4198/files",children:"MMR enhancements PR"})]}),`
`]}),`
`,e.jsxs(n.h3,{id:"transaction-sequencing",children:["Transaction Sequencing",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#transaction-sequencing",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["Sequencing of Transactions: Needs to be implemented and ",e.jsx(n.code,{children:"TokenMap"})," in ",e.jsx(n.code,{children:"bridge.js"})," needs to be refactored. Below is the current sequence flow and areas for improvements."]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Ethereum Mapping Request"}),`
`,e.jsxs(n.li,{children:["Relay of Block to EthereumLightClient.sol on Harmony",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The block has to be relayed before we can process the Harmony Mapping request, as we have just executed the transaction the relayer usually has not relayed the block so this will fail."}),`
`,e.jsx(n.li,{children:"There must be an additional 25 blocks on Ethereum before this block can be considered part of the canonical chain."}),`
`,e.jsx(n.li,{children:"This logic needs to be rewritten to break down execution for 1. the ethereum mapping request 2. After a 25 block delay the Harmony Proof validation and executing the Harmony Mapping Request**"}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:"Harmony Mapping Request"}),`
`,e.jsxs(n.li,{children:["Relay of Checkpoint to HarmonyLightClient.sol on Ethereum",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["A ",e.jsx(n.code,{children:"submitCheckpoint"})," in ",e.jsx(n.code,{children:"HarmonyLightClient.sol"})," needs to have called either for the next epoch or for a checkpoint, after the block the harmony mapping transaction was in.**"]}),`
`,e.jsxs(n.li,{children:["Automatic submission of checkpoints to the Harmony Light Client has not been developed as yet. (It is not part of the ",e.jsx(n.code,{children:"ethRelay.js"}),"). And so the checkpoint would need to be manually submitted before the Ethereum Mapping could take place."]}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:"Etherem Process Harmony Mapping Acknowledgement"}),`
`]}),`
`,e.jsxs(n.h3,{id:"bridge-functionality",children:["Bridge Functionality",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#bridge-functionality",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Need to support mapping Harmony Tokens to Ethereum"}),`
`]}),`
`,e.jsxs(n.h3,{id:"multichain-support",children:["MultiChain Support",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#multichain-support",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Need to support other chains",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"EVM: BSC, Polygon, Avalanche, Arbitrum, Optimism"}),`
`,e.jsx(n.li,{children:"Bitcoin"}),`
`,e.jsx(n.li,{children:"NEAR"}),`
`,e.jsx(n.li,{children:"Solana"}),`
`,e.jsx(n.li,{children:"Polkadot"}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:"Links to initial Design thoughs including reviews of cross chain messaging protocols and other multichain bridges can be found in Multichain Trustless Bridge : Draft."}),`
`]}),`
`,e.jsxs(n.h2,{id:"current-implementation-walkthough",children:["Current Implementation Walkthough",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#current-implementation-walkthough",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Following is a detailed walk though of the current implementation of the Ethereum Light Client and the flow for mapping tokens from Ethereum to Harmony."}),`
`,e.jsxs(n.h2,{id:"ethereum-light-client-on-harmony",children:["Ethereum Light Client (on Harmony)",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#ethereum-light-client-on-harmony",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Design"}),`
Existing Design`]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"DAG is generated for each Ethereum EPOCH: This takes a couple of hours and has a size of approx 1GB."}),`
`,e.jsx(n.li,{children:"Relayer is run to replicate each block header to the SPV Client on Harmony."}),`
`,e.jsx(n.li,{children:"EthereumLightClient.sol addBlockHeader: Adds each block header to the Ethereum Light Client."}),`
`,e.jsx(n.li,{children:"Transactions are Verified"}),`
`]}),`
`,e.jsx(n.strong,{children:"Running the Relayer"}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#005CC5",fontWeight:"bold","--shiki-dark":"#6CB6FF","--shiki-dark-font-weight":"bold"},children:"# Start the relayer (note: replace the etherum light client address below)"})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#005CC5",fontWeight:"bold","--shiki-dark":"#6CB6FF","--shiki-dark-font-weight":"bold"},children:"# relay ["}),e.jsx(n.span,{style:{color:"#032F62",textDecoration:"underline",fontWeight:"inherit","--shiki-dark":"#96D0FF","--shiki-dark-text-decoration":"inherit","--shiki-dark-font-weight":"bold"},children:"options"}),e.jsx(n.span,{style:{color:"#005CC5",fontWeight:"bold","--shiki-dark":"#6CB6FF","--shiki-dark-font-weight":"bold"},children:"] <"}),e.jsx(n.span,{style:{color:"#22863A",fontWeight:"bold","--shiki-dark":"#8DDB8C","--shiki-dark-font-weight":"bold"},children:"ethUrl"}),e.jsx(n.span,{style:{color:"#005CC5",fontWeight:"bold","--shiki-dark":"#6CB6FF","--shiki-dark-font-weight":"bold"},children:"> <"}),e.jsx(n.span,{style:{color:"#22863A",fontWeight:"bold","--shiki-dark":"#8DDB8C","--shiki-dark-font-weight":"bold"},children:"hmyUrl"}),e.jsx(n.span,{style:{color:"#005CC5",fontWeight:"bold","--shiki-dark":"#6CB6FF","--shiki-dark-font-weight":"bold"},children:"> <"}),e.jsx(n.span,{style:{color:"#22863A",fontWeight:"bold","--shiki-dark":"#8DDB8C","--shiki-dark-font-weight":"bold"},children:"elcAddress"}),e.jsx(n.span,{style:{color:"#005CC5",fontWeight:"bold","--shiki-dark":"#6CB6FF","--shiki-dark-font-weight":"bold"},children:">   relay eth block header to elc on hmy"})]}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" yarn cli ethRelay relay http://localhost:8645 http://localhost:9500 0x3Ceb74A902dc5fc11cF6337F68d04cB834AE6A22"})})]})})}),`
`,e.jsx(n.strong,{children:"Implementation"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["DAG Generation can be done explicity by calling ",e.jsx(n.code,{children:"dagProve"})," from the CLI or it is done automatically by ",e.jsx(n.code,{children:"getHeaderProof"})," in ",e.jsx(n.code,{children:"ethHashProof/BlockProof.js"})," which is called from ",e.jsx(n.code,{children:"blockRelay"})," in ",e.jsx(n.code,{children:"cli/ethRelay.js"}),"."]}),`
`,e.jsxs(n.li,{children:["Relaying of Block Headers is done by ",e.jsx(n.code,{children:"blockRelayLoop"})," in ",e.jsx(n.code,{children:"cli/ethRelay.js"})," which",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Reads the last block header from EthereumLightClient.sol"}),`
`,e.jsxs(n.li,{children:["Loops through calling an Ethereum RPC per block to retrieve the blockHeader using ",e.jsx(n.code,{children:"return eth.getBlock(blockNo).then(fromRPC)"})," in function ",e.jsx(n.code,{children:"getBlockByNumber"})," in ",e.jsx(n.code,{children:"eth2hmy-relay/getBlockHeader.js"})]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Adding BlockHeaders is done by ",e.jsx(n.code,{children:"await elc.addBlockHeader(rlpHeader, proofs.dagData, proofs.proofs)"})," which is called from ",e.jsx(n.code,{children:"cli/ethRelay.js"}),". ",e.jsx(n.code,{children:"addBlockHeader"})," in ",e.jsx(n.code,{children:"EthereumLightClient.sol"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"calculates the blockHeader Hash"}),`
`,e.jsxs(n.li,{children:["and checks that it",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"hasn't already been relayed,"}),`
`,e.jsx(n.li,{children:"is the next block to be added,"}),`
`,e.jsx(n.li,{children:"has a valid timestamp"}),`
`,e.jsx(n.li,{children:"has a valid difficulty"}),`
`,e.jsx(n.li,{children:"has a valid Proof of Work (POW)"}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:"Check if the canonical chain needs to be replaced by another fork"}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.h3,{id:"mapping-tokens-ethereum-to-harmony",children:["Mapping Tokens (Ethereum to Harmony)",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#mapping-tokens-ethereum-to-harmony",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.strong,{children:"Design"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["If the Token Has not already been mapped on Harmony",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Harmony: Create an ERC20 Token"}),`
`,e.jsx(n.li,{children:"Harmony: Map the Ethereum Token to the new ERC20 Contract"}),`
`,e.jsx(n.li,{children:"Ethereum: Validate the Harmony Mapping Transaction"}),`
`,e.jsx(n.li,{children:"Ethereum: Map the Harmony ERC20 token to the existing Ethereum Token"}),`
`,e.jsx(n.li,{children:"Harmony: Validate the Ethereum mapping Transaction"}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["Note: The key difference between ",e.jsx(n.code,{children:"TokenLockerOnEthereum.sol"})," and ",e.jsx(n.code,{children:"TokenLockerOnHarmony.sol"})," is the proof validation. ",e.jsx(n.code,{children:"TokenLockerOnEthereum.sol"})," uses ",e.jsx(n.code,{children:"./lib/MMRVerifier.sol"})," to validate the ",e.jsx(n.a,{href:"https://github.com/opentimestamps/opentimestamps-server/blob/master/doc/merkle-mountain-range.mdx",children:"Mountain Merkle Ranges"})," on Harmony and ",e.jsx(n.code,{children:"HarmonyProver.sol"}),". ",e.jsx(n.code,{children:"TokenLockerOnHarmony.sol"})," imports ",e.jsx(n.code,{children:"./lib/MPTValidatorV2.sol"})," to validate ",e.jsx(n.a,{href:"https://ethereum.org/en/developers/docs/data-structures-and-encoding/patricia-merkle-trie/#merkle-patricia-trees",children:"Merkle Patrica Trie"})," and ",e.jsx(n.code,{children:"./EthereumLightClient.sol"}),"."]})}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["Note: ",e.jsx(n.code,{children:"validateAndExecuteProof"})," is responsible for creation of the BridgeTokens on the destination chain it does this by calling ",e.jsx(n.code,{children:"execute"})," call in ",e.jsx(n.code,{children:"TokenLockerLocker.sol"})," which then calls the function ",e.jsx(n.code,{children:"onTokenMapReqEvent"})," in ",e.jsx(n.code,{children:"TokenRegistry.sol"})," which creates a new Bridge Token ",e.jsx(n.code,{children:"BridgedToken mintAddress = new BridgedToken{salt: salt}();"})," and then initializes it. This uses ",e.jsx(n.a,{href:"https://ethereum.org/en/developers/docs/data-structures-and-encoding/rlp/",children:"(RLP) Serialization"})]})}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["Note: The shims in ",e.jsx(n.code,{children:"ethWeb3.js"})," provide simplified functions for ",e.jsx(n.code,{children:"ContractAt"}),", ",e.jsx(n.code,{children:"ContractDeploy"}),", ",e.jsx(n.code,{children:"sendTx"})," and ",e.jsx(n.code,{children:"addPrivateKey"})," and have a constructor which uses ",e.jsx(n.code,{children:"process.env.PRIVATE_KEY"}),"."]})}),`
`,e.jsx(n.strong,{children:"Mapping the Tokens"}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#005CC5",fontWeight:"bold","--shiki-dark":"#6CB6FF","--shiki-dark-font-weight":"bold"},children:"# Map the Tokens"})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#005CC5",fontWeight:"bold","--shiki-dark":"#6CB6FF","--shiki-dark-font-weight":"bold"},children:"# map <"}),e.jsx(n.span,{style:{color:"#22863A",fontWeight:"bold","--shiki-dark":"#8DDB8C","--shiki-dark-font-weight":"bold"},children:"ethUrl"}),e.jsx(n.span,{style:{color:"#005CC5",fontWeight:"bold","--shiki-dark":"#6CB6FF","--shiki-dark-font-weight":"bold"},children:"> <"}),e.jsx(n.span,{style:{color:"#22863A",fontWeight:"bold","--shiki-dark":"#8DDB8C","--shiki-dark-font-weight":"bold"},children:"ethBridge"}),e.jsx(n.span,{style:{color:"#005CC5",fontWeight:"bold","--shiki-dark":"#6CB6FF","--shiki-dark-font-weight":"bold"},children:"> <"}),e.jsx(n.span,{style:{color:"#22863A",fontWeight:"bold","--shiki-dark":"#8DDB8C","--shiki-dark-font-weight":"bold"},children:"hmyUrl"}),e.jsx(n.span,{style:{color:"#005CC5",fontWeight:"bold","--shiki-dark":"#6CB6FF","--shiki-dark-font-weight":"bold"},children:"> <"}),e.jsx(n.span,{style:{color:"#22863A",fontWeight:"bold","--shiki-dark":"#8DDB8C","--shiki-dark-font-weight":"bold"},children:"hmyBridge"}),e.jsx(n.span,{style:{color:"#005CC5",fontWeight:"bold","--shiki-dark":"#6CB6FF","--shiki-dark-font-weight":"bold"},children:"> <"}),e.jsx(n.span,{style:{color:"#22863A",fontWeight:"bold","--shiki-dark":"#8DDB8C","--shiki-dark-font-weight":"bold"},children:"token"}),e.jsx(n.span,{style:{color:"#005CC5",fontWeight:"bold","--shiki-dark":"#6CB6FF","--shiki-dark-font-weight":"bold"},children:">"})]}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"yarn cli Bridge map http://localhost:8645 0x017f8C7d1Cb04dE974B8aC1a6B8d3d74bC74E7E1 http://localhost:9500 0x017f8C7d1Cb04dE974B8aC1a6B8d3d74bC74E7E1 0x4e59AeD3aCbb0cb66AF94E893BEE7df8B414dAB1"})})]})})}),`
`,e.jsx(n.strong,{children:"Implementation"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The CLI calls ",e.jsx(n.code,{children:"tokenMap"})," in ",e.jsx(n.code,{children:"src/bridge/contract.js"})," to",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Instantiate the Ethereum Bridge and Harmony Bridge Contracts"}),`
`,e.jsxs(n.li,{children:["Calls ",e.jsx(n.code,{children:"TokenMap"})," in ",e.jsx(n.code,{children:"scr/bridge/bridge.js"})," to",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Issue a token Map request on Ethereum ",e.jsx(n.code,{children:"const mapReq = await src.IssueTokenMapReq(token)"})]}),`
`,e.jsxs(n.li,{children:["Acknowledge the Map Request on Harmony ",e.jsx(n.code,{children:"const mapAck = await Bridge.CrossRelayEthHmy(src, dest, mapReq)"})]}),`
`,e.jsxs(n.li,{children:["Issue a token Map request on Harmony ",e.jsx(n.code,{children:"return Bridge.CrossRelayHmyEth(dest, src, mapAck.transactionHash)"})]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.strong,{children:["Here is the Logic (call execution overview) when Mapping Tokens across Chains. ",e.jsx(n.em,{children:"NOTE: Currently mapping has only been developed from Ethereum to Harmony (not bi-directional)"}),"."]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Bridge Map is called in src.cli.index.js and it calls ",e.jsx(n.code,{children:"tokenMap"})," in ",e.jsx(n.code,{children:"bridge/contract.js"})," which",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Get srcBridge Contract on Ethereum ",e.jsx(n.code,{children:"TokenLockerOnEthereum.sol"})," from ",e.jsx(n.code,{children:"ethBridge.js"})," it also instantiates an ",e.jsx(n.code,{children:"eprover"})," using ",e.jsx(n.code,{children:"tools/eprover/index.js"})," which calls ",e.jsx(n.code,{children:"txProof.js"})," which uses ",e.jsx(n.a,{href:"https://www.npmjs.com/package/eth-proof",children:"eth-proof npm package"}),". ",e.jsx(n.em,{children:"Note: this is marked with a //TODO need to test and develop proving logic on Harmony."})]}),`
`,e.jsxs(n.li,{children:["Get destBridge Contract on Hamony ",e.jsx(n.code,{children:"TokenLockerOnHarmony.sol"})," from ",e.jsx(n.code,{children:"hmyBridge.js"})," it also instantiates an ",e.jsx(n.code,{children:"hprove"})," using ",e.jsx(n.code,{children:"tools/eprover/index.js"})," which calls ",e.jsx(n.code,{children:"txProof.js"})," which uses ",e.jsx(n.a,{href:"https://www.npmjs.com/package/eth-proof",children:"eth-proof npm package"}),"."]}),`
`,e.jsxs(n.li,{children:["calls ",e.jsx(n.code,{children:"TokenMap"})," in ",e.jsx(n.code,{children:"bridge.js"})]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"TokenMap"})," Calls IssueTokenMapReq (on the Ethreum Locker) returning the ",e.jsx(n.code,{children:"mapReq.transactionHash"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"IssueTokenMapReq(token)"})," is held in ",e.jsx(n.code,{children:"bridge.js"})," as part of the bridge class"]}),`
`,e.jsxs(n.li,{children:["It calls ",e.jsx(n.code,{children:"issueTokenMapReq"})," on ",e.jsx(n.code,{children:"TokenLockerOnEthereum.sol"})," which is implemented by ",e.jsx(n.code,{children:"TokenRegistry.sol"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"issueTokenMapReq"})," checks if the token has already been mapped if not it was emitting a ",e.jsx(n.code,{children:"TokenMapReq"})," with the details of the token to be mapped. However this was commented out as it was felt that, if it has not been mapped, we use the ",e.jsx(n.code,{children:"transactionHash"})," of the mapping request` to drive the logic below (not the event)."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"TokenMap"})," calls ",e.jsx(n.code,{children:"Bridge.CrossRelay"})," with the IssueTokenMapReq.hash to",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["gets the proof of the transaction on Ethereum via ",e.jsx(n.code,{children:"getProof"})," calling ",e.jsx(n.code,{children:"prover.ReceiptProof"})," which calls the eprover and returns ",e.jsx(n.code,{children:"proof"})," with",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"hash: sha3(resp.header.serialize()),"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"root: resp.header.receiptRoot,"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"proof: encode(resp.receiptProof),"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"key: encode(Number(resp.txIndex)) // '0x12' => Nunmber"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["We then call ",e.jsx(n.code,{children:"dest.ExecProof(proof)"})," to execute the proof on Harmony",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["This calls ",e.jsx(n.code,{children:"validateAndExecuteProof"})," on ",e.jsx(n.code,{children:"TokenLockerOnHarmony.sol"})," with the ",e.jsx(n.code,{children:"proofData"})," from above, which",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["requires ",e.jsx(n.code,{children:"lightclient.VerifyReceiptsHash(blockHash, rootHash),"})," implemented by ",e.jsx(n.code,{children:"./EthereumLightClient.sol"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["This returns ",e.jsx(n.code,{children:"return bytes32(blocks[uint256(blockHash)].receiptsRoot) == receiptsHash;"})]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.strong,{children:"Which means the block has to be relayed first, as we have just executed the transaction the relayer usually has not relayed the block so this will fail"}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["requires ",e.jsx(n.code,{children:"lightclient.isVerified(uint256(blockHash)"})," implemented by ",e.jsx(n.code,{children:"./EthereumLightClient.sol"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["This returns ",e.jsx(n.code,{children:"return canonicalBlocks[blockHash] && blocks[blockHash].number + 25 < blocks[canonicalHead].number;"})]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.strong,{children:"Which means there must be an additional 25 blocks on Ethereum before this can be processed. This logic needs to be rewritten to break down execution for 1. the ethereum mapping request 2. After a 25 block delay the Harmony Proof validation and executing the Harmony Mapping Request"}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'require(spentReceipt[receiptHash] == false, "double spent!");'})," to ensure that we haven't already executed this proof"]}),`
`,e.jsxs(n.li,{children:["gets the ",e.jsx(n.code,{children:"rlpdata"})," using ",e.jsx(n.code,{children:"EthereumProver.validateMPTProof"})," implemented by ",e.jsx(n.code,{children:"EthereumProver.sol"})," which",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Validates a Merkle-Patricia-Trie proof."}),`
`,e.jsx(n.li,{children:"Returns a value whose inclusion is proved or an empty byte array for a proof of exclusion"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["marks ",e.jsx(n.code,{children:"spentReceipt[receiptHash] = true;"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"execute(rlpdata)"})," implemented by ",e.jsx(n.code,{children:"TokenLocker.sol"})," which calls ",e.jsx(n.code,{children:"onTokenMapReqEvent(topics, Data)"})," implemented by ",e.jsx(n.code,{children:"TokenRegistry.sol"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"address tokenReq = address(uint160(uint256(topics[1])));"})," gets the address of the token to be mapped."]}),`
`,e.jsxs(n.li,{children:["require ",e.jsx(n.code,{children:"address(RxMapped[tokenReq]) == address(0)"})," that the token has not already been mapped."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"address(RxMapped[tokenReq]) == address(0)"})," creates a new BridgedToken implemented by ",e.jsx(n.code,{children:"BridgedToken.sol"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"contract BridgedToken is ERC20Upgradeable, ERC20BurnableUpgradeable, OwnableUpgradeable"})," it is a standard openzepplin ERC20 Burnable, Ownable, Upgradeable token"]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"mintAddress.initialize"})," initialize the token with the same ",e.jsx(n.code,{children:"name"}),", ",e.jsx(n.code,{children:"symbol"})," and ",e.jsx(n.code,{children:"decimals"})," as the ethereum bridged token"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"RxMappedInv[address(mintAddress)] = tokenReq;"})," updates the inverse Key Value Mapping"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"RxMapped[tokenReq] = mintAddress;"})," updates the Ethereum mapped tokens"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"RxTokens.push(mintAddress);"})," add the newly created token to a list of bridged tokens"]}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"emit TokenMapAck(tokenReq, address(mintAddress));"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'require(executedEvents > 0, "no valid event")'})," to check if it executed the mapping correctly."]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["We then take the Harmony Mapping ",e.jsx(n.code,{children:"transactionHash"})," and repeat the above process to prove the Harmony mapping acknowledgment on Ethereum (Cross Relay second call) ",e.jsx(n.code,{children:"return Bridge.CrossRelay(dest, src, mapAck.transactionHash);"})]}),`
`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["gets the proof of the transaction on Harmony via ",e.jsx(n.code,{children:"getProof"})," calling ",e.jsx(n.code,{children:"prover.ReceiptProof"})," which calls the eprover and returns ",e.jsx(n.code,{children:"proof"}),` with
_`,e.jsx(n.code,{children:"hash: sha3(resp.header.serialize()),"}),`
_ `,e.jsx(n.code,{children:"root: resp.header.receiptRoot,"}),`
_`,e.jsx(n.code,{children:"proof: encode(resp.receiptProof),"}),`
_ `,e.jsx(n.code,{children:"key: encode(Number(resp.txIndex)) // '0x12' => Nunmber"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["We then call ",e.jsx(n.code,{children:"dest.ExecProof(proof)"})," to execute the proof on Ethereum",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["This calls ",e.jsx(n.code,{children:"validateAndExecuteProof"})," on ",e.jsx(n.code,{children:"TokenLokerOnEthereum.sol"})," with the ",e.jsx(n.code,{children:"proofData"})," from above, which",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"require(lightclient.isValidCheckPoint(header.epoch, mmrProof.root),"})," implemented by ",e.jsx(n.code,{children:"HarmonyLightClient.sol"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"return epochMmrRoots[epoch][mmrRoot]"})," which means that the epoch has to have had a checkpoint submitted via ",e.jsx(n.code,{children:"submitCheckpoint"})]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"bytes32 blockHash = HarmonyParser.getBlockHash(header);"})," gets the blockHash implemented by ",e.jsx(n.code,{children:"HarmonyParser.sol"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["This returns ",e.jsx(n.code,{children:"return keccak256(getBlockRlpData(header));"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getBlockRlpData"})," creates a list ",e.jsx(n.code,{children:"bytes[] memory list = new bytes[](15);"})," and uses statements like ",e.jsx(n.code,{children:"list[0] = RLPEncode.encodeBytes(abi.encodePacked(header.parentHash));"})," to perform ",e.jsx(n.a,{href:"https://ethereum.org/en/developers/docs/data-structures-and-encoding/rlp/",children:"Recursive-Length Prefix (RLP) Serialization"})," implemented by ",e.jsx(n.code,{children:"RLPEncode.sol"})]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"HarmonyProver.verifyHeader(header, mmrProof);"})," verifys the header implemented by ",e.jsx(n.code,{children:"HarmonyProver.sol"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"bytes32 blockHash = HarmonyParser.getBlockHash(header);"})," gets the blockHash implemented by ",e.jsx(n.code,{children:"HarmonyParser.sol"})," as above"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"valid = MMRVerifier.inclusionProof(proof.root, proof.width, proof.index, blockHash, proof.peaks, proof.siblings);"})," verifys the proff using the ",e.jsx(n.a,{href:"https://github.com/opentimestamps/opentimestamps-server/blob/master/doc/merkle-mountain-range.mdx",children:"Merkle Mountain Range Proof"})," passed ",e.jsx(n.code,{children:"MMRVerifier.MMRProof memory proof"})," and the ",e.jsx(n.code,{children:"blockHash"}),"."]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.strong,{children:["NOTE: This means that a ",e.jsx(n.code,{children:"submitCheckpoint"})," in ",e.jsx(n.code,{children:"HarmonyLightClient.sol"})," needs to have called either for the next epoch or for a checkpoint, after the block the harmony mapping transaction was in."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.strong,{children:["NOTE: Automatic submission of checkpoints to the Harmony Light Client has not been developed as yet. (It is not part of the ",e.jsx(n.code,{children:"ethRelay.js"}),"). And so the checkpoint would need to be manually submitted before the Ethereum Mapping could take place."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'require(spentReceipt[receiptHash] == false, "double spent!");'})," ensure that we haven't already processed this mapping request`"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"HarmonyProver.verifyReceipt(header, receiptdata)"})," ensure the receiptdata is valid"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"spentReceipt[receiptHash] = true;"})," marks the receipt as having been processed"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"execute(receiptdata.expectedValue);"})," implemented by ",e.jsx(n.code,{children:"TokenLocker.sol"})," which calls ",e.jsx(n.code,{children:"onTokenMapAckEvent(topics)"})," implemented by ",e.jsx(n.code,{children:"TokenRegistry.sol"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"address tokenReq = address(uint160(uint256(topics[1])));"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"address tokenAck = address(uint160(uint256(topics[2])));"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:'require(TxMapped[tokenReq] == address(0), "missing mapping to acknowledge");'})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"TxMapped[tokenReq] = tokenAck;"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"TxMappedInv[tokenAck] = IERC20Upgradeable(tokenReq);"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"TxTokens.push(IERC20Upgradeable(tokenReq));"})}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.ol,{start:"5",children:[`
`,e.jsx(n.li,{children:"Upon completion of tokenMap control is passed back to Bridge Map which"}),`
`,e.jsx(n.li,{children:"Calls TokenPair on Ethereum"}),`
`,e.jsx(n.li,{children:"Calls ethTokenInfo to get the status of the ERC20"}),`
`,e.jsx(n.li,{children:"Calls hmyTokenInfo to get the tokenStatus on Harmony"}),`
`]})]})}function l(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{l as default,t as frontmatter};
