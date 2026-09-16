# Current-World Object Material-Family Direction 011

Date: 2026-09-16
Role: 3D Art Director
State: **PASS_ART_DIRECTION_CURRENT_WORLD_OBJECT_MATERIAL_FAMILY_PREFERENCE_011 / QA + RUNTIME + OBJECT_FOOTPRINT + INNER_LID HELD**

## Scope

This packet records one bounded Art Direction decision for the exact current Map receiving world. `axm-create-me` remains coordination-only; no Object, Map, Materials, Runtime, VFX, Geometry, Animation or gameplay implementation is authored here.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Exact reviewed identities

Receiving repository: `mike-axiom-mir/axm-map-design`

Environment PR #24 exact candidate head:

`6575cc38db9f0f62b14a82b352d8582edf89856d`

Exact parent current-world head:

`72d4128b602e27c886a0731ddd670ec8c14aaa7e`

Object source authority:

`mike-axiom-mir/axm-object-design@d3fa10a270faae7925811f44f03381fe5c5d0215`

Object Materials family consumed by this receiver:

- source Materials identity: `c85517446a769e0d5f880fc0e9e32f47124f7b5e`;
- profile SHA-256: `dc200229d6c25fa84063aa51f66103abc022efa54b2167e4432a5b47fc40360c`;
- `shell_coating`: `#3F484EFF`, metallic `0.42`, roughness `0.54`;
- `service_dark`: `#252B2FFF`, metallic `0.18`, roughness `0.66`;
- `hardware_steel`: `#9AA3A8FF`, metallic `0.88`, roughness `0.32`;
- `rubber_guard`: `#171A1CFF`, metallic `0.0`, roughness `0.86`;
- `interface_orange`: `#A96532FF`, metallic `0.20`, roughness `0.48`.

`module_housing` is not part of this receiving proof because the utility module is absent. The later inner-lid `service_dark` review experiment is also explicitly excluded from this decision.

## Evidence independently checked

Candidate artifact:

- ID `10466065113`;
- retained exact head `6575cc38db9f0f62b14a82b352d8582edf89856d`;
- independently downloaded archive SHA-256 `87dd366302e94b5a6f8241e110e9629c2d81a0d7321197b14a52b860642fd519`;
- 68 retained Godot 4.7.2 GL Compatibility frames: `17 states × 2 fixed cameras × 2 inherited Weather modes`.

Exact parent artifact:

- ID `10463255035`;
- retained exact head `72d4128b602e27c886a0731ddd670ec8c14aaa7e`;
- independently downloaded archive SHA-256 `a4dbc0e2b8ef6f16bb846d0f639b7935b414ddfe4222463f397d11a16cfc0a45`.

Independent all-frame A/B reproduction matches the Environment handoff exactly:

- `path_eye`: exactly `1,850 / 792,000` pixels change in every one of the 34 mode/state comparisons, fixed bbox `(300,425)-(366,454)`;
- `elevated_oblique`: exactly `632 / 792,000` pixels change in every comparison, fixed bbox `(543,295)-(578,319)`.

The delta is strongly value-directed rather than a geometry/composition change. Across the changed Object pixels:

- `path_eye` median luma moves approximately `130.655 -> 47.368`; `1,845 / 1,850` changed pixels darken by more than 1 LSB;
- `elevated_oblique` median luma moves approximately `140.655 -> 57.877`; all `632 / 632` changed pixels darken by more than 1 LSB.

Those numbers are diagnostic for this exact proof only; they are not universal Object thresholds.

Direct review of states `0 / 8 / 16` in both fixed cameras shows the material change remains localized and stable through the dynamic world sequence.

## Visual observation

The parent neutral response is bright enough to keep the small case visible, but it flattens shell, service face, guards and hardware toward one pale proof-object read. At current scale it looks more like a test asset than an intentionally authored industrial prop.

The five-surface candidate is directionally stronger:

- the dark shell/service family makes the Object read as a compact industrial case rather than a pale proxy-like block;
- bright steel hardware becomes the detail hierarchy that explains the lid/front construction instead of the entire case competing at one value;
- the rubber/guard family remains visually subordinate;
- the tiny orange interface stays an accent rather than turning the small Object into an orange focal point;
- against the light ground the darker silhouette remains readable in both fixed cameras despite the substantial value drop;
- the current-world Building, Nature, route and Weather hierarchy remains visually stable.

The exact source is still materially smaller than the historical west proxy. This material-family PASS does **not** declare that old scale/readability question solved. The unchanged Map-owned footprint cue is part of the exact parent context but receives no independent adoption from this packet.

## Art Direction decision

**`PASS_ART_DIRECTION_CURRENT_WORLD_OBJECT_MATERIAL_FAMILY_PREFERENCE_011`**

Exact meaning:

> Prefer the exact five-surface base Object material family over the neutral proof response for `modular-equipment-case-001` in exact current-world head `6575cc38...`. Preserve the source geometry, transform, scale, current Map composition, footprint context, Building, Nature, Weather, lighting and cameras while this preference propagates.

Do **not** brighten the whole case merely to recover the neutral proof object's visibility. If later QA finds a real readability defect, repair the smallest attributable surface/hierarchy issue rather than flattening the functional material separation.

This preference does not adopt `module_housing`, the experimental inner-lid slot, articulation/keeper motion, or any new material scalar.

## Handoffs

### Map Environment PR #24

Treat exact head `6575cc38...` as the preferred current-world Object base-material presentation candidate. Keep the five consumed roles unchanged while independent QA reviews the complete 68-frame set. Do not combine a scale, footprint, lighting or Object-geometry change into that QA pass.

### Object Materials PR #6

The base five-role host family is directionally accepted in this exact receiving context. Preserve its exact scalar values for the current-world propagation. The newer inner-lid `service_dark` experiment remains a separate decision and gains no acceptance from this current-world PASS.

### Visual Observer / QA

Review all 68 exact current-world frames for small-object readability, hardware/service separation, loss of silhouette against local shadows/dark structural elements, accidental orange focal pull and any mode/state-specific artifact. Art Direction preference does not replace independent QA.

### Runtime / Optimization

Environment reports the exact five-surface receiver adds `+8` draw calls and `+8` objects in both fixed cameras relative to the exact Nature-family parent, with `+0` primitives, `+0 B` observed buffer memory and `+0 B` observed texture memory. Characterize/accept target-device cost independently; do not collapse material roles on this proof-host diagnostic alone.

### Environment footprint / Object scale

Keep the historical Object scale/readability question separate. This pass does not approve rescaling the source and does not independently approve the existing Map-owned footprint cue. If either becomes the next visual gate, compare it against this material-preferred Object rather than the old neutral proof response.

## Explicit non-claims

This decision does **not** establish final Object scale/readability; independent acceptance of the Map footprint cue; the inner-lid material experiment; utility-module materials; articulation, keeper/lever motion or mechanism correctness; UVs, textures, decals, edge wear, baked normals/AO or physically measured coatings; arbitrary-camera/FOV/resolution or renderer equivalence; target-device CPU/GPU/FPS/VRAM/memory/batching acceptance; collision/gameplay; CANON; production/game readiness; or Art Direction mastery.

## Four-root gate

- **Truth:** the stronger industrial hierarchy is accepted together with the measured large value reduction and the nonzero submission-cost handoff; neither is hidden.
- **Agency / non-domination:** Object retains source/material authority, Map retains receiving composition, QA retains defect review and Runtime retains performance authority.
- **Continuity:** neutral parent, exact five-surface candidate, experimental inner-lid work and future scale/footprint decisions remain separate rollbackable identities.
- **Wisdom before speed:** accept the one-variable material-family improvement without bundling scale, footprint, lighting, articulation or new surface experiments into the same decision.
