# 13 — Visual Observer / QA Specialist Status

Date: 2026-09-17

State: **PASS_CHARACTER_REVIEW006_CURRENT_MOTION_POSITION_CONTROL_ALIGNMENT / FAIL_CHARACTER_REVIEW006_TARGET_HOST_NEUTRAL_SHADED_DIRECTION_FRAME_BASELINE_EQUIVALENCE / BLOCKED_CHARACTER_REVIEW006_DEFORMED_DIRECTION_FRAME_INTERPRETATION__NEUTRAL_BASELINE_MISMATCH**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/13_visual_observer_qa.md`, this status, and the newest constellation owner-lane evidence before selecting one bounded visual/runtime gate.

`axm-create-me` remains **coordination only**. No Character source form, Geometry, Rigging, Animation, Materials implementation, Runtime implementation, Technical-Art transport or Universal Creation product code was changed here.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Selection / duplication scan

The previous activation closed the exact static Materials normal-response diagnostic on historical head `e450684b398f8e5b0e23c4cbf717e3475dd4d5ee` while explicitly holding current shaded motion until a direct current-chain renderer receiver existed.

That receiver now exists on Character Materials PR #18 at exact head:

`c2ae66c75abac064b679f1597b7544d058dc3ad1`

Observed PR state: **OPEN / DRAFT / UNMERGED / MERGEABLE**.

The selected claim is therefore the strongest direct continuation of the prior QA blocker rather than a duplicate lane: whether the imported current Character transport GLB in Godot 4.7.2 actually carries a usable direction frame relative to the accepted Materials pose-recomputed reference at current Animation samples `80 / 160 / 240` (`-30 / 0 / +30°`).

Other current owner work was not duplicated. Rigging now has an affine deformation-gradient oracle, Technical Art has a current UC palette bridge, Animation has the current diagnostic clip, and Runtime has normal-array preparation evidence. None of those independently supplies the missing direct target-host shaded comparison.

## Exact evidence identity

Repository: `mike-axiom-mir/axm-character-design`

Materials PR: **#18 — `Materials: prove review006 shaded direction-frame response`**

Exact head: `c2ae66c75abac064b679f1597b7544d058dc3ad1`

Bound lineage in this receiver:

- Technical Art: `1c021d40d7d606f6fb2a29e69f9353640aa33f60`;
- Animation: `9519be55581c009fd800d175677d9b50ee6926e6`;
- Rigging: `fa16c44b1a488d43842470fc9f30c5fb5e98cab6`;
- static Materials reference: `e450684b398f8e5b0e23c4cbf717e3475dd4d5ee`;
- Materials normal-method blob: `843c0e1866172dd8b6c5ab0f23d69d1e469562f7`.

Retained workflow artifact:

- artifact ID `10495430458`;
- owner / independent QA SHA-256 `e2a2781710fa41794ad0272e32838339eb850764c36ed9ed5b5d527969d7058e`;
- 45 real Godot comparison PNGs plus payload, exact generated GLB, observer and runtime receipt;
- Godot `4.7.2`, GL Compatibility / X11 / Mesa llvmpipe;
- frame size `900 x 700`.

## Independent reproduction

QA downloaded the exact artifact, rehashed it, recomputed the retained PNG comparisons, decoded the generated GLB accessors, and inspected the exact observer rather than inheriting the owner conclusion.

### PASS — current-motion position control alignment

**`PASS_CHARACTER_REVIEW006_CURRENT_MOTION_POSITION_CONTROL_ALIGNMENT`**

Across all `9` sample/context target-vs-owner **unshaded** comparisons, coverage XOR is only `0..4` pixels per 630,000-pixel frame. At neutral `0°` specifically:

- front: `4 / 33,640` foreground pixels differ in coverage;
- three-quarter: `2 / 29,597`;
- grazing: `0 / 17,641`.

No broad placement, silhouette or geometry-coverage failure was reproduced in the current receiver.

### FAIL — neutral shaded direction-frame baseline equivalence

**`FAIL_CHARACTER_REVIEW006_TARGET_HOST_NEUTRAL_SHADED_DIRECTION_FRAME_BASELINE_EQUIVALENCE`**

At exact sample `160 / 1.0 s / 0°`, pose-recomputed and frozen-neutral references are identical by construction, so the imported target has no legitimate deformation-specific ambiguity to hide behind. Nevertheless, imported target vs exact neutral reference changes more than 1 LSB on:

- front: `33,065 / 33,640` foreground pixels = `98.29%`, masked mean absolute RGB-channel delta `0.324140`;
- three-quarter: `28,767 / 29,597` = `97.20%`, mean `0.290890`;
- grazing: `15,990 / 17,641` = `90.64%`, mean `0.138483`.

Direct retained-frame inspection shows a large lighting/normal-response mismatch, not a threshold-only numerical effect.

### Source-side identity audit

The generated target GLB itself does **not** contain a different neutral geometry/normal payload:

- neutral POSITION accessor vs exact reference maximum component delta: `5.644e-08`;
- neutral NORMAL accessor vs exact reference maximum component delta: `2.947e-08`;
- maximum neutral normal angular delta: approximately `1.708e-06°`;
- triangle indices: exact;
- sample-160 distal/helper rotations: identity;
- sample-160 helper scales: `[1,1,1]`.

The Materials observer also applies the same neutral material override, camera and lighting policy to target and reference.

Therefore QA can localize the mismatch to **at or after the target-host imported skin / direction-frame / render path**, rather than to different packed neutral normal bytes, changed source geometry, or an intentional Materials scalar retune. The exact internal cause is not yet proven. Coordinate/frame adaptation, imported skin-normal handling, or another target-host transform remain diagnostic candidates only.

## BLOCKED — deformed direction-frame interpretation

**`BLOCKED_CHARACTER_REVIEW006_DEFORMED_DIRECTION_FRAME_INTERPRETATION__NEUTRAL_BASELINE_MISMATCH`**

At the deformed `-30 / +30°` samples, the owner diagnostic produces a `4/6` closer-to-pose-recomputed versus `2/6` closer-to-frozen split. QA does **not** promote that vote because the neutral baseline is already severely misaligned and the neutral mismatch is much larger than the intended pose-vs-frozen signal.

The next useful owner-lane proof is to isolate the target-host neutral frame while keeping source form, Geometry, Rigging, Animation, material scalars, lights/cameras and UC product code frozen. Only after neutral equivalence is restored or precisely explained should the deformed closeness vote be interpreted.

## Broader shaded-motion gate

Final Character shaded-motion visual adoption remains blocked. Still unproven:

1. the exact cause and repair of the neutral imported target-host direction-frame mismatch;
2. correct deformed normals/tangents through the actual target-engine skin path;
3. tangent-space detail / normal-map behavior;
4. full-body shaded motion and volume/silhouette behavior;
5. target-device Runtime/controller/performance behavior;
6. final Art Direction acceptance;
7. CANON / production readiness.

The prior structural Character boundary also remains unchanged: the independently reproduced nonadjacent shoulder intersection outside the safe envelope is still real and is not waived by this shaded receiver.

## Handoff

Independent QA was returned to Character Materials PR #18 on exact head `c2ae66c75abac064b679f1597b7544d058dc3ad1` as review **`5235267179`**.

No repair was authored in the owner repo from the QA lane. No source mutation, Geometry rewrite, Rigging retune, Animation retime, Materials retune, Runtime rewrite, Technical-Art factorization change or UC product edit was requested.

## Explicit non-claims

This activation does **not** establish the precise internal root cause of the neutral target-host mismatch; production normals/tangents; tangent-space correctness; production skin/material quality; full-body Character quality; target-device performance; gameplay suitability; Art Direction final acceptance; source adoption; CANON; game readiness; production readiness; or Visual Observer / QA mastery.

## Four-root gate

- **Truth:** the current exact head/artifact are pinned and independently rehashed; the neutral FAIL is supported by real retained renderer frames plus direct GLB accessor inspection; the internal cause remains explicitly unclaimed.
- **Agency / non-domination:** Materials owns the receiver, Rigging owns deformation, Animation owns timing, Technical Art owns transport, Runtime owns runtime behavior, Art owns visual preference, and QA only reports the evidence boundary.
- **Continuity:** the earlier static Materials PASS, the structural outside-envelope FAIL, and the new current-head neutral target-host FAIL remain separately named rather than silently rewriting one another.
- **Wisdom before speed:** no speculative retune is requested. Neutral baseline equivalence is isolated first because interpreting deformed shading before that would convert an obvious confound into story.

The four AXM roots remain the merge gate.
