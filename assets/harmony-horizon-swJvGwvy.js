import{f as t,j as e}from"./index-BJTdkYSN.js";const s={title:"Harmony Horizon",description:"undefined"};function r(i){const n={a:"a",code:"code",div:"div",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"harmony-horizon",children:["Harmony Horizon",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#harmony-horizon",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"date: 2023-02-24"}),`
`,e.jsx(n.li,{children:"last updated: 2023-02-24"}),`
`]}),`
`,e.jsxs(n.h2,{id:"overview",children:["Overview",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#overview",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["This document reviews the ",e.jsx(n.a,{href:"https://github.com/johnwhitton/horizon/tree/refactorV2",children:"horizon"})," current implementation, development tasks that need to be done to support POW and offers some thoughts on next steps to support Ethereum 2.0 and other chains."]}),`
`,e.jsxs(n.p,{children:["Further thoughs on ETH 2.0 support, removing the ETHHASH logic and SPV client and potentially replacing with MMR trees per epoch and checkpoints similar to Harmony Light Client on Ethereum, can find inspiration in ",e.jsx(n.a,{href:"/near-rainbow",children:"near-rainbow"}),"."]}),`
`,e.jsxs(n.h2,{id:"approach",children:["Approach",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#approach",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Horizon 2.0 approach is to use validity proofs implemented by on-chain smart contracts."}),`
`,e.jsxs(n.h2,{id:"proving-mechanisms",children:["Proving Mechanisms",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#proving-mechanisms",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
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
`,e.jsxs(n.h2,{id:"relayer-mechanisms",children:["Relayer Mechanisms",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#relayer-mechanisms",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
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
`,e.jsxs(n.h2,{id:"light-client-functionality",children:["Light Client Functionality",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#light-client-functionality",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h3,{id:"ethereum-light-client-1",children:["Ethereum Light Client",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#ethereum-light-client-1",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["ETH 2.0 support see ",e.jsx(n.a,{href:"/research/chains/ethereum",children:"here"})]}),`
`,e.jsx(n.li,{children:"Queuing mechanism should be implemented to queue bridge transactions. The queue can be polled as part of the block relay functionality to process bridge transactions once the blocks have been relayed."}),`
`,e.jsx(n.li,{children:"Consider whether we can use p2p messaging to receive published blocks rather than looping and polling via an RPC."}),`
`]}),`
`,e.jsxs(n.h3,{id:"harmony-light-client-1",children:["Harmony Light Client",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#harmony-light-client-1",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Needs to implement a process to ",e.jsx(n.code,{children:"submitCheckpoint"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"eprove"})," logic needs to be reviewed"]}),`
`,e.jsxs(n.li,{children:["Queuing mechanism should be implemented to queue bridge transactions. The queue can be polled as part of the ",e.jsx(n.code,{children:"submitCheckpoint"})," functionality to process bridge transactions once the blocks have been relayed."]}),`
`,e.jsxs(n.li,{children:["Need to facilitate the core protocol ",e.jsx(n.a,{href:"https://github.com/harmony-one/harmony/pull/4198/files",children:"MMR enhancements PR"})]}),`
`]}),`
`,e.jsxs(n.h2,{id:"token-lockers",children:["Token Lockers",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#token-lockers",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["Note: The key difference between ",e.jsx(n.code,{children:"TokenLockerOnEthereum.sol"})," and ",e.jsx(n.code,{children:"TokenLockerOnHarmony.sol"})," is the proof validation. ",e.jsx(n.code,{children:"TokenLockerOnEthereum.sol"})," uses ",e.jsx(n.code,{children:"./lib/MMRVerifier.sol"})," to validate the ",e.jsx(n.a,{href:"https://github.com/opentimestamps/opentimestamps-server/blob/master/doc/merkle-mountain-range.mdx",children:"Mountain Merkle Ranges"})," on Harmony and ",e.jsx(n.code,{children:"HarmonyProver.sol"}),". ",e.jsx(n.code,{children:"TokenLockerOnHarmony.sol"})," imports ",e.jsx(n.code,{children:"./lib/MPTValidatorV2.sol"})," to validate ",e.jsx(n.a,{href:"https://ethereum.org/en/developers/docs/data-structures-and-encoding/patricia-merkle-trie/#merkle-patricia-trees",children:"Merkle Patrica Trie"})," and ",e.jsx(n.code,{children:"./EthereumLightClient.sol"}),"."]})}),`
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
`]}),`
`,e.jsxs(n.h2,{id:"code-review",children:["Code Review",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#code-review",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["The code reviewed is from a fork of ",e.jsx(n.a,{href:"https://github.com/harmony-one/horizon",children:"harmony-one/horizon"}),". The fork is ",e.jsx(n.a,{href:"https://github.com/johnwhitton/horizon/tree/refactorV2",children:"johnwhitton/horizon branch refactorV2"}),". This is part of the horizon v2 initiative to bride a trustless bridge after the initial horizon hack. The code is incomplete and the original codebase did not support ethereum 2.0 (only ethereum 1.0). Nevertheless there are a number of useful components developed which can be leveraged in building a trustless bridge."]}),`
`,e.jsxs(n.h2,{id:"on-chain-solidity-code-review",children:["On-chain (Solidity) Code Review",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#on-chain-solidity-code-review",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["Note: here we document functionality developed in solidity. We recommend reading the ",e.jsx(n.a,{href:"https://docs.openzeppelin.com/contracts/4.x/",children:"Open Zeppelin Contract Documentation"})," specifically the ",e.jsx(n.a,{href:"https://docs.openzeppelin.com/contracts/4.x/utilities",children:"utilities"})," have a number of utitlies we leverage around signing and proving. We tend to utilize the ",e.jsx(n.a,{href:"https://github.com/OpenZeppelin/openzeppelin-contracts-upgradeable",children:"openzeppelin-contracts-upgradeabe repository"})," when building over the documented ",e.jsx(n.a,{href:"https://github.com/OpenZeppelin/openzeppelin-contracts",children:"openzeppelin-contracts repository"})," as we are often working with contracts which we wish to upgrade, there should be equivalent contracts in both repositories."]})}),`
`,e.jsxs(n.h3,{id:"openzeppelin-utilities",children:["OpenZeppelin Utilities",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#openzeppelin-utilities",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://docs.openzeppelin.com/contracts/4.x/api/utils",children:"Utilities"}),": Miscellaneous contracts and libraries containing utility functions you can use to improve security, work with new data types, or safely use low-level primitives.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://docs.openzeppelin.com/contracts/4.x/api/utils#math",children:"Math"}),": Standard math utilities missing in the Solidity language."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://docs.openzeppelin.com/contracts/4.x/api/utils#cryptography",children:"Cryptography"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://docs.openzeppelin.com/contracts/4.x/api/utils#ECDSA",children:"ECDSA"}),": Elliptic Curve Digital Signature Algorithm (ECDSA) operations."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://docs.openzeppelin.com/contracts/4.x/api/utils#SignatureChecker",children:"SignatureChecker"}),": Signature verification helper that can be used instead of ECDSA.recover to seamlessly support both ECDSA signatures from externally owned accounts (EOAs) as well as ERC1271 signatures from smart contract wallets like Argent and Gnosis Safe."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://docs.openzeppelin.com/contracts/4.x/api/utils#MerkleProof",children:"MerkleProof"}),": These functions deal with verification of Merkle Tree proofs."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://docs.openzeppelin.com/contracts/4.x/api/utils#EIP712",children:"EIP712"}),": ",e.jsx(n.a,{href:"https://eips.ethereum.org/EIPS/eip-712",children:"EIP 712"})," is a standard for hashing and signing of typed structured data."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://docs.openzeppelin.com/contracts/4.x/api/utils#escrow",children:"Escrow"}),": Base escrow contract, holds funds designated for a payee until they withdraw them."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://docs.openzeppelin.com/contracts/4.x/api/utils#introspection",children:"Introspection"}),": This set of interfaces and contracts deal with ",e.jsx(n.a,{href:"https://en.wikipedia.org/wiki/Type_introspection",children:"type introspection"})," of contracts, that is, examining which functions can be called on them. This is usually referred to as a contract’s ",e.jsx(n.em,{children:"interface"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://docs.openzeppelin.com/contracts/4.x/api/utils#data_structures",children:"Data Structures"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://docs.openzeppelin.com/contracts/4.x/api/utils#BitMaps",children:"BitMaps"}),": Library for managing uint256 to bool mapping in a compact and efficient way, providing the keys are sequential. Largely inspired by Uniswap’s ",e.jsx(n.a,{href:"https://github.com/Uniswap/merkle-distributor/blob/master/contracts/MerkleDistributor.sol",children:"merkle-distributor"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://docs.openzeppelin.com/contracts/4.x/api/utils#EnumerableMap",children:"EnumerableMap"}),": Library for managing an enumerable variant of Solidity’s ",e.jsx(n.a,{href:"https://solidity.readthedocs.io/en/latest/types.html#mapping-types",children:"mapping"})," type."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://docs.openzeppelin.com/contracts/4.x/api/utils#EnumerableSet",children:"EnumerableSet"}),": Library for managing ",e.jsx(n.a,{href:"https://en.wikipedia.org/wiki/Set_(abstract_data_type)",children:"sets"})," of primitive types."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://docs.openzeppelin.com/contracts/4.x/api/utils#DoubleEndedQueue",children:"DoubleEndedQueue"}),": A sequence of items with the ability to efficiently push and pop items (i.e. insert and remove) on both ends of the sequence (called front and back)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://docs.openzeppelin.com/contracts/4.x/api/utils#Checkpoints",children:"Checkpoints"}),": This library defines the ",e.jsx(n.code,{children:"History"})," struct, for checkpointing values as they change at different points in time, and later looking up past values by block number. See ",e.jsx(n.a,{href:"https://docs.openzeppelin.com/contracts/4.x/api/governance#Votes",children:"Votes"})," as an example."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://docs.openzeppelin.com/contracts/4.x/api/governance#Votes",children:"Libraries"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://docs.openzeppelin.com/contracts/4.x/api/utils#Create2",children:"Create2"}),": Helper to make usage of the ",e.jsx(n.code,{children:"CREATE2"})," EVM opcode easier and safer."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://docs.openzeppelin.com/contracts/4.x/api/utils#Address",children:"Address"}),": Collection of functions related to the address type"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://docs.openzeppelin.com/contracts/4.x/api/utils#Arrays",children:"Arrays"}),": Collection of functions related to array types."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://docs.openzeppelin.com/contracts/4.x/api/utils#Base64",children:"Base64"}),": Provides a set of functions to operate with Base64 strings."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://docs.openzeppelin.com/contracts/4.x/api/utils#Counters",children:"Counters"}),": Provides counters that can only be incremented, decremented or reset."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://docs.openzeppelin.com/contracts/4.x/api/utils#Strings",children:"Strings"}),": String operations."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://docs.openzeppelin.com/contracts/4.x/api/utils#StorageSlot",children:"StorageSlot"}),": Library for reading and writing primitive types to specific storage slots. Storage slots are often used to avoid storage conflict when dealing with upgradeable contracts."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://docs.openzeppelin.com/contracts/4.x/api/utils#Multicall",children:"Multicall"}),": Provides a function to batch together multiple calls in a single external call."]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.h3,{id:"cryptographic-primitives",children:["Cryptographic Primitives",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#cryptographic-primitives",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/johnwhitton/horizon/tree/refactorV2/contracts/ethash",children:"ethash"}),": used in proving ethereum 1.0 ",e.jsx(n.a,{href:"https://github.com/johnwhitton/horizon/tree/refactorV2/contracts/ethash",children:"ethash"})," proof of work.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/johnwhitton/horizon/blob/refactorV2/contracts/ethash/MerkelRoot.sol",children:"MerkleRoot.sol"}),": provides the ability to getRootHash for a given epoch. Needs to be initialized with a start and end epoch and an initial merkle root."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/johnwhitton/horizon/blob/refactorV2/contracts/ethash/Prime.sol",children:"Prime.sol"}),": Determins if a number is likely to be prime, based on the ",e.jsx(n.a,{href:"https://en.wikipedia.org/wiki/Miller%E2%80%93Rabin_primality_test",children:"Miller-Rabin primality test"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/johnwhitton/horizon/blob/refactorV2/contracts/ethash/binary.sol",children:"binary.sol"}),": Binary number manipulation."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/johnwhitton/horizon/blob/refactorV2/contracts/ethash/ethash.sol",children:"ethash.sol"}),": Provides the ability to verifyHash using a ",e.jsx(n.a,{href:"https://ethereum.org/en/developers/docs/consensus-mechanisms/pow/mining-algorithms/dagger-hashimoto/",children:"hashimto function"})," and ",e.jsx(n.a,{href:"https://en.wikipedia.org/wiki/Fowler%E2%80%93Noll%E2%80%93Vo_hash_function",children:"fnv hashing"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/johnwhitton/horizon/blob/refactorV2/contracts/ethash/keccak512.sol",children:"kecakk512.sol"}),": Keccak512 hash function supporting ",e.jsx(n.a,{href:"https://en.wikipedia.org/wiki/SHA-3",children:"SHA-3"}),"."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/johnwhitton/horizon/tree/refactorV2/contracts/lib",children:"lib"}),": utility library",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/johnwhitton/horizon/blob/refactorV2/contracts/lib/ECVerify.sol",children:"ECVerify.sol"}),": Verify's a signature and returns the signer address."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/johnwhitton/horizon/blob/refactorV2/contracts/lib/EthUtils.sol",children:"EthUtils"}),": hexString and byte manipulation"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/johnwhitton/horizon/blob/refactorV2/contracts/lib/MMR.sol",children:"MMR.sol"}),": Merkle Mountain Range solidity library"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/johnwhitton/horizon/blob/refactorV2/contracts/lib/MMRWrapper.sol",children:"MMRWrapper.sol"}),": Merkle Mountain Range wrapper functions."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/johnwhitton/horizon/blob/refactorV2/contracts/lib/MPT.sol",children:"MPT.sol"}),": Merkle Patricie Tries validation tools (uses RLPReader.sol)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/johnwhitton/horizon/blob/refactorV2/contracts/lib/MPTValidatorV2.sol",children:"MPTValidatorV2.sol"}),": Merkle Particia Tries validation tools improved by LayerZero"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/johnwhitton/horizon/blob/refactorV2/contracts/lib/RLPEncode.sol",children:"RLPEncode.sol"}),": A simple RLP encoding library."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/johnwhitton/horizon/blob/refactorV2/contracts/lib/RLPReader.sol",children:"RLPReader.sol"}),": RLP Reader"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/johnwhitton/horizon/blob/refactorV2/contracts/lib/SafeCast.sol",children:"Safecast.sol"}),": Safe casting function for Uints."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.h3,{id:"proving-mechanisms-1",children:["Proving Mechanisms",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#proving-mechanisms-1",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.strong,{children:"Ethereum 1.0 contracts deployed to Harmony"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/johnwhitton/horizon/blob/refactorV2/contracts/EthereumLightClient.sol",children:"EthereumLightClient.sol"}),": Light Client for Ethereum 1.0, stores a mapping of blocks existing in the Canonical Chain verified using EthHash."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/johnwhitton/horizon/blob/refactorV2/contracts/EthereumParser.sol",children:"EthereumParser.sol"}),": Parse RLP-encoded block header into BlockHeader data structure and transactions with data fields order as defined in the Tx struct."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/johnwhitton/horizon/blob/refactorV2/contracts/EthereumProver.sol",children:"EthereumProver.sol"}),": Computes the hash of the Merkle-Patricia-Trie hash of the input and Validates a Merkle-Patricia-Trie proof. If the proof proves the inclusion of some key-value pair in the trie, the value is returned."]}),`
`]}),`
`,e.jsx(n.strong,{children:"Harmony contracts deployed to Ethereum 1.0"}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["Note these contracts were planned to be implemented with Harmony Light Client support which includes Merkle Mountain Ranges (see this ",e.jsx(n.a,{href:"https://github.com/harmony-one/harmony/pull/3872",children:"PR"})," and this ",e.jsx(n.a,{href:"/Users/johnwhitton/dev/jincubator/docs/docs/pages/research/chains/harmony#light-client-support",children:"review"}),"). The planned timeline for implementing this had not been finalized as of Feb 2023."]})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/johnwhitton/horizon/blob/refactorV2/contracts/HarmonyLightClient.sol",children:"HarmonyLightClient.sol"}),": Allows submission of checkpoints and manages mappings for ",e.jsx(n.code,{children:"checkPointBlocks"})," (holding blockHeader information including the Merkle Mountain Range Root field ",e.jsx(n.code,{children:"mmrRoot"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/johnwhitton/horizon/blob/refactorV2/contracts/HarmonyParser.sol",children:"HarmonyParser.sol"}),": Parse RLP-encoded block header into BlockHeader data structure and transactions with data fields order as defined in the Transaction struct."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/johnwhitton/horizon/blob/refactorV2/contracts/HarmonyProver.sol",children:"HarmonyProver.sol"}),": Verification functions for Blocks, Transaction, Receipts etc. Verification is done by verifying MerkleProofs via ",e.jsx(n.code,{children:"MPTValidator2.sol"}),"."]}),`
`]}),`
`,e.jsxs(n.h3,{id:"token-lockers-1",children:["Token Lockers",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#token-lockers-1",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/johnwhitton/horizon/blob/refactorV2/contracts/BridgedToken.sol",children:"BridgeToken.sol"}),": ERC20 contract used for managing bridged tokens."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/johnwhitton/horizon/blob/refactorV2/contracts/FaucetToken.sol",children:"FaucetToken.sol"}),": ERC20 Token Faucet used for testing on testnets."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/johnwhitton/horizon/blob/refactorV2/contracts/TokenLocker.sol",children:"TokenLocker.sol"}),": Locks Bridged Tokens"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/johnwhitton/horizon/blob/refactorV2/contracts/TokenLockerOnEthereum.sol",children:"TokenLockerOnEthereum.sol"}),": Ethereum TokenLocker"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/johnwhitton/horizon/blob/refactorV2/contracts/TokenLockerOnHarmony.sol",children:"TokenLockerOnHarmony.sol"}),": Harmony TokenLocker"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/johnwhitton/horizon/blob/refactorV2/contracts/TokenRegistry.sol",children:"TokenRegistry.sol"}),": Responsible for mapping tokens between chains and minting new bridged tokens."]}),`
`]}),`
`,e.jsxs(n.h2,{id:"off-chain-javascript-code-review",children:["Off-chain (Javascript) Code Review",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#off-chain-javascript-code-review",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h3,{id:"on-chain-interaction",children:["On-chain interaction",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#on-chain-interaction",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/johnwhitton/horizon/tree/refactorV2/src/bridge",children:"bridge"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/johnwhitton/horizon/blob/refactorV2/src/bridge/bridge.js",children:"bridge.js"}),": Interacts with provers and tokenLockers on the respective chains to perform the bridging of tokens across chains."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/johnwhitton/horizon/blob/refactorV2/src/bridge/contract.js",children:"contract.js"}),": Responsible for deploying contracts, mapping tokens between chains and checking token status."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/johnwhitton/horizon/blob/refactorV2/src/bridge/ethBridge.js",children:"ethBridge.js"}),": extends bridge.js with a constructor for Ethereum"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/johnwhitton/horizon/blob/refactorV2/src/bridge/hmyBridge.js",children:"hmyBridge.js"}),": extens bridge.js with a constructor for Harmony"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/johnwhitton/horizon/blob/refactorV2/src/bridge/token.js",children:"token.js"}),": interacts with ERC20 and FaucetToken (for testing)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/johnwhitton/horizon/blob/refactorV2/src/cli/index.js",children:"index.js"}),": Command Line Interface commands."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.h3,{id:"command-line-interface",children:["Command Line Interface",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#command-line-interface",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/johnwhitton/horizon/tree/refactorV2/src/cli",children:"cli"}),": CLI is a utility that provides a command-line interface to all the components to the Horizon bridge and allow performing end-to-end bridge functionalities.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/johnwhitton/horizon/blob/refactorV2/src/cli/elc.js",children:"elsc.js"}),": Ethereum Light Client deployed on Harmony. Supports deployment, status checks and querying block information."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/johnwhitton/horizon/blob/refactorV2/src/cli/ethRelay.js",children:"ethRelay.js"}),": Block Relayer from Ethereum to Harmony"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/johnwhitton/horizon/blob/refactorV2/src/cli/everifier.js",children:"everifier.js"}),": Ethereum Verifier for Harmony. Supports the deployment of the verifier and validating Merkle Patricia Trie proofs from Harmony."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/johnwhitton/horizon/blob/refactorV2/src/cli/index.js",children:"index.js"}),": Commands for the CLI."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.h3,{id:"ethereum-light-client-2",children:["Ethereum Light Client",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#ethereum-light-client-2",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/johnwhitton/horizon/blob/refactorV2/src/elc/README.mdx",children:"elc"}),": Ethereum Light Client (ELC) is a SPV-based light client implemented as a smart contract that receives and stores Ethereum block header information.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/johnwhitton/horizon/blob/refactorV2/src/elc/MerkelRoot.json",children:"MerkleRoot.json"}),": Holds starting epoch and Merkle root information."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/johnwhitton/horizon/blob/refactorV2/src/elc/MerkelRootSol.js",children:"MerkleRootSol.js"}),": Deploys a MerkleRoot.sol contract on Harmony for the given Ethereum epoch and merkle root information."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/johnwhitton/horizon/blob/refactorV2/src/elc/client.js",children:"client.js"}),": Interaction with the Client.sol (the Ethereum Light Client deployed on Harmony)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/johnwhitton/horizon/blob/refactorV2/src/elc/eth2one-relay.js",children:"eth2one.js"}),": Relays blocks from ethereum to Harmony."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/johnwhitton/horizon/blob/refactorV2/src/elc/proofDump.js",children:"proofDump"}),": Allows logging of dagProofs for blocks and epochs and writing them to files."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.h3,{id:"proving-mechanisms-2",children:["Proving Mechanisms",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#proving-mechanisms-2",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.strong,{children:"Ethereum Prover"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/johnwhitton/horizon/tree/refactorV2/src/eprover",children:"eprover"}),": EProver is a utility that provides verifiable proof about user’s Ethereum tx, e.g., lock tx.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/johnwhitton/horizon/blob/refactorV2/src/eprover/Receipt.js",children:"Receipt.js"}),": Allows retreival of a receipt from Rpc, buffer or hex and serailiation of receipt."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/johnwhitton/horizon/blob/refactorV2/src/eprover/index.js",children:"index.js"}),": exports Eprover"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/johnwhitton/horizon/blob/refactorV2/src/eprover/txProof.js",children:"txProof.js"}),": Takes a transaction hash and gets a receipt proof (sha3 hash, recieptRoor, proof and an encoded txIndex)."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.h3,{id:"relayer-mechanisms-1",children:["Relayer Mechanisms",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#relayer-mechanisms-1",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.strong,{children:"Ethereum to Harmony Relayer"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/johnwhitton/horizon/tree/refactorV2/src/eth2hmy-relay",children:"eth2hmy-relay"}),": Eth2Hmy relay downloads the Ethereum block headers, extract information and relay it to ELC smart contract on Harmony.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/johnwhitton/horizon/blob/refactorV2/src/eth2hmy-relay/index.js",children:"index.js"}),": exports ",e.jsx(n.code,{children:"DagProof"})," and ",e.jsx(n.code,{children:"getBlockByNumber"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/johnwhitton/horizon/tree/refactorV2/src/eth2hmy-relay/ethash",children:"ethash"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/johnwhitton/horizon/blob/refactorV2/src/eth2hmy-relay/ethash/dist/index.js",children:"index.js"}),": Loads the epoch seed and cache given a block number and uses this to verify Proof of Work for headers and blocks."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/johnwhitton/horizon/blob/refactorV2/src/eth2hmy-relay/ethash/dist/util.js",children:"util.js"}),": Utilities for epochs including caching, hashing and retreival of seeds and buffers."]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.h3,{id:"cryptographic-primitives-1",children:["Cryptographic Primitives",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#cryptographic-primitives-1",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/johnwhitton/horizon/tree/refactorV2/src/eth2hmy-relay/lib",children:"eth2hmy-relay/lib"}),": Library of functions used by the Ethereum to Harmony Relay",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/johnwhitton/horizon/blob/refactorV2/src/eth2hmy-relay/lib/DagProof.js",children:"DagPropf.js"}),": Checks if a dag exists for an epoch, loads DAG for an epoch and verify header and getProof using the epoch's DAG."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/johnwhitton/horizon/blob/refactorV2/src/eth2hmy-relay/lib/MmapDB.js",children:"MmapDB.js"}),": Merkle database functionality by extending Memory Map."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/johnwhitton/horizon/blob/refactorV2/src/eth2hmy-relay/lib/getBlockHeader.js",children:"getBlockHeader.js"}),": Get Block information."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/johnwhitton/horizon/blob/refactorV2/src/eth2hmy-relay/lib/merkel.js",children:"merkel.js"}),": MerkleTree functionality including construction of MerkleTrees and getting proofs, hex proofs, combined hashes, get Paired Elements and layers."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/johnwhitton/horizon/tree/refactorV2/src/ethashProof",children:"ethashProof"}),": ethash proving mechanisms",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/johnwhitton/horizon/blob/refactorV2/src/ethashProof/BlockProof.js",children:"BlockProof.js"}),": Exports getHeaderProof, parseRlpHeader, getBlockByNumber"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/johnwhitton/horizon/blob/refactorV2/src/ethashProof/DagMtreeEpoch.js",children:"DagMTreeEpoch.js"}),": Exports generateDagMTree, genearateDagMTreeRange"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/johnwhitton/horizon/blob/refactorV2/src/ethashProof/MerkelRootSol.js",children:"MerkelRootSol.js"}),": Creates a MerkleRoot.sol contract for an inputted merkleInfo."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/johnwhitton/horizon/tree/refactorV2/src/lib",children:"lib"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/johnwhitton/horizon/blob/refactorV2/src/lib/configure.js",children:"configure.js"}),": Configure TokenLocker and Faucet contracts."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/johnwhitton/horizon/blob/refactorV2/src/lib/ethEthers.js",children:"ethEthers.js"}),": Shim over ",e.jsx(n.a,{href:"https://www.npmjs.com/package/ethers",children:"ethers"})," allowing the instantiation of connections using a configured private key."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/johnwhitton/horizon/blob/refactorV2/src/lib/logger.js",children:"logger.js"}),": Logging Functions"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/johnwhitton/horizon/blob/refactorV2/src/lib/utils.ts",children:"utils.ts"}),": Utility functions including (buffer2hex, rpcWrapper, toRLPHeader, getReceiptLight, getReceipt, getReceiptRlp, getReceiptTrie,hex2key,index2key, expandkey, getReceiptProof, getTransactionProof, getAccountProof, getStorageProof, getKeyFromProof, fullToMin)"]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.strong,{children:"npm packages"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://www.npmjs.com/package/@ethereumjs/block",children:"@ethereumjs/block"}),": Implements schema and functions related to Ethereum's block. (Ethereum 1.0 or Execution Chain for Ethereum 2.0)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://www.npmjs.com/package/ethereumjs-util",children:"ethereumjs-util"}),": A collection of utility functions for Ethereum. It can be used in Node.js and in the browser with browserify."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://www.npmjs.com/package/ethers",children:"ethers"}),": A complete, compact and simple library for Ethereum and ilk, written in TypeScript."]}),`
`,e.jsx(n.li,{}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://www.npmjs.com/package/miller-rabin",children:"miller-rabin"}),": implements ",e.jsx(n.a,{href:"https://en.wikipedia.org/wiki/Miller%E2%80%93Rabin_primality_test",children:"Miller Rabin primality test"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://www.npmjs.com/package/mmap-io",children:"mmap-io"}),": Memory Map for node.js"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://www.npmjs.com/package/sha3",children:"sha3"}),": A pure JavaScript implementation of the Keccak family of cryptographic hashing algorithms, most notably including Keccak and SHA3."]}),`
`,e.jsx(n.li,{}),`
`]}),`
`,e.jsxs(n.h3,{id:"light-client-functionality-1",children:["Light Client Functionality",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#light-client-functionality-1",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h3,{id:"token-lockers-2",children:["Token Lockers",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#token-lockers-2",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h2,{id:"references",children:["References",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#references",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h2,{id:"appendices",children:["Appendices",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#appendices",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h3,{id:"appendix-a-current-implementation-walkthough",children:["Appendix A: Current Implementation Walkthough",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#appendix-a-current-implementation-walkthough",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Following is a detailed walk though of the current implementation of the Ethereum Light Client and the flow for mapping tokens from Ethereum to Harmony."}),`
`,e.jsxs(n.h4,{id:"ethereum-light-client-on-harmony",children:["Ethereum Light Client (on Harmony)",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#ethereum-light-client-on-harmony",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
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
`]})]})}function h(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{h as default,s as frontmatter};
