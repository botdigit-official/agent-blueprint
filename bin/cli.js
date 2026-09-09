#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const REPO_URL = 'https://github.com/botdigit-official/agent-blueprint.git';
const HOME_DIR = process.env.HOME || process.env.USERPROFILE;
const CACHE_DIR = path.join(HOME_DIR, '.agent-blueprint');

function printBanner() {
  console.log('\x1b[36m=====================================================\x1b[0m');
  console.log('\x1b[1m\x1b[33m  📐 Agent Blueprint — AI Agent Skills & Standards\x1b[0m');
  console.log('  https://github.com/botdigit-official/agent-blueprint');
  console.log('\x1b[36m=====================================================\x1b[0m\n');
}

function ensureCache() {
  if (fs.existsSync(path.join(CACHE_DIR, '.git'))) {
    try {
      console.log('🔄 Fetching latest Agent Blueprint skills from GitHub...');
      execSync('git pull --quiet origin main', { cwd: CACHE_DIR, stdio: 'ignore' });
    } catch (_) {}
  } else {
    console.log('📥 Cloning Agent Blueprint into ~/.agent-blueprint...');
    fs.mkdirSync(CACHE_DIR, { recursive: true });
    execSync(`git clone --depth 1 ${REPO_URL} "${CACHE_DIR}" --quiet`, { stdio: 'inherit' });
  }
}

function cmdInit(targetDir = process.cwd(), tier = '3') {
  printBanner();
  ensureCache();

  const fullTarget = path.resolve(targetDir);
  console.log(`🎯 Initializing Agent Blueprint in: ${fullTarget}`);

  // 1. Create .agents/skills and link skills
  const destSkills = path.join(fullTarget, '.agents', 'skills');
  fs.mkdirSync(destSkills, { recursive: true });

  const srcSkills = path.join(CACHE_DIR, 'skills');
  if (fs.existsSync(srcSkills)) {
    const skills = fs.readdirSync(srcSkills);
    for (const skill of skills) {
      const srcSkillPath = path.join(srcSkills, skill);
      const destSkillPath = path.join(destSkills, skill);
      if (fs.statSync(srcSkillPath).isDirectory()) {
        try {
          if (fs.existsSync(destSkillPath)) fs.rmSync(destSkillPath, { recursive: true, force: true });
          fs.symlinkSync(srcSkillPath, destSkillPath, 'dir');
        } catch (_) {
          fs.cpSync(srcSkillPath, destSkillPath, { recursive: true });
        }
      }
    }
  }

  // 2. Generate AGENTS.md
  const agentsMdSrc = path.join(CACHE_DIR, 'AGENTS.md');
  const agentsMdDest = path.join(fullTarget, 'AGENTS.md');
  if (!fs.existsSync(agentsMdDest) && fs.existsSync(agentsMdSrc)) {
    fs.copyFileSync(agentsMdSrc, agentsMdDest);
    console.log('✅ Generated AGENTS.md (for Antigravity, Cline, Windsurf)');
  }

  // 3. Generate CLAUDE.md (for Claude Code)
  const claudeMdDest = path.join(fullTarget, 'CLAUDE.md');
  if (!fs.existsSync(claudeMdDest)) {
    const claudeContent = `# CLAUDE.md — Agent Blueprint for Claude Code

This project adheres to **Agent Blueprint** (https://github.com/botdigit-official/agent-blueprint).

## Core Rule
> The agent must adapt to the project. The project must not be forced to adapt to the skill.

## Mandatory Execution Protocol
1. **Pre-flight Planning**: Maintain an active checklist in \`TASK.md\` before making edits.
2. **Inspect Before Changing**: Review existing code and living docs in \`docs/\`.
3. **Docs Sync**: If you alter APIs, schemas, or business rules, update \`docs/\` immediately.
4. **Audit Trail**: Every change must be recorded in \`CHANGELOG.md\` under \`## [Unreleased]\`.
5. **Zero Regressions**: Run automated tests before completing any task.

Refer to \`AGENTS.md\` and \`.agents/skills/\` for complete architectural guides.
`;
    fs.writeFileSync(claudeMdDest, claudeContent, 'utf8');
    console.log('✅ Generated CLAUDE.md (for Anthropic Claude Code)');
  }

  // 4. Generate .cursorrules (for Cursor)
  const cursorRulesDest = path.join(fullTarget, '.cursorrules');
  if (!fs.existsSync(cursorRulesDest)) {
    const cursorContent = `# .cursorrules — Agent Blueprint for Cursor

You are working in a repository managed under Agent Blueprint standards.

MANDATORY PROTOCOL:
1. PRE-FLIGHT: Maintain a to-do checklist in 'TASK.md' before modifying code.
2. INSPECT: Read existing files, dependencies, and docs/ before writing new code.
3. PRESERVE: Never rewrite working systems or add unapproved libraries without measurable reason.
4. DOCS SYNC: Keep living documentation in 'docs/' in sync with every code change.
5. CHANGELOG: Record all changes in 'CHANGELOG.md' under '## [Unreleased]' with files touched.
6. TEST: Run automated tests after every modification.
`;
    fs.writeFileSync(cursorRulesDest, cursorContent, 'utf8');
    console.log('✅ Generated .cursorrules (for Cursor AI)');
  }

  // 5. Generate TASK.md if not existing
  const taskMdDest = path.join(fullTarget, 'TASK.md');
  if (!fs.existsSync(taskMdDest)) {
    const taskContent = `# Project Task Tracker

## Active Tasks
- [x] Initialized project with Agent Blueprint
- [ ] Next planned task (specify details)

## Backlog
- [ ] Future improvements
`;
    fs.writeFileSync(taskMdDest, taskContent, 'utf8');
    console.log('✅ Initialized TASK.md task tracker');
  }

  // 6. Generate CHANGELOG.md if not existing
  const changelogDest = path.join(fullTarget, 'CHANGELOG.md');
  if (!fs.existsSync(changelogDest)) {
    const changelogContent = `# Changelog

All notable changes to this project are documented in this file.
Format is based on [Keep a Changelog](https://keepachangelog.com/).

## [Unreleased]

### Added
- Integrated Agent Blueprint architectural and skill framework.
`;
    fs.writeFileSync(changelogDest, changelogContent, 'utf8');
    console.log('✅ Initialized CHANGELOG.md audit trail');
  }

  // 7. Scaffold Enterprise Controlled Source of Truth (00-18) in docs/
  const docsDir = path.join(fullTarget, 'docs');
  fs.mkdirSync(docsDir, { recursive: true });

  const srcControlledDir = path.join(CACHE_DIR, 'templates', 'controlled-source-of-truth');
  if (fs.existsSync(srcControlledDir)) {
    const controlledTemplates = fs.readdirSync(srcControlledDir);
    for (const t of controlledTemplates) {
      const destFile = path.join(docsDir, t);
      if (!fs.existsSync(destFile)) {
        fs.copyFileSync(path.join(srcControlledDir, t), destFile);
      }
    }
    console.log('✅ Scaffolded 19-Document Controlled Source of Truth in docs/ (00_MASTER_INDEX to 18_FEATURE_CHECKLIST)');
  }

  // 8. Scaffold category subdirectories in docs/
  fs.mkdirSync(path.join(docsDir, '00-project'), { recursive: true });
  fs.mkdirSync(path.join(docsDir, '01-business'), { recursive: true });
  fs.mkdirSync(path.join(docsDir, '02-architecture'), { recursive: true });
  fs.mkdirSync(path.join(docsDir, '03-engineering'), { recursive: true });
  fs.mkdirSync(path.join(docsDir, '04-security'), { recursive: true });
  fs.mkdirSync(path.join(docsDir, '05-testing'), { recursive: true });
  fs.mkdirSync(path.join(docsDir, '08-operations'), { recursive: true });
  fs.mkdirSync(path.join(docsDir, '09-audits'), { recursive: true });

  console.log('🎉 Setup complete! All AI tools (Antigravity, Claude Code, Cursor, Windsurf) are now aligned.');
  console.log("👉 Tell your agent: 'Read AGENTS.md and start discovery'.\n");
}

function cmdUpdate() {
  printBanner();
  ensureCache();
  console.log('🔄 Pulling latest Agent Blueprint skills...');
  try {
    execSync('git pull origin main', { cwd: CACHE_DIR, stdio: 'inherit' });
    console.log('✅ All skills successfully updated to the latest GitHub release.');
  } catch (err) {
    console.error('❌ Failed to update skills:', err.message);
  }
}

function cmdStatus() {
  printBanner();
  if (fs.existsSync(path.join(CACHE_DIR, '.git'))) {
    const commit = execSync('git log -1 --oneline', { cwd: CACHE_DIR }).toString().trim();
    console.log(`📍 Local Cache: ${CACHE_DIR}`);
    console.log(`📌 Latest Commit: ${commit}`);
  } else {
    console.log('⚠️ Agent Blueprint cache is not yet installed. Run "agent-blueprint init".');
  }
}

const args = process.argv.slice(2);
const command = args[0] || 'init';

switch (command) {
  case 'init':
    cmdInit(args[1]);
    break;
  case 'update':
    cmdUpdate();
    break;
  case 'status':
    cmdStatus();
    break;
  default:
    console.log('Usage: agent-blueprint [init | update | status]');
    process.exit(1);
}
