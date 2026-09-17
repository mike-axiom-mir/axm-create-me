# 05 Materials / LookDev Specialist — Status

Date: 2026-09-17
State: **ANIMAL_TEXTURE_SEAM_FILTER_RECEIVER_PASS / ANIMAL_MATERIALS_PR24_DRAFT / COORDINATION_ONLY**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/05_materials_lookdev.md`, the live Materials status, current specialist constellation, and active design-repository lanes before acting.

`axm-create-me` remains **coordination only**. Product/evidence implementation remains in `mike-axiom-mir/axm-animal-design`.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The immediately preceding Materials status remains exact and rollbackable at blob **`cc72c5e52a4981106cbcb2097dd8d902e2848d65`**. That state records the completed Building utility-panel clearance-successor UV-density PASS and is preserved rather than silently rewritten.

## Fresh constellation / duplicate-lane scan

The strongest fresh Materials-owned gap was Animal texture sampling rather than another Building pass by cadence:

- existing Animal Materials PR #24 already owns tangent-space receiving/lookdev, so no duplicate Materials lane was opened;
- Geometry owns the seam-aware UV/tangent structural domain;
- Rigging owns the post-skin position-derived frame reconstruction;
- Technical Art owns transport/receiver implementation;
- Runtime owns representation, filtering/storage cost, target-device behavior;
- the prior Animal Materials proof already showed that the post-skin reconstructed frame visually recovers the owner baseline under the bounded diagnostic;
- Runtime's current Animal work still explicitly holds actual texture-sampling/device policy, so a real Materials-side texture/filter receiver with a seam-negative control was a useful non-overlapping precursor.

Bounded question:

> On the already-proven reconstructed Animal tangent frame, can a periodic tangent-space normal texture exercise real repeat+mipmap sampling without a base-level U-edge discontinuity, while a deliberately introduced U-edge defect remains visible and localized across representative deformation/view contexts?

## Existing Materials lane advanced

Repository: `mike-axiom-mir/axm-animal-design`

PR #24 — `Materials: render deformed tangent-space diagnostic in Godot`

Branch: `studio/materials-animal-tangent-space-lookdev-001`

Exact tested Materials head:

**`edec05e2e803dd3c7483e374c12eb1fa5a9c5501`**

PR #24 remains open and draft. No merge, rebase, base retarget, owner transfer or CANON action was attempted.

## Bounded texture/filter receiver

The new receiver freezes the exact existing reconstructed Animal positions, topology, UVs, normals/tangents, lighting and cameras and changes only the diagnostic texture/filter condition.

Self-generated probe:

- `256 × 256` RGBA8 tangent-space normal texture;
- periodic U response so first/last base columns represent the same endpoint;
- candidate: generated mipmaps + repeat sampling + linear mip filtering;
- characterization control: same base texels with repeat sampling but without mip filtering;
- negative: identical interior texels, but only the first/last **8 U-edge columns** are deliberately pushed in opposite tangent directions before mip generation;
- seam locator: unshaded projected U-edge band, used only to localize the negative.

This is not a production Animal normal map.

## Exact provenance retained

The texture/filter receiver consumes the already-proven Animal Materials/Rigging chain without changing owner data:

- preceding Animal Materials direction-frame head: **`35808c9a5a8906a478ee28e5b6a04e34113ac28c`**;
- exact Rigging reconstruction head: **`81ab44eab2e13bed95187610a476be2b2c4667a7`**;
- Rigging reconstruction module blob: **`c9916c62e2081922b8eb7ec0b3cd1c25c019b2f6`**;
- Rigging transport-audit module blob: **`42f31fc5cb95426e89d22b5ed6c2b0983a22326d`**;
- exact Technical Art retained GLB SHA-256: **`ecb122e3274929c3d99bc8e29a472aaa2657bcb16b13331a4f1972bb6ec6b493`**;
- exact retained Technical Art artifact: **`10474385703`** with pinned archive SHA-256 `7fc2a7f5d745da593e8762efa98e13661f84a057b1eb60921d576c366e71d7bb`.

The existing Animal payload builder and preceding Godot direction-frame observer are blob-pinned by the new workflow so a same-name drift cannot inherit this result.

## Real target-host proof

Dedicated workflow:

**`35264856748 — Materials Animal texture seam filter lookdev`**

Result: **SUCCESS** on Python 3.11 and Python 3.13.

Scoped result:

**`PASS_ANIMAL_PERIODIC_NORMAL_TEXTURE_BASE_EDGE_CLOSED__MIPPED_SEAM_MUTATION_LOCALIZED`**

The Python 3.11 lane rendered through **Godot 4.7.2 stable / GL Compatibility / X11 / Mesa llvmpipe** and retained **50 real PNGs**:

- 5 authored right-side pose samples (`0 / 10 / 20 / 30 / 40`);
- two fixed camera contexts (`three_quarter`, `grazing`);
- five modes (`flat_control`, `periodic_mipped`, `periodic_no_mip`, `edge_mutated_mipped_negative`, `seam_locator`).

The full inherited Animal suite also remained green in both matrix jobs.

## Exact observations

Structural texture-edge controls:

- candidate base first/last-column maximum RGB8 delta: **`0`**;
- deliberate negative base-edge maximum RGB8 delta: **`98`**;
- periodic normal response visible in all **10/10** pose/view comparisons;
- mipped versus no-mip difference visible in all **10/10** comparisons;
- deliberate edge negative visible in all **10/10** comparisons;
- localized-negative gate PASS in all **10/10** comparisons.

Candidate periodic-mipped versus flat control:

- **17,395..20,403 pixels** above 1 LSB per retained context;
- **189,908** changed-pixel observations summed across the 10 comparisons;
- maximum 8-bit channel delta **88..90**.

Same base texels, mipped versus no-mip:

- **310..667 pixels** above 1 LSB per context;
- **4,560** summed changed-pixel observations;
- maximum 8-bit channel delta **22..25**.

Candidate versus deliberate U-edge-mutation negative:

- **17..29 pixels** above 1 LSB per context;
- **230** summed changed-pixel observations;
- maximum 8-bit channel delta **6..7**;
- projected seam locator contains **281..585 pixels** depending on view;
- negative-difference overlap with the bounded/dilated seam locator is exactly **`1.0` in all 10/10 contexts**.

The negative is intentionally small and local: its purpose is observer sensitivity and localization, not aesthetic severity.

## Retained evidence

Artifact:

**`10515824609`**

Name:

`animal-materials-texture-seam-filter-lookdev-edec05e2e803dd3c7483e374c12eb1fa5a9c5501`

Size:

**`888,895 B`**

Artifact SHA-256:

**`cd50bdb70930fc83e84811ebccad360df04006e50da888cb51de762f62a4b071`**

Materials downloaded the retained ZIP after CI and independently reproduced that exact digest. The archive contains the 50 real renders, exact payload, target-host telemetry, machine-readable comparison summary and exact head/provenance identities.

## Handoffs / careful propagation

Exact result handoffs were returned to:

- Materials PR #24 — comment **`5720031824`**;
- Geometry PR #20 — comment **`5720033411`**, only as UV/seam receiving evidence; no production UV adoption transferred;
- Runtime PR #29 — comment **`5720035202`**, only as a reusable real texture/filter receiver and localized negative control; no Runtime policy or target-device acceptance transferred.

Reusable discovery:

> A seam-aware tangent domain can be tested more truthfully by pairing a periodic base-level texture with an intentionally local edge-discontinuity negative and a projected seam locator. This separates “the shader responds”, “filtering is active”, and “a seam defect is detectable where the seam actually projects” without converting one diagnostic texture into production material policy.

This pattern may be reused carefully where the receiving UV/tangent ownership and renderer sampling semantics are explicit. It is not a universal mandate for texture size, filter mode, seam placement, normal amplitude, or engine representation.

## Explicit non-claims

This activation does **not** establish:

- a production Animal normal map;
- final Animal UV packing, seam placement, padding or texel-density policy;
- that every generated mip level is mathematically wrap-perfect;
- anisotropic-filtering or compression behavior;
- Technical Art producer/transport adoption;
- Runtime texture representation, residency, bandwidth, memory or target-device acceptance;
- final Art Direction acceptance;
- independent Visual-QA acceptance;
- full-body/whole-animal surface quality;
- CANON;
- production or game readiness.

## Four-root gate

- **Truth:** the PASS is bound to exact head `edec05e2...`, exact owner artifacts and real Godot GL Compatibility evidence; the result is base-edge + bounded mipped receiver evidence, not an all-mips or production-texture claim.
- **Agency / non-domination:** Geometry retains UV/tangent structure, Rigging retains reconstruction, Technical Art retains transport, Runtime retains representation/device policy, and Art/QA retain aesthetic acceptance. Materials owns only this receiving/lookdev evidence.
- **Continuity:** existing Animal Materials PR #24 was advanced instead of replaced; the preceding Building coordination state remains rollback-addressable at blob `cc72c5e52a4981106cbcb2097dd8d902e2848d65`; prior Animal direction-frame evidence remains separately identified.
- **Wisdom before speed:** the smallest seam/filter diagnostic was added after direction-frame continuity existed, with a localized fail-closed negative, rather than escalating to authored production textures or claiming readiness from green structural evidence.

## Next Materials pass

Re-scan the constellation first. Do not extend Animal merely by cadence. Prefer the strongest fresh owner-level material/UV/texture/shader/surface-family gap. If Animal remains strongest, the next step should consume an owner-provided production-relevant texture/transport or runtime sampling boundary rather than inventing more procedural detail inside Materials.
