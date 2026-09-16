# 07 — 3D Animation & Motion Specialist Status

Date: 2026-09-16
State: **ACTIVE / REAL MOTION EVIDENCE PASS / STACKED DRAFT PR OPEN**

## Bounded claim

The first useful Animation / Motion move was not another abstract animation framework. The constellation already exposed one real mechanical candidate with exact geometry, a real mount, a working proof host and an explicitly untested motion gap: Wreckline Hero Vehicle 001 + the generated `harpoon-launcher-mk1` in `mike-axiom-mir/axm-wreckline` PR #3.

This activation added one bounded **socket-local aim → fire/recoil → recover → neutral motion proof** over the actual generated harpoon geometry in Godot 4.7.2. The exact workflow passed and retained transform + rendered-frame evidence. This is proof-host motion evidence only, not production animation acceptance.

## Coordination / overlap scan

Read before work:
- `studio/3D_STUDIO_CAMPAIGN.md`
- `studio/specialists/07_animation_motion.md`
- status packets 01–06, including the newly available Rigging / Deformation status
- current open PRs across Wreckline, animal-design and Universal Creation

Relevant live lanes:
- `axm-wreckline` #2 owns the hero-vehicle vertical slice and existing `AssemblyMotion` body animation.
- `axm-wreckline` #3 owns the 3D specialist proof host, semantic-socket repair, actual UC module generation/live swap and current material evidence. It explicitly left module yaw/pitch/recoil/deploy `NOT_TESTED`.
- `axm-animal-design` #1 owns the quadruped form source.
- `axm-animal-design` #2 owns the first bounded rig/deformation probe. Exact head `565eb33ea557299036a59c788eda18bc1315ed86` passed CI and hands timing/arcs/motion to this role, while explicitly withholding perceptual deformation, locomotion and runtime claims.
- UC #133 owns mesh topology evidence; UC #134 owns static attachment-frame evidence; neither owns moving module timing.

A final semantic-overlap scan found no competing module-motion or organic-animation lane. Wreckline #4 is the only new lane for this exact problem.

## Why Wreckline was selected before quadruped animation

The quadruped is now structurally rig-probed, so it has become a valid future Animation input. It still lacks Visual Observer evidence for the ±60° elbow/knee deformation and does not yet have an exported/runtime rig artifact. Creating a gait now would risk animating around an unreviewed deformation body.

Wreckline already had:
- exact retained source identity;
- a real Godot proof host;
- a derived semantic roof socket that inherits vehicle motion;
- actual deterministic harpoon geometry;
- live mount/swap evidence;
- an explicit module-motion gap.

That made one real mechanical motion proof the higher-evidence first animation task.

## Implemented delta

Repository:
`mike-axiom-mir/axm-wreckline`

Stacked draft PR:
**#4 — `Animation: prove bounded harpoon aim-fire-recover motion`**

Branch:
`studio/animation-harpoon-motion-001`

Branch cut point:
`81a04cdcb09a7f6ea3301ae5a2b38e5e34922a4c` from Wreckline #3.

While this lane was running, Wreckline #3 independently advanced to:
`8056e884a545770e173ad59a8ff5e997be4ad6c6`

GitHub tested the current stacked composition as merge ref:
`2dd988f24fbea35231966abb92a18f0471b8542b`

Exact animation head:
`f4e33fd5da61605bd956f6fdcb5a4781c0f5878d`

Files added:
- `native/specialist-proof/module_motion_observe.gd`
- `.github/workflows/hero-module-motion-evidence.yml`

No retained vehicle/module GLB is rewritten. The lane wraps the exact derived roof socket with proof-host yaw / pitch / recoil transform pivots and removes the module after observation.

## Motion authored

Motion ID:
`harpoon-aim-fire-recover-proof-v0.1`

Curve:
- piecewise smoothstep;
- 1.20 seconds;
- neutral start;
- bounded aim;
- short recoil impulse;
- recovery;
- exact neutral return.

Authored maxima:
- yaw: **18°**;
- pitch: **7°**;
- recoil: **0.16 m**.

Existing harpoon contract ceilings:
- yaw: **180°**;
- pitch: **55°**;
- recoil: **0.22 m**.

The proof therefore stays inside the pre-existing module contract rather than silently widening it.

## Exact source identity

Original Wreckline source vehicle remains verified before derivation as:
`7cf93c3dd80ab3952a6e8ce82accdd3c76bbc46a8aa631f642e108ceded2930e`

Derived semantic-socket vehicle observed by this lane:
`dbd5f71086849e1f941010cb3f61c360c560a840728d4f4cb8b7413c3e93b7fc`

Actual generated harpoon observed by this lane:
`5163d76b4d2cf093e5efc1d7952fb88d1e55e0ca29d7d9966f8ad87ffa6e601a`

The module is rebuilt through pinned public UC commit:
`e2016cf30b8f7b409137d138abed91dfcc885f60`

## Exact evidence

GitHub Actions on the exact animation head:
- `tests` run **35044412150** — **SUCCESS**
- inherited `Hero specialist runtime evidence` run **35044412131** — **SUCCESS**
- new `Hero module motion evidence` run **35044412163** — **SUCCESS**

New motion state:
`PASS_SOCKET_LOCAL_MOTION_PROOF_HOST`

The full curve was exercised through real Godot `Node3D` transforms at **61 authored-time samples / 0.02 s intervals**.

Measured transform evidence:
- changing transitions: **47 / 60**;
- max 0.02 s yaw step: **1.678711°**;
- max 0.02 s pitch step: **0.663923°**;
- max 0.02 s recoil step: **0.077037 m**;
- max requested-vs-Godot transform readback error: **7.69e-7**;
- neutral-return error: **0.0**.

Rendered comparison evidence over **135,000 sampled pixels** per pair:
- neutral → aim: **1,028 changed / 0.7615%**;
- aim → recoil: **868 changed / 0.6430%**;
- neutral → recovered: **0 changed / 0.0%**.

The module detached after the proof.

Retained Actions artifact:
`wreckline-harpoon-motion-2dd988f24fbea35231966abb92a18f0471b8542b`

Artifact ID:
`10426557139`

Artifact ZIP digest:
`sha256:29d37d05b6ed5ee2eca8141a37467717b71ed5456bfce5df27bc26ca8863184c`

It retains:
- exact motion JSON receipt;
- neutral PNG;
- aim PNG;
- recoil PNG;
- recovered PNG;
- exact harpoon build receipt;
- exact socket-repair build receipt.

Godot emitted proof-host shutdown resource-leak warnings after the PASS receipt. The workflow completed successfully, but these warnings remain explicit and are **not** target-runtime performance/resource-lifecycle acceptance.

## Visual evidence boundary

The PNGs exist and machine pixel comparison proves that aim and recoil produced visible rendered differences and the neutral roundtrip returned pixel-identically in this fixed setup.

This activation did **not** perform a human/perceptual animation-quality judgment of weight, recoil feel, arcs or polish. Therefore:

- rendered pose delta: **OBSERVED / MEASURED**;
- animation aesthetic quality: **NOT TESTED / NOT ACCEPTED**;
- Art Director acceptance: **NOT TESTED**.

## Non-claims

This does not establish:
- production articulation separating harpoon base, turntable, launcher and recoil assembly;
- an authored/exported GLB animation clip;
- production animation timing, weight, anticipation, follow-through or recoil feel;
- gameplay firing/hit behavior;
- input or controller/state-machine integration;
- final/native Wreckline runtime acceptance;
- target-device performance or clean resource lifecycle;
- module production-art acceptance;
- animation mastery;
- Profession Fabric promotion.

The current proof moves the whole module through proof-host pivots. That is deliberately a **motion-method proof**, not a claim that the module's final production rig should move as one rigid block.

## Root gate

- **Truth:** exact source/module/derived identities, measured transforms, rendered deltas and non-claims remain explicit.
- **Agency / non-domination:** this lane does not absorb Rigging, Gameplay, Art Direction or runtime-controller authority.
- **Continuity:** work is stacked on the live Wreckline evidence lane and preserves historical source failures/repairs instead of rewriting them.
- **Wisdom before speed:** one real motion gap was proven on one real asset instead of creating a studio-wide animation abstraction before transfer evidence exists.

## Handoffs

- **Visual Observer / QA:** inspect the retained neutral/aim/recoil/recovered frames and, if useful, the motion receipt. Pixel difference is not perceptual animation acceptance. Challenge whether aim/recoil actually reads coherently.
- **Art Director:** judge whether the motion hierarchy communicates function clearly; current whole-module pivoting is a proof method, not final articulation.
- **Hard Surface:** production geometry should eventually separate turntable / launcher / recoil-moving mass if the motion proof is retained as direction.
- **Rigging / Deformation:** quadruped PR #2 is now structurally ready for Animation consumption, but its representative deformations should receive visual review before a gait is authored.
- **Technical Art / UC Integration:** do not promote this proof-host motion wrapper into UC yet. First require either an authored/exported clip path or a second materially different domain using the same motion contract.
- **Runtime / Optimization:** Godot shutdown leak warnings are visible evidence but not yet diagnosed; target budget/performance remains outside this lane.
- **Capability Cartographer:** record the possible reusable pattern only as a candidate: exact asset identity + declared motion ceilings + timed curve + runtime transform readback + visible state deltas + neutral return. One mechanical asset is not enough for shared-canon placement.

## Next Animation pass

1. Read Wreckline #4 exact state and Visual Observer / Art Director response first.
2. If the current rigid-module motion looks structurally wrong, do **not** tune timing around bad geometry; hand back the articulation requirement to Hard Surface / Rigging.
3. If the proof survives visual review, the next meaningful mechanical step is an authored/exported module clip or separated articulation proof, not another wrapper abstraction.
4. In parallel, once the quadruped deformation receives visual acceptance, use the exact animal-design rig probe to author one deliberately bounded organic motion study (for example a stance-weight-shift or single-step cycle) before claiming locomotion/gait competence.
5. Do not build a studio-wide animation framework until at least these materially different mechanical + organic contexts expose what actually transfers.
