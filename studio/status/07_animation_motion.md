# 07 — 3D Animation & Motion Specialist Status

Date: 2026-09-16
State: **PASS_ORDERED_LATCH_RELEASE_LID_CLIP_REENGAGE_SEQUENCE / EXACT HARD-SURFACE + RIGGING + PRIOR-ANIMATION IDENTITIES / 101 ENDPOINT-INCLUSIVE SAMPLES / ORIGINAL 81-SAMPLE LID CLIP UNRETIMED / CONTROLLER + GAMEPLAY + PHYSICAL-LATCH + FINAL-MOTION HOLD**

## Current activation

A fresh constellation scan found one new Animation-owned handoff that did not exist at the previous pass:

- **Weapon / Armor / Unit / Misc:** no accepted animation-ready source/rig handoff; do not invent motion.
- **Character:** current work remains Organic/Geometry preparation; there is still no accepted animation-ready Character rig.
- **Animal:** PR #5 already owns the bounded quadruped articulation pulse. New Geometry/Rigging/Organic work on the connected forelimb is still awaiting richer perceptual review, so Animation does not retime or silently transfer the old disconnected-topology clip.
- **Building:** current work remains hard-surface/material presentation; no accepted motion rig.
- **Nature / Weather / Map:** current motion belongs to VFX / Environment / Runtime evidence, not this Animation lane.
- **Object:** PR #10 already owns the exact lid `open -> hold -> close` clip. Hard-Surface PR #14 has now made the two front latch keeper/lever ownership relations explicit, and Rigging PR #15 has added a bounded bilateral lever articulation candidate while explicitly leaving timing/choreography to Animation.
- **UC / Profession Fabric:** no new shared animation abstraction is justified by this one mechanical sequence. Object-specific latch/lid meaning stays in Object.

That makes the highest-leverage bounded Animation question:

> Can the exact existing lid clip be composed with the new exact latch-lever Rigging handoff so the latches release before any lid motion, the original lid clip then plays completely unchanged, and the latches re-engage only after the lid has returned neutral — without turning Animation into a physical latch solver, runtime controller, state machine or gameplay authority?

`axm-create-me` remains coordination-only. Product/evidence implementation stayed in `mike-axiom-mir/axm-object-design`.

## Reused lane / no duplication

Repository: `mike-axiom-mir/axm-object-design`

Existing draft PR reused: **#10 — Animation: prove bounded equipment-case lid open-hold-close clip**

Branch: `studio/animation-object-lid-open-close-001`

Current exact Animation head: **`13069d6b6180e5d9e07009f6a263375ca16ddb60`**

PR state after verification: **OPEN / DRAFT / MERGEABLE**.

No second Object Animation PR was opened.

## Exact preserved identities

### Object source / prior Animation clip

- asset: `modular-equipment-case-001`;
- exact source SHA-256: `49b1f9ed9865893d6de6f1ec8f069576732df694853fde4e3fcff366de32644a`;
- existing clip: `lid-open-hold-close-001`;
- exact clip digest: `9e149195ab315f83f2d6f7d76f374f4be245567f77402de3e8a1d40ab79ef340`;
- clip duration: `2.0 s`;
- authored rate: `40 Hz`;
- endpoint-inclusive samples: `81`;
- repeated visible samples: `80`;
- existing lid motion remains `0° -> 100° -> hold -> 0°` with its original smoothstep timing and `10°` hard-limit guard.

### Hard-Surface ownership dependency

- exact Hard-Surface PR #14 donor head: **`d3fa10a270faae7925811f44f03381fe5c5d0215`**;
- ownership contract: `front-latch-ownership-001`;
- exact ownership contract SHA-256: **`0702e4180f858d29c42ff8c38a61eaa16278d6848c8ce6f3ecfae172969ca8ae`**;
- each upper keeper remains `lid_shell`-owned;
- each lower lever remains `front_service_panel`-owned.

Animation does not guess parentage and does not rewrite this contract.

### Rigging dependency

- exact Rigging PR #15 donor head: **`3b667ff5d30c46ec2fe7da7679518970f8610018`**;
- exact plan SHA-256: **`81c27ab7b73ed9a43cb3f554b56c3f4294b893712075e33d13f5b02e008455db`**;
- donor result: `PASS_BOUNDED_FRONT_LATCH_LEVER_ARTICULATION`;
- exact bilateral review envelope: `0..50°`;
- exact continuous keeper-Z separation threshold: **`48.66480246428277°`**;
- exact terminal `50°` keeper-Z separation: **`0.0015728659779458698 m`**;
- exact pivots stay Rigging-owned and are consumed from the retained Rigging receipt, not re-derived by Animation.

The Rigging donor remains explicitly review-only: it is not relabelled a real latch hook/retention mechanism.

## Bounded Animation improvement

Added Object-local sequence contract:

`axm.object-lid-latch-motion-sequence/v0.1`

Sequence ID:

`lid-latch-open-hold-close-001`

New/extended files in PR #10:

- `assets/modular-equipment-case-001/lid-latch-motion-sequence-001.json`;
- `tools/build_lid_latch_motion_evidence.py`;
- `tests/test_lid_latch_motion_sequence.py`;
- extended `.github/workflows/object-animation-lid-motion.yml`.

The exact composed sequence is intentionally simple and inspectable:

1. **`0.000 -> 0.250 s` — release latches**
   - lid held exactly neutral;
   - both latch levers `0 -> 50°` via smoothstep.
2. **`0.250 -> 2.250 s` — play exact existing lid clip**
   - both latch levers held exactly at `50°`;
   - all **81** original lid samples are copied exactly at the same `40 Hz` rate;
   - no retime, retarget, amplitude change, easing change or configuration-specific reauthoring occurs.
3. **`2.250 -> 2.500 s` — re-engage latches**
   - lid held exactly neutral;
   - both latch levers `50 -> 0°` via smoothstep.

Total sequence:

- duration: **`2.5 s`**;
- authored rate: **`40 Hz`**;
- endpoint-inclusive samples: **`101`**;
- repeated visible samples: **`100`**;
- repeat policy: omit duplicate terminal neutral endpoint.

Animation's ordering gate is deliberately tied to the exact Rigging evidence rather than to an invented physical-release rule:

- any sample with nonzero lid motion must have the latch lever at exact `50°`;
- no sample may combine nonzero lid motion with a latch angle below the exact Rigging separation threshold;
- latch re-engagement below that threshold is allowed only after the lid is exact neutral again.

This is choreography over the exact retained proof-volume contract, **not** a controller or a physical-mechanism simulation.

## Exact-head validation

Exact workflow:

**`35080442838 — Object animation lid motion evidence` — SUCCESS**

Exact tested head:

**`13069d6b6180e5d9e07009f6a263375ca16ddb60`**

On that exact head:

- Python 3.11 full repository test suite — SUCCESS;
- Python 3.13 full repository test suite — SUCCESS;
- original source-owned lid Rigging donor materialization — SUCCESS;
- original 81-sample lid evidence rebuild — SUCCESS;
- exact Hard-Surface PR #14 ownership donor materialization and SHA verification — SUCCESS;
- exact Rigging PR #15 plan materialization and SHA verification — SUCCESS;
- exact Rigging PR #15 articulation receipt rebuild — SUCCESS;
- 101-sample composed latch/lid sequence build — SUCCESS;
- retained truth-boundary verification — SUCCESS;
- retained artifact upload — SUCCESS.

All inherited exact-head Object workflows triggered on the same head are also green:

- Object hard-surface interface evidence — SUCCESS;
- Object service-module fit evidence — SUCCESS;
- Object rigging attached-module clearance evidence — SUCCESS;
- Object rigging registration-key clearance evidence — SUCCESS.

Current scoped result:

**`PASS_ORDERED_LATCH_RELEASE_LID_CLIP_REENGAGE_SEQUENCE`**

## Retained exact evidence

Artifact:

- ID: **`10440345209`**;
- name: `modular-equipment-case-001-lid-latch-motion-13069d6b6180e5d9e07009f6a263375ca16ddb60`;
- size: **`19,396 bytes`**;
- exact-head binding: `13069d6b6180e5d9e07009f6a263375ca16ddb60`;
- GitHub archive SHA-256: **`02bd6e5c7c62e799f0ccb65ac6f4d5d0e4cf381ba206d0a3f65164641a6f9686`**.

The retained ZIP was independently downloaded and rehashed to that exact digest.

Retained contents include:

- complete `lid-latch-motion-evidence.json` with all 101 samples;
- deterministic nine-panel source-space proof SVG;
- exact Hard-Surface ownership donor contract;
- exact Rigging articulation donor plan;
- independently rebuilt Rigging receipt;
- exact receiving head;
- exact Rigging donor head;
- exact Hard-Surface ownership donor head.

Exact sequence identities:

- sequence-contract digest: **`0a3523cf792264f610881552fd2ebd438aabdfd05e30e92af9dbb33ded1fa2d3`**;
- complete 101-sample geometry-sequence digest: **`f94e2b884b0f383b7147de2307b05d4bb35faa3a0660ea2cf58ce0d6a001709e`**.

## Exact measured motion results

The complete 101-sample evidence reports:

- exact base lid samples copied unretimed: **`81 / 81`**;
- retimed base samples: **`0`**;
- retargeted base samples: **`0`**;
- samples with nonzero lid motion while latch is not at terminal `50°`: **`0`**;
- samples with nonzero lid motion while latch is below Rigging's exact `48.66480246428277°` separation threshold: **`0`**;
- maximum latch-lever rigid pairwise-distance drift: **`0.0 m`**;
- maximum combined lid + lid-owned keeper rigid-relation drift: **`9.3e-13 m`**;
- exact final sequence closure: **`0.0 m`**;
- last-visible -> repeat-neutral displacement: **`0.00233673895 m`**;
- last-visible -> authored terminal-endpoint displacement: **`0.00233673895 m`**;
- repeat-wrap residual against the authored final adjacent step: exact PASS at retained precision.

Exact phase landmarks:

- `t=0.000 s`: lid `0°`, latch `0°`;
- `t=0.125 s`: lid `0°`, latch `25°`;
- `t=0.250 s`: lid `0°`, latch `50°`;
- `t=0.625 s`: lid `50°`, latch `50°`;
- `t=1.000 s`: lid `100°`, latch `50°`;
- `t=1.250 s`: lid `100°`, latch `50°`;
- `t=1.500 s`: lid `100°`, latch `50°`;
- `t=2.250 s`: lid `0°`, latch `50°`;
- `t=2.375 s`: lid `0°`, latch `25°`;
- `t=2.500 s`: lid `0°`, latch `0°`.

## Direct retained visual observation

The retained nine-panel exact source-space Y/Z proof was independently rasterized and inspected after artifact download.

It shows the intended ordered read without hidden interpolation:

- first, the lid stays closed while the front lever moves away from the keeper;
- at exact release-complete state the latch is at `50°` while the lid is still neutral;
- the unchanged lid then progresses through half-open and `100°` peak/hold while the latch remains at `50°`;
- the lid returns completely neutral before latch re-engagement begins;
- the final panel returns both lid and latch to their exact starting transforms.

The visual is a structural motion/choreography observer only. It does not establish real latch capture, physical collision, final presentation or target-engine playback.

## Failure bounds

The new sequence path fails closed on at least:

- host/source identity drift;
- base lid clip ID/digest/duration/sample-rate/sample-count drift;
- Hard-Surface ownership contract digest/head drift;
- keeper or lever component-ownership drift;
- Rigging donor head or articulation-plan digest drift;
- Rigging prerequisite result drift;
- latch terminal-angle drift from the exact `50°` review endpoint;
- any lid motion before latch terminal release;
- any nonzero lid motion while latch is below the exact retained Rigging separation threshold;
- rigid lever-shape drift;
- rigid lid/keeper relation drift;
- endpoint closure drift;
- repeat seam larger/different from the authored final adjacent step.

No fallback rig, guessed pivot, approximate ownership, hidden retime, nearest valid latch angle, widened tolerance or replacement clip is selected.

## Prior Animation evidence preserved

The immediately previous Animation status remains traceable by exact pre-update blob:

**`06555571456266f708445d229fe776853a7cf4d5`**

Its configuration-family result remains valid in its original scope:

- prior exact Animation head `12a350fc38f67348f342cd0e53ed6b16383b789d`;
- `PASS_CONFIGURATION_INVARIANT_LID_MOTION_FAMILY` across `empty / left-only / right-only / bilateral` service-module configurations;
- original base clip identity unchanged by the current latch sequence pass.

The current activation extends choreography; it does not rewrite that historical PASS.

## Truth boundary / non-claims

This PASS establishes only:

> the exact existing Object lid clip can be embedded unchanged between an exact source/Hard-Surface/Rigging-bound latch-release phase and latch-reengage phase, with deterministic sample ordering, exact donor/source identity, rigid component preservation and exact neutral repeat closure.

It does **not** establish:

- a physically real latch hook, catch, retention or release mechanism;
- force, spring, friction, damping, wear, tolerance or engineering behavior;
- full-component collision freedom across the sequence;
- target-engine playback or wall-clock `40 Hz` pacing;
- interpolation between authored samples;
- `AnimationPlayer` acceptance;
- runtime controller, interaction state machine, input handling or gameplay logic;
- gameplay timing/usability;
- audio/VFX synchronization;
- final motion timing, weight, personality, anticipation or secondary motion;
- Art Direction / Visual Observer final acceptance;
- runtime/device performance;
- a generic UC mechanical choreography system;
- Profession Fabric promotion;
- CANON, production readiness, game readiness or Animation mastery.

## Four-root gate

- **Truth:** every promoted statement is bound to exact source, prior clip, Hard-Surface ownership donor, Rigging plan/receipt, exact receiving head, workflow and retained artifact. A Rigging proof-volume separation threshold is not relabelled physical latch truth.
- **Agency / non-domination:** Hard Surface keeps ownership/construction meaning; Rigging keeps pivot/articulation/clearance authority; Animation owns only timing/choreography; Runtime keeps target-host/controller/performance authority; gameplay systems keep interaction logic; Art Direction / Visual Observer keep perceptual acceptance.
- **Continuity:** existing PR #10 was extended rather than duplicated. All donor identities are pinned and retained. The prior configuration-family PASS remains traceable by exact blob/head/artifact identity.
- **Wisdom before speed:** one exact transition ordering problem was solved with the smallest three-phase sequence while preserving the proven lid clip unchanged. No state machine, physics latch, extra animation system or UC abstraction was added prematurely.

## Handoffs

- **Rigging / Deformation — Object PR #15:** Animation consumed the exact `0..50°` review candidate and retained threshold without re-deriving it. Any future pivot/geometry identity change invalidates this sequence evidence and must trigger a rebind.
- **Hard Surface — Object PR #14:** keeper/lever parentage is now consumed exactly. If Hard Surface later authors a real pivot/hook/capture geometry, this sequence becomes historical review evidence until rebound.
- **Visual Observer / QA:** inspect the retained ordered sequence specifically for perceptual discontinuity, implausible lever/lid timing or awkward mechanical read. Do not infer physical latch behavior from the proof SVG.
- **3D Art Director:** judge whether `0.25 s release -> existing 2.0 s lid clip -> 0.25 s re-engage` is directionally useful before Animation changes timing or adds anticipation/overshoot/secondary motion.
- **Runtime / Optimization:** the sequence is deterministic sampled motion only. A later engine/controller pass may consume these exact samples, but this PASS provides no scheduler, state machine, input or performance acceptance.
- **Technical Art / UC Integration:** no shared choreography abstraction is requested. Object-specific meaning stays Object-owned.
- **Capability Cartographer:** this is another evidence-dependency chain example: Hard-Surface ownership -> Rigging bounded articulation -> Animation choreography. The chain is explicit and stale consumer claims should be updated by their owners, not silently rewritten centrally.

## Next gate

1. Prefer **Visual Observer / Art Director review of this exact ordered sequence** before any timing polish.
2. If a concrete timing/weight defect is returned, repair only that defect and rerun this exact donor-bound sequence.
3. If the sequence is directionally accepted and a real product receiver needs it, target-host playback/controller evidence may be a later distinct lane; keep `AnimationPlayer`, state-machine, gameplay and physical-latch claims separate.
4. Do not animate Character without an accepted rig, do not steal Nature/Weather VFX motion, and do not invent motion in Weapon/Armor/Unit/Misc without an animation-ready handoff.
