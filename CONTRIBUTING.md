# Contributing to Agent Blueprint

Thank you for contributing. This repository is open source under the MIT license.

## What This Repository Is

A composable skill system for AI coding agents. Skills are small, focused, technology-agnostic guidance documents that teach agents how to think about projects.

## What This Repository Is Not

- A single master prompt
- A framework prescription
- A "use this tech stack" recommendation
- A BotDigit-specific guide

## How to Add a Skill

1. Create a directory in `skills/` with a numeric prefix and kebab-name:
   ```
   skills/XX-skill-name/
   ```
2. Add a `SKILL.md` file with:
   - A YAML metadata header (see the schema below)
   - The skill's reasoning framework (not just instructions)
   - What the skill produces (outputs)
   - What the skill requires (prerequisites)
3. Add the skill to `skills/00-orchestrator/skill-selection.md` if the orchestrator should select it.
4. Update this file and the README if the skill list changes.

### Skill Metadata Schema

```yaml
skill:
  name: skill-name           # kebab-case, matches directory name
  version: X.Y.Z             # SemVer
  compatible:
    project_skills: ">=1.0"  # min version of this repository
  requires:                  # skills that must be activated first
    - discovery
  outputs:                   # artifacts this skill produces
    - path/to/output.md
  conflicts:                 # skills that should not be active simultaneously
    - unrelated-skill
```

### Skill Design Principles

- **Teach reasoning, not just steps.** A skill should explain how to think about the area, not just what commands to run.
- **Be technology-agnostic where possible.** Core skills should not assume a language, framework, or database. Stack skills are where technology-specific guidance lives.
- **Be specific where specificity helps.** Framework skills should be specific to the framework. Security skill should be specific about security.
- **Include anti-patterns.** Tell the agent what not to do. This is as important as what to do.
- **Be composable.** A skill should work alongside other skills, not conflict with them. Use the `conflicts` field if a conflict is unavoidable.

## How to Add a Stack Adapter

1. Create `stacks/[language]/SKILL.md`
2. Include the metadata header
3. Focus on the language's conventions, anti-patterns, and tooling
4. Do not prescribe a framework. That belongs in `frameworks/`.
5. Update `skills/00-orchestrator/skill-selection.md` if the orchestrator doesn't already select it based on detection.

## How to Add a Framework Adapter

1. Create `frameworks/[framework]/SKILL.md`
2. Include the metadata header
3. Focus on the framework's architecture, conventions, and anti-patterns
4. Note the required stack skill in `requires`
5. Update `skills/00-orchestrator/skill-selection.md`

## How to Add a Template

1. Create `templates/[template-name]/TEMPLATE.md`
2. Use placeholder fields in `[brackets]`
3. Include enough structure to be useful, not so much that it forces overhead
4. Update relevant skill SKILL.md files if the template is referenced

## How to Add an Example

1. Create `examples/[archetype]/README.md`
2. Describe the archetype and which skills apply
3. Show how the skills adapt to that archetype
4. Do not prescribe a specific technology for the archetype — the skills should adapt

## How to Add a BotDigit Walkthrough

The `examples/botdigit-site/` directory is reserved for a real walkthrough of how the skills apply to BotDigit. Update it when the audit or understanding of the project evolves.

Do not make this directory prescriptive. It is a demonstration of the skills in action, not a specification for BotDigit's architecture.

## Versioning

- The repository version is in the root `README.md` and in skill metadata.
- Each skill has its own version in its `SKILL.md` header.
- Breaking changes to a skill should bump the major version.
- New skills start at `1.0.0`.

## Review Process

- New skills and adapters should be reviewed for:
  - Clarity
  - Correctness
  - Composability with existing skills
  - Absence of stack-forcing or over-engineering
  - Adherence to the core philosophy (especially "the agent adapts to the project")

## The Core Rule

**The agent must adapt to the project. The project must not be forced to adapt to the skill.**

Every contribution should be evaluated against this rule.
