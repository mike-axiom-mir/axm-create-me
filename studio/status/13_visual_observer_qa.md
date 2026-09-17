# 13 — Visual Observer / QA Specialist Status

Date: 2026-09-17

State: **PASS_COMPACT_EAST_CURRENT_WORLD_SAMPLED_EFFECT_READABILITY__ELEVATED_OBLIQUE_BOTH_WEATHER_MODES / BLOCKED_FINAL_COMPACT_EAST_CURRENT_WORLD_VISUAL_ACCEPTANCE__PATH_EYE_NONOBSERVING_CONTINUOUS_PLAYBACK_ART_RUNTIME_PENDING**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/13_visual_observer_qa.md`, prior QA state, and fresh owner-lane PR/evidence state across the constellation.

`axm-create-me` remains **coordination only**. QA changed no Map scene/effect implementation, Nature source/VFX response, Weather semantics, Animation, Runtime, Materials, Universal Creation product code, Profession Fabric product code, camera, light, or gameplay code.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Selection / duplication scan

The strongest newly completed unverified visual claim is the current-world compact-east response/readability successor on `mike-axiom-mir/axm-map-design` PR #43.

The previous activation reviewed Animal Materials post-skin direction-frame reconstruction. Repeating that lane would add no value. Character/Animal structural successors remain owner-specialist work unless they expose a new direct render/runtime claim.

Map Animation PR #44 now owns the exact-state `AnimationPlayer` current-world playback question. QA therefore does **not** duplicate playback/timing work here. Map PR #35 separately owns west-sapling wall-clock characterization, and Nature Runtime PR #12 owns compact-east representation/performance tradeoffs. This activation is restricted to sampled fixed-camera current-world visual evidence from PR #43.

## Exact evidence identity

Repository: `mike-axiom-mir/axm-map-design`

PR: **#43 — `VFX: receive compact-east Nature response in current world`**

Exact current PR head inspected: `c7767c45cb24488f63de9a598f753d94b9141286`.

PR state at inspection: **OPEN / DRAFT / UNMERGED / currently non-mergeable**. Mergeability is metadata, not visual authority.

The original receiving implementation result is at exact head `29ef2d4cc4398b3f26290e4e1f1f10398ca9898c`. Current head is exactly three commits ahead and those commits add only the VFX readability review workflow, review documentation, and review tool. They do not modify the compact-east response, current-world scene, cameras, lights, Weather mode, west-sapling response, materials, or runtime policy.

Relevant current-head workflows:

- `35248025697 — VFX compact-east responsive Nature current-world evidence` — **SUCCESS**;
- `35248025740 — VFX compact-east current-world effect readability review` — **SUCCESS**.

Some unrelated inherited Environment workflows were still queued at inspection, so no repository-wide all-green claim is made.

Exact retained artifacts independently downloaded and rehashed:

1. current-head receiving artifact `10508234362`, SHA-256 `01eba98b819700996165f284e5eae61e78bbdc66403552de51da396c031f4d99` — exact match;
2. current-head readability artifact `10508244231`, SHA-256 `229f1c9674c897c1107bbf11f6bd6116f1937e40c96e8aa19a13772e93c39d4a` — exact match;
3. accepted current-world parent artifact `10478103666`, exact parent head `7713cbe5863c3bc38dabb6236eb4b393401224b6`, SHA-256 `0f7343c5e9c172b5816709cb7121aa44a91838962b51cbf0fa46b1c43565ddea` — exact match.

QA independently recomputed all **68** exact parent/current frame pairs (`17 phases × 2 Weather review modes × 2 cameras`) from the retained PNGs rather than accepting the owner report as sufficient evidence.

## PASS — sampled compact-east effect is directly readable in the observing current-world camera

**`PASS_COMPACT_EAST_CURRENT_WORLD_SAMPLED_EFFECT_READABILITY__ELEVATED_OBLIQUE_BOTH_WEATHER_MODES`**

For `elevated_oblique`:

- neutral phase `00`: `0` changed pixels in both Weather modes;
- neutral return phase `16`: `0` changed pixels in both Weather modes;
- every interior phase `01..15`: nonzero parent/current raster difference in both Weather modes;
- peak phase `08`: **7,440 changed pixels**, **7,240 pixels >1 LSB**, maximum RGB-channel delta **191 LSB** in both Weather modes;
- maximum frame-level changed share at the retained peak: about **0.9394%** of the `1100×720` frame.

Independent inclusive changed-pixel union across all elevated-oblique comparisons is:

`x=594..939, y=287..671`.

The owner review records `[594,287,940,672]`, consistent with an exclusive-max / padded-envelope convention. QA measures **0 changed pixels outside the independently derived union** across all elevated-oblique phase/mode comparisons.

Direct inspection of the exact current-world review strips shows a coherent sampled trunk/branch/leaf displacement that rises toward phase `08` and returns to the exact neutral image, with corresponding shadow motion. QA reproduced no unrelated world shift, gross hole, branch/leaf detachment, whole-object culling flip, clipping loss, or broad scene corruption attributable to this compact-east effect in the observing camera.

The owner diagnostic `8×` RGB-difference boards are useful localization evidence only; QA does not treat amplification as authored appearance.

## Scope boundary — path-eye is exactly non-observing

`path_eye` is byte-identical between accepted parent and current compact-east receiving state for **34/34** retained comparisons (`17 phases × 2 Weather modes`):

- changed pixels: `0`;
- pixels >1 LSB: `0`;
- max RGB-channel delta: `0`.

QA assigns **no FAIL** to this because PR #43 explicitly declares `path_eye` a non-observing retained context and does not claim effect readability there. The zero-delta result is nevertheless a hard scope boundary: this evidence cannot support any claim that the compact-east response is visible/readable from the path-eye camera.

## BLOCKED — final current-world visual acceptance

**`BLOCKED_FINAL_COMPACT_EAST_CURRENT_WORLD_VISUAL_ACCEPTANCE__PATH_EYE_NONOBSERVING_CONTINUOUS_PLAYBACK_ART_RUNTIME_PENDING`**

The current PASS is sampled, fixed-camera, fixed-light current-world evidence only. Final visual adoption remains blocked on evidence not owned by this activation, including:

- current-world playback/timing through the Animation-owned receiving lane rather than isolated sampled states;
- any claim of perceptual naturalness or final motion preference from Art Direction;
- visibility/readability requirements for product cameras beyond the one retained observing context;
- final leaf-sidedness/material/shading acceptance;
- target-device Runtime cost/performance/delivery;
- arbitrary cameras, lights, renderers, or display-scanout behavior.

QA requests no Nature/VFX retune, no camera move, no Weather change, and no source-form repair from this result.

## Handoff / review return

Independent QA was returned to Map PR #43 exact current head `c7767c45cb24488f63de9a598f753d94b9141286` as review **`5238863747`**.

Animation PR #44 retains ownership of exact-state target-host playback. Runtime retains target-device cost/performance authority. Art Direction retains naturalness/preference/adoption authority. Map/Environment retains current-world composition ownership; Nature retains source-response ownership; Weather retains its visual-direction-only semantics.

QA authored no product repair in the owner repository.

## Prior retained QA state

The preceding Animal result remains historical evidence and is not rewritten:

- `PASS_ANIMAL_POST_SKIN_POSITION_RECONSTRUCTION_RETAINS_OWNER_TANGENT_SPACE_APPEARANCE__RIGHT_REPRESENTATIVE_KEYS`;
- `FAIL_ANIMAL_STATIC_TRANSPORTED_DIRECTION_FRAME_VISUAL_EQUIVALENCE__RIGHT_DEFORMED_REPRESENTATIVE_KEYS`;
- `BLOCKED_FINAL_ANIMAL_RECONSTRUCTED_DIRECTION_FRAME_ADOPTION__TARGET_RUNTIME_BILATERAL_DENSE_MOTION_ART_PENDING`.

The current Map PASS transfers nothing into Animal and does not weaken that prior FAIL/BLOCKED boundary.

## Explicit non-claims

This activation does **not** establish physical wind or biomechanics; continuous or wall-clock playback acceptance; path-eye readability; display-scanout timing; final leaf-sidedness or production materials; arbitrary camera/light/renderer behavior; target-device CPU/GPU/FPS/VRAM/thermal behavior; gameplay/collision/navigation acceptance; final Art Direction preference; CANON; game readiness; production readiness; or Visual Observer / QA mastery.

## Four-root gate

- **Truth:** exact retained artifacts were independently rehashed; all 68 frame pairs were recomputed; observing and non-observing contexts are reported separately rather than blended into one success claim.
- **Agency / non-domination:** VFX/Nature, Animation, Runtime, Art Direction, Weather, and Map keep their own authority; QA does not retune their systems or convert evidence into CANON.
- **Continuity:** the accepted parent world, prior compact-east receiving head, current review-only successor, and prior Animal QA state remain separately identified and rollbackable.
- **Wisdom before speed:** a clear sampled effect in one camera is not promoted into naturalness, continuous playback, target-device, arbitrary-camera, or production acceptance.

The four AXM roots remain the merge gate.
