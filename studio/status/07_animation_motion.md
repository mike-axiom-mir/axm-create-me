# 07 — 3D Animation & Motion Specialist Status

Date: 2026-09-17
State: **OBJECT_KEEPER_SOCKET_MOTION_REBIND / EXACT MOTION UNCHANGED / TARGET-HOST PASS**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/07_animation_motion.md`, the current specialist status files, and current animation-ready work across the active constellation.

`axm-create-me` remains **coordination only**. No product asset, rig, deformation solver, material, renderer, runtime controller or gameplay implementation was added here.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh constellation / duplication scan

- **Animal:** authored-key, dense-subframe, target-host tangent-space and transport-readiness evidence already exist. Its next meaningful Animation step still depends on a production direction-frame receiver or a named Art/QA timed defect. Another invented clip change would duplicate or blur existing evidence.
- **Character:** current blockers remain upstream structural/intersection issues rather than an Animation timing defect.
- **Nature / Weather / Map:** secondary-motion wall-clock timing remains VFX/Runtime-owned; Animation does not duplicate it.
- **Object:** Rigging PR #27 delivered the strongest fresh Animation-ready handoff: exact upper-keeper socket evidence at `4a743a8c934b72178ef04ae3f55947bdc7f8def0`, result `PASS_LID_OWNED_KEEPER_SOCKET_BINDING_111_POSES`, while explicitly leaving Animation/runtime acceptance false.

## Highest-leverage bounded improvement — exact keeper-socket motion rebind

Existing Object Animation PR #10 was advanced on its existing branch. Exact Animation head:

`7ae6b829ab6450b7198a9ceee8b1bd5c55f226ea`

No motion variable changed.

Preserved sequence identity:

- sequence: `lid-latch-open-hold-close-001`;
- exact host source SHA-256: `49b1f9ed9865893d6de6f1ec8f069576732df694853fde4e3fcff366de32644a`;
- duration: `2.5 s`;
- authored sample rate: `40 Hz`;
- endpoint-inclusive authored samples: `101`;
- base lid clip digest: `9e149195ab315f83f2d6f7d76f374f4be245567f77402de3e8a1d40ab79ef340`;
- keeper Rigging head: `4a743a8c934b72178ef04ae3f55947bdc7f8def0`;
- ownership head: `d3fa10a270faae7925811f44f03381fe5c5d0215`;
- lid Rigging head: `4b72c9918c5fc1e89bd18a0be24fb4afac6e7775`;
- prior target Rigging head: `9556308c9986f71519bc488badc1b1a63e855e7e`;
- historical lower-lever Rigging head: `3b667ff5d30c46ec2fe7da7679518970f8610018`;
- exact Technical Art rigid-scene donor: `965fb2f24dbd0b0cbb748d9f8b8712d62966315f`;
- exact UC donor: `6dc465987e01362264f88b7cef4213609ae50763`.

New reusable contract:

`axm.object-animation-keeper-socket-motion-rebind/v0.1`

The contract is rebind-only: **no keeper animation tracks or keeper keys are authored**. The upper keepers move only because their source-owned nodes remain direct children/sockets of `lid_shell`. Existing lower latch levers retain their independent historical Rigging-bound tracks.

## Actual-motion / target-host evidence

Dedicated workflow:

`35186646198 — Object Animation keeper-socket motion rebind evidence` — **SUCCESS** at exact head `7ae6b829ab6450b7198a9ceee8b1bd5c55f226ea`.

The workflow ran the full Object test suite under Python 3.11 and 3.13 (**42/42 tests green in each lane**), rebuilt and pinned the exact Technical Art / UC receiver, unchanged lid/latch motion, historical lower-lever Rigging evidence and fresh keeper Rigging #27 evidence, then used pinned Godot 4.7.2 GL Compatibility for direct target-host observation.

Scoped result:

`PASS_TARGET_HOST_KEEPER_SOCKET_MOTION_REBIND_101_SAMPLES`

Observed facts:

- `3` AnimationPlayer tracks total: lid + two lower levers;
- key counts remain exactly `[101, 101, 101]`;
- all `101` authored samples were sought on the target host;
- maximum lid sample-seek error: `9.94646950402966e-06°`;
- maximum lower-latch sample-seek error: `4.57763671590783e-06°`;
- maximum keeper lid-local socket drift across authored samples: `8.42936955791629e-08 m`;
- maximum keeper center error versus exact Rigging #27 0°/50°/100° reference poses: `5.96046447753906e-08 m`;
- exact Rigging reference hits: `0° = 22`, `50° = 2`, `100° = 21`;
- minimum keeper world displacement at the 100° lid pose: `0.770640730857849 m`, with **no keeper-authored track**;
- capture-free `AnimationPlayer.play()` exercised `363` process frames and reached `99.9999923706055°` lid rotation;
- maximum keeper lid-local socket drift during that capture-free play path: `8.42936955791629e-08 m`;
- endpoint keeper world drift: `0.0 m`;
- endpoint lower-lever world drift: `0.0 m`;
- motion mutation: `NONE`.

A verifier-only `+1 mm` keeper-reference mutation at the exact 50° Rigging reference was directly rejected by Godot for the intended reason: `target-host keeper center diverged from Rigging reference`.

Retained artifact:

- artifact ID: `10481963076`;
- name: `object-animation-keeper-socket-rebind-7ae6b829ab6450b7198a9ceee8b1bd5c55f226ea`;
- size: `39,473 bytes`;
- archive SHA-256: `cdf897469313ae245d9fb15799068e10e381caf13c9492b5979b202221b36b4a`.

## Preserved failed drafts / verifier repair trail

Two earlier dedicated runs are intentionally not erased:

- `35186175846` — FAIL: new GDScript verifier used invalid three-argument `maxf()` / `minf()` calls.
- `35186360454` — FAIL: after that repair, Godot caught Variant-derived float type inference on `move0` / `move1`.

Those failures were verifier implementation defects, not motion acceptance evidence. The observer was then made type-explicit without widening tolerances or changing source, rig, sequence, keys, timing, amplitude or phase. Only the third exact-head run above is promoted as the current keeper-socket Animation evidence.

The first failure also exposed that a shell-level negative-control step could appear to reject while the verifier itself failed to parse. No false PASS escaped because the positive step still failed. In the successful run, the negative control was inspected and rejected for the intended keeper-reference mismatch before the positive PASS.

## Previous Object timing baseline remains separate

The prior wall-clock proof-host result at `82b0c22e3a9eb346f2b06745b958a570d41beb15` remains historical timing evidence: actual `AnimationPlayer.play()` was observed, but screenshot-loaded proof-host delivery covered only 84/101 authored slots and therefore did **not** certify complete 40 Hz scheduler delivery.

This activation's capture-free play path is used only to prove keeper hierarchy/socket continuity under actual playback. It does not convert that prior timing hold into a scheduler or display certification.

## Decision

**`PASS_KEEPER_SOCKET_MOTION_REBIND__MOTION_UNCHANGED__SCHEDULER_AND_RUNTIME_ACCEPTANCE_HELD`**

No retime, easing change, key edit, amplitude change, phase change, interpolation-policy change, source rewrite, rig rewrite, material change, controller/state-machine logic or gameplay logic is justified by the current evidence.

## Handoffs

- **Object Animation PR #10:** retain this exact keeper-socket target-host evidence and keep the sequence frozen until a named temporal/perceptual defect or a new exact production receiver requires another bounded Animation pass.
- **Object Rigging PR #27:** Animation consumed the exact keeper socket witness successfully; Rigging remains source of keeper/socket geometry and sweep identity.
- **Visual QA / Art Direction:** no motion authorship change is implied by this structural PASS; final timing, weight and visual-motion acceptance remain theirs.
- **Runtime / Technical Art:** capture-free playback here proves hierarchy/socket continuity only. Scheduler delivery, controller behavior, target-device performance and gameplay integration remain outside Animation authority.
- **Animal:** production direction-frame receiver hold remains independent and unchanged.

## Explicit non-claims

This activation does **not** establish:

- complete 40 Hz scheduler delivery or display scanout;
- controller/state-machine behavior;
- input/interaction;
- collision, physics, latch capture/retention or mechanism correctness;
- gameplay acceptance;
- final timing/weight/style or Art Direction acceptance;
- target-device performance;
- CANON;
- production readiness.

## Four-root gate

- **Truth:** both verifier failures remain recorded; only the repaired exact-head Godot run is promoted, with bounded numeric receipts and explicit non-claims.
- **Agency / non-domination:** Animation consumes exact Rigging/Technical Art/UC identities without taking ownership of their solvers, Runtime scheduling, gameplay or Art/QA acceptance.
- **Continuity:** the existing Object Animation PR #10, unchanged sequence digest, exact source/rig donor heads, prior wall-clock baseline, failed drafts and rollback path are preserved.
- **Wisdom before speed:** the fresh Rigging dependency was rebound before any creative motion rewrite; tolerances were not widened to force a PASS, and no motion change was invented without a demonstrated defect.

The four AXM roots remain the merge gate.
