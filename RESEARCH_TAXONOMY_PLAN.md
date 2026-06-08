# Research Taxonomy Migration Plan

This document maps the current Jincubator research content into the proposed domain taxonomy and defines a migration plan before any files, routes, sidebar entries, or navigation items are changed.

Planning date: June 2026

## Scope and Constraints

This is a planning artifact only.

Do not perform these actions during this planning step:

- Move files
- Rename files
- Rewrite page content
- Modify `vocs.config.ts`
- Create placeholder pages
- Delete historical research

The next execution step should use this plan to make a controlled migration with redirects or compatibility links where needed.

## Target Research Taxonomy

```text
Research
|-- Trading Systems
|   |-- Solving
|   |-- Arbitrage
|   |-- Market Making
|   |-- Execution
|   `-- Market Data
|-- Financial Infrastructure
|   |-- Payments
|   |-- Settlement
|   |-- Stablecoins
|   `-- Enterprise Platforms
|-- DeFi Protocol Engineering
|   |-- Intents
|   |-- Uniswap
|   |-- 1inch
|   |-- Tycho
|   `-- Liquidity Infrastructure
|-- Distributed Systems
|   |-- Chains
|   |-- Bridges
|   |-- Zero Knowledge
|   |-- Primitives
|   `-- Data Availability
`-- AI Engineering
    |-- AI Development
    |-- Agent Systems
    |-- Research Tooling
    `-- Automation
```

## Current Research Inventory

Current research content consists of 56 `.mdx` research pages and one `.mdx.original` backup file under `docs/pages/research`.

Current groups:

- `research/architecture`: 3 pages
- `research/solving`: 6 pages
- `research/Intents`: 6 pages
- `research/chains`: 10 pages
- `research/bridge`: 8 pages
- `research/code`: 4 pages
- `research/zk`: 4 pages
- `research/primitives`: 7 pages
- `research/dataAvailabilty`: 1 page
- `research/deprecated`: 6 pages
- `research/intro`: 1 page

Known cleanup items to address during migration:

- `research/chains/NEAR` is linked in the sidebar, but the actual route is `research/chains/near`.
- `research/code/horizon` is linked in the sidebar, but the actual route is `research/code/Horizon`.
- `research/dataAvailabilty` contains a spelling error in the folder name.
- `research/solving/liqudity-management.mdx` contains a spelling error and is currently empty.
- `research/solving/reference-implementation.mdx` is currently empty.
- `research/deprecated/*` appears to duplicate the current `research/Intents/*` material.

## Part 1: Content Inventory Mapping

In the migration notes below, phrases such as "move under" should be interpreted first as navigation placement and cross-linking. Physical file moves are deferred until the new taxonomy has run long enough to prove stable.

| Current Page                                  | Current Location      | Primary Domain            | Secondary Domain                                                                          | Migration Notes                                                                                                                                                                           |
| --------------------------------------------- | --------------------- | ------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `research/intro`                              | Research intro        | Research overview         | All domains                                                                               | Keep as the research landing page. Refresh later to link to new domain intros after they exist.                                                                                           |
| `research/architecture/john`                  | Architecture          | Architecture              | Trading Systems; Financial Infrastructure; DeFi Protocol Engineering; Distributed Systems | Cross-domain architecture portfolio. Recommended to move under a future top-level Architecture section, not force into one research domain.                                               |
| `research/architecture/circle`                | Architecture          | Financial Infrastructure  | Architecture; Distributed Systems                                                         | Payment, CCTP, stablecoin, and platform architecture dossier. Candidate for both Financial Infrastructure and Architecture navigation.                                                    |
| `research/architecture/falconx`               | Architecture          | Trading Systems           | Financial Infrastructure; Architecture                                                    | Trading and institutional market infrastructure architecture dossier. Candidate for both Trading Systems and Architecture navigation.                                                     |
| `research/solving/solving`                    | Solving and Arbitrage | Trading Systems           | DeFi Protocol Engineering                                                                 | Core active research covering solving, arbitrage, route evaluation, execution, Tycho, and market-making infrastructure. Split by references, not by copying content.                      |
| `research/solving/tycho1inchNOL`              | Solving and Arbitrage | Trading Systems           | DeFi Protocol Engineering; Financial Infrastructure                                       | Cross-domain active content. Belongs under Trading Systems/Solving and DeFi/Tycho/1inch/Intents.                                                                                          |
| `research/solving/near`                       | Solving and Arbitrage | DeFi Protocol Engineering | Trading Systems                                                                           | 1inch/NEAR Fusion smart contract development. Place under DeFi Protocol Engineering/1inch with a Trading Systems cross-link.                                                              |
| `research/solving/intent-management-hook`     | Solving and Arbitrage | DeFi Protocol Engineering | Trading Systems                                                                           | Uniswap v4 intent hook work. Place under DeFi/Uniswap and cross-link from Trading Systems/Execution or Solving.                                                                           |
| `research/solving/liqudity-management`        | Solving and Arbitrage | DeFi Protocol Engineering | Financial Infrastructure; Trading Systems                                                 | Empty page with misspelled filename. Replace with new content or archive during migration; do not promote while empty.                                                                    |
| `research/solving/reference-implementation`   | Solving and Arbitrage | Trading Systems           | DeFi Protocol Engineering                                                                 | Empty page. Either populate from product/design content or archive as a placeholder.                                                                                                      |
| `research/Intents/intro`                      | Intents               | DeFi Protocol Engineering | Trading Systems                                                                           | Active intent-system overview. Move under DeFi/Intents and refresh to remove duplicate overlap with deprecated copy.                                                                      |
| `research/Intents/architecture`               | Intents               | DeFi Protocol Engineering | Trading Systems; Architecture                                                             | Intent architecture page. Move under DeFi/Intents and cross-link from Architecture if Architecture becomes top-level.                                                                     |
| `research/Intents/flow`                       | Intents               | DeFi Protocol Engineering | Trading Systems                                                                           | IntentSwap flow. Move under DeFi/Intents.                                                                                                                                                 |
| `research/Intents/hooks`                      | Intents               | DeFi Protocol Engineering | Trading Systems                                                                           | Uniswap v4 hook WIP. Move under DeFi/Uniswap or DeFi/Intents, with cross-link from the other.                                                                                             |
| `research/Intents/protocol`                   | Intents               | DeFi Protocol Engineering | Trading Systems; Financial Infrastructure                                                 | Protocol/resource-locking architecture. Move under DeFi/Intents or DeFi/Liquidity Infrastructure. Cross-link from Settlement if financial-infrastructure settlement content is developed. |
| `research/Intents/resources`                  | Intents               | DeFi Protocol Engineering | Financial Infrastructure                                                                  | Resource management and The Compact. Move under DeFi/Liquidity Infrastructure, with a secondary link from Intents.                                                                        |
| `research/chains/intro`                       | Layer 1 Platforms     | Distributed Systems       | Archive                                                                                   | Historical chain research intro. Move under Distributed Systems/Chains; mark as historical research.                                                                                      |
| `research/chains/avalanche`                   | Layer 1 Platforms     | Distributed Systems       | Archive                                                                                   | Chain research. Move under Distributed Systems/Chains.                                                                                                                                    |
| `research/chains/binance`                     | Layer 1 Platforms     | Distributed Systems       | Archive                                                                                   | Chain research. Move under Distributed Systems/Chains.                                                                                                                                    |
| `research/chains/cosmos`                      | Layer 1 Platforms     | Distributed Systems       | Archive                                                                                   | Chain research. Move under Distributed Systems/Chains.                                                                                                                                    |
| `research/chains/ethereum-1-0`                | Layer 1 Platforms     | Distributed Systems       | Archive                                                                                   | Historical Ethereum 1.0 research. Move under Distributed Systems/Chains and mark historical.                                                                                              |
| `research/chains/ethereum`                    | Layer 1 Platforms     | Distributed Systems       | Zero Knowledge; Primitives                                                                | Large Ethereum consensus/light-client research page. Move under Distributed Systems/Chains; cross-link from Bridges and Primitives.                                                       |
| `research/chains/harmony`                     | Layer 1 Platforms     | Distributed Systems       | Archive                                                                                   | Chain research with bridge/light-client relevance. Move under Distributed Systems/Chains; cross-link from Bridges if needed.                                                              |
| `research/chains/near`                        | Layer 1 Platforms     | Distributed Systems       | DeFi Protocol Engineering                                                                 | Chain research. Move under Distributed Systems/Chains; fix current sidebar case mismatch.                                                                                                 |
| `research/chains/polkadot`                    | Layer 1 Platforms     | Distributed Systems       | Archive                                                                                   | Chain research. Move under Distributed Systems/Chains.                                                                                                                                    |
| `research/chains/polygon`                     | Layer 1 Platforms     | Distributed Systems       | Archive                                                                                   | Chain research. Move under Distributed Systems/Chains.                                                                                                                                    |
| `research/bridge/intro`                       | Cross Chain Bridges   | Distributed Systems       | DeFi Protocol Engineering                                                                 | Bridge taxonomy intro. Move under Distributed Systems/Bridges; keep as historical but useful overview.                                                                                    |
| `research/bridge/cosmos-ibc`                  | Cross Chain Bridges   | Distributed Systems       | DeFi Protocol Engineering                                                                 | Bridge and IBC research. Move under Distributed Systems/Bridges.                                                                                                                          |
| `research/bridge/harmony-horizon`             | Cross Chain Bridges   | Distributed Systems       | DeFi Protocol Engineering                                                                 | Bridge research and review. Move under Distributed Systems/Bridges.                                                                                                                       |
| `research/bridge/isomorph`                    | Cross Chain Bridges   | Distributed Systems       | DeFi Protocol Engineering                                                                 | Bridge design research. Move under Distributed Systems/Bridges.                                                                                                                           |
| `research/bridge/near-rainbow`                | Cross Chain Bridges   | Distributed Systems       | DeFi Protocol Engineering                                                                 | Large Rainbow Bridge research. Move under Distributed Systems/Bridges.                                                                                                                    |
| `research/bridge/polymerlabs`                 | Cross Chain Bridges   | Distributed Systems       | DeFi Protocol Engineering                                                                 | Bridge/interoperability research. Move under Distributed Systems/Bridges.                                                                                                                 |
| `research/bridge/snowbridge`                  | Cross Chain Bridges   | Distributed Systems       | DeFi Protocol Engineering                                                                 | Bridge research. Move under Distributed Systems/Bridges.                                                                                                                                  |
| `research/bridge/succinct`                    | Cross Chain Bridges   | Distributed Systems       | Zero Knowledge                                                                            | Succinct bridge and proof/circuit content. Move under Distributed Systems/Bridges and cross-link from Zero Knowledge.                                                                     |
| `research/code/intro`                         | Code Reviews          | Distributed Systems       | Archive                                                                                   | Code review overview. Move under Distributed Systems/Archive or split links into Chains, Bridges, and Zero Knowledge.                                                                     |
| `research/code/Horizon`                       | Code Reviews          | Distributed Systems       | DeFi Protocol Engineering                                                                 | Horizon Bridge implementation notes. Move under Distributed Systems/Bridges; fix route case mismatch.                                                                                     |
| `research/code/ethereum-near`                 | Code Reviews          | Distributed Systems       | DeFi Protocol Engineering                                                                 | Ethereum/NEAR bridge review. Move under Distributed Systems/Bridges.                                                                                                                      |
| `research/code/ethereum`                      | Code Reviews          | Distributed Systems       | Zero Knowledge; Primitives                                                                | Ethereum trustless bridge and light-client code research. Move under Distributed Systems/Chains or Bridges; cross-link from Primitives.                                                   |
| `research/zk/intro`                           | Zero Knowledge        | Distributed Systems       | Zero Knowledge                                                                            | Move under Distributed Systems/Zero Knowledge.                                                                                                                                            |
| `research/zk/axiom`                           | Zero Knowledge        | Distributed Systems       | Zero Knowledge                                                                            | Move under Distributed Systems/Zero Knowledge.                                                                                                                                            |
| `research/zk/zkpos`                           | Zero Knowledge        | Distributed Systems       | Zero Knowledge; Chains                                                                    | Move under Distributed Systems/Zero Knowledge; cross-link from Chains.                                                                                                                    |
| `research/zk/zksnarks`                        | Zero Knowledge        | Distributed Systems       | Zero Knowledge; Primitives                                                                | Move under Distributed Systems/Zero Knowledge; cross-link from Primitives.                                                                                                                |
| `research/primitives/intro`                   | Primitives            | Distributed Systems       | Primitives                                                                                | Move under Distributed Systems/Primitives.                                                                                                                                                |
| `research/primitives/fast-fourier-transforms` | Primitives            | Distributed Systems       | Zero Knowledge; Primitives                                                                | Move under Distributed Systems/Primitives; cross-link from Zero Knowledge.                                                                                                                |
| `research/primitives/fraud-proofs`            | Primitives            | Distributed Systems       | Zero Knowledge                                                                            | Move under Distributed Systems/Primitives or Zero Knowledge.                                                                                                                              |
| `research/primitives/light-clients`           | Primitives            | Distributed Systems       | Bridges; Chains                                                                           | Move under Distributed Systems/Primitives; cross-link from Bridges and Chains.                                                                                                            |
| `research/primitives/primitives`              | Primitives            | Distributed Systems       | Zero Knowledge                                                                            | Move under Distributed Systems/Primitives.                                                                                                                                                |
| `research/primitives/signatures`              | Primitives            | Distributed Systems       | Chains; Zero Knowledge                                                                    | Move under Distributed Systems/Primitives; cross-link from Chains and Zero Knowledge.                                                                                                     |
| `research/primitives/weak-subjectivity`       | Primitives            | Distributed Systems       | Chains                                                                                    | Move under Distributed Systems/Primitives; cross-link from Chains.                                                                                                                        |
| `research/dataAvailabilty/celestia`           | Data Availability     | Distributed Systems       | Data Availability                                                                         | Move under Distributed Systems/Data Availability; fix folder spelling during migration.                                                                                                   |
| `research/deprecated/intro`                   | Deprecated            | DeFi Protocol Engineering | Trading Systems                                                                           | Archive duplicate of intent research. Keep accessible but remove from primary navigation.                                                                                                 |
| `research/deprecated/architecture`            | Deprecated            | DeFi Protocol Engineering | Trading Systems; Architecture                                                             | Archive duplicate of `research/Intents/architecture`. Use redirect or archive note later.                                                                                                 |
| `research/deprecated/flow`                    | Deprecated            | DeFi Protocol Engineering | Trading Systems                                                                           | Archive duplicate of `research/Intents/flow`.                                                                                                                                             |
| `research/deprecated/hooks`                   | Deprecated            | DeFi Protocol Engineering | Trading Systems                                                                           | Archive duplicate of `research/Intents/hooks`.                                                                                                                                            |
| `research/deprecated/protocol`                | Deprecated            | DeFi Protocol Engineering | Trading Systems                                                                           | Archive duplicate of `research/Intents/protocol`.                                                                                                                                         |
| `research/deprecated/resources`               | Deprecated            | DeFi Protocol Engineering | Financial Infrastructure                                                                  | Archive duplicate of `research/Intents/resources`.                                                                                                                                        |

The `.mdx.original` file at `research/bridge/intro.mdx.original` should not become part of public navigation. Treat it as a local backup artifact unless there is a repo policy for removing backup files.

## Part 2: Navigation Design

### Future Top Navigation

Current top navigation:

```text
Research
Proposals
Product
Partnerships
```

Recommended future top navigation:

```text
Home
Research
Architecture
Product
Proposals
Partnerships
```

Recommendation: Architecture should become a top-level navigation item.

Rationale:

- Architecture is a first-class output of Jincubator, not only a research topic.
- Existing architecture content is one of the strongest current assets.
- Architecture cuts across Trading Systems, Financial Infrastructure, DeFi Protocol Engineering, and Distributed Systems.
- Keeping Architecture only under Research makes the future Research taxonomy less clean.
- The homepage already directs users to Architecture as one of the three primary entry points.

Implementation note: make Architecture a top-level section in the next implementation phase. Initially, the Architecture section can point to the existing `/research/architecture/*` routes to avoid breaking links or creating a large file migration.

### Future Architecture Sidebar

Research and Architecture solve different navigation problems:

- Research answers what Jincubator has learned, is evaluating, and is researching.
- Architecture answers what systems Jincubator has designed, analyzed, or can use as reference architectures.

Research should be organized by technical domain. Architecture should be organized by solution and architecture portfolio.

Proposed future Architecture sidebar:

```text
Architecture
|-- Overview [new]
|-- Trading Systems
|   |-- Trading Systems Architecture Intro [new]
|   |-- FalconX [existing: research/architecture/falconx]
|   |-- Solver [existing: research/architecture/john section]
|   `-- Salus [existing: research/architecture/john section]
|-- Financial Infrastructure
|   |-- Financial Infrastructure Architecture Intro [new]
|   `-- Circle [existing: research/architecture/circle]
|-- DeFi Systems
|   |-- DeFi Systems Architecture Intro [new]
|   |-- Intent Architecture [existing: research/Intents/architecture]
|   `-- Protocol Architecture [existing: research/Intents/protocol]
|-- Distributed Systems
|   |-- Distributed Systems Architecture Intro [new]
|   `-- Bridge and Chain Architecture Links [existing research pages]
|-- Enterprise Architecture
|   |-- Enterprise Architecture Intro [new]
|   `-- John Whitton Portfolio [existing: research/architecture/john]
`-- AI Systems
    `-- AI Systems Intro [placeholder only]
```

Initial implementation should use cross-links to existing routes. Physical relocation of architecture pages can happen later only if the new section proves stable.

The Architecture Overview should become the anchor for the whole Architecture section. It should explicitly answer:

- What is Architecture?
- Why does it exist separately from Research?
- How should visitors use it?

Use this distinction throughout the first implementation:

- Research: what Jincubator has learned.
- Architecture: how systems are designed.
- Product: what Jincubator is building.

### Future Research Sidebar

Proposed future Research sidebar:

```text
Research
|-- Overview
|
|-- Trading Systems
|   |-- Trading Systems Intro [new]
|   |-- Solving
|   |   |-- Solving Intro [new or generated]
|   |   |-- High Performance Route Evaluation [existing: research/solving/solving]
|   |   `-- No Liquidity Solving [existing: research/solving/tycho1inchNOL]
|   |-- Arbitrage
|   |   |-- Arbitrage Intro [generated from existing research]
|   |   `-- Cyclical Arbitrage [existing section in research/solving/solving]
|   |-- Market Making
|   |   `-- Market Making Intro [placeholder]
|   |-- Execution
|   |   |-- Execution Intro [generated from existing research]
|   |   |-- Solver Execution [existing: research/solving/solving]
|   |   `-- Tycho/1inch Execution [existing: research/solving/tycho1inchNOL]
|   `-- Market Data
|       |-- Market Data Intro [placeholder or generated from Tycho content]
|       `-- Tycho Streaming [existing references in solving pages]
|
|-- Financial Infrastructure
|   |-- Financial Infrastructure Intro [new]
|   |-- Payments
|   |   |-- Payments Intro [generated from Circle dossier]
|   |   `-- Circle Architecture [existing: research/architecture/circle, or Architecture cross-link]
|   |-- Settlement
|   |   |-- Settlement Intro [generated from Circle, Eco, intents, resource-locking, and cross-chain settlement material]
|   |   `-- Intent Settlement [existing: research/Intents/protocol]
|   |-- Stablecoins
|   |   |-- Stablecoins Intro [generated from Circle dossier]
|   |   `-- Circle Stablecoin Notes [existing: research/architecture/circle]
|   `-- Enterprise Platforms
|       |-- Enterprise Platforms Intro [needs curation]
|       `-- Circle Platform Architecture [existing: research/architecture/circle]
|
|-- DeFi Protocol Engineering
|   |-- DeFi Protocol Engineering Intro [new]
|   |-- Intents
|   |   |-- Intents Intro [existing: research/Intents/intro]
|   |   |-- Intent Architecture [existing: research/Intents/architecture]
|   |   |-- Intent Flow [existing: research/Intents/flow]
|   |   |-- Protocol [existing: research/Intents/protocol]
|   |   `-- Resource Management [existing: research/Intents/resources]
|   |-- Uniswap
|   |   |-- Uniswap Intro [new]
|   |   |-- Uniswap V4 Hook Development [existing: research/Intents/hooks]
|   |   `-- Uniswap V4 Intent Hook [existing: research/solving/intent-management-hook]
|   |-- 1inch
|   |   |-- 1inch Intro [new]
|   |   |-- No Liquidity Solving [existing: research/solving/tycho1inchNOL]
|   |   `-- NEAR Fusion+ Contract Development [existing: research/solving/near]
|   |-- Tycho
|   |   |-- Tycho Intro [generated from existing research]
|   |   |-- High Performance Route Evaluation [existing: research/solving/solving]
|   |   `-- Tycho/1inch No Liquidity Solving [existing: research/solving/tycho1inchNOL]
|   `-- Liquidity Infrastructure
|       |-- Liquidity Infrastructure Intro [generated from existing research]
|       |-- Resource Management [existing: research/Intents/resources]
|       |-- Protocol Resource Locks [existing: research/Intents/protocol]
|       `-- Liquidity Management [existing empty page needs content or archive]
|
|-- Distributed Systems
|   |-- Distributed Systems Intro [new]
|   |-- Chains
|   |   |-- Chains Intro [existing: research/chains/intro]
|   |   |-- Avalanche
|   |   |-- Binance Smart Chain
|   |   |-- Cosmos
|   |   |-- Ethereum 1.0
|   |   |-- Ethereum
|   |   |-- Harmony
|   |   |-- NEAR
|   |   |-- Polkadot
|   |   `-- Polygon
|   |-- Bridges
|   |   |-- Bridges Intro [existing: research/bridge/intro]
|   |   |-- Cosmos IBC
|   |   |-- Harmony Horizon
|   |   |-- Isomorph
|   |   |-- Near Rainbow Bridge
|   |   |-- Polymer Labs
|   |   |-- Snowbridge
|   |   |-- Succinct Labs
|   |   |-- Horizon Bridge Code Review [existing: research/code/Horizon]
|   |   `-- Ethereum/NEAR Bridge Code Review [existing: research/code/ethereum-near]
|   |-- Zero Knowledge
|   |   |-- Zero Knowledge Intro [existing: research/zk/intro]
|   |   |-- Axiom
|   |   |-- ZK Proof of Stake
|   |   `-- zk-SNARKs
|   |-- Primitives
|   |   |-- Primitives Intro [existing: research/primitives/intro]
|   |   |-- Fast Fourier Transforms
|   |   |-- Fraud Proofs
|   |   |-- Light Clients
|   |   |-- Cryptographic Primitives
|   |   |-- Signature Schemes
|   |   `-- Weak Subjectivity
|   `-- Data Availability
|       |-- Data Availability Intro [new]
|       `-- Celestia [existing: research/dataAvailabilty/celestia]
|
|-- AI Engineering
|   `-- AI Engineering Intro [placeholder only]
|
`-- Archive
    |-- Historical Research Archive [new]
    |-- Deprecated Intent Research [existing: research/deprecated/*]
    `-- Backup Artifacts [not public navigation]
```

Trading Systems should absorb the historical Solver framing. Solver remains important, but the durable domain is Trading Systems, with solving, arbitrage, execution, market data, and market making as subtopics.

Financial Infrastructure should not be exposed as a thin or empty-looking domain. Before changing navigation, create at least:

- Financial Infrastructure Intro
- Payments Intro
- Settlement Intro
- Stablecoins Intro

AI Engineering should exist as a visible strategic domain, but the public navigation should expose only a lightweight AI Engineering intro until real content exists. Do not expose empty AI Development, Agent Systems, Research Tooling, or Automation pages yet.

Do not create deep second-level taxonomy intro pages in Phase 1 beyond the initial Financial Infrastructure support pages. Specifically, defer Uniswap, 1inch, Tycho, Market Data, Execution, Arbitrage, and similar subtopic intros until after the skeleton has been reviewed.

## Source Material Outside Current Site Pages

The new intro pages should not be generated only from existing website pages. The migration should also draw from adjacent source material:

- `/Users/johnwhitton/dev/johnwhitton/prep/architecture`
- `/Users/johnwhitton/dev/johnwhitton/prep/pitch/v4`
- `portfolio.johnwhitton.com`
- Architecture decks and presentation material

Recommended source inputs:

- Trading Systems Intro: use solving research, FalconX architecture, Solver architecture, Salus architecture, portfolio/deck material, and relevant trading infrastructure notes.
- Financial Infrastructure Intro: use Circle research, EFI history, Eco history, stablecoin infrastructure, settlement architectures, and portfolio/deck material.
- Payments Intro: use Circle, CCTP, payments architecture, and enterprise platform notes.
- Stablecoins Intro: use Circle stablecoin material, settlement content, and financial-platform notes.
- Settlement Intro: use Circle, CCTP, Eco, resource locking, intents, cross-chain settlement, and stablecoin infrastructure.
- Architecture Overview: use architecture pages, prep architecture material, portfolio examples, and decks.

## Part 3: Migration Plan

### Keep As-Is

These pages can keep their core content with light intro/context edits only:

- `research/intro`
- `research/solving/solving`
- `research/solving/tycho1inchNOL`
- `research/solving/near`
- `research/solving/intent-management-hook`
- `research/Intents/intro`
- `research/Intents/architecture`
- `research/Intents/flow`
- `research/Intents/hooks`
- `research/Intents/protocol`
- `research/Intents/resources`
- `research/architecture/circle`
- `research/architecture/falconx`
- `research/architecture/john`

### Potential Physical Moves

These are potential future moves, not the next implementation step. The safer migration approach is to present the new taxonomy through intro pages, sidebar grouping, and cross-links while keeping existing URLs stable.

Only move files after the new taxonomy has run for several weeks and the route/link impact is clear.

Potential future moves:

- `research/chains/*` -> `research/distributed-systems/chains/*`
- `research/bridge/*` -> `research/distributed-systems/bridges/*`
- `research/code/Horizon` -> `research/distributed-systems/bridges/horizon-code-review`
- `research/code/ethereum-near` -> `research/distributed-systems/bridges/ethereum-near-code-review`
- `research/code/ethereum` -> `research/distributed-systems/chains/ethereum-code-review` or `research/distributed-systems/bridges/ethereum-trustless-bridge`
- `research/zk/*` -> `research/distributed-systems/zero-knowledge/*`
- `research/primitives/*` -> `research/distributed-systems/primitives/*`
- `research/dataAvailabilty/celestia` -> `research/distributed-systems/data-availability/celestia`
- `research/Intents/*` -> `research/defi-protocol-engineering/intents/*`
- `research/solving/intent-management-hook` -> `research/defi-protocol-engineering/uniswap/intent-management-hook`
- `research/solving/near` -> `research/defi-protocol-engineering/1inch/near-fusion-contracts`

If Architecture becomes top-level and the new section proves stable:

- `research/architecture/john` -> `architecture/system-design-portfolio`
- `research/architecture/circle` -> `architecture/financial-infrastructure/circle`
- `research/architecture/falconx` -> `architecture/trading-systems/falconx`

### Split or Cross-Link

These pages should be referenced from multiple domains rather than physically duplicated:

- `research/solving/solving`: Trading Systems primary; DeFi/Tycho secondary.
- `research/solving/tycho1inchNOL`: Trading Systems primary; DeFi/Tycho/1inch/Intents secondary.
- `research/Intents/protocol`: DeFi primary; Financial Infrastructure/Settlement secondary.
- `research/Intents/resources`: DeFi/Liquidity Infrastructure primary; Financial Infrastructure/Settlement secondary.
- `research/architecture/circle`: Financial Infrastructure primary; Architecture top-level secondary.
- `research/architecture/falconx`: Trading Systems primary; Architecture top-level secondary.
- `research/architecture/john`: Architecture primary; multiple research domain cross-links.
- `research/bridge/succinct`: Distributed Systems/Bridges primary; Zero Knowledge secondary.
- `research/code/ethereum`: Distributed Systems/Chains or Bridges primary; Primitives and Zero Knowledge secondary.
- `research/primitives/light-clients`: Primitives primary; Chains and Bridges secondary.
- `research/primitives/signatures`: Primitives primary; Chains and Zero Knowledge secondary.

### Archive

Archive content should remain accessible but should not dominate primary navigation:

- `research/deprecated/*`
- `research/bridge/intro.mdx.original`
- Historical chain platform pages from 2022/2023 after they move into Distributed Systems/Chains.
- Historical bridge/code review pages from 2022/2023 after they move into Distributed Systems/Bridges.
- Empty placeholders:
  - `research/solving/liqudity-management`
  - `research/solving/reference-implementation`

Empty pages should either receive real content before promotion or be moved into an archive/placeholder section with a clear status.

### Exact Migration Sequence

Phase 1: Create anchor pages.

1. Create Architecture as a top-level section with an Architecture Overview page.
2. Create Research domain intro pages:
   - Trading Systems Intro
   - Financial Infrastructure Intro
   - DeFi Protocol Engineering Intro
   - Distributed Systems Intro
   - AI Engineering Intro
3. Create Financial Infrastructure sub-intros before exposing a deep financial-infrastructure sidebar:
   - Payments Intro
   - Settlement Intro
   - Stablecoins Intro

Do not create additional subtopic intros in this phase. The goal is to establish the skeleton, not fill every room.

Phase 2: Update navigation without moving files.

4. Add Architecture to the top navigation.
5. Add the new Research sidebar structure in `vocs.config.ts` while linking to existing routes.
6. Add Architecture-native wrapper routes under `/architecture/*` before exposing deep Architecture sidebar entries.
7. Add the Architecture sidebar structure using Architecture-native routes first. Link to Research pages from the wrapper content for deeper detail, not as primary Architecture sidebar destinations.
8. Keep AI Engineering public navigation to a single intro page.

Phase 2.5: Stabilize Architecture as a first-class section.

9. Create concise Architecture wrapper pages:
   - `/architecture/portfolio`
   - `/architecture/trading-systems/intro`
   - `/architecture/trading-systems/falconx`
   - `/architecture/trading-systems/solver`
   - `/architecture/trading-systems/salus`
   - `/architecture/financial-infrastructure/intro`
   - `/architecture/financial-infrastructure/circle`
   - `/architecture/defi-systems/intro`
   - `/architecture/defi-systems/intents`
   - `/architecture/defi-systems/protocol`
   - `/architecture/distributed-systems/intro`
   - `/architecture/enterprise-architecture/intro`
   - `/architecture/ai-systems/intro`
10. Keep existing `/research/architecture/*` and `/research/Intents/*` routes intact.
11. Copy relevant v4 pitch deck architecture diagrams into `docs/public/images/architecture/v4/` using stable lowercase/kebab-case filenames.
12. Use v4 diagrams in Architecture wrapper pages where they provide a current architecture view.
13. Do not duplicate full research dossiers into Architecture wrapper pages unless a later content migration is approved.
14. Treat `/architecture/portfolio` as the canonical Jincubator architecture portfolio route. Keep `/research/architecture/john` available as a compatibility and historical-context page, with links to `/architecture/portfolio` and `portfolio.johnwhitton.com`.

Phase 3: Cross-link old content into the new taxonomy.

14. Add cross-links from the new domain intro pages to existing content.
15. Add cross-links from Architecture pages to Research domain pages and Product pages where relevant.
16. Resolve route bugs that already exist:

- `/research/chains/NEAR` -> `/research/chains/near`
- `/research/code/horizon` -> `/research/code/Horizon`

Phase 4: Run the taxonomy before moving files.

17. Run the new navigation structure for several weeks.
18. Review traffic, broken links, user paths, and whether the cross-link model is sufficient.
19. Avoid physical file relocation unless it materially improves maintainability or reader comprehension.

Phase 5: Move files only if necessary.

20. If moves are still justified, move active current research into domain-aligned folders while preserving old-route compatibility where Vocs supports it.
21. Move historical research into domain subsections with archive labels, not into a separate dead-end archive only.
22. Archive or remove duplicate deprecated intent pages after confirming the current `research/Intents/*` pages contain the canonical versions.
23. Address empty pages and filename typos:

- `liqudity-management`
- `dataAvailabilty`

24. Update internal links and sidebar entries.
25. Run link checks and Vocs build after the Mermaid/Chromium build blocker is resolved.

## Part 4: Gap Analysis

| Missing Page                                                        | Classification                          | Notes                                                                                                                                                                   |
| ------------------------------------------------------------------- | --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `research/trading-systems/intro`                                    | Can Be Generated From Existing Research | Use solving, arbitrage, route evaluation, execution, and FalconX architecture material.                                                                                 |
| `research/trading-systems/solving/intro`                            | Can Be Generated From Existing Research | Existing solving pages provide strong source material.                                                                                                                  |
| `research/trading-systems/arbitrage/intro`                          | Can Be Generated From Existing Research | Can be generated from `research/solving/solving` and Tycho proposal material.                                                                                           |
| `research/trading-systems/market-making/intro`                      | Needs New Content                       | Market making is mentioned but lacks a dedicated research page.                                                                                                         |
| `research/trading-systems/execution/intro`                          | Can Be Generated From Existing Research | Use execution sections from solving and Tycho/1inch pages.                                                                                                              |
| `research/trading-systems/market-data/intro`                        | Can Be Generated From Existing Research | Use Tycho streaming/indexing references; likely needs expansion.                                                                                                        |
| `research/financial-infrastructure/intro`                           | Can Be Generated From Existing Research | Circle dossier and product/previous work can seed this.                                                                                                                 |
| `research/financial-infrastructure/payments/intro`                  | Can Be Generated From Existing Research | Circle architecture material supports this. Create before exposing Financial Infrastructure in navigation.                                                              |
| `research/financial-infrastructure/settlement/intro`                | Can Be Generated From Existing Research | Use Circle, CCTP, Eco, resource locking, intents, cross-chain settlement, and stablecoin infrastructure. Create before exposing Financial Infrastructure in navigation. |
| `research/financial-infrastructure/stablecoins/intro`               | Can Be Generated From Existing Research | Circle stablecoin material supports this. Create before exposing Financial Infrastructure in navigation.                                                                |
| `research/financial-infrastructure/enterprise-platforms/intro`      | Needs New Content                       | Architecture portfolio and Circle material help, but the category needs framing.                                                                                        |
| `research/defi-protocol-engineering/intro`                          | Can Be Generated From Existing Research | Strong existing source material across solving and intents.                                                                                                             |
| `research/defi-protocol-engineering/intents/intro`                  | Can Be Generated From Existing Research | Existing `research/Intents/intro` can be refreshed.                                                                                                                     |
| `research/defi-protocol-engineering/uniswap/intro`                  | Can Be Generated From Existing Research | Existing hooks and UHI5 material support this.                                                                                                                          |
| `research/defi-protocol-engineering/1inch/intro`                    | Can Be Generated From Existing Research | Existing Tycho/1inch and NEAR Fusion pages support this.                                                                                                                |
| `research/defi-protocol-engineering/tycho/intro`                    | Can Be Generated From Existing Research | Existing solving and Tycho/1inch pages support this.                                                                                                                    |
| `research/defi-protocol-engineering/liquidity-infrastructure/intro` | Can Be Generated From Existing Research | Existing resource management and protocol pages support this.                                                                                                           |
| `research/distributed-systems/intro`                                | Can Be Generated From Existing Research | Existing chains, bridges, primitives, ZK, and Celestia pages support this.                                                                                              |
| `research/distributed-systems/chains/intro`                         | Existing Content                        | Current `research/chains/intro` can be moved/refreshed.                                                                                                                 |
| `research/distributed-systems/bridges/intro`                        | Existing Content                        | Current `research/bridge/intro` can be moved/refreshed.                                                                                                                 |
| `research/distributed-systems/zero-knowledge/intro`                 | Existing Content                        | Current `research/zk/intro` can be moved/refreshed.                                                                                                                     |
| `research/distributed-systems/primitives/intro`                     | Existing Content                        | Current `research/primitives/intro` can be moved/refreshed.                                                                                                             |
| `research/distributed-systems/data-availability/intro`              | Placeholder Only                        | Only Celestia exists today; add a concise intro before expanding.                                                                                                       |
| `research/ai-engineering/intro`                                     | Placeholder Only                        | AI Engineering is strategic but currently aspirational. Expose only this lightweight intro publicly until real content exists.                                          |
| `research/ai-engineering/ai-development/intro`                      | Needs New Content                       | Future page only. Do not expose publicly yet.                                                                                                                           |
| `research/ai-engineering/agent-systems/intro`                       | Needs New Content                       | Future page only. Do not expose publicly yet.                                                                                                                           |
| `research/ai-engineering/research-tooling/intro`                    | Needs New Content                       | Future page only. Do not expose publicly yet.                                                                                                                           |
| `research/ai-engineering/automation/intro`                          | Needs New Content                       | Future page only. Do not expose publicly yet.                                                                                                                           |
| `architecture/intro`                                                | Can Be Generated From Existing Research | Needed for the top-level Architecture section. Use existing architecture pages, prep architecture material, portfolio examples, and decks.                              |
| `architecture/trading-systems/intro`                                | Can Be Generated From Existing Research | FalconX, Salus/Solver architecture, portfolio material, and deck content can seed this.                                                                                 |
| `architecture/financial-infrastructure/intro`                       | Can Be Generated From Existing Research | Circle architecture, Eco/EFI history, and settlement architecture material can seed this.                                                                               |
| `architecture/defi-systems/intro`                                   | Can Be Generated From Existing Research | Intent architecture and protocol pages can seed this.                                                                                                                   |
| `architecture/distributed-systems/intro`                            | Can Be Generated From Existing Research | Chain, bridge, and distributed infrastructure architecture material can seed this.                                                                                      |
| `architecture/enterprise-architecture/intro`                        | Can Be Generated From Existing Research | Portfolio, enterprise integration, Eco, EAVE, and prior architecture examples can seed this.                                                                            |
| `architecture/ai-systems/intro`                                     | Placeholder Only                        | Keep lightweight until concrete AI systems architecture content exists.                                                                                                 |
| `archive/research/intro` or `research/archive/intro`                | Placeholder Only                        | Needed to keep historical material visible but not dominant.                                                                                                            |

## Part 5: Architecture Position

Recommendation: Option B, make Architecture a top-level navigation item.

```text
Architecture
|-- Overview
|-- Trading Systems
|-- Financial Infrastructure
|-- DeFi Systems
|-- Distributed Systems
|-- Enterprise Architecture
`-- AI Systems
```

Reasoning:

- Architecture is an output type in the Jincubator studio lifecycle, not only a research topic.
- The current architecture pages are among the clearest evidence of Jincubator's value.
- Architecture spans multiple research domains and should not be trapped under one domain.
- A top-level Architecture section supports hiring, partnership, product, and investor audiences without turning Research into a portfolio.
- Keeping Architecture under Research would preserve the current sidebar pattern, but it would weaken the planned domain taxonomy.

Execution recommendation: create Architecture as a top-level section in the next implementation phase. Do not physically relocate the existing architecture pages at first; use the new Architecture navigation to point to the current `/research/architecture/*` routes and relevant architecture-oriented research pages.

This creates three stable primary assets:

```text
Research
Architecture
Product
```

The distinction should be:

- Research is organized by domain.
- Architecture is organized by solution.
- Product is organized by current and future product initiatives.

## Final Recommendations

1. Use the five-domain taxonomy for Research, but avoid overemphasizing AI until content exists.
2. Treat Trading Systems as the durable center for solver, arbitrage, execution, market data, and market-making content.
3. Treat DeFi Protocol Engineering as the strongest protocol-specific domain and implement it close to the proposed structure.
4. Treat Distributed Systems as a deep historical and technical archive with continuing relevance.
5. Treat Financial Infrastructure as partially supported but viable; create Financial Infrastructure, Payments, Stablecoins, and Settlement intros before exposing a deep sidebar.
6. Treat Architecture as top-level immediately in the next implementation phase, using cross-links to existing routes before any file moves.
7. Preserve historical chain, bridge, ZK, primitive, and code-review research as archive-labeled domain content.
8. Use cross-links for pages that belong in multiple domains rather than duplicating content.
9. Do not physically migrate files until the new intro pages, top-level Architecture section, sidebar structure, and cross-link model have run long enough to prove stable.

## Recommended Next Implementation Task

Do not start by moving content.

Next task:

1. Create Architecture top-level section and Architecture Overview.
2. Create Research domain intro pages:
   - Trading Systems
   - Financial Infrastructure
   - DeFi Protocol Engineering
   - Distributed Systems
   - AI Engineering
3. Create initial Financial Infrastructure support intros:
   - Payments
   - Settlement
   - Stablecoins
4. Do not create additional subtopic intro pages in this phase.
5. Create Architecture-native wrapper pages before exposing deep Architecture sidebar entries.
6. Copy relevant v4 pitch deck architecture diagrams into public site assets.
7. Update navigation and sidebars to link the new structure to existing routes.
8. Cross-link existing content under the new domains.

Only after this structure has been reviewed should physical file migration be considered.
