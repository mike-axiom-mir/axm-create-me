# 13 — Visual Observer / QA Specialist Status

Date: 2026-09-17

State: **PASS_ANIMAL_POST_SKIN_POSITION_RECONSTRUCTION_RETAINS_OWNER_TANGENT_SPACE_APPEARANCE__RIGHT_REPRESENTATIVE_KEYS / FAIL_ANIMAL_STATIC_TRANSPORTED_DIRECTION_FRAME_VISUAL_EQUIVALENCE__RIGHT_DEFORMED_REPRESENTATIVE_KEYS / BLOCKED_FINAL_ANIMAL_RECONSTRUCTED_DIRECTION_FRAME_ADOPTION__TARGET_RUNTIME_BILATERAL_DENSE_MOTION_ART_PENDING**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/13_visual_observer_qa.md`, prior QA state, and fresh owner-lane PR/evidence state across the constellation.

`axm-create-me` remains **coordination only**. QA changed no Animal source form, Geometry, Rigging, Animation, Materials implementation, Technical-Art implementation, Runtime implementation, Universal Creation product code, or Profession Fabric product code.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Selection / duplication scan

The strongest completed unverified visual claim is the fresh successor on Animal Materials PR #24. Earlier QA already reviewed the owner-frame periodic tangent-space diagnostic at head `e9d5c451b16bd05d2419248f58bef911f83dc1e8`; repeating that lane would add no value.

Current Materials head `35808c9a5a8906a478ee28e5b6a04e34113ac28c` instead asks a new receiving question: with positions, UVs, topology, tangent-space probe, material, lights and cameras held fixed, does Rigging's post-skin position-derived direction-frame reconstruction recover the owner-frame appearance, and is the older static transported NORMAL/TANGENT frame visibly different under deformation?

A fresh Technical Art handoff after the Materials result now adopts the Rigging reconstruction as a bounded receiving contract at exact Technical Art head `a3c062f1271e72598971446b37847598d2433d93`, while explicitly holding target-runtime implementation. QA therefore does not duplicate the Technical Art implementation lane.

## Exact evidence identity

Repository: `mike-axiom-mir/axm-animal-design`

Materials PR: **#24 — `Materials: render deformed tangent-space diagnostic in Godot`**

Exact Materials head: `35808c9a5a8906a478ee28e5b6a04e34113ac28c`

PR state at inspection: **OPEN / DRAFT / UNMERGED / MERGEABLE**.

Dedicated workflow: `35240451689 — Materials Animal transported-frame lookdev` — **SUCCESS** on Python 3.11 + 3.13; real-render job uses Godot 4.7.2 / GL Compatibility / X11 / Mesa llvmpipe.

Retained Materials artifact:

- artifact ID `10505590767`;
- owner archive SHA-256 `1b16d0a47bf355de74bcbc3d6e58aa50b26caf1ea540a0b4cd9f47ee6ffab8a6`;
- independent QA download/re-hash: exact match;
- exact Rigging reconstruction head `81ab44eab2e13bed95187610a476be2b2c4667a7`;
- exact Technical Art source head `4649d144841fbd1f3f43e9c7deb6f37b91fbd93d`;
- exact transported GLB SHA-256 `ecb122e3274929c3d99bc8e29a472aaa2657bcb16b13331a4f1972bb6ec6b493`;
- retained scope: right side only, authored samples `0 / 10 / 20 / 30 / 40`, approximately `0 / +9 / +18 / +9 / 0°`, two cameras (`three_quarter`, `grazing`), four frame modes (`owner_rederived`, `transported_static_skin`, `position_reconstructed`, `position_reconstructed_flipped_w_negative`).

QA independently parsed the retained payload/evidence and recomputed all ten image comparisons from the exact PNGs.

## PASS — reconstruction retains owner-frame tangent-space appearance in retained scope

**`PASS_ANIMAL_POST_SKIN_POSITION_RECONSTRUCTION_RETAINS_OWNER_TANGENT_SPACE_APPEARANCE__RIGHT_REPRESENTATIVE_KEYS`**

Owner-rederived versus position-derived reconstruction is **byte-identical in all 10/10 retained sample/camera comparisons**: zero changed pixels, zero mean RGB delta.

Foreground/silhouette coverage is also exact: coverage XOR is `0` pixels in all four frame modes and all ten retained contexts.

Direct enlarged inspection therefore reproduces the owner claim at bounded visual scope: the position-derived reconstruction restores the exact retained owner-frame tangent-space shading result without introducing a new silhouette break, culling hole, placement shift, or broad render corruption.

## FAIL — static transported direction frame is not visually equivalent under deformation

**`FAIL_ANIMAL_STATIC_TRANSPORTED_DIRECTION_FRAME_VISUAL_EQUIVALENCE__RIGHT_DEFORMED_REPRESENTATIVE_KEYS`**

Neutral closure remains clean: owner versus static transported frame is byte-identical in all `4/4` neutral comparisons at samples `0` and `40` across both cameras.

The deformed states do not retain that equivalence. Independent QA measurement reproduces a visible mismatch in **all 6/6 deformed comparisons**:

- pixels above 1 LSB: **6,653–12,289** per frame;
- maximum RGB-channel delta: **36–47 LSB**;
- relative to exact owner foreground, >1-LSB mismatch coverage: **35.12%–59.04%**.

At peak sample `20` (~`+18°`), the mismatch reaches `8,729 / 18,567` visible foreground pixels in three-quarter and `12,289 / 20,815` in grazing. Enlarged inspection localizes the change to the deformed highlight/shading field around the shaft/elbow rather than geometry or silhouette movement.

This FAIL is specifically a failure of **visual equivalence for the static transported direction frame under these deformed retained keys**. It is not a failure of the source mesh, skin POSITION transport, Rigging reconstruction, or the Materials observer.

## Observer sensitivity remains intact

The deliberate reconstructed tangent-W flip is visible in every retained context. QA independently measures `17,906–21,132` pixels above 1 LSB, approximately `96.44%–97.41%` of visible foreground, with maximum channel deltas `95–99` LSB. The receiver is therefore demonstrably sensitive to direction-frame handedness rather than passing because the shader ignores it.

## Fresh downstream state

Technical Art has now adopted the Rigging-owned post-skin owner-frame reconstruction as a bounded receiving contract at exact head `a3c062f1271e72598971446b37847598d2433d93` with state `PASS_POST_SKIN_OWNER_FRAME_RECONSTRUCTION_CONTRACT_ADOPTED__HOLD_TARGET_RUNTIME_IMPLEMENTATION`.

That handoff does not transfer the current Materials visual PASS into a real target-runtime implementation. The earlier raw static NORMAL/TANGENT skinning divergence remains historical HOLD evidence rather than being erased.

## BLOCKED — final reconstructed direction-frame adoption

**`BLOCKED_FINAL_ANIMAL_RECONSTRUCTED_DIRECTION_FRAME_ADOPTION__TARGET_RUNTIME_BILATERAL_DENSE_MOTION_ART_PENDING`**

Current direct visual proof is only the right-side receiver at five representative authored keys and two fixed cameras. It does not directly prove:

- left-side/bilateral reconstruction equivalence;
- all 41 authored keys or continuous/interpolated shaded playback;
- a real Technical-Art target implementation consuming the new contract;
- production normal-map/tangent-space quality;
- arbitrary cameras, lights or renderers;
- Runtime cost/performance or target-device behavior;
- final Art Direction preference/adoption.

QA requests no source-form, Geometry, Rigging, Animation, Materials, lighting/camera, Runtime, UC or Profession Fabric retune from this result.

## Handoff

Independent QA was returned to Animal Materials PR #24 exact head `35808c9a5a8906a478ee28e5b6a04e34113ac28c` as review **`5238331977`**.

QA authored no repair in the owner repository.

## Explicit non-claims

This activation does **not** establish biological/anatomical correctness; final Animal form; production UV packing/texel density; authored production normal-map quality; bilateral or all-key reconstruction equivalence; continuous target-host playback; target-runtime implementation; Runtime/device acceptance; arbitrary renderer equivalence; final Art Direction acceptance; source adoption; CANON; game readiness; production readiness; or Visual Observer / QA mastery.

## Four-root gate

- **Truth:** exact artifact identity was independently rehashed; the PASS and FAIL are separated and tied to direct retained PNG measurements.
- **Agency / non-domination:** Rigging owns the reconstruction, Technical Art owns transport adoption, Materials owns lookdev, Runtime owns runtime/device behavior, Art owns preference/adoption, and QA does not retune their systems.
- **Continuity:** the old static-transport direction-frame HOLD and the earlier owner-frame Materials baseline remain historical evidence; reconstruction evidence adds a successor path without silently rewriting them.
- **Wisdom before speed:** exact pixel recovery at ten retained views is not promoted into bilateral, dense-motion, runtime or production acceptance.

The four AXM roots remain the merge gate.
