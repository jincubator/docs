import{f as i,j as e}from"./index-CsmQaVFF.js";const h={title:"Ethereum 1.0",description:"undefined"};function n(r){const s={a:"a",blockquote:"blockquote",code:"code",div:"div",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.header,{children:e.jsxs(s.h1,{id:"ethereum-10",children:["Ethereum 1.0",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#ethereum-10",children:e.jsx(s.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(s.p,{children:`date: 2023-02-04
last-updated: 2023-02-04`}),`
`,e.jsxs(s.h2,{id:"overview",children:["Overview",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#overview",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h2,{id:"consensus-mechanism",children:["Consensus Mechanism",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#consensus-mechanism",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h3,{id:"ethereum-10-proof-of-work",children:["Ethereum 1.0 Proof Of Work",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#ethereum-10-proof-of-work",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:"Existing Blockchain technology is working on the core concept of 'Proof Of Work' (POW). A proof-of-work (PoW) is a protocol that is difficult to compute but easy to verify. It can be verified in far less time than it took to compute in first place. The process involves scanning for a value that when hashed, (such as with SHA-256), the hash begins with a number of zero bits. The average work required is exponential in the number of zero bits required and can be verified by executing a single hash. In simple words, Proof of work is an expensive computation done by all miners to compete to find a number that, when added to the block of transactions, causes this block to hash to a code with certain rare properties. Finding such a rare number is hard (based on the cryptographic features of the hash function used in this process), but verifying its validity when it's found is relatively easy. One can take the challenge, the proof string and hash them together and check if the hash begins with a number of zero bits. This requires to apply the hash function just once and verify the output indeed has requisite numbers of 0's in front. If so, then the proof of work is considered valid under the application of that cryptographic hash function. Every block in the participating network should contain such rare number."}),`
`]}),`
`,e.jsx(s.p,{children:e.jsx(s.img,{src:"/images/research/pow.png",alt:"Proof Of Work",title:"Proof Of Work"})}),`
`,e.jsxs(s.p,{children:["Block Structure from ",e.jsx(s.a,{href:"https://github.com/ethereum/go-ethereum/blob/release/1.9/consensus/ethash/consensus.go",children:"go-ethereum"})]}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"// SealHash returns the hash of a block prior to it being sealed."})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"func (ethash *Ethash) SealHash(header *types.Header) (hash common.Hash) {"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" hasher := sha3.NewLegacyKeccak256()"})}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" rlp.Encode(hasher, []interface{}{"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  header.ParentHash,"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  header.UncleHash,"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  header.Coinbase,"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  header.Root,"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  header.TxHash,"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  header.ReceiptHash,"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  header.Bloom,"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  header.Difficulty,"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  header.Number,"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  header.GasLimit,"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  header.GasUsed,"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  header.Time,"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  header.Extra,"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" })"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" hasher.Sum(hash["}),e.jsx(s.span,{style:{color:"#032F62",textDecoration:"underline","--shiki-dark":"#96D0FF","--shiki-dark-text-decoration":"inherit"},children:":0"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"])"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" return hash"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})})}),`
`,e.jsxs(s.h2,{id:"signing-mechanism",children:["Signing Mechanism",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#signing-mechanism",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["Transactions are signed using recoverable ECDSA signatures. This method utilises the SECP-256k1 curve. (see the ",e.jsx(s.a,{href:"https://ethereum.github.io/yellowpaper/paper.pdf",children:"Ethereum Yellow Paper"})," Appendix F. Signing Transactions). go-ethereum utilizes the ",e.jsx(s.a,{href:"https://github.com/ethereum/go-ethereum/tree/master/crypto/secp256k1",children:"secp256k1"})," package which wraps the bitcoin secp256k1 C library. Signing is handled by the ",e.jsx(s.a,{href:"https://github.com/ethereum/go-ethereum/tree/master/signer",children:"signer"})," receives a request and produces a signature. Note, the produced signature conforms to the secp256k1 curve R, S and V values, where the V value will be 27 or 28 for legacy reasons, if legacyV==true."]}),`
`,e.jsxs(s.h2,{id:"code-review",children:["Code Review",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#code-review",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h3,{id:"signing",children:["Signing",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#signing",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/ethereum/go-ethereum/tree/master/crypto/bls12381",children:"bls12381"}),": BLS12-381 is a pairing-friendly elliptic curve."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/ethereum/go-ethereum/tree/master/crypto/bn256",children:"bn256"}),": Package bn256 implements the Optimal Ate pairing over a 256-bit Barreto-Naehrig curve. (",e.jsx(s.a,{href:"https://moderncrypto.org/mail-archive/curves/2016/000740.html",children:"insecure"}),")"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/ethereum/go-ethereum/tree/master/crypto/secp256k1",children:"secp256k1"}),": Package secp256k1 wraps the bitcoin secp256k1 C library."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/ethereum/go-ethereum/tree/master/signer",children:"signer"}),": sign receives a request and produces a signature. Note, the produced signature conforms to the secp256k1 curve R, S and V values, where the V value will be 27 or 28 for legacy reasons, if legacyV==true."]}),`
`]}),`
`,e.jsxs(s.h3,{id:"consensus",children:["Consensus",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#consensus",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/ethereum/go-ethereum/tree/master/consensus",children:"consensus"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/ethereum/go-ethereum/blob/master/consensus/ethash/algorithm.go",children:"algorithm"}),": hashimoto aggregates data from the full dataset in order to produce our final value for a particular header hash and nonce."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/ethereum/go-ethereum/blob/master/consensus/ethash/api.go",children:"api"}),": API's include GetWork, SubmitWork, SubmitHashRate and GetHashRate."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/ethereum/go-ethereum/tree/master/consensus",children:"ethhash"}),": Package ethash implements the ethash proof-of-work consensus engine."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/ethereum/go-ethereum/blob/master/consensus/ethash/sealer.go",children:"sealer"}),": Seal implements consensus.Engine, attempting to find a nonce that satisfies the block's difficulty requirements."]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:["Additional Consensus Engines",`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/ethereum/go-ethereum/tree/master/consensus/beacon",children:"beacon"}),": Beacon is a consensus engine that combines the eth1 consensus and proof-of-stake algorithm. There is a special flag inside to decide whether to use legacy consensus rules or new rules. The transition rule is described in the eth1/2 merge spec",e.jsx(s.a,{href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-3675.mdx",children:"EIP-3675"}),". The beacon here is a half-functional consensus engine with partial functions which is only used for necessary consensus checks. The legacy consensus engine can be any engine implements the consensus interface (except the beacon itself)."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/ethereum/go-ethereum/blob/master/consensus/clique/clique.go",children:"clique"}),": Package clique implements the proof-of-authority consensus engine."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(s.h3,{id:"cryptographic-primitives",children:["Cryptographic Primitives",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#cryptographic-primitives",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.strong,{children:"general primitives"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/ethereum/go-ethereum/tree/master/core/asm",children:"asm"}),": Package asm provides support for dealing with EVM assembly instructions (e.g., disassembling them)."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/ethereum/go-ethereum/tree/master/common/bitutil",children:"bitutil"}),": Package bitutil implements fast bitwise operations."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/ethereum/go-ethereum/tree/master/core/bloombits",children:"bloombits"}),": Package bloombits implements bloom filtering on batches of data."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/ethereum/go-ethereum/tree/master/core/forkid",children:"forkid"}),": Package forkid implements ",e.jsx(s.a,{href:"https://eips.ethereum.org/EIPS/eip-2124",children:"EIP-2124"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/ethereum/go-ethereum/tree/master/common/hexutil",children:"hexutil"}),": Package hexutil implements hex encoding with 0x prefix. This encoding is used by the Ethereum RPC API to transport binary data in JSON payloads."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/ethereum/go-ethereum/tree/master/common/lru",children:"lru"}),": Package lru implements generically-typed Least Recently Used(LRU) caches."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/ethereum/go-ethereum/tree/master/common/math",children:"math"}),": Package math provides integer math utilities."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/ethereum/go-ethereum/tree/master/common/mclock",children:"mclock"}),": Package mclock is a wrapper for a monotonic clock source"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/ethereum/go-ethereum/tree/master/common/prque",children:"prque"}),e.jsx(s.div,{})," prque implements a priority queue data structure supporting arbitrary value types and int64 priorities."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/ethereum/go-ethereum/tree/master/trie",children:"trie"}),": Package trie implements Merkle Patricia Tries."]}),`
`]}),`
`,e.jsx(s.strong,{children:"hash functions"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/ethereum/go-ethereum/tree/master/crypto/blake2b",children:"blake2b"})," (go): Package blake2b implements the BLAKE2b hash algorithm defined by RFC 7693 and the extendable output function (XOF) BLAKE2Xb."]}),`
`]}),`
`,e.jsx(s.strong,{children:"encryption"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/ethereum/go-ethereum/tree/master/crypto/signify",children:"signify"}),": signFile reads the contents of an input file and signs it (in armored format) with the key provided, placing the signature into the output file.",e.jsx(s.a,{href:"https://www.rfc-editor.org/rfc/pdfrfc/rfc4880.txt.pdf",children:"ascii armored encryption"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/ethereum/go-ethereum/tree/master/crypto/ecies",children:"ecies"}),": a hybrid encryption scheme"]}),`
`]}),`
`,e.jsx(s.strong,{children:"random number generators"}),`
`,e.jsx(s.strong,{children:"serilization/deserialization"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/ethereum/go-ethereum/tree/master/rlp",children:"RLP"}),": Package rlp implements the RLP serialization format.(",e.jsx(s.a,{href:"https://github.com/ethereum/go-ethereum/blob/master/rlp/doc.go",children:"doc"}),`) The purpose of RLP (Recursive Linear Prefix) is to encode arbitrarily nested arrays of binary data, and RLP is the main encoding method used to serialize objects in Ethereum.
The only purpose of RLP is to encode structure; encoding specific atomic data types (eg.
strings, ints, floats) is left up to higher-order protocols. In Ethereum integers must be
represented in big endian binary form with no leading zeroes (thus making the integer
value zero equivalent to the empty string). RLP values are distinguished by a type tag. The type tag precedes the value in the input stream and defines the size and kind of the bytes that follow.`]}),`
`]}),`
`,e.jsx(s.strong,{children:"threading"}),`
`,e.jsx(s.strong,{children:"virtual machine"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/ethereum/go-ethereum/tree/master/core/vm",children:"vm"})," : Package vm implements the Ethereum Virtual Machine. The vm package implements one EVM, a byte code VM. The BC (Byte Code) VM loops over a set of bytes and executes them according to the set of rules defined in the Ethereum yellow paper."]}),`
`]}),`
`,e.jsx(s.strong,{children:"compiler"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/ethereum/go-ethereum/tree/master/common/compiler",children:"compiler"}),": Package compiler wraps the ABI compilation outputs. ParseCombinedJSON takes the direct output of a solc --combined-output run and parses it into a map of string contract name to Contract structs. The provided source, language and compiler version, and compiler options are all passed through into the Contract structs. The solc output is expected to contain ABI, source mapping, user docs, and dev docs. Returns an error if the JSON is malformed or missing data, or if the JSON embedded within the JSON is malformed."]}),`
`]}),`
`,e.jsxs(s.h2,{id:"references",children:["References",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#references",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.strong,{children:"Consensus"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.a,{href:"https://ethereum.org/en/developers/docs/consensus-mechanisms/pow/",children:"Proof of Work (POW), Ethereum Org, 2022"}),": Ethereum Proof of Work Documentation."]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.a,{href:"https://etherworld.co/2017/04/16/proof-of-work-pow/",children:"Proof Of Work (POW), EtherWorld 2017"}),": Etherworld Proof of Work Guide."]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.a,{href:"https://eips.ethereum.org/EIPS/eip-1057",children:"EIP-1057: ProgPoW, a Programmatic Proof-of-Work"}),": ProgPoW is a proof-of-work algorithm designed to close the efficiency gap available to specialized ASICs."]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.a,{href:"https://github.com/ethereum/go-ethereum/blob/release/1.9/consensus/consensus.go",children:"consensus go-ethereum: release 1.9 (codebase)"}),": Engine is an algorithm agnostic consensus engine. (go)"]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.a,{href:"https://github.com/ethereum/go-ethereum/blob/release/1.9/consensus/ethash/ethash.go",children:"ethash.go, go-ethereum release 1.9 (codebase)"}),": Package ethash implements the ethash proof-of-work consensus engine. (go)"]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.a,{href:"https://github.com/johnwhitton/horizon/blob/refactorV2/contracts/ethash/ethash.sol",children:"ethash.sol, horizon (codebase)"}),": Solidity implementation enableing the verification of ethhash (solidity)"]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.a,{href:"https://github.com/openethereum/parity-ethereum/blob/v2.7.2-stable/ethash/src/lib.rs",children:"ethash.rs, parity-ethereum (codebase)"}),": EthashManager implementation by parity (rust)."]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.a,{href:"https://github.com/openethereum/parity-ethereum/blob/v2.7.2-stable/ethash/src/progpow.rs",children:"progpow.ps, parity-ethereum (codebase)"}),": EthHash implementation by parity for ASICs (rust). ",e.jsx(s.em,{children:"ProgPoW (Programmatic Proof-of-Work) is the Ethereum network's proposed new Application-Specific Integrated Circuit (ASIC) resistant Proof-of-Work mining algorithm."})]}),`
`]}),`
`]}),`
`,e.jsx(s.strong,{children:"Staking"}),`
`,e.jsx(s.strong,{children:"Additional"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://ethereum.github.io/yellowpaper/paper.pdf",children:"Ethereum Yellow Paper"}),":"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://takenobu-hs.github.io/downloads/ethereum_evm_illustrated.pdf",children:"Ethereum EVM illustrated"}),": A technical overview of Ethereum including state, accounts, transactions and messages as well as the EVM. ",e.jsx(s.a,{href:"#appendix-e-data-structures",children:"Appendix E"})," has links to type definitions for blocks, transactions, state etc in geth."]}),`
`]})]})}function a(r={}){const{wrapper:s}={...i(),...r.components};return s?e.jsx(s,{...r,children:e.jsx(n,{...r})}):n(r)}export{a as default,h as frontmatter};
