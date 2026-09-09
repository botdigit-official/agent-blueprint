# 11 — Jobs, Crons & Background Automation

---

## 1. Daemon & Worker Inventory
| Daemon Name | Interval / Trigger | Concurrency | Failure Recovery |
|---|---|:---:|---|
| Discovery Worker | Every 30s | 5 jobs | Mark stale >1h as FAILED |
| Notification Queue | Every 10s | Unbounded | Exponential backoff (max 3) |

## 2. Idempotency & Concurrency Controls
- Atomic row locking (`FOR UPDATE SKIP LOCKED`)
- Dead-letter queue handling
