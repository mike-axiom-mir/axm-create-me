# 07 — 3D Animation & Motion Specialist Status

Date: 2026-09-16
State: **TARGET_HOST_ANIMATIONPLAYER_PROOF_IMPLEMENTED / EXACT-HEAD CI QUEUED / PRIOR ORDERED LATCH+LID CHOREOGRAPHY PASS PRESERVED / CONTROLLER + WALL-CLOCK + GAMEPLAY + PHYSICAL-LATCH + FINAL-MOTION HOLD**

## Current activation

A fresh constellation scan found one stronger Animation-owned receiving handoff than another timing retune:

- **Weapon / Armor / Unit / Misc:** still no accepted animation-ready source/rig handoff; no motion invented.
- **Character:** current work remains Organic / Geometry / Art Direction preparation; there is still no accepted Character rig to animate.
- **Animal:** PR #5 already owns the sampled articulation pulse, while the connected-forelimb Geometry / Rigging / Organic candidates are still under perceptual review. Animation does not silently transfer the old disconnected-topology pulse onto an unaccepted mesh.
- **Building:** no accepted motion rig.
- **Nature / Weather / Map:** current dynamic work remains in Environment / VFX / Runtime ownership.
- **Object:** Animation PR #10 owns the exact 101-sample latch-release -> unchanged lid clip -> latch-reengage sequence. Technical Art PR #16 has now separately proven that the exact Object rigid hierarchy survives the neutral UC scene-graph transport into Godot 4.7.2, and explicitly handed `AnimationPlayer` / clip application back to Animation.
- **Hard Surface:** new PR #17 proposes source-owning the previously Rigging-derived latch pivot interface, but its exact workflows are still queued. This activation deliberately does **not** consume or pre-approve that candidate; it remains bound to the last green Hard-Surface #14 + Rigging #15 identities already used by the Animation sequence.
- **UC / Profession Fabric:** no new animation abstraction is introduced. The reusable UC contribution remains the existing domain-neutral rigid scene graph; Object timing and latch/lid meaning remain Object-owned.

That makes the highest-leverage bounded Animation question:

> Can the already-proven exact 101 authored samples be carried into a real Godot `AnimationPlayer` over the exact Technical Art rigid-scene donor, seek selected authored samples without transform drift, visibly move the intended rigid parts, and return to neutral — while still making no wall-clock, controller, state-machine, physics or gameplay claim?

`axm-create-me` remains coordination-only. Implementation is confined to `mike-axiom-mir/axm-object-design` PR #10.

## Reused lane / no duplication

Repository: `mike-axiom-mir/axm-object-design`

Existing draft PR reused: **#10 — Animation: prove bounded equipment-case lid open-hold-close clip**

Branch: `studio/animation-object-lid-open-close-001`

Current exact Animation candidate head after this activation:

**`1ae19588be2444a4a34cd0eb4cfa9906a004ab24`**

PR state observed: **OPEN / DRAFT / MERGEABLE**.

No second Object Animation PR was opened.

## Exact green dependencies retained

### Existing Animation sequence

The previous exact verified Animation result remains the authority until the new target-host workflow completes:

- exact prior Animation head: `13069d6b6180e5d9e07009f6a263375ca16ddb60`;
- result: `PASS_ORDERED_LATCH_RELEASE_LID_CLIP_REENGAGE_SEQUENCE`;
- asset: `modular-equipment-case-001`;
- host source SHA-256: `49b1f9ed9865893d6de6f1ec8f069576732df694853fde4e3fcff366de32644a`;
- exact base lid clip digest: `9e149195ab315f83f2d6f7d76f374f4be245567f77402de3e8a1d40ab79ef340`;
- exact sequence-contract digest: `0a3523cf792264f610881552fd2ebd438aabdfd05e30e92af9dbb33ded1fa2d3`;
- exact complete 101-sample geometry-sequence digest: `f94e2b884b0f383b7147de2307b05d4bb35faa3a0660ea2cf58ce0d6a001709e`;
- `40 Hz`, `2.5 s`, `101` endpoint-inclusive samples, `100` repeated-visible samples;
- all `81 / 81` original lid samples copied exactly, with `0` retimed and `0` retargeted;
- exact neutral endpoint closure `0.0 m`.

Retained prior artifact:

- artifact ID `10440345209`;
- archive SHA-256 `02bd6e5c7c62e799f0ccb65ac6f4d5d0e4cf381ba206d0a3f65164641a6f9686`.

### Hard-Surface / Rigging identities still consumed

- Hard-Surface ownership donor: PR #14 head `d3fa10a270faae7925811f44f03381fe5c5d0215`;
- ownership contract SHA-256 `0702e4180f858d29c42ff8c38a61eaa16278d6848c8ce6f3ecfae172969ca8ae`;
- Rigging latch donor: PR #15 head `3b667ff5d30c46ec2fe7da7679518970f8610018`;
- Rigging articulation-plan SHA-256 `81c27ab7b73ed9a43cb3f554b56c3f4294b893712075e33d13f5b02e008455db`;
- exact Rigging result `PASS_BOUNDED_FRONT_LATCH_LEVER_ARTICULATION`;
- exact `0..50°` review envelope and retained `48.66480246428277°` keeper-Z separation threshold remain review-only kinematic evidence.

Hard-Surface PR #17 head `6086f39a3da344c57a68653f90d040e03e04cec2` is **not** consumed because its workflows remain queued. If it later receives a green exact-head result and becomes the accepted source identity, Animation must explicitly rebind rather than silently treating the old Rigging-derived pivot as equivalent.

### Technical Art / UC target-host donor

Technical Art PR #16 exact donor:

**`965fb2f24dbd0b0cbb748d9f8b8712d62966315f`**

Its completed proof establishes:

- `PASS_OBJECT_SOURCE_OWNED_RIGID_PARTS_THROUGH_UC_SCENE_GRAPH`;
- exact source-owned keepers imported as direct `lid_shell` children;
- lower latch levers remain outside the lid subtree;
- exact rebound GLB geometry payload preserved;
- Godot 4.7.2 `GLTFDocument` import works on the exact rebound GLB.

Exact UC rigid-scene donor:

**`6dc465987e01362264f88b7cef4213609ae50763`**

Animation consumes this as transport evidence only. It does not move Object semantics into UC.

## Bounded target-host Animation improvement

Added inside existing Object Animation PR #10:

- `animation-proof/project.godot`;
- `animation-proof/observe_animationplayer.gd`;
- `.github/workflows/object-animation-target-host.yml`.

New proof contract:

`axm.object-animationplayer-target-proof/v0.1`

The workflow is designed to rebuild every dependency instead of trusting stale artifacts:

1. check out the exact current Animation PR head;
2. check out exact Technical Art PR #16 head `965fb2...`;
3. check out exact UC rigid-scene candidate `6dc465...`;
4. run the complete Object Python suite under 3.11 and 3.13;
5. rebuild the Technical Art Object -> UC rigid-scene GLB from those exact donors;
6. rebuild the exact source-owned lid clip;
7. rebuild exact Rigging #15 latch articulation receipt from exact Hard-Surface #14 ownership + Rigging plan;
8. rebuild the exact 101-sample Animation sequence on the current Animation head;
9. import the exact rebound GLB into pinned Godot 4.7.2 GL Compatibility;
10. create one proof-local `AnimationPlayer` with three value tracks: lid plus two bilateral latch pivot wrappers;
11. insert all **101 exact authored samples** into each track using `UPDATE_DISCRETE` + `INTERPOLATION_NEAREST`;
12. seek ten exact phase samples (`0,5,10,25,40,50,60,90,95,100`), compare target transforms against the authored sequence, capture direct renders, and verify exact neutral return.

The latch wrappers use the exact Rigging receipt pivots only. They are proof-local target-host nodes; Animation does not claim to own the source mechanical pivot contract.

Because Object source space `[x,y,z]` is transported to UC/glTF `[x,z,y]`, the coordinate transform is handedness-flipping. The proof therefore binds target +X rotation to the negative of the retained source mathematical +X rotation instead of assuming identical sign conventions.

## Intended target-host gates

The new Godot proof fails closed unless all of the following are observed on the exact run:

- exact Technical Art rebound GLB SHA matches its rebuilt receipt;
- exact current Animation sequence identity matches the current PR head;
- exact Technical Art donor head and UC donor head match the pinned identities;
- imported keepers remain direct `lid_shell` children before proof-local latch wrappers are added;
- all three `AnimationPlayer` tracks contain exactly `101` keys;
- all three tracks use discrete authored-sample updates with nearest interpolation;
- selected authored seeks reproduce lid/latch target transforms within `1e-5°`;
- at release-complete sample `10`, the lid/keepers remain neutral while both levers move materially;
- at peak sample `40`, both lid-owned keepers move materially with the lid;
- at endpoint sample `100`, keeper and lever mesh centers return to neutral within `1e-6 m`;
- closed -> release-complete and closed -> peak retained frames differ materially;
- closed -> endpoint retained render returns within the tiny bounded pixel tolerance;
- ten exact target-host PNGs are retained with the target receipt.

This is deliberately a **sampled-seek target-host proof**, not a playback scheduler proof.

## Current exact-head verification state

New exact Animation head:

**`1ae19588be2444a4a34cd0eb4cfa9906a004ab24`**

New target-host workflow:

**`35085574196 — Object AnimationPlayer target-host evidence`**

Observed current state:

**QUEUED / no conclusion yet**.

The existing Object animation workflow and inherited Object workflows on this same head are also queued in the current runner backlog. Therefore this activation does **not** promote a new PASS, does **not** invent an artifact ID, and does **not** claim the GDScript path executed successfully yet.

Current truthful result:

**`TARGET_HOST_ANIMATIONPLAYER_PROOF_IMPLEMENTED / EXACT-HEAD CI QUEUED`**

The last completed Animation PASS remains the exact prior 101-sample source-space choreography at head `13069d6...` until CI proves or rejects this new target-host layer.

## Truth boundary / non-claims

Even if the queued workflow passes, the intended new claim is only:

> the exact current Object 101-sample choreography can be represented as a proof-local discrete Godot `AnimationPlayer` resource over the exact UC rigid-scene target, and exact authored sample seeks reproduce the intended rigid target transforms and neutral closure in retained target-host renders.

It does **not** establish:

- wall-clock `40 Hz` playback pacing;
- interpolation quality between authored samples;
- a runtime controller, state machine, input handling or interaction logic;
- gameplay timing/usability or gameplay acceptance;
- physical latch hook/catch/retention behavior;
- force, spring, friction, collision, tolerance or engineering behavior;
- source adoption of Hard-Surface PR #17 while it remains unverified;
- final motion timing, weight, personality, anticipation, overshoot or secondary motion;
- final Materials / Art Direction / Visual QA acceptance;
- target-device FPS/GPU/VRAM/performance acceptance;
- a generic UC animation system;
- Profession Fabric promotion;
- CANON, production readiness, game readiness or Animation mastery.

## Four-root gate

- **Truth:** the new target-host layer is explicitly HOLD until exact-head CI executes. Prior completed Animation evidence remains the authority; queued code is not relabelled evidence.
- **Agency / non-domination:** Hard Surface retains mechanical/source authority; Rigging retains articulation evidence; Technical Art / UC retain transport authority; Animation owns only clip/sample choreography; Runtime/controller/gameplay and Art Direction / QA remain separate authorities.
- **Continuity:** existing PR #10 is extended instead of duplicated. Exact prior PASS, donor heads, source digest and retained artifact remain preserved. New proof is additive and rollbackable.
- **Wisdom before speed:** no retime, new motion style, controller, state machine, physics latch or UC animation abstraction was added. The smallest unresolved target-host gap was isolated and instrumented.

## Handoffs

- **Technical Art / UC — Object PR #16 / UC #157:** Animation now consumes the exact proven rigid-scene donor as a target-host surface. If its node identity or UC contract changes, the new target proof must rebind explicitly.
- **Hard Surface — Object PR #17:** do not treat Animation's existing Rigging-derived pivot usage as source adoption. Once #17 has exact green evidence and normal review accepts it, hand the exact source-owned pivot identity back to Animation for a rebind.
- **Rigging — Object PR #15:** target-host latch wrappers remain bound to your exact retained pivots and review-only envelope; Animation does not reinterpret them as physical joints.
- **Runtime / Optimization — Object PR #13:** this target-host proof deliberately creates an `AnimationPlayer` resource but no controller and no wall-clock performance claim. Runtime's resource-lifetime evidence remains separate.
- **Visual Observer / QA:** if the target-host workflow passes, inspect the ten exact retained Godot frames for a sign/convention mistake, discontinuity or implausible mechanical read before any final-motion claim.
- **3D Art Director:** the authored timing remains unchanged; do not infer timing approval from target-host transport success.

## Next gate

1. Let exact workflow `35085574196` decide whether the target-host proof really runs.
2. If FAIL: repair only the concrete target-host defect and preserve the prior green 101-sample source-space sequence.
3. If PASS: independently inspect retained target-host frames before promoting visual/motion acceptance.
4. If Hard-Surface #17 later becomes the accepted pivot source, explicitly rebind this target proof before further promotion.
