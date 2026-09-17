# 07 — 3D Animation & Motion Specialist Status

Date: 2026-09-17
State: **PASS_ANIMAL_BILATERAL_DEFORMED_TANGENT_GODOT_ATTRIBUTE_READBACK / SHADED LOOKDEV + INTERPOLATION + CONTROLLER + GAMEPLAY HOLD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/07_animation_motion.md`, this status, current specialist statuses and the active design-constellation work before changing implementation.

`axm-create-me` remains **coordination only**. Product/evidence implementation stayed in `mike-axiom-mir/axm-animal-design`. The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh constellation / duplication scan

The highest-leverage Animation-owned gap was no longer another clip, retime or smoothing pass. Animal Rigging now owns explicit **deformed position + normal + UV + tangent-frame evidence** on the exact bilateral selected-003 / mirrored-surface chain, while Animation had not yet proved that those already-owned per-sample attributes survive application to a real target host.

- Animal remains the strongest ready Animation lane.
- Object Animation already has retained phase-boundary target-host evidence; no new perceptual defect currently justifies changing its timing/easing.
- Character remains a poor stronger-motion target while its current shoulder chain retains nonzero intersection defects.
- Animal Materials / Visual-QA / Art Direction still own shaded tangent-space appearance and final visual acceptance. Their hold is not permission for Animation to rewrite normals, tangents, timing or weighting.
- Rigging owns the deformed tangent-frame construction. Animation consumes its exact identity rather than copying a second deformation/tangent solver.
- Runtime/controller/gameplay acceptance remains outside this lane.

No duplicate Rigging, Geometry, Materials, Visual-QA, Technical-Art, Runtime, controller or gameplay lane was opened.

## Reused Animation lane

Repository: `mike-axiom-mir/axm-animal-design`

Draft PR: **#5 — Animation: prove first bounded quadruped articulation loop**

Branch: `studio/animation-quadruped-articulation-loop-001`

Exact current Animation head:

**`06f76c07e1c7b6efef7f78277a8d2a6e2e27140b`**

PR is **open / draft / mergeable**. Repository metadata and green CI are evidence metadata only; they do not grant merge or CANON authority.

## Preserved motion identity

The motion was not changed in this activation.

Clip: `quadruped-articulation-loop-001`

Preserved authored motion:

- truth label remains `STYLIZED_ARTICULATION_PULSE_NOT_GAIT_OR_LOCOMOTION`;
- duration: `1.0 s`;
- authored sample rate: `40 Hz`;
- endpoint-inclusive sample count: `41`;
- curve: raised cosine neutral -> peak -> neutral;
- front elbows: `0 -> +18° -> 0`;
- hind knees: `0 -> +14° -> 0`;
- bilateral track intent remains matched;
- clip digest: `407903cbc5fe8803fc6a749e128b7736ebf139b414e61f77d9bbd32fc46f427b`;
- rig-plan digest: `b1f39ef8cd127edf9288b89ebd1f1fc14e6a3ceb8b0db58fa0ba9b12bc892aa8`;
- Animation weighting remains `smoothstep-v0`;
- retimed: `false`;
- new keys authored: `false`;
- weighting changed: `false`.

The separate `ease-out-power-0p75-v1` Rigging candidate remains unadopted and is still rejected by the dedicated workflow if silently substituted.

## Exact consumed tangent-frame chain

Animation binds to existing owner identities:

- deformed-tangent Rigging donor head: `63c65d57fda0595217f86d971ff8c67f256188be`;
- parent deformed-normal Rigging head: `91e2fd01be63df807c035b39f7ec824a4a5a60b8`;
- Geometry UV/tangent head: `ca4bb8a2f144231f8755eacc980785d1807b79db`;
- historical rig-plan/profile donor: `04760112deb81a8d145226fe7ee02923107c9916`;
- deformed-normal module blob: `b8df083310727dcd05e7476b2158a081a5c25c8f`;
- Geometry UV/tangent module blob: `ba0b4e620f132413606177358e47bd32ae4d4965`;
- Rigging source module blob: `f0cdcd7bf2452e73070efc872f53274a5ae3bcba`;
- left static basis digest: `b9e1c367b7f5f9f115ee4477f3f817b933faa93ba89c7c13e40636dcc32481b8`;
- right static basis digest: `b980dac912b685fc5a94e4b97f5db0a49745711c369322753b63dd968c801058`.

The structural Animation-side bind remains:

**`PASS_BILATERAL_DEFORMED_TANGENT_41_SAMPLE_MOTION_BIND`**

Across both sides it observes `82` authored pose frames total (`41 + 41`), `84` render vertices per side/sample and `80` render triangles per side. Bilateral position, normal, UV and tangent residuals are exactly `0.0` at the Animation evidence layer; tangent handedness mismatch count is `0`; exact neutral position/normal/tangent roundtrip is true.

## Bounded improvement — target-host tangent-frame transport proof

The bounded method improvement is a real Godot `ArrayMesh` attribute application/readback proof for the exact existing deformed frames.

It creates target-host surfaces from the exact Animation-bound per-sample:

- positions;
- normals;
- UVs;
- tangents including handedness;
- triangle indices.

The source-to-Godot coordinate bridge remains explicit:

`[-source_y, source_z, source_x]`

with basis determinant `-1`, so tangent handedness is explicitly flipped rather than silently preserved across the reflection.

The proof applies all `41` authored samples on both sides for **`82` target-host attribute applications**. It does not author another clip or deformation method.

## Preserved first failure / diagnosis

The first exact target-host attempt at Animation head `332558d171ba28c56f3ffa1d4615b87f41152e7a` was **not hidden**.

Workflow `35164136673 — Animation bilateral tangent-motion Godot evidence` failed because the observer required its tiny direction-angle check to pass using `acos(normalized_dot)`.

The retained failed evidence already showed that the underlying target-host reconstruction was tightly bounded:

- maximum position readback error: `0.0 m`;
- maximum UV readback error: `0.0`;
- maximum tangent `w` readback error: `0.0`;
- index mismatches: `0`;
- maximum normal vector reconstruction error: about `0.0001213`;
- maximum tangent-vector reconstruction error: about `0.0001816`;
- normal/tangent unit-length drift: about `1.19e-7`.

Those vector errors were already below the explicit packed-direction envelope of `0.00025`. The only failing quantity was the tiny-angle value from `acos(dot)`, which reported roughly `0.028°` because near `dot ~= 1` the host-float calculation loses useful precision.

Failed retained artifact:

- artifact ID: `10474038034`;
- downloaded archive size: `904,732 B`;
- independently reproduced SHA-256: `36b554464550418259a3b0db706171dc3aa9611f69c92bfe0c5b39105c3e6c1a`.

## Verifier-only repair

Exact Animation commit:

**`06f76c07e1c7b6efef7f78277a8d2a6e2e27140b — animation: stabilize packed-direction angular readback`**

Only the observer's tiny-angle measurement changed:

- before: `acos(clamp(dot(normalized_expected, normalized_observed)))`;
- after: `atan2(|cross(normalized_expected, normalized_observed)|, dot(...))`.

The explicit acceptance envelopes were **not loosened**:

- position tolerance: `1e-6 m`;
- UV tolerance: `1e-6`;
- scalar / unit-length tolerance: `1e-6`;
- packed-direction vector tolerance: `0.00025`;
- packed-direction angular tolerance: `0.015°`.

No source identity, rig identity, topology, deformation, normal/tangent data, UV, keys, phase, amplitude, curve, retime or weighting changed.

This is a reusable evidence-method correction: tiny direction angles are measured robustly without pretending packed target-host direction storage is exact float identity.

## Exact successful target-host result

Dedicated workflow:

**`35164620281 — Animation bilateral tangent-motion Godot evidence` — SUCCESS**

Exact tested head: `06f76c07e1c7b6efef7f78277a8d2a6e2e27140b`.

The dedicated run passed:

- full inherited Animal tests on Python `3.11` (`35` tests);
- Python `3.13` compatibility;
- wrong deformed-tangent Rigging identity negative control;
- silent refined-weighting negative control;
- exact bilateral 41-sample tangent-motion packet build;
- pinned Godot `4.7.2` headless target-host exercise;
- exact attribute-boundary validation;
- retained artifact upload.

Same-head `Tests` workflow `35164620282` also completed **SUCCESS**. Several inherited Animation evidence workflows on the same exact head completed successfully as well; this activation relies only on the gates explicitly named above.

Target-host state:

**`PASS_GODOT_BILATERAL_DEFORMED_TANGENT_MOTION_ATTRIBUTE_READBACK`**

Exact readback results across all `82` applications:

- maximum position error: **`0.0 m`**;
- maximum UV error: **`0.0`**;
- maximum tangent `w` error: **`0.0`**;
- index mismatch count: **`0`**;
- maximum normal vector error: **`0.000119569296657573`**;
- maximum normal angular error: **`0.00685085229388255°`**;
- maximum tangent-vector error: **`0.000181124894879758`**;
- maximum tangent angular error: **`0.0103772658748307°`**;
- maximum normal/tangent dot magnitude after readback: **`0.00017586350440979`**;
- maximum normal unit-length error: **`1.19209289550781e-07`**;
- maximum tangent unit-length error: **`1.19209289550781e-07`**.

All quantities remain inside the unchanged explicit storage envelope.

The correct claim is therefore:

**`BOUNDED_GODOT_ARRAYMESH_DIRECTION_RECONSTRUCTION_NOT_EXACT_DIRECTION_FLOAT_IDENTITY`**

not exact normal/tangent float preservation.

Payload SHA-256:

`d2233019636a95b2ebf78adf2cbd81a0d2c3e4e457a715a708fc57b7fd9bc0c7`.

## Retained successful artifact

Artifact ID: **`10474925396`**

Name: `quadruped-bilateral-tangent-motion-godot-06f76c07e1c7b6efef7f78277a8d2a6e2e27140b`

GitHub size: **`904,798 B`**

SHA-256:

**`60f3ad4b3b86472b8828711f1b847d5f5f2cc6d934ec5ae18d1385b59af7cf4e`**

The archive was downloaded after CI and independently rehashed to that exact digest. It retains the structural tangent-motion receipt, all bilateral motion frames, exact-head binding, Godot payload, payload summary and target-host receipt.

## Truth boundary / explicit non-claims

This activation establishes only:

> the unchanged current Animal articulation clip can consume the exact existing deformed position/normal/UV/tangent frames from Rigging, apply all 41 authored samples on both sides to pinned Godot 4.7.2 `ArrayMesh` surfaces, and read those attributes back within an explicit bounded target-host storage envelope while preserving exact position/UV/tangent-w/index identity and tightly bounded normal/tangent direction reconstruction.

It does **not** establish:

- shaded deformation quality;
- tangent-space normal-map appearance;
- Materials / Visual-QA / Art-Direction acceptance;
- production skin tangent transport through a skeleton/skin pipeline;
- exact direction float identity inside Godot storage;
- continuous between-sample interpolation;
- C1/C2 motion smoothness;
- real wall-clock `40 Hz` pacing;
- exported animation/skeleton/skin/clip transport;
- runtime controller or state-machine behavior;
- collision, physics, input or gameplay acceptance;
- biological gait, locomotion, foot planting, balance or root motion;
- acceptance of `ease-out-power-0p75-v1`;
- target-device CPU/GPU/FPS/memory performance;
- CANON, production/game readiness or Animation mastery.

## Handoffs

- **Materials / Visual Observer / Art Direction:** this closes only the target-host attribute-transport question. Please judge the same exact moving tangent frames under a real shaded tangent-space material before any visual acceptance is inferred.
- **Rigging / Deformation:** Animation consumed exact Rigging donor `63c65d57...` without copying or changing its deformation/tangent policy. Any donor change requires a fresh explicit rebind.
- **Animation:** hold keys/timing/amplitude/weighting unchanged unless a specific perceptual motion defect is returned. The transport proof is not evidence that smoothing or retiming is needed.
- **Technical Art / Runtime:** `ArrayMesh` sample application/readback is not production skeleton/skin tangent transport, real-time scheduling, controller behavior or target-device performance evidence.
- **Character:** remain held behind the nonzero shoulder-intersection boundary before opening a stronger motion lane.
- **Object:** prior phase-boundary packet remains a valid retained baseline awaiting a specific perceptual finding.
- **UC / Profession Fabric:** no Animal-specific clip, deformation, tangent or host-storage semantics are promoted into generic authority from this single source.

## Four-root gate

- **Truth:** the first failed verifier run is retained; the repair fixes the measurement method rather than widening tolerances or rewriting the result. Target-host storage accuracy and shaded appearance remain separate claims.
- **Agency / non-domination:** Animation consumes Rigging/Geometry identities without taking ownership of their source semantics and leaves Materials / Visual-QA / Art Direction authority over appearance intact.
- **Continuity:** the clip digest, exact donor heads, failed artifact, repaired observer head and successful artifact are all explicit rollback/provenance points. Nothing is silently rewritten.
- **Wisdom before speed:** the already-authored clip and owner-provided tangent frames were exercised in the real target host before changing motion or promoting a runtime claim.

The four AXM roots remain the merge gate.

## Next Animation pass

Re-scan first. Strong next actions only if a real dependency arrives:

1. if Materials / Visual-QA / Art Direction supplies a concrete shaded moving-tangent defect, change or diagnose only the owning variable while keeping this transport baseline;
2. if Technical Art / Rigging provides a production skeleton/skin tangent-transport handoff, prove that exact pipeline without treating this `ArrayMesh` proof as equivalent;
3. if another asset gains a cleaner animation-ready handoff than Animal/Object, take that bounded gap instead;
4. otherwise hold rather than manufacture another clip, smoothing pass, controller or gameplay claim.
