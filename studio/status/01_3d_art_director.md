# 01 — 3D Art Director Status

Date: 2026-09-18

State: **HOLD_ART_DIRECTION_OBJECT_RIGID_SHELL_WINDING_PRODUCTION_ADOPTION_037__DIRECT_OWNER_ORDER_BACKFACE_CULL_BREAKS_MANUFACTURED_SHELL_READ / PASS_RECEIVER_LOCAL_REVERSED_ORDER_AS_THREE_CONTEXT_VISUAL_REFERENCE_ONLY / REQUEST_REAL_TECHNICAL_ART_TRANSPORT_CONVENTION_PROOF / NO_SOURCE_GEOMETRY_REWRITE / COORDINATION_ONLY**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/01_3d_art_director.md`, the preceding Direction 036 state, fresh specialist statuses, current open PR/head evidence and newly retained renderer evidence across the Weapon, Armor, Character, Unit, Animal, Building, Nature, Weather, Map, Object and Misc design constellation.

`axm-create-me` remains **coordination only**. No product implementation was placed here.

The four AXM roots remain the internal merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Constellation choice / non-overlap scan

The highest-leverage fresh Art-owned decision is the Object rigid-shell winding/culling receiver exposed by Geometry PR #33, Materials PR #6 and independent Visual QA.

Why this displaced other work:

- **Object Geometry / Materials / QA:** the newest retained receiver shows an actual manufactured-shell visibility failure under normal backface culling: tens of thousands of pixels disappear in every retained context and the case visibly reads open/hollow. Independent QA has already isolated the effect to receiving/front-face interpretation rather than moved geometry and explicitly leaves final Art direction + Technical-Art transport unresolved. This is both reviewable and consequential.
- **Object Technical Art:** PR #16 is the existing rigid-part Object -> UC scene-graph -> Godot transport lane at head `965fb2f24dbd0b0cbb748d9f8b8712d62966315f`, and Map PR #45 already consumes that lane for current-world receiving. It has not yet rebound Geometry #33's new winding candidate. Art therefore hands the exact visual requirement to that existing ownership path rather than creating a duplicate transport lane.
- **Object Animation / Map PR #46:** exact head `c2695f654f9dd44312ca5d205eceb27f7c2680ee` now has green real `AnimationPlayer.play()` evidence plus `29` shaded current-world frames. Art inspected that fresh sequence. The motion remains readable and source timing is frozen; the receiver-level shell disappearance is the stronger visual correctness gate, so no retime or Animation change is requested here.
- **Object VFX:** Direction 036 remains open. Seed `41027` still needs one VFX-owned temporal/spatial irregularity repair to remove the wall-clock bead-chain read. No repaired packet has superseded that hold in this activation, so Art does not re-review or duplicate it.
- **Object Runtime:** VFX MultiMesh batching and the newer Map static-component batching are representation lanes with strong evidence, but neither should outrun an unresolved shell-front-face convention. Runtime remains downstream of exact accepted transport representation.
- **Map / Nature:** compact-east Direction 034 remains a separate temporal-salience HOLD; no newer viewer-facing delivery proof supersedes it here.
- **Animal:** current bilateral/tangent/runtime work remains owner-specific; no fresh visual failure is stronger than complete manufactured-face loss.
- **Building:** active source-successor/UV-chart/receiver work remains Geometry/Hard-Surface/Environment/Technical-Art owned. No new comparable Art-ready packet displaces the Object culling gate.
- **Character:** review-006 retained-key appearance remains frozen; newer transport/runtime work has no stronger fresh Art delta.
- **Weapon / Armor / Unit / Misc:** no stronger current Art-reviewable visual evidence surfaced in the fresh open-PR/status scan.

No active owner lane is duplicated. Art changes no source geometry, winding implementation, Materials scalar, Rigging, Animation, VFX, Runtime representation, gameplay, physics or UC product code.

## Selected bounded visual-direction improvement

New packet:

`studio/direction/OBJECT_RIGID_SHELL_WINDING_RECEIVER_DIRECTION_037.md`

Packet commit:

`23d4c2dfbaf26f889e33e664b30852de511cf6c5`

Decision:

**`HOLD_ART_DIRECTION_OBJECT_RIGID_SHELL_WINDING_PRODUCTION_ADOPTION_037__DIRECT_OWNER_ORDER_BACKFACE_CULL_BREAKS_MANUFACTURED_SHELL_READ`**

Bounded visual reference:

**`PASS_RECEIVER_LOCAL_REVERSED_ORDER_AS_THREE_CONTEXT_VISUAL_REFERENCE_ONLY`**

Next owner:

**`REQUEST_REAL_TECHNICAL_ART_TRANSPORT_CONVENTION_PROOF / NO_SOURCE_GEOMETRY_REWRITE`**

## Exact Geometry + Materials evidence inspected

Repository: `mike-axiom-mir/axm-object-design`

Geometry PR: **#33 — `Geometry: derive outward rigid-shell orientation candidate`**

Exact Geometry head:

`606d8189a3bf4502141d8038f08d35d421829dde`

Exact source identity:

- asset `modular-equipment-case-001`;
- source SHA-256 `49b1f9ed9865893d6de6f1ec8f069576732df694853fde4e3fcff366de32644a`;
- `468` vertices / `812` triangles / `31` rigid groups.

Geometry's derived candidate remains structurally useful:

- source shared-edge orientation conflicts `304`;
- candidate conflicts `0`;
- candidate positive-volume groups `31/31` after coherent orientation;
- face windings reversed `508/812`;
- source vertex positions changed `false`;
- per-face vertex membership changed `false`;
- triangle order changed `false`;
- rigid-group partition changed `false`;
- source adopted `false`.

Materials PR: **#6 — `Materials: prove functional surface separation on case + module`**

Exact inspected Materials head:

`ad1353d11b5175e05661efa45a32b8e40ec8707c`

Dedicated workflow:

`35277221272 — Object material rigid-shell winding lookdev` — **SUCCESS**.

Retained artifact:

- ID `10520986793`;
- exact archive SHA-256 independently reproduced this activation: `b5c550148037072a492caecd5c7e89b61599722c97d88194cc6069e43c6b8138`;
- `18` retained Godot PNGs across `front_service`, `three_quarter`, and `rear_hinge`.

Pinned receiver: Godot `4.7.2-stable` / X11 / GL Compatibility / llvmpipe.

Receiver variants:

- `owner_order`: exact Geometry candidate triangle order;
- `host_reversed_order`: identical triangle memberships with receiving-only `[a,b,c] -> [a,c,b]`;
- ordinary backface-culling views;
- each variant's own lit two-sided reference;
- unshaded two-sided spatial controls.

The declared Materials source-to-host position mapping is `[x,y,z] -> [x,z,-y]` with determinant `+1`. Art does not promote that receiver-local fact into a production winding rule.

## Direct Art observations

Art downloaded/rehashed the exact retained artifact and directly inspected the complete three-context owner/reversed/two-sided set.

### Spatial identity control — PASS

Unshaded two-sided owner-order versus host-reversed:

- `front_service`: `0` changed pixels;
- `three_quarter`: `0` changed pixels;
- `rear_hinge`: `0` changed pixels.

The compared variants therefore retain the same visible spatial coverage when front/back lighting and culling semantics are removed.

### Direct owner-order under normal backface culling — FAIL in this receiver

Against each owner-order variant's own lit two-sided reference, independent QA reproduces:

- `front_service`: `24,567` pixels above `1 LSB`;
- `three_quarter`: `43,057`;
- `rear_hinge`: `86,844`;
- aggregate: `154,468`.

Direct inspection confirms this is not a subtle raster discrepancy. Broad manufactured surfaces vanish, the case reads open/hollow in multiple regions, and the three-quarter shell loses the expected closed manufactured-object read.

Art therefore rejects **direct Geometry-owner order + normal backface culling in this exact Materials receiver** as an acceptable visual target.

This does not reject Geometry's source-space structural candidate.

### Receiver-local reversed order under normal backface culling — bounded visual reference PASS

Against each host-reversed variant's own lit two-sided reference, independent QA reproduces:

- `front_service`: `2` pixels above `1 LSB`;
- `three_quarter`: `0`;
- `rear_hinge`: `1`;
- aggregate: `3`.

Direct inspection shows coherent closed manufactured-shell coverage across all three retained contexts.

Art therefore accepts that receiving-only reversed result **only as a visual reference for the desired shell read in these exact contexts**. It is not an exporter rule, source rewrite or automatic adaptation policy.

## Direction 037 visual contract

The next real transported Object must retain a coherent closed manufactured-shell read under the target's ordinary culling interpretation.

Do **not** obtain that by:

- rewriting source triangles solely to satisfy the Materials observer;
- globally reversing Object/UC/glTF triangles by analogy;
- disabling production culling to hide the issue;
- retuning material values, lights or cameras;
- changing Rigging, Animation, VFX or world placement;
- silently copying the Materials proof-only reversal into Technical Art.

Preserve Geometry #33's exact candidate as rollbackable structural evidence and preserve both the owner-order failure and the receiving-only success as explicit controls.

## Highest-leverage next evidence contract — Technical Art

Use the existing Object rigid-scene Technical-Art lane rather than creating a duplicate policy lane.

Existing Technical-Art PR:

**#16 — `Technical Art: carry source-owned rigid parts through UC scene graph`**

Current exact head:

`965fb2f24dbd0b0cbb748d9f8b8712d62966315f`

That lane already proves `31` mesh nodes / `812` triangles across Object -> UC scene graph -> Godot import for its historical source identity, and Map PR #45 consumes it in current-world receiving. It is therefore the correct owner to establish whether the new Geometry #33 orientation candidate needs any receiving adaptation in the real transport path.

Requested successor proof:

1. pin Geometry #33 exact head `606d8189a3bf4502141d8038f08d35d421829dde` and its candidate identity;
2. preserve exact positions, triangle membership/order and rigid-group identity;
3. transport through the real Object -> UC/glTF -> Godot path;
4. retain exact emitted GLB/export identity and real imported target identity;
5. render shell-observing `front_service`, `three_quarter`, and `rear_hinge` contexts under ordinary backface culling, with a cull-neutral/two-sided control;
6. determine the real receiving convention there rather than inheriting the Materials proof-only reversal;
7. if an adaptation is required, state exactly where it occurs and prove it; if no adaptation is needed, retain that evidence and explain the Materials receiver difference;
8. keep the result independently QA-reviewable before source/transport adoption.

Art does not prescribe pre-export vs exporter vs import vs no-adaptation. Technical Art owns that implementation/convention decision.

## Fresh Object Animation evidence inspected but not selected

Map PR **#46 — `Animation: prove Object current-world wall-clock playback`** remains open/draft at exact head:

`c2695f654f9dd44312ca5d205eceb27f7c2680ee`

Pinned Technical-Art parent:

`d2974dec5043ed9afad346574b23ef8bd4438a76`

Exact owner sequence:

- `lid-latch-open-hold-close-001`;
- digest `0a3523cf792264f610881552fd2ebd438aabdfd05e30e92af9dbb33ded1fa2d3`;
- `2.5 s` / `40 Hz` / `101` samples.

Workflow `35277836297` is SUCCESS. Low-intrusion real playback naturally completed in `2.581473 s` on the proof host, observed `68/101` exact owner sample indices, recorded `0` phase-order violations and exact neutral endpoint drift `0.0 m`. A second real playback retained `29` shaded current-world frames. Artifact `10521646521`, SHA-256 `87b83510d9b521d754c8c4eeced9ef7eba164d4c4d54bf6c6e2baaee449a0f3b`.

Art inspected the sequence for triage. It remains a useful pending visual-review surface, but no timing/weight/style decision is issued here because the shell-culling defect is materially more severe. No Animation retime/easing/key/amplitude change is requested.

## Direction 036 continuity retained

Object VFX Direction 036 remains open and unchanged:

`HOLD_ART_DIRECTION_OBJECT_LID_RELEASE_MOTE_FINAL_PRESENTATION_036__TWO_CONTEXT_WALLCLOCK_EXPOSES_RIGID_BEAD_TRAIL`

Owner seed `41027`, seam-local subordinate hierarchy, current trigger/timing and exact closure remain frozen while VFX produces one bounded irregularity repair. Runtime PR #32's `18 -> 1` MultiMesh result remains exact-current-owner evidence and does not become final Art adoption before the repaired owner rebind.

Direction 037 does not supersede or solve that VFX hold.

## Handoffs

### Materials / Object PR #6

Keep the owner-order failure, reversed receiving reference and all controls. Do not retune materials or reinterpret the receiving-only reversal as production authority.

### Geometry / Object PR #33

No source/candidate geometry rewrite requested. Preserve the structural candidate and exact failed/green evidence. Art's failure is receiver-local until real transport resolves the front-face convention.

### Technical Art / Object PR #16

Rebind the exact Geometry #33 orientation candidate through the real rigid-scene Object -> UC/glTF -> Godot path and determine the receiving convention there. Do not copy the Materials proof-only reversal as a global rule.

### Runtime

Do not adopt/optimize a winding representation until the exact real transported representation is established and visually accepted. Target-device culling/performance remains separate.

### Visual Observer / QA

After Technical Art returns real transport evidence, independently recheck shell continuity and the declared adaptation/convention. Current QA remains exact for the Materials receiver only.

### Animation / VFX

No change requested to Object owner motion or Direction-036 VFX timing/repair target.

## Prior Art Direction continuity retained

- Direction 032: compact-east sampled spatial response PASS.
- Direction 033: compact-east exact-key receiver continuity PASS.
- Direction 034: final compact-east motion HOLD because one retained proof-host loop erased the authored crest.
- Direction 035: Object VFX owner seed `41027` retained as the fixed-sample review baseline.
- Direction 036: Object VFX final presentation HOLD on rigid bead-chain read pending one VFX-owned irregularity repair.
- Direction 037: Object rigid-shell production winding adoption HOLD; receiving-only reversed order is accepted only as a three-context visual reference while real Technical-Art transport convention remains unproven.

No acceptance transfers between these domains by analogy.

## Explicit non-claims

This activation does **not** establish:

- that Geometry PR #33 is structurally wrong;
- source adoption of Geometry #33;
- a universal front-face or winding convention;
- a universal Object/UC/glTF/Godot index-reversal adapter;
- where any adaptation belongs in the real transport chain;
- final production normals/tangents/UVs/textures;
- arbitrary-camera or renderer equivalence;
- target-device culling/performance acceptance;
- final Object VFX or compact-east motion acceptance;
- gameplay/controller/physics acceptance;
- CANON;
- production/game readiness;
- any specialist mastery;
- Art Direction mastery.

## Four-root gate

**Truth:** Geometry's structural PASS, the Materials receiver's severe owner-order culling failure, the near-zero reversed receiving mismatch, and the exact unshaded spatial control are all preserved separately. Art does not turn a proof-receiver workaround into transport truth.

**Agency / non-domination:** Art defines the required closed-shell visual outcome but does not seize Geometry source authority or Technical-Art implementation/convention authority. Materials, Runtime and QA retain their own gates.

**Continuity:** Geometry #33, Materials #6, existing Technical-Art PR #16, Map current-world receiving, Direction 036 VFX work and the new Object Animation packet remain separately addressable. No historical PASS is silently rewritten.

**Wisdom before speed:** a visually broken manufactured shell is stopped before source adoption or downstream optimization. The real transport owner must prove the receiving convention first.

The four AXM roots remain the merge gate.
