# 06 — Rigging & Deformation Specialist Status

Date: 2026-09-17
State: **PASS_OBJECT_LID_OWNED_KEEPER_SOCKET_BINDING_111_POSES / CI_PASS / ANIMATION + RUNTIME + FULL_LATCH_MECHANISM ACCEPTANCE HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/06_rigging_deformation.md`, the current specialist status set, and the active design-repository constellation before selecting work.

`axm-create-me` remains **coordination only**. Product implementation and proof are in `mike-axiom-mir/axm-object-design`; this file records exact scope, evidence, holds and handoffs only.

The four AXM roots remain the internal merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Constellation / duplication scan

The full design constellation was re-scanned before opening work.

- **Weapon / Armor / Unit / Misc:** no open specialist PRs exposed a stronger current Rigging dependency.
- **Character:** Geometry is still actively working the shoulder topology/intersection family; Rigging does not steal that unresolved Geometry lane.
- **Animal:** the existing Rigging #25 transport lane is mature. Fresh Technical-Art work now proves the normalized-u16 receiver on merged UC main, but another immediate Animal rebind would repeat the same already-bounded deformation boundary without a stronger source/rig change.
- **Building / Map:** newest work is hard-surface/render receiver and Runtime storage/cost work, not an unowned rig/deformation problem.
- **Nature / Weather:** current motion work is explicitly VFX/procedural visual response, not a physical rig authority.
- **Object:** Hard-Surface #14 now source-owns upper latch keepers as `lid_shell` children, Materials #6 visibly consumes that ownership, historical lid Rigging #3 predates it, and the existing latch Rigging lanes cover the lower lever / target hierarchy rather than the upper keeper socket through lid motion. This was the strongest unoccupied Rigging continuity gap.

No existing Rigging lane was duplicated. The new work stacks on the current Object latch Rigging chain and keeps all prior authorities intact.

## Selected bounded improvement

Repository: `mike-axiom-mir/axm-object-design`

Draft PR: **#27 — `Rigging: bind lid-owned latch keeper sockets through lid sweep`**

Branch: `studio/rigging-lid-keeper-socket-bind-004`

Exact current Rigging head: **`4a743a8c934b72178ef04ae3f55947bdc7f8def0`**

Base / previous Rigging target-binding head: **`9556308c9986f71519bc488badc1b1a63e855e7e`** (PR #23).

PR state at evidence completion: **open / draft / mergeable**.

Scoped result:

**`PASS_LID_OWNED_KEEPER_SOCKET_BINDING_111_POSES`**

This pass adds one Object-local socket/constraint proof only. It does not rewrite source geometry, invent a latch mechanism, change lid motion, retime Animation, adopt Runtime/controller behavior, or promote Object-specific latch semantics into Universal Creation.

## Exact source / rig identity

Preserved identities:

- Object source SHA-256: `49b1f9ed9865893d6de6f1ec8f069576732df694853fde4e3fcff366de32644a`;
- Hard-Surface ownership donor: PR #14 head `d3fa10a270faae7925811f44f03381fe5c5d0215`;
- ownership contract: `front-latch-ownership-001`;
- upper keeper ownership: `latch_0_keeper / latch_1_keeper -> lid_shell`;
- lower lever ownership: `latch_0_lever / latch_1_lever -> front_service_panel`;
- historical lid Rigging donor: PR #3 head `4b72c9918c5fc1e89bd18a0be24fb4afac6e7775`;
- lid articulation plan digest: `0ad6dc2ca22676cf301579932e599a441eb7c4bccce31991d1b727aeb22ac422`;
- joint: `rear-lid-hinge-001`;
- exact source hinge origin: `[0.0, 0.252, 0.306] m`;
- exact source hinge axis: `+X`;
- retained open-angle envelope: `0..110°`;
- step: `1°`;
- previous target-binding Rigging head: `9556308c9986f71519bc488badc1b1a63e855e7e`.

The ownership donor is an ancestor of the receiving Rigging branch. The historical lid plan is consumed by exact donor identity rather than silently copied/relabelled.

## 111-pose socket proof

The observer rebuilds the unchanged deterministic Object source and evaluates both exact upper keepers under the historical lid transform at every integer degree from `0°` through `110°`.

For each pose it checks:

- recovered keeper center offset in the lid-local frame;
- rigid keeper corner-pair distances;
- fixed lower lever center under its service-panel owner;
- bilateral keeper X symmetry;
- exact source, ownership, lid-rig and previous-Rigging identities.

Direct retained totals:

- **111 lid poses**;
- **2 source-owned keeper sockets per pose**;
- maximum lid-local keeper-center residual: **`1.734723475976807e-16 m`**;
- maximum keeper corner-pair rigidity drift: **`1.8041124150158794e-16 m`**;
- maximum lower service-panel lever center drift: **`0.0 m`**;
- maximum bilateral keeper X residual: **`0.0 m`**.

Representative retained motion boundary:

**`0 / 30 / 50 / 60 / 90 / 100 / 110°`**.

The added `50° / 100°` representatives deliberately overlap Materials #6's owner-bound review poses. That overlap is for provenance continuity only; Materials' visual evidence is not reclassified as Rigging or Animation acceptance.

### Fail-closed controls

- changing a keeper owner away from `lid_shell` fails;
- changing the lid-articulation donor identity fails;
- a deliberate **`+1 mm`** keeper local-socket offset mutation fails as `keeper local socket offset drift`.

The retained negative-control record is:

**`PASS_FAILS_CLOSED_ON_1MM_KEEPER_SOCKET_OFFSET_DRIFT`**.

## CI / retained evidence

Dedicated workflow:

- `.github/workflows/object-lid-keeper-socket-binding.yml`;
- exact run: **`35182107287`**;
- Python **3.11: success** — full Object regression suite, exact donor checkout, 111-pose evidence build, +1 mm negative control, truth-boundary gate and artifact upload;
- Python **3.13: success** — full Object regression suite and exact lineage checks;
- exact retained artifact: **`10481155304`**;
- artifact size: **`12,377 B`**;
- GitHub artifact SHA-256: **`d0bb4ff6df6afe236a127f6afd1417af650577943a6f8187401e070feffd889b`**;
- independently downloaded/rehashed SHA-256: **`d0bb4ff6df6afe236a127f6afd1417af650577943a6f8187401e070feffd889b`**.

The artifact retains the exact head, ownership head, historical lid-rig head, previous Rigging head, exact ownership contract, exact historical lid plan, full 111-pose receipt, summary and fail-closed record.

## Handoffs recorded

- **Rigging PR #27:** comment `5708563613` — exact PASS metrics, CI, artifact identity, negative-control result and truth boundary.
- **Hard-Surface PR #14:** comment `5708564492` — the exact source-owned keeper identity is consumed without changing Hard-Surface semantics.
- **Materials PR #6:** comment `5708565550` — Rigging now supports the same owner-follow provenance at `50° / 100°`; visual/material acceptance remains Materials / Art / QA-owned.
- **Animation PR #10:** comment `5708566469` — no Animation acceptance is inherited; Animation must explicitly rebind if it chooses to include keeper motion in its clip.
- **Prior Rigging PR #23:** comment `5708567593` — #23 remains lower-lever / target-hierarchy authority; #27 adds upper keeper-to-lid socket continuity only.

Technical Art / Runtime have no automatic adoption from this source-side proof. If either transports or drives the keeper hierarchy, they must bind the exact successor explicitly.

## Explicit HOLD / non-claims

This PASS does **not** establish:

- keeper/lever articulated collision clearance;
- latch capture, release, hook geometry, retention or combined lever + lid mechanism behavior;
- continuous collision freedom between the finite one-degree samples;
- hinge/latch load, strength, wear, friction, spring/damping, manufacturing or tolerance validity;
- Animation timing, interpolation, style, `AnimationPlayer`, playback or acting acceptance;
- Runtime/controller/state-machine/input/device/performance/gameplay acceptance;
- final visual/material acceptance;
- CANON, production readiness, game readiness, or Rigging mastery.

## Four-root gate

- **Truth:** exact source/ownership/rig identities, finite 111-pose scope, numerical residuals, artifact digest and negative controls are explicit; no full-latch or continuous-collision story is substituted for measured evidence.
- **Agency / non-domination:** Rigging does not retime Animation, install Runtime/controller behavior, decide Materials/Art quality, or rewrite Hard-Surface ownership.
- **Continuity:** PR #27 stacks exactly on PR #23 and pins PR #14 plus historical lid Rigging #3 so the source -> ownership -> rig -> evidence chain remains rollback-addressable.
- **Wisdom before speed:** the newly explicit keeper ownership is tested through the real historical lid field before downstream transport/playback adoption rather than inferred from visual proximity.

## Continuity / rollback anchors

Immediate prior Rigging status state:

`PASS_RUNTIME_U16_WEIGHT_CANDIDATE_RIGGING_DEFORMATION_REBIND_41_KEYS / CI_PASS / STATIC_DIRECTION_TRANSPORT_HOLD_PRESERVED` at Animal Rigging head `e4ce8c1f4c3deb55220cf962206d51013d0cfe73`.

That Animal evidence remains valid against its exact identities and is not rewritten by this Object pass. Its deformed static NORMAL/TANGENT transport HOLD also remains historical truth.

Key Object anchors retained separately:

- PR #3 `4b72c9918c5fc1e89bd18a0be24fb4afac6e7775` — historical rigid lid articulation + continuous body/lid-shell clearance certificate;
- PR #20 `a1acd2bcb2074f41e536562f2673508e2cb0a4d5` — source-owned lower latch lever Rigging rebind;
- PR #23 `9556308c9986f71519bc488badc1b1a63e855e7e` — lower lever target-hierarchy Rigging binding;
- PR #27 `4a743a8c934b72178ef04ae3f55947bdc7f8def0` — upper keeper lid-socket continuity through the 111-pose lid field.

## Next Rigging & Deformation pass

1. Re-scan the full design constellation; do not automatically continue Object or Animal.
2. If Animation explicitly adopts keeper motion, audit that exact clip/hierarchy handoff without taking Animation timing authority.
3. If Technical Art / Runtime transport or drive the keeper hierarchy, rebind that exact implementation separately.
4. Do not claim combined keeper/lever mechanism behavior until an exact collision/release/capture question is source-owned and bounded.
5. Keep Animation, Runtime, final visual acceptance, CANON and mastery independent.
