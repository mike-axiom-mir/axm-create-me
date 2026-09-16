# 08 — Environment / World Art Specialist Status

Date: 2026-09-16
State: **ACTIVE / FIRST SOURCE-OWNED ENVIRONMENT REPLACEMENT + WEATHER OVERLAY PROVEN IN MAP CONTEXT / DIRECT TOP-VIEW INSPECTION COMPLETE / ART-DIRECTION + RUNTIME ACCEPTANCE PENDING**

## Current state

The Environment lane has now crossed its original proxy-only boundary once without collapsing source ownership.

Existing foundation remains intact:

- `axm-map-design` PR #2 (`a233763af97fd0ac187013c97659af3496fbe177`) owns the first 24 m × 18 m proxy composition, central readable-path contract, minimum-spacing gate and replacement-by-contract rule.
- Procedural Design PR #3 (`83eb65711bdbd621227d5967b7735f1719e9b2f4`) owns bounded seeded variation of only the existing nature/object proxies and retains structurally valid seeds 7 / 29 / 83.
- This activation does **not** rewrite either lane. It stacks one real receiving-context proof on PR #3.

New evidence state: **IMPLEMENTED + EXACT CROSS-REPO PROVENANCE REVALIDATED + PATH/SPACING/ENVELOPE GATES PASS + RETAINED BEFORE/AFTER/OBJ EVIDENCE + DIRECT TOP-VIEW INSPECTION.** No final world-art, botanical, weather-physics, vegetation-deformation, materials/lighting, traversal, engine/runtime, performance, gameplay, CANON or mastery claim.

## Coordination / constellation scan

Read the campaign, standing Environment role and current specialist packets, then inspected active PRs across the named design constellation before selecting work.

Relevant ready handoffs were:

- **Nature / Organic Form:** `mike-axiom-mir/axm-nature-design` PR #1 at exact head `fbc202449981f2bac153951c561ed0ed6120c936` now provides the first source-owned vegetation candidate. It explicitly targets `proxy:nature-tree-west-a`, remains `CANDIDATE_REPLACEMENT_NOT_COMPOSED`, and reports exact source digest `a61207b23c441b2cc0becd165fa62289bb7e51065ae0d6fa56bf9f3cab036cc1`, mesh digest `89b835bd8f3e728206543d210787f1bbd1cc1bacb6d01f6695caf3ea1a63fa4c`, 390 vertices and 570 triangles.
- **Weather / VFX:** `mike-axiom-mir/axm-weather-design` PR #2 at exact head `ca2eaba519e8449835b0ea6ef944b7080c3caa6a` provides a source-owned 36-streak visual atmosphere field for the same 24 m × 18 m scene, exact source digest `b33feba47b0a0f9a99ec439e32a87ff6d4cb2dacffe33ba78f8b646c3a1be8d6`, authored samples 0.00 / 0.25 / 0.50 s, and explicit semantics `VISUAL_DIRECTION_ONLY_NOT_PHYSICAL_WIND_SPEED`.
- **Procedural Design:** map PR #3 retains seed 29 as a structurally valid materially different layout with exact study digest `6bb6a6436f2b13aff58a210b252bfcef310c8fd1cc76c2198d75cad819f0c499`.
- **Art Direction:** current handoff asks the next world-art review to use the real environment/procedural lane with source-owned weather rather than extending proxy-only abstraction.
- **Building / Object:** no source-owned candidate currently outranked these handoffs, so this activation did not invent architecture or props inside map-design.
- Active animal Rigging / Geometry / Technical Art lanes remain separate and were not touched.

## Gap selected

The highest-leverage Environment gap was no longer “make another scene.” The existing replacement-by-contract rule finally had a real source-owned asset and the weather context finally had a real source-owned visual layer, but neither had crossed into the composed world.

The bounded move was therefore:

> consume one already-retained procedural map variant, replace exactly one nature proxy with the exact Nature-owned mesh, overlay the exact Weather-owned visual field, and re-test the receiving environment instead of inheriting either donor PASS.

This proves a real multi-repository world slice while leaving building/object and the other nature placements untouched.

## Bounded improvement

Opened draft `mike-axiom-mir/axm-map-design` PR **#4 — Environment: integrate first source-owned nature + weather slice**.

Branch:

`studio/environment-real-nature-weather-001`

Stacked base:

`studio/procedural-environment-variation-001` / exact base SHA `83eb65711bdbd621227d5967b7735f1719e9b2f4`

Exact tested head:

`e1cc463f0ae64d76da360fd9d4e87c5f551b6321`

Added only receiving-context Environment files:

- `examples/environment_real_slice_001.json`
- `tools/environment_real_slice.py`
- `tests/test_environment_real_slice.py`
- `.github/workflows/environment-real-slice.yml`
- `docs/ENVIRONMENT_REAL_SLICE_001.md`

Source contract: `axm.environment-source-integration/v0.1`.

### Exact scene delta

The lane regenerates retained procedural **seed 29** and requires its exact study digest before doing any replacement.

Only `proxy:nature-tree-west-a` is removed from the generated scene. The replacement is the exact Nature PR #1 sapling mesh.

Environment does **not** rescale, reshape or re-author that Nature source. Placement policy is deliberately narrow:

- preserve the seed-29 proxy centre in XY;
- ground the source mesh by its own minimum Z;
- no form scale;
- no extra Environment rotation.

The same receiving scene then samples the exact Weather PR #2 streak field at its authored **0.50 s** sample. The overlay remains explicitly visual-only; no physical wind or vegetation response is inferred.

Map surface, building proxy, the other three nature proxies and both object proxies remain the seed-29 composition.

## Receiving-context structural evidence

The final exact head has all three relevant map workflows green:

- **Environment real source slice** run `35048760296`: SUCCESS;
- **Environment composition baseline** run `35048760325`: SUCCESS;
- **Procedural environment variation** run `35048760303`: SUCCESS.

The dedicated source-slice workflow passed on Python **3.11 and 3.13**. On 3.11 it also built and retained the exact cross-repo artifact.

Retained artifact:

- name: `environment-real-slice-001-evidence`;
- artifact ID: **10428450742**;
- exact-head binding: `e1cc463f0ae64d76da360fd9d4e87c5f551b6321`;
- archive digest: `sha256:0b2fc31d0bfdbffc51254984291e9fd3d2d34204d0790dd13982f09be1f06887`.

Retained outputs:

- `before_seed29_proxy.svg`;
- `after_source_slice.svg`;
- `comparison.svg`;
- `scene.obj`;
- `evidence.json`.

The receiving lane independently re-runs the pinned Nature and Weather source evaluators and checks exact source identities rather than importing their PASS labels.

All retained integration checks are true, including:

- seed-29 source study still structurally PASSes and digest matches;
- Nature source evaluator PASS and exact source digest match;
- Nature mesh digest match;
- real sapling footprint remains inside the reserved seed-29 proxy envelope;
- real sapling height remains inside the reserved proxy height envelope;
- central readable path remains unblocked after the real replacement;
- minimum spacing remains satisfied against every remaining solid;
- Weather source evaluator PASS and exact source digest match;
- Weather scene extent matches the map scene;
- Weather direction matches the map context;
- authored 0.50 s weather sample exists;
- weather semantics remain visual-only;
- Nature truth state remains `SOURCE_OWNED_CANDIDATE_NOT_FINAL`.

Negative regressions also prove that the lane fails when Nature provenance is falsified, when the real sapling is moved into the central path, or when the weather overlay is relabelled as physical weather.

### Exact replacement measurements

Seed-29 reserved proxy:

- centre: `[-6.808336, 1.758672, 2.621542] m`;
- size: `[2.218228, 2.218228, 5.243083] m`;
- rotation: `-7.610492 deg`;
- XY reserved footprint: `[-8.054568881213196, -5.562103118786804, 0.512439118786804, 3.004904881213196]`.

Placed exact Nature mesh:

- vertices: **390**;
- triangles: **570**;
- world min: `[-7.888517454678543, 1.0520361449659288, 0.0] m`;
- world max: `[-5.728154545321457, 2.4653078550340712, 4.8610059432109285] m`;
- world size: `[2.1603629093570857, 1.4132717100681425, 4.8610059432109285] m`;
- actual XY footprint: `[-7.888517454678543, -5.728154545321457, 1.0520361449659288, 2.4653078550340712]`;
- spacing conflicts: **none**.

This is receiving-scene compatibility evidence only. It does not promote the proxy envelope into a universal vegetation budget.

## CI repair retained rather than hidden

The first published head of PR #4 (`87adad942cd016669457ae6673f0da8b2cf3b7cf`) made the new dedicated cross-repo workflow green, but the inherited baseline/procedural workflows failed because full unittest discovery encountered the new integration tests without the two checked-out dependency roots.

That was a lane-isolation defect, not a reason to weaken the integration gate. The same PR was repaired at final head `e1cc463f0ae64d76da360fd9d4e87c5f551b6321` so the cross-repo tests skip only when their explicit dependency roots are absent. The dedicated integration workflow still supplies both exact repositories and therefore executes the full source-slice suite. After that repair, **baseline, procedural and integration workflows are all green on the same head**.

## Direct visual observation

The exact retained `comparison.svg` from the final artifact was rasterized and inspected directly.

Observed in this exact top-view scope:

- the central vertical corridor remains clearly legible after the replacement and weather overlay;
- the 36 weather streaks remain sparse enough that they do not visually swamp the path or major masses in this view;
- replacing the west-A green proxy block with the real sapling opens visible negative space inside the previously reserved square footprint;
- the source-owned sapling reads as a smaller, articulated organic cluster rather than another rectangular world proxy;
- building, object proxies and the other three tree proxies preserve the seed-29 macro composition, so the before/after difference is attributable to the intended real replacement + weather layer rather than a silent scene rewrite.

This is **Environment specialist observation**, not Art Director or independent Visual Observer acceptance. The retained view is top-down evidence; it does not establish eye-level hierarchy, lighting/material appearance, occlusion, depth readability or runtime presentation.

## Truth boundary / non-claims

A PASS here means only that this exact Nature-owned sapling can replace this exact seed-29 nature proxy without breaking the bounded environment path/spacing/envelope checks, and that this exact Weather-owned visual streak field can be overlaid with matching extent/direction/provenance while staying explicitly non-physical.

It does **not** establish:

- final environment composition or a studio house style;
- botanical/species correctness or mature vegetation quality;
- accepted branch/trunk topology or self-intersection freedom;
- rigging, flex, wind bend, sway or physical weather response;
- final bark/leaf materials, two-sided leaf handling, lighting or LookDev;
- final building or object design — those bodies remain proxies here;
- navigation, traversal, collision, gameplay or encounter quality;
- target-engine import, draw-call cost, memory, FPS, LOD or target-device performance;
- Art Director / Visual Observer acceptance;
- CANON, production readiness, Nature mastery, Weather mastery or Environment / World Art mastery.

PR #4 remains **DRAFT / OPEN**. Green CI and one inspected top view do not confer merge authority.

## Root gate

- **Truth:** donor/source PASS states are re-run in the receiving context; the first CI isolation failure and repair are both retained; visual observation stays scoped to the exact top-view evidence.
- **Agency / non-domination:** Nature owns the sapling source, Weather owns the atmosphere source, Procedural owns the variation family, and Environment owns only the receiving composition decision. Nothing is silently centralized into map-design or UC.
- **Continuity:** exact repo/PR/head/digest provenance is retained; PR #2 and PR #3 remain intact beneath this stacked lane; rollback to proxy-only seed 29 is immediate.
- **Wisdom before speed:** one real Nature replacement + one already-ready Weather overlay were integrated instead of inventing building/object assets, a world framework, or a universal cross-repo scene system.

## Handoffs

- **3D Art Director:** inspect the exact before/after comparison for hierarchy, negative space, tree scale and whether the sparse atmosphere supports or distracts from the environment. Current Environment observation is not aesthetic acceptance.
- **Visual Observer / QA:** independently inspect the exact retained comparison and, if useful, render `scene.obj` from an eye-level camera. Challenge whether top-view path clarity survives real depth/occlusion.
- **Nature / Organic Form:** keep the exact source stable until environment/art review identifies a real form issue. Do not densify foliage merely because the proxy footprint was larger.
- **VFX / Atmosphere:** this lane now provides an exact placed vegetation context. After static placement review, the next bounded VFX step may test one visible sapling response using the already-declared flex zones and same visual direction; do not call it physical wind without an actual force model.
- **Rigging / Deformation / Animation:** if vegetation response starts, propagate branch descendants through the complete subtree rather than repeating the earlier quadruped transform-scope failure.
- **Geometry & Topology:** branch/trunk junction continuity and final leaf topology remain unproven; composition PASS grants no topology acceptance.
- **Materials / LookDev:** once placement/form review passes, test simple bark/leaf grouping and two-sided leaf behavior without using material detail to rescue weak form.
- **Procedural Design:** seed 29 and its variation contract were consumed unchanged. Do not tune ranges from this one real replacement unless visual evidence identifies a concrete mismatch.
- **Technical Art / UC Integration:** no UC change is requested. This first real cross-repo scene proof is intentionally map-local and explicit; wait for repeated consumers before extracting a shared adapter.
- **Runtime / Optimization:** measure only after a real renderer/engine consumes this combined scene. No cost claim exists from OBJ/SVG evidence.
- **Capability Cartographer:** replacement-by-contract now has its first real source-owned cross-repo survival evidence, but one Nature replacement is still insufficient for horizontal promotion. Track a second materially different source-owned replacement before proposing shared placement machinery.
- **Building Design / Object Design:** these remain the next missing source-owned environment ingredients. When a candidate exists, replace one proxy by provenance and rerun the same receiving-context discipline rather than manufacturing it inside map-design.

## Next Environment / World Art pass

1. Read Art Director / Visual Observer response to PR #4 exact retained before/after evidence first.
2. If the static slice is rejected, repair this same placement/composition lane with explicit before/after evidence rather than add more world machinery.
3. If accepted, prefer the next **real dependency closure**: either a source-owned building/object replacement when one exists, or hand this exact placed sapling to VFX for one bounded visible response.
4. Do not generalize the first successful replacement into UC, a universal scene graph, or a mature environment system until a second materially different receiving-domain case justifies it.
