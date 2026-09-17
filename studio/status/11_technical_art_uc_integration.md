# 11 — Technical Art / UC Integration Specialist Status

Date: 2026-09-17
State: **PASS_CHARACTER_REVIEW006_DENSE_SKIN_POSITION_AND_RIG_GRADIENT_PALETTE_TRANSPORT_TO_CURRENT_UC / HOLD_DIRECT_UC_DEFORMED_NORMAL_TARGET_ENGINE_SHADED_EQUIVALENCE_RUNTIME_ART_QA_CANON_PRODUCTION / CHARACTER_TECH_ART_PR_21_DRAFT_MERGEABLE / COORDINATION_ONLY**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/11_technical_art_uc_integration.md`, current Technical Art / Rigging / Materials / Runtime / Visual-QA coordination, the live Character constellation, and current `axm-universal-creation` before selecting work.

`axm-create-me` remains **coordination only**. Product/evidence changes live in `mike-axiom-mir/axm-character-design`; Universal Creation was inspected but not modified. The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Highest-leverage gap / duplication scan

The previous Character Technical Art pass on PR #21 already proved the dynamic-weight -> static glTF/TRS skin factorization and all 321 dense **positions** through UC. Repeating that path, opening another Character TA PR, or adding a Character-specific normal policy to UC would duplicate existing lanes.

Fresh Rigging PR #17 now supplies the missing owner-local reference: `D=(1-w)I+wR(theta)` and `inverse_transpose(D)` at exact representative poses, while Materials PR #18 reports a large neutral shaded target/reference mismatch despite nearly coincident unshaded coverage. Runtime owns its separate posed-normal cache optimization and Visual QA keeps final shaded adoption blocked.

The highest-leverage bounded TA step was therefore to answer one narrower question:

> **Does the exact Rigging affine deformation gradient itself survive Technical Art's glTF factorization into the current UC skin palette, before involving final vertex-normal semantics or the target renderer?**

## Existing lane advanced

Repository: `mike-axiom-mir/axm-character-design`.

Existing Technical Art PR: **#21 — `Technical Art: prove review006 skin positions through current UC`**.

Branch: `studio/technical-art-character-review006-uc-skin-transport-001`.

Exact final tested head:

**`c007c327f2613989581192602338435b67b748d7`**

PR #21 remains **open / draft / mergeable**. No duplicate Technical Art, Rigging, Materials, Runtime or UC lane was opened.

The original exact Animation parent remains:

**`9519be55581c009fd800d175677d9b50ee6926e6`**.

The fresh Rigging frame owner consumed independently is:

- Rigging head: **`a218b2cf2727482a78db8ab21afcf1bb72637bcc`**;
- exact frame module blob: **`57c43aea818f293274a94457252bf87e20b98897`**;
- owner map: `D=(1-w)I+wR(theta)`;
- owner normal map: `inverse_transpose(D)`;
- profile digest remains `49e59bfd7596619a2a19454ca395276097102047af673fc4219694e777a5a719`.

The evidence workflow generates the Rigging frame packet from that exact donor head in an isolated worktree. Technical Art does not copy the Rigging implementation into UC.

## Current UC rebind

Current UC main consumed by this proof:

**`fed35116c1aabe54789f1197b7b2423b3b516169`**.

Historical TA receiver head `7edbc9544d52207a6f09cb85889d1587e22d4442` is verified as an ancestor.

Exact `src/axm_uc/game_pose_runtime.py` blob remains unchanged:

**`dee5db003a56a0a5f55092c1b3db50f56a22de7e`**.

UC product modified: **false**.

Current generic `GamePoseAsset.sample(...)` already exposes `skin_world_matrices`; the repair is a Technical-Art evidence bridge over that generic output. No Character deformation semantics, final normal policy or Materials look semantics were added to UC.

## Smallest reusable contract/tooling repair

The existing Technical Art evidence builder now:

1. binds the exact fresh Rigging deformation-gradient donor;
2. binds current UC main and proves the pose-runtime implementation blob is unchanged;
3. samples UC's exact five-joint skin palette at dense clip samples `80 / 160 / 240` = `-30° / 0° / +30°`;
4. reconstructs each Rigging group's effective 3x3 linear skin map from the **actual UC palette + actual TA static JOINTS/WEIGHTS**;
5. maps the external Rigging oracle from Character Z-up to glTF Y-up by the existing proper determinant-`+1` coordinate rotation;
6. compares both the effective deformation gradient and its inverse-transpose normal matrix;
7. deliberately disables the non-root helper contribution as a fail-closed negative.

This is reusable Technical-Art receiver evidence: it asks whether an ordinary skin palette preserves an externally owned affine frame. It does **not** make UC choose Character groups or shading semantics.

## Exact proof result

Scoped result:

**`PASS_CHARACTER_REVIEW006_DENSE_SKIN_POSITION_AND_RIG_GRADIENT_PALETTE_TRANSPORT_TO_CURRENT_UC__HOLD_TARGET_ENGINE_DIRECTION_FRAME`**

Palette sub-result:

**`PASS_CHARACTER_REVIEW006_RIG_GRADIENT_TO_CURRENT_UC_PALETTE_DIRECTION_FRAME_BRIDGE`**

Dedicated workflow:

**`35217484004 — Technical Art Character review006 UC skin transport` — SUCCESS**.

All three jobs completed successfully:

- full Character suite — Python 3.11;
- full Character suite — Python 3.13;
- exact current-UC / external-Rigging cross-repo evidence.

Palette/frame evidence across 30 bounded side/pose/group comparisons:

- component tolerance: **`5e-6`**;
- maximum effective-gradient component delta: **`3.6292873706322837e-09`**;
- maximum inverse-transpose normal-matrix component delta: **`3.6292873706322837e-09`**;
- helper-disabled maximum gradient delta: **`0.0015838176012039184`**;
- required helper-disabled rejection threshold: **`1e-5`**;
- helper-disabled negative: **PASS_EXPECTED_REJECTION**.

The earlier position result also reproduces unchanged on current UC main:

- 184 vertices / 360 triangles;
- 5 joints / 6 TRS channels / 321 dense keys at 160 Hz;
- direct factorization maximum residual: `2.482534153247273e-16 m`;
- current-UC maximum position residual: `8.161784431363273e-08 m` under the `5e-6 m` gate;
- helper-disabled position error: `0.00011977508677082533 m`, rejected;
- GLB: **44,032 B**, SHA-256 **`76acbfca2c50151f4c801bf34910f94eea6bd6d165caeb1e344b8001a2b83a99`**.

## Truth boundary — what is now closed and what is not

Closed narrowly:

- exact bounded skin-position transport into current UC;
- exact Rigging local affine deformation-gradient transport into the current UC-exposed skin palette at `-30° / 0° / +30°`;
- exact inverse-transpose matrix agreement for that affine frame within the retained numerical gate.

Still explicitly held:

- UC has **no direct deformed vertex-normal/tangent API**;
- this affine owner-frame PASS is **not** claimed equivalent to Materials' area-weighted pose-recomputed smooth vertex normals;
- it does not resolve Materials PR #18's neutral shaded Godot mismatch by story;
- target-engine imported normal/tangent behavior is not yet compared to this oracle;
- shaded target equivalence, tangent-space normal maps, full-body quality, Runtime/device acceptance, Art Direction, independent QA, source adoption/CANON and production readiness remain unproven.

The important diagnostic consequence is now cleaner: if the next exact target-engine frame observer disagrees already at neutral, the mismatch can be localized **after** a green Rigging -> TA factorization -> UC palette chain rather than blamed on an untested producer frame.

## Retained evidence

Final exact-head artifact:

- artifact ID: **`10494684479`**;
- name: `character-review006-uc-skin-transport-c007c327f2613989581192602338435b67b748d7`;
- uploaded/archive size: **39,534 B**;
- GitHub SHA-256: **`812630c62cecfd83e5bf3db0081f91032844d1f131166ffa185b15c3ebb8a5e7`**;
- independently downloaded/rehashed SHA-256: **same exact digest**;
- retained files: **18**.

The archive retains the exact 44,032-byte GLB, position comparison, producer factorization audit, Materials-method normal reference, external Rigging owner-gradient packet, UC palette/frame comparison, exact owner/UC identity pins and final result receipt.

## Prior continuity retained

Previous Character head `1c021d40...` remains historical position-only evidence and is not silently rewritten. Object selected-roughness transport, Building source-vs-consumer indexing, and Animal normalized-weight/direction-frame history remain separately valid and were not duplicated.

## Next legitimate Technical Art receiver boundary

The next useful Character step is **not another UC feature or producer variation**. It is a bounded real target-engine direction-frame observer that compares imported target frame behavior against this exact external-Rigging / current-UC-palette oracle, beginning with the neutral baseline and then the retained `±30°` samples. Materials remains owner of final smooth-normal/shading semantics; Art/QA remain owner of perceptual acceptance.

## Four-root gate

- **Truth:** the new PASS is only affine frame transport through the UC palette; direct deformed vertex normals/tangents and target shading remain HOLD. Exact heads, blobs, numerical deltas and the negative control are retained.
- **Agency / non-domination:** Rigging keeps deformation semantics; Technical Art owns transport proof; UC stays generic; Materials keeps vertex-normal/shading meaning; Runtime keeps execution/device policy; Art/QA keep acceptance.
- **Continuity:** the existing PR #21 is advanced rather than replaced, the historical position proof remains addressable, and the fresh Rigging reference is generated from its exact owner head rather than reconstructed silently.
- **Wisdom before speed:** the smallest existing UC output (`skin_world_matrices`) was sufficient, so no speculative UC normal/tangent feature was added merely to close the cadence.

## Current state

`PASS_CHARACTER_REVIEW006_DENSE_SKIN_POSITION_AND_RIG_GRADIENT_PALETTE_TRANSPORT_TO_CURRENT_UC / CHARACTER_PR_21_HEAD_C007C327_DRAFT_MERGEABLE / ANIMATION_PARENT_9519BE55 / RIGGING_FRAME_A218B2CF_BLOB_57C43AEA / UC_FED35116_RUNTIME_BLOB_DEE5DB00_UNCHANGED / 184_VERTICES_360_TRIANGLES / 5_JOINTS_6_CHANNELS_321_KEYS_160HZ / UC_POSITION_MAX_8.1618E-08M / PALETTE_GRADIENT_MAX_3.6293E-09 / PALETTE_NORMAL_MATRIX_MAX_3.6293E-09 / HELPER_DISABLED_GRADIENT_DELTA_1.5838E-03_REJECTED / GLB_SHA_76ACBFCA_44032B / WORKFLOW_35217484004_SUCCESS / ARTIFACT_10494684479_SHA_812630C6_39534B / HOLD_DIRECT_UC_DEFORMED_NORMAL_TARGET_ENGINE_SHADED_EQUIVALENCE_RUNTIME_ART_QA_CANON_PRODUCTION / COORDINATION_ONLY`
