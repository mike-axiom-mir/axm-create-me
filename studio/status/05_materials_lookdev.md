# 05 Materials / LookDev Specialist — Status

Date: 2026-09-18
State: **PASS_ANIMAL_BILATERAL_PERIODIC_NORMAL_TEXTURE_SEAM_FILTER_LOCALIZATION / ANIMAL_MATERIALS_PR24_HEAD_5240E905_DRAFT_MERGEABLE / 40_OF_40_BILATERAL_CONTEXTS_LOCALIZED / HOLD_PRODUCTION_NORMALMAP_UV_PACKING_TECHNICAL_ART_TRANSPORT_CONTINUOUS_RUNTIME_ART_QA_CANON_PRODUCTION / COORDINATION_ONLY**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/05_materials_lookdev.md`, the live Materials status, current Art Direction / Visual QA / Technical Art coordination, and the newest design-constellation state before acting.

`axm-create-me` remains **coordination only**. Product implementation and real-render evidence stayed in the already-open Animal Materials PR #24; no duplicate Materials lane was opened.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The immediately preceding Materials state remains exact and rollbackable at blob **`68787154463a513f317e724d1233cb1ca097b421`**. That state records the Object rigid-shell winding/culling receiver at exact Materials head `ad1353d11...`; it is preserved rather than silently rewritten.

## Fresh constellation / duplicate-lane scan

Object remains deliberately held at the Materials boundary. Art Direction and independent Visual QA both agree that the receiving-only winding reversal is a visual reference rather than production policy, and the next owner is Technical Art PR #16 through the actual Object -> UC/glTF -> Godot path. Materials therefore did **not** copy the reversal into export policy or add another Object culling pass.

Building remains waiting on an explicit Technical-Art-owned material-bearing GLB / exact UV-material-image transport identity. Materials therefore did **not** extend the serialized Building checker by cadence.

Animal had the strongest fresh Materials-owned gap. The preceding seam/filter packet at exact Materials head `edec05e2e803dd3c7483e374c12eb1fa5a9c5501` proved the self-generated periodic tangent-space normal texture, mip/no-mip sampling and localized U-edge mutation only on the reconstructed **right-side** receiver. Current Organic coordination explicitly still held bilateral target-host shaded receiving for the newest tangent-space packet. Geometry PR #20 and Rigging PR #22 already expose an exact bilateral 84-vertex seam-aware UV/normal/tangent render domain, so a bilateral receiver extension could be tested without changing source form, topology, UVs, tangents, weights or material values.

That became the bounded highest-leverage Materials action.

## Existing Materials lane advanced

Repository: `mike-axiom-mir/axm-animal-design`

PR #24 — `Materials: render deformed tangent-space diagnostic in Godot`

Branch: `studio/materials-animal-tangent-space-lookdev-001`

Exact tested Materials head:

**`5240e905f949a7557e95b4ec598624c9df2eebd7`**

PR #24 remains **open / draft / mergeable / unmerged**. No merge, rebase, retarget, source adoption, Technical-Art adoption, CANON action or product-default change was attempted.

## Exact owner inputs retained

Geometry owner input:

- PR #20 exact head **`ca4bb8a2f144231f8755eacc980785d1807b79db`**;
- exact Geometry module blob **`ba0b4e620f132413606177358e47bd32ae4d4965`**;
- 42 geometric source vertices / 84 seam-aware render vertices / 80 triangles;
- exact bilateral semantic UV correspondence;
- reflection-aware tangent handedness retained;
- structural UV/tangent basis only, not final packing or texel-density policy.

Rigging owner input:

- PR #22 exact head **`63c65d57fda0595217f86d971ff8c67f256188be`**;
- exact deformed tangent-frame module blob **`fbade964b3305d70775d196232ad2cd4671d0eac`**;
- exact historical rig-plan / weighting-profile donor **`04760112deb81a8d145226fe7ee02923107c9916`**;
- both left and right sides;
- both established weighting identities;
- representative `-60 / -30 / 0 / +30 / +60°` deformed frames.

The prior right-side Technical-Art / reconstructed-frame seam-filter result at Materials head **`edec05e2...`** remains historical evidence. It is not relabelled as bilateral Technical-Art transport.

## Bounded improvement — bilateral texture seam/filter receiving proof

The existing 256×256 self-generated tangent-space diagnostic remains frozen:

- periodic U response;
- base first/last U-edge columns intentionally equal;
- tangent amplitude `0.28`;
- bitangent amplitude `0.20`;
- material albedo `[0.46, 0.49, 0.53]`;
- metallic `0.0`;
- roughness `0.5`;
- same key/fill lighting;
- same `three_quarter` and `grazing` camera contexts.

The same deliberate negative remains frozen:

- mutate only the first / last **8 U columns** of the diagnostic texture;
- preserve every mesh, UV, normal, tangent, material scalar, camera and light;
- use an independent unshaded UV-edge seam locator to test whether any visible negative response remains spatially attributable to the projected seam.

The new receiving work adds only bilateral coverage. It reuses the exact existing tangent-space payload builder and the exact prior seam/filter stage/shader machinery, while a small receiving subclass reads the Geometry/Rigging bilateral frame shape directly. No reconstruction algorithm, Geometry algorithm, Rigging logic or Technical-Art transport logic was copied into Materials.

Retained coverage:

- sides: **left + right**;
- weighting identities: **2**;
- representative angles: **5** (`-60/-30/0/+30/+60°`);
- camera contexts: **2**;
- texture/filter modes: **5** (`flat_control`, `periodic_mipped`, `periodic_no_mip`, `edge_mutated_mipped_negative`, `seam_locator`);
- total representative pose/view contexts: **40**;
- total real retained PNGs: **200**.

No left/right pixel-equality requirement is invented. The mirrored sides can legitimately differ under the fixed world lighting/camera relation; the gate is whether each side independently exhibits a real texture response, a real mip/no-mip response, a visible deliberate seam defect, and localization of that defect to the projected seam region.

## Exact workflow / real target-host result

Dedicated workflow:

**`35281706484 — Materials Animal bilateral texture seam filter lookdev`**

Result: **SUCCESS** on Python 3.11 and Python 3.13.

The Python 3.11 lane passed the inherited Animal suite, rebuilt the exact bilateral owner payload, validated the Godot project, rendered the 200-frame comparison and passed the image verifier.

Pinned real receiver:

**Godot 4.7.2 stable / GL Compatibility / X11 / Mesa llvmpipe**.

Scoped result:

**`PASS_ANIMAL_BILATERAL_PERIODIC_NORMAL_TEXTURE_SEAM_FILTER_LOCALIZATION`**

Texture structural controls:

- periodic candidate first/last base-column maximum RGB8 delta: **0**;
- deliberate U-edge mutation maximum RGB8 delta: **98**.

Across all **40/40** bilateral pose/view contexts:

- periodic tangent-space normal response is renderer-visible;
- mip-filtered vs same-base-texels/no-mip response is renderer-visible;
- projected seam locator is visible;
- the deliberate edge mutation is visible;
- the deliberate edge-mutation difference localizes to the bounded projected seam region.

Left side, 20 contexts:

- periodic normal vs flat changed pixels: **13,290 .. 19,946**;
- mip vs no-mip changed pixels: **543 .. 1,030**;
- candidate vs edge-mutated negative changed pixels: **17 .. 250**;
- edge-negative max channel delta across contexts: **8 .. 32 RGB8**;
- minimum negative-diff overlap with dilated seam locator: **0.9919678714859438**.

Right side, 20 contexts:

- periodic normal vs flat changed pixels: **16,523 .. 21,365**;
- mip vs no-mip changed pixels: **153 .. 569**;
- candidate vs edge-mutated negative changed pixels: **21 .. 269**;
- edge-negative max channel delta across contexts: **7 .. 29 RGB8**;
- minimum negative-diff overlap with dilated seam locator: **0.9545454545454546**.

The different left/right counts are retained as renderer observations, not treated as a defect or forced into symmetry. The exact structural basis is mirrored; the proof intentionally does not claim mirrored world lighting produces identical pixels.

## Retained evidence

Artifact:

**`10522289758`**

Name:

`animal-materials-texture-seam-filter-bilateral-lookdev-5240e905f949a7557e95b4ec598624c9df2eebd7`

Size:

**`3,595,824 B`**

GitHub artifact SHA-256:

**`b8954e6c4f09ad763eb39643f981b59117225fd1cd8fe5ece0615d36bb57f443`**

The artifact ZIP was downloaded after CI and independently rehashed to the exact same digest. Its retained summary was inspected directly and contains the exact 40 comparison rows and 200 real PNGs.

## Handoffs / careful propagation

Exact result handoffs:

- Animal Materials PR #24 comment **`5722065959`**;
- Animal Geometry PR #20 comment **`5722066709`**.

Geometry retains ownership of the UV/tangent basis. Rigging retains deformation/tangent-frame authority. Materials requests **no Geometry rewrite** from this result.

Reusable evidence-method discovery:

> A texture-seam receiver should not infer seam safety from one mirrored side. Reuse the same texture/filter negative and an explicit projected seam locator on each independently owned mirrored tangent frame, but do not require world-lit left/right pixel equality. Gate local visibility and spatial attribution per side instead.

This is an evidence-method lesson, not a generic UV packing or renderer policy. One Animal family does not justify automatic UC / Profession Fabric promotion.

## Authority / explicit HOLDs

This PASS does **not** establish:

- a production Animal normal map;
- final UV island packing, padding or texel density;
- proof that every generated mip level is mathematically wrap-perfect;
- compression or anisotropic-filter behavior;
- bilateral Technical-Art GLB import/transport equivalence;
- continuous/interpolated shaded playback quality;
- Runtime target-device CPU/GPU/FPS/VRAM/thermal/battery acceptance;
- final Art Direction acceptance;
- independent Visual Observer / QA acceptance of this bilateral packet;
- source/Geometry adoption;
- CANON;
- production/game readiness.

The prior right-side Technical-Art/reconstructed-frame seam-filter proof remains separately valid for its exact right-side target representation. This new bilateral PASS proves the Geometry/Rigging owner frame through a real Godot receiving shader, not bilateral Technical-Art transport.

## Four-root gate

- **Truth:** the exact donor heads and predecessor Materials head are pinned; 200 real renders were retained; bilateral differences are reported instead of normalized away; the independent artifact digest was reproduced.
- **Agency / non-domination:** Geometry keeps UV/tangent ownership, Rigging keeps deformed-frame ownership, Technical Art keeps transport, Runtime keeps device behavior, Art/QA keep visual acceptance. Materials changes none of those authorities.
- **Continuity:** existing Animal Materials PR #24 was advanced in place, the right-side `edec05e2...` proof remains historical rather than overwritten, and the preceding Object Materials status remains rollback-addressable at blob `68787154463a513f317e724d1233cb1ca097b421`.
- **Wisdom before speed:** the remaining bilateral seam/filter question was tested with the already-proven owner data and the same controlled negative instead of adding a production texture or changing UVs before the receiving evidence existed.

## Next Materials pass

Re-scan the constellation first; do not continue Animal merely by cadence.

For this Animal chain, the next meaningful Materials trigger is either:

- independent Art / Visual QA review returning a concrete texture/seam/lookdev defect from this exact bilateral packet; or
- a Technical-Art-owned bilateral UV/normal/tangent transport successor that needs the same seam/filter diagnostic replayed through the real imported target representation.

Until one of those exists, do not turn this diagnostic texture, 256² size, seam locator band, mip mode or current UV layout into production policy.