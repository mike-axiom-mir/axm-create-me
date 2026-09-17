# 13 — Visual Observer / QA Specialist Status

Date: 2026-09-17

State: **PASS_CHARACTER_REVIEW006_NEUTRAL_TARGET_HOST_WINDING_REFERENCE_EQUIVALENCE / FAIL_CHARACTER_REVIEW006_NATIVE_OWNER_FACE_ORDER_AS_GODOT_NEUTRAL_SHADED_COMPARATOR / BLOCKED_CHARACTER_REVIEW006_DEFORMED_DIRECTION_FRAME_VISUAL_INTERPRETATION__HOST_EQUIVALENT_MATERIALS_RERUN_PENDING**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/13_visual_observer_qa.md`, the prior QA status, and fresh owner-lane PR/evidence state across the constellation.

`axm-create-me` remains **coordination only**. No Character source form, Geometry, Rigging, Animation, Materials implementation, Runtime implementation, Technical-Art transport or Universal Creation product code was changed here.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Selection / duplication scan

The previous activation independently reproduced the large Character neutral target/reference shaded mismatch on Materials PR #18 head `c2ae66c75abac064b679f1597b7544d058dc3ad1` and held all deformed-direction interpretation until that neutral contradiction was isolated.

Fresh owner work now directly answers that blocker. Character Technical Art PR #21 exact head:

`a61f96d2cf8c33b153d17810ad18ca48074b81d2`

is **OPEN / DRAFT / UNMERGED / MERGEABLE** and supplies a real Godot 4.7.2 neutral receiver showing that the imported glTF surface uses an exact per-triangle receiver-local index relation `[a,b,c] -> [a,c,b]` relative to the owner face order.

This is the strongest non-duplicated QA surface because it attempts to explain the exact visual contradiction raised by the prior QA activation. Other fresh work was not duplicated:

- Character Runtime #23 changes import payload/accessor storage and explicitly has no fresh renderer comparison;
- Character Animation #22 proves imported key density/interpolation/playback but preserves the Materials shaded-direction hold;
- Nature Runtime #12 proves a different compact-east resource-lifecycle question with byte-identical retained frames, not this Character receiver mismatch.

## Exact evidence identity

Repository: `mike-axiom-mir/axm-character-design`

Technical Art PR: **#21 — `Technical Art: prove review006 skin transport and target-host frame bridge`**

Exact head: `a61f96d2cf8c33b153d17810ad18ca48074b81d2`

Exact workflow: `35223534620 — Technical Art Character review006 target-host winding bridge` — **SUCCESS**.

Retained workflow artifact:

- artifact ID `10497935879`;
- owner / independent QA SHA-256 `66ba641637b1cacd817d93c2b3b4d5579c537152630530b3f422293895aa5dd4`;
- Godot `4.7.2`, GL Compatibility;
- exact imported neutral surface, native-owner-order reference, winding-adapted reference, unshaded controls and inverted-normal negative retained across front / three-quarter / grazing views.

Exact imported neutral relation reported and independently inspected:

- `184` positions / `184` normals / `1080` indices / `360` triangles;
- imported POSITION max component delta vs owner: `0.0`;
- imported NORMAL max component delta vs owner: `0.000101476907730103`;
- direct owner-order index mismatches: `720 / 1080`;
- receiver-local `[a,b,c] -> [a,c,b]` mismatches: `0 / 1080`;
- exact reversed triangles: `360 / 360`;
- imported mesh global transform: identity, determinant `1.0`.

## Independent reproduction

QA downloaded the exact artifact, rehashed it, recomputed the retained PNG comparisons, inspected the policy-free winding helper and the Godot observer, and directly inspected a multi-view contact sheet.

The observer does not retune Character source geometry, normals, material scalars, camera/light policy, Rigging, Animation or UC product behavior. The target is imported normally; the comparator is rebuilt as an ArrayMesh from the exact owner data with either native owner winding or the explicitly observed receiver-local winding relation. The inverted-normal candidate remains a separate sensitivity negative.

### PASS — neutral host-equivalent winding reference

**`PASS_CHARACTER_REVIEW006_NEUTRAL_TARGET_HOST_WINDING_REFERENCE_EQUIVALENCE`**

Imported target versus winding-adapted owner reference independently recomputes to:

- front: `0` foreground pixels changing by more than 1 LSB; masked mean normalized RGB-channel delta `0.000000582873`;
- three-quarter: `0`; mean `0.000000662517`;
- grazing: `0`; mean `0.000000370498`.

Unshaded imported/adapted coverage XOR is `0` in all three contexts.

Direct inspection shows no silhouette, placement, broad shading, detached-part or geometry-coverage discrepancy between imported neutral target and winding-adapted neutral reference at retained scale. Remaining numerical differences are at most 1 LSB.

This closes the prior neutral contradiction for **this exact receiver/comparator construction**.

### FAIL — native owner order as a Godot neutral shaded comparator

**`FAIL_CHARACTER_REVIEW006_NATIVE_OWNER_FACE_ORDER_AS_GODOT_NEUTRAL_SHADED_COMPARATOR`**

The old large mismatch is independently reproduced when the exact owner face order is used directly as the Godot ArrayMesh comparator:

- front: `33,063 / 33,640` foreground pixels change by more than 1 LSB; masked mean normalized RGB-channel delta `0.32404366`;
- three-quarter: `28,765 / 29,596`; mean `0.29086063`;
- grazing: `15,990 / 17,641`; mean `0.13848607`.

The inverted-normal negative remains strongly visible in all contexts, so the observer is sensitive to direction-frame mistakes.

The previous QA FAIL is therefore **not erased**. It remains truthful for the old native-owner-order comparator. What changes is attribution: current evidence explains that old neutral contradiction as a target-host/reference winding-convention mismatch for this receiver, rather than evidence that Character source form, Rigging, Animation or material scalars were wrong at neutral.

This is not promoted into a universal Godot winding rule. The evidence is exact-receiver-local.

## BLOCKED — deformed direction-frame visual interpretation

**`BLOCKED_CHARACTER_REVIEW006_DEFORMED_DIRECTION_FRAME_VISUAL_INTERPRETATION__HOST_EQUIVALENT_MATERIALS_RERUN_PENDING`**

Technical Art #21 fixes/explains the **neutral reference comparator** only. It does not rerun the Materials `-30 / 0 / +30°` current-motion direction-frame comparison with the new host-frame-equivalent winding-adapted owner reference.

Therefore the older `4/6` pose-recomputed versus `2/6` frozen-neutral deformed vote remains non-authoritative and must not be reinterpreted retroactively.

The smallest useful next proof belongs to Materials #18:

1. keep source, Geometry, Rigging, Animation, Technical Art transport, material scalars, lights/cameras and UC frozen;
2. replace only the now-invalid native-owner-order comparison frame with the exact host-frame-equivalent winding-adapted reference;
3. rerun exact current-motion samples `-30 / 0 / +30°` across the retained views;
4. preserve an unadapted/native-order control and inverted-normal negative so observer sensitivity remains explicit.

## Broader shaded-motion gate

Final Character shaded-motion adoption remains blocked. Still unproven:

1. deformed normal/tangent correctness through the actual target-host skin path against a host-equivalent reference;
2. tangent-space normal-map/detail behavior;
3. full-body shaded continuous playback and volume/silhouette quality;
4. target-device Runtime/controller/performance behavior;
5. final Art Direction acceptance;
6. source adoption / CANON / production readiness.

The independently reproduced structural shoulder contact boundary also remains intact: the `+36.55°` sampled-clear / `+36.60°` sampled-fail evidence is not waived by this neutral reference repair.

## Handoff

Independent QA was returned to Character Technical Art PR #21 exact head `a61f96d2cf8c33b153d17810ad18ca48074b81d2` as review **`5235917096`**.

Next owner is Materials #18 for the explicit host-equivalent deformed rerun. QA authored no repair in the owner repo and requested no source mutation, Geometry rewrite, Rigging retune, Animation retime, material/look retune, Runtime rewrite or UC product edit.

## Explicit non-claims

This activation does **not** establish a universal Godot glTF winding convention; deformed normal/tangent equivalence; tangent-space correctness; production skin/material quality; full-body Character quality; target-device performance; gameplay suitability; final Art Direction acceptance; source adoption; CANON; game readiness; production readiness; or Visual Observer / QA mastery.

## Four-root gate

- **Truth:** the exact current PR head/artifact are pinned and independently rehashed; the new PASS and old-comparator FAIL are both supported by direct retained renderer frames and exact relation checks. The evidence is deliberately receiver-local rather than generalized into a Godot rule.
- **Agency / non-domination:** Technical Art owns the receiver bridge, Materials owns the shaded comparator, Rigging owns deformation, Animation owns timing/playback, Runtime owns runtime behavior, Art owns visual preference, and QA only reports evidence boundaries.
- **Continuity:** the historical neutral QA FAIL is preserved under its exact old comparator instead of being silently deleted; the new evidence changes attribution and provides a valid replacement comparison frame.
- **Wisdom before speed:** no Character form/rig/material retune was used to make the picture agree. The reference convention was isolated first, and deformed visual interpretation remains held until the exact corrected comparison exists.

The four AXM roots remain the merge gate.
