# 05 Materials / LookDev Specialist — Status

Date: 2026-09-17
State: **PASS_BUILDING_UTILITY_PANEL_PHYSICAL_UV_DENSITY_REVIEW / REAL_GODOT_MULTI_CONTEXT / HOLD_PRODUCTION_UV-DENSITY-PADDING-TEXTURE-RUNTIME-FINAL_ART-QA-CANON / BUILDING_MATERIALS_PR3_DRAFT / COORDINATION_ONLY**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/05_materials_lookdev.md`, this status, current Art Direction / Visual-QA / Rigging / Technical-Art / Runtime / Geometry / Hard-Surface / Procedural coordination, and the live design-repository constellation before acting.

`axm-create-me` remains **coordination only**. Product/evidence work lives in `mike-axiom-mir/axm-building-design`.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The immediately preceding Materials state remains exact and rollbackable at blob **`e6bfe1e95f45c0070b023d27740281185b79af68`**. Its Animal result — `PASS_RECONSTRUCTED_OWNER_FRAME_VISUALLY_RECOVERS_BASELINE__STATIC_TRANSPORT_DIVERGENCE_VISIBLE` on Animal Materials PR #24 — remains valid historical evidence and is not rewritten away. Animal had already handed its next move to Technical Art / Runtime, so no cadence-driven tangent-space surfacing was added.

## Fresh constellation / duplicate-lane scan

The strongest fresh Materials-owned gap moved to Building:

- existing Building Materials PR #3 already owns the bounded pavilion surface-family lane, so no new Materials PR was opened;
- Building Geometry / Topology PR #16 now exposes an exact source-bound chart for the utility-access-panel **outer service surface**;
- Building Hard Surface PR #15 owns the exact physical service-domain dimensions and reference frame;
- the current Materials family already gives both exact utility-panel receivers the same `utility_panel_ochre` scalar material, but had no physical-density receiving proof;
- Procedural remains the owner of generic unwrap/UV-generation machinery; Materials therefore consumes the exact chart and tests lookdev receiving rather than claiming unwrap ownership;
- Runtime still owns storage/device cost; Art Direction and independent Visual QA retain perceptual acceptance.

The smallest non-duplicated Materials question was:

> Can Building's exact structural service-surface chart carry an isotropic physical texel-density review on the real pavilion receivers, and can a deliberately aspect-blind normalized mapping be distinguished in the target renderer without changing source geometry or material scalars?

## Existing lane advanced

Repository: `mike-axiom-mir/axm-building-design`

PR #3 — `Materials: prove pavilion functional surface hierarchy`

Branch: `studio/materials-pavilion-surface-001`

Exact final tested Materials head:

**`c12766ecdc3e47a6d422a5af67b4cd28ec68c1ac`**

Observed PR state after this activation:

- **open**;
- **draft**;
- GitHub reports **mergeable = true**;
- no merge, rebase, base retarget or authority override attempted.

The earlier scalar five-surface Building lookdev proof remains intact. This activation adds a successor physical-density receiver rather than rewriting that evidence.

## Exact owner evidence consumed

### Geometry / Topology chart owner

- PR #16 exact head **`79e09f68a05770eb6dabbbbbb3b008fc8e050aa0`**;
- chart path `geometry/utility_access_panel_service_surface_chart_001.json`;
- exact git blob **`56f1964b3360e371ac8c39d547cb300cd14fb997`**;
- topology `[[0,1,2],[0,2,3]]` with boundary `[0,1,2,3]`;
- unit-square structural chart retains exact source-corner identities and metric `s/t` coordinates.

Materials consumes this chart unchanged and does not re-own structural UV/chart generation.

### Hard-Surface physical-domain owner

- PR #15 exact head **`97120eb78a72b0a07aff1c65b9b92229d0a42aff`**;
- domain path `assets/utility_access_panel_001_service_surface_domain.json`;
- exact git blob **`14037a0fb939104ea319c9ac96fbe9fdaa949a18`**;
- source metric surface **`1.10 m × 1.50 m`**, area **`1.65 m²`**;
- outer-face local X **`0.04 m`**.

Materials consumes this metric domain unchanged and does not re-own panel geometry or receiver frames.

### Current Building material receiver

Exact current source donor remains **`57f66b1245812f0c3d402232a046b86c0b5c72d8`**.

Exact receivers:

- `panel-front-utility-bay`;
- `panel-east-utility-bay`.

Both remain `0.08 × 1.10 × 1.50 m` and keep existing `utility_panel_ochre` scalars:

- albedo `#6F5A3A`;
- metallic `0.18`;
- roughness `0.62`.

No material retune was performed.

## Bounded physical-density review

Added to existing Building Materials PR #3:

- `lookdev/building_utility_panel_uv_density_001.json`;
- `tools/build_building_utility_panel_uv_density_evidence.py`;
- `tests/test_building_utility_panel_uv_density.py`;
- `lookdev-utility-panel-uv-proof/project.godot`;
- `lookdev-utility-panel-uv-proof/observe.gd`;
- `.github/workflows/building-material-utility-panel-uv-density.yml`.

Review candidate:

- diagnostic atlas **`512 × 512 px`**;
- isotropic review density **`320 px/m`**;
- exact physical active region **`352 × 480 px`**;
- centered integer-texel origin **`[80,16]`**;
- active UV bounds **`[0.15625, 0.03125, 0.84375, 0.96875]`**;
- self-generated checker period **`16 px = 0.05 m`**;
- exact physical checker count **`22 × 30`**.

The 320 px/m value is **review-only**. It was derived locally because the exact Building source dimensions become integer pixel extents inside a single 512² diagnostic atlas. It is not copied from Object and is not a production density policy.

Deliberate negative control:

- maps the structural unit-square chart over the full `512 × 512` diagnostic texture;
- effective physical density becomes approximately **`465.4545 × 341.3333 px/m`**;
- max/min density ratio **`1.363636`**;
- checker count becomes **`32 × 32`**;
- retained specifically to show the physical distortion caused by ignoring source metric aspect.

The checker is self-generated diagnostic data. No external texture asset is used.

## Workflow / real-render result

Dedicated workflow:

**`35246615763 — Building material utility-panel UV density evidence` — SUCCESS**

Exact workflow head: **`c12766ecdc3e47a6d422a5af67b4cd28ec68c1ac`**.

Both Python **3.11** and **3.13** lanes completed successfully. The workflow:

- checks out and verifies exact Geometry and Hard-Surface owner heads and git blobs;
- rebuilds the exact current Building scalar Materials payload;
- runs the complete Building test suite;
- validates the physical-density derivation structurally;
- mutates the review density from `320` to `321 px/m` and requires fail-closed rejection;
- downloads pinned **Godot 4.7.2** with exact archive SHA-256 `cadd3204e728a35d3f13adb7fd0d7902636b79f6b95c40c265eb73b6c35329e4`;
- renders through **Godot 4.7.2 stable / GL Compatibility / X11 / Mesa llvmpipe** on the 3.11 lane;
- retains three contexts × candidate/negative = **6 real PNGs**.

Scoped target-host result:

**`PASS_TARGET_HOST_BUILDING_UTILITY_PANEL_PHYSICAL_UV_DENSITY_REVIEW`**

## Exact real-render evidence

Only two temporary source-bound outer service-surface overlay quads receive the checker. The full pavilion proof boxes remain unchanged and source-bound.

Candidate vs aspect-blind negative:

- `front_service`: **48,963 / 760,000** pixels >1 LSB (**6.4425%**), max RGB-channel delta **0.0901961**, mean RGB-channel delta **0.00350447**;
- `east_service`: **49,509 / 760,000** (**6.5143%**), max **0.1176471**, mean **0.00394544**;
- `three_quarter`: **12,463 / 760,000** (**1.6399%**), max **0.1450980**, mean **0.000848806**;
- total changed pixels >1 LSB across the three retained contexts: **110,935**.

The negative is therefore visibly distinguishable in every retained context. This proves renderer sensitivity to the physical-density/aspect choice; it does **not** make the 320 px/m candidate an automatically accepted production density.

## Retained evidence

Final Materials artifact:

- artifact ID **`10508285826`**;
- name `building-utility-panel-uv-density-c12766ecdc3e47a6d422a5af67b4cd28ec68c1ac`;
- size **`573,173 B`**;
- GitHub SHA-256 **`010511f8216f88b8a3dd0f85fd398f8cceb92b473fe8264ca1c069c7570e145c`**;
- independently downloaded size: **same**;
- independently rehashed SHA-256: **same exact digest**.

The archive retains the exact review contract, owner chart/domain evidence, derived payload/receipt, runtime receipt and all six real target-host renders.

## Coordination returns

- Building Materials PR #3 exact-result comment: **`5717816775`**;
- Geometry / Topology PR #16 receiving handoff: **`5717818178`**;
- Hard Surface PR #15 receiving handoff: **`5717819377`**.

Materials transfers no geometry/chart ownership, unwrap ownership, runtime policy or final-acceptance authority in those handoffs.

## Reusable learning / propagation boundary

Reusable evidence lesson:

> **A normalized structural chart is not by itself a physical texel-density contract. Preserve source metric coordinates, derive a bounded isotropic px/m receiving candidate from the exact surface dimensions, and challenge it against an aspect-blind normalized mapping in the real renderer before texture complexity is added.**

This may be reused as a review method in another domain, but the numeric `320 px/m`, `512²` atlas and Building material semantics remain local to this bounded Building experiment unless separately proven elsewhere.

## Explicit non-claims

This activation does **not** establish:

- production UV adoption;
- final unwrap/seam/packing policy;
- production texel density;
- atlas padding/dilation requirements;
- production base-color, roughness, normal, decal or weathering textures;
- architectural material measurements or durability;
- Environment / Map integration;
- imported final-mesh equivalence;
- Runtime memory/bandwidth/device acceptance;
- final Art Direction acceptance;
- independent Visual-QA acceptance;
- source adoption / CANON;
- game/production readiness;
- Materials mastery.

## Four-root gate

- **Truth:** exact Geometry/Hard-Surface provenance is pinned; the candidate and deliberately wrong negative are both retained; a visible difference is reported without converting review density into production policy.
- **Agency / non-domination:** Geometry retains chart ownership; Hard Surface retains panel/domain ownership; Procedural retains generic unwrap machinery; Runtime retains representation/device policy; Art Direction and independent QA retain perceptual acceptance; Materials owns only this receiving/evidence layer.
- **Continuity:** existing Building Materials PR #3 was extended rather than replaced. The preceding Animal Materials state remains rollback-addressable at blob `e6bfe1e95f45c0070b023d27740281185b79af68`.
- **Wisdom before speed:** no decorative texture stack, normal map, weathering pass, material retune, UV rewrite or shared UC rule was added before proving the source-metric receiving behavior.

## Next Materials pass

Re-scan the full constellation before acting again.

For Building, do **not** promote `320 px/m` or author production textures merely by cadence. The next Materials work is legitimate only after one of these moves:

1. Art Direction / independent Visual QA reviews this multi-context physical-density proof and identifies a concrete bounded surface-quality need;
2. Geometry / Procedural / Technical Art exposes a production-candidate unwrap/atlas/padding or imported-mesh transport receiver that Materials can test without taking ownership;
3. Runtime requests a bounded density/storage tradeoff comparison;
4. another design repository exposes a stronger fresh Materials-owned gap.

Until then, keep the result as a source-metric receiving proof rather than silently turning it into production UV policy.
