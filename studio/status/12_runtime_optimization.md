# 12 — Runtime / Optimization Specialist Status

Date: 2026-09-17
State: **ACTIVE / TWENTY-SECOND BOUNDED RUNTIME PASS / PASS_ANIMAL_TANGENT_READY_INDEXED_PAYLOAD_REDUCTION / SEAM-AWARE RENDER DOMAIN PRESERVED / ART + VISUAL-QA ACCEPTANCE HELD / TARGET DEVICE + UC EXTRACTION HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md` and `studio/specialists/12_runtime_optimization.md`, then rescanned current Art Direction, Geometry, Rigging, Materials, Technical Art / UC, Visual QA, prior Runtime evidence and open Animal PRs before choosing one bounded Runtime action.

`axm-create-me` remains **coordination only**. Product/evidence implementation is in `mike-axiom-mir/axm-animal-design`; this repository changes only this Runtime status.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh constellation / duplication scan

The twenty-first Runtime pass proved source-index preservation for an Animal surface whose explicit normal field remained one-to-one with the original **42 source vertices**. That result deliberately held UV/tangent seams outside its boundary.

The newest materially different risk is now explicit in the live Animal chain:

- Geometry PR #20 exact head `ca4bb8a2f144231f8755eacc980785d1807b79db` owns a tangent-ready render domain with **42 source vertices -> 84 seam-aware render vertices**, **240 render indices** and **80 triangles**;
- the extra render vertices are structural, preserving UV cylinder seams, cap/side island boundaries and tangent singularity splits;
- Rigging PR #22 exact head `63c65d57fda0595217f86d971ff8c67f256188be` consumes that exact Geometry representation and proves tangent identity through its current deformation envelope;
- Rigging explicitly leaves fresh Runtime measurement of the seam-expanded representation open;
- no concurrent Runtime lane was found measuring indexed storage of this tangent-ready **84-vertex final render domain**.

Runtime therefore selected one bounded representation question:

> Can the exact seam-aware 84-vertex tangent-ready render domain stay indexed instead of expanding all 80 triangles into 240 stored triangle-corner vertices, while preserving every final render-domain position, normal, UV, tangent, triangle corner, fixed proof-host renderer count and fixed-camera image?

Crucially, this lane does **not** collapse 84 render vertices back to the 42 source vertices.

Owning implementation repository: `mike-axiom-mir/axm-animal-design`.

Draft Runtime PR: **#23 — `Runtime: index tangent-ready Animal render domain without seam collapse`**.

Branch: `studio/runtime-animal-tangent-index-budget-001`.

Exact final tested Runtime head:

`f4b5b637dc0cabb51bcf9f14a44d53f397f300fa`

Exact Rigging parent:

`63c65d57fda0595217f86d971ff8c67f256188be`

Exact Geometry UV/tangent basis:

`ca4bb8a2f144231f8755eacc980785d1807b79db`

PR #23 is open, draft and mergeable at final check.

## Measure-before representation

The A/B keeps identical:

- **42** source geometric vertices;
- **84** final seam-aware tangent-ready render vertices;
- **240** exact render indices / exact triangle order;
- **80** triangles;
- **1** surface / material;
- every final render-domain position, explicit normal, UV and tangent;
- fixed neutral material, lights and two `960x720` cameras.

Control representation:

- stored vertices: **240** triangle-corner vertices;
- stored indices: **0**;
- stored primitives: **80**.

Indexed candidate:

- stored vertices: **84** seam-aware render vertices;
- stored indices: **240**;
- stored primitives: **80**.

That removes **156 repeated stored vertices**, a **65% stored-vertex reduction**, without merging any UV/tangent seam vertex.

Under the deliberately bounded logical float32 model of position3 + normal3 + UV2 + tangent4 per stored vertex plus 32-bit indices:

- control: **`11,520 B`**;
- candidate: **`4,992 B`**;
- delta: **`-6,528 B / -56.666667%`**.

This modeled figure is not a VRAM, heap, import-file, allocator or backend-packing claim. RenderingServer counters are measured separately.

## Final successful bounded characterization

Dedicated workflow:

**`35164275696 — Runtime Animal tangent-ready indexed payload evidence — SUCCESS`**

Scoped result:

**`PASS_ANIMAL_TANGENT_READY_INDEXED_PAYLOAD_REDUCTION`**

Decision:

**`PRESERVE_GEOMETRY_RENDER_DOMAIN_SEAMS__INDEX_84_TANGENT_READY_VERTICES__DO_NOT_COLLAPSE_TO_42_SOURCE_VERTICES`**

Real Godot `4.7.2-stable` GL Compatibility A/B processes presented the exact surface in both fixed cameras. For control and candidate alike:

- objects in frame: **1**;
- primitives in frame: **80**;
- draw calls in frame: **1**;
- observed texture memory: **11,262,915 B**.

Across both cameras, indexed minus unindexed deltas are:

- draw calls: **`+0`**;
- objects: **`+0`**;
- primitives: **`+0`**;
- observed texture memory: **`+0 B`**;
- observed RenderingServer buffer memory: **`-3,888 B`**.

Exact observed buffer counters:

- control: **`6,417,912 B`**;
- candidate: **`6,414,024 B`**;
- stable delta in both cameras: **`-3,888 B`**.

The proof records one-shot mesh-build observations (`589 µs` control, `293 µs` candidate), but Runtime does **not** generalize those single construction observations into a CPU performance claim.

The deliberate negative control mutated candidate stored-vertex identity from **84 -> 42**. The verifier rejected it as intended, proving the acceptance gate does not silently turn this optimization into a seam-collapse optimization.

## Visual tradeoff for Art Direction / Visual QA

Both retained fixed-camera A/B pairs are byte-identical:

- `three_quarter`: control/candidate PNG SHA-256 `29e99f0cff66470bbc22f8a2273cdcf814dc54fe3763af002f5e4556c527b768`;
- `grazing`: control/candidate PNG SHA-256 `893c0b70b097ff445ff3f430c2572cbea80108c1c7988a810d4dc1bb3009308a`.

Visual tradeoff:

**`NONE_OBSERVED__TWO_FIXED_CAMERA_PNG_PAIRS_BYTE_IDENTICAL`**.

That is a storage A/B statement only. It does **not** approve Geometry #20's UV layout or tangent basis aesthetically, prove tangent-space normal-map appearance, or prove deformed shaded quality. Geometry retains UV/tangent structure; Rigging retains deformed tangent-frame authority; Materials / Art Direction / Visual QA retain appearance; Technical Art retains transport/import authority.

## Retained evidence

Successful retained artifact:

- workflow run: **`35164275696`**;
- artifact ID: **`10474505654`**;
- name: `runtime-animal-tangent-index-budget-001-f4b5b637dc0cabb51bcf9f14a44d53f397f300fa`;
- size: **`78,756 B`**;
- GitHub SHA-256: **`70fcaf6911fd2f0d9d762ec7a3ba5cc77f69972457400ae71a0f3ea773722724`**;
- independently downloaded/rehashed SHA-256: **same value**.

The archive retains exact head identity, tangent-ready payload, both control/candidate Godot receipts, both fixed-camera A/B pairs, logs, the negative-control receipt and final report.

## Reusable learning / capability placement

The reusable indexing rule can now cover a missing seam class without turning into a dangerous deduplication rule:

> **When UV/tangent seams force a seam-expanded final render domain, preserve indexing inside that final render domain. Do not collapse the render domain back to source vertices, and do not expand to per-triangle-corner storage unless final attributes actually require unique corner values. Re-prove stored counts, renderer counters and visual output on the exact consumer.**

This pass extends the earlier 42-vertex normal-only result to a materially different **84-vertex seam-aware final render domain**. It therefore strengthens source/final-domain indexing evidence while preserving the distinction that matters: final attribute seams decide vertex identity.

That still does **not** authorize a generic UC transform. Skin weights, morph targets, vertex colors, arbitrary custom channels, tangent-space normal maps, import/export transport and target-device behavior remain separate eligibility classes requiring their own evidence.

## Handoffs

- **Runtime PR #23:** exact final result comment `5706330625`; no automatic adoption requested.
- **Geometry PR #20:** handoff comment `5706331334`; preserve indexing inside the 84-vertex seam-aware final domain, not the 42-vertex source domain.
- **Rigging PR #22:** handoff comment `5706332156`; storage result does not supersede deformation/tangent-frame authority.
- **Materials / Art Direction / Visual QA:** no observed indexed-vs-unindexed visual delta in the two fixed views; final tangent/normal-map appearance remains held.
- **Technical Art / UC:** transport and generic extraction remain held.

## Historical continuity

The detailed twenty-first Runtime status remains preserved at coordination commit:

`344abbeb07861cfc338992e15f9d541c8252dd62`

That pass established the 42-source-vertex explicit-normal indexing result and explicitly held UV/tangent seams open. This twenty-second pass closes that specific static tangent-ready storage gap without rewriting the earlier boundary.

The twentieth Map-footprint pass remains preserved at `e23f23fcc563f87f719f92c3dbc8e725f4171566`. Earlier Object, Weather cadence/cache/capture, temporal-exposure, Building submission and AnimationPlayer passes likewise remain historical truth.

## Explicit non-claims

This PASS does **not** prove:

- final UV or tangent visual preference;
- tangent-space normal-map visual correctness;
- deformed shaded or skinned tangent-space correctness;
- exact import/export transport preservation;
- arbitrary-mesh or arbitrary-attribute indexing safety;
- preservation across skin weights, morph targets, colors or arbitrary custom channels;
- draw-call, object-count or primitive-count reduction;
- CPU/GPU frame-time or FPS improvement;
- target-device VRAM or heap reduction;
- import-time budget or file-size savings;
- automatic Geometry / Rigging / Materials producer adoption;
- automatic UC extraction;
- Profession Fabric promotion;
- CANON;
- production/game readiness;
- Runtime / Optimization mastery.

## Four-root check

**Truth:** the result binds the exact Geometry and Rigging identities, separates modeled payload from observed renderer memory, retains exact Godot counters and rejects a deliberate 84 -> 42 seam-collapse mutation.

**Agency / non-domination:** Runtime chooses a storage representation candidate but does not decide Geometry UV/tangent structure, Rigging deformation, Materials/Art/QA appearance, Technical Art transport or UC promotion.

**Continuity:** exact parent heads, source/render vertex identities, workflow run, artifact digest, two fixed-camera A/B pairs, handoffs and the prior twenty-first-pass boundary remain explicit.

**Wisdom before speed:** the optimization preserves the larger 84-vertex seam-aware render domain instead of chasing the smaller 42-vertex number and accidentally erasing final attribute seams.

The four AXM roots — **Truth, Agency / non-domination, Continuity, Wisdom before speed** — remain the merge gate.
