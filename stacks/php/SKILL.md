# PHP Stack Skill

**Version:** 1.0.0
**Compatible:** project_skills >= 1.0
**Requires:** (activated by orchestrator on detection)
**Outputs:** (none — guidance only)

---

## Purpose

Guidance for working with PHP projects. Activated automatically when `composer.json` or `.php` files are detected.

---

## Conventions

### Version

- PHP 8.x is the current standard. The project's required version is in `composer.json` or `php.ini`/runtime.
- Older PHP versions should be noted as technical debt if the project would benefit from upgrading.

### Type system

- PHP has a type system. Use it: parameter types, return types, property types, iterable and array types where appropriate.
- `strict_types=1` is recommended for new code. Respect the project's existing declaration.
- Do not use `mixed` as a substitute for thinking about the type.

### Dependencies

- `composer.lock` should be committed for applications.
- Review dependencies. PHP has a large ecosystem; not all packages are equally maintained.

### Error handling

- Use exceptions for exceptional conditions.
- Configure error reporting appropriately for development and production.
- Do not expose PHP errors to users in production.

### Tooling

- The project's linter (`phpstan`, `psalm`, `pint`, `php-cs-fixer`, or similar) is the project's choice.

---

## Anti-patterns

- Ignoring return types and parameter types.
- Using arrays where a typed object would be clearer.
- Mixing presentation and logic without a reason.
- Hardcoded secrets in PHP files.
