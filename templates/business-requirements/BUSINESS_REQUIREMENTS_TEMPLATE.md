# Business Requirements

**Project:** [name]
**Date:** [YYYY-MM-DD]
**Author:** [who wrote this]

---

## Business Model

[How this project creates or captures value]

---

## Actors

| Actor | Type | Can Do | Can See | Cannot Do |
|---|---|---|---|---|
| [name] | [type] | [actions] | [data] | [restricted] |

---

## Business Entities

| Entity | Description | Key Data | Owner | Lifecycle |
|---|---|---|---|---|
| [name] | [what it represents] | [key fields] | [who owns it] | [lifecycle] |

---

## Business Processes

### [Process Name]

**Actor:** [who initiates]
**Steps:**
1. [step]
2. [step]
**End state:** [final state]
**Failure handling:** [what happens on failure]

---

## Business Rules

### [BR-XXX] — [Rule Name]

**Category:** [authorization | validation | pricing | state | access | compliance | integrity]
**Rule:** [description]
**Condition:** [when it applies]
**Outcome:** [what happens]
**Exception:** [exceptions]
**Invariant:** [what must never happen]

---

## State Machines

### [Entity] Lifecycle

**States:** [list]
**Transitions:**
- [state A] → [state B]: [trigger], [validation], [side effects]
**Terminal states:** [list]

---

## Pricing (if applicable)

[How pricing works. Where is the single source of truth?]

---

## Edge Cases

- [scenario]: [how it is handled]
- [scenario]: [how it is handled]
