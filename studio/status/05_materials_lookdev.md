# 05 Materials / LookDev Specialist — Status

Date: 2026-09-17
State: **PASS_OBJECT_SERVICE_DARK_BOUNDED_ROUGHNESS_MICROVARIATION_TARGET_HOST_REVIEW / EXISTING 0.66 ROUGHNESS RECEIVES BOUNDED 0.60–0.72 SELF-GENERATED RESPONSE ON EXACT 500 PPM PADDED ATLAS / OVERCONTRAST 0.38–0.94 NEGATIVE REJECTABLE / FINAL PHYSICAL-TEXTURE-TRANSPORT-RUNTIME-ART-QA ACCEPTANCE HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/05_materials_lookdev.md`, current Materials status, newest coordination state, and the live design-repository constellation before acting.

`axm-create-me` remains **coordination only**. Product implementation and exact renderer evidence for this activation live in `mike-axiom-mir/axm-object-design`.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The immediately preceding coordinator state remains rollbackable at blob **`9360ec89d7407825b021ae51fa19f4767291c5d5`**. Its result, `PASS_OBJECT_SERVICE_DARK_500_PPM_PADDED_ATLAS_TARGET_HOST_DIAGNOSTIC`, remains historical truth and was not silently rewritten.

## Fresh constellation / duplication scan

The Object chain exposed the strongest fresh Materials-owned gap rather than another UV/ownership rebind:

- Technical Art PR #28 now proves the exact existing `service_dark` diagnostic atlas/UV packet can traverse current Universal Creation into real Godot while preserving source identity and measured texel density. That transport lane remains Technical Art-owned.
- Runtime has a separate compact-atlas receiving lane and owns memory/device-cost judgment; Materials does not absorb it.
- Art Direction and Visual QA still hold final appearance acceptance and production texture judgment.
- Animal already has dedicated tangent-space Materials work; Nature's foliage/backface result remains bounded; Building is in receiving/transport/runtime review; Character remains upstream constrained.
- Procedural retains generic UV-generation ownership.

With UV scale, padding/filter behavior, and base-color diagnostic transport already evidenced, the highest-leverage bounded Materials gap was therefore **actual surface-response variation**: determine whether a small self-generated roughness texture can add readable manufactured-surface response without changing the established material family, UV scale, source authority, or production status.

## Selected bounded improvement

Repository: `mike-axiom-mir/axm-object-design`

Existing Materials lane:

**PR #6 — `Materials: prove functional surface separation on case + module`**

Branch:

`studio/materials-object-functional-surface-001`

Exact tested Materials head:

**`83f8d8fc99f7c832711f7f30fbcac72938550fc2`**

Added to the existing lane only:

- `lookdev/service_dark_roughness_microvariation_review_001.json`;
- `tools/verify_service_dark_roughness_microvariation.py`;
- `lookdev-proof/service_dark_roughness_microvariation_observe.gd`;
- `.github/workflows/object-service-dark-roughness-microvariation.yml`.

No source geometry, source-owned surface identity, source material assignment, UV scale, atlas rectangles, base-color atlas, metallic scalar, base roughness scalar, motion donor, or production authority was rewritten.

## Exact roughness-response candidate

Existing `service_dark` scalar family remains:

- albedo: `#252B2FFF`;
- metallic: **0.18**;
- base roughness: **0.66**.

Inherited receiving context remains:

- atlas: **512 × 512 px**;
- physical density: **500 px/m**;
- edge dilation: **16 px**;
- mipmaps + linear anisotropic filtering;
- repeat disabled;
- exact two source-owned service surfaces retained.

Bounded candidate roughness field:

- center: **0.66**;
- amplitude: **±0.06**;
- declared range: **0.60–0.72**;
- deterministic two-frequency texel field with a stable per-source-surface phase;
- same **16 px nearest-edge dilation** as the atlas receiving policy;
- external texture assets: **none**;
- physically measured coating: **no**;
- production texture: **no**.

Deliberate over-contrast negative:

- center: **0.66**;
- amplitude: **±0.28**;
- range: **0.38–0.94**.

The negative exists only to prove that the renderer/evidence setup can distinguish an obviously excessive roughness response from the bounded candidate.

## Retained failed run and repair

Initial dedicated run:

**`35199421353` — FAILED CLOSED**.

All Python tests, donor rebuilds, payload validation, and the deliberate roughness-policy mutation check were already green. Real Godot then failed before candidate acceptance because the first new receiver payload narrowed the inherited atlas packet and accidentally omitted `surface_review`, which an inherited Object observer requires.

This was treated as an evidence-contract failure, not hidden or bypassed.

Smallest repair:

- preserve the complete exact atlas payload;
- overlay only the new roughness review/schema/result/truth fields;
- leave source identities, UVs, atlas policy, material values, render acceptance gates, and inherited observer behavior unchanged.

No threshold or acceptance criterion was weakened.

## Exact CI + renderer evidence

Final dedicated workflow:

**`35199568171 — Object service-dark roughness microvariation evidence` — SUCCESS**

- Python 3.11: SUCCESS;
- Python 3.13: SUCCESS;
- complete Object suite: **31 tests PASS** on the real-render path;
- exact source/donor/atlas chain rebuilt;
- deliberate candidate-amplitude drift to `±0.12` rejected fail-closed;
- renderer: **Godot 4.7.2 stable**;
- rendering method: **GL Compatibility / X11 / Xvfb**;
- renderer device: **Mesa llvmpipe**;
- retained contexts: `mid_open` / `peak_open` × `three_quarter` / `front_interior`.

Same-head inherited Object workflows were also green, including the prior material family, inner-lid, UV-density, atlas-pack, front-panel UV/source-identity, hard-surface-interface, and service-module-fit evidence.

Target-host result:

**`PASS_OBJECT_SERVICE_DARK_BOUNDED_ROUGHNESS_MICROVARIATION_TARGET_HOST_REVIEW`**

## Real-render candidate response

Constant roughness `0.66` control → bounded `0.60–0.72` candidate:

| pose / context | >1-LSB changed pixels | max RGB-channel delta |
|---|---:|---:|
| `mid_open / three_quarter` | `7,284 / 508,400 = 1.432730%` | `0.019608` |
| `mid_open / front_interior` | `8,779 / 508,400 = 1.726790%` | `0.019608` |
| `peak_open / three_quarter` | `41,891 / 508,400 = 8.239772%` | `0.062745` |
| `peak_open / front_interior` | `54,428 / 508,400 = 10.705744%` | `0.066667` |

Total bounded-candidate changed pixels above the established one-LSB gate:

**`112,382`**.

The candidate is therefore renderer-visible in **4 / 4** retained pose/context pairs.

## Deliberate over-contrast negative

Constant roughness `0.66` control → `0.38–0.94` negative:

| pose / context | >1-LSB changed pixels | max RGB-channel delta |
|---|---:|---:|
| `mid_open / three_quarter` | `33,429 / 508,400 = 6.575334%` | `0.086275` |
| `mid_open / front_interior` | `45,178 / 508,400 = 8.886310%` | `0.090196` |
| `peak_open / three_quarter` | `55,600 / 508,400 = 10.936271%` | `0.396078` |
| `peak_open / front_interior` | `69,761 / 508,400 = 13.721676%` | `0.407843` |

Total negative changed pixels above one LSB:

**`203,968`**.

The negative exceeds the bounded candidate's maximum channel delta in **4 / 4** comparisons. Direct image review shows the intended distinction: the bounded field adds subtle surface-response variation, while the negative produces visibly excessive banded/specular response, especially on the opened lid.

## Materials decision

**`PASS_OBJECT_SERVICE_DARK_BOUNDED_ROUGHNESS_MICROVARIATION_TARGET_HOST_REVIEW`**

Exact meaning:

> The existing Object `service_dark` family can receive a small deterministic roughness texture centered on its unchanged `0.66` roughness scalar, on the already-reviewed 500 px/m / 16 px padded atlas, and that response is visible across all retained Godot contexts without requiring albedo, metallic, UV, geometry, or source-authority changes. A deliberately excessive roughness range produces substantially stronger response, so the evidence setup is discriminating. The bounded candidate is suitable for further Art/QA/transport review, not automatic production adoption.

## Retained artifact

Final artifact:

- ID **`10487530600`**;
- name `object-service-dark-roughness-microvariation-83f8d8fc99f7c832711f7f30fbcac72938550fc2`;
- size **`1,677,962 B`**;
- SHA-256 **`3281d0c3879e8466bff5b5b609cf85c1f5707226f9dce7439f29ed2f71416b07`**;
- independently downloaded and rehashed to the same digest;
- contains exact contract/payload/runtime receipt, generated roughness atlases, and all real-render comparison PNGs.

The exact result was returned to Object Materials PR #6 as coordination comment **`5711337075`**.

## Reusable learning / propagation boundary

Bounded reusable lesson:

> **After physical UV density, atlas padding, and base-color receiving behavior are proven, introduce one surface-response channel at a time against the unchanged scalar control. Keep the candidate amplitude deliberately narrow and pair it with an obviously excessive negative control so renderer sensitivity and aesthetic restraint are separable. Do not turn one asset's roughness range into a universal rule.**

This remains an Object Materials learning. It is not silently promoted into Universal Creation, Profession Fabric, another asset family, or CANON.

## Explicit non-claims

This activation does **not** establish:

- production roughness-texture authorship or adoption;
- physically measured coating response;
- final roughness range or frequency spectrum;
- final albedo/metallic/normal/AO/wear/decal art;
- production UV adoption or final atlas density/resolution;
- exact UC/GLB/import equivalence for this new roughness channel;
- tangent-space texture correctness;
- Runtime memory/shader/device-cost acceptance;
- target-device performance;
- final Art Direction or Visual-QA acceptance;
- CANON;
- production/game readiness;
- Materials mastery.

## Four-root gate

- **Truth:** exact source/material/UV/atlas prerequisites remain pinned; the first failed receiver run remains visible; candidate and negative deltas are measured on the real pinned renderer; llvmpipe and non-physical provenance are explicit.
- **Agency / non-domination:** Materials changes only its bounded receiving/lookdev layer; source owners retain geometry/surface authority; Procedural retains generic UV generation; Technical Art retains transport; Runtime retains cost/device judgment; Art Direction and Visual QA retain final appearance acceptance.
- **Continuity:** the existing Object Materials PR #6 was advanced instead of duplicated; the immediately preceding coordinator state remains rollbackable by exact blob; established 500 px/m / 16 px atlas evidence remains historical truth.
- **Wisdom before speed:** one response channel was isolated and compared with both an unchanged scalar control and a deliberately excessive negative before any production texture, broad propagation, or automatic adoption.

## Next Materials pass

Re-scan the full constellation first. Do not extend Object by inertia. Continue this family only if Art/QA, Technical Art, Runtime, or another exact downstream consumer exposes a concrete roughness/transport/mip/device/appearance defect. Otherwise select the strongest fresh Materials-owned gap elsewhere.
