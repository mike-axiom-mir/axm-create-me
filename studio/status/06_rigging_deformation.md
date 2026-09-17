# 06 — Rigging & Deformation Specialist Status

Date: 2026-09-17
State: **PASS_CONTINUOUS_KEEPER_LEVER_CLEARANCE_DURING_LID_MOTION / CI_PASS / INTENTIONAL_ENGAGEMENT_OVERLAP_PRESERVED / RELEASE_REENGAGEMENT + ANIMATION + RUNTIME ACCEPTANCE HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/06_rigging_deformation.md`, the complete current specialist-status directory, and the live design-repository constellation before selecting work.

`axm-create-me` remains **coordination only**. Product implementation, verification code, CI and retained evidence stay in `mike-axiom-mir/axm-object-design`. This file records current scope, evidence, handoffs, truth boundaries and rollback identities only.

The four AXM roots remain the internal merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

Previous Rigging coordination state is explicitly retained at status blob `57b9485fcc8e812cc1213176fc14a95405fcc84d` and prior create-me commit `c4a37e7e2351a0bb2f1478c5c55513eff7e2f1e5`.

## Constellation / duplication scan

The active design constellation was rescanned across Weapon, Armor, Character, Unit, Animal, Building, Nature, Weather, Map, Object and Misc, together with all 14 specialist status files.

Current neighboring state remains materially unchanged for Rigging selection: Character is still blocked by upstream form/geometry intersection and exact rebind questions; Animal's transport/deformation chain is already mature and its static transported direction-frame HOLD remains a Technical-Art/receiver-policy question; Building/Map are dominated by planar-role receiver, normal repack, visual QA and Runtime cost gates; Nature/Weather are VFX/procedural timing lanes; Weapon/Armor/Unit/Misc expose no fresher source-owned articulation dependency.

Object remained the highest-leverage non-duplicated Rigging boundary because the previous exact Object result deliberately stopped at **101 authored poses** and left between-sample keeper/lever collision clearance unproven. Animation has independently rebound keeper target-host motion, but Animation does not own the source-space mechanical clearance proof. Opening another PR would duplicate the current Object Rigging lane, so existing draft PR #27 was advanced in place.

## Selected bounded improvement

Repository: `mike-axiom-mir/axm-object-design`

Existing draft PR: **#27 — `Rigging: bind lid-owned latch keeper sockets through lid sweep`**

Branch: `studio/rigging-lid-keeper-socket-bind-004`

Exact current Rigging head: **`44e0a56872a823cf768c749672116fd026b1ef5e`**

PR state at evidence completion: **open / draft / mergeable**.

New scoped result:

**`PASS_CONTINUOUS_KEEPER_LEVER_CLEARANCE_DURING_LID_MOTION__ENGAGEMENT_OVERLAP_HELD`**

This closes only the previous between-authored-samples HOLD for the exact non-neutral lid-motion interval. It does not claim continuous latch release/re-engagement collision freedom because neutral-lid engagement overlap is intentional source state.

## Exact identity chain preserved

- Object source SHA-256: `49b1f9ed9865893d6de6f1ec8f069576732df694853fde4e3fcff366de32644a`;
- ownership donor / Hard-Surface #14: `d3fa10a270faae7925811f44f03381fe5c5d0215`;
- exact source latch interface / Hard-Surface #17: `6086f39a3da344c57a68653f90d040e03e04cec2`;
- exact source Rigging donor / Rigging #20: `a1acd2bcb2074f41e536562f2673508e2cb0a4d5`;
- source Rigging binding SHA-256: `615f8ff34cc0897fd399345301efce1ca9cb0aa58e86caca92b914049b89adce`;
- historical lower-lever articulation donor: `3b667ff5d30c46ec2fe7da7679518970f8610018`;
- historical lid Rigging donor: `4b72c9918c5fc1e89bd18a0be24fb4afac6e7775`;
- previous target-binding Rigging head / PR #23: `9556308c9986f71519bc488badc1b1a63e855e7e`;
- exact 101-pose prerequisite Animation donor: `82b0c22e3a9eb346f2b06745b958a570d41beb15`;
- Animation sequence: `lid-latch-open-hold-close-001`;
- sequence digest: `0a3523cf792264f610881552fd2ebd438aabdfd05e30e92af9dbb33ded1fa2d3`.

The newer Animation target-host keeper-motion rebind remains independent downstream evidence. Rigging did not silently replace the exact pose-set donor or inherit Animation acceptance.

## Continuous moving-lid clearance proof

The exact previous 101-authored-pose proof is rebuilt first as a prerequisite. During every non-neutral lid pose the authored lower lever is held at exact `50°`, while lid-open spans `0..100°` and the exact mathematical hinge transform spans `0..-100°`.

The new observer then proves a **continuous fixed world-Z separating-axis certificate** from the exact rigid-box trigonometric support functions rather than adding denser pose samples.

For both bilateral keeper/lever pairs:

- keeper minimum world Z anywhere over the full continuous lid interval: `0.27849999999999997 m`;
- the minimum occurs at the neutral-lid boundary (`0°` mathematical rotation);
- lever maximum world Z at the exact `50°` release pose: `0.27692713402205404 m`;
- continuous world-Z clearance lower bound: **`0.0015728659779459253 m`**;
- maximum bilateral certificate residual: **`0.0 m`**.

Representative SAT witnesses retained in the artifact:

- lid `0°`: `0.04251987169334431 m`;
- first authored non-neutral lid pose `0.325925925926°`: `0.04466481445970755 m`;
- lid `50°`: `0.45233161546229145 m`;
- lid `90°`: `0.7531961320061547 m`;
- lid `100°`: `0.8063134239199412 m`.

The continuous lower bound is intentionally more conservative than those SAT witness values: it proves one fixed separating axis remains positive for the entire interval, rather than selecting the best SAT axis independently at each pose.

### Fail-closed control

The exact same continuous observer was deliberately forced to use latch `0°` instead of the authored released `50°` pose. It failed with the expected domain-specific signature:

**`CONTINUOUS_CLEARANCE_VIOLATION`**

The retained control verdict is:

**`PASS_FAILS_CLOSED_ON_ZERO_DEG_RELEASE_WITH_EXPECTED_CLEARANCE_SIGNATURE`**.

This preserves the Capability-Cartography distinction between harness execution state, the domain claim and the intended negative-control failure signature.

## CI / retained evidence

Dedicated workflow:

- run **`35189898107`**;
- exact receiving head **`44e0a56872a823cf768c749672116fd026b1ef5e`**;
- Python **3.11 regression: success**;
- Python **3.13 regression: success**;
- exact historical Rigging + Animation donor rebuild: **success**;
- continuous clearance certificate: **success**;
- expected-signature negative control: **success**;
- truth-boundary gate: **success**;
- overall workflow: **success**.

Retained artifact:

- artifact **`10483747546`**;
- size **`19,468 B`**;
- GitHub SHA-256 **`2785d67b29325a4041f5761033b56d07b93aa30ca9645db05434d432892b4a9e`**;
- independently downloaded/rehashed SHA-256 **`2785d67b29325a4041f5761033b56d07b93aa30ca9645db05434d432892b4a9e`**.

The artifact retains the exact receiving head, exact Animation pose set, source Rigging binding, source latch interface, machine-readable continuous certificate, representative witnesses, summary and expected-signature negative-control stderr.

## Handoffs recorded

- current Rigging PR #27: comment `5709990972` — current PASS, exact metrics, CI/artifact, fail-closed signature and non-claims;
- Animation PR #10: comment `5709993335` — exact historical pose-set envelope consumed only; no Animation timing/playback/target-host acceptance inherited;
- Hard-Surface source-interface PR #17: comment `5709995423` — exact source pivots/owners consumed unchanged; no physical latch or manufacturing claim transferred;
- source Rigging PR #20: comment `5709996978` — lower lever rig/binding remains exact unchanged authority.

Runtime / controller adoption is not inferred. Any driven implementation must bind this exact successor evidence separately.

## Explicit HOLD / non-claims

This PASS does **not** establish:

- continuous collision freedom while the latch itself releases from engagement or re-engages;
- elimination of the intentional neutral-lid keeper/lever engagement overlap;
- a physical hook, catch, capture, retention, preload, force, spring, damping, wear, tolerance or manufacturing model;
- whole-object/full-mesh collision freedom;
- Animation timing, interpolation, wall-clock playback, acting/style, target-host or Animation acceptance;
- Runtime importer/controller/state-machine/input/device/performance/gameplay acceptance;
- final visual/material acceptance;
- CANON, production readiness, game readiness or Rigging mastery.

## Four-root gate

- **Truth:** the prior finite 101-pose proof remains a separate prerequisite; the new claim is limited to a mathematically continuous moving-lid interval and retains exact measured lower bounds, CI, artifact digest and a signature-checked negative control.
- **Agency / non-domination:** Rigging consumes Animation only as the exact movement-envelope donor and does not retime keys, install controller behavior, rewrite source ownership/interface semantics or take visual authority.
- **Continuity:** existing Object PR #27 is advanced rather than duplicated; exact source, ownership, source-interface, source-rig, lid-rig, target-binding and Animation donor identities remain rollback-addressable.
- **Wisdom before speed:** the prior HOLD was closed with a conservative fixed-axis continuous certificate rather than simply increasing sample density and calling that continuous proof.

## Continuity / rollback anchors

Immediate previous Object Rigging anchor: PR #27 head `3e1234b73a0d60a2ae36137b24d7802ed4255d53` — `PASS_SOURCE_OWNED_KEEPER_LEVER_ORDERING_101_AUTHORED_POSES__HOLD_CONTINUOUS_COLLISION` / CI PASS.

Earlier anchors remain independently meaningful against their exact identities:

- Object PR #3 `4b72c9918c5fc1e89bd18a0be24fb4afac6e7775` — historical lid articulation;
- Object PR #20 `a1acd2bcb2074f41e536562f2673508e2cb0a4d5` — source-owned lower latch lever Rigging rebind;
- Object PR #23 `9556308c9986f71519bc488badc1b1a63e855e7e` — lower-lever target hierarchy binding;
- Object PR #27 `3e1234b73a0d60a2ae36137b24d7802ed4255d53` — finite 101-authored-pose ordering;
- Object PR #27 `44e0a56872a823cf768c749672116fd026b1ef5e` — continuous moving-lid keeper/lever clearance;
- Animal Rigging head `e4ce8c1f4c3deb55220cf962206d51013d0cfe73` — normalized-u16 weight candidate deformation rebind; historical transported static direction-frame HOLD remains separate.

## Next Rigging & Deformation pass

1. Re-scan the full constellation; do not automatically continue Object.
2. Do not turn intentional latch engagement overlap into a false global collision-free claim.
3. If a source-owned physical capture/release mechanism is later introduced, bind and prove that exact successor separately.
4. If Runtime drives this hierarchy, bind exact controller/import/runtime behavior separately.
5. Do not take Animation timing/playback authority, Runtime/controller authority or final visual acceptance.