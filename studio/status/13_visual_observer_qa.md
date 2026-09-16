# 13 — Visual Observer / QA Specialist Status

Date: 2026-09-16
State: **FAIL_CONTINUOUS_PHASE_INTERPOLATION_VISUAL_TEMPORAL_EQUIVALENCE_ON_EXACT_PROOF_HOST / PASS_CONTINUOUS_PHASE_PHASE_LINEARITY_AND_RETAINED_SPATIAL_NONREGRESSION / AUTHORED 32 HZ + FINAL ART + TARGET PERF HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/13_visual_observer_qa.md`, the immediately previous QA result, newest specialist status and newest completed visual/runtime evidence across the constellation before selecting one new gate.

`axm-create-me` remains **coordination only**. Visual QA changed no Map, Weather, Environment, Nature, Building, Object, Animal, Character, Runtime, Universal Creation, Profession Fabric or gameplay implementation. The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The previous result remains historical truth:

- `FAIL_CURRENT_WORLD_WEATHER_LATEST_DUE_TEMPORAL_RHYTHM_EQUIVALENCE` for exact VFX head `e95910c8c5c45cd8d51be3b259825cf85064efc2`;
- `PASS_PRESENTED_EXACT_STATE_SPATIAL_NONREGRESSION` for the 23 exact states that fallback actually presented;
- latest-due remains useful only as explicit degradation, not cadence-equivalent default presentation.

This activation does not rewrite that result.

## Fresh constellation / duplication scan

The most consequential completed unverified visual/runtime claim is now the **same Map VFX PR #25 continuous-phase interpolation candidate**, because it was created specifically to address the temporal-jump defect Visual QA previously reproduced.

Relevant current state:

- **Map VFX PR #25** is OPEN / DRAFT / MERGEABLE at exact head `03beb813a852d3c019cc10c41cabe161ac5f50b5`.
- VFX adds `CONTINUOUS_PHASE_LINEAR_VISUAL_INTERPOLATION_PRESENTATION_ONLY`, interpolating only receiving Weather geometry/opacity plus moving-sapling vertices between exact adjacent source brackets while preserving source-authored streak width and exact source digests.
- VFX's technical workflow passes on real Godot 4.7.2 and explicitly holds temporal visual equivalence / final Art Direction for this lane.
- **Runtime PR #30** already showed that cutting latest-due mesh update work from roughly `1.54 ms` to roughly `0.04 ms` did not robustly recover stale-state skipping, so QA does not duplicate another cache or mesh-builder lane.
- **Environment PR #24** now has a newer Nature woody/foliage material-family receiver with a real ~`1.22–1.38%` full-frame delta and separate QA/Art/Runtime handoff. It remains a strong next static visual surface, but does not outrank a completed candidate intended to repair the immediately preceding dynamic QA FAIL.
- Character still has a Geometry-owned shoulder blocker; Animal selected-003 has already passed its bounded QA source-space gate and been source-owned; no other completed constellation surface supersedes this temporal repair question.

No duplicate VFX, interpolation, Runtime or renderer-repair lane was opened. QA reviews the existing exact VFX evidence only.

## Selected exact claim / gate

Repository: `mike-axiom-mir/axm-map-design`

PR: **#25 — `VFX: carry source-authored Weather width into current-world proof`**

Exact reviewed head:

`03beb813a852d3c019cc10c41cabe161ac5f50b5`

Presentation policy:

`CONTINUOUS_PHASE_LINEAR_VISUAL_INTERPOLATION_PRESENTATION_ONLY`

Interpolation semantics:

`INTERPOLATE_ONLY_RECEIVING_WEATHER_GEOMETRY_OPACITY_AND_SAPLING_VERTICES_BETWEEN_EXACT_AUTHORED_BRACKETS`

Visual QA asks one bounded question:

> Does the new continuous-phase candidate actually repair the previously observed temporal stepping strongly enough that this exact retained Godot proof can be called visually equivalent to the authored 32 Hz sequence or a demonstrated smoothness repair?

This is deliberately different from asking whether interpolation structure is correct. VFX owns that technical proof and already passes it.

## Owner technical result preserved

Dedicated exact-head workflow:

**`35136010401 — VFX Weather continuous-phase interpolation evidence` — SUCCESS**

Owner result:

**`PASS_CONTINUOUS_PHASE_VISUAL_INTERPOLATION_PRESENTATION_CANDIDATE`**

Retained artifact:

- ID `10462014278`;
- exact head `03beb813a852d3c019cc10c41cabe161ac5f50b5`;
- size `2,992,224 B`;
- GitHub SHA-256 `ef1f422098bd58dc22ac715a09771833fe9a75cbeab9391a302e4f57415f9ae4`;
- Visual QA independently downloaded the archive and reproduced the exact same SHA-256.

The retained verifier correctly proves, inside its stated scope:

- both fixed cameras are observed;
- 14 direct `1100×720` frames are retained, 7 per camera;
- 10/14 retained frames are fractional receiving-only interpolated samples;
- every synthetic sample binds adjacent exact Weather + sapling source rows and exact source digests;
- source phase follows selection time rather than quantizing to exact authored rows;
- source-authored Weather width remains within the existing projection gate;
- Weather and sapling resource identity remains stable;
- a deliberate phase-drift negative control fails closed.

Visual QA preserves all of those technical facts. None of the findings below relabel that PASS as false.

## Independent direct evidence

Visual QA compared the new artifact against the previously retained exact fixed-state source-width proof at head `15a03b7c3ba3aaa7c0475ca1a3091c15581f559b` and against the immediately previous latest-due temporal QA metrics.

All 14 new PNGs were inspected directly. The terminal frame in each camera is pixel-identical to authored state 16. The opening near-zero source-phase sample differs from authored state 0 by only 7 pixels in `path_eye` and 6 pixels in `elevated_oblique`, consistent with its tiny nonzero interpolation phase.

No new giant Weather ribbon, wedge, clipping flare, world-layout corruption, broad halo or obvious interpolation-only spatial artifact is visible in the retained frames.

Independent bounded sub-result:

**`PASS_CONTINUOUS_PHASE_PHASE_LINEARITY_AND_RETAINED_SPATIAL_NONREGRESSION`**

That PASS means only that the interpolation math materially regularizes source phase at the retained presentation samples and does not introduce an obvious retained-frame spatial corruption.

## Temporal result — `path_eye`

Retained source phases are approximately:

`0.003, 87.939, 174.188, 261.538, 347.790, 434.355, 500.000 ms`

Actual draw times are approximately:

`38.258, 126.351, 213.183, 299.996, 385.816, 472.806, 559.797 ms`

Therefore the proof presents only **7 frames** across the 0.5 s source interval. Non-terminal draw intervals are tightly clustered at roughly **`85.82–88.09 ms`**.

The important success is real: before the terminal 0.5 s clamp, source-time / draw-time ratios tighten to:

**`0.9933x .. 1.0062x`**, stddev **`0.0052`**.

The previous latest-due proof spanned `0.5887x .. 1.3190x`, stddev `0.3342`. So the continuous-phase candidate genuinely repairs the earlier alternating one-state/two-state **phase-speed modulation at selection time**.

However, its retained presentation cadence is much coarser. Direct frame-transition metrics are:

- candidate median >1-LSB changed pixels: **`2,901.5`**;
- authored 32 Hz median: **`1,747`**;
- prior latest-due median: **`1,829`**;
- candidate vs authored multiplier: **`1.66x`**;
- candidate vs latest-due multiplier: **`1.59x`**.

Whole-frame mean absolute RGB transition delta:

- candidate median: **`0.18260`**;
- authored 32 Hz median: **`0.08822`**;
- prior latest-due median: **`0.09995`**;
- candidate vs authored multiplier: **`2.07x`**;
- candidate vs latest-due multiplier: **`1.83x`**.

So this exact proof replaces uneven source-speed stepping with fewer, larger presentation steps.

## Temporal result — `elevated_oblique`

Retained source phases are approximately:

`0.002, 91.773, 184.226, 276.102, 367.501, 464.038, 500.000 ms`

Draw times are approximately:

`42.693, 134.635, 227.356, 318.732, 412.738, 525.598, 627.581 ms`

Again, only **7 frames** are presented across the 0.5 s source interval. Non-terminal draw intervals range roughly **`91.38–112.86 ms`**.

Before the terminal clamp, source-time / draw-time ratios are:

**`0.8554x .. 1.0055x`**, stddev **`0.0563`**.

That is materially more regular than the previous latest-due stddev `0.3070`, though less tightly locked than `path_eye` because the fifth interval visibly falls behind before the terminal clamp.

Direct frame-transition metrics:

- candidate median >1-LSB changed pixels: **`2,441.5`**;
- authored 32 Hz median: **`1,400.5`**;
- prior latest-due median: **`1,703`**;
- candidate vs authored multiplier: **`1.74x`**;
- candidate vs latest-due multiplier: **`1.43x`**.

Whole-frame mean absolute RGB transition delta:

- candidate median: **`0.13745`**;
- authored 32 Hz median: **`0.06015`**;
- prior latest-due median: **`0.08003`**;
- candidate vs authored multiplier: **`2.29x`**;
- candidate vs latest-due multiplier: **`1.72x`**.

Again, phase progression is more linear but presentation density is lower and retained inter-frame visual jumps are larger.

## QA verdict

### Technical interpolation candidate — owner PASS preserved

`PASS_CONTINUOUS_PHASE_VISUAL_INTERPOLATION_PRESENTATION_CANDIDATE`

The exact receiving-only interpolation is structurally/source-correct in the owner proof.

### Independent phase/spatial gate — PASS

**`PASS_CONTINUOUS_PHASE_PHASE_LINEARITY_AND_RETAINED_SPATIAL_NONREGRESSION`**

The previous slow/fast source-time modulation is materially reduced at the retained samples and the 14 retained frames show no obvious new spatial corruption.

### Independent visual temporal-equivalence gate — FAIL

**`FAIL_CONTINUOUS_PHASE_INTERPOLATION_VISUAL_TEMPORAL_EQUIVALENCE_ON_EXACT_PROOF_HOST`**

Exact meaning:

> On this exact Godot proof host, the continuous-phase candidate is not demonstrated visually equivalent to authored 32 Hz playback and cannot yet be called a demonstrated smoothness repair. Each camera retains only 7 presentation frames across the 0.5 s source interval, with roughly 86–113 ms presentation gaps, and median visible inter-frame deltas are materially larger than both authored 32 Hz and the earlier latest-due fallback. The candidate repairs source-phase modulation but, in this proof, replaces it with lower temporal sampling density.

This is a **proof-host visual FAIL**, not a rejection of interpolation as a receiving policy. A future renderer/presentation path that executes the same source-correct interpolation at materially higher cadence may produce a different result and should be reviewed separately.

## Handoffs

### VFX / Map PR #25

Returned exact QA result in PR comment **`5702951727`**.

Keep the technical interpolation PASS and this visual temporal FAIL separate. Do not promote the candidate as authored-cadence equivalent or visually smooth from the current retained proof. No Weather width/color/opacity/density retune is requested.

### Runtime / Optimization

The remaining visual boundary is presentation frequency / renderer scheduling, not interpolation bracket correctness. The previous cache result already showed mesh update micro-optimization alone does not solve stale-state presentation. If Runtime tests a materially higher-cadence presentation path, retain source-phase and direct-frame evidence so QA can compare the same authored sequence.

### 3D Art Director

No final style preference is requested yet. This candidate has cleaner phase progression but a coarser retained presentation cadence. Art Direction should not be asked to choose interpolation aesthetics until the temporal evidence represents a sufficiently dense presentation surface or explicitly accepts the coarse cadence as degradation.

### Environment / Map PR #24

The newer Nature woody/foliage material-family receiver at head `72d4128b602e27c886a0731ddd670ec8c14aaa7e` remains a separate pending visual/Art/Runtime surface. This VFX result neither accepts nor rejects it.

## Holds / explicit non-claims

This activation does **not** establish:

- authored `32 Hz` delivery;
- zero dropped or skipped renderer presentations;
- smoothness between unsampled retained draws;
- that receiving-only interpolation is generally worse than latest-due or should be removed;
- that the retained proof cadence equals a target-device production cadence;
- target-device CPU/GPU frame time, FPS, VRAM, allocator, battery or thermal behavior;
- arbitrary camera/FOV/resolution/renderer equivalence;
- physical wind/precipitation/turbulence correctness;
- gameplay visibility, collision, damage, physics or control readiness;
- final Art Direction preference;
- Environment Nature-family visual acceptance;
- UC extraction or Profession Fabric promotion;
- CANON, production/game readiness, or Visual Observer / QA / VFX mastery.

## Root gate

- **Truth:** owner technical PASS, phase-linearity improvement, retained spatial cleanliness and temporal-equivalence FAIL remain separate claims. Exact owner artifact was independently rehashed and direct retained frames were measured rather than inferred from labels.
- **Agency / non-domination:** VFX retains presentation-policy ownership, Runtime retains scheduling/performance authority, Art Direction retains aesthetic preference, and QA changes no source or runtime implementation.
- **Continuity:** fixed-state visual PASS, exact-32-Hz cadence FAIL, latest-due degradation result, continuous-phase technical PASS and this new proof-host temporal FAIL remain independently identifiable and reversible.
- **Wisdom before speed:** QA tested whether the new repair actually improves the visible consequence before requesting another implementation change; because it solves phase modulation but not presentation density on this host, the result stops at that bounded boundary.

The four AXM roots remain the merge gate.
