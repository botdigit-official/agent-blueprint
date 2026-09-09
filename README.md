# Project Skills OS

**An open-source skill system that teaches AI agents how to think about projects — not merely how to write code.**

The agent must adapt to the project. The project must not be forced to adapt to the skill.

---

## What is this?

Project Skills OS is a composable, technology-agnostic skill repository for AI coding agents. It provides structured guidance — discoverable from GitHub — so an agent can:

1. **Discover** a project from its repository
2. **Understand** its stack, domain, and maturity
3. **Audit** what exists before modifying anything
4. **Document** findings into a living knowledge base
5. **Architect** improvements grounded in business needs
6. **Plan** changes with reasoning, not guesswork
7. **Implement** following the project's existing conventions
8. **Test** to preserve and verify functionality
9. **Review** changes against standards
10. **Maintain** the project over time
11. **Scale** when the project outgrows its current shape

---

## Core Philosophy

These rules live at the top of every skill and guide every decision:

1. Understand before changing.
2. Inspect before assuming.
3. Document before redesigning.
4. Prefer simple architecture.
5. Use the project's existing technology when practical.
6. Do not introduce technology without a measurable reason.
7. Business logic comes before code structure.
8. Security and data integrity come before features.
9. Deterministic tools before AI.
10. AI only where reasoning adds value.
11. APIs only where they provide unique value.
12. Never rewrite working systems unnecessarily.
13. Preserve existing functionality unless explicitly deprecated.
14. Every architectural decision needs a reason.
15. Every major change needs tests.
16. Every project needs a source of truth.
17. Every agent must leave the project better documented than it found it.

---

## How It Works

### Composable Skills, Not a Master Prompt

Project Skills OS is **not** a single giant prompt. It is a directory of small, composable skills. The orchestrator skill selects only what applies to the current project:

```
skills/
├── 00-orchestrator/     # Triage, detect, select
├── 01-discovery/        # Find the project in the repo
├── 02-project-context/  # Stack, framework, infrastructure
├── 03-business-architecture/  # Domain, actors, rules, flows
├── 04-architecture/     # Architecture review, ADR, gaps
├── 05-documentation/    # Living docs standard
├── 06-codebase-audit/   # Code-level inspection
├── 07-security/         # Security review
├── 08-testing/          # Test strategy
├── 09-performance/      # Performance review
└── 10-audit/            # Combined audit workflow
```

Stack-specific adapters activate automatically based on detection:

```
stacks/
├── rust/
├── typescript/
├── python/
├── php/
├── go/
├── java/
├── ruby/
└── dotnet/
```

### Automatic Technology Detection

The orchestrator inspects `package.json`, `composer.json`, `Cargo.toml`, `go.mod`, `pyproject.toml`, `requirements.txt`, `pom.xml`, `build.gradle`, `Gemfile`, `*.csproj`, `Dockerfile`, `docker-compose.yml`, `terraform/` — and activates only the skills that match the detected stack.

### Minimum Sufficient Documentation

Not every project needs 50 documents. The orchestrator selects the minimum documentation set appropriate to the project's size and risk:

| Project Size | Documentation Set |
|---|---|
| Script / small tool | README only |
| Small web app | Project, Architecture, Database, API, Security |
| SaaS / marketplace | + Business, Testing, Deployment, Operations |
| Regulated system | + Compliance, Audit, Data Governance, DR |

---

## Repository Structure

```
project-skills/
├── README.md
├── AGENTS.md              # Entry point for coding agents
├── LICENSE
│
├── skills/                # Core, technology-independent skills
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
├── stacks/                # Technology adapters
│   ├── javascript/
│   ├── typescript/
│   ├── python/
│   ├── php/
│   ├── rust/
│   ├── go/
│   ├── java/
│   ├── ruby/
│   └── dotnet/
│
├── frameworks/            # Framework adapters
│   ├── nextjs/
│   ├── react/
│   ├── laravel/
│   ├── django/
│   ├── fastapi/
│   ├── axum/
│   ├── rails/
│   └── spring/
│
├── templates/             # Documentation and artifact templates
│   ├── project-brief/
│   ├── business-requirements/
│   ├── architecture/
│   ├── adr/
│   ├── api-spec/
│   ├── database/
│   ├── security/
│   ├── testing/
│   ├── deployment/
│   ├── runbook/
│   └── changelog/
│
└── examples/              # Reference implementations
    ├── botdigit-site/
    ├── saas/
    ├── marketplace/
    ├── ecommerce/
    ├── fintech/
    ├── directory/
    ├── mobile-app/
    ├── ai-product/
    └── internal-tool/
```

---

## Quick Start

### For AI Agents

Read `AGENTS.md` first. It tells you how to use this repository.

### For Humans

1. Browse `skills/` to understand the skill taxonomy.
2. Read `skills/00-orchestrator/SKILL.md` to see how skills are selected.
3. Look at `examples/botdigit-site/` for a real-world walkthrough.
4. Read `CONTRIBUTING.md` to add skills or adapters.

### For Repository Maintainers

Pin a known skill version in your project config:

```yaml
# .project-skills/config.yaml
project_skills:
  version: "1.0"
  skills:
    - architecture-review: "1.2.0"
    - security-review: "1.0.0"
```

---

## Adding a New Skill

1. Create `skills/XX-skill-name/SKILL.md`
2. Include metadata header (name, version, compatible ranges, requires, outputs)
3. Include the skill's reasoning framework, not just instructions
4. Add to `skills/00-orchestrator/skill-selection.md` if the orchestrator should select it
5. Update this README's skill list

See `skills/00-orchestrator/SKILL.md` for the skill metadata schema.

---

## License

MIT — see `LICENSE`.
