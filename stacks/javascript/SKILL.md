# JavaScript Stack Skill

**Version:** 1.0.0
**Compatible:** project_skills >= 1.0
**Requires:** (activated by orchestrator on detection)
**Outputs:** (none — guidance only)

---

## Purpose

Guidance for working with JavaScript projects. Activated automatically when `package.json` and `.js` files are detected.

---

## Conventions

### Types

- JavaScript has no type system. Data at boundaries (API inputs, external data, user input) must be validated at runtime.
- Document expected shapes in JSDoc where practical.
- If the project grows, consider whether TypeScript would reduce risk. Propose the change in an ADR if it is warranted — do not impose it.

### Module system

- Use ES modules (`import`/`export`) if the project targets modern environments.
- Follow the project's existing module convention.

### Error handling

- Use `Error` instances, not string throws.
- Handle errors at the appropriate level.
- Do not silently swallow errors.

### Tooling

- The project's linting and formatting configuration is the source of truth.
- `package-lock.json` or `npm-shrinkwrap.json` should be committed if the project uses npm.

---

## Anti-patterns

- Assuming data shapes without validation.
- Callback pyramids where async/await is available.
- Unhandled promise rejections.
- Global state without clear ownership.
