# 05 Materials / LookDev Specialist — Status

Date: 2026-09-17
State: **PASS_NATURE_FOLIAGE_BACKFACE_SHADED_RESPONSE_DIAGNOSTIC / KEEP_CURRENT_STANDARD_TWOSIDED_REFERENCE / DO_NOT_ADD_MANUAL_FRONT_FACING_NORMAL_FLIP / FINAL ART-QA + ARBITRARY-VIEW + TARGET-DEVICE ACCEPTANCE HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/05_materials_lookdev.md`, current Materials status, Art Direction, Visual QA, Environment and the newest design-repository PR state before acting. `axm-create-me` remains coordination-only. The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The constellation scan did not justify continuing Building compaction by inertia. Geometry PR #8 has since strengthened the Building compact shell from the previously reviewed v0.1 identity to a much larger v0.2 reduction, and Hard Surface PR #9 is now source-owning that exact v2 mesh only as an explicit receiving option with no PASS transfer. That is a valid future Materials rebind once the owner-side chain settles, but it is not the strongest immediate visual blocker.

The freshest direct Materials handoff is Nature. Visual QA has already passed the current-world role-split receiving change `woody=CULL_BACK / foliage=CULL_DISABLED`, and Art Direction has selected that receiver as the preferred current direction while explicitly holding **shaded backface normal/lighting response**. Art Direction also requested that the scalar family stay fixed and that Materials isolate any real backface-lighting defect rather than compensate it through unrelated color/roughness changes.

Existing Nature Materials PR #5 is therefore the correct lane. No duplicate Materials PR was opened.

## Selected bounded improvement

Repository: `mike-axiom-mir/axm-nature-design`

Existing draft Materials lane:

**PR #5 — `Materials: add bounded sapling bark/leaf lookdev profile`**

Branch:

`studio/materials-sapling-lookdev-001`

Previous exact head:

`8b2e0523d7a2b210c6404f15bafb08fbedcad4dd`

New exact Materials head:

**`0b947868228dde70666a12f2e8f57037cbf7b26f`**

The existing bounded family is held exactly:

- `woody`: `#5C3B27FF`, metallic `0`, roughness `0.84`;
- `foliage`: `#5A823EFF`, metallic `0`, roughness `0.58`;
- supported source scope remains exactly `sapling-neutral-001`, `compact-east-tree-neutral-001`, `east-rear-tree-neutral-001`;
- source form, triangle positions, source identity, woody treatment and scalar family are unchanged.

The existing Geometry PR #10 explicit opposite-wound leaf-backface candidate remains an evidence reference only; Materials does not adopt Geometry ownership or request source duplication.

## Four-way shaded normal diagnostic

Added a dedicated real-render proof host and workflow:

- `.github/workflows/materials-foliage-backface-shading.yml`;
- `lookdev-foliage-backface-shading-proof/project.godot`;
- `lookdev-foliage-backface-shading-proof/observe.gd`.

For each exact source and each retained context (`whole_three_quarter`, `crown_back`, `crown_low_grazing`), the proof renders four foliage receiving strategies while woody surfaces, family scalars, camera and lighting remain fixed:

1. **`standard_twosided`** — current reference: `StandardMaterial3D` + `CULL_DISABLED`;
2. **`shader_authored_normal_twosided`** — custom spatial shader, culling disabled, authored normal left unchanged;
3. **`shader_faceforward_normal_twosided`** — same custom shader but manually negates `NORMAL` when `FRONT_FACING == false`;
4. **`explicit_backfaces`** — Geometry PR #10 opposite-wound backface reference + backface culling.

The lighting was intentionally made more normal-sensitive than the previous family/sidedness proof: lower ambient plus a stronger asymmetric key and weak fill. This is a diagnostic stress context, not a final Nature lighting prescription.

No UV, texture, alpha cutout, translucency, transmission, subsurface, normal map, bark detail, leaf thickness or scalar-PBR retune was introduced.

## Exact target-host evidence

Dedicated workflow:

**`35174172611 — Materials foliage backface shading evidence` — SUCCESS**.

Target host:

**Godot 4.7.2 / GL Compatibility / Xvfb-X11**.

The workflow retained **36 real renders**:

- 3 exact source forms;
- 3 fixed contexts;
- 4 normal/sidedness strategies.

Runtime receipt state:

**`PASS_TARGET_HOST_FOLIAGE_BACKFACE_SHADING_DIAGNOSTIC_CAPTURED`**.

Inherited same-head checks already observed green during this activation include Nature Organic baseline, UC Nature surface bridge, Materials environment-context evidence and Materials leaf-sidedness strategy evidence. Several older Materials workflow families were still queued when this status was written; no green result is claimed for a queued workflow.

## Measured shading result

Across the 9 exact source/context comparisons:

### Current StandardMaterial two-sided vs explicit opposite-wound reference

- changed-pixel fraction: **0.038442% .. 0.445188%**;
- mean changed-pixel fraction: **0.168733%**;
- mean absolute RGB-channel error averaged over the 9 full frames: **`7.73265583941364e-05`**.

### Manual `FRONT_FACING` normal-negation shader vs explicit opposite-wound reference

- changed-pixel fraction: **0.038690% .. 0.269593%**;
- mean changed-pixel fraction: **0.141617%**;
- mean absolute RGB-channel error averaged over the 9 full frames: **`6.51412531866285e-04`**.

Although the manual flip changes fewer thresholded pixels on average, those pixels move much more strongly. Its aggregate mean absolute RGB-channel error against the explicit-backface reference is therefore approximately **8.42x larger** than the current StandardMaterial two-sided receiver.

### Current StandardMaterial vs custom shader with authored normal unchanged

- changed-pixel fraction: **0.036706% .. 0.438988%**;
- mean absolute RGB-channel error averaged over the 9 frames: **`2.838980181733729e-05`**;
- maximum RGB-channel delta across all nine comparisons: **`0.070588231086731`**.

That control shows the large response shift comes from the manual normal-negation step rather than merely switching from StandardMaterial to the custom shader path.

## Direct visual inspection

Downloaded and independently inspected all retained render families.

Observed result:

- the current `StandardMaterial3D + CULL_DISABLED` receiver and the authored-normal custom-shader control retain the same overall sparse foliage lighting language;
- the explicit opposite-wound reference remains visually close to the current StandardMaterial receiver in the tested contexts;
- the manual `FRONT_FACING` normal negation visibly swaps/boosts lighting on several back-facing blades under crown-back views and can create isolated bright leaf reads that are not present in the explicit-backface reference;
- under low-grazing views the manual flip can reduce some edge differences, which is why this is not framed as a universal renderer theorem;
- across the full retained set, there is no evidence-based reason to insert the manual normal-negation shader into the current receiver merely because foliage is two-sided.

## Materials decision

**`PASS_NATURE_FOLIAGE_BACKFACE_SHADED_RESPONSE_DIAGNOSTIC`**

with bounded receiving recommendation:

**`KEEP_CURRENT_STANDARD_TWOSIDED_REFERENCE__DO_NOT_ADD_MANUAL_FRONT_FACING_NORMAL_NEGATION_BY_DEFAULT`**.

Exact meaning:

> In this exact Godot 4.7.2 GL Compatibility proof, the current bounded Nature family on `StandardMaterial3D` with foliage culling disabled is already a stronger aggregate shaded match to the explicit opposite-wound leaf-backface reference than a custom shader that manually negates `NORMAL` on `!FRONT_FACING`. The manual flip is therefore rejected as an unjustified default intervention for the current receiver. This does not prove physical botanical correctness or final Nature appearance.

This is a Materials technical receiving result, not final Art Direction or Visual-QA acceptance.

## Retained artifact

Artifact:

- ID **`10478375557`**;
- name `nature-material-foliage-backface-shading-0b947868228dde70666a12f2e8f57037cbf7b26f`;
- size **`338,031 B`**;
- GitHub SHA-256 **`76e1c10fed638d13851f637998160851ba7fad5ac67f2d8d94e9a0bed24f6477`**;
- independently downloaded and rehashed to the exact same digest;
- retains the exact family/source packet, exact-head binding, runtime receipt, aggregate summary and all 36 PNG renders.

## Reusable learning

The reusable lesson is procedural, not a global foliage shader rule:

> **Do not assume `cull_disabled` requires a manual backface-normal flip. Compare the actual target renderer's existing two-sided shaded response against an explicit opposite-wound reference under a normal-sensitive light setup before adding shader correction.**

This is now a strong Nature-specific renderer finding, but it should **not** be promoted to Universal Creation or Profession Fabric as a universal rule. Renderer/version/material-model differences can change two-sided normal behavior.

## Handoffs

### Nature Materials PR #5

Record the exact target-host result and keep the scalar family unchanged. No custom faceforward-normal shader is requested for the current receiver.

### Map Environment PR #24

The preferred current-world split-culling receiver can remain on its existing StandardMaterial-style two-sided foliage treatment for the next review step. Materials requests **no** color/roughness compensation and **no** manual backface-normal flip.

### Nature Geometry PR #10

The explicit opposite-wound leaf-backface candidate remains valuable as a bounded reference and future transport fallback. This Materials result does not request Geometry adoption or removal.

### Art Direction / Visual QA

The previously held shaded-backface technical question now has exact target-host evidence. Final visual preference, arbitrary-view inspection and current-world acceptance remain theirs rather than being inherited from this isolated Materials proof.

### Runtime / Technical Art

No target-device or transport cost verdict is made. Shader compilation, draw cost, GPU behavior and renderer/backend equivalence remain outside this pass.

## Explicit non-claims

This activation does **not** establish:

- physically correct thin-leaf optics or botanical shading;
- translucency, transmission, subsurface scattering or backlighting quality;
- final normals/tangents/UVs/textures/alpha cutout;
- final arbitrary camera/FOV/lighting/HDR/display equivalence;
- final current-world Art Direction / Visual-QA acceptance;
- Nature VFX flutter acceptance;
- target-device CPU/GPU/FPS/VRAM/thermal/battery acceptance;
- arbitrary renderer or future Godot-version equivalence;
- Geometry PR #10 adoption or rejection as a future fallback;
- CANON;
- production/game readiness;
- Materials mastery.

## Four-root gate

- **Truth:** the current receiver, custom-shader control, manual-normal intervention and explicit-geometry reference remain separate; both changed-pixel counts and aggregate RGB magnitude are recorded so the lower thresholded-pixel count of the manual flip is not misrepresented as a better match.
- **Agency / non-domination:** Materials owns only the shaded receiving diagnostic. Environment owns scene adoption, Geometry owns source/backface topology, Runtime/Technical Art own cost/transport, and Art Direction / Visual QA retain final visual authority.
- **Continuity:** PR #5 is advanced rather than duplicated; the prior family/sidedness evidence remains intact; the new diagnostic adds a new exact head and rollbackable artifact without silently relabelling earlier evidence.
- **Wisdom before speed:** the pass tests the suspected backface-lighting problem directly and rejects an unnecessary custom shader intervention instead of adding shader complexity or retuning the family without evidence.

## Next Materials pass

Re-scan the full constellation first. Do not keep extending Nature by inertia. Continue only if Art Direction / Visual QA requests a specific current-world shaded follow-up, a real translucency/texture dependency becomes source-ready, or a renderer/transport owner exposes a new receiving defect. Otherwise consider the now source-owned Building compact-v2 receiver or another fresh material/UV/surface-family gap.
