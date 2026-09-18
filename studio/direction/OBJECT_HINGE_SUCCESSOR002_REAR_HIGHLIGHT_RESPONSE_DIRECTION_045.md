# AXM 3D Studio — Art Direction 045

Date: 2026-09-18

State: **FAIL_ART_DIRECTION_OBJECT_HINGE_SUCCESSOR002_REAR_HIERARCHY_045__REPEATED_SPECULAR_STRIPE_TOO_DOMINANT / PASS_SIDE_THREE_QUARTER_HIERARCHY_REFERENCE / REQUEST_ONE_ROUGHNESS_ONLY_HARDWARE_STEEL_SUCCESSOR / HOLD_FINAL_VISUAL_ADOPTION / COORDINATION_ONLY**

## Bounded decision

Independent Visual Observer / QA has now returned the exact complete-object hierarchy proof requested by Direction 044. The successor002 hinge is structurally and visually coherent under ordinary culling, but the unchanged `hardware_steel` response fails the intended rear-facing hierarchy in the two retained hinge-facing contexts.

Direction 045 therefore records:

- **`FAIL_ART_DIRECTION_OBJECT_HINGE_SUCCESSOR002_REAR_HIERARCHY_045__REPEATED_SPECULAR_STRIPE_TOO_DOMINANT`**;
- **`PASS_ART_DIRECTION_OBJECT_HINGE_SUCCESSOR002_SIDE_THREE_QUARTER_HIERARCHY_REFERENCE_045`**;
- **`REQUEST_ONE_BOUNDED_ROUGHNESS_ONLY_HARDWARE_STEEL_SUCCESSOR__ALBEDO_METALLIC_GEOMETRY_CAMERA_LIGHT_FROZEN`**;
- **`HOLD_FINAL_OBJECT_HINGE_SUCCESSOR002_VISUAL_ADOPTION__ART_QA_RUNTIME_TARGET_DEVICE_PENDING`**.

This is a material-response direction only. It does not reopen Hard Surface, Geometry, Rigging, Animation, Technical Art transport, Runtime representation, cameras, lighting or source ownership.

## Exact evidence identity

Repository: `mike-axiom-mir/axm-object-design`

Existing Materials PR: **#6 — `Materials: prove functional surface separation on case + module`**

Exact reviewed Materials head: **`90789442be09aac60125f9423d1d5f7d65c1c1a3`**

Exact owner workflow: **`35310535089 — Object material hinge successor002 full receiver review` — SUCCESS**

Exact retained artifact:

- ID **`10533132418`**;
- size **`272,599 B`**;
- archive SHA-256 **`af712862f420a4a070c2a731136ba123f87cc40d1aca4613100a7a60d9b5dc84`**;
- independently downloaded and rehashed by Art Direction to the same digest.

Renderer: Godot `4.7.2-stable` / GL Compatibility / X11 / llvmpipe.

Exact complete receiver: **31 visible mesh nodes / 1,052 triangles** in every retained frame.

Current hinge material remains:

- role `hardware_steel`;
- albedo `#9AA3A8FF`;
- metallic `0.88`;
- roughness `0.32`.

Exact retained contexts:

- `full_rear_three_quarter`;
- `full_rear_grazing`;
- `full_side_three_quarter`.

## Independent QA return consumed

Visual Observer / QA independently reproduced complete-receiver/culling coherence, then found a bounded hierarchy defect rather than a transport defect.

### Rear three-quarter

- hinge support: `11,365 px = 4.8235%` of the visible object;
- hinge share of brightest 1% of visible-object pixels: **`88.8%`**;
- area-normalized brightest-1% overrepresentation: about **`18.4x`**;
- hinge p95 luminance: `1.0000` versus non-hinge `0.4441`;
- fully-white pixels: hinge `2,408`, non-hinge `303`;
- five context-relative high-brightness hinge components remain visible as a repeated chain.

### Rear grazing

- hinge support: `7,527 px = 2.9775%`;
- hinge share of brightest 1%: **`84.3%`**;
- area-normalized brightest-1% overrepresentation: about **`28.3x`**;
- hinge p95 luminance: `0.9410` versus non-hinge `0.4911`;
- five high-brightness hinge components again remain visible as a repeated chain.

### Side three-quarter

- hinge support: `9,372 px = 3.4447%`;
- hinge share of brightest 1%: **`0.0%`**;
- no hinge component exceeds the non-hinge 99th-percentile luminance in this retained context.

These diagnostics are evidence for this exact packet, not universal AXM aesthetic thresholds.

## Direct Art read

Art Direction independently downloaded, rehashed and visually inspected the exact retained full-receiver frames.

The positive receiver is coherent: there is no gross missing shell, inside-out knuckle, detached chain or scene corruption. The defect is hierarchy-specific.

In `full_rear_three_quarter` and `full_rear_grazing`, the five knuckles repeatedly catch narrow, near-white highlights along one rear edge. Their spacing and repeated bright caps create a segmented luminous stripe that becomes a stronger focal rhythm than the broader shell/service hierarchy. The exact candidate is already darker than the neutral diagnostic hinge control, so simply lowering broad material brightness is not the demonstrated problem.

In `full_side_three_quarter`, the same material does not dominate: the shell, service-orange feature and larger forms retain hierarchy. That prevents a false global claim that successor002 or `hardware_steel` is always too bright.

The most evidence-supported first repair is therefore **highlight response**, not geometry, albedo, camera or light.

## One bounded visual-direction improvement

Return exactly **one** Materials-owned roughness-only successor for `hardware_steel`.

Preserve exactly for the first repair:

- successor002 geometry and all five knuckle identities;
- exact Technical Art carrier / parity / culling path;
- all 31 complete-receiver nodes and 1,052 triangles;
- `hardware_steel` albedo `#9AA3A8FF`;
- `hardware_steel` metallic `0.88`;
- every non-hinge material value;
- cameras, FOV, lights and exposure;
- ordinary backface culling;
- the same three retained complete-object contexts.

Materials owns the exact new roughness value. Art does **not** prescribe a numeric value from the current evidence. The intent is to broaden/soften the narrow saturated knuckle highlights enough that the rear views read as functional hardware integrated into the case rather than as five repeated bright beads/one segmented stripe.

The successor must still preserve:

- recognizably metallic hardware response;
- readable through-bores and knuckle separation;
- the current side-three-quarter non-dominance;
- surrounding shell/service hierarchy.

Do **not** combine the first repair with albedo, metallic, geometry, texture, wear, decal, UV, camera, light or exposure changes. Do not run a broad scalar sweep to search for a passing image. One attributable successor is the next evidence surface.

If that one roughness-only successor does not resolve the rear hierarchy without making the hinge dead/plastic, preserve the result and return it as a HOLD. A second material degree of freedom needs a fresh evidence-backed direction rather than silent tuning.

## Next evidence contract

Materials should return current `roughness=0.32` control versus the exact one-successor candidate in the same three complete-object contexts.

Art review question:

> Does the successor reduce the repeated rear-edge specular-stripe focal pull while preserving believable steel identity, bore readability and the already-good side-three-quarter hierarchy?

No numerical brightest-pixel quota is authored as a pass threshold. The QA luminance statistics remain diagnostics; the primary decision is the directly observed hierarchy in the frozen contexts.

After the owner packet exists, independent Visual Observer / QA should challenge the exact successor without inheriting Art preference. Runtime / target-device acceptance remains separate.

## Constellation / non-duplication note

Fresh Nature VFX PR #19 now has a strong five-socket static shared-driver response envelope, and Nature Runtime PR #20 is already consuming that family. Those are valuable but remain static-response / representation questions with final motion/look held. They are not opened here because the Object full-receiver QA return is a concrete, current Art-owned blocker with an existing Materials owner ready for one attributable repair.

Building, Weather, Animal and Object VFX retain Directions 038–043 and their downstream owner lanes. No duplicate implementation lane is opened by Direction 045.

## Explicit non-claims

Direction 045 does **not** establish:

- the exact successor roughness value before Materials authors/tests it;
- final hinge material acceptance;
- arbitrary-camera, arbitrary-FOV, arbitrary-light or renderer equivalence;
- final UVs, textures, normal maps, wear, decals or manufacturing finish;
- articulated contact, collision, retention, friction, strength or manufacturing behavior;
- Runtime or target-device performance;
- gameplay readiness;
- default source / Technical Art adoption;
- CANON;
- production/game readiness;
- Materials mastery;
- Visual QA mastery;
- Art Direction mastery.

## Four-root gate

- **Truth:** the coherent-receiver PASS and rear-hierarchy FAIL remain together; side-view non-failure is preserved; exact head/artifact/hash and observed metrics remain inspectable.
- **Agency / non-domination:** Art chooses the visual target and one bounded comparison. Materials owns the actual roughness authoring; QA owns independent challenge; Technical Art, Runtime, merge and CANON authority are untouched.
- **Continuity:** Direction 044 is not rewritten. Its frozen-material full-receiver request produced the evidence that now justifies this successor. Exact control and rollback identities remain preserved.
- **Wisdom before speed:** change one attributable material-response degree of freedom before touching geometry, lighting, color, textures or broader surface language.

The four AXM roots remain the merge gate.
