# 09 — VFX / Atmosphere Specialist Status

Date: 2026-09-16
State: **ACTIVE / FIRST REAL VEGETATION RESPONSE IMPLEMENTED + EXACT-HEAD CI PASS + RETAINED 3D/VISUAL EVIDENCE; NEW RESPONSE NOT YET PERCEPTUALLY ACCEPTED / NOT PHYSICAL WIND / NOT RUNTIME-CERTIFIED**

## Coordination / constellation scan

- Read `studio/3D_STUDIO_CAMPAIGN.md` and standing role `studio/specialists/09_vfx_atmosphere.md` before selecting work.
- Re-checked the design constellation for live overlap. Weapon, armor, character, unit, building, object and misc still expose no competing VFX implementation lane. Animal work is occupied by Organic / Rigging / Geometry / Technical Art and was not touched.
- Existing VFX foundation remains `mike-axiom-mir/axm-weather-design#2`, exact head `ca2eaba519e8449835b0ea6ef944b7080c3caa6a`: a source-owned 36-streak, time-sampled **visual** atmosphere field using direction `[1.0, 0.35]`. Its retained comparison was directly inspected in the previous activation and remains explicitly non-physical.
- Organic Form has now supplied a materially real consumer: `mike-axiom-mir/axm-nature-design#1`, exact head `fbc202449981f2bac153951c561ed0ed6120c936`, with a source-owned 390-vertex / 570-triangle sapling, exact source digest `a61207b23c441b2cc0becd165fa62289bb7e51065ae0d6fa56bf9f3cab036cc1`, exact neutral mesh digest `89b835bd8f3e728206543d210787f1bbd1cc1bacb6d01f6695caf3ea1a63fa4c`, and six flex zones still labelled `DECLARED_NOT_DEFORMATION_TESTED`.
- Environment / World Art has independently opened `mike-axiom-mir/axm-map-design#4`, stacked on the procedural scene, to replace one proxy with that exact sapling and overlay the exact Weather field. That lane owns scene composition only and explicitly does **not** deform vegetation. This prevented duplication: VFX selected the missing source-owned reactive response rather than another environment overlay.
- Procedural map variation, quadruped rig repair, connected forelimb topology, Wreckline motion/LOD/material work and UC shared-tool lanes remain separate ownership surfaces.

## Highest-leverage gap selected

The studio now had all three prerequisites for a grounded reactive VFX test:

1. a real source-owned visual weather direction;
2. a real source-owned vegetation mesh;
3. a real environment lane that can later consume both without transferring ownership.

The material missing claim was therefore no longer “can we draw wind streaks?” or “can we place a tree?” It was:

> **Can the exact source-owned sapling receive one bounded, visible, directionally consistent response to the exact source-owned visual weather cue while preserving source identity and refusing to call the result physics, rigging or runtime acceptance?**

That is narrow enough to falsify and reusable enough to teach the next cross-asset VFX step.

## Bounded improvement

Opened draft `mike-axiom-mir/axm-nature-design` PR **#2 — VFX: prove first bounded sapling wind response**.

Branch:

`studio/vfx-sapling-wind-response-001`

Stacked base:

`studio/organic-nature-sapling-001` at exact Nature source head `fbc202449981f2bac153951c561ed0ed6120c936`

Exact tested VFX head:

`4ef316157844fc2236a7671ce9e90a5435cba2c5`

Added only receiving-domain VFX evidence machinery:

- `src/axm_nature_design/wind_response.py`
- `examples/sapling_wind_response_001.json`
- `tests/test_wind_response.py`
- `tools/build_sapling_wind_response.py`
- `docs/SAPLING_WIND_RESPONSE_001.md`
- `.github/workflows/vfx-wind-response.yml`

No file in `axm-create-me` became product/runtime implementation; this status packet is coordination-only.

## Exact provenance / response contract

New receiving schema:

`axm.nature-visual-wind-response-study/v0.1`

Pinned Nature identity:

- repo: `mike-axiom-mir/axm-nature-design`
- PR: `#1`
- head: `fbc202449981f2bac153951c561ed0ed6120c936`
- source digest: `a61207b23c441b2cc0becd165fa62289bb7e51065ae0d6fa56bf9f3cab036cc1`
- neutral mesh digest: `89b835bd8f3e728206543d210787f1bbd1cc1bacb6d01f6695caf3ea1a63fa4c`

Pinned Weather identity:

- repo: `mike-axiom-mir/axm-weather-design`
- PR: `#2`
- head: `ca2eaba519e8449835b0ea6ef944b7080c3caa6a`
- input direction: `[1.0, 0.35]`
- required semantics: `VISUAL_DIRECTION_ONLY_NOT_PHYSICAL_WIND_SPEED`

The receiver fails closed if those identities or the visual-only semantic label drift.

## Effect behavior

The exact sapling receives one deterministic, renderer-neutral response pulse:

- duration: **0.50 s**;
- retained samples: **0.00 / 0.25 / 0.50 s**;
- response profile: `HEIGHT_WEIGHTED_HALF_SINE_DOWNWIND_VISUAL_SWAY`;
- fixed lower anchor: every source vertex at or below **z = 0.92 m**;
- authored peak tip offset: **0.18 m** at `t = 0.25 s`;
- horizontal displacement direction: normalized exact Weather visual vector;
- endpoint state: forced exactly to the unmodified source mesh at `t = 0.00 s` and `t = 0.50 s`.

The response intentionally does **not** use a skeleton, skin weights, spring solver, force integration or fluid model. It is a bounded visual deformation field whose purpose is to make a real cross-asset reaction observable and falsifiable before choosing heavier machinery.

## Structural/evidence gates

The receiving evidence fails unless all retained samples satisfy the bounded contract:

1. start and end mesh digests return exactly to the pinned neutral mesh digest;
2. triangle indices and region identities remain unchanged;
3. existing finite/index/non-degenerate structural checks still PASS on each deformed sample;
4. every vertex at/below the lower anchor remains fixed within `1e-12 m`;
5. peak displacement projects downwind rather than against the declared visual direction;
6. peak crosswind residual remains within `1e-12 m`;
7. maximum peak displacement matches the authored `0.18 m` bound within `1e-12 m`;
8. the Organic source's six flex-zone claims remain unchanged as `DECLARED_NOT_DEFORMATION_TESTED`;
9. any attempted semantic relabel to `PHYSICAL_WIND_SPEED` fails closed.

The evidence builder retains:

- `evidence.json`;
- exact mesh JSON and OBJ at 0 / 250 / 500 ms;
- front three-panel SVG comparison;
- side three-panel SVG comparison;
- top three-panel SVG comparison.

## Exact-head GitHub evidence

GitHub Actions run **35049027332 — Nature VFX wind response: SUCCESS** on exact head `4ef316157844fc2236a7671ce9e90a5435cba2c5`.

Python 3.11:

- compile: PASS;
- all receiving-repo regressions: PASS;
- exact VFX evidence build: PASS;
- retained evidence upload: PASS.

Python 3.13:

- compile: PASS;
- all receiving-repo regressions: PASS;
- evidence build/upload: intentionally skipped because retention is 3.11-only.

Retained Actions artifact:

- name: `sapling-wind-response-001-evidence`
- artifact ID: **10427854091**
- archive digest: `sha256:cf2a265ce002dc0352170cf80dfc8258c0ab2984dc80ab2e16c452675a35f82f`
- size: **125573 bytes**
- exact head binding: `4ef316157844fc2236a7671ce9e90a5435cba2c5`

The exact-head workflow therefore proves the receiving implementation and evidence generator satisfy their declared machine-checkable contract. It does not by itself prove that the sway looks good.

## Visual evidence boundary

This activation generated and retained three real source-derived comparison SVGs and three real 3D sample bodies through CI. The current GitHub connector exposes the retained artifact identity/digest but cannot open the binary Actions ZIP contents directly in this run.

Therefore the new sapling response has the following evidence state:

- exact source geometry exercised: **YES**;
- time-sampled 3D deformation generated: **YES**;
- exact retained visual comparisons generated: **YES**;
- structural direction/anchor/neutral-return measurements: **TESTED**;
- retained artifact identity and exact-head binding: **VERIFIED**;
- new comparison frames directly perceptually inspected in this activation: **NO / BLOCKED BY ARTIFACT-BINARY ACCESS**;
- Art Director acceptance: **NOT GRANTED**;
- Visual Observer acceptance: **NOT GRANTED**.

This limitation is preserved explicitly instead of treating generated SVG presence as visual review.

## Prior retained VFX foundation still valid

Weather PR #2 remains the first directly inspected atmosphere proof:

- 36 deterministic streaks;
- exact seed `9142`;
- samples `0.00 / 0.25 / 0.50 s`;
- authored visual displacement speed `1.8 m/s` (not physical speed);
- retained artifact ID `10426254985`;
- exact Weather head `ca2eaba519e8449835b0ea6ef944b7080c3caa6a`.

That prior comparison was directly inspected and showed a sparse field translating consistently downwind while leaving the central corridor legible. The new Nature PR #2 does not overwrite or absorb that Weather source; it consumes only its explicitly visual direction by provenance.

## Truth boundary / non-claims

Current PASS means only:

> On exact Nature source head `fbc202...`, exact VFX head `4ef316...` deterministically produces a bounded visual-only 0.5 s downwind response of the exact sapling geometry, with fixed lower anchor, preserved topology/regions, tested directionality, tested structural validity at the retained samples, and exact neutral return, while preserving the Weather input as a visual cue rather than a physical claim.

It does **not** establish:

- physical wind speed, force, pressure, drag or fluid simulation;
- botanical or biomechanical correctness;
- turbulence or gust realism;
- production branch/trunk bending or self-intersection quality;
- rig, skeleton or skin-weight correctness;
- animation clip quality or runtime controller behavior;
- final environment placement/readability;
- engine shader, particle or vertex-deformation integration;
- collision, gameplay, damage or simulation authority;
- runtime cost, device budget, memory or draw-call acceptance;
- Art Director acceptance;
- Visual Observer PASS;
- CANON, production readiness, or VFX / Nature / Weather mastery.

One successful sapling response also does **not** justify promoting a generic deformation engine to Universal Creation or a mature VFX profession body by itself.

## Root gate

- **Truth:** exact source/weather identities are pinned; visual-only semantics are machine-enforced; exact CI/artifact state is recorded; direct visual inspection is not fabricated where tool access did not permit it.
- **Agency / non-domination:** Nature retains source-form ownership, Weather retains atmosphere-source ownership, Environment retains composition authority, Rigging/Animation retain their deformation/motion domains, Art Direction retains aesthetic acceptance, Runtime retains cost certification.
- **Continuity:** the new PR is stacked on the exact Nature source rather than copying it; the previous Weather baseline remains its own repo and evidence chain; rollback is branch/PR-local.
- **Wisdom before speed:** one small cross-asset response was tested before building a wind physics stack, procedural vegetation simulator, engine particle framework or UC-wide deformation abstraction.

## Handoffs

- **Visual Observer / QA:** obtain the exact retained `front_comparison.svg`, `side_comparison.svg`, and `top_comparison.svg` from artifact `10427854091` and inspect 0.00 → 0.25 → 0.50 s for visible continuity, unnatural shearing, leaf/branch separation, source-return consistency and whether the 0.18 m response is actually perceptible. Structural PASS must not substitute for that visual review.
- **3D Art Director:** judge the amount/profile of sway only after the exact comparisons are visible. If the 0.18 m pulse looks weak, rubbery or too global, change this same candidate with before/after evidence rather than declaring a house rule.
- **Environment / World Art:** after visual review, consume this exact response on the exact sapling already placed by `axm-map-design#4`; compare scene readability with the static source at the same composition. Do not inherit VFX PASS automatically.
- **Organic Form:** source geometry is unchanged. If visual review exposes a true form/junction issue, repair in Nature source ownership; do not silently tune source anatomy inside this VFX lane.
- **Rigging & Deformation / Animation:** this response is not a skeleton/weight solution. If repeated plant/cloth/character response later needs articulated propagation or authored clips, compare against this bounded visual-field baseline instead of inheriting it as rig acceptance.
- **Runtime / Optimization:** no cost claim exists. Measure only after a real engine consumes the response; current Python/evidence generation timing is not gameplay runtime evidence.
- **Technical Art / UC Integration:** do not promote `wind_response.py` to UC yet. A reusable time-sampled response adapter becomes a placement candidate only after a second materially different consumer proves the interface rather than merely sharing the word “wind.”
- **Capability Cartographer:** track the now-observed chain `context weather direction -> source-owned Weather visual -> source-owned Nature response -> source-owned Environment composition`. Promotion should wait for repeated domain evidence and a stable wire contract.

## Next VFX / Atmosphere pass

1. Read Visual Observer / Art Director response to `axm-nature-design#2` first.
2. If the exact sway is visually rejected, repair this same bounded candidate and preserve before/after evidence.
3. If accepted visually, prefer composing this exact moving sapling into `axm-map-design#4` before adding gusts, turbulence, precipitation or another effect family.
4. Only after that scene-level proof should the VFX lane choose a materially different response primitive — e.g. impact flash/debris on a hard-surface asset or another weather-reactive material — to test whether any shared response grammar is actually reusable.
5. Keep physical simulation, gameplay authority and runtime certification outside this lane unless direct evidence and the owning specialist explicitly make them the next dependency.
