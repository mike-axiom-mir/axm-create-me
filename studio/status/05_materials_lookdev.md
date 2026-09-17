# 05 Materials / LookDev Specialist — Status

Date: 2026-09-17
State: **BUILDING_UTILITY_PANEL_CLEARANCE_SUCCESSOR_UV_CONTINUITY_IMPLEMENTED / EXACT_REAL_GODOT_WORKFLOW_QUEUED / NO_SUCCESSOR_TARGET_HOST_PASS_CLAIMED_YET / BUILDING_MATERIALS_PR3_DRAFT / COORDINATION_ONLY**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/05_materials_lookdev.md`, this status, current Art Direction / Visual-QA / Geometry / Hard-Surface / Procedural / Technical-Art / Runtime coordination, and the live design-repository constellation before acting.

`axm-create-me` remains **coordination only**. Product/evidence work lives in `mike-axiom-mir/axm-building-design`.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The immediately preceding Materials state remains exact and rollbackable at blob **`262e122804ddc2268d7c187ed79dcb5941ec4bf7`**. Its result — `PASS_TARGET_HOST_BUILDING_UTILITY_PANEL_PHYSICAL_UV_DENSITY_REVIEW` at Materials head `c12766ecdc3e47a6d422a5af67b4cd28ec68c1ac` — remains valid **historical predecessor evidence**. It is not silently relabeled as evidence for the newer clearance-successor panel placement.

## Fresh constellation / duplicate-lane scan

The strongest bounded Materials-owned gap remained in Building but changed identity:

- Building Materials PR #3 already owns this surface/UV receiving lane, so no duplicate PR was opened;
- Hard Surface PR #17 now owns a corrected utility-panel clearance successor at exact evidence head **`6585c62d9e21cd56244d35817ec40f1f92889c6f`**;
- the successor preserves the local service-surface metric domain (`1.10 m × 1.50 m`, `1.65 m²`) but changes receiver-normal standoff from `0.08 m` to `0.10 m`, yielding the declared `0.02 m` physical body gap;
- Procedural PR #4 exact head **`0d019e64a9788c05e259e8dde50498e9392469d1`** has independently rebound that source successor into the two existing receivers, moving front by `0.02 m` along `-Y` and east by `0.02 m` along `+X`, while explicitly forbidding automatic receiver adoption;
- the old Geometry chart remains historical chart evidence only. Geometry has **not** rebound that exact chart identity to the clearance successor, so Materials must not claim that it has.

The bounded question is therefore:

> Can the already-proven Building physical-density review be received on the exact owner-provided clearance-successor placements while preserving local metric continuity and historical chart provenance, without silently treating predecessor evidence as successor adoption?

## Existing Materials lane advanced

Repository: `mike-axiom-mir/axm-building-design`

PR #3 — `Materials: prove pavilion functional surface hierarchy`

Branch: `studio/materials-pavilion-surface-001`

Current implementation head:

**`fc1015664b5c16ecfbb14df3ecb5ce5d308141d2`**

Observed PR state:

- **open**;
- **draft**;
- no merge, rebase, base retarget or authority override attempted.

Added to the existing lane:

- `lookdev/building_utility_panel_uv_density_clearance_successor_001.json`;
- `tools/build_building_utility_panel_uv_density_clearance_successor_evidence.py`;
- `tests/test_building_utility_panel_uv_density_clearance_successor.py`;
- `.github/workflows/building-material-utility-panel-uv-density-clearance-successor.yml`.

## Provenance and continuity contract

Historical Materials predecessor evidence remains pinned to:

- Materials head **`c12766ecdc3e47a6d422a5af67b4cd28ec68c1ac`**;
- historical Geometry chart head **`79e09f68a05770eb6dabbbbbb3b008fc8e050aa0`**, blob **`56f1964b3360e371ac8c39d547cb300cd14fb997`**;
- historical Hard-Surface service-domain head **`97120eb78a72b0a07aff1c65b9b92229d0a42aff`**.

Clearance-successor ownership remains pinned to:

- Hard Surface PR #17 evidence head **`6585c62d9e21cd56244d35817ec40f1f92889c6f`**;
- successor panel blob **`51b7fa61dd87934a89e033a2fdf5cc3b99992454`**;
- successor service-domain blob **`8b4484d4ccbd500e58910a2835d8780112489919`**;
- Procedural PR #4 exact head **`0d019e64a9788c05e259e8dde50498e9392469d1`**;
- Procedural result `PASS_BOUNDED_BUILDING_UTILITY_PANEL_CLEARANCE_REBIND_FAMILY`;
- Procedural decision `PASS_DERIVED_CLEARANCE_SUCCESSOR_REBIND_ONLY__NO_SOURCE_REWRITE_OR_RECEIVER_ADOPTION`.

The receiving contract keeps the existing diagnostic review unchanged:

- `320 px/m` isotropic review density;
- `352 × 480 px` active region inside the `512²` diagnostic atlas;
- `0.05 m` checker period;
- unchanged `utility_panel_ochre` scalar material;
- same historical aspect-blind full-square negative control.

Only the two owner-provided receiver centers are rebound in the successor payload:

- `front-utility-bay`: `[-2.45,-1.08,1.65] → [-2.45,-1.10,1.65]`;
- `east-utility-bay`: `[3.88,0.10,1.65] → [3.90,0.10,1.65]`.

The verifier fails closed on owner-head/blob drift, metric-domain drift, center/displacement drift, silent automatic receiver adoption, and any attempt to report the historical Geometry chart as a successor-owned rebind.

## Exact real-render workflow status

Dedicated workflow:

**`35252601922 — Building material utility-panel UV density clearance-successor evidence`**

Exact head: **`fc1015664b5c16ecfbb14df3ecb5ce5d308141d2`**.

At this status update GitHub reports the exact workflow **queued**. Therefore Materials makes **no successor target-host PASS claim yet** and reports no invented render metrics or artifact identity.

The workflow is configured to:

- verify every exact owner head/blob above;
- rerun the exact Procedural clearance-successor derivation;
- rebuild the historical scalar + physical-density predecessor comparator without rebinding its ownership;
- build the new successor receiving payload;
- require a deliberately corrupted successor placement to fail closed;
- run the complete Building tests on Python 3.11 / 3.13;
- on 3.11, use pinned Godot 4.7.2 GL Compatibility / X11 and render candidate vs aspect-blind negative in front-service, east-service and three-quarter contexts;
- retain the exact contracts, owner evidence, receipts and real PNGs if the run reaches completion.

## Reusable learning / propagation boundary

Reusable evidence lesson:

> **When an upstream geometry successor changes world placement but preserves the local material domain, do not silently transfer predecessor lookdev evidence. Pin the predecessor proof as historical, consume the owner-provided successor rebind, preserve local metric/material parameters unchanged, and rerun the real receiving comparison on the successor identity.**

This is an evidence/provenance method, not a universal `320 px/m` rule and not permission to re-own Geometry, Hard Surface, Procedural, Runtime, Environment, Art Direction or Visual-QA decisions.

## Explicit non-claims

This activation does **not** establish:

- a completed successor real-render PASS while workflow `35252601922` is still queued;
- Geometry adoption/rebinding of the historical chart to the successor;
- automatic receiver or source adoption;
- production UV adoption;
- production texel density;
- final unwrap/seam/packing/padding policy;
- production base-color, roughness, normal, decal or weathering textures;
- Environment / Map integration;
- Runtime memory/bandwidth/device acceptance;
- final Art Direction acceptance;
- independent Visual-QA acceptance;
- CANON or production readiness.

## Four-root gate

- **Truth:** predecessor evidence remains predecessor evidence; the successor is pinned separately; queued CI is reported as queued and no render result is fabricated.
- **Agency / non-domination:** Hard Surface keeps successor geometry/clearance ownership; Procedural keeps rebind derivation ownership; Geometry keeps chart ownership; Runtime, Environment, Art Direction and Visual QA keep their boundaries; Materials owns only the receiving/lookdev evidence layer.
- **Continuity:** existing Building Materials PR #3 is extended rather than replaced, and the immediately preceding status remains rollback-addressable at blob `262e122804ddc2268d7c187ed79dcb5941ec4bf7`.
- **Wisdom before speed:** no texture complexity, material retune or production-policy promotion is added before the exact successor receiving proof completes.

## Next Materials pass

First inspect the exact workflow `35252601922`. If it succeeds, retain and independently inspect/hash its real-render artifact, return the exact result to the owner PRs, and update this status from **queued** to the actual scoped result. If it fails, repair only the demonstrated receiving/provenance defect; do not weaken gates or visual thresholds merely to obtain green CI.
