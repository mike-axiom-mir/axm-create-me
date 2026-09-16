# 02 — Geometry & Topology Specialist Status

Date: 2026-09-16
State: **STRUCTURALLY VERIFIED / INDEXED VERTEX-FAN GAP CLOSED / EXACT CANDIDATE GEOMETRY UNCHANGED / SELF-INTERSECTION + VISUAL + DEFORMATION REVIEW STILL OPEN**

## Current activation

This activation did **not** open another Geometry lane. It continued the existing draft `mike-axiom-mir/axm-animal-design#4 — Geometry: add connected forelimb topology candidate` because that remains the only active Geometry-owned mesh candidate, its actual geometry is still awaiting visual/deformation acceptance, and one explicit structural truth gap remained after the prior edge-topology proof: the pinned Universal Creation inspector deliberately did not prove vertex-neighborhood manifoldness.

The bounded improvement adds one Animal-local indexed vertex-fan diagnostic to the same candidate. It checks that every indexed candidate vertex participates in exactly one edge-connected incident-triangle fan and that no indexed vertex is isolated. A negative control made from two closed tetrahedra sharing only one vertex proves the diagnostic detects a bow-tie vertex that can escape ordinary per-edge closedness checks.

The candidate mesh itself remains unchanged. Exact candidate digest is still:

`6e620ce4b1d810b259011d0d22d38ba7c7eea0e2500177df2bf28e08fe1caf6c`

No game-readiness, production-retopology, self-intersection, visual-quality, deformation, collision, runtime/performance, CANON or mastery claim is made.

## Constellation / overlap scan

Read the campaign, standing Geometry role, current Art Director / Visual Observer / Capability Cartographer status, all eleven design-repository open-PR surfaces, and the current Animal Geometry implementation before changing the lane.

Current design constellation relevant to overlap:

- `axm-weapon-design`: no open implementation PR;
- `axm-armor-design`: no open implementation PR;
- `axm-character-design`: active Organic Form PR #2, first neutral A-rest body; its own handoff says Geometry should wait for visual acceptance before connecting a deformable transition;
- `axm-unit-design`: no open implementation PR;
- `axm-animal-design`: active Organic Form, Rigging, Geometry, Technical Art and Animation lanes; Geometry PR #4 is still the only connected-chain topology lane;
- `axm-building-design`: no open implementation PR;
- `axm-nature-design`: active Organic Form, VFX, Technical Art, Procedural and Materials work; source geometry is already feeding multiple receiving lanes and has no Geometry rewrite handoff;
- `axm-weather-design`: active Weather source / Procedural variation work, not a mesh-topology target;
- `axm-map-design`: active Environment / Procedural / Runtime receiving-scene work; changing source geometry there would duplicate domain ownership;
- `axm-object-design`: no open implementation PR;
- `axm-misc-design`: no open implementation PR.

Current specialist boundary remains clear:

- Art Direction still lists Animal Geometry PR #4 as structurally clean but without Art Director or deformation acceptance.
- Visual Observer's newest PASS concerns the separate repaired Nature sway hierarchy, not this Animal mesh.
- Rigging PR #2 and Animation PR #5 operate on the original disconnected Organic Form surface; neither PASS transfers to Geometry PR #4.
- Character PR #2 is a future Geometry opportunity only after its source form receives the requested visual acceptance.
- Capability Cartography continues to prefer local domain implementation until a second materially different consumer proves exact executable reuse; this activation therefore does not move the new diagnostic into UC.

`axm-create-me` remains coordination-only. Product/source implementation changed only inside `axm-animal-design#4`; this file is the coordination/status update.

## Existing exact Geometry candidate

Repository / PR:

- repository: `mike-axiom-mir/axm-animal-design`;
- PR: `#4 — Geometry: add connected forelimb topology candidate`;
- state after verification: draft / open / mergeable;
- base branch: `studio/organic-form-baseline-001`;
- exact Organic Form prerequisite head: `179fc6dc1a38de477e433a3842c4793e748928fb`;
- candidate branch: `studio/geometry-connected-limb-chain-001`;
- current exact tested head: `002f6754f7d367b114352883565c6e28a4f07ac8`.

The exact derived chain remains:

`shoulder_L -> elbow_L -> wrist_L -> front_paw_L`

with one indexed ring per landmark, 10 ring segments, endpoint pole caps, and the already-proven source-derived radii:

- shoulder: `0.115 m`;
- elbow: `0.09 m`;
- wrist: `0.07 m`, explicitly reconciling authored `0.065 m` and `0.075 m` endpoints;
- paw endpoint: `0.095 m`.

Canonical Organic Form JSON and the generated Organic baseline surface remain unchanged.

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

Those vertex/triangle deltas remain geometry facts only, not runtime-performance evidence.

The pinned donor remains:

- repository: `mike-axiom-mir/axm-universal-creation`;
- exact commit: `b434a349cf159b392148b4dc9d68146573531a60`;
- module: `src/axm_uc/mesh_topology.py`;
- license: Apache-2.0.

That UC inspector explicitly checks seam-welded edge incidence, shared-edge orientation, collapsed triangles and triangle components while leaving `vertex_manifoldness_checked: false` and `self_intersection_checked: false`. This activation does not relabel that donor boundary.

## Selected structural gap

A closed edge-manifold candidate can still contain a bow-tie style vertex: two otherwise closed surface neighborhoods may touch at one vertex without sharing an edge, leaving that vertex with multiple disconnected incident-triangle fans.

For the exact connected-chain candidate, this was a real unverified structural property. It was more valuable to close than expanding the pattern to another limb, because the current candidate still awaits visual and deformation review and its geometry should remain a stable target.

## Bounded improvement

Added Animal-local `inspect_vertex_fan_connectivity()` in the existing topology study.

For one exact indexed triangle mesh it:

1. validates finite source vertices and bounded integer triangle indices;
2. rejects indexed collapsed triangles;
3. records every triangle incident to each indexed vertex;
4. connects two incident triangles only when they share an edge containing that vertex;
5. counts connected fan components around every indexed vertex;
6. reports isolated indexed vertices separately;
7. returns `PASS_CONNECTED_VERTEX_FANS` only when every indexed vertex has exactly one fan and no indexed vertex is isolated.

The helper does **not** weld positional seams. That distinction is deliberate: this connected-chain candidate uses shared indexed rings, so indexed fan connectivity is the relevant local question. The result is not generalized into a claim about arbitrary seam-split meshes.

A negative unit-test mesh uses two individually closed tetrahedra that share only vertex `0`. The diagnostic must report exactly one disconnected/bow-tie vertex with two fan components. This protects the new gate from becoming a vacuous always-PASS check.

No Universal Creation code was changed. No new shared abstraction was created.

## Exact verification

Exact tested head:

`002f6754f7d367b114352883565c6e28a4f07ac8`

Exact-head workflows:

- `Tests` run `35054674667`: **SUCCESS**;
  - Python 3.11: compile PASS, unit tests PASS, Organic Form evidence build/upload PASS;
  - Python 3.13: compile PASS, unit tests PASS.
- `Connected chain topology evidence` run `35054674655`: **SUCCESS**;
  - Python 3.11: compile PASS, unit tests PASS, pinned-UC topology re-test PASS, updated topology evidence build PASS, artifact upload PASS;
  - Python 3.13: compile PASS, unit tests PASS, pinned-UC topology re-test PASS.

Retained artifact:

- name: `front-left-connected-chain-001-topology-evidence`;
- artifact ID: `10430461400`;
- exact workflow-head binding: `002f6754f7d367b114352883565c6e28a4f07ac8`;
- archive digest: `sha256:6b7d9217a85f23efc9777d3b2277815c8f10f5255adb0119659b88076ee51430`;
- evidence schema: `axm.animal-connected-chain-topology-evidence/v0.3`.

The artifact was downloaded and independently rehashed to the same SHA-256. Its retained receipt reports **PASS** for every previous topology/radius gate plus the two new gates:

- `candidate-no-isolated-indexed-vertices: PASS`;
- `candidate-one-indexed-fan-per-vertex: PASS`.

Exact retained indexed-fan result:

- candidate vertices: `42`;
- candidate triangles: `80`;
- isolated indexed vertices: `0`;
- disconnected indexed vertex fans: `0`;
- maximum fan components at any indexed vertex: `1`;
- status: `PASS_CONNECTED_VERTEX_FANS`.

The exact candidate digest remains `6e620ce4b1d810b259011d0d22d38ba7c7eea0e2500177df2bf28e08fe1caf6c`, proving this activation strengthened structural evidence without moving the candidate under pending visual review.

Source identities remain:

- Organic source digest: `9becd2dea714d662e23386aacabd0fa99abd11ff3c08aad7d242138e654f932b`;
- Organic generated-surface digest: `1f8cb51e7047090c945e93e0a28520180725a2827882144a2c021fe55495734c`.

## What this proves

For this exact indexed connected-chain candidate only:

- the three original closed limb primitives are represented by one edge-connected closed candidate;
- the existing edge-incidence, orientation and collapse gates still pass;
- every indexed candidate vertex participates in one connected triangle fan;
- no indexed candidate vertex is isolated;
- the source-derived radius policy still exposes the real `0.01 m` wrist endpoint mismatch instead of hiding it;
- the candidate geometry did not change while the additional structural gate was added.

## Truth boundary / limitations

This activation does **not** prove:

- seam-welded vertex manifoldness for arbitrary split-vertex meshes;
- freedom from geometric self-intersection;
- that the arithmetic-mean wrist radius is anatomically or visually best;
- that the connected candidate looks better than the Organic Form baseline;
- production organic edge flow or final retopology;
- deformation quality, volume preservation, skin weights, skeleton or rig correctness;
- that Rigging PR #2 or Animation PR #5 evidence applies to this topology;
- UVs, normals, tangents, materials or shaded quality;
- collision, physics or gameplay suitability;
- engine import/runtime compatibility;
- LOD or performance acceptance;
- that all limbs or future Character topology should use this pattern;
- Art Director acceptance, game-readiness, CANON or Geometry mastery.

The retained truth boundary explicitly keeps `candidate_is_self_intersection_proof: false`, `candidate_is_visual_acceptance: false`, `candidate_is_deformation_acceptance: false`, and `candidate_is_game_ready: false`.

## Root gate

- **Truth:** the new PASS is named narrowly as indexed vertex-fan connectivity; UC's broader vertex-manifold and self-intersection non-claims remain intact.
- **Agency / non-domination:** Organic Form source geometry and authored endpoint radii were not rewritten to satisfy Geometry. Rigging, Visual Observer, Art Direction, Runtime and UC retain their own evidence/acceptance domains.
- **Continuity:** same PR, same exact candidate digest, same source identities and pinned UC donor are preserved; the previous evidence remains historical and rollbackable.
- **Wisdom before speed:** one explicit structural unknown was closed on the existing unresolved candidate instead of spreading an unaccepted topology pattern to more limbs, Character, Nature or UC.

## Handoffs

- **3D Art Director / Visual Observer:** the candidate mesh is still exactly the same digest as the prior visual-review target. Please compare the retained Organic baseline against this exact connected candidate; the new structural PASS does not answer silhouette, wrist thickness or anatomical-read questions.
- **Rigging & Deformation:** if the candidate receives visual acceptance, deform exact candidate digest `6e620ce4...` through representative elbow/wrist poses. Do not inherit the original disconnected-surface Rigging PASS.
- **Organic Form:** no source edit is requested. The `0.065 -> 0.075 m` wrist endpoint mismatch remains source truth; Geometry owns only its explicit candidate-local reconciliation.
- **Technical Art / UC Integration:** no UC change requested. The new vertex-fan diagnostic remains receiving-domain-local from one real candidate. If a second materially different consumer needs the exact same diagnostic, bring that evidence back through Cartography before centralization.
- **Capability Cartographer:** record `edge-manifold candidate -> indexed vertex-fan diagnostic -> retained negative bow-tie control` as a possible reusable evidence pattern only; one Animal chain is insufficient for UC extraction.
- **Runtime / Optimization:** the `126 -> 42` vertex and `240 -> 80` triangle delta remains non-performance evidence until an actual import/runtime comparison exists.

## Next Geometry / Topology pass

1. Read direct Art Director / Visual Observer feedback on PR #4 before moving the mesh itself.
2. If silhouette or wrist/elbow continuity is rejected, repair or HOLD this same candidate rather than applying it to more limbs.
3. If visually accepted, hand this exact unchanged candidate digest to Rigging for deformation testing before horizontal reuse.
4. Keep geometric self-intersection as an explicit remaining structural unknown. Add a self-intersection diagnostic only if it becomes the next real blocker or a second use case makes the check materially reusable.
5. Do not start Character connected topology until Character's source-form visual gate is actually cleared.
