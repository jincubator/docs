import{f as s,j as e}from"./index-DqfsgKWs.js";const o={title:"Cosmos",description:"undefined"};function t(i){const n={a:"a",blockquote:"blockquote",code:"code",div:"div",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"cosmos",children:["Cosmos",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#cosmos",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(n.p,{children:"-date: 2023-02-04"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"last updated: 2023-02-04"}),`
`]}),`
`,e.jsxs(n.h2,{id:"overview",children:["Overview",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#overview",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["Cosmos is the hub to almost 50 blockchains based on the Tendermint consensus engine and Inter-Blockchain Communication (IBC) protocol. It is also one of the earliest proponents for cross-chain communication and defined the first set of communication specificiations",e.jsx("sup",{children:e.jsx(n.a,{href:"#f24",children:"24"})}),". From a purely technical point of view, the signature scheme for signing blocks, Ed25519, is also often used in many other protocols, such as NEAR."]}),`
`,e.jsxs(n.p,{children:["Cosmos Hub itself has 175 validators",e.jsx("sup",{children:e.jsx(n.a,{href:"#f25",children:"25"})})," and is built upon Tendermint, in which validators sign blocks using EdDSA on Curve25519 (i.e., Ed25519)",e.jsx("sup",{children:e.jsx(n.a,{href:"#f26",children:"26"})}),"."]}),`
`,e.jsxs(n.h2,{id:"consensus-mechanism",children:["Consensus Mechanism",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#consensus-mechanism",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["For a deep dive on Tendemints Consensus, please read ",e.jsx(n.a,{href:"https://arxiv.org/pdf/1807.04938.pdf",children:"The latest gossip on BFT consensus"}),": The paper presents Tendermint, a new protocol for ordering events in a distributed network under adversarial conditions."]}),`
`,e.jsxs(n.p,{children:["Following is an excerpt from ",e.jsx(n.a,{href:"https://github.com/tendermint/tendermint/blob/main/docs/introduction/what-is-tendermint.mdx",children:"What is Tendermint"})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Tendermint is an easy-to-understand, mostly asynchronous, BFT consensus protocol. The protocol follows a simple state machine that looks like this:"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/images/research/tendermint_consensus_logic.png",alt:"consensus-logic"})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Participants in the protocol are called ",e.jsx(n.strong,{children:"validators"}),"; they take turns proposing blocks of transactions and voting on them. Blocks are committed in a chain, with one block at each ",e.jsx(n.strong,{children:"height"}),". A block may fail to be committed, in which case the protocol moves to the next ",e.jsx(n.strong,{children:"round"}),", and a new validator gets to propose a block for that height. Two stages of voting are required to successfully commit a block; we call them ",e.jsx(n.strong,{children:"pre-vote"})," and ",e.jsx(n.strong,{children:"pre-commit"}),". A block is committed when more than 2/3 of validators pre-commit for the same block in the same round."]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["There is a picture of a couple doing the polka because validators are doing something like a polka dance. When more than two-thirds of the validators pre-vote for the same block, we call that a ",e.jsx(n.strong,{children:"polka"}),". Every pre-commit must be justified by a polka in the same round."]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Validators may fail to commit a block for a number of reasons; the current proposer may be offline, or the network may be slow. Tendermint allows them to establish that a validator should be skipped. Validators wait a small amount of time to receive a complete proposal block from the proposer before voting to move to the next round. This reliance on a timeout is what makes Tendermint a weakly synchronous protocol, rather than an asynchronous one. However, the rest of the protocol is asynchronous, and validators only make progress after hearing from more than two-thirds of the validator set. A simplifying element of Tendermint is that it uses the same mechanism to commit a block as it does to skip to the next round."}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Assuming less than one-third of the validators are Byzantine, Tendermint guarantees that safety will never be violated - that is, validators will never commit conflicting blocks at the same height. To do this it introduces a few ",e.jsx(n.strong,{children:"locking"})," rules which modulate which paths can be followed in the flow diagram. Once a validator precommits a block, it is locked on that block. Then,"]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"it must prevote for the block it is locked on"}),`
`,e.jsx(n.li,{children:"it can only unlock, and precommit for a new block, if there is a polka for that block in a later round"}),`
`]}),`
`]}),`
`,e.jsxs(n.h2,{id:"signing-mechanism",children:["Signing Mechanism",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#signing-mechanism",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["Below is an excerpt from ",e.jsx(n.a,{href:"https://github.com/tendermint/tendermint/blob/main/spec/core/encoding.md#public-key-cryptography",children:"Tendermint Specification"})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Tendermint uses Protobuf ",e.jsx(n.a,{href:"https://protobuf.dev/programming-guides/proto3/#oneof",children:"Oneof"})," to distinguish between different types public keys, and signatures. Additionally, for each public key, Tendermint defines an Address function that can be used as a more compact identifier in place of the public key."]}),`
`,e.jsxs(n.h3,{id:"key-types",children:["Key Types",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#key-types",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Each type specifies it's own pubkey, address, and signature format."}),`
`,e.jsxs(n.h4,{id:"ed25519",children:["Ed25519",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#ed25519",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"The address is the first 20-bytes of the SHA256 hash of the raw 32-byte public key:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(n.code,{children:e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"address "}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" SHA256"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(pubkey)[:"}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"20"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"]"})]})})})}),`
`,e.jsx(n.p,{children:"The signature is the raw 64-byte ED25519 signature."}),`
`,e.jsxs(n.p,{children:["Tendermint adopted ",e.jsx(n.a,{href:"https://zips.z.cash/zip-0215",children:"zip215"})," for verification of ed25519 signatures."]}),`
`,e.jsx(n.p,{children:"Note: This change will be released in the next major release of Tendermint-Go (0.35)."}),`
`]}),`
`,e.jsxs(n.h4,{id:"secp256k1",children:["Secp256k1",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#secp256k1",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"The address is the first 20-bytes of the SHA256 hash of the raw 32-byte public key:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(n.code,{children:e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"address "}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" SHA256"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(pubkey)[:"}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"20"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"]"})]})})})}),`
`,e.jsxs(n.p,{children:["Following is an excerpt from ",e.jsx(n.a,{href:"https://docs.tendermint.com/v0.34/tendermint-core/validators.html#",children:"Tendermint docs: Validator Keys"})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Currently Tendermint uses Ed25519 (opens new window)keys which are widely supported across the security sector and HSMs."}),`
`]}),`
`,e.jsxs(n.h2,{id:"code-review",children:["Code Review",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#code-review",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h3,{id:"signing",children:["Signing",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#signing",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/tendermint/tendermint/tree/main/crypto/ed25519",children:"ed25519"}),": Sign produces a signature on the provided message. This assumes the privkey is wellformed in the golang format. The first 32 bytes should be random, corresponding to the normal ed25519 private key. The latter 32 bytes should be the compressed public key. If these conditions aren't met, Sign will panic or produce an incorrect signature."]}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/tendermint/tendermint/tree/main/crypto/secp256k1",children:"secp256k1"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/tendermint/tendermint/tree/main/crypto/sr25519",children:"sr25519"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/tendermint/tendermint/blob/main/crypto/encoding/codec.go",children:"codec.go"}),": Tranforms protobuf publick key to crypto public keys and vice versa. Support secp256k1 and edd25519."]}),`
`]}),`
`,e.jsxs(n.h3,{id:"consensus",children:["Consensus",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#consensus",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/tendermint/tendermint/tree/main/consensus",children:"consensus"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/tendermint/tendermint/blob/main/consensus/state.go",children:"state"}),": State handles execution of the consensus algorithm. It processes votes and proposals, and upon reaching agreement, commits blocks to the chain and executes them against the application. The internal state machine receives input from peers, the internal validator, and from a timer."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.h3,{id:"cryptographic-primitives",children:["Cryptographic Primitives",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#cryptographic-primitives",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.strong,{children:"general primitives"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/tendermint/tendermint/tree/main/libs/bits",children:"bits"}),": BitArray is a thread-safe implementation of a bit array."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/tendermint/tendermint/tree/main/libs/bytes",children:"bytes"}),": Byte functions including marshalling and unmarshalling into JSON as well as fingerprint which returns the first 6 bytes of a byte slice."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/tendermint/tendermint/tree/main/libs/clist",children:"clist"}),": provide a goroutine-safe linked-list. This list can be traversed concurrently by any number of goroutines. However, removed CElements cannot be added back."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/tendermint/tendermint/tree/main/libs/cmap",children:"cmap"}),": a goroutine-safe map"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/tendermint/tendermint/tree/main/libs/flowrate",children:"flowrate"}),": provides the tools for monitoring and limiting the flow rate of an arbitrary data stream."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/tendermint/tendermint/tree/main/libs/json",children:"json"}),": provides functions for marshaling and unmarshaling JSON in a format that is backwards-compatible with Amino JSON encoding. This mostly differs from encoding/json in encoding of integers (64-bit integers are encoded as strings, not numbers), and handling of interfaces (wrapped in an interface object with type/value keys)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/tendermint/tendermint/tree/main/libs/math",children:"math"}),": math functions including fractions and safemath."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/tendermint/tendermint/tree/main/libs/pubsub",children:"pubsub"}),": implements a pub-sub model with a single publisher (Server) and multiple subscribers (clients)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/tendermint/tendermint/tree/main/libs/strings",children:"strings"}),": string manipulation functions."]}),`
`]}),`
`,e.jsx(n.strong,{children:"hash functions"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/tendermint/tendermint/blob/main/crypto/tmhash/hash.go",children:"tmhash"}),": Tendermint implementation of SHA256 hash."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/tendermint/tendermint/blob/main/crypto/hash.go",children:"hash"}),": included in tmhash."]}),`
`]}),`
`,e.jsx(n.strong,{children:"encryption"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/tendermint/tendermint/blob/main/crypto/armor/armor.go",children:"armor"}),": implementation of ",e.jsx(n.a,{href:"https://www.rfc-editor.org/rfc/rfc4880.html",children:"OpenPGP ASCII Armor"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/tendermint/tendermint/tree/main/crypto/xchacha20poly1305",children:"xchacha20poly1305"}),": Tendermint implementation of ",e.jsx(n.a,{href:"https://en.wikipedia.org/wiki/ChaCha20-Poly1305",children:"ChaCha20-Poly1305"})," an authenticated encryption with additional data (AEAD) algorithm, that combines the ChaCha20 stream cipher with the Poly1305 message authentication code."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/tendermint/tendermint/tree/main/crypto/xsalsa20symmetric",children:"xsalsa20symmetric"}),": Tendermint implementation of ",e.jsx(n.a,{href:"https://en.wikipedia.org/wiki/Salsa20",children:"Salsa20"}),"."]}),`
`]}),`
`,e.jsx(n.strong,{children:"random number generators"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/tendermint/tendermint/blob/main/crypto/random.go",children:"random.go"}),": only uses the OS's randomness. CRandHex returns a hex encoded string that's floor(numDigits/2) *2 long.*Note: CRandHex(24) gives 96 bits of randomness that are usually strong enough for most purposes.*"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/tendermint/tendermint/tree/main/libs/rand",children:"rand"}),": prng, that is seeded with OS randomness. The OS randomness is obtained from crypto/rand, however none of the provided methods are suitable for cryptographic usage. They all utilize math/rand's prng internally. All of the methods here are suitable for concurrent use. This is achieved by using a mutex lock on all of the provided methods."]}),`
`]}),`
`,e.jsx(n.strong,{children:"serilization/deserialization"}),`
`,e.jsxs(n.h2,{id:"references",children:["References",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#references",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.strong,{children:"Consensus"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/tendermint/tendermint/blob/main/spec/consensus/consensus.mdx",children:"Tendermint Byzantine Consensus Algorithm Specification"}),": Specification for Tendermints Consensus including state machine, background gossip (messaging) and proofs."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://docs.tendermint.com/v0.34/introduction/what-is-tendermint.html#consensus-overview",children:"Tendermint Consensus Overview"}),": Tendermint Consensus Overview Documentation."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/tendermint/tendermint/blob/main/spec/consensus/proposer-selection.mdx",children:"Proposer Selection Procedure Specification"}),': Specifies the Proposer Selection Procedure that is used in Tendermint to choose a round proposer for its "leader-based-protocol".']}),`
`]}),`
`,e.jsx(n.strong,{children:"Signing"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://ed25519.cr.yp.to/",children:"Ed25519: high-speed high-security signatures"}),": Ed25519 Signature Information",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://ed25519.cr.yp.to/ed25519-20110926.pdf",children:"High-speed high-security signatures"}),": Paper introducing Ed25519 signatures"]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://docs.tendermint.com/v0.34/tendermint-core/validators.html",children:"Tendermint Validator Keys"}),": Tendermint Documentation highlighting the use of Ed25519 keys for validators."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/tendermint/tendermint/blob/main/spec/core/encoding.md#public-key-cryptography",children:"Tendermint Public Key Cryptography"}),": Documenation on Tendermints Public Key Cryptography."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/tendermint/tendermint/tree/main/crypto",children:"Tendermint Crypto Code Base"}),": crypto is the cryptographic package adapted for Tendermint's uses (go)",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/tendermint/tendermint/blob/main/p2p/key.go#L50",children:"key.go"}),": Tendermint Validator Key Management(go). ",e.jsx(n.em,{children:"LoadOrGenNodeKey attempts to load the NodeKey from the given filePath. If the file does not exist, it generates and saves a new NodeKey."})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://github.com/maticnetwork/tendermint/blob/peppermint/crypto/ed25519/ed25519.go",children:"ed25519.go"}),": Used for signing messages with an ed25519 private key."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.strong,{children:"Light Client"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://docs.tendermint.com/v0.34/tendermint-core/light-client.html",children:"Light Client"}),": he objective of the light client protocol is to get a commit for a recent block hash where the commit includes a majority of signatures from the last known validator set. From there, all the application state is verifiable with ",e.jsx(n.a,{href:"https://github.com/tendermint/spec/blob/master/spec/core/encoding.md#iavl-tree",children:"merkle proofs"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://pkg.go.dev/github.com/tendermint/tendermint/light",children:"tendermint light package"}),"(go): Tendermint light clients allow bandwidth & compute-constrained devices, such as smartphones, low-power embedded chips, or other blockchains to efficiently verify the consensus of a Tendermint blockchain. This forms the basis of safe and efficient state synchronization for new network nodes and inter-blockchain communication (where a light client of one Tendermint instance runs in another chain's state machine). (",e.jsx(n.a,{href:"https://github.com/tendermint/tendermint/tree/main/light",children:"tendermint light source code"}),"(go))."]}),`
`]}),`
`,e.jsx(n.strong,{children:"Serialization/DeSerialization"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/tendermint/tendermint/issues/608",children:"Tendermint has four serialization protocols"})}),`
`]}),`
`,e.jsx(n.strong,{children:"Staking"}),`
`,e.jsx(n.strong,{children:"Additional"}),`
`,e.jsxs(n.p,{children:[e.jsx("a",{name:"f24",children:"[24]"})," See ",e.jsx(n.a,{href:"https://tutorials.cosmos.network/academy/3-ibc/1-what-is-ibc.html",children:`Cosmos IBC
documentation`})]}),`
`,e.jsxs(n.p,{children:[e.jsx("a",{name:"f25",children:"[25]"})," See ",e.jsx(n.a,{href:"https://hub.cosmos.network/main/validators/overview.html",children:`Cosmos Hub
overview`})]}),`
`,e.jsxs(n.p,{children:[e.jsx("a",{name:"f26",children:"[26]"})," See ",e.jsx(n.a,{href:"https://docs.tendermint.com/v0.34/tendermint-core/validators.html#validator-keys",children:`Tendermint Core
documentation`})]})]})}function a(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{a as default,o as frontmatter};
