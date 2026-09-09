# Spring Boot Framework Skill

**Version:** 1.0.0
**Compatible:** project_skills >= 1.0
**Requires:** stacks/java
**Outputs:** (none — guidance only)

---

## Purpose

Guidance for working with Spring Boot projects. Activated when Spring Boot is detected.

---

## Architecture understanding

Spring Boot is a convention-driven Java framework. Understand:
- ** layered architecture** — controllers, services, repositories
- **Dependency injection** — Spring's IoC container
- **Spring Data** — JPA, JDBC, MongoDB, or other repositories
- **REST controllers** — `@RestController`, `@RequestMapping`
- **Security** — Spring Security configuration
- **Transactions** — `@Transactional`
- **Async** — `@Async`, task executors
- **Configuration** — `application.properties` / `application.yml`, profiles

---

## Conventions

### Layered architecture

- Controllers handle HTTP. Services handle business logic. Repositories handle data access.
- This is the conventional Spring layout. Follow it unless the project has a documented alternative.
- Do not put business logic in controllers. Do not put HTTP concerns in services.

### Dependency injection

- Spring's DI is central. Understand the project's bean configuration (component scanning, explicit beans, or both).
- Constructor injection is preferred over field injection. Follow the project's convention.
- Beans have a lifecycle. Understand the scope of the beans you use.

### Data access

- Spring Data repositories provide a convention. Understand what the project uses (JpaRepository, CrudRepository, custom repositories, or raw JPA).
- `@Transactional` boundaries matter. Understand where transactions start and end.
- N+1 queries are possible with JPA. Understand the project's fetch strategy.
- Migrations: Flyway or Liquibase are common. If the project uses them, follow them. If it does not, note that as a gap.

### REST API design

- `@RestController` and `@RequestMapping` define the API.
- DTOs (Data Transfer Objects) are common for API contracts. Understand the project's approach (DTOs, records, or direct entity exposure).
- Validation: Bean Validation (JSR-380) is the standard. Use it for input validation.
- Error handling: `@ControllerAdvice` and `@ExceptionHandler` are the conventional mechanism.

### Security

- Spring Security is powerful and can be complex. Understand the project's security configuration.
- Authentication and authorization are configured in Security configuration. Understand how.
- Do not rely on security by obscurity. Configure explicit access rules.

### Testing

- Spring Boot provides test support (`@SpringBootTest`, `@DataJpaTest`, `@WebMvcTest`, and similar).
- Use the right slice for the right test. A repository test does not need the full application context.
- JUnit 5 is the standard. The project may use AssertJ, Mockito, or similar. Follow the project's choice.

---

## Anti-patterns

- Business logic in controllers.
- Field injection everywhere (hard to test, hides dependencies).
- Bidirectional entity relationships without understanding the consequences.
- Ignoring transaction boundaries.
- Exposing entities directly as API responses without a deliberate choice.
- Hardcoded secrets in configuration files.
