<div align="center">

# 📐 Agent Blueprint

**The universal blueprint and skill standard for AI coding agents — teaching agents how to think, audit, architect, and properly document any software project.**

[![CI](https://github.com/botdigit-official/agent-blueprint/actions/workflows/ci.yml/badge.svg)](https://github.com/botdigit-official/agent-blueprint/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![Agents](https://img.shields.io/badge/Agents-Antigravity%20%7C%20Claude%20Code%20%7C%20Cursor%20%7C%20Windsurf%20%7C%20Cline-orange)](#)
[![GitHub Stars](https://img.shields.io/github/stars/botdigit-official/agent-blueprint?style=social)](https://github.com/botdigit-official/agent-blueprint)

<br/>

> *"The agent must adapt to the project. The project must not be forced to adapt to the skill."*

</div>

---

## ⚡ 1-Minute Quickstart

Install **Agent Blueprint** into any project with your preferred method:

### Option A: One-Liner (Recommended)
```bash
curl -fsSL https://raw.githubusercontent.com/botdigit-official/agent-blueprint/main/install.sh | bash
```

### Option B: Via npx / Node
```bash
npx agent-blueprint init
```

### Option C: Git Clone
```bash
git clone --depth 1 https://github.com/botdigit-official/agent-blueprint.git ~/.agent-blueprint
~/.agent-blueprint/install.sh .
```

### 🤖 Multi-Agent Compatibility Out of the Box
| AI Tool | Configuration File Generated | Workflow Activated |
|---|---|---|
| **Google Antigravity** | `AGENTS.md` + `.agents/skills/` | Full modular skill hierarchy |
| **Claude Code** | `CLAUDE.md` | Context & architecture guardrails |
| **Cursor AI** | `.cursorrules` | Architectural & testing rules |
| **Windsurf / Cline / Aider** | `AGENTS.md` | Autonomous discovery & audit |

---

## What is Agent Blueprint?

Most AI coding agents jump straight to generating code or rewriting working systems without understanding the domain, architecture, dependencies, or conventions.

**Agent Blueprint** is a composable, technology-agnostic skill and documentation standard. It provides structured guidance so any AI agent can:

1. **Discover** the project layout and entry points across the repo
2. **Understand** its stack, framework, database, and maturity
3. **Audit** what exists before modifying or breaking anything
4. **Document** findings into living, structured architectural documentation
5. **Architect** changes grounded in real business needs, not guesswork
6. **Plan** features with Architectural Decision Records (ADRs)
7. **Implement** following existing patterns and conventions
8. **Test & Verify** to preserve regression safety and data integrity
9. **Review & Audit** against security and performance baselines

> 🤖 **Direct LLM Ingestion**: Feed [**`llms.txt`**](llms.txt) to web crawlers/agents or copy the 1-click system prompt in [**`PROMPT.md`**](PROMPT.md).

---

## ⚖️ Why You Need This: Raw AI vs. Agent Blueprint

| Scenario | Raw AI / Default Copilot | With Agent Blueprint |
|---|---|---|
| **Entering a project** | Guesses architecture, invents new dependencies | Runs discovery, detects existing stack, checks `docs/` |
| **Refactoring code** | Often rewrites working systems and breaks logic | Obeys established ADRs, respects existing state machines |
| **Documentation** | Leaves zero comments and zero docs | Automatically updates `docs/` living documentation |
| **New Features** | Injects unverified patterns | Writes automated tests, updates API specs |
| **Multi-Agent Teams** | Claude Code, Cursor, and Antigravity fight | All agents share a single source of truth |

---

## Core Philosophy

These rules live at the top of every skill and guide every agent decision:

1. **Understand before changing.**
2. **Inspect before assuming.**
3. **Document before redesigning.**
4. **Prefer simple architecture.**
5. **Use the project's existing technology when practical.**
6. **Do not introduce technology without a measurable reason.**
7. **Business logic comes before code structure.**
8. **Security and data integrity come before features.**
9. **Deterministic tools before AI.**
10. **AI only where reasoning adds value.**
11. **APIs only where they provide unique value.**
12. **Never rewrite working systems unnecessarily.**
13. **Preserve existing functionality unless explicitly deprecated.**
14. **Every architectural decision needs a reason (ADR).**
15. **Every major change needs automated tests.**
16. **Every project needs a source of truth.**
17. **Every agent must leave the project better documented than it found it.**

---

## How It Works

### Composable Skills, Not a Giant System Prompt

Agent Blueprint is **not** a single unwieldy prompt. It is a directory of modular, composable skills. The autonomous orchestrator selects only what applies to the current project:

```
skills/
├── 00-orchestrator/           # Triage, detect, activate
├── 01-discovery/              # Find project roots in monorepos or nested dirs
├── 02-project-context/        # Stack, framework, database, infrastructure
├── 03-business-architecture/  # Domain, actors, business rules, workflows
├── 04-architecture/           # Architectural review, ADRs, gaps
├── 05-documentation/          # Living documentation standard
├── 06-codebase-audit/         # Code-level inspection and hygiene
├── 07-security/               # Security review, secrets, CSRF, auth audit
├── 08-testing/                # Test strategy, coverage, regression suite
├── 09-performance/            # Latency, queries, throughput, bottlenecks
└── 10-audit/                  # Combined forensic audit workflow
```

Stack & framework adapters activate automatically based on detected project manifests (`Cargo.toml`, `package.json`, `pyproject.toml`, `go.mod`, `pom.xml`, etc.):

```
stacks/                frameworks/
├── rust/              ├── axum/
├── typescript/        ├── nextjs/
├── python/            ├── react/
├── go/                ├── fastapi/
├── php/               ├── django/
├── java/              ├── laravel/
├── ruby/              ├── spring/
└── dotnet/            └── rails/
```

### Minimum Sufficient Documentation

Not every project needs 50 documents. Agent Blueprint selects the minimum documentation set appropriate to the project's size and risk:

| Project Scope | Required Documentation Baseline |
|---|---|
| **Script / CLI Tool** | `README.md` only |
| **Web App / API** | Project Brief, Architecture, Database, API Spec, Security |
| **SaaS / Marketplace** | + Business Architecture, Testing, Deployment, Runbook |
| **Regulated / Enterprise** | + Compliance, Audit Trail, Data Governance, Disaster Recovery |

---

## Repository Structure

```
agent-blueprint/
├── README.md                  # Project overview & quickstart
├── AGENTS.md                  # Primary instruction manual for coding agents
├── CONTRIBUTING.md            # Guidelines for community skill additions
├── LICENSE                    # MIT License
├── install.sh                 # 1-click project linker & installer
│
├── skills/                    # Core, technology-independent skills
│   ├── 00-orchestrator/
│   ├── 01-discovery/
│   ├── 02-project-context/
│   ├── 03-business-architecture/
│   ├── 04-architecture/
│   ├── 05-documentation/
│   ├── 06-codebase-audit/
│   ├── 07-security/
│   ├── 08-testing/
│   ├── 09-performance/
│   └── 10-audit/
│
├── stacks/                    # Technology adapters (Rust, TS, Python, Go, etc.)
├── frameworks/                # Framework adapters (Next.js, Axum, FastAPI, etc.)
│
├── templates/                 # Production-grade documentation templates
│   ├── project-brief/         # Initial scoping & objectives
│   ├── business-requirements/ # Domain entities & actor rules
│   ├── architecture/          # System design & component diagrams
│   ├── adr/                   # Architecture Decision Records
│   ├── api-spec/              # REST / GraphQL API contracts
│   ├── database/              # Schema, migrations & relationships
│   ├── security/              # Threat models & access controls
│   ├── testing/               # Quality gates & verification plans
│   ├── deployment/            # CI/CD pipelines & hosting
│   ├── runbook/               # Incident response & operational SOPs
│   └── changelog/             # Semantic version releases
│
└── examples/                  # Real-world audits & walkthroughs
    ├── botdigit-site/         # Multi-tenant directory & site builder
    ├── saas/                  # Multi-tier subscription platform
    ├── marketplace/           # Two-sided buyer/seller marketplace
    ├── fintech/               # High-security payment processing
    ├── ecommerce/             # Catalog, cart, and order fulfillment
    ├── directory/             # Geo-spatial search & discovery
    ├── mobile-app/            # Cross-platform iOS/Android app
    ├── ai-product/            # LLM agents & deterministic pipelines
    └── internal-tool/         # Backoffice admin control panels
```

---

## Quick Start

### For AI Coding Agents
Read [`AGENTS.md`](AGENTS.md) first. It specifies the step-by-step discovery, inspection, and execution lifecycle.

### For Developers & Tech Leads
1. Browse [`skills/`](skills/) to understand the reasoning frameworks.
2. Check [`templates/`](templates/) for ready-to-use architecture and documentation templates.
3. Review [`examples/botdigit-site/`](examples/botdigit-site/) to see a real forensic audit and remediation.

---

## Contributing

We welcome contributions! You can add new technology stacks, framework adapters, or domain patterns:
1. Review [`CONTRIBUTING.md`](CONTRIBUTING.md).
2. Follow the metadata schema in `skills/00-orchestrator/SKILL.md`.
3. Submit a Pull Request.

---

## Frequently Asked Questions (FAQ)

### How does Agent Blueprint prevent AI from breaking existing code?
Agent Blueprint enforces a strict rule: **"The agent must adapt to the project; the project must not adapt to the skill."** Before an agent is allowed to write or edit code, it must execute Discovery, inspect existing frameworks, review active state machines, and check existing unit tests.

### Does this work with Cursor, Claude Code, and Antigravity?
**Yes.** When you run `./install.sh` or `npx agent-blueprint init`, it automatically creates `.cursorrules` (for Cursor), `CLAUDE.md` (for Claude Code), and `AGENTS.md` + `.agents/skills/` (for Antigravity, Cline, Windsurf). All agents follow the exact same architectural guidelines.

### What is "Living Documentation"?
Instead of outdated wikis or empty READMEs, Agent Blueprint establishes a structured `docs/` hierarchy (Business Model, Architecture Decision Records, Database Schemas, API Specs, Security). Every time an agent modifies system behavior, it is required to update the corresponding document.

### How is this different from a system prompt?
A single giant prompt gets truncated and forgotten in long context windows. Agent Blueprint is a **modular, composable skill hierarchy**. The autonomous orchestrator activates only the skills required for the specific task at hand.

---

## License

MIT © [BotDigit](https://botdigit.com) — see [LICENSE](LICENSE).

