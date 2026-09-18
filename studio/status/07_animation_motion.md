# 07 — 3D Animation & Motion Specialist Status

Date: 2026-09-18
State: **PASS_OBJECT_GODOT_HINGE_KNUCKLE_PARENT_MOTION_REBIND / OBJECT_PR10_AAACDB05 / 101_AUTHORED_KEYS / RIGGING_16B32C5A / L0_L1_LID_PARENT / B0_B1_B2_BODY_FIXED / BORED_SUCCESSOR_178D93E8_NOT_ADOPTED / SOURCE_MOTION_FROZEN / TA_RUNTIME_PHYSICS_GAMEPLAY_ART_QA_HELD / COORDINATION_ONLY**

> Continuity note: earlier Character, Animal, Nature, Object and Map Animation heads, workflows, retained artifacts, failed observer attempts and authority boundaries remain preserved in Git history and their owning PR evidence. The immediately preceding Animal result `PASS_GODOT_ANIMATIONPLAYER_GLTF_LINEAR_QUATERNION_INTERPOLATION_EQUIVALENCE` at Animal PR #5 head `eb21e0e0fd888bbb5fa41c73a6c0f1c731f662c2` remains valid for its exact retained glTF channel and is not rewritten by this Object activation.

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/07_animation_motion.md`, this status, and fresh Art Direction, Rigging/Deformation, Hard Surface, Technical Art, Runtime/Optimization, Environment and Visual Observer/QA coordination before choosing work.

`axm-create-me` remains **coordination only**. Product/evidence implementation lives in `mike-axiom-mir/axm-object-design`. The four AXM roots remain the internal merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh constellation / duplication scan

Character, Animal, Nature and the current-world Map/Object playback lanes already have substantial exact-head motion evidence. Runtime's Animal 41→19-key candidate remains Runtime-owned, Nature's source-slot presentation remains a presentation/device boundary rather than permission to retime, and current Visual Observer/QA does not report a new Animation-owned motion defect.

The fresh non-duplicated seam came from Object Rigging PR #27. Rigging exact head `16b32c5ac6d52d768d64f0fac9fedfe4ee9f24fe` proved the source-owned rear-hinge parent partition continuously across `0..110°`: moving lid knuckles `l0/l1`, fixed body knuckles `b0/b1/b2`, exact owner-stack head `172dd9ff5ed1fee3a21cd460c607f07ee0da7520`, owner-stack blob `e4e7c95769c0827a6a019afd672ff4b20cd13541`, and historical lid-rig donor `4b72c9918c5fc1e89bd18a0be24fb4afac6e7775`. Rigging explicitly returned actual Animation parent-motion use to Animation.

Hard Surface has also authored a newer bored-knuckle source successor at exact head `178d93e8976a741271d7f47ab4865519de925657`, but that successor explicitly keeps `animation_authorized=false` and `automatic_downstream_adoption=false`. This activation therefore **does not adopt or rewrite to that successor**.

## Selected bounded improvement

Repository: `mike-axiom-mir/axm-object-design`

Existing draft Animation PR: **#10 — `Animation: prove bounded equipment-case lid open-hold-close clip`**

Branch: `studio/animation-object-lid-open-close-001`

Exact tested Animation head: **`aaacdb053a3ca66218287d7746ce85adc3d244c0`**.

Observed PR state: **open / draft / mergeable / unmerged**.

No new Animation PR was opened.

Frozen source/motion identity:

- asset `modular-equipment-case-001`;
- historical host source SHA-256 `49b1f9ed9865893d6de6f1ec8f069576732df694853fde4e3fcff366de32644a`;
- sequence `lid-latch-open-hold-close-001`;
- sequence digest `0a3523cf792264f610881552fd2ebd438aabdfd05e30e92af9dbb33ded1fa2d3`;
- duration `2.5 s`;
- authored sample rate `40 Hz`;
- `101` endpoint-inclusive source samples;
- exact lid articulation joint `rear-lid-hinge-001`, +X source axis, opening sign `-1`;
- exact Rigging parent authority `16b32c5ac6d52d768d64f0fac9fedfe4ee9f24fe`;
- exact owner partition: moving `l0/l1`, fixed `b0/b1/b2`.

Retimed: **false**. Authored keys changed: **false**. Easing changed: **false**. Amplitudes changed: **false**. Historical source geometry changed: **false**. Rig parent partition changed: **false**. New bored-knuckle successor adopted: **false**.

## Reusable method improvement

Added bounded contract:

**`axm.object-animation-hinge-knuckle-parent-motion-rebind/v0.1`**

The proof has two independent sides:

1. Python binds the unchanged 101-key Animation sequence to the exact current Rigging parent evidence, validates source/sequence/rig/owner-stack identities, independently computes expected world witnesses for all five hinge knuckles at every authored sample, and explicitly fails if the newer Hard Surface bored-knuckle successor is silently promoted.
2. Godot 4.7.2 builds a proof-local `body_shell` + `lid_shell` hierarchy with the exact Rigging owner partition and drives the unchanged lid motion through a real `AnimationPlayer` `lid_shell:rotation:x` track using all 101 authored keys with `INTERPOLATION_NEAREST` / discrete authored-sample update. It seeks every exact sample and compares actual child world positions against the independent Python witnesses.

A verifier-only wrong-parent mutation reassigns body-owned `b1` under the moving lid and must fail closed. This is a proof-local Godot receiver built from exact source/Rigging identity; it is **not** Technical Art production-receiver parenting acceptance.

## Preserved failed attempts

The evidence lane preserves three observer/workflow failures instead of rewriting them away:

- workflow `35292000545`: expected-negative shell/result-capture plumbing failed before the intended bounded negative proof could be accepted;
- workflow `35292218205` at `bef1ea96c7fcdf734d7a9902bc86c964cadbce16`: real Godot parser rejected two untyped local observations (`observed`, `residual`); repaired with explicit `Vector3` / `float` typing only;
- workflow `35292408933` at `993a9679eead15833bbdfac24426a6b799880ac4`: real Godot reached the observer, but the proof queried `global_position` before the newly created Node3Ds had entered the SceneTree, producing a false zero-world-position mismatch at sample 0. Repaired by deferring only the observer execution until tree readiness.

No source geometry, timing, sample count, easing, amplitude, parent partition, acceptance threshold or newer-source adoption changed to turn those failures green.

## Exact green Godot result

Dedicated workflow: **`35292499234 — Object Animation hinge knuckle parent motion rebind v2` — SUCCESS**.

Exact branch evidence head: **`aaacdb053a3ca66218287d7746ce85adc3d244c0`**.

Scoped result:

**`PASS_OBJECT_ANIMATION_GODOT_HINGE_KNUCKLE_PARENT_MOTION_REBIND`**.

The complete exact-head workflow passed:

- full inherited Object suite: **50 tests**;
- unchanged 101-key lid/latch Animation sequence rebuild;
- exact Rigging parent receipt rebuild;
- structural parent-motion rebind input;
- fail-closed newer-source-successor adoption control;
- pinned Godot 4.7.2 execution;
- wrong-parent real `AnimationPlayer` negative control;
- positive real `AnimationPlayer` seek/readback across all 101 authored samples;
- bounded truth-boundary validation;
- retained artifact upload.

Measured positive Godot evidence:

- observed authored samples: **`101 / 101`**;
- `AnimationPlayer` tracks: **`1`**;
- track keys: **`101`**;
- interpolation: **`NEAREST`**;
- update policy: **`DISCRETE_AUTHORED_SAMPLES`**;
- peak lid open angle: **`100.0°`** at sample **`40`**;
- maximum world-position residual against independent expected witnesses: **`0.0000000298023223876953 m`**;
- maximum fixed body-knuckle world drift: **`0.0 m`**;
- maximum moving lid-knuckle world travel from neutral: **`0.032173864543438 m`**;
- endpoint parent-motion closure: **`0.0 m`**;
- structural Animation↔Rig sign residual: **`0.0°`**;
- structural axial-X residual: **`0.0 m`**;
- structural moving-knuckle hinge-radius residual: **`2.42861286636753e-17 m`**.

The wrong-parent mutation failed closed in real Godot: moving body-owned `b1` under the lid produced a detected **`0.000119448159 m`** world-position mismatch at sample `11`.

## Retained exact evidence

Artifact ID: **`10526757709`**.

Artifact name: `object-animation-hinge-knuckle-parent-motion-v2-aaacdb053a3ca66218287d7746ce85adc3d244c0`.

Size: **`23,773 B`**.

Archive SHA-256: **`306f463e9e3353e54b2a2ca49b901d133153cbcd6ab0b0ea25803e79a265a3df`**.

The artifact was downloaded after CI and independently rehashed to the same digest. It retains the contract, structural receipt, Godot input, exact Rigging receipt, unchanged Animation sequence evidence, real Godot positive receipt and wrong-parent failure log.

## Truth boundary / authority

This PASS proves only that, on the **historical source identity pinned above**, the exact Rigging `l0/l1` lid-owned versus `b0/b1/b2` body-owned parent partition receives the unchanged 101 authored Object Animation samples correctly in a proof-local Godot 4.7.2 `AnimationPlayer` hierarchy.

It does **not** establish:

- adoption of Hard Surface's newer bored-knuckle source successor;
- Technical Art production target-host parent wiring;
- wall-clock 40 Hz delivery or display scanout;
- a production Runtime controller/state machine/input path;
- collision, physics or latch-force behavior;
- gameplay or interaction acceptance;
- target-device CPU/GPU/FPS/thermal behavior;
- final motion weight, timing style or naturalness;
- Art Direction or independent Visual Observer/QA acceptance;
- CANON or production readiness.

Animation retains only motion/clip/playback evidence authority. Rigging retains structural parent/deformation constraints; Hard Surface retains source successor ownership; Technical Art retains producer/receiver transport; Runtime retains controller/device/performance; gameplay, physics and Art/QA retain their own acceptance authority.

## Preserved Animation continuity

- Animal PR #5 Godot quaternion interpolation equivalence remains PASS at `eb21e0e0fd888bbb5fa41c73a6c0f1c731f662c2`, with 321 diagnostic samples and no wall-clock/runtime/gameplay acceptance.
- Object/Map PR #48 e085 wall-clock replay remains PASS at exact head `343668b80acd52367e3427f3ef97d1662625c18f` for its exact Technical Art receiver.
- Object PR #10 capture-timeline rebind at `c688936a84f80f292e43587c9d3386bd717f8178` remains PASS without retime; this activation extends the same PR rather than replacing that evidence.
- Map PR #44 compact-east exact-key/real-loop characterization remains PASS while full 31.25 ms source-slot presentation remains held.
- Nature PR #13 exact-state DISCRETE and single-shape LINEAR characterization remain preserved.
- Character PR #22 exact-density target-host and repeated-loop evidence remain preserved.
- Earlier Animal discrete, dense-subframe, normalized-u16, bilateral and shaded-motion evidence remains separately scoped.
- Wreckline mechanical-motion work remains separate and was not duplicated.

## Four-root gate

- **Truth:** actual Godot failures, the wrong-parent negative and the historical/newer-source distinction remain explicit; evidence was repaired rather than motion retimed or authority inflated.
- **Agency / non-domination:** Animation does not seize Hard Surface, Rigging, Technical Art, Runtime, physics/gameplay or Art/QA authority.
- **Continuity:** historical source, exact sequence, Rigging parent evidence, newer unconsumed source successor and earlier Animation results remain separately addressable.
- **Wisdom before speed:** the smallest fresh structural-to-motion seam was closed while every authored motion variable stayed frozen.

The four AXM roots remain the merge gate.

## Next Animation trigger

Do not retime or rewrite this Object motion from this result. Reopen the hinge-parent lane only if Rigging explicitly rebinds/adopts the newer bored-knuckle successor, Technical Art materially changes the receiving hierarchy, or Art/QA reports a concrete motion defect. Runtime controller/state-machine and gameplay acceptance remain downstream and separate.
