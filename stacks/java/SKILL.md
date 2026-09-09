# Java Stack Skill

**Version:** 1.0.0
**Compatible:** project_skills >= 1.0
**Requires:** (activated by orchestrator on detection)
**Outputs:** (none — guidance only)

---

## Purpose

Guidance for working with Java projects. Activated automatically when `pom.xml`, `build.gradle`, or `.java` files are detected.

---

## Conventions

### Version

- Java 17 or 21 are current LTS versions. The project's version is in the build file or runtime.
- Older versions should be noted as technical debt if upgrade is feasible.

### Style

- Follow the project's style guide. If none exists, follow standard Java conventions.
- Use the project's formatter and linter (`checkstyle`, `spotless`, ` ErrorProne`, ` SonarQube`, or similar).

### Type system

- Java has a static type system. Use it.
- Avoid `Object` and raw types where specific types are known.
- Generics are a tool, not a requirement for every class.

### Error handling

- Use exceptions for exceptional conditions.
- Checked exceptions are a Java feature. Use them where appropriate, but do not overuse them to the point of unreadability.
- Do not swallow exceptions silently.

### Dependencies

- Maven: `pom.xml` manages dependencies.
- Gradle: `build.gradle` manages dependencies.
- Review dependencies for maintenance and licensing.

### Frameworks

- Spring Boot is common. If the project uses it, follow the framework skill.
- The framework skill is more specific than this stack skill. Both may be active.

---

## Anti-patterns

- Empty catch blocks.
- Overuse of inheritance when composition would do.
- Unnecessary abstraction layers.
- Mixing concerns in large classes.
