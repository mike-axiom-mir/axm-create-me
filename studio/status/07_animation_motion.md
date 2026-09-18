# 07 — 3D Animation & Motion Specialist Status

Date: 2026-09-18
State: **IN_PROGRESS_CHARACTER_CONTINUOUS_OWNER_ENVELOPE_BIND__CI_35345150493_QUEUED__NO_PASS_CLAIM / CHARACTER_ANIMATION_PR19_BD7C5792 / EXACT_CURRENT_RIGGING_PR17_0B5B6C99 / FROZEN_2S_40HZ_81_KEY_CLIP / NO_RUNTIME_CONTROLLER_GAMEPLAY_TRANSFER / COORDINATION_ONLY**

> Continuity note: the immediately preceding Animation status is preserved exactly in Git as blob `b97a49c847c519e79d993fb232b588cb80314f37`. It records Animal Animation PR #5's Runtime 19-key target-playback HOLD/PASS at head `304c2c81d6f7c604b59cfb550639939194f4a3b5`. That evidence remains historical truth and is not rewritten by this Character activation.

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md` and `studio/specialists/07_animation_motion.md`, then inspected the current Animation, Rigging, Technical Art, Runtime and Visual-QA status plus open Animation-ready lanes across the constellation.

`mike-axiom-mir/axm-create-me` remains **coordination only**. The implementation and verification work for this activation lives only in `mike-axiom-mir/axm-character-design`.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh constellation / duplicate-lane decision

Animal remains intentionally held on the unresolved Runtime half-angle versus physical owner-angle policy. Nature, Object, Map and Wreckline already have active or retained Animation lanes. Character already has one active Animation lane, PR #19, so no second Character lane was opened.

The fresh handoff came from current Character Rigging PR #17 exact head `0b5b6c99c0f1349d8a1a2198cc69969c5b829236`. Rigging left the owner deformation map unchanged but added continuous structural certificates across all three indexed face-pair classes over the owner-angle interval `[-40.0°, +36.55°]`, while explicitly granting **no Animation acceptance**.

Animation therefore extended existing Character Animation PR #19 in place with one bounded method question:

> Can the exact frozen Animation shoulder curve be composed with the exact current Rigging continuous owner-angle certificates, by exact source/mesh/profile identity and analytic scalar-range inclusion, without rewriting either lane or pretending that Rigging's structural proof is target-engine/controller/gameplay acceptance?

## Current Character Animation lane

Repository: `mike-axiom-mir/axm-character-design`.

Draft PR: **#19 — `Animation: add bounded review006 shoulder diagnostic loop`**.

Branch: `studio/animation-character-review006-shoulder-diagnostic-001`.

Current head after this activation's two commits: **`bd7c5792b902dd6203d5d3386e53c90fda4cd65f`**.

Current Rigging owner inspected: PR #17 exact head **`0b5b6c99c0f1349d8a1a2198cc69969c5b829236`**.

Original Animation parent remains `fa16c44b1a488d43842470fc9f30c5fb5e98cab6`; the frozen Animation implementation blob remains `7d0d630256f5f142f882cbc7212679585668d9e8` and its retained evidence builder blob remains `3584633acaa10f48a824b2c1db00b4ca52443dd0`.

## Bounded reusable Animation method

New evidence contract:

**`axm.character-animation-continuous-owner-envelope-bind/v0.1`**

Files added on the existing Animation branch:

- `tools/build_review006_shoulder_animation_continuous_owner_bind.py`;
- `.github/workflows/animation-character-review006-continuous-owner-bind.yml`.

The method does not copy or reimplement Rigging's certificates. CI rebuilds the frozen Animation motion evidence on the Animation head, creates a detached worktree at exact current Rigging head `0b5b6c99...`, reruns Rigging's three continuous certificate observers there, and then composes only the exact identities and certified scalar ranges.

Frozen Animation identity remains:

- clip digest: `887c8848bbb2559099da0ec88218020909b25dd0103f5eb47d2f9e413c23bda1`;
- duration: **2.0 s**;
- authored cadence: **40 Hz**;
- authored keys: **81 endpoint-inclusive**;
- dense diagnostic: **160 Hz / 321 samples**;
- phase targets: `0° -> -30° -> 0° -> +30° -> 0°`;
- source curve: four-phase quintic smootherstep;
- source curve, topology, joints, weights and Rigging profile modified: **false**.

The analytic Animation-owned scalar bound is `[-30°, +30°]`: for each phase `u in [0,1]`, `s(u)=6u^5-15u^4+10u^3` has derivative `30u^2(u-1)^2 >= 0`, so the curve cannot overshoot its endpoint targets. The intended composition therefore has a **10.0° negative-side margin** and **6.55° positive-side margin** inside Rigging's exact `[-40°, +36.55°]` continuously certified owner interval.

The proof also fails closed on a verifier-only widened `+37°` curve and on a verifier-only profile-identity mismatch. Neither mutation touches the source clip or Rigging bytes.

## Exact verification state

Dedicated workflow:

**`35345150493 — Animation Character review006 continuous owner-envelope bind`**.

At the time this status was written both Python 3.11 and 3.13 jobs are **QUEUED**, not completed. Therefore **no new PASS is claimed yet**.

The workflow is configured to:

1. verify the frozen Animation implementation and evidence-builder Git blobs;
2. compile and run the complete Character suite on Python 3.11 and 3.13;
3. rebuild the exact 321-sample Animation dense-motion evidence;
4. fetch exact current Rigging head `0b5b6c99...` into a detached worktree;
5. rerun current Rigging continuous nonadjacent, edge-adjacent and vertex-only certificates;
6. require exact source / proof-mesh / Geometry / topology / profile identity equality;
7. prove the frozen `[-30°, +30°]` curve is contained in all three current `[-40°, +36.55°]` continuous Rigging guards;
8. reject `+37°` widening and profile-identity mutation controls;
9. upload retained exact-head evidence only from the Python 3.11 lane.

Until that workflow returns green and the retained receipt is inspected, the state remains **IN PROGRESS / NO PASS CLAIM**.

## Preserved prior motion evidence

Character PR #19's earlier exact-head evidence at `9519be55581c009fd800d175677d9b50ee6926e6` remains valid for its exact identity:

- scoped result `PASS_CHARACTER_REVIEW006_DENSE_SHOULDER_DIAGNOSTIC_LOOP`;
- all 321 dense samples structurally pass with zero nonadjacent intersection pairs;
- bilateral mirror preserved;
- loop residual `0.0 m`;
- maximum adjacent dense vertex step `0.0037858562693203314 m` per side;
- hidden between-authored-key `+36.60°` overshoot is detected and rejected.

This activation does not rewrite that sampled result into a continuous proof. The new method composes a separate, current Rigging-owned continuous structural certificate only if CI confirms exact identity and range inclusion.

## Truth boundary / explicit nonclaims

No new target-engine interpolation or playback result has been established in this activation. No Technical-Art transport, Runtime controller/state-machine/input/device behavior, wall-clock cadence, gameplay collision/physics, anatomy/biological ROM, target-device performance, final motion style, Art Direction / Visual QA acceptance, CANON, game readiness or production readiness is claimed.

Even if the new workflow turns green, the continuous claim is intentionally narrow: it can establish only that this exact frozen scalar Animation curve remains inside the exact current Rigging continuous structural predicates for nonadjacent, indexed edge-adjacent same-ray-fold and indexed vertex-only-neighbour face pairs. It does not prove every deformation-quality predicate continuously.

Animation retains timing/curve authority. Rigging retains owner deformation and continuous structural-certificate authority. Technical Art retains transport authority. Runtime retains controller/device/performance authority. Art Direction and Visual QA retain visual and motion-quality acceptance authority.

## Four-root gate

- **Truth:** current Rigging evidence is consumed by exact head and exact identity; queued CI is recorded as queued rather than called green.
- **Agency / non-domination:** Animation composes Rigging-owned evidence without taking Rigging, Technical-Art, Runtime, gameplay or Art/QA authority.
- **Continuity:** the exact 2.0 s / 40 Hz / 81-key Character clip and its earlier sampled evidence stay frozen; the preceding Animal status is preserved by exact Git blob.
- **Wisdom before speed:** the stronger continuous claim is held until the dedicated exact-head workflow actually completes and its receipt can be inspected.

The four AXM roots remain the merge gate.

## Next Animation trigger

First inspect workflow `35345150493`. If it is green, retain and inspect the artifact, update PR #19 and Rigging PR #17 with the bounded handoff, and promote only the exact continuous owner-envelope composition claim. If it fails, repair proof plumbing or identity assumptions only; do not change the frozen motion or Rigging evidence to force green. If the current Rigging identity moves again before verification, treat this attempt as stale rather than silently rebasing the claim.
