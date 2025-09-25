import{f as s,j as e}from"./index-UeFTLdi2.js";const h={title:"Cryptographic Primitives",description:"undefined"};function n(i){const r={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r.header,{children:e.jsxs(r.h1,{id:"cryptographic-primitives",children:["Cryptographic Primitives",e.jsx(r.a,{"aria-hidden":"true",tabIndex:"-1",href:"#cryptographic-primitives",children:e.jsx(r.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"date: 2023-02-04"}),`
`,e.jsx(r.li,{children:"last updated: 2023-02-04"}),`
`]}),`
`,e.jsxs(r.h2,{id:"overview",children:["Overview",e.jsx(r.a,{"aria-hidden":"true",tabIndex:"-1",href:"#overview",children:e.jsx(r.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(r.p,{children:"Cryptographic and Mathematic Primitives"}),`
`,e.jsxs(r.h2,{id:"reference-implementations",children:["Reference Implementations",e.jsx(r.a,{"aria-hidden":"true",tabIndex:"-1",href:"#reference-implementations",children:e.jsx(r.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(r.strong,{children:"general primitives"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[`
`,e.jsx(r.p,{children:e.jsx(r.a,{href:"https://en.wikipedia.org/wiki/Bloom_filter",children:"bloom filter"})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://github.com/ethereum/go-ethereum/tree/master/core/bloombits",children:"geth bloombits"})," (go): Package bloombits implements bloom filtering on batches of data."]}),`
`]}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsx(r.p,{children:e.jsx(r.a,{href:"https://ethereum.github.io/execution-specs/autoapi/ethereum/base_types/index.html",children:"int_to_bytes"})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://github.com/sigp/lighthouse/tree/stable/consensus/int_to_bytes",children:"lighthouse int_to_bytes"})," (rust): The Eth 2.0 specification uses ",e.jsx(r.code,{children:"int.to_bytes(2, 'little')"}),", which throws an error if ",e.jsx(r.code,{children:"int"})," doesn't fit within 3 bytes. The specification relies upon implicit asserts for some validity conditions, so we ensure the calling function is aware of the error condition as opposed to hiding it with a modulo."]}),`
`]}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsx(r.p,{children:e.jsx(r.a,{href:"https://en.wikipedia.org/wiki/Leaky_bucket#As_a_meter",children:"leaky bucket"})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://github.com/prysmaticlabs/prysm/blob/develop/container/leaky-bucket/leakybucket.go",children:"prysm"}),": leaky bucket as a meter"]}),`
`]}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsx(r.p,{children:"linked list"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://github.com/prysmaticlabs/prysm/tree/develop/container/doubly-linked-list",children:"prysm"})," (go): doubly linked list"]}),`
`]}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsx(r.p,{children:e.jsx(r.a,{href:"https://ethereum.org/en/developers/docs/data-structures-and-encoding/patricia-merkle-trie/",children:"merkle patrica tries"})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://github.com/ethereum/go-ethereum/blob/master/trie/trie.go#L17",children:"geth trie"})," (go): Package trie implements Merkle Patricia Tries."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://github.com/ethereum/go-ethereum/blob/master/core/state/database.go#L63",children:"geth database"})," (go): Trie is a Ethereum Merkle Patricia trie."]}),`
`]}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsx(r.p,{children:e.jsx(r.a,{href:"https://en.wikipedia.org/wiki/Merkle_tree",children:"merkle trees"})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://github.com/prysmaticlabs/prysm/blob/develop/container/trie/sparse_merkle.go",children:"prysm sparse_merkle"})," (go): defines utilities for sparse merkle tries for Ethereum consensus."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://github.com/sigp/lighthouse/tree/stable/consensus/cached_tree_hash",children:"lighthouse cached_tree_hash"})," (rust): Sparse Merkle tree suitable for tree hashing vectors and lists."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://github.com/sigp/lighthouse/tree/stable/consensus/tree_hash",children:"lighthouse tree_hash"})," (rust): Convenience method for ",e.jsx(r.code,{children:"MerkleHasher"})," which also provides some fast-paths for small trees.",e.jsx(r.code,{children:"minimum_leaf_count"})," will only be used if it is greater than or equal to the minimum number of leaves that can be created from ",e.jsx(r.code,{children:"bytes"}),"."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://github.com/sigp/lighthouse/tree/stable/consensus/tree_hash_derive",children:"lighthouse tree_hash_derive"})," (rust):"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://github.com/tendermint/tendermint/tree/main/crypto/merkle",children:"tendermint go"})," (go): Merkle Tree For smaller static data structures that don't require immutable snapshots or mutability; for instance the transactions and validation signatures of a block can be hashed using this simple merkle tree logic."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://github.com/paritytech/substrate/tree/master/utils/binary-merkle-tree",children:"paritytech binary-merkle-trie"})," (rust): implements a simple binary Merkle Tree utilities required for inter-op with Ethereum bridge & Solidity contract."]}),`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"https://github.com/Snowfork/snowbridge/blob/main/relayer/crypto/merkle/merkle.go",children:"snowbridge merkle.go"})}),`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"https://github.com/Snowfork/snowbridge/blob/main/parachain/pallets/ethereum-beacon-client/src/merkleization.rs",children:"snowbridge merkleization.rs"})}),`
`]}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.a,{href:"https://github.com/ethereum/consensus-specs/blob/dev/ssz/merkle-proofs.mdx",children:"merkle_proof"})," ",e.jsx(r.a,{href:"https://soliditydeveloper.com/merkle-tree",children:"explainer"})]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://github.com/sigp/lighthouse/tree/stable/consensus/merkle_proof",children:"lighthouse merkle_proof"})," (rust): efficiently represents a Merkle tree of fixed depth where only the first N indices are populated by non-zero leaves (perfect for the deposit contract tree)."]}),`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"https://github.com/Snowfork/snowbridge/blob/main/relayer/crypto/merkle/simplified_mmr_proof.go",children:"snowbridge simplified_mmr_proof.go"})}),`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"https://github.com/Snowfork/snowbridge/tree/main/parachain/pallets/basic-channel/merkle-proof",children:"snowbridge merkle-proof rust"})}),`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"https://github.com/Snowfork/snowbridge/blob/main/core/packages/contracts/contracts/utils/MerkleProof.sol",children:"snowbridge MerkleProof.sol"})}),`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"https://www.npmjs.com/package/eth-proof",children:"npm package eth-proof"})}),`
`]}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsx(r.p,{children:e.jsx(r.a,{href:"https://docs.grin.mw/wiki/chain-state/merkle-mountain-range/",children:"Merkle Mountain Range"})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://github.com/paritytech/substrate/tree/master/primitives/merkle-mountain-range",children:"paritytech merkle-mountain-range"})," (rust)"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://github.com/peekpi/harmony/tree/mmrHardfork/internal/mmr",children:"harmony mmr (go)"}),": Adds a merkle mountain range to harmony's core protocol to support light clients (WIP) ",e.jsx(r.a,{href:"https://github.com/harmony-one/harmony/pull/4198/files",children:"PR4198"})]}),`
`]}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsx(r.p,{children:"queues"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://github.com/prysmaticlabs/prysm/tree/develop/container/queue",children:"prysm"})," (go): priority queue"]}),`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"https://github.com/Snowfork/snowbridge/blob/main/core/packages/contracts/contracts/utils/MMRProof.sol",children:"snowbridge MMRProof.sol"})}),`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"https://github.com/Snowfork/merkle-mountain-range",children:"snowfork merkle-mountain-range"})}),`
`]}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsx(r.p,{children:"safe-arithmetic"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://github.com/sigp/lighthouse/tree/stable/consensus/safe_arith",children:"lighthouse safe_arith"})," (rust): Library for safe arithmetic on integers, avoiding overflow and division by zero."]}),`
`]}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsx(r.p,{children:"slice"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://github.com/prysmaticlabs/prysm/tree/develop/container/slice",children:"prysm"})," (go)"]}),`
`]}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsx(r.p,{children:e.jsx(r.a,{href:"https://ethereum.org/en/developers/docs/data-structures-and-encoding/patricia-merkle-trie/",children:"tries"})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://github.com/paritytech/substrate/tree/master/primitives/trie",children:"paritytech trie"}),`: Utility functions to interact with Substrate's Base-16 Modified Merkle Patricia tree ("trie").`]}),`
`]}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsx(r.p,{children:e.jsx(r.a,{href:"https://eprint.iacr.org/2018/623.pdf",children:"Verifiable Delay Function"})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://github.com/harmony-one/harmony/tree/main/crypto/vdf",children:"harmony vdf"})," (go): Package vdf is a proof-of-concept implementation of a delay function and the security properties are not guaranteed."]}),`
`]}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsx(r.p,{children:e.jsx(r.a,{href:"https://en.wikipedia.org/wiki/Verifiable_random_function",children:"Verfiable Random Function"})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://github.com/harmony-one/harmony/tree/main/crypto/vrf",children:"harmony vrf"})," (go): A VRF is a pseudorandom function f_k from a secret key k, such that that knowledge of k not only enables one to evaluate f_k at for any message m, but also to provide an NP-proof that the value f_k(m) is indeed correct without compromising the unpredictability of f_k for any m' != m. ",e.jsx(r.a,{href:"https://ieeexplore.ieee.org/document/814584",children:"https://ieeexplore.ieee.org/document/814584"})]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://github.com/paritytech/substrate/tree/master/primitives/consensus/vrf",children:"paritytech vrf"}),": Primitives for VRF-based consensus engines. Schnorrkel-based VRF."]}),`
`]}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsx(r.p,{children:"tree"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://github.com/paritytech/substrate/tree/master/utils/fork-tree",children:"paritytech fork-tree"})," (rust): Utility library for managing tree-like ordered data with logic for pruning the tree while finalizing nodes."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(r.strong,{children:"Hash functions"}),`
`,e.jsx(r.p,{children:e.jsx(r.a,{href:"https://en.wikipedia.org/wiki/SHA-2",children:"SHA-2"})}),`
`,e.jsx(r.p,{children:e.jsx(r.a,{href:"https://www.geeksforgeeks.org/difference-between-sha-256-and-keccak-256/",children:"difference between sha256 and kecakk256"})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://en.wikipedia.org/wiki/Argon2",children:"Argon 2"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://github.com/P-H-C/phc-winner-argon2",children:"Argon2"}),": eference C implementation of Argon2."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://cs.opensource.google/go/x/crypto/+/master:argon2/argon2.go",children:"x/crypto Argon2"})," (go): Package argon2 implements the key derivation function Argon2."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://github.com/sru-systems/rust-argon2",children:"rust-argon2"})," (rust): Rust library for hashing passwords using Argon2."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://www.npmjs.com/package/argon2",children:"node-argon2"})," (typescript): Bindings to the reference Argon2 implementation."]}),`
`]}),`
`]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://en.wikipedia.org/wiki/BLAKE_(hash_function)",children:"blake"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://www.blake2.net/",children:"blake2"})," hash function",`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://github.com/ethereum/go-ethereum/tree/master/crypto/blake2b",children:"ethereum-go-ethereum"})," (go): Package blake2b implements the BLAKE2b hash algorithm defined by RFC 7693 and the extendable output function (XOF) BLAKE2Xb."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://github.com/bnb-chain/bsc/tree/master/crypto/blake2b",children:"bsc blake2b"})," (go): Package blake2b implements the BLAKE2b hash algorithm defined by RFC 7693 and the extendable output function (XOF) BLAKE2Xb."]}),`
`]}),`
`]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://github.com/BLAKE3-team/BLAKE3",children:"blake3"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://crates.io/crates/blake3",children:"blake3 rust crate"})," (rust): BLAKE3 is based on an optimized instance of the established hash function BLAKE2 and on the original Bao tree mode."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://github.com/zeebo/blake3",children:"zeebo blake3"})," (go) : Pure Go implementation of BLAKE3 with AVX2 and SSE4.1 acceleration."]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://keccak.team/keccak.html",children:"keccak256"})," hash function",`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://github.com/prysmaticlabs/prysm/blob/develop/crypto/hash/hash.go",children:"prysm"})," (go)"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://github.com/sigp/lighthouse/blob/stable/crypto/eth2_hashing/src/lib.rs",children:"lighthouse"})," (rust): wrapper over two SHA256 crates: ",e.jsx(r.code,{children:"sha2"})," and ",e.jsx(r.code,{children:"ring"})]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://github.com/bnb-chain/bsc/blob/master/crypto/crypto.go#L91",children:"bsc crypto"})," (go)"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://github.com/harmony-one/harmony/blob/main/crypto/hash/hash.go",children:"harmony hash"})," (go)"]}),`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"https://github.com/Snowfork/snowbridge/blob/main/relayer/crypto/keccak/keccak.go",children:"snowbridge keccak"})}),`
`]}),`
`]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://pkg.go.dev/crypto/sha256",children:"sha256"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"https://github.com/tendermint/tendermint/tree/main/crypto/tmhash",children:"tendermint tmhash"})}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(r.strong,{children:"encryption"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://cryptobook.nakov.com/asymmetric-key-ciphers/ecies-public-key-encryption",children:"ECIES"})," (go): a hybrid encryption scheme",`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://github.com/ethereum/go-ethereum/tree/master/crypto/ecies",children:"ethereum-go-ethereum"})," (go)"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://github.com/bnb-chain/bsc/tree/master/crypto/ecies",children:"bsc ecies"})," (go)"]}),`
`]}),`
`]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://www.rfc-editor.org/rfc/pdfrfc/rfc4880.txt.pdf",children:"ascii armored encryption uses ed25519"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://github.com/ethereum/go-ethereum/tree/master/crypto/signify",children:"ethereum-go-ethereum"})," (go)"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://github.com/bnb-chain/bsc/tree/master/crypto/signify",children:"bsc signify"})," (go)"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://github.com/tendermint/tendermint/blob/main/crypto/armor/armor.go",children:"tenderming armor"})," (go)"]}),`
`]}),`
`]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://en.wikipedia.org/wiki/ChaCha20-Poly1305",children:"ChaCha20-Poly1305"}),": an authenticated encryption with additional data (AEAD) algorithm",`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://github.com/tendermint/tendermint/tree/main/crypto/xchacha20poly1305",children:"tendermint xchacha20poly1305"})," (go)"]}),`
`]}),`
`]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://libsodium.gitbook.io/doc/advanced/stream_ciphers/xsalsa20",children:"XSalsa20"})," (go): XSalsa20 is a stream cipher based upon Salsa20 but with a much longer nonce: 192 bits instead of 64 bits.",`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://github.com/tendermint/tendermint/tree/main/crypto/xsalsa20symmetric",children:"tendermint xsalsa20symmetric"})," (go): secret must be 32 bytes long. Use something like Sha256(Bcrypt(passphrase)). The ciphertext is (secretbox.Overhead + 24) bytes longer than the plaintext."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(r.strong,{children:"Random number generators"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://github.com/prysmaticlabs/prysm/blob/develop/crypto/rand/rand.go",children:"prysm"})," (go)"]}),`
`]}),`
`,e.jsx(r.strong,{children:"Serialization/DeSerialization"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[`
`,e.jsx(r.p,{children:e.jsx(r.a,{href:"https://ethereum.org/en/developers/docs/data-structures-and-encoding/rlp/",children:"RECURSIVE-LENGTH PREFIX (RLP) SERIALIZATION"})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"https://github.com/ethereum/go-ethereum/tree/master/rlp",children:"ethereum rlp"})}),`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"https://github.com/harmony-one/harmony/blob/main/crypto/hash/rlp.go",children:"harmony rlp"})}),`
`]}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsx(r.p,{children:e.jsx(r.a,{href:"https://ethereum.org/en/developers/docs/data-structures-and-encoding/ssz/",children:"Simple Serialize"})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"https://github.com/Snowfork/snowbridge/blob/main/parachain/pallets/ethereum-beacon-client/src/ssz.rs",children:"snowbridge ssz.rs"})}),`
`]}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsx(r.p,{children:e.jsx(r.a,{href:"https://ethereum.org/en/developers/docs/data-structures-and-encoding/patricia-merkle-trie/",children:"Merkle Patricia Trie"})}),`
`]}),`
`]}),`
`,e.jsx(r.strong,{children:"Threading"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://github.com/prysmaticlabs/prysm/blob/develop/container/thread-safe/map.go",children:"prysm"}),": contains generic containers that are protected either by Mutexes or atomics underneath the hood."]}),`
`]}),`
`,e.jsx(r.strong,{children:"zero knowledge"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["hash functions",`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://www.usenix.org/system/files/sec21-grassi.pdf",children:"Poseidon"}),`: A New Hash Function for
Zero-Knowledge Proof Systems (`,e.jsx(r.a,{href:"https://youtu.be/hUx3WpDV_l0",children:"video"}),")"]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(r.h2,{id:"references",children:["References",e.jsx(r.a,{"aria-hidden":"true",tabIndex:"-1",href:"#references",children:e.jsx(r.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://en.wikipedia.org/wiki/Bloom_filter",children:"Bloom Filter Wikipedia"}),": A Bloom filter is a space-efficient probabilistic data structure, conceived by Burton Howard Bloom in 1970, that is used to test whether an element is a member of a set."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://www.jasondavies.com/bloomfilter/",children:"Bloom Filters Explainer"}),": The bloom filter essentially consists of a bit vector of length m, represented by the central column."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://blockchain-academy.hs-mittweida.de/coursesblockchain-introduction-technical-beginner-to-intermediate/lessons/lesson-11-bloomfilter/",children:"Bloomfilter Lesson 11 - Blockchain Academy"}),": Blockchain Introduction Technical – Beginner to Intermediate Lesson 11 – Bloomfilter."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.25.4189&rep=rep1&type=pdf",children:"Cuckoo Hashing"}),`: a simple dictionary with worst case constant lookup time, equaling the theoretical performance of the classic dynamic perfect hashing scheme
of Dietzfelbinger et al.`]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"http://www.lkozma.net/cuckoo_hashing_visualization/",children:"Cukoo Hashing Visualization"}),": Visualization of Cukoo Hashing an elegant method for resolving collisions in hash tables."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://vitalik.ca/general/2019/05/12/fft.html",children:"Fast Fourier Transforms"}),`: Vitaliks explaniner on Fast Fourier Transforms. Trigger warning: specialized mathematical topic, with
special thanks to Karl Floersch for feedback.`]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.a,{href:"https://blockchain-academy.hs-mittweida.de/courses/blockchain-introduction-technical-beginner-to-intermediate/lessons/lesson-10-merkle-trees-merkle-proofs/",children:"Merkle Trees/Merkle Proofs Lesson 10 - Blockchain Academy"}),": Blockchain Introduction Technical – Beginner to Intermediate Lesson 10 – Merkle Trees/Merkle Proofs."]}),`
`]})]})}function l(i={}){const{wrapper:r}={...s(),...i.components};return r?e.jsx(r,{...i,children:e.jsx(n,{...i})}):n(i)}export{l as default,h as frontmatter};
