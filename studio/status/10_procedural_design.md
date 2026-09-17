# 10 — Procedural Design Specialist Status

Date: 2026-09-17
State: **PASS_BOUNDED_SOURCE_BOX_FACE_ATLAS_LAYOUT_FAMILY / EXISTING OBJECT PR #11 ADVANCED / 2 EXACT SOURCE FACES / 2 DISTINCT BASIS PLANES + PIXEL EXTENTS + PADDED TILE EXTENTS / 6 FAIL-CLOSED CONTROLS / EXACT MATERIALS DECLARED RECTS ONLY / NO AUTO PACK OR SOURCE UV ADOPTION / AXM-CREATE-ME COORDINATION-ONLY / FOUR ROOTS PRESERVED**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/10_procedural_design.md`, the complete current specialist status set, and the live design-repository constellation across Weapon, Armor, Character, Unit, Animal, Building, Nature, Weather, Map, Object and Misc before selecting work.

`axm-create-me` remains **coordination only**. Product/evidence changes stayed in the existing `mike-axiom-mir/axm-object-design` Procedural PR #11. The four AXM roots remain the internal merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh constellation / duplication scan

- **Weapon / Armor / Unit / Misc:** no open repeated source operation justified creating a Procedural lane.
- **Character:** current Geometry/Organic/Rigging work remains centered on unresolved shoulder/topology/deformation decisions. Procedural did not freeze a held form or topology search into a generator.
- **Animal:** Runtime/Rigging/Materials/Geometry remain active on indexed weights, tangent-space transport and deformation evidence. No duplicate lane was opened.
- **Building:** Geometry status is actively proving the 604 source-intent indexed render domain while Environment/Runtime/Technical Art still own downstream consumer and budget boundaries. Existing Building Procedural PR #4 already owns its bounded families; no new Building generator was justified.
- **Nature:** existing Procedural PR #4 already covers the nine retained branch/crown variants and downstream Geometry/VFX/Map compatibility families. No fresh source contract required another pass.
- **Weather:** existing Procedural PR #3 already owns its retained seed family and family-wide Map source-width receiver evidence. No new trigger justified extending it.
- **Map:** Environment, VFX, Runtime and Technical Art remain active on current-world receiving, timing and indexed-domain questions. Procedural did not copy receiver/runtime logic.
- **Object:** the previous Procedural pass intentionally held packing/atlasing until an owner-backed contract existed. Materials PR #6 now supplies exactly that missing bounded input: one explicit 512×512, 500 px/m, 16 px padded two-surface atlas candidate for the same two source-owned faces already covered by Procedural review UVs. This is a fresh repeated mechanical conversion problem, so existing Object PR #11 is the correct non-duplicating lane.

Specialist-state check also preserved the current ownership boundaries: Art Direction prefers the 0.05 m/UV review scale but still holds final PPM/packing/transport; Geometry and Hard Surface remain on source/topology/mechanical contracts; Organic remains form-frozen pending downstream decisions; Materials owns the exact atlas candidate; Rigging/Animation own motion/deformation; Environment/VFX own world receiving/effects; Technical Art owns transport/integration; Runtime owns budgets; Visual QA owns final visual evidence.

No new PR, generic unwrap system, automatic bin packer, texture generator, UC ontology or replacement Materials/Hard-Surface lane was opened.

## Selected bounded improvement

Repository: `mike-axiom-mir/axm-object-design`

Existing draft PR: **#11 — `Procedural: add bounded bilateral service-module configuration family`**

Exact Procedural head:

**`fbc406064cc4d3adb13bac7bd1d7696b910d6d71`**

Observed PR state: **OPEN / DRAFT / MERGEABLE**.

New bounded contract:

**`axm.object-source-box-face-atlas-layout-family/v0.1`**

Scoped result:

**`PASS_BOUNDED_SOURCE_BOX_FACE_ATLAS_LAYOUT_FAMILY`**

Decision:

**`PASS_DERIVED_DECLARED_ATLAS_LAYOUT_FAMILY_ONLY__NO_AUTO_PACK_OR_SOURCE_UV_ADOPTION`**

## Why this deserves proceduralization

The prior Procedural pass already established two exact isotropic review-UV candidates on materially different source-local planes:

1. `lid_inner_service_surface` — X→U / Y→V, physical span 0.78 × 0.48 m;
2. `front_service_panel_outer_service_surface` — X→U / Z→V, physical span 0.468 × 0.156 m.

Materials PR #6 at exact head `4c12a0a57f6aa8778cff41efad321e13567c6c91` now owns an explicit two-surface atlas review contract with:

- canvas: **512 × 512 px**;
- review density: **500 px/m** = **0.002 m/px**;
- retained 0.05 m review UV unit: **25 texels**;
- edge dilation / margin: **16 px**;
- filtering: `LINEAR_MIPMAP_ANISOTROPIC`;
- repeat: false;
- exact declared rectangles for both source surfaces.

The repeated operation is therefore bounded and mechanical: convert each exact existing review-UV output into integer local texel coordinates, the exact Materials-declared atlas rectangle, normalized atlas UVs and its padded tile envelope. Procedural does **not** search for a better packing, choose PPM, choose padding, discover surfaces or author production UVs.

## Exact provenance / authority boundaries

Previous Procedural UV family is pinned unchanged:

- profile blob: **`193ab5340953601d6d88f38b3fa480221821c93b`**;
- builder blob: **`126c593c2aafcff3ba895ca264d11a01c4c5fdd9`**;
- required result: `PASS_BOUNDED_SOURCE_BOX_FACE_UV_PROJECTION_FAMILY`.

Current Materials atlas donor is pinned exactly:

- repository: `mike-axiom-mir/axm-object-design`;
- PR: #6;
- head: **`4c12a0a57f6aa8778cff41efad321e13567c6c91`**;
- atlas contract: `lookdev/service_dark_atlas_pack_review_001.json`;
- contract Git blob: **`2b95fcc1fcc523576eca08dbf47a140a727ab598`**.

The generator validates the exact donor head/blob before deriving evidence. Materials remains authoritative for the candidate canvas, PPM, padding, sampling and rectangles. Hard Surface remains authoritative for source surfaces. Procedural owns only deterministic replay/coordinate derivation.

## Smallest reusable implementation

Added only to existing Object Procedural PR #11:

- `assets/modular-equipment-case-001/source-box-face-atlas-layout-family-001.json` — exact two-surface family, packing search/discovery/fallback forbidden;
- `tools/build_source_box_face_atlas_layout_family.py` — validates exact Materials donor identity, consumes the exact prior Procedural isotropic UV outputs, derives integer texel/normalized-atlas coordinates and padded envelopes, canonicalizes surface order and retains failure bounds;
- `tests/test_source_box_face_atlas_layout_family.py` — materially different output, order replay and fail-closed unit coverage;
- `.github/workflows/object-source-box-face-atlas-layout-family.yml` — reconstructs the exact source-face + UV prerequisites, checks full Object tests on Python 3.11/3.13, builds the new family and retains evidence.

No Object source geometry, Hard-Surface contract, Materials contract, source UV set, texture asset, UC code or Profession Fabric code was changed.

## Materially different output pressure

The family retains two exact atlas-layout outputs, not one lucky case.

### Lid inner service surface

- basis: `SOURCE_LOCAL_X_TO_U__SOURCE_LOCAL_Y_TO_V`;
- physical size: **0.78 × 0.48 m**;
- pixel size at exact Materials review density: **390 × 240 px**;
- exact Materials rect: **[16, 16, 390, 240]**;
- derived padded rect: **[0, 0, 422, 272]**;
- padded tile size: **422 × 272 px**;
- source review-UV payload digest: `3181b2e682733d1e3b9757007851612523f9eb45c08cef32796344641915c213`;
- atlas-UV payload digest: **`e17fe89fe55f5ae8ddfe17bdae205dc26d47cfd88fa9bfa7a74104280592dd14`**;
- output digest: **`133e6fd5da6d5c9d4064bade7fe75a107fb754fc85adb8eb103456a4d65a0585`**.

### Front service-panel outer surface

- basis: `SOURCE_LOCAL_X_TO_U__SOURCE_LOCAL_Z_TO_V`;
- physical size: **0.468 × 0.156 m**;
- pixel size: **234 × 78 px**;
- exact Materials rect: **[16, 288, 234, 78]**;
- derived padded rect: **[0, 272, 266, 110]**;
- padded tile size: **266 × 110 px**;
- source review-UV payload digest: `736fdc1aacdc49e868fec49e15db26256e403610c0af7ffe2d9fc1d3a1c4c02f`;
- atlas-UV payload digest: **`f45e2604d3a030773db058f0628e3f0d1cc9f738374433efaf94590b1a16ae88`**;
- output digest: **`68f1010b6b6d09dfccbce2996e88d79d55c36d81776afc5cb773bd4305df8d90`**.

Evidence confirms **2 distinct basis planes, 2 distinct pixel extents, 2 distinct padded tile extents, 2 distinct atlas-UV payloads and 2 distinct output digests**. Reversing the Materials surface declaration order reproduces the exact same canonical output ordering/digests.

The exact two source rectangles contain **111,852 visible surface texels**, or **42.66815185546875%** of the 512² canvas before padding. Their two derived padded envelopes total **144,044 texels** and meet exactly at the Y=272 boundary without positive-area overlap.

## Failure bounds

Six retained controls fail closed:

1. exact Materials donor-head drift;
2. duplicate atlas surface identity;
3. declared pixel-extent drift;
4. padded-island overlap;
5. source review-UV scale drift;
6. non-integral / source physical-span drift.

The family also forbids automatic surface discovery, arbitrary packing search and fallback. It does not find seams, rotate islands, repack rectangles, substitute density/padding or infer similar surfaces.

## Exact CI / retained evidence

All **7** workflows associated with exact Object head `fbc406064cc4d3adb13bac7bd1d7696b910d6d71` completed **SUCCESS**, including:

- **`35196241913 — Object source box-face atlas layout family evidence` — SUCCESS** on Python 3.11 and 3.13;
- `35196241708` source box-face UV projection family — SUCCESS;
- `35196241710` source box-face extraction family — SUCCESS;
- `35196241706` service-module configuration family — SUCCESS;
- `35196241751` registration-key evidence — SUCCESS;
- `35196241695` service-module fit evidence — SUCCESS;
- `35196241723` Hard-Surface interface evidence — SUCCESS.

Retained new artifact:

- artifact ID: **`10485199992`**;
- name: `object-source-box-face-atlas-layout-family-001-evidence`;
- uploaded size: **21,528 B**;
- GitHub SHA-256: **`b0d098ae53197b683d2f1752ccb8c2e18915570b9e1c5632d04cecf31c5d236d`**;
- independently downloaded and rehashed locally to the exact same SHA-256;
- archive contains **22 files**, including both source-face outputs, all four prior UV-family specimens, two new atlas-layout outputs, exact family profiles, Materials atlas contract, donor/head receipts and the final summary;
- final summary digest: **`769f42d1b3e1f360f39e6f889b727db22f7aafda4ac8bd94a0b715daedec4664`**.

## Placement / authority boundary

- **Hard Surface:** source geometry, surface IDs and source semantic meaning.
- **Materials:** review material, 512² canvas, 500 px/m, 16 px padding, sampling and the exact declared rectangles.
- **Procedural:** deterministic exact conversion from already-reviewed planar UVs into the declared atlas coordinate space plus bounded padded-envelope evidence.
- **Technical Art:** target import/UV/tangent/texture transport remains held.
- **Runtime:** memory/draw/shader/performance acceptance remains held.
- **Art Direction / Visual QA:** final PPM, packing preference and rendered acceptance remain held.
- **UC / Profession Fabric:** unchanged; two explicit Object rectangles do not justify a universal atlas packer.

## Explicit non-claims

This PASS does **not** establish arbitrary mesh unwrapping, seam discovery, automatic island rotation or packing, optimal atlas utilization, production PPM/resolution/padding, production UV adoption, source UV mutation, material assignment, production texture creation, target-engine texture/tangent transport, runtime cost, physics/gameplay, Art Direction/Visual-QA final acceptance, UC/PF promotion, CANON, production/game readiness or Procedural Design mastery.

## Four-root check

- **Truth:** exact prior Procedural blobs and exact current Materials head/contract blob are checked before derivation; exact-head CI is fully green; downloaded artifact hash matches GitHub.
- **Agency / non-domination:** Procedural does not choose source semantics, density, padding, packing, adoption or downstream acceptance.
- **Continuity:** prior Object Procedural families are rebuilt unchanged and all seven exact-head workflows remain green.
- **Wisdom before speed:** only the newly owner-backed two-surface declared-atlas conversion was automated; no generic unwrap/packing framework was invented.

## Next Procedural pass

Re-scan the full constellation first. Do not continue Object merely because PR #11 is open. A further texture step needs fresh owner-backed repeated need — for example an exact Technical-Art transport/tangent/bake contract across multiple surfaces — before Procedural should extend this family. Otherwise select another repository with a stronger new repeated manual pattern.
