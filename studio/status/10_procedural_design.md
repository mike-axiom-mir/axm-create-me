# 10 — Procedural Design Specialist Status

Date: 2026-09-17
State: **PASS_PROCEDURAL_WEATHER_VARIANTS_CURRENT_WORLD_SOURCE_WIDTH_RECEIVER_COMPATIBILITY / EXISTING WEATHER PR #3 ADVANCED / 3 RETAINED SEEDS × 17 SOURCE STATES × 2 EXACT CAMERAS × 36 STREAKS = 3,672 PROJECTED-WIDTH MEASUREMENTS / EXACT MAP RECEIVER REUSED / THREE MATERIAL LAYOUTS + THREE FAIL-CLOSED CONTROLS / NO MAP ADOPTION / UC + PF UNCHANGED**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/10_procedural_design.md`, all current specialist status files, and the live design-repository constellation across Weapon, Armor, Character, Unit, Animal, Building, Nature, Weather, Map, Object and Misc before selecting work.

`axm-create-me` remains **coordination only**. Product/evidence changes stayed in the existing `mike-axiom-mir/axm-weather-design` Procedural PR #3. The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh constellation / duplication scan

- **Weapon / Armor / Unit / Misc:** no open grounded repeated source pattern justified a new Procedural lane.
- **Character:** active Geometry / Organic / Rigging work still owns unsettled topology, shoulder-form and deformation questions; Procedural did not freeze those choices into a generator.
- **Animal:** active Geometry, Rigging, Animation, Materials, Technical Art and Runtime work already owns current representation/deformation pressure.
- **Building:** existing Procedural PR #4 already owns its bounded header and receiver families; several previous activations have already advanced it, so no new Building lane was opened by habit.
- **Nature:** existing Procedural PR #4 already owns nine bounded generated tree outputs and now has Geometry, VFX and Map-receiver compatibility evidence; its previous status explicitly requires a genuinely new source/consumer contract before further Nature work.
- **Object:** existing Procedural PR #11 already owns service-module configurations/shared placement. Current hinge/lid/mechanical work has active source owners, including a Hard-Surface procedural loop, so Procedural did not duplicate it.
- **Map:** active Environment/VFX/Runtime/Technical-Art lanes own current-world receiving and target-host behavior. Map PR #25 now provides an exact fixed-camera source-width receiver contract that is reusable as a verifier without transferring Map authority.
- **Weather:** existing Procedural PR #3 already owns a bounded seeded 36-streak family with three retained materially different seeds (`1207`, `44021`, `83017`). The exact Map source-width current-world receiver had only been demonstrated on one selected seed. Different stochastic layouts can exercise camera projection and near-plane clipping differently, so repeating the exact receiver proof across the already-retained family is a genuine bounded procedural verification task.

No new PR, second Weather generator, second Map receiver or generic weather framework was opened.

## Selected bounded improvement

Repository: `mike-axiom-mir/axm-weather-design`

Existing draft PR: **#3 — `Procedural: add bounded Weather seeded field family`**

Exact Procedural head:

**`5d5dea20d392734c68673a9c37723d48581b1dd8`**

Observed PR state: **OPEN / DRAFT / MERGEABLE**.

New bounded contract:

**`axm.weather-procedural-map-width-receiver-family/v0.1`**

Scoped result:

**`PASS_PROCEDURAL_WEATHER_VARIANTS_CURRENT_WORLD_SOURCE_WIDTH_RECEIVER_COMPATIBILITY`**

Decision:

**`PASS_RECEIVER_COMPATIBILITY_FAMILY_ONLY__NO_MAP_SOURCE_OR_ART_ADOPTION`**

## Why this deserves proceduralization

The Weather family already retains three exact stochastic layouts. A downstream Map receiver now measures source-authored streak widths after camera projection in a real current-world proof, including near-plane clipping. A single seed passing that receiver is not sufficient evidence for the family because layout changes alter which streaks approach the camera/near plane and where projected ribbons land.

The smallest justified automation is therefore to rebuild each **already-retained** Weather seed and run the **unchanged exact Map receiver** over the same 17 source states and two exact cameras. Procedural does not invent a new effect, width policy, camera policy or preferred seed.

## Exact provenance / no copied authority

Existing Weather family remains unchanged and retains only:

- seed `1207`;
- seed `44021`;
- seed `83017`.

Excluded baseline seed `9142` remains outside the retained family and is used as a fail-closed no-fallback control.

Exact current-world parent evidence:

- repository: `mike-axiom-mir/axm-map-design`;
- exact parent Weather-variant head: **`e482d003853e52fc835f1797ddfb6506a50083ef`**;
- retained parent workflow run: **`35086299949`**;
- exact parent structure and live-host prerequisite are checked before derived evidence is built.

Exact source-width receiver donor:

- repository: `mike-axiom-mir/axm-map-design`;
- exact receiver head: **`dd4a85223ba70f7086db2fdc292e4cb57ac38e47`**;
- observer path: `environment-proof/atmosphere_current_world_weather_width_observe.gd`;
- exact Git blob: **`a3d1eaa02a164db1006c0cddd3ce3108c23a63ae`**;
- runtime: pinned **Godot 4.7.2 GL Compatibility**.

The Map observer executes unchanged. No Map receiver implementation is copied into Weather, and no Map composition/acceptance authority transfers to Procedural.

## Smallest reusable implementation

Added to the existing Weather Procedural lane only:

- `tools/weather_variation_map_width_receiver.py` — builds exact retained-seed current-world payloads, verifies the exact Map runtime result, summarizes cross-seed evidence and contains bounded negative controls;
- `.github/workflows/procedural-weather-source-width-receiver.yml` — reconstructs the existing family, verifies exact parent/donor identities, executes the unchanged Map GDScript observer under pinned Godot for each retained seed, retains selected frames and emits one family summary.

No existing family definition, Weather source semantics, streak count, motion contract, source-authored width/opacity policy or Map receiver code was rewritten.

## Materially different evidence pressure

For each of the three retained seeds:

- exact source states: **17**;
- exact cameras: **2** (`path_eye`, `elevated_oblique`);
- exact streaks per state: **36**;
- projected-width measurements: **1,224 per seed**.

Across the family:

- tested source states: **51**;
- camera-state pairs: **102**;
- projected-width measurements: **3,672**;
- candidate source digests: **3/3 distinct**;
- particle-layout digests: **3/3 distinct**;
- receiving payload digests: **3/3 distinct**;
- retained visual slots: **6 per seed** (`00`, `08`, `16` × two cameras);
- every matching retained frame slot has a **different image hash across all three seeds**;
- maximum projected-width residual: **`0.0005707890294679447 px`**, inside the exact Map tolerance;
- near-clipped endpoint counts materially differ by seed: **1207 → 10, 44021 → 8, 83017 → 8**.

Those different near-clip counts are useful pressure: the family is not merely replaying one camera/layout case three times.

The receiver additionally preserves exact Weather streak identity/order, source-authored widths and opacity bounds, all non-weather current-world fields, the sapling state sequence, stable Weather/sapling resource identities and east-rear `CULL_BACK` behavior.

## Failure bounds

Three family-level controls fail closed:

1. **unretained seed fallback:** baseline seed `9142` is rejected rather than silently promoted;
2. **parent provenance drift:** changing the exact current-world parent head is rejected;
3. **runtime identity drift:** changing the runtime Weather seed identity relative to its payload is rejected.

The existing Weather family gates and baseline tests remain active; no failure bound was widened to obtain this PASS.

## Exact CI / retained evidence

All workflows associated with exact Weather head `5d5dea20d392734c68673a9c37723d48581b1dd8` are green:

- **`35183062819 — Wind atmosphere baseline` — SUCCESS**;
- **`35183062828 — Procedural weather field family` — SUCCESS**;
- **`35183062821 — Procedural Weather variants Map source-width receiver evidence` — SUCCESS**.

Retained new receiver-family artifact:

- artifact ID: **`10481430739`**;
- name: `weather-procedural-map-width-receiver-001-5d5dea20d392734c68673a9c37723d48581b1dd8`;
- uploaded size: **`5,135,680 B`**;
- GitHub SHA-256: **`ec5782f8259a795e80d8fb814aca2e0dbc665f4a918c10f2d4d7ef685d66ce9b`**;
- independently downloaded and rehashed to the exact same SHA-256;
- archive contains **36 files**, including the family summary, exact parent/donor receipts, all three payload/runtime/receiver receipts, Godot logs and 18 retained selected target-host frames.

Result returned to Weather Procedural PR #3 as comment **`5708759826`** and to Map PR #25 as downstream compatibility evidence comment **`5708766012`**, without asking Map to adopt a seed or expand its authority.

## Placement / authority boundary

- **Procedural:** owns repeated exact compatibility proof across the existing bounded seeded family.
- **Weather / VFX source lane:** retains streak-generation semantics, direction/motion semantics, source-authored width/opacity and family eligibility.
- **Map / Environment / VFX receiving lane:** retains camera projection, current-world composition, receiver behavior and any source adoption.
- **Runtime:** retains target-device cost/performance acceptance.
- **Art Direction / Visual QA:** retain preferred-layout and final visual acceptance.
- **UC / Profession Fabric:** unchanged; no Weather or Map receiver semantics promoted.

## Explicit non-claims

This PASS does **not** establish:

- Map adoption or preference for any of the three Weather seeds;
- arbitrary camera or arbitrary resolution behavior beyond the exact two retained 1100×720 proof cameras;
- physical wind, precipitation or atmospheric simulation;
- wall-clock playback cadence or naturalness;
- target-device performance;
- gameplay visibility/acceptance;
- final Art Direction / Visual QA acceptance;
- a universal weather generator or universal receiver;
- UC extraction / Profession Fabric promotion;
- CANON, production/game readiness or Procedural Design mastery.

## Four-root check

- **Truth:** one-seed receiver success was not narrated into family compatibility; all three exact retained layouts were executed through the unchanged exact Map receiver and retained as evidence.
- **Agency / non-domination:** Procedural does not choose the preferred Weather seed, change Map composition or take VFX/Environment/Runtime/Art authority.
- **Continuity:** the existing family and prior evidence remain intact; exact parent head, receiver head/blob and artifact digest are pinned, and the baseline excluded seed remains excluded.
- **Wisdom before speed:** the pass automates one repeated receiver-sensitive proof and stops before generic weather/current-world abstraction or horizontal promotion.

## Next Procedural pass

Re-scan the full constellation first. Do not continue Weather merely because PR #3 remains open. Another Weather change requires a genuinely new source/consumer contract change or repeated manual operation with clear ownership and bounded evidence; otherwise move to another design repository.
