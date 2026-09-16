# 06 — Rigging & Deformation Specialist Status

Date: 2026-09-16
State: **PASS_BOUNDED_FRONT_LATCH_LEVER_ARTICULATION / PHYSICAL-MECHANISM + ANIMATION + RUNTIME + VISUAL HOLD**

## Current activation

The design constellation and newest specialist lanes were rescanned before changing product code. The previous Animal connected-forelimb Rigging lane is no longer the highest-leverage place to iterate: Geometry PR #7 has already tested a bounded ring-phase candidate against the exact Rigging probe, Organic Form PR #8 has a separate elbow-relief candidate, and both remain behind richer visual review rather than needing another overlapping Rigging rewrite.

A new exact Object handoff appeared instead. Hard-Surface PR #14, head `d3fa10a270faae7925811f44f03381fe5c5d0215`, makes the two existing front-latch ownership relations explicit without moving source geometry: upper `latch_*_keeper` components are lid-owned and lower `latch_*_lever` components are front-service-panel-owned. That PR explicitly leaves pivot/release articulation unproved.

Selected bounded question:

**Can one deterministic bilateral latch-lever rig candidate be derived from the exact existing proof geometry, preserve source and ownership identity, remain rigid about a fixed derived pivot, reproduce the closed keeper/lever overlap, and reach a bounded proof-volume disengagement state without claiming a physical latch mechanism, Animation acceptance or Runtime acceptance?**

Result: **`PASS_BOUNDED_FRONT_LATCH_LEVER_ARTICULATION`**.

`axm-create-me` remains coordination-only. Product implementation and retained evidence live in `mike-axiom-mir/axm-object-design` draft PR #15.

## Constellation / duplication scan

- **Weapon / Armor / Unit / Misc:** no current source-owned articulated requirement justifies a Rigging lane.
- **Character:** current form/shoulder visual gates remain ahead of broad rig authoring; no duplicate character rig lane was opened.
- **Animal:** exact connected-forelimb Rigging PR #6 remains valid. Geometry PR #7 and Organic Form PR #8 already consume that evidence and are waiting visual comparison, so another elbow weighting/constraint iteration now would duplicate active work.
- **Building:** current work remains static hard-surface/material/environment integration; no new articulation handoff.
- **Nature / Weather / Map:** current movement belongs to VFX/environment/runtime or source-topology lanes, not a source-owned physical rig.
- **Object:** Hard-Surface PR #14 created the only new exact Rigging dependency by resolving latch component ownership while explicitly leaving pivot/release motion open. Existing Object lid, module-clearance, Animation and Runtime lanes do not prove latch articulation.

No Animation, Hard-Surface, Runtime, Materials, UC or gameplay lane was rewritten. The new Rigging branch stacks directly on Hard-Surface PR #14.

## Exact source / donor / rig identity

Repository: `mike-axiom-mir/axm-object-design`

Exact host source:

- asset: `modular-equipment-case-001`;
- source path: `assets/modular-equipment-case-001/source.json`;
- source SHA-256: `49b1f9ed9865893d6de6f1ec8f069576732df694853fde4e3fcff366de32644a`;
- latch stations: `x = -0.22 / +0.22 m`;
- source geometry is unchanged by this Rigging lane.

Exact Hard-Surface donor:

- PR #14 — `Hard Surface: make front latch ownership explicit`;
- exact donor head: `d3fa10a270faae7925811f44f03381fe5c5d0215`;
- ownership overlay path: `assets/modular-equipment-case-001/front-latch-ownership-001.json`;
- retained ownership-contract SHA-256: `0702e4180f858d29c42ff8c38a61eaa16278d6848c8ce6f3ecfae172969ca8ae`;
- keeper owner: `lid_shell`;
- lever owner: `front_service_panel`;
- PR #14 proves static ownership/closed proof-volume relations only and does not source-author a pivot, hook or release path.

Current Rigging lane:

- PR #15 — `Rigging: add bounded front latch lever articulation candidate`;
- branch: `studio/rigging-front-latch-articulation-001`;
- exact tested head: `3b667ff5d30c46ec2fe7da7679518970f8610018`;
- base: exact Hard-Surface PR #14 head `d3fa10a270faae7925811f44f03381fe5c5d0215`;
- state: **OPEN / DRAFT / MERGEABLE**;
- articulation plan path: `assets/modular-equipment-case-001/front-latch-articulation-001.json`;
- articulation-plan SHA-256: `81c27ab7b73ed9a43cb3f554b56c3f4294b893712075e33d13f5b02e008455db`.

## Bounded rig candidate

The Object-local `axm.object-front-latch-articulation/v0.1` contract derives one review-only bilateral rigid-lever candidate from exact existing construction evidence:

- moving component: existing `latch_*_lever`;
- fixed comparison component: existing `latch_*_keeper`;
- joint axis: exact `+X`;
- pivot rule: `source_x__panel_negative_y_face__lever_min_z`;
- exact derived pivots: `[-0.22,-0.258,0.2105] m` and `[+0.22,-0.258,0.2105] m`;
- each derived pivot must remain inside the existing static lever/panel overlap proof;
- exact review envelope: `0..50°`;
- representative structural poses: `0 / 25 / 50°`;
- rigid pairwise lever distances and pivot position are checked at every retained sample;
- an analytic monotonic-tail certificate computes the exact angle after which lever maximum Z stays below keeper minimum Z through the `50°` endpoint.

This is intentionally a **derived Rigging review candidate**, not a source-authored physical latch mechanism. The pivot is not allowed to silently become mechanism truth.

## Representative poses / motion boundary

Both latch stations produce the same retained measurements.

| Lever pose | Keeper/lever X overlap | Y overlap | Z overlap / separation | Structural result |
|---:|---:|---:|---:|---|
| `0°` | `0.055 m` | `0.011 m` | `+0.027 m` overlap | closed proof relation reproduced |
| `25°` | `0.055 m` | `0.010344154509 m` | `+0.021057567601 m` overlap | still engaged in proof-volume Z |
| `50°` | `0.055 m` | `0.008499513268 m` | `-0.001572865978 m` overlap = `0.001572865978 m` Z separation | bounded disengaged proof state |

Analytic boundary:

- maximum-Z turning point of the exact rotated lever box: `4.214178522734°`;
- exact keeper-Z separation threshold: **`48.664802464283°`**;
- after that threshold, lever maximum Z is monotonically below keeper minimum Z through the exact `50°` review endpoint;
- bilateral threshold residual: `0.0°`;
- bilateral terminal-separation residual: `0.0 m`;
- bilateral pivot residual: `0.0 m`;
- maximum pivot drift: `0.0 m`;
- maximum rigid pairwise-distance drift: `4.85722573273506e-17 m`, retained as floating-point residue and below the `1e-12 m` structural tolerance.

The retained proof board was directly inspected after artifact download. It is a structural Y/Z bounds sanity view for `0 / 25 / 50°`, not final shaded visual acceptance and not an animation clip.

## Exact-head CI and retained evidence

Dedicated workflow:

- `35079630935 — Object front-latch articulation evidence` — **SUCCESS**;
- exact branch head: `3b667ff5d30c46ec2fe7da7679518970f8610018`;
- Python 3.11 / 3.13 repository compile and tests passed through the dedicated matrix;
- exact retained evidence was built on the branch head rather than a synthetic merge ref.

Same-head inherited workflows also completed successfully:

- Object front-latch ownership evidence;
- Object hard-surface interface evidence;
- Object service-module fit evidence;
- Object service-module registration-key evidence;
- Object service-module fastener-clearance evidence.

Retained artifact:

- name: `modular-equipment-case-001-front-latch-articulation-evidence`;
- artifact ID: `10439936034`;
- size: `6,112` bytes;
- Actions SHA-256: `49f650747c8b5e1a310c2bdcf8b29d7f978d02f2833c25697edac1fc89403695`;
- independently downloaded/rehashed archive SHA-256: `49f650747c8b5e1a310c2bdcf8b29d7f978d02f2833c25697edac1fc89403695`;
- retained `exact-head.txt`: `3b667ff5d30c46ec2fe7da7679518970f8610018`;
- retained ownership donor head: `d3fa10a270faae7925811f44f03381fe5c5d0215`.

The archive retains the exact host source, Hard-Surface ownership overlay, Rigging plan, JSON receipt, donor/head markers and structural pose board.

## What this proves

For the exact pinned Object source and Hard-Surface ownership donor:

- both front latch levers can be evaluated under one bilateral deterministic rigid articulation candidate without changing source geometry;
- the derived pivots remain fixed and bilaterally symmetric;
- lever shape remains rigid within numerical tolerance;
- the exact neutral pose reproduces the pre-existing static keeper/lever overlap;
- the exact box proof geometry reaches keeper-Z separation before the bounded `50°` review endpoint;
- the separation tail is analytically certified over the exact bounded interval rather than inferred only from three screenshots/samples;
- source identity, donor identity and failure bounds are retained and fail closed.

## Truth boundary / non-claims

This activation does **not** establish:

- a source-authored physical latch pivot, hook, catch, spring or retention mechanism;
- force, loads, wear, tolerances, manufacturing validity or engineering safety;
- full lever/panel/fastener/body/lid collision freedom through the arc;
- that `50°` is the correct ergonomic or aesthetic release angle;
- Animation timing, anticipation, easing, sequencing, clip quality or Animation acceptance;
- target-engine joint/controller/state-machine behavior or Runtime acceptance;
- gameplay interaction, input, collision or physics acceptance;
- Art Director / Visual Observer final visual acceptance;
- UC / Profession Fabric promotion;
- CANON, production readiness, game-readiness or Rigging mastery.

If Hard Surface later authors real pivot/capture geometry, this derived candidate must rebind to that new identity. It becomes historical evidence rather than silently surviving as final mechanism truth.

## Previous accepted Rigging state preserved

The earlier Animal connected-forelimb result remains valid in its exact original scope:

- `PASS_EXACT_CONNECTED_FORELIMB_SAMPLED_DEFORMATION`;
- exact Animal Rigging head `f4614ab2f691cd5c5d12b88fabc38ef848acd24e`;
- exact Geometry candidate digest `6e620ce4b1d810b259011d0d22d38ba7c7eea0e2500177df2bf28e08fe1caf6c`;
- exact `-60 / 0 / +60°` sampled deformation envelope.

That lane remains under volume/visual/continuous-motion/Animation/Runtime hold. Newer Animal Geometry/Organic candidates do not erase its historical evidence and are not silently promoted by this Object pass.

The older Object lid-to-registered-module clearance certificate also remains valid in its original scope at exact head `a23ef68147fbea042aab341b62cb0afd77f3a8d1`; this latch lane changes none of its registered module dimensions.

## Root gate

- **Truth:** the fresh Hard-Surface ownership handoff was used directly; the derived pivot is labelled as a candidate rather than disguised as source-authored mechanism truth; exact source/donor/head/artifact identities are retained.
- **Agency / non-domination:** Hard Surface keeps ownership of mechanical geometry/meaning, Rigging owns only the bounded articulation candidate, Animation owns timing/performance, Runtime owns engine execution, and Visual QA / Art Direction retain visual acceptance.
- **Continuity:** PR #15 stacks directly on PR #14, exact identities and hashes are retained, rollback remains trivial, and previous Animal/Object Rigging evidence remains historically intact.
- **Wisdom before speed:** only the newly ready two-latch family was tested. No generic latch framework, UC centralization, full mechanism, controller or animation system was invented from one bounded result.

## Handoffs

- **Hard Surface PR #14:** exact ownership is now consumed by a Rigging candidate. If a real latch pivot/hook/capture mechanism is authored later, provide that new source identity so Rigging can rebind; do not inherit this derived pivot as engineering truth.
- **Animation PR #10:** PR #15 is available as exact structural Rigging evidence only. Do not animate the latches by silently inheriting physical validity, timing or release semantics; pin the exact PR #15 identity if a later bounded timing experiment consumes it.
- **Runtime PR #13:** no latch controller/resource-lifetime/runtime path is granted by this PASS. Runtime remains separate until an accepted articulation representation is intentionally handed off.
- **Visual Observer / Art Direction:** the retained board is structural bounds evidence only. A richer actual-part visual/target-host review is required before judging whether this lever arc reads mechanically plausible or visually good.
- **Capability Cartographer:** this is a second example of explicit domain semantics enabling downstream exact-path work, but one derived latch pivot is not enough to centralize a generic articulation system into UC.

## Next Rigging & Deformation pass

1. Re-scan the constellation first; do not extend Object automatically.
2. If Hard Surface authors real latch pivot/capture geometry, rebind this candidate to that exact identity before any promotion.
3. If Animation wants latch timing, keep Rigging structural validity separate from timing/performance acceptance and preserve the exact source/donor/head chain.
4. For Animal, wait for richer visual evidence on the current Geometry/Organic candidates before changing weights or constraints again.
5. Keep Character broad rigging held until its form/transition visual gates justify a bounded deformation question.
6. Keep VFX/weather motion separate from source-owned physical Rigging unless an explicit deformable structure is introduced.
