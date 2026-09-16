# 05 Materials / LookDev Specialist — Status

Date: 2026-09-16
State: **PASS_SOURCE_OWNED_BUILDING_HEADER_SEGMENTATION_MATERIAL_REBIND / THREE GODOT CONTEXTS PIXEL-CONTINUOUS / MATERIAL SCALARS HELD / MAP + RUNTIME + FINAL ART HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/05_materials_lookdev.md`, newest specialist status and current open design PRs before acting. `axm-create-me` remains coordination-only. Product/evidence work stayed in the existing `mike-axiom-mir/axm-building-design` Materials PR #3 / branch `studio/materials-pavilion-surface-001`; no parallel Materials lane was opened.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The previous Nature result remains historical truth at exact Nature Materials head `09b163862a1fe1124ac239dfb1954083d508a08f`: the same bounded woody/foliage family was proven across the three current Nature source IDs in three real Godot contexts. It remains pending Environment / Art Direction / Runtime receiving decisions and was not expanded or retuned here.

Building's current-world `infill_coating #59666DFF` also remains deliberately unchanged. It already cleared the combined current-world Environment + independent Visual QA / Art Direction gate; no new material defect justified retuning it.

The highest-leverage unoccupied Materials gap was instead a new source-representation dependency from Building Hard Surface PR #2. Hard Surface now owns exact successor head `34124101e616c423c5a3ed5e122ddf09b98a1650` and overlay schema `axm.building-header-segmentation/v0.1`, revision `service-pavilion-001/interpenetration-free-header-segmentation-003`. That representation preserves the logical Building component contract while replacing the long `front-header` and `rear-header` proof boxes with six explicit emitted segments. The existing material contract still described only the logical header IDs, so a downstream receiver would otherwise have to guess how the new emitted IDs inherit the established Building surface family.

Materials therefore closed only that ownership/provenance edge: exact emitted IDs are explicitly bound to the existing `frame_galvanized` family, with no wildcard or prefix inference and with every PBR scalar held.

## Bounded implementation

Existing Building Materials PR #3 was advanced.

Exact current Materials head:

`09a534d9d6d4cdaa1bab70cc2d01345b48d8fcc8`

Exact source donor:

`34124101e616c423c5a3ed5e122ddf09b98a1650`

Material profile remains the same five-surface family:

- `slab_mineral`: `#555A5DFF`, metallic `0.0`, roughness `0.92`;
- `frame_galvanized`: `#77838AFF`, metallic `0.68`, roughness `0.38`;
- `infill_coating`: `#59666DFF`, metallic `0.16`, roughness `0.68`;
- `roof_membrane`: `#24282BFF`, metallic `0.02`, roughness `0.88`;
- `utility_panel_ochre`: `#6F5A3AFF`, metallic `0.18`, roughness `0.62`.

No scalar changed in this activation.

`lookdev/building_material_profile_001.json` now adds a bounded successor-representation contract:

- contract: `axm.building-header-segmentation/v0.1`;
- exact source head: `34124101e616c423c5a3ed5e122ddf09b98a1650`;
- exact successor revision: `service-pavilion-001/interpenetration-free-header-segmentation-003`;
- six explicit emitted IDs:
  - `front-header::segment-0` -> `frame_galvanized`;
  - `front-header::segment-1` -> `frame_galvanized`;
  - `front-header::segment-2` -> `frame_galvanized`;
  - `rear-header::segment-0` -> `frame_galvanized`;
  - `rear-header::segment-1` -> `frame_galvanized`;
  - `rear-header::segment-2` -> `frame_galvanized`;
- fallback policy: `NONE_EXPLICIT_IDS_ONLY`.

New bounded proof components:

- `tools/build_building_material_header_segmentation_evidence.py`;
- `lookdev-header-segmentation-proof/project.godot`;
- `lookdev-header-segmentation-proof/observe.gd`;
- `.github/workflows/building-material-header-segmentation.yml`.

The builder consumes the exact Hard-Surface donor rather than copying the domain representation into Materials. It verifies overlay schema/owner/revision, exact six-ID material coverage, unchanged logical material coverage, known material IDs, and no wildcard fallback. It builds:

- control: 19 outputs = 17 logical Building components + 2 utility-panel proof outputs;
- candidate: 23 outputs = the same world, except two logical long headers become the exact six source-owned segments;
- candidate exact material count: 16 `frame_galvanized`, 3 `infill_coating`, 1 `roof_membrane`, 1 `slab_mineral`, 2 `utility_panel_ochre`.

A negative control removes one emitted segment binding and must fail closed before target-host rendering.

## Exact structural and target-host evidence

Dedicated workflow:

**`35128142780 — Building material header segmentation evidence` — SUCCESS**

Exact workflow head:

`09a534d9d6d4cdaa1bab70cc2d01345b48d8fcc8`

Structural result:

**`PASS_SOURCE_OWNED_HEADER_SEGMENTATION_MATERIAL_REBIND_PAYLOAD`**

Target-host result:

**`PASS_TARGET_HOST_BUILDING_HEADER_SEGMENTATION_MATERIAL_CONTINUITY`**

Pinned host: **Godot 4.7.2 GL Compatibility**.

Three fixed material-proof contexts were rendered as matched control/candidate pairs at `900 × 650`:

- `front_service`;
- `east_service`;
- `three_quarter`.

That retains six direct PNG renders.

At the observer's `> 1/255` RGB-channel threshold, exact control vs exact source-owned segmented successor produced:

| context | changed pixels | changed fraction | bbox |
|---|---:|---:|---|
| front_service | `0 / 585,000` | `0.0%` | none |
| east_service | `0 / 585,000` | `0.0%` | none |
| three_quarter | `0 / 585,000` | `0.0%` | none |

`three_quarter` reports only renderer-noise-scale mean absolute RGB-channel delta `1.78760952419705e-08`, still with zero pixels above the comparison threshold. Front and east are exact zero in the receipt.

This is stronger than merely checking that the six segments have the same material ID: the exact source-owned segmented representation reached a real renderer with the established Building five-surface family and remained visually continuous in all three retained material-proof contexts.

Same-head existing Building workflows remain green:

- `35128142730 — Building material lookdev evidence` — SUCCESS;
- `35128142709 — Building material topology A-B evidence` — SUCCESS;
- `35128142768 — Building material current-world infill repair evidence` — SUCCESS.

The older topology proof remains its own historical evidence path; this activation does not silently rewrite it into the newer header-segmentation proof.

## Retained evidence

Artifact:

- ID `10459474211`;
- name `building-material-header-segmentation-09a534d9d6d4cdaa1bab70cc2d01345b48d8fcc8`;
- size `360,992 B`;
- GitHub SHA-256 `14464a2d3f5dcb2d7662a3d0e976fd45dabbc1a7f8882b34e0c4fbf41116ddf3`;
- independently downloaded ZIP SHA-256 reproduced exactly as `14464a2d3f5dcb2d7662a3d0e976fd45dabbc1a7f8882b34e0c4fbf41116ddf3`.

The archive retains the exact profile, generated payload, structural receipt, Godot runtime receipt and all six control/candidate PNGs.

## Handoffs

Building Materials PR #3 comment `5701723771` records the exact result, artifact and held claims.

Building Hard Surface PR #2 comment `5701725849` records that the new source representation now has an explicit Materials-side binding without transferring representation ownership.

### Environment / Map receivers

Do **not** inherit this by similarity. A Map/Environment successor that adopts Hard Surface head `34124101...` should explicitly bind the new source identity and consume this Materials successor rather than guessing segment inheritance. Keep the already accepted `#59666DFF` infill values unchanged unless a new receiving-scene defect is returned.

This proof does **not** claim current Map receiving equivalence. The retained Godot host is a dedicated Materials proof surface, not the full dynamic current world.

### Runtime / Optimization

The source representation changes output count from 19 to 23 in this bounded Building proof because two logical headers become six emitted segments. This activation does not characterize draw-call, import, batching or target-device cost. Runtime owns that question if/when the representation is adopted downstream.

### 3D Art Direction + Visual Observer / QA

No new look preference is requested: the target result is continuity under an already accepted material family. Final receiving-scene visual acceptance remains theirs after Environment explicitly composes the successor.

### Hard Surface / Geometry

Hard Surface retains sole ownership of the segmentation geometry/representation and its union-equivalence evidence. Materials does not re-prove or redefine the source geometry contract; it binds only emitted source IDs to existing surface roles.

### UC / Profession Fabric

No move is justified. These Building-specific IDs and scalar values stay in Building Materials. The reusable lesson is procedural: when a source-owned representation introduces new emitted IDs while preserving logical roles, downstream material binding should become explicit and fail closed rather than rely on naming-prefix inference.

## Continuity preserved

- Accepted Building scalar family is unchanged, including `infill_coating #59666DFF`.
- Historical current-source topology/material A/B evidence remains intact and separately green.
- Hard Surface source ownership stays in Hard Surface; Materials stores only the exact donor identity plus emitted-ID binding.
- Previous Nature three-source material-family evidence remains intact and awaiting downstream receiving decisions.
- No old evidence is relabelled as proof of the new source representation.

## Non-claims

This activation does **not** establish:

- Hard-Surface geometry ownership or source union equivalence;
- current Map / Environment receiving equivalence;
- draw-call, batching, CPU/GPU, memory, import or target-device performance acceptance;
- final Art Direction or Visual QA acceptance in the full world;
- UVs, textures, decals, weathering, microdetail or physically measured coating correctness;
- renderer/camera/FOV/resolution/HDR/display equivalence beyond the three retained Godot 4.7.2 GL Compatibility contexts;
- CANON, production readiness, game readiness or Materials mastery.

## Four-root gate

- **Truth:** exact Hard-Surface donor, exact emitted IDs, exact Materials head, fail-closed negative control, real Godot A/B and independently matched artifact digest are all retained; Map/runtime/final-art claims remain explicitly held.
- **Agency / non-domination:** Hard Surface retains geometry authority; Environment, Runtime, QA and Art Direction retain their own acceptance gates; Materials owns only its explicit surface mapping.
- **Continuity:** accepted scalars, logical material roles and prior evidence remain unchanged; the new representation is added as a distinct exact provenance edge rather than silently replacing history.
- **Wisdom before speed:** close the source-to-material identity gap with one explicit contract before adding new shader complexity or retuning already accepted surfaces.
