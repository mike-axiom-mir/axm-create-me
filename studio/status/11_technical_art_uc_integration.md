# 11 — Technical Art / UC Integration Specialist Status

Date: 2026-09-16
State: **PASS_ANIMAL_SAMPLED_PLAYBACK_TO_CURRENT_UC_RUNTIME_CLOCK / EXACT ANIMATION + UC CLOCK BOUNDARY PROVEN / HOLD_POSE_SKELETON_SKIN_EXPORT / HOLD_WALL_CLOCK / HOLD_CONTROLLER / HOLD_VISUAL_ACCEPTANCE / HOLD_UC_PROMOTION / ANIMAL PR #3 DRAFT**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/11_technical_art_uc_integration.md`, newest specialist status, current design PRs and current `axm-universal-creation` before changing product/evidence code.

`axm-create-me` remains **coordination only**. The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The immediately previous Map Technical Art result remains historical truth under prior status blob `e2c2ea10a43a6d916711306c869e44fa9f6d40fb` and Map PR #27 exact head `04ba67ecd13f06fa2714be98ab47cd71cb58d3dd`: the Building named producer -> Map receiver projection passed while the newer header overlay stayed explicitly opt-in. That work is not rewritten by this activation.

The earlier Animal Technical Art static connected-Geometry -> UC GLB result also remains historical truth at Animal PR #3 head `ab227a89cf0d7da81e34f0a3af523724bda9fc60`.

## Fresh constellation / duplication scan

- **Animal Technical Art PR #3** is the existing UC integration lane and therefore remains the correct home; no duplicate PR was opened.
- **Animal Animation PR #5** has advanced to exact head `b10ec5aeeb02b5df8d42e13df2772f4dcaae9a3a`. Its exact current clip remains `quadruped-articulation-loop-001`, `1.0 s`, `40 Hz`, `41` endpoint-inclusive samples, `40` displayed frames, `smoothstep-v0`, with source digest `9becd2dea714d662e23386aacabd0fa99abd11ff3c08aad7d242138e654f932b`, rig-plan digest `b1f39ef8cd127edf9288b89ebd1f1fc14e6a3ceb8b0db58fa0ba9b12bc892aa8`, and clip digest `407903cbc5fe8803fc6a749e128b7736ebf139b414e61f77d9bbd32fc46f427b`.
- Animation has separately diagnosed C1 discontinuities at all authored boundaries while deliberately leaving the existing motion unchanged. Technical Art does not smooth, retime or reinterpret that motion.
- Character Geometry/Rigging, Animal Rigging/Organic/Geometry, Map Runtime/VFX and visual-review lanes are active under their own ownership; none is duplicated here.
- **Universal Creation** current main inspected and consumed at exact head `a05f5fb083ad1454a0d92d001e0d3994a779826f`.
- Current UC already owns the generic `axm.game-animation-runtime/v0.1` clip-clock/state runtime. No new UC primitive or Profession Fabric promotion is justified.

## Selected bounded integration gap

Animal Technical Art already proved static connected geometry can cross into current UC GLB, but that lane explicitly stopped before animation transport. Animal Animation now has a strong exact sampled-playback contract, while the current organic clip had not been pressure-tested through UC's existing generic runtime clock.

The bounded gap selected was therefore:

> **exact Animal sampled-playback timing -> current UC adapter-neutral runtime clock**, without skeleton/skin/weights/poses, without retiming and without moving Animal motion semantics into UC.

## Existing Technical Art lane advanced

Repository: `mike-axiom-mir/axm-animal-design`

Existing draft PR: **#3 — `Technical Art: prove explicit Animal surfaces -> UC GLB bridge`**

Branch: `studio/uc-surface-bridge-001`

Exact final tested Technical Art head:

**`7b26143cd2dbf5da619fa7adb97476ba8088eb2a`**

Observed PR state: **OPEN / DRAFT / MERGEABLE**. Mergeability is evidence metadata only, not merge/CANON authority.

## Smallest reusable repair

Added Animal-side Technical Art evidence adapter:

`tools/build_uc_animation_clock_bridge_evidence.py`

Extended the existing retained Technical Art workflow:

`.github/workflows/uc-surface-bridge.yml`

The adapter does not duplicate Animation source logic. It executes the exact pinned Animation producer's own `tools/build_animation_playback.py`, requires its existing `PASS_DISCRETE_SAMPLED_PLAYBACK_SEAM`, then maps only generic clip-clock facts into UC:

- duration `1.0 s`;
- looping `true`;
- speed `1.0`;
- root motion `[0,0,0]` with mode `ignore`;
- no events or transitions;
- no motion change;
- no retime;
- no pose-data transport.

UC remains authority only for its generic runtime clock/state execution. Animal remains authority for clip, source, rig, timing and motion semantics.

## Exact result

Scoped result:

**`PASS_ANIMAL_SAMPLED_PLAYBACK_TO_CURRENT_UC_RUNTIME_CLOCK`**

Dedicated workflow family:

**`35124835734 — UC surface bridge evidence`: SUCCESS**.

All three jobs on exact Technical Art head passed:

- historical exact Animal -> UC bridge;
- connected-topology -> current UC GLB bridge;
- new Animal Animation -> current UC runtime-clock bridge.

Same-head inherited workflows also passed:

- `35124836175 — Tests`: SUCCESS;
- `35124835584 — Weighting refinement evidence`: SUCCESS.

Exact clock findings:

- all `40` authored `0.025 s` boundaries plus the first post-wrap boundary reproduced through current UC;
- maximum clip-time residual: **`5.551115123125783e-16 s`**;
- exactly one UC `LOOP` event at the exact one-second boundary, command index `39`, cycle `1`;
- post-wrap clip time returns exactly to `0.0 s`, then `0.025 s` on the next authored interval;
- bounded free-time probes `0.1125 / 0.5125 / 1.2375 / 2.0 s` reproduce the exact expected wrapped clip times and cycle counts with `0.0 s` residual;
- UC compiled runtime source SHA-256: `6d33948c8d26c7a64a5c5d6d31d989ea508ac976c59ead663c5eee46a86d7f14`;
- Technical Art receipt SHA-256: `8a0c2ca7a9f0b8661117d8e76c66990617a7cdc896ca0b479bb9ef884f16735d`.

## Fail-closed controls

The retained bridge rejects:

1. exact Animal clip-identity drift;
2. authored sample-rate drift from `40` to `41 Hz`.

Both are retained as `PASS_REJECTED`; near timing/identity is not silently accepted.

## Retained evidence

Artifact:

- ID: **`10458946478`**;
- name: `quadruped-animation-current-uc-clock-bridge-evidence`;
- size: **`4,563 B`**;
- GitHub archive SHA-256: **`0fa87471e40995c75cc8539647330f53fd088d8d4cad16a63aff1961cef8f634`**;
- exact Technical Art head: `7b26143cd2dbf5da619fa7adb97476ba8088eb2a`;
- exact Animation producer: `b10ec5aeeb02b5df8d42e13df2772f4dcaae9a3a`;
- exact UC producer: `a05f5fb083ad1454a0d92d001e0d3994a779826f`.

The artifact was downloaded during this activation and independently rehashed to the same archive digest. It retains the exact Animal sampled-playback source receipt, UC runtime source, bridge receipt and all three exact Git identities.

## Handoffs recorded

- Animal Technical Art PR #3 evidence comment: **`5701284660`**.
- Animal Animation PR #5 consumer handoff: **`5701286687`**.

Animation retains ownership of the current C1 diagnosis, timing/motion direction and any future interpolation candidate. Runtime/controller work remains separately held.

## UC placement decision

`axm-universal-creation` remains unchanged.

Current UC already provides the reusable adapter-neutral clock/state machinery needed here. One Animal clip does not justify adding Animal source/rig/weighting/sampled-playback rules, derivative policy or organic motion semantics to UC. The successful receiving proof is evidence that the existing generic boundary is sufficient, not a reason to centralize domain knowledge.

No Profession Fabric promotion is justified from this one receiving domain.

## Non-claims / remaining holds

This activation does **not** establish or authorize:

- skeleton, skin, weight, pose or deformation transport into UC;
- GLB animation-channel export;
- real wall-clock frame pacing;
- Godot `AnimationPlayer` or another target-engine controller/state-machine integration;
- continuous interpolation quality, C1 continuity or a smoothing/retime decision;
- final visual/motion-quality or Art Direction acceptance;
- gameplay, collision, physics or target-device performance;
- adoption of Animal Rigging/Geometry/Organic successor candidates;
- a universal organic-animation policy in UC;
- Profession Fabric promotion;
- merge/CANON, production readiness, game readiness or Technical Art mastery.

## Root gate

- **Truth:** exact Animation, Technical Art and UC revisions; exact timing residuals; negative controls; workflow and artifact digests are retained. Generic clock compatibility is not relabelled as animation export or target-engine playback.
- **Agency / non-domination:** Animation keeps motion authority; UC keeps only generic runtime semantics; Technical Art does not force smoothing, retiming, controller policy or visual acceptance.
- **Continuity:** existing Animal Technical Art PR #3 was advanced rather than replaced; its earlier static GLB evidence and the previous Map named-receiver result remain historical truth.
- **Wisdom before speed:** the smallest missing handoff was proven first; skeleton/skin/pose export and real wall-clock/controller work remain separate future gates instead of being bundled into an impressive but ambiguous claim.

## Current state

`PASS_ANIMAL_SAMPLED_PLAYBACK_TO_CURRENT_UC_RUNTIME_CLOCK / EXACT 40 HZ BOUNDARIES + LOOP PROVEN / EXACT ANIMATION + UC + TECHNICAL ART IDENTITIES RETAINED / HOLD_SKELETON_SKIN_WEIGHT_POSE_EXPORT / HOLD_GLB_ANIMATION_CHANNELS / HOLD_WALL_CLOCK / HOLD_CONTROLLER_STATE_MACHINE / HOLD_C1_VISUAL_ACCEPTANCE / HOLD_RUNTIME_GAMEPLAY / HOLD_UC_PROMOTION / ANIMAL PR #3 DRAFT`
