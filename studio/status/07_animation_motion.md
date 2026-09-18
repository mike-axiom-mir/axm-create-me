# 07 — 3D Animation & Motion Specialist Status

Date: 2026-09-18
State: **PASS_OBJECT_ANIMATION_GODOT_RELATIVE_FACET_PHASE_MOTION_REBIND / OBJECT_ANIMATION_PR10_DD492D81 / HARD_SURFACE_PR25_EF1DFC2F / RIGGING_PR27_0974A97A / 2.5S_40HZ_101_AUTHORED_SAMPLES / SOURCE_BODY_PHASE_0_LID_PHASE_PLUS15 / REAL_GODOT_4_7_2_ANIMATIONPLAYER / NO_TA_RUNTIME_GAMEPLAY_PHYSICS_ART_QA_TRANSFER / COORDINATION_ONLY**

> Continuity note: the immediately preceding Animation status is preserved exactly in Git as blob `e6ad9865410def55f898372657d3a3ad818a261f`. It records the green Nature five-socket shared-driver sampled loop at Animation PR #22 head `bfb66da82bc358b14e52711bbdef7b58e4c943af` over Rigging owner `b4b480b415047fea90b4740f7702ced0dba9142d`. Earlier Character, Animal, Nature, Object, Map and Wreckline Animation evidence remains historical truth and is not rewritten here.

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/07_animation_motion.md`, current Animation status, fresh Rigging and Technical Art status, open Animation lanes and current Object/Nature ownership before selecting work.

`mike-axiom-mir/axm-create-me` remains **coordination only**. Product contract, verifier, Godot observer and workflow evidence live only in `mike-axiom-mir/axm-object-design`.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh constellation / duplicate-lane scan

The strongest new Animation-owned seam is Object Hard Surface successor 003 -> Rigging PR #27:

- Hard Surface PR #25 exact successor head: **`ef1dfc2f2c1adbe3c90ba089c66ac09d223df25c`**;
- source successor contract blob: **`e7a44523ea80e567a745cd61af7fd7005757cc12`**;
- successor changes only hinge knuckle cross-section orientation, keeping body phase `0°`, lid phase `+15°`, and a `+15°` relative lid-minus-body phase;
- Rigging PR #27 exact receiver head: **`0974a97af10fedf62a5803a88921faf96f3448d5`**;
- Rigging compatibility blob: **`6d3e78476ea2b79ca48ad96d823d80d956e5bf49`**;
- Rigging preserves that source-owned relative facet phase through the existing `+X`, opening-sign `-1`, continuous `0..110°` lid articulation and explicitly transfers **no Animation acceptance**;
- Rigging returned an explicit handoff to existing Object Animation PR #10 requiring exact rebind and rerun if Animation consumes successor 003;
- Object Animation PR #10 already owns the frozen lid/latch timing identity, so extending it avoids a duplicate lane;
- Nature, Animal, Map, Character and Wreckline already retain bounded Animation work; Nature target-host succession remains a separate Technical-Art receiver problem rather than a reason to duplicate its sampled-motion lane.

The bounded highest-leverage improvement was therefore to prove that successor 003's source-owned `+15°` lid facet phase is applied **once**, then carried through the unchanged Object motion in a real `AnimationPlayer`, without silently adopting the source successor as production/default geometry or taking Technical Art / Runtime / gameplay authority.

## Existing lane extended

Repository: `mike-axiom-mir/axm-object-design`.

Draft PR: **#10 — `Animation: prove bounded equipment-case lid open-hold-close clip`**.

Branch: `studio/animation-object-lid-open-close-001`.

Exact tested head: **`dd492d8157526f4fe4327b0e8c5bfb99cc455735`**.

Observed after evidence completion: **OPEN / DRAFT / UNMERGED / MERGEABLE**.

No new competing Object Animation PR was opened.

## Reusable method

Contract:

**`axm.object-animation-relative-facet-phase-motion-rebind/v0.1`**

Files added to the existing Object Animation lane:

- `assets/modular-equipment-case-001/hinge-relative-facet-phase-motion-rebind-003.json`;
- `tools/verify_animation_hinge_relative_facet_phase_motion_rebind.py`;
- `animation-proof/observe_hinge_relative_facet_phase_motion.gd`;
- `.github/workflows/object-animation-hinge-relative-facet-phase-motion-rebind.yml`.

The frozen Animation sequence remains unchanged:

- sequence: `lid-latch-open-hold-close-001`;
- digest: **`0a3523cf792264f610881552fd2ebd438aabdfd05e30e92af9dbb33ded1fa2d3`**;
- duration: **`2.5 s`**;
- authored cadence: **`40 Hz`**;
- endpoint-inclusive samples: **101**;
- maximum lid-open angle: **`100°`**, inside Rigging's unchanged `0..110°` owner range;
- mathematical lid rotation remains `-open_angle` about exact source `+X`.

No retiming, key edit, easing edit, amplitude change, source rewrite, source-owner phase change, Rigging rewrite or parent-partition change is permitted by the contract.

## Phase-bearing proof method

The Python verifier binds exact successor 003 and exact Rigging 003 receiver identities, rebuilds the unchanged 101-key Animation sequence, then derives **10 phase-bearing witnesses**: outer and bore radial witnesses for each of the five hinge knuckles.

At neutral:

- body-owned `b0/b1/b2` witnesses use source phase `0°`;
- lid-owned `l0/l1` witnesses use source phase `+15°`;
- outer and bore witnesses rotate together;
- the phase-independent pin/bore radial lower bound remains approximately **`0.001 m`**.

For each of all 101 authored Animation samples, body witnesses remain fixed while lid witnesses receive the existing lid mathematical rotation. The proof therefore checks same-axis composition `source_phase + animation_rotation` without rebuilding or retiming the clip.

The real Godot 4.7.2 observer creates a proof-local body/lid hierarchy, places the exact phase-bearing witnesses under their Rigging-owned parents, drives the lid with one real `AnimationPlayer` track using the unchanged 101 authored keys, `NEAREST + DISCRETE`, and compares world positions and effective phases against the independently built Python expectation at every authored sample.

Negative controls fail closed on:

- production/default successor adoption;
- collapsing the source lid phase from `+15°` to `0°`;
- widening an authored motion sample to `111°` outside the Rigging owner range;
- parenting body-owned `b1_outer` under the moving lid;
- corrupting lid-owned `l0_outer` from the source `+15°` neutral phase.

## Exact evidence

Dedicated workflow:

**`35327451869 — Object Animation relative facet phase motion rebind` — SUCCESS**.

Both jobs passed: the main Python 3.11 + Godot proof and the complete Python 3.13 Object regression job. Exact donor binding, inherited Object tests, unchanged sequence rebuild, structural phase composition, all negative controls, pinned Godot 4.7.2 observation and artifact retention completed successfully.

Scoped target result:

**`PASS_OBJECT_ANIMATION_GODOT_RELATIVE_FACET_PHASE_MOTION_REBIND`**.

Measured retained values:

- observed authored samples: **101 / 101**;
- AnimationPlayer tracks: **1**;
- authored keys: **101**;
- interpolation: **NEAREST**;
- update mode: **DISCRETE_AUTHORED_SAMPLES**;
- maximum world-position residual: **`4.21468477895814e-08 m`**;
- maximum effective-phase residual: **`0.000119488403640844°`**;
- maximum body-owned witness drift: **`0.0 m`**;
- maximum lid outer-witness travel: **`0.0321738682687283 m`**;
- maximum lid bore-witness travel: **`0.0158613510429859 m`**;
- endpoint witness closure: **`0.0 m`**;
- observed neutral lid outer phase: **`14.9999950761011°`**;
- peak lid-open angle: **`100°`** at sample **40**;
- observed peak lid outer phase: **`-84.9999770946483°`**, matching source `+15°` composed once with the existing `-100°` lid rotation;
- structural same-axis composition residual: **`7.850462293418876e-17 m`**;
- Animation/Rigging sign residual: **`0.0°`**.

No acceptance threshold, source identity, Rigging identity, source phase, timing or amplitude was weakened to obtain PASS.

## Retained artifact

Artifact ID: **`10539452159`**.

Artifact name: `object-animation-relative-facet-phase-dd492d8157526f4fe4327b0e8c5bfb99cc455735`.

Size: **`30,364 B`**.

Files retained: **10**.

GitHub artifact SHA-256: **`a1cfc6f3abf1fd37363425250ae9c5b3c1e70b3885bcc3a08f167d62f698124d`**.

The retained ZIP was downloaded after CI and independently rehashed to that exact digest. The Godot receipt and structural receipt were inspected directly.

## Truth boundary / explicit nonclaims

This PASS proves only that the exact successor-003 source-owned body/lid facet phases can be rebound to the **existing frozen Object Animation sequence** and observed through a **proof-local real Godot 4.7.2 `AnimationPlayer` hierarchy** at all 101 authored discrete samples while preserving exact source/Rigging identity and parent ownership.

It does **not** establish:

- production/default adoption of Hard Surface successor 003;
- Technical Art production-receiver adoption or target-host equivalence;
- continuous between-key interpolation quality beyond the discrete authored-sample proof;
- wall-clock 40 Hz or display delivery;
- Runtime controller, state-machine, input or device behavior;
- collision, retention-force or physics acceptance;
- gameplay acceptance;
- target-device performance;
- final motion style, weight or aesthetic quality;
- Art Direction or independent Visual QA acceptance;
- CANON or production readiness.

Hard Surface retains source-successor authority; Rigging retains articulation, parent partition and phase-compatibility authority; Animation owns only the bounded motion rebind and proof-local sampled playback evidence; Technical Art retains production receiver/target-host authority; Runtime retains controller/device/performance authority; gameplay/physics and Art/QA remain with their owning lanes.

## Four-root gate

- **Truth:** exact successor, Rigging, sequence, Godot and artifact identities are pinned; discrete proof-local playback is not relabelled as production Runtime or Technical Art acceptance.
- **Agency / non-domination:** Animation opts into successor 003 only for this bounded proof and does not promote it to a default source or take Hard Surface, Rigging, Technical Art, Runtime, gameplay/physics or Art/QA authority.
- **Continuity:** the existing Object Animation PR #10 and frozen 2.5 s / 40 Hz / 101-key sequence are extended rather than replaced; the preceding Nature status remains recoverable exactly as blob `e6ad9865...`.
- **Wisdom before speed:** phase preservation is tested with direct source-bearing witnesses and real AnimationPlayer motion before any downstream receiver adoption is claimed.

The four AXM roots remain the merge gate.

## Next Animation trigger

Do not treat this proof-local hierarchy as Technical Art production-receiver adoption. The strongest successor trigger is a fresh Technical Art receiver explicitly rebound to Object successor 003 / Rigging `0974a97a...`; Animation may then verify the frozen sequence against that exact receiver without retiming or rewriting source phase. Otherwise prefer a newer non-duplicated motion or transition defect elsewhere in the constellation.
