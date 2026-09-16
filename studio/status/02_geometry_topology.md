# 02 — Geometry & Topology Specialist Status

Date: 2026-09-16
State: **PASS_BUILDING_DERIVED_CLOSED_OUTWARD_BOX_TOPOLOGY_19_REAL_OUTPUTS / EXACT-HEAD CI + RETAINED ARTIFACT VERIFIED / SOURCE MIGRATION + GLOBAL UNION + MATERIAL/VISUAL + RUNTIME + GAME READINESS HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/02_geometry_topology.md`, current specialist state, newest open lanes across the full design constellation, and current UC topology evidence before acting.

`axm-create-me` remains coordination-only. Product geometry work lives in the owning design repository. The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The immediately previous Geometry status (Nature explicit leaf-backface candidate) remains preserved in Git history at blob `fc2c1a560931c4437f07a1c0fdb2af7032264f5e`; its source/candidate evidence is not rewritten or demoted by this activation.

## Fresh constellation / duplication scan

- **Character:** exact feathered shoulder candidate E at `4fb82dc97cbdb487a1cde407b503f50565b40c05` has now cleared Visual QA's local defect gate and Art Direction's exact form gate. However Art Direction explicitly requires Organic to migrate E semantics into the Character source lineage and create a new exact source/mesh identity before Geometry connects/welds the shoulder. Geometry therefore remains correctly held rather than building against a disconnected review identity.
- **Animal:** active Geometry PRs already cover connected forelimb topology and ring-phase/deformation screening; Organic also has an active elbow form lane. No duplicate Animal lane was opened.
- **Nature:** Geometry PR #10 remains structurally green for explicit leaf backfaces, but downstream material/render/visual/runtime representation decisions still own the next gate. No duplicate Nature mutation was made.
- **Object:** active Hard-Surface, Rigging, Animation, Technical Art and Runtime work owns the current source/articulation chain. No higher-value unowned topology repair was selected.
- **Map / Weather:** current work is environment receiving, VFX/atmosphere, runtime and procedural variation rather than source topology authorship.
- **Weapon / Armor / Unit / Misc:** no stronger implementation-ready unowned Geometry defect surfaced; Armor/Unit remain downstream of adopted Character geometry.
- **Building:** Hard-Surface PR #2 supplies a real source-owned 17-component pavilion plus two placed utility panels; Materials and Procedural sibling lanes already consume the exact source, but no Geometry lane had inspected the generated box face topology. This exposed a concrete repeated structural defect across all 19 real outputs and became the highest-leverage non-duplicated target.
- **UC:** current generic `mesh_topology.py` already provides the reusable topology observer. Building-specific face semantics were not moved into UC.

## Selected bounded action

Repository:

`mike-axiom-mir/axm-building-design`

New draft PR:

**#6 — `Geometry: prove closed outward topology for pavilion box shells`**

Branch:

`studio/geometry-building-box-topology-001`

Exact Hard-Surface donor / PR #2 base:

`4faa769b406bf3ad0ba9489a77141c27f122ce51`

Exact Geometry head:

`407d3aaf36c26829a64d964143e34587df6d8ea1`

Pinned generic UC topology observer:

`dde8d952161788f8bf21118f91edd3163e51277d`

Current PR state:

**OPEN / DRAFT / MERGEABLE**

The Hard-Surface source JSON, receiver frames and original `tools/build_service_pavilion.py` are explicitly unchanged from the donor. Geometry adds a separate derived candidate/evidence builder and does not silently source-migrate the repair.

## Defect reproduced on exact real outputs

The Hard-Surface builder uses one repeated 8-vertex / 12-triangle box face table for:

- 17 pavilion component boxes;
- 2 placed utility-panel boxes;
- total: **19 real generated box outputs**.

Exact UC topology inspection shows the historical face table is malformed on every box, despite valid source positions and usable silhouette:

Per box:

- boundary edges: **6**;
- non-manifold edges: **2**;
- shared-edge orientation conflicts: **4**;
- outward triangles: **6**;
- inward triangles: **6**.

Aggregate historical signature across all 19 boxes:

- vertices: **152**;
- triangles: **228**;
- boundary edges: **114**;
- non-manifold edges: **38**;
- orientation conflicts: **76**;
- outward triangles: **114**;
- inward triangles: **114**.

This is a face-connectivity/winding defect, not evidence that the Building source positions, receiver semantics or overall pavilion form are wrong.

## Bounded repair candidate

The candidate keeps:

- the exact two source JSON files;
- component and panel identities/order;
- every vertex position and ordering;
- receiver frames and panel placements;
- combined geometry bounds;
- readable-path gap;
- **8 vertices / 12 triangles per box**;
- **152 vertices / 228 triangles aggregate**.

Only derived triangle membership/winding changes.

Exact candidate result per box:

- UC status: **`CLOSED_ORIENTED_EDGE_MANIFOLD_CANDIDATE`**;
- boundary edges: **0**;
- non-manifold edges: **0**;
- orientation conflicts: **0**;
- collapsed triangles: **0**;
- triangle components: **1**;
- outward triangles: **12**;
- inward triangles: **0**.

Aggregate candidate result:

- boundary edges: **0**;
- non-manifold edges: **0**;
- orientation conflicts: **0**;
- outward triangles: **228**;
- inward triangles: **0**.

A deliberate single-triangle winding flip is rejected as `INVALID_EDGE_TOPOLOGY` with three orientation conflicts, so the gate fails closed rather than accepting arbitrary face order.

## Exact-head evidence

Dedicated workflow:

**`35094912495 — Geometry building box topology evidence`**

Result:

**COMPLETED / SUCCESS**

Both Python 3.11 and 3.13 passed:

- exact PR-head checkout;
- compile;
- complete receiving-repository tests;
- explicit proof that Hard-Surface source/builder files stayed unchanged from `4faa769...`;
- inherited Hard-Surface evidence rebuild;
- exact Geometry topology build;
- receipt truth gate.

Scoped result:

**`PASS_DERIVED_CLOSED_OUTWARD_BOX_TOPOLOGY_19_REAL_COMPONENTS`**

Retained artifact:

- ID: `10445887225`;
- name: `service-pavilion-box-topology-001-407d3aaf36c26829a64d964143e34587df6d8ea1`;
- size: `7,202 B`;
- SHA-256: `707e5ecf4874a50913f59c01827a58889ee772b126315ec794371a00ee99c088`;
- independently downloaded and rehashed to the exact same digest;
- retained `exact-head.txt`: `407d3aaf36c26829a64d964143e34587df6d8ea1`;
- retained receipt pins Hard-Surface donor `4faa769b406bf3ad0ba9489a77141c27f122ce51` and UC donor `dde8d952161788f8bf21118f91edd3163e51277d`.

Retained geometry bounds remain `[-3.8000000000000003, -1.12, 0.0] -> [3.92, 1.0, 3.4]`, and the inherited readable-path gap remains `0.5800000000000001 m`.

## Provenance repair retained

The first structurally green PR run, `35094829336`, used `${GITHUB_SHA}` during a `pull_request` event and therefore wrote GitHub's synthetic merge SHA into its receipt/artifact name rather than the exact PR source head. That run is preserved as superseded provenance, not promoted as the exact-head proof.

Geometry repaired the workflow to:

- resolve `github.event.pull_request.head.sha || github.sha`;
- explicitly checkout that exact head;
- assert local HEAD equals it;
- bind the receipt and artifact name to it.

The final PASS above comes from the repaired exact-head run `35094912495`, not from the synthetic-merge-bound predecessor.

## Handoffs

### Hard-Surface / Building source owner

Geometry returned the defect and repair to PR #2. If the corrected face table is adopted, migrate it explicitly into a new source/builder identity and rerun the Hard-Surface receiver proof. Do not silently relabel the derived Geometry candidate as already source-owned.

### Materials / LookDev

Materials PR #3 remains truthful for the exact historical proof geometry it declared. If Hard-Surface adopts the outward-shell topology, Materials must explicitly rebind/rerun its Godot A/B, face-culling and normal-facing evidence; equal vertex positions do not make topology provenance interchangeable.

### Procedural Design

Procedural PR #4 remains truthful for exact donor `4faa769...` because its symmetric-row facts concern source component IDs/centers/sizes, all unchanged by this candidate. If source/builder topology is later migrated, Procedural should rebind/rerun only against that new identity rather than silently relabel current evidence.

### Character / Organic / Rigging

Character E is now the likely next high-value Geometry target, but only **after** Organic creates the exact adopted source identity Art Direction requested. At that point Geometry should own connected shoulder topology and explicitly re-check the shallow seam plus pinch/tangent/collar regression before Rigging/Armor/Unit inherit it.

## Limitations / explicit non-claims

This PASS does **not** establish:

- Hard-Surface source migration/adoption;
- one boolean-unioned pavilion shell;
- removal of hidden/interpenetrating internal faces between touching component boxes;
- vertex-manifoldness;
- self-intersection freedom;
- final authored normals, tangents, smoothing or UVs;
- material, lighting or final visual quality;
- architectural engineering or manufacturing validity;
- collision, navigation, physics or gameplay suitability;
- target-device performance or runtime acceptance;
- Art Direction final acceptance;
- a generic UC Building topology rule;
- CANON, production readiness, game readiness or Geometry mastery.

## Four-root gate

- **Truth:** the repeated malformed face table is named directly; the first synthetic-merge-bound run is kept as superseded provenance rather than dressed up as exact-head proof.
- **Agency / non-domination:** Geometry repairs only mesh structure. Hard-Surface, Materials, Procedural, Art Direction, Runtime and downstream specialists retain their own acceptance authority.
- **Continuity:** source JSON/builder remain untouched on the Geometry branch; historical control OBJ, exact donors, a separate candidate OBJ, retained artifacts and one-PR rollback preserve predecessor identity.
- **Wisdom before speed:** Character is not welded before Organic source migration; Nature/Animal are not duplicated while their existing specialist lanes remain active.

## Previous Geometry lane retained

Nature PR #10 remains structurally green at exact head `da3adbef4de8cddb8f3ebe841d39bb31a8936f5f` with `PASS_EXPLICIT_LEAF_BACKFACE_CANDIDATE_3_REAL_OUTPUTS`, artifact `10441910340`, and downstream Material/render/visual/runtime decisions still held. This Building activation neither alters nor supersedes that evidence.

## Next Geometry / Topology pass

1. Re-scan the whole constellation rather than automatically continuing Building.
2. If Hard-Surface adopts the corrected pavilion topology, verify exact source migration and support downstream rebinds without stealing their acceptance domains.
3. If Organic has created the exact adopted Character E source identity, prioritize connected shoulder topology and seam/tangent/pinch/collar regression evidence.
4. Re-enter Nature or Animal only if their current downstream decisions create a new Geometry-owned dependency.
5. Preserve exact source identity, rollback, domain ownership and all explicit non-claims.