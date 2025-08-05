import{f as a,j as s}from"./index-CsmQaVFF.js";const r={title:"Ethereum",description:"undefined"};function i(n){const e={a:"a",blockquote:"blockquote",code:"code",div:"div",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...a(),...n.components};return s.jsxs(s.Fragment,{children:[s.jsx(e.header,{children:s.jsxs(e.h1,{id:"ethereum",children:["Ethereum",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#ethereum",children:s.jsx(e.div,{"data-autolink-icon":!0})})]})}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:"date: 2023-02-04"}),`
`,s.jsx(e.li,{children:"last updated: 2023-02-04"}),`
`]}),`
`,s.jsxs(e.h2,{id:"overview",children:["Overview",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#overview",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.p,{children:["With the Introduction of Ethereum 2.0",s.jsx("sup",{children:s.jsx(e.a,{href:"#bp1",children:"1"})})," ",s.jsx("sup",{children:s.jsx(e.a,{href:"#bp2",children:"2"})})," ",s.jsx("sup",{children:s.jsx(e.a,{href:"#bp3",children:"3"})})," block production and consensus were separated",s.jsx("sup",{children:s.jsx(e.a,{href:"#bp4",children:"4"})})," into execution clients",s.jsx("sup",{children:s.jsx(e.a,{href:"#bp5",children:"5"})})," and consensus clients",s.jsx("sup",{children:s.jsx(e.a,{href:"#ts6",children:"6"})})," ",s.jsx("sup",{children:s.jsx(e.a,{href:"#bp7",children:"7"})}),"."]}),`
`,s.jsxs(e.p,{children:["The execution chain implemented a simplified Proof of Work",s.jsx("sup",{children:s.jsx(e.a,{href:"#bp1",children:"1"})})," reducing difficutly to zero and removing the need for omners (uncles) which would now be handled by the beacon chain",s.jsx("sup",{children:s.jsx(e.a,{href:"#bp3",children:"3"})})," which is responsible for providing consensus ",s.jsx("sup",{children:s.jsx(e.a,{href:"#bp2",children:"2"})}),"."]}),`
`,s.jsxs(e.p,{children:["Light Clients",s.jsx("sup",{children:s.jsx(e.a,{href:"#ts11",children:"11"})}),` were also introduced. To facilate this
a sync committee of 512 current validators is elected every 255 epochs, approximately every 27 hours (see `,s.jsx(e.a,{href:"#sync-committee-latest",children:"sample sync comittee data"}),"), they are responsible for signing each block."]}),`
`,s.jsxs(e.p,{children:["As at December 11th, 2022 Ethereum has 487,920 validators",s.jsx("sup",{children:s.jsx(e.a,{href:"#bp8",children:"8"})})," with a sample epoch (",s.jsx(e.a,{href:"https://beaconcha.in/epoch/166581",children:"166581"}),") and slot (",s.jsx(e.a,{href:"https://beaconcha.in/slot/5330592",children:"5,330,592"}),") having ",s.jsx(e.a,{href:"https://beaconcha.in/slot/5330592#transactions",children:"139 transactions"})," with ",s.jsx(e.a,{href:"https://beaconcha.in/slot/5330592#votes",children:"19,227 votes"})," from 63 committees and ",s.jsx(e.a,{href:"https://beaconcha.in/slot/5330592#attestations",children:"126 aggregated committe attestations"}),"."]}),`
`,s.jsxs(e.p,{children:["Here is more information on the upgrade",s.jsx("sup",{children:s.jsx(e.a,{href:"#bp9",children:"9"})})," and the roadmap",s.jsx("sup",{children:s.jsx(e.a,{href:"#bp10",children:"10"})})]}),`
`,s.jsx(e.p,{children:s.jsx(e.img,{src:"/images/research/ethereum-roadmap.jpg",alt:"Ethereum Roadmap",title:"Ethereum Roadmap"})}),`
`,s.jsxs(e.h2,{id:"consensus-mechanism",children:["Consensus Mechanism",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#consensus-mechanism",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.p,{children:[`Ethreum uses Proof of Stake (PoS). Here we give an overview of Proof of Stake Followed by a deep dive into synch committees.
Following is an excerpt from `,s.jsx(e.a,{href:"Proof-of-stake",title:"PoS",children:"Ethereum Orgs Proof of Stake document"})]}),`
`,s.jsxs(e.blockquote,{children:[`
`,s.jsx(e.strong,{children:"What is proof-of-stake (PoS)?"}),`
`]}),`
`,s.jsxs(e.blockquote,{children:[`
`,s.jsx(e.p,{children:"Proof-of-stake underlies certain consensus mechanisms used by blockchains to achieve distributed consensus. In proof-of-work, miners prove they have capital at risk by expending energy. Ethereum uses proof-of-stake, where validators explicitly stake capital in the form of ETH into a smart contract on Ethereum. This staked ETH then acts as collateral that can be destroyed if the validator behaves dishonestly or lazily. The validator is then responsible for checking that new blocks propagated over the network are valid and occasionally creating and propagating new blocks themselves."}),`
`]}),`
`,s.jsxs(e.blockquote,{children:[`
`,s.jsx(e.p,{children:"Proof-of-stake comes with a number of improvements to the now-deprecated proof-of-work system:"}),`
`]}),`
`,s.jsxs(e.blockquote,{children:[`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:"better energy efficiency – there is no need to use lots of energy on proof-of-work computations"}),`
`,s.jsx(e.li,{children:"lower barriers to entry, reduced hardware requirements – there is no need for elite hardware to stand a chance of creating new blocks"}),`
`,s.jsx(e.li,{children:"reduced centralization risk – proof-of-stake should lead to more nodes securing the network"}),`
`,s.jsx(e.li,{children:"because of the low energy requirement less ETH issuance is required to incentivize participation"}),`
`,s.jsx(e.li,{children:"economic penalties for misbehaviour make 51% style attacks exponentially more costly for an attacker compared to proof-of-work"}),`
`,s.jsx(e.li,{children:"the community can resort to social recovery of an honest chain if a 51% attack were to overcome the crypto-economic defenses."}),`
`]}),`
`]}),`
`,s.jsxs(e.h3,{id:"block-production",children:["Block Production",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#block-production",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.p,{children:["Validators run both an Ethereum 1 client (e.g. geth) and a Beacon Chain Client (e.g. prysm). The geth client recieves transactions and places them into blocks. For additional details see the Ethereum Builder Specs",s.jsx("sup",{children:s.jsx(e.a,{href:"#ts12",children:"12"})}),". The following diagrams give an overview of how blocks are proposed and how MEV Boost",s.jsx("sup",{children:s.jsx(e.a,{href:"#ts13",children:"13"})})," could be integrated. For simplification we can replace mev_boost and relay with geth in the block proposal diagram as the majority of validators simply run a geth node."]}),`
`,s.jsx(e.p,{children:s.jsx(e.img,{src:"/images/research/block-proposal.png",alt:"Block Proposal",title:"Block Proposal"})}),`
`,s.jsxs(e.h3,{id:"slots-and-epochs-6",children:["Slots and Epochs ",s.jsx("sup",{children:s.jsx(e.a,{href:"#ts6a",children:"6"})}),s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#slots-and-epochs-6",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.blockquote,{children:[`
`,s.jsx(e.p,{children:"The Beacon Chain provides the heartbeat to Ethereum’s consensus. Each slot is 12 seconds and an epoch is 32 slots: 6.4 minutes."}),`
`]}),`
`,s.jsx(e.p,{children:s.jsx(e.img,{src:"/images/research/Beacon-Chain-Slots-and-Epochs.png.webp",alt:"Slots and Epochs",title:"Slots and Epochs"})}),`
`,s.jsxs(e.h3,{id:"block-proposals",children:["Block Proposals",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#block-proposals",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(e.p,{children:"When a validator is nominated as a proposer for a slot in an Epoch they propose a block gathered from there Ethereum 1 client."}),`
`,s.jsxs(e.p,{children:["This proposed block is attested to by other validators who have been assigned as committe members for this slot",s.jsx("sup",{children:s.jsx(e.a,{href:"#ts6b",children:"6b"})}),"."]}),`
`,s.jsxs(e.blockquote,{children:[`
`,s.jsx(e.p,{children:"A block proposer is a validator that has been pseudorandomly selected to build a block."}),`
`,s.jsx(e.p,{children:"Most of the time, validators are attesters that vote on blocks. These votes are recorded in the Beacon Chain and determine the head of the Beacon Chain."}),`
`]}),`
`,s.jsx(e.p,{children:s.jsx(e.img,{src:"/images/research/Beacon-Chain-Validators.png",alt:"Validators and Attestations",title:"Validators and Attestations"})}),`
`,s.jsxs(e.h3,{id:"committees",children:["Committees",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#committees",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.blockquote,{children:[`
`,s.jsx(e.p,{children:"A committee is a group of validators. For security, each slot has committees of at least 128 validators. An attacker has less than a one in a trillion probability of controlling ⅔ of a committee."}),`
`,s.jsx(e.p,{children:"The concept of a randomness beacon that emits random numbers for the public, lends its name to the Ethereum Beacon Chain. The Beacon Chain enforces consensus on a pseudorandom process called RANDAO."}),`
`]}),`
`,s.jsx(e.p,{children:s.jsx(e.img,{src:"/images/research/Beacon-Chain-RANDAO.png",alt:"Committees",title:"Committees"})}),`
`,s.jsxs(e.h3,{id:"attestations",children:["Attestations",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#attestations",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.p,{children:["The attestation lifecyle",s.jsx("sup",{children:s.jsx(e.a,{href:"#ts9",children:"9"})})," involves"]}),`
`,s.jsxs(e.ol,{children:[`
`,s.jsx(e.li,{children:"Generation of the proposed Block"}),`
`,s.jsx(e.li,{children:"Propagation of the block to committee members to vote on and sign"}),`
`,s.jsx(e.li,{children:"Aggregation of the votes (signatures) of the committee members by Aggregators"}),`
`,s.jsx(e.li,{children:"Propagation of the aggregated attestations back to the block Proposer"}),`
`,s.jsx(e.li,{children:"Inclusion of the block in the Beaconchain"}),`
`]}),`
`,s.jsx(e.p,{children:s.jsx(e.img,{src:"/images/research/AttestationLifeCycle.png",alt:"Attestation Life Cycle",title:"Attestation Life Cycle"})}),`
`,s.jsxs(e.h3,{id:"checkpoints-and-finality6",children:["Checkpoints and Finality",s.jsx("sup",{children:s.jsx(e.a,{href:"#ts6",children:"6"})}),s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#checkpoints-and-finality6",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.blockquote,{children:[`
`,s.jsx(e.p,{children:"When an epoch ends, if its checkpoint has garnered a ⅔ supermajority, the checkpoint gets justified."}),`
`]}),`
`,s.jsx(e.p,{children:s.jsx(e.img,{src:"/images/research/Beacon-Chain-Checkpoints.jpg",alt:"Checkpoints",title:"Checkpoints"})}),`
`,s.jsxs(e.blockquote,{children:[`
`,s.jsx(e.p,{children:"If a checkpoint B is justified and the checkpoint in the immediate next epoch becomes justified, then B becomes finalized. Typically, a checkpoint is finalized in two epochs, 12.8 minutes."}),`
`]}),`
`,s.jsx(e.p,{children:s.jsx(e.img,{src:"/images/research/Beacon-Chain-Justification-and-Finalization.png",alt:"Finality",title:"Finality"})}),`
`,s.jsxs(e.h3,{id:"sync-committee-10",children:["Sync Committee ",s.jsx("sup",{children:s.jsx(e.a,{href:"#ts10",children:"10"})}),s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#sync-committee-10",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.p,{children:["A sync committee of 512 current validators is elected every 255 epochs, approximately every 27 hours (see ",s.jsx(e.a,{href:"#sync-committee-latest",children:"sample sync comittee data"}),`).
They are responsible for signing each block which records which sync committee members (validtors) signed the block, held in `,s.jsx(e.code,{children:"syncaggregate_bits"}),", and creates a bls aggregate signature held in ",s.jsx(e.code,{children:"syncaggregate_signature"})," (see ",s.jsx(e.a,{href:"#block-data-for-slot-5330592",children:"block-data"}),")."]}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'    "syncaggregate_bits": "0xdffffffffffffffffffffffffffffff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffdfffffffffffffffdffffffffffffffffffffffff",'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'    "syncaggregate_participation": 0.9921875,'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'    "syncaggregate_signature": "0x95332c55790018eed3d17eada01cb4045348d09137505bc8697eeedaa3800a830ee2c138251850a9577f62a5488419ef0a722579156a177fb3a147017f1077af5d778f46a4cdf815fc450129d135fe5286e16df68333592e4aa45821bde780dd",'})})]})})}),`
`,s.jsxs(e.p,{children:["This is used in Altair Light Client -- Sync Protocol",s.jsx("sup",{children:s.jsx(e.a,{href:"#ts11",children:"11"})})," which enables the beacon chain to be light client friendly for constrained environments to access Ethereum."]}),`
`,s.jsxs(e.h3,{id:"validator-lifecycle",children:["Validator Lifecycle",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#validator-lifecycle",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.p,{children:["Following is an overview of statuses for validators in Ethereum 2.0 phase 0 ",s.jsx("sup",{children:s.jsx(e.a,{href:"#ts14",children:"14"})}),"."]}),`
`,s.jsxs(e.blockquote,{children:[`
`,s.jsxs(e.ol,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Deposited"}),": the validator has made a deposit and has registered in BeaconState."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Eligible to be activated (Pending)"}),": the validator is eligible to be activated."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Activated"}),": the validator is activated",`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:s.jsx(e.em,{children:"Note that the validator may be “eligible to be activated, but has not been activated yet”."})}),`
`]}),`
`]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Slashed"}),": the validator has been slashed"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Exited"}),": the validator is exited"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Withdrawable"}),": the validator is withdrawable",`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:s.jsx(e.em,{children:"Note that the validator will be able to withdraw to EEs in phase 2"})}),`
`]}),`
`]}),`
`]}),`
`,s.jsx(e.p,{children:s.jsx(e.em,{children:"Note that in some cases, a validator can be in multiple statuses at the same time, e.g., an active validator may be “activated and slashed”."})}),`
`]}),`
`,s.jsx(e.p,{children:s.jsx(e.img,{src:"/images/research/ValidatorStateTransition.png",alt:"Validator Status Transition",title:"Validator Status Transition"})}),`
`,s.jsxs(e.h2,{id:"light-client-support",children:["Light Client Support",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#light-client-support",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(e.strong,{children:"Light client state updates"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:["A light client receives objects of type ",s.jsx(e.code,{children:"LightClientUpdate"}),", ",s.jsx(e.code,{children:"LightClientFinalityUpdate"})," and ",s.jsx(e.code,{children:"LightClientOptimisticUpdate"}),":",`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:s.jsx(e.code,{children:"update: LightClientUpdate"})}),": Every ",s.jsx(e.code,{children:"update"})," triggers ",s.jsx(e.code,{children:"process_light_client_update(store, update, current_slot, genesis_validators_root)"})," where ",s.jsx(e.code,{children:"current_slot"})," is the current slot based on a local clock."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:s.jsx(e.code,{children:"finality_update: LightClientFinalityUpdate"})}),": Every ",s.jsx(e.code,{children:"finality_update"})," triggers ",s.jsx(e.code,{children:"process_light_client_finality_update(store, finality_update, current_slot, genesis_validators_root)"}),"."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:s.jsx(e.code,{children:"optimistic_update: LightClientOptimisticUpdate"})}),": Every ",s.jsx(e.code,{children:"optimistic_update"})," triggers ",s.jsx(e.code,{children:"process_light_client_optimistic_update(store, optimistic_update, current_slot, genesis_validators_root)"}),"."]}),`
`]}),`
`]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"process_light_client_store_force_update"})," MAY be called based on use case dependent heuristics if light client sync appears stuck."]}),`
`]}),`
`,s.jsx(e.strong,{children:"validate_light_client_update"}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"def"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" validate_light_client_update"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(store: LightClientStore,"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"                                 update: LightClientUpdate,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"                                 current_slot: Slot,"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"                                 genesis_validators_root: Root) -> "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"None"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:":"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    # Verify sync committee has sufficient participants"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    sync_aggregate "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" update.sync_aggregate"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    assert"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" sum"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(sync_aggregate.sync_committee_bits) "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:">="}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" MIN_SYNC_COMMITTEE_PARTICIPANTS"})]}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    # Verify update does not skip a sync committee period"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    assert"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" is_valid_light_client_header(update.attested_header)"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    update_attested_slot "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" update.attested_header.beacon.slot"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    update_finalized_slot "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" update.finalized_header.beacon.slot"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    assert"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" current_slot "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:">="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" update.signature_slot "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:">"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" update_attested_slot "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:">="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" update_finalized_slot"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    store_period "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" compute_sync_committee_period_at_slot(store.finalized_header.beacon.slot)"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    update_signature_period "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" compute_sync_committee_period_at_slot(update.signature_slot)"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    if"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" is_next_sync_committee_known(store):"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"        assert"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" update_signature_period "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"in"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" (store_period, store_period "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"+"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 1"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:")"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    else"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:":"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"        assert"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" update_signature_period "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"=="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" store_period"})]}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    # Verify update is relevant"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    update_attested_period "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" compute_sync_committee_period_at_slot(update_attested_slot)"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    update_has_next_sync_committee "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" not"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" is_next_sync_committee_known(store) "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"and"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ("})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"        is_sync_committee_update(update) "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"and"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" update_attested_period "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"=="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" store_period"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    )"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    assert"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ("})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"        update_attested_slot "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:">"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" store.finalized_header.beacon.slot"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"        or"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" update_has_next_sync_committee"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    )"})}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    # Verify that the `finality_branch`, if present, confirms `finalized_header`"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    # to match the finalized checkpoint root saved in the state of `attested_header`."})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    # Note that the genesis finalized checkpoint root is represented as a zero hash."})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    if"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" not"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" is_finality_update(update):"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"        assert"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" update.finalized_header "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"=="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" LightClientHeader()"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    else"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:":"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"        if"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" update_finalized_slot "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"=="}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" GENESIS_SLOT"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:":"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"            assert"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" update.finalized_header "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"=="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" LightClientHeader()"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"            finalized_root "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" Bytes32()"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"        else"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:":"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"            assert"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" is_valid_light_client_header(update.finalized_header)"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"            finalized_root "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" hash_tree_root(update.finalized_header.beacon)"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"        assert"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" is_valid_merkle_branch("})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"            leaf"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"finalized_root,"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"            branch"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"update.finality_branch,"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"            depth"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"floorlog2("}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"FINALIZED_ROOT_INDEX"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"),"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"            index"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"get_subtree_index("}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"FINALIZED_ROOT_INDEX"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"),"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"            root"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"update.attested_header.beacon.state_root,"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"        )"})}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    # Verify that the `next_sync_committee`, if present, actually is the next sync committee saved in the"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    # state of the `attested_header`"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    if"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" not"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" is_sync_committee_update(update):"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"        assert"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" update.next_sync_committee "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"=="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" SyncCommittee()"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    else"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:":"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"        if"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" update_attested_period "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"=="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" store_period "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"and"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" is_next_sync_committee_known(store):"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"            assert"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" update.next_sync_committee "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"=="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" store.next_sync_committee"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"        assert"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" is_valid_merkle_branch("})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"            leaf"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"hash_tree_root(update.next_sync_committee),"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"            branch"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"update.next_sync_committee_branch,"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"            depth"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"floorlog2("}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"NEXT_SYNC_COMMITTEE_INDEX"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"),"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"            index"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"get_subtree_index("}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"NEXT_SYNC_COMMITTEE_INDEX"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"),"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"            root"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"update.attested_header.beacon.state_root,"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"        )"})}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    # Verify sync committee aggregate signature"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    if"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" update_signature_period "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"=="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" store_period:"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"        sync_committee "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" store.current_sync_committee"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    else"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:":"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"        sync_committee "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" store.next_sync_committee"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    participant_pubkeys "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ["})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"        pubkey "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"for"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" (bit, pubkey) "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"in"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" zip"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(sync_aggregate.sync_committee_bits, sync_committee.pubkeys)"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"        if"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" bit"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    ]"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    fork_version "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" compute_fork_version(compute_epoch_at_slot(update.signature_slot))"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    domain "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" compute_domain("}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"DOMAIN_SYNC_COMMITTEE"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", fork_version, genesis_validators_root)"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    signing_root "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" compute_signing_root(update.attested_header.beacon, domain)"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    assert"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" bls.FastAggregateVerify(participant_pubkeys, signing_root, sync_aggregate.sync_committee_signature)"})]})]})})}),`
`,s.jsx(e.strong,{children:"apply_light_client_update"}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"def"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" apply_light_client_update"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(store: LightClientStore, update: LightClientUpdate) -> "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"None"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:":"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    store_period "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" compute_sync_committee_period_at_slot(store.finalized_header.beacon.slot)"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    update_finalized_period "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" compute_sync_committee_period_at_slot(update.finalized_header.beacon.slot)"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    if"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" not"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" is_next_sync_committee_known(store):"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"        assert"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" update_finalized_period "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"=="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" store_period"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"        store.next_sync_committee "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" update.next_sync_committee"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    elif"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" update_finalized_period "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"=="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" store_period "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"+"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 1"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:":"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"        store.current_sync_committee "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" store.next_sync_committee"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"        store.next_sync_committee "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" update.next_sync_committee"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"        store.previous_max_active_participants "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" store.current_max_active_participants"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"        store.current_max_active_participants "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 0"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    if"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" update.finalized_header.beacon.slot "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:">"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" store.finalized_header.beacon.slot:"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"        store.finalized_header "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" update.finalized_header"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"        if"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" store.finalized_header.beacon.slot "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:">"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" store.optimistic_header.beacon.slot:"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"            store.optimistic_header "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" store.finalized_header"})]})]})})}),`
`,s.jsx(e.strong,{children:"Sample Implementation: NEAR Rainbow Bridge Ethereum Light Client Deployed on NEAR"}),`
`,s.jsxs(e.p,{children:["Bridging support was implemented by NEAR under ",s.jsx(e.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/pull/762",children:`Eth2-to-Near-relay: prototype implementation #762
`})]}),`
`,s.jsx(e.p,{children:s.jsx(e.img,{src:"/posts/2023-02-05-ethereum-bridging-costs/ETH_2_0_MMR.jpg",alt:"Ethereum 2 block proof",title:"Ethereum 2 Block Proof"})}),`
`,s.jsxs(e.blockquote,{children:[`
`,s.jsx(e.p,{children:"When we send light client update for finality block inside light client update, we also send Eth1 execution block hash with the Merkle proof of include to Beacon Block Body. Execution block hash you can find at BeaconBlockBody.execution_payload.block_hash."}),`
`,s.jsx(e.p,{children:"So, for creating Merkle proof, we need two levels of Merkle Tree, as shown in the picture. Both Merkle trees you can find in beacon_block_body_merkle_tree.rs The first level Merkle tree for beacon block body and the second level Merkle tree for execution payload."}),`
`,s.jsx(e.p,{children:"The execution block hash proof creation you can find in execution_block_proof.rs First, we build two Merkle trees and concatenate together the Merkle proof for block_hash in execution_payload and the Merkle proof of execution_payload in beacon_block_body. The final Merkle proof is shown by the orange vertices on the picture; the orange numbers in the picture are the order of hashes in the proof."}),`
`,s.jsx(e.p,{children:"beacon_block_header_with_execution_data.rs contain a structure which consists of beacon_block_header and correspondent execution_block_hash with Merkle proof. This structure is created for finality blocks in a light client update."}),`
`]}),`
`,s.jsxs(e.h2,{id:"references",children:["References",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#references",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(e.strong,{children:"Consensus"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.a,{href:"https://arxiv.org/pdf/2003.03052.pdf",children:"Gasper Consensus Whitepaper"}),": Combining GHOST and Casper"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.a,{href:"https://github.com/sigp/lighthouse/blob/stable/consensus/types/src/beacon_block.rs#L7",children:"sigp lighthouse beacon block"}),": Beacon Block codebase (rust)"]}),`
`]}),`
`,s.jsxs(e.p,{children:[s.jsx("a",{name:"bp1",children:"[1]"})," ",s.jsx(e.a,{href:"https://eips.ethereum.org/EIPS/eip-3675#pow-block-processing",children:`EIP-3675: Upgrade consensus to
Proof-of-Stake`}),`:
Specification of the consensus mechanism upgrade on Ethereum Mainnet that
introduces Proof-of-Stake.`]}),`
`,s.jsxs(e.p,{children:[s.jsx("a",{name:"bp2",children:"[2]"})," ",s.jsx(e.a,{href:"https://eips.ethereum.org/EIPS/eip-2982",children:`EIP-2982: Serenity Phase
0`}),`: Phase 0 of the release schedule of
Serenity, a series of updates to Ethereum a scalable, proof-of-stake consensus.`]}),`
`,s.jsxs(e.p,{children:[s.jsx("a",{name:"bp3",children:"[3]"})," ",s.jsx(e.a,{href:"https://github.com/ethereum/consensus-specs/tree/dev/specs/phase0",children:`Ethreum Consensus Specs Phase
0`}),`:
Specifications for Ethereum 2.0 Phase 0 including
`,s.jsx(e.a,{href:"https://github.com/ethereum/consensus-specs/blob/dev/specs/phase0/beacon-chain.mdx",children:"beacon-chain"}),`,
`,s.jsx(e.a,{href:"https://github.com/ethereum/consensus-specs/blob/dev/specs/phase0/deposit-contract.mdx",children:"deposit-contract"}),`,
`,s.jsx(e.a,{href:"https://github.com/ethereum/consensus-specs/blob/dev/specs/phase0/fork-choice.mdx",children:"fork-choice"}),`,
`,s.jsx(e.a,{href:"https://github.com/ethereum/consensus-specs/blob/dev/specs/phase0/p2p-interface.mdx",children:"p2p-interface"}),`,
`,s.jsx(e.a,{href:"https://github.com/ethereum/consensus-specs/blob/dev/specs/phase0/validator.mdx",children:"validator"}),`
and
`,s.jsx(e.a,{href:"https://github.com/ethereum/consensus-specs/blob/dev/specs/phase0/weak-subjectivity.mdx",children:"weak-subjectivity"})]}),`
`,s.jsxs(e.p,{children:[s.jsx("a",{name:"bp4",children:"[6]"})," ",s.jsx(e.a,{href:"https://clientdiversity.org/#distribution",children:`Ethereum Consensus and Execution Client
Distribution`}),`: Percentages of nodes
running client types for both Consensus (Prysm, Lighthours, Nimbus, Teku) and
Execution (Geth, Erigon, Besu, Nethermind) clients.`]}),`
`,s.jsxs(e.p,{children:[s.jsx("a",{name:"bp5",children:"[5]"})," ",s.jsx(e.a,{href:"https://pkg.go.dev/github.com/ethereum/go-ethereum@v1.10.26",children:`go-ethereum go
documentation`}),`:
Documentation for Go Ethereum, Official Golang implementation of the Ethereum
protocol. Which is an execution chain implementation.`]}),`
`,s.jsxs(e.p,{children:[s.jsx("a",{name:"bp6",children:"[6]"})," ",s.jsx(e.a,{href:"https://pkg.go.dev/github.com/prysmaticlabs/prysm/v3@v3.1.2",children:`prysm go
documentation`}),`:
Documentation for prysm, An Ethereum Consensus Implementation Written in Go. A
beacon-chain immplementation. Also see `,s.jsx(e.a,{href:"https://docs.prylabs.network/docs/getting-started",children:`Prysm
Documentation`})]}),`
`,s.jsxs(e.p,{children:[s.jsx("a",{name:"bp7",children:"[7]"})," ",s.jsx(e.a,{href:"https://pkg.go.dev/github.com/prysmaticlabs/prysm/v3@v3.1.2",children:`lighthouse
documentation`}),`:
Documentation for lighthouse, written in Rust. A beacon-chain immplementation.`]}),`
`,s.jsxs(e.p,{children:[s.jsx("a",{name:"bp8",children:"[8]"})," ",s.jsx(e.a,{href:"https://beaconcha.in/validators",children:`Etherum 2.0 Validators
Overview`}),`: Live Monitoring of Ethreum 2.0
Validators from beachoncha.in`]}),`
`,s.jsxs(e.p,{children:[s.jsx("a",{name:"bp9",children:"[9]"})," ",s.jsx(e.a,{href:"https://eth2book.info/bellatrix/",children:"Upgrading Ethereum"}),`: A
technical handbook on Ethereum's move to proof of stake and beyond Edition 0.2:
Bellatrix [WIP] by Ben Edgington.`]}),`
`,s.jsxs(e.p,{children:[s.jsx("a",{name:"bp10",children:"[9]"})," ",s.jsx(e.a,{href:"https://notes.ethereum.org/@domothy/roadmap",children:`Annotated Ethereum
Roadmap`}),`: an entry point for the
various items on the Ethereum roadmap, with a quick summary along with links for
those who want to dive deeper.`]}),`
`,s.jsxs(e.p,{children:[s.jsx("a",{name:"bp11",children:"[10]"})," ",s.jsx(e.a,{href:"https://consensys.net/shanghai-capella-upgrade/",children:`Shanghai/Capella
Upgrade`}),`: the first
simultaneous upgrade of Ethereum’s execution layer and consensus layer, and is
highly anticipated because it will enable staked ETH withdrawals.`]}),`
`,s.jsx(e.strong,{children:"Signing"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.a,{href:"https://github.com/sigp/lighthouse/blob/stable/crypto/bls/src/lib.rs",children:"sigp lighthouse bls signing"}),": BLS signing codebase (rust)"]}),`
`]}),`
`,s.jsx(e.strong,{children:"Staking"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.a,{href:"https://ethereum.org/en/staking/",children:"Ethereum Staking"}),": Staking User Interface"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.a,{href:"https://app.stakewise.io/",children:"App Stakewise"}),": Ethreeum Staking Application"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.a,{href:"https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/",children:"PROOF-OF-STAKE (POS)"}),": Ethereum Proof of Stake Documentation"]}),`
`]}),`
`,s.jsx(e.strong,{children:"References Technical Summary"}),`
`,s.jsxs(e.p,{children:[s.jsx("a",{name:"ts1",children:"[1]"})," ",s.jsx(e.a,{href:"https://takenobu-hs.github.io/downloads/ethereum_evm_illustrated.pdf",children:`Ethereum EVM
illustrated`}),`:
A technical overview of Ethereum including state, accounts, transactions and
messages as well as the EVM. `,s.jsx(e.a,{href:"#appendix-e-data-structures",children:"Appendix E"}),` has links
to type definitions for blocks, transactions, state etc in geth.`]}),`
`,s.jsxs(e.p,{children:[s.jsx("a",{name:"ts2",children:"[2]"})," ",s.jsx(e.a,{href:"https://ethereum.org/en/developers/docs/blocks/",children:"Blocks"}),`:
Block data definitions including attestations from ethereum.org`]}),`
`,s.jsxs(e.p,{children:[s.jsx("a",{name:"ts3",children:"[3]"})," ",s.jsx(e.a,{href:"https://hackmd.io/@flashbots/mev-in-eth2#eth1-block-proposal",children:`eth1 block
proposal`}),`:
Technical walkthrough of how blocks are proposed and potential MEV opportunities
from FlashBots.`]}),`
`,s.jsxs(e.p,{children:[s.jsx("a",{name:"ts4",children:"[4]"})," ",s.jsx(e.a,{href:"https://github.com/ethereum/rayonism/blob/master/specs/merge.md#assemble-block",children:`Assemble
Block`}),`:
Ethereum Specification for block Assembly as part of Rayonism -- The Merge spec.`]}),`
`,s.jsxs(e.p,{children:[s.jsx("a",{name:"ts5",children:"[5]"})," ",s.jsx(e.a,{href:"https://docs.prylabs.network/docs/install/install-with-script",children:`Prysm running a
node`}),`:
Operational procedures for Validators by Prysm. Note validators run both the
beacon chain(consensus) and a geth node(execution)`]}),`
`,s.jsxs(e.p,{children:[s.jsx("a",{name:"ts6",children:"[6]"}),s.jsx(e.a,{href:"https://ethos.dev/beacon-chain",children:`The Beacon Chain Ethereum 2.0 explainer you need to read
first`}),`: Detailed walk through og Ethereum 2.0
block production including slots, epochs, validators, commitees and finality.`]}),`
`,s.jsxs(e.p,{children:[s.jsx("a",{name:"ts6a",children:"[6]"}),s.jsx(e.a,{href:"https://ethos.dev/beacon-chain",children:`The Beacon Chain Ethereum 2.0 explainer you need to read
first`}),`: Detailed walk through og Ethereum 2.0
block production including slots, epochs, validators, commitees and finality.`]}),`
`,s.jsxs(e.p,{children:[s.jsx("a",{name:"ts6b",children:"[6]"}),s.jsx(e.a,{href:"https://ethos.dev/beacon-chain",children:`The Beacon Chain Ethereum 2.0 explainer you need to read
first`}),`: Detailed walk through og Ethereum 2.0
block production including slots, epochs, validators, commitees and finality.`]}),`
`,s.jsxs(e.p,{children:[s.jsx("a",{name:"ts7",children:"[7]"})," ",s.jsx(e.a,{href:"https://beaconcha.in/validators",children:`Etherum 2.0 Validators
Overview`}),`: Live Monitoring of Ethreum 2.0
Validators from beachoncha.in`]}),`
`,s.jsxs(e.p,{children:[s.jsx("a",{name:"ts8",children:"[8]"}),s.jsx(e.a,{href:"https://eth2book.info/bellatrix/part2/building_blocks/signatures/",children:`BLS
Signatures`}),`:
Detailed walkthrough of BLS Signatures and how they can be used in aggregation.`]}),`
`,s.jsxs(e.p,{children:[s.jsx("a",{name:"ts9",children:"[8]"}),s.jsx(e.a,{href:"https://kb.beaconcha.in/attestation#attestation-inclusion-lifecycle",children:`Attestation Inclusion
Lifecycle`}),`:
High Level overview of the attestation life cycle including geeration,
propogation, aggregation and inclusion.Attest`]}),`
`,s.jsxs(e.p,{children:[s.jsx("a",{name:"ts10",children:"[ts10]"})," ",s.jsx(e.a,{href:"https://notes.ethereum.org/@vbuterin/HF1_proposal#Sync-committees",children:`Beacon Chain Proposal: Sync
Comittees`}),`:
For each period (~27 hours), 1024 validators are randomly selected to be part of
the sync committee during that period. Validators in the sync committee would
publish signatures attesting to the current head. These signatures would be
broadcasted as part of a LightClientUpdate object that could help light clients
find the head, and would be included in the beacon chain to be rewarded.`]}),`
`,s.jsxs(e.p,{children:[s.jsx("a",{name:"ts11",children:"[ts11]"})," ",s.jsx(e.a,{href:"https://notes.ethereum.org/@vbuterin/HF1_proposal#Sync-committees",children:`Altair Light Client -- Sync
Protocol`}),`:
This document suggests a minimal light client design for the beacon chain that
uses sync committees.`]}),`
`,s.jsxs(e.p,{children:[s.jsx("a",{name:"ts12",children:"[ts12]"})," ",s.jsx(e.a,{href:"https://github.com/ethereum/builder-specs/blob/main/specs/validator.mdx",children:`Ethereum Builder Specifications: Honest
Validator`}),`:
explains the way in which a beacon chain validator is expected to use the
Builder spec to participate in an external builder network.`]}),`
`,s.jsxs(e.p,{children:[s.jsx("a",{name:"ts13",children:"[ts13]"})," ",s.jsx(e.a,{href:"https://github.com/flashbots/mev-boost",children:`Flashbots:
mev-boost`}),`: open source middleware run
by validators to access a competitive block-building market.`]}),`
`,s.jsxs(e.p,{children:[s.jsx("a",{name:"ts14",children:"[ts14]"})," ",s.jsx(e.a,{href:"https://notes.ethereum.org/7CFxjwMgQSWOHIxLgJP2Bw#A-note-on-Ethereum-20-phase-0-validator-lifecycle",children:`A note on Ethereum 2.0 phase 0 validator
lifecycle`}),`:
describes the concept of validator status epochs and the cases of validator
lifecycle in the view of “validator status transition” in phase 0.`]}),`
`,s.jsx(e.strong,{children:"Additional"}),`
`,s.jsxs(e.h2,{id:"appendices",children:["Appendices",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#appendices",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.h3,{id:"appendix-a-ethreum-20-technical-deep-dive",children:["Appendix A: Ethreum 2.0 Technical Deep Dive",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#appendix-a-ethreum-20-technical-deep-dive",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.h4,{id:"block-production-1",children:["Block Production",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#block-production-1",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(e.strong,{children:"Process Flow"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:["Transactions are placed in ",s.jsx(e.a,{href:"https://github.com/ethereum/go-ethereum/tree/master/core/txpool",children:"txpool"})]}),`
`,s.jsxs(e.li,{children:["The transaction pool is read and ",s.jsx(e.a,{href:"https://github.com/ethereum/go-ethereum/blob/release/1.9/core/types/block.go#L169",children:"blocks"})," are produced by the ",s.jsx(e.a,{href:"https://github.com/ethereum/go-ethereum/blob/master/miner/miner.go",children:"miner"})]}),`
`,s.jsxs(e.li,{children:["Blocks Headers get forwarded to the Beacon chain once they pass ",s.jsx(e.a,{href:"https://github.com/ethereum/go-ethereum/blob/master/consensus/beacon/consensus.go",children:"beacon consensus"})]}),`
`,s.jsxs(e.li,{children:["The Beacon chain embeds the EthChain Header into a ",s.jsx(e.a,{href:"https://github.com/prysmaticlabs/prysm/blob/develop/consensus-types/blocks/types.go#L43",children:"BeaconBlock"})]}),`
`]}),`
`,s.jsxs(e.h4,{id:"consensus-and-finality",children:["Consensus and Finality",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#consensus-and-finality",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(e.p,{children:"Attestation Process Flow"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:"Proposing Block"}),`
`,s.jsx(e.li,{children:"Signing Blocks"}),`
`,s.jsx(e.li,{children:"Aggregated Attestation generation"}),`
`,s.jsx(e.li,{children:"Block Proposal and Inclusion of Attestation"}),`
`,s.jsxs(e.li,{children:["The ",s.jsx(e.a,{href:"https://github.com/prysmaticlabs/prysm/blob/develop/consensus-types/blocks/types.go#L72",children:"SignedBeaconBlock"})," is added to the chain"]}),`
`]}),`
`,s.jsx(e.p,{children:"Attestations Block(LMD Ghost Vote) and Epoch Checkpoints (FFG Votes)"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:"The validators in the committee attest to the validity of the block (LMD Ghost Vote)"}),`
`,s.jsx(e.li,{children:"The validators in the comittee attest to the first block in the Epoch (FFG Vote)"}),`
`]}),`
`,s.jsxs(e.p,{children:["From ",s.jsx(e.a,{href:"https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/attestations",children:"Attestations, ethereum.org"})]}),`
`,s.jsxs(e.blockquote,{children:[`
`,s.jsx(e.p,{children:"Every epoch (6.4 minutes) a validator proposes an attestation to the network. The attestation is for a specific slot in the epoch. The purpose of the attestation is to vote in favor of the validator's view of the chain, in particular the most recent justified block and the first block in the current epoch (known as source and target checkpoints). This information is combined for all participating validators, enabling the network to reach consensus about the state of the blockchain."}),`
`,s.jsx(e.p,{children:"The attestation contains the following components:"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:"aggregation_bits: a bitlist of validators where the position maps to the validator index in their committee; the value (0/1) indicates whether the validator signed the data (i.e. whether they are active and agree with the block proposer)"}),`
`,s.jsx(e.li,{children:"data: details relating to the attestation, as defined below"}),`
`,s.jsx(e.li,{children:"signature: a BLS signature that aggregates the signatures of individual validators"}),`
`]}),`
`,s.jsx(e.p,{children:"The first task for an attesting validator is to build the data. The data contains the following information:"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:"slot: The slot number that the attestation refers to"}),`
`,s.jsx(e.li,{children:"index: A number that identifies which committee the validator belongs to in a given slot"}),`
`,s.jsx(e.li,{children:"beacon_block_root: Root hash of the block the validator sees at the head of the chain (the result of applying the fork-choice algorithm)"}),`
`,s.jsx(e.li,{children:"source: Part of the finality vote indicating what the validators see as the most recent justified block"}),`
`,s.jsx(e.li,{children:"target: Part of the finality vote indicating what the validators see as the first block in the current epoch"}),`
`]}),`
`,s.jsx(e.p,{children:"Once the data is built, the validator can flip the bit in aggregation_bits corresponding to their own validator index from 0 to 1 to show that they participated."}),`
`,s.jsx(e.p,{children:"Finally, the validator signs the attestation and broadcasts it to the network."}),`
`]}),`
`,s.jsx(e.strong,{children:"Technical Details"}),`
`,s.jsxs(e.p,{children:["Following is an overview of the state structure and logic for generating committees and aggregating attestations. For data structures, please see ",s.jsx(e.a,{href:"#beacon-state-data-structures-from-prysm",children:"Beacon State Data Structures from Prysm"})," and ",s.jsx(e.a,{href:"#web3signer_types-from-prysm",children:"web3signer_types from prysm"}),"."]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.a,{href:"https://pkg.go.dev/github.com/prysmaticlabs/prysm/v3@v3.1.2/beacon-chain/state#BeaconState",children:"BeaconState"})," contains both a ",s.jsx(e.a,{href:"https://pkg.go.dev/github.com/prysmaticlabs/prysm/v3@v3.1.2/beacon-chain/state#ReadOnlyBeaconState",children:"ReadOnlyBeaconState"})," and a ",s.jsx(e.a,{href:"https://pkg.go.dev/github.com/prysmaticlabs/prysm/v3@v3.1.2/beacon-chain/state#WriteOnlyBeaconState",children:"WriteOnlyBeaconState"})," wich contain ",s.jsx(e.a,{href:"https://pkg.go.dev/github.com/prysmaticlabs/prysm/v3@v3.1.2/beacon-chain/state#ReadOnlyValidators",children:"ReadOnlyValidators"})," and ",s.jsx(e.a,{href:"https://pkg.go.dev/github.com/prysmaticlabs/prysm/v3@v3.1.2/beacon-chain/state#ReadOnlyRandaoMixes",children:"ReadOnlyRandaoMixes"})," and ",s.jsx(e.a,{href:"https://pkg.go.dev/github.com/prysmaticlabs/prysm/v3@v3.1.2/beacon-chain/state#WriteOnlyValidators",children:"WriteOnlyValidators"})," and ",s.jsx(e.a,{href:"https://pkg.go.dev/github.com/prysmaticlabs/prysm/v3@v3.1.2/beacon-chain/state#WriteOnlyRandaoMixes",children:"WriteOnlyRandaoMixes"})," respectively."]}),`
`,s.jsxs(e.p,{children:["At the beginning of each epoch ",s.jsx(e.a,{href:"https://pkg.go.dev/github.com/prysmaticlabs/prysm/v3@v3.1.2/beacon-chain/core/epoch#ProcessRandaoMixesReset",children:"func ProcessRandaoMixesReset"})," processes the final updates to RANDAO mix during epoch processing. This calls ",s.jsx(e.a,{href:"https://pkg.go.dev/github.com/prysmaticlabs/prysm/v3@v3.1.2/beacon-chain/core/helpers#RandaoMix",children:"RandaoMix"})," which returns the randao mix (xor'ed seed) of a given slot. It is used to shuffle validators."]}),`
`,s.jsxs(e.p,{children:["Following are sample mixes generated from ",s.jsx(e.a,{href:"https://github.com/prysmaticlabs/prysm/blob/v3.1.2/beacon-chain/core/helpers/randao_test.go#L16",children:"func TestRandaoMix_OK"})," by adding the statement ",s.jsx(e.code,{children:'fmt.Printf("mix: %v\\n", mix)'})]}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"mix: [10 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0]"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"mix: [40 9 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0]"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"mix: [159 134 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0]"})})]})})}),`
`,s.jsx(e.p,{children:"The shuffle functions consist of"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[`
`,s.jsxs(e.p,{children:[s.jsx(e.a,{href:"https://pkg.go.dev/github.com/prysmaticlabs/prysm/v3@v3.1.2/beacon-chain/core/helpers#ShuffleList",children:"func ShuffleList"}),": returns list of shuffled indexes in a pseudorandom permutation ",s.jsx(e.code,{children:"p"})," of ",s.jsx(e.code,{children:"0...list_size - 1"})," with “seed“ as entropy. We utilize 'swap or not' shuffling in this implementation; we are allocating the memory with the seed that stays constant between iterations instead of reallocating it each iteration as in the spec. This implementation is based on the original implementation from protolambda, ",s.jsx(e.a,{href:"https://github.com/protolambda/eth2-shuffle",children:"https://github.com/protolambda/eth2-shuffle"})]}),`
`,s.jsxs(e.p,{children:["Following is an example of a shuffled list generated from ",s.jsx(e.a,{href:"https://github.com/prysmaticlabs/prysm/blob/v3.1.2/beacon-chain/core/helpers/shuffle_test.go#L25",children:"TestShuffleList_OK"})]}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"list1: [0 1 2 3 4 5 6 7 8 9]"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"seed1: [1 128 12 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0]"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"shuffledList1: [0 7 8 6 3 9 4 5 2 1]"})})]})})}),`
`]}),`
`,s.jsxs(e.li,{children:[`
`,s.jsxs(e.p,{children:[s.jsx(e.a,{href:"https://pkg.go.dev/github.com/prysmaticlabs/prysm/v3@v3.1.2/beacon-chain/core/helpers#ShuffledIndex",children:"func ShuffleIndex"}),": returns ",s.jsx(e.code,{children:"p(index)"})," in a pseudorandom permutation ",s.jsx(e.code,{children:"p"})," of ",s.jsx(e.code,{children:"0...list_size - 1"})," with “seed“ as entropy. We utilize 'swap or not' shuffling in this implementation; we are allocating the memory with the seed that stays constant between iterations instead of reallocating it each iteration as in the spec. This implementation is based on the original implementation from protolambda, ",s.jsx(e.a,{href:"https://github.com/protolambda/eth2-shuffle",children:"https://github.com/protolambda/eth2-shuffle"})]}),`
`]}),`
`,s.jsxs(e.li,{children:[`
`,s.jsxs(e.p,{children:[s.jsx(e.a,{href:"https://pkg.go.dev/github.com/prysmaticlabs/prysm/v3@v3.1.2/beacon-chain/core/helpers#ShuffledIndices",children:"func ShuffleIndices"}),": ShuffledIndices uses input beacon state and returns the shuffled indices of the input epoch, the shuffled indices then can be used to break up into committees."]}),`
`]}),`
`]}),`
`,s.jsxs(e.p,{children:["Committes are formed using functions from ",s.jsx(e.a,{href:"https://github.com/prysmaticlabs/prysm/blob/v3.1.2/beacon-chain/core/helpers/beacon_committee.go",children:"beacon_comittee.go"})]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[`
`,s.jsxs(e.p,{children:[s.jsx(e.a,{href:"https://pkg.go.dev/github.com/prysmaticlabs/prysm/v3@v3.1.2/beacon-chain/core/helpers#BeaconCommittee",children:"func BeaconComittee"}),": returns the beacon committee of a given slot and committee index. The validator indices and seed are provided as an argument rather than an imported implementation from the spec definition. Having them as an argument allows for cheaper computation run time. (This is an optomized version of ",s.jsx(e.a,{href:"https://pkg.go.dev/github.com/prysmaticlabs/prysm/v3@v3.1.2/beacon-chain/core/helpers#BeaconCommitteeFromState",children:"func BeaconComitteFromState"}),")"]}),`
`,s.jsxs(e.p,{children:["Following is an example of a ",s.jsx(e.code,{children:"beaconComittee"})," generated by adding the following lines to ",s.jsx(e.a,{href:"https://github.com/prysmaticlabs/prysm/blob/v3.1.2/beacon-chain/core/helpers/beacon_committee_test.go#L574",children:"TestBeaconCommitteeFromState_UpdateCacheForPreviousEpoch"}),":"]}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"var beaconCommittee []types.ValidatorIndex"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"beaconCommittee, err = BeaconCommitteeFromState(context.Background(), state, 1 /"}),s.jsx(e.span,{style:{color:"#24292E",fontStyle:"italic","--shiki-dark":"#ADBAC7","--shiki-dark-font-style":"italic"},children:"_previous epoch_"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"/, 0)"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'fmt.Printf("beaconComittee: %+v\\n", beaconCommittee)'})})]})})}),`
`,s.jsx(e.p,{children:"Result"}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsx(e.code,{children:s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"beaconComittee: [160 338 313 307 320 324 45 469 196 303 23 14 97 312 126 488]"})})})})}),`
`]}),`
`,s.jsxs(e.li,{children:[`
`,s.jsxs(e.p,{children:[s.jsx(e.a,{href:"https://pkg.go.dev/github.com/prysmaticlabs/prysm/v3@v3.1.2/beacon-chain/core/helpers#CommitteeAssignments",children:"func CommitteeAssignments"}),": is a map of validator indices pointing to the appropriate committee assignment for the given epoch."]}),`
`,s.jsxs(e.ol,{children:[`
`,s.jsx(e.li,{children:"Determine the proposer validator index for each slot."}),`
`,s.jsx(e.li,{children:"Compute all committees."}),`
`,s.jsx(e.li,{children:"Determine the attesting slot for each committee."}),`
`,s.jsx(e.li,{children:"Construct a map of validator indices pointing to the respective committees."}),`
`]}),`
`,s.jsxs(e.p,{children:["Following is an example of ",s.jsx(e.code,{children:"commitees"})," generated by adding the following lines to ",s.jsx(e.a,{href:"https://github.com/prysmaticlabs/prysm/blob/v3.1.2/beacon-chain/core/helpers/beacon_committee_test.go#L23",children:"TestComputeCommittee_WithoutCache"})]}),`
`]}),`
`]}),`
`,s.jsx(e.p,{children:"committees, err := computeCommittee(indices, seed, 0, 1 /_ Total committee_/)"}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'fmt.Printf("committees: %+v\\n", committees)'})})]})})}),`
`,s.jsxs("details",{children:[s.jsx("summary",{children:"result"}),s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsx(e.code,{children:s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"committees: [799 45 913 1 631 654 417 244 1270 918 798 719 426 164 1171 863 848 522 828 359 713 972 284 680 203 832 453 75 979 468 667 540 180 729 1137 156 624 434 655 974 108 321 641 750 1150 356 933 870 650 984 869 95 975 510 563 1002 821 819 599 597 593 635 982 915 693 910 1030 845 461 887 936 354 1075 1253 1238 1011 395 773 670 54 389 765 1183 912 866 1230 1279 521 898 598 1038 814 377 1209 1226 19 1087 775 820 401 640 1028 673 174 493 857 931 288 475 1115 139 429 353 295 412 1136 1166 1191 496 677 1039 629 826 528 769 289 856 147 1227 243 731 297 924 89 644 557 1027 1239 1109 447 323 716 764 669 903 612 350 1046 392 768 1257 1083 216 294 606 971 103 902 1015 801 674 1099 49 484 995 1012 146 879 1156 548 1081 844 873 1246 1107 115 121 1018 387 751 941 1259 183 916 937 71 163 287 706 421 304 247 310 113 1032 776 502 1276 274 1214 418 271 307 1224 332 1222 240 657 1060 479 874 14 1147 627 122 448 1082 458 371 214 64 487 1263 34 172 497 880 555 1091 839 507 530 1170 498 999 727 950 317 1266 423 134 364 1092 1128 155 362 419 1219 1019 379 1163 483 917 318 804 336 985 463 584 210 1255 26 583 850 365 723 433 1073 1141 735 922 1035 893 774 1114 256 358 1044 997 546 679 1024 699 1096 663 1066 499 366 1256 883 566 17 717 393 422 622 795 1181 554 1212 736 1064 106 1050 72 1153 1210 198 943 818 518 309 101 471 0 38 688 107 718 1077 1021 648 1236 891 969 39 481 1159 660 686 450 990 1045 1213 756 900 849 355 119 1135 623 878 44 596 262 553 1013 290 269 691 18 207 454 620 221 983 852 430 843 1272 209 526 1100 865 402 437 278 976 1185 784 128 906 536 608 683 1205 574 1251 562 344 930 440 758 472 239 369 73 1235 478 724 373 399 1142 375 490 966 1203 1093 403 74 65 1247 579 145 1090 143 80 190 187 449 1160 194 959 533 671 442 136 158 665 79 253 226 1076 572 1130 227 909 940 275 43 342 182 126 967 700 267 1070 171 1000 658 876 1120 424 141 1164 328 1277 1220 1245 314 335 886 249 638 836 104 527 1057 1179 1111 551 334 749 754 237 1232 495 549 672 250 547 1132 427 346 935 515 452 184 739 77 689 744 831 281 76 48 2 327 542 351 47 1079 661 585 746 709 260 486 1242 932 303 435 1061 282 1217 390 996 457 470 40 592 785 1065 24 160 991 920 858 978 616 934 586 601 939 730 501 859 482 1207 386 1037 78 1184 947 861 643 231 22 397 1126 1215 265 1145 864 942 809 398 715 890 385 559 232 777 185 410 131 112 192 632 1124 302 1025 904 1047 94 1175 516 474 1122 568 617 894 733 1074 1252 264 263 851 124 1258 1023 1121 283 901 1225 923 464 193 1140 810 604 1108 740 1157 368 853 199 270 8 752 529 973 90 246 896 11 960 6 734 285 299 1042 152 732 965 469 161 609 1234 467 1084 780 1069 466 816 588 50 1194 1127 5 1010 31 712 766 1049 813 157 27 259 1055 343 793 1005 127 558 1036 794 1006 1178 767 1168 537 254 1218 590 361 531 186 567 605 4 255 618 37 1216 1134 337 223 811 962 67 587 1001 1187 842 455 1228 1248 1056 300 613 396 1152 830 329 61 1155 439 1188 807 1182 268 662 1101 1026 82 847 755 757 148 1244 778 664 1059 1197 301 1117 1274 743 840 316 123 634 272 1237 326 1041 1068 372 1003 1190 1243 630 298 215 166 445 513 838 363 1085 854 639 503 129 1029 1196 219 325 1161 70 165 564 1206 111 1078 1233 970 444 12 400 211 742 191 41 760 506 196 988 1173 125 177 420 805 957 862 1088 1144 1267 1265 994 380 1250 505 235 1089 451 120 762 867 1167 117 675 16 711 575 1009 85 577 550 1116 895 438 822 138 308 13 349 233 197 404 142 1123 589 614 251 411 1007 228 151 911 105 1162 738 140 892 1110 607 511 802 580 459 293 619 927 488 378 60 1020 236 212 279 980 322 1052 29 720 173 812 1043 882 797 159 926 1261 58 726 492 494 242 3 725 800 524 1062 1195 504 1016 808 168 436 682 383 952 615 179 57 921 370 394 945 489 1254 154 938 789 1229 339 684 806 525 539 787 1268 698 1008 621 225 408 32 964 357 188 477 114 581 144 745 701 110 391 460 381 181 1231 63 206 1264 480 538 561 591 1113 1202 825 348 704 33 625 783 681 1063 1080 1240 217 28 1176 928 582 914 229 252 1102 552 280 728 594 1017 35 406 137 175 162 1118 176 66 296 837 56 508 786 602 102 443 1095 868 696 899 692 1086 1223 907 834 1241 1172 118 1221 855 266 556 1098 384 948 55 340 178 1249 150 781 642 514 771 291 877 519 100 919 224 376 1125 987 645 1169 305 1133 319 201 611 956 42 189 238 908 703 88 981 954 1139 1174 881 576 1105 1186 1201 414 545 741 407 313 23 653 1051 509 872 195 649 1208 1165 1014 595 222 697 1112 1033 234 748 823 570 476 1198 1180 1154 248 257 905 306 1269 676 116 135 51 208 68 202 646 1177 312 86 388 1200 833 779 791 153 347 230 1158 565 543 261 986 875 1193 415 889 273 20 258 600 860 573 636 149 759 374 1072 1053 610 286 656 1119 1260 500 637 702 97 951 628 170 491 944 747 99 714 1278 721 69 571 83 520 473 569 989 98 245 929 1106 961 431 955 1004 884 998 446 544 949 220 535 1031 311 93 1262 871 763 1273 485 647 352 803 205 652 1034 687 958 888 753 792 456 782 59 462 441 796 708 1192 360 96 1148 678 428 277 1189 1071 633 1151 1103 25 993 835 241 1211 320 968 788 338 925 7 9 668 84 330 204 690 133 405 1094 1138 1097 1275 761 1104 10 897 315 517 694 416 685 560 62 772 382 977 87 651 532 659 827 1204 737 841 331 213 1040 132 846 963 695 130 292 91 1022 324 81 992 1199 770 790 465 523 425 1146 21 1054 815 345 829 666 603 1067 109 167 722 432 1149 953 512 413 707 1058 885 218 626 341 409 824 30 705 1048 578 367 710 946 36 1131 46 200 534 15 92 1129 276 817 169 53 52 541 333 1143 1271]"})})})})})]}),`
`,s.jsxs(e.p,{children:["Attestations are managed using functions from ",s.jsx(e.a,{href:"https://github.com/prysmaticlabs/prysm/blob/v3.1.2/beacon-chain/core/helpers/attestation.go",children:"attestation.go"})]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[`
`,s.jsxs(e.p,{children:[s.jsx(e.a,{href:"https://pkg.go.dev/github.com/prysmaticlabs/prysm/v3@v3.1.2/beacon-chain/core/helpers#ValidateNilAttestation",children:"func ValidateNilAttestation"}),": checks if any composite field of input attestation is nil. Access to these nil fields will result in run time panic, it is recommended to run these checks as first line of defense."]}),`
`]}),`
`,s.jsxs(e.li,{children:[`
`,s.jsxs(e.p,{children:[s.jsx(e.a,{href:"https://pkg.go.dev/github.com/prysmaticlabs/prysm/v3@v3.1.2/beacon-chain/core/helpers#ValidateSlotTargetEpoch",children:"func ValidateSlotTargetEpoch"}),": ValidateSlotTargetEpoch checks if attestation data's epoch matches target checkpoint's epoch. It is recommended to run ",s.jsx(e.code,{children:"ValidateNilAttestation"})," first to ensure ",s.jsx(e.code,{children:"data.Target"})," can't be nil."]}),`
`]}),`
`,s.jsxs(e.li,{children:[`
`,s.jsxs(e.p,{children:[s.jsx(e.a,{href:"https://pkg.go.dev/github.com/prysmaticlabs/prysm/v3@v3.1.2/beacon-chain/core/helpers#IsAggregator",children:"func IsAggregator"}),": IsAggregator returns true if the signature is from the input validator. The committee count is provided as an argument rather than imported implementation from spec. Having committee count as an argument allows cheaper computation at run time."]}),`
`]}),`
`,s.jsxs(e.li,{children:[`
`,s.jsxs(e.p,{children:[s.jsx(e.a,{href:"https://pkg.go.dev/github.com/prysmaticlabs/prysm/v3@v3.1.2/beacon-chain/core/helpers#AggregateSignature",children:"func AggregateSignature"}),": returns the aggregated signature of the input attestations."]}),`
`,s.jsx(e.p,{children:"Spec pseudocode definition:"}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"def get_aggregate_signature(attestations: Sequence["}),s.jsx(e.span,{style:{color:"#032F62",textDecoration:"underline","--shiki-dark":"#96D0FF","--shiki-dark-text-decoration":"inherit"},children:"Attestation"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"]) -> BLSSignature:"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"signatures = [attestation.signature for attestation in attestations]"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"return bls.Aggregate(signatures)"})})]})})}),`
`,s.jsxs(e.p,{children:["Following is an example aggregrated signature by adding the following lines to ",s.jsx(e.a,{href:"https://github.com/prysmaticlabs/prysm/blob/v3.1.2/beacon-chain/core/helpers/attestation_test.go#L48",children:"TestAttestation_AggregateSignature"})]}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"aggSig, err := helpers.AggregateSignature(atts)"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'fmt.Printf("aggSig: %+v\\n", aggSig)'})})]})})}),`
`,s.jsx(e.p,{children:"Result"}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsx(e.code,{children:s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    aggSig: &{s:0xc0003fe000}"})})})})}),`
`]}),`
`,s.jsxs(e.li,{children:[`
`,s.jsxs(e.p,{children:[s.jsx(e.a,{href:"https://pkg.go.dev/github.com/prysmaticlabs/prysm/v3@v3.1.2/beacon-chain/core/helpers#IsAggregated",children:"func IsAggregated"}),": IsAggregated returns true if the attestation is an aggregated attestation, false otherwise."]}),`
`]}),`
`,s.jsxs(e.li,{children:[`
`,s.jsxs(e.p,{children:[s.jsx(e.a,{href:"https://pkg.go.dev/github.com/prysmaticlabs/prysm/v3@v3.1.2/beacon-chain/core/helpers#ComputeSubnetForAttestation",children:"func ComputeSubnetForAttestation"}),": returns the subnet for which the provided attestation will be broadcasted to.This differs from the spec definition by instead passing in the active validators indices in the attestation's given epoch."]}),`
`]}),`
`]}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  Spec pseudocode definition:"})}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"def compute_subnet_for_attestation(committees_per_slot: uint64, slot: Slot, committee_index: CommitteeIndex) -> uint64:"})}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"""'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"Compute the correct subnet for an attestation for Phase 0."})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"Note, this mimics expected future behavior where attestations will be mapped to their shard subnet."})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"""'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"slots_since_epoch_start = uint64(slot % SLOTS_PER_EPOCH)"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"committees_since_epoch_start = committees_per_slot "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:"\\*"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" slots_since_epoch_start"})]}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"return uint64((committees_since_epoch_start + committee_index) % ATTESTATION_SUBNET_COUNT)"})})]})})}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.a,{href:"https://pkg.go.dev/github.com/prysmaticlabs/prysm/v3@v3.1.2/beacon-chain/core/helpers#ComputeSubnetFromCommitteeAndSlot",children:"func ComputeSubnetFromCommitteeAndSlot"}),": is a flattened version of ComputeSubnetForAttestation where we only pass in the relevant fields from the attestation as function arguments."]}),`
`]}),`
`,s.jsx(e.p,{children:"Spec pseudocode definition:"}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"def compute_subnet_for_attestation(committees_per_slot: uint64, slot: Slot, committee_index: CommitteeIndex) -> uint64:"})}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"""'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"Compute the correct subnet for an attestation for Phase 0."})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"Note, this mimics expected future behavior where attestations will be mapped to their shard subnet."})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"""'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"slots_since_epoch_start = uint64(slot % SLOTS_PER_EPOCH)"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"committees_since_epoch_start = committees_per_slot "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:"\\*"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" slots_since_epoch_start"})]}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"return uint64((committees_since_epoch_start + committee_index) % ATTESTATION_SUBNET_COUNT)"})})]})})}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.a,{href:"https://pkg.go.dev/github.com/prysmaticlabs/prysm/v3@v3.1.2/beacon-chain/core/helpers#ValidateAttestationTime",children:"func ValidateAttestationTime"}),`: Validates that the incoming attestation is in the desired time range.
An attestation is valid only if received within the last ATTESTATION_PROPAGATION_SLOT_RANGE slots.`]}),`
`]}),`
`,s.jsx(e.p,{children:"Example:"}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"ATTESTATION_PROPAGATION_SLOT_RANGE = 5"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"clockDisparity = 24 seconds"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"current_slot = 100"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"invalid_attestation_slot = 92"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"invalid_attestation_slot = 103"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"valid_attestation_slot = 98"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"valid_attestation_slot = 101"})})]})})}),`
`,s.jsx(e.p,{children:"In the attestation must be within the range of 95 to 102 in the example above."}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.a,{href:"https://pkg.go.dev/github.com/prysmaticlabs/prysm/v3@v3.1.2/beacon-chain/core/helpers#VerifyCheckpointEpoch",children:"func VerifyCheckpointEpoch"}),": VerifyCheckpointEpoch is within current epoch and previous epoch with respect to current time. Returns true if it's within, false if it's not."]}),`
`]}),`
`,s.jsx(e.p,{children:s.jsxs(e.em,{children:["Note: Sample command for running tests in Prysm: ",s.jsx(e.code,{children:"bazel test //beacon-chain/core/helpers:go_default_test --test_output=streamed --test_filter=TestAttestation_AggregateSignature"}),"."]})}),`
`,s.jsx(e.strong,{children:"Consensus Committee Selection"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.a,{href:"https://pkg.go.dev/github.com/prysmaticlabs/prysm/v3@v3.1.2/beacon-chain/core/blocks#ProcessRandao",children:"func ProcessRandoa"}),": checks the block proposer's randao commitment and generates a new randao mix to update in the beacon state's latest randao mixes slice."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.a,{href:"https://github.com/prysmaticlabs/prysm/blob/v3.1.2/beacon-chain/core/blocks/signature.go#L157",children:"func randaoSigningData"}),": retrieves the randao related signing data from the state.",`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.a,{href:"https://github.com/prysmaticlabs/prysm/blob/v3.1.2/beacon-chain/state/state-native/getters_validator.go#L135",children:"func (b *BeaconState) PubkeyAtIndex(idx types.ValidatorIndex) [fieldparams.BLSPubkeyLength]byte "}),": returns the pubkey at the given validator index."]}),`
`]}),`
`]}),`
`]}),`
`,s.jsxs(e.h3,{id:"appendix-b-additional-light-client-support-documentation",children:["Appendix B: Additional Light Client Support Documentation",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#appendix-b-additional-light-client-support-documentation",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.h4,{id:"key-concepts",children:["Key Concepts",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#key-concepts",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[`
`,s.jsx(e.p,{children:"Syncing to Current state"}),`
`]}),`
`,s.jsxs(e.li,{children:[`
`,s.jsx(e.p,{children:"Advancing Blocks"}),`
`]}),`
`,s.jsxs(e.li,{children:[`
`,s.jsx(e.p,{children:"Communication can be either via"}),`
`]}),`
`,s.jsxs(e.li,{children:[`
`,s.jsxs(e.p,{children:["RPC to the ",s.jsx(e.a,{href:"https://ethereum.github.io/beacon-APIs/#/Beacon",children:"Eth BEACON Node API"})]}),`
`]}),`
`,s.jsxs(e.li,{children:[`
`,s.jsx(e.p,{children:s.jsx(e.a,{href:"https://github.com/ethereum/consensus-specs/blob/dev/specs/altair/light-client/p2p-interface.md#global-topics",children:"Networking Gossip Topics"})}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.a,{href:"https://github.com/ethereum/consensus-specs/blob/dev/specs/altair/light-client/p2p-interface.md#light_client_finality_update",children:"light_client_finality_update"}),": This topic is used to propagate the latest ",s.jsx(e.code,{children:"LightClientFinalityUpdate"})," to light clients, allowing them to keep track of the latest ",s.jsx(e.code,{children:"finalized_header"}),"."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.a,{href:"https://github.com/ethereum/consensus-specs/blob/dev/specs/altair/light-client/p2p-interface.md#light_client_optimistic_update",children:"light_client_optimistic_update"}),": This topic is used to propagate the latest",s.jsx(e.code,{children:"LightClientOptimisticUpdate"})," to light clients, allowing them to keep track of the latest ",s.jsx(e.code,{children:"optimistic_header"}),"."]}),`
`]}),`
`]}),`
`]}),`
`,s.jsx(e.p,{children:s.jsx(e.em,{children:"Note: Time on Ethereum 2.0 Proof of Stake is divided into slots and epochs. One slot is 12 seconds. One epoch is 6.4 minutes, consisting of 32 slots. One block can be created for each slot."})}),`
`,s.jsxs(e.h4,{id:"altair-light-client----sync-protocol",children:["Altair Light Client -- Sync Protocol",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#altair-light-client----sync-protocol",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.a,{href:"https://github.com/ethereum/consensus-specs/blob/dev/specs/altair/light-client/sync-protocol.mdx",children:"Altair Light Client -- Sync Protocol"}),": The beacon chain is designed to be light client friendly for constrained environments to access Ethereum with reasonable safety and liveness."]}),`
`]}),`
`,s.jsx(e.p,{children:"Such environments include resource-constrained devices (e.g. phones for trust-minimized wallets)and metered VMs (e.g. blockchain VMs for cross-chain bridges)."}),`
`,s.jsxs(e.p,{children:["This document suggests a minimal light client design for the beacon chain thatuses sync committees introduced in ",s.jsx(e.a,{href:"https://github.com/ethereum/consensus-specs/blob/dev/specs/altair/beacon-chain.mdx",children:"this beacon chain extension"}),"."]}),`
`,s.jsx(e.p,{children:"Additional documents describe how the light client sync protocol can be used:"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[`
`,s.jsx(e.p,{children:s.jsx(e.a,{href:"https://github.com/ethereum/consensus-specs/blob/dev/specs/altair/light-client/full-node.mdx",children:"Full node"})}),`
`]}),`
`,s.jsxs(e.li,{children:[`
`,s.jsx(e.p,{children:s.jsx(e.a,{href:"https://github.com/ethereum/consensus-specs/blob/dev/specs/altair/light-client/light-client.mdx",children:"Light client"})}),`
`]}),`
`,s.jsxs(e.li,{children:[`
`,s.jsx(e.p,{children:s.jsx(e.a,{href:"https://github.com/ethereum/consensus-specs/blob/dev/specs/altair/light-client/p2p-interface.mdx",children:"Networking"})}),`
`]}),`
`,s.jsxs(e.li,{children:[`
`,s.jsxs(e.p,{children:[s.jsx(e.a,{href:"https://github.com/ethereum/consensus-specs/blob/dev/specs/altair/light-client/light-client.mdx",children:"Light client sync process"}),": explains how light clients MAY obtain light client data to sync with the network."]}),`
`]}),`
`]}),`
`,s.jsxs(e.ol,{children:[`
`,s.jsxs(e.li,{children:["The light client MUST be configured out-of-band with a spec/preset (including fork schedule), with ",s.jsx(e.code,{children:"genesis_state"})," (including ",s.jsx(e.code,{children:"genesis_time"})," and ",s.jsx(e.code,{children:"genesis_validators_root"}),"), and with a trusted block root. The trusted block SHOULD be within the weak subjectivity period, and its root SHOULD be from a finalized ",s.jsx(e.code,{children:"Checkpoint"}),"."]}),`
`,s.jsxs(e.li,{children:["The local clock is initialized based on the configured ",s.jsx(e.code,{children:"genesis_time"}),", and the current fork digest is determined to browse for and connect to relevant light client data providers."]}),`
`,s.jsxs(e.li,{children:["The light client fetches a ",s.jsx(e.a,{href:"https://github.com/ethereum/consensus-specs/blob/dev/specs/altair/light-client/light-client.mdx",children:s.jsx(e.code,{children:"LightClientBootstrap"})})," object for the configured trusted block root. The ",s.jsx(e.code,{children:"bootstrap"})," object is passed to ",s.jsx(e.a,{href:"https://github.com/ethereum/consensus-specs/blob/dev/specs/altair/light-client/sync-protocol.md#initialize_light_client_store",children:s.jsx(e.code,{children:"initialize_light_client_store"})})," to obtain a local ",s.jsx(e.a,{href:"https://github.com/ethereum/consensus-specs/blob/dev/specs/altair/light-client/sync-protocol.md#lightclientstore",children:s.jsx(e.code,{children:"LightClientStore"})}),"."]}),`
`,s.jsxs(e.li,{children:["The light client tracks the sync committee periods ",s.jsx(e.code,{children:"finalized_period"})," from ",s.jsx(e.code,{children:"store.finalized_header.slot"}),", ",s.jsx(e.code,{children:"optimistic_period"})," from ",s.jsx(e.code,{children:"store.optimistic_header.slot"}),", and ",s.jsx(e.code,{children:"current_period"})," from ",s.jsx(e.code,{children:"current_slot"})," based on the local clock.",`
`,s.jsxs(e.ol,{children:[`
`,s.jsxs(e.li,{children:["When ",s.jsx(e.code,{children:"finalized_period == optimistic_period"})," and ",s.jsx(e.a,{href:"https://github.com/ethereum/consensus-specs/blob/dev/specs/altair/light-client/sync-protocol.md#is_next_sync_committee_known",children:s.jsx(e.code,{children:"is_next_sync_committee_known"})})," indicates ",s.jsx(e.code,{children:"False"}),", the light client fetches a ",s.jsx(e.a,{href:"https://github.com/ethereum/consensus-specs/blob/dev/specs/altair/light-client/sync-protocol.md#lightclientupdate",children:s.jsx(e.code,{children:"LightClientUpdate"})})," for ",s.jsx(e.code,{children:"finalized_period"}),". If ",s.jsx(e.code,{children:"finalized_period == current_period"}),", this fetch SHOULD be scheduled at a random time before ",s.jsx(e.code,{children:"current_period"})," advances."]}),`
`,s.jsxs(e.li,{children:["When ",s.jsx(e.code,{children:"finalized_period + 1 < current_period"}),", the light client fetches a ",s.jsx(e.code,{children:"LightClientUpdate"})," for each sync committee period in range ",s.jsx(e.code,{children:"[finalized_period + 1, current_period)"})," (current period excluded)"]}),`
`,s.jsxs(e.li,{children:["When ",s.jsx(e.code,{children:"finalized_period + 1 >= current_period"}),", the light client keeps observing ",s.jsx(e.a,{href:"https://github.com/ethereum/consensus-specs/blob/dev/specs/altair/light-client/sync-protocol.md#lightclientfinalityupdate",children:s.jsx(e.code,{children:"LightClientFinalityUpdate"})})," and ",s.jsx(e.a,{href:"https://github.com/ethereum/consensus-specs/blob/dev/specs/altair/light-client/sync-protocol.md#lightclientoptimisticupdate",children:s.jsx(e.code,{children:"LightClientOptimisticUpdate"})}),". Received objects are passed to ",s.jsx(e.a,{href:"https://github.com/ethereum/consensus-specs/blob/dev/specs/altair/light-client/sync-protocol.md#process_light_client_finality_update",children:s.jsx(e.code,{children:"process_light_client_finality_update"})})," and ",s.jsx(e.a,{href:"https://github.com/ethereum/consensus-specs/blob/dev/specs/altair/light-client/sync-protocol.md#process_light_client_optimistic_update",children:s.jsx(e.code,{children:"process_light_client_optimistic_update"})}),". This ensures that ",s.jsx(e.code,{children:"finalized_header"})," and ",s.jsx(e.code,{children:"optimistic_header"})," reflect the latest blocks."]}),`
`]}),`
`]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.a,{href:"https://github.com/ethereum/consensus-specs/blob/dev/specs/altair/light-client/sync-protocol.md#process_light_client_store_force_update",children:s.jsx(e.code,{children:"process_light_client_store_force_update"})})," MAY be called based on use case dependent heuristics if light client sync appears stuck. If available, falling back to an alternative syncing mechanism to cover the affected sync committee period is preferred."]}),`
`]}),`
`,s.jsxs(e.h4,{id:"the-portal-network",children:["The Portal Network",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#the-portal-network",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.a,{href:"https://github.com/ethereum/portal-network-specs",children:"The Portal Network"}),": The Portal Network is an in progess effort to enable lightweight protocol access by resource constrained devices. The term ",s.jsx(e.em,{children:'"portal"'})," is used to indicate that these networks provide a ",s.jsx(e.em,{children:"view"})," into the protocol but are not critical to the operation of the core Ethereum protocol."]}),`
`]}),`
`,s.jsxs(e.p,{children:["The Portal Network is comprised of multiple peer-to-peer networks which together provide the data and functionality necessary to expose the standard ",s.jsx(e.a,{href:"https://eth.wiki/json-rpc/API",children:"JSON-RPC API"}),". These networks are specially designed to ensure that clients participating in these networks can do so with minimal expenditure of networking bandwidth, CPU, RAM, and HDD resources."]}),`
`,s.jsx(e.p,{children:"The term 'Portal Client' describes a piece of software which participates in these networks. Portal Clients typically expose the standard JSON-RPC API."}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[`
`,s.jsx(e.p,{children:"Motivation: The Portal Network is focused on delivering reliable, lightweight, and decentralized access to the Ethereum protocol."}),`
`]}),`
`,s.jsxs(e.li,{children:[`
`,s.jsxs(e.p,{children:['Prior Work on the "Light Ethereum Subprotocol" (LES): The term "light client" has historically refered to a client of the existing ',s.jsx(e.a,{href:"https://github.com/ethereum/devp2p/blob/master/rlpx.mdx",children:"DevP2P"})," based ",s.jsx(e.a,{href:"https://github.com/ethereum/devp2p/blob/master/caps/les.mdx",children:"LES"}),' network. This network is designed using a client/server architecture. The LES network has a total capacity dictated by the number of "servers" on the network. In order for this network to scale, the "server" capacity has to increase. This also means that at any point in time the network has some total capacity which if exceeded will cause service degradation across the network. Because of this the LES network is unreliable when operating near capacity.']}),`
`]}),`
`,s.jsxs(e.li,{children:[`
`,s.jsx(e.p,{children:"Block Relay"}),`
`]}),`
`,s.jsxs(e.li,{children:[`
`,s.jsxs(e.p,{children:[s.jsx(e.a,{href:"https://github.com/ethereum/portal-network-specs/blob/master/beacon-chain/beacon-state-network.md#dht-overview",children:"Beacon State"}),": A client has a trusted beacon state root, and it wants to access some parts of the state. Each of the access request corresponds to some leave nodes of the beacon state. The request is a content lookup on a DHT. The response is a Merkle proof."]}),`
`,s.jsx(e.p,{children:"A Distributed Hash Table (DHT) allows network participants to have retrieve data on-demand based on a content"}),`
`]}),`
`,s.jsxs(e.li,{children:[`
`,s.jsxs(e.p,{children:[s.jsx(e.a,{href:"https://github.com/ethereum/portal-network-specs/blob/master/beacon-chain/sync-gossip.mdx",children:"Syncing Block Headers"}),": A beacon chain client could sync committee to perform state updates. The data object LightClientSkipSyncUpdate allows a client to quickly sync to a recent header with the appropriate sync committee. Once the client establishes a recent header, it could sync to other headers by processing LightClientUpdates. These two data types allow a client to stay up-to-date with the beacon chain."]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[`
`,s.jsxs(e.p,{children:[s.jsx(e.a,{href:"https://github.com/ethereum/portal-network-specs/blob/master/beacon-chain/skip-sync-network.mdx",children:"Sync State"}),": A client uses SkipSyncUpdate to skip sync from a known header to a recent header. A client with a trusted but outdated header cannot use the messages in the gossip channel bc-light-client-update to update. The client's sync-committee in the stored snapshot is too old and not connected to any update messages. The client look for the appropriate SkipSyncUpdate to skip sync its header."]}),`
`]}),`
`,s.jsxs(e.li,{children:[`
`,s.jsxs(e.p,{children:[s.jsx(e.a,{href:"https://github.com/ethereum/portal-network-specs/blob/master/beacon-chain/sync-gossip.mdx",children:"Advance Block Headers"}),": A beacon chain client could sync committee to perform ",s.jsx(e.a,{href:"https://github.com/ethereum/consensus-specs/blob/dev/specs/altair/sync-protocol.mdx",children:"state updates"}),". The data object ",s.jsx(e.a,{href:"skip-sync-network",children:"LightClientSkipSyncUpdate"})," allows a client to quickly sync to a recent header with the appropriate sync committee. Once the client establishes a recent header, it could sync to other headers by processing ",s.jsx(e.a,{href:"https://github.com/ethereum/consensus-specs/blob/dev/specs/altair/sync-protocol.md#lightclientupdate",children:"LightClientUpdates"}),". These two data types allow a client to stay up-to-date with the beacon chain."]}),`
`,s.jsxs(e.p,{children:["These two data types are placed into separate sub-networks. A light client make find-content requests on ",s.jsx(e.code,{children:"skip-sync-network"})," at start of the sync to get a header with the same ",s.jsx(e.code,{children:"SyncCommittee"})," object as in the current sync period. The client uses messages in the gossip topic ",s.jsx(e.code,{children:"bc-light-client-update"})," to advance its header."]}),`
`,s.jsxs(e.p,{children:["The gossip topics described in this document is part of a ",s.jsx(e.a,{href:"https://ethresear.ch/t/a-beacon-chain-light-client-proposal/11064",children:"proposal"})," for a beacon chain light client."]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,s.jsxs(e.h4,{id:"transaction-proofs",children:["Transaction Proofs",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#transaction-proofs",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.a,{href:"https://github.com/ethereum/portal-network-specs/blob/master/beacon-chain/beacon-state-network.mdx",children:"Retrieving Beacon State"}),": A client has a trusted beacon state root, and it wants to access some parts of the state. Each of the access request corresponds to some leave nodes of the beacon state. The request is a content lookup on a DHT. The response is a Merkle proof."]}),`
`]}),`
`,s.jsx(e.p,{children:"A Distributed Hash Table (DHT) allows network participants to have retrieve data on-demand based on a content key. A portal-network DHT is different than a traditional one in that each participant could selectively limit its workload by choosing a small interest radius r. A participants only process messages that are within its chosen radius boundary."}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[`
`,s.jsxs(e.p,{children:[s.jsx(e.a,{href:"https://github.com/ethereum/portal-network-specs/blob/master/beacon-chain/beacon-state-network.md#wire-protocol",children:"Wire Protocol"}),": For a subprotocol, we need to further define the following to be able to instantiate the wire format of each message type. 1. ",s.jsx(e.code,{children:"content_key"})," 2. ",s.jsx(e.code,{children:"content_id"})," 3. ",s.jsx(e.code,{children:"payload"})]}),`
`,s.jsxs(e.p,{children:["The content of the message is a Merkle proof contains multiple leave nodes for a ",s.jsx(e.a,{href:"https://github.com/ethereum/consensus-specs/blob/dev/specs/altair/beacon-chain.md#beaconstate",children:"BeaconState"}),"."]}),`
`,s.jsxs(e.p,{children:["Finally, we define the necessary encodings. A light client only knows the root of the beacon state. The client wants to know the details of some leave nodes. The client has to be able to construct the ",s.jsx(e.code,{children:"content_key"})," only knowing the root and which leave nodes it wants see. The ",s.jsx(e.code,{children:"content_key"})," is the ssz serialization of the paths. The paths represent the part of the beacon state that one wants to know about. The paths are represented by generalized indices. Note that ",s.jsx(e.code,{children:"hash_tree_root"})," and ",s.jsx(e.code,{children:"serialize"})," are the same as those defined in ",s.jsx(e.a,{href:"https://github.com/ethereum/portal-network-specs/blob/master/beacon-chain/sync-gossip.mdx",children:"sync-gossip"}),"."]}),`
`]}),`
`,s.jsxs(e.li,{children:[`
`,s.jsx(e.p,{children:"TODO: Review of Retrieving a transaction proof not just retrieving data on-demand"}),`
`]}),`
`]}),`
`,s.jsxs(e.h4,{id:"further-information",children:["Further Information",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#further-information",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:"Ethereum 2.0 Specifications"}),`
`,s.jsx(e.li,{children:s.jsx(e.a,{href:"https://github.com/ethereum/consensus-specs/blob/master/specs/phase0/beacon-chain.mdx",children:"Beacon Chain Specification"})}),`
`,s.jsx(e.li,{children:s.jsx(e.a,{href:"https://notes.ethereum.org/@vbuterin/extended_light_client_protocol",children:"Extended light client protocol"})}),`
`,s.jsx(e.li,{children:s.jsx(e.a,{href:"https://github.com/ethereum/consensus-specs/blob/dev/specs/altair/light-client/light-client.mdx",children:"Altair Light Client -- Light Client"})}),`
`,s.jsx(e.li,{children:s.jsx(e.a,{href:"https://github.com/ethereum/consensus-specs/blob/dev/specs/altair/light-client/sync-protocol.mdx",children:"Altair Light Client -- Sync Protocol"})}),`
`,s.jsx(e.li,{children:s.jsx(e.a,{href:"https://github.com/ethereum/consensus-specs/blob/dev/specs/phase0/fork-choice.mdx",children:"Beacon Chain Fork Choice"})}),`
`,s.jsxs(e.li,{children:[s.jsx(e.a,{href:"https://github.com/ethereum/portal-network-specs",children:"The Portal Network Specification"}),": an in progess effort to enable lightweight protocol access by resource constrained devices."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.a,{href:"https://github.com/ethereum/devp2p/blob/master/caps/les.mdx",children:"Light Ethereum Subprotocol (LES)"}),': the protocol used by "light" clients, which only download block headers as they appear and fetch other parts of the blockchain on-demand.']}),`
`,s.jsx(e.li,{children:s.jsx(e.a,{href:"https://blockdaemon.com/blog/ethereum-altair-hard-folk-light-clients-sync-committees/",children:"BlockDaemon: Ethereum Altair Hard Folk: Light Clients & Sync Committees"})}),`
`,s.jsxs(e.li,{children:[s.jsx(e.a,{href:"https://docs.google.com/presentation/d/1oc_zdywOsHxz3zez1ILAgrerS7RkaF1hHoW0FLtp0Gw/edit#slide=id.p",children:"Efficient algorithms for CBC Casper"}),": Review of LMD GHOST (Latest Message Driven, Greediest Heaviest Observed Sub-Tree)"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.a,{href:"https://ethereum.org/en/developers/docs/data-structures-and-encoding/ssz/",children:"SSZ: Simple Serialize"}),": Overview of Simple serialize (SSZ) is the serialization method used on the Beacon Chain. (including merkalization and multiproofs)"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.a,{href:"https://noiseprotocol.org/noise.html",children:"The Noise Protocol Framework"}),": Noise is a framework for crypto protocols based on Diffie-Hellman key agreement."]}),`
`,s.jsx(e.li,{children:s.jsx(e.a,{href:"https://hackmd.io/QoLwVQf3QK6EiVt15YOYqQ?view",children:"Flashbots for Ethereum Consensus Clients"})}),`
`,s.jsxs(e.li,{children:[s.jsx(e.a,{href:"https://github.com/ethereum/consensus-specs/blob/dev/sync/optimistic.mdx",children:"Optimistic Sync Specification"}),": Optimistic Sync is a stop-gap measure to allow execution nodes to sync via established methods until future Ethereum roadmap items are implemented (e.g., statelessness)."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.a,{href:"https://hackmd.io/hsCz1G3BTyiwwJtjT4pe2Q?view",children:"Consensus Light Client Server Implementation Notes"}),": How Lodestar beacon node was tweaked to serve light clients"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.a,{href:"https://notes.ethereum.org/@ralexstokes/HJxDMi8vY",children:"beacon chain light client design doc"}),": notes about the design/implementation of a beacon chain light client using standard APIs and protocol features"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.a,{href:"https://ethresear.ch/t/a-beacon-chain-light-client-proposal/11064",children:"A Beacon Chain Light Client Proposal"}),": proposing a light client implementation that goes a step further than the minimum light client described in the altair consensus-spec. The proposed client aims to allow queries into the beacon state."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.a,{href:"https://github.com/ethereum/portal-network-specs/blob/master/beacon-chain/beacon-state-network.md#dht-overview",children:"Distributed Hash Table (DHT) Overview"}),": allows network participants to have retrieve data on-demand based on a content key."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.a,{href:"https://github.com/ethereum/consensus-specs/pull/2786",children:"(WIP) Light client p2p interface Specification"}),`: a PR to get the conversation going about a p2p approach.
Here we cover two approaches which may be combined`]}),`
`]}),`
`,s.jsxs(e.h3,{id:"appendix-c-proving-and-verification-mechanisms",children:["Appendix C: Proving and Verification Mechanisms",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#appendix-c-proving-and-verification-mechanisms",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.h4,{id:"eth-proof-of-consensus-proof-of-consensus-for-ethereum-by-succinctlabs",children:[s.jsx(e.a,{href:"https://github.com/succinctlabs/eth-proof-of-consensus",children:"eth-proof-of-consensus"}),": Proof of Consensus for Ethereum by succinctlabs",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#eth-proof-of-consensus-proof-of-consensus-for-ethereum-by-succinctlabs",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(e.p,{children:"Circuits"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.a,{href:"https://github.com/succinctlabs/eth-proof-of-consensus/blob/main/circuits/circuits/aggregate_bls_verify.circom",children:"aggregate_bls_verify.circom"}),": Computes an aggregate BLS12-381 public key over a set of public keys and a bitmask"]}),`
`,s.jsx(e.li,{children:s.jsx(e.a,{href:"https://github.com/succinctlabs/eth-proof-of-consensus/blob/main/circuits/circuits/assert_valid_signed_header.circom",children:"assert_valid_signed_header.circom"})}),`
`,s.jsxs(e.li,{children:[s.jsx(e.a,{href:"https://github.com/succinctlabs/eth-proof-of-consensus/blob/main/circuits/circuits/pubkey_poseidon.circom",children:"pubkey_poseidon.circom"}),": Computes the Poseidon merkle root of a list of field elements"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.a,{href:"https://github.com/succinctlabs/eth-proof-of-consensus/blob/main/circuits/circuits/sha256_bytes.circom",children:"sha256_bytes.circom"}),": Wrapper around SHA256 to support bytes as input instead of bits"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.a,{href:"https://github.com/succinctlabs/eth-proof-of-consensus/blob/main/circuits/circuits/simple_serialize.circom",children:"simple_serialize.circom"}),": Helper function to implement SSZArray"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.a,{href:"https://github.com/succinctlabs/eth-proof-of-consensus/blob/main/circuits/circuits/sync_committee_committments.circom",children:"sync_committee_committments.circom"}),": Asserts that the byte representation of a BLS12-381 public key's x-coordinate matches the BigInt representation"]}),`
`]}),`
`,s.jsx(e.p,{children:"Verification"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.a,{href:"https://github.com/succinctlabs/eth-proof-of-consensus/tree/main/contracts/src/amb",children:"AMB"}),": Arbitrary Message Passing"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.a,{href:"https://github.com/succinctlabs/eth-proof-of-consensus/blob/main/contracts/src/amb/TrustlessAMB.sol",children:"TrustlessAMB.sol"}),": sends and executes messages"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.a,{href:"https://github.com/succinctlabs/eth-proof-of-consensus/blob/main/contracts/src/amb/TrustlessAMBStorage.sol",children:"TrustlessAMBStorage.sol"}),": Storage for messages between two chains"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.a,{href:"https://github.com/succinctlabs/eth-proof-of-consensus/tree/main/contracts/src/bridge",children:"bridge"}),": Allows for the deposit and withdrawal of ERC20 tokens"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.a,{href:"https://github.com/succinctlabs/eth-proof-of-consensus/blob/main/contracts/src/bridge/Bridge.sol",children:"Bridge.sol"}),": Deposit and withdraw functionality"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.a,{href:"https://github.com/succinctlabs/eth-proof-of-consensus/blob/main/contracts/src/bridge/Tokens.sol",children:"Token.sol"}),": ERC20 bridge token definitions"]}),`
`,s.jsx(e.li,{children:s.jsx(e.a,{href:"https://github.com/succinctlabs/eth-proof-of-consensus/tree/main/contracts/src/lightclient",children:"lightclient"})}),`
`,s.jsxs(e.li,{children:[s.jsx(e.a,{href:"https://github.com/succinctlabs/eth-proof-of-consensus/blob/main/contracts/src/lightclient/BLSAggregatedSignatureVerifier.sol",children:"BLSAggregatedSignatureVerifier.sol"}),": Verifies BLS aggregated signature proofs"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.a,{href:"https://github.com/succinctlabs/eth-proof-of-consensus/blob/main/contracts/src/lightclient/BeaconLightClient.sol",children:"BeaconLightClient.sol"}),": Beacon Light Client Functionality including",`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.a,{href:"https://github.com/succinctlabs/eth-proof-of-consensus/blob/main/contracts/src/lightclient/BeaconLightClient.sol#L86",children:"step(LightClientUpdate memory update)"}),": Updates the head given a finalized light client update."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.a,{href:"https://github.com/succinctlabs/eth-proof-of-consensus/blob/main/contracts/src/lightclient/BeaconLightClient.sol#L102",children:"function updateSyncCommittee(LightClientUpdate memory update, bytes32 nextSyncCommitteePoseidon, Groth16Proof memory commitmentMappingProof)"}),": Set the sync committee validator set root for the next sync commitee period."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.a,{href:"https://github.com/succinctlabs/eth-proof-of-consensus/blob/main/contracts/src/lightclient/BeaconLightClient.sol#L131",children:"function forceUpdate()"}),": Finalizes the optimistic update and sets the next sync committee if no finalized updates have been received for a period."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.a,{href:"https://github.com/succinctlabs/eth-proof-of-consensus/blob/main/contracts/src/lightclient/BeaconLightClient.sol#L131",children:"function processLightClientUpdate(LightClientUpdate memory update)"}),": Implements shared logic for processing light client updates."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.a,{href:"https://github.com/succinctlabs/eth-proof-of-consensus/blob/main/contracts/src/lightclient/BeaconLightClient.sol#L190",children:"function zkMapSSZToPoseidon(bytes32 sszCommitment, bytes32 poseidonCommitment, Groth16Proof memory proof)"}),": Maps a simple serialize merkle root to a poseidon merkle root with a zkSNARK. The proof asserts that: SimpleSerialize(syncCommittee) == Poseidon(syncCommittee)."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.a,{href:"https://github.com/succinctlabs/eth-proof-of-consensus/blob/main/contracts/src/lightclient/BeaconLightClient.sol#L208",children:"function zkBLSVerify(bytes32 signingRoot, bytes32 syncCommitteeRoot, uint256 claimedParticipation, Groth16Proof memory proof)"}),": Does an aggregated BLS signature verification with a zkSNARK."]}),`
`]}),`
`]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.a,{href:"https://github.com/succinctlabs/eth-proof-of-consensus/tree/main/contracts/src/scripts",children:"scripts"}),": A collection of ",s.jsx(e.a,{href:"https://book.getfoundry.sh/reference/forge/forge-script",children:"forge-scripts"})," for contract deployment."]}),`
`]}),`
`,s.jsxs(e.h3,{id:"appendix-d-topics",children:["Appendix D: Topics",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#appendix-d-topics",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.p,{children:["Beacon Chain Topics ",s.jsx(e.a,{href:"https://github.com/prysmaticlabs/prysm/blob/develop/beacon-chain/p2p/topics.go",children:"Prysm"})]}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"package p2p"})}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"const ("})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"// GossipProtocolAndDigest represents the protocol and fork digest prefix in a gossip topic."})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'GossipProtocolAndDigest = "/eth2/%x/"'})}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"// Message Types"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"//"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"// GossipAttestationMessage is the name for the attestation message type. It is"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"// specially extracted so as to determine the correct message type from an attestation"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"// subnet."})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'GossipAttestationMessage = "beacon_attestation"'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"// GossipSyncCommitteeMessage is the name for the sync committee message type. It is"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"// specially extracted so as to determine the correct message type from a sync committee"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"// subnet."})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'GossipSyncCommitteeMessage = "sync_committee"'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"// GossipBlockMessage is the name for the block message type."})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'GossipBlockMessage = "beacon_block"'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"// GossipExitMessage is the name for the voluntary exit message type."})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'GossipExitMessage = "voluntary_exit"'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"// GossipProposerSlashingMessage is the name for the proposer slashing message type."})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'GossipProposerSlashingMessage = "proposer_slashing"'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"// GossipAttesterSlashingMessage is the name for the attester slashing message type."})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'GossipAttesterSlashingMessage = "attester_slashing"'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"// GossipAggregateAndProofMessage is the name for the attestation aggregate and proof message type."})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'GossipAggregateAndProofMessage = "beacon_aggregate_and_proof"'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"// GossipContributionAndProofMessage is the name for the sync contribution and proof message type."})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'GossipContributionAndProofMessage = "sync_committee_contribution_and_proof"'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"// GossipBlsToExecutionChangeMessage is the name for the bls to execution change message type."})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'GossipBlsToExecutionChangeMessage = "bls_to_execution_change"'})}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"// Topic Formats"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"//"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"// AttestationSubnetTopicFormat is the topic format for the attestation subnet."})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'AttestationSubnetTopicFormat = GossipProtocolAndDigest + GossipAttestationMessage + "_%d"'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"// SyncCommitteeSubnetTopicFormat is the topic format for the sync committee subnet."})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'SyncCommitteeSubnetTopicFormat = GossipProtocolAndDigest + GossipSyncCommitteeMessage + "_%d"'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"// BlockSubnetTopicFormat is the topic format for the block subnet."})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"BlockSubnetTopicFormat = GossipProtocolAndDigest + GossipBlockMessage"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"// ExitSubnetTopicFormat is the topic format for the voluntary exit subnet."})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"ExitSubnetTopicFormat = GossipProtocolAndDigest + GossipExitMessage"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"// ProposerSlashingSubnetTopicFormat is the topic format for the proposer slashing subnet."})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"ProposerSlashingSubnetTopicFormat = GossipProtocolAndDigest + GossipProposerSlashingMessage"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"// AttesterSlashingSubnetTopicFormat is the topic format for the attester slashing subnet."})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"AttesterSlashingSubnetTopicFormat = GossipProtocolAndDigest + GossipAttesterSlashingMessage"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"// AggregateAndProofSubnetTopicFormat is the topic format for the aggregate and proof subnet."})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"AggregateAndProofSubnetTopicFormat = GossipProtocolAndDigest + GossipAggregateAndProofMessage"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"// SyncContributionAndProofSubnetTopicFormat is the topic format for the sync aggregate and proof subnet."})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"SyncContributionAndProofSubnetTopicFormat = GossipProtocolAndDigest + GossipContributionAndProofMessage"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"// BlsToExecutionChangeSubnetTopicFormat is the topic format for the bls to execution change subnet."})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"BlsToExecutionChangeSubnetTopicFormat = GossipProtocolAndDigest + GossipBlsToExecutionChangeMessage"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:")"})})]})})}),`
`,s.jsxs(e.h3,{id:"appendix-e-grpc-and-apis",children:["Appendix E: gRPC and API's",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#appendix-e-grpc-and-apis",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(e.p,{children:s.jsx(e.a,{href:"https://beaconcha.in/api/v1/docs/index.html",children:"Beaconcha.in ETH2 API"})}),`
`,s.jsxs(e.h3,{id:"appendix-f-data-structures",children:["Appendix F: Data Structures",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#appendix-f-data-structures",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:["Block Structure from ",s.jsx(e.a,{href:"https://github.com/ethereum/go-ethereum/blob/release/1.9/core/types/block.go#L72",children:"go-ethereum"})]}),`
`]}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"// SealHash returns the hash of a block prior to it being sealed."})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"func (ethash *Ethash) SealHash(header *types.Header) (hash common.Hash) {"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"hasher := sha3.NewLegacyKeccak256()"})}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"rlp.Encode(hasher, []interface{}{"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"header.ParentHash,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"header.UncleHash,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"header.Coinbase,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"header.Root,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"header.TxHash,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"header.ReceiptHash,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"header.Bloom,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"header.Difficulty,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"header.Number,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"header.GasLimit,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"header.GasUsed,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"header.Time,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"header.Extra,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"})"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"hasher.Sum(hash["}),s.jsx(e.span,{style:{color:"#032F62",textDecoration:"underline","--shiki-dark":"#96D0FF","--shiki-dark-text-decoration":"inherit"},children:":0"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"])"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"return hash"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})})}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:["Blocks Headers get forwarded to the Beacon chain once they pass ",s.jsx(e.a,{href:"https://github.com/ethereum/go-ethereum/blob/master/consensus/beacon/consensus.go",children:"beacon consensus"})]}),`
`,s.jsxs(e.li,{children:["The Beacon chain embeds the EthChain Header into a ",s.jsx(e.a,{href:"https://github.com/prysmaticlabs/prysm/blob/develop/consensus-types/blocks/types.go#L43",children:"BeaconBlock"})]}),`
`]}),`
`,s.jsxs(e.p,{children:["BeaconBlockBody from ",s.jsx(e.a,{href:"https://github.com/prysmaticlabs/prysm/blob/develop/consensus-types/blocks/types.go",children:"prysm"})," (golang)"]}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"// BeaconBlockBody is the main beacon block body structure. It can represent any block type."})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"type BeaconBlockBody struct {"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"version int"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"isBlinded bool"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"randaoReveal ["}),s.jsx(e.span,{style:{color:"#032F62",textDecoration:"underline","--shiki-dark":"#96D0FF","--shiki-dark-text-decoration":"inherit"},children:"field_params.BLSSignatureLength"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"]byte"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"eth1Data *eth.Eth1Data"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"graffiti ["}),s.jsx(e.span,{style:{color:"#032F62",textDecoration:"underline","--shiki-dark":"#96D0FF","--shiki-dark-text-decoration":"inherit"},children:"field_params.RootLength"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"]byte"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"proposerSlashings []*eth.ProposerSlashing"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"attesterSlashings []*eth.AttesterSlashing"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"attestations []*eth.Attestation"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"deposits []*eth.Deposit"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"voluntaryExits []*eth.SignedVoluntaryExit"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"syncAggregate *eth.SyncAggregate"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"executionPayload *engine.ExecutionPayload"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"executionPayloadHeader "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:"\\*"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"engine.ExecutionPayloadHeader"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"// BeaconBlock is the main beacon block structure. It can represent any block type."})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"type BeaconBlock struct {"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"version int"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"slot types.Slot"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"proposerIndex types.ValidatorIndex"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"parentRoot ["}),s.jsx(e.span,{style:{color:"#032F62",textDecoration:"underline","--shiki-dark":"#96D0FF","--shiki-dark-text-decoration":"inherit"},children:"field_params.RootLength"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"]byte"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"stateRoot ["}),s.jsx(e.span,{style:{color:"#032F62",textDecoration:"underline","--shiki-dark":"#96D0FF","--shiki-dark-text-decoration":"inherit"},children:"field_params.RootLength"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"]byte"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"body "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:"\\*"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"BeaconBlockBody"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"// SignedBeaconBlock is the main signed beacon block structure. It can represent any block type."})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"type SignedBeaconBlock struct {"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"version int"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"block "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:"\\*"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"BeaconBlock"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"signature ["}),s.jsx(e.span,{style:{color:"#032F62",textDecoration:"underline","--shiki-dark":"#96D0FF","--shiki-dark-text-decoration":"inherit"},children:"field_params.BLSSignatureLength"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"]byte"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})})}),`
`,s.jsxs(e.p,{children:["Eth1Data from ",s.jsx(e.a,{href:"https://github.com/prysmaticlabs/prysm/blob/develop/proto/prysm/v1alpha1/powchain.pb.go#L24",children:"prysm"})," (golang)"]}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"type ETH1ChainData struct {"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"state protoimpl.MessageState"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"sizeCache protoimpl.SizeCache"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"unknownFields protoimpl.UnknownFields"})}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"CurrentEth1Data *LatestETH1Data "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:'`protobuf:"bytes,1,opt,name=current_eth1_data,json=currentEth1Data,proto3" json:"current_eth1_data,omitempty"`'})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"ChainstartData *ChainStartData "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:'`protobuf:"bytes,2,opt,name=chainstart_data,json=chainstartData,proto3" json:"chainstart_data,omitempty"`'})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"BeaconState *BeaconState "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:'`protobuf:"bytes,3,opt,name=beacon_state,json=beaconState,proto3" json:"beacon_state,omitempty"`'})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"Trie *SparseMerkleTrie "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:'`protobuf:"bytes,4,opt,name=trie,proto3" json:"trie,omitempty"`'})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"DepositContainers []"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:"\\*"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"DepositContainer "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:'`protobuf:"bytes,5,rep,name=deposit_containers,json=depositContainers,proto3" json:"deposit_containers,omitempty"`'})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"type LatestETH1Data struct {"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"state protoimpl.MessageState"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"sizeCache protoimpl.SizeCache"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"unknownFields protoimpl.UnknownFields"})}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"BlockHeight uint64 "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:'`protobuf:"varint,2,opt,name=block_height,json=blockHeight,proto3" json:"block_height,omitempty"`'})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"BlockTime uint64 "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:'`protobuf:"varint,3,opt,name=block_time,json=blockTime,proto3" json:"block_time,omitempty"`'})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"BlockHash []byte "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:'`protobuf:"bytes,4,opt,name=block_hash,json=blockHash,proto3" json:"block_hash,omitempty"`'})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"LastRequestedBlock uint64 "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:'`protobuf:"varint,5,opt,name=last_requested_block,json=lastRequestedBlock,proto3" json:"last_requested_block,omitempty"`'})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})})}),`
`,s.jsxs(e.p,{children:["BeaconBlockAltair from ",s.jsx(e.a,{href:"https://github.com/sigp/lighthouse/blob/stable/consensus/types/src/beacon_block.rs#L407",children:"lighthouse"})," rust"]}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    /// Return an Altair block where the block has maximum size."})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    pub fn full(spec: &ChainSpec) -> Self {"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"        let base_block: BeaconBlockBase<_, Payload> = BeaconBlockBase::full(spec);"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"        let sync_aggregate = SyncAggregate {"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"            sync_committee_signature: AggregateSignature::empty(),"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"            sync_committee_bits: BitVector::default(),"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"        };"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"        BeaconBlockAltair {"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"            slot: spec.genesis_slot,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"            proposer_index: 0,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"            parent_root: Hash256::zero(),"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"            state_root: Hash256::zero(),"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"            body: BeaconBlockBodyAltair {"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"                proposer_slashings: base_block.body.proposer_slashings,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"                attester_slashings: base_block.body.attester_slashings,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"                attestations: base_block.body.attestations,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"                deposits: base_block.body.deposits,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"                voluntary_exits: base_block.body.voluntary_exits,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"                sync_aggregate,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"                randao_reveal: Signature::empty(),"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"                eth1_data: Eth1Data {"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"                    deposit_root: Hash256::zero(),"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"                    block_hash: Hash256::zero(),"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"                    deposit_count: 0,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"                },"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"                graffiti: Graffiti::default(),"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"                _phantom: PhantomData,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"            },"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"        }"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    }"})}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})})}),`
`,s.jsxs(e.h4,{id:"beacon-state-data-structures-from-prysm",children:["Beacon State Data Structures from Prysm",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#beacon-state-data-structures-from-prysm",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"type BeaconState interface {"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"SpecParametersProvider"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"ReadOnlyBeaconState"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"WriteOnlyBeaconState"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"Copy() BeaconState"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"HashTreeRoot(ctx context.Context) (["}),s.jsx(e.span,{style:{color:"#032F62",textDecoration:"underline","--shiki-dark":"#96D0FF","--shiki-dark-text-decoration":"inherit"},children:"32"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"]byte, error)"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"FutureForkStub"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"StateProver"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})})}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"type ReadOnlyBeaconState interface {"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"ReadOnlyBlockRoots"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"ReadOnlyStateRoots"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"ReadOnlyRandaoMixes"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"ReadOnlyEth1Data"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"ReadOnlyValidators"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"ReadOnlyBalances"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"ReadOnlyCheckpoint"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"ReadOnlyAttestations"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"ToProtoUnsafe() interface{}"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"ToProto() interface{}"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"GenesisTime() uint64"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"GenesisValidatorsRoot() []byte"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"Slot() types.Slot"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"Fork() *ethpb.Fork"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"LatestBlockHeader() *ethpb.BeaconBlockHeader"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"HistoricalRoots() [][]byte"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"Slashings() []uint64"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"FieldReferencesCount() map["}),s.jsx(e.span,{style:{color:"#032F62",textDecoration:"underline","--shiki-dark":"#96D0FF","--shiki-dark-text-decoration":"inherit"},children:"string"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"]uint64"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"MarshalSSZ() ([]byte, error)"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"IsNil() bool"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"Version() int"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"LatestExecutionPayloadHeader() (interfaces.ExecutionData, error)"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})})}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"type ReadOnlyValidators interface {"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"Validators() []*ethpb.Validator"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"ValidatorAtIndex(idx types.ValidatorIndex) (*ethpb.Validator, error)"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"ValidatorAtIndexReadOnly(idx types.ValidatorIndex) (ReadOnlyValidator, error)"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"ValidatorIndexByPubkey(key ["}),s.jsx(e.span,{style:{color:"#032F62",textDecoration:"underline","--shiki-dark":"#96D0FF","--shiki-dark-text-decoration":"inherit"},children:"fieldparams.BLSPubkeyLength"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"]byte) (types.ValidatorIndex, bool)"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"PubkeyAtIndex(idx types.ValidatorIndex) ["}),s.jsx(e.span,{style:{color:"#032F62",textDecoration:"underline","--shiki-dark":"#96D0FF","--shiki-dark-text-decoration":"inherit"},children:"fieldparams.BLSPubkeyLength"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"]byte"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"NumValidators() int"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"ReadFromEveryValidator(f func(idx int, val ReadOnlyValidator) error) error"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})})}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"type ReadOnlyRandaoMixes interface {"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"RandaoMixes() [][]byte"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"RandaoMixAtIndex(idx uint64) ([]byte, error)"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"RandaoMixesLength() int"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})})}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"type WriteOnlyBeaconState interface {"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"WriteOnlyBlockRoots"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"WriteOnlyStateRoots"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"WriteOnlyRandaoMixes"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"WriteOnlyEth1Data"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"WriteOnlyValidators"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"WriteOnlyBalances"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"WriteOnlyCheckpoint"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"WriteOnlyAttestations"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"SetGenesisTime(val uint64) error"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"SetGenesisValidatorsRoot(val []byte) error"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"SetSlot(val types.Slot) error"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"SetFork(val *ethpb.Fork) error"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"SetLatestBlockHeader(val *ethpb.BeaconBlockHeader) error"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"SetHistoricalRoots(val [][]byte) error"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"SetSlashings(val []uint64) error"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"UpdateSlashingsAtIndex(idx, val uint64) error"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"AppendHistoricalRoots(root ["}),s.jsx(e.span,{style:{color:"#032F62",textDecoration:"underline","--shiki-dark":"#96D0FF","--shiki-dark-text-decoration":"inherit"},children:"32"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"]byte) error"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"SetLatestExecutionPayloadHeader(payload interfaces.ExecutionData) error"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"SetWithdrawalQueue(val []*enginev1.Withdrawal) error"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"AppendWithdrawal(val *enginev1.Withdrawal) error"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"SetNextWithdrawalIndex(i uint64) error"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"SetNextPartialWithdrawalValidatorIndex(i types.ValidatorIndex) error"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})})}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"type WriteOnlyValidators interface {"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"SetValidators(val []*ethpb.Validator) error"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"ApplyToEveryValidator(f func(idx int, val *ethpb.Validator) (bool, *ethpb.Validator, error)) error"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"UpdateValidatorAtIndex(idx types.ValidatorIndex, val *ethpb.Validator) error"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"AppendValidator(val "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:"\\*"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"ethpb.Validator) error"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})})}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"type WriteOnlyRandaoMixes interface {"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"SetRandaoMixes(val [][]byte) error"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"UpdateRandaoMixesAtIndex(idx uint64, val []byte) error"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})})}),`
`,s.jsxs(e.p,{children:[s.jsx(e.a,{href:"https://pkg.go.dev/github.com/prysmaticlabs/prysm/v3@v3.1.2/proto/prysm/v1alpha1#Validator",children:"Validator"})," information"]}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"type Validator struct {"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"PublicKey []byte "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:'`protobuf:"bytes,1,opt,name=public_key,json=publicKey,proto3" json:"public_key,omitempty" spec-name:"pubkey" ssz-size:"48"`'})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"WithdrawalCredentials []byte ``/* 138-byte string literal not displayed */"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" EffectiveBalance           uint64                                                             "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:'`protobuf:"varint,3,opt,name=effective_balance,json=effectiveBalance,proto3" json:"effective_balance,omitempty"`'})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" Slashed                    bool                                                               "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:'`protobuf:"varint,4,opt,name=slashed,proto3" json:"slashed,omitempty"`'})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ActivationEligibilityEpoch github_com_prysmaticlabs_prysm_v3_consensus_types_primitives.Epoch`` /_ 221-byte string literal not displayed _/"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"ActivationEpoch github"}),s.jsx(e.span,{style:{color:"#24292E",fontStyle:"italic","--shiki-dark":"#ADBAC7","--shiki-dark-font-style":"italic"},children:"*com_prysmaticlabs_prysm_v3_consensus_types_primitives.Epoch `/*"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" 186-byte string literal not displayed _/"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"ExitEpoch github_com_prysmaticlabs_prysm_v3_consensus_types_primitives.Epoch` /_ 168-byte string literal not displayed _/"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"WithdrawableEpoch github_com_prysmaticlabs_prysm_v3_consensus_types_primitives.Epoch `` /_ 192-byte string literal not displayed "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:"\\_"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"/"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"// contains filtered or unexported fields"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})})}),`
`,s.jsxs(e.h4,{id:"web3signer_types-from-prysm",children:[s.jsx(e.a,{href:"https://github.com/prysmaticlabs/prysm/blob/develop/validator/keymanager/remote-web3signer/v1/web3signer_types.go#L107",children:"web3signer_types from prysm"}),s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#web3signer_types-from-prysm",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"////////////////////////////////////////////////////////////////////////////////"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"// sub properties of Sign Requests /////////////////////////////////////////////"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"////////////////////////////////////////////////////////////////////////////////"})}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"// ForkInfo a sub property object of the Sign request"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"type ForkInfo struct {"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"Fork "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:"\\*"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"Fork "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:'`json:"fork"`'})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"GenesisValidatorsRoot hexutil.Bytes "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:'`json:"genesis_validators_root"`'})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"// Fork a sub property of ForkInfo."})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"type Fork struct {"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"PreviousVersion hexutil.Bytes "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:'`json:"previous_version"`'})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"CurrentVersion hexutil.Bytes "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:'`json:"current_version"`'})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"Epoch string "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:'`json:"epoch"`'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" /"}),s.jsx(e.span,{style:{color:"#24292E",fontStyle:"italic","--shiki-dark":"#ADBAC7","--shiki-dark-font-style":"italic"},children:"_uint64_"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"/"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"// AggregationSlot a sub property of AggregationSlotSignRequest."})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"type AggregationSlot struct {"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"Slot string "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:'`json:"slot"`'})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"// AggregateAndProof a sub property of AggregateAndProofSignRequest."})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"type AggregateAndProof struct {"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"AggregatorIndex string "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:'`json:"aggregator_index"`'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" /_ uint64 _/"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"Aggregate _Attestation "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:'`json:"aggregate"`'})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"SelectionProof hexutil.Bytes "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:'`json:"selection_proof"`'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" /_ 96 bytes _/"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"// Attestation a sub property of AggregateAndProofSignRequest."})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"type Attestation struct {"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"AggregationBits hexutil.Bytes "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:'`json:"aggregation_bits"`'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" /"}),s.jsx(e.span,{style:{color:"#24292E",fontStyle:"italic","--shiki-dark":"#ADBAC7","--shiki-dark-font-style":"italic"},children:"_hex bitlist_"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"/"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"Data "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:"\\*"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"AttestationData "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:'`json:"data"`'})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"Signature hexutil.Bytes "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:'`json:"signature"`'})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"// AttestationData a sub property of Attestation."})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"type AttestationData struct {"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"Slot string "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:'`json:"slot"`'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" /_ uint64 _/"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"Index string "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:'`json:"index"`'}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" /_ uint64 _/ // Prysm uses CommitteeIndex but web3signer uses index."})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"BeaconBlockRoot hexutil.Bytes "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:'`json:"beacon_block_root"`'})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"Source *Checkpoint "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:'`json:"source"`'})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"Target *Checkpoint "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:'`json:"target"`'})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"// Checkpoint a sub property of AttestationData."})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"type Checkpoint struct {"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"Epoch string "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:'`json:"epoch"`'})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"Root string "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:'`json:"root"`'})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})})}),`
`,s.jsx(e.p,{children:s.jsx(e.a,{href:"https://github.com/prysmaticlabs/prysm/blob/develop/proto/prysm/v1alpha1/attestation.proto",children:"attestation.proto from prysm (Message Structure)"})}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"message AttestationData {"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"// Attestation data includes information on Casper the Friendly Finality Gadget's votes"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"// See: https://arxiv.org/pdf/1710.09437.pdf"})}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    // Slot of the attestation attesting for."})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'    uint64 slot = 1 [(ethereum.eth.ext.cast_type) = "github.com/prysmaticlabs/prysm/v3/consensus-types/primitives.Slot"];'})}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    // The committee index that submitted this attestation."})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'    uint64 committee_index = 2  [(ethereum.eth.ext.cast_type) = "github.com/prysmaticlabs/prysm/v3/consensus-types/primitives.CommitteeIndex"];'})}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    // 32 byte root of the LMD GHOST block vote."})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'    bytes beacon_block_root = 3 [(ethereum.eth.ext.ssz_size) = "32"];'})}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    // The most recent justified checkpoint in the beacon state"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    Checkpoint source = 4;"})}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    // The checkpoint attempting to be justified for the current epoch and its epoch boundary block"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    Checkpoint target = 5;"})}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})})}),`
`,s.jsxs(e.h3,{id:"appendix-g-sample-data",children:["Appendix G: Sample Data",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#appendix-g-sample-data",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.h4,{id:"epoch-data-for-167040",children:["Epoch Data for 167040",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#epoch-data-for-167040",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.p,{children:[`Following is the Epoch Data for 167040
It can be retrieved from `,s.jsx(e.a,{href:"https://beaconcha.in/api/v1/docs/index.html#/Epoch/get_api_v1_epoch__epoch_",children:"here"})," or by using this curl command"]}),`
`,s.jsx(e.p,{children:s.jsx(e.code,{children:"curl -X 'GET' \\   'https://beaconcha.in/api/v1/epoch/167040' \\   -H 'accept: application/json'"})}),`
`,s.jsx(e.p,{children:"Response"}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"{"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"status": "OK",'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"data": {'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"attestationscount": 3457,'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"attesterslashingscount": 0,'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"averagevalidatorbalance": 33899775551,'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"blockscount": 32,'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"depositscount": 0,'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"eligibleether": 15596542000000000,'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"epoch": 167040,'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"finalized": true,'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"globalparticipationrate": 0.9963188171386719,'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"missedblocks": 0,'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"orphanedblocks": 0,'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"proposedblocks": 32,'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"proposerslashingscount": 0,'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"scheduledblocks": 0,'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"totalvalidatorbalance": 16522615004645864,'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"validatorscount": 487396,'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"voluntaryexitscount": 0,'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"votedether": 15539128000000000'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})})}),`
`,s.jsxs(e.h4,{id:"block-data-for-slot-5330592",children:["Block Data for Slot 5,330,592",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#block-data-for-slot-5330592",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.p,{children:[`Following is the Block Data for Slot 5,330,592
It can be retrieved from `,s.jsx(e.a,{href:"https://beaconcha.in/api/v1/docs/index.html#/Block/get_api_v1_block__slotOrHash_",children:"here"})," or by using this curl command"]}),`
`,s.jsx(e.p,{children:s.jsx(e.code,{children:"curl -X 'GET' 'https://beaconcha.in/api/v1/block/5330592' -H 'accept: application/json'"})}),`
`,s.jsx(e.p,{children:"Response"}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"{"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"status": "OK",'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"data": {'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"attestationscount": 126,'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"attesterslashingscount": 0,'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"blockroot": "0xaebe891086c79ab79b325f474dc1150f1223e567337bff815cc318f14c64c233",'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"depositscount": 0,'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"epoch": 166581,'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"eth1data_blockhash": "0xd346f84ffe7c600b7714d6411c8bea988d9d64dbdb432f26db58e72946337954",'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"eth1data_depositcount": 498785,'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"eth1data_depositroot": "0x9a5603a34aa60f299384679bf4bfc267e99b68278a81f343bde8cb5650bf1d60",'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"exec_base_fee_per_gas": 12376913565,'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"exec_block_hash": "0x26239efe09f51b24bdf7c518b1aa925a3b0b6453682408ec8a5c906d5038a6e7",'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"exec_block_number": 16163905,'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"exec_extra_data": "0x496c6c756d696e61746520446d6f63726174697a6520447374726962757465",'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"exec_fee_recipient": "0xdafea492d9c6733ae3d56b7ed1adb60692c98bc5",'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"exec_gas_limit": 30000000,'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"exec_gas_used": 9901267,'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"exec_logs_bloom": "0x8c21554815843b4084a999b2901917a52c58004a82a8440d94919a77f9241181388a0c404f000a8c0321ab024800bf899610e60ec801fb4b0352e34f147626192648619065381ded6b9d92bcd0861120adc1ec01064e7a016ea91c478d01b81316462d2d622a60010bc0139f6fb8ccf200499c0e211a85c042047d1601aa0c2ea2833902a2a3091528492dad09f6dc064529c455d328413b78c680c4699815ac9a91610f19e66542edca45a10518ee65b02cf02241a124232d5958b6004cd0a5846c5703d00b5e4d8353221015f7d38c1429074e34aaa11f3804f933082860c401152088251479918297a1a9237d9ac35539f6d069cca07a005819494a653913",'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"exec_parent_hash": "0x06746d5ff105e96a1b8961c2490c0261b474604fbcbf934e86295c0030e26ce2",'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"exec_random": "0xc2861c72cf4d34b37ec73519dbc20b690742b5cc119ed3738f1dd67d8ca52723",'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"exec_receipts_root": "0x33cdf5c6e03dd341f282d02d3c354c2361a6212692b2a3c06b520397045313f4",'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"exec_state_root": "0x517304bade8d83337c9a52f8ceeb13f924b64486b3b8033f7c348c176922104a",'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"exec_timestamp": 1670791127,'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"exec_transactions_count": 139,'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"graffiti": "0x0000000000000000000000000000000000000000000000000000000000000000",'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"graffiti_text": "",'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"parentroot": "0x0cab36616bbcbbc67c343ddce00241c27d0df2c367c5fa82fc7c0fdf0ed37405",'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"proposer": 4345,'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"proposerslashingscount": 0,'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"randaoreveal": "0x83950cb64781aff91f4bd14aa6abb0f5fdb7e08e4e81c264f0754c93d7672c4a9615de196491fdb53eafdeb8f49e9cf515f1bd3dc05bb5dc0e2dd8bff5a8d783b503e3385e80b61485f0ddac1caa9361132a863db84e7e234df5815e6908e4e7",'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"signature": "0x84865a9480ae6313b0e5fcadfa294b35f5963e06c66ad1c7613dc081e9700c07f82a2583ba4b62b2483b4a1b9d49aafe0690f22fcf4d0072f9f44a5ce3067ef4fda560d171001cc6bf5dc84e09d9055d92894b86b27695c297f25530cd8db7a0",'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"slot": 5330592,'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"stateroot": "0x9e7e40d844c3b229cd9497d662a6d94276d285945073849995aba93c7e73cfe7",'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"status": "1",'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"syncaggregate_bits": "0xdffffffffffffffffffffffffffffff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffdfffffffffffffffdffffffffffffffffffffffff",'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"syncaggregate_participation": 0.9921875,'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"syncaggregate_signature": "0x95332c55790018eed3d17eada01cb4045348d09137505bc8697eeedaa3800a830ee2c138251850a9577f62a5488419ef0a722579156a177fb3a147017f1077af5d778f46a4cdf815fc450129d135fe5286e16df68333592e4aa45821bde780dd",'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"voluntaryexitscount": 0,'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"votes": 19227'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})})}),`
`,s.jsxs(e.h4,{id:"execution-block-for-16163905",children:["Execution Block for 16163905",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#execution-block-for-16163905",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.p,{children:[`Following is the execution block data for 16163905
It can be retrieved from `,s.jsx(e.a,{href:"https://beaconcha.in/api/v1/docs/index.html#/Execution/get_api_v1_execution_block__blockNumber_",children:"here"})," or by using this curl command"]}),`
`,s.jsx(e.p,{children:s.jsx(e.code,{children:"curl -X 'GET' 'https://beaconcha.in/api/v1/execution/block/16163905'  -H 'accept: application/json'"})}),`
`,s.jsx(e.p,{children:"Result"}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"{"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"status": "OK",'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"data": ['})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"{"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"blockHash": "0x26239efe09f51b24bdf7c518b1aa925a3b0b6453682408ec8a5c906d5038a6e7",'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"blockNumber": 16163905,'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"timestamp": 1670791127,'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"blockReward": 37343826945103810,'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"blockMevReward": 37083911760238810,'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"producerReward": 37083911760238810,'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"feeRecipient": "0xdafea492d9c6733ae3d56b7ed1adb60692c98bc5",'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"gasLimit": 30000000,'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"gasUsed": 9901267,'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"baseFee": 12376913565,'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"txCount": 139,'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"internalTxCount": 54,'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"uncleCount": 0,'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"parentHash": "0x06746d5ff105e96a1b8961c2490c0261b474604fbcbf934e86295c0030e26ce2",'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"uncleHash": "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"difficulty": 0,'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"posConsensus": {'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"executionBlockNumber": 16163905,'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"proposerIndex": 4345,'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"slot": 5330592,'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"epoch": 166581,'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"finalized": true'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"},"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"relay": {'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"tag": "flashbots-relay",'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"builderPubkey": "0x81beef03aafd3dd33ffd7deb337407142c80fea2690e5b3190cfc01bde5753f28982a7857c96172a75a234cb7bcb994f",'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"producerFeeRecipient": "0x60987e0d8b5e0095869ca6f0e642828e3f258bb5"'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"},"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"consensusAlgorithm": "pos"'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"]"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})})}),`
`,s.jsxs(e.h4,{id:"sync-committee-latest",children:["Sync Committee (latest)",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#sync-committee-latest",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.p,{children:[`Following is a sample Sync Committee
It can be retrieved from `,s.jsx(e.a,{href:"https://beaconcha.in/api/v1/docs/index.html#/SyncCommittee/get_api_v1_sync_committee__period_",children:"here"})," or by using this curl command"]}),`
`,s.jsx(e.p,{children:s.jsx(e.code,{children:"curl -X 'GET' 'https://beaconcha.in/api/v1/sync_committee/latest' -H 'accept: application/json'"})}),`
`,s.jsx(e.p,{children:"Abbrieviated Result"}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"{"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"status": "OK",'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"data": {'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"end_epoch": 167167,'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"period": 652,'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"start_epoch": 166912,'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"validators": ['})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"328781,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"184949,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"..."})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"]"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})})}),`
`,s.jsxs("details",{children:[s.jsx("summary",{children:"Full Result"}),s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"{"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"status": "OK",'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"data": {'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"end_epoch": 167167,'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"period": 652,'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"start_epoch": 166912,'})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"validators": ['})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"328781,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"184949,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"269719,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"484753,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"447707,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"190522,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"222987,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"429436,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"23553,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"353182,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"394935,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"347121,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"3941,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"77287,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"390407,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"41282,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"440380,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"477794,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"13208,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"321552,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"338223,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"414921,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"77542,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"57797,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"471002,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"238719,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"87491,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"85099,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"16484,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"220174,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"256680,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"194973,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"77409,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"150279,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"322042,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"275140,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"393620,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"21206,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"59424,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"308071,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"20736,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"173428,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"365316,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"293687,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"136783,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"459882,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"9048,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"128613,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"132177,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"267018,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"290896,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"236936,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"406218,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"380040,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"481667,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"34410,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"413701,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"158755,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"222721,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"295335,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"106306,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"426104,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"229412,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"377442,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"300381,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"251157,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"2301,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"255801,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"160943,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"417370,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"290905,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"435535,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"164094,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"204304,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"258455,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"366943,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"119808,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"311117,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"79552,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"164660,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"446993,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"347592,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"256827,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"244517,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"277343,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"303208,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"425967,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"216346,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"13359,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"481813,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"142254,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"105339,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"465226,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"200109,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"198691,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"43343,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"32947,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"392889,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"304855,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"452188,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"148690,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"441869,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"15210,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"216221,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"33338,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"124091,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"299153,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"305746,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"230810,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"484937,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"464816,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"474017,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"307185,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"370171,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"430926,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"21371,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"7607,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"209940,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"439052,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"398079,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"238559,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"108372,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"127122,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"62084,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"5906,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"278678,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"404838,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"253340,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"146867,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"437165,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"470827,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"252487,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"430474,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"433777,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"282060,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"221522,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"273826,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"56274,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"359184,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"401626,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"43613,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"287311,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"465536,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"301609,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"21832,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"192551,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"412598,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"186526,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"447005,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"112768,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"404399,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"289582,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"290124,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"191275,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"213003,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"39276,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"200971,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"315798,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"135302,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"121320,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"227480,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"156978,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"98919,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"201671,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"195988,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"186622,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"475967,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"314720,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"58582,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"404742,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"215008,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"306959,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"267381,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"126574,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"73725,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"156317,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"83010,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"375189,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"167000,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"459137,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"294856,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"144931,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"234176,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"371047,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"446790,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"219650,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"26577,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"64091,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"482916,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"203241,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"306809,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"178005,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"380280,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"452614,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"266272,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"264801,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"428464,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"342535,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"310436,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"297012,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"173959,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"384721,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"311372,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"375367,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"304633,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"247177,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"373217,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"43689,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"363227,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"447608,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"203474,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"186229,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"63975,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"189189,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"391682,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"197510,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"423160,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"168160,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"336488,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"11240,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"86706,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"316746,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"272065,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"50516,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"411785,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"25826,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"212663,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"233378,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"186547,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"268142,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"387972,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"275194,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"134600,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"337298,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"51510,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"206067,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"111837,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"461165,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"137209,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"317427,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"153989,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"464678,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"975,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"384374,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"433258,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"62611,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"413087,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"424810,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"449054,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"190150,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"310602,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"336220,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"71740,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"230657,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"453370,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"468144,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"322259,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"283775,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"1606,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"139348,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"352593,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"356482,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"156500,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"157489,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"454159,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"337203,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"63370,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"369541,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"170461,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"99771,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"398154,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"126177,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"281482,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"24217,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"234556,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"251792,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"201614,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"249765,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"130900,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"409074,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"46296,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"172953,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"194464,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"229313,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"120835,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"141417,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"187795,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"169516,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"352531,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"402467,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"433379,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"73331,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"345245,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"167093,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"176171,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"198482,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"486643,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"456439,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"449333,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"221367,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"481580,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"200704,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"197099,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"314035,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"336100,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"146714,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"415630,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"47127,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"287953,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"153548,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"438248,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"2664,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"325723,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"467719,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"408858,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"82963,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"180891,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"192679,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"86617,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"100068,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"2394,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"11764,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"48047,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"127406,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"149052,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"283994,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"342457,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"463547,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"320210,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"293252,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"6540,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"464926,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"265551,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"109109,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"164735,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"381110,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"29080,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"246178,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"355576,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"448267,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"430466,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"444401,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"126905,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"414347,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"451523,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"331926,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"366508,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"480803,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"387850,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"413867,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"17772,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"268744,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"427797,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"163955,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"333814,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"93663,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"338046,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"236013,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"180066,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"68685,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"466537,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"3904,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"277412,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"449845,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"16633,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"62120,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"108501,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"486885,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"60466,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"380719,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"269930,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"365432,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"377380,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"260009,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"300616,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"203897,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"289145,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"249814,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"26558,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"343110,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"48226,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"365643,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"401664,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"7355,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"350107,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"100836,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"99073,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"294093,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"7587,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"169932,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"166154,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"396054,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"108167,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"229069,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"307648,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"148531,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"233563,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"40093,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"44708,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"353913,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"456080,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"176129,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"156427,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"412072,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"154317,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"271015,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"126289,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"345876,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"156388,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"195860,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"25422,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"482057,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"362295,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"466187,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"115725,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"387438,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"170886,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"224753,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"126768,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"421612,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"96187,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"9314,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"194598,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"297360,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"121794,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"422582,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"428474,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"281996,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"211966,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"303980,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"232330,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"314475,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"485,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"146262,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"8780,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"459648,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"88780,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"371355,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"283376,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"480636,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"67695,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"153169,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"205011,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"52231,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"103646,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"432471,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"433747,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"16092,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"78487,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"165644,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"412660,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"451750,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"8088,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"185452,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"192135,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"355751,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"59734,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"341708,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"347491,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"466763,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"446951,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"670,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"392454,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"39840,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"469691,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"329363,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"61899,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"384770,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"317497,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"282776,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"211703,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"427937,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"284122,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"238949,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"417486,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"341081,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"241572,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"67225,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"294159,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"302865,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"227806,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"123006,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"329514,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"449279,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"31448,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"450144,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"485006,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"199737,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"253646,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"117814,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"408604,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"141399,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"121937,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"237632,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"315197,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"10397,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"318494,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"221051,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"444960,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"417643,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"90991,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"153828,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"291638,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"96654,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"280019,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"218632,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"74162,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"119769,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"20024,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"420771,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"219118,"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"96325"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"]"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})})})]}),`
`,s.jsxs(e.h3,{id:"appendix-h-sync-committe-creation-and-retrieval",children:["Appendix H: Sync Committe Creation and Retrieval",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#appendix-h-sync-committe-creation-and-retrieval",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(e.strong,{children:"Sync Committee Configuration"}),`
`,s.jsxs(e.p,{children:[s.jsx(e.code,{children:"EPOCHS_PER_SYNC_COMMITTEE_PERIOD"})," is set in ",s.jsx(e.a,{href:"https://github.com/prysmaticlabs/prysm/blob/develop/config/params/config.go#L185",children:"config.go"})," currently 255 epochs per synch comittee (approx 27 hrs) for Ethreum Mainnet."]}),`
`,s.jsx(e.strong,{children:"Sync Committee Update Process"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.a,{href:"https://github.com/prysmaticlabs/prysm/tree/develop/beacon-chain/blockchain",children:"beacon-chain/blockchain"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.a,{href:"https://github.com/prysmaticlabs/prysm/blob/develop/beacon-chain/blockchain/process_block.go",children:"process_block.go"}),": has function ",s.jsx(e.code,{children:"onBlock"})," which is called when a gossip block is received. It also has function ",s.jsx(e.code,{children:"handleEpochBoundary"})," which calls ",s.jsx(e.code,{children:"ProcessSlots"})," in ",s.jsx(e.a,{href:"https://github.com/prysmaticlabs/prysm/tree/develop/beacon-chain/core/transition",children:"beacon-chain/core/transition"})," and calls function ",s.jsx(e.code,{children:"UpdateCommitteeCache"})," in ",s.jsx(e.a,{href:"https://github.com/prysmaticlabs/prysm/tree/develop/beacon-chain/core/helpers",children:"beacon-chain/core/helpers"})]}),`
`]}),`
`]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.a,{href:"https://github.com/prysmaticlabs/prysm/tree/develop/beacon-chain/core/transition",children:"beacon-chain/core/transition"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.a,{href:"https://github.com/prysmaticlabs/prysm/blob/develop/beacon-chain/core/transition/transition.go",children:"transition.go"}),": implements the whole state transition function which consists of per slot, per-epoch transitions. function ",s.jsx(e.code,{children:"ProcessSlots"})," calls ",s.jsx(e.code,{children:"ProcessEpoch"})," in ",s.jsx(e.a,{href:"(%3Chttps://github.com/prysmaticlabs/prysm/blob/develop/beacon-chain/core/altair/transition.go)%3E",children:"beacon-chain/core/altair/transition.go"})]}),`
`]}),`
`]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.a,{href:"https://github.com/prysmaticlabs/prysm/tree/develop/beacon-chain/core/altair",children:"beacon-chain/core/altair"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.a,{href:"https://github.com/prysmaticlabs/prysm/blob/develop/beacon-chain/core/altair/transition.go",children:"transition.go"}),": includes function ",s.jsx(e.code,{children:"ProcessEpoch"})," which calls ",s.jsx(e.code,{children:"ProcessSyncCommitteeUpdates"})," in ",s.jsx(e.a,{href:"https://github.com/prysmaticlabs/prysm/blob/develop/beacon-chain/core/altair/epoch_spec.go",children:"epoch_spec.go"})]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.a,{href:"https://github.com/prysmaticlabs/prysm/blob/develop/beacon-chain/core/altair/epoch_spec.go",children:"epoch_spec.go"}),": includes function ",s.jsx(e.code,{children:"ProcessSyncCommitteeUpdates"})," which calls ",s.jsx(e.code,{children:"NextSyncCommittee"})," it also persists beacon state syncCommittee by calling ",s.jsx(e.code,{children:"beaconState.SetNextSyncCommittee(nextSyncCommittee)"})," in ",s.jsx(e.a,{href:"https://github.com/prysmaticlabs/prysm/blob/develop/beacon-chain/state/state-native/setters_sync_committee.go",children:"setters_sync_committee.go"})]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.a,{href:"https://github.com/prysmaticlabs/prysm/blob/develop/beacon-chain/core/altair/sync_committee.go",children:"sync_committee.go"}),": includes function ",s.jsx(e.code,{children:"NextSyncCommittee"})," which calls ",s.jsx(e.code,{children:"NextSyncCommittee"})," to return the sync committee indices, with possible duplicates, for the next sync committee."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.a,{href:"https://github.com/prysmaticlabs/prysm/blob/develop/beacon-chain/core/altair/block.go",children:"block.go"}),": includes function ",s.jsx(e.code,{children:"VerifySyncCommitteeSig"})]}),`
`]}),`
`]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.a,{href:"https://github.com/prysmaticlabs/prysm/tree/develop/beacon-chain/core/helpers",children:"beacon-chain/core/helpers"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.a,{href:"https://github.com/prysmaticlabs/prysm/blob/develop/beacon-chain/core/helpers/beacon_committee.go",children:"beacon_committee.go"})," has function ",s.jsx(e.code,{children:"UpdateCommitteeCache"})," which gets called at the beginning of every epoch to cache the committee shuffled indices list with committee index and epoch number. It caches the shuffled indices for current epoch and next epoch. it calls ",s.jsx(e.code,{children:"UpdatePositionsInCommittee"})," in ",s.jsx(e.a,{href:"https://github.com/prysmaticlabs/prysm/blob/develop/beacon-chain/cache/sync_committee.go",children:"sync_committee.go"})]}),`
`]}),`
`]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.a,{href:"https://github.com/prysmaticlabs/prysm/tree/develop/beacon-chain/cache",children:"beacon-chain/cache"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.a,{href:"https://github.com/prysmaticlabs/prysm/blob/develop/beacon-chain/cache/sync_committee.go",children:"sync_committee.go"}),": has function ",s.jsx(e.code,{children:"UpdatePositionsInCommittee"})," which updates caching of validators position in sync committee in respect to current epoch and next epoch. This should be called when ",s.jsx(e.code,{children:"current_sync_committee"})," and ",s.jsx(e.code,{children:"next_sync_committee"})," change and that happens every ",s.jsx(e.code,{children:"EPOCHS_PER_SYNC_COMMITTEE_PERIOD"}),"."]}),`
`]}),`
`]}),`
`]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Sync Committee Retrieval"}),`
gRPC and API methods`]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.a,{href:"https://github.com/prysmaticlabs/prysm/tree/develop/beacon-chain/rpc",children:"beacon-chain/rpc"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.a,{href:"https://github.com/prysmaticlabs/prysm/tree/develop/beacon-chain/rpc/prysm/v1alpha1",children:"prysm/v1alpha1"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.a,{href:"https://github.com/prysmaticlabs/prysm/tree/develop/beacon-chain/rpc/prysm/v1alpha1/validator",children:"validator"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.a,{href:"https://github.com/prysmaticlabs/prysm/blob/develop/beacon-chain/rpc/prysm/v1alpha1/validator/assignments.go",children:"assignments.go"}),": has functions ",s.jsx(e.code,{children:"GetDuties"})," and ",s.jsx(e.code,{children:"StreamDuties"})," which calls function ",s.jsx(e.code,{children:"duties"})," to compute the validator duties from the head state's corresponding epoch for validators public key / indices requested."]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,s.jsxs(e.p,{children:["which ",s.jsx(e.a,{href:"https://github.com/prysmaticlabs/prysm/blob/develop/beacon-chain/rpc/prysm/v1alpha1/validator/assignments.go#L213",children:"manages sync committee duties"})," every ",s.jsx(e.code,{children:"EPOCHS_PER_SYNC_COMMITTEE_PERIOD - 1"})," which is set in ",s.jsx(e.a,{href:"https://github.com/prysmaticlabs/prysm/blob/develop/config/params/config.go#L185",children:"config.go"})," currently 255 epochs per synch comittee (approx 27 hrs) for Ethreum Mainnet."]}),`
`,s.jsx(e.p,{children:s.jsx(e.a,{href:"https://github.com/prysmaticlabs/prysm/blob/develop/beacon-chain/rpc/prysm/v1alpha1/validator/assignments.go#L281",children:"registerSyncSubnetNextPeriod"})}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"func registerSyncSubnetNextPeriod(s beaconState.BeaconState, epoch types.Epoch, pubKey []byte, status ethpb.ValidatorStatus) error {"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"committee, err := s.NextSyncCommittee()"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"if err != nil {"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"return err"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"syncCommPeriod := slots.SyncCommitteePeriod(epoch)"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"registerSyncSubnet(epoch, syncCommPeriod+1, pubKey, committee, status)"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"return nil"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})})}),`
`,s.jsx(e.strong,{children:"Sync Committee Storage"}),`
`,s.jsx(e.p,{children:"Persistence Mechanism"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.a,{href:"https://github.com/prysmaticlabs/prysm/tree/develop/proto",children:"proto"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.a,{href:"https://github.com/prysmaticlabs/prysm/tree/develop/proto/eth/v2",children:"eth/v2"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.a,{href:"https://github.com/prysmaticlabs/prysm/blob/develop/proto/eth/v2/validator.proto",children:"validator.proto"}),": messages for validators including ",s.jsx(e.code,{children:"SyncCommitteeDuty"})]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.a,{href:"https://github.com/prysmaticlabs/prysm/blob/develop/proto/eth/v2/sync_committee.proto",children:"sync_committee.proto"}),": messages for SyncCommittee which serves as committees to facilitate light client syncing to beacon chain."]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,s.jsx(e.p,{children:s.jsx(e.a,{href:"https://github.com/prysmaticlabs/prysm/blob/v3.1.2/beacon-chain/state/state-native/beacon_state_mainnet.go",children:"beacon_state_mainnet.go"})}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"// BeaconState defines a struct containing utilities for the Ethereum Beacon Chain state, defining"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"// getters and setters for its respective values and helpful functions such as HashTreeRoot()."})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"type BeaconState struct {"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"version int"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"genesisTime uint64"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"genesisValidatorsRoot ["}),s.jsx(e.span,{style:{color:"#032F62",textDecoration:"underline","--shiki-dark":"#96D0FF","--shiki-dark-text-decoration":"inherit"},children:"32"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"]byte"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"slot eth2types.Slot"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"fork *ethpb.Fork"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"latestBlockHeader *ethpb.BeaconBlockHeader"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"blockRoots *customtypes.BlockRoots"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"stateRoots *customtypes.StateRoots"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"historicalRoots customtypes.HistoricalRoots"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"eth1Data *ethpb.Eth1Data"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"eth1DataVotes []*ethpb.Eth1Data"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"eth1DepositIndex uint64"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"validators []*ethpb.Validator"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"balances []uint64"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"randaoMixes *customtypes.RandaoMixes"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"slashings []uint64"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"previousEpochAttestations []*ethpb.PendingAttestation"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"currentEpochAttestations []*ethpb.PendingAttestation"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"previousEpochParticipation []byte"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"currentEpochParticipation []byte"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"justificationBits bitfield.Bitvector4"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"previousJustifiedCheckpoint *ethpb.Checkpoint"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"currentJustifiedCheckpoint *ethpb.Checkpoint"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"finalizedCheckpoint *ethpb.Checkpoint"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"inactivityScores []uint64"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"currentSyncCommittee *ethpb.SyncCommittee"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"nextSyncCommittee *ethpb.SyncCommittee"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"latestExecutionPayloadHeader *enginev1.ExecutionPayloadHeader"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"latestExecutionPayloadHeaderCapella "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:"\\*"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"enginev1.ExecutionPayloadHeaderCapella"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"nextWithdrawalIndex uint64"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"nextWithdrawalValidatorIndex eth2types.ValidatorIndex"})}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"lock sync.RWMutex"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"dirtyFields map["}),s.jsx(e.span,{style:{color:"#032F62",textDecoration:"underline","--shiki-dark":"#96D0FF","--shiki-dark-text-decoration":"inherit"},children:"nativetypes.FieldIndex"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"]bool"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"dirtyIndices map["}),s.jsx(e.span,{style:{color:"#032F62",textDecoration:"underline","--shiki-dark":"#96D0FF","--shiki-dark-text-decoration":"inherit"},children:"nativetypes.FieldIndex"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"][]uint64"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"stateFieldLeaves map["}),s.jsx(e.span,{style:{color:"#032F62",textDecoration:"underline","--shiki-dark":"#96D0FF","--shiki-dark-text-decoration":"inherit"},children:"nativetypes.FieldIndex"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"]*fieldtrie.FieldTrie"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"rebuildTrie map["}),s.jsx(e.span,{style:{color:"#032F62",textDecoration:"underline","--shiki-dark":"#96D0FF","--shiki-dark-text-decoration":"inherit"},children:"nativetypes.FieldIndex"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"]bool"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"valMapHandler *stateutil.ValidatorMapHandler"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"merkleLayers [][][]byte"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"sharedFieldReferences map["}),s.jsx(e.span,{style:{color:"#032F62",textDecoration:"underline","--shiki-dark":"#96D0FF","--shiki-dark-text-decoration":"inherit"},children:"nativetypes.FieldIndex"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"]"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:"\\*"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"stateutil.Reference"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})})}),`
`,s.jsx(e.p,{children:s.jsx(e.a,{href:"https://github.com/prysmaticlabs/prysm/blob/develop/proto/prysm/v1alpha1/beacon_state.pb.go#L962",children:"beacon_state.pb.go"})}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"type SyncCommittee struct {"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"state protoimpl.MessageState"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"sizeCache protoimpl.SizeCache"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"unknownFields protoimpl.UnknownFields"})}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"Pubkeys [][]byte "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:'`protobuf:"bytes,1,rep,name=pubkeys,proto3" json:"pubkeys,omitempty" ssz-size:"512,48"`'})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"AggregatePubkey []byte "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:'`protobuf:"bytes,2,opt,name=aggregate_pubkey,json=aggregatePubkey,proto3" json:"aggregate_pubkey,omitempty" ssz-size:"48"`'})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})})}),`
`,s.jsx(e.p,{children:s.jsx(e.a,{href:"https://github.com/prysmaticlabs/prysm/blob/v3.1.2/beacon-chain/state/interfaces.go",children:"Interfaces"})}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"// BeaconState has read and write access to beacon state methods."})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"type BeaconState interface {"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"SpecParametersProvider"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"ReadOnlyBeaconState"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"ReadOnlyWithdrawals"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"WriteOnlyBeaconState"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"Copy() BeaconState"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"HashTreeRoot(ctx context.Context) (["}),s.jsx(e.span,{style:{color:"#032F62",textDecoration:"underline","--shiki-dark":"#96D0FF","--shiki-dark-text-decoration":"inherit"},children:"32"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"]byte, error)"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"FutureForkStub"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"StateProver"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})})}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"// StateProver defines the ability to create Merkle proofs for beacon state fields."})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"type StateProver interface {"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"FinalizedRootProof(ctx context.Context) ([][]byte, error)"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"CurrentSyncCommitteeProof(ctx context.Context) ([][]byte, error)"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"NextSyncCommitteeProof(ctx context.Context) ([][]byte, error)"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})})}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsx(e.code,{children:s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "})})})})]})}function c(n={}){const{wrapper:e}={...a(),...n.components};return e?s.jsx(e,{...n,children:s.jsx(i,{...n})}):i(n)}export{c as default,r as frontmatter};
