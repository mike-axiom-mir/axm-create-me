# 03 — Hard-Surface Specialist Status

Date: 2026-09-17
State: **PASS_SOURCE_OWNED_BUILDING_COMPACT_OWNER_SEAM_GRAPH / 268 CROSS-OWNER EDGES / 30 OWNER PAIRS / 34.72 M / ZERO IDENTITY OR GEOMETRY DRIFT / SAME-OWNER INTERNAL EDGES 4058→2810 / 67 TESTS PASS / 8 EXACT-HEAD WORKFLOWS GREEN / UC+PF UNCHANGED**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/03_hard_surface.md`, all current specialist status files and the live design/open-PR constellation before selecting work.

`axm-create-me` remains **coordination only**. Product implementation and retained evidence are in `mike-axiom-mir/axm-building-design`. No product implementation, Universal Creation implementation or Profession Fabric implementation was added here.

The four AXM roots remain the internal merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

Previous Hard-Surface coordination state is preserved at blob:

**`84ba4667aa07c8bf4c828beb69554a2c6c0292e1`**

That activation proved Building utility-panel mount-axis clearance **capacity** without selecting a radius. This activation does not extend that mount-axis lane by cadence.

## Fresh constellation / duplication scan

- **Weapon / Armor / Unit / Misc:** repositories remain effectively empty and expose no grounded manufactured source mechanism. No placeholder weapon, armor, unit or misc mechanism was invented.
- **Character / Animal:** active work is organic, deformation, materials, topology and target-observer territory; no stronger manufactured Hard-Surface seam was present.
- **Nature / Weather:** non-manufactured lanes remain separately owned.
- **Map:** active work is receiver/transport/runtime/environment evidence; no source-owner authority was taken from Map.
- **Object:** latch/capture, service surfaces, registration, interfaces and material/transport follow-ons are already mature; another Object refinement would have duplicated active evidence.
- **Building:** Geometry PR #8 already produced the exact compact boundary receiving mesh and Hard Surface PR #9 already source-owned it as an explicit non-default receiving option. The remaining owner-side gap was sharper: owner counts/areas alone did not prove that compaction preserved the exact indexed boundaries where one named manufactured source component meets another.
- **Procedural:** current Building Procedural work is already consuming the prior mount-axis-capacity result, confirming that lane should not be repeated.

No new Hard-Surface PR was opened. Existing Building Hard-Surface PR #9 was advanced in place.

## Highest-leverage bounded improvement

Repository:

`mike-axiom-mir/axm-building-design`

Existing draft PR:

**#9 — `Hard Surface: source-own compact boundary option and owner-seam graph`**

Exact current head:

**`04d9a06bf8e8097c62de348d11230145b1f27686`**

Observed PR state:

**OPEN / DRAFT / MERGEABLE**

Exact Geometry donor:

**PR #8 head `16253e7dd2f8cd590667f9631e4b50fdfcc7280d`**

Existing compact receiving policy remains byte-identical:

- schema: `axm.building-compact-boundary-shell-policy/v0.1`;
- Git blob: `ccb06b004f96d1ecfaacd39f093b88cf5194e6c0`;
- compact representation: `boundary-only-union-shell-conforming-compact-v2-001`;
- compact payload SHA-256: `d51d853ce95216ad66f6ce88cf5bca6aecfa19e22e5e8ce4045cf481b719936a`;
- status remains `SOURCE_OWNED_DERIVED_COMPACT_RECEIVING_OPTION_NOT_DEFAULT`.

The semantic source remains `header-segmented-23`; no source geometry or Geometry algorithm was changed.

## New source-owner seam contract

Added companion policy:

`assets/service_pavilion_001_compact_boundary_owner_seam_policy.json`

Schema:

**`axm.building-compact-boundary-owner-seam-policy/v0.1`**

Verifier:

`tools/verify_service_pavilion_compact_boundary_owner_seams.py`

Tests:

`tests/test_service_pavilion_compact_boundary_owner_seams.py`

Workflow:

`.github/workflows/hard-surface-building-compact-owner-seams.yml`

A source-owner seam is intentionally narrow:

**`MANIFOLD_EDGE_INCIDENT_TO_EXACTLY_TWO_TRIANGLES_WITH_DIFFERENT_SOURCE_COMPONENT_ID`**

Its identity is:

**`SORTED_SOURCE_COMPONENT_PAIR_PLUS_SORTED_DONOR_SOURCE_VERTEX_IDS`**

This is a representation/provenance boundary only. It does not infer a physical gap, bevel, chamfer, weld, fastener, gasket or material border.

## Exact structural result

Reference boundary shell → compact v2:

- cross-owner seam edges: **`268 → 268`**;
- distinct source-owner pairs: **`30 → 30`**;
- total cross-owner seam length: **`34.72 m → 34.72 m`**;
- missing owner-seam identities: **`0`**;
- added owner-seam identities: **`0`**;
- maximum seam-endpoint residual: **`0.0 m`**;
- maximum seam-length residual: **`0.0 m`**;
- exact owner-seam identity SHA-256: **`75b865c2b6f0559410549c03ac1c3b44fd00a71b186289d8a2ccb1e06df2c322`**;
- same-owner internal triangulation edges: **`4058 → 2810`**;
- same-owner internal edge reduction: **`1248`**.

Scoped result:

**`PASS_SOURCE_OWNED_COMPACT_BOUNDARY_OWNER_SEAM_GRAPH_PRESERVED`**

The useful boundary is now executable: Geometry may remove triangulation inside one source owner's planar patch while Hard Surface requires exact cross-owner boundary identity and geometry to remain proven before the compact representation inherits manufactured source-boundary meaning.

## Fail-closed coverage

The new verifier rejects:

1. cross-owner triangle relabelling;
2. donor seam-vertex identity collapse;
3. expected owner-seam digest drift;
4. silent expansion from representational owner seam into physical-bevel authority.

All four negative controls reject as intended.

## Exact CI / retained evidence

Dedicated exact-head workflow:

**`35239355172 — Hard-surface Building compact owner-seam evidence — SUCCESS`**

- Python 3.11: **SUCCESS**;
- Python 3.13: **SUCCESS**;
- complete Building repository suite: **67 / 67 tests PASS** on the exact head.

All eight exact-head workflow families observed for `04d9a06b...` completed **SUCCESS**:

- `35239355172` — Hard-surface Building compact owner-seam evidence;
- `35239355469` — Hard-surface Building boundary-shell policy evidence;
- `35239355339` — Geometry building topology evidence;
- `35239355369` — Geometry Building boundary-shell compaction evidence;
- `35239355211` — Hard-surface building evidence;
- `35239355370` — Hard-surface Building compact boundary-shell policy evidence;
- `35239355189` — Geometry Building boundary-shell compaction v2 evidence;
- `35239355192` — Hard-surface Building current-source policy evidence.

Retained artifact:

- ID: **`10503894725`**;
- name: `service-pavilion-compact-owner-seams-04d9a06bf8e8097c62de348d11230145b1f27686`;
- uploaded size: **3,393 B**;
- files: **3 / 8,435 uncompressed bytes**;
- GitHub SHA-256: **`c2c42281a53827196fedfd45c5d834734e31bdc207c065af31ea285054222137`**;
- independently downloaded/rehashed SHA-256: **same exact digest**.

## Reusable Hard-Surface learning

Building-local rule:

**`RECEIVING_MESH_COMPACTION_MAY_REMOVE_SAME_OWNER_INTERNAL_TRIANGULATION_ONLY_IF_EXACT_CROSS_OWNER_SEAM_IDENTITY_AND_GEOMETRY_REMAIN_PROVEN`**

This separates two facts that should not be conflated:

1. **Geometry-internal triangulation freedom** inside one exact source owner under Geometry's structural gates;
2. **Hard-Surface source-owner boundary continuity** where one named manufactured owner meets another.

Preserving only source-owner counts or surface area is not enough to prove the second. Exact owner-pair + donor-vertex seam identity provides a stronger source-owner gate without freezing all triangulation.

This remains Building-local. No materially different manufactured family has yet reproduced the same compaction/seam problem, so no generic UC simplifier, Hard-Surface seam ontology or Profession Fabric implementation is promoted.

## Propagation / handoffs

- **Building PR #9:** PR title/body now retain the exact owner-seam contract, exact CI and artifact evidence.
- **Geometry PR #8:** comment `5716852116` returns the owner-side result. No Geometry change is requested; current v2 already satisfies the new boundary.
- **Materials / Art / Visual QA:** no normal/tangent/UV/material/appearance PASS transfers from seam preservation.
- **Technical Art:** any future transport should preserve exact owner-seam identity rather than only source-owner counts.
- **Runtime:** seam preservation is not a performance or target-device claim.

No consumer was auto-migrated. No PR was merged or marked ready for review.

## Truth boundary / explicit non-claims

This activation does **not** prove or choose:

- a physical gap, panel line, bevel or chamfer;
- a weld, fastener, gasket or adhesive joint;
- a material boundary;
- manufacturing method, assembly order, tolerance, sealing or loads;
- normal/tangent/UV/material equivalence;
- Technical Art transport acceptance;
- Environment adoption;
- Runtime/device acceptance;
- Art Direction or Visual QA acceptance;
- automatic compact-v2 adoption;
- semantic source replacement;
- arbitrary-mesh simplification safety;
- UC/PF implementation;
- CANON;
- production/game readiness;
- Hard-Surface mastery.

## Four-root gate

- **Truth:** exact donor/compact identities are pinned; source-owner seam identity is checked by owner pair + donor source-vertex IDs, with zero endpoint/length residual and fail-closed mutations.
- **Agency / non-domination:** Hard Surface owns only producer-side manufactured boundary meaning; Geometry keeps compaction implementation, consumers keep transport/material/runtime/visual decisions.
- **Continuity:** existing PR #9 was advanced instead of replaced; its prior compact receiving policy blob remains byte-identical; Geometry PR #8 remains exact donor history; previous status blob remains addressable.
- **Wisdom before speed:** no empty Weapon/Armor/Unit/Misc repo was filled speculatively, no mature Object lane was duplicated, and the stronger rule was kept Building-local instead of prematurely promoted.

## Next Hard-Surface trigger

Re-scan the full manufactured constellation first. Prefer the first grounded Weapon, Armor, Unit or Misc source mechanism if one appears. Otherwise choose a **different** real source-owner seam in an existing manufactured family—preferably rigid attachment, retention/capture, service-access, source-vs-receiver mechanical meaning, or a materially independent compaction/interface case. Do not continue Building compact-shell seam work by cadence, and do not promote this Building-only rule into UC/PF until a materially different manufactured family reproduces it.
