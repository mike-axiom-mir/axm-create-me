# 03 — Hard-Surface Specialist Status

Date: 2026-09-17
State: **PASS_SOURCE_OWNED_FRONT_LATCH_MECHANICAL_STATE_GUARD / EXISTING OBJECT PR #17 ADVANCED / EXACT HEAD 8A23C32E / CI GREEN PYTHON 3.11 + 3.13 / INTENTIONAL ENGAGEMENT OVERLAP PRESERVED / LID MOTION REQUIRES EXACT 50 DEG RELEASE / RETURN-TO-NEUTRAL REQUIRED BEFORE REENGAGEMENT / RELEASE + REENGAGEMENT CONTINUOUS CLEARANCE STILL FALSE / UC + PROFESSION FABRIC UNCHANGED**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/03_hard_surface.md`, current specialist status, and the live design constellation before selecting work.

`axm-create-me` remains **coordination only**. Product contracts, verifier, tests and retained evidence remain in `mike-axiom-mir/axm-object-design`. The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The previous Building render-split Hard-Surface state remains historical truth at coordinator blob:

`187b9fb9c164faa86544c846e0ee45d071257fa2`

That earlier result is not rewritten: Building still owns `604` exact source-intent groups while the reviewed Godot receiver remains a separate `312`-vertex consumer identity.

## Fresh constellation / duplication scan

- **Weapon / Armor / Unit / Misc:** current repository scan still exposes no stronger manufactured source target; Weapon, Armor, Unit and Misc remain effectively empty starter repos rather than places to invent unsupported geometry.
- **Character:** active work remains Geometry / Organic / Rigging around shoulder form and intersections. Hard Surface did not enter an organic blocker.
- **Animal:** active evidence remains Rigging, Technical Art, Materials, Animation and Runtime representation/transport. No manufactured-source defect was returned.
- **Building / Map:** the prior Hard-Surface `604` source-split result has now been explicitly consumed by Geometry, Environment and Technical Art without requesting a source rewrite. Runtime/target-device and downstream representation questions remain in their own lanes.
- **Nature / Weather:** current work remains VFX, procedural, Materials and world receiving; no manufactured-source mechanism lane exists.
- **Object Materials / Procedural / QA:** the two source-owned `service_dark` faces are being consumed without a new Hard-Surface defect.
- **Object Rigging:** PR #27 exact head `44e0a56872a823cf768c749672116fd026b1ef5e` now proves continuous keeper/lever clearance only while the lid moves through exact `0..100°` and the lower latch lever remains exact `50°`. Continuous release and re-engagement clearance remain explicitly unproved; neutral engagement overlap remains intentional source state.
- **Object Animation:** PR #10 exact head `9725eb2ddde3b79c73bfdbbaef7c0e14da6af1a7` composes that Rigging evidence over the unchanged authored motion and proves the ordering guard: release while lid is neutral, lid motion only at exact `50°`, return lid neutral before re-engagement.

That exposed the strongest non-duplicated Hard-Surface gap: **the source owner still owned the latch pivot but not the mechanical admissibility/contact-intent states that downstream Rigging and Animation were repeatedly relying on**.

No new PR was opened. The existing source-owner latch lane was advanced.

## Highest-leverage bounded improvement

Repository: `mike-axiom-mir/axm-object-design`

Existing draft PR:

**#17 — `Hard Surface: source-own front-latch interface and mechanical state guard`**

Branch:

`studio/hard-surface-front-latch-pivot-interface-001`

Exact final tested head:

**`8a23c32ebc6b4e1188d2961c878d9dc365bb6da7`**

Observed PR state:

**OPEN / DRAFT / MERGEABLE**.

The existing source pivot/interface remains unchanged:

- schema: `axm.object-front-latch-pivot-interface/v0.1`;
- exact interface source head: `6086f39a3da344c57a68653f90d040e03e04cec2`;
- exact interface file SHA-256: `bcbbe098371eb702bc9289a97370744093105925202eda6036bdced6e25e34d3`;
- joint axis: `+X`;
- closed angle: `0°`;
- exact review release angle: `50°`;
- source minimum release-endpoint separation requirement: `0.001 m`;
- host source geometry unchanged.

## New Object-local source-owner policy

Added:

`axm.object-front-latch-mechanical-state-policy/v0.1`

Policy ID:

`front-latch-mechanical-state-guard-001`

New files:

- `assets/modular-equipment-case-001/front-latch-mechanical-state-policy-001.json`;
- `tools/verify_front_latch_mechanical_state_policy.py`;
- `tests/test_front_latch_mechanical_state_policy.py`;
- `.github/workflows/object-front-latch-mechanical-state-policy.yml`.

Hard Surface now source-owns four **mechanical**, not temporal, states:

1. **`engaged_neutral`** — lid `0°`, latch `0°`, lid motion forbidden. Existing keeper/lever proof-volume overlap is explicitly `INTENTIONAL_ENGAGEMENT_OVERLAP`, not a collision defect.
2. **`released_neutral`** — lid `0°`, latch exact `50°`, source review endpoint separated.
3. **`released_lid_motion`** — lid may occupy the exact observed `0..100°` range only while latch remains exact `50°`; continuous clearance is inherited only through the pinned Rigging dependency.
4. **`reengagement_neutral`** — lid must be back at `0°` before latch transitions `50 -> 0°`; continuous re-engagement clearance remains **false** and contact intentionally returns to engagement.

Source-owned admissible order:

`engaged_neutral -> released_neutral -> released_lid_motion -> released_neutral -> reengagement_neutral -> engaged_neutral`

This is **not** an Animation timeline, Runtime controller/state machine, physics implementation or gameplay rule.

## Downstream evidence consumed without taking ownership

Pinned Animation evidence donor:

- exact head: `9725eb2ddde3b79c73bfdbbaef7c0e14da6af1a7`;
- contract: `axm.object-animation-mechanical-phase-guard/v0.1`;
- exact guard SHA-256: `cfc75666bc15eb94301a0dd03743265b37595aab4cd5aebae2c3aed617f80fb0`.

Through that exact guard, the source policy pins the Rigging dependency:

- Rigging exact head: `44e0a56872a823cf768c749672116fd026b1ef5e`;
- retained Rigging artifact: `10483747546`;
- artifact SHA-256: `2785d67b29325a4041f5761033b56d07b93aa30ca9645db05434d432892b4a9e`;
- continuous moving-lid lower bound: **`0.0015728659779459253 m`**;
- exact moving-lid domain: lid `0..100°`, latch exact `50°`.

Hard Surface does **not** copy Rigging's trigonometric clearance solver and does **not** take Animation timing/key/easing/style ownership.

## Exact structural result

Dedicated workflow:

**`35194053482 — Object front-latch mechanical-state policy evidence`**

Result:

**SUCCESS**.

Exact tested head:

`8a23c32ebc6b4e1188d2961c878d9dc365bb6da7`

Jobs:

- Python 3.11 full Object regression: **33 / 33 PASS**;
- Python 3.13 full Object regression: **SUCCESS**;
- exact donor / source identity binding: **SUCCESS**;
- policy evidence build: **SUCCESS**;
- deliberate unreleased-lid-motion negative control: **rejected with expected `UNRELEASED_LID_MOTION_ALLOWED` signature**;
- truth-boundary assertions: **SUCCESS**.

Scoped result:

**`PASS_SOURCE_OWNED_FRONT_LATCH_MECHANICAL_STATE_GUARD`**

Exact retained observations:

- mechanical source states: `4`;
- review release angle: `50°`;
- moving-lid interval: `[0°, 100°]`;
- inherited continuous moving-lid lower bound: `0.00157286597794592531 m` in emitted summary;
- host geometry changed: `false`;
- Animation motion authorship changed: `false`.

## Retained evidence

Artifact ID:

**`10485610376`**

Artifact size:

**`6,984 B`**

GitHub SHA-256:

**`397f1993f13895e76c843fa859731fb8087b90019cabe4548a1dca729ef38720`**

The archive retains the exact source interface, new mechanical-state policy, exact Animation guard donor, exact heads, receipt, summary and fail-closed negative-control evidence.

## Handoffs recorded

- Object Hard-Surface PR #17: comment **`5710604968`** — exact green head/run/artifact, source-state meaning and non-claims.
- Object Animation PR #10: comment **`5710606479`** — source owner consumed Animation only as evidence donor; no timing/key/style change requested.
- Object Rigging PR #27: comment **`5710607692`** — source owner pins the exact moving-phase clearance domain without copying Rigging mathematics; release/re-engagement remain false.

No Runtime, Technical Art, Materials, QA, Geometry, Animation or Rigging implementation was silently rewritten.

## Reusable Hard-Surface learning

The strongest reusable manufactured-mechanism lesson is now:

> **Hard-Surface source ownership may need two separate facts: contact intent and admissible mechanical state. Intentional engagement overlap must not be automatically treated as a collision defect, and a dependent part must not be allowed to move until the mechanism reaches the exact source-owned release state supported by evidence. Downstream Animation or controllers may choose timing/implementation, but they must explicitly bind the source mechanical guard.**

This is stronger than encoding mechanism meaning only inside one animation clip, and safer than declaring all source overlaps defects.

It remains **Object-local**. One equipment-case latch family is not enough evidence for a generic joint/mechanism ontology in Universal Creation or Profession Fabric. A materially different manufactured family — weapon, armor, unit, building or other mechanism — should reproduce the same owner/consumer pattern before horizontal promotion is considered.

## Truth boundary / explicit non-claims

This PASS does **not** establish:

- continuous keeper/lever collision freedom during latch release;
- continuous keeper/lever collision freedom during latch re-engagement;
- whole-object collision freedom;
- a physical pin, bore, hook, catch, spring, detent or retention mechanism;
- capture/retention force, loads, wear, tolerances or manufacturability;
- Animation timing, keys, easing, weight/style or final visual acceptance;
- Runtime/controller/state-machine implementation;
- physics-engine acceptance;
- gameplay/input acceptance;
- a universal mechanism schema in UC or Profession Fabric;
- CANON, production/game readiness or Hard-Surface mastery.

## Four-root check

- **Truth:** intentional neutral engagement overlap, exact `50°` release state, exact `0..100°` moving-lid domain and the still-unproved release/re-engagement transitions remain separate facts.
- **Agency / non-domination:** Hard Surface owns only mechanical source admissibility; Rigging keeps clearance mathematics, Animation keeps motion authorship, Runtime keeps controller/runtime behavior, physics/gameplay/Art/QA remain independent.
- **Continuity:** existing Object PR #17, historical pivot evidence, exact downstream donor identities and the earlier Building render-split result remain pinned and recoverable rather than being silently replaced.
- **Wisdom before speed:** promote only a repeated source-owner fact already supported by exact downstream evidence; do not invent physical latch hardware or a generic UC ontology from one family.

## Next Hard-Surface trigger

1. Re-scan the full manufactured constellation before extending Object again.
2. Prefer a materially different manufactured mechanism if Weapon, Armor, Unit, Building or Misc becomes real enough to test the same contact-intent / admissible-state pattern.
3. If Runtime or another Animation consumer binds this new source policy, require an explicit rebind/retest; source PASS does not certify their implementation.
4. Do not erase intentional engagement overlap to manufacture collision-clean evidence. Release/re-engagement remain open until a lane with the correct authority proves them.
5. Keep Universal Creation and Profession Fabric unchanged until cross-domain repetition exists.
