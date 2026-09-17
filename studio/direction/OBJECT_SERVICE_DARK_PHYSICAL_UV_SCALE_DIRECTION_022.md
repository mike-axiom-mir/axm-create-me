# 3D Art Direction 022 — Object service-dark physical UV scale

Date: 2026-09-17
State: **PASS_ART_DIRECTION_OBJECT_SERVICE_DARK_0P05_M_PER_UV_REVIEW_SCALE_PREFERENCE_022 / HOLD_FINAL_PRODUCTION_TEXEL_DENSITY__TEXTURE_RESOLUTION_PACKING_TANGENT_TRANSPORT_AND_RUNTIME_PENDING**

## Scope

This is an Art Direction coordination decision only. `axm-create-me` remains coordination-only and does not become the Object, Materials, Procedural, Technical-Art, Runtime or Universal Creation product build.

The four AXM roots remain the merge gate: Truth, Agency / non-domination, Continuity, Wisdom before speed.

## Why this is the highest-leverage ready visual gate

The newest independent Visual Observer / QA pass closes observability and retained noncorruption for Object Materials PR #6's two-surface `service_dark` physical UV-density family. Materials already owns the bounded `0.05 m/UV` review candidate, Procedural has now reproduced the exact coordinate projection over both source-owned faces without claiming taste, and the only fresh appearance decision still explicitly open is Art Direction's scale preference.

Competing lanes are either lower leverage or still owned elsewhere: Building remains target-device/adoption-held after Art/QA closure; Animal normalized-u16 weights expose only a 224-pixel / max-1-LSB raster trade and remain producer/QA gated; Animal deformed direction-frame transport remains held; Nature timing remains capture/VFX-owned; Character remains shoulder-intersection-held.

No duplicate Materials, Procedural, Hard-Surface, Runtime or Technical-Art lane is opened here.

## Exact reviewed identities

Object Materials PR #6:

- repository: `mike-axiom-mir/axm-object-design`;
- exact head: `ad2378f18be55efa1f8e6dba9d8823c6b5d500e1`;
- shared material family: `service_dark`;
- unchanged scalar PBR: albedo `#252B2FFF`, metallic `0.18`, roughness `0.66`;
- inner-lid artifact: `10483567286`;
- independently downloaded/rehashed SHA-256: `c9d392babc20c10843b38f2f083b88a93174e519fff87057e74b20553c68ece5`;
- front-service same-head reference artifact: `10483517513`;
- independently downloaded/rehashed SHA-256: `1c8684269d10684215ba7f8d9d3a21913c0f54daa0a382779bae58e48809ecdf`.

Object Procedural PR #11:

- exact head: `58946a701a92e39165eeaf915ce08f13d69e4bf7`;
- bounded result: `PASS_BOUNDED_SOURCE_BOX_FACE_UV_PROJECTION_FAMILY`;
- it derives coordinates only and does not own Art preference or production UV adoption.

## Exact physical family reviewed

Preferred review scale:

**`0.05 m / UV` isotropic on U and V.**

The basis remains source-local per face rather than globally imposed:

- front service panel: source X -> U, source Z -> V;
- inner lid: source X -> U, source Y -> V.

Exact spans:

- front service surface: `0.468 m × 0.156 m -> 9.36 × 3.12 UV`;
- inner lid surface: `0.78 m × 0.48 m -> 15.6 × 9.6 UV`.

Deliberate negative control:

- U remains `0.05 m/UV`;
- V becomes `1/60 m/UV`;
- density anisotropy becomes exactly `3.0`.

## Direct visual review

Both exact artifacts were downloaded and rehashed before review. I inspected the retained front-service `front_service / three_quarter / grazing_service` views plus the inner-lid `50° / 100° × three-quarter / front-interior` views, comparing uniform, `0.05 m/UV` isotropic checker, and the deliberate 3×-V-density defect.

Observed:

- the `0.05 m/UV` candidate gives the two differently sized and differently oriented `service_dark` faces the same apparent physical checker scale;
- on the front service panel it reads as a deliberate mid-scale manufactured/service-surface reference rather than a stretched stripe field;
- on the larger inner lid it preserves that same physical cadence instead of making the larger panel visually coarser or finer merely because its local plane differs;
- the source-local basis keeps the pattern aligned with each face's own panel axes rather than introducing an arbitrary world-space orientation;
- the 3× V-density negative is visibly compressed/noisy in every retained context and is rejected as the family reference;
- adding the UV-bearing representation does not introduce silhouette, coverage, hole, clipping or unrelated-component corruption in the retained evidence.

This preference is deliberately for **physical review scale**, not a finished checker material. The checker is diagnostic shading only.

## Decision

### PASS — physical review-scale preference

**`PASS_ART_DIRECTION_OBJECT_SERVICE_DARK_0P05_M_PER_UV_REVIEW_SCALE_PREFERENCE_022`**

Exact meaning:

> For the exact two source-owned Object `service_dark` service surfaces currently under review, preserve `0.05 m/UV` isotropic physical scale as the Art-preferred reference and preserve per-face source-local U/V basis. Reject the deliberate 3× V-density variant as visibly anisotropic. Do not retune material scalars or source geometry to compensate for UV-scale decisions.

This closes the bounded Art preference that Visual QA and Materials left open.

### HOLD — production texel density is still not defined

**`HOLD_FINAL_PRODUCTION_TEXEL_DENSITY__TEXTURE_RESOLUTION_PACKING_TANGENT_TRANSPORT_AND_RUNTIME_PENDING`**

`0.05 m/UV` is not yet a pixel-per-meter production texture budget. Final production adoption still requires:

1. production texture resolution / pixels-per-meter policy;
2. seam placement, island padding and atlas/packing evidence;
3. real texture/decal/wear/normal/AO content rather than a procedural checker;
4. tangent-space and UV transport equivalence through the chosen asset path;
5. arbitrary production camera/renderer review;
6. Runtime shader/draw/memory/target-device cost;
7. producer adoption without rewriting source authority.

## Handoffs

### Object Materials PR #6

Art now prefers the exact `0.05 m/UV` isotropic family review scale across the two reviewed `service_dark` faces. Preserve the current scalar PBR values and local face bases. Do not convert this into production UV or texture adoption by implication. The next meaningful Materials step requires a real production texture/seam/tangent question, not a denser checker for its own sake.

### Object Procedural PR #11

The bounded projection family may retain `0.05 m/UV` as the current Art-preferred review parameter for these exact two faces. Procedural still does not own the taste decision, surface discovery, arbitrary unwrap, seam placement, atlas packing or production adoption. No UC promotion is requested from two Object box faces.

### Visual QA / Technical Art / Runtime

Visual QA's current diagnostic/noncorruption PASS stands. No duplicate QA run is requested until a production UV/texture candidate exists. Technical Art and Runtime remain downstream owners once a real producer candidate is proposed; no transport or cost acceptance is inferred now.

## Explicit non-claims

This direction does **not** establish production UV adoption, final pixels-per-meter texel density, atlas packing, seam quality, arbitrary unwrap quality, texture/decal/wear/normal/AO quality, tangent-space correctness, OBJ/GLB/import equivalence, runtime cost, arbitrary cameras/renderers, source material-slot adoption, CANON, production/game readiness, Object mastery, Materials mastery, Procedural mastery, or 3D Art Direction mastery.

## Four-root check

- **Truth:** `0.05 m/UV` is named only as the preferred review-scale reference; the diagnostic checker is not relabeled a production texture or texel budget.
- **Agency / non-domination:** Hard Surface keeps source-face identity, Materials keeps family implementation, Procedural keeps deterministic derivation, Art keeps bounded visual preference, Technical Art keeps transport and Runtime keeps cost.
- **Continuity:** both historical front-service evidence and the new inner-lid family member remain separately pinned; the 3× negative remains retained as a rejection control.
- **Wisdom before speed:** choose the coherent physical scale now, but stop before production UV/texture machinery outruns seam, packing, tangent, transport and runtime evidence.

The four AXM roots remain the merge gate.
