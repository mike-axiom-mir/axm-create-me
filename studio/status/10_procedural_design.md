# 10 — Procedural Design Specialist Status

Date: 2026-09-17
State: **PASS_BOUNDED_SOURCE_BOX_FACE_UV_PROJECTION_FAMILY / EXISTING OBJECT PR #11 ADVANCED / 2 EXACT SOURCE FACES × 2 EXACT MATERIALS DENSITY VARIANTS / X-Y + X-Z PLANES / 4 DISTINCT UV PAYLOADS / 5 FAIL-CLOSED CONTROLS / NO SOURCE UV OR MATERIALS ADOPTION / AXM-CREATE-ME COORDINATION-ONLY / FOUR ROOTS PRESERVED**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/10_procedural_design.md`, the current specialist status set, and the live design-repository constellation across Weapon, Armor, Character, Unit, Animal, Building, Nature, Weather, Map, Object and Misc before selecting work.

`axm-create-me` remains **coordination only**. Product/evidence changes stayed in the existing `mike-axiom-mir/axm-object-design` Procedural PR #11. The four AXM roots remain the internal merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh constellation / duplication scan

- **Weapon / Armor / Unit / Misc:** no fresh grounded repeated source operation justified opening a Procedural lane.
- **Character / Animal:** Geometry, Organic, Rigging, Materials and related lanes remain active on topology/deformation/transport questions; Procedural did not freeze unresolved work into a generator.
- **Building:** existing Procedural PR #4 already owns its bounded header/receiver/shared-placement families; current work is dominated by source/receiver and runtime ownership rather than a new repeated generation gap.
- **Nature:** existing Procedural PR #4 already owns nine bounded branch/crown variants plus Geometry/VFX/Map compatibility evidence; no new source contract required another Nature pass.
- **Weather:** existing Procedural PR #3 already owns the retained seed family and family-wide Map source-width receiver proof; no new trigger justified more Weather work.
- **Map:** current Environment/VFX/Runtime/Technical-Art lanes retain receiver/world authority; no receiver logic was copied into Procedural.
- **Object:** the strongest fresh repeated pattern appeared here. Hard Surface already source-owns two exact box faces, the previous Procedural pass already proved their bounded exact extraction, and Materials PR #6 now reviews the same physical-density UV operation across both faces using two materially different source-local planes. Existing Object PR #11 was therefore the correct non-duplicating lane.

No new PR, universal unwrap system, surface-discovery framework, UC ontology or second Materials/Hard-Surface lane was opened.

## Selected bounded improvement

Repository: `mike-axiom-mir/axm-object-design`

Existing draft PR: **#11 — `Procedural: add bounded bilateral service-module configuration family`**

Exact Procedural head:

**`58946a701a92e39165eeaf915ce08f13d69e4bf7`**

Observed PR state: **OPEN / DRAFT / MERGEABLE**.

New bounded contract:

**`axm.object-source-box-face-uv-projection-family/v0.1`**

Scoped result:

**`PASS_BOUNDED_SOURCE_BOX_FACE_UV_PROJECTION_FAMILY`**

Decision:

**`PASS_DERIVED_PLANAR_UV_COORDINATE_FAMILY_ONLY__NO_SOURCE_UV_OR_MATERIALS_ADOPTION`**

## Why this deserves proceduralization

The preceding pass established two exact Hard-Surface-owned face meshes:

1. `lid_inner_service_surface` on `lid_shell`, selector `source_local_min_z_face`;
2. `front_service_panel_outer_service_surface` on `front_service_panel`, selector `source_local_min_y_face`.

Materials PR #6 now performs the same bounded review operation on both: project exact source-local planar axes into U/V, then evaluate an isotropic physical-density candidate against an explicit 3× V-density negative control. The operation is repeated, deterministic and parameter-bounded, while the semantic choices already belong to Hard Surface and Materials.

Procedural therefore automated only the mechanical coordinate projection over those exact reviewed inputs. It does not discover surfaces, choose materials, decide UV taste, or author production UVs.

## Exact provenance / authority boundaries

Hard-Surface geometry authority remains upstream through the existing exact face-extraction family on PR #11. Its retained source mesh identities are unchanged:

- lid inner mesh SHA-256: **`bb58b4b8b78d006fbd04d0fa0ebec6a85e471880bc3d551c5b753a9bc1b51e9f`**;
- front service-panel mesh SHA-256: **`51e3288f7434d228292e3341f5bbb8d93fc628bfcc504761961502f4d1d909b6`**.

Materials donor is pinned exactly to Object Materials PR #6:

- head: **`ad2378f18be55efa1f8e6dba9d8823c6b5d500e1`**;
- shared density-family blob: `beef371f1c0179052955f9bb43505e9829e3a9bb`;
- front-panel source-identity rebind blob: `09bcb29d45677e7bc0b7b05adcfc592bc26bbd83`;
- front-panel review blob: `c473d20a466b97ea2e7d513a4efe78533245de77`.

Reviewed candidate density remains **0.05 m per UV unit on U and V**. The exact negative controls remain **0.05 m/UV on U and 1/60 m/UV on V**, preserving the reviewed 3× anisotropy pressure.

## Smallest reusable implementation

Added only to existing Object Procedural PR #11:

- `assets/modular-equipment-case-001/source-box-face-uv-projection-family-001.json` — two-surface/two-variant exact contract with discovery/fallback forbidden;
- `tools/build_source_box_face_uv_projection_family.py` — validates exact donor heads/blobs, consumes exact prior face outputs, derives deterministic planar UV coordinates and emits JSON/OBJ review evidence;
- `tests/test_source_box_face_uv_projection_family.py` — bounded plane/density/failure tests;
- `.github/workflows/object-source-box-face-uv-projection-family.yml` — exact Hard-Surface/Materials dependency reconstruction, full Object regression suite, retained evidence.

No Object source geometry, Hard-Surface contract, Materials review file, source UV set, texture asset, UC code or Profession Fabric code was changed.

## Materially different output pressure

The family tests **2 exact source faces × 2 exact density variants = 4 outputs**.

### Lid inner service surface

- basis: `SOURCE_LOCAL_X_TO_U__SOURCE_LOCAL_Y_TO_V`;
- physical span: **0.78 × 0.48 m**;
- isotropic candidate UV span: **15.6 × 9.6**;
- 3× V-density control UV span: **15.6 × 28.8**;
- candidate output digest: `1aee9bd9d2579c96d4348086bb75a7efea8e70c18e9dd4586d4abe68c9085cb1`;
- negative-control output digest: `fafb5086638ffb998b277924ed8860efa4712d0d608b712f26d125efccb20a52`.

### Front service-panel outer surface

- basis: `SOURCE_LOCAL_X_TO_U__SOURCE_LOCAL_Z_TO_V`;
- physical span: **0.468 × 0.156 m**;
- isotropic candidate UV span: **9.36 × 3.12**;
- 3× V-density control UV span: **9.36 × 9.36**;
- candidate output digest: `a408a4008eb12d818e22b78ead0d9ae291922b92ce8eb0ea86a43563c3b3ee83`;
- negative-control output digest: `cb3764ec15ab4fa9dc9d271a24edc7e06e9e62953dadd0ea54c89d00bc500559`.

Evidence confirms **2 distinct source geometry identities, 2 distinct basis planes, 2 distinct isotropic candidate spans and 4/4 distinct UV payload identities**. Both candidates preserve anisotropy **1.0**; both explicit controls preserve anisotropy **3.0**. This is not one lucky projection repeated twice.

## Failure bounds

Five retained controls fail closed:

1. exact Materials donor-head drift;
2. duplicate retained surface identity;
3. exact Materials family-contract blob drift;
4. a UV basis that includes the face-normal axis;
5. zero/nonpositive physical UV density.

The family refuses automatic surface discovery and fallback. It does not infer “similar” components, arbitrary planes, arbitrary unwraps or substitute density values.

## Exact CI / retained evidence

All six workflows associated with exact Object head `58946a701a92e39165eeaf915ce08f13d69e4bf7` completed successfully, including the new lane:

- **`35191682065 — Object source box-face UV projection family evidence` — SUCCESS** on Python 3.11 and 3.13;
- existing source-box-face extraction, configuration-family, registration-key, service-module fit and Hard-Surface interface workflows also remain green on the same head.

Retained new artifact:

- artifact ID: **`10484675029`**;
- name: `object-source-box-face-uv-projection-family-001-evidence`;
- uploaded size: **20,363 B**;
- GitHub SHA-256: **`c27c190af6d78875ca867dfbb0a22c69db6d9ee6c2ec3447629703c9f4cbe84b`**;
- independently downloaded and rehashed to the exact same SHA-256;
- archive contains **22 files**, including both exact source-face prerequisites, four JSON/OBJ UV specimens, Materials contracts/rebind/review, exact donor heads, family profiles and summary.

Result returned to Object Procedural PR #11 as comment **`5710360035`** and to Materials PR #6 as downstream compatibility comment **`5710361284`**, explicitly without transferring source/review authority or requesting production adoption.

## Placement / authority boundary

- **Hard Surface:** owns source geometry, surface IDs, component semantics and selector meaning.
- **Materials:** owns reviewed material identity, basis/origin choice, physical-density candidate and negative-control meaning.
- **Procedural:** owns only repeated deterministic derivation of review-coordinate evidence from those exact upstream contracts.
- **Technical Art / Runtime:** retain transport, target-engine and performance decisions.
- **Art Direction / Visual QA:** retain visual preference/acceptance.
- **UC / Profession Fabric:** unchanged; two reviewed Object box faces do not justify a universal UV/unwrap system.

## Explicit non-claims

This PASS does **not** establish arbitrary mesh unwrapping, automatic seam choice, packing/atlasing, arbitrary surface discovery, production UV adoption, source UV mutation, material assignment, texture creation, runtime/engine behavior, physics/gameplay, Art Direction/Visual-QA acceptance, UC/PF promotion, CANON, production/game readiness or Procedural Design mastery.

## Four-root check

- **Truth:** exact Hard-Surface-derived face identities plus exact Materials head/blobs are verified before projection; artifact and independent ZIP hash agree.
- **Agency / non-domination:** Procedural does not choose source semantics, material taste, adoption or downstream authority.
- **Continuity:** existing Object Procedural work remains intact and all same-head inherited workflows stay green.
- **Wisdom before speed:** only the proven two-face/two-variant repeated operation was automated; no generic unwrap framework or horizontal promotion was attempted.

## Next Procedural pass

Re-scan the full constellation first. Do not continue Object merely because PR #11 is open. A future UV step requires a fresh owner-backed repeated need such as explicit seam/atlas/bake contracts; otherwise select another repository with a stronger new repeated manual pattern.
