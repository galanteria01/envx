#!/bin/bash

# Script to publish @galanteria01/envx to npm

set -e

echo "🔍 Checking npm login status..."
npm whoami || {
  echo "❌ Not logged in to npm. Please run: npm login"
  exit 1
}

USERNAME=$(npm whoami)
echo "✅ Logged in as: $USERNAME"

echo ""
echo "⚠️  IMPORTANT: npm requires Two-Factor Authentication (2FA) or a granular access token to publish packages."
echo ""
echo "   Quick setup options:"
echo "   1. Enable 2FA: https://www.npmjs.com/settings/$USERNAME/two-factor-auth"
echo "   2. Use access token: https://www.npmjs.com/settings/$USERNAME/tokens"
echo ""
echo "   See SETUP_2FA.md for detailed instructions."
echo ""
read -p "Press Enter to continue (or Ctrl+C to set up 2FA first)..."
echo ""

echo "🔨 Building package..."
npm run build

echo "📦 Publishing to npm..."
if npm publish --access public; then
  echo ""
  echo "✅ Published successfully!"
  echo "📦 Package URL: https://www.npmjs.com/package/@galanteria01/envx"
  echo ""
  echo "To install:"
  echo "  npm install -g @galanteria01/envx"
  echo "  # or"
  echo "  npx @galanteria01/envx"
else
  echo ""
  echo "❌ Publishing failed!"
  echo ""
  echo "If you see a 403 error about 2FA:"
  echo "  1. Enable 2FA: https://www.npmjs.com/settings/$(npm whoami)/two-factor-auth"
  echo "  2. Or use an access token: https://www.npmjs.com/settings/$(npm whoami)/tokens"
  echo "     Then run: npm config set //registry.npmjs.org/:_authToken YOUR_TOKEN"
  exit 1
fi

