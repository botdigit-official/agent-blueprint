# Python Stack Skill

**Version:** 1.0.0
**Compatible:** project_skills >= 1.0
**Requires:** (activated by orchestrator on detection)
**Outputs:** (none — guidance only)

---

## Purpose

Guidance for working with Python projects. Activated automatically when `pyproject.toml`, `requirements.txt`, `setup.py`, or `.py` files are detected.

---

## Conventions

### Version and tooling

- The project's Python version is determined by `pyproject.toml`, `requirements.txt`, or the runtime environment. Follow it.
- Use virtual environments. The project's choice of `venv`, `poetry`, `uv`, `pipenv`, or similar is the project's choice.

### Type hints

- Use type hints where they add clarity. They are optional in Python but valuable in larger projects.
- Runtime validation is still required for external data. Type hints are not runtime checks.
- `mypy` or similar may be in use. Follow the project's strictness setting.

### Code style

- Follow PEP 8 unless the project has chosen otherwise.
- The project's formatter (`ruff`, `black`, `autopep8`, or none) is the project's choice.

### Error handling

- Use specific exception types.
- Do not use bare `except:`.
- Handle exceptions at the appropriate level.

### Dependencies

- Pin versions in production. `requirements.txt` with pinned versions, `poetry.lock`, or similar.
- Review dependencies for known vulnerabilities.

---

## Anti-patterns

- Bare `except:`.
- Using exceptions for control flow where a conditional would do.
- Global mutable state.
- Assuming types at runtime based on type hints.
