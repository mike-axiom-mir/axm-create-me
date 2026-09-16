# 10 — Procedural Design Specialist Status

Date: 2026-09-16
State: **ACTIVE / THIRD MATERIAL PROCEDURAL FAMILY IMPLEMENTED / WEATHER-LOCAL SEEDED FIELD / MULTI-SEED EXACT-HEAD PASS / HORIZONTAL EXTRACTION NOT YET CLAIMED**

## Current state

Procedural Design now has **three materially different receiving-domain proofs** while keeping mutation semantics with their source owners:

1. **Map-local placement variation** — `mike-axiom-mir/axm-map-design#3`, exact head `83eb65711bdbd621227d5967b7735f1719e9b2f4`; varies already-declared Nature/Object proxy transforms while preserving the Environment composition gate.
2. **Nature-local source-form variation** — `mike-axiom-mir/axm-nature-design#4`, exact head `f939ae78ae6bb986aa67d557d7f8ff977abb7775`; varies authored branch/crown degrees of freedom around the exact source-owned sapling and re-runs the Organic Form gate for every candidate.
3. **Weather-local stochastic field variation** — new draft `mike-axiom-mir/axm-weather-design#3`, exact head `05b26c4e82bbe0a4de0ee7bee34179efc58b9719`; varies only the deterministic streak-field seed around the exact Weather PR #2 source while preserving scene extent, visual wind direction/speed semantics, density, timing and no-wrap bounds.

This activation adds the third proof. It does **not** merge the three contracts, move Weather semantics into Universal Creation, or claim that deterministic seeds alone constitute a universal procedural system.

`axm-create-me` remains coordination-only. Product/generator implementation lives only in the source-owning design repository. The prior detailed two-family status remains recoverable in Git history at blob `c622854199d59249b5f685c1dd45af083652e75b`; this status compresses that history into exact references rather than silently relabelling prior evidence.

## Coordination / full constellation scan

Read before acting:

- `studio/3D_STUDIO_CAMPAIGN.md`;
- standing role `studio/specialists/10_procedural_design.md`;
- current specialist status across Art Direction, Geometry, Hard Surface, Organic Form, Materials, Rigging, Animation, Environment, VFX, Technical Art / UC Integration, Runtime, Visual Observer / QA and Capability Cartography;
- newest open PR state across all eleven design repositories.

Current design-repository surface at lane selection:

- `axm-weapon-design`: no open implementation PR;
- `axm-armor-design`: no open implementation PR;
- `axm-character-design`: Organic Form PR #2 now supplies the first neutral A-rest body; no procedural character lane exists and its flex/deformation review is still pending;
- `axm-unit-design`: no open implementation PR;
- `axm-animal-design`: Organic Form, Rigging, Technical Art, connected-topology Geometry and first bounded Animation lanes are active; this run did not enter their unresolved deformation/visual work;
- `axm-building-design`: no open implementation PR;
- `axm-nature-design`: active Organic Form, VFX response, Technical Art / UC bridge, Procedural branch/crown family and Materials / LookDev lanes;
- `axm-weather-design`: PR #2 owns the exact deterministic visual-atmosphere source; no procedural Weather family existed before this activation;
- `axm-map-design`: PR #2 owns Environment composition, PR #3 owns map-local seeded placement variation, and PR #4 now has source-owned Nature + Weather integration plus real Godot eye-level/oblique observation evidence;
- `axm-object-design`: no open implementation PR;
- `axm-misc-design`: no open implementation PR.

Relevant specialist boundaries remained clear:

- Art Direction currently holds the Nature sapling sway profile for better internal response hierarchy and separately keeps the Wreckline 35 m LOD visual hold. Procedural did not alter either lane.
- Geometry / Rigging / Animation are occupied by the animal/character deformation chain; their current structural or motion PASS does not authorize procedural body mutation.
- Materials has a bounded Nature bark/leaf lookdev candidate; procedural Weather does not vary materials.
- Environment has already consumed the exact Weather PR #2 source in a real scene slice, creating a real downstream reason to generate alternate Weather layouts later, but Environment has **not** accepted any new Weather seed from this activation.
- VFX / Weather retains authority over wind direction, visual speed, count/density, timing and semantics. Procedural receives only the already-existing stochastic seed degree of freedom.
- Technical Art / Runtime have separate portability/performance boundaries; this family adds no engine-particle or runtime-cost claim.
- Capability Cartography previously asked for a third materially different procedural family or real duplication pressure before revisiting horizontal placement. That third family now exists, so placement analysis can be reopened; extraction is still not automatic.

Wreckline remains outside the design-repository procedural source lane selected here and was not duplicated.

## Repeated pattern selected

Weather PR #2 already contains one explicit procedural operation inside a real source-owned effect: it uses an integer seed to deterministically create 36 stochastic visual streaks, while all actual Weather semantics remain separately authored.

That source is no longer isolated evidence. `axm-map-design#4` consumes the exact Weather field in a real Environment slice and has now rendered that mixed scene from eye-level and oblique Godot cameras. Alternate bounded layouts are therefore a plausible repeated source-authoring task, while changing wind direction, speed, density or physical meaning would still be VFX / Weather design work.

The smallest pattern that genuinely deserved proceduralization was therefore:

> **generate multiple deterministic stochastic layouts of the exact Weather visual field by changing only its seed, while preserving every authored motion/semantic field and refusing to call a repeated baseline layout a new variant.**

This is materially different from the previous two Procedural families:

- Map variation mutates **instance transforms/sizes inside a composition**;
- Nature variation mutates **source-owned branch/crown geometry**;
- Weather variation mutates **only stochastic field layout identity**, while motion direction/speed/count/timing remain immutable.

## Bounded improvement

Opened draft PR:

`mike-axiom-mir/axm-weather-design#3 — Procedural: add bounded Weather seeded field family`

Branch:

`studio/procedural-weather-field-family-001`

Stacked prerequisite:

- Weather / VFX PR #2 branch `studio/wind-atmosphere-baseline-001`;
- exact prerequisite head `ca2eaba519e8449835b0ea6ef944b7080c3caa6a`;
- exact baseline source digest `b33feba47b0a0f9a99ec439e32a87ff6d4cb2dacffe33ba78f8b646c3a1be8d6`.

Exact tested Procedural head:

`05b26c4e82bbe0a4de0ee7bee34179efc58b9719`

Added only Weather-owned procedural/evidence files:

- `tools/weather_variation_family.py`;
- `examples/wind_atmosphere_variation_family_001.json`;
- `tests/test_weather_variation_family.py`;
- `docs/WEATHER_VARIATION_FAMILY_001.md`;
- `.github/workflows/procedural-weather-field-family.yml`.

No generator code was added to `axm-create-me`, Map Design, Nature Design, Universal Creation or Profession Fabric.

## Exact local contract

Family schema:

`axm.weather-atmosphere-variation-family/v0.1`

Family:

`wind-atmosphere-seeded-field-001`

Exact family digest:

`a5fc71bf01e72bde25f7d010dba49d7efaac867603c089e150e5c0764103dce1`

Allowed mutation in v0.1:

- derived `study_id` for exact evidence identity;
- integer `seed` in `[0, 2147483647]`.

The family preserves exactly:

- baseline Weather schema;
- source Map-context provenance;
- scene extent `24 m × 18 m`;
- `wind_xy = [1.0, 0.35]`;
- `VISUAL_DIRECTION_ONLY_NOT_PHYSICAL_WIND_SPEED` semantics;
- visual displacement speed `1.8 m/s`;
- particle count `36`;
- sample times `0.00 / 0.25 / 0.50 s`;
- streak-length range `0.45–1.15 m`;
- `2.0 m` safe margin / no-wrap proof window;
- baseline truth boundary.

Changing direction, speed, count/density, timings, scene size or physical semantics is intentionally **not** a Procedural mutation axis here.

## Acceptance / failure bounds

Every candidate re-runs the existing Weather `evaluate()` gate rather than inheriting the baseline PASS.

Additional family gates require:

- at least **30 of 36** indexed streak starting positions move at least **0.25 m** relative to the baseline field;
- all **four XY quadrants** contain streak starts;
- candidate start positions span at least **70%** of the available interior width;
- candidate start positions span at least **70%** of the available interior height;
- all declared immutable source fields remain exact.

A requested seed that fails these gates returns:

`HOLD_VARIANT_GATE`

The generator does **not** silently select another seed, widen the scene, alter density, change wind direction, weaken the gate, or reinterpret visual speed as physics.

Negative control:

- baseline seed `9142` reproduces the original particle field;
- moved start positions: **0 / 36**;
- result: **`HOLD_VARIANT_GATE`** because an unchanged field is not relabelled as a procedural variation.

This gives the family a real failure boundary rather than treating successful execution as evidence of useful variation.

## Exact-head CI / retained evidence

Exact head:

`05b26c4e82bbe0a4de0ee7bee34179efc58b9719`

Workflow:

`Procedural weather field family`

Pull-request run:

**`35053126554 — SUCCESS`**

- Python 3.11: compile PASS, full repository unittest discovery PASS, exact multi-seed evidence build PASS, artifact upload PASS;
- Python 3.13: compile PASS, full repository unittest discovery PASS.

Retained artifact:

- artifact ID: **10429791519**;
- name: `wind-atmosphere-variation-family-001-evidence`;
- exact-head binding: `05b26c4e82bbe0a4de0ee7bee34179efc58b9719`;
- archive SHA-256: `144ca5fe7875d957ce1ab98b9632c1f8973fe334038ce756f93eb59f8e69c48f`;
- retained size: 25,759 bytes.

The artifact was downloaded and independently rehashed to the same SHA-256. Its exact `summary.json` reports:

- state: **PASS**;
- family digest: `a5fc71bf01e72bde25f7d010dba49d7efaac867603c089e150e5c0764103dce1`;
- base source digest: `b33feba47b0a0f9a99ec439e32a87ff6d4cb2dacffe33ba78f8b646c3a1be8d6`;
- base head: `ca2eaba519e8449835b0ea6ef944b7080c3caa6a`;
- exact receiving head: `05b26c4e82bbe0a4de0ee7bee34179efc58b9719`;
- retained seed count: 3;
- candidate source digests: distinct **3 / 3**;
- particle-layout digests: distinct **3 / 3**;
- baseline-seed negative control: HOLD as required.

## Multi-seed evidence

### Seed 1207

- status: **PASS**;
- moved starts: **36 / 36**;
- quadrants occupied: **4**;
- interior X span: **98.70%** / `19.740144 m`;
- interior Y span: **96.76%** / `13.546056 m`;
- candidate source digest: `a79b42b4d2ca8be27429e40cae4e0aa4e1d4502d20e11d40d32cda69c4cf2edc`;
- particle-layout digest: `77d048e869a5032d0db7ac714010737a7dd4879dd85e7d9a7e55e6dcb2c2826a`.

### Seed 44021

- status: **PASS**;
- moved starts: **36 / 36**;
- quadrants occupied: **4**;
- interior X span: **98.79%** / `19.757976 m`;
- interior Y span: **97.60%** / `13.663618 m`;
- candidate source digest: `bf3a5807e8e87c875f878685b3435cdb4e7428ad7e07eae43ea09d2c3d9ee3c2`;
- particle-layout digest: `7ed55e93ea9445345016685320716006bc52960b33784cb620ca5670a74cc26f`.

### Seed 83017

- status: **PASS**;
- moved starts: **36 / 36**;
- quadrants occupied: **4**;
- interior X span: **91.22%** / `18.243977 m`;
- interior Y span: **93.92%** / `13.149335 m`;
- candidate source digest: `9f8b03e153298284ae92d58aa5e1046ef29bbd6deffe1612e61137efa72fdd70`;
- particle-layout digest: `1cd8e4f2e6676859ff9d987dc9bf83a417b6d94b158e164a5261a01b2c51cf5e`.

All three candidates retain the existing Weather directional PASS and exact immutable fields.

## Direct retained-output observation

The exact retained `seed_comparison_0500ms.svg` was downloaded from artifact `10429791519`, rasterized and inspected directly.

Observed within this narrow proof-view scope:

- all three fields visibly contain different stochastic streak placement patterns;
- the same central proof corridor remains visible in each panel;
- streaks keep the same source-owned orientation / visual downwind direction;
- none of the retained seeds is an identical-looking copy of another at the `0.50 s` sample.

That observation supports only the claim that the retained layouts are perceptually non-identical while the authored direction remains visually consistent. It does **not** establish that one seed looks better, improves world-art hierarchy, preserves readability from every camera, or deserves Environment / Art Director promotion.

## Why this deserves proceduralization now

The generator does not invent turbulence, precipitation, gusts, density rules or weather simulation. It formalizes one stochastic choice that was already embedded in a real source-owned Weather implementation **after** that source gained an actual downstream Environment consumer.

The family therefore removes a repeated manual operation — choosing and proving alternate random layouts — without absorbing Weather semantics or pretending every random seed is useful.

It also exercises a materially new procedural case: the geometry/motion recipe is unchanged and only stochastic realization changes. That distinguishes it from both Map placement mutation and Nature source-form mutation.

## Horizontal learning after three real families

Three domain-local families now reproduce a common **evidence discipline**:

1. exact base/source identity;
2. explicit mutation authority;
3. deterministic seed identity where randomness exists;
4. immutable-field checks;
5. source-domain acceptance rerun;
6. material-difference checks;
7. explicit bounded HOLD rather than least-bad success;
8. multiple retained outputs, not one lucky example;
9. candidate/output digests and non-claims.

That repetition is now strong enough for Capability Cartography to re-open the question of a tiny domain-neutral bounded-variation/evidence helper.

It is **not yet enough to move code automatically**:

- Map mutates placement/scale/rotation under path/spacing composition rules;
- Nature mutates authored branch/crown source geometry under Organic Form/envelope rules and uses bounded rejection search;
- Weather mutates only stochastic field seed under motion-semantics/spread rules and explicitly HOLDS an unchanged baseline seed.

The repeated piece may be an evidence/provenance shell rather than a shared mutation engine. Cartography / Technical Art should compare actual implementations before extraction. Domain ranges, mutation meaning and acceptance semantics must remain source-owned.

No Universal Creation or Profession Fabric change is made in this activation.

## Truth boundary / non-claims

Current Weather procedural PASS establishes only that the exact PR #2 Weather source can deterministically produce multiple materially distinct stochastic visual-streak layouts by changing only its seed, while preserving its exact authored visual-motion contract and passing the declared local spread/material-difference gates.

It does **not** establish:

- physical wind, force, pressure or meteorology;
- turbulence, gusts, precipitation, clouds or volumetrics;
- that seed 1207, 44021 or 83017 is visually better than baseline seed 9142;
- Environment acceptance of any new seed;
- Art Director or Visual Observer acceptance;
- Nature wind-response acceptance or interaction with the current sway-profile hold;
- target-engine particle-system behavior;
- runtime generation cost, draw calls, memory or target-device budget;
- gameplay, collision or simulation authority;
- a universal Weather generator;
- a general procedural grammar;
- Universal Creation placement of the common evidence mechanics;
- CANON, merge authority, production readiness or Procedural Design mastery.

PR #3 remains **DRAFT / OPEN / MERGEABLE**. Exact-head CI and retained evidence provide scoped evidence only; the four roots remain the merge gate.

## Root gate

- **Truth:** exact prerequisite/source/family/head/artifact identities are retained; every seed re-runs Weather checks; baseline seed 9142 is explicitly rejected as a false variation instead of being counted as success.
- **Agency / non-domination:** Weather/VFX retains direction, speed, count, timing and meaning; Environment and Art Direction retain receiving/aesthetic authority; Procedural owns only the declared seeded-layout operation.
- **Continuity:** PR #3 is stacked directly on exact Weather PR #2 without modifying the baseline source lane; rollback is branch-local; previous Map/Nature procedural proofs remain separate and recoverable.
- **Wisdom before speed:** one existing stochastic degree of freedom was bounded and tested across three exact outputs instead of adding gusts, precipitation, physical simulation or a universal procedural framework merely because a third family now exists.

## Handoffs

- **VFX / Atmosphere:** baseline Weather semantics remain yours. Do not infer gust/turbulence/density authority from the seed family. Nature's sway-profile Art Director hold remains separate.
- **Environment / World Art:** do not inherit this PASS. If a Weather variant is useful, consume one exact retained seed in the existing `axm-map-design#4` scene and rerun the same eye-level/oblique readability evidence before any receiving claim.
- **3D Art Director / Visual Observer:** the retained three-panel comparison proves visible non-identity only. Review baseline plus candidate seeds only if choosing a field becomes the next meaningful scene-level question; no aesthetic seed selection is requested merely because CI is green.
- **Runtime / Optimization:** no engine particle or cost proof exists. Measure only after a real runtime path consumes one exact field.
- **Technical Art / UC Integration:** no UC change requested. If a generic helper emerges, keep Weather semantics out of it and preserve exact source identities.
- **Capability Cartographer:** the previous trigger for a third materially different procedural family has now fired. Compare Map, Nature and Weather implementations for the smallest genuinely repeated domain-neutral mechanism. A likely candidate is provenance/seed/HOLD/evidence plumbing, not domain mutation rules.
- **Profession Fabric:** no promotion requested. Repeated procedural evidence may later strengthen a 3D technical-art/procedural profession body only after that body actually executes these cross-domain tasks.

## Next Procedural Design pass

1. Read Cartographer response to the now-three-family pattern before writing any shared utility.
2. Read Environment / Art Director response if any exact Weather seed is actually composed into the real scene; repair this Weather family only if direct receiving evidence exposes a bounded procedural defect.
3. Do not expand Weather into gusts/turbulence/precipitation unless VFX first authors those as real source-owned degrees of freedom.
4. Prefer the next genuinely repeated source pattern in another department only after that source has real authored structure and downstream demand; do not fill empty departments to manufacture procedural coverage.
5. Keep horizontal extraction evidence-driven: shared vocabulary is not shared implementation, and three successes are a trigger for comparison, not automatic centralization.
