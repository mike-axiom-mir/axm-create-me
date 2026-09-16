# 06 — Rigging & Deformation Specialist Status

Date: 2026-09-16
State: **PASS_SOURCE_OWNED_FRONT_LATCH_RIG_ON_UC_TARGET_HIERARCHY / EXACT PR20 + PR17 + TECH-ART + UC IDENTITIES PINNED / SOURCE 0-25-50 DEG -> TARGET 0--25--50 DEG HANDEDNESS EXPLICIT / GODOT 4.7.2 STATIC TARGET POSES PASS / ANIMATIONPLAYER + CONTROLLER + PHYSICS + FINAL-VISUAL HOLD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/06_rigging_deformation.md`, the previous Rigging status, newest specialist state, open PRs across the full design constellation, and the current Object / UC receiving evidence before changing product code.

`axm-create-me` remains **coordination only**. Product/evidence implementation in this activation is confined to `mike-axiom-mir/axm-object-design`; this status file is the coordination update.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The previous source-space Rigging result remains preserved in Git history and as Object PR #20. This activation does not rewrite it; it consumes that exact identity as a donor.

## Fresh constellation / duplication scan

- **Weapon / Armor / Unit / Misc:** no stronger accepted source-owned articulation, weighting or socket handoff surfaced. No filler rig was invented.
- **Character:** Organic has now completed the accepted feathered-shoulder E source migration at exact Character head `20f6413f1b09e32cb3667ccd01f266cd849d8e93`, source ID `character-neutral-a-shoulder-source-004`. That clears the form/source gate, but Rigging remains correctly held because Geometry has not yet produced the exact connected shoulder topology identity needed for weighting/deformation work.
- **Animal:** existing Rigging PR #6 and active Geometry / Organic candidates already occupy the connected-forelimb bend/deformation lane. Their newer shape candidates still require their own adoption/perceptual decisions before another Rigging mutation is justified.
- **Building:** current Hard-Surface / Geometry / Materials / Procedural work is structural; no articulated Building source requires a Rigging lane.
- **Nature:** current leaf/topology/material/flex work remains in Organic / Geometry / VFX / Materials ownership; no new source-owned skeleton/constraint handoff displaced the Object gap.
- **Weather / Map:** current dynamic work is VFX / Environment / Runtime / Procedural evidence, not a source-owned Rigging acceptance request.
- **Object:** source-owned front-latch Rigging PR #20 is green, while Animation PR #10, Technical Art PR #21 and Runtime PR #22 intentionally remain bound to the older latch provenance chain. Capability Cartography and Animation both explicitly forbid silently treating numerically equal pivots as provenance-equivalent. The previous Rigging status named the exact next condition: if a target-host latch dependency appears, bind it explicitly. That dependency is now real and was the highest-leverage unoccupied Rigging gap.
- **UC:** existing `axm.rigid-scene-graph/v0.1` remains a neutral transport donor. No Object-specific latch or Rigging semantics were moved into UC.

## Selected bounded improvement

Repository:

`mike-axiom-mir/axm-object-design`

New stacked draft PR:

**#23 — `Rigging: bind source-owned front latches to UC target hierarchy`**

Branch:

`studio/rigging-source-latch-target-bind-003`

Exact base / source Rigging donor:

- Object PR #20 head: **`a1acd2bcb2074f41e536562f2673508e2cb0a4d5`**.

Exact new Rigging head:

- **`9556308c9986f71519bc488badc1b1a63e855e7e`**.

Observed PR state after CI:

**OPEN / DRAFT / MERGEABLE**.

Mergeability and green CI are repository metadata only; neither is merge/CANON authority.

## Exact dependency identities

Host asset:

- `modular-equipment-case-001`;
- exact Object source SHA-256: `49b1f9ed9865893d6de6f1ec8f069576732df694853fde4e3fcff366de32644a`.

Exact source Rigging donor:

- PR #20 head: `a1acd2bcb2074f41e536562f2673508e2cb0a4d5`;
- source binding schema: `axm.object-front-latch-source-rig-binding/v0.1`;
- scoped result rerun in the new workflow: `PASS_SOURCE_OWNED_FRONT_LATCH_RIG_REBIND`.

Exact source-owned interface authority:

- Hard-Surface PR #17 head: `6086f39a3da344c57a68653f90d040e03e04cec2`;
- interface schema: `axm.object-front-latch-pivot-interface/v0.1`;
- interface SHA-256 retained by PR #20: `bcbbe098371eb702bc9289a97370744093105925202eda6036bdced6e25e34d3`;
- left source pivot: `[-0.22,-0.258,0.2105] m`;
- right source pivot: `[+0.22,-0.258,0.2105] m`;
- source joint axis: `+X`;
- representative source poses: `0 / +25 / +50°`;
- source continuous release threshold remains `48.66480246428277°`;
- source `50°` keeper-Z separation remains `0.0015728659779458698 m`.

Exact target receiving chain:

- Technical Art rigid-scene donor PR #16 head: `965fb2f24dbd0b0cbb748d9f8b8712d62966315f`;
- Technical Art result: `PASS_OBJECT_SOURCE_OWNED_RIGID_PARTS_THROUGH_UC_SCENE_GRAPH`;
- UC rigid-scene donor: `6dc465987e01362264f88b7cef4213609ae50763`;
- exact rebound GLB is rebuilt during CI from those pinned donors rather than inherited by name.

Historical PR #15 remains provenance only. It is not silently restored as current latch authority.

## New target Rigging binding

PR #23 adds Object-local:

`axm.object-target-front-latch-rig-binding/v0.1`

The binding is generated only after exact donor checks succeed. It fails closed on:

- source Rigging donor-head drift;
- source-interface byte or authority drift;
- re-promotion of the historical PR #15 observation;
- Technical Art donor-head drift;
- UC donor-head drift;
- rebuilt GLB byte-identity drift;
- target keeper/lever hierarchy drift;
- source station/owner/pivot identity drift;
- coordinate handedness or representative pose drift.

A deliberate all-zero source-Rigging donor head is executed as a negative identity control and must fail. The exact successful workflow did reject it as intended.

No new UC contract was added. Object/Rigging keeps Object-specific pivot and articulation meaning; UC remains neutral scene transport.

## Explicit source -> target handedness

The established Object-to-UC coordinate map is:

`[x,y,z] -> [x,z,y]`

Its determinant is `-1`, so the exact source Rigging positive +X rotation maps to a **negative +X target rotation**. This is coordinate conversion, not retiming, animation authorship or aesthetic retargeting.

Representative mapping:

- source `0°` -> target `0°`;
- source `+25°` -> target `-25°`;
- source `+50°` -> target `-50°`.

Exact source-owned pivots map to:

- left target pivot: `[-0.22,0.2105,-0.258] m`;
- right target pivot: `[+0.22,0.2105,-0.258] m`.

## Real target-host proof

Pinned target host:

**Godot 4.7.2, GL Compatibility, `GLTFDocument` import of the exact rebuilt UC GLB.**

For both lower latch levers at every exact representative pose, the observer verifies:

- the target transform equals the explicit rotation-about-source-owned-target-pivot transform;
- each bound pivot remains fixed;
- lever rigid AABB-corner pairwise signatures remain rigid;
- nonzero source poses produce material target lever movement;
- bilateral lever-center movement remains symmetric;
- fixed `body_shell`, `lid_shell` and both keeper centers do not move;
- both lever transforms return to the exact neutral target state.

The successful target-host validation gate bounds all of the following at **`<= 1e-6`** in target units / transform components:

- maximum expected-transform residual;
- maximum pivot drift;
- maximum rigid pairwise-signature drift;
- maximum fixed-component center drift;
- maximum bilateral center-movement residual;
- maximum neutral-return transform drift.

This is direct static target-host Rigging evidence. It is intentionally not an `AnimationPlayer` test.

## Exact-head evidence — PASS

Dedicated workflow:

**`35096312523 — Object target front-latch rig evidence` — COMPLETED / SUCCESS**

Exact tested head:

**`9556308c9986f71519bc488badc1b1a63e855e7e`**.

Matrix result:

- Python 3.11 — **SUCCESS**: exact candidate checkout, complete Object suite, exact PR #20 source-rig rerun, exact Technical Art / UC target rebuild, binding identity gate, deliberate negative identity control, pinned Godot 4.7.2 target-host pose exercise, target receipt validation, retained artifact upload;
- Python 3.13 — **SUCCESS**: exact candidate checkout, complete Object suite, exact PR #20 source-rig rerun, exact Technical Art / UC target rebuild, binding identity gate and negative control. Godot is intentionally exercised only in the 3.11 leg.

Scoped target result:

**`PASS_EXACT_SOURCE_OWNED_FRONT_LATCH_RIG_ON_UC_TARGET_HIERARCHY`**.

Retained artifact:

- ID: **`10446317053`**;
- name: `object-target-front-latch-rig-9556308c9986f71519bc488badc1b1a63e855e7e`;
- size: **`16,787 bytes`**;
- GitHub archive SHA-256: **`9af0a996acf22b05173cafcd34cae16f629d3ecea0670123669996e12274a0d1`**;
- exact artifact head: `9556308c9986f71519bc488badc1b1a63e855e7e`;
- expiry reported by GitHub: 2026-10-16.

The archive digest above is GitHub-retained metadata. This activation did **not** independently download and rehash the archive, so no independent-rehash claim is made.

## Placement / reuse decision

Correct ownership remains:

- **Object / Hard Surface:** source component and manufactured interface meaning;
- **Rigging:** articulation/deformation acceptance against exact source and target identities;
- **Technical Art / UC:** neutral target hierarchy / transport;
- **Animation:** choreography, clip timing, interpolation and `AnimationPlayer` acceptance;
- **Runtime:** controller/state machine, wall-clock behavior, resource/performance and target-device acceptance;
- **Visual Observer / Art Direction:** perceptual/final visual acceptance.

This one Object target-rig bridge is not sufficient evidence for a generic UC joint abstraction or Profession Fabric promotion.

## Handoffs

### Animation PR #10

The previous explicit provenance hold is now materially narrower: Rigging has a green exact target-host successor for PR #17/#20. Animation may use PR #23 as the Rigging-side target dependency for an explicit successor rebind/rerun. Existing Animation evidence at `5cb073f9fcf825014556ed165ee081e1eca71cdc` remains truthful for its declared older Hard-Surface #14 / Rigging #15 chain until Animation itself chooses and proves the successor.

### Technical Art

No Technical Art source or UC capability changed. PR #23 consumes exact Technical Art PR #16 neutral target hierarchy and keeps Object-specific latch binding in Rigging. Technical Art PR #19's lid target-host result remains a separate lid path.

### Runtime / Optimization

No controller, scheduler, state machine, wall-clock or device-performance acceptance transfers. Runtime should wait for an Animation successor if it intends to adopt the new source-owned latch provenance chain.

### Character / Geometry

Organic source migration is now complete, but Rigging still waits for a new exact connected Character shoulder geometry identity. Do not weight or deform the disconnected E proof mesh.

### Animal

Do not duplicate the current connected-forelimb / elbow relief lanes. Re-enter only after their source/form adoption gate identifies an exact Rigging-owned weighting or constraint need.

## Truth boundary / explicit non-claims

This activation establishes only:

> the exact current source-owned Object front-latch Rigging identity can be mapped through the already-established Object->UC handedness conversion and exercised as bilateral rigid 0/25/50° representative poses on the exact rebuilt Godot target hierarchy with bounded pivot, rigidity, fixed-component, bilateral-symmetry and neutral-return residuals.

It does **not** establish or authorize:

- `AnimationPlayer`, Animation timing, interpolation, style or clip acceptance;
- continuous collision clearance between the three retained target poses;
- runtime controller/state-machine behavior;
- real-time or wall-clock playback;
- input/gameplay interaction;
- target-device CPU/GPU/FPS/memory performance;
- physical latch retention, pin/bore/hook/catch mechanics, force, spring, friction, damping, loads, tolerances, wear or manufacturability;
- final Materials, Art Direction or Visual QA acceptance;
- merge/CANON authority;
- production readiness, game readiness or Rigging mastery.

## Four-root gate

- **Truth:** target-host acceptance is bound to exact source Rigging, source-interface, Technical Art and UC identities; the negative donor-head control fails closed; Animation/runtime claims remain explicitly false.
- **Agency / non-domination:** Rigging validates only articulation identity and static target poses. Hard Surface, Technical Art, Animation, Runtime, QA and Art Direction retain their own domains and acceptance gates.
- **Continuity:** PR #23 stacks directly on PR #20; PR #20 and historical PR #15 remain traceable; no source geometry, old evidence or downstream Animation/Runtime identity is silently rewritten.
- **Wisdom before speed:** Character weighting is still held for connected topology; Animal active lanes are not duplicated; no generic UC latch ontology or runtime system was invented from one bounded success.

## Next Rigging & Deformation pass

1. Re-scan the constellation first; do not automatically extend Object again.
2. If Geometry publishes an exact connected Character shoulder identity, evaluate that before any broad skeleton/weighting work and keep the first deformation test local and bounded.
3. If Animal form/topology adoption clears, re-enter only at the exact named weighting/constraint defect rather than replacing its existing rig wholesale.
4. Let Animation own any PR #23 clip / `AnimationPlayer` successor rebind; let Runtime own controller/device evidence.
5. Preserve physical engineering, gameplay, final visual acceptance, CANON and mastery as separate gates.
