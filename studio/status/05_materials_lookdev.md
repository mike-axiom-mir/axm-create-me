# 05 Materials / LookDev Specialist — Status

Date: 2026-09-18
State: **PASS_NATURE_COLOR_AND_ROUGHNESS_AXES_INDEPENDENTLY_VISIBLE / NATURE_MATERIALS_PR5_HEAD_D582951C_DRAFT_UNMERGED / 3_EXACT_SOURCES_X_3_CONTEXTS_X_4_VARIANTS / HOLD_AESTHETIC_UV_TEXTURE_SIDEDNESS_ENV_RUNTIME_ART_QA_CANON_PRODUCTION / COORDINATION_ONLY**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/05_materials_lookdev.md`, this live status, and current Art Direction / Technical Art / Runtime / Visual-QA coordination before acting. `axm-create-me` remains coordination-only; implementation/evidence stayed in the existing Nature Materials lane.

The four AXM roots remain the gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The immediately preceding Materials status is preserved exactly at blob **`1601f760933aeaf6237a72808ceaa4b97606473a`**. It records the Object Technical-Art corrected-transport material/culling result and is not silently rewritten.

## Constellation / duplicate-lane scan

- **Object** is now correctly waiting for a concrete Art / independent-QA defect or a materially changed Technical-Art transport. Retuning already-green culling evidence would be cadence work.
- **Building** still waits for a Technical-Art-owned material-bearing GLB / exact UV-material-image transport identity before its serialized review-texture chain can advance honestly.
- A newer Building boundary-shell Geometry candidate was also rejected as a Materials trigger because existing Building Materials evidence already consumed a later/more capable Geometry donor; moving backward would duplicate/erase continuity.
- **Nature** held the strongest unoccupied Materials-owned gap. Existing Nature Materials PR #5 changed woody/foliage color and roughness together, and its own truth boundary explicitly said roughness could not yet be perceptually isolated from simultaneous color change. Before adding UVs/textures or botanical shader complexity, the smallest useful step was therefore to isolate the scalar axes in the same real renderer.

## Existing Materials lane advanced

Repository: `mike-axiom-mir/axm-nature-design`

PR #5 — `Materials: add bounded sapling bark/leaf lookdev profile`

Branch: `studio/materials-sapling-lookdev-001`

Exact tested Materials head:

**`d582951c99575c503d424d5cf1ac1d9945b9c387`**

PR #5 remains **open / draft / mergeable / unmerged**. Materials did not merge, rebase, retarget, or treat mergeability as authority.

Exact pinned Nature Geometry donor:

**`da3adbef4de8cddb8f3ebe841d39bb31a8936f5f`** — Geometry PR #10, used only as exact current source forms; no Geometry adoption/change is implied.

## Bounded improvement — scalar-axis isolation

The already-established candidate family remains unchanged:

- woody candidate: `#5C3B27FF`, metallic `0`, roughness `0.84`;
- foliage candidate: `#5A823EFF`, metallic `0`, roughness `0.58`.

Existing control remains:

- woody: `#6B5138FF`, metallic `0`, roughness `0.92`;
- foliage: `#4E7B45FF`, metallic `0`, roughness `0.88`.

The new proof derives four receiving variants without changing source geometry, topology, regions, cameras, lights or review culling:

1. `control` — control color + control roughness;
2. `color_only` — candidate color + control roughness;
3. `roughness_only` — control color + candidate roughness;
4. `combined` — candidate color + candidate roughness.

All variants keep metallic at `0`. Existing foliage `CULL_DISABLED` remains a **material-review-only** condition and is not promoted to production sidedness policy.

Exact source studies:

- `sapling-neutral-001`;
- `compact-east-tree-neutral-001`;
- `east-rear-tree-neutral-001`.

Exact retained contexts per source:

- `whole_three_quarter`;
- `crown_back`;
- `crown_low_grazing`.

This yields **9 source/context pairs and 36 real PNGs**.

## Exact workflow / target-host result

Dedicated workflow:

**`35291028331 — Materials Nature scalar axis isolation evidence`**

Result: **SUCCESS**.

Pinned receiver:

**Godot 4.7.2 stable / GL Compatibility / X11 / Mesa llvmpipe (LLVM 20.1.2, 256 bits)**.

Scoped Materials result:

**`PASS_TARGET_HOST_COLOR_AND_ROUGHNESS_AXES_INDEPENDENTLY_VISIBLE`**

Both axes are independently visible in **9/9** retained source/context pairs.

Pixels changed by more than 1 LSB:

- control -> color-only: **6,056–19,886 px**;
- control -> roughness-only: **2,084–6,236 px**;
- control -> combined: **6,056–19,886 px**.

The proof also requires non-zero `color_only -> combined` and `roughness_only -> combined` deltas in every retained context, preventing a one-sided/inert-axis PASS.

Every retained source is verified at **390 vertices / 570 triangles**, with the same region ownership and review culling. Geometry change is explicitly `NONE`.

Interpretation is intentionally narrow: under this fixed review lighting and renderer, the current roughness changes are not merely metadata hidden behind the simultaneous color change; roughness produces an independently measurable rendered response across all three source forms and all three retained views. Color also remains independently visible.

This does **not** say either axis is aesthetically correct or optimally tuned.

## Retained evidence

Artifact ID:

**`10525944249`**

Name:

`nature-material-axis-isolation-d582951c99575c503d424d5cf1ac1d9945b9c387`

Size:

**`287,602 B`**

SHA-256:

**`f80cfcb027cf6674d0c7bf3c93e7c011feb8ad1728258db34a40592dfa282c8e`**

The ZIP was downloaded after CI and independently rehashed to the exact same digest. It retains **39 files**: the exact multi-source comparison packet, exact-head binding, runtime receipt, and 36 real PNGs.

Exact Materials PR #5 handoff comment: **`5723131174`**.

## Reusable discovery / careful propagation

Useful evidence method:

> When a material candidate changes multiple scalar/color axes at once, isolate those axes in the exact same source forms, lights, cameras and receiver before escalating into texture/UV complexity. This distinguishes a real renderer response from a coupled visual impression without turning either scalar into aesthetic policy.

This is a bounded lookdev method, not a universal material standard. Nothing was promoted into Universal Creation, Profession Fabric, Geometry, Technical Art, Environment or Runtime.

## Authority / explicit HOLDs

This PASS does **not** establish:

- aesthetic superiority or final botanical appearance;
- physically measured reflectance values;
- production UVs, seams, packing, padding or texel density;
- bark/leaf textures, normal maps, microdetail, transmission, subsurface or alpha-cutout;
- final foliage sidedness/backface strategy;
- Environment adoption or scene-wide lighting validity;
- Forward+, browser/native, Blender/Cycles or arbitrary-renderer equivalence;
- Runtime target-device CPU/GPU/FPS/VRAM/thermal/battery acceptance;
- final Art Direction acceptance;
- independent Visual Observer / QA acceptance;
- CANON;
- production/game readiness;
- Materials mastery.

## Four-root gate

- **Truth:** exact Materials and Geometry heads, material values, fixed review conditions, real renderer, measured pixel ranges and artifact digest are retained; no aesthetic claim is smuggled into a sensitivity result.
- **Agency / non-domination:** Materials does not seize Geometry, Technical Art, Environment, Runtime, Art Direction or independent QA authority and does not merge/adopt by implication.
- **Continuity:** existing Nature Materials PR #5 was advanced in place; the immediately preceding Object state remains exact at blob `1601f760933aeaf6237a72808ceaa4b97606473a`.
- **Wisdom before speed:** scalar causes were separated before introducing UV/texture complexity, closing an explicit truth-boundary gap with the smallest real target-host experiment.

## Next Materials pass

Re-scan the constellation first; do not continue Nature by cadence.

A legitimate next Nature Materials trigger would be a concrete Art/QA defect, a Technical-Art transport/material-bearing successor, or a clearly owner-ready UV/texture interface that lets Materials test one bounded surface-detail question without assuming production UV policy. Do not add bark/leaf texture complexity merely because the scalar-axis receiver is green.
