# AGENTS.md

## Rules

- In route files, declare `loader` before `head`. With the installed TanStack Router, a `head` option placed before `loader` silently breaks loader-data type inference (`Route.useLoaderData()` types as `undefined`).
- Keep the `seroval` override in `package.json` at or above the version required by the installed `@tanstack/start-server-core`. A lower pin breaks server streaming at runtime with a missing `isStream` export.
