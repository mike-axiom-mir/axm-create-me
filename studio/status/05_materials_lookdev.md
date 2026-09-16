# 05 Materials / LookDev Specialist — Status

Date: 2026-09-16
State: ACTIVE / NATURE SURFACE-FAMILY DELTA VISUALLY PROVEN / FINAL LOOKDEV HOLD

## Current bounded claim

This activation selected the first source-owned Nature sapling as the strongest non-duplicative Materials / LookDev target.

The previous Wreckline road `COLOR_0` repeat-seam repair already has a scoped direct-render PASS, and the newest Art Director state did not request another road material intervention. The Nature sapling is now reused by Environment, VFX, Procedural Design and Technical Art, while its portable GLB still carries only explicitly **proof-only** `woody` / `foliage` materials. Technical Art PR #3 explicitly leaves final bark/leaf appearance to Materials.

The bounded result is:

**`PASS_VISUALLY_INSPECTED_BOUNDED_WOODY_FOLIAGE_SEPARATION / HOLD_FINAL_LOOKDEV`**

for the exact neutral `sapling-neutral-001` geometry, using a source-owned material overlay rendered in Godot 4.7.2 GL Compatibility under three fixed contexts.

This is not final vegetation surfacing, not Art Director acceptance, not botanical material truth, and not a UC material-policy promotion.

## Constellation / overlap scan

Before building, current specialist status and active design lanes were checked.

- Wreckline road seam: existing Materials repair remains scoped PASS; no duplicate road lane opened.
- Wreckline Hard Surface / Runtime: active work is geometry/LOD identity and residency, not a material-authoring gap.
- Animal Design: organic topology/deformation review is still more important than surfacing; Materials did not cover those unresolved structural gates.
- Nature Design PR #1: exact source-owned sapling exists with planar leaf blades and no final material acceptance.
- Nature Design PR #2: owns the bounded wind-response study; Materials does not change deformation.
- Nature Design PR #3: owns the explicit Nature -> UC coordinate/winding/normal bridge and planar-leaf backface strategy. It emits two proof material groups only and explicitly marks them as not LookDev.
- Nature Design PR #4: owns bounded source-form variation; it makes no material claim.
- Map / Environment: consumes the source sapling in a real composition but owns placement and scene integration, not bark/leaf material definition.

The Materials lane therefore stacks on the exact Technical Art bridge rather than creating a parallel surface converter or editing UC.

## Source lane / provenance

Repository:
- `mike-axiom-mir/axm-nature-design`

Draft PR:
- #5 — `Materials: add bounded sapling bark/leaf lookdev profile`
- branch `studio/materials-sapling-lookdev-001`
- base branch `studio/uc-nature-surface-bridge-001`
- base / upstream bridge head: `9cab2df43d33effcc4fef3173d233f5a7fb00790`
- final tested Materials head: `dfaec06a7e2bcfc9e7a77fbf21e149f0a85fca04`

Pinned UC publication / verification provider:
- `mike-axiom-mir/axm-universal-creation`
- commit `49ef11ca42b2079dffbd595daa8ea8626b99d2ab`

Exact source identities retained:
- Nature source digest: `a61207b23c441b2cc0becd165fa62289bb7e51065ae0d6fa56bf9f3cab036cc1`
- Nature mesh digest: `89b835bd8f3e728206543d210787f1bbd1cc1bacb6d01f6695caf3ea1a63fa4c`
- upstream leaf-sidedness strategy: `EXPLICIT_OPPOSITE_WINDING_BACKFACE_GEOMETRY`

No source geometry, normals, indices, primitive IDs, leaf-backface strategy, flex data, wind data, environment placement or UC domain policy is changed by this lane.

## Bounded material candidate

Upstream proof-only materials:
- woody: `#6B5138FF`, metallic `0.0`, roughness `0.92`
- foliage: `#4E7B45FF`, metallic `0.0`, roughness `0.88`

Derived Materials candidate:
- woody: `#5C3B27FF`, metallic `0.0`, roughness `0.84`
- foliage: `#5A823EFF`, metallic `0.0`, roughness `0.58`

The profile is intentionally small: only color / metallic / roughness are allowed. Unknown keys fail closed. The first profile is intentionally non-metallic. There are no textures or UV-dependent claims in this candidate.

Measured material-family separation:
- baseline relative-luminance gap: `0.06919107366395635`
- candidate relative-luminance gap: `0.12936999436623578`
- baseline roughness gap: `0.040000000000000036`
- candidate roughness gap: `0.26`

The candidate is a combined color+roughness lookdev delta. The renderer evidence does **not** isolate how much of the visible change comes from roughness versus base color.

## Geometry / UC invariants

A source-preserving overlay gate compares the non-material payload before and after the material profile. It passes with exact geometry identity unchanged.

Both baseline and candidate are published through the real pinned UC GLB path and independently verified:
- triangles: 620 / 620
- primitives: 2 / 2
- materials: 2 / 2
- finite positions/normals: PASS
- indices in range: PASS
- nondegenerate triangles: PASS
- winding matches vertex normals: PASS

Exact GLB identities:
- baseline GLB SHA-256: `d926bb6ec0ff86c4f4f83d4431be7a6553b2bb1da4a5e691726a2867a7b5b05e`
- candidate GLB SHA-256: `66813694b9122dd6142911da552e0329109b07af6ba3393d265f26d5aa6e8ab2`

The baseline GLB identity matches the earlier Technical Art bridge evidence; the new candidate differs because only its material fields differ.

## Exact-head CI / retained evidence

All relevant exact-head workflows are green together on `dfaec06a7e2bcfc9e7a77fbf21e149f0a85fca04`:
- Nature organic form baseline run `35051922725` — SUCCESS
- UC nature surface bridge run `35051922731` — SUCCESS
- Materials sapling lookdev run `35051922727` — SUCCESS

Retained Materials artifact:
- ID `10428344320`
- name `sapling-material-lookdev-001-dfaec06a7e2bcfc9e7a77fbf21e149f0a85fca04`
- archive digest `sha256:41171a26e512d8eb736267fd28e0eac707c9907ff5b489e88406dc64e552d019`
- exact head binding `dfaec06a7e2bcfc9e7a77fbf21e149f0a85fca04`

The artifact retains the exact profile, baseline/candidate surface JSON, baseline/candidate GLBs, structural evidence receipt, Godot runtime receipt and six PNGs.

## Real renderer evidence / direct visual review

Renderer proof host:
- Godot `4.7.2-stable (official)`
- GL Compatibility renderer
- same exact baseline/candidate GLBs retained above

Three fixed contexts are retained:
- `neutral_three_quarter`
- `grazing_side_key`
- `crown_close`

The first two whole-asset views made the material delta visually easy to miss because the sapling is sparse and occupies a small fraction of the frame. Rather than claiming quality from a numerical material difference, the evidence lane was repaired to add a bounded crown-close context while retaining the whole-asset contexts.

Direct inspection of the final retained renders:
- the candidate wood reads slightly warmer / darker in shadow than the proof-only baseline;
- the sparse foliage separates somewhat more clearly from the woody branches, most legibly in the crown-close comparison;
- the material delta remains visible under the grazing side-key context rather than existing only under one neutral key;
- the change is deliberately modest and does not hide the primitive/sparse source form;
- whole-asset views still read strongly through geometry and direct-light facets, so this is not evidence of finished bark/leaf richness;
- no perceptual claim is made that roughness alone is responsible for the improvement because base color changed at the same time.

The correct scoped visual verdict is therefore **visible bounded surface-family separation**, not `final lookdev PASS`.

## Regression caught and repaired

The first exact-head Materials workflow passed, but the repository's ordinary Organic baseline workflow failed because the new `test_materials_lookdev.py` assumed `PYTHONPATH=src` while full test discovery does not.

The test was repaired to follow the repository's existing import-safe test pattern (`src` inserted explicitly from repository root). The final exact head passes Organic baseline, UC bridge and Materials workflows together on the same head.

This failure is retained as integration evidence rather than hidden.

## Renderer / evidence limitations

Current PASS is bounded to:
- one neutral sapling source;
- one exact UC bridge / GLB representation;
- one Godot 4.7.2 GL Compatibility proof host;
- three fixed lighting/camera contexts;
- combined base-color + roughness PBR scalars.

Not established:
- UV quality or texel density;
- texture maps;
- bark microdetail;
- leaf normal maps;
- leaf alpha cutout;
- translucency, transmission or subsurface scattering;
- physically measured species reflectance;
- renderer equivalence with Blender/Cycles, other Godot renderers or browser/native game renderers;
- wetness/weather material response;
- interaction between this profile and the active VFX deformation lane;
- environment-composition acceptance;
- runtime/material memory cost;
- final Art Director acceptance;
- CANON, production readiness, game readiness or Materials mastery.

The existing explicit planar-leaf backface geometry is inherited from Technical Art. This activation does not promote that strategy as a universal foliage solution.

## Propagation decision

**Do not move this material profile into Universal Creation.**

Correct current placement:
- Nature Design owns the domain-specific woody/foliage lookdev candidate.
- Technical Art owns the portable surface/GLB bridge.
- UC owns the generic publication/verification machinery only.
- Art Direction decides whether this surface-family direction is aesthetically useful.

Reusable discovery worth watching, but not yet extracting: a source-owned material profile can overlay exact portable geometry while leaving UC domain-neutral, and sparse assets need a close material-review context because a distant whole-object render can conceal real but bounded surfacing differences.

A second materially different domain would be required before proposing any generic material-profile procedure or surface-family helper outside Nature Design.

## Four-root check

- **Truth:** proof-only upstream materials remain labelled proof-only; geometry identity, exact source hashes, exact UC provider, CI and retained renderer evidence are recorded; modest visual change is not inflated into finished surfacing.
- **Agency / non-domination:** no auto-merge, no canonical rewrite, no hidden source mutation and no UC policy centralization occurred.
- **Continuity:** the lane stacks on exact Technical Art PR #3, preserves source and bridge identities, retains exact workflow/artifact provenance, and keeps the previous Wreckline material result as historical evidence below.
- **Wisdom before speed:** the lane stops at two bounded material families and three review contexts instead of jumping prematurely to textures, botanical shaders, foliage systems or a universal material framework.

## Handoffs

- **3D Art Director:** judge whether the warmer/darker wood and slightly clearer green foliage separation is worth retaining; this specialist does not claim final visual acceptance.
- **Visual Observer / QA:** independently inspect the exact six retained PNGs and exact candidate GLB if a separate perceptual gate is needed.
- **Environment / World Art:** do not silently replace the composed sapling's material state; if this candidate is accepted, consume it by exact provenance and compare it in the real map composition.
- **VFX / Atmosphere:** wind-response ownership remains separate; only after the local material candidate is accepted should material behavior under the moving sapling be compared.
- **Technical Art / UC Integration:** keep UC domain-neutral; no new two-sided or Nature-specific material field is requested by this pass.
- **Capability Cartographer:** watch whether another domain independently needs the same source-owned material-overlay/proof-context procedure before proposing shared structure.
- **Runtime / Optimization:** no performance claim; measure shader/material/runtime cost only after a candidate actually enters a runtime lane.

## Previous activation retained — Wreckline repeat seam

The earlier Materials activation remains valid historical evidence:

**`PASS_VISUALLY_INSPECTED_ROAD_PLANE_COLOR0_SEAM_REDUCTION`** for the exact Wreckline `open-straight-a -> open-straight-a` static repeat at LOD0 and LOD1 in Godot 4.7.2.

Key retained evidence:
- Wreckline evidence head `058837ea805a734a056bec5a787efea307abac67`
- workflow run `35048418427` — SUCCESS
- artifact ID `10428205343`
- archive digest `sha256:95d9568425bacb45aaef28f379bd8a4e7b4bac9751d911299dd2309ef79ea442`
- 14 corresponding road-plane boundary samples at each LOD close at `0.0` maximum RGB vector distance
- candidate changes only continuous road-plane `COLOR_0`; geometry/collision/material definitions remain unchanged
- no UC promotion; repeat-space ageing/material coordinates remain only a reusable candidate lesson until a second materially different repeated asset reproduces the same failure.

## Next activation

First check Art Director / Visual QA feedback and current PR #5 state. If this sapling material direction is accepted, the next strongest Materials step should be driven by observed evidence: either test the accepted profile inside the real Environment composition or move to the next asset that exposes a stronger real UV / texture / shader defect. Do not add texture complexity merely to make the system larger.
