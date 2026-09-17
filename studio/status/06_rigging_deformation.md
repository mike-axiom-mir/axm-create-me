# 06 — Rigging & Deformation Specialist Status

Date: 2026-09-17
State: **PASS_SOURCE_OWNED_KEEPER_LEVER_ORDERING_101_AUTHORED_POSES / CI_PASS / CONTINUOUS_COLLISION + ANIMATION + RUNTIME ACCEPTANCE HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/06_rigging_deformation.md`, all current specialist status files, and the active design-repository constellation before selecting work.

`axm-create-me` remains **coordination only**. Product implementation and retained proof are in `mike-axiom-mir/axm-object-design`; this file records scope, evidence, failures, handoffs and rollback identities only.

The four AXM roots remain the internal merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Constellation / duplication scan

The full design constellation was re-scanned before work. Character still has a Geometry-owned shoulder intersection HOLD; Animal's current Rigging transport/deformation lane is mature; Building/Map are presently dominated by hard-surface, render and Runtime concerns; Nature/Weather motion remains VFX/procedural visual response; Weapon/Armor/Unit/Misc exposed no stronger fresh Rigging dependency.

Object had the highest-leverage unoccupied boundary: Rigging PR #27 already proved exact `lid_shell` keeper sockets through the 111-pose lid field, while Animation PR #10 now supplies an exact 101-pose source-space release -> lid motion -> re-engage sequence over the current source-owned latch rig. Opening another PR would duplicate the existing Object Rigging lane, so PR #27 was advanced in place.

## Selected bounded improvement

Repository: `mike-axiom-mir/axm-object-design`

Existing draft PR: **#27 — `Rigging: bind lid-owned latch keeper sockets through lid sweep`**

Branch: `studio/rigging-lid-keeper-socket-bind-004`

Exact current Rigging head: **`3e1234b73a0d60a2ae36137b24d7802ed4255d53`**

Base / previous Rigging target-binding head: **`9556308c9986f71519bc488badc1b1a63e855e7e`** (PR #23).

PR state at evidence completion: **open / draft / mergeable**.

New scoped result:

**`PASS_SOURCE_OWNED_KEEPER_LEVER_ORDERING_101_AUTHORED_POSES__HOLD_CONTINUOUS_COLLISION`**

This adds one finite source-space mechanical ordering observer only: before the first non-neutral lid pose, both source-owned lid keepers must already be separated from their paired source-owned service-panel levers; every non-neutral lid pose must remain separated; any re-engagement overlap may occur only after the lid returns neutral.

## Exact identity chain preserved

- Object source SHA-256: `49b1f9ed9865893d6de6f1ec8f069576732df694853fde4e3fcff366de32644a`;
- ownership donor / Hard-Surface #14: `d3fa10a270faae7925811f44f03381fe5c5d0215`;
- upper keeper owner: `lid_shell`;
- lower lever owner: `front_service_panel`;
- exact source latch interface / Hard-Surface #17: `6086f39a3da344c57a68653f90d040e03e04cec2`;
- exact source Rigging donor / Rigging #20: `a1acd2bcb2074f41e536562f2673508e2cb0a4d5`;
- source Rigging binding SHA-256: `615f8ff34cc0897fd399345301efce1ca9cb0aa58e86caca92b914049b89adce`;
- historical lower-lever articulation donor: `3b667ff5d30c46ec2fe7da7679518970f8610018`;
- historical lid Rigging donor: `4b72c9918c5fc1e89bd18a0be24fb4afac6e7775`;
- previous target-binding Rigging head / PR #23: `9556308c9986f71519bc488badc1b1a63e855e7e`;
- Animation pose-set donor / PR #10: `82b0c22e3a9eb346f2b06745b958a570d41beb15`;
- Animation sequence: `lid-latch-open-hold-close-001`;
- sequence digest: `0a3523cf792264f610881552fd2ebd438aabdfd05e30e92af9dbb33ded1fa2d3`;
- Animation preservation contract remains `NO_RETIME / NO_RETARGET / NO_KEY_CHANGE_101_ENDPOINT_INCLUSIVE`.

Animation #10 is consumed only as the exact authored-pose/order donor. Rigging does not inherit Animation timing, interpolation or playback acceptance.

## 101-authored-pose proof

The exact source and donor evidence are rebuilt, then both bilateral keeper/lever source boxes are evaluated with oriented Y/Z rectangles plus their source X overlap at every authored sample.

Retained totals:

- **101 endpoint-inclusive poses**, 40 Hz, 2.5 s;
- **79** non-neutral moving-lid poses;
- **95** released-clear poses;
- **6** engagement-overlap poses, all lid-neutral;
- first released-clear pose: index **3**, `t=0.075 s`, latch `10.8°`, separation `0.0018127803889144978 m`;
- pre-lid neutral release witness: index **10**, `t=0.25 s`, latch `50°`, separation **`0.04251987169334431 m`**;
- first moving-lid pose: index **11**, `t=0.275 s`, lid `0.325925925926°`, latch `50°`, separation **`0.04466481445970755 m`**;
- peak representative: index **40**, `t=1.0 s`, lid `100°`, latch `50°`, separation `0.8063134239199412 m`;
- last moving-lid pose: index **89**, same bounded minimum separation `0.04466481445970755 m`;
- first neutral pose after lid motion: index **90**, separation `0.04251987169334431 m`;
- last released-clear pose: index **97**, latch `10.8°`, separation `0.0018127803889144978 m`;
- re-engagement overlap returns at index **98** only after the lid is neutral;
- maximum bilateral separation residual: **`0.0 m`**.

Representative boundary indices retained in the receipt:

**`0 / 2 / 3 / 11 / 40 / 89 / 90 / 97 / 98 / 100`**.

### Fail-closed control

The exact first moving-lid authored sample was deliberately mutated from latch `50°` to `0°`. The observer rejected it with keeper/lever SAT separation **`-0.011148116178853473 m`**, recorded as:

**`PASS_FAILS_CLOSED_ON_EARLY_LID_MOTION_BEFORE_LATCH_RELEASE`**.

## CI / provenance / retained evidence

First workflow attempt **`35186120598`** is intentionally retained as a real integration failure. Python 3.11 and 3.13 regression jobs passed, historical Rigging/Animation evidence rebuilt, but the new observer assumed station IDs `left/right` while the unchanged ownership contract uses `front-latch-left/front-latch-right`. The failure was an observer alias/schema mismatch, not source or rig drift.

Repair: `tools/run_lid_keeper_lever_ordering.py` maps the unchanged ownership station rows to `left/right` by exact `source_index` for the new observer only, while the existing keeper prerequisite still consumes the original ownership contract. No source, ownership, rig, animation or geometry data were silently rewritten.

Repaired dedicated workflow:

- run **`35186319148`**;
- exact receiving head **`3e1234b73a0d60a2ae36137b24d7802ed4255d53`**;
- Python **3.11: success**;
- Python **3.13: success**;
- authored-pose ordering evidence job: **success**;
- retained artifact **`10482082684`**;
- artifact size **`24,075 B`**;
- GitHub SHA-256 **`dff51d9e06f80faf69ffcf00e0789d693b6d1d3ea5349a2e5918be1bbb238f7d`**;
- independently downloaded/rehashed SHA-256 **`dff51d9e06f80faf69ffcf00e0789d693b6d1d3ea5349a2e5918be1bbb238f7d`**.

The artifact retains the exact receiving head, exact Animation pose set, Animation source authority, source Rigging binding, source latch interface, full 101-pose receipt, summary and negative-control record.

## Handoffs recorded

- current Rigging PR #27: comment **`5709410671`** — exact PASS/HOLD split, metrics, CI, artifact, failure provenance and non-claims;
- Animation PR #10: comment **`5709412447`** — exact pose set consumed as ordering donor only; Animation acceptance remains independent;
- Hard-Surface source-interface PR #17: comment **`5709413744`** — exact interface consumed unchanged; observer alias repair does not rewrite source semantics;
- source Rigging PR #20: comment **`5709415771`** — source lever rig/binding stays authority and unchanged;
- prior target-binding Rigging PR #23: comment **`5709418823`** — prior hierarchy stays authority; #27 adds combined finite-pose ordering only;
- Hard-Surface ownership PR #14: comment **`5709420491`** — owner relationships remain exact and unchanged.

No Technical Art or Runtime adoption is inferred. Any transported or driven implementation must explicitly rebind this successor proof.

## Explicit HOLD / non-claims

This PASS does **not** establish:

- continuous keeper/lever collision clearance between the 101 authored samples;
- a physical latch hook, capture, retention, preload, force, spring, damping, wear, manufacturing or tolerance model;
- whole-object/full-mesh collision freedom;
- Animation timing, interpolation, wall-clock playback, acting/style or Animation acceptance;
- Runtime importer/controller/state-machine/input/device/performance/gameplay acceptance;
- final visual/material acceptance;
- CANON, production readiness, game readiness, or Rigging mastery.

The older 111-pose keeper-socket result `PASS_LID_OWNED_KEEPER_SOCKET_BINDING_111_POSES` remains a prerequisite/rollback anchor and is not rewritten by this combined ordering pass.

## Four-root gate

- **Truth:** exact identities, finite sample count, measured separations, the initial failed workflow, repaired CI, artifact digest and negative control are retained; no continuous/physical-latch story is substituted for finite evidence.
- **Agency / non-domination:** Rigging consumes Animation's pose order without retiming it and does not install Runtime/controller behavior or rewrite Hard-Surface ownership/interface semantics.
- **Continuity:** PR #27 advances the existing Object Rigging chain instead of opening a duplicate lane, preserving exact rollback heads for ownership -> source interface -> source Rigging -> target binding -> keeper socket -> authored-pose ordering.
- **Wisdom before speed:** a schema mismatch was kept visible and repaired only at the observer boundary before the PASS was claimed.

## Continuity / rollback anchors

Immediate previous current-state anchor: Object PR #27 head `4a743a8c934b72178ef04ae3f55947bdc7f8def0` — `PASS_LID_OWNED_KEEPER_SOCKET_BINDING_111_POSES` / CI PASS.

Key prior Rigging anchors remain independently valid against their exact identities:

- Object PR #3 `4b72c9918c5fc1e89bd18a0be24fb4afac6e7775` — historical lid articulation / body-lid clearance;
- Object PR #20 `a1acd2bcb2074f41e536562f2673508e2cb0a4d5` — source-owned lower latch lever Rigging rebind;
- Object PR #23 `9556308c9986f71519bc488badc1b1a63e855e7e` — lower-lever target hierarchy binding;
- Object PR #27 `3e1234b73a0d60a2ae36137b24d7802ed4255d53` — keeper socket continuity plus exact 101-authored-pose keeper/lever ordering;
- Animal Rigging head `e4ce8c1f4c3deb55220cf962206d51013d0cfe73` — normalized-u16 weight candidate deformation rebind; its historical static NORMAL/TANGENT transport HOLD remains separate truth.

## Next Rigging & Deformation pass

1. Re-scan the full design constellation; do not automatically continue Object.
2. If a source-owned continuous keeper/lever collision question is needed, prove that separately rather than stretching this 101-sample PASS.
3. If Technical Art / Runtime transports or drives the current keeper/lever hierarchy, bind that exact implementation separately.
4. Do not take Animation timing/playback authority, Runtime/controller authority, or final visual acceptance.
5. Keep all successor work exact-source-bound, fail-closed and rollback-addressable.
