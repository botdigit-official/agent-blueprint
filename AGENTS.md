# AGENTS.md — Entry Point for Coding Agents

You are entering a project that uses **Agent Blueprint**.

Before implementing any significant change:

1. **Discover** the repository structure.
2. **Identify** the technology stack.
3. **Identify** the project type.
4. **Identify** the business domain.
5. **Read** existing project documentation.
6. **Detect** existing architecture.
7. **Detect** existing conventions.
8. **Identify** current problems.
9. **Determine** which skills apply.
10. **Never** introduce unnecessary technologies.

---

## The Core Rule

> **The agent must adapt to the project. The project must not be forced to adapt to the skill.**

Do not assume:
- Framework
- Database
- Architecture
- Deployment target
- Business model
- Authentication mechanism
- Payment model
- Scaling requirements
- Programming language

**Inspect first. Always.**

---

## How to Use This Repository

### Step 1 — Read the Orchestrator

Start with `skills/00-orchestrator/SKILL.md`. It contains:

- The workflow classification (greenfield / existing / broken)
- Project detection logic
- Skill selection rules
- Decision trees for common scenarios

### Step 2 — Run Discovery

Follow `skills/01-discovery/SKILL.md` to locate the actual project within the repository (if it is nested, monorepo, or partially present).

### Step 3 — Build Project Context

Follow `skills/02-project-context/SKILL.md` to detect and record:

- Programming language(s)
- Framework(s)
- Database(s)
- Cache / queue / search
- Infrastructure / deployment
- CI/CD
- Third-party services

### Step 4 — Understand the Business

Follow `skills/03-business-architecture/SKILL.md` to understand:

- Who the actors are
- What the business does
- What the rules are
- What the workflows are
- What state machines exist
- What must never change

### Step 5 — Audit Before Modifying

If the project already has code:

- Run `skills/06-codebase-audit/SKILL.md`
- Run `skills/07-security/SKILL.md` if the project handles user data, payments, auth, or external integrations
- Run `skills/04-architecture/SKILL.md` to understand current architecture and gaps

### Step 6 — Select the Minimum Skill Set

Use the orchestrator's skill-selection logic. Activate only what is needed:

```
core
+ business-architecture          (if business logic exists or is being added)
+ architecture                   (if architecture decisions are needed)
+ documentation                  (always — every agent leaves docs better)
+ [detected stack skill]         (e.g., rust, typescript, python)
+ [detected framework skill]     (e.g., nextjs, laravel, django)
+ [detected infrastructure skill] (e.g., postgres, redis, docker)
+ security                        (if applicable)
+ testing                         (if code changes are planned)
+ performance                     (if performance is a concern)
```

### Step 7 — Implement

After understanding and auditing:

- Read the relevant stack skill for implementation conventions
- Read the relevant framework skill for framework-specific patterns
- Implement following the project's existing conventions
- Write tests for every major change
- Update documentation when architecture or business logic changes

### Step 8 — Verify

- Run `skills/08-testing/SKILL.md` to verify test coverage
- Run `skills/07-security/SKILL.md` again if security-relevant changes were made
- Update `CHANGELOG.md` and relevant docs

---

## Project State Classification

The orchestrator classifies the project into one of these states:

| State | Meaning | Approach |
|---|---|---|
| **Greenfield** | No code yet | Establish foundations; choose architecture deliberately |
| **Healthy** | Code exists, well-structured | Improve incrementally; preserve what works |
| **Partial** | Code exists, incomplete or inconsistent | Reconcile existing implementation before redesign |
| **Broken** | Code exists, fundamental problems | Stabilize first; fix highest-risk issues; document as you go |

---

## Minimum Sufficient Documentation

Do not create every document in `templates/`. Create only what the project needs:

| Project Type | Minimum Docs |
|---|---|
| Script / small tool | `README.md` |
| Small web app | `PROJECT.md`, `ARCHITECTURE.md`, `DATABASE.md`, `API.md`, `SECURITY.md` |
| SaaS / marketplace | + `BUSINESS.md`, `BUSINESS-MODEL.md`, `ACTORS.md`, `TESTING.md`, `DEPLOYMENT.md`, `OPERATIONS.md` |
| Regulated system | + `COMPLIANCE.md`, `AUDITS/`, data governance, disaster recovery |

The orchestrator decides. Use judgment. When in doubt, err toward more documentation for complex or risky projects, and less for simple ones.

---

## What Every Agent Must Leave Behind

## Mandatory Execution Protocol: Task List, Docs Sync & Changelog
 
 Whenever an agent works on a project:
 
 1. **Maintain an Active Task List (`TASK.md`)**:
    - Before writing code, break the task into discrete checklist steps (`- [ ] Step`).
    - Check them off (`- [x] Step`) as you progress.
 2. **Sync Living Documentation (`docs/`)**:
    - If you add or modify an API endpoint $\to$ update `docs/03-engineering/api.md`
    - If you add or modify a database table or migration $\to$ update `docs/03-engineering/database.md`
    - If you change a business rule or pricing tier $\to$ update `docs/01-business/business-model.md`
    - If you make a significant architecture decision $\to$ write an ADR in `docs/02-architecture/decisions/`
 3. **Record Every Change in `CHANGELOG.md`**:
    - Append an entry to `CHANGELOG.md` under `## [Unreleased]` describing:
      - What was added, changed, fixed, or removed
      - Exact file paths touched
      - Reason for change
 4. **Run Verification**:
    - Run the automated test suite (`cargo test`, `npm test`, etc.) and ensure 0 failures.
 
 ---
 
 ## What Every Agent Must Verify Before Exit
 
 - [ ] `TASK.md` is fully updated with completed items checked off
 - [ ] `CHANGELOG.md` has an explicit audit trail entry for this session
 - [ ] Living documentation in `docs/` reflects the new reality
 - [ ] All automated tests pass with 0 failures
 - [ ] New dependencies are justified in an ADR or comment

---

## Skill Metadata

Every skill in `skills/` includes a metadata header:

```yaml
skill:
  name: skill-name
  version: 1.0.0
  compatible:
    project_skills: ">=1.0"
  requires:
    - discovery
  outputs:
    - some-document.md
```

The orchestrator uses this metadata for skill selection and compatibility checking.

---

## Discovery

The repository is discoverable from GitHub. An agent that finds this repository can:

1. Clone or inspect it
2. Read `AGENTS.md` (this file)
3. Read `skills/00-orchestrator/SKILL.md`
4. Use the skills to work on any project

No installation, no setup, no configuration required. Just clone and read.

---

## Contributing

See `CONTRIBUTING.md` for how to add skills, stack adapters, framework adapters, templates, and examples.

---

## License

MIT — see `LICENSE`.
