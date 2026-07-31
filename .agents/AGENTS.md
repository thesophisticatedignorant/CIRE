# CIRE Conglomerate Workspace Rules

These rules apply to all AI agents operating within the CIRE Conglomerate repository (`CIRE-github`). You must follow these instructions stringently to prevent breaking the live application.

1. **Require Approval Before Execution**: For any future structural changes, you must enter Planning Mode. You must write out a precise architectural plan in an `implementation_plan.md` artifact and request user approval *before* modifying source code.
2. **Atomic Commits & Local Builds**: You must commit only small, functional changes. You are explicitly forbidden from running `firebase deploy` without first running `npm run build` and verifying that the build succeeds without breaking the `dist` bundle.
3. **Never resolve Git conflicts automatically by overriding files**: You must always branch out and ask for user review first when facing complex merge conflicts, instead of overriding files blindly.
