# Publishing to npm

This guide explains how to publish envx to npm.

## Prerequisites

1. **npm account**: Create an account at [https://www.npmjs.com/signup](https://www.npmjs.com/signup)
2. **Two-Factor Authentication (2FA)**: npm requires 2FA to publish packages. Enable it at [npm settings](https://www.npmjs.com/settings/your-username/two-factor-auth)
   - **Alternative**: Use a granular access token with publish permissions instead of 2FA
3. **Login**: Run `npm login` to authenticate
4. **Check package name**: Verify the package name is available (we use `@galanteria01/envx`)

### Setting up 2FA or Access Token

**Option 1: Enable 2FA (Recommended)**
1. Go to [npm Account Settings](https://www.npmjs.com/settings/your-username/two-factor-auth)
2. Click "Enable 2FA"
3. Follow the setup instructions using an authenticator app (Google Authenticator, Authy, etc.)
4. When publishing, npm will prompt for your 2FA code

**Option 2: Use Granular Access Token**
1. Go to [npm Access Tokens](https://www.npmjs.com/settings/your-username/tokens)
2. Click "Generate New Token"
3. Select "Granular Access Token"
4. Choose "Publish" scope
5. Copy the token and set it:
   ```bash
   npm config set //registry.npmjs.org/:_authToken YOUR_TOKEN
   ```

## Pre-publishing Checklist

- [ ] Update version in `package.json` (following [Semantic Versioning](https://semver.org/))
- [ ] Update `CHANGELOG.md` with the new version
- [ ] Run `npm run build` to ensure dist/ is up to date
- [ ] Test the package locally: `npm link` and test the `envx` command
- [ ] Ensure all tests pass (if you have tests)
- [ ] Review `package.json` for accuracy

## Publishing Steps

### 1. Build the package

```bash
npm run build
```

This will copy all files from `src/` to `dist/` directory.

### 2. Test locally (optional but recommended)

```bash
# Link the package locally
npm link

# Test the command
envx --version
envx init
```

### 3. Check what will be published

```bash
npm pack --dry-run
```

This shows what files will be included in the package (based on the `files` field in `package.json`).

### 4. Publish to npm

**Important**: npm requires 2FA or a granular access token to publish. If you get a 403 error, see the Prerequisites section above.

For the first release:

```bash
npm publish --access public
```

(Note: `--access public` is required for scoped packages like `@galanteria01/envx`)

For subsequent releases, update the version first:

```bash
# Patch release (1.0.0 -> 1.0.1)
npm version patch

# Minor release (1.0.0 -> 1.1.0)
npm version minor

# Major release (1.0.0 -> 2.0.0)
npm version major
```

Then publish:

```bash
npm publish
```

The `prepublishOnly` script will automatically run `npm run build` before publishing.

### 5. Verify publication

Visit [https://www.npmjs.com/package/envx](https://www.npmjs.com/package/envx) to verify your package is published.

### 6. Create a GitHub release (optional)

After publishing, create a release on GitHub:

```bash
git tag v1.0.0
git push origin v1.0.0
```

Or create a release through the GitHub web interface.

## Package Configuration

The package is configured with:

- **Entry point**: `dist/index.js`
- **Binary**: `dist/index.js` (executable as `envx`)
- **Files included**: `dist/`, `LICENSE`, `README.md`
- **Node version**: Requires Node.js >= 14.0.0

## Troubleshooting

### "403 Forbidden - Two-factor authentication required"

This error means you need to enable 2FA or use an access token:

1. **Enable 2FA**:
   - Visit: https://www.npmjs.com/settings/your-username/two-factor-auth
   - Follow the setup instructions
   - When publishing, npm will prompt for your 2FA code

2. **Or use an access token**:
   - Visit: https://www.npmjs.com/settings/your-username/tokens
   - Generate a granular access token with "Publish" scope
   - Set it: `npm config set //registry.npmjs.org/:_authToken YOUR_TOKEN`

### "Package name already exists"

If `envx` is taken, you can:
1. Use a scoped package: `@yourusername/envx`
2. Choose a different name

To use a scoped package, update `package.json`:
```json
{
  "name": "@yourusername/envx",
  ...
}
```

### "You do not have permission to publish"

Make sure you're logged in: `npm login`

### "Invalid package.json"

Check that all required fields are filled:
- name
- version
- description
- license
- repository

## Updating the Package

1. Make your changes
2. Update version: `npm version patch|minor|major`
3. Update CHANGELOG.md
4. Build: `npm run build`
5. Publish: `npm publish`

## Unpublishing (if needed)

⚠️ **Warning**: Unpublishing should be done within 72 hours of publishing and only in exceptional circumstances.

```bash
npm unpublish envx@1.0.0
```

For more information, see [npm unpublish policy](https://docs.npmjs.com/policies/unpublish).

