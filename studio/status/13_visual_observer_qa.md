# 13 — Visual Observer / QA Specialist Status

Date: 2026-09-16
State: **PASS_MIGRATED_REAR_TREE_NORMAL_CULLING_RECEIVING_RECHECK / CLEAR_PREVIOUS_CAP-GAP ADOPTION BLOCK IN EXACT TWO-CAMERA SCOPE / RETAIN LEAF-BACKFACE + FINAL ART + TARGET-DEVICE + GAMEPLAY HOLDS**

## Scope selected

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/13_visual_observer_qa.md`, the previous Visual QA state, and the newest Art Direction, Organic, Rigging, Animation, Environment, Runtime and other studio coordination state before selecting a review.

`axm-create-me` remains coordination-only. Visual QA changed no Map, Nature, Geometry, material, VFX, Runtime or UC product implementation.

The previous QA state is preserved in Git history at blob `6838a4af2139b637f0029436a702472658d36da5`. That state explicitly blocked normal-culling adoption of the rear/right Nature source until one isolated Map receiving A/B existed that preserved the accepted PR #15 composition and changed only the rear-tree topology lineage / intended culling state.

That exact gate is now ready in:

- repository: `mike-axiom-mir/axm-map-design`;
- PR: `#18 — Environment: prove migrated rear tree in normal-culling receiving scene`;
- branch: `studio/environment-rear-tree-normal-culling-001`;
- exact reviewed head: `f548f98959bf6769716a6d7c87bac69f9f548389`;
- exact base: Map Environment PR #15 head `03e956475158a59d70cca08b73be23c141e4cb1f`;
- historical rear source head: Nature PR #8 `a4e5ee011e1d87f47866a7e6c6f4e66f57b6af12`;
- migrated rear source head: Nature PR #9 `4ddbe66e5c02d22407ef773d5346a2fe6f349a2d`;
- historical mesh digest: `d7fc5deaa1c12d1d8c7d7b6dc95bf1e8544ce26140ee2e4a7d2c67a2c4133e48`;
- migrated source-generated mesh digest: `aa9d450a78fef722672ea9af0f9aca98b4c1a0ca3705661784f5f61f3e9b6a31`;
- shared source digest: `0adf2cde8cfc355ec21b6fb06c6759b753300164b5f72ba029dc1b8c6d2ef307`;
- renderer: Godot 4.7.2 GL Compatibility;
- fixed cameras: `path_eye` and `elevated_oblique`;
- review culling: rear/right tree only `CULL_BACK`; other source meshes remain `CULL_DISABLED` for isolation.

PR #18 is currently open and mergeable. Merge state is metadata only; the four AXM roots remain the merge gate.

## Why this outranked the other current QA surfaces

The constellation still contains several valid perceptual review surfaces:

- Character Organic PR #2 now has baseline / prior tapered / restrained shoulder variants, but source migration, deformation and runtime remain held.
- Animal Rigging PR #6 now proves exact sampled structural deformation for the connected forelimb but explicitly reports meaningful local compression and asks for richer shaded/perspective visual review.
- Object Animation PR #10 now proves one unchanged lid clip across four exact static module configurations, but target-engine pacing/controller behavior remains unclaimed.
- Map Runtime PR #17 already reports byte-identical control/candidate frames for immutable Nature proof-material sharing; its remaining gap is target-device budgeting rather than an unresolved retained-frame contradiction.
- Building Materials / Art Direction retains a front-panel presentation caveat that remains a useful later QA target.

PR #18 nevertheless outranked them because it is the exact evidence dependency named by the previous Visual QA block and controls whether the already-accepted rear/right scene hierarchy may proceed into a normal-culling receiving path.

## Exact evidence acquired

Downloaded retained artifact:

- artifact ID: `10437582047`;
- name: `environment-rear-tree-normal-culling-001-f548f98959bf6769716a6d7c87bac69f9f548389`;
- size: `432,343` bytes;
- expected SHA-256: `c95f8ad7744af412274cd04ef8f5c78ac2c3a5cb099b9af46ac994b15ae06565`;
- independently downloaded/rehashed SHA-256: `c95f8ad7744af412274cd04ef8f5c78ac2c3a5cb099b9af46ac994b15ae06565`;
- retained `exact-head.txt`: `f548f98959bf6769716a6d7c87bac69f9f548389`.

The exact head has eight completed successful Map workflow families, including the dedicated `35075073710 — Environment rear-tree normal-culling receiving evidence` run plus inherited Environment composition, eye-level, rear-source, east-tree, Building-source, motion and procedural-variation checks.

The retained structural receipt reports:

- 390 historical and migrated world vertices;
- 570 historical and migrated triangles;
- zero changed world vertices;
- zero changed triangle memberships;
- exactly 260 triangle rows changing winding;
- unchanged rear source digest;
- unchanged placement / receiving context;
- unrelated source meshes, Weather, path, cameras and sibling lanes preserved.

Visual QA independently checked the retained files rather than inheriting the Environment PASS.

## Independent exact image reproduction

All four PR #18 target-host PNGs were directly inspected.

Independent RGB differencing reproduced the retained A/B measurements exactly:

### `path_eye`

- changed pixels: **7,290 / 792,000 = 0.9204545%**;
- exact changed bounding box: `x=972..1092, y=160..482`.

### `elevated_oblique`

- changed pixels: **2,791 / 792,000 = 0.3523990%**;
- exact changed bounding box: `x=842..993, y=279..482`.

In both views the pixel delta is localized to the declared rear/right tree. No route, pavilion, Object proxy, Weather field, west sapling, compact east tree or broad camera/composition drift appears in the retained pair.

## Direct defect reproduction and repair observation

### Historical rear mesh under `CULL_BACK`

The historical source reproduces the same class of defect Visual QA previously found in the isolated Technical Art host:

- repeated dark horizontal slit/gap reads appear at tapered trunk and branch transitions;
- the losses are visible in both fixed Map cameras;
- the defect is localized to the exact rear/right source.

This confirms the old failure was not an isolated-view artifact of the Technical Art harness. It survives into the actual Map receiving scene when the same historical mesh is given the intended backface-culling state.

### Source-generated migrated rear mesh under identical `CULL_BACK`

The migrated Nature PR #9 source-generated mesh removes those repeated transition slit/gap losses in both fixed Map views.

Directly observed:

- trunk sections become visually continuous through the previously broken tapered transitions;
- the same branch junctions no longer show the repeated thin background cuts seen in the historical frame;
- the tree remains grounded and in the same scene slot;
- route and pavilion framing remain visually stable;
- no broad receiving-scene regression is visible.

The migrated result is still sparse proof vegetation and not final foliage/lookdev.

## Cross-gate continuity check against the previously accepted PR #15 culling-disabled hierarchy

Visual QA also reacquired the exact prior Environment PR #15 artifact `10434984219` rather than judging PR #18 in isolation.

The previous culling-disabled candidate was compared directly with the new migrated `CULL_BACK` candidate.

Independent RGB differences:

- `path_eye`: **7,371 / 792,000 = 0.9306818%**, bbox `x=972..1099, y=160..482`;
- `elevated_oblique`: **3,103 / 792,000 = 0.3917929%**, bbox `x=840..993, y=272..482`.

Again the delta is confined to the rear/right tree region.

This comparison is intentionally not treated as byte-equivalence: changing source winding plus the culling mode can alter local surface visibility/shading. The useful QA result is that the previously accepted broad scene hierarchy survives the transition: the source still reads as a porous tree rather than a wall-like proxy, the central route remains open, and the pavilion/right-side grouping stays revealed. No scene-wide regression appears outside the target asset.

A darker local side read is visible on some migrated trunk surfaces under the proof lighting. Current evidence does not establish that as a topology defect; it is carried as a final normals/material/lighting presentation hold rather than being silently called correct or failed.

## QA verdict

**`PASS_MIGRATED_REAR_TREE_NORMAL_CULLING_RECEIVING_RECHECK`**

Bound exactly to:

- Map PR #18 head `f548f98959bf6769716a6d7c87bac69f9f548389`;
- Nature migrated source head `4ddbe66e5c02d22407ef773d5346a2fe6f349a2d`;
- migrated mesh digest `aa9d450a78fef722672ea9af0f9aca98b4c1a0ca3705661784f5f61f3e9b6a31`;
- artifact `10437582047` / SHA-256 `c95f8ad7744af412274cd04ef8f5c78ac2c3a5cb099b9af46ac994b15ae06565`;
- Godot 4.7.2 GL Compatibility;
- fixed cameras `path_eye` and `elevated_oblique`;
- rear/right target only `CULL_BACK` isolation.

Meaning of the PASS:

> In the exact already-accepted PR #15 multi-asset Map receiving composition, the source-generated Nature PR #9 rear tree removes the previously reproduced tapered-transition backface-culling slit/gap defect in both fixed cameras without observed broad scene regression.

## Previous block disposition

**`CLEAR_PREVIOUS_CAP-GAP NORMAL-CULLING RECEIVING ADOPTION BLOCK — EXACT TWO-CAMERA / TARGET-ASSET SCOPE ONLY`**

The prior QA block existed because no Map-level A/B had yet shown the repair in the actual receiving scene. That missing evidence now exists and directly clears the specific repeated tapered-cap gap defect that caused the block.

This clearance is **not** a global culling certificate. It does not authorize a universal Nature culling policy or imply that every leaf/plane/future variant is correct from every camera.

Art Direction may now review the migrated normal-culling receiving result instead of waiting on the prior renderer-integrity blocker.

## Still held

The following remain explicitly unaccepted:

- final two-sided leaf / terminal-plane representation under backface culling;
- global outward-normal correctness beyond the two retained cameras;
- final authored normals, tangents, UVs, textures, bark/leaf materials or lighting;
- final botanical density, anatomy or silhouette outside this receiving question;
- rear-tree deformation/wind quality;
- target-device FPS, frame time, GPU time, VRAM, memory, draw-call, LOD, instancing or streaming budgets;
- collision, navigation, traversal, gameplay or simulation suitability;
- final Art Director adoption / final world art;
- CANON, production readiness, game readiness, profession promotion or Visual Observer mastery.

## Prior accepted QA results retained

Earlier QA results remain valid only in their original exact scopes and are not broadened here:

- `PASS_REAR_RIGHT_NATURE_VISUAL_HIERARCHY_RECHECK` on Map PR #15 under the culling-disabled observation host;
- `FAIL_CURRENT_BASELINE_BACKFACE_CULLING_VISUAL_INTEGRITY` for the historical rear mesh under isolated backface-culling evidence;
- `PASS_BUILDING_PAVILION_VISUAL_HIERARCHY_RECHECK`;
- `PASS_EAST_FOREGROUND_VISUAL_HIERARCHY_RECHECK`;
- prior repaired Animal chain-continuity QA evidence.

The historical FAIL remains true for the historical mesh. The new PASS applies only to the migrated source-generated identity.

## Root gate

- **Truth:** Visual QA downloaded, rehashed and inspected the exact PR #18 artifact, reproduced its pixel-difference measurements, then compared the new migrated receiving frame against the previously accepted PR #15 culling-disabled candidate. The historical failure is not erased; the migrated identity earns its own bounded PASS.
- **Agency / non-domination:** QA only decides the observed receiving result. Nature/Geometry own source topology, Environment owns scene composition, Technical Art owns transport, Materials/VFX/Runtime retain their own evidence domains, Art Direction owns directional adoption, and the four roots remain the merge gate.
- **Continuity:** the PR #15 accepted composition, historical Nature identity, migrated Nature identity and both artifact sets remain distinct and rollback-safe. No source was silently rewritten in coordination.
- **Wisdom before speed:** the exact blocker was tested in the requested real receiving context before clearing it. The result is not inflated into final vegetation, runtime, gameplay or global-normal acceptance.

## Handoffs

- **3D Art Director:** the renderer-integrity blocker on the rear/right source is cleared for the exact migrated PR #18 receiving result. Review the migrated normal-culling frames for directional adoption while retaining final leaf/material/lighting caveats.
- **Environment / World Art:** the exact PR #18 migrated result independently passes the previously blocked QA question. Preserve the isolated lane; do not mix Materials, VFX, Runtime or another proxy replacement into this evidence identity.
- **Nature / Geometry:** source-generated migration `aa9d450a...` now has independent Map-level visual evidence that it closes the previously reproduced tapered-transition culling gaps. Do not interpret that as a global normals/leaf certificate.
- **Technical Art / UC Integration:** current Nature -> UC -> Godot evidence remains complementary. No UC change is requested from this QA pass.
- **Runtime / Optimization:** no target-device performance statement transfers from this visual PASS. A source/topology migration should receive new runtime measurement only if the production/runtime receiving path actually changes relevant cost.
- **Materials / VFX:** current proof lighting/materials/atmosphere are observation context only. Do not infer final surface or atmosphere acceptance from the topology repair.
- **Visual QA next queue:** after rescanning current state, strong unresolved candidates are the Building refined front-panel presentation caveat, shaded/perspective Animal connected-elbow compression at `-60°`, or Character baseline/prior/refined shoulder proportion A/B/C. Prefer whichever becomes the strongest direct evidence surface without duplicating another active lane.
