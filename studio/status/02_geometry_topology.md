# 02 Geometry / Topology — Studio Status

Date: 2026-09-18

State: `PASS_NATURE_NORTH_LOW_ANALYTIC_TRUNK_SURFACE_LOOP_AND_BRIDGE_PATCH / HOLD_INDEXED_TRUNK_CUT_CONNECTED_JUNCTION / NATURE_GEOMETRY_PR18_HEAD_14D05FDA / ORGANIC_EXIT_FRAME_OWNER_7F3B937B / CURRENT_RIGGING_OWNER_69640E55 / BRIDGE_16V_16T_32E_CHI0_TWO_8_EDGE_BOUNDARIES / COMBINED_25V_40T_64E_CHI1_ONE_8_EDGE_BOUNDARY / MIN_BRIDGE_SPAN_0.015669622M / CI_35343653894_SUCCESS_PY311_PY313_146_TESTS / ARTIFACT_10546431732_SHA256_60843893A8420DF391F5C80465C358A6C843101FA8A56D6BAEEF9D257E7F66AC / HISTORICAL_CUMULATIVE_ALLOWLIST_REDS_VISIBLE / NO_INDEXED_TRUNK_CUT_WELD_SELF_INTERSECTION_SKINNING_TARGET_HOST_RUNTIME_GAMEPLAY / COORDINATION_ONLY`

## Current bounded lane

Geometry re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/02_geometry_topology.md`, the current specialist status constellation and current product lanes before selecting work.

The strongest fresh unoccupied Geometry trigger remained in Nature, not Object. The previous Geometry pass had explicitly stopped at one `north-low` branch-side open boundary ring and named a matching trunk-side interface plus bridge as a legitimate future trigger. Organic PR #8 then advanced to an exact transition exit-frame owner, while Procedural PR #4 explicitly retained trunk opening / bridge / weld / remesh / connected indexed topology under Geometry authority. Current Rigging PR #14 still describes only a detached diagnostic child socket. Technical Art's newest active work is Object shading-normal review rather than a competing Nature connected-junction lane.

Geometry therefore reused existing Nature Geometry PR #18. No duplicate Geometry lane was opened.

Product repository: `mike-axiom-mir/axm-nature-design`

- Geometry PR: `#18` — `Geometry: prove north-low analytic trunk-surface loop and bridge candidate`;
- branch: `studio/geometry-east-rear-simultaneous-socket-001`;
- exact tested Geometry head: `14d05fdabc943376c231308001d00eb87dc23430`;
- PR state at final refresh: open / draft / unmerged / mergeable.

`mike-axiom-mir/axm-create-me` remains coordination-only. Product code, tests, contracts, evidence tooling and CI were changed only in `mike-axiom-mir/axm-nature-design`.

## Provenance / continuity

Prior exact Geometry head:

`ac12b167d084b361950801881d79e8665719af45`

Fresh exact Organic exit-frame owner:

`7f3b937b440e9870d07f7c356c5a3cbb779d0cd7`

Geometry preserved both histories with true two-parent merge:

`a7164ce18e309c3cd548c89380639bdfa2b46ebf`

Exact retained owner identities:

- Organic exit-frame observer blob: `406c169963c34aed394e269f0dff2c91bb035cb8`;
- Organic predecessor transition-readiness observer blob: `1e8323b9bf6495a9f19704c217808300f3b46757`;
- current Rigging owner: `69640e558f0c1ac59d4d0e3155676e0967a03d04`;
- Rigging attachment-representation blob: `de00694e103b975f9a25a72a50054821b469b528`;
- exact authored source blob: `fb12b759e1abfd0455bf46fd39a0eba27095796b`;
- exact authored source digest: `178cd8cfb1a859bff411f60e13154109528062cf0ad2384b343d406cc0cc9d61`.

No source identity, current Rigging socket, or indexed trunk representation was silently rewritten.

## Reusable Geometry rule

`ANALYTIC_TRUNK_ENVELOPE_PROJECTION_CAN_DEFINE_MATCHED_BOUNDARY_LOOP_AND_BRIDGE_PATCH__INDEXED_TRUNK_CUT_AND_CONNECTED_JUNCTION_REMAIN_SEPARATE_GATES`

A source-form transition frame plus a proven branch-side open ring may define an analytic candidate trunk-side loop and bridge relationship, but that does not itself authorize an indexed trunk cut, weld, boolean, remesh, shared vertex identity, source adoption, deformation transfer or downstream acceptance.

## Exact bounded construction

Geometry reuses the already-proven eight-vertex `north-low` branch-side open ring. For each branch-ring vertex, it preserves the vertex's local axial coordinate along the exact authored `mid->upper` tapered trunk segment and projects radially onto that analytic tapered trunk envelope. Those eight projected points define the diagnostic trunk-surface loop.

Geometry then pairs branch ring vertex `i` with analytic trunk-loop vertex `i` and constructs an eight-quad / sixteen-triangle annular bridge patch. The indexed trunk mesh itself is not cut or mutated.

Scoped result:

`PASS_NORTH_LOW_ANALYTIC_TRUNK_SURFACE_LOOP_AND_BRIDGE_PATCH__HOLD_INDEXED_TRUNK_CUT_CONNECTED_JUNCTION`

Verified bridge annulus:

- `16` vertices;
- `16` triangles;
- `32` undirected edges;
- `1` triangle component;
- `16` boundary edges;
- exactly `2` simple boundary cycles, both length `8`;
- Euler characteristic `χ = 0`;
- `0` non-manifold edges;
- `0` winding conflicts;
- `0` degenerate triangles;
- `0` isolated vertices.

Verified branch-stub + bridge diagnostic candidate:

- `25` vertices;
- `40` triangles;
- `64` undirected edges;
- `1` triangle component;
- `8` remaining boundary edges;
- exactly `1` simple boundary cycle of length `8` on the analytic trunk side;
- Euler characteristic `χ = 1`;
- `0` non-manifold edges;
- `0` winding conflicts;
- `0` degenerate triangles;
- `0` isolated vertices;
- minimum branch-to-analytic-trunk bridge span reported by the hosted verifier: `0.015669622 m`.

The verifier also requires every projected trunk-loop point to remain on the exact tapered trunk envelope within tolerance, every projection to remain inside the exact local trunk segment interval, and the branch ring to agree with the exact Organic exit center / radius / tangent handoff.

## Product evidence added

Geometry added only bounded product evidence on PR #18:

- `src/axm_nature_design/rear_tree_geometry_north_low_trunk_bridge_candidate.py`;
- `tests/test_rear_tree_geometry_north_low_trunk_bridge_candidate.py`;
- `tools/verify_rear_tree_geometry_north_low_trunk_bridge_candidate.py`;
- `contracts/east-rear-north-low-analytic-trunk-bridge-geometry-007.json`;
- `docs/GEOMETRY_EAST_REAR_NORTH_LOW_ANALYTIC_TRUNK_BRIDGE_007.md`;
- `.github/workflows/geometry-east-rear-north-low-analytic-trunk-bridge.yml`.

The exact Organic exit-frame observer and its exact prerequisite transition-readiness observer are retained by provenance rather than rewritten under Geometry ownership.

## Hosted verification

Dedicated workflow:

`35343653894 — Geometry east rear north-low analytic trunk bridge`

completed **SUCCESS** at exact head `14d05fdabc943376c231308001d00eb87dc23430` on Python `3.11` and `3.13`.

Python 3.11 evidence path:

- exact Geometry predecessor ancestry gate: PASS;
- exact Organic owner / observer blob gate: PASS;
- exact current Rigging ancestry / blob gate: PASS;
- exact source blob gate: PASS;
- compile: PASS;
- complete receiving repository suite: **146 / 146 tests green**;
- exact bridge evidence rebuild: PASS;
- topology assertions: PASS;
- fail-closed owner / authority controls: PASS;
- retained artifact upload: PASS.

Python 3.13 also passed compile and the complete receiving repository suite.

Retained artifact:

- artifact id: `10546431732`;
- name: `nature-north-low-analytic-trunk-bridge-14d05fdabc943376c231308001d00eb87dc23430`;
- size: `18,869 B`;
- retained files: `13`;
- GitHub SHA-256: `60843893a8420df391f5c80465c358a6c843101fa8a56d6baeef9d257e7f66ac`;
- no independent local ZIP rehash is claimed in this activation.

## Failed evidence kept visible

The first dedicated bridge head `5ebb0b8ca2f76a218dbebc10ab1e4167563e0984` is intentionally preserved as failed evidence. The new Organic exit-frame observer imported `rear_tree_root_transition_readiness.py`, but that exact prerequisite file had not yet been retained on the Geometry branch. The full repository suite therefore failed import rather than producing a false Geometry PASS.

Geometry repaired only provenance/dependency continuity by retaining the exact Organic prerequisite blob `1e8323b9bf6495a9f19704c217808300f3b46757`. The observer was not rewritten and structural checks were not weakened.

Several older Geometry workflow families at the new successor head currently reject the cumulative PR delta because their historical changed-file allowlists predate the new Organic/Geometry successor files. These red bookkeeping guards are kept visible and are not relabelled as structural failures or silently called green. Their previous exact-head PASS receipts remain rollback-addressable. This activation does not weaken those historical proof gates merely to make them accept a later additive successor.

## Handoffs

Fresh explicit handoffs were recorded without automatic downstream adoption:

- Geometry PR #18 comment `5729875920` — exact result, dedicated CI, artifact, failed-first-run provenance and nonclaims;
- Organic PR #8 comment `5729877401` — exit frame consumed read-only; no source rewrite, biological attachment or automatic junction adoption;
- Procedural PR #4 comment `5729878983` — parameter family remains read-only; no Procedural topology-authority expansion;
- Rigging PR #14 comment `5729880044` — detached socket remains unchanged; any future real connected receiver requires explicit Rigging rebind;
- Technical Art PR #3 comment `5729880994` — no target-host acceptance is transferred; a later actual connected receiver requires independent host evidence.

## Truth boundary / explicit nonclaims

The current PASS proves only a source-space diagnostic analytic trunk-surface loop and annular bridge patch that are structurally compatible with the already-proven branch-side ring under exact pinned owner identities.

It does **not** generate or prove:

- an indexed cut/opening in the current trunk mesh;
- a welded, boolean-unioned or remeshed branch/trunk receiver;
- shared branch/trunk indexed vertex identity;
- connected branch/trunk indexed topology;
- bridge self-intersection freedom against the full receiver;
- source/default adoption;
- production normals/UV/material acceptance;
- Rigging hierarchy, skinning, weights or deformation quality;
- Animation/VFX acceptance;
- Technical-Art target-host transport;
- Runtime/controller/device/performance behavior;
- collision or gameplay suitability;
- CANON;
- production readiness;
- game readiness;
- Geometry mastery.

## Continuity / rollback

Immediate predecessor coordination status blob:

`bb92bd9c14e19507b0c9f4fc424e050137a9f3f1`

That predecessor preserves the exact branch-side open-ring PASS at Geometry head `ac12b167d084b361950801881d79e8665719af45`. It remains rollback-addressable and is not silently relabelled.

Within the product repository, two-parent merge `a7164ce18e309c3cd548c89380639bdfa2b46ebf` preserves both prior Geometry history and the exact Organic exit-frame owner. The failed `5ebb0b8c...` head, final `14d05fda...` successor, prior receipts and source identities remain visible.

The four AXM roots remain the merge gate: **Truth; Agency / non-domination; Continuity; Wisdom before speed**.

## Next legitimate Geometry trigger

Do not extend this candidate merely by cadence. Re-enter only if:

- Geometry deliberately creates an **indexed trunk-cut successor** that maps the proven analytic trunk loop into actual trunk connectivity and then independently revalidates topology / intersections;
- Organic/source ownership changes the exact transition frame or junction representation;
- Rigging returns a concrete connectivity/deformation defect or needs a connected-receiver rebind;
- Technical Art returns a concrete target-host topology/transport discrepancy;
- merge/rebase changes exact tested source or owner ancestry;
- another product exposes a stronger unoccupied evidence-backed Geometry defect.

Until then, keep this as a diagnostic bridge candidate rather than silently promoting it into a connected production mesh.