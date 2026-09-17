# Shared Capability Execution Claims

This file is **coordination only** for AXM 3D Studio shared-capability implementation work. It does not own product code, Universal Creation semantics, Profession Fabric semantics, merge authority, CANON authority, adoption decisions, or specialist authority.

The four AXM roots remain the gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Why this coordination surface exists

A shared-capability proposal can be correctly placed yet still be implemented twice if separate specialists open materially overlapping execution lanes before either sees the other's live work.

The first retained incident is Universal Creation proposal `mike-axiom-mir/axm-universal-creation#192`:

- both implementation lanes started from exact UC base `50e85c8f6a39822eef01e4fb546dcb875917bb3b`;
- PR #193 — `Geometry: expose directional texel-density in static material observer` — exact head `8b1af776585afb87facf90f4bcc055d51acc60e7`, later **CLOSED_UNMERGED**;
- PR #194 — `Add directional texel-density evidence` — exact head `0d30f149039d87b1ae5f76c7f703a15e858275aa`, later **MERGED**;
- merged UC main: `aa53ee8aa803c19524b7edbef6250bf6ed9336c0`;
- both lanes implemented materially the same bounded observer class: preserve scalar material-UV evidence, add read-only principal directional texel-density / anisotropy observation, keep thresholds/UV repair/atlas/product policy outside UC.

This is retained as a coordination race, not as wrongdoing and not as permission to erase either lineage. PR #193's failed-predecessor and FLOAT32 regression-repair evidence remains historical truth for that lane; PR #194 is the current merged implementation identity.

Animal Runtime independently demonstrates the adjacent stale-lane class: when fresher Technical Art receiving evidence invalidated an older Runtime premise, Runtime preserved the old attempt and advanced the existing lane against the exact green parent instead of narrating stale evidence as current. Shared capability coordination should make that rescan normal before implementation starts.

## Claim rule

Before opening a new **shared-capability implementation** in `axm-universal-creation` or `axm-profession-fabric`, the executing specialist should check:

1. the exact proposal/issue identity;
2. this coordination file for an active claim covering the same material scope;
3. current open PRs/branches in the proposed shared home;
4. newest specialist status for a live implementation that may not yet have propagated into older coordination state.

If a materially overlapping claim already exists, do not open a sibling implementation merely to race it. Review, contribute evidence, hand off requirements, or wait for that lane's exact result. Distinct scopes may proceed in parallel when the boundary is explicit.

A claim is **not ownership**. It grants no merge priority, code ownership, CANON priority, product adoption authority, or right to override another specialist. It only says that one live execution lane is already attempting this shared capability scope.

## Minimal claim record

Use one bounded record per shared implementation attempt:

- `proposal_identity` — exact repository + issue/proposal identity;
- `capability_scope` — short semantic scope, narrow enough to detect overlap;
- `claimant_specialist` — standing studio role making the implementation attempt;
- `implementation_repo` — expected shared home;
- `branch_or_pr` — exact branch/PR when created;
- `base_revision` — exact implementation base;
- `state` — `CLAIMED | IMPLEMENTING | MERGED | CLOSED_UNMERGED | SUPERSEDED | RELEASED`;
- `result_identity` — merged/head identity when known;
- `non_claims` — authority that explicitly does not transfer.

Do not invent a global lock service, automatic winner selection, auto-close behavior, or merge policy here. The record is inspectable coordination evidence only.

## Current retained records

### UC #192 — directional texel-density observer

- `proposal_identity`: `mike-axiom-mir/axm-universal-creation#192`
- `capability_scope`: `read-only directional texel-density / UV-anisotropy evidence in existing static material-UV observer`
- `implementation_repo`: `mike-axiom-mir/axm-universal-creation`
- `base_revision`: `50e85c8f6a39822eef01e4fb546dcb875917bb3b`
- execution A: `PR #193`, Geometry specialist, head `8b1af776585afb87facf90f4bcc055d51acc60e7`, state `CLOSED_UNMERGED`
- execution B: `PR #194`, shared UC implementation, head `0d30f149039d87b1ae5f76c7f703a15e858275aa`, state `MERGED`
- `result_identity`: UC main `aa53ee8aa803c19524b7edbef6250bf6ed9336c0`
- `non_claims`: no Building/Object target-density, atlas, UV-repair, visual, Runtime/device, adoption, CANON or product authority transferred

No active claim remains for #192 after the merged result. Any product consumer must bind/rerun the merged implementation explicitly; historical product evidence does not migrate by analogy.

### UC #199 — closed-shell orientability / signed-orientation observer

- `proposal_identity`: `mike-axiom-mir/axm-universal-creation#199`
- `capability_scope`: `opt-in read-only closed-component orientability parity and signed-orientation evidence in the existing mesh-topology observer`
- `claimant_specialist`: `02 Geometry & Topology`
- `implementation_repo`: `mike-axiom-mir/axm-universal-creation`
- `branch_or_pr`: `PR #200` / `studio/geometry-closed-shell-orientation-observer-001`
- `base_revision`: `95b618f6e6028c2ac8c1a106cfa009a3c106f48c`
- `state`: `IMPLEMENTING`
- `result_identity`: exact current implementation head `51fa006cd3d08648a5965c09eaf55d2936b1ee2c`; CI pending at this coordination update
- `non_claims`: no automatic winding repair, source adoption, universal outward label, renderer/front-face conversion, normals/tangents rewrite, self-intersection freedom, physical-volume/collision certification, product adoption, CANON, production or game-readiness authority transfers

This claim is collision-avoidance evidence only. It grants no merge priority or authority. Building #6 and Object #33 remain separate product proofs, and any future product consumer must explicitly bind/rerun a merged shared observer before claiming coverage.

## Scope boundary

This coordination surface is intentionally limited to **shared-capability execution**. It is not a registry for every product PR, every specialist task, or every experimental branch. Product repositories remain free to carry parallel domain-owned lanes when their scopes differ and their ownership boundaries are explicit.

Profession Fabric remains the correct home for reusable evidence/provenance procedures. Universal Creation remains the correct home for demonstrably reusable neutral creation/observation machinery. `axm-create-me` records only the cross-repo execution claim needed to prevent duplicated shared work.
