# 03 — Hard-Surface Specialist Status

Date: 2026-09-17
State: **ACTIVE_BUILDING_UTILITY_PANEL_NEAREST_BODY_FACE_CLEARANCE_REPAIR / SOURCE_STANDOFF_0.08→0.10_M / PHYSICAL_GAP_0.00→0.02_M / BUILDER_SEMANTICS_REPAIRED / PR17_HEAD_DE5F6417_OPEN_DRAFT_MERGEABLE / RED_PREDECESSOR_RETAINED / EXACT_HEAD_CI_QUEUED / UC+PF_UNCHANGED**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/03_hard_surface.md`, all current specialist status files, and the live design/open-PR constellation before selecting work.

`axm-create-me` remains **coordination only**. Product/source changes are confined to `mike-axiom-mir/axm-building-design`; this file is the only create-me change for the activation. No Universal Creation or Profession Fabric product implementation was changed.

The four AXM roots remain the internal merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

Previous Hard-Surface coordination state is preserved at blob:

**`8e30bb3f8ef24835569316b6550247d9bfc1c50d`**

That state proved the compact owner-seam graph on Building PR #9. This activation does not continue compact-shell seam work by cadence.

## Fresh constellation / duplication scan

- **Weapon:** root still contains only its tiny README; no grounded manufactured asset exists.
- **Armor:** root still contains only its tiny README; no grounded manufactured asset exists.
- **Unit:** repository contents endpoint still reports the repository empty.
- **Misc:** root still contains only its tiny README; no grounded manufactured asset exists.
- **Object:** mature latch, service-surface, registration and transport evidence already exists; no stronger fresh Object source-owner gap was selected.
- **Building:** a new live Hard-Surface lane exposed a concrete producer-side truth defect in `utility-access-panel-001`. Advancing that existing lane was higher value than inventing a placeholder asset or duplicating downstream Geometry/Materials/Procedural/Map work.

No duplicate PR was opened. Existing Building Hard-Surface PR #17 was advanced in place.

## Highest-leverage bounded improvement

Repository:

`mike-axiom-mir/axm-building-design`

Existing draft PR:

**#17 — `Hard Surface: correct utility-panel receiver body-clearance envelope`**

Branch:

`studio/hard-surface-utility-panel-receiver-clearance-001`

Exact current head:

**`de5f6417ce0eba24b567f32eb7528c1884edf23d`**

Observed PR state at this head:

**OPEN / DRAFT / MERGEABLE**

Exact base:

Hard Surface PR #15 head **`97120eb78a72b0a07aff1c65b9b92229d0a42aff`**.

## Source-truth defect

The predecessor source declared:

- panel body depth: **`0.08 m`**;
- receiver plate thickness: **`0.04 m`**;
- panel center standoff from receiver origin: **`0.08 m`**;
- required body clearance beyond plate: **`0.02 m`**.

The historical builder treated:

`standoff - plate_thickness`

as body clearance. That expression measures only the **body-center surplus beyond the plate**, not the nearest body face. Because the body has `0.08 m` depth, the nearest face lies another `0.04 m` inward.

Predecessor physical gap:

`0.08 - 0.04 - 0.08/2 = 0.00 m`

So the old source violated its own declared `0.02 m` nearest-body-face requirement while appearing to pass a center-offset check.

## Smallest source successor

PR #17 changes the source placement fact only:

**`standoff_from_receiver_origin_m: 0.08 -> 0.10`**

Preserved source facts:

- proof box: **`0.08 × 1.10 × 1.50 m`**;
- interface footprint: **`1.10 × 1.50 m`**;
- four mount points: unchanged;
- local service-surface identity/frame/metric domain: unchanged;
- outer service surface: local `+X`, origin `[0.04, 0, 0]`, area **`1.65 m²`**.

Corrected physical gap under both exact service-pavilion receivers:

`0.10 - 0.04 - 0.08/2 = 0.02 m`

Corrected centers:

- front utility bay: **`[-2.45, -1.10, 1.65]`**;
- east utility bay: **`[3.90, 0.10, 1.65]`**.

The source-owned contract remains:

**`axm.building-utility-panel-receiver-clearance-envelope/v0.1`**

## Builder semantic repair

The activation found that changing the source standoff alone still left the established `fit_panel()` builder exposing the old center-only quantity under the misleading field name `body_clearance_beyond_plate_m`.

That ambiguity was repaired at the source builder boundary:

- `body_center_surplus_beyond_plate_m = standoff - plate_thickness`;
- `body_clearance_beyond_plate_m = standoff - plate_thickness - body_depth/2`.

The builder now validates the **nearest-body-face** gap and keeps the center surplus only as a separately named diagnostic.

At the corrected source:

- center surplus: **`0.06 m`**;
- physical nearest-body-face clearance: **`0.02 m`**;
- these values are explicitly asserted to remain different facts.

`tests/test_service_pavilion.py` now requires exact `0.02 m` physical clearance in both orthogonal receiver frames and retains the `0.06 m` center-surplus witness.

## Test-harness repair retained honestly

The first exact-head dedicated run:

**`35247570213 — Hard-surface Building utility-panel receiver-clearance evidence`**

failed on both Python 3.11 and 3.13 during the complete unit-suite step, before receipt/artifact creation.

Inspection found a test-harness-only binary-float mistake in the new per-side footprint-margin assertion. The actual computations are:

- `(1.20 - 1.10) / 2 = 0.04999999999999993`;
- `(1.60 - 1.50) / 2 = 0.050000000000000044`.

The test incorrectly required exact list equality with `[0.05, 0.05]` despite the verifier already using a `1e-12` numeric tolerance. The repair changes only that assertion to `assertAlmostEqual(..., places=12)` for each axis. No geometry, source value, clearance threshold, authority boundary or negative control was weakened.

The red predecessor remains retained as provenance.

## Workflow binding strengthened

The dedicated workflow now explicitly watches and compiles the source builder and its regression test in addition to the source contract/verifier:

- `tools/build_service_pavilion.py`;
- `tests/test_service_pavilion.py`;
- `tools/verify_utility_panel_receiver_clearance_envelope.py`;
- `tests/test_utility_panel_receiver_clearance_envelope.py`;
- source/policy/service-surface assets.

This prevents future builder-semantics drift from bypassing the dedicated clearance evidence lane.

## Structural result at exact source values

The bounded source result being tested is:

- receiver plate outer offset: **`0.04 m`**;
- panel body inner offset: **`0.06 m`**;
- panel body outer offset: **`0.14 m`**;
- nearest-body-face gap: **`0.02 m`**;
- required gap: **`0.02 m`**;
- clearance slack: **`0.00 m`**;
- successor center surplus: **`0.06 m`**;
- predecessor physical gap: **`0.00 m`**;
- predecessor shortfall: **`0.02 m`**;
- per-side footprint capacity margin: nominally **`0.05 m / 0.05 m`**.

Fail-closed controls still cover:

1. predecessor `0.08 m` standoff;
2. body-depth drift to `0.10 m`;
3. required-gap drift to `0.03 m`;
4. front plate-thickness drift to `0.05 m`;
5. silent authority expansion into fastener geometry.

Scoped intended result remains:

**`PASS_SOURCE_OWNED_BUILDING_UTILITY_PANEL_RECEIVER_CLEARANCE_ENVELOPE`**

That result is **not yet promoted to exact-head CI PASS in this status** because the final exact-head workflows are still queued.

## Exact CI state — truthfully pending

Final exact head:

**`de5f6417ce0eba24b567f32eb7528c1884edf23d`**

Dedicated workflow:

**`35248685291 — Hard-surface Building utility-panel receiver-clearance evidence`**

Last observed state:

**QUEUED / no conclusion yet**.

Current-source-policy workflow on the same exact head:

**`35248689593`**

Last observed state:

**QUEUED / no conclusion yet**.

Five workflow runs are associated with this exact head. No green-CI, artifact, rehash or production-readiness claim is made before those workflows actually finish.

## Reusable Hard-Surface learning

Building-local rule:

**`BODY_CLEARANCE_MUST_BE_MEASURED_FROM_THE_NEAREST_BODY_FACE__CENTER_OFFSET_MINUS_PLATE_THICKNESS_IS_NOT_BODY_GAP_WHEN_THE_BODY_HAS_DEPTH`**

More generally, three quantities must remain distinct:

1. **placement datum / body-center standoff**;
2. **receiver plate outer offset**;
3. **physical nearest-body-face clearance** after body half-depth is accounted for.

A center-based transform can be geometrically correct while a clearance claim derived from that center is physically false. Hard Surface should source-own which datum a placement value addresses before downstream systems infer serviceability or fit.

This remains **Building-local**. No materially independent Weapon/Armor/Unit/Object/Misc source has yet reproduced the same center-datum clearance defect, so no generic UC/PF mechanism contract is promoted.

## Propagation / handoffs

- **Building PR #17:** comment `5718048344` records the builder-semantic repair, retained red predecessor, float-test repair and exact queued-CI boundary.
- **Building Geometry PR #16:** comment `5718050041` records that its local `+X` chart geometry remains historical evidence against PR #15, but exact source identity must not be silently rebound to PR #17 even though local face dimensions are unchanged.
- **Materials / Procedural / Map / Technical Art / Runtime:** no automatic consumer migration or acceptance transfer. Any successor adoption must explicitly bind the new source identity and retest its own receiver contract.

No PR was merged or marked ready for review.

## Truth boundary / explicit non-claims

This activation does **not** establish or choose:

- fastener geometry;
- tooling envelope;
- hinge/latch/seal design;
- manufacturing tolerance;
- structural or engineering loads;
- collision/physics correctness;
- runtime attachment;
- UV/material adoption;
- Map/Environment adoption;
- visual quality or Art/QA acceptance;
- arbitrary-panel clearance correctness;
- UC/PF implementation;
- CANON;
- production/game readiness;
- Hard-Surface mastery.

## Four-root gate

- **Truth:** the zero-clearance predecessor defect, failed CI predecessor, binary-float test mistake and still-queued final CI are all retained explicitly; no pending workflow is called green.
- **Agency / non-domination:** Hard Surface changes only producer-side placement/clearance semantics. Geometry, Materials, Procedural, Map, Technical Art, Runtime, Art and QA keep their own adoption/acceptance authority.
- **Continuity:** PR #17 stacks on exact PR #15 rather than rewriting it; PR #16 remains historical exact evidence; the old center-surplus quantity is retained under a truthful new name instead of silently disappearing.
- **Wisdom before speed:** no empty Weapon/Armor/Unit/Misc repo was filled speculatively, no UC/PF abstraction was promoted from one example, and final PASS is held until exact-head CI finishes.

## Next Hard-Surface trigger

First action next activation: inspect exact head `de5f6417...` workflows. If green, retain exact artifact identity and promote this status from ACTIVE to the bounded PASS. If red, repair only the evidenced failure without weakening the nearest-face clearance contract.

Only after this lane is resolved should Hard Surface re-scan the constellation for a different manufactured seam, preferring the first grounded Weapon/Armor/Unit/Misc mechanism if one appears. Do not continue Building by cadence merely because it currently has source material.
