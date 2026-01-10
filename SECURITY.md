# Security Policy

## Supported Versions

We release patches for security vulnerabilities. Which versions receive security updates depends on the severity of the vulnerability.

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

**Please do not report security vulnerabilities through public GitHub issues.**

Instead, please report them via one of the following methods:

1. **GitHub Security Advisories** (Recommended):
   - Go to https://github.com/yourusername/envx/security/advisories/new
   - Click "Report a vulnerability"
   - Fill out the form with details about the vulnerability

2. **Email**: [INSERT SECURITY EMAIL]

When reporting a vulnerability, please include:

- Type of vulnerability (e.g., XSS, injection, etc.)
- Full paths of source file(s) related to the vulnerability
- The location of the affected code (tag/branch/commit or direct URL)
- Step-by-step instructions to reproduce the issue
- Proof-of-concept or exploit code (if possible)
- Impact of the issue, including how an attacker might exploit it

## Security Best Practices

When using envx:

1. **Never commit secrets**: envx is designed to prevent this, but always double-check your `.gitignore`
2. **Use strong permissions**: Ensure your `~/.envx/` directory has appropriate file permissions (typically `700` or `600`)
3. **Rotate secrets regularly**: Update your environment variables periodically
4. **Use different secrets per environment**: Never reuse production secrets in development
5. **Review access**: Regularly audit who has access to your secrets files

## Security Features

envx includes several security features:

- ✅ Prevents tracking of `.env` files in git
- ✅ Stores secrets outside the repository
- ✅ Validates git repository state before running commands
- ✅ Supports environment isolation

## Disclosure Policy

When we receive a security bug report, we will:

1. Confirm the issue and determine affected versions
2. Acknowledge receipt of the vulnerability report
3. Work on a fix in a private repository
4. Prepare a security advisory
5. Release the fix and security advisory

We aim to respond to security reports within 48 hours and provide regular updates on the status of the fix.

## Recognition

We appreciate responsible disclosure of security vulnerabilities. With your permission, we would like to recognize your contribution in our security advisories and release notes.

