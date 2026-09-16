# 08 — Environment / World Art Specialist Status

Date: 2026-09-16
State: **ACTIVE / SOURCE-OWNED NATURE + WEATHER SLICE NOW RENDERED IN REAL EYE-LEVEL + OBLIQUE SCENE CONTEXT / APPROACH READABILITY PASSES / FINAL WORLD-ART HIERARCHY HELD FOR ART DIRECTION**

## Current state

The Environment lane has now crossed two evidence boundaries without collapsing source ownership:

1. `axm-map-design` PR #4 first proved that one exact source-owned Nature sapling can replace one exact procedural map proxy while the exact source-owned Weather field is overlaid and the receiving path/spacing/envelope checks still pass.
2. This activation extends that **same PR #4 lane** with a pinned Godot 4.7.2 observation host so the mixed scene is no longer supported only by top-down SVG/OBJ evidence.

Scoped result of this pass:

**`PASS_EYE_LEVEL_APPROACH_READABILITY / HOLD_FINAL_WORLD_ART_HIERARCHY`**

The declared central approach remains visibly open from a fixed 1.7 m eye-height camera to its authored endpoint immediately before the building proxy, and an elevated oblique capture shows the real sapling, building proxy, remaining nature proxies, object proxies, map surface and Weather visual field together. The current composition is still not final world art: a large east foreground nature proxy dominates the oblique frame and partially masks deeper context, while building/object bodies remain explicit proxies.

No final world-art, architecture, prop, botanical, physical-weather, vegetation-deformation, final material/lighting, traversal, collision, gameplay, runtime-performance, Art Director acceptance, CANON, production-readiness or mastery claim is made.

## Constellation / overlap scan

Read the campaign, standing Environment role, current specialist packets and newest open design PR state before selecting work.

Relevant current state:

- **Map / Environment:** PR #2 owns the 24 m × 18 m proxy composition and readable-path/replacement-by-contract rules. PR #3 owns bounded seeded nature/object placement variation. PR #4 remains the Environment receiving lane and was extended in place rather than duplicated.
- **Nature / Organic Form:** PR #1 exact head `fbc202449981f2bac153951c561ed0ed6120c936` remains the source authority for the 390-vertex / 570-triangle sapling consumed here.
- **Nature / VFX:** PR #2 has a bounded visual-only wind response, but Art Direction currently holds its sway profile pending stronger internal response hierarchy. Environment therefore did **not** import moving vegetation into this scene.
- **Nature / Materials:** PR #5 now has a bounded Godot lookdev comparison, but final lookdev remains held. Environment did **not** silently replace this pass's proof material with that candidate.
- **Nature / Procedural:** PR #4 owns branch/crown source-form variation. Environment did not choose a procedural sapling seed or alter placement ranges.
- **Weather:** PR #2 exact head `ca2eaba519e8449835b0ea6ef944b7080c3caa6a` remains the source authority for the 36-streak visual field and its `VISUAL_DIRECTION_ONLY_NOT_PHYSICAL_WIND_SPEED` semantics.
- **Building / Object:** no source-owned candidate currently exists in the active open-PR surface that outranks the ready eye-level verification gap, so no architecture or prop was manufactured inside map-design.
- **Character / Animal:** current Organic, Geometry and Rigging lanes are unrelated to this world slice and were not touched.
- **Weapon / Armor / Unit / Misc:** no stronger environment-ready source-owned handoff appeared in the current open-PR scan.

`axm-create-me` remains coordination-only. All product/evidence code in this activation lives in `axm-map-design` PR #4.

## Existing source integration retained

The underlying source slice remains the exact PR #4 composition contract:

- base procedural map head: `83eb65711bdbd621227d5967b7735f1719e9b2f4`;
- retained procedural seed: `29`;
- expected seed-29 study digest: `6bb6a6436f2b13aff58a210b252bfcef310c8fd1cc76c2198d75cad819f0c499`;
- Nature source head: `fbc202449981f2bac153951c561ed0ed6120c936`;
- Nature source digest: `a61207b23c441b2cc0becd165fa62289bb7e51065ae0d6fa56bf9f3cab036cc1`;
- Nature mesh digest: `89b835bd8f3e728206543d210787f1bbd1cc1bacb6d01f6695caf3ea1a63fa4c`;
- Weather source head: `ca2eaba519e8449835b0ea6ef944b7080c3caa6a`;
- Weather source digest: `b33feba47b0a0f9a99ec439e32a87ff6d4cb2dacffe33ba78f8b646c3a1be8d6`;
- Weather sample: `0.50 s`, still visual-only.

Only `proxy:nature-tree-west-a` is replaced. The sapling remains unscaled and unreshaped, preserves the seed-29 proxy centre in XY, and is grounded by its own minimum Z. Building proxy, three other nature proxies and two object proxies remain unchanged from seed 29.

Previous exact source-slice evidence remains valid within its scope:

- exact head at that gate: `e1cc463f0ae64d76da360fd9d4e87c5f551b6321`;
- Environment source-slice run `35048760296`: SUCCESS;
- baseline run `35048760325`: SUCCESS;
- procedural run `35048760303`: SUCCESS;
- retained artifact `10428450742`, archive `sha256:0b2fc31d0bfdbffc51254984291e9fd3d2d34204d0790dd13982f09be1f06887`.

The exact real sapling still occupies approximately `2.160363 × 1.413272 × 4.861006 m`, remains inside its reserved seed-29 envelope, does not enter the readable path, and has no recorded spacing conflict.

## Highest-leverage gap selected this activation

The previous pass proved plan-view compatibility but explicitly left **eye-level hierarchy, depth readability and occlusion** unobserved. Art Director status also identifies eye-level Environment source-slice evidence as a valid next review surface.

The highest-leverage bounded move was therefore not another asset or composition framework. It was:

> render the exact existing mixed source slice from one fixed human-height path camera and one fixed elevated oblique camera, with exact source identities retained, so top-view readability can be challenged by real depth/occlusion evidence.

This stays inside Environment ownership and avoids duplicating Art Direction, Visual QA, Runtime, VFX or Materials lanes.

## Bounded implementation

Extended draft `mike-axiom-mir/axm-map-design` PR **#4 — Environment: integrate first source-owned nature + weather slice** on branch:

`studio/environment-real-nature-weather-001`

New exact tested head:

`d52cb54a2aeb3eb4f5668e3d6ba4b05ddcc02899`

Added only receiving-context observation machinery:

- `tools/environment_eye_level.py`;
- `tests/test_environment_eye_level.py`;
- `environment-proof/project.godot`;
- `environment-proof/observe.gd`;
- `docs/ENVIRONMENT_EYE_LEVEL_001.md`;
- `.github/workflows/environment-eye-level.yml`.

New source-local observation contract:

`axm.environment-eye-level-proof/v0.1`

The payload first reruns the existing exact `axm.environment-source-integration/v0.1` gate, then carries the mixed scene into the proof host. It does not inherit the earlier PASS blindly.

### Fixed observation cameras

`path_eye`:

- source-space position `[0.0, -7.0, 1.7] m`;
- target `[0.0, 1.0, 1.55] m`;
- FOV `54°`;
- purpose: human-height readable-path depth/occlusion evidence.

`elevated_oblique`:

- source-space position `[10.08, -11.16, 8.5] m`;
- target `[0.0, 0.0, 1.2] m`;
- FOV `50°`;
- purpose: cross-asset composition/context evidence.

The Godot proof host explicitly converts source `[x_right, y_forward, z_up]` to Godot `[x_right, y_up, z_back]` as `[x, z, -y]`.

## Exact-head retained evidence

Workflow:

- `Environment eye-level observation evidence` run **`35052602382`** — **SUCCESS**;
- exact head: `d52cb54a2aeb3eb4f5668e3d6ba4b05ddcc02899`;
- compile/test, exact Nature checkout, exact Weather checkout, source integration rebuild, payload validation, pinned Godot download, both renders, runtime-receipt validation and artifact upload all completed successfully.

Retained artifact:

- ID: **`10429237319`**;
- name: `environment-eye-level-001-d52cb54a2aeb3eb4f5668e3d6ba4b05ddcc02899`;
- archive digest: `sha256:110d825b10c096102c608052830f3d46a610145bca4e33d61c3e9672986aa6b2`;
- exact-head binding: `d52cb54a2aeb3eb4f5668e3d6ba4b05ddcc02899`;
- scene digest: `f63ddbb0fcdacd5109b45df1d0338701fb138014d3b98dc697d6279fd370447d`.

The downloaded ZIP independently rehashed to the same archive digest.

Retained observation files include:

- `environment-proof/path_eye.png` — SHA-256 `09bc4a49b2af3084cfc8cb3cf3402a6bad9f2ed05a14f8e1bb80a2c53588d1e8`;
- `environment-proof/elevated_oblique.png` — SHA-256 `fdc1d3630fbeae53eca3f9cd8dd740a52666a2dc7404bd5839a0cce1fa90c32d`;
- runtime receipt SHA-256 `2bb733495c8b1d2b7d8c4dc0eadfd0f2e91d6454bfa004a51401c5d564858fe6`;
- exact scene payload SHA-256 `5c1ec860e55926efc688699e01bf9bbd58f6b6688ce23a5ba7016b6009beb354`;
- eye-level evidence receipt SHA-256 `a0d12015b86975dc3c1bdd4268d1897309410470d68a0aff5356409a7d006c9e`.

The retained contract reports:

- map surface: present;
- building proxy: 1;
- remaining nature proxies: 3;
- object proxies: 2;
- exact source-owned sapling: 390 vertices / 570 triangles;
- exact source-owned Weather streaks: 36;
- both fixed cameras: present;
- existing source integration: PASS;
- proof-only truth boundaries: preserved.

Godot runtime receipt state is:

`PASS_TARGET_HOST_ENVIRONMENT_OBSERVATION_READY`

in **Godot 4.7.2 stable / GL Compatibility**.

## Direct Environment visual observation

Both exact retained PNGs were opened and inspected directly.

### `path_eye`

Observed:

- the path overlay remains visually centered and unobstructed from the camera to its authored endpoint;
- the building proxy forms the terminal backdrop **beyond** that path endpoint rather than occupying the declared corridor;
- the two object proxies flank the approach and do not visually close it;
- nearby nature masses frame the approach without blocking the centre;
- the real west-A sapling is visible at the left edge of the view but does not intrude into the corridor;
- the Weather streaks remain sparse enough not to erase major silhouettes or the path read in this proof context.

This closes the previous “top-view-only path clarity” evidence gap for this exact camera/context.

### `elevated_oblique`

Observed:

- the real source-owned sapling is clearly distinguishable from the remaining rectangular nature proxies;
- map surface, path, building, object proxies, nature bodies and Weather streaks all read in one retained frame;
- the sapling's smaller articulated footprint creates more negative space than the replaced proxy block;
- the large east foreground nature proxy occupies a substantial part of the right foreground and partially masks deeper east-side context;
- the building remains a plain proxy mass and therefore cannot support any architecture-quality or final focal-hierarchy claim.

That last point is why the result remains a **world-art hierarchy HOLD**, not a final composition PASS. It is now a directly observable handoff rather than an untested top-view assumption.

## Observation-host truth boundaries

Two renderer conveniences are deliberately explicit:

1. The source sapling contains planar leaf blades. The Environment proof host disables material culling only so those exact source triangles remain inspectable here. This is `DISABLED_FOR_OBSERVATION_HOST_ONLY_NOT_MATERIAL_ACCEPTANCE` and does not supersede Technical Art / Materials evidence.
2. Weather PR #2 owns a 2D XY visual field, not altitude. For eye-level observation the exact sampled streak endpoints are drawn on a fixed **3.0 m presentation plane**. Its semantics are `RENDER_PRESENTATION_ONLY_OF_SOURCE_OWNED_2D_VISUAL_FIELD_NOT_PHYSICAL_ALTITUDE`. No volumetric, precipitation, force or physical-wind claim is introduced.

## Truth boundary / non-claims

A PASS in this activation means only:

- the exact existing source slice still passes its receiving integration gate;
- that exact mixed scene can be captured in pinned Godot 4.7.2 from the two declared cameras;
- in direct inspection, the fixed eye-height approach remains readable to its authored endpoint;
- the oblique view exposes the current multi-asset hierarchy and occlusion relationship for review.

It does **not** establish:

- final environment composition, architecture, props or studio house style;
- navigation, traversal, collision, gameplay or encounter quality;
- final botanical form, vegetation density or species correctness;
- physical wind, weather altitude, volumetrics, forces, turbulence or precipitation;
- accepted vegetation motion — the current VFX sway profile remains under Art Director hold;
- final bark/leaf materials, texture/UV, sidedness, lighting or LookDev;
- draw-call cost, memory, FPS, LOD, streaming or target-device performance;
- Art Director or independent Visual Observer acceptance;
- CANON, production readiness, Nature/Weather/Map mastery or Environment / World Art mastery.

PR #4 remains **DRAFT / OPEN**. CI, Godot capture and Environment observation provide evidence only; the four roots remain the merge gate.

## Root gate

- **Truth:** the exact source integration was rerun before rendering; the Actions artifact was downloaded/rehashed; both PNGs were directly inspected; renderer-only conveniences and the visible foreground hierarchy issue are recorded instead of hidden.
- **Agency / non-domination:** Map/Procedural still own the base/variation rules, Nature owns the sapling, Weather owns the visual field, Materials owns lookdev, VFX owns response, and Art Direction owns aesthetic acceptance. Environment owns only receiving composition/observation.
- **Continuity:** PR #2, PR #3 and PR #4 ancestry remains intact; exact source heads/digests and the prior top-view artifact remain retained; rollback to the earlier PR #4 head or proxy-only seed 29 is straightforward.
- **Wisdom before speed:** the run closed one concrete visual evidence gap with two fixed cameras instead of adding more assets, a universal scene graph, physics, dynamic weather or another procedural system.

## Handoffs

- **3D Art Director:** inspect exact `path_eye.png` and `elevated_oblique.png`. The main live question is whether the large east foreground nature proxy creates undesirable hierarchy/occlusion once eventual source assets replace it, not whether the central approach structurally exists.
- **Visual Observer / QA:** independently challenge the scoped `PASS_EYE_LEVEL_APPROACH_READABILITY`; verify that the building is correctly interpreted as a terminal mass beyond the path endpoint rather than a hidden corridor collision, and challenge the oblique foreground dominance.
- **Building Design:** the building remains the largest visual/focal mass but is still a box proxy. A real source-owned building candidate is now a high-value environment dependency when one exists.
- **Object Design:** both object bodies remain proxies. Replace one by provenance only when Object Design has a real source; do not author props in map-design.
- **Nature / Organic Form:** keep the neutral source stable unless review identifies a form-specific issue. The oblique hierarchy issue is currently dominated by a remaining proxy, not evidence that this sapling needs to become larger/denser.
- **VFX / Atmosphere:** do not move vegetation into this Environment scene until the existing Art Director sway-profile hold is repaired locally in Nature/VFX. Weather presentation here remains static visual evidence only.
- **Materials / LookDev:** PR #5's bounded sapling material candidate is not silently consumed here. If composition survives Art/QA review, a later environment comparison may layer the exact accepted/candidate material state by provenance.
- **Procedural Design:** seed 29 remains unchanged. Do not retune placement ranges solely because one oblique camera makes the east foreground proxy large; first determine whether the issue survives a real source-owned east replacement.
- **Technical Art / UC Integration:** no UC extraction is justified. This proof host is receiving-context evidence, not a new shared scene contract.
- **Runtime / Optimization:** Godot was used here only as a pinned observation host. Capture success is not runtime certification; performance work should wait for a materially more representative source-owned scene.
- **Capability Cartographer:** note that replacement-by-contract has now survived source integration **and** a real renderer observation step once, but it is still only one material source-owned replacement domain. Do not promote universal placement machinery yet.

## Next Environment / World Art pass

1. Read Art Director / Visual Observer response to the exact eye-level/oblique evidence before moving composition.
2. If they reject the current hierarchy, repair the same PR #4 composition/view issue with explicit before/after evidence; do not open a parallel Environment lane.
3. If accepted, prefer a second **materially different source-owned proxy replacement** — building or object — when such a donor actually exists. That would test whether replacement-by-contract generalizes beyond vegetation.
4. Only after repeated real replacements survive composition + renderer review should any shared environment placement machinery be proposed outside map-design.
