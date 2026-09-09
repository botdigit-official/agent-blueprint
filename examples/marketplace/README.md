# Marketplace Example

This directory shows how Project Skills OS applies to a marketplace project.

## Archetype

A two-sided or multi-sided platform where:
- Sellers list products, services, or content
- Buyers discover and purchase
- The platform takes a fee or commission
- Trust and safety are core concerns (escrow, reviews, disputes)

## Skills Activated

### Always
- 00-orchestrator
- 01-discovery
- 05-documentation

### Conditional
- 03-business-architecture (complex business logic — listings, transactions, escrow, disputes)
- 04-architecture (architecture decisions)
- 06-codebase-audit
- 07-security (payments, user data, two-sided access control — mandatory)
- 08-testing
- 09-performance

### Stack (detected)
- stacks/[language]
- frameworks/[framework]
- stacks/[database]
- stacks/[infrastructure]
- stacks/[queue] (marketplaces often need background processing)

## Minimum Documentation (Tier 3)

Same as SaaS, plus:
- Extra attention to business rules around transactions, escrow, and disputes
- Extra attention to security around payments and two-sided access control

