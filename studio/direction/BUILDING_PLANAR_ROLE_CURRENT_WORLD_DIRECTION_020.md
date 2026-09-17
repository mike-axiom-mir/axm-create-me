# 3D Art Direction 020 — Building planar-role current-world receiver

Date: 2026-09-17
State: **PASS_ART_DIRECTION_BUILDING_PLANAR_ROLE_CLEAN_MANUFACTURED_READ_PREFERENCE_020 / PASS_ART_DIRECTION_PLANAR_ROLE_POST_NORMAL_INDEXING_RETAINED_VIEW_NONDEGRADATION_020 / HOLD_DEFAULT_ADOPTION_PENDING_INDEPENDENT_QA_RESIDUAL_PRIMITIVE_COST_AND_TECHNICAL_ART**

## Scope

This is an Art Direction coordination decision only. `axm-create-me` remains coordination-only and does not become the Building or Map product build.

The four AXM roots remain the merge gate:

1. Truth.
2. Agency / non-domination.
3. Continuity.
4. Wisdom before speed.

## Exact reviewed identities

Current-world owner lane:

- repository: `mike-axiom-mir/axm-map-design`;
- Environment PR #24 exact head: `b758f9ca006ec5885ff1c2c52e2fb09e9ccdd464`;
- exact planar-role Environment artifact: `10481340680`;
- downloaded archive SHA-256: `96d6bd6a0ed6e6edb0fc129484dd02769f7fd13952ad1a7eabeda8ffe681ee74`.

Source owner:

- repository: `mike-axiom-mir/axm-building-design`;
- Hard-Surface PR #11 exact head: `93f22e4eeb9bb32516d4b11f8d8bcf47d9792910`;
- representation: `boundary-only-planar-role-rectangle-render-001`;
- `168` planar rectangles / `672` source receiver vertices / `336` triangles / `5` material roles;
- semantic source remains `header-segmented-23`.

Exact comparators:

- active segmented current-world artifact `10478624997`, downloaded SHA-256 `064388110840c8034fe359bd47db1ceacfb3ed9ade3e56bb03e3210b49de761f`;
- compact-v2 current-world artifact `10480305129`, downloaded SHA-256 `2d1b747ae9eacf9ee0eb3754ba8fcd27f367e3edf77c3f6a66d700871ff83b94`.

Runtime storage successor:

- Map Runtime PR #39 exact head: `8d5860c308c244d314ede5b79021e46f35c4040d`;
- exact indexed planar-role artifact `10481695338`;
- downloaded SHA-256 `5fc6c2e820e6afa8ebade7dad87232d198d3aa7b695e02d64774ba6aa75d349a`;
- post-normal per-surface indexing retains `336` triangles / `5` surfaces while changing stored receiver data from `1008 vertices / 0 indices` to `312 vertices / 1008 indices`.

Building Materials remains pinned to PR #3 head `4179aa1401f5a9114399e2f998c96809d4b8ed2e`. No scalar material retune is part of this direction.

## Independently reproduced raster facts

Across all 68 exact current-world frames, planar-role versus the active segmented receiver reproduces:

- `path_eye`: exactly `25,951` changed pixels and exactly `24,892` pixels >1 LSB per frame; fixed >1-LSB bbox `x=346..753, y=256..437`; maximum channel delta `179` LSB;
- `elevated_oblique`: `14,585..14,587` changed pixels and `13,864..13,869` pixels >1 LSB; fixed >1-LSB bbox `x=594..885, y=185..365`; maximum channel delta `166` LSB.

Planar-role versus compact-v2 reproduces:

- `path_eye`: `18,717..18,718` changed pixels and `17,108..17,110` pixels >1 LSB; fixed >1-LSB bbox `x=346..753, y=256..437`; maximum channel delta `175` LSB;
- `elevated_oblique`: `13,508..13,514` changed pixels and `12,597..12,600` pixels >1 LSB; fixed >1-LSB bbox `x=594..888, y=171..362`; maximum channel delta `172` LSB.

The planar-role candidate is therefore not a continuity proxy for either comparator. It needs a real visual decision.

For Runtime PR #39's indexed successor, independent frame comparison reproduces all `68 / 68` pairs as non-byte-identical but bounded to:

- `24..55` changed pixels per frame;
- maximum channel delta exactly `1` LSB;
- `0` pixels exceeding 1 LSB.

The changed pixels are sparse and sit on the Building's rasterized highlight/edge response. Direct retained-view inspection found no perceptible hierarchy, silhouette, material-role or hard-surface-read degradation from the indexing rewrite.

## Direct visual observation

Representative states `0 / 8 / 16` were reviewed in both exact fixed cameras against active segmented, compact-v2 and planar-role receivers.

Observed:

- the active segmented receiver still produces the strongest tube-like / bulged bright bands on the front posts and header; those highlights pull attention to local segmentation rather than the pavilion's structural rhythm;
- compact-v2 improves that problem materially, which is why Direction 019 preferred it over active;
- planar-role suppresses the remaining bulged/segmented hotspot behavior further and makes the main posts/header read as straighter manufactured members with broad planar faces and controlled side/edge separation;
- the top header highlight remains readable but is less broken into local bulges;
- vertical frame rhythm is more even and the frame no longer competes with the ochre service panel through isolated white-hot post centers;
- the five-role hierarchy remains intact: frame first, dark infill subordinate, roof darker, slab/grounding readable, ochre service panel retained as the warm accent;
- no Nature, Object, Weather, path, camera or lighting retune is needed to get that cleaner structural read.

There is less bright-steel sparkle on some planar-role post faces than compact-v2. In these retained views Art prefers the cleaner planar structural language over restoring that sparkle through a material or lighting compensation. Do not retune the five material scalars just to imitate compact-v2 highlight intensity.

## Art Direction decision

### PASS — planar-role current-world look preference

**`PASS_ART_DIRECTION_BUILDING_PLANAR_ROLE_CLEAN_MANUFACTURED_READ_PREFERENCE_020`**

Exact meaning:

> In the retained `path_eye` and `elevated_oblique` current-world views, prefer the source-owned planar-role receiver's straighter manufactured structural read over both the active segmented receiver and compact-v2. Preserve the current five-role material hierarchy and current world lighting; the visual win is the receiver's plane/edge response, not a scalar lookdev retune.

This supersedes Direction 019 only as the preferred **review target** for these exact Building views. It does not rewrite Direction 019's historical truth that compact-v2 was preferable to the active segmented receiver.

### PASS — indexed storage successor does not degrade the retained Art read

**`PASS_ART_DIRECTION_PLANAR_ROLE_POST_NORMAL_INDEXING_RETAINED_VIEW_NONDEGRADATION_020`**

Exact meaning:

> Runtime PR #39's post-normal per-surface indexing does not produce an Art-significant visible degradation in the 68 retained fixed-view pairs. The measured delta remains real and is not called byte-identical; it is accepted only as visually non-degrading in this bounded review.

If the planar-role receiver advances, Art prefers the indexed successor over carrying avoidable unindexed storage duplication, subject to Runtime / Environment / QA / Technical-Art authority.

## Adoption hold

**`HOLD_DEFAULT_BUILDING_PLANAR_ROLE_ADOPTION__INDEPENDENT_QA_RESIDUAL_PRIMITIVE_COST_AND_TECHNICAL_ART_PENDING`**

Art preference does not authorize default adoption.

Still open:

1. Visual Observer / QA must independently review the exact planar-role current-world sequence, including hard edges, highlight stability, holes, aliasing, material-role loss and camera-specific regressions.
2. Runtime still owns the residual `+180` RenderingServer primitive cost versus the active segmented receiver. The indexed candidate's `-8,304 B` proof-host buffer-memory result is useful but is not target-device certification.
3. Environment owns current-world adoption and rollback.
4. Hard Surface owns the source representation and may preserve active / compact-v2 / planar-role as separately addressable candidates.
5. Technical Art still owns any transport/import path. This Godot procedural receiver does not prove arbitrary transport equivalence.

## Handoffs

### Map Environment PR #24

Treat planar-role as the current Art-preferred Building review receiver in these two fixed views, not as an automatic default. Keep the active segmented receiver as rollback until QA / Runtime / Technical Art gates are satisfied.

### Map Runtime PR #39

Art accepts the exact post-normal per-surface indexing rewrite as visually non-degrading in the retained 68 fixed-view pairs. Keep the measured `+180` primitive residual and target-device boundary visible; Art does not waive Runtime authority.

### Building Hard-Surface PR #11

The source-owned planar-role pattern now has positive Art evidence downstream. Do not add bevels, extra subdivisions, rounded tube language or scalar lookdev compensation merely to chase compact-v2's brighter hotspots. Preserve the broad planar-face / controlled-edge response unless new independent evidence exposes a specific visual defect.

### Building Materials PR #3

Keep the exact five-role profile fixed for this receiver decision. No material scalar compensation is requested.

### Visual Observer / QA

Independently review all 68 planar-role frames against active and compact-v2, and separately confirm that Runtime #39's sparse <=1-LSB indexing delta introduces no retained-view artifact pattern. Art preference is evidence, not QA substitution.

## Explicit non-claims

This direction does **not** establish:

- default Environment adoption;
- independent Visual QA acceptance;
- target-device CPU/GPU/FPS/VRAM/heap performance;
- elimination or acceptability of the residual `+180` primitive cost on target hardware;
- arbitrary cameras, FOVs, resolutions or renderers;
- transport/import equivalence;
- UV/tangent/texture/normal-map/decal equivalence;
- collision/navigation/physics/manufacturing/gameplay validity;
- architectural correctness;
- automatic UC extraction or Profession Fabric promotion;
- CANON;
- production/game readiness;
- Building mastery;
- 3D Art Direction mastery.

## Four-root check

- **Truth:** the planar-role receiver's large raster difference, its stronger visual preference, Runtime's storage win and the residual primitive cost remain separate facts.
- **Agency / non-domination:** Art chooses visual preference only; Hard Surface, Materials, Environment, QA, Runtime and Technical Art keep their own gates.
- **Continuity:** active segmented, compact-v2, unindexed planar-role and indexed planar-role remain separately named, pinned and rollbackable; Direction 019 remains historical evidence rather than being silently rewritten.
- **Wisdom before speed:** use the cheaper source-owned candidate only because its actual fixed-view appearance is now preferred; do not adopt it merely because its counters are better.

The four AXM roots remain the merge gate.
