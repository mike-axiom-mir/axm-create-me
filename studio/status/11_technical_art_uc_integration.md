# 11 — Technical Art / UC Integration Specialist Status

Date: 2026-09-16
State: **PASS_GENERIC_RIGID_SCENE_GRAPH_CONTRACT / UC_RIGID_SCENE_GRAPH_MERGED / PASS_OBJECT_SOURCE_OWNED_RIGID_PARTS_TO_GODOT / PASS_DUAL_EVIDENCE_IDENTITY_BOUNDARY / PASS_EXACT_LID_RIG_TO_UC_TARGET_ENVELOPE / HOLD_ANIMATION_CLIP_TRANSPORT / HOLD_RUNTIME_CONTROLLER / HOLD_TARGET_HOST_CONTINUOUS_COLLISION / HOLD_PHYSICS_GAMEPLAY / HOLD_FINAL_VISUAL / OBJECT STACK DRAFT**

## Latest bounded result

This activation selected one cross-repo receiving-pipeline defect exposed by the newest Object Rigging target-host lane:

> the Technical Art binding treated the exact raw `articulation.json` file SHA-256 and the Rigging donor's canonical structured-plan digest as if they were the same identity dimension.

They are both valid evidence identities, but they intentionally differ. The conflation falsely rejected a correct exact Rigging donor before the Godot target-host proof could run.

The smallest correct repair was **Object receiving Technical Art tooling**, not a new Universal Creation feature and not a rewrite of Rigging semantics.

Object draft PR **#19 — `Technical Art: distinguish byte and canonical rig identities`** is stacked on Rigging PR #18. Exact current head:

`a462197421c06cffd46af327d6325cd75ef8aa1b`

The exact full target path now reaches:

`PASS_EXACT_LID_RIG_ENVELOPE_ON_UC_TARGET_HIERARCHY`

in pinned Godot 4.7.2 GL Compatibility.

`axm-create-me` remains coordination-only. The receiving repair lives in `mike-axiom-mir/axm-object-design`. No Object-specific semantics were added to Universal Creation.

The previous detailed Technical Art status is preserved in Git history at blob `abd77ce00a6009261840bb3e6d94b20584dffc0d`; this snapshot supersedes its stale merge/draft wording without erasing that evidence.

## Why this gap was selected / duplication check

The previous Technical Art / UC result already established a real generic rigid-hierarchy path:

- UC contract `axm.rigid-scene-graph/v0.1`;
- Object Technical Art PR #16 exact head `965fb2f24dbd0b0cbb748d9f8b8712d62966315f`;
- exact Object source-owned keeper/hinge parentage through UC into Godot;
- exact GLB BIN payload preservation;
- retained Object artifact `10440591535`.

That UC candidate is no longer merely draft evidence. UC PR #157 was merged; its source head remains `6dc465987e01362264f88b7cef4213609ae50763`, with merge commit `1b9b6ce1feae6fdc5b1c9ffd067f81d5c39fb8a8`.

Rigging PR #18 then became the first lane to consume the exact source lid-rig identity over that real UC-transmitted target hierarchy. Its first exact workflow `35085348651` failed before Godot with:

`AssertionError: lid rig plan identity drift: 05b4daad475c30f4c1ea72826fbafd452bf037e58523e18a0c338dd0d7999c0a`

Inspection showed that the donor had not drifted. The receiving adapter was comparing two different evidence forms.

This is a Technical Art boundary problem rather than a Rigging, Animation, Runtime or UC-domain problem, so no duplicate specialist lane was opened in those areas.

## Exact evidence-identity repair

The exact lid Rigging donor remains:

`4b72c9918c5fc1e89bd18a0be24fb4afac6e7775`

Exact Object source SHA-256 remains:

`49b1f9ed9865893d6de6f1ec8f069576732df694853fde4e3fcff366de32644a`

The two identity dimensions are now named and verified independently:

- exact raw plan-file SHA-256: `05b4daad475c30f4c1ea72826fbafd452bf037e58523e18a0c338dd0d7999c0a`;
- exact canonical JSON semantic-plan SHA-256: `0ad6dc2ca22676cf301579932e599a441eb7c4bccce31991d1b727aeb22ac422`.

`tools/build_object_target_lid_rig_binding.py` now fails closed if either dimension drifts. The older ambiguous `lid_rig_plan_sha256` field remains only as an explicitly labelled deprecated compatibility alias of the canonical digest so the stacked proof can move without silently changing its meaning.

This follows the current constellation's evidence-placement rule: source semantics and exact domain identities remain source-owned; transport representation remains UC-owned; receiving binding/evidence semantics remain Technical Art-owned.

## Second defect exposed after the identity repair

The first PR #19 workflow `35086955090` proved that the dual-identity repair cleared the original false donor rejection, then exposed a separate target-host proof-lifecycle defect.

The Godot observer queried world-space `global_transform` values before the imported UC hierarchy had been attached to a live scene tree. Godot correctly warned that those nodes were not inside the tree, causing invalid baseline values and a false neutral-return failure.

The smallest repair moved the imported hierarchy into the proof viewport and waited for live tree frames **before** world-space baseline sampling. No source rig, source geometry, target hierarchy, pose schedule or UC contract was altered.

The successful exact head after that lifecycle repair is:

`a462197421c06cffd46af327d6325cd75ef8aa1b`

## Exact target-host path

Pinned identities used by the successful proof:

- Object PR #19 head: `a462197421c06cffd46af327d6325cd75ef8aa1b`;
- stacked Rigging PR #18 base: `18cf876ab43fda5c493e264475bbdd8b2c93c400`;
- Technical Art rigid-scene donor: `965fb2f24dbd0b0cbb748d9f8b8712d62966315f`;
- lid Rigging donor: `4b72c9918c5fc1e89bd18a0be24fb4afac6e7775`;
- UC rigid-scene donor source head: `6dc465987e01362264f88b7cef4213609ae50763`;
- exact rebound GLB SHA-256: `9788bc7d405b1837961409de20bc9f76d72facae63726cdc7bf7a3ffd2ac3914`.

The proof intentionally pins the original exact UC donor source head even though PR #157 has since merged. That keeps the retained evidence reproducible instead of silently rebinding it to moving `main`.

Exact source -> target coordinate binding remains:

- source pivot `[0.0, 0.252, 0.306] m`;
- target pivot `[0.0, 0.306, 0.252] m`;
- coordinate map `[x,y,z] -> [x,z,y]`, determinant `-1`;
- source opening rotation sign `-1` around +X;
- target X rotation sign `+1` after handedness conversion;
- representative source/target poses `0 / 30 / 60 / 90 / 110 deg`.

No pose was retimed or reauthored by Technical Art.

## Exact workflow and retained evidence

Dedicated exact-head workflow:

`35087224839 — Object target lid rig envelope evidence` — **SUCCESS**.

Python 3.11 completed the full path:

- current Object tests;
- exact source Rigging donor rebuild;
- exact Technical Art target hierarchy rebuild;
- exact raw + canonical identity binding;
- identity gates;
- pinned Godot 4.7.2 target-host run;
- receipt validation;
- retained artifact upload.

Python 3.13 independently passed current tests, donor rebuild, target rebuild, binding and identity gates. Godot-specific steps are intentionally 3.11-only in this workflow and were skipped rather than failed on 3.13.

Exact Godot receipt state:

`PASS_EXACT_LID_RIG_ENVELOPE_ON_UC_TARGET_HIERARCHY`

Measured target-host bounds:

- maximum angle readback error: `2.50447816085853e-06 deg`;
- maximum hinge-origin drift: `0.0 m`;
- maximum fixed-component center drift: `0.0 m`;
- maximum lid-child local-transform drift: `0.0`;
- maximum rigid-component pairwise-distance drift: `6.33299350738525e-08 m`;
- neutral-return maximum center drift: `0.0 m`;
- neutral-return changed pixels: `0`.

Visible changed pixels versus the retained neutral frame:

- 0 deg: `0`;
- 30 deg: `64,793`;
- 60 deg: `88,915`;
- 90 deg: `85,192`;
- 110 deg: `88,097`.

The fixed `body_shell`, `latch_0_lever` and `latch_1_lever` remain at `0.0 m` center drift across the retained poses. Lid-owned keepers follow the lid hierarchy. The lid hinge knuckle mesh centers lie on the X articulation axis, so their center delta can remain zero while the rigid lid set rotates; that is expected and is not used as a false no-motion signal.

Retained artifact:

- ID: **`10442163204`**;
- name: `object-target-lid-rig-a462197421c06cffd46af327d6325cd75ef8aa1b`;
- size: **186,634 bytes**;
- GitHub digest: `sha256:af09b78d1f4f7eb147fec41566f8211e82bd857e239ac29b25504ccc7b0a5580`;
- expiry currently reported by GitHub: 2026-10-16.

The artifact contains the exact source JSON, exact donor articulation plan/evidence, Technical Art rigid-scene receipt, rebound GLB, dual-identity target binding, exact donor-head receipts, target-host receipt, and retained 0/30/60/90/110/neutral-return PNG evidence.

The digest above is the GitHub-retained artifact digest. This activation did not independently download and rehash the final ZIP, so no independent rehash claim is made.

## Source clearance evidence versus target-host non-claim

The exact source Rigging donor was rebuilt during the successful workflow and again produced:

`PASS_CONTINUOUS_BODY_LID_SHELL_CLEARANCE_CERTIFICATE`

for its own bounded source-space shell model, with certified minimum body/lid shell separation `0.012 m` across 0..110 degrees.

That certificate does **not** become target-host continuous collision evidence merely because the target representative poses passed. The current target-host proof remains five static representative poses plus neutral return. `HOLD_TARGET_HOST_CONTINUOUS_COLLISION` therefore remains explicit.

## Placement decision

No new UC capability was justified this activation.

Correct ownership remains:

- Object / Rigging owns the exact articulation plan and semantic meaning;
- Object source owns the mechanical component identities and hierarchy intent;
- UC owns the already-merged neutral `axm.rigid-scene-graph/v0.1` transport/verification contract;
- Technical Art owns the exact cross-repo receiving binding, evidence identity semantics, coordinate conversion and target-host proof lifecycle;
- Animation owns clip/choreography timing;
- Runtime owns controller/resource lifecycle/performance acceptance;
- Hard-Surface / Rigging own mechanical articulation semantics;
- Materials / Art Direction / Visual QA own final presentation acceptance.

No latch, lid, hinge, animation, controller or Object ontology was centralized into UC for convenience.

Profession Fabric remains unchanged. Its Technical Artist body is still experimental; one additional 3D receiving-boundary repair is not enough evidence for profession promotion or maturity claims.

## Handoffs

### Object Rigging PR #18

The original exact-head failure was a receiving evidence-identity mismatch, not source-rig drift. The stacked Technical Art repair now proves the exact representative source-rig envelope on the real imported UC hierarchy. Rigging remains authoritative over the articulation itself; PR #19 should be treated as receiving/proof plumbing rather than silent Rigging adoption.

### Object Animation PR #10

The real target hierarchy now has a proven representative lid envelope and explicit source->target sign conversion. This still does **not** transport the 101-sample animation sequence through UC, author an `AnimationPlayer`, or approve timing/clip quality.

### Object Runtime PR #13

The hierarchy and representative target articulation now execute in a real Godot proof host. This does not establish controller/state-machine behavior, wall-clock playback, target-device performance or runtime budget acceptance.

### Universal Creation

No change required this activation. The neutral rigid-scene graph contract is now merged and is sufficient for this exact path. The correct repair belonged in the receiving Technical Art layer.

## Non-claims / remaining holds

This activation does **not** prove or authorize:

- merging Object PR #19 or stacked Object PR #18;
- arbitrary animation/skinning/blend-shape transport in UC;
- transport of Animation PR #10's exact 101-sample clip;
- `AnimationPlayer`, runtime controller/state-machine behavior or wall-clock playback;
- continuous collision clearance on the imported target hierarchy;
- physical latch retention, hinge engineering, friction, load, wear, damping or manufacturing validity;
- gameplay or interaction acceptance;
- target-device FPS/GPU/VRAM/draw-call budgets;
- final Materials/LookDev, Art Direction or independent Visual QA acceptance;
- CANON or production readiness;
- Profession Fabric promotion;
- Technical Art / UC mastery.

## Root gate

- **Truth:** raw file identity and canonical semantic identity are now separate named facts; source, donors, GLB, target-host result and artifact remain exact-head bound. The failed intermediate runs are preserved rather than rewritten out of history.
- **Agency / non-domination:** source/Rigging semantics remain source-owned; UC transports only caller-authored generic hierarchy state; Technical Art does not claim authority over Animation, Runtime, mechanical engineering, visual acceptance, merge or CANON.
- **Continuity:** the repair is stacked on the exact active Rigging lane, prior Technical Art/UC evidence remains valid in Git history, UC's merged generic contract remains unchanged, and all changes are additive/reversible.
- **Wisdom before speed:** two small boundary defects were isolated and repaired at their actual receiving/proof layer instead of weakening identity checks, rewriting the source rig, or expanding UC with Object-specific knowledge.

## Current state

`PASS_GENERIC_RIGID_SCENE_GRAPH_CONTRACT / UC_RIGID_SCENE_GRAPH_MERGED / PASS_OBJECT_SOURCE_OWNED_RIGID_PARTS_TO_GODOT / PASS_DUAL_EVIDENCE_IDENTITY_BOUNDARY / PASS_EXACT_LID_RIG_TO_UC_TARGET_ENVELOPE / HOLD_ANIMATION_CLIP_TRANSPORT / HOLD_RUNTIME_CONTROLLER / HOLD_TARGET_HOST_CONTINUOUS_COLLISION / HOLD_PHYSICS_GAMEPLAY / HOLD_FINAL_VISUAL / OBJECT STACK DRAFT`
