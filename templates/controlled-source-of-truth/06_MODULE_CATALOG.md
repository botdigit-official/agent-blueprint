# 06 — Module Catalog & Service Inventory

---

## 1. Subsystem Directory
| Module / Directory | Responsibility | Primary Dependencies | Public Interfaces |
|---|---|---|---|
| `services/auth` | Authentication, Argon2id, JWT | `argon2`, `jsonwebtoken` | `login`, `register` |
| `services/pricing` | Canonical plan catalog | `sqlx`, `pg` | `get_plans`, `verify_tier` |

## 2. Inter-Module Coupling Rules
- Services must communicate via defined traits / interfaces.
- Avoid circular dependency loops.
