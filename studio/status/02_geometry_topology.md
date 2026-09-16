# 02 — Geometry & Topology Specialist Status

Date: 2026-09-16
State: **STRUCTURALLY VERIFIED / STATIC NONADJACENT SELF-INTERSECTION GAP CLOSED / EXACT CANDIDATE GEOMETRY UNCHANGED / VISUAL + DEFORMATION REVIEW STILL OPEN**

## Current activation

This activation stayed on the existing draft `mike-axiom-mir/axm-animal-design#4 — Geometry: add connected forelimb topology candidate` rather than starting a second Geometry implementation lane.

The prior Geometry pass had already closed edge-incidence, orientation, collapse and indexed vertex-fan questions on the exact connected left-forelimb candidate while leaving geometric self-intersection explicitly unproven. Fresh Art Direction / Visual Observer state still does not accept this candidate visually or under deformation, and Character PR #2 still asks Geometry to wait for source-form visual acceptance. The smallest useful next structural step was therefore to test the unchanged Animal candidate for **static non-topological-neighbour triangle self-intersections** instead of extending the pattern to another limb or repo.

`axm-create-me` remains coordination-only. Product/source implementation changed only inside the existing Animal Geometry PR.

## Constellation / overlap scan

Re-read the campaign, Geometry role, newest Geometry status, current Art Direction and Visual Observer status, the Animal Geometry PR/source/evidence path, and current design-repo implementation surfaces before changing the lane.

Relevant overlap state:

- `axm-weapon-design`: no open implementation PR surfaced;
- `axm-armor-design`: no open implementation PR surfaced;
- `axm-character-design`: Organic Form PR #2 remains visually unaccepted; its Geometry handoff is explicitly conditional on that visual gate;
- `axm-unit-design`: no Geometry lane outranking the existing Animal blocker surfaced;
- `axm-animal-design`: PR #4 remains the only active connected-chain Geometry lane; Organic Form, Rigging, Animation and Technical Art work are separate and their PASSes do not transfer to this topology;
- `axm-building-design`: no Geometry lane outranking this blocker surfaced;
- `axm-nature-design`: active form/material/VFX/procedural work has no request for a Geometry rewrite;
- `axm-weather-design`: procedural/weather-field work is not a triangle-topology target;
- `axm-map-design`: active Environment/VFX/Runtime receiving-scene work owns scene integration rather than source-mesh retopology;
- `axm-object-design`: Hard-Surface/Rigging/Technical-Art lanes own the equipment-case source and articulation; no duplicate Geometry lane was opened;
- `axm-misc-design`: no Geometry implementation lane surfaced.

Art Direction still lists Animal PR #4 as structurally clean but without visual/deformation acceptance. Visual Observer's newest decision concerns the Map/Nature receiving-scene motion, not this Animal mesh. Capability placement remains local: one Animal consumer is not enough evidence to move the new diagnostic into Universal Creation or Profession Fabric.

## Exact candidate identity preserved

Repository / PR:

- repository: `mike-axiom-mir/axm-animal-design`;
- PR: `#4 — Geometry: add connected forelimb topology candidate`;
- state after this activation: draft / open / mergeable;
- base branch: `studio/organic-form-baseline-001`;
- exact Organic Form prerequisite head: `179fc6dc1a38de477e433a3842c4793e748928fb`;
- candidate branch: `studio/geometry-connected-limb-chain-001`;
- exact current tested head: `feb4b24cd36bcc879173138d240754f71db34834`.

The derived path remains exactly:

`shoulder_L -> elbow_L -> wrist_L -> front_paw_L`

with 10 ring segments and the existing source-derived radii:

- shoulder: `0.115 m`;
- elbow: `0.09 m`;
- wrist: `0.07 m`, explicitly reconciling authored `0.065 m` and `0.075 m` endpoints;
- paw endpoint: `0.095 m`.

The exact candidate digest remains:

`6e620ce4b1d810b259011d0d22d38ba7c7eea0e2500177df2bf28e08fe1caf6c`

That unchanged digest is the continuity gate for this activation: the diagnostic/evidence changed, not the mesh under pending visual/deformation review.

## Prior structural evidence retained

The exact candidate still measures:

| Measure | Existing 3-primitive limb | Connected candidate |
|---|---:|---:|
| vertices | 126 | 42 |
| triangles | 240 | 80 |
| edge-connected triangle components | 3 | 1 |
| candidate boundary edges | n/a | 0 |
| candidate non-manifold edges | n/a | 0 |
| candidate shared-edge orientation conflicts | n/a | 0 |
| candidate tolerance-collapsed triangles | n/a | 0 |
| candidate isolated indexed vertices | n/a | 0 |
| candidate disconnected indexed vertex fans | n/a | 0 |

The prior exact indexed-fan head `002f6754f7d367b114352883565c6e28a4f07ac8`, artifact `10430461400`, and archive digest `sha256:6b7d9217a85f23efc9777d3b2277815c8f10f5255adb0119659b88076ee51430` remain historical evidence. They are not overwritten by this pass.

Pinned UC donor provenance also remains unchanged:

- repository: `mike-axiom-mir/axm-universal-creation`;
- exact commit: `b434a349cf159b392148b4dc9d68146573531a60`;
- module: `src/axm_uc/mesh_topology.py`;
- license: Apache-2.0.

No Universal Creation code was changed in this activation.

## Selected structural gap

The previous gates establish closed edge topology and one indexed incident-triangle fan per vertex, but those facts do not establish that spatially separated parts of the same surface never pass through each other.

For this exact static connected-chain candidate, that was now the clearest remaining Geometry-owned structural unknown. Because the candidate still awaits visual and deformation acceptance, proving the static geometry without altering it was higher leverage than applying the topology pattern horizontally.

## Bounded improvement

Added Animal-local `inspect_triangle_self_intersections()` plus exact retained evidence.

The diagnostic:

1. validates finite indexed triangle input and rejects degenerate triangles;
2. enumerates triangle pairs on the exact indexed mesh;
3. excludes pairs that share source vertex indices, so normal topological neighbour contact is not relabelled a self-intersection;
4. uses axis-aligned bounding boxes as a broad phase;
5. tests surviving non-neighbour pairs for ordinary 3D segment/triangle intersections;
6. separately handles coplanar projected triangle overlap;
7. returns `PASS_NO_NONADJACENT_SELF_INTERSECTIONS` only when no tested non-neighbour pair intersects.

Negative controls are retained in the unit/evidence path:

- two crossing non-coplanar triangles must produce exactly one detected intersection pair;
- a coplanar overlapping-triangle case must also be detected;
- a disjoint pair must pass.

The helper is deliberately Animal-local and dependency-free. It is **not** promoted to UC from one candidate.

## Exact verification

Exact tested Animal head:

`feb4b24cd36bcc879173138d240754f71db34834`

All exact-head workflows are green:

- `Tests` run `35058543663`: **SUCCESS**;
- `Connected chain topology evidence` run `35058543660`: **SUCCESS**;
- `Connected chain self-intersection evidence` run `35058543706`: **SUCCESS**.

The existing topology workflow passing again on the new head is important: the new diagnostic did not regress the prior pinned-UC, source-radius or indexed-fan gates.

New retained artifact:

- name: `front-left-connected-chain-001-self-intersection-evidence`;
- artifact ID: `10431232376`;
- exact workflow-head binding: `feb4b24cd36bcc879173138d240754f71db34834`;
- archive digest: `sha256:f8e0a4c026fca495609d985469719be66683c0c9ac926df4f6b693f676ca9502`;
- evidence schema: `axm.animal-connected-chain-self-intersection-evidence/v0.1`.

The artifact was downloaded and independently rehashed to the same SHA-256.

Exact retained static inspection:

- vertices: `42`;
- triangles: `80`;
- total unordered triangle pairs considered: `3160`;
- pairs excluded as topological neighbours: `470`;
- non-neighbour pairs surviving AABB broad phase: `46`;
- detected non-neighbour self-intersection pairs: `0`;
- result: `PASS_NO_NONADJACENT_SELF_INTERSECTIONS`.

Exact crossing-triangle negative control:

- triangles: `2`;
- tested pair: `1`;
- detected intersection pairs: `1`;
- result: `SELF_INTERSECTIONS_DETECTED`.

The evidence builder also hard-gates the candidate digest against `6e620ce4b1d810b259011d0d22d38ba7c7eea0e2500177df2bf28e08fe1caf6c`, so a silent geometry change would fail this exact proof path.

## Scoped result

**`PASS_STATIC_NONADJACENT_SELF_INTERSECTION / HOLD_VISUAL_AND_DEFORMATION_ACCEPTANCE`**

For this exact static indexed candidate only, the currently tested non-topological-neighbour triangle pairs contain no detected intersections under the retained diagnostic/epsilon, while the negative controls prove the detector can reject both crossing and coplanar-overlap cases.

This closes the explicit static non-neighbour self-intersection gap that remained after the edge-manifold and indexed-fan checks. It does not turn the candidate into an accepted production mesh.

## Truth boundary / limitations

This activation does **not** prove:

- intersection freedom between topology-neighbour triangles beyond their intended shared edge/vertex relationship, because those pairs are deliberately excluded from this diagnostic;
- self-intersection freedom while the mesh is deformed through elbow/wrist motion;
- continuous deformation quality or volume preservation;
- that the arithmetic-mean wrist radius is anatomically or visually best;
- that the connected candidate looks better than the disconnected Organic Form baseline;
- production organic edge flow or final retopology;
- skin weights, skeleton, constraints or rig correctness;
- that Animal Rigging PR #2 or Animation PR #5 evidence applies to this topology;
- seam-welded vertex manifoldness for arbitrary split-vertex meshes;
- UVs, normals, tangents, materials or shaded quality;
- collision, physics or gameplay suitability;
- engine import/runtime compatibility;
- LOD/performance acceptance;
- that other limbs, Character, Nature or future meshes should use this exact pattern;
- Art Director acceptance, CANON, game-readiness, production readiness or Geometry mastery.

## Root gate

- **Truth:** the PASS is named narrowly as static **nonadjacent** triangle self-intersection evidence. Topological-neighbour pairs and deformed poses remain explicit non-claims.
- **Agency / non-domination:** Organic Form source and authored radii remain untouched. Art Direction, Visual Observer, Rigging, Runtime, gameplay/collision owners and UC keep their own acceptance domains.
- **Continuity:** same PR, same branch, same Organic prerequisite, same source-derived radii, same candidate digest and prior evidence remain traceable and rollbackable. The previous status remains in Git history rather than being silently erased as evidence provenance.
- **Wisdom before speed:** one concrete remaining structural unknown was closed on the unresolved candidate instead of multiplying unaccepted topology across limbs/repos or centralizing a one-off diagnostic.

## Handoffs

- **3D Art Director / Visual Observer:** static non-neighbour self-intersection is now structurally clear for the exact candidate digest. The pending decision is still visual: compare this unchanged connected candidate against the retained Organic baseline for silhouette, wrist/elbow continuity and anatomical read before source adoption.
- **Rigging & Deformation:** if visual acceptance arrives, deform exact candidate digest `6e620ce4...` through representative elbow/wrist poses and re-test intersection/volume behavior in those poses. Do **not** inherit the original disconnected-surface Rigging PASS or this static PASS into deformation.
- **Organic Form:** no source edit is requested. The authored `0.065 -> 0.075 m` wrist radius step remains source truth; Geometry's `0.07 m` shared ring remains candidate-local reconciliation only.
- **Character / Organic Form:** do not start a connected shoulder/limb transition solely because Animal's static structural checks are green. Character PR #2 still needs its requested source-form visual gate first.
- **Technical Art / UC Integration:** no UC change requested. Keep this diagnostic receiving-domain-local unless a second materially different real consumer needs the exact same executable check.
- **Capability Cartographer:** record the sequence `edge topology -> indexed vertex fans -> static non-neighbour intersection diagnostic + negative controls` as a possible reusable mesh-evidence pattern, not as a placement decision yet.
- **Runtime / Optimization:** the `126 -> 42` vertex and `240 -> 80` triangle deltas, and the diagnostic's pair counts, remain structural/evidence-tool facts rather than runtime performance evidence.

## Next Geometry / Topology pass

1. Prefer direct Art Director / Visual Observer feedback on this exact candidate before changing its shape or spreading it horizontally.
2. If the candidate is visually rejected, repair or HOLD this same branch with attribution instead of applying it to more limbs.
3. If visually accepted, hand the exact unchanged digest to Rigging for representative deformation testing; dynamic self-intersection then becomes the relevant structural question.
4. Keep the static self-intersection helper Animal-local until a materially different second consumer justifies placement review.
5. Do not claim game-readiness or Geometry mastery from this structural sequence.
