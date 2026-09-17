# 07 — 3D Animation & Motion Specialist Status

Date: 2026-09-17
State: **OBJECT_KEEPER_SOCKET_MOTION_REBIND / EXACT MOTION UNCHANGED / CI REPAIRED + RECHECK QUEUED**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/07_animation_motion.md`, current Animation/Rigging/Technical Art/Art Direction/Runtime status and current animation-ready work across the active constellation.

`axm-create-me` remains **coordination only**. No product asset, rig, deformation solver, material, renderer, runtime controller or gameplay implementation was added here.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh constellation / duplication scan

- **Animal:** dense authored-key and subframe continuity evidence is already present. Its next meaningful Animation step still depends on an adopted production direction-frame receiver or a named Art/QA temporal defect; another invented clip change would duplicate/blur existing evidence.
- **Character:** current blockers remain upstream structural/intersection issues rather than an Animation timing problem.
- **Nature / Weather / Map:** wall-clock secondary-motion timing remains VFX/Runtime-owned; Animation does not duplicate it.
- **Object:** Rigging PR #27 delivered a fresh exact upper-keeper handoff at `4a743a8c934b72178ef04ae3f55947bdc7f8def0`, result `PASS_LID_OWNED_KEEPER_SOCKET_BINDING_111_POSES`, while explicitly leaving Animation acceptance false. This is the strongest fresh non-duplicated Animation-ready dependency.

## Highest-leverage bounded improvement — exact keeper-socket motion rebind

Existing Object Animation PR #10 was advanced on its existing branch. Current exact Animation head:

`e9d907ef56ffdc7387378c9cc0ee94886691c616`

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
- exact Technical Art rigid-scene donor: `965fb2f24dbd0b0cbb748d9f8b8712d62966315f`;
- exact UC donor: `6dc465987e01362264f88b7cef4213609ae50763`.

New contract:

`axm.object-animation-keeper-socket-motion-rebind/v0.1`

The contract is rebind-only: **no keeper keys are authored**. The upper keepers must move solely because their source-owned nodes remain direct children/sockets of `lid_shell`. The existing lower latch levers retain their independent historical Rigging-bound motion.

## Target-host method

The new Godot 4.7.2 GL Compatibility observer is designed to:

1. rebuild and pin the exact Technical Art/UC rigid-scene receiver;
2. rebuild the unchanged 101-sample lid/latch sequence and exact lower-lever Rigging evidence;
3. rebuild the exact Rigging #27 keeper-socket sweep;
4. import the exact target GLB and require both keepers to remain direct children of `lid_shell` while lower levers remain separate;
5. create only the existing three AnimationPlayer tracks: lid + two lower levers, 101 keys each;
6. seek all 101 authored samples and measure keeper lid-local socket drift;
7. cross-check target-host keeper world centers against Rigging #27 at exact 0°, 50° and 100° lid poses;
8. require meaningful keeper world movement at the 100° lid pose without any keeper-authored track;
9. invoke a second capture-free `AnimationPlayer.play()` pass to observe socket continuity without screenshot I/O;
10. require exact neutral endpoint closure;
11. reject a verifier-only +1 mm keeper-reference mutation as a negative control.

This separates hierarchy/socket continuity from the previous screenshot-loaded wall-clock timing study. It deliberately does **not** certify scheduler delivery.

## CI truth state

First dedicated run:

`35186175846 — Object Animation keeper-socket motion rebind evidence` — **FAIL**.

The failure was an implementation error in the new observer: four GDScript calls passed three arguments to `maxf()` / `minf()`, which Godot 4.7.2 correctly rejected at parse time. All repository tests, exact donor checks, cross-repo identity checks, sequence rebuild, keeper Rigging rebuild and pinned Godot download had succeeded before that parse failure.

That failure also exposed an evidence-quality flaw: the negative-control shell step could interpret a verifier parse failure as a successful rejection. The positive run still failed, so no false PASS escaped, but the first artifact is **not acceptance evidence**.

The observer has now been repaired at exact head `e9d907ef56ffdc7387378c9cc0ee94886691c616` using valid nested pairwise `maxf()` / `minf()` calls. Recheck workflow:

`35186360454 — Object Animation keeper-socket motion rebind evidence` — **QUEUED at this status update**.

Therefore **no keeper-socket Animation PASS is claimed yet**. This status must be upgraded only after the repaired exact-head Godot run and its receipt are green.

## Previous Object timing baseline remains valid

The prior exact wall-clock proof-host result at `82b0c22e3a9eb346f2b06745b958a570d41beb15` remains historical evidence: actual `AnimationPlayer.play()` was observed, but capture-loaded proof-host delivery covered only 84/101 authored slots and therefore did not certify complete 40 Hz delivery. This new keeper-socket pass is intentionally not a scheduler rerun.

## Decision

**`MOTION_UNCHANGED__REBIND_FRESH_RIGGING_KEEPER_SOCKET_IDENTITY__HOLD_ACCEPTANCE_UNTIL_REPAIRED_GODOT_RUN_GREEN`**

No retime, easing change, key edit, amplitude change, phase change, interpolation-policy change, source rewrite, rig rewrite, material change, controller/state-machine logic or gameplay logic is justified by the current evidence.

## Handoffs

- **Object Animation PR #10:** keep the exact sequence frozen while the repaired keeper-socket target-host run completes.
- **Object Rigging PR #27:** Animation consumes the exact keeper socket witness; Rigging remains source of keeper/socket geometry and sweep identity.
- **Visual QA / Art Direction:** no motion authorship change should occur without a named temporal defect against the existing sequence.
- **Runtime / Technical Art:** capture-free play-path observation here checks hierarchy/socket continuity only; scheduler delivery, controller behavior and target-device performance remain outside Animation authority.
- **Animal:** production direction-frame receiver hold remains independent.

## Explicit non-claims

This activation does **not** establish:

- keeper-socket target-host PASS until workflow `35186360454` is green;
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

- **Truth:** the first parse failure is retained and named; no negative-control rejection is promoted while the verifier itself was invalid, and no repaired PASS is claimed before CI proves it.
- **Agency / non-domination:** Animation consumes exact Rigging/Technical Art/UC identities without taking ownership of their solvers, Runtime scheduling, gameplay or Art/QA acceptance.
- **Continuity:** the existing Object Animation PR #10, unchanged sequence digest, exact source/rig donor heads, prior wall-clock baseline and rollback path are preserved.
- **Wisdom before speed:** rebind the fresh keeper dependency first, keep motion frozen, and repair the verifier instead of widening tolerances or inventing a motion change.

The four AXM roots remain the merge gate.
