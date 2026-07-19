# Quick Commands Reference

Copy-paste ready commands for publishing and using your component library.

## 🔧 Preparation (Do These First)

### 1. Edit package.json

Update these fields in your `package.json`:

```bash
# Option: Use sed to replace (macOS/Linux)
sed -i 's/"name": "untitledui-nextjs-starter-kit"/"name": "@yourname\/untitledui-components"/' package.json

# OR manually edit package.json and change:
# - "name": "@yourname/untitledui-components"
# - "version": "1.0.0"
# - "author": "Your Name <your@email.com>"
# - "repository.url": "https://github.com/yourusername/my-site.git"
```

## 🧪 Test Locally

### Build the library

```bash
npm run build:lib
```

### Link locally for testing

```bash
# In your component library (my-site)
npm link

# In another local project
cd ../another-project
npm link @yourname/untitledui-components

# Test import it there
# import { Button } from '@yourname/untitledui-components';

# Unlink when done
npm unlink @yourname/untitledui-components

# Back in library
cd ../my-site
npm unlink
```

## 📦 Publish to npm

### Step 1: Login to npm

```bash
npm login
# Enter your npm username
# Enter your npm password
# Enter your npm email
# If 2FA enabled, enter auth code when prompted
```

### Step 2: Check version

```bash
npm view @yourname/untitledui-components version
# Should show: no such package (first time) or version number
```

### Step 3: Publish

```bash
# First publish
npm publish --access public

# OR if using private npm account
npm publish
```

### Step 4: Verify

```bash
# Check it's on npm
npm view @yourname/untitledui-components

# View on web
# https://npmjs.com/package/@yourname/untitledui-components
```

## 🚀 Use in Other Projects

### Install the package

```bash
# In your other projects
npm install @yourname/untitledui-components
```

### Import styles (one time, in entry point)

```typescript
// app.tsx or main.tsx or _app.tsx
import '@yourname/untitledui-components/styles';
```

### Use components

```typescript
import { Button, Input } from '@yourname/untitledui-components';

<Button>Click me</Button>
<Input label="Name" />
```

## 🔄 Update & Republish

### Make changes

```bash
# Edit components as usual in src/
# Test with npm run dev
```

### Update version

```bash
# Patch (bugfix)
npm version patch

# OR minor (new feature)
npm version minor

# OR major (breaking change)
npm version major
```

### Rebuild and publish

```bash
npm run build:lib
npm publish
```

### Update in your projects

```bash
# In your other projects
npm update @yourname/untitledui-components

# OR specific version
npm install @yourname/untitledui-components@1.0.1
```

## 📊 Check Package Info

```bash
# View package on npm
npm view @yourname/untitledui-components

# View all versions
npm view @yourname/untitledui-components versions

# View specific version
npm view @yourname/untitledui-components@1.0.0

# Check who you're logged in as
npm whoami

# View your npm profile
npm profile get
```

## 🗑️ Cleanup

### Unlink from local testing

```bash
# In test project
npm unlink @yourname/untitledui-components

# In library
npm unlink

# Clean install
npm install
```

### Clean build artifacts

```bash
rm -rf dist/
npm run build:lib
```

## 🔑 Shortcut: All-in-one Commands

### First time setup and publish

```bash
# 1. Edit package.json manually with your info
# 2. Build
npm run build:lib

# 3. Test locally (optional)
npm link
# ... test in another project ...
npm unlink

# 4. Login
npm login

# 5. Publish
npm publish --access public
```

### Update and republish

```bash
# Make changes in src/
npm run build:lib
npm version patch
npm publish
```

### Install in new project

```bash
npm install @yourname/untitledui-components
# Then add to entry point:
# import '@yourname/untitledui-components/styles';
```

## 🆘 Troubleshooting Commands

```bash
# Clear npm cache
npm cache clean --force

# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Check if you're logged in
npm whoami

# Logout and login again
npm logout
npm login

# Check package build output
ls -la dist/

# Check package.json syntax
npm ls
```

## 📋 Minimal Checklist

```bash
# 1. Update package.json
# - name: @yourname/untitledui-components
# - author: Your Name
# - repository: your GitHub URL

# 2. Build
npm run build:lib

# 3. Login
npm login

# 4. Publish
npm publish --access public

# 5. Install in other projects
npm install @yourname/untitledui-components

# 6. Import in each project
# import '@yourname/untitledui-components/styles';
```

## 💡 Common Patterns

### Scoped package name
```bash
npm publish @yourname/untitledui-components
```

### Unscoped package name
```bash
npm publish untitledui-components
```

### Pre-release version
```bash
npm version 1.0.0-beta.1
npm publish --tag beta
npm install @yourname/untitledui-components@beta
```

### Deprecate old version
```bash
npm deprecate @yourname/untitledui-components@1.0.0 "Use 1.0.1 instead"
```

## 🎯 Next: Read Full Guides

After using these commands, refer to:
- `PUBLISHING_GUIDE.md` - Detailed guide with explanations
- `USAGE_IN_OTHER_PROJECTS.md` - Framework-specific setup
- `README-PACKAGE.md` - Complete documentation

---

**Pro tip**: Copy the "Minimal Checklist" and follow it step-by-step for fastest setup!
