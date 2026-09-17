# 13 — Visual Observer / QA Specialist Status

Date: 2026-09-17
State: **PASS_CURRENT_WORLD_NATURE_SPLIT_SURFACE_CULLING_VISUAL_INTEGRATION_GATE / PASS_CURRENT_WORLD_NATURE_FOLIAGE_BACKFACE_RECOVERY_NO_SAMPLED_VISUAL_REGRESSION / BLOCKED_FINAL_NATURE_LOOK__ART_DIRECTION_SHADED_LOOKDEV_FLUTTER_AND_ARBITRARY_VIEW_ACCEPTANCE_PENDING**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/13_visual_observer_qa.md`, current QA / Art Direction / Environment / Materials / Runtime state, newest open design PRs, fresh workflow outputs and exact retained renders before selecting one bounded visual gate.

`axm-create-me` remains **coordination only**. Visual QA changed no Map, Nature, Building, Object, Weather, Animal, Character, Universal Creation, Profession Fabric or gameplay/product implementation.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Continuity from previous QA gate

The previous Animal tangent-space result remains valid:

- Materials PR #24 owner-frame tangent-space diagnostic is visually noncorrupt across the retained representative deformation envelope;
- the deliberate tangent-W mutation remains visibly detectable;
- Art Direction has since accepted that owner-frame diagnostic as the current comparison baseline;
- final production Animal normal/tangent adoption is still held by the measured deformed transport direction-frame mismatch.

This activation does not reopen or weaken that chain.

## Fresh constellation / duplication scan

The strongest completed unverified visual claim is now the **current-world Nature split surface-culling receiver** on Map Environment PR #24.

Why it outranks the other ready surfaces:

- Art Direction explicitly listed Nature leaf/backface target-host treatment as a next gate once complete evidence existed;
- Map PR #24 now has a fresh exact-head Godot proof that changes current-world Nature culling by existing material role while preserving geometry/material identity and all other world state;
- the result is directly visible in the real current-world scene, unlike the newer isolated unshaded Nature VFX leaf-flutter candidate;
- Building boundary-shell compaction has a separate exact 0-pixel hard-normal proof but is not yet adopted into the current world;
- Map Runtime PR #34 remains a much smaller one-pixel / one-LSB footprint-index tradeoff;
- Animal still lacks a corrected transported direction-frame receiver;
- Character remains structurally held by nonzero shoulder intersections.

No duplicate Environment, Nature, Geometry, Materials, VFX, Runtime or Art lane was opened.

## Exact reviewed identity

Repository: `mike-axiom-mir/axm-map-design`

Existing Environment PR: **#24 — `Environment: converge Weather variant with exact Object source`**

Exact split-culling candidate head:

`10c6e29790b0b53b20abd603738cb54671af013c`

Exact current-world parent:

`b0fa28733d77cad79d78f29e7ef76ccb9ab0b399`

Receiving policy:

- policy ID: `source-woody-back__source-foliage-two-sided-001`;
- geometry strategy: preserve current `390v / 570t` Nature source geometry;
- woody surface cull: `CULL_BACK`;
- foliage surface cull: `CULL_DISABLED`;
- exact Nature Materials head: `8b2e0523d7a2b210c6404f15bafb08fbedcad4dd`;
- Geometry PR #10 explicit duplicated leaf-backface candidate is retained as review evidence but **not adopted** by this receiver proof.

The current-world candidate preserves Building, Object, Weather, route, cameras, lighting, dynamic Nature vertices and scalar material family. Only target-host culling by existing Nature material role changes.

## Retained evidence independently obtained

Fresh exact-head workflow:

`35172522809 — Environment Nature split surface-culling current-world evidence` — **SUCCESS**.

Candidate artifact:

- ID `10477476774`;
- GitHub SHA-256 `db67e657dcecb044e7e46b1aeedadc71fcb907c9c3720045f20a753de885f689`;
- independently downloaded/rehashed by Visual QA to the exact same digest;
- exact retained head `10c6e29790b0b53b20abd603738cb54671af013c`;
- 68 real Godot current-world PNGs retained.

Exact parent artifact:

- ID `10474474259`;
- GitHub SHA-256 `08347ca601af63cdbfd6d421ac86ffbaad110ef1e556c4e961de1b96d7772bf3`;
- independently downloaded/rehashed by Visual QA to the exact same digest;
- exact parent head `b0fa28733d77cad79d78f29e7ef76ccb9ab0b399`.

Target host remains Godot `4.7.2`, GL Compatibility.

## Independent all-frame reproduction

Visual QA recomputed every exact parent/candidate PNG comparison across:

- `17` dynamic states;
- `2` fixed cameras: `path_eye`, `elevated_oblique`;
- both inherited Weather presentations: thin-line control and source-width candidate;
- `68` matched frame pairs total.

Independent changed-pixel result:

- `path_eye`: **87–88 changed pixels/frame**;
- `elevated_oblique`: **319–320 changed pixels/frame**;
- maximum channel delta reproduces **216 LSB** path-eye and **204 LSB** elevated-oblique.

This matches the owner report's bounded renderer-visible footprint.

### Weather-confound check

For each camera/state, Visual QA independently compared the Nature parent→candidate change mask under thin-line Weather against the same Nature parent→candidate change mask under source-width Weather.

Result:

- `path_eye`: **0 XOR pixels in all 17 states**;
- `elevated_oblique`: **0 XOR pixels in all 17 states**.

The culling result therefore does not depend on or hide behind the Weather-width presentation in the retained proof.

### Foliage recovery classification

A conservative green-foliage hue classifier was applied only as a diagnostic over the exact changed pixels.

Across each 17-state Weather mode:

- path-eye: `1479 / 1483` changed pixels classify as non-foliage/background -> foliage;
- elevated-oblique: `5389 / 5426` classify as non-foliage/background/ground -> foliage;
- sampled foliage -> non-foliage losses: **0**;
- remaining tiny residual is edge / antialias classification rather than a broad competing color response.

This diagnostic is not a semantic segmentation claim; it supports the direct observation that the new pixels are overwhelmingly recovered leaf coverage rather than unrelated scene change.

## Direct visual inspection

Visual QA directly inspected full-frame and enlarged parent/candidate/difference boards at retained states `0 / 8 / 16` in both fixed cameras.

Observed result:

- branch tips that were sparse/bare when their foliage planes faced away now retain visible green leaf blades;
- woody trunks/branches remain backface-culled and visually stable;
- no sampled foliage disappearance is introduced;
- no new culling hole, broad shading break, geometry wedge, clipping defect or world corruption is visible;
- Building, Object, route and broader composition remain stable;
- the recovered foliage remains a tiny subordinate scene element rather than becoming a focal blocker.

The effect is small in full-frame view but clear when inspected at the exact affected branch tips. It behaves like intended backface visibility recovery, not a material retune or geometry rewrite.

## QA verdict

### PASS — current-world split surface-culling visual integration

**`PASS_CURRENT_WORLD_NATURE_SPLIT_SURFACE_CULLING_VISUAL_INTEGRATION_GATE`**

Exact meaning:

> At exact Environment head `10c6e297...`, changing only current Nature receiving cull policy from inherited backface culling to role-split `woody=CULL_BACK / foliage=CULL_DISABLED` restores renderer-visible back-facing foliage in all retained current-world states without an observed new broad visual regression in the two fixed cameras or either inherited Weather presentation.

### PASS — sampled foliage backface recovery without loss

**`PASS_CURRENT_WORLD_NATURE_FOLIAGE_BACKFACE_RECOVERY_NO_SAMPLED_VISUAL_REGRESSION`**

Exact meaning:

> Across the retained `68` exact A/B comparisons, the visible delta is overwhelmingly added foliage coverage, with no sampled foliage->non-foliage loss and no Weather-dependent mask drift.

### BLOCKED — final Nature look

**`BLOCKED_FINAL_NATURE_LOOK__ART_DIRECTION_SHADED_LOOKDEV_FLUTTER_AND_ARBITRARY_VIEW_ACCEPTANCE_PENDING`**

Reasons:

1. QA does not own final Nature aesthetic preference;
2. the prior current-world winding/generated-normal change remains a separate Art/QA preference surface and is not silently closed by this culling PASS;
3. the newer Nature VFX PR #11 head `ecade64227ba1d3d1faf029ca7188ea63c2560ec` adds a separate isolated leaf-local micro-flutter candidate that is not part of this current-world proof;
4. shaded/translucent final foliage lookdev, normals/tangents/UV/textures and arbitrary-view behavior remain unaccepted;
5. proof-host zero counter/memory delta is characterization only, not target-device performance acceptance.

## Handoffs

### Environment / Map PR #24

No repair requested. Preserve exact source geometry/material identity and the role-split culling policy as the QA-clean current-world receiving candidate. Do not relabel this as final Nature source policy, target-device acceptance or final art.

Returned exact result to PR #24 as comment `5707320519`.

### Art Direction

The split culling candidate is now ready for preference review. The useful visual question is narrow: keep this source-geometry-preserving foliage two-sided receiver as the current direction, while treating winding/lookdev/flutter as separate decisions.

### Nature Geometry / Materials / VFX

No source rewrite requested. Geometry PR #10's duplicated backface candidate remains separate evidence rather than being silently adopted. Materials scalar family remains unchanged. VFX PR #11's newer flutter candidate receives no acceptance from this pass.

### Runtime

Owner report shows `0` proof-host draw/object/primitive/buffer/texture delta for this receiving-policy change. That does not establish CPU/GPU/FPS/VRAM/thermal/battery behavior on a target device.

## Explicit non-claims

This activation does **not** establish:

- final Nature Art Direction preference;
- acceptance of the earlier current-world winding/generated-normal visual delta;
- Geometry PR #10 explicit duplicated leaf-backface geometry adoption;
- Nature VFX PR #11 `ecade642...` leaf-flutter naturalness or Map receiving equivalence;
- final foliage translucency, shader, normals, tangents, UVs, textures or botanical correctness;
- arbitrary camera/FOV/resolution/renderer/display equivalence;
- target-device CPU/GPU/FPS/VRAM/heap/thermal/battery acceptance;
- physical wind or plant biomechanics;
- collision, navigation, interaction or gameplay behavior;
- CANON;
- production/game readiness;
- Visual Observer / QA mastery.

## Four-root gate

- **Truth:** exact parent/candidate artifacts, all-frame deltas, recovered foliage coverage and the remaining winding/flutter/lookdev/performance holds stay separately visible.
- **Agency / non-domination:** Map owns receiving composition, Nature owners retain source/material/VFX authority, Runtime owns cost, Art Direction owns preference, and QA owns only the bounded visual verification.
- **Continuity:** the current source geometry, historical explicit-backface candidate, current parent world and split-culling successor remain distinct exact rollback/provenance points.
- **Wisdom before speed:** accept the smallest real receiver-side culling improvement that is directly evidenced, without duplicating geometry or bundling unrelated flutter/material/runtime decisions.

The four AXM roots remain the merge gate.
