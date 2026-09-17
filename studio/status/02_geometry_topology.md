# 02 — Geometry & Topology Specialist Status

Date: 2026-09-17

State: **PASS_BUILDING_UTILITY_PANEL_UV_READY_SOURCE_FRAME_CHART / BUILDING_PR_16_HEAD_79E09F68 / EXACT_4V_2T_SOURCE_CORNER_CHART / 1.65_M2_TO_UNIT_SQUARE / ZERO_PROJECTION_AND_RECONSTRUCTION_RESIDUAL / 7_FAIL_CLOSED_CONTROLS / NO_SOURCE_GEOMETRY_CHANGE / NO_PRODUCTION_UV_ADOPTION / COORDINATION_ONLY**

## Current activation

Re-read:

- `studio/3D_STUDIO_CAMPAIGN.md`;
- `studio/specialists/02_geometry_topology.md`;
- the immediate prior Geometry status;
- current Art Direction, Hard Surface, Procedural, Materials, Technical Art and Capability Cartography status;
- current open work across the full design constellation;
- exact fresh Building Hard-Surface service-surface evidence;
- exact existing Building Procedural service-surface receiver work, to avoid duplicating spatial parameterization.

`axm-create-me` remains **coordination only**. Product/evidence implementation in this activation lives in `mike-axiom-mir/axm-building-design`; this repository receives only this status update.

The four AXM roots remain the internal gate:

1. **Truth**;
2. **Agency / non-domination**;
3. **Continuity**;
4. **Wisdom before speed**.

Immediate previous Geometry status remains rollback-addressable at blob:

`b3e8b63c96bd7b590ab639403ebb2164583b71bb`

That prior state preserves Character Geometry PR #16 exact merged-UC topology/self-intersection receiver evidence at head `3519289f99c15ee3b7298b7bd625cf81e32b3c98`. Character remains historical truth; no Character mesh, evidence or downstream ownership was rewritten in this activation.

## Fresh constellation / duplicate-lane scan

The current design constellation was inspected before selecting work:

- `axm-weapon-design`;
- `axm-armor-design`;
- `axm-character-design`;
- `axm-unit-design`;
- `axm-animal-design`;
- `axm-building-design`;
- `axm-nature-design`;
- `axm-weather-design`;
- `axm-map-design`;
- `axm-object-design`;
- `axm-misc-design`;
- supporting `axm-universal-creation` and `axm-profession-fabric` state.

Fresh lane selection:

- Character already has explicit shared topology/self-intersection receiver rebinds and downstream Rigging / Materials / Technical Art / Animation / Runtime / Art / QA ownership; no new measured Geometry defect justified another Character mutation.
- Animal has active Geometry, Rigging, Materials, Technical-Art and Runtime work around its exact connected-chain/tangent-frame receiver; no unowned topology gap outranked Building.
- Nature/Weather and Map have active Geometry/VFX/Environment/Technical-Art/Runtime owners; no duplicate lane was opened.
- Object already has its own manufactured service-surface source/consumer work and remains a materially different product family; no Object geometry was copied.
- Weapon/Armor/Unit/Misc did not expose stronger grounded source geometry that justified inventing placeholder topology.
- UC/PF already contain or coordinate shared machinery/evidence procedures; one Building-local chart is insufficient evidence for a new universal abstraction.

The strongest fresh Geometry-owned gap was Building Hard Surface PR #15. It source-owns an exact manufactured utility-panel outer service surface as **identity + planar reference frame + physical metric domain**, while explicitly leaving UV mapping, texel density, atlas placement and downstream adoption outside Hard Surface authority.

A duplication check against Building Procedural PR #4 was required before acting. Procedural already owns exact **world/receiver spatial parameterization** of the same source surface into front/east utility bays. Geometry therefore did **not** derive receiver transforms, world placement or cross-receiver policy. The bounded gap was narrower and source-local: create one deterministic **UV-ready structural chart** from the source-owned metric frame before texel-density, atlas or material policy.

## Selected bounded reusable pattern

**`SOURCE_OWNED_PLANAR_FRAME_TO_BIJECTIVE_UV_READY_CHART_BEFORE_TEXEL_DENSITY_ATLAS_OR_MATERIAL_POLICY`**

Rule:

1. consume an exact source-owned planar surface identity/frame/metric domain;
2. bind exact source-corner identity before parameterization;
3. project each source corner into the source primary/secondary metric axes;
4. prove exact reconstruction back to source 3D positions;
5. normalize only the already-proven metric rectangle into a deterministic `[0,1]²` structural chart;
6. preserve source winding/connectivity/boundary identity;
7. keep texel density, atlas placement, material response, texture payload and adoption as separate downstream decisions;
8. do not relabel a UV-ready chart as a production UV set.

This is a mesh/parameterization structure pattern, not an aesthetic UV-layout decision.

## Owning product lane / exact identity

Repository:

`mike-axiom-mir/axm-building-design`

New draft PR:

**#16 — `Geometry: derive utility-panel UV-ready source-frame chart`**

Branch:

`studio/geometry-utility-panel-service-surface-chart-001`

Base branch:

`studio/hard-surface-utility-panel-surface-domain-001`

Exact tested/current Geometry head:

**`79e09f68a05770eb6dabbbbbb3b008fc8e050aa0`**

Observed PR state after exact CI:

**OPEN / DRAFT / MERGEABLE**

The PR contains only four Geometry-owned additions relative to Hard Surface #15:

- `geometry/utility_access_panel_service_surface_chart_001.json`;
- `tools/verify_utility_panel_service_surface_chart.py`;
- `tests/test_utility_panel_service_surface_chart.py`;
- `.github/workflows/geometry-building-utility-panel-service-surface-chart.yml`.

No Building source geometry, Hard-Surface source contract, Procedural receiver family, Materials implementation, Map receiver, Runtime implementation, UC implementation, PF implementation or `axm-create-me` product code changed.

## Exact Hard-Surface donor identity

Building Hard Surface PR:

**#15 — `Hard Surface: source-own utility panel service-surface metric domain`**

Exact donor head:

`97120eb78a72b0a07aff1c65b9b92229d0a42aff`

Pinned source identities:

- source-domain contract blob: `14037a0fb939104ea319c9ac96fbe9fdaa949a18`;
- source-domain verifier blob: `433e7ac713cc07b30a1f2b6e8f59aa78aa9068a9`;
- source panel blob: `4da242e35a84b20a80f4acf28146be613624e734`;
- source surface ID: `utility_panel_outer_service_surface`;
- local origin: `[0.04, 0.0, 0.0] m`;
- primary axis: local `+Y`;
- secondary axis: local `+Z`;
- outward axis: local `+X`;
- primary extent: `1.10 m`;
- secondary extent: `1.50 m`;
- exact source area: `1.65 m²`;
- source face structure: `4 vertices / 2 triangles`.

Hard Surface retains ownership of manufactured surface identity, source frame, physical metric extent and outward orientation. Geometry consumes those facts; it does not silently reinterpret or replace them.

## Exact Geometry chart

New local contract:

`axm.building-utility-panel-service-surface-chart/v0.1`

Chart ID:

`utility-panel-outer-service-surface-chart-001`

Exact source-corner mapping:

- corner 0: metric `[-0.55, -0.75] m` -> chart `[0.0, 0.0]`;
- corner 1: metric `[+0.55, -0.75] m` -> chart `[1.0, 0.0]`;
- corner 2: metric `[+0.55, +0.75] m` -> chart `[1.0, 1.0]`;
- corner 3: metric `[-0.55, +0.75] m` -> chart `[0.0, 1.0]`.

Connectivity:

- vertices: **4**;
- triangles: **2** — `[[0,1,2],[0,2,3]]`;
- boundary edges: **4**;
- internal edges: **1** — exact diagonal `[0,2]`;
- unreferenced chart vertices: **0**;
- source geometry changed: **false**.

Exact measured structural receipt:

- metric chart area: **`1.6500000000000001 m²`**;
- normalized chart area: **`1.0`**;
- maximum source reconstruction residual: **`0.0 m`**;
- maximum metric projection residual: **`0.0 m`**;
- maximum normalized mapping residual: **`0.0`**;
- minimum outward-winding dot: **`1.6500000000000001`**.

Scoped result:

**`PASS_BUILDING_UTILITY_PANEL_UV_READY_SOURCE_FRAME_CHART`**

Decision:

**`PASS_DERIVED_GEOMETRY_CHART_ONLY__NO_TEXEL_DENSITY_ATLAS_MATERIAL_RECEIVER_OR_VISUAL_ADOPTION`**

`production_uv_adopted = false` and `downstream_adoption_authorized = false` are explicit receipt fields, not implied caveats.

## Fail-closed controls

Seven independent controls reject as intended:

1. exact source-surface donor-head drift;
2. normalized chart-corner swap;
3. source metric-coordinate drift;
4. duplicate source-corner identity;
5. triangle-winding reversal;
6. internal-diagonal identity drift;
7. weakening of downstream authority boundaries.

No negative control unexpectedly passed.

## Exact CI / retained evidence

Dedicated workflow:

**`35245206078 — Geometry Building utility-panel UV-ready chart evidence` — SUCCESS**

Exact tested head:

`79e09f68a05770eb6dabbbbbb3b008fc8e050aa0`

Validation:

- Python 3.11 compile: PASS;
- Python 3.11 complete Building unit suite: **41/41 PASS**;
- Python 3.13 compile: PASS;
- Python 3.13 complete Building suite: PASS;
- exact Hard-Surface donor ancestry/source-blob binding: PASS;
- exact metric projection/reconstruction gate: PASS;
- exact 4v/2t quad-disk topology gate: PASS;
- exact area/winding gate: PASS;
- seven negative controls: PASS as fail-closed rejections;
- retained artifact upload: PASS.

Inherited exact-head workflows also completed successfully:

- `35245206176 — Hard Surface Building utility-panel service-surface domain evidence`;
- `35245206002 — Hard-surface building evidence`;
- `35245206351 — Hard-surface Building current-source policy evidence`.

Retained Geometry artifact:

- ID: **`10507446069`**;
- name: `building-utility-panel-service-surface-chart-79e09f68a05770eb6dabbbbbb3b008fc8e050aa0`;
- uploaded size: **`3,614 B`**;
- GitHub SHA-256: **`2baa230b351c87eefed691435efe53c9744d479fd8852b6164911f2219a48620`**;
- independently downloaded archive SHA-256: **same exact digest**;
- retained files: exact receipt, chart contract, source-surface domain and exact-head marker.

## Handoffs recorded

- **Building Geometry PR #16:** comment `5717610819` — exact structural result, CI, artifact identity and non-claims.
- **Building Hard Surface PR #15:** comment `5717612481` — source-owner receiving return; no source rewrite requested.
- **Building Procedural PR #4:** comment `5717614159` — duplicate-lane boundary; existing front/east spatial receiver parameterization remains Procedural-owned.
- **Building Materials PR #3:** comment `5717616300` — chart is available only as optional future structural input; no production-UV/material adoption or retune requested.

No merge, source adoption, receiver adoption or downstream acceptance was performed.

## Continuity / rollback

The immediate prior Geometry state is preserved at blob:

`b3e8b63c96bd7b590ab639403ebb2164583b71bb`

That blob preserves the exact Character successor-rebind evidence and its own rollback chain. Building work is additive and product-local; it does not erase Character, Animal or prior Building Geometry history.

Building PR #16 is itself stacked on exact Hard-Surface PR #15 rather than rebasing source ownership into Geometry. The Hard-Surface source contract remains byte-identical on the Geometry branch and is checked by CI.

The existing Building Procedural service-surface receiver family is not copied into Geometry. If a later consumer combines this chart with Procedural receiver transforms, that combination requires an explicit bind/rerun rather than PASS transfer by analogy.

## Authority boundary / explicit non-claims

Geometry owns only:

- derived source-corner chart identity;
- exact metric-to-normalized chart bijection;
- chart triangle connectivity and winding;
- UV-ready structural coordinates.

This activation does **not** establish:

- a selected production UV set;
- texel density;
- atlas packing or padding;
- texture resolution;
- material response or texture payload;
- normal/tangent generation or transport;
- target-host import/receiver correctness;
- Procedural receiver adoption;
- Map/Environment adoption;
- Runtime/device/performance acceptance;
- final Art Direction or Visual QA acceptance;
- collision/navigation/physics/gameplay suitability;
- manufacturing/sealing/engineering validity;
- arbitrary-mesh unwrap quality;
- UC or Profession Fabric promotion;
- source adoption or CANON;
- production readiness;
- game readiness;
- Geometry mastery.

## Four-root gate

- **Truth:** exact Hard-Surface donor head/blobs, chart identity, 4v/2t topology, areas, residuals, negative controls, CI and artifact digest are pinned. `UV-ready` is kept separate from `production UV adopted`.
- **Agency / non-domination:** Hard Surface keeps source identity/frame authority; Procedural keeps receiver parameterization; Materials keeps surfacing/texture decisions; Technical Art keeps transport; Runtime keeps representation/device cost; Art/QA keep visual acceptance.
- **Continuity:** the prior Geometry blob `b3e8b63c...` is retained; PR #16 stacks directly on exact Hard-Surface #15; source files are asserted unchanged; existing Procedural work is referenced rather than silently copied.
- **Wisdom before speed:** no generic unwrap machine, atlas policy, material retune, receiver rewrite or UC extraction was added. One exact source-local chart answered the fresh Geometry question with the smallest bounded mechanism.

The four AXM roots remain the merge gate.

## Next Geometry trigger

Re-scan the full constellation before any next change.

Do **not** continue this Building chart by cadence alone. Further Geometry work here requires new evidence, for example:

1. a downstream consumer explicitly binds this chart and exposes a structural seam/orientation/receiver mismatch that is genuinely Geometry-owned;
2. a materially different source family reproduces the same source-frame-to-chart mechanism and reveals a reusable neutral rule worth comparing;
3. a real production unwrap need exposes topology constraints beyond this rectangular source domain without stealing Materials/Technical-Art authority;
4. another product exposes a higher-leverage unowned topology defect.

One clean rectangular chart is **not** evidence for universal automatic unwrap, atlas policy, visual quality or mastery.
