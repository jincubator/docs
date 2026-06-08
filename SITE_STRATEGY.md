# Jincubator Site Strategy

This document guides the next refactor of Jincubator.com so the site aligns with the latest portfolio work, current product direction, and target technical domains.

## Vision

Jincubator is a research and innovation studio exploring complex technical systems through research, architecture, prototypes, products, and venture formation.

The studio focuses on the intersection of:

- Trading systems
- Financial infrastructure
- DeFi protocol engineering
- Distributed systems
- AI engineering

Research should translate into practical outcomes through architecture design, prototype development, product incubation, and strategic partnerships.

## Positioning

Jincubator is the home for:

- Technical research
- Architecture exploration
- Prototype development
- Product incubation
- Venture formation

The site should document both current work and future directions.

Jincubator is not:

- A personal resume
- A consulting company website
- A portfolio website
- A single-product company
- An arbitrage bot project

Instead, it is the environment where ideas evolve into products, ventures, and partnerships.

## Relationship Between Sites

The broader web presence should separate the person, proof of work, and studio research.

### johnwhitton.com

The person.

Contains:

- Biography
- Career history
- Experience
- Resume
- Contact information

Primary question answered: "Who is John Whitton?"

### portfolio.johnwhitton.com

Proof of work.

Contains:

- Projects
- Architectures
- Case studies
- Technical accomplishments
- Demonstrated capability

Primary question answered: "What has John built, designed, or led?"

### jincubator.com

Research and innovation.

Contains:

- Research
- Architecture exploration
- Product concepts
- Venture proposals
- Partnerships
- Future directions

Primary question answered: "What is being explored, built, and incubated next?"

## Primary Audiences

### Hiring Managers

Examples:

- Engineering managers
- Directors
- CTOs
- Technical founders

They are looking for technical depth, systems thinking, architecture capability, and innovation.

Desired outcome: permanent role.

### Advisory and Consulting

Examples:

- Startups
- Protocols
- Fintech organizations

They are looking for architecture reviews, technical strategy, design guidance, and product validation.

Desired outcome: advisory or consulting engagement.

### Strategic Partners

Examples:

- Infrastructure providers
- Protocol teams
- Research organizations

They are looking for collaboration opportunities, joint development, and research initiatives.

Desired outcome: partnership.

### Investors and Venture Partners

They are looking for product opportunities, venture creation, technical founders, and emerging market opportunities.

Desired outcome: investment or venture partnership.

## Domain Taxonomy

All major content should map to one of these five domains.

### Trading Systems

Examples:

- Market making
- Arbitrage
- Execution systems
- OMS / EMS
- Routing systems
- Market data systems

### Financial Infrastructure

Examples:

- Payments
- Settlement
- Stablecoins
- Treasury systems
- Enterprise financial platforms

### DeFi Protocol Engineering

Examples:

- Solvers
- DEX integrations
- Intent systems
- Liquidity infrastructure
- Protocol automation

### Distributed Systems

Examples:

- Messaging
- Event-driven systems
- Data pipelines
- High-performance architectures
- Scalability research

### AI Engineering

Examples:

- Agent systems
- Automation
- AI-assisted development
- Research tooling
- Emerging AI products

## Site Structure

The refactored site should make the studio model obvious from the first screen and use top-level sections that reflect the lifecycle from research to venture.

### Home

Purpose: introduce Jincubator and establish positioning.

The homepage should stay concise. It should establish the studio frame, then provide a small number of useful entry points.

Content should include:

- Mission
- Research entry point
- Architecture entry point
- Product entry point

Detailed taxonomy, lifecycle explanation, site-ecosystem positioning, and engagement models belong on deeper pages rather than the landing page.

### Research

Purpose: organize and publish technical research.

Target structure:

```text
Research
|-- Trading Systems
|-- Financial Infrastructure
|-- DeFi Protocol Engineering
|-- Distributed Systems
`-- AI Engineering
```

### Architecture

Purpose: present visual and technical architecture work as a coherent architecture portfolio.

Target structure:

```text
Architecture
|-- Enterprise Systems
|-- Financial Infrastructure
|-- Trading Systems
|-- DeFi Systems
|-- Distributed Systems
`-- AI Systems
```

### Product

Purpose: organize current and future product initiatives.

Target structure:

```text
Product
|-- Salus
|-- Future Concepts
`-- Experimental Projects
```

### Partnerships

Purpose: explain engagement models and collaboration paths.

Target structure:

```text
Partnerships
|-- Permanent Roles
|-- Contract & Advisory
|-- Founding Opportunities
`-- Strategic Partnerships
```

### Proposals

Purpose: collect investment, venture, grant, and research proposals.

Target structure:

```text
Proposals
|-- Salus
|-- Future Ventures
`-- Research Initiatives
```

## Product Strategy

### Current Flagship: Salus

Salus should be positioned as a research and execution platform for evaluating, validating, and deploying trading strategies.

Focus areas:

- Replay
- Simulation
- Validation
- Execution
- Analytics

Salus is not:

- A market maker
- A hedge fund
- A trading venue

## Refactor Principles

- Lead with studio positioning before historical content.
- Treat architecture work as a first-class content type, not only as research support material.
- Classify research, product, proposal, and partnership pages by domain where the current content supports that classification.
- Keep the distinction between Jincubator, personal biography, and proof-of-work portfolio clear.
- Make current and future work easier to find than older archival research.
- Preserve historical blockchain research, but move it into a supporting archive or legacy research context where appropriate.
- Use Salus as the current product anchor without reducing the entire site to a trading product.
- Keep landing pages short; move detailed explanatory content into section intro pages and topic pages.

## Current Content Audit

This audit reflects the current repository structure as of June 2026. It is intended to guide the next edits before changing more pages, navigation, or file locations.

### Current Page Inventory

The site currently has 89 `.mdx` pages and two `.mdx.original` backup files.

Current page groups:

- Root pages: `index.mdx`, `overview.mdx`
- Research: `research/intro`
- Research architecture: 3 pages
- Research solving: 6 pages
- Research intents: 6 pages
- Research chains: 10 pages
- Research code reviews: 4 pages
- Research bridges: 8 pages
- Research zero knowledge: 4 pages
- Research primitives: 7 pages
- Research data availability: 1 page
- Research deprecated: 6 pages
- Product intro: 1 page
- Product solving: 16 pages
- Product previous work: 6 pages
- Proposals: 7 pages
- Partnerships: 1 page

### Current Navigation

Top navigation currently exposes:

- Research -> `/research/intro`
- Proposals -> `/proposals/intro`
- Product -> `/product/intro`
- Partnerships -> `/partnerships/intro`

The Research sidebar is organized around:

- Architectural Designs (2026)
- Solving and Arbitrage (2025)
- Layer 1 Platforms (2022/2023)
- Code Reviews (2022/2023)
- Cross Chain Bridges (2022/2023)
- Zero Knowledge (2022/2023)
- Primitives (2022/2023)

The Product sidebar is organized around:

- Product
- High Performance Solving
- Roadmap
- Previous Work

The Proposals sidebar is organized around:

- Grant Proposals
- Coding Events

The Partnerships section currently has only one intro page.

### Navigation and Content Gaps

Several pages exist but are not currently referenced from the sidebar or top navigation:

- `/overview`
- `/product/solving/implementation-original`
- `/proposals/solving-arbitrage`
- `/research/Intents/architecture`
- `/research/Intents/flow`
- `/research/Intents/hooks`
- `/research/Intents/intro`
- `/research/Intents/resources`
- `/research/dataAvailabilty/celestia`
- `/research/deprecated/*`
- `/research/primitives/fast-fourier-transforms`
- `/research/solving/liqudity-management`
- `/research/solving/reference-implementation`

There are also two route case mismatches to resolve in a later navigation cleanup:

- Sidebar links to `/research/chains/NEAR`, while the file route is `/research/chains/near`.
- Sidebar links to `/research/code/horizon`, while the file route is `/research/code/Horizon`.

### Active Versus Historical Content

Active or current-looking content:

- `research/architecture/*`, especially the system design and architecture portfolio.
- `research/solving/*` and `research/Intents/*`, covering solver, Tycho, 1inch, Uniswap v4, intent, and liquidity-management work.
- `product/solving/*`, covering high-performance solving, collectors, routes, strategies, protocol onboarding, roadmap, and design documents.
- 2025 proposals and event pages such as Tycho Atomic Arbitrage, Unite DeFi, and Uniswap Hook Incubator 5.
- `partnerships/intro`, although it is currently framed around grants, consulting, and protocol collaboration rather than the broader four-path model in this strategy.

Historical or archive-like content:

- Layer 1 platform research from 2022/2023.
- Bridge, code review, zero knowledge, and cryptographic primitive research from 2022/2023.
- Product previous work from 2018 through 2023.
- Older proposals such as Sunrise and Harmony.
- `research/deprecated/*` and `.mdx.original` files.

Historical content should be preserved and made easier to understand as background research or archive material. It should not dominate the homepage or current product positioning.

### Strategy Alignment

Already supported:

- Trading Systems: current arbitrage, route evaluation, execution, market-making, and strategy infrastructure content.
- DeFi Protocol Engineering: solver, intent, Tycho, 1inch, Uniswap v4, liquidity-management, and protocol automation content.
- Distributed Systems: historical chain, bridge, consensus, cryptographic primitive, data availability, and high-performance architecture content.
- Architecture: the current architecture portfolio and Circle/FalconX dossiers support architecture as a first-class content type.

Partially supported:

- Financial Infrastructure: Circle, payments, settlement, stablecoin, and enterprise financial platform themes are present, but this is not yet a fully organized section.
- Partnerships: one page exists, but it needs clearer segmentation into permanent roles, contract/advisory, founding opportunities, and strategic partnerships.
- Product incubation: productization is present through high-performance solving, but Salus naming and positioning are not yet consistently applied.
- Venture formation: proposals and prior product work support the idea, but venture formation is not yet a clearly developed content area.

Aspirational or future-facing:

- AI Engineering: little current page content supports this domain yet. It should remain a future-facing strategy area rather than a major homepage claim until content exists.
- A standalone Architecture section: architecture content exists, but navigation still places it under Research.
- A broad venture studio narrative: directionally correct, but the current site still reads primarily as research plus productization.
- A full five-domain taxonomy on every major page: this would overstate the current content distribution.

### Domain Support Assessment

- Trading Systems: strongly supported.
- DeFi Protocol Engineering: strongly supported.
- Distributed Systems: supported, mostly through historical blockchain, bridge, consensus, and high-performance system material.
- Financial Infrastructure: partially supported.
- AI Engineering: aspirational.

Do not force every domain onto the homepage or every section intro. Use the five-domain taxonomy as an organizing model for deeper pages and future structure.

### Solver, Tycho, Arbitrage, and Intent Work

Solver, arbitrage, Tycho, and intent-based work should remain prominent, but it should no longer define all of Jincubator.

Placement:

- Research: current research under Trading Systems and DeFi Protocol Engineering.
- Product: part of the Salus execution/research platform story.
- Proposals: evidence of active grant, ecosystem, and venture development.
- Partnerships: relevant to protocol collaboration, liquidity infrastructure, and advisory work.

This content should be repositioned as a strong current domain cluster, not removed.

### Salus Positioning

Salus should be positioned as the current product anchor: a research and execution platform for replay, simulation, validation, execution, and analytics around trading strategies.

The current Product section does not yet consistently use the Salus name. It is still framed as "High Performance Solving" and "Solving Architecture." A later product pass should introduce Salus without making the entire site a single-product landing page.

### Pages That Should Stay Minimal

Keep these pages concise:

- Homepage: studio positioning and a few entry points only.
- Top-level section intros: short orientation, current purpose, and links into deeper content.
- Partnerships intro: concise engagement models, with details moved into subpages later if needed.
- Proposals intro: short framing and links to current proposals, not a full research narrative.

Use detailed explanatory pages for:

- Research taxonomy and archives.
- Architecture portfolio and case studies.
- Product / Salus positioning, roadmap, and technical design.
- Solver, Tycho, arbitrage, and intent implementation details.
- Historical blockchain, bridge, zero knowledge, primitive, and previous product research.

### Recommended Next Edits

1. Simplify `docs/pages/index.mdx` back to a concise Vocs landing page with only the hero and three primary buttons.
2. Refresh `research/intro` into the primary taxonomy and archive-orientation page.
3. Refresh `partnerships/intro` around the four engagement paths without turning it into a pitch deck.
4. Refresh `product/intro` to introduce Salus as the product anchor while keeping solver content as technical proof.
5. Decide whether architecture remains under Research for now or becomes a top-level navigation item later.
6. Resolve route case mismatches and decide how to handle currently unlinked pages.

## Long-Term Vision

Jincubator should become a studio where each stage builds evidence for the next:

```text
Research -> Architecture -> Prototype -> Product -> Venture
```

The site should become a living record of that progression.
