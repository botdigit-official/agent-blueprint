# 05-Documentation Skill

**Version:** 1.0.0
**Compatible:** project_skills >= 1.0
**Requires:** discovery
**Outputs:** documentation-map.md, and any documents from templates/ as appropriate

---

## Purpose

Establish and maintain living documentation for the project. Every agent must leave the project better documented than it found it.

Documentation is not a one-time task. It is a continuous obligation.

---

## Principle: Minimum Sufficient Documentation

Do not create every document. Create the minimum set that allows a person (or agent) to understand, operate, maintain, and safely change the project.

### Documentation Tiers

| Tier | Project Type | Documents |
|---|---|---|
| 1 — Minimal | Script, small tool, simple service | README.md |
| 2 — Standard | Small web app, API, internal tool | README + PROJECT + ARCHITECTURE + DATABASE + API + SECURITY |
| 3 — Full | SaaS, marketplace, commercial product | Tier 2 + BUSINESS + BUSINESS-MODEL + ACTORS + TESTING + DEPLOYMENT + OPERATIONS |
| 4 — Regulated | System with compliance, audit, or data governance requirements | Tier 3 + COMPLIANCE + AUDIT + DATA-GOVERNANCE + DISASTER-RECOVERY |

The orchestrator selects the tier. Within a tier, use judgment — a simple SaaS may not need all of Tier 3 immediately.

---

## Documentation Standard

Every project using Agent Blueprint should follow this documentation structure:

```
docs/
├── 00-project/
│   ├── overview.md       # What this project is
│   ├── goals.md          # Why it exists, what it aims to achieve
│   ├── scope.md          # What is in scope and out of scope
│   └── glossary.md       # Domain terms
│
├── 01-business/
│   ├── business-model.md
│   ├── actors.md
│   ├── processes.md
│   ├── business-rules.md
│   └── state-machines.md
│
├── 02-architecture/
│   ├── architecture.md
│   ├── domains.md
│   ├── data-flow.md
│   ├── integrations.md
│   └── decisions/        # ADRs
│
├── 03-engineering/
│   ├── code-structure.md
│   ├── database.md
│   ├── api.md
│   └── frontend.md
│
├── 04-security/
│   └── security.md
│
├── 05-testing/
│   └── testing.md
│
├── 06-performance/
│   └── performance.md
│
├── 07-deployment/
│   └── deployment.md
│
├── 08-operations/
│   └── operations.md
│
├── 09-audits/
│   └── [audit reports]
│
└── 10-roadmap/
    └── roadmap.md
```

Not every project needs every directory. Create only what applies.

---

## Documentation Rules

1. Documentation lives in `docs/` or at the project root for top-level files (README, PROJECT.md, etc.).
2. Every document has a last-reviewed date and reviewer.
3. Every document that describes behavior must be updateable by the agent that changes the behavior.
4. If code and documentation disagree, the agent must resolve the disagreement — not assume the documentation is wrong.
5. Outdated documentation is worse than no documentation. When in doubt, update or remove.
6. Do not duplicate information across documents. Reference instead.

---

## What Every Agent Must Update

After making changes, the agent must verify:

- [ ] README.md reflects the current state
- [ ] Any architecture change is reflected in architecture docs
- [ ] Any business logic change is reflected in business docs
- [ ] Any new API is documented
- [ ] Any new database schema is documented
- [ ] Security-relevant changes are flagged
- [ ] Changelog is updated
- [ ] New dependencies are justified

---

## Output

### documentation-map.md

```
Documentation Map
=================
Tier: [1 | 2 | 3 | 4]
Documents:
  - [path]: [status: present | missing | outdated], [last reviewed]
Gaps:
  - [document that should exist but does not]
Outdated:
  - [document that exists but is outdated]
```
