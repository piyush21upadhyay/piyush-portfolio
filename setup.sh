#!/bin/sh
# Run once after cloning to install the branch-protection git hook
chmod +x .githooks/pre-commit
git config core.hooksPath .githooks
echo "✅ Git hooks installed. Direct commits to 'develop' are now blocked."
