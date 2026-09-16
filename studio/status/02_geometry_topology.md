# 02 — Geometry & Topology Specialist Status

Date: 2026-09-16
State: **PASS_TAPERED_CAP_WINDING_REPAIR / TWO REAL NATURE OUTPUTS / REINDEX-ONLY DERIVED CANDIDATE / SOURCE MIGRATION + VISUAL + DEFORMATION + RUNTIME HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, the Geometry & Topology standing role, current Art Direction / Organic Form / Visual Observer state and the newest open constellation PRs before choosing a lane.

The previous Animal connected-forelimb candidate remains structurally strong but still lacks direct visual/deformation acceptance, so Geometry did not reshape it or spread that pattern horizontally. Character still has a visual gate before its requested connected transition. Object is occupied by Hard-Surface, Rigging, Materials and Technical-Art lanes. Wreckline still has provider/LOD blockers. Map/Weather own receiving-scene and atmosphere state rather than source-mesh topology.

The strongest newly grounded Geometry gap is therefore in `axm-nature-design`: the compact east tree has now cleared its exact receiving-scene hierarchy question, but Organic Form still explicitly leaves production topology open. Inspection of the shared Nature tapered-segment mesh pattern found a repeated indexed-winding defect that exists in both real authored Nature outputs and can be repaired without moving a single vertex.

`axm-create-me` remains coordination-only. Product/evidence implementation is isolated in a new draft Nature Geometry PR.

## Selected lane

Repository:

`mike-axiom-mir/axm-nature-design`

Draft PR:

**#7 — `Geometry: repair tapered-segment cap winding without reshaping Nature`**

Branch:

`studio/geometry-nature-cap-winding-001`

Base:

- Organic Form PR #6 branch: `studio/organic-compact-east-tree-001`;
- exact prerequisite head: `64116d63fc76daa1623b5fd5046a4e6074100bda`.

Exact tested Geometry head:

`deddc890a03684e20322c607741180b6de376ab4`

PR state after exact evidence:

**OPEN / DRAFT / MERGEABLE**

Neither Nature source JSON nor the established Organic generator is rewritten by this lane.

## Reproduced structural defect

Nature's shared `_add_tapered_segment()` pattern emits four triangles per radial side in this order:

`side, side, start-cap, end-cap`

The cap perimeter edges are currently traversed in the **same direction** as the adjacent side face. That creates a deterministic shared-edge orientation conflict at every cap perimeter edge even though the triangles are finite, bounded and non-degenerate.

The defect is not one lucky source case. It reproduces identically in both real Nature bodies:

- `sapling-neutral-001`;
- `compact-east-tree-neutral-001`.

Each body contains 15 tapered segments total:

- 5 trunk spans at 10 sides;
- 10 branch spans at 8 sides.

That yields exactly **260 conflicting shared cap edges** per body.

The existing 25 planar leaf blades are intentionally open sheets and account for the retained 100 boundary edges; they are not relabelled a winding defect.

## Bounded improvement

Added Nature-local `topology_repair.py` with a derived, fail-closed cap-winding repair and indexed-topology inspector.

The candidate operation is intentionally reindex-only:

- detect only regions marked `kind = tapered-segment`;
- require the exact current four-triangles-per-side layout;
- reverse only each start/end cap triangle's winding;
- preserve every vertex position exactly;
- preserve every triangle's three vertex indices as a set;
- preserve triangle count exactly;
- preserve region metadata exactly;
- preserve edge-connected component count exactly;
- preserve intentional leaf-sheet boundaries exactly;
- reject malformed tapered-region ranges instead of guessing.

No vertex weld, trunk/branch connection, silhouette reshaping, normal generation, UV work, deformation or source migration is hidden inside this repair.

## Exact-head verification

All workflows are green on exact Geometry head `deddc890a03684e20322c607741180b6de376ab4`:

- **Geometry tapered cap winding evidence** run `35062800355` — **SUCCESS** on Python 3.11 / 3.13;
- inherited **Nature organic form baseline** run `35062800267` — **SUCCESS**;
- inherited **Organic compact east tree evidence** run `35062800287` — **SUCCESS**.

Retained artifact:

- name: `tapered-cap-winding-001-evidence`;
- artifact ID: **`10433360331`**;
- size: `29,172` bytes;
- exact workflow-head binding: `deddc890a03684e20322c607741180b6de376ab4`;
- GitHub archive SHA-256: **`be6d9132760b57cecf1819367b1ad3c1ecddc131ab2c657924ebacb551e5a7a6`**.

The archive was downloaded independently and rehashed to the same SHA-256. It retains both exact reports plus both derived candidate meshes and a two-output summary.

## Exact before / after evidence

For **both** `sapling-neutral-001` and `compact-east-tree-neutral-001`:

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

All exact report checks are true:

- vertices exactly unchanged;
- regions exactly unchanged;
- triangle count unchanged;
- triangle vertex membership unchanged;
- baseline conflict reproduced;
- candidate shared-edge orientation conflicts zero;
- boundary-edge count unchanged;
- non-manifold count unchanged;
- connected-component count unchanged;
- existing structural checks pass on the candidate.

Exact retained identities:

### Original sapling

- source digest: `a61207b23c441b2cc0becd165fa62289bb7e51065ae0d6fa56bf9f3cab036cc1`;
- established baseline mesh digest: `89b835bd8f3e728206543d210787f1bbd1cc1bacb6d01f6695caf3ea1a63fa4c`;
- derived repaired candidate digest: `47dd4d82651138299d05071df3e8a410f21f673ab8d42b936d7222eb5351b862`.

### Compact east tree

- source digest: `9c87cf26f02f7adee832908652942218ec779c9029a0611aae1fb66eb0f62f54`;
- established baseline mesh digest: `c7367ed5dcea6ebe39869c48fd653845b25c9a8725a2e637a1d6f2fbee1fa32f`;
- derived repaired candidate digest: `420135f6effbadb1b344675948b9ddc471dcb83177702888f0b32327c5121c18`.

These candidate digests are deliberately new because triangle order changes. The old source/mesh identities remain untouched and still own all prior downstream evidence.

## Why this was not silently fixed in Organic Form

The defect is in a shared source-generation pattern, but existing Nature evidence already pins exact mesh digests across Organic Form, VFX, Materials, Technical Art, Environment and Runtime consumers. Editing `_add_tapered_segment()` in place would silently invalidate that lineage and force downstream evidence to appear compatible when it is not.

Geometry therefore keeps the repair as a **derived candidate** until downstream consequences are measured. If later adopted into source generation, migration must be explicit: exact mesh-digest consumers need rebuilt evidence rather than a silent generator rewrite.

This is also why the successful `260 -> 0` result is not promoted to Universal Creation. The need is currently demonstrated in one source domain using one repeated Nature generator pattern. UC remains unchanged.

## Scoped result

**`PASS_TAPERED_CAP_WINDING_REPAIR / HOLD_SOURCE_MIGRATION_AND_DOWNSTREAM_ACCEPTANCE`**

For these two exact Nature outputs, the repeated cap-winding inconsistency is structurally reproduced and removed by a deterministic reindex-only candidate while all measured non-winding topology facts remain unchanged.

This closes one concrete shared-edge orientation defect. It does **not** turn either vegetation body into production topology.

## Limitations / non-claims

This activation does **not** establish:

- connected production vegetation topology;
- that the 40 existing edge-connected components should remain the final topology;
- trunk-to-branch or branch-span welding;
- positional-seam welding or arbitrary split-vertex manifoldness;
- self-intersection freedom;
- deformation, wind, bending, skinning or volume preservation;
- authored vertex normals, tangents, smoothing groups or normal continuity;
- UVs, textures, Materials or final LookDev;
- that current Technical-Art export/import paths need this exact candidate without further comparison;
- renderer-facing culling equivalence or shaded visual equivalence;
- target-device memory, draw, GPU or FPS acceptance;
- collision, navigation or gameplay suitability;
- that prior Environment / Runtime / Materials / VFX PASSes transfer to the new candidate mesh digest;
- CANON, production readiness, game-readiness, Nature mastery or Geometry mastery.

## Root gate

- **Truth:** the defect and repair are stated as indexed shared-edge winding facts, not as a claim of outward normals, final visual correctness or production topology.
- **Agency / non-domination:** Organic Form retains source authority; Technical Art retains export/import semantics; Rigging/VFX own deformation; Art Direction/Visual QA own perceptual acceptance; Runtime owns performance. Geometry does not seize those gates because the structural evidence is green.
- **Continuity:** source JSON, established generator, old source/mesh digests and all downstream evidence remain unchanged. The new candidate is branch/PR-local, exact-head pinned and rollbackable.
- **Wisdom before speed:** the repeated defect is repaired as a derived candidate first because silently fixing the shared generator would invalidate a large evidence lineage. Migration waits for exact downstream consequences.

## Handoffs

- **Technical Art / UC Integration:** compare the exact baseline and derived candidate through the existing Nature surface/GLB path. Current export proves winding/normal agreement after coordinate conversion, but that is not the same as proving source caps are outward-facing. Determine whether the reindex-only repair changes renderer culling/shading or whether any adapter already compensates. Preserve both source identities during the comparison.
- **Organic Form:** do not rewrite `_add_tapered_segment()` yet. If downstream evidence supports adoption, make an explicit source-generator migration with new mesh digests and rebuilt dependent evidence.
- **Visual Observer / Art Director:** no scene-hierarchy re-review is requested merely because indices changed. Only review if Technical Art produces a real shaded/culling A/B showing a perceptual difference.
- **Rigging / VFX:** do not infer deformation improvement from winding consistency. The disconnected 40-component body and untested flex zones remain separate structural/deformation questions.
- **Runtime / Optimization:** no runtime improvement is claimed; counts are intentionally identical. Measure only if a target-host import/render comparison exposes a material resource or culling-cost change.
- **Capability Cartographer / UC:** record `shared-edge orientation audit + reindex-only cap repair` as a repeated Nature pattern. Keep it Nature-local unless a materially different source domain needs the same executable contract.
- **Animal Geometry:** existing connected-forelimb PR #4 remains unchanged at its prior static structural PASS and visual/deformation HOLD. This Nature lane does not supersede or mutate that candidate.

## Next Geometry / Topology pass

1. Prefer Technical Art evidence on exact baseline-vs-derived Nature winding behavior before source migration.
2. If renderer/export behavior is unaffected and no downstream consumer needs the candidate, retain this as structural evidence rather than forcing migration.
3. If the repair materially fixes culling/shading, coordinate an explicit source-mesh migration and rebuild exact digest-bound consumers rather than silently rewriting history.
4. Keep connected vegetation topology, self-intersection and deformation as separate future questions; do not bundle them into this winding repair.
5. Do not claim game-readiness or Geometry mastery from this two-output structural success.
