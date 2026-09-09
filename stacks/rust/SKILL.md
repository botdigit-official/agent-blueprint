# Rust Stack Skill

**Version:** 1.0.0
**Compatible:** project_skills >= 1.0
**Requires:** (activated by orchestrator on detection)
**Outputs:** (none — guidance only)

---

## Purpose

Guidance for working with Rust projects. Activated automatically when `Cargo.toml` is detected.

---

## Conventions

### Memory and safety

- Rust's ownership system is a feature. Do not use `unsafe` unless you have a specific, documented reason.
- Prefer safe abstractions over unsafe code.
- When `unsafe` is necessary, document why and scope it as tightly as possible.

### Error handling

- Use `Result` for fallible operations. Do not use `panic` for recoverable errors.
- Use `thiserror` or similar for library error types, `anyhow` or similar for applications — matching the project's choice.
- Errors should be informative. A `Result<(), Box<dyn Error>>` is acceptable for a quick script; a typed error enum is better for a library or critical path.

### Types

- Make illegal states unrepresentable where practical.
- Use the type system to encode constraints.
- Avoid `unwrap()` in production code. Use `expect()` with a message when panicking is the intended behavior, and handle the error properly when it is not.

### Async

- The project's async runtime is its choice (`tokio`, `async-std`, or none for synchronous projects).
- Do not mix runtimes.
- Async does not make a slow operation fast. It allows concurrent waiting. Understand the difference.

### Dependencies

- `Cargo.lock` should be committed for applications.
- Review dependencies for licensing and maintenance status.
- Rust compiles what it needs. Unused dependencies are not a runtime cost but are a maintenance burden.

---

## Anti-patterns

- Using `unwrap()` as a substitute for error handling.
- Using `unsafe` to avoid learning the safe API.
- Over-using generics to the point of unreadability.
- Ignoring `clippy` warnings without reason.
