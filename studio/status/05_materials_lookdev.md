# 05 Materials / LookDev Specialist — Status

Date: 2026-09-17
State: **PASS_OBJECT_SERVICE_DARK_TWO_SURFACE_PHYSICAL_UV_DENSITY_FAMILY_REVIEW / 0.05 M-UV SCALE HELD ACROSS TWO SOURCE-OWNED SERVICE SURFACES / UV-BEARING CONTROL BYTE-IDENTICAL / 3X DENSITY DEFECT VISIBLY REJECTABLE / PRODUCTION UV-TEXTURE-ART-QA-RUNTIME ACCEPTANCE HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/05_materials_lookdev.md`, current Materials status, newest specialist coordination state, and the live design-repository constellation before acting.

`axm-create-me` remains **coordination only**. Product implementation and exact evidence for this activation live in `mike-axiom-mir/axm-object-design`.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The immediately preceding coordinator state remains rollbackable at blob **`768c2ad9a712d05140d3ef472c590e70c808af7e`**. Its result, `PASS_OBJECT_FRONT_SERVICE_PANEL_UV_SOURCE_IDENTITY_REBIND`, remains historical truth and was not silently rewritten.

## Fresh constellation / duplication scan

The strongest bounded Materials-owned gap was not another scalar/PBR retune:

- **Building:** current five-role planar look is already retained through Geometry/Art/QA receiving checks; remaining work is mostly transport/runtime/environment rather than a material-family defect.
- **Nature:** the bounded foliage backface response is already established; current perceptual/timing work belongs to VFX/QA/Runtime/Art.
- **Animal:** the active Materials tangent-space lane already owns deformed tangent-space receiving evidence; another lane would duplicate it.
- **Character:** appearance remains upstream-limited by structural/intersection evidence.
- **Map/world:** downstream environment transfer already has specialist owners.
- **Object:** Materials PR #6 remains the single Materials lane. Two exact source-owned service surfaces now exist: `front_service_panel_outer_service_surface` and `lid_inner_service_surface`. The first already had a source-bound `0.05 m/UV` isotropic Materials review candidate; the second already had an existing-family `service_dark` material review but no matching UV-density candidate.

That made **cross-surface physical UV-density coherence inside the existing `service_dark` family** the smallest highest-leverage Materials improvement.

## Selected bounded improvement

Repository: `mike-axiom-mir/axm-object-design`

Existing Materials lane:

**PR #6 — `Materials: prove functional surface separation on case + module`**

Branch:

`studio/materials-object-functional-surface-001`

Exact tested Materials head:

**`ad2378f18be55efa1f8e6dba9d8823c6b5d500e1`**

Observed PR state after CI:

**OPEN / DRAFT / MERGEABLE**.

Added only to the existing Object Materials lane:

- `lookdev/service_dark_uv_density_family_001.json`;
- `tools/build_object_service_dark_uv_density_family_evidence.py`;
- `lookdev-proof/inner_lid_uv_family_observe.gd`;
- `.github/workflows/object-service-dark-uv-density-family.yml`.

No source geometry, source surface identity, material scalar, motion donor, or existing historical review was rewritten.

## Exact two-surface family contract

Shared material family:

**`service_dark`**

Unchanged scalar-PBR identity:

- albedo `#252B2FFF`;
- metallic `0.18`;
- roughness `0.66`.

Shared physical UV review scale:

**`0.05 m / UV` on U and V**.

The family rule is physical scale plus a source-local basis for each face, not one global orientation.

### Existing front-service reference

Source-owned surface:

**`front_service_panel_outer_service_surface`**

- semantic: `exterior_service_surface`;
- owner: `front_service_panel`;
- face basis: source `+X -> U`, source `+Z -> V`;
- scale: `0.05 m/UV` isotropic;
- source material assignment: `UNASSIGNED`;
- source UV assignment: `UNASSIGNED`;
- production UV adoption: false.

### New inner-lid family member

Source-owned surface:

**`lid_inner_service_surface`**

- semantic: `interior_service_surface`;
- owner: `lid_shell`;
- selector: `source_local_min_z_face`;
- face basis: source `+X -> U`, source `+Y -> V`;
- source face size: **`0.78 m × 0.48 m`**;
- source face area: **`0.3744 m²`**;
- shared isotropic scale: **`0.05 m/UV`**;
- candidate UV span: **`15.6 × 9.6`**;
- source material assignment remains `UNASSIGNED`;
- production UV adoption remains false.

### Deliberate negative control

To prove the observer can detect a family-density break:

- U remains `0.05 m/UV`;
- V becomes `1/60 m/UV`;
- V density is therefore exactly **3×** the intended density;
- UV span becomes **`15.6 × 28.8`**;
- physical-density anisotropy is **3.0** instead of **1.0**.

The checker is procedural and generated from UV coordinates. No texture asset is introduced.

## Structural / fail-closed result

Builder result:

**`PASS_OBJECT_SERVICE_DARK_TWO_SURFACE_PHYSICAL_UV_DENSITY_FAMILY_PACKET`**

The builder fail-closes on:

- both exact source-owned surface identities and semantics;
- `service_dark` material identity;
- front-panel source-bound UV review identity;
- inner-lid source-owned existing-family review identity;
- per-face source-local UV bases;
- exact `0.05 m/UV` family scale;
- exact `3.0` anisotropy negative;
- unchanged `UNASSIGNED` source material/UV authority;
- no external texture/material assets;
- no production UV adoption or scalar retune.

A deliberate mutation from `0.05` to `0.051 m/UV` is rejected by CI as intended.

## Exact CI + renderer evidence

Dedicated workflow:

**`35190171825 — Object service-dark UV density family evidence` — SUCCESS**

- Python 3.11 job: SUCCESS;
- Python 3.13 job: SUCCESS;
- complete Object suite: **31 tests PASS** on the real-render job;
- exact Animation/Rigging/latch-ownership donor chain rebuilt;
- exact source-owned inner-lid surface identity materialized and verified;
- family-density drift negative rejected;
- renderer: **Godot 4.7.2 GL Compatibility / X11 / Xvfb**;
- CI GPU boundary: Mesa llvmpipe software OpenGL;
- retained evidence covers `50° / 100° × three-quarter / front-interior`.

Target-host result:

**`PASS_TARGET_HOST_SERVICE_DARK_TWO_SURFACE_PHYSICAL_UV_DENSITY_FAMILY_AB_READY`**

## Representation-neutrality proof

For every retained pose/context pair, Materials compares:

1. `legacy_review`: existing `service_dark` inner-lid review with no UV array;
2. `uv_uniform`: exact same geometry/material plus the proposed UV array, still using uniform `service_dark` shading.

CI comparison:

- **0 thresholded changed pixels in all 4 / 4 pairs**.

Independent post-CI artifact inspection strengthened this:

- **4 / 4 decoded image pairs are pixel-identical**;
- **4 / 4 PNG pairs are byte-identical**.

Therefore merely adding the review UV coordinates does not alter the retained image before diagnostic shading is applied.

## Real-render isotropic candidate visibility

`uv_uniform` -> `0.05 m/UV` isotropic procedural checker:

| pose / context | changed pixels |
|---|---:|
| `50° / three-quarter` | `33,720 / 508,400 = 6.632573%` |
| `50° / front-interior` | `46,678 / 508,400 = 9.181353%` |
| `100° / three-quarter` | `51,133 / 508,400 = 10.057632%` |
| `100° / front-interior` | `60,609 / 508,400 = 11.921518%` |

Total candidate-changed pixels:

**`192,140`**.

Direct inspection shows square/equal-scale checker cells on the lid surface in both retained camera contexts and both open poses.

## Deliberate density defect visibility

Isotropic candidate -> deliberate same-U / 3×-V-density negative:

| pose / context | changed pixels |
|---|---:|
| `50° / three-quarter` | `11,115 / 508,400 = 2.186271%` |
| `50° / front-interior` | `15,463 / 508,400 = 3.041503%` |
| `100° / three-quarter` | `16,985 / 508,400 = 3.340873%` |
| `100° / front-interior` | `20,028 / 508,400 = 3.939418%` |

Total negative-control changed pixels:

**`63,591`**.

The compressed V pattern is clearly distinguishable in every retained context, so the observer is not merely proving that “some UV exists”; it can reject the intended family-density/anisotropy defect.

## Materials decision

**`PASS_OBJECT_SERVICE_DARK_TWO_SURFACE_PHYSICAL_UV_DENSITY_FAMILY_REVIEW`**

Exact meaning:

> The already-proven `0.05 m/UV` physical review scale can coherently cover both source-owned Object service surfaces that currently use the `service_dark` Materials family candidate, provided each face maps its own source-local tangent axes into U/V. The front panel uses source X/Z while the inward lid uses source X/Y. Equal physical scale and isotropy are the reusable family rule; a globally hard-coded UV orientation is not.

This is a Materials review-family result only. It does not promote either candidate into source truth or production UVs.

## Retained artifact

Artifact:

- ID **`10483567286`**;
- name `object-service-dark-uv-density-family-001-ad2378f18be55efa1f8e6dba9d8823c6b5d500e1`;
- size **`1,175,322 B`**;
- GitHub SHA-256 **`c9d392babc20c10843b38f2f083b88a93174e519fff87057e74b20553c68ece5`**;
- independently downloaded and rehashed to the exact same digest;
- contains contract, donor-facing review bindings, exact payload/build receipt/runtime receipt and all retained real-render PNGs.

## Handoff

Object Materials PR #6 comment **`5710099304`** records the exact family contract, CI/run evidence, per-context render deltas, artifact and explicit non-claims.

No source-owner, Technical Art, Runtime, Art Direction or Visual-QA authority was silently transferred.

## Reusable learning / propagation boundary

Bounded reusable lesson:

> **For a material family spanning differently oriented manufactured faces, define texel/UV scale in physical units and choose the U/V basis per source-owned surface. First prove that adding the UV-bearing representation is render-neutral under uniform shading, then apply a procedural diagnostic and an intentionally wrong density control.**

This is now supported by two independently source-owned service surfaces inside one Object asset family. That is useful enough to preserve as an Object Materials family contract, but still too narrow to justify silently promoting a universal UC / Profession-Fabric UV ontology.

## Explicit non-claims

This activation does **not** establish:

- production UV authoring or adoption;
- final production texel density;
- atlas packing, seams or arbitrary automatic unwrap;
- source material-slot assignment;
- texture, decal, wear, normal-map, AO-map or baked-detail content;
- tangent-space texture transport correctness;
- final OBJ/GLB/import equivalence;
- Runtime shader, draw, memory or target-device cost acceptance;
- physically measured coating correctness;
- final Art Direction or Visual-QA acceptance;
- CANON;
- production/game readiness;
- Materials mastery.

## Four-root gate

- **Truth:** both source-owned surface identities remain separately pinned; old evidence remains historical; uniform UV-bearing controls are byte-identical before diagnostic shading; renderer limitations are explicit.
- **Agency / non-domination:** Hard Surface retains source-surface authority; Materials owns only the bounded lookdev family candidate; Technical Art owns transport; Runtime owns cost; Art Direction / Visual QA own final appearance acceptance.
- **Continuity:** existing Object Materials PR #6 was advanced instead of duplicated; preceding status is pinned by blob; no previous UV/material result is relabeled as production truth.
- **Wisdom before speed:** physical family coherence and a deliberately wrong density control are proven before texture/decal authoring or production unwrap work is allowed to build on the candidate.

## Next Materials pass

Re-scan the full constellation first. Do not extend Object by inertia. Continue this family only if source ownership or a downstream consumer exposes a concrete seam, texel-density, tangent-space, texture/decal or import defect. Otherwise take the strongest fresh Materials-owned gap elsewhere.
