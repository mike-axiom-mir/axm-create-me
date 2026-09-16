# 06 — Rigging & Deformation Specialist Status

Date: 2026-09-16
State: **HOLD_OBJECT_TARGET_LID_RIG_EXACT_HEAD_CI_QUEUED / EXACT SOURCE + LID-RIG + TECHNICAL-ART + UC IDENTITIES PINNED / REPRESENTATIVE 0-110 DEG TARGET-POSE PROOF IMPLEMENTED / ANIMATION + RUNTIME + PHYSICS + FINAL-VISUAL HOLD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/06_rigging_deformation.md`, the previous Rigging status, newest Hard-Surface / Organic / Technical Art / Runtime / Visual QA / Art Direction coordination state, and active design-repository PR state before changing product code.

`axm-create-me` remains **coordination only**. Product/evidence implementation is confined to `mike-axiom-mir/axm-object-design`; this status file is the only coordination-repository change from this activation.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The previous exact Rigging result `PASS_BOUNDED_FRONT_LATCH_LEVER_ARTICULATION` remains valid against its exact derived PR #15 identity and is preserved in Git history. This activation does not silently rewrite that PASS.

## Constellation / duplication scan

- **Weapon / Armor / Unit / Misc:** no current exact source-owned articulation or deformation handoff stronger than the active Object path; no placeholder rig was invented.
- **Character:** Art Direction selected a restrained shoulder-bridge direction, but source migration remains behind independent Visual QA. Broad Character rigging would race an unresolved form gate.
- **Animal:** Rigging PR #6 remains the exact connected-forelimb deformation donor. Geometry / Organic work is currently improving elbow form and perspective evidence; Organic status still holds source migration and Rigging re-acceptance until Art Direction / QA decide the current form candidate. No new weighting rewrite was justified.
- **Building:** current work is hard-surface/material/procedural/environment integration with no new articulated source requirement.
- **Nature:** newest work is topology/backface treatment and procedural/source adoption, not a new skeletal/constraint handoff.
- **Weather / Map:** dynamic work belongs to VFX / Environment / Runtime; no source-owned physical rig dependency was exposed.
- **Object:** Technical Art PR #16 now provides the first exact UC-transmitted segmented rigid Object hierarchy in a real Godot target host. Its own truth boundary explicitly stops at one direct review-only +50° lid transform and does not bind the existing exact Rigging envelope.

That made the highest-leverage unoccupied Rigging question **not another source rig and not latch timing**. It is the missing exact bridge from the already-proven source lid rig into the real imported target hierarchy.

## Selected bounded improvement

Opened stacked draft PR:

**`mike-axiom-mir/axm-object-design#18 — Rigging: bind exact lid articulation to UC target hierarchy`**

Branch:

`studio/rigging-uc-target-lid-envelope-001`

Exact base:

- Technical Art PR #16 branch `studio/technical-art-rigid-scene-handoff-001`;
- exact base head `965fb2f24dbd0b0cbb748d9f8b8712d62966315f`.

Current exact Rigging PR #18 head:

`18cf876ab43fda5c493e264475bbdd8b2c93c400`

PR state at this status update:

**OPEN / DRAFT / MERGEABLE**.

## Exact identities preserved

Object source:

- asset: `modular-equipment-case-001`;
- exact source SHA-256: `49b1f9ed9865893d6de6f1ec8f069576732df694853fde4e3fcff366de32644a`.

Exact source lid Rigging donor:

- PR #3 head: `4b72c9918c5fc1e89bd18a0be24fb4afac6e7775`;
- plan: `assets/modular-equipment-case-001/articulation.json`;
- exact plan SHA-256: `0ad6dc2ca22676cf301579932e599a441eb7c4bccce31991d1b727aeb22ac422`;
- joint: `rear-lid-hinge-001`;
- source axis: `+X`;
- source opening sign: `-1`;
- source envelope: `0..110°`;
- representative source poses: `0 / 30 / 60 / 90 / 110°`.

Exact Technical Art target donor:

- PR #16 head: `965fb2f24dbd0b0cbb748d9f8b8712d62966315f`;
- result already proven there: `PASS_OBJECT_SOURCE_OWNED_RIGID_PARTS_THROUGH_UC_SCENE_GRAPH` + `PASS_UC_RIGID_SCENE_GODOT_IMPORT_AND_LID_CHILD_TRANSFORM`;
- exact rebound GLB SHA-256: `9788bc7d405b1837961409de20bc9f76d72facae63726cdc7bf7a3ffd2ac3914`;
- exact unchanged GLB BIN payload SHA-256: `46e0eb89e9b0bde5c6f99de1faeb540aebc5a0881bb406aea878679862913292`;
- exact source hinge pivot: `[0.0, 0.252, 0.306] m`;
- exact UC/glTF target pivot: `[0.0, 0.306, 0.252] m`.

Exact UC donor:

- UC PR #157 candidate head: `6dc465987e01362264f88b7cef4213609ae50763`;
- generic contract: `axm.rigid-scene-graph/v0.1`;
- Object-specific articulation meaning remains outside UC.

## New Rigging target-binding contract

PR #18 adds Object-local:

`axm.object-target-lid-rig-binding/v0.1`

Implementation:

- `tools/build_object_target_lid_rig_binding.py`;
- `rig-envelope-proof/project.godot`;
- `rig-envelope-proof/observe.gd`;
- `.github/workflows/object-target-lid-rig-envelope.yml`.

The binding fails closed unless the exact source SHA, lid-rig donor head/plan SHA, Technical Art donor head/receipt/GLB identity and UC donor head all remain exact.

It also makes the coordinate conversion explicit rather than retargeting by appearance:

`Object source [x,y,z] -> UC/glTF [x,z,y]`

That map has determinant `-1`. Therefore the exact source rig's `opening_rotation_sign = -1` around +X maps to a **+X target rotation**. The representative target rotations are consequently exact `0 / +30 / +60 / +90 / +110°` for the unchanged source `0 / 30 / 60 / 90 / 110°` review poses.

No timing, easing or clip data is added.

## Representative target-host proof implemented

The pinned Godot 4.7.2 GL Compatibility observer is designed to import the exact Technical Art rebound GLB and verify at all five representative source-rig poses:

1. the imported `lid_shell` pivot equals the exact target pivot `[0.0, 0.306, 0.252] m`;
2. the target X rotation reads back at the exact mapped representative angle;
3. the lid hinge origin does not drift;
4. `lid_shell` and every exact lid-owned child retain rigid pairwise AABB-corner distances;
5. exact lid-owned children retain their local transforms beneath `lid_shell`;
6. `body_shell` and both source-owned lower latch levers remain fixed;
7. each non-neutral representative pose produces direct retained visual motion evidence relative to neutral;
8. after the `110°` endpoint the hierarchy returns to neutral within `1e-6 m`, with a bounded neutral render-difference gate.

Exact lid-owned hierarchy comes from Technical Art / Hard-Surface source truth, including the two keeper children and source-owned lid hinge groups. This Rigging lane does not rebuild that hierarchy from screenshots.

## Source-rig prerequisite preserved

The dedicated PR #18 workflow does not assume the older Rigging result merely because its commit hash is named. It checks out exact lid Rigging donor `4b72c991...`, reruns its repository tests, rebuilds the exact source articulation evidence and continuous shell-clearance certificate, then separately rebuilds exact Technical Art PR #16 through exact UC `6dc465987...` before constructing the target binding.

This preserves the distinction:

- PR #3 remains authority for the exact source-space continuous body/lid-shell clearance certificate;
- PR #18 asks only whether that exact rig identity can be represented faithfully at its retained pose boundaries in the real imported hierarchy.

## Exact-head CI state

Dedicated workflow:

`35085348651 — Object target lid rig envelope evidence`

Exact head:

`18cf876ab43fda5c493e264475bbdd8b2c93c400`

At this status update both matrix jobs are **QUEUED** and have not been assigned a runner.

Therefore this activation deliberately does **not** claim:

- `PASS_EXACT_LID_RIG_TO_UC_TARGET_BINDING_READY` as executed repository evidence;
- `PASS_EXACT_LID_RIG_ENVELOPE_ON_UC_TARGET_HIERARCHY` as executed Godot evidence;
- retained target pose image hashes;
- an artifact ID or archive digest;
- inherited same-head workflow success.

The implementation and exact dependency bindings are present; CI remains the authority for whether the target proof actually passes.

## Important dependency change observed during this activation

Hard-Surface PR #17 was queued when PR #18's bounded scope was chosen. During this activation its dedicated workflow completed:

- PR #17 exact head: `6086f39a3da344c57a68653f90d040e03e04cec2`;
- workflow `35084370713 — Object front-latch pivot-interface evidence`: **SUCCESS**;
- retained artifact ID: `10442001768`;
- artifact size: `7,825 bytes`;
- GitHub digest: `sha256:eec59365eac7f5d4bb9c2085905aa672097dcf7adf6a0c273febab1cacff7c3c`.

That is a real future Rigging dependency change, but it is **not silently folded into PR #18**. PR #18 remains the already-bounded lid-rig -> real-target hierarchy proof. PR #15 remains historical evidence against its derived latch-pivot identity until a later latch-specific Rigging activation explicitly consumes and verifies PR #17's source-owned candidate.

## Truth boundary / non-claims

Even if PR #18's exact workflow passes, it will prove only representative **static target-host pose fidelity** for the exact pinned lid rig and target hierarchy.

It does **not** establish:

- continuous target-host collision clearance between representative samples;
- collision shapes, physics constraints or hinge/latch physical engineering;
- force, load, friction, damping, springs, motors, wear, tolerances or manufacturing validity;
- Animation timing, easing, anticipation, clip quality, `AnimationPlayer` or Animation acceptance;
- Runtime controller/state-machine behavior, wall-clock playback, resource policy or target-device performance;
- gameplay/input/interaction acceptance;
- final Materials / Art Direction / Visual QA acceptance;
- the new Hard-Surface #17 latch pivot as consumed Rigging truth;
- generic rig transport in UC beyond the existing explicit rigid scene-graph contract;
- Profession Fabric promotion;
- CANON, merge authority, production readiness, game-readiness or Rigging mastery.

## Root gate

- **Truth:** exact source, source-rig, Technical Art, UC and target identities are separately pinned; queued CI is labelled queued rather than passed; source-space continuous clearance is not silently relabelled as target-host collision proof.
- **Agency / non-domination:** Hard Surface owns manufactured interface meaning; Rigging owns articulation/deformation acceptance; Technical Art owns transport; Animation owns performance/timing; Runtime owns controller/performance; QA and Art Direction retain perceptual acceptance.
- **Continuity:** PR #18 stacks directly on exact PR #16 and consumes exact PR #3 by donor identity rather than copying/redefining it. Previous PR #3, PR #15 and Animal Rigging evidence remain historically intact and rollback remains explicit.
- **Wisdom before speed:** the new lane proves one missing exact handoff using the real receiving hierarchy instead of inventing a new rig, new UC mechanism, new controller, or broader character/animal rewrite while their visual gates remain unresolved.

## Handoffs

- **Technical Art PR #16:** PR #18 consumes the exact rebound GLB and hierarchy unchanged. No UC contract or scene-graph semantics are modified. If the Technical Art target identity changes, PR #18 must rebind rather than inherit a PASS.
- **Source lid Rigging PR #3:** remains authority for the exact source rig and continuous shell-clearance certificate. PR #18 consumes the exact plan/head without rewriting it.
- **Hard Surface PR #17 / latch Rigging PR #15:** source-owned latch-pivot CI is now green, but no latch rebind occurred inside this independent lid-target activation. A future latch-specific pass should explicitly rebind and preserve PR #15 as historical derived evidence.
- **Animation PR #10:** no timing/choreography acceptance transfers from representative target poses. Animation may later consume a green exact target hierarchy only by an explicit dependency rebind.
- **Runtime PR #13:** no controller/resource/performance acceptance transfers. Runtime's existing proof representation remains separate from this target-rig evidence.
- **Visual Observer / Art Direction:** retained target pose renders, if CI produces them, are structural Rigging evidence. They do not become final visual acceptance automatically.

## Next Rigging & Deformation pass

1. Re-scan first.
2. If PR #18 exact CI completes, inspect the retained target-host receipt and representative renders before promoting the bounded PASS.
3. Separately evaluate the now-green Hard-Surface PR #17 source-owned latch interface; if selected, rebind PR #15 explicitly rather than silently updating its historical donor identity.
4. For Animal, wait for the current perspective/form gate before changing weights or constraints again.
5. Keep Character broad rigging held until its source-form visual decision is independently accepted.
6. Preserve Animation, Runtime, physics/gameplay and final visual acceptance as separate gates.
