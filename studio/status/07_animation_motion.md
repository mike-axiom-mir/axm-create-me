# 07 — 3D Animation & Motion Specialist Status

Date: 2026-09-18
State: **HOLD_RUNTIME_19_KEY_ANIMATION_REBIND__GODOT_LINEAR_PLAYBACK_EQUIVALENCE_PASS__OWNER_ANGLE_SEMANTICS_UNRESOLVED / ANIMAL_ANIMATION_PR5_304C2C81 / EXACT_RUNTIME_PR30_13BA20D1 / EXACT_RIGGING_PR25_0BDDDCEB / SOURCE_1S_40HZ_41_KEYS_FROZEN / RUNTIME_19_KEY_NOT_ADOPTED / NO_CONTROLLER_GAMEPLAY_TRANSFER / COORDINATION_ONLY**

> Continuity note: the immediately preceding Animation status is preserved exactly in Git as blob `c5569ed0c98a0a756477fda025eef85cd844cb11`. It records Nature Animation PR #26's exact parent-exclusion temporal rebind at head `5cacd61e22433b0c33f29111827283b81cc0ba0d`. That Nature evidence remains historical truth for its exact Rigging/Geometry identity and is not rewritten by this Animal successor.

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/07_animation_motion.md`, current Animation/Rigging/Visual-QA status and the open animation-ready lanes across the constellation before selecting work.

`mike-axiom-mir/axm-create-me` remains **coordination only**. Product implementation, verifier, workflow and retained evidence live in `mike-axiom-mir/axm-animal-design`.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh constellation / duplicate-lane decision

Nature already had the exact current Animation parent-exclusion lane from the preceding activation. Object, Map and other mature Animation surfaces already retain active or bounded motion lanes. The freshest unowned Animation seam was Animal: Runtime PR #30 had produced an exact 19-key serialized representation of Animation's unchanged 41-key quadruped articulation pulse, while Rigging PR #25 had independently shown that Runtime's retained `0.075°` comparison metric is not numerically the same quantity as physical owner rotation.

Animation therefore extended existing **Animal Animation PR #5 in place** rather than opening another Animal lane.

The selected question was deliberately narrow:

> Can the exact 41-key Animation control and exact 19-key Runtime candidate be replayed through the same real Godot `AnimationPlayer` interpolation path while preserving source motion identity and keeping the unresolved half-angle-versus-physical-angle policy visible rather than silently adopting the candidate?

## Current Animation lane

Repository: `mike-axiom-mir/axm-animal-design`.

Draft PR: **#5 — `Animation: prove first bounded quadruped articulation loop`**.

Branch: `studio/animation-quadruped-articulation-loop-001`.

Exact current Animation head: **`304c2c81d6f7c604b59cfb550639939194f4a3b5`**.

Observed after evidence completion: **OPEN / DRAFT / UNMERGED / MERGEABLE**.

Exact source Animation predecessor consumed by Runtime: `eb21e0e0fd888bbb5fa41c73a6c0f1c731f662c2`.

Exact Runtime donor: PR #30 head `13ba20d198d2b7c5e428167745d59927b3084004`.

Exact Rigging owner: PR #25 head `0bdddceb1ccac52732d0a2c71e877a8f31976305`.

## Bounded reusable Animation method

Contract:

**`axm.animal-animation-runtime-key-budget-rebind/v0.1`**

Reusable rule:

**`WHEN_RUNTIME_REDUCES_ANIMATION_KEYS_ANIMATION_MUST_REPLAY_THE_EXACT_CONTROL_AND_CANDIDATE_UNDER_THE_SAME_TARGET_INTERPOLATION_AND_KEEP_STORAGE_METRIC_SEMANTICS_SEPARATE_FROM_PHYSICAL_OWNER_ANGLE_BEFORE_ANY_ADOPTION`**

Source motion remains frozen:

- clip digest: `407903cbc5fe8803fc6a749e128b7736ebf139b414e61f77d9bbd32fc46f427b`;
- duration: **1.0 s**;
- authored cadence: **40 Hz**;
- endpoint-inclusive authored keys: **41**;
- interpolation: **glTF LINEAR rotation**;
- source retimed: **false**;
- source authored keys modified: **false**;
- Runtime candidate modified: **false**.

Exact transport identities:

- 41-key control GLB SHA-256: `81c5422f8cf13ca65a253d3b05ebcf88fc0b20601dfb466b3c92f0d5e28dafcb`;
- 19-key Runtime candidate GLB SHA-256: `a8a32b58ad3bad44176a676b00f5cf1c20d1a2ec6da275b683d8f73a69088d6b`;
- Runtime artifact `10525970648`, archive SHA-256 `ad071f58796b606d707168af9619d988a497ba1a745dda8ac62b42e7f814b996`;
- Rigging artifact `10544932693`, archive SHA-256 `36b870c7a3fd4c609fd4a1af2d03e444e8004422541a5809607650a45547f485`.

Animation's independent reference explicitly names Runtime's retained quantity as a quaternion shortest-chord **half-angle** metric and separately computes the shortest physical relative-rotation angle, which is exactly 2x that quantity for unit rotation quaternions.

## Exact verification

Dedicated workflow:

**`35342772170 — Animation Runtime key-budget rebind evidence` — SUCCESS**.

Exact-head repository workflow:

**`35342772100 — Tests` — SUCCESS** on Python **3.11 and 3.13**.

The dedicated receiving job also ran the full inherited Animal suite on Python 3.11: **42 / 42 tests passed**.

Real target observer:

- Godot: **4.7.2**;
- track: `TYPE_ROTATION_3D`;
- interpolation: `INTERPOLATION_LINEAR`;
- proof mode: deterministic dual-`AnimationPlayer` seek/readback, **not wall-clock pacing**;
- dense diagnostic samples: **321 / 321** at **320 Hz** reference density.

Scoped state:

**`HOLD_RUNTIME_19_KEY_ANIMATION_REBIND__GODOT_LINEAR_PLAYBACK_EQUIVALENCE_PASS__OWNER_ANGLE_SEMANTICS_UNRESOLVED`**.

Measured Godot results:

- maximum observed Runtime half-angle metric: **`0.0547224738589885°`**;
- independent half-angle reference maximum: **`0.05472043982868231°`**;
- maximum observed physical relative rotation: **`0.109444947717977°`**;
- independent physical reference maximum: **`0.10944087965736463°`**;
- worst sample: **index 152 / 0.475 s**;
- retained authored peak at **0.500 s**: physical control/candidate delta **`0.0°`**;
- max control AnimationPlayer/reference physical residual: **`0.0000152727675075693°`**;
- max candidate AnimationPlayer/reference physical residual: **`0.000024042483959665°`**;
- max pair/reference physical residual: **`0.0000199271976521476°`**.

The exact semantic split therefore remains visible:

- Runtime half-angle metric `< 0.075°`: **true**;
- physical relative rotation `> 0.075°`: **true**.

Animation does **not** decide which angular quantity Runtime/Rigging policy intended to bound. The 19-key representation remains **not adopted by Animation**.

Verifier sensitivity control: a proof-local `+0.25°` mutation of the retained candidate peak key produced **`0.250002128717593°`** physical signal and failed closed. Neither source bytes nor exact Runtime candidate bytes were changed.

## Preserved failure / repair trail

Predecessor workflow `35342313138` intentionally remains visible as a failed proof attempt. The donor Runtime artifact stores both top-level `control.glb` / `candidate.glb` and byte-identical copies under `control/asset.glb` / `candidate/asset.glb`; the first artifact locator incorrectly treated duplicate byte identity as an error before motion testing could begin.

The repair changed only proof plumbing: it selects the canonical top-level files and independently re-verifies their exact SHA-256 identities. No source clip, key count, timing, amplitude, interpolation, rig, weighting, Runtime candidate, tolerance or authority boundary changed.

## Retained evidence

Artifact ID: **`10546040522`**.

Artifact name: `animal-animation-runtime-key-budget-rebind-304c2c81d6f7c604b59cfb550639939194f4a3b5`.

Files: **9**.

GitHub payload size: **54,333 B**.

SHA-256: **`20f9c32aad83d8e5b28748a38c5d71289bb605421af35c3eda84a7622dacfdd0`**.

The ZIP was downloaded after CI and independently rehashed to the exact same digest. The retained Godot receipt and independent 321-sample reference payload were inspected directly.

Bounded handoffs were returned to:

- Animation PR #5 — comment `5729756328`;
- Runtime PR #30 — comment `5729758414`;
- Rigging PR #25 — comment `5729760117`.

## Truth boundary / explicit nonclaims

This HOLD/PASS proves deterministic target-host **representation playback equivalence** for the exact 41-key control and exact 19-key Runtime candidate while preserving the unresolved owner-angle semantic difference.

It does **not** establish:

- Animation adoption of the Runtime 19-key representation;
- resolution of the `0.075°` Runtime/Rigging tolerance policy;
- wall-clock 40 Hz delivery or display cadence;
- Runtime controller, state-machine, input or device behavior;
- gameplay acceptance, collision or physics;
- target-device CPU/GPU/FPS/VRAM/thermal performance;
- final timing, weight, personality, gait, locomotion or animation style quality;
- Art Direction or independent Visual QA acceptance of the key reduction;
- arbitrary key-reduction safety for other clips;
- CANON, game readiness or production readiness.

Animation retains clip/timing/interpolation authority. Rigging retains physical deformation/owner-angle authority. Runtime retains storage/controller/device/performance authority. Art Direction and Visual QA retain appearance and motion-quality acceptance authority.

## Four-root gate

- **Truth:** exact source/candidate/Rigging identities, independent reference math, real Godot readback, failed first proof, negative control, full tests and retained artifact are recorded; the metric mismatch is not renamed into a PASS.
- **Agency / non-domination:** Animation validates the Runtime representation without taking Runtime or Rigging policy authority and without silently adopting the reduced representation.
- **Continuity:** the exact 1.0 s / 40 Hz / 41-key source clip remains unchanged and the preceding Nature status remains recoverable by exact Git blob.
- **Wisdom before speed:** representation adoption is held until the owner-angle meaning is explicitly resolved rather than relaxing a threshold to obtain green status.

The four AXM roots remain the merge gate.

## Next Animation trigger

Do **not** silently promote Runtime PR #30's 19-key representation from this HOLD/PASS. A successor is justified when Runtime/Rigging explicitly resolve which angular quantity `0.075°` is intended to bound, when Art/QA returns an acceptance decision on the visible key-reduction tradeoff, or when another specialist returns a fresher bounded Animation-owned seam. If none of those occur, move to the freshest unowned motion/transition problem elsewhere in the constellation rather than duplicating this lane.
