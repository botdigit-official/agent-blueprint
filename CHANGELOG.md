# Changelog

All notable changes to this project are documented in this file.
Format is based on [Keep a Changelog](https://keepachangelog.com/).

## [Unreleased]

### Added
- **Skill 12 (`skills/12-context-engineering`)**: Formalized context boundary management, subagent delegation patterns, token decay prevention, and wave-based execution protocols inspired by Open GSD (`open-gsd/gsd-core`).
- **Skill 13 (`skills/13-phase-loop-delivery`)**: Integrated the universal 5-phase delivery loop (Discuss → Plan → Execute → Verify → Ship) across Antigravity, Claude Code, Cursor, and Windsurf.
- **Skill 14 (`skills/14-forensics-and-debugging`)**: Structured forensic root-cause analysis, state capture, minimal reproducers, and regression shields.
- **Slash Commands Guide (`slash-commands/README.md`)**: Provided standardized slash-command prompts (`/blueprint:discuss`, `/blueprint:plan`, `/blueprint:execute`, `/blueprint:verify`, `/blueprint:ship`, `/blueprint:forensics`, `/blueprint:doctor`).
- **CLI Subcommands**:
  - `agent-blueprint plan`: Scaffold wave-based feature plans into `TASK.md`.
  - `agent-blueprint verify`: Run test runner detection, task completion validation, and living docs sync audit.
  - `agent-blueprint doctor`: Audit repository compliance with Agent Blueprint standards.
- **Docs & Protocols**: Updated `AGENTS.md`, `README.md`, and bumped `@botdigit/agent-blueprint` to `1.1.0`.

## [1.0.3] - 2026-09-09
### Added
- Integrated Enterprise Controlled Source of Truth Standard (00-18) and Skill 11.
