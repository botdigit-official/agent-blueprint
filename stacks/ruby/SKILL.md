# Ruby Stack Skill

**Version:** 1.0.0
**Compatible:** project_skills >= 1.0
**Requires:** (activated by orchestrator on detection)
**Outputs:** (none — guidance only)

---

## Purpose

Guidance for working with Ruby projects. Activated automatically when `Gemfile` or `.rb` files are detected.

---

## Conventions

### Version

- Ruby 3.x is current. The project's version is in the `Gemfile` or `.ruby-version`.
- Follow the project's version.

### Style

- Follow the community style guide unless the project has chosen otherwise.
- The project's linter and formatter (`rubocop`, or none) is the project's choice.

### Types

- Ruby is dynamically typed. Runtime validation is required for external data.
- Type hints (RBS, Sorbet) may be in use. Follow the project's choice.

### Error handling

- Use exceptions for exceptions.
- Handle exceptions at the appropriate level.
- Do not use exceptions for control flow.

### Dependencies

- `Gemfile.lock` should be committed.
- Review gems for maintenance and licensing.

---

## Anti-patterns

- Magic numbers and strings without explanation.
- Overly clever metaprogramming without clear necessity.
- N+1 queries (Ruby projects often use ORMs; this is a common issue).
- Silent failures (swallowed exceptions, `nil` where an error would be clearer).
