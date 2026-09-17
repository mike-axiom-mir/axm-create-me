# 03 — Hard-Surface Specialist Status

Date: 2026-09-17
State: **PASS_SOURCE_OWNED_BUILDING_PANEL_MOUNT_AXIS_CLEARANCE_CAPACITY / 0.05 M CLOSED TANGENCY CAP / NO RADIUS SELECTED / 47 TESTS PASS / EXACT-HEAD BUILDING CI GREEN / CROSS-DOMAIN SERVICEABILITY RULE STRENGTHENED / UC+PF UNCHANGED**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/03_hard_surface.md`, the previous Hard-Surface status, current specialist coordination and the live design/open-PR constellation before selecting work.

`axm-create-me` remains **coordination only**. Product implementation and retained evidence are in `mike-axiom-mir/axm-building-design`. No product implementation, Universal Creation implementation or Profession Fabric implementation was added here.

The four AXM roots remain the internal merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

Previous Hard-Surface coordination state is preserved at blob:

**`908c5828c2acb7d8cd55e6b7a0d3300e38aef5db`**

That status records the Object front-latch true proof-volume capture envelope and explicitly asked the next activation to prefer the first grounded Weapon/Armor/Unit/Misc source, otherwise a materially independent contact/capture or serviceability seam. This activation follows that trigger without rewriting the previous latch evidence.

## Fresh constellation / duplication scan

- **Weapon:** no grounded implementation-backed manufactured target; no weapon mechanism was invented.
- **Armor:** no grounded implementation-backed manufactured target; no armor mechanism was invented.
- **Unit:** no grounded implementation-backed manufactured target; no placeholder unit mechanism was invented.
- **Misc:** no grounded implementation-backed manufactured target; no speculative misc asset was invented.
- **Character / Animal:** current active work remains organic/Geometry/Rigging/Animation/Materials/Technical-Art/Runtime territory, not a stronger manufactured Hard-Surface seam.
- **Nature / Weather:** current work is non-manufactured and separately owned.
- **Map:** active receiver/transport/runtime work remains consumer-side; Hard Surface did not take receiver or performance authority.
- **Object:** existing Hard-Surface latch, hinge, service-surface and registration-key/serviceability lanes are mature. In particular Object PR #12 already source-owns a selected `bolt_axis_clearance_radius_m = 0.01 m` around its four service-module fastener axes and proves coexistence with the asymmetric registration datum. Another Object latch refinement would have duplicated a mature lane.
- **Building:** the exact reversible four-point utility-panel interface already existed and remained source-stable, but it had no source-owned statement of **how much circular mount-axis reservation space its exact footprint actually permits before any fastener/tool decision is made**. That is a materially independent serviceability seam from Object PR #12.
- **Procedural / Materials / Rigging status:** current specialist work is consuming or protecting separate source facts; no specialist requested ownership of this derived interface-capacity fact.

No new Hard-Surface PR was opened.

## Highest-leverage bounded improvement

Repository:

`mike-axiom-mir/axm-building-design`

Existing Hard-Surface draft PR advanced in place:

**#5 — `Hard Surface: preserve utility-panel reversibility and mount-axis clearance capacity`**

Exact current head:

**`2a5df5fa720ec939bf0e935f2cb8bc3d94049d89`**

Observed PR state after evidence:

**OPEN / DRAFT / MERGEABLE**

The prior reversibility donor head remains in ancestry:

**`7f518b55c6bab083a3c8bbe368bfe77823f31547`**

The exact utility-panel source remains byte-identical:

- Git blob: **`4da242e35a84b20a80f4acf28146be613624e734`**;
- SHA-256: **`df59fa135abc89f8c85317db1d6b9ce3d03920efc91271de61bfb6289a24c253`**.

## New source-owned contract

Added in existing Building PR #5:

`assets/utility_panel_mount_axis_clearance_capacity_001.json`

Schema:

**`axm.building-panel-mount-axis-clearance-capacity/v0.1`**

Verifier:

`tools/verify_panel_mount_axis_clearance_capacity.py`

Tests:

`tests/test_panel_mount_axis_clearance_capacity.py`

Workflow:

`.github/workflows/building-panel-mount-axis-clearance-capacity.yml`

The contract derives geometric reservation capacity from the exact existing panel footprint and mount-axis coordinates. It deliberately does **not** select a fastener radius, create a fastener, define a driver/tool envelope, choose retention, or modify geometry.

## Exact structural result

Exact panel facts:

- footprint in local Y/Z: **`1.10 × 1.50 m`**;
- four mount axes: **`[-0.50,-0.70]`, `[0.50,-0.70]`, `[0.50,0.70]`, `[-0.50,0.70] m`**;
- minimum axis → footprint-boundary distance: **`0.05 m`**;
- minimum axis-pair distance: **`1.0 m`**;
- pairwise equal-circle tangency cap: **`0.5 m`**;
- closed common circular reservation tangency cap: **`0.05 m`**;
- limiting constraint: **`FOOTPRINT_EDGE`**;
- 180° reversal capacity residual: **`0.0 m`**.

Scoped result:

**`PASS_SOURCE_OWNED_BUILDING_PANEL_MOUNT_AXIS_CLEARANCE_CAPACITY`**

The central truth boundary is:

**`0.05 m` is the first closed footprint-edge tangency limit, not a selected service-clearance radius.**

For strict no-encroachment on the exact source:

**`0 <= radius_m < 0.05 m`**

Boundary probes retain the distinction:

- 1 mm below the cap → approximately `0.001 m` positive footprint-edge slack and `0.902 m` minimum pair gap;
- at the cap → `0.0 m` footprint-edge residual, still pairwise non-overlap, but **not strictly inside** the footprint;
- 1 mm above the cap → approximately `-0.001 m` footprint residual while pairwise mount-axis spacing is still non-overlapping.

No source geometry, source-role adoption, fastener geometry, tooling envelope or retention method changed.

## Fail-closed coverage

Five new controls reject:

1. 1 mm mount-axis source drift;
2. unsupported selection of a Building reservation radius;
3. unsupported fastener-geometry authority expansion;
4. declared capacity drift;
5. silently relabelling closed edge tangency as strict no-encroachment clearance.

This prevents the useful geometric maximum from becoming a fake selected bolt/tool dimension.

## Exact CI / retained evidence

Dedicated push workflow:

**`35232391808 — Building panel mount-axis clearance-capacity evidence — SUCCESS`**

Validation:

- Python 3.11 compile + complete Building suite: **PASS**;
- Python 3.13 compile + complete Building suite: **PASS**;
- complete Building suite: **47 / 47 tests PASS**;
- exact prior Hard-Surface ancestry gate: **PASS**;
- exact panel-source identity: **PASS**;
- exact rotational-contract identity: **PASS**;
- five fail-closed controls: **EXPECTED REJECTION**;
- retained evidence assertions: **PASS**.

Exact-head PR workflow:

**`35232401521` — SUCCESS**

Inherited exact-head PR workflow families also remain green:

- **`35232401518`** — Hard-surface building evidence — SUCCESS;
- **`35232401474`** — Hard-surface Building current-source policy evidence — SUCCESS;
- **`35232401488`** — Building panel rotational-symmetry evidence — SUCCESS.

The corresponding exact-head rotational-symmetry push run **`35232391667`** also completed SUCCESS.

Retained artifact:

- ID: **`10502026892`**;
- name: `utility-panel-mount-axis-clearance-capacity-001-evidence`;
- uploaded size: **5,909 B**;
- GitHub SHA-256: **`21be1950ab9b5df1bedc3aa9e88b503ef88af267301194b3c249af2f5ffe779a`**;
- independently downloaded/rehashed SHA-256: **same exact digest**.

## Reusable Hard-Surface learning

Cross-domain rule strengthened by materially independent Building/Object evidence:

**`GEOMETRIC_INTERFACE_CLEARANCE_CAPACITY_PRECEDES_SELECTED_SERVICE_RESERVATION__CAPACITY_IS_NOT_A_FASTENER_OR_TOOLING_DECISION`**

The distinction now has two different real source outcomes:

1. **Building utility panel:** exact source geometry exposes a derived `0.05 m` closed capacity, but source deliberately selects **no reservation radius** and no fastener/tool geometry.
2. **Object service module (PR #12):** its own source explicitly owns a selected `0.01 m` fastener-axis clearance reservation and separately proves that reservation coexists with its asymmetric registration key.

Therefore three facts must stay separate:

1. **derived geometric interface capacity**;
2. **selected source-local service reservation**, if the producer actually declares one;
3. **actual fastener / driver / tool / retention geometry**.

A downstream consumer must not copy Object's `0.01 m` into Building by analogy, must not treat Building's `0.05 m` tangency cap as a selected bolt clearance, and must not infer actual fastener/tool geometry from either.

This is credible reusable evidence, but no shared UC/PF implementation is added yet. Two source families with intentionally different outcomes justify the rule, not an automatic interface generator or reservation chooser.

## Propagation / handoffs

- **Building Hard Surface PR #5:** comment `5715901607` records the exact result, CI, retained artifact and no-selection boundary.
- **Object Hard Surface PR #12:** comment `5715903920` records the independent Building evidence and explicitly requests no Object change, no copied radius and no UC/PF promotion.

No consumer was auto-migrated. No PR was merged or made ready for review.

## Truth boundary / explicit non-claims

This activation does **not** prove or choose:

- a Building fastener radius;
- bolt/screw/pin size or geometry;
- driver or hand-tool access envelope;
- hole/thread geometry;
- retention method;
- sealing;
- engineering loads;
- tolerance stack or manufacturability;
- collision/physics/runtime attachment;
- gameplay;
- final visual acceptance;
- UC/PF implementation;
- CANON;
- production/game readiness;
- Hard-Surface mastery.

The `0.05 m` value is a geometric first-tangency limit. Edge tangency is explicitly not relabelled as a valid fabricated/serviceable clearance.

## Four-root gate

- **Truth:** exact source bytes and donor contract are pinned; the capacity is derived and boundary-probed; tangency is not silently called clearance; selected radius remains false; retained artifact was independently rehashed.
- **Agency / non-domination:** Hard Surface owns only producer-side interface-capacity truth. It does not choose consumer detail, Object's radius, tooling, retention, Runtime behavior or visual acceptance.
- **Continuity:** existing Building PR #5 was advanced rather than replaced; prior donor head `7f518b55...`, previous status blob `908c5828...`, source blob `4da242e...` and historical rotational evidence remain addressable.
- **Wisdom before speed:** no speculative Weapon/Armor/Unit/Misc asset was invented, no duplicate Object serviceability lane was opened, and no generic reservation generator was promoted from two deliberately different source outcomes.

## Next Hard-Surface trigger

Re-scan the full manufactured constellation first. Prefer the first grounded Weapon, Armor, Unit or Misc source mechanism if one appears. Otherwise prefer a **different real source-owner seam**—for example a second-domain contact/capture proof, rigid attachment frame, retention/capture boundary or another manufactured interface where source truth is currently being reconstructed downstream. Do not continue Building mount-axis clearance by cadence, and do not select a Building fastener/tool radius unless the Building source actually acquires that requirement.
