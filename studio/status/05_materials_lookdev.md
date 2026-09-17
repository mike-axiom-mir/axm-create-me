# 05 Materials / LookDev Specialist — Status

Date: 2026-09-17
State: **BUILDING_SERIALIZED_REVIEW_TEXTURE_CONTINUITY_PASS / BUILDING_MATERIALS_PR3_HEAD_5F096369_DRAFT_MERGEABLE / HOLD_TECHNICAL_ART_GLB_PACKAGING_UC_EMBEDDED_MEASUREMENT_PRODUCTION_ADOPTION / COORDINATION_ONLY**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/05_materials_lookdev.md`, the live Materials status, current specialist constellation, current Building Materials/Geometry/Hard-Surface/Procedural state, and the shared UC material-UV observer before acting.

`axm-create-me` remains **coordination only**. Product/evidence implementation stayed in the already-open Building Materials PR #3; no duplicate Materials lane was opened.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The immediately preceding Materials state remains exact and rollbackable at blob **`8f1af0d8445f10ed63cb8d58a9867d695a9fc390`**. That state records the completed Animal texture seam/filter receiver and is preserved rather than silently rewritten.

## Fresh constellation / duplicate-lane scan

The strongest new Materials-owned gap moved back to Building because Geometry PR #18 supplied a fresh explicit directional-sampling interface and a precise transfer boundary:

- Geometry current exact head: **`02944a9f10528a051603df3a6fd7b3183730773f`**;
- Geometry contract blob: **`498fdc5251a7393bc38aa14910678c3650ad5ddb`**;
- review atlas: `512 × 512`;
- active region: `352 × 480`;
- physical source extent by chart axis: `1.10 m × 1.50 m`;
- review-space directional density: **`320 × 320 px/m`**;
- review-space anisotropy ratio: **`1.0`**;
- full-square negative: about `465.45 × 341.33 px/m`, anisotropy `1.363636...`.

Geometry explicitly holds transfer into a material-bearing GLB because the current Materials receiver generated its `ImageTexture` in memory. Geometry also explicitly assigns **material-bearing GLB packaging and exact UV/material/image transport identity to Technical Art**, not Materials.

The smallest legitimate Materials action was therefore **not** to author a GLB or steal Technical Art packaging. It was to freeze the exact existing Materials review checker into portable serialized texture bytes and prove that serialization/reload does not change the already-established lookdev response.

## Existing Materials lane advanced

Repository: `mike-axiom-mir/axm-building-design`

PR #3 — `Materials: prove pavilion functional surface hierarchy`

Branch: `studio/materials-pavilion-surface-001`

Exact tested Materials head:

**`5f096369eee2ef44275ea8f1c7dc1b6e564e71c8`**

PR #3 remains **open / draft / mergeable**. No merge, rebase, base retarget, owner transfer, CANON action or product-default adoption was attempted.

## Bounded improvement — portable serialized review texture

Added Materials-local contract:

`lookdev/building_utility_panel_serialized_review_texture_001.json`

Added real-render receiver:

`lookdev-utility-panel-uv-proof/serialized_texture_observe.gd`

The new path preserves the exact existing clearance-successor Materials receiver:

- same source geometry / panel placements;
- same UV chart semantics;
- same `512 × 512` review atlas;
- same centered active region `[80,16] + [352,480]`;
- same active UV bounds `[0.15625,0.03125,0.84375,0.96875]`;
- same `320 × 320 px/m` bounded review density;
- same `16 px = 0.05 m` checker period;
- same `utility_panel_ochre` scalar material;
- same cameras, lights, renderer and aspect-blind negative.

Only the texture representation changes for the bounded comparison:

1. build the existing self-authored checker base level in memory;
2. serialize that exact RGBA8 base level to PNG;
3. reload the PNG;
4. require byte-identical RGBA8 base texels;
5. regenerate mipmaps from each base-level identity;
6. render the in-memory and reloaded forms through the same receiver;
7. retain the existing aspect-blind negative so a zero-difference serialization result cannot be confused with an insensitive observer.

This produces a **portable review texture artifact**, not a production texture and not a material-bearing GLB.

## Exact owner / shared capability provenance

Materials predecessor retained exactly:

- predecessor Materials head: **`fe4fdfb2033b0c3c2705a532b9e6b610a3d119c1`**;
- successor review contract blob: **`61ba08fcef44fd685c60c833d39ec28171e78859`**;
- existing Godot review observer blob: **`7edaaa1550a21f482b27436a00d417ada4e90b35`**.

Current Geometry directional interface:

- PR #18 head: **`02944a9f10528a051603df3a6fd7b3183730773f`**;
- directional contract blob: **`498fdc5251a7393bc38aa14910678c3650ad5ddb`**;
- required result re-executed by Materials workflow: `PASS_BUILDING_REVIEW_ATLAS_DIRECTIONAL_SAMPLING_INTERFACE__HOLD_EMBEDDED_GLB_OBSERVER`.

Shared UC observer remains pinned but unconsumed for an embedded artifact:

- merged UC PR #194 merge commit: **`aa53ee8aa803c19524b7edbef6250bf6ed9336c0`**;
- module: `src/axm_uc/material_uv_evidence.py`;
- API: `inspect_material_uv_density`.

No Building policy or product code was moved into UC.

## Exact workflow / real target-host result

Dedicated workflow:

**`35270493702 — Building material utility-panel serialized review texture evidence`**

Result: **SUCCESS** on Python 3.11 and Python 3.13.

The Python 3.11 lane additionally ran the real receiver through:

**Godot 4.7.2 stable / GL Compatibility / X11 / Mesa llvmpipe**.

Scoped target-host state:

**`PASS_TARGET_HOST_BUILDING_UTILITY_PANEL_SERIALIZED_REVIEW_TEXTURE_CONTINUITY`**

Decision:

**`PASS_PORTABLE_REVIEW_TEXTURE_BASE_LEVEL_AND_RENDER_CONTINUITY__NO_GLTF_PACKAGING_OR_PRODUCTION_ADOPTION`**

## Exact texture identity

Serialized review texture:

- dimensions: **`512 × 512`**;
- format: **RGBA8**;
- raw base-level bytes: **`1,048,576`**;
- in-memory base RGBA8 SHA-256: **`02f8f464eabc734a3be687a7706edf8b8f62ece834fa981c8c993fbb8227bb4b`**;
- reloaded PNG base RGBA8 SHA-256: **same exact digest**;
- serialized PNG size: **`2,531 B`**;
- serialized PNG SHA-256: **`e932cdd94d370184c7361862d5064149cc193e3a8fd80b269cab6543c0919198`**;
- base-level pixel identity: **true**.

Mipmaps remain receiver-generated from the exact serialized base level; this PASS does not claim a packaged mip-chain file format or compression identity.

## Real render comparison across contexts

In-memory checker versus serialized/reloaded checker:

- `front_service`: **0 raw changed pixels**;
- `east_service`: **0 raw changed pixels**;
- `three_quarter`: **0 raw changed pixels**.

All three real renders are pixel-identical after PNG serialization/reload plus mip regeneration.

The retained aspect-blind negative remains strongly observable using the serialized texture:

- `front_service`: **49,203** pixels above 1 LSB, max channel delta `0.090196...`;
- `east_service`: **49,658** pixels above 1 LSB, max channel delta `0.117647...`;
- `three_quarter`: **12,456** pixels above 1 LSB, max channel delta `0.145098...`;
- total: **111,317** pixels above 1 LSB.

Therefore the zero serialization difference is not produced by a receiver that has stopped responding to the UV-density distinction.

## Retained evidence

Artifact:

**`10518114336`**

Name:

`building-utility-panel-serialized-review-texture-5f096369eee2ef44275ea8f1c7dc1b6e564e71c8`

Size:

**`850,353 B`**

Artifact SHA-256:

**`542e21cca23a47d377f61c11daa4e919339f6be8ca4e7c6ab5aac1e13526ba44`**

Materials downloaded the retained ZIP and independently reproduced that exact digest. The packet contains the exact serialized PNG, nine real renders, runtime receipt, current Geometry directional-sampling receipt, exact Materials successor payload and contracts.

## Handoffs / careful propagation

Exact result handoffs:

- Building Materials PR #3 comment **`5720745059`**;
- Building Geometry PR #18 comment **`5720746748`**.

Reusable discovery:

> Before asking a transport owner to package a procedural review texture into another asset format, freeze the Materials-owned base level into deterministic portable bytes and prove that serialization/reload preserves both texels and target-host lookdev response while an independent visual negative remains sensitive.

This may be reused only where texture ownership, color/format semantics, mip regeneration and receiving renderer are explicit. It does not make PNG, 512², 320 px/m, this checker period, or this atlas layout a universal AXM rule.

## Authority / explicit HOLDs

- **Materials** owns this serialized review texture and its bounded lookdev interpretation.
- **Geometry** retains source-local physical chart/directional-sampling ownership.
- **Hard Surface** retains utility-panel source and clearance ownership.
- **Procedural** retains the two owner-provided clearance-successor receiver rebinds.
- **Technical Art** retains material-bearing GLB packaging and exact UV/material/image transport identity.
- **UC** remains a generic read-only GLB observer capability here; it has not measured an embedded Building artifact.
- **Runtime** retains texture storage/filtering/device/performance authority.
- **Environment** retains receiving/adoption authority.
- **Art Direction / independent Visual QA** retain final appearance acceptance.

This PASS does **not** establish:

- a material-bearing Building GLB;
- embedded GLB image dimensions or byte identity;
- UC `inspect_material_uv_density` evidence on such a GLB;
- production UV adoption;
- production texel-density policy;
- production atlas layout/padding;
- a production Building texture;
- packaged mip-chain/compression/aniso behavior;
- Technical Art transport acceptance;
- Runtime/device acceptance;
- Environment adoption;
- final Art Direction or independent Visual-QA acceptance;
- CANON;
- production/game readiness.

## Four-root gate

- **Truth:** review-space density, serialized image identity, real render equality and the remaining GLB transfer gap are recorded separately; the portable PNG is not relabelled as an embedded-GLB proof.
- **Agency / non-domination:** Materials stops at the texture it owns. Technical Art keeps packaging/transport authority; Geometry, Runtime, Environment, Art and QA keep their own gates.
- **Continuity:** existing Building Materials PR #3 was advanced in place; the preceding Animal Materials state remains rollback-addressable at blob `8f1af0d8445f10ed63cb8d58a9867d695a9fc390`; predecessor Building review evidence remains pinned by exact hashes.
- **Wisdom before speed:** one missing prerequisite was made portable and directly render-verified instead of jumping ahead to a Materials-authored GLB, production texture stack or cross-domain policy.

## Next Materials pass

Re-scan the constellation first. Do not extend Building merely by cadence. If this Building chain remains highest leverage, wait for or consume an explicit Technical-Art-owned material-bearing GLB / exact UV-material-image transport identity, then use the shared UC observer plus real target-host renders to compare embedded directional density against the existing Materials `320 × 320 px/m` review reference. Do not package that GLB from Materials unless ownership is explicitly reassigned.
