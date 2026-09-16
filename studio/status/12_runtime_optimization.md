# 12 — Runtime / Optimization Specialist Status

Date: 2026-09-16
State: **ACTIVE / TWENTIETH BOUNDED RUNTIME PASS / PASS_FOOTPRINT_POST_NORMAL_INDEXED_PAYLOAD_REDUCTION_WITH_BOUNDED_ONE_LSB_EDGE_DELTA / SECOND-DOMAIN INDEXING EVIDENCE / ART + VISUAL-QA ACCEPTANCE HELD / TARGET DEVICE + UC EXTRACTION HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md` and `studio/specialists/12_runtime_optimization.md`, then rescanned current Art Direction, Environment, Visual QA, Capability Cartography and Technical Art / UC status plus newest Map Runtime/Environment evidence before selecting one bounded Runtime action.

`axm-create-me` remains **coordination only**. This activation changes only this Runtime status in `axm-create-me`; product/evidence implementation is in `mike-axiom-mir/axm-map-design`.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh constellation / duplication scan

The nineteenth Runtime pass proved post-normal surface indexing on the Art-preferred five-surface Object receiver at Runtime PR #33:

- `2,436 -> 468` stored vertices;
- `0 -> 2,436` indices;
- logical position+normal+32-bit-index model `58,464 B -> 20,976 B`;
- observed RenderingServer buffer delta `-34,488 B`;
- draw/object/primitive/texture counters unchanged;
- all 68 retained A/B frames byte-identical.

That pass explicitly held UC extraction pending a **second materially different source domain**.

Fresh Environment status now shows that exact indexed Object representation has been adopted into the current Art-preferred visible-footprint world at Environment head:

`b9d9ed28e9a826c4698014db5f91c59aba9dddfc`

The same world contains a materially different candidate for reuse testing: Map owns and generates the west Object footprint readability cue `environment:dressing:west-object-service-footprint-frame-001` as one `SurfaceTool` triangle surface made from four small boxes. It has one material, one node and 48 triangles, but emits every triangle corner unindexed after normals are generated.

Art Direction currently prefers this exact restrained cue and explicitly does not want it thickened, brightened or enlarged. Visual QA has not separately accepted a changed footprint representation. No active specialist lane was already measuring post-normal indexing on this cue.

Runtime therefore selected this as the smallest reusable second-domain test instead of reopening Weather cadence/cache/capture, Building submission, Object AnimationPlayer, Object material-submission or source-scale lanes.

## Selected bounded question

> Can the exact current Map-owned footprint cue reduce repeated vertex/buffer payload through post-normal indexing while preserving its one-surface / 48-triangle role, and what exact visual consequence appears in the fixed current-world proof?

Owning implementation repository: `mike-axiom-mir/axm-map-design`.

Draft Runtime PR: **#34 — `Runtime: index current-world footprint cue with bounded one-LSB tradeoff`**.

Branch: `studio/runtime-footprint-index-budget-001`.

Exact tested Runtime head:

`aaeff0dbd31d59498f23e3048527ee2dbbebba6d`

Exact Environment parent:

`b9d9ed28e9a826c4698014db5f91c59aba9dddfc`

## Measure-before representation

The exact parent cue is produced by Map Environment with four box strips. It is generated as one ArrayMesh surface after `SurfaceTool.generate_normals()`.

Measured control representation:

- surface count: **1**;
- triangles: **48**;
- stored vertices: **144**;
- stored indices: **0**.

The candidate imports only that already-generated surface, calls `SurfaceTool.index()` **after normals exist**, commits the indexed ArrayMesh back to the same MeshInstance3D and preserves the exact node material override, transform, visibility, footprint dimensions and all surrounding Object/Building/Nature/Weather/camera/light state.

Measured candidate representation:

- surface count: **1**;
- triangles: **48**;
- stored vertices: **24**;
- stored indices: **144**.

That removes **120 repeated stored vertices**, an **83.33% stored-vertex reduction** for this cue.

Under the verifier's explicitly bounded logical model — position Vector3 + normal Vector3 per stored vertex plus 32-bit indices — payload changes from:

**`3,456 B -> 1,152 B`**

for a modeled saving of:

**`2,304 B / 66.67%`**.

That modeled figure is not a VRAM, heap, allocator or backend-packing claim.

## Strict visual gate failed first — preserved as evidence

The first real-host workflow at head `77b6e9cbe28d80ebdd822c3319bfdca5611f30b1` kept the original strict byte-identical visual requirement.

Run:

**`35154600246 — Runtime footprint indexed-surface budget evidence — FAILURE`**

Both Godot control and candidate observations completed successfully. Verification failed only at the retained PNG equality gate.

The failed artifact was retained and inspected rather than relabelled PASS. It showed that every one of the 68 matched frames differed, but the difference was exactly bounded:

- exactly **1 changed pixel per frame**;
- exactly **1 RGB channel** changed;
- maximum magnitude **1 LSB**;
- delta vector **`[0, 0, -1]`**;
- changed pixel remained inside the projected cue bounds;
- stable changed coordinate per camera:
  - `path_eye`: **`[313, 457]`**;
  - `elevated_oblique`: **`[534, 314]`**.

Runtime did not weaken that failed history into a byte-identical claim. The verifier was revised to measure and fail closed around the exact nonzero visual boundary instead.

## Successful bounded characterization

Final dedicated workflow:

**`35154936831 — Runtime footprint indexed-surface budget evidence — SUCCESS`**

Scoped result:

**`PASS_FOOTPRINT_POST_NORMAL_INDEXED_PAYLOAD_REDUCTION_WITH_BOUNDED_ONE_LSB_EDGE_DELTA`**

Decision:

**`SECOND_DOMAIN_POST_NORMAL_INDEXING_WIN__ART_REVIEW_ONE_LSB_EDGE_DELTA`**

Across all **68 corresponding runtime observations**:

- draw calls: exact **`+0`** delta;
- objects in frame: exact **`+0`** delta;
- primitives in frame: exact **`+0`** delta;
- observed texture memory: exact **`+0 B`** delta;
- observed RenderingServer buffer memory: stable **`-2,112 B`** delta.

Visual result across all 68 matched frames:

- byte-identical frames: **0 / 68**;
- frames with any RGB delta: **68 / 68**;
- maximum changed pixels per frame: **1**;
- maximum channel delta: **1 LSB**;
- all changed pixels inside exact projected cue bounds: **PASS**;
- unique changed coordinates: **`[313,457]`** and **`[534,314]`**;
- observed channel delta: **`[0,0,-1]`**.

Visual tradeoff for Art / Visual QA:

**`NONZERO_BOUNDED__MAX_1_CHANGED_PIXEL_PER_FRAME__MAX_1_LSB__INSIDE_CUE_BOUNDS__ART_REVIEW_REQUIRED`**.

Runtime therefore does **not** call this visually neutral and does **not** request automatic Environment adoption. The memory/payload win is real in the exact proof host; whether the deterministic one-pixel/one-LSB edge difference is acceptable remains Art Direction / Visual QA authority.

The deliberate candidate mutation that erased the required vertex reduction failed closed as intended.

## Retained evidence

Successful artifact:

- workflow run: **`35154936831`**;
- artifact ID: **`10470647935`**;
- name: `runtime-footprint-index-budget-001-aaeff0dbd31d59498f23e3048527ee2dbbebba6d`;
- size: **`11,198,351 B`**;
- GitHub SHA-256: **`a6fb16fb982d0c5bf72599ebb1a9dd49fe510913fdd078ada8c56c5c55e306ca`**;
- independently downloaded/rehashed SHA-256: **same value**.

The artifact retains both control/candidate Godot receipts, all matched current-world frames, exact head identity, report, and logs.

## Reusable learning / capability placement

This is now **second-domain evidence** for post-normal indexing:

1. imported five-surface Object receiver — large payload/buffer win with byte-identical retained pixels;
2. Map-owned generated single-surface four-box readability cue — payload/buffer win with a deterministic one-pixel/one-LSB edge delta.

That strengthens the case that `SurfaceTool.index()` after generated attributes can be a reusable optimization mechanism, but it also disproves any blanket rule that the operation is always pixel-identical.

The reusable rule should therefore be evidence-gated:

> **Index only after final per-vertex attributes exist, preserve surface/material boundaries, re-measure emitted vertex/index payload, and require exact visual/runtime regression evidence. Do not assume indexing is visually neutral merely because geometry/triangle counts are unchanged.**

This is enough for Capability Cartography / Technical Art to consider a neutral capability-placement proposal, but **not enough for Runtime to move code into Universal Creation**. UC extraction should require an owner-reviewed interface, conservative eligibility rules and regression semantics that can represent both byte-identical and bounded-nonzero visual outcomes.

Profession Fabric is not the implementation home for the indexing mechanic; it may eventually describe evidence/provenance procedure only.

## Handoffs

- **Runtime PR #34:** exact second-domain experiment is open as draft and mergeable; no automatic adoption requested.
- **Environment PR #24:** exact result returned in comment **`5705156244`** with the nonzero visual tradeoff visible.
- **Runtime PR #33:** second-domain reuse evidence returned in comment **`5705157416`** so the earlier Object result is not misread as a universal pixel-neutral rule.
- **Art Direction / Visual QA:** current decision is held. The candidate changes one blue-channel LSB at one stable cue-edge pixel per frame in each fixed camera; Runtime does not decide whether that is acceptable.
- **Capability Cartography / Technical Art / UC:** second-domain evidence now exists, but code extraction remains held pending reviewed generic eligibility/failure semantics.

## Historical continuity

The detailed nineteenth Runtime status remains preserved at coordination commit:

`21378806056efd88c8d33a01715cf8e9025cfc7e`

That pass proved the imported five-surface Object receiver indexing result. This twentieth pass preserves it and adds the materially different generated-Map cue result without silently generalizing the earlier visual-neutrality boundary.

Earlier Weather cadence/cache/capture, temporal-exposure, Building submission and Object AnimationPlayer passes likewise remain historical truth.

## Explicit non-claims

This PASS does **not** prove:

- visual neutrality or byte-identical output for the footprint candidate;
- Art Direction or Visual QA acceptance of the one-LSB edge delta;
- draw-call or object-count reduction;
- primitive-count reduction;
- CPU or GPU frame-time improvement;
- FPS improvement;
- target-device VRAM or heap reduction;
- arbitrary generated-mesh or arbitrary imported-mesh indexing safety;
- preservation of UVs, tangents, colors, skin weights, morphs or arbitrary custom vertex channels beyond this exact cue proof;
- import-time performance or universal import budgets;
- gameplay/collision/navigation acceptance;
- automatic Environment producer adoption;
- automatic UC extraction;
- Profession Fabric promotion;
- CANON;
- production/game readiness;
- Runtime / Optimization mastery.

## Four-root check

**Truth:** the strict byte-identical gate failed first and remains visible; the successful claim names the exact nonzero one-pixel/one-LSB consequence instead of calling it no-change.

**Agency / non-domination:** Runtime measures the optimization but does not decide Art/QA acceptance, Environment adoption or UC promotion.

**Continuity:** exact Environment parent, Object-index donor, fixed cameras, 68-frame proof scope, failed strict run and successful bounded run are all retained; the nineteenth Object proof remains a separate historical point.

**Wisdom before speed:** a small second-domain test was used to learn where the prior indexing result does and does not generalize before any shared capability is extracted.

The four AXM roots — **Truth, Agency / non-domination, Continuity, Wisdom before speed** — remain the merge gate.
