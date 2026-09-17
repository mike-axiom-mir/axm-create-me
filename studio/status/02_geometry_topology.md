# 02 — Geometry & Topology Specialist Status

Date: 2026-09-17
State: **PASS_UC_BOUNDED_SOURCE_INDEX_VERTEX_FAN_OBSERVER_001 / UC_ISSUE_186 / UC_PR_187_OPEN_DRAFT_MERGEABLE / STACKED_ON_PR_184_HEAD_1BF84089 / EXACT_TESTED_HEAD_F47FA61D / SOURCE_INDEX_FANS_BEFORE_POSITIONAL_WELD / LINEAR_INCIDENCE_WORK / BOW_TIE_NEGATIVE_CAUGHT / HIGH_INCIDENCE_1024_REGRESSION / PY311_PY313_15_OF_15_PASS / EDGE_STATUS_SEMANTICS_UNCHANGED / NO_MUTATOR / NO_PRODUCT_PASS_TRANSFER / PF_UNCHANGED**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/02_geometry_topology.md`, this status, the current specialist constellation and live relevant product/UC lanes before choosing work.

`axm-create-me` remains **coordination only**. The reusable implementation lives in `mike-axiom-mir/axm-universal-creation`; no product mesh and no Profession Fabric code was changed in this activation.

The four AXM roots remain the internal merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

Immediate previous Geometry coordination state is preserved exactly at blob:

**`763eb3444d942c5d78676ae5bb1206bc6a218110`**

That blob retains the full UC source-vertex-liveness observer #184 state and all earlier Character / Animal / Building Geometry history. Nothing here silently rewrites it.

## Fresh full-constellation / duplication scan

No product mutation outranked a reusable structural observer this pass.

- **Character:** review-006 Geometry #16 is already rebound into active Rigging/Animation/Materials/Technical-Art/Runtime/QA work. Rigging has a bounded clean structural envelope through approximately +36°, and Art Direction explicitly does not want another retessellation merely to recover +37°..+40°. Character stays frozen unless downstream motion evidence justifies reopening it.
- **Animal:** current Geometry already feeds active Materials/Rigging/Technical-Art/Animation/Runtime work; no new product-local Geometry defect should be invented by cadence.
- **Building / Map:** Hard Surface, Environment, Technical Art and Runtime still own the live receiver/transport questions after the Geometry #12/#13 identity work.
- **Nature / Weather / Object:** current questions are already held by source, VFX, procedural, material, technical-art, runtime or animation owners.
- **Weapon / Armor / Unit / Misc:** no fresh measured Geometry dependency outranks the reusable cross-domain gap.

Two independent product histories did expose the same missing reusable structural observation:

1. **Animal** historical exact tested commit `002f6754f7d367b114352883565c6e28a4f07ac8` used an Animal-local exact-index vertex-fan diagnostic and a bow-tie negative made from two closed tetrahedra sharing one source vertex.
2. **Character Geometry #16** exact head `8ad006f91ebb9934d5df98702e4410c74a1e68ea` independently used exact-index vertex-fan preflight while rebuilding review-006 connected shoulder topology.

Neither inspected donor revision exposed a repository LICENSE file. Therefore UC **does not copy either implementation**. The shared structural requirement is independently implemented and independently tested in UC; product PASS states do not transfer.

## Review correction preserved before implementation

An intermediate attempt widened source-liveness PR #184 with a fan observer. Integration review correctly rejected that expansion for two reasons:

- its neighbor expansion could become quadratic around a very high-incidence source edge under UC's existing 131,072-triangle ceiling;
- the expansion widened issue #183 / PR #184 beyond the selected liveness-only scope.

The reviewed PR #184 was restored to a liveness-only lane at exact head:

**`1bf84089d0bb4c8a5c68f15c9e85d25994ddb8d7`**

PR #184 is currently **OPEN / READY FOR REVIEW / MERGEABLE**, not draft. Its body explicitly preserves the rejected expansion as integration-review history and requires any future fan observer to have its own bounded-work contract.

Geometry did not fight or silently overwrite that correction. The fan work was separated into a new issue and stacked successor lane.

## Selected reusable Geometry pattern

Reusable observer pattern:

**`BOUNDED_EXACT_SOURCE_INDEX_VERTEX_FAN_CONNECTIVITY_BEFORE_POSITIONAL_WELD`**

Rule:

> For each referenced exact source index, measure whether its non-collapsed-by-index incident triangles form one edge-connected fan **before positional welding**. Keep this evidence separate from source-vertex liveness and from historical edge-status semantics. Bound work by source face/edge incidence rather than pairwise incident-face expansion. Observation never grants repair authority.

This fills a real structural gap: a mesh can have clean edge incidence while two otherwise closed surface components touch at only one source vertex, producing a bow-tie vertex that edge-only evidence does not classify as a local vertex-fan defect.

## UC issue #186 / draft PR #187

Implementation repository:

`mike-axiom-mir/axm-universal-creation`

Issue:

**#186 — `Geometry: bounded source-index vertex-fan observer`**

Successor branch:

`studio/geometry-source-vertex-fan-observer-001`

Stack base:

PR #184 branch `studio/geometry-source-vertex-liveness-observer-001`

Exact stack-base head:

**`1bf84089d0bb4c8a5c68f15c9e85d25994ddb8d7`**

Draft PR:

**#187 — `Geometry: add bounded source-index vertex-fan observer`**

Exact tested/current head:

**`f47fa61d55220051619ab4414932d76a94a449d2`**

Observed PR state after exact-head structural CI:

**OPEN / DRAFT / MERGEABLE**.

PR #187 targets the reviewed #184 branch instead of `main`, so its diff is the fan-observer successor only rather than a duplicate copy of the liveness lane.

## Exact bounded observer contract

`inspect_mesh_topology()` now additionally reports, from exact source indices before positional welding:

- `source_vertex_fan_observed_count`;
- `disconnected_source_vertex_fan_count`;
- `max_source_vertex_fan_components`;
- `all_referenced_source_vertex_fans_connected`;
- bounded deterministic `examples.disconnected_source_vertex_fans` with exact source vertex, incident-triangle count and fan-component count.

The source-fan implementation builds source face/edge incidence once. For each exact source vertex, local union-find joins incident faces through source edges that contain that same vertex. A source edge with `k` incident faces uses one anchor-to-rest pass at each endpoint, so work is proportional to bounded incidence rather than all face-pair combinations.

Exact-index-collapsed source triangles are excluded from fan construction. Fan completeness then fails closed if a referenced source index was not observed through any valid source-index triangle. Existing collapsed-triangle evidence remains independently authoritative.

Historical edge-status values are deliberately unchanged:

- `CLOSED_ORIENTED_EDGE_MANIFOLD_CANDIDATE`;
- `OPEN_EDGE_MANIFOLD_CANDIDATE`;
- `INVALID_EDGE_TOPOLOGY`.

A caller needing stronger source-index fan evidence must explicitly gate on the new fields and bind the exact observer identity. No old receipt is silently upgraded.

Truth-boundary flags explicitly preserve:

- `source_indexed_vertex_fan_connectivity_checked = true`;
- `source_index_collapsed_triangles_excluded_from_vertex_fans = true`;
- `fan_work_bounded_by_source_face_edge_incidence = true`;
- `vertex_manifoldness_checked = false`;
- `seam_welded_geometric_vertex_manifoldness_checked = false`;
- no source geometry rewrite or repair.

## Structural regression evidence

Dedicated source-index-fan suite at exact head `f47fa61d55220051619ab4414932d76a94a449d2` establishes:

- existing UC box / pyramid / cylinder fixtures remain source-fan connected;
- the box's intentional positional seam duplicates remain distinct exact source indices and all retain one fan;
- an unused source vertex remains a separate liveness fact rather than becoming a fan defect;
- an open quad keeps one source fan per referenced source index while historical edge status remains open;
- two individually closed tetrahedra sharing only source vertex `0` retain clean edge incidence but expose exactly one disconnected source vertex fan with **6 incident triangles / 2 fan components**;
- **1,024 triangles sharing one source edge** exercise the high-incidence path: edge topology correctly reports the shared edge non-manifold while source-fan connectivity remains one component at the shared endpoints, demonstrating the observer does not require pairwise face expansion;
- an exact-index-collapsed triangle fails source-fan completeness closed;
- full/seam-welded geometric vertex-manifoldness remains explicitly unclaimed.

## Exact CI evidence and retained failed harness evidence

Exact tested/current head:

**`f47fa61d55220051619ab4414932d76a94a449d2`**

Dedicated workflow:

**`35215016254 — Geometry source-index fan evidence` — SUCCESS**

Matrix results:

- Python **3.11** — compile PASS, **15/15 targeted topology tests PASS**;
- Python **3.13** — compile PASS, **15/15 targeted topology tests PASS**.

The preceding dedicated run **`35214873715`** remains retained as failed evidence rather than erased: both matrix jobs compiled successfully, but the new stacked-PR workflow omitted `PYTHONPATH=src` and failed with `ModuleNotFoundError: axm_uc` **before any topology test executed**. Commit `f47fa61d55220051619ab4414932d76a94a449d2` changes only that CI harness path; the exact successor run is green.

At this status snapshot, additional exact-head UC integration workflows were separate from the structural claim:

- `35215016252 — Profession crew verification` — **SUCCESS**;
- `35215016214 — Actual Godot target verification` — still **IN_PROGRESS** at snapshot;
- `35215016323 — Candidate adoption resume` — still **IN_PROGRESS** at snapshot.

Pending workflows are not relabelled as passes and are not needed to claim the narrower read-only structural observer evidence above.

## Provenance / rollback

Exact lineage retained:

- previous Geometry coordination blob: **`763eb3444d942c5d78676ae5bb1206bc6a218110`**;
- Character independent trigger: Geometry #16 head **`8ad006f91ebb9934d5df98702e4410c74a1e68ea`**;
- Animal independent historical tested trigger: **`002f6754f7d367b114352883565c6e28a4f07ac8`**;
- reviewed liveness parent PR #184 head: **`1bf84089d0bb4c8a5c68f15c9e85d25994ddb8d7`**;
- UC fan placement issue: **#186**;
- UC fan implementation/test head: **`f47fa61d55220051619ab4414932d76a94a449d2`**;
- green structural workflow: **`35215016254`**;
- retained failed harness workflow: **`35214873715`**.

No donor implementation was copied. No old product or UC PASS state is inherited by the new observer without explicit rerun.

## Handoffs recorded

- **UC PR #184 comment `5713492013`:** fan expansion remains outside liveness-only #184; #187 stacks on reviewed head and does not widen #184 evidence.
- **UC PR #187 comment `5713493505`:** exact tested head, green Python 3.11/3.13 structural workflow, retained predecessor harness failure and exact non-claims.
- **Animal Geometry PR #4 comment `5713494529`:** historical fan pattern acknowledged as independent requirement evidence only; no code copied, no Animal PASS transfer, no current Animal branch mutation.
- **Character Geometry PR #16 comment `5713496168`:** independent local fan preflight acknowledged; no Character evidence rewrite; explicit rebind/rerun is required before Character can claim UC-backed coverage.

## Held mutations / limitations

No generic fan-repair transform is added.

Geometry does **not** infer that a disconnected source-index fan should be split, welded, reordered or otherwise repaired. Source ownership, UV/material/hard-normal seams, skin/morph/custom attributes, external references and downstream consumer identity can all make mutation semantics product-specific.

The previously held generic `prune_unreferenced_vertices()` mutator also remains HOLD. Source liveness and source-fan connectivity are observations; neither grants generic deletion/reindex authority.

## Truth boundary / explicit non-claims

This activation does **not** establish:

- full vertex-manifoldness;
- seam-welded geometric vertex-manifoldness;
- freedom from self-intersection;
- permission to split, weld, prune or otherwise repair arbitrary source vertices;
- deformation / Rigging / Animation quality;
- UV, normal, tangent, material or rendered quality;
- runtime/device benefit;
- collision, navigation, physics or gameplay suitability;
- Character source adoption or any new product topology identity;
- automatic upgrade of historical receipts;
- a Profession Fabric capability;
- CANON, production readiness, game readiness or Geometry mastery.

## Four-root gate

- **Truth:** an edge-clean bow-tie source vertex is now separately observable, the initial unbounded attempt and harness failure remain recorded, and pending workflows stay pending rather than being promoted to PASS.
- **Agency / non-domination:** the observer reports structure; source/product owners retain repair and adoption authority.
- **Continuity:** PR #184's integration-review correction is preserved instead of overridden; #187 is a separate stacked successor with exact parent/head/workflow identities and rollback points.
- **Wisdom before speed:** Geometry chose a reusable cross-domain observer justified independently by Animal and Character, but rejected unbounded pair expansion and avoided churning already-owned product meshes.

## Next Geometry pass

Re-scan the constellation first.

Priority triggers:

1. **PR #184 changes or merges:** rebase/retarget #187 without silently changing its exact structural claim, then rerun the dedicated observer evidence.
2. **PR #187 receives review:** treat review evidence as authoritative; repair bounded-work or truth-boundary issues before promotion.
3. **A consumer explicitly needs source-index fan evidence:** bind the exact UC observer identity and rerun product-local evidence; do not inherit UC PASS automatically.
4. **A materially independent product exposes safe fan repair semantics:** only then consider a separate repair capability with explicit channel/lineage authority.
5. **Character / Animal / Building / Nature / Object returns a fresh exact Geometry-owned defect:** work the measured product defect; otherwise do not mutate meshes merely to fill a run.
