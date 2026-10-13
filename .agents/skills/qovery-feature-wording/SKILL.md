---
name: qovery-feature-wording
description: Apply Qovery feature maturity wording when writing or reviewing product UI, documentation, changelogs, or announcements. Use New and Preview consistently instead of Beta.
---

# Qovery feature wording

Use English customer-facing copy. Choose the status from product maturity, not from an existing Beta label.

- **New**: a new feature with stable underlying behavior and a good user experience. Its scope can still expand.
- **Preview**: a recent feature whose experience or capabilities are still incomplete. Explain concrete limitations and likely changes.
- Do not use **Beta** as a customer-facing feature status.
- Established features need no maturity label. Do not automatically replace every old Beta label with New or imply general availability.

## Confirmed examples

Product decisions confirmed on 2026-10-13:

- Agent Tasks: **New**, available to all organizations. Availability was explicitly confirmed by Rémi Bonnet on 2026-10-13; do not retain the superseded limited-access or access-request wording.
- Secret Manager integration: **New**. Approved message: “The secret synchronization infrastructure is stable. The interface may evolve.”
- API Policy Token: **Preview**. Preserve warnings about the evolving policy input contract and current limitations.

These examples describe the decision at that date. Apply later explicit product decisions when available. For other features, check product evidence; if maturity is uncertain and a status is needed, ask rather than invent a classification.

## Applying the rule

Use the surface's existing badge convention, such as `tag: "NEW"` in Mintlify. Keep labels consistent across navigation, titles, cards, and shared notices within the authorized scope. Do not describe a documentation label as an exact Console label unless verified against the Console.

Keep concrete access restrictions and limitations. For stable features, describe possible interface or scope evolution without presenting the infrastructure as unfinished. Do not make unverified stability, security, or availability claims.

When changing headings, update incoming anchor links. Check shared snippets for contradictory Early Preview or Beta notices. Preserve technical identifiers, Kubernetes annotations, API versions such as `v1beta1`, code, and URLs whose spelling is required; the wording rule concerns product status, not technical names.

## Shared documentation notices

Use MDX imports for reusable notices rather than duplicating their text inline. Agent Tasks pages use `/snippets/agent-tasks-evolution-note.mdx` and `<AgentTasksEvolutionNote />` as their single source of truth.

When renaming or removing a snippet, search the entire `docs/` tree for every import and rendered component, including organization settings and getting-started pages. Update all consumers before deleting the old file, and verify that every absolute `/snippets/` import resolves to an existing file. Searching only the feature folder can miss cross-cutting pages.

Treat an explicit product-owner confirmation as evidence for an availability correction; record the confirmed decision and date in the PR description. An old restriction in the repo does not override a newer explicit product decision. For unconfirmed availability, preserve supported restrictions rather than guessing.

Only modify the surfaces requested by the user. This skill does not authorize publishing, messaging, or changes to other repositories.
