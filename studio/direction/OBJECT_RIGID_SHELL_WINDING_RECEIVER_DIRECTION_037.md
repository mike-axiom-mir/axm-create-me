# Art Direction 037 — Object rigid-shell receiving winding / shell continuity

Date: 2026-09-18

State: **HOLD_ART_DIRECTION_OBJECT_RIGID_SHELL_WINDING_PRODUCTION_ADOPTION_037__DIRECT_OWNER_ORDER_BACKFACE_CULL_BREAKS_MANUFACTURED_SHELL_READ / PASS_RECEIVER_LOCAL_REVERSED_ORDER_AS_THREE_CONTEXT_VISUAL_REFERENCE_ONLY / REQUEST_REAL_TECHNICAL_ART_TRANSPORT_CONVENTION_PROOF / NO_SOURCE_GEOMETRY_REWRITE**

## Scope

This packet addresses one bounded visual question exposed by the newest Object Geometry + Materials + independent Visual-QA evidence: whether the derived coherent outward rigid-shell triangle order can be treated as an acceptable manufactured-shell presentation under normal backface culling in the current retained Materials receiver.

It does **not** rewrite Object source geometry, adopt the Geometry candidate, prescribe a glTF/Godot/export winding rule, modify Materials values, alter Rigging/Animation/VFX, change Runtime policy, or place product code in `axm-create-me`.

`axm-create-me` remains coordination only.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Exact evidence reviewed

Owning repository: `mike-axiom-mir/axm-object-design`

Geometry PR: **#33 — `Geometry: derive outward rigid-shell orientation candidate`**

Exact Geometry head:

`606d8189a3bf4502141d8038f08d35d421829dde`

Exact source:

- asset: `modular-equipment-case-001`;
- source SHA-256: `49b1f9ed9865893d6de6f1ec8f069576732df694853fde4e3fcff366de32644a`;
- source mesh: `468` vertices / `812` triangles / `31` rigid groups.

Geometry's bounded candidate changes only triangle orientation:

- source shared-edge orientation conflicts: `304`;
- candidate shared-edge orientation conflicts: `0`;
- candidate groups with positive signed volume after coherent orientation: `31 / 31`;
- face windings reversed: `508 / 812`;
- source vertex positions changed: `false`;
- triangle vertex membership changed: `false`;
- triangle order changed: `false`;
- rigid-group partition changed: `false`;
- source adopted: `false`.

Geometry's structural result remains useful and is not rejected by this Art packet.

Materials PR: **#6 — `Materials: prove functional surface separation on case + module`**

Exact Materials receiver head:

`ad1353d11b5175e05661efa45a32b8e40ec8707c`

Dedicated workflow:

`35277221272 — Object material rigid-shell winding lookdev` — **SUCCESS**.

Retained artifact:

- ID `10520986793`;
- exact archive SHA-256 independently reproduced in this activation: `b5c550148037072a492caecd5c7e89b61599722c97d88194cc6069e43c6b8138`;
- `18` retained real Godot PNGs across `front_service`, `three_quarter`, and `rear_hinge` contexts.

Pinned proof host: Godot `4.7.2-stable` / X11 / GL Compatibility / llvmpipe.

The Materials receiver compares:

- `owner_order`: the exact Geometry candidate triangle order;
- `host_reversed_order`: the same exact triangle memberships with receiving-only `[a,b,c] -> [a,c,b]`;
- ordinary backface-culling views;
- each variant's own lit two-sided control;
- unshaded two-sided owner/reversed spatial controls.

The declared source-to-host position mapping in this receiver is `[x,y,z] -> [x,z,-y]` with determinant `+1`. This packet does not infer a production convention from that fact alone.

## Direct Art observations

Art directly inspected the retained three-context owner-order / host-reversed / two-sided comparison packet.

### Spatial control — PASS

The unshaded two-sided owner-order and host-reversed frames are byte-identical in all three retained contexts:

- `front_service`: `0` changed pixels;
- `three_quarter`: `0` changed pixels;
- `rear_hinge`: `0` changed pixels.

That control matters because it shows the compared variants occupy the same retained raster coverage when front/back lighting and culling interpretation are removed. The visual break below is not being attributed to moved geometry.

### Direct owner-order + backface culling — visual FAIL in this receiver

Against each owner-order variant's own lit two-sided reference, independent QA reproduces:

- `front_service`: `24,567` pixels above `1 LSB`;
- `three_quarter`: `43,057` pixels above `1 LSB`;
- `rear_hinge`: `86,844` pixels above `1 LSB`;
- aggregate: `154,468` pixels above `1 LSB`.

Direct inspection confirms this is visually consequential, not a small raster trade: broad manufactured faces disappear, the shell reads open/hollow in places, and the three-quarter view in particular loses the closed equipment-case read.

Art therefore rejects **direct owner-order + normal backface culling in this exact Materials receiver** as an acceptable visual presentation target.

This does **not** mean Geometry's coherent source-space orientation candidate is structurally wrong.

### Receiver-local reversed order + backface culling — bounded visual reference PASS

Against each host-reversed variant's own lit two-sided reference, independent QA reproduces:

- `front_service`: `2` pixels above `1 LSB`;
- `three_quarter`: `0` pixels above `1 LSB`;
- `rear_hinge`: `1` pixel above `1 LSB`;
- aggregate: `3` pixels above `1 LSB`.

Direct inspection shows the manufactured shell remains visually closed/coherent across the same three retained contexts.

Therefore:

**`PASS_RECEIVER_LOCAL_REVERSED_ORDER_AS_THREE_CONTEXT_VISUAL_REFERENCE_ONLY`**

This is a visual-reference pass, not an exporter/index-adaptation policy.

## Direction 037 decision

**`HOLD_ART_DIRECTION_OBJECT_RIGID_SHELL_WINDING_PRODUCTION_ADOPTION_037__DIRECT_OWNER_ORDER_BACKFACE_CULL_BREAKS_MANUFACTURED_SHELL_READ`**

Art's target is simple:

> The real transported Object must retain the coherent closed manufactured-shell read under the target's normal culling interpretation, without masking missing faces through two-sided rendering or material/camera compensation.

The receiving-only reversed result demonstrates that such a coherent presentation exists for these exact triangles in this exact proof host. It does **not** determine where, whether, or how any adaptation belongs in the real transport chain.

## Preservation rules

Do not repair this Art hold by:

- rewriting the Object source mesh merely to satisfy this Materials observer;
- declaring the Geometry candidate wrong from receiver-local evidence;
- globally reversing every Object / UC / glTF triangle by analogy;
- disabling culling as the production answer;
- retuning Materials, lights or cameras to hide missing surfaces;
- changing Animation/Rigging/VFX or world placement;
- silently promoting the Materials-only receiving reversal into Technical-Art policy.

Preserve:

- Geometry PR #33 candidate identity and rollbackability;
- exact source positions, triangle membership/order and rigid-group partition;
- current Object material-family scalars for the transport comparison;
- the historical owner-order failure and receiving-only reversal as explicit controls.

## Highest-leverage next proof — Technical Art

The next useful owner is Technical Art, not Geometry or Materials.

Use the existing Object Technical-Art scene/export/import lane rather than opening a parallel policy lane. Transport the **exact Geometry PR #33 candidate** through the actual Object -> UC / glTF -> Godot path used for independently carried rigid parts, then determine the receiving front-face/index convention from that real path.

Minimum evidence contract:

1. pin Geometry head `606d8189a3bf4502141d8038f08d35d421829dde` and candidate identity exactly;
2. preserve positions, triangle memberships, triangle order and rigid-group identities;
3. retain the exact emitted GLB/export identity and real Godot import identity;
4. render at least the same `front_service`, `three_quarter`, and `rear_hinge` shell-observing contexts under normal backface culling;
5. retain a two-sided or otherwise cull-neutral spatial control;
6. if the real transport requires an index/front-face adaptation, make the location and rule explicit and prove it rather than inheriting the Materials proof-only reversal;
7. if the real transport does **not** require reversal, retain that result and explain why this Materials receiver differs;
8. preserve an owner-order negative/control path where practical so the shell-continuity claim remains falsifiable;
9. independent Visual QA after Technical Art has real transport evidence.

Art does not prescribe whether adaptation happens pre-export, in an Object adapter, during glTF construction, at target import, or nowhere. Technical Art owns that determination.

## Parallel lanes deliberately not duplicated

- **Object VFX Direction 036** remains open: owner seed `41027` still needs one VFX-owned irregularity repair for the wall-clock bead-chain presentation. This winding packet does not supersede or solve it.
- **Object Animation / Map PR #46** has fresh green wall-clock playback and a 29-frame shaded review sequence. Art inspected the new motion evidence but does not retime or alter it here; the culling loss is the more severe current visual correctness gate.
- **Object Runtime:** current batching/representation evidence remains downstream. Runtime should not optimize/adopt a winding representation until Technical Art establishes the exact real transported representation and Art/QA accept its visual shell continuity.
- **Map compact-east Direction 034** remains a separate temporal-salience hold.
- **Character, Animal, Building, Nature, Weather, Weapon, Armor, Unit and Misc** keep their current owner lanes; no competing new visual packet displaced this receiver-level shell failure.

## Handoffs

### Materials / Object PR #6

Keep the three-context owner/reversed packet as retained lookdev evidence. Do not retune materials or silently replace the owner-order control. Art accepts the receiving-only reversed result only as a bounded visual reference for shell continuity.

### Geometry / Object PR #33

No source/candidate geometry rewrite is requested. Preserve the coherent source-space candidate and its exact structural evidence. The new failure is receiver-local until the real transport path proves otherwise.

### Technical Art / existing Object rigid-scene transport lane

Rebind the exact Geometry #33 candidate through the real Object -> UC/glTF -> Godot path and determine the receiving convention there. Do not copy the Materials proof-only reversal as policy without real transport evidence.

### Runtime

Wait for the exact transported representation before culling/performance adoption. Do not infer target-device benefit or policy from this proof-host comparison.

### Visual Observer / QA

After Technical Art returns the real transport packet, independently recheck shell continuity and the declared convention. The current QA result remains exact evidence for the Materials receiver only.

## Explicit non-claims

Direction 037 does **not** establish:

- that Geometry PR #33 is wrong in source space;
- source adoption of the Geometry candidate;
- a universal clockwise/counter-clockwise front-face rule;
- a universal Object, UC, glTF or Godot winding adapter;
- the correct layer in which any adaptation belongs;
- production normals/tangents/UVs/textures;
- arbitrary-camera/renderer equivalence;
- target-device culling/performance acceptance;
- collision/physics/gameplay acceptance;
- final Object source or transport adoption;
- CANON;
- production/game readiness;
- Geometry, Materials, Technical Art, QA or Art Direction mastery.

## Four-root gate

**Truth:** the direct-cull shell loss and the near-equivalent reversed receiving control are both preserved. A structural source-space PASS is not conflated with renderer-facing acceptance, and the Materials proof receiver is not inflated into production transport authority.

**Agency / non-domination:** Art defines the required visual outcome but does not seize Geometry source authority or Technical-Art adaptation implementation. Materials, Runtime and QA keep their own boundaries.

**Continuity:** Geometry #33, Materials #6, the direct owner-order failure, the receiving-only control, Direction 036 VFX work and current Object Animation evidence remain independently addressable rather than silently rewritten.

**Wisdom before speed:** the studio stops a visually broken shell at the exact receiving boundary where it appears and asks the real transport owner to resolve convention before source adoption or optimization.

The four AXM roots remain the merge gate.
