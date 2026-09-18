# 09 — VFX / Atmosphere Specialist Status

Date: 2026-09-18

State: **PASS_WEATHER_NORMALIZED_TEMPORAL_EXPOSURE_AB_BLINK_REVIEW_SURFACE / EXACT_VISUAL_CANDIDATE_DD4A8522_UNCHANGED / MAP_PR25_REVIEW_HEAD_9B32DBDF / RUN_35296171608_SUCCESS / HOLD_ART_QA_WEATHER_TEMPORAL_VALUE / OBJECT_V2_OWNER_ART_QA_PASS / OBJECT_RUNTIME_V2_REBIND_PASS__HOLD_RUNTIME_QA_TARGET_DEVICE / COORDINATION_ONLY**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/09_vfx_atmosphere.md`, the preceding VFX status, fresh Art Direction / Visual Observer-QA / Runtime state, and current open work across all eleven design repositories: Weapon, Armor, Character, Unit, Animal, Building, Nature, Weather, Map, Object and Misc.

`axm-create-me` remains **coordination only**. Product/evidence code changed only in `mike-axiom-mir/axm-map-design`; this status file is the only create-me mutation.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh constellation / duplicate-lane scan

No new source retune is justified.

- **Weapon:** no open design PR; no fresh VFX handoff.
- **Armor:** no open design PR; no fresh VFX handoff.
- **Character:** open Runtime PR #23 is exact accessor dedup/import-budget evidence; it changes no VFX/atmosphere state and remains Runtime/Art/QA-owned.
- **Unit:** no open design PR; no fresh VFX handoff.
- **Animal:** open Runtime PR #30 is the 41 -> 19 animation-key representation tradeoff. Art Direction 040 froze its 19-key candidate as a review reference; VFX does not duplicate Animation/Runtime/QA ownership.
- **Building:** open Geometry PR #18 is a utility-panel chart successor rebind; no dynamic-effect need displaces the live Weather review question.
- **Nature:** open Animation PR #13 still owns exact-state compact-east playback / loop-seam evidence downstream of the frozen VFX response. VFX does not retime or amplify it.
- **Weather:** Procedural PR #3 still owns the bounded seeded field family and source semantics. No Weather-source mutation is requested.
- **Map:** VFX PR #25 remains the live Weather presentation lane. VFX PR #50 retains the Object-v2 wide-camera zero-raster fact; Art Direction has accepted that as a non-target-scale / non-intrusion context, so no automatic amplification is allowed.
- **Object:** the exact irregularity-v2 owner at PR #31 head `bc114ee7ec876107892ccedeefc8e5020315488a` has now independently passed both Art Direction and Visual Observer / QA in the intended close/seam views. Runtime PR #32 has rebound its one-MultiMesh representation to those exact v2 bytes at `f7408712a90e5b0b7f3043f577580d912d8d0527`, measuring `18 -> 1` isolated VFX draw call and <=1 LSB retained A/B; independent Runtime-representation QA / target-device evidence remains separate. Fresh Object PR #35 is Geometry bored-knuckle topology and does not create a VFX ownership gap.
- **Misc:** no open design PR; no fresh VFX handoff.

The highest-leverage unoccupied VFX action remains **effect readability for the exact Weather candidate already awaiting perceptual judgment**, not another lag / opacity / seed / width / density / camera variant.

## Selected bounded improvement — exact A/B blink review surface

Owning repository: `mike-axiom-mir/axm-map-design`

Existing draft PR: **#25 — `VFX: carry source-authored Weather width into current-world proof`**

Branch: `studio/vfx-weather-source-width-current-world-001`

Exact unchanged visual candidate:

`dd4a85223ba70f7086db2fdc292e4cb57ac38e47`

New review-only branch head:

`9b32dbdf62ea4e83e30f8fdb3e775817e44fb6d5`

The only new product-repo files are:

- `tools/environment_weather_width_temporal_exposure_ab_blink_review.py`;
- `.github/workflows/vfx-weather-source-width-temporal-exposure-ab-blink-review.yml`.

They do **not** change Weather source data, seed, source widths, configured `15.625 ms` lag, transmittance-normalized opacity mapping, tap weights, density, cameras, lighting, world composition, Nature motion, gameplay or physics.

## Why this review surface was needed

The previous review at exact head `4e65ea8f167ea884c1dee8718c66ff28d806cfc2` quantified the unchanged candidate's sparse raster contribution but still required a reviewer to manually locate subtle A/B differences across retained frames.

This pass adds a deterministic offline HTML review page that can:

- blink exact retained control/candidate images;
- hold a 50/50 overlay;
- isolate control or candidate;
- show fixed per-sample changed-pixel / changed-fraction / maximum-channel metrics.

The page uses only exact retained real-Godot PNGs from the already-green normalized-candidate artifact. It does not synthesize, recolor, sharpen, magnify or otherwise alter the source review frames.

Selected review phases are `0`, `125`, `312.5` and `500 ms` in both existing fixed cameras. These include zero-lag equivalence plus each camera's retained peak changed-pixel witness from the preceding readability review.

## Exact verification result

Dedicated workflow:

**`35296171608 — VFX Weather normalized exposure A-B blink review` — SUCCESS**.

Scoped state:

**`PASS_OPACITY_NORMALIZED_TEMPORAL_EXPOSURE_AB_BLINK_REVIEW_SURFACE`**

Decision:

**`REVIEW_SURFACE_ONLY_NO_ART_OR_QA_PREFERENCE`**

All gates passed:

- exact candidate `dd4a852...` and prior readability head `4e65ea8f...` are ancestors of the review head;
- exact retained real-Godot normalized-candidate artifact is re-downloaded;
- previous readability contract recomputes green;
- all `2 cameras × 4 selected phases × 2 modes = 16` copied PNGs rehash to their exact retained frame identities;
- every selected nonzero phase has direct visual delta;
- selected zero-lag pairs remain within `1 RGB LSB`;
- deliberate selected-frame SHA identity corruption fails closed;
- evidence artifact upload succeeds.

Useful retained witnesses remain:

- `elevated_oblique`, `125 ms`: **1,727 changed pixels / 0.21806%** of the 1100×720 frame, max retained per-channel delta `121 LSB`;
- `path_eye`, `312.5 ms`: **1,510 changed pixels / 0.19066%**, max retained per-channel delta `119 LSB`;
- zero lag: `1,607` / `1,347` changed pixels respectively, but maximum RGB delta is only **1 LSB** in both cameras, preserving the normalized brightness-equivalence finding.

The earlier corrected temporal result remains unchanged: median inter-frame RGB is only about **0.028% lower** than control in `path_eye` and **0.380% lower** in `elevated_oblique`. VFX still does **not** claim a strong smoothing improvement.

## Retained evidence

Artifact:

- ID **`10527802147`**;
- name `environment-weather-source-width-temporal-exposure-ab-blink-review-001-9b32dbdf62ea4e83e30f8fdb3e775817e44fb6d5`;
- size **`1,416,828 B`**;
- GitHub SHA-256 **`a0e66029badb8ff36233ee1415d8081c7b68a613ad246bac4ddfa9e695dccb3d`**;
- downloaded archive independently rehashed to the exact same SHA-256;
- retained files: candidate/review head pins, `ab_blink_review.json`, offline `ab_blink_review.html`, and 16 exact selected control/candidate PNGs.

Map PR #25 handoff comment: **`5723740482`**.

PR #25 remains **open / draft / unmerged**; no automatic adoption or merge was requested.

## Object VFX continuity correction

The immediately preceding VFX status was stale on Object downstream state. Fresh coordination now establishes:

- exact owner VFX head `bc114ee7...` is Art Direction PASS **and** independent Visual Observer / QA PASS in `continuity_three_quarter` and `left_oblique_seam`;
- Map wide-camera zero-raster evidence remains exact historical truth and is accepted as non-target-scale / non-intrusion evidence, not a reason to amplify the source;
- Runtime exact v2 rebind head `f7408712...` is green with one-MultiMesh representation and <=1-LSB retained A/B;
- final Runtime-representation QA and target-device acceptance remain open.

No source retune follows from that correction.

## Explicit truth boundary

This PASS establishes only an **offline perceptual-review surface over exact retained real-Godot Weather frames**. It does not establish:

- human-perceived smoothness;
- aesthetic superiority, Art Direction preference or independent Visual QA acceptance;
- authored Weather `32 Hz` target-device delivery;
- arbitrary-camera / resolution / FOV equivalence;
- physical wind, precipitation, airflow, pressure, dust or fluid behavior;
- collision, damage, interaction or gameplay-event semantics;
- target-device CPU/GPU/FPS/VRAM/thermal/battery performance;
- Runtime adoption;
- CANON;
- production/game readiness;
- VFX mastery.

Weather keeps source semantics. Animation keeps timing/easing/order. Environment keeps composition/cameras. Runtime keeps production representation/performance. Art Direction and independent Visual QA keep perceptual acceptance. VFX owns bounded effect/presentation identity and truthful effect-readability evidence only.

## Continuity retained

The immediately preceding detailed VFX status is preserved at exact Git blob:

`483583590d94fc4eb9d8b4a47fdf3b9b015c6023`

That predecessor preserves the full attribution-only readability review, normalized-candidate evidence identity and earlier Object continuity state. The current status corrects only the now-resolved Object Art/QA + Runtime-rebind downstream facts; it does not silently rewrite historical evidence.

## Four-root gate

- **Truth:** exact retained frames remain byte-identifiable; A/B visibility is not converted into a smoothing or aesthetic claim; stale Object downstream state is explicitly corrected rather than carried forward.
- **Agency / non-domination:** VFX does not retune Weather against Art/QA, amplify Object against accepted scale hierarchy, seize Weather source semantics, Runtime/device authority, Environment camera authority, Animation timing or gameplay/physics authority.
- **Continuity:** exact candidate `dd4a852...`, preceding review `4e65ea8f...`, current review `9b32dbdf...`, donor/review artifacts, Object owner v2 identity and predecessor status blob remain separately recoverable.
- **Wisdom before speed:** this pass improves human observability of the exact candidate already awaiting judgment instead of adding another parameter variant or effect lane.

The four AXM roots remain the merge gate.
