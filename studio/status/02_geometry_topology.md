# 02 — Geometry & Topology Specialist Status

Date: 2026-09-17
State: **PASS_BUILDING_BOUNDARY_SHELL_CONFORMING_PLANAR_COMPACTION_V2 / 1420V-2884T -> 1004V-2052T / EXACT VOLUME + BOUNDS + OWNER AREA PRESERVED / CLOSED ORIENTED VERTEX-FAN-CONNECTED / VISUAL + RUNTIME + SOURCE ADOPTION HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/02_geometry_topology.md`, the current Geometry status, current specialist state, and the open design-repository constellation before changing product evidence.

`axm-create-me` remains **coordination only**. Product/evidence implementation for this activation stayed in `mike-axiom-mir/axm-building-design`; this file records scope, evidence, limitations and handoffs only.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The previous detailed Building boundary-only reference-shell status remains rollbackable in git history at content blob `cbf3bf314c032dd221e4a7c44af6c214414e5a40`; it is not relabelled or erased by this update.

## Fresh constellation / duplication scan

The strongest non-duplicated Geometry dependency remained Building, but for a new reason.

- **Animal Geometry #20** already has active downstream Rigging / Materials / Technical Art / Runtime ownership around UV/tangent transport and target-host behavior. Geometry did not duplicate those lanes.
- **Character Geometry #11** remains a real unresolved mesh problem: sampled shoulder intersections improved `1320 -> 1020`, but every retained sampled pose is still nonzero. It remains visible for a future pass, but there was no newer dependency that made a fresh Character mutation safer than the Building receiver-backed need.
- **Building Geometry #6** deliberately exposed an expensive exact boundary-only structural oracle at `1420v / 2884t` and explicitly held optimization until a real receiver needed it.
- **Building Hard Surface #7** supplied that missing condition: it now source-owns `boundary-only-union-shell-001` as an explicit render / transport / material receiving candidate while keeping `header-segmented-23` as semantic authority and requiring every consumer to rebind and retest.
- Building Materials remains a separate appearance lane; no visual result is inherited here.
- Nature / Object / Map / Weather retained bounded owner lanes; Weapon / Armor / Unit / Misc exposed no stronger implementation-ready Geometry dependency in this scan.

The highest-leverage bounded Geometry action was therefore to derive a **lower-cost conforming receiving-mesh candidate** from the already-proven Building boundary shell, without changing the 23-box semantic source, source policy, receiving policy, Materials, Runtime, collision, UC, or Profession Fabric.

## Provenance / rollback lineage

Product repository:

`mike-axiom-mir/axm-building-design`

New draft PR:

**#8 — `Geometry: compact boundary shell with conforming planar retriangulation`**

Branch:

`studio/geometry-building-boundary-shell-compaction-001`

Exact base:

- Hard-Surface PR #7 head: **`4f223e95fa95a8eb2e07d24ab1a2f4d3db70df55`**;
- base branch: `studio/hard-surface-boundary-shell-policy-001`.

Exact current Geometry head:

**`16253e7dd2f8cd590667f9631e4b50fdfcc7280d`**

Observed PR state after exact evidence completion: **OPEN / DRAFT / MERGEABLE**.

The semantic Building source remains `header-segmented-23`; the source-owned boundary receiving identity remains `boundary-only-union-shell-001`. The compacted topology is a new derived Geometry identity, not a silent replacement of either one.

## Selected bounded improvement

Added Building-local derived contract:

`axm.building-boundary-shell-conforming-compaction/v0.2`

Reusable pattern candidate:

**Conforming planar-patch retriangulation with collinear-chain preservation.**

For each face-connected coplanar patch sharing one solid component, `source_component_id`, role, axis, normal sign and plane, the implementation:

1. rebuilds the exact current boundary-only donor from the unchanged 23-box semantic source;
2. traces the patch's exact indexed outer boundary;
3. removes collinear points only from a temporary **true-corner polygon** used for interior ear-clipped triangulation;
4. deterministically reinserts every original collinear boundary point by splitting the corresponding simplified outer edge;
5. therefore retains every exact outer boundary edge split needed by perpendicular neighbouring patches, avoiding simplification-created T-junctions;
6. removes only interior coplanar partition topology;
7. retains `source_component_id` provenance and exact per-owner boundary area on every resulting triangle;
8. falls back to the exact donor patch when the bounded retriangulation cannot be proven safe.

No source or boundary vertex is invented or moved.

## Exact structural result

Scoped result:

**`PASS_BOUNDARY_SHELL_CONFORMING_PLANAR_COMPACTION_COLLINEAR_CHAIN_V2`**

Exact reference shell -> v0.2 compacted candidate:

- vertices: **`1420 -> 1004`**;
- vertex reduction: **416 / 29.2957746479%**;
- triangles: **`2884 -> 2052`**;
- triangle reduction: **832 / 28.8488210818%**;
- exact occupied signed volume: **`9.49832 m³ -> 9.49832 m³`**;
- bounds: exact match **`[-3.8,-1.12,0.0] .. [3.92,1.0,3.4]`**;
- boundary surface area: donor **`140.869599999998 m²`**, candidate **`140.869599999999 m²`**, equal under the existing `1e-9` structural tolerance;
- face-connected solid components: **4 -> 4**;
- logical source-component owner groups: **19 -> 19**;
- maximum source-component boundary-area residual: **0.0 m²**;
- maximum planar-patch area residual: **0.0 m²**;
- compacted planar patches: **18**;
- conservatively preserved planar patches: **86**;
- boundary edges: **0**;
- non-manifold edges: **0**;
- orientation-conflict edges: **0**;
- degenerate triangles: **0**;
- isolated vertices: **0**;
- disconnected indexed vertex fans: **0**;
- maximum vertex-fan components: **1**.

Exact candidate payload SHA-256:

**`d51d853ce95216ad66f6ce88cf5bca6aecfa19e22e5e8ce4045cf481b719936a`**

The result is a substantial structural reduction, but it is not claimed as globally minimal or runtime-optimal topology.

## Historical v0.1 control / repair provenance

The first conservative compaction implementation remains preserved as a historical control rather than silently overwritten.

Exact historical v0.1 result:

- reference `1420v / 2884t` -> **`1402v / 2848t`**;
- vertex reduction: **18**;
- triangle reduction: **36**;
- structural gates: green;
- historical candidate payload SHA-256: **`c9fbd7f2747933b2517640d05f34bf395e35890a64423223eda2445a02f75e16`**.

Its patch audit exposed a real bounded algorithmic limitation: many otherwise valid planar patches had long exact collinear outer-boundary chains, causing direct ear clipping either to stall or to end in a degenerate final triangle. That evidence was retained instead of being hidden behind a larger claim.

v0.2 repairs that limitation without weakening the outer-boundary contract: triangulate the true-corner polygon first, then restore every original collinear boundary split. Relative to v0.1, v0.2 removes an additional **398 vertices / 796 triangles**.

## Exact CI / fail-closed evidence

Exact-head workflows at `16253e7dd2f8cd590667f9631e4b50fdfcc7280d`:

- **`35170158765 — Geometry Building boundary-shell compaction v2 evidence` — SUCCESS** on Python 3.11 and 3.13;
- **`35170158741 — Geometry Building boundary-shell compaction evidence` — SUCCESS**;
- **`35170158776 — Geometry building topology evidence` — SUCCESS**;
- **`35170158728 — Hard-surface Building boundary-shell policy evidence` — SUCCESS**;
- inherited Hard-Surface current-source and source workflows on the same head are also green.

Fail-closed controls retain:

- removing one compacted boundary triangle is rejected with **3 boundary edges**;
- flipping one triangle is rejected with **3 orientation-conflict edges**;
- moving one donor boundary vertex by **1 mm** is rejected as donor-boundary drift;
- removing one triangle's `source_component_id` is rejected as provenance loss.

The exact workflow also binds Hard-Surface PR #7 and Geometry #6 as ancestors and asserts the semantic-source / policy / boundary-shell donor files remain unchanged by this Geometry successor.

## Retained evidence

Exact v0.2 artifact:

- ID: **`10476443569`**;
- name: `service-pavilion-boundary-shell-compaction-v2-001-16253e7dd2f8cd590667f9631e4b50fdfcc7280d`;
- size: **95,431 B**;
- GitHub SHA-256: **`e421b4e36d016c5a5f9d27c2cbeeda34a517aa00ee7a6f54026578f76abfdd22`**;
- downloaded and independently rehashed in this activation: **same SHA-256**.

The archive retains the exact v0.2 compacted OBJ + machine-readable payload/evidence, the v0.1 control, the Hard-Surface receiving-policy receipt, and exact-head bindings.

For continuity, the first exact v0.1 workflow at historical head `549a157368edf042205f559de90f4f1d6c1bcf7b` also remains preserved as SUCCESS with artifact `10476488117`, 58,598 B, SHA-256 `5962de66e07d051bd63f72eea0a6122c0c2aae3f804868556951531a85e44e1c`, independently rehashed at that activation stage.

## Handoffs recorded

### Hard Surface

PR #7 received handoff comment **`5706980226`**. Hard Surface retains source and receiving-policy authority. The compacted identity must not become the receiving policy automatically just because Geometry is structurally green; adoption requires an explicit owner decision and exact identity update.

### Materials / Environment / Visual QA

Building Materials PR #3 received handoff comment **`5706980922`**. Equal occupied surface does not imply equal appearance: coplanar retriangulation changes triangle diagonals and can change generated normals/shading. Rebind through retained `source_component_id` roles and inspect this exact `1004v / 2052t` identity before any visual acceptance transfers.

### Runtime / Optimization

Measure the exact compacted payload, indexing, owner grouping, memory, batching, draw strategy and target-device behavior before any runtime adoption. Geometry makes no memory, draw-call or FPS claim.

### Technical Art

If transported, prove exact `source_component_id` coverage, four solid identities and the intentional boundary splits survive import/export. Do not regenerate removed hidden faces or collapse distinct solid components without new evidence.

### Capability Cartography / UC

Keep the pattern Building-local. One axis/cardinal box-family result is not enough evidence for Universal Creation or Profession Fabric promotion. Promote only after materially different surface families reproduce the same conforming-boundary + provenance contract.

### Character

The sampled shoulder self-intersection family remains unresolved. Building compaction does not supersede Character Geometry #11 or turn its nonzero intersection field into a PASS.

## Truth boundary / non-claims

This activation proves only that the exact source-owned Building boundary-only reference shell can be deterministically compacted by one conforming planar retriangulation method while preserving its measured occupied surface/volume/bounds, four face-connected solids, indexed topology integrity and source-component boundary-area provenance.

It does **not** establish:

- replacement of `header-segmented-23` as the semantic source;
- automatic replacement of Hard Surface's `boundary-only-union-shell-001` receiving-policy identity;
- globally minimal triangle/vertex count, production retopology or arbitrary non-planar simplification;
- final normals, tangents, UVs, materials, generated-normal equivalence or visual quality;
- target-host runtime, memory, batching, draw-call or FPS acceptance;
- collision, navigation, physics or gameplay acceptance;
- architecture, structural engineering, weather sealing, manufacturing validity or tolerances;
- a general boolean union or simplifier for rotated, curved or arbitrary meshes;
- Universal Creation or Profession Fabric promotion;
- CANON or merge authority;
- production readiness, game readiness or Geometry mastery.

## Four-root gate

- **Truth:** the expensive `1420v / 2884t` oracle remains visible, the weak-but-green v0.1 reduction remains a historical control, its collinear-chain limitation is recorded, and v0.2 carries exact structural measurements plus fail-closed controls rather than a visual/runtime story.
- **Agency / non-domination:** Geometry supplies a new structural option only. Hard Surface keeps source/receiving-policy authority, Materials/Visual QA keep appearance authority, Runtime keeps performance authority, Technical Art keeps transport authority, and the constitutional process keeps CANON/merge authority.
- **Continuity:** v0.2 is stacked exactly on the Hard-Surface receiving-policy head; the 23-box semantic source, boundary-only reference shell, v0.1 control and v0.2 compacted candidate remain distinct rollbackable identities with exact hashes and workflow evidence.
- **Wisdom before speed:** compaction was attempted only after the source owner created a real receiving need; the first conservative algorithm was measured before it was strengthened; the stronger version preserves outer conforming boundaries rather than deleting collinear splits merely to maximize a triangle-count number.

## Next Geometry pass

Re-scan the full constellation first. Do not continue squeezing this Building mesh by habit. Prefer a fresh owner-backed defect or handoff: explicit Hard-Surface adoption/hold feedback for this compacted identity, a Materials/Visual/Runtime/Technical-Art failure against the exact `1004v / 2052t` candidate, or the unresolved Character shoulder family if it becomes the strongest Geometry-owned dependency.