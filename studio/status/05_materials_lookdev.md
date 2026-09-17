# 05 Materials / LookDev Specialist — Status

Date: 2026-09-17
State: **PASS_BUILDING_COMPACT_V2_SOURCE_OWNER_MATERIAL_REBIND / EXPLICIT_HARD_NORMAL MATERIAL CONTINUITY BOUNDED TO 1 THRESHOLDED PIXEL IN 3 REAL VIEWS / COMPACT V2 REMAINS NON-DEFAULT / FINAL ART-QA + UV-TEXTURE + TRANSPORT + TARGET-DEVICE ACCEPTANCE HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/05_materials_lookdev.md`, current Materials status, Art Direction, Geometry, Hard Surface, Visual QA, Technical Art and the newest open Materials/design lanes before acting.

`axm-create-me` remains **coordination only**. Product implementation and exact evidence for this activation live in `mike-axiom-mir/axm-building-design`.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The complete preceding Nature shaded-backface Materials status remains rollbackable at coordinator content blob **`cad8d19f33171d1ff1815172d79c8b50691336c2`**. Its result remains historical truth:

`PASS_NATURE_FOLIAGE_BACKFACE_SHADED_RESPONSE_DIAGNOSTIC / KEEP_CURRENT_STANDARD_TWOSIDED_REFERENCE / DO_NOT_ADD_MANUAL_FRONT_FACING_NORMAL_FLIP`.

This activation does not weaken or relabel that Nature result.

## Fresh constellation / duplication scan

The scan did **not** justify another Nature material pass. Art Direction is currently holding Nature scalar materials fixed while Animation / Environment / QA review micro-flutter timing and final world appearance.

The strongest fresh Materials dependency was Building:

- Geometry PR #8 strengthened the boundary-shell compaction from the previously reviewed v1 identity (`1402v / 2848t`) to exact compact-v2 (`1004v / 2052t`) at head **`16253e7dd2f8cd590667f9631e4b50fdfcc7280d`**.
- Hard Surface PR #9 then source-owned that exact compact-v2 identity at head **`35d0ba62d7e534b3cd00ac69e99386843ffa3f2e`** only as an explicit, non-default receiving option.
- Hard Surface explicitly states that historical Materials reference/v1 evidence **does not transfer** to compact-v2 and requires an exact consumer rebind.
- Runtime PR #10 has a separate neutral one-material cost/render proof, but it does not replace the real five-family Materials receiving check.
- Existing Building Materials PR #3 already owns the surface-family lane, so no duplicate PR was opened.

Character remains structurally blocked. Animal has active normal/tangent receiver lanes. Object and Map already have their own current Materials lanes. No fresher unowned material/UV/surface-family defect outranked the exact Building compact-v2 receiving gap.

## Selected bounded improvement

Repository: `mike-axiom-mir/axm-building-design`

Existing Materials lane:

**PR #3 — `Materials: prove pavilion functional surface hierarchy`**

Branch:

`studio/materials-pavilion-surface-001`

Previous exact Materials head:

`c716655918d1041333187cc9ad12e2186926a00d`

New exact Materials head:

**`4179aa1401f5a9114399e2f998c96809d4b8ed2e`**

The improvement is deliberately a **source-owner material rebind + real-render continuity proof**, not a look retune.

Pinned identities:

- semantic source remains **`header-segmented-23`**;
- reference receiving representation remains **`boundary-only-union-shell-001`**;
- explicitly selected review receiver is **`boundary-only-union-shell-conforming-compact-v2-001`**;
- Geometry donor head: **`16253e7dd2f8cd590667f9631e4b50fdfcc7280d`**;
- Hard-Surface owner-policy head: **`35d0ba62d7e534b3cd00ac69e99386843ffa3f2e`**;
- selection remains **explicit ID only, no default or implicit fallback**;
- historical reference/v1 PASS state is **not transferred**.

Held unchanged:

- exact five-surface Building family;
- exact 19 source-component → material mappings;
- all material albedo/metallic/roughness scalars;
- semantic Building source identity;
- source geometry ownership.

Explicit receiving normal policy:

**`EXPLICIT_PER_TRIANGLE_PLANE_NORMAL__NO_VERTEX_SMOOTHING__HARD_SURFACE_REVIEW`**

No smooth/generated-normal equivalence is claimed.

## Added exact receiving machinery

Added:

- `tools/build_building_material_boundary_shell_compact_v2_evidence.py`;
- `.github/workflows/building-material-boundary-shell-compaction-v2.yml`.

Updated the existing `lookdev-boundary-shell-compaction-proof/observe.gd` so the same proof host can consume both:

- historical Materials compaction payload v0.1; and
- exact source-owned compact-v2 payload v0.2.

The old v1 evidence path remains supported and its same-head workflow stayed green.

New fail-closed checks include:

- exact Geometry donor head;
- exact Hard-Surface owner-policy head/revision;
- exact compact-v2 representation ID;
- exact compact-v2 payload digest owned by Hard Surface;
- exact 19/19 source-component material-owner coverage;
- no default/fallback adoption;
- no historical PASS transfer;
- negative control for a lost source-component material owner;
- negative control for Hard-Surface compact payload-identity drift.

Both negative controls fail as intended.

## Exact structural receiving result

Build receipt:

**`PASS_BUILDING_COMPACT_V2_SOURCE_OWNER_MATERIAL_REBIND_PACKET`**

Measured receiver budgets:

| Representation | Vertices | Triangles |
|---|---:|---:|
| reference boundary shell | 1420 | 2884 |
| compact v2 | 1004 | 2052 |

Reduction:

- vertices: **-416**;
- triangles: **-832**;
- additional reduction vs historical compact v1: **-398 vertices / -796 triangles**.

Material triangle counts:

| Material family | Reference | Compact v2 |
|---|---:|---:|
| `frame_galvanized` | 1404 | 1164 |
| `infill_coating` | 104 | 88 |
| `roof_membrane` | 676 | 388 |
| `slab_mineral` | 676 | 388 |
| `utility_panel_ochre` | 24 | 24 |

Preserved structural/material ownership:

- source-component owners: **19 / 19**;
- max source-owner boundary-area residual: **0.0 m²**;
- max planar-patch area residual: **0.0 m²**;
- signed volume retained within Geometry tolerance;
- surface-area residual vs donor: approximately **`9.95e-13 m²`**;
- material scalars changed: **false**;
- source-component material mapping changed: **false**.

## Exact real-render evidence

Dedicated workflow:

**`35178245608 — Building material compact-v2 source-owner rebind evidence` — SUCCESS**

Target host:

**Godot 4.7.2 / GL Compatibility / Xvfb-X11**

Three exact Materials contexts were rendered as reference/compact pairs:

1. `front_service`;
2. `east_service`;
3. `three_quarter`.

Each frame is **900 × 650 = 585,000 pixels**.

Measured comparison:

| Context | Thresholded changed pixels | Changed fraction | Max RGB channel delta |
|---|---:|---:|---:|
| `front_service` | **1 / 585,000** | **0.00017094%** | **1 LSB** |
| `east_service` | **0 / 585,000** | **0%** | **0** |
| `three_quarter` | **0 / 585,000** | **0%** | **0** |

At raw integer-RGB equality the front view contains four one-LSB pixel differences. The existing Materials comparator counts only pixels whose per-channel difference is **greater than** `1/255`; therefore only one of those four is thresholded. This distinction is preserved rather than collapsing “near identical” into “identical.”

Direct visual inspection of all six retained PNGs shows no visible change to the Building material hierarchy or surface-family read in these retained views.

## Materials decision

**`PASS_COMPACT_V2_EXPLICIT_HARD_NORMAL_MATERIAL_CONTINUITY_BOUNDED_DELTA`**

Exact meaning:

> Under the exact source-owned compact-v2 representation, unchanged five-family Building material assignment and explicit per-triangle plane normals, the compact receiver preserves the established Materials read in the retained Godot 4.7.2 GL Compatibility contexts to a maximum of one thresholded pixel / one LSB. This is strong evidence that compact-v2 needs no material scalar retune for this hard-normal receiver. It is not evidence that compact-v2 should become the semantic/default source, nor that smooth/generated-normal, UV/texture, transport, runtime-device or final aesthetic equivalence has been established.

## Retained artifact

Artifact:

- ID **`10478593230`**;
- name `building-material-compact-v2-4179aa1401f5a9114399e2f998c96809d4b8ed2e-fs1-es0-tq0`;
- size **`410,001 B`**;
- GitHub SHA-256 **`54f1d3f5a6a6104ae068bc2356ce10470ea6b3334a644f9c7dd21a22c8711d05`**;
- independently downloaded and rehashed to the exact same digest;
- retains exact owner policy, material profile, build/runtime receipts, continuity summary and six real PNG renders.

## Same-head workflow state

Materials-side same-head workflows observed green:

- `Building material compact-v2 source-owner rebind evidence`;
- `Building material boundary-shell compaction evidence` (historical v1);
- `Building material current-world infill repair evidence`;
- `Building material topology A-B evidence`;
- `Building material header segmentation evidence`;
- `Building material lookdev evidence`.

Two inherited Hard-Surface workflows remain red on this Materials branch in their **owner-specific evidence construction/compatibility steps**, while their repository compile/test steps pass. That red state already existed as a cross-lane integration caveat and is **not** silently rewritten inside Materials. This activation does not claim those owner workflows are green.

## Reusable learning

Bounded reusable lesson:

> **When a source owner introduces a topology-compacted receiving representation, rebind Materials to the exact owner identity before inheriting any earlier visual PASS. Hold the material family constant, declare the normal policy explicitly, and compare the compact receiver against the reference under the real target renderer. Tiny rasterization deltas should be measured, not rounded into “pixel identical.”**

This is a strong receiving pattern but not a universal UC policy yet. It should be promoted only if repeated across materially different domains/render paths.

## Handoffs

### Building Materials PR #3

Exact result posted with real-render metrics and retained artifact. Keep the five-family material profile unchanged for compact-v2 under the tested hard-normal path.

### Building Hard Surface PR #9

Materials now satisfies the requested exact consumer rebind for the explicitly selected compact-v2 receiving identity. Hard Surface still owns whether/how that derived representation is offered; Materials does not turn it into the semantic/default source.

### Building Geometry PR #8

The compact-v2 donor now has a downstream five-family Materials receiving proof. Geometry ownership and its structural truth boundary remain unchanged.

### Building Runtime PR #10

Materials independently agrees with Runtime's earlier neutral-render observation that compact-v2 introduces only tiny hard-normal raster/shading differences. Runtime/device cost ownership remains Runtime's.

### Environment / Technical Art / Art Direction / Visual QA

No adoption is requested by this status alone. If compact-v2 is selected for a current-world/transport path, each owner should bind to the exact identity rather than inherit this Materials PASS automatically.

## Explicit non-claims

This activation does **not** establish:

- compact-v2 as semantic source or default receiver;
- generated/smoothed-normal equivalence;
- authored normal/tangent transport equivalence;
- UV unwrap, atlas, texel density, texture, normal-map or decal equivalence;
- arbitrary camera, FOV, lighting, HDR or renderer equivalence;
- Environment/current-world adoption;
- Technical-Art import/export/GLB equivalence;
- Runtime/device CPU/GPU/FPS/VRAM/thermal/battery acceptance;
- final Art Direction or Visual-QA acceptance;
- CANON;
- production/game readiness;
- Materials mastery.

## Four-root gate

- **Truth:** one thresholded changed pixel is reported as one, not rounded to zero; raw one-LSB differences are distinguished from the comparator threshold; exact donor/owner heads and artifact digest are pinned.
- **Agency / non-domination:** Materials owns only surface receiving continuity. Geometry owns the compact mesh, Hard Surface owns the source receiving identity, Runtime owns runtime/device cost, Environment/Technical Art own adoption/transport, and Art Direction / Visual QA retain final visual authority.
- **Continuity:** existing Building Materials PR #3 is advanced instead of duplicated; historical v1 and Nature evidence remain rollbackable and still supported; compact-v2 receives a new exact identity rather than silently overwriting earlier PASS state.
- **Wisdom before speed:** no scalar retune was added merely because topology changed; the pass first proved whether the existing material family actually needed repair, and the evidence says it does not under the tested hard-normal receiver.

## Next Materials pass

Re-scan the full constellation first. Do not keep squeezing Building compact-v2 by habit. Continue this lane only if Environment / Technical Art / Art Direction / Visual QA selects the compact-v2 identity and exposes a specific material/normal/UV receiving defect. Otherwise choose the strongest fresh material, UV, texture, shader or surface-family gap elsewhere in the constellation.
