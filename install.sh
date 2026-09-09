#!/usr/bin/env bash
# ==============================================================================
# Agent Blueprint Installer & Project Linker
# Links or copies Agent Blueprint skills into target projects for AI Coding Agents
# (Compatible with Antigravity, Cursor, Claude Code, Cline, Aider, Windsurf)
# ==============================================================================

set -euo pipefail

TARGET_DIR="${1:-.}"
MODE="${2:---symlink}" # --symlink or --copy

echo "====================================================="
echo "  📐 Agent Blueprint — AI Agent Skills Installer"
echo "====================================================="

if [ ! -d "$TARGET_DIR" ]; then
  echo "❌ Error: Target directory '$TARGET_DIR' does not exist."
  echo "Usage: ./install.sh [target_directory] [--symlink | --copy]"
  exit 1
fi

BLUEPRINT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
TARGET_FULL_PATH="$(cd "$TARGET_DIR" && pwd)"

echo "📂 Source Blueprint: $BLUEPRINT_ROOT"
echo "🎯 Target Project:   $TARGET_FULL_PATH"
echo "⚙️  Mode:             $MODE"

DEST_AGENTS_DIR="$TARGET_FULL_PATH/.agents"
DEST_SKILLS_DIR="$DEST_AGENTS_DIR/skills"

mkdir -p "$DEST_SKILLS_DIR"

# Link or copy AGENTS.md entry point
if [ "$MODE" = "--copy" ]; then
  cp "$BLUEPRINT_ROOT/AGENTS.md" "$TARGET_FULL_PATH/AGENTS.md"
  cp -r "$BLUEPRINT_ROOT/skills/"* "$DEST_SKILLS_DIR/"
  echo "✅ Copied Agent Blueprint core skills and AGENTS.md to $TARGET_FULL_PATH"
else
  # Symlink AGENTS.md if not existing
  if [ ! -f "$TARGET_FULL_PATH/AGENTS.md" ]; then
    ln -s "$BLUEPRINT_ROOT/AGENTS.md" "$TARGET_FULL_PATH/AGENTS.md"
  fi
  # Symlink skills
  for skill_path in "$BLUEPRINT_ROOT/skills"/*; do
    if [ -d "$skill_path" ]; then
      skill_name="$(basename "$skill_path")"
      rm -rf "$DEST_SKILLS_DIR/$skill_name"
      ln -s "$skill_path" "$DEST_SKILLS_DIR/$skill_name"
    fi
  done
  echo "✅ Successfully symlinked Agent Blueprint skills into $DEST_SKILLS_DIR"
fi

echo ""
echo "🎉 Setup complete! AI coding agents can now discover and run Agent Blueprint."
echo "👉 Tell your agent: 'Read AGENTS.md and start project discovery'."
