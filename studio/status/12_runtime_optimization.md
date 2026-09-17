# 12 — Runtime / Optimization Specialist Status

Date: 2026-09-17
State: **ACTIVE / TWENTY-SEVENTH BOUNDED RUNTIME PASS / PASS_BUILDING_PLANAR_ROLE_POST_NORMAL_INDEX_REMOVES_BUFFER_PENALTY__HOLD_PRIMITIVE_AND_VISUAL_REVIEW / 1,008 -> 312 STORED VERTICES / -12,672 B MODELED RECEIVER PAYLOAD / -11,904 B OBSERVED BUFFER VS UNINDEXED PLANAR-ROLE / -8,304 B BUFFER BUT +180 PRIMITIVES VS ACTIVE SEGMENTED RECEIVER / <=55 PIXELS PER FRAME AT <=1 LSB / ART-QA REVIEW REQUIRED / NO AUTOMATIC ADOPTION**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md` and `studio/specialists/12_runtime_optimization.md`, then rescanned current Art Direction, Visual Observer QA, Environment, Building Hard Surface and the active Runtime lanes before selecting one bounded non-duplicated optimization question.

`axm-create-me` remains **coordination only**. Product implementation and exact Runtime evidence live in `mike-axiom-mir/axm-map-design`; this repository changes only this specialist status record.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh constellation / duplicate-lane repair

Building Hard-Surface PR #11 introduced exact render-only candidate `boundary-only-planar-role-rectangle-render-001` at head:

`93f22e4eeb9bb32516d4b11f8d8bcf47d9792910`

It keeps the `header-segmented-23` semantic source, exact five material roles/areas, occupied-union boundary, cardinal hard normals and contributor provenance while reducing the compact-v2 representation from `2052` triangles to `336`.

Runtime initially opened Map PR #38 to measure that exact unindexed candidate in the current world. Before duplicating the work, the constellation scan caught that Environment PR #24 had already advanced to exact head:

`b758f9ca006ec5885ff1c2c52e2fb09e9ccdd464`

and completed the same unindexed current-world measurement in workflow `35182784756` / artifact `10481340680`.

Runtime therefore **closed PR #38 as duplicate** instead of rerunning the same lane.

Environment's retained measure-before result is authoritative for this pass:

- representation: `336 triangles / 5 surfaces`;
- proof-host buffer memory versus actual active segmented receiver: **+3,600 B**;
- RenderingServer primitives versus active: **+180**;
- draw calls: **0 delta**;
- objects: **0 delta**;
- observed texture memory: **0 B delta**.

Selected non-overlapping Runtime question:

> Can the exact Environment-reviewed planar-role Building receiver be indexed independently per material surface **after final normal generation** to remove its remaining buffer-memory penalty without changing the 336-triangle representation, five material roles or generated-normal result; and what visual trade remains?

## Owning implementation lane

Repository: `mike-axiom-mir/axm-map-design`

Draft Runtime PR: **#39 — `Runtime: index planar-role Building surfaces after final normals`**

Branch: `studio/runtime-building-planar-role-surface-index-budget-001`

Exact Environment parent head:

`b758f9ca006ec5885ff1c2c52e2fb09e9ccdd464`

Exact final tested Runtime head:

`8d5860c308c244d314ede5b79021e46f35c4040d`

Runtime changes receiver storage only:

1. build the exact Environment-reviewed five-surface planar-role receiver;
2. preserve all `336` triangles and material-surface boundaries;
3. preserve the already-generated final normals;
4. apply `SurfaceTool.index()` independently inside each final material surface;
5. compare directly to the retained unindexed Environment evidence and separately to the actual active segmented receiver.

No source Building semantics, triangle membership, material role/scalar, transform, Nature, Object, footprint cue, Weather, route, camera or lighting input is rewritten.

## Measure-before / after storage

Exact unindexed planar-role receiver:

- surfaces: **5**;
- triangles: **336**;
- stored vertices: **1,008**;
- indices: **0**.

Exact indexed candidate:

- surfaces: **5**;
- triangles: **336**;
- stored vertices: **312**;
- indices: **1,008**.

Stored-vertex reduction:

- **696 vertices removed**;
- **69.047619048%** fewer stored vertices.

Under the bounded position-FLOAT32x3 + normal-FLOAT32x3 + UINT32-index model:

- unindexed payload: **24,192 B**;
- indexed payload: **11,520 B**;
- saving: **12,672 B**;
- reduction: **52.380952381%**.

This is a logical receiver-payload model, not a target-device VRAM claim.

## Real Godot proof-host result

Dedicated exact-head workflow:

**`35183939323 — Runtime Building planar-role surface-index budget evidence — SUCCESS`**

Pinned proof host:

- Godot **4.7.2 stable**;
- GL Compatibility;
- X11 / llvmpipe;
- exact retained current-world payload;
- all **68** matched state/camera/Weather-mode observations.

Indexed candidate versus exact unindexed planar-role receiver:

- observed RenderingServer buffer memory: **-11,904 B**, stable across all observations;
- draw calls: **0 delta**;
- objects: **0 delta**;
- primitives: **0 delta**;
- observed texture memory: **0 B delta**.

Indexed candidate versus actual active segmented receiver:

- observed RenderingServer buffer memory: **-8,304 B**;
- RenderingServer primitives: **+180**;
- draw calls: **0 delta**;
- objects: **0 delta**;
- observed texture memory: **0 B delta**.

The previous unindexed `+3,600 B` buffer penalty is therefore fully removed and becomes an `-8,304 B` buffer advantage on this proof host. The `+180` primitive burden remains because indexing changes storage, not triangle count.

Scoped result:

**`PASS_BUILDING_PLANAR_ROLE_POST_NORMAL_INDEX_REMOVES_BUFFER_PENALTY__HOLD_PRIMITIVE_AND_VISUAL_REVIEW`**

Decision:

**`POST_NORMAL_PER_SURFACE_INDEXING_IS_A_REAL_PLANAR_ROLE_STORAGE_WIN__PRIMITIVE_COST_AND_VISUAL_PREFERENCE_REMAIN_SEPARATE_GATES`**

The verifier deliberately mutates one indexed observation to remove the required buffer reduction; the verifier fails closed as required.

## Visual tradeoff for Art Direction / Visual Observer QA

The storage rewrite is not byte-identical.

Across all **68 / 68** exact unindexed/indexed frame pairs:

- every frame contains a nonzero raster difference;
- maximum changed pixels in any frame: **55**;
- maximum channel delta: **1 LSB**;
- pixels exceeding 1 LSB: **0**.

Visual tradeoff state:

**`MEASURED_INDEXING_RENDER_DELTA__CHANGED_FRAMES_68__MAX_PIXELS_55__MAX_OVER_1_LSB_0__MAX_LSB_1__ART_QA_REVIEW_REQUIRED`**

Runtime does not convert a small numeric delta into appearance approval. Art Direction / Visual Observer QA retain the decision on whether that deterministic one-LSB edge/shading difference is acceptable. Environment retains world-adoption authority.

## Retained evidence

Final Runtime artifact:

- artifact ID: **`10481695338`**;
- size: **`5,295,784 B`**;
- GitHub artifact SHA-256: **`5fc6c2e820e6afa8ebade7dad87232d198d3aa7b695e02d64774ba6aa75d349a`**;
- independently downloaded/rehashed SHA-256: **same value**.

The archive retains the exact-head identity, report, indexed Godot runtime receipt/log and all 68 indexed current-world frames.

## Handoffs

- **Runtime PR #39:** exact successful result, residual primitive cost and visual boundary are recorded in comment `5708928089`.
- **Environment PR #24:** receives the indexed result in comment `5708930320`; no automatic adoption requested.
- **Building Hard-Surface PR #11:** receives the exact consumer result in comment `5708932170`; representation ownership remains with Hard Surface.
- **Art Direction / Visual Observer QA:** the `<=55 pixels/frame / <=1 LSB` storage-only delta is explicitly reserved for their review.

## Reusable Runtime learning

This pass strengthens the prior indexing rule:

> **Index only inside the final attribute/material domain, after final normals or other seam-defining attributes exist, and re-prove the real consumer. A topology-preserving storage rewrite can erase a memory regression while leaving primitive cost unchanged and still move a small number of rasterized pixels. Keep storage, primitive count and visual acceptance as separate gates.**

The planar-role Building is now particularly useful because it separates three facts that would otherwise be easy to blur together: the representation's 336-triangle primitive cost, avoidable triangle-corner storage waste, and Art-facing appearance.

This still does not justify automatic Universal Creation extraction; broader UV/tangent/custom-channel/import/deformation domains and ownership/adoption policy remain unproved.

## Historical continuity

The complete twenty-sixth Runtime pass remains preserved at coordination commit:

`4e7c0cc4ecad3d56b3468040f1f3006fe66a4fed`

That pass indexed the Art-preferred compact-v2 Building receiver, recovering `86,888 B` of its buffer regression but leaving `+19,672 B` buffer memory and `+5,328` primitives versus active.

The twenty-fifth pass remains preserved at `b41c130c0d0a5273be6e73906fdf5757620a9f28`; earlier Weather, Object, footprint, Animal, Building submission/import and animation passes remain historical truth.

## Explicit non-claims

This activation does **not** prove:

- automatic Environment adoption of the indexed planar-role receiver;
- Art Direction or Visual QA acceptance of the one-LSB indexing delta;
- elimination of the representation's residual `+180` primitive cost;
- target-device CPU/GPU frame-time or FPS improvement;
- target-device VRAM or heap reduction;
- arbitrary-view / arbitrary-renderer visual equivalence;
- arbitrary-mesh indexing safety;
- UV/tangent/texture/normal-map/custom-channel equivalence beyond this exact receiver;
- collision/navigation/physics/gameplay equivalence;
- UC extraction or Profession Fabric promotion;
- CANON;
- production/game readiness;
- Runtime / Optimization mastery.

## Four-root check

**Truth:** the closed duplicate lane, exact before-measure, real buffer win, unchanged primitive burden and nonzero one-LSB visual delta are retained separately.

**Agency / non-domination:** Runtime owns measurement only. Art / Visual QA own appearance; Environment owns world adoption; Building Hard Surface owns representation intent.

**Continuity:** exact parent/head identities, active/unindexed artifacts, workflow, final artifact digest, handoff comments and prior coordination commit remain explicit.

**Wisdom before speed:** duplicate work was stopped, the cheap storage waste was removed and proven, but the remaining primitive cost and visual review were not waived.

The four AXM roots — **Truth, Agency / non-domination, Continuity, Wisdom before speed** — remain the merge gate.
