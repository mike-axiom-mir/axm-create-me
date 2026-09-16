# Building Current-World Infill Repair Direction 006

Date: 2026-09-16
Role: 3D Art Director
State: **PASS_ART_DIRECTION_BUILDING_INFILL_REPAIR_PREFERENCE_006 / RELEASE MATERIAL-SIDE HOLD / REQUEST EXACT ENVIRONMENT COMPOSITION / FINAL COMBINED WORLD HELD**

`axm-create-me` is coordination only. This packet does not change Building, Map, Weather, Nature, Object, Universal Creation, Profession Fabric, runtime or gameplay implementation.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Why this is the current Art Direction priority

The prior direction packet `BUILDING_CURRENT_WORLD_INFILL_HIERARCHY_DIRECTION_004.md` isolated one receiving-scene visual defect: source-owned solid `infill_coating` surfaces compressed too close to the near-black current-world background and could read as dark/open bays. It requested the smallest first repair: change only `infill_coating`, while holding geometry, world composition, lighting, cameras and every other material family fixed.

That exact requested successor now exists in Building Materials PR #3, has real Godot target-host evidence, and has independent Visual QA PASS. This is therefore a ready decision surface, unlike Character/Animal review lanes that still have separate structural/deformation candidates awaiting richer direct acceptance.

## Exact reviewed identities

Building Materials:

- repository: `mike-axiom-mir/axm-building-design`;
- PR: `#3 — Materials: prove pavilion functional surface hierarchy`;
- exact head: `225cf82a61ec1512553fda2785ca101a54a6bd30`;
- PR state observed: OPEN / DRAFT / MERGEABLE;
- current source authority: `57f66b1245812f0c3d402232a046b86c0b5c72d8`;
- held predecessor material profile: `e8dd0c33b9b2aea108194af57a8fe8de39c7e67bb86109af6dbf3895f22c010b`;
- reviewed candidate material profile: `0c4834bf0fc9c0b7aa1a053f35f307b64596e13f305287ca3018b6182b2f6fe9`.

Only changed material parameter:

- `infill_coating.albedo`: `#344047FF -> #59666DFF`.

Held exact values:

- `infill_coating.metallic = 0.16`;
- `infill_coating.roughness = 0.68`;
- frame, roof, slab and utility-panel material values unchanged;
- component/material mapping unchanged;
- source geometry unchanged;
- world lighting/composition/cameras unchanged in the repair proof.

The first retained attempt, `#46535AFF`, remains provenance with decision `HOLD_INSUFFICIENT_INFILL_SEPARATION`; it is not silently overwritten.

Exact donor context used by Materials:

- Map Environment source-successor donor: `43d89a7cac48e57ebede0db8fc9983e8144222a0`;
- target host: Godot 4.7.2 GL Compatibility;
- retained Materials artifact: `10451955371`;
- archive SHA-256: `a45ca2e0359d8b06a4a70ca82616d88fa779fe7df7fe9a56d9ba24f2eb9adda1`.

The archive was independently downloaded and rehashed to the same digest during this Art Direction pass.

## Direct Art Direction observation

Matched predecessor/candidate states `0 / 8 / 16` were inspected in both retained fixed cameras, with the Building region enlarged and the material-only difference isolated.

### `path_eye`

The predecessor reproduces the known defect: the three enclosure panels approach the dark sky/background strongly enough that the solid surface can read as open/deep void.

The `#59666DFF` candidate restores a clear solid-plane read. It does so without making the infill the brightest manufactured layer. The galvanized frame remains the strongest structural highlight, the roof remains quieter/darker, and the muted ochre service panel remains the stronger warm accent.

The candidate therefore improves hierarchy rather than merely lifting exposure.

### `elevated_oblique`

The same direction holds in the wider context. The pavilion reads more clearly as a constructed enclosure without flattening into one uniform mid-value block. Frame rhythm and roof silhouette remain legible; the infill no longer visually merges with the near-black world background.

No new broad halo, wash, service-accent inversion or obvious focal conflict is observed in the retained states reviewed.

## Independent QA / measured support

Visual QA independently reviewed all 34 matched fixed-camera candidate frames and returned:

`PASS_CURRENT_WORLD_BUILDING_INFILL_REPAIR_VISUAL_HIERARCHY_GATE`.

Exact retained diagnostics include:

- `path_eye`: `29,492` changed pixels/frame, fixed bbox `(384,290)-(715,407)`;
- `elevated_oblique`: `11,289` changed pixels/frame, fixed bbox `(640,199)-(872,326)`;
- predecessor median changed-pixel luma: `21.8046`;
- candidate median changed-pixel luma: `39.8086`;
- predecessor changed pixels below luma 32: `97.7994%` / `96.6261%`;
- candidate changed pixels below luma 32: `0%` in both retained camera contexts.

These are exact proof diagnostics, not universal material thresholds.

## Art Direction decision

**`PASS_ART_DIRECTION_BUILDING_INFILL_REPAIR_PREFERENCE_006`**

**`PREFER_59666D_INFILL_SUCCESSOR_OVER_344047_PREDECESSOR_IN_EXACT_SOURCE_CORRECT_CURRENT_WORLD_DONOR`**

**`RELEASE_MATERIAL_SIDE_INFILL_HIERARCHY_HOLD_FOR_EXACT_ENVIRONMENT_COMPOSITION`**

Exact meaning:

> The one-variable `infill_coating.albedo #344047FF -> #59666DFF` successor is the preferred visual direction in the exact source-correct donor world reviewed. It fixes the previously reproduced solid-enclosure-versus-dark-opening ambiguity while preserving the intended hierarchy: galvanized frame first, solid infill readable but subordinate, dark roof quieter, ochre service surface as the warmer accent.

This is a bounded visual preference, not CANON and not final LookDev.

## Next required integration

Current Map Environment PR #24 has since advanced to exact head:

`0d8b2279ecbba47b9696a951db9513883fbef6c5`

That head already composes the separately approved source-authored Weather-width presentation over the source-correct Building world, but intentionally still carries predecessor Building material profile `e8dd0c33...`.

Environment may now build the next exact integration proof by composing:

- current Environment head `0d8b227...`;
- exact Materials candidate head `225cf82...` / profile `0c4834bf...`;
- exact Building source `57f66b1...`;
- already-preferred Weather source-width presentation unchanged.

For that proof keep fixed:

- Weather source/seed/width profile, density, opacity, color and length;
- Building geometry and transform;
- frame, roof, slab and service-panel material values;
- Nature and Object identities/placements;
- path;
- both fixed cameras;
- current lighting/composition.

Do **not** compensate with lighting or a second material edit in the same integration proof.

## Integrated visual acceptance target

The combined successor should preserve all of the following simultaneously:

1. infill reads as solid enclosure rather than dark/open void in `path_eye`;
2. galvanized frame remains the first manufactured structural layer without becoming a bright outline halo;
3. roof remains visually quieter/darker than the infill rather than merging into one flat band;
4. muted ochre service panel remains the stronger warm service accent but not a path-dominating focal point;
5. preferred Weather source-width remains a subordinate atmosphere layer and is not used to mask Building hierarchy;
6. no camera-specific lighting/material cheat is introduced.

If the exact combined Environment proof preserves these conditions, Art Direction should not reopen scalar PBR tuning merely to chase tiny numeric differences.

## Handoffs

### Materials / Building PR #3

Hold the `#59666DFF` candidate stable for integration. No further scalar adjustment is requested before the Environment composition proof. Preserve the failed `#46535AFF` attempt and predecessor profile as provenance.

### Environment / Map PR #24

Explicitly compose the preferred infill candidate over current source-width head `0d8b227...`; retain both parent identities and real target-host evidence. Do not inherit this PASS by similarity.

### Visual Observer / QA

The donor-context PASS is accepted as evidence. Re-review the exact combined successor after Environment composes it because the newer Environment head includes the preferred Weather-width presentation and therefore has a different exact world identity.

### Runtime / Optimization

Do not assign target-device cost from this visual decision. If the combined successor is adopted for production direction, measure the exact integrated representation rather than the older predecessor chain.

### Geometry / Hard Surface

No geometry change is requested by this visual decision. Geometry PR #6 header segmentation remains a separate derived source-structure question and inherits no material acceptance.

### Character / Animal / Object / Nature / Weather / VFX

No result transfers. Their current visual/deformation/motion/representation lanes remain separate.

### UC / Profession Fabric / Capability Cartography

No material values or Building semantics should be centralized. The reusable lesson remains evidence discipline: isolate one visual variable, preserve failed candidates, test in a real receiving scene, then explicitly recompose accepted successors.

## Explicit non-claims

This direction does **not** establish:

- final combined Environment + preferred Weather-width appearance;
- final palette, texture, UV, decal or weathering quality;
- physically measured coating correctness;
- arbitrary camera/FOV/resolution/renderer/HDR/display equivalence;
- final lighting or cinematic grading;
- target-device CPU/GPU/FPS/overdraw/memory/VRAM/battery budget;
- collision, navigation, traversal or gameplay readability;
- Building Geometry PR #6 source adoption;
- Character shoulder, Animal motion/deformation or Object motion acceptance;
- UC extraction or Profession Fabric promotion;
- CANON, production readiness, game readiness or Art Direction mastery.

## Root gate

- **Truth:** the decision follows exact retained target-host A/B frames, an independently reproduced artifact hash, direct visual comparison and independent QA; donor-context preference is kept separate from future combined-world acceptance.
- **Agency / non-domination:** Materials owns material values, Environment owns composition, Weather/VFX own atmosphere semantics, QA owns reproduction, Runtime owns cost and the four roots remain the merge gate.
- **Continuity:** predecessor, failed first attempt, accepted donor-context candidate, current Environment source-width head and future integration are kept as distinct identities rather than silently collapsed.
- **Wisdom before speed:** release the already-isolated material hold and request one explicit composition proof instead of simultaneously changing lighting, atmosphere, geometry or multiple surface roles.
