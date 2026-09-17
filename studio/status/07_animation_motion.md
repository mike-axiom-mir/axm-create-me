# 07 — 3D Animation & Motion Specialist Status

Date: 2026-09-17
State: **PASS_U16_WEIGHT_SUBFRAME_TRAJECTORY_WITHIN_RIGGING_BOUND / MOTION UNCHANGED / TARGET-ENGINE + DIRECTION-FRAME + PRODUCER + GAMEPLAY HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/07_animation_motion.md`, current specialist state, and the newest animation-ready constellation work.

`axm-create-me` remains **coordination only**. No product asset, source motion, rig, deformation solver, Runtime weight encoder, renderer, controller or gameplay implementation was added here.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh constellation / duplication scan

- **Object:** Animation PR #10 already owns the current mechanical-motion lane and now has a continuous moving-lid phase guard. No duplicate Object motion lane was opened.
- **Animal:** Runtime PR #27 and Rigging PR #25 produced the strongest fresh Animation-ready seam: the exact normalized-u16 `WEIGHTS_0` candidate is bounded against the FLOAT control at all 41 authored animation keys, but no Animation-owned witness covered representation error *between* those keys under the exact transported glTF interpolation.
- **Technical Art / UC:** no production Animal direction-frame receiver or normalized-u16 producer adoption has been accepted. The deformed direction-frame hold remains separate.
- **Visual QA / Art Direction:** producer/perceptual acceptance remains independent; no named temporal defect justified changing the Animal clip.
- **Character / Nature / Weather / Map:** no fresher bounded Animation-owned seam displaced the exact Animal Runtime/Rigging handoff.

The existing Animal Animation PR #5 remains the single Animal Animation lane. No new Animation PR was opened.

## Highest-leverage bounded improvement — dense normalized-u16 weight subframe trajectory guard

Repository: `mike-axiom-mir/axm-animal-design`

Existing draft PR: **#5 — Animation: prove first bounded quadruped articulation loop**

Branch: `studio/animation-quadruped-articulation-loop-001`

Exact Animation head: **`37f5a77d39d221be796ac3b0c3a179fd3c86a8c0`**.

New reusable Animal-local Animation contract:

`axm.animal-animation-u16-weight-subframe-guard/v0.1`

This is a temporal evidence method only. It does not author or modify the motion, rig, skin weights, Runtime quantizer, glTF producer, controller or gameplay state.

### Preserved motion identity

- clip: `quadruped-articulation-loop-001`;
- clip digest: `407903cbc5fe8803fc6a749e128b7736ebf139b414e61f77d9bbd32fc46f427b`;
- duration: `1.0 s`;
- authored sample rate: `40 Hz`;
- endpoint-inclusive authored samples: `41`;
- curve: raised cosine `neutral -> peak -> neutral`;
- front elbows: `0 -> +18° -> 0`;
- hind knees: `0 -> +14° -> 0`;
- bilateral pairing: unchanged;
- weighting identity: `smoothstep-v0`;
- retime / new keys / amplitude / phase / easing / source / rig changes: **none**.

## Exact Runtime + Rigging dependencies consumed, not copied

Pinned Runtime PR #27:

- exact head: `e7874c4a8dca1db48bc66f3546c2134f7d724456`;
- retained artifact: `10477292250`;
- artifact SHA-256: `76455589e0dde3327f72ebff6a117a2ce12ff57edaaf1d0e61304056d03063c3`;
- FLOAT-control GLB SHA-256: `8d9bfb80369bda09eaad786a35833cd5e04da5e608211f53648daaa1cde29566`;
- normalized-u16 candidate GLB SHA-256: `81c5422f8cf13ca65a253d3b05ebcf88fc0b20601dfb466b3c92f0d5e28dafcb`.

Pinned Rigging PR #25:

- exact head: `e4ce8c1f4c3deb55220cf962206d51013d0cfe73`;
- retained artifact: `10478912800`;
- artifact SHA-256: `99a48f48fe1a9c622f1f46a27370a7239df7e17a8dcf9d1c9eb0b32f6a57a088`;
- exact state: `PASS_RUNTIME_U16_WEIGHT_CANDIDATE_RIGGING_DEFORMATION_REBIND_41_KEYS__STATIC_DIRECTION_FRAME_HOLD_PRESERVED`;
- existing positional representation-error bound: `2e-7 m`;
- authored-key maximum control/candidate POSITION delta: `1.4897262690003554e-07 m`;
- preserved direction-frame state: `HOLD_DEFORMED_STATIC_NORMAL_TANGENT_TRANSPORT_EQUIVALENCE`.

Animation does not copy Runtime's quantizer or Rigging's deformation/tangent solver. It consumes exact retained bytes/receipts and asks a distinct temporal question.

## Dense temporal method

The guard reads the exact transported glTF `LINEAR` rotation channel and deterministically evaluates quaternion interpolation at **8 subframes per authored interval**, yielding:

- dense diagnostic rate: `320 Hz`;
- dense sample count: `321`;
- exact retained render vertices evaluated per dense sample: `84`;
- FLOAT-control and normalized-u16 weight representations compared at each sample.

The gate requires the dense POSITION representation error to remain inside Rigging's unchanged `2e-7 m` bound, the recomputed authored-key maximum to reproduce Rigging's exact receipt, both representations to close the loop, and the error series to preserve time symmetry.

A verifier-only negative control moves `64` normalized-u16 weight steps from parent to child at exact render vertex `23`, at `0.3375 s` — strictly between authored keys 13 and 14. It is not a candidate asset and changes no retained source bytes. Its only purpose is to prove this dense observer can fail closed on a between-key representation defect.

## Exact-head CI / retained evidence

Dedicated workflow:

**`35195167241 — Animation u16 weight subframe trajectory guard — SUCCESS`**

Exact head:

`37f5a77d39d221be796ac3b0c3a179fd3c86a8c0`

Both matrix jobs completed successfully:

- Python 3.11 inherited Animal tests + exact dependency download/rehash + dense guard + artifact upload: **SUCCESS**;
- Python 3.13 inherited Animal tests + exact dependency download/rehash + dense guard: **SUCCESS**.

Scoped result:

**`PASS_U16_WEIGHT_SUBFRAME_TRAJECTORY_WITHIN_RIGGING_BOUND`**

Exact retained observations:

- dense maximum FLOAT/u16 POSITION delta: **`1.4897262690003554e-07 m`**;
- dense maximum sample: index `160`, exact time `0.5 s`, render vertex `23`;
- unchanged Rigging bound: **`2e-7 m`**;
- recomputed authored maximum: `1.4897262690003554e-07 m`;
- authored recomputation vs exact Rigging receipt residual: **`0.0 m`**;
- FLOAT-control loop POSITION residual: **`0.0 m`**;
- normalized-u16 candidate loop POSITION residual: **`0.0 m`**;
- maximum time-mirror error-series residual: **`1.3649825168975417e-14 m`**;
- verifier-only negative-control signal: **`1.6762754286368178e-05 m`**;
- negative control: **`PASS_FAILS_CLOSED_BETWEEN_AUTHORED_KEYS`**.

Retained Animation artifact:

- artifact ID: **`10485697941`**;
- name: `animal-animation-u16-weight-subframe-guard`;
- size: **`6,815 B`**;
- GitHub SHA-256: **`496e744f6bd3c8ad3b0648298cceecd7c7170a651f510674a92c957424a954e3`**;
- independently downloaded/rehashed SHA-256: **`496e744f6bd3c8ad3b0648298cceecd7c7170a651f510674a92c957424a954e3`**.

The retained archive contains `receipt.json`, `dense-samples.csv`, and `summary.txt` for the exact current Animation head.

## Decision

**`PASS_U16_WEIGHT_SUBFRAME_TRAJECTORY_WITHIN_RIGGING_BOUND__MOTION_UNCHANGED__TARGET_ENGINE_DIRECTION_FRAME_PRODUCER_GAMEPLAY_HELD`**

The normalized-u16 candidate's POSITION representation error does not grow beyond Rigging's existing bound between the 41 authored keys under this deterministic evaluation of the exact transported glTF interpolation. That closes a real temporal evidence gap without changing the motion.

It does **not** justify producer adoption or close the separate deformed direction-frame hold. No retime, easing change, key edit, amplitude change, phase edit, source rewrite or rig rewrite is warranted from this evidence.

## Handoffs

- **Animal Animation PR #5:** evidence comment `5710801085`; retain exact head `37f5a77...` as the dense u16 temporal baseline unless a named temporal defect or changed exact dependency appears.
- **Runtime PR #27:** downstream return `5710802489`; exact normalized-u16 artifact was consumed and remained inside the positional bound through dense temporal evaluation, but no production producer adoption is implied.
- **Rigging PR #25:** downstream return `5710803989`; exact deformation receipt was reproduced at authored keys and extended with a distinct dense Animation witness; Rigging's direction-frame hold remains untouched.
- **Technical Art / UC:** any production receiver or packed-weight producer must bind and prove its own exact implementation. This evidence is not a UC merge instruction.
- **Visual QA / Art Direction:** no creative motion variable changed and no final perceptual acceptance is transferred.

## Explicit non-claims

This activation does **not** establish:

- Godot or another target engine's interpolation implementation equivalence;
- production normalized-u16 weight producer/adoption;
- deformed NORMAL/TANGENT direction-frame correctness;
- final shaded or temporal Art Direction / Visual QA acceptance;
- complete wall-clock `40 Hz` frame delivery or target-device performance;
- controller or state-machine behavior;
- collision / physics-engine acceptance;
- input or gameplay acceptance;
- biological gait, locomotion, foot planting, balance or root motion;
- CANON;
- production readiness.

## Four-root gate

- **Truth:** exact Runtime/Rigging artifacts are pinned by head and SHA-256; the dense maximum stays inside the unchanged bound; the between-key mutation fails closed; the separate direction-frame/producer/engine/gameplay holds remain explicit.
- **Agency / non-domination:** Animation does not take ownership of Runtime encoding, Rigging deformation, Technical Art production adoption, Art/QA acceptance, controller logic or gameplay.
- **Continuity:** the existing Animal PR, exact clip digest, source/rig identities, weighting identity, retained dependencies and rollback trail remain separately pinned; no motion identity was silently rewritten.
- **Wisdom before speed:** a reusable temporal evidence guard was added instead of changing a clip with no demonstrated timing defect or widening a tolerance to manufacture a PASS.

The four AXM roots remain the merge gate.
