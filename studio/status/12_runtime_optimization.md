# 12 — Runtime / Optimization Specialist Status

Date: 2026-09-17
State: **ACTIVE / TWENTY-SIXTH BOUNDED RUNTIME PASS / PASS_BUILDING_COMPACT_V2_POST_NORMAL_INDEX_REDUCES_BUFFER__HOLD_VISUAL_REVIEW / 6,156 -> 1,196 STORED VERTICES / -94,416 B MODELED RECEIVER PAYLOAD / -86,888 B OBSERVED BUFFER VS UNINDEXED COMPACT-V2 / +19,672 B BUFFER AND +5,328 PRIMITIVES VS ACTIVE SEGMENTED RECEIVER / <=10 PIXELS PER FRAME AT <=1 LSB / ART-QA REVIEW REQUIRED / NO AUTOMATIC ADOPTION**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md` and `studio/specialists/12_runtime_optimization.md`, then rescanned current Art Direction, Runtime, Environment, Technical Art / UC and the active Building chain before selecting one bounded non-duplicated optimization question.

`axm-create-me` remains **coordination only**. Product implementation and exact Runtime evidence live in `mike-axiom-mir/axm-map-design`; this repository changes only this specialist status record.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh constellation / duplication scan

The prior Runtime lanes already cover Weather update/cadence/cache/proof-harness cost, Object and footprint indexing, Animal indexed render domains, glTF joint-width compaction, the held normalized-weight experiment, and Building source-shell representation cost. Those lanes were not reopened.

Art Direction's current Building decision is explicit:

- compact-v2 has the **preferred cleaner hard-surface / highlight response** in the fixed retained current-world views;
- exact compact-v2 adoption remains **held** because Runtime PR #36 measures it against the actual active segmented receiver as `+106,560 B` proof-host buffer memory and `+5,328` RenderingServer primitives, with independent QA still separate;
- Art asks for the preferred look without silently paying the exact current receiver cost.

That creates a distinct Runtime question from pass 25. The exact Environment compact-v2 receiver already emits five final material surfaces, generates final normals, then stores every triangle corner independently. Prior Object/footprint work established that post-normal indexing can sometimes remove duplicate receiver storage while preserving hard-edge identity, but it also established that visual neutrality must be re-proved per consumer.

Selected bounded question:

> Can the exact Art-preferred five-surface compact-v2 current-world Building receiver be indexed **after final normal generation**, per material surface, to recover most of its receiver-buffer regression without changing its 2,052 triangles or five material roles; and what exact visual/residual-runtime trade remains versus both the unindexed compact-v2 receiver and the actual active segmented receiver?

## Owning implementation lane

Repository: `mike-axiom-mir/axm-map-design`

Draft Runtime PR: **#37 — `Runtime: index compact-v2 Building surfaces after final normals`**

Branch: `studio/runtime-building-compact-v2-surface-index-budget-001`

Exact Environment base head:

`ef2cb9cc84edc10ab66c2230daca625623e0b00d`

Exact final tested Runtime head:

`8692848f12f363d341efb85051e990ca74f421bb`

PR #37 is **OPEN / DRAFT / MERGEABLE** at final check.

## Exact comparison identities

Actual active segmented current-world receiver evidence:

- workflow: `35179857526`;
- artifact: `10478624997`;
- active Building receiver: `184v / 276t / 5 surfaces`.

Exact unindexed compact-v2 current-world evidence:

- workflow: `35179857530`;
- artifact: `10480305129`;
- representation: `boundary-only-union-shell-conforming-compact-v2-001`;
- logical source identity: `1004v / 2052t / 5 surfaces`;
- actual proof-host receiver storage before indexing: `6156` stored triangle-corner vertices / `0` indices.

Pinned compact-v2 donors remain:

- Geometry: `16253e7dd2f8cd590667f9631e4b50fdfcc7280d`;
- Hard Surface: `35d0ba62d7e534b3cd00ac69e99386843ffa3f2e`;
- Materials: `4179aa1401f5a9114399e2f998c96809d4b8ed2e`.

## Candidate representation rule

Runtime changes receiver storage only:

1. build the exact compact-v2 current-world receiver exactly as Environment already does;
2. preserve all five material surfaces and all `2052` triangles;
3. preserve the existing final generated normals;
4. only after those attributes exist, recreate each surface and call `SurfaceTool.index()`;
5. never deduplicate across material-surface boundaries;
6. compare to the exact retained unindexed compact-v2 evidence and separately to the actual active segmented receiver.

No source topology, material role/scalar, transform, camera, lighting, Nature, Object, Weather, footprint cue or route input is rewritten.

## Measure-before / after storage result

Exact unindexed compact-v2 receiver:

- surfaces: **5**;
- triangles: **2,052**;
- stored vertices: **6,156**;
- indices: **0**.

Exact indexed candidate:

- surfaces: **5**;
- triangles: **2,052**;
- stored vertices: **1,196**;
- indices: **6,156**.

Stored-vertex reduction:

- **4,960 vertices removed**;
- **80.57179987%** fewer stored vertices.

Under the deliberately bounded position-FLOAT32x3 + normal-FLOAT32x3 + UINT32-index model:

- unindexed payload: **147,744 B**;
- indexed payload: **53,328 B**;
- saving: **94,416 B**;
- reduction: **63.905133203%**.

This is a logical receiver-payload model, not a target-device VRAM claim.

## Real Godot proof-host result

Final dedicated exact-head workflow:

**`35182141875 — Runtime Building compact-v2 surface-index budget evidence — SUCCESS`**

Pinned host:

- Godot **4.7.2 stable**;
- GL Compatibility;
- X11 / llvmpipe;
- exact retained current-world payload;
- all **68** matched observations / rendered frames.

Indexed candidate versus exact unindexed compact-v2:

- observed RenderingServer buffer memory: **-86,888 B**, stable in every matched observation;
- draw calls: **0 delta**;
- objects: **0 delta**;
- primitives: **0 delta**;
- observed texture memory: **0 B delta**.

Scoped state:

**`PASS_BUILDING_COMPACT_V2_POST_NORMAL_INDEX_REDUCES_BUFFER__HOLD_VISUAL_REVIEW`**

Decision:

**`POST_NORMAL_PER_SURFACE_INDEXING_IS_A_REAL_RECEIVER_STORAGE_WIN__KEEP_ART_VISUAL_PREFERENCE_AND_ACTIVE_CONSUMER_BUDGET_AS_SEPARATE_GATES`**

The verifier deliberately mutates one candidate observation to remove the required buffer reduction and confirms the report fails closed.

## Residual cost versus the actual active segmented receiver

The indexing win does **not** make compact-v2 cost-equivalent to the active Map receiver.

Indexed compact-v2 versus active segmented receiver across the same observation set:

- observed buffer memory: **+19,672 B**;
- RenderingServer primitives: **+5,328**;
- draw calls: **0 delta**;
- objects: **0 delta**;
- observed texture memory: **0 B delta**.

Relative to Runtime PR #36's unindexed `+106,560 B` buffer regression, indexing recovers:

- **86,888 B**;
- **81.539039039%** of the measured buffer regression.

Residual buffer cost is **18.460960961%** of that previous regression.

The `+5,328` primitive burden is completely unchanged because this pass changes storage/indexing, not triangle count. That is now the clearer remaining Runtime pressure if Environment ever wants to pursue the exact compact-v2 look target further.

## Visual tradeoff for Art Direction / Visual QA

Post-normal per-surface indexing is **not byte-identical** in this current-world receiver.

Across all **68 / 68** exact unindexed/indexed frame pairs:

- every frame contains a nonzero raster difference;
- maximum changed pixels in any frame: **10**;
- maximum channel delta: **1 LSB**.

Visual tradeoff state:

**`MEASURED_POST_NORMAL_INDEXING_RENDER_DELTA__ART_REVIEW_REQUIRED__CHANGED_FRAMES_68__MAX_PIXELS_10__MAX_LSB_1`**

This is far smaller than the actual active-segmented -> compact-v2 Art-facing appearance change, but Runtime does not convert a small numeric delta into visual approval. Art Direction / Visual Observer QA retain authority over whether the deterministic one-LSB edge/shading differences are acceptable.

## Failed setup runs retained and repaired

Two setup-only failures remain part of provenance instead of being erased:

1. workflow **`35181620981`** failed before measurement because the proof host lacked the inherited Weather-width observer required by the current-world superclass chain;
2. workflow **`35181832945`** failed before measurement because Runtime's first repair overcomplicated that chain and supplied three incorrect donor SHAs, correctly producing a GitHub Contents `404`.

Runtime then re-read the exact retained compact-v2 Environment workflow at head `ef2cb9cc...` and restored its authoritative setup pattern: checkout Weather-width observer donor **`15a03b7c3ba3aaa7c0475ca1a3091c15581f559b`** and copy only the inherited `atmosphere_current_world_weather_width_observe.gd` into the proof host. Candidate indexing logic and all acceptance gates remained unchanged.

The repaired exact workflow is the successful `35182141875` result above.

## Retained evidence

Final retained artifact:

- artifact ID: **`10481020383`**;
- size: **`5,236,686 B`**;
- GitHub artifact digest: **`ccdbc8b12de83388456a4449e4621b63ccd1cfa93e67c832b4e31f03bd2dfe45`**;
- independently downloaded/rehashed SHA-256: **same value**.

The archive retains the exact report, exact-head identity, indexed Godot runtime receipt/log and all 68 rendered candidate/control frames.

## Reusable Runtime learning

This pass sharpens the indexing rule from earlier Object/footprint work:

> **If a receiver already owns final per-vertex attributes, index only inside that final attribute/material domain and prove the real consumer again. Post-normal indexing can recover large storage waste without reducing triangle cost, and even a topology-preserving storage rewrite may move rasterization by one LSB. Keep storage, primitive cost and visual acceptance as separate gates.**

The exact Building case is now especially informative because it decomposes the previous Runtime regression: most of the buffer cost was triangle-corner duplication, while the full primitive cost is intrinsic to the `2052t` representation. That is useful design feedback without Runtime prescribing a new topology.

This still does not justify an automatic Universal Creation extraction. A reusable cross-product operator would need broader UV/tangent/material/custom-channel/deformation/import domains plus explicit ownership/adoption policy.

## Handoffs

- **Runtime PR #37:** exact successful result, artifact digest, residual active-receiver cost, visual tradeoff and both setup failures are retained in the PR.
- **Environment PR #24:** receives the exact indexed compact-v2 result for optional future adoption review; no adoption requested.
- **Runtime PR #36:** receives decomposition of its prior `+106,560 B / +5,328 primitive` regression: indexing recovers `86,888 B` but leaves all `+5,328` primitives and `+19,672 B` buffer residual.
- **Art Direction / Visual Observer QA:** receives the 68-frame `<=10 pixels / <=1 LSB` indexing tradeoff. Runtime does not approve appearance.
- **Building Geometry / Hard Surface / Materials / Technical Art:** source topology, hard-surface preference, material profile and transport ownership remain unchanged.

## Historical continuity

The complete twenty-fifth Runtime pass remains preserved at coordination commit:

`b41c130c0d0a5273be6e73906fdf5757620a9f28`

That pass characterized the compact Building shell against the larger boundary-shell reference and retained its seven-pixel visual tradeoff.

The twenty-fourth pass remains preserved at `523889f3c327659ef9866649a26fe4f2f6ddd086`; earlier Weather, Object, footprint, Animal, Building submission and animation passes remain historical truth.

## Explicit non-claims

This activation does **not** prove:

- automatic Environment adoption of indexed compact-v2;
- Art Direction or Visual QA acceptance of the one-LSB indexing delta;
- elimination of compact-v2's residual `+19,672 B / +5,328 primitive` active-consumer cost;
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

**Truth:** the large buffer win, unchanged primitive burden, nonzero one-LSB visual delta and two failed setup runs are all retained separately rather than collapsed into a success story.

**Agency / non-domination:** Runtime owns measurement only. Art / Visual QA own appearance; Environment owns world adoption; Building Geometry / Hard Surface / Materials own source and look; Technical Art owns transport.

**Continuity:** exact parent/head identities, original active/unindexed artifacts, failed and successful workflow IDs, final artifact digest, prior coordination commit and residual active-receiver cost remain explicit.

**Wisdom before speed:** recover the cheap storage waste, but do not call the representation solved while it still carries `+5,328` proof-host primitives and a nonzero visual delta.

The four AXM roots — **Truth, Agency / non-domination, Continuity, Wisdom before speed** — remain the merge gate.
