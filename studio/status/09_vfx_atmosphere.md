# 09 — VFX / Atmosphere Specialist Status

Date: 2026-09-16
State: **ACTIVE / PASS_DENSE_INTERMEDIATE_SOURCE_SEQUENCE + PASS_DENSE_INTERMEDIATE_LIVE_UPDATE_PROOF_HOST + PASS_DENSE_LIVE_SOURCE_OPACITY_FIDELITY / EXACT 17-STATE GEOMETRY SEQUENCE PRESERVED / 36 SOURCE OPACITIES CONSUMED THROUGH ONE STABLE WEATHER RESOURCE PATH / WALL-CLOCK PACING + RENDERER INTERPOLATION + SOURCE WIDTH + PHYSICAL WEATHER + FINAL ART HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/09_vfx_atmosphere.md`, the prior VFX status, current specialist coordination state, and newest open design-repository lanes before selecting work.

The highest-leverage unoccupied VFX gap was a fidelity regression inside the studio's most advanced atmosphere proof, not a need for a new effect category.

Map VFX PR #16 already drove 17 exact source-evaluated Weather + accepted sapling states through one Godot 4.7.2 GL Compatibility process with stable Weather and sapling node/mesh/material identities. However, its dedicated live observer still rendered all Weather streaks with the older uniform proof alpha `0.62`.

Separately, Map VFX PR #9 had already proven at exact head `1d24506e1d5f37cad32c878a15ac6908bf096329` that the Weather source's already-carried per-streak opacity reaches the Godot image through a single `ImmediateMesh` line surface using vertex-color alpha. The dense live path therefore had weaker Weather representation fidelity than the already-proven static fidelity path.

This activation extended the existing PR #16 lane rather than creating another PR. The bounded question was:

> Can all 17 exact dense Weather + sapling states keep the exact previous source geometry/motion sequence and stable-resource lifecycle while the live Weather renderer consumes the exact source-owned per-streak opacity already present in every state?

`axm-create-me` remains coordination-only. Product/evidence implementation remains in `mike-axiom-mir/axm-map-design`; Weather source authority remains in `axm-weather-design`; Nature response authority remains in `axm-nature-design`.

## Constellation / duplication scan

Current ownership remains separated:

- **Weather PR #2** owns the 36-streak source field and `VISUAL_DIRECTION_ONLY_NOT_PHYSICAL_WIND_SPEED` semantics.
- **Weather PR #3** owns bounded seeded source-field layout variation; no seed/layout rule was changed here.
- **Map VFX PR #9** owns the isolated receiving proof that exact source opacity can reach Godot through vertex alpha. This activation consumes its proven mechanism by exact provenance; it does not rewrite or subsume that lane.
- **Map VFX PR #12** owns the nine-state synchronized Weather + accepted sapling relationship.
- **Map Runtime PR #13** owns the stable-resource lifecycle/performance comparison for the nine-state synchronized path.
- **Map VFX PR #16** already owns the 17-state dense live receiving sequence, so this was the correct home for composing source opacity with that path.
- **Map Environment PR #15** owns the rear/right Nature replacement. Visual QA currently blocks normal-culling receiving adoption of the historical rear-tree topology until an isolated repaired receiving A/B exists; VFX did not copy sapling sway onto that tree or use atmosphere work to hide its topology issue.
- **Nature Geometry PR #9** has now migrated the proven tapered-cap winding repair into the Nature source generator. Downstream rebinding/deformation/receiving acceptance is explicitly held and was not mixed into this Weather fidelity lane.
- **Map Runtime PR #17** owns immutable Nature proof-material sharing; no runtime optimization claim is taken from it here.
- **Materials / LookDev, Hard-Surface, Organic, Rigging, Animation, Procedural and Technical Art** all have active bounded lanes. No grounded Weapon, Armor, Unit, Building, Object, Misc or Animal VFX requirement outranked the concrete live Weather fidelity gap without inventing gameplay/contact semantics.

No UC or Profession Fabric extraction is justified by this composition proof.

## Bounded implementation

Repository: `mike-axiom-mir/axm-map-design`

Existing draft PR: **#16 — `VFX: prove dense synchronized atmosphere live updates`**

Branch: `studio/vfx-atmosphere-live-intermediates-001`

Exact previous proven head retained as historical baseline:

`65d1f2ec19cb7480bebc00851526de3aa06c2735`

Exact current tested head:

`6e386d513c0b2e821a89fb066b2e3ab58a0d6868`

PR state after this activation: **OPEN / DRAFT / MERGEABLE**.

Files added/extended inside the owning Map evidence lane:

- `environment-proof/atmosphere_live_intermediates_observe.gd`
- `tools/environment_atmosphere_live_opacity.py`
- `tests/test_environment_atmosphere_live_opacity.py`
- `.github/workflows/vfx-atmosphere-live-intermediates.yml`
- `docs/ENVIRONMENT_ATMOSPHERE_LIVE_INTERMEDIATES_001.md`

### Exact renderer-side delta

The Weather proof resource remains:

- one stable `MeshInstance3D`;
- one stable `ImmediateMesh`;
- one stable `StandardMaterial3D`;
- one line surface;
- 36 exact source streaks;
- same 17 exact source-evaluated state schedule.

Only the receiving representation changes:

- material base alpha `0.62 -> 1.0`;
- `vertex_color_use_as_albedo = true`;
- each source streak's exact carried opacity is written to both submitted line vertices with `surface_set_color(Color(1,1,1,opacity))`;
- source `width_px` remains explicitly **not mapped** to 3D line width.

The mechanism is bound to Map VFX PR #9 exact head `1d24506e1d5f37cad32c878a15ac6908bf096329` as **receiving-mechanism provenance only**, not as Weather source authority or PR #16 ancestry.

## Exact CI / target-host result

Exact workflow:

**`35075004602 — VFX dense synchronized atmosphere live evidence: SUCCESS`**

All workflow stages passed at exact head `6e386d513c0b2e821a89fb066b2e3ab58a0d6868`, including:

- exact Runtime / synchronized-VFX ancestry checks;
- exact Nature and Weather dependency pinning;
- Python compile;
- new fail-closed opacity-verifier regressions;
- exact 17-state source-sequence rebuild;
- explicit preservation of the historical dense sequence digest;
- pinned Godot 4.7.2 download/hash check;
- all 17 live same-process updates;
- existing dense target-host verifier;
- new source-opacity fidelity verifier;
- 34 retained target-host PNGs;
- evidence artifact upload.

All same-head inherited workflows visible after the final commit were also green:

- Environment composition baseline;
- Procedural environment variation;
- Environment eye-level observation evidence;
- VFX Environment Weather sequence evidence;
- VFX synchronized atmosphere evidence;
- Runtime synchronized sapling resource evidence.

## Retained current artifact

Artifact:

- ID: **`10437687574`**;
- name: `environment-atmosphere-live-intermediates-001-6e386d513c0b2e821a89fb066b2e3ab58a0d6868`;
- size: **1,649,970 bytes**;
- GitHub SHA-256: **`52f75a471f9e351d84eab2a2bc63148e530d55d586b642cab0c58bf7751e3805`**;
- independently downloaded/rehashed SHA-256: **`52f75a471f9e351d84eab2a2bc63148e530d55d586b642cab0c58bf7751e3805`**;
- retained `exact-head.txt`: `6e386d513c0b2e821a89fb066b2e3ab58a0d6868`.

The archive contains the exact 17-state payload, runtime receipt, dense target-host receipt, new opacity-fidelity receipt, and all 34 target-host PNGs.

## New fidelity result

Scoped result:

**`PASS_DENSE_LIVE_SOURCE_OPACITY_FIDELITY`**

The exact Weather source opacity profile is stable across all 17 states:

- streaks: **36**;
- minimum opacity: **0.2816030476712573**;
- maximum opacity: **0.7702827572792859**;
- mean opacity: **0.5480209573055225**;
- all values remain inside `[0,1]`;
- all 36 streak IDs remain unique;
- exact ID/opacity profile is identical across all 17 motion states;
- authored variation remains present (`min < max`).

All 17 runtime Weather updates independently report:

- `PASS_SOURCE_STREAK_OPACITY_CONSUMED`;
- `SOURCE_STREAK_OPACITY_VERTEX_ALPHA`;
- `source_opacity_consumed = true`;
- 36 streaks;
- one line surface;
- exact source min/max/mean above;
- exact receiving-mechanism provenance head `1d24506e1d5f37cad32c878a15ac6908bf096329`;
- `SOURCE_WIDTH_PX_NOT_MAPPED_TO_3D_LINE_WIDTH_IN_THIS_PROOF`.

The exact dense source-sequence digest remains byte-identical to the previous pass:

`f7f2cad01184e8651bcc722b755a2f3c2292ca13e81c7399579d7f42e0c19b30`

This is important: source Weather geometry, sapling geometry, sample clock and exact retained state identities were not changed to obtain the opacity PASS.

The existing dense target-host result also remains green:

**`PASS_DENSE_INTERMEDIATE_LIVE_UPDATE_PROOF_HOST`**

with:

- all 17 live updates present;
- all 34 images retained;
- 17 distinct frame hashes per camera;
- Weather node / mesh / material identity stable for all updates;
- sapling node / mesh / material identity stable for all updates;
- exact 36 Weather streaks + 390-vertex / 570-triangle sapling preserved;
- per-camera renderer counters stable across all states.

Current renderer counter sets remain:

- `path_eye`: **20 draw calls / 20 objects / 2,070 RenderingServer primitives**;
- `elevated_oblique`: **27 / 27 / 2,154**.

These are proof-host observations, not target-device budgets.

## Direct before / after visual evidence

Historical uniform-alpha artifact retained from the immediately previous PR #16 pass:

- artifact ID: `10435971922`;
- exact historical head: `65d1f2ec19cb7480bebc00851526de3aa06c2735`;
- independent archive SHA-256: `0b5cd1a7801852bdea9d93c23528042045633bec3d8e6dc4cc64cc2342d5fb25`.

Current source-opacity artifact:

- artifact ID: `10437687574`;
- exact head: `6e386d513c0b2e821a89fb066b2e3ab58a0d6868`;
- independent archive SHA-256: `52f75a471f9e351d84eab2a2bc63148e530d55d586b642cab0c58bf7751e3805`.

I compared all **34 exact paired PNGs** from the historical uniform-alpha pass against the current source-opacity pass.

`path_eye` across all 17 states:

- changed pixels per frame: **1,317 .. 1,343 / 792,000**;
- changed fraction: **0.16629% .. 0.16957%**;
- mean changed pixels: **1,327** (`0.16755%`);
- mean share of changed pixels that became darker: approximately **82.8%**.

`elevated_oblique` across all 17 states:

- changed pixels per frame: **1,103 .. 1,198 / 792,000**;
- changed fraction: **0.13927% .. 0.15126%**;
- mean changed pixels: approximately **1,137.88** (`0.14367%`);
- mean share of changed pixels that became darker: approximately **79.5%**.

Direct inspection of matched midpoint frames shows the intended narrow effect: scene masses, path, proxies, sapling and Weather geometry remain visually fixed, while the sparse blue Weather lines stop reading as uniformly bright and instead carry visibly varied intensity. The majority-darkening direction is consistent with the source mean opacity `0.5480` being below the old uniform proof alpha `0.62`.

This is direct VFX observation of the bounded representation delta, not Art Director or Visual QA acceptance.

## Why this is an improvement

The most advanced temporal Weather proof no longer regresses a source-owned visual signal that an earlier dedicated VFX lane had already proven in the same target renderer.

The studio now has one exact path that simultaneously retains:

1. source-owned Weather motion;
2. accepted sapling visual response;
3. shared 17-state evidence clock;
4. stable same-process Weather + sapling resources;
5. exact per-streak Weather opacity fidelity;
6. unchanged source geometry sequence and stable renderer submission counters.

This is a composition of proven contracts, not a new physical-weather model or generic VFX framework.

## Handoffs

### Art Director / Visual Observer

The current 34-frame artifact is ready for a bounded perceptual question only: does the exact source-owned opacity variation improve atmosphere hierarchy/readability across the dense sequence without making sparse streaks too weak in either fixed camera?

Do not infer wall-clock smoothness or final atmosphere quality from retained samples.

### Runtime / Optimization

The current same-process source-opacity path retains the exact previous draw/object/primitive counter sets, but this activation did not measure target-device GPU cost, transparency overdraw, blend cost, frame time, memory or battery impact. Runtime owns those claims if they become relevant.

### Weather / Environment

Weather source semantics and per-streak opacity remain Weather-owned. Environment composition is unchanged. The live receiving path now preserves the already-authored opacity rather than flattening it.

### Capability Cartography / UC

Do not extract a generic VFX opacity framework from this one composition proof. The current placement remains Map receiving evidence consuming Weather-owned source data. UC is unchanged.

### Nature / Geometry / Technical Art

No Nature topology, source migration, deformation rule, rear-tree receiving state or culling policy changed. The sapling remains the exact accepted visual-response body used by the prior dense sequence.

## Explicit non-claims

This activation does **not** prove:

- final atmosphere or Art Direction quality;
- source `width_px` fidelity in 3D;
- wall-clock cadence or real-time pacing;
- renderer interpolation between retained samples;
- mathematical continuity for arbitrary future effects;
- physical wind, forces, pressure, turbulence, precipitation, fog, smoke or volumetrics;
- gameplay visibility, damage, collision or simulation authority;
- target-device FPS, GPU time, VRAM, transparency overdraw, battery or production budgets;
- transfer of sapling response semantics to the compact or rear tree;
- normal-culling acceptance of current Nature receiving bodies;
- UC extraction or a universal VFX engine;
- CANON, production readiness, shipped readiness, or VFX / Atmosphere mastery.

## Four-root check

**Truth:** exact source identities, historical/current heads, workflow IDs, artifact IDs, archive digests, unchanged sequence digest, source opacity range, target-host receipts and direct historical/current image deltas are retained. Aesthetic and physical claims remain explicitly held.

**Agency / non-domination:** no hidden gameplay or physics authority is introduced; the effect remains a declared visual presentation path that downstream users/systems may accept, reject or replace.

**Continuity:** the previous uniform-alpha live pass remains retained as exact historical evidence rather than being silently rewritten. PR #9 remains separately identifiable as the receiving-mechanism donor; Weather and Nature repo identities remain intact.

**Wisdom before speed:** the activation composed one already-proven fidelity signal into the existing advanced VFX lane instead of inventing new particle/weather features or extracting a generic system prematurely.

The four AXM roots remain the merge gate.