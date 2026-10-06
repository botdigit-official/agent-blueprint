# Agent Blueprint Slash Commands & Prompts

Standard slash command prompts compatible with **Antigravity IDE**, **Claude Code**, **Cursor**, **Windsurf**, and other AI coding assistants.

---

## Command Reference

| Slash Command | Skill | Action |
|---|---|---|
| `/blueprint:discuss` | `13-phase-loop-delivery` | Interview user, surface architectural edge-cases, lock decisions before planning |
| `/blueprint:plan` | `12-context-engineering` + `13-phase-loop-delivery` | Research codebase, generate wave-based task breakdown in `TASK.md` |
| `/blueprint:execute` | `12-context-engineering` | Execute active wave within strict file boundaries and subagent isolation |
| `/blueprint:loop` | `15-autonomous-loop` | Autonomous Ralph-loop execution of tasks with validation commands |
| `/blueprint:review` | `15-autonomous-loop` | 5-agent parallel review (quality, implementation, testing, simplification, docs) |
| `/blueprint:simplify` | `15-autonomous-loop` | Ruthless anti-overengineering audit (YAGNI, strip speculative abstractions) |
| `/blueprint:verify` | `08-testing` + `13-phase-loop-delivery` | Run automated test suite, build checks, and verify zero false accomplishments |
| `/blueprint:ship` | `13-phase-loop-delivery` | Create conventional git commit, sync living docs (`docs/`), update `CHANGELOG.md` |
| `/blueprint:forensics` | `14-forensics-and-debugging` | Create minimal reproduction script, trace git diffs, prove root-cause |
| `/blueprint:doctor` | `10-audit` + `cli doctor` | Audit project against Agent Blueprint and Controlled Source of Truth standards |

---

## 1. `/blueprint:discuss`
```markdown
Read AGENTS.md and skills/13-phase-loop-delivery/SKILL.md.
Before writing any code or modifying any files:
1. Identify any underspecified requirements or hidden assumptions.
2. Formulate 2-4 clarifying questions with recommended defaults.
3. Once aligned, record decisions in TASK.md under ## Active Decisions.
```

## 2. `/blueprint:plan`
```markdown
Read AGENTS.md, skills/12-context-engineering/SKILL.md, and skills/13-phase-loop-delivery/SKILL.md.
Plan the implementation into sequential, non-overlapping task waves:
- Wave 1: Schema, Types & Contracts
- Wave 2: Service Layer & Business Logic
- Wave 3: UI, Controllers & Endpoints
- Wave 4: Integration Verification & Docs Sync
Write the plan to TASK.md with explicit checkbox items (- [ ] Wave X.Y: ...).
```

## 3. `/blueprint:execute`
```markdown
Read AGENTS.md and the active Wave in TASK.md.
Execute the current wave following strict context boundaries:
- Modify only the files scoped to this wave.
- Do not touch unrelated systems or config secrets.
- Check off completed items in TASK.md as you progress.
- Keep output concise to prevent context rot.
```

## 4. `/blueprint:verify`
```markdown
Read skills/08-testing/SKILL.md and skills/13-phase-loop-delivery/SKILL.md.
Execute the full test and verification suite:
1. Run automated unit and integration tests.
2. Run linters and typecheckers.
3. Provide raw command output proving 0 failures.
4. Adhere to the Zero False Accomplishment rule — never claim done without proof.
```

## 5. `/blueprint:ship`
```markdown
Read skills/13-phase-loop-delivery/SKILL.md.
Prepare the repository for release/PR:
1. Verify all items in TASK.md are checked off.
2. Sync living docs in docs/ (API endpoints, schemas, architecture ADRs).
3. Append an audit entry in CHANGELOG.md under ## [Unreleased].
4. Stage changes and commit with Conventional Commits (feat/fix/chore).
```

## 6. `/blueprint:forensics`
```markdown
Read skills/14-forensics-and-debugging/SKILL.md.
Do not guess or apply random trial-and-error fixes:
1. Isolate the failure and write a minimal reproduction test or shell command.
2. Inspect git diffs (git log -S) and recent commits to identify regression origins.
3. Formulate a testable root-cause hypothesis and verify it empirically.
4. Apply surgical fix, verify reproduction test passes, and prove zero regressions.
```

## 7. `/blueprint:loop`
```markdown
Read skills/15-autonomous-loop-and-simplification/SKILL.md.
Execute the plan in TASK.md iteratively using the Ralph Loop:
1. Find the next uncompleted task (- [ ]).
2. Execute with minimal scoped context (only files touched).
3. Run the project's validation commands (e.g. tests, linters).
4. Upon passing, check off the item (- [x]) and commit changes atomically.
5. Repeat for the next task until all tasks complete.
```

## 8. `/blueprint:review`
```markdown
Read skills/15-autonomous-loop-and-simplification/SKILL.md.
Execute the 5-agent parallel code review on current branch diff (git diff main...HEAD):
1. [quality]: Check memory leaks, race conditions, auth bypasses, unhandled errors.
2. [implementation]: Verify all acceptance criteria are met (no scope creep).
3. [testing]: Verify unit test coverage and edge cases.
4. [simplification]: Ruthlessly audit against over-engineering and premature abstraction.
5. [documentation]: Confirm docs/ and CHANGELOG.md sync.
Synthesize findings into an actionable fix list.
```

## 9. `/blueprint:simplify`
```markdown
Read skills/15-autonomous-loop-and-simplification/SKILL.md.
Conduct a strict Anti-Overengineering Review on recent changes:
1. Identify any single-implementation interfaces, bloated factories, or unused generics.
2. Apply YAGNI: Strip speculative extensibility hooks and dead code.
3. Eliminate unnecessary external dependencies where standard library suffices.
4. Simplify complex metaprogramming into readable, direct sequential logic.
Goal: Reduce line count and cognitive complexity without altering functionality.
```
