# FastAPI Framework Skill

**Version:** 1.0.0
**Compatible:** project_skills >= 1.0
**Requires:** stacks/python
**Outputs:** (none — guidance only)

---

## Purpose

Guidance for working with FastAPI projects. Activated when FastAPI is detected.

---

## Architecture understanding

FastAPI is a modern, async-first Python framework. Understand:
- **Path operations** — the endpoint handlers
- **Dependency injection** — FastAPI's DI system
- **Pydantic models** — request/response validation and serialization
- **Async/await** — the project's async usage
- **Background tasks** — if used
- **Database integration** — SQLAlchemy, SQLModel, Tortoise, or similar

---

## Conventions

### Pydantic models

- Pydantic models define the API contract. They are the source of truth for request and response shapes.
- Use them for validation. Do not manually validate input that Pydantic can validate.
- Models should be meaningful, not just `BaseModel` with arbitrary fields.

### Dependency injection

- FastAPI's DI is a feature. Use it for shared logic (auth, database session, current user).
- Dependencies should be well-defined. Avoid hidden dependencies.

### Async

- FastAPI supports async path operations. Use async where it helps (I/O-bound operations).
- Async is not magic. A slow synchronous operation in an async handler blocks the event loop.
- Understand which database drivers and libraries are async-compatible before making everything async.

### Error handling

- Use HTTPException for HTTP errors.
- Use custom exception handlers for application-specific errors where appropriate.
- Do not expose internal errors to clients.

### Database

- The project's database integration is its choice. Understand it.
- Migrations (Alembic or similar) are the source of truth for schema.
- Connection management: understand how the project manages database sessions (dependency, context manager, or other).

### Testing

- FastAPI provides a `TestClient`. Use it for integration tests.
- The project may use pytest or similar. Follow the project's choice.
- Test business logic, API endpoints, and critical flows.

---

## Anti-patterns

- Putting business logic in path operation functions.
- Ignoring Pydantic validation and doing manual validation.
- Mixing sync and async without understanding the implications.
- Hardcoded secrets in the application code.
- Returning raw database models as API responses without a defined contract.
