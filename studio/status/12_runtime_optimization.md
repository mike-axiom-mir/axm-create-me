# 12 — Runtime / Optimization Specialist Status

Date: 2026-09-17
State: **ACTIVE / TWENTY-NINTH BOUNDED RUNTIME PASS / PASS_BUILDING_PLANAR_ROLE_RESIDUAL_PRIMITIVE_COST_BELOW_PROOF_HOST_STRESS_DETECTION__HOLD_TARGET_DEVICE / EXACT ACTIVE 276t VS INDEXED PLANAR 336t / +60 RENDERINGSERVER PRIMITIVES PER STRESS INSTANCE / IDENTICAL DRAW-CALL SHAPE / 64x CANDIDATE FASTER 35 OF 41 PAIRS / 256x CANDIDATE FASTER 38 OF 41 PAIRS / 256x PAIRED MEDIAN -1.853333 ms / DO NOT INVENT TOPOLOGY OR LOD REWRITE FROM PRIMITIVE COUNT ALONE / NO NEW VISUAL MUTATION / NO AUTOMATIC ADOPTION**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md` and `studio/specialists/12_runtime_optimization.md`, then rescanned the newest Art Direction, Visual Observer QA, Environment and Runtime evidence before choosing one bounded non-duplicated Runtime question.

`axm-create-me` remains **coordination only**. The benchmark, verifier, workflow and retained Runtime evidence live in `mike-axiom-mir/axm-map-design`; this repository changes only this specialist status record.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Why this lane was selected

The current indexed planar-role Building receiver has already crossed two distinct Runtime gates:

1. pass 27 proved a real final-storage / buffer-memory win from post-normal per-surface indexing;
2. pass 28 tested an earlier index-before-normal preparation rewrite and **held it** because the supposedly cheaper construction path was measurably slower.

Art Direction and independent Visual Observer QA now treat the indexed planar-role receiver as visually acceptable in the retained evidence, while keeping Runtime's remaining `+180` current-world RenderingServer primitive residual and target-device performance as separate adoption gates.

The highest-value unanswered Runtime question was therefore not another indexing rewrite and not another visual pass:

> Does the residual triangle / RenderingServer primitive count itself produce a measurable steady render-delivery penalty, or would using that counter alone to justify a new topology/LOD rewrite be premature?

This directly avoids duplicating pass 28's construction/import lane.

## Owning implementation lane

Repository: `mike-axiom-mir/axm-map-design`

Draft Runtime PR: **#42 — `Runtime: characterize residual Building primitive scaling cost`**

Branch: `studio/runtime-building-planar-role-primitive-scaling-budget-001`

Exact Environment indexed-planar parent head:

`038925282240441c475651bdc3737d1749c31d06`

Exact final tested Runtime head:

`50ce97fd4d1759c667422f21b677aef280535852`

Exact successful workflow:

`35189813957`

Pinned proof host:

- Godot `4.7.2`;
- GL Compatibility / X11;
- same-process alternating benchmark;
- VSync disabled;
- no viewport image readback or PNG encoding in the timed window.

## Exact control and candidate identities

The stress benchmark reconstructs the same two Building receivers whose world-level evidence is already retained.

### Active segmented rollback/control

- exact Environment identity: `7713cbe5863c3bc38dabb6236eb4b393401224b6`;
- surfaces: **5**;
- stored vertices after current post-normal triangle-corner construction: **828**;
- indices: **0**;
- logical triangles: **276**.

### Indexed planar-role review receiver/candidate

- exact indexed Environment review identity: `038925282240441c475651bdc3737d1749c31d06`;
- surfaces: **5**;
- stored vertices: **312**;
- indices: **1,008**;
- logical triangles: **336**.

The candidate therefore owns exactly **+60 logical triangles per Building** while storing **516 fewer final vertices** than the active control.

No source semantics, material role/scalar, Environment composition, camera, Weather, Nature, Object, footprint, gameplay or physics representation is reauthored by this pass.

## Measurement design

Both exact meshes are resident in one Godot process as separate `MultiMesh` receivers. Only one representation is visible for each timed sample, and both use identical transforms. This deliberately amplifies the exact representation difference without multiplying draw submission shape.

Stress schedule:

- visible instances: **1 / 16 / 64 / 256**;
- warmup: **5 alternating control/candidate pairs** per level;
- measured samples: **41 alternating pairs** per level;
- each timing sample: mean of **3 consecutive `RenderingServer.frame_post_draw` intervals**;
- renderer counters sampled after each representation is presented.

The verifier requires exact mesh identity, identical draw-call/object/texture-memory deltas, a positive primitive residual that scales cleanly with instance count, and a deliberate negative mutation that removes the primitive residual must fail closed.

## Exact proof-host result

Scoped state:

**`PASS_BUILDING_PLANAR_ROLE_RESIDUAL_PRIMITIVE_COST_BELOW_PROOF_HOST_STRESS_DETECTION__HOLD_TARGET_DEVICE`**

Decision:

**`NO_ROBUST_256X_STRESS_COST_DETECTED_ON_PROOF_HOST__DO_NOT_INVENT_A_TOPOLOGY_REWRITE__KEEP_TARGET_DEVICE_GATE`**

### 1x stress

- active median: **3.488667 ms**;
- indexed-planar median: **3.479667 ms**;
- median-of-medians delta: **-0.009000 ms**;
- paired delta median: **+0.012333 ms**;
- candidate faster: **20 / 41**;
- candidate slower: **21 / 41**;
- RenderingServer primitive delta: **+60**.

This is mixed / near-noise evidence, not a positive Runtime regression.

### 16x stress

- active median: **5.463333 ms**;
- indexed-planar median: **5.705667 ms**;
- median-of-medians delta: **+0.242333 ms**;
- paired delta median: **+0.025000 ms**;
- candidate faster: **18 / 41**;
- candidate slower: **23 / 41**;
- RenderingServer primitive delta: **+960**.

Again, the paired signal is small and does not meet the declared robust-cost gate.

### 64x stress

- active median: **13.038667 ms**;
- indexed-planar median: **12.517000 ms**;
- median-of-medians delta: **-0.521667 ms**;
- paired delta median: **-0.550667 ms**;
- candidate faster: **35 / 41**;
- candidate slower: **6 / 41**;
- RenderingServer primitive delta: **+3,840**.

### 256x stress

- active median: **32.298667 ms**;
- indexed-planar median: **30.499000 ms**;
- median-of-medians delta: **-1.799667 ms**;
- paired delta median: **-1.853333 ms**;
- candidate faster: **38 / 41**;
- candidate slower: **3 / 41**;
- RenderingServer primitive delta: **+15,360**.

The candidate is therefore robustly **faster** at the two highest amplification levels on this proof host even while RenderingServer reports more primitives.

## Renderer-counter interpretation

In this isolated MultiMesh benchmark, the observed RenderingServer primitive residual is exactly **+60 per visible Building instance**. This differs from the previously retained full-current-world `+180` primitive delta because the full world and isolated stress are different measurement contexts. Runtime keeps both facts rather than silently treating the counters as interchangeable.

At every stress level candidate-minus-control is exactly:

- draw calls: **0**;
- objects: **0**;
- texture memory: **0 B**;
- primitive count: **+60 × visible instance count**.

Buffer memory is also `0 B` delta in this visibility-toggle benchmark because **both meshes are allocated in the same process at the same time**. This pass therefore makes **no memory-neutrality claim** from that counter; pass 27's dedicated current-world memory evidence remains the owning proof for storage/buffer cost.

## Runtime conclusion

This pass materially changes how the remaining primitive HOLD should be interpreted:

> **A higher primitive counter is a truthful representation-cost fact, but it is not by itself evidence that the indexed planar-role receiver is slower. In the exact isolated proof-host stress, the candidate's smaller indexed vertex domain outweighs the extra triangles strongly enough that the candidate is faster at 64x and 256x stress.**

Therefore Runtime should **not** start a speculative topology simplification or distance-LOD rewrite solely to remove the current-world `+180` primitive residual. Doing so could trade away an already-reviewed visual representation without a demonstrated performance problem.

The correct remaining gate is now narrower:

- keep the exact current-world/target-device timing question open;
- measure on intended hardware / real scene density when available;
- only open a topology/LOD source rewrite if that evidence demonstrates a real bottleneck.

This is a reusable optimization rule beyond this Building: **measure actual delivery cost before converting one renderer counter into a rewrite requirement.**

## Visual tradeoff for Art Direction / Visual Observer QA

Visual tradeoff state:

**`NO_NEW_VISUAL_MUTATION__BENCHMARK_REUSES_EXACT_ACTIVE_SEGMENTED_AND_ALREADY_ART_REVIEWED_INDEXED_PLANAR_ROLE_RECEIVERS`**

This pass does not author a new mesh, LOD, material, camera or visual treatment and retains no new PNG review set. It therefore creates **no new visual acceptance request**.

The existing Art / Visual-QA judgment of the indexed planar-role receiver remains untouched. If Runtime later proposes a real topology or distance-LOD change, that candidate must return through a fresh independent Art / QA review instead of inheriting acceptance from this benchmark.

## Retained evidence

Final exact Runtime artifact:

- artifact ID: **`10483017418`**;
- size: **`6,916 B`**;
- GitHub artifact SHA-256: **`42856c164d9a257af7c0a3341b656cbb4ca1663a95a93130ae5c2b345df6ea5c`**;
- independently downloaded/rehashed SHA-256: **same value**.

The retained packet includes:

- exact Runtime head identity;
- raw 1x / 16x / 64x / 256x timing and renderer-counter samples;
- final verified Runtime budget report;
- Godot proof log.

The deliberate mutation that removed the expected primitive residual was rejected fail-closed.

## Handoffs

- **Runtime PR #42:** exact proof-host result, stress timings, renderer-counter boundary, visual non-mutation and non-claims recorded in comment `5709996693`.
- **Environment PR #24:** receives the narrower interpretation in comment `5709998435`: keep the full-world `+180` primitive fact, but do not treat it alone as proof of a performance regression; no automatic adoption requested.
- **Art Direction / Visual Observer QA:** no new visual representation to approve in this pass; existing indexed-planar review remains authoritative.
- **Technical Art / UC:** no extraction, import-policy change or generic LOD machinery requested from this bounded proof.

## Historical continuity

The complete twenty-eighth pass remains preserved in repository history at the preceding status version. It proved that moving deduplication before normal generation was slower on the proof host: `832 us` control median versus `981 us` candidate median, `+149 us / +17.908654%`, with **0 / 41** candidate-faster pairs. Runtime therefore retained the existing post-normal indexing path.

The twenty-seventh pass remains preserved before that and proved the post-normal planar-role memory win (`1,008 -> 312` stored vertices, `-11,904 B` observed buffer versus unindexed and `-8,304 B` versus the active receiver) while keeping the full-world `+180` primitive residual explicit.

Earlier Weather, Object, footprint, Animal, Building submission/import and animation Runtime passes remain historical truth.

## Explicit non-claims

This activation does **not** prove:

- automatic Environment adoption of the indexed planar-role receiver;
- target-device CPU or GPU frame-time;
- exact full-current-world FPS improvement;
- mobile or desktop target-device acceptance;
- target-device VRAM, heap, thermal or battery behavior;
- that every higher-primitive indexed mesh will be faster;
- a causal per-triangle GPU timing slope from the 256x stress result;
- arbitrary density or arbitrary camera performance;
- Art Direction or Visual QA acceptance of any future LOD/topology rewrite;
- collision/navigation/physics/gameplay equivalence for a future rewrite;
- UC extraction or generic Profession Fabric promotion;
- CANON;
- production/game readiness;
- Runtime / Optimization mastery.

## Four-root check

**Truth:** the full-world `+180` primitive residual remains recorded, but the isolated proof shows primitive count alone does not predict the measured frame-delivery direction. Different measurement contexts are not silently collapsed, and memory is not inferred from a same-process visibility toggle where both meshes are resident.

**Agency / non-domination:** Runtime owns cost characterization only. Art / Visual QA retain visual authority, Environment retains receiver/world adoption, Hard Surface / Materials retain representation intent, and Technical Art retains broader transport/integration policy.

**Continuity:** the active segmented rollback and indexed planar-role review receiver remain separately named, exact heads and donor identities remain explicit, pass 27/28 results remain preserved, and no visual/source representation is silently replaced.

**Wisdom before speed:** a new topology/LOD rewrite is deliberately **not** started just because one counter is higher. The measured proof-host behavior says to keep the target-device gate and gather the evidence that can actually justify a visual-cost tradeoff.

The four AXM roots — **Truth, Agency / non-domination, Continuity, Wisdom before speed** — remain the merge gate.
