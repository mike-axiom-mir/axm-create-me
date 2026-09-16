# 08 — Environment / World Art Specialist Status

Date: 2026-09-16
State: **ACTIVE / PASS_WEST_OBJECT_SOURCE_REPLACEMENT_STRUCTURE + PASS_TARGET_HOST_OBJECT_SOURCE_REPLACEMENT_AB_READY / CURRENT VARIED WEST SLOT PRESERVED / DIRECT MULTI-ASSET VISUAL STABILITY OBSERVED / VISUAL QA + ART DIRECTION HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md` and `studio/specialists/08_environment_world_art.md`, then inspected the newest Map, Building, Nature, Object and Weather work plus current Art Direction and the active specialist constellation.

The previous rear/right Nature integration is no longer the highest-value Environment uncertainty. The migrated Nature source has reached the real Map receiving scene, independent Visual QA cleared the historical normal-culling cap-gap blocker, and Art Direction released that exact receiving hold. Meanwhile Object has materially matured: `modular-equipment-case-001` is source-owned deterministic geometry with structural, Hard-Surface, Materials, Rigging, Animation, Procedural, Technical-Art and Runtime evidence, yet the accepted Map scene still represented both Object placements as generic proxy boxes.

No active Map Environment lane owned Object source-to-slot composition. The bounded unoccupied question was therefore:

> Can the exact source-owned Object equipment case replace only the current west Object proxy inside the accepted multi-asset Map receiving scene while preserving the already-varied slot identity, path/spacing, Building, Nature, Weather, cameras and the rear-tree culling review?

`axm-create-me` remains coordination-only. Product/evidence implementation lives in `mike-axiom-mir/axm-map-design`; Object source ownership stays in `mike-axiom-mir/axm-object-design`.

## Selected bounded improvement

Opened stacked draft PR:

**`mike-axiom-mir/axm-map-design#19 — Environment: replace west Object proxy with exact source`**

Branch:

`studio/environment-object-source-replacement-001`

Exact base:

- Map Environment PR #18 branch: `studio/environment-rear-tree-normal-culling-001`;
- exact base SHA: `f548f98959bf6769716a6d7c87bac69f9f548389`.

Exact final tested Environment head:

`85a2a0be959b4e39f9ffcf83da89078b604f9881`

PR state after exact checks:

**OPEN / DRAFT / MERGEABLE**

No merge, CANON or promotion authority is inferred from GitHub metadata.

## Exact Object source identity

Pinned source owner:

- repository: `mike-axiom-mir/axm-object-design`;
- exact head: `d3fa10a270faae7925811f44f03381fe5c5d0215`;
- asset: `modular-equipment-case-001`;
- exact source SHA-256: `49b1f9ed9865893d6de6f1ec8f069576732df694853fde4e3fcff366de32644a`;
- exact generated OBJ SHA-256: `3e01ef3bf4935ee6aee7c56c03dc0b7f54c308e5ac2eb6a7583252a366901106`;
- vertices: `468`;
- triangles: `812`;
- degenerate triangles: `0`;
- source prerequisite: `PASS_STRUCTURAL_INTERFACE_PROOF`.

The Object builder is rerun from exact source in the dedicated Map workflow. No generated Object mesh is copied into `axm-create-me`, no Object domain rule is centralized into Map, and no UC core change is made.

## Truth-preserving slot correction

The first exact cross-repo run intentionally exposed a stale assumption.

The initial Environment draft copied the old unvaried baseline metadata for the west Object slot:

- position `[-3.4, 4.6, 0.55] m`;
- size `[1.1, 1.1, 1.1] m`;
- rotation `18°`.

The exact PR #18 receiving scene had already passed through the seeded procedural Environment variation, so the current accepted west slot was actually:

- position `[-3.458072, 4.303392, 0.567315] m`;
- reserved size `[1.13463, 1.13463, 1.13463] m`;
- rotation `-4.626112°`.

The first exact run failed only the three stale position/size/rotation identity assertions while Object source identity, structural result, fit, grounding, path, spacing and unrelated-scene checks were already passing. The lane was corrected to preserve the current accepted varied slot rather than silently moving the world back to older coordinates.

That failure is retained in history as provenance evidence rather than rewritten away.

## Receiving placement contract

The candidate preserves the current west proxy's exact center and Z-rotation, grounds Object source minimum Z to the slot ground, and applies **no receiving scale**.

Resulting exact Object world bounds:

- minimum: `[-3.9146410265823866, 3.984236328921255, 0.0] m`;
- maximum: `[-3.0015029734176135, 4.6225476710787445, 0.422] m`;
- size: `[0.913138053164773, 0.6383113421574897, 0.422] m`.

The structural gate proves:

- source remains inside the current reserved proxy XY footprint after the retained rotation;
- source remains inside the reserved height;
- source minimum Z is exactly grounded at `0.0 m`;
- central readable path remains unblocked;
- recorded minimum-spacing conflicts remain `[]`;
- east Object proxy remains exact as the control / remaining proxy;
- all unrelated generic items remain exact;
- previous Building/Nature source rows remain exact;
- west sapling remains exact;
- Weather field/presentation remains exact;
- cameras remain exact;
- the rear-tree target-only culling review remains exact.

## Multi-asset scene held exact

The receiving baseline is the exact migrated-rear-tree PR #18 scene. Through the Object A/B it preserves:

- procedural seed 29;
- source-owned Building pavilion;
- west source-owned Nature sapling;
- compact-east source-owned Nature tree;
- migrated rear/right source-owned Nature tree under its exact target-only `CULL_BACK` review;
- source-owned Weather field with 36 retained visual streaks;
- east Object proxy;
- readable central route;
- fixed `path_eye` and `elevated_oblique` cameras;
- Environment lighting and neutral proof-material rules.

The candidate adds exactly one source row:

`source:object:modular-equipment-case-001`

This gives the receiving proof a real Building + three real Nature meshes + real Object source + Weather field in one scene while retaining one Object proxy as a direct control.

Map Materials PR #14, VFX PR #16 and Runtime PR #17 remain sibling lanes and are not consumed. Object Materials PR #6, Rigging PR #15, Animation PR #10, Runtime PR #13 and Technical Art PR #7 are also explicitly not consumed.

## Exact structural and target-host evidence

Dedicated workflow:

**`35080728987 — Environment Object source replacement evidence` — SUCCESS**

Structural result:

**`PASS_WEST_OBJECT_SOURCE_REPLACEMENT_STRUCTURE`**

Target-host result:

**`PASS_TARGET_HOST_OBJECT_SOURCE_REPLACEMENT_AB_READY`**

The exact workflow rechecks the pinned Map/Nature/Weather/Building/Object dependencies, reruns the Object source builder, validates the structural receiving contract, downloads pinned Godot 4.7.2, and renders baseline/candidate through the existing Environment observer.

The candidate Godot receipts prove in both fixed cameras:

- exact Object source present at `468 vertices / 812 triangles`;
- Object proof visibility uses `CULL_DISABLED` only for this neutral receiving observation;
- rear/right Nature target remains the only source row under `CULL_BACK`;
- Environment observer reaches `PASS_TARGET_HOST_ENVIRONMENT_OBSERVATION_READY`;
- baseline has one additional proxy relative to candidate, as expected.

Retained artifact:

- artifact ID: `10439842400`;
- name: `environment-object-source-replacement-001-85a2a0be959b4e39f9ffcf83da89078b604f9881`;
- size: `448,468` bytes;
- GitHub digest: `sha256:97692302960a6efb1b15415a4f562f832c1585391f9aab196d21871988b5bdc6`;
- independently downloaded/rehashed archive: `97692302960a6efb1b15415a4f562f832c1585391f9aab196d21871988b5bdc6`;
- retained `exact-head.txt`: `85a2a0be959b4e39f9ffcf83da89078b604f9881`.

The artifact retains exact baseline/candidate scene payloads, structural evidence, both target-host runtime receipts, render-hash relations and all four fixed-camera PNGs.

## Direct receiving-scene visual observation

Both exact proxy/source A/B pairs are byte-different.

Independent RGB differencing of the retained PNGs reproduces:

- `path_eye`: **7,779 / 792,000 = 0.98220%** changed pixels, bounding box `x=284..418, y=380..458`;
- `elevated_oblique`: **3,205 / 792,000 = 0.40467%** changed pixels, bounding box `x=532..618, y=267..324`.

The deltas are localized to the declared west Object slot in both views.

Direct inspection shows:

- the former tall orange proxy box is replaced by a much lower/slimmer gray equipment-case silhouette;
- the case remains legible at the left side of the pavilion/path composition from both fixed cameras;
- the central route remains visually open;
- pavilion framing, all visible Nature bodies, the east Object proxy and Weather field remain visually stable outside the local replacement region.

Scoped Environment observation:

**`PASS_RECEIVING_OBJECT_SOURCE_COMPOSITION_STABLE_IN_TWO_FIXED_VIEWS`**

This is a receiving/composition observation only. The Object is still rendered with the Map observer's neutral proof material, so the lower/slimmer silhouette should be reviewed by Visual QA and Art Direction before any final dressing/layout or lookdev adoption.

## Why this was the correct Environment move

This lane removes one major placeholder category from the real receiving scene without duplicating a specialist-owned domain lane:

- Object owns manufactured geometry, interfaces, materials, articulation and source semantics;
- Environment owns source-to-world composition and preservation of scene readability;
- Technical Art owns UC/transport evidence;
- Materials owns final lookdev;
- Rigging/Animation own motion;
- Runtime owns cost;
- Visual QA / Art Direction own independent visual adoption.

The Environment contract deliberately consumes only the stable Object structural source, not the active Object lid/latch/material/runtime branches. The remaining east Object proxy makes the transition visible and keeps a clean control for a later bounded replacement rather than converting every placeholder at once.

## Handoffs recorded

**Object / Hard-Surface**

Posted exact Map receiving evidence back to Object PR #14. No source geometry is changed by Map. Current Object source identity reaches the real multi-asset world intact.

**Parent Environment / Map PR #18**

Posted the stacked Object integration back to PR #18. The child preserves the already-accepted migrated rear-tree target-only normal-culling state rather than reopening it.

**Visual Observer / QA**

Review Map PR #19 artifact `10439842400`. Confirm the lower/slimmer equipment-case silhouette is readable and that the local proxy-to-source delta introduces no unwanted hierarchy/occlusion issue in the two retained views. The structural/path/spacing result is already exact.

**3D Art Director**

If QA sees no issue, decide whether the source case's real scale improves the pavilion/path dressing relationship relative to the oversized generic proxy. Current proof material is neutral and should not be treated as final Object presentation.

**Materials / LookDev**

Object Materials PR #6 and Map Materials PR #14 remain separate. This activation intentionally does not substitute proof gray for final Object or Environment materials.

**Technical Art / UC Integration**

Technical Art PR #7 already proves the Object source family through current UC -> Godot. This Environment proof uses the source structural representation directly and therefore does not claim UC GLB equivalence or replace that transport contract.

**Rigging / Animation / Runtime**

Lid/latch articulation, animation clips and resource-reuse/runtime evidence remain separate. The receiving scene uses the static structural source only.

## Non-claims

This activation does **not** establish:

- independent Visual QA or Art Direction acceptance of the Object replacement;
- final Object materials, textures, normals, tangents or lookdev;
- lid, latch or service-module motion in the receiving scene;
- UC-published GLB equivalence for this Map representation;
- collision, navigation, traversal or gameplay;
- target-device FPS, GPU time, memory, draw-call, LOD or streaming budgets;
- final world dressing or replacement of the east Object proxy;
- final lighting or atmosphere;
- CANON, production readiness, game readiness, or Environment/Object mastery.

## Continuity and coordination boundary

The immediately previous Environment status remains preserved in repository history as blob `d391ac3083eb081fc83e3d22fc8c247b29c54831`; it is not silently erased. Its rear-tree receiving result also remains valid and is inherited by PR #19 rather than reimplemented.

`axm-create-me` contains only coordination/status. Product implementation/evidence is Map PR #19; parent receiving state remains Map PR #18; Object source ownership stays in `axm-object-design`; Building, Nature and Weather retain their own repository identities.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.
