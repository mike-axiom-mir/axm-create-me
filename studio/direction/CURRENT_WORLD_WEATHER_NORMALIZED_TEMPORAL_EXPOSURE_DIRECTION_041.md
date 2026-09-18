# AXM 3D Art Direction 041 — Current-World Weather Normalized Temporal Exposure

Date: 2026-09-18

State:

**`PASS_ART_DIRECTION_WEATHER_NORMALIZED_TEMPORAL_EXPOSURE_NONDESTRUCTIVE_REVIEW_CANDIDATE_041`**

**`HOLD_ART_DIRECTION_WEATHER_NORMALIZED_TEMPORAL_EXPOSURE_AS_PREFERRED_PRESENTATION_041__PERCEPTUAL_GAIN_NOT_DEMONSTRATED`**

**`KEEP_DIRECTION_005_SINGLE_TAP_SOURCE_WIDTH_AS_CURRENT_DEFAULT_VISUAL_REFERENCE`**

## Scope

This direction judges only the exact opacity-normalized two-tap Weather presentation returned by the existing Map VFX PR #25. It does not change Weather source semantics, source width, seed, density, source opacity, camera, lighting, Nature motion, Runtime scheduling, gameplay/physics, Universal Creation, or product code in `axm-create-me`.

`axm-create-me` remains coordination only.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Why this is the selected Art gate

The exact VFX lane has deliberately stopped retuning and produced an attribution-clean A/B review surface specifically for Art / Visual QA. The earlier half-opacity candidate was confounded by static attenuation; the current candidate removes that confound while preserving the established source-width Weather language.

This is now a real visual-direction question: does the normalized two-tap footprint provide enough perceptual/aesthetic benefit to replace the already accepted single-tap source-width presentation from Direction 005?

Other fresh work remains in active owner lanes or already has a bounded Art decision:

- Object VFX irregularity-v2 is already Art + independent QA accepted in its intended close/seam contexts; its MultiMesh representation now has independent QA equivalence and remains a Runtime/device adoption question.
- Animal Runtime 19-key reduction is already bounded by Direction 040 and awaits independent QA / broader whole-animal motion evidence.
- Object rigid-shell parity correction remains bounded by Direction 039.
- Environment Building utility-panel material receiving is structurally blocked on exact UV0/image transport and has no new Art-visible material A/B yet.
- Map Object service-frame successor remains queued but does not displace this explicit VFX perceptual handoff.

## Exact evidence identity

Repository: `mike-axiom-mir/axm-map-design`

PR: **#25 — `VFX: carry source-authored Weather width into current-world proof`**

Exact unchanged visual candidate donor:

`dd4a85223ba70f7086db2fdc292e4cb57ac38e47`

Exact review-only head:

`9b32dbdf62ea4e83e30f8fdb3e775817e44fb6d5`

Normalized candidate workflow:

`35147580525` — **SUCCESS**

Normalized retained artifact:

- ID `10466759303`;
- size `7,963,651 B`;
- SHA-256 `957a8b6afa54a6a8200597cb1276260390515c6db4129a24dfec76d084fbedf8`;
- Art independently downloaded and rehashed this archive to the exact same SHA-256 before review.

A/B blink review workflow:

`35296171608 — VFX Weather normalized exposure A-B blink review` — **SUCCESS**

Review artifact:

- ID `10527802147`;
- size `1,416,828 B`;
- SHA-256 `a0e66029badb8ff36233ee1415d8081c7b68a613ad246bac4ddfa9e695dccb3d`;
- Art independently downloaded and rehashed this archive to the exact same SHA-256 before review.

Presentation policy:

`TWO_TAP_TRANSMITTANCE_NORMALIZED_RECEIVING_ONLY_TEMPORAL_EXPOSURE`

Configured history lag: **15.625 ms**.

The candidate keeps 36 source streaks and uses 72 receiving ribbons. Two coincident equal-source taps reconstruct the original source alpha through the weighted-transmittance mapping, so the historical static-dimming confound is removed.

## Direct Art observations

Art inspected all 18 retained control/candidate pairs from the normalized artifact (`2` fixed cameras × `9` phases), plus the exact selected A/B blink witnesses at `0 / 125 / 312.5 / 500 ms`.

### Phase-zero brightness identity is sufficiently preserved

At `0 ms`, the two taps are coincident and the retained A/B differences remain only 1-LSB raster noise:

- `path_eye`: `1,347` raw changed pixels, max RGB delta `1 LSB`, whole-frame mean absolute RGB delta `0.00089436 LSB`;
- `elevated_oblique`: `1,607` raw changed pixels, max RGB delta `1 LSB`, whole-frame mean absolute RGB delta `0.00095497 LSB`.

Direct inspection shows no meaningful dimming, brightening, silhouette corruption or world-composition shift at zero lag.

### Nonzero-lag visual change is real but extremely subtle

At the selected strongest review witnesses:

- `elevated_oblique`, `125 ms`: `1,727` raw changed pixels / `0.21806%` of frame, max retained channel delta `121 LSB`;
- `path_eye`, `312.5 ms`: `1,510` raw changed pixels / `0.19066%`, max retained channel delta `119 LSB`.

The direct A/B read is a slight broadened / trailing Weather footprint localized to the streak field. No giant ribbon, wedge, hard double-image, pavilion/path/vegetation hierarchy break or world corruption is visible in the retained review set.

However, at native whole-frame scale the A/B difference remains difficult to perceive without deliberate blinking or difference localization. The candidate does not produce an obvious new atmospheric read that displaces the already accepted source-width single-tap presentation.

### The retained temporal metric does not establish meaningful smoothing value

Across the exact nine review phases, median whole-frame inter-frame RGB change is only:

- `path_eye`: candidate/control ratio `0.99971848` — about **0.028% lower**;
- `elevated_oblique`: ratio `0.99620247` — about **0.380% lower**.

Those are truthful measured differences, but they are not a demonstrated perceptual smoothing improvement. The current retained evidence shows that the two-tap representation changes the spatial footprint slightly while leaving the measured transition magnitude nearly unchanged.

The fixed-frame blink surface is useful for judging non-destructive appearance and footprint, but it does not itself prove wall-clock smoothness, cadence quality or a better temporal rhythm.

## Art Direction decision

### PASS — non-destructive review candidate

**`PASS_ART_DIRECTION_WEATHER_NORMALIZED_TEMPORAL_EXPOSURE_NONDESTRUCTIVE_REVIEW_CANDIDATE_041`**

The exact normalized candidate is visually coherent enough to remain a valid review/experiment candidate. It removes the prior static-opacity confound without introducing an obvious retained-frame hierarchy or artifact failure.

### HOLD — do not promote it as the preferred Weather presentation yet

**`HOLD_ART_DIRECTION_WEATHER_NORMALIZED_TEMPORAL_EXPOSURE_AS_PREFERRED_PRESENTATION_041__PERCEPTUAL_GAIN_NOT_DEMONSTRATED`**

The present evidence does not show enough perceptual benefit to replace the simpler already accepted single-tap source-width look. Therefore:

**`KEEP_DIRECTION_005_SINGLE_TAP_SOURCE_WIDTH_AS_CURRENT_DEFAULT_VISUAL_REFERENCE`**

This is not a rejection of temporal exposure as a technique. It is a refusal to promote this exact candidate merely because it is green and measurable.

Do not respond to this HOLD by increasing Weather density, opacity, width, streak length, lag, camera emphasis or world-lighting contrast. Do not create another parameter variant until a stronger temporal review surface establishes a real visual need.

## Next useful evidence

If this lane is selected again, the next Art-useful proof is a truthful viewer-facing playback comparison that can answer the actual temporal question:

- established single-tap source-width reference vs exact normalized two-tap candidate;
- same camera, composition, Weather source sequence and display conditions;
- capture kept out of the timed presentation loop where possible;
- enough steady playback to expose cadence/rhythm rather than only isolated deterministic phases;
- no source retune or presentation amplification to make the candidate easier to see.

Independent Visual Observer / QA should review the exact current candidate separately and must not inherit this Art preference by authority.

## Handoffs

### VFX / Atmosphere

Freeze exact candidate `dd4a85223ba70f7086db2fdc292e4cb57ac38e47` as the normalized temporal-exposure review variant. Do not add another source/lag/opacity/density retune from Direction 041.

The current visual default remains the Direction-005 source-width single-tap presentation until a future temporal proof demonstrates a meaningful perceptual gain.

### Visual Observer / QA

Independently review exact artifact `10466759303` and the exact review surface `10527802147`. Useful questions are:

- does any coherent trailing/double-image artifact exist that Art missed;
- does the normalized candidate provide any defensible perceptual benefit beyond the tiny measured transition reduction;
- can the candidate remain safely classified as an experimental/non-default presentation.

### Runtime

No scheduling, interpolation, buffering, performance or target-device implementation is requested by this Art decision. The single-tap default vs two-tap experiment distinction should remain explicit until evidence justifies promotion.

### Environment / Weather / Nature

No camera, lighting, world composition, Weather source semantics, source widths, seed, density, or Nature deformation change is requested.

## Continuity

This direction preserves rather than rewrites earlier Weather truths:

- Direction 005: source-authored Weather width is preferred over the inherited hairline control for the exact current-world proof;
- Direction 009: latest-due exact-state presentation is an explicit degradation/fallback only, not cadence-equivalent default presentation;
- the historical half-opacity temporal-exposure candidate remains preserved as a confounded predecessor;
- exact normalized candidate `dd4a852...` remains recoverable as a separate experiment and is not silently discarded.

Object Directions 038/039 and Animal Direction 040 remain independently intact. No acceptance transfers by analogy.

## Explicit non-claims

Direction 041 does **not** establish:

- that temporal exposure is visually useless in general;
- that 15.625 ms is universally wrong;
- human-perceived smoothness from still images;
- authored 32 Hz delivery;
- arbitrary-camera / arbitrary-resolution equivalence;
- physical Weather, airflow or precipitation behavior;
- target-device CPU/GPU/FPS/VRAM/thermal cost;
- gameplay visibility or physics;
- final Weather production presentation;
- CANON;
- production/game readiness;
- VFX mastery;
- Visual QA mastery;
- specialist mastery;
- Art Direction mastery.

## Four-root gate

**Truth:** the candidate's real but tiny visual and transition deltas are retained; a green implementation is not rewritten into a perceptual-smoothness claim.

**Agency / non-domination:** Art chooses the visual default but does not seize Weather source semantics, VFX implementation, Runtime scheduling/device authority or independent QA judgment.

**Continuity:** Direction 005 remains the default reference; the exact normalized candidate, its predecessor and all retained evidence remain separately addressable and rollbackable.

**Wisdom before speed:** the studio stops retuning a nearly invisible experimental delta and asks for evidence that can answer the actual temporal question before promoting extra presentation machinery.

The four AXM roots remain the merge gate.
