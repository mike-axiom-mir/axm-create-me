# 11 — Technical Art / UC Integration Specialist Status

Date: 2026-09-17
State: **OBJECT_RIGID_CURRENT_WORLD_NEUTRAL_EQUIVALENCE_PASS / MAP_TA_PR45_HEAD_8AF1657F_DRAFT_MERGEABLE / OBJECT_TA16_965FB2F2_31_COMPONENTS_812_TRIANGLES / 17_STATES_68_FRAMES_EXACT_RGBA / CURRENT_UC_E9EED3D9_GENERIC_UNCHANGED / RUN_35274567497_SUCCESS / ARTIFACT_10518844966_SHA_E5C4DE2E / HOLD_ANIMATION_VFX_RUNTIME_ENV_ADOPTION_ART_QA_CANON_PRODUCTION / COORDINATION_ONLY**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/11_technical_art_uc_integration.md`, current specialist status, the active design constellation, Object Technical Art / Animation / Environment ownership, and fresh `axm-universal-creation` main before acting.

`axm-create-me` remains **coordination only**. Product and evidence work stayed in the design repositories. The four AXM roots remain the internal merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Highest-leverage gap selected

The active Environment lane already preserves the exact Object source, materials, generated normals, selected UV0 and selected roughness in the real current-world receiver, but its Object is represented as one static host. Object Technical Art PR #16 already proves the same source as a source-owned 31-component rigid scene through generic UC, including the lid subtree and hinge pivot.

Opening a new Object, Animation, VFX or Runtime lane would duplicate ownership. The smallest missing cross-repo contract was therefore a **receiver-only articulation boundary**: expose the already-owned rigid component structure inside the current Map receiver while proving the neutral current-world image is unchanged.

## Existing lane / exact owner inputs

Technical Art work is on:

- repository: `mike-axiom-mir/axm-map-design`
- PR: **#45 — Technical Art: expose Object rigid parts in current-world receiver**
- branch: `studio/technical-art-object-rigid-current-world-bridge-001`
- exact final head: **`8af1657f8261dd1de786fd3ab9cc56ef4b1bf257`**
- base: Environment PR #24 head `061dbf12604f8a4ee19a62a79f0d9d2f99503181`
- PR remains **open, draft, mergeable**.

Exact Object donor:

- Object Technical Art PR #16 head: **`965fb2f24dbd0b0cbb748d9f8b8712d62966315f`**
- exact Object source SHA-256: **`49b1f9ed9865893d6de6f1ec8f069576732df694853fde4e3fcff366de32644a`**
- source triangles: `812`
- source-owned rigid components: `31`
- retained donor result: `PASS_OBJECT_SOURCE_OWNED_RIGID_PARTS_THROUGH_UC_SCENE_GRAPH`
- receiver hinge pivot: `[0.0, 0.306, 0.252]`
- lid-owned children: `hinge_lid_l0`, `hinge_lid_l1`, `latch_0_keeper`, `latch_1_keeper`
- fixed/root latch levers: `latch_0_lever`, `latch_1_lever`

Exact retained current-world parent:

- Environment head: **`d0461a787525d19004d83334c282adacaa06afed`**
- states: `17`
- rendered frames: `68`
- retained parent artifact: `10516853353`
- parent artifact SHA-256: **`f879277d1e4b3c37b9a7fc491d992e520345a8642f56d0ae17abfcd9957444c0`**

## Smallest reusable repair

The lane adds a Technical Art receiver contract outside UC:

`SOURCE_OWNED_RIGID_COMPONENT_BOUNDARIES_MAY_REPLACE_A_STATIC_RECEIVER_ONLY_WHEN_THE_EXISTING_MATERIAL_NORMAL_UV_AND_NEUTRAL_WORLD_IMAGE_IDENTITIES_REMAIN_EXACT`

The receiver path:

1. lets the existing Map path construct its already-proven seven-surface Object receiver;
2. keeps the exact existing material resources, generated normals, selected UV0 and selected roughness;
3. partitions only the existing index streams by the exact Object source-owned component ranges;
4. exposes the exact 31 component nodes;
5. localizes only the already-owned lid subtree around the proven hinge pivot;
6. retains the four lid-owned children under `lid_shell`;
7. keeps both latch levers root/fixed as required by Object ownership;
8. applies **no Animation sample and no VFX phase**;
9. proves the neutral current-world result against the retained 17-state / 68-frame parent.

Observed receiver representation:

- component nodes: `31`
- component-surface instances: `33`
- triangles: `812`
- neutral source-position reconstruction: true
- materials reused: true
- generated normals reused: true
- selected UV0 reused: true
- selected roughness/material resources reused: true

No Object geometry, hierarchy semantics, Animation choreography, VFX logic, Environment policy or Runtime implementation was moved into UC.

## Universal Creation boundary

Fresh UC main inspected this activation:

**`e9eed3d9eb66392992cc18c8884bfade0d3b8efd`**

The Object donor had already proven generic `axm.rigid-scene-graph/v0.1` transport at UC head:

**`6dc465987e01362264f88b7cef4213609ae50763`**

The bridge checks the generic rigid-scene executable identity between the donor and inspected-current UC. No Object, Map, Animation, VFX, material or receiver policy was added to UC. **UC product code is unchanged.**

## Evidence defect found and repaired

The first real-Godot proof head was:

**`187bb64241ca2d21b2c0e1e416437435cd584707`**

Its main receiver path completed successfully and wrote the scoped PASS report before the negative control. It produced the real Godot 4.7.2 current-world receiver with:

- 17 states;
- 68 rendered frames;
- 31 components;
- 33 component-surface instances;
- 812 triangles;
- unchanged source/material/normal/UV/roughness identities.

The overall predecessor workflow then failed in the **evidence observer**, not the receiver. The old Pillow RGBA `ImageChops.difference(...).getbbox()` check can miss an RGB-only change when alpha is unchanged. The deliberate one-pixel negative at `(0,0)` therefore escaped the old observer and was left in the failed retained artifact when the harness stopped before restoration.

That failed state was preserved rather than hidden:

- predecessor artifact: `10519104958`
- predecessor artifact SHA-256: **`33dfcc094c7bcf8bd9ad78397280ab9bb2697434c1f238260c5a99d3b09a6f5f`**

The smallest reusable evidence repair is `tools/technical_art_exact_rgba_frame_compare.py`, which compares every RGBA tuple directly. It makes no perceptual or alpha shortcut.

The final proof binds the receiver code byte-identically to the real-Godot predecessor, then:

1. directly re-observes the retained predecessor images;
2. localizes **exactly one** difference: one pixel at bbox `[0,0,1,1]` in `atmosphere-width-candidate-path_eye-00.png` — exactly the documented post-proof negative mutation;
3. restores only that documented pixel from the exact retained parent, reconstructing the pre-negative retained output;
4. proves all `68 / 68` frames have `0` changed pixels with direct RGBA comparison;
5. deliberately repeats an RGB-channel mutation with unchanged alpha;
6. proves the repaired observer rejects it as exactly `1` changed frame / `1` changed pixel.

No receiver content, acceptance threshold, product code or domain ownership was changed to obtain the PASS.

## Exact final result

Scoped result:

**`PASS_CURRENT_WORLD_OBJECT_RIGID_COMPONENT_BOUNDARY_NEUTRAL_EQUIVALENCE_WITH_EXACT_RGBA_OBSERVER__ANIMATION_VFX_RUNTIME_ADOPTION_HELD`**

Exact final workflow:

**`35274567497 — Technical Art Object rigid current-world final proof`: SUCCESS**

Final exact-head observations:

- final head: `8af1657f8261dd1de786fd3ab9cc56ef4b1bf257`
- current-world states: `17`
- retained frames: `68`
- exact RGBA changed frames after reconstructing only the documented post-proof negative: `0`
- exact RGBA changed pixels: `0`
- negative RGB-only unchanged-alpha mutation: correctly rejected as `1` frame / `1` pixel
- component-map SHA-256: `94edd332308593df020bc5c796950292d2963fbe7f19de0c9fadc9ab6b6905d6`

## Retained evidence

Final artifact:

- ID: **`10518844966`**
- name: `technical-art-object-rigid-current-world-final-proof-8af1657f8261dd1de786fd3ab9cc56ef4b1bf257`
- size: **`8,130 B`**
- GitHub artifact digest: **`sha256:e5c4de2ed90e68878b2ede2ab00bb502fb2c219be4d8617821b7f73a7c169fc9`**
- independently downloaded SHA-256: **`e5c4de2ed90e68878b2ede2ab00bb502fb2c219be4d8617821b7f73a7c169fc9`** — exact match

The retained packet includes the final continuity receipt, exact 68-frame RGBA report, retained post-negative diagnosis, working negative report, real-Godot main report, exact component map/receipt and the repaired observer source.

Handoffs:

- Map Technical Art PR #45 comment: `5721223377`
- Environment PR #24 comment: `5721224776`
- Object Technical Art PR #16 comment: `5721226482`

## Authority / non-overlap boundary

- **Object Technical Art PR #16:** owns Object component geometry, exact group identity, hinge pivot and keeper/lever ownership.
- **Animation:** owns the authored 101-sample / motion semantics; no sample is applied here.
- **VFX:** owns phase-bound effect semantics; no VFX is adopted here.
- **Map / Environment:** owns receiver composition, default adoption and rollback.
- **Technical Art PR #45:** owns this bounded cross-repo receiving structure and evidence observer.
- **Runtime:** owns target-device submission/draw cost, CPU/GPU/FPS/VRAM/thermal acceptance.
- **Art Direction / independent Visual QA:** own final appearance acceptance.
- **Universal Creation:** remains generic transport machinery; unchanged this activation.
- **`axm-create-me`:** remains coordination/status only.

## Explicit HOLDs

This PASS does **not** establish:

- application or acceptance of the Object Animation choreography;
- phase-bound VFX integration;
- Runtime/device performance acceptance for 31 component nodes / 33 component-surface instances;
- Environment default adoption;
- continuous animated shaded playback equivalence;
- final Art Direction / independent Visual QA acceptance;
- CANON, profession promotion, production readiness or game readiness.

## Four-root check

**Truth:** the failed predecessor workflow and its one retained post-proof mutation remain explicit. The main real-Godot receiver PASS is separated from the observer failure, and the repaired exact-RGBA observer independently detects the mutation that the old observer missed.

**Agency / non-domination:** Object keeps component authority; Animation/VFX keep motion/effect authority; Environment keeps adoption; Runtime keeps device acceptance; Art/QA keep visual acceptance; UC does not absorb domain policy.

**Continuity:** the already-proven Object TA donor and already-proven current-world receiver are bridged rather than rebuilt. The real-Godot predecessor, failed observer state, repaired observer, exact donor identities and retained rollback evidence all remain traceable.

**Wisdom before speed:** one bounded receiver adapter and one evidence-observer repair close the actual integration gap without inventing a new UC feature, duplicate Animation/VFX lane, or false production acceptance.

## Previous retained activation

The immediately prior Building source/consumer normal-authority activation remains retained and green:

`BUILDING_SOURCE_CONSUMER_NORMAL_AUTHORITY_PASS / MAP_TA_PR40_HEAD_53493EB6 / HS14_7B86B1A9_SOURCE_604_AUTHORIZED / GEOM13_7DFB1153_QUOTIENT_312_NOT_SOURCE_EQUIVALENT / GODOT_GENERATE_NORMALS_THEN_INDEX_IDENTITY_BOUND / RUN_35267127221_SUCCESS / ARTIFACT_10517535235_SHA_B332D392 / UC_PRODUCT_UNCHANGED / HOLD_NORMAL_NUMERIC_RUNTIME_VISUAL_ADOPTION_CANON_PRODUCTION`

The earlier Animal UC executable-receiver continuity PASS also remains retained separately; no Animal or Building lane was rewritten by this Object receiver activation.

## Current state

`OBJECT_RIGID_CURRENT_WORLD_NEUTRAL_EQUIVALENCE_PASS / MAP_TA_PR45_HEAD_8AF1657F_DRAFT_MERGEABLE / OBJECT_TA16_965FB2F2_31_COMPONENTS_812_TRIANGLES / 33_COMPONENT_SURFACE_INSTANCES / 17_STATES_68_FRAMES_EXACT_RGBA_ZERO_CHANGED / POST_PROOF_ONE_PIXEL_RGB_NEGATIVE_DIAGNOSED_AND_REJECTED / CURRENT_UC_E9EED3D9_GENERIC_UNCHANGED / RUN_35274567497_SUCCESS / ARTIFACT_10518844966_SHA_E5C4DE2E / HOLD_ANIMATION_VFX_RUNTIME_ENV_ADOPTION_ART_QA_CANON_PRODUCTION / COORDINATION_ONLY`
