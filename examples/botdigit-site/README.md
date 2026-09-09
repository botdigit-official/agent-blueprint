# BotDigit Site — Example Walkthrough

This directory demonstrates how Agent Blueprint skills apply to a real project.

BotDigit (botdigit.com) is a SaaS website platform that lets users build, host, and manage websites with AI assistance, SEO automation, customizable templates, domain management, and an integrated CMS.

This example does not prescribe BotDigit's architecture. It shows how the universal skills would audit and understand it.

---

## What Was Discovered

### Project Type
SaaS — commercial website building platform with subscription billing, freemium tier, and per-site feature differentiation.

### Technology (detected)
- **Frontend:** React / Next.js (website builder, dashboard, templates)
- **Backend:** Rust with Axum
- **Database:** PostgreSQL
- **CMS:** Custom CMS for site content management
- **AI:** LLM integration for website generation and chat assistance
- **Crawler:** Scanner infrastructure for website analysis and monitoring
- **Billing:** Stripe integration
- **Hosting:** Custom infrastructure for hosted websites

---

## How the Skills Apply

### 01-Discovery
Located the project across its codebase: frontend application, Rust backend services, CMS, crawler infrastructure, and billing integration. Multiple sub-projects identified.

### 02-Project-Context
Detected: TypeScript/React frontend, Rust/Axum backend, PostgreSQL database, Redis for caching/queue, Stripe for payments, custom hosting infrastructure, custom CMS.

### 03-Business-Architecture
The audit revealed:

- **Actors:** Visitors, Free users, Paid users, Site owners, Admins, System (crawler, AI, webhooks)
- **Core entities:** User, Account, Site, Template, Domain, Scan/Analysis, CMS content, Subscription, Credit/token balance
- **Business model:** Freemium SaaS with paid tiers. Website hosting is a core product — not an add-on.
- **Pricing contradiction exposed:** The audit found pricing that was inconsistent across the site, with conflicting free/paid feature boundaries. This was flagged as a business logic problem, not a code problem.

### 04-Architecture
The audit concluded:

- **Modular monolith is appropriate.** The project does not need microservices at its scale. A well-structured modular monolith keeps the system understandable and deployable.
- **Crawler/scanner architecture needed correction.** The scanner was not architected as a proper crawler system. It lacked proper queueing, rate limiting, and result aggregation for a scanning product.
- **AI is supplementary, not structural.** LLM integration is valuable for website generation and chat, but the core product (hosting, CMS, SEO, domain management) does not require AI. Using AI where deterministic tools suffice adds cost and latency without benefit.

### 06-Codebase-Audit
The audit found:

- **Website builder is a core strength.** The site builder, templates, and customization system are what differentiate the product. This should be the focus of development effort.
- **Data quality is a major problem.** Scanned data, site metadata, and CMS content showed quality issues that affect product reliability.
- **Mixed architectural signals.** Some parts of the codebase showed a clear design; others showed ad-hoc additions. This is typical of a project that grew features before settling architecture.
- **AI was not necessary for deterministic work.** Several places where LLM calls were used could have been replaced with deterministic logic, saving cost and reducing latency.

### 07-Security
The audit found security issues requiring immediate remediation:

- Input validation gaps in exposed endpoints
- Authorization inconsistencies (some endpoints not checking ownership)
- Data exposure risks in API responses
- These are generic findings applicable to any SaaS handling user data and payments.

### 08-Testing
The audit found the test situation was insufficient for a commercial SaaS handling payments and user data.

### 10-Audit (combined)
The comprehensive audit produced a single report synthesizing:
- Business logic gaps (pricing contradictions, incomplete feature boundaries)
- Architecture gaps (scanner design, modular monolith suitability, AI over-use)
- Security findings (auth, authorization, input validation, data exposure)
- Code quality findings (data quality, mixed architectural signals)
- Technology findings (correct components exist; they need alignment, not replacement)

---

## What This Example Demonstrates

1. **The skills adapt to the project, not the other way around.** No skill said "use microservices" or "switch to a different framework." The audit concluded the existing technology was appropriate and the problems were in architecture, business logic, and security.
2. **Business logic before code.** The pricing contradiction was a business logic problem, not a code problem. The audit surfaced it by understanding the business, not by reading code.
3. **Audit before modify.** The comprehensive audit identified that the website builder was the core strength and the scanner needed architectural correction — before any code changes.
4. **AI is not always the answer.** The audit found places where deterministic tools would be better than AI, saving cost and latency.

---

## How to Use This Example

Read this README as a reference for what a full audit produces. Then look at the individual skill SKILL.md files to understand how each finding was produced.

This example is illustrative. The skills work on any project; BotDigit is one demonstration.
