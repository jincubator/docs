import{f as i,j as e}from"./index-BpncJUe1.js";const t={title:"Ethereum Bridging using Light Clients - Rainbow Costing",description:"undefined"};function n(r){const s={a:"a",code:"code",div:"div",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.header,{children:e.jsxs(s.h1,{id:"ethereum-bridging-using-light-clients---rainbow-costing",children:["Ethereum Bridging using Light Clients - Rainbow Costing",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#ethereum-bridging-using-light-clients---rainbow-costing",children:e.jsx(s.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(s.p,{children:"This research was done in conjunction with the Harmony team in early 2022."}),`
`,e.jsx(s.p,{children:"A review of how Bridging costs can be reduced using light clients. Taking the near Rainbow Bridge as an example."}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"date: 2022-02-23"}),`
`,e.jsx(s.li,{children:"author: John Whitton"}),`
`,e.jsx(s.li,{children:"contributors: Thanks to Aaron Li for their helpful suggestions."}),`
`]}),`
`,e.jsxs(s.h2,{id:"table-of-contents",children:["Table of Contents",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#table-of-contents",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"#ethereum-bridging-using-light-clients---rainbow-costing",children:"Ethereum Bridging using Light Clients - Rainbow Costing"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#table-of-contents",children:"Table of Contents"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#introduction",children:"Introduction"})}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"#bridge-transaction-walk-through",children:"Bridge Transaction Walk Through"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#actors",children:"Actors"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#sample-transactionflow",children:"Sample TransactionFlow"})}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"#bridging-resources-required",children:"Bridging Resources Required"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#references",children:"References"})}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(s.h2,{id:"introduction",children:["Introduction",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#introduction",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"In this article we review the use of light clients and how they can improve trust and costing for bridges."}),`
`,e.jsxs(s.h2,{id:"bridge-transaction-walk-through",children:["Bridge Transaction Walk Through",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#bridge-transaction-walk-through",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"Following is a walkthough of a funds transfer from Ethereum to a target chain (In this example Near), complete with light client updates, block propogation and proofs to ensure the transaction validity."}),`
`,e.jsx(s.p,{children:e.jsx(s.img,{src:"/posts/2023-03-23-rainbow-costs/eth2NearFundsTransfer.jpg",alt:"Ethereum to Near Funds Transfer",title:"Ethereum to NEAR Funds Transfer"})}),`
`,e.jsxs(s.h3,{id:"actors",children:["Actors",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#actors",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"From the diagram above you'll notice that there are many actors involved, below is an overview of the actors and the operations they perform."}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Accounts",`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://etherscan.io/address/0x29da2ef94deeaf2d2f9003e9354abfcb1ff04b32",children:"User Account"})," : The user is the owner of the funds being transferred and is responsible for signing the transactions to authorize bridging them accross chains. In this example they have accounts on ",e.jsx(s.a,{href:"https://etherscan.io/address/0x29da2ef94deeaf2d2f9003e9354abfcb1ff04b32",children:"Ethereum"})," and ",e.jsx(s.a,{href:"https://nearblocks.io/address/johnrubini.near#tokentxns",children:"NEAR"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://nearblocks.io/address/relayer.bridge.near",children:"Target Chain Relayer Acccount"}),": The relayer account is responsible for relaying messages from Ethereum to the target chain. *Note this is connected to a relayer which is responsible for tasks such as querying latest block headers and getting light client status updates. Source code is ",e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/tree/master/eth2near/eth2near-block-relay-rs",children:"here"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://nearblocks.io/address/bridge-validator1.near",children:"Target Chain Bridge Validator Accounts"}),": are responsible for validating light client update proposals and sending approval votes to ",e.jsx(s.a,{href:"https://nearblocks.io/address/bridge-validator.sputnik-dao.near",children:"DAO Eth Client Contract"}),"."]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:["Ethereum Components",`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://etherscan.io/address/0xdac17f958d2ee523a2206206994597c13d831ec7#code",children:"ERC20 Token Contract"}),": this is the token contract securing the funds in this examle USDT (Tether). Source code is ",e.jsx(s.a,{href:"https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v4.8/contracts/token/ERC20/presets/ERC20PresetMinterPauser.sol",children:"here"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://etherscan.io/address/0x23ddd3e3692d1861ed57ede224608875809e127f#code",children:"Bridge Contract"}),": Responsible for deposits and withdrawals of tokens on Ethereum as well as various proving and propogation mechanisms such as checking of Signatures and adding Light Client Blocks. Source code is ",e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/contracts/eth/nearbridge/contracts/NearBridge.sol",children:"here"})]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:["Target Chain (NEAR) Components",`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://nearblocks.io/address/bridge-validator.sputnik-dao.near",children:"Validator DAO Contract"}),": Responsible for receivng light client update proposals from the relayer and gathering approval votes for these propoals from Validators and submitting light client updates once the proposal is approved by the Validators. Source code is ",e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/eth2near/contract_wrapper/src/dao_eth_client_contract.rs",children:"here"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://nearblocks.io/address/client-eth2.bridge.near",children:"Etherum 2 Client"}),": The Ethereum 2 client is responsbile for processing light client updates and receiving execution header blocks from Ethereum via the relayer. Source code is ",e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/contracts/near/eth2-client/src/lib.rs",children:"here"}),". ",e.jsxs(s.em,{children:["Note: this replaced the ",e.jsx(s.a,{href:"https://nearblocks.io/address/client.bridge.near",children:"Ethereum 1 client"})," source code ",e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/contracts/near/eth-client/src/lib.rs",children:"here"})]})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://nearblocks.io/address/prover.bridge.near",children:"Ethereum Prover"})," : The Ethereum Prover is used to prove transactions are included in a valid block Header. Source code is ",e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/contracts/near/eth-prover/src/lib.rs",children:"here"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://nearblocks.io/address/factory.bridge.near#contract",children:"Bridge Contract"}),": The Bridge contract is responsible for managing tokens including creating new tokens, setting metadata and depositing and withdrawal of tokens. Source code is ",e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-token-connector/blob/master/bridge-token-factory/src/lib.rs",children:"here"}),".",`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://nearblocks.io/token/dac17f958d2ee523a2206206994597c13d831ec7.factory.bridge.near?a=dac17f958d2ee523a2206206994597c13d831ec7.factory.bridge.near",children:"NEAR Token Contract"}),": The target chain representation of the token (USDT) managed by the target chain bridge contract."]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(s.h3,{id:"sample-transactionflow",children:["Sample TransactionFlow",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#sample-transactionflow",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:["Block Propogation",`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:["Get the Latest Slot: The relayer loops polling Ethereum every 12 seconds to get the latest slot. It then checks if it is for a new epoch and if so (every 6 minutes) submits an execution header (with 32 blocks in it) and a light client update with the latest approved epochs and updated sync_comittee. Relayer source code for the loop is ",e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/eth2near/eth2near-block-relay-rs/src/eth2near_relay.rs#L258",children:"here"})," for retrieving the latest slot is ",e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/eth2near/eth2near-block-relay-rs/src/eth2near_relay.rs#L163",children:"here"}),", for submitting execution blocks is ",e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/eth2near/eth2near-block-relay-rs/src/eth2near_relay.rs#L399",children:"here"})," and for sending light client updates is ",e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/eth2near/eth2near-block-relay-rs/src/eth2near_relay.rs#L489",children:"here"}),".",`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://nearblocks.io/txns/HaXUxCvA1D87QXJzPzSYXmFYNuSLbTmyuxShzWgSLvPM",children:"Send Block Headers (submit_execution_header)"}),": Batch transaction which submits 32 block headers to ",e.jsx(s.a,{href:"https://nearblocks.io/address/client-eth2.bridge.near",children:"client-eth2.bridge.near"})," for Ethereum Blocks 16493592 to 16493623. (The second slot in epoch ",e.jsx(s.a,{href:"https://beaconcha.in/epoch/176936",children:"176,936"})," to the first slot in epoch ",e.jsx(s.a,{href:"https://beaconcha.in/epoch/176937",children:"176,937"}),"). ",e.jsx(s.strong,{children:"Executed every 6 minutes when the first slot of a new epoch is found."})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://nearblocks.io/txns/J1tQ465Dxt4UhWy9Msn2pZCbdkWatSepqsx9sDZaX35z#",children:"Create Light Client update proposal(add_proposal)"}),": calls ",e.jsx(s.a,{href:"https://nearblocks.io/address/bridge-validator.sputnik-dao.near",children:"bridge-validator.sputnik-dao.near"})," to add proposal 17410 for ",e.jsx(s.a,{href:"https://beaconcha.in/slot/5661984",children:"slot 5,661,984"})," in epoch ",e.jsx(s.a,{href:"https://beaconcha.in/epoch/176937",children:"176,937"}),"."]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://nearblocks.io/txns/D5uP4BbRSUX4ZGijRfWGkR5KbFb2Kb9q1gSsFVQbYSLt",children:"Approve Proposal (act_proposal)"}),": sends a VoteApprove action for proposal 17410 from a ",e.jsx(s.a,{href:"https://nearblocks.io/address/bridge-validator1.near",children:"bridge validator"})," to the ",e.jsx(s.a,{href:"https://nearblocks.io/address/bridge-validator.sputnik-dao.near",children:"Validator DAO Contract"}),".",`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:["act_proposal in contract ",e.jsx(s.a,{href:"https://nearblocks.io/address/bridge-validator.sputnik-dao.near",children:"bridge-validator.sputnik-dao.near"})]}),`
`,e.jsxs(s.li,{children:["submit_beacon_chain_light_client_update in ",e.jsx(s.a,{href:"https://nearblocks.io/address/client-eth2.bridge.near",children:"client-eth2.bridge.near"})]}),`
`,e.jsxs(s.li,{children:["on_proposal_callback in contract ",e.jsx(s.a,{href:"https://nearblocks.io/address/bridge-validator.sputnik-dao.near",children:"bridge-validator.sputnik-dao.near"})]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:["Funds Transfer Transaction Flow",`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://etherscan.io/tx/0xa685c59a24cc2056e10e660ce8a8bff7bbc335433698e138c77aaadf20ecb614",children:"Lock Funds On Ethereum"}),": Locking 10,000 USDT to send to user on NEAR."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://nearblocks.io/txns/vniyRR67ndrtvpoQ9c5ACoT4e9c283VSQsrZcN6GGto#execution",children:"Deposit Funds on Target Chain Bridge Contract (deposit)"}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsx(s.li,{children:"deposit in contract factory.bridge.near"}),`
`,e.jsx(s.li,{children:"verify_log_entry in contract prover.bridge.near"}),`
`,e.jsx(s.li,{children:"block_hash_safe in contract client-eth2.bridge.near"}),`
`,e.jsx(s.li,{children:"finish_deposit in contract factory.bridge.near : mint of 10,000 USDT."}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(s.strong,{children:"TODO"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Find and review the source code for the ",e.jsx(s.a,{href:"https://nearblocks.io/txns/HnzBR7x5Sxnmcm4MfRt1ghhMjJNspDaygUUKeM9T27Li#execution",children:"validator light client approval update"}),". ",e.jsxs(s.em,{children:["Note: the eth2_client has a ",e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/contracts/near/eth2-client/src/lib.rs#L311",children:"validate_light_client_update"})," which is ",e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/contracts/near/eth2-client/src/lib.rs#L42",children:"configurable"})," and is used for debugging purposes."]})]}),`
`]}),`
`,e.jsxs(s.h2,{id:"bridging-resources-required",children:["Bridging Resources Required",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#bridging-resources-required",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"Here is the storage and compuational costs per component."}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Component"}),e.jsx(s.th,{children:"Data"}),e.jsx(s.th,{children:"Storage"}),e.jsx(s.th,{children:"Notes"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/contracts/near/eth2-client/src/lib.rs#L35",children:"Ethereum 2 Client"})}),e.jsx(s.td,{children:"---"}),e.jsx(s.td,{children:"---"}),e.jsx(s.td,{children:"---"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/contracts/near/eth-prover/src/lib.rs",children:"Prover"})}),e.jsx(s.td,{children:"not applicable"}),e.jsx(s.td,{children:"0 bytes"}),e.jsx(s.td,{})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/eth2near/contract_wrapper/src/dao_contract.rs",children:"DAO Contract"})}),e.jsx(s.td,{}),e.jsx(s.td,{}),e.jsx(s.td,{})]})]})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"TODO"}),`
Review the following data structure and elements and move into the table above commenting on any mandatory requirements and structures that can be improved.`]}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"pub "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"struct"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" Eth2Client {"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    /// If set, only light client updates by the trusted signer will be accepted"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    trusted_signer: Option"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"<"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"AccountId"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:">"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    /// Mask determining all paused functions"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    paused: Mask,"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    /// Whether the client validates the updates."})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    /// Should only be set to `false` for debugging, testing, and diagnostic purposes"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    validate_updates: "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"bool"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    /// Whether the client verifies BLS signatures."})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    verify_bls_signatures: "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"bool"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    /// We store the hashes of the blocks for the past `hashes_gc_threshold` headers."})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    /// Events that happen past this threshold cannot be verified by the client."})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    /// It is desirable that this number is larger than 7 days' worth of headers, which is roughly"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    /// 51k Ethereum blocks. So this number should be 51k in production."})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    hashes_gc_threshold: u64,"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    /// Network. e.g. mainnet, kiln"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    network: Network,"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    /// Hashes of the finalized execution blocks mapped to their numbers. Stores up to `hashes_gc_threshold` entries."})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    /// Execution block number -> execution block hash"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    finalized_execution_blocks: LookupMap"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"<"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"u64, H256"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:">"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    /// All unfinalized execution blocks' headers hashes mapped to their `HeaderInfo`."})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    /// Execution block hash -> ExecutionHeaderInfo object"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    unfinalized_headers: UnorderedMap"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"<"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"H256, ExecutionHeaderInfo"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:">"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    /// `AccountId`s mapped to their number of submitted headers."})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    /// Submitter account -> Num of submitted headers"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    submitters: LookupMap"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"<"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"AccountId, u32"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:">"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    /// Max number of unfinalized blocks allowed to be stored by one submitter account"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    /// This value should be at least 32 blocks (1 epoch), but the recommended value is 1024 (32 epochs)"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    max_submitted_blocks_by_account: u32,"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    // The minimum balance that should be attached to register a new submitter account"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    min_storage_balance_for_submitter: Balance,"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    /// Light client state"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    finalized_beacon_header: ExtendedBeaconBlockHeader,"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    finalized_execution_header: LazyOption"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"<"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"ExecutionHeaderInfo"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:">"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    current_sync_committee: LazyOption"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"<"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"SyncCommittee"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:">"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    next_sync_committee: LazyOption"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"<"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"SyncCommittee"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:">"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})})}),`
`,e.jsxs(s.h3,{id:"references",children:["References",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#references",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.strong,{children:"Explorer and Interactive Links"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:"Near"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["eth-prover",`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://nearblocks.io/address/relayer.bridge.near",children:"https://nearblocks.io/address/relayer.bridge.near"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://nearblocks.io/address/client-eth2.bridge.near",children:"https://nearblocks.io/address/client-eth2.bridge.near"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://nearblocks.io/address/client.bridge.near",children:"https://nearblocks.io/address/client.bridge.near"})}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:["eth-client",`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://nearblocks.io/address/prover.bridge.near",children:"https://nearblocks.io/address/prover.bridge.near"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://nearblocks.io/address/client.bridge.near",children:"https://nearblocks.io/address/client.bridge.near"})}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:["factory (manages tokens)",`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://nearblocks.io/address/factory.bridge.near",children:"https://nearblocks.io/address/factory.bridge.near"})}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:["dao",`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://nearblocks.io/address/bridge-validator.sputnik-dao.near",children:"https://nearblocks.io/address/bridge-validator.sputnik-dao.near"})}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:["aurora",`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://nearblocks.io/address/aurora",children:"https://nearblocks.io/address/aurora"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://nearblocks.io/address/relay.aurora",children:"https://nearblocks.io/address/relay.aurora"})}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:"Ethereum"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://beaconcha.in/",children:"beaconcha.in"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://beaconcha.in/validators",children:"validators"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://beaconcha.in/epochs",children:"epochs"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://beaconcha.in/slots",children:"slots"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://beaconcha.in/blocks",children:"blocks"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://beaconcha.in/transactions",children:"transactions"})}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:["Near Bridge",`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://etherscan.io/address/0x3fefc5a4b1c02f21cbc8d3613643ba0635b9a873",children:"NearBridge"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://etherscan.io/tx/0xa685c59a24cc2056e10e660ce8a8bff7bbc335433698e138c77aaadf20ecb614",children:"ERC20Locker"})}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]})]})}function l(r={}){const{wrapper:s}={...i(),...r.components};return s?e.jsx(s,{...r,children:e.jsx(n,{...r})}):n(r)}export{l as default,t as frontmatter};
