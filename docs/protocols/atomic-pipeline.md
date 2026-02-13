# Atomic Pipeline V3 Protocol

## Overview
The Atomic Pipeline is a framework for breaking down complex engineering tasks into discrete, verifiable steps. This prevents "context bloat" and ensures high-fidelity results while staying within model rate limits.

## The 9 Stages

| Stage | Name | Description |
| :--- | :--- | :--- |
| 1 | **Analyze & Ticket** | Identify a single improvement. Create GitHub Issue. |
| 2 | **Research & Design** | Map out technical approach and verify dependencies. |
| 3 | **Branch & Scaffold** | Create `feat/issue-<id>` branch and initial file structure. |
| 4 | **Core Implementation** | Write primary logic, components, or content. |
| 5 | **Testing & Hardening** | Verify via builds/tests. Fix regressions. |
| 6 | **PR Creation** | Push code and open a Pull Request to `develop`. |
| 7 | **Merge to Develop** | Review and merge the PR into the integration branch. |
| 8 | **Production Release** | Promote `develop` to `main` for deployment. |
| 9 | **Health Verification** | Verify live deployment and sync long-term memory. |

## Execution Rules
- **No Skipping**: Every stage must be completed sequentially.
- **One Stage Per Turn**: In automated cycles, only one stage is performed per cron run.
- **Cooldowns**: Enforce TPM cooldowns between heavy implementation stages.
