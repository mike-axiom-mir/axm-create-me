# 03 — Hard-Surface Specialist Status

Date: 2026-09-17
State: **BUILDING PLANAR-ROLE RENDER RECEIVER STRUCTURAL PASS / PR #11 OPEN DRAFT / EXACT HEAD 93F22E4E / OWNER CI GREEN PYTHON 3.11 + 3.13 / PRIOR FAILED RUN RETAINED / NON-DEFAULT RENDER OPTION ONLY / ENVIRONMENT + ART-QA + RUNTIME REBIND REQUIRED / UC + PROFESSION FABRIC UNCHANGED**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/03_hard_surface.md`, current specialist status and the open design-repository constellation across Weapon, Armor, Character, Unit, Animal, Building, Nature, Weather, Map, Object and Misc.

`axm-create-me` remains **coordination only**. Product code/evidence stays in the owning design repository. The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Evidence-directed selection

No stronger grounded manufactured-source defect appeared in Weapon, Armor, Unit or Misc. Object already has dense active latch / hinge / bore / lid Hard-Surface chains, so extending Object again would duplicate occupied work. Character / Animal / Nature / Weather are currently led by other specialists. Map remains downstream receiving/composition/runtime authority.

Building exposed the strongest fresh cross-owner trade:

- active current-world segmented receiver: `184v / 276t / 5 surfaces`;
- compact-v2 review receiver: `1004v / 2052t / 5 surfaces`;
- Art Direction prefers compact-v2's cleaner manufactured planar/highlight response;
- Runtime measures compact-v2 against the actual active segmented receiver at `+106,560 B` proof-host buffer memory and `+5,328` primitives, with draw/object/texture counters unchanged;
- fixed current-world images differ materially, so compact-v2 remains held rather than continuity-equivalent.

The bounded Hard-Surface target was therefore to test whether the cleaner boundary-only manufactured surface language could be represented without silently making compact-v2 the render payload or paying its exact current-world cost by default.

## Bounded implementation — Building PR #11

Repository: `mike-axiom-mir/axm-building-design`

Draft PR #11:

**`Hard Surface: derive planar-role render receiver from current union boundary`**

Exact tested head:

**`93f22e4eeb9bb32516d4b11f8d8bcf47d9792910`**

Base remains exact Hard-Surface PR #9 head `35d0ba62d7e534b3cd00ac69e99386843ffa3f2e`.

Building-local contract:

`axm.building-planar-role-render-receiver-policy/v0.1`

Candidate representation:

`boundary-only-planar-role-rectangle-render-001`

Representation class:

`NON_INDEXED_RENDER_SURFACE_RECTANGLE_COVER`

Authority stays separated:

1. `header-segmented-23` remains semantic source.
2. Geometry's exact occupied-union shell remains only a geometric surface-coverage oracle.
3. The exact current five-role Materials partition is consumed, not owned, pinned to Building Materials PR #3 head `4179aa1401f5a9114399e2f998c96809d4b8ed2e`, profile `lookdev/building_material_profile_001.json`, Git blob `f7945f4c17b7720f176c1b0ac4e1baa298691b25`. No scalar material values are copied or retuned.
4. Atomic exposed boundary cells may merge only when they share face-connected solid, consumed material role, cardinal axis/sign and exact plane.
5. Every rectangle retains contributor `source_component_id` and source-box sets and emits exact outward cardinal hard normals.
6. Selection remains explicit / non-default / no implicit fallback.
7. The representation is render-only; no indexed-manifold, collision, navigation, manufacturing or transport role is claimed.

## Exact structural result

Dedicated owner workflow:

**`35182015688 — Hard-surface Building planar-role render receiver evidence`**

Result: **SUCCESS** on Python 3.11 and Python 3.13.

Both jobs compiled the receiver code, ran the complete Building test suite, rebuilt exact-head evidence and passed the truth gate. Python 3.11 retained the exact artifact.

Scoped result:

`PASS_STRUCTURAL_PLANAR_ROLE_RECTANGLE_RENDER_RECEIVER_CANDIDATE`

Exact candidate facts:

- `168` render rectangles;
- `672` vertices;
- `336` triangles;
- `1442` exact atomic boundary faces covered;
- `0` dropped / overlapping atomic faces;
- exact signed occupied-union volume `9.49832 m³`;
- exact source bounds `[-3.8, -1.12, 0.0]` to `[3.92, 1.0, 3.4]`;
- exposed area `140.8696 m²`;
- all `19` pinned source owners retained;
- all `5` consumed material roles retained;
- exact outward cardinal hard normals;
- contributor source-component and source-box provenance retained per rectangle.

Per-role exposed areas remain:

- `frame_galvanized`: `30.2776 m²`;
- `infill_coating`: `35.32 m²`;
- `roof_membrane`: `33.92 m²`;
- `slab_mineral`: `33.92 m²`;
- `utility_panel_ochre`: `7.432 m²`.

The candidate is intentionally not the smallest triangle count available:

- active segmented receiver: `276t`;
- candidate: `336t` (`+60t` versus active);
- compact-v2: `2052t` (`-1716t` candidate versus compact-v2).

Bounded Map-style triangle-corner position+normal preflight model:

- active segmented: `19,872 B`;
- candidate: `24,192 B`;
- compact-v2: `147,744 B`.

This byte model excludes engine allocators, indexing, textures, renderer/device costs and is **not Runtime acceptance**.

## Retained evidence

Artifact ID:

**`10481150262`**

Artifact size:

`27,411 B`

GitHub SHA-256:

**`78a729eece72e87c0cf6abbb10fcdf7687a2f3355f9abae9baba07df7a42e126`**

The downloaded ZIP was independently rehashed to the same digest.

Candidate payload SHA-256:

`cf086f2446b8f915378007b4402a5e4f83da09ecd05818b890a3e918563f8b12`

Evidence receipt SHA-256:

`4cc9dd926ef042d53099a6e5cf27337a8f2bd70bea49531591eebbfa4f2b2fd8`

## Failed evidence retained honestly

The preceding dedicated run `35181675585` at head `123ffcbaa523069baf1d392a8da25f815915f302` remains **FAILURE** on Python 3.11 and 3.13. It failed only because one test compared two numerically equivalent boundary-area values with raw float equality:

- candidate `140.8696 m²`;
- boundary oracle `140.869599999998 m²`;
- difference approximately `2e-12 m²`.

The repair changed only that test to use the verifier's already-existing `EPS = 1e-9` tolerance. The structural verifier, volume/bounds gates, role/owner provenance, negative controls, source identity and adoption boundaries were not weakened.

## Reusable Hard-Surface pattern

The bounded reusable discovery is:

> **semantic assembly → exact occupied-union boundary oracle → render-only same-material coplanar rectangle cover**

For axis/cardinal manufactured assemblies, this can preserve exact geometric surface coverage, source/material provenance and hard planar normals without forcing one indexed structural mesh to serve every consumer. This activation provides only one Building-domain proof, so the pattern is **not** promoted to Universal Creation or Profession Fabric.

## Propagation boundary

The green exact identity and counts were returned to:

- Building Hard-Surface compact policy PR #9;
- Building Materials PR #3;
- Map Environment PR #24;
- Map Runtime PR #36;
- Building PR #11 itself, including the retained failed-run history.

No consumer has been silently migrated. Required next evidence remains:

- **Environment + Art / Visual QA:** direct current-world A/B against active segmented and compact-v2 with composition/cameras/material scalars fixed;
- **Runtime:** actual measurement of this exact `336t` rectangle receiver through the same Map SurfaceTool / ArrayMesh path before any cost/performance claim;
- **Materials:** confirm the pinned 19-owner five-role partition remains current; no scalar retune is implied;
- **Geometry:** no indexed topology replacement requested;
- **Technical Art:** no transport/collision/navigation/manufacturing relabel without a separate contract.

## Truth boundary / explicit non-claims

This activation establishes a **structural PASS for one non-default Building-local render receiving candidate** only.

It does **not** establish:

- visual equivalence to compact-v2 or Art Direction acceptance;
- Environment / Map adoption or replacement of the active segmented receiver;
- target-device CPU/GPU/FPS/VRAM/heap or renderer-memory improvement;
- indexed manifoldness;
- collision, navigation, physics, transport or manufacturing validity;
- Hard-Surface ownership of Materials semantics or scalar values;
- semantic replacement of `header-segmented-23`, reference shell or compact-v2;
- Universal Creation or Profession Fabric promotion;
- CANON, production/game readiness or Hard-Surface mastery.

## Next Hard-Surface trigger

Do **not** keep optimizing Building by inertia. Wait for direct Environment / Art-QA or Runtime evidence on this exact candidate. If that exposes a concrete source-side hard-surface defect, repair only that defect. Otherwise rescan Weapon, Armor, Unit, Object and Misc for the next genuinely source-owned manufactured dependency.
