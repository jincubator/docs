import{f as r,j as e}from"./index-UeFTLdi2.js";const c={title:"Ethereum Near Bridging",description:"undefined"};function i(s){const n={a:"a",blockquote:"blockquote",code:"code",defs:"defs",div:"div",em:"em",g:"g",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li","mjx-container":"mjx-container",ol:"ol",p:"p",path:"path",pre:"pre",span:"span",strong:"strong",style:"style",svg:"svg",ul:"ul",use:"use",...r(),...s.components},t=n["mjx-container"];return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"ethereum-near-bridging",children:["Ethereum Near Bridging",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#ethereum-near-bridging",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"date: 2023-02-04"}),`
`,e.jsx(n.li,{children:"last updated: 2023-02-04"}),`
`]}),`
`,e.jsxs(n.h2,{id:"overview",children:["Overview",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#overview",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"This document reviews the Ethereum 2.0 specifications including Light Client specifications. It does a detailed review of the NEAR Rainbow Bridge implementation and also includes references to Harmony's design to support Mountain Merkle Ranges."}),`
`,e.jsx(n.p,{children:"Key differences in supporting Ethereum 2.0 (Proof of Stake) vs Proof of Work involves removing the ETHHASH logic and SPV client and potentially replacing with MMR trees per epoch and checkpoints similar to Harmony Light Client on Ethereum."}),`
`,e.jsxs(n.h2,{id:"ethereum-20-specifications",children:["Ethereum 2.0 Specifications",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#ethereum-20-specifications",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/ethereum/consensus-specs/blob/master/specs/phase0/beacon-chain.mdx",children:"Beacon Chain Specification"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://notes.ethereum.org/@vbuterin/extended_light_client_protocol",children:"Extended light client protocol"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/ethereum/consensus-specs/blob/dev/specs/altair/light-client/light-client.mdx",children:"Altair Light Client -- Light Client"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/ethereum/consensus-specs/blob/dev/specs/altair/light-client/sync-protocol.mdx",children:"Altair Light Client -- Sync Protocol"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/ethereum/consensus-specs/blob/dev/specs/phase0/fork-choice.mdx",children:"Beacon Chain Fork Choice"})}),`
`]}),`
`,e.jsxs(n.h2,{id:"ethereum-20-light-client-support",children:["Ethereum 2.0 Light Client Support",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#ethereum-20-light-client-support",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"How light client implementation and verification of ETH and ETH2 can be done via smart contracts in other protocols."}),`
`,e.jsx(n.p,{children:"For this we review three Key items"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Light Client Specifications including ",e.jsx(n.a,{href:"https://notes.ethereum.org/@vbuterin/extended_light_client_protocol",children:"Extended light client protocol"})," described by ",e.jsx(n.a,{href:"https://github.com/ethereum/consensus-specs/blob/dev/specs/altair/light-client/sync-protocol.mdx",children:"Altair Light Client -- Sync Protocol"})," and the ",e.jsx(n.a,{href:"https://github.com/ethereum/portal-network-specs",children:"The Portal Network Specification"})]}),`
`,e.jsxs(n.li,{children:["Near Rainbow Bridge Light Client Walkthrough include ",e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/tree/master/eth2near/eth2near-block-relay-rs",children:"eth2near-block-relay-rs"}),", ",e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/tree/master/contracts/eth/nearbridge",children:"nearbridge contracts"})," and ",e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/tree/master/contracts/eth/nearprover",children:"nearprover contracts"})]}),`
`,e.jsxs(n.li,{children:["Prysm light-client ",e.jsx(n.a,{href:"https://github.com/jinfwhuang/prysm/tree/jin-light/cmd/light-client",children:"prototype"})]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.em,{children:"Note: Time on Ethereum 2.0 Proof of Stake is divided into slots and epochs. One slot is 12 seconds. One epoch is 6.4 minutes, consisting of 32 slots. One block can be created for each slot."})}),`
`,e.jsxs(n.h3,{id:"light-client-specification",children:["Light Client Specification",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#light-client-specification",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h4,{id:"altair-light-client----sync-protocol",children:["Altair Light Client -- Sync Protocol",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#altair-light-client----sync-protocol",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://github.com/ethereum/consensus-specs/blob/dev/specs/altair/light-client/sync-protocol.mdx",children:"Altair Light Client -- Sync Protocol"}),": The beacon chain is designed to be light client friendly for constrained environments to access Ethereum with reasonable safety and liveness."]}),`
`,e.jsx(n.p,{children:"Such environments include resource-constrained devices (e.g. phones for trust-minimized wallets)and metered VMs (e.g. blockchain VMs for cross-chain bridges)."}),`
`,e.jsxs(n.p,{children:["This document suggests a minimal light client design for the beacon chain thatuses sync committees introduced in ",e.jsx(n.a,{href:"https://github.com/ethereum/consensus-specs/blob/dev/specs/altair/beacon-chain.mdx",children:"this beacon chain extension"}),"."]}),`
`,e.jsx(n.p,{children:"Additional documents describe how the light client sync protocol can be used:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/ethereum/consensus-specs/blob/dev/specs/altair/light-client/full-node.mdx",children:"Full node"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/ethereum/consensus-specs/blob/dev/specs/altair/light-client/light-client.mdx",children:"Light client"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/ethereum/consensus-specs/blob/dev/specs/altair/light-client/p2p-interface.mdx",children:"Networking"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://github.com/ethereum/consensus-specs/blob/dev/specs/altair/light-client/light-client.mdx",children:"Light client sync process"}),": explains how light clients MAY obtain light client data to sync with the network."]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["The light client MUST be configured out-of-band with a spec/preset (including fork schedule), with ",e.jsx(n.code,{children:"genesis_state"})," (including ",e.jsx(n.code,{children:"genesis_time"})," and ",e.jsx(n.code,{children:"genesis_validators_root"}),"), and with a trusted block root. The trusted block SHOULD be within the weak subjectivity period, and its root SHOULD be from a finalized ",e.jsx(n.code,{children:"Checkpoint"}),"."]}),`
`,e.jsxs(n.li,{children:["The local clock is initialized based on the configured ",e.jsx(n.code,{children:"genesis_time"}),", and the current fork digest is determined to browse for and connect to relevant light client data providers."]}),`
`,e.jsxs(n.li,{children:["The light client fetches a ",e.jsx(n.a,{href:"https://github.com/ethereum/consensus-specs/blob/dev/specs/altair/light-client/light-client.mdx",children:e.jsx(n.code,{children:"LightClientBootstrap"})})," object for the configured trusted block root. The ",e.jsx(n.code,{children:"bootstrap"})," object is passed to ",e.jsx(n.a,{href:"https://github.com/ethereum/consensus-specs/blob/dev/specs/altair/light-client/sync-protocol.md#initialize_light_client_store",children:e.jsx(n.code,{children:"initialize_light_client_store"})})," to obtain a local ",e.jsx(n.a,{href:"https://github.com/ethereum/consensus-specs/blob/dev/specs/altair/light-client/sync-protocol.md#lightclientstore",children:e.jsx(n.code,{children:"LightClientStore"})}),"."]}),`
`,e.jsxs(n.li,{children:["The light client tracks the sync committee periods ",e.jsx(n.code,{children:"finalized_period"})," from ",e.jsx(n.code,{children:"store.finalized_header.slot"}),", ",e.jsx(n.code,{children:"optimistic_period"})," from ",e.jsx(n.code,{children:"store.optimistic_header.slot"}),", and ",e.jsx(n.code,{children:"current_period"})," from ",e.jsx(n.code,{children:"current_slot"})," based on the local clock.",`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["When ",e.jsx(n.code,{children:"finalized_period == optimistic_period"})," and ",e.jsx(n.a,{href:"https://github.com/ethereum/consensus-specs/blob/dev/specs/altair/light-client/sync-protocol.md#is_next_sync_committee_known",children:e.jsx(n.code,{children:"is_next_sync_committee_known"})})," indicates ",e.jsx(n.code,{children:"False"}),", the light client fetches a ",e.jsx(n.a,{href:"https://github.com/ethereum/consensus-specs/blob/dev/specs/altair/light-client/sync-protocol.md#lightclientupdate",children:e.jsx(n.code,{children:"LightClientUpdate"})})," for ",e.jsx(n.code,{children:"finalized_period"}),". If ",e.jsx(n.code,{children:"finalized_period == current_period"}),", this fetch SHOULD be scheduled at a random time before ",e.jsx(n.code,{children:"current_period"})," advances."]}),`
`,e.jsxs(n.li,{children:["When ",e.jsx(n.code,{children:"finalized_period + 1 < current_period"}),", the light client fetches a ",e.jsx(n.code,{children:"LightClientUpdate"})," for each sync committee period in range ",e.jsx(n.code,{children:"[finalized_period + 1, current_period)"})," (current period excluded)"]}),`
`,e.jsxs(n.li,{children:["When ",e.jsx(n.code,{children:"finalized_period + 1 >= current_period"}),", the light client keeps observing ",e.jsx(n.a,{href:"https://github.com/ethereum/consensus-specs/blob/dev/specs/altair/light-client/sync-protocol.md#lightclientfinalityupdate",children:e.jsx(n.code,{children:"LightClientFinalityUpdate"})})," and ",e.jsx(n.a,{href:"https://github.com/ethereum/consensus-specs/blob/dev/specs/altair/light-client/sync-protocol.md#lightclientoptimisticupdate",children:e.jsx(n.code,{children:"LightClientOptimisticUpdate"})}),". Received objects are passed to ",e.jsx(n.a,{href:"https://github.com/ethereum/consensus-specs/blob/dev/specs/altair/light-client/sync-protocol.md#process_light_client_finality_update",children:e.jsx(n.code,{children:"process_light_client_finality_update"})})," and ",e.jsx(n.a,{href:"https://github.com/ethereum/consensus-specs/blob/dev/specs/altair/light-client/sync-protocol.md#process_light_client_optimistic_update",children:e.jsx(n.code,{children:"process_light_client_optimistic_update"})}),". This ensures that ",e.jsx(n.code,{children:"finalized_header"})," and ",e.jsx(n.code,{children:"optimistic_header"})," reflect the latest blocks."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/ethereum/consensus-specs/blob/dev/specs/altair/light-client/sync-protocol.md#process_light_client_store_force_update",children:e.jsx(n.code,{children:"process_light_client_store_force_update"})})," MAY be called based on use case dependent heuristics if light client sync appears stuck. If available, falling back to an alternative syncing mechanism to cover the affected sync committee period is preferred."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.h4,{id:"the-portal-network",children:["The Portal Network",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#the-portal-network",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://github.com/ethereum/portal-network-specs",children:"The Portal Network"}),": The Portal Network is an in progess effort to enable lightweight protocol access by resource constrained devices. The term ",e.jsx(n.em,{children:'"portal"'})," is used to indicate that these networks provide a ",e.jsx(n.em,{children:"view"})," into the protocol but are not critical to the operation of the core Ethereum protocol."]}),`
`,e.jsxs(n.p,{children:["The Portal Network is comprised of multiple peer-to-peer networks which together provide the data and functionality necessary to expose the standard ",e.jsx(n.a,{href:"https://eth.wiki/json-rpc/API",children:"JSON-RPC API"}),". These networks are specially designed to ensure that clients participating in these networks can do so with minimal expenditure of networking bandwidth, CPU, RAM, and HDD resources."]}),`
`,e.jsx(n.p,{children:"The term 'Portal Client' describes a piece of software which participates in these networks. Portal Clients typically expose the standard JSON-RPC API."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Motivation: The Portal Network is focused on delivering reliable, lightweight, and decentralized access to the Ethereum protocol."}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:['Prior Work on the "Light Ethereum Subprotocol" (LES): The term "light client" has historically refered to a client of the existing ',e.jsx(n.a,{href:"https://github.com/ethereum/devp2p/blob/master/rlpx.mdx",children:"DevP2P"})," based ",e.jsx(n.a,{href:"https://github.com/ethereum/devp2p/blob/master/caps/les.mdx",children:"LES"}),' network. This network is designed using a client/server architecture. The LES network has a total capacity dictated by the number of "servers" on the network. In order for this network to scale, the "server" capacity has to increase. This also means that at any point in time the network has some total capacity which if exceeded will cause service degradation across the network. Because of this the LES network is unreliable when operating near capacity.']}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Block Relay"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://github.com/ethereum/portal-network-specs/blob/master/beacon-chain/beacon-state-network.md#dht-overview",children:"Beacon State"}),": A client has a trusted beacon state root, and it wants to access some parts of the state. Each of the access request corresponds to some leave nodes of the beacon state. The request is a content lookup on a DHT. The response is a Merkle proof."]}),`
`,e.jsx(n.p,{children:"A Distributed Hash Table (DHT) allows network participants to have retrieve data on-demand based on a content"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://github.com/ethereum/portal-network-specs/blob/master/beacon-chain/sync-gossip.mdx",children:"Syncing Block Headers"}),": A beacon chain client could sync committee to perform state updates. The data object LightClientSkipSyncUpdate allows a client to quickly sync to a recent header with the appropriate sync committee. Once the client establishes a recent header, it could sync to other headers by processing LightClientUpdates. These two data types allow a client to stay up-to-date with the beacon chain."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://github.com/ethereum/portal-network-specs/blob/master/beacon-chain/skip-sync-network.mdx",children:"Sync State"}),": A client uses SkipSyncUpdate to skip sync from a known header to a recent header. A client with a trusted but outdated header cannot use the messages in the gossip channel bc-light-client-update to update. The client's sync-committee in the stored snapshot is too old and not connected to any update messages. The client look for the appropriate SkipSyncUpdate to skip sync its header."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://github.com/ethereum/portal-network-specs/blob/master/beacon-chain/sync-gossip.mdx",children:"Advance Block Headers"}),": A beacon chain client could sync committee to perform ",e.jsx(n.a,{href:"https://github.com/ethereum/consensus-specs/blob/dev/specs/altair/sync-protocol.mdx",children:"state updates"}),". The data object ",e.jsx(n.a,{href:"skip-sync-network",children:"LightClientSkipSyncUpdate"})," allows a client to quickly sync to a recent header with the appropriate sync committee. Once the client establishes a recent header, it could sync to other headers by processing ",e.jsx(n.a,{href:"https://github.com/ethereum/consensus-specs/blob/dev/specs/altair/sync-protocol.md#lightclientupdate",children:"LightClientUpdates"}),". These two data types allow a client to stay up-to-date with the beacon chain."]}),`
`,e.jsxs(n.p,{children:["These two data types are placed into separate sub-networks. A light client make find-content requests on ",e.jsx(n.code,{children:"skip-sync-network"})," at start of the sync to get a header with the same ",e.jsx(n.code,{children:"SyncCommittee"})," object as in the current sync period. The client uses messages in the gossip topic ",e.jsx(n.code,{children:"bc-light-client-update"})," to advance its header."]}),`
`,e.jsxs(n.p,{children:["The gossip topics described in this document is part of a ",e.jsx(n.a,{href:"https://ethresear.ch/t/a-beacon-chain-light-client-proposal/11064",children:"proposal"})," for a beacon chain light client."]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.h4,{id:"transaction-proofs",children:["Transaction Proofs",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#transaction-proofs",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://github.com/ethereum/portal-network-specs/blob/master/beacon-chain/beacon-state-network.mdx",children:"Retrieving Beacon State"}),": A client has a trusted beacon state root, and it wants to access some parts of the state. Each of the access request corresponds to some leave nodes of the beacon state. The request is a content lookup on a DHT. The response is a Merkle proof."]}),`
`,e.jsx(n.p,{children:"A Distributed Hash Table (DHT) allows network participants to have retrieve data on-demand based on a content key. A portal-network DHT is different than a traditional one in that each participant could selectively limit its workload by choosing a small interest radius r. A participants only process messages that are within its chosen radius boundary."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://github.com/ethereum/portal-network-specs/blob/master/beacon-chain/beacon-state-network.md#wire-protocol",children:"Wire Protocol"}),": For a subprotocol, we need to further define the following to be able to instantiate the wire format of each message type. 1. ",e.jsx(n.code,{children:"content_key"})," 2. ",e.jsx(n.code,{children:"content_id"})," 3. ",e.jsx(n.code,{children:"payload"})]}),`
`,e.jsxs(n.p,{children:["The content of the message is a Merkle proof contains multiple leave nodes for a ",e.jsx(n.a,{href:"https://github.com/ethereum/consensus-specs/blob/dev/specs/altair/beacon-chain.md#beaconstate",children:"BeaconState"}),"."]}),`
`,e.jsxs(n.p,{children:["Finally, we define the necessary encodings. A light client only knows the root of the beacon state. The client wants to know the details of some leave nodes. The client has to be able to construct the ",e.jsx(n.code,{children:"content_key"})," only knowing the root and which leave nodes it wants see. The ",e.jsx(n.code,{children:"content_key"})," is the ssz serialization of the paths. The paths represent the part of the beacon state that one wants to know about. The paths are represented by generalized indices. Note that ",e.jsx(n.code,{children:"hash_tree_root"})," and ",e.jsx(n.code,{children:"serialize"})," are the same as those defined in ",e.jsx(n.a,{href:"https://github.com/ethereum/portal-network-specs/blob/master/beacon-chain/sync-gossip.mdx",children:"sync-gossip"}),"."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"TODO: Review of Retrieving a transaction proof not just retrieving data on-demand"}),`
`]}),`
`]}),`
`,e.jsxs(n.h4,{id:"references",children:["References",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#references",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Ethereum 2.0 Specifications"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/ethereum/consensus-specs/blob/master/specs/phase0/beacon-chain.mdx",children:"Beacon Chain Specification"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://notes.ethereum.org/@vbuterin/extended_light_client_protocol",children:"Extended light client protocol"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/ethereum/consensus-specs/blob/dev/specs/altair/light-client/light-client.mdx",children:"Altair Light Client -- Light Client"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/ethereum/consensus-specs/blob/dev/specs/altair/light-client/sync-protocol.mdx",children:"Altair Light Client -- Sync Protocol"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/ethereum/consensus-specs/blob/dev/specs/phase0/fork-choice.mdx",children:"Beacon Chain Fork Choice"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/ethereum/portal-network-specs",children:"The Portal Network Specification"}),": an in progess effort to enable lightweight protocol access by resource constrained devices."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://github.com/ethereum/devp2p/blob/master/caps/les.mdx",children:"Light Ethereum Subprotocol (LES)"}),': the protocol used by "light" clients, which only download block headers as they appear and fetch other parts of the blockchain on-demand.']}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://blockdaemon.com/blog/ethereum-altair-hard-folk-light-clients-sync-committees/",children:"BlockDaemon: Ethereum Altair Hard Folk: Light Clients & Sync Committees"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://docs.google.com/presentation/d/1oc_zdywOsHxz3zez1ILAgrerS7RkaF1hHoW0FLtp0Gw/edit#slide=id.p",children:"Efficient algorithms for CBC Casper"}),": Review of LMD GHOST (Latest Message Driven, Greediest Heaviest Observed Sub-Tree)"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://ethereum.org/en/developers/docs/data-structures-and-encoding/ssz/",children:"SSZ: Simple Serialize"}),": Overview of Simple serialize (SSZ) is the serialization method used on the Beacon Chain. (including merkalization and multiproofs)"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://noiseprotocol.org/noise.html",children:"The Noise Protocol Framework"}),": Noise is a framework for crypto protocols based on Diffie-Hellman key agreement."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://hackmd.io/QoLwVQf3QK6EiVt15YOYqQ?view",children:"Flashbots for Ethereum Consensus Clients"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://github.com/ethereum/consensus-specs/blob/dev/sync/optimistic.mdx",children:"Optimistic Sync Specification"}),": Optimistic Sync is a stop-gap measure to allow execution nodes to sync via established methods until future Ethereum roadmap items are implemented (e.g., statelessness)."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://hackmd.io/hsCz1G3BTyiwwJtjT4pe2Q?view",children:"Consensus Light Client Server Implementation Notes"}),": How Lodestar beacon node was tweaked to serve light clients"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://notes.ethereum.org/@ralexstokes/HJxDMi8vY",children:"beacon chain light client design doc"}),": notes about the design/implementation of a beacon chain light client using standard APIs and protocol features"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://ethresear.ch/t/a-beacon-chain-light-client-proposal/11064",children:"A Beacon Chain Light Client Proposal"}),": proposing a light client implementation that goes a step further than the minimum light client described in the altair consensus-spec. The proposed client aims to allow queries into the beacon state."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://github.com/ethereum/portal-network-specs/blob/master/beacon-chain/beacon-state-network.md#dht-overview",children:"Distributed Hash Table (DHT) Overview"}),": allows network participants to have retrieve data on-demand based on a content key."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://github.com/ethereum/consensus-specs/pull/2786",children:"(WIP) Light client p2p interface Specification"}),": a PR to get the conversation going about a p2p approach."]}),`
`]}),`
`]}),`
`,e.jsxs(n.h3,{id:"near-rainbow-bridge-ethereum-light-client-walkthrough",children:["Near Rainbow Bridge Ethereum Light Client Walkthrough",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#near-rainbow-bridge-ethereum-light-client-walkthrough",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["The following is a walkthrough of how a transaction executed on Ethereum is propogated to NEAR's ",e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/tree/master/contracts/near/eth2-client",children:"eth2-client"}),". See ",e.jsx(n.a,{href:"#cryptographic-primitives",children:"Cryptographic Primitives"})," for more information on the cryptography used."]}),`
`,e.jsx(n.strong,{children:"At a high level the ethereum light client contract"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Optionally accepts client updates only from a trusted client"}),`
`,e.jsx(n.li,{children:"Can pause functions"}),`
`,e.jsx(n.li,{children:"Validates a sync committee exists for the curremt slot"}),`
`,e.jsx(n.li,{children:"Validates sync committe has greater than the minimum required sync committee members"}),`
`,e.jsx(n.li,{children:"Validates 2/3 or more of the committe members have signed the blocks"}),`
`,e.jsx(n.li,{children:"Validates bls signatures (i.e. the bls signatures of the sync comittee for the blocks propogated)"}),`
`,e.jsxs(n.li,{children:["Stores the hashes of the blocks for the past ",e.jsx(n.code,{children:"hashes_gc_threshold"})," headers. Events that happen past this threshold cannot be verified by the client. It is desirable that this number is larger than 7 days' worth of headers, which is roughly 51k Ethereum blocks. So this number should be 51k in production."]}),`
`,e.jsx(n.li,{children:"Stores the Ethereum Network (e.g. mainnet, kiln)"}),`
`,e.jsx(n.li,{children:"Stores Hashes of the finalized execution blocks mapped to their numbers."}),`
`,e.jsxs(n.li,{children:["Stores All unfinalized execution blocks' headers hashes mapped to their ",e.jsx(n.code,{children:"HeaderInfo"}),"."]}),`
`,e.jsxs(n.li,{children:["Stores ",e.jsx(n.code,{children:"AccountId"}),"s mapped to their number of submitted headers."]}),`
`,e.jsx(n.li,{children:"Stores Max number of unfinalized blocks allowed to be stored by one submitter account. This value should be at least 32 blocks (1 epoch), but the recommended value is 1024 (32 epochs)"}),`
`,e.jsx(n.li,{children:"Stores minimum balance that should be attached to register a new submitter account."}),`
`,e.jsx(n.li,{children:"Stores finalized beacon header"}),`
`,e.jsx(n.li,{children:"Stores finalized execution header"}),`
`,e.jsx(n.li,{children:"Stores current_sync_committee"}),`
`,e.jsx(n.li,{children:"Stores next_sync_committee"}),`
`]}),`
`,e.jsxs(n.h4,{id:"ethereum-to-near-block-propagation-flow",children:["Ethereum to NEAR block propagation flow",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#ethereum-to-near-block-propagation-flow",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/eth2near/eth2near-block-relay-rs/src/main.rs#L107",children:"Light Clients are deployed on Near"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/eth2near/eth2near-block-relay-rs/src/main.rs#L107",children:"init_contract"}),": The eth2near relayer is called with an argument to initialize the ",e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/contracts/near/eth2-client/src/lib.rs",children:"eth2-client contract"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/eth2near/eth2near-block-relay-rs/src/main.rs#L108",children:"eth_client_contract"}),": is created using a contract_wrapper",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"let mut eth_client_contract = EthClientContract::new(get_eth_contract_wrapper(&config));"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/eth2near/contract_wrapper/src/eth_client_contract.rs",children:"EthClientContract Wrapper"}),": creates an instance of ",e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/contracts/near/eth2-client/src/lib.rs",children:"eth2-client contract"})," with the following arguments",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"network"})," - the name of Ethereum network such as ",e.jsx(n.code,{children:"mainnet"}),", ",e.jsx(n.code,{children:"goerli"}),", ",e.jsx(n.code,{children:"kiln"}),", etc."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"finalized_execution_header"})," - the finalized execution header to start initialization with."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"finalized_beacon_header"})," - correspondent finalized beacon header."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"current_sync_committee"})," - sync committee correspondent for finalized block."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"next_sync_committee"})," - sync committee for the next period after period for finalized block."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"hashes_gs_threshold"})," - the maximum number of stored finalized blocks."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"max_submitted_block_by_account"})," - the maximum number of unfinalized blocks which one relay can store in the client's storage."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"trusted_signer"})," - the account address of the trusted signer which is allowed to submit light client updates."]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/eth2near/eth2near-block-relay-rs/src/main.rs#L111",children:"Relayer is Created"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/eth2near/eth2near-block-relay-rs/src/main.rs#L111",children:"eth2near_relay"})," is created using the following arguments",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"let mut eth2near_relay = Eth2NearRelay::init(&config, get_eth_client_contract(&config), args.enable_binary_search, args.submit_only_finalized_blocks,);"})}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/eth2near/eth2near-block-relay-rs/src/main.rs",children:"Relayer is Started"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The relayer is started using ",e.jsx(n.code,{children:"eth2near_relay.run(None);"})]}),`
`,e.jsxs(n.li,{children:["This executes the ",e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/eth2near/eth2near-block-relay-rs/src/eth2near_relay.rs#L257",children:"eth2near_relay run function"})," ",e.jsx(n.code,{children:"pub fn run(&mut self, max_iterations: Option<u64>)"})," which runs until terminated doing using the following loop ",e.jsx(n.code,{children:"while !self.terminate"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"self.wait_for_synchronization(),"}),": gets the sync status"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"sleep(Duration::from_secs(12));"}),": waits for 12 seconds"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"self.get_max_slot_for_submission()"}),": gets the maximum slot for submission from Ethereum"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"self.get_last_eth2_slot_on_near"}),": gets the latest slot propogated from Ethereum to NEAR"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"if last_eth2_slot_on_near < max_slot_for_submission"}),": If there are slots to process",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"self.get_execution_blocks_between(last_eth2_slot_on_near + 1, max_slot_for_submission,),"}),": Get the execution blocks to be processed"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"self.submit_execution_blocks(headers, current_slot, &mut last_eth2_slot_on_near)"}),": submit them"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"were_submission_on_iter = true;"}),": flags that there were submissions"]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"were_submission_on_iter |= self.send_light_client_updates_with_checks(last_eth2_slot_on_near);"}),": send light_client updates with checks and updates the submission flag to true if if passes. Following is some key logic",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"self.is_enough_blocks_for_light_client_update"}),": Checks if there are enough blocks for a light client update",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"self.send_light_client_updates"})," calls ",e.jsx(n.code,{children:"send_light_client_update"})," which",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"if last_finalized_slot_on_eth >= last_finalized_slot_on_near + self.max_blocks_for_finalization"}),": checks if the gap is too big (i.e. we are at a new slot) between slot of finalized block on NEAR and ETH. If it is it sends a hand made client update (which will loop getting the new slots sync committees) otherwise it sends a regular client update (which propogates the block headers)",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"self.send_hand_made_light_client_update(last_finalized_slot_on_near);"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"let include_next_sync_committee = BeaconRPCClient::get_period_for_slot (last_finalized_slot_on_near) != BeaconRPCClient::get_period_for_slot(attested_slot);"})}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"self.send_regular_light_client_update(last_finalized_slot_on_eth, last_finalized_slot_on_near,);"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"self.send_specific_light_client_update(light_client_update)"})," is called for both regular and hand made updates.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"self.eth_client_contract.is_known_block"}),": Checks if the block is already known on the Etherum Client Contract on NEAR"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"self.verify_bls_signature_for_finality_update(&light_client_update)"}),": Verifies the BLS signatures. This calls ",e.jsx(n.code,{children:"is_correct_finality_update"})," in ",e.jsx(n.code,{children:"eth2near/finality-update-verify/src/lib.rs"})," *"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"self.eth_client_contract.send_light_client_update(light_client_update.clone())"}),": Updates the light client with the finalized block"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"self.beacon_rpc_client.get_block_number_for_slot(types::Slot::new(light_client_update.finality_update.header_update.beacon_header.slot.as_u64())),"}),": Validates Finalized block number is correct on Ethereum usng the ",e.jsx(n.code,{children:"beacon_rpc_client"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"sleep(Duration::from_secs(self.sleep_time_after_submission_secs));"}),": sleeps for the configured submission sleep time."]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"if !were_submission_on_iter {thread::sleep(Duration::from_secs(self.sleep_time_on_sync_secs));}"}),": if there were submissions sleep for however many seconds were configured for sync sleep time."]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.h4,{id:"ethereum-to-near-block-propagation-components",children:["Ethereum to NEAR block propagation components",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#ethereum-to-near-block-propagation-components",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/eth2near/contract_wrapper/src/eth_client_contract.rs",children:"EthClientContract Wrapper"}),": supports ",e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/contracts/near/eth2-client/src/lib.rs",children:"eth2-client contract"})," functions ",e.jsx(n.code,{children:"impl EthClientContractTrait for EthClientContract"})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"fn get_last_submitted_slot(&self) -> u64"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"fn is_known_block(&self, execution_block_hash: &H256) -> Result<bool, Box<dyn Error>>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"fn send_light_client_update(&mut self, light_client_update: LightClientUpdate,) -> Result<FinalExecutionOutcomeView, Box<dyn Error>>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"fn get_finalized_beacon_block_hash(&self) -> Result<H256, Box<dyn Error>>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"fn get_finalized_beacon_block_slot(&self) -> Result<u64, Box<dyn Error>>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"fn send_headers(&mut self, headers: &[BlockHeader], end_slot: u64,) -> Result<FinalExecutionOutcomeView, Box<dyn std::error::Error>>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"fn get_min_deposit(&self) -> Result<Balance, Box<dyn Error>>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"fn register_submitter(&self) -> Result<FinalExecutionOutcomeView, Box<dyn Error>>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"fn is_submitter_registered(&self,account_id: Option<AccountId>,) -> Result<bool, Box<dyn Error>>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"fn get_light_client_state(&self) -> Result<LightClientState, Box<dyn Error>>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"fn get_num_of_submitted_blocks_by_account(&self) -> Result<u32, Box<dyn Error>>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"fn get_max_submitted_blocks_by_account(&self) -> Result<u32, Box<dyn Error>>"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/contracts/near/eth2-client/src/lib.rs",children:"eth2-client contract storage"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"High level storage overview"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["provides the ",e.jsx(n.code,{children:"Eth2Client"})," public data stucture"]}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"pub struct Eth2Client {"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    /// If set, only light client updates by the trusted signer will be accepted"})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    trusted_signer: Option<"}),e.jsx(n.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"AccountId"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:">,"})]}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    /// Mask determining all paused functions"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    paused: Mask,"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    /// Whether the client validates the updates."})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    /// Should only be set to "}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"`false`"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" for debugging, testing, and diagnostic purposes"})]}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    validate_updates: bool,"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    /// Whether the client verifies BLS signatures."})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    verify_bls_signatures: bool,"})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    /// We store the hashes of the blocks for the past "}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"`hashes_gc_threshold`"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" headers."})]}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    /// Events that happen past this threshold cannot be verified by the client."})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    /// It is desirable that this number is larger than 7 days' worth of headers, which is roughly"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    /// 51k Ethereum blocks. So this number should be 51k in production."})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    hashes_gc_threshold: u64,"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    /// Network. e.g. mainnet, kiln"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    network: Network,"})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    /// Hashes of the finalized execution blocks mapped to their numbers. Stores up to "}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"`hashes_gc_threshold`"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" entries."})]}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    /// Execution block number -> execution block hash"})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    finalized_execution_blocks: LookupMap<"}),e.jsx(n.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"u64,"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#6CB6FF"},children:" H256"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:">,"})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    /// All unfinalized execution blocks' headers hashes mapped to their "}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"`HeaderInfo`"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"."})]}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    /// Execution block hash -> ExecutionHeaderInfo object"})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    unfinalized_headers: UnorderedMap<"}),e.jsx(n.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"H256,"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#6CB6FF"},children:" ExecutionHeaderInfo"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:">,"})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    /// "}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"`AccountId`"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"s mapped to their number of submitted headers."})]}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    /// Submitter account -> Num of submitted headers"})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    submitters: LookupMap<"}),e.jsx(n.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"AccountId,"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#6CB6FF"},children:" u32"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:">,"})]}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    /// Max number of unfinalized blocks allowed to be stored by one submitter account"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    /// This value should be at least 32 blocks (1 epoch), but the recommended value is 1024 (32 epochs)"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    max_submitted_blocks_by_account: u32,"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    // The minimum balance that should be attached to register a new submitter account"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    min_storage_balance_for_submitter: Balance,"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    /// Light client state"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    finalized_beacon_header: ExtendedBeaconBlockHeader,"})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    finalized_execution_header: LazyOption<"}),e.jsx(n.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"ExecutionHeaderInfo"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:">,"})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    current_sync_committee: LazyOption<"}),e.jsx(n.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"SyncCommittee"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:">,"})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    next_sync_committee: LazyOption<"}),e.jsx(n.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"SyncCommittee"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:">,"})]}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})})}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/contracts/near/eth2-client/Cargo.toml",children:"eth2-client dependencies"})," relys heavily on the ",e.jsx(n.a,{href:"https://github.com/aurora-is-near/lighthouse",children:"lighthouse"})," codebase for it's consensus and cryptogrphic primitives. See ",e.jsx(n.a,{href:"#cryptographic-primitives",children:"Cryptographic Primitives"})," for more information."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:'ethereum-types = "0.9.2"'})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:'eth-types =  { path = "../eth-types" }'})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:'eth2-utility =  { path = "../eth2-utility" }'})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:'tree_hash = { git = "https://github.com/aurora-is-near/lighthouse.git", rev = "b624c3f0d3c5bc9ea46faa14c9cb2d90ee1e1dec" }'})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:'merkle_proof = { git = "https://github.com/aurora-is-near/lighthouse.git", rev = "b624c3f0d3c5bc9ea46faa14c9cb2d90ee1e1dec" }'})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:'bls = { git = "https://github.com/aurora-is-near/lighthouse.git", optional = true, rev = "b624c3f0d3c5bc9ea46faa14c9cb2d90ee1e1dec", default-features = false, features = ["milagro"]}'})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:'admin-controlled =  { path = "../admin-controlled" }'})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:'near-sdk = "4.0.0"'})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:'borsh = "0.9.3"'})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:'bitvec = "1.0.0"'})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/contracts/near/eth2-client/src/lib.rs",children:"eth2-client contract functions"}),": provides the following functions in ",e.jsx(n.code,{children:"impl Eth2Client"})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"fn validate_light_client_update(&self, update: &LightClientUpdate)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"fn verify_finality_branch(&self, update: &LightClientUpdate, finalized_period: u64)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"fn verify_bls_signatures(&self, update: &LightClientUpdate, sync_committee_bits: BitVec<u8>, finalized_period: u64,)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"fn update_finalized_header(&mut self, finalized_header: ExtendedBeaconBlockHeader)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"fn commit_light_client_update(&mut self, update: LightClientUpdate)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"fn gc_finalized_execution_blocks(&mut self, mut header_number: u64)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"fn update_submitter(&mut self, submitter: &AccountId, value: i64)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"fn is_light_client_update_allowed(&self)"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/eth2near/eth2near-block-relay-rs/src/eth2near_relay.rs#L84",children:"Eth2NearRelay"}),": has the following public structure"]}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"pub struct Eth2NearRelay {"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    beacon_rpc_client: BeaconRPCClient,"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    eth1_rpc_client: Eth1RPCClient,"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    near_rpc_client: NearRPCClient,"})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    eth_client_contract: Box<"}),e.jsx(n.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"dyn"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#6CB6FF"},children:" EthClientContractTrait"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:">,"})]}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    headers_batch_size: u64,"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    ethereum_network: String,"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    interval_between_light_client_updates_submission_in_epochs: u64,"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    max_blocks_for_finalization: u64,"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    near_network_name: String,"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    last_slot_searcher: LastSlotSearcher,"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    terminate: bool,"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    submit_only_finalized_blocks: bool,"})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    next_light_client_update: Option<"}),e.jsx(n.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"LightClientUpdate"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:">,"})]}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    sleep_time_on_sync_secs: u64,"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    sleep_time_after_submission_secs: u64,"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    max_submitted_blocks_by_account: u32,"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/eth2near/eth2near-block-relay-rs/src/eth2near_relay.rs#L103",children:"Eth2NearRelay"}),": Implements the following functions"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"fn get_max_slot_for_submission(&self) -> Result<u64, Box<dyn Error>>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"fn get_last_eth2_slot_on_near(&mut self, max_slot: u64) -> Result<u64, Box<dyn Error>>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"fn get_last_finalized_slot_on_near(&self) -> Result<u64, Box<dyn Error>>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"fn get_last_finalized_slot_on_eth(&self) -> Result<u64, Box<dyn Error>>"})}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.strong,{children:e.jsx(n.code,{children:"pub fn run(&mut self, max_iterations: Option<u64>)"})}),`
`]}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"fn wait_for_synchronization(&self) -> Result<(), Box<dyn Error>>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"fn get_light_client_update_from_file(config: &Config, beacon_rpc_client: &BeaconRPCClient,) -> Result<Option<LightClientUpdate>, Box<dyn Error>>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"fn set_terminate(&mut self, iter_id: u64, max_iterations: Option<u64>)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"fn get_execution_blocks_between(&self, start_slot: u64, last_eth2_slot_on_eth_chain: u64,) -> Result<(Vec<BlockHeader>, u64), Box<dyn Error>>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"fn submit_execution_blocks(&mut self, headers: Vec<BlockHeader>, current_slot: u64,last_eth2_slot_on_near: &mut u64,)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"fn verify_bls_signature_for_finality_update(&mut self, light_client_update: &LightClientUpdate,) -> Result<bool, Box<dyn Error>>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"fn get_execution_block_by_slot(&self, slot: u64) -> Result<BlockHeader, Box<dyn Error>>"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/eth2near/eth2near-block-relay-rs/src/eth2near_relay.rs#L461",children:"Eth2NearRelay"}),": has a second implementation of functions for submitting light client updates"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"fn is_enough_blocks_for_light_client_update(&self, last_submitted_slot: u64,last_finalized_slot_on_near: u64, last_finalized_slot_on_eth: u64,) -> bool"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"fn is_shot_run_mode(&self) -> bool"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"fn send_light_client_updates_with_checks(&mut self, last_submitted_slot: u64) -> bool"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"fn send_light_client_updates(&mut self, last_submitted_slot: u64, last_finalized_slot_on_near: u64, last_finalized_slot_on_eth: u64,)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"fn send_light_client_update_from_file(&mut self, last_submitted_slot: u64)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"fn send_regular_light_client_update(&mut self, last_finalized_slot_on_eth: u64,last_finalized_slot_on_near: u64,)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"fn get_attested_slot(&mut self, last_finalized_slot_on_near: u64,) -> Result<u64, Box<dyn Error>>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"fn send_hand_made_light_client_update(&mut self, last_finalized_slot_on_near: u64)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"fn send_specific_light_client_update(&mut self, light_client_update: LightClientUpdate)"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/tree/master/eth2near/eth2-contract-init",children:"eth2-contract-init"})," includes (but not limited to) the following additional components"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/eth2near/eth2-contract-init/src/init_contract.rs",children:"init_contract.rs"}),": Verifies light client snapshot and initializes the Ethereum Light Contract on Near.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"pub fn verify_light_client_snapshot(block_root: String, light_client_snapshot: &LightClientSnapshotWithProof,) -> bool"}),": Verifies the light client by checking the snapshot format getting the current consensus branch and verifying it via a merkle proof."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"pub fn init_contract(config: &Config, eth_client_contract: &mut EthClientContract, mut init_block_root: String,) -> Result<(), Box<dyn std::error::Error>>"}),": Initializes the Ethereum Light Client Contract on Near."]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/tree/master/eth2near/eth_rpc_client",children:"eth_rpc_client"})," includes (but not limited to) the following additional components"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/eth2near/eth2near-block-relay-rs/src/eth1_rpc_client.rs",children:"eth1_rpc_client.rs"}),": Is used to get block headers and check sync status. It has the following functions"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"pub fn new(endpoint_url: &str) -> Self"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"pub fn get_block_header_by_number(&self, number: u64) -> Result<BlockHeader, Box<dyn Error>>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"pub fn is_syncing(&self) -> Result<bool, Box<dyn Error>>"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/eth2near/eth2near-block-relay-rs/src/execution_block_proof.rs",children:"execution_block_proof.rs"}),": ",e.jsx(n.code,{children:"ExecutionBlockProof"})," contains a ",e.jsx(n.code,{children:"block_hash"})," (execution block) and a proof of its inclusion in the ",e.jsx(n.code,{children:"BeaconBlockBody"})," tree hash. The ",e.jsx(n.code,{children:"block_hash"})," is the 12th field in execution_payload, which is the 9th field in ",e.jsx(n.code,{children:"BeaconBlockBody"}),". The first 4 elements in proof correspondent to the proof of inclusion of ",e.jsx(n.code,{children:"block_hash"})," in Merkle tree built for ",e.jsx(n.code,{children:"ExecutionPayload"}),". The last 4 elements of the proof of ",e.jsx(n.code,{children:"ExecutionPayload"})," in the Merkle tree are built on high-level ",e.jsx(n.code,{children:"BeaconBlockBody"})," fields. The proof starts from the leaf. It has the following structure and functions"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"pub struct ExecutionBlockProof {block_hash: H256, proof: [H256; Self::PROOF_SIZE],}"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"pub fn construct_from_raw_data(block_hash: &H256, proof: &[H256; Self::PROOF_SIZE]) -> Self"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"pub fn construct_from_beacon_block_body(beacon_block_body: &BeaconBlockBody<MainnetEthSpec>,) -> Result<Self, Box<dyn Error>>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"pub fn get_proof(&self) -> [H256; Self::PROOF_SIZE]"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"pub fn get_execution_block_hash(&self) -> H256"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"pub fn verify_proof_for_hash(&self, beacon_block_body_hash: &H256,) -> Result<bool, IncorrectBranchLength>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"fn merkle_root_from_branch(leaf: H256, branch: &[H256], depth: usize, index: usize,) -> Result<H256, IncorrectBranchLength>"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/eth2near/eth_rpc_client/src/beacon_block_body_merkle_tree.rs",children:"beacon_block_body_merkle_tree.rs"}),": implements merkle trees for the Beacon and the ExecutionPayload"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"BeaconBlockBodyMerkleTree"})," is built on the ",e.jsx(n.code,{children:"BeaconBlockBody"})," data structure, where the leaves of the Merkle Tree are the hashes of the high-level fields of the ",e.jsx(n.code,{children:"BeaconBlockBody"}),". The hashes of each element are produced by using ",e.jsx(n.code,{children:"ssz"})," serialization."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ExecutionPayloadMerkleTree"})," is a built on the ",e.jsx(n.code,{children:"ExecutionPayload"})," data structure, where the leaves of the Merkle Tree are the hashes of the high-level fields of the ",e.jsx(n.code,{children:"ExecutionPayload"}),". The hashes of each element are produced by using ",e.jsx(n.code,{children:"ssz"})," serialization. ",e.jsx(n.code,{children:"ExecutionPayload"})," is one of the field in BeaconBlockBody. The hash of the root of ",e.jsx(n.code,{children:"ExecutionPlayloadMerkleTree"})," is the 9th leaf in BeaconBlockBody Merkle Tree."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/eth2near/eth_rpc_client/src/beacon_rpc_client.rs",children:"beacon_rpc_client.rs"}),": allows getting beacon block body, beacon block header and light client updates using ",e.jsx(n.a,{href:"https://ethereum.github.io/beacon-APIs/",children:"Beacon RPC API"}),". It has the following functions"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"pub fn new(endpoint_url: &str, timeout_seconds: u64, timeout_state_seconds: u64) -> Self"}),": Creates ",e.jsx(n.code,{children:"BeaconRPCClient"})," for the given BeaconAPI ",e.jsx(n.code,{children:"endpoint_url"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"pub fn get_beacon_block_body_for_block_id(&self, block_id: &str,) -> Result<BeaconBlockBody<MainnetEthSpec>, Box<dyn Error>>"}),": Returns ",e.jsx(n.code,{children:"BeaconBlockBody"})," struct for the given ",e.jsx(n.code,{children:"block_id"}),". It uses the following arguments",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"block_id"})," - Block identifier. Can be one of: ",e.jsx(n.code,{children:`"head" (canonical head in node's view),"genesis", "finalized", <slot>, <hex encoded blockRoot with 0x prefix>`}),"(see ",e.jsx(n.a,{href:"https://ethereum.github.io/beacon-APIs/#/Beacon/getBlockV2",children:"beacon-APIs/#/Beacon/getBlockV2"}),")."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"pub fn get_beacon_block_header_for_block_id(&self, block_id: &str,) -> Result<types::BeaconBlockHeader, Box<dyn Error>>"}),": Returns ",e.jsx(n.code,{children:"BeaconBlockHeader"})," struct for the given ",e.jsx(n.code,{children:"block_id"}),". It uses the following arguments",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"block_id"})," - Block identifier. Can be one of: ",e.jsx(n.code,{children:`"head" (canonical head in node's view),"genesis", "finalized", <slot>, <hex encoded blockRoot with 0x prefix>`}),"(see ",e.jsx(n.a,{href:"https://ethereum.github.io/beacon-APIs/#/Beacon/getBlockV2",children:"beacon-APIs/#/Beacon/getBlockV2"}),")."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"pub fn get_light_client_update(&self, period: u64,) -> Result<LightClientUpdate, Box<dyn Error>>"}),": Returns ",e.jsx(n.code,{children:"LightClientUpdate"})," struct for the given ",e.jsx(n.code,{children:"period"}),". It uses the following arguments",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"period"})," - period id for which ",e.jsx(n.code,{children:"LightClientUpdate"})," is fetched. On Mainnet, one period consists of 256 epochs, and one epoch consists of 32 slots"]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"pub fn get_bootstrap(&self, block_root: String,) -> Result<LightClientSnapshotWithProof, Box<dyn Error>>"}),": Fetch a bootstrapping state with a proof to a trusted block root. The trusted block root should be fetched with similar means to a weak subjectivity checkpoint. Only block roots for checkpoints are guaranteed to be available."]}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"pub fn get_checkpoint_root(&self) -> Result<String, Box<dyn Error>>"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"pub fn get_last_finalized_slot_number(&self) -> Result<types::Slot, Box<dyn Error>>"}),": Return the last finalized slot in the Beacon chain"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"pub fn get_last_slot_number(&self) -> Result<types::Slot, Box<dyn Error>>"}),": Return the last slot in the Beacon chain"]}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"pub fn get_slot_by_beacon_block_root(&self, beacon_block_hash: H256,) -> Result<u64, Box<dyn Error>>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"pub fn get_block_number_for_slot(&self, slot: types::Slot) -> Result<u64, Box<dyn Error>>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"pub fn get_finality_light_client_update(&self) -> Result<LightClientUpdate, Box<dyn Error>>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"pub fn get_finality_light_client_update_with_sync_commity_update(&self,) -> Result<LightClientUpdate, Box<dyn Error>>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"pub fn get_beacon_state(&self, state_id: &str,) -> Result<BeaconState<MainnetEthSpec>, Box<dyn Error>>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"pub fn is_syncing(&self) -> Result<bool, Box<dyn Error>>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"fn get_json_from_client(client: &Client, url: &str) -> Result<String, Box<dyn Error>>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"fn get_json_from_raw_request(&self, url: &str) -> Result<String, Box<dyn Error>>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"fn get_body_json_from_rpc_result(block_json_str: &str,) -> Result<std::string::String, Box<dyn Error>>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"fn get_header_json_from_rpc_result(json_str: &str,) -> Result<std::string::String, Box<dyn Error>>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"fn get_attested_header_from_light_client_update_json_str(light_client_update_json_str: &str,) -> Result<BeaconBlockHeader, Box<dyn Error>>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"fn get_sync_aggregate_from_light_client_update_json_str(light_client_update_json_str: &str,) -> Result<SyncAggregate, Box<dyn Error>>"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"fn get_signature_slot(&self, light_client_update_json_str: &str,) -> Result<Slot, Box<dyn Error>>"}),": ",e.jsx(n.code,{children:"signature_slot"})," is not provided in the current API. The slot is brute-forced until ",e.jsx(n.code,{children:"SyncAggregate"})," in ",e.jsx(n.code,{children:"BeconBlockBody"})," in the current slot is equal to ",e.jsx(n.code,{children:"SyncAggregate"})," in ",e.jsx(n.code,{children:"LightClientUpdate"})]}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"fn get_finality_update_from_light_client_update_json_str(&self, light_client_update_json_str: &str,) -> Result<FinalizedHeaderUpdate, Box<dyn Error>>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"fn get_sync_committee_update_from_light_client_update_json_str(light_client_update_json_str: &str,) -> Result<SyncCommitteeUpdate, Box<dyn Error>>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"pub fn get_period_for_slot(slot: u64) -> u64"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"pub fn get_non_empty_beacon_block_header(&self, start_slot: u64,) -> Result<types::BeaconBlockHeader, Box<dyn Error>>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"fn check_block_found_for_slot(&self, json_str: &str) -> Result<(), Box<dyn Error>>"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/eth2near/eth_rpc_client/src/hand_made_finality_light_client_update.rs",children:"hand_made_finality_light_client_update.rs"}),": Has two implementations"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The first implementation which calls functions in the second",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"pub fn get_finality_light_client_update(beacon_rpc_client: &BeaconRPCClient, attested_slot: u64, include_next_sync_committee: bool,) -> Result<LightClientUpdate, Box<dyn Error>>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"pub fn get_finality_light_client_update_from_file(beacon_rpc_client: &BeaconRPCClient, file_name: &str,) -> Result<LightClientUpdate, Box<dyn Error>>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"pub fn get_light_client_update_from_file_with_next_sync_committee(beacon_rpc_client: &BeaconRPCClient, attested_state_file_name: &str, finality_state_file_name: &str,) -> Result<LightClientUpdate, Box<dyn Error>>"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["The second implementation",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"fn get_attested_slot_with_enough_sync_committee_bits_sum(beacon_rpc_client: &BeaconRPCClient,attested_slot: u64,) -> Result<(u64, u64), Box<dyn Error>>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"fn get_state_from_file(file_name: &str) -> Result<BeaconState<MainnetEthSpec>, Box<dyn Error>>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"fn get_finality_light_client_update_for_state(beacon_rpc_client: &BeaconRPCClient,attested_slot: u64, signature_slot: u64, beacon_state: BeaconState<MainnetEthSpec>, finality_beacon_state: Option<BeaconState<MainnetEthSpec>>,) -> Result<LightClientUpdate, Box<dyn Error>>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"fn get_next_sync_committee(beacon_state: &BeaconState<MainnetEthSpec>,) -> Result<SyncCommitteeUpdate, Box<dyn Error>>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"fn from_lighthouse_beacon_header(beacon_header: &BeaconBlockHeader,) -> eth_types::eth2::BeaconBlockHeader"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"fn get_sync_committee_bits(sync_committee_signature: &types::SyncAggregate<MainnetEthSpec>,) -> Result<[u8; 64], Box<dyn Error>>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"fn get_finality_branch(beacon_state: &BeaconState<MainnetEthSpec>,) -> Result<Vec<H256>, Box<dyn Error>>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"fn get_finality_update(finality_header: &BeaconBlockHeader, beacon_state: &BeaconState<MainnetEthSpec>, finalized_block_body: &BeaconBlockBody<MainnetEthSpec>,) -> Result<FinalizedHeaderUpdate, Box<dyn Error>>"})}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/eth2near/eth_rpc_client/src/light_client_snapshot_with_proof.rs",children:"light_client_snapshot_with_proof.rs"}),": contains the structure for ",e.jsx(n.code,{children:"LightClientSnapshotWithProof"})]}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"pub struct LightClientSnapshotWithProof {"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    pub beacon_header: BeaconBlockHeader,"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    pub current_sync_committee: SyncCommittee,"})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    pub current_sync_committee_branch: Vec<"}),e.jsx(n.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"H256"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:">,"})]}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})})}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/tree/master/eth2near/eth2near-block-relay-rs",children:"eth2near-block-relay-rs"})," includes (but not limited to) the following additional components"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/eth2near/eth2near-block-relay-rs/src/config.rs",children:"config.rs"}),":"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/eth2near/eth2near-block-relay-rs/src/last_slot_searcher.rs",children:"last_slot_searcher.rs"}),": Implementation of functions for searching last slot on NEAR contract. Supports both binary and linear searches.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"pub fn get_last_slot(&mut self, last_eth_slot: u64, beacon_rpc_client: &BeaconRPCClient, eth_client_contract: &Box<dyn EthClientContractTrait>,) -> Result<u64, Box<dyn Error>>"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"n binary_slot_search(&self, slot: u64, finalized_slot: u64, last_eth_slot: u64, beacon_rpc_client: &BeaconRPCClient, eth_client_contract: &Box<dyn EthClientContractTrait>,) -> Result<u64, Box<dyn Error>>"})," : Search for the slot before the first unknown slot on NEAR. Assumptions: (1) start_slot is known on NEAR (2) last_slot is unknown on NEAR. Return error in case of problem with network connection."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"fn binsearch_slot_forward(&self, slot: u64, max_slot: u64, beacon_rpc_client: &BeaconRPCClient,eth_client_contract: &Box<dyn EthClientContractTrait>,) -> Result<u64, Box<dyn Error>> {"}),": Search for the slot before the first unknown slot on NEAR. Assumptions: (1) start_slot is known on NEAR (2) last_slot is unknown on NEAR. Return error in case of problem with network connection."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"fn binsearch_slot_range(&self, start_slot: u64, last_slot: u64, beacon_rpc_client: &BeaconRPCClient, eth_client_contract: &Box<dyn EthClientContractTrait>,) -> Result<u64, Box<dyn Error>>"}),": Search for the slot before the first unknown slot on NEAR. Assumptions: (1) start_slot is known on NEAR (2) last_slot is unknown on NEAR. Return error in case of problem with network connection."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"fn linear_slot_search(&self, slot: u64, finalized_slot: u64, last_eth_slot: u64, beacon_rpc_client: &BeaconRPCClient, eth_client_contract: &Box<dyn EthClientContractTrait>,) -> Result<u64, Box<dyn Error>>"}),": Returns the last slot known with block known on NEAR. ",e.jsx(n.code,{children:"Slot"})," -- expected last known slot. ",e.jsx(n.code,{children:"finalized_slot"})," -- last finalized slot on NEAR, assume as known slot. ",e.jsx(n.code,{children:"last_eth_slot"})," -- head slot on Eth."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"fn linear_search_forward(&self, slot: u64, max_slot: u64, beacon_rpc_client: &BeaconRPCClient,eth_client_contract: &Box<dyn EthClientContractTrait>,) -> Result<u64, Box<dyn Error>>"}),": Returns the slot before the first unknown block on NEAR. The search range is [slot .. max_slot). If there is no unknown block in this range max_slot - 1 will be returned. Assumptions: (1) block for slot is submitted to NEAR. (2) block for max_slot is not submitted to NEAR."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"fn linear_search_backward(&self, start_slot: u64, last_slot: u64, beacon_rpc_client: &BeaconRPCClient, eth_client_contract: &Box<dyn EthClientContractTrait>,) -> Result<u64, Box<dyn Error>>"}),": Returns the slot before the first unknown block on NEAR. The search range is [last_slot .. start_slot). If no such block are found the start_slot will be returned. Assumptions: (1) block for start_slot is submitted to NEAR (2) block for last_slot + 1 is not submitted to NEAR."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"fn find_left_non_error_slot(&self, left_slot: u64, right_slot: u64, step: i8, beacon_rpc_client: &BeaconRPCClient, eth_client_contract: &Box<dyn EthClientContractTrait>,) -> (u64, bool)"}),": Find the leftmost non-empty slot. Search range: [left_slot, right_slot). Returns pair: (1) slot_id and (2) is this block already known on Eth client on NEAR. Assume that right_slot is non-empty and it's block were submitted to NEAR, so if non correspondent block is found we return (right_slot, false)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"fn block_known_on_near( &self, slot: u64, beacon_rpc_client: &BeaconRPCClient,eth_client_contract: &Box<dyn EthClientContractTrait>,) -> Result<bool, Box<dyn Error>>"}),": Check if the block for current slot in Eth2 already were submitted to NEAR. Returns Error if slot doesn't contain any block."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/eth2near/eth2near-block-relay-rs/src/main.rs",children:"main.rs"}),": ",e.jsx(n.a,{href:"https://docs.rs/clap/latest/clap/",children:"Command Line Argument Parser"})," used to run the Ethereum to Near Block Relay. It contains the following functions",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"fn get_eth_contract_wrapper(config: &Config) -> Box<dyn ContractWrapper>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"fn get_dao_contract_wrapper(config: &Config) -> Box<dyn ContractWrapper>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"fn get_eth_client_contract(config: &Config) -> Box<dyn EthClientContractTrait>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"fn init_log(args: &Arguments, config: &Config)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"fn main() -> Result<(), Box<dyn std::error::Error>>"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/eth2near/eth2near-block-relay-rs/src/near_rpc_client.rs",children:"near_rpc_client.rs"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"pub fn new(endpoint_url: &str) -> Self"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"pub fn check_account_exists(&self, account_id: &str) -> Result<bool, Box<dyn Error>>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"pub fn is_syncing(&self) -> Result<bool, Box<dyn Error>>"})}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.h4,{id:"ethereum-light-client-finality-update-verify-components",children:["Ethereum Light Client Finality Update Verify Components",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#ethereum-light-client-finality-update-verify-components",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/tree/master/eth2near/finality-update-verify",children:"finality-update-verify"})," is called from ",e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/eth2near/eth2near-block-relay-rs/src/eth2near_relay.rs#L422",children:"fn verify_bls_signature_for_finality_update"})," to verify signatures as part of light_client updates. It relies heavily on the ",e.jsx(n.a,{href:"https://github.com/aurora-is-near/lighthouse",children:"lighthouse"})," codebase for it's consensus and cryptogrphic primitives. See ",e.jsx(n.a,{href:"#cryptographic-primitives",children:"Cryptographic Primitives"})," for more information."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Dependencies in ",e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/eth2near/finality-update-verify/Cargo.toml",children:"Cargo.toml"})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:'eth-types = { path ="../../contracts/near/eth-types/", features = ["eip1559"]}'})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:'bls = { git = "https://github.com/aurora-is-near/lighthouse.git", rev = "b624c3f0d3c5bc9ea46faa14c9cb2d90ee1e1dec" }'})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:'eth2-utility  = { path ="../../contracts/near/eth2-utility"}'})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:'tree_hash = { git = "https://github.com/aurora-is-near/lighthouse.git", rev = "b624c3f0d3c5bc9ea46faa14c9cb2d90ee1e1dec" }'})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:'types =  { git = "https://github.com/aurora-is-near/lighthouse.git", rev = "b624c3f0d3c5bc9ea46faa14c9cb2d90ee1e1dec" }'})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:'bitvec = "1.0.0"'})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Functions in ",e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/eth2near/finality-update-verify/src/lib.rs",children:"lib.rs"})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"fn h256_to_hash256(hash: H256) -> Hash256"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"fn tree_hash_h256_to_eth_type_h256(hash: tree_hash::Hash256) -> eth_types::H256"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"fn to_lighthouse_beacon_block_header(bridge_beacon_block_header: &BeaconBlockHeader,) -> types::BeaconBlockHeader"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"pub fn is_correct_finality_update(ethereum_network: &str, light_client_update: &LightClientUpdate,   sync_committee: SyncCommittee,) -> Result<bool, Box<dyn Error>>"})}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.h4,{id:"cryptographic-primitives",children:["Cryptographic Primitives",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#cryptographic-primitives",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["Following are cryptographic primitives used in the ",e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/tree/master/contracts/near/eth2-client",children:"eth2-client contract"})," and ",e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/tree/master/eth2near/finality-update-verify",children:"finality-update-verify"}),". Many are from the ",e.jsx(n.a,{href:"https://github.com/aurora-is-near/lighthouse",children:"lighthouse"})," codebase. Specifically ",e.jsx(n.a,{href:"https://github.com/aurora-is-near/lighthouse/tree/stable/consensus",children:"consensus"})," and ",e.jsx(n.a,{href:"https://github.com/aurora-is-near/lighthouse/tree/stable/crypto",children:"crypto"})," functions."]}),`
`,e.jsx(n.p,{children:"Some common primitives"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://docs.rs/bitvec/1.0.1/bitvec/",children:"bitvec"}),": Addresses memory by bits, for packed collections and bitfields"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://docs.rs/eth2_serde_utils/0.1.0/eth2_serde_utils/",children:"eth2_serde_utils"}),": Serialization and deserialization utilities useful for JSON representations of Ethereum 2.0 types."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://docs.rs/eth2_hashing/0.2.0/eth2_hashing/",children:"eth2_hashing"}),": Hashing primitives used in Ethereum 2.0"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://docs.rs/blst/0.3.10/blst/",children:"blst"}),": The blst crate provides a rust interface to the blst BLS12-381 signature library."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://docs.rs/tree_hash/0.4.0/tree_hash/",children:"tree_hash"}),": Efficient Merkle-hashing as used in Ethereum 2.0"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://docs.rs/eth2_ssz_types/0.2.1/ssz_types/",children:"eth2_ssz_types"}),": Provides types with unique properties required for SSZ serialization and Merklization."]}),`
`]}),`
`,e.jsx(n.p,{children:"Some Primitives from Lighthouse"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/lighthouse/tree/stable/crypto/bls",children:"bls"}),": ",e.jsx(n.a,{href:"https://en.wikipedia.org/wiki/BLS_digital_signature",children:"Boneh–Lynn–Shacham"})," digital signature support",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/lighthouse/tree/stable/crypto/bls/src/impls",children:"impls"}),": Implementations",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/aurora-is-near/lighthouse/blob/stable/crypto/bls/src/impls/blst.rs",children:"blst"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/aurora-is-near/lighthouse/blob/stable/crypto/bls/src/impls/fake_crypto.rs",children:"fake_crypto"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/lighthouse/blob/stable/crypto/bls/src/impls/milagro.rs",children:"milagro"}),": support for ",e.jsx(n.a,{href:"https://milagro.apache.org/docs/milagro-intro/",children:"Apache Milagro"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/lighthouse/tree/stable/crypto/bls/src",children:"functionality"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/aurora-is-near/lighthouse/blob/stable/crypto/bls/src/generic_aggregate_public_key.rs",children:"generic_aggregate_public_key"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/aurora-is-near/lighthouse/blob/stable/crypto/bls/src/generic_aggregate_signature.rs",children:"generic_aggregate_signature"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/aurora-is-near/lighthouse/blob/stable/crypto/bls/src/generic_keypair.rs",children:"generic_keypair"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/aurora-is-near/lighthouse/blob/stable/crypto/bls/src/generic_public_key.rs",children:"generic_public_key"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/aurora-is-near/lighthouse/blob/stable/crypto/bls/src/generic_public_key_bytes.rs",children:"generic_public_key_bytes"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/aurora-is-near/lighthouse/blob/stable/crypto/bls/src/generic_secret_key.rs",children:"generic_secret_key"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/aurora-is-near/lighthouse/blob/stable/crypto/bls/src/generic_signature.rs",children:"generic_signature"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/aurora-is-near/lighthouse/blob/stable/crypto/bls/src/generic_signature_bytes.rs",children:"generic_signature_bytes"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/aurora-is-near/lighthouse/blob/stable/crypto/bls/src/generic_signature_set.rs",children:"generic_signature_set"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/aurora-is-near/lighthouse/blob/stable/crypto/bls/src/get_withdrawal_credentials.rs",children:"get_withdrawal_credentials"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/aurora-is-near/lighthouse/blob/stable/crypto/bls/src/zeroize_hash.rs",children:"zeroize_hash"})}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/aurora-is-near/lighthouse/tree/stable/consensus/merkle_proof",children:"merkle_proof"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/aurora-is-near/lighthouse/tree/stable/consensus/tree_hash",children:"tree_hash"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/lighthouse/tree/stable/consensus/types/src",children:"types"}),": Implements Ethereum 2.0 types including but not limited to",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/aurora-is-near/lighthouse/blob/stable/consensus/types/src/attestation.rs",children:"attestation"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/aurora-is-near/lighthouse/blob/stable/consensus/types/src/beacon_block.rs",children:"beacon_block"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/aurora-is-near/lighthouse/blob/stable/consensus/types/src/beacon_committee.rs",children:"beacon_committee"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/aurora-is-near/lighthouse/blob/stable/consensus/types/src/beacon_state.rs",children:"beacon_state"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/aurora-is-near/lighthouse/blob/stable/consensus/types/src/builder_bid.rs",children:"builder_bid"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/aurora-is-near/lighthouse/blob/stable/consensus/types/src/chain_spec.rs",children:"chain_spec"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/aurora-is-near/lighthouse/blob/stable/consensus/types/src/checkpoint.rs",children:"checkpoint"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/lighthouse/blob/stable/consensus/types/src/contribution_and_proof.rs",children:"contribution_and_proof"}),": A Validators aggregate sync committee contribution and selection proof."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/lighthouse/blob/stable/consensus/types/src/deposit.rs",children:"deposit"}),": A deposit to potentially become a beacon chain validator."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/lighthouse/blob/stable/consensus/types/src/enr_fork_id.rs",children:"enr_fork_id"}),": Specifies a fork which allows nodes to identify each other on the network. This fork is used in a nodes local ENR."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/lighthouse/blob/stable/consensus/types/src/eth_spec.rs",children:"eth_spec"}),": Ethereum Foundation specifications."]}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/aurora-is-near/lighthouse/blob/stable/consensus/types/src/execution_block_hash.rs",children:"execution_block_hash"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/aurora-is-near/lighthouse/blob/stable/consensus/types/src/execution_payload.rs",children:"execution_payload"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/lighthouse/blob/stable/consensus/types/src/fork.rs",children:"fork"}),": Specifies a fork of the ",e.jsx(n.code,{children:"BeaconChain"}),", to prevent replay attacks."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/lighthouse/blob/stable/consensus/types/src/free_attestation.rs",children:"free_attestation"}),": Note: this object does not actually exist in the spec. We use it for managing attestations that have not been aggregated."]}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/aurora-is-near/lighthouse/blob/stable/consensus/types/src/payload.rs",children:"payload"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/lighthouse/blob/stable/consensus/types/src/signed_aggregate_and_proof.rs",children:"signed_aggregate_and_proof"}),": A Validators signed aggregate proof to publish on the ",e.jsx(n.code,{children:"beacon_aggregate_and_proof"})," gossipsub topic."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/lighthouse/blob/stable/consensus/types/src/signed_beacon_block.rs",children:"signed_beacon_block"}),": A ",e.jsx(n.code,{children:"BeaconBlock"})," and a signature from its proposer."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/lighthouse/blob/stable/consensus/types/src/slot_data.rs",children:"slot_data"}),": A trait providing a ",e.jsx(n.code,{children:"Slot"})," getter for messages that are related to a single slot. Useful in making parts of attestation and sync committee processing generic."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/lighthouse/blob/stable/consensus/types/src/slot_epoch.rs",children:"slot_epoch"}),": The ",e.jsx(n.code,{children:"Slot"})," and ",e.jsx(n.code,{children:"Epoch"})," types are defined as new types over u64 to enforce type-safety between the two types. Note: Time on Ethereum 2.0 Proof of Stake is divided into slots and epochs. One slot is 12 seconds. One epoch is 6.4 minutes, consisting of 32 slots. One block can be created for each slot."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/lighthouse/blob/stable/consensus/types/src/sync_aggregate.rs",children:"sync_aggregate"}),": Create a ",e.jsx(n.code,{children:"SyncAggregate"})," from a slice of ",e.jsx(n.code,{children:"SyncCommitteeContribution"}),"s. Equivalent to ",e.jsx(n.code,{children:"process_sync_committee_contributions"})," from the spec."]}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/aurora-is-near/lighthouse/blob/stable/consensus/types/src/sync_committee.rs",children:"sync_committee"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/lighthouse/blob/stable/consensus/types/src/tree_hash_impls.rs",children:"tree_hash_impls"}),": contains custom implementations of ",e.jsx(n.code,{children:"CachedTreeHash"})," for ETH2-specific types. It makes some assumptions about the layouts and update patterns of other structs in this crate, and should be updated carefully whenever those structs are changed."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/lighthouse/blob/stable/consensus/types/src/validator.rs",children:"validator"}),": Information about a ",e.jsx(n.code,{children:"BeaconChain"})," validator."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.p,{children:"Some Smart Contracts deployed on Ethereum"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/tree/master/contracts/eth/nearprover",children:"nearprover"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/contracts/eth/nearprover/contracts/ProofDecoder.sol",children:"ProofDecoder.sol"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/contracts/eth/nearprover/contracts/NearProver.sol",children:"NearProver.sol"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/tree/master/contracts/eth/nearbridge/contracts",children:"nearbridge"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/contracts/eth/nearbridge/contracts/NearDecoder.sol",children:"NearDecoder.sol"}),": handles decoing of Public Keys, Signatures, BlockProducers and LightClientBlocks using ",e.jsx(n.code,{children:"Borsh.sol"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/contracts/eth/nearbridge/contracts/Utils.sol",children:"Utils.sol"}),": handles reading and writing to memory, memoryToBytes and has functions such as ",e.jsx(n.code,{children:"keccak256Raw"})," and ",e.jsx(n.code,{children:"sha256Raw"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/contracts/eth/nearbridge/contracts/Borsh.sol",children:"Borsh.sol"}),": ",e.jsx(n.a,{href:"https://borsh.io/",children:"Borsh"}),": Binary Object Representation Serializer for Hashing. It is meant to be used in security-critical projects as it prioritizes consistency, safety, speed; and comes with a strict specification."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/contracts/eth/nearbridge/contracts/Ed25519.sol",children:"Ed25519.sol"}),": ",e.jsx(n.a,{href:"https://ed25519.cr.yp.to/",children:"Ed25519"})," high-speed high-security signatures"]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.p,{children:"Some Primitives from NEAR Rainbow Bridge"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/tree/master/contracts/near/eth-types",children:"eth-types"}),": utilities to serialize and encode eth2 types using ",e.jsx(n.a,{href:"https://borsh.io/",children:"borsh"})," and ",e.jsx(n.a,{href:"https://ethereum.org/en/developers/docs/data-structures-and-encoding/rlp",children:"rlp"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/tree/master/contracts/near/eth2-utility",children:"eth2-utility"}),": Utility functions used for Ethereum 2.0 Consensus. Functions include",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"fn from_str(input: &str) -> Result<Network, Self::Err>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"pub fn new(network: &Network) -> Self"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"pub fn compute_fork_version(&self, epoch: Epoch) -> Option<ForkVersion>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"pub fn compute_fork_version_by_slot(&self, slot: Slot) -> Option<ForkVersion>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"pub const fn compute_epoch_at_slot(slot: Slot) -> u64"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"pub const fn compute_sync_committee_period(slot: Slot) -> u64"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"pub const fn floorlog2(x: u32) -> u32"}),": Compute floor of log2 of a u32."]}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"pub const fn get_subtree_index(generalized_index: u32) -> u32"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"pub fn compute_domain(domain_constant: DomainType, fork_version: ForkVersion, genesis_validators_root: H256,) -> H256"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"pub fn compute_signing_root(object_root: H256, domain: H256) -> H256"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"pub fn get_participant_pubkeys(public_keys: &[PublicKeyBytes], sync_committee_bits: &BitVec<u8, Lsb0>,) -> Vec<PublicKeyBytes>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"pub fn convert_branch(branch: &[H256]) -> Vec<ethereum_types::H256>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"pub fn validate_beacon_block_header_update(header_update: &HeaderUpdate) -> bool"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"pub fn calculate_min_storage_balance_for_submitter(max_submitted_blocks_by_account: u32,) -> Balance"})}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.h3,{id:"near-rainbow-bridge-near-light-client-walkthrough",children:["Near Rainbow Bridge Near Light Client Walkthrough",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#near-rainbow-bridge-near-light-client-walkthrough",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["The following is a walkthrough of how a transaction executed on NEAR is propogated to Ethereum's ",e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/tree/master/contracts/eth/nearbridge",children:"nearbridge"}),". See ",e.jsx(n.a,{href:"#nearbridge-cryptographic-primitives",children:"nearbridge Cryptographic Primitives"})," for more information on the cryptography used."]}),`
`,e.jsx(n.strong,{children:"NearOnEthClient Overview"}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["The following is an excerpt from a blog by near on ",e.jsx(n.a,{href:"https://near.org/blog/eth-near-rainbow-bridge/",children:"eth-near-rainbow-bridge"})]})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"NearOnEthClient is an implementation of the NEAR light client in Solidity as an Ethereum contract. Unlike EthOnNearClient it does not need to verify every single NEAR header and can skip most of them as long as it verifies at least one header per NEAR epoch, which is about 43k blocks and lasts about half a day. As a result, NearOnEthClient can memorize hashes of all submitted NEAR headers in history, so if you are making a transfer from NEAR to Ethereum and it gets interrupted you don’t need to worry and you can resume it any time, even months later. Another useful property of the NEAR light client is that every NEAR header contains a root of the merkle tree computed from all headers before it. As a result, if you have one NEAR header you can efficiently verify any event that happened in any header before it."}),`
`,e.jsx(n.p,{children:"Another useful property of the NEAR light client is that it only accepts final blocks, and final blocks cannot leave the canonical chain in NEAR. This means that NearOnEthClient does not need to worry about forks."}),`
`,e.jsxs(n.p,{children:["However, unfortunately, NEAR uses ",e.jsx(n.a,{href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-665.mdx",children:"Ed25519"})," to sign messages of the validators who approve the blocks, and this signature is not available as an EVM precompile. It makes verification of all signatures of a single NEAR header prohibitively expensive. So technically, we cannot verify one NEAR header within one contract call to NearOnEthClient. Therefore we adopt the ",e.jsx(n.a,{href:"https://medium.com/@deaneigenmann/optimistic-contracts-fb75efa7ca84",children:"optimistic approach"})," where NearOnEthClient verifies everything in the NEAR header except the signatures. Then anyone can challenge a signature in a submitted header within a 4-hour challenge window. The challenge requires verification of a single Ed25519 signature which would cost about 500k Ethereum gas (expensive, but possible). The user submitting the NEAR header would have to post a bond in Ethereum tokens, and a successful challenge would burn half of the bond and return the other half to the challenger. The bond should be large enough to pay for the gas even if the gas price increases exponentially during the 4 hours. For instance, a 20 ETH bond would cover gas price hikes up to 20000 Gwei. This optimistic approach requires having a watchdog service that monitors submitted NEAR headers and challenges any headers with invalid signatures. For added security, independent users can run several watchdog services."]}),`
`,e.jsx(n.p,{children:"Once EIP665 is accepted, Ethereum will have the Ed25519 signature available as an EVM precompile. This will make watchdog services and the 4-hour challenge window unnecessary."}),`
`,e.jsx(n.p,{children:"At its bare minimum, Rainbow Bridge consists of EthOnNearClient and NearOnEthClient contracts, and three services: Eth2NearRelay, Near2EthRelay, and the Watchdog. We might argue that this already constitutes a bridge since we have established a cryptographic link between two blockchains, but practically speaking it requires a large portion of additional code to make application developers even consider using the Rainbow Bridge for their applications."}),`
`]}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["The following information on sending assets from NEAR back to Ethereum is an excerpt from ",e.jsx(n.a,{href:"https://near.org/bridge/",children:"https://near.org/bridge/"}),"."]})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Sending assets from NEAR back to Ethereum currently takes a maximum of sixteen hours (due to Ethereum finality times) and costs around $60 (due to ETH gas costs and at current ETH price). These costs and speeds will improve in the near future."}),`
`]}),`
`,e.jsxs(n.h4,{id:"near-to-ethereum-block-propagation-costing",children:["NEAR to Ethereum block propagation costing",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#near-to-ethereum-block-propagation-costing",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"The following links provide the production Ethereum addresses and blockexplorer views for NearBridge.sol and the ERC20 Locker"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge-client/tree/main/packages/client#ethereum-mainnet-bridge-addresses-and-parameters",children:"Ethereum Mainnet Bridge addresses and parameters"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://etherscan.io/address/0x3fefc5a4b1c02f21cbc8d3613643ba0635b9a873",children:"NearBridge.sol on Ethereum Block Explorer"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsxs(n.a,{href:"https://etherscan.io/tx/0xa0fbf1405747dbc1c1bda1227e46bc7c5feac36c0eeaab051022cfdb268e60cc/advanced",children:["Sample ",e.jsx(n.code,{children:"addLightClientBlock(bytes data)"})," function call"]})}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://etherscan.io/address/0x23ddd3e3692d1861ed57ede224608875809e127f#code",children:"NEAR ERC20Locker on Ethereum Block Explorer"})}),`
`]}),`
`,e.jsx(n.p,{children:"At time of writing (Oct 26th, 2022)."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["NEAR Light Client Blocks are propogated every ",e.jsx(n.code,{children:"4 hours"})]}),`
`,e.jsxs(n.li,{children:["Sample Transaction fee ",e.jsx(n.code,{children:"0.061600109576901025 Ether ($96.56)"})]}),`
`,e.jsxs(n.li,{children:["Daily Transaction fees cost approximately ",e.jsx(n.code,{children:"$600"})]}),`
`,e.jsx(n.li,{children:e.jsx(n.em,{children:"Note: Infrastructure costs for running relayer, watchdog, etc are not included."})}),`
`]}),`
`,e.jsxs(n.h4,{id:"near-to-ethereum-block-propagation-flow",children:["NEAR to Ethereum block propagation flow",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#near-to-ethereum-block-propagation-flow",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://nomicon.io/ChainSpec/LightClient",children:"NEAR Light Client Documentation"})," gives an overview of how light clients work. At a high level the light client needs to fetch at least one block per ",e.jsx(n.a,{href:"https://docs.near.org/concepts/basics/epoch",children:"epoch"})," i.e. every 42,200 blocks or approxmiately 12 hours. Also Having the LightClientBlockView for block B is sufficient to be able to verify any statement about state or outcomes in any block in the ancestry of B (including B itself)."]}),`
`,e.jsxs(n.p,{children:["The current scripts and codebase indicates that a block would be fetched every 30 seconds with a max delay of 10 seconds. It feels that this would be expensive to update Ethereum so frequently. ",e.jsx(n.a,{href:"https://near.org/bridge/",children:"NEAR's bridge documentation"})," states ",e.jsx(n.em,{children:"Sending assets from NEAR back to Ethereum currently takes a maximum of sixteen hours (due to Ethereum finality times)"}),". This seems to align with sending light client updates once per NEAR epoch. The block fetch period is configurable in the relayer."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"The RPC returns the LightClientBlock for the block as far into the future from the last known hash as possible for the light client to still accept it. Specifically, it either returns the last final block of the next epoch, or the last final known block. If there's no newer final block than the one the light client knows about, the RPC returns an empty result."}),`
`,e.jsx(n.p,{children:"A standalone light client would bootstrap by requesting next blocks until it receives an empty result, and then periodically request the next light client block."}),`
`,e.jsx(n.p,{children:"A smart contract-based light client that enables a bridge to NEAR on a different blockchain naturally cannot request blocks itself. Instead external oracles query the next light client block from one of the full nodes, and submit it to the light client smart contract. The smart contract-based light client performs the same checks described above, so the oracle doesn't need to be trusted."}),`
`]}),`
`,e.jsx(n.p,{children:"Block Submitters stake ETH to be allowed to submit blocks which get's slashed if the watchdog identifies blocks with invalid signatures."}),`
`,e.jsx(n.p,{children:e.jsx(n.em,{children:"Note: Have not identified how the block submitters are rewarded for submitting blocks. Currently have only identified them locking ETH to be able to submit blocks and being slashed if they submit blocks with invalid signatures."})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/cli/index.js#L518",children:"Light Clients are deployed on Ethereum"})," via the CLI using ",e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/cli/init/eth-contracts.js",children:"eth-contracts.js"})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/cli/index.js#L505",children:"init-eth-ed25519"}),": Deploys ",e.jsx(n.code,{children:"Ed25519.sol"})," see more information under ",e.jsx(n.a,{href:"#nearbridge-cryptographic-primitives",children:"nearbridge Cryptographic Primitives"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/cli/index.js#L520",children:"init-eth-client"}),": Deploys ",e.jsx(n.code,{children:"NearBridge.sol"})," see more information under ",e.jsx(n.a,{href:"#near-to-ethereum-block-propagation-components",children:"NEAR to Ethereum block propagation components"}),". It takes the following arguments",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ethEd25519Address"}),": The address of the ECDSA signature checker using Ed25519 curve (see ",e.jsx(n.a,{href:"https://nbeguier.medium.com/a-real-world-comparison-of-the-ssh-key-algorithms-b26b0b31bfd9",children:"here"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"lockEthAmount"}),": The amount that ",e.jsx(n.code,{children:"BLOCK_PRODUCERS"})," need to deposit (in wei)to be able to provide blocks. This amount will be slashed if the block is challenged and proven not to have a valid signature. Default value is 100000000000000000000 WEI = 100 ETH."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"lockDuration"})," : 30 seconds"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"replaceDuration"}),": 60 seconds it is passed in nanoseconds, because it is a difference between NEAR timestamps."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ethAdminAddress"}),": Bridge Administrator Address"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"0"})," : Indicates nothing is paused ",e.jsx(n.code,{children:"UNPAUSE_ALL"})]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/cli/index.js#L538",children:"init-eth-prover"}),": Deploys ",e.jsx(n.code,{children:"NearProver.sol"})," see more information under ",e.jsx(n.a,{href:"#near-to-ethereum-block-propagation-components",children:"NEAR to Ethereum block propagation components"}),". It takes the following arguments",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ethClientAddress"}),": Interface to ",e.jsx(n.code,{children:"NearBridge.sol"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ethAdminAddress"}),": Administrator address"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"0"}),": paused indicator defaults to ",e.jsx(n.code,{children:"UNPAUSE_ALL = 0"})]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/cli/commands/start/near2eth-relay.js",children:"Relayer is Started"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Relayer is started using the following command"}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"cli/index.js start near2eth-relay \\"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"--eth-node-url http://127.0.0.1:8545/ \\"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"--eth-master-sk 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80 \\"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"--near-node-url https://rpc.testnet.near.org/ \\"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"--near-network-id testnet \\"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"--eth-client-address 0xe7f1725e7734ce288f8367e1bb143e90bb3f0512 \\"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"--eth-use-eip-1559 true \\"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"--near2eth-relay-max-delay 10 \\"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"--near2eth-relay-block-select-duration 30 \\"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"--near2eth-relay-after-submit-delay-ms 1000 \\"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"--log-verbose true \\"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"--daemon false"})})]})})}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/near2eth/near2eth-block-relay/index.js",children:"Relayer Logic"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Loops ",e.jsx(n.code,{children:"while (true)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Get the bridge state (including ",e.jsx(n.code,{children:"currentHeight"}),", ",e.jsx(n.code,{children:"nextTimestamp"}),", ",e.jsx(n.code,{children:"nextValidAt"}),", ",e.jsx(n.code,{children:"numBlockProducers"})," )"]}),`
`,e.jsxs(n.li,{children:["Get the ",e.jsx(n.code,{children:"currentBlockHash"})," the hash of the current untrursted block based on ",e.jsx(n.code,{children:"lastValidAt"})]}),`
`,e.jsxs(n.li,{children:["Gets the ",e.jsx(n.code,{children:"lastBlock"})," by calling the NEAR rpc ",e.jsx(n.code,{children:"next_light_client_block"})," using the hash of last untrusted block ",e.jsx(n.code,{children:"bs58.encode(currentBlockHash)"})]}),`
`,e.jsxs(n.li,{children:["Get's the ",e.jsx(n.code,{children:"replaceDuration"})," by ",e.jsx(n.code,{children:"clientContract.methods.replaceDuration().call()"})," this will be 60 seconds if we deployed ",e.jsx(n.code,{children:"NearBridge.sol"})," with the default values above"]}),`
`,e.jsxs(n.li,{children:["Sets ",e.jsx(n.code,{children:"nextValidAt"})," from the bridge state ",e.jsx(n.code,{children:"web3.utils.toBN(bridgeState.nextValidAt)"})]}),`
`,e.jsxs(n.li,{children:["Sets ",e.jsx(n.code,{children:"replaceDelay"})," to 0 then updates it to the ",e.jsx(n.code,{children:"nextTimestamp"})," + ",e.jsx(n.code,{children:"replaceDuration"})," - ",e.jsx(n.code,{children:"lastBlock.inner_lite.timestamp"})," i.e. The new block has to be at least 60 seconds after the current block stored on the light client."]}),`
`,e.jsxs(n.li,{children:["Checks the height of the ",e.jsx(n.code,{children:"currentHeight"})," of the bridge is less than the ",e.jsx(n.code,{children:"lastblock"})," from the near light client ",e.jsx(n.code,{children:"(bridgeState.currentHeight < lastBlock.inner_lite.height)"})]}),`
`,e.jsxs(n.li,{children:["Serializes the ",e.jsx(n.code,{children:"lastBlock"})," using Borsh and check that the block is suitable"]}),`
`,e.jsxs(n.li,{children:["Checks that the ",e.jsx(n.code,{children:"replaceDelay"})," has been met, if not sleeps until it has"]}),`
`,e.jsx(n.li,{children:"Checks that the Master Account (the one submitting the block) has enough locked ETH (if not tries to deposit more). So that it can be slashed if the block proposed is invalid."}),`
`,e.jsxs(n.li,{children:["Adds the light client block ",e.jsx(n.code,{children:"await clientContract.methods.addLightClientBlock(nextBlockSelection.borshBlock).send"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Checks ",e.jsx(n.code,{children:"NearBridge.sol"})," (the light client) has been initialized"]}),`
`,e.jsxs(n.li,{children:["Checks ",e.jsx(n.code,{children:"balanceOf[msg.sender] >= lockEthAmount"})," that the sender has locked enough Eth to allow them to submit blocks"]}),`
`,e.jsxs(n.li,{children:["Decodes the nearBlock using ",e.jsx(n.code,{children:"Borsh.from(data)"})," and ",e.jsx(n.code,{children:"borsh.decodeLightClientBlock()"})]}),`
`,e.jsxs(n.li,{children:["Commis the previous block, or make sure that it is OK to replace it using",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"lastValidAt = 0;"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"blockHashes_[curHeight] = untrustedHash;"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"blockMerkleRoots_[curHeight] = untrustedMerkleRoot;"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Check that the new block's height is greater than the current one's. ",e.jsx(n.code,{children:"nearBlock.inner_lite.height > curHeight"})]}),`
`,e.jsx(n.li,{children:"Check that the new block is from the same epoch as the current one, or from the next one."}),`
`,e.jsx(n.li,{children:"Check that the new block is signed by more than 2/3 of the validators."}),`
`,e.jsxs(n.li,{children:["If the block is from the next epoch, make sure that the Block producers ",e.jsx(n.code,{children:"next_bps"})," are supplied and have a correct hash."]}),`
`,e.jsxs(n.li,{children:["Add the Block to the Light client",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Updates untrusted information to this block including ",e.jsx(n.code,{children:"untrustedHeight"}),", ",e.jsx(n.code,{children:"untrustedTimestamp"}),", ",e.jsx(n.code,{children:"untrustedHash"}),", ",e.jsx(n.code,{children:"untrustedMerkleRoot"}),", ",e.jsx(n.code,{children:"untrustedNextHash"}),", ",e.jsx(n.code,{children:"untrustedSignatureSet"}),", ",e.jsx(n.code,{children:"untrustedNextEpoch"})]}),`
`,e.jsxs(n.li,{children:["If ",e.jsx(n.code,{children:"fromNextEpoch"})," also update the Block Producers"]}),`
`,e.jsxs(n.li,{children:["Updates the ",e.jsx(n.code,{children:"lastSubmitter"})," and ",e.jsx(n.code,{children:"lastValidAt"})]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Cleans up the selected block to prevent submitting the same block again ",e.jsx(n.code,{children:"await sleep(afterSubmitDelayMs)"})]}),`
`,e.jsxs(n.li,{children:["Sets the HeightGauuges to the correct block height",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"clientHeightGauge.set(Number(BigInt(bridgeState.currentHeight))"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"chainHeightGauge.set(Number(BigInt(lastBlock.inner_lite.height)))"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Sleeps for delay calculated from the maximum of the relayer days (10 seconds) and differnce between the current and next block time stamps and ",e.jsx(n.code,{children:"await sleep(1000 * delay)"})]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.h4,{id:"near-to-ethereum-watchdog",children:["NEAR to Ethereum watchdog",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#near-to-ethereum-watchdog",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/near2eth/watchdog/index.js",children:"watchdog"})," runs every 10 seconds and validates blocks on ",e.jsx(n.code,{children:"NearBridge.sol"})," challenging blocks with incorrect signatures. ",e.jsxs(n.em,{children:["Note: It uses ",e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/utils/http-prometheus.js",children:"heep-prometheus"})," for monitoring and storing block and producer information using ",e.jsx(n.code,{children:"gauges"})," and ",e.jsx(n.code,{children:"counters"}),"."]})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/cli/commands/start/watchdog.js",children:"watchdog is started"})," from the CLI"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/near2eth/watchdog/index.js",children:"watchdog logic"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Initializes monitoring information on ",e.jsx(n.code,{children:"Prometheus"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"const httpPrometheus = new HttpPrometheus(this.metricsPort, 'near_bridge_watchdog_')"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"const lastBlockVerified = httpPrometheus.gauge('last_block_verified', 'last block that was already verified')"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"const totBlockProducers = httpPrometheus.gauge('block_producers', 'number of block producers for current block')"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"const incorrectBlocks = httpPrometheus.counter('incorrect_blocks', 'number of incorrect blocks found')"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"const challengesSubmitted = httpPrometheus.counter('challenges_submitted', 'number of blocks challenged')"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Loops ",e.jsx(n.code,{children:"while (true)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Gets the ",e.jsx(n.code,{children:"bridgeState"})]}),`
`,e.jsx(n.li,{children:"Loops through all blockProducers checking their signatures"}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"for (let i = 0; i < numBlockProducers; i++)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Check each signature ",e.jsx(n.code,{children:"this.clientContract.methods.checkBlockProducerSignatureInHead(i).call()"})]}),`
`,e.jsxs(n.li,{children:["If invalid challenge the signature: ",e.jsx(n.code,{children:"this.clientContract.methods.challenge(this.ethMasterAccount, i).encodeABI()"})," calls ",e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/contracts/eth/nearbridge/contracts/NearBridge.sol#L93",children:"challenge function"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"function challenge(address payable receiver, uint signatureIndex) external override pausable(PAUSED_CHALLENGE)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["checks block.timestamp is less than lastValidAt ",e.jsx(n.code,{children:"block.timestamp < lastValidAt,"})]}),`
`,e.jsxs(n.li,{children:["Check if the signature is valid ",e.jsx(n.code,{children:"!checkBlockProducerSignatureInHead(signatureIndex)"})]}),`
`,e.jsxs(n.li,{children:["slashes the last submitter ",e.jsx(n.code,{children:"balanceOf[lastSubmitter] = balanceOf[lastSubmitter] - lockEthAmount;"})]}),`
`,e.jsxs(n.li,{children:["resets lastValidAt ",e.jsx(n.code,{children:"lastValidAt = 0;"})]}),`
`,e.jsxs(n.li,{children:["Refunds half of the funds to the watchdog account ",e.jsx(n.code,{children:'receiver.call{value: lockEthAmount / 2}("");'})]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Sleeps for watchdog Delay seconds ",e.jsx(n.code,{children:"await sleep(watchdogDelay * 1000)"})]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.h4,{id:"near-to-ethereum-block-propagation-components",children:["NEAR to Ethereum block propagation components",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#near-to-ethereum-block-propagation-components",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/cli/commands/start/eth2near-relay.js",children:"eth2near-relay"}),": Command to start the NEAR to Ethereum relay. See sample invocation ",e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/docs/development.md#near2eth-relay",children:"here"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/tree/master/near2eth/near2eth-block-relay",children:"near2eth-block-relay"})," is written in javascript",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Has ",e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/near2eth/near2eth-block-relay/package.json",children:"dependencies"})," including ",e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/tree/master/utils",children:"rainbow-bridge-utils"})," see ",e.jsx(n.a,{href:"near-rainbow-bridge-utils",children:"here"})," for more information. It's other dependencies are also included in ",e.jsx(n.code,{children:"rainbow-bridge-utils"}),".",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://www.npmjs.com/package/ethereumjs-util",children:"ethereumjs-util"}),": A collection of utility functions for Ethereum."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Has the following functions and classes",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"class Near2EthRelay"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"async initialize ({nearNodeUrl, nearNetworkId, ethNodeUrl, ethMasterSk, ethClientArtifactPath, ethClientAddress, ethGasMultiplier, metricsPort })"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"async withdraw ({ethGasMultiplier})"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"async runInternal ({submitInvalidBlock, near2ethRelayMinDelay, near2ethRelayMaxDelay, near2ethRelayErrorDelay, near2ethRelayBlockSelectDuration, near2ethRelayNextBlockSelectDelayMs, near2ethRelayAfterSubmitDelayMs, ethGasMultiplier, ethUseEip1559, logVerbose})"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"run (options) {return this.runInternal({...options, submitInvalidBlock: false}) }"})}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/contracts/eth/nearbridge/contracts/NearBridge.sol",children:"NearBridge.sol"}),": Is the NEAR light client deployed on ethereum.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["It imports the following contracts (see ",e.jsx(n.a,{href:"#nearbridge-cryptographic-primitives",children:"nearbridge cryptographic primitives"}),")",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:'import "./AdminControlled.sol";'})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:'import "./INearBridge.sol";'})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:'import "./NearDecoder.sol";'})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:'import "./Ed25519.sol";'})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["It provides the following structure for Bridge State. If there is currently no unconfirmed block, the last three fields are zero.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"uint currentHeight;"}),": Height of the current confirmed block"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"uint nextTimestamp;"}),": Timestamp of the current unconfirmed block"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"uint nextValidAt;"}),": Timestamp when the current unconfirmed block will be confirmed"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"uint numBlockProducers;"}),": Number of block producers for the current unconfirmed block"]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["It provides the following storage",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"uint constant MAX_BLOCK_PRODUCERS = 100;"}),": Assumed to be even and to not exceed 256."]}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"struct Epoch {bytes32 epochId; uint numBPs; bytes [MAX_BLOCK_PRODUCERS] keys; bytes32[MAX_BLOCK_PRODUCERS / 2] packedStakes; uint256 stakeThreshold;}"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"uint256 public lockEthAmount;"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"uint256 public lockDuration;"}),": lockDuration and replaceDuration shouldn't be extremely big, so adding them to an uint64 timestamp should not overflow uint256."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"uint256 public replaceDuration;"}),": replaceDuration is in nanoseconds, because it is a difference between NEAR timestamps."]}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Ed25519 immutable edwards;"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"uint256 public lastValidAt;"}),": End of challenge period. If zero, ",e.jsx(n.em,{children:e.jsx(n.code,{children:"untrusted"})})," fields and ",e.jsx(n.code,{children:"lastSubmitter"})," are not meaningful."]}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"uint64 curHeight;"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"uint64 untrustedHeight;"}),": The most recently added block. May still be in its challenge period, so should not be trusted."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"address lastSubmitter;"}),": Address of the account which submitted the last block."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"bool public initialized;"}),": Whether the contract was initialized."]}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"bool untrustedNextEpoch;"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"bytes32 untrustedHash;"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"bytes32 untrustedMerkleRoot;"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"bytes32 untrustedNextHash;"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"uint256 untrustedTimestamp;"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"uint256 untrustedSignatureSet;"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"NearDecoder.Signature[MAX_BLOCK_PRODUCERS] untrustedSignatures;"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Epoch[3] epochs;"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"uint256 curEpoch;"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"mapping(uint64 => bytes32) blockHashes_;"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"mapping(uint64 => bytes32) blockMerkleRoots_;"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"mapping(address => uint256) public override balanceOf;"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["It provides the following functions",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"constructor(Ed25519 ed, uint256 lockEthAmount_, uint256 lockDuration_, uint256 replaceDuration_, address admin_, uint256 pausedFlags_)"}),": _Note: require the ",e.jsx(n.code,{children:"lockDuration"})," (in seconds) to be at least one second less than the ",e.jsx(n.code,{children:"replaceDuration"})," (in nanoseconds) ",e.jsx(n.code,{children:"require(replaceDuration* > lockDuration* _ 1000000000);"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ethEd25519Address"}),": The address of the ECDSA signature checker using Ed25519 curve (see ",e.jsx(n.a,{href:"https://nbeguier.medium.com/a-real-world-comparison-of-the-ssh-key-algorithms-b26b0b31bfd9",children:"here"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"lockEthAmount"}),": The amount that ",e.jsx(n.code,{children:"BLOCK_PRODUCERS"})," need to deposit (in wei)to be able to provide blocks. This amount will be slashed if the block is challenged and proven not to have a valid signature. Default value is 100000000000000000000 WEI = 100 ETH."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"lockDuration"})," : 30 seconds"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"replaceDuration"}),": 60 seconds it is passed in nanoseconds, because it is a difference between NEAR timestamps."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ethAdminAddress"}),": Bridge Administrator Address"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"0"})," : Indicates nothing is paused ",e.jsx(n.code,{children:"UNPAUSE_ALL"})]}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"function deposit() public payable override pausable(PAUSED_DEPOSIT)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"function withdraw() public override pausable(PAUSED_WITHDRAW)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"function challenge(address payable receiver, uint signatureIndex) external override pausable(PAUSED_CHALLENGE"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"function checkBlockProducerSignatureInHead(uint signatureIndex) public view override returns (bool)"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"function initWithValidators(bytes memory data) public override onlyAdmin"}),": The first part of initialization -- setting the validators of the current epoch."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"function initWithBlock(bytes memory data) public override onlyAdmin"}),": The second part of the initialization -- setting the current head."]}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"function bridgeState() public view returns (BridgeState memory res)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"function bridgeState() public view returns (BridgeState memory res)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"function addLightClientBlock(bytes memory data) public override pausable(PAUSED_ADD_BLOCK)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"function setBlockProducers(NearDecoder.BlockProducer[] memory src, Epoch storage epoch) internal"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"function blockHashes(uint64 height) public view override pausable(PAUSED_VERIFY) returns (bytes32 res)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"function blockMerkleRoots(uint64 height) public view override pausable(PAUSED_VERIFY) returns (bytes32 res)"})}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/contracts/eth/nearprover/contracts/NearProver.sol",children:"NearProver.sol"}),": Is used to prove the validity of NEAR blocks on Ethereum.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["It imports the following contracts (see ",e.jsx(n.a,{href:"#nearbridge-cryptographic-primitives",children:"nearbridge cryptographic primitives"}),")",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:'import "rainbow-bridge-sol/nearbridge/contracts/NearDecoder.sol";'})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:'import "./ProofDecoder.sol";'})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["It has the following functions",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"constructor(INearBridge _bridge, address _admin, uint _pausedFlags)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"_bridge"}),": Interface to ",e.jsx(n.code,{children:"NearBridge.sol"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"_admin"}),": Administrator address"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"_pausedFlags"}),": paused indicator defaults to ",e.jsx(n.code,{children:"UNPAUSE_ALL = 0"})]}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"function proveOutcome(bytes memory proofData, uint64 blockHeight)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"function _computeRoot(bytes32 node, ProofDecoder.MerklePath memory proof) internal pure returns (bytes32 hash)"})}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.h4,{id:"near-rainbow-bridge-utils",children:["NEAR Rainbow Bridge Utils",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#near-rainbow-bridge-utils",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/tree/master/utils",children:"rainbow-bridge-utils"})," provides a set of utilities for the near rainbow bridge written in javascript."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["It has the following ",e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/utils/package.json",children:"dependencies"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://www.npmjs.com/package/bn.js",children:"bn.js"}),": Big number implementation in pure javascript"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://www.npmjs.com/package/bsert",children:"bsert"}),": Minimal assert with type checking."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://www.npmjs.com/package/bs58",children:"bs58"}),": JavaScript component to compute base 58 encoding"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://www.npmjs.com/package/change-case",children:"change-case"}),": Transform a string between camelCase, PascalCase, Capital Case, snake_case, param-case, CONSTANT_CASE and others."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://www.npmjs.com/package/configstore",children:"configstore"}),": Easily load and save config without having to think about where and how"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/near/eth-object#383b6ea68c7050bea4cab6950c1d5a7fa553e72b",children:"eth-object"}),": re-usable and composable objects that you can just call Object.from to ingest new data to serialize Ethereum Trie / LevelDB data from hex, buffers and rpc into the same format."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/near/eth-util-lite",children:"eth-util-lite"}),": a low-dependency utility for Ethereum. It replaces a small subset of the ethereumjs-util and ethjs-util APIs."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://www.npmjs.com/package/lodash",children:"lodash"}),": A set of utilities for working with arrays, numbers, objects, strings, etc."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://www.npmjs.com/package/near-api-js",children:"near-api-js"}),": JavaScript library to interact with NEAR Protocol via RPC API"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://www.npmjs.com/package/web3",children:"web3"}),": Ethereum JavaScript API"]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["It provides the following functions",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/utils/address-watcher.js",children:"address-watcher"}),": Watches a group of near and ethereum acccounts polling NEAR and Ethereum every second and updating ",e.jsx(n.code,{children:"nearAccount.balanceGauge"}),", ",e.jsx(n.code,{children:"nearAccount.stateStorageGauge"})," and ",e.jsx(n.code,{children:"ethereumAccount.balanceGauge"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/utils/borsh.js",children:"borsh"}),": provides the following functions for Binary Object Representation Serializer for Hashing ",e.jsx(n.a,{href:"https://borsh.io/",children:"borsh"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"function serializeField (schema, value, fieldType, writer)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"function deserializeField (schema, fieldType, reader)"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"function serialize (schema, fieldType, obj)"}),": Serialize given object using schema of the form: ",e.jsx(n.code,{children:"{ class_name -> [ [field_name, field_type], .. ], .. }"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"class BinaryReader"}),": Includes utilities to read numbers, strings arrays and burggers"]}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"function deserialize (schema, fieldType, buffer)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"const signAndSendTransactionAsync = async (accessKey, account, receiverId,actions) =>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"const txnStatus = async (account, txHash, retries = RETRY_TX_STATUS, wait = 1000) =>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"function getBorshTransactionLastResult (txResult)"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"class BorshContract {"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"constructor (borshSchema, account, contractId, options)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"async accessKeyInit ()"})}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"function borshify (block)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"function borshifyInitialValidators (initialValidators)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"const hexToBuffer = (hex) =>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"const readerToHex = (len) =>"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/utils/borshify-proof.js",children:"borshify-proof"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"function borshifyOutcomeProof (proof)"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/utils/robust.js",children:"robust"}),": his module gives a few utils for robust error handling, and wrap web3 with error handling and retry"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/utils/utils.js",children:"utils"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"async function setupNear (config)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"async function setupEth (config)"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"async function setupEthNear (config)"}),": Setup connection to NEAR and Ethereum from given configuration."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"function remove0x (value)"}),": Remove 0x if prepended"]}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"function normalizeHex (value)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"async function accountExists (connection, accountId)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"async function createLocalKeyStore (networkId, keyPath)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"function getWeb3 (config)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"function getEthContract (web3, path, address)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"function addSecretKey (web3, secretKey)"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"async function ethCallContract (contract, methodName, args)"}),": Wrap pure calls to Web3 contract to handle errors/reverts/gas usage."]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.h4,{id:"nearbridge-cryptographic-primitives",children:["nearbridge Cryptographic Primitives",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#nearbridge-cryptographic-primitives",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/contracts/eth/nearbridge/contracts/Ed25519.sol",children:"Ed25519.sol"}),": Solidity implementation of the ",e.jsx(n.a,{href:"https://en.wikipedia.org/wiki/EdDSA",children:"Ed25519"})," which is the EdDSA signature scheme using SHA-512 (SHA-2) and Curve25519 (see ",e.jsx(n.a,{href:"https://nbeguier.medium.com/a-real-world-comparison-of-the-ssh-key-algorithms-b26b0b31bfd9",children:"here"}),"). It has the following functions",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"function pow22501(uint256 v) private pure returns (uint256 p22501, uint256 p11)"})," : Computes (v^(2^250-1), v^11) mod p"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"function check(bytes32 k, bytes32 r, bytes32 s, bytes32 m1, bytes9 m2)"})," : has the following steps",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Step 1: compute SHA-512(R, A, M)"}),`
`,e.jsx(n.li,{children:"Step 2: unpack k"}),`
`,e.jsx(n.li,{children:"Step 3: compute multiples of k"}),`
`,e.jsxs(n.li,{children:["Step 4: compute s",e.jsx(n.em,{children:"G - h"}),"A"]}),`
`,e.jsx(n.li,{children:"Step 5: compare the points"}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/contracts/eth/nearbridge/contracts/Utils.sol",children:"Utils.sol"}),": A set of utilty functions for byte manipulation, memory updates and ",e.jsx(n.a,{href:"https://keccak.team/keccak_specs_summary.html",children:"keccak"})," functions.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"function swapBytes2(uint16 v) internal pure returns (uint16)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"function swapBytes4(uint32 v) internal pure returns (uint32)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"function swapBytes8(uint64 v) internal pure returns (uint64)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"function swapBytes16(uint128 v) internal pure returns (uint128)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"function swapBytes32(uint256 v) internal pure returns (uint256)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"function readMemory(uint ptr) internal pure returns (uint res)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"function writeMemory(uint ptr, uint value) internal pure"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"function memoryToBytes(uint ptr, uint length) internal pure returns (bytes memory res)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"function keccak256Raw(uint ptr, uint length) internal pure returns (bytes32 res)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"function sha256Raw(uint ptr, uint length) internal view returns (bytes32 res)"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/contracts/eth/nearbridge/contracts/Borsh.sol",children:"Borsh.sol"})," provides Binary Object Representation Serializer for Hashing ",e.jsx(n.a,{href:"https://borsh.io/",children:"borsh"})," functionality and imports ",e.jsx(n.code,{children:"Utils.sols"}),". Structures and functions include",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"struct Data {uint ptr; uint end;}"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"function from(bytes memory data) internal pure returns (Data memory res)"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"function requireSpace(Data memory data, uint length) internal pure"}),": This function assumes that length is reasonably small, so that data.ptr + length will not overflow. In the current code, length is always less than 2^32."]}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"function read(Data memory data, uint length) internal pure returns (bytes32 res)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"function done(Data memory data) internal pure"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"function peekKeccak256(Data memory data, uint length) internal pure returns (bytes32)"}),": Same considerations as for requireSpace."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"function peekSha256(Data memory data, uint length) internal view returns (bytes32)"}),": Same considerations as for requireSpace."]}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"function decodeU8(Data memory data) internal pure returns (uint8)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"function decodeU16(Data memory data) internal pure returns (uint16)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"function decodeU32(Data memory data) internal pure returns (uint32)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"function decodeU64(Data memory data) internal pure returns (uint64)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"function decodeU128(Data memory data) internal pure returns (uint128)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"function decodeU256(Data memory data) internal pure returns (uint256)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"function decodeBytes20(Data memory data) internal pure returns (bytes20)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"function decodeBytes32(Data memory data) internal pure returns (bytes32)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"function decodeBool(Data memory data) internal pure returns (bool)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"function skipBytes(Data memory data) internal pure"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"function decodeBytes(Data memory data) internal pure returns (bytes memory res)"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/contracts/eth/nearbridge/contracts/NearDecoder.sol",children:"NearDecoder.sol"}),": Imports ",e.jsx(n.code,{children:"Borsh.sol"})," and has utilities for decoding Public Keys, Signatures, Block Producers, Block Headers and Light Client Blocks.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"function decodePublicKey(Borsh.Data memory data) internal pure returns (PublicKey memory res)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"function decodeSignature(Borsh.Data memory data) internal pure returns (Signature memory res)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"function decodeBlockProducer(Borsh.Data memory data) internal pure returns (BlockProducer memory res)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"function decodeBlockProducers(Borsh.Data memory data) internal pure returns (BlockProducer[] memory res)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"function decodeOptionalBlockProducers(Borsh.Data memory data) internal view returns (OptionalBlockProducers memory res)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"function decodeOptionalSignature(Borsh.Data memory data) internal pure returns (OptionalSignature memory res)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"function decodeBlockHeaderInnerLite(Borsh.Data memory data) internal view returns (BlockHeaderInnerLite memory res)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"function decodeLightClientBlock(Borsh.Data memory data) internal view returns (LightClientBlock memory res)"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/contracts/eth/nearprover/contracts/ProofDecoder.sol",children:"ProofDecoder.sol"}),": Imports ",e.jsx(n.code,{children:"Borsh.sol"})," and ",e.jsx(n.code,{children:"NearDecoder.sol"})," and has utilities for decoding Proofs, BlockHeader, ExecutionStatus, ExecutionOutcome and MerklePaths. Structures and functions include",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"struct FullOutcomeProof {ExecutionOutcomeWithIdAndProof outcome_proof; MerklePath outcome_root_proof; BlockHeaderLight block_header_lite; MerklePath block_proof;}"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"function decodeFullOutcomeProof(Borsh.Data memory data) internal view returns (FullOutcomeProof memory proof)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"struct BlockHeaderLight {bytes32 prev_block_hash; bytes32 inner_rest_hash; NearDecoder.BlockHeaderInnerLite inner_lite; bytes32 hash;}"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"function decodeBlockHeaderLight(Borsh.Data memory data) internal view returns (BlockHeaderLight memory header)"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"struct ExecutionStatus {uint8 enumIndex; bool unknown; bool failed; bytes successValue; bytes32 successReceiptId;}"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"successValue"})," indicates if the final action succeeded and returned some value or an empty vec."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"successReceiptId"})," is the final action of the receipt returned a promise or the signed transaction was converted to a receipt. Contains the receipt_id of the generated receipt."]}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"function decodeExecutionStatus(Borsh.Data memory data) internal pure returns (ExecutionStatus memory executionStatus)"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"struct ExecutionOutcome {bytes[] logs; bytes32[] receipt_ids; uint64 gas_burnt; uint128 tokens_burnt; bytes executor_id; ExecutionStatus status; bytes32[] merkelization_hashes;}"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"bytes[] logs;"}),": Logs from this transaction or receipt."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"bytes32[] receipt_ids;"}),": Receipt IDs generated by this transaction or receipt."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"uint64 gas_burnt;"}),": The amount of the gas burnt by the given transaction or receipt."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"uint128 tokens_burnt;"}),": The total number of the tokens burnt by the given transaction or receipt."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"bytes executor_id;"}),": Hash of the transaction or receipt id that produced this outcome."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ExecutionStatus status"}),": Execution status. Contains the result in case of successful execution."]}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"bytes32[] merkelization_hashes;"})}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"function decodeExecutionOutcome(Borsh.Data memory data) internal view returns (ExecutionOutcome memory outcome)"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"struct ExecutionOutcomeWithId {bytes32 id; ExecutionOutcome outcome; bytes32 hash;}"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"bytes32 id"}),": is the transaction hash or the receipt ID."]}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"function decodeExecutionOutcomeWithId(Borsh.Data memory data) internal view returns (ExecutionOutcomeWithId memory outcome)"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"struct MerklePathItem {bytes32 hash; uint8 direction;}"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"uint8 direction"}),": where 0 = left, 1 = right"]}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"function decodeMerklePathItem(Borsh.Data memory data) internal pure returns (MerklePathItem memory item)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"struct MerklePath {MerklePathItem[] items;}"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"function decodeMerklePath(Borsh.Data memory data) internal pure returns (MerklePath memory path)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"struct ExecutionOutcomeWithIdAndProof {MerklePath proof; bytes32 block_hash; ExecutionOutcomeWithId outcome_with_id;}"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"function decodeExecutionOutcomeWithIdAndProof(Borsh.Data memory data)internal view returns (ExecutionOutcomeWithIdAndProof memory outcome)"})}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.h3,{id:"token-transfer-process-flow",children:["Token Transfer Process Flow",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#token-transfer-process-flow",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.a,{href:"https://near.org/bridge/",children:"NEAR Rainbow Bridge"})," uses ERC-20 connectors which are developed in ",e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-token-connector",children:"rainbow-token-connector"})," and ",e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge-client",children:"rainbow-bridge-client"}),". Also see ",e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/docs/workflows/eth2near-fun-transfer.mdx",children:"eth2near-fun-transfer.md"}),"."]}),`
`,e.jsx(n.p,{children:"Following is an overview of timing and anticipated costs"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Once on NEAR, transactions will confirm in 1-2 seconds and cost well under $1 in most cases."}),`
`,e.jsx(n.li,{children:"Since the Bridge requires transactions on Ethereum for NEAR and Ethereum, the following costs are expected."}),`
`,e.jsx(n.li,{children:"Sending assets from Ethereum to NEAR takes about six minutes (20 blocks) and for ERC-20 costs about $10 on average."}),`
`,e.jsx(n.li,{children:"Sending assets from NEAR back to Ethereum currently takes a maximum of sixteen hours (due to Ethereum finality times) and costs around $60 (due to ETH gas costs and at current ETH price). These costs and speeds will improve in the near future."}),`
`]}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["Note: This uses Ethreum ",e.jsx(n.a,{href:"https://eips.ethereum.org/EIPS/eip-20",children:"ERC20"})," and NEAR ",e.jsx(n.a,{href:"https://nomicon.io/Standards/Tokens/FungibleToken/Core",children:"NEP-141"})," initally developed for ",e.jsx(n.a,{href:"https://github.com/near/NEPs/pull/21",children:"NEP-21"})]})}),`
`,e.jsx(n.strong,{children:e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-token-connector/blob/master/README.mdx",children:"Generic ERC-20/NEP-141 connector for Rainbow Bridge"})}),`
`,e.jsx(n.strong,{children:"Specification"}),`
`,e.jsx(n.strong,{children:"Ethereum's side"}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"contract"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" ERC20Locker"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"  constructor"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"bytes"}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" memory"}),e.jsx(n.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:" nearTokenFactory"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"INearProver"}),e.jsx(n.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:" prover"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:") "}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"public"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  function "}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"lockToken"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(IERC20 token, uint256 amount, string memory accountId) "}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"public"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  function "}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"unlockToken"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(bytes memory proofData, uint64 proofBlockHeader) "}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"public"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})})}),`
`,e.jsx(n.strong,{children:"NEAR's side"}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"struct"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" BridgeTokenFactory"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    /// The account of the prover that we can use to prove"})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    pub"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" prover_account"}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" AccountId"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    /// Address of the Ethereum locker contract."})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    pub"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" locker_address"}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ["}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"u8"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"; "}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"20"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"],"})]}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    /// Hashes of the events that were already used."})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    pub"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" used_events"}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" UnorderedSet"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"<"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"Vec"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"<"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"u8"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:">>,"})]}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    /// Mapping from Ethereum tokens to NEAR tokens."})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    pub"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" tokens"}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" UnorderedMap"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"<"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"EvmAddress"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"AccountId"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:">;"})]}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})}),`
`,e.jsx(n.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"impl"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" BridgeTokenFactory"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    /// Initializes the contract."})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    /// `prover_account`: NEAR account of the Near Prover contract;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    /// `locker_address`: Ethereum address of the locker contract, in hex."})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    #[init]"})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    pub"}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" fn"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" new"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(prover_account"}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" AccountId"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", locker_address"}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" String"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:") "}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"->"}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" Self"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,e.jsx(n.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    /// Relays the lock event from Ethereum."})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    /// Uses prover to validate that proof is correct and relies on a canonical Ethereum chain."})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    /// Send `mint` action to the token that is specified in the proof."})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    #[payable]"})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    pub"}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" fn"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" deposit"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"&mut"}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" self"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", proof"}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" Proof"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})]}),`
`,e.jsx(n.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    /// A callback from BridgeToken contract deployed under this factory."})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    /// Is called after tokens are burned there to create an receipt result `(amount, token_address, recipient_address)` for Ethereum to unlock the token."})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    pub"}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" fn"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" finish_withdraw"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(token_account"}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" AccountId"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", amount"}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" Balance"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", recipient"}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" EvmAddress"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})]}),`
`,e.jsx(n.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    /// Transfers given NEP-21 token from `predecessor_id` to factory to lock."})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    /// On success, leaves a receipt result `(amount, token_address, recipient_address)`."})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    #[payable]"})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    pub"}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" fn"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" lock"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"&mut"}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" self"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", token"}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" AccountId"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", amount"}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" Balance"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", recipient"}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" String"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})]}),`
`,e.jsx(n.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    /// Relays the unlock event from Ethereum."})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    /// Uses prover to validate that proof is correct and relies on a canonical Ethereum chain."})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    /// Uses NEP-21 `transfer` action to move funds to `recipient` account."})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    #[payable]"})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    pub"}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" fn"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" unlock"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"&mut"}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" self"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", proof"}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" Proof"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})]}),`
`,e.jsx(n.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    /// Deploys BridgeToken contract for the given EVM address in hex code."})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    /// The name of new NEP21 compatible contract will be <hex(evm_address)>.<current_id>."})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    /// Expects ~35N attached to cover storage for BridgeToken."})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    #[payable]"})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    pub"}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" fn"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" deploy_bridge_token"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(address"}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" String"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})]}),`
`,e.jsx(n.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    /// Checks if Bridge Token has been successfully deployed with `deploy_bridge_token`."})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    /// On success, returns the name of NEP21 contract associated with given address (<hex(evm_address)>.<current_id>)."})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:'    /// Otherwise, returns "token do not exists" error.'})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    pub"}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" fn"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" get_bridge_token_account_id"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"&"}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"self"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", address"}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" String"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:") "}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"->"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" AccountId"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})}),`
`,e.jsx(n.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"struct"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" BridgeToken"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"   controller"}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" AccountId"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"   token"}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" Token"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),e.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// uses https://github.com/ilblackdragon/balancer-near/tree/master/near-lib-rs"})]}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})}),`
`,e.jsx(n.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"impl"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" BridgeToken"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    /// Setup the Token contract with given factory/controller."})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    pub"}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" fn"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" new"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(controller"}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" AccountId"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:") "}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"->"}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" Self"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,e.jsx(n.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    /// Mint tokens to given user. Only can be called by the controller."})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    pub"}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" fn"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" mint"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"&mut"}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" self"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", account_id"}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" AccountId"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", amount"}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" Balance"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})]}),`
`,e.jsx(n.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    /// Withdraw tokens from this contract."})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    /// Burns sender's tokens and calls controller to create event for relaying."})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    pub"}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" fn"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" withdraw"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"&mut"}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" self"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", amount"}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" U128"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", recipient"}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" String"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:") "}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"->"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" Promise"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})}),`
`,e.jsx(n.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"impl"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" FungibleToken"}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" for"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" BridgeToken"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"   // see example https://github.com/ilblackdragon/balancer-near/blob/master/balancer-pool/src/lib.rs#L329"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})})}),`
`,e.jsx(n.strong,{children:"Setup new ERC-20 on NEAR"}),`
`,e.jsxs(n.p,{children:["To setup token contract on NEAR side, anyone can call ",e.jsx(n.code,{children:"<bridge_token_factory>.deploy_bridge_token(<erc20>)"})," where ",e.jsx(n.code,{children:"<erc20>"}),` is the address of the token.
With this call must attach the amount of `,e.jsx(t,{className:"MathJax",jax:"SVG",children:e.jsxs(n.svg,{style:{verticalAlign:"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"34.962ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 15453 1000",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[e.jsxs(n.defs,{children:[e.jsx(n.path,{id:"MJX-1-TEX-I-1D441",d:"M234 637Q231 637 226 637Q201 637 196 638T191 649Q191 676 202 682Q204 683 299 683Q376 683 387 683T401 677Q612 181 616 168L670 381Q723 592 723 606Q723 633 659 637Q635 637 635 648Q635 650 637 660Q641 676 643 679T653 683Q656 683 684 682T767 680Q817 680 843 681T873 682Q888 682 888 672Q888 650 880 642Q878 637 858 637Q787 633 769 597L620 7Q618 0 599 0Q585 0 582 2Q579 5 453 305L326 604L261 344Q196 88 196 79Q201 46 268 46H278Q284 41 284 38T282 19Q278 6 272 0H259Q228 2 151 2Q123 2 100 2T63 2T46 1Q31 1 31 10Q31 14 34 26T39 40Q41 46 62 46Q130 49 150 85Q154 91 221 362L289 634Q287 635 234 637Z"}),e.jsx(n.path,{id:"MJX-1-TEX-I-1D438",d:"M492 213Q472 213 472 226Q472 230 477 250T482 285Q482 316 461 323T364 330H312Q311 328 277 192T243 52Q243 48 254 48T334 46Q428 46 458 48T518 61Q567 77 599 117T670 248Q680 270 683 272Q690 274 698 274Q718 274 718 261Q613 7 608 2Q605 0 322 0H133Q31 0 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q146 66 215 342T285 622Q285 629 281 629Q273 632 228 634H197Q191 640 191 642T193 659Q197 676 203 680H757Q764 676 764 669Q764 664 751 557T737 447Q735 440 717 440H705Q698 445 698 453L701 476Q704 500 704 528Q704 558 697 578T678 609T643 625T596 632T532 634H485Q397 633 392 631Q388 629 386 622Q385 619 355 499T324 377Q347 376 372 376H398Q464 376 489 391T534 472Q538 488 540 490T557 493Q562 493 565 493T570 492T572 491T574 487T577 483L544 351Q511 218 508 216Q505 213 492 213Z"}),e.jsx(n.path,{id:"MJX-1-TEX-I-1D434",d:"M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z"}),e.jsx(n.path,{id:"MJX-1-TEX-I-1D445",d:"M230 637Q203 637 198 638T193 649Q193 676 204 682Q206 683 378 683Q550 682 564 680Q620 672 658 652T712 606T733 563T739 529Q739 484 710 445T643 385T576 351T538 338L545 333Q612 295 612 223Q612 212 607 162T602 80V71Q602 53 603 43T614 25T640 16Q668 16 686 38T712 85Q717 99 720 102T735 105Q755 105 755 93Q755 75 731 36Q693 -21 641 -21H632Q571 -21 531 4T487 82Q487 109 502 166T517 239Q517 290 474 313Q459 320 449 321T378 323H309L277 193Q244 61 244 59Q244 55 245 54T252 50T269 48T302 46H333Q339 38 339 37T336 19Q332 6 326 0H311Q275 2 180 2Q146 2 117 2T71 2T50 1Q33 1 33 10Q33 12 36 24Q41 43 46 45Q50 46 61 46H67Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628Q287 635 230 637ZM630 554Q630 586 609 608T523 636Q521 636 500 636T462 637H440Q393 637 386 627Q385 624 352 494T319 361Q319 360 388 360Q466 361 492 367Q556 377 592 426Q608 449 619 486T630 554Z"}),e.jsx(n.path,{id:"MJX-1-TEX-I-1D461",d:"M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z"}),e.jsx(n.path,{id:"MJX-1-TEX-I-1D45C",d:"M201 -11Q126 -11 80 38T34 156Q34 221 64 279T146 380Q222 441 301 441Q333 441 341 440Q354 437 367 433T402 417T438 387T464 338T476 268Q476 161 390 75T201 -11ZM121 120Q121 70 147 48T206 26Q250 26 289 58T351 142Q360 163 374 216T388 308Q388 352 370 375Q346 405 306 405Q243 405 195 347Q158 303 140 230T121 120Z"}),e.jsx(n.path,{id:"MJX-1-TEX-I-1D450",d:"M34 159Q34 268 120 355T306 442Q362 442 394 418T427 355Q427 326 408 306T360 285Q341 285 330 295T319 325T330 359T352 380T366 386H367Q367 388 361 392T340 400T306 404Q276 404 249 390Q228 381 206 359Q162 315 142 235T121 119Q121 73 147 50Q169 26 205 26H209Q321 26 394 111Q403 121 406 121Q410 121 419 112T429 98T420 83T391 55T346 25T282 0T202 -11Q127 -11 81 37T34 159Z"}),e.jsx(n.path,{id:"MJX-1-TEX-I-1D463",d:"M173 380Q173 405 154 405Q130 405 104 376T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Q21 294 29 316T53 368T97 419T160 441Q202 441 225 417T249 361Q249 344 246 335Q246 329 231 291T200 202T182 113Q182 86 187 69Q200 26 250 26Q287 26 319 60T369 139T398 222T409 277Q409 300 401 317T383 343T365 361T357 383Q357 405 376 424T417 443Q436 443 451 425T467 367Q467 340 455 284T418 159T347 40T241 -11Q177 -11 139 22Q102 54 102 117Q102 148 110 181T151 298Q173 362 173 380Z"}),e.jsx(n.path,{id:"MJX-1-TEX-I-1D452",d:"M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z"}),e.jsx(n.path,{id:"MJX-1-TEX-I-1D45F",d:"M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z"}),e.jsx(n.path,{id:"MJX-1-TEX-I-1D460",d:"M131 289Q131 321 147 354T203 415T300 442Q362 442 390 415T419 355Q419 323 402 308T364 292Q351 292 340 300T328 326Q328 342 337 354T354 372T367 378Q368 378 368 379Q368 382 361 388T336 399T297 405Q249 405 227 379T204 326Q204 301 223 291T278 274T330 259Q396 230 396 163Q396 135 385 107T352 51T289 7T195 -10Q118 -10 86 19T53 87Q53 126 74 143T118 160Q133 160 146 151T160 120Q160 94 142 76T111 58Q109 57 108 57T107 55Q108 52 115 47T146 34T201 27Q237 27 263 38T301 66T318 97T323 122Q323 150 302 164T254 181T195 196T148 231Q131 256 131 289Z"}),e.jsx(n.path,{id:"MJX-1-TEX-I-1D44E",d:"M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"}),e.jsx(n.path,{id:"MJX-1-TEX-I-1D454",d:"M311 43Q296 30 267 15T206 0Q143 0 105 45T66 160Q66 265 143 353T314 442Q361 442 401 394L404 398Q406 401 409 404T418 412T431 419T447 422Q461 422 470 413T480 394Q480 379 423 152T363 -80Q345 -134 286 -169T151 -205Q10 -205 10 -137Q10 -111 28 -91T74 -71Q89 -71 102 -80T116 -111Q116 -121 114 -130T107 -144T99 -154T92 -162L90 -164H91Q101 -167 151 -167Q189 -167 211 -155Q234 -144 254 -122T282 -75Q288 -56 298 -13Q311 35 311 43ZM384 328L380 339Q377 350 375 354T369 368T359 382T346 393T328 402T306 405Q262 405 221 352Q191 313 171 233T151 117Q151 38 213 38Q269 38 323 108L331 118L384 328Z"}),e.jsx(n.path,{id:"MJX-1-TEX-I-1D453",d:"M118 -162Q120 -162 124 -164T135 -167T147 -168Q160 -168 171 -155T187 -126Q197 -99 221 27T267 267T289 382V385H242Q195 385 192 387Q188 390 188 397L195 425Q197 430 203 430T250 431Q298 431 298 432Q298 434 307 482T319 540Q356 705 465 705Q502 703 526 683T550 630Q550 594 529 578T487 561Q443 561 443 603Q443 622 454 636T478 657L487 662Q471 668 457 668Q445 668 434 658T419 630Q412 601 403 552T387 469T380 433Q380 431 435 431Q480 431 487 430T498 424Q499 420 496 407T491 391Q489 386 482 386T428 385H372L349 263Q301 15 282 -47Q255 -132 212 -173Q175 -205 139 -205Q107 -205 81 -186T55 -132Q55 -95 76 -78T118 -61Q162 -61 162 -103Q162 -122 151 -136T127 -157L118 -162Z"}),e.jsx(n.path,{id:"MJX-1-TEX-N-28",d:"M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"}),e.jsx(n.path,{id:"MJX-1-TEX-I-1D459",d:"M117 59Q117 26 142 26Q179 26 205 131Q211 151 215 152Q217 153 225 153H229Q238 153 241 153T246 151T248 144Q247 138 245 128T234 90T214 43T183 6T137 -11Q101 -11 70 11T38 85Q38 97 39 102L104 360Q167 615 167 623Q167 626 166 628T162 632T157 634T149 635T141 636T132 637T122 637Q112 637 109 637T101 638T95 641T94 647Q94 649 96 661Q101 680 107 682T179 688Q194 689 213 690T243 693T254 694Q266 694 266 686Q266 675 193 386T118 83Q118 81 118 75T117 65V59Z"}),e.jsx(n.path,{id:"MJX-1-TEX-N-33",d:"M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z"}),e.jsx(n.path,{id:"MJX-1-TEX-N-30",d:"M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"})]}),e.jsx(n.g,{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",transform:"scale(1,-1)",children:e.jsxs(n.g,{"data-mml-node":"math",children:[e.jsx(n.g,{"data-mml-node":"mi",children:e.jsx(n.use,{"data-c":"1D441",xlinkHref:"#MJX-1-TEX-I-1D441"})}),e.jsx(n.g,{"data-mml-node":"mi",transform:"translate(888,0)",children:e.jsx(n.use,{"data-c":"1D438",xlinkHref:"#MJX-1-TEX-I-1D438"})}),e.jsx(n.g,{"data-mml-node":"mi",transform:"translate(1652,0)",children:e.jsx(n.use,{"data-c":"1D434",xlinkHref:"#MJX-1-TEX-I-1D434"})}),e.jsx(n.g,{"data-mml-node":"mi",transform:"translate(2402,0)",children:e.jsx(n.use,{"data-c":"1D445",xlinkHref:"#MJX-1-TEX-I-1D445"})}),e.jsx(n.g,{"data-mml-node":"mi",transform:"translate(3161,0)",children:e.jsx(n.use,{"data-c":"1D461",xlinkHref:"#MJX-1-TEX-I-1D461"})}),e.jsx(n.g,{"data-mml-node":"mi",transform:"translate(3522,0)",children:e.jsx(n.use,{"data-c":"1D45C",xlinkHref:"#MJX-1-TEX-I-1D45C"})}),e.jsx(n.g,{"data-mml-node":"mi",transform:"translate(4007,0)",children:e.jsx(n.use,{"data-c":"1D450",xlinkHref:"#MJX-1-TEX-I-1D450"})}),e.jsx(n.g,{"data-mml-node":"mi",transform:"translate(4440,0)",children:e.jsx(n.use,{"data-c":"1D45C",xlinkHref:"#MJX-1-TEX-I-1D45C"})}),e.jsx(n.g,{"data-mml-node":"mi",transform:"translate(4925,0)",children:e.jsx(n.use,{"data-c":"1D463",xlinkHref:"#MJX-1-TEX-I-1D463"})}),e.jsx(n.g,{"data-mml-node":"mi",transform:"translate(5410,0)",children:e.jsx(n.use,{"data-c":"1D452",xlinkHref:"#MJX-1-TEX-I-1D452"})}),e.jsx(n.g,{"data-mml-node":"mi",transform:"translate(5876,0)",children:e.jsx(n.use,{"data-c":"1D45F",xlinkHref:"#MJX-1-TEX-I-1D45F"})}),e.jsx(n.g,{"data-mml-node":"mi",transform:"translate(6327,0)",children:e.jsx(n.use,{"data-c":"1D460",xlinkHref:"#MJX-1-TEX-I-1D460"})}),e.jsx(n.g,{"data-mml-node":"mi",transform:"translate(6796,0)",children:e.jsx(n.use,{"data-c":"1D461",xlinkHref:"#MJX-1-TEX-I-1D461"})}),e.jsx(n.g,{"data-mml-node":"mi",transform:"translate(7157,0)",children:e.jsx(n.use,{"data-c":"1D45C",xlinkHref:"#MJX-1-TEX-I-1D45C"})}),e.jsx(n.g,{"data-mml-node":"mi",transform:"translate(7642,0)",children:e.jsx(n.use,{"data-c":"1D45F",xlinkHref:"#MJX-1-TEX-I-1D45F"})}),e.jsx(n.g,{"data-mml-node":"mi",transform:"translate(8093,0)",children:e.jsx(n.use,{"data-c":"1D44E",xlinkHref:"#MJX-1-TEX-I-1D44E"})}),e.jsx(n.g,{"data-mml-node":"mi",transform:"translate(8622,0)",children:e.jsx(n.use,{"data-c":"1D454",xlinkHref:"#MJX-1-TEX-I-1D454"})}),e.jsx(n.g,{"data-mml-node":"mi",transform:"translate(9099,0)",children:e.jsx(n.use,{"data-c":"1D452",xlinkHref:"#MJX-1-TEX-I-1D452"})}),e.jsx(n.g,{"data-mml-node":"mi",transform:"translate(9565,0)",children:e.jsx(n.use,{"data-c":"1D453",xlinkHref:"#MJX-1-TEX-I-1D453"})}),e.jsx(n.g,{"data-mml-node":"mi",transform:"translate(10115,0)",children:e.jsx(n.use,{"data-c":"1D45C",xlinkHref:"#MJX-1-TEX-I-1D45C"})}),e.jsx(n.g,{"data-mml-node":"mi",transform:"translate(10600,0)",children:e.jsx(n.use,{"data-c":"1D45F",xlinkHref:"#MJX-1-TEX-I-1D45F"})}),e.jsx(n.g,{"data-mml-node":"mo",transform:"translate(11051,0)",children:e.jsx(n.use,{"data-c":"28",xlinkHref:"#MJX-1-TEX-N-28"})}),e.jsx(n.g,{"data-mml-node":"mi",transform:"translate(11440,0)",children:e.jsx(n.use,{"data-c":"1D44E",xlinkHref:"#MJX-1-TEX-I-1D44E"})}),e.jsx(n.g,{"data-mml-node":"mi",transform:"translate(11969,0)",children:e.jsx(n.use,{"data-c":"1D461",xlinkHref:"#MJX-1-TEX-I-1D461"})}),e.jsx(n.g,{"data-mml-node":"mi",transform:"translate(12330,0)",children:e.jsx(n.use,{"data-c":"1D459",xlinkHref:"#MJX-1-TEX-I-1D459"})}),e.jsx(n.g,{"data-mml-node":"mi",transform:"translate(12628,0)",children:e.jsx(n.use,{"data-c":"1D452",xlinkHref:"#MJX-1-TEX-I-1D452"})}),e.jsx(n.g,{"data-mml-node":"mi",transform:"translate(13094,0)",children:e.jsx(n.use,{"data-c":"1D44E",xlinkHref:"#MJX-1-TEX-I-1D44E"})}),e.jsx(n.g,{"data-mml-node":"mi",transform:"translate(13623,0)",children:e.jsx(n.use,{"data-c":"1D460",xlinkHref:"#MJX-1-TEX-I-1D460"})}),e.jsx(n.g,{"data-mml-node":"mi",transform:"translate(14092,0)",children:e.jsx(n.use,{"data-c":"1D461",xlinkHref:"#MJX-1-TEX-I-1D461"})}),e.jsxs(n.g,{"data-mml-node":"mn",transform:"translate(14453,0)",children:[e.jsx(n.use,{"data-c":"33",xlinkHref:"#MJX-1-TEX-N-33"}),e.jsx(n.use,{"data-c":"30",xlinkHref:"#MJX-1-TEX-N-30",transform:"translate(500,0)"})]})]})})]})}),"NEAR currently)."]}),`
`,e.jsxs(n.p,{children:["This will create ",e.jsx(n.code,{children:"<<hex(erc20)>.<bridge_token_factory>>"})," NEP141-compatible contract."]}),`
`,e.jsx(n.strong,{children:"Usage flow Ethereum -> NEAR"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["User sends ",e.jsx(n.code,{children:"<erc20>.approve(<erc20locker>, <amount>)"})," Ethereum transaction."]}),`
`,e.jsxs(n.li,{children:["User sends ",e.jsx(n.code,{children:"<erc20locker>.lock(<erc20>, <amount>, <destination>)"})," Ethereum transaction. This transaction will create ",e.jsx(n.code,{children:"Locked"})," event."]}),`
`,e.jsxs(n.li,{children:["Relayers will be sending Ethereum blocks to the ",e.jsx(n.code,{children:"EthClient"})," on NEAR side."]}),`
`,e.jsxs(n.li,{children:["After sufficient number of confirmations on top of the mined Ethereum block that contain the ",e.jsx(n.code,{children:"lock"})," transaction, user or relayer can call ",e.jsx(n.code,{children:"BridgeTokenFactory.deposit(proof)"}),". Proof is the extracted information from the event on Ethereum side."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"BridgeTokenFactory.deposit"})," function will call ",e.jsx(n.code,{children:"EthProver"})," and verify that proof is correct and relies on a block with sufficient number of confirmations."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"EthProver"})," will return callback to ",e.jsx(n.code,{children:"BridgeTokenFactory"})," confirming that proof is correct."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"BridgeTokenFactory"})," will call ",e.jsx(n.code,{children:"<<hex(erc20)>.<bridge_token_factory>>.mint(<near_account_id>, <amount>)"}),"."]}),`
`,e.jsxs(n.li,{children:["User can use ",e.jsx(n.code,{children:"<<hex(erc20)>.<bridge_token_factory>>"})," token in other applications now on NEAR."]}),`
`]}),`
`,e.jsx(n.strong,{children:"Usage flow NEAR -> Ethereum"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"token-locker"})," locks NEP141 tokens on NEAR side."]}),`
`]}),`
`,e.jsxs(n.p,{children:["To deposit funds into the locker, call ",e.jsx(n.code,{children:"ft_transfer_call"})," where ",e.jsx(n.code,{children:"msg"}),` contains Ethereum address the funds should arrive to.
This will emit `,e.jsx(n.code,{children:"<token: String, amount: u128, recipient address: EthAddress>"})," (which arrives to ",e.jsx(n.code,{children:"deposit"})," on Ethereum side)."]}),`
`,e.jsxs(n.p,{children:["Accepts ",e.jsx(n.code,{children:"Unlock(token: String, sender_id: EthAddress, amount: u256, recipient: String)"}),` event from Ethereum side with a proof, verifies its correctness.
If `,e.jsx(n.code,{children:"recipient"})," contains ':' will split it into ",e.jsx(n.code,{children:"<recipient, msg>"})," and do ",e.jsx(n.code,{children:"ft_transfer_call(recipient, amount, None, msg)"}),". Otherwise will ",e.jsx(n.code,{children:"ft_transfer"})," to ",e.jsx(n.code,{children:"recipient"}),"."]}),`
`,e.jsxs(n.p,{children:["To get metadata of token to Ethereum, need to call ",e.jsx(n.code,{children:"log_metadata"}),", which will create a result ",e.jsx(n.code,{children:"<token: String, name: String, symbol: String, decimals: u8, blockHeight: u64>"}),"."]}),`
`,e.jsxs(n.ol,{start:"2",children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"erc20-bridge-token"})," - ",e.jsx(n.code,{children:"BridgeTokenFactory"})," and ",e.jsx(n.code,{children:"BridgeToken"})," Ethereum contracts."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"BridgeTokenFactory"})," creates new ",e.jsx(n.code,{children:"BridgeToken"})," that correspond to specific token account id on NEAR side."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"BridgeTokenFactory"})," receives ",e.jsx(n.code,{children:"deposit"})," with proof from NEAR, verify them and mint appropriate amounts on recipient addresses."]}),`
`,e.jsxs(n.p,{children:["Calling ",e.jsx(n.code,{children:"withdraw"})," will burn tokens of this user and will generate event ",e.jsx(n.code,{children:"<token: String, sender_id: EthAddress, amount: u256, recipient: String>"})," that can be relayed to ",e.jsx(n.code,{children:"token-factory"}),"."]}),`
`,e.jsx(n.strong,{children:"Caveats"}),`
`,e.jsxs(n.p,{children:["Generally, this connector allows any account to call ",e.jsx(n.code,{children:"ft_transfer_call"}),` opening for potential malicious tokens to be bridged to Ethereum.
The expectation here is that on Ethereum side, the token lists will handle this, as it's the same attack model as malicious tokens on Uniswap and other DEXs.`]}),`
`,e.jsxs(n.p,{children:["Using Ethereum ",e.jsx(n.code,{children:"BridgeTokenFactory"})," contract can always resolve Ethereum address of a contract back to NEAR one to check that it is indeed bridging token from NEAR and is created by this factory."]}),`
`,e.jsx(n.strong,{children:"Testing"}),`
`,e.jsx(n.p,{children:"Testing Ethereum side"}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"cd erc20-connector"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"yarn"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"yarn run test"})})]})})}),`
`,e.jsx(n.p,{children:"Testing NEAR side"}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"make res/bridge_token_factory.wasm"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"cargo test --all"})})]})})}),`
`,e.jsxs(n.h4,{id:"token-transfer-components",children:["Token Transfer Components",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#token-transfer-components",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["Note: This uses Ethreum ",e.jsx(n.a,{href:"https://eips.ethereum.org/EIPS/eip-20",children:"ERC20"})," and NEAR ",e.jsx(n.a,{href:"https://nomicon.io/Standards/Tokens/FungibleToken/Core",children:"NEP-141"})," initally developed for ",e.jsx(n.a,{href:"https://github.com/near/NEPs/pull/21",children:"NEP-21"})]})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-token-connector",children:"rainbow-token-connector"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["NEAR rust based contracts",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-token-connector/tree/master/bridge-common",children:"bridge-common"}),": Common functions for NEAR, currently only ",e.jsx(n.code,{children:"pub fn parse_recipient(recipient: String) -> Recipient"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-token-connector/tree/master/bridge-token-factory",children:"bridge-token-factory"}),": Functions for managing tokens on NEAR including but not limited to ",e.jsx(n.code,{children:"update_metadata"}),", ",e.jsx(n.code,{children:"deposit"}),", ",e.jsx(n.code,{children:"get_tokens"}),", ",e.jsx(n.code,{children:"finish_updating_metadata"}),", ",e.jsx(n.code,{children:"finish_updating_metadata"}),", ",e.jsx(n.code,{children:"finish_withdraw"}),", ",e.jsx(n.code,{children:"deploy_bridge_token"}),", ",e.jsx(n.code,{children:"get_bridge_token_account_id"}),", ",e.jsx(n.code,{children:"is_used_proof"}),", ",e.jsx(n.code,{children:"record_proof"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-token-connector/tree/master/bridge-token",children:"bridge-token"}),": Token functions on NEAR including but not limited to ",e.jsx(n.code,{children:"mint"})," and ",e.jsx(n.code,{children:"withdraw"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-token-connector/tree/master/token-locker",children:"token-locker"}),": Token Locker functions on NEAR including but not limited to ",e.jsx(n.code,{children:"withdraw"}),", ",e.jsx(n.code,{children:"finish_deposit"}),", ",e.jsx(n.code,{children:"is_used_proof"})]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Ethereum solidity based contracts",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-token-connector/tree/master/erc20-bridge-token",children:"erc20-bridge-token"}),": Ethereum Bridge token contracts including but not limited to",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-token-connector/blob/master/erc20-bridge-token/contracts/BridgeToken.sol",children:"BridgeToken.sol"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-token-connector/blob/master/erc20-bridge-token/contracts/BridgeTokenFactory.sol",children:"BridgeTokenFactory.sol"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-token-connector/blob/master/erc20-bridge-token/contracts/BridgeTokenProxy.sol",children:"BridgeTokenProxy.sol"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-token-connector/blob/master/erc20-bridge-token/contracts/ProofConsumer.sol",children:"ProofConsumer.sol"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-token-connector/blob/master/erc20-bridge-token/contracts/ResultsDecoder.sol",children:"ResultsDecoder"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-token-connector/tree/master/erc20-connector",children:"erc20-connector"}),": has ",e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-token-connector/blob/master/erc20-connector/contracts/ERC20Locker.sol",children:"ERC20Locker.sol"})," which is used to lock and unlock tokens. It is linked to the bridge token factory on NEAR side. It also links to the prover that it uses to unlock the tokens. (see ",e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/tree/master/contracts/eth/nearbridge/contracts",children:"here"}),")"]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.h4,{id:"references-1",children:["References",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#references-1",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://lighthouse-book.sigmaprime.io/",children:"Lighthouse Documentation"}),": ETH 2.0 Consensus Client Lighthouse documentation"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://github.com/sigp/lighthouse",children:"Lighthouse Github"}),": ETH 2.0 Consensus Client Lighthouse Github"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://lighthouse-blog.sigmaprime.io/",children:"Lighthouse: Blog"}),": ETH 2.0 Consensus Client Lighthouse Blog"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/tree/master/eth2near/eth2near-block-relay-rs",children:"eth2near-block-relay-rs"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/tree/master/contracts/eth/nearbridge",children:"nearbridge contracts"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/tree/master/contracts/eth/nearprover",children:"nearprover contracts"})}),`
`]}),`
`]}),`
`,e.jsxs(n.h3,{id:"prysm-light-client",children:["Prysm Light Client",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#prysm-light-client",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h4,{id:"references-2",children:["References",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#references-2",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://github.com/jinfwhuang/prysm/pull/5",children:"Prysm: Light-client (WORK IN PROGRESS)"}),":"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://github.com/jinfwhuang/prysm/tree/jin-light/cmd/light-client#light-client-client",children:"Prysm: Light-client Client WIP"}),": An independent light client client"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://github.com/prysmaticlabs/prysm/pull/10034",children:"Prysm: light-client server PR"}),": a feature PR that implements the basic production level changes to Prysm to comply as a light-client server to begin serving light client requests"]}),`
`]}),`
`]}),`
`,e.jsxs(n.h2,{id:"harmony-merkle-mount-range",children:["Harmony Merkle Mount Range",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#harmony-merkle-mount-range",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Harmony ",e.jsx(n.a,{href:"https://github.com/harmony-one/harmony/pull/3872",children:"MMR PR Review"})," and ",e.jsx(n.a,{href:"https://github.com/harmony-one/harmony/pull/4198/files",children:"latest PR"})," uses Merkle Mountain Ranges to facilitate light client development against Harmony's sharded Proof of Stake Chain"]}),`
`]}),`
`,e.jsxs(n.h2,{id:"near-rainbow-bridge-review",children:["Near Rainbow Bridge Review",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#near-rainbow-bridge-review",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.a,{href:"https://near.org/bridge/",children:"NEAR Rainbow bridge"})," is in ",e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge",children:"this github repository"})," and is supported by ",e.jsx(n.a,{href:"https://github.com/aurora-is-near",children:"Aurora-labs"}),"."]}),`
`,e.jsxs(n.p,{children:["It recently provided support for ETH 2.0 in this ",e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/pull/762",children:"Pull Request (762)"}),"."]}),`
`,e.jsxs(n.p,{children:["It interacts ",e.jsx(n.a,{href:"https://github.com/aurora-is-near/lighthouse",children:"lighthouse"})," for Ethereum 2.0 Consensus and tree_hash functions as well as bls signatures."]}),`
`,e.jsx(n.p,{children:"High Level their architecture is similar to the Horizon Bridge but with some key differences, including but not limited to"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["interacting with the beacon chain now for finality ",e.jsx(n.code,{children:"is_correct_finality_update"})," ",e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/eth2near/finality-update-verify/src/lib.rs#L36",children:"see finality-update-verify"})]}),`
`,e.jsxs(n.li,{children:["Updated execution block proof to use the BEACONRPCClient and with an updated merkle tree",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Design can be found in ",e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/pull/762",children:"PR-762"})]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.h3,{id:"near-rainbow-bridge-component-overview",children:["NEAR Rainbow Bridge: Component Overview",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#near-rainbow-bridge-component-overview",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"The following smart contracts are deployed on NEAR and work in conjunction with eth2near bridging functionality to propogate blocks from Ethereum to NEAR."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"*Note"})," here we will focus on the ",e.jsx(n.code,{children:"eth2-client"})," for ETH 2.0 Proof of Stake Bridging however if interested in however there is also an ",e.jsx(n.code,{children:"eth-client"})," which was used for ETH 1.0 Proof of Work Integration using ",e.jsx(n.a,{href:"https://github.com/nearprotocol/rust-ethash",children:"rust-ethhash"}),".*"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/tree/master/contracts/near",children:"Smart Contracts Deployed on NEAR"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/tree/master/contracts/near/eth2-client",children:"eth2-client"})," implements the Ethereum Light Client on Near",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"it provides functions including but not limited to:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"validate the light client"}),`
`,e.jsx(n.li,{children:"verify the finality branch"}),`
`,e.jsx(n.li,{children:"verify bls signatures"}),`
`,e.jsx(n.li,{children:"update finalized headers"}),`
`,e.jsx(n.li,{children:"updates the submittes"}),`
`,e.jsx(n.li,{children:"prune finalized blocks."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["It interacts with the beach chain, uses ",e.jsx(n.a,{href:"https://borsh.io/",children:"Borsh"})," for serialization and ",e.jsx(n.a,{href:"https://github.com/aurora-is-near/lighthouse",children:"lighthouse"})," for Ethereum 2.0 Consensus and tree_hash functions as well as bls signatures. See ",e.jsx(n.a,{href:"https://lighthouse-book.sigmaprime.io/",children:"here"})," for more information on lighthouse. Below is a list of dependencies from ",e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/contracts/near/eth2-client/Cargo.toml",children:"eth2-client/Cargo.toml"})]}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"["}),e.jsx(n.span,{style:{color:"#032F62",textDecoration:"underline","--shiki-dark":"#96D0FF","--shiki-dark-text-decoration":"inherit"},children:"dependencies"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"]"})]}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'ethereum-types = "0.9.2"'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'eth-types =  { path = "../eth-types" }'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'eth2-utility =  { path = "../eth2-utility" }'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'tree_hash = { git = "https://github.com/aurora-is-near/lighthouse.git", rev = "b624c3f0d3c5bc9ea46faa14c9cb2d90ee1e1dec" }'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'merkle_proof = { git = "https://github.com/aurora-is-near/lighthouse.git", rev = "b624c3f0d3c5bc9ea46faa14c9cb2d90ee1e1dec" }'})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'bls = { git = "https://github.com/aurora-is-near/lighthouse.git", optional = true, rev = "b624c3f0d3c5bc9ea46faa14c9cb2d90ee1e1dec", default-features = false, features = ['}),e.jsx(n.span,{style:{color:"#032F62",textDecoration:"underline","--shiki-dark":"#96D0FF","--shiki-dark-text-decoration":"inherit"},children:'"milagro"'}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"]}"})]}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'admin-controlled =  { path = "../admin-controlled" }'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'near-sdk = "4.0.0"'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'borsh = "0.9.3"'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'bitvec = "1.0.0"'})})]})})}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/tree/master/eth2near",children:"eth2near"})," supports the relaying of blocks and the verification of finality between etherum and Near. It has the following components"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/tree/master/eth2near/contract_wrapper",children:"contract_wrapper"}),": provides rust wrappers for interacting with the ",e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/tree/master/contracts/near",children:"solidity contracts on near"})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Contracts include (from ",e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/eth2near/contract_wrapper/src/lib.rs",children:e.jsx(n.code,{children:"lib.rs"})}),")"]}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"pub mod contract_wrapper_trait;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"pub mod dao_contract;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"pub mod dao_eth_client_contract;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"pub mod dao_types;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"pub mod errors;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"pub mod eth_client_contract;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"pub mod eth_client_contract_trait;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"pub mod file_eth_client_contract;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"pub mod near_contract_wrapper;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"pub mod sandbox_contract_wrapper;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"pub mod utils;"})})]})})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Dependencies include (from ",e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/eth2near/contract_wrapper/Cargo.toml",children:"contract_wrapper/Cargo.toml"}),")"]}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"["}),e.jsx(n.span,{style:{color:"#032F62",textDecoration:"underline","--shiki-dark":"#96D0FF","--shiki-dark-text-decoration":"inherit"},children:"dependencies"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"]"})]}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'borsh = "0.9.3"'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'futures = "0.3.21"'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'async-std = "1.12.0"'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'near-sdk = "4.0.0"'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'near-jsonrpc-client = "=0.4.0-beta.0"'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'near-crypto = "0.14.0"'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'near-primitives = "0.14.0"'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'near-chain-configs = "0.14.0"'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'near-jsonrpc-primitives = "0.14.0"'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'tokio = { version = "1.1", features = ["rt", "macros"] }'})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'reqwest = { version = "0.11", features = ['}),e.jsx(n.span,{style:{color:"#032F62",textDecoration:"underline","--shiki-dark":"#96D0FF","--shiki-dark-text-decoration":"inherit"},children:'"blocking"'}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"] }"})]}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'serde_json = "1.0.74"'})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'serde = { version = "1.0", features = ['}),e.jsx(n.span,{style:{color:"#032F62",textDecoration:"underline","--shiki-dark":"#96D0FF","--shiki-dark-text-decoration":"inherit"},children:'"derive"'}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"] }"})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'eth-types = { path = "../../contracts/near/eth-types/", features = ['}),e.jsx(n.span,{style:{color:"#032F62",textDecoration:"underline","--shiki-dark":"#96D0FF","--shiki-dark-text-decoration":"inherit"},children:'"eip1559"'}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"]}"})]}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'workspaces = "0.5.0"'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'anyhow = "1.0"'})})]})})}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/tree/master/eth2near/eth2near-block-relay-rs",children:"eth2near-block-relay-rs"})," is built in rust and integrates with the Ethereum 2.0 lgihthouse consensus client to propogate blocks to near."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Functionality includes (from ",e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/eth2near/eth2near-block-relay-rs/src/lib.rs",children:"lib.rs"}),")"]}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"pub mod beacon_block_body_merkle_tree;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"pub mod beacon_rpc_client;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"pub mod config;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"pub mod eth1_rpc_client;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"pub mod eth2near_relay;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"pub mod execution_block_proof;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"pub mod hand_made_finality_light_client_update;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"pub mod init_contract;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"pub mod last_slot_searcher;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"pub mod light_client_snapshot_with_proof;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"pub mod logger;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"pub mod near_rpc_client;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"pub mod prometheus_metrics;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"pub mod relay_errors;"})})]})})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Dependencies include (from ",e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/eth2near/eth2near-block-relay-rs/Cargo.toml",children:"eth2near-block-relay-rs/Cargo.toml"}),")"]}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'types =  { git = "https://github.com/aurora-is-near/lighthouse.git", rev = "b624c3f0d3c5bc9ea46faa14c9cb2d90ee1e1dec" }'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'tree_hash = { git = "https://github.com/aurora-is-near/lighthouse.git",  rev = "b624c3f0d3c5bc9ea46faa14c9cb2d90ee1e1dec" }'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'merkle_proof = { git = "https://github.com/aurora-is-near/lighthouse.git", rev = "b624c3f0d3c5bc9ea46faa14c9cb2d90ee1e1dec" }'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'eth2_hashing = { git = "https://github.com/aurora-is-near/lighthouse.git", rev = "b624c3f0d3c5bc9ea46faa14c9cb2d90ee1e1dec" }'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'eth2_ssz = { git = "https://github.com/aurora-is-near/lighthouse.git", rev = "b624c3f0d3c5bc9ea46faa14c9cb2d90ee1e1dec" }'})}),`
`,e.jsx(n.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'eth-types = { path = "../../contracts/near/eth-types/", features = ['}),e.jsx(n.span,{style:{color:"#032F62",textDecoration:"underline","--shiki-dark":"#96D0FF","--shiki-dark-text-decoration":"inherit"},children:'"eip1559"'}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"]}"})]}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'eth2-utility  = { path = "../../contracts/near/eth2-utility" }'})}),`
`,e.jsx(n.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'contract_wrapper = { path = "../contract_wrapper" }'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'finality-update-verify = { path = "../finality-update-verify" }'})}),`
`,e.jsx(n.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'log = { version = "0.4", features = ["std", "serde"] }'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'serde_json = "1.0.74"'})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'serde = { version = "1.0", features = ['}),e.jsx(n.span,{style:{color:"#032F62",textDecoration:"underline","--shiki-dark":"#96D0FF","--shiki-dark-text-decoration":"inherit"},children:'"derive"'}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"] }"})]}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'ethereum-types = "0.9.2"'})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'reqwest = { version = "0.11", features = ['}),e.jsx(n.span,{style:{color:"#032F62",textDecoration:"underline","--shiki-dark":"#96D0FF","--shiki-dark-text-decoration":"inherit"},children:'"blocking"'}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"] }"})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'clap = { version = "3.1.6", features = ['}),e.jsx(n.span,{style:{color:"#032F62",textDecoration:"underline","--shiki-dark":"#96D0FF","--shiki-dark-text-decoration":"inherit"},children:'"derive"'}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"] }"})]}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'tokio = { version = "1.1", features = ["macros", "rt", "time"] }'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'env_logger = "0.9.0"'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'borsh = "0.9.3"'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'near-sdk = "4.0.0"'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'futures = { version = "0.3.21", default-features = false }'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'async-std = "1.12.0"'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'hex = "*"'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'toml = "0.5.9"'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'atomic_refcell = "0.1.8"'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'bitvec = "*"'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'primitive-types = "0.7.3"'})}),`
`,e.jsx(n.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'near-jsonrpc-client = "=0.4.0-beta.0"'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'near-crypto = "0.14.0"'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'near-primitives = "0.14.0"'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'near-chain-configs = "0.14.0"'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'near-jsonrpc-primitives = "0.14.0"'})}),`
`,e.jsx(n.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'prometheus = { version = "0.9", features = ['}),e.jsx(n.span,{style:{color:"#032F62",textDecoration:"underline","--shiki-dark":"#96D0FF","--shiki-dark-text-decoration":"inherit"},children:'"process"'}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"] }"})]}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'lazy_static = "1.4"'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'warp = "0.2"'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'thread = "*"'})})]})})}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/tree/master/eth2near/eth2near-block-relay",children:"eth2near-block-relay"})," is built using javascript and supports ETH 1.0 Proof of Work (",e.jsx(n.code,{children:"ethhash"}),") using merkle patrica trees."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["key classes from ",e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/eth2near/eth2near-block-relay/index.js",children:"index.js"})," include"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Ethashproof"})," : which has functions to ",e.jsx(n.code,{children:"getParseBlock"})," and ",e.jsx(n.code,{children:"calculateNextEpoch"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Eth2NearRelay"})," : which interacts with the ",e.jsx(n.code,{children:"ethClientContract"})," and has a ",e.jsx(n.code,{children:"run()"})," function which loops through relaying blocks and includes additional functions such as ",e.jsx(n.code,{children:"getParseBlock"})," , ",e.jsx(n.code,{children:"submitBlock"})]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Dependencies include (from ",e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/eth2near/eth2near-block-relay/package.json",children:"package.json"}),")"]}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"dependencies": {'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'    "bn.js": "^5.1.3",'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'    "eth-object": "https://github.com/near/eth-object#383b6ea68c7050bea4cab6950c1d5a7fa553e72b",'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'    "eth-util-lite": "near/eth-util-lite#master",'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'    "@ethereumjs/block": "^3.4.0",'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'    "merkle-patricia-tree": "^2.1.2",'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'    "prom-client": "^12.0.0",'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'    "promisfy": "^1.2.0",'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'    "rainbow-bridge-utils": "1.0.0",'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'    "got": "^11.8.5"'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"},"})})]})})}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/tree/master/eth2near/ethashproof",children:"ethhashproof"}),": is a commandline to calculate proof data for an ethash POW, it is used by project ",e.jsx(n.code,{children:"SmartPool"})," and a decentralizedbridge between Etherum and EOS developed by Kyber Network team. It is written in ",e.jsx(n.code,{children:"GO"}),"."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Features Include 1. Calculate merkle root of the ethash dag dataset with given epoch 2. Calculate merkle proof of the pow (dataset elements and their merkle proofs) given the pow submission with given block header 3. Generate dag datase"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Dependencies include (from ",e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/eth2near/ethashproof/go.mod",children:"ethahsproof/go.mod"}),")"]}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"require ("})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" github.com/deckarep/golang-set v1.7.1"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    github.com/edsrzf/mmap-go v1.0.0"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    github.com/ethereum/go-ethereum v1.10.4"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    github.com/hashicorp/golang-lru v0.5.5-0.20210104140557-80c98217689d"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    golang.org/x/crypto v0.0.0-20210322153248-0c34fe9e7dc2"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:")"})})]})})}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/tree/master/eth2near/finality-update-verify",children:"finality-update-verify"})," checks and updates finality using the lighthouse beacon blocks."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Functions include (from ",e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/eth2near/finality-update-verify/src/lib.rs",children:"lib.rs"}),")"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"fn h256_to_hash256(hash: H256) -> Hash256"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"fn tree_hash_h256_to_eth_type_h256(hash: tree_hash::Hash256) -> eth_types::H256"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"fn to_lighthouse_beacon_block_header(bridge_beacon_block_header: &BeaconBlockHeader,) -> types::BeaconBlockHeader {types::BeaconBlockHeader"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"pub fn is_correct_finality_update(ethereum_network: &str, light_client_update: &LightClientUpdate, sync_committee: SyncCommittee, ) -> Result<bool, Box<dyn Error>>"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Dependencies include (from ",e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/eth2near/finality-update-verify/Cargo.toml",children:"finality-update-verify/Cargo.toml"}),")"]}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"["}),e.jsx(n.span,{style:{color:"#032F62",textDecoration:"underline","--shiki-dark":"#96D0FF","--shiki-dark-text-decoration":"inherit"},children:"dependencies"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"]"})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'    eth-types = { path ="../../contracts/near/eth-types/", features = ['}),e.jsx(n.span,{style:{color:"#032F62",textDecoration:"underline","--shiki-dark":"#96D0FF","--shiki-dark-text-decoration":"inherit"},children:'"eip1559"'}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"]}"})]}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'    bls = { git = "https://github.com/aurora-is-near/lighthouse.git", rev = "b624c3f0d3c5bc9ea46faa14c9cb2d90ee1e1dec" }'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'    eth2-utility  = { path ="../../contracts/near/eth2-utility"}'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'    tree_hash = { git = "https://github.com/aurora-is-near/lighthouse.git", rev = "b624c3f0d3c5bc9ea46faa14c9cb2d90ee1e1dec" }'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'    types =  { git = "https://github.com/aurora-is-near/lighthouse.git", rev = "b624c3f0d3c5bc9ea46faa14c9cb2d90ee1e1dec" }'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'    bitvec = "1.0.0"'})}),`
`,e.jsx(n.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    ["}),e.jsx(n.span,{style:{color:"#032F62",textDecoration:"underline","--shiki-dark":"#96D0FF","--shiki-dark-text-decoration":"inherit"},children:"dev-dependencies"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"]"})]}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'    eth2_to_near_relay = { path = "../eth2near-block-relay-rs"}'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'    serde_json = "1.0.74"'})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'    serde = { version = "1.0", features = ['}),e.jsx(n.span,{style:{color:"#032F62",textDecoration:"underline","--shiki-dark":"#96D0FF","--shiki-dark-text-decoration":"inherit"},children:'"derive"'}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"] }"})]}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'    toml = "0.5.9"'})})]})})}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.p,{children:"The following smart contracts are deployed on Ethereum and used for propogating blocks from NEAR to Ethereum."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/tree/master/contracts/eth",children:"Smart Contracts deployed on Ethereum"})," including",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/tree/master/contracts/eth/nearbridge/contracts",children:"Near Bridge Contracts"})," including ",e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/contracts/eth/nearbridge/contracts/NearBridge.sol",children:"NearBridge.sol"})," which the interface ",e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/contracts/eth/nearbridge/contracts/INearBridge.sol",children:"INearBridge.sol"})]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Interface Overview"}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"interface INearBridge {"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    event BlockHashAdded(uint64 indexed height, bytes32 blockHash);"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    event BlockHashReverted(uint64 indexed height, bytes32 blockHash);"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    function blockHashes(uint64 blockNumber) external view returns (bytes32);"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    function blockMerkleRoots(uint64 blockNumber) external view returns (bytes32);"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    function balanceOf(address wallet) external view returns (uint256);"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    function deposit() external payable;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    function withdraw() external;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    function initWithValidators(bytes calldata initialValidators) external;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    function initWithBlock(bytes calldata data) external;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    function addLightClientBlock(bytes calldata data) external;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    function challenge(address payable receiver, uint256 signatureIndex) external;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    function checkBlockProducerSignatureInHead(uint256 signatureIndex) external view returns (bool);"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Key Storage items for epoch and block information"}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    Epoch[3] epochs;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    uint256 curEpoch;"})}),`
`,e.jsx(n.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    mapping(uint64 => bytes32) blockHashes_;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    mapping(uint64 => bytes32) blockMerkleRoots_;"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    mapping(address => uint256) public override balanceOf;"})})]})})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Signing and Serializing Primitives"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/contracts/eth/nearbridge/contracts/NearDecoder.sol",children:"NearDecoder.sol"}),": handles decoing of Public Keys, Signatures, BlockProducers and LightClientBlocks using ",e.jsx(n.code,{children:"Borsh.sol"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/contracts/eth/nearbridge/contracts/Utils.sol",children:"Utils.sol"}),": handles reading and writing to memory, memoryToBytes and has functions such as ",e.jsx(n.code,{children:"keccak256Raw"})," and ",e.jsx(n.code,{children:"sha256Raw"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/contracts/eth/nearbridge/contracts/Borsh.sol",children:"Borsh.sol"}),": ",e.jsx(n.a,{href:"https://borsh.io/",children:"Borsh"}),": Binary Object Representation Serializer for Hashing. It is meant to be used in security-critical projects as it prioritizes consistency, safety, speed; and comes with a strict specification."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/contracts/eth/nearbridge/contracts/Ed25519.sol",children:"Ed25519.sol"}),": ",e.jsx(n.a,{href:"https://ed25519.cr.yp.to/",children:"Ed25519"})," high-speed high-security signatures"]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/tree/master/contracts/eth/nearprover/contracts",children:"Near Prover Contracts"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/contracts/eth/nearprover/contracts/NearProver.sol",children:"NearProver.sol"}),": Has a ",e.jsx(n.code,{children:"proveOutcome"})," which validates the outcome merkle proof and the block proof is valid using ",e.jsx(n.code,{children:"_computeRoot"})," which is passed in a ",e.jsx(n.code,{children:"bytes32 node, ProofDecoder.MerklePath memory proof"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/contracts/eth/nearprover/contracts/ProofDecoder.sol",children:"ProofDecoder.sol"}),": Uses MerklePaths to provide decoding functions such as ",e.jsx(n.code,{children:"decodeExecutionStatus"}),", ",e.jsx(n.code,{children:"decodeExecutionOutcome"}),", ",e.jsx(n.code,{children:"decodeExecutionOutcomeWithId"}),", ",e.jsx(n.code,{children:"decodeMerklePathItem"}),", ",e.jsx(n.code,{children:"decodeMerklePath"})," and ",e.jsx(n.code,{children:"decodeExecutionOutcomeWithIdAndProof"}),". It relies on the primitives ",e.jsx(n.code,{children:"Borsh.sol"})," and ",e.jsx(n.code,{children:"NearDecoder.sol"})," above."]}),`
`]}),`
`]}),`
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
`})]})}function a(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{a as default,c as frontmatter};
