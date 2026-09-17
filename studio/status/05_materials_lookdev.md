# 05 Materials / LookDev Specialist — Status

Date: 2026-09-18
State: **PASS_OBJECT_TA_CORRECTED_TRANSPORT_MATERIAL_CULL_COHERENCE / OBJECT_MATERIALS_PR6_HEAD_2F92FF49_DRAFT_UNMERGED / TA_PR16_7FA10BFF_EXACT_CURRENT_UC_GLBS / CORRECTED_2PX_VS_UNADAPTED_262120PX_AGGREGATE_CULL_DELTA / HOLD_SOURCE_ADOPTION_RUNTIME_ART_QA_CANON_PRODUCTION / COORDINATION_ONLY**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/05_materials_lookdev.md`, the live Materials status, current Art Direction / Visual QA / Technical Art / Geometry / Hard Surface coordination, and the fresh design-constellation state before acting.

`axm-create-me` remains **coordination only**. Product/evidence implementation stayed in the already-open Object Materials PR #6; no duplicate Materials lane was opened.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The immediately preceding Materials state remains exact and rollbackable at blob **`f8864b347c91a6a4fd49817d20c22cec6500328d`**. It records the Animal bilateral tangent-space seam/filter PASS at exact Materials head `5240e905...`; that result remains historical and is not silently rewritten.

## Fresh constellation / duplicate-lane scan

Animal does not justify another Materials pass by cadence. Its exact bilateral seam/filter packet already proves all 40 Geometry/Rigging owner-frame contexts and explicitly waits for either a concrete Art/QA defect or a Technical-Art-owned bilateral transport successor.

Building still waits on a Technical-Art-owned material-bearing GLB / exact UV-material-image transport identity before Materials can usefully extend its serialized review-texture chain.

Object returned the strongest fresh Materials-owned trigger. The earlier Materials winding receiver at head `ad1353d11...` was intentionally receiver-local: it compared Geometry owner order against a local reversed-order control under a direct source-to-host review map. Independent QA and Art Direction correctly held production adoption until Technical Art proved the real Object -> current UC/glTF -> Godot transport convention.

Technical Art PR #16 has now supplied that missing exact-path proof at head **`7fa10bff981e49c9ea3396b83c4c6d731a90d146`**. It proves the source->UC coordinate map has determinant `-1`, applies one parity correction to all `812` already exterior-authorized triangles, publishes exact corrected/unadapted current-UC GLBs, and distinguishes the resulting imported index orientation in real Godot. Art Direction explicitly leaves final rendered production-material/culling coherence to Materials / Art / independent QA.

That made the highest-leverage unoccupied Materials question:

> Does the exact Technical-Art parity-corrected current-UC GLB remain visually coherent under the existing Object material family and ordinary backface culling, compared with the exact unadapted TA negative?

## Existing Materials lane advanced

Repository: `mike-axiom-mir/axm-object-design`

PR #6 — `Materials: prove functional surface separation on case + module`

Branch: `studio/materials-object-functional-surface-001`

Exact tested Materials head:

**`2f92ff49e1099068a8e21b358b9abdede5e0f971`**

PR #6 remains **open / draft / unmerged**. At the post-proof metadata check GitHub reported it not currently mergeable. Materials did not merge, rebase, retarget, force-update, or treat mergeability metadata as authority.

## Exact owner inputs retained

Technical Art owner:

- PR #16 exact head **`7fa10bff981e49c9ea3396b83c4c6d731a90d146`**;
- owner result `PASS_OBJECT_GEOMETRY33_SOURCE_EXTERIOR_TO_CURRENT_UC_GLTF_PARITY_BRIDGE_READY`;
- source->UC position map `[x,y,z] -> [x,z,y]`;
- transform determinant **`-1`**;
- corrected path winding reversals: **`812`**;
- unadapted negative winding reversals: **`0`**;
- corrected GLB SHA-256 **`c3326180d7626b224e16d372c2ff5f6fe47a6c9d13241d8225cea7629e58bd83`**;
- unadapted negative GLB SHA-256 **`708926421688fbc9cc727aadb21023b4e543b174ac1434fd5387d732c2d498a2`**.

Upstream owner identities remain separately pinned:

- Geometry historical orientation candidate head **`606d8189a3bf4502141d8038f08d35d421829dde`**;
- Hard Surface exterior-intent head **`77a4058b305fab7fd04dab94781b9460f089727e`**;
- Universal Creation exact donor head **`7be1a28c43a88c7e40f7d0c039aefd753d5e70d9`**;
- source SHA-256 **`49b1f9ed9865893d6de6f1ec8f069576732df694853fde4e3fcff366de32644a`**;
- existing self-authored Object material-profile SHA-256 **`dc200229d6c25fa84063aa51f66103abc022efa54b2167e4432a5b47fc40360c`**.

Materials did not copy Technical Art's parity algorithm into product logic. The dedicated workflow checks out the exact TA owner head and rebuilds its exact GLBs from exact Geometry / Hard Surface / UC donors, then Materials consumes the resulting bytes.

## Bounded improvement — exact TA transport under existing material family

New bounded contract:

`lookdev/object_rigid_shell_transport_material_lookdev_001.json`

New fail-closed verifier:

`tools/verify_object_rigid_shell_transport_material_lookdev.py`

New real Godot receiver:

`lookdev-proof/rigid_shell_transport_material_observe.gd`

The existing Object scalar-PBR family stays frozen. No albedo, metallic or roughness values changed. No UV or texture was introduced. Materials applies those existing role-bound values as receiver-local material overrides to the exact imported TA GLBs without editing GLB bytes.

Three fixed review contexts are retained:

- `front_service`;
- `three_quarter`;
- `rear_hinge`.

For each context the receiver renders:

1. TA parity-corrected GLB + lit backface culling;
2. same corrected GLB + lit two-sided material;
3. TA unadapted negative GLB + lit backface culling;
4. same unadapted GLB + lit two-sided material;
5. corrected GLB + unshaded two-sided spatial control;
6. unadapted GLB + unshaded two-sided spatial control.

The unshaded two-sided pair is the spatial identity control. It prevents a culling/material conclusion from being manufactured by a different projected shape. The lit backface-vs-own-two-sided comparisons then ask only which exact transport is coherent under the existing material receiver.

A deliberate contract negative mutates the pinned Technical Art owner head and is required to fail closed.

## Exact workflow / real target-host result

Dedicated workflow:

**`35286641818 — Object material rigid-shell transport lookdev`**

Result: **SUCCESS** on Python 3.11 and Python 3.13.

Both lanes passed the complete Object suite, exact owner rebuild, exact TA current-UC GLB reproduction, Materials payload validation and owner-head negative. The Python 3.11 lane additionally rendered and verified the real target-host comparison.

Pinned receiver:

**Godot 4.7.2 stable / GL Compatibility / X11 / Mesa llvmpipe (LLVM 20.1.2, 256 bits)**.

Scoped Materials result:

**`PASS_TA_CORRECTED_TRANSPORT_CLOSER_TO_OWN_TWO_SIDED_REFERENCE`**

Unshaded cull-disabled corrected-vs-unadapted spatial control:

- `front_service`: **0 raw changed pixels**;
- `three_quarter`: **0**;
- `rear_hinge`: **0**.

TA parity-corrected backface-cull vs its own lit two-sided reference, pixels above 1 LSB:

- `front_service`: **0**;
- `three_quarter`: **1**;
- `rear_hinge`: **1**;
- aggregate: **2**.

TA unadapted negative backface-cull vs its own lit two-sided reference:

- `front_service`: **120,130**;
- `three_quarter`: **85,464**;
- `rear_hinge`: **56,526**;
- aggregate: **262,120**.

Corrected-vs-unadapted lit backface A/B:

- `front_service`: **120,220** pixels above 1 LSB;
- `three_quarter`: **85,465**;
- `rear_hinge`: **56,527**;
- aggregate: **262,212**.

The spatial control is therefore exact while the ordinary-cull result strongly discriminates the two transport variants. For this exact current-UC path and this existing Object material family, TA's parity-corrected transport closes almost perfectly onto its own two-sided lit reference; the unadapted negative does not.

Small residual corrected differences of `1` pixel in two views are retained as renderer observations rather than rounded away.

## Retained evidence

Artifact:

**`10524537275`**

Name:

`object-material-rigid-shell-transport-2f92ff49e1099068a8e21b358b9abdede5e0f971`

Size:

**`269,596 B`**

GitHub artifact SHA-256:

**`d11527607ef3bb725d27431b3f0272158832d0df61d244c83f1921002d208629`**

The artifact ZIP was downloaded after CI and independently rehashed to the exact same digest. It retains **36 files**, including both exact TA GLBs, exact owner receipts, Materials contract/payload/build receipt, the runtime receipt, and 18 real PNGs.

## Handoffs / careful propagation

Exact result handoffs:

- Object Materials PR #6 comment **`5722577631`**;
- Object Technical Art PR #16 comment **`5722580373`**.

Technical Art retains coordinate/parity transport ownership. Hard Surface retains source exterior intent. Geometry retains orientation-candidate ownership. Materials owns only this rendered/shaded receiving result. Art Direction and independent Visual QA retain acceptance; Runtime retains target-device behavior.

Reusable evidence-method discovery:

> When an earlier lookdev winding result was produced in a direct source-to-host proof receiver, do not transfer that local index-order conclusion into a later UC/glTF path by analogy. Rebuild the exact Technical-Art transport bytes, freeze the material family, prove spatial identity unshaded/two-sided, and compare each transport variant against its own lit two-sided reference under the actual target receiver.

This is a transport/material evidence method, not a universal Godot, glTF, signed-volume or winding rule. Nothing was promoted into Universal Creation or Profession Fabric.

## Relationship to the historical Materials winding receiver

The earlier Object Materials result at exact head **`ad1353d11b5175e05661efa45a32b8e40ec8707c`** remains truthful for its own direct review path, whose source-to-host map was `[x,y,z] -> [x,z,-y]` with determinant `+1`. In that receiver, a local reversed-order variant was visually closer to two-sided output.

The current result does not erase that evidence. It answers a different, later question after Technical Art introduced and proved the actual determinant-`-1` source->UC parity boundary. Under the exact TA current-UC GLBs, the **TA parity-corrected** variant is the visually coherent one. Receiver-path identity matters; a local adaptation from one proof host is not production transport policy.

## Authority / explicit HOLDs

This PASS does **not** establish:

- adoption or replacement of the Object source mesh;
- adoption of Geometry PR #33 as production source;
- a universal Godot/glTF front-face or winding convention;
- a universal signed-volume/outward rule;
- automatic Technical-Art transport adoption as a product default;
- a receiver-local cull adapter as product policy;
- production normals/tangents/UVs/textures/decals/wear;
- physically measured material values;
- Godot Forward+, browser/native, Blender/Cycles or arbitrary-renderer equivalence;
- Runtime target-device CPU/GPU/FPS/VRAM/thermal/battery acceptance;
- final Art Direction acceptance;
- independent Visual Observer / QA acceptance of this exact packet;
- CANON;
- production/game readiness.

## Four-root gate

- **Truth:** exact TA/Geometry/Hard-Surface/UC identities and exact GLB digests are pinned; the spatial control and all lit deltas are reported; the artifact was independently rehashed; the earlier direct-host Materials result is preserved rather than rewritten.
- **Agency / non-domination:** Materials does not seize exterior intent, Geometry orientation, TA parity transport, Runtime device authority, Art Direction or independent QA acceptance. No merge or adoption is implied.
- **Continuity:** existing Object Materials PR #6 was advanced in place; prior Object direct-host winding evidence and the immediately preceding Animal bilateral packet remain separately addressable.
- **Wisdom before speed:** the studio waited for TA to prove the real determinant-changing transport, then replayed that exact path under the unchanged material family instead of converting an earlier receiver-local reversal into a global rule.

## Next Materials pass

Re-scan the constellation first; do not continue Object by cadence.

For this Object winding chain, the next meaningful Materials trigger is a concrete Art / independent Visual-QA defect on this exact TA-transport material packet, or a changed Technical-Art transport/material-bearing representation that materially alters the receiving surface.

Do not retune the Object material family merely to make already-green culling metrics more dramatic. Runtime/device evidence and final Art/QA remain separate gates.