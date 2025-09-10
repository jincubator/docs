# Liquidity Indexing and No Liquidity Solving

## Abstract

## Overview

The solver repository implements an automated arbitrage system for decentralized exchanges (DEXs). The system continuously monitors liquidity pools across multiple protocols (Uniswap V2/V3/V4), identifies profitable arbitrage opportunities using graph-based route discovery algorithms, and executes trades via flash loans to capture price discrepancies.

This document provides a high-level architectural overview of the entire system. For detailed information about specific subsystems, see Core Arbitrage System, Smart Contracts and On-Chain Execution, and CLI Tools and Binaries.

## Components

### Chain Indexing

### Liquidity Indexing

The MinimalStreamingEngine serves as the central orchestrator for the entire arbitrage system, coordinating real-time data ingestion, route discovery, profitability evaluation, and transaction execution. It acts as the primary controller that manages streaming connections to Tycho protocol data, orchestrates background processing tasks, and executes profitable arbitrage opportunities.

This engine represents the core runtime system that ties together all components: it ingests live market data from external sources, maintains synchronized in-memory data stores, triggers route calculations when pools change, evaluates routes for profitability, and executes profitable trades automatically.

Many thanks go to the teams that was built upon and for including [Tycho](https://docs.propellerheads.xyz/tycho), [Uniswap](https://docs.uniswap.org/contracts/v4/overview), [1inch](https://portal.1inch.dev/documentation/overview) and [CowSwap](https://docs.cow.fi/cow-protocol/tutorials/cow-swap) as well as all the other Builders and Creators in this space.

### Route Evaluation for Solvers

### Profitability Calculation

### No Liquidity Solving

The FlashV3Router smart contract system, which implements flash loan-based arbitrage execution using Uniswap V3 flash loans integrated with the TychoRouter multi-protocol swap system. The FlashV3Router enables borrowing tokens without collateral, executing multi-hop arbitrage paths, and repaying loans with captured profits.

For information about route discovery and arbitrage detection algorithms, see Arbitrage Detection and Queue Management. For multi-protocol routing and execution strategies beyond flash loans, see Multi-Protocol Routing and Execution.

![FlashV3Router](../assets/flashv3router.png)

## Architecture

![Orchestration](../assets/orchestration.png)

### Persistence

### Collectors

### Strategies

### Encoding

### Executors

## System Overview

### Core Architecture

The Tycho solver system is built around a **streaming-first architecture** that processes real-time blockchain data to identify and execute arbitrage opportunities. The system consists of two main crates:

- **`solver_core`**: Pure domain logic, types, traits, and mathematical operations
- **`solver_driver`**: Runtime orchestration, I/O operations, streaming, CLI tools, and execution

### Key Design Principles

1. **Real-time Processing**: Live blockchain data streaming via Tycho protocol streams
2. **Modular Architecture**: Clear separation between core logic and runtime orchestration
3. **Performance Optimization**: Efficient graph building, route calculation, and execution
4. **Multi-protocol Support**: Uniswap V2, V3, V4 with extensible protocol framework
5. **Flash Loan Integration**: Automated flash loan execution for capital-efficient arbitrage

## System Architecture Diagram

```mermaid
graph TB
    subgraph "External Data Sources"
        TYCHO[Tycho Protocol Streams]
        RPC[Blockchain RPC]
        API[Tycho API]
    end

    subgraph "solver_core (Pure Logic)"
        TYPES[Domain Types]
        TRAITS[Interfaces/Traits]
        MATH[FixedPoint Math]
        PROTOCOL[Protocol Models]
    end

    subgraph "solver_driver (Runtime)"
        subgraph "Data Collection"
            STREAMING[Streaming Engine]
            COLLECTORS[Data Collectors]
            STORE[Pool Store]
        end

        subgraph "Processing Pipeline"
            GRAPH[Graph Manager]
            ROUTES[Route Manager]
            ANALYZER[Route Analyzer]
        end

        subgraph "Execution Pipeline"
            ENCODER[Solution Encoder]
            EXECUTOR[Execution Engine]
            SENDER[Transaction Sender]
        end

        subgraph "Persistence"
            DB[RocksDB]
            CACHE[Memory Cache]
        end
    end

    subgraph "Smart Contracts"
        ROUTER[FlashV3Router]
        POOLS[DEX Pools]
    end

    subgraph "CLI Tools"
        ARBITRAGER[Arbitrager]
        ROUTE_EXEC[Route Executor]
        TYCHO_CLI[Tycho CLI]
    end

    %% Data Flow
    TYCHO --> STREAMING
    RPC --> COLLECTORS
    API --> COLLECTORS

    STREAMING --> STORE
    STORE --> GRAPH
    GRAPH --> ROUTES
    ROUTES --> ANALYZER
    ANALYZER --> ENCODER
    ENCODER --> EXECUTOR
    EXECUTOR --> SENDER

    STORE --> DB
    ROUTES --> DB
    GRAPH --> DB

    SENDER --> ROUTER
    ROUTER --> POOLS

    ARBITRAGER --> STREAMING
    ROUTE_EXEC --> ANALYZER
    TYCHO_CLI --> DB

    %% Core Dependencies
    TYPES --> STREAMING
    TRAITS --> ANALYZER
    MATH --> ANALYZER
    PROTOCOL --> STORE
```

## Core Components

### 1. Streaming Engine (`MinimalStreamingEngine`)

**Purpose**: Real-time processing of Tycho protocol streams and blockchain data

**Key Features**:

- **WebSocket Integration**: Direct connection to Tycho protocol streams
- **Real-time State Processing**: Live protocol state updates from blockchain
- **Incremental Graph Building**: Dynamic graph construction with new pools
- **Route Discovery**: Automatic route calculation for new trading pairs
- **Performance Optimization**: Microsecond-level processing with memory caching

**Technical Implementation**:

```rust
pub struct MinimalStreamingEngine {
    streamed_pools: Arc<Mutex<HashMap<String, ProtocolComponent>>>,
    streamed_states: Arc<dyn PoolStore>,
    routes_in_memory: Arc<Mutex<HashMap<String, MinimalRoute>>>,
    route_pool_index: Arc<Mutex<HashMap<String, HashSet<String>>>>,
    evaluation_sender: Option<UnboundedSender<MinimalRoute>>,
    execution_queue: Arc<Mutex<Vec<(MinimalRoute, RouteEvaluation)>>>,
}
```

**Performance Metrics**:

- **Graph Building**: 193µs for 37 pools, 33µs for 2 pools
- **Route Calculation**: 2.42µs for 3-hop, 833ns for 4-hop, 791ns for 5-hop
- **Pool Coverage**: 2000+ pools with real-time state updates
- **Memory Efficiency**: <500MB for active streaming

### 2. Route Analyzer (`RouteAnalyzer`)

**Purpose**: Evaluates routes for profitability using real-time protocol states

**Key Features**:

- **ProtocolSim Integration**: Uses Tycho's ProtocolSim for accurate calculations
- **FixedPoint Math**: Precise decimal arithmetic to avoid overflow
- **V4 Overflow Protection**: Prevents system crashes from V4 calculation overflows
- **Profit Optimization**: Binary search for optimal trade sizes
- **Flash Loan Fee Calculation**: Accounts for flash loan costs in profit calculations

**Technical Implementation**:

```rust
impl RouteAnalyzer {
    pub async fn evaluate_routes(
        routes: &[MinimalRoute],
        pool_store: &dyn PoolStore,
        token_map: &HashMap<Bytes, Token>,
    ) -> Result<Vec<RouteEvaluation>>;

    pub async fn evaluate_route(
        route: &Route,
        pool_store: &dyn PoolStore,
        amount_in: u128,
        token_map: &HashMap<Bytes, Token>,
    ) -> Result<RouteEvaluation>;

    pub async fn find_optimal_input_amount(
        route: &Route,
        pool_store: &dyn PoolStore,
        token_map: &HashMap<Bytes, Token>,
    ) -> Result<u128>;
}
```

### 3. Solution Encoder (`SolutionEncoder`)

**Purpose**: Converts route evaluations into executable smart contract calldata

**Key Features**:

- **TychoRouterEncoderBuilder**: Uses Tycho's encoder for ABI-compliant calldata
- **Flash Loan Integration**: Encodes flash loan parameters and sequential swaps
- **Gas Optimization**: Optimizes transaction parameters for execution
- **Multi-protocol Support**: Handles V2, V3, V4 protocol differences

**Technical Implementation**:

```rust
pub fn encode_solution(solution: Solution, chain: Chain) -> anyhow::Result<EncodedSolution> {
    let encoder = TychoRouterEncoderBuilder::new()
        .chain(chain)
        .user_transfer_type(UserTransferType::TransferFrom)
        .build()?;

    let encoded_vec = encoder.encode_solutions(vec![solution])?;
    Ok(encoded_vec.into_iter().next().expect("Expected at least one encoded solution"))
}
```

### 4. Execution Engine (`ExecutionEngine`)

**Purpose**: Executes profitable arbitrage transactions on blockchain

**Key Features**:

- **EIP-1559 Support**: Modern transaction format with dynamic gas pricing
- **Balance Validation**: Pre-execution balance checks
- **Retry Logic**: Automatic retry with nonce synchronization
- **Gas Optimization**: Optimized gas parameters for cost efficiency
- **Transaction Monitoring**: Real-time transaction status tracking

**Technical Implementation**:

```rust
pub struct ExecutionEngine {
    client: Arc<dyn Provider>,
    signer: EthereumWallet,
    chain_id: u64,
    dry_run: bool,
    force_execute: bool,
}

impl ExecutionEngine {
    pub async fn execute_signal(&mut self, signal: &RouteSignal) -> Result<EvaluationResult>;
    pub async fn send_flash_transaction(&mut self, signal: &RouteSignal) -> Result<TransactionReceipt>;
}
```

## Data Flow Architecture

### 1. Streaming Data Flow

```mermaid
sequenceDiagram
    participant T as Tycho Stream
    participant SE as Streaming Engine
    participant PS as Pool Store
    participant GM as Graph Manager
    participant RM as Route Manager
    participant RA as Route Analyzer
    participant EE as Execution Engine

    T->>SE: Protocol State Updates
    SE->>PS: Store Pool States
    SE->>GM: Update Graph
    GM->>RM: Calculate New Routes
    RM->>RA: Evaluate Routes
    RA->>EE: Execute Profitable Routes
    EE->>T: Transaction Results
```

### 2. Route Evaluation Flow

```mermaid
flowchart TD
    A[Stream Message] --> B{New Pairs?}
    B -->|Yes| C[Process New Pools]
    B -->|No| D{State Updates?}

    C --> E[Calculate Routes Incrementally]
    E --> F[Save Routes to Database]
    F --> G[Queue Routes for Evaluation]

    D -->|Yes| H[Re-evaluate Routes]
    D -->|No| I[Continue Streaming]

    H --> G
    G --> J[Route Evaluation Phase]
    J --> K{Profitable?}
    K -->|Yes| L[Queue for Execution]
    K -->|No| M[Skip Route]

    L --> N[Execution Phase]
    N --> O{Pre-conditions Met?}
    O -->|Yes| P[Execute Transaction]
    O -->|No| Q[Execution Failed]

    P --> R{Success?}
    R -->|Yes| S[Execution Complete]
    R -->|No| T[Retry Logic]

    T --> U{Max Retries?}
    U -->|No| N
    U -->|Yes| V[Execution Failed]

    I --> W[Process Next Block]
    W --> A
```

### 3. Database Schema

```mermaid
erDiagram
    TOKEN {
        string address PK
        string symbol
        u8 decimals
        string chain
        u8 quality
    }

    POOL {
        string id PK
        string protocol
        f64 tvl
        timestamp created_at
        json static_attributes
    }

    ROUTE {
        string route_id PK
        string path_hash
        timestamp created_at
        f64 expected_profit
        json flash_loan_info
    }

    ROUTE_EVALUATION {
        string route_id FK
        f64 amount_in
        f64 amount_out
        f64 profit
        f64 gas_cost
        f64 roi_percentage
        timestamp evaluated_at
    }

    GRAPH_NODE {
        string token_address PK
        json metadata
    }

    GRAPH_EDGE {
        string from_token FK
        string to_token FK
        string pool_id FK
        u8 protocol
        f64 rate
    }

    %% Relationships
    TOKEN ||--o{ GRAPH_NODE : "represents"
    POOL ||--o{ GRAPH_EDGE : "creates"
    ROUTE ||--o{ ROUTE_EVALUATION : "evaluated_as"
    GRAPH_NODE ||--o{ GRAPH_EDGE : "from_token"
    GRAPH_NODE ||--o{ GRAPH_EDGE : "to_token"
```

## Database Design

### RocksDB Architecture

The system uses **RocksDB** as its primary database engine with a **column family** architecture:

| Column Family | Purpose           | Key Format              | Value Format                    |
| ------------- | ----------------- | ----------------------- | ------------------------------- |
| `tokens`      | Token metadata    | `token:<address>`       | Serialized `Token` struct       |
| `graph`       | Graph edges       | `graph:<token_address>` | Serialized `Vec<CompactEdge>`   |
| `routes`      | Calculated routes | `route:<route_id>`      | Serialized `Route` struct       |
| `signals`     | Route signals     | `signal:<signal_id>`    | Serialized `RouteSignal` struct |

### Performance Optimizations

- **Write Batching**: 100 operations per batch with 100ms flush interval
- **Asynchronous Writes**: Non-blocking write operations via dedicated writer thread
- **Memory Caching**: In-memory route storage with O(1) pool index lookup
- **Incremental Updates**: Only recalculates affected routes on state changes

## CLI Tools and Configuration

### 1. Arbitrager (`arbitrager.rs`)

**Purpose**: Production streaming arbitrage bot for continuous operation

**Key Features**:

- **Continuous Streaming**: Real-time monitoring of blockchain data
- **Auto-execution**: Automatically executes profitable routes
- **Production Safety**: Conservative execution conditions and error handling
- **Performance Monitoring**: Real-time metrics and statistics

**Usage**:

```bash
# Basic streaming with auto-execution
cargo run -p solver_driver --bin arbitrager -- --chain unichain --route-eval

# Dry run mode (evaluate but don't execute)
cargo run -p solver_driver --bin arbitrager -- --chain unichain --route-eval --dry-run

# Custom configuration
cargo run -p solver_driver --bin arbitrager -- \
  --chain base \
  --data-dir data/cursor \
  --block-count 100 \
  --route-eval \
  --profit-threshold 0.1
```

### 2. Route Executor (`route_executor.rs`)

**Purpose**: Testing and debugging harness for targeted route execution

**Key Features**:

- **Multiple Execution Modes**: Encode-only, exec-only, and full streaming
- **Targeted Execution**: Executes specific routes rather than all discovered routes
- **Enhanced Debugging**: Detailed panic handling and logging
- **Fork Testing**: Execute routes on blockchain forks for testing

**Usage**:

```bash
# Encode-only mode (build calldata without execution)
cargo run -p solver_driver --bin route_executor -- --encode-only --route-id <route_id>

# Exec-only mode (execute specific route on fork)
cargo run -p solver_driver --bin route_executor -- \
  --exec-only \
  --route-id <route_id> \
  --input-amount 1.0 \
  --block-number 12345678

# Full streaming mode
cargo run -p solver_driver --bin route_executor -- \
  --chain unichain \
  --data-dir datatest/cursor \
  --route-id <route_id>
```

### 3. Tycho CLI (`tycho.rs`)

**Purpose**: Database querying and system administration

**Key Features**:

- **Route Queries**: Query and analyze stored routes
- **Database Statistics**: System performance and data metrics
- **Token Management**: Token metadata queries and validation
- **Configuration Management**: System configuration and settings

**Usage**:

```bash
# Query routes
cargo run -p solver_driver --bin tycho -- --chain unichain query-routes

# Database statistics
cargo run -p solver_driver --bin tycho -- --chain unichain query-stats

# Token queries
cargo run -p solver_driver --bin tycho -- --chain unichain query-tokens
```

## Configuration System

### Environment Variables

| Variable           | Purpose             | Required            |
| ------------------ | ------------------- | ------------------- |
| `TYCHO_API_KEY`    | Tycho API access    | Yes                 |
| `SOLVER_KEY`       | Transaction signing | Yes (for execution) |
| `BASE_RPC_URL`     | Base chain RPC      | Yes (for Base)      |
| `ETHEREUM_RPC_URL` | Ethereum RPC        | Yes (for Ethereum)  |
| `UNICHAIN_RPC_URL` | Unichain RPC        | Yes (for Unichain)  |

### Chain Configuration (`chains.toml`)

```toml
[unichain]
chain_id = 130
rpc_url = "https://unichain-mainnet.g.alchemy.com/v2/..."
rpc_query_url = "https://unichain-mainnet.g.alchemy.com/v2/..."
indexer_url = "https://unichain-indexer.tychodex.com"
router_address = "0x..."
executor_address = "0x..."
preflight_gas_base = 100000
preflight_gas_per_hop = 50000
v4_zero_output_cooldown_enabled = true
v4_zero_output_cooldown_ms = 5000

[base]
chain_id = 8453
rpc_url = "https://base-mainnet.g.alchemy.com/v2/..."
# ... similar configuration
```

### Token and Pool Configuration

**Token Blacklists** (`tokens.toml`):

```toml
[unichain.blacklist]
tokens = [
    "0x0000000000000000000000000000000000000000",  # Zero address
    # ... other blacklisted tokens
]
```

**Pool Blacklists** (`pools.toml`):

```toml
[unichain.blacklist]
pools = [
    "0x0000000000000000000000000000000000000000",  # Zero address
    # ... other blacklisted pools
]
```

## Performance Characteristics

### Current Performance Metrics

| Metric                        | Value                | Notes                         |
| ----------------------------- | -------------------- | ----------------------------- |
| **Graph Building**            | 193µs (37 pools)     | Real-time processing          |
| **Route Calculation**         | 2.42µs (3-hop)       | Microsecond-level performance |
| **Database Write Throughput** | >10,000 ops/sec      | RocksDB optimization          |
| **Memory Usage**              | <500MB (2000+ pools) | Efficient memory management   |
| **Route Processing**          | 200 routes/batch     | Configurable batch sizes      |
| **Execution Success Rate**    | 100% (proper config) | With balance validation       |

### Scalability Characteristics

- **Pool Coverage**: 2000+ pools with real-time updates
- **Route Generation**: 1,983,160 routes (3-hop) in ~222 seconds
- **Memory Efficiency**: Optimized for streaming with in-memory caching
- **Database Performance**: Sub-millisecond read latency, high write throughput

## Security and Risk Management

### 1. V4 Overflow Protection

**Issue**: Uniswap V4 pools can cause u64 overflow in calculations
**Solution**: Amount limiting and panic detection with automatic pool disabling

```rust
// V4 Overflow Protection
if edge.protocol == "uniswap_v4" {
    let safe_max_amount = match token_in.decimals {
        18 => 1_000_000_000_000_000_000u128, // 1 token
        6 => 1_000_000_000_000u128,          // 1,000,000 tokens
        8 => 10_000_000_000u128,             // 10,000 tokens
        _ => 1_000_000_000_000_000u128,      // Default
    };

    if amount > safe_max_amount {
        adjusted_amount = safe_max_amount;
    }
}
```

### 2. Balance Validation

**Pre-execution Checks**:

- Account balance > estimated transaction cost
- Gas price within acceptable limits
- Sufficient funds for flash loan repayment

### 3. Profit Threshold Filtering

**Safety Mechanisms**:

- Minimum profit threshold (default: 0.0%)
- Sanity checks for unrealistic profit percentages (>1000% filtered)
- Gas cost accounting in net profit calculations

## Integration Points

### 1. Tycho Protocol Integration

- **WebSocket Streams**: Real-time protocol state updates
- **ProtocolSim**: Accurate swap amount calculations
- **TychoRouterEncoderBuilder**: ABI-compliant transaction encoding

### 2. Smart Contract Integration

- **FlashV3Router**: Flash loan execution and sequential swaps
- **Uniswap V2/V3/V4**: Multi-protocol DEX integration
- **EIP-1559**: Modern transaction format support

### 3. External Services

- **Alchemy RPC**: High-performance blockchain data access
- **Tycho Indexer**: Protocol state and metadata services

## Development and Testing

### Testing Strategy

1. **Unit Tests**: Core logic and mathematical operations
2. **Integration Tests**: End-to-end pipeline testing
3. **Performance Tests**: Load and stress testing
4. **Fork Testing**: Real blockchain state testing

### Development Workflow

1. **Local Development**: Use `datatest/` directory for testing
2. **Production Deployment**: Use `data/` directory for live operation
3. **Debug Output**: Use `debug/` directory for analysis files

### Code Organization

```
crates/
├── solver_core/          # Pure domain logic
│   ├── types/           # Domain models
│   ├── traits/          # Interfaces
│   ├── math/            # Mathematical operations
│   └── protocol/        # Protocol models
└── solver_driver/       # Runtime orchestration
    ├── collectors/      # Data collection
    ├── encoders/        # Solution encoding
    ├── executors/       # Transaction execution
    ├── strategy/        # Route selection
    └── bin/             # CLI tools
```

## Future Enhancements

### Planned Features

1. **Cross-chain Arbitrage**: Multi-chain opportunity detection
2. **Advanced Routing**: MEV protection and optimal routing
3. **Dynamic Trade Sizing**: Adaptive position sizing based on market conditions
4. **Machine Learning**: Predictive models for opportunity detection
5. **Advanced Analytics**: Comprehensive performance monitoring and reporting

### Performance Optimizations

1. **Parallel Processing**: Multi-threaded route evaluation
2. **Memory Optimization**: Advanced caching strategies
3. **Database Optimization**: Query optimization and indexing
4. **Network Optimization**: Efficient API usage and connection pooling

## Conclusion

The Tycho solver system represents a sophisticated, production-ready arbitrage platform that combines real-time blockchain data processing with advanced mathematical optimization. The modular architecture ensures maintainability and extensibility while the performance optimizations enable efficient operation at scale.

The system's success is demonstrated by its ability to:

- Process 2000+ pools in real-time
- Generate and evaluate millions of routes efficiently
- Execute profitable arbitrage transactions automatically
- Maintain high reliability and performance under load

This design provides a solid foundation for continued development and enhancement of the arbitrage system.

## Solving

### Uniswap X

### 1inch Protocol

### CowSwap

### Jincubator Protocol

## Applications

### Cyclical Arbitrage

### Solving

### Market Making

### Liquidation Bots

### MEV Integration

### JIT Liquidity

### Intent Based Architecture

### Settlement Layer

## Jincubator Protocol

### Overview

The Protocol is part of an opinionated architecture for an intent based solving protocol which facilitates single and multichain solving of intents. Intents can be solved on a single chain without provisioning up front capital as we arbiters can confirm mandates have been met by solvers at execution time, thus solvers may use the swappers locked funds for execution. It does this by introducing a SolverPayload which can be executed by the Arbiter to ensure the EIP-712 signed mandate is met.

Key Goals for this design include

- Intent Based Architecture to improve execution
- Ability for Solvers to execute fills without needing to provide upfront capital

The protocol is inspired by or leverages the following key components

- [Tycho Execution](https://github.com/propeller-heads/tycho-execution): Is leveraged by Arbiters and solvers for executing most efficient routes.
- [Uniswap the-compact](https://github.com/uniswap/the-compact): The foundation of our resource locking mechanism
- [Uniswap Tribunal](https://github.com/uniswap/tribunal): Mandates and EIP-712 signing are heavily utilized throughout the protocol
- [Uniswap v4](https://github.com/uniswap/v4-core): We leverage V4 hooks for IntentSwap Execution on Uniswap V4.

> For a technical overview of this repository automatically generated by DeepWiki please
> [![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/jincubator/protocol)

### Protocol Architecture

```mermaid
graph TB
    subgraph "Intent Creation Layer"
        SWAPPER[Swapper]
        ROUTER[Uniswap V4 Router]
        HOOK[IntentSwapHook]
    end

    subgraph "Intent Solving Layer"
        SOLVER[Solver]
        ARBITER[Arbiter Contract]
        COMPACT[The Compact]
    end

    subgraph "Execution Layer"
        POOL_MANAGER[Pool Manager]
        CLAIM_TOKENS[ERC-6909 Claim Tokens]
        SETTLEMENT[Settlement Service]
    end

    subgraph "Cross-Chain Layer"
        MESSAGING[Cross-Chain Messaging]
        DESTINATION[Destination Chain]
    end

    %% Intent Flow
    SWAPPER -->|1. Create Intent| ROUTER
    ROUTER -->|2. Lock Tokens| HOOK
    HOOK -->|3. Mint Claims| CLAIM_TOKENS
    HOOK -->|4. Store Intent| COMPACT

    %% Solving Flow
    SOLVER -->|5. Submit Solution| ARBITER
    ARBITER -->|6. Verify Mandate| COMPACT
    ARBITER -->|7. Execute Payload| HOOK
    HOOK -->|8. Transfer Tokens| SOLVER

    %% Cross-Chain Flow
    ARBITER -->|9. Process Directive| MESSAGING
    MESSAGING -->|10. Cross-Chain| DESTINATION
    DESTINATION -->|11. Settlement| SETTLEMENT

    %% Styling
    classDef intentLayer fill:#e1f5fe
    classDef solvingLayer fill:#f3e5f5
    classDef executionLayer fill:#e8f5e8
    classDef crossChainLayer fill:#fff3e0

    class SWAPPER,ROUTER,HOOK intentLayer
    class SOLVER,ARBITER,COMPACT solvingLayer
    class POOL_MANAGER,CLAIM_TOKENS,SETTLEMENT executionLayer
    class MESSAGING,DESTINATION crossChainLayer
```

### Intent Swap Flow

```mermaid
sequenceDiagram
    participant S as Swapper
    participant R as Router
    participant H as IntentSwapHook
    participant PM as PoolManager
    participant CT as ClaimTokens
    participant SOL as Solver
    participant A as Arbiter

    Note over S,A: Intent Creation Phase
    S->>R: 1. swap() with IntentSwapAction.Create
    R->>H: 2. beforeSwap() with Create action
    H->>H: 3. createIntentSwap()
    H->>S: 4. transferFrom() input tokens
    H->>PM: 5. take() - mint ERC-6909 claims
    H->>H: 6. Store intent in mapping
    H-->>R: 7. Return BeforeSwapDelta

    Note over S,A: Intent Solving Phase
    SOL->>A: 8. fill() with SolverPayload
    A->>A: 9. Verify mandate & signatures
    A->>H: 10. executeSolverPayload()
    H->>H: 11. Execute solver calls
    H->>H: 12. Verify output amount
    H->>SOL: 13. Transfer output tokens
    H->>SOL: 14. Transfer input tokens
    H->>H: 15. Delete intent
    H-->>A: 16. Return success

    Note over S,A: Cross-Chain Settlement
    A->>A: 17. Process directive
    A->>A: 18. Cross-chain messaging
```

### Mandate Functionality

> :information_source: \_The following section was inspired by the [:unicorn: Tribunal](https://github.com/uniswap/tribunal) and updated to support monochain swaps which allow for solvers to execute intents with the swappers funds.

To settle a swap, the filler submits a "fill" request to the Arbiter contract. This consists of four core components:

1. **Claim**: Contains the chain ID of a Compact, its parameters, and its signatures.
2. **Mandate**: Specifies settlement conditions and amount derivation parameters specified by the sponsor.
3. **SolverPayload**: Specifies the transactions to execute to solve the intent
4. **Claimant**: Specifies the account that will receive the claimed tokens.

> Note for cross-chain message protocols integrating with Tribunal: inherit the `Arbiter` contract and override the `_processDirective` and `_quoteDirective` functions to implement the relevant directive processing logic for passing a message to the arbiter on the claim chain (or ensure that the necessary state is updated to allow for the arbiter to "pull" the message themselves). An ERC7683-compatible implementation is provided in `ERC7683Arbiter.sol`.
> ⚠️ Note: for cross-chain intents SolverPayloads can be executed on the destination chain, but the solver must provide their own funds and provisioning of the swapper tokens to the solver will be handled by the Settlement Service.

### Core Components

#### Claim Structure

```solidity
struct Claim {
    uint256 chainId;          // Claim processing chain ID
    Compact compact;          // The compact parameters
    bytes sponsorSignature;   // Authorization from the sponsor
    bytes allocatorSignature; // Authorization from the allocator
}
```

#### Compact Structure

```solidity
struct Compact {
    address arbiter;          // The account tasked with verifying and submitting the claim
    address sponsor;          // The account to source the tokens from
    uint256 nonce;            // A parameter to enforce replay protection, scoped to allocator
    uint256 expires;          // The time at which the claim expires
    uint256 id;               // The token ID of the ERC6909 token to allocate
    uint256 amount;           // The amount of ERC6909 tokens to allocate
}
```

#### Solver Payload Structure

```solidity
/**
 * @notice Defines a single contract call to be executed
 * @param to The target contract address
 * @param data The encoded function call data
 * @param value Amount of ETH to send
 */
struct Call {
    address to; // The target contract address
    bytes data; // The encoded function call data
    uint256 value; //Amount of ETH to send
}

struct SolverPayload {
    Call[] calls; //Array of contract calls to execute in sequence
}
```

#### Mandate Structure

```solidity
struct Mandate {
    address recipient;           // Recipient of filled tokens
    uint256 expires;             // Mandate expiration timestamp
    address token;               // Fill token (address(0) for native)
    uint256 minimumAmount;       // Minimum fill amount
    uint256 baselinePriorityFee; // Base fee threshold where scaling kicks in
    uint256 scalingFactor;       // Fee scaling multiplier (1e18 baseline)
    bytes32 salt;                // Preimage resistance parameter
}
```

### Process Flow

1. Fillers initiate by calling `fill(Claim calldata claim, Mandate calldata mandate, SolverPayload calldata solverPayload address claimant)` and providing any msg.value required for the settlement to pay to process the solution.
2. Arbiter verifies that the mandate has not expired by checking the mandate's `expires` timestamp
3. Computation phase:
   - Derives `mandateHash` using an EIP712 typehash for the mandate, destination chainId, tribunal address, and mandate data
   - Derives `claimHash` using an EIP712 typehash for the compact with the mandate as a witness and the compact data including the `mandateHash`
   - Ensures that the `claimHash` has not already been used and marks it as filled
   - Calculates `fillAmount` and `claimAmount` based on:
     - Compact `amount`
     - Mandate parameters (`minimumAmount`, `baselinePriorityFee`, `scalingFactor`)
     - `tx.gasprice` and `block.basefee`
     - NOTE: `scalingFactor` will result in an increased `fillAmount` if `> 1e18` or a decreased `claimAmount` if `< 1e18`
     - NOTE: `scalingFactor` is combined with `tx.gasprice - (block.basefee + baselinePriorityFee)` (or 0 if it would otherwise be negative) before being applied to the amount
4. Execution phase:
   - Executes: The Solver Payload using the funds locked in the-compact and ensures that this results in output funds (tokens or ETH) >= that specified in the mandate. **IF NOT REVERT**
   - Transfers `fillAmount` of `token` to mandate `recipient`
   - Transfers Compact `amount` of `token` to the filler.
   - Processes directive via `_processDirective(chainId, compact, sponsorSignature, allocatorSignature, mandateHash, claimant, claimAmount)`

There are also a few view functions:

- `quote(Claim calldata claim, Mandate calldata mandate, address claimant)` will suggest a dispensation amount (function of gas on claim chain + any additional "protocol overhead" if using push-based cross-chain messaging)
- `filled(bytes32 claimHash)` will check if a given claim hash has already been filled (used)
- `getCompactWitnessDetails()` will return the Mandate witness typestring and that correlates token + amount arguments (so frontends can show context about the token and use decimal inputs)
- `deriveMandateHash(Mandate calldata mandate)` will return the EIP712 typehash for the mandate
- `deriveClaimHash(Compact calldata compact, bytes32 mandateHash)` will return the unique claim hash for a compact and mandate combination
- `deriveAmounts(uint256 maximumAmount, uint256 minimumAmount, uint256 baselinePriorityFee, uint256 scalingFactor)` will return the fill and claim amounts based on the parameters; the base fee and priority fee will be applied to the amount and so should be tuned in the call appropriately

#### Mandate EIP-712 Typehash

This is what swappers will see as their witness data when signing a `Compact`:

```solidity
struct Mandate {
    uint256 chainId;
    address tribunal;
    address recipient;
    uint256 expires;
    address token;
    uint256 minimumAmount;
    uint256 baselinePriorityFee;
    uint256 scalingFactor;
    bytes32 salt;
}
```

### ERC7683 Integration

The `ERC7683Arbiter` contract implements the `IDestinationSettler` interface from ERC7683, allowing for standardized cross-chain settlement:

```solidity
interface IDestinationSettler {
    function fill(bytes32 orderId, bytes calldata originData, bytes calldata fillerData) external;
}
```

This implementation allows the Tribunal to be used with any ERC7683-compatible cross-chain messaging system.

### IntentSwap Implementation

#### IntentSwap Structure

```solidity
struct IntentSwap {
    bytes32 salt;                    // Unique identifier for the intent
    uint256 createDeadline;          // Deadline for intent creation
    uint256 solveDeadline;           // Deadline for intent solving
    uint256 executeDeadline;         // Deadline for intent execution
    address swapper;                 // Address of the swapper
    SwapParams swapParams;           // Uniswap V4 swap parameters
    uint256 outputAmountRequired;    // Required output amount
}
```

#### IntentSwapHook Implementation

The `IntentSwapHook` contract implements the core logic for intent-based swaps using Uniswap V4 hooks:

```solidity
contract IntentSwapHook is BaseAsyncSwap, IIntentSwapHook {
    // Intent storage
    mapping(bytes32 => IntentSwap) public intents;

    // Hook implementation
    function _beforeSwap(
        address swapper,
        PoolKey calldata key,
        SwapParams calldata swapParams,
        bytes calldata hookData
    ) internal override returns (BeforeSwapDelta delta, bytes memory returnData) {
        // Decode action and handle accordingly
        IntentSwapAction action = abi.decode(hookData, (IntentSwapAction));

        if (action == IntentSwapAction.Create) {
            return _handleCreate(swapper, key, swapParams, hookData);
        } else if (action == IntentSwapAction.Solve) {
            return _handleSolve(swapper, key, swapParams, hookData);
        }
        // ... other actions
    }
}
```

#### Solver Integration

Solvers interact with the protocol through the `SolverPayload` structure, which allows them to specify the exact sequence of calls needed to fulfill an intent:

```solidity
function executeSolverPayload(
    SolverPayload memory solverPayload,
    address outputToken,
    uint256 minimumOutputAmount,
    address inputToken,
    uint256 inputAmount,
    address solver,
    IntentSwap memory intentSwap,
    PoolKey memory key
) public returns (bool success) {
    // Execute all calls in sequence
    for (uint256 i = 0; i < solverPayload.calls.length; i++) {
        Call memory call = solverPayload.calls[i];
        (success,) = call.to.call(call.callData);
        if (!success) {
            return false;
        }
    }

    // Verify output amount meets requirements
    uint256 outputBalance = IERC20(outputToken).balanceOf(address(this));
    if (outputBalance < minimumOutputAmount) {
        return false;
    }

    // Transfer tokens to solver
    IERC20(outputToken).transfer(solver, outputBalance);
    IERC20(inputToken).transfer(solver, inputAmount);

    return true;
}
```

### Cross Chain Intents

### Portfolio Management

### Settlement Layer

### Advanced Topics

### Route Mathematics and Graph Analysis

### Solution Encoding and Contract Integration

### Data Collection and Streaming Architecture
