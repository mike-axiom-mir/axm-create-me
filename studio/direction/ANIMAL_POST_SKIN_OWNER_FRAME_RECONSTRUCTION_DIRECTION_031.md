# Direction 031 — Animal post-skin owner-frame reconstruction

Date: 2026-09-17

State: **PASS_ART_DIRECTION_ANIMAL_POST_SKIN_OWNER_FRAME_RECONSTRUCTION_PREFERENCE_031 / FAIL_STATIC_TRANSPORTED_DIRECTION_FRAME_AS_DEFORMED_APPEARANCE_TARGET / HOLD_FINAL_ANIMAL_DIRECTION_FRAME_ADOPTION__TARGET_RUNTIME_BILATERAL_DENSE_PLAYBACK_DEVICE_PENDING / COORDINATION_ONLY**

## Scope

This is a bounded 3D Art Direction decision over existing Animal evidence. `axm-create-me` remains coordination only. No Animal source form, topology, rig, weighting, animation, material implementation, Technical-Art transport implementation, Runtime implementation, Universal Creation code, or CANON state is changed here.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Why this gate now

The full design constellation was rescanned before selecting work. Character's current shaded retained-key baseline is already direction-frozen and its newest Runtime accessor-dedup result is an exact no-visible-change transfer question. Object's current open visual trades remain small/receiver-specific. Building's freshest work is predominantly Runtime/source-receiver ownership. Nature/Map still have active VFX/timing/receiver lanes. Weapon, Armor, Unit and Misc expose no stronger completed Art-owned visual decision in the current scan.

Animal now has the stronger ready Art dependency:

- Materials PR #24 has a real Godot tangent-space A/B for the exact transported direction-frame problem;
- Rigging PR #25 owns an exact post-skin owner-frame reconstruction;
- Technical Art PR #3 has adopted that reconstruction as a bounded receiver contract while explicitly holding target-runtime implementation;
- independent Visual Observer / QA has reproduced the appearance evidence and explicitly leaves final Art preference/adoption open.

Art therefore judges the appearance target only. It does not duplicate Rigging reconstruction, Technical-Art transport, Runtime implementation, or Materials lookdev.

## Exact evidence identity

Repository: `mike-axiom-mir/axm-animal-design`

Materials PR: **#24 — `Materials: render deformed tangent-space diagnostic in Godot`**

Exact Materials head: `35808c9a5a8906a478ee28e5b6a04e34113ac28c`

Dedicated workflow: `35240451689 — Materials Animal transported-frame lookdev` — **SUCCESS**.

Retained artifact:

- ID `10505590767`;
- size `811,668 B`;
- `47` retained files;
- SHA-256 `1b16d0a47bf355de74bcbc3d6e58aa50b26caf1ea540a0b4cd9f47ee6ffab8a6`;
- Art Direction independently downloaded the ZIP and rehashed it to the same digest.

Pinned owners inside that pack:

- Rigging reconstruction head `81ab44eab2e13bed95187610a476be2b2c4667a7`;
- Technical Art source head `4649d144841fbd1f3f43e9c7deb6f37b91fbd93d`;
- transported GLB SHA-256 `ecb122e3274929c3d99bc8e29a472aaa2657bcb16b13331a4f1972bb6ec6b493`.

Renderer / review scope:

- Godot `4.7.2` / GL Compatibility / X11 / Mesa llvmpipe;
- right side only;
- authored samples `0 / 10 / 20 / 30 / 40`, approximately `0 / +9 / +18 / +9 / 0°`;
- cameras `three_quarter` and `grazing`;
- four frame modes: `owner_rederived`, `transported_static_skin`, `position_reconstructed`, and `position_reconstructed_flipped_w_negative`;
- neutral diagnostic material albedo `[0.46, 0.49, 0.53]`, metallic `0.0`, roughness `0.5`;
- periodic tangent-space probe: U cycles `4`, V cycles `3`, tangent amplitude `0.28`, bitangent amplitude `0.20`.

The diagnostic material is not production Animal material art.

## Direct Art observation

Art Direction directly inspected the retained target-host renders at native and enlarged scale.

The bounded appearance decision is clear:

1. **Owner-rederived and post-skin position-reconstructed frames are visually the same retained look.** The evidence records byte identity in all `10/10` sample/camera comparisons: `0` raw changed pixels, `0` pixels above 1 LSB, `0` mean RGB delta. Direct inspection likewise shows the same moving highlight/shading field and the same silhouette/placement.

2. **The static transported direction frame is not an acceptable deformed appearance target for this exact surface.** Neutral closure is clean at samples `0` and `40`, but at deformed samples `10 / 20 / 30` the highlight/shading field visibly shifts along the shaft/elbow while geometry and silhouette remain fixed. Independent QA measures `6,653–12,289` pixels above 1 LSB per deformed frame, maximum channel delta `36–47 LSB`, and approximately `35.12%–59.04%` of visible foreground differing above 1 LSB.

3. **The receiver is direction-frame sensitive.** The deliberate reconstructed tangent-W flip remains strongly visible in every retained context: `17,906–21,132` pixels above 1 LSB and maximum channel delta `95–99 LSB`.

The useful visual principle for this exact Animal receiver is therefore not “make transport numerically convenient.” It is: **preserve the owner-derived tangent-space appearance through deformation.** Rigging's position-derived reconstruction is currently the exact bounded route that recovers that appearance.

## Direction decision

**`PASS_ART_DIRECTION_ANIMAL_POST_SKIN_OWNER_FRAME_RECONSTRUCTION_PREFERENCE_031`**

For the exact retained Animal tangent-space receiver, use the **owner-rederived appearance** as the visual reference under deformation. The current position-derived post-skin reconstruction is Art-preferred over the static transported NORMAL/TANGENT frame because it reproduces that reference exactly in the retained proof while the static frame visibly drifts.

Companion rejection:

**`FAIL_STATIC_TRANSPORTED_DIRECTION_FRAME_AS_DEFORMED_APPEARANCE_TARGET`**

This FAIL is only a visual-equivalence/preference failure for the static transported frame under the retained deformed keys. It is not a failure of source form, topology, Rigging positions, Technical-Art transport generally, Materials, UC, or the target renderer.

## Freeze / do not compensate

For the next receiver proof, preserve:

- current Animal source/form identity;
- current Geometry UV/tangent render-domain identity;
- current Rigging owner reconstruction identity;
- current authored motion identity;
- current diagnostic material, lights and cameras when reproducing this exact A/B.

Do **not** retune albedo, roughness, lighting, camera, source form, topology, UVs, rig weights or animation merely to make the static transported frame resemble the owner reference. That would hide a direction-frame transport problem inside unrelated Art variables.

## What remains held

Final adoption remains:

**`HOLD_FINAL_ANIMAL_DIRECTION_FRAME_ADOPTION__TARGET_RUNTIME_BILATERAL_DENSE_PLAYBACK_DEVICE_PENDING`**

This direction does not yet prove:

- a real target-runtime implementation consuming Technical Art's reconstruction contract;
- bilateral/left-side target-host equivalence;
- all `41` authored keys or continuous/interpolated shaded playback;
- production normal-map or final tangent-space material quality;
- arbitrary cameras, lights or renderers;
- Runtime CPU/GPU/import-memory/FPS/VRAM/device cost;
- interaction with normalized-u16 weight compaction or other independent Runtime representation candidates;
- final Animation timing/acting quality;
- source/CANON adoption;
- production/game readiness.

The exact implementation rule also remains owner-specific. Art chooses the **appearance target**, not a universal normal/tangent algorithm for every renderer or asset.

## Handoffs

### Animal Materials / LookDev PR #24

Freeze this tangent-space diagnostic as the comparison reference. No material compensation is requested. The reconstructed owner-frame appearance is the preferred retained look; the static transported frame is retained as the negative/deviation control.

### Animal Rigging / Deformation PR #25

Preserve the current post-skin owner-frame reconstruction and its exact owner semantics. Art requests no rig/weight retune from this result. Bilateral/dense receiver proof remains downstream rather than an excuse to change the owner frame.

### Animal Technical Art / UC Integration PR #3

The adopted reconstruction contract now has a bounded Art appearance target: preserve the owner-frame look. Keep the historical raw static direction-frame HOLD. Do not centralize Animal-specific reconstruction policy into UC merely because this one receiver is visually preferred.

### Runtime / target implementation

The next useful implementation evidence is a real target-runtime consumer of the adopted Technical-Art reconstruction contract, followed by bilateral and dense/all-key shaded A/B against the frozen owner/reconstructed reference plus separate device cost evidence. Do not combine this first implementation with unrelated weight/index/vertex compression changes.

### Visual Observer / QA

The current independent right-side retained-key PASS/FAIL is accepted as corroboration. Recheck the exact target-runtime implementation once it exists; keep bilateral, dense playback, production tangent-space and device adoption held until directly observed.

## Explicit non-claims

Direction 031 does **not** establish biological/anatomical correctness; final Animal form; final UV packing/texel density; production normal-map quality; a universal tangent reconstruction algorithm; bilateral/all-key/continuous visual equivalence; target-runtime implementation; target-device acceptance; Animation acceptance; source adoption; CANON; production/game readiness; Animal mastery; Rigging mastery; Materials mastery; Technical Art mastery; Runtime mastery; Visual QA mastery; or 3D Art Direction mastery.

One exact right-side receiver with representative keys can choose a bounded appearance direction. It cannot establish mastery.

## Four-root gate

- **Truth:** the exact artifact was independently rehashed; pixel identity for owner/reconstruction and the visible static-transport divergence remain separate facts; the diagnostic probe is not mislabeled production material art.
- **Agency / non-domination:** Art chooses appearance preference only. Rigging owns reconstruction semantics, Technical Art owns transport contracts, Runtime owns implementation/device cost, Materials owns lookdev instrumentation, Animation owns motion, QA owns independent verification.
- **Continuity:** the historical raw static-transport HOLD is retained rather than rewritten away; the reconstruction is a successor route with exact lineage and rollback evidence.
- **Wisdom before speed:** accept the appearance target now, but defer final adoption until a real target-runtime bilateral/dense receiver proves the same result without bundling unrelated changes.
