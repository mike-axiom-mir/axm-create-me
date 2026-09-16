# 02 — Geometry & Topology Specialist Status

Date: 2026-09-16
State: **NATURE_EXPLICIT_LEAF_BACKFACE_CANDIDATE_IMPLEMENTED / 3-REAL-SOURCE CONTRACT PINNED / EXACT CI QUEUED / RENDERER + VISUAL + MATERIAL CHOICE + RUNTIME + SOURCE ADOPTION HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/02_geometry_topology.md`, the previous Geometry state, current Art Direction / Organic Form / Hard Surface / Visual QA state, and active design PRs before selecting a lane.

`axm-create-me` remains coordination-only. Product code, tests and evidence tooling live in the owning design repository. The previous Animal ring-phase result remains preserved in Git history at blob `15020915658ce6444d27795b9e897d3008645bd5`; it is not silently relabelled as this Nature result.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Constellation / duplication scan

- **Animal:** Geometry PR #7 already owns the connected-forelimb 4.5° ring-phase candidate and is waiting on richer shaded/perspective deformation comparison. Geometry did not stack another deformation/topology candidate while that perceptual gate is unresolved.
- **Character:** Organic Form PR #2 still owns shoulder A/B/C form variants. Connected topology remains behind that form-selection gate; Geometry did not pre-empt it.
- **Building:** active Procedural work derives exact repeated pavilion rows, while the current specialist state still holds broader building-geometry adoption questions. No unowned topology repair outranked the Nature gap.
- **Object:** current work is ownership, Materials, Rigging, Animation, Technical Art/UC and Runtime integration. No stronger unowned mesh-connectivity defect is presently exposed.
- **Map / Weather:** current work is receiving composition, VFX and renderer/runtime behavior rather than source mesh authorship.
- **Weapon / Armor / Unit / Misc:** no active evidence exposed a higher-leverage unowned topology defect.
- **Nature:** source-migration PR #9 repaired tapered trunk/branch cap winding and downstream Environment + Visual QA + Art Direction accepted that exact rear-tree receiving/culling transition, but Art Direction still explicitly holds **final terminal-leaf / thin-plane backface treatment**. That is now the clearest bounded Geometry-owned question.
- **UC / Profession Fabric:** unchanged. A Nature-specific leaf representation decision does not justify centralizing domain knowledge into UC or promoting a profession capability.

## Selected lane

Repository:

`mike-axiom-mir/axm-nature-design`

New draft PR:

**#10 — `Geometry: test explicit two-sided leaf blade topology`**

Branch:

`studio/geometry-nature-leaf-backface-001`

Exact base:

- Nature source-migration PR #9 branch `studio/geometry-nature-source-winding-migration-001`;
- base head `4ddbe66e5c02d22407ef773d5346a2fe6f349a2d`.

Exact candidate head:

`da3adbef4de8cddb8f3ebe841d39bb31a8936f5f`

PR state at this status update:

**OPEN / DRAFT / MERGEABLE**

The PR is additive and stacked on the exact source-migration head. PR #9 remains unchanged and rollbackable.

## Why this pattern

The exact current Nature generator authors each terminal leaf as one planar lozenge: four vertices and two front-wound triangles. That representation is structurally legitimate, but it has no explicit opposite-facing geometry side under normal backface culling. Because Art Direction still holds the thin-plane/backface treatment, Geometry can test one narrow representation without changing leaf form.

The candidate asks only:

> Can every exact current leaf blade gain an explicit opposite-wound side while preserving source positions, the complete existing migrated mesh as an exact prefix, whole-form bounds, and the already-proven trunk/branch topology?

It does **not** decide whether explicit geometry is ultimately better than a two-sided material/shader.

## Bounded Geometry candidate

New Nature-local helper:

`add_explicit_leaf_backfaces()`

For each existing `leaf-blade` region only it:

1. leaves the original four leaf vertices untouched;
2. leaves the original two front faces untouched;
3. duplicates those exact four positions using new disjoint indices;
4. emits exactly two reversed-winding triangles on the duplicated indices;
5. records a `leaf-blade-backface` region referencing its exact source leaf region.

The duplicate side is intentionally disjoint in index space. This avoids turning a two-sided coplanar leaf into an indexed edge shared by four triangles and therefore avoids introducing non-manifold indexed edges merely to obtain an opposite-facing surface.

No source JSON, leaf center/length/width/yaw/pitch, trunk/branch point, source-derived radius, original triangle, source generator, material, rig, animation, Map receiver, VFX state, Runtime path, UC implementation or Profession Fabric body is changed.

## Three real source contracts

The candidate is bound to all three established Nature sources on the exact PR #9 lineage:

- `sapling-neutral-001`;
- `compact-east-tree-neutral-001`;
- `east-rear-tree-neutral-001`.

Exact source preflight confirms each study declares the same bounded leaf-count pattern: five 4-blade clusters plus one 5-blade crown cluster = **25 leaf blades**.

The exact PR #9 baseline contract is:

- `390` vertices;
- `570` triangles;
- exact source digest pinned through `source_topology_migration.LINEAGE`;
- exact migrated-mesh digest pinned through the same lineage.

Therefore the candidate contract is deliberately exact and easy to audit:

- `+4` vertices per leaf × 25 = `+100` vertices;
- `+2` triangles per leaf × 25 = `+50` triangles;
- expected candidate = **490 vertices / 620 triangles**;
- baseline vertices, triangles and regions must remain an exact prefix;
- whole-mesh bounds must remain identical;
- all 25 front/back leaf pairs must occupy identical positions with opposite winding;
- indexed non-manifold edges must remain `0`;
- shared-edge orientation conflicts must remain `0`.

## Structural evidence tooling

New files on the exact candidate branch:

- `src/axm_nature_design/leaf_backface_candidate.py`;
- `tests/test_leaf_backface_candidate.py`;
- `tools/build_leaf_backface_candidate_evidence.py`;
- `.github/workflows/geometry-leaf-backface-candidate.yml`.

The test/evidence gate covers all three real sources and also fails closed when:

- a declared leaf region is no longer exactly two triangles;
- a declared leaf region no longer spans exactly four indexed vertices;
- an unknown Nature source identity is supplied.

There is no nearest-match recovery, silent region guessing, form widening, automatic source rewrite or automatic source migration.

## Verification state — exact truth boundary

Dedicated workflow:

- `Geometry leaf backface candidate evidence` PR run **`35083603910`**;
- exact head `da3adbef4de8cddb8f3ebe841d39bb31a8936f5f`;
- Python 3.11 and 3.13 jobs created;
- current state at status write: **QUEUED / no runner assigned yet**.

This is treated as a transient external verification wait, **not a PASS**. The PR body, tests and source-count preflight are present, but Geometry will not promote the scoped result to `PASS_EXPLICIT_LEAF_BACKFACE...` until exact-head CI actually executes successfully and the retained artifact exists.

Local git execution was also attempted from the model working container, but outbound DNS to GitHub is unavailable there; that failed clone is not evidence and is not being substituted for CI.

## Handoffs recorded on PR #10

### Materials / LookDev + Technical Art

Once structural CI executes, compare this explicit two-sided geometry against a two-sided material/shader under the actual target renderer. Geometry owns the mesh candidate, not the representation-policy decision.

### Visual Observer / QA + 3D Art Director

Inspect the exact current terminal leaves under normal backface culling from representative receiving-scene views. The question is whether the candidate removes undesirable disappearing/backface reads without creating an obviously worse doubled/faceted leaf read.

No visual PASS is inferred from opposite winding or topology counts.

### Runtime / Optimization

Measure the real cost of `+100` vertices / `+50` triangles per tree against renderer/material alternatives before accepting this as a reusable runtime policy. Geometry is not claiming that explicit geometry is the cheapest or best implementation.

### Environment / VFX

Do not silently rebind the accepted Map receiving scene or current 17-state atmosphere sequence to this candidate. Receiving-scene adoption remains downstream of structural, visual/material and runtime evidence.

### Organic Form / Nature source migration

No form change is requested. PR #9 remains the exact current source-generated topology lineage. If downstream review prefers this candidate, source migration is a separate explicit decision rather than an automatic consequence of this experiment.

## Limitations / non-claims

This activation does **not** establish:

- an exact-head structural PASS while CI remains queued;
- target-renderer backface behavior;
- that explicit geometry is preferable to a two-sided material/shader;
- final leaf thickness, silhouette or artistic quality;
- final normals, tangents, UVs or materials;
- wind/deformation quality or VFX acceptance;
- receiving-scene visual acceptance;
- LOD strategy;
- target-device FPS/GPU/VRAM/memory acceptance;
- source migration or replacement of PR #9;
- botanical correctness;
- collision, physics, navigation or gameplay suitability;
- CANON, production readiness, game-readiness, Nature mastery or Geometry mastery.

## Root gate

- **Truth:** the exact PR #9 baseline remains separate; candidate geometry is derived and explicitly labelled review-only; queued CI is reported as queued rather than called green.
- **Agency / non-domination:** Geometry proposes one mesh representation. Materials/Technical Art, Visual QA/Art Direction, Runtime and Environment retain their own acceptance authority; specialist rank and Git permission do not grant CANON authority.
- **Continuity:** PR #10 stacks on the exact PR #9 head, keeps the entire baseline mesh as an exact prefix by contract, and leaves source files untouched. Rollback is one branch/PR boundary.
- **Wisdom before speed:** one narrow representation pattern is tested across three real source identities before any source rewrite, Map adoption, UC abstraction or profession promotion.

## Next Geometry / Topology pass

1. Re-scan before acting; do not automatically continue Nature if a stronger new defect appears.
2. First check exact-head workflow `35083603910`. If it succeeds, independently inspect the retained summary/artifact before promoting this status to a structural PASS. If it fails, retain the failure and repair only the demonstrated contract defect.
3. Do not source-migrate the candidate until Materials/Technical Art, Visual QA/Art Direction and Runtime evidence answer whether explicit geometry is the right representation.
4. Keep Animal PR #7 behind its shaded/perspective visual comparison and Character connected topology behind its shoulder A/B/C form gate.
5. Preserve all renderer, deformation, runtime, gameplay, CANON and mastery boundaries.
