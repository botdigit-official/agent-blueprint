# Database

**Project:** [name]
**Date:** [YYYY-MM-DD]

---

## Database Engine

- **Primary:** [PostgreSQL / MySQL / SQLite / MongoDB / etc.]
- **Version:** [if known]
- **Connection:** [how the application connects — env vars, config, connection pool]

---

## Schema Overview

[Link to migrations or schema dump, or describe the schema structure]

---

## Migrations

- **System:** [ migrations / flyway / alembic / prisma / artisan / rails / or "none" ]
- **Location:** [path]
- **Process:** [how migrations are run — manually, CI, on deploy]

---

## ORM / Query Builder

- **Tool:** [Eloquent / ActiveRecord / Prisma / SQLAlchemy / SQLx / raw SQL / or "none"]
- **Pattern:** [how the project uses it]

---

## Data Model

### [Table / Collection Name]

**Purpose:** [what this table represents]
**Columns / Fields:**
- [name]: [type], [constraints], [description]
**Relationships:**
- [relation]: [type], [description]
**Indexes:** [if notable]
**Notes:** [any special considerations]

---

## Data Integrity

- [constraint or rule]: [description]
- [constraint or rule]: [description]

---

## Sensitive Data

- [data type]: [how it is protected — encryption, access control, retention]
- [data type]: [how it is protected]

---

## Backups

- **Strategy:** [description or "not defined"]
- **Frequency:** [if known]
- **Retention:** [if known]
- **Restore tested:** [yes / no / unknown]

---

## Data Retention and Deletion

- [policy or "not defined"]
- [policy or "not defined"]
