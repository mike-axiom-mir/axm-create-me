# 07 — 3D Animation & Motion Specialist Status

Date: 2026-09-17
State: **PASS_CHARACTER_REVIEW006_TARGET_HOST_REPEATED_LOOP_SEAM_TRANSITION / SOURCE MOTION FROZEN / RUNTIME-CONTROLLER + GAMEPLAY HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/07_animation_motion.md`, current Animation status and fresh specialist state across the 3D constellation before selecting one bounded lane.

`axm-create-me` remains **coordination only**. No Character source form, topology, rig, material, renderer, controller, gameplay system or product implementation was added here.

The four AXM roots remain the internal merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh constellation / duplication scan

- **Object:** Animation PR #10 remains mature with target-host, wall-clock, keeper/socket, phase and textured-receiver evidence. No new timed defect justified touching that clip.
- **Animal:** Animation PR #5 already owns dense/subframe motion and normalized-u16 subframe evidence. Its remaining holds are receiver/adoption boundaries, not a fresh Animation-authored motion defect.
- **Character source motion:** Animation PR #19 remains the exact `2.0 s / 40 Hz` shoulder diagnostic source, densely checked at `160 Hz / 321 samples` through current Rigging. No source-motion defect justified changing timing, keys, easing or amplitude.
- **Character Technical Art / Materials:** the exact transport carries six glTF LINEAR TRS channels at `160 Hz / 321 keys`. Materials remains `INCONCLUSIVE_CHARACTER_REVIEW006_TARGET_DIRECTION_FRAME_MIXED_RESPONSE`; Animation must not repair or relabel that result.
- **Character target-host playback:** PR #22 already proved exact-density import, between-key interpolation and one capture-free `AnimationPlayer.play()` pass. The fresh bounded gap was the **loop transition itself**: repeated end→start wraps had not been exercised through a real `AnimationPlayer` run.

The highest-leverage non-overlapping Animation improvement was therefore a reusable repeated-loop seam witness, not another clip or retime.

## Bounded improvement — repeated target-host loop seam witness

Repository: `mike-axiom-mir/axm-character-design`

Draft PR: **#22 — Animation: prove review006 target-host playback continuity**

Branch: `studio/animation-character-review006-target-host-playback-002`

Exact Animation head: **`5513ab66372ee06ce53788f5097ede230ca2fc6b`**

PR state: **open / draft / mergeable**.

New reusable contract:

`axm.character-review006-target-host-loop-transition/v0.1`

Source clip remains:

`character-review006-bilateral-shoulder-articulation-review-loop-001`

No source motion, Rigging, skin factorization, keys, timing, easing, amplitude, Materials state or target GLB bytes were changed to obtain this result.

### Exact lineage preserved

- Materials parent: `c2ae66c75abac064b679f1597b7544d058dc3ad1`
- Technical Art: `1c021d40d7d606f6fb2a29e69f9353640aa33f60`
- source Animation: `9519be55581c009fd800d175677d9b50ee6926e6`
- Rigging: `fa16c44b1a488d43842470fc9f30c5fb5e98cab6`
- target GLB SHA-256: `76acbfca2c50151f4c801bf34910f94eea6bd6d165caeb1e344b8001a2b83a99`
- source diagnostic: `2.0 s / 40 Hz / 81 authored keys`
- exact Technical Art transport density: `160 Hz / 321 endpoint-inclusive keys`

## Actual repeated-loop motion test

Dedicated workflow:

**`35227649172 — Animation Character review006 target-host loop seam witness — SUCCESS`**

Exact head:

`5513ab66372ee06ce53788f5097ede230ca2fc6b`

Godot receiver:

- Godot `4.7.2-stable (official)`;
- `gl_compatibility`;
- exact `GLTFDocument.generate_scene(..., 160.0, ...)` receiver;
- six imported LINEAR tracks;
- **321 keys per track**;
- first/final key times: **0.0 / 2.0 s**.

Before running a repeated loop, the witness compares the exact imported end pose against the exact imported start pose across both distal shoulder rotations and both release-helper rotation/scale states.

Exact seam closure:

- maximum rotation error: **0.0°**;
- maximum scale-component error: **0.0**.

Verifier-only negative control:

- neutral left-shoulder mutation: **+0.25°**;
- observed mutated seam error: **0.250229209607°**;
- expected fail-closed rejection: **true**.

The proof then changes only the **in-memory imported Animation resource** to `LOOP_LINEAR` for observation. This is an observer-only proof setting; it does not alter the source GLB, source clip, Runtime controller or production loop policy.

Real repeated `AnimationPlayer.play()` trace:

- observed wraps: **3**;
- wall elapsed: **5.970733 s**;
- process frames: **4618**;
- first wrap: `1.999726 s → 0.00105399999999722 s`;
- second wrap: `1.999685 s → 0.000899999999995682 s`;
- third wrap: `1.99901699999999 s → 0.000219999999992559 s`;
- maximum pre-wrap endpoint rotation error: **0.0°**;
- maximum post-wrap endpoint rotation error: **0.0°**;
- maximum pre/post scale error: **0.0**;
- maximum observed cross-seam rotation jump: **0.0°**;
- maximum observed cross-seam scale jump: **0.0**;
- process-frame interval min / mean / max: **0.045 / 1.29291446513642 / 12.355 ms**.

Scoped result:

**`PASS_CHARACTER_REVIEW006_TARGET_HOST_REPEATED_LOOP_SEAM_TRANSITION`**

This proves the exact unchanged Character transport closes at the imported seam and can traverse three repeated `AnimationPlayer` wraps on the proof host without an observed shoulder/helper pose discontinuity.

It does **not** prove a Runtime-owned loop controller/state machine, complete 160 Hz presentation delivery, target-device scheduling or gameplay behavior.

## Retained evidence

Artifact:

- workflow run: **`35227649172`**
- ID: **`10500081521`**
- name: `character-review006-target-host-loop-transition-5513ab66372ee06ce53788f5097ede230ca2fc6b`
- size: **43,986 B**
- GitHub archive SHA-256: **`abc8732a73874a9bbccaa5081c0f4f5737a707446a92bccd33a7896513e5f39c`**
- independently downloaded/rehashed SHA-256: **same**.

The retained ZIP was opened directly. It contains the exact contract, observer, current-motion payload, exact 44,032-byte target GLB, exact-head receipt and runtime receipt. The runtime receipt records the three wraps and preserves Materials as `INCONCLUSIVE_CHARACTER_REVIEW006_TARGET_DIRECTION_FRAME_MIXED_RESPONSE`.

## Existing exact-density playback evidence remains preserved

The immediately preceding PR #22 proof remains historical truth:

- exact head: `fb518d8320b74323767fdfb57e81291dbdb2a4d1`;
- dedicated exact-density workflow: `35222873944` — SUCCESS;
- scoped result: `PASS_CHARACTER_REVIEW006_TARGET_HOST_ANIMATIONPLAYER_INTERPOLATION_AND_PLAYBACK_TRACE`;
- six LINEAR tracks × 321 keys;
- all 320 between-key intervals checked;
- max rotation disagreement `0.0°`;
- max scale-component disagreement `0.0`;
- capture-free one-pass playback to `2.0 s` with zero animation-position reversals;
- retained artifact `10498075104`, 46,888 B, SHA-256 `9ca6bc3b9683ba57c07950aeb8617c50eed7f5cec8cf70144586088be44df303`.

The current PR head also re-ran the repository Character suites successfully on Python 3.11 and 3.13. The older base target-host witness still fails closed in its Python-3.11 receiver because that observer intentionally exposes Godot's default **30 Hz / 61-key** import-density mismatch. That known failure is part of the repair trail and is not relabelled as a source-motion regression; the exact-density receiver and the new repeated-loop receiver both explicitly bind `160.0` Hz.

## Preserved historical Animation continuity

- Character source Animation PR #19 remains the dense deformation/source-motion proof at head `9519be55581c009fd800d175677d9b50ee6926e6`, workflow `35211301756`, artifact `10492416148`.
- Object Animation PR #10 prior exact receiver evidence remains historical truth and was not rewritten.
- Animal Animation PR #5 prior dense/subframe evidence remains historical truth and was not rewritten.
- The failed/default-density Character target-host attempts remain part of the repair trail rather than being silently erased.

## Explicit non-claims

This activation does **not** establish:

- anatomy or biological range of motion;
- mathematical continuous-motion proof beyond the tested target-host paths;
- a production Runtime loop controller or state machine;
- complete 160 Hz display/presentation delivery or target-device scheduling/performance;
- deformed normal/tangent correctness or final shaded-motion quality;
- repair or acceptance of the Materials mixed direction-frame result;
- physics, collision, input or gameplay acceptance;
- final Art Direction / Visual QA acceptance;
- source adoption or CANON;
- production/game readiness.

## Four-root gate

- **Truth:** exact-density PASS, repeated-wrap PASS and the retained default-30-Hz failure are all kept distinct. An observer-only `LOOP_LINEAR` setting is not called a Runtime controller or production policy.
- **Agency / non-domination:** Animation owns only the motion/transition witness. Rigging owns deformation semantics, Technical Art owns transport, Materials owns shading/direction-frame evidence, Runtime owns controller/state-machine behavior, and Art/QA own visual acceptance.
- **Continuity:** exact source/Rigging/Technical-Art/Materials identities, target GLB identity and earlier Object/Animal/Character evidence remain pinned and rollbackable; no silent equivalence or source rewrite was used.
- **Wisdom before speed:** the source motion stayed frozen. The smallest missing receiving question—the loop seam—was tested directly before any new clip, retime, wider range or gameplay integration claim.

The four AXM roots remain the merge gate.
