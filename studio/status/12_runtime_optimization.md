# 12 — Runtime / Optimization Specialist Status

Date: 2026-09-17
State: **ACTIVE / TWENTY-EIGHTH BOUNDED RUNTIME PASS / HOLD_BUILDING_INDEX_BEFORE_NORMAL_RECEIVER_PREPARATION_WIN_NOT_REPRODUCED / KEEP POST-NORMAL INDEX CONTROL / EXACT FINAL 5 SURFACES + 312 STORED VERTICES + 1,008 INDICES + 336 TRIANGLES / REPEATED PROOF-HOST MEDIAN 832 us CONTROL VS 981 us CANDIDATE / CANDIDATE +149 us (+17.908654%) / 0 OF 41 PAIRS FASTER / ZERO RENDERER-COUNTER DELTA / <=55 PIXELS PER FRAME AT <=1 LSB / ART-QA REVIEW REMAINS / NO AUTOMATIC ADOPTION**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md` and `studio/specialists/12_runtime_optimization.md`, then rescanned current Art Direction, Visual Observer QA, Technical Art / UC integration, Environment and active Runtime lanes before choosing one bounded non-duplicated optimization question.

`axm-create-me` remains **coordination only**. Product implementation, the benchmark, observer scripts and exact Runtime evidence live in `mike-axiom-mir/axm-map-design`; this repository changes only this specialist status record.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Why this lane was selected

Runtime pass 27 already proved that post-normal per-material-surface indexing is a real memory/storage win for the Environment-reviewed planar-role Building receiver:

- `1,008` stored vertices / `0` indices -> `312` stored vertices / `1,008` indices;
- same `5` surfaces / `336` triangles;
- `-11,904 B` observed RenderingServer buffer memory versus the unindexed planar-role receiver;
- `-8,304 B` buffer memory versus the actual active segmented receiver, while its representation-level `+180` primitive burden remains;
- visual storage-path boundary `<=55 changed pixels/frame`, `<=1 LSB`, zero pixels above 1 LSB.

That storage result remains valid and is **not reopened or weakened** here.

The next reusable risk was receiver/import-preparation cost. The existing post-normal path first builds `1,008` unindexed triangle-corner vertices, generates normals, then performs `SurfaceTool.create_from()` + `SurfaceTool.index()` to reach the proven `312`-vertex final domain. A superficially attractive optimization is to deduplicate the per-material position domain first, add the same indices, and then generate normals.

Selected bounded question:

> Does moving the already-proven deduplication **before normal generation** reduce CPU-side proof-host Building receiver construction cost while preserving the exact final representation and keeping renderer/visual gates separate?

This is intentionally different from pass 27's final-storage/memory question.

## Owning implementation lane

Repository: `mike-axiom-mir/axm-map-design`

Draft Runtime PR: **#41 — `Runtime: direct-index planar-role Building receiver preparation`**

Branch: `studio/runtime-building-planar-role-direct-indexed-import-budget-001`

Exact Environment parent head:

`038925282240441c475651bdc3737d1749c31d06`

Exact final tested Runtime head:

`e55a5031e2d87f4fcfa406635a36f21aaca79e21`

Exact successful workflow:

`35188727341`

Pinned proof host:

- Godot `4.7.2.stable.official.ed1daf0bf`;
- GL Compatibility;
- X11 / Mesa llvmpipe;
- exact retained 17-state planar-role current-world payload.

## Control and candidate

Control path — retain pass 27's measured receiver behavior:

1. build `1,008` unindexed triangle-corner vertices across the exact five material surfaces;
2. run the current Godot normal-generation step;
3. `create_from()` each completed surface;
4. run `SurfaceTool.index()` independently inside the final material/normal domain;
5. commit the final `312` stored vertices / `1,008` indices / `336` triangles.

Candidate path:

1. consume the exact same source triangle membership and five material surfaces;
2. deduplicate only the exact per-material position domain first;
3. build `312` position vertices plus the same `1,008` indices;
4. run the same pinned Godot normal-generation step;
5. commit the same final storage identity.

No Building source semantics, material role/scalar, triangle membership, world composition, transform, Nature, Object, footprint, Weather, route, camera or lighting input is intentionally changed.

## Truth-boundary repairs preserved

This lane produced three useful proof repairs instead of silently converting failed setups into success.

### 1. Canonical payload donor repair

Initial workflow `35187695558` assumed the latest indexed Environment artifact retained the canonical `combined_current_world.json`. It intentionally did not. The lane was repaired to bind the last exact canonical Environment payload donor instead:

- Environment head `b758f9ca006ec5885ff1c2c52e2fb09e9ccdd464`;
- workflow `35182784756`;
- donor artifact `10481340680`;
- donor SHA-256 `96d6bd6a0ed6e6edb0fc129484dd02769f7fd13952ad1a7eabeda8ffe681ee74`.

### 2. Direct hand-derived normal-array candidate rejected

The first candidate tried direct final position + hand-derived cardinal-normal + index arrays. Workflow `35187830604` failed the exact final-storage identity gate: that normal domain was not equivalent to the current Godot-generated domain.

Runtime did **not** weaken the gate or declare those normals equivalent. The failed experiment remains provenance. The repaired candidate deduplicates positions only and still uses the same Godot `generate_normals()` step.

### 3. Seventeen copied receipts were not treated as seventeen timings

The current-world scene constructs the static Building once and copies that static-source receipt into all 17 state rows. Treating those duplicated values as 17 independent timing samples would have been false precision.

The verifier therefore records the scene timing as **one control and one candidate construction observation only** and adds a separate repeated benchmark: five alternating warmup pairs followed by **41 independently timed alternating control/candidate pairs**.

The first benchmark setup (`35188519374`) also failed because `RenderingServer.sync()` was not a valid call in this pinned proof script. It was removed from the timing path without relaxing any final-storage identity gate.

## Repeated proof-host preparation result

Final exact-head repeated benchmark from workflow `35188727341`:

- control median: **832 us**;
- control p90: **859 us**;
- index-before-normal candidate median: **981 us**;
- candidate p90: **999 us**;
- median candidate-minus-control: **+149 us**;
- median percentage change: **+17.908654%** candidate slowdown;
- paired-delta median: **+148 us**;
- candidate faster pairs: **0 / 41**;
- candidate slower-or-equal pairs: **41 / 41**.

The separately retained single scene-build observation points in the same direction but is not used as repeated evidence:

- control: **1,216 us**;
- candidate: **1,405 us**;
- delta: **+189 us**.

Scoped result:

**`HOLD_BUILDING_INDEX_BEFORE_NORMAL_RECEIVER_PREPARATION_WIN_NOT_REPRODUCED`**

Decision:

**`KEEP_POST_NORMAL_INDEX_CONTROL__INDEX_BEFORE_NORMAL_DID_NOT_SHOW_A_ROBUST_PREPARATION_WIN`**

The candidate does end at the same smaller final storage, but in this exact GDScript receiver it costs more CPU-side preparation work than letting the engine perform the proven post-normal indexing path.

## Final representation and real renderer result

Both control and candidate finish at exactly:

- surfaces: **5**;
- stored vertices: **312**;
- indices: **1,008**;
- triangles / rendered primitives for the Building representation: **336**;
- source payload positions: **672**.

Across all **68** exact current-world renderer observations, candidate minus control is exactly:

- draw calls: **0**;
- objects: **0**;
- primitives: **0**;
- observed RenderingServer buffer memory: **0 B**;
- observed texture memory: **0 B**.

That distinction matters: the final renderer/storage representation is equivalent at the measured counter level, yet one construction path is measurably slower. Runtime therefore keeps construction cost and final memory footprint as separate gates.

The deliberate final-storage mutation (`312 -> 311`) is rejected fail-closed by the verifier.

## Visual tradeoff for Art Direction / Visual Observer QA

The control/candidate receiver-construction paths are not byte-identical in the retained frames even though the final counter identity is the same.

Across all **68 / 68** exact A/B frame pairs:

- every frame contains a nonzero raster difference;
- maximum changed pixels in any frame: **55**;
- maximum channel delta: **1 LSB**;
- pixels exceeding 1 LSB: **0**.

Visual tradeoff state:

**`MEASURED_INDEX_BEFORE_NORMAL_RENDER_DELTA__CHANGED_FRAMES_68__MAX_PIXELS_55__MAX_OVER_1_LSB_0__MAX_LSB_1__ART_QA_REVIEW_REQUIRED`**

Runtime does not convert the small numeric delta into Art acceptance. Art Direction / Visual Observer QA retain appearance authority; Environment retains receiver/world-adoption authority.

## Retained final evidence

Final exact Runtime artifact:

- artifact ID: **`10483265841`**;
- size: **`10,592,619 B`**;
- GitHub artifact SHA-256: **`2d20b7ec217b8a2b2fd6b41485c929b22fe789269ab9ced3651c35c68cbe6373`**;
- independently downloaded/rehashed SHA-256: **same value**.

The archive retains:

- exact Runtime head identity;
- the independent 41-pair preparation benchmark receipt/log;
- control and candidate current-world runtime receipts/logs;
- all 68 retained control frames and all 68 candidate frames;
- final verifier report.

## Handoffs

- **Runtime PR #41:** final exact-head HOLD, repeated benchmark, renderer identity, visual boundary and preserved failures recorded in comment `5709802439`.
- **Environment PR #24:** receives the exact HOLD and recommendation to keep the existing post-normal indexed receiver in comment `5709803675`; no automatic adoption requested.
- **Art Direction / Visual Observer QA:** retain review authority over the nonzero `<=55 pixels/frame / <=1 LSB` boundary.
- **Technical Art / UC:** no extraction or receiver-policy rewrite is requested from this pass.

## Reusable Runtime learning

This is a useful **negative optimization result**:

> **Do not assume that performing deduplication earlier is cheaper just because it avoids a temporary expanded mesh. In this exact receiver, Godot's post-normal `SurfaceTool.index()` path is measurably faster than a script-level pre-deduplication path even though both end at the same 312-vertex / 1,008-index representation and identical renderer counters. Measure construction/import cost separately from final memory footprint.**

Pass 27's rule also remains intact:

> **Index only inside the final attribute/material domain, after seam-defining attributes exist, unless an earlier-domain rewrite is independently proven. Preserve storage, primitive count, construction cost and visual acceptance as separate gates.**

## Historical continuity

The complete twenty-seventh Runtime pass remains preserved in repository history before this status replacement; it proved the planar-role Building post-normal indexing memory win (`1,008 -> 312` stored vertices, `-11,904 B` observed buffer versus unindexed, residual `+180` primitives versus active) and handed that result to Art/QA/Environment without automatic adoption.

The complete twenty-sixth pass remains preserved at coordination commit `4e7c0cc4ecad3d56b3468040f1f3006fe66a4fed`; the twenty-fifth remains at `b41c130c0d0a5273be6e73906fdf5757620a9f28`. Earlier Weather, Object, footprint, Animal, Building submission/import and animation passes remain historical truth.

## Explicit non-claims

This activation does **not** prove:

- automatic Environment adoption of either planar-role receiver path;
- Art Direction or Visual QA acceptance of the one-LSB visual boundary;
- target-device CPU or GPU frame-time improvement;
- FPS improvement;
- target-device VRAM or heap reduction;
- import/export transport equivalence;
- arbitrary-view / arbitrary-renderer visual equivalence;
- arbitrary-mesh early-deduplication safety;
- UV/tangent/texture/normal-map/color/skin/morph/custom-channel equivalence outside this exact receiver;
- collision/navigation/physics/gameplay equivalence;
- UC extraction or Profession Fabric promotion;
- CANON;
- production/game readiness;
- Runtime / Optimization mastery.

## Four-root check

**Truth:** the apparently attractive earlier-dedup idea is recorded as slower, the duplicated 17-row timing illusion is repaired, failed candidates/setups remain provenance, and construction cost is not blurred with final memory/storage cost.

**Agency / non-domination:** Runtime owns measurement only. Art / Visual QA own appearance, Environment owns receiver/world adoption, Hard Surface / Materials own their representation/look intent, and Technical Art owns broader transport/integration policy.

**Continuity:** the measured-faster post-normal indexed receiver remains the rollback/control; exact parent/head identities, donor, failed workflows, successful workflow, artifact digest and handoff comments remain explicit.

**Wisdom before speed:** the lane rejected an optimization that sounded cheaper but repeatedly measured worse, preserving the already-proven storage win rather than rewriting it on intuition.

The four AXM roots — **Truth, Agency / non-domination, Continuity, Wisdom before speed** — remain the merge gate.
