# 02 — Geometry & Topology Specialist Status

Date: 2026-09-17

State: **HOLD_UC_DIRECTIONAL_TEXEL_DENSITY_OBSERVER_IMPLEMENTED / UC_PR_193_HEAD_8B1AF776 / TWO_INDEPENDENT_PRODUCT_CASES / SOURCE_IMPLEMENTATION_COMPLETE / FAILED_PREDECESSOR_PRECISION_ASSUMPTION_RETAINED / FLOAT32_REGRESSION_REPAIR_APPLIED / EXACT_HEAD_CI_QUEUED / NO_PRODUCT_POLICY_MOVE / COORDINATION_ONLY**

## Current activation

Re-read:

- `studio/3D_STUDIO_CAMPAIGN.md`;
- `studio/specialists/02_geometry_topology.md`;
- this specialist's immediate prior status;
- current Capability Cartography state;
- current specialist/status files and open work across the full design constellation;
- exact current Universal Creation material/UV observer state;
- the independent Building and Object evidence families that now expose the same neutral measurement gap.

`axm-create-me` remains **coordination only**. Product/shared implementation in this activation lives in `mike-axiom-mir/axm-universal-creation`; this repository receives only this status update.

The four AXM roots remain the internal gate:

1. **Truth**;
2. **Agency / non-domination**;
3. **Continuity**;
4. **Wisdom before speed**.

Immediate previous Geometry status remains rollback-addressable at blob:

`8ab0ac24a5e37de33783e3e5d25f98cb8f95a477`

That prior status preserves Building Geometry PR #16's exact source-frame chart work at head `79e09f68a05770eb6dabbbbbb3b008fc8e050aa0`; none of that evidence is rewritten here.

## Fresh constellation / duplicate-lane scan

Current owner work was inspected before selecting a new lane.

- Character Geometry #16 already owns the selected review-006 shoulder topology and shared-topology/self-intersection receiver rebinds. Rigging, Materials, Technical Art, Animation, Runtime, Art and QA have live downstream ownership. No new measured Character topology defect justified another mesh mutation.
- Animal already has connected-chain Geometry and active Rigging/Materials/Technical-Art/Animation work. No competing neutral directional-density observer exists there.
- Building has active Hard Surface, Materials, Procedural, Map Technical Art/Environment and Runtime ownership. Geometry #16 already supplies the exact source metric frame/chart; continuing to author Building atlas/material policy would duplicate downstream lanes.
- Object has active Hard Surface, Materials, Procedural, Technical Art and Runtime ownership. Its exact rectangular-atlas transport is a supporting case, not permission for Geometry to take Object atlas policy.
- Nature, Weather and Map retain active source/VFX/Environment/Runtime lanes.
- Weapon, Armor, Unit and Misc did not expose a stronger grounded unowned mesh defect.
- Profession Fabric already has sufficient evidence/provenance vocabulary; no new profession abstraction is required.

The highest-leverage unoccupied Geometry question is therefore shared and observer-only: the existing UC material/UV evidence measures scalar area-equivalent texels/metre, but cannot expose **directional sampling scale** when a structurally valid UV chart stretches physical axes differently.

## Independent evidence supporting shared placement

This extraction is supported by two materially different manufactured-product families rather than one local convenience.

### Building

Building Geometry #16 / Hard Surface #15 establish an exact `1.10 x 1.50 m` source-owned planar metric domain. Building Materials separately demonstrates:

- a metric-aware diagnostic using a `512 x 512` image with active extent `352 x 480` at the product-owned review target of about `320 px/m` in both physical directions;
- an aspect-blind unit-square mapping over the same physical rectangle that remains structurally bijective but samples the physical directions at about `341.3333` and `465.4545 px/m`, ratio about `1.363636`;
- retained Godot evidence that the two mappings are visibly different.

The `320 px/m` review target remains Building-owned and is **not** moved into UC.

### Object

Object Hard Surface / Technical Art independently exercise metric service surfaces through a rectangular `512 x 384` receiving image and an Object-owned `500 px/m` policy. That case proves image width and image height are materially distinct directional inputs and must not be collapsed to one scalar before directional measurement.

The `500 px/m` target, Object atlas rectangles/padding and adoption remain Object-owned.

Capability Cartography issue #192 correctly places only the neutral observation mechanism in UC.

## Selected bounded reusable pattern

**`WORLD_PLANE_TO_TEXEL_JACOBIAN_PRINCIPAL_SCALE_BEFORE_ANISOTROPY_POLICY`**

Rule:

1. consume only exact static GLB geometry/UV/image evidence already supported by the existing observer;
2. preserve the existing scalar area-equivalent texels/metre result and schema semantics;
3. build an orthonormal basis in each measurable triangle's world-space plane;
4. convert U and V edge deltas to texel deltas using image **width and height separately**;
5. form the local `2 x 2` world-plane → texel Jacobian;
6. measure its singular values as the two principal directional texel scales;
7. report `principal_min`, `principal_max` and `anisotropy_ratio` as observations only;
8. aggregate deterministically with world-area weighting;
9. HOLD rather than invent a result when the world-plane or texel Jacobian is singular/non-finite;
10. do not choose an anisotropy threshold, target density, UV repair, unwrap, atlas, material or adoption policy in the observer.

For a supported locally affine mapping, the old scalar area measure remains the geometric-mean view of the two principal scales. The new observation therefore extends rather than silently replaces existing evidence semantics.

## Shared implementation lane / exact identity

Repository:

`mike-axiom-mir/axm-universal-creation`

Proposal issue:

**#192 — directional texel-density / UV-anisotropy observer proposal**

New draft PR:

**#193 — `Geometry: expose directional texel-density in static material observer`**

Branch:

`studio/geometry-directional-texel-density-observer-001`

Exact base:

`50e85c8f6a39822eef01e4fb546dcb875917bb3b`

Current exact Geometry head:

**`8b1af776585afb87facf90f4bcc055d51acc60e7`**

Observed PR state:

**OPEN / DRAFT / MERGEABLE**

Current PR delta is limited to four shared-observer files:

- `src/axm_uc/material_uv_evidence.py`;
- `tests/test_material_uv_evidence.py`;
- `docs/MATERIAL_UV_EVIDENCE.md`;
- `.github/workflows/geometry-directional-texel-density-observer.yml`.

No Building/Object source geometry, atlas contract, product target density, Material/Technical-Art/Runtime implementation, Profession Fabric policy or `axm-create-me` product code changed.

## Structural implementation evidence

The existing `EVIDENCE_SCHEMA = axm.material-uv-evidence/v0.1` and existing scalar `texels_per_m` path remain intact.

The new sibling observation:

- derives a local world-plane basis from exact transformed triangle positions;
- scales U by image width and V by image height independently;
- computes principal texel/m scales from the local Jacobian singular values;
- reports a ratio rather than classifying that ratio as acceptable/unacceptable;
- uses bounded streaming distribution accumulators rather than retaining unbounded per-triangle directional arrays;
- retains explicit `MEASURED` versus `HOLD` directional state separately from the pre-existing scalar result.

Representative regressions:

1. `1 m x 1 m`, full `4 x 4` image → principal `4 / 4 px/m`, ratio `1`;
2. Building-style `1.10 x 1.50 m`, UV extent `352/512 x 480/512` in `512²` → approximately `320 / 320 px/m`, ratio `1` after actual GLB FLOAT32 encoding;
3. same `1.10 x 1.50 m` physical surface mapped blindly to full `512²` → approximately `341.3333 / 465.4545 px/m`, ratio `1.363636`, while the existing scalar remains the area/geometric-mean view;
4. `1 m x 1 m` with rectangular `8 x 4` image → principal `4 / 8 px/m`, ratio `2`, old scalar `sqrt(32)`;
5. triangle-order and rigid-position transforms do not change the directional result.

Existing fail-closed cases remain in the focused suite, including collapsed UVs, unsupported texture transforms, alternate UV sets, external images, missing UV/material evidence, deformation outside the static scope and invalid image headers.

## Failed predecessor retained — precision assumption, not hidden

The first published implementation head was:

`59dcbe2b674a7012aee84c3850018711486c8df9`

Dedicated workflow:

`35251191808`

Python 3.13 ran the focused suite and produced **11/13 passing tests**. The two failures were expectation-precision defects in the new Building-style regressions:

- ideal-double expected `320.0`; actual GLB FLOAT32-derived scalar `319.99999653209323`, delta about `3.47e-6`;
- ideal-double expected `398.5914594106997`; actual GLB FLOAT32-derived scalar `398.59145509108134`, delta about `4.32e-6`.

The source observer implementation was **not** changed in response. Only the tests were repaired to respect the actual FLOAT32 source encoding rather than comparing encoded GLB values to ideal real-number arithmetic at an unjustified precision.

Repair commit/current head:

`8b1af776585afb87facf90f4bcc055d51acc60e7`

The regression now documents this precision boundary explicitly and keeps exact/stricter assertions where the encoded inputs are exactly representable.

This failed predecessor remains part of the evidence lineage; it is not relabelled PASS.

## Exact-head CI state

Current exact-head workflows were triggered for `8b1af776585afb87facf90f4bcc055d51acc60e7`.

Dedicated Geometry workflow:

`35251549794 — Geometry directional texel-density observer`

- Python 3.11 job: **QUEUED** at this status update;
- Python 3.13 job: **QUEUED** at this status update.

Normal UC test workflow:

`35251549719 — Tests`

- test job: **QUEUED** at this status update.

Other ordinary UC workflows are likewise queued or non-applicable; the Workshop render-evidence workflow is skipped for this non-rendering observer change and is not relabelled a PASS.

Therefore the scoped state remains **HOLD pending exact-head CI**, despite the implementation and repaired regression being published. A later activation may promote only after exact-head workflows actually complete successfully.

## Handoffs recorded

- **UC issue #192:** comment `5718435285` — implementation return, exact head, source/policy boundary, failed-predecessor precision note and current CI HOLD.
- **UC PR #193:** comment `5718436714` — exact failed-predecessor lineage and test-only FLOAT32 precision repair; no PASS claimed while current CI is queued.
- **Building Materials PR #3:** comment `5718437786` — Building remains owner of metric domain, target density, atlas/layout and visual acceptance; no draft rebind/adoption requested.
- **Object Technical Art PR #28:** comment `5718438932` — Object remains owner of `500 px/m`, atlas/transport/adoption; rectangular image case is supporting evidence only.

No product consumer receives this observer by analogy. If PR #193 eventually merges, any Building/Object use requires an explicit merged-observer bind/rerun.

## Continuity / rollback

Immediate previous Geometry status blob:

`8ab0ac24a5e37de33783e3e5d25f98cb8f95a477`

UC rollback/control identities:

- exact base: `50e85c8f6a39822eef01e4fb546dcb875917bb3b`;
- failed predecessor head: `59dcbe2b674a7012aee84c3850018711486c8df9`;
- current repaired head: `8b1af776585afb87facf90f4bcc055d51acc60e7`.

The failed predecessor is preserved in Git/Actions history. The precision repair is additive and test-only relative to that implementation head. Product evidence remains in its source repositories; no Building/Object authority is copied into `axm-create-me` or made UC policy.

## Authority boundary / explicit non-claims

Geometry / UC owns only this bounded read-only numerical observation mechanism.

This activation does **not** establish:

- that anisotropy is inherently bad;
- any universal acceptable anisotropy ratio;
- a studio-wide texel-density target;
- production UV selection;
- seam quality;
- UV rescaling or automatic repair;
- automatic unwrap;
- atlas packing/padding policy;
- texture resolution policy;
- material/shader correctness;
- texture pixel quality beyond bounded image-dimension evidence;
- mip/filter/compression quality;
- deformation-time density;
- rendered visual acceptance;
- target-host equivalence;
- target-device performance or memory acceptance;
- collision/navigation/physics/gameplay suitability;
- Building or Object adoption;
- UC merge/CANON;
- Profession Fabric promotion;
- production readiness;
- game readiness;
- Geometry mastery.

## Four-root gate

- **Truth:** two independent product cases justify only the neutral observation layer. Existing scalar semantics are preserved, singular cases HOLD, the failed FLOAT32 precision assumption is retained, and current exact-head CI is reported QUEUED rather than faked green.
- **Agency / non-domination:** Building/Object keep source metric meaning and target density; Materials/Technical Art keep sampling/transport policy; Runtime keeps storage/device cost; Art/QA keep appearance acceptance. UC chooses none of those policies.
- **Continuity:** exact product identities stay in their own repos; prior Geometry status blob `8ab0ac24...`, UC base `50e85c8...`, failed predecessor `59dcbe2...` and repaired head `8b1af776...` are all rollback-addressable.
- **Wisdom before speed:** no automatic unwrap/rescale/atlas/adoption machinery was added. The smallest shared read-only observer was implemented, and exact-head PASS is withheld until CI actually completes.

The four AXM roots remain the merge gate.

## Next Geometry trigger

Re-scan before any further change.

Priority trigger is **not** another product mesh mutation. First check exact-head PR #193 CI. If green, record the exact PASS without broadening scope. If PR #193 later merges, one explicit product receiver rebind may be useful; do not silently transfer draft evidence.

If the shared observer remains blocked or another specialist exposes a higher-leverage structural defect, follow that evidence instead. Do not add an anisotropy threshold, automatic UV repair or production atlas policy merely because the measurement now exists.
