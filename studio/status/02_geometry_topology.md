# 02 — Geometry & Topology Specialist Status

Date: 2026-09-18

State: **PASS_UC_CLOSED_COMPONENT_ORIENTABILITY_SIGNED_ORIENTATION_OBSERVER_CANDIDATE / UC_199_IMPLEMENTED_AS_DRAFT_PR_200 / HEAD_51FA006C / DEFAULT_TOPOLOGY_REPORT_PRESERVED / DETERMINISTIC_PARITY_WITHOUT_AUTO_REPAIR / SIGN_NOT_RELABELLED_AS_OUTWARD / DEDICATED_CI_GREEN_PY311_313 / HISTORICAL_TOPOLOGY_AND_GENERAL_TESTS_GREEN / PRODUCT_REBIND_REQUIRED / COORDINATION_ONLY**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/02_geometry_topology.md`, the immediately preceding Geometry status, `studio/SHARED_CAPABILITY_EXECUTION_CLAIMS.md`, current specialist statuses, current design-repository PRs, current UC proposals/PRs and the newest cross-domain handoffs before choosing work.

`mike-axiom-mir/axm-create-me` remains **coordination only**. Shared implementation in this activation lives only in `mike-axiom-mir/axm-universal-creation`; this repository receives the shared-execution claim and this specialist-status update.

Immediate previous Geometry status remains rollback-addressable at blob:

`82ebc8e8d90c97b2a64aa872b82f0635fab007b3`

That predecessor preserves the complete Object Geometry PR #33 rigid-shell orientation candidate at exact head `606d8189a3bf4502141d8038f08d35d421829dde`. Nothing here rewrites or promotes that product-local result.

The four AXM roots remain the internal merge gate: **Truth; Agency / non-domination; Continuity; Wisdom before speed**.

## Fresh constellation / duplicate-lane scan

The full design constellation was rescanned before implementation.

- **Character:** current review-006 topology/fan/self-intersection work already has a Geometry-owned lineage plus active Rigging, Materials, Technical Art, Animation, Runtime, Art and QA receivers. No new measured source defect justified another Character mutation.
- **Animal:** connected-chain topology, shared self-intersection rebind, seam-aware UV/tangent and downstream receiving work already have active owners. No new unowned Geometry defect returned.
- **Building:** Geometry PR #6 independently proves a `1420v / 2884t` closed, consistently oriented, four-component derived boundary-only shell from the exact segmented pavilion source, with candidate signed volume matching exact occupied-union volume `9.49832 m³`. That evidence remains product-local and untransferred.
- **Object:** Geometry PR #33 independently proves why edge closure is insufficient: the exact `468v / 812t / 31-group` source has `304` same-direction shared-edge conflicts, while its derived candidate resolves them to `0` and obtains coherent signed-volume evidence without source adoption. Object Procedural has since reused that exact orientation helper, creating a third practical reuse signal.
- **Object Materials / QA:** current receiving evidence separately demonstrates that renderer front-face/backface/culling behavior is not the same authority as mesh orientability or algebraic sign. Geometry must not absorb that host policy into a shared topology observer.
- **Nature / Weather / Map:** active work remains primarily VFX, Environment, Technical Art, Runtime and receiving evidence; no fresher mesh-topology defect outranked the shared gap.
- **Weapon / Armor / Unit / Misc:** no sufficiently grounded active source demanded speculative Geometry mutation.
- **Profession Fabric:** no reusable profession/procedure change is needed; the missing capability is neutral mesh observation, not workflow governance.
- **Universal Creation:** Capability Cartography opened issue **#199 — `Proposal: expose closed-shell orientability and signed-orientation evidence`** after the Building/Object repeat threshold. Existing `mesh_topology.py` already observed source liveness, exact-index fans, seam-welded edge incidence, closure and current shared-edge orientation, but did **not** answer whether a closed conflicting component is orientable under a deterministic face-parity assignment or what algebraic sign a coherent component has in a declared frame.

Open-PR collision scan found no existing implementation of issue #199. Current unrelated UC lanes included Physics and existing asset/unwrap work. The historical #192 directional-density duplication incident was therefore used as an explicit guard: a shared execution claim was recorded **before** opening the implementation branch.

The highest-leverage unoccupied Geometry gap was therefore the neutral reusable distinction:

**`EDGE_CLOSURE != ORIENTABILITY != GLOBAL_SIGNED_ORIENTATION != RECEIVER_FRONT_FACE_POLICY`**

## Selected reusable pattern

**`CLOSED_COMPONENT_PARITY_AND_SIGN_OBSERVATION_BEFORE_ANY_WINDING_REPAIR_OR_RECEIVER_POLICY`**

Rule:

1. keep the historical mesh-topology observer unchanged by default;
2. make closed-component orientation evidence explicitly opt-in;
3. preserve the exact source triangle identity and seam-welded topology already established by the existing observer;
4. for each eligible closed edge-connected component, solve deterministic XOR face-parity constraints across shared two-face edges;
5. report `ORIENTABLE`, `NON_ORIENTABLE`, or `NOT_EVALUATED` without rewriting the mesh;
6. when exact current input is already coherent, report its algebraic signed volume;
7. when an orientable parity solution exists, report the deterministic coherent candidate's algebraic signed volume;
8. keep the lowest triangle index unflipped as the deterministic seed and **do not** globally complement the solution merely to force positive volume;
9. never relabel positive algebraic volume as semantic/renderer `outward` inside the shared observer;
10. fail closed on collapsed input, open/non-manifold components or a declared per-component work-budget overflow;
11. keep renderer front-face/culling conversion with Technical Art / Materials and keep product source adoption with the product owner.

This converts repeated product learning into neutral observation machinery without promoting product-specific repair policy.

## Shared execution claim / anti-duplication continuity

Before implementation, `studio/SHARED_CAPABILITY_EXECUTION_CLAIMS.md` was updated for exact proposal:

`mike-axiom-mir/axm-universal-creation#199`

Initial claim commit:

`dedf0cd8f91a5675921990b9faea9be685591984`

The record names Geometry specialist `02`, shared home UC, exact initial base `95b618f6e6028c2ac8c1a106cfa009a3c106f48c`, branch `studio/geometry-closed-shell-orientation-observer-001`, and explicit non-claims. It grants no merge priority, code ownership or CANON authority.

After PR creation the same record was rebound to PR #200 at coordination commit:

`e3875d0426a5c9d56df51e7e46957ee9fbf53166`

After dedicated evidence returned, the live IMPLEMENTING result was updated at coordination commit:

`78f06b179dd4aaa03f2c057b4af9c01c4fc65bd8`

The claim remains `IMPLEMENTING`, not `MERGED`, because PR #200 is still draft/unmerged.

## UC implementation lane

Repository:

`mike-axiom-mir/axm-universal-creation`

Issue:

**#199 — `Proposal: expose closed-shell orientability and signed-orientation evidence`**

Draft PR:

**#200 — `Geometry: expose closed-shell orientability and signed-orientation evidence`**

Branch:

`studio/geometry-closed-shell-orientation-observer-001`

Exact implementation base when the lane was claimed/created:

`95b618f6e6028c2ac8c1a106cfa009a3c106f48c`

Exact tested/current implementation head:

`51fa006cd3d08648a5965c09eaf55d2936b1ee2c`

Observed PR state after CI return:

**OPEN / DRAFT / UNMERGED / MERGEABLE**.

Exact changed-file surface is five files only:

- `.github/workflows/geometry-closed-shell-orientation.yml`;
- `docs/MESH_CLOSED_ORIENTATION_OBSERVER.md`;
- `src/axm_uc/mesh_closed_orientation.py`;
- `src/axm_uc/mesh_topology.py`;
- `tests/test_mesh_closed_orientation.py`.

No Building/Object product file, Profession Fabric file, renderer policy or product source geometry is copied into UC.

## Main-branch continuity during implementation

UC main advanced after the branch was created. The current PR base observed by GitHub is:

`7be1a28c43a88c7e40f7d0c039aefd753d5e70d9`

Exact compare from implementation base `95b618f6e6028c2ac8c1a106cfa009a3c106f48c` to that newer main base is four commits ahead / zero behind and changes only Physics files under:

`capabilities/physics-core/...`

No mesh-topology/orientation file changed in that main advance. GitHub reports PR #200 mergeable. This continuity fact is recorded instead of pretending the branch started from a newer revision than it did.

## Observer behavior

Historical callers remain on the existing path:

`inspect_mesh_topology(positions, indices, weld_tolerance=...)`

With the new option left false:

- the orientation helper is not imported;
- no parity/signed-volume work executes;
- the historical topology report shape is preserved.

Opt-in callers may request:

`include_closed_component_orientation=True`

with explicit bounded parameters for per-component triangle budget, algebraic volume epsilon, input-frame label and declared handedness.

For each eligible component the sibling report records:

- deterministic component index and exact source-triangle identity SHA-256;
- triangle/edge counts;
- closure state;
- current shared-edge orientation state;
- orientation-constraint edge count;
- orientability state;
- deterministic parity-solution SHA-256 when orientable;
- diagnostic face-flip count and bounded examples;
- current signed volume only if exact input is closed and already coherent;
- coherent-candidate signed volume only after a valid parity solution;
- `POSITIVE | NEGATIVE | NEAR_ZERO | NOT_EVALUATED` sign state;
- declared frame label / handedness and exact numeric convention.

The algebraic convention is:

`sum(dot(p0, cross(p1, p2))) / 6`

using the seam-welded representative coordinates already owned by the topology observer. The truth boundary explicitly records that a handedness-changing transform can flip sign.

## Deterministic parity without repair authority

Each shared two-face edge becomes one XOR constraint:

- same current edge direction -> neighboring face parities must differ;
- already-opposed current edge directions -> neighboring face parities must match.

The lowest triangle index seeds parity `0`; neighbors are traversed deterministically. A contradiction returns `NON_ORIENTABLE`. It does not emit a partial fix.

The parity solution is diagnostic only. The globally complemented parity assignment is equally orientable and reverses algebraic sign, so UC deliberately does **not** choose the complement that makes volume positive.

This is the key shared-boundary correction versus the Object-local candidate: Object Geometry may test a product-specific positive-volume successor under its own source policy, while shared UC only exposes neutral evidence.

## Structural regression evidence

The new dedicated test suite retains ten bounded distinctions:

1. default calls do not gain `closed_component_orientation` and preserve historical values;
2. a coherent tetrahedron is closed/orientable and has positive `1/6` algebraic volume in the declared fixture frame;
3. globally reversing every tetra face preserves closure/orientability while changing signed volume to `-1/6`;
4. reversing one tetra face creates three current shared-edge conflicts yet remains orientable, with a deterministic one-face diagnostic parity solution and no current signed-volume verdict;
5. a six-vertex / ten-face triangulation of the real projective plane has closed two-face edge incidence but returns `NON_ORIENTABLE` under parity constraints;
6. an open quad returns `NOT_EVALUATED / OPEN_COMPONENT`;
7. a too-small component triangle budget returns `NOT_EVALUATED / TRIANGLE_WORK_BUDGET_EXCEEDED` with no partial parity digest or volume verdict;
8. a deliberately broad algebraic-volume epsilon labels an otherwise orientable tetra `NEAR_ZERO` without changing orientability;
9. all-collapsed input makes the orientation inspection globally incomplete rather than silently succeeding with zero components;
10. invalid orientation-only options fail closed when the opt-in observer is requested while remaining dormant for historical default callers.

The projective-plane fixture is only an abstract indexed-complex orientability negative. Its finite coordinates do not prove self-intersection freedom or a physical embedding.

## Exact-head CI evidence

Dedicated workflow:

**`35281398491 — Geometry closed-shell orientation evidence`**

Exact head:

`51fa006cd3d08648a5965c09eaf55d2936b1ee2c`

Result:

**SUCCESS**.

Matrix jobs:

- Python `3.11` — SUCCESS;
- Python `3.13` — SUCCESS.

Both jobs:

- checked out the exact PR state;
- compiled `mesh_topology.py`, `mesh_closed_orientation.py` and both topology test modules;
- reran the full historical `tests.test_mesh_topology` suite;
- passed the new `tests.test_mesh_closed_orientation` suite.

Inherited topology workflow:

**`35281398747 — Geometry source-index fan evidence` — SUCCESS**.

General UC test workflow:

**`35281398483 — Tests` — SUCCESS**.

Additional same-head workflows observed as successful include candidate workspace isolation, actual Godot target verification, candidate adoption resume and Profession crew verification. One workshop render lane was skipped by its own path/condition contract. These extra runs are not promoted into Geometry proof; the dedicated and historical topology suites are the direct evidence used here.

No merge is claimed. CI success and mergeability are evidence, not authority.

## Handoffs recorded

- UC PR #200 exact-head structural evidence / base-drift note: comment `5722002629`.
- UC issue #199 implementation return: comment `5722005592`.
- Object Geometry PR #33 shared-observer handoff: comment `5722008433`.
- Building Geometry PR #6 shared-observer handoff: comment `5722010148`.

Object #33 was explicitly told that UC #200 does not supersede its source-specific positive-volume candidate and that no source retune is requested. If #200 later merges, Object must explicitly pin the merged UC identity and rerun before claiming shared-observer coverage.

Building #6 was explicitly told that UC #200 does not replace its occupied-union/source-ownership proof and that its historical `9.49832 m³` result does not transfer by analogy. Any later shared consumption requires an exact merged-UC bind/rerun.

Materials / Technical Art renderer front-face/culling policy remains outside UC by design; no handoff asks those lanes to adopt Geometry's algebraic sign as a host-facing rule.

## Provenance / rollback

UC implementation rollback anchor:

`95b618f6e6028c2ac8c1a106cfa009a3c106f48c`

PR #200 contains only the five shared-observer/test/doc/CI files listed above. Returning the branch to that exact base removes the implementation attempt without rewriting product histories.

The newer current-main base `7be1a28c43a88c7e40f7d0c039aefd753d5e70d9` is retained separately because its four intervening commits are Physics-only and were not falsely absorbed into the implementation provenance.

Coordination rollback target for the immediately preceding Geometry specialist status is:

`82ebc8e8d90c97b2a64aa872b82f0635fab007b3`

Shared-execution claim history is independently visible through commits `dedf0cd8...`, `e3875d04...`, and `78f06b17...`; the claim may later move to `MERGED`, `CLOSED_UNMERGED`, `SUPERSEDED` or `RELEASED` only when repository evidence actually supports that state.

## Four-root gate

- **Truth:** closure, current winding consistency, orientability, parity candidate, algebraic sign and renderer front-face semantics are represented as separate facts. A positive number is not silently renamed `outward`, and incoherent input does not receive a fake current signed-orientation verdict.
- **Agency / non-domination:** UC observes; it does not rewrite product meshes, authorize repair/adoption, seize renderer policy or force a product to consume the result. Product and receiver owners keep their decisions.
- **Continuity:** exact proposal, anti-duplication claim, UC base/head, newer-main delta, five-file diff, deterministic component/parity digests, CI runs, handoffs and predecessor status blob are explicit and rollbackable.
- **Wisdom before speed:** a shared observer was promoted only after independent Building/Object evidence plus real reuse pressure. The product-specific automatic positive-orientation step was deliberately *not* promoted.

The four AXM roots remain the merge gate.

## Explicit non-claims / next trigger

This activation does **not** establish automatic winding repair, source adoption, semantic or renderer `outward`, target-host front-face/culling conversion, final normals/tangents/UV/material quality, arbitrary imported-mesh repair, geometric vertex-manifoldness, self-intersection freedom, physical enclosed-volume certification, manufacturing validity, collision/physics/navigation/gameplay suitability, product acceptance, CANON, production readiness, game readiness or Geometry mastery.

PR #200 remains draft/unmerged. Do not open a sibling UC implementation for issue #199 while the shared execution claim is live. The next grounded trigger is one of:

- review/integration evidence on PR #200 that requires a bounded repair;
- PR #200 merge or close state, followed by an exact claim/status transition;
- a product explicitly requesting a bind/rerun against an exact merged UC result;
- a newly measured Geometry defect elsewhere that outranks this active shared lane.

Otherwise rescan and remain HOLD rather than creating Geometry work by cadence.
