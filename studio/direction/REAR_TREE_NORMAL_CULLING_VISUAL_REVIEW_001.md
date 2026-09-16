# Rear Tree Normal-Culling Visual Review 001

Date: 2026-09-16
Owner: 3D Art Director
State: **PASS_ART_DIRECTION_REAR_TREE_NORMAL_CULLING_TRANSITION_CONTINUITY / RELEASE_PREVIOUS_REAR_TREE_NORMAL_CULLING_ADOPTION_HOLD_IN_EXACT_SCOPE**

## Scope

This packet reviews one previously blocked visual-direction question only: whether the source-generated Nature winding migration may be directionally adopted for the rear/right tree when the exact accepted Map receiving composition is rendered with target-only backface culling.

`axm-create-me` is coordination-only. No Map, Nature, material, topology, VFX, runtime or UC product implementation is authored here.

The four AXM roots remain the merge gate: Truth, Agency / non-domination, Continuity, Wisdom before speed.

## Exact reviewed identity

Receiving scene:
- repository: `mike-axiom-mir/axm-map-design`
- PR: `#18 — Environment: prove migrated rear tree in normal-culling receiving scene`
- exact head: `f548f98959bf6769716a6d7c87bac69f9f548389`
- base: Environment PR #15 head `03e956475158a59d70cca08b73be23c141e4cb1f`
- renderer: Godot 4.7.2 GL Compatibility
- fixed cameras: `path_eye`, `elevated_oblique`
- target-only review state: rear/right tree `CULL_BACK`; west sapling and compact east tree remain `CULL_DISABLED` for isolation

Nature source lineage:
- historical rear source head: PR #8 `a4e5ee011e1d87f47866a7e6c6f4e66f57b6af12`
- migrated source head: PR #9 `4ddbe66e5c02d22407ef773d5346a2fe6f349a2d`
- unchanged source digest: `0adf2cde8cfc355ec21b6fb06c6759b753300164b5f72ba029dc1b8c6d2ef307`
- historical mesh digest: `d7fc5deaa1c12d1d8c7d7b6dc95bf1e8544ce26140ee2e4a7d2c67a2c4133e48`
- migrated mesh digest: `aa9d450a78fef722672ea9af0f9aca98b4c1a0ca3705661784f5f61f3e9b6a31`
- migration changes zero vertices and zero triangle memberships; 260 triangle rows change winding.

Retained Environment artifact:
- ID `10437582047`
- archive SHA-256 `c95f8ad7744af412274cd04ef8f5c78ac2c3a5cb099b9af46ac994b15ae06565`

Independent Visual QA has already returned `PASS_MIGRATED_REAR_TREE_NORMAL_CULLING_RECEIVING_RECHECK` on this exact evidence and cleared its previous blocker only for this exact source identity, two cameras and target-only culling scope.

## Direct Art Director observation

The retained three-way comparison was reviewed directly: previous accepted PR #15 culling-disabled result, PR #18 historical mesh under `CULL_BACK`, and PR #18 migrated mesh under identical `CULL_BACK`.

### Historical mesh under `CULL_BACK`

The historical lineage creates repeated dark horizontal slit/gap reads at several tapered trunk and branch transitions. These are visually disruptive because they break the intended continuous branch/trunk mass into stacked pieces. The defect is visible in both retained cameras and is more consequential than minor local shading differences.

### Migrated mesh under identical `CULL_BACK`

The source-generated migrated lineage removes the repeated slit/gap pattern at the same tapered transitions. The tree reads again as one continuous branching form rather than a stack of disconnected sleeves.

The broader art-direction relationships remain intact:
- rear/right tree remains porous rather than wall-like;
- central route stays open;
- pavilion remains legible behind/left of the tree;
- the tree still functions as a secondary framing mass rather than the dominant scene subject;
- west sapling, compact east tree, Weather, Object proxies and broad composition do not show an observed directional regression in the retained evidence.

A darker local side read remains on portions of the migrated trunk under the proof lighting. In this exact evidence it reads as ordinary orientation/shading variation rather than the repeated structural-looking gap failure seen in the historical mesh. No geometry or material rewrite is requested from that darker side read now.

## Art Direction decision

**`PASS_ART_DIRECTION_REAR_TREE_NORMAL_CULLING_TRANSITION_CONTINUITY`**

**`RELEASE_PREVIOUS_REAR_TREE_NORMAL_CULLING_ADOPTION_HOLD_IN_EXACT_SCOPE`**

Meaning:

> For the exact Map PR #18 receiving scene, the Nature PR #9 source-generated migrated winding is directionally preferred over the historical rear-tree mesh when this rear/right tree is rendered with the reviewed backface-culling state, because it removes repeated tapered-transition slit/gap reads while preserving the accepted porous-tree / route / pavilion hierarchy.

This is a visual-direction adoption of the migrated lineage for the exact reviewed path. It is not a global vegetation or culling policy.

## Direction constraints

- Preserve the migrated Nature source lineage rather than reintroducing a downstream Map-only repair.
- Do not use receiver-only material, lighting or camera tricks to hide topology/culling defects.
- Do not broaden `CULL_BACK` to all Nature assets from this one result.
- Keep terminal leaf/plane treatment independently reviewable; thin two-sided vegetation may require a different final representation.
- Keep source-authored form, normals/tangents/UVs/materials and deformation questions separate from this winding-direction decision.
- Do not micro-tune the current rear tree merely to equalize local brightness between cameras.

## Still held / non-claims

This packet does not establish:
- global outward-normal correctness from all views;
- final leaf/backface representation;
- final authored normals, tangents, UVs, bark/leaf materials or lighting;
- botanical/anatomical correctness or final vegetation density;
- wind/deformation quality;
- target-device FPS, GPU, VRAM, memory, draw-call, LOD, instancing or streaming budgets;
- collision, navigation, traversal or gameplay;
- final Environment / World Art acceptance;
- CANON, production readiness, game readiness or Art Direction/Nature/Environment mastery.

## Handoffs

- **Environment / Map PR #18:** Art Direction accepts the migrated rear/right tree transition continuity for this exact receiving/culling scope. Preserve the isolated evidence identity; do not bundle Materials, VFX or Runtime changes into this proof.
- **Nature / Geometry PR #9:** the source-generator migration now has both independent QA and Art Direction support for this exact rear-tree receiving result. Preserve historical receipts as historical identities and do not generalize the result into a universal culling rule.
- **Visual Observer / QA:** no repeat review of the same cap-gap defect is requested unless the source identity, receiving representation or culling contract changes.
- **Materials / LookDev:** no bark/leaf scalar or color adjustment is requested to compensate for the topology fix. Final vegetation surface work remains a separate later gate.
- **Technical Art / UC:** no UC change is requested. Keep Nature-specific winding/domain meaning source-local; current UC transport evidence is complementary only.
- **Runtime / Optimization:** no performance claim transfers from this visual PASS. Re-measure only when an actual production/runtime receiving representation changes relevant cost.
- **Art Director next queue:** after this release, the strongest unresolved direct visual surfaces are Character shoulder baseline/prior/refined A/B/C, Animal connected-elbow compression in a richer shaded perspective, and the Building front-panel presentation caveat. Select by whichever has the strongest exact visual evidence without duplicating another active specialist lane.
