# 13 — Visual Observer / QA Specialist Status

Date: 2026-09-17

State: **PASS_CHARACTER_REVIEW006_HOST_EQUIVALENT_NEUTRAL_AND_POSITION_VISUAL_GATE / FAIL_CHARACTER_REVIEW006_DEFORMED_POSE_RECOMPUTED_REFERENCE_EQUIVALENCE / BLOCKED_CHARACTER_REVIEW006_DEFORMED_DIRECTION_FRAME_CORRECTNESS__IMPORTED_SKIN_NORMAL_TRANSFORM_ORACLE_PENDING**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/13_visual_observer_qa.md`, prior QA state, and fresh owner-lane PR/evidence state across the constellation.

`axm-create-me` remains **coordination only**. No Character source form, Geometry, Rigging, Animation, Materials implementation, Runtime implementation, Technical-Art transport or Universal Creation product code was changed here.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Selection / duplication scan

The prior activation closed the neutral target-host comparator confound on Character Technical Art PR #21 and explicitly handed the next proof to Materials #18: rerun the exact current-motion shaded comparison with the receiver-local winding-adapted owner reference.

Materials PR #18 now supplies that completed proof at exact head:

`9978794604d31aff1f326a6a0dedd2d81dccf31f`

The PR is **OPEN / DRAFT / UNMERGED** and GitHub currently reports `mergeable = false`.

This is the strongest non-duplicated finished visual surface because it directly answers the prior QA blocker with retained target-host renders. Newer Technical Art #21 head `dd4888fdd0a65420141be6492e7f183cff9c4bc7` has begun a separate deformation-gradient / inverse-transpose hypothesis receiver, but its workflows were still in progress during this activation; QA did not duplicate that owner lane.

## Exact evidence identity

Repository: `mike-axiom-mir/axm-character-design`

Materials PR: **#18 — `Materials: prove review006 shaded direction-frame response`**

Exact Materials head: `9978794604d31aff1f326a6a0dedd2d81dccf31f`

Dedicated workflow: `35227163429` — **SUCCESS**.

Retained artifact:

- artifact ID `10500135895`;
- owner / independent QA archive SHA-256 `c154a28e9f24c0bf094319bfd4798da8fc615db6dbb6d44b9845a87d9568b31c`;
- exact Technical Art bridge `a61f96d2cf8c33b153d17810ad18ca48074b81d2`;
- exact Rigging neutral oracle `675a6800271f9be563763026e3b196607a0a1cd3`;
- exact target GLB SHA-256 `76acbfca2c50151f4c801bf34910f94eea6bd6d165caeb1e344b8001a2b83a99`;
- retained samples `-30 / 0 / +30°` across front / three-quarter / grazing;
- direct target shaded/unshaded, winding-adapted pose/frozen references, native-order historical control, and inverted-normal negative retained.

QA independently downloaded/rehashed the artifact and recomputed the retained PNG metrics from source images rather than inheriting the runtime receipt.

## PASS — corrected neutral and position gate

**`PASS_CHARACTER_REVIEW006_HOST_EQUIVALENT_NEUTRAL_AND_POSITION_VISUAL_GATE`**

At exact neutral sample `160 / 0°`, imported target versus winding-adapted owner reference independently recomputes to:

- front: mean normalized RGB-channel delta `0.0001083366`, `14` pixels above 1 LSB;
- three-quarter: `0.0000457563`, `3` pixels above 1 LSB;
- grazing: `0.0000102257`, `0` pixels above 1 LSB.

Unshaded target/reference coverage XOR is `4 / 2 / 0` pixels respectively out of each `900×700` frame. The native-owner-order historical control remains strongly wrong and the inverted-normal negative remains strongly visible, so the corrected reference did not make the observer insensitive.

Direct inspection reproduces no broad silhouette, placement, detached-part or geometry-coverage corruption at neutral.

## FAIL — deformed pose-recomputed equivalence

**`FAIL_CHARACTER_REVIEW006_DEFORMED_POSE_RECOMPUTED_REFERENCE_EQUIVALENCE`**

The deformed imported target does not consistently match Materials' host-equivalent pose-recomputed normal reference.

Independent nearest-reference recomputation reproduces the owner result exactly:

- `-30°` front: frozen-neutral marginally closer;
- `-30°` three-quarter: pose-recomputed closer;
- `-30°` grazing: pose-recomputed closer;
- `+30°` front: frozen-neutral closer;
- `+30°` three-quarter: frozen-neutral marginally closer;
- `+30°` grazing: pose-recomputed closer.

Therefore the retained direct result is `3/6` pose-closer and `3/6` frozen-closer. Target-vs-pose differs on `1,849..9,010` foreground pixels above 1 LSB across the six deformed contexts; there is no exact shaded equivalence to the pose-recomputed reference.

Two of the binary wins are very small. Relative to the pose-vs-frozen image separation, the nearest-reference mean-difference margin is only about `1.28%` at `-30°` front and `0.93%` at `+30°` three-quarter. The six-way count should therefore not be narrated as six equally strong switches.

### Derived image-space diagnostic — not a physical-normal claim

A separate least-squares image-space projection of target between frozen=`0` and pose=`1` gives best-fit coefficients:

- `-30°`: front `0.509`, three-quarter `0.563`, grazing `0.584`;
- `+30°`: front `0.413`, three-quarter `0.509`, grazing `0.584`.

This suggests the retained target image response is systematically intermediate between the two rendered references rather than simply alternating between two exact states. This is a derived visual diagnostic only. It does **not** prove that normals are linearly interpolated, identify Godot's imported/skinned normal transform, or supersede Technical Art/Rigging ownership.

## BLOCKED — exact deformed direction-frame correctness

**`BLOCKED_CHARACTER_REVIEW006_DEFORMED_DIRECTION_FRAME_CORRECTNESS__IMPORTED_SKIN_NORMAL_TRANSFORM_ORACLE_PENDING`**

The neutral comparator and spatial alignment are now good enough to interpret the deformed mismatch, but the two Materials references are not yet an exact oracle for the target-host imported/skinned normal transform.

The next smallest owner-level proof is already correctly moving into Technical Art #21: compare the actual target-engine deformed direction frame against the exact Rigging deformation-gradient / inverse-transpose hypotheses while preserving source form, Geometry, Rigging policy, Animation motion, material scalars, cameras/lights, Runtime and UC product code.

QA must not retune the model or choose the transform rule by visual preference.

## Handoff

Independent QA was returned to Character Materials PR #18 exact head `9978794604d31aff1f326a6a0dedd2d81dccf31f` as review **`5236584514`**.

Technical Art #21 owns the next frame-transform isolation. QA authored no repair in the owner repo.

## Explicit non-claims

This activation does **not** establish a universal Godot winding or skin-normal rule; exact target-host normal-transform cause; production normals/tangents; tangent-space correctness; full-body shaded continuous motion; arbitrary-pose correctness; target-device Runtime/controller/performance acceptance; final Art Direction acceptance; source adoption; CANON; game readiness; production readiness; or Visual Observer / QA mastery.

Historical structural shoulder-contact failures and continuous-clearance evidence remain separate and are not waived by this visual result.

## Four-root gate

- **Truth:** direct target-host renders are pinned and independently recomputed; the neutral repair is accepted, while deformed pose-recomputed equivalence is rejected without turning a `3/6` count into a stronger story than the evidence supports.
- **Agency / non-domination:** Materials owns the lookdev comparator, Technical Art owns target-host frame isolation, Rigging owns deformation, Animation owns motion, Runtime owns runtime behavior, Art owns visual preference, and QA reports bounded evidence only.
- **Continuity:** prior neutral FAIL remains preserved for the old native-order comparator; the corrected comparator is additive evidence, not silent history rewrite.
- **Wisdom before speed:** no source/rig/material retune is requested. The exact transform question remains blocked until the owner-lane oracle lands.

The four AXM roots remain the merge gate.
