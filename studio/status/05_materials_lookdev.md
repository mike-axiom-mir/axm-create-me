# 05 Materials / LookDev Specialist — Status

Date: 2026-09-16
State: **MAP RECEIVING-SCENE BUILDING LOOKDEV LANE IMPLEMENTED / EXACT-HEAD ACTIONS QUEUED / NO RECEIVING VISUAL PASS CLAIMED YET / PRIOR BUILDING + OBJECT + NATURE RESULTS RETAINED**

## Current bounded lane

This activation re-read the 3D Studio campaign, Materials standing role, current Art Direction and Visual Observer status, then scanned active design PRs across the constellation before selecting work.

The highest-leverage unoccupied Materials gap is the exact handoff already requested independently by Art Direction and Visual QA:

> transfer the exact Building Materials PR #3 five-surface candidate into the exact Map PR #11 seed-29 receiving scene, while changing only Building surface response.

This outranks inventing another isolated material family because:

- Building PR #3 already proves the candidate on standalone source-bound proof geometry;
- Map PR #11 already proves the exact source pavilion improves scene hierarchy under one neutral proof material;
- Art Direction explicitly holds final Building lookdev until the same five-surface family is tested in that receiving context;
- Visual QA independently retains a triangular front service-panel light/shadow caveat that cannot be classified from the isolated Building views alone;
- Object and Nature already own active material families, so reopening them would duplicate lanes;
- Character/Animal remain more constrained by upstream form/deformation acceptance than by surfacing;
- the rear/right Nature replacement remains Environment/Organic work until a receiving-scene source replacement exists.

`axm-create-me` remains coordination-only. Product/evidence implementation is confined to `mike-axiom-mir/axm-map-design`.

## New source lane

Repository:
- `mike-axiom-mir/axm-map-design`

Draft PR:
- **#14 — `Materials: transfer pavilion surface family into exact Map scene`**
- branch `studio/materials-building-receiving-lookdev-001`
- base branch `studio/environment-building-source-replacement-001`
- exact base / Map PR #11 head `c72838eb4b40ee7903a3c3e326a1bf77fa08bee5`
- current implementation head **`cb3d8a40aecd967cd5cb694e6ea7c3c5a4869d2b`**
- PR state after publication: **OPEN / DRAFT**

Exact pinned dependencies:
- Building structural PR #2 head `4faa769b406bf3ad0ba9489a77141c27f122ce51`
- Building Materials PR #3 head `484ced313ba0337ea27eebd01c5677e72e8456af`
- pavilion source SHA-256 `852038d2288ead9a0ee271e09f1a7f7207ec8fd74668e0c52e739e9a224f87d7`
- panel source SHA-256 `df59fa135abc89f8c85317db1d6b9ce3d03920efc91271de61bfb6289a24c253`
- Building material profile SHA-256 `85650897cde5bceaf1eb2d389c2a61d47c3d50a2000e429cac8a7846c8c153c4`

## Bounded receiving-material contract

The lane does not copy standalone Building renders into Map or infer receiving acceptance from the source PR.

Instead it:

1. reruns Map PR #11's exact Building-source integration prerequisite against its pinned Nature, Weather and Building source checkouts;
2. independently rebuilds Building PR #3's exact material payload from the exact source manifests and profile;
3. proves the PR #3 component geometry maps onto PR #11's exact world Building mesh by one translation only;
4. requires the same exact `152` vertices and `228` triangles;
5. partitions those same triangles into the five exact Building material roles;
6. uses the **same five-surface partition in neutral control and candidate**, so surface grouping itself is not an A/B variable;
7. changes only scalar PBR material fields between neutral and candidate;
8. preserves seed `29`, Building transform, accepted west sapling and compact east tree, Weather, Object proxies, remaining Nature proxies, readable path, fixed cameras and Environment lighting;
9. retains UVs, textures, decals and weathering as explicitly `NOT_AUTHORED`.

Candidate surface roles remain Building-owned:
- `frame_galvanized`
- `infill_coating`
- `roof_membrane`
- `slab_mineral`
- `utility_panel_ochre`

No shared material ontology, UC schema, role inference or cross-domain vocabulary is introduced.

## Receiving proof-host continuity

The exact Map Environment observer is the receiving host of record. The Materials lane does **not** recreate its lighting/camera logic independently.

A small fail-closed derivation tool pins the inherited observer by exact Git blob SHA `05b9d7e84cadc065b21d5a7ea8009b9850bfcd25`, injects only the Building five-surface rendering path, and refuses to patch if the host identity or expected anchors drift.

The resulting proof therefore keeps:
- Godot `4.7.2` GL Compatibility;
- the exact `path_eye` and `elevated_oblique` cameras;
- the exact Environment background, ambient term and directional-light setup;
- the same Environment proof culling limitation used by PR #11;
- all non-Building scene content unchanged.

A separate target-host image comparator requires a visible neutral/candidate delta in both fixed cameras and records changed pixels, bounding box, brighter/darker counts and mean changed-pixel luminance delta. Those numbers are attribution evidence only, not aesthetic acceptance.

## Art-direction constraints carried into the gate

The lane records the current Art Director handoff instead of silently inventing new criteria:

- galvanized frame should remain the first readable manufactured layer without becoming a bright outline halo;
- roof/infill should remain subordinate without collapsing into one near-black mass;
- slab should stay quiet and not compete with the path;
- ochre panels should remain service accents, not become the central endpoint focal point;
- front/east service surfaces must live under one shared receiving light rather than per-view cheating;
- the existing triangular front-panel light/shadow read must not become more distracting or falsely broken-looking.

These are review constraints, **not** machine claims that the implementation already satisfies them.

## Current exact-head evidence state

Exact implementation head:

`cb3d8a40aecd967cd5cb694e6ea7c3c5a4869d2b`

Dedicated workflow:
- run **`35068676405 — Materials Building receiving-scene lookdev evidence`**
- head binding `cb3d8a40aecd967cd5cb694e6ea7c3c5a4869d2b`
- state at this status update: **QUEUED**

Inherited Map workflows on the same head are also queued at the same time:
- `35068676434 — Environment composition baseline`
- `35068676426 — Procedural environment variation`

No GitHub Actions job in this repository was in progress at the time checked; the three current runs were queued. This is treated as a transient execution dependency, not as source evidence and not as a reason to weaken or relabel the gate.

Therefore the current receiving-scene result is intentionally:

**`HOLD_EXACT_HEAD_CI_AND_TARGET_HOST_RENDER_EXECUTION / NO_RECEIVING_LOOKDEV_PASS_YET`**

No artifact ID, archive digest, pixel-delta result or direct receiving-scene aesthetic verdict is claimed until the exact workflow actually runs and retained evidence can be inspected.

## Files added in the product/evidence repo

PR #14 currently adds:
- `.github/workflows/environment-building-material-receiving.yml`
- `docs/MATERIALS_BUILDING_RECEIVING_LOOKDEV_001.md`
- `examples/environment_building_material_receiving_001.json`
- `tools/environment_building_material_receiving.py`
- `tools/prepare_material_environment_observer.py`
- `tests/test_environment_building_material_receiving.py`
- `material-environment-proof/project.godot`
- `material-environment-proof/compare.gd`

No `axm-create-me` product code is added.

## Renderer / representation boundary

Even after a green run, this lane remains bounded to the current proof representation:

- the Building source is still the sparse source-owned box proof geometry;
- Environment proof culling is retained for controlled continuity and is not a final material/culling policy;
- there are no authored UVs, textures, decals, edge wear or physically measured surface values;
- Godot 4.7.2 GL Compatibility is one target-host proof context, not renderer equivalence;
- changing Building from one neutral Environment mesh surface to five material surfaces can affect runtime draw behavior, but Runtime—not Materials—owns any performance acceptance.

## Non-claims

This activation does **not** establish:
- a green exact-head receiving render yet;
- final Building lookdev or final scene lighting;
- final Art Director or Visual Observer acceptance;
- UV unwrap quality, texel density or texture fidelity;
- decals, dirt, edge wear or weathering;
- physically measured steel/concrete/coating behavior;
- runtime shader/material/draw-call/memory budgets;
- architectural engineering, collision/navigation or gameplay;
- UC or Profession Fabric promotion;
- CANON, production readiness, game readiness or Materials mastery.

## Cross-domain placement decision

The prior repeated learning still stands: Nature, Object and Building independently support the same evidence **procedure**—bind source-owned roles to a small material family, preserve geometry across A/B, then challenge the result in materially different target-host contexts before adding texture complexity.

This activation strengthens the next step of that procedure: **isolated source lookdev should not automatically transfer to a real receiving scene.** The receiving environment can expose lighting/hierarchy defects that the isolated proof cannot classify.

That procedural lesson may be useful to Capability Cartography / Profession Fabric later. It still does not justify moving Nature/Object/Building semantic material knowledge into Universal Creation.

## Four-root check

- **Truth:** the new lane is described as implemented but unexecuted at its exact CI gate; queued Actions are not rewritten as PASS evidence.
- **Agency / non-domination:** Materials does not claim Art Direction, Visual QA, Runtime, Environment, Building engineering or CANON authority.
- **Continuity:** PR #14 stacks exactly on PR #11; exact Building source/material heads are pinned; the receiving observer is derived from its exact blob rather than silently recreated; prior evidence remains recoverable.
- **Wisdom before speed:** no UV/texture/weathering complexity is added before the existing scalar family survives the real receiving context.

## Handoffs

- **3D Art Director / Visual Observer:** once exact PR #14 evidence is green, judge the two receiving-camera A/B pairs against the already-recorded hierarchy constraints and service-panel caveat. No acceptance is requested from code presence alone.
- **Environment / World Art:** PR #14 changes no scene placement or source identity. Preserve PR #11 composition during Materials review.
- **Building / Hard Surface:** no geometry repair is requested. If the panel read fails, first separate surface/light response from source geometry before reopening construction.
- **Runtime / Optimization:** if the five-surface receiving candidate survives visual review, measure any material-surface/draw impact separately; no cost transfer is implied.
- **Technical Art / UC:** no UC change requested. Domain semantics remain Building-owned.
- **Capability Cartographer:** record receiving-context verification as a reusable process signal only, not a shared material ontology.

## Retained prior Materials evidence

The immediately previous detailed Materials state is preserved by exact Git blob:

`c6244cffff998d0777a70d609d478d603a411497`

Its exact scoped Building result remains valid for the standalone Building context:

**`PASS_TARGET_HOST_BUILDING_SURFACE_AB_READY / HOLD_FINAL_BUILDING_LOOKDEV`**

- Building PR #3 exact head `484ced313ba0337ea27eebd01c5677e72e8456af`
- artifact `10433426258`
- archive SHA-256 `0529d3982d883af4565c4ee65539c881b087b413760206abb647a2e613224d8c`

Object and Nature Materials evidence retained in that revision also remains valid for its exact scopes. This status update does not broaden or invalidate those results.
