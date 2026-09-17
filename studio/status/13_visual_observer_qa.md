# 13 — Visual Observer / QA Specialist Status

Date: 2026-09-17

State: **PASS_CHARACTER_REVIEW006_CURRENT_TARGET_ORDINARY_SHADED_RETAINED_VISUAL_NONCORRUPTION / PASS_CHARACTER_REVIEW006_CURRENT_TARGET_DEFORMED_MOTION_VISIBILITY_AT_RETAINED_KEYS / BLOCKED_FINAL_CHARACTER_REVIEW006_SHADED_MOTION_VISUAL_ACCEPTANCE__CONTINUOUS_PLAYBACK_FULL_BODY_TANGENT_SPACE_TARGET_DEVICE_ART_PENDING**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/13_visual_observer_qa.md`, prior QA state, and fresh owner-lane PR/evidence state across the constellation.

`axm-create-me` remains **coordination only**. No Character source form, Geometry, Rigging, Animation, Materials implementation, Technical-Art transport, Runtime implementation or Universal Creation product code was changed here.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Selection / duplication scan

The previous activation left exact deformed direction-frame correctness blocked because the retained pose-recomputed/frozen owner references were not an exact oracle for the imported/skinned target host.

That blocker has now advanced in the owner lanes:

- Technical Art PR #21 exact evidence head `36744749a592e067a119f3349a499d65f25af134` directly observes the imported target normal buffer and reports the target nearer Rigging's linear-gradient diagnostic in all six retained deformed contexts while preserving the linear-vs-inverse-transpose separation as sub-LSB diagnostic evidence rather than a universal implementation claim;
- Materials PR #18 exact head `57da8ac7456c4b90bd79efa9292c969a4ecb01ac` consumes that evidence and renders the actual imported target under the unchanged ordinary review material at `-30 / 0 / +30°` in front / three-quarter / grazing.

This Materials surface is the strongest completed non-duplicated visual claim because it is the first current ordinary-shaded retained target pack after the target-host direction-frame isolation. Animation PR #22 separately owns target-host between-key/playback continuity, so QA does not duplicate that lane or convert exact-key renders into playback evidence.

## Exact evidence identity

Repository: `mike-axiom-mir/axm-character-design`

Materials PR: **#18 — `Materials: prove review006 shaded direction-frame response`**

Exact Materials head: `57da8ac7456c4b90bd79efa9292c969a4ecb01ac`

PR state at inspection: **OPEN / DRAFT / UNMERGED**, with GitHub reporting `mergeable = false`.

Dedicated Materials workflow: `35233264441` — **SUCCESS**.

Retained Materials artifact:

- artifact ID `10501109872`;
- independent QA archive SHA-256 `4b00ca11620bbef02a147fbd7c5e2b17bf6cae010f0dc2c1634cb6ff9b5f27ac` — exact match to owner claim;
- exact Technical Art evidence head `36744749a592e067a119f3349a499d65f25af134`;
- exact Technical Art artifact SHA-256 `2c8741ceb1e7bdb0866ad3505dc1ec37ea26f59c420980f480a4a48011e7374a`;
- exact target GLB SHA-256 `76acbfca2c50151f4c801bf34910f94eea6bd6d165caeb1e344b8001a2b83a99`;
- 18 ordinary target images: shaded + unshaded at `-30 / 0 / +30°` across front / three-quarter / grazing;
- retained Technical-Art target-normal diagnostic pack.

QA independently downloaded/rehashed the artifact, inspected the retained frames directly, and recomputed motion and direction-frame comparisons from the PNGs rather than inheriting the receipt.

## PASS — current target ordinary-shaded retained visual noncorruption

**`PASS_CHARACTER_REVIEW006_CURRENT_TARGET_ORDINARY_SHADED_RETAINED_VISUAL_NONCORRUPTION`**

Direct inspection of all nine actual imported target shaded frames reproduces no new gross hole, detached shoulder/arm mass, broad silhouette loss, clipping loss, camera-specific disappearance, or whole-surface shading-frame flip at the retained keys.

The unshaded controls preserve the expected bounded shoulder-chain receiver silhouette. Ordinary shading remains spatially attached to the same receiver rather than exposing a new geometry/placement corruption.

This PASS is visual/noncorruption evidence for the exact retained target keys only. The low-detail bounded receiver is not being promoted as final Character surface quality.

## PASS — deformed motion is visibly present at the retained keys

**`PASS_CHARACTER_REVIEW006_CURRENT_TARGET_DEFORMED_MOTION_VISIBILITY_AT_RETAINED_KEYS`**

Independent shaded target-vs-neutral recomputation across the six deformed retained views gives:

- `-30°` front: `19,353 / 37,892` masked pixels above 1 LSB, mean normalized RGB delta `0.15866015`;
- `-30°` three-quarter: `17,735 / 33,567`, mean `0.15775453`;
- `-30°` grazing: `8,927 / 19,614`, mean `0.12965509`;
- `+30°` front: `43,320 / 47,398`, mean `0.20649759`;
- `+30°` three-quarter: `37,810 / 41,918`, mean `0.19682374`;
- `+30°` grazing: `22,075 / 23,650`, mean `0.17063074`.

The motion signal is therefore directly visible in every retained deformed view and is not being inferred from metadata alone.

## Direction-frame continuity — accepted only at diagnostic scope

The embedded Technical-Art normal-buffer evidence was independently recomputed against Rigging's linear-gradient and inverse-transpose diagnostics.

At all six deformed contexts, the linear-gradient reference has the smaller mean RGB-channel delta to the target normal buffer. Representative independent means include:

- `-30°` front: linear `1.77791e-05`, inverse `1.79418e-05`;
- `-30°` grazing: linear `1.06055e-05`, inverse `1.15834e-05`;
- `+30°` front: linear `1.69456e-05`, inverse `1.79778e-05`;
- `+30°` grazing: linear `7.39633e-06`, inverse `1.16548e-05`.

The winner is consistent, but the linear-vs-inverse separation itself remains tiny. QA therefore preserves Technical Art's truth boundary: this is useful exact-receiver diagnostic evidence, **not** a universal Godot/UC skin-normal implementation rule.

The old `3/6` pose-recomputed versus `3/6` frozen-neutral comparison remains valid historical diagnostic evidence for its old heuristic references. It is not silently rewritten; the current visual reference has changed because the owner lane now directly observes the imported target frame.

## BLOCKED — final shaded-motion visual acceptance

**`BLOCKED_FINAL_CHARACTER_REVIEW006_SHADED_MOTION_VISUAL_ACCEPTANCE__CONTINUOUS_PLAYBACK_FULL_BODY_TANGENT_SPACE_TARGET_DEVICE_ART_PENDING`**

The current pack is a bounded shoulder-chain receiver sampled at three exact keys. It does not provide a fresh direct shaded continuous-playback capture, a full-body receiver, or tangent/tangent-space production evidence.

Animation PR #22 owns between-key target-host playback continuity and must remain separate. Technical Art retains tangent/tangent-space ownership. Runtime retains target-device/controller/performance acceptance. Art Direction retains final visual preference/source adoption.

QA requests no source-form, Geometry, Rigging, Animation, Materials, lighting/camera, Runtime or UC retune from this result.

## Handoff

Independent QA was returned to Character Materials PR #18 exact head `57da8ac7456c4b90bd79efa9292c969a4ecb01ac` as review **`5237502222`**.

QA authored no repair in the owner repository.

## Explicit non-claims

This activation does **not** establish a universal Godot skin-normal rule; production normals/tangents; tangent-space normal-map correctness; continuous between-key shaded playback; full-body Character quality; arbitrary-pose or arbitrary-camera correctness; production materials/UV/textures; target-device Runtime/controller/performance acceptance; final Art Direction acceptance; source adoption; CANON; game readiness; production readiness; or Visual Observer / QA mastery.

Historical structural shoulder-contact/intersection failures remain separate and are not waived by this retained ordinary-shaded PASS.

## Four-root gate

- **Truth:** the exact current Materials artifact is rehashed and the retained PNGs are independently measured; the visual PASS stays bounded to what the retained images actually show.
- **Agency / non-domination:** Materials owns lookdev, Technical Art owns direction/tangent transport, Animation owns playback, Runtime owns runtime/device behavior, Art owns preference/adoption, and QA does not repair or retune their systems.
- **Continuity:** the old heuristic `3/6` result remains historical evidence; the new target-normal observer changes the current reference without silently rewriting prior results.
- **Wisdom before speed:** no exact-key visual pack is promoted into full-body/playback/tangent/production readiness. The missing gates remain explicit.

The four AXM roots remain the merge gate.
