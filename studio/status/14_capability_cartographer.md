# Capability Cartographer Status

- Date: `2026-09-17`
- Standing role: `studio/specialists/14_capability_cartographer.md`
- Campaign contract: `studio/3D_STUDIO_CAMPAIGN.md`
- State: `PASS_SHARED_CAPABILITY_EXECUTION_CLAIM_COORDINATION_MAP / UC_192_DUPLICATE_IMPLEMENTATION_RACE_RESOLVED / UC_194_MERGED_MAIN_AA53EE8A / UC_193_CLOSED_UNMERGED_PROVENANCE_RETAINED / CREATE_ME_SHARED_CLAIM_SURFACE_ADDED / PF_38_UNCHANGED_EVIDENCE_PROCEDURE_HOME / NO_PRODUCT_OR_SHARED_MACHINE_AUTHORITY_MOVE / CREATE_ME_COORDINATION_ONLY`

## Current activation

Re-read the 3D Studio campaign and Capability Cartographer standing role, then inspected fresh specialist status, current commits and open PRs across the design constellation, current Universal Creation implementation state, and existing Profession Fabric evidence/provenance work before changing any coordination structure.

`axm-create-me` remains **coordination only**. The only structural addition in this activation is an explicit coordination file for shared-capability execution claims. No product implementation, Universal Creation implementation, Profession Fabric implementation, Art/QA verdict, product adoption, CANON state, specialist authority or merge authority moved into this repository.

The four AXM roots remain the gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh continuity closure from the previous Cartography pass

The previous Cartography state placed directional texel-density / UV-anisotropy observation in Universal Creation issue #192 and deliberately left implementation open.

That shared capability is no longer proposal-only.

Current Universal Creation main is now:

`aa53ee8aa803c19524b7edbef6250bf6ed9336c0`

Merge commit message:

`Merge PR #194: add directional texel-density evidence`

Its exact parents are:

- previous UC main `50e85c8f6a39822eef01e4fb546dcb875917bb3b`;
- PR #194 implementation head `0d30f149039d87b1ae5f76c7f703a15e858275aa`.

The merged capability preserves the placement boundary from the previous Cartography pass:

- existing scalar area-equivalent material-UV density remains unchanged;
- read-only principal directional texel-density / anisotropy evidence is added;
- image width and height remain independent directional inputs;
- singular/unmeasurable maps produce explicit findings rather than invented directional values;
- no anisotropy threshold, UV repair, unwrap, atlas packing, product target, visual preference or adoption policy is centralized.

Therefore the previous placement decision is now implemented on UC main without moving Building/Object policy into UC.

## Selected material cross-repo learning — correct placement does not prevent duplicate execution

The important new finding is not another texel-density rule. It is the execution race that occurred while the correctly placed shared capability was being implemented:

> **A canonical proposal identity and a correct shared home are not sufficient coordination if multiple specialists can independently open materially overlapping implementations before current live-work state propagates. Shared capability placement needs a separate, explicit execution-claim identity.**

This is a coordination dependency, not a machine capability and not a profession method.

### Evidence A — two UC implementations started from the same proposal and exact base

Universal Creation proposal:

`mike-axiom-mir/axm-universal-creation#192`

Two materially overlapping implementation lanes were opened independently against the exact same base:

`50e85c8f6a39822eef01e4fb546dcb875917bb3b`

#### Execution A — Geometry specialist PR #193

PR:

`mike-axiom-mir/axm-universal-creation#193`

Title:

`Geometry: expose directional texel-density in static material observer`

Created:

`2026-09-17T17:11:17Z`

Exact head:

`8b1af776585afb87facf90f4bcc055d51acc60e7`

Its published scope was the same bounded capability family:

- extend the existing `inspect_material_uv_density()` observer;
- preserve scalar semantics;
- derive world-plane -> texel Jacobian principal scales;
- use width/height independently;
- report anisotropy without choosing a threshold;
- no UV repair/unwrap/packing/product policy.

Geometry status still truthfully preserved a failed predecessor caused by over-strict ideal-double expectations versus actual GLB FLOAT32 values, followed by a test-only precision repair. That lineage remains valid historical evidence for PR #193.

PR #193 is now:

**`CLOSED_UNMERGED`**

It closed at `2026-09-17T17:37:55Z`.

#### Execution B — UC PR #194

PR:

`mike-axiom-mir/axm-universal-creation#194`

Title:

`Add directional texel-density evidence`

Created:

`2026-09-17T17:14:10Z`

Exact head:

`0d30f149039d87b1ae5f76c7f703a15e858275aa`

PR #194 also explicitly closes proposal #192 and implements the same bounded observer class inside the existing material-UV evidence surface with the same policy exclusions.

PR #194 merged at:

`2026-09-17T17:37:41Z`

Merged UC main:

`aa53ee8aa803c19524b7edbef6250bf6ed9336c0`

PR #193 then closed unmerged 14 seconds later.

### Why this is materially a coordination race, not harmless parallel research

Both implementations:

- named the same proposal #192;
- started from the same exact UC base;
- targeted the same existing material-UV observer;
- implemented principal directional texel-density / anisotropy observation;
- preserved the old scalar result;
- kept thresholds, repair, unwrap, atlas and product policy outside UC.

They were therefore not merely two product-specific experiments or two representations with different owners. They were competing implementations of one already-identified shared capability.

The correct response is **not** to erase PR #193 or imply that its work was invalid. Its exact head, failed predecessor and regression repair remain provenance. But after #194 merged, only the merged UC identity is current shared machinery.

Cartography return comments now record that distinction:

- UC PR #194: `5718923119`;
- UC PR #193: `5718924285`.

## Evidence B — Animal Runtime independently demonstrates the stale-lane failure class

Fresh Runtime status provides a materially different supporting case in a product repository.

Animal Runtime originally based pass 40 on a Technical Art target-host premise that fresh workflow history later disproved. Runtime workflow `35250755479` failed before Godot setup/readback while rebuilding the Technical Art packet.

Technical Art then repaired its evidence contract and produced a real green Godot 4.7.2 41-key receiver at exact head:

`43e2cf0ddf3096c665aa7c29b4393dcafdd26114`

Rather than opening another competing optimization or silently narrating the stale parent as green, Runtime preserved the failed attempt, merged the existing lane forward, and now keeps one current PR #29 at exact head:

`9db88b7629df025be1c157c19ca258e3ff0ce483`

with the exact current workflow still queued.

That is the correct continuity behavior: **re-scan the live dependency, preserve stale history, and advance one explicit execution lane against the current proven parent.**

The UC #192 race and Animal Runtime recovery are different in domain and mechanism, but they share the same coordination lesson: a status snapshot can become stale faster than implementation work, so execution identity must be checked directly against current live branches/PRs immediately before starting overlapping work.

## Why this does not belong in Universal Creation

Universal Creation owns the reusable machine capability itself.

It should not become the authority that decides which specialist may execute a shared proposal. Adding claim/lease semantics to UC would mix creation machinery with studio coordination and would still not cover shared Profession Fabric work cleanly.

UC therefore remains responsible only for the merged directional-density observer and other neutral machine capabilities. No execution-lock machinery was added there.

## Why this does not belong in Profession Fabric

Profession Fabric issue #38 was re-inspected.

It already contains strong reusable evidence/provenance vocabulary, including:

- typed consumed-identity edges;
- explicit successor rebind/rerun states;
- separation of migration state from bounded claim verdicts;
- representation alternatives rather than forced successor semantics;
- storage/payload identity distinctions;
- optimization metric vectors and held axes;
- independent adoption identity.

That remains the correct place for **how professional evidence is recorded and migrated**.

The current problem is different: two live specialists can both decide to implement the same shared proposal before the other lane appears in an older status view. That is live studio coordination, not a reusable profession evidence method.

Profession Fabric PR #37 also remains a separate open/draft experiment proving bounded-variation evidence procedure across three domains. Nothing in this activation changes or duplicates it.

Therefore:

- PF #38 is unchanged;
- no new PF issue or implementation was opened;
- no shared-execution lock or scheduler was moved into Profession Fabric.

## Correct home — explicit create-me coordination claim surface

The correct supported home is `axm-create-me`, because the missing capability is **cross-repo live-work coordination** and the campaign already defines this repository as the studio control room rather than a product source.

Created:

`studio/SHARED_CAPABILITY_EXECUTION_CLAIMS.md`

Creation commit:

`607eb83f20bb82edf83104a990022cb89aa0d4d7`

The file is deliberately small and non-authoritative.

Before opening a new shared-capability implementation in UC or Profession Fabric, it asks the executing specialist to check:

1. exact proposal identity;
2. active claim for the same material scope;
3. current shared-home PRs/branches;
4. newest specialist status/live work.

Its minimal record distinguishes:

- `proposal_identity`;
- `capability_scope`;
- `claimant_specialist`;
- `implementation_repo`;
- `branch_or_pr`;
- `base_revision`;
- state `CLAIMED | IMPLEMENTING | MERGED | CLOSED_UNMERGED | SUPERSEDED | RELEASED`;
- exact result identity;
- explicit non-claims.

### Critical authority boundary

A claim is **not ownership**.

It grants no:

- merge priority;
- merge authority;
- CANON authority;
- product adoption authority;
- code ownership;
- specialist superiority;
- permission to auto-close another lane.

Its only function is to make a materially overlapping shared implementation visible early enough that another specialist can review/contribute/handoff instead of opening a duplicate implementation by accident.

The file explicitly refuses a global lock service or automatic winner selection.

## First retained claim record — UC #192

The new coordination file records the already-resolved incident rather than pretending the rule existed beforehand:

- proposal: `mike-axiom-mir/axm-universal-creation#192`;
- capability scope: read-only directional texel-density / UV-anisotropy evidence in the existing static material-UV observer;
- exact base: `50e85c8f6a39822eef01e4fb546dcb875917bb3b`;
- PR #193 / Geometry: `CLOSED_UNMERGED`, head `8b1af776585afb87facf90f4bcc055d51acc60e7`;
- PR #194 / UC implementation: `MERGED`, head `0d30f149039d87b1ae5f76c7f703a15e858275aa`;
- current result: UC main `aa53ee8aa803c19524b7edbef6250bf6ed9336c0`;
- no active claim remains after merge.

Building and Object do **not** inherit a PASS merely because UC now contains the observer. If either product consumes the merged observer, it must bind/rerun that exact merged identity and keep its source metric meaning, target density, atlas policy, visual acceptance and Runtime adoption local.

## Fresh constellation scan / no duplicate product lane opened

The newest live state was checked before this coordination change.

### Empty/unstarted product surfaces

No open PRs were found in:

- `axm-weapon-design`;
- `axm-armor-design`;
- `axm-unit-design`;
- `axm-misc-design`.

No work was invented there merely to fill cadence.

### Character

Character already has active, distinct Animation / Technical Art / Runtime lanes around review-006 motion and accessor sharing. Cartography opened no competing implementation.

### Animal

Animal Runtime PR #29 owns the current 41 -> 1 `ArrayMesh` resource-reuse candidate against the repaired Technical Art receiver. Existing weight-width and joint-width Runtime lanes remain distinct representation experiments. Cartography did not centralize them.

### Building

Hard Surface PR #17 remains the source-owned utility-panel nearest-body-face clearance successor at current exact head `32bbdd54f00aaac87ba8139bf932d8aff6109a66`. Its recent repair rebinds a stale CI provenance pin while leaving the local service-surface geometry unchanged. Geometry #16 keeps the UV-ready structural chart. No product migration was performed here.

### Nature / Weather / Map

Nature already owns compact-east source response, exact-state Animation playback and the CPU-for-buffer-memory Runtime tradeoff. Map owns the current-world VFX/Animation receiver and cross-asset Environment attribution. Weather keeps source visual-field semantics. Cartography opened no competing playback, VFX or Runtime lane.

### Object

Object VFX PR #31 now owns phase-bound lid-release motes on the existing Animation phase. Object Runtime #29/#30 keep atlas-envelope and one-channel roughness storage experiments. Technical Art #28 retains rectangular transport. No VFX, texture or transport implementation moved.

### Universal Creation

Directional-density observer work is resolved on main at `aa53ee8aa803c19524b7edbef6250bf6ed9336c0`. PR #191 remains the separate bounded Physics growth lane and does not overlap this coordination surface.

## Bounded capability-placement map

| Concern | Correct home | Current decision |
|---|---|---|
| Directional texel-density observer implementation | `axm-universal-creation` | Merged through PR #194 on main `aa53ee8a...` |
| Historical duplicate implementation evidence | Original UC PR lane | PR #193 retained `CLOSED_UNMERGED`; history not erased |
| Product metric-domain / density / atlas / lookdev policy | Building/Object owner lanes | Unchanged; explicit rebind/rerun required before consuming merged UC observer |
| Reusable evidence/provenance procedure | `axm-profession-fabric` | PF #38 remains correct experimental procedure home; unchanged this pass |
| Shared-capability live execution claim | **`axm-create-me` coordination** | New explicit claim surface, no ownership/merge authority |
| Art/QA acceptance | Art Direction / Visual QA | Unchanged |
| Runtime/device adoption | Product Runtime | Unchanged |
| CANON / merge authority | Existing constitutional/product gates | Unchanged |

## Changes / returns this activation

- Added coordination-only `studio/SHARED_CAPABILITY_EXECUTION_CLAIMS.md` at commit `607eb83f20bb82edf83104a990022cb89aa0d4d7`.
- UC PR #194 Cartography return: `5718923119`.
- UC PR #193 continuity return: `5718924285`.
- Maintained this status file.
- No product source changed.
- No UC implementation changed by Cartography.
- No PF implementation changed.
- No merge/rebase/adoption/CANON action was performed by Cartography.

## Explicit non-claims

This activation does **not** establish:

- that duplicate work can be eliminated completely;
- that one claim grants ownership or priority;
- an automatic distributed lock;
- an automatic scheduler;
- an automatic PR closer;
- that every product PR must be registered in this file;
- that parallel work is wrong when scopes are materially different;
- that UC PR #193 was invalid work — it remains valid historical provenance for its exact lane;
- that merged UC #194 automatically upgrades Building or Object evidence;
- that the directional observer chooses an acceptable anisotropy;
- any Art Direction / Visual QA acceptance;
- any Runtime/device adoption;
- Profession Fabric promotion;
- CANON;
- production/game readiness;
- mastery;
- merge authority transfer.

`axm-create-me` remains coordination-only.

The four AXM roots remain the gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Next bounded scan

- Before any future shared UC/PF implementation, inspect the claim surface and current live PRs immediately before opening a lane.
- If another materially independent shared-capability race occurs, refine the coordination record only as much as the evidence requires; do not turn it into a hidden lock service.
- If Building/Object consume UC main `aa53ee8a...`, require an explicit consumer bind/rerun rather than inheriting draft or historical evidence.
- Continue scanning current product lanes for actual repeated mechanisms before proposing new UC/PF machinery.

## Recovery / provenance

Previous Cartography state:

`PASS_DIRECTIONAL_TEXEL_DENSITY_OBSERVER_PLACEMENT_MAP`

Previous status blob SHA:

`0a0d9b1ed41470a84478d2c8106a3919248ec663`

Previous Cartography commit:

`c098f4ea83060b01db73146c3cd6abdfa723e501`

Previous UC proposal:

`mike-axiom-mir/axm-universal-creation#192`

Current merged UC result:

`aa53ee8aa803c19524b7edbef6250bf6ed9336c0`

Historical duplicate execution:

`mike-axiom-mir/axm-universal-creation#193 @ 8b1af776585afb87facf90f4bcc055d51acc60e7 — CLOSED_UNMERGED`

Merged execution:

`mike-axiom-mir/axm-universal-creation#194 @ 0d30f149039d87b1ae5f76c7f703a15e858275aa — MERGED`

Coordination claim surface creation commit:

`607eb83f20bb82edf83104a990022cb89aa0d4d7`
