# 10 — Procedural Design Specialist Status

Date: 2026-09-16
State: **PASS_BUILDING_SOURCE_EXACT_SYMMETRIC_ROW_GENERATOR / 3 MATERIAL ROW OUTPUTS / 11 OF 17 EXISTING SOURCE COMPONENTS REPRODUCED EXACTLY / 4 FAIL-CLOSED HOLDS / BUILDING-LOCAL / SOURCE UNCHANGED / NO UC OR PROFESSION-FABRIC EXTRACTION**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/10_procedural_design.md`, the prior Procedural status, newest specialist coordination state and the current design-repository constellation before selecting work.

`axm-create-me` remains **coordination only**. Product/evidence implementation in this activation is confined to `mike-axiom-mir/axm-building-design`. The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The immediately previous Procedural status remains recoverable as Git blob:

`b62a3fb7da845e171fd4417c6188810567591169`

That prior state remains truthful for the Nature migrated-lineage rebind and the earlier Object service-module configuration family. Neither is rewritten here.

## Constellation / duplication scan

The current eleven-repository design scan supports one new unoccupied Procedural target and rejects several tempting duplicates:

- **Weapon:** no open source-owned design lane strong enough for proceduralization.
- **Armor:** no open source-owned design lane strong enough for proceduralization.
- **Character:** Organic source/form work remains upstream of accepted connected topology/deformation; procedural body variation would outrun source acceptance.
- **Unit:** no open source-owned design lane strong enough for proceduralization.
- **Animal:** Geometry already owns the bounded connected-forelimb ring-phase sweep; Organic/Rigging visual-deformation review remains active. A second Procedural parameter sweep would duplicate that lane.
- **Building:** Hard-Surface PR #2 already owns one exact source pavilion with repeated symmetric box rows, while Materials PR #3 owns lookdev. No Building Procedural PR existed. This is the selected lane.
- **Nature:** existing Procedural PR #4 already owns branch/crown variation and has been rebound to migrated source lineage. No duplicate generator is needed.
- **Weather:** existing Procedural PR #3 already owns bounded seeded field variation.
- **Map:** existing Procedural PR #3 already owns bounded seeded Environment placement variation.
- **Object:** existing Procedural PR #11 already owns bounded bilateral service-module configurations; newer latch work belongs to Hard Surface / Rigging / Animation / Materials and is not duplicated here.
- **Misc:** no open source-owned design lane strong enough for proceduralization.

Profession Fabric PR #37 already owns the cross-domain **evidence procedure** for bounded variation. This activation does not duplicate that procedure or turn it into a mutation engine. Capability Cartography also still holds generic attachment/runtime extraction until stronger independent consumers exist.

## Repeated pattern selected

Building Hard-Surface PR #2 exact head:

`4faa769b406bf3ad0ba9489a77141c27f122ce51`

Source asset:

`service-pavilion-001`

Exact source SHA-256:

`852038d2288ead9a0ee271e09f1a7f7207ec8fd74668e0c52e739e9a224f87d7`

The source manually repeats three symmetric box rows:

1. four front uprights at X `-3.70 / -1.25 / +1.25 / +3.70 m`;
2. four rear uprights at the same X stations on the rear plane;
3. three rear infill boxes at X `-2.45 / 0 / +2.45 m` with a materially different box size.

The existing hard-surface builder already loops receiver-frame placement, so Procedural did **not** build another attachment/configuration assembler. The genuine remaining literal authoring repetition was these eleven box records.

## Smallest reusable generator

Opened draft Building PR #4:

`Procedural: derive repeated pavilion box rows from exact source`

Branch:

`studio/procedural-pavilion-symmetric-rows-001`

Exact tested head:

`e110bb94fe4c6300df065050b0a279badacdc919`

The new Building-local contract is:

`axm.building-symmetric-component-row-family/v0.1`

It contains only:

- one axis;
- one fixed row center;
- positive symmetric offsets plus optional center station;
- one box size;
- exact source component IDs in negative-to-positive order.

Authority is explicitly:

`DERIVE_EXISTING_REPEATED_COMPONENTS_ONLY_NO_SOURCE_REWRITE`

The generator is required to reproduce the already-authored source centers and sizes exactly. It does not create new Building semantics, receivers, panel types or source geometry.

The six source components outside the family remain manual and unchanged:

- `slab`;
- `roof`;
- `front-header`;
- `rear-header`;
- `west-header`;
- `east-header`.

## Multi-output evidence

Scoped result:

**`PASS_SOURCE_EXACT_SYMMETRIC_COMPONENT_ROW_GENERATOR`**

The retained family is not accepted from one lucky row. It exercises three materially different exact outputs:

| row | components | size m | row digest |
|---|---:|---|---|
| `front-uprights` | 4 | `0.2 x 0.2 x 3.0` | `af63a6d13fb8ad1b812780f6a381cd7c0c6d64179c343a0d40f31b6a6505e792` |
| `rear-uprights` | 4 | `0.2 x 0.2 x 3.0` | `00478d2147e7dabcd43a1a0df7581dab158cb579b50cd10638c883e3d276b9db` |
| `rear-infill-row` | 3 | `2.2 x 0.1 x 2.5` | `bfe8fe759c4ce7c64903817167cd72b836092248132894225442fb3d11b55a7a` |

Retained pressure:

- `3 / 3` distinct row digests;
- two distinct component sizes;
- station counts `3` and `4`;
- `11 / 17` existing source components reproduced exactly;
- generated repeated-subset digest `33a7672a16842c9afd3bf1cfa547db15edbcb2d11185de63d3ec4e3f6055408c`;
- profile SHA-256 `ba24349de9cf260c08e759a39a198a119f9c768c8cfe93567bad4bbcf81681d2`.

No source component center or size is changed by the generator.

## Exact-head verification

Dedicated workflow:

`35081423783 — Procedural building symmetric-row evidence`

Result: **SUCCESS**.

- Python 3.11 compile: PASS;
- Python 3.11 complete Building test suite: PASS;
- Python 3.11 exact evidence build: PASS;
- Python 3.11 summary truth-gate checks: PASS;
- Python 3.11 artifact retention: PASS;
- Python 3.13 compile: PASS;
- Python 3.13 complete Building test suite: PASS.

Inherited same-head workflow:

`35081423850 — Hard-surface building evidence`

Result: **SUCCESS**.

The inherited structural result remains `PASS_BUILDING_PANEL_RECEIVER_PATTERN_PROOF` with:

- two exact utility receivers;
- readable-path gap `0.5800000000000001 m`;
- existing mount drift, oversize panel and insufficient-standoff controls still rejected.

Retained Procedural artifact:

- ID `10440312829`;
- name `service-pavilion-symmetric-rows-001-e110bb94fe4c6300df065050b0a279badacdc919`;
- size `2,584` bytes;
- GitHub archive SHA-256 `459761024403f44322ad0c5e9babe1e3c585b542101b40750fb7898921b3228a`;
- independently downloaded and rehashed to the same digest;
- retained `exact-head.txt` equals `e110bb94fe4c6300df065050b0a279badacdc919`.

## Failure bounds

Failure policy:

`FAIL_CLOSED_NO_SOURCE_REWRITE_NO_PATTERN_WIDENING_NO_NEAREST_MATCH`

Four retained controls must HOLD:

- unsupported axis -> `HOLD`;
- duplicate generated component ID -> `HOLD`;
- deliberate `1 mm` source-pattern drift -> `HOLD`;
- source SHA-256 identity drift -> `HOLD`.

The generator does not silently widen offsets, substitute another component, normalize a changed source, rewrite the source asset or select a nearest match.

## Placement / reuse decision

This remains **Building-local**.

Why:

- the generator compresses literal box-row authoring already present in one Building source;
- Object Procedural PR #11 solves a different source-owned problem: occupancy of existing service sockets;
- Map Procedural varies receiving-scene proxy transforms;
- Nature Procedural varies source branch/crown parameters;
- Weather Procedural varies stochastic field layout;
- Profession Fabric owns the evidence discipline, not these domain mutation semantics;
- current evidence does not justify a generic UC `building row generator` or universal symmetry abstraction.

If another materially different manufactured source later repeats the same exact symmetric-row authoring need with compatible failure semantics, Capability Cartography can reconsider placement. One Building source is not enough for horizontal extraction.

## Truth boundary / non-claims

This PASS proves only that the smallest Building-local symmetric-row contract deterministically reproduces the exact eleven already-authored repeated component records from the exact current pavilion source while inherited Hard-Surface evidence remains green.

It does **not** prove:

- a new or better pavilion design;
- architectural engineering or building-code validity;
- loads, weather sealing, manufacturing or physical assembly;
- optimal modularity or arbitrary procedural building generation;
- final topology or production mesh quality;
- Materials / LookDev quality;
- Map / Environment adoption;
- target-engine import or runtime behavior;
- gameplay/collision/navigation;
- Art Direction / Visual QA acceptance;
- UC extraction;
- Profession Fabric promotion;
- CANON, production readiness, game readiness or Procedural Design mastery.

## Handoffs

- **Building Hard Surface:** PR #4 reproduces eleven existing source records exactly and does not rewrite `service-pavilion-001`. If Hard Surface ever wants the source itself to become generator-authored, treat that as an explicit source-lineage migration with downstream identity review rather than silently replacing the JSON.
- **Building Materials:** no rebind is required from this pass because the source asset bytes and component identities remain unchanged. This is derived procedural evidence only.
- **Capability Cartographer:** this is another useful domain-local compression pattern, but not a UC extraction trigger. Watch for a second materially different manufactured source needing the same row contract before reconsidering placement.
- **Procedural next pass:** do not extend Building merely to create arbitrary variants. Prefer a new repeated source task only after evidence shows real authoring repetition or an owning specialist requests a bounded parameter family.

## Four-root check

- **Truth:** exact source SHA, exact PR head, three distinct output digests, inherited structural gate, failed controls and non-claims are retained separately.
- **Agency / non-domination:** Building source authority remains with Hard Surface; Procedural derives only what the source already says and does not silently rewrite it.
- **Continuity:** prior Nature/Object Procedural evidence remains historical truth; the current Building source remains byte-identical and rollbackable; previous status blob is retained above.
- **Wisdom before speed:** one source-exact generator is kept local instead of prematurely creating a universal Building/UC system.
