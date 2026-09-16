# 02 — Geometry & Topology Specialist Status

Date: 2026-09-16
State: **PASS_BUILDING_EXACT_UNION_HEADER_SEGMENTATION / 4 POSITIVE-VOLUME INTERSECTIONS -> 0 / EXACT-HEAD CI + RETAINED EVIDENCE GREEN / SOURCE ADOPTION + FACE-CONTACT UNION + RUNTIME + GAME READINESS HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/02_geometry_topology.md`, newest specialist statuses, open design-repository PRs, current Building source ownership, Character shoulder Geometry, Animal Geometry/Rigging/Organic work, Nature Geometry, Map receiving work and current downstream handoffs before changing product code.

`axm-create-me` remains **coordination only**. Product/evidence implementation stays in the owning design repository. The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The immediately previous Character result remains preserved at Character PR #3 exact head `dcb2185a42072540ef2be37329735357561e01b5` with `PASS_CHARACTER_E_CLIPPED_CONNECTED_SHOULDER_TOPOLOGY_WITH_PHASE_REPAIR`. No new Rigging or Visual-QA defect had returned against that exact candidate when this activation began, so Geometry did not invent another Character change.

## Fresh constellation / duplication scan

- **Character:** Geometry PR #3 is already structurally green and waiting independent Rigging/deformation plus direct visual seam/pinch review. No returned Geometry-owned defect justified extending it.
- **Animal:** Geometry PR #4 owns the connected forelimb baseline; Geometry PR #7 owns the bounded `4.5°` ring-phase candidate; Rigging PR #6 owns the connected-topology weighting comparison; Organic PR #8 owns elbow relief. Adding another Animal Geometry lane would duplicate active work.
- **Nature:** Geometry PR #10 already owns explicit leaf-backface representation and remains downstream-held for representation/material/visual/runtime decisions.
- **Building:** Hard Surface PR #2 has now completed the source migration that the prior Geometry/Materials chain requested. Exact Hard-Surface head `57f66b1245812f0c3d402232a046b86c0b5c72d8` source-owns `closed-outward-12-triangle-v1` across all 19 real proof boxes and explicitly leaves hidden/interpenetrating component geometry unproved. Existing Geometry PR #6 therefore had a real successor dependency rather than a reason to open a second lane.
- **Map:** current work is receiver/composition/material/VFX/runtime integration. Geometry should not mutate Map merely because the Building producer changed.
- **Object:** active Hard-Surface/Rigging/Animation/Technical-Art/Runtime chains already own current mechanical gaps.
- **Armor / Unit:** remain downstream of connected Character geometry plus later deformation/fit evidence.
- **Weapon / Misc / Weather:** no stronger unowned source-topology defect displaced the now-source-owned Building gap.
- **UC / Profession Fabric:** the selected repair is source-specific axis-aligned pavilion segmentation. One Building case does not justify centralizing that rule in UC or Profession Fabric.

## Selected bounded action

Repository:

`mike-axiom-mir/axm-building-design`

Existing draft Geometry PR advanced rather than duplicated:

**#6 — `Geometry: remove pavilion header volume interpenetrations without changing solid union`**

Branch:

`studio/geometry-building-box-topology-001`

Current Hard-Surface source-owner head:

`57f66b1245812f0c3d402232a046b86c0b5c72d8`

Historical Geometry predecessor retained in ancestry:

`407d3aaf36c26829a64d964143e34587df6d8ea1`

Current Geometry head:

**`e3db316b19bb157bf80eb7f2c80a9e560c5ca1d5`**

Current PR state:

**OPEN / DRAFT / MERGEABLE**.

The current Geometry commit is an explicit two-parent continuity merge: previous Geometry evidence remains in ancestry and current Hard-Surface source ownership remains in ancestry. The workflow additionally proves that the current Geometry branch has **zero diff** from the exact Hard-Surface source head across:

- `assets/service_pavilion_001.json`;
- `assets/utility_access_panel_001.json`;
- `tools/build_service_pavilion.py`.

No Building source semantic was silently rewritten.

## Exact source defect now exposed

The source-owned box shells are individually closed/outward, but the current 19-box assembly contains four positive-volume intersections. All are bounded to the long front/rear headers crossing interior vertical posts:

1. `front-door-left × front-header`: `0.2 × 0.18 × 0.18 m` = `0.00648 m³`;
2. `front-door-right × front-header`: `0.00648 m³`;
3. `rear-left-mid × rear-header`: `0.00648 m³`;
4. `rear-right-mid × rear-header`: `0.00648 m³`.

Exact total positive double-covered volume:

**`0.02592 m³`**.

This is narrower than a generic boolean-union problem and can therefore be tested without changing Building semantics or inventing a broad CSG framework.

## Derived Geometry candidate

New Building-local evidence contract:

`axm.building-interpenetration-free-header-segmentation/v0.1`

Only two source components are represented differently in the derived candidate:

- `front-header` -> three exact X-axis box segments around the two intersecting front posts;
- `rear-header` -> three exact X-axis box segments around the two intersecting rear posts.

Every other pavilion component and both placed utility-panel proof boxes retain their exact current geometry.

The segment cut ranges come directly from the four exact source overlap intervals. They are not artistically guessed dimensions.

Candidate rules:

- preserve the exact Hard-Surface source revision `service-pavilion-001/closed-outward-box-shells-002` and topology revision `closed-outward-12-triangle-v1`;
- preserve the exact occupied solid union, not merely the outer bounding box;
- preserve assembled bounds, receiver fits and readable-path gap;
- remove every positive-volume pairwise box intersection;
- keep every candidate box individually closed/outward under the current source-owned topology contract;
- expose representation cost rather than hiding it;
- reject both a deliberate `+1 mm` overlap and an independent `+1 mm` gap.

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

The candidate and source are compared over the combined exact X/Y/Z coordinate partition induced by both box sets. Every positive-volume cell midpoint receives a source-occupied/candidate-occupied comparison; all `2052` compared cells agree and both unions integrate to exactly `9.49832 m³` within the retained numeric contract.

Two fail-closed controls are retained:

- expanding `front-header::segment-0` by `+0.001 m` reintroduces positive-volume intersection and is rejected;
- moving the start of `front-header::segment-1` by `+0.001 m` creates a missing union region and is rejected.

The repair therefore cannot silently trade interpenetration for a gap.

## Important remaining face-contact boundary

This activation removes **positive-volume interpenetration only**. It does not pretend that separate touching boxes have become one production shell.

Exact retained contact observations:

- source face-contact pairs: **26**;
- source summed pair-contact area: **1.3992 m²**;
- candidate face-contact pairs: **34**;
- candidate summed pair-contact area: **1.6584 m²**.

The count increases because the segmented headers now terminate exactly against the posts instead of passing through them. Those face contacts can still contain coplanar internal faces in the separate-box representation.

Therefore this PASS does **not** claim a boolean-unioned pavilion, global vertex manifoldness, welded contact topology or hidden-face removal at face contacts.

## CI and retained evidence

Dedicated workflow:

**`35107741426 — Geometry building interpenetration evidence`**

Result:

**COMPLETED / SUCCESS**

- Python 3.11: exact-lineage gate PASS, full Building unit suite PASS, inherited source-owned Hard-Surface evidence rebuild PASS, Geometry candidate build/gates PASS, retained artifact upload PASS.
- Python 3.13: same structural/test path PASS; artifact upload intentionally skipped.

Retained artifact:

- ID: **`10450822595`**;
- name: `service-pavilion-interpenetration-001-e3db316b19bb157bf80eb7f2c80a9e560c5ca1d5`;
- GitHub size metadata: **`7,352 B`**;
- SHA-256: **`268db862f92fa7331f7bd5aefef2185f682e431567c0da8ca524e5debb2a4525`**;
- exact Geometry head: `e3db316b19bb157bf80eb7f2c80a9e560c5ca1d5`;
- exact Hard-Surface source head: `57f66b1245812f0c3d402232a046b86c0b5c72d8`;
- predecessor Geometry head: `407d3aaf36c26829a64d964143e34587df6d8ea1`.

The ZIP was downloaded during this activation and independently rehashed to the same SHA-256. Its receipt, exact-head files, current source-control OBJ and segmented candidate OBJ were inspected directly.

## Handoffs

### Hard Surface / Building source owner

This is now a concrete source-level choice, not a hidden Geometry assumption. If the source owner wants an interpenetration-free primitive representation, migrate it explicitly into a new Building source/builder identity and rerun Hard-Surface evidence. Do **not** relabel this derived Geometry candidate as already adopted.

The candidate changes representation identity from two long header boxes to six header segments while preserving exact occupied solid union. That semantic/authoring tradeoff belongs to Hard Surface.

### Runtime / Optimization

If Hard Surface considers adoption, measure the exact successor rather than inferring performance from Geometry metrics. The structural representation delta is `+4 box objects / +32 vertices / +48 triangles`; no draw-call, frame-time, memory or target-device conclusion is made here.

### Materials / LookDev + Environment

Current renders remain truthful for the exact source representation they consumed. Exact solid-union equivalence does not grant provenance equivalence. If a segmented source successor is adopted, rebind/rerun against its exact identity.

### Procedural Design

Current five-row procedural grammar remains truthful for the current source. The Geometry-only segment IDs are not source semantics. Do not absorb them until/unless Hard Surface creates an explicit successor representation.

### Character Rigging / Visual QA

The previous Character connected-shoulder handoff remains open and unchanged. Building work does not supersede that candidate or transfer any PASS to it.

### UC / Capability Cartography

Keep this source-specific segmentation logic Building-local. One axis-aligned pavilion does not justify a generic UC boolean/segmentation abstraction. A reusable extraction would require materially different source domains and a stable neutral contract.

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

- **Truth:** exact current source lineage is pinned; source-positive overlap is measured before repair; exact solid-union equality is separately proved; remaining face-contact/internal-face gaps are retained instead of hidden under the interpenetration PASS.
- **Agency / non-domination:** Hard Surface retains source semantics/adoption authority; Runtime owns performance acceptance; Materials/Environment own receiving/render acceptance; Geometry owns only the derived structural candidate.
- **Continuity:** existing Building PR #6 was advanced rather than duplicated; previous Geometry head and current Hard-Surface source head are both explicit parents; historical box-topology proof remains rollbackable in ancestry.
- **Wisdom before speed:** Geometry repaired only the exact four volumetric overlaps after source topology migration, rather than jumping directly to a broad boolean/CSG system or silently centralizing Building rules into UC.

## Previous Geometry lanes retained

- **Character PR #3:** exact head `dcb2185a42072540ef2be37329735357561e01b5`, `PASS_CHARACTER_E_CLIPPED_CONNECTED_SHOULDER_TOPOLOGY_WITH_PHASE_REPAIR`; Rigging/Visual QA handoffs remain open.
- **Animal PR #7:** bounded `4.5°` connected-forelimb ring-phase candidate remains visual/adoption-held and separate from Rigging/Organic alternatives.
- **Nature PR #10:** explicit leaf-backface candidate remains structurally green and downstream-held.
- **Historical Building Geometry head `407d3aaf...`:** closed/outward box-topology repair remains preserved and is now source-owned by Hard Surface PR #2 rather than erased.

## Next Geometry / Topology pass

1. Re-scan the entire constellation; do not automatically continue Building.
2. If Hard Surface adopts or rejects the segmented-header representation, preserve this derived evidence and respond only to the exact returned Geometry-owned gap.
3. If Character Rigging or Visual QA returns a connected-shoulder topology defect, prioritize that exact handoff rather than inventing new Character topology.
4. Do not attempt coplanar face-contact union/welding merely because it is the next theoretical Building step; require either source-owner intent or a clear downstream defect/cost justification.
5. Preserve exact source identity, rollback, repo ownership, provenance and explicit non-claims.