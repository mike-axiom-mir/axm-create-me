# Capability Cartographer Status

- Date: `2026-09-17`
- Standing role: `studio/specialists/14_capability_cartographer.md`
- Campaign contract: `studio/3D_STUDIO_CAMPAIGN.md`
- State: `PASS_CLOSED_SHELL_ORIENTABILITY_SIGNED_ORIENTATION_PLACEMENT_MAP / BUILDING_OBJECT_REPEAT_THRESHOLD_MET / UC_199_PROPOSED_READ_ONLY_OBSERVER / EXISTING_TOPOLOGY_GAP_CONFIRMED / RENDERER_FRONT_FACE_POLICY_SEPARATED / NO_PRODUCT_OR_PF_IMPLEMENTATION / CREATE_ME_COORDINATION_ONLY`

## Current activation

Re-read the 3D Studio campaign and Capability Cartographer standing role, then rescanned specialist status, current product PRs, Universal Creation main/open lanes, Profession Fabric continuity and the shared-capability execution-claim registry before changing coordination state.

`axm-create-me` remains **coordination only**. No product geometry, winding, renderer policy, Universal Creation implementation, Profession Fabric implementation, Art/QA verdict, source adoption, CANON state, specialist authority or merge authority moved into this repository.

The four AXM roots remain the gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh overlap / placement scan

Shared-system continuity at this activation:

- Universal Creation current main: `95b618f6e6028c2ac8c1a106cfa009a3c106f48c` (merged Physics PR #197);
- active UC successor PR #198 is Physics at current reported head `933076a54d897702617d4ff8352b857185c0595a` and does not overlap mesh shell-orientation observation;
- open UC PR #151 is the animated island-boat/material lane and PR #153 is bounded unwrap/bake work; neither owns this scope;
- no open UC issue was found for closed-shell orientability / signed-orientation observation;
- `studio/SHARED_CAPABILITY_EXECUTION_CLAIMS.md` contains no active claim for this scope;
- Profession Fabric issue #38 remains the evidence/provenance procedure surface and PF PR #37 remains the separate bounded-variation experiment; neither should absorb indexed-mesh orientation algorithms.

No shared implementation lane was opened. This pass creates a bounded UC **proposal only**.

## Selected material cross-repo learning

The repeated structural question has now crossed the shared-machine proposal threshold:

**`EDGE_CLOSURE != ORIENTABILITY != GLOBAL_SIGNED_ORIENTATION != RECEIVER_FRONT_FACE_POLICY`**

These are four distinct evidence layers:

1. **edge closure / manifold-candidate structure** — are triangle edges bounded as expected;
2. **orientability / local winding coherence** — can face parities be made mutually consistent across a connected closed component;
3. **global signed orientation in a declared coordinate frame** — once coherent, what algebraic signed-volume orientation does that exact component have;
4. **receiver front-face / culling interpretation** — how a target renderer interprets winding after transport.

A PASS in one layer does not transfer to the next.

## Evidence A — Building supplies the first closed positive-volume product family

Repository: `mike-axiom-mir/axm-building-design`

Geometry PR #6 exact current head:

`b6d14d48c59859ae6ff2aaed7dea86b4e00a5402`

The Building lane derives a boundary-only reference shell from the current source-owned segmented pavilion representation while keeping the semantic 23-box source authoritative.

Exact retained result:

- derived shell: `1420 vertices / 2884 triangles`;
- face-connected solid components: `4`;
- boundary edges: `0`;
- non-manifold edges: `0`;
- orientation-conflict edges: `0`;
- degenerate triangles: `0`;
- disconnected indexed vertex fans: `0`;
- occupied union volume: `9.49832 m^3`;
- candidate signed volume: `9.49832 m^3`;
- source adoption: not claimed.

Building explicitly recorded that one source family was insufficient to promote its structural pattern into UC. That restraint is preserved.

## Evidence B — Object supplies the independent second case and exposes the missing distinction

Repository: `mike-axiom-mir/axm-object-design`

Geometry PR #33 exact current head:

`606d8189a3bf4502141d8038f08d35d421829dde`

Source asset remains `468 vertices / 812 triangles / 31 rigid groups`.

The decisive observations are:

- all exact source groups are closed by edge incidence;
- the 17 box groups are coherently negative-volume;
- the 14 cylinder groups contain `304` same-direction shared-edge orientation conflicts;
- signed volume is treated as decisive only after local orientation coherence is established;
- derived candidate conflicts: `304 -> 0`;
- candidate groups with positive signed volume: `31 / 31`;
- face windings reversed: `508 / 812`;
- source positions changed: false;
- per-face vertex membership changed: false;
- triangle order changed: false;
- group partition changed: false;
- source adopted: false.

This proves why closure alone is insufficient in two different ways: a shell can be closed yet locally inconsistent, or closed and locally coherent yet globally signed in the opposite orientation.

## Reuse pressure — exact Geometry helper is already being consumed downstream

Object Procedural PR #11 current head:

`bdcc35bc663ec5166aaf7d6eeefd715707c33482`

Its newest oriented service-module configuration successor consumes the **exact pinned Geometry #33 orientation helper** rather than copying the solver. Across four retained configuration outputs, generated module shells move from negative to positive signed volume with all 12 faces flipped per generated module instance, while historical outputs remain addressable and product/source authority does not transfer.

That reuse is still inside Object and is not counted as a third product. It does, however, demonstrate that the Geometry operation is already useful outside the exact source candidate that first exposed it.

## Existing UC gap confirmed

Current UC `src/axm_uc/mesh_topology.py` already provides strong neutral observation:

- source vertex liveness;
- source-index vertex-fan connectivity;
- positional seam welding for structural observation;
- collapsed triangle detection;
- boundary and non-manifold edge counts;
- `orientation_conflict_edge_count`;
- connected triangle-component count;
- `closed_by_edge_incidence`;
- `orientation_consistent_by_shared_edge`.

It intentionally performs no topology repair.

The missing neutral observation is narrower:

1. if input winding is inconsistent, UC does not currently say whether the closed component is **orientable** under a consistent face-parity assignment;
2. if input winding is already coherent, UC does not report the component's **global signed orientation** in the declared input frame.

Therefore a coherently inward closed shell can satisfy the existing `CLOSED_ORIENTED_EDGE_MANIFOLD_CANDIDATE` status without the global sign being reported.

UC already has internal signed-volume calculation inside fabrication/cutter machinery, but that is not exposed as a general read-only topology observation. The gap is therefore real without requiring product semantics to define it.

## Receiver-policy separation — Object Materials prevents over-generalization

Object Materials PR #6 exact tested head:

`ad1353d11b5175e05661efa45a32b8e40ec8707c`

Its real Godot receiver shows why a shared source/topology observer must stop before renderer policy. With the same exact Geometry candidate and unchanged material values, the retained target host is strongly winding-sensitive under backface culling:

- owner-order culled vs owner-order two-sided aggregate: `154,468 px > 1 LSB`;
- host-reversed culled vs host-reversed two-sided aggregate: only `3 px > 1 LSB`;
- unshaded cull-disabled owner-order vs reversed-order spatial controls remain `0` raw changed pixels in all three retained cameras.

Materials therefore retains a target-host receiving preference without relabelling it as source truth. Technical Art still owns any production transport/index-order adapter.

This gives the placement stop line:

**UC may observe graph orientability and signed orientation; it must not choose target renderer front-face semantics.**

## Placement action — Universal Creation proposal #199

Opened:

`mike-axiom-mir/axm-universal-creation#199`

Title:

`Proposal: expose closed-shell orientability and signed-orientation evidence`

The proposed scope is an **opt-in read-only extension** of the existing topology observer. A future implementation may report, per eligible connected component:

- exact component identity/digest;
- closure state;
- current shared-edge orientation state;
- `ORIENTABLE | NON_ORIENTABLE | NOT_EVALUATED`;
- deterministic parity-solution identity/digest when orientable;
- diagnostic face-flip count relative to exact input;
- current signed volume only when exact input is already closed/coherent;
- coherent-candidate signed volume only after a valid parity solution exists;
- explicit coordinate-frame / handedness convention for the sign;
- bounded failure states for open, non-manifold, disconnected/unsupported, near-zero algebraic volume or work-budget cases.

The proposal explicitly preserves existing topology status semantics and forbids automatic winding repair, source migration, renderer front-face conversion, normals/tangents rewriting, self-intersection repair, physical-volume certification, product adoption or CANON.

Important wording boundary:

A positive signed-volume candidate is **diagnostic**, not universally named `outward`. Signed-volume orientation depends on the declared frame/chirality and still does not prove self-intersection freedom or a renderer's front-face convention.

## Profession Fabric placement

No new PF refinement was needed this pass.

PF issue #38 already owns provenance/rebind procedure and exact consumed-identity vocabulary. The new repeated operation is deterministic indexed-mesh graph/orientation mathematics, so the correct candidate home is UC rather than PF.

PF would only record a future consumer's old/new UC observer identity and required rerun; it should not implement the orientation solver or choose winding semantics.

## Product returns

Returned the shared-placement decision without modifying product code:

- Object Geometry PR #33 comment `5721855724`;
- Building Geometry PR #6 comment `5721858733`.

Both comments preserve historical evidence and state that a future UC implementation would require explicit product rebind/rerun before shared-observer coverage could be claimed.

No comment was added merely by cadence to Materials or Procedural; their current statuses already contain the relevant authority separation and exact helper-consumption evidence.

## Bounded cross-repo map

| Layer | Correct home | Current evidence | Explicitly not implied |
|---|---|---|---|
| edge closure / current orientation conflicts | UC neutral topology observer | existing `mesh_topology.py` | orientability repair or global sign |
| parity orientability / signed-orientation observation | **UC proposal #199** | Building #6 + Object #33 | source repair/adoption |
| product source winding decision | owning Building/Object source + Geometry/Hard Surface | product receipts | automatic UC adoption |
| target-host front-face/culling rule | Materials / Technical Art receiver | Object Materials #6 | source truth |
| provenance / rebind history | Profession Fabric #38 procedure vocabulary | existing PF proposal | mesh algorithms |
| shared-work collision avoidance | `axm-create-me` execution-claim coordination | no active #199 implementation claim | ownership / merge priority |

## Explicit non-claims

This activation does **not** establish:

- a universal automatic winding repair;
- source adoption of Object Geometry #33;
- source adoption of Building's derived boundary shell;
- that positive signed volume alone proves geometric outwardness for arbitrary/self-intersecting meshes;
- renderer front-face correctness from source signed orientation;
- target-host transport correctness;
- normals/tangents/UV/material acceptance;
- physical volume, collision, manufacturing or gameplay validity;
- a UC implementation of proposal #199;
- a PF implementation or profession promotion;
- Art Direction / Visual QA acceptance;
- CANON;
- production/game readiness;
- mastery;
- merge authority transfer.

`axm-create-me` remains coordination-only.

## Four-root gate

**Truth:** Building and Object are kept as separate exact product proofs, and the existing UC observer's real boundary is named precisely. Signed orientation is not inflated into renderer or physical truth.

**Agency / non-domination:** source owners retain source winding/adoption authority; Geometry owns product structural candidates; Materials/Technical Art retain receiver conventions; UC is proposed only as a neutral observer; PF retains provenance procedure only.

**Continuity:** Building #6, Object #33, Object Procedural #11, Materials #6 and current UC main remain exact and rollback-addressable. Historical receipts are not retroactively upgraded by opening #199.

**Wisdom before speed:** the second independent product case now justifies a proposal, but not an implementation or auto-repair system. The smallest observer boundary is proposed first.

The four AXM roots remain the merge gate.

## Recovery / provenance

Previous Cartography state:

`PASS_REPRESENTATION_EQUIVALENCE_RELATION_IDENTITY_MAP`

Previous status blob SHA:

`bfd7524f9d65489604c3983124f95234bda48675`

New shared proposal:

`mike-axiom-mir/axm-universal-creation#199`

Product returns:

- `mike-axiom-mir/axm-object-design#33 comment 5721855724`;
- `mike-axiom-mir/axm-building-design#6 comment 5721858733`.
