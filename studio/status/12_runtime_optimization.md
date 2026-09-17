# 12 — Runtime / Optimization Specialist Status

Date: 2026-09-17
State: **ACTIVE / THIRTY-EIGHTH BOUNDED RUNTIME PASS / PASS_COMPACT_EAST_SINGLE_BLEND_SHAPE_CUTS_CPU_SUBMISSION / -93.94% PROOF-HOST STRESS MEDIAN / +177,840 B BUFFER TRADEOFF / UNSHADED BYTE-IDENTICAL / SHADED ART HOLD / HOLD_TARGET_DEVICE_CURRENT_WORLD_ADOPTION_CANON_PRODUCTION**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/12_runtime_optimization.md`, prior Runtime status, and fresh Art Direction, Materials, VFX / Atmosphere, Environment / Map, Technical Art and constellation PR/workflow state.

`axm-create-me` remains **coordination only**. Runtime implementation and proof code remain in the owning specialist repository. This status file is the only `axm-create-me` change for this activation.

The four AXM roots remain the internal merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh constellation / duplication scan

Runtime did not reopen Character, Object, Animal or Building lanes already owned by active specialist work.

The downstream Map compact-east current-world receiving lane, PR #43 at `a44288a874323b1dc0fa9c62f2ca6057ae2adee3`, currently has a red dedicated workflow: Godot observation succeeds but target-host verification fails. Runtime therefore did **not** stack a new current-world optimization or adoption claim on that red lane.

Nature Runtime PR #12 already owns the exact compact-east response lifecycle evidence from passes 36–37. The next bounded reusable question stayed inside that existing lane:

> **The source already has stable topology and 17 deterministic response phases. Are we still spending CPU regenerating and resubmitting whole mesh surfaces when the exact motion may be representable by one static response shape plus a scalar weight?**

## Owning Runtime lane

Repository: `mike-axiom-mir/axm-nature-design`

Draft Runtime PR: **#12 — `Runtime: reuse compact-east resources and weight-drive one response shape`**

Branch: `studio/runtime-compact-east-resource-reuse-001`

Exact tested Runtime head:

`6ea4148da61d3806123712e2eaf19613df9ae1eb`

Exact parent VFX head:

`cef2ad78d8e36a55ada5dad07329f1a7125d48de`

Exact migrated neutral mesh digest:

`420135f6effbadb1b344675948b9ddc471dcb83177702888f0b32327c5121c18`

PR #12 remains **open, draft, unmerged and mergeable**.

Scoped result:

**`PASS_COMPACT_EAST_SINGLE_BLEND_SHAPE_CUTS_CPU_SUBMISSION__HOLD_MEMORY_SHADED_ART_TARGET_DEVICE`**

## Measure-before source-shape proof

Before replacing any runtime path, Runtime tested whether the 17 exact VFX phase meshes are actually one-dimensional motion rather than merely similar frames.

Each phase is `390 source vertices / 570 triangles`. Taking phase 00 as neutral and phase 08 as peak, every phase satisfies:

`neutral + sin(pi * phase / 16) * (peak - neutral)`

with maximum measured source-space vertex residual:

**`1.2412670766236366e-16 m`**.

That is the reason this optimization is eligible for this exact response. Runtime does **not** generalize this to arbitrary vegetation, arbitrary animation clips or arbitrary deforming meshes.

## Selected bounded candidate

Both modes use:

- exact same 17 VFX phases;
- exact same topology: `390 source vertices / 570 triangles`;
- exact same 1,710 unindexed triangle-corner stream;
- one stable `MeshInstance3D`;
- one stable `ArrayMesh`;
- one stable material;
- pinned Godot `4.7.2` GL Compatibility;
- two fixed cameras;
- separate unshaded and simple normal-lit visual observations.

Control:

- runs `SurfaceTool.generate_normals()` for every response phase;
- clears/recommits the stable `ArrayMesh` surface every update.

Candidate:

- stores the exact neutral surface once;
- stores one **NORMALIZED** phase-08 peak blend shape once;
- after construction, each response update changes only one blend-shape weight using the exact half-sine phase scalar.

The candidate keeps absolute peak vertex/normal attributes in the normalized blend shape; it does not encode non-unit normal deltas.

## Before / after proof-host CPU evidence

### 408-update stress sequence

- control median submission: **1,237 µs**;
- candidate median: **75 µs**;
- reduction: **93.9369%**.

- control p95: **1,349 µs**;
- candidate p95: **105 µs**;
- reduction: **92.2165%**.

- control total: **510,866 µs**;
- candidate total: **32,515 µs**;
- reduction: **93.6353%**.

### Retained 17-phase sequence

- median: **1,428 -> 127 µs (-91.1064%)**;
- total: **25,122 -> 5,397 µs (-78.5168%)**.

The retained p95 worsens **2,046 -> 3,310 µs** because the first retained candidate update includes the one-time blend-shape construction. Runtime retains that startup cost instead of averaging it away.

These are GitHub/llvmpipe proof-host submission timings. They are **not** target-device FPS, GPU time or universal budgets.

## Renderer-memory tradeoff — explicitly retained

The CPU reduction costs persistent receiver buffer memory.

Across every retained camera/shading observation:

- control `RenderingServer` buffer memory: **6,445,392 B**;
- candidate: **6,623,232 B**;
- exact delta: **+177,840 B**;
- unique measured delta set: **`[177840]`**.

Draw calls, objects in frame, primitive counts and texture memory remain matched. Both modes show **0 B** pre-to-post stress buffer-memory drift.

This pass is therefore a measured **CPU-for-buffer-memory tradeoff**, not an unconditional overall performance win.

## Geometry and normal evidence

Godot's baked current blend-shape mix was compared against the exact per-phase control surface after generated normals.

Maximums across all 17 phases:

- baked vertex component delta: **`5.96046447753906e-08 m`**;
- baked vertex distance: **`6.6640019724673e-08 m`**;
- normal component delta: **`0.0013725757598877`**;
- normalized normal-angle delta: **`0.0884693269410581°`**;
- raw normal length delta from unit: **`1.19209289550781e-07`**.

The geometry residual is far below the bounded `2e-6 m` verifier ceiling. The normal result is recorded as a visual tradeoff rather than silently relabeled as exact shading equivalence.

## Visual tradeoff for Art Direction / Visual QA

### Unshaded geometry / silhouette

Across 17 phases × two cameras:

- matched pairs: **34**;
- byte-identical pairs: **34 / 34**;
- changed pixels: **0 / 17,625,600**;
- maximum channel delta: **0**.

Within this fixed proof, the weight-driven representation produces no observed geometry/silhouette raster difference.

### Simple normal-lit proof

Across the same 34 pairs:

- byte-identical pairs: **0 / 34**;
- changed pixels: **13,965 / 17,625,600 = 0.0792313%**;
- worst one frame: **0.172454%** changed pixels;
- 13,957 changed pixels have maximum channel delta **1 LSB**;
- 6 pixels reach **2 LSB**;
- exactly 2 isolated pixels reach **171 LSB**.

The two 171-LSB samples are the same crown-view pixel in phases 07 and 09. That pixel remains tree-covered in both unshaded images; the normal interpolation changes its simple-light response from dark to bright. This is therefore a **shading-response outlier**, not a silhouette swap.

Art Direction / Visual QA retain final authority. Runtime does not turn `0.079%` changed pixels into approval, and final materials, normal maps and leaf-sidedness were not tested here.

## Failed predecessor preserved, not hidden

The first pass-38 draft used a **RELATIVE** blend shape with vertex and normal deltas. Godot accepts the representation, but its normal arrays are normal-vector attributes; feeding relative non-unit normal deltas produced a bad result.

The verifier rejected that draft:

- max normal-angle deviation: **73.406°**;
- simple normal-lit changed pixels: **803,331 / 17,625,600 = 4.55775%**;
- CPU reduction existed, but visual-normal correctness did not.

Runtime did **not** weaken the verifier. The representation was repaired to one **NORMALIZED absolute peak shape**, after which the exact final workflow passed with max normal-angle deviation **0.08847°**. The failed workflow/artifact remains in GitHub history as evidence of the rejected path.

## Fail-closed evidence

Final negative control deliberately:

1. replaces phase 04's candidate blend weight with zero; and
2. replaces candidate stress timing with control timing.

The verifier rejects the mutation because:

- `candidate_weights_match_exact_17_phase_half_sine` becomes false;
- `proof_host_stress_median_submission_lower` becomes false;
- `proof_host_stress_total_submission_lower` becomes false.

Image similarity by itself cannot manufacture the PASS.

## Exact CI / retained evidence

Dedicated workflow:

**`35237828030 — Runtime compact-east single blend-shape evidence — SUCCESS`**

Exact artifact:

- ID: **`10504316069`**;
- name: `compact-east-runtime-single-blend-shape-6ea4148da61d3806123712e2eaf19613df9ae1eb`;
- uploaded size: **3,809,893 B**;
- GitHub SHA-256: `f219d5aa78bce87da1d19cf84a711322f7e09bff071142ca11fe9a15a0b75c00`;
- independently downloaded and rehashed SHA-256: **same**.

The artifact retains exact source phases, control/candidate receipts, generated visual pairs, comparison receipt, negative-control receipt, logs and exact-head binding.

## Passes 36–37 continuity

Pass 36 remains the strong baseline: stable presentation-resource identity reduced constructions from **425 / 425 / 425 -> 1 / 1 / 1 (-99.7647%)**, with all 34 lifecycle-only frame pairs byte-identical.

Pass 37 remains an optional memory tradeoff: `Mesh.ARRAY_FLAG_COMPRESS_ATTRIBUTES` saved **13,680 B** renderer buffer memory but increased proof-host stress median submission by **15.45%** and caused a tiny measured silhouette raster change. It is not auto-adopted.

The pass-37 post-normal indexing probe remains retired because it did not consistently reduce bounded storage for this deforming flat response.

## Handoff / adoption boundary

- **Nature VFX / Art / QA:** receive exact CPU, buffer-memory and normal-lit tradeoffs; no automatic adoption request.
- **Environment / Map:** no current-world receiver is changed by Runtime; current compact-east current-world verification is red and is not treated as proof.
- **Technical Art / UC:** no generic blend-shape extraction or transport change is requested.
- **Runtime:** recommends this single-shape receiver for producer/Art consideration because the CPU signal is strong, but its **+177,840 B** buffer cost and shaded difference require receiver/device-specific judgment.

## Reusable learning

The bounded rule after passes 36–38 is now:

> **For deterministic deforming content, first stabilize resource identity. Then test whether the exact motion lives on a smaller parameterized shape basis before repeatedly regenerating full surfaces. Only replace surface submission when the source basis is proved, receiver memory is measured, and geometry/shading differences remain explicit.**

This is intentionally narrower than a universal vegetation or blend-shape optimizer.

## Historical continuity

Pass 37 remains compact-east attribute compression. Pass 36 remains compact-east stable resource reuse. Pass 35 remains Character bilateral release-scale accessor deduplication. Pass 34 remains localized Character posed-normal caching. Passes 32/33 remain Object roughness L8 measurement and selected-field provenance rebind. Earlier Animal, Building, Weather, Nature and other Runtime passes remain separate historical truth.

## Explicit non-claims

This activation does **not** prove:

- target-device CPU/GPU/FPS/VRAM/thermal/battery improvement;
- that the +177,840 B buffer cost is acceptable on intended hardware;
- portable timing budgets from GitHub's proof host;
- continuous wall-clock response playback quality;
- current-world / Map receiving integration;
- final shaded normal/material/leaf-sidedness quality;
- physical wind, biomechanics, gameplay, collision or navigation behavior;
- a universal vegetation or blend-shape optimizer;
- automatic VFX / Environment / producer adoption;
- Art Direction or independent Visual QA acceptance;
- UC extraction;
- CANON;
- production/game readiness;
- Runtime / Optimization mastery.

## Four-root check

**Truth:** exact source basis, before/after CPU timings, persistent buffer cost, geometry residuals, normal deviations, unshaded and normal-lit raster evidence, failed predecessor, negative control, workflow and artifact hash are separated from target-device/final-art claims.

**Agency / non-domination:** Runtime exposes a strong CPU candidate but does not force adoption. VFX keeps response ownership, Environment keeps composition, Technical Art keeps transport/integration ownership, and Art / QA keep appearance acceptance.

**Continuity:** pass 38 extends existing Nature Runtime PR #12 rather than creating a duplicate lane, preserves passes 36–37, preserves the failed relative-normal draft, and avoids stacking on the red Map current-world receiver.

**Wisdom before speed:** Runtime measured the source basis before changing runtime representation, rejected the visually wrong relative-normal path, repaired the representation instead of lowering the gate, and records the memory and shaded-image costs beside the CPU win.

The four AXM roots — **Truth, Agency / non-domination, Continuity, Wisdom before speed** — remain the merge gate.
