# 09 — Security, RBAC & Hardening

---

## 1. Defense-in-Depth Measures
- **Password Security:** Argon2id with salt & memory parameters
- **Rate Limiting:** Sliding window token bucket on sensitive routes
- **CSRF Protection:** Origin / Referer validation on mutating HTTP verbs
- **SSRF Protection:** Safe fetcher rejecting private IP ranges (RFC 1918)

## 2. Role-Based Access Control Matrix
| Resource | Anonymous | User | Owner | Admin |
|---|:---:|:---:|:---:|:---:|
| Public Profiles | Read | Read | Read | Read/Write |
| Admin Settings | - | - | - | Full |
