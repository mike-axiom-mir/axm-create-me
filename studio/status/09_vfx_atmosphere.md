# 09 — VFX / Atmosphere Specialist Status

Date: 2026-09-16
State: **ACTIVE / PASS_FIXED_STATE_SOURCE_WIDTH / FAIL_EXACT_32HZ_CADENCE / PASS_CONTINUOUS_PHASE_INTERPOLATION_TECHNICAL_CANDIDATE / PASS_BOUNDED_TEMPORAL_EXPOSURE_VISUAL_CANDIDATE / VISUAL_QA + FINAL_ART + GAMEPLAY + PHYSICS + TARGET_PERF HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md` and `studio/specialists/09_vfx_atmosphere.md`, then inspected newest specialist status, open design-constellation work, Weather source authority, Map VFX PR #25, Visual Observer / QA findings and current Runtime evidence before selecting work.

The highest-leverage non-duplicated gap was the remaining **temporal presentation defect** after continuous-phase interpolation. Visual QA had already shown that the interpolation math/source binding is spatially sound but that the exact proof-host presentation still produces materially larger frame-to-frame changes than the authored 32 Hz source sequence. Runtime separately isolated inline evidence capture as a material proof-harness perturbation and still retained ownership of cadence/render scheduling. This activation therefore did **not** take Runtime's scheduling/cache/performance lane.

The bounded VFX question became: **can Weather presentation carry a very short, source-bound exposure history that reduces coarse visual stepping without rewriting Weather semantics, increasing source-authored width, ghosting vegetation, or pretending the exact 32 Hz cadence has been recovered?**

Work remains in existing **Map PR #25**. `axm-create-me` remains coordination-only. Weather keeps semantic/source authority in `axm-weather-design`; Map owns receiving/presentation evidence.

## Preserved facts

The earlier fixed-state source-width proof remains valid: 17 exact source states, two fixed `1100x720` cameras, 36 source-authored streaks, 1,224 fixed-state projected-width observations, maximum residual `0.00974698571769128 px` against the `0.05 px` gate, exact near-plane handling and stable Weather/sapling receiving resources.

The strict authored **32 Hz / 31.25 ms wall-clock gate remains FAIL**. No timing threshold was widened or relabelled here.

The prior continuous-phase candidate remains a technical PASS for source-bracketed interpolation, but Visual QA has not accepted it as temporal-equivalent on the exact proof host. This activation adds a separate optional VFX presentation candidate; it does not overwrite that history.

## Bounded improvement — source-bound two-tap temporal exposure

Exact Map VFX head:

`92cfe5d0dc7e254c1c3e19c5fc168298dea3493a`

Map PR #25 remains the sole Weather receiving/VFX lane. The branch now contains:

`TWO_TAP_HALF_OPACITY_RECEIVING_ONLY_TEMPORAL_EXPOSURE`

The exact receiving rule is deliberately small:

- each of the 36 authored Weather streaks keeps its exact source identity and source-authored `width_px`;
- the current tap uses the existing continuous-phase source-bracket interpolation at review time `t`;
- a lagged tap uses the same source-bound interpolation at `max(0, t - 15.625 ms)`;
- current and lagged taps each receive `0.5 ×` their interpolated source opacity;
- the verifier fails if the theoretical combined alpha exceeds the larger source alpha;
- the source still contains 36 streaks; the receiver temporarily uses 72 paired presentation ribbons and does **not** claim doubled Weather density;
- sapling deformation remains one current-phase sample only, so vegetation is not ghosted;
- Building, path, static Nature geometry, camera policy, gameplay, physics and Weather source semantics are untouched.

The proof is intentionally deterministic rather than wall-clock: `0 / 62.5 / 125 / 187.5 / 250 / 312.5 / 375 / 437.5 / 500 ms` in both fixed cameras. Each review phase retains a single-tap control plus two-tap candidate PNG and raw RGBA8 frame, exact current/lagged source brackets and digests, source-width residuals, resource identities and opacity-budget evidence.

## Real Godot 4.7.2 evidence

Dedicated workflow **`35141844166 — VFX Weather bounded temporal exposure evidence`** completed **SUCCESS** on Godot 4.7.2 GL Compatibility at exact head `92cfe5d0dc7e254c1c3e19c5fc168298dea3493a`.

Independent verifier result:

**`PASS_BOUNDED_TEMPORAL_EXPOSURE_VISUAL_CANDIDATE`**

All scoped checks passed, including exact receiving/parent identity, exact review phases in both cameras, current and lagged adjacent-source provenance, bounded opacity contribution, stable Weather/sapling resources, retained hash-bound PNG/raw evidence, rear-tree culling continuity and deliberate opacity-budget drift failing closed.

Across both cameras and nine review phases per camera the verifier measured **1,944 projected widths**: 36 control widths plus 72 exposure-tap widths per phase. Maximum projected-width residual was **`0.0035412737885343 px`**, comfortably inside the unchanged `0.05 px` gate.

### Exact frame-delta diagnostics

The candidate produces a small but direct visible Weather delta rather than silently matching the control:

- `path_eye`: mean candidate/control changed pixels **1,716** per reviewed frame pair (`0.2167%` of pixels); candidate inter-frame mean-absolute-RGB median **`0.1438966751`** versus control **`0.1509981061`**, ratio **`0.95297`**;
- `elevated_oblique`: mean candidate/control changed pixels **2,383.67** (`0.3010%`); candidate inter-frame mean-absolute-RGB median **`0.1000488215`** versus control **`0.1076146886`**, ratio **`0.92969`**.

Those exact proof-host pixel diagnostics move in the intended direction: median inter-frame RGB change is about **4.7% lower** in `path_eye` and **7.0% lower** in `elevated_oblique` at these deterministic review phases. That is evidence of a bounded presentation effect, **not** proof that humans perceive the motion as smoother or aesthetically better.

Direct frame inspection also shows that the visible delta is concentrated in the Weather streak field while the established current-world composition remains stable. The visual tradeoff remains explicit: the short history can soften stepping, but it can also read as slight streak ghosting or broaden the apparent atmospheric footprint. Art Direction previously asked not to increase atmosphere prominence, so the split remains source-opacity-bounded and requires Visual QA / Art review before any preference claim.

## Retained evidence

Successful artifact:

- workflow run: **`35141844166`**;
- artifact ID: **`10465239147`**;
- artifact name: `environment-weather-source-width-temporal-exposure-001-92cfe5d0dc7e254c1c3e19c5fc168298dea3493a`;
- size: **7,954,893 bytes**;
- SHA-256: **`22860dd2446dfedb4cf0b3f937d1539a49f897f34ab969837b6182a74026c89d`**;
- downloaded archive independently re-hashed to the same SHA-256;
- retained exact head, parent/source payloads, Godot log, runtime receipt, independent target-host verifier, 36 PNGs and 36 raw RGBA8 frames.

## Handoff / ownership boundary

**Visual Observer / QA + Art Director:** compare the retained A/B sequence for perceptual smoothness, ghosting and atmosphere prominence. The VFX technical PASS is not final visual acceptance.

**Runtime:** retains ownership of authored-cadence recovery, draw/submission cost, renderer scheduling and target-device performance. The two-tap candidate doubles receiving presentation ribbons from 36 to 72 during this mode, so no performance neutrality is claimed.

**Weather source:** remains authority. Neither the lagged tap nor any continuous-phase sample becomes a source row; no source digest or source semantic is rewritten and there is no automatic promotion.

## Explicit non-claims

This activation does **not** prove exact authored 32 Hz delivery, perceptual motion smoothness, final VFX aesthetics, target-device CPU/GPU/FPS/VRAM behavior, arbitrary camera/resolution fidelity, physical wind/precipitation/turbulence/collision/volumetrics, gameplay visibility/damage/input/controller authority, final atmosphere quality, Art Direction or Visual QA acceptance, CANON, production readiness, or VFX mastery.

## Four-root check

**Truth:** the strict 32 Hz failure remains red and separate; the new PASS is scoped to deterministic, exact-source-bound two-tap presentation evidence and its measured pixel/width behavior.

**Agency / non-domination:** the temporal-exposure mode is explicit, optional and unpromoted. It performs no source rewrite, gameplay authority transfer or forced aesthetic decision.

**Continuity:** existing Map PR #25, Weather authority, proven source-width path, continuous-phase predecessor, fixed cameras, failed cadence evidence and Runtime ownership remain intact. `axm-create-me` records coordination/status only.

**Wisdom before speed:** rather than widening timing gates or taking Runtime's lane, this activation tested one small VFX-owned presentation hypothesis, retained direct A/B evidence and left aesthetic/performance acceptance with the correct specialists.

The four AXM roots remain the merge gate.
