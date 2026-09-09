# Laravel Framework Skill

**Version:** 1.0.0
**Compatible:** project_skills >= 1.0
**Requires:** stacks/php
**Outputs:** (none — guidance only)

---

## Purpose

Guidance for working with Laravel projects. Activated when Laravel structure is detected.

---

## Architecture understanding

Laravel is a full-stack framework with conventions. Understand what the project uses:
- **MVC** — controllers, models, views (Blade or Inertia or API)
- **API-only** — resource/controllers, no views
- **Inertia** — SPA with server-side routing
- **Livewire** — dynamic interfaces without full SPA
- **Queue workers** — background processing
- **Events / Listeners** — event-driven architecture
- **Jobs / Scheduled tasks** — async and cron

---

## Conventions

### Eloquent and the database

- Eloquent is an ORM. Understand the project's models, relationships, and scopes.
- N+1 queries are a common problem. Use eager loading where appropriate.
- Migrations are the source of truth for schema. Do not edit the database directly in a way that diverges from migrations.
- Seeders and factories are for test data and development. Do not rely on them for production data.

### Controllers

- Controllers should be thin. Business logic belongs in models, services, actions, or similar — matching the project's convention.
- If the project uses Form Requests for validation, use them. Do not validate in the controller body if Form Requests exist.

### Service layer

- If the project has a service layer, use it. If it does not, understand why before adding one.
- Do not add a service layer because "that's what frameworks do." Add it if the project needs it.

### Middleware

- Middleware is for cross-cutting concerns (auth, logging, CORS). Use it for those.
- Do not put business logic in middleware.

### Testing

- Laravel has a testing framework built in. Use it.
- The project may use Pest or PHPUnit. Follow the project's choice.
- Test the behavior that matters: business rules, API endpoints, critical user flows.

---

## Anti-patterns

- Fat controllers with business logic.
- N+1 queries from lazy loading in loops.
- Putting business logic in routes files.
- Ignoring migrations and editing the database directly.
- Using `DB::raw` where Eloquent would do, without understanding the SQL injection risk.
