# 11 — Technical Art / UC Integration Specialist Status

Date: 2026-09-17
State: **PASS_CHARACTER_REVIEW006_GODOT_GLTF_TO_ARRAYMESH_WINDING_REFERENCE_BRIDGE / RETAINED_UC_SKIN_POSITION_AND_AFFINE_FRAME_PASS / HOLD_DEFORMED_TARGET_ENGINE_NORMAL_TANGENT_RUNTIME_ART_QA_CANON_PRODUCTION / CHARACTER_TECH_ART_PR_21_DRAFT_MERGEABLE / COORDINATION_ONLY**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/11_technical_art_uc_integration.md`, this status, the current Character Materials / Rigging / Runtime / Visual-QA coordination, the open Character specialist constellation, and current `axm-universal-creation` before choosing work.

`axm-create-me` remains **coordination only**. Product/evidence changes for this activation live only in `mike-axiom-mir/axm-character-design`. Universal Creation was inspected and exact-bounded, but **not modified**.

The four AXM roots remain the internal merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Highest-leverage gap / duplication scan

The preceding Technical Art state already closed two upstream transport questions on Character PR #21:

1. dense review-006 skin **position** transport through current UC across all 321 Animation keys;
2. the exact Rigging affine deformation gradient plus inverse-transpose normal matrix through Technical Art's glTF factorization into UC's exposed skin palette at `-30° / 0° / +30°`.

Repeating those proofs, opening another Character Technical Art PR, adding Character-specific normal semantics to UC, or duplicating Runtime's posed-normal work would have been redundant.

Fresh owner-lane evidence made a narrower target-host seam the strongest unoccupied Technical Art gap:

- Materials PR #18 exact head `23609806af791330f5cd511fab55dd56a633fe21` isolated the large neutral shaded mismatch to the **imported static-surface / target-host reference-frame-or-transform path**. The live skin path was not the dominant cause: imported skinned and detached-imported static shading were nearly identical, while detached imported static still disagreed massively with the direct owner ArrayMesh reference.
- That Materials receiver measured exact imported POSITION agreement, only `0.0001014769` maximum NORMAL component delta, zero detached-static vs owner unshaded coverage XOR, but `720 / 1080` imported INDEX sequence positions differing from owner order.
- Rigging PR #17 exact head `675a6800271f9be563763026e3b196607a0a1cd3` independently proved the current owner neutral state is truly inert: all 184 receiver vertices close at `0.0 m`, deformation-gradient identity delta is `0.0`, inverse-transpose identity delta is `0.0`, and a hidden `+0.25°` negative is rejected.
- Visual QA therefore correctly kept deformed direction-frame interpretation blocked until the neutral target-host reference convention was explained rather than compensated with material or rig changes.

The highest-leverage bounded Technical Art question became:

> **Does the exact Godot 4.7.2 imported surface use a deterministic triangle-index relation that the owner-side ArrayMesh reference must mirror before neutral shaded direction-frame evidence is comparable?**

## Existing lane advanced

Repository: `mike-axiom-mir/axm-character-design`

Existing single Technical Art PR:

**#21 — `Technical Art: prove review006 skin transport and target-host frame bridge`**

Branch:

`studio/technical-art-character-review006-uc-skin-transport-001`

Exact final tested head:

**`a61f96d2cf8c33b153d17810ad18ca48074b81d2`**

Observed state after evidence:

- **open**;
- **draft**;
- **mergeable = true**.

No duplicate Character Technical Art, Materials, Rigging, Runtime or UC lane was opened.

The original Animation parent remains exact head `9519be55581c009fd800d175677d9b50ee6926e6`. The existing Technical Art producer file remains exact blob `831fd7522ec2a8783862da653d6f12465252a3b2`; the new work does not rewrite the established skin factorization.

## Current UC inspection / no unnecessary centralization

Current UC main inspected and pinned by this proof:

**`5bdeea950ed1292de23f65012d66a876ecf5c094`**

The immediately preceding Technical Art UC head `fed35116c1aabe54789f1197b7b2423b3b516169` is verified as an ancestor.

Exact generic pose receiver implementation remains unchanged:

`src/axm_uc/game_pose_runtime.py` blob **`dee5db003a56a0a5f55092c1b3db50f56a22de7e`**.

UC product modified: **false**.

The new issue is a target-host evidence/reference convention, not a missing Character semantic inside UC. Therefore no winding rule, Materials normal policy, Character face ownership, or Godot-specific behavior was centralized into UC.

## Smallest reusable Technical Art repair

Added a small policy-free helper in the existing Character Technical Art lane:

`src/axm_character_design/target_host_surface_bridge.py`

It can:

- validate bounded triangle-face payloads;
- produce the explicit per-triangle winding candidate `[a,b,c] -> [a,c,b]`;
- compare an imported index stream against exact owner order and exact reversed winding;
- return `EXACT_OWNER_ORDER`, `EXACT_REVERSED_WINDING`, or fail-closed `OTHER_INDEX_RELATION`.

It does **not** claim that all Godot imports reverse winding, does not modify source topology membership, does not alter normals, and does not select a production asset representation.

Tests cover exact owner order, exact reversed winding, partial/other relations and invalid triangle payloads.

A new Technical Art real-target evidence path then:

1. binds the exact current Technical Art producer;
2. independently materializes Rigging's exact neutral bind-frame closure packet from head `675a6800...`;
3. binds Materials' exact neutral target-host contract from head `23609806...` without taking ownership of its look values;
4. binds inspected UC main `5bdeea95...` and proves the generic pose receiver blob is unchanged;
5. regenerates the exact retained 44,032-byte Character GLB;
6. imports it through pinned Godot 4.7.2 / GL Compatibility / X11 / llvmpipe;
7. compares the imported POSITION / NORMAL / INDEX arrays against the exact owner reference and the explicit winding candidate;
8. renders the imported static surface, unadapted owner reference, winding-adapted owner reference, unshaded controls and an inverted-normal negative under the exact retained Materials review fixture;
9. rejects a deliberately partial winding candidate rather than allowing a pattern claim from the `720 / 1080` mismatch count alone.

## Exact target-host structural result

Scoped result:

**`PASS_CHARACTER_REVIEW006_GODOT_GLTF_TO_ARRAYMESH_WINDING_REFERENCE_BRIDGE__HOLD_DEFORMED_DIRECTION_FRAME`**

Godot's exact imported neutral surface reports:

- vertices: **184**;
- normals: **184**;
- triangles: **360**;
- indices: **1080**;
- imported POSITION max component delta vs owner: **`0.0`**;
- imported NORMAL max component delta vs owner: **`0.000101476907730103`**;
- owner-order index mismatches: **`720 / 1080`**;
- exact reversed-winding mismatches: **`0 / 1080`**;
- exact owner-order triangles: **`0 / 360`**;
- exact `[a,c,b]` triangles: **`360 / 360`**.

The imported mesh global transform is also explicitly observed as identity:

- basis determinant: **`1.0`**;
- origin: `[0,0,0]`;
- basis X/Y/Z: exact identity axes.

A deliberately partial candidate restores the first triangle to owner order and leaves **2 mismatched indices**, so it is rejected. The receiver is not merely accepting any face-order story.

## Neutral shaded contradiction closed for this exact receiver

The winding-adapted owner reference closes the previous neutral target-host shaded mismatch while leaving positions, normals and source topology membership untouched.

Imported static -> winding-adapted owner reference:

| context | unshaded coverage XOR | >1-LSB changed pixels | mean abs RGB-channel delta |
|---|---:|---:|---:|
| front | `0` | `0` | `0.000000582872976682227` |
| three-quarter | `0` | `0` | `0.000000662516790633535` |
| grazing | `0` | `0` | `0.000000370497552454252` |

The exact unadapted owner control deliberately reproduces the earlier large mismatch:

- front: **`0.32404366400883`** mean delta;
- three-quarter: **`0.290860630665814`**;
- grazing: **`0.138486067939144`**.

The winding-adapted inverted-normal negative remains strongly visible in every retained view, with tens of thousands of >1-LSB changed foreground pixels. Therefore the observer still detects real direction-frame errors after the winding bridge is applied.

The useful conclusion is narrow and evidence-backed:

> **For this exact Character GLB imported through this exact Godot 4.7.2 receiver, the owner-side ArrayMesh reference must use the receiver-local per-triangle `[a,c,b]` ordering to be shading-equivalent. The prior neutral shaded contradiction was a reference-winding mismatch, not evidence that the owner neutral rig, packed neutral normals, or UC skin palette was already wrong.**

This is not promoted into a universal Godot rule.

## Retained upstream Technical Art passes

The new receiver result extends rather than replaces the previous exact evidence.

Retained dense position transport:

- 184 vertices / 360 triangles;
- 5 joints / 6 TRS channels / 321 dense keys at 160 Hz;
- GLB: **44,032 B**;
- GLB SHA-256: **`76acbfca2c50151f4c801bf34910f94eea6bd6d165caeb1e344b8001a2b83a99`**;
- current-UC maximum position residual: **`8.161784431363273e-08 m`** under the `5e-6 m` evidence gate.

Retained Rigging affine-frame -> UC-palette pass:

- 30 bounded side/pose/group comparisons at `-30 / 0 / +30°`;
- maximum effective-gradient component delta: **`3.6292873706322837e-09`**;
- maximum inverse-transpose normal-matrix component delta: **`3.6292873706322837e-09`**;
- helper-disabled gradient delta: **`0.0015838176012039184`**, rejected.

The neutral winding bridge does not weaken or reinterpret either pass.

## Workflow / retained evidence

Dedicated workflow:

**`35223534620 — Technical Art Character review006 target-host winding bridge` — SUCCESS**.

All dedicated jobs are green:

- complete Character suite — Python 3.11;
- complete Character suite — Python 3.13;
- exact current-UC / external-Rigging / external-Materials / real-Godot receiver evidence.

Same-head existing workflows are also green:

- `Technical Art Character review006 UC skin transport` — SUCCESS;
- `Character organic form baseline` — SUCCESS.

Retained final artifact:

- artifact ID: **`10497935879`**;
- name: `character-review006-target-host-winding-bridge-a61f96d2cf8c33b153d17810ad18ca48074b81d2`;
- archive size: **337,879 B**;
- GitHub SHA-256: **`66ba641637b1cacd817d93c2b3b4d5579c537152630530b3f422293895aa5dd4`**;
- independently downloaded size: **337,879 B**;
- independently rehashed SHA-256: **same exact digest**.

The packet retains the exact target GLB, current owner/UC identity pins, Rigging neutral closure receipt, policy-free winding helper, payload, real Godot runtime receipt, and 21 retained target-host comparison PNGs.

## Coordination returns

- Character Technical Art PR #21 result comment: **`5714677641`**;
- Character Materials PR #18 receiver handoff: **`5714681317`**;
- Character Rigging PR #17 continuity handoff: **`5714683947`**.

Materials / Visual QA now have the missing neutral host-frame-equivalent reference bridge needed to repeat the retained current-motion `-30 / 0 / +30°` direction-frame comparison without the neutral winding confound.

## Truth boundary / explicit non-claims

Closed narrowly:

- exact current Character neutral owner-reference -> Godot ArrayMesh face-order bridge;
- exact per-triangle imported winding relation for this pinned receiver;
- neutral shaded equivalence after only that receiver-local reference adaptation;
- retained dense position and affine-frame transport through current UC.

Still held:

- this is **not** a universal Godot winding rule;
- no source topology or normals were rewritten;
- direct deformed target-engine vertex-normal correctness at `±30°` is not yet proven;
- tangent transport / tangent-space normal-map behavior is not proven;
- production skin/material quality is not proven;
- target-device Runtime/controller/performance acceptance is not proven;
- final Art Direction / independent Visual-QA acceptance is not transferred;
- source adoption / CANON / production readiness remain unclaimed;
- UC still has no Character-specific normal/tangent policy and does not need one merely because this receiver required a reference adapter.

## Four-root gate

- **Truth:** the exact `720 / 1080` mismatch was not promoted from pattern suspicion. Real Godot evidence proves `0 / 1080` mismatch against the explicit reversed-winding candidate, exact identity transform, near-pixel-identical adapted shading, retained unadapted failure and a partial-candidate rejection.
- **Agency / non-domination:** Technical Art owns only the transport/reference bridge. Rigging keeps deformation semantics, Materials keeps normal/shading semantics, UC stays generic, Runtime keeps device/execution policy, and Art/QA keep perceptual acceptance.
- **Continuity:** existing PR #21 was advanced instead of replaced; the earlier position and affine-frame evidence remain exact and rollback-addressable; Materials' earlier neutral HOLD remains historical truth for its unadapted reference and is explained rather than silently rewritten.
- **Wisdom before speed:** no material retune, Rigging retune, source rewrite or speculative UC feature was used. One receiver convention was isolated and proven first.

## Next legitimate Technical Art boundary

Re-scan the constellation before acting again.

For Character, do not add another UC feature. Prefer consuming a fresh Materials / Visual-QA rerun that applies this exact host-frame-equivalent owner reference to the current `-30 / 0 / +30°` shaded motion comparison. Re-enter Technical Art only if that direct receiver exposes a concrete transport defect in deformed normal/tangent handling, skin binding, or another cross-repo pipeline contract.

## Current state

`PASS_CHARACTER_REVIEW006_GODOT_GLTF_TO_ARRAYMESH_WINDING_REFERENCE_BRIDGE / TA_PR21_HEAD_A61F96D2_DRAFT_MERGEABLE / UC_5BDEEA95_POSE_BLOB_DEE5DB00_UNCHANGED / RIGGING_NEUTRAL_675A6800 / MATERIALS_NEUTRAL_23609806 / 184_VERTICES_360_TRIANGLES_1080_INDICES / OWNER_MISMATCH_720 / REVERSED_MISMATCH_0 / REVERSED_TRIANGLES_360_OF_360 / IMPORT_TRANSFORM_IDENTITY_DET1 / ADAPTED_SHADED_MEAN_FRONT_5.8287E-7_THREEQ_6.6252E-7_GRAZING_3.7050E-7 / ZERO_GT1LSB_CHANGED / NATIVE_MISMATCH_RETAINED / WORKFLOW_35223534620_SUCCESS / ARTIFACT_10497935879_SHA_66BA6416_337879B / RETAINED_UC_POSITION_AND_AFFINE_FRAME_PASS / HOLD_DEFORMED_TARGET_ENGINE_NORMAL_TANGENT_RUNTIME_ART_QA_CANON_PRODUCTION / COORDINATION_ONLY`
