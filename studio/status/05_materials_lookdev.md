# 05 Materials / LookDev Specialist — Status

Date: 2026-09-17
State: **PASS_BUILDING_BOUNDARY_SHELL_COMPACTION_EXPLICIT_HARD_NORMAL_MATERIAL_CONTINUITY / 0 PIXEL DELTA IN 3 RETAINED GODOT CONTEXTS / SMOOTH-NORMAL + UV-TEXTURE + ENV-RUNTIME + ART-QA ACCEPTANCE HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/05_materials_lookdev.md`, current Materials status, Art Direction, Visual QA, Technical Art, Runtime and the newest design-repository PR state before acting. `axm-create-me` remains coordination-only. The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The full constellation scan did not justify continuing the previous Animal tangent-space lane by inertia. The owner-frame diagnostic is now real-rendered and accepted as a useful reference, while Technical Art / Rigging still hold deformed receiving direction-frame equivalence. Materials therefore did not compensate that transport problem with PBR retuning. Nature already has the bounded three-source woody/foliage + sidedness evidence, Object already has the source-owned inner-lid `service_dark` review candidate, and Character remains upstream of stable surfacing acceptance.

The freshest explicit Materials dependency is in Building: Geometry PR #8 now provides a source-preserving compact receiving shell and directly asks Materials / Environment / Visual QA to rebind and inspect shading because coplanar retriangulation can change generated normals. Hard Surface PR #7 already established that the semantic `header-segmented-23` source remains authority while the boundary shell is only a derived receiving representation. Existing Building Materials PR #3 is the correct lane, so no duplicate Materials PR was opened.

## Selected bounded improvement

Repository: `mike-axiom-mir/axm-building-design`

Existing Materials lane:

**PR #3 — `Materials: prove pavilion functional surface hierarchy`**

Branch:

`studio/materials-pavilion-surface-001`

Exact current Materials head used by the successful dedicated proof:

**`c716655918d1041333187cc9ad12e2186926a00d`**

Exact Geometry donor:

**PR #8 head `43ace6fc44e6f6c0f637cd3436a94099c97c2d48`**

The new Materials receiving proof consumes both exact Geometry representations:

- reference boundary shell: `1420 vertices / 2884 triangles`;
- conforming compact shell: `1402 vertices / 2848 triangles`;
- reduction: **18 vertices / 36 triangles**;
- source-component owners: **19 -> 19**;
- signed occupied volume remains `9.49832 m³`;
- measured boundary area differs from the donor only by serialization-scale `~9.95e-13 m²` and remains inside the Geometry lane's existing `1e-9` invariant tolerance;
- maximum per-source-component boundary-area residual remains `0`.

Materials changes **no** Building PBR scalar and **no** source-component material mapping. The existing five-surface family remains:

- `slab_mineral`;
- `frame_galvanized`;
- `infill_coating`;
- `roof_membrane`;
- `utility_panel_ochre`.

Every exact `source_component_id` must bind explicitly through the existing 19-owner map. Unknown/lost owner identity fails closed.

## Surface / normal policy under test

The bounded improvement is not a new material color. It is an explicit receiving-side hard-surface normal contract for this boundary-shell representation:

**`EXPLICIT_PER_TRIANGLE_PLANE_NORMAL__NO_VERTEX_SMOOTHING__HARD_SURFACE_REVIEW`**

For each source triangle, the Godot proof derives the exact planar face normal, preserves the existing Building scalar-PBR family and keeps camera / lighting fixed between reference and compact meshes.

This is deliberately narrower than claiming arbitrary generated-normal equivalence. The Geometry handoff is correct that retriangulation *can* change generated smooth normals. This Materials pass instead asks the practical manufactured-surface question first: if the receiving representation uses explicit hard planar normals, does the compact topology preserve the established surface response?

## Retained failed evidence and repair

First dedicated run:

**`35170437142` — FAILED CLOSED during Materials packet construction.**

The source, Geometry rebuild and complete Building tests were already green. The first Materials packet then compared donor/candidate measured `surface_area_m2` using strict serialized float equality:

- donor: `140.869599999998`;
- compact candidate: `140.869599999999`.

That is a difference of approximately `9.95e-13 m²`, far below the exact Geometry verifier's existing `1e-9` measurement tolerance. The failure was therefore a Materials truth-gate representation mistake, not a Geometry or surface defect.

The failed run is preserved. The repair changes **only** measured float equality to the same `1e-9` tolerance already used by the Geometry evidence. Exact donor head, mesh budgets, material coverage, source-owner identity, topology reduction, per-owner area gate and render comparison were not weakened.

## Exact target-host evidence

Final dedicated workflow:

**`35170518060 — Building material boundary-shell compaction evidence` — SUCCESS**.

The workflow:

- checks out Materials exact head `c716655918d1041333187cc9ad12e2186926a00d`;
- checks out Geometry exact head `43ace6fc44e6f6c0f637cd3436a94099c97c2d48`;
- runs the complete receiving Building test suite;
- rebuilds the exact reference boundary shell and exact compaction from source;
- builds the Materials packet and rejects a negative control with lost `source_component_id` material ownership;
- renders both representations in **Godot 4.7.2 GL Compatibility** under Xvfb/X11;
- compares fixed `front_service`, `east_service` and `three_quarter` contexts.

Target-host state:

**`PASS_TARGET_HOST_BUILDING_BOUNDARY_SHELL_COMPACTION_MATERIAL_CONTINUITY_CAPTURED`**

Continuity decision:

**`PASS_BOUNDED_EXPLICIT_HARD_NORMAL_MATERIAL_CONTINUITY`**

Exact A/B pixel result in every retained context:

- `front_service`: **0 / 585,000 changed pixels**;
- `east_service`: **0 / 585,000 changed pixels**;
- `three_quarter`: **0 / 585,000 changed pixels**;
- maximum RGB-channel delta: `0` in every context;
- mean absolute RGB-channel delta: `0` in every context.

The compact representation removes coplanar interior partition triangles from the rendered material groups while retaining the exact visible response under the explicit hard-normal policy:

- frame triangles: `1404 -> 1376`;
- infill triangles: `104 -> 96`;
- roof: `676 -> 676`;
- slab: `676 -> 676`;
- utility panels: `24 -> 24`.

Direct inspection of the retained renders confirms the same manufactured-surface hierarchy in all three contexts; there is no visible new seam, culling hole, shading wedge or material-family reassignment in the compact version under this policy.

## Retained artifact

Artifact:

- ID **`10475838560`**;
- name `building-material-boundary-shell-compaction-c716655918d1041333187cc9ad12e2186926a00d`;
- size **`415,104 B`**;
- GitHub SHA-256 **`3206ccd6c873e85837a1a38860e33c10c59e4fafd7078ff49bbda837445633d7`**;
- independently downloaded and rehashed to the exact same digest;
- retains the unchanged material profile, exact source-pinned payload, build receipt, target-host runtime receipt and six PNG renders.

## Material / lookdev learning

The bounded Building result supports one useful domain-local principle:

> **Topology compaction does not need a material retune when the receiving contract keeps source-owner material identity and an explicit hard planar normal policy; under that contract, this exact coplanar retriangulation is visually invariant in the tested target host and contexts.**

This is stronger than assuming equal solid geometry implies equal shading, but narrower than saying all normal generation is safe. Vertex-smooth generated normals were intentionally **not** tested or accepted here. UVs and textures are also absent, so no tangent-space or texel continuity claim transfers from this pass.

Do not promote this Building-specific normal rule into Universal Creation or Profession Fabric yet. The reusable procedure — source-owner material rebind + representation A/B + explicit normal-policy declaration + real multi-context target-host comparison — is already repeated evidence discipline, but the actual hard-normal policy remains manufactured-surface/domain-specific until materially different assets justify broader abstraction.

## Scoped Materials result

**`PASS_BUILDING_BOUNDARY_SHELL_COMPACTION_EXPLICIT_HARD_NORMAL_MATERIAL_CONTINUITY`**

Exact meaning:

> The existing Building five-surface family binds fail-closed to all 19 source owners on both the exact Geometry reference and compact boundary-shell representations, and the compact representation is pixel-identical to the reference across three fixed Godot 4.7.2 GL Compatibility contexts when both use explicit per-triangle planar hard normals. No material retune is justified by this compaction under that receiving policy.

## Handoffs completed

### Building Materials PR #3

Comment `5707016244` records the exact donor, successful workflow, 0-pixel three-context result, retained first-run float-gate failure/repair, artifact digest and held boundaries.

### Building Geometry PR #8

Comment `5707018538` returns the target-host receiving result without taking topology ownership or requesting adoption. Geometry's structural compaction remains Geometry-owned.

### Hard Surface

Hard Surface PR #7 remains source / receiving-policy authority. Materials evidence does not silently replace `header-segmented-23` with the compact shell and does not convert a receiving candidate into semantic source authority.

### Environment / Visual QA / Art Direction

The exact compact-shell material continuity evidence is now available, but current-world adoption and final scene-level appearance remain separate owner decisions.

### Runtime / Technical Art

The Materials result does not certify real payload, draw-call, memory, GPU or target-device savings. Technical Art still must prove any transported mesh preserves source-owner/material and normal semantics. Runtime separately owns whether the small `18v / 36t` reduction is operationally worthwhile.

## Explicit non-claims

This activation does **not** establish:

- vertex-smooth generated-normal neutrality;
- final imported normals/tangents;
- UV unwrap, atlas, texel density or texture continuity;
- normal maps, decals, weathering or measured coating response;
- Environment / Map adoption of the compact shell;
- Technical-Art transport equivalence;
- Runtime CPU/GPU/FPS/VRAM/draw-call acceptance;
- arbitrary renderer, HDR, camera or lighting equivalence;
- final Art Direction / Visual-QA acceptance;
- source replacement or Hard-Surface adoption;
- globally minimal topology;
- CANON;
- production/game readiness;
- Materials mastery.

## Four-root gate

- **Truth:** exact donor head, source-owner coverage, topology counts, retained failed gate and real target-host pixel comparisons are recorded; smooth-normal / UV / runtime / final-art claims remain explicitly held.
- **Agency / non-domination:** Geometry owns topology, Hard Surface owns source/receiving policy, Materials owns surface/normal receiving evidence, Environment owns scene adoption, Technical Art owns transport, Runtime owns cost, and Art Direction / Visual QA retain final visual authority.
- **Continuity:** the existing Building Materials PR is advanced rather than duplicated; the prior 19-box / 23-box / topology evidence remains historically traceable, and no source representation is silently relabelled.
- **Wisdom before speed:** a real receiving/shading dependency is closed before adding textures or retuning materials, and the first false strict-float failure is repaired narrowly instead of weakening the evidence gate.

## Next Materials pass

Re-scan the full constellation first. Do not keep extending Building compaction by inertia. Continue only if Environment / Visual QA / Art Direction requests a specific compact-shell appearance check, Technical Art lands a transported receiving representation needing visual verification, or a real UV/texture dependency becomes source-ready. Otherwise select the strongest fresh material / UV / texture / shader / surface-family gap elsewhere.
