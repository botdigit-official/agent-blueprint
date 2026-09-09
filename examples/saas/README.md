# SaaS Example

This directory shows how Project Skills OS applies to a typical SaaS project.

## Archetype

A multi-user web application with:
- Authentication and authorization
- Subscription or usage-based billing
- User data and accounts
- API and/or web UI
- Third-party integrations (payments, email, etc.)

## Skills Activated

### Always
- 00-orchestrator
- 01-discovery
- 05-documentation

### Conditional (typical for SaaS)
- 03-business-architecture (business logic — billing, accounts, permissions)
- 04-architecture (architecture decisions)
- 06-codebase-audit (existing code inspection)
- 07-security (user data, payments, auth — mandatory)
- 08-testing (code changes planned)
- 09-performance (if performance is a concern)

### Stack (detected)
- stacks/[language]
- frameworks/[framework]
- stacks/[database]
- stacks/[infrastructure]

## Minimum Documentation (Tier 3)

- README.md
- PROJECT.md
- BUSINESS.md / BUSINESS-MODEL.md
- ACTORS.md
- ARCHITECTURE.md
- DATABASE.md
- API.md
- SECURITY.md
- TESTING.md
- DEPLOYMENT.md
- OPERATIONS.md
- CHANGELOG.md

