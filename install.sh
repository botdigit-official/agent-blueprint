#!/usr/bin/env bash
# ==============================================================================
# Agent Blueprint — Universal AI Agent Skills Installer & Project Linker
# Can be run locally OR remotely via:
# curl -fsSL https://raw.githubusercontent.com/botdigit-official/agent-blueprint/main/install.sh | bash
# ==============================================================================

set -euo pipefail

REPO_URL="https://github.com/botdigit-official/agent-blueprint.git"
GLOBAL_CACHE_DIR="${HOME}/.agent-blueprint"
TARGET_DIR="${1:-.}"

echo "====================================================="
echo "  📐 Agent Blueprint — AI Agent Skills Installer"
echo "  Standardizing Living Docs & Architectural Rigor"
echo "====================================================="

TARGET_FULL_PATH="$(cd "$TARGET_DIR" 2>/dev/null && pwd || pwd)"

# Step 1: Ensure we have the latest Agent Blueprint source via git clone / pull
if [ -d "$GLOBAL_CACHE_DIR/.git" ]; then
  echo "🔄 Pulling latest Agent Blueprint skills from GitHub..."
  (cd "$GLOBAL_CACHE_DIR" && git pull --quiet origin main 2>/dev/null || git pull --quiet origin master 2>/dev/null || true)
else
  echo "📥 Cloning Agent Blueprint from GitHub ($REPO_URL)..."
  mkdir -p "$GLOBAL_CACHE_DIR"
  git clone --depth 1 "$REPO_URL" "$GLOBAL_CACHE_DIR" --quiet
fi

BLUEPRINT_ROOT="$GLOBAL_CACHE_DIR"

echo "📂 Source Blueprint: $BLUEPRINT_ROOT"
echo "🎯 Target Project:   $TARGET_FULL_PATH"

DEST_AGENTS_DIR="$TARGET_FULL_PATH/.agents"
DEST_SKILLS_DIR="$DEST_AGENTS_DIR/skills"

mkdir -p "$DEST_SKILLS_DIR"

# Link or copy AGENTS.md entry point
if [ ! -f "$TARGET_FULL_PATH/AGENTS.md" ]; then
  cp "$BLUEPRINT_ROOT/AGENTS.md" "$TARGET_FULL_PATH/AGENTS.md"
  echo "📄 Created AGENTS.md at project root"
fi

# Link all modular skills
for skill_path in "$BLUEPRINT_ROOT/skills"/*; do
  if [ -d "$skill_path" ]; then
    skill_name="$(basename "$skill_path")"
    rm -rf "$DEST_SKILLS_DIR/$skill_name"
    ln -s "$skill_path" "$DEST_SKILLS_DIR/$skill_name"
  fi
done

# Create a local helper script in the project for easy updating
cat << 'EOF' > "$TARGET_FULL_PATH/blueprint"
#!/usr/bin/env bash
set -e
CACHE="${HOME}/.agent-blueprint"
if [ "$1" = "update" ]; then
  echo "🔄 Updating Agent Blueprint skills from GitHub..."
  (cd "$CACHE" && git pull origin main)
  echo "✅ Skills updated to latest version."
elif [ "$1" = "audit" ]; then
  echo "🔍 Starting Agent Blueprint discovery & audit..."
  echo "👉 Prompt your agent: 'Read AGENTS.md and start audit (skills/10-audit)'"
elif [ "$1" = "status" ]; then
  echo "📐 Agent Blueprint installed at: .agents/skills"
  (cd "$CACHE" && git log -1 --oneline)
else
  echo "Usage: ./blueprint [update | audit | status]"
fi
EOF
chmod +x "$TARGET_FULL_PATH/blueprint"

echo ""
echo "✅ Agent Blueprint successfully installed in $TARGET_FULL_PATH!"
echo "   - Skills directory: .agents/skills/"
echo "   - Agent manual:     AGENTS.md"
echo "   - Helper CLI:       ./blueprint [update | audit | status]"
echo ""
echo "🎉 Prompt your agent: 'Read AGENTS.md and start project discovery'."
