# 07 — 3D Animation & Motion Specialist Status

Date: 2026-09-17
State: **PASS_CHARACTER_REVIEW006_TARGET_HOST_ANIMATIONPLAYER_INTERPOLATION_AND_PLAYBACK_TRACE / SOURCE MOTION FROZEN / RUNTIME-CONTROLLER + GAMEPLAY HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/07_animation_motion.md`, current Animation status and fresh specialist state across the 3D constellation before selecting one bounded lane.

`axm-create-me` remains **coordination only**. No Character source form, topology, rig, material, renderer, controller, gameplay system or product implementation was added here.

The four AXM roots remain the internal merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh constellation / duplication scan

- **Object:** Animation PR #10 remains a mature motion lane with prior target-host, wall-clock, keeper/socket, phase and textured-receiver evidence. No fresh Object defect justified retiming or duplicate proof work.
- **Animal:** Animation PR #5 already owns dense/subframe motion and normalized-u16 subframe evidence. Its remaining holds are primarily receiver/adoption boundaries rather than a fresh Animation-owned clip defect.
- **Character source motion:** Animation PR #19 remains the exact `2.0 s / 40 Hz` shoulder diagnostic source, densely checked at `160 Hz / 321 samples` through current Rigging. No source-motion defect justified changing timing, keys, easing or amplitude.
- **Character Technical Art / Materials:** the exact transport already carries six glTF LINEAR TRS channels at `160 Hz / 321 keys`, while Materials keeps `INCONCLUSIVE_CHARACTER_REVIEW006_TARGET_DIRECTION_FRAME_MIXED_RESPONSE`. Animation must not repair or relabel that shading/direction-frame result.
- The highest-leverage non-overlapping Animation gap was therefore **target-host preservation and playback of the exact 160 Hz transported Character motion**, not another clip.

## Bounded improvement — exact-density target-host playback witness

Repository: `mike-axiom-mir/axm-character-design`

Draft PR: **#22 — Animation: prove review006 target-host playback continuity**

Branch: `studio/animation-character-review006-target-host-playback-002`

Exact Animation head: **`fb518d8320b74323767fdfb57e81291dbdb2a4d1`**

PR state: **open / draft / mergeable**.

Reusable contract remains:

`axm.character-review006-target-host-playback/v0.1`

Source clip remains:

`character-review006-bilateral-shoulder-articulation-review-loop-001`

No source motion, Rigging, skin factorization, keys, timing, easing, amplitude or tolerance was changed to obtain the result.

### Exact lineage preserved

- Materials parent: `c2ae66c75abac064b679f1597b7544d058dc3ad1`
- Technical Art: `1c021d40d7d606f6fb2a29e69f9353640aa33f60`
- source Animation: `9519be55581c009fd800d175677d9b50ee6926e6`
- Rigging: `fa16c44b1a488d43842470fc9f30c5fb5e98cab6`
- target GLB SHA-256: `76acbfca2c50151f4c801bf34910f94eea6bd6d165caeb1e344b8001a2b83a99`
- source diagnostic: `2.0 s / 40 Hz / 81 authored keys`
- exact Technical Art transport density: `160 Hz / 321 endpoint-inclusive keys`

## Repair trail preserved — the first target-host failure was an import-density witness defect

The prior target-host observer exposed an important evidence problem instead of a Character motion defect.

At run `35222358659`, the hardened fail-fast observer showed Godot had imported all six expected LINEAR tracks with correct `0.0 .. 2.0 s` duration, but only **61 keys per track**, not the exact transported 321. `61 = 2.0 s * 30 Hz + endpoint` matched the target host's default scene-generation bake density. The old observer had then indexed beyond that imported grid, which explains the earlier invalid/default observations such as `time_s = -1.0` and identity/zero fallback values.

That failure remains retained as evidence; it was not relabelled as a motion failure or hidden by loosening tolerances.

Animation repaired the receiving method only:

- base observer now fails closed on track-grid drift and no longer permits a later receipt to overwrite an earlier failure;
- exact imported track path/type/interpolation/key count/first/last time are retained;
- midpoint interpolation is checked in **actual `AnimationPlayer`-applied `Skeleton3D` pose space**;
- a small inherited receiver calls `GLTFDocument.generate_scene(..., 160.0, ...)`, explicitly preserving the exact Technical Art transport density rather than accepting the host default;
- source clip, rig, transport bytes and thresholds remain unchanged.

## Actual target-host motion test

Dedicated exact-density workflow:

**`35222873944 — Animation Character review006 target-host 160Hz witness — SUCCESS`**

Exact head:

`fb518d8320b74323767fdfb57e81291dbdb2a4d1`

Godot receiver:

- Godot `4.7.2-stable (official)`;
- `gl_compatibility`;
- proof host adapter: `llvmpipe (LLVM 20.1.2, 256 bits)`.

Imported animation evidence:

- six exact tracks: **PASS**;
- all six interpolation modes: **LINEAR**;
- all six key counts: **321**;
- first key: **0.0 s**;
- final key: **2.0 s**.

Pose-space midpoint evidence:

- intervals checked: **320**;
- rotation tracks checked: **4**;
- scale tracks checked: **2**;
- diagnostic midpoint density: **320 Hz**;
- maximum rotation disagreement: **0.0°**;
- maximum scale-component disagreement: **0.0**.

Verifier-only negative control:

- expected rotation offset: `+0.25°`;
- clean midpoint error: **0.0°**;
- mutated expected error: **0.237388267204391°**;
- expected rejection: **true**.

Capture-free real `AnimationPlayer.play()` trace:

- wall elapsed: **1.984233 s**;
- process frames observed: **1429**;
- highest animation position: **2.0 s**;
- animation-position reversals: **0**;
- left/right distal max excursion: **29.9999530235019° / 29.9999530235019°**;
- maximum bilateral excursion delta: **0.0°**;
- left/right endpoint residual: **0.0° / 0.0°**;
- observed process interval min / mean / max: **1.158 / 1.38078291316527 / 4.475 ms**.

Scoped result:

**`PASS_CHARACTER_REVIEW006_TARGET_HOST_ANIMATIONPLAYER_INTERPOLATION_AND_PLAYBACK_TRACE`**

This proves the exact unchanged Character transport can be received at its exact 160 Hz key density, interpolated through the tested target-host pose path, and played capture-free to loop closure on the proof host.

## Retained evidence

Artifact:

- ID: **`10498075104`**
- name: `character-review006-target-host-160hz-fb518d8320b74323767fdfb57e81291dbdb2a4d1`
- size: **46,888 B**
- GitHub archive SHA-256: **`9ca6bc3b9683ba57c07950aeb8617c50eed7f5cec8cf70144586088be44df303`**
- independently downloaded/rehashed SHA-256: **same**.

The retained receipt, exact GLB, payload, observer scripts and head identity were opened directly. The receipt records the metrics above and preserves the Materials result as `INCONCLUSIVE_CHARACTER_REVIEW006_TARGET_DIRECTION_FRAME_MIXED_RESPONSE`.

## Preserved historical Animation continuity

- Character source Animation PR #19 remains the earlier dense deformation/source-motion proof at head `9519be55581c009fd800d175677d9b50ee6926e6`, workflow `35211301756`, artifact `10492416148`.
- Object Animation PR #10 prior exact receiver evidence remains historical truth and was not rewritten.
- Animal Animation PR #5 prior dense/subframe evidence remains historical truth and was not rewritten.
- The failed/default-density Character target-host attempts remain part of the repair trail rather than being silently erased.

## Explicit non-claims

This activation does **not** establish:

- anatomy or biological range of motion;
- mathematical continuous-motion proof beyond the tested target-host interpolation path;
- complete 160 Hz display/presentation delivery or target-device scheduling/performance;
- deformed normal/tangent correctness or final shaded-motion quality;
- repair or acceptance of the Materials mixed direction-frame result;
- Runtime controller or state-machine behavior;
- physics, collision, input or gameplay acceptance;
- final Art Direction / Visual QA acceptance;
- source adoption or CANON;
- production/game readiness.

## Four-root gate

- **Truth:** the failed 30 Hz-default import witness and the repaired exact-160 Hz witness are both preserved. A verifier/import-density defect is not called a Character motion defect, and a proof-host PASS is not called target-device or gameplay acceptance.
- **Agency / non-domination:** Animation owns the motion receiver/playback witness only. Rigging owns deformation semantics, Technical Art owns transport, Materials owns shading/direction-frame evidence, Runtime owns controller/state-machine behavior, and Art/QA own visual acceptance.
- **Continuity:** exact source/Rigging/Technical-Art/Materials identities and prior Object/Animal/Character evidence remain pinned and rollbackable; no silent equivalence was used.
- **Wisdom before speed:** the source motion stayed frozen while the evidence receiver was repaired at the representation boundary that actually failed. No arbitrary retime, wider range or controller/gameplay claim was introduced.

The four AXM roots remain the merge gate.
