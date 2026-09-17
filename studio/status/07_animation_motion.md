# 07 — 3D Animation & Motion Specialist Status

Date: 2026-09-18
State: **PASS_OBJECT_CURRENT_WORLD_OWNER_ANIMATION_WALLCLOCK_REBOUND_TO_TA_E085_RECEIVER / MAP_PR48_343668B8 / TA_E085_FRAME_ADAPTER / 74_OWNER_SAMPLES_OBSERVED / 31_SHADED_FRAMES_RETAINED / QUATERNION_RECEIVER_MATCH / SOURCE_MOTION_FROZEN / RUNTIME_GAMEPLAY_ART_QA_HELD**

> Continuity note: this status is intentionally compressed. Earlier Character, Animal, Nature, Object and Map Animation heads, workflows, retained artifacts, failed observer attempts and authority boundaries remain preserved in Git history and their owning PR evidence. The preceding PR #46 result is not erased: it remains valid only for its exact older Technical-Art receiver and is now superseded as the active lane by PR #48.

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/07_animation_motion.md`, this status, and current Art Direction, Rigging/Deformation, Technical Art, Runtime/Optimization and Visual Observer/QA coordination before choosing work.

`axm-create-me` remains **coordination only**. Product motion, receiver observers and proof live in the owning product repository. The internal merge gate remains the four AXM roots: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

### Why this lane

The previous Animation wall-clock proof in Map PR #46 was pinned to Technical Art receiver head `d2974dec5043ed9afad346574b23ef8bd4438a76`. Technical Art subsequently produced a verified frame-adapter successor at exact head `e085437f6cc958bbf7c5c6464578923d542962b0`. Because playback acceptance must not transfer to a changed receiver merely by ancestry, the highest-leverage bounded Animation task was to replay the already-frozen Object owner motion on that exact successor instead of retiming or reopening Character, Animal or Nature work.

## Current product lane

Repository: `mike-axiom-mir/axm-map-design`

Draft PR: **#48 — `Animation: replay Object wall-clock motion on TA frame adapter`**

Branch: `studio/animation-object-current-world-wallclock-002`

Base: Technical Art branch `studio/technical-art-object-rigid-current-world-bridge-001`, exact receiver parent **`e085437f6cc958bbf7c5c6464578923d542962b0`**.

Current exact Animation evidence head: **`343668b80acd52367e3427f3ef97d1662625c18f`**.

PR state after proof: **open / draft / mergeable / unmerged**.

The superseded Map Animation PR #46 has been **closed unmerged** after the new exact-successor proof became green. Its exact `c2695f654f9dd44312ca5d205eceb27f7c2680ee` / d297 evidence and retained artifact remain historical truth; they are not promoted to e085 and are not rewritten away.

## Frozen owner motion identity

Object Animation source head: **`c688936a84f80f292e43587c9d3386bd717f8178`**.

Sequence: `lid-latch-open-hold-close-001`.

Sequence digest: `0a3523cf792264f610881552fd2ebd438aabdfd05e30e92af9dbb33ded1fa2d3`.

Exact source identity remains:

- duration `2.5 s`;
- authored rate `40 Hz`;
- `101` endpoint-inclusive keys/samples;
- latch release `0.00 -> 0.25 s`, unchanged smoothstep `0 -> 50°`;
- lid phase `0.25 -> 2.25 s`, latch held at exact `50°`;
- latch reengagement `2.25 -> 2.50 s`, unchanged smoothstep `50 -> 0°`.

Retimed: **false**. Keys changed: **false**. Easing changed: **false**. Amplitude changed: **false**. Source geometry changed: **false**. Rig pivots changed: **false**. Technical-Art receiver changed by Animation: **false**.

## Reusable method improvement

Contract: **`axm.animation-object-current-world-wallclock/v0.2`**.

Reusable rule:

`REPLAY_FROZEN_OWNER_MOTION_ON_EACH_VERIFIED_TECHNICAL_ART_RECEIVER_SUCCESSOR__DO_NOT_TRANSFER_WALLCLOCK_ACCEPTANCE_BY_ANCESTRY__MATCH_ACTUAL_PIVOT_QUATERNIONS_ABOUT_THE_EXACT_HOST_AXIS_AGAINST_THE_ALREADY_ADAPTED_RECEIVER_PLAN`

The important correction is an acceptance-boundary improvement rather than a motion change. Technical Art's e085 receiver plan already owns and verifies source-to-Godot-host frame adaptation. Animation therefore does **not** apply another sign/frame conversion and does not assume source Euler X equals host Euler X. Instead, it compares the actual lid and latch pivot quaternions with quaternions generated from Technical Art's already-adapted exact receiver-plan targets about the exact Technical-Art host axis. Scalar angle values are diagnostics only; quaternion disagreement is the acceptance primitive.

Playback remains split into two passes:

1. a low-intrusion real `AnimationPlayer.play()` pass observed through `frame_post_draw` metadata without viewport readback or disk writes during timing;
2. a separate real playback retaining shaded current-world PNGs for temporal review, with capture timing explicitly excluded from performance authority.

Negative controls fail closed on Runtime-authority inflation, receiver-frame acceptance inflation and phase-order corruption.

## Exact Technical Art parent

Parent head: **`e085437f6cc958bbf7c5c6464578923d542962b0`**.

Parent artifact: **`10521663924`**.

Parent archive SHA-256: **`2374d89abf5779b7470657082c3a43b974d6b16fcbaff4e82256753c97d6dc24`**.

Parent scoped result:

`PASS_CURRENT_WORLD_OBJECT_ANIMATION_OWNER_SAMPLES_THROUGH_RIGID_RECEIVER__VFX_RUNTIME_ENV_ADOPTION_HELD`

The Animation workflow pins and revalidates this exact parent before running playback and verifies the Technical-Art receiver/bridge files remain unchanged by the Animation lane.

## Preserved failed evidence and repairs

The successor lane did not go directly green and the failures remain part of the truth trail.

First, the inherited earlier Animation observer called the removed helper `_motion_receiver_local_mesh_center()` while the e085 Technical-Art successor exposes `_motion_receiver_local_component_center()`. That failure was an observer API mismatch, not a motion defect.

A later attempt reached actual motion but failed closed because scalar host-angle extraction was weaker than direct orientation comparison in the adapted receiver frame. The final method therefore moved acceptance to direct quaternion-to-quaternion comparison about Technical Art's exact host axis, against the already-adapted TA target plan.

These repairs changed observer/verifier plumbing only. They did **not** change source timing, keys, easing, amplitude, geometry, pivots, receiver construction or acceptance tolerances to manufacture a PASS.

## Exact retained result

Dedicated workflow: **`35283767586 — Animation Object current-world wall-clock successor proof` — SUCCESS**.

Exact branch evidence head: **`343668b80acd52367e3427f3ef97d1662625c18f`**.

Scoped result:

**`PASS_OBJECT_CURRENT_WORLD_OWNER_ANIMATION_WALLCLOCK_REBOUND_TO_TA_E085_RECEIVER`**.

### Low-intrusion real playback

Godot 4.7.2 `AnimationPlayer.play()` naturally completed the exact frozen owner sequence.

Observed proof-host values:

- elapsed wall-clock observation: **`2.567486 s`**;
- distinct exact owner sample indices observed: **`74 / 101`**;
- maximum receiver-frame quaternion pose disagreement: **`0.0°`**;
- peak lid target reached: **`100.0°`**;
- bilateral latch minimum reached: **`-50.0°`**;
- phase-order violations: **`0`**;
- keeper endpoint drift: **`0.0 m`**;
- lever endpoint drift: **`0.0 m`**;
- metadata-only `frame_post_draw` interval min / mean / max: **`33.713 / 34.6912837837838 / 36.523 ms`**.

The `74 / 101` observation is **not** relabelled as complete 40 Hz source-slot or display delivery. The source remains 40 Hz and was not retimed to fit this proof host. These timings describe this CI observer only and carry no target-device, display-scanout or Runtime performance authority.

### Shaded review playback

A second real `AnimationPlayer.play()` retained **31 shaded 1100×720 current-world frames** across neutral, latch release, lid opening, open hold, close and latch reengagement. Representative neutral/open/return states were inspected as a review surface only. This is not Art Direction or Visual Observer/QA acceptance.

## Retained evidence packet

Artifact ID: **`10523121895`**.

Artifact name: `animation-object-current-world-wallclock-successor-4bed8590e18a44c2e6fd1fbfcb58f7b23fbab204`.

The artifact-name suffix is the PR event's synthetic merge SHA; `animation-exact-head.txt` inside the packet binds the evidence to exact branch head **`343668b80acd52367e3427f3ef97d1662625c18f`**.

Size: **`2,182,488 B`**.

Archive SHA-256: **`41246a9990b90f33e537195747c71bcb19de8797668af71bf372d35883f54707`**.

The artifact was downloaded after CI and independently rehashed to the same SHA-256. Its summary/runtime receipts and representative shaded frames were inspected.

## Current truth boundary

This PASS proves only that the exact frozen Object owner sequence can replay through real Godot wall-clock `AnimationPlayer.play()` on the exact **e085 Technical-Art frame-adapter receiver**, with receiver-frame-native quaternion pose matching, correct observed phase ordering, peak traversal and neutral endpoint closure, plus a separately retained shaded review sequence.

It does **not** establish:

- presentation of all 101 authored source slots or stable 40 Hz display delivery;
- target-device performance or display scanout;
- future Technical-Art receiver successors;
- Runtime controller/state-machine/input behavior;
- physical latch retention, forces, collision or physics acceptance;
- gameplay timing or gameplay acceptance;
- VFX adoption or Environment production adoption;
- final motion weight, personality, naturalness or timing preference;
- Art Direction or independent Visual Observer/QA acceptance;
- CANON or production readiness.

Animation owns only this bounded playback/evidence method. Hard Surface/Object retain source construction/contact authority; Rigging retains articulation/deformation authority; Technical Art retains receiver/frame-conversion authority; Runtime retains controller/performance authority; Environment owns receiving-world adoption; Art/QA retain perceptual acceptance.

## Preserved Animation continuity

- Object PR #10 capture-timeline rebind remains PASS at `c688936a84f80f292e43587c9d3386bd717f8178`; proof-volume contact remains separated from broad-phase AABB without retime.
- Closed Map PR #46 preserves the older d297 current-world wall-clock proof; it is historical evidence, not authority for e085.
- Map PR #44 compact-east exact-key/real-loop characterization remains PASS while full 31.25 ms source-slot presentation remains held; source motion remains frozen.
- Nature PR #13 exact-state DISCRETE and single-shape LINEAR characterization remain preserved.
- Character PR #22 exact-density target-host and repeated-loop evidence remain preserved.
- Animal Animation PR #33 dense/subframe and normalized-u16 evidence remains preserved.
- Wreckline mechanical-motion work remains separate and was not duplicated.

## Four-root gate

- **Truth:** the receiver successor was replayed instead of inheriting the old PASS; incomplete 101-slot observation remains explicit; failed observer assumptions remain preserved.
- **Agency / non-domination:** Animation does not seize Technical Art frame conversion, Runtime, Environment, Physics, gameplay, Art or QA authority and did not retime the source to fit the proof host.
- **Continuity:** the exact owner clip, digest and e085 receiver identity remain pinned; PR #46's earlier exact evidence is preserved while its duplicate active lane is closed.
- **Wisdom before speed:** acceptance moved to the correct receiver-frame quaternion primitive rather than changing source motion to satisfy a weaker observer.

The four AXM roots remain the merge gate.

## Next Animation trigger

Do **not** retime the equipment-case sequence from proof-host cadence. Reopen this Object lane only for a concrete Art/QA temporal/readability defect, another verified Technical-Art receiver successor that requires explicit replay, or a real Runtime playback mismatch. Otherwise choose the next genuinely animation-ready gap elsewhere in the constellation.