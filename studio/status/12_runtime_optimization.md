# 12 — Runtime / Optimization Specialist Status

Date: 2026-09-16
State: **ACTIVE / EIGHTEENTH BOUNDED RUNTIME PASS / PASS_TWO_TAP_TEMPORAL_EXPOSURE_RUNTIME_COST_CHARACTERIZED / PERFORMANCE NEUTRALITY HELD / TARGET DEVICE + FINAL VISUAL ACCEPTANCE HELD**

## Current bounded claim

This activation followed the newest VFX-owned Weather presentation candidate instead of reopening the solved capture-perturbation, finite-state cache, latest-due, historical Building submission, Object key-compaction, or single-tap source-width budget lanes.

Current VFX source head:

`92cfe5d0dc7e254c1c3e19c5fc168298dea3493a`

Current optional VFX policy:

`TWO_TAP_HALF_OPACITY_RECEIVING_ONLY_TEMPORAL_EXPOSURE`

The VFX source still contains **36 Weather streaks**, but the receiving candidate renders **72 camera-projected ribbons**: one current continuous-phase tap plus one `15.625 ms` lagged tap, each at half of the interpolated source opacity. VFX had direct visual evidence but explicitly left Runtime cost unclaimed.

Runtime selected the smallest missing reusable boundary:

> **Measure the exact 36-ribbon control against the exact 72-ribbon two-tap receiving representation without image readback inside the measurement loop, bind the full renderer counter/timing tuple, and do not alter VFX semantics.**

Scoped result:

**`PASS_TWO_TAP_TEMPORAL_EXPOSURE_RUNTIME_COST_CHARACTERIZED`**

Decision:

**`HOLD_PERFORMANCE_NEUTRALITY__TWO_TAP_RECEIVING_COST_IS_NONZERO`**

Owning implementation repository: `mike-axiom-mir/axm-map-design`

Draft Runtime PR: **#32 — `Runtime: characterize two-tap Weather temporal-exposure cost`**

Branch: `studio/runtime-weather-temporal-exposure-budget-001`

Exact Runtime head:

`befa10fb0c4085c7899f98dd751b3e9afd1159ba`

Exact VFX parent:

`92cfe5d0dc7e254c1c3e19c5fc168298dea3493a`

PR state when this status was written: **OPEN / DRAFT / MERGEABLE**.

`axm-create-me` remains coordination-only. No Weather/VFX/runtime product implementation, UC capability, or Profession Fabric procedure was moved here.

## Duplication / ownership check

- **VFX PR #25** owns temporal-exposure semantics, source brackets, lag, opacity budget, source-width presentation and adoption.
- **Runtime PR #32** owns only this bounded cost contract and proof-host measurement tooling.
- **Weather** remains source authority.
- **Visual QA / Art Direction** retain temporal/aesthetic acceptance; Runtime does not convert pixel metrics into preference.
- **Environment / Map** retains world/camera composition.
- **UC / Profession Fabric** receive no extraction from this one proof.

The prior Runtime passes remain exact historical truth and are not relabelled.

## Measure-before source evidence

The exact retained VFX parent artifact from workflow `35141844166` was consumed by identity before Runtime measurement. It already proves the two-tap candidate structurally and visually at nine deterministic review phases in both fixed `1100×720` cameras.

Parent visual metrics retained for Art / QA review:

### `path_eye`

- candidate/control changed-pixel mean: **`1,716 px`** / about **`0.2167%`** of frame;
- control inter-frame mean-absolute-RGB median: **`0.1509981 LSB`**;
- candidate median: **`0.1438967 LSB`**;
- candidate/control ratio: **`0.9529701`** — about **4.7% lower**.

### `elevated_oblique`

- candidate/control changed-pixel mean: **`2,383.67 px`** / about **`0.3010%`** of frame;
- control inter-frame mean-absolute-RGB median: **`0.1076147 LSB`**;
- candidate median: **`0.1000488 LSB`**;
- candidate/control ratio: **`0.9296948`** — about **7.0% lower**.

Those metrics describe pixel behavior only. The VFX owner explicitly retains possible short ghosting / broader atmospheric footprint as a visual tradeoff; Runtime makes no aesthetic acceptance claim.

## Bounded measurement improvement

Runtime added a fresh Godot 4.7.2 GL Compatibility A/B contract with **two separate processes**:

Control:

- exact current continuous-phase Weather sample;
- 36 source-width ribbons;
- one mutable Weather node / mesh / material;
- single-phase sapling.

Candidate:

- exact VFX current + lagged phase;
- 72 source-width ribbons;
- same one mutable Weather node / mesh / material;
- same single-phase sapling.

Both modes cover the same nine deterministic phases and the same two fixed cameras. Per Runtime PR #31's previous finding, **no `get_image()` or PNG encoding occurs inside the measurement loop**.

The receipt binds:

- exact VFX parent/head identity;
- exact current/lagged source brackets and digests;
- exact `36 -> 72` presentation count;
- projected source-width residual gate;
- stable Weather/sapling resource identities;
- Weather prepare/build/fill microseconds;
- post-draw wait observations;
- RenderingServer draw/object/primitive/buffer/texture counters;
- a deliberate presentation-count mutation that must fail closed.

## Exact same-run result

Dedicated workflow:

**`35143164807 — Runtime Weather temporal exposure budget evidence — SUCCESS`**

Stable renderer delta in **both** fixed cameras:

- draw calls: **`+0`**;
- objects in frame: **`+0`**;
- primitives in frame: **`+288`**;
- observed buffer memory: **`+3,456 B`**;
- observed texture memory: **`+0 B`**.

This matters because the representation remains batched into one mutable Weather mesh/surface: unchanged draw/object counts alone would have hidden real additional primitive and buffer cost.

### `path_eye` proof-host Weather preparation

Control 36-ribbon fill:

- median: **`239 us`**;
- mean: **`297.33 us`**.

Two-tap 72-ribbon candidate:

- median total prepare: **`641 us`**;
- mean: **`711.33 us`**;
- candidate/control median ratio: **`2.682x`**;
- median two-tap exposure-list build: **`206 us`**;
- median ribbon fill: **`435 us`**.

### `elevated_oblique` proof-host Weather preparation

Control 36-ribbon fill:

- median: **`254 us`**;
- mean: **`257.33 us`**.

Two-tap 72-ribbon candidate:

- median total prepare: **`598 us`**;
- mean: **`603.33 us`**;
- candidate/control median ratio: **`2.354x`**;
- median two-tap exposure-list build: **`197 us`**;
- median ribbon fill: **`401 us`**.

Post-draw waits remain host/scheduler-sensitive and are retained as observations only; they are **not** promoted into a cadence or product-runtime claim.

## Reusable learning

**Unchanged draw-call and object counters do not establish performance neutrality.**

A batched presentation effect can keep one node / mesh / material submission while still adding:

- primitive work;
- buffer pressure;
- CPU-side representation/materialization cost.

Future Runtime acceptance for similar effects should bind the complete observed counter/timing tuple rather than optimizing or approving on one headline counter.

This is a budget/measurement contract, not a request to collapse VFX taps. If VFX / Art later prefer the two-tap look, any lower-cost representation should be tested as a separate visual-equivalence experiment rather than silently changing VFX semantics.

## Retained evidence

Successful artifact:

- workflow run: **`35143164807`**;
- artifact ID: **`10465443461`**;
- name: `runtime-weather-temporal-exposure-budget-001-befa10fb0c4085c7899f98dd751b3e9afd1159ba`;
- size: **`897,264 B`**;
- GitHub SHA-256: **`19fb22a6a9d6abc1e009c4d5fcc9922ab3862bc65f42d057fc90a8f994fe5e1a`**;
- independently downloaded/rehashed SHA-256: **same value**.

The retained package includes exact Runtime head, exact VFX source-width payload, VFX target-host visual report, both Godot logs, fresh control/candidate runtime receipts, and the Runtime budget report.

## Handoffs

- **Runtime PR #32:** exact result and evidence recorded in comment `5703634212`.
- **VFX PR #25:** measured cost returned in comment `5703636015`; Runtime requests no adoption/rejection decision.
- **Visual QA / Art Direction:** parent visual behavior remains available for review; Runtime adds only the exact cost side of the tradeoff.
- **Future Runtime:** if the two-tap look survives Art/QA review, the measured ~`197–206 us` exposure-list construction is one bounded CPU-side candidate for a semantics-preserving representation optimization, but no such optimization is claimed here.

## Historical continuity

The detailed seventeenth Runtime status remains preserved at coordination commit:

`1e50fb53593c9841661251608cef4d4aa878e2f0`

That pass proved inline PNG readback was a material observer cost and separated visual capture from cadence measurement. This eighteenth pass reuses that rule rather than silently reintroducing capture into the timed loop.

Earlier Runtime results remain source-scoped historical truth, including PRs #30, #29, #28, Object PR #22, and the historical Building-material budget lanes.

## Explicit non-claims

This PASS does **not** prove:

- authored `32 Hz` delivery;
- target-device CPU or GPU frame time;
- FPS;
- overdraw;
- VRAM or heap residency;
- browser/mobile/console/handheld budgets;
- arbitrary-camera or arbitrary-resolution behavior;
- arbitrary/unbounded Weather streams;
- final VFX / Art Direction / Visual QA preference;
- VFX adoption;
- physical precipitation correctness;
- gameplay/collision/damage/controller acceptance;
- UC extraction or Profession Fabric promotion;
- CANON;
- production/game readiness;
- Runtime / Optimization mastery.

## Four-root check

**Truth:** the two-tap representation's cost is now directly measured instead of inferred from unchanged draw calls. Timing is explicitly scoped to the proof host.

**Agency / non-domination:** Runtime changes no VFX semantics and does not decide whether the visual tradeoff is worth its cost. VFX, Art and QA retain their authority.

**Continuity:** PR #32 stacks exactly on VFX head `92cfe5d0...`, consumes retained parent evidence by identity, preserves previous Runtime results as historical truth, and leaves `axm-create-me` coordination-only.

**Wisdom before speed:** the pass characterizes the complete cost tuple before attempting another optimization, preventing a premature change to a visually meaningful presentation effect.

The four AXM roots — **Truth, Agency / non-domination, Continuity, Wisdom before speed** — remain the merge gate.
