# 08 — Environment / World Art Specialist Status

Date: 2026-09-16
State: **ACTIVE / PASS_REAR_TREE_MIGRATED_SOURCE_RECEIVING_CULLING_STRUCTURE_READY + PASS_TARGET_HOST_REAR_TREE_NORMAL_CULLING_AB_READY / REPEATED HISTORICAL CAP-GAP READS CLOSED IN BOTH MAP VIEWS / INDEPENDENT VISUAL QA + ART-DIRECTION ADOPTION + FINAL LEAF/BACKFACE + RUNTIME HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md` and `studio/specialists/08_environment_world_art.md`, then inspected the newest Map, Building, Nature, Object and Weather work plus current Art Direction, Geometry, Materials, VFX, Technical Art, Runtime and Visual QA status.

The previous Environment result remains valid: Map PR #15 replaced the rear/right Nature proxy with exact Nature PR #8 source and independently passed the bounded culling-disabled hierarchy question. Since that pass, the constellation changed materially:

- Visual QA accepted the rear/right hierarchy improvement but reproduced repeated dark tapered-transition losses when the exact historical rear mesh was rendered with normal backface culling, and explicitly blocked normal-culling receiving adoption until an isolated Map A/B existed.
- Technical Art independently carried the same repaired rear-tree topology through current UC and Godot and observed the target-host culling consequence without changing UC.
- Geometry/Nature PR #9 migrated the already-proven tapered-cap index repair into the Nature source generator at exact head `4ddbe66e5c02d22407ef773d5346a2fe6f349a2d`, producing the exact prior Geometry oracle digest rather than leaving the repair as a derived-only candidate.
- Map Materials PR #14 still owns Building receiving lookdev; Map VFX PR #16 owns dense Weather/sapling updates; Map Runtime PR #17 owns immutable Nature proof-material sharing. None of those sibling lanes should be folded into an Environment culling review.
- Object now has a real source-owned manufactured family with active Hard-Surface, Rigging, Animation, Materials, Procedural and Technical-Art lanes, but the current Map still carries Object proxies and there is no higher-priority accepted Environment handoff requiring an Object-source replacement in this activation.

The highest-leverage unoccupied Environment question was therefore the exact one requested by QA:

> Can the source-generated Nature PR #9 rear tree replace only the historical rear-tree mesh inside the already-proven multi-asset Map scene and survive an isolated target-only normal-culling review without changing world form, placement or unrelated scene state?

`axm-create-me` remains coordination-only. Product/evidence implementation lives in `mike-axiom-mir/axm-map-design`; source topology remains in `mike-axiom-mir/axm-nature-design`.

## Selected bounded improvement

Opened stacked PR:

**`mike-axiom-mir/axm-map-design#18 — Environment: prove migrated rear tree in normal-culling receiving scene`**

Branch:

`studio/environment-rear-tree-normal-culling-001`

Exact base:

- Map Environment PR #15 branch: `studio/environment-rear-tree-source-replacement-001`;
- exact base SHA: `03e956475158a59d70cca08b73be23c141e4cb1f`.

Exact final tested Environment head:

`f548f98959bf6769716a6d7c87bac69f9f548389`

PR state after exact checks:

**OPEN / MERGEABLE**

The connector-created PR is not marked draft. No merge, CANON or promotion authority is inferred from that metadata.

## Exact historical -> migrated source lineage

Historical receiving source:

- Nature PR #8 exact head: `a4e5ee011e1d87f47866a7e6c6f4e66f57b6af12`;
- study: `east-rear-tree-neutral-001`;
- source digest: `0adf2cde8cfc355ec21b6fb06c6759b753300164b5f72ba029dc1b8c6d2ef307`;
- historical mesh digest: `d7fc5deaa1c12d1d8c7d7b6dc95bf1e8544ce26140ee2e4a7d2c67a2c4133e48`.

Migrated receiving source:

- Nature Geometry/source-migration PR #9 exact head: `4ddbe66e5c02d22407ef773d5346a2fe6f349a2d`;
- same exact source digest: `0adf2cde8cfc355ec21b6fb06c6759b753300164b5f72ba029dc1b8c6d2ef307`;
- migrated source-generated mesh digest: `aa9d450a78fef722672ea9af0f9aca98b4c1a0ca3705661784f5f61f3e9b6a31`.

The receiving contract proves:

- 390 world vertices historical and migrated;
- 570 triangles historical and migrated;
- **0 changed world vertices**;
- **0 changed per-triangle vertex memberships**;
- exactly **260 triangle rows** change winding;
- exact source digest remains unchanged;
- exact PR #15 target position/grounding/envelope remains unchanged;
- all unrelated source rows remain exact.

This is a source-lineage rebind, not a Map-authored geometry repair.

## Multi-asset scene held exact

The A/B rebuilds the exact PR #15 receiving composition first. Preserved through historical and migrated states:

- procedural seed 29;
- source-owned Building pavilion;
- west source-owned Nature sapling;
- accepted compact-east source-owned Nature tree;
- source-owned Weather field and presentation;
- Object proxies;
- remaining explicit Nature proxies;
- readable path;
- fixed `path_eye` and `elevated_oblique` cameras;
- Environment lighting;
- neutral proof-material family.

Map Materials PR #14, VFX PR #16 and Runtime PR #17 are explicitly not consumed.

## Reusable receiving-observer improvement

The existing pinned Godot Environment observer was extended with one optional target-source culling contract rather than creating a second duplicate renderer.

Historical behavior is unchanged when no review field is present.

For this exact review only:

- target `source:nature:east-rear-tree-neutral-001` -> `CULL_BACK`;
- west sapling -> `CULL_DISABLED`;
- compact east source -> `CULL_DISABLED`;
- other source rows remain unchanged.

This isolation matters because the other Nature bodies still belong to their own downstream rebinding timelines. Enabling culling globally would have mixed unrelated historical topology into the requested rear-tree verdict.

The exact-head inherited Environment workflows remained green after this observer extension, so the optional contract did not silently mutate the established culling-disabled evidence paths.

## Exact structural and target-host evidence

Dedicated workflow:

**`35075073710 — Environment rear-tree normal-culling receiving evidence` — SUCCESS**

Structural result:

**`PASS_REAR_TREE_MIGRATED_SOURCE_RECEIVING_CULLING_STRUCTURE_READY`**

Target-host render result:

**`PASS_TARGET_HOST_REAR_TREE_NORMAL_CULLING_AB_READY`**

All eight exact-head Map workflow families reported for this head completed successfully, including:

- Environment rear Nature source replacement;
- Environment eye-level observation;
- Environment east-tree replacement;
- Environment Building source replacement;
- Environment neutral/peak scene motion;
- Environment composition baseline;
- Procedural environment variation;
- this new rear-tree normal-culling receiving review.

Retained artifact:

- artifact ID: `10437582047`;
- name: `environment-rear-tree-normal-culling-001-f548f98959bf6769716a6d7c87bac69f9f548389`;
- size: `432,343` bytes;
- GitHub digest: `sha256:c95f8ad7744af412274cd04ef8f5c78ac2c3a5cb099b9af46ac994b15ae06565`;
- independently downloaded/rehashed archive: `c95f8ad7744af412274cd04ef8f5c78ac2c3a5cb099b9af46ac994b15ae06565`;
- retained `exact-head.txt`: `f548f98959bf6769716a6d7c87bac69f9f548389`.

The artifact retains exact historical/migrated scene payloads, migration-receiving evidence, both target-host runtime receipts, render-hash relations and all four fixed-camera PNGs.

## Direct receiving-scene visual observation

Both exact historical/migrated A/B pairs are byte-different.

Independent RGB differencing of the retained PNGs reproduces:

- `path_eye`: **7,290 / 792,000 = 0.92045%** changed pixels, bounding box `x=972..1092, y=160..482`;
- `elevated_oblique`: **2,791 / 792,000 = 0.35240%** changed pixels, bounding box `x=842..993, y=279..482`.

The delta is localized to the declared rear/right tree in both views.

Direct inspection shows a concrete Environment receiving improvement:

- the historical `CULL_BACK` rear tree contains repeated dark horizontal slit/gap reads at tapered trunk and branch transitions;
- the source-generated migrated rear tree closes those repeated transition losses;
- the route, pavilion framing, Object proxies, Weather, other Nature bodies and broad world composition remain visually stable.

Scoped Environment observation:

**`PASS_RECEIVING_REAR_TREE_TAPERED_TRANSITION_VISUAL_REPAIR_OBSERVED`**

This is not promoted to independent Visual QA or Art Direction acceptance. Those specialists own the next adoption verdict.

## Why this was the correct Environment move

This lane directly closes the highest-risk receiving blocker already named by Visual QA while preserving department boundaries:

- Nature owns source generation and topology migration;
- Environment owns composition and exact receiving context;
- Technical Art owns UC/transport evidence;
- Visual QA / Art Direction own final visual acceptance;
- Runtime owns cost;
- Materials and VFX retain their separate scene concerns.

It also adds one reusable Map-local observer capability: a receiving scene can isolate a culling state to one exact source asset without globally changing every source mesh. That is useful evidence plumbing, not a universal renderer policy or new UC capability.

## Handoffs

**Visual Observer / QA**

The exact requested normal-culling receiving A/B now exists. Review PR #18 artifact `10437582047`. The Environment observation is that the historical tapered-transition gap/slit reads are removed in both fixed views; independent QA must decide whether this clears the prior normal-culling adoption block and must retain any leaf/backface caveat separately.

**3D Art Director**

If QA clears renderer integrity, recheck the already-positive rear/right silhouette/hierarchy with the migrated source identity. No camera, placement or material retune was introduced here.

**Geometry / Nature**

The exact source-generated migration reaches the Map receiving scene. No Geometry-derived mesh is copied into Map and no Nature-specific repair rule is added to Map or UC.

**Technical Art / UC Integration**

The receiving evidence complements the existing Nature -> UC -> Godot culling proof. UC remains unchanged. The Map proof uses its existing raw source receiving representation and does not replace the UC publication contract.

**Runtime / Optimization**

Runtime PR #17 remains separate. This activation makes no target-device FPS, GPU, memory, draw-call, LOD or streaming claim.

**Materials / LookDev and VFX / Atmosphere**

Building Materials PR #14 and VFX PR #16 remain isolated. Their evidence is neither consumed nor invalidated by this topology-lineage A/B.

**Object**

Object now has increasingly mature source-owned equipment-case/module evidence, but Map Object proxies remain unchanged in this activation. A future Environment replacement should wait for an explicit source-to-slot handoff rather than pulling an Object source into the world merely because one exists.

## Non-claims

This activation does **not** establish:

- independent Visual QA acceptance or Art Direction adoption of the migrated rear tree;
- global outward-normal correctness;
- final two-sided leaf/backface representation;
- final vegetation normals, tangents, UVs, textures or materials;
- deformation/wind quality for the rear tree;
- target-device FPS, GPU time, memory, draw-call, LOD or streaming budgets;
- collision, navigation, traversal or gameplay;
- completion of remaining world proxies;
- final lighting or atmosphere;
- a universal culling policy;
- new Universal Creation functionality;
- CANON, production readiness, game readiness, or Environment/World Art mastery.

## Continuity and coordination boundary

The immediately previous Environment status remains preserved in repository history as blob `c404def450fb4920a27d464f9f50f1cd67b08c44`; it is not silently erased.

`axm-create-me` contains only coordination/status. Product implementation/evidence is Map PR #18; source migration is Nature PR #9; the historical receiving state remains Map PR #15; Building, Weather and Object retain their own repository identities.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.
