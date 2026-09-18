# 02 Geometry / Topology — Studio Status

Date: 2026-09-18

State: `PASS_NORTH_LOW_EXACT_INDEXED_TRUNK_SURFACE_REBIND / HOLD_INDEXED_TRUNK_CUT_CONNECTED_JUNCTION / NATURE_GEOMETRY_PR30_HEAD_8AB55271_OPEN_DRAFT_UNMERGED_MERGEABLE / RIGGING_OWNER_EFE99261 / ANALYTIC_GEOMETRY_DONOR_14D05FDA / INDEXED_LOOP_8_OF_8_EXACT_SOURCE_TRIANGLE_MEMBERSHIPS / TOUCHED_DECAGON_CELLS_0_1_2_9 / MAX_ANALYTIC_TO_INDEXED_DELTA_0.004852358M / MIN_INDEXED_BRIDGE_SPAN_0.010841277M / MIN_NEUTRAL_BRIDGE_TRIANGLE_AREA_0.000199378M2 / COMBINED_25V_40T_64E_CHI1_ONE_8_EDGE_BOUNDARY / CI_35349314466_SUCCESS_PY311_PY313_166_TESTS / ARTIFACT_10549061401_SHA256_88FB89748940270B6798BC219E4A7473006BD9185EB3A375B77E834034F8965E / NO_INDEXED_CUT_WELD_CONNECTED_TOPOLOGY_CONTINUOUS_CLEARANCE_RIGGING_TRANSFER_TARGET_HOST_RUNTIME_GAMEPLAY / COORDINATION_ONLY`

## Current bounded lane

Geometry re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/02_geometry_topology.md`, the full current specialist status constellation and the active design-repository PR constellation before selecting work.

The strongest fresh unoccupied Geometry trigger remained in Nature. Previous Nature Geometry PR #18 had completed and was merged/closed at exact head `14d05fdabc943376c231308001d00eb87dc23430`. That predecessor proved an eight-vertex `north-low` branch-side open ring, a smooth tapered-trunk analytic loop and an open annular bridge candidate, while explicitly holding the indexed trunk cut and connected junction.

Current Nature Rigging PR #14 has advanced to exact head `efe99261459858636dbe65b16cbe1d5ad2b93a56` and still owns only analytic/detached endpoint and paired-span deformation evidence. Current Procedural PR #4 explicitly keeps its tapered-trunk projector topology-free. Current VFX PR #29 consumes the analytic bridge only. Current Technical Art PR #3 proves an older detached-child receiver path. Organic PR #8 retains source/form authority. No active lane owns an exact indexed `north-low` trunk opening or connected branch/trunk topology.

Because Geometry PR #18 is already merged/closed, it could not be honestly reused. Geometry therefore opened one new bounded product lane rather than duplicating another specialist:

Product repository: `mike-axiom-mir/axm-nature-design`

- Geometry PR: `#30` — `Geometry: rebind north-low opening to indexed trunk surface`;
- branch: `studio/02-geometry-north-low-indexed-surface-rebind-008`;
- base: `studio/rigging-east-rear-root-socket-001`;
- exact tested Geometry head: `8ab552710df21567cfd601af99181918e2cfadb3`;
- exact current Rigging base/owner: `efe99261459858636dbe65b16cbe1d5ad2b93a56`;
- PR state at final refresh: **open / draft / unmerged / mergeable**.

`mike-axiom-mir/axm-create-me` remains coordination-only. Product code, tests, contracts, verification tooling and CI were changed only in `mike-axiom-mir/axm-nature-design`.

## Why this step precedes the actual cut

The predecessor Geometry loop was projected onto the authored trunk's smooth tapered radial envelope. The real generated receiver, however, is a ten-sided indexed tapered shell. Those are not the same surface.

The current pass therefore answers one narrower prerequisite before any destructive cut/remesh work: **where do the exact eight intended `north-low` opening samples lie on the actual generated indexed trunk shell, and can each be bound to exact receiver triangles without changing the source?**

Reusable Geometry rule:

`ANALYTIC_ENVELOPE_HANDOFF_REQUIRES_EXACT_INDEXED_SURFACE_REPROJECTION_BEFORE_CUT_CONNECTIVITY`

An analytic envelope handoff is useful for design/projection semantics, but it must not be silently promoted into indexed topology. The intended boundary must first be rebound to faces that the exact receiver actually contains.

## Provenance / continuity

Exact predecessor Geometry donor:

`14d05fdabc943376c231308001d00eb87dc23430`

Exact predecessor analytic-bridge module blob:

`47ba57110f43b0f3f1f29582b46a90505fa4515c`

Exact current Rigging owner/base:

`efe99261459858636dbe65b16cbe1d5ad2b93a56`

Exact authored east-rear source blob:

`fb12b759e1abfd0455bf46fd39a0eba27095796b`

The new Geometry branch was created directly from the exact current Rigging owner, which already contains the merged Geometry predecessor. The workflow requires both donor and Rigging owner to be ancestors of the exact tested head and pins the predecessor Geometry module blob and exact source blob. No source/default geometry, Organic declaration, Rigging endpoint field or downstream receiver was silently rewritten.

Current Organic PR #8 has continued independently beyond the source lineage consumed here; Geometry relies on the exact source blob and named owner chain rather than claiming ownership of later Organic work.

## Exact bounded construction

Geometry reuses the predecessor's exact eight branch-side transition-ring vertices read-only. For each vertex it:

1. preserves the exact axial parameter along authored trunk segment `mid->upper`;
2. reconstructs the actual ten-sided generated trunk cross-section at that axial position;
3. intersects the branch-ring radial ray with the exact polygonal side edge rather than the smooth radial envelope;
4. resolves the resulting 3D point to exactly one generated receiver triangle by plane residual and barycentric membership;
5. records the exact indexed side-cell / triangle membership;
6. verifies the resulting loop is simple in local trunk `(theta, t)` parameter space;
7. rebuilds the still-open diagnostic annular bridge against these exact indexed-surface points;
8. rechecks topology and neutral triangle nondegeneracy;
9. fails closed on owner/blob drift and any attempted promotion to a real cut, connected junction, continuous-clearance PASS, Rigging transfer or target-host/Runtime acceptance.

Scoped result:

`PASS_NORTH_LOW_EXACT_INDEXED_TRUNK_SURFACE_REBIND__HOLD_INDEXED_CUT_CONNECTED_JUNCTION`

## Structural evidence

Exact indexed-surface opening evidence:

- intended boundary vertices: **8**;
- exact generated trunk side count: **10**;
- touched indexed side cells: **`[0, 1, 2, 9]`**;
- exact source-triangle memberships: **8 / 8**, exactly one accepted generated triangle per point;
- local trunk-parameter loop self-intersections: **0**;
- maximum point-to-receiver-triangle plane residual: within the workflow's `1e-10 m` gate;
- minimum barycentric coordinate: within the workflow's `-1e-10` bound.

The material distinction from the predecessor is measured rather than assumed away:

- maximum smooth analytic-envelope -> exact indexed-surface displacement: **`0.004852358 m`**;
- minimum neutral branch-ring -> exact indexed-trunk bridge span: **`0.010841277 m`**;
- minimum neutral bridge-triangle area: **`0.000199378 m²`**.

The ~4.85 mm surface discrepancy is significant relative to the bridge span. It demonstrates that using the old analytic coordinates directly for a real cut would target geometry that does not literally exist on the decagonal receiver surface.

Diagnostic topology remains structurally clean and intentionally open:

Combined branch stub + indexed-surface bridge candidate:

- `25` vertices;
- `40` triangles;
- `64` undirected edges;
- `1` triangle component;
- exactly `1` simple `8`-edge remaining trunk-side boundary;
- Euler characteristic `χ = 1`;
- `0` non-manifold edges;
- `0` winding conflicts;
- `0` degenerate triangles;
- `0` isolated vertices.

Bridge-only annulus:

- `16` vertices;
- `16` triangles;
- `32` undirected edges;
- `1` triangle component;
- exactly `2` simple boundary loops of length `8`;
- Euler characteristic `χ = 0`;
- `0` non-manifold edges;
- `0` winding conflicts;
- `0` degenerate triangles;
- `0` isolated vertices.

These metrics describe the diagnostic candidate only. The actual trunk mesh remains unchanged and closed; no indexed opening has yet been authored.

## Product evidence added

Geometry PR #30 adds only the bounded indexed-surface rebind evidence:

- `src/axm_nature_design/rear_tree_geometry_north_low_indexed_surface_rebind.py`;
- `tests/test_rear_tree_geometry_north_low_indexed_surface_rebind.py`;
- `tools/verify_rear_tree_geometry_north_low_indexed_surface_rebind.py`;
- `contracts/east-rear-north-low-indexed-surface-rebind-geometry-008.json`;
- `docs/GEOMETRY_EAST_REAR_NORTH_LOW_INDEXED_SURFACE_REBIND_008.md`;
- `.github/workflows/geometry-east-rear-north-low-indexed-surface-rebind.yml`.

No source/default asset, Rigging implementation, downstream specialist file or coordination file was copied into product ownership.

## Hosted verification

Dedicated workflow:

`35349314466 — Geometry east rear north-low indexed surface rebind`

completed **SUCCESS** at exact head `8ab552710df21567cfd601af99181918e2cfadb3` on Python `3.11` and `3.13`.

Python 3.11 evidence path:

- exact Geometry donor ancestry gate: PASS;
- exact current Rigging owner ancestry gate: PASS;
- exact analytic Geometry module blob gate: PASS;
- exact source blob gate: PASS;
- compile: PASS;
- complete receiving repository suite: **166 / 166 tests green**;
- exact indexed-surface evidence rebuild: PASS;
- 8 / 8 exact receiver triangle memberships: PASS;
- topology / loop simplicity / neutral nondegeneracy assertions: PASS;
- fail-closed owner / authority controls: PASS;
- retained artifact upload: PASS.

Python 3.13 also passed exact binding, compile and the complete receiving repository suite.

Retained artifact:

- artifact id: `10549061401`;
- name: `nature-north-low-indexed-surface-rebind-8ab552710df21567cfd601af99181918e2cfadb3`;
- retained files: `11`;
- final size: `15,769 B`;
- GitHub SHA-256: `88fb89748940270b6798bc219e4a7473006bd9185eb3a375b77e834034f8965e`;
- no independent local archive rehash is claimed in this activation.

## Full constellation / duplicate-lane check

The active design constellation was inspected before opening work. The relevant Nature lanes remain distinct:

- Organic PR #8: source/form authority; no indexed cut authority;
- Geometry PR #9: separate source-topology/winding migration lane; not this attachment receiver;
- Rigging PR #14: analytic endpoint / deformation constraints only;
- Procedural PR #4: topology-free analytic trunk-envelope projection family;
- VFX PR #29: analytic bridge Weather visual-response review only;
- Technical Art PR #3: older detached-child target receiver lineage;
- current Runtime / Animation / Materials / Map and other product specialists retain their own scopes.

No competing exact indexed `north-low` trunk-opening Geometry lane was active. PR #30 therefore closes a real unoccupied prerequisite instead of duplicating another owner.

## Handoffs

Fresh explicit handoffs were recorded without automatic adoption:

- Geometry PR #30 comment `5730575804` — exact result, CI, structural metrics, artifact and nonclaims;
- Rigging PR #14 comment `5730577117` — analytic paired-span PASS is **not** transferred to an indexed connected junction; a later real cut requires exact Rigging rebind;
- Procedural PR #4 comment `5730578391` — topology-free smooth-envelope projector remains valid for its declared surface, while Geometry records the measured indexed-surface difference;
- Technical Art PR #3 comment `5730579443` — no target-host adoption; wait for an actual connected topology identity before independent receiver proof;
- VFX PR #29 comment `5730580870` — analytic bridge VFX evidence remains historical/exact and must not be relabelled as indexed-surface evidence;
- Organic PR #8 comment `5730581966` — source consumed read-only; no Organic form/source/default mutation or automatic adoption.

## Truth boundary / explicit nonclaims

The current PASS proves only neutral source-space binding of the intended eight-point `north-low` opening to exact generated indexed trunk faces, plus structural cleanliness of a still-open diagnostic bridge to those points.

It does **not** prove or create:

- an integrated indexed trunk cut/opening;
- a welded, boolean-unioned or remeshed branch/trunk mesh;
- shared branch/trunk indexed vertex identity;
- connected branch/trunk topology;
- continuous deformation clearance, foldover freedom or collision/self-intersection freedom;
- production skinning or blended weights;
- source/default adoption;
- final normals/tangents/UV/material acceptance;
- Animation or VFX acceptance for this indexed-surface successor;
- Technical-Art target-host transport;
- Runtime/controller/device/performance behavior;
- physical collision or gameplay suitability;
- CANON;
- production readiness;
- game readiness;
- Geometry mastery.

The current Rigging analytic certificate remains evidence for its exact analytic receiver only. The current VFX analytic bridge review likewise remains evidence for its exact analytic representation only. Neither is silently invalidated and neither transfers forward automatically.

## Continuity / rollback

Immediate predecessor coordination status blob:

`ed1b5e996fce311152f1ac7bd95c36ac69506dab`

That predecessor preserves the exact analytic trunk-loop / bridge PASS at Geometry head `14d05fdabc943376c231308001d00eb87dc23430`, including the prior `0.015669622 m` analytic minimum bridge span and all predecessor limitations. It remains rollback-addressable and is not silently rewritten.

Product predecessor Geometry PR #18 is merged/closed and remains exact historical evidence. New PR #30 starts from exact Rigging owner `efe99261...`, which already contains that merged predecessor lineage. The source blob, donor module blob, workflow receipts and retained artifact remain independently addressable.

The four AXM roots remain the merge gate: **Truth; Agency / non-domination; Continuity; Wisdom before speed**.

## Next legitimate Geometry trigger

Do not extend PR #30 merely by cadence. Re-enter only if:

- Geometry deliberately authors the **actual indexed trunk-cut / connected-junction successor** using these exact face memberships, then independently revalidates connected topology, boundary closure, winding/non-manifold state and receiver intersections;
- the exact source, generated trunk representation, donor Geometry module or Rigging owner changes and requires provenance rebind;
- Rigging returns a concrete connected-receiver deformation defect after a real cut exists;
- Technical Art returns a concrete target-host topology/transport discrepancy for that future connected receiver;
- another product exposes a stronger unoccupied evidence-backed Geometry defect.

Until then, preserve PR #30 as an indexed-surface binding proof, not as a production junction.