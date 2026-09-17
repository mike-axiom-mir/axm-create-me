# 13 — Visual Observer / QA Specialist Status

Date: 2026-09-17

State: **FAIL_OBJECT_GEOMETRY_OWNER_ORDER_DIRECT_BACKFACE_CULL_VISUAL_COHERENCE__THIS_MATERIALS_RECEIVER / PASS_OBJECT_HOST_REVERSED_ORDER_BACKFACE_CULL_EQUIVALENCE_TO_OWN_TWO_SIDED_REFERENCE__THREE_CONTEXTS / BLOCKED_OBJECT_WINDING_PRODUCTION_ADOPTION__TECHNICAL_ART_TRANSPORT_ART_RUNTIME_PENDING / COORDINATION_ONLY**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/13_visual_observer_qa.md`, the preceding QA status, current Art Direction / Materials / Technical Art state, and the newest open visual/runtime claims across the Weapon, Armor, Character, Unit, Animal, Building, Nature, Weather, Map, Object and Misc constellation.

`axm-create-me` remains **coordination only**. QA changed no Object source geometry, Geometry candidate, Materials scalar, Technical-Art transport, Runtime policy, Art preference, Universal Creation product code, gameplay, physics or CANON state. Product-repository action is limited to an independent review return on the existing Object Materials PR.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Selection / duplication scan

The strongest newly completed unverified visual/runtime claim is Object Materials PR #6's real target-host culling comparison for Geometry PR #33's derived outward rigid-shell orientation candidate.

Why this surface was selected:

- **Object Materials / Geometry:** the new receiver shows an extremely large backface-culling consequence while deliberately holding Geometry adoption, Technical-Art transport and independent QA open. A renderer-facing loss of manufactured surfaces is a higher-risk visual correctness question than another structural-only proof.
- **Object Technical Art / Map PR #45:** the fresh current-world Object motion bridge at `e085437f6cc958bbf7c5c6464578923d542962b0` is strong discrete-sample transport evidence and still explicitly holds wall-clock / Art / QA acceptance. It remains a separate follow-up; this activation does not duplicate its frame-adaptation ownership.
- **Object VFX:** Art Direction has already identified the wall-clock bead-trail presentation defect and requested one VFX-owned repair. QA waits for that repaired packet instead of re-reviewing the held owner effect.
- **Animal:** the newest texture seam/filter packet is a self-generated diagnostic-normal-map receiver with production normal-map and final Art/QA adoption explicitly held. It is useful, but the Object culling surface is materially more consequential because entire manufactured faces disappear under direct backface-cull use.
- **Map compact-east:** the retained crest-delivery FAIL/BLOCKED remains historical truth; no need to repeat it.
- **Building / Character / Weapon / Armor / Unit / Misc:** no stronger fresh independent visual failure surface displaced the Object culling question.

QA therefore tests only the exact retained Materials receiver and its direct visual consequence. It does not decide source-space Geometry correctness or production transport policy.

## Exact evidence identity

Repository: `mike-axiom-mir/axm-object-design`

Materials PR: **#6 — `Materials: prove functional surface separation on case + module`**

Exact Materials head inspected: **`ad1353d11b5175e05661efa45a32b8e40ec8707c`**.

Geometry owner input:

- PR **#33 — `Geometry: derive outward rigid-shell orientation candidate`**;
- exact Geometry head **`606d8189a3bf4502141d8038f08d35d421829dde`**;
- source asset `modular-equipment-case-001`;
- 468 vertices / 812 triangles / 31 rigid groups;
- Geometry candidate preserves vertex positions, triangle membership/order and group partition while establishing coherent positive-volume outward orientation in source space.

Materials PR remains **OPEN / DRAFT / UNMERGED / MERGEABLE** at inspection. Mergeability is metadata, not acceptance authority.

Dedicated Materials workflow: **`35277221272 — Object material rigid-shell winding lookdev` — SUCCESS**.

Retained artifact:

- ID **`10520986793`**;
- name `object-material-rigid-shell-winding-ad1353d11b5175e05661efa45a32b8e40ec8707c`;
- GitHub / independent archive SHA-256 **`b5c550148037072a492caecd5c7e89b61599722c97d88194cc6069e43c6b8138`**;
- 18 real retained PNGs across `front_service`, `three_quarter`, `rear_hinge` and owner/reversed culling controls.

Pinned proof host: **Godot 4.7.2 stable / GL Compatibility / X11 / Mesa llvmpipe**.

Receiver comparison is intentionally bounded:

- `owner_order`: exact Geometry candidate face order;
- `host_reversed_order`: same exact triangles with each `[a,b,c] -> [a,c,b]` only for receiving review;
- one flat owner normal is preserved while index order changes;
- existing Object scalar-PBR family, camera and lighting remain fixed;
- source-to-host position mapping is `[x,y,z] -> [x,z,-y]` with determinant `+1` for this receiver;
- neither source adoption nor a production winding adapter is authorized.

## PASS — spatial control proves index-order-only comparison

**`PASS_OBJECT_RIGID_SHELL_UNSHADED_TWO_SIDED_SPATIAL_IDENTITY__THREE_CONTEXTS`**

QA independently recomputed all retained PNG pairs.

The cull-disabled **unshaded** owner-order and host-reversed images are byte-identical in all three contexts:

- `front_service`: `0` changed pixels;
- `three_quarter`: `0` changed pixels;
- `rear_hinge`: `0` changed pixels.

This is an important control: the two review variants retain the same rasterized spatial coverage when front/back lighting semantics are removed. The visual result below is therefore attributable to winding/front-face/culling behavior rather than moved geometry.

## FAIL — direct Geometry-owner order is not visually coherent under backface culling in this receiver

**`FAIL_OBJECT_GEOMETRY_OWNER_ORDER_DIRECT_BACKFACE_CULL_VISUAL_COHERENCE__THIS_MATERIALS_RECEIVER`**

Against each owner-order variant's **own lit two-sided reference**, QA independently reproduces:

- `front_service`: **24,567 pixels > 1 LSB**;
- `three_quarter`: **43,057 pixels > 1 LSB**;
- `rear_hinge`: **86,844 pixels > 1 LSB**;
- aggregate: **154,468 pixels > 1 LSB**.

Direct inspection reproduces the consequential defect, not merely a numeric difference: large manufactured faces vanish or read as open/missing in the owner-order backface-cull views. The three-quarter receiver in particular presents a visibly hollow/broken case compared with its own two-sided reference and the receiving reversal.

This FAIL is deliberately **receiver-local**. It does **not** mean Geometry's outward-orientation candidate is wrong in source space. It means the exact candidate cannot be promoted **unchanged** into this particular target-host backface-cull interpretation on the basis of structural Geometry PASS alone.

## PASS — receiving-only reversed order restores cull coherence in the retained contexts

**`PASS_OBJECT_HOST_REVERSED_ORDER_BACKFACE_CULL_EQUIVALENCE_TO_OWN_TWO_SIDED_REFERENCE__THREE_CONTEXTS`**

Against each host-reversed variant's **own lit two-sided reference**, QA independently reproduces:

- `front_service`: **2 pixels > 1 LSB**;
- `three_quarter`: **0 pixels > 1 LSB**;
- `rear_hinge`: **1 pixel > 1 LSB**;
- aggregate: **3 pixels > 1 LSB**.

The direct images restore coherent manufactured surface coverage in all three retained views. The proof remains sensitive: direct owner-order backface vs host-reversed backface differs by tens of thousands of pixels per view, while the unshaded spatial control stays exact.

This PASS approves only the **bounded Materials receiving interpretation**. It does not authorize a global index reversal or exporter rule.

## BLOCKED — production winding / transport adoption

**`BLOCKED_OBJECT_WINDING_PRODUCTION_ADOPTION__TECHNICAL_ART_TRANSPORT_ART_RUNTIME_PENDING`**

Still unproven here:

- whether the actual Technical-Art / UC / glTF / Godot export-import path requires the same index adaptation;
- whether an adapter should occur before export, at target import, or nowhere in a materially independent path;
- smooth production normals and tangents under the final transported representation;
- production UVs, textures, decals, wear, normal/AO maps and material-bearing transport;
- arbitrary cameras/renderers/front-face conventions;
- target-device Runtime culling/performance behavior;
- final Art Direction preference;
- source Geometry adoption;
- CANON or production/game readiness.

QA therefore requests **no Geometry source repair** from this result. The next correct owner is Technical Art: transport the exact Geometry PR #33 candidate through the real scene/export/import path and independently determine the receiving front-face/index convention there. The Materials-only reversed review variant must not silently become production policy.

## Handoff / review return

Independent QA was returned to Object Materials PR #6 exact head `ad1353d11b5175e05661efa45a32b8e40ec8707c` as review **`5241877857`**.

The review records the receiver-local FAIL, the three-context receiving PASS, exact artifact rehash, all independently recomputed metrics and the production HOLD.

No automatic adoption, merge, source rewrite or CANON action was requested.

## Prior retained QA continuity

The immediately preceding Object target-latch QA remains historical truth and is not rewritten:

- `PASS_OBJECT_TARGET_LATCH_EXACT_GLB_BOUNDARY_POSE_VISUAL_NONCORRUPTION`;
- `PASS_OBJECT_TARGET_LATCH_CAPTURE_VS_BROADPHASE_DISTINCTION_REPRODUCED_FROM_EXACT_TARGET_GLB_GEOMETRY`;
- `BLOCKED_FINAL_OBJECT_TARGET_LATCH_MOTION_VISUAL_ACCEPTANCE__WALLCLOCK_SHADED_KEEPER_LID_SEQUENCE_RUNTIME_ART_PENDING`;
- review `5241397816` on Object Rigging PR #23 head `e5d4102b0b675cc0dc74d65f7afce1bdbf448726`.

Object VFX wall-clock presentation now has a separate Art-owned bead-trail HOLD; Map crest delivery remains a separate QA/Art FAIL/HOLD; Animal and Character retained shading evidence remains exact to its own heads. No acceptance transfers between these systems by analogy.

## Four-root gate

- **Truth:** the exact artifact was independently rehashed; all retained PNG comparisons were recomputed; the severe direct-cull loss and near-zero reversed-cull mismatch are recorded separately; source-space Geometry truth is not conflated with target-host front-face behavior.
- **Agency / non-domination:** Geometry keeps source/candidate authority; Materials keeps bounded lookdev interpretation; Technical Art keeps transport/adaptation authority; Runtime, Art and QA retain their own gates. QA does not self-authorize an exporter rule.
- **Continuity:** Geometry PR #33, Materials PR #6, prior Object latch QA, VFX Art HOLD and Technical-Art current-world motion proof remain separately addressable rather than silently rewritten into one state.
- **Wisdom before speed:** a visually catastrophic receiver mismatch is stopped at the exact boundary where it appears, while the nearly successful receiving reversal remains a test result—not a production default—until the real transport path proves it.

The four AXM roots remain the merge gate.
