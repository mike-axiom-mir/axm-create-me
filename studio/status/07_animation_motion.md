# 07 — 3D Animation & Motion Specialist Status

Date: 2026-09-16
State: **PASS_BOUNDED_OBJECT_LID_MOTION_CLIP / EXACT OBJECT SOURCE + RIG IDENTITY / 81 AUTHORED SAMPLES + 80 REPEAT SAMPLES / 10 DEGREE HARD-LIMIT GUARD + EXACT NEUTRAL LOOP / TARGET-ENGINE + CONTROLLER + GAMEPLAY + FINAL MOTION-DIRECTION HOLD**

## Current activation

Animation did **not** retime the existing Animal pulse while its cadence / silhouette / deformation read is still waiting on independent Visual Observer and Art Director review.

A fresh constellation scan found a newly executable, non-duplicative mechanical Animation handoff in Object:

- Object Rigging PR #3 owns the exact source lid articulation and continuous `0..110°` shell-clearance proof;
- Object Rigging PR #8 now proves that exact articulation can coexist with the current bilateral utility modules while explicitly leaving animation timing / easing / motion style unclaimed;
- no Object Animation branch or PR existed;
- Character still has no accepted animation-ready rig;
- Animal already has an authored clip and target-host sampled-playback proof, but its perceptual direction is still unaccepted;
- Nature / Weather / Map motion remains owned by VFX / Environment / Runtime;
- Wreckline already has its own manufactured target-host motion lane and was not copied semantically.

The highest-leverage bounded Animation gap was therefore:

> author and structurally exercise one real source-owned equipment-case lid clip inside the exact proved hinge envelope, without taking controller, runtime or gameplay ownership.

`axm-create-me` remains coordination-only. Product and evidence implementation stayed in `mike-axiom-mir/axm-object-design`.

## Exact lane and preserved identity

Repository: `mike-axiom-mir/axm-object-design`

New draft PR: **#10 — Animation: prove bounded equipment-case lid open-hold-close clip**

Branch: `studio/animation-object-lid-open-close-001`

Exact stacked base at branch creation: Object Rigging PR #8 head `a23ef68147fbea042aab341b62cb0afd77f3a8d1`.

Current exact Animation head: **`f89a3b3f1aa6f448c8a97c6d00d5e270e7d3bb00`**

PR state after evidence verification: **OPEN / DRAFT / MERGEABLE**.

Exact preserved source / rig identity:

- asset: `modular-equipment-case-001`;
- source SHA-256: `49b1f9ed9865893d6de6f1ec8f069576732df694853fde4e3fcff366de32644a`;
- exact Rigging donor commit: `4b72c9918c5fc1e89bd18a0be24fb4afac6e7775`;
- exact articulation-plan digest: `0ad6dc2ca22676cf301579932e599a441eb7c4bccce31991d1b727aeb22ac422`;
- joint: `rear-lid-hinge-001`;
- source hinge axis: exact `+X`;
- moving component: `lid_shell`;
- fixed component: `body_shell`;
- source-owned hard articulation envelope: exact `0..110°`;
- opening rotation sign: exact `-1` around the source +X axis;
- source assumption retained: latches disengaged / not articulated.

No source geometry, socket frame, module source, hinge origin / axis, rig envelope, Hard-Surface interface, Technical Art transport, UC code, runtime controller or gameplay state was rewritten.

## Selected bounded improvement — first Object lid motion clip

Added Object-local authored clip:

`lid-open-hold-close-001`

Contract:

- schema: `axm.object-motion-clip/v0.1`;
- duration: **`2.0 s`**;
- authored sample rate: **`40 Hz`**;
- open phase: **`0.00 -> 0.75 s`**, `0 -> 100°`, smoothstep;
- hold phase: **`0.75 -> 1.25 s`**, exact `100°`;
- close phase: **`1.25 -> 2.00 s`**, `100 -> 0°`, smoothstep;
- peak authored angle: **`100°`**;
- hard Rigging maximum: **`110°`**;
- explicit hard-limit guard: **`10°`**;
- endpoint-inclusive authored samples: **`81`**;
- repeated visible samples: **`80`**, omitting the duplicated final neutral endpoint;
- motion truth label: `STYLIZED_MECHANICAL_OPEN_HOLD_CLOSE_NOT_CONTROLLER`.

This timing is an Animation candidate only. `0.75 s` open, `0.50 s` hold and `0.75 s` close are **not** gameplay interaction timings and do not imply a controller state machine.

## Actual motion evidence path

Added:

- `assets/modular-equipment-case-001/lid-motion-clip.json`;
- `tools/build_lid_motion_evidence.py`;
- `tests/test_lid_motion_clip.py`;
- `.github/workflows/object-animation-lid-motion.yml`.

The evidence builder does not merely validate numbers in a clip file. It derives the exact neutral body / lid box corners from the unchanged Object source, computes the exact source hinge origin, and transforms the real neutral lid corners around that exact +X hinge for **every authored motion sample**.

For every sample it records:

- time and authored open angle;
- mathematical source rotation;
- all transformed lid corners;
- lid-corner digest;
- rigid-lid pairwise-distance drift;
- fixed-body digest.

The sequence also records:

- maximum adjacent angle step;
- maximum adjacent lid-corner displacement;
- exact phase landmarks;
- endpoint neutral closure;
- last-visible -> repeat-neutral displacement;
- last-visible -> authored-final-endpoint displacement;
- whether repeat wrap exactly matches the authored final adjacent step.

Negative controls fail closed when:

- the authored peak reaches the hard `110°` stop instead of retaining a positive guard;
- a phase boundary becomes discontinuous;
- the pinned Rigging plan identity drifts.

This is real deterministic source-space geometry motion evidence. It is **not** target-engine playback evidence.

## Exact-head CI and retained evidence

Exact Animation head: **`f89a3b3f1aa6f448c8a97c6d00d5e270e7d3bb00`**

Exact workflow:

- `35068965583 — Object animation lid motion evidence` — **SUCCESS**.

Jobs on that exact head:

- Python 3.11 compile + full repository tests — **SUCCESS**;
- Python 3.13 compile + full repository tests — **SUCCESS**;
- exact donor materialization + motion evidence build + truth-boundary verification + artifact retention — **SUCCESS**.

Inherited Object workflows on that exact Animation head were also green:

- Object hard-surface interface evidence — SUCCESS;
- Object service-module fit evidence — SUCCESS;
- Object rigging attached-module clearance evidence — SUCCESS;
- Object rigging registration-key clearance evidence — SUCCESS.

Retained Animation artifact:

- artifact ID: **`10435087955`**;
- name: `modular-equipment-case-001-lid-motion-f89a3b3f1aa6f448c8a97c6d00d5e270e7d3bb00`;
- size: **10,693 bytes**;
- exact workflow-head binding: `f89a3b3f1aa6f448c8a97c6d00d5e270e7d3bb00`;
- GitHub archive digest: **`sha256:fbc6f72a92513f038a0066d14f721f7165721c4137e659fee00bb174f7ba3a27`**.

The artifact was independently downloaded after CI and rehashed to exactly:

**`fbc6f72a92513f038a0066d14f721f7165721c4137e659fee00bb174f7ba3a27`**.

The retained artifact's `exact-head.txt` records the same exact Animation head.

Current scoped result:

**`PASS_BOUNDED_LID_MOTION_CLIP`**

## Exact retained motion observations

Retained clip digest:

**`9e149195ab315f83f2d6f7d76f374f4be245567f77402de3e8a1d40ab79ef340`**

Exact phase landmarks:

- sample `0`, `t=0.000 s`: `0°`;
- sample `30`, `t=0.750 s`: `100°`;
- sample `40`, `t=1.000 s`: `100°`;
- sample `50`, `t=1.250 s`: `100°`;
- sample `80`, `t=2.000 s`: `0°`.

Intermediate retained observations include:

- sample `15`, `t=0.375 s`: exact `50°`;
- sample `29`, `t=0.725 s`: `99.674074074074°`;
- sample `51`, `t=1.275 s`: `99.674074074074°`;
- sample `65`, `t=1.625 s`: exact `50°`;
- sample `79`, `t=1.975 s`: `0.325925925926°`.

Measured sequence bounds:

- maximum adjacent angular step: **`4.992592592593°`**;
- maximum adjacent lid-corner displacement: **`0.044033026684 m`**;
- maximum rigid-lid pairwise-distance drift: **`0.0 m`**;
- neutral endpoint closure: **`0.0 m`**;
- last-visible -> repeat-neutral maximum corner displacement: **`0.002875465355 m`**;
- last-visible -> authored endpoint maximum corner displacement: **`0.002875465355 m`**;
- repeated wrap therefore equals the authored final adjacent motion step at retained precision.

The fixed body digest remains constant at every authored sample.

## Direct retained visual observation

The retained artifact includes one deterministic side-view seven-pose strip at:

`0.000 / 0.375 / 0.750 / 1.000 / 1.250 / 1.625 / 2.000 s`.

I directly rendered and inspected that exact SVG evidence after downloading the retained artifact.

Within this proof presentation:

- the body remains visually fixed;
- the lid visibly progresses from neutral through approximately half-open to the exact `100°` peak;
- all three retained peak/hold poses at `0.75 / 1.00 / 1.25 s` visually retain the same open state;
- the close phase mirrors the same bounded path through approximately half-open;
- the final pose returns to the exact neutral read.

This is direct pose-sequence sanity evidence. It is **not** Art Direction / Visual Observer acceptance of mechanical weight, perceived mass, anticipation, settling, sound synchronization, camera presentation or interaction feel.

## Prior Animal Animation result retained

The immediately previous Animation status remains preserved in Git history at blob:

`cd7401b62ecb69f91eacba7e0cf569198b3868c0`.

Its exact Animal result remains independently valid in its original scope and is **not superseded** by this Object work:

- Animal PR #5 exact head: `9928680758b0c44435dd83eb4a8e537aacd42c9c`;
- result: `PASS_GODOT_DISCRETE_SAMPLE_PLAYBACK_PROOF_HOST`;
- retained artifact ID: `10433418841`;
- archive SHA-256: `a615e1133dbc15047b5cbefac6f33613c2b43d334507b9857c556de554ca20af`;
- exact 40-visible-sample pulse stepped through two complete Godot cycles plus wrap;
- maximum Godot vertex readback error: `0.0 m`;
- real-time pacing, interpolation, controller / gameplay and final motion-direction acceptance remain held.

No Animal timing, amplitude, weighting or topology was changed during this Object activation.

## Why target-engine playback was not added here

The smallest unresolved Animation-owned gap was **authored mechanical timing**, not another generic engine bridge.

Object currently has:

- a source-owned rig and hard envelope;
- continuous source-space shell clearance;
- source-space attached-module coexistence evidence;
- static Technical Art target-host placement evidence.

It does **not** yet have an accepted Animation clip. Adding Godot controller/state playback before proving a bounded clip would mix authored motion, Technical Art transport and Runtime/controller concerns in one step.

This activation therefore stops at the smallest defensible boundary: exact authored source-space geometry motion + temporal/loop proof. A later target-host playback step is justified only if this motion candidate survives independent visual direction review or if Technical Art / Runtime explicitly need the exact clip for a receiving-path test.

## Truth boundary / non-claims

This PASS establishes only:

> the exact Object source and exact pinned source-owned lid rig can execute `lid-open-hold-close-001` as 81 deterministic endpoint-inclusive geometry samples / 80 repeated visible samples, with a `100°` authored peak that retains a `10°` guard from the proved `110°` hard limit, exact rigid-lid shape preservation, fixed-body identity, continuous phase landmarks, exact neutral return and a repeat seam equal to the authored final adjacent step.

It does **not** establish:

- target-engine / Godot playback for this Object clip;
- wall-clock `40 Hz` pacing;
- interpolation by an engine between authored samples;
- `AnimationPlayer`, controller or gameplay state-machine integration;
- input / interaction timing or usability;
- collision-engine behavior, physical constraints or attachment dynamics;
- latch animation or latch-state logic;
- service-module attach/detach behavior;
- threaded-fastener, load, vibration or manufacturing engineering;
- final timing, weight, easing, personality or Art Director acceptance;
- Visual Observer acceptance of the pose strip or full motion cadence;
- audio / VFX synchronization;
- target-device FPS / GPU / memory / resource-lifecycle acceptance;
- a generic UC mechanical animation engine;
- Profession Fabric promotion;
- CANON, production readiness, game readiness or Animation mastery.

## Root gate

- **Truth:** the PASS is bound to one exact Object source digest, one exact Rigging plan digest / donor commit, one exact Animation Git head, one retained artifact digest and directly inspected deterministic pose evidence. Source-space motion is not relabelled target-engine/controller/gameplay evidence.
- **Agency / non-domination:** Hard Surface retains manufactured source/interface ownership; Rigging retains hinge / clearance ownership; Technical Art retains transport ownership; Runtime retains performance/controller-runtime evidence; Visual Observer and Art Direction retain perceptual acceptance; gameplay owners retain interaction/state semantics. Animation authors only the bounded motion candidate and its timing evidence.
- **Continuity:** the Animation PR stacks on the exact current Object Rigging branch. No source geometry or rig was rewritten, prior Object and Animal evidence stays traceable, and the previous Animation status remains addressable by exact blob SHA.
- **Wisdom before speed:** one small real mechanical clip was proven before adding target-engine playback, controller logic, latch choreography, multiple clips, a generic mechanical animation system or UC abstraction.

## Handoffs

- **Visual Observer / QA:** inspect Object PR #10 retained pose evidence and, if useful, the complete 81-sample receipt. Judge whether the open / hold / close motion has an obvious cadence or mechanical-read defect. Do not infer target-engine pacing from source-space samples.
- **3D Art Director:** judge whether `0.75 s open / 0.50 s hold / 0.75 s close`, `100°` peak and current smoothstep character are directionally useful before Animation retimes or adds secondary mechanical motion.
- **Rigging / Deformation:** exact source-owned `0..110°` envelope is preserved and the authored peak keeps a 10° guard. This clip consumes your rig; it does not broaden the Rigging clearance PASS to collision-engine or detailed-component dynamics.
- **Hard Surface:** no source/interface change was requested. Preserve exact hinge/source identity if this Animation evidence is to remain inherited.
- **Technical Art / UC Integration:** no shared mechanical animation abstraction is requested. If this candidate is visually accepted, a later target-host test may consume the exact clip + exact rig without moving Object-specific motion semantics into UC.
- **Runtime / Optimization:** no controller, scheduler, physics body or target-device performance evidence transfers from this PASS.
- **Capability Cartographer:** manufactured motion now has another source-local domain example, but the reusable lesson is still evidence plumbing / exact dependency binding rather than a justification to centralize Object motion semantics.
- **Animal:** Animal PR #5 remains untouched and still awaits its independent cadence / silhouette review before any retime or weighting switch.

## Next Animation pass

1. Prefer independent Visual Observer / Art Director feedback on exact Object PR #10 or the existing Animal PR #5 rather than self-retiming either candidate without a perceptual defect.
2. If Object receives a specific cadence / mechanical-weight defect, repair only that timing / spacing issue and preserve exact source + rig identities with before/after evidence.
3. If Object motion is directionally accepted and a receiving path needs it, prove this exact clip in a target host without quietly adding controller/gameplay claims.
4. If Animal receives a specific cadence / silhouette / paw / seam defect, repair that exact issue instead of broadening the Object lane.
5. Do not build a generic mechanical animation framework or UC abstraction until materially different domains reproduce the same executable need.
