# Current World Weather Latest-Due Degradation Direction 009

Date: 2026-09-16
State: **PASS_ART_DIRECTION_WEATHER_LATEST_DUE_EXPLICIT_DEGRADATION_ONLY_009 / FAIL_AS_CADENCE_EQUIVALENT_OR_DEFAULT_PRESENTATION**

## Scope

This packet is coordination and visual direction only. It changes no Weather source, Map receiver, VFX implementation, Runtime policy, Environment composition, gameplay, physics, Universal Creation, Profession Fabric or product code.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Exact reviewed surface

Repository: `mike-axiom-mir/axm-map-design`

PR: **#25 — `VFX: carry source-authored Weather width into current-world proof`**

Exact reviewed VFX head:

`e95910c8c5c45cd8d51be3b259825cf85064efc2`

Presentation policy:

`LATEST_DUE_EXACT_SOURCE_STATE_NO_INTERPOLATION`

Selection semantics:

`SELECT_FRESHEST_DUE_SOURCE_STATE_WHEN_RENDERER_RETURNS_CONTROL`

The earlier approved fixed-state Weather-width visual reference remains exact head:

`15a03b7c3ba3aaa7c0475ca1a3091c15581f559b`

This direction does not rewrite the earlier source-width preference. It only decides how the newer timing fallback may be described and used visually.

## Evidence inspected directly

Latest-due retained artifact:

- artifact ID `10461270622`;
- independently downloaded archive SHA-256 `a7862ff074f63edde800682e97079483ed3ecb307c9b5180c6640de4784e75b8`;
- 23 actually presented `1100x720` frames;
- exact source interval `31.25 ms` / `32 Hz`;
- `path_eye` presented 12/17 exact states: `0,1,3,4,6,7,9,10,12,13,15,16`;
- `elevated_oblique` presented 11/17 exact states: `0,1,3,4,6,8,9,11,12,14,16`.

Earlier fixed-state source-width artifact:

- artifact ID `10449666486`;
- independently downloaded archive SHA-256 `c1143322dc974ad21cff4e3baa53697cc4a58fc42caf55627077703f131011b5`;
- all 17 exact source states retained in each fixed camera.

I independently compared every actually presented latest-due frame with the matching fixed-state candidate frame. All 23 are pixel-identical to their exact source-state counterparts. This supports the already-recorded QA result `PASS_PRESENTED_EXACT_STATE_SPATIAL_NONREGRESSION` and does not create a new spatial claim.

I also independently reproduced the adjacent-transition diagnostics from the retained images.

### `path_eye`

One-state transitions have median `1,778` pixels changing by more than one RGB LSB and median whole-frame mean absolute RGB delta `0.092174...`.

Two-state latest-due jumps have median `2,390` changed pixels and median whole-frame mean absolute RGB delta `0.140137...`.

That is roughly `1.34x` the changed-pixel count and `1.52x` the mean RGB delta for the two-state jumps.

### `elevated_oblique`

One-state transitions have median `1,399.5` changed pixels and median whole-frame mean absolute RGB delta `0.0601515...`.

Two-state jumps have median `2,064.5` changed pixels and median whole-frame mean absolute RGB delta `0.107119...`.

That is roughly `1.48x` the changed-pixel count and `1.78x` the mean RGB delta.

These measurements remain diagnostics of visible transition magnitude, not a universal perceptual metric.

## Art-direction interpretation

The latest-due fallback preserves the already-approved per-state Weather width language: sparse atmosphere remains subordinate to the pavilion, route and vegetation, and no retained presented state introduces a giant ribbon, clipping flare or spatial composition break.

The visual debt is temporal rather than spatial. At nearly regular proof-host display spacing, the source sequence advances by alternating one- and two-state steps. That changes the authored gust/motion rhythm and makes some transitions materially larger than their neighboring transitions. Therefore it is not visually equivalent to authored 32 Hz playback and should not silently become the normal presentation path.

At the same time, the retained evidence does not show a catastrophic visual corruption that requires deleting the fallback. Its honest role is an **explicit degraded presentation mode** for cases where exact cadence cannot be maintained. The user/system must not be told that the intended rhythm is preserved when it is not.

This direction does **not** rank latest-due against interpolation, exact-cadence scheduling, frame blending, lower render cost, another renderer, or another target device. Those alternatives do not yet have equivalent retained visual evidence.

## Decision

### PASS — explicit degradation role only

**`PASS_ART_DIRECTION_WEATHER_LATEST_DUE_EXPLICIT_DEGRADATION_ONLY_009`**

Meaning:

> The exact latest-due fallback at `e95910c8...` may remain available as an explicit visual degradation/fallback mode because every actually presented state preserves the accepted spatial Weather presentation and the retained sequence stays coherent enough to remain recognizable as the same atmosphere. Its dropped-state stepping is an accepted *known degradation*, not an accepted reproduction of the authored rhythm.

### FAIL — default / cadence-equivalent role

**`FAIL_ART_DIRECTION_WEATHER_LATEST_DUE_AS_CADENCE_EQUIVALENT_OR_DEFAULT_PRESENTATION_009`**

Meaning:

> Do not promote latest-due to the default visual presentation and do not describe it as visually equivalent to authored 32 Hz cadence. The retained fixed cameras skip 5/17 and 6/17 authored states and show materially larger two-state transition deltas.

## Direction constraints

- Keep the exact 31.25 ms authored source timeline as the preferred presentation target.
- Keep latest-due explicit and optional; do not hide state drops.
- Preserve exact source states and the already-approved source-width presentation if this fallback is used.
- Do not add interpolation merely to satisfy this Art Direction result; interpolation requires its own owner implementation and visual evidence.
- Do not retune Weather color, opacity, density, width or world lighting to mask a timing defect.
- Do not spend another art pass on mesh-cache representation: Runtime PR #30 already shows the cache sharply reduces update work without robustly reducing dropped states.

## Handoffs

### VFX / Map PR #25

Retain `LATEST_DUE_EXACT_SOURCE_STATE_NO_INTERPOLATION` only as an explicit degradation/fallback policy. Preserve the strict exact-32-Hz failure and QA temporal-equivalence failure as separate truths. No source-state, width or style retune is requested.

### Runtime / Optimization

Continue investigating presentation / post-draw / target-host timing rather than treating latest-due as the visual solution. Runtime PR #30's cache result is compatible with this direction: update-cost improvement is useful, but it did not recover the authored rhythm.

### Visual Observer / QA

The temporal-equivalence FAIL is accepted. Re-open this gate only if a materially different presentation strategy exists or if latest-due behavior changes. A future candidate should be compared against the same authored-state sequence rather than against this fallback alone.

### Environment / Map PR #24

The Building header-segmentation current-world visual delta at head `bd065c8ee23ddee922c4aa9b4aa6e3d9504ffb06` remains a separate pending Art Direction / QA surface. This Weather decision neither accepts nor rejects that receiver change or the separately held Object footprint cue.

## Explicit non-claims

This direction does not establish authored 32 Hz delivery, zero frame drops, interpolation quality, a preferred repair algorithm, target-device FPS/CPU/GPU/VRAM/thermal behavior, arbitrary camera/FOV/resolution/renderer equivalence, physical Weather, gameplay visibility/collision/damage, final world art, CANON, production/game readiness, or 3D Art Direction mastery.

## Root gate

- **Truth:** exact per-state spatial identity remains PASS while temporal equivalence remains FAIL; neither is rewritten to make the fallback sound stronger than it is.
- **Agency / non-domination:** VFX keeps presentation-policy ownership, Runtime keeps performance/timing authority, Weather keeps source semantics, and this packet only defines the bounded visual role.
- **Continuity:** the approved fixed-state width look, strict cadence failure, latest-due semantic PASS and QA temporal FAIL remain separate exact evidence points.
- **Wisdom before speed:** keep a useful fallback without promoting its known defect into the default, and wait for real evidence before choosing a more complex timing repair.
