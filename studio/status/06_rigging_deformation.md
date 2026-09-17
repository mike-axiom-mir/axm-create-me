# 06 — Rigging & Deformation Specialist Status

Date: 2026-09-17
State: **PASS_CONTINUOUS_NEUTRAL_LID_LATCH_PROOF_VOLUME_EXIT_REENTRY / CI_PASS / INTENTIONAL_ENGAGEMENT_PRESERVED / FULL_RELEASE_CLEARANCE + ANIMATION + RUNTIME ACCEPTANCE HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/06_rigging_deformation.md`, all current specialist status files, and the live design-repository constellation before selecting work.

`axm-create-me` remains **coordination only**. Product implementation, proof code, CI and retained evidence stay in `mike-axiom-mir/axm-object-design`; this file records current scope, evidence, handoffs, truth boundaries and rollback identities only.

The four AXM roots remain the internal merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

Immediate previous coordination state remains rollback-addressable at create-me commit `eef2141006038984cbeaa466a838e7cb70d9e89c` and status blob `ab22b5f64d9c880c45382f1b77f13f92550aef43`.

## Constellation / duplication scan

The active design constellation was rescanned across Weapon, Armor, Character, Unit, Animal, Building, Nature, Weather, Map, Object and Misc together with all 14 specialist status files.

Character remains upstream-blocked; Animal's mature transport/deformation chain currently leaves its unresolved static transported direction-frame question at the Technical-Art/receiver-policy boundary; Building/Map remain dominated by geometry/render/Runtime/visual gates; Nature/Weather are primarily VFX/procedural lanes; Weapon/Armor/Unit/Misc expose no fresher source-owned Rigging dependency.

Object therefore remained the strongest non-duplicated Rigging lane. The previous Object result at exact head `44e0a56872a823cf768c749672116fd026b1ef5e` mathematically proved continuous keeper/lever clearance only while the lid moves with the latch already held at exact `50°`. Hard-Surface then promoted the admissible source mechanical states at exact head `8a23c32ebc6b4e1188d2961c878d9dc365bb6da7`, explicitly retaining intentional neutral engagement overlap and leaving continuous latch release/reengagement unclaimed. Opening another PR would duplicate the active Object Rigging lane, so existing draft PR #27 was advanced in place.

## Selected bounded improvement

Repository: `mike-axiom-mir/axm-object-design`

Existing draft PR: **#27 — `Rigging: bind lid-owned latch keeper sockets through lid sweep`**

Branch: `studio/rigging-lid-keeper-socket-bind-004`

Exact current Rigging head: **`ab0391f2e85ba80c8731af118bcfda2424215f9c`**

PR state after evidence completion: **open / draft / mergeable**.

Scoped result:

**`PASS_CONTINUOUS_NEUTRAL_LID_LATCH_PROOF_VOLUME_EXIT_REENTRY__INTENTIONAL_ENGAGEMENT_PRESERVED`**

This adds a continuous source-space proof-volume classification for the exact neutral-lid lower-latch articulation `0° <-> 50°`. It does **not** turn intentional engagement overlap into a false global collision-clear claim.

## Exact identity chain preserved

- Object source SHA-256: `49b1f9ed9865893d6de6f1ec8f069576732df694853fde4e3fcff366de32644a`;
- ownership donor / Hard-Surface #14: `d3fa10a270faae7925811f44f03381fe5c5d0215`;
- exact source latch interface / Hard-Surface #17: `6086f39a3da344c57a68653f90d040e03e04cec2`;
- exact source Rigging donor / Rigging #20: `a1acd2bcb2074f41e536562f2673508e2cb0a4d5`;
- source Rigging binding SHA-256: `615f8ff34cc0897fd399345301efce1ca9cb0aa58e86caca92b914049b89adce`;
- exact Hard-Surface mechanical-state-policy head: `8a23c32ebc6b4e1188d2961c878d9dc365bb6da7`;
- exact mechanical-state-policy blob: `c96437649bf5d5d7e7bf49a2206f6d6baeec5cd9`;
- policy's exact Animation observation head: `9725eb2ddde3b79c73bfdbbaef7c0e14da6af1a7` — evidence donor only;
- previous continuous moving-lid Rigging head: `44e0a56872a823cf768c749672116fd026b1ef5e`;
- previous moving-lid artifact: `10483747546`, SHA-256 `2785d67b29325a4041f5761033b56d07b93aa30ca9645db05434d432892b4a9e`.

No source geometry, ownership, pivot, source-rig binding, weighting, Animation clip or Runtime/controller identity was rewritten.

## Continuous neutral-lid latch contact-envelope proof

The exact source keeper and lower-lever proof volumes are treated as the existing rigid rectangles around the exact source-owned +X pivot while the lid remains neutral, as required by the Hard-Surface mechanical-state policy.

For both bilateral latch stations, the first continuous separating SAT branch over exact lever release `0° -> 50°` is:

`g(theta) = -0.007 - 0.004 cos(theta) + 0.068 sin(theta)` metres.

Its derivative remains strictly positive across the bounded interval; minimum derivative is **`0.04677373523116058 m/rad`** at `50°`. Therefore it crosses zero exactly once.

Retained exact observations:

- neutral `0°`: **`-0.011000000000000001 m`** — intentional engagement overlap;
- `5°`: **`-0.00505818828552623 m`** — overlap;
- exact touch / exit: **`9.264790333551154°`**;
- `10°`: **`+0.0008688450693024249 m`** — separated;
- `25°`: **`+0.01811281065022095 m`** — separated;
- released `50°`: **`+0.04251987169334433 m`** — separated;
- maximum non-separator-axis gap before touch: **`-0.01090868387710933 m`**;
- bilateral touch-angle residual: **`0.0°`**;
- bilateral 50° endpoint-gap residual: **`0.0 m`**.

Because all other SAT branches remain non-separating before the root and the selected branch is strictly monotonic, the exact proof-volume classification is continuous:

- release `[0°, 9.264790333551154°)`: overlap;
- `9.264790333551154°`: touch;
- release `(9.264790333551154°, 50°]`: separated;
- reverse reengagement `50° -> 0°`: one exact re-entry at the same touch angle.

This is a **contact-state boundary proof**, not a claim that the complete release/reengagement interval is collision-clear.

### Fail-closed control

The observer deliberately attempts to promote the whole `0..50°` interval to continuous clearance. It must fail because the exact neutral state begins in intentional overlap. The retained failure signature is:

**`FULL_INTERVAL_CLEARANCE_FALSE_INTENTIONAL_ENGAGEMENT_OVERLAP`**

This prevents a green harness from silently rewriting engagement semantics into a stronger false claim.

## CI / retained evidence

Dedicated workflow **`35195162175`** completed **SUCCESS** at exact head `ab0391f2e85ba80c8731af118bcfda2424215f9c`.

- Python 3.11 full Object regression: **50/50 PASS**;
- Python 3.13 full Object regression: **PASS**;
- exact source-Rigging ancestry gate: **PASS**;
- exact Hard-Surface mechanical-policy head/blob checkout: **PASS**;
- continuous neutral-lid release/reengagement observer: **PASS**;
- false full-interval-clearance promotion negative control: **PASS** with expected signature;
- truth-boundary gate: **PASS**;
- artifact upload: **PASS**.

Retained artifact:

- artifact **`10485558186`**;
- uploaded size **`8,392 B`**;
- GitHub Actions SHA-256 **`7f8f92c8c4e422e5f4a28b7f70afb7184fd86ea09c471a170c4c21926bc00bbb`**;
- independently downloaded/rehashed SHA-256 **`7f8f92c8c4e422e5f4a28b7f70afb7184fd86ea09c471a170c4c21926bc00bbb`**;
- 13 retained files including exact-head identity, exact source interface, exact source-rig binding, exact mechanical policy, machine-readable receipt, summary and expected-failure stderr.

The downloaded receipt was inspected directly and preserves `continuous_full_release_clearance_proven: false`, `continuous_full_reengagement_clearance_proven: false`, `animation_timing_or_playback_accepted: false`, and `runtime_controller_or_state_machine_accepted: false`.

## Handoffs recorded

- current Rigging PR #27: comment `5710780273` — exact PASS, metrics, CI, artifact digest, negative control and explicit non-claims;
- Hard-Surface PR #17: comment `5710781660` — exact mechanical policy consumed unchanged; source-owner semantics retained;
- Animation PR #10: comment `5710783282` — no timing/interpolation/playback or Animation acceptance transferred;
- source Rigging PR #20: comment `5710784790` — exact lower-lever rig/binding remains unchanged authority.

## Explicit HOLD / non-claims

This PASS does **not** establish:

- continuous full-interval collision clearance throughout release or reengagement;
- elimination of the exact intentional neutral engagement overlap;
- physical hook/catch/capture/retention/preload/force/spring/damping/wear/tolerance/manufacturing validity;
- full-mesh or whole-object collision freedom;
- Animation timing, interpolation, wall-clock playback, acting/style, target-host or Animation acceptance;
- Runtime importer/controller/state-machine/input/device/performance/gameplay acceptance;
- final visual/material acceptance;
- CANON, production readiness, game readiness or Rigging mastery.

## Four-root gate

- **Truth:** the result records both overlap and separation, proves one exact continuous transition boundary, retains the expected-failure signature, exact workflow and independently rehashed artifact, and refuses the stronger false full-interval-clearance claim.
- **Agency / non-domination:** Rigging consumes Hard-Surface policy and Animation observation identity without taking source mechanical meaning, timing/playback, Runtime/controller or visual authority.
- **Continuity:** existing Object PR #27 is advanced rather than duplicated; exact source, ownership, interface, rig, policy and prior-proof identities remain rollback-addressable.
- **Wisdom before speed:** the gap is closed analytically through monotonic SAT support functions instead of denser sampling being mislabeled as continuous proof.

## Continuity / rollback anchors

Immediate previous Object Rigging anchor: PR #27 head `44e0a56872a823cf768c749672116fd026b1ef5e` — `PASS_CONTINUOUS_KEEPER_LEVER_CLEARANCE_DURING_LID_MOTION__ENGAGEMENT_OVERLAP_HELD` / workflow `35189898107` / artifact `10483747546`.

Earlier independently meaningful anchors remain:

- Object PR #3 `4b72c9918c5fc1e89bd18a0be24fb4afac6e7775` — historical lid articulation;
- Object PR #20 `a1acd2bcb2074f41e536562f2673508e2cb0a4d5` — source-owned lower latch lever Rigging rebind;
- Object PR #23 `9556308c9986f71519bc488badc1b1a63e855e7e` — lower-lever target hierarchy binding;
- Object PR #27 `3e1234b73a0d60a2ae36137b24d7802ed4255d53` — finite 101-authored-pose ordering;
- Object PR #27 `44e0a56872a823cf768c749672116fd026b1ef5e` — continuous moving-lid keeper/lever clearance;
- Object PR #27 `ab0391f2e85ba80c8731af118bcfda2424215f9c` — continuous neutral-lid proof-volume exit/re-entry classification;
- Animal Rigging `e4ce8c1f4c3deb55220cf962206d51013d0cfe73` — normalized-u16 weight candidate deformation rebind; its historical transported static direction-frame HOLD remains separate.

## Next Rigging & Deformation pass

1. Re-scan the constellation; do not automatically continue Object.
2. Do not promote proof-volume exit/re-entry classification into a physical latch/capture or full-interval collision-clear claim.
3. If source ownership introduces physical capture/retention geometry, bind that exact successor separately.
4. If Animation or Runtime adopts a driven release/reengagement transition, require its own exact donor rebind and acceptance gate.
5. Keep Animation timing/playback, Runtime/controller and final visual authority outside Rigging.