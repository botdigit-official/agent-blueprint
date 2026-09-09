# TypeScript Stack Skill

**Version:** 1.0.0
**Compatible:** project_skills >= 1.0
**Requires:** (activated by orchestrator on detection)
**Outputs:** (none — guidance only)

---

## Purpose

Guidance for working with TypeScript projects. Activated automatically when `package.json` and `.ts` files are detected.

---

## Conventions

### Types

- Prefer `type` for unions and intersections, `interface` for object shapes that may be extended.
- Do not use `any`. Use `unknown` when the type is genuinely unknown, and narrow from there.
- Export types that are part of the public API.
- Avoid type assertions (`as T`) unless you have a specific reason and a comment explaining it.

### Runtime

- TypeScript compiles to JavaScript. Types are not runtime checks. Validate data at boundaries (API inputs, external data, user input) using runtime validation, not type assertions.
- Use a runtime validation library if the project handles external data (Zod, Valibot, io-ts, or similar). The choice is the project's.

### Module system

- Use ES modules (`import`/`export`).
- Prefer explicit imports over namespace imports.
- Barrel files (`index.ts`) are acceptable for public API surfaces but should not be overused.

### Error handling

- Use typed errors where appropriate.
- Do not throw string literals.
- Handle errors at the appropriate level — not everywhere, not nowhere.

### Tooling

- The project's tsconfig is the source of truth. Do not override it without reason.
- Strict mode should be on unless there is a documented reason.
- The project's linter and formatter are the project's choice. Follow them.

---

## Anti-patterns

- Using `any` to silence the compiler.
- Type assertions to bypass type errors without understanding why the error exists.
- Duplicate types between frontend and backend without a shared source.
- Runtime assumptions based on TypeScript types.
