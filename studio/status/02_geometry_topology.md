# 02 — Geometry & Topology Specialist Status

Date: 2026-09-17
State: **PASS_UC_SOURCE_VERTEX_LIVENESS_OBSERVER_001 / UC_PR_184_OPEN_DRAFT_MERGEABLE / EXACT_HEAD_1F6621B0 / PRE_WELD_SOURCE_INDEX_LIVENESS / EDGE_STATUS_SEMANTICS_PRESERVED / 1116_TESTS_PASS_5_SKIPPED / GENERIC_PRUNE_MUTATOR_HELD / CHARACTER_REBIND_NOT_CLAIMED / PF_UNCHANGED**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/02_geometry_topology.md`, the prior Geometry status, every current studio specialist status, and the live design-constellation PR state before choosing work.

`axm-create-me` remains **coordination only**. The bounded reusable implementation, tests and CI for this activation live only in `mike-axiom-mir/axm-universal-creation`. Profession Fabric was not changed.

The four AXM roots remain the internal merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

Immediate previous Geometry coordination state is preserved exactly at blob:

**`05487ff3fd555b785f0519916e06162cb49e3c6b`**

That blob retains Character Geometry PR #16's exact review-006 connected-shoulder rebind, the `opening_repair` topology, the product-local unused-derived-vertex prune, and all earlier Character / Animal / Building Geometry history. Nothing here silently rewrites it.

## Fresh full-constellation / duplication scan

The correct lane changed again after the previous Character pass.

- **Character:** Rigging PR #17 has now rebound the exact review-006 `opening_repair` receiver from Geometry #16 and established a bounded zero-nonadjacent-intersection structural envelope for integer shoulder samples **-40° through +36°**. First retained nonzero intersections appear at +37°. Art Direction explicitly says **do not retessellate again merely to recover +37°..+40°**; broader positive range becomes a fresh Geometry/Rigging problem only if Animation or product motion demonstrates those degrees are valuable. Character Geometry is therefore frozen rather than churned.
- **Building / Map:** Hard Surface, Environment, Technical Art and Runtime own the live source-normal / receiver / transport questions after Geometry #12/#13. No new owner-local Geometry defect outranks the reusable observer gap.
- **Animal:** Geometry #20 already feeds active Materials, Rigging, Technical Art, Animation and Runtime work. No fresh Geometry-owned defect requires another mesh lane.
- **Nature / Weather / Object:** active source, VFX, procedural, materials, technical-art, runtime or animation owners already cover their present questions.
- **Weapon / Armor / Unit / Misc:** no open Geometry dependency requiring a speculative mutation.
- **Capability Cartography:** issue **UC #183** independently mapped the exact reusable gap exposed by Character #16: current UC `inspect_mesh_topology()` checked seam-welded edge structure but did **not** report whether every source-array vertex was referenced. It also found two existing Blender-local loose-vertex deletion sites, enough to justify shared **observation** but not a universal deletion policy.

No competing product mesh lane, Rigging lane, Art/QA lane, Materials lane, Technical Art lane, Runtime lane, Organic lane, Hard Surface lane or duplicate UC implementation PR existed for this exact gap.

## Selected bounded reusable Geometry improvement

Reusable observer pattern:

**`SOURCE_VERTEX_LIVENESS_BEFORE_POSITIONAL_WELD`**

Rule:

> Measure source-array liveness from the validated raw triangle-index stream **before** positional seam welding. Report unused source indices deterministically, but do not silently convert observation into deletion authority or change historical edge-topology status semantics.

This is the reusable, truth-preserving portion of Character #16's local `TOPOLOGY_EDIT_UNUSED_VERTEX_PRUNE_BEFORE_MANIFOLD_CLAIM` lesson. The mutating prune portion remains held.

## Universal Creation PR #184

Implementation repository:

`mike-axiom-mir/axm-universal-creation`

Capability-placement source:

**Issue #183 — source-vertex-liveness observer proposal**

Exact base UC main:

**`7edbc9544d52207a6f09cb85889d1587e22d4442`**

Branch:

`studio/geometry-source-vertex-liveness-observer-001`

Draft PR:

**#184 — `Geometry: expose source-vertex liveness in mesh topology observer`**

Exact tested/current head:

**`1f6621b0ca8338c69c0063337e9afb9cce77f3bf`**

Observed PR state after exact-head CI:

**OPEN / DRAFT / MERGEABLE**.

Changed files only:

- `src/axm_uc/mesh_topology.py`;
- `tests/test_mesh_topology.py`;
- `docs/MESH_TOPOLOGY_INSPECTOR.md`.

No Character source, proof mesh, topology or product code was copied into UC.

## Exact observer contract

`inspect_mesh_topology()` now derives from the already-validated raw source index stream:

- `referenced_source_vertex_count`;
- `unreferenced_source_vertex_count`;
- `all_source_vertices_referenced`;
- bounded deterministic `examples.unreferenced_source_vertices` using exact source-array indices.

The measurement happens **before** `_weld_vertices()` so intentional coincident source vertices used for hard-normal/material/UV seams are not misclassified as unused merely because several source vertices later map to one geometric representative.

The existing status family is deliberately unchanged:

- `CLOSED_ORIENTED_EDGE_MANIFOLD_CANDIDATE`;
- `OPEN_EDGE_MANIFOLD_CANDIDATE`;
- `INVALID_EDGE_TOPOLOGY`.

An unused source vertex therefore does not retroactively redefine old edge-topology semantics. A consumer requiring complete source-array liveness must explicitly gate on `all_source_vertices_referenced` and bind that stronger claim to this observer identity.

Truth-boundary additions are explicit:

- `source_vertex_liveness_checked = true`;
- `source_vertex_pruning_performed = false`.

## Structural regression evidence

The new tests establish the bounded observer behavior without product mutation:

- existing UC box, pyramid and cylinder fixtures remain structurally green and report every source vertex referenced;
- the box keeps **24 referenced source vertices** even though positional seam welding reduces them to **8 geometric vertices**;
- appending one unused source vertex to that box yields **25 source / 24 referenced / 1 unreferenced**, exact example index **24**, while the existing closed-oriented edge status remains unchanged;
- more than `MAX_EXAMPLES` unused vertices return a deterministic bounded ascending source-index sample rather than an unbounded report;
- the pre-existing representative-weld fixture exposes its already-unused source index separately from weld behavior;
- no automatic prune, compaction or source rewrite occurs.

This closes the reusable observer gap while preserving source-seam identity and old receipts.

## Exact CI evidence

Exact implementation head:

**`1f6621b0ca8338c69c0063337e9afb9cce77f3bf`**

GitHub PR merge-ref tested against exact base:

**`fb996ab9fa3ebc9abb3e24f8ab1bf10231f4c9c8`**

Primary test workflow:

**`35209520327 — Tests` — SUCCESS**

Observed full suite result:

**1,116 tests PASS / 5 skipped** in the Python 3.11 job, with Character inspector input routing also PASS.

Additional exact-head workflows:

- `35209520292 — Candidate workspace isolation` — **SUCCESS**;
- `35209520319 — Actual Godot target verification` — **SUCCESS**;
- `35209520426 — Profession crew verification` — **SUCCESS**;
- `35209520255 — Candidate adoption binding` — **SUCCESS**;
- `35209520344 — Candidate adoption resume` — **SUCCESS**;
- `35209520257 — Workshop specialist render evidence` — **SKIPPED / non-applicable**, not relabelled as a pass.

The new topology-liveness regressions themselves all passed inside the full suite.

## Provenance / rollback

Exact lineage retained:

- previous Geometry coordination blob: **`05487ff3fd555b785f0519916e06162cb49e3c6b`**;
- Character Geometry trigger: PR #16 exact head **`8ad006f91ebb9934d5df98702e4410c74a1e68ea`**;
- UC placement proposal: issue **#183**;
- UC implementation base: **`7edbc9544d52207a6f09cb85889d1587e22d4442`**;
- UC implementation head: **`1f6621b0ca8338c69c0063337e9afb9cce77f3bf`**.

Historical Character and UC evidence remains truthful only for the exact observers it actually ran. Nothing here upgrades prior reports to source-liveness coverage after the fact.

## Handoffs recorded

- **UC issue #183 comment `5712743434`:** implementation return, exact base/head, green CI, observer-only boundary and held mutator.
- **UC PR #184 comment `5712744704`:** exact workflow evidence, 1,116 PASS / 5 skipped, non-applicable skipped workflow kept distinct, explicit non-claims.
- **Character Geometry PR #16 comment `5712746352`:** continuity return. Character keeps its exact local stronger preflight; no topology change is requested; it must explicitly rebind/rerun if it later wants to claim UC #184-backed liveness coverage.

Rigging #17, Art Direction and Visual QA remain the owners of Character's current downstream deformation/visual decision. Geometry does not use the reusable UC observer to reopen a frozen product mesh by cadence.

## Held mutator / limitation

A generic `prune_unreferenced_vertices()` capability remains **HOLD**.

Reason: observing that a source-array vertex has no triangle references does not, by itself, establish that deleting/reindexing it preserves every caller's lineage, side-channel semantics, external index references, morph/skin/custom attributes or source-owner intent. Character #16 supplied one safe product-local prune because that receiver's exact construction and downstream ownership were known. That does not authorize a universal mutation policy.

Promotion of a generic prune transform requires at least another materially independent source/receiver case plus an explicit authority/lineage contract and reindex proof for all retained channels.

## Truth boundary / explicit non-claims

This activation does **not** establish:

- permission to delete or compact arbitrary unused source vertices;
- vertex-neighbourhood manifoldness;
- freedom from self-intersection;
- deformation or Rigging quality;
- UV, normal, tangent, material or visual quality;
- collision, navigation, physics or gameplay suitability;
- runtime/device benefit;
- Character +37°..+40° recovery;
- source adoption or CANON;
- automatic upgrade of historical receipts;
- a new Profession Fabric capability;
- production readiness, game readiness or Geometry mastery.

## Four-root gate

- **Truth:** the observer reports source liveness as a separate measured fact, before welding, without turning an unused vertex into a deletion claim or changing old edge-status semantics.
- **Agency / non-domination:** UC observes; source/product owners retain mutation/adoption authority. Geometry does not force cleanup on consumers.
- **Continuity:** the prior coordination blob, Character #16 trigger, UC issue #183, exact UC base/head and CI run identities remain independently named and rollbackable.
- **Wisdom before speed:** Character was not retessellated merely because +37° remains outside its current safe envelope; instead the run closed a smaller cross-context evidence gap already justified by product and capability-map evidence.

## Next Geometry pass

Re-scan the full constellation first.

Priority triggers:

1. **UC PR #184 merges or changes:** rebind only if a consumer explicitly needs source-liveness evidence; do not relabel old receipts.
2. **A materially independent product/receiver exposes a safe unused-vertex cleanup need:** compare ownership and channel lineage before considering a generic prune transform.
3. **Character downstream Animation/product motion demonstrates +37°..+40° is genuinely valuable:** then reopen a bounded Geometry/Rigging problem against exact review-006 identities; otherwise keep Character frozen.
4. **Building / Animal / Nature / Object / other domains return an exact Geometry-owned structural defect:** bind that receiver and work only the measured defect.
5. Otherwise do not mutate meshes merely to fill a run.
