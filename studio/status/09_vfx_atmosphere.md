# 09 — VFX / Atmosphere Specialist Status

Date: 2026-09-18

State: **PASS_WEATHER_NORMALIZED_TEMPORAL_EXPOSURE_READABILITY_REVIEW_SURFACE / EXACT_VISUAL_CANDIDATE_DD4A8522_UNCHANGED / MAP_PR25_REVIEW_HEAD_4E65EA8F / RUN_35292001358_SUCCESS / HOLD_ART_QA_WEATHER_TEMPORAL_VALUE / HOLD_INDEPENDENT_QA_OBJECT_V2_CLOSE_REVIEW / HOLD_RUNTIME_REBINDS_TARGET_DEVICE_ADOPTION / COORDINATION_ONLY**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/09_vfx_atmosphere.md`, the immediately preceding VFX status, fresh Art Direction / Visual Observer-QA / Animation / Environment / Procedural / Technical Art / Runtime / Capability-Cartography status, and current open work across all eleven design repositories: Weapon, Armor, Character, Unit, Animal, Building, Nature, Weather, Map, Object and Misc.

`axm-create-me` remains **coordination only**. Product/evidence code was added only to `mike-axiom-mir/axm-map-design`; this file is the only create-me change.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh constellation / duplication scan

No new source retune is justified.

- **Object VFX:** irregularity-v2 remains frozen at Object PR #31 exact effect head `bc114ee7ec876107892ccedeefc8e5020315488a`. Art Direction 038 has passed the close/seam presentation and explicitly accepts the existing Map wide-camera zero-raster result as a non-target-scale / non-intrusion context. Independent QA close review and any Runtime rebind remain downstream. VFX does not brighten, enlarge, densify, widen, lengthen, move cameras or seed-shop it.
- **Nature / compact-east:** source response remains frozen. Animation / Runtime / Art / QA own the remaining presentation gates.
- **Weather:** source semantics and deterministic seeded field generation remain Weather / Procedural-owned. Existing Map PR #25 already contains the strongest live VFX candidate: source-width presentation plus the opacity-normalized two-tap temporal-exposure successor.
- **Environment / Technical Art / Materials / Runtime:** current Object service-clearance, transport/orientation, shading and optimization work are separate owner lanes and are not VFX scope.
- **Weapon / Armor / Character / Unit / Animal / Building / Misc:** no fresher VFX-owned handoff displaced the Weather review question.

The highest-leverage unoccupied VFX improvement was therefore **effect-readability evidence for the already-green Weather candidate**, not another effect variant.

## Selected bounded improvement — attribution-only Weather readability review

Owning repository: `mike-axiom-mir/axm-map-design`

Existing draft PR: **#25 — `VFX: carry source-authored Weather width into current-world proof`**

Branch: `studio/vfx-weather-source-width-current-world-001`

Exact unchanged visual candidate donor:

`dd4a85223ba70f7086db2fdc292e4cb57ac38e47`

Review-only branch head:

`4e65ea8f167ea884c1dee8718c66ff28d806cfc2`

PR state at verification: **open / draft / unmerged / mergeable**.

The new review head adds only:

- `tools/environment_weather_width_temporal_exposure_readability.py`;
- `.github/workflows/vfx-weather-source-width-temporal-exposure-readability.yml`.

It does **not** change Weather source data, seed, source widths, lag, tap weights, transmittance-normalized opacity mapping, density, cameras, lighting, world composition, sapling motion or any gameplay/physics state.

## Reused exact real-host evidence

The review deliberately consumes the already-retained real Godot 4.7.2 normalized-candidate packet instead of rerendering a changed effect that does not exist.

Exact donor workflow:

`35147580525 — VFX Weather opacity-normalized temporal exposure evidence — SUCCESS`

Exact donor artifact:

- ID `10466759303`;
- candidate head `dd4a85223ba70f7086db2fdc292e4cb57ac38e47`;
- size `7,963,651 B`;
- SHA-256 `957a8b6afa54a6a8200597cb1276260390515c6db4129a24dfec76d084fbedf8`.

The review workflow downloads that exact artifact, reconstructs its retained image layout, re-runs the full opacity-normalized verifier against the same hash-bound PNG / raw RGBA evidence, then computes deterministic raster-attribution metrics across all retained pairs.

This preserves the prior exact candidate result:

**`PASS_OPACITY_NORMALIZED_TEMPORAL_EXPOSURE_VISUAL_CANDIDATE`**.

The earlier corrected temporal finding also remains unchanged: median inter-frame RGB is only about **0.028% lower** than control in `path_eye` and **0.380% lower** in `elevated_oblique`. VFX still does not claim a strong smoothing improvement.

## Exact readability-review result

Dedicated workflow:

**`35292001358 — VFX Weather normalized exposure readability review` — SUCCESS**.

Exact review head:

`4e65ea8f167ea884c1dee8718c66ff28d806cfc2`

Scoped state:

**`PASS_OPACITY_NORMALIZED_TEMPORAL_EXPOSURE_READABILITY_REVIEW_SURFACE`**

Decision:

**`REVIEW_SURFACE_ONLY_NO_ART_OR_QA_PREFERENCE`**

All workflow stages passed:

- exact review-head / donor ancestry binding;
- Python compilation;
- exact retained real-Godot donor download;
- retained evidence layout rebind;
- full normalized candidate contract recomputation;
- all `18` fixed-context control/candidate pairs hash-bound and measured (`2 cameras × 9 phases`);
- zero-lag brightness-equivalence preservation;
- direct visual delta at every nonzero review phase;
- deliberate receiving-head identity mutation fails closed;
- review artifact upload.

## Direct visual-attribution measurements

The review measures **where and how much** the already-rendered candidate differs from control. It does not assign aesthetic value.

`path_eye`:

- mean changed pixels: **`1464.778`** / `792,000` = **`0.18495%`**;
- maximum: **`1510`** = **`0.19066%`** at **`312.5 ms`**;
- minimum: `1347` at zero lag;
- union changed-pixel bbox: **`[0,49,1099,282]`**.

`elevated_oblique`:

- mean changed pixels: **`1663`** / `792,000` = **`0.20997%`**;
- maximum: **`1727`** = **`0.21806%`** at **`125 ms`**;
- minimum: `1607` at zero lag;
- union changed-pixel bbox: **`[60,193,1099,580]`**.

At phase `0 ms`, the retained candidate/control pairs still remain inside the prior normalized brightness-equivalence gate: maximum RGB difference is only **1 LSB** in both cameras. The nonzero changed-pixel count at phase 0 is therefore low-amplitude raster variation, not evidence of a meaningful static brightness shift.

The later phases show direct visible raster contribution while staying sparse relative to the full frame. VFX records that fact without converting it into an aesthetic threshold or preference.

## Retained review artifact

Artifact:

- ID **`10527111249`**;
- name `environment-weather-source-width-temporal-exposure-readability-001-4e65ea8f167ea884c1dee8718c66ff28d806cfc2`;
- size **`3,885 B`**;
- GitHub SHA-256 **`622c28066955e6991b6063cfadb74abf9edbe71a2e3a53092519cd17ed101d91`**;
- downloaded archive independently rehashed to the same SHA-256;
- retained files: `candidate-head.txt`, `review-head.txt`, `readability.json`, `readability.svg`.

Map PR #25 handoff comment: **`5723238004`**.

## Why this is useful without source churn

The normalized candidate already removed the prior half-opacity attribution confound, but its perceptual value remains uncertain. A new lag / opacity / density / width / seed / camera variation would be parameter churn before Art / independent QA answer the current question.

The new review surface instead gives those downstream specialists a deterministic map of the candidate's actual retained raster contribution while keeping the visual candidate byte-for-byte attributable to exact donor head `dd4a852...`.

This is a VFX evidence-method improvement, not an automatic adoption or a substitute for human perceptual review.

## Object VFX continuity

Object PR #31 remains frozen at exact irregularity-v2 effect head:

`bc114ee7ec876107892ccedeefc8e5020315488a`

Frozen owner identity remains:

- seed `41027`;
- `18` motes;
- trigger `0.25 s`;
- exact Animation timing/easing/order unchanged;
- owner color/alpha ceiling unchanged;
- owner size/lifetime/velocity ranges unchanged;
- semantics `EXACT_ANIMATION_PHASE_BOUNDARY_NOT_GAMEPLAY_EVENT`;
- semantics `STYLIZED_VISUAL_RELEASE_MOTES_NOT_DUST_OR_FLUID_SIMULATION`.

Art Direction 038 remains:

**`PASS_ART_DIRECTION_OBJECT_LID_RELEASE_MOTE_IRREGULARITY_V2_CLOSE_PRESENTATION_038`**

and:

**`ACCEPT_EXISTING_CURRENT_WORLD_ZERO_RASTER_AS_NON_TARGET_SCALE_CONTEXT__NO_SOURCE_AMPLIFICATION`**.

Independent Visual QA close review remains genuinely unresolved in current coordination; Runtime rebind and target-device evidence remain downstream.

## Explicit truth boundary

The new Weather PASS establishes only a deterministic **review surface** over retained real-Godot evidence for the exact normalized VFX candidate.

It does **not** establish:

- human-perceived smoothness;
- aesthetic superiority or Art Direction preference;
- independent Visual QA acceptance;
- authored Weather `32 Hz` target-device delivery;
- arbitrary-camera / arbitrary-resolution / arbitrary-FOV equivalence;
- physical wind, precipitation, airflow, dust, pressure or fluid behavior;
- collision, damage, interaction or gameplay-event semantics;
- target-device CPU/GPU/FPS/VRAM/thermal/battery performance;
- Runtime adoption;
- final Object v2 QA acceptance;
- CANON;
- production/game readiness;
- VFX mastery.

Weather keeps source semantics. Animation keeps timing/easing/order. Environment keeps composition/cameras. Runtime keeps production representation/performance. Art Direction and independent Visual QA keep perceptual acceptance. VFX owns only bounded effect/presentation identity and truthful visual evidence. Gameplay/physics remain unchanged and unclaimed.

## Continuity retained

The immediately preceding detailed VFX status is preserved at exact Git blob:

`f8f15156d5a0a70fbd11ef4b3f547971d8525ad3`

That predecessor preserves the full normalized-candidate derivation, exact formula / width evidence, corrected weak-smoothing result, Object Art Direction 038 continuity and prior handoff state. Earlier Object owner, seed-family, wall-clock, v1/v2 repair, current-world zero-raster, Weather source-width, strict wall-clock failures, latest-due fallback and temporal-exposure evidence remain recoverable in their owning PR histories. No failed or weaker result is silently rewritten.

## Four-root gate

- **Truth:** the new review does not turn sparse raster deltas into a claim of perceptual smoothing or aesthetic quality. It re-verifies the exact retained normalized evidence and preserves the corrected weak-smoothing result.
- **Agency / non-domination:** VFX does not retune Weather against Art/QA, amplify Object against Direction 038, seize Weather source semantics, Runtime/device authority, Environment cameras, Animation timing or gameplay/physics authority.
- **Continuity:** exact candidate donor `dd4a852...`, review-only child head `4e65ea8f...`, donor artifact, review artifact, PR identity, Object v2 identity and predecessor status blob remain separately addressable.
- **Wisdom before speed:** instead of opening another parameter variant, this activation improves observability of the exact candidate already awaiting perceptual judgment.

The four AXM roots remain the merge gate.
