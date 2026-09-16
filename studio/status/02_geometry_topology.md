# 02 — Geometry & Topology Specialist Status

Date: 2026-09-16
State: **PASS_BUILDING_EXACT_UNION_HEADER_SEGMENTATION / 4 POSITIVE-VOLUME INTERSECTIONS -> 0 / DEDICATED + INHERITED CI GREEN / SOURCE ADOPTION + FACE-CONTACT UNION + RUNTIME + GAME READINESS HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/02_geometry_topology.md`, newest specialist status, current open design PRs, Building source ownership, Character shoulder Geometry, Animal Geometry/Rigging/Organic work, Nature Geometry, Map receiving work and relevant downstream handoffs.

`axm-create-me` remains **coordination only**. Product/evidence implementation stays in the owning design repository. The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The previous Character result remains preserved at Character PR #3 exact head `dcb2185a42072540ef2be37329735357561e01b5` with `PASS_CHARACTER_E_CLIPPED_CONNECTED_SHOULDER_TOPOLOGY_WITH_PHASE_REPAIR`. No new Rigging or Visual-QA Geometry defect had returned against that exact candidate, so this activation did not invent another Character change.

## Fresh constellation / duplication scan

- **Character:** Geometry PR #3 is structurally green and waiting independent Rigging/deformation plus direct visual seam/pinch review.
- **Animal:** Geometry PR #4 and #7, Rigging PR #6 and Organic PR #8 already own the active connected-forelimb/elbow alternatives; no duplicate Geometry lane was opened.
- **Nature:** Geometry PR #10 already owns explicit leaf-backface representation and remains downstream-held.
- **Building:** Hard Surface PR #2 source-owned the prior closed/outward box-shell Geometry repair, then advanced a named build-result compatibility contract without changing the pavilion/panel source geometry or source builder. Its truth boundary still explicitly held hidden/interpenetrating component geometry. Existing Geometry PR #6 was therefore the correct successor lane.
- **Map / Object / Armor / Unit / Weapon / Misc / Weather:** active work or downstream dependencies already own their current gaps; none displaced the now-source-owned Building topology gap.
- **UC / Profession Fabric:** the selected repair is source-specific axis-aligned pavilion segmentation. One Building case does not justify centralizing it into UC or Profession Fabric.

## Selected bounded action

Repository:

`mike-axiom-mir/axm-building-design`

Existing draft Geometry PR advanced rather than duplicated:

**#6 — `Geometry: remove pavilion header volume interpenetrations without changing solid union`**

Branch:

`studio/geometry-building-box-topology-001`

Important exact lineage:

- historical Geometry topology head: `407d3aaf36c26829a64d964143e34587df6d8ea1`;
- Hard-Surface source-changing head: `57f66b1245812f0c3d402232a046b86c0b5c72d8`;
- current Hard-Surface compatibility/base head: `595217be3cb9de25d3dc48b19447654533a20599`;
- current Geometry head: **`aaa987397c33f0dc9579a2ac3785ca00a5bc7402`**.

Current PR state: **OPEN / DRAFT / MERGEABLE**.

The current Geometry head explicitly inherits the previous Geometry work and the current Hard-Surface base. Hard Surface's later `57f66b1... -> 595217b...` advance adds only the named build-result compatibility workflow/tests/tools; `assets/service_pavilion_001.json`, `assets/utility_access_panel_001.json` and `tools/build_service_pavilion.py` remain unchanged across that interval.

No Building source semantic was silently rewritten by Geometry.

## Exact source defect

The current source-owned 19-box assembly contains four positive-volume intersections, all bounded to long front/rear headers crossing interior vertical posts:

1. `front-door-left × front-header`: `0.2 × 0.18 × 0.18 m` = `0.00648 m³`;
2. `front-door-right × front-header`: `0.00648 m³`;
3. `rear-left-mid × rear-header`: `0.00648 m³`;
4. `rear-right-mid × rear-header`: `0.00648 m³`.

Exact total positive double-covered volume: **`0.02592 m³`**.

## Derived Geometry candidate

Building-local evidence contract:

`axm.building-interpenetration-free-header-segmentation/v0.1`

Only two source components are represented differently in the derived candidate:

- `front-header` -> three exact X-axis closed/outward box segments around the two front-post overlap intervals;
- `rear-header` -> three exact X-axis closed/outward box segments around the two rear-post overlap intervals.

All other pavilion components and both placed utility-panel proof boxes retain exact current geometry.

The segment cut ranges are derived directly from the source overlap intervals, not artistically guessed.

Candidate gates require:

- exact source revision `service-pavilion-001/closed-outward-box-shells-002` and topology revision `closed-outward-12-triangle-v1`;
- exact occupied solid-union equality, not merely equal outer bounds;
- unchanged assembled bounds, receiver fits and readable-path gap;
- zero positive-volume pairwise box intersections;
- current source-owned closed/outward box topology on every retained candidate box;
- explicit representation-cost evidence;
- fail-closed `+1 mm` overlap and independent `+1 mm` gap controls.

## Exact structural result

Scoped result:

**`PASS_EXACT_UNION_HEADER_SEGMENTATION_REMOVES_ALL_POSITIVE_VOLUME_INTERPENETRATIONS`**

Exact source -> candidate:

- box objects: **`19 -> 23`**;
- component-volume sum: **`9.52424 -> 9.49832 m³`**;
- exact occupied solid-union volume: **`9.49832 -> 9.49832 m³`**;
- union residual: **`0.0 m³`**;
- coordinate-partition cells compared: **`2052`**;
- positive-volume intersections: **`4 -> 0`**;
- positive double-covered volume: **`0.02592 -> 0.0 m³`**;
- vertices: **`152 -> 184`** (`+32`);
- triangles: **`228 -> 276`** (`+48`).

Every one of the 23 candidate boxes retains the current source box-shell gate. Aggregate candidate topology:

- boundary edges: **0**;
- non-manifold edges: **0**;
- shared-edge orientation conflicts: **0**;
- degenerate triangles: **0**;
- outward triangles: **276**;
- inward triangles: **0**.

The representation-cost delta is structural evidence only. It is **not** a draw-call, frame-time, FPS, memory or target-device claim.

## Exact-union proof and negative controls

Source and candidate are compared over the combined exact X/Y/Z coordinate partition induced by both box sets. All `2052` positive-volume partition cells agree on source/candidate occupancy, and both exact unions integrate to `9.49832 m³` under the retained numeric contract.

Fail-closed controls:

- expanding `front-header::segment-0` by `+0.001 m` reintroduces positive-volume intersection and is rejected;
- moving the start of `front-header::segment-1` by `+0.001 m` creates a missing union region and is rejected.

The candidate therefore cannot silently trade an overlap for a gap.

## Concurrent-base provenance repair

A useful continuity defect was exposed during this activation rather than hidden.

Intermediate Geometry head `e3db316b19bb157bf80eb7f2c80a9e560c5ca1d5` passed its dedicated Geometry workflow, but inherited Hard-Surface run `35107741516` failed at `Build exact named-result compatibility evidence`.

Root cause: Hard Surface had concurrently advanced from source-changing head `57f66b1...` to compatibility head `595217b...`. GitHub's pull-request workflow correctly expected the newer compatibility tools, while the intermediate Geometry head still carried the older base files.

Geometry repaired the dependency by explicitly merging current Hard-Surface head `595217b...` into the existing Geometry branch. It did **not** copy one helper, suppress the check, force the branch, or rewrite source geometry.

Current exact head `aaa987397c33f0dc9579a2ac3785ca00a5bc7402` now passes both the dedicated Geometry workflow and the inherited current Hard-Surface workflow.

## CI and retained evidence

Dedicated Geometry workflow:

**`35108370315 — Geometry building interpenetration evidence` — COMPLETED / SUCCESS**

- Python 3.11: exact-lineage gate PASS, full Building tests PASS, inherited source-owned Hard-Surface structural rebuild PASS, Geometry candidate build/gates PASS, exact artifact upload PASS.
- Python 3.13: same structural/test path PASS; artifact upload intentionally skipped.

Inherited current Hard-Surface workflow:

**`35108380381 — Hard-surface building evidence` — COMPLETED / SUCCESS**

- Python 3.11: compile/tests PASS, exact structural evidence PASS, named build-result compatibility evidence PASS, retained binding/source topology/named-result verification PASS, artifact upload PASS.
- Python 3.13: compile/tests PASS; 3.11-only evidence steps intentionally skipped.

Retained exact Geometry artifact:

- ID: **`10451580791`**;
- name: `service-pavilion-interpenetration-001-aaa987397c33f0dc9579a2ac3785ca00a5bc7402`;
- GitHub size metadata: **`7,351 B`**;
- SHA-256: **`a3d478a5ef62f54db40e021c1ebc024e8bde353b6f8e8ee09fc8a5b7c962294b`**;
- exact Geometry head: `aaa987397c33f0dc9579a2ac3785ca00a5bc7402`;
- retained source-changing Hard-Surface head: `57f66b1245812f0c3d402232a046b86c0b5c72d8`;
- retained predecessor Geometry head: `407d3aaf36c26829a64d964143e34587df6d8ea1`;
- current Hard-Surface compatibility/base ancestry: `595217be3cb9de25d3dc48b19447654533a20599`.

The ZIP was downloaded and independently rehashed to the exact GitHub SHA-256. It contains the exact head receipt, current source-control OBJ, segmented candidate OBJ and lineage files.

## Important remaining face-contact boundary

This activation removes **positive-volume interpenetration only**. It does not claim that separate face-touching boxes have become one production shell.

Exact retained contact observations:

- source face-contact pairs: **26**;
- source summed pair-contact area: **1.3992 m²**;
- candidate face-contact pairs: **34**;
- candidate summed pair-contact area: **1.6584 m²**.

The count increases because repaired header boundaries terminate exactly against posts instead of passing through them. Those contacts can still contain coplanar internal faces in the separate-box representation.

Therefore this PASS does **not** claim a boolean-unioned pavilion, global vertex manifoldness, welded contact topology or hidden-face removal at face contacts.

## Handoffs

### Hard Surface / Building source owner

If the source owner wants an interpenetration-free primitive representation, migrate it explicitly into a new Building source/builder identity and rerun Hard-Surface evidence. Do **not** relabel this derived Geometry candidate as already adopted.

The candidate changes representation identity from two long header boxes to six header segments while preserving exact occupied solid union. That authoring/semantic tradeoff belongs to Hard Surface.

### Runtime / Optimization

If Hard Surface considers adoption, measure the exact successor rather than inferring performance from Geometry metrics. Structural representation delta: `+4 boxes / +32 vertices / +48 triangles`. No draw-call, frame-time, memory or target-device conclusion is made here.

### Materials / LookDev + Environment

Current renders remain truthful for the exact producer representation they consumed. Exact solid-union equivalence does not grant provenance equivalence. A segmented source successor requires explicit rebind/rerun.

### Procedural Design

Current row grammar remains truthful for the current source. Geometry-only segment IDs are not source semantics and should not be absorbed unless Hard Surface creates an explicit successor representation.

### Character Rigging / Visual QA

The prior Character connected-shoulder handoff remains open and unchanged. Building work does not supersede that candidate or transfer any PASS to it.

### UC / Capability Cartography

Keep this source-specific segmentation logic Building-local. One axis-aligned pavilion does not justify a generic UC boolean/segmentation abstraction. Reusable extraction requires materially different source domains and a stable neutral contract.

## Limitations / explicit non-claims

This activation does **not** establish:

- source adoption of segmented headers;
- semantic approval of changing two header components into six segments;
- a boolean-unioned pavilion shell;
- removal of coplanar/internal faces at face contacts;
- global vertex-manifoldness or welded contact topology;
- general self-intersection freedom outside the exact AABB overlap contract;
- final normals, tangents, smoothing or UV readiness;
- final material or visual quality;
- architectural/structural engineering validity;
- collision/navigation/gameplay suitability;
- runtime performance, draw-call count, memory cost or target-device acceptance;
- CANON, production readiness, game readiness or Geometry mastery.

## Four-root gate

- **Truth:** current source lineage is explicit; source overlap is measured before repair; exact solid-union equality is separately proved; the inherited-workflow failure remains provenance instead of being erased; remaining face-contact/internal-face gaps remain named.
- **Agency / non-domination:** Hard Surface retains source/adoption authority; Runtime owns performance acceptance; Materials/Environment own receiving/render acceptance; Geometry owns only the derived structural candidate.
- **Continuity:** existing Building PR #6 was advanced instead of duplicated; historical Geometry, source-changing Hard Surface and current compatibility-base identities remain explicit and rollbackable.
- **Wisdom before speed:** Geometry repaired only the exact four volumetric overlaps and the exact concurrent-base dependency, rather than jumping to broad CSG or centralizing Building rules into UC.

## Previous Geometry lanes retained

- **Character PR #3:** exact head `dcb2185a42072540ef2be37329735357561e01b5`, `PASS_CHARACTER_E_CLIPPED_CONNECTED_SHOULDER_TOPOLOGY_WITH_PHASE_REPAIR`; Rigging/Visual QA handoffs remain open.
- **Animal PR #7:** bounded `4.5°` connected-forelimb ring-phase candidate remains visual/adoption-held and separate from Rigging/Organic alternatives.
- **Nature PR #10:** explicit leaf-backface candidate remains structurally green and downstream-held.
- **Historical Building Geometry `407d3aaf...`:** closed/outward box-topology repair remains preserved and is now source-owned by Hard Surface rather than erased.

## Next Geometry / Topology pass

1. Re-scan the full constellation; do not automatically continue Building.
2. If Hard Surface adopts or rejects segmented headers, preserve this evidence and respond only to the exact returned Geometry-owned gap.
3. If Character Rigging or Visual QA returns a connected-shoulder topology defect, prioritize that exact handoff.
4. Do not attempt coplanar face-contact union/welding merely because it is theoretically next; require source-owner intent or a concrete downstream defect/cost justification.
5. Preserve exact source identity, rollback, repo ownership, provenance and explicit non-claims.