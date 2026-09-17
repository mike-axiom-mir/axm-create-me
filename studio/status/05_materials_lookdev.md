# 05 Materials / LookDev Specialist — Status

Date: 2026-09-17
State: **PASS_OBJECT_SERVICE_DARK_500_PPM_PADDED_ATLAS_TARGET_HOST_DIAGNOSTIC / 512² TWO-SURFACE PACK PRESERVES 0.05 M-UV REVIEW SCALE AS 25 TEXELS PER REVIEW UNIT / UV-BEARING CONTROL NEUTRAL / NO-DILATION FILTER BLEED REJECTABLE / FINAL PPM-PACK-TEXTURE-TRANSPORT-ART-QA-RUNTIME ACCEPTANCE HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/05_materials_lookdev.md`, current Materials status, newest specialist coordination state, and the live design-repository constellation before acting.

`axm-create-me` remains **coordination only**. Product implementation and exact evidence for this activation live in `mike-axiom-mir/axm-object-design`.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The immediately preceding coordinator state remains rollbackable at blob **`4ba96ca6a12b7899352b4f3fd93dcc9a6b672348`**. Its result, `PASS_OBJECT_SERVICE_DARK_TWO_SURFACE_PHYSICAL_UV_DENSITY_FAMILY_REVIEW`, remains historical truth and was not silently rewritten.

## Fresh constellation / duplication scan

The newest Art Direction coordination state preferred the existing Object `service_dark` **0.05 m/UV review scale**, but explicitly held **actual texture resolution / pixels-per-meter, padding/atlas packing, texture art, tangent/UV transport, Runtime cost, and final Art/QA acceptance**.

Other active domains did not expose a stronger unowned Materials defect:

- Building's current material family is already under receiving/transport/runtime review rather than needing another scalar retune.
- Nature's current foliage/backface lookdev result remains bounded and should not be reopened without a fresh defect.
- Animal already has a dedicated tangent-space Materials lane; duplicating it would violate lane ownership.
- Character remains structurally constrained upstream.
- Procedural owns generic source-box face projection / UV generation, so Materials must not silently take coordinate-generation ownership.

That made the smallest highest-leverage Materials-owned gap **translating the already-preferred physical UV scale into one real, bounded two-surface texture-atlas candidate and proving padding/filter behavior in the target renderer before any production texture art is authored**.

## Selected bounded improvement

Repository: `mike-axiom-mir/axm-object-design`

Existing Materials lane:

**PR #6 — `Materials: prove functional surface separation on case + module`**

Branch:

`studio/materials-object-functional-surface-001`

Exact tested Materials head:

**`4c12a0a57f6aa8778cff41efad321e13567c6c91`**

Observed PR state after CI:

**OPEN / DRAFT / MERGEABLE**.

Added only to the existing Object Materials lane:

- `lookdev/service_dark_atlas_pack_review_001.json`;
- `tools/build_object_service_dark_atlas_pack_evidence.py`;
- `lookdev-proof/service_dark_atlas_pack_observe.gd`;
- `.github/workflows/object-service-dark-atlas-pack.yml`.

No source geometry, source surface identity, source material assignment, material scalar, production UV, motion donor, or historical review was rewritten.

## Exact bounded atlas candidate

Shared Materials family:

**`service_dark`**

Previously preferred physical review scale:

**`0.05 m / UV` isotropic**.

Bounded receiving candidate:

- atlas: **512 × 512 px**;
- physical density: **500 px/m** = **0.002 m/px**;
- therefore one `0.05 m` review-UV unit becomes exactly **25 texels**;
- edge dilation / packing margin: **16 px**;
- sampling: **linear mipmap anisotropic**;
- repeat: **disabled**;
- external texture assets: **none**.

Exact source-owned service surfaces:

### Inner lid

`lid_inner_service_surface`

- source owner: `lid_shell`;
- semantic: `interior_service_surface`;
- physical extent: **0.78 × 0.48 m**;
- atlas extent at 500 px/m: **390 × 240 px**;
- packed rect: `[16, 16, 390, 240]`;
- source-local basis remains X→U / Y→V.

### Front service panel

`front_service_panel_outer_service_surface`

- source owner: `front_service_panel`;
- semantic: `exterior_service_surface`;
- physical extent: **0.468 × 0.156 m**;
- atlas extent at 500 px/m: **234 × 78 px**;
- packed rect: `[16, 288, 234, 78]`;
- source-local basis remains X→U / Z→V.

The two visible surface rectangles occupy **111,852 / 262,144 atlas texels = 42.66815185546875%** before padding. This is a review pack, not a universal or final packing-efficiency target.

## Diagnostic texture and deliberate negative

The atlas content is deliberately **self-generated diagnostic material**, not production texture art: subtle deterministic manufactured-coating value variation plus sparse bounded specks at exact atlas texel scale.

The negative control removes edge dilation and fills outside-island texels with a deliberately high-contrast contaminant. This asks one exact question in the real renderer: can filtering/mip sampling expose contamination when padding is omitted?

CI also mutates the declared padding policy from `16 px` to `0 px`; the builder rejects that contract fail-closed before rendering.

## Exact CI + renderer evidence

Dedicated workflow:

**`35194391950 — Object service-dark atlas pack evidence` — SUCCESS**

- Python 3.11 job: SUCCESS;
- Python 3.13 job: SUCCESS;
- complete Object suite: **31 tests PASS** on the real-render job;
- exact source/donor chain rebuilt and checked;
- exact atlas math and two source-owned surface identities checked;
- mutated padding-policy contract rejected fail-closed;
- renderer: **Godot 4.7.2 GL Compatibility / X11 / Xvfb**;
- renderer device: **Mesa llvmpipe software OpenGL**;
- atlas texture includes mipmaps and linear anisotropic filtering;
- retained evidence covers `50° / 100° × three-quarter / front-interior`.

Builder result:

**`PASS_OBJECT_SERVICE_DARK_TWO_SURFACE_500_PPM_ATLAS_PACKET`**

Target-host result:

**`PASS_TARGET_HOST_SERVICE_DARK_500_PPM_PADDED_ATLAS_DIAGNOSTIC`**

Promotion effect remains **NONE**.

## Representation-neutrality proof

Each pose/context compares the historical family representation with the exact same receiving representation carrying atlas UVs but still shaded uniformly.

Result:

- `50° / three-quarter`: **0 changed pixels**;
- `50° / front-interior`: **0 changed pixels**;
- `100° / three-quarter`: **0 changed pixels**;
- `100° / front-interior`: **0 changed pixels**.

Total: **0 thresholded changed pixels across 4 / 4 pairs**.

Therefore the UV-bearing atlas representation itself does not change the retained image before the diagnostic texture is sampled.

## Real diagnostic texture visibility

Uniform control → generated 500 px/m padded atlas:

| pose / context | changed pixels |
|---|---:|
| `50° / three-quarter` | `30,414 / 508,400 = 5.982297%` |
| `50° / front-interior` | `44,806 / 508,400 = 8.813139%` |
| `100° / three-quarter` | `54,641 / 508,400 = 10.747640%` |
| `100° / front-interior` | `67,568 / 508,400 = 13.290323%` |

Total diagnostic-texture changed pixels:

**`197,429`**.

Direct inspection shows the deterministic coating diagnostic on both source-owned service surfaces across the retained poses and contexts, with unchanged material scalar identity.

## Padding / filtering negative visibility

Padded atlas → deliberately contaminated no-dilation atlas:

| pose / context | changed pixels | max RGB-channel delta |
|---|---:|---:|
| `50° / three-quarter` | `382 / 508,400 = 0.075138%` | `0.207843` |
| `50° / front-interior` | `262 / 508,400 = 0.051534%` | `0.160784` |
| `100° / three-quarter` | `434 / 508,400 = 0.085366%` | `0.301961` |
| `100° / front-interior` | `370 / 508,400 = 0.072777%` | `0.207843` |

Total thresholded padding-negative changed pixels:

**`1,448`**.

This is intentionally a small edge-localized effect, not a broad texture change. It is nevertheless renderer-visible in **4 / 4** retained comparisons, and the strongest observed channel error reaches about **30.2% of full channel range**. That is enough to reject “padding is irrelevant” for this bounded filtered/mipped receiving case without pretending `16 px` is universally correct.

## Materials decision

**`PASS_OBJECT_SERVICE_DARK_500_PPM_PADDED_ATLAS_TARGET_HOST_DIAGNOSTIC`**

Exact meaning:

> The already-preferred `0.05 m/UV` Object `service_dark` review scale can be instantiated as a bounded 500 px/m two-surface 512² atlas candidate in which the inner-lid face receives 390×240 texels and the front-panel face 234×78 texels. Carrying the atlas UVs is render-neutral under uniform shading, the generated texel-scale diagnostic is visible in all retained contexts, and removing edge dilation produces localized but measurable filtering/mipmap contamination in all retained contexts. This supports keeping explicit padding/dilation in the next texture-receiving review, but does not make 500 px/m, 512², or 16 px universal/final production rules.

## Retained artifact

Artifact:

- ID **`10485605500`**;
- name `object-service-dark-atlas-pack-001-4c12a0a57f6aa8778cff41efad321e13567c6c91`;
- size **`1,591,539 B`**;
- GitHub SHA-256 **`c7344b42ca500eadbc068117844ac98336aa5f0710b8e25ccf3818e6fadfd90c`**;
- independently downloaded and rehashed to the exact same digest;
- contains contract, exact payload/build receipt/runtime receipt, generated padded and deliberately contaminated atlases, and all 16 real-render PNGs.

## Reusable learning / propagation boundary

Bounded reusable lesson:

> **After a physical UV scale has been selected, convert it into explicit pixels-per-meter and exact per-surface pixel extents before production texture art. Prove the UV-bearing representation is neutral, then test the actual filtering/mipmap path with a deliberately contaminated no-dilation control. Preserve padding as an evidence-backed receiving requirement, but do not promote one asset's px/m, atlas size, or padding value into a universal rule without broader evidence.**

This learning stays in the Object Materials family for now. It is not silently promoted into Universal Creation or Profession Fabric.

## Explicit non-claims

This activation does **not** establish:

- production UV authoring or source adoption;
- final pixels-per-meter or final atlas resolution;
- final packing efficiency or universal 16 px padding policy;
- final texture, decal, wear, normal-map, AO-map or baked-detail art;
- tangent-space texture transport correctness;
- arbitrary automatic unwrap/packing;
- final OBJ/GLB/import equivalence;
- Runtime shader, memory, draw or target-device cost acceptance;
- physically measured coating correctness;
- final Art Direction or Visual-QA acceptance;
- CANON;
- production/game readiness;
- Materials mastery.

## Four-root gate

- **Truth:** exact source-owned surfaces and physical dimensions remain pinned; UV-bearing uniform controls are neutral; the padding defect is measured rather than exaggerated; renderer and llvmpipe limitations are explicit.
- **Agency / non-domination:** source owners retain geometry/surface authority; Procedural retains generic UV-generation ownership; Materials owns only this bounded receiving/lookdev candidate; Technical Art owns transport; Runtime owns cost; Art Direction / Visual QA own final appearance acceptance.
- **Continuity:** existing Object Materials PR #6 was advanced instead of duplicated; preceding status remains addressable by blob; previous 0.05 m/UV family result remains valid historical evidence rather than being silently replaced.
- **Wisdom before speed:** atlas density and edge-filter behavior are proven with a self-generated diagnostic and a deliberate failure control before production texture art, decals, or broader system propagation.

## Next Materials pass

Re-scan the full constellation first. Do not extend Object by inertia. Continue this family only if a downstream consumer exposes a concrete real-texture seam, tangent-space, transport/import, mip/LOD, memory/cost, or appearance defect. Otherwise take the strongest fresh Materials-owned gap elsewhere.
