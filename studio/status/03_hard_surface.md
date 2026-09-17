# 03 — Hard-Surface Specialist Status

Date: 2026-09-17
State: **BUILDING PLANAR-ROLE RENDER RECEIVER CANDIDATE / PR #11 OPEN / EXACT HEAD 93F22E4E / FIRST EXACT OWNER RUN FAILED ON FLOAT-EQUALITY TEST ONLY / TEST REPAIRED TO EXISTING VERIFIER EPS / REPLACEMENT RUN 35182015688 QUEUED — NO PASS CLAIM / DOWNSTREAM ADOPTION HELD / UC + PROFESSION FABRIC UNCHANGED**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/03_hard_surface.md`, current specialist status and the open design-repository constellation across Weapon, Armor, Character, Unit, Animal, Building, Nature, Weather, Map, Object and Misc.

`axm-create-me` remains **coordination only**. Product code/evidence stays in the owning design repository. The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Evidence-directed selection

No stronger grounded manufactured-source defect appeared in Weapon, Armor, Unit or Misc. Object already has dense active latch / hinge / bore / lid Hard-Surface chains, so extending Object again would duplicate occupied work. Character / Animal / Nature / Weather are currently led by other specialists. Map is downstream receiving/composition/runtime authority.

Building exposes the strongest fresh cross-owner gap:

- active current-world segmented receiver: `184v / 276t / 5 surfaces`;
- compact-v2 review receiver: `1004v / 2052t / 5 surfaces`;
- Art Direction prefers compact-v2's cleaner manufactured planar/highlight response;
- Runtime measures compact-v2 against the actual active segmented receiver at `+106,560 B` proof-host buffer memory and `+5,328` primitives, with draw/object/texture counters unchanged;
- fixed current-world images differ materially, so compact-v2 remains held rather than continuity-equivalent.

The bounded Hard-Surface target is therefore to test whether the cleaner boundary-only manufactured surface language can be represented without silently making compact-v2 the render payload or paying its exact current-world cost by default.

## Bounded implementation — Building PR #11

Repository: `mike-axiom-mir/axm-building-design`

Draft PR #11:

**`Hard Surface: derive planar-role render receiver from current union boundary`**

Current exact head:

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
2. Geometry's exact occupied-union shell is consumed only as a geometric surface-coverage oracle.
3. The exact current five-role Materials partition is consumed, not owned, pinned to Building Materials PR #3 head `4179aa1401f5a9114399e2f998c96809d4b8ed2e`, profile `lookdev/building_material_profile_001.json`, Git blob `f7945f4c17b7720f176c1b0ac4e1baa298691b25`. No scalar material values are copied or retuned.
4. Atomic exposed boundary cells may merge only when they share face-connected solid, consumed material role, cardinal axis/sign and exact plane.
5. Every rectangle retains contributor `source_component_id` and source-box sets and emits exact outward cardinal hard normals.
6. Selection is explicit / non-default / no implicit fallback.
7. The representation is render-only; no indexed-manifold, collision, navigation, manufacturing or transport role is claimed.

## Structural verifier

The exact-head verifier requires the exact `23`-box / `276`-triangle semantic source, exact occupied-union boundary, all 19 pinned Materials source owners and five material roles, zero dropped/duplicated atomic faces, exact occupied-union volume/bounds, preserved total/per-role exposed area, contributor provenance, cardinal outward normals, and candidate triangle count below compact-v2's `2052` triangles. Negative controls reject dropped coverage, role drift and contributor-provenance loss.

The reported Map-style triangle-corner position+normal byte model is preflight only; Runtime owns actual engine/device measurement.

## Exact failed run retained

Dedicated owner run:

**`35181675585`**

Exact head:

`123ffcbaa523069baf1d392a8da25f815915f302`

Result: **FAILURE** on both Python 3.11 and 3.13.

The code compiled. Existing Building tests passed. The new candidate's structural-result, compact-v2-size, provenance, negative-control and non-default/render-only tests passed. One new test failed because it used raw float equality for two numerically equivalent surface-area values:

- candidate: `140.8696 m²`;
- boundary oracle: `140.869599999998 m²`;
- difference: approximately `2e-12 m²`.

Because the full suite failed, the exact evidence build, truth gate and artifact retention correctly did not run. No PASS was claimed.

## Bounded repair

Current head `93f22e4eeb9bb32516d4b11f8d8bcf47d9792910` changes only that test expectation from raw float equality to `assertAlmostEqual(..., delta=EPS)`, using the verifier's existing `EPS = 1e-9` tolerance.

The structural verifier itself was **not** weakened. Volume/bounds checks, per-role coverage, provenance gates, negative controls, semantic-source identity and adoption boundaries remain unchanged.

Replacement dedicated run:

**`35182015688`**

Current state at this observation: **QUEUED**.

Therefore there is still **no final structural PASS, final rectangle/vertex/triangle count, retained artifact or digest claim** for PR #11 yet.

## Reusable pattern under test

For axis/cardinal manufactured assemblies, the bounded pattern is:

> **semantic assembly → exact occupied-union boundary oracle → render-only same-material coplanar rectangle cover**

If exact evidence becomes green, this may preserve clean manufactured planar surfaces and full contributor provenance without forcing one indexed structural mesh to serve every consumer. It remains Building-local evidence, not a Universal Creation or Profession Fabric contract.

## Propagation boundary

The pending identity was returned to Building PR #9, Building Materials PR #3 and Map Environment PR #24 with **no PASS transfer and no adoption request**. Materials retains semantic/scalar authority. Geometry retains indexed topology authority. Environment / Art / Visual QA retain visual/current-world acceptance. Runtime retains actual cost authority. Technical Art retains transport/import authority.

No consumer has been silently migrated.

## Truth boundary / explicit non-claims

This activation establishes a bounded implementation plus one exact failed test run and one repaired exact head awaiting execution. It does **not** establish structural PASS, visual equivalence to compact-v2, Environment adoption, Runtime savings, target-device performance, transport/collision/navigation/manufacturing validity, Materials ownership transfer, UC/PF promotion, CANON, production readiness or Hard-Surface mastery.

## Next Hard-Surface trigger

Resolve exact PR #11 owner CI first. If green, record exact representation counts/artifact identity and hand the exact receiver to Environment / Art-QA / Runtime for explicit rebind. If red, repair only the falsified assumption and retain the failed evidence. Do not continue Building optimization by inertia after that; rescan Weapon, Armor, Unit, Object and Misc for the next genuinely source-owned manufactured dependency.
