# Contributing to envx

Thank you for your interest in contributing to envx! This document provides guidelines and instructions for contributing.

## Code of Conduct

This project adheres to a Code of Conduct that all contributors are expected to follow. Please read [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md) before contributing.

## How to Contribute

### Reporting Bugs

If you find a bug, please open an issue using the [bug report template](.github/ISSUE_TEMPLATE/bug_report.md). Include:

- A clear description of the bug
- Steps to reproduce
- Expected vs actual behavior
- Environment details (OS, Node.js version, etc.)
- Any relevant error messages

### Suggesting Features

Feature requests are welcome! Please open an issue using the [feature request template](.github/ISSUE_TEMPLATE/feature_request.md) and describe:

- The problem you're trying to solve
- Your proposed solution
- Any alternatives you've considered

### Pull Requests

1. **Fork the repository** and clone your fork
2. **Create a branch** for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```
3. **Make your changes** and ensure they work
4. **Test your changes**:
   ```bash
   npm run build
   npm run dev
   ```
5. **Commit your changes** with clear, descriptive commit messages
6. **Push to your fork** and open a Pull Request

### Development Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/envx.git
   cd envx
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Make your changes in the `src/` directory

4. Build the project:
   ```bash
   npm run build
   ```

5. Test your changes:
   ```bash
   npm run dev
   ```

### Code Style

- Use consistent formatting (consider using a formatter like Prettier)
- Write clear, descriptive variable and function names
- Add comments for complex logic
- Keep functions focused and small
- Follow existing code patterns

### Commit Messages

Write clear, descriptive commit messages:

- Use the imperative mood ("Add feature" not "Added feature")
- Keep the first line under 50 characters
- Add a blank line between the subject and body
- Explain what and why, not how

Example:
```
Add support for custom envx home directory

Allow users to override the default ~/.envx location
by setting the ENVX_HOME environment variable.
```

### Testing

Before submitting a PR, please:

- Test your changes on your local machine
- Ensure the build completes successfully
- Test the functionality you've added or modified
- Check that existing functionality still works

### Documentation

- Update the README.md if you add new features or change behavior
- Add comments to complex code
- Update CHANGELOG.md for user-facing changes

## Questions?

If you have questions about contributing, feel free to open an issue with the "question" label.

Thank you for contributing to envx! 🎉

