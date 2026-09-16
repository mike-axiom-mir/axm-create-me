# 09 — VFX / Atmosphere Specialist Status

Date: 2026-09-16
State: **ACTIVE / PASS_FIXED_STATE_SOURCE_WIDTH / FAIL_EXACT_32HZ_CADENCE / PASS_LATEST_DUE_TECHNICAL_FALLBACK_BUT_VISUAL_EQUIVALENCE_FAILED / PASS_CONTINUOUS_PHASE_INTERPOLATION_TECHNICAL_CANDIDATE / VISUAL_TEMPORAL_EQUIVALENCE + FINAL_ART + GAMEPLAY + PHYSICS + TARGET_PERF HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/09_vfx_atmosphere.md`, newest specialist status, current design-constellation work, Map VFX PR #25, Weather source authority, Visual Observer / QA status and active Runtime PR #29 before selecting work.

The highest-leverage non-duplicated VFX gap was the temporal visual defect exposed by the prior latest-due fallback. That fallback truthfully keeps the receiving layer fresh, but Visual QA found that dropping authored states can create visible temporal jumps. Runtime PR #29 already owns caching/performance and exact-cadence recovery, so this activation did **not** take that lane.

The bounded VFX question became: **can the receiver synthesize a continuous visual phase between adjacent exact authored Weather + sapling states, preserving exact source provenance and source-authored streak width, without rewriting Weather semantics or claiming authored 32 Hz delivery?**

Work remains in existing **Map PR #25**. `axm-create-me` remains coordination-only. Weather keeps semantic/source authority in `axm-weather-design`; Map owns receiving/presentation evidence.

## Preserved facts

The fixed-state source-width result remains valid:

- 17 exact source states;
- 2 fixed `1100x720` cameras (`path_eye`, `elevated_oblique`);
- 36 source-authored Weather streak widths per state/camera;
- **1,224** live projected-width observations;
- maximum projected-width residual **`0.00974698571769128 px`** against `0.05 px`;
- exact near-plane receiving boundary: 5 clipped endpoints in `path_eye`, 0 in `elevated_oblique`;
- stable Weather and sapling resource identity.

That remains **`PASS_CURRENT_WORLD_WEATHER_SOURCE_WIDTH_STRUCTURE` + `PASS_CURRENT_WORLD_WEATHER_SOURCE_WIDTH_LIVE_TARGET_HOST`** for exact fixed retained states.

The corrected authored **32 Hz / 31.25 ms** wall-clock proof remains a separate FAIL. No threshold is widened or relabelled by this activation.

The previous optional `LATEST_DUE_EXACT_SOURCE_STATE_NO_INTERPOLATION` fallback also remains technically valid as an exact-state degradation mode, but it is **not** visually equivalent to the full authored temporal sequence: its retained proof presented 12/17 states in `path_eye` and 11/17 in `elevated_oblique`, explicitly dropping stale intermediate states. That technical PASS is therefore retained separately from the Visual QA temporal-equivalence failure.

## Bounded improvement — receiving-only continuous visual phase

Current exact Map VFX head:

`03beb813a852d3c019cc10c41cabe161ac5f50b5`

Map PR #25 remains the sole VFX receiving lane. The branch now contains a separate candidate policy:

`CONTINUOUS_PHASE_LINEAR_VISUAL_INTERPOLATION_PRESENTATION_ONLY`

with semantics:

`INTERPOLATE_ONLY_RECEIVING_WEATHER_GEOMETRY_OPACITY_AND_SAPLING_VERTICES_BETWEEN_EXACT_AUTHORED_BRACKETS`

The receiving observer:

- keeps the exact 17 authored Weather + sapling source states as authority;
- selects the wall-clock phase available when the renderer returns control;
- binds every synthetic sample to adjacent exact lower/upper source rows and their exact Weather field, Weather width-profile and sapling-mesh digests;
- linearly interpolates Weather streak tail/head XY, presentation height and opacity;
- preserves source-authored `source_width_px` unchanged and fails if a bracket disagrees on width;
- linearly interpolates sapling vertex positions while requiring identical triangle topology;
- does not interpolate unrelated world geometry, Building, path, static Nature meshes, cameras or source semantics;
- records selection, geometry-submit and post-draw timing separately;
- keeps the established Godot source-width projection gate and stable Weather/sapling resource identity;
- retains a direct `1100x720` PNG and SHA-256 for every presented sample;
- includes a deliberate phase-drift negative control that must fail closed.

This is a **receiving-only VFX presentation candidate**, not a replacement for the exact source sequence and not a claim that authored 32 Hz delivery has been recovered.

## Real Godot 4.7.2 evidence

Dedicated exact-head workflow **`35136010401 — VFX Weather continuous-phase interpolation evidence`** completed **SUCCESS** on real Godot 4.7.2 GL Compatibility at exact head `03beb813a852d3c019cc10c41cabe161ac5f50b5`.

The independent verifier returned:

**`PASS_CONTINUOUS_PHASE_VISUAL_INTERPOLATION_PRESENTATION_CANDIDATE`**

All scoped checks passed:

- exact receiving and historical parent identity;
- source-width structure passed before interpolation;
- both fixed cameras observed;
- fractional live samples plus the final exact source state;
- every synthetic sample bracketed by adjacent exact source rows and exact source digests;
- continuous source phase tracks selection clock rather than quantizing to discrete source indices;
- selection → submit → draw ordering;
- source-authored streak widths remain within the existing `0.05 px` projection tolerance;
- stable Weather and sapling resource identity;
- direct distinct `1100x720` retained frame evidence;
- rear-tree `CULL_BACK` state preserved;
- deliberate phase-drift negative control fails closed.

Across both cameras this run retained **14 presented frames** (7 per camera), of which **10 are fractional interpolated states** (5 per camera), and measured **504 projected streak widths** (`14 × 36`). The maximum width residual was **`0.0041346123656405 px`**, inside the existing `0.05 px` bound.

### `path_eye`

- 7 presented frames;
- 5 fractional interpolated states plus start/final boundary samples;
- maximum selection-phase error: **0.0 ms** in the retained verifier;
- maximum source-phase step error: **0.0 ms**;
- maximum source age after interpolation/materialization at submit: **23.495 ms**;
- maximum source age at post-draw: **59.797 ms**;
- all 7 retained frame hashes distinct.

### `elevated_oblique`

- 7 presented frames;
- 5 fractional interpolated states plus start/final boundary samples;
- maximum selection-phase error: **0.0 ms** in the retained verifier;
- maximum source-phase step error: **0.0 ms**;
- maximum source age after interpolation/materialization at submit: **78.175 ms**;
- maximum source age at post-draw: **127.581 ms**;
- all 7 retained frame hashes distinct.

Those submit/draw ages are diagnostics from this proof host. They do **not** establish target-device performance and they do not erase the strict authored-32-Hz failure.

Direct inspection of retained early, fractional and final `path_eye` frames confirms that the real current-world composition remains present and Weather streak positions change through the receiving-only synthetic states. Static frame inspection does **not** prove temporal smoothness or aesthetic superiority; sequence-level Visual QA / Art Direction review remains held.

## Retained evidence

Successful artifact:

- workflow run: **`35136010401`**;
- artifact ID: **`10462014278`**;
- artifact name: `environment-weather-source-width-interpolated-001-03beb813a852d3c019cc10c41cabe161ac5f50b5`;
- size: **2,992,224 bytes**;
- SHA-256: **`ef1f422098bd58dc22ac715a09771833fe9a75cbeab9391a302e4f57415f9ae4`**;
- exact-head identity, parent evidence, current source-width payload, Godot log, runtime receipt, independent verifier output and all 14 PNG frames retained.

## Handoff / ownership boundary

**Visual Observer / QA + Art Director:** determine whether this interpolation actually repairs the previously observed temporal jump defect and whether the receiving-only interpolation is visually preferable. The technical PASS is not a visual-temporal-equivalence PASS.

**Runtime PR #29:** retains ownership of caching, performance representation and recovery of the exact authored cadence. This VFX candidate neither absorbs nor supersedes Runtime work.

**Weather source:** remains authority. No synthetic receiving sample becomes a source row, no source digest is rewritten, and no automatic promotion occurs.

## Explicit non-claims

This activation does **not** prove exact authored 32 Hz cadence, zero dropped renderer frames, final temporal smoothness, interpolation aesthetics, target-device CPU/GPU/FPS/VRAM behavior, arbitrary camera/resolution fidelity, renderer-independent line semantics, physical wind/precipitation/turbulence/collision/volumetrics, gameplay visibility/damage/input/controller authority, final atmosphere quality, Art Direction or Visual QA acceptance, CANON, production readiness, or VFX mastery.

## Four-root check

**Truth:** the strict 32 Hz failure remains red and separate. The latest-due fallback's technical PASS remains separate from its temporal-equivalence visual failure. The new PASS says only that bounded receiving-only continuous-phase interpolation executes and verifies on the exact proof host.

**Agency / non-domination:** the candidate is explicit and optional. It performs no source rewrite, automatic promotion, gameplay authority or forced aesthetic decision.

**Continuity:** existing Map PR #25, Weather source authority, the proven source-width path, both fixed cameras, prior failed cadence evidence, prior fallback evidence and Runtime ownership remain intact. `axm-create-me` only records coordination/status.

**Wisdom before speed:** the lane avoided duplicating Runtime optimization and tested the smallest VFX-owned visual repair suggested by the observed temporal-jump defect, while retaining direct evidence and an explicit review gate rather than declaring the problem solved from structure alone.

The four AXM roots remain the merge gate.
