#!/bin/bash
set -e

echo "🚀 KTMCP Website - Automated Netlify Deployment"
echo "================================================"
echo ""

# Check if netlify CLI is available
if ! command -v netlify &> /dev/null; then
    echo "❌ Netlify CLI not found. Installing..."
    npm install -g netlify-cli
fi

# Check if logged in
if ! netlify status &> /dev/null; then
    echo "❌ Not logged in to Netlify. Running login..."
    netlify login
fi

# Build the site
echo "📦 Building website..."
npm run build

# Check if site is linked
if [ ! -f ".netlify/state.json" ]; then
    echo "🔗 Linking to Netlify site..."
    echo ""
    echo "When prompted:"
    echo "  - Choose: 'Link this directory to an existing site'"
    echo "  - OR: 'Create & configure a new site'"
    echo "  - Site name: killthemcp (or leave blank)"
    echo "  - Build command: npm run build"
    echo "  - Deploy directory: dist"
    echo ""
    netlify link
fi

# Deploy to production
echo "🚢 Deploying to production..."
netlify deploy --prod --dir=dist

echo ""
echo "✅ Deployment complete!"
echo ""
echo "📊 Next steps:"
echo "  1. Add custom domain: netlify domains:add killthemcp.com"
echo "  2. Enable analytics: netlify addons:create analytics"
echo "  3. View site: netlify open:site"
echo ""
