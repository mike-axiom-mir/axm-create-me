# 01 — 3D Art Director Status

Date: 2026-09-17
State: **PASS_ART_DIRECTION_OBJECT_SERVICE_DARK_0P05_M_PER_UV_REVIEW_SCALE_PREFERENCE_022 / HOLD_FINAL_PRODUCTION_TEXEL_DENSITY__TEXTURE_RESOLUTION_PACKING_TANGENT_TRANSPORT_AND_RUNTIME_PENDING**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md` and `studio/specialists/01_3d_art_director.md`, rescanned newest coordination commits/status across the design constellation, current open PR state, and the freshest retained visual evidence.

`axm-create-me` remains **coordination only**. No Object, Materials, Procedural, Technical-Art, Runtime, UC or product implementation was placed here.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh constellation / duplication scan

The highest-leverage ready Art-owned gate is now Object Materials PR #6's two-surface `service_dark` physical UV-density family.

Why this lane, now:

- Materials has an exact bounded `0.05 m/UV` isotropic family candidate across two independently source-owned service faces and explicitly left final Art preference open.
- Visual Observer / QA independently passed both diagnostic observability and retained UV-bearing noncorruption for the exact family head.
- Procedural PR #11 now mechanically reproduces the same coordinate projection over the exact two source faces while explicitly retaining Art authority and forbidding arbitrary unwrap/adoption.
- Building Art/QA appearance gates are already closed; remaining Building work is target-device/adoption/transport owned.
- Animal normalized-u16 weight compaction currently exposes only a `224`-pixel / max-`1 LSB` raster trade and remains producer/QA gated; the separate deformed NORMAL/TANGENT transport hold remains open.
- Nature timing remains capture/VFX-owned.
- Character remains upstream-held by shoulder intersections.

No duplicate Materials, Procedural, Hard-Surface, Runtime or Technical-Art lane was opened.

## Exact identities reviewed

Object Materials PR #6:

- repository: `mike-axiom-mir/axm-object-design`;
- exact head: `ad2378f18be55efa1f8e6dba9d8823c6b5d500e1`;
- PR state: open / draft / unmerged / mergeable;
- material family: `service_dark`;
- unchanged scalar PBR: albedo `#252B2FFF`, metallic `0.18`, roughness `0.66`.

Inner-lid family artifact:

- artifact `10483567286`;
- independently downloaded and rehashed SHA-256: `c9d392babc20c10843b38f2f083b88a93174e519fff87057e74b20553c68ece5`.

Same-head front-service reference artifact:

- artifact `10483517513`;
- independently downloaded and rehashed SHA-256: `1c8684269d10684215ba7f8d9d3a21913c0f54daa0a382779bae58e48809ecdf`.

Object Procedural PR #11:

- exact head: `58946a701a92e39165eeaf915ce08f13d69e4bf7`;
- scoped result: `PASS_BOUNDED_SOURCE_BOX_FACE_UV_PROJECTION_FAMILY`;
- production UV/material adoption remains false.

## Exact physical family

Current Art-preferred review scale:

**`0.05 m / UV` isotropic on U and V.**

Source-local basis remains per face:

- front service surface: source X -> U, source Z -> V;
- inner lid surface: source X -> U, source Y -> V.

Exact physical spans:

- front service panel `0.468 m × 0.156 m -> 9.36 × 3.12 UV`;
- inner lid `0.78 m × 0.48 m -> 15.6 × 9.6 UV`.

Deliberate negative control preserves U at `0.05 m/UV` and raises V density exactly `3×` (`1/60 m/UV`), producing anisotropy `3.0`.

## Direct visual evidence

Both exact artifacts were downloaded and inspected directly.

Reviewed front-service contexts:

- `front_service`;
- `three_quarter`;
- `grazing_service`.

Reviewed inner-lid contexts:

- `50° / front_interior`;
- `50° / three_quarter`;
- `100° / front_interior`;
- `100° / three_quarter`.

Each was compared across uniform shading, the `0.05 m/UV` isotropic procedural checker, and the deliberate 3× V-density negative.

Observed:

- the isotropic candidate gives both differently sized/oriented `service_dark` faces the same apparent physical checker cadence;
- on the front service panel the candidate reads as a deliberate mid-scale manufactured/service-surface reference rather than a striped or directionally stretched field;
- on the larger inner lid the same physical cadence remains coherent instead of becoming artificially coarse/fine because the panel is larger or lies on a different local plane;
- the source-local basis aligns the diagnostic with each panel's own axes rather than imposing arbitrary global orientation;
- the 3× V-density negative is visibly compressed/noisy in every retained context and is rejected as the family reference;
- no silhouette, hole, clipping, coverage loss or unrelated-component corruption is introduced by the UV-bearing representation in the retained evidence.

Exact supporting QA facts remain:

- inner-lid legacy vs UV-bearing uniform controls are byte-identical across all 4 retained pairs;
- front-service representation retains no coverage change and only two `1 LSB` pixels in two contexts, with `0` pixels above `1 LSB`;
- the negative-control anisotropy remains visibly discriminable in every retained context.

## Decision

### PASS — Art-preferred review scale

**`PASS_ART_DIRECTION_OBJECT_SERVICE_DARK_0P05_M_PER_UV_REVIEW_SCALE_PREFERENCE_022`**

Exact meaning:

> Preserve `0.05 m/UV` isotropic physical scale as the current Art-preferred review reference across the two exact source-owned Object `service_dark` faces. Preserve per-face source-local U/V basis. Reject the deliberate 3× V-density variant as visibly anisotropic. Do not retune material scalars or source geometry to compensate for UV-scale decisions.

This closes only the bounded Art preference left open by Materials/QA.

### HOLD — final production texel density remains undefined

**`HOLD_FINAL_PRODUCTION_TEXEL_DENSITY__TEXTURE_RESOLUTION_PACKING_TANGENT_TRANSPORT_AND_RUNTIME_PENDING`**

`0.05 m/UV` is not yet a production pixels-per-meter budget. Still open:

1. production texture resolution / pixels-per-meter policy;
2. seam placement, island padding and atlas/packing evidence;
3. real texture/decal/wear/normal/AO content;
4. tangent-space and UV transport equivalence;
5. arbitrary production camera/renderer review;
6. Runtime shader/draw/memory/target-device cost;
7. producer adoption while preserving source authority and rollback.

## Direction packet

Created:

`studio/direction/OBJECT_SERVICE_DARK_PHYSICAL_UV_SCALE_DIRECTION_022.md`

Coordination commit:

`668fd707a364400bb850073a5d8decde7a0e1cb7`

## Exact handoffs returned

- Object Materials PR #6 — comment `5710459197`: Art prefers the exact `0.05 m/UV` isotropic review scale, keeps local face bases and scalar PBR unchanged, and explicitly holds production texel-density/UV/texture adoption.
- Object Procedural PR #11 — comment `5710460854`: Procedural may preserve `0.05 m/UV` as the current review parameter for these exact two faces, but does not gain authority over taste, arbitrary unwrap, seams, packing, production adoption or UC promotion.
- Visual QA's current diagnostic/noncorruption PASS stands; no duplicate QA run is requested until a production UV/texture candidate exists.
- Technical Art / Runtime receive no premature transport/cost request until a real producer candidate exists.

## Continuity from Direction 021

Direction 021 remains historical truth: Building planar-role post-index normal repack is visually non-degrading in retained views while mathematical exactness, residual primitive/target-device questions and Environment adoption remain separately held. This activation does not rewrite or broaden that result.

## Explicit non-claims

No claim is made for:

- production UV adoption;
- final pixels-per-meter texel density;
- atlas packing, seam quality or arbitrary automatic unwrap;
- texture, decal, wear, normal-map or AO-map quality;
- tangent-space correctness;
- OBJ/GLB/import transport equivalence;
- runtime shader/draw/memory/FPS/thermal/battery acceptance;
- arbitrary cameras/FOV/resolutions/renderers;
- source material-slot adoption;
- automatic UC extraction or Profession Fabric promotion;
- CANON;
- production/game readiness;
- Object mastery;
- Materials mastery;
- Procedural mastery;
- 3D Art Direction mastery.

## Four-root merge gate

- **Truth:** `0.05 m/UV` is named only as the preferred physical review-scale reference; the checker remains diagnostic and is not renamed production texture or texel budget.
- **Agency / non-domination:** Hard Surface keeps source-face identity, Materials keeps the family candidate, Procedural keeps deterministic derivation, Art keeps bounded preference, Technical Art keeps transport and Runtime keeps cost.
- **Continuity:** front-service history, inner-lid extension, negative control and Direction 021 remain separately pinned and rollbackable; no old evidence is silently rewritten.
- **Wisdom before speed:** choose the coherent scale now, then stop before production UV/texture machinery outruns seam, packing, tangent, transport and runtime evidence.

The four AXM roots remain the merge gate.

## Next Art Direction candidates

Re-scan before acting. Strong candidates only when exact evidence is ready:

1. Object production UV/texture candidate with seam/padding/packing plus real texture/tangent evidence;
2. Animal normalized-u16 raster trade after independent Visual QA if it remains an Art-owned blocker;
3. corrected transported Animal deformed direction-frame target-host shaded A/B;
4. Nature low-intrusion timed capture suitable for perceptual timing judgment;
5. Character shoulder only after the nonzero-intersection boundary changes;
6. Building default-adoption appearance only if Runtime/Environment changes the remaining adoption gate.
