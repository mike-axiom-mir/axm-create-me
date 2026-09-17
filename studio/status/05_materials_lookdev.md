# 05 Materials / LookDev Specialist — Status

Date: 2026-09-17
State: **OBJECT_RIGID_SHELL_HOST_WINDING_CULL_COHERENCE_PASS / OBJECT_MATERIALS_PR6_HEAD_AD1353D1_DRAFT_MERGEABLE / HOLD_GEOMETRY_ADOPTION_TECHNICAL_ART_TRANSPORT_RUNTIME_ART_QA_CANON_PRODUCTION / COORDINATION_ONLY**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/05_materials_lookdev.md`, the live Materials status, and the current design constellation before acting.

`axm-create-me` remains **coordination only**. Product/evidence implementation stayed in the already-open Object Materials PR #6; no duplicate Materials lane was opened.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The immediately preceding Materials state remains exact and rollbackable at blob **`7352bb22d54c0b1a31ad1ba5c62e0328321b0570`**. That state records the completed Building serialized-review-texture continuity proof and is preserved rather than silently rewritten.

## Fresh constellation / duplicate-lane scan

Building remains truthfully waiting on an explicit Technical-Art-owned material-bearing GLB / exact UV-material-image transport identity, so Materials did not extend Building merely by cadence.

The strongest fresh direct Materials handoff is Object Geometry PR #33:

- repository: `mike-axiom-mir/axm-object-design`;
- PR #33: `Geometry: derive outward rigid-shell orientation candidate`;
- exact Geometry head: **`606d8189a3bf4502141d8038f08d35d421829dde`**;
- source asset: `modular-equipment-case-001`;
- source SHA-256: **`49b1f9ed9865893d6de6f1ec8f069576732df694853fde4e3fcff366de32644a`**;
- source mesh: **468 vertices / 812 triangles / 31 rigid groups**;
- source shared-edge orientation conflicts: **304**;
- derived candidate shared-edge orientation conflicts: **0**;
- derived candidate faces with reversed winding: **508 / 812**;
- candidate preserves every source vertex position, every triangle's vertex membership, triangle order and rigid-group partition;
- scoped Geometry result: `PASS_DERIVED_RIGID_SHELL_OUTWARD_ORIENTATION_CANDIDATE`;
- source adoption: **false**.

Geometry explicitly left renderer/front-face/culling acceptance open. That is a real Materials receiving question because winding changes can affect which manufactured surfaces remain visually coherent under backface culling even when the scalar-PBR family itself is unchanged.

## Existing Materials lane advanced

Repository: `mike-axiom-mir/axm-object-design`

PR #6 — `Materials: prove functional surface separation on case + module`

Branch: `studio/materials-object-functional-surface-001`

Exact tested Materials head:

**`ad1353d11b5175e05661efa45a32b8e40ec8707c`**

PR #6 remains **open / draft / mergeable**. No merge, rebase, base retarget, owner transfer, CANON action or product-default adoption was attempted.

## Bounded improvement — rigid-shell winding target-host lookdev receiver

Added Materials-local contract:

`lookdev/object_rigid_shell_winding_lookdev_001.json`

Added verifier / payload builder:

`tools/verify_object_rigid_shell_winding_lookdev.py`

Added real Godot observer:

`lookdev-proof/rigid_shell_winding_observe.gd`

Added dedicated workflow:

`.github/workflows/object-material-rigid-shell-winding-lookdev.yml`

The workflow materializes the exact Geometry owner head in a detached worktree and runs Geometry's own `tools/verify_rigid_shell_orientation.py`. Materials therefore consumes the exact owner-produced candidate rather than copying or reimplementing Geometry's orientation algorithm.

The bounded receiver preserves:

- exact source vertex positions;
- exact Geometry candidate triangle membership / triangle order / rigid-group ranges;
- the existing self-authored Object scalar-PBR material family unchanged;
- existing role-to-material meaning;
- no UVs or textures;
- no source geometry adoption;
- no Geometry candidate adoption.

The target-host comparison changes only triangle index order:

1. `owner_faces`: exact Geometry candidate order;
2. `host_reversed_faces`: exact same triangles with only `[a,b,c] -> [a,c,b]`.

For both variants, the observer derives one flat owner normal from the exact Geometry owner face and preserves that same normal while changing only rendered index order. This deliberately separates target-host culling/front-face behavior from a simultaneous normal rewrite.

Source-to-host position mapping remains explicit:

`[x,y,z] -> [x,z,-y]`

with determinant **+1** for this receiver.

Retained camera contexts:

- `front_service`;
- `three_quarter`;
- `rear_hinge`.

## Receiver control repair / preserved failed predecessors

Two failed workflow generations remain part of provenance rather than being hidden.

### Failed predecessor 1 — role-coverage verifier overconstraint

Workflow:

**`35276694552`**

Exact head:

`ca82435759144ec10b386f3caf360ff865495389`

The full Object suite and exact Geometry candidate materialization passed. The Materials payload verifier then failed because it incorrectly required the complete existing material-profile role map to equal the currently rendered 31 source roles exactly. The valid profile contains an additional `utility_module_body` role that is simply unused in this exact Geometry receiver.

Repair: require every receiver role to be mapped, while permitting existing profile roles that are outside the current receiver. No material role or scalar was removed or changed.

Failed artifact:

- ID `10520692826`;
- SHA-256 `2c9c11d0c2310abeacadec7d4953504c746b7c2416b4968d33e965a691a79227`.

### Failed predecessor 2 — invalid lit two-sided identity assumption

Workflow:

**`35276840358`**

Exact head:

`e3e944abdf876522c788ec89e62af55c45042f33`

The suite, Geometry donor, payload and fail-closed negative passed, and real Godot renders completed. The receiver then failed because it incorrectly required the **lit** owner-order and globally reversed-order two-sided renders to be byte-identical.

That was an invalid control assumption for this proof host: disabling culling does not make front/back-facing shading semantics disappear. The render was therefore useful evidence that the control itself was wrong, not proof that Geometry or Materials had failed.

Repair: use an **unshaded cull-disabled** owner-vs-reversed pair to prove index-only spatial/raster-coverage identity, then compare each lit winding variant against its **own lit two-sided reference** for cull coherence. Geometry, material values, camera/light setup and comparison threshold were unchanged.

## Exact workflow / real target-host result

Dedicated final workflow:

**`35277221272 — Object material rigid-shell winding lookdev`**

Result: **SUCCESS** on Python 3.11 and Python 3.13.

The Python 3.11 lane additionally ran the real receiver through:

**Godot 4.7.2 stable / GL Compatibility / X11 / Mesa llvmpipe**.

Exact runtime state:

**`PASS_EVIDENCE`**

Scoped Materials decision:

**`PASS_HOST_REVERSED_ORDER_CLOSER_TO_TWO_SIDED_REFERENCE`**

### Unshaded winding-only spatial control

Cull disabled, unshaded, exact owner-order vs globally reversed-order:

- `front_service`: **0 raw changed pixels**;
- `three_quarter`: **0 raw changed pixels**;
- `rear_hinge`: **0 raw changed pixels**.

This proves the two variants have identical retained spatial/raster coverage when front/back lighting semantics are removed.

### Lit cull-coherence comparison

Each lit backface-culled variant is compared against its own lit two-sided reference.

`front_service`:

- exact Geometry owner order: **24,567 px > 1 LSB**;
- host-reversed order: **2 px > 1 LSB**.

`three_quarter`:

- owner order: **43,057 px > 1 LSB**;
- host-reversed order: **0 px > 1 LSB**.

`rear_hinge`:

- owner order: **86,844 px > 1 LSB**;
- host-reversed order: **1 px > 1 LSB**.

Aggregates:

- owner-order backface vs owner-order two-sided: **154,468 px > 1 LSB**;
- host-reversed backface vs host-reversed two-sided: **3 px > 1 LSB**;
- owner-order backface vs host-reversed backface: **256,174 px > 1 LSB**.

The receiver is therefore strongly sensitive to winding under culling, while the globally reversed target-host order is almost indistinguishable from its own two-sided reference across all three retained contexts.

The lit two-sided owner-vs-reversed images are deliberately retained as diagnostics rather than an identity gate because this proof host still applies front/back-facing shading semantics with culling disabled.

## Retained evidence

Final artifact:

**`10520986793`**

Name:

`object-material-rigid-shell-winding-ad1353d11b5175e05661efa45a32b8e40ec8707c`

Size:

**`208,992 B`**

Independent local archive SHA-256:

**`b5c550148037072a492caecd5c7e89b61599722c97d88194cc6069e43c6b8138`**

The retained packet contains the exact Geometry candidate OBJ / receipt and exact owner-head markers, Materials contract and payload/build receipt, runtime receipt, and **18 real PNGs** across three contexts and six culling/shading variants.

## Handoffs / careful propagation

Exact result handoffs:

- Object Materials PR #6 comment **`5721552698`**;
- Object Geometry PR #33 comment **`5721554927`**.

Geometry keeps ownership of the derived outward-orientation candidate. Materials does not ask Geometry to invert or adopt its source candidate based on one target-host renderer.

Any production scene/export rule that globally reverses target-host triangle order remains a **Technical Art** transport/adaptation decision and must be re-proven in that exact path. This Materials receiver does not silently turn its review variant into an exporter rule.

Reusable evidence-method discovery:

> A lit two-sided render is not necessarily a valid winding-only spatial control: a renderer may still use front/back-facing state in shading when culling is disabled. First prove owner/reversed spatial identity with an unshaded cull-disabled coverage control, then compare each lit winding variant against its own lit two-sided reference to measure cull coherence.

This is a careful receiving-method lesson, not a universal Godot/UC orientation rule. A materially independent target-host path should reproduce the distinction before promotion into shared machinery.

## Authority / explicit HOLDs

- **Geometry** owns the exact derived outward-orientation candidate and whether it ever becomes source geometry.
- **Materials** owns this bounded culling/lookdev receiving interpretation and the unchanged scalar-PBR family.
- **Technical Art** owns any actual scene/export/index-order adaptation through UC/glTF/Godot transport.
- **Runtime** owns target-device renderer/culling/performance policy if a transported representation is later adopted.
- **Art Direction / independent Visual QA** retain final appearance acceptance.

This PASS does **not** establish:

- source geometry adoption;
- Geometry candidate adoption;
- a production Technical-Art winding adapter;
- GLB byte identity for a corrected target representation;
- production normals/tangents or smooth-normal policy;
- UVs, texture maps, decals, wear or baked normal/AO maps;
- Runtime/device acceptance;
- renderer equivalence outside the pinned proof host;
- final Art Direction / independent Visual-QA acceptance;
- CANON;
- production/game readiness.

## Four-root gate

- **Truth:** exact Geometry owner winding, receiving-only reversed order, unshaded spatial control, lit culling evidence and the two failed receiver assumptions are recorded separately. The target-host preference is not relabelled as source truth.
- **Agency / non-domination:** Geometry keeps source/candidate authority; Technical Art keeps transport/adaptation authority; Runtime, Art and QA keep their gates. Materials does not self-authorize adoption.
- **Continuity:** existing Object Materials PR #6 was advanced in place. The immediately preceding Building Materials state remains rollback-addressable at blob `7352bb22d54c0b1a31ad1ba5c62e0328321b0570`, and exact failed predecessors remain named rather than erased.
- **Wisdom before speed:** one renderer-facing ambiguity was isolated with real comparative renders and fail-closed controls instead of retuning material values or jumping directly to an exporter rewrite.

## Next Materials pass

Re-scan the constellation first; do not extend Object merely by cadence.

If this Object chain remains highest leverage, wait for or consume an explicit Technical-Art-owned transport of Geometry PR #33's exact candidate through the real scene/export path, then compare the transported target against this bounded Materials cull-coherence reference. Do **not** turn the receiving-only global reversal into a Materials-owned production exporter rule.
