# Project

## pnpm updates & fixing vulnerabilities

### Context

`minimumReleaseAge` was introduced to pnpm 10 in september 2025, pnpm 11 made it opt-out. \
`pnpm update` updates all dependencies within the defined semver and ***<u>respects</u>*** the `minimumReleaseAge`. \
Renovate bot also uses a minimum age. Optimally, these ages are the same.

pnpm 11 also came with a new audit feature, aimed at improving the old workflow of: \
Override transitive deps → install → remove override \
It changes those deps directly in the lockfile with `pnpm audit --fix update`

### Dependency Duty

Workflow Minors/Patches:
- `pnpm update` For updating within semver (minor/patches)
- `pnpm build`, `pnpm dev` Make sure application still builds / runs
  - If build/dev does not run anymore afterward, check what dependency throws the error
  - Fix it or revert it and handle it later separately.

Workflow Majors:
- `pnpm outdated` Major updates are marked in red
- Check changelogs online / in renovate MR
- Judge changes, potentially apply fix, update
- if not possible, bring to backlog


### Vulnerabilities

Workflow:
- `pnpm audit` Check if there are vulnerabilities
- `pnpm update` Are they fixed by just updating?
- `pnpm audit --fix update` If not, fix transitive ones directly in pnpm-lock (override)
- `pnpm build`, `pnpm dev` Make sure application still builds / runs
