# 07 — 3D Animation & Motion Specialist Status

Date: 2026-09-18
State: **PASS_CHARACTER_CONTINUOUS_OWNER_ENVELOPE_BIND / CHARACTER_ANIMATION_PR19_BD7C5792 / EXACT_CURRENT_RIGGING_PR17_0B5B6C99 / FROZEN_2S_40HZ_81_KEY_CLIP / THREE_RIGGING_STRUCTURAL_PREDICATES_COMPOSED / NO_TARGET_RUNTIME_GAMEPLAY_TRANSFER / COORDINATION_ONLY**

> Continuity note: the immediately preceding in-progress Animation status is preserved exactly in Git as blob `95eb1402eb93843400eb5cafb4397c6517b2f611`. That status itself preserves the preceding Animal Animation status by blob `b97a49c847c519e79d993fb232b588cb80314f37`. No prior evidence is silently rewritten.

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md` and `studio/specialists/07_animation_motion.md`, then inspected current Animation-ready work plus Rigging, Technical Art, Runtime and Visual-QA status across the constellation.

`mike-axiom-mir/axm-create-me` remains **coordination only**. Product implementation, verifier, CI and retained evidence for this activation live in `mike-axiom-mir/axm-character-design`.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh constellation / duplicate-lane decision

Animal remains intentionally held on the unresolved Runtime half-angle versus physical-owner-angle policy. Nature, Object, Map and Wreckline already have active or retained Animation lanes. Character already had one active Animation lane, PR #19, so no duplicate Character lane was opened.

The fresh handoff was Character Rigging PR #17 exact current head `0b5b6c99c0f1349d8a1a2198cc69969c5b829236`. Rigging retained the same owner deformation identity but added continuous structural certificates across all three indexed face-pair classes over `[-40.0°, +36.55°]`, while explicitly withholding Animation acceptance.

Animation therefore extended existing Character Animation PR #19 in place with the bounded question:

> Does the exact frozen Character shoulder curve remain inside the exact current Rigging continuously certified owner-angle interval for every time on that curve, under exact source/mesh/Geometry/topology/profile identity, without rewriting either lane or inflating the result into target-host, Runtime or gameplay acceptance?

## Current Character Animation lane

Repository: `mike-axiom-mir/axm-character-design`.

Draft PR: **#19 — `Animation: add bounded review006 shoulder diagnostic loop`**.

Branch: `studio/animation-character-review006-shoulder-diagnostic-001`.

Exact tested Animation head: **`bd7c5792b902dd6203d5d3386e53c90fda4cd65f`**.

Observed after evidence completion: **OPEN / DRAFT / UNMERGED / MERGEABLE**.

Exact current Rigging owner consumed: PR #17 head **`0b5b6c99c0f1349d8a1a2198cc69969c5b829236`**.

Original Animation parent remains `fa16c44b1a488d43842470fc9f30c5fb5e98cab6`. The frozen Animation implementation blob remains `7d0d630256f5f142f882cbc7212679585668d9e8`; its prior evidence-builder blob remains `3584633acaa10f48a824b2c1db00b4ca52443dd0`.

## Bounded reusable Animation method

Contract:

**`axm.character-animation-continuous-owner-envelope-bind/v0.1`**

Files added on the existing Animation branch:

- `tools/build_review006_shoulder_animation_continuous_owner_bind.py`;
- `.github/workflows/animation-character-review006-continuous-owner-bind.yml`.

Reusable rule:

**`WHEN_AN_EXACT_ANIMATION_SCALAR_CURVE_IS_FROZEN_AND_RIGGING_LATER_PROVES_A_CONTINUOUS_OWNER_ENVELOPE__REBUILD_BOTH_EXACT_IDENTITIES__PROVE_THE_CURVE_RANGE_ANALYTICALLY__COMPOSE_ONLY_THE_OWNER_PREDICATES_WHOSE_CERTIFICATES_COVER_THAT_RANGE__AND_DO_NOT_TRANSFER_TARGET_RUNTIME_OR_GAMEPLAY_AUTHORITY`**

Frozen Animation identity remains unchanged:

- clip digest: `887c8848bbb2559099da0ec88218020909b25dd0103f5eb47d2f9e413c23bda1`;
- duration: **2.0 s**;
- authored cadence: **40 Hz**;
- endpoint-inclusive authored keys: **81**;
- dense source/deformation diagnostic: **160 Hz / 321 samples**;
- phase targets: `0° -> -30° -> 0° -> +30° -> 0°`;
- source curve: four-phase quintic smootherstep;
- source curve retimed or reauthored: **false**;
- source geometry, topology, joints, weights or Rigging profile changed: **false**.

For each phase, the exact scalar curve uses `s(u)=6u^5-15u^4+10u^3` for `u in [0,1]`. Its derivative is `30u^2(u-1)^2 >= 0`, so each phase is monotone between its exact endpoint targets and cannot overshoot them. The full frozen Animation curve therefore remains analytically bounded to **`[-30.0°, +30.0°]`**.

Current Rigging exact head `0b5b6c99...` was rebuilt in a detached worktree and re-proved these exact continuous owner guards over **`[-40.0°, +36.55°]`**:

- nonadjacent triangles: minimum retained certificate slack **`1.4186122188356475e-07 m`** per side;
- indexed edge-adjacent same-ray-fold predicate: minimum retained slack **`1.272146258012197e-05 rad`** per side;
- indexed vertex-only-neighbour predicate: minimum retained slack **`9.215213950381399e-06 rad`** per side.

The exact curve is contained in all three guards with **10.0° negative-side margin** and **6.55° positive-side margin**. The separate retained first sampled nonadjacent failure at `+36.60°` remains outside the guard; no exact first-contact angle is inferred.

## Exact verification

Dedicated workflow:

**`35345150493 — Animation Character review006 continuous owner-envelope bind` — SUCCESS**.

Verification results:

- Python **3.11**: complete Character suite PASS; frozen 321-sample Animation evidence rebuilt; exact current Rigging continuous certificates rebuilt; composition PASS; fail-closed controls PASS; artifact retained.
- Python **3.13**: complete Character suite PASS.
- frozen implementation/evidence-builder Git-blob identity checks: PASS.
- exact source digest match: PASS.
- exact proof-mesh digest match: PASS.
- exact Geometry head match: PASS.
- exact topology digest match: PASS.
- exact Rigging profile digest match: PASS.
- continuous scalar range containment: PASS.

Scoped result:

**`PASS_CHARACTER_REVIEW006_ANIMATION_CURVE_INSIDE_CURRENT_CONTINUOUS_RIG_OWNER_ENVELOPE`**.

The prior actual-motion observer was also rerun rather than merely cited:

- all **321 / 321** dense source/deformation samples remain structurally PASS;
- maximum nonadjacent intersection pairs: **0 / 0** left/right;
- bilateral mirror: PASS;
- authored 40 Hz keys remain an exact subset: **0.0°** residual;
- loop residual: **0.0 m** per side;
- maximum adjacent dense vertex step: **`0.0037858562693203314 m`** per side;
- source-curve velocity and acceleration at phase joins remain analytically zero at the curve level.

The retained hidden-subframe control also still fails closed: a proof-local `sin²` bump leaves all authored 40 Hz keys unchanged but reaches `+36.60°` at `1.2625 s`, producing one nonadjacent pair on each side; the dense observer rejects it.

Two new composition controls also fail closed:

- verifier-only widened curve `[-30°, +37°]`: rejected for escaping the exact Rigging continuous interval;
- verifier-only Rigging profile identity mismatch: rejected.

## Retained evidence

Artifact ID: **`10546709791`**.

Artifact name: `character-review006-animation-continuous-owner-bind-bd7c5792b902dd6203d5d3386e53c90fda4cd65f`.

Files: **9**.

GitHub payload size: **43,490 B**.

SHA-256: **`73b19047331cc5ff2dd6dd7ffba7d0491ffe6b24bf00f6c3682ec04180f61cd6`**.

The ZIP was downloaded after CI and independently rehashed to that exact digest. `result.json`, `current-rigging-continuous-receipt.json`, and the rebuilt Animation summary were inspected directly.

## Truth boundary / explicit nonclaims

This PASS upgrades only one thing: for this exact frozen scalar Animation curve, every time lies inside the exact current Rigging owner interval continuously certified for the three named structural predicates.

It does **not** establish:

- every possible deformation-quality predicate continuously;
- anatomy, biological shoulder ROM or a controller motion limit;
- target-engine interpolation or playback for this current Animation/Rigging pair;
- Technical-Art skeleton/skin/tangent/normal transport acceptance;
- wall-clock 40 Hz delivery or display cadence;
- Runtime controller, state-machine, input or device behavior;
- gameplay acceptance, gameplay collision or physics;
- target-device CPU/GPU/FPS/VRAM/thermal performance;
- final timing, personality, gesture, locomotion or animation-style quality;
- Art Direction or independent Visual-QA acceptance;
- CANON, game readiness or production readiness.

Animation retains clip/timing/curve authority. Rigging retains owner deformation and structural-certificate authority. Technical Art retains transport authority. Runtime retains controller/device/performance authority. Art Direction and Visual QA retain appearance and motion-quality acceptance authority.

## Four-root gate

- **Truth:** exact current Rigging head was rerun, the frozen Animation motion was rerun, all identity gates and fail-closed controls are retained, and the continuous claim is limited to the exact predicates actually certified.
- **Agency / non-domination:** Animation consumes Rigging evidence without taking Rigging, Technical-Art, Runtime, gameplay or Art/QA authority.
- **Continuity:** the exact 2.0 s / 40 Hz / 81-key Character clip is untouched; the prior in-progress and Animal states remain recoverable by exact Git blobs.
- **Wisdom before speed:** no current-target-host or controller claim is borrowed from older Technical-Art evidence merely because it would make the result sound broader.

The four AXM roots remain the merge gate.

## Next Animation trigger

Do not widen this PASS into target-host playback or controller/gameplay acceptance. A Character successor is justified only if Technical Art explicitly binds this exact current `bd7c5792... / 0b5b6c99...` pair to a target receiver, if Art/QA returns a motion-quality decision, or if Rigging changes owner identity again. Otherwise move to the freshest unowned Animation seam elsewhere in the constellation rather than duplicating this lane.
