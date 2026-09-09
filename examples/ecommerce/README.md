# E-Commerce Example

This directory shows how Project Skills OS applies to an e-commerce project.

## Archetype

An online store with:
- Product catalog
- Cart and checkout
- Orders and fulfillment
- Inventory management
- Payments
- Shipping/tax calculation

## Skills Activated

### Always
- 00-orchestrator
- 01-discovery
- 05-documentation

### Conditional
- 03-business-architecture (product, cart, checkout, inventory, tax, shipping — complex business logic)
- 04-architecture
- 06-codebase-audit
- 07-security (payments, user data, PCI considerations — mandatory)
- 08-testing (checkout and payment flows are critical)
- 09-performance (product search, catalog, checkout)

### Stack (detected)
- stacks/[language]
- frameworks/[framework]
- stacks/[database]
- stacks/[infrastructure]
- stacks/[search] (if product search is a feature)

## Minimum Documentation (Tier 3)

- Extra attention to business rules around pricing, inventory, and checkout
- Extra attention to data integrity in orders and payments
- Extra attention to security around payment handling

