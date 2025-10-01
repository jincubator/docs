import{f as i,j as e}from"./index-DFo0gy5F.js";const a={title:"Near Rainbow Bridge",description:"undefined"};function r(n){const s={a:"a",blockquote:"blockquote",code:"code",defs:"defs",div:"div",em:"em",g:"g",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li","mjx-container":"mjx-container",ol:"ol",p:"p",path:"path",pre:"pre",span:"span",strong:"strong",style:"style",svg:"svg",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",use:"use",...i(),...n.components},t=s["mjx-container"];return e.jsxs(e.Fragment,{children:[e.jsx(s.header,{children:e.jsxs(s.h1,{id:"near-rainbow-bridge",children:["Near Rainbow Bridge",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#near-rainbow-bridge",children:e.jsx(s.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"date: 2023-02-24"}),`
`,e.jsx(s.li,{children:"last updated: 2023-02-24"}),`
`]}),`
`,e.jsxs(s.h2,{id:"overview",children:["Overview",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#overview",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"NEAR Rainbow bridge was enhanced to support Ethereum 2.0 leveraging Ethereum Light Clients. This document is a review of the design."}),`
`,e.jsx(s.p,{children:"Key differences in supporting Ethereum 2.0 (Proof of Stake) vs Proof of Work involves removing the ETHHASH logic and SPV client and potentially replacing with MMR trees per epoch and checkpoints similar to Harmony Light Client on Ethereum."}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.a,{href:"https://near.org/bridge/",children:"NEAR Rainbow bridge"})," is in ",e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge",children:"this github repository"})," and is supported by ",e.jsx(s.a,{href:"https://github.com/aurora-is-near",children:"Aurora-labs"}),"."]}),`
`,e.jsxs(s.p,{children:["It recently provided support for ETH 2.0 in this ",e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/pull/762",children:"Pull Request (762)"}),"."]}),`
`,e.jsxs(s.p,{children:["It interacts ",e.jsx(s.a,{href:"https://github.com/aurora-is-near/lighthouse",children:"lighthouse"})," for Ethereum 2.0 Consensus and tree_hash functions as well as bls signatures."]}),`
`,e.jsx(s.p,{children:"High Level their architecture is similar to the Horizon Bridge but with some key differences, including but not limited to"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["interacting with the beacon chain now for finality ",e.jsx(s.code,{children:"is_correct_finality_update"})," ",e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/eth2near/finality-update-verify/src/lib.rs#L36",children:"see finality-update-verify"})]}),`
`,e.jsxs(s.li,{children:["Updated execution block proof to use the BEACONRPCClient and with an updated merkle tree",`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Design can be found in ",e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/pull/762",children:"PR-762"})]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(s.h2,{id:"approach",children:["Approach",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#approach",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"Near Rainbow bridge uses a fradu proof approach."}),`
`,e.jsxs(s.h2,{id:"proving-mechanisms",children:["Proving Mechanisms",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#proving-mechanisms",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h3,{id:"near-to-ethereum-watchdog",children:["NEAR to Ethereum watchdog",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#near-to-ethereum-watchdog",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/near2eth/watchdog/index.js",children:"watchdog"})," runs every 10 seconds and validates blocks on ",e.jsx(s.code,{children:"NearBridge.sol"})," challenging blocks with incorrect signatures. ",e.jsxs(s.em,{children:["Note: It uses ",e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/utils/http-prometheus.js",children:"heep-prometheus"})," for monitoring and storing block and producer information using ",e.jsx(s.code,{children:"gauges"})," and ",e.jsx(s.code,{children:"counters"}),"."]})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/cli/commands/start/watchdog.js",children:"watchdog is started"})," from the CLI"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/near2eth/watchdog/index.js",children:"watchdog logic"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Initializes monitoring information on ",e.jsx(s.code,{children:"Prometheus"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"const httpPrometheus = new HttpPrometheus(this.metricsPort, 'near_bridge_watchdog_')"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"const lastBlockVerified = httpPrometheus.gauge('last_block_verified', 'last block that was already verified')"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"const totBlockProducers = httpPrometheus.gauge('block_producers', 'number of block producers for current block')"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"const incorrectBlocks = httpPrometheus.counter('incorrect_blocks', 'number of incorrect blocks found')"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"const challengesSubmitted = httpPrometheus.counter('challenges_submitted', 'number of blocks challenged')"})}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:["Loops ",e.jsx(s.code,{children:"while (true)"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Gets the ",e.jsx(s.code,{children:"bridgeState"})]}),`
`,e.jsx(s.li,{children:"Loops through all blockProducers checking their signatures"}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"for (let i = 0; i < numBlockProducers; i++)"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Check each signature ",e.jsx(s.code,{children:"this.clientContract.methods.checkBlockProducerSignatureInHead(i).call()"})]}),`
`,e.jsxs(s.li,{children:["If invalid challenge the signature: ",e.jsx(s.code,{children:"this.clientContract.methods.challenge(this.ethMasterAccount, i).encodeABI()"})," calls ",e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/contracts/eth/nearbridge/contracts/NearBridge.sol#L93",children:"challenge function"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"function challenge(address payable receiver, uint signatureIndex) external override pausable(PAUSED_CHALLENGE)"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["checks block.timestamp is less than lastValidAt ",e.jsx(s.code,{children:"block.timestamp < lastValidAt,"})]}),`
`,e.jsxs(s.li,{children:["Check if the signature is valid ",e.jsx(s.code,{children:"!checkBlockProducerSignatureInHead(signatureIndex)"})]}),`
`,e.jsxs(s.li,{children:["slashes the last submitter ",e.jsx(s.code,{children:"balanceOf[lastSubmitter] = balanceOf[lastSubmitter] - lockEthAmount;"})]}),`
`,e.jsxs(s.li,{children:["resets lastValidAt ",e.jsx(s.code,{children:"lastValidAt = 0;"})]}),`
`,e.jsxs(s.li,{children:["Refunds half of the funds to the watchdog account ",e.jsx(s.code,{children:'receiver.call{value: lockEthAmount / 2}("");'})]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:["Sleeps for watchdog Delay seconds ",e.jsx(s.code,{children:"await sleep(watchdogDelay * 1000)"})]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(s.h2,{id:"relayer-mechanisms",children:["Relayer Mechanisms",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#relayer-mechanisms",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h3,{id:"ethereum-to-near-block-propagation-flow",children:["Ethereum to NEAR block propagation flow",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#ethereum-to-near-block-propagation-flow",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["Following is a walkthough of block propogation from Ethereum to NEAR. For a better understanding of the technical components see ",e.jsx(s.a,{href:"#appendix-a-ethereum-to-near-block-propagation-components",children:"Appendix A"}),"."]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/eth2near/eth2near-block-relay-rs/src/main.rs#L107",children:"Light Clients are deployed on Near"}),":",`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/eth2near/eth2near-block-relay-rs/src/main.rs#L107",children:"init_contract"}),": The eth2near relayer is called with an argument to initialize the ",e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/contracts/near/eth2-client/src/lib.rs",children:"eth2-client contract"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/eth2near/eth2near-block-relay-rs/src/main.rs#L108",children:"eth_client_contract"}),": is created using a contract_wrapper",`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"let mut eth_client_contract = EthClientContract::new(get_eth_contract_wrapper(&config));"})}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/eth2near/contract_wrapper/src/eth_client_contract.rs",children:"EthClientContract Wrapper"}),": creates an instance of ",e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/contracts/near/eth2-client/src/lib.rs",children:"eth2-client contract"})," with the following arguments",`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"network"})," - the name of Ethereum network such as ",e.jsx(s.code,{children:"mainnet"}),", ",e.jsx(s.code,{children:"goerli"}),", ",e.jsx(s.code,{children:"kiln"}),", etc."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"finalized_execution_header"})," - the finalized execution header to start initialization with."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"finalized_beacon_header"})," - correspondent finalized beacon header."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"current_sync_committee"})," - sync committee correspondent for finalized block."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"next_sync_committee"})," - sync committee for the next period after period for finalized block."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"hashes_gs_threshold"})," - the maximum number of stored finalized blocks."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"max_submitted_block_by_account"})," - the maximum number of unfinalized blocks which one relay can store in the client's storage."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"trusted_signer"})," - the account address of the trusted signer which is allowed to submit light client updates."]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/eth2near/eth2near-block-relay-rs/src/main.rs#L111",children:"Relayer is Created"}),":",`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/eth2near/eth2near-block-relay-rs/src/main.rs#L111",children:"eth2near_relay"})," is created using the following arguments",`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"let mut eth2near_relay = Eth2NearRelay::init(&config, get_eth_client_contract(&config), args.enable_binary_search, args.submit_only_finalized_blocks,);"})}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/eth2near/eth2near-block-relay-rs/src/main.rs",children:"Relayer is Started"}),":",`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["The relayer is started using ",e.jsx(s.code,{children:"eth2near_relay.run(None);"})]}),`
`,e.jsxs(s.li,{children:["This executes the ",e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/eth2near/eth2near-block-relay-rs/src/eth2near_relay.rs#L257",children:"eth2near_relay run function"})," ",e.jsx(s.code,{children:"pub fn run(&mut self, max_iterations: Option<u64>)"})," which runs until terminated doing using the following loop ",e.jsx(s.code,{children:"while !self.terminate"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"self.wait_for_synchronization(),"}),": gets the sync status"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"sleep(Duration::from_secs(12));"}),": waits for 12 seconds"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"self.get_max_slot_for_submission()"}),": gets the maximum slot for submission from Ethereum"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"self.get_last_eth2_slot_on_near"}),": gets the latest slot propogated from Ethereum to NEAR"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"if last_eth2_slot_on_near < max_slot_for_submission"}),": If there are slots to process",`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"self.get_execution_blocks_between(last_eth2_slot_on_near + 1, max_slot_for_submission,),"}),": Get the execution blocks to be processed"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"self.submit_execution_blocks(headers, current_slot, &mut last_eth2_slot_on_near)"}),": submit them"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"were_submission_on_iter = true;"}),": flags that there were submissions"]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"were_submission_on_iter |= self.send_light_client_updates_with_checks(last_eth2_slot_on_near);"}),": send light_client updates with checks and updates the submission flag to true if if passes. Following is some key logic",`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"self.is_enough_blocks_for_light_client_update"}),": Checks if there are enough blocks for a light client update",`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"self.send_light_client_updates"})," calls ",e.jsx(s.code,{children:"send_light_client_update"})," which",`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"if last_finalized_slot_on_eth >= last_finalized_slot_on_near + self.max_blocks_for_finalization"}),": checks if the gap is too big (i.e. we are at a new slot) between slot of finalized block on NEAR and ETH. If it is it sends a hand made client update (which will loop getting the new slots sync committees) otherwise it sends a regular client update (which propogates the block headers)",`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"self.send_hand_made_light_client_update(last_finalized_slot_on_near);"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"let include_next_sync_committee = BeaconRPCClient::get_period_for_slot (last_finalized_slot_on_near) != BeaconRPCClient::get_period_for_slot(attested_slot);"})}),`
`]}),`
`]}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"self.send_regular_light_client_update(last_finalized_slot_on_eth, last_finalized_slot_on_near,);"})}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"self.send_specific_light_client_update(light_client_update)"})," is called for both regular and hand made updates.",`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"self.eth_client_contract.is_known_block"}),": Checks if the block is already known on the Etherum Client Contract on NEAR"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"self.verify_bls_signature_for_finality_update(&light_client_update)"}),": Verifies the BLS signatures. This calls ",e.jsx(s.code,{children:"is_correct_finality_update"})," in ",e.jsx(s.code,{children:"eth2near/finality-update-verify/src/lib.rs"})," *"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"self.eth_client_contract.send_light_client_update(light_client_update.clone())"}),": Updates the light client with the finalized block"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"self.beacon_rpc_client.get_block_number_for_slot(types::Slot::new(light_client_update.finality_update.header_update.beacon_header.slot.as_u64())),"}),": Validates Finalized block number is correct on Ethereum usng the ",e.jsx(s.code,{children:"beacon_rpc_client"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"sleep(Duration::from_secs(self.sleep_time_after_submission_secs));"}),": sleeps for the configured submission sleep time."]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"if !were_submission_on_iter {thread::sleep(Duration::from_secs(self.sleep_time_on_sync_secs));}"}),": if there were submissions sleep for however many seconds were configured for sync sleep time."]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(s.h3,{id:"near-to-ethereum-block-propagation-flow",children:["NEAR to Ethereum block propagation flow",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#near-to-ethereum-block-propagation-flow",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.a,{href:"https://nomicon.io/ChainSpec/LightClient",children:"NEAR Light Client Documentation"})," gives an overview of how light clients work. At a high level the light client needs to fetch at least one block per ",e.jsx(s.a,{href:"https://docs.near.org/concepts/basics/epoch",children:"epoch"})," i.e. every 42,200 blocks or approxmiately 12 hours. Also Having the LightClientBlockView for block B is sufficient to be able to verify any statement about state or outcomes in any block in the ancestry of B (including B itself)."]}),`
`,e.jsxs(s.p,{children:["The current scripts and codebase indicates that a block would be fetched every 30 seconds with a max delay of 10 seconds. It feels that this would be expensive to update Ethereum so frequently. ",e.jsx(s.a,{href:"https://near.org/bridge/",children:"NEAR's bridge documentation"})," states ",e.jsx(s.em,{children:"Sending assets from NEAR back to Ethereum currently takes a maximum of sixteen hours (due to Ethereum finality times)"}),". This seems to align with sending light client updates once per NEAR epoch. The block fetch period is configurable in the relayer."]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:"The RPC returns the LightClientBlock for the block as far into the future from the last known hash as possible for the light client to still accept it. Specifically, it either returns the last final block of the next epoch, or the last final known block. If there's no newer final block than the one the light client knows about, the RPC returns an empty result."}),`
`,e.jsx(s.p,{children:"A standalone light client would bootstrap by requesting next blocks until it receives an empty result, and then periodically request the next light client block."}),`
`,e.jsx(s.p,{children:"A smart contract-based light client that enables a bridge to NEAR on a different blockchain naturally cannot request blocks itself. Instead external oracles query the next light client block from one of the full nodes, and submit it to the light client smart contract. The smart contract-based light client performs the same checks described above, so the oracle doesn't need to be trusted."}),`
`]}),`
`,e.jsx(s.p,{children:"Block Submitters stake ETH to be allowed to submit blocks which get's slashed if the watchdog identifies blocks with invalid signatures."}),`
`,e.jsx(s.p,{children:e.jsx(s.em,{children:"Note: Have not identified how the block submitters are rewarded for submitting blocks. Currently have only identified them locking ETH to be able to submit blocks and being slashed if they submit blocks with invalid signatures."})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/cli/index.js#L518",children:"Light Clients are deployed on Ethereum"})," via the CLI using ",e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/cli/init/eth-contracts.js",children:"eth-contracts.js"})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/cli/index.js#L505",children:"init-eth-ed25519"}),": Deploys ",e.jsx(s.code,{children:"Ed25519.sol"})," see more information under ",e.jsx(s.a,{href:"#nearbridge-cryptographic-primitives",children:"nearbridge Cryptographic Primitives"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/cli/index.js#L520",children:"init-eth-client"}),": Deploys ",e.jsx(s.code,{children:"NearBridge.sol"})," see more information under ",e.jsx(s.a,{href:"#near-to-ethereum-block-propagation-components",children:"NEAR to Ethereum block propagation components"}),". It takes the following arguments",`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"ethEd25519Address"}),": The address of the ECDSA signature checker using Ed25519 curve (see ",e.jsx(s.a,{href:"https://nbeguier.medium.com/a-real-world-comparison-of-the-ssh-key-algorithms-b26b0b31bfd9",children:"here"}),")"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"lockEthAmount"}),": The amount that ",e.jsx(s.code,{children:"BLOCK_PRODUCERS"})," need to deposit (in wei)to be able to provide blocks. This amount will be slashed if the block is challenged and proven not to have a valid signature. Default value is 100000000000000000000 WEI = 100 ETH."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"lockDuration"})," : 30 seconds"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"replaceDuration"}),": 60 seconds it is passed in nanoseconds, because it is a difference between NEAR timestamps."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"ethAdminAddress"}),": Bridge Administrator Address"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"0"})," : Indicates nothing is paused ",e.jsx(s.code,{children:"UNPAUSE_ALL"})]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/cli/index.js#L538",children:"init-eth-prover"}),": Deploys ",e.jsx(s.code,{children:"NearProver.sol"})," see more information under ",e.jsx(s.a,{href:"#near-to-ethereum-block-propagation-components",children:"NEAR to Ethereum block propagation components"}),". It takes the following arguments",`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"ethClientAddress"}),": Interface to ",e.jsx(s.code,{children:"NearBridge.sol"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"ethAdminAddress"}),": Administrator address"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"0"}),": paused indicator defaults to ",e.jsx(s.code,{children:"UNPAUSE_ALL = 0"})]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/cli/commands/start/near2eth-relay.js",children:"Relayer is Started"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:"Relayer is started using the following command"}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"cli/index.js start near2eth-relay \\"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"--eth-node-url http://127.0.0.1:8545/ \\"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"--eth-master-sk 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80 \\"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"--near-node-url https://rpc.testnet.near.org/ \\"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"--near-network-id testnet \\"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"--eth-client-address 0xe7f1725e7734ce288f8367e1bb143e90bb3f0512 \\"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"--eth-use-eip-1559 true \\"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"--near2eth-relay-max-delay 10 \\"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"--near2eth-relay-block-select-duration 30 \\"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"--near2eth-relay-after-submit-delay-ms 1000 \\"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"--log-verbose true \\"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"--daemon false"})})]})})}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/near2eth/near2eth-block-relay/index.js",children:"Relayer Logic"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Loops ",e.jsx(s.code,{children:"while (true)"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Get the bridge state (including ",e.jsx(s.code,{children:"currentHeight"}),", ",e.jsx(s.code,{children:"nextTimestamp"}),", ",e.jsx(s.code,{children:"nextValidAt"}),", ",e.jsx(s.code,{children:"numBlockProducers"})," )"]}),`
`,e.jsxs(s.li,{children:["Get the ",e.jsx(s.code,{children:"currentBlockHash"})," the hash of the current untrursted block based on ",e.jsx(s.code,{children:"lastValidAt"})]}),`
`,e.jsxs(s.li,{children:["Gets the ",e.jsx(s.code,{children:"lastBlock"})," by calling the NEAR rpc ",e.jsx(s.code,{children:"next_light_client_block"})," using the hash of last untrusted block ",e.jsx(s.code,{children:"bs58.encode(currentBlockHash)"})]}),`
`,e.jsxs(s.li,{children:["Get's the ",e.jsx(s.code,{children:"replaceDuration"})," by ",e.jsx(s.code,{children:"clientContract.methods.replaceDuration().call()"})," this will be 60 seconds if we deployed ",e.jsx(s.code,{children:"NearBridge.sol"})," with the default values above"]}),`
`,e.jsxs(s.li,{children:["Sets ",e.jsx(s.code,{children:"nextValidAt"})," from the bridge state ",e.jsx(s.code,{children:"web3.utils.toBN(bridgeState.nextValidAt)"})]}),`
`,e.jsxs(s.li,{children:["Sets ",e.jsx(s.code,{children:"replaceDelay"})," to 0 then updates it to the ",e.jsx(s.code,{children:"nextTimestamp"})," + ",e.jsx(s.code,{children:"replaceDuration"})," - ",e.jsx(s.code,{children:"lastBlock.inner_lite.timestamp"})," i.e. The new block has to be at least 60 seconds after the current block stored on the light client."]}),`
`,e.jsxs(s.li,{children:["Checks the height of the ",e.jsx(s.code,{children:"currentHeight"})," of the bridge is less than the ",e.jsx(s.code,{children:"lastblock"})," from the near light client ",e.jsx(s.code,{children:"(bridgeState.currentHeight < lastBlock.inner_lite.height)"})]}),`
`,e.jsxs(s.li,{children:["Serializes the ",e.jsx(s.code,{children:"lastBlock"})," using Borsh and check that the block is suitable"]}),`
`,e.jsxs(s.li,{children:["Checks that the ",e.jsx(s.code,{children:"replaceDelay"})," has been met, if not sleeps until it has"]}),`
`,e.jsx(s.li,{children:"Checks that the Master Account (the one submitting the block) has enough locked ETH (if not tries to deposit more). So that it can be slashed if the block proposed is invalid."}),`
`,e.jsxs(s.li,{children:["Adds the light client block ",e.jsx(s.code,{children:"await clientContract.methods.addLightClientBlock(nextBlockSelection.borshBlock).send"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Checks ",e.jsx(s.code,{children:"NearBridge.sol"})," (the light client) has been initialized"]}),`
`,e.jsxs(s.li,{children:["Checks ",e.jsx(s.code,{children:"balanceOf[msg.sender] >= lockEthAmount"})," that the sender has locked enough Eth to allow them to submit blocks"]}),`
`,e.jsxs(s.li,{children:["Decodes the nearBlock using ",e.jsx(s.code,{children:"Borsh.from(data)"})," and ",e.jsx(s.code,{children:"borsh.decodeLightClientBlock()"})]}),`
`,e.jsxs(s.li,{children:["Commis the previous block, or make sure that it is OK to replace it using",`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"lastValidAt = 0;"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"blockHashes_[curHeight] = untrustedHash;"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"blockMerkleRoots_[curHeight] = untrustedMerkleRoot;"})}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:["Check that the new block's height is greater than the current one's. ",e.jsx(s.code,{children:"nearBlock.inner_lite.height > curHeight"})]}),`
`,e.jsx(s.li,{children:"Check that the new block is from the same epoch as the current one, or from the next one."}),`
`,e.jsx(s.li,{children:"Check that the new block is signed by more than 2/3 of the validators."}),`
`,e.jsxs(s.li,{children:["If the block is from the next epoch, make sure that the Block producers ",e.jsx(s.code,{children:"next_bps"})," are supplied and have a correct hash."]}),`
`,e.jsxs(s.li,{children:["Add the Block to the Light client",`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Updates untrusted information to this block including ",e.jsx(s.code,{children:"untrustedHeight"}),", ",e.jsx(s.code,{children:"untrustedTimestamp"}),", ",e.jsx(s.code,{children:"untrustedHash"}),", ",e.jsx(s.code,{children:"untrustedMerkleRoot"}),", ",e.jsx(s.code,{children:"untrustedNextHash"}),", ",e.jsx(s.code,{children:"untrustedSignatureSet"}),", ",e.jsx(s.code,{children:"untrustedNextEpoch"})]}),`
`,e.jsxs(s.li,{children:["If ",e.jsx(s.code,{children:"fromNextEpoch"})," also update the Block Producers"]}),`
`,e.jsxs(s.li,{children:["Updates the ",e.jsx(s.code,{children:"lastSubmitter"})," and ",e.jsx(s.code,{children:"lastValidAt"})]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:["Cleans up the selected block to prevent submitting the same block again ",e.jsx(s.code,{children:"await sleep(afterSubmitDelayMs)"})]}),`
`,e.jsxs(s.li,{children:["Sets the HeightGauuges to the correct block height",`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"clientHeightGauge.set(Number(BigInt(bridgeState.currentHeight))"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"chainHeightGauge.set(Number(BigInt(lastBlock.inner_lite.height)))"})}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:["Sleeps for delay calculated from the maximum of the relayer days (10 seconds) and differnce between the current and next block time stamps and ",e.jsx(s.code,{children:"await sleep(1000 * delay)"})]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(s.h2,{id:"light-client-functionality",children:["Light Client Functionality",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#light-client-functionality",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h3,{id:"near-rainbow-bridge-ethereum-light-client-walkthrough",children:["Near Rainbow Bridge Ethereum Light Client Walkthrough",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#near-rainbow-bridge-ethereum-light-client-walkthrough",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["The following is a walkthrough of how a transaction executed on Ethereum is propogated to NEAR's ",e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/tree/master/contracts/near/eth2-client",children:"eth2-client"}),". See ",e.jsx(s.a,{href:"#cryptographic-primitives",children:"Cryptographic Primitives"})," for more information on the cryptography used. and ",e.jsx(s.a,{href:"#appendix-b-ethereum-light-client-finality-update-verify-components",children:"Appendix B"})," for verification components."]}),`
`,e.jsx(s.strong,{children:"At a high level the ethereum light client contract"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Optionally accepts client updates only from a trusted client"}),`
`,e.jsx(s.li,{children:"Can pause functions"}),`
`,e.jsx(s.li,{children:"Validates a sync committee exists for the curremt slot"}),`
`,e.jsx(s.li,{children:"Validates sync committe has greater than the minimum required sync committee members"}),`
`,e.jsx(s.li,{children:"Validates 2/3 or more of the committe members have signed the blocks"}),`
`,e.jsx(s.li,{children:"Validates bls signatures (i.e. the bls signatures of the sync comittee for the blocks propogated)"}),`
`,e.jsxs(s.li,{children:["Stores the hashes of the blocks for the past ",e.jsx(s.code,{children:"hashes_gc_threshold"})," headers. Events that happen past this threshold cannot be verified by the client. It is desirable that this number is larger than 7 days' worth of headers, which is roughly 51k Ethereum blocks. So this number should be 51k in production."]}),`
`,e.jsx(s.li,{children:"Stores the Ethereum Network (e.g. mainnet, kiln)"}),`
`,e.jsx(s.li,{children:"Stores Hashes of the finalized execution blocks mapped to their numbers."}),`
`,e.jsxs(s.li,{children:["Stores All unfinalized execution blocks' headers hashes mapped to their ",e.jsx(s.code,{children:"HeaderInfo"}),"."]}),`
`,e.jsxs(s.li,{children:["Stores ",e.jsx(s.code,{children:"AccountId"}),"s mapped to their number of submitted headers."]}),`
`,e.jsx(s.li,{children:"Stores Max number of unfinalized blocks allowed to be stored by one submitter account. This value should be at least 32 blocks (1 epoch), but the recommended value is 1024 (32 epochs)"}),`
`,e.jsx(s.li,{children:"Stores minimum balance that should be attached to register a new submitter account."}),`
`,e.jsx(s.li,{children:"Stores finalized beacon header"}),`
`,e.jsx(s.li,{children:"Stores finalized execution header"}),`
`,e.jsx(s.li,{children:"Stores current_sync_committee"}),`
`,e.jsx(s.li,{children:"Stores next_sync_committee"}),`
`]}),`
`,e.jsxs(s.h3,{id:"near-rainbow-bridge-near-light-client-walkthrough",children:["Near Rainbow Bridge Near Light Client Walkthrough",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#near-rainbow-bridge-near-light-client-walkthrough",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["The following is a walkthrough of how a transaction executed on NEAR is propogated to Ethereum's ",e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/tree/master/contracts/eth/nearbridge",children:"nearbridge"}),". See ",e.jsx(s.a,{href:"#nearbridge-cryptographic-primitives",children:"nearbridge Cryptographic Primitives"})," for more information on the cryptography used."]}),`
`,e.jsx(s.strong,{children:"NearOnEthClient Overview"}),`
`,e.jsx(s.p,{children:e.jsxs(s.em,{children:["The following is an excerpt from a blog by near on ",e.jsx(s.a,{href:"https://near.org/blog/eth-near-rainbow-bridge/",children:"eth-near-rainbow-bridge"})]})}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:"NearOnEthClient is an implementation of the NEAR light client in Solidity as an Ethereum contract. Unlike EthOnNearClient it does not need to verify every single NEAR header and can skip most of them as long as it verifies at least one header per NEAR epoch, which is about 43k blocks and lasts about half a day. As a result, NearOnEthClient can memorize hashes of all submitted NEAR headers in history, so if you are making a transfer from NEAR to Ethereum and it gets interrupted you don’t need to worry and you can resume it any time, even months later. Another useful property of the NEAR light client is that every NEAR header contains a root of the merkle tree computed from all headers before it. As a result, if you have one NEAR header you can efficiently verify any event that happened in any header before it."}),`
`,e.jsx(s.p,{children:"Another useful property of the NEAR light client is that it only accepts final blocks, and final blocks cannot leave the canonical chain in NEAR. This means that NearOnEthClient does not need to worry about forks."}),`
`,e.jsxs(s.p,{children:["However, unfortunately, NEAR uses ",e.jsx(s.a,{href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-665.mdx",children:"Ed25519"})," to sign messages of the validators who approve the blocks, and this signature is not available as an EVM precompile. It makes verification of all signatures of a single NEAR header prohibitively expensive. So technically, we cannot verify one NEAR header within one contract call to NearOnEthClient. Therefore we adopt the ",e.jsx(s.a,{href:"https://medium.com/@deaneigenmann/optimistic-contracts-fb75efa7ca84",children:"optimistic approach"})," where NearOnEthClient verifies everything in the NEAR header except the signatures. Then anyone can challenge a signature in a submitted header within a 4-hour challenge window. The challenge requires verification of a single Ed25519 signature which would cost about 500k Ethereum gas (expensive, but possible). The user submitting the NEAR header would have to post a bond in Ethereum tokens, and a successful challenge would burn half of the bond and return the other half to the challenger. The bond should be large enough to pay for the gas even if the gas price increases exponentially during the 4 hours. For instance, a 20 ETH bond would cover gas price hikes up to 20000 Gwei. This optimistic approach requires having a watchdog service that monitors submitted NEAR headers and challenges any headers with invalid signatures. For added security, independent users can run several watchdog services."]}),`
`,e.jsx(s.p,{children:"Once EIP665 is accepted, Ethereum will have the Ed25519 signature available as an EVM precompile. This will make watchdog services and the 4-hour challenge window unnecessary."}),`
`,e.jsx(s.p,{children:"At its bare minimum, Rainbow Bridge consists of EthOnNearClient and NearOnEthClient contracts, and three services: Eth2NearRelay, Near2EthRelay, and the Watchdog. We might argue that this already constitutes a bridge since we have established a cryptographic link between two blockchains, but practically speaking it requires a large portion of additional code to make application developers even consider using the Rainbow Bridge for their applications."}),`
`]}),`
`,e.jsx(s.p,{children:e.jsxs(s.em,{children:["The following information on sending assets from NEAR back to Ethereum is an excerpt from ",e.jsx(s.a,{href:"https://near.org/bridge/",children:"https://near.org/bridge/"}),"."]})}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:"Sending assets from NEAR back to Ethereum currently takes a maximum of sixteen hours (due to Ethereum finality times) and costs around $60 (due to ETH gas costs and at current ETH price). These costs and speeds will improve in the near future."}),`
`]}),`
`,e.jsxs(s.h2,{id:"token-lockers",children:["Token Lockers",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#token-lockers",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h3,{id:"token-transfer-process-flow",children:["Token Transfer Process Flow",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#token-transfer-process-flow",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.a,{href:"https://near.org/bridge/",children:"NEAR Rainbow Bridge"})," uses ERC-20 connectors which are developed in ",e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-token-connector",children:"rainbow-token-connector"})," and ",e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge-client",children:"rainbow-bridge-client"}),". Also see ",e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/docs/workflows/eth2near-fun-transfer.mdx",children:"eth2near-fun-transfer.md"}),"."]}),`
`,e.jsx(s.p,{children:"Following is an overview of timing and anticipated costs"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Once on NEAR, transactions will confirm in 1-2 seconds and cost well under $1 in most cases."}),`
`,e.jsx(s.li,{children:"Since the Bridge requires transactions on Ethereum for NEAR and Ethereum, the following costs are expected."}),`
`,e.jsx(s.li,{children:"Sending assets from Ethereum to NEAR takes about six minutes (20 blocks) and for ERC-20 costs about $10 on average."}),`
`,e.jsx(s.li,{children:"Sending assets from NEAR back to Ethereum currently takes a maximum of sixteen hours (due to Ethereum finality times) and costs around $60 (due to ETH gas costs and at current ETH price). These costs and speeds will improve in the near future."}),`
`]}),`
`,e.jsx(s.p,{children:e.jsxs(s.em,{children:["Note: This uses Ethreum ",e.jsx(s.a,{href:"https://eips.ethereum.org/EIPS/eip-20",children:"ERC20"})," and NEAR ",e.jsx(s.a,{href:"https://nomicon.io/Standards/Tokens/FungibleToken/Core",children:"NEP-141"})," initally developed for ",e.jsx(s.a,{href:"https://github.com/near/NEPs/pull/21",children:"NEP-21"})]})}),`
`,e.jsx(s.strong,{children:e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-token-connector/blob/master/README.mdx",children:"Generic ERC-20/NEP-141 connector for Rainbow Bridge"})}),`
`,e.jsx(s.strong,{children:"Specification"}),`
`,e.jsx(s.strong,{children:"Ethereum's side"}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"contract"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" ERC20Locker"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"  constructor"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"bytes"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" memory"}),e.jsx(s.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:" nearTokenFactory"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"INearProver"}),e.jsx(s.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:" prover"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:") "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"public"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  function "}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"lockToken"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(IERC20 token, uint256 amount, string memory accountId) "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"public"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  function "}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"unlockToken"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(bytes memory proofData, uint64 proofBlockHeader) "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"public"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})})}),`
`,e.jsx(s.strong,{children:"NEAR's side"}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"struct"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" BridgeTokenFactory"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    /// The account of the prover that we can use to prove"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    pub"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" prover_account"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" AccountId"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    /// Address of the Ethereum locker contract."})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    pub"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" locker_address"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ["}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"u8"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"; "}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"20"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"],"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    /// Hashes of the events that were already used."})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    pub"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" used_events"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" UnorderedSet"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"<"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"Vec"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"<"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"u8"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:">>,"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    /// Mapping from Ethereum tokens to NEAR tokens."})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    pub"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" tokens"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" UnorderedMap"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"<"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"EvmAddress"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"AccountId"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:">;"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"impl"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" BridgeTokenFactory"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    /// Initializes the contract."})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    /// `prover_account`: NEAR account of the Near Prover contract;"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    /// `locker_address`: Ethereum address of the locker contract, in hex."})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    #[init]"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    pub"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" fn"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" new"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(prover_account"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" AccountId"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", locker_address"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" String"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:") "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"->"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" Self"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    /// Relays the lock event from Ethereum."})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    /// Uses prover to validate that proof is correct and relies on a canonical Ethereum chain."})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    /// Send `mint` action to the token that is specified in the proof."})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    #[payable]"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    pub"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" fn"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" deposit"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"&mut"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" self"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", proof"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" Proof"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})]}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    /// A callback from BridgeToken contract deployed under this factory."})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    /// Is called after tokens are burned there to create an receipt result `(amount, token_address, recipient_address)` for Ethereum to unlock the token."})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    pub"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" fn"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" finish_withdraw"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(token_account"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" AccountId"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", amount"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" Balance"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", recipient"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" EvmAddress"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})]}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    /// Transfers given NEP-21 token from `predecessor_id` to factory to lock."})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    /// On success, leaves a receipt result `(amount, token_address, recipient_address)`."})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    #[payable]"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    pub"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" fn"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" lock"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"&mut"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" self"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", token"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" AccountId"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", amount"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" Balance"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", recipient"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" String"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})]}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    /// Relays the unlock event from Ethereum."})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    /// Uses prover to validate that proof is correct and relies on a canonical Ethereum chain."})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    /// Uses NEP-21 `transfer` action to move funds to `recipient` account."})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    #[payable]"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    pub"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" fn"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" unlock"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"&mut"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" self"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", proof"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" Proof"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})]}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    /// Deploys BridgeToken contract for the given EVM address in hex code."})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    /// The name of new NEP21 compatible contract will be <hex(evm_address)>.<current_id>."})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    /// Expects ~35N attached to cover storage for BridgeToken."})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    #[payable]"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    pub"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" fn"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" deploy_bridge_token"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(address"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" String"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})]}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    /// Checks if Bridge Token has been successfully deployed with `deploy_bridge_token`."})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    /// On success, returns the name of NEP21 contract associated with given address (<hex(evm_address)>.<current_id>)."})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:'    /// Otherwise, returns "token do not exists" error.'})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    pub"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" fn"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" get_bridge_token_account_id"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"&"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"self"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", address"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" String"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:") "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"->"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" AccountId"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"struct"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" BridgeToken"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"   controller"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" AccountId"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"   token"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" Token"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// uses https://github.com/ilblackdragon/balancer-near/tree/master/near-lib-rs"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"impl"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" BridgeToken"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    /// Setup the Token contract with given factory/controller."})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    pub"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" fn"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" new"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(controller"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" AccountId"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:") "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"->"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" Self"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    /// Mint tokens to given user. Only can be called by the controller."})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    pub"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" fn"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" mint"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"&mut"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" self"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", account_id"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" AccountId"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", amount"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" Balance"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})]}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    /// Withdraw tokens from this contract."})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"    /// Burns sender's tokens and calls controller to create event for relaying."})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    pub"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" fn"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" withdraw"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"&mut"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" self"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", amount"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" U128"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", recipient"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" String"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:") "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"->"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" Promise"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"impl"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" FungibleToken"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" for"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" BridgeToken"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"   // see example https://github.com/ilblackdragon/balancer-near/blob/master/balancer-pool/src/lib.rs#L329"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})})}),`
`,e.jsx(s.strong,{children:"Setup new ERC-20 on NEAR"}),`
`,e.jsxs(s.p,{children:["To setup token contract on NEAR side, anyone can call ",e.jsx(s.code,{children:"<bridge_token_factory>.deploy_bridge_token(<erc20>)"})," where ",e.jsx(s.code,{children:"<erc20>"}),` is the address of the token.
With this call must attach the amount of `,e.jsx(t,{className:"MathJax",jax:"SVG",children:e.jsxs(s.svg,{style:{verticalAlign:"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"34.962ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 15453 1000",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[e.jsxs(s.defs,{children:[e.jsx(s.path,{id:"MJX-1-TEX-I-1D441",d:"M234 637Q231 637 226 637Q201 637 196 638T191 649Q191 676 202 682Q204 683 299 683Q376 683 387 683T401 677Q612 181 616 168L670 381Q723 592 723 606Q723 633 659 637Q635 637 635 648Q635 650 637 660Q641 676 643 679T653 683Q656 683 684 682T767 680Q817 680 843 681T873 682Q888 682 888 672Q888 650 880 642Q878 637 858 637Q787 633 769 597L620 7Q618 0 599 0Q585 0 582 2Q579 5 453 305L326 604L261 344Q196 88 196 79Q201 46 268 46H278Q284 41 284 38T282 19Q278 6 272 0H259Q228 2 151 2Q123 2 100 2T63 2T46 1Q31 1 31 10Q31 14 34 26T39 40Q41 46 62 46Q130 49 150 85Q154 91 221 362L289 634Q287 635 234 637Z"}),e.jsx(s.path,{id:"MJX-1-TEX-I-1D438",d:"M492 213Q472 213 472 226Q472 230 477 250T482 285Q482 316 461 323T364 330H312Q311 328 277 192T243 52Q243 48 254 48T334 46Q428 46 458 48T518 61Q567 77 599 117T670 248Q680 270 683 272Q690 274 698 274Q718 274 718 261Q613 7 608 2Q605 0 322 0H133Q31 0 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q146 66 215 342T285 622Q285 629 281 629Q273 632 228 634H197Q191 640 191 642T193 659Q197 676 203 680H757Q764 676 764 669Q764 664 751 557T737 447Q735 440 717 440H705Q698 445 698 453L701 476Q704 500 704 528Q704 558 697 578T678 609T643 625T596 632T532 634H485Q397 633 392 631Q388 629 386 622Q385 619 355 499T324 377Q347 376 372 376H398Q464 376 489 391T534 472Q538 488 540 490T557 493Q562 493 565 493T570 492T572 491T574 487T577 483L544 351Q511 218 508 216Q505 213 492 213Z"}),e.jsx(s.path,{id:"MJX-1-TEX-I-1D434",d:"M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z"}),e.jsx(s.path,{id:"MJX-1-TEX-I-1D445",d:"M230 637Q203 637 198 638T193 649Q193 676 204 682Q206 683 378 683Q550 682 564 680Q620 672 658 652T712 606T733 563T739 529Q739 484 710 445T643 385T576 351T538 338L545 333Q612 295 612 223Q612 212 607 162T602 80V71Q602 53 603 43T614 25T640 16Q668 16 686 38T712 85Q717 99 720 102T735 105Q755 105 755 93Q755 75 731 36Q693 -21 641 -21H632Q571 -21 531 4T487 82Q487 109 502 166T517 239Q517 290 474 313Q459 320 449 321T378 323H309L277 193Q244 61 244 59Q244 55 245 54T252 50T269 48T302 46H333Q339 38 339 37T336 19Q332 6 326 0H311Q275 2 180 2Q146 2 117 2T71 2T50 1Q33 1 33 10Q33 12 36 24Q41 43 46 45Q50 46 61 46H67Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628Q287 635 230 637ZM630 554Q630 586 609 608T523 636Q521 636 500 636T462 637H440Q393 637 386 627Q385 624 352 494T319 361Q319 360 388 360Q466 361 492 367Q556 377 592 426Q608 449 619 486T630 554Z"}),e.jsx(s.path,{id:"MJX-1-TEX-I-1D461",d:"M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z"}),e.jsx(s.path,{id:"MJX-1-TEX-I-1D45C",d:"M201 -11Q126 -11 80 38T34 156Q34 221 64 279T146 380Q222 441 301 441Q333 441 341 440Q354 437 367 433T402 417T438 387T464 338T476 268Q476 161 390 75T201 -11ZM121 120Q121 70 147 48T206 26Q250 26 289 58T351 142Q360 163 374 216T388 308Q388 352 370 375Q346 405 306 405Q243 405 195 347Q158 303 140 230T121 120Z"}),e.jsx(s.path,{id:"MJX-1-TEX-I-1D450",d:"M34 159Q34 268 120 355T306 442Q362 442 394 418T427 355Q427 326 408 306T360 285Q341 285 330 295T319 325T330 359T352 380T366 386H367Q367 388 361 392T340 400T306 404Q276 404 249 390Q228 381 206 359Q162 315 142 235T121 119Q121 73 147 50Q169 26 205 26H209Q321 26 394 111Q403 121 406 121Q410 121 419 112T429 98T420 83T391 55T346 25T282 0T202 -11Q127 -11 81 37T34 159Z"}),e.jsx(s.path,{id:"MJX-1-TEX-I-1D463",d:"M173 380Q173 405 154 405Q130 405 104 376T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Q21 294 29 316T53 368T97 419T160 441Q202 441 225 417T249 361Q249 344 246 335Q246 329 231 291T200 202T182 113Q182 86 187 69Q200 26 250 26Q287 26 319 60T369 139T398 222T409 277Q409 300 401 317T383 343T365 361T357 383Q357 405 376 424T417 443Q436 443 451 425T467 367Q467 340 455 284T418 159T347 40T241 -11Q177 -11 139 22Q102 54 102 117Q102 148 110 181T151 298Q173 362 173 380Z"}),e.jsx(s.path,{id:"MJX-1-TEX-I-1D452",d:"M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z"}),e.jsx(s.path,{id:"MJX-1-TEX-I-1D45F",d:"M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z"}),e.jsx(s.path,{id:"MJX-1-TEX-I-1D460",d:"M131 289Q131 321 147 354T203 415T300 442Q362 442 390 415T419 355Q419 323 402 308T364 292Q351 292 340 300T328 326Q328 342 337 354T354 372T367 378Q368 378 368 379Q368 382 361 388T336 399T297 405Q249 405 227 379T204 326Q204 301 223 291T278 274T330 259Q396 230 396 163Q396 135 385 107T352 51T289 7T195 -10Q118 -10 86 19T53 87Q53 126 74 143T118 160Q133 160 146 151T160 120Q160 94 142 76T111 58Q109 57 108 57T107 55Q108 52 115 47T146 34T201 27Q237 27 263 38T301 66T318 97T323 122Q323 150 302 164T254 181T195 196T148 231Q131 256 131 289Z"}),e.jsx(s.path,{id:"MJX-1-TEX-I-1D44E",d:"M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"}),e.jsx(s.path,{id:"MJX-1-TEX-I-1D454",d:"M311 43Q296 30 267 15T206 0Q143 0 105 45T66 160Q66 265 143 353T314 442Q361 442 401 394L404 398Q406 401 409 404T418 412T431 419T447 422Q461 422 470 413T480 394Q480 379 423 152T363 -80Q345 -134 286 -169T151 -205Q10 -205 10 -137Q10 -111 28 -91T74 -71Q89 -71 102 -80T116 -111Q116 -121 114 -130T107 -144T99 -154T92 -162L90 -164H91Q101 -167 151 -167Q189 -167 211 -155Q234 -144 254 -122T282 -75Q288 -56 298 -13Q311 35 311 43ZM384 328L380 339Q377 350 375 354T369 368T359 382T346 393T328 402T306 405Q262 405 221 352Q191 313 171 233T151 117Q151 38 213 38Q269 38 323 108L331 118L384 328Z"}),e.jsx(s.path,{id:"MJX-1-TEX-I-1D453",d:"M118 -162Q120 -162 124 -164T135 -167T147 -168Q160 -168 171 -155T187 -126Q197 -99 221 27T267 267T289 382V385H242Q195 385 192 387Q188 390 188 397L195 425Q197 430 203 430T250 431Q298 431 298 432Q298 434 307 482T319 540Q356 705 465 705Q502 703 526 683T550 630Q550 594 529 578T487 561Q443 561 443 603Q443 622 454 636T478 657L487 662Q471 668 457 668Q445 668 434 658T419 630Q412 601 403 552T387 469T380 433Q380 431 435 431Q480 431 487 430T498 424Q499 420 496 407T491 391Q489 386 482 386T428 385H372L349 263Q301 15 282 -47Q255 -132 212 -173Q175 -205 139 -205Q107 -205 81 -186T55 -132Q55 -95 76 -78T118 -61Q162 -61 162 -103Q162 -122 151 -136T127 -157L118 -162Z"}),e.jsx(s.path,{id:"MJX-1-TEX-N-28",d:"M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"}),e.jsx(s.path,{id:"MJX-1-TEX-I-1D459",d:"M117 59Q117 26 142 26Q179 26 205 131Q211 151 215 152Q217 153 225 153H229Q238 153 241 153T246 151T248 144Q247 138 245 128T234 90T214 43T183 6T137 -11Q101 -11 70 11T38 85Q38 97 39 102L104 360Q167 615 167 623Q167 626 166 628T162 632T157 634T149 635T141 636T132 637T122 637Q112 637 109 637T101 638T95 641T94 647Q94 649 96 661Q101 680 107 682T179 688Q194 689 213 690T243 693T254 694Q266 694 266 686Q266 675 193 386T118 83Q118 81 118 75T117 65V59Z"}),e.jsx(s.path,{id:"MJX-1-TEX-N-33",d:"M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z"}),e.jsx(s.path,{id:"MJX-1-TEX-N-30",d:"M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"})]}),e.jsx(s.g,{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",transform:"scale(1,-1)",children:e.jsxs(s.g,{"data-mml-node":"math",children:[e.jsx(s.g,{"data-mml-node":"mi",children:e.jsx(s.use,{"data-c":"1D441",xlinkHref:"#MJX-1-TEX-I-1D441"})}),e.jsx(s.g,{"data-mml-node":"mi",transform:"translate(888,0)",children:e.jsx(s.use,{"data-c":"1D438",xlinkHref:"#MJX-1-TEX-I-1D438"})}),e.jsx(s.g,{"data-mml-node":"mi",transform:"translate(1652,0)",children:e.jsx(s.use,{"data-c":"1D434",xlinkHref:"#MJX-1-TEX-I-1D434"})}),e.jsx(s.g,{"data-mml-node":"mi",transform:"translate(2402,0)",children:e.jsx(s.use,{"data-c":"1D445",xlinkHref:"#MJX-1-TEX-I-1D445"})}),e.jsx(s.g,{"data-mml-node":"mi",transform:"translate(3161,0)",children:e.jsx(s.use,{"data-c":"1D461",xlinkHref:"#MJX-1-TEX-I-1D461"})}),e.jsx(s.g,{"data-mml-node":"mi",transform:"translate(3522,0)",children:e.jsx(s.use,{"data-c":"1D45C",xlinkHref:"#MJX-1-TEX-I-1D45C"})}),e.jsx(s.g,{"data-mml-node":"mi",transform:"translate(4007,0)",children:e.jsx(s.use,{"data-c":"1D450",xlinkHref:"#MJX-1-TEX-I-1D450"})}),e.jsx(s.g,{"data-mml-node":"mi",transform:"translate(4440,0)",children:e.jsx(s.use,{"data-c":"1D45C",xlinkHref:"#MJX-1-TEX-I-1D45C"})}),e.jsx(s.g,{"data-mml-node":"mi",transform:"translate(4925,0)",children:e.jsx(s.use,{"data-c":"1D463",xlinkHref:"#MJX-1-TEX-I-1D463"})}),e.jsx(s.g,{"data-mml-node":"mi",transform:"translate(5410,0)",children:e.jsx(s.use,{"data-c":"1D452",xlinkHref:"#MJX-1-TEX-I-1D452"})}),e.jsx(s.g,{"data-mml-node":"mi",transform:"translate(5876,0)",children:e.jsx(s.use,{"data-c":"1D45F",xlinkHref:"#MJX-1-TEX-I-1D45F"})}),e.jsx(s.g,{"data-mml-node":"mi",transform:"translate(6327,0)",children:e.jsx(s.use,{"data-c":"1D460",xlinkHref:"#MJX-1-TEX-I-1D460"})}),e.jsx(s.g,{"data-mml-node":"mi",transform:"translate(6796,0)",children:e.jsx(s.use,{"data-c":"1D461",xlinkHref:"#MJX-1-TEX-I-1D461"})}),e.jsx(s.g,{"data-mml-node":"mi",transform:"translate(7157,0)",children:e.jsx(s.use,{"data-c":"1D45C",xlinkHref:"#MJX-1-TEX-I-1D45C"})}),e.jsx(s.g,{"data-mml-node":"mi",transform:"translate(7642,0)",children:e.jsx(s.use,{"data-c":"1D45F",xlinkHref:"#MJX-1-TEX-I-1D45F"})}),e.jsx(s.g,{"data-mml-node":"mi",transform:"translate(8093,0)",children:e.jsx(s.use,{"data-c":"1D44E",xlinkHref:"#MJX-1-TEX-I-1D44E"})}),e.jsx(s.g,{"data-mml-node":"mi",transform:"translate(8622,0)",children:e.jsx(s.use,{"data-c":"1D454",xlinkHref:"#MJX-1-TEX-I-1D454"})}),e.jsx(s.g,{"data-mml-node":"mi",transform:"translate(9099,0)",children:e.jsx(s.use,{"data-c":"1D452",xlinkHref:"#MJX-1-TEX-I-1D452"})}),e.jsx(s.g,{"data-mml-node":"mi",transform:"translate(9565,0)",children:e.jsx(s.use,{"data-c":"1D453",xlinkHref:"#MJX-1-TEX-I-1D453"})}),e.jsx(s.g,{"data-mml-node":"mi",transform:"translate(10115,0)",children:e.jsx(s.use,{"data-c":"1D45C",xlinkHref:"#MJX-1-TEX-I-1D45C"})}),e.jsx(s.g,{"data-mml-node":"mi",transform:"translate(10600,0)",children:e.jsx(s.use,{"data-c":"1D45F",xlinkHref:"#MJX-1-TEX-I-1D45F"})}),e.jsx(s.g,{"data-mml-node":"mo",transform:"translate(11051,0)",children:e.jsx(s.use,{"data-c":"28",xlinkHref:"#MJX-1-TEX-N-28"})}),e.jsx(s.g,{"data-mml-node":"mi",transform:"translate(11440,0)",children:e.jsx(s.use,{"data-c":"1D44E",xlinkHref:"#MJX-1-TEX-I-1D44E"})}),e.jsx(s.g,{"data-mml-node":"mi",transform:"translate(11969,0)",children:e.jsx(s.use,{"data-c":"1D461",xlinkHref:"#MJX-1-TEX-I-1D461"})}),e.jsx(s.g,{"data-mml-node":"mi",transform:"translate(12330,0)",children:e.jsx(s.use,{"data-c":"1D459",xlinkHref:"#MJX-1-TEX-I-1D459"})}),e.jsx(s.g,{"data-mml-node":"mi",transform:"translate(12628,0)",children:e.jsx(s.use,{"data-c":"1D452",xlinkHref:"#MJX-1-TEX-I-1D452"})}),e.jsx(s.g,{"data-mml-node":"mi",transform:"translate(13094,0)",children:e.jsx(s.use,{"data-c":"1D44E",xlinkHref:"#MJX-1-TEX-I-1D44E"})}),e.jsx(s.g,{"data-mml-node":"mi",transform:"translate(13623,0)",children:e.jsx(s.use,{"data-c":"1D460",xlinkHref:"#MJX-1-TEX-I-1D460"})}),e.jsx(s.g,{"data-mml-node":"mi",transform:"translate(14092,0)",children:e.jsx(s.use,{"data-c":"1D461",xlinkHref:"#MJX-1-TEX-I-1D461"})}),e.jsxs(s.g,{"data-mml-node":"mn",transform:"translate(14453,0)",children:[e.jsx(s.use,{"data-c":"33",xlinkHref:"#MJX-1-TEX-N-33"}),e.jsx(s.use,{"data-c":"30",xlinkHref:"#MJX-1-TEX-N-30",transform:"translate(500,0)"})]})]})})]})}),"NEAR currently)."]}),`
`,e.jsxs(s.p,{children:["This will create ",e.jsx(s.code,{children:"<<hex(erc20)>.<bridge_token_factory>>"})," NEP141-compatible contract."]}),`
`,e.jsx(s.strong,{children:"Usage flow Ethereum -> NEAR"}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:["User sends ",e.jsx(s.code,{children:"<erc20>.approve(<erc20locker>, <amount>)"})," Ethereum transaction."]}),`
`,e.jsxs(s.li,{children:["User sends ",e.jsx(s.code,{children:"<erc20locker>.lock(<erc20>, <amount>, <destination>)"})," Ethereum transaction. This transaction will create ",e.jsx(s.code,{children:"Locked"})," event."]}),`
`,e.jsxs(s.li,{children:["Relayers will be sending Ethereum blocks to the ",e.jsx(s.code,{children:"EthClient"})," on NEAR side."]}),`
`,e.jsxs(s.li,{children:["After sufficient number of confirmations on top of the mined Ethereum block that contain the ",e.jsx(s.code,{children:"lock"})," transaction, user or relayer can call ",e.jsx(s.code,{children:"BridgeTokenFactory.deposit(proof)"}),". Proof is the extracted information from the event on Ethereum side."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"BridgeTokenFactory.deposit"})," function will call ",e.jsx(s.code,{children:"EthProver"})," and verify that proof is correct and relies on a block with sufficient number of confirmations."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"EthProver"})," will return callback to ",e.jsx(s.code,{children:"BridgeTokenFactory"})," confirming that proof is correct."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"BridgeTokenFactory"})," will call ",e.jsx(s.code,{children:"<<hex(erc20)>.<bridge_token_factory>>.mint(<near_account_id>, <amount>)"}),"."]}),`
`,e.jsxs(s.li,{children:["User can use ",e.jsx(s.code,{children:"<<hex(erc20)>.<bridge_token_factory>>"})," token in other applications now on NEAR."]}),`
`]}),`
`,e.jsx(s.strong,{children:"Usage flow NEAR -> Ethereum"}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"token-locker"})," locks NEP141 tokens on NEAR side."]}),`
`]}),`
`,e.jsxs(s.p,{children:["To deposit funds into the locker, call ",e.jsx(s.code,{children:"ft_transfer_call"})," where ",e.jsx(s.code,{children:"msg"}),` contains Ethereum address the funds should arrive to.
This will emit `,e.jsx(s.code,{children:"<token: String, amount: u128, recipient address: EthAddress>"})," (which arrives to ",e.jsx(s.code,{children:"deposit"})," on Ethereum side)."]}),`
`,e.jsxs(s.p,{children:["Accepts ",e.jsx(s.code,{children:"Unlock(token: String, sender_id: EthAddress, amount: u256, recipient: String)"}),` event from Ethereum side with a proof, verifies its correctness.
If `,e.jsx(s.code,{children:"recipient"})," contains ':' will split it into ",e.jsx(s.code,{children:"<recipient, msg>"})," and do ",e.jsx(s.code,{children:"ft_transfer_call(recipient, amount, None, msg)"}),". Otherwise will ",e.jsx(s.code,{children:"ft_transfer"})," to ",e.jsx(s.code,{children:"recipient"}),"."]}),`
`,e.jsxs(s.p,{children:["To get metadata of token to Ethereum, need to call ",e.jsx(s.code,{children:"log_metadata"}),", which will create a result ",e.jsx(s.code,{children:"<token: String, name: String, symbol: String, decimals: u8, blockHeight: u64>"}),"."]}),`
`,e.jsxs(s.ol,{start:"2",children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"erc20-bridge-token"})," - ",e.jsx(s.code,{children:"BridgeTokenFactory"})," and ",e.jsx(s.code,{children:"BridgeToken"})," Ethereum contracts."]}),`
`]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"BridgeTokenFactory"})," creates new ",e.jsx(s.code,{children:"BridgeToken"})," that correspond to specific token account id on NEAR side."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"BridgeTokenFactory"})," receives ",e.jsx(s.code,{children:"deposit"})," with proof from NEAR, verify them and mint appropriate amounts on recipient addresses."]}),`
`,e.jsxs(s.p,{children:["Calling ",e.jsx(s.code,{children:"withdraw"})," will burn tokens of this user and will generate event ",e.jsx(s.code,{children:"<token: String, sender_id: EthAddress, amount: u256, recipient: String>"})," that can be relayed to ",e.jsx(s.code,{children:"token-factory"}),"."]}),`
`,e.jsx(s.strong,{children:"Caveats"}),`
`,e.jsxs(s.p,{children:["Generally, this connector allows any account to call ",e.jsx(s.code,{children:"ft_transfer_call"}),` opening for potential malicious tokens to be bridged to Ethereum.
The expectation here is that on Ethereum side, the token lists will handle this, as it's the same attack model as malicious tokens on Uniswap and other DEXs.`]}),`
`,e.jsxs(s.p,{children:["Using Ethereum ",e.jsx(s.code,{children:"BridgeTokenFactory"})," contract can always resolve Ethereum address of a contract back to NEAR one to check that it is indeed bridging token from NEAR and is created by this factory."]}),`
`,e.jsx(s.strong,{children:"Testing"}),`
`,e.jsx(s.p,{children:"Testing Ethereum side"}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"cd erc20-connector"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"yarn"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"yarn run test"})})]})})}),`
`,e.jsx(s.p,{children:"Testing NEAR side"}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"make res/bridge_token_factory.wasm"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"cargo test --all"})})]})})}),`
`,e.jsxs(s.h2,{id:"multi-chain-support",children:["Multi-chain support",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#multi-chain-support",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h2,{id:"economics",children:["Economics",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#economics",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h2,{id:"references",children:["References",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#references",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:"Ethereum 2.0 Specifications"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://github.com/ethereum/consensus-specs/blob/master/specs/phase0/beacon-chain.mdx",children:"Beacon Chain Specification"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://notes.ethereum.org/@vbuterin/extended_light_client_protocol",children:"Extended light client protocol"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://github.com/ethereum/consensus-specs/blob/dev/specs/altair/light-client/light-client.mdx",children:"Altair Light Client -- Light Client"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://github.com/ethereum/consensus-specs/blob/dev/specs/altair/light-client/sync-protocol.mdx",children:"Altair Light Client -- Sync Protocol"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://github.com/ethereum/consensus-specs/blob/dev/specs/phase0/fork-choice.mdx",children:"Beacon Chain Fork Choice"})}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:"Proving Mechanisms"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://lighthouse-book.sigmaprime.io/",children:"Lighthouse Documentation"}),": ETH 2.0 Consensus Client Lighthouse documentation"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/sigp/lighthouse",children:"Lighthouse Github"}),": ETH 2.0 Consensus Client Lighthouse Github"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://lighthouse-blog.sigmaprime.io/",children:"Lighthouse: Blog"}),": ETH 2.0 Consensus Client Lighthouse Blog"]}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/tree/master/eth2near/eth2near-block-relay-rs",children:"eth2near-block-relay-rs"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/tree/master/contracts/eth/nearbridge",children:"nearbridge contracts"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/tree/master/contracts/eth/nearprover",children:"nearprover contracts"})}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:"Prysm Light Client Work"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://github.com/jinfwhuang/prysm/pull/5",children:"Prysm: Light-client (WORK IN PROGRESS)"})}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/jinfwhuang/prysm/tree/jin-light/cmd/light-client#light-client-client",children:"Prysm: Light-client Client WIP"}),": An independent light client client"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/prysmaticlabs/prysm/pull/10034",children:"Prysm: light-client server PR"}),": a feature PR that implements the basic production level changes to Prysm to comply as a light-client server to begin serving light client requests"]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:"Harmony Merkle Mount Range"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Harmony ",e.jsx(s.a,{href:"https://github.com/harmony-one/harmony/pull/3872",children:"MMR PR Review"})," and ",e.jsx(s.a,{href:"https://github.com/harmony-one/harmony/pull/4198/files",children:"latest PR"})," uses Merkle Mountain Ranges to facilitate light client development against Harmony's sharded Proof of Stake Chain"]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(s.h2,{id:"appendices",children:["Appendices",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#appendices",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h3,{id:"appendix-a---ethereum-to-near-block-propagation-components",children:["Appendix A - Ethereum to NEAR block propagation components",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#appendix-a---ethereum-to-near-block-propagation-components",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/eth2near/contract_wrapper/src/eth_client_contract.rs",children:"EthClientContract Wrapper"}),": supports ",e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/contracts/near/eth2-client/src/lib.rs",children:"eth2-client contract"})," functions ",e.jsx(s.code,{children:"impl EthClientContractTrait for EthClientContract"})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"fn get_last_submitted_slot(&self) -> u64"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"fn is_known_block(&self, execution_block_hash: &H256) -> Result<bool, Box<dyn Error>>"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"fn send_light_client_update(&mut self, light_client_update: LightClientUpdate,) -> Result<FinalExecutionOutcomeView, Box<dyn Error>>"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"fn get_finalized_beacon_block_hash(&self) -> Result<H256, Box<dyn Error>>"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"fn get_finalized_beacon_block_slot(&self) -> Result<u64, Box<dyn Error>>"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"fn send_headers(&mut self, headers: &[BlockHeader], end_slot: u64,) -> Result<FinalExecutionOutcomeView, Box<dyn std::error::Error>>"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"fn get_min_deposit(&self) -> Result<Balance, Box<dyn Error>>"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"fn register_submitter(&self) -> Result<FinalExecutionOutcomeView, Box<dyn Error>>"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"fn is_submitter_registered(&self,account_id: Option<AccountId>,) -> Result<bool, Box<dyn Error>>"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"fn get_light_client_state(&self) -> Result<LightClientState, Box<dyn Error>>"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"fn get_num_of_submitted_blocks_by_account(&self) -> Result<u32, Box<dyn Error>>"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"fn get_max_submitted_blocks_by_account(&self) -> Result<u32, Box<dyn Error>>"})}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/contracts/near/eth2-client/src/lib.rs",children:"eth2-client contract storage"}),":"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:"High level storage overview"}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:["provides the ",e.jsx(s.code,{children:"Eth2Client"})," public data stucture"]}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"pub struct Eth2Client {"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    /// If set, only light client updates by the trusted signer will be accepted"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    trusted_signer: Option<"}),e.jsx(s.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"AccountId"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:">,"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    /// Mask determining all paused functions"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    paused: Mask,"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    /// Whether the client validates the updates."})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    /// Should only be set to "}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"`false`"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" for debugging, testing, and diagnostic purposes"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    validate_updates: bool,"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    /// Whether the client verifies BLS signatures."})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    verify_bls_signatures: bool,"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    /// We store the hashes of the blocks for the past "}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"`hashes_gc_threshold`"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" headers."})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    /// Events that happen past this threshold cannot be verified by the client."})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    /// It is desirable that this number is larger than 7 days' worth of headers, which is roughly"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    /// 51k Ethereum blocks. So this number should be 51k in production."})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    hashes_gc_threshold: u64,"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    /// Network. e.g. mainnet, kiln"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    network: Network,"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    /// Hashes of the finalized execution blocks mapped to their numbers. Stores up to "}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"`hashes_gc_threshold`"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" entries."})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    /// Execution block number -> execution block hash"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    finalized_execution_blocks: LookupMap<"}),e.jsx(s.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"u64,"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#6CB6FF"},children:" H256"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:">,"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    /// All unfinalized execution blocks' headers hashes mapped to their "}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"`HeaderInfo`"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"."})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    /// Execution block hash -> ExecutionHeaderInfo object"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    unfinalized_headers: UnorderedMap<"}),e.jsx(s.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"H256,"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#6CB6FF"},children:" ExecutionHeaderInfo"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:">,"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    /// "}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"`AccountId`"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"s mapped to their number of submitted headers."})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    /// Submitter account -> Num of submitted headers"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    submitters: LookupMap<"}),e.jsx(s.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"AccountId,"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#6CB6FF"},children:" u32"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:">,"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    /// Max number of unfinalized blocks allowed to be stored by one submitter account"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    /// This value should be at least 32 blocks (1 epoch), but the recommended value is 1024 (32 epochs)"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    max_submitted_blocks_by_account: u32,"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    // The minimum balance that should be attached to register a new submitter account"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    min_storage_balance_for_submitter: Balance,"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    /// Light client state"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    finalized_beacon_header: ExtendedBeaconBlockHeader,"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    finalized_execution_header: LazyOption<"}),e.jsx(s.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"ExecutionHeaderInfo"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:">,"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    current_sync_committee: LazyOption<"}),e.jsx(s.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"SyncCommittee"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:">,"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    next_sync_committee: LazyOption<"}),e.jsx(s.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"SyncCommittee"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:">,"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})})}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/contracts/near/eth2-client/Cargo.toml",children:"eth2-client dependencies"})," relys heavily on the ",e.jsx(s.a,{href:"https://github.com/aurora-is-near/lighthouse",children:"lighthouse"})," codebase for it's consensus and cryptogrphic primitives. See ",e.jsx(s.a,{href:"#cryptographic-primitives",children:"Cryptographic Primitives"})," for more information."]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:'ethereum-types = "0.9.2"'})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:'eth-types =  { path = "../eth-types" }'})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:'eth2-utility =  { path = "../eth2-utility" }'})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:'tree_hash = { git = "https://github.com/aurora-is-near/lighthouse.git", rev = "b624c3f0d3c5bc9ea46faa14c9cb2d90ee1e1dec" }'})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:'merkle_proof = { git = "https://github.com/aurora-is-near/lighthouse.git", rev = "b624c3f0d3c5bc9ea46faa14c9cb2d90ee1e1dec" }'})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:'bls = { git = "https://github.com/aurora-is-near/lighthouse.git", optional = true, rev = "b624c3f0d3c5bc9ea46faa14c9cb2d90ee1e1dec", default-features = false, features = ["milagro"]}'})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:'admin-controlled =  { path = "../admin-controlled" }'})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:'near-sdk = "4.0.0"'})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:'borsh = "0.9.3"'})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:'bitvec = "1.0.0"'})}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/contracts/near/eth2-client/src/lib.rs",children:"eth2-client contract functions"}),": provides the following functions in ",e.jsx(s.code,{children:"impl Eth2Client"})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"fn validate_light_client_update(&self, update: &LightClientUpdate)"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"fn verify_finality_branch(&self, update: &LightClientUpdate, finalized_period: u64)"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"fn verify_bls_signatures(&self, update: &LightClientUpdate, sync_committee_bits: BitVec<u8>, finalized_period: u64,)"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"fn update_finalized_header(&mut self, finalized_header: ExtendedBeaconBlockHeader)"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"fn commit_light_client_update(&mut self, update: LightClientUpdate)"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"fn gc_finalized_execution_blocks(&mut self, mut header_number: u64)"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"fn update_submitter(&mut self, submitter: &AccountId, value: i64)"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"fn is_light_client_update_allowed(&self)"})}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/eth2near/eth2near-block-relay-rs/src/eth2near_relay.rs#L84",children:"Eth2NearRelay"}),": has the following public structure"]}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"pub struct Eth2NearRelay {"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    beacon_rpc_client: BeaconRPCClient,"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    eth1_rpc_client: Eth1RPCClient,"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    near_rpc_client: NearRPCClient,"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    eth_client_contract: Box<"}),e.jsx(s.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"dyn"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#6CB6FF"},children:" EthClientContractTrait"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:">,"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    headers_batch_size: u64,"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    ethereum_network: String,"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    interval_between_light_client_updates_submission_in_epochs: u64,"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    max_blocks_for_finalization: u64,"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    near_network_name: String,"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    last_slot_searcher: LastSlotSearcher,"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    terminate: bool,"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    submit_only_finalized_blocks: bool,"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    next_light_client_update: Option<"}),e.jsx(s.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"LightClientUpdate"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:">,"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    sleep_time_on_sync_secs: u64,"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    sleep_time_after_submission_secs: u64,"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    max_submitted_blocks_by_account: u32,"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})})}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/eth2near/eth2near-block-relay-rs/src/eth2near_relay.rs#L103",children:"Eth2NearRelay"}),": Implements the following functions"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"fn get_max_slot_for_submission(&self) -> Result<u64, Box<dyn Error>>"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"fn get_last_eth2_slot_on_near(&mut self, max_slot: u64) -> Result<u64, Box<dyn Error>>"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"fn get_last_finalized_slot_on_near(&self) -> Result<u64, Box<dyn Error>>"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"fn get_last_finalized_slot_on_eth(&self) -> Result<u64, Box<dyn Error>>"})}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.strong,{children:e.jsx(s.code,{children:"pub fn run(&mut self, max_iterations: Option<u64>)"})}),`
`]}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"fn wait_for_synchronization(&self) -> Result<(), Box<dyn Error>>"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"fn get_light_client_update_from_file(config: &Config, beacon_rpc_client: &BeaconRPCClient,) -> Result<Option<LightClientUpdate>, Box<dyn Error>>"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"fn set_terminate(&mut self, iter_id: u64, max_iterations: Option<u64>)"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"fn get_execution_blocks_between(&self, start_slot: u64, last_eth2_slot_on_eth_chain: u64,) -> Result<(Vec<BlockHeader>, u64), Box<dyn Error>>"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"fn submit_execution_blocks(&mut self, headers: Vec<BlockHeader>, current_slot: u64,last_eth2_slot_on_near: &mut u64,)"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"fn verify_bls_signature_for_finality_update(&mut self, light_client_update: &LightClientUpdate,) -> Result<bool, Box<dyn Error>>"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"fn get_execution_block_by_slot(&self, slot: u64) -> Result<BlockHeader, Box<dyn Error>>"})}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/eth2near/eth2near-block-relay-rs/src/eth2near_relay.rs#L461",children:"Eth2NearRelay"}),": has a second implementation of functions for submitting light client updates"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"fn is_enough_blocks_for_light_client_update(&self, last_submitted_slot: u64,last_finalized_slot_on_near: u64, last_finalized_slot_on_eth: u64,) -> bool"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"fn is_shot_run_mode(&self) -> bool"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"fn send_light_client_updates_with_checks(&mut self, last_submitted_slot: u64) -> bool"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"fn send_light_client_updates(&mut self, last_submitted_slot: u64, last_finalized_slot_on_near: u64, last_finalized_slot_on_eth: u64,)"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"fn send_light_client_update_from_file(&mut self, last_submitted_slot: u64)"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"fn send_regular_light_client_update(&mut self, last_finalized_slot_on_eth: u64,last_finalized_slot_on_near: u64,)"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"fn get_attested_slot(&mut self, last_finalized_slot_on_near: u64,) -> Result<u64, Box<dyn Error>>"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"fn send_hand_made_light_client_update(&mut self, last_finalized_slot_on_near: u64)"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"fn send_specific_light_client_update(&mut self, light_client_update: LightClientUpdate)"})}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/tree/master/eth2near/eth2-contract-init",children:"eth2-contract-init"})," includes (but not limited to) the following additional components"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/eth2near/eth2-contract-init/src/init_contract.rs",children:"init_contract.rs"}),": Verifies light client snapshot and initializes the Ethereum Light Contract on Near.",`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"pub fn verify_light_client_snapshot(block_root: String, light_client_snapshot: &LightClientSnapshotWithProof,) -> bool"}),": Verifies the light client by checking the snapshot format getting the current consensus branch and verifying it via a merkle proof."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"pub fn init_contract(config: &Config, eth_client_contract: &mut EthClientContract, mut init_block_root: String,) -> Result<(), Box<dyn std::error::Error>>"}),": Initializes the Ethereum Light Client Contract on Near."]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/tree/master/eth2near/eth_rpc_client",children:"eth_rpc_client"})," includes (but not limited to) the following additional components"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/eth2near/eth2near-block-relay-rs/src/eth1_rpc_client.rs",children:"eth1_rpc_client.rs"}),": Is used to get block headers and check sync status. It has the following functions"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"pub fn new(endpoint_url: &str) -> Self"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"pub fn get_block_header_by_number(&self, number: u64) -> Result<BlockHeader, Box<dyn Error>>"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"pub fn is_syncing(&self) -> Result<bool, Box<dyn Error>>"})}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/eth2near/eth2near-block-relay-rs/src/execution_block_proof.rs",children:"execution_block_proof.rs"}),": ",e.jsx(s.code,{children:"ExecutionBlockProof"})," contains a ",e.jsx(s.code,{children:"block_hash"})," (execution block) and a proof of its inclusion in the ",e.jsx(s.code,{children:"BeaconBlockBody"})," tree hash. The ",e.jsx(s.code,{children:"block_hash"})," is the 12th field in execution_payload, which is the 9th field in ",e.jsx(s.code,{children:"BeaconBlockBody"}),". The first 4 elements in proof correspondent to the proof of inclusion of ",e.jsx(s.code,{children:"block_hash"})," in Merkle tree built for ",e.jsx(s.code,{children:"ExecutionPayload"}),". The last 4 elements of the proof of ",e.jsx(s.code,{children:"ExecutionPayload"})," in the Merkle tree are built on high-level ",e.jsx(s.code,{children:"BeaconBlockBody"})," fields. The proof starts from the leaf. It has the following structure and functions"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"pub struct ExecutionBlockProof {block_hash: H256, proof: [H256; Self::PROOF_SIZE],}"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"pub fn construct_from_raw_data(block_hash: &H256, proof: &[H256; Self::PROOF_SIZE]) -> Self"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"pub fn construct_from_beacon_block_body(beacon_block_body: &BeaconBlockBody<MainnetEthSpec>,) -> Result<Self, Box<dyn Error>>"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"pub fn get_proof(&self) -> [H256; Self::PROOF_SIZE]"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"pub fn get_execution_block_hash(&self) -> H256"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"pub fn verify_proof_for_hash(&self, beacon_block_body_hash: &H256,) -> Result<bool, IncorrectBranchLength>"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"fn merkle_root_from_branch(leaf: H256, branch: &[H256], depth: usize, index: usize,) -> Result<H256, IncorrectBranchLength>"})}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/eth2near/eth_rpc_client/src/beacon_block_body_merkle_tree.rs",children:"beacon_block_body_merkle_tree.rs"}),": implements merkle trees for the Beacon and the ExecutionPayload"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"BeaconBlockBodyMerkleTree"})," is built on the ",e.jsx(s.code,{children:"BeaconBlockBody"})," data structure, where the leaves of the Merkle Tree are the hashes of the high-level fields of the ",e.jsx(s.code,{children:"BeaconBlockBody"}),". The hashes of each element are produced by using ",e.jsx(s.code,{children:"ssz"})," serialization."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"ExecutionPayloadMerkleTree"})," is a built on the ",e.jsx(s.code,{children:"ExecutionPayload"})," data structure, where the leaves of the Merkle Tree are the hashes of the high-level fields of the ",e.jsx(s.code,{children:"ExecutionPayload"}),". The hashes of each element are produced by using ",e.jsx(s.code,{children:"ssz"})," serialization. ",e.jsx(s.code,{children:"ExecutionPayload"})," is one of the field in BeaconBlockBody. The hash of the root of ",e.jsx(s.code,{children:"ExecutionPlayloadMerkleTree"})," is the 9th leaf in BeaconBlockBody Merkle Tree."]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/eth2near/eth_rpc_client/src/beacon_rpc_client.rs",children:"beacon_rpc_client.rs"}),": allows getting beacon block body, beacon block header and light client updates using ",e.jsx(s.a,{href:"https://ethereum.github.io/beacon-APIs/",children:"Beacon RPC API"}),". It has the following functions"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"pub fn new(endpoint_url: &str, timeout_seconds: u64, timeout_state_seconds: u64) -> Self"}),": Creates ",e.jsx(s.code,{children:"BeaconRPCClient"})," for the given BeaconAPI ",e.jsx(s.code,{children:"endpoint_url"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"pub fn get_beacon_block_body_for_block_id(&self, block_id: &str,) -> Result<BeaconBlockBody<MainnetEthSpec>, Box<dyn Error>>"}),": Returns ",e.jsx(s.code,{children:"BeaconBlockBody"})," struct for the given ",e.jsx(s.code,{children:"block_id"}),". It uses the following arguments",`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"block_id"})," - Block identifier. Can be one of: ",e.jsx(s.code,{children:`"head" (canonical head in node's view),"genesis", "finalized", <slot>, <hex encoded blockRoot with 0x prefix>`}),"(see ",e.jsx(s.a,{href:"https://ethereum.github.io/beacon-APIs/#/Beacon/getBlockV2",children:"beacon-APIs/#/Beacon/getBlockV2"}),")."]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"pub fn get_beacon_block_header_for_block_id(&self, block_id: &str,) -> Result<types::BeaconBlockHeader, Box<dyn Error>>"}),": Returns ",e.jsx(s.code,{children:"BeaconBlockHeader"})," struct for the given ",e.jsx(s.code,{children:"block_id"}),". It uses the following arguments",`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"block_id"})," - Block identifier. Can be one of: ",e.jsx(s.code,{children:`"head" (canonical head in node's view),"genesis", "finalized", <slot>, <hex encoded blockRoot with 0x prefix>`}),"(see ",e.jsx(s.a,{href:"https://ethereum.github.io/beacon-APIs/#/Beacon/getBlockV2",children:"beacon-APIs/#/Beacon/getBlockV2"}),")."]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"pub fn get_light_client_update(&self, period: u64,) -> Result<LightClientUpdate, Box<dyn Error>>"}),": Returns ",e.jsx(s.code,{children:"LightClientUpdate"})," struct for the given ",e.jsx(s.code,{children:"period"}),". It uses the following arguments",`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"period"})," - period id for which ",e.jsx(s.code,{children:"LightClientUpdate"})," is fetched. On Mainnet, one period consists of 256 epochs, and one epoch consists of 32 slots"]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"pub fn get_bootstrap(&self, block_root: String,) -> Result<LightClientSnapshotWithProof, Box<dyn Error>>"}),": Fetch a bootstrapping state with a proof to a trusted block root. The trusted block root should be fetched with similar means to a weak subjectivity checkpoint. Only block roots for checkpoints are guaranteed to be available."]}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"pub fn get_checkpoint_root(&self) -> Result<String, Box<dyn Error>>"})}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"pub fn get_last_finalized_slot_number(&self) -> Result<types::Slot, Box<dyn Error>>"}),": Return the last finalized slot in the Beacon chain"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"pub fn get_last_slot_number(&self) -> Result<types::Slot, Box<dyn Error>>"}),": Return the last slot in the Beacon chain"]}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"pub fn get_slot_by_beacon_block_root(&self, beacon_block_hash: H256,) -> Result<u64, Box<dyn Error>>"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"pub fn get_block_number_for_slot(&self, slot: types::Slot) -> Result<u64, Box<dyn Error>>"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"pub fn get_finality_light_client_update(&self) -> Result<LightClientUpdate, Box<dyn Error>>"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"pub fn get_finality_light_client_update_with_sync_commity_update(&self,) -> Result<LightClientUpdate, Box<dyn Error>>"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"pub fn get_beacon_state(&self, state_id: &str,) -> Result<BeaconState<MainnetEthSpec>, Box<dyn Error>>"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"pub fn is_syncing(&self) -> Result<bool, Box<dyn Error>>"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"fn get_json_from_client(client: &Client, url: &str) -> Result<String, Box<dyn Error>>"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"fn get_json_from_raw_request(&self, url: &str) -> Result<String, Box<dyn Error>>"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"fn get_body_json_from_rpc_result(block_json_str: &str,) -> Result<std::string::String, Box<dyn Error>>"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"fn get_header_json_from_rpc_result(json_str: &str,) -> Result<std::string::String, Box<dyn Error>>"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"fn get_attested_header_from_light_client_update_json_str(light_client_update_json_str: &str,) -> Result<BeaconBlockHeader, Box<dyn Error>>"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"fn get_sync_aggregate_from_light_client_update_json_str(light_client_update_json_str: &str,) -> Result<SyncAggregate, Box<dyn Error>>"})}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"fn get_signature_slot(&self, light_client_update_json_str: &str,) -> Result<Slot, Box<dyn Error>>"}),": ",e.jsx(s.code,{children:"signature_slot"})," is not provided in the current API. The slot is brute-forced until ",e.jsx(s.code,{children:"SyncAggregate"})," in ",e.jsx(s.code,{children:"BeconBlockBody"})," in the current slot is equal to ",e.jsx(s.code,{children:"SyncAggregate"})," in ",e.jsx(s.code,{children:"LightClientUpdate"})]}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"fn get_finality_update_from_light_client_update_json_str(&self, light_client_update_json_str: &str,) -> Result<FinalizedHeaderUpdate, Box<dyn Error>>"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"fn get_sync_committee_update_from_light_client_update_json_str(light_client_update_json_str: &str,) -> Result<SyncCommitteeUpdate, Box<dyn Error>>"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"pub fn get_period_for_slot(slot: u64) -> u64"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"pub fn get_non_empty_beacon_block_header(&self, start_slot: u64,) -> Result<types::BeaconBlockHeader, Box<dyn Error>>"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"fn check_block_found_for_slot(&self, json_str: &str) -> Result<(), Box<dyn Error>>"})}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/eth2near/eth_rpc_client/src/hand_made_finality_light_client_update.rs",children:"hand_made_finality_light_client_update.rs"}),": Has two implementations"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["The first implementation which calls functions in the second",`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"pub fn get_finality_light_client_update(beacon_rpc_client: &BeaconRPCClient, attested_slot: u64, include_next_sync_committee: bool,) -> Result<LightClientUpdate, Box<dyn Error>>"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"pub fn get_finality_light_client_update_from_file(beacon_rpc_client: &BeaconRPCClient, file_name: &str,) -> Result<LightClientUpdate, Box<dyn Error>>"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"pub fn get_light_client_update_from_file_with_next_sync_committee(beacon_rpc_client: &BeaconRPCClient, attested_state_file_name: &str, finality_state_file_name: &str,) -> Result<LightClientUpdate, Box<dyn Error>>"})}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:["The second implementation",`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"fn get_attested_slot_with_enough_sync_committee_bits_sum(beacon_rpc_client: &BeaconRPCClient,attested_slot: u64,) -> Result<(u64, u64), Box<dyn Error>>"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"fn get_state_from_file(file_name: &str) -> Result<BeaconState<MainnetEthSpec>, Box<dyn Error>>"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"fn get_finality_light_client_update_for_state(beacon_rpc_client: &BeaconRPCClient,attested_slot: u64, signature_slot: u64, beacon_state: BeaconState<MainnetEthSpec>, finality_beacon_state: Option<BeaconState<MainnetEthSpec>>,) -> Result<LightClientUpdate, Box<dyn Error>>"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"fn get_next_sync_committee(beacon_state: &BeaconState<MainnetEthSpec>,) -> Result<SyncCommitteeUpdate, Box<dyn Error>>"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"fn from_lighthouse_beacon_header(beacon_header: &BeaconBlockHeader,) -> eth_types::eth2::BeaconBlockHeader"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"fn get_sync_committee_bits(sync_committee_signature: &types::SyncAggregate<MainnetEthSpec>,) -> Result<[u8; 64], Box<dyn Error>>"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"fn get_finality_branch(beacon_state: &BeaconState<MainnetEthSpec>,) -> Result<Vec<H256>, Box<dyn Error>>"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"fn get_finality_update(finality_header: &BeaconBlockHeader, beacon_state: &BeaconState<MainnetEthSpec>, finalized_block_body: &BeaconBlockBody<MainnetEthSpec>,) -> Result<FinalizedHeaderUpdate, Box<dyn Error>>"})}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/eth2near/eth_rpc_client/src/light_client_snapshot_with_proof.rs",children:"light_client_snapshot_with_proof.rs"}),": contains the structure for ",e.jsx(s.code,{children:"LightClientSnapshotWithProof"})]}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"pub struct LightClientSnapshotWithProof {"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    pub beacon_header: BeaconBlockHeader,"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    pub current_sync_committee: SyncCommittee,"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    pub current_sync_committee_branch: Vec<"}),e.jsx(s.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"H256"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:">,"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})})}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/tree/master/eth2near/eth2near-block-relay-rs",children:"eth2near-block-relay-rs"})," includes (but not limited to) the following additional components"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/eth2near/eth2near-block-relay-rs/src/config.rs",children:"config.rs"}),":"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/eth2near/eth2near-block-relay-rs/src/last_slot_searcher.rs",children:"last_slot_searcher.rs"}),": Implementation of functions for searching last slot on NEAR contract. Supports both binary and linear searches.",`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"pub fn get_last_slot(&mut self, last_eth_slot: u64, beacon_rpc_client: &BeaconRPCClient, eth_client_contract: &Box<dyn EthClientContractTrait>,) -> Result<u64, Box<dyn Error>>"})}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"n binary_slot_search(&self, slot: u64, finalized_slot: u64, last_eth_slot: u64, beacon_rpc_client: &BeaconRPCClient, eth_client_contract: &Box<dyn EthClientContractTrait>,) -> Result<u64, Box<dyn Error>>"})," : Search for the slot before the first unknown slot on NEAR. Assumptions: (1) start_slot is known on NEAR (2) last_slot is unknown on NEAR. Return error in case of problem with network connection."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"fn binsearch_slot_forward(&self, slot: u64, max_slot: u64, beacon_rpc_client: &BeaconRPCClient,eth_client_contract: &Box<dyn EthClientContractTrait>,) -> Result<u64, Box<dyn Error>> {"}),": Search for the slot before the first unknown slot on NEAR. Assumptions: (1) start_slot is known on NEAR (2) last_slot is unknown on NEAR. Return error in case of problem with network connection."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"fn binsearch_slot_range(&self, start_slot: u64, last_slot: u64, beacon_rpc_client: &BeaconRPCClient, eth_client_contract: &Box<dyn EthClientContractTrait>,) -> Result<u64, Box<dyn Error>>"}),": Search for the slot before the first unknown slot on NEAR. Assumptions: (1) start_slot is known on NEAR (2) last_slot is unknown on NEAR. Return error in case of problem with network connection."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"fn linear_slot_search(&self, slot: u64, finalized_slot: u64, last_eth_slot: u64, beacon_rpc_client: &BeaconRPCClient, eth_client_contract: &Box<dyn EthClientContractTrait>,) -> Result<u64, Box<dyn Error>>"}),": Returns the last slot known with block known on NEAR. ",e.jsx(s.code,{children:"Slot"})," -- expected last known slot. ",e.jsx(s.code,{children:"finalized_slot"})," -- last finalized slot on NEAR, assume as known slot. ",e.jsx(s.code,{children:"last_eth_slot"})," -- head slot on Eth."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"fn linear_search_forward(&self, slot: u64, max_slot: u64, beacon_rpc_client: &BeaconRPCClient,eth_client_contract: &Box<dyn EthClientContractTrait>,) -> Result<u64, Box<dyn Error>>"}),": Returns the slot before the first unknown block on NEAR. The search range is [slot .. max_slot). If there is no unknown block in this range max_slot - 1 will be returned. Assumptions: (1) block for slot is submitted to NEAR. (2) block for max_slot is not submitted to NEAR."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"fn linear_search_backward(&self, start_slot: u64, last_slot: u64, beacon_rpc_client: &BeaconRPCClient, eth_client_contract: &Box<dyn EthClientContractTrait>,) -> Result<u64, Box<dyn Error>>"}),": Returns the slot before the first unknown block on NEAR. The search range is [last_slot .. start_slot). If no such block are found the start_slot will be returned. Assumptions: (1) block for start_slot is submitted to NEAR (2) block for last_slot + 1 is not submitted to NEAR."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"fn find_left_non_error_slot(&self, left_slot: u64, right_slot: u64, step: i8, beacon_rpc_client: &BeaconRPCClient, eth_client_contract: &Box<dyn EthClientContractTrait>,) -> (u64, bool)"}),": Find the leftmost non-empty slot. Search range: [left_slot, right_slot). Returns pair: (1) slot_id and (2) is this block already known on Eth client on NEAR. Assume that right_slot is non-empty and it's block were submitted to NEAR, so if non correspondent block is found we return (right_slot, false)."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"fn block_known_on_near( &self, slot: u64, beacon_rpc_client: &BeaconRPCClient,eth_client_contract: &Box<dyn EthClientContractTrait>,) -> Result<bool, Box<dyn Error>>"}),": Check if the block for current slot in Eth2 already were submitted to NEAR. Returns Error if slot doesn't contain any block."]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/eth2near/eth2near-block-relay-rs/src/main.rs",children:"main.rs"}),": ",e.jsx(s.a,{href:"https://docs.rs/clap/latest/clap/",children:"Command Line Argument Parser"})," used to run the Ethereum to Near Block Relay. It contains the following functions",`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"fn get_eth_contract_wrapper(config: &Config) -> Box<dyn ContractWrapper>"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"fn get_dao_contract_wrapper(config: &Config) -> Box<dyn ContractWrapper>"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"fn get_eth_client_contract(config: &Config) -> Box<dyn EthClientContractTrait>"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"fn init_log(args: &Arguments, config: &Config)"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"fn main() -> Result<(), Box<dyn std::error::Error>>"})}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/eth2near/eth2near-block-relay-rs/src/near_rpc_client.rs",children:"near_rpc_client.rs"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"pub fn new(endpoint_url: &str) -> Self"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"pub fn check_account_exists(&self, account_id: &str) -> Result<bool, Box<dyn Error>>"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"pub fn is_syncing(&self) -> Result<bool, Box<dyn Error>>"})}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(s.h3,{id:"appendix-b---ethereum-light-client-finality-update-verify-components",children:["Appendix B - Ethereum Light Client Finality Update Verify Components",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#appendix-b---ethereum-light-client-finality-update-verify-components",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/tree/master/eth2near/finality-update-verify",children:"finality-update-verify"})," is called from ",e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/eth2near/eth2near-block-relay-rs/src/eth2near_relay.rs#L422",children:"fn verify_bls_signature_for_finality_update"})," to verify signatures as part of light_client updates. It relies heavily on the ",e.jsx(s.a,{href:"https://github.com/aurora-is-near/lighthouse",children:"lighthouse"})," codebase for it's consensus and cryptogrphic primitives. See ",e.jsx(s.a,{href:"#cryptographic-primitives",children:"Cryptographic Primitives"})," for more information."]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:["Dependencies in ",e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/eth2near/finality-update-verify/Cargo.toml",children:"Cargo.toml"})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:'eth-types = { path ="../../contracts/near/eth-types/", features = ["eip1559"]}'})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:'bls = { git = "https://github.com/aurora-is-near/lighthouse.git", rev = "b624c3f0d3c5bc9ea46faa14c9cb2d90ee1e1dec" }'})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:'eth2-utility  = { path ="../../contracts/near/eth2-utility"}'})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:'tree_hash = { git = "https://github.com/aurora-is-near/lighthouse.git", rev = "b624c3f0d3c5bc9ea46faa14c9cb2d90ee1e1dec" }'})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:'types =  { git = "https://github.com/aurora-is-near/lighthouse.git", rev = "b624c3f0d3c5bc9ea46faa14c9cb2d90ee1e1dec" }'})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:'bitvec = "1.0.0"'})}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:["Functions in ",e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/eth2near/finality-update-verify/src/lib.rs",children:"lib.rs"})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"fn h256_to_hash256(hash: H256) -> Hash256"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"fn tree_hash_h256_to_eth_type_h256(hash: tree_hash::Hash256) -> eth_types::H256"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"fn to_lighthouse_beacon_block_header(bridge_beacon_block_header: &BeaconBlockHeader,) -> types::BeaconBlockHeader"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"pub fn is_correct_finality_update(ethereum_network: &str, light_client_update: &LightClientUpdate,   sync_committee: SyncCommittee,) -> Result<bool, Box<dyn Error>>"})}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(s.h3,{id:"appendix-c---cryptographic-primitives",children:["Appendix C - Cryptographic Primitives",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#appendix-c---cryptographic-primitives",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["Following are cryptographic primitives used in the ",e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/tree/master/contracts/near/eth2-client",children:"eth2-client contract"})," and ",e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/tree/master/eth2near/finality-update-verify",children:"finality-update-verify"}),". Many are from the ",e.jsx(s.a,{href:"https://github.com/aurora-is-near/lighthouse",children:"lighthouse"})," codebase. Specifically ",e.jsx(s.a,{href:"https://github.com/aurora-is-near/lighthouse/tree/stable/consensus",children:"consensus"})," and ",e.jsx(s.a,{href:"https://github.com/aurora-is-near/lighthouse/tree/stable/crypto",children:"crypto"})," functions."]}),`
`,e.jsx(s.p,{children:"Some common primitives"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://docs.rs/bitvec/1.0.1/bitvec/",children:"bitvec"}),": Addresses memory by bits, for packed collections and bitfields"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://docs.rs/eth2_serde_utils/0.1.0/eth2_serde_utils/",children:"eth2_serde_utils"}),": Serialization and deserialization utilities useful for JSON representations of Ethereum 2.0 types."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://docs.rs/eth2_hashing/0.2.0/eth2_hashing/",children:"eth2_hashing"}),": Hashing primitives used in Ethereum 2.0"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://docs.rs/blst/0.3.10/blst/",children:"blst"}),": The blst crate provides a rust interface to the blst BLS12-381 signature library."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://docs.rs/tree_hash/0.4.0/tree_hash/",children:"tree_hash"}),": Efficient Merkle-hashing as used in Ethereum 2.0"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://docs.rs/eth2_ssz_types/0.2.1/ssz_types/",children:"eth2_ssz_types"}),": Provides types with unique properties required for SSZ serialization and Merklization."]}),`
`]}),`
`,e.jsx(s.p,{children:"Some Primitives from Lighthouse"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/lighthouse/tree/stable/crypto/bls",children:"bls"}),": ",e.jsx(s.a,{href:"https://en.wikipedia.org/wiki/BLS_digital_signature",children:"Boneh–Lynn–Shacham"})," digital signature support",`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/lighthouse/tree/stable/crypto/bls/src/impls",children:"impls"}),": Implementations",`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://github.com/aurora-is-near/lighthouse/blob/stable/crypto/bls/src/impls/blst.rs",children:"blst"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://github.com/aurora-is-near/lighthouse/blob/stable/crypto/bls/src/impls/fake_crypto.rs",children:"fake_crypto"})}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/lighthouse/blob/stable/crypto/bls/src/impls/milagro.rs",children:"milagro"}),": support for ",e.jsx(s.a,{href:"https://milagro.apache.org/docs/milagro-intro/",children:"Apache Milagro"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/lighthouse/tree/stable/crypto/bls/src",children:"functionality"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://github.com/aurora-is-near/lighthouse/blob/stable/crypto/bls/src/generic_aggregate_public_key.rs",children:"generic_aggregate_public_key"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://github.com/aurora-is-near/lighthouse/blob/stable/crypto/bls/src/generic_aggregate_signature.rs",children:"generic_aggregate_signature"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://github.com/aurora-is-near/lighthouse/blob/stable/crypto/bls/src/generic_keypair.rs",children:"generic_keypair"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://github.com/aurora-is-near/lighthouse/blob/stable/crypto/bls/src/generic_public_key.rs",children:"generic_public_key"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://github.com/aurora-is-near/lighthouse/blob/stable/crypto/bls/src/generic_public_key_bytes.rs",children:"generic_public_key_bytes"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://github.com/aurora-is-near/lighthouse/blob/stable/crypto/bls/src/generic_secret_key.rs",children:"generic_secret_key"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://github.com/aurora-is-near/lighthouse/blob/stable/crypto/bls/src/generic_signature.rs",children:"generic_signature"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://github.com/aurora-is-near/lighthouse/blob/stable/crypto/bls/src/generic_signature_bytes.rs",children:"generic_signature_bytes"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://github.com/aurora-is-near/lighthouse/blob/stable/crypto/bls/src/generic_signature_set.rs",children:"generic_signature_set"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://github.com/aurora-is-near/lighthouse/blob/stable/crypto/bls/src/get_withdrawal_credentials.rs",children:"get_withdrawal_credentials"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://github.com/aurora-is-near/lighthouse/blob/stable/crypto/bls/src/zeroize_hash.rs",children:"zeroize_hash"})}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://github.com/aurora-is-near/lighthouse/tree/stable/consensus/merkle_proof",children:"merkle_proof"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://github.com/aurora-is-near/lighthouse/tree/stable/consensus/tree_hash",children:"tree_hash"})}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/lighthouse/tree/stable/consensus/types/src",children:"types"}),": Implements Ethereum 2.0 types including but not limited to",`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://github.com/aurora-is-near/lighthouse/blob/stable/consensus/types/src/attestation.rs",children:"attestation"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://github.com/aurora-is-near/lighthouse/blob/stable/consensus/types/src/beacon_block.rs",children:"beacon_block"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://github.com/aurora-is-near/lighthouse/blob/stable/consensus/types/src/beacon_committee.rs",children:"beacon_committee"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://github.com/aurora-is-near/lighthouse/blob/stable/consensus/types/src/beacon_state.rs",children:"beacon_state"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://github.com/aurora-is-near/lighthouse/blob/stable/consensus/types/src/builder_bid.rs",children:"builder_bid"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://github.com/aurora-is-near/lighthouse/blob/stable/consensus/types/src/chain_spec.rs",children:"chain_spec"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://github.com/aurora-is-near/lighthouse/blob/stable/consensus/types/src/checkpoint.rs",children:"checkpoint"})}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/lighthouse/blob/stable/consensus/types/src/contribution_and_proof.rs",children:"contribution_and_proof"}),": A Validators aggregate sync committee contribution and selection proof."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/lighthouse/blob/stable/consensus/types/src/deposit.rs",children:"deposit"}),": A deposit to potentially become a beacon chain validator."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/lighthouse/blob/stable/consensus/types/src/enr_fork_id.rs",children:"enr_fork_id"}),": Specifies a fork which allows nodes to identify each other on the network. This fork is used in a nodes local ENR."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/lighthouse/blob/stable/consensus/types/src/eth_spec.rs",children:"eth_spec"}),": Ethereum Foundation specifications."]}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://github.com/aurora-is-near/lighthouse/blob/stable/consensus/types/src/execution_block_hash.rs",children:"execution_block_hash"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://github.com/aurora-is-near/lighthouse/blob/stable/consensus/types/src/execution_payload.rs",children:"execution_payload"})}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/lighthouse/blob/stable/consensus/types/src/fork.rs",children:"fork"}),": Specifies a fork of the ",e.jsx(s.code,{children:"BeaconChain"}),", to prevent replay attacks."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/lighthouse/blob/stable/consensus/types/src/free_attestation.rs",children:"free_attestation"}),": Note: this object does not actually exist in the spec. We use it for managing attestations that have not been aggregated."]}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://github.com/aurora-is-near/lighthouse/blob/stable/consensus/types/src/payload.rs",children:"payload"})}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/lighthouse/blob/stable/consensus/types/src/signed_aggregate_and_proof.rs",children:"signed_aggregate_and_proof"}),": A Validators signed aggregate proof to publish on the ",e.jsx(s.code,{children:"beacon_aggregate_and_proof"})," gossipsub topic."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/lighthouse/blob/stable/consensus/types/src/signed_beacon_block.rs",children:"signed_beacon_block"}),": A ",e.jsx(s.code,{children:"BeaconBlock"})," and a signature from its proposer."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/lighthouse/blob/stable/consensus/types/src/slot_data.rs",children:"slot_data"}),": A trait providing a ",e.jsx(s.code,{children:"Slot"})," getter for messages that are related to a single slot. Useful in making parts of attestation and sync committee processing generic."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/lighthouse/blob/stable/consensus/types/src/slot_epoch.rs",children:"slot_epoch"}),": The ",e.jsx(s.code,{children:"Slot"})," and ",e.jsx(s.code,{children:"Epoch"})," types are defined as new types over u64 to enforce type-safety between the two types. Note: Time on Ethereum 2.0 Proof of Stake is divided into slots and epochs. One slot is 12 seconds. One epoch is 6.4 minutes, consisting of 32 slots. One block can be created for each slot."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/lighthouse/blob/stable/consensus/types/src/sync_aggregate.rs",children:"sync_aggregate"}),": Create a ",e.jsx(s.code,{children:"SyncAggregate"})," from a slice of ",e.jsx(s.code,{children:"SyncCommitteeContribution"}),"s. Equivalent to ",e.jsx(s.code,{children:"process_sync_committee_contributions"})," from the spec."]}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://github.com/aurora-is-near/lighthouse/blob/stable/consensus/types/src/sync_committee.rs",children:"sync_committee"})}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/lighthouse/blob/stable/consensus/types/src/tree_hash_impls.rs",children:"tree_hash_impls"}),": contains custom implementations of ",e.jsx(s.code,{children:"CachedTreeHash"})," for ETH2-specific types. It makes some assumptions about the layouts and update patterns of other structs in this crate, and should be updated carefully whenever those structs are changed."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/lighthouse/blob/stable/consensus/types/src/validator.rs",children:"validator"}),": Information about a ",e.jsx(s.code,{children:"BeaconChain"})," validator."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(s.p,{children:"Some Smart Contracts deployed on Ethereum"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/tree/master/contracts/eth/nearprover",children:"nearprover"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/contracts/eth/nearprover/contracts/ProofDecoder.sol",children:"ProofDecoder.sol"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/contracts/eth/nearprover/contracts/NearProver.sol",children:"NearProver.sol"})}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/tree/master/contracts/eth/nearbridge/contracts",children:"nearbridge"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/contracts/eth/nearbridge/contracts/NearDecoder.sol",children:"NearDecoder.sol"}),": handles decoing of Public Keys, Signatures, BlockProducers and LightClientBlocks using ",e.jsx(s.code,{children:"Borsh.sol"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/contracts/eth/nearbridge/contracts/Utils.sol",children:"Utils.sol"}),": handles reading and writing to memory, memoryToBytes and has functions such as ",e.jsx(s.code,{children:"keccak256Raw"})," and ",e.jsx(s.code,{children:"sha256Raw"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/contracts/eth/nearbridge/contracts/Borsh.sol",children:"Borsh.sol"}),": ",e.jsx(s.a,{href:"https://borsh.io/",children:"Borsh"}),": Binary Object Representation Serializer for Hashing. It is meant to be used in security-critical projects as it prioritizes consistency, safety, speed; and comes with a strict specification."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/contracts/eth/nearbridge/contracts/Ed25519.sol",children:"Ed25519.sol"}),": ",e.jsx(s.a,{href:"https://ed25519.cr.yp.to/",children:"Ed25519"})," high-speed high-security signatures"]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(s.p,{children:"Some Primitives from NEAR Rainbow Bridge"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/tree/master/contracts/near/eth-types",children:"eth-types"}),": utilities to serialize and encode eth2 types using ",e.jsx(s.a,{href:"https://borsh.io/",children:"borsh"})," and ",e.jsx(s.a,{href:"https://ethereum.org/en/developers/docs/data-structures-and-encoding/rlp",children:"rlp"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/tree/master/contracts/near/eth2-utility",children:"eth2-utility"}),": Utility functions used for Ethereum 2.0 Consensus. Functions include",`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"fn from_str(input: &str) -> Result<Network, Self::Err>"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"pub fn new(network: &Network) -> Self"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"pub fn compute_fork_version(&self, epoch: Epoch) -> Option<ForkVersion>"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"pub fn compute_fork_version_by_slot(&self, slot: Slot) -> Option<ForkVersion>"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"pub const fn compute_epoch_at_slot(slot: Slot) -> u64"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"pub const fn compute_sync_committee_period(slot: Slot) -> u64"})}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"pub const fn floorlog2(x: u32) -> u32"}),": Compute floor of log2 of a u32."]}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"pub const fn get_subtree_index(generalized_index: u32) -> u32"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"pub fn compute_domain(domain_constant: DomainType, fork_version: ForkVersion, genesis_validators_root: H256,) -> H256"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"pub fn compute_signing_root(object_root: H256, domain: H256) -> H256"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"pub fn get_participant_pubkeys(public_keys: &[PublicKeyBytes], sync_committee_bits: &BitVec<u8, Lsb0>,) -> Vec<PublicKeyBytes>"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"pub fn convert_branch(branch: &[H256]) -> Vec<ethereum_types::H256>"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"pub fn validate_beacon_block_header_update(header_update: &HeaderUpdate) -> bool"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"pub fn calculate_min_storage_balance_for_submitter(max_submitted_blocks_by_account: u32,) -> Balance"})}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(s.strong,{children:"Nearbridge Cryptographic Primitives"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/contracts/eth/nearbridge/contracts/Ed25519.sol",children:"Ed25519.sol"}),": Solidity implementation of the ",e.jsx(s.a,{href:"https://en.wikipedia.org/wiki/EdDSA",children:"Ed25519"})," which is the EdDSA signature scheme using SHA-512 (SHA-2) and Curve25519 (see ",e.jsx(s.a,{href:"https://nbeguier.medium.com/a-real-world-comparison-of-the-ssh-key-algorithms-b26b0b31bfd9",children:"here"}),"). It has the following functions",`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"function pow22501(uint256 v) private pure returns (uint256 p22501, uint256 p11)"})," : Computes (v^(2^250-1), v^11) mod p"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"function check(bytes32 k, bytes32 r, bytes32 s, bytes32 m1, bytes9 m2)"})," : has the following steps",`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Step 1: compute SHA-512(R, A, M)"}),`
`,e.jsx(s.li,{children:"Step 2: unpack k"}),`
`,e.jsx(s.li,{children:"Step 3: compute multiples of k"}),`
`,e.jsxs(s.li,{children:["Step 4: compute s",e.jsx(s.em,{children:"G - h"}),"A"]}),`
`,e.jsx(s.li,{children:"Step 5: compare the points"}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/contracts/eth/nearbridge/contracts/Utils.sol",children:"Utils.sol"}),": A set of utilty functions for byte manipulation, memory updates and ",e.jsx(s.a,{href:"https://keccak.team/keccak_specs_summary.html",children:"keccak"})," functions.",`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"function swapBytes2(uint16 v) internal pure returns (uint16)"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"function swapBytes4(uint32 v) internal pure returns (uint32)"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"function swapBytes8(uint64 v) internal pure returns (uint64)"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"function swapBytes16(uint128 v) internal pure returns (uint128)"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"function swapBytes32(uint256 v) internal pure returns (uint256)"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"function readMemory(uint ptr) internal pure returns (uint res)"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"function writeMemory(uint ptr, uint value) internal pure"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"function memoryToBytes(uint ptr, uint length) internal pure returns (bytes memory res)"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"function keccak256Raw(uint ptr, uint length) internal pure returns (bytes32 res)"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"function sha256Raw(uint ptr, uint length) internal view returns (bytes32 res)"})}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/contracts/eth/nearbridge/contracts/Borsh.sol",children:"Borsh.sol"})," provides Binary Object Representation Serializer for Hashing ",e.jsx(s.a,{href:"https://borsh.io/",children:"borsh"})," functionality and imports ",e.jsx(s.code,{children:"Utils.sols"}),". Structures and functions include",`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"struct Data {uint ptr; uint end;}"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"function from(bytes memory data) internal pure returns (Data memory res)"})}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"function requireSpace(Data memory data, uint length) internal pure"}),": This function assumes that length is reasonably small, so that data.ptr + length will not overflow. In the current code, length is always less than 2^32."]}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"function read(Data memory data, uint length) internal pure returns (bytes32 res)"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"function done(Data memory data) internal pure"})}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"function peekKeccak256(Data memory data, uint length) internal pure returns (bytes32)"}),": Same considerations as for requireSpace."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"function peekSha256(Data memory data, uint length) internal view returns (bytes32)"}),": Same considerations as for requireSpace."]}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"function decodeU8(Data memory data) internal pure returns (uint8)"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"function decodeU16(Data memory data) internal pure returns (uint16)"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"function decodeU32(Data memory data) internal pure returns (uint32)"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"function decodeU64(Data memory data) internal pure returns (uint64)"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"function decodeU128(Data memory data) internal pure returns (uint128)"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"function decodeU256(Data memory data) internal pure returns (uint256)"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"function decodeBytes20(Data memory data) internal pure returns (bytes20)"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"function decodeBytes32(Data memory data) internal pure returns (bytes32)"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"function decodeBool(Data memory data) internal pure returns (bool)"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"function skipBytes(Data memory data) internal pure"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"function decodeBytes(Data memory data) internal pure returns (bytes memory res)"})}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/contracts/eth/nearbridge/contracts/NearDecoder.sol",children:"NearDecoder.sol"}),": Imports ",e.jsx(s.code,{children:"Borsh.sol"})," and has utilities for decoding Public Keys, Signatures, Block Producers, Block Headers and Light Client Blocks.",`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"function decodePublicKey(Borsh.Data memory data) internal pure returns (PublicKey memory res)"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"function decodeSignature(Borsh.Data memory data) internal pure returns (Signature memory res)"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"function decodeBlockProducer(Borsh.Data memory data) internal pure returns (BlockProducer memory res)"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"function decodeBlockProducers(Borsh.Data memory data) internal pure returns (BlockProducer[] memory res)"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"function decodeOptionalBlockProducers(Borsh.Data memory data) internal view returns (OptionalBlockProducers memory res)"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"function decodeOptionalSignature(Borsh.Data memory data) internal pure returns (OptionalSignature memory res)"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"function decodeBlockHeaderInnerLite(Borsh.Data memory data) internal view returns (BlockHeaderInnerLite memory res)"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"function decodeLightClientBlock(Borsh.Data memory data) internal view returns (LightClientBlock memory res)"})}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/contracts/eth/nearprover/contracts/ProofDecoder.sol",children:"ProofDecoder.sol"}),": Imports ",e.jsx(s.code,{children:"Borsh.sol"})," and ",e.jsx(s.code,{children:"NearDecoder.sol"})," and has utilities for decoding Proofs, BlockHeader, ExecutionStatus, ExecutionOutcome and MerklePaths. Structures and functions include",`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"struct FullOutcomeProof {ExecutionOutcomeWithIdAndProof outcome_proof; MerklePath outcome_root_proof; BlockHeaderLight block_header_lite; MerklePath block_proof;}"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"function decodeFullOutcomeProof(Borsh.Data memory data) internal view returns (FullOutcomeProof memory proof)"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"struct BlockHeaderLight {bytes32 prev_block_hash; bytes32 inner_rest_hash; NearDecoder.BlockHeaderInnerLite inner_lite; bytes32 hash;}"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"function decodeBlockHeaderLight(Borsh.Data memory data) internal view returns (BlockHeaderLight memory header)"})}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"struct ExecutionStatus {uint8 enumIndex; bool unknown; bool failed; bytes successValue; bytes32 successReceiptId;}"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"successValue"})," indicates if the final action succeeded and returned some value or an empty vec."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"successReceiptId"})," is the final action of the receipt returned a promise or the signed transaction was converted to a receipt. Contains the receipt_id of the generated receipt."]}),`
`]}),`
`]}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"function decodeExecutionStatus(Borsh.Data memory data) internal pure returns (ExecutionStatus memory executionStatus)"})}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"struct ExecutionOutcome {bytes[] logs; bytes32[] receipt_ids; uint64 gas_burnt; uint128 tokens_burnt; bytes executor_id; ExecutionStatus status; bytes32[] merkelization_hashes;}"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"bytes[] logs;"}),": Logs from this transaction or receipt."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"bytes32[] receipt_ids;"}),": Receipt IDs generated by this transaction or receipt."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"uint64 gas_burnt;"}),": The amount of the gas burnt by the given transaction or receipt."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"uint128 tokens_burnt;"}),": The total number of the tokens burnt by the given transaction or receipt."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"bytes executor_id;"}),": Hash of the transaction or receipt id that produced this outcome."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"ExecutionStatus status"}),": Execution status. Contains the result in case of successful execution."]}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"bytes32[] merkelization_hashes;"})}),`
`]}),`
`]}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"function decodeExecutionOutcome(Borsh.Data memory data) internal view returns (ExecutionOutcome memory outcome)"})}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"struct ExecutionOutcomeWithId {bytes32 id; ExecutionOutcome outcome; bytes32 hash;}"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"bytes32 id"}),": is the transaction hash or the receipt ID."]}),`
`]}),`
`]}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"function decodeExecutionOutcomeWithId(Borsh.Data memory data) internal view returns (ExecutionOutcomeWithId memory outcome)"})}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"struct MerklePathItem {bytes32 hash; uint8 direction;}"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"uint8 direction"}),": where 0 = left, 1 = right"]}),`
`]}),`
`]}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"function decodeMerklePathItem(Borsh.Data memory data) internal pure returns (MerklePathItem memory item)"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"struct MerklePath {MerklePathItem[] items;}"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"function decodeMerklePath(Borsh.Data memory data) internal pure returns (MerklePath memory path)"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"struct ExecutionOutcomeWithIdAndProof {MerklePath proof; bytes32 block_hash; ExecutionOutcomeWithId outcome_with_id;}"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"function decodeExecutionOutcomeWithIdAndProof(Borsh.Data memory data)internal view returns (ExecutionOutcomeWithIdAndProof memory outcome)"})}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(s.h3,{id:"appendix-d---near-to-ethereum-block-propagation-costing",children:["Appendix D - NEAR to Ethereum block propagation costing",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#appendix-d---near-to-ethereum-block-propagation-costing",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"The following links provide the production Ethereum addresses and blockexplorer views for NearBridge.sol and the ERC20 Locker"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge-client/tree/main/packages/client#ethereum-mainnet-bridge-addresses-and-parameters",children:"Ethereum Mainnet Bridge addresses and parameters"})}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://etherscan.io/address/0x3fefc5a4b1c02f21cbc8d3613643ba0635b9a873",children:"NearBridge.sol on Ethereum Block Explorer"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsxs(s.a,{href:"https://etherscan.io/tx/0xa0fbf1405747dbc1c1bda1227e46bc7c5feac36c0eeaab051022cfdb268e60cc/advanced",children:["Sample ",e.jsx(s.code,{children:"addLightClientBlock(bytes data)"})," function call"]})}),`
`]}),`
`]}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://etherscan.io/address/0x23ddd3e3692d1861ed57ede224608875809e127f#code",children:"NEAR ERC20Locker on Ethereum Block Explorer"})}),`
`]}),`
`,e.jsx(s.p,{children:"At time of writing (Oct 26th, 2022)."}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["NEAR Light Client Blocks are propogated every ",e.jsx(s.code,{children:"4 hours"})]}),`
`,e.jsxs(s.li,{children:["Sample Transaction fee ",e.jsx(s.code,{children:"0.061600109576901025 Ether ($96.56)"})]}),`
`,e.jsxs(s.li,{children:["Daily Transaction fees cost approximately ",e.jsx(s.code,{children:"$600"})]}),`
`,e.jsx(s.li,{children:e.jsx(s.em,{children:"Note: Infrastructure costs for running relayer, watchdog, etc are not included."})}),`
`]}),`
`,e.jsxs(s.h3,{id:"appendix-f---near-to-ethereum-block-propagation-components",children:["Appendix F - NEAR to Ethereum block propagation components",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#appendix-f---near-to-ethereum-block-propagation-components",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/cli/commands/start/eth2near-relay.js",children:"eth2near-relay"}),": Command to start the NEAR to Ethereum relay. See sample invocation ",e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/docs/development.md#near2eth-relay",children:"here"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/tree/master/near2eth/near2eth-block-relay",children:"near2eth-block-relay"})," is written in javascript",`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Has ",e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/near2eth/near2eth-block-relay/package.json",children:"dependencies"})," including ",e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/tree/master/utils",children:"rainbow-bridge-utils"})," see ",e.jsx(s.a,{href:"near-rainbow-bridge-utils",children:"here"})," for more information. It's other dependencies are also included in ",e.jsx(s.code,{children:"rainbow-bridge-utils"}),".",`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://www.npmjs.com/package/ethereumjs-util",children:"ethereumjs-util"}),": A collection of utility functions for Ethereum."]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:["Has the following functions and classes",`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"class Near2EthRelay"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"async initialize ({nearNodeUrl, nearNetworkId, ethNodeUrl, ethMasterSk, ethClientArtifactPath, ethClientAddress, ethGasMultiplier, metricsPort })"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"async withdraw ({ethGasMultiplier})"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"async runInternal ({submitInvalidBlock, near2ethRelayMinDelay, near2ethRelayMaxDelay, near2ethRelayErrorDelay, near2ethRelayBlockSelectDuration, near2ethRelayNextBlockSelectDelayMs, near2ethRelayAfterSubmitDelayMs, ethGasMultiplier, ethUseEip1559, logVerbose})"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"run (options) {return this.runInternal({...options, submitInvalidBlock: false}) }"})}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/contracts/eth/nearbridge/contracts/NearBridge.sol",children:"NearBridge.sol"}),": Is the NEAR light client deployed on ethereum.",`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["It imports the following contracts (see ",e.jsx(s.a,{href:"#nearbridge-cryptographic-primitives",children:"nearbridge cryptographic primitives"}),")",`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:'import "./AdminControlled.sol";'})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:'import "./INearBridge.sol";'})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:'import "./NearDecoder.sol";'})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:'import "./Ed25519.sol";'})}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:["It provides the following structure for Bridge State. If there is currently no unconfirmed block, the last three fields are zero.",`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"uint currentHeight;"}),": Height of the current confirmed block"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"uint nextTimestamp;"}),": Timestamp of the current unconfirmed block"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"uint nextValidAt;"}),": Timestamp when the current unconfirmed block will be confirmed"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"uint numBlockProducers;"}),": Number of block producers for the current unconfirmed block"]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:["It provides the following storage",`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"uint constant MAX_BLOCK_PRODUCERS = 100;"}),": Assumed to be even and to not exceed 256."]}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"struct Epoch {bytes32 epochId; uint numBPs; bytes [MAX_BLOCK_PRODUCERS] keys; bytes32[MAX_BLOCK_PRODUCERS / 2] packedStakes; uint256 stakeThreshold;}"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"uint256 public lockEthAmount;"})}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"uint256 public lockDuration;"}),": lockDuration and replaceDuration shouldn't be extremely big, so adding them to an uint64 timestamp should not overflow uint256."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"uint256 public replaceDuration;"}),": replaceDuration is in nanoseconds, because it is a difference between NEAR timestamps."]}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"Ed25519 immutable edwards;"})}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"uint256 public lastValidAt;"}),": End of challenge period. If zero, ",e.jsx(s.em,{children:e.jsx(s.code,{children:"untrusted"})})," fields and ",e.jsx(s.code,{children:"lastSubmitter"})," are not meaningful."]}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"uint64 curHeight;"})}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"uint64 untrustedHeight;"}),": The most recently added block. May still be in its challenge period, so should not be trusted."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"address lastSubmitter;"}),": Address of the account which submitted the last block."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"bool public initialized;"}),": Whether the contract was initialized."]}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"bool untrustedNextEpoch;"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"bytes32 untrustedHash;"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"bytes32 untrustedMerkleRoot;"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"bytes32 untrustedNextHash;"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"uint256 untrustedTimestamp;"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"uint256 untrustedSignatureSet;"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"NearDecoder.Signature[MAX_BLOCK_PRODUCERS] untrustedSignatures;"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"Epoch[3] epochs;"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"uint256 curEpoch;"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"mapping(uint64 => bytes32) blockHashes_;"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"mapping(uint64 => bytes32) blockMerkleRoots_;"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"mapping(address => uint256) public override balanceOf;"})}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:["It provides the following functions",`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"constructor(Ed25519 ed, uint256 lockEthAmount_, uint256 lockDuration_, uint256 replaceDuration_, address admin_, uint256 pausedFlags_)"}),": _Note: require the ",e.jsx(s.code,{children:"lockDuration"})," (in seconds) to be at least one second less than the ",e.jsx(s.code,{children:"replaceDuration"})," (in nanoseconds) ",e.jsx(s.code,{children:"require(replaceDuration* > lockDuration* _ 1000000000);"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"ethEd25519Address"}),": The address of the ECDSA signature checker using Ed25519 curve (see ",e.jsx(s.a,{href:"https://nbeguier.medium.com/a-real-world-comparison-of-the-ssh-key-algorithms-b26b0b31bfd9",children:"here"}),")"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"lockEthAmount"}),": The amount that ",e.jsx(s.code,{children:"BLOCK_PRODUCERS"})," need to deposit (in wei)to be able to provide blocks. This amount will be slashed if the block is challenged and proven not to have a valid signature. Default value is 100000000000000000000 WEI = 100 ETH."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"lockDuration"})," : 30 seconds"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"replaceDuration"}),": 60 seconds it is passed in nanoseconds, because it is a difference between NEAR timestamps."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"ethAdminAddress"}),": Bridge Administrator Address"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"0"})," : Indicates nothing is paused ",e.jsx(s.code,{children:"UNPAUSE_ALL"})]}),`
`]}),`
`]}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"function deposit() public payable override pausable(PAUSED_DEPOSIT)"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"function withdraw() public override pausable(PAUSED_WITHDRAW)"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"function challenge(address payable receiver, uint signatureIndex) external override pausable(PAUSED_CHALLENGE"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"function checkBlockProducerSignatureInHead(uint signatureIndex) public view override returns (bool)"})}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"function initWithValidators(bytes memory data) public override onlyAdmin"}),": The first part of initialization -- setting the validators of the current epoch."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"function initWithBlock(bytes memory data) public override onlyAdmin"}),": The second part of the initialization -- setting the current head."]}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"function bridgeState() public view returns (BridgeState memory res)"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"function bridgeState() public view returns (BridgeState memory res)"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"function addLightClientBlock(bytes memory data) public override pausable(PAUSED_ADD_BLOCK)"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"function setBlockProducers(NearDecoder.BlockProducer[] memory src, Epoch storage epoch) internal"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"function blockHashes(uint64 height) public view override pausable(PAUSED_VERIFY) returns (bytes32 res)"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"function blockMerkleRoots(uint64 height) public view override pausable(PAUSED_VERIFY) returns (bytes32 res)"})}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/contracts/eth/nearprover/contracts/NearProver.sol",children:"NearProver.sol"}),": Is used to prove the validity of NEAR blocks on Ethereum.",`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["It imports the following contracts (see ",e.jsx(s.a,{href:"#nearbridge-cryptographic-primitives",children:"nearbridge cryptographic primitives"}),")",`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:'import "rainbow-bridge-sol/nearbridge/contracts/NearDecoder.sol";'})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:'import "./ProofDecoder.sol";'})}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:["It has the following functions",`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"constructor(INearBridge _bridge, address _admin, uint _pausedFlags)"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"_bridge"}),": Interface to ",e.jsx(s.code,{children:"NearBridge.sol"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"_admin"}),": Administrator address"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"_pausedFlags"}),": paused indicator defaults to ",e.jsx(s.code,{children:"UNPAUSE_ALL = 0"})]}),`
`]}),`
`]}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"function proveOutcome(bytes memory proofData, uint64 blockHeight)"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"function _computeRoot(bytes32 node, ProofDecoder.MerklePath memory proof) internal pure returns (bytes32 hash)"})}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(s.h3,{id:"appendix-g---near-rainbow-bridge-utils",children:["Appendix G - NEAR Rainbow Bridge Utils",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#appendix-g---near-rainbow-bridge-utils",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/tree/master/utils",children:"rainbow-bridge-utils"})," provides a set of utilities for the near rainbow bridge written in javascript."]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["It has the following ",e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/utils/package.json",children:"dependencies"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://www.npmjs.com/package/bn.js",children:"bn.js"}),": Big number implementation in pure javascript"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://www.npmjs.com/package/bsert",children:"bsert"}),": Minimal assert with type checking."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://www.npmjs.com/package/bs58",children:"bs58"}),": JavaScript component to compute base 58 encoding"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://www.npmjs.com/package/change-case",children:"change-case"}),": Transform a string between camelCase, PascalCase, Capital Case, snake_case, param-case, CONSTANT_CASE and others."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://www.npmjs.com/package/configstore",children:"configstore"}),": Easily load and save config without having to think about where and how"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/near/eth-object#383b6ea68c7050bea4cab6950c1d5a7fa553e72b",children:"eth-object"}),": re-usable and composable objects that you can just call Object.from to ingest new data to serialize Ethereum Trie / LevelDB data from hex, buffers and rpc into the same format."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/near/eth-util-lite",children:"eth-util-lite"}),": a low-dependency utility for Ethereum. It replaces a small subset of the ethereumjs-util and ethjs-util APIs."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://www.npmjs.com/package/lodash",children:"lodash"}),": A set of utilities for working with arrays, numbers, objects, strings, etc."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://www.npmjs.com/package/near-api-js",children:"near-api-js"}),": JavaScript library to interact with NEAR Protocol via RPC API"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://www.npmjs.com/package/web3",children:"web3"}),": Ethereum JavaScript API"]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:["It provides the following functions",`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/utils/address-watcher.js",children:"address-watcher"}),": Watches a group of near and ethereum acccounts polling NEAR and Ethereum every second and updating ",e.jsx(s.code,{children:"nearAccount.balanceGauge"}),", ",e.jsx(s.code,{children:"nearAccount.stateStorageGauge"})," and ",e.jsx(s.code,{children:"ethereumAccount.balanceGauge"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/utils/borsh.js",children:"borsh"}),": provides the following functions for Binary Object Representation Serializer for Hashing ",e.jsx(s.a,{href:"https://borsh.io/",children:"borsh"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"function serializeField (schema, value, fieldType, writer)"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"function deserializeField (schema, fieldType, reader)"})}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"function serialize (schema, fieldType, obj)"}),": Serialize given object using schema of the form: ",e.jsx(s.code,{children:"{ class_name -> [ [field_name, field_type], .. ], .. }"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"class BinaryReader"}),": Includes utilities to read numbers, strings arrays and burggers"]}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"function deserialize (schema, fieldType, buffer)"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"const signAndSendTransactionAsync = async (accessKey, account, receiverId,actions) =>"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"const txnStatus = async (account, txHash, retries = RETRY_TX_STATUS, wait = 1000) =>"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"function getBorshTransactionLastResult (txResult)"})}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"class BorshContract {"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"constructor (borshSchema, account, contractId, options)"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"async accessKeyInit ()"})}),`
`]}),`
`]}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"function borshify (block)"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"function borshifyInitialValidators (initialValidators)"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"const hexToBuffer = (hex) =>"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"const readerToHex = (len) =>"})}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/utils/borshify-proof.js",children:"borshify-proof"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"function borshifyOutcomeProof (proof)"})}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/utils/robust.js",children:"robust"}),": his module gives a few utils for robust error handling, and wrap web3 with error handling and retry"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/utils/utils.js",children:"utils"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"async function setupNear (config)"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"async function setupEth (config)"})}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"async function setupEthNear (config)"}),": Setup connection to NEAR and Ethereum from given configuration."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"function remove0x (value)"}),": Remove 0x if prepended"]}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"function normalizeHex (value)"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"async function accountExists (connection, accountId)"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"async function createLocalKeyStore (networkId, keyPath)"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"function getWeb3 (config)"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"function getEthContract (web3, path, address)"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"function addSecretKey (web3, secretKey)"})}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"async function ethCallContract (contract, methodName, args)"}),": Wrap pure calls to Web3 contract to handle errors/reverts/gas usage."]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(s.h3,{id:"appendix-h---token-transfer-components",children:["Appendix H - Token Transfer Components",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#appendix-h---token-transfer-components",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsxs(s.em,{children:["Note: This uses Ethreum ",e.jsx(s.a,{href:"https://eips.ethereum.org/EIPS/eip-20",children:"ERC20"})," and NEAR ",e.jsx(s.a,{href:"https://nomicon.io/Standards/Tokens/FungibleToken/Core",children:"NEP-141"})," initally developed for ",e.jsx(s.a,{href:"https://github.com/near/NEPs/pull/21",children:"NEP-21"})]})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-token-connector",children:"rainbow-token-connector"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["NEAR rust based contracts",`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-token-connector/tree/master/bridge-common",children:"bridge-common"}),": Common functions for NEAR, currently only ",e.jsx(s.code,{children:"pub fn parse_recipient(recipient: String) -> Recipient"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-token-connector/tree/master/bridge-token-factory",children:"bridge-token-factory"}),": Functions for managing tokens on NEAR including but not limited to ",e.jsx(s.code,{children:"update_metadata"}),", ",e.jsx(s.code,{children:"deposit"}),", ",e.jsx(s.code,{children:"get_tokens"}),", ",e.jsx(s.code,{children:"finish_updating_metadata"}),", ",e.jsx(s.code,{children:"finish_updating_metadata"}),", ",e.jsx(s.code,{children:"finish_withdraw"}),", ",e.jsx(s.code,{children:"deploy_bridge_token"}),", ",e.jsx(s.code,{children:"get_bridge_token_account_id"}),", ",e.jsx(s.code,{children:"is_used_proof"}),", ",e.jsx(s.code,{children:"record_proof"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-token-connector/tree/master/bridge-token",children:"bridge-token"}),": Token functions on NEAR including but not limited to ",e.jsx(s.code,{children:"mint"})," and ",e.jsx(s.code,{children:"withdraw"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-token-connector/tree/master/token-locker",children:"token-locker"}),": Token Locker functions on NEAR including but not limited to ",e.jsx(s.code,{children:"withdraw"}),", ",e.jsx(s.code,{children:"finish_deposit"}),", ",e.jsx(s.code,{children:"is_used_proof"})]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:["Ethereum solidity based contracts",`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-token-connector/tree/master/erc20-bridge-token",children:"erc20-bridge-token"}),": Ethereum Bridge token contracts including but not limited to",`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-token-connector/blob/master/erc20-bridge-token/contracts/BridgeToken.sol",children:"BridgeToken.sol"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-token-connector/blob/master/erc20-bridge-token/contracts/BridgeTokenFactory.sol",children:"BridgeTokenFactory.sol"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-token-connector/blob/master/erc20-bridge-token/contracts/BridgeTokenProxy.sol",children:"BridgeTokenProxy.sol"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-token-connector/blob/master/erc20-bridge-token/contracts/ProofConsumer.sol",children:"ProofConsumer.sol"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-token-connector/blob/master/erc20-bridge-token/contracts/ResultsDecoder.sol",children:"ResultsDecoder"})}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-token-connector/tree/master/erc20-connector",children:"erc20-connector"}),": has ",e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-token-connector/blob/master/erc20-connector/contracts/ERC20Locker.sol",children:"ERC20Locker.sol"})," which is used to lock and unlock tokens. It is linked to the bridge token factory on NEAR side. It also links to the prover that it uses to unlock the tokens. (see ",e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/tree/master/contracts/eth/nearbridge/contracts",children:"here"}),")"]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(s.h3,{id:"appendix-i---near-rainbow-bridge-component-overview",children:["Appendix I - NEAR Rainbow Bridge: Component Overview",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#appendix-i---near-rainbow-bridge-component-overview",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"The following smart contracts are deployed on NEAR and work in conjunction with eth2near bridging functionality to propogate blocks from Ethereum to NEAR."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"*Note"})," here we will focus on the ",e.jsx(s.code,{children:"eth2-client"})," for ETH 2.0 Proof of Stake Bridging however if interested in however there is also an ",e.jsx(s.code,{children:"eth-client"})," which was used for ETH 1.0 Proof of Work Integration using ",e.jsx(s.a,{href:"https://github.com/nearprotocol/rust-ethash",children:"rust-ethhash"}),".*"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/tree/master/contracts/near",children:"Smart Contracts Deployed on NEAR"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/tree/master/contracts/near/eth2-client",children:"eth2-client"})," implements the Ethereum Light Client on Near",`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:"it provides functions including but not limited to:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"validate the light client"}),`
`,e.jsx(s.li,{children:"verify the finality branch"}),`
`,e.jsx(s.li,{children:"verify bls signatures"}),`
`,e.jsx(s.li,{children:"update finalized headers"}),`
`,e.jsx(s.li,{children:"updates the submittes"}),`
`,e.jsx(s.li,{children:"prune finalized blocks."}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:["It interacts with the beach chain, uses ",e.jsx(s.a,{href:"https://borsh.io/",children:"Borsh"})," for serialization and ",e.jsx(s.a,{href:"https://github.com/aurora-is-near/lighthouse",children:"lighthouse"})," for Ethereum 2.0 Consensus and tree_hash functions as well as bls signatures. See ",e.jsx(s.a,{href:"https://lighthouse-book.sigmaprime.io/",children:"here"})," for more information on lighthouse. Below is a list of dependencies from ",e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/contracts/near/eth2-client/Cargo.toml",children:"eth2-client/Cargo.toml"})]}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"["}),e.jsx(s.span,{style:{color:"#032F62",textDecoration:"underline","--shiki-dark":"#96D0FF","--shiki-dark-text-decoration":"inherit"},children:"dependencies"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"]"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'ethereum-types = "0.9.2"'})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'eth-types =  { path = "../eth-types" }'})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'eth2-utility =  { path = "../eth2-utility" }'})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'tree_hash = { git = "https://github.com/aurora-is-near/lighthouse.git", rev = "b624c3f0d3c5bc9ea46faa14c9cb2d90ee1e1dec" }'})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'merkle_proof = { git = "https://github.com/aurora-is-near/lighthouse.git", rev = "b624c3f0d3c5bc9ea46faa14c9cb2d90ee1e1dec" }'})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'bls = { git = "https://github.com/aurora-is-near/lighthouse.git", optional = true, rev = "b624c3f0d3c5bc9ea46faa14c9cb2d90ee1e1dec", default-features = false, features = ['}),e.jsx(s.span,{style:{color:"#032F62",textDecoration:"underline","--shiki-dark":"#96D0FF","--shiki-dark-text-decoration":"inherit"},children:'"milagro"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"]}"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'admin-controlled =  { path = "../admin-controlled" }'})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'near-sdk = "4.0.0"'})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'borsh = "0.9.3"'})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'bitvec = "1.0.0"'})})]})})}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/tree/master/eth2near",children:"eth2near"})," supports the relaying of blocks and the verification of finality between etherum and Near. It has the following components"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/tree/master/eth2near/contract_wrapper",children:"contract_wrapper"}),": provides rust wrappers for interacting with the ",e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/tree/master/contracts/near",children:"solidity contracts on near"})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:["Contracts include (from ",e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/eth2near/contract_wrapper/src/lib.rs",children:e.jsx(s.code,{children:"lib.rs"})}),")"]}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"pub mod contract_wrapper_trait;"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"pub mod dao_contract;"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"pub mod dao_eth_client_contract;"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"pub mod dao_types;"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"pub mod errors;"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"pub mod eth_client_contract;"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"pub mod eth_client_contract_trait;"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"pub mod file_eth_client_contract;"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"pub mod near_contract_wrapper;"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"pub mod sandbox_contract_wrapper;"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"pub mod utils;"})})]})})}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:["Dependencies include (from ",e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/eth2near/contract_wrapper/Cargo.toml",children:"contract_wrapper/Cargo.toml"}),")"]}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"["}),e.jsx(s.span,{style:{color:"#032F62",textDecoration:"underline","--shiki-dark":"#96D0FF","--shiki-dark-text-decoration":"inherit"},children:"dependencies"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"]"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'borsh = "0.9.3"'})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'futures = "0.3.21"'})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'async-std = "1.12.0"'})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'near-sdk = "4.0.0"'})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'near-jsonrpc-client = "=0.4.0-beta.0"'})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'near-crypto = "0.14.0"'})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'near-primitives = "0.14.0"'})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'near-chain-configs = "0.14.0"'})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'near-jsonrpc-primitives = "0.14.0"'})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'tokio = { version = "1.1", features = ["rt", "macros"] }'})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'reqwest = { version = "0.11", features = ['}),e.jsx(s.span,{style:{color:"#032F62",textDecoration:"underline","--shiki-dark":"#96D0FF","--shiki-dark-text-decoration":"inherit"},children:'"blocking"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"] }"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'serde_json = "1.0.74"'})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'serde = { version = "1.0", features = ['}),e.jsx(s.span,{style:{color:"#032F62",textDecoration:"underline","--shiki-dark":"#96D0FF","--shiki-dark-text-decoration":"inherit"},children:'"derive"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"] }"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'eth-types = { path = "../../contracts/near/eth-types/", features = ['}),e.jsx(s.span,{style:{color:"#032F62",textDecoration:"underline","--shiki-dark":"#96D0FF","--shiki-dark-text-decoration":"inherit"},children:'"eip1559"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"]}"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'workspaces = "0.5.0"'})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'anyhow = "1.0"'})})]})})}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/tree/master/eth2near/eth2near-block-relay-rs",children:"eth2near-block-relay-rs"})," is built in rust and integrates with the Ethereum 2.0 lgihthouse consensus client to propogate blocks to near."]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:["Functionality includes (from ",e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/eth2near/eth2near-block-relay-rs/src/lib.rs",children:"lib.rs"}),")"]}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"pub mod beacon_block_body_merkle_tree;"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"pub mod beacon_rpc_client;"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"pub mod config;"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"pub mod eth1_rpc_client;"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"pub mod eth2near_relay;"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"pub mod execution_block_proof;"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"pub mod hand_made_finality_light_client_update;"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"pub mod init_contract;"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"pub mod last_slot_searcher;"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"pub mod light_client_snapshot_with_proof;"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"pub mod logger;"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"pub mod near_rpc_client;"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"pub mod prometheus_metrics;"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"pub mod relay_errors;"})})]})})}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:["Dependencies include (from ",e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/eth2near/eth2near-block-relay-rs/Cargo.toml",children:"eth2near-block-relay-rs/Cargo.toml"}),")"]}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'types =  { git = "https://github.com/aurora-is-near/lighthouse.git", rev = "b624c3f0d3c5bc9ea46faa14c9cb2d90ee1e1dec" }'})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'tree_hash = { git = "https://github.com/aurora-is-near/lighthouse.git",  rev = "b624c3f0d3c5bc9ea46faa14c9cb2d90ee1e1dec" }'})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'merkle_proof = { git = "https://github.com/aurora-is-near/lighthouse.git", rev = "b624c3f0d3c5bc9ea46faa14c9cb2d90ee1e1dec" }'})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'eth2_hashing = { git = "https://github.com/aurora-is-near/lighthouse.git", rev = "b624c3f0d3c5bc9ea46faa14c9cb2d90ee1e1dec" }'})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'eth2_ssz = { git = "https://github.com/aurora-is-near/lighthouse.git", rev = "b624c3f0d3c5bc9ea46faa14c9cb2d90ee1e1dec" }'})}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'eth-types = { path = "../../contracts/near/eth-types/", features = ['}),e.jsx(s.span,{style:{color:"#032F62",textDecoration:"underline","--shiki-dark":"#96D0FF","--shiki-dark-text-decoration":"inherit"},children:'"eip1559"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"]}"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'eth2-utility  = { path = "../../contracts/near/eth2-utility" }'})}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'contract_wrapper = { path = "../contract_wrapper" }'})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'finality-update-verify = { path = "../finality-update-verify" }'})}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'log = { version = "0.4", features = ["std", "serde"] }'})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'serde_json = "1.0.74"'})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'serde = { version = "1.0", features = ['}),e.jsx(s.span,{style:{color:"#032F62",textDecoration:"underline","--shiki-dark":"#96D0FF","--shiki-dark-text-decoration":"inherit"},children:'"derive"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"] }"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'ethereum-types = "0.9.2"'})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'reqwest = { version = "0.11", features = ['}),e.jsx(s.span,{style:{color:"#032F62",textDecoration:"underline","--shiki-dark":"#96D0FF","--shiki-dark-text-decoration":"inherit"},children:'"blocking"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"] }"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'clap = { version = "3.1.6", features = ['}),e.jsx(s.span,{style:{color:"#032F62",textDecoration:"underline","--shiki-dark":"#96D0FF","--shiki-dark-text-decoration":"inherit"},children:'"derive"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"] }"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'tokio = { version = "1.1", features = ["macros", "rt", "time"] }'})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'env_logger = "0.9.0"'})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'borsh = "0.9.3"'})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'near-sdk = "4.0.0"'})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'futures = { version = "0.3.21", default-features = false }'})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'async-std = "1.12.0"'})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'hex = "*"'})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'toml = "0.5.9"'})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'atomic_refcell = "0.1.8"'})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'bitvec = "*"'})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'primitive-types = "0.7.3"'})}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'near-jsonrpc-client = "=0.4.0-beta.0"'})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'near-crypto = "0.14.0"'})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'near-primitives = "0.14.0"'})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'near-chain-configs = "0.14.0"'})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'near-jsonrpc-primitives = "0.14.0"'})}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'prometheus = { version = "0.9", features = ['}),e.jsx(s.span,{style:{color:"#032F62",textDecoration:"underline","--shiki-dark":"#96D0FF","--shiki-dark-text-decoration":"inherit"},children:'"process"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"] }"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'lazy_static = "1.4"'})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'warp = "0.2"'})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'thread = "*"'})})]})})}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/tree/master/eth2near/eth2near-block-relay",children:"eth2near-block-relay"})," is built using javascript and supports ETH 1.0 Proof of Work (",e.jsx(s.code,{children:"ethhash"}),") using merkle patrica trees."]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:["key classes from ",e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/eth2near/eth2near-block-relay/index.js",children:"index.js"})," include"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"Ethashproof"})," : which has functions to ",e.jsx(s.code,{children:"getParseBlock"})," and ",e.jsx(s.code,{children:"calculateNextEpoch"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"Eth2NearRelay"})," : which interacts with the ",e.jsx(s.code,{children:"ethClientContract"})," and has a ",e.jsx(s.code,{children:"run()"})," function which loops through relaying blocks and includes additional functions such as ",e.jsx(s.code,{children:"getParseBlock"})," , ",e.jsx(s.code,{children:"submitBlock"})]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:["Dependencies include (from ",e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/eth2near/eth2near-block-relay/package.json",children:"package.json"}),")"]}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'"dependencies": {'})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'    "bn.js": "^5.1.3",'})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'    "eth-object": "https://github.com/near/eth-object#383b6ea68c7050bea4cab6950c1d5a7fa553e72b",'})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'    "eth-util-lite": "near/eth-util-lite#master",'})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'    "@ethereumjs/block": "^3.4.0",'})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'    "merkle-patricia-tree": "^2.1.2",'})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'    "prom-client": "^12.0.0",'})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'    "promisfy": "^1.2.0",'})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'    "rainbow-bridge-utils": "1.0.0",'})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'    "got": "^11.8.5"'})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"},"})})]})})}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/tree/master/eth2near/ethashproof",children:"ethhashproof"}),": is a commandline to calculate proof data for an ethash POW, it is used by project ",e.jsx(s.code,{children:"SmartPool"})," and a decentralizedbridge between Etherum and EOS developed by Kyber Network team. It is written in ",e.jsx(s.code,{children:"GO"}),"."]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:"Features Include 1. Calculate merkle root of the ethash dag dataset with given epoch 2. Calculate merkle proof of the pow (dataset elements and their merkle proofs) given the pow submission with given block header 3. Generate dag datase"}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:["Dependencies include (from ",e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/eth2near/ethashproof/go.mod",children:"ethahsproof/go.mod"}),")"]}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"require ("})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" github.com/deckarep/golang-set v1.7.1"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    github.com/edsrzf/mmap-go v1.0.0"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    github.com/ethereum/go-ethereum v1.10.4"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    github.com/hashicorp/golang-lru v0.5.5-0.20210104140557-80c98217689d"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    golang.org/x/crypto v0.0.0-20210322153248-0c34fe9e7dc2"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:")"})})]})})}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/tree/master/eth2near/finality-update-verify",children:"finality-update-verify"})," checks and updates finality using the lighthouse beacon blocks."]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:["Functions include (from ",e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/eth2near/finality-update-verify/src/lib.rs",children:"lib.rs"}),")"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"fn h256_to_hash256(hash: H256) -> Hash256"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"fn tree_hash_h256_to_eth_type_h256(hash: tree_hash::Hash256) -> eth_types::H256"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"fn to_lighthouse_beacon_block_header(bridge_beacon_block_header: &BeaconBlockHeader,) -> types::BeaconBlockHeader {types::BeaconBlockHeader"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"pub fn is_correct_finality_update(ethereum_network: &str, light_client_update: &LightClientUpdate, sync_committee: SyncCommittee, ) -> Result<bool, Box<dyn Error>>"})}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:["Dependencies include (from ",e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/eth2near/finality-update-verify/Cargo.toml",children:"finality-update-verify/Cargo.toml"}),")"]}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"["}),e.jsx(s.span,{style:{color:"#032F62",textDecoration:"underline","--shiki-dark":"#96D0FF","--shiki-dark-text-decoration":"inherit"},children:"dependencies"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"]"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'    eth-types = { path ="../../contracts/near/eth-types/", features = ['}),e.jsx(s.span,{style:{color:"#032F62",textDecoration:"underline","--shiki-dark":"#96D0FF","--shiki-dark-text-decoration":"inherit"},children:'"eip1559"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"]}"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'    bls = { git = "https://github.com/aurora-is-near/lighthouse.git", rev = "b624c3f0d3c5bc9ea46faa14c9cb2d90ee1e1dec" }'})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'    eth2-utility  = { path ="../../contracts/near/eth2-utility"}'})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'    tree_hash = { git = "https://github.com/aurora-is-near/lighthouse.git", rev = "b624c3f0d3c5bc9ea46faa14c9cb2d90ee1e1dec" }'})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'    types =  { git = "https://github.com/aurora-is-near/lighthouse.git", rev = "b624c3f0d3c5bc9ea46faa14c9cb2d90ee1e1dec" }'})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'    bitvec = "1.0.0"'})}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    ["}),e.jsx(s.span,{style:{color:"#032F62",textDecoration:"underline","--shiki-dark":"#96D0FF","--shiki-dark-text-decoration":"inherit"},children:"dev-dependencies"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"]"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'    eth2_to_near_relay = { path = "../eth2near-block-relay-rs"}'})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'    serde_json = "1.0.74"'})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'    serde = { version = "1.0", features = ['}),e.jsx(s.span,{style:{color:"#032F62",textDecoration:"underline","--shiki-dark":"#96D0FF","--shiki-dark-text-decoration":"inherit"},children:'"derive"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"] }"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'    toml = "0.5.9"'})})]})})}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(s.p,{children:"The following smart contracts are deployed on Ethereum and used for propogating blocks from NEAR to Ethereum."}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/tree/master/contracts/eth",children:"Smart Contracts deployed on Ethereum"})," including",`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/tree/master/contracts/eth/nearbridge/contracts",children:"Near Bridge Contracts"})," including ",e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/contracts/eth/nearbridge/contracts/NearBridge.sol",children:"NearBridge.sol"})," which the interface ",e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/contracts/eth/nearbridge/contracts/INearBridge.sol",children:"INearBridge.sol"})]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:"Interface Overview"}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"interface INearBridge {"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    event BlockHashAdded(uint64 indexed height, bytes32 blockHash);"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    event BlockHashReverted(uint64 indexed height, bytes32 blockHash);"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    function blockHashes(uint64 blockNumber) external view returns (bytes32);"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    function blockMerkleRoots(uint64 blockNumber) external view returns (bytes32);"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    function balanceOf(address wallet) external view returns (uint256);"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    function deposit() external payable;"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    function withdraw() external;"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    function initWithValidators(bytes calldata initialValidators) external;"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    function initWithBlock(bytes calldata data) external;"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    function addLightClientBlock(bytes calldata data) external;"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    function challenge(address payable receiver, uint256 signatureIndex) external;"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    function checkBlockProducerSignatureInHead(uint256 signatureIndex) external view returns (bool);"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})})}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:"Key Storage items for epoch and block information"}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    Epoch[3] epochs;"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    uint256 curEpoch;"})}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    mapping(uint64 => bytes32) blockHashes_;"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    mapping(uint64 => bytes32) blockMerkleRoots_;"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    mapping(address => uint256) public override balanceOf;"})})]})})}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:"Signing and Serializing Primitives"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/contracts/eth/nearbridge/contracts/NearDecoder.sol",children:"NearDecoder.sol"}),": handles decoing of Public Keys, Signatures, BlockProducers and LightClientBlocks using ",e.jsx(s.code,{children:"Borsh.sol"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/contracts/eth/nearbridge/contracts/Utils.sol",children:"Utils.sol"}),": handles reading and writing to memory, memoryToBytes and has functions such as ",e.jsx(s.code,{children:"keccak256Raw"})," and ",e.jsx(s.code,{children:"sha256Raw"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/contracts/eth/nearbridge/contracts/Borsh.sol",children:"Borsh.sol"}),": ",e.jsx(s.a,{href:"https://borsh.io/",children:"Borsh"}),": Binary Object Representation Serializer for Hashing. It is meant to be used in security-critical projects as it prioritizes consistency, safety, speed; and comes with a strict specification."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/contracts/eth/nearbridge/contracts/Ed25519.sol",children:"Ed25519.sol"}),": ",e.jsx(s.a,{href:"https://ed25519.cr.yp.to/",children:"Ed25519"})," high-speed high-security signatures"]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/tree/master/contracts/eth/nearprover/contracts",children:"Near Prover Contracts"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/contracts/eth/nearprover/contracts/NearProver.sol",children:"NearProver.sol"}),": Has a ",e.jsx(s.code,{children:"proveOutcome"})," which validates the outcome merkle proof and the block proof is valid using ",e.jsx(s.code,{children:"_computeRoot"})," which is passed in a ",e.jsx(s.code,{children:"bytes32 node, ProofDecoder.MerklePath memory proof"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/contracts/eth/nearprover/contracts/ProofDecoder.sol",children:"ProofDecoder.sol"}),": Uses MerklePaths to provide decoding functions such as ",e.jsx(s.code,{children:"decodeExecutionStatus"}),", ",e.jsx(s.code,{children:"decodeExecutionOutcome"}),", ",e.jsx(s.code,{children:"decodeExecutionOutcomeWithId"}),", ",e.jsx(s.code,{children:"decodeMerklePathItem"}),", ",e.jsx(s.code,{children:"decodeMerklePath"})," and ",e.jsx(s.code,{children:"decodeExecutionOutcomeWithIdAndProof"}),". It relies on the primitives ",e.jsx(s.code,{children:"Borsh.sol"})," and ",e.jsx(s.code,{children:"NearDecoder.sol"})," above."]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(s.h3,{id:"appendix-j---ethereum-to-near-walkthrough",children:["Appendix J - Ethereum to NEAR Walkthrough",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#appendix-j---ethereum-to-near-walkthrough",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"Following is a walkthough of a funds transfer from Ethereum to a target chain (In this example Near), complete with light client updates, block propogation and proofs to ensure the transaction validity."}),`
`,e.jsx(s.p,{children:e.jsx(s.img,{src:"/posts/2023-02-05-ethereum-bridging-costs/eth2NearFundsTransfer.jpg",alt:"Ethereum to Near Funds Transfer",title:"Ethereum to NEAR Funds Transfer"})}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Actors"}),`
From the diagram above you'll notice that there are many actors involved, below is an overview of the actors and the operations they perform.`]}),`
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
`,e.jsx(s.strong,{children:"Sample TransactionFlow"}),`
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
`,e.jsx(s.strong,{children:"Bridging Resources Required"}),`
`,e.jsx(s.p,{children:"Here is the storage and compuational costs per component."}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Component"}),e.jsx(s.th,{children:"Data"}),e.jsx(s.th,{children:"Storage"}),e.jsx(s.th,{children:"Notes"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/contracts/near/eth2-client/src/lib.rs#L35",children:"Ethereum 2 Client"})}),e.jsx(s.td,{children:"---"}),e.jsx(s.td,{children:"---"}),e.jsx(s.td,{children:"---"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/contracts/near/eth-prover/src/lib.rs",children:"Prover"})}),e.jsx(s.td,{children:"not applicable"}),e.jsx(s.td,{children:"0 bytes"}),e.jsx(s.td,{})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.a,{href:"https://github.com/aurora-is-near/rainbow-bridge/blob/master/eth2near/contract_wrapper/src/dao_contract.rs",children:"DAO Contract"})}),e.jsx(s.td,{}),e.jsx(s.td,{}),e.jsx(s.td,{})]})]})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"TODO"}),`
Review the following data structure and elements and move into the table above commenting on any mandatory requirements and structures that can be improved.`]}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"pub struct Eth2Client {"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    /// If set, only light client updates by the trusted signer will be accepted"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    trusted_signer: Option<"}),e.jsx(s.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"AccountId"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:">,"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    /// Mask determining all paused functions"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    paused: Mask,"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    /// Whether the client validates the updates."})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    /// Should only be set to "}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"`false`"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" for debugging, testing, and diagnostic purposes"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    validate_updates: bool,"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    /// Whether the client verifies BLS signatures."})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    verify_bls_signatures: bool,"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    /// We store the hashes of the blocks for the past "}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"`hashes_gc_threshold`"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" headers."})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    /// Events that happen past this threshold cannot be verified by the client."})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    /// It is desirable that this number is larger than 7 days' worth of headers, which is roughly"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    /// 51k Ethereum blocks. So this number should be 51k in production."})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    hashes_gc_threshold: u64,"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    /// Network. e.g. mainnet, kiln"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    network: Network,"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    /// Hashes of the finalized execution blocks mapped to their numbers. Stores up to "}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"`hashes_gc_threshold`"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" entries."})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    /// Execution block number -> execution block hash"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    finalized_execution_blocks: LookupMap<"}),e.jsx(s.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"u64,"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#6CB6FF"},children:" H256"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:">,"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    /// All unfinalized execution blocks' headers hashes mapped to their "}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"`HeaderInfo`"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"."})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    /// Execution block hash -> ExecutionHeaderInfo object"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    unfinalized_headers: UnorderedMap<"}),e.jsx(s.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"H256,"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#6CB6FF"},children:" ExecutionHeaderInfo"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:">,"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    /// "}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"`AccountId`"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"s mapped to their number of submitted headers."})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    /// Submitter account -> Num of submitted headers"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    submitters: LookupMap<"}),e.jsx(s.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"AccountId,"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#6CB6FF"},children:" u32"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:">,"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    /// Max number of unfinalized blocks allowed to be stored by one submitter account"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    /// This value should be at least 32 blocks (1 epoch), but the recommended value is 1024 (32 epochs)"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    max_submitted_blocks_by_account: u32,"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    // The minimum balance that should be attached to register a new submitter account"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    min_storage_balance_for_submitter: Balance,"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    /// Light client state"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    finalized_beacon_header: ExtendedBeaconBlockHeader,"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    finalized_execution_header: LazyOption<"}),e.jsx(s.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"ExecutionHeaderInfo"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:">,"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    current_sync_committee: LazyOption<"}),e.jsx(s.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"SyncCommittee"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:">,"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    next_sync_committee: LazyOption<"}),e.jsx(s.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"SyncCommittee"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:">,"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})})}),`
`,e.jsxs(s.h3,{id:"appendix-k---explorer-and-interactive-links",children:["Appendix K - Explorer and Interactive Links",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#appendix-k---explorer-and-interactive-links",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
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
`]}),e.jsx(s.style,{children:`
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
`})]})}function c(n={}){const{wrapper:s}={...i(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(r,{...n})}):r(n)}export{c as default,a as frontmatter};
