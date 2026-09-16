# 13 — Visual Observer / QA Specialist Status

Date: 2026-09-16
State: **PASS_CURRENT_WORLD_WEATHER_SOURCE_WIDTH_VISUAL_READABILITY_GATE / VFX STRUCTURE + LIVE TARGET-HOST PASSES PRESERVED / 68 RETAINED FRAMES REVIEWED / FIVE NEAR-PLANE CLIPS SHOW NO RETAINED-FRAME VISUAL ARTIFACT / FINAL ART PREFERENCE + ARBITRARY CAMERA + PLAYBACK + TARGET-DEVICE HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/13_visual_observer_qa.md`, the previous Visual QA state, and newest specialist/open-PR state across the constellation before selecting one new gate.

`axm-create-me` remains coordination-only. Visual QA changed no Map, Weather, Building, Nature, Object, Character, Animal, Universal Creation, Profession Fabric, or other product implementation. The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The immediately previous Visual QA result remains historical truth at blob `52f259828ca77728a59cc6aacf237882d01610ee`: **`FAIL_CURRENT_WORLD_BUILDING_MATERIAL_VISUAL_HIERARCHY_GATE`** for the exact historical Map PR #24 five-surface receiving state. Environment has since rebound the Building to the source-owned closed/outward topology while explicitly preserving that independent infill hierarchy FAIL. No Weather result below erases or repairs the Building material failure.

## Fresh constellation / duplication scan

The strongest new Visual QA surface is now **Map VFX PR #25 — `VFX: carry source-authored Weather width into current-world proof`**.

The reason this outranks repeating other review lanes is concrete:

- **Map VFX PR #25** was owner-failing during the previous QA activation, so QA correctly declined to duplicate it before a valid target-host surface existed. VFX has now repaired that lane, retained the failure history, and produced a complete exact-head 68-frame Godot A/B with an explicit Visual QA handoff.
- **Map Environment PR #24** has a newer source-topology rebind, but Environment explicitly preserves the already-known `infill_coating` hierarchy FAIL. There is no new final look claim to re-review until Materials publishes the requested infill-only successor.
- **Building Materials PR #3** has rebound its unchanged surface family to the new source topology; the requested current-world infill repair remains held, so there is no new material candidate for QA yet.
- **Character / Animal / Object** retain useful future visual surfaces, including connected shoulder/deformation, Animal elbow weighting/form candidates, and Object motion weight/style. None has a fresher complete integrated target-host handoff than the repaired VFX lane.
- **Runtime** remains a separate performance authority; proof-host primitive/submission observations are not a visual acceptance substitute.

Therefore this activation reviews only the newly valid **source-width Weather presentation** in the exact current-world target-host evidence. It does not reopen Weather source semantics, Environment composition, Building materials, or VFX implementation.

## Selected exact claim / held gate

Repository: `mike-axiom-mir/axm-map-design`

PR: **#25 — `VFX: carry source-authored Weather width into current-world proof`**

Exact tested/current PR head:

`15a03b7c3ba3aaa7c0475ca1a3091c15581f559b`

Observed PR state: **OPEN / DRAFT / MERGEABLE**. That metadata is not merge/CANON authority.

Exact parent VFX identity:

`e482d003853e52fc835f1797ddfb6506a50083ef`

Exact Weather variation source:

`05b26c4e82bbe0a4de0ee7bee34179efc58b9719`

Selected source-owned Weather seed:

`44021`

VFX's already-proven machine results remain separate and preserved:

- **`PASS_CURRENT_WORLD_WEATHER_SOURCE_WIDTH_STRUCTURE`**;
- **`PASS_CURRENT_WORLD_WEATHER_SOURCE_WIDTH_LIVE_TARGET_HOST`**.

The Visual QA question is narrower:

> In the exact two fixed 1100×720 current-world cameras and all 17 retained states, does carrying the 36 source-authored Weather streak widths create a real readable visual change without producing a visible clipping artifact or materially obscuring the pavilion/path/tree hierarchy in the retained evidence?

This is a visual-readability gate, not an aesthetic-preference or physical-weather gate.

## Exact retained evidence independently verified

Successful retained VFX artifact:

- artifact ID: **`10449666486`**;
- name: `environment-weather-source-width-current-world-001-15a03b7c3ba3aaa7c0475ca1a3091c15581f559b`;
- size: **7,745,715 bytes**;
- expected GitHub SHA-256: **`c1143322dc974ad21cff4e3baa53697cc4a58fc42caf55627077703f131011b5`**;
- Visual QA downloaded the archive and independently reproduced the exact same SHA-256;
- retained `exact-head.txt`: **`15a03b7c3ba3aaa7c0475ca1a3091c15581f559b`**.

Target host:

**Godot 4.7.2 GL Compatibility**.

The artifact contains:

- `17` retained world states;
- `2` fixed cameras: `path_eye` and `elevated_oblique`;
- `34` inherited line-control PNGs;
- `34` source-width ribbon candidate PNGs;
- **68 retained frames total**;
- a live runtime receipt, target-host receipt and Godot log.

The target-host receipt independently records:

- all `17 × 2 × 36 = 1,224` projected-width observations;
- maximum source-width residual **`0.00974698571769128 px`** against VFX's `0.05 px` acceptance bound;
- stable Weather and sapling resource identities;
- retained rear-tree culling state;
- stable per-camera counter sets within control and candidate presentation modes.

Candidate proof-host primitive counters differ from control while draw/object counters remain stable:

- `path_eye`: control `20 / 20 / 4392`, candidate `20 / 20 / 4536`;
- `elevated_oblique`: control `27 / 27 / 6150`, candidate `27 / 27 / 6294`.

Those are renderer observations only. Visual QA does not convert them into a Runtime acceptance or rejection.

## Near-plane failure boundary reproduced

The repaired VFX runtime explicitly records **5 near-plane endpoint clips**, all in `path_eye`:

- state `0`, `t=0.00000 s`: `wind-streak-001` + `wind-streak-005`;
- state `1`, `t=0.03125 s`: `wind-streak-001` + `wind-streak-005`;
- state `2`, `t=0.06250 s`: `wind-streak-005`.

The receiving implementation clips a crossing endpoint to the fixed camera near boundary rather than discarding the entire source streak. A fully-behind streak remains fail-closed in the owner lane.

Visual QA inspected the retained path-eye states spanning that clip interval and did **not** observe a giant edge spike, wedge, full-screen ribbon, discontinuous screen-space flare, or other obvious clipping artifact in those exact captured frames. That is a retained-frame observation only; it is not proof of unsampled continuous-time behavior between captures.

## Independent all-frame image measurements

Visual QA compared **all 34 matched control/candidate pairs**, not only the VFX specialist's representative samples.

Frame size is `1100 × 720 = 792,000` pixels.

### `path_eye`

Across all 17 states:

- changed pixels per pair: **680–747**;
- mean changed pixels: **717.5882352941177**;
- mean changed-frame coverage: **0.0906045751633987%**;
- coverage range: **0.08585858585858586%–0.09431818181818181%**;
- largest connected changed-pixel island per frame: **28–36 px**, mean **29.058823529411764 px**.

Inside the established pavilion review region `(346,256)-(754,438)` from the prior current-world QA comparison:

- mean changed pixels: **36.1764705882353**;
- mean regional coverage: **0.04833389526398559%**;
- regional coverage range: **0.04008176680428073%–0.07348323914118135%**.

### `elevated_oblique`

Across all 17 states:

- changed pixels per pair: **958–985**;
- mean changed pixels: **970.7058823529412**;
- mean changed-frame coverage: **0.12256387403446227%**;
- coverage range: **0.12095959595959595%–0.12436868686868686%**;
- largest connected changed-pixel island per frame: **10–14 px**, mean **11.647058823529411 px**.

Inside the established pavilion review region `(594,171)-(889,367)`:

- mean changed pixels: **221.2941176470588**;
- mean regional coverage: **0.3795001331579414%**;
- regional coverage range: **0.36870626972149817%–0.389285224310605%**.

These pixel counts are attribution/readability diagnostics for this exact retained pair set. They are not generic VFX-density thresholds and do not mean every sub-percent effect is automatically acceptable.

## Direct visual finding

Visual QA directly inspected matched states `0 / 8 / 16` in both cameras, including the path-eye start state where the runtime reports two clipped endpoints.

The candidate is visibly different from the inherited line control: source-width streaks read subtly thicker/more explicit rather than disappearing into the proof host's default line response.

The delta remains spatially sparse. In both fixed cameras the pavilion, route, trees and Object placements remain the dominant readable forms; the Weather width change does not turn into a broad veil or materially cover those silhouettes. Where streaks cross the Building region, the changed pixels remain small, disconnected line fragments rather than a new large occluding shape.

No retained frame shows a visible near-plane clipping spike/wedge or a source-width ribbon suddenly dominating the composition. This closes the specific visual-artifact/readability question that remained after VFX repaired its target-host failure.

This QA PASS does **not** mean the thicker source-authored width is aesthetically superior to the line control. Both remain viable visual choices from this evidence alone; Art Direction owns that preference.

## QA verdict

### VFX structure / live target-host — preserved

**`PASS_CURRENT_WORLD_WEATHER_SOURCE_WIDTH_STRUCTURE`**

**`PASS_CURRENT_WORLD_WEATHER_SOURCE_WIDTH_LIVE_TARGET_HOST`**

### Independent Visual QA gate — PASS

**`PASS_CURRENT_WORLD_WEATHER_SOURCE_WIDTH_VISUAL_READABILITY_GATE`**

Exact meaning:

> At exact Map PR #25 head `15a03b7c3ba3aaa7c0475ca1a3091c15581f559b`, using Weather seed `44021`, the exact 36 source-authored Weather widths create a real but sparse visual delta across all 17 retained states in both fixed 1100×720 Godot 4.7.2 GL Compatibility cameras. Direct inspection plus all-frame pixel comparison finds no retained-frame clipping spike/wedge and no material loss of pavilion/path/tree readability attributable to the width presentation. The five recorded near-plane endpoint clips remain visible in provenance but do not manifest as an obvious visual defect in the retained captures.

The PASS is bounded to this exact evidence surface. It is not a final-atmosphere or universal projection-method acceptance.

## Handoffs

### VFX / Map PR #25

Keep the exact source-width transport/near-plane boundary and failure history. Visual QA now clears the retained fixed-camera presentation for readability/artifact risk only. Do not generalize this PASS to arbitrary cameras, resolutions or continuous unsampled trajectories.

### 3D Art Director

The candidate is now free of an observed QA blocker in this exact fixed-camera proof. Art Direction can decide whether the slightly stronger Weather presence is preferable to the inherited thin-line presentation. QA does not pick the atmosphere style.

### Runtime / Optimization

The candidate adds proof-host primitives while keeping draw/object counters stable in this exact host. Profile actual target classes before adopting any performance claim; visual QA did not measure CPU/GPU time, overdraw or device FPS.

### Environment / Materials

No conclusion transfers to the separate Building infill hierarchy failure. The existing **`FAIL_CURRENT_WORLD_BUILDING_MATERIAL_VISUAL_HIERARCHY_GATE`** remains active until the requested infill-only successor is rendered and independently reviewed.

### Technical Art / Capability Cartography / UC

One Weather source, one seed and two fixed cameras are insufficient evidence to extract a generic camera-projected-ribbon contract into UC or promote a profession capability.

## Holds / explicit non-claims

This activation does **not** establish:

- that source-width Weather is aesthetically better than the line control;
- final atmosphere density, hierarchy, style or 3D Art Director acceptance;
- arbitrary camera, FOV, near-plane, resolution or renderer fidelity;
- continuous-time visual behavior between retained samples or wall-clock playback cadence;
- physical precipitation diameter, wind speed, force, turbulence, pressure, collision or volumetrics;
- gameplay visibility, damage, targeting or accessibility acceptance;
- target-device FPS, CPU/GPU time, overdraw, VRAM, battery, memory or production budgets;
- final Building material hierarchy or repair of the existing infill FAIL;
- CANON, production readiness, game readiness, Profession Fabric promotion, UC extraction or Visual Observer / QA mastery.

## Root gate

- **Truth:** the previous owner-failing VFX state was not reviewed as if it were complete; QA waited for a real exact-head target-host artifact, independently rehashed it, inspected direct frames and kept the five near-plane clips explicit.
- **Agency / non-domination:** QA clears only observed readability/artifact risk. VFX retains implementation ownership; Art Direction retains visual preference; Runtime retains performance authority; Weather retains source semantics.
- **Continuity:** the prior Building hierarchy FAIL remains active; VFX failure history, exact parent/source heads and retained control/candidate frames remain provenance points rather than being overwritten by the successful repair.
- **Wisdom before speed:** the result is intentionally limited to two fixed cameras, one source seed and retained snapshots instead of turning one repaired proof into a universal VFX or renderer claim.

The four AXM roots remain the merge gate.