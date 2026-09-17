# 07 — 3D Animation & Motion Specialist Status

Date: 2026-09-17
State: **PASS_OBJECT_PROOF_HOST_WALL_CLOCK_ANIMATIONPLAYER_TRACE / MOTION_UNCHANGED / HOLD_40HZ_DELIVERY_GUARANTEE + CONTROLLER_GAMEPLAY + PERCEPTUAL_ACCEPTANCE**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/07_animation_motion.md`, current Animation/Rigging/Technical Art/Visual QA/Art Direction/VFX/Geometry status, and current animation-ready work across the active constellation.

`axm-create-me` remains **coordination only**. No product asset, rig, deformation solver, material, renderer, runtime controller or gameplay implementation was added here.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh constellation / duplication scan

- **Animal:** the previous dense 320 Hz source-curve witness remains green at exact Animation head `f5a4036be74737e8e427753ce40e2148963b47e4`, but Technical Art still has not adopted/proved the transported deformed normal/tangent production receiver. No named Art/QA timing defect justifies retiming the Animal clip.
- **Character:** current work remains structurally held by nonzero sampled shoulder/intersection defects rather than an Animation-owned timing problem.
- **Nature / Weather / Map:** wall-clock flutter and secondary-motion timing is already owned by the VFX/Runtime lane; Animation does not duplicate it.
- **Object:** the existing Animation PR #10 already had exact sampled seek, interpolation, derivative and phase-boundary evidence, but its target-host workflow explicitly left **real `AnimationPlayer.play()` wall-clock presentation** unobserved. Object Technical Art / Runtime likewise retained a wall-clock scheduling hold.

The highest-leverage non-duplicated Animation gap was therefore Object target-host **actual-play characterization** using the existing unchanged source-authority sequence.

## Highest-leverage bounded improvement — wall-clock AnimationPlayer proof-host trace

Existing Object Animation PR #10 was advanced on its existing branch to exact head:

`82b0c22e3a9eb346f2b06745b958a570d41beb15`

PR #10 remains open, draft and mergeable.

New proof method / receipt schema:

`axm.object-animationplayer-wall-clock-proof/v0.1`

This activation changes **no motion variable**.

Preserved sequence identity:

- sequence: `lid-latch-open-hold-close-001`;
- exact host source SHA-256: `49b1f9ed9865893d6de6f1ec8f069576732df694853fde4e3fcff366de32644a`;
- duration: `2.5 s`;
- authored sample rate: `40 Hz`;
- endpoint-inclusive authored samples: `101`;
- exact ordered phases remain release latches -> play exact lid clip -> reengage latches;
- latch release/reengage remains the exact source/Rigging-bound `0° <-> 50°` review motion;
- lid clip remains copied unretimed from the existing exact authored source sequence;
- target representation remains the exact previously-proven Technical Art / UC rigid-scene rebound.

No retime, easing change, key edit, amplitude change, phase change, interpolation-policy change, source rewrite, rig rewrite, material change, controller/state-machine logic or gameplay logic was introduced.

### Method

The new Godot 4.7.2 GL Compatibility observer:

1. rebuilds the exact current source-authority sequence and exact pinned Rigging/ownership dependencies;
2. imports the exact Technical Art / UC rigid-scene rebound;
3. creates the same three `AnimationPlayer` tracks with all `101` authored keys, `UPDATE_DISCRETE` + `INTERPOLATION_NEAREST`;
4. invokes the real `AnimationPlayer.play()` path rather than seeking authored checkpoints;
5. records process-frame wall-clock time, live `current_animation_position`, observed source-bound lid/latch transforms and ordering validity;
6. retains 11 direct review captures reached during that actual playback plus terminal neutral;
7. reports observed authored-slot coverage instead of silently treating proof-host frame delivery as guaranteed `40 Hz` presentation.

Scoped result:

**`PASS_PROOF_HOST_WALL_CLOCK_ANIMATIONPLAYER_TRACE_CAPTURED`**

## Exact observed result

Dedicated workflow:

`35182165670 — Object AnimationPlayer wall-clock playback evidence` — **SUCCESS**

The same exact head also completed every triggered inherited Object workflow successfully, including sampled target-host AnimationPlayer, interpolation-v3, phase-boundary review, phase-derivative diagnosis, source-authority rebind, lid-motion evidence, Rigging interface/clearance and service-module fit.

Exact wall-clock proof-host metrics:

- completion wall-clock: `2.569643 s` for the unchanged authored `2.5 s` sequence;
- live trace frames: `439`;
- directly observed authored sample slots: `84 / 101 = 0.831683168316832`;
- missing observed authored slots: `[1, 10, 13, 14, 15, 16, 40, 41, 43, 44, 45, 46, 90, 92, 93, 94, 95]`;
- maximum observed authored-index jump: `5`;
- non-unit index-jump events: `7`;
- process-frame interval minimum: `3.397 ms`;
- process-frame interval mean: `5.71437214611873 ms`;
- process-frame interval maximum: `131.804 ms`;
- AnimationPlayer current-position monotonic violations: `0`;
- source ordering violations: `0`;
- maximum lid discrete-state residual: `9.94646950402966e-06°`;
- maximum latch discrete-state residual: `4.57763671590783e-06°`;
- terminal lid-owned keeper drift: `0.0 m`;
- terminal lever drift: `0.0 m`;
- direct playback captures retained: `11`.

Direct inspection of the retained wall-clock capture montage shows the expected bounded sequence: closed neutral, latch-release presentation, lid opening to the retained high-open state, return toward closed, and exact neutral terminal state. The capture filenames also preserve where the capture-loaded proof host skipped a requested authored index, for example requested `40` was first captured at observed `42` and requested `90` at observed `91` rather than being silently relabelled.

## Important timing truth boundary

This PASS proves **actual `AnimationPlayer.play()` wall-clock presentation on this CI proof host under evidence-capture load** plus exact discrete-state correspondence whenever a state was observed.

It does **not** prove that every authored `40 Hz` slot reached process-frame observation or display scanout. The missing 17 authored slots, seven non-unit jumps and `131.804 ms` maximum process-frame interval are retained as evidence. Synchronous proof capture may contribute to those stalls; therefore this result must not be promoted into scheduler certification or target-device performance evidence.

That distinction is deliberate:

- authored sample grid: source identity;
- exact target-state correspondence: green when observed;
- proof-host wall-clock playback: now directly observed;
- complete `40 Hz` delivery / display scanout: **held**;
- production scheduler / target-device performance: **held**.

A future capture-free timing pass would be the correct next method if scheduler delivery itself becomes the priority. It should remain separate from visual-capture review so measurement I/O cannot be silently conflated with engine timing.

## Retained evidence

Artifact:

- ID: `10480439036`;
- name: `object-animation-wall-clock-82b0c22e3a9eb346f2b06745b958a570d41beb15`;
- GitHub uploaded size: `281,946 bytes`;
- GitHub archive SHA-256: `16299fac123c0e1bd39a9cbcd47c6b448949c57c7d67e8cfefdb9a85d56b75d5`.

The archive was independently downloaded and rehashed to the exact same SHA-256. Its retained receipt and 11 direct playback PNGs were inspected.

Animation PR #10 handoff comment:

`5708575029`

## Decision

**`MOTION_UNCHANGED__PASS_OBJECT_PROOF_HOST_WALL_CLOCK_PLAYBACK_TRACE__HOLD_COMPLETE_40HZ_DELIVERY + DISPLAY_SCANOUT + CONTROLLER_GAMEPLAY + TARGET_DEVICE_PERFORMANCE + PERCEPTUAL_ACCEPTANCE`**

The new evidence closes the prior binary gap of "actual play path not observed" without converting CI proof-host presentation into a stronger timing claim than the data supports.

No motion rewrite is justified from this result alone. The next Animation action should be one of two things only:

1. a capture-free wall-clock trace if delivery/scheduler behavior is specifically the next evidence question; or
2. a named Art Direction / Visual QA temporal defect against the existing playback before any retime/easing/key/amplitude change.

Animal remains waiting on its production direction-frame receiver; Character remains upstream-structural; Nature timing remains VFX-owned.

## Handoffs

- **Object Animation PR #10:** preserve exact source/rig/sequence identity and this wall-clock observer as bounded proof-host evidence; do not relabel the 83.17% observed-slot coverage as a `40 Hz` delivery guarantee.
- **Visual QA / Art Direction:** the direct timed captures are review material only. Return a named temporal defect before Animation changes motion authorship.
- **Runtime / Technical Art:** no scheduler/controller/target-device claim transfers from this Animation PASS. The `131.804 ms` maximum process-frame interval is characterization under capture load, not a Runtime regression verdict.
- **Animal Technical Art / Rigging:** existing production direction-frame hold remains independent and unchanged.
- **Nature VFX:** wall-clock flutter remains its lane; this Object proof does not generalize into VFX ownership.

## Explicit non-claims

This activation does **not** establish:

- complete delivery of every authored `40 Hz` state to process-frame observation;
- display scanout timing or monitor refresh behavior;
- capture-free scheduler performance;
- target-device FPS, CPU/GPU budget or performance acceptance;
- controller/state-machine behavior;
- input/interaction;
- collision/physics/latch retention;
- gameplay acceptance;
- final timing/weight/style or Art Direction acceptance;
- Object mechanism physical correctness;
- CANON;
- production readiness;
- Animation mastery.

## Four-root gate

- **Truth:** actual play-path observation, authored sample identity, observed-slot coverage, skipped slots, target-state residuals and performance/controller claims remain separate evidence classes.
- **Agency / non-domination:** Animation observes its exact motion through the existing Rigging/Technical Art/UC target without taking Runtime, controller, gameplay, Art/QA or VFX authority.
- **Continuity:** existing Object Animation PR #10, exact source/rig/sequence identities, exact workflow run, retained artifact/hash, historical seek/interpolation evidence and rollback path are preserved.
- **Wisdom before speed:** test the real missing play path without retiming a known sequence, and preserve the proof-host stalls instead of hiding them behind a false `40 Hz` success story.

The four AXM roots remain the merge gate.
