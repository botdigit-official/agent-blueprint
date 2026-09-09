# Go Stack Skill

**Version:** 1.0.0
**Compatible:** project_skills >= 1.0
**Requires:** (activated by orchestrator on detection)
**Outputs:** (none — guidance only)

---

## Purpose

Guidance for working with Go projects. Activated automatically when `go.mod` and `.go` files are detected.

---

## Conventions

### Idiomatic Go

- Follow Effective Go and the Go FAQs.
- Simple, readable code is preferred over clever code.
- Explicit error handling is a feature. Do not ignore errors with `_` unless there is a specific reason and a comment.
- Zero values should be useful where practical.

### Error handling

- Errors are values. Handle them.
- Wrap errors with context using `fmt.Errorf("...: %w", err)` or similar.
- Do not use panics for expected errors.

### Types

- Go's type system is structural. Use it.
- Interfaces should be small and defined where they are used, not where they are implemented.
- Avoid unnecessary abstraction. Go prefers concrete code over abstraction layers.

### Concurrency

- Goroutines are cheap but not free. Do not spawn unbounded goroutines.
- Use channels, `sync`, or context appropriately. Each has a purpose.
- Always have a plan for canceling concurrent work (context, done channel).

### Dependencies

- `go mod` manages dependencies. `go.sum` should be committed.
- Vendor directory is optional and project-dependent.

### Tooling

- `gofmt` / `goimports` for formatting. The project should enforce this.
- `go vet` for static analysis.
- The project may use additional linters. Follow the project's choice.

---

## Anti-patterns

- Ignoring errors.
- Using goroutines without a way to stop them.
- Over-engineering with interfaces and abstraction layers.
- Unbounded concurrency.
