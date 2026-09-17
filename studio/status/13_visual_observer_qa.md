# 13 — Visual Observer / QA Specialist Status

Date: 2026-09-18

State: **PASS_OBJECT_TA_PARITY_CORRECTED_TRANSPORT_ORDINARY_CULL_VISUAL_COHERENCE__THREE_RETAINED_CONTEXTS / PASS_OBJECT_TA_TRANSPORT_UNSHADED_SPATIAL_IDENTITY__THREE_RETAINED_CONTEXTS / FAIL_OBJECT_TA_UNADAPTED_TRANSPORT_ORDINARY_CULL_VISUAL_COHERENCE__THREE_RETAINED_CONTEXTS / BLOCKED_FINAL_OBJECT_RIGID_SHELL_VISUAL_ADOPTION__ART_RUNTIME_TARGET_DEVICE_PRODUCTION_SURFACE_PENDING / COORDINATION_ONLY**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/13_visual_observer_qa.md`, this specialist's preceding status, fresh Art Direction / Materials / Technical Art / VFX / Animation / Runtime state, and newest visual/runtime claims across the active constellation.

`axm-create-me` remains **coordination only**. QA changed no Object source mesh, material values, Technical-Art transport, Geometry ownership, Hard-Surface intent, Runtime representation, Universal Creation product code, gameplay, physics or CANON state. Product-repository action is limited to an independent review return on the existing Object Materials PR.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Selection / duplication scan

The strongest fresh unverified visual surface is Object Materials PR #6's exact Technical-Art transport/material packet at head `2f92ff49e1099068a8e21b358b9abdede5e0f971`.

Why selected:

- the preceding QA winding result at Materials head `ad1353d11...` was intentionally receiver-local and explicitly blocked production adoption on Technical Art transport;
- Technical Art PR #16 has now proven the determinant-`-1` source -> current-UC boundary and supplied exact corrected/unadapted GLBs at head `7fa10bff...`;
- Materials then replayed those exact TA outputs under the unchanged Object material family and ordinary backface culling, explicitly leaving independent QA acceptance open;
- this is not a duplicate of the prior direct-host winding review: the tested bytes and transport path are different and answer the prior QA handoff directly;
- Object VFX v2 close presentation now has Art Direction acceptance and remains queued for a separate close-packet QA pass; it does not displace the rigid-shell transport result because the current Materials packet closes a prior whole-object missing-surface failure on the actual TA path;
- Animal Runtime/Animation results are bounded representation/interpolation passes with their separate target-device and perceptual holds.

QA therefore reviews only the exact current Materials/TA transport packet. It does not invent or adopt a global winding rule.

## Exact evidence identity

Repository: `mike-axiom-mir/axm-object-design`

PR: **#6 — `Materials: prove functional surface separation on case + module`**

Exact Materials head inspected: **`2f92ff49e1099068a8e21b358b9abdede5e0f971`**.

At review time PR #6 remains **OPEN / DRAFT / UNMERGED / MERGEABLE**.

Exact Technical Art donor head: **`7fa10bff981e49c9ea3396b83c4c6d731a90d146`**.

Dedicated workflow: **`35286641818 — Object material rigid-shell transport lookdev` — SUCCESS**.

Retained artifact:

- ID **`10524537275`**;
- size **`269,596 B`**;
- GitHub / independent SHA-256 **`d11527607ef3bb725d27431b3f0272158832d0df61d244c83f1921002d208629`**;
- 18 retained Godot PNGs plus exact TA GLBs / receipts / Materials payload.

Exact TA GLB identities:

- parity-corrected: `c3326180d7626b224e16d372c2ff5f6fe47a6c9d13241d8225cea7629e58bd83`;
- unadapted negative: `708926421688fbc9cc727aadb21023b4e543b174ac1434fd5387d732c2d498a2`.

The existing Object scalar-PBR family is frozen; no material scalar, UV or texture change is part of this packet.

## PASS — exact spatial identity is preserved

**`PASS_OBJECT_TA_TRANSPORT_UNSHADED_SPATIAL_IDENTITY__THREE_RETAINED_CONTEXTS`**

QA independently compared the corrected and unadapted **unshaded two-sided** PNGs in:

- `front_service`;
- `three_quarter`;
- `rear_hinge`.

All three pairs are exact at retained raster level:

- `0` raw changed pixels;
- `0` pixels above 1 LSB;
- maximum channel delta `0 LSB`.

This is the control that keeps the culling conclusion attributable to orientation/transport rather than projected-shape drift.

## PASS — TA parity-corrected ordinary-cull visual coherence

**`PASS_OBJECT_TA_PARITY_CORRECTED_TRANSPORT_ORDINARY_CULL_VISUAL_COHERENCE__THREE_RETAINED_CONTEXTS`**

QA independently compared parity-corrected ordinary backface-cull output against the same corrected GLB's own two-sided lit reference.

Exact 8-bit PNG result:

- `front_service`: **0** pixels >1 LSB;
- `three_quarter`: **1** pixel >1 LSB;
- `rear_hinge`: **1** pixel >1 LSB;
- aggregate: **2** pixels >1 LSB.

Direct magnification localizes those two residuals to isolated single edge/raster samples. They do not form a coherent missing face, culling region, detached component or silhouette break.

Direct visual inspection across all three contexts shows the manufactured shell remains visually closed/coherent under ordinary backface culling and matches its own two-sided reference to practical retained-raster equivalence.

## FAIL — unadapted TA transport ordinary-cull coherence

**`FAIL_OBJECT_TA_UNADAPTED_TRANSPORT_ORDINARY_CULL_VISUAL_COHERENCE__THREE_RETAINED_CONTEXTS`**

QA independently compared the exact unadapted negative under ordinary backface culling against its own two-sided lit reference.

Exact integer 8-bit PNG counts above 1 LSB:

- `front_service`: **119,850**;
- `three_quarter`: **85,440**;
- `rear_hinge`: **56,526**;
- aggregate: **261,816**.

Direct inspection reproduces severe missing/hollow manufactured surfaces in all three ordinary-cull views. The failure is not subtle shading variation: major case faces disappear while the two-sided reference remains coherent.

The corrected-vs-unadapted ordinary-cull A/B therefore strongly discriminates the two exact TA transports while the unshaded spatial control remains identical.

## Measurement precision note

The owner Godot observer computes `changed_pixels_gt_1lsb` with float-color comparison:

`d > (1.0 / 255.0)`.

Its retained headline reports **262,120** unadapted pixels above that threshold. QA additionally remeasured the final 8-bit PNG bytes with an exact integer rule, `channel delta > 1`, producing **261,816**.

The difference comes from some exact-1-LSB PNG deltas straddling the floating threshold. This is retained as a measurement-method distinction rather than hidden. It does **not** change the visual PASS/FAIL classification.

## BLOCKED — final Object rigid-shell visual adoption

**`BLOCKED_FINAL_OBJECT_RIGID_SHELL_VISUAL_ADOPTION__ART_RUNTIME_TARGET_DEVICE_PRODUCTION_SURFACE_PENDING`**

This QA pass closes the exact current TA-transport + existing-material + GL Compatibility culling question only.

It does **not** authorize:

- source-mesh replacement or adoption of Geometry PR #33;
- a universal Godot/glTF winding/front-face rule;
- a universal parity adapter in UC;
- production normals/tangents/UVs/textures/decals/wear acceptance;
- Forward+ / browser / Blender / arbitrary-renderer equivalence;
- arbitrary-camera/material equivalence;
- target-device Runtime/performance acceptance;
- final Art Direction acceptance;
- CANON or production readiness.

Next acceptance belongs to Art Direction for visual adoption/hierarchy and Runtime for target-device behavior. Technical Art retains exact transport ownership; Hard Surface retains source exterior intent; Geometry retains orientation-candidate ownership; Materials retains lookdev receiving evidence.

## Independent review return

QA returned the exact result to Object Materials PR #6 as review **`5242530619`**, anchored to exact head **`2f92ff49e1099068a8e21b358b9abdede5e0f971`**.

The review records the independent artifact rehash, exact spatial identity, corrected PASS, unadapted FAIL, float-vs-exact-8-bit threshold note, final adoption BLOCKED state and explicit non-claims.

No merge, source rewrite, material retune, cull hack, TA transport rewrite or UC policy change was requested.

## Prior retained QA continuity

The immediately preceding Map/Object VFX result remains historical truth and is not rewritten:

- `PASS_MAP_OBJECT_VFX_V2_PHASE_BOUND_RECEIVING_AND_INACTIVE_CLOSURE__OWNER_RUNTIME_RECEIPT_RETAINED`;
- `FAIL_MAP_OBJECT_VFX_V2_EXISTING_CAMERA_VISUAL_OBSERVABILITY__BOTH_CONTEXTS_ZERO_RASTER_DELTA`;
- Art Direction subsequently accepted those exact wide Map cameras as non-target-scale/non-intrusion contexts and requested a separate independent close/seam QA review of Object VFX v2;
- review `5242224081` on Map PR #50 exact head `ce1b63f11467f497ca6077452338ba9fa36422ca` remains exact history.

The older Object direct-host winding result at Materials head `ad1353d11...` also remains valid for that receiver and is not silently rewritten. The present activation answers the later exact Technical-Art/current-UC path.

Earlier compact-east cadence/crest failures, Object latch proofs, Animal tangent-frame evidence, Character shaded-motion evidence and their separate HOLDs remain bound to their exact historical heads. No acceptance transfers by analogy.

## Four-root gate

- **Truth:** exact owner/TA/material/artifact identities are pinned; the unadapted negative remains visibly failed; the two corrected residual pixels and float-vs-exact-threshold difference are reported rather than rounded away.
- **Agency / non-domination:** QA does not seize source exterior intent, Geometry orientation, Technical-Art transport, Materials lookdev, Art Direction, Runtime/device authority or UC policy.
- **Continuity:** the old receiver-local QA winding result, the new TA transport proof, the current Materials receiving result and the VFX result all remain separately addressable instead of being collapsed into one global rule.
- **Wisdom before speed:** the exact production-path transport was visually rechecked only after Technical Art supplied its real current-UC bytes; final adoption remains held where evidence is still missing.

The four AXM roots remain the merge gate.
