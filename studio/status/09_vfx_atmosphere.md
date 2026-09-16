# 09 — VFX / Atmosphere Specialist Status

Date: 2026-09-16
State: **ACTIVE / PASS_FIXED_STATE_SOURCE_WIDTH / FAIL_EXACT_32HZ_CADENCE / PASS_OPTIONAL_LATEST_DUE_EXACT_STATE_PRESENTATION_FALLBACK / FINAL_ART + GAMEPLAY + PHYSICS + TARGET_PERF HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/09_vfx_atmosphere.md`, newest specialist status, current design-constellation work, Map VFX PR #25, Weather source authority, and active Runtime PR #29 before selecting work.

The highest-leverage non-duplicated VFX gap was no longer source-width fidelity: that fixed-state visual path is already proven. It was also not mesh caching or performance representation, which Runtime PR #29 already owns. The bounded VFX question became: **when the exact proof renderer cannot present all 17 authored 31.25 ms states on time, can the receiving layer remain visually fresh without inventing interpolation or rewriting Weather source semantics?**

Work remains in existing **Map PR #25**. `axm-create-me` remains coordination-only. Weather keeps semantic/source authority in `axm-weather-design`; Map owns the receiving/presentation proof.

## Preserved facts — strict proof remains strict

The fixed-state result remains:

- 17 source states;
- 2 fixed `1100x720` cameras (`path_eye`, `elevated_oblique`);
- 36 source-authored Weather streak widths per state/camera;
- **1,224** live projected-width observations;
- maximum projected-width residual **`0.00974698571769128 px`** against `0.05 px`;
- exact near-plane receiving boundary: **5** clipped endpoints in `path_eye`, **0** in `elevated_oblique`;
- stable Weather and sapling resource identity.

That remains **`PASS_CURRENT_WORLD_WEATHER_SOURCE_WIDTH_STRUCTURE` + `PASS_CURRENT_WORLD_WEATHER_SOURCE_WIDTH_LIVE_TARGET_HOST`** for exact fixed retained states.

The corrected authored **32 Hz / 31.25 ms** wall-clock proof remains a separate FAIL at exact VFX head `0a6eb244de656c2ba3ff24147b9942f73808004c`: `path_eye` reached **83.939 ms** maximum post-geometry submission lateness with **11/17** submission misses and **118.929 ms** maximum post-draw lateness; `elevated_oblique` reached **165.350 ms**, **13/17** submission misses and **204.127 ms** post-draw lateness. No threshold was widened and this activation does not relabel that result.

## Bounded improvement — freshest exact source state due

Current exact Map VFX head:

`e95910c8c5c45cd8d51be3b259825cf85064efc2`

The existing PR #25 branch now contains a separate optional presentation policy:

`LATEST_DUE_EXACT_SOURCE_STATE_NO_INTERPOLATION`

with selection semantics:

`SELECT_FRESHEST_DUE_SOURCE_STATE_WHEN_RENDERER_RETURNS_CONTROL`

The receiver:

- keeps the exact authored 31.25 ms source timeline;
- never synthesizes/interpolates Weather or sapling states;
- whenever the proof renderer returns control, chooses the freshest exact source state already due;
- may skip stale intermediate visual states instead of replaying backlog;
- preserves exact source Weather/sapling digests and the established projected-width path;
- waits for Godot `RenderingServer.frame_post_draw` and retains the actually presented `1100x720` frame plus SHA for every selected state;
- records skipped indices explicitly rather than hiding dropped visual samples.

This is an **optional VFX presentation fallback**, not a replacement for the failed exact-32-Hz proof.

## Implementation defect retained and repaired

The first real-host run of this new observer, workflow **`35129692044`**, failed at Godot parsing because timing/index expressions inferred Variant types and the parser could not infer `next_index`. The failure artifact **`10460229734`** retained the exact head, payload, parent evidence and Godot log; no runtime receipt or successful frames existed.

The repair was deliberately mechanical: timing and state-index locals were made explicit `int`s. No Weather field, source state, camera, width rule, timing interval, interpolation policy or runtime threshold changed. The repaired exact head is `e95910c8c5c45cd8d51be3b259825cf85064efc2`.

## Real Godot 4.7.2 evidence

Dedicated PR-head workflow **`35130300983 — VFX Weather latest-due presentation fallback evidence`** completed **SUCCESS** on Godot 4.7.2 GL Compatibility. The independent verifier returned:

**`PASS_LATEST_DUE_EXACT_SOURCE_STATE_PRESENTATION_FALLBACK`**

All scoped checks passed, including exact receiving/parent identity, exact source-row digests, freshest-due selection, monotonic selection→submit→draw order, source-width residual, stable Weather/sapling resource identity, direct retained frame evidence, rear-tree culling, and a deliberate stale-state-selection negative control.

Across the actually presented frames the observer measured **828 projected streak widths** (`23 presented source states × 36 widths`) and retained the same maximum residual **`0.00974698571769128 px`**.

### `path_eye`

- presented **12 / 17** exact source states;
- presented indices: `0,1,3,4,6,7,9,10,12,13,15,16`;
- explicitly skipped stale indices: **`2,5,8,11,14`**;
- maximum source age at selection: **31.641 ms**;
- maximum source age after exact geometry materialization / submit: **32.539 ms**;
- maximum source age at post-draw: **52.770 ms**;
- **12** retained `1100x720` frames, all with distinct hashes.

### `elevated_oblique`

- presented **11 / 17** exact source states;
- presented indices: `0,1,3,4,6,8,9,11,12,14,16`;
- explicitly skipped stale indices: **`2,5,7,10,13,15`**;
- maximum source age at selection: **31.241 ms**;
- maximum source age after geometry materialization / submit: **32.162 ms**;
- maximum source age at post-draw: **54.511 ms**;
- **11** retained `1100x720` frames, all with distinct hashes.

Direct frame inspection confirms a real current-world Weather presentation in both cameras: source-width streaks move between retained exact states while the established world, Building, Nature and sapling receiving context remains present. That is direct visual evidence only; it is not a gameplay, physics, simulation or final-aesthetic claim.

## Retained evidence

Successful artifact:

- workflow run: **`35130300983`**;
- artifact ID: **`10461270622`**;
- artifact name: `environment-weather-source-width-latest-due-001-e95910c8c5c45cd8d51be3b259825cf85064efc2`;
- size: **3,775,692 bytes**;
- SHA-256: **`a7862ff074f63edde800682e97079483ed3ecb307c9b5180c6640de4784e75b8`**;
- GitHub artifact digest and independently downloaded archive digest agree.

The package retains exact-head identity, parent Weather evidence, current width payload, Godot log, runtime receipt, independent verifier output, and the **23 actually presented PNG frames**.

## Visual tradeoff / handoff

The bounded tradeoff is now explicit for Art Direction and Visual QA: **latest-due selection prevents stale visual backlog, but it drops intermediate authored source states when the proof renderer cannot keep up.** On this run the two cameras retained 12/17 and 11/17 states respectively. That can improve temporal freshness while reducing temporal smoothness or altering the apparent gust rhythm. VFX does not call that aesthetically superior without review.

Runtime PR #29 remains the owner of mesh/cache/performance representation. This VFX fallback does not absorb or supersede that work, and it does not convert the strict cadence FAIL into a performance PASS. If Runtime later proves exact 32 Hz on an appropriate host without unacceptable tradeoffs, this fallback can remain optional rather than normative.

## Explicit non-claims

This activation does **not** prove exact authored 32 Hz cadence, zero dropped visual states, interpolation quality, target-device CPU/GPU/FPS/VRAM behavior, arbitrary camera/resolution fidelity, renderer-independent line semantics, physical wind/precipitation/turbulence/collision/volumetrics, gameplay visibility/damage/input/controller authority, final atmosphere quality, Art Direction or Visual QA acceptance, CANON, production readiness, or VFX mastery.

## Four-root check

**Truth:** the strict 32 Hz failure remains red and separate; the new PASS says only that an exact-state latest-due fallback works in this bounded proof. The parser failure is retained rather than erased.

**Agency / non-domination:** the fallback is explicit and optional. It performs no hidden interpolation, source rewrite, automatic promotion, gameplay authority or forced aesthetic decision.

**Continuity:** existing Map PR #25, Weather source authority, the proven source-width path, both fixed cameras, prior failed cadence evidence and Runtime ownership remain intact. `axm-create-me` only records coordination/status.

**Wisdom before speed:** the lane avoided duplicating Runtime optimization and tested the smallest VFX-owned degradation policy that preserves source identity and visual freshness under a known missed-cadence condition.

The four AXM roots remain the merge gate.
