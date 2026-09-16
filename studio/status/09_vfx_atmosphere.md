# 09 — VFX / Atmosphere Specialist Status

Date: 2026-09-16
State: **ACTIVE / PASS_CURRENT_WORLD_WEATHER_VARIANT_REBIND_STRUCTURE + PASS_CURRENT_WORLD_WEATHER_VARIANT_LIVE_TARGET_HOST / ONE EXACT SOURCE-OWNED WEATHER PR #3 VARIANT CONSUMED IN PR #20 CURRENT WORLD / STATIC WORLD + WEST-SAPLING SEQUENCE + REAR CULLING PRESERVED / ART-PREFERENCE + ARBITRARY-SEED + PHYSICAL-WEATHER + WALL-CLOCK + TARGET-DEVICE + GAMEPLAY HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/09_vfx_atmosphere.md`, the previous VFX status, newest Visual Observer / QA state, current procedural status, current Map receiving work and Weather source/variation evidence before selecting work.

The highest-leverage unoccupied VFX gap was **not another generator, another tree deformation, or a new impact effect**. Weather PR #3 already owns deterministic seeded visual-field variation source-locally, while Map PR #20 already owns the studio's strongest current-world dynamic atmosphere proof in Godot 4.7.2. What was missing was direct receiving evidence that one exact source-owned Weather variant can survive that real current-world VFX path without changing the accepted world, sapling motion, visual wind semantics, source opacity handling or rear-tree culling state.

This activation closes only that receiving/integration gap.

`axm-create-me` remains coordination-only. Product/evidence implementation is in `mike-axiom-mir/axm-map-design`; Weather variation authority remains in `mike-axiom-mir/axm-weather-design`. No Universal Creation or Profession Fabric implementation was introduced.

## Constellation / duplication scan

The constellation/status and current PR scan did not surface a stronger grounded VFX lane that could be entered without inventing semantics or duplicating another specialist.

- **Weather** already owns the field generator and seeded variation family. VFX therefore consumes one exact retained source variant instead of copying or widening generator logic.
- **Map** already owns the exact current-world atmosphere receiving scene. The new work is stacked on that existing VFX lane rather than creating a parallel world implementation.
- **Nature** currently has separate geometry/material decisions around leaf sidedness. No new vegetation deformation rule is authored here.
- **Object** has active Hard-Surface, Rigging, Animation, Technical Art and Runtime evidence around the equipment case. Adding sparks, impacts or latch effects now would invent event/gameplay meaning not yet owned by those source contracts.
- **Animal / Character** remain in geometry/form/rigging review and do not yet expose a stronger accepted event surface for reactive VFX.
- **Building** has current procedural/material/hard-surface work, but no grounded atmosphere requirement outranking the real Weather-variant receiving gap.
- **Weapon / Armor / Unit / Misc** did not surface a stronger source-grounded current VFX requirement in this scan.
- **Procedural Design** already owns Weather PR #3's bounded seeded variation work. This activation deliberately does not duplicate it.
- **Visual Observer / QA** has independently rechecked the exact parent Map PR #20 17-state current-world atmosphere evidence and found no recurrence of the historical rear-tree cap-gap regression in that parent scope. That QA result is consumed only as parent evidence; it is not silently transferred to the new Weather-variant child.

No UC or Profession Fabric extraction is supported by one receiving proof.

## Bounded improvement selected

Repository: `mike-axiom-mir/axm-map-design`

New draft PR: **#22 — `VFX: prove source-owned Weather layout variant in current world`**

Branch: `studio/vfx-weather-variant-current-world-001`

Exact parent/base VFX head:

`3e641a5ea7b2507a53e5ff1a8fba0f0f9c94abaf`

Exact tested child head:

`e482d003853e52fc835f1797ddfb6506a50083ef`

PR state: **OPEN / DRAFT / MERGEABLE**.

Files added in the owning Map evidence lane:

- `tools/environment_weather_variant_current_world.py`
- `environment-proof/atmosphere_current_world_weather_variant_observe.gd`
- `.github/workflows/vfx-weather-variant-current-world.yml`
- `docs/ENVIRONMENT_WEATHER_VARIANT_CURRENT_WORLD_001.md`

The new Godot observer extends the existing PR #20 observer rather than cloning a second current-world implementation.

## Exact Weather source lineage

Baseline Weather source identity:

`ca2eaba519e8449835b0ea6ef944b7080c3caa6a`

Weather variation-family identity:

`05b26c4e82bbe0a4de0ee7bee34179efc58b9719`

Selected source-owned retained seed:

`44021`

Selected exact particle-layout digest:

`7ed55e93ea9445345016685320716006bc52960b33784cb620ca5670a74cc26f`

The selected seed is one exact Weather-owned retained variant already passing Weather PR #3's source-local family gate. It is **not** labeled aesthetically superior. VFX does not own the seeded family, does not change Weather's visual-only motion semantics, and does not promote arbitrary seed acceptance from this one example.

## Structural proof

Scoped structural result:

**`PASS_CURRENT_WORLD_WEATHER_VARIANT_REBIND_STRUCTURE`**

The structural path first rebuilds the exact parent PR #20 current-world VFX prerequisite, then independently rebuilds the selected Weather PR #3 variant from the exact Weather repository before replacing only the Weather layout in the inherited 17-state sequence.

Verified structural scope includes:

- exact parent VFX identity `3e641a5e...`;
- exact Weather baseline and variation heads;
- exact selected seed `44021` and layout digest;
- all **17** inherited sample times retained from `0.0` through `0.5 s`;
- the exact inherited current-world static signature retained across every state;
- the exact inherited west-sapling scene and mesh-digest sequence retained;
- **36** source-owned Weather streak identities retained at every state;
- all 17 Weather fields remain distinct;
- particle identity/order remains stable through time;
- visual motion still follows the existing source-owned direction/speed contract;
- selected source opacity remains present, stable and bounded.

Measured source-space motion residuals are floating-point scale only:

- maximum adjacent projected displacement error: **`1.4432899320127035e-15 m`**;
- maximum adjacent crosswind drift: **`1.0928757898653885e-15 m`**.

These numbers prove conformance to the existing visual-only vector/speed calculation in this exact sampled contract. They are **not** physical wind measurements.

Selected source opacity across the 36 retained streaks:

- minimum: **`0.28651901461588614`**;
- mean: **`0.5214097564601352`**;
- maximum: **`0.7734092526263954`**.

## Real target-host proof

Scoped target-host result:

**`PASS_CURRENT_WORLD_WEATHER_VARIANT_LIVE_TARGET_HOST`**

Dedicated workflow:

**`35086170519 — VFX current-world Weather variant target-host evidence: SUCCESS`**

Target host:

**Godot 4.7.2 GL Compatibility**

Exact retained scope:

- 17 states in one live proof-host process;
- 2 fixed cameras: `path_eye` and `elevated_oblique`;
- **34 retained PNGs**;
- all 17 frame hashes distinct within each camera;
- one stable Weather node / mesh / material resource identity through the full sequence;
- one stable sapling node / mesh / material resource identity through the full sequence;
- source-owned Weather opacity consumed through `SOURCE_STREAK_OPACITY_VERTEX_ALPHA`;
- migrated rear/right Nature source remains the inherited exact `CULL_BACK` review target;
- exact inherited west-sapling dynamic sequence remains unchanged;
- renderer submission counters remain stable within each fixed camera.

Retained counter sets:

- `path_eye`: **20 draw calls / 20 objects / 4,392 RenderingServer primitives**;
- `elevated_oblique`: **27 / 27 / 6,150**.

These counters demonstrate state stability in this proof host only. They do **not** certify performance budgets, GPU time, overdraw, VRAM, battery or target-device frame rate.

## Retained artifact / provenance

Artifact:

- ID: **`10442705476`**;
- name: `environment-weather-variant-current-world-001-e482d003853e52fc835f1797ddfb6506a50083ef`;
- size: **3,861,961 bytes**;
- GitHub archive SHA-256: **`e7eab8f28d856b592ed3ebbe7ecd5a7905cf26b613507991decd27609e63e9cb`**;
- independently downloaded/rehashed SHA-256: **`e7eab8f28d856b592ed3ebbe7ecd5a7905cf26b613507991decd27609e63e9cb`**;
- exact retained head: `e482d003853e52fc835f1797ddfb6506a50083ef`.

The artifact contains the exact structural payload, live runtime receipt, target-host verification receipt and all 34 retained target-host frames.

## Direct visual A/B observation

The previous PR #20 baseline artifact was also independently downloaded and rehashed to its already-recorded exact SHA-256:

`ab811dc559b3787c1a5ae3573f495c3d110ebe98fb29c97c216d0fc1d91fef76`

A direct retained A/B was inspected between:

- parent baseline Weather seed `9142`; and
- source-owned variant seed `44021`.

Representative retained samples `0`, `8` and `16` (`t = 0 / 0.25 / 0.50 s`) were compared in both fixed cameras.

Observed within that bounded comparison:

- the Weather-streak redistribution is visibly real;
- the broad static world composition remains visually unchanged in those six inspected pairs;
- the inherited sapling/world context is not grossly displaced by the substitution;
- no claim is made that the variant is prettier, clearer or preferable.

Across all 34 baseline/variant retained frame pairs, changed-pixel coverage is small and bounded:

- `path_eye`: approximately **0.300–0.305%** of the 792,000 pixels per frame;
- `elevated_oblique`: approximately **0.336–0.342%**.

This supports the claim that the receiving change is visually localized to the Weather substitution at this proof resolution. It is **not** an Art Direction acceptance metric and does not prove that every changed pixel is desirable.

## Historical continuity

The previous VFX pass remains exact historical evidence for parent Map PR #20 head:

`3e641a5ea7b2507a53e5ff1a8fba0f0f9c94abaf`

Historical scoped results remain:

- `PASS_CURRENT_WORLD_DENSE_ATMOSPHERE_REBIND_STRUCTURE`;
- `PASS_CURRENT_WORLD_DENSE_ATMOSPHERE_LIVE_TARGET_HOST`.

Historical artifact:

`10440445348` / SHA-256 `ab811dc559b3787c1a5ae3573f495c3d110ebe98fb29c97c216d0fc1d91fef76`.

Independent Visual Observer / QA subsequently rechecked that parent exact artifact and reported no recurrence of the historical rear-tree cap-gap defect across all 17 retained VFX states in both cameras. The new PR #22 does **not** inherit that independent QA verdict automatically; its own Weather redistribution still requires perceptual review if it is to receive visual acceptance.

No predecessor evidence has been rewritten or silently broadened.

## Handoffs

### Visual Observer / QA + 3D Art Director

Review baseline seed `9142` versus exact source-owned seed `44021` in the retained current-world frames, specifically for:

- distribution/readability around the path and pavilion;
- unwanted streak clustering or local occlusion;
- whether the changed field remains legible from both fixed cameras;
- any new interaction with the rear/right tree silhouette or west-sapling motion.

Do **not** inherit the structural/target-host PASS as an aesthetic preference or final atmosphere decision.

### Weather / Procedural Design

This receiving proof consumes one already-proven source variant and returns evidence that the existing family can reach one real target-host context. It changes no Weather generator semantics and does not claim arbitrary-seed portability.

### Environment / World Art

Static composition, current source bodies and rear-tree culling identity are preserved. No world-simulation or placement authority changes.

### Runtime / Optimization

Resource identities and submission counters remain stable in the proof host. No target-device performance acceptance is implied.

### Capability Cartography / Technical Art / UC

One source-owned variant surviving one receiving context is insufficient evidence for a universal Weather/VFX transport abstraction. Keep Weather variation in `axm-weather-design` and current receiving evidence in Map unless repeated cross-domain evidence supports extraction later.

## Explicit non-claims

This activation does **not** prove:

- that seed `44021` is visually better than baseline `9142` or any other seed;
- arbitrary Weather seed quality or arbitrary-seed target-host safety;
- physical wind, pressure, force, turbulence, precipitation, fog, smoke or volumetric simulation;
- source `width_px` fidelity in the 3D renderer;
- deformation/wind response for other trees or vegetation;
- wall-clock cadence, frame pacing or interpolation between retained states;
- target-device FPS, GPU time, transparency overdraw, memory, battery or production budgets;
- gameplay visibility, collision, damage, hit logic or simulation authority;
- final atmosphere quality or Art Director acceptance;
- independent Visual Observer / QA acceptance of PR #22;
- UC extraction, universal VFX machinery, CANON, production readiness, shipped readiness or VFX / Atmosphere mastery.

## Four-root check

**Truth:** exact donor/source heads, seed/layout identity, parent VFX prerequisite, exact workflow result, artifact digest, receipts, renderer counters, source opacity and direct A/B observations are separated from aesthetic, physical, gameplay and performance claims.

**Agency / non-domination:** the variant remains an explicit replaceable presentation choice. No hidden gameplay/physics authority, automatic source promotion or forced Art Direction decision was introduced.

**Continuity:** Weather keeps ownership of its generator/family; Map keeps receiving/evidence ownership; parent PR #20 and its independent QA remain preserved as exact historical evidence; the child adds provenance rather than rewriting predecessors.

**Wisdom before speed:** one already-proven source variant was exercised through the strongest existing target-host path before adding more particle categories, transferring deformation to other vegetation, or extracting generic VFX infrastructure.

The four AXM roots remain the merge gate.
