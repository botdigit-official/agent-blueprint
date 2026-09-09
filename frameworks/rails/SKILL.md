# Ruby on Rails Framework Skill

**Version:** 1.0.0
**Compatible:** project_skills >= 1.0
**Requires:** stacks/ruby
**Outputs:** (none — guidance only)

---

## Purpose

Guidance for working with Ruby on Rails projects. Activated when Rails is detected.

---

## Architecture understanding

Rails is an opinionated MVC framework. Understand what the project uses:
- **MVC** — models, controllers, views
- **ActiveRecord** — the ORM
- **Routes** — `config/routes.rb`
- **Mailers** — email delivery
- **Jobs** — Active Job and the backend (Sidekiq, Resque, etc.)
- **Assets** — the asset pipeline or import maps or a JS bundler
- **API mode** — if the project is API-only

---

## Conventions

### ActiveRecord and the database

- ActiveRecord models are central. Understand the project's models, associations, validations, and scopes.
- Migrations are the source of truth for schema. Do not edit the database outside of migrations.
- N+1 queries are common. Use `includes`, `preload`, or `eager_load` where appropriate.
- Callbacks are powerful and can hide control flow. Understand the project's use of them. Overuse of callbacks is a common Rails problem.

### Controllers

- Controllers should be thin. They handle request/response, not business logic.
- Strong parameters are the mechanism for permitted input. Use them.
- Before actions are for cross-cutting controller concerns. Do not put business logic in them.

### Business logic placement

- Rails does not enforce where business logic lives. The project's convention is what matters.
- Common patterns: models, service objects, interactors, commands, queries. Follow the project's convention.
- Do not introduce a pattern the project does not use without a reason.

### Views

- Views should present data, not compute it.
- Helpers are for presentation logic that is reused across views.
- Partials are for reusable view fragments.

### Background jobs

- Active Job is the abstraction. The backend (Sidekiq, Resque, etc.) is the implementation.
- Understand the project's job infrastructure before adding or modifying jobs.
- Jobs should be idempotent where possible.

### Testing

- Rails has a testing framework built in. Use it.
- The project may use RSpec, Minitest, or similar. Follow the project's choice.
- Test business logic, controllers, models where appropriate, and critical flows.
- Factory bot or similar for test data. Follow the project's choice.

---

## Anti-patterns

- Fat controllers with business logic.
- Fat models with unrelated responsibilities.
- Callbacks that do more than they appear to do.
- N+1 queries.
- Editing the database directly instead of migrations.
- Hardcoded secrets in credentials or source.
