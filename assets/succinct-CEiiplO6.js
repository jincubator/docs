import{f as r,j as e}from"./index-UeFTLdi2.js";const t={title:"Succinct Labs",description:"undefined"};function n(i){const s={a:"a",blockquote:"blockquote",code:"code",div:"div",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",section:"section",span:"span",strong:"strong",sup:"sup",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.header,{children:e.jsxs(s.h1,{id:"succinct-labs",children:["Succinct Labs",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#succinct-labs",children:e.jsx(s.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"date: 2023-02-24"}),`
`,e.jsx(s.li,{children:"last updated: 2023-02-24"}),`
`]}),`
`,e.jsxs(s.h2,{id:"overview",children:["Overview",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#overview",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["Succinct",e.jsx(s.sup,{children:e.jsx(s.a,{href:"#user-content-fn-ov-1",id:"user-content-fnref-ov-1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})})," is building Telepathy",e.jsx(s.sup,{children:e.jsx(s.a,{href:"#user-content-fn-ov-2",id:"user-content-fnref-ov-2","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"2"})})," a zkSNARK circuit that verifies Ethereum validator signatures, allowing for a gas-efficient light client to run as a smart contract on any EVM chain."]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/succinctlabs",children:"succint"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://github.com/succinctlabs/plonky2-ecdsa",children:"https://github.com/succinctlabs/plonky2-ecdsa"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://github.com/succinctlabs/gnark-plonky2-verifier",children:"https://github.com/succinctlabs/gnark-plonky2-verifier"})}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/succinctlabs/telepathy-contracts",children:"https://github.com/succinctlabs/telepathy-contracts"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://github.com/succinctlabs/telepathy-contracts/tree/main/src/amb",children:"Arbitrary Message Bridge"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://github.com/succinctlabs/optimism-bedrock-contracts",children:"https://github.com/succinctlabs/optimism-bedrock-contracts"})}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/succinctlabs/v3-core",children:"https://github.com/succinctlabs/v3-core"})," (Business Source License 2023-04-01)"]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(s.h2,{id:"succinct-bridge-overview",children:["Succinct Bridge Overview",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#succinct-bridge-overview",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://blog.succinct.xyz/blog/proof-of-consensus",children:"Succinct Blog Oct 29, 2022"}),": Proof of Consensus Bridging between Ethereum and Gnosis Chain"]}),`
`]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:"The on-chain light client recreates the light client spec in Solidity (code here). In particular, we implement the process_light_client_finality_update function inside the step function in our smart contract. Then, inside step, where we would typically verify an aggregate BLS signature, we instead replace it with verification of a single Groth16 zkSNARK to reduce gas costs."}),`
`,e.jsx(s.p,{children:"Recall that the validator set of the sync committee rotates every 27 hours. On chain, we keep track of a commitment to the set of validators in the mapping syncCommitteeRootByPeriod. To update this mapping for the next period, we verify the merkle inclusion proof that the current validator set signs for the commitment for the next validator set. This computation happens inside the updateSyncCommittee function."}),`
`,e.jsx(s.p,{children:"Unfortunately, the commitment the validators sign is an SSZ commitment (simple serialization, Eth PoS serialization format) that is quite SNARK unfriendly, as it uses the SHA-256 hash function. It takes ~70 million constraints in a Groth16 circuit to compute the serialization of 512 validator BLS public keys to its corresponding SSZ commitment. Because we don’t want to do this for every single header verification proof (which happens every 6 minutes, i.e. once per epoch), we use an additional SNARK (the commitmentMappingProof argument) to provably map an SSZ commitment to a SNARK-friendly Poseidon commitment, that is stored in the mapping sszToPoseidon. For each BLS signature verification, we pass in the poseidon commitment of the sync committee validators as public input to ensure that the BLS signature we are verifying is from the correct public keys. Overall this approach (using 2 SNARKs) saves us 70M constraints on the BLS signature verification SNARK, which we must run for every update we wish to submit to the light client. The commitment mapping SNARK must only be run every sync committee period (roughly once every 27 hours)."}),`
`,e.jsx(s.p,{children:`Toolchain
We use the Circom programming language and the Groth16 proving system to generate our zkSNARKs. While a newer proof system (like PLONK arithmetization + KZG or FRI) would improve proving time, we believe Circom is the most production-ready zkSNARK stack today. In particular, Tornado Cash’s circuits are built on top of Circom and have been used for several years. Additionally, the on-chain verification cost of a Groth16 zkSNARK is the cheapest of all proving systems available today.`}),`
`]}),`
`,e.jsxs(s.ol,{start:"2",children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/succinctlabs/eth-proof-of-consensus",children:"eth-proof-of-consensus"}),": github repository"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://forum.gnosis.io/t/gip-57-should-gnosis-dao-support-research-of-a-zksnark-enabled-light-client-and-bridge/5421",children:"GIP-57"}),": $600,000 Grant from Gnosis to Succinct to support"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://twitter.com/succinctlabs/status/1572299292177481729",children:"Succinct Tweet"})," : Succinct tweet giving an overview of the bridge"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://blog.succinct.xyz/post/2022/09/20/proof-of-consensus",children:"Succinct Blog Sep 20, 2022"}),": Towards the endgame of blockchain interoperability with proof of consensus"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://forum.gnosis.io/t/gip-57-should-gnosis-dao-support-research-of-a-zksnark-enabled-light-client-and-bridge/5421",children:"GIP-57"}),": $600,000 Grant from Gnosis to Succinct to support research of a zkSNARK-enabled light client and bridge."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://youtu.be/cMSayTJA1B4",children:"Succinct Video"}),": ZK8: Succinct Verification of Consensus with zkSNARKs - Uma Roy & John Guibas - Succinct Labs"]}),`
`]}),`
`,e.jsxs(s.h2,{id:"trusted-setup",children:["Trusted Setup",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#trusted-setup",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h3,{id:"best-practices-for-setup",children:["Best Practices for Setup",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#best-practices-for-setup",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://hackmd.io/V-7Aal05Tiy-ozmzTGBYPA",children:"Best Practices for Large Circuits"}),": compiling and generating Groth16 proofs for large ZK circuits using the circom / snarkjs toolstack."]}),`
`]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:"For such large circuits, you need a machine with an Intel processor, lots of RAM and a large hard drive with swap enabled. For example, the zkPairing project used an AWS r5.8xlarge instance with 32-core 3.1GHz, 256G RAM machine with 1T hard drive and 400G swap."}),`
`,e.jsx(s.p,{children:"Compilation: for circuits with >20M constraints, one should not compile to WebAssembly because witness generation will exceed the memory cap of WebAssembly. For this reason, one must compile with the C++ flag and remove the wasm flag."}),`
`]}),`
`,e.jsxs(s.ol,{start:"2",children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://blog.hermez.io/hermez-zero-knowledge-proofs/",children:"Hermez Zero-Knowledge Proofs"}),": Overview of the Hermez Trusted Setupi"]}),`
`]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.a,{href:"https://aws.amazon.com/ec2/pricing/on-demand/",children:"Machine"}),": AWS r5.8xlarge instance with 32-core 3.1GHz, 256G RAM machine with 1T hard drive and 400G swap. $2.016 per hour"]}),`
`,e.jsxs(s.h3,{id:"trusted-ceremony-powers-of-tau",children:["Trusted Ceremony (Powers of Tau)",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#trusted-ceremony-powers-of-tau",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/weijiekoh/perpetualpowersoftau",children:"Perpetual Powers of Tau"}),": The goal is to securely generate zk-SNARK"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/iden3/snarkjs/blob/master/README.md#7-prepare-phase-2",children:"snarkjs Prepare phase 2"}),": Provide instructions on prepare phase 2 and links to the Powers of Tau files."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://www.dropbox.com/sh/mn47gnepqu88mzl/AACaJkBU7mmCq8uU8ml0-0fma?dl=0",children:"Powers of Tau files on Dropbox"}),":"]}),`
`]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.a,{href:"https://hermez.s3-eu-west-1.amazonaws.com/powersOfTau28_hez_final_27.ptau",children:"Download powersOfTau28_hez_final_27.ptau"}),": 144 GB file containing the encrypted evaluation of the Lagrange polynomials at tau for tau, alpha",e.jsx(s.em,{children:"tau and beta"}),"tau. It takes the beacon ptau file we generated in the previous step, and outputs a final ptau file which will be used to generate the circuit proving and verification keys."]}),`
`,e.jsxs(s.h3,{id:"example-build",children:["Example Build",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#example-build",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://github.com/succinctlabs/eth-proof-of-consensus/blob/main/circuits/circuits/aggregate_bls_verify.circom",children:"build_aggregate_bls_verify.sh"})}),`
`]}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"#!/bin/bash"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"PHASE1=/home/ubuntu/powersOfTau28_hez_final_27.ptau"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"BUILD_DIR=../build"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"CIRCUIT_NAME=test_aggregate_bls_verify_512"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"TEST_DIR=../test"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'OUTPUT_DIR="$BUILD_DIR"/"$CIRCUIT_NAME"_cpp'})}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"run() {"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'    if [ ! -d "$BUILD_DIR" ]; then'})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'        echo "No build directory found. Creating build directory..."'})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'        mkdir -p "$BUILD_DIR"'})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    fi"})}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'    # echo "'}),e.jsx(s.span,{style:{color:"#24292E",fontStyle:"italic","--shiki-dark":"#ADBAC7","--shiki-dark-font-style":"italic"},children:"**"}),e.jsx(s.span,{style:{color:"#24292E",fontWeight:"bold","--shiki-dark":"#ADBAC7","--shiki-dark-font-weight":"bold"},children:"**COMPILING CIRCUIT**"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'**"'})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    # start="}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"`date +%s`"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'    # circom "$TEST_DIR"/circuits/"$CIRCUIT_NAME".circom --O1 --r1cs --sym --c --output "$BUILD_DIR"'})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    # end="}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"`date +%s`"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'    # echo "DONE ($((end-start))s)"'})}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'    # echo "'}),e.jsx(s.span,{style:{color:"#24292E",fontStyle:"italic","--shiki-dark":"#ADBAC7","--shiki-dark-font-style":"italic"},children:"**"}),e.jsx(s.span,{style:{color:"#24292E",fontWeight:"bold","--shiki-dark":"#ADBAC7","--shiki-dark-font-weight":"bold"},children:"**Running make to make witness generation binary**"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'**"'})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    # start="}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"`date +%s`"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'    # make -C "$OUTPUT_DIR"'})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    # end="}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"`date +%s`"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'    # echo "DONE ($((end-start))s)"'})}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'    echo "'}),e.jsx(s.span,{style:{color:"#24292E",fontStyle:"italic","--shiki-dark":"#ADBAC7","--shiki-dark-font-style":"italic"},children:"**"}),e.jsx(s.span,{style:{color:"#24292E",fontWeight:"bold","--shiki-dark":"#ADBAC7","--shiki-dark-font-weight":"bold"},children:"**Executing witness generation**"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'**"'})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    start="}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"`date +%s`"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'    ./"$OUTPUT_DIR"/"$CIRCUIT_NAME" "$TEST_DIR"/input_aggregate_bls_verify_512.json witness.wtns'})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    end="}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"`date +%s`"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'    echo "DONE ($((end-start))s)"'})}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'    echo "'}),e.jsx(s.span,{style:{color:"#24292E",fontStyle:"italic","--shiki-dark":"#ADBAC7","--shiki-dark-font-style":"italic"},children:"**"}),e.jsx(s.span,{style:{color:"#24292E",fontWeight:"bold","--shiki-dark":"#ADBAC7","--shiki-dark-font-weight":"bold"},children:"**Converting witness to json**"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'**"'})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    start="}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"`date +%s`"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'    npx snarkjs wej "$OUTPUT_DIR"/witness.wtns "$OUTPUT_DIR"/witness.json'})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    end="}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"`date +%s`"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'    echo "DONE ($((end-start))s)"'})}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'    echo "'}),e.jsx(s.span,{style:{color:"#24292E",fontStyle:"italic","--shiki-dark":"#ADBAC7","--shiki-dark-font-style":"italic"},children:"**"}),e.jsx(s.span,{style:{color:"#24292E",fontWeight:"bold","--shiki-dark":"#ADBAC7","--shiki-dark-font-weight":"bold"},children:"**GENERATING ZKEY 0**"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'**"'})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    start="}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"`date +%s`"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'    npx --trace-gc --trace-gc-ignore-scavenger --max-old-space-size=2048000 --initial-old-space-size=2048000 --no-global-gc-scheduling --no-incremental-marking --max-semi-space-size=1024 --initial-heap-size=2048000 --expose-gc snarkjs zkey new "$BUILD_DIR"/"$CIRCUIT_NAME".r1cs "$PHASE1" "$OUTPUT_DIR"/"$CIRCUIT_NAME"_p1.zkey'})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    end="}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"`date +%s`"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'    echo "DONE ($((end-start))s)"'})}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'    echo "'}),e.jsx(s.span,{style:{color:"#24292E",fontStyle:"italic","--shiki-dark":"#ADBAC7","--shiki-dark-font-style":"italic"},children:"**"}),e.jsx(s.span,{style:{color:"#24292E",fontWeight:"bold","--shiki-dark":"#ADBAC7","--shiki-dark-font-weight":"bold"},children:"**CONTRIBUTE TO PHASE 2 CEREMONY**"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'**"'})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    start="}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"`date +%s`"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'    npx snarkjs zkey contribute "$OUTPUT_DIR"/"$CIRCUIT_NAME"_p1.zkey "$OUTPUT_DIR"/"$CIRCUIT_NAME"_p2.zkey -n="First phase2 contribution" -e="some random text for entropy"'})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    end="}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"`date +%s`"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'    echo "DONE ($((end-start))s)"'})}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'    echo "'}),e.jsx(s.span,{style:{color:"#24292E",fontStyle:"italic","--shiki-dark":"#ADBAC7","--shiki-dark-font-style":"italic"},children:"**"}),e.jsx(s.span,{style:{color:"#24292E",fontWeight:"bold","--shiki-dark":"#ADBAC7","--shiki-dark-font-weight":"bold"},children:"**VERIFYING FINAL ZKEY**"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'**"'})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    start="}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"`date +%s`"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'    npx --trace-gc --trace-gc-ignore-scavenger --max-old-space-size=2048000 --initial-old-space-size=2048000 --no-global-gc-scheduling --no-incremental-marking --max-semi-space-size=1024 --initial-heap-size=2048000 --expose-gc npx snarkjs zkey verify "$BUILD_DIR"/"$CIRCUIT_NAME".r1cs "$PHASE1" "$OUTPUT_DIR"/"$CIRCUIT_NAME"_p2.zkey'})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    end="}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"`date +%s`"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'    echo "DONE ($((end-start))s)"'})}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'    echo "'}),e.jsx(s.span,{style:{color:"#24292E",fontStyle:"italic","--shiki-dark":"#ADBAC7","--shiki-dark-font-style":"italic"},children:"**"}),e.jsx(s.span,{style:{color:"#24292E",fontWeight:"bold","--shiki-dark":"#ADBAC7","--shiki-dark-font-weight":"bold"},children:"**EXPORTING VKEY**"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'**"'})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    start="}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"`date +%s`"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'    npx snarkjs zkey export verificationkey "$OUTPUT_DIR"/"$CIRCUIT_NAME"_p2.zkey "$OUTPUT_DIR"/"$CIRCUIT_NAME"_vkey.json'})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    end="}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"`date +%s`"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'    echo "DONE ($((end-start))s)"'})}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'    echo "'}),e.jsx(s.span,{style:{color:"#24292E",fontStyle:"italic","--shiki-dark":"#ADBAC7","--shiki-dark-font-style":"italic"},children:"**"}),e.jsx(s.span,{style:{color:"#24292E",fontWeight:"bold","--shiki-dark":"#ADBAC7","--shiki-dark-font-weight":"bold"},children:"**GENERATING PROOF FOR SAMPLE INPUT**"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'**"'})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    start="}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"`date +%s`"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'    ~/rapidsnark/build/prover "$OUTPUT_DIR"/"$CIRCUIT_NAME"_p2.zkey "$OUTPUT_DIR"/witness.wtns "$OUTPUT_DIR"/"$CIRCUIT_NAME"_proof.json "$OUTPUT_DIR"/"$CIRCUIT_NAME"_public.json'})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    end="}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"`date +%s`"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'    echo "DONE ($((end-start))s)"'})}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'    echo "'}),e.jsx(s.span,{style:{color:"#24292E",fontStyle:"italic","--shiki-dark":"#ADBAC7","--shiki-dark-font-style":"italic"},children:"**"}),e.jsx(s.span,{style:{color:"#24292E",fontWeight:"bold","--shiki-dark":"#ADBAC7","--shiki-dark-font-weight":"bold"},children:"**VERIFYING PROOF FOR SAMPLE INPUT**"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'**"'})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    start="}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"`date +%s`"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'    npx snarkjs groth16 verify "$OUTPUT_DIR"/"$CIRCUIT_NAME"_vkey.json "$OUTPUT_DIR"/"$CIRCUIT_NAME"_public.json "$OUTPUT_DIR"/"$CIRCUIT_NAME"_proof.json'})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    end="}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"`date +%s`"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'    echo "DONE ($((end-start))s)"'})}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'    echo "'}),e.jsx(s.span,{style:{color:"#24292E",fontStyle:"italic","--shiki-dark":"#ADBAC7","--shiki-dark-font-style":"italic"},children:"**"}),e.jsx(s.span,{style:{color:"#24292E",fontWeight:"bold","--shiki-dark":"#ADBAC7","--shiki-dark-font-weight":"bold"},children:"**EXPORTING SOLIDITY SMART CONTRACT**"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'**"'})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    start="}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"`date +%s`"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'    npx snarkjs zkey export solidityverifier "$OUTPUT_DIR"/"$CIRCUIT_NAME"_p2.zkey verifier.sol'})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    end="}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"`date +%s`"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'    echo "DONE ($((end-start))s)"'})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"mkdir -p logs"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:`run 2>&1 | tee logs/"$CIRCUIT_NAME"_$(date '+%Y-%m-%d-%H-%M').log`})})]})})}),`
`,e.jsxs(s.h2,{id:"circuits",children:["circuits",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#circuits",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://docs.circom.io/getting-started/installation/",children:"Circom Documentation"}),": Circom is a novel domain-specific language for defining arithmetic circuits that can be used to generate zero-knowledge proofs."]}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://github.com/iden3/circom",children:"Circom github"})}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/iden3/circomlib",children:"circomlib github"})," contains a library of circuit templates."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://0xparc.org/blog/zk-pairing-1",children:"zkPairing Docs"}),": zkSNARKs for Elliptic Curve Pairings (Part 1)"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/yi-sun/circom-pairing",children:"circom-paring github"}),": proof-of-concept implementations of elliptic curve pairings (in particular, the optimal Ate pairing and Tate pairing) for the BLS12-381 curve in circom."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/puma314/batch-ecdsa",children:"Batch ECDSA Verification (github)"}),": Implementation of batch ECDSA verification in circom."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/0xPARC/circom-ecdsa",children:"circom-ecdsa (github)"}),": proof-of-concept implementations of ECDSA operations in circom."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://www.npmjs.com/package/snarkjs",children:"snarkjs"}),": This is a JavaScript and Pure Web Assembly implementation of zkSNARK and PLONK schemes. It uses the Groth16 Protocol (3 point only and 3 pairings) and PLONK."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/iden3/snarkjs/blob/master/README.md#7-prepare-phase-2",children:"snarkjs Prepare phase 2"}),": Provide instructions on prepare phase 2 and links to the Powers of Tau files."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/weijiekoh/perpetualpowersoftau",children:"Perpetual Powers of Tau"}),": The goal is to securely generate zk-SNARK parameters for circuits of up to 2 ^ 28 (260+ million) constraints."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://www.dropbox.com/sh/mn47gnepqu88mzl/AACaJkBU7mmCq8uU8ml0-0fma?dl=0",children:"Powers of Tau files on Dropbox"}),":"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/succinctlabs/eth-proof-of-consensus/blob/main/circuits/circuits/aggregate_bls_verify.circom",children:"eth-proof-of-consensus: circuits aggregate_bls_verify.circom"}),": example circuit with the following includes"]}),`
`]}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'include "../circom-pairing/circuits/bls_signature.circom";'})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'include "../circom-pairing/circuits/curve.circom";'})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'include "../circom-pairing/circuits/bls12_381_func.circom";'})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'include "./sha256_bytes.circom";'})})]})})}),`
`,e.jsxs(s.h2,{id:"contracts",children:["Contracts",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#contracts",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["Built using ",e.jsx(s.a,{href:"https://book.getfoundry.sh/",children:"foundry"}),"(",e.jsx(s.a,{href:"https://github.com/foundry-rs/foundry",children:"github"}),") and ",e.jsx(s.a,{href:"https://book.getfoundry.sh/forge/",children:"forge"}),". Verifiers (",e.jsx(s.a,{href:"#light-client-contracts",children:"Light Client Contracts"}),") can be ",e.jsx(s.a,{href:"https://docs.circom.io/getting-started/proving-circuits/#verifying-from-a-smart-contract",children:"generated"})," from ",e.jsx(s.a,{href:"#circuits",children:"circuits"})," using ",e.jsx(s.a,{href:"https://www.npmjs.com/package/snarkjs",children:"snarkjs"})]}),`
`,e.jsxs(s.h3,{id:"library-contracts",children:["Library Contracts",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#library-contracts",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/succinctlabs/eth-proof-of-consensus/tree/main/contracts/lib",children:"eth-proof-of-consensus/contracts/lib/"}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/hamdiallam/Solidity-RLP",children:"RLP decoder/reader"}),": The reader contract provides an interface to first take RLP encoded bytes and convert them into an internal data structure, RLPItem through the function, toRlpItem(bytes)."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/lidofinance/curve-merkle-oracle",children:"curve-merkle-oracle"}),": Trustless price oracle for ETH/stETH Curve pool."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:`Mechanics
The oracle works by generating and verifying Merkle Patricia proofs of the following Ethereum state:`}),`
`,e.jsx(s.p,{children:"Curve stETH/ETH pool contract account and the following slots from its storage trie:"}),`
`,e.jsx(s.p,{children:`admin_balances[0]
admin_balances[1]
stETH contract account and the following slots from its storage trie:`}),`
`,e.jsx(s.p,{children:`shares[0xDC24316b9AE028F1497c275EB9192a3Ea0f67022]
keccak256("lido.StETH.totalShares")
keccak256("lido.Lido.beaconBalance")
keccak256("lido.Lido.bufferedEther")
keccak256("lido.Lido.depositedValidators")
keccak256("lido.Lido.beaconValidators")`}),`
`]}),`
`,e.jsxs(s.h3,{id:"light-client-contracts",children:["Light Client Contracts",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#light-client-contracts",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/succinctlabs/eth-proof-of-consensus/tree/main/contracts/src/lightclient",children:"eth-proof-of-consensus: lightclient"}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://github.com/succinctlabs/eth-proof-of-consensus/blob/main/contracts/src/lightclient/BeaconLightClient.sol",children:"BeaconLightClient.sol"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://github.com/succinctlabs/eth-proof-of-consensus/blob/main/contracts/src/lightclient/PoseidonCommitmentVerifier.sol",children:"PoseidonCommitmentVerifier.sol"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://github.com/succinctlabs/eth-proof-of-consensus/blob/main/contracts/src/lightclient/BLSAggregatedSignatureVerifier.sol",children:"BLSAggregatedSignatureVerifier.sol"})}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(s.h3,{id:"bridge-contracts",children:["Bridge Contracts",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#bridge-contracts",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/succinctlabs/eth-proof-of-consensus/tree/main/contracts/src/amb",children:"eth-proof-of-consensus: amb"}),": Arbitrary Message Bridge",`
`,e.jsxs(s.ol,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://ethereum-magicians.org/t/a-standard-interface-for-arbitrary-message-bridges-between-chains-layers/6163",children:"Ethereum Magicians: A standard interface for arbitrary message bridges between chains/layers"})}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://docs.tokenbridge.net/eth-xdai-amb-bridge/about-the-eth-xdai-amb",children:"Token BridgeL ETH-xDai Arbitrary Message Bridge"}),": An Arbitrary Message Bridge (AMB) between the Ethereum Mainnet and the xDai chain"]}),`
`]}),`
`]}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://github.com/succinctlabs/eth-proof-of-consensus/tree/main/contracts/src/bridge",children:"eth-proof-of-consensus: bridge"})}),`
`]}),`
`,e.jsxs(s.h3,{id:"additional-contracts",children:["Additional Contracts",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#additional-contracts",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/succinctlabs/tokenbridge-contracts",children:"tokenbridge-contracts"}),": core functionality for the POA bridge. They implement the logic to relay assests between two EVM-based blockchain networks. The contracts collect bridge validator's signatures to approve and facilitate relay operations. (forked from ",e.jsx(s.a,{href:"https://github.com/omni/tokenbridge-contracts",children:"omni"}),")"]}),`
`]}),`
`,e.jsxs(s.h2,{id:"relayer",children:["Relayer",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#relayer",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsxs(s.em,{children:["Note: no public repository for relay functionality was found in ",e.jsx(s.a,{href:"https://github.com/succinctlabs",children:"succinctlabs github"}),"."]})}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"TODO"}),": This section should give an overview of"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Communication Protocol"}),`
`,e.jsx(s.li,{children:"Message Formatting"}),`
`,e.jsx(s.li,{children:"Relayer CodeBase"}),`
`,e.jsx(s.li,{children:"Relayers Roles : Creating Proofs relaying blocks etc."}),`
`,e.jsx(s.li,{children:"Economic incentives."}),`
`]}),`
`,e.jsx(s.p,{children:"Additional References"}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://blockscout.com/xdai/mainnet/address/0xa3ae36abaD813241b75b3Bb0e9E7a37aeFD70807",children:"BeaconLightClient on Gnosis Chain"}),": Transactions every 50 blocks on Gnosis i.e. approximately every 3 minutes"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://blog.succinct.xyz/blog/proof-of-consensus/",children:"Succinct Blog Oct 29, 2022"}),": Proof of Consensus Bridging between Ethereum and Gnosis Chain"]}),`
`]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:"On Gnosis Chain, after the Ethereum block in which the deposit transaction was included is finalized (generally 2 epochs, ~12 minutes) and the light client has been updated with a block of height greater than or equal to this block, our relayer automatically submits an executeMessage transaction to the Gnosis AMB."}),`
`]}),`
`,e.jsxs(s.h2,{id:"appendices",children:["Appendices",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#appendices",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h2,{id:"footnotes",children:["Footnotes",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#footnotes",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.section,{"data-footnotes":!0,className:"footnotes",children:[e.jsxs(s.h2,{className:"sr-only",id:"footnote-label",children:["Footnotes",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#footnote-label",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{id:"user-content-fn-ov-1",children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.a,{href:"https://www.succinct.xyz/",children:"Succint"}),": Building the end game of interoperability with zkSNARKs ",e.jsx(s.a,{href:"#user-content-fnref-ov-1","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"↩"})]}),`
`]}),`
`,e.jsxs(s.li,{id:"user-content-fn-ov-2",children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.a,{href:"https://docs.telepathy.xyz/",children:"Telepathy"}),": a zkSNARK circuit that verifies Ethereum validator signatures, allowing for a gas-efficient light client to run as a smart contract on any EVM chain. ",e.jsx(s.a,{href:"#user-content-fnref-ov-2","data-footnote-backref":"","aria-label":"Back to reference 2",className:"data-footnote-backref",children:"↩"})]}),`
`]}),`
`]}),`
`]})]})}function c(i={}){const{wrapper:s}={...r(),...i.components};return s?e.jsx(s,{...i,children:e.jsx(n,{...i})}):n(i)}export{c as default,t as frontmatter};
