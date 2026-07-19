# Publishing Guide - @anderlopez/untitledui-components

Complete guide to publish your component library to npm and use it across your GitHub projects.

## 📋 Pre-Publishing Checklist

- [ ] Update `package.json` with correct name, version, and author
- [ ] Update repository URL in `package.json`
- [ ] Have npm account at [npmjs.com](https://npmjs.com)
- [ ] Ensure you're logged in: `npm login`
- [ ] All tests passing (if applicable)
- [ ] Components are properly exported in `src/index.ts`

## 🚀 Step 1: Prepare Your Package

### 1.1 Update package.json

```json
{
  "name": "@yourname/untitledui-components",
  "version": "1.0.0",
  "author": "Your Name <your@email.com>",
  "repository": {
    "type": "git",
    "url": "https://github.com/yourusername/my-site.git"
  }
}
```

**Name format:**
- Scoped (recommended): `@yourname/untitledui-components`
- Unscoped: `untitledui-components`

### 1.2 Create/Update README.md

Your main `README.md` should be clear and include examples. We already created `README-PACKAGE.md` with full documentation.

### 1.3 Add LICENSE file (optional but recommended)

```bash
# MIT License is already commonly used
# Create LICENSE file in root if not exists
```

## 🔧 Step 2: Build the Library

### 2.1 Test the build locally

```bash
npm run build:lib
```

This will:
- Compile TypeScript to CommonJS in `dist/`
- Generate type definitions (`.d.ts` files)
- Create ESM version (`.mjs` files)

### 2.2 Check the output

```bash
ls dist/
# Should see:
# - index.d.ts (type definitions)
# - index.js (CommonJS)
# - index.mjs (ESM)
```

## 🧪 Step 3: Test Locally (Before Publishing)

### 3.1 Test with npm link (Local Testing)

Test in another local project before publishing to npm:

```bash
# In your component library (my-site)
npm link

# In another project
npm link @yourname/untitledui-components

# Use in that project
import { Button } from '@yourname/untitledui-components';
```

### 3.2 Unlink when done

```bash
# In the other project
npm unlink @yourname/untitledui-components

# In your component library
npm unlink
```

## 📦 Step 4: Publish to npm

### 4.1 Login to npm

```bash
npm login
# Enter your npm username, password, and email
# If 2FA enabled, you'll be prompted for auth code
```

### 4.2 First publish (version 1.0.0)

```bash
npm publish --access public
```

**Flags:**
- `--access public` - Make package publicly available (default for unscoped)
- `--access restricted` - Private package (requires paid npm account for scoped packages)

### 4.3 Verify it published

```bash
npm view @yourname/untitledui-components
```

Should show your package on npm registry.

Check on web: `https://npmjs.com/package/@yourname/untitledui-components`

## ✅ Step 5: Use in Other Projects

Once published, use in any of your projects:

### 5.1 Install

```bash
npm install @yourname/untitledui-components
```

### 5.2 Import and use

```typescript
import { Button, Input, Badge } from '@yourname/untitledui-components';
import '@yourname/untitledui-components/styles';

export function MyApp() {
  return <Button>Click me</Button>;
}
```

### 5.3 Install in all projects

```bash
# In Project 1
npm install @yourname/untitledui-components

# In Project 2
npm install @yourname/untitledui-components

# In Project 3
npm install @yourname/untitledui-components
# ... etc
```

## 🔄 Step 6: Future Updates

### 6.1 Update components

Make changes in your component library.

### 6.2 Update version

```bash
# Patch (bug fixes): 1.0.0 → 1.0.1
npm version patch

# Minor (new features): 1.0.0 → 1.1.0
npm version minor

# Major (breaking changes): 1.0.0 → 2.0.0
npm version major
```

### 6.3 Republish

```bash
npm run build:lib
npm publish
```

### 6.4 Update in your projects

```bash
# Option 1: Update to latest
npm update @yourname/untitledui-components

# Option 2: Install specific version
npm install @yourname/untitledui-components@1.0.1
```

## 🐛 Troubleshooting

### "npm ERR! You must be logged in"

```bash
npm login
```

### "Package name already exists"

Choose a different name:
- Add your username: `@yourname/untitledui-components`
- Add a prefix: `@company/untitledui-components`
- Use different name: `untitledui-react-components`

### "ERR! 403 You do not have permission"

- For scoped packages: need npm paid account OR use `--access public`
- For unscoped: should work with public access
- Try: `npm publish --access public`

### Build fails

```bash
# Clean and rebuild
rm -rf dist/
npm run build:lib
```

### Styles not loading

Make sure you're importing styles:

```typescript
import '@yourname/untitledui-components/styles';
```

## 📊 Semantic Versioning

Follow Semantic Versioning (SemVer):

- **MAJOR** (1.0.0): Breaking changes
- **MINOR** (1.1.0): New features, backward compatible
- **PATCH** (1.0.1): Bug fixes, backward compatible

Example:
- 1.0.0 → 1.0.1: Bugfix
- 1.0.0 → 1.1.0: New component added
- 1.0.0 → 2.0.0: Component API changed

## 🔒 Best Practices

1. **Always rebuild before publishing**
   ```bash
   npm run build:lib
   npm publish
   ```

2. **Test locally first**
   ```bash
   npm link
   # Test in another project
   npm unlink
   ```

3. **Use meaningful versions**
   - Follow SemVer
   - Document breaking changes

4. **Keep README updated**
   - Installation instructions
   - Usage examples
   - API documentation

5. **Monitor npm registry**
   - Check your package page
   - Monitor downloads
   - Read issues/feedback

## 📚 Useful Commands

```bash
# View package info
npm view @yourname/untitledui-components

# List all versions
npm view @yourname/untitledui-components versions

# View specific version info
npm view @yourname/untitledui-components@1.0.0

# Check who you're logged in as
npm whoami

# Logout
npm logout
```

## 🎉 You're Done!

Your component library is now available to all your projects via npm!

Next steps:
1. Install in your other GitHub projects
2. Keep components updated
3. Gather feedback from usage
4. Release updates as needed

---

**Questions?** Check npm docs: https://docs.npmjs.com/
