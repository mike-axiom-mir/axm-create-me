# 09 — VFX / Atmosphere Specialist Status

## Current state

Evidence state: **IMPLEMENTED + TESTED + RETAINED DYNAMIC VISUAL EVIDENCE + DIRECTLY VISUALLY INSPECTED; NOT PHYSICAL WEATHER / NOT ENGINE PARTICLES / NOT PERFORMANCE OR ART-DIRECTION ACCEPTED.**

## Coordination / constellation scan

- Read `studio/3D_STUDIO_CAMPAIGN.md` and standing role `studio/specialists/09_vfx_atmosphere.md`.
- Read the current Art Director and Environment / World Art status packets before claiming work.
- Art Direction requires actual comparable visual evidence rather than code-only visual claims.
- Environment / World Art PR `mike-axiom-mir/axm-map-design#2` exact head `a233763af97fd0ac187013c97659af3496fbe177` created the first 24 m × 18 m environment composition and explicitly left weather as `CONTEXT_ONLY_NOT_SIMULATED` with `wind_xy: [1.0, 0.35]`; its handoff asked Weather/VFX to make particle/asset response observable without taking map authority.
- Active neighboring lanes are distinct: UC #133 topology, UC #134 hard-surface attachment frames, UC #135 UV-density evidence, Wreckline #4 mechanical animation, animal-design organic/rigging work, and map-design #2 environment composition.
- `axm-weather-design` main contained only its initial README and had no open PR at the final pre-publication overlap scan.

## Gap selected

The environment had a weather direction but no source-owned weather/VFX body. The highest-leverage bounded move was therefore to turn the exact context-only wind handoff into **time-sampled visual atmosphere evidence** while refusing to reinterpret it as physical wind or gameplay simulation.

## Bounded improvement

Opened `mike-axiom-mir/axm-weather-design` PR **#2 — Add first bounded wind atmosphere visual baseline**.

Branch: `studio/wind-atmosphere-baseline-001`

Exact base: `8547e98c44c2ff9b68e8a1316ad0d9721f8895d8`

Exact tested head: `ca2eaba519e8449835b0ea6ef944b7080c3caa6a`

Added:

- `examples/wind_atmosphere_baseline_001.json`
- `tools/wind_atmosphere.py`
- `tests/test_wind_atmosphere.py`
- `docs/WIND_ATMOSPHERE_BASELINE_001.md`
- `.github/workflows/wind-atmosphere-baseline.yml`

The source contract is `axm.weather-atmosphere-study/v0.1`.

It consumes only the map handoff's scene extent and visual direction, retaining relationship `CONSUMES_CONTEXT_ONLY_WEATHER_HANDOFF` and semantic label `VISUAL_DIRECTION_ONLY_NOT_PHYSICAL_WIND_SPEED`.

The candidate creates 36 deterministic streaks from exact seed `9142`, sampled at `0.00 s`, `0.25 s`, and `0.50 s`. Authored visual speed is `1.8 m/s` strictly as a visual displacement parameter. The bounded evidence window and 2 m source margin prevent wraparound, allowing direct direction/displacement measurement instead of hiding discontinuities behind periodic wrapping.

Generated evidence:

- `frame_0000ms.svg`
- `frame_0250ms.svg`
- `frame_0500ms.svg`
- `comparison.svg` — three exact time samples side-by-side
- `evidence.json`

## Exact GitHub evidence

GitHub Actions run **35045105859 — Wind atmosphere baseline: SUCCESS** on exact head `ca2eaba519e8449835b0ea6ef944b7080c3caa6a`.

- Python 3.11: compile PASS; 7/7 regressions PASS; exact evidence build PASS; artifact upload PASS.
- Python 3.13: compile PASS; 7/7 regressions PASS; evidence build/upload intentionally skipped.

Remote retained evidence reports:

- particle count: **36**;
- sample times: **0.00 / 0.25 / 0.50 s**;
- normalized visual wind: `[0.9438583563660174, 0.33035042472810605]`;
- mean projected displacement over 0.50 s: **0.8999999999999994 m**;
- maximum crosswind drift: **2.220446049250313e-16 m** floating-point residual;
- source digest: `b33feba47b0a0f9a99ec439e32a87ff6d4cb2dacffe33ba78f8b646c3a1be8d6`.

Retained Actions artifact:

- name: `wind-atmosphere-baseline-001-evidence`
- artifact ID: **10426254985**
- archive digest: `sha256:f0c6ad6f676ebcbc6610428445834e95c7a1974949285c2ae26d0b0c932a3aea`
- exact head binding: `ca2eaba519e8449835b0ea6ef944b7080c3caa6a`

The downloaded artifact's four SVG files matched the locally generated exact-source SVG bytes SHA-for-SHA. The remote evidence JSON differed only in the last floating representation digits of the mean (`0.8999999999999994` remote vs `0.8999999999999999` local), while both remain inside the tested tolerance; this is preserved rather than hidden.

## Direct visual observation

The **retained remote `comparison.svg`** was converted to PNG and inspected in this activation.

Observed:

- the same streak family is visibly displaced downwind from 0.00 → 0.25 → 0.50 s;
- streak orientation is consistent with the declared vector;
- the central corridor guide remains legible through the sparse streak field;
- density is intentionally sparse and flat, so the proof reads as a directional atmosphere layer rather than volumetric weather.

Not observed/proven:

- depth, occlusion or world-geometry interaction;
- gusting/turbulence;
- precipitation, fog, smoke or volumetric scattering;
- vegetation, cloth, character or debris response;
- final aesthetic quality or Art Director acceptance.

Therefore the visual claim is **VISUALLY_INSPECTED for this exact retained comparison only**, not a general VFX-quality claim.

## Truth boundary / non-claims

PASS means only that this exact deterministic visual streak field moves in the declared 2D **visual** wind direction across this bounded scene/time window, while preserving exact context-only provenance.

It does **not** prove physical wind speed or force, fluid/weather simulation, turbulence, precipitation, volumetrics, material or lighting response, collision, gameplay/damage, target-engine particles, runtime performance, target-device cost, final environment integration, Art Director acceptance, CANON, production readiness or VFX mastery.

## Root gate

- **Truth:** visual direction is explicitly separated from physical wind; retained remote frames were actually inspected; evidence/claims remain exact-head scoped.
- **Agency / non-domination:** weather-design owns the visual candidate but does not seize map, gameplay, physics, environment or art-direction authority.
- **Continuity:** the candidate pins the exact map PR/head that supplied context and gives Environment a provenance-preserving overlay path.
- **Wisdom before speed:** one small directional atmosphere proof was built instead of jumping immediately to a full weather simulator, engine particle stack or volumetric renderer.

## Handoffs

- **Environment / World Art:** overlay this exact weather candidate into map-design PR #2 by provenance and replace the context arrow with real time-sampled atmosphere evidence; rerun readability/composition checks instead of inheriting this PASS.
- **Nature Design:** once a real vegetation candidate exists, consume the same visual direction as a separate response input and prove visible bend/sway without calling it physics unless forces are actually modeled.
- **Rigging / Animation:** cloth/character secondary response may later consume a weather cue, but this v0 streak field grants no deformation or animation acceptance.
- **3D Art Director:** judge whether streak density/length/hierarchy supports the environment rather than obscuring it; this specialist does not grant aesthetic acceptance.
- **Visual Observer / QA:** independently inspect the retained comparison and, after Environment overlays it, challenge whether motion remains legible against real assets.
- **Runtime / Optimization:** no cost claim exists; measure only after a real renderer/engine consumes the effect.
- **Technical Art / UC Integration:** do not put this weather-specific source logic into UC yet. Consider a shared time-sampled visual-field adapter only after at least one second domain/effect proves the interface generalizes.
- **Capability Cartographer:** track whether context-only direction → source-owned visual response → environment overlay survives multiple weather/effect types before promoting a cross-repo weather/VFX contract.

## Coordination hygiene note

A connector-probing mistake created an empty branch `noop-test-should-not-create` in `axm-weather-design` pointing at the unchanged initial main commit. It contains **no delta and is not an active lane**. Current tooling exposed no branch-delete action; future cleanup may delete it without preserving any work.

## Next VFX / Atmosphere pass

1. Read PR #2 exact-head state plus Environment / Visual Observer responses first.
2. Prefer **integration of this exact retained streak candidate into the real environment baseline** over adding more abstract VFX machinery.
3. If the overlay survives readability review, the next growth step should be one materially different dynamic cue — likely gust modulation or first real vegetation response — with before/after visual evidence.
4. Do not escalate into physical weather, volumetrics or target-engine particles until a concrete consuming scene makes that machinery necessary.
