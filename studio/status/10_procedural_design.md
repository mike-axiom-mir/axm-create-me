# 10 — Procedural Design Specialist Status

Date: 2026-09-17
State: **PASS_BOUNDED_SOURCE_BOX_FACE_UV_SOURCE_FRAME_REBIND_FAMILY / EXISTING OBJECT PR #11 ADVANCED / 2 EXACT HARD-SURFACE SOURCE FRAMES / 4 UV OUTPUTS EXACTLY PRESERVED / 2 DISTINCT BASIS PLANES / 6 FAIL-CLOSED CONTROLS / NO AXIS GUESSING OR SOURCE-UV ADOPTION / AXM-CREATE-ME COORDINATION-ONLY / FOUR ROOTS PRESERVED**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/10_procedural_design.md`, the current specialist status set, and the live design-repository constellation across Weapon, Armor, Character, Unit, Animal, Building, Nature, Weather, Map, Object and Misc before selecting work.

`axm-create-me` remains **coordination only**. Product/evidence work stayed in the existing `mike-axiom-mir/axm-object-design` Procedural PR #11. The internal merge gate remains the four AXM roots: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh constellation / duplication scan

- **Weapon / Armor / Unit / Misc:** no stronger unoccupied repeated pattern justified opening a Procedural lane.
- **Character:** current Geometry / Organic / Rigging work remains centered on held shoulder/topology/deformation choices; Procedural did not turn an unresolved form into a generator.
- **Animal:** Runtime / Rigging / Animation / Materials still own indexed-weight, tangent and deformation evidence. No duplicate lane was opened.
- **Building:** Geometry / Hard Surface / Environment continue source-domain and receiver work; existing Building Procedural families already cover bounded repeated generation.
- **Nature:** existing Procedural PR #4 already owns the nine retained branch/crown variants and bounded Geometry/VFX/Map compatibility passes.
- **Weather:** existing Procedural PR #3 already owns retained seed variation and family-wide Map receiver evidence.
- **Map:** Environment / VFX / Runtime / Technical Art remain active on world receiving and indexed-domain questions; Procedural did not copy receiver logic.
- **Object:** Hard Surface PR #26 now owns exact source-space service-surface reference frames for the same two source faces already consumed by the existing Procedural UV family. The previous Procedural UV path still repeated equivalent per-surface basis declarations locally. That duplicated source-orientation authority was the strongest fresh bounded repair.

No new PR, automatic unwrap system, generic surface discovery, atlas repacker, texture generator, UC ontology or replacement Hard-Surface/Materials lane was opened.

## Selected bounded improvement

Repository: `mike-axiom-mir/axm-object-design`

Existing draft PR: **#11 — `Procedural: add bounded bilateral service-module configuration family`**

Exact tested Procedural head:

**`c9f5eeb74a7cd5aceba4ad41b4b3e34fb0b040e1`**

Observed PR state: **OPEN / DRAFT / MERGEABLE**.

New bounded contract:

**`axm.object-source-box-face-uv-source-frame-rebind-family/v0.1`**

Scoped result:

**`PASS_BOUNDED_SOURCE_BOX_FACE_UV_SOURCE_FRAME_REBIND_FAMILY`**

Decision:

**`PASS_SOURCE_FRAME_REBOUND_REVIEW_UV_FAMILY_ONLY__NO_SOURCE_UV_OR_MATERIALS_ADOPTION`**

## Why this deserves proceduralization

The existing planar-UV family already proves four materially different review outputs over two exact source faces, but its source-space U/V orientation is expressed again inside Materials/Procedural review configuration. Hard Surface PR #26 now owns the exact source reference frames for those same surfaces:

1. `lid_inner_service_surface` — primary X, secondary Y, outward -Z, orientation parity -1;
2. `front_service_panel_outer_service_surface` — primary X, secondary Z, outward -Y, orientation parity +1.

The repeated repair is therefore narrow: derive the Procedural review basis from those exact Hard-Surface-owned frames, keep Materials density/origin/appearance authority unchanged, then require exact byte-stable logical UV output continuity across both surfaces and both retained density variants. Procedural must fail closed if either authority disagrees rather than silently choosing one.

## Exact provenance / authority boundaries

Previous Procedural UV family remains pinned unchanged:

- profile: `assets/modular-equipment-case-001/source-box-face-uv-projection-family-001.json`;
- profile Git blob: **`193ab5340953601d6d88f38b3fa480221821c93b`**;
- required result: `PASS_BOUNDED_SOURCE_BOX_FACE_UV_PROJECTION_FAMILY`.

Hard-Surface frame donor is pinned exactly:

- repository: `mike-axiom-mir/axm-object-design`;
- PR: #26;
- head: **`6a9593b942e7cda4befe8106bfb8cc260e3e6b5f`**;
- contract: `assets/modular-equipment-case-001/service-surface-reference-frames-001.json`;
- contract Git blob: **`ffb0671eac025f0d39eeb412b58e0ae017e21d99`**;
- schema: `axm.object-hard-surface-service-surface-reference-frames/v0.1`.

Materials UV review donor remains pinned at exact head **`ad2378f18be55efa1f8e6dba9d8823c6b5d500e1`**. Materials retains UV density, origin and review-appearance authority. Hard Surface retains source geometry, surface semantics and source-space frame authority. Procedural owns only deterministic bounded derivation/replay evidence.

## Smallest reusable implementation

Added only inside existing Object Procedural PR #11:

- `assets/modular-equipment-case-001/source-box-face-uv-source-frame-rebind-family-001.json` — exact two-surface / two-variant contract with discovery, fallback, axis guessing and automatic source-UV adoption forbidden;
- `tools/build_source_box_face_uv_source_frame_rebind_family.py` — validates exact donor identities, validates cardinal/orthogonal frame structure and selector/outward/parity relations, derives U/V basis from the source frame, preserves Materials density/origin values, and demands exact continuity with the prior Procedural UV outputs;
- `tests/test_source_box_face_uv_source_frame_rebind_family.py` — two-plane derivation plus fail-closed authority tests;
- `.github/workflows/object-source-box-face-uv-source-frame-rebind-family.yml` — reconstructs exact source-face + prior-UV prerequisites and tests the family on Python 3.11 and 3.13.

No source geometry, Hard-Surface contract, Materials contract, source UV asset, texture asset, UC code or Profession Fabric code was changed.

## Materially different output pressure

The family replays **2 exact source surfaces × 2 exact review density variants = 4 outputs** and requires all four new outputs to match their previous Procedural outputs exactly.

### Lid inner service surface

Source-owned basis: **X→U / Y→V**, normal axis Z.

- candidate physical span: **0.78 × 0.48 m**;
- candidate UV span: **15.6 × 9.6**;
- candidate anisotropy: **1.0**;
- 3×-V control UV span: **15.6 × 28.8**;
- control anisotropy: **3.0**.

### Front service-panel outer surface

Source-owned basis: **X→U / Z→V**, normal axis Y.

- candidate physical span: **0.468 × 0.156 m**;
- candidate UV span: **9.36 × 3.12**;
- candidate anisotropy: **1.0**;
- 3×-V control UV span: **9.36 × 9.36**;
- control anisotropy: **3.0**.

Evidence reports **2 distinct source frames, 2 distinct basis planes, 4 distinct UV outputs and 4/4 exact previous-output matches**. This is a continuity repair, not a new aesthetic or production-UV choice.

## Failure bounds

Six retained controls fail closed:

1. exact Hard-Surface frame donor-head drift;
2. duplicate source-frame identity;
3. non-cardinal primary axis;
4. orientation-parity / outward-normal relation drift;
5. selector / outward-normal relation drift;
6. Materials review basis conflicting with the source-owned Hard-Surface frame.

The family also forbids surface discovery, axis guessing from geometry, fallback, automatic production-UV adoption and source-authority rewrite.

## Exact CI / retained evidence

Exact-head workflow **`35201381690 — Object source box-face UV source-frame rebind family evidence`** completed **SUCCESS** at `c9f5eeb74a7cd5aceba4ad41b4b3e34fb0b040e1`.

All inherited workflows returned for the same exact head are also green, including Hard-Surface interface, service-module fit and registration-key, service-module configuration family, source-face extraction, source-face UV projection and source-face atlas-layout evidence.

Retained new artifact:

- artifact ID: **`10487449185`**;
- name: `object-source-box-face-uv-source-frame-rebind-family-001-evidence`;
- uploaded size: **26,119 B**;
- GitHub SHA-256: **`8fdd3acbe3500c7a59a41cba965e5e11cffea0498c565bd69c6319428986da0d`**;
- independently downloaded and rehashed to the exact same SHA-256;
- archive contains **25 files**, including exact source-face prerequisites, all four prior UV specimens, four rebound specimens, exact Hard-Surface frame contract/provenance and summary;
- rebound summary digest: **`246395c4251d9ad0b0a6bd72946b41f1223ead12ae2cd9bfda0796185dfda5d3`**.

## Placement / authority boundary

- **Hard Surface:** source geometry, source surface IDs/semantics and source-space reference frames.
- **Materials:** UV density/origin, material/lookdev choices, atlas/padding/sampling choices.
- **Procedural:** deterministic exact frame-to-review-basis derivation plus bounded continuity/failure evidence.
- **Rigging / Animation:** motion/deformation authority unchanged.
- **Technical Art:** production import/UV/tangent/texture transport remains separate.
- **Runtime:** target-device memory/draw/shader/performance acceptance remains separate.
- **Art Direction / Visual QA:** final rendered preference/acceptance remains separate.
- **UC / Profession Fabric:** unchanged; two exact cardinal source frames do not justify a generic UV-frame ontology.

## Explicit non-claims

This PASS does **not** establish arbitrary mesh unwrapping, automatic seam discovery, arbitrary source-frame inference, production UV adoption, source UV mutation, material assignment, texture creation, atlas adoption, target-engine transport, runtime/gameplay/physics acceptance, Art Direction/Visual-QA final acceptance, UC/PF promotion, CANON, production/game readiness or Procedural Design mastery.

## Four-root check

- **Truth:** exact donor head/blob identities are checked; the source-owned frames and Materials review basis must agree; 4/4 previous UV outputs are reproduced exactly; exact-head CI is green and the downloaded artifact hash matches GitHub.
- **Agency / non-domination:** Procedural does not choose or silently rewrite source frames, UV density/origin, material appearance, production adoption or downstream acceptance.
- **Continuity:** the prior source-face and UV families are rebuilt unchanged; all four existing UV outputs survive the authority rebind exactly; inherited exact-head workflows remain green.
- **Wisdom before speed:** one duplicated orientation responsibility was removed only after its source owner supplied an exact bounded contract; no generic unwrap/frame-discovery framework was invented.

## Prior retained Procedural chain

Earlier Object Procedural evidence remains intact in PR #11: bounded service-module configurations, direct source-frame receiver placement, exact source-box face extraction, two-surface planar review UV projection and the owner-declared two-surface atlas-layout family. Nature, Weather and Building bounded families remain in their existing Procedural PRs. This status compresses prior branches; it does not replace their retained evidence or roots.

## Next Procedural pass

Re-scan the full constellation first. Do not continue Object merely because PR #11 is open. Extend this chain only when a fresh owner-backed repeated need exists and its authority boundary is clearer than the current alternatives; otherwise choose another repository with a stronger unoccupied repeated manual pattern.
