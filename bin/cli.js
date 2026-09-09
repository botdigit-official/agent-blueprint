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

## Required Lifecycle
1. Inspect before modifying: Check \`docs/\` and existing codebase structure.
2. Respect existing architecture, dependencies, and business state machines.
3. Every significant change must include automated tests and update \`docs/\`.

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

RULES:
1. Always inspect existing code, dependencies, and tests before writing or editing code.
2. Never invent or introduce unapproved external libraries without measurable justification.
3. Keep living documentation in 'docs/' in sync with your code changes.
4. Run existing test suites after every modification.
5. Refer to AGENTS.md and .agents/skills/ for the canonical skill workflow.
`;
    fs.writeFileSync(cursorRulesDest, cursorContent, 'utf8');
    console.log('✅ Generated .cursorrules (for Cursor AI)');
  }

  // 5. Scaffold docs/ structure according to Tier
  const docsDir = path.join(fullTarget, 'docs');
  fs.mkdirSync(path.join(docsDir, '00-project'), { recursive: true });
  fs.mkdirSync(path.join(docsDir, '01-business'), { recursive: true });
  fs.mkdirSync(path.join(docsDir, '02-architecture'), { recursive: true });
  fs.mkdirSync(path.join(docsDir, '03-engineering'), { recursive: true });
  fs.mkdirSync(path.join(docsDir, '04-security'), { recursive: true });
  fs.mkdirSync(path.join(docsDir, '05-testing'), { recursive: true });
  fs.mkdirSync(path.join(docsDir, '08-operations'), { recursive: true });

  console.log('✅ Scaffolded living documentation structure in docs/\n');
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
