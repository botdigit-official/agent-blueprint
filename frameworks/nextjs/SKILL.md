# Next.js Framework Skill

**Version:** 1.0.0
**Compatible:** project_skills >= 1.0
**Requires:** stacks/typescript or stacks/javascript
**Outputs:** (none — guidance only)

---

## Purpose

Guidance for working with Next.js projects. Activated when `next.config` and Next.js project structure are detected.

---

## Architecture understanding

Next.js provides several rendering strategies. Understand which the project uses:
- **SSR** (Server-Side Rendering) — `getServerSideProps` or Server Components
- **SSG** (Static Site Generation) — `getStaticProps` or static Server Components
- **ISR** (Incremental Static Regeneration)
- **Client Components** — `'use client'`
- **API Routes** — `app/api/` or `pages/api/`
- **Server Actions** — if used

The rendering strategy affects data flow, caching, and architectural decisions. Understand the project's choice before modifying.

---

## Conventions

### App Router vs Pages Router

- The project uses one or the other. Follow it. Do not mix unless the migration is explicit and documented.
- App Router is the current direction. Pages Router is still valid for existing projects.

### Server vs Client components

- Server Components are the default in App Router. Use Client Components where interactivity requires it.
- Do not make everything a Client Component "because it's easier." Understand the boundary.

### Data fetching

- Data fetching strategy (server-side, client-side, hybrid) is an architectural decision. Understand what the project does and why.
- Caching behavior in Next.js is specific. Understand it before changing data fetching.

### Environment variables

- Next.js has specific environment variable conventions (`NEXT_PUBLIC_` for client exposure).
- Do not expose secrets to the client. Next.js makes this explicit with the `NEXT_PUBLIC_` prefix. Respect it.

---

## Anti-patterns

- Making all components Client Components.
- Mixing App Router and Pages Router without a migration plan.
- Exposing secrets via `NEXT_PUBLIC_` variables.
- Fetching data on every render without caching strategy.
- Putting business logic in components instead of server functions or services.
