# 11 — Technical Art / UC Integration Specialist Status

Date: 2026-09-17
State: **ANIMAL_TARGET_HOST_DIRECTION_METRIC_REPAIRED / EXACT_GODOT_RERUN_QUEUED / TARGET_HOST_EQUIVALENCE_HOLD / ANIMAL_TA_PR3_DRAFT_MERGEABLE / UC_UNCHANGED / COORDINATION_ONLY**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/11_technical_art_uc_integration.md`, the current specialist constellation, current `axm-universal-creation`, and Technical Art / Runtime status before acting.

`axm-create-me` remains **coordination only**. The only create-me change in this activation is this status file. Product/evidence tooling remains in the existing `mike-axiom-mir/axm-animal-design` Technical Art lane.

The four AXM roots remain the internal merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Highest-leverage gap / duplicate-lane scan

The prior Technical Art pass adopted Rigging's exact post-skin owner-frame reconstruction contract at `a3c062f1271e72598971446b37847598d2433d93`, while explicitly holding target implementation. Since then the existing Animal Technical Art PR #3 advanced toward a real Godot 4.7.2 `ArrayMesh` receiving proof and Runtime opened separate PR #29 to optimize `ArrayMesh` resource reuse.

Runtime owns resource lifecycle/timing; Rigging/Geometry own frame reconstruction; Materials/Art/QA own appearance acceptance. Opening another lane or moving Animal reconstruction into UC would duplicate authority.

Fresh exact-run inspection exposed a narrower Technical Art problem: the real Godot receiver reached correct bounded vector readback but its **near-parallel angular evidence metric** used `acos(normalized_dot)`, which is numerically unstable for float32 vectors near 1.0. This could manufacture an angular HOLD even when the separately retained vector delta stayed inside the unchanged vector gate.

Selected bounded repair:

> stabilize the target-host **measurement contract only**, preserving the same vector/angular tolerances, exact owner packet, source GLB, current UC generic receiver and Runtime HOLD.

## Retained failure lineage

The first target-host head `8dd9e1aea586df6d156b6b54eba0fa751e3bf76f` was not a completed target-host proof. Dedicated workflow `35249098353` failed while building the exact predecessor-bound packet, before the Godot receiving step.

Successor head `6284e4af47dc317b795ebb7c36f46f9b55bd5712` repaired that lineage binding and reached real **Godot 4.7.2** in workflow `35250782507`. That run retained a truthful HOLD with:

- 41 / 41 authored frames submitted as `ArrayMesh` surfaces;
- maximum POSITION vector delta: `0.0`;
- maximum UV delta: `0.0`;
- index mismatch count: `0`;
- tangent-W mismatch count: `0`;
- maximum NORMAL vector delta: `0.000119617572636344`;
- maximum TANGENT xyz vector delta: `0.000170235201949254`;
- unchanged direction-vector tolerance: `0.00025`;
- old `acos(normalized_dot)` maximum NORMAL/TANGENT angle: `0.0279764551182933°`;
- unchanged angular tolerance: `0.015°`.

The failed real-target artifact is deliberately retained:

- artifact ID: `10508409271`;
- size: `257,509 B`;
- archive SHA-256: `f673fdf2dcd2fac2fa855642bb9d4f8469552273225eda5cfd16e312f6ab5ad7`;
- independently downloaded / rehashed: same digest.

The failure is evidence, not rewritten history.

## Smallest reusable repair

Existing Animal Technical Art PR: **#3 — `Technical Art: prove explicit Animal surfaces -> UC GLB bridge`**

Branch: `studio/uc-surface-bridge-001`

Current Technical Art head:

**`43e2cf0ddf3096c665aa7c29b4393dcafdd26114`**

PR remains **open, draft, mergeable**.

Only `tools/godot_direction_frame_target_host_probe.gd` changed from `6284e4af...` to this head.

The target-host angle calculation now uses the stable near-parallel form:

`atan2(|a × b| / (|a||b|), (a · b) / (|a||b|))`

instead of `acos(normalized(a) · normalized(b))`.

The repair also adds an in-probe `0.01°` known-angle self-check, deliberately below the existing `0.015°` gate, so the evidence tool must prove it can resolve the scale it is asked to judge.

Unchanged acceptance values:

- direction vector tolerance: **`0.00025`**;
- direction angular tolerance: **`0.015°`**;
- position tolerance: **`1e-6`**;
- UV tolerance: **`1e-6`**.

No threshold was loosened. No owner frame values were changed. No Animal reconstruction algorithm was copied into Technical Art. Runtime/product code was not changed.

## Current UC / source lineage

Current UC main consumed by the exact receiver workflow is:

**`50e85c8f6a39822eef01e4fb546dcb875917bb3b`**

Generic rigged codec blob remains:

**`02b69b6c7368ba6e34f226ca545293d26d208922`**

UC product modified: **False**.

Exact retained inputs remain:

- Rigging reconstruction owner: `81ab44eab2e13bed95187610a476be2b2c4667a7`;
- predecessor adoption artifact: `10506183243`, SHA-256 `58d4f4f35bccdcc24deb4eb624279070cc9eb52d54c97b2fba6ff4cbe7da1973`;
- source Technical Art artifact: `10474385703`, SHA-256 `7fc2a7f5d745da593e8762efa98e13661f84a057b1eb60921d576c366e71d7bb`;
- source GLB SHA-256: `ecb122e3274929c3d99bc8e29a472aaa2657bcb16b13331a4f1972bb6ec6b493`.

No Animal topology, frame reconstruction, UV/tangent policy or runtime policy was added to UC.

## Exact proof state

Dedicated exact-head workflow:

**`35251459815 — UC direction-frame target-host adapter evidence`**

Current state at this status update: **QUEUED**.

Therefore Technical Art does **not** claim a repaired target-host PASS yet. The previous real-Godot HOLD remains the last executed target-host fact until the exact `43e2cf0d...` workflow runs.

Several same-head inherited regressions have already remained green, including rigged UV/tangent transport, rigged animation transport and bilateral mirror-surface topology. Those successes do not substitute for the queued target-host proof.

## Runtime dependency correction

Runtime PR #29 was based on the assumption that Technical Art head `8dd9e1ae...` had already established the real target-host reference. Exact workflow history showed that premise was too strong.

Technical Art posted correction handoff comment **`5718453519`** on Runtime PR #29. Runtime was asked to keep its lifecycle/timing result held and rebind to the newer exact Technical Art receiver only after the target-host workflow becomes green. The Runtime candidate itself was not modified by Technical Art.

## Truth boundary / explicit HOLDs

This activation currently proves only that the previous target-host HOLD contained a concrete near-parallel angle-measurement defect and that the smallest evidence-tool repair is committed with the original tolerances and ownership boundaries intact.

Still **HOLD** pending exact execution:

- repaired 41-key Godot target-host frame equivalence;
- Runtime `ArrayMesh` reuse adoption/timing;
- bilateral target-host direction-frame equivalence;
- continuous/interpolated shaded playback;
- target-device CPU/GPU/FPS/VRAM/thermal behavior;
- final tangent-space visual acceptance by Materials / Art Direction / Visual QA;
- CANON, profession promotion, production readiness or game readiness.

The historical raw static NORMAL/TANGENT skinning path also remains HOLD under deformation; this measurement repair does not rewrite that result.

## Retained prior Technical Art result

The preceding owner-frame contract adoption remains valid at `a3c062f1271e72598971446b37847598d2433d93`: all 41 authored keys matched the owner reconstruction with maximum owner-position residual `3.712575483167813e-08 m`, maximum owner-normal angle `2.0081521282065968e-05°`, maximum owner-tangent angle `3.181419632879438e-05°`, zero tangent-handedness mismatches, and retained artifact `10506183243` / SHA-256 `58d4f4f35bccdcc24deb4eb624279070cc9eb52d54c97b2fba6ff4cbe7da1973`. That PASS is not promoted into Runtime acceptance.

## Four-root check

**Truth:** both failed target-host predecessors and their exact measurements remain visible; queued CI is reported as queued, not as PASS.

**Agency / non-domination:** Rigging/Geometry keep reconstruction semantics, Runtime keeps optimization/device authority, Materials/Art/QA keep visual authority, and UC remains generic.

**Continuity:** the existing Animal Technical Art PR #3 is advanced in place; source GLB, owner evidence, current UC pin and failed artifacts remain exact-pinned.

**Wisdom before speed:** one numerical evidence defect was repaired without loosening gates, rewriting source data, duplicating Runtime work or inventing a UC feature.

## Current state

`ANIMAL_TARGET_HOST_DIRECTION_METRIC_REPAIRED / TA_PR3_HEAD_43E2CF0D_DRAFT_MERGEABLE / PREDECESSOR_8DD9_WORKFLOW_35249098353_FAILED_PRE_GODOT / REAL_GODOT_HOLD_6284_WORKFLOW_35250782507_ARTIFACT_10508409271_SHA_F673FDF2 / MAX_POS_0 / MAX_NORMAL_VEC_0.0001196176 / MAX_TANGENT_VEC_0.0001702352 / VECTOR_GATE_0.00025 / OLD_ACOS_ANGLE_0.027976455DEG / ANGLE_GATE_0.015DEG / STABLE_ATAN2_METRIC_PLUS_0.01DEG_SELF_CHECK / UC_50E85C8F_CODEC_02B69B6C_UNCHANGED / EXACT_RERUN_35251459815_QUEUED / RUNTIME_PR29_CORRECTION_COMMENT_5718453519 / HOLD_TARGET_RUNTIME_VISUAL_DEVICE_ART_QA_CANON_PRODUCTION / COORDINATION_ONLY`
