import{u as n,j as e}from"./index-cDuqwXOU.js";const a={title:"Cryptographic and Mathematical Primitives",description:"A consolidated historical reference covering primitive families, signatures, light clients, fraud proofs, fast Fourier transforms, and weak subjectivity."};function s(r){const i={a:"a",blockquote:"blockquote",code:"code",div:"div",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",section:"section",strong:"strong",sup:"sup",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(i.blockquote,{"data-historical-context":"true",children:e.jsxs(i.p,{children:["Historical page retained for compatibility. It may contain superseded assumptions, incomplete plans, or outdated links and is not current canonical content. See the ",e.jsx(i.a,{href:"/archive",children:"Archive"})," for context."]})}),`
`,`
`,e.jsx(i.header,{children:e.jsxs(i.h1,{id:"cryptographic-and-mathematical-primitives",children:["Cryptographic and Mathematical Primitives",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#cryptographic-and-mathematical-primitives",children:e.jsx(i.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"original material: 2023-02-04 to 2023-02-05"}),`
`,e.jsx(i.li,{children:"consolidated: 2026-08-09"}),`
`,e.jsx(i.li,{children:"archive status: historical reference"}),`
`]}),`
`,e.jsxs(i.h2,{id:"overview",children:["Overview",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#overview",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.p,{children:"Here we review cryptographic and mathematic primitives"}),`
`,e.jsx(i.p,{children:"For each primitive we review"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Cryptographic Primitive"}),`
`,e.jsx(i.li,{children:"Applications"}),`
`,e.jsx(i.li,{children:"Implementations (codebases)"}),`
`,e.jsx(i.li,{children:"Zero Knowledge relationships/improvements"}),`
`]}),`
`,e.jsx(i.p,{children:"This consolidated archive page brings the previously separate primitive pages into one document while preserving their original material and references."}),`
`,e.jsxs(i.h2,{id:"reference-implementations-and-primitive-families",children:["Reference implementations and primitive families",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#reference-implementations-and-primitive-families",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.h3,{id:"overview-1",children:["Overview",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#overview-1",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.p,{children:"Cryptographic and Mathematic Primitives"}),`
`,e.jsxs(i.h3,{id:"reference-implementations",children:["Reference Implementations",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#reference-implementations",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.strong,{children:"general primitives"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"https://en.wikipedia.org/wiki/Bloom_filter",children:"bloom filter"})}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://github.com/ethereum/go-ethereum/tree/master/core/bloombits",children:"geth bloombits"})," (go): Package bloombits implements bloom filtering on batches of data."]}),`
`]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"https://ethereum.github.io/execution-specs/autoapi/ethereum/base_types/index.html",children:"int_to_bytes"})}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://github.com/sigp/lighthouse/tree/stable/consensus/int_to_bytes",children:"lighthouse int_to_bytes"})," (rust): The Eth 2.0 specification uses ",e.jsx(i.code,{children:"int.to_bytes(2, 'little')"}),", which throws an error if ",e.jsx(i.code,{children:"int"})," doesn't fit within 3 bytes. The specification relies upon implicit asserts for some validity conditions, so we ensure the calling function is aware of the error condition as opposed to hiding it with a modulo."]}),`
`]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"https://en.wikipedia.org/wiki/Leaky_bucket#As_a_meter",children:"leaky bucket"})}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://github.com/prysmaticlabs/prysm/blob/develop/container/leaky-bucket/leakybucket.go",children:"prysm"}),": leaky bucket as a meter"]}),`
`]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsx(i.p,{children:"linked list"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://github.com/prysmaticlabs/prysm/tree/develop/container/doubly-linked-list",children:"prysm"})," (go): doubly linked list"]}),`
`]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"https://ethereum.org/en/developers/docs/data-structures-and-encoding/patricia-merkle-trie/",children:"merkle patrica tries"})}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://github.com/ethereum/go-ethereum/blob/master/trie/trie.go#L17",children:"geth trie"})," (go): Package trie implements Merkle Patricia Tries."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://github.com/ethereum/go-ethereum/blob/master/core/state/database.go#L63",children:"geth database"})," (go): Trie is a Ethereum Merkle Patricia trie."]}),`
`]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"https://en.wikipedia.org/wiki/Merkle_tree",children:"merkle trees"})}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://github.com/prysmaticlabs/prysm/blob/develop/container/trie/sparse_merkle.go",children:"prysm sparse_merkle"})," (go): defines utilities for sparse merkle tries for Ethereum consensus."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://github.com/sigp/lighthouse/tree/stable/consensus/cached_tree_hash",children:"lighthouse cached_tree_hash"})," (rust): Sparse Merkle tree suitable for tree hashing vectors and lists."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://github.com/sigp/lighthouse/tree/stable/consensus/tree_hash",children:"lighthouse tree_hash"})," (rust): Convenience method for ",e.jsx(i.code,{children:"MerkleHasher"})," which also provides some fast-paths for small trees.",e.jsx(i.code,{children:"minimum_leaf_count"})," will only be used if it is greater than or equal to the minimum number of leaves that can be created from ",e.jsx(i.code,{children:"bytes"}),"."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://github.com/sigp/lighthouse/tree/stable/consensus/tree_hash_derive",children:"lighthouse tree_hash_derive"})," (rust):"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://github.com/tendermint/tendermint/tree/main/crypto/merkle",children:"tendermint go"})," (go): Merkle Tree For smaller static data structures that don't require immutable snapshots or mutability; for instance the transactions and validation signatures of a block can be hashed using this simple merkle tree logic."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://github.com/paritytech/substrate/tree/master/utils/binary-merkle-tree",children:"paritytech binary-merkle-trie"})," (rust): implements a simple binary Merkle Tree utilities required for inter-op with Ethereum bridge & Solidity contract."]}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"https://github.com/Snowfork/snowbridge/blob/main/relayer/crypto/merkle/merkle.go",children:"snowbridge merkle.go"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"https://github.com/Snowfork/snowbridge/blob/main/parachain/pallets/ethereum-beacon-client/src/merkleization.rs",children:"snowbridge merkleization.rs"})}),`
`]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsxs(i.p,{children:[e.jsx(i.a,{href:"https://github.com/ethereum/consensus-specs/blob/dev/ssz/merkle-proofs.mdx",children:"merkle_proof"})," ",e.jsx(i.a,{href:"https://soliditydeveloper.com/merkle-tree",children:"explainer"})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://github.com/sigp/lighthouse/tree/stable/consensus/merkle_proof",children:"lighthouse merkle_proof"})," (rust): efficiently represents a Merkle tree of fixed depth where only the first N indices are populated by non-zero leaves (perfect for the deposit contract tree)."]}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"https://github.com/Snowfork/snowbridge/blob/main/relayer/crypto/merkle/simplified_mmr_proof.go",children:"snowbridge simplified_mmr_proof.go"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"https://github.com/Snowfork/snowbridge/tree/main/parachain/pallets/basic-channel/merkle-proof",children:"snowbridge merkle-proof rust"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"https://github.com/Snowfork/snowbridge/blob/main/core/packages/contracts/contracts/utils/MerkleProof.sol",children:"snowbridge MerkleProof.sol"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"https://www.npmjs.com/package/eth-proof",children:"npm package eth-proof"})}),`
`]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"https://docs.grin.mw/wiki/chain-state/merkle-mountain-range/",children:"Merkle Mountain Range"})}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://github.com/paritytech/substrate/tree/master/primitives/merkle-mountain-range",children:"paritytech merkle-mountain-range"})," (rust)"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://github.com/peekpi/harmony/tree/mmrHardfork/internal/mmr",children:"harmony mmr (go)"}),": Adds a merkle mountain range to harmony's core protocol to support light clients (WIP) ",e.jsx(i.a,{href:"https://github.com/harmony-one/harmony/pull/4198/files",children:"PR4198"})]}),`
`]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsx(i.p,{children:"queues"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://github.com/prysmaticlabs/prysm/tree/develop/container/queue",children:"prysm"})," (go): priority queue"]}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"https://github.com/Snowfork/snowbridge/blob/main/core/packages/contracts/contracts/utils/MMRProof.sol",children:"snowbridge MMRProof.sol"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"https://github.com/Snowfork/merkle-mountain-range",children:"snowfork merkle-mountain-range"})}),`
`]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsx(i.p,{children:"safe-arithmetic"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://github.com/sigp/lighthouse/tree/stable/consensus/safe_arith",children:"lighthouse safe_arith"})," (rust): Library for safe arithmetic on integers, avoiding overflow and division by zero."]}),`
`]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsx(i.p,{children:"slice"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://github.com/prysmaticlabs/prysm/tree/develop/container/slice",children:"prysm"})," (go)"]}),`
`]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"https://ethereum.org/en/developers/docs/data-structures-and-encoding/patricia-merkle-trie/",children:"tries"})}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://github.com/paritytech/substrate/tree/master/primitives/trie",children:"paritytech trie"}),`: Utility functions to interact with Substrate's Base-16 Modified Merkle Patricia tree ("trie").`]}),`
`]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"https://eprint.iacr.org/2018/623.pdf",children:"Verifiable Delay Function"})}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://github.com/harmony-one/harmony/tree/main/crypto/vdf",children:"harmony vdf"})," (go): Package vdf is a proof-of-concept implementation of a delay function and the security properties are not guaranteed."]}),`
`]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"https://en.wikipedia.org/wiki/Verifiable_random_function",children:"Verfiable Random Function"})}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://github.com/harmony-one/harmony/tree/main/crypto/vrf",children:"harmony vrf"})," (go): A VRF is a pseudorandom function f_k from a secret key k, such that that knowledge of k not only enables one to evaluate f_k at for any message m, but also to provide an NP-proof that the value f_k(m) is indeed correct without compromising the unpredictability of f_k for any m' != m. ",e.jsx(i.a,{href:"https://ieeexplore.ieee.org/document/814584",children:"https://ieeexplore.ieee.org/document/814584"})]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://github.com/paritytech/substrate/tree/master/primitives/consensus/vrf",children:"paritytech vrf"}),": Primitives for VRF-based consensus engines. Schnorrkel-based VRF."]}),`
`]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsx(i.p,{children:"tree"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://github.com/paritytech/substrate/tree/master/utils/fork-tree",children:"paritytech fork-tree"})," (rust): Utility library for managing tree-like ordered data with logic for pruning the tree while finalizing nodes."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(i.strong,{children:"Hash functions"}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"https://en.wikipedia.org/wiki/SHA-2",children:"SHA-2"})}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"https://www.geeksforgeeks.org/difference-between-sha-256-and-keccak-256/",children:"difference between sha256 and kecakk256"})}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://en.wikipedia.org/wiki/Argon2",children:"Argon 2"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://github.com/P-H-C/phc-winner-argon2",children:"Argon2"}),": eference C implementation of Argon2."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://cs.opensource.google/go/x/crypto/+/master:argon2/argon2.go",children:"x/crypto Argon2"})," (go): Package argon2 implements the key derivation function Argon2."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://github.com/sru-systems/rust-argon2",children:"rust-argon2"})," (rust): Rust library for hashing passwords using Argon2."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://www.npmjs.com/package/argon2",children:"node-argon2"})," (typescript): Bindings to the reference Argon2 implementation."]}),`
`]}),`
`]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://en.wikipedia.org/wiki/BLAKE_(hash_function)",children:"blake"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://www.blake2.net/",children:"blake2"})," hash function",`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://github.com/ethereum/go-ethereum/tree/master/crypto/blake2b",children:"ethereum-go-ethereum"})," (go): Package blake2b implements the BLAKE2b hash algorithm defined by RFC 7693 and the extendable output function (XOF) BLAKE2Xb."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://github.com/bnb-chain/bsc/tree/master/crypto/blake2b",children:"bsc blake2b"})," (go): Package blake2b implements the BLAKE2b hash algorithm defined by RFC 7693 and the extendable output function (XOF) BLAKE2Xb."]}),`
`]}),`
`]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://github.com/BLAKE3-team/BLAKE3",children:"blake3"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://crates.io/crates/blake3",children:"blake3 rust crate"})," (rust): BLAKE3 is based on an optimized instance of the established hash function BLAKE2 and on the original Bao tree mode."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://github.com/zeebo/blake3",children:"zeebo blake3"})," (go) : Pure Go implementation of BLAKE3 with AVX2 and SSE4.1 acceleration."]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://keccak.team/keccak.html",children:"keccak256"})," hash function",`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://github.com/prysmaticlabs/prysm/blob/develop/crypto/hash/hash.go",children:"prysm"})," (go)"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://github.com/sigp/lighthouse/blob/stable/crypto/eth2_hashing/src/lib.rs",children:"lighthouse"})," (rust): wrapper over two SHA256 crates: ",e.jsx(i.code,{children:"sha2"})," and ",e.jsx(i.code,{children:"ring"})]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://github.com/bnb-chain/bsc/blob/master/crypto/crypto.go#L91",children:"bsc crypto"})," (go)"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://github.com/harmony-one/harmony/blob/main/crypto/hash/hash.go",children:"harmony hash"})," (go)"]}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"https://github.com/Snowfork/snowbridge/blob/main/relayer/crypto/keccak/keccak.go",children:"snowbridge keccak"})}),`
`]}),`
`]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://pkg.go.dev/crypto/sha256",children:"sha256"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"https://github.com/tendermint/tendermint/tree/main/crypto/tmhash",children:"tendermint tmhash"})}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(i.strong,{children:"encryption"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://cryptobook.nakov.com/asymmetric-key-ciphers/ecies-public-key-encryption",children:"ECIES"})," (go): a hybrid encryption scheme",`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://github.com/ethereum/go-ethereum/tree/master/crypto/ecies",children:"ethereum-go-ethereum"})," (go)"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://github.com/bnb-chain/bsc/tree/master/crypto/ecies",children:"bsc ecies"})," (go)"]}),`
`]}),`
`]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://www.rfc-editor.org/rfc/pdfrfc/rfc4880.txt.pdf",children:"ascii armored encryption uses ed25519"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://github.com/ethereum/go-ethereum/tree/master/crypto/signify",children:"ethereum-go-ethereum"})," (go)"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://github.com/bnb-chain/bsc/tree/master/crypto/signify",children:"bsc signify"})," (go)"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://github.com/tendermint/tendermint/blob/main/crypto/armor/armor.go",children:"tenderming armor"})," (go)"]}),`
`]}),`
`]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://en.wikipedia.org/wiki/ChaCha20-Poly1305",children:"ChaCha20-Poly1305"}),": an authenticated encryption with additional data (AEAD) algorithm",`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://github.com/tendermint/tendermint/tree/main/crypto/xchacha20poly1305",children:"tendermint xchacha20poly1305"})," (go)"]}),`
`]}),`
`]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://libsodium.gitbook.io/doc/advanced/stream_ciphers/xsalsa20",children:"XSalsa20"})," (go): XSalsa20 is a stream cipher based upon Salsa20 but with a much longer nonce: 192 bits instead of 64 bits.",`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://github.com/tendermint/tendermint/tree/main/crypto/xsalsa20symmetric",children:"tendermint xsalsa20symmetric"})," (go): secret must be 32 bytes long. Use something like Sha256(Bcrypt(passphrase)). The ciphertext is (secretbox.Overhead + 24) bytes longer than the plaintext."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(i.strong,{children:"Random number generators"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://github.com/prysmaticlabs/prysm/blob/develop/crypto/rand/rand.go",children:"prysm"})," (go)"]}),`
`]}),`
`,e.jsx(i.strong,{children:"Serialization/DeSerialization"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"https://ethereum.org/en/developers/docs/data-structures-and-encoding/rlp/",children:"RECURSIVE-LENGTH PREFIX (RLP) SERIALIZATION"})}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"https://github.com/ethereum/go-ethereum/tree/master/rlp",children:"ethereum rlp"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"https://github.com/harmony-one/harmony/blob/main/crypto/hash/rlp.go",children:"harmony rlp"})}),`
`]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"https://ethereum.org/en/developers/docs/data-structures-and-encoding/ssz/",children:"Simple Serialize"})}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"https://github.com/Snowfork/snowbridge/blob/main/parachain/pallets/ethereum-beacon-client/src/ssz.rs",children:"snowbridge ssz.rs"})}),`
`]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"https://ethereum.org/en/developers/docs/data-structures-and-encoding/patricia-merkle-trie/",children:"Merkle Patricia Trie"})}),`
`]}),`
`]}),`
`,e.jsx(i.strong,{children:"Threading"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://github.com/prysmaticlabs/prysm/blob/develop/container/thread-safe/map.go",children:"prysm"}),": contains generic containers that are protected either by Mutexes or atomics underneath the hood."]}),`
`]}),`
`,e.jsx(i.strong,{children:"zero knowledge"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["hash functions",`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://www.usenix.org/system/files/sec21-grassi.pdf",children:"Poseidon"}),`: A New Hash Function for
Zero-Knowledge Proof Systems (`,e.jsx(i.a,{href:"https://youtu.be/hUx3WpDV_l0",children:"video"}),")"]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(i.h3,{id:"references",children:["References",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#references",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://en.wikipedia.org/wiki/Bloom_filter",children:"Bloom Filter Wikipedia"}),": A Bloom filter is a space-efficient probabilistic data structure, conceived by Burton Howard Bloom in 1970, that is used to test whether an element is a member of a set."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://www.jasondavies.com/bloomfilter/",children:"Bloom Filters Explainer"}),": The bloom filter essentially consists of a bit vector of length m, represented by the central column."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://blockchain-academy.hs-mittweida.de/coursesblockchain-introduction-technical-beginner-to-intermediate/lessons/lesson-11-bloomfilter/",children:"Bloomfilter Lesson 11 - Blockchain Academy"}),": Blockchain Introduction Technical – Beginner to Intermediate Lesson 11 – Bloomfilter."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.25.4189&rep=rep1&type=pdf",children:"Cuckoo Hashing"}),`: a simple dictionary with worst case constant lookup time, equaling the theoretical performance of the classic dynamic perfect hashing scheme
of Dietzfelbinger et al.`]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"http://www.lkozma.net/cuckoo_hashing_visualization/",children:"Cukoo Hashing Visualization"}),": Visualization of Cukoo Hashing an elegant method for resolving collisions in hash tables."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://vitalik.ca/general/2019/05/12/fft.html",children:"Fast Fourier Transforms"}),`: Vitaliks explaniner on Fast Fourier Transforms. Trigger warning: specialized mathematical topic, with
special thanks to Karl Floersch for feedback.`]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://blockchain-academy.hs-mittweida.de/courses/blockchain-introduction-technical-beginner-to-intermediate/lessons/lesson-10-merkle-trees-merkle-proofs/",children:"Merkle Trees/Merkle Proofs Lesson 10 - Blockchain Academy"}),": Blockchain Introduction Technical – Beginner to Intermediate Lesson 10 – Merkle Trees/Merkle Proofs."]}),`
`]}),`
`,e.jsx(i.hr,{}),`
`,e.jsxs(i.h2,{id:"signature-schemes-in-consensus-protocols",children:["Signature schemes in consensus protocols",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#signature-schemes-in-consensus-protocols",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.h3,{id:"overview-2",children:["Overview",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#overview-2",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.p,{children:"Both sides of the bridge need to verify what happened on the other side. To do that, the verification logic is often encapsulated inside a light client, manifested as a smart contract on the chain which the verification needs to be executed. The light client needs to follow consensus and signature verification mechanisms based on the signing algorithm and the elliptical curve used on the other side. For example, if chain A has 21 validators signing each block using ECDSA algorithm on secp256k1 curves, then chain A's light client, executed on chain B, must extract the signatures from the block headers presented to the light client, and follow the ECDSA signature verification algorithm to verify the content of the block header indeeds produces the 21 signatures contained in the block header, given the public keys of the 21 validators."}),`
`,e.jsx(i.p,{children:"Here, we present a reference table for these signature schemes and how they are used in the consensus protocols of different blockchains. We limit our initial scope to Ethereum, Polygon, Avalanche, BSC, Harmony, Cosmos, and Polkadot only (and their undelying technologies). Note that we are only looking at how signatures are used in consensus, not elsewhere in the blockchain stack, as all these protocols use ECDSA on secp256k1 for accounts in EVM interactions."}),`
`,e.jsxs(i.table,{children:[e.jsx(i.thead,{children:e.jsxs(i.tr,{children:[e.jsx(i.th,{children:"Algorithm"}),e.jsx(i.th,{children:"Curve"}),e.jsx(i.th,{children:"Protocol"}),e.jsx(i.th,{children:"Code"}),e.jsx(i.th,{children:"Note"})]})}),e.jsxs(i.tbody,{children:[e.jsxs(i.tr,{children:[e.jsx(i.td,{children:"ECDSA"}),e.jsx(i.td,{children:"secp256k1"}),e.jsx(i.td,{children:"Polygon"}),e.jsx(i.td,{children:e.jsx(i.a,{href:"https://github.com/maticnetwork/tendermint/tree/peppermint/crypto/secp256k1",children:"lib"})}),e.jsxs(i.td,{children:[e.jsx(i.a,{href:"https://wiki.polygon.technology/docs/pos/peppermint",children:"Modified"})," Tendermint validator signature scheme"]})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{}),e.jsx(i.td,{}),e.jsx(i.td,{children:"BSC"}),e.jsxs(i.td,{children:[e.jsx(i.a,{href:"https://github.com/bnb-chain/bsc/tree/master/crypto/secp256k1",children:"lib"})," ",e.jsx(i.a,{href:"https://github.com/bnb-chain/bsc/blob/cb9e50bdf62c6b46a71724066d39f9851181a5af/consensus/parlia/parlia.go#L546",children:"usage"})]}),e.jsxs(i.td,{children:["Derived from ",e.jsx(i.a,{href:"https://eips.ethereum.org/EIPS/eip-225",children:"Clique"}),", then ",e.jsx(i.a,{href:"https://github.com/bnb-chain/BEPs/pull/131",children:"improved"})]})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:"BLS"}),e.jsx(i.td,{children:"BN254"}),e.jsx(i.td,{children:"Ethereum"}),e.jsx(i.td,{children:e.jsx(i.a,{href:"https://github.com/ethereum/go-ethereum/blob/b946b7a13b749c99979e312c83dce34cac8dd7b1/core/vm/contracts.go#L420",children:"EVM"})}),e.jsxs(i.td,{children:["Added by ",e.jsx(i.a,{href:"https://eips.ethereum.org/EIPS/eip-196",children:"EIP-196"}),",",e.jsx(i.a,{href:"https://eips.ethereum.org/EIPS/eip-197",children:"197"}),"; Mainly for use in smart contracts, such as zk-snark verification. See ",e.jsx(i.a,{href:"https://hackmd.io/@liangcc/bls-solidity#BLS-Signatures-in-Solidity",children:"explainer"})]})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{}),e.jsx(i.td,{children:"BLS12-381"}),e.jsx(i.td,{children:"Ethereum"}),e.jsxs(i.td,{children:[e.jsx(i.a,{href:"https://github.com/prysmaticlabs/prysm/tree/develop/crypto/bls",children:"prysm"})," ",e.jsx(i.a,{href:"https://github.com/sigp/lighthouse/tree/stable/crypto/bls",children:"lighthouse"})]}),e.jsxs(i.td,{children:["See ",e.jsx(i.a,{href:"https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/keys/",children:"PoS design"})," and ",e.jsx(i.a,{href:"https://hackmd.io/@benjaminion/bls12-381",children:"explainer"})]})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{}),e.jsx(i.td,{}),e.jsx(i.td,{children:"Harmony"}),e.jsxs(i.td,{children:[e.jsx(i.a,{href:"https://github.com/harmony-one/bls/tree/master/ffi/go/bls",children:"lib"})," ",e.jsx(i.a,{href:"https://github.com/harmony-one/harmony/tree/main/crypto/bls",children:"usage"})]}),e.jsxs(i.td,{children:["See ",e.jsx(i.a,{href:"https://docs.harmony.one/home/developers/harmony-specifics/harmony-stack#signatures-and-cryptography",children:"design"})," and ",e.jsx(i.a,{href:"https://medium.com/harmony-one/2022-harmony-technical-review-88462efba368",children:"protocol review"})]})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:"RSA"}),e.jsx(i.td,{children:"N/A"}),e.jsx(i.td,{children:"Avalanche"}),e.jsxs(i.td,{children:[e.jsx(i.a,{href:"https://github.com/ava-labs/avalanchego/blob/51c5edd85ccc7927443b945b427e64d91ff99f67/vms/proposervm/block/block.go#L119",children:"verification"})," ",e.jsx(i.a,{href:"https://github.com/ava-labs/avalanchego/blob/51c5edd85ccc7927443b945b427e64d91ff99f67/staking/tls.go#L121",children:"generation"})]}),e.jsx(i.td,{children:"Uses X.509 certificate which potentially allows many algorithms; Moving towards BLS12-381 and added implementations recently"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:"EdDSA"}),e.jsx(i.td,{children:"Curve25519"}),e.jsx(i.td,{children:"IBC"}),e.jsxs(i.td,{children:[e.jsx(i.a,{href:"https://github.com/tendermint/tendermint/tree/main/crypto/ed25519",children:"lib"})," ",e.jsx(i.a,{href:"https://github.com/tendermint/tendermint/blob/main/spec/core/encoding.md#public-key-cryptography",children:"usage"})]}),e.jsxs(i.td,{children:["Used by all chains in Cosmos network, including ",e.jsx(i.a,{href:"https://hub.cosmos.network/main/validators/overview.html",children:"Cosmos Hub"})]})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:"Schnorr"}),e.jsx(i.td,{children:"Curve25519"}),e.jsx(i.td,{children:"Substrate"}),e.jsx(i.td,{children:e.jsx(i.a,{href:"https://github.com/paritytech/substrate/blob/master/primitives/application-crypto/src/sr25519.rs",children:"lib"})}),e.jsxs(i.td,{children:["See also brief ",e.jsx(i.a,{href:"https://wiki.polkadot.network/docs/learn-cryptography#what-is-sr25519-and-where-did-it-come-from",children:"intro"})," from Polkadot"]})]})]})]}),`
`,e.jsxs(i.h3,{id:"resources",children:["Resources",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#resources",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.h4,{id:"algorithms",children:["Algorithms",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#algorithms",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.h5,{id:"ecdsa",children:["ECDSA",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#ecdsa",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"https://www.wikiwand.com/en/Elliptic_Curve_Digital_Signature_Algorithm",children:"Wikipedia"})}),`
`,e.jsxs(i.li,{children:["Standard: ",e.jsx(i.a,{href:"https://www.secg.org/sec2-v2.pdf",children:"SEC 2: Recommended Elliptic Curve Domain Parameters"})]}),`
`]}),`
`,e.jsxs(i.h5,{id:"bls",children:["BLS",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#bls",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"https://en.wikipedia.org/wiki/BLS_digital_signature",children:"Wikipedia"})}),`
`,e.jsxs(i.li,{children:["Paper: ",e.jsx(i.a,{href:"https://www.iacr.org/archive/asiacrypt2001/22480516.pdf",children:"Short Signatures from the Weil Pairing"})]}),`
`,e.jsxs(i.li,{children:["Tutorial: ",e.jsx(i.a,{href:"https://medium.com/cryptoadvance/bls-signatures-better-than-schnorr-5a7fe30ea716",children:"BLS signatures: better than Schnorr"})]}),`
`,e.jsxs(i.li,{children:["Analysis: ",e.jsx(i.a,{href:"https://www.dash.org/blog/secret-sharing-and-threshold-signatures-with-bls/",children:"Secret Sharing and Threshold Signatures with BLS"})]}),`
`,e.jsxs(i.li,{children:["Deep dive: ",e.jsx(i.a,{href:"https://hackmd.io/@liangcc/bls-solidity",children:"BLS Signatures in Solidity"})]}),`
`]}),`
`,e.jsxs(i.h5,{id:"eddsa",children:["EdDSA",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#eddsa",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"https://en.wikipedia.org/wiki/EdDSA",children:"Wikipedia"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"https://pkg.go.dev/golang.org/x/crypto/ed25519",children:"GoLang"})}),`
`]}),`
`,e.jsxs(i.h4,{id:"curves",children:["Curves",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#curves",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"https://neuromancer.sk/std/",children:"Curve database"})}),`
`]}),`
`,e.jsxs(i.h5,{id:"secp256k1",children:["secp256k1",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#secp256k1",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"https://en.bitcoin.it/wiki/Secp256k1",children:"Bitcoin Wiki"})}),`
`,e.jsxs(i.li,{children:["Tutorial: ",e.jsx(i.a,{href:"https://medium.com/asecuritysite-when-bob-met-alice/a-bluffers-guide-to-secp256k1-404e423e612",children:"A Bluffer’s Guide to secp256k1"})]}),`
`]}),`
`,e.jsxs(i.h5,{id:"bls12-381",children:["BLS12-381",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#bls12-381",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Deep dive: ",e.jsx(i.a,{href:"https://hackmd.io/@benjaminion/bls12-381",children:"BLS12-381 For The Rest Of Us"})]}),`
`,e.jsxs(i.li,{children:["Intro: ",e.jsx(i.a,{href:"https://electriccoin.co/blog/new-snark-curve/",children:"BLS12-381: New zk-SNARK Elliptic Curve Construction"})]}),`
`,e.jsxs(i.li,{children:["Paper: ",e.jsx(i.a,{href:"https://tches.iacr.org/index.php/TCHES/article/view/8348/7697",children:"Fast and simple constant-time hashing to the BLS12-381 elliptic curve"})]}),`
`,e.jsxs(i.li,{children:["Benchmark: ",e.jsx(i.a,{href:"https://www.dash.org/blog/bls-is-it-really-that-slow/",children:"BLS: Is it really that slow"})]}),`
`,e.jsxs(i.li,{children:["EIP: ",e.jsx(i.a,{href:"https://eips.ethereum.org/EIPS/eip-2537",children:"EIP-2537: Precompile for BLS12-381 curve operations"})]}),`
`,e.jsxs(i.li,{children:["EVM launch: ",e.jsx(i.a,{href:"https://ethereum-magicians.org/t/eip-2537-bls12-precompile-discussion-thread/4187/16",children:"Targeting Shanghai upgrade May 2023"})]}),`
`]}),`
`,e.jsxs(i.h5,{id:"bn254",children:["BN254",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#bn254",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"https://neuromancer.sk/std/bn/bn254",children:"Definition"})}),`
`,e.jsxs(i.li,{children:["Paper: ",e.jsx(i.a,{href:"https://eprint.iacr.org/2005/133.pdf",children:"Pairing-Friendly Elliptic Curves of Prime Order"})]}),`
`,e.jsxs(i.li,{children:["Deep Dive: ",e.jsx(i.a,{href:"https://hackmd.io/@liangcc/bls-solidity",children:"BLS Signatures in Solidity"})]}),`
`,e.jsxs(i.li,{children:["Speed Optimization: ",e.jsx(i.a,{href:"https://cryptojedi.org/papers/dclxvi-20100714.pdf",children:"New software speed records for cryptographic pairings"})]}),`
`]}),`
`,e.jsxs(i.h4,{id:"usage-in-zkp",children:["Usage in ZKP",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#usage-in-zkp",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"https://eprint.iacr.org/2022/586.pdf",children:"A survey of elliptic curves for proof systems"})}),`
`]}),`
`,e.jsxs(i.h4,{id:"signing-implementations",children:["Signing Implementations",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#signing-implementations",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.p,{children:["The ",e.jsx(i.a,{href:"https://neuromancer.sk/std/",children:"Standard Curve Database"})," is a good starting point for existing signing algorithms. Base implementations such as ",e.jsx(i.a,{href:"https://pkg.go.dev/golang.org/x/crypto",children:"golang crypto"})," and ",e.jsx(i.a,{href:"https://docs.rs/rust-crypto/latest/crypto/",children:"rust crypto"})," provide good reference codebases."]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://www.usenix.org/legacy/event/usenix99/provos/provos.pdf",children:"bcrypt"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"https://github.com/cosmos/cosmos-sdk/tree/main/crypto/keys/bcrypt",children:"cosmos-sdk bcrypt"})}),`
`]}),`
`]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki",children:"bip-0039"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://github.com/sigp/lighthouse/tree/stable/crypto/eth2_wallet",children:"lighthouse"})," (rust)"]}),`
`]}),`
`]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://en.wikipedia.org/wiki/BLS_digital_signature",children:"bls"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"https://github.com/prysmaticlabs/prysm/tree/develop/crypto/bls",children:"ethereum-prysm"})}),`
`]}),`
`]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://hackmd.io/@benjaminion/bls12-381",children:"bls-12-381"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"https://eips.ethereum.org/EIPS/eip-2537",children:"ethereum EIP-2537: Precompile for BLS12-381 curve operations"})}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://github.com/ethereum/go-ethereum/tree/master/crypto/bls12381",children:"ethereum-go-ethereum"})," (go)"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://github.com/harmony-one/harmony/blob/main/crypto/bls/bls.go",children:"harmony bls"})," (go): uses ",e.jsx(i.a,{href:"https://github.com/harmony-one/bls/blob/master/readme.mdx",children:"harmony bls repository"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://github.com/harmony-one/bls",children:"bls Harmony"})," forked from ",e.jsx(i.a,{href:"https://github.com/herumi/bls_",children:"herumi/bls_"}),": written in C++, supports Go, Rust, WebAssembly (Node.js)"]}),`
`]}),`
`]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://github.com/prysmaticlabs/prysm/tree/develop/crypto/bls",children:"prysm"})," (go)"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://github.com/sigp/lighthouse/tree/stable/crypto/bls",children:"lighthouse"})," (rust): provides a wrapper around several BLS implementations to provide Lighthouse-specific functionality."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://github.com/sigp/lighthouse/tree/stable/crypto/eth2_key_derivation",children:"lighthouse"})," (rust): Provides path-based hierarchical BLS key derivation, as specified by ",e.jsx(i.a,{href:"https://eips.ethereum.org/EIPS/eip-2333",children:"EIP-2333"}),".",`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://github.com/aurora-is-near/lighthouse/tree/stable/crypto/bls/src/impls",children:"Aurora Rainbow Bridge Implementation"}),": Implementations",`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"https://github.com/aurora-is-near/lighthouse/blob/stable/crypto/bls/src/impls/blst.rs",children:"blst"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"https://github.com/aurora-is-near/lighthouse/blob/stable/crypto/bls/src/impls/fake_crypto.rs",children:"fake_crypto"})}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://github.com/aurora-is-near/lighthouse/blob/stable/crypto/bls/src/impls/milagro.rs",children:"milagro"}),": support for ",e.jsx(i.a,{href:"https://milagro.apache.org/docs/milagro-intro/",children:"Apache Milagro"})]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://github.com/sigp/lighthouse/tree/stable/crypto/eth2_keystore",children:"lighthouse"})," (rust): Provides a JSON keystore for a BLS keypair, as specified by ",e.jsx(i.a,{href:"https://eips.ethereum.org/EIPS/eip-2335",children:"EIP-2335"}),"."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://github.com/bnb-chain/bsc/tree/master/crypto/bls12381",children:"bsc bls12381"})," (go)"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://github.com/supranational/blst",children:"blst"}),": blst (pronounced 'blast') is a BLS12-381 signature library focused on performance and security. It is written in C and assembly."]}),`
`]}),`
`]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://cryptojedi.org/papers/dclxvi-20100714.pdf",children:"bn256"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://github.com/ethereum/go-ethereum/tree/master/crypto/bn256",children:"ethereum-go-ethereum"})," (go)"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://github.com/bnb-chain/bsc/tree/master/crypto/bn256",children:"bsc bn256"})," (go)"]}),`
`]}),`
`]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm",children:"ecdsa"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://github.com/bnb-chain/bsc/blob/master/crypto/crypto.go#L169",children:"bsc crypto"})," (go): toECDSA creates a private key with the given D value. The strict parameter controls whether the key's length should be enforced at the curve size or it can also accept legacy encodings (0 prefixes)."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://github.com/paritytech/substrate/blob/master/primitives/application-crypto/src/ecdsa.rs",children:"paritytech ecdsa"})," (rust)"]}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"https://github.com/cosmos/cosmos-sdk/tree/main/crypto/keys/internal/ecdsa",children:"cosmos-sdk ecdsa"})}),`
`]}),`
`]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://ed25519.cr.yp.to/ed25519-20110926.pdf",children:"ed25519"})," ",e.jsx(i.a,{href:"https://pkg.go.dev/golang.org/x/crypto/ed25519",children:"golang"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://github.com/tendermint/tendermint/tree/main/crypto/ed25519",children:"tendermint ed25519"})," (go): GenPrivKey generates a new ed25519 private key. It uses OS randomness in conjunction with the current global random seed in tendermint/libs/common to generate the private key."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://github.com/paritytech/substrate/blob/master/primitives/application-crypto/src/ed25519.rs",children:"paritytech ed25519"})," (rust)"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://en.wikipedia.org/wiki/EdDSA",children:"Ed25519"}),": ",e.jsx(i.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/contracts/eth/nearbridge/contracts/Ed25519.sol",children:"Ed25519.sol"})]}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"https://github.com/cosmos/cosmos-sdk/tree/main/crypto/keys/ed25519",children:"cosmos-sdk ed25519"})}),`
`]}),`
`]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://www.secg.org/sec2-v2.pdf",children:"secp256k1"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://github.com/ethereum/go-ethereum/tree/master/crypto/secp256k1",children:"ethereum-go-ethereum"})," (go)"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://github.com/prysmaticlabs/prysm/tree/develop/crypto/ecdsa",children:"prysm"})," (go)"]}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"https://github.com/bnb-chain/bsc/tree/master/crypto/secp256k1",children:"bsc secp256k1"})}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://github.com/tendermint/tendermint/tree/main/crypto/secp256k1",children:"tendermint secp256k1"})," (go): GenPrivKeySecp256k1 hashes the secret with SHA2, and uses that 32 byte output to create the private key."]}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"https://github.com/cosmos/cosmos-sdk/tree/main/crypto/keys/secp256k1",children:"cosmos-sdk secp256k1"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"https://github.com/Snowfork/snowbridge/tree/main/relayer/crypto/secp256k1",children:"snowbridge secp256k1"})}),`
`]}),`
`]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://www.secg.org/sec2-v2.pdf",children:"secp256r1"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"https://github.com/cosmos/cosmos-sdk/tree/main/crypto/keys/secp256r1",children:"cosmos-sdk secp256r1"})}),`
`]}),`
`]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://wiki.polkadot.network/docs/learn-cryptography#what-is-sr25519-and-where-did-it-come-from",children:"sr25519"}),": schnorr over ristretto25519",`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://github.com/ChainSafe/go-schnorrkel",children:"chainsafe go-schnorrkel"})," (go): This repo contains the Go implementation of the sr25519 signature algorithm (schnorr over ristretto25519). The existing Rust implementation is here."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://github.com/paritytech/substrate-bip39",children:"paritytech substrate-bip39"})," (rust): his is a crate for deriving secret keys for Ristretto compressed Ed25519 (should be compatible with Ed25519 at this time) from BIP39 phrases."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://github.com/paritytech/substrate/blob/master/primitives/application-crypto/src/sr25519.rs",children:"paritytech sr25519"})," rust"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://github.com/tendermint/tendermint/tree/main/crypto/sr25519",children:"tendermint sr25519"})," (go): GenPrivKeyFromSecret hashes the secret with SHA2, and uses that 32 byte output to create the private key."]}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"https://github.com/Snowfork/snowbridge/tree/main/relayer/crypto/secp256k1",children:"snowbridge sr25519"})}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(i.hr,{}),`
`,e.jsxs(i.h2,{id:"light-clients",children:["Light clients",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#light-clients",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.h3,{id:"overview-3",children:["Overview",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#overview-3",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.h3,{id:"references-1",children:["References",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#references-1",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://a16zcrypto.com/building-helios-ethereum-light-client/",children:"Building Helios: Fully trustless access to Ethereum"}),": a Rust-based Ethereum light client we developed that provides fully trustless access to Ethereum."]}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"https://notes.ethereum.org/@domothy/roadmap#Annotated-Ethereum-Roadmap",children:"Annotated Ethereum Roadmap"})}),`
`,e.jsx(i.li,{}),`
`]}),`
`,e.jsx(i.hr,{}),`
`,e.jsxs(i.h2,{id:"fraud-proofs",children:["Fraud proofs",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#fraud-proofs",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.h3,{id:"overview-4",children:["Overview",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#overview-4",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.p,{children:["Following is an excerpt from Fraud and Data Availability Proofs",e.jsx(i.div,{})," Invalid Blocks in Light Clients ",e.jsx(i.sup,{children:e.jsx(i.a,{href:"#user-content-fn-1",id:"user-content-fnref-1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})}),"."]}),`
`,e.jsxs(i.blockquote,{children:[`
`,e.jsx(i.p,{children:"Light clients, also known as Simple Payment Verification (SPV) clients, are nodes which only download a small portion of the data in a blockchain, and use indirect means to verify that a given chain is valid. Instead of validating blocks, they assume that the chain favoured by the blockchain’s consensus algorithm only contains valid blocks, and that the majority of block producers are honest. By allowing such clients to receive fraud proofs generated by fully validating nodes that show that a block violates the protocol rules, and combining this with probabilistic sampling techniques to verify that all of the data in a block actually is available to be downloaded so that fraud can be detected, we can eliminate the honest-majority assumption for block validity, and instead make much weaker assumptions about a minimum number of honest nodes that rebroadcast data. Fraud and data availability proofs are key to enabling on-chain scaling of blockchains while maintaining a strong assurance that on-chain data is available and valid. We present, implement, and evaluate a fraud and data availability proof system."}),`
`]}),`
`,e.jsx(i.p,{children:"Here is an overview of how NEAR bridge uses this in an optimistic approach"}),`
`,e.jsxs(i.p,{children:["The leading NEAR Ethereum Bridge today Near Rainbow Bridge uses an optimistic approach. Following is an excerpt from NearOnEthClient ",e.jsx(i.sup,{children:e.jsx(i.a,{href:"#user-content-fn-near-1",id:"user-content-fnref-near-1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"2"})}),"."]}),`
`,e.jsxs(i.blockquote,{children:[`
`,e.jsxs(i.p,{children:["we adopt the optimistic ",e.jsx(i.sup,{children:e.jsx(i.a,{href:"#user-content-fn-near-2",id:"user-content-fnref-near-2","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"3"})})," approach where NearOnEthClient verifies everything in the NEAR header except the signatures. Then anyone can challenge a signature in a submitted header within a 4-hour challenge window. The challenge requires verification of a single Ed25519 signature which would cost about 500k Ethereum gas (expensive, but possible)."]}),`
`]}),`
`,e.jsxs(i.h3,{id:"footnotes",children:["Footnotes",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#footnotes",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.hr,{}),`
`,e.jsxs(i.h2,{id:"fast-fourier-transforms",children:["Fast Fourier transforms",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#fast-fourier-transforms",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.h3,{id:"overview-5",children:["Overview",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#overview-5",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.h3,{id:"references-2",children:["References",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#references-2",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"https://vitalik.ca/general/2019/05/12/fft.html",children:"Fast Fourier Transforms"})}),`
`]}),`
`,e.jsx(i.hr,{}),`
`,e.jsxs(i.h2,{id:"weak-subjectivity",children:["Weak subjectivity",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#weak-subjectivity",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.h3,{id:"overview-6",children:["Overview",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#overview-6",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.p,{children:["Following is an excerpt from ",e.jsx(i.em,{children:"Analysis on Weak Subjectivity in Ethereum 2.0"})," ",e.jsx(i.sup,{children:e.jsx(i.a,{href:"#user-content-fn-1",id:"user-content-fnref-1-2","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})})," ."]}),`
`,e.jsxs(i.blockquote,{children:[`
`,e.jsxs(i.p,{children:["Weak subjectivity ",e.jsx(i.sup,{children:e.jsx(i.a,{href:"#user-content-fn-2",id:"user-content-fnref-2","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"4"})})," is a social-consensus-driven approach for solving the fun- damental “nothing-at-stake” problem of proof-of-stake protocols. In particular, it addresses the problem in the presence of long-range forks, while the slash- ing mechanism handles the case of short-range forks. Specifically, the current weak subjectivity mechanism deals with the following two types of long-range attacks ",e.jsx(i.sup,{children:e.jsx(i.a,{href:"#user-content-fn-3",id:"user-content-fnref-3","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"5"})})]}),`
`,e.jsxs(i.p,{children:["– ",e.jsx(i.em,{children:"Exploiting retired validators:"})," Adversaries can create and reveal a new chain branching from a certain block on the canonical chain, after 2/3 of validators who were active for the block have exited. Note that such validators can still justify and finalize conflicting blocks at earlier slots without being slashed after they have exited."]}),`
`,e.jsxs(i.p,{children:["– ",e.jsx(i.em,{children:"Exploiting diverging validator sets:"})," Adversaries can build a new chain until the validator set for the new chain is sufficiently different from that of the canonical chain. The larger the difference between the two validator sets, the lower the accountable safety tolerance. For example, if the intersection of the two sets is smaller than 2/3 of each set, then it is possible to have conflicting blocks to be finalized without any validators violating the slashing conditions."]}),`
`,e.jsx(i.p,{children:e.jsx(i.em,{children:"It is unknown whether this mechanism can deal with other types of long-range attacks, if any, in general."})}),`
`,e.jsx(i.p,{children:"The current weak subjectivity mechanism employs a social consensus layer in parallel to maintain sufficiently many checkpoints (called weak subjectivity check- points) so that there exist no conflicting finalized blocks that are descendants of the latest weak subjectivity checkpoint. In other words, the purpose of the latest weak subjectivity checkpoints is to deterministically identify the unique canonical chain even in the presence of conflicting finalized blocks caused by the long-range attacks."}),`
`]}),`
`,e.jsxs(i.h3,{id:"references-3",children:["References",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#references-3",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.p,{children:"Articles and guides"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[`
`,e.jsxs(i.p,{children:[e.jsx(i.a,{href:"https://notes.ethereum.org/@adiasg/weak-subjectvity-eth2",children:"Weak Subjectivity in Eth2.0"}),": This document is aimed for Eth2.0 client teams to understand weak subjectivity periods and their implication."]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsxs(i.p,{children:[e.jsx(i.a,{href:"https://github.com/ethereum/consensus-specs/blob/master/specs/phase0/weak-subjectivity.mdx",children:"Phase 0 -- Weak Subjectivity Guide"}),": This document is a guide for implementing the Weak Subjectivity protections in Phase 0."]}),`
`]}),`
`]}),`
`,e.jsx(i.p,{children:"Documentation"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[`
`,e.jsxs(i.p,{children:[e.jsx(i.a,{href:"https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/weak-subjectivity/",children:"Ethereum Docs: WEAK SUBJECTIVITY"}),": This refers to a chain that can progress objectively after some initial seed of information is retrieved socially."]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsxs(i.p,{children:[e.jsx(i.a,{href:"https://docs.teku.consensys.net/Concepts/Weak-Subjectivity/",children:"Teku Docs: Weak Subjectivity"}),": The weak subjectivity period refers to how far behind the chain head a node can be before 1/3 of validators may have exited since the node was last in sync."]}),`
`]}),`
`]}),`
`,e.jsx(i.p,{children:"Implementations"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://github.com/prysmaticlabs/prysm/blob/develop/beacon-chain/blockchain/weak_subjectivity_checks.go",children:"Prysm: weak_subjectivity_checks.go"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://github.com/prysmaticlabs/prysm/blob/develop/beacon-chain/blockchain/weak_subjectivity_checks.go#L31",children:"NewWeakSubjectivityVerifier"})," validates a checkpoint, and if valid, uses it to initialize a weak subjectivity verifier."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://github.com/prysmaticlabs/prysm/blob/develop/beacon-chain/blockchain/weak_subjectivity_checks.go#L52",children:"VerifyWeakSubjectivity"})," verifies the weak subjectivity root in the service struct."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(i.p,{children:"Footnotes"}),`
`,e.jsxs(i.section,{"data-footnotes":!0,className:"footnotes",children:[e.jsxs(i.h2,{className:"sr-only",id:"footnote-label",children:["Footnotes",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#footnote-label",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ol,{children:[`
`,e.jsxs(i.li,{id:"user-content-fn-1",children:[`
`,e.jsxs(i.p,{children:[e.jsxs(i.a,{href:"http://www0.cs.ucl.ac.uk/staff/M.AlBassam/publications/fraudproofs.pdf",children:["Fraud and Data Availability Proofs",e.jsx(i.div,{})," Invalid Blocks in Light Clients"]}),": Fraud and data availability proofs are key to enabling on-chain scaling of blockchains while maintaining a strong assurance that on-chain data is available and valid. ",e.jsx(i.a,{href:"#user-content-fnref-1","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"↩"})," ",e.jsxs(i.a,{href:"#user-content-fnref-1-2","data-footnote-backref":"","aria-label":"Back to reference 1-2",className:"data-footnote-backref",children:["↩",e.jsx(i.sup,{children:"2"})]})]}),`
`]}),`
`,e.jsxs(i.li,{id:"user-content-fn-near-1",children:[`
`,e.jsxs(i.p,{children:[e.jsx(i.a,{href:"https://near.org/blog/eth-near-rainbow-bridge/",children:"NEAR: ETH-NEAR Rainbow Bridge"}),": a bridge, called Rainbow Bridge, to connect the Ethereum and NEAR blockchains. ",e.jsx(i.a,{href:"#user-content-fnref-near-1","data-footnote-backref":"","aria-label":"Back to reference 2",className:"data-footnote-backref",children:"↩"})]}),`
`]}),`
`,e.jsxs(i.li,{id:"user-content-fn-near-2",children:[`
`,e.jsxs(i.p,{children:[e.jsx(i.a,{href:"https://medium.com/@deaneigenmann/optimistic-contracts-fb75efa7ca84",children:"Optimistic Contracts"}),": contracts that accept all information as fact until proven to be non-factual. This allows for a reduction in the cost of verifying data, as on-chain verification would only be necessary when one is sure that the data is false. ",e.jsx(i.a,{href:"#user-content-fnref-near-2","data-footnote-backref":"","aria-label":"Back to reference 3",className:"data-footnote-backref",children:"↩"})]}),`
`]}),`
`,e.jsxs(i.li,{id:"user-content-fn-2",children:[`
`,e.jsxs(i.p,{children:[e.jsx(i.a,{href:"https://blog.ethereum.org/2014/11/25/proof-stake-learned-love-weak-subjectivity",children:"Proof of Stake: How I Learned to Love Weak Subjectivity"}),": ",e.jsx(i.a,{href:"#user-content-fnref-2","data-footnote-backref":"","aria-label":"Back to reference 4",className:"data-footnote-backref",children:"↩"})]}),`
`]}),`
`,e.jsxs(i.li,{id:"user-content-fn-3",children:[`
`,e.jsxs(i.p,{children:["It is unknown whether this mechanism can deal with other types of long-range attacks, if any, in general ",e.jsx(i.a,{href:"#user-content-fnref-3","data-footnote-backref":"","aria-label":"Back to reference 5",className:"data-footnote-backref",children:"↩"})]}),`
`]}),`
`]}),`
`]})]})}function h(r={}){const{wrapper:i}={...n(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(s,{...r})}):s(r)}export{h as default,a as frontmatter};
