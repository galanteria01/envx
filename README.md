# envx

A safe environment variable manager that prevents secret leaks by storing environment variables outside your repository.

📦 **npm**: [https://www.npmjs.com/package/@galanteria01/envx](https://www.npmjs.com/package/@galanteria01/envx)

## Features

- 🔒 **Secure**: Secrets are stored in `~/.envx/` outside your repository
- 🛡️ **Git-safe**: Automatically prevents tracking `.env` files in git
- 🚀 **Simple**: Easy to use CLI for managing environment variables
- 🔄 **Multi-environment**: Support for different environments (development, staging, production, etc.)

## Installation

Install envx globally:

```bash
npm install -g @galanteria01/envx
```

Or use it locally in your project:

```bash
npm install @galanteria01/envx
```

Or use it directly with npx:

```bash
npx @galanteria01/envx init
npx @galanteria01/envx run npm start
```

📦 **Package**: [https://www.npmjs.com/package/@galanteria01/envx](https://www.npmjs.com/package/@galanteria01/envx)

## Quick Start

### 1. Initialize envx in your project

```bash
envx init
```

This command will:
- Create a `.env.ref` file that references your project and environment
- Update or create `.gitignore` to exclude `.env` files
- Create the secrets directory structure at `~/.envx/{project-name}/`
- Create an initial `development.env` file for you to add your secrets

### 2. Add your environment variables

Edit the secrets file created at `~/.envx/{project-name}/development.env`:

```bash
# ~/.envx/my-project/development.env
API_KEY=your-api-key-here
DATABASE_URL=postgresql://localhost:5432/mydb
SECRET_TOKEN=your-secret-token
```

### 3. Run commands with injected environment variables

```bash
envx run npm start
envx run node server.js
envx run python app.py
envx run "npm test && npm build"
```

## How It Works

### Project Structure

When you run `envx init`, it creates:

1. **`.env.ref`** (in your project root) - Contains project name and current environment:
   ```json
   {
     "project": "my-project",
     "env": "development"
   }
   ```

2. **`~/.envx/{project-name}/{env}.env`** - Your actual secrets file (outside the repo)

### Security Features

- **Git Protection**: envx checks if any `.env` files are tracked by git and will error if found
- **No Secrets in Repo**: All secrets are stored in `~/.envx/` which is never committed
- **Environment Isolation**: Each environment (dev, staging, prod) has its own secrets file

## Usage

### Initialize a project

```bash
envx init
```

### Run a command with environment variables

```bash
envx run <command>
```

The command can be any shell command or script. Examples:

```bash
# Run a Node.js app
envx run node app.js

# Run npm scripts
envx run npm start
envx run npm test

# Run with multiple commands
envx run "npm install && npm start"

# Run Python scripts
envx run python manage.py runserver

# Run shell commands
envx run "export UPLOAD=true && ./upload.sh"
```

### Multiple Environments

To use different environments, edit the `.env.ref` file:

```json
{
  "project": "my-project",
  "env": "production"
}
```

Then create the corresponding secrets file at `~/.envx/my-project/production.env`.

## File Locations

- **Config**: `.env.ref` (in your project root)
- **Secrets**: `~/.envx/{project-name}/{env}.env`
- **Home Directory**: `~/.envx/` (created automatically)

## Examples

### Example 1: Node.js Application

```bash
# Initialize
envx init

# Add secrets to ~/.envx/my-app/development.env
# DATABASE_URL=postgres://...
# API_KEY=abc123

# Run your app
envx run npm start
```

### Example 2: Python Application

```bash
# Initialize
envx init

# Add secrets to ~/.envx/my-python-app/development.env
# SECRET_KEY=your-secret-key
# DEBUG=True

# Run your app
envx run python manage.py runserver
```

### Example 3: Multiple Commands

```bash
envx run "npm install && npm test && npm build"
```

## Safety Checks

envx automatically checks for tracked `.env` files in git. If it finds any, it will error:

```
❌ A .env file is tracked by git. Remove it immediately.
```

To fix this, remove the `.env` file from git:

```bash
git rm --cached .env
# Add .env to .gitignore (envx does this automatically)
git commit -m "Remove .env from tracking"
```

## Troubleshooting

### "❌ .env.ref not found"

Run `envx init` in your project directory first.

### "❌ Secrets not found at ~/.envx/..."

Create the secrets file at the specified path. You can find the path in the error message.

### "❌ A .env file is tracked by git"

Remove the `.env` file from git tracking (see Safety Checks above).

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details on how to submit pull requests, report bugs, or suggest features.

- [Code of Conduct](CODE_OF_CONDUCT.md)
- [Contributing Guide](CONTRIBUTING.md)
- [Security Policy](SECURITY.md)
- [Changelog](CHANGELOG.md)

## License

ISC License - see [LICENSE](LICENSE) file for details.
