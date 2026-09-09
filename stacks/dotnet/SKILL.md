# .NET Stack Skill

**Version:** 1.0.0
**Compatible:** project_skills >= 1.0
**Requires:** (activated by orchestrator on detection)
**Outputs:** (none — guidance only)

---

## Purpose

Guidance for working with C# / .NET projects. Activated automatically when `*.csproj`, `*.sln`, or `.cs` files are detected.

---

## Conventions

### Version

- .NET 8 or .NET 9 are current LTS/current versions. The project's target framework is in `*.csproj`.
- Follow the project's version.

### Style

- Follow the project's style configuration. Roslyn analyzers, `.editorconfig`, and formatters are the project's choice.
- C# conventions: explicit is better than implicit. Use the type system.

### Type system

- C# has a static type system. Use it.
- `var` is acceptable when the type is obvious from the assignment. Do not use it to obscure the type.
- Records, tuples, pattern matching, and nullable reference types are features. Use them where they help.

### Error handling

- Use exceptions for exceptional conditions.
- Do not swallow exceptions.
- Consider `Result` patterns for expected failures in some codebases.

### Dependencies

- `*.csproj` manages dependencies. `packages.lock.json` or equivalent should be committed for applications.
- Review NuGet packages for maintenance.

### Tooling

- The project's analyzers and formatters are the project's choice.

---

## Anti-patterns

- Swallowed exceptions.
- Overuse of `dynamic`.
- Large classes with mixed responsibilities.
- Ignoring nullable reference types (if enabled).
