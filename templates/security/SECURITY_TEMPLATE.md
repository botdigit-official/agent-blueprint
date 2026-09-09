# Security

**Project:** [name]
**Date:** [YYYY-MM-DD]
**Last reviewed:** [YYYY-MM-DD]

---

## Attack Surface

[What is exposed to the internet, to users, to third parties]

---

## Authentication

- **Mechanism:** [how users authenticate]
- **Session management:** [how sessions are managed]
- **Password storage:** [how passwords are stored — should be hashed]
- **MFA:** [available or not]
- **Admin authentication:** [how admin access is protected]

---

## Authorization

- **Model:** [RBAC / ABAC / custom / or "not formalized"]
- **Enforcement:** [where authorization is checked — on every endpoint, some endpoints, or unclear]
- **Access control review:** [when access control was last reviewed]

---

## Data Protection

- **In transit:** [TLS / HTTPS / or "not confirmed"]
- **At rest:** [encryption / or "not confirmed"]
- **Secrets management:** [env vars / secrets manager / or "issue — hardcoded"]
- **PII handling:** [how PII is handled and protected]
- **Data minimization:** [are we collecting only what we need?]

---

## Input Validation

- **Client-side:** [what client-side validation exists]
- **Server-side:** [what server-side validation exists — must exist for all sensitive inputs]
- **SQL injection protection:** [parameterized queries / ORM / or "needs review"]
- **Output encoding:** [context-appropriate encoding]

---

## Dependencies

- **Review cadence:** [how often dependencies are reviewed]
- **Known vulnerabilities:** [any known issues, or "none known"]
- **Lockfile:** [committed or not]

---

## Logging and Monitoring

- **Security events logged:** [what is logged]
- **Sensitive data in logs:** [are logs free of passwords, tokens, PII?]
- **Alerting:** [is there alerting for suspicious activity?]

---

## Infrastructure Security

- **Container security:** [run as non-root / or "unknown"]
- **Network:** [security groups / firewalls / or "not reviewed"]
- **TLS configuration:** [if known]
- **Exposed services:** [list of internet-exposed services]

---

## Business Logic Security

[Known business logic security concerns — pricing manipulation, workflow bypass, race conditions, etc.]

---

## Findings

[Security findings from reviews and audits]

---

## Review History

| Date | Reviewer | Notes |
|---|---|---|
| [date] | [reviewer] | [notes] |
