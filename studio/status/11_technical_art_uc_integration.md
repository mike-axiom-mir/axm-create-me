# 11 — Technical Art / UC Integration Specialist Status

Date: 2026-09-16
State: **PASS_GENERIC_RIGID_SCENE_GRAPH_CONTRACT / PASS_OBJECT_SOURCE_OWNED_RIGID_PARTS_TO_GODOT / UC + OBJECT DRAFT LANES RETAINED / ANIMATION-CLIP + CONTROLLER + PHYSICS + FINAL-VISUAL HOLD**

## Current bounded result

This activation selected one cross-repo gap exposed by the newest Object Hard-Surface, Materials, Animation and Runtime evidence:

> the equipment case now has exact source-owned rigid component identities and ownership, but the proven UC GLB handoff still flattens every supplied surface group into scene roots, so downstream specialists have had to reconstruct a segmented lid representation outside the generic UC transport path.

The smallest reusable repair was **not** an Object rule in UC. It was a domain-neutral explicit rigid scene-graph transport layer over an already verified UC GLB.

Two bounded results are now green:

- `PASS_RIGID_SCENE_GRAPH_REBIND` in Universal Creation;
- `PASS_OBJECT_SOURCE_OWNED_RIGID_PARTS_THROUGH_UC_SCENE_GRAPH` plus `PASS_UC_RIGID_SCENE_GODOT_IMPORT_AND_LID_CHILD_TRANSFORM` in the Object receiving proof.

Exact proven path:

`Object exact deterministic source + Object-owned latch/hinge ownership` -> `existing stable source component groups` -> `unchanged UC axm.surface-3d/v0.1 geometry publication` -> `generic axm.rigid-scene-graph/v0.1 caller-authored parentage` -> `exact GLB BIN payload retained` -> `Godot 4.7.2 GLTFDocument import` -> `direct review-only lid transform with lid-owned keeper children following and lower levers remaining fixed`.

`axm-create-me` remains coordination-only. Product/tool implementation lives in `axm-universal-creation` and `axm-object-design`.

## Why this gap was selected / duplication check

The prior Nature Technical Art result remains valid historical evidence, but later Procedural, Environment, Visual QA and Art Direction work has closed the old live `HOLD_PROCEDURAL_REBIND` and `HOLD_MAP_RECEIVING_ADOPTION` dependencies. They are not current blockers and are not silently rewritten out of history.

The Object constellation now has a stronger unresolved Technical Art dependency:

- Hard-Surface PR #14 explicitly owns upper `latch_*_keeper` -> `lid_shell` and lower `latch_*_lever` -> `front_service_panel` parentage.
- Rigging PR #15 owns a bounded review-only latch-lever articulation candidate.
- Materials PR #6 already reconstructs owner-bound articulated parts for lookdev evidence.
- Animation PR #10 now owns the ordered latch-release -> unchanged lid clip -> latch-reengage sequence.
- Runtime PR #13 explicitly records that its efficient segmented receiving proof is **not** the current UC-published static GLB.
- Existing Technical Art Object PR #7 proves a different path: socket/package identity -> source-frame-bound service module -> UC GLB -> Godot import. It remains valid and was not replaced.
- Current UC main `21bca4eb3efeeec5a86f9da689bcfe4933f376e9` already has a strong deterministic `axm.surface-3d/v0.1` GLB path, but `_encode_glb` publishes each surface primitive as a flat scene root. No current generic parent/child transform transport contract existed.
- UC PR #151's animated boat lane is Blender/game-asset specific and does not supply a generic explicit scene-graph rebinder; duplicating that lane was avoided.

That made rigid scene-graph transport the highest-leverage unoccupied Technical Art/UC integration question.

## Universal Creation reusable contract

Repository: `mike-axiom-mir/axm-universal-creation`

Draft PR: **#157 — Technical Art: add neutral rigid scene-graph rebind contract**

Branch: `studio/rigid-scene-graph-001`

Exact candidate head: **`6dc465987e01362264f88b7cef4213609ae50763`**

Base main inspected: `21bca4eb3efeeec5a86f9da689bcfe4933f376e9`

New generic contract:

`axm.rigid-scene-graph/v0.1`

Added:

- `src/axm_uc/rigid_scene_graph.py`;
- `tests/test_rigid_scene_graph.py`;
- `.github/workflows/rigid-scene-graph.yml`.

The contract accepts an already verified **flat UC-generated GLB** plus caller-authored stable node names, parent relations and optional rigid translation/unit-quaternion transforms.

It deliberately does not infer component meaning. It refuses:

- unknown node or parent identities;
- cycles;
- duplicate/multiple-parent ambiguity;
- non-unit quaternions;
- already-hierarchical input in this bounded v0.1 path.

It preserves the exact GLB BIN chunk, rewrites only explicit scene-graph JSON state, retains the existing UC surface specification digest, reruns UC's existing `verify_glb()`, and adds exact scene-graph provenance/digest verification.

The contract does **not** contain the words/semantics needed to decide that a lid, latch, turret, socket, door, vehicle part, character part or any other domain component owns another. Source/receiving repos retain that authority.

### UC CI

Dedicated workflow:

`35081692879 — Rigid scene graph contract` — **SUCCESS**.

- Python 3.11: success;
- Python 3.13: success;
- determinism, manifest-order invariance, exact binary-payload preservation and fail-closed cases are exercised.

The full same-head UC `Tests` workflow `35081692670` also completed **SUCCESS**. Other same-head candidate/workspace/Godot/profession checks observed during this activation completed successfully or intentionally skipped where their path did not apply.

No merge was performed. PR #157 remains draft/review evidence.

## Object exact receiving proof

Repository: `mike-axiom-mir/axm-object-design`

Draft PR: **#16 — Technical Art: carry source-owned rigid parts through UC scene graph**

Branch: `studio/technical-art-rigid-scene-handoff-001`

Exact Object head: **`965fb2f24dbd0b0cbb748d9f8b8712d62966315f`**

Exact stacked base / Hard-Surface ownership head: **`d3fa10a270faae7925811f44f03381fe5c5d0215`**

Exact Object source SHA-256:

`49b1f9ed9865893d6de6f1ec8f069576732df694853fde4e3fcff366de32644a`

Exact ownership contract SHA-256:

`0702e4180f858d29c42ff8c38a61eaa16278d6848c8ce6f3ecfae172969ca8ae`

The receiving proof uses only existing Object identities:

- `lid_shell`;
- source-owned lid hinge groups `hinge_lid_l0`, `hinge_lid_l1`;
- source-owned upper keeper groups `latch_0_keeper`, `latch_1_keeper`;
- fixed lower lever groups `latch_0_lever`, `latch_1_lever`;
- exact source hinge axis/pivot.

Exact source hinge pivot:

- Object source coordinates: `[0.0, 0.252, 0.306] m`;
- UC/glTF Y-up coordinates: `[0.0, 0.306, 0.252] m`.

Only the lid-owned rigid set is localized around that exact pivot before surface publication. Reconstructing the neutral closed pose after localization produced **0.0 m maximum position error**.

## Exact UC transport evidence

All existing Object source mesh groups are published through unchanged `axm.surface-3d/v0.1`, then the generic UC candidate binds only caller-supplied parentage.

Exact manifest SHA-256:

`e32a05fe8de68cdcba704b595bdd9df8965255e361c0ed61cb3aa88b7d50989a`

Exact surface specification SHA-256:

`f2a4afbbf43c6f32830cd5a3de058e67d281a9ef163948907f8111e12b3ad1c8`

Flat GLB SHA-256:

`ed15b5086123a64a020e5b027949a0862a1af3e02fd0e5e9897891600778948f`

Rebound GLB SHA-256:

`9788bc7d405b1837961409de20bc9f76d72facae63726cdc7bf7a3ffd2ac3914`

Exact unchanged BIN payload SHA-256 before/after graph rebind:

`46e0eb89e9b0bde5c6f99de1faeb540aebc5a0881bb406aea878679862913292`

Both flat and rebound UC verification report:

- **31 mesh nodes / primitives / materials**;
- **812 triangles**;
- finite positions/normals;
- valid indices;
- nondegenerate triangles;
- winding matching supplied vertex normals.

No triangle or binary geometry drift is introduced by the scene-graph layer.

## Godot 4.7.2 target-host proof

The exact rebound GLB was imported with `GLTFDocument` in pinned **Godot 4.7.2-stable**, GL Compatibility.

Observed directly after import:

- `latch_0_keeper` parent = `lid_shell`;
- `latch_1_keeper` parent = `lid_shell`;
- both lower levers remain outside the lid subtree;
- a direct review-only **+50° X lid transform** moves each keeper mesh center by **0.815027356147766 m**;
- both lower lever mesh-center drifts remain exactly **0.0 m**;
- retained closed vs 50° target frames differ by **83,442 pixels**.

The retained images were directly inspected. They show the expected neutral case and a clearly opened lid/keeper assembly while the lower front-body construction remains in place. The neutral grey proof presentation is structural transport evidence, not final Materials/LookDev or Art Direction acceptance.

Target result:

`PASS_UC_RIGID_SCENE_GODOT_IMPORT_AND_LID_CHILD_TRANSFORM`

## Object exact-head CI / retained evidence

Dedicated workflow:

`35081970135 — Object UC rigid scene handoff evidence` — **SUCCESS**.

- Python 3.13: complete Object test suite + cross-repo UC build/receipt verification success;
- Python 3.11: same plus pinned Godot import, review transform, render capture and artifact retention success.

All inherited same-head Object workflows observed for front-latch ownership, hard-surface interface, service-module fit, registration key and fastener clearance completed **SUCCESS**.

Retained artifact:

- ID: **10440591535**;
- name: `object-uc-rigid-scene-965fb2f24dbd0b0cbb748d9f8b8712d62966315f`;
- size: **83,519 bytes**;
- GitHub SHA-256: `24298ae6b7467e3a90282cb485722ffbd4c6e5f0c84925370a6a1bcbf0125eee`;
- independently downloaded/rehashed SHA-256: `24298ae6b7467e3a90282cb485722ffbd4c6e5f0c84925370a6a1bcbf0125eee`.

Retained target images:

- closed SHA-256: `98e8c761c94dbca7a2c7763619c539522b66fe29d414e95264c8a6c5eb3522df`;
- 50° review transform SHA-256: `009732146dccc5325ca52532d8395a8c6c751bddca122825ef2c0c37eb07f126`.

## Placement decision

This is one of the cases where a **small UC core extension is justified**, because the mechanism is generic and domain-neutral:

- Object owns its source geometry, stable component names, hinge pivot, latch ownership and intended rigid relationships;
- UC owns only deterministic transport/verification of an explicit caller-authored named rigid hierarchy over exact already-published mesh nodes;
- Technical Art owns the cross-repo binding/evidence path;
- Animation still owns clip/choreography timing;
- Runtime still owns receiving resource lifecycle and target performance;
- Rigging/Hard-Surface still own articulation/mechanical semantics;
- Materials/Art Direction/Visual QA still own surface/presentation acceptance.

No Object construction rule, latch policy, hinge policy, pivot inference, ownership inference or animation choreography was moved into UC.

## Handoffs

### UC PR #157

The neutral contract is now proven not only by isolated UC tests but by a real independent receiving domain: exact Object source-owned rigid parts survive the generic scene graph into Godot without geometry payload drift. Keep the PR draft until normal UC review/merge authority acts.

### Object Hard-Surface PR #14

The exact ownership declaration now survives Object -> UC -> Godot: upper keepers import as `lid_shell` children while lower levers remain outside the lid subtree. This is transport evidence only, not a physical latch/capture PASS.

### Object Animation PR #10

Technical Art now exposes exact target-host rigid nodes with the correct keeper parentage. The **101-sample latch/lid sequence has not been transported through UC and no `AnimationPlayer` was authored here**. Animation may now consume this exact node/pivot identity if it opens that next bounded lane.

### Object Runtime PR #13

The prior statement that the exact UC GLB is static/unsplit is now superseded for this new PR #16 identity: a real UC-transmitted segmented rigid hierarchy exists and a direct target-host lid transform is proven. Runtime's existing resource-reuse result remains separate; sampled target playback cost/controller behavior has not transferred automatically.

## Relationship to previous Technical Art evidence

The earlier Nature source-migration Technical Art proof remains valid for its exact lineage/artifacts. Later owning specialists have since closed its Procedural and Map receiving dependencies; this status therefore stops carrying those old holds as current state without rewriting the historical result.

Object Technical Art PR #7 also remains valid and separate. It proves a static source-frame-bound service module/socket transport path; PR #16 proves generic named rigid hierarchy transport. Neither invalidates the other.

## Non-claims / remaining holds

This activation does **not** prove or authorize:

- merging UC PR #157 or Object PR #16;
- generic arbitrary glTF hierarchy editing beyond the bounded flat UC-generated input contract;
- arbitrary skinning, bones, blend shapes or deforming hierarchy transport;
- `AnimationPlayer`, animation-channel export, or transport of Animation PR #10's exact 101-sample sequence;
- runtime controller/state machine behavior or actual 40 Hz playback pacing;
- latch hook/capture/retention mechanics or engineering validity;
- continuous collision/physics clearance;
- gameplay or interaction acceptance;
- final material/lookdev, Art Direction or Visual QA acceptance;
- target-device FPS/GPU/VRAM/draw-call budgets;
- CANON or production readiness;
- profession promotion or Technical Art / UC mastery.

## Root gate

- **Truth:** exact source, ownership, UC base/candidate, Object receiving head, GLB digests, unchanged BIN payload, target import and renders remain separately bound; structural transport is not relabelled animation/gameplay/visual acceptance.
- **Agency / non-domination:** UC receives only a caller-authored generic hierarchy contract; it does not infer domain ownership or silently rewrite source authority. No merge or CANON authority was exercised.
- **Continuity:** prior Nature and Object PR #7 evidence remains historical/current for its exact scope; new PRs are additive, reversible and exact-head bound.
- **Wisdom before speed:** the repair is one small reusable graph layer over existing UC surface/GLB machinery, with a real Object receiving proof, rather than a second exporter or an Object-specific subsystem inside UC.

## Current state

`PASS_GENERIC_RIGID_SCENE_GRAPH_CONTRACT / PASS_OBJECT_SOURCE_OWNED_RIGID_PARTS_TO_GODOT / HOLD_ANIMATION_CLIP_TRANSPORT / HOLD_RUNTIME_CONTROLLER / HOLD_PHYSICS_GAMEPLAY / HOLD_FINAL_VISUAL / DRAFT_NO_MERGE`
