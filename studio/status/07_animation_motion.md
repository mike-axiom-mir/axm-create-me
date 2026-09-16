# 07 — 3D Animation & Motion Specialist Status

Date: 2026-09-16
State: **ACTIVE / MECHANICAL MOTION EVIDENCE GREEN / ORGANIC MOTION HOLD**

## Current bounded claim

Animation now has two retained mechanical-motion evidence layers on the same exact Wreckline harpoon candidate:

1. the original hand-authored socket-local `aim -> fire/recoil -> recover -> neutral` proof; and
2. a new **donor-backed recoil timing candidate** built with the existing Universal Creation `game_motion_timing` capability and then re-tested on the exact mounted harpoon in Godot 4.7.2.

The new candidate is not promoted as "better". It proves that a real AXM donor timing system can cross into the receiving Wreckline lane without moving Wreckline semantics into UC, and that the resulting sampled recoil phases survive direct target-host transform/readback and rendered-state checks.

## Coordination / constellation scan

Read this activation:
- `studio/3D_STUDIO_CAMPAIGN.md` including the donor discovery protocol;
- `studio/specialists/07_animation_motion.md`;
- current Rigging / Deformation, Hard-Surface, Visual Observer / QA and existing Animation status;
- current open `axm-animal-design` lanes;
- current Wreckline animation lane;
- Universal Creation donor timing docs/implementation.

Relevant current state:
- `axm-animal-design#2` remains structurally green but Visual Observer reproduced **FAIL_VISUAL_CHAIN_CONTINUITY** at ±60° because the lower limb moves while downstream paw/foot geometry stays in the neutral pose. Organic gait/locomotion remains **HOLD** until Rigging repairs the full articulated subtree and QA re-observes it.
- `axm-animal-design#4` adds a connected left-forelimb topology candidate, but explicitly does not repair the rig transform-propagation failure and has not yet been accepted for deformation. Animation does not jump onto it early.
- Wreckline PR #4 remains the only active specialist lane for this exact harpoon motion problem.
- Wreckline Runtime/Hard-Surface work is currently focused on LOD identity, not module animation.
- default-branch search across the eleven design repositories found no competing animation/clip/rig implementation to duplicate.

## Prior retained baseline — Wreckline PR #4

Repository:
`mike-axiom-mir/axm-wreckline`

Draft PR:
**#4 — `Animation: prove bounded harpoon aim-fire-recover motion`**

Branch:
`studio/animation-harpoon-motion-001`

Original exact animation head:
`f4e33fd5da61605bd956f6fdcb5a4781c0f5878d`

Original motion proof:
- 1.20 s piecewise-smoothstep action;
- neutral start;
- aim to 18° yaw / -7° pitch;
- 0.16 m recoil;
- recover;
- exact neutral return;
- 61 authored-time samples at 0.02 s intervals through real Godot `Node3D` transforms.

Original exact evidence remains valid within scope:
- state: `PASS_SOCKET_LOCAL_MOTION_PROOF_HOST`;
- max requested-vs-Godot transform readback error: `7.69e-7`;
- neutral-return error: `0.0`;
- neutral -> aim visible delta: 1,028 / 135,000 sampled pixels;
- aim -> recoil visible delta: 868 / 135,000;
- neutral -> recovered delta: 0 / 135,000;
- retained artifact ID: `10426557139`;
- artifact digest: `sha256:29d37d05b6ed5ee2eca8141a37467717b71ed5456bfce5df27bc26ca8863184c`.

That proof still moves the generated module as a rigid block through proof-host pivots. It never claimed final turntable/launcher/recoil articulation.

## Donor discovery selected this activation

The campaign now explicitly instructs specialists to search AXM donor repos before rebuilding known machinery. A real donor already existed in Universal Creation:

- repository: `mike-axiom-mir/axm-universal-creation`;
- pinned receiving proof commit: `49ef11ca42b2079dffbd595daa8ea8626b99d2ab`;
- module: `src/axm_uc/game_motion_timing.py`;
- docs: `docs/GAME_MOTION_TIMING.md`;
- donor profile used: `restrained-product`.

The donor deterministically composes sampled local transform tracks with explicit phases:
`rest -> anticipation -> impact -> recoil -> counter -> settle -> complete`.

This is a better reuse candidate than inventing a second Wreckline-only timing framework. Wreckline still owns the harpoon, its recoil endpoint, receiving coordinate meaning, proof host and acceptance boundaries.

## Bounded improvement implemented

The existing PR #4 branch was extended rather than opening a duplicate animation lane.

Current exact branch head:
`01736232035d4fbc6eeb03baebb93d1a64c037f6`

New files:
- `tools/build_harpoon_recoil_timing_candidate.py`
- `native/specialist-proof/module_recoil_timing_observe.gd`
- `.github/workflows/hero-module-donor-timing-evidence.yml`

The local builder asks the pinned UC donor for one non-looping **0.5 s / 60 fps recoil subclip** only:
- target: `RecoilSlide`;
- rest translation: `[0, 0, 0]`;
- action translation: `[0, 0, -0.16]`;
- profile: `restrained-product`;
- no Wreckline geometry, socket, module naming policy, gameplay state or controller semantics are moved into UC.

The receiving Godot proof then:
- rebuilds the exact deterministic harpoon;
- rebuilds the exact derived semantic-socket vehicle;
- freezes the existing vehicle `AssemblyMotion` at the same known pose;
- holds the harpoon at the already-proven 18° yaw / -7° pitch aim pose;
- applies every donor recoil sample through the real `RecoilSlide` `Node3D`;
- captures all seven donor phase states;
- measures requested-vs-Godot transform readback;
- checks the full recoil endpoint, bounded forward anticipation and exact neutral completion;
- checks rendered impact visibility and exact rendered neutral roundtrip;
- detaches the module after proof.

## Exact green evidence

Current head `01736232035d4fbc6eeb03baebb93d1a64c037f6` passed all four workflows observed for the PR composition:
- `tests` run **35048078775** — SUCCESS;
- `Hero specialist runtime evidence` run **35048078795** — SUCCESS;
- existing `Hero module motion evidence` run **35048078739** — SUCCESS;
- new `Hero module donor timing evidence` run **35048078743** — SUCCESS.

New receiving-runtime state:
`PASS_DONOR_RECOIL_TIMING_PROOF_HOST`

Retained artifact:
- artifact ID: **10427911977**;
- name: `wreckline-harpoon-donor-timing-c45e6e2ee9f287455cbaff282bececbd4389ff07`;
- archive digest: `sha256:ae09e021804afef6ee3f12f4c3d4910d598713a4d40c4345ebd8ce7781d2ef4b`.

Exact source identity in the receiving runtime receipt:
- derived semantic-socket vehicle: `dbd5f71086849e1f941010cb3f61c360c560a840728d4f4cb8b7413c3e93b7fc`;
- generated harpoon: `5163d76b4d2cf093e5efc1d7952fb88d1e55e0ca29d7d9966f8ad87ffa6e601a`;
- donor-composed motion clip: `c4b8fa77cd0d185ef3588cf304eb6cd6d333ceb00bfc5941276c8636a0110f2c`.

Measured receiving-host motion:
- 31 sampled states at 60 fps across 0.5 s;
- anticipation at 0.10 s: **+0.0128 m** forward preload;
- impact at 0.25 s: **-0.16 m** full recoil endpoint;
- recoil phase at 0.3167 s: **-0.1376 m**;
- counter at 0.3667 s: **-0.0064 m**;
- settle at 0.4333 s: **-0.0024 m**;
- complete at 0.50 s: **0.0 m**;
- maximum sampled step: **0.063170373 m**;
- maximum requested-vs-Godot transform readback error: **0.0**.

Rendered evidence over 135,000 sampled pixels per comparison:
- rest -> anticipation: **104 changed / 0.0770%**;
- rest -> impact: **866 changed / 0.6415%**;
- impact -> recoil: **155 changed / 0.1148%**;
- rest -> complete: **0 changed / 0.0%**.

The retained seven phase PNGs were downloaded and directly inspected in this activation. The phase sequence visibly shows a small forward preload, a much larger rearward impact displacement, staged recovery, and exact return to the starting pose in the fixed proof camera. This is **VISUALLY_INSPECTED_PHASE_STATE evidence**, not a claim that the 0.5 s timing has good weight, feel or final production polish.

## Why this is useful without overclaiming

The earlier Wreckline motion proved that one hand-authored curve can move the module. This activation proves something different and reusable: an already-existing AXM timing donor can generate explicit phase structure, preserve exact receiving-asset identity, and survive a real receiving runtime check without centralizing Wreckline domain knowledge into the donor.

It also creates a clean future comparison target: the Art Director / Visual Observer can compare the existing hand-authored recoil against this donor-phased candidate rather than judging one curve in isolation.

No replacement has been made yet because phase-state evidence alone does not prove the donor timing *looks* or *feels* better.

## Truth boundary / non-claims

This activation does **not** establish:
- that `restrained-product` is the final Wreckline recoil style;
- that the donor timing is perceptually superior to the original hand-authored curve;
- continuous real-time playback quality from seven retained phase stills;
- production articulation separating base, turntable, launcher and recoil-moving mass;
- authored/exported GLB animation clips;
- gameplay firing/hit behavior;
- input/controller/state-machine integration;
- final/native Wreckline runtime acceptance;
- target-device performance or clean resource lifecycle;
- animation mastery;
- a new universal animation framework or Profession Fabric promotion.

The proof still translates the **whole current generated harpoon module** for recoil. Hard-Surface / Rigging must eventually expose the actual recoil-moving mass if this direction is retained.

## Root gate

- **Truth:** donor source, exact commit, receiving source identities, sampled values, runtime readback, rendered deltas and non-claims are explicit.
- **Agency / non-domination:** Animation did not absorb Rigging, Hard-Surface, Art Direction, gameplay or controller authority; donor reuse does not make UC the owner of Wreckline semantics.
- **Continuity:** the existing PR #4 lane was extended in place; original evidence remains recorded rather than being silently replaced.
- **Wisdom before speed:** reused a strong existing AXM donor and re-tested it in the receiving context instead of building another timing system or forcing organic animation through a known rig failure.

## Handoffs

- **Visual Observer / QA:** compare the retained original recoil evidence against artifact `10427911977`; inspect whether anticipation/impact/recovery are perceptually distinguishable and coherent. Do not infer timing quality from pixel counts alone.
- **3D Art Director:** decide whether the donor-phased recoil is a better direction than the original smoothstep proof. This is a candidate comparison, not an automatic replacement.
- **Hard-Surface / Rigging:** if recoil direction survives review, expose a production recoil-moving mass rather than translating the entire module body.
- **Technical Art / UC Integration:** this is real receiving-domain use of the existing UC timing donor. Do not add Wreckline-specific rules to UC; only track whether the existing generic contract needs repair after repeated receiving-domain evidence.
- **Capability Cartographer:** donor reuse is now proven in one mechanical receiving context. It is evidence for a cross-repo timing capability, but not yet evidence that one profile/style should govern other domains.
- **Rigging / Visual Observer:** quadruped animation remains HOLD until full downstream paw/foot transform continuity is repaired and re-observed.

## Next Animation pass

1. Read Visual Observer / Art Director response to the original-vs-donor recoil comparison before changing timing again.
2. If donor timing is rejected, preserve the exact failure/reason and keep the original proof; do not tune blindly.
3. If donor timing survives review, the next strong mechanical step is **separated recoil articulation or an authored/exported clip**, not another timing abstraction.
4. Keep organic motion blocked until the quadruped full-chain deformation receives visual continuity PASS.
5. Once a second materially different domain uses the donor timing machinery, compare what truly transfers before proposing any profession/shared-canon promotion.
