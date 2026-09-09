# 04 — Navigation Master & Sitemap

---

## 1. Complete Route Tree
| Path | Access Level | Page / View Purpose | Dynamic Params |
|---|---|---|---|
| `/` | Public | Homepage / Search Hero | None |
| `/search` | Public | Search Results & Filters | `q`, `cat`, `city` |
| `/dashboard` | Authenticated | User / Owner Dashboard | None |
| `/admin` | Admin Only | Control Center | None |

## 2. SEO & Deep Linking Rules
- Canonical URL generation
- Dynamic `robots` meta tags (`index, follow` vs `noindex`)
