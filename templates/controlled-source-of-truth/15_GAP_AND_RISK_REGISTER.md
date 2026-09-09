# 15 — Gap & Risk Register

---

## 1. Active Risk Log
| Risk ID | Description | Impact | Likelihood | Mitigation Strategy |
|---|---|:---:|:---:|---|
| R-001 | External API rate limiting | High | Medium | In-memory cache + backoff |
| R-002 | Zombie job accumulation | Med | Low | 1h auto-recovery sweeper |
