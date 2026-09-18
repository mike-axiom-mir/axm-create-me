# 12 — Runtime / Optimization Specialist Status

Date: 2026-09-18
State: **PASS_54_NATURE_COMPRESSED_VERTEX_ID_SHADER_DRIVER / 10_EXACT_RUNS_TILE_110_370 / IMPORT_COMPRESSED_3120B_RETAINED / PASS53_MUTABLE_4680B_AVOIDED_SAVE_1560B_33_3333_PERCENT / SEMANTIC_DRIVER_3120_TO_4_B_99_8718_PERCENT_NOT_GPU_TRANSPORT / FIVE_FIXED_VIEW_PAIRS_ZERO_PIXELS_GT1LSB_MAX1LSB / FIRST_SHADER_COMPILE_FAILURE_PRESERVED_REPAIRED / RUN_35323459480_SUCCESS / HOLD_NORMAL_TANGENT_ART_QA_TARGET_DEVICE**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/12_runtime_optimization.md`, current Runtime evidence and fresh Art Direction / Technical Art / Animation / VFX / Visual QA / Capability Cartography state before selecting work.

`axm-create-me` remains **coordination only**. Runtime implementation and evidence for this pass live in `mike-axiom-mir/axm-nature-design`. Universal Creation product code was not modified.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Duplicate-lane / highest-risk scan

Pass 53 already proved the exact Nature `[110,370)` partial vertex-update window in Godot 4.7.2, but measurement exposed an opposing cost: the imported compressed receiver stores all 390 positions in **3,120 B**, while the mutable float32 `ArrayMesh` required for `surface_update_vertex_region()` stores the same positions in **4,680 B**. The pass therefore saved update bytes but paid **+1,560 B / +50%** position storage versus the imported receiver.

That unresolved storage/CPU-update tradeoff was more reusable and higher-risk than reopening Object batching, Object VFX MultiMesh, Building RGB8, Animal key reduction or another already-proven Runtime lane. The existing Nature Runtime PR #20 already owns this exact representation seam, so no duplicate PR/lane was opened.

Fresh Animation/VFX work is on newer owner chains and remains separately owned. This pass does **not** silently inherit those newer timing/wind semantics.

Selected bounded question:

**Can the exact pass-53 Nature receiver retain Godot's compressed imported position storage and move only the already-authorized rigid branch deformation into a bounded vertex-shader driver, avoiding the mutable float32 storage penalty and CPU position-buffer rewrite while keeping fresh fixed-view raster evidence within a tight gate?**

## Selected bounded improvement — pass 54

Repository: `mike-axiom-mir/axm-nature-design`

Existing draft Runtime PR: **#20 — `Runtime: exploit east-rear dynamic vertex window in Godot`**

Branch: `studio/runtime-east-rear-dynamic-prefix-001`

Exact final Runtime head: **`520068e1167f369b24e749831954f9bda1cd7aec`**

At final verification PR #20 is **open / draft / unmerged / mergeable**.

Exact pinned predecessor / donors retained by the workflow:

- pass-52 Runtime owner: `6d89e1fc0f8dc5e2ef6c57fc99c1dc6b1727780f`;
- Technical Art receiver donor: `b96f794325f825188b6fd9a920e3fb575e43e467`;
- Universal Creation donor: `5c5d2cfdc3aa4e9462fd4d5ec5bc7874f12674a4`.

Scoped result:

**`PASS_NATURE_EAST_REAR_RUNTIME_FRAGMENTED_VERTEX_ID_SHADER_DRIVER`**

## Measure-before result — second simplifying assumption falsified

The exact receiver remains:

- vertices: **390**;
- moving vertices: **260**;
- fixed vertices: **130**;
- moving union: exact source indices **`[110,370)`**;
- five authorized rigid branch groups of **52 vertices each**.

Runtime first tested the simplest possible shader lookup: one contiguous `VERTEX_ID` range per branch group. Real owner data falsified that assumption.

The five groups are each split across two contiguous runs, producing **10 exact runs** that tile `[110,370)` with no gaps or overlap:

- south-low: `[110,146)` and `[290,306)`;
- north-low: `[146,182)` and `[306,322)`;
- east-mid: `[182,218)` and `[322,338)`;
- west-high: `[218,254)` and `[338,354)`;
- north-top: `[254,290)` and `[354,370)`.

The failed one-range-per-group hypothesis is retained explicitly in the oracle. Runtime did not reindex the mesh merely to make the shader lookup prettier.

## Representation change and budget

The bounded candidate keeps the exact imported compressed receiver and applies the already-owned five rigid branch transforms in a Godot spatial vertex shader selected by those 10 exact `VERTEX_ID` runs.

Measured receiver state:

- vertex count: **390**;
- surface count: **1**;
- imported vertex-position stride: **8 B**;
- imported positions compressed: **true**;
- candidate position storage: **3,120 B**;
- geometry reindexed: **false**;
- surface count changed: **false**;
- CPU position buffer mutated per pose: **false**.

Compared with pass 53:

- pass-53 mutable float32 position storage: **4,680 B**;
- pass-54 compressed position storage: **3,120 B**;
- storage avoided: **1,560 B / 33.3333333333333%** versus the pass-53 mutable representation.

The per-pose representation also changes from a CPU position packet to one shared driver value:

- pass-53 partial float32 position packet: **3,120 B**;
- pass-54 shader semantic driver value: **4 B**;
- semantic payload difference: **3,116 B / 99.8717948717949%**.

Truth boundary: **4 B is the semantic driver value, not a measured GPU command-transport byte count.** Runtime does not claim the host/API sends exactly four bytes or that the GPU update path is free.

## Structural tradeoff

The memory/CPU-side representation win moves work into the vertex shader.

Measured/bounded shader structure:

- exact `VERTEX_ID` runs: **10**;
- upper bound: up to **10 range tests per vertex** plus rigid rotation math;
- no mesh reindexing to reduce those tests;
- no claim of lower target-device GPU time;
- no claim that shader branching is free.

This is the central Art/Runtime tradeoff for review: compressed storage and no CPU position rewrite are preserved, but additional vertex-stage control flow is introduced.

## First real-Godot shader attempt failed and is preserved

The first generated Godot shader used an early `return` inside `void vertex()`. Godot 4.7.2 rejected that shader syntax. The failed attempt produced fallback/mismatched raster evidence and remains preserved in workflow/Git history; it was not relabelled as a pass.

Smallest repair:

- changed only generated control flow from an early-return form to `if (apply_driver >= 0.5) { ... }` around the deformation block;
- did **not** change owner geometry;
- did **not** change the 10-run lookup;
- did **not** change pivots, axes, sign polarity, driver witnesses or visual thresholds.

This repair produced exact final Runtime head `520068e1167f369b24e749831954f9bda1cd7aec`.

## Real Godot target-host evidence

Workflow:

**`35323459480 — Runtime east rear compressed shader driver` — SUCCESS**

Target host:

- Godot **4.7.2 stable official**;
- GL Compatibility;
- llvmpipe proof host;
- five retained driver witnesses: `-5 / -2.5 / 0 / +2.5 / +5°`.

Receipt observations:

- CPU analytic control vs mutable control readback maximum component delta: **`0.0 m`**;
- CPU analytic vs exact owner maximum component delta: **`0.0000624656677246094 m`**, retained as imported-compression observation;
- candidate GPU vertex positions were **not** directly read back;
- shader representation evidence therefore relies on exact receiver/oracle binding plus fresh rendered A/B, not a fake GPU-position-readback claim.

## Fresh visual tradeoff for Art Direction / Visual QA

Five fixed-view CPU-control vs compressed shader-driver pairs were rendered and compared.

Across **3,150,000 pixels** total:

- pairs: **5 / 5**;
- changed pixels: **228** total;
- pixels >1 LSB: **0**;
- maximum channel delta: **1 LSB**;
- fraction of pixels >1 LSB: **0.0**;
- neutral pair pixels >1 LSB: **0**.

Per pair changed pixels at exactly 1 LSB maximum:

- `-5°`: 46;
- `-2.5°`: 46;
- `0°`: 44;
- `+2.5°`: 49;
- `+5°`: 43.

The observer is discriminating: shader candidate neutral vs `+5°` changes **4,438 pixels >1 LSB**.

Recorded visual tradeoff:

- no >1-LSB difference was observed in the five retained control/candidate pairs;
- tiny 1-LSB raster variation exists, so this is **not** called byte-identical;
- proof material only;
- deformed normal/tangent correctness remains unproven;
- final Nature material/foliage/sidedness acceptance remains unproven;
- Art Direction / independent Visual QA remain **HOLD**;
- target-device acceptance remains **HOLD**.

Runtime does not convert a bounded raster-equivalence PASS into visual authority.

## Fail-closed / continuity evidence

The shader oracle rejects a deliberately shifted first run start (`110 -> 111`) rather than silently accepting a broken ownership map.

The run map must tile the exact `[110,370)` moving domain and is capped at **64** authorized ranges; current exact count is **10**.

The workflow pins the exact Runtime predecessor, Technical Art receiver donor and Universal Creation donor, and verifies the exact final candidate head before generating evidence.

The earlier pass-53 mutable-buffer path remains intact and recoverable. Pass 54 does not rewrite pass 53; it removes the measured mutable-storage/CPU-update tradeoff through a distinct representation while preserving the old evidence as control/history.

## Retained exact pass-54 evidence

Artifact:

- ID **`10538630039`**;
- name `nature-east-rear-runtime-shader-driver-520068e1167f369b24e749831954f9bda1cd7aec`;
- size **`261,166 B`**;
- SHA-256 **`1a19c89fa6ebd5ca0c553fcd02c4bcd08ce1c88c67a47f74d3e2e6a7fce3332c`**;
- independently downloaded and rehashed to the exact same digest.

Retained evidence includes the receiver build/oracle, fragmented-run shader oracle, generated shader, Godot receipt/log, five control renders, five shader-driver renders, visual comparison, exact donor/head identities, implementation and workflow.

## Authority / handoff

- Organic / Geometry / Rigging source ownership remains unchanged.
- VFX retains visual-response semantics.
- Animation retains timing/motion authority.
- Technical Art retains receiver/import/transport authority.
- Runtime owns this bounded compressed-receiver / shader-driver representation evidence.
- Art Direction / Visual QA retain visual acceptance authority.
- target-device CPU/GPU/FPS/VRAM/heap/thermal/battery acceptance remains open.
- Universal Creation remains unchanged and generic.
- `axm-create-me` remains coordination/status only.

PR #20 requests no automatic merge or CANON promotion.

## Continuity from pass 53 and earlier

Pass 53 remains exact historical evidence for the real Godot mutable partial-update path:

- imported compressed storage: **3,120 B**;
- mutable float32 storage: **4,680 B**;
- mutable storage cost: **+1,560 B / +50%**;
- partial update packet: **3,120 B** vs full **4,680 B**;
- five real-Godot readback witnesses at **0.0 m** control/candidate delta;
- five shaded full-vs-partial pairs byte-identical;
- exact pass-53 head: `422fbd87efc8ab3f94b69ad3d00b511e2395c4b6`;
- workflow `35318912330` SUCCESS;
- artifact `10536666073`, SHA-256 `093fbb836308f830c2ead5e0d46a9058fa86e12d77178da31e9f10e15f8ff57c`.

Pass 52 remains exact evidence for discovering the existing `[110,370)` moving window. Object static batching, Object VFX MultiMesh, Building RGB8, Animal animation-key reduction, joint-index width and earlier Runtime lanes remain separately recoverable and were not reopened.

## Highest-value next Runtime gap

Do **not** repeat this exact compressed shader-driver proof or narrate semantic-driver bytes as measured bus/API traffic.

The strongest next Runtime step is now one of:

1. **real target-device evidence** comparing pass-53 mutable CPU updates versus pass-54 compressed shader driving: CPU/GPU frame time, FPS stability, VRAM/heap, thermal/battery where available; or
2. when the owning chain is ready, an explicit rebind to the current newer simultaneous Nature Animation/Rigging receiver, with owner identities pinned and no silent transfer of motion semantics.

If neither is available, select a genuinely new runtime budget seam elsewhere.

## Explicit non-claims

Pass 54 does **not** establish:

- that a 4-byte semantic float equals actual GPU command-transport traffic;
- lower target-device GPU time or energy use;
- free/zero-cost shader range tests;
- direct GPU vertex-position readback equivalence;
- a generic vegetation shader-driver/import policy;
- safety outside exact receiver/domain `[110,370)` and the five pinned rigid groups;
- continuous timed wind playback;
- physical wind semantics;
- deformed normal/tangent correctness;
- final Nature material/lookdev/foliage/sidedness acceptance;
- current newer simultaneous Animation/Rigging acceptance;
- gameplay/collision/physics readiness;
- Art Direction or independent Visual QA acceptance;
- CANON;
- production/game readiness;
- Runtime / Optimization mastery.

## Four-root check

**Truth:** pass 54 preserved two falsifications instead of hiding them: branch groups were not single `VERTEX_ID` ranges, and the first Godot shader form did not compile. The final report distinguishes semantic payload from measured transport and reports the added shader control-flow cost.

**Agency / non-domination:** Runtime does not rewrite Organic, Geometry, Rigging, VFX, Animation, Technical Art, Art/QA or Universal Creation authority. No automatic adoption, merge or CANON request is made.

**Continuity:** pass 52, pass 53, the failed shader attempt, exact 10-run map, final Runtime head/workflow/artifact and earlier Runtime lanes remain separately identified and recoverable.

**Wisdom before speed:** Runtime stayed inside the existing PR, measured the real owner layout before optimizing, repaired only the compiler-boundary defect, and stops before target-device or newer-owner claims.

The four AXM roots — **Truth, Agency / non-domination, Continuity, Wisdom before speed** — remain the merge gate.
