# Django Framework Skill

**Version:** 1.0.0
**Compatible:** project_skills >= 1.0
**Requires:** stacks/python
**Outputs:** (none — guidance only)

---

## Purpose

Guidance for working with Django projects. Activated when Django structure is detected.

---

## Architecture understanding

Django is a "batteries included" framework. Understand what the project uses:
- **MVT** — models, views, templates
- **Class-based views** vs **function-based views**
- **REST framework** — if the project is an API
- **DRF serializers** — API data shaping
- **Admin** — Django's admin interface (customized or stock)
- **Signals** — event hooks (use sparingly)
- **Middleware** — cross-cutting concerns
- **Celery / Django Q / similar** — background tasks
- **ORM** — Django's ORM is central

---

## Conventions

### Models and the ORM

- Models are the heart of a Django project. Understand the project's models, relationships, and constraints.
- The ORM is powerful. Understand query evaluation to avoid N+1 and unnecessary queries.
- Migrations are the source of truth for schema. Do not edit the database outside of migrations.
- Model methods and properties are good places for model-specific logic. Business logic that spans models belongs elsewhere.

### Views

- Views handle request → response. They should not contain business logic that belongs in models, services, or forms.
- Form handling: use Django forms or the project's chosen form library. Validation belongs with the form or serializer.
- Class-based views provide structure. If the project uses them, understand the lifecycle. If it uses function-based views, follow that convention.

### API design (if DRF)

- Serializers define the API contract. Understand what each serializer does.
- ViewSets and routers provide convention. Follow the project's pattern.
- Authentication and permission classes are the place for access control.

### Settings

- Django settings are significant. Understand the project's settings structure (single file, split by environment, django-configurations, or similar).
- Secrets in settings: the project should use environment variables, not hardcoded values.

### Testing

- Django has a strong testing framework. Use it.
- The `TestCase` class provides database isolation. Use it for tests that touch the database.
- Test business logic, API endpoints, and critical flows.

---

## Anti-patterns

- Business logic in views.
- N+1 queries from unfiltered related object access.
- Using signals for core business logic (signals hide control flow).
- Editing the database directly instead of writing migrations.
- Hardcoded secrets in settings files.
