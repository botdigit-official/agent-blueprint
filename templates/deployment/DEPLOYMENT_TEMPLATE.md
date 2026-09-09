# Deployment

**Project:** [name]
**Date:** [YYYY-MM-DD]

---

## Deployment Model

- **Type:** [manual / CI/CD / platform-managed / or "mixed"]
- **Platform:** [Vercel / AWS / GCP / Azure / VPS / Docker / Kubernetes / or "unknown"]
- **Environments:** [production, staging, development — describe each]

---

## Build Process

[How the project is built — commands, steps, artifacts]

---

## Deployment Process

[How the project is deployed — steps, triggers, approvals]

---

## Rollback

- **Strategy:** [how to roll back — redeploy previous version, database rollback, or "not defined"]
- **Tested:** [yes / no / unknown]

---

## Environment Configuration

- **Configuration method:** [.env / config files / secrets manager / or "mixed"]
- **Secrets management:** [how secrets are managed]
- **Environment-specific settings:** [what differs between environments]

---

## CI/CD

- **System:** [GitHub Actions / GitLab CI / CircleCI / Jenkins / or "none"]
- **Pipeline stages:** [list stages — build, test, deploy, or "not configured"]
- **Triggers:** [what triggers a deployment]

---

## Health Checks and Monitoring

- **Health checks:** [Liveness / readiness / or "not configured"]
- **Monitoring:** [what is monitored — uptime, errors, performance, or "not configured"]
- **Alerting:** [who gets alerted and when]

---

## Scaling

- **Current scale:** [how the project runs today]
- **Scaling strategy:** [manual / auto-scaling / or "not defined"]
- **Bottlenecks:** [known scaling limits]

---

## Disaster Recovery

- **Strategy:** [description or "not defined"]
- **Backup:** [what is backed up and how often]
- **Restore tested:** [yes / no / unknown]
- **RTO / RPO:** [if defined]

---

## Review History

| Date | Reviewer | Notes |
|---|---|---|
| [date] | [reviewer] | [notes] |
