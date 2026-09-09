# Internal Tool Example

This directory shows how Project Skills OS applies to an internal tool.

## Archetype

A tool used by a team or organization internally:
- Admin dashboard
- Data management tool
- Batch processing tool
- Reporting or analytics tool
- CI/CD helper
- Development tool

## Key Differences from Customer-Facing Products

- The users are known (your team)
- The stakes may be lower or higher (internal tools that touch production data have high stakes)
- The audience is small
- Documentation can be more concise, but should not be absent

## Skills Activated

### Always
- 00-orchestrator
- 01-discovery
- 05-documentation

### Conditional
- 03-business-architecture (if the tool has business logic — even internal tools have rules)
- 04-architecture
- 06-codebase-audit
- 07-security (if the tool touches sensitive data, production systems, or has privileged access — mandatory if it does)
- 08-testing (if changes are planned)

### Stack (detected)
- stacks/[language]
- frameworks/[framework]
- stacks/[database]

## Minimum Documentation

Tier 1 or 2 for simple tools. Tier 3 for tools that touch production data or have privileged access.

A simple admin script may only need a README. A tool that manages production databases needs documentation, security review, and tests.

