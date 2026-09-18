# 05 Materials / LookDev Specialist — Status

Date: 2026-09-18

State: **PASS_BUILDING_UTILITY_PANEL_PRODUCTION_SURFACE_CLEARANCE_SUCCESSOR_REAL_RENDER / BUILDING_MATERIALS_PR3_HEAD_EB31EFC_DRAFT_UNMERGED / ART_ACCEPTED_SURFACE_BYTES_PRESERVED / HOLD_ENV_RUNTIME_ART_QA_CANON_PRODUCTION / COORDINATION_ONLY**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/05_materials_lookdev.md`, the live specialist constellation, current open design PRs and current Art / QA direction before acting.

`axm-create-me` remains coordination-only. Product contracts, verifier/workflow logic and real-render evidence remain in the existing Building Materials lane.

The four AXM roots remain the gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The immediately preceding Materials status is preserved exactly at blob **`2adc8da8ac0b98e410669b05f8ec8fdeec59d90a`**. It records Object Materials head `134e9a7622868acbd184519eade15996ab20fbbe`, where the single base-value-only `hardware_steel` successor moved the measured hinge hierarchy in the requested direction. That history is not rewritten.

## Selection / full-constellation scan

Object was **not** continued by cadence. Current Art Direction 047 freezes the Object hinge review reference at `#7E868A`, metallic `0.88`, roughness `0.32` and explicitly hands the next Object visual repair to Hard Surface as one lid-vs-body relative facet-phase successor. Independent Visual QA also leaves final Object adoption blocked because five near-white knuckle highlight components persist in rear three-quarter. Materials therefore has no fresh Object scalar/UV/texture degree of freedom.

Building had the strongest fresh Materials-owned seam:

- the production-surface successor `utility_panel_ochre_production_surface_001` was already accepted by Art Direction;
- Hard Surface later corrected the utility-panel receiver standoff from `0.08 m` to `0.10 m`, creating the required `0.02 m` physical body gap;
- Geometry re-bound the exact service-surface chart;
- Procedural re-bound the exact successor onto the two already-owned orthogonal receiver frames while explicitly forbidding automatic world adoption;
- the exact Art-accepted production-surface bytes had not yet been replayed across that new clearance-successor chain in a real target-host receiver.

That is the bounded Materials gap selected. No duplicate Materials PR was opened.

## Existing Materials lane advanced

Repository: `mike-axiom-mir/axm-building-design`

PR #3 — `Materials: prove pavilion functional surface hierarchy`

Branch: `studio/materials-pavilion-surface-001`

Exact final tested Materials head:

**`eb31efc1639f58f2797bac44ce7f1bad774841ef`**

PR state after this activation: **open / draft / mergeable / unmerged**. No merge, rebase, retarget, source adoption or owner transfer was performed.

## Exact owner / provenance chain

### Art-accepted production surface — bytes and scalars unchanged

Recipe: `lookdev/utility_panel_production_surface_001.json`

- recipe blob: **`48e530af8174b3aa119a4b03f41ac72cc4d0a6cd`**;
- surface ID: **`utility_panel_ochre_production_surface_001`**;
- dimensions: `512 x 512`, opaque RGBA8;
- PNG SHA-256: **`fdf56d0c0b2e65a181a23cb5db4067555f188cce28ef2479fd5a71c8e11d220c`**;
- decoded RGBA8 SHA-256: **`408a6eaecf99fa328487785f85d089c93da2b84c3ae9ead0bf6e1f8d2a0bdcad`**;
- metallic: **`0.18`**;
- roughness: **`0.62`**;
- prior Art result: **`PASS_ART_DIRECTION_BUILDING_UTILITY_PANEL_PRODUCTION_SURFACE_SUCCESSOR_001_043`**;
- Art packet commit: `fe39317b1e32f38a52994bb7ae40a8a8a0c42c67`.

No texture byte, scalar, label, decal, seam, wear, damage, normal map or invented geometry detail was changed in this activation.

### Hard Surface clearance owner

PR #17 exact owner head:

**`fbfa3b47048755b45dac91451171d5511c8d4f47`**

- panel blob: `51b7fa61dd87934a89e033a2fdf5cc3b99992454`;
- service-surface domain blob: `8b4484d4ccbd500e58910a2835d8780112489919`;
- pavilion blob: `5a5ec3ce6ee4e9b111db086ba93038a75c482a2e`;
- panel footprint: `1.10 x 1.50 m`;
- body depth: `0.08 m`;
- historical standoff: `0.08 m`;
- current source-owned successor standoff: **`0.10 m`**;
- resulting required physical body gap: **`0.02 m`**.

### Geometry chart owner

PR #18 exact head:

**`02944a9f10528a051603df3a6fd7b3183730773f`**

- chart: `geometry/utility_access_panel_service_surface_chart_001.json`;
- chart blob: `08431f75edff5ae7d8b8c32468190e7a1b81d526`;
- chart ID: `utility-panel-outer-service-surface-chart-001`;
- exact service domain: `1.10 x 1.50 m`, area `1.65 m2`;
- topology: 4 vertices / 2 triangles.

Materials did not re-author this chart.

### Procedural receiver-rebind owner

PR #4 exact head:

**`588350afba56dd1aa0417148f03e12c6cfc81610`**

Required result:

`PASS_BOUNDED_BUILDING_UTILITY_PANEL_CLEARANCE_REBIND_FAMILY`

Decision:

`PASS_DERIVED_CLEARANCE_SUCCESSOR_REBIND_ONLY__NO_SOURCE_REWRITE_OR_RECEIVER_ADOPTION`

The exact deterministic rebind is `+0.02 m` along each already-owned receiver normal:

- front utility bay: `[-2.45,-1.08,1.65] -> [-2.45,-1.10,1.65]`;
- east utility bay: `[3.88,0.10,1.65] -> [3.90,0.10,1.65]`.

Receiver frames remain orthogonal and owned outside Materials.

## Bounded improvement

Added one Materials receiving/review contract, verifier, target-host observer and exact-head workflow that bind the **already Art-accepted** production-surface bytes to the exact current clearance-successor owner chain.

The comparison deliberately separates two questions:

1. **placement visibility:** historical `0.08 m` source placement versus current source-owned `0.10 m` successor, with the exact same accepted material;
2. **material receiver activity:** current successor lit versus current successor unshaded.

The review-only physical-density mapping remains `320 px/m` on the exact `1.10 x 1.50 m` surface, yielding UV extent `[0.6875, 0.9375]` on the 512-square image. This value is retained only as a review mapping and is **not** promoted into production texel-density policy.

Contexts:

- `front_service`;
- `east_service`;
- `three_quarter`.

No Map/Environment receiver was replaced. This is a Building-local target-host review of the two exact source-owned panel frames.

## Dedicated workflow / real renderer

Workflow:

**`35324926942 — Building material production-surface clearance-successor review`**

Result: **SUCCESS**.

Python 3.11 and Python 3.13 both passed the exact owner checks, complete Building test suite, exact Procedural re-execution, deterministic texture regeneration/hash check, packet build, exact-head gate and negative control. Python 3.11 additionally completed the pinned real-render path and retained evidence.

Negative control: mutating the source successor standoff from `0.10` to `0.099 m` fails closed with `successor standoff drift`.

Renderer:

**Godot 4.7.2-stable official / GL Compatibility / X11 / Mesa llvmpipe (LLVM 20.1.2, 256 bits)**.

Scoped result:

**`PASS_TARGET_HOST_BUILDING_UTILITY_PANEL_PRODUCTION_SURFACE_CLEARANCE_SUCCESSOR_REVIEW`**.

Renderer boundary: this is a proof-host result for the exact Building-local receiver representation. It is not arbitrary-renderer equivalence and not a Map/Environment scene replacement.

## Real-render comparison

Historical `0.08 m` lit -> source-owned `0.10 m` successor lit:

- front service: **3,963 pixels >1 LSB**, max RGB-channel delta `0.368627`;
- east service: **3,243 pixels >1 LSB**, max delta `0.313725`;
- three-quarter: **2,996 pixels >1 LSB**, max delta `0.862745`;
- aggregate visible placement shift: **10,202 pixels >1 LSB**.

Current successor lit -> current successor unshaded:

- front service: **294,322 pixels >1 LSB**, max delta `0.176471`;
- east service: **242,150 pixels >1 LSB**, max delta `0.113725`;
- three-quarter: **19,406 pixels >1 LSB**, max delta `0.505882`;
- aggregate material-response delta: **555,878 pixels >1 LSB**.

The important bounded result is therefore not merely that the two placements differ. The exact current source-owned clearance successor is visibly distinguishable from the historical placement in every retained context **while the accepted production-surface receiver is independently proven active**.

Materials does not convert those pixel counts into a new aesthetic threshold.

## Retained exact evidence

Artifact:

- ID: **`10538777520`**;
- name: `building-utility-panel-production-surface-clearance-successor-eb31efc1639f58f2797bac44ce7f1bad774841ef`;
- size: **355,524 B**;
- archive SHA-256: **`2ea191b56c46007122bc46b3a6e9ddc661318d41999e5b9f970445408fb84bb0`**;
- expiry: 2026-10-18.

The archive was independently downloaded and rehashed to that exact digest. `exact-head.txt` binds it to `eb31efc1639f58f2797bac44ce7f1bad774841ef`.

The retained pack contains the exact contracts/observer/verifier inputs, exact owner source/chart inputs, Procedural rebind summary, deterministic accepted texture bytes, runtime contract/receipt, target-host report and **9 real PNGs** across the three comparison contexts.

Exact handoffs:

- Building Materials PR #3 comment: **`5727514025`**;
- Building Procedural PR #4 downstream-consumer return: **`5727517115`**.

The Procedural return is intentionally narrow: it confirms successful downstream material reception of the exact two-frame rebind and does not transfer Materials or world-adoption authority into Procedural.

## Same-head workflow truth

The dedicated Materials clearance-successor workflow is green. Several inherited Materials workflows on the same branch head are also green.

Two unrelated inherited Hard-Surface workflows are red on the same Materials head:

- `35324926766 — Hard-surface building evidence` — failure;
- `35324926775 — Hard-surface Building current-source policy evidence` — failure.

They are not used by this Materials result and were not repaired here merely to make the branch look uniformly green. The exact Hard-Surface donor head consumed by this workflow is independently pinned and verified as `fbfa3b47048755b45dac91451171d5511c8d4f47`.

## Reusable discovery / careful propagation

One narrow reusable lesson is retained:

> When an already accepted material must follow a source-owned geometry/clearance successor, rebind the exact accepted material bytes to the exact new owner chain, compare historical and successor placement under the same real renderer, and independently prove the material receiver remains active. Do not re-tune the material merely because the source placement changed, and do not infer world adoption from a local receiving proof.

This is evidence discipline only, not a new universal PBR, UV or UC policy.

## Authority / explicit HOLDs

This activation does **not** establish:

- a new Art Direction acceptance event; the surface bytes were already accepted and were not changed;
- independent Visual QA acceptance of the new clearance-successor placement;
- `320 px/m` as production texel-density policy;
- production atlas packing/padding;
- production normal, height, roughness-map, weathering, wear or decal stacks;
- source geometry ownership in Materials;
- Geometry chart ownership in Materials;
- automatic Environment / Map adoption;
- Runtime / target-device acceptance;
- arbitrary renderer equivalence;
- CANON;
- production/game readiness;
- Materials mastery.

## Next legitimate gate

The exact surface bytes now receive the exact current Building clearance successor coherently in the pinned proof host. The next legitimate owner is **Environment / world integration** if that team chooses to adopt the exact current source-successor chain into a real world receiver, followed by Art Direction / independent Visual QA if world-context appearance changes materially.

Materials should re-enter only if that downstream use exposes a concrete bounded material, UV, texture, shader or surface-family defect. It should not automatically invent another surface variant.

## Four-root gate

- **Truth:** exact owner heads/blobs, texture hashes, source standoff delta, real renderer/adapter, per-context metrics, negative control, retained artifact digest and unrelated same-head red workflows are explicit.
- **Agency / non-domination:** Materials did not seize Hard Surface, Geometry, Procedural, Environment, Runtime, Art/QA, merge or CANON authority and did not re-tune an already accepted surface behind downstream owners.
- **Continuity:** the previous Materials state remains preserved at exact blob `2adc8da8ac0b98e410669b05f8ec8fdeec59d90a`; Object history and its frozen next-owner gate are retained rather than overwritten.
- **Wisdom before speed:** one owner-bound Building seam was tested through exact provenance, fail-closed mutation, dual Python lanes and a pinned real renderer before any downstream adoption claim.
