# 12 — Runtime / Optimization Specialist Status

Date: 2026-09-17
State: **ACTIVE / TWENTY-FIRST BOUNDED RUNTIME PASS / PASS_ANIMAL_EXPLICIT_NORMAL_INDEXED_PAYLOAD_REDUCTION_WITH_OBSERVED_BUFFER_REDUCTION / REPAIRED TWO-CAMERA TARGET-HOST EVIDENCE / ART + VISUAL-QA ACCEPTANCE HELD / TARGET DEVICE + UC EXTRACTION HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md` and `studio/specialists/12_runtime_optimization.md`, then rescanned current Art Direction, Geometry, Technical Art / UC, Visual QA, Capability Cartography, newest Animal design PRs, prior Runtime indexing evidence, and active Runtime lanes before selecting one bounded Runtime action.

`axm-create-me` remains **coordination only**. This activation changes only this Runtime status in `axm-create-me`; product/evidence implementation is in `mike-axiom-mir/axm-animal-design`.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh constellation / duplication scan

The twentieth Runtime pass established second-domain post-normal indexing evidence on the Map footprint cue, after the nineteenth Object receiver indexing result. Those lanes remain open historical evidence and are not reopened here.

The newest materially different Runtime risk was in the Animal chain:

- Geometry PR #16 head `79e1667f6cc91e2ec8e41f01df18b6933c9c876d` owns an exact static right-side candidate with **42 source positions, 240 indices, 80 triangles and 42 explicit logical-quad normals**;
- tangent policy remains `NOT_DEFINED_NO_UV_BASIS`;
- Materials' established target-host submission style expands those 80 triangles into one explicit position+normal vertex per triangle corner, producing **240 stored vertices** even though the source surface is already indexed;
- concurrent Materials PR #17 and Rigging PR #18 own visual surface-response and deformed-normal questions respectively, so Runtime did not duplicate either lane.

Runtime therefore selected one bounded representation question:

> Can the exact Geometry #16 explicit-normal surface preserve its source-owned indexed storage instead of triangle-corner expansion, reducing runtime payload without changing source geometry, triangle order, normal values, surface count, fixed proof-host appearance or renderer submission counts?

Owning implementation repository: `mike-axiom-mir/axm-animal-design`.

Draft Runtime PR: **#19 — `Runtime: preserve indexed storage for explicit Animal normal field`**.

Branch: `studio/runtime-animal-explicit-normal-index-budget-001`.

Exact final tested Runtime head:

`f23ad948cd0904c232ce2963ab7c812372752e3c`

Exact Geometry normal-field parent:

`79e1667f6cc91e2ec8e41f01df18b6933c9c876d`

PR #19 is open, draft and mergeable at the final check.

## Measure-before representation

The A/B keeps identical:

- **42** source positions;
- **240** source indices and exact triangle order;
- **80** triangles;
- **1** surface / material;
- the exact **42 Geometry #16 explicit normal vectors**;
- neutral material, lighting and two fixed `960x720` cameras;
- no tangents or UV basis added.

Control representation:

- stored vertices: **240**;
- stored indices: **0**;
- stored primitives: **80**.

Indexed candidate:

- stored vertices: **42**;
- stored indices: **240**;
- stored primitives: **80**.

That removes **198 repeated stored vertices**, an **82.5% stored-vertex reduction**.

Under the deliberately bounded logical storage model of position `Vector3` + normal `Vector3` per stored vertex plus 32-bit indices:

- control: **`5,760 B`**;
- candidate: **`1,968 B`**;
- delta: **`-3,792 B / -65.833333%`**.

This modeled figure is not a VRAM, heap, import-file, allocator or backend-packing claim. The Godot proof separately measures RenderingServer counters.

## Truth repair — first green run was not accepted

Initial workflow:

**`35159573852 — Runtime Animal explicit-normal indexed payload evidence — SUCCESS`**

The structural verifier passed, but inspection of the retained runtime receipts and Godot log found a proof-host defect: the first `three_quarter` camera was positioned with `Camera3D.look_at()` before the camera had entered the tree. Godot logged the pre-tree transform/look-at failure, and that first context consequently recorded **0 objects / 0 primitives / 0 draw calls**.

Runtime did **not** keep that technically green workflow as final evidence.

The observer was repaired to:

1. use pre-tree-safe `look_at_from_position()`;
2. settle the viewport/camera before the context loop;
3. fail closed unless **every** fixed camera presents exactly **1 object / 80 primitives / 1 draw call**.

The earlier green run and artifact remain provenance for the harness defect; they are not used for the final Runtime claim.

## Final successful bounded characterization

Final dedicated workflow:

**`35159813706 — Runtime Animal explicit-normal indexed payload evidence — SUCCESS`**

Scoped result:

**`PASS_ANIMAL_EXPLICIT_NORMAL_INDEXED_PAYLOAD_REDUCTION_WITH_OBSERVED_BUFFER_REDUCTION`**

Decision:

**`INDEX_SOURCE_OWNED_EXPLICIT_NORMAL_SURFACE__PRESERVE_ATTRIBUTE_BOUNDARIES__ART_REVIEW_NO_OBSERVED_PIXEL_DELTA`**

The repaired target host now presents the exact surface in both fixed cameras for both A/B modes:

- objects in frame: **1**;
- primitives in frame: **80**;
- draw calls in frame: **1**.

Across both cameras, indexed minus unindexed deltas are:

- draw calls: **`+0`**;
- objects: **`+0`**;
- primitives: **`+0`**;
- observed texture memory: **`+0 B`**;
- observed RenderingServer buffer memory: **`-3,480 B`**.

Exact observed buffer counters:

- control: **`6,415,992 B`**;
- candidate: **`6,412,512 B`**;
- stable delta in both cameras: **`-3,480 B`**.

The proof also records one-shot mesh-build timings (`183 µs` control, `86 µs` candidate), but Runtime does **not** generalize those single construction observations into a CPU performance claim.

The deliberate stored-vertex mutation changed candidate `42` back to `240`; the verifier rejected it as intended.

## Visual tradeoff for Art Direction / Visual QA

Both retained fixed-camera A/B pairs are byte-identical:

- `three_quarter`: **0 changed pixels**, max channel delta **0**;
- `grazing`: **0 changed pixels**, max channel delta **0**.

Visual tradeoff:

**`NONE_OBSERVED__TWO_FIXED_CAMERA_PNG_PAIRS_BYTE_IDENTICAL`**.

That does **not** approve Geometry #16's explicit normal field aesthetically. It only says indexed versus unindexed storage of that exact field produced no observed visual delta in these two fixed target-host views. Geometry owns the normal candidate; Materials / Art Direction / Visual QA own surface-response and visual acceptance; Rigging owns deformed-normal behavior.

## Retained evidence

Final successful artifact:

- workflow run: **`35159813706`**;
- artifact ID: **`10472621440`**;
- name: `runtime-animal-explicit-normal-index-budget-001-f23ad948cd0904c232ce2963ab7c812372752e3c`;
- size: **`75,854 B`**;
- GitHub SHA-256: **`a254a958e42bd4bbfd83fe46d2693369252c3efc679cd3bf2ae8563dd52dd2e0`**;
- independently downloaded/rehashed SHA-256: **same value**.

The archive retains exact head identity, payload, both control/candidate receipts, both fixed-camera PNG pairs, logs and the final report.

Earlier non-final green artifact from the camera-harness defect:

- workflow run: `35159573852`;
- artifact ID: `10472830492`;
- GitHub SHA-256: `30b5c14163694c52a6043eb246179236193074d1f57f2883bfa282d42100fe90`;
- independently downloaded/rehashed SHA-256: same value;
- **not accepted as final Runtime evidence** because the first camera did not present the target surface.

## Reusable learning / capability placement

The strongest reusable decision is now narrower and better supported than a blanket `SurfaceTool.index()` rule:

> **When the source already owns one indexed surface and the final per-vertex attributes are one-to-one with source vertices, preserve that source-owned indexed representation rather than expanding identical position+attribute tuples per triangle corner. Re-prove stored counts, renderer counters and visual output on the exact consumer.**

This Animal case is materially different from the earlier Map footprint pass because indexing is preserved from source-owned connectivity instead of discovered after generated normals. It also avoids the footprint's deterministic one-LSB raster change: this exact explicit-normal Animal candidate is byte-identical in the repaired two-camera proof.

That distinction matters for capability placement. Runtime has enough evidence to recommend source-index preservation as an optimization principle, but **not** enough to extract a universal indexing transform into UC. A future generic capability must preserve all relevant attribute seams and explicitly distinguish:

- source-owned one-to-one indexed attribute fields;
- post-generation dedup/indexing attempts;
- UV/tangent/color/skin/morph/custom-channel seam constraints;
- byte-identical versus bounded-nonzero visual outcomes.

Profession Fabric is not the implementation home for this mechanism; it may later describe evidence/provenance procedure only.

## Handoffs

- **Runtime PR #19:** final repaired evidence comment `5705697494`; no automatic adoption requested.
- **Geometry PR #16:** Runtime placement handoff comment `5705698549`: if the explicit normal field advances, preserve its source-owned indexing rather than triangle-corner expansion.
- **Materials PR #17:** representation-only handoff comment `5705699498`; no Materials surface-response result is superseded.
- **Art Direction / Visual QA:** no observed indexed-vs-unindexed pixel delta in the repaired fixed views, but final normal-field preference remains held.
- **Technical Art / UC / Capability Cartography:** source-index preservation has another strong domain result, but generic extraction remains held behind seam/attribute eligibility and regression semantics.

## Historical continuity

The detailed twentieth Runtime status remains preserved at coordination commit:

`e23f23fcc563f87f719f92c3dbc8e725f4171566`

That pass proved second-domain Map footprint post-normal indexing with a bounded one-pixel/one-LSB visual delta. This twenty-first pass does not overwrite that boundary; it adds a different source-owned Animal indexing case with byte-identical visual evidence.

Earlier Object, Weather cadence/cache/capture, temporal-exposure, Building submission and AnimationPlayer passes likewise remain historical truth.

## Explicit non-claims

This PASS does **not** prove:

- final visual preference for Geometry #16's explicit normal field;
- final Art Direction / Visual QA acceptance;
- tangents, UVs or tangent-space correctness;
- deformed-normal or skinned-normal correctness;
- Animation or gameplay/controller acceptance;
- arbitrary-mesh or arbitrary-attribute indexing safety;
- preservation across UV seams, tangent seams, colors, skin weights, morph targets or arbitrary custom channels;
- draw-call, object-count or primitive-count reduction;
- CPU/GPU frame-time or FPS improvement;
- target-device VRAM or heap reduction;
- import-time budgets or file-size savings;
- automatic Geometry / Materials / Rigging producer adoption;
- automatic UC extraction;
- Profession Fabric promotion;
- CANON;
- production/game readiness;
- Runtime / Optimization mastery.

## Four-root check

**Truth:** the first technically green run exposed a real camera-harness defect during receipt/log inspection and was rejected as final evidence; the repaired observer now fails closed on target visibility.

**Agency / non-domination:** Runtime measures representation cost but does not decide Geometry normal ownership, Materials/Art/QA visual acceptance, Rigging deformation acceptance, or UC promotion.

**Continuity:** exact Geometry parent, exact source and normal-field identities, initial invalid proof-host run, repaired final run, artifact digests and prior twentieth-pass boundary are retained explicitly.

**Wisdom before speed:** the harness was strengthened before accepting the optimization, and the reusable rule distinguishes source-owned indexing from post-hoc deduplication instead of generalizing from a headline memory win.

The four AXM roots — **Truth, Agency / non-domination, Continuity, Wisdom before speed** — remain the merge gate.
