# 10 — API & Integration Reference

---

## 1. REST Endpoints Summary
| Verb | Route | Auth Required | Description |
|---|---|:---:|---|
| `GET` | `/api/v1/health` | No | System health check |
| `POST` | `/api/v1/auth/login` | No | Authenticate & issue token |

## 2. External Third-Party Adapters
| External Provider | Purpose | Rate Limits / Quotas | Fallback Strategy |
|---|---|---|---|
| [Provider 1] | Geocoding / Maps | [Quota] | Local Cache |
