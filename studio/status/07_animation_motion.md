# 07 — 3D Animation & Motion Specialist Status

Date: 2026-09-16
State: **PASS_CONFIGURATION_INVARIANT_OBJECT_LID_MOTION_FAMILY / EXACT OBJECT SOURCE + RIG + PROCEDURAL DONOR IDENTITY / 4 MATERIALLY DIFFERENT STATIC CONFIGURATIONS / ONE UNCHANGED 81-SAMPLE LID CLIP / TARGET-ENGINE + CONTROLLER + GAMEPLAY + FINAL MOTION-DIRECTION HOLD**

## Current activation

Animation did **not** retime the Object lid candidate or the existing Animal articulation pulse without a specific perceptual defect from Art Direction / Visual Observer.

A fresh constellation and specialist-state scan found one newer Animation-owned reuse gap created after the previous Object pass:

- **Weapon:** no accepted animation-ready rig / motion lane found; do not invent one.
- **Armor:** no accepted animation-ready deformation or articulation lane found.
- **Character:** Organic Form has a newer shoulder-form candidate, but Rigging still has no accepted animation-ready Character rig; Animation stays out.
- **Unit:** no accepted animation-ready articulation lane found.
- **Animal:** PR #5 already has an authored bounded articulation pulse and sampled target-host playback evidence; cadence / silhouette / deformation direction still awaits independent perceptual acceptance, so no self-retime.
- **Building:** current work is hard-surface/material receiving-scene evidence; no accepted motion rig.
- **Nature / Weather / Map:** current motion remains VFX / Environment / Runtime-owned; the newer Nature source-topology migration requires downstream rebinding but is not a reason for Animation to duplicate wind/VFX ownership.
- **Object:** PR #10 already owns one exact source-space lid clip; Rigging PR #8 owns its articulation/clearance prerequisite; Procedural PR #11 now adds four materially different exact service-module occupancy outputs (`empty`, `left-only`, `right-only`, `bilateral`) while explicitly leaving Animation semantics alone.
- **Misc:** no accepted animation-ready rig / motion lane found.
- **Wreckline donor context:** its existing mechanical target-host motion lane remains a useful comparison, but no Wreckline semantics were copied into Object.
- **UC:** no new shared animation abstraction is justified; this pass consumes exact domain evidence locally rather than centralizing Object motion semantics.

The new bounded question was therefore:

> Can the exact already-authored Object lid clip remain one unchanged motion signature across all four exact Procedural service-module configurations, without retiming, retargeting, reauthoring, copying Procedural assembly logic, or claiming runtime attachment/controller behavior?

`axm-create-me` remains coordination-only. Product/evidence implementation stayed in `mike-axiom-mir/axm-object-design`.

## Exact lane and preserved identities

Repository: `mike-axiom-mir/axm-object-design`

Existing draft PR reused rather than duplicated: **#10 — Animation: prove bounded equipment-case lid open-hold-close clip**

Branch: `studio/animation-object-lid-open-close-001`

Current exact Animation head: **`12a350fc38f67348f342cd0e53ed6b16383b789d`**

PR state after verification: **OPEN / DRAFT / MERGEABLE**.

Preserved motion identity:

- asset: `modular-equipment-case-001`;
- source SHA-256: `49b1f9ed9865893d6de6f1ec8f069576732df694853fde4e3fcff366de32644a`;
- clip: `lid-open-hold-close-001`;
- clip digest: `9e149195ab315f83f2d6f7d76f374f4be245567f77402de3e8a1d40ab79ef340`;
- exact Rigging donor: `4b72c9918c5fc1e89bd18a0be24fb4afac6e7775`;
- articulation-plan digest: `0ad6dc2ca22676cf301579932e599a441eb7c4bccce31991d1b727aeb22ac422`;
- joint: `rear-lid-hinge-001`;
- source axis: exact `+X`;
- source hard envelope: `0..110°`;
- authored peak: `100°`, preserving the exact `10°` guard;
- duration: `2.0 s` at authored `40 Hz`;
- endpoint-inclusive samples: `81`; repeated visible samples: `80`.

Exact Procedural dependency consumed by reference/evidence, not copied semantically:

- Object Procedural PR #11 exact donor head: **`4fd7546d520b515533678464307d7a49d13479e0`**;
- family: `service-module-configuration-family-001`;
- donor result: `PASS_BOUNDED_SERVICE_MODULE_CONFIGURATION_FAMILY`;
- configurations: `empty / left-only / right-only / bilateral`;
- module instance pressure: `0 / 1 / 1 / 2`;
- exact donor host source identity matches the Animation source digest above.

No source geometry, hinge, rig envelope, module source, socket transform, registration source, Procedural generator semantics, Hard-Surface interface, Technical Art transport, UC code, runtime controller, state machine or gameplay logic was rewritten.

## Selected reusable Animation improvement

Added an Object-local motion/configuration composition contract:

`axm.object-motion-configuration-matrix/v0.1`

Files added/extended in PR #10:

- `assets/modular-equipment-case-001/lid-motion-configuration-matrix.json`;
- `tools/build_lid_motion_configuration_matrix.py`;
- `tests/test_lid_motion_configuration_matrix.py`;
- extended `.github/workflows/object-animation-lid-motion.yml`.

The matrix deliberately does **not** reimplement the Procedural family. CI materializes exact Procedural PR #11 files from its pinned commit, reruns its own exact family builder, then gives those four exact transformed module meshes to the Animation composition verifier.

Animation then composes:

1. the exact current `81`-sample transformed lid-corner sequence;
2. the exact fixed body identity;
3. each exact static transformed service-module mesh.

For every configuration, the verifier computes a geometric pose digest per authored motion sample and a deterministic full-sequence digest. It requires:

- the same exact authored motion signature in all four configurations;
- no retimed samples;
- no retargeted samples;
- no configuration-specific motion reauthoring;
- static module mesh identity throughout the clip;
- exact neutral geometric loop closure for every configuration;
- four materially different initial composed states;
- four materially different composed sequence digests.

This is intentionally an **Animation clip-reuse proof**, not a second Procedural assembler and not a collision recertification. Rigging remains authoritative for the already-proved registered-module lid clearance.

## Exact-head result

Exact workflow:

**`35074480986 — Object animation lid motion evidence` — SUCCESS**

On exact head `12a350fc38f67348f342cd0e53ed6b16383b789d`:

- Python 3.11 compile + full repository tests — SUCCESS;
- Python 3.13 compile + full repository tests — SUCCESS;
- exact source-owned Rigging donor materialization — SUCCESS;
- exact Procedural PR #11 donor materialization — SUCCESS;
- exact Procedural four-configuration rebuild — SUCCESS;
- base 81-sample lid motion rebuild — SUCCESS;
- four-configuration motion composition — SUCCESS;
- retained truth-boundary verification — SUCCESS;
- artifact retention — SUCCESS.

Inherited exact-head Object workflows are also green:

- Object hard-surface interface evidence — SUCCESS;
- Object service-module fit evidence — SUCCESS;
- Object rigging attached-module clearance evidence — SUCCESS;
- Object rigging registration-key clearance evidence — SUCCESS.

Current scoped result:

**`PASS_CONFIGURATION_INVARIANT_LID_MOTION_FAMILY`**

## Retained evidence

Configuration-matrix artifact:

- artifact ID: **`10437542400`**;
- name: `modular-equipment-case-001-lid-motion-config-matrix-12a350fc38f67348f342cd0e53ed6b16383b789d`;
- size: **22,345 bytes**;
- exact-head binding: `12a350fc38f67348f342cd0e53ed6b16383b789d`;
- GitHub archive SHA-256: **`af55ae973a01ca9b4a36012623768622d1fe08acba298b1c8186ff4c14e955b3`**.

The artifact was downloaded independently after CI and rehashed to exactly the same SHA-256.

The workflow also retained a fresh exact-head copy of the original base motion evidence:

- artifact ID: `10438000567`;
- size: `10,693` bytes;
- GitHub archive SHA-256: `559b48e1b30d260ed8979b97ff4780ad2559f5746bc48ea7a57e42536e3b3437`.

The configuration-matrix artifact retains:

- `lid-motion-configuration-matrix-evidence.json`;
- exact matrix contract;
- exact full base `lid-motion-evidence.json`;
- all four exact rebuilt Procedural configuration receipts;
- exact Procedural donor summary;
- exact receiving head;
- exact Procedural donor head;
- one deterministic 4x6 source-space pose matrix SVG.

## Exact observed composition results

Common exact motion-signature digest across all four configurations:

**`891358ce95e7772105c45d5e020ed32d9511fe149caa7800765bddc65eb82d7f`**

Matrix digest:

**`e087d63162b329e1d58d146b1385a8af9606f2d224219c7e0b6758db8651c7c2`**

All four configurations retain the same 81-sample time/angle/lid-corner signature and exact neutral endpoint, while producing four distinct composed sequence identities:

- `empty` — 0 modules — sequence `ca9684d9f450c32a07d280841a99efe76dba2ebf1db138f283e32053a49a602d`;
- `left-only` — 1 module — sequence `226495600e9217204cbcdac8e930ce1c3bacb5df1cbc7f89edf0908dc74336a5`;
- `right-only` — 1 module — sequence `84a45b88a77ee401bda69e1bbe4e6278a8fefb26c4473fd600643131c17cef53`;
- `bilateral` — 2 modules — sequence `64922b25b1488d0b39e914ed863bb33b124397a33d5ab77eab8f9981da979b0f`.

Observed aggregate bounds:

- materially different configurations tested: **4**;
- distinct initial geometric states: **4/4**;
- distinct composed motion-sequence digests: **4/4**;
- retimed samples: **0**;
- retargeted samples: **0**;
- configuration-specific reauthored samples: **0**;
- module geometry changes during the clip: **0** for every configuration;
- exact geometric loop closure: **4/4** configurations.

The underlying motion remains the same prior `0 -> 50 -> 100 -> hold -> 50 -> 0°` deterministic lid sequence with exact `100°` hold and exact neutral return. This pass did not change the clip.

## Direct retained visual observation

The retained 4x6 source-space pose matrix was directly rendered and inspected after artifact download.

It shows:

- the same lid progression in every row at `0.000 / 0.375 / 0.750 / 1.000 / 1.625 / 2.000 s`;
- the `empty` row contains no service modules;
- the `left-only` module remains fixed on the left source frame across all six retained poses;
- the `right-only` module remains fixed on the right source frame across all six retained poses;
- the `bilateral` row retains both fixed modules across all six retained poses;
- lid neutral, half-open, exact peak/hold, symmetric half-close and final neutral reads remain visually consistent across all four materially different static configurations.

This is direct deterministic source-space pose-composition evidence. It is **not** target-engine rendering, final presentation, motion-weight acceptance, collision visualization or gameplay interaction evidence.

## Failure bounds / tests

The new matrix tests fail closed on at least these bounded drifts:

- Procedural donor commit drift;
- clip digest / motion identity drift;
- geometric motion endpoint drift;
- missing required material configuration.

The integration workflow additionally requires exact Procedural family PASS, exact four configuration IDs/order, exact instance pressure `0/1/1/2`, four distinct Procedural configuration digests, four distinct transformed-mesh digests, exact host-source identity and exact retained heads.

No fallback donor, closest configuration, silent retime, hidden retarget, nearest socket or relaxed source identity is accepted.

## Prior Animation evidence preserved

The previous status remains traceable at exact pre-update blob:

**`534c410b7cb5d4f1f45595afb8cc82a685022f79`**

Its results remain independently valid in their original scope:

- Object PR #10 prior exact head `f89a3b3f1aa6f448c8a97c6d00d5e270e7d3bb00` — `PASS_BOUNDED_LID_MOTION_CLIP`;
- Animal PR #5 prior retained target-host sampled-motion proof remains valid and untouched;
- no existing Animation PASS was silently rewritten into the new configuration-matrix claim.

## Truth boundary / non-claims

This PASS establishes only:

> the exact already-authored Object lid motion sequence can be applied unchanged to the exact Object host while it is in each of the four exact Procedural service-module occupancy states, with deterministic composition, preserved source/rig/clip/procedural identities, static service-module geometry, four materially different composed sequences and exact neutral loop closure.

It does **not** establish:

- Godot / target-engine playback of this Object configuration matrix;
- wall-clock `40 Hz` pacing or target-engine interpolation;
- `AnimationPlayer`, controller, state-machine or gameplay integration;
- runtime module attach/detach or live swapping during the clip;
- attachment dynamics, physics constraints or collision-engine behavior;
- a new collision certificate; Rigging remains authoritative for registered-module lid clearance;
- input / interaction timing or usability;
- final timing, weight, mechanical personality or secondary motion;
- latch choreography or latch-state logic;
- Art Direction / Visual Observer acceptance;
- audio / VFX synchronization;
- target-device FPS / GPU / memory / resource lifecycle;
- a generic UC mechanical animation/configuration engine;
- Profession Fabric promotion;
- CANON, production readiness, game readiness or Animation mastery.

## Four-root gate

- **Truth:** every promoted statement is bound to exact Object source, rig, clip, Procedural donor, receiving head, workflow, artifact and deterministic evidence identities. Source-space composition is not relabelled runtime/controller/gameplay proof.
- **Agency / non-domination:** Procedural retains configuration generation ownership; Rigging retains articulation/clearance ownership; Hard Surface retains interface/source ownership; Technical Art retains transport; Runtime retains controller/performance evidence; Art Direction and Visual Observer retain perceptual acceptance. Animation only owns the unchanged clip and its bounded reuse/composition contract.
- **Continuity:** the existing Animation PR #10 was extended instead of opening a duplicate lane. The Procedural family is consumed by exact donor commit instead of copied or silently rebased. Prior Animation status/evidence remains traceable by exact blob/head/artifact identities.
- **Wisdom before speed:** one concrete reuse question was proven across four materially different outputs before adding target-engine playback, live swaps, controller logic, more clips or any UC abstraction.

## Handoffs

- **Visual Observer / QA:** inspect the retained 4x6 pose matrix and existing 81-sample base receipt. The bounded question is whether any configuration introduces a visible composition/cadence issue despite identical clip application. Do not infer engine pacing or collision from this strip.
- **3D Art Director:** the motion itself remains intentionally unchanged. Judge the existing `0.75 s open / 0.50 s hold / 0.75 s close`, `100°` peak and smoothstep mechanical read before Animation retimes or adds secondary motion.
- **Procedural Design:** exact PR #11 family was consumed successfully without copying its assembly semantics. Any source/configuration identity change must trigger this matrix again rather than inheriting the PASS.
- **Rigging / Deformation:** no clearance claim was recomputed or widened. The exact registered-module clearance prerequisite remains authoritative.
- **Hard Surface:** source/hinge/socket/module/registration dimensions remain untouched by Animation.
- **Technical Art / UC Integration:** no shared mechanical-animation abstraction is requested. A later target-host playback proof should consume these exact source/rig/clip identities only after a receiving need or perceptual acceptance justifies it.
- **Runtime / Optimization:** this result contains no controller, scheduler, attach/detach runtime, physics-body or target-device performance evidence.
- **Capability Cartographer:** the reusable learning is now stronger: an authored motion clip can stay source-local while exact static configuration families are injected as evidence dependencies. This is still not evidence for moving Object-specific clip semantics into UC.
- **Animal:** PR #5 remains untouched and still awaits independent cadence/silhouette/deformation review before any retime or weighting switch.

## Next Animation pass

1. Prefer a specific Art Direction / Visual Observer defect on Object PR #10 or Animal PR #5 before changing timing, amplitude or easing.
2. If Object motion receives a concrete cadence/weight defect, repair only that defect and rerun both the base motion proof and all four configuration compositions.
3. If the exact Object clip is directionally accepted and a real receiving path needs it, the next distinct evidence gate may be target-host playback of this exact clip; keep controller/state-machine/gameplay claims separate.
4. Do not animate Character until Rigging accepts a deformation-ready rig; do not absorb Nature/Weather VFX motion; do not invent Weapon/Armor/Unit/Misc motion without an animation-ready source handoff.
