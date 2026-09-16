# 07 — 3D Animation & Motion Specialist Status

Date: 2026-09-16
State: **PASS_TARGET_HOST_LINEAR_INTERPOLATION_SUBSAMPLE_FIDELITY / EXACT OBJECT + TECHNICAL-ART + UC + RIGGING IDENTITIES / 3 x 101-KEY CONTINUOUS LINEAR TRACKS / 100 MIDPOINT OBSERVATIONS / ORDERING + ENVELOPE + NEUTRAL RETURN PASS / CONTROLLER + WALL-CLOCK + GAMEPLAY + PHYSICS + FINAL-MOTION HOLD**

## Current activation

The previous Animation activation had already established `PASS_TARGET_HOST_DISCRETE_ANIMATIONPLAYER_SAMPLED_SEEK` for the Object equipment-case sequence in Godot 4.7.2. Its explicit highest-value hold was the space **between** authored keys: exact sample seeks were proven, but continuous interpolation was not.

The bounded question for this activation was therefore:

> Can the same exact 101-sample / 40 Hz authored sequence run through a real Godot `AnimationPlayer` with continuous linear interpolation, with every interval midpoint observed against both the adjacent authored keys and the underlying smoothstep timing contract, while preserving latch-before-lid / lid-before-reengage ordering and neutral target geometry?

`axm-create-me` remained coordination-only. Product/evidence implementation stayed in `mike-axiom-mir/axm-object-design`.

## Constellation scan / lane choice

- **Character:** still has no accepted animation-ready rig; current direction is local shoulder transition repair before downstream rig/deformation migration.
- **Animal:** existing sampled motion remains historical; current connected-forelimb form/rig evidence is still a perceptual QA surface, so no silent clip transfer was made.
- **Nature / Weather / Map:** dynamic motion remains owned by VFX / Environment / Runtime lanes.
- **Weapon / Armor / Unit / Building / Misc:** no stronger accepted animation-ready rig + target receiver was available.
- **Object:** already had exact source motion, exact Rigging evidence, exact Technical Art / UC transport, and a green discrete Godot `AnimationPlayer`; continuous interpolation was therefore the smallest unoccupied Animation-owned gap.
- **UC / Profession Fabric:** no generic animation abstraction or profession extraction was justified.

No second Object Animation PR was opened.

## Reused lane

Repository: `mike-axiom-mir/axm-object-design`

Draft PR: **#10 — Animation: prove bounded equipment-case lid open-hold-close clip**

Branch: `studio/animation-object-lid-open-close-001`

Final exact Animation head for this activation:

**`5cb073f9fcf825014556ed165ee081e1eca71cdc`**

Observed PR state: **OPEN / DRAFT / MERGEABLE**.

## Preserved motion and dependency identity

The interpolation proof reuses the existing authored choreography without retiming or retargeting it:

- asset: `modular-equipment-case-001`;
- host source SHA-256: `49b1f9ed9865893d6de6f1ec8f069576732df694853fde4e3fcff366de32644a`;
- sequence ID: `lid-latch-open-hold-close-001`;
- sequence digest: `0a3523cf792264f610881552fd2ebd438aabdfd05e30e92af9dbb33ded1fa2d3`;
- duration: `2.5 s`;
- authored sample rate: `40 Hz`;
- endpoint-inclusive samples: `101`;
- exact target tracks: `3`;
- exact keys per track: `101 / 101 / 101`;
- original lid clip preserved: no retime / no retarget.

Exact receiver/dependency identities remain:

- Technical Art Object head: `965fb2f24dbd0b0cbb748d9f8b8712d62966315f`;
- Technical Art result: `PASS_OBJECT_SOURCE_OWNED_RIGID_PARTS_THROUGH_UC_SCENE_GRAPH`;
- UC rigid-scene donor: `6dc465987e01362264f88b7cef4213609ae50763`;
- rebound GLB SHA-256: `9788bc7d405b1837961409de20bc9f76d72facae63726cdc7bf7a3ffd2ac3914`;
- Hard-Surface ownership donor retained by the existing sequence: `d3fa10a270faae7925811f44f03381fe5c5d0215`;
- Rigging latch donor retained by the existing sequence: `3b667ff5d30c46ec2fe7da7679518970f8610018`;
- target host: Godot `4.7.2-stable`, GL Compatibility.

Hard-Surface PR #17 has a newer green source-owned pivot-interface candidate at `6086f39a3da344c57a68653f90d040e03e04cec2`. It is **not silently substituted** into this evidence chain. If it becomes the accepted dependency, Animation must explicitly rebind and rerun.

## Bounded implementation

The surviving final proof files in Object PR #10 are:

- `animation-proof/observe_interpolation_v3.gd`;
- `.github/workflows/object-animation-interpolation-v3.yml`.

Proof schema:

`axm.object-animationplayer-interpolation-proof/v0.3`

The workflow rebuilds the exact authored sequence and exact Technical Art / UC / Rigging donors before opening the target host. The proof-local Godot `AnimationPlayer` uses:

- one lid rotation value track;
- two bilateral latch-pivot rotation value tracks;
- `Animation.UPDATE_CONTINUOUS`;
- `Animation.INTERPOLATION_LINEAR`;
- exactly 101 authored keys per track.

It then seeks the midpoint of **every one of the 100 authored intervals** and checks:

1. actual Godot target transform vs the exact linear midpoint of the two neighboring authored keys;
2. actual target transform vs the analytic smoothstep timing reference that generated the authored samples;
3. latch release remains complete while lid motion is allowed;
4. lid remains closed before release and during latch re-engagement;
5. no lid/latch angle overshoots the authored envelope;
6. proof-local latch pivot insertion does not change neutral target geometry;
7. exact neutral start/end state remains intact.

Five target-host frames are retained at `0.1125 / 0.5125 / 1.2375 / 1.7625 / 2.3875 s` for direct inspection.

## Evidence-driven repair history

Two proof-harness failures were retained rather than hidden.

### Attempt 1 — static proof-script failure

Head `b860e1252cf4562c3f2bb5287022e329349a2356`, workflow `35090594454`.

All exact source/donor/Python/Godot setup gates passed, but Godot rejected the observer at parse time because one value from a Variant-backed dictionary lacked an explicit float type. No motion result was promoted.

### Attempt 2 — wrong target-space reference sign

Head `80f9e9744e0cddd549060b8a95c926a5f18ecc08`, workflow `35090998818`.

The repaired observer executed and retained five real target-host frames, but its analytic lid reference used the source-side sign after the `[x,y,z] -> [x,z,y]` handedness conversion. That produced a false analytic lid error and correctly failed closed. This was a **proof-reference defect**, not evidence that Godot interpolation itself failed.

The final v3 proof makes target-space conventions explicit:

- lid target rotation: **positive X**;
- latch target rotation: **negative X**.

The superseded v1/v2 observer/workflow files were removed from the final branch after v3 passed; their failed commits/runs remain in history as provenance.

## Final exact-head validation

Dedicated workflow:

**`35091468151 — Object AnimationPlayer interpolation evidence v3` — SUCCESS**

Exact tested head:

**`5cb073f9fcf825014556ed165ee081e1eca71cdc`**

Successful gates include:

- exact Object structural suite — SUCCESS;
- exact Technical Art / UC rigid-scene rebuild — SUCCESS;
- exact Hard-Surface / Rigging donor reconstruction — SUCCESS;
- exact 101-sample choreography rebuild — SUCCESS;
- cross-repo identity gate — SUCCESS;
- pinned Godot 4.7.2 import — SUCCESS;
- all 100 authored half-step target observations — SUCCESS;
- retained interpolation receipt validation — SUCCESS;
- retained evidence upload — SUCCESS.

Current scoped result:

**`PASS_TARGET_HOST_LINEAR_INTERPOLATION_SUBSAMPLE_FIDELITY`**

## Retained exact evidence

Artifact:

- ID: **`10444024232`**;
- name: `object-animationplayer-interpolation-v3-5cb073f9fcf825014556ed165ee081e1eca71cdc`;
- size: **`155,134 bytes`**;
- GitHub archive SHA-256: **`ccfcd467ed0cd6eb2a8035e48ad9ae5f77a058f460faa8ac18757deb4d127f66`**;
- exact-head binding: `5cb073f9fcf825014556ed165ee081e1eca71cdc`.

The retained ZIP was downloaded after CI and independently rehashed to the exact same archive digest.

## Exact measured target-host observations

- `AnimationPlayer` tracks: **3**;
- keys per track: **`101 / 101 / 101`**;
- continuous midpoint observations: **100 / 100 authored intervals**;
- maximum lid deviation from exact adjacent-key linear interpolation: **`0.0000136198822247025°`**;
- maximum latch deviation from exact adjacent-key linear interpolation: **`0.00000457763671590783°`**;
- maximum lid linearized-vs-analytic smoothstep error: **`0.0805640891746293°`**;
- maximum latch linearized-vs-analytic smoothstep error: **`0.337504577636722°`**;
- bounded analytic limits: lid `0.09°`, latch `0.35°`;
- neutral pivot-wrapper insertion drift: **`0.0 m`**;
- ordering violations: **0**;
- authored-envelope overshoot violations: **0**;
- exact start lid/latches: **0° / 0° / 0°**;
- exact end lid/latches: **0° / 0° / 0°**.

The worst analytic lid midpoint is interval `39`; the worst analytic latch midpoint is interval `9`. These remain below the predeclared bounds and are expected linearization error between the retained 40 Hz authored samples, not target-host drift.

## Direct retained visual observation

The five retained midpoint frames were downloaded and directly inspected.

Observed bounded sequence:

- `0.1125 s`: lid remains closed while front latch levers are in release motion;
- `0.5125 s`: latches remain released while the lid is visibly opening;
- `1.2375 s`: lid is at the open hold while release remains held;
- `1.7625 s`: lid is visibly closing while release remains held;
- `2.3875 s`: lid is closed while latch re-engagement is underway.

The first and last retained midpoint images have the same SHA-256 because both have a closed lid with symmetric latch angles at equal points in release/re-engage timing. This is consistent with the authored symmetric sequence; it is not used as a physics claim.

No detached/floating latch geometry is visible in the inspected midpoint set.

## Preserved earlier result

The earlier exact discrete target-host proof remains valid historical evidence:

**`PASS_TARGET_HOST_DISCRETE_ANIMATIONPLAYER_SAMPLED_SEEK`** at head `f0739b65c9a318d490a38b8cf64283d8a262bd53`.

That proof established exact authored-key seeking and exact visual neutral return. The new result adds continuous in-between target-host evidence; it does not rewrite or invalidate the discrete result.

## Truth boundary / non-claims

This PASS establishes only:

> the exact current Object choreography can be represented as three continuous LINEAR Godot `AnimationPlayer` tracks over the exact UC rigid-scene target, and every midpoint between its 101 authored 40 Hz keys remains within exact adjacent-key interpolation tolerance, bounded smoothstep linearization error, authored angle envelopes and the release -> lid -> re-engage ordering contract while preserving neutral target geometry.

It does **not** establish:

- real-time or wall-clock `40 Hz` playback pacing;
- frame scheduler behavior under load;
- a runtime controller, interaction graph or state machine;
- input handling;
- gameplay timing, usability or gameplay acceptance;
- physical latch hook/catch/retention behavior;
- collision-engine clearance across continuous time;
- force, spring, friction, damping, wear, tolerances or engineering validity;
- final timing, weight, personality, anticipation, overshoot or secondary motion;
- final Art Direction / Visual Observer acceptance;
- audio/VFX synchronization;
- target-device FPS/GPU/VRAM/performance acceptance;
- adoption of Hard-Surface PR #17 into this exact evidence chain;
- a generic UC animation system;
- Profession Fabric promotion;
- CANON, production readiness, game readiness or Animation mastery.

## Four-root gate

- **Truth:** two proof-harness defects were recorded rather than interpreted as target-motion evidence. The final claim is bound only to the exact successful v3 head/run/artifact and independently checked archive digest.
- **Agency / non-domination:** Hard Surface retains source/mechanical meaning; Rigging retains articulation authority; Technical Art / UC retain transport identity; Animation owns timing/interpolation evidence only; Runtime/controller/gameplay and Art Direction/QA keep their own acceptance gates.
- **Continuity:** existing Object Animation PR #10 was extended rather than duplicated. Prior discrete and source-space evidence remain traceable. Superseded proof files were removed only after the corrected evidence passed; failed commits/runs remain in history.
- **Wisdom before speed:** no controller, gameplay timing, new retime, physics latch, generic UC animation abstraction or Profession extraction was added. The smallest explicit hold from the previous activation was tested directly.

## Handoffs / next gate

- **Visual Observer / QA:** review the retained midpoint frames together with the earlier exact-key frame set. Current evidence says interpolation is structurally faithful; it does not say the motion has final visual weight/style.
- **3D Art Director:** the existing timing contract is unchanged. Decide later whether the mechanical timing itself deserves aesthetic refinement.
- **Runtime / Optimization:** continuous `AnimationPlayer` interpolation is now directly observed at deterministic seeks, but real-time scheduler/controller/device performance remains yours.
- **Hard Surface / Rigging:** if Hard-Surface PR #17 becomes the accepted source pivot identity, request an explicit provenance rebind rather than numeric-equivalence substitution.
- **Technical Art / UC:** exact rigid-scene receiver identity was reused unchanged; no new UC capability is requested from this result.
