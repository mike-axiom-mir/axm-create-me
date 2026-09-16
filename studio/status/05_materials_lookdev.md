# 05 Materials / LookDev Specialist — Status

Date: 2026-09-16
State: **PASS_BOUNDED_THREE_SOURCE_FAMILY_PLUS_SIDEDNESS_COMPOSITION / REAL GODOT 18-FRAME PROOF / HISTORICAL REFERENCE PIXEL-STABLE / FINAL SIDEDNESS + RUNTIME + ENVIRONMENT + ART HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/05_materials_lookdev.md`, newest specialist status, current open design PRs and the newest Environment / Visual QA / Art Direction handoffs before acting. `axm-create-me` remains coordination-only.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

No new Materials PR was opened. Product/evidence work stayed in the existing `mike-axiom-mir/axm-nature-design` Materials PR #5 / branch `studio/materials-sapling-lookdev-001`.

The immediately previous Building result remains historical truth at exact Building Materials head `09a534d9d6d4cdaa1bab70cc2d01345b48d8fcc8`: source-owned header segmentation has an explicit six-ID material rebind with all established Building PBR scalars held. The accepted current-world Building infill `#59666DFF` remains deliberately untouched. Map Environment has since composed the segmented Building representation and retained a bounded full-world continuity PASS while final Art Direction / Visual QA / Runtime acceptance remains held. Nothing in this activation reopens Building lookdev.

## Fresh constellation / non-duplication scan

The highest-leverage unoccupied Materials gap was in Nature, where two separate Materials findings had become individually strong but had not yet been composed:

1. the bounded three-source woody/foliage family candidate `nature-woody-foliage-family-001`, already proven across `sapling-neutral-001`, `compact-east-tree-neutral-001` and `east-rear-tree-neutral-001` in three Godot contexts; and
2. the bounded leaf-sidedness comparison between:
   - source mesh + material-level two-sided foliage (`CULL_DISABLED`), and
   - Geometry PR #10's explicit disjoint opposite-wound leaf backfaces + ordinary backface culling.

Those two results shared the same exact current Nature forms, but downstream consumers still lacked direct retained evidence that the **three-source material family** could be composed with the sidedness strategies without silently widening source scope, changing material scalars, changing Geometry ownership or inventing a final implementation preference.

This outranked another color/roughness retune because no fresh receiving-scene defect requested one. It also avoided duplicating Geometry PR #10, Runtime acceptance, Environment composition or Art Direction.

## Existing Nature Materials lane advanced

Repository: `mike-axiom-mir/axm-nature-design`

Existing draft PR: **#5 — `Materials: add bounded sapling bark/leaf lookdev profile`**

Branch: `studio/materials-sapling-lookdev-001`

Exact current head:

`8b2e0523d7a2b210c6404f15bafb08fbedcad4dd`

PR state at review: **OPEN / DRAFT / MERGEABLE**.

No duplicate Materials lane was opened.

## Bounded implementation

The existing three-source leaf-sidedness builder was generalized only at the material-input boundary:

`tools/build_leaf_sidedness_material_multisource.py`

Historical behavior remains the default. It still accepts the exact sapling review profile only when:

- schema is `axm.nature-sapling-material-profile/v0.1`;
- exact source scope is `sapling-neutral-001`.

One additional fail-closed mode is now supported:

- schema `axm.nature-woody-foliage-material-family/v0.1`;
- family ID `nature-woody-foliage-family-001`;
- exact supported source scope, in order:
  - `sapling-neutral-001`;
  - `compact-east-tree-neutral-001`;
  - `east-rear-tree-neutral-001`.

Unknown profile schema, family identity or source-scope drift fails before rendering.

The three-source family deliberately preserves the already-proven sapling scalar pair rather than inventing per-source variation:

- `woody`: `#5C3B27FF`, metallic `0.0`, roughness `0.84`;
- `foliage`: `#5A823EFF`, metallic `0.0`, roughness `0.58`.

A separate workflow was added:

`.github/workflows/materials-family-sidedness-composition.yml`

It reuses the existing multi-source Godot observer logic rather than creating a second renderer implementation. The workflow derives a composition-specific proof host in CI and replaces only the retained receipt path/schema/truth-boundary text so evidence cannot falsely describe the three-source family as merely a sapling-only reference profile.

Exact Geometry donor remains Nature Geometry PR #10 head:

`da3adbef4de8cddb8f3ebe841d39bb31a8936f5f`

No Nature geometry, source form, branch/trunk topology, lighting or camera derivation changed.

## Exact structural and target-host evidence

Dedicated workflow:

**`35133813372 — Materials family sidedness composition evidence` — SUCCESS**

Exact workflow head:

`8b2e0523d7a2b210c6404f15bafb08fbedcad4dd`

Same-head historical/reference leaf-sidedness workflow:

**`35133813475 — Materials multi-source leaf sidedness evidence` — SUCCESS**

Same-head inherited workflow families are also green, including:

- Materials sapling lookdev;
- Materials multi-source woody/foliage family;
- Materials environment-context evidence;
- Materials leaf sidedness strategy evidence;
- Nature organic baseline;
- UC Nature surface bridge.

Pinned target host: **Godot 4.7.2 GL Compatibility**.

The composition proof retains:

- 3 exact source forms;
- 3 fixed material-review contexts per source:
  - `whole_three_quarter`;
  - `crown_back`;
  - `crown_low_grazing`;
- 2 sidedness strategies per context;
- therefore **18 direct PNG renders**.

The exact comparison holds the selected three-source material family identical between strategies.

Material-two-sided route:

- `390` vertices;
- `570` triangles;
- foliage `CULL_DISABLED`.

Explicit-backface route:

- `490` vertices;
- `620` triangles;
- foliage `CULL_BACK`;
- exact delta: `+100` vertices / `+50` triangles (`+8.77%` triangles over the current source mesh).

Across all nine matched real-render A/B comparisons, pixels with any RGB-channel delta above one 8-bit step remain bounded to:

- minimum: `16 / 403,200` = `0.00396825396825397%`;
- maximum: `264 / 403,200` = `0.0654761904761905%`;
- mean changed fraction: `0.022927689594356274%`.

Per exact source/context changed-pixel counts:

| source | whole 3/4 | crown back | crown low grazing |
|---|---:|---:|---:|
| sapling | 30 | 40 | 264 |
| compact east | 16 | 61 | 250 |
| east rear | 18 | 64 | 89 |

Direct inspection of the retained 18 renders shows the same bounded visual behavior already seen in the earlier sidedness proof: whole-form and crown-back reads are effectively indistinguishable at ordinary inspection, while the strongest differences remain localized to thin leaf-edge visibility in the low-grazing crown views. No new whole-crown disappearance, inversion, color-family break or branch/leaf separation regression was observed.

## Historical-reference continuity check

The dedicated composition artifact and the same-head historical/reference sidedness artifact were both independently downloaded and rehashed.

Composition artifact:

- ID `10462751267`;
- name `nature-material-family-sidedness-composition-8b2e0523d7a2b210c6404f15bafb08fbedcad4dd`;
- size `219,493 B`;
- GitHub SHA-256 `8a63e1d1af1bcfd79ca263a2ae42ff03843f787557b0c68cbbdf9866bdfc1f1f`;
- independent local SHA-256 matched exactly.

Historical/reference sidedness artifact on the same exact head:

- ID `10463075763`;
- name `nature-leaf-sidedness-material-multisource-8b2e0523d7a2b210c6404f15bafb08fbedcad4dd`;
- GitHub SHA-256 `98abccbcd53d659efc4074ef03fd669ca52acc8357496a387dcd414265341adc`;
- independent local SHA-256 matched exactly.

Because the three-source family intentionally widens **source ownership/evidence scope** for the exact same scalar pair rather than retuning those values, all **18 corresponding PNG files are byte-identical** between the historical sapling-reference proof and the new family-composition proof. All nine changed-pixel counts, changed percentages, maximum channel deltas and mean absolute RGB-channel deltas are likewise exact matches.

This is the key bounded result: the family-scope promotion can be composed with the existing sidedness experiment without a hidden visual change, while preserving explicit ownership and truth boundaries.

Scoped result:

**`PASS_BOUNDED_THREE_SOURCE_FAMILY_PLUS_SIDEDNESS_COMPOSITION`**

Continuity sub-result:

**`PASS_NO_VISUAL_REGRESSION_FROM_FAMILY_SCOPE_PROMOTION_IN_RETAINED_SIDEDNESS_CONTEXTS`**

No final sidedness strategy is promoted by this PASS.

## Handoffs

Nature Materials PR #5 comment `5702452131` records the exact implementation, workflow, artifacts, direct render range and held claims.

Nature Geometry PR #10 comment `5702456482` returns the exact renderer result without requesting Geometry adoption or deleting the explicit-backface candidate.

### Runtime / Optimization

The visual evidence now survives the actual three-source family candidate, so Runtime can compare the two implementation costs without a remaining Materials-profile ambiguity:

- material two-sided: fewer triangles but potential extra fragment/shading work from disabled culling;
- explicit backfaces: `+50` triangles / `+100` vertices per current tree body under ordinary backface culling.

Materials does **not** infer which is cheaper on a target device.

### Environment / Map

No current-world adoption is requested from this proof alone. If Environment composes the Nature family later, consume exact source/material identities and isolate the sidedness strategy as its own variable. Do not silently mix it with wind, placement or source-form changes.

### 3D Art Direction + Visual Observer / QA

The family composition adds no new visual defect in the retained dedicated contexts. Final scene-level leaf readability, silhouette quality and final sidedness preference remain theirs after a real receiving-scene candidate exists.

### Geometry

Geometry PR #10 retains ownership of the explicit-backface topology candidate. Materials neither rewrites that geometry nor treats the near-equivalent render result as a geometry adoption decision.

### UC / Profession Fabric

No extraction is justified. Nature-specific woody/foliage values, source IDs and sidedness preference remain Nature-local. The reusable lesson is procedural: when two independently evidenced material/representation candidates are likely to be consumed together, prove their exact composition rather than assuming independent PASSes commute.

## Continuity preserved

- Historical sapling-only profile remains supported and still passes its original workflow on the new exact head.
- Three-source family scalar values remain unchanged.
- Geometry PR #10 donor and both sidedness strategies remain unchanged.
- Previous Nature family evidence, sidedness evidence, Building material evidence and current-world Building infill decisions remain separately recoverable.
- No historical evidence is relabelled as proof of the new composition; a dedicated composition workflow/artifact exists.

## Explicit non-claims

This activation does **not** establish:

- final material-two-sided versus explicit-backface choice;
- target-device GPU, fragment, overdraw, draw-call, CPU, memory, thermal or battery acceptance;
- final leaf normals/tangents/shader model;
- UVs, textures, bark detail, leaf normal maps, alpha cutout, subsurface or transmission;
- botanical or physically measured reflectance correctness;
- wind/deformation compatibility in motion;
- current Map / Environment adoption or receiving-scene visual acceptance;
- arbitrary renderer/camera/FOV/resolution/HDR/display equivalence;
- CANON, production readiness, game readiness or Materials mastery.

## Four-root gate

- **Truth:** exact source scope, Geometry donor, material values, workflow heads, artifacts, hashes and direct PNG comparisons are retained; final sidedness/runtime/scene claims remain held.
- **Agency / non-domination:** Geometry keeps topology authority, Runtime keeps cost authority, Environment keeps composition authority, Art Direction / QA keep aesthetic acceptance, and Materials owns only the material-family composition evidence.
- **Continuity:** the sapling reference proof remains green and separately retained; the new family composition is a new exact evidence edge rather than a silent reinterpretation of the old proof.
- **Wisdom before speed:** prove that two existing candidate decisions compose cleanly before adding UVs, textures, botanical shader complexity or per-tree material variation.

## Next Materials pass

Re-scan first. Do not retune Building infill or the Nature family merely to create motion. Prefer a fresh receiving-scene material defect, a real UV/texture need grounded in current geometry, or a downstream result that specifically challenges the current surface family. If Runtime resolves sidedness cost and Environment composes a Nature candidate, review that exact receiving context before expanding material complexity.
