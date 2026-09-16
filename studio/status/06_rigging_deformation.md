# 06 — Rigging & Deformation Specialist Status

Date: 2026-09-16
State: **PASS_SCOPED_OBJECT_LID_ARTICULATION / 111-SAMPLE HINGE ENVELOPE GREEN / ANIMATION + RUNTIME + FULL-COLLISION HOLD**

## Current activation

The highest-leverage unoccupied Rigging-owned gap moved from the existing Animal weighting lane to the new source-owned manufactured object in `mike-axiom-mir/axm-object-design`.

Hard-Surface PR #2 had just established `modular-equipment-case-001` with an explicit five-knuckle rear hinge and deliberately left lid articulation / hinge sweep untested. That is a direct Rigging handoff with exact source geometry and mechanical identity already available.

The existing Animal Rigging PR #2 is **not** duplicated or retuned in this activation. Its `ease-out-power-0p75-v1` candidate remains numerically green but still awaits the requested direct Visual Observer / Art Director shaded/perspective A/B review. Character's current A-rest body still exposes flex zones only as untested handoff coordinates. Nature deformation remains VFX-owned. Wreckline's current hard-surface recovery remains blocked on historical provider closure. No competing Object articulation lane existed.

The bounded choice was therefore:

**prove one exact rigid lid hinge envelope in the source-owning Object repository, without introducing animation timing, controller/runtime logic, gameplay, or a shared UC articulation framework.**

`axm-create-me` remains coordination-only.

## Constellation / overlap scan

Current design-repo readiness checked before acting:

- **Weapon:** no open implementation lane competing for Rigging.
- **Armor:** no open implementation lane competing for Rigging.
- **Character:** PR #2 has a neutral A-rest form study; its 13 flex zones are explicitly not deformation-tested and its own handoff keeps Rigging downstream of visual/topology review.
- **Unit:** no open implementation lane competing for Rigging.
- **Animal:** Organic Form, Rigging, Geometry and Animation lanes are already active. Rigging weighting is waiting on visual A/B; Animation deliberately pins the already-proven smoothstep baseline rather than accepting the newer weighting candidate silently.
- **Building:** no open implementation lane competing for Rigging.
- **Nature:** active dynamic response belongs to VFX / Atmosphere; Materials and procedural lanes are separate.
- **Weather:** active seeded-field procedural lane; no articulation ownership conflict.
- **Map:** active Environment / Runtime scene lanes; no rig ownership conflict.
- **Object:** Hard-Surface PR #2 exposes an exact source-owned hinge and explicitly leaves articulation untested. This is the selected receiving lane.
- **Misc:** no open implementation lane competing for Rigging.

A constellation-wide PR search for `articulation` found only the existing Animal Animation loop; there was no competing Object articulation implementation.

## Exact source and receiving identity

Repository:

`mike-axiom-mir/axm-object-design`

Source owner / prerequisite:

- Hard-Surface PR: **#2 — `Hard Surface: add first explicit object interface proof`**;
- prerequisite branch: `studio/hard-surface-object-interface-001`;
- exact prerequisite head: `32027eabb531dfe22668e9161506077442267099`;
- source asset: `modular-equipment-case-001`;
- source schema: `axm.object-hard-surface/v0.1`;
- exact source SHA-256: `49b1f9ed9865893d6de6f1ec8f069576732df694853fde4e3fcff366de32644a`.

Selected Rigging lane:

- draft PR: **#3 — `Rigging: prove bounded equipment-case lid articulation`**;
- branch: `studio/rigging-object-lid-articulation-001`;
- exact tested head: `f2fa1d65f8c2e919f2960e6ffa0962917f65f75d`;
- base remains the exact Hard-Surface PR #2 branch/head above;
- PR state after evidence: **OPEN / DRAFT / MERGEABLE**.

No source geometry, dimensions, socket descriptors, hinge knuckle spacing, pin dimensions, or Hard-Surface ownership is rewritten by Rigging.

## Exact hinge identity preserved

The existing source declares:

- hinge axis: `[1, 0, 0]`;
- derived hinge origin: `[0.0, 0.252, 0.306] m`;
- knuckle radius: `0.021 m`;
- pin radius: `0.009 m`;
- pin length: `0.70 m`;
- five alternating source knuckles: `b0 / l0 / b1 / l1 / b2`;
- lid-owned moving knuckles: `l0 / l1`;
- source minimum axial knuckle clearance: `0.010 m`.

Rigging adds one bounded articulation plan:

- schema: `axm.object-articulation-plan/v0.1`;
- joint: `rear-lid-hinge-001`;
- fixed component: `body_shell`;
- rigid moving component: `lid_shell`;
- exact axis source: `hinge.axis`;
- opening rotation sign: `-1` around the source +X axis;
- bounded open-angle envelope: `0..110°`;
- retained representative poses: `0 / 30 / 60 / 90 / 110°`;
- dense verification step: `1°`;
- exact plan digest: `0ad6dc2ca22676cf301579932e599a441eb7c4bccce31991d1b727aeb22ac422`.

Explicit assumptions are retained in the contract rather than hidden:

- `latches_disengaged_not_articulated`;
- `rigid_body_and_lid_shells`;
- `body_shell_separation_only_not_full_component_collision`.

## Bounded articulation method

Because this exact hinge rotates only around X and the source body/lid shell X spans remain coincident, body-vs-lid-shell overlap can be tested exactly for each sampled pose in the YZ cross-section using a separating-axis test over:

- fixed body Y/Z axes;
- rotated lid local Y/Z axes.

For every sampled pose the verifier also checks that all pairwise distances among lid-shell cross-section corners remain unchanged within `1e-9 m`, proving the receiving lid transformation is rigid inside this contract.

The hinge origin is source-derived and fixed; sampled hinge-origin drift is recorded separately.

This is deliberately not called a continuous collision solver. The envelope is sampled at every integer degree from `0` through `110`, and the truth boundary says exactly that.

## Representative pose and motion-boundary evidence

Exact retained result:

`PASS_SCOPED_LID_ARTICULATION`

Full sampled envelope:

- angle range: `0..110°`;
- step: `1°`;
- sampled poses: **111**;
- sampled failures: **0**;
- minimum body-shell separating margin: **`0.012 m`**;
- minimum-margin angle: **`0°`**;
- maximum lid pairwise-rigidity drift: **`0.0 m`**;
- maximum hinge-origin drift: **`0.0 m`**;
- exact lid-owned coaxial moving knuckles: `l0 / l1`.

Representative retained poses:

| Open angle | Body-shell separating margin | Lid rigidity drift | Result |
|---:|---:|---:|---|
| `0°` | `0.012000000000 m` | `0.0 m` | PASS |
| `30°` | `0.017196152423 m` | `0.0 m` | PASS |
| `60°` | `0.019392304845 m` | `0.0 m` | PASS |
| `90°` | `0.018000000000 m` | `0.0 m` | PASS |
| `110°` | `0.021742397445 m` | `0.0 m` | PASS |

The neutral minimum equals the exact authored body/lid split gap of `0.012 m`; the verifier does not silently replace that source relationship with a larger fabricated clearance.

## Exact-head CI and retained artifact

Both workflow families are green on exact Rigging head `f2fa1d65f8c2e919f2960e6ffa0962917f65f75d`:

- `Object rigging articulation evidence` run **35055773852** — **SUCCESS**;
  - Python 3.11 compile: PASS;
  - Python 3.11 full repository tests: PASS;
  - exact articulation evidence build: PASS;
  - exact artifact upload: PASS;
  - Python 3.13 compile: PASS;
  - Python 3.13 full repository tests: PASS.
- inherited `Object hard-surface interface evidence` run **35055773844** — **SUCCESS**, so the stacked Rigging changes do not regress the source Hard-Surface contract.

Retained Rigging artifact:

- name: `modular-equipment-case-001-articulation-evidence`;
- artifact ID: **10430217601**;
- workflow head binding: `f2fa1d65f8c2e919f2960e6ffa0962917f65f75d`;
- size: `13,583` bytes;
- GitHub archive digest: `sha256:9dc4ea29c59bed9740a8a69fb0107b9ad6391974a5fa8b53f6f056314ea7c739`.

The retained ZIP was downloaded and independently rehashed to the same SHA-256. Its exact summary reports the source SHA, plan digest, `111` sampled poses, exact representative margins and scoped PASS above.

## Direct representative-pose observation

The retained `articulation_side_proof.svg` was rasterized and directly inspected.

Within this side/YZ structural proof scope:

- the body shell remains fixed across all five retained panels;
- the lid reads as one rigid part rotating about the same red rear-hinge point;
- the `30°`, `60°`, `90°` and `110°` poses visibly progress through the declared open range rather than translating independently;
- the retained representative poses show visible shell separation throughout;
- no claim is made about unshown latch bodies, full accessory/component collision, shaded mechanical quality, or animation feel.

This is representative **pose evidence**, not animation performance or target-runtime playback.

## What this proves

For the exact Hard-Surface source bytes, exact source-derived rear hinge, exact bounded articulation plan and every integer-degree sample from `0..110°`:

- `lid_shell` remains rigid;
- `body_shell` remains fixed;
- the sampled body/lid-shell cross-sections remain separated;
- source-owned lid knuckles `l0 / l1` stay bound to the declared coaxial articulation identity;
- source and articulation identities fail closed if silently changed.

That is enough to accept this as a scoped mechanical articulation proof.

## Truth boundary / non-claims

This activation does **not** establish:

- mathematically continuous collision freedom between the integer-degree samples;
- latch disengagement mechanics or latch articulation;
- full-component self-collision involving latches, guards, service panels, sockets or attachments;
- hinge engineering load, strength, wear, tolerance stack, friction, damping, spring or motor behavior;
- physical simulation;
- animation timing, ease, recoil, acting, motion style or final animation quality;
- exported skeletal/constraint data;
- target-engine/controller/state-machine playback;
- runtime cost or performance;
- gameplay interaction or acceptance;
- Art Director / Visual Observer aesthetic acceptance;
- a generic mechanical-rig system, UC capability or Profession Fabric promotion;
- CANON, merge authority, production readiness or Rigging mastery.

No animation or runtime acceptance is inherited from a structural hinge PASS.

## Previous Animal Rigging lane retained

The previous Animal Rigging work remains valid and unchanged rather than being overwritten by this new mechanical domain:

- PR #2 exact head: `04760112deb81a8d145226fe7ee02923107c9916`;
- exact rig-plan digest: `b1f39ef8cd127edf9288b89ebd1f1fc14e6a3ceb8b0db58fa0ba9b12bc892aa8`;
- `ease-out-power-0p75-v1` candidate still returns `PASS_SCOPED_WEIGHTING_REFINEMENT` numerically;
- worst minimum triangle-area ratio improves `0.312168334 -> 0.460882632`;
- worst maximum edge ratio improves `1.697996 -> 1.484306669`;
- worst minimum edge ratio improves `0.639425274 -> 0.686924781`;
- this still lacks direct shaded/perspective visual acceptance and is **not** promoted by the Object hinge result.

The old Animal detached-paw transform-scope defect remains repaired and independently rechecked; the current Animal stop condition remains visual A/B of the weighting candidate before further Rigging tuning.

## Root gate

- **Truth:** exact Object source SHA, exact prerequisite/head identities, exact plan digest, 111 sampled poses, CI runs, retained artifact and non-claims are separately recorded. Integer-degree sampling is not relabelled as continuous collision proof.
- **Agency / non-domination:** Hard Surface keeps source/interface ownership; Animation keeps timing/performance ownership; Runtime keeps target-host behavior/cost; Visual QA / Art Direction keep perceptual acceptance. Rigging PASS grants no merge/CANON authority.
- **Continuity:** the Object Rigging lane is stacked exactly on Hard-Surface PR #2 instead of copying the asset or editing `axm-create-me`. Existing Animal Rigging evidence stays intact and rollback remains branch/PR-local.
- **Wisdom before speed:** one existing, source-authored hinge was exercised across a bounded envelope before adding motors, controllers, clips, generic constraint systems or UC abstraction.

## Handoffs

- **Hard Surface:** PR #3 proves a bounded rigid-lid receiving articulation against the exact PR #2 source. Keep source hinge/interface geometry authoritative; do not infer engineering certification from the sweep.
- **Visual Observer / QA:** inspect the retained `0 / 30 / 60 / 90 / 110°` side proof if a perceptual/mechanical plausibility gate is useful. The machine PASS does not establish visual quality.
- **3D Art Director:** decide whether the `0..110°` mechanical range reads appropriately for this object before motion styling or attachment use is layered on it.
- **3D Animation & Motion:** only after a motion need exists, animate this exact accepted articulation plan rather than inventing a second hinge path. Timing/performance remains Animation-owned and is not present now.
- **Runtime / Optimization:** no target-engine hinge/controller or runtime cost exists yet. Measure only once an actual host implementation is created.
- **Technical Art / UC Integration / Capability Cartographer:** record `exact source-owned articulation identity + bounded pose envelope + fail-closed sampled clearance evidence` as a cross-domain evidence pattern candidate only. One Object hinge plus one Animal joint family is not yet evidence for a universal articulation engine.
- **Character:** remain downstream of its own visual/topology gates; no quadruped or equipment-case rig rule transfers automatically.

## Next Rigging & Deformation pass

1. Re-scan for new direct receiving handoffs rather than extending this object automatically.
2. If Visual Observer / Art Director returns a specific Object range/pose defect, repair this same PR #3 lane and preserve before-evidence.
3. If Animal receives the requested direct weighting A/B review, act on that evidence before further animal tuning.
4. If the connected Animal topology receives visual acceptance, deformation-test that exact topology independently; do not transfer the disconnected-surface PASS.
5. Do not add a generic mechanical/organic rig framework until a repeated executable contract is demonstrated across materially different assets.
