# 12 — Runtime / Optimization Specialist Status

Date: 2026-09-17
State: **ACTIVE / THIRTY-SEVENTH BOUNDED RUNTIME PASS / PASS_COMPACT_EAST_ATTRIBUTE_COMPRESSION_REDUCES_RENDERER_BUFFER / -13,680 B ALL 34 RETAINED OBSERVATIONS / CPU COST MEASURED / 416 SILHOUETTE-COVERAGE PIXELS CHANGED ACROSS 17,625,600 / HOLD_ART_QA_TARGET_DEVICE_CURRENT_WORLD_ADOPTION_CANON_PRODUCTION**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/12_runtime_optimization.md`, prior Runtime status, and fresh Art Direction, Materials, VFX / Atmosphere, Technical Art / UC, Visual Observer / QA and constellation PR/workflow state.

`axm-create-me` remains **coordination only**. Runtime implementation and proof code remain in the owning specialist repository. This status file is the only `axm-create-me` product-tree change for this activation.

The four AXM roots remain the internal merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh constellation / duplication scan

Runtime did not reopen already-owned Character, Object, Animal or Building lanes. It also avoided stacking on currently failing downstream workflows:

- Character Animation PR #22 target-host observer is not green, so Runtime did not stack another Character transport/import experiment there.
- Map VFX compact-east current-world receiver PR #43 is not green, so Runtime did not pretend current-world receiving was available for this pass.
- VFX west-sapling wall-clock work remains VFX-owned rather than being duplicated as a Runtime timing lane.

Nature Runtime PR #12 already owned the exact compact-east response lifecycle evidence from pass 36. The next reusable question therefore stayed inside that existing lane:

> **After removing presentation-resource reconstruction churn, can the exact reused deforming surface reduce real renderer buffer allocation without changing topology, draw/object/primitive shape, or silently hiding CPU and visual costs?**

## Owning Runtime lane

Repository: `mike-axiom-mir/axm-nature-design`

Draft Runtime PR: **#12 — `Runtime: reuse compact-east response mesh resources`**

Branch: `studio/runtime-compact-east-resource-reuse-001`

Exact tested Runtime head:

`aaf9be22d5c4bc534ce432de59aa4c995fcdcae8`

Exact parent VFX head:

`cef2ad78d8e36a55ada5dad07329f1a7125d48de`

Exact migrated neutral mesh digest:

`420135f6effbadb1b344675948b9ddc471dcb83177702888f0b32327c5121c18`

PR #12 remains **open, draft, unmerged and mergeable**.

Scoped result:

**`PASS_COMPACT_EAST_ATTRIBUTE_COMPRESSION_REDUCES_RENDERER_BUFFER__HOLD_VISUAL_CPU_AND_TARGET_DEVICE`**

## Measure-before / rejected first probe

Pass 36 already established the strong baseline rule: keep one `MeshInstance3D`, one `ArrayMesh` and one material rather than reconstructing all three for every response update.

Runtime first tested a post-normal indexing direction because earlier Building work showed that indexing can remove duplicate triangle-corner storage. That probe was **retired rather than promoted**: the compact-east flat response does not produce a consistently smaller bounded payload across all phases once index-buffer cost is included. Dense response phases can grow rather than shrink. No indexing PASS is claimed, and the active candidate leaves the exact **1710 triangle-corner vertices unindexed**.

This negative selection is retained as part of the reasoning boundary: an optimization that helped a Building receiver was not assumed to help a deforming Nature receiver.

## Selected bounded candidate

Both control and candidate consume the exact same 17 VFX phases:

- **390 source vertices / 570 triangles per phase**;
- exact same source-to-Godot transform;
- exact same triangle-corner stream: **1710 stored vertices, 0 indices**;
- exact same `SurfaceTool.generate_normals()` path;
- one stable `MeshInstance3D`, one stable `ArrayMesh`, one stable material;
- same neutral unshaded proof material, culling-disabled isolation boundary and two fixed cameras;
- pinned Godot `4.7.2` GL Compatibility.

Only receiving attribute representation changes:

- control: normal surface commit;
- candidate: `SurfaceTool.commit(..., Mesh.ARRAY_FLAG_COMPRESS_ATTRIBUTES)`.

## Before / after renderer memory evidence

Across **all 34 retained observations**:

- control `RenderingServer` buffer memory: **6,445,392 B**;
- compressed candidate: **6,431,712 B**;
- exact delta: **-13,680 B every time**;
- unique measured delta set: **`[-13680]`**.

The measured saving equals **8 B per triangle-corner vertex** for this exact 1710-vertex surface. Relative to the entire proof-host buffer counter it is approximately **0.2122%**; that fixed-context percentage is not claimed as a universal mesh-memory ratio.

Across those same 34 observations:

- draw calls: exact match;
- objects in frame: exact match;
- RenderingServer primitives: exact match;
- texture memory: exact match.

## CPU tradeoff — explicitly retained

The memory saving is **not free** in this proof-host implementation.

Retained 17-phase sequence:

- median submission: **843 -> 993 µs (+17.79%)**;
- total submission: **14,979 -> 18,525 µs (+23.67%)**.

408-update stress sequence:

- median: **725 -> 837 µs (+15.45%)**;
- p95: **776 -> 1,176 µs (+51.55%)**;
- total: **298,708 -> 359,785 µs (+20.45%)**.

Runtime therefore records this as a **memory-vs-CPU tradeoff candidate**, not an automatic overall performance win. These are GitHub/llvmpipe proof-host observations, not target-device CPU/GPU/FPS budgets.

## Visual tradeoff for Art Direction / Visual QA

The compression representation is also **not byte-neutral visually** in the fixed unshaded proof:

- matched pairs: **34**;
- byte-identical pairs: **0 / 34**;
- changed pixels: **416 / 17,625,600 = 0.0023602%**;
- worst one frame: **18 / 518,400 = 0.0034722%**;
- maximum channel delta: **186 LSB**.

Independent inspection of the exact retained PNGs found only two changed color transitions across all 416 pixels:

- **212** tree-color pixels `(138, 194, 110, 255)` become background `(6, 8, 9, 255)`;
- **204** background pixels become that exact tree color.

So the observed unshaded difference is a tiny set of **silhouette-coverage swaps**, not a broad interior recolor. The large per-channel delta is therefore meaningful even though the pixel count is small. Art Direction / Visual QA retain authority over whether this edge movement is acceptable once final shaded materials and real viewing conditions are involved.

Runtime does **not** convert `0.00236%` changed pixels into visual approval.

## Pass 36 lifecycle proof still green on current head

The original stable-resource rule remains green in the same exact workflow run:

- resource constructions: **425 / 425 / 425 -> 1 / 1 / 1 (-99.7647%)**;
- retained median: **2359 -> 843 µs**;
- stress median: **987 -> 725 µs**;
- stress total: **433,935 -> 298,708 µs**;
- **34 / 34** lifecycle-control/reuse frames byte-identical;
- pre-to-post stress buffer drift: **0 B** in both modes;
- pre-to-post stress texture drift: **0 B** in both modes.

Stable resource reuse remains the stronger default evidence-backed rule. Attribute compression is the narrower optional tradeoff.

## Fail-closed evidence

Compression negative control deliberately:

1. removes the candidate compression-format identity; and
2. replaces its measured buffer memory with the control value.

The verifier rejects it because both:

- `candidate_compressed_surface_format`; and
- `renderer_buffer_memory_lower_all_34_retained_frames`

become false.

The original lifecycle mutation also still fails closed when candidate construction counts are replaced with rebuild counts.

## Exact CI / retained evidence

Dedicated workflow:

**`35230965896 — Runtime compact-east resource reuse evidence — SUCCESS`**

Exact artifact:

- ID: **`10500404478`**;
- name: `compact-east-runtime-resource-reuse-aaf9be22d5c4bc534ce432de59aa4c995fcdcae8`;
- uploaded size: **981,307 B**;
- GitHub SHA-256: `9cb9962ac4466067d60905c0ef31e556891691c230e01435174c8f15eb3ebdbd`;
- independently downloaded and rehashed SHA-256: **same**.

The retained artifact contains control/candidate receipts, fail-closed receipts, exact-head binding, logs, all lifecycle render pairs, and all compressed-attribute render pairs.

## Handoff / adoption boundary

- **Nature VFX / Art / QA:** receive the exact memory, CPU and silhouette-edge tradeoff; no automatic adoption request.
- **Environment / Map:** no current-world receiver was changed; current compact-east Map receiver work is not green and was not treated as evidence here.
- **Technical Art / UC:** no generic extraction or transport change is requested.
- **Runtime:** recommends stable resource reuse as the current strong default; compression remains optional until target-device and visual review make the trade worthwhile.

## Reusable learning

The stronger rule from passes 36–37 is now:

> **First remove avoidable resource reconstruction when dynamic topology/presentation identity is stable. Only then narrow buffer representation, and accept compression only when real renderer-memory savings are worth the measured CPU and raster tradeoffs on the intended receiver/device. Do not transfer an indexing/compression trick across asset classes by assumption.**

This is intentionally narrower than a universal vegetation optimizer.

## Historical continuity

Pass 36 remains preserved as the compact-east stable resource-lifecycle transfer proof. Pass 35 remains the Character bilateral release-scale accessor deduplication. Pass 34 remains localized Character posed-normal caching. Passes 32/33 remain Object roughness L8 measurement and selected-field provenance rebind. Earlier Animal, Building, Weather, Nature and other Runtime passes remain separate historical truth.

## Explicit non-claims

This activation does **not** prove:

- target-device CPU/GPU/FPS/VRAM/thermal/battery improvement;
- that attribute compression is an overall performance win;
- portable timing budgets from GitHub's proof host;
- continuous wall-clock response playback quality;
- current-world / Map receiving integration;
- final shaded normal equivalence, culling/leaf-sidedness or material quality;
- physical wind, biomechanics, gameplay, collision or navigation behavior;
- a universal vegetation optimizer;
- automatic VFX / Environment / producer adoption;
- Art Direction or independent Visual QA acceptance;
- UC extraction;
- CANON;
- production/game readiness;
- Runtime / Optimization mastery.

## Four-root check

**Truth:** exact ancestry, source identity, 17 response phases, stable resource lifecycle, real renderer buffer delta, CPU cost, raster changes, negative controls, workflow and artifact hash are recorded separately from target-device/final-art claims.

**Agency / non-domination:** Runtime exposes the tradeoff but does not force adoption. VFX keeps response ownership, Environment keeps composition, Technical Art keeps transport/integration ownership, and Art / QA keep appearance acceptance.

**Continuity:** the pass extends existing Nature Runtime PR #12 rather than creating a duplicate lane, keeps the pass-36 lifecycle proof green, records the rejected indexing direction instead of silently erasing it, and leaves other specialist lanes untouched.

**Wisdom before speed:** Runtime rejected a non-consistent indexing transfer, measured a real buffer-width alternative, and retained CPU plus visual costs instead of optimizing one metric and calling the whole result better.

The four AXM roots — **Truth, Agency / non-domination, Continuity, Wisdom before speed** — remain the merge gate.
