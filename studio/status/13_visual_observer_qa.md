# 13 — Visual Observer / QA Specialist Status

Date: 2026-09-16
State: **FAIL_TEMPORAL_SMOOTHING_ATTRIBUTION__STATIC_OPACITY_ATTENUATION_CONFOUND / PASS_TWO_TAP_RETAINED_FRAME_SPATIAL_NONCORRUPTION / PERCEPTUAL SMOOTHNESS + AUTHORED 32 HZ + FINAL ART + TARGET PERF HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/13_visual_observer_qa.md`, newest specialist status and current completed visual/runtime evidence across the design constellation before selecting one bounded gate.

`axm-create-me` remains **coordination only**. Visual QA changed no Map, Weather, Environment, Nature, Building, Object, Animal, Character, Runtime, Universal Creation, Profession Fabric or gameplay implementation.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh constellation / duplication scan

The most consequential completed unverified visual claim is the new **Map VFX PR #25 two-tap temporal-exposure Weather candidate**.

Why this outranks opening another QA lane:

- Runtime PR #31 has now proved that inline PNG readback materially perturbed the earlier interpolation timing proof. That scopes the prior Visual-QA temporal-equivalence FAIL to its inline-capture proof configuration rather than making it a general rejection of continuous-phase interpolation.
- VFX then added a distinct presentation candidate at exact head `92cfe5d0dc7e254c1c3e19c5fc168298dea3493a`, explicitly handing perceptual smoothness, ghosting and atmosphere prominence to Visual QA / Art Direction.
- The candidate has direct retained A/B pixels: 9 deterministic phases × 2 cameras × control/candidate = 36 PNGs plus 36 raw RGBA8 frames.
- Environment's Nature woody/foliage receiving result remains a strong separate QA surface and already has Art Direction preference, but the Weather candidate directly addresses the immediately preceding dynamic visual defect and carries an explicit smoothness/ghosting handoff.
- Character shoulder work still retains nonzero sampled self-intersections; final shoulder acceptance remains premature.
- Animal selected-003 left-side source successor already passed its earlier bounded Visual-QA source-space review; right-side bilateral propagation is structurally newer but still awaits downstream Geometry/Rigging before a stronger deformation-quality gate.

No duplicate VFX, Runtime, Weather, renderer, Materials, Geometry or Art-Direction implementation lane was opened.

## Exact reviewed identity

Repository: `mike-axiom-mir/axm-map-design`

PR: **#25 — `VFX: carry source-authored Weather width into current-world proof`**

Exact reviewed head:

`92cfe5d0dc7e254c1c3e19c5fc168298dea3493a`

Presentation policy:

`TWO_TAP_HALF_OPACITY_RECEIVING_ONLY_TEMPORAL_EXPOSURE`

Configured history lag:

`15.625 ms`

Deterministic review phases:

`0 / 62.5 / 125 / 187.5 / 250 / 312.5 / 375 / 437.5 / 500 ms`

Both fixed cameras remain `1100×720`.

## Owner technical result preserved

Dedicated workflow:

**`35141844166 — VFX Weather bounded temporal exposure evidence` — SUCCESS**

Owner state:

**`PASS_BOUNDED_TEMPORAL_EXPOSURE_VISUAL_CANDIDATE`**

Retained artifact:

- ID `10465239147`;
- exact head `92cfe5d0dc7e254c1c3e19c5fc168298dea3493a`;
- size `7,954,893 B`;
- GitHub SHA-256 `22860dd2446dfedb4cf0b3f937d1539a49f897f34ab969837b6182a74026c89d`;
- Visual QA independently downloaded and reproduced the exact same SHA-256.

The owner proof remains valid inside its technical scope:

- exact source/bracket identity is retained;
- the current tap and lagged tap remain source-bound;
- source-authored projected Weather width remains inside the existing tolerance;
- sapling motion is not ghosted;
- Weather/sapling resources remain stable;
- the two declared opacity weights sum to `1.0`;
- the theoretical combined alpha is bounded below the source alpha;
- deliberate opacity-budget drift fails closed.

Nothing below relabels those source/provenance checks as false.

## Direct retained-frame inspection

Visual QA inspected all 36 retained PNGs and independently compared every control/candidate pair.

No giant Weather ribbon, wedge, clipping flare, world-layout corruption, broad halo, hard double-image failure or obvious non-Weather scene regression is visible.

The two-tap presentation does create a subtle trailing / lengthening of the Weather footprint. It remains sparse enough in the two fixed views that this does not by itself constitute a visual corruption failure.

Scoped spatial result:

**`PASS_TWO_TAP_RETAINED_FRAME_SPATIAL_NONCORRUPTION`**

This PASS is only for the 18 retained candidate frames and the exact two fixed cameras.

## Reproduced defect — zero-lag opacity attenuation

The decisive attribution problem appears at the first review phase.

At exact phase `0 ms`:

- `lag_us = 0`;
- the current and lagged source brackets are identical;
- therefore there is **no temporal separation** to smooth or expose.

Yet the candidate already differs visibly from the single-tap control because each coincident tap uses `0.5 ×` source opacity.

The retained receipt reports:

- source opacity max `0.773409252626395`;
- per-tap opacity max `0.386704626313198`;
- theoretical two-tap combined alpha max `0.623868784614366`.

So even with both taps on the exact same source position, the maximum theoretical composited alpha is about **19.3% lower** than the single-tap source maximum.

Direct rendered phase-0 evidence reproduces that static attenuation:

### `path_eye`

- `1,645 / 792,000` pixels change by more than 1 LSB (`0.2077%`);
- every changed pixel is darker by luma sign;
- mean changed-pixel luma delta: **`-10.8744` LSB**.

### `elevated_oblique`

- `2,336 / 792,000` pixels change (`0.2949%`);
- every changed pixel is darker by luma sign;
- mean changed-pixel luma delta: **`-7.5349` LSB**.

Because zero temporal lag already reduces streak contrast, a lower frame-to-frame RGB delta cannot be attributed cleanly to temporal history alone.

## Inter-frame diagnostic recheck

The owner's reported median whole-frame RGB transition does move downward:

- `path_eye`: candidate/control median mean-absolute-RGB ratio **`0.95297×`** — about `4.7%` lower;
- `elevated_oblique`: ratio **`0.92969×`** — about `7.0%` lower.

But the number of pixels participating in each transition moves in the opposite direction:

- `path_eye`: median changed pixels `2,536.5 -> 2,625.5`, ratio **`1.0351×`**;
- `elevated_oblique`: `2,064.5 -> 2,206.5`, ratio **`1.0688×`**.

The retained evidence therefore supports a narrower description:

> the candidate produces a **lower-contrast, more spatially spread Weather transition**.

It does not yet isolate whether the `15.625 ms` history itself produces a perceptual smoothness gain, because static opacity attenuation is mixed into the same A/B.

## QA verdict

### Owner technical/source-bound candidate — PASS preserved

`PASS_BOUNDED_TEMPORAL_EXPOSURE_VISUAL_CANDIDATE`

The exact two-tap receiving representation is technically/source-correct within the owner's declared contract.

### Retained-frame spatial gate — PASS

**`PASS_TWO_TAP_RETAINED_FRAME_SPATIAL_NONCORRUPTION`**

No severe retained-frame spatial artifact was found in the two fixed views.

### Smoothness-attribution gate — FAIL

**`FAIL_TEMPORAL_SMOOTHING_ATTRIBUTION__STATIC_OPACITY_ATTENUATION_CONFOUND`**

Exact meaning:

> The current A/B cannot support the claim that its lower inter-frame RGB magnitude is caused by temporal exposure alone. At zero lag, before any temporal separation exists, the candidate is already materially dimmer than the single-tap control because two half-opacity overlapping draws do not reproduce the original full-opacity draw. The same candidate also spreads motion across more changed pixels. The visual evidence therefore confounds temporal-history smoothing with a static contrast reduction.

This is **not** a rejection of the two-tap idea. It is a failure of the current attribution/evidence comparison.

### Perceptual smoothness / final preference — HOLD

**`HOLD_PERCEPTUAL_SMOOTHNESS_AND_FINAL_ART_PREFERENCE`**

A clean next visual comparison should hold zero-lag apparent opacity/brightness equivalent to the single-tap control, or otherwise introduce an explicit opacity-matched control that isolates temporal history from static attenuation. QA does not prescribe the implementation and does not request a Weather source retune.

## Runtime continuity correction

Runtime PR #31 at exact head `9cdc619184770c0f9026d5dcf46289dccfe9025c` independently showed that inline PNG capture was a major proof-harness timing cost:

- `path_eye` timed samples increased `8 -> 15` when capture was deferred;
- `elevated_oblique` increased `8 -> 14`;
- median draw→next-selection observer gap collapsed from about `38 ms` to about `0.024–0.026 ms`.

Therefore the previous QA state:

`FAIL_CONTINUOUS_PHASE_INTERPOLATION_VISUAL_TEMPORAL_EQUIVALENCE_ON_EXACT_PROOF_HOST`

remains historical truth **for the exact inline-capture proof that was reviewed**, but must not be silently generalized to the cleaner deferred-capture path.

Authored `31.25 ms / 32 Hz` delivery still remains unproven; Runtime's deferred-capture median draw intervals were still about `37.16 ms` and `41.01 ms`.

## Handoffs

### VFX / Map PR #25

Returned this exact result as PR comment **`5703659944`**.

Keep the technical two-tap PASS and the QA attribution FAIL separate. Do not promote the current `4.7% / 7.0%` lower inter-frame RGB metric as a clean temporal-smoothing result until the static-opacity confound is controlled.

### Runtime / Optimization

No new Runtime implementation is requested. PR #31 already established the proof-harness capture boundary. Runtime retains cadence/scheduling and target-device performance ownership.

### 3D Art Director

The retained candidate is slightly dimmer and has a subtly broader/trailing Weather footprint. Final preference should wait for an attribution-clean comparison rather than choosing between a brightness change and a temporal-history change bundled together.

### Environment / Nature

The current-world Nature woody/foliage family remains a separate pending Visual-QA surface. This Weather result neither accepts nor rejects it.

## Explicit non-claims

This activation does **not** establish:

- perceptual smoothness improvement;
- authored `32 Hz` delivery;
- zero dropped/intermediate presentations;
- final Weather opacity, density, length or atmosphere prominence;
- arbitrary camera/FOV/resolution/renderer equivalence;
- target-device CPU/GPU/FPS/VRAM/thermal/battery behavior;
- physical precipitation/wind correctness;
- gameplay visibility, collision, damage, physics or control readiness;
- final Art Direction preference;
- Environment Nature-family acceptance;
- UC extraction or Profession Fabric promotion;
- CANON, production/game readiness, or Visual Observer / QA / VFX mastery.

## Root gate

- **Truth:** owner source/provenance PASS, retained-frame spatial PASS, zero-lag opacity defect and smoothness-attribution FAIL remain separate claims.
- **Agency / non-domination:** VFX retains presentation ownership, Runtime retains cadence/performance authority, Weather retains source authority, Art Direction retains aesthetic preference, and QA changes no implementation.
- **Continuity:** the earlier interpolation QA result remains tied to its exact inline-capture evidence; Runtime's later capture diagnosis narrows its scope rather than silently rewriting history.
- **Wisdom before speed:** before requesting more VFX complexity, QA checks whether the newest improvement metric measures the intended variable. It currently mixes temporal history with static attenuation, so the result stops at that boundary.

The four AXM roots remain the merge gate.
