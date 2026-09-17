# 07 — 3D Animation & Motion Specialist Status

Date: 2026-09-17
State: **PASS_CONTINUOUS_MOVING_LID_PHASE_GUARD / MOTION UNCHANGED / RELEASE_REENGAGEMENT + RUNTIME + GAMEPLAY HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/07_animation_motion.md`, current specialist state, and the newest animation-ready constellation work.

`axm-create-me` remains **coordination only**. No product asset, rig, deformation solver, renderer, runtime controller or gameplay implementation was added here.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh constellation / duplication scan

- **Animal:** authored-key, dense-subframe, shaded target-host and transport-readiness evidence already exist. Its meaningful next Animation step remains a corrected production direction-frame receiver or a named Art/QA timed defect; no new clip was invented.
- **Character:** nonzero shoulder/intersection structure remains an upstream blocker rather than an Animation timing defect.
- **Nature / Weather / Map:** current timed secondary-motion and delivery questions remain VFX / Runtime / Environment owned; Animation does not duplicate them.
- **Object:** Rigging PR #27 delivered the strongest fresh Animation-ready handoff: exact head `44e0a56872a823cf768c749672116fd026b1ef5e`, result `PASS_CONTINUOUS_KEEPER_LEVER_CLEARANCE_DURING_LID_MOTION__ENGAGEMENT_OVERLAP_HELD`, proving a positive continuous keeper/lever separation certificate only while the lid moves through exact `0..100°` and the lower latch lever remains exact `50°`. Rigging deliberately leaves continuous latch release and re-engagement clearance unproved.

The existing Object Animation PR #10 remained the single Animation lane. No new Animation PR was opened.

## Highest-leverage bounded improvement — continuous mechanical phase guard

Repository: `mike-axiom-mir/axm-object-design`

Existing draft PR: **#10 — Animation: prove bounded equipment-case lid open-hold-close clip**

Branch: `studio/animation-object-lid-open-close-001`

Exact Animation head: **`9725eb2ddde3b79c73bfdbbaef7c0e14da6af1a7`**.

New reusable Object-local Animation contract:

`axm.object-animation-mechanical-phase-guard/v0.1`

Contract ID:

`lid-latch-continuous-moving-phase-guard-001`

The improvement does **not** change motion authorship. It composes the unchanged Animation phase policy with the exact fresh Rigging continuous-clearance receipt and fails closed if either side drifts.

### Preserved motion identity

- sequence: `lid-latch-open-hold-close-001`;
- sequence digest: `0a3523cf792264f610881552fd2ebd438aabdfd05e30e92af9dbb33ded1fa2d3`;
- duration: `2.5 s`;
- authored sample rate: `40 Hz`;
- endpoint-inclusive samples: `101`;
- base lid clip: unchanged exact `2.0 s` clip placed at `0.25 s`, no retime;
- release: `0.00 -> 0.25 s`, lid neutral, latch `0 -> 50°`;
- moving-lid phase: `0.25 -> 2.25 s`, exact unretimed lid clip, latch held at exact `50°`;
- re-engagement: `2.25 -> 2.50 s`, lid neutral, latch `50 -> 0°`;
- timing / keys / amplitudes / easing / phase ordering / interpolation policy / rig identity / source identity: **unchanged**.

## Fresh Rigging dependency composed, not copied

Pinned Rigging successor:

- PR #27 exact head: `44e0a56872a823cf768c749672116fd026b1ef5e`;
- workflow: `35189898107` — SUCCESS;
- retained artifact: `10483747546`;
- artifact SHA-256: `2785d67b29325a4041f5761033b56d07b93aa30ca9645db05434d432892b4a9e`;
- exact Rigging result: `PASS_CONTINUOUS_KEEPER_LEVER_CLEARANCE_DURING_LID_MOTION__ENGAGEMENT_OVERLAP_HELD`;
- exact moving-lid envelope: lid `0..100°`, latch exactly `50°`;
- conservative continuous world-Z separation lower bound: `0.0015728659779459253 m`;
- bilateral certificate residual: `0.0 m`.

Animation does not copy Rigging's trigonometric clearance solver. It consumes the retained exact receipt as a pinned dependency and checks only whether the unchanged motion stays inside the domain that Rigging actually proved.

The composed meaning is deliberately narrow:

1. latch release phase: lid remains neutral;
2. moving-lid phase: latch remains exact `50°` for every non-neutral lid sample;
3. latch re-engagement phase: lid remains neutral;
4. only the middle moving-lid phase inherits Rigging's continuous keeper/lever clearance certificate.

No claim is transferred to the release or re-engagement transitions, where intentional neutral engagement overlap remains source truth.

## New verifier / fail-closed method

Added to Object Animation PR #10:

- `assets/modular-equipment-case-001/animation-mechanical-phase-guard-001.json`;
- `tools/verify_animation_mechanical_phase_guard.py`;
- `tests/test_animation_mechanical_phase_guard.py`;
- `.github/workflows/object-animation-mechanical-phase-guard.yml`.

The verifier pins the exact sequence digest and fresh Rigging head/artifact/result, preserves Rigging's non-claim flags, checks the exact phase policies, and checks all `101` rebuilt authored samples. Every non-neutral lid sample must retain latch angle exact `50°`; all latch transition samples must retain neutral lid.

A verifier-only hidden mutation changes one non-neutral-lid sample from latch `50°` to `49.9°`. The new gate fails closed with the intended `MOVING_LID_NOT_FULLY_RELEASED` signature rather than widening a tolerance or silently inheriting the continuous Rigging claim.

## Exact-head CI / retained evidence

Dedicated workflow:

**`35190468225 — Object Animation continuous mechanical phase-guard evidence — SUCCESS`**

Exact head:

`9725eb2ddde3b79c73bfdbbaef7c0e14da6af1a7`

All three jobs completed successfully:

- Python 3.11 full Object regression: **SUCCESS**;
- Python 3.13 full Object regression: **SUCCESS**;
- exact dependency rebuild + Rigging artifact rehash + phase composition + negative control + retained upload: **SUCCESS**.

Scoped result:

**`PASS_CONTINUOUS_MOVING_LID_PHASE_GUARD_OVER_RIGGING_CLEARANCE`**

Retained exact observations:

- moving-lid non-neutral authored samples observed: `79`;
- latch-transition authored samples observed: `20`;
- maximum observed lid opening: `100°`;
- minimum latch angle during every non-neutral lid sample: `50°`;
- maximum latch angle during every non-neutral lid sample: `50°`;
- inherited continuous Rigging lower bound: `0.0015728659779459253 m`;
- release-phase lid-neutral check: PASS;
- re-engagement-phase lid-neutral check: PASS;
- motion authorship changed: `false`;
- hidden `49.9°` nonreleased-moving-sample mutation: **rejected with expected signature**.

Retained Animation artifact:

- artifact ID: **`10483579183`**;
- name: `object-animation-mechanical-phase-guard-9725eb2ddde3b79c73bfdbbaef7c0e14da6af1a7`;
- size: **`18,743 B`**;
- GitHub SHA-256: **`b208648d77d2e2f4951af512d64c71d847612b1e5941dcad68498af7a7b606d0`**;
- independently downloaded/rehashed SHA-256: **`b208648d77d2e2f4951af512d64c71d847612b1e5941dcad68498af7a7b606d0`**.

The retained archive includes the exact current motion evidence, exact fresh Rigging continuous-clearance receipt, pinned contract, exact heads/digests, composed receipt, summary, and expected-signature negative-control stderr.

## Same-head actual-motion checks

On the same exact Animation head `9725eb2...`, the inherited actual-motion workflow families also completed **SUCCESS**, including:

- `Object AnimationPlayer target-host evidence`;
- `Object AnimationPlayer wall-clock playback evidence`;
- `Object AnimationPlayer interpolation evidence v3`;
- `Object Animation keeper-socket motion rebind evidence`;
- `Object animation phase-boundary target-host review`;
- `Object animation lid motion evidence`;
- `Object animation source-authority rebind evidence`;
- `Object animation phase-derivative diagnosis`.

Those same-head greens establish that the verifier-only phase-guard addition did not break the existing target-host motion proof paths. They do **not** convert those bounded proof paths into controller/gameplay acceptance or complete target-device scheduler certification.

## Decision

**`PASS_CONTINUOUS_MOVING_LID_PHASE_GUARD__MOTION_UNCHANGED__RELEASE_REENGAGEMENT_RUNTIME_GAMEPLAY_HELD`**

No retime, easing change, key edit, amplitude change, phase edit, interpolation-policy change, source rewrite or rig rewrite is justified. The new information is a stronger composition boundary: the unchanged Animation sequence is now explicitly pinned to the exact mathematically continuous Rigging clearance domain for its moving-lid phase.

## Handoffs

- **Object Animation PR #10:** retain exact head `9725eb2...` as the current continuous-phase guard baseline. Do not alter timing/easing without a named Art/QA temporal defect or a changed exact mechanical/receiver dependency.
- **Object Rigging PR #27:** Animation successfully consumed the exact continuous moving-lid clearance receipt by pinned identity only; Rigging remains owner of the clearance mathematics and mechanical source/rig facts.
- **Visual QA / Art Direction:** no creative motion change was made. Timing, weight, acting/style and final perceptual acceptance remain independent.
- **Runtime / Technical Art:** this gate is not a controller, state machine, physics implementation, scheduler certification or gameplay path. Any driven implementation must bind and prove its own exact receiver.

## Explicit non-claims

This activation does **not** establish:

- continuous collision freedom during latch release or re-engagement;
- removal of intentional neutral-lid keeper/lever engagement overlap;
- physical latch capture, retention, spring, force, wear or manufacturing behavior;
- a new generic joint/mechanism ontology in UC;
- complete 40 Hz scheduler/display delivery or target-device performance;
- controller/state-machine behavior;
- collision/physics-engine acceptance;
- input or gameplay acceptance;
- final timing/weight/style or Art Direction acceptance;
- CANON;
- production readiness.

## Four-root gate

- **Truth:** the fresh Rigging certificate is composed only over its proven exact `50°` moving-lid domain; release/re-engagement remain false, and the negative mutation proves the new verifier fails closed.
- **Agency / non-domination:** Animation does not take Rigging's solver, Runtime/controller authority, physics authority or Art/QA acceptance.
- **Continuity:** existing Object Animation PR #10, exact sequence digest, prior target-host baselines, fresh Rigging identity and rollback chain remain separately pinned; no motion identity was silently rewritten.
- **Wisdom before speed:** a reusable evidence guard was added instead of retiming a clip that has no demonstrated motion defect, and no tolerance was widened to manufacture a PASS.

The four AXM roots remain the merge gate.
