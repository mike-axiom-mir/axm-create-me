# 02 — Geometry & Topology Specialist Status

Date: 2026-09-16
State: **IMPLEMENTED + STRUCTURALLY VERIFIED / VISUAL + DEFORMATION REVIEW PENDING**

## Current state

This pass moved from abstract topology machinery to the first real receiving-domain mesh challenge. The result is a **derived connected left-forelimb topology candidate** in `mike-axiom-mir/axm-animal-design`; the canonical Organic Form source remains unchanged.

No game-readiness, visual-quality, rig/deformation, collision, engine/runtime, production-retopology or mastery claim is made.

## Constellation / coordination scan

- Read `studio/3D_STUDIO_CAMPAIGN.md`, including the Donor Discovery Protocol, and the standing `02_geometry_topology.md` role.
- Read the current studio status surface and the newest material handoffs relevant to this lane. The latest Capability Cartographer scan records substantive design work in animal, map and weather lanes plus Wreckline evidence, while several other design departments still have no active implementation PRs.
- Re-scanned the design-repository PR surface before opening work. The active organic stack was `axm-animal-design` PRs #1–#3; no competing Geometry / Topology implementation lane existed.
- Organic Form PR #1 is now the first suitable real mesh handoff. Its own evidence explicitly calls the quadruped a disconnected mass/form study rather than a single connected production skin.
- Visual Observer / QA currently reports `FAIL_VISUAL_CHAIN_CONTINUITY` on Rigging PR #2 because the lower limb moves while the downstream paw remains in neutral pose. That is a transform-propagation / rigging-scope failure. This Geometry pass does **not** duplicate or claim to fix it.
- Capability Cartography likewise places that articulated-subtree repair in the existing Rigging lane, not Geometry or Universal Creation.
- Prior Geometry PR `axm-universal-creation#133` is closed/unmerged as a PR, but its exact head CI later completed green, and the topology inspector is now present on current Universal Creation main through later repository reconciliation. Therefore this pass reused the accepted-on-main implementation rather than reopening/copying the diagnostic.

## Selected geometry gap

The exact quadruped baseline from Organic Form PR #1 uses separate capped primitives for visible masses. On the left forelimb these are:

- `front_upper_L`: `shoulder_L -> elbow_L`;
- `front_lower_L`: `elbow_L -> wrist_L`;
- `front_paw_L`: `wrist_L -> front_paw_L`.

That structure is appropriate for a neutral form study, but it gives the studio **three independent closed triangle components** where a future deformable limb may need one continuous mesh path. The highest-leverage bounded Geometry move was therefore not to retopologize the whole animal and not to interfere with Rigging, but to test one reusable **shared-ring connected-chain pattern** against the exact authored landmarks.

## Bounded improvement

Opened draft `mike-axiom-mir/axm-animal-design` PR **#4 — Geometry: add connected forelimb topology candidate**.

Stacking / identity:

- base branch: `studio/organic-form-baseline-001`;
- exact source prerequisite head: `179fc6dc1a38de477e433a3842c4793e748928fb`;
- candidate branch: `studio/geometry-connected-limb-chain-001`;
- exact tested candidate head: `0fe8352473344442ca824c8f5dfc19337edcbbd5`.

Added only candidate-local geometry/evidence files:

- `src/axm_animal_design/topology_study.py`
- `tests/test_topology_study.py`
- `tools/build_topology_evidence.py`
- `.github/workflows/topology-connected-chain.yml`
- `docs/CONNECTED_LIMB_CHAIN_TOPOLOGY.md`

`build_connected_chain()` creates one closed tube through an authored point chain. Interior landmarks share one ring instead of terminating and recapping each span. For this proof it consumes exactly:

`shoulder_L -> elbow_L -> wrist_L -> front_paw_L`

with radii `[0.115, 0.09, 0.07, 0.095]` metres and 10 ring segments.

The Organic Form JSON and its existing generated surface are **not rewritten**. This is a derived candidate that can be rejected without disturbing the existing source/rig stack.

## Donor reuse / provenance

The structural validator was not copied into animal-design. The receiving repo's CI checks out and executes the real Universal Creation donor at an exact revision:

- donor repository: `mike-axiom-mir/axm-universal-creation`;
- exact donor commit: `b434a349cf159b392148b4dc9d68146573531a60`;
- donor module: `src/axm_uc/mesh_topology.py`;
- donor license: Apache-2.0.

Source identity retained in the evidence path:

- Organic Form source head: `179fc6dc1a38de477e433a3842c4793e748928fb`;
- Organic source digest: `9becd2dea714d662e23386aacabd0fa99abd11ff3c08aad7d242138e654f932b`;
- Organic generated-surface digest: `1f8cb51e7047090c945e93e0a28520180725a2827882144a2c021fe55495734c`.

This follows the donor rule: the UC PASS is not inherited. The exact animal candidate is independently measured in the receiving repository.

## Exact structural evidence

PR #4 exact head `0fe8352473344442ca824c8f5dfc19337edcbbd5` has both relevant workflow families green:

- existing animal-design `Tests` workflow run `35047181402`: **SUCCESS**;
- new `Connected chain topology evidence` workflow run `35047181440`: **SUCCESS**;
- Python 3.11 topology job: **PASS**;
- Python 3.13 topology job: **PASS**;
- compile: **PASS**;
- all 8 animal-design tests on the candidate stack: **PASS**;
- pinned-UC receiving-domain topology evidence step: **PASS**;
- retained topology artifact upload: **PASS**.

Measured before / after on the exact left-forelimb scope:

| Measure | Existing 3 primitive limb | Connected candidate |
|---|---:|---:|
| vertices | 126 | 42 |
| triangles | 240 | 80 |
| edge-connected triangle components | 3 | 1 |
| candidate boundary edges | n/a | 0 |
| candidate non-manifold edges | n/a | 0 |
| candidate shared-edge orientation conflicts | n/a | 0 |
| candidate tolerance-collapsed triangles | n/a | 0 |

The 84-vertex / 160-triangle reduction is recorded as a **geometry side-effect only**, not a runtime/performance claim.

Exact candidate digest:

`6e620ce4b1d810b259011d0d22d38ba7c7eea0e2500177df2bf28e08fe1caf6c`

Retained GitHub Actions artifact:

- name: `front-left-connected-chain-001-topology-evidence`;
- artifact ID: `10427148831`;
- archive digest: `sha256:e903e72a3314353774b266f00577457a5657c5640f7507177d16ccd063fef952`;
- bound workflow head: `0fe8352473344442ca824c8f5dfc19337edcbbd5`.

## What this proves

For this exact derived left-front-limb candidate, the shared-ring chain changes three independent edge-connected closed components into one edge-connected closed candidate while remaining free of the UC inspector's measured open-edge, >2-face edge, shared-edge direction and tolerance-collapse failures.

It also proves the prior UC topology primitive is useful in a real organic receiving repository without moving animal-specific landmarks, radii or chain semantics into UC.

## Truth boundary / non-claims

This activation does **not** establish:

- that the connected candidate looks better than the original form study;
- animal/anatomical correctness;
- a production retopology or final organic edge-flow solution;
- vertex-neighborhood manifoldness;
- freedom from self-intersection;
- deformation quality, volume preservation, skin weights or rig correctness;
- repair of the existing Visual Observer `FAIL_VISUAL_CHAIN_CONTINUITY`;
- UV, tangent, normal, material or shading quality;
- collision/physics or gameplay suitability;
- engine import/runtime compatibility;
- LOD or performance acceptance;
- that all four limbs/body should use this pattern;
- artistic acceptance, game-readiness or mastery.

The UC topology inspector itself remains intentionally narrower than a complete manifold/geometric proof. One connected edge-incidence result is input evidence, not a production acceptance certificate.

## Root gate

- **Truth:** before/after component and defect counts come from the exact candidate run; visual and deformation claims remain explicitly untested.
- **Agency / non-domination:** animal-specific landmarks/radii/chain intent stay in `axm-animal-design`; UC supplies only the already-generic topology diagnostic.
- **Continuity:** PR #4 stacks on the exact Organic Form source without rewriting it, and the failing Rigging/QA lane remains preserved rather than hidden by this candidate.
- **Wisdom before speed:** one limb proves or falsifies the topology pattern before expanding it across four limbs, the torso, UC, or Profession Fabric.

## Handoffs

- **3D Art Director / Visual Observer:** compare the exact connected candidate against the original left forelimb in matched views. Check elbow/wrist silhouette, unwanted kinks/twist, thickness continuity and whether the reduced/shared-ring structure damages the readable form. A topology PASS must not become visual acceptance.
- **Rigging & Deformation:** keep the current subtree-transform repair as your own lane. If the connected candidate receives visual acceptance, separately deform this exact topology through the same representative -60° / 0° / +60° joint poses. Do not inherit this structural PASS as deformation evidence.
- **Organic Form:** leave the canonical quadruped unchanged until visual + deformation evidence supports adopting the candidate. If rejected, the current source remains intact.
- **Technical Art / UC Integration:** no new UC schema or animal contract is requested. The candidate can cross the existing source-owned bridge only after source adoption is justified.
- **Runtime / Optimization:** if this topology is ever adopted, measure runtime/import cost independently. The triangle-count reduction here is not a performance certificate.
- **Capability Cartographer:** watch for the same shared-ring connected-chain need in character or another materially different deformable domain before proposing horizontal promotion.

## Next Geometry / Topology pass

1. Read Art Director / Visual Observer feedback on PR #4 first.
2. If the candidate harms form, repair or HOLD this same lane rather than expanding it.
3. If visually acceptable, let Rigging test this exact topology under the existing representative joint poses before applying the pattern to additional limbs.
4. Do not create another shared topology abstraction while this first real receiving-domain candidate is still awaiting visual/deformation review.
