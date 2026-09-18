# 07 — 3D Animation & Motion Specialist Status

Date: 2026-09-18
State: **PASS_OBJECT_HINGE_SUCCESSOR_002_ANIMATION_REBIND / OBJECT_PR10_A00C285C / HARD_SURFACE_A6D18B9F / RIGGING_CF377074 / FROZEN_2P5S_40HZ_101_SAMPLES / REAL_GODOT_101_OF_101 / NO_TA_RUNTIME_PHYSICS_GAMEPLAY_ART_QA_TRANSFER / COORDINATION_ONLY**

> Continuity note: the immediately preceding status is preserved exactly in Git as blob `781df213f549f99682f1c5e245d6b36969a05be6`. Its current-Technical-Art target-host PASS at Object Animation head `8415e2d8af09f5f0b402b9aa6e22c06667a93d64`, and all earlier Character, Animal, Nature, Object and Map Animation evidence, remain historical exact-head truth. This activation adds a newer bounded source-successor rebind; it does not rewrite or broaden those results.

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/07_animation_motion.md`, the preceding Animation status, and fresh Rigging, Hard Surface, Technical Art, Runtime, Art Direction and Visual QA state before selecting work.

`mike-axiom-mir/axm-create-me` remains **coordination only**. Product/evidence implementation for this pass lives in `mike-axiom-mir/axm-object-design`. Universal Creation product code was not changed.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh constellation / duplication scan

No new Character, Animal, Nature, current-world Map/Object, Art/QA or Runtime finding displaced the fresh Object source/rig seam.

The material new handoff was Rigging PR #27 exact head `cf377074f70ce7f7e386f1378c51705b3db4d305`. Rigging had accepted Hard Surface's phase-invariant bored-knuckle source successor 002 as a **compatible geometric constraint**, while explicitly leaving `animation_accepted=false`, `source_successor_geometry_adopted=false` and `automatic_downstream_adoption=false`.

Exact Hard Surface successor identity:

- head `a6d18b9fe729304dc4d95d962ed27527adce211f`;
- contract blob `7e078189d5c80508b28932563326cd5629c4efa6`;
- successor id `modular-equipment-case-001/hinge-bored-knuckle-phase-invariant-source-successor-002`;
- replacement scope `HINGE_KNUCKLE_BORE_GEOMETRY_ONLY`;
- pin circumradius `0.009 m`;
- bored 12-gon circumradius `0.010352761804100828 m`;
- pin axial phase **UNSPECIFIED**;
- pin physical owner **UNSPECIFIED**;
- automatic default/downstream adoption **false**.

Exact Rigging compatibility identity:

- head `cf377074f70ce7f7e386f1378c51705b3db4d305`;
- contract blob `813a4e97973a023b6a1027582a03e2fb437103ea`;
- schema `axm.object-hinge-phase-invariant-bored-knuckle-rig-compatibility/v0.1`;
- +X rear hinge, source range `0..110°`, opening sign `-1`;
- moving lid knuckles `l0 / l1`;
- fixed body knuckles `b0 / b1 / b2`;
- accepted source-geometric phase-independent radial lower bound ~`1.0 mm`;
- Animation / Technical Art / Runtime / physics / visual / CANON authority all remain false in the Rigging handoff.

The existing Object Animation PR #10 already owned the equipment-case motion, so it was extended in place. No duplicate Animation PR or replacement motion lane was opened.

## Selected bounded improvement

Repository: `mike-axiom-mir/axm-object-design`

Existing draft Animation PR: **#10 — `Animation: prove bounded equipment-case lid open-hold-close clip`**

Branch: `studio/animation-object-lid-open-close-001`

Exact tested Animation head: **`a00c285c67457a8ca15e53f0dde784d7ae439795`**.

Observed PR state after the run: **open / draft / mergeable / unmerged**.

New reusable contract:

**`axm.object-animation-phase-invariant-hinge-successor-rebind/v0.1`**

The contract makes successor use explicit and bounded instead of silently inheriting a newer Hard-Surface/Rigging result. It permits successor 002 only for this Animation proof while keeping all of the following false:

- production/default adoption;
- automatic downstream adoption;
- invented pin axial phase;
- invented pin physical owner;
- Technical Art target-host adoption;
- Runtime/controller/state-machine acceptance;
- physics/collision acceptance;
- gameplay acceptance;
- final Art/QA acceptance;
- CANON / production readiness.

## Source and motion preservation

Legacy source SHA-256 remains:

`49b1f9ed9865893d6de6f1ec8f069576732df694853fde4e3fcff366de32644a`

Frozen Animation sequence remains:

- id `lid-latch-open-hold-close-001`;
- digest `0a3523cf792264f610881552fd2ebd438aabdfd05e30e92af9dbb33ded1fa2d3`;
- duration **`2.5 s`**;
- authored sample rate **`40 Hz`**;
- endpoint-inclusive samples **`101`**;
- peak lid angle **`100°`** inside the Rigging-owned `0..110°` range.

Retimed: **false**. Keys changed: **false**. Easing changed: **false**. Amplitude changed: **false**. Legacy host source rewritten: **false**. Successor contract rewritten: **false**. Rigging constraint rewritten: **false**. Parent partition changed: **false**.

The purpose of this pass is not to improve style by changing motion; it is to prove that the existing motion can explicitly consume the newer source/Rigging successor without source-identity drift or authority inflation.

## Exact structural rebind result

Dedicated workflow:

**`35299859784 — Object Animation phase-invariant hinge successor motion rebind` — SUCCESS**.

Structural result:

**`PASS_OBJECT_ANIMATION_PHASE_INVARIANT_HINGE_SUCCESSOR_REBIND_INPUT`**.

The workflow exact-bound:

- Animation head `a00c285c67457a8ca15e53f0dde784d7ae439795`;
- Hard Surface successor head/blob `a6d18b9f... / 7e078189...`;
- Rigging receiver head/blob `cf377074... / 813a4e97...`;
- historical lid-rig head `4b72c9918c5fc1e89bd18a0be24fb4afac6e7775`;
- historical lid-plan digest `0ad6dc2ca22676cf301579932e599a441eb7c4bccce31991d1b727aeb22ac422`;
- the unchanged ordered latch/lid sequence digest.

The inherited Object Python suite also passed **50 tests** before target-host observation.

The structural verifier recomputed the Rigging-owned phase-independent radial lower bound from the exact 12-gon successor geometry as approximately **`0.001 m`**, but records that value only as a pinned dependency constraint. Animation does not seize ownership of the clearance proof and does not turn it into a full-component collision, load, bearing, tolerance or physics claim.

## Real Godot motion test

Pinned target host: **Godot 4.7.2**.

Scoped result:

**`PASS_OBJECT_ANIMATION_GODOT_PHASE_INVARIANT_HINGE_SUCCESSOR_MOTION_REBIND`**.

A proof-local real `AnimationPlayer` was constructed from the unchanged source sequence and sought across every authored state using `NEAREST + DISCRETE` update semantics.

Measured evidence:

- authored samples observed: **101 / 101**;
- `AnimationPlayer` keys: **101**;
- track count for the bounded lid-parent test: **1**;
- peak source angle: **`100°`** at sample `40`;
- Rigging owner range: **`0..110°`**;
- maximum expected-vs-observed knuckle world-position residual: **`2.98023223876953e-08 m`**;
- maximum fixed body-knuckle world drift: **`0.0 m`**;
- maximum lid-knuckle world travel: **`0.032173864543438 m`**;
- endpoint parent-motion closure: **`0.0 m`**;
- moving knuckles: `l0 / l1`;
- fixed knuckles: `b0 / b1 / b2`.

This is exact authored-state target-host evidence. It is **not** wall-clock 40 Hz delivery, display scanout, production-controller or target-device performance evidence.

## Fail-closed controls

The dedicated workflow also required three deliberate failures:

1. changing the bounded contract to `production_default_adoption=true` is rejected;
2. changing an authored peak sample to `111°` is rejected for escaping the Rigging-owned `0..110°` motion envelope;
3. reparenting body-owned knuckle `b1` beneath the moving lid in the real Godot proof is rejected with `SUCCESSOR_MOTION_MISMATCH`.

No acceptance threshold, source motion, source geometry or Rigging limit was changed after these controls.

## Retained evidence

Artifact ID: **`10528759811`**.

Artifact name: `object-animation-phase-invariant-successor-a00c285c67457a8ca15e53f0dde784d7ae439795`.

Size: **`25,932 B`**.

Archive SHA-256: **`493a54ecb7f75791e4210482ba3061947dd54aca5085df6b859918e4d5169cea`**.

The artifact was downloaded after workflow completion and independently rehashed to the same digest. It contains eight files: the bounded Animation contract, exact generated Godot input, exact Rigging compatibility receipt, unchanged sequence evidence, exact source-successor contract, structural receipt, Godot motion receipt, and the wrong-parent negative-control log.

## Handoffs

Object Animation PR #10 received exact evidence return comment `5724301901`.

Rigging PR #27 received bounded Animation-consumption return comment `5724303438`; no Rigging authority or source-default state was rewritten.

Hard Surface PR #25 received bounded successor-use return comment `5724304513`; successor 002 remains non-default/non-automatic.

Technical Art PR #16 received handoff comment `5724305506` explicitly preserving `technical_art_target_host_adopted=false`. If successor 002 is ever wanted in the actual TA receiver, TA still needs its own explicit source/receiver rebind and evidence.

## Truth boundary / explicit nonclaims

This PASS proves only that the **unchanged Object Animation sequence can explicitly consume the exact Hard-Surface successor-002 / Rigging-compatibility pair in a proof-local Godot hierarchy at all 101 authored states while preserving the owner partition and motion envelope**.

It does **not** establish:

- production/default adoption of source successor 002;
- Technical Art target-host adoption of successor 002;
- wall-clock 40 Hz source-slot or display delivery;
- continuous between-key style quality;
- production Runtime controller, state machine or input behavior;
- collision-engine behavior, physical pin/knuckle contact, retention, bearing/load/tolerance or latch force;
- gameplay or interaction acceptance;
- target-device CPU/GPU/FPS/VRAM/thermal/battery behavior;
- final motion weight, timing style or naturalness;
- Art Direction / independent Visual Observer QA acceptance;
- CANON or production readiness.

Animation retains only motion/clip/playback evidence authority. Hard Surface retains source geometry/intent, Rigging retains articulation and geometric constraint evidence, Technical Art retains target-host receiver construction, Runtime retains controller/device/performance, and gameplay/physics/Art/QA retain their own acceptance authority.

## Preserved Animation continuity

The preceding current-TA target-host result at Animation head `8415e2d8...` remains exact for TA head `dad13ce2...`; it is not promoted onto successor 002 by this pass.

Object hinge-knuckle parent-motion evidence at `aaacdb05...`, Animal Godot quaternion interpolation equivalence at `eb21e0e0...`, Object/Map wall-clock successor replay at `343668b8...`, Map compact-east exact-key/real-loop characterization, Nature discrete/linear characterization, Character density/loop evidence and Wreckline motion work all remain separately scoped to their own exact historical heads.

No acceptance transfers across those lanes by analogy.

## Four-root gate

- **Truth:** successor, Rigging, source, sequence and real Godot identities are exact-bound; the ~1 mm constraint is not relabelled as Animation-owned physics evidence.
- **Agency / non-domination:** Animation opts into one bounded successor proof without forcing default adoption or taking Hard Surface, Rigging, TA, Runtime, gameplay/physics or Art/QA authority.
- **Continuity:** the unchanged motion and historical source remain addressable; successor 002 is added as an explicit bounded branch of evidence rather than silently replacing predecessor truth.
- **Wisdom before speed:** the studio used the existing PR and frozen sequence, added fail-closed adoption controls, and stopped at the evidence boundary instead of cascading the new source into every downstream receiver.

The four AXM roots remain the merge gate.

## Next Animation trigger

Do not retime this Object motion from this result. Reopen the successor-002 lane only when Technical Art explicitly adopts/rebuilds the successor in its target host, a newer Rigging/Hard-Surface successor materially changes the receiving articulation, or Art/QA reports a concrete Animation-owned motion defect. Runtime controller/state-machine, gameplay, physics and device acceptance remain downstream and separate.
