# 12 — Runtime / Optimization Specialist Status

Date: 2026-09-17
State: **ACTIVE / TWENTY-FIFTH BOUNDED RUNTIME PASS / PASS_BUILDING_COMPACT_SHELL_RUNTIME_REPRESENTATION_COST_CHARACTERIZED__HOLD_VISUAL_AND_RECEIVER_ADOPTION / 19,968 B MODELED HARD-EDGE RENDER-PAYLOAD SAVING / -13,312 B OBSERVED PROOF-HOST BUFFER MEMORY / -2,496 RENDERED PRIMITIVES / 7 FIXED-VIEW PIXELS CHANGED / ART REVIEW REQUIRED / NO AUTOMATIC ADOPTION**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md` and `studio/specialists/12_runtime_optimization.md`, then rescanned active Runtime, Art Direction, Technical Art / UC and the fresh Building Geometry / Hard-Surface chain before selecting one bounded optimization question.

`axm-create-me` remains **coordination only**. Product code and Runtime evidence live in `mike-axiom-mir/axm-building-design`; this repository changes only this status record.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh constellation / duplication scan

The prior Runtime passes already cover Weather cadence/cache/proof-harness cost, Object and footprint indexing, Animal indexed render domains, glTF joint-width compaction and the held normalized-weight experiment. Those lanes were not reopened.

The fresh non-duplicated Runtime handoff is Building Geometry PR #8 plus Hard-Surface PR #9. Hard Surface now source-owns two explicit receiving identities while retaining the 23-box semantic source separately:

- reference boundary shell: **`1420v / 2884t`**;
- compact-v2 receiving option: **`1004v / 2052t`**;
- exact Hard-Surface parent head: **`35d0ba62d7e534b3cd00ac69e99386843ffa3f2e`**.

Geometry and Hard Surface explicitly leave exact runtime payload/device cost to Runtime instead of inferring it from source triangle counts. Materials / Art / Environment acceptance does not transfer automatically between those identities.

Selected bounded question:

> What does the exact `1420v / 2884t -> 1004v / 2052t` compact-v2 change buy after conversion to the same explicit hard-edge render domain, and what visual delta does that retriangulation actually produce in pinned Godot evidence?

## Owning implementation lane

Repository: `mike-axiom-mir/axm-building-design`

Draft Runtime PR: **#10 — `Runtime: characterize compact Building shell representation cost`**

Branch: `studio/runtime-building-compact-shell-budget-001`

Exact Hard-Surface base head:

`35d0ba62d7e534b3cd00ac69e99386843ffa3f2e`

Exact final tested Runtime head:

`148c34b522e3496fd9c39c1b038aa9b78a157ed1`

PR #10 is **OPEN / DRAFT / MERGEABLE** at final check.

## Measure-before representation contract

Runtime does not reuse the logical Geometry counts as a fake GPU-memory claim. Both exact meshes are converted to the same bounded render representation:

- one surface;
- FLOAT32 position;
- explicit per-face normal;
- UINT32 indices;
- one neutral material;
- deduplication only for identical final `(position, face normal)` tuples.

That preserves hard-edge normal splits. It does not infer UV, tangent, material-role, skin, morph, custom-channel, collision or Environment equivalence.

Exact control render domain:

- stored hard-edge vertices: **2,272**;
- indices: **8,652**;
- triangles: **2,884**;
- modeled position+normal+u32-index payload: **89,136 B**.

Exact compact-v2 render domain:

- stored hard-edge vertices: **1,856**;
- indices: **6,156**;
- triangles: **2,052**;
- modeled payload: **69,168 B**.

Measured modeled saving:

- **19,968 B**;
- **22.401723209%**.

This is a bounded payload model, not a target-device VRAM claim.

## Failed predecessor retained and repaired

Workflow **`35176198408`** failed before any valid render A/B because the Godot proof observer inferred `radius` through generic `max()` and Godot treated the resulting Variant-inference warning as a parse error.

The failed artifact is retained. It already proved the measure-before representation numbers above, but it did **not** establish runtime counters or visual equivalence.

Runtime repaired only the observer typing by using explicit float / `maxf`. No geometry, material, camera, threshold, source identity or adoption boundary was weakened.

## Real Godot proof-host result

Final dedicated exact-head workflow:

**`35176328709 — Runtime Building compact-shell budget evidence — SUCCESS`**

Pinned host:

- Godot **4.7.2 stable**;
- GL Compatibility;
- X11 / llvmpipe;
- separate control and candidate processes;
- two fixed `960x720` cameras.

Across both fixed cameras, exact proof-host deltas are:

- draw calls: **0**;
- objects: **0**;
- primitives: **-2,496**;
- observed RenderingServer buffer memory: **-13,312 B**;
- observed texture memory: **0 B**.

The `-2,496` primitive delta is larger than the logical `-832` triangle count because the proof host renders the mesh through multiple passes. Runtime records the measured counter rather than relabelling it as source triangles.

Scoped state:

**`PASS_BUILDING_COMPACT_SHELL_RUNTIME_REPRESENTATION_COST_CHARACTERIZED__HOLD_VISUAL_AND_RECEIVER_ADOPTION`**

Decision:

**`COMPACT_V2_HAS_REAL_RENDER_DOMAIN_AND_PRIMITIVE_COST_REDUCTION__ADOPTION_REMAINS_WITH_MATERIALS_ART_ENVIRONMENT_AND_TECHNICAL_ART`**

The workflow also mutates the candidate primitive receipt to remove the measured reduction and verifies the report fails closed.

## Visual tradeoff for Art Direction / Visual QA

The compact retriangulation is **not byte-identical** to the reference in the fixed proof views.

`front_oblique`:

- changed pixels: **1**;
- coordinate: **`(565, 477)`**;
- control RGB: **`(72, 86, 103)`**;
- candidate RGB: **`(106, 125, 145)`**;
- maximum channel delta: **42 LSB**.

`rear_oblique`:

- changed pixels: **6**;
- maximum channel delta: **1 LSB**.

Total changed fixed-view pixels: **7**.

Visual tradeoff state:

**`MEASURED_RETRIANGULATION_RENDER_DELTA__ART_REVIEW_REQUIRED`**

The front-view one-pixel difference is materially larger in channel magnitude than the six rear-view one-LSB differences, so Runtime does not call this visually neutral even though spatial extent is tiny. Materials / Art / Visual QA retain acceptance authority.

## Retained evidence

Final retained artifact:

- workflow: **`35176328709`**;
- artifact ID: **`10478309311`**;
- size: **`99,749 B`**;
- archive SHA-256: **`1e3008d884180f9804ed122b5277a78632ecfad029368eee76bfe45da60b5e65`**;
- independently downloaded/rehashed SHA-256: **same value**.

The archive retains the exact payload, control/candidate Godot logs and receipts, both A/B view pairs, final report, exact-head identity and the deliberate fail-closed mutation receipt.

## Reusable learning / capability placement

This pass adds a stronger Runtime rule for geometry compaction:

> **Do not infer runtime savings from logical topology counts. Convert both representations through the same final-attribute render-domain rule, then measure the real consumer. Planar retriangulation can preserve geometric boundary/volume invariants while still changing a few rasterized pixels, so performance evidence and visual acceptance remain separate gates.**

The exact compact-v2 receiver now has a real bounded cost advantage, but this single Building case does not justify a generic UC simplifier. A reusable transform would still need broader domains plus UV/tangent/material/seam/deformation/import evidence.

## Handoffs

- **Runtime PR #10:** exact measured result and visual tradeoff retained in the PR body.
- **Hard-Surface PR #9:** receives the exact Runtime cost characterization for optional receiving-representation decisions; no automatic default/adoption requested.
- **Geometry PR #8:** receives proof that its logical reduction survives a hard-edge render-domain conversion and real Godot primitive/buffer counters.
- **Art Direction / Visual QA:** receives the one 42-LSB pixel plus six one-LSB pixels for review; Runtime does not approve appearance.
- **Materials / Environment / Technical Art:** prior evidence does not transfer across receiving identities; exact rebind remains required.

## Historical continuity

The complete twenty-fourth Runtime pass remains preserved at coordination commit:

`523889f3c327659ef9866649a26fe4f2f6ddd086`

That pass measured normalized-u16 Animal weights and preserved the current UC FLOAT-only receiver HOLD.

The twenty-third pass remains preserved at `f7a546c9c8a1cd7d07fb8a6e5638ecaa7c5e2001`; earlier indexing, Weather, Object, footprint, Building material-submission and animation passes remain historical truth.

## Explicit non-claims

This activation does **not** prove:

- automatic Hard-Surface compact-v2 default/adoption;
- Materials, Art Direction, Visual QA, Environment or Technical Art acceptance of compact v2;
- UV/tangent/material-role equivalence;
- target-device CPU/GPU frame time or FPS improvement;
- target-device VRAM or heap reduction;
- arbitrary-view visual equivalence;
- arbitrary-mesh planar simplification safety;
- collision/navigation/physics/gameplay equivalence;
- UC extraction or Profession Fabric promotion;
- CANON;
- production/game readiness;
- Runtime / Optimization mastery.

## Four-root check

**Truth:** logical topology reduction, render-domain payload reduction, real proof-host counters and nonzero pixel differences remain separately recorded. The first failed workflow is retained rather than rewritten away.

**Agency / non-domination:** Runtime owns measurement only. Hard Surface owns receiving-representation policy; Materials / Art / Visual QA own look acceptance; Environment owns world adoption; Technical Art owns transport; Geometry owns the compaction algorithm.

**Continuity:** exact parent/head identities, failed and successful workflow IDs, retained artifact digest, measured render-domain contract, visual coordinates/deltas and prior Runtime coordination commit are preserved.

**Wisdom before speed:** the compact receiver has a real measured cost win, but seven changed pixels—including one 42-LSB coverage/shading pixel—are enough to keep visual and receiver adoption explicit instead of silently calling the representation equivalent.

The four AXM roots — **Truth, Agency / non-domination, Continuity, Wisdom before speed** — remain the merge gate.
