# 11 — Technical Art / UC Integration Specialist Status

Date: 2026-09-16
State: **ACTIVE / EXACT NATURE SHARED-EDGE TOPOLOGY PREFLIGHT → UC GLB PROVEN / UC CORE UNCHANGED / ORGANIC SOURCE MIGRATION + TARGET-ENGINE CULLING HELD**

## Current bounded claim

This activation closed one cross-repo Technical Art ordering gap exposed by Nature Geometry PR #7:

> A Nature mesh could pass the existing source-local surface bridge and UC `verify_glb()` while still carrying a repeated shared-edge orientation defect, because per-triangle winding/normal agreement is not the same claim as shared-edge topology consistency.

The bounded result is:

`PASS_EXACT_NATURE_TOPOLOGY_PREFLIGHT_THROUGH_UC_GLB`

For two real Nature bodies, the exact Geometry reindex-only candidate now crosses this evidence path:

`exact source mesh identity` → `generic UC seam-welded topology preflight` → `source-owned reindex-only candidate` → `Nature coordinate/winding/flat-normal bridge` → `generic UC topology preflight on emitted woody surface` → `exact UC axm.surface-3d/v0.1 publish/verify` → `retained GLB bytes`.

Universal Creation was **not** modified. No trunk, cap, branch, leaf, vegetation, Organic or Geometry policy was moved into UC. `axm-create-me` remains coordination-only.

## Coordination / constellation scan

Read/inspected before work:

- `studio/3D_STUDIO_CAMPAIGN.md`;
- standing role `studio/specialists/11_technical_art_uc_integration.md`;
- prior Technical Art status and previous Object target-host evidence;
- current open PRs across the design constellation;
- Nature Organic, Geometry, Environment/VFX and existing Technical Art lanes;
- Building source/interface + Materials activity and Map receiving-scene activity;
- Object source-frame / module / rigging activity;
- current Universal Creation main plus active UC precision-cutter / 2D physics work.

The selected gap was not duplicated elsewhere. Geometry PR #7 explicitly handed Technical Art the unanswered question: does the downstream surface/GLB conversion already compensate for the tapered-cap winding defect, or does the exact repair need to survive the export boundary before any source migration is considered?

Relevant exact Nature lanes:

- **Geometry PR #7** — `Geometry: repair tapered-segment cap winding without reshaping Nature` — exact head `deddc890a03684e20322c607741180b6de376ab4`, open/draft/mergeable. It proves a reindex-only `260 -> 0` shared-edge orientation-conflict repair on `sapling-neutral-001` and `compact-east-tree-neutral-001`, while deliberately holding Organic source migration.
- **Technical Art PR #3** — existing Nature source -> UC GLB bridge. This activation extended this lane rather than opening a duplicate Technical Art PR.
- **Organic PR #8** — `east-rear-tree-neutral-001` remains on the unchanged Organic generator and explicitly inherits the known baseline-generator limitation. This activation does **not** infer a topology PASS for that newer exact body because it was not present in the pinned Geometry donor commit.

Other live lanes were left untouched. Building/Map composition, Object runtime attachment semantics, Animal animation playback, Materials/LookDev, VFX/wind and Runtime continue to own their separate gates.

## UC state inspected

Current Universal Creation main was inspected at exact commit:

`37eabf250f54c2dccaf81bfa2002129e53c1eaff`

The key existing generic capability is:

`axm_uc.mesh_topology.inspect_mesh_topology()`

It already performs domain-neutral seam-welded triangle-edge inspection and reports:

- collapsed triangles;
- boundary edges;
- non-manifold edges;
- shared-edge orientation conflicts;
- triangle component count;
- an explicit truth boundary that does not claim vertex manifoldness, self-intersection, deformation, collision suitability or visual quality.

UC's existing `procedural_3d.publish_glb()` / `verify_glb()` surface path separately verifies bounded GLB structure and per-triangle geometry/normal consistency.

That separation is correct. The missing piece was **pipeline composition**, not missing UC domain knowledge.

## Gap selected

Nature Technical Art PR #3 already performs a deliberate handedness-changing source-coordinate conversion and reverses front-face winding while deriving exact flat normals. Geometry PR #7 subsequently found that the source generator itself has 260 same-direction shared-edge cap/side traversals on each tested Nature body.

The consequential question was therefore:

1. does Nature's downstream coordinate/winding conversion erase or accidentally repair the source shared-edge defect;
2. can UC's existing generic topology inspector independently reproduce Geometry's finding;
3. does the Geometry repair survive Nature's surface flattening and exact UC GLB publication;
4. does `verify_glb()` distinguish the bad shared-edge baseline from the repaired candidate, or must topology evidence remain an explicit separate preflight.

## Bounded improvement

Extended the existing draft:

**`mike-axiom-mir/axm-nature-design#3 — Technical Art: prove Nature surface -> UC GLB handoff`**

Branch:

`studio/uc-nature-surface-bridge-001`

Exact final Technical Art head:

`c2148be843f8a4815f4705cc06a88834363b6b65`

PR state inspected: **OPEN / DRAFT / MERGEABLE**.

Smallest changes only:

- extended `axm_nature_design.uc_surface_bridge` with `adapt_mesh_for_uc()` so an explicitly identified source-owned mesh candidate can cross the existing adapter without rewriting Organic source identity;
- retained `adapt_source_for_uc()` as the exact baseline-generator path;
- added focused exact-mesh identity/fail-closed tests;
- added `tools/build_uc_topology_preflight_evidence.py`;
- added `.github/workflows/uc-nature-topology-preflight.yml`.

No Organic source JSON, Organic generator, Geometry repair algorithm, UC code, Map composition, VFX, Materials or runtime code was changed.

### Exact donor bindings

Geometry donor:

`mike-axiom-mir/axm-nature-design@deddc890a03684e20322c607741180b6de376ab4`

Universal Creation donor:

`mike-axiom-mir/axm-universal-creation@37eabf250f54c2dccaf81bfa2002129e53c1eaff`

The workflow checks out both exact commits separately and records all three heads (Technical Art, Geometry, UC) in retained evidence.

## Exact result

### Sapling

`source digest`:

`a61207b23c441b2cc0becd165fa62289bb7e51065ae0d6fa56bf9f3cab036cc1`

`baseline mesh digest`:

`89b835bd8f3e728206543d210787f1bbd1cc1bacb6d01f6695caf3ea1a63fa4c`

`reindex-only candidate digest`:

`47dd4d82651138299d05071df3e8a410f21f673ab8d42b936d7222eb5351b862`

Observed exact path:

- Geometry indexed shared-edge conflicts: `260 -> 0`;
- UC generic source-mesh orientation conflicts: `260 -> 0`;
- UC generic emitted-`woody` surface orientation conflicts after Nature conversion/flat-normal expansion: `260 -> 0`;
- baseline UC GLB: 620 triangles, SHA-256 `d926bb6ec0ff86c4f4f83d4431be7a6553b2bb1da4a5e691726a2867a7b5b05e`;
- candidate UC GLB: 620 triangles, SHA-256 `0bdf1731348988decf9eefe930922b834175c4e84480e3cf84e1b70fffeb6e4d`;
- both exact GLBs pass UC per-triangle winding-vs-normal verification.

### Compact east tree

`source digest`:

`9c87cf26f02f7adee832908652942218ec779c9029a0611aae1fb66eb0f62f54`

`baseline mesh digest`:

`c7367ed5dcea6ebe39869c48fd653845b25c9a8725a2e637a1d6f2fbee1fa32f`

`reindex-only candidate digest`:

`420135f6effbadb1b344675948b9ddc471dcb83177702888f0b32327c5121c18`

Observed exact path:

- Geometry indexed shared-edge conflicts: `260 -> 0`;
- UC generic source-mesh orientation conflicts: `260 -> 0`;
- UC generic emitted-`woody` surface orientation conflicts after Nature conversion/flat-normal expansion: `260 -> 0`;
- baseline UC GLB: 620 triangles, SHA-256 `e05eb11b1e390a558f8d48f6e44af9f3083d436aaebbe3f1097d6075cf08128e`;
- candidate UC GLB: 620 triangles, SHA-256 `507c1cd58b234ab70b203daa42a776aad00741f21601c4c5aae2a45fbb7dd17d`;
- both exact GLBs pass UC per-triangle winding-vs-normal verification.

## Consequential learning / repaired contract

The exact evidence answers the Geometry handoff precisely:

> **Nature's coordinate/winding bridge does not compensate for the tapered-cap shared-edge defect. The `260 -> 0` repair remains visible through the bridge and through UC's generic seam-welded topology inspection. At the same time, UC `verify_glb()` passes both baseline and repaired variants because its bounded claim is per-triangle winding/normal consistency, not shared-edge orientation consistency.**

The smallest correct contract is therefore an ordering rule, not a new ontology:

1. retain exact source mesh identity;
2. run generic UC seam-welded topology preflight while source adjacency/provenance is explicit;
3. if a source-owned repair candidate is selected, preserve its distinct exact digest;
4. perform the source-repo coordinate/normal/material-group bridge;
5. rerun generic UC topology inspection on topology-sensitive emitted geometry;
6. publish and verify exact GLB bytes through UC;
7. keep target-renderer culling/visual acceptance as a separate gate.

This is reusable without centralizing Nature semantics. UC already owns the generic inspector in the correct home.

## Exact-head CI and retained evidence

All relevant workflows are green at exact TA head `c2148be843f8a4815f4705cc06a88834363b6b65`:

- `35065394089 — UC nature topology preflight evidence` — **SUCCESS**;
- `35065394020 — UC nature surface bridge evidence` — **SUCCESS**;
- `35065393975 — Nature organic form baseline` — **SUCCESS**.

Retained artifact:

- ID: **10433019907**;
- name: `nature-uc-topology-preflight-c2148be843f8a4815f4705cc06a88834363b6b65`;
- reported size: **313,297 bytes**;
- exact TA head: `c2148be843f8a4815f4705cc06a88834363b6b65`;
- exact Geometry donor: `deddc890a03684e20322c607741180b6de376ab4`;
- exact UC donor: `37eabf250f54c2dccaf81bfa2002129e53c1eaff`;
- archive SHA-256: `2d756c918a05c8f7ecec4fcda4c7b32926cd792d43ff3ed60762535d5328067d`.

The retained ZIP was downloaded after CI and independently SHA-256 rehashed. The digest matched GitHub's artifact digest exactly. Its overall JSON and both study receipts were parsed directly.

## Handoffs

### Geometry / Organic

Geometry PR #7 now has downstream proof that its reindex-only candidate survives Nature -> UC translation and remains distinguishable by generic topology inspection.

This **still does not authorize** rewriting the shared Organic generator. Existing source and mesh digests are already evidence dependencies. If Organic elects to migrate later, every digest-bound downstream consumer must be rebuilt/rebound deliberately; no silent lineage rewrite.

### Organic east-rear tree PR #8

The newer `east-rear-tree-neutral-001` was not in the pinned Geometry donor and therefore does **not** inherit this exact two-body PASS. It remains on the baseline generator and its topology/migration status is held.

### Technical Art / renderer handoff

The remaining exact question is target-engine culling/normal appearance for baseline versus candidate. This activation intentionally did not claim that from structural/GLB evidence. If a source migration is proposed, a fixed target-render comparison should precede it.

### Capability placement

No UC core change is justified. `inspect_mesh_topology()` is already a generic cross-domain capability in the correct repository. The reusable learning is how to compose it into Technical Art pipelines, not a reason to add Nature-specific policy or a second topology inspector.

## Relationship to previous Object Technical Art evidence

The previous Object result remains valid and is not superseded:

`PASS_SOURCE_FRAME_BOUND_UC_GLB_GODOT_HANDOFF`

at Object head `d5cd67b34996ff95dd28495d26ccb8c4a60b7dfd`, pinned UC `646c69df21eb3b1f85ab4b005368bda827b37a14`, retained artifact `10432029651`.

That pass established one exact source-frame -> UC -> Godot target-host handoff without inventing generic socket-Euler semantics. This activation extends the same placement principle into organic topology: source repos own domain meaning; UC owns generic machinery; Technical Art owns explicit composition and evidence boundaries.

## Truth boundary / non-claims

This activation proves only the exact structural/export claim described above.

It does **not** prove:

- Organic source-generator migration acceptance;
- topology correctness for `east-rear-tree-neutral-001`;
- target-engine backface-culling appearance;
- final normals, tangents, smoothing policy, UVs or materials;
- production-connected vegetation topology or self-intersection freedom;
- wind/deformation/rigging/animation quality;
- Map/Environment visual acceptance;
- runtime/device performance;
- collision/gameplay suitability;
- arbitrary Nature families or arbitrary meshes;
- CANON, production readiness or Technical Art / UC mastery.

## Root gate

- **Truth:** baseline and candidate identities remain separate; `verify_glb()` is not relabeled as topology evidence; untested renderer claims remain held.
- **Agency / non-domination:** no merge/promotion/source rewrite was performed; source owners retain the migration decision.
- **Continuity:** exact TA, Geometry and UC commits plus artifact digests are retained; previous Object evidence remains traceable rather than overwritten conceptually.
- **Wisdom before speed:** reused UC's existing generic inspector and extended the existing Nature TA lane instead of adding another UC abstraction or duplicate specialist PR.

## Current state

`PASS_EXACT_NATURE_TOPOLOGY_PREFLIGHT_THROUGH_UC_GLB / HOLD_ORGANIC_SOURCE_MIGRATION / HOLD_EAST_REAR_TREE_TOPOLOGY / HOLD_TARGET_ENGINE_CULLING_RENDER / UC_CORE_UNCHANGED`
