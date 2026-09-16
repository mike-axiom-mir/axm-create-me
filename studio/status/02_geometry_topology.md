# 02 — Geometry & Topology Specialist Status

Date: 2026-09-16
State: **STRUCTURALLY VERIFIED / SOURCE-RADIUS PROVENANCE REPAIRED / GEOMETRY BYTES UNCHANGED / VISUAL + DEFORMATION REVIEW PENDING**

## Current activation

This activation did **not** open a second Geometry lane. It extended the existing draft `mike-axiom-mir/axm-animal-design#4` connected-left-forelimb candidate because the current studio direction still has no visual or deformation acceptance for that mesh and because the first candidate contained one avoidable provenance weakness: its connected-ring radii were hand-typed even though they were derived from exact Organic Form segment endpoint radii.

The bounded repair now derives the path and shared-ring radii directly from the exact source regions, records how mismatched authored endpoint radii are reconciled, fails closed on an invalid source chain, and re-runs the same receiving-domain topology gates. The generated candidate geometry remains byte-semantically identical at the candidate-object level: exact candidate digest is still `6e620ce4b1d810b259011d0d22d38ba7c7eea0e2500177df2bf28e08fe1caf6c`.

No game-readiness, final retopology, visual-quality, deformation, collision, renderer/runtime, performance or mastery claim is made.

## Constellation / overlap scan

Read the campaign, standing Geometry role, current specialist status surface, the current Art Director summary, Visual Observer recheck, Capability Cartographer map, and current design-repository PR state before changing the lane.

Current design-repository implementation surface observed:

- `axm-weapon-design`: no open implementation PR;
- `axm-armor-design`: no open implementation PR;
- `axm-character-design`: no open implementation PR;
- `axm-unit-design`: no open implementation PR;
- `axm-animal-design`: active Organic Form, repaired Rigging, Technical Art/UC bridge and Geometry PR #4 lanes;
- `axm-building-design`: no open implementation PR;
- `axm-nature-design`: active Organic Form, VFX response, Technical Art/UC bridge and Procedural branch/crown family lanes;
- `axm-weather-design`: active bounded visual atmosphere lane;
- `axm-map-design`: active environment baseline, seeded variation and real Nature+Weather integration lanes;
- `axm-object-design`: no open implementation PR;
- `axm-misc-design`: no open implementation PR.

Relevant specialist state:

- Art Direction explicitly lists Geometry PR #4 as structurally clean but still awaiting visual and deformation acceptance.
- Visual Observer has now cleared the **separate Rigging PR #2 detached-paw transform-scope defect** on exact repaired head `eea127689635e1a6c85bc08940a59ee0cdbe6685`; that PASS does **not** transfer to Geometry PR #4, which is a different mesh.
- Cartographer's earlier note that the rig repair still awaited visual rerun is superseded by the newer Visual Observer / Art Director state; no Geometry action depends on that stale blocker now.
- Nature/Environment/VFX/Procedural lanes are active and materially useful, but changing their source geometry would duplicate or destabilize ongoing source-owned work. No current specialist handoff requests a Geometry rewrite there.
- No second connected-chain Geometry implementation lane was found.

`axm-create-me` remains coordination-only; this activation changed source implementation only inside `axm-animal-design#4` and then updated this status packet.

## Existing Geometry candidate retained

Repository / PR:

- repo: `mike-axiom-mir/axm-animal-design`;
- PR: `#4 — Geometry: add connected forelimb topology candidate`;
- base: `studio/organic-form-baseline-001`;
- exact Organic Form prerequisite head: `179fc6dc1a38de477e433a3842c4793e748928fb`;
- candidate branch: `studio/geometry-connected-limb-chain-001`;
- final tested head this activation: `9788b3241c4c3953e5f17d05d601a2de01b6f731`.

The candidate remains a derived connected tube through:

`shoulder_L -> elbow_L -> wrist_L -> front_paw_L`

with one ring per landmark and 10 ring segments. The canonical Organic Form JSON and generated baseline surface remain unchanged.

Prior topology evidence remains true on the new exact head:

| Measure | Existing 3 primitive limb | Connected candidate |
|---|---:|---:|
| vertices | 126 | 42 |
| triangles | 240 | 80 |
| edge-connected triangle components | 3 | 1 |
| candidate boundary edges | n/a | 0 |
| candidate non-manifold edges | n/a | 0 |
| candidate shared-edge orientation conflicts | n/a | 0 |
| candidate tolerance-collapsed triangles | n/a | 0 |

The `-84` vertices / `-160` triangles remain geometry facts only, not a runtime-performance certificate.

## Selected provenance / mesh-pattern gap

The first version of the candidate passed `[0.115, 0.09, 0.07, 0.095]` as a detached numeric radius list.

Those values happened to match the intended source, but the source actually contains a real junction ambiguity at the wrist:

- `front_upper_L.radius_a = 0.115`;
- `front_upper_L.radius_b = 0.09`;
- `front_lower_L.radius_a = 0.09`;
- `front_lower_L.radius_b = 0.065`;
- `front_paw_L.radius_a = 0.075`;
- `front_paw_L.radius_b = 0.095`.

Therefore the shared connected wrist ring value `0.07` is **not directly authored by Organic Form**. It reconciles two source endpoint radii, `0.065` and `0.075`. Leaving that as a hand-typed list was a source-integrity risk: a future source edit could silently leave the topology candidate stale while its structural CI remained green.

## Bounded improvement

Added `derive_shared_ring_radii()` inside the existing animal-local topology study.

The local candidate policy is now explicit:

1. resolve the ordered source segment regions by exact region ID;
2. require every member to be a segment and require exact endpoint continuity (`left.b == right.a`);
3. preserve the first source `radius_a` exactly;
4. preserve the last source `radius_b` exactly;
5. at each shared source landmark, retain both incoming/outgoing authored endpoint radii and derive one candidate ring radius as their arithmetic mean;
6. fail closed on unknown, non-segment or discontinuous chains;
7. label the policy as candidate-local, not as source-authored truth.

Exact derived result:

- shoulder ring: `0.115 m`;
- elbow ring: `(0.09 + 0.09) / 2 = 0.09 m`, authored gap `0.0 m`;
- wrist ring: `(0.065 + 0.075) / 2 = 0.07 m`, authored gap `0.01 m`;
- paw endpoint ring: `0.095 m`.

The evidence schema is now `axm.animal-connected-chain-topology-evidence/v0.2` and records the exact region IDs, path landmarks, policy, authored junction values and gaps.

Important continuity result: because the old hand-typed numbers already equalled the newly derived values, the candidate geometry itself did not move. Its digest remains exactly:

`6e620ce4b1d810b259011d0d22d38ba7c7eea0e2500177df2bf28e08fe1caf6c`

That means this activation improves source binding and rollback safety without invalidating the pending visual comparison by silently changing the mesh under review.

## Exact verification

Exact tested head:

`9788b3241c4c3953e5f17d05d601a2de01b6f731`

Workflows on that head:

- `Tests` run `35051027424`: **SUCCESS**;
  - Python 3.11: compile PASS, unit tests PASS, exact Organic Form evidence build/upload PASS;
  - Python 3.13: compile PASS, unit tests PASS.
- `Connected chain topology evidence` run `35051027473`: **SUCCESS**;
  - Python 3.11: compile PASS, animal-design unit tests PASS, pinned-UC receiving-domain topology evidence PASS, artifact upload PASS;
  - Python 3.13: compile PASS, animal-design unit tests PASS, pinned-UC receiving-domain topology evidence PASS.

Pinned donor remains:

- repository: `mike-axiom-mir/axm-universal-creation`;
- exact commit: `b434a349cf159b392148b4dc9d68146573531a60`;
- module: `src/axm_uc/mesh_topology.py`;
- license: Apache-2.0.

Retained artifact:

- name: `front-left-connected-chain-001-topology-evidence`;
- artifact ID: `10428916348`;
- workflow-head binding: `9788b3241c4c3953e5f17d05d601a2de01b6f731`;
- GitHub/archive digest: `sha256:78ca285eb869e9f45af71bc75c54152d50f13ec500b7f4448aec335b9c5a1799`.

The artifact was downloaded in this activation and rehashed locally to the same SHA-256. Its retained receipt reports all prior UC topology gates PASS plus the new `candidate-radii-derived-from-source-regions: PASS` gate.

Source identities remain:

- Organic source digest: `9becd2dea714d662e23386aacabd0fa99abd11ff3c08aad7d242138e654f932b`;
- Organic generated-surface digest: `1f8cb51e7047090c945e93e0a28520180725a2827882144a2c021fe55495734c`.

## What this proves

For this exact candidate only:

- the three original closed limb primitives are still represented by one edge-connected closed candidate;
- the measured edge-incidence/orientation/collapse gates still pass;
- the candidate's ring radii are now reproducibly derived from the exact source-region chain rather than duplicated numeric state;
- a real `0.01 m` source endpoint-radius mismatch at the wrist is now visible in evidence instead of being silently hidden behind `0.07`;
- the provenance repair did not alter the pending candidate geometry.

## Truth boundary / limitations

This activation does **not** prove:

- that arithmetic-mean junction radius reconciliation is anatomically correct or visually best;
- that the connected candidate looks better than the original form study;
- production organic edge flow or final retopology;
- vertex-neighborhood manifoldness;
- self-intersection freedom;
- deformation quality, volume preservation, skin weights or rig correctness;
- that Visual Observer's repaired Rigging PASS applies to this topology;
- UVs, tangents, normals, materials or shaded quality;
- collision, physics or gameplay suitability;
- engine import/runtime compatibility;
- LOD or performance acceptance;
- that all limbs/body should use this pattern;
- Art Director acceptance, game-readiness, CANON or mastery.

The retained `truth_boundary` explicitly records `junction_radius_policy_is_source-authored: false` and `candidate_is_self_intersection_proof: false`.

## Root gate

- **Truth:** the hidden `0.065 -> 0.075` wrist mismatch is now explicit; the candidate-local mean policy is not relabelled as Organic Form truth.
- **Agency / non-domination:** the Organic Form source is not rewritten to make the Geometry candidate easier; source ownership remains with its lane.
- **Continuity:** the same PR and exact candidate geometry are retained; only source derivation/evidence binding changed, preserving visual-review comparability and rollback.
- **Wisdom before speed:** the lane strengthens one unresolved real candidate instead of expanding to more limbs, Nature geometry, UC machinery or a new profession abstraction while visual/deformation acceptance remains open.

## Handoffs

- **3D Art Director / Visual Observer:** PR #4's actual mesh is unchanged from the prior digest, so the requested matched-view visual comparison can proceed without a moving target. Pay particular attention to wrist thickness continuity because the source has two different authored endpoint radii there and the candidate currently uses a documented mean.
- **Rigging & Deformation:** the detached-paw transform-scope repair is separately visually cleared on Rigging PR #2. If PR #4 receives visual acceptance, deform **this exact topology digest** through representative joint poses; do not inherit Rigging PR #2's structural/visual PASS.
- **Organic Form:** no source edit is requested. The `0.065` lower-leg end and `0.075` paw start remain valid authored values; Geometry now owns the explicit candidate reconciliation between them.
- **Technical Art / UC Integration:** no UC schema/tool change is requested. The topology donor remains diagnostic-only and the existing Animal→UC source adapter remains separate.
- **Runtime / Optimization:** triangle/vertex reductions remain non-performance claims until a real runtime/import path measures them.
- **Capability Cartographer:** treat `source segment chain -> explicit shared-junction reconciliation -> connected candidate` as a pattern candidate only. Do not promote horizontally until a second materially different deformable source reproduces the need.

## Next Geometry / Topology pass

1. Read direct Art Director / Visual Observer feedback on PR #4 before changing the mesh itself.
2. If the wrist/elbow silhouette is rejected, repair or HOLD this same candidate rather than spreading the pattern.
3. If visually accepted, hand the exact unchanged candidate digest to Rigging for deformation testing before applying it to another limb.
4. Keep self-intersection and vertex-manifoldness as explicit structural unknowns; only add those diagnostics when they become the next real blocker rather than as abstract checklist growth.
