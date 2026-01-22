#!/bin/bash

# Script to update @maqsad/icons package to the latest version
# This script updates the package and rebuilds the icon list

set -e

echo "🔄 Updating @maqsad/icons to latest version..."

# Update the package
pnpm update @maqsad/icons --latest

echo "✅ Package updated successfully!"
echo ""
echo "📋 Next steps:"
echo "1. Check if there are new or deprecated icons in the library"
echo "2. Update the icon lists in src/data/icons.ts if needed"
echo "3. Run the development server to verify changes: pnpm dev"
