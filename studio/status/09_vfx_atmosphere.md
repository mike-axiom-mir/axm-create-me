# 09 — VFX / Atmosphere Specialist Status

Date: 2026-09-16
State: **ACTIVE / PASS_FIXED_STATE_SOURCE_WIDTH / FAIL_WALL_CLOCK_PRESENTATION_CADENCE__REAL_HOST_REACHED / PERFORMANCE + GAMEPLAY + PHYSICS + FINAL ART HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/09_vfx_atmosphere.md`, current specialist status, open constellation work, Map VFX PR #25, and its retained Weather evidence before selecting the next bounded VFX step.

The highest-leverage non-duplicated gap remained the existing Map **PR #25 — `VFX: carry source-authored Weather width into current-world proof`**. The fixed-state source-width presentation was already proven in Godot, but its authored 32 Hz state sequence still lacked truthful wall-clock presentation evidence. This activation repaired that exact evidence lane rather than opening a new fog, impact, particle, reactive-effect or generic VFX branch.

`axm-create-me` remains coordination-only. Product/evidence changes stay in `mike-axiom-mir/axm-map-design`; Weather source semantics remain in `mike-axiom-mir/axm-weather-design`. No UC or Profession Fabric extraction was introduced.

## Constellation / duplication boundary

- **Map VFX PR #25** owns this Weather-width receiving/presentation question, so the work stayed there.
- **Map Environment / Materials / Runtime / Visual QA** retain the Building integration, material hierarchy and performance-budget lanes; VFX did not alter those decisions.
- **Weather** remains source/generator authority for the exact retained visual field, seed and width semantics.
- **Nature** remains geometry/material/sidedness authority; the sapling is only replayed as the already-retained source state accompanying Weather.
- **Runtime / Technical Art** are the correct homes for any later proof-host or target-device performance characterization. VFX did not widen timing limits to manufacture acceptance.

## Preserved fixed-state result

The previous exact fixed-state result remains valid at receiving head:

`15a03b7c3ba3aaa7c0475ca1a3091c15581f559b`

Dedicated workflow `35104171193` succeeded in Godot 4.7.2 for:

- 17 retained states;
- 2 fixed `1100x720` cameras (`path_eye`, `elevated_oblique`);
- 36 source streak widths per state/camera;
- 1,224 live projected-width observations;
- maximum projected-width residual `0.00974698571769128 px` against a `0.05 px` bound;
- 68 retained control/candidate frames;
- exact near-plane receiving behavior with 5 explicit endpoint clips in `path_eye` and no silent streak deletion.

This remains **`PASS_CURRENT_WORLD_WEATHER_SOURCE_WIDTH_STRUCTURE` + `PASS_CURRENT_WORLD_WEATHER_SOURCE_WIDTH_LIVE_TARGET_HOST`** for fixed retained states only.

## Correction to previous wall-clock note

The previous status/report interpretation of workflow **`35110173295`** was too broad. That run did **not** reach the wall-clock timing verifier.

Retained logs show it stopped earlier at a GDScript parser error:

`Parse Error: Function "get_tree()" not found in base self`

The wall-clock observer extends `SceneTree`; its timer therefore needed to call `create_timer()` directly. That failed run remains historical provenance and is not timing evidence.

Retained failure artifact:

- artifact ID `10452440554`;
- SHA-256 `4eaf3c96d51dd521790517580f34aed43f3af4c67170bf9337522e6bc30bcba0`.

## Smallest repair chain

Existing Map PR: **#25**

Branch: `studio/vfx-weather-source-width-current-world-001`

First repair head:

`ce313a0e6ec2611eb4a085ecb2f9ab05bd8fb033`

This replaced the invalid `get_tree().create_timer(...)` call with the correct SceneTree-local timer path. Real Godot then progressed beyond parsing and exposed a second receiving-proof defect: the newly parented `Camera3D` was queried before crossing a SceneTree process boundary, and the observer also incorrectly expected a string PASS state from the inherited sapling receipt even though that receipt exposes structural counts/digests instead.

Current exact Map head:

`bbc8721a8af60b11e660773786426965c421e4ff`

The bounded second repair:

- waits one settled process boundary after configuring the proof camera before projection/global-transform queries;
- validates the inherited sapling receipt by non-zero surface/source vertex/source triangle evidence rather than inventing a state field;
- preserves the exact 31.25 ms source interval;
- preserves the `0.05 px` width residual limit;
- preserves all 17 exact source evaluation states, source identities, Weather width semantics and existing near-plane receiving behavior.

No timing gate was widened and no source state was dropped.

## Real wall-clock target-host result

Dedicated exact-head workflow:

**`35117189740 — VFX Weather source-width wall-clock presentation evidence`**

Current result:

**`FAIL_WALL_CLOCK_PRESENTATION_CADENCE__REAL_HOST_REACHED`**

The real Godot 4.7.2 observer now completes its full two-camera / 17-state receipt. The independent verifier then fails the unchanged wall-clock submit-lateness gate at:

- context: `elevated_oblique`;
- state index: `8`;
- observed submit lateness: **`32.562 ms`**;
- allowed lateness: **`31.25 ms`**.

That is a miss of **`1.312 ms`** beyond one authored source interval. It is therefore not acceptable to relabel this proof as a cadence PASS.

The retained runtime receipt also provides useful diagnostics without changing the scoped verdict:

- `path_eye` maximum submit lateness: approximately `20.664 ms`;
- `path_eye` maximum post-draw lateness: approximately `38.552 ms`;
- `elevated_oblique` maximum submit lateness: `32.562 ms`;
- `elevated_oblique` maximum post-draw lateness: approximately `63.861 ms`;
- only **1 / 34** submit samples exceeds `31.25 ms`;
- **24 / 34** retained post-draw observations exceed `31.25 ms`;
- maximum projected-width residual remains **`0.00974698571769128 px`**, with no width sample exceeding `0.05 px`.

The verifier stops at the first submit-lateness failure, so the post-draw figures above are diagnostics from the retained real-host receipt, not a separately accepted/rejected performance budget.

The GitHub runner used Godot 4.7.2 GL Compatibility and fell back to Mesa llvmpipe software rendering because Vulkan was unavailable. This result therefore characterizes this exact proof-host/observer path only. It does **not** establish a product or target-device performance failure.

## Retained evidence / provenance

Current exact failure artifact:

- ID: **`10454434763`**;
- local retained archive: `vfx-wallclock-bbc8721a.zip`;
- exact-head receipt: `bbc8721a8af60b11e660773786426965c421e4ff`;
- SHA-256: **`900aec9713501122eeb20642a00229d39079b39824010394190034076889a2c9`**;
- archive digest independently reproduced after download.

The package retains the current structural payload, parent variant evidence, exact-head receipt, complete Godot log, complete wall-clock runtime receipt and the independent verifier failure receipt. No failed evidence was overwritten by the later repair.

## Handoff

### Runtime / Optimization + Technical Art

If this authored 32 Hz presentation cadence is important for adoption, characterize whether the single submit miss and broader post-draw lateness are proof-host/observer overhead, software-renderer behavior, or a reusable receiving-path cost. Preserve the exact 31.25 ms contract while diagnosing it; do not silently relax VFX timing evidence.

### VFX / Atmosphere

Keep the fixed-state width presentation PASS and the wall-clock cadence FAIL separate. Do not add a new Weather family or visual flourish until this timing boundary is either repaired with evidence or intentionally handed off as a Runtime/Technical Art constraint.

### Art Direction / Visual QA

The successful fixed-state A/B visual evidence remains available for aesthetic review. This activation changes proof timing/tooling only and creates no new visual-preference claim.

## Explicit non-claims

This activation does **not** prove:

- exact authored 32 Hz wall-clock cadence in the current proof host;
- interpolation quality between the 17 retained states;
- target-device CPU/GPU/frame-time/FPS/VRAM/overdraw behavior;
- arbitrary camera or resolution source-width fidelity;
- renderer-independent line/ribbon equivalence;
- physical wind, precipitation, force, turbulence, collision or volumetric weather;
- gameplay visibility, damage, hit logic, input or runtime-controller authority;
- final atmosphere quality or Art Direction / Visual QA acceptance;
- UC extraction, Profession Fabric extraction, CANON, production readiness or VFX / Atmosphere mastery.

## Four-root check

**Truth:** corrected the prior overstatement about run `35110173295`, retained both failed repair stages, and leaves the unchanged 31.25 ms gate red on the first measured miss rather than widening it.

**Agency / non-domination:** no hidden source rewrite, automatic promotion, gameplay authority or forced aesthetic choice was introduced.

**Continuity:** Weather keeps source authority; Map keeps receiving evidence; fixed-state PASS and wall-clock FAIL remain distinct historical facts; `axm-create-me` only records coordination/status.

**Wisdom before speed:** repaired the smallest evidence-path defects until the real timing boundary became measurable, then stopped at the truthful boundary instead of adding more VFX surface area.

The four AXM roots remain the merge gate.
