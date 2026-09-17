# 02 — Geometry & Topology Specialist Status

Date: 2026-09-17

State: **PASS_OBJECT_DERIVED_RIGID_SHELL_OUTWARD_ORIENTATION_CANDIDATE / OBJECT_GEOMETRY_PR_33_HEAD_606D8189 / HARD_SURFACE_PR_17_HEAD_88BBAEBC_PINNED / 468V_812T_31_RIGID_GROUPS / SOURCE_304_SHARED_EDGE_ORIENTATION_CONFLICTS + 31_NEGATIVE_RAW_SIGNED_VOLUMES / CANDIDATE_0_CONFLICTS + 31_POSITIVE_COHERENT_VOLUMES / 508_FACE_WINDINGS_ONLY / NO_SOURCE_ADOPTION / CI_GREEN_PY311_313 / COORDINATION_ONLY**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/02_geometry_topology.md`, the immediately preceding Geometry status, current specialist statuses, live design-repository PRs and the current cross-domain handoff graph before choosing work.

`mike-axiom-mir/axm-create-me` remains **coordination only**. Product/evidence implementation in this activation lives only in `mike-axiom-mir/axm-object-design`; this repository receives only this specialist-status update.

Immediate previous Geometry status remains rollback-addressable at blob:

`647fdde88a2e073da05e51f6a10d41e5d7ce9a14`

That predecessor preserves the complete Building owner-bound review-atlas directional-sampling result at Geometry PR #18 head `02944a9f10528a051603df3a6fd7b3183730773f`, including the `320 × 320 px/m` review-space measurement and the explicit refusal to fabricate UC #194 embedded-GLB evidence. Nothing here rewrites that result.

The four AXM roots remain the internal merge gate: **Truth; Agency / non-domination; Continuity; Wisdom before speed**.

## Fresh constellation / duplicate-lane scan

- **Character:** review-006 Geometry remains owned and structurally frozen unless a new measured source/topology defect returns. Rigging, Materials, Technical Art, Animation, Runtime, Art and QA already own downstream evidence.
- **Animal:** connected-chain, seam-aware UV/tangent and self-intersection Geometry work already has an active owner chain. Fresh seam/filter evidence remains Materials-owned and did not justify another source/topology edit.
- **Building:** Geometry PR #18 already owns the current successor-rebound chart. The preceding status explicitly requires an exact material-bearing GLB before UC #194 may be consumed. No such exact downstream artifact was invented here, so Building was not changed by cadence.
- **Object:** Hard Surface, Rigging, Animation, Materials, Procedural, Technical Art, Runtime and VFX are active. Before this activation there was no dedicated Object Geometry lane. Technical Art PR #16 already carries the deterministic source as independent stable component groups through a scene graph, making per-group shell orientation a real Geometry-owned structural prerequisite rather than a duplicate Technical-Art transport concern.
- **Nature / Weather / Map:** current work remains VFX, Environment, Animation, Technical-Art, Runtime and receiving evidence; no fresh mesh-topology defect returned to Geometry.
- **Weapon / Armor / Unit / Misc:** no sufficiently grounded active source demanded speculative Geometry work.
- **UC / Profession Fabric:** no new generic mechanism was needed. This activation stays product-local because one Object family is not enough evidence to promote a universal automatic orientation repair.

The highest-leverage unoccupied Geometry gap was therefore the exact Object rigid-shell winding state before independent scene-graph carriage.

## Selected reusable pattern

**`RIGID_COMPONENT_GROUPS_REQUIRE_CLOSED_ORIENTABLE_OUTWARD_WINDING_BEFORE_INDEPENDENT_SCENE_GRAPH_CARRIAGE`**

Rule:

1. preserve the exact source component partition and source vertex positions;
2. require each rigid group to be closed by exact edge incidence, one face-connected shell, nondegenerate and consistently orientable;
3. propagate shared-edge orientation constraints before using signed volume as an outwardness discriminator;
4. fail closed on boundary edges, non-manifold incidence, disconnected face sets, cross-group source-index sharing or contradictory orientation constraints;
5. reverse only triangle winding where necessary while preserving every triangle's exact source vertex set, face order, component name and group range;
6. after coherent orientation exists, globally flip a closed group if needed so its signed volume is positive;
7. keep the result a derived Geometry review candidate until the source owner explicitly adopts a successor and downstream consumers explicitly rebind/rerun.

This pattern is structural. It does not grant Geometry source ownership, scene-graph adoption, renderer acceptance, physics/collision authority or gameplay authority.

## Exact Object source / owning boundary

Repository:

`mike-axiom-mir/axm-object-design`

Owning source lane:

Hard-Surface PR **#17 — `Hard Surface: source-own front-latch interface, state guard and capture envelope`**

Exact current source-owner head consumed:

`88bbaebc1071f5a0bb5993e89b86b1137495d903`

Exact source identity:

- asset: `modular-equipment-case-001`;
- source path: `assets/modular-equipment-case-001/source.json`;
- source Git blob: `018e36bb08539f212d2c65e6408566e3540fd983`;
- source SHA-256: `49b1f9ed9865893d6de6f1ec8f069576732df694853fde4e3fcff366de32644a`;
- provenance: self-authored deterministic primitive construction;
- external geometry: false.

The exact generated source mesh is:

- `468` vertices;
- `812` triangles;
- `31` stable rigid component groups.

The 31 groups comprise the exact source-built box and X-cylinder components already used by downstream Object evidence. Geometry does not rename, regroup or reposition them.

## Fresh structural defect / why edge incidence was insufficient

The source builder's box primitive is closed by edge incidence, but its current triangle order is coherently inward: every current box group has negative signed volume under its existing winding.

The source builder's X-cylinder primitive is also closed by edge incidence, but its side-wall and cap fans traverse rim edges in the same direction. Across the exact current source this yields **304 same-direction shared-edge orientation conflicts**. Those cylinder groups therefore do not have one coherent source orientation even though their edge counts are closed.

Across all 31 exact source groups the raw signed-volume calculation is negative. For the coherently oriented box groups that sign directly records inward winding. For the 14 cylinder groups the raw sign is retained only as a descriptive source observation because signed-volume outwardness is not treated as authoritative until shared-edge winding coherence has first been established.

This is the key Geometry correction: **closed edge incidence alone is not enough evidence for outward orientable shell quality**.

## Object Geometry lane opened

Draft PR:

**#33 — `Geometry: derive outward rigid-shell orientation candidate`**

Branch:

`studio/geometry-object-rigid-shell-orientation-001`

Exact base/source-owner head:

`88bbaebc1071f5a0bb5993e89b86b1137495d903`

Exact tested/current Geometry head:

`606d8189a3bf4502141d8038f08d35d421829dde`

Observed PR state after evidence return:

**OPEN / DRAFT / UNMERGED / MERGEABLE**.

Exact compare from source-owner head to Geometry head is four commits ahead / zero behind and changes only four new Geometry-evidence files:

- `.github/workflows/object-geometry-rigid-shell-orientation.yml`;
- `assets/modular-equipment-case-001/rigid-shell-orientation-review-001.json`;
- `tests/test_rigid_shell_orientation.py`;
- `tools/verify_rigid_shell_orientation.py`.

The source JSON, source builder and all source-owned Hard-Surface files remain byte-unchanged in this Geometry lane.

## Derived orientation candidate

The verifier first binds the exact current source and exact expected `468v / 812t / 31-group` identity. It then verifies that group ranges are contiguous/non-empty, group names still match source component identities, every source vertex belongs to exactly one rigid component group and every source triangle remains inside the exact declared group partition.

Per group it requires:

- valid source indices;
- no repeated index inside a triangle;
- no degenerate triangle at `1e-12` area tolerance;
- no boundary edge;
- no edge with incidence greater than two;
- one face-connected shell;
- consistent shared-edge orientability.

A breadth-first parity solve then chooses the minimum structural information needed to make adjacent faces traverse each shared edge in opposite directions. Only after that coherence is established does the verifier use signed volume. If the coherent shell volume is negative, the whole group is flipped once.

Exact retained result:

**`PASS_DERIVED_RIGID_SHELL_OUTWARD_ORIENTATION_CANDIDATE`**

Measured source -> candidate change:

- source shared-edge orientation conflicts: **304 -> 0**;
- coherent positive-volume rigid groups: **0 source-authorized outward candidates -> 31 / 31 derived candidate groups**;
- triangle windings reversed: **508 / 812**;
- source vertex positions changed: **false**;
- triangle source-index membership changed: **false**;
- triangle order changed: **false**;
- group names/ranges changed: **false**;
- source geometry changed: **false**;
- source adopted: **false**;
- Technical-Art scene-graph adopted: **false**;
- Runtime adopted: **false**;
- gameplay/physics collision adopted: **false**.

No vertex is moved, no triangle is added/deleted/reordered, no component is merged/split and no source-owned semantic identity is changed. The candidate is strictly a face-winding structural successor proposal.

## Fail-closed controls

The exact test lane rejects:

1. overlapping rigid-group face ranges;
2. a triangle that cross-references a vertex owned by another source component group;
3. an opened shell / lost closed-manifold incidence;
4. a policy mutation that tries to self-authorize `source_adopted=true`.

The verifier also fails closed on degenerate triangles, invalid indices, non-manifold edges, disconnected face shells, inconsistent orientability, uncovered source vertices, source count drift, source SHA drift and authority-boundary drift.

## Exact-head CI / retained evidence

Dedicated workflow:

**`35275415911 — Object Geometry rigid-shell orientation evidence`**

Exact head:

`606d8189a3bf4502141d8038f08d35d421829dde`

Result:

**SUCCESS**.

Matrix:

- Python `3.11` — SUCCESS;
- Python `3.13` — SUCCESS.

Both jobs compile the structural code, run the complete Object regression suite, rebuild the exact Geometry receipt/candidate and pass the exact truth gate. The Python 3.11 job additionally retains the evidence artifact.

Retained artifact:

- ID: `10519918043`;
- name: `object-geometry-rigid-shell-orientation-606d8189a3bf4502141d8038f08d35d421829dde`;
- size: `9,627 B`;
- GitHub SHA-256: `25fb1433db1cdabf5866b2423a71ea815fe109ccf5423d2d47d0ae978a0a4e56`;
- retained contents include exact receipt, exact source, Geometry policy, exact-head marker and derived candidate OBJ.

No independent local archive rehash is claimed in this activation; the digest above is GitHub-retained artifact metadata.

## Handoffs recorded

- Object Geometry PR #33 exact-head result / non-adoption return: comment `5721320202`.
- Object Hard-Surface PR #17 source-owner handoff: comment `5721321366`.
- Object Technical-Art PR #16 scene-graph consumer handoff: comment `5721322844`.

Hard Surface keeps source/builder/mechanical authority. Geometry does not ask it to silently accept the candidate. If Hard Surface later adopts an outward-winding source successor, that must create a new explicit source identity and downstream consumers must rebind/rerun.

Technical Art PR #16 remains truthful historical evidence for its exact pinned source identity. It does not automatically inherit the Geometry candidate. If Technical Art wants to carry this candidate through UC/Godot, it must explicitly bind this exact Geometry head or a later source-owned successor and rerun its own evidence.

Materials, Runtime, physics/gameplay and Art/QA receive no automatic acceptance from this structural PASS.

## Provenance / rollback

Product rollback anchor is the exact Geometry base/source-owner head:

`88bbaebc1071f5a0bb5993e89b86b1137495d903`

PR #33 is exactly four additive commits above that head and touches only the four Geometry evidence files listed above. Returning the branch to the base restores the exact source-owner product state because no source-owned file was modified.

Coordination rollback target for the immediately previous Geometry specialist status is blob:

`647fdde88a2e073da05e51f6a10d41e5d7ce9a14`

Historical Building PR #18 / UC #194 evidence remains independently addressable and is not superseded by this Object work.

## Four-root gate

- **Truth:** the current source really is closed by edge incidence but not uniformly outward-oriented. The 304 source orientation conflicts, negative raw-volume caveat for incoherent cylinders and exact candidate deltas are recorded separately rather than collapsed into a vague `manifold` claim.
- **Agency / non-domination:** Geometry may propose and verify winding repair, but Hard Surface retains source adoption; Technical Art retains scene-graph/export adoption; Materials retains shading; Runtime retains performance/device behavior; physics/gameplay retains collision meaning.
- **Continuity:** source blob/SHA, source-owner head, Geometry base/head, exact four-file diff, workflow, artifact, handoffs and predecessor status blob are explicit and rollbackable. The source remains untouched.
- **Wisdom before speed:** Geometry repaired one measurable structural defect without retessellating, moving vertices, changing groups or promoting a universal auto-repair from one asset family.

The four AXM roots remain the merge gate.

## Explicit non-claims / next trigger

This activation does **not** establish source adoption, final normals/tangents, production UVs/materials, renderer backface-culling or shading acceptance, arbitrary imported-mesh repair, self-intersection freedom, target-host scene-graph acceptance of the candidate, Runtime/device performance, physics or gameplay collision suitability, manufacturing validity, final Art Direction / Visual QA acceptance, CANON, production readiness, game readiness or Geometry mastery.

Do not modify Object source winding again merely by cadence. The next grounded trigger is either: an explicit source-owner decision to adopt/reject the derived orientation successor; a Technical-Art request to bind/rerun the exact candidate through the scene graph; or a newly measured Geometry defect elsewhere in the constellation. Otherwise re-scan and remain HOLD.
