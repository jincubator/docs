import{f as t,j as e}from"./index-DFo0gy5F.js";const h={title:"Signature Schemes in Consensus Protocols",description:"undefined"};function i(r){const s={a:"a",div:"div",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...t(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.header,{children:e.jsxs(s.h1,{id:"signature-schemes-in-consensus-protocols",children:["Signature Schemes in Consensus Protocols",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#signature-schemes-in-consensus-protocols",children:e.jsx(s.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"date: 2023-02-05"}),`
`,e.jsx(s.li,{children:"last updated: 2023-02-04"}),`
`]}),`
`,e.jsxs(s.h2,{id:"overview",children:["Overview",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#overview",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"Both sides of the bridge need to verify what happened on the other side. To do that, the verification logic is often encapsulated inside a light client, manifested as a smart contract on the chain which the verification needs to be executed. The light client needs to follow consensus and signature verification mechanisms based on the signing algorithm and the elliptical curve used on the other side. For example, if chain A has 21 validators signing each block using ECDSA algorithm on secp256k1 curves, then chain A's light client, executed on chain B, must extract the signatures from the block headers presented to the light client, and follow the ECDSA signature verification algorithm to verify the content of the block header indeeds produces the 21 signatures contained in the block header, given the public keys of the 21 validators."}),`
`,e.jsx(s.p,{children:"Here, we present a reference table for these signature schemes and how they are used in the consensus protocols of different blockchains. We limit our initial scope to Ethereum, Polygon, Avalanche, BSC, Harmony, Cosmos, and Polkadot only (and their undelying technologies). Note that we are only looking at how signatures are used in consensus, not elsewhere in the blockchain stack, as all these protocols use ECDSA on secp256k1 for accounts in EVM interactions."}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Algorithm"}),e.jsx(s.th,{children:"Curve"}),e.jsx(s.th,{children:"Protocol"}),e.jsx(s.th,{children:"Code"}),e.jsx(s.th,{children:"Note"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"ECDSA"}),e.jsx(s.td,{children:"secp256k1"}),e.jsx(s.td,{children:"Polygon"}),e.jsx(s.td,{children:e.jsx(s.a,{href:"https://github.com/maticnetwork/tendermint/tree/peppermint/crypto/secp256k1",children:"lib"})}),e.jsxs(s.td,{children:[e.jsx(s.a,{href:"https://wiki.polygon.technology/docs/pos/peppermint",children:"Modified"})," Tendermint validator signature scheme"]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{}),e.jsx(s.td,{}),e.jsx(s.td,{children:"BSC"}),e.jsxs(s.td,{children:[e.jsx(s.a,{href:"https://github.com/bnb-chain/bsc/tree/master/crypto/secp256k1",children:"lib"})," ",e.jsx(s.a,{href:"https://github.com/bnb-chain/bsc/blob/cb9e50bdf62c6b46a71724066d39f9851181a5af/consensus/parlia/parlia.go#L546",children:"usage"})]}),e.jsxs(s.td,{children:["Derived from ",e.jsx(s.a,{href:"https://eips.ethereum.org/EIPS/eip-225",children:"Clique"}),", then ",e.jsx(s.a,{href:"https://github.com/bnb-chain/BEPs/pull/131",children:"improved"})]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"BLS"}),e.jsx(s.td,{children:"BN254"}),e.jsx(s.td,{children:"Ethereum"}),e.jsx(s.td,{children:e.jsx(s.a,{href:"https://github.com/ethereum/go-ethereum/blob/b946b7a13b749c99979e312c83dce34cac8dd7b1/core/vm/contracts.go#L420",children:"EVM"})}),e.jsxs(s.td,{children:["Added by ",e.jsx(s.a,{href:"https://eips.ethereum.org/EIPS/eip-196",children:"EIP-196"}),",",e.jsx(s.a,{href:"https://eips.ethereum.org/EIPS/eip-197",children:"197"}),"; Mainly for use in smart contracts, such as zk-snark verification. See ",e.jsx(s.a,{href:"https://hackmd.io/@liangcc/bls-solidity#BLS-Signatures-in-Solidity",children:"explainer"})]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{}),e.jsx(s.td,{children:"BLS12-381"}),e.jsx(s.td,{children:"Ethereum"}),e.jsxs(s.td,{children:[e.jsx(s.a,{href:"https://github.com/prysmaticlabs/prysm/tree/develop/crypto/bls",children:"prysm"})," ",e.jsx(s.a,{href:"https://github.com/sigp/lighthouse/tree/stable/crypto/bls",children:"lighthouse"})]}),e.jsxs(s.td,{children:["See ",e.jsx(s.a,{href:"https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/keys/",children:"PoS design"})," and ",e.jsx(s.a,{href:"https://hackmd.io/@benjaminion/bls12-381",children:"explainer"})]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{}),e.jsx(s.td,{}),e.jsx(s.td,{children:"Harmony"}),e.jsxs(s.td,{children:[e.jsx(s.a,{href:"https://github.com/harmony-one/bls/tree/master/ffi/go/bls",children:"lib"})," ",e.jsx(s.a,{href:"https://github.com/harmony-one/harmony/tree/main/crypto/bls",children:"usage"})]}),e.jsxs(s.td,{children:["See ",e.jsx(s.a,{href:"https://docs.harmony.one/home/developers/harmony-specifics/harmony-stack#signatures-and-cryptography",children:"design"})," and ",e.jsx(s.a,{href:"https://medium.com/harmony-one/2022-harmony-technical-review-88462efba368",children:"protocol review"})]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"RSA"}),e.jsx(s.td,{children:"N/A"}),e.jsx(s.td,{children:"Avalanche"}),e.jsxs(s.td,{children:[e.jsx(s.a,{href:"https://github.com/ava-labs/avalanchego/blob/51c5edd85ccc7927443b945b427e64d91ff99f67/vms/proposervm/block/block.go#L119",children:"verification"})," ",e.jsx(s.a,{href:"https://github.com/ava-labs/avalanchego/blob/51c5edd85ccc7927443b945b427e64d91ff99f67/staking/tls.go#L121",children:"generation"})]}),e.jsx(s.td,{children:"Uses X.509 certificate which potentially allows many algorithms; Moving towards BLS12-381 and added implementations recently"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"EdDSA"}),e.jsx(s.td,{children:"Curve25519"}),e.jsx(s.td,{children:"IBC"}),e.jsxs(s.td,{children:[e.jsx(s.a,{href:"https://github.com/tendermint/tendermint/tree/main/crypto/ed25519",children:"lib"})," ",e.jsx(s.a,{href:"https://github.com/tendermint/tendermint/blob/main/spec/core/encoding.md#public-key-cryptography",children:"usage"})]}),e.jsxs(s.td,{children:["Used by all chains in Cosmos network, including ",e.jsx(s.a,{href:"https://hub.cosmos.network/main/validators/overview.html",children:"Cosmos Hub"})]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Schnorr"}),e.jsx(s.td,{children:"Curve25519"}),e.jsx(s.td,{children:"Substrate"}),e.jsx(s.td,{children:e.jsx(s.a,{href:"https://github.com/paritytech/substrate/blob/master/primitives/application-crypto/src/sr25519.rs",children:"lib"})}),e.jsxs(s.td,{children:["See also brief ",e.jsx(s.a,{href:"https://wiki.polkadot.network/docs/learn-cryptography#what-is-sr25519-and-where-did-it-come-from",children:"intro"})," from Polkadot"]})]})]})]}),`
`,e.jsxs(s.h2,{id:"resources",children:["Resources",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#resources",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h3,{id:"algorithms",children:["Algorithms",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#algorithms",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h4,{id:"ecdsa",children:["ECDSA",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#ecdsa",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://www.wikiwand.com/en/Elliptic_Curve_Digital_Signature_Algorithm",children:"Wikipedia"})}),`
`,e.jsxs(s.li,{children:["Standard: ",e.jsx(s.a,{href:"https://www.secg.org/sec2-v2.pdf",children:"SEC 2: Recommended Elliptic Curve Domain Parameters"})]}),`
`]}),`
`,e.jsxs(s.h4,{id:"bls",children:["BLS",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#bls",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://en.wikipedia.org/wiki/BLS_digital_signature",children:"Wikipedia"})}),`
`,e.jsxs(s.li,{children:["Paper: ",e.jsx(s.a,{href:"https://www.iacr.org/archive/asiacrypt2001/22480516.pdf",children:"Short Signatures from the Weil Pairing"})]}),`
`,e.jsxs(s.li,{children:["Tutorial: ",e.jsx(s.a,{href:"https://medium.com/cryptoadvance/bls-signatures-better-than-schnorr-5a7fe30ea716",children:"BLS signatures: better than Schnorr"})]}),`
`,e.jsxs(s.li,{children:["Analysis: ",e.jsx(s.a,{href:"https://www.dash.org/blog/secret-sharing-and-threshold-signatures-with-bls/",children:"Secret Sharing and Threshold Signatures with BLS"})]}),`
`,e.jsxs(s.li,{children:["Deep dive: ",e.jsx(s.a,{href:"https://hackmd.io/@liangcc/bls-solidity",children:"BLS Signatures in Solidity"})]}),`
`]}),`
`,e.jsxs(s.h4,{id:"eddsa",children:["EdDSA",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#eddsa",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://en.wikipedia.org/wiki/EdDSA",children:"Wikipedia"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://pkg.go.dev/golang.org/x/crypto/ed25519",children:"GoLang"})}),`
`]}),`
`,e.jsxs(s.h3,{id:"curves",children:["Curves",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#curves",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://neuromancer.sk/std/",children:"Curve database"})}),`
`]}),`
`,e.jsxs(s.h4,{id:"secp256k1",children:["secp256k1",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#secp256k1",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://en.bitcoin.it/wiki/Secp256k1",children:"Bitcoin Wiki"})}),`
`,e.jsxs(s.li,{children:["Tutorial: ",e.jsx(s.a,{href:"https://medium.com/asecuritysite-when-bob-met-alice/a-bluffers-guide-to-secp256k1-404e423e612",children:"A Bluffer’s Guide to secp256k1"})]}),`
`]}),`
`,e.jsxs(s.h4,{id:"bls12-381",children:["BLS12-381",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#bls12-381",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Deep dive: ",e.jsx(s.a,{href:"https://hackmd.io/@benjaminion/bls12-381",children:"BLS12-381 For The Rest Of Us"})]}),`
`,e.jsxs(s.li,{children:["Intro: ",e.jsx(s.a,{href:"https://electriccoin.co/blog/new-snark-curve/",children:"BLS12-381: New zk-SNARK Elliptic Curve Construction"})]}),`
`,e.jsxs(s.li,{children:["Paper: ",e.jsx(s.a,{href:"https://tches.iacr.org/index.php/TCHES/article/view/8348/7697",children:"Fast and simple constant-time hashing to the BLS12-381 elliptic curve"})]}),`
`,e.jsxs(s.li,{children:["Benchmark: ",e.jsx(s.a,{href:"https://www.dash.org/blog/bls-is-it-really-that-slow/",children:"BLS: Is it really that slow"})]}),`
`,e.jsxs(s.li,{children:["EIP: ",e.jsx(s.a,{href:"https://eips.ethereum.org/EIPS/eip-2537",children:"EIP-2537: Precompile for BLS12-381 curve operations"})]}),`
`,e.jsxs(s.li,{children:["EVM launch: ",e.jsx(s.a,{href:"https://ethereum-magicians.org/t/eip-2537-bls12-precompile-discussion-thread/4187/16",children:"Targeting Shanghai upgrade May 2023"})]}),`
`]}),`
`,e.jsxs(s.h4,{id:"bn254",children:["BN254",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#bn254",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://neuromancer.sk/std/bn/bn254",children:"Definition"})}),`
`,e.jsxs(s.li,{children:["Paper: ",e.jsx(s.a,{href:"https://eprint.iacr.org/2005/133.pdf",children:"Pairing-Friendly Elliptic Curves of Prime Order"})]}),`
`,e.jsxs(s.li,{children:["Deep Dive: ",e.jsx(s.a,{href:"https://hackmd.io/@liangcc/bls-solidity",children:"BLS Signatures in Solidity"})]}),`
`,e.jsxs(s.li,{children:["Speed Optimization: ",e.jsx(s.a,{href:"https://cryptojedi.org/papers/dclxvi-20100714.pdf",children:"New software speed records for cryptographic pairings"})]}),`
`]}),`
`,e.jsxs(s.h3,{id:"usage-in-zkp",children:["Usage in ZKP",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#usage-in-zkp",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://eprint.iacr.org/2022/586.pdf",children:"A survey of elliptic curves for proof systems"})}),`
`]}),`
`,e.jsxs(s.h3,{id:"signing-implementations",children:["Signing Implementations",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#signing-implementations",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.a,{href:"https://neuromancer.sk/std/",children:"Standard Curve Database"})," is a good starting point for existing signing algorithms. Base implementations such as ",e.jsx(s.a,{href:"https://pkg.go.dev/golang.org/x/crypto",children:"golang crypto"})," and ",e.jsx(s.a,{href:"https://docs.rs/rust-crypto/latest/crypto/",children:"rust crypto"})," provide good reference codebases."]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://www.usenix.org/legacy/event/usenix99/provos/provos.pdf",children:"bcrypt"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://github.com/cosmos/cosmos-sdk/tree/main/crypto/keys/bcrypt",children:"cosmos-sdk bcrypt"})}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki",children:"bip-0039"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/sigp/lighthouse/tree/stable/crypto/eth2_wallet",children:"lighthouse"})," (rust)"]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://en.wikipedia.org/wiki/BLS_digital_signature",children:"bls"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://github.com/prysmaticlabs/prysm/tree/develop/crypto/bls",children:"ethereum-prysm"})}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://hackmd.io/@benjaminion/bls12-381",children:"bls-12-381"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://eips.ethereum.org/EIPS/eip-2537",children:"ethereum EIP-2537: Precompile for BLS12-381 curve operations"})}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/ethereum/go-ethereum/tree/master/crypto/bls12381",children:"ethereum-go-ethereum"})," (go)"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/harmony-one/harmony/blob/main/crypto/bls/bls.go",children:"harmony bls"})," (go): uses ",e.jsx(s.a,{href:"https://github.com/harmony-one/bls/blob/master/readme.mdx",children:"harmony bls repository"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/harmony-one/bls",children:"bls Harmony"})," forked from ",e.jsx(s.a,{href:"https://github.com/herumi/bls_",children:"herumi/bls_"}),": written in C++, supports Go, Rust, WebAssembly (Node.js)"]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/prysmaticlabs/prysm/tree/develop/crypto/bls",children:"prysm"})," (go)"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/sigp/lighthouse/tree/stable/crypto/bls",children:"lighthouse"})," (rust): provides a wrapper around several BLS implementations to provide Lighthouse-specific functionality."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/sigp/lighthouse/tree/stable/crypto/eth2_key_derivation",children:"lighthouse"})," (rust): Provides path-based hierarchical BLS key derivation, as specified by ",e.jsx(s.a,{href:"https://eips.ethereum.org/EIPS/eip-2333",children:"EIP-2333"}),".",`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/lighthouse/tree/stable/crypto/bls/src/impls",children:"Aurora Rainbow Bridge Implementation"}),": Implementations",`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://github.com/aurora-is-near/lighthouse/blob/stable/crypto/bls/src/impls/blst.rs",children:"blst"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://github.com/aurora-is-near/lighthouse/blob/stable/crypto/bls/src/impls/fake_crypto.rs",children:"fake_crypto"})}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/lighthouse/blob/stable/crypto/bls/src/impls/milagro.rs",children:"milagro"}),": support for ",e.jsx(s.a,{href:"https://milagro.apache.org/docs/milagro-intro/",children:"Apache Milagro"})]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/sigp/lighthouse/tree/stable/crypto/eth2_keystore",children:"lighthouse"})," (rust): Provides a JSON keystore for a BLS keypair, as specified by ",e.jsx(s.a,{href:"https://eips.ethereum.org/EIPS/eip-2335",children:"EIP-2335"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/bnb-chain/bsc/tree/master/crypto/bls12381",children:"bsc bls12381"})," (go)"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/supranational/blst",children:"blst"}),": blst (pronounced 'blast') is a BLS12-381 signature library focused on performance and security. It is written in C and assembly."]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://cryptojedi.org/papers/dclxvi-20100714.pdf",children:"bn256"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/ethereum/go-ethereum/tree/master/crypto/bn256",children:"ethereum-go-ethereum"})," (go)"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/bnb-chain/bsc/tree/master/crypto/bn256",children:"bsc bn256"})," (go)"]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm",children:"ecdsa"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/bnb-chain/bsc/blob/master/crypto/crypto.go#L169",children:"bsc crypto"})," (go): toECDSA creates a private key with the given D value. The strict parameter controls whether the key's length should be enforced at the curve size or it can also accept legacy encodings (0 prefixes)."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/paritytech/substrate/blob/master/primitives/application-crypto/src/ecdsa.rs",children:"paritytech ecdsa"})," (rust)"]}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://github.com/cosmos/cosmos-sdk/tree/main/crypto/keys/internal/ecdsa",children:"cosmos-sdk ecdsa"})}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://ed25519.cr.yp.to/ed25519-20110926.pdf",children:"ed25519"})," ",e.jsx(s.a,{href:"https://pkg.go.dev/golang.org/x/crypto/ed25519",children:"golang"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/tendermint/tendermint/tree/main/crypto/ed25519",children:"tendermint ed25519"})," (go): GenPrivKey generates a new ed25519 private key. It uses OS randomness in conjunction with the current global random seed in tendermint/libs/common to generate the private key."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/paritytech/substrate/blob/master/primitives/application-crypto/src/ed25519.rs",children:"paritytech ed25519"})," (rust)"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://en.wikipedia.org/wiki/EdDSA",children:"Ed25519"}),": ",e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/contracts/eth/nearbridge/contracts/Ed25519.sol",children:"Ed25519.sol"})]}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://github.com/cosmos/cosmos-sdk/tree/main/crypto/keys/ed25519",children:"cosmos-sdk ed25519"})}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://www.secg.org/sec2-v2.pdf",children:"secp256k1"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/ethereum/go-ethereum/tree/master/crypto/secp256k1",children:"ethereum-go-ethereum"})," (go)"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/prysmaticlabs/prysm/tree/develop/crypto/ecdsa",children:"prysm"})," (go)"]}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://github.com/bnb-chain/bsc/tree/master/crypto/secp256k1",children:"bsc secp256k1"})}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/tendermint/tendermint/tree/main/crypto/secp256k1",children:"tendermint secp256k1"})," (go): GenPrivKeySecp256k1 hashes the secret with SHA2, and uses that 32 byte output to create the private key."]}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://github.com/cosmos/cosmos-sdk/tree/main/crypto/keys/secp256k1",children:"cosmos-sdk secp256k1"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://github.com/Snowfork/snowbridge/tree/main/relayer/crypto/secp256k1",children:"snowbridge secp256k1"})}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://www.secg.org/sec2-v2.pdf",children:"secp256r1"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://github.com/cosmos/cosmos-sdk/tree/main/crypto/keys/secp256r1",children:"cosmos-sdk secp256r1"})}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://wiki.polkadot.network/docs/learn-cryptography#what-is-sr25519-and-where-did-it-come-from",children:"sr25519"}),": schnorr over ristretto25519",`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/ChainSafe/go-schnorrkel",children:"chainsafe go-schnorrkel"})," (go): This repo contains the Go implementation of the sr25519 signature algorithm (schnorr over ristretto25519). The existing Rust implementation is here."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/paritytech/substrate-bip39",children:"paritytech substrate-bip39"})," (rust): his is a crate for deriving secret keys for Ristretto compressed Ed25519 (should be compatible with Ed25519 at this time) from BIP39 phrases."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/paritytech/substrate/blob/master/primitives/application-crypto/src/sr25519.rs",children:"paritytech sr25519"})," rust"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/tendermint/tendermint/tree/main/crypto/sr25519",children:"tendermint sr25519"})," (go): GenPrivKeyFromSecret hashes the secret with SHA2, and uses that 32 byte output to create the private key."]}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://github.com/Snowfork/snowbridge/tree/main/relayer/crypto/secp256k1",children:"snowbridge sr25519"})}),`
`]}),`
`]}),`
`]})]})}function c(r={}){const{wrapper:s}={...t(),...r.components};return s?e.jsx(s,{...r,children:e.jsx(i,{...r})}):i(r)}export{c as default,h as frontmatter};
