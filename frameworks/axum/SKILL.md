# Axum Framework Skill

**Version:** 1.0.0
**Compatible:** project_skills >= 1.0
**Requires:** stacks/rust
**Outputs:** (none — guidance only)

---

## Purpose

Guidance for working with Axum projects. Activated when Axum is detected in a Rust project.

---

## Architecture understanding

Axum is an ergonomic, composable Rust web framework built on Tokio and Tower. Understand:
- **Routers** — route composition and nesting
- **Handlers** — async functions or `State` extractors
- **Extractors** — how request data is extracted (JSON, form, headers, path, state)
- **Middlewares** — Tower middleware stack
- **State** — shared application state
- **Error handling** — `Result`, `IntoResponse`, custom error types

---

## Conventions

### Handlers and extractors

- Handlers should be focused. A handler that does too much is a sign that logic should be extracted.
- Use extractors for request data. Do not manually parse requests when extractors can do it.
- Pydantic... err, the Rust equivalent: use serde for serialization. Validate input at the boundary.

### State management

- Axum's `State` extractor shares application state. Understand what the project puts in state.
- State should be shared safely (Arc, Mutex, RwLock, or similar). Understand the project's choice.
- Do not put mutable state in handlers without synchronization.

### Error handling

- Use `Result` with custom error types that implement `IntoResponse`.
- Errors should be informative to the client (within security limits) and to the logs.
- Do not expose internal error details to clients.

### Middleware

- Tower middleware is the mechanism. Use it for cross-cutting concerns.
- Do not put business logic in middleware.

### Database

- The project's database choice is its own (SQLx, Diesel, SeaORM, or similar).
- Understand how the project manages connections (pool, state, or other).
- Migrations are the source of truth for schema.

### Testing

- Axum provides `TestClient` (via `axum::testing` or similar). Use it for integration tests.
- Use tokio's test macros for async tests.
- Test business logic, API endpoints, and critical flows.

---

## Anti-patterns

- Business logic in handlers.
- Ignoring error handling (unwrap in handlers).
- Shared mutable state without synchronization.
- Hardcoded secrets in source code.
- Not using extractors when they apply.
