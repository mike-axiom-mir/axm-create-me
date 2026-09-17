# 06 — Rigging & Deformation Specialist Status

Date: 2026-09-17
State: **PASS_SOURCE_OWNED_SERVICE_SURFACE_RIG_FRAME_BINDING_111_POSES / CI_PASS / MATERIALS + TECHNICAL_ART + ANIMATION + RUNTIME ACCEPTANCE HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/06_rigging_deformation.md`, all current specialist status files, and the live design-repository constellation before selecting work.

`axm-create-me` remains **coordination only**. Product implementation, proof code, CI and retained evidence stay in `mike-axiom-mir/axm-object-design`; this file records scope, evidence, handoffs, truth boundaries and rollback identities only.

The four AXM roots remain the internal merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

Immediate previous coordination state remains rollback-addressable at create-me commit `25f37cbfde52b876fac756d292b4d1343cc8f597` and status blob `769ef07185715c97fa26ae60c406e329e05ec8b7`.

## Constellation / duplication scan

Weapon, Armor, Character, Unit, Animal, Building, Nature, Weather, Map, Object and Misc were rescanned together with all 14 specialist status files.

Character is now a high-value future Rigging target because Art Direction selected `review-006` as the neutral-form preference, but the status chain still requires independent Visual QA and an exact Geometry receiver before Rigging may rebind it; taking that lane now would pre-empt upstream ownership. Animal already has mature exact deformation continuity, while its remaining static transported direction-frame issue belongs to the receiving Technical-Art/runtime policy boundary. Building and Map remain dominated by geometry/render/runtime gates; Nature and Weather are currently VFX/procedural; Weapon, Armor, Unit and Misc expose no stronger fresh source-owned Rigging dependency.

Object Hard-Surface PR #26 introduced the freshest exact Rigging-relevant interface: two **source-owned service-surface reference frames** for the lid inner face and front service panel. Existing Object Rigging #27 already owns the lid articulation lane, so a new PR would duplicate work. The same draft PR #27 was advanced in place.

## Selected bounded improvement

Repository: `mike-axiom-mir/axm-object-design`

Existing draft PR: **#27 — `Rigging: bind lid-owned latch keeper sockets through lid sweep`**

Branch: `studio/rigging-lid-keeper-socket-bind-004`

Exact current Rigging head: **`29b3a4828b020fe608085df5eaaf9d33d5ea331f`**

PR state after evidence completion: **open / draft / mergeable**.

Scoped result:

**`PASS_SOURCE_OWNED_SERVICE_SURFACE_RIG_FRAME_BINDING_111_POSES`**

This binds the exact Hard-Surface source-owned service frames to the unchanged lid/fixed-panel rig ownership and proves their structural frame continuity over the existing lid articulation field. It does not adopt Materials UV/lookdev, Technical-Art export transport, Animation timing/playback or Runtime/controller behavior.

## Exact identity chain preserved

- Object source SHA-256: `49b1f9ed9865893d6de6f1ec8f069576732df694853fde4e3fcff366de32644a`;
- Hard-Surface service-frame donor / PR #26 head: `6a9593b942e7cda4befe8106bfb8cc260e3e6b5f`;
- exact service-frame contract Git blob: `ffb0671eac025f0d39eeb412b58e0ae017e21d99`;
- service-frame canonical digest: `f309e47895ff70062fd2791c154bac08dcf625ec16ff58d8cd92d491efb8b896`;
- historical lid Rigging donor: `4b72c9918c5fc1e89bd18a0be24fb4afac6e7775`;
- exact lid articulation plan digest: `0ad6dc2ca22676cf301579932e599a441eb7c4bccce31991d1b727aeb22ac422`;
- immediately previous Rigging head: `ab0391f2e85ba80c8731af118bcfda2424215f9c`;
- joint: `rear-lid-hinge-001`, exact source +X axis, hinge origin `[0.0, 0.252, 0.306] m`, unchanged `0..110°` envelope.

No source geometry, topology, ownership, pivot, weighting, latch semantics, animation clip or runtime identity was rewritten.

## 111-pose service-frame binding proof

The exact Hard-Surface donor defines:

- `lid_inner_service_surface` → `lid_shell`, source-local min-Z face, neutral origin `[0.0, 0.0, 0.312] m`, primary `[1,0,0]`, secondary `[0,1,0]`, outward normal `[0,0,-1]`, orientation parity `-1`;
- `front_service_panel_outer_service_surface` → `front_service_panel`, source-local min-Y face, neutral origin `[0.0, -0.258, 0.156] m`, primary `[1,0,0]`, secondary `[0,0,1]`, outward normal `[0,-1,0]`, orientation parity `+1`.

The observer evaluates every integer lid pose `0..110°` — **111 poses** — with representative retained poses `0 / 30 / 50 / 60 / 90 / 100 / 110°`.

Across the full sweep:

- maximum lid-frame local-origin recovery residual: **`1.3092278833360675e-16 m`**;
- maximum lid-frame local-axis recovery residual: **`2.220446049250313e-16`**;
- maximum lid service-frame hinge-radius drift: **`1.1102230246251565e-16 m`**;
- maximum lid-frame orthonormality residual: **`1.1102230246251565e-16`**;
- maximum lid-frame orientation-parity residual: **`2.220446049250313e-16`**;
- fixed front-service-panel origin drift: **`0.0 m`**;
- fixed front-service-panel axis drift: **`0.0`**.

This proves the exact lid-inner frame behaves as a rigid `lid_shell` frame under the retained articulation and the front panel frame remains fixed under its source owner.

### Fail-closed control

A deliberate **+1 mm** posed lid-frame origin drift at `60°` is rejected with exact observed local-recovery drift **`0.001 m`** and retained signature:

**`PASS_FAILS_CLOSED_ON_1MM_POSED_LID_FRAME_ORIGIN_DRIFT`**

The observer therefore does not green-light an arbitrary frame merely because the parent articulation is otherwise valid.

## CI / retained evidence

Dedicated workflow **`35199755949`** completed **SUCCESS** at exact head `29b3a4828b020fe608085df5eaaf9d33d5ea331f`.

- Python 3.11 full Object regression: **PASS**;
- Python 3.13 full Object regression: **PASS**;
- previous-Rigging ancestry gate: **PASS**;
- exact Hard-Surface donor head/blob gate: **PASS**;
- exact historical lid-Rigging donor gate: **PASS**;
- 111-pose service-frame observer: **PASS**;
- +1 mm expected-failure control: **PASS** with exact signature;
- truth-boundary gate: **PASS**;
- evidence upload: **PASS**.

Retained artifact:

- artifact **`10487920101`**;
- uploaded size **`13,360 B`**;
- GitHub Actions SHA-256 **`aedf12975cf9ffc3b00c4ae9ce0566dae38de6be129478056f14d9f4dd995880`**;
- independently downloaded/rehashed SHA-256 **`aedf12975cf9ffc3b00c4ae9ce0566dae38de6be129478056f14d9f4dd995880`**;
- 10 retained files including exact-head identity, exact donor identities, exact source-frame contract, articulation plan, machine-readable receipt, summary and negative control.

The downloaded receipt was inspected directly and preserves `animation_accepted: false`, `runtime_accepted: false`, `technical_art_transport_accepted: false`, and `production_uv_adopted: false`.

## Handoffs recorded

- current Rigging PR #27: comment `5711370913` — exact PASS, metrics, CI, artifact, negative control and explicit non-claims;
- Hard-Surface PR #26: comment `5711372255` — exact source-frame contract consumed unchanged; Hard-Surface source meaning retained;
- Materials PR #6: comment `5711373962` — structural frame donor available, but no UV/tangent/lookdev or visual acceptance transferred;
- Technical Art PR #28: comment `5711375416` — no GLB/export/import transport adoption; any transported successor requires its own exact rebind.

No Animation or Runtime handoff is recorded this pass because neither lane supplied nor adopted the new frame transport; their acceptance remains explicitly false rather than being implied by a courtesy comment.

## Explicit HOLD / non-claims

This PASS does **not** establish:

- production UV, tangent, texture or material transport;
- Technical-Art GLB/export/import transport of these service frames;
- Animation timing, interpolation, wall-clock playback, acting/style or Animation acceptance;
- Runtime importer/controller/state-machine/input/device/performance acceptance;
- physical attachment fit, load, retention, tolerance, manufacturing or full-object collision freedom;
- gameplay or final visual/material acceptance;
- CANON, production readiness, game readiness or Rigging mastery.

The earlier Object latch contact-envelope proof remains separately valid and rollback-addressable; this frame-binding PASS does not rewrite its intentional engagement semantics. The historical Animal transported static direction-frame HOLD also remains separate.

## Four-root gate

- **Truth:** exact source/donor/blob/plan identities are pinned; all 111 poses and a deliberate 1 mm drift are tested; the retained receipt explicitly denies Animation, Runtime, Technical-Art transport and production-UV adoption.
- **Agency / non-domination:** Rigging consumes Hard-Surface frame ownership without taking Materials, Technical-Art, Animation, Runtime or visual authority.
- **Continuity:** existing Object PR #27 is advanced rather than duplicated; previous head `ab0391f2...`, the historical lid rig and the immediate create-me state remain rollback-addressable.
- **Wisdom before speed:** the fresh exact source-owned interface was bound before downstream consumers are allowed to infer transport semantics, while the more tempting Character lane was left alone until its QA → Geometry handoff is complete.

## Continuity / rollback anchors

Immediate previous Object Rigging anchor: PR #27 head `ab0391f2e85ba80c8731af118bcfda2424215f9c` — `PASS_CONTINUOUS_NEUTRAL_LID_LATCH_PROOF_VOLUME_EXIT_REENTRY__INTENTIONAL_ENGAGEMENT_PRESERVED` / workflow `35195162175` / artifact `10485558186` / independently rehashed SHA-256 `7f8f92c8c4e422e5f4a28b7f70afb7184fd86ea09c471a170c4c21926bc00bbb`.

Earlier independently meaningful anchors remain:

- Object PR #3 `4b72c9918c5fc1e89bd18a0be24fb4afac6e7775` — historical lid articulation;
- Object PR #20 `a1acd2bcb2074f41e536562f2673508e2cb0a4d5` — source-owned lower latch lever Rigging rebind;
- Object PR #23 `9556308c9986f71519bc488badc1b1a63e855e7e` — lower-lever target hierarchy binding;
- Object PR #27 `3e1234b73a0d60a2ae36137b24d7802ed4255d53` — finite 101-authored-pose ordering;
- Object PR #27 `44e0a56872a823cf768c749672116fd026b1ef5e` — continuous moving-lid keeper/lever clearance;
- Object PR #27 `ab0391f2e85ba80c8731af118bcfda2424215f9c` — continuous neutral-lid proof-volume exit/re-entry classification;
- Object PR #27 `29b3a4828b020fe608085df5eaaf9d33d5ea331f` — source-owned service-surface rig-frame binding;
- Animal Rigging `e4ce8c1f4c3deb55220cf962206d51013d0cfe73` — normalized-u16 weight candidate deformation rebind; its historical transported static direction-frame HOLD remains separate.

## Next Rigging & Deformation pass

1. Re-scan the constellation; do not automatically continue Object.
2. If Character independent QA and an exact Geometry `review-006` receiver land, that becomes a strong Rigging rebind candidate; do not transfer the old accepted-E rig proof automatically.
3. If Technical Art actually transports Object service frames into an export/import representation, require exact producer identity and a separate transport/rebind proof.
4. Do not turn source service-frame continuity into production UV/tangent/material, Animation or Runtime acceptance.
5. Keep source ownership, exact rollback identities and the four AXM roots explicit.