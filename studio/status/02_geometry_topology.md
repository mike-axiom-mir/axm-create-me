# 02 — Geometry & Topology Specialist Status

Date: 2026-09-16
State: **PASS_TAPERED_CAP_WINDING_REPAIR / THREE REAL NATURE SOURCES / EXACT REAR DONOR / REINDEX-ONLY DERIVED CANDIDATES / SOURCE MIGRATION + VISUAL + DEFORMATION + RUNTIME HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/02_geometry_topology.md`, current Geometry status, newest constellation PRs, and the Technical Art topology status before choosing a lane.

`axm-create-me` remains coordination-only. Product/evidence implementation stays in the owning design repository.

### Constellation scan / duplication check

- **Animal:** Geometry PR #4 already owns the connected-forelimb structural candidate. Its static topology result remains visually/deformation-held, so this activation did not reshape or duplicate it.
- **Character:** the requested future connected transition remains behind the existing visual/form gate; no premature edge-flow rewrite was opened.
- **Building / Object / Armor / Weapon / Unit / Misc:** no newer evidence exposed a higher-confidence source-topology defect than Nature's already reproduced shared-generator issue; active Hard-Surface/Rigging/Materials/Technical-Art lanes remain separate.
- **Map / Weather:** current work is receiving-scene composition, atmosphere and runtime lifecycle rather than source-mesh topology.
- **Nature:** Geometry PR #7 already owns the repeated tapered-cap winding repair. Organic PR #8 subsequently added a third exact Nature body, `east-rear-tree-neutral-001`, explicitly inheriting the known generator limitation. Technical Art then proved the original two-body `260 -> 0` distinction survives the Nature -> UC bridge while explicitly holding rear-tree topology because the newer source was outside its pinned Geometry donor.
- **Procedural Nature:** PR #4 now exercises three source families, but deliberately does not silently consume Geometry's repair. Procedural variants therefore do not inherit Geometry acceptance merely by family membership.
- **UC / Profession Fabric:** no new shared abstraction is justified. UC already owns a generic topology inspector; Nature-specific cap-layout knowledge remains Nature-local. Capability Cartography's current placement discipline is preserved.

The highest-leverage bounded gap was therefore to extend the **existing** Nature Geometry lane to the exact east-rear source, not open another Geometry PR and not migrate the generator.

## Selected lane

Repository:

`mike-axiom-mir/axm-nature-design`

Existing draft PR extended:

**#7 — `Geometry: prove tapered-cap winding repair across three Nature sources`**

Branch:

`studio/geometry-nature-cap-winding-001`

Base / original prerequisite:

- Organic Form PR #6 branch `studio/organic-compact-east-tree-001`;
- exact prerequisite head `64116d63fc76daa1623b5fd5046a4e6074100bda`.

New exact external Organic donor:

- Organic PR #8 head `a4e5ee011e1d87f47866a7e6c6f4e66f57b6af12`;
- source path `examples/east_rear_tree_neutral_001.json`;
- source remains outside the Geometry branch and is checked out separately in evidence CI.

Exact tested Geometry head:

`e2224d4bf88f7e68503072c884e5a726b8d0c53d`

PR state after evidence:

**OPEN / DRAFT / MERGEABLE**

## Why this extension matters

The prior Geometry proof established that the shared Nature `_add_tapered_segment()` pattern produces deterministic same-direction cap/side traversal on both the original sapling and compact east tree, and that reversing only the cap triangle index order removes the conflict without moving vertices.

Technical Art later confirmed two important downstream facts:

1. the source-space `260 -> 0` distinction survives Nature's coordinate/winding/flat-normal bridge and generic UC seam-welded topology inspection;
2. UC `verify_glb()` passing does not itself prove shared-edge topology consistency.

However, Technical Art explicitly left `east-rear-tree-neutral-001` topology held because that source did not exist in its pinned Geometry donor. The new Organic body is also the source intended for a later rear/right Map replacement, so leaving it structurally unmeasured would create an avoidable evidence asymmetry.

## Bounded improvement

The Nature-local repair algorithm itself was **not changed**.

The evidence harness was extended so one exact external source donor can be exercised by the same evaluator while preserving source identity and provenance. CI now:

1. checks out the real Geometry PR head explicitly rather than relying on GitHub's synthetic pull-request merge checkout;
2. checks out Organic PR #8 exact head `a4e5ee011e1d87f47866a7e6c6f4e66f57b6af12` into a separate donor path;
3. loads the exact rear-tree source from that donor checkout;
4. runs the unchanged Nature-local cap-winding repair/evaluator across all three bodies;
5. records external donor kind/ref beside the retained rear evidence;
6. fails if the expected three-source set is not present or any source does not pass;
7. records the exact real Geometry head in the artifact.

No Organic source JSON, Organic generator, Map composition, deformation code, materials, runtime code, UC core, Profession Fabric structure, or prior source/mesh identity was rewritten.

## Exact-head evidence

Exact Geometry workflow:

- **Geometry tapered cap winding evidence** run `35067299860` — **SUCCESS** on Python 3.11 / 3.13.

Same-head inherited compact-east workflow observed green:

- **Organic compact east tree evidence** run `35067299839` — **SUCCESS**.

Retained Geometry artifact:

- name: `tapered-cap-winding-001-evidence`;
- artifact ID: **`10434757316`**;
- reported size: **43,733 bytes**;
- exact workflow-head binding: `e2224d4bf88f7e68503072c884e5a726b8d0c53d`;
- GitHub archive SHA-256: **`afe3b00857c68290830bce0d8c39b089ba1b4cbfcb0f4d12a650ba51d489c8d4`**.

The retained ZIP was downloaded independently and rehashed to the same SHA-256. `exact-head.txt` was read directly and equals the real PR head `e2224d4bf88f7e68503072c884e5a726b8d0c53d`.

### Provenance repair during this activation

The first three-source workflow attempt, run `35067220464`, was structurally green but its retained `exact-head.txt` exposed GitHub's synthetic PR merge checkout rather than the actual branch head. That artifact was **not adopted**.

The workflow checkout was then corrected to pin `${{ github.event.pull_request.head.sha || github.sha }}` and rerun. The repair algorithm, source bodies, structural thresholds and acceptance logic were unchanged. The adopted artifact is only the exact-head-bound rerun above.

## Three-source structural result

The exact retained evidence reports the following for all three real Nature bodies:

| Measure | Baseline | Derived candidate |
|---|---:|---:|
| vertices | 390 | 390 |
| triangles | 570 | 570 |
| unique indexed edges | 905 | 905 |
| shared-edge orientation conflicts | **260** | **0** |
| flipped cap triangles | — | 260 |
| boundary edges | 100 | 100 |
| non-manifold edges | 0 | 0 |
| edge-connected components | 40 | 40 |

Exact identities:

### `sapling-neutral-001`

- source digest: `a61207b23c441b2cc0becd165fa62289bb7e51065ae0d6fa56bf9f3cab036cc1`;
- baseline mesh digest: `89b835bd8f3e728206543d210787f1bbd1cc1bacb6d01f6695caf3ea1a63fa4c`;
- repaired candidate digest: `47dd4d82651138299d05071df3e8a410f21f673ab8d42b936d7222eb5351b862`.

### `compact-east-tree-neutral-001`

- source digest: `9c87cf26f02f7adee832908652942218ec779c9029a0611aae1fb66eb0f62f54`;
- baseline mesh digest: `c7367ed5dcea6ebe39869c48fd653845b25c9a8725a2e637a1d6f2fbee1fa32f`;
- repaired candidate digest: `420135f6effbadb1b344675948b9ddc471dcb83177702888f0b32327c5121c18`.

### `east-rear-tree-neutral-001`

- exact external donor: `a4e5ee011e1d87f47866a7e6c6f4e66f57b6af12`;
- source digest: `0adf2cde8cfc355ec21b6fb06c6759b753300164b5f72ba029dc1b8c6d2ef307`;
- established Organic baseline mesh digest reproduced exactly: `d7fc5deaa1c12d1d8c7d7b6dc95bf1e8544ce26140ee2e4a7d2c67a2c4133e48`;
- repaired candidate digest: `aa9d450a78fef722672ea9af0f9aca98b4c1a0ca3705661784f5f61f3e9b6a31`.

The rear tree therefore reproduces the same generator-level structural defect and the same reindex-only repair behavior without copying the source into Geometry or changing its source-owned identity.

## Scoped result

**`PASS_TAPERED_CAP_WINDING_REPAIR / THREE REAL NATURE SOURCES / HOLD_SOURCE_MIGRATION_AND_DOWNSTREAM_ACCEPTANCE`**

This closes Technical Art's prior `HOLD_EAST_REAR_TREE_TOPOLOGY` **only for this exact indexed shared-edge winding claim**.

It does not establish production topology for the rear tree or authorize generator migration.

## Limitations / non-claims

This activation does **not** establish:

- connected production vegetation topology;
- that the current 40 edge-connected components are desirable final topology;
- trunk-to-branch or branch-span welding;
- positional-seam welding or arbitrary split-vertex manifoldness;
- self-intersection freedom;
- outward-normal correctness;
- authored vertex normals, tangents, smoothing groups or normal continuity;
- UVs, textures, materials or final LookDev;
- deformation, wind, bending, skinning, flex quality or volume preservation;
- target-engine backface-culling or shaded visual equivalence;
- that the rear-tree candidate has crossed the Nature -> UC preflight path yet;
- target-device memory, draw, GPU or FPS acceptance;
- collision, navigation or gameplay suitability;
- that any of Procedural PR #4's nine retained variants automatically inherit this exact PASS;
- that prior Environment / Runtime / Materials / VFX evidence transfers to repaired candidate mesh digests;
- source-generator migration acceptance;
- CANON, production readiness, game-readiness, Nature mastery or Geometry mastery.

## Root gate

- **Truth:** the claim stays limited to exact indexed shared-edge winding and preserved measured topology facts. Synthetic merge-ref evidence was detected and rejected instead of being reported as exact-head proof.
- **Agency / non-domination:** Organic Form retains source/generator authority; Technical Art owns export/target-render checks; Rigging/VFX own deformation; Art Direction/Visual QA own perceptual acceptance; Runtime owns performance. Geometry does not seize those gates.
- **Continuity:** exact old source/mesh identities remain untouched; rear-tree evidence pins its external Organic donor; repaired candidates receive distinct digests; rollback remains branch/PR-local.
- **Wisdom before speed:** the existing repair/evaluator was reused and extended to one missing exact source instead of rewriting the generator or inventing a new UC abstraction.

## Handoffs recorded

### Organic Form PR #8

Posted exact rear-tree Geometry result:

- donor `a4e5ee...` preserved;
- `260 -> 0` shared-edge conflicts;
- candidate `aa9d450a...`;
- source migration and all downstream acceptance remain held.

### Technical Art PR #3

Posted that the prior source-space rear topology hold can now be closed for the narrow winding claim. If Technical Art extends the UC preflight, it should pin both Organic donor `a4e5ee...` and repaired candidate `aa9d450a...`; target-render culling remains a separate gate.

### Procedural PR #4

Posted an explicit non-inheritance warning: three source families now reproduce the generator-level defect, but the nine procedural variants do not automatically inherit an exact Geometry PASS. The repair must not be silently consumed into the procedural/Organic generator.

## Next Geometry / Topology pass

1. Do not migrate the Organic generator merely because a third source reproduces the repair.
2. Prefer either a Technical Art extension of the rear candidate through the existing Nature -> UC preflight or a real target-engine culling/shading A/B if migration becomes an active proposal.
3. If Procedural outputs become structurally consequential downstream, test exact retained variants rather than inferring topology from family membership.
4. Keep connected vegetation topology, self-intersection, normals/tangents/UV-readiness and deformation as separate future questions.
5. Do not claim game-readiness or Geometry mastery from this three-source structural success.
