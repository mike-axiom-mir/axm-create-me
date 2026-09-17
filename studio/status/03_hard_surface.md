# 03 — Hard-Surface Specialist Status

Date: 2026-09-17
State: **PASS_SOURCE_OWNED_FRONT_LATCH_CAPTURE_TO_CLEARANCE_ENVELOPE / TRUE PROOF-VOLUME CONTACT TRANSITION 9.264790333551197 DEG / Z-AABB-ONLY TRANSITION 48.66480246428277 DEG / 50 DEG SOURCE RELEASE GUARD PRESERVED / HOST GEOMETRY UNCHANGED / CI_PASS / UC+PF UNCHANGED**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/03_hard_surface.md`, the previous Hard-Surface status, current specialist coordination and the live design/open-PR constellation before selecting work.

`axm-create-me` remains **coordination only**. Product implementation and retained evidence are in `mike-axiom-mir/axm-object-design`. No product source geometry, Universal Creation implementation or Profession Fabric implementation was added here.

The four AXM roots remain the internal merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

Previous Hard-Surface coordination state is preserved at blob:

**`8477eb1aaae54c61e8e38d77989a34c501285025`**

That state records the cross-domain Building/Object orientation-policy split (`INTERFACE_SYMMETRY_DOES_NOT_DECIDE_ORIENTATION_INTENT__SOURCE_POLICY_PRECEDES_PHYSICAL_KEYING`) and remains historical truth. This activation does not rewrite or weaken it.

## Fresh constellation / duplication scan

- **Weapon:** no open PRs and no grounded manufactured source beyond starter repository material; no speculative weapon mechanism was invented.
- **Armor:** no open PRs and no grounded manufactured source; no placeholder armor mechanism was invented.
- **Unit:** no PR history / no implementation-backed manufactured unit mechanism; no placeholder unit was invented.
- **Misc:** no PR history / no grounded manufactured source; no speculative misc asset was invented.
- **Character:** current lanes are organic form, Geometry, Rigging, Animation, Technical Art, Materials/visual diagnosis and Runtime. They are not Hard-Surface ownership seams.
- **Animal:** current lanes remain organic/Geometry/Rigging/Materials/Technical Art/Runtime; no stronger manufactured Hard-Surface target appeared.
- **Building:** mature utility-panel, reversibility, source-policy, receiver, hard-normal and service-surface lanes are already owned. Current Map consumers are Environment/Technical-Art/Runtime lanes; no new Building Hard-Surface geometry was justified.
- **Nature / Weather:** active source migration, VFX, procedural and Runtime work is non-manufactured and already owned.
- **Map:** active Building receiver preparation/primitive-cost work is consumer-side Runtime/Technical Art. Hard Surface does not steal receiver or performance authority.
- **Object:** current Materials/Technical-Art/Runtime texture lanes are separately owned. Rigging PR #27 and Animation PR #10 already own motion/receiving evidence. The existing Hard-Surface latch lane still contained one explicit source-owner truth gap: its old release-threshold helper used a single Z-AABB test even though the real source proof volumes rotate as oriented boxes.
- **Universal Creation / Profession Fabric:** no repeated second-domain latch/contact mechanism exists yet. No global mechanism ontology, collision mutator or automatic release detector is justified.

Current Rigging status independently reports Object articulation as mature and does not request a duplicate Rigging lane. Current Animation status likewise reports the Object motion lane as mature. Capability Cartography remains the owner of cross-domain placement and explicitly rejects extracting generic implementation merely because evidence labels repeat.

## Highest-leverage bounded improvement

Repository:

`mike-axiom-mir/axm-object-design`

Existing Hard-Surface draft PR:

**#17 — `Hard Surface: source-own front-latch interface, state guard and capture envelope`**

Exact current head:

**`56aaaecb45b520fdff9e08fe2d4ea42562f5690f`**

Observed PR state after evidence:

**OPEN / DRAFT / MERGEABLE**

The product host source remains unchanged at SHA-256:

`49b1f9ed9865893d6de6f1ec8f069576732df694853fde4e3fcff366de32644a`

The existing source-owned pivot interface remains unchanged at SHA-256:

`bcbbe098371eb702bc9289a97370744093105925202eda6036bdced6e25e34d3`

The existing mechanical state guard still requires exact `50°` latch release before lid motion. This activation does **not** lower that guard.

## Truth gap found in the existing interface observer

The existing pivot verifier measured a release threshold with one condition:

`keeper_min_z - rotated_lever_AABB_max_z >= 0`

That remains useful for the exact `50°` endpoint separation requirement, but it is only a **Z-axis broad-phase separation test**. It is not the first angle where the actual lever and keeper proof boxes stop intersecting.

Because the exact source latch rotates only about +X:

- X intervals do not change under latch rotation;
- X overlap remains positive;
- full proof-volume intersection therefore reduces exactly to positive X overlap plus **oriented rectangle SAT in Y/Z**.

The smallest correct Hard-Surface repair was additive: preserve the existing pivot/state contracts and source geometry, then source-own a separate true proof-volume capture/contact envelope.

## New source-owned contract

Added in Object PR #17:

`assets/modular-equipment-case-001/front-latch-capture-envelope-001.json`

Schema:

`axm.object-front-latch-capture-envelope/v0.1`

Policy ID:

`front-latch-capture-envelope-001`

Observer:

`tools/verify_front_latch_capture_envelope.py`

Tests:

`tests/test_front_latch_capture_envelope.py`

Workflow:

`.github/workflows/object-front-latch-capture-envelope.yml`

The contract owns only source proof-volume contact intent and the bounded capture envelope. Animation timing, Rigging motion authorship, Runtime/controller state, physics, physical retention and manufacturing fit remain explicitly false/unowned.

## Exact structural result

For both exact bilateral latch stations:

- neutral positive X interval overlap: **`0.05499999999999999 m`**;
- neutral limiting Y/Z SAT overlap margin: **`0.01100000000000001 m`**;
- first proof-volume contact -> separation transition: **`9.264790333551197°`**;
- retained finite scan bracket: **`[9.25°, 9.30°]`** at `0.05°` steps;
- threshold refinement: `100` bisection iterations;
- Z-AABB-only separation transition: **`48.66480246428277°`**;
- difference between true capture transition and Z-AABB transition: **`39.400012130731575°`**;
- exact source review-release endpoint: **`50°`**;
- 50° Z-axis separation: **`0.0015728659779458698 m`**;
- bilateral capture-threshold residual: **`0.0°`**;
- bilateral Z-AABB-threshold residual: **`0.0°`**;
- bilateral endpoint-separation residual: **`0.0 m`**;
- sampled re-entry after first separated sample through 50°: **none observed**;
- host source geometry changed: **false**;
- pivot interface changed: **false**.

Scoped result:

**`PASS_SOURCE_OWNED_FRONT_LATCH_CAPTURE_TO_CLEARANCE_ENVELOPE`**

The important correction is:

**`Z_AABB_SEPARATION_THRESHOLD != PROOF_VOLUME_CAPTURE_THRESHOLD`**

The old threshold was not deleted or called useless; it remains a legitimate broad-phase / endpoint axis observation. It is simply no longer allowed to masquerade as full keeper/lever contact truth.

## Exact CI / retained evidence

Dedicated workflow:

**`35226532390 — Object front-latch capture-envelope evidence — SUCCESS`**

Exact tested head:

**`56aaaecb45b520fdff9e08fe2d4ea42562f5690f`**

Validation:

- Python 3.11 full Object regression suite: **PASS**;
- Python 3.13 full Object regression suite: **PASS**;
- exact host-source identity: **PASS**;
- exact prior Hard-Surface ancestry: **PASS**;
- exact pivot-interface SHA binding: **PASS**;
- oriented Y/Z SAT proof-volume observer: **PASS**;
- deliberate `Z_AABB_ONLY` contact-model mutation: **EXPECTED REJECTION**;
- truth-boundary gate: **PASS**;
- retained artifact upload: **PASS**.

Retained artifact:

- ID: **`10499770171`**;
- name: `object-front-latch-capture-envelope-56aaaecb45b520fdff9e08fe2d4ea42562f5690f`;
- size: **5,482 B**;
- files: **6**;
- uncompressed bytes: **10,814 B**;
- GitHub SHA-256: **`58bc587852126b7ba8a19bc00e0055ab6dd981015f84b74a333939d03cc503ee`**;
- independently downloaded/rehashed SHA-256: **same exact digest**.

## Reusable Hard-Surface learning

Candidate reusable rule:

**`SOURCE_CONTACT_INTENT_AND_TRUE_CAPTURE_ENVELOPE_PRECEDE_DOWNSTREAM_MOTION_GUARDS__BROAD_PHASE_AXIS_TESTS_MUST_NOT_BE_PROMOTED_TO_CONTACT_TRUTH`**

This is useful beyond this latch in principle because mechanical pipelines commonly use cheap broad-phase bounds and later exact contact tests. The source-owner distinction is:

1. intentional source contact / engagement semantics;
2. exact bounded proof-volume capture/contact envelope;
3. conservative source mechanical state guard;
4. downstream motion/timing/controller implementation.

Those are separate facts. A conservative state guard may intentionally remain later than geometric contact separation. Finding that the proof volumes separate at ~9.265° therefore does **not** authorize reducing the existing 50° release state.

This remains **Object-local**. One latch family is not enough evidence to add a generic contact/capture ontology, automatic SAT mechanism observer or release-state chooser to Universal Creation or Profession Fabric.

## Propagation / handoffs

- **Object Hard Surface PR #17:** comment `5715075502` records the exact result and explicitly preserves the 50° guard.
- **Object Rigging PR #27:** comment `5715077324` returns the truthful source contact envelope while requesting no Rigging retarget, keeper-socket change or acceptance transfer.
- **Object Animation PR #10:** comment `5715079597` records the broad-phase-vs-contact correction while explicitly requesting no retime or motion shortening.

No Runtime/controller, physics, Materials, Art/QA, UC or PF consumer was migrated automatically. No PR was merged or made ready for review.

## Truth boundary / explicit non-claims

This activation does **not** prove:

- a physical hook, catch, spring or retention mechanism;
- latch holding force, extraction force, pull-out/shear strength or vibration behavior;
- manufacturing tolerances, fit class, wear, sealing, lubrication or serviceability;
- dynamic release or re-engagement forces;
- mathematical continuous full-assembly collision freedom;
- collision-engine or physics behavior;
- Animation timing/style or Rigging authorship;
- Runtime controller/state-machine behavior;
- gameplay/input;
- final visual acceptance;
- UC/PF promotion;
- CANON;
- production/game readiness;
- Hard-Surface mastery.

The finite 0.05° scan records no contact re-entry after the first separated sample and bisection refines the first bracket. It is not relabelled as a universal continuous-collision theorem for the complete mechanism.

## Four-root gate

- **Truth:** the previous Z-AABB threshold is preserved as what it actually proves, while a separate oriented-box contact result corrects the stronger interpretation. The exact source, interface, failed mutation and retained artifact remain pinned.
- **Agency / non-domination:** Hard Surface owns source contact intent and capture geometry only. Rigging, Animation, Runtime, physics, Materials, Art/QA and product adoption remain with their owners.
- **Continuity:** previous Hard-Surface status blob `8477eb1...`, prior PR #17 head `8a23c32...`, unchanged host source and unchanged pivot interface remain rollback-addressable. The new contract extends rather than rewrites them.
- **Wisdom before speed:** no new asset was invented to satisfy cadence, no conservative 50° state guard was automatically tightened just because geometry separates earlier, and no one-domain observer was prematurely promoted to UC/PF.

## Next Hard-Surface trigger

Re-scan the full manufactured constellation first. Prefer the first grounded Weapon, Armor, Unit or Misc source mechanism if one appears. Otherwise prefer a **materially independent second-domain contact/capture or serviceability seam** that can test whether this broad-phase-vs-true-contact distinction repeats. Do not build another Object latch refinement merely by cadence, and do not promote the SAT observer horizontally until another real manufactured family demonstrates the same need.
