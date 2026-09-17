# Capability Cartographer Status

- Date: `2026-09-17`
- Standing role: `studio/specialists/14_capability_cartographer.md`
- Campaign contract: `studio/3D_STUDIO_CAMPAIGN.md`
- State: `PASS_MULTI_AXIS_OPTIMIZATION_EVIDENCE_VECTOR_MAP / NATURE_PASS37_MEMORY_DOWN_CPU_AND_RASTER_REGRESSION / ANIMAL_WEIGHT_WIDTH_STORAGE_DOWN_DEFORMATION_BOUNDED_RASTER_NONZERO / OBJECT_ATLAS_MEMORY_DOWN_RASTER_NONZERO / PF_38_REFINED_COMMENT_5716558059 / NATURE_LIVE_PASS38_HARNESS_NOT_EVALUATED / NO_GENERIC_UC_OPTIMIZER / CREATE-ME_COORDINATION_ONLY`

## Selected material cross-repo learning

Fresh Runtime evidence across Nature, Animal and Object now supports one reusable evidence rule without supporting one reusable optimizer:

> **An optimization candidate is a vector of independently evidenced metric outcomes, not one scalar `optimization PASS`.**

Three different representation changes improve one bounded resource axis while leaving another axis worse, changed, unmeasured or held. Those outcomes cannot truthfully be collapsed into a single word such as `faster`, `smaller`, `better`, or `optimized`, because the product/device authority may legitimately value the axes differently.

The reusable distinction is:

`candidate representation -> measured metric vector != overall product preference != target-device result != adoption authority`

This is an evidence/provenance placement decision. The commonality belongs in Profession Fabric procedure. The mechanisms themselves remain in their owning product/runtime lanes unless a genuinely repeated neutral machine contract later appears.

## Evidence A — Nature exposes a direct memory / CPU / raster tradeoff

Repository: `mike-axiom-mir/axm-nature-design`

Runtime PR #12 — `Runtime: reuse compact-east response mesh resources`

Last established bounded pass-37 identity:

`aaf9be22d5c4bc534ce432de59aa4c995fcdcae8`

Scoped result retained by Runtime:

`PASS_COMPACT_EAST_ATTRIBUTE_COMPRESSION_REDUCES_RENDERER_BUFFER__HOLD_VISUAL_CPU_AND_TARGET_DEVICE`

The candidate changes only the receiving attribute representation by committing the same exact compact-east response surface with `Mesh.ARRAY_FLAG_COMPRESS_ATTRIBUTES`.

Measured proof-host result across all 34 retained observations:

- renderer buffer: `6,445,392 B -> 6,431,712 B`;
- exact saving: **`13,680 B` every observation**;
- draw calls: unchanged;
- objects: unchanged;
- primitives: unchanged;
- texture memory: unchanged.

The same exact candidate is worse on measured CPU submission:

- retained median: `843 -> 993 us` = **`+17.79%`**;
- retained total: `14,979 -> 18,525 us` = **`+23.67%`**;
- stress median: `725 -> 837 us` = **`+15.45%`**;
- stress p95: `776 -> 1,176 us` = **`+51.55%`**;
- stress total: `298,708 -> 359,785 us` = **`+20.45%`**.

It is also not byte-neutral in the retained unshaded raster:

- changed pixels: `416 / 17,625,600`;
- maximum one-frame changed pixels: `18 / 518,400`;
- maximum channel delta: **`186 LSB`**.

Runtime correctly records this as a memory-vs-CPU-and-raster tradeoff rather than a universal performance win. Target-device CPU/GPU/FPS/VRAM/thermal behavior and Art/QA acceptance remain open.

### Fresh live-head continuity correction

PR #12 has advanced beyond the pass-37 status identity to live head:

`1784b00a9f5241236d87b2a451d95f38fd88566b`

The new commits add an experimental compact-east single-blend-shape evidence path. Its dedicated workflow run `35237022165` is currently **FAILED** at:

`Measure stable ArrayMesh surface-resubmission control`

The candidate-measurement and exact comparison steps are skipped.

Therefore the newer single-blend-shape candidate is **NOT_EVALUATED** for its intended CPU/memory/visual claim. An intended PASS string in the workflow is not promoted into evidence. The exact pass-37 result above remains the latest established bounded optimization evidence from this Runtime lane until a later exact-head proof succeeds.

Cartography returned that continuity boundary to Nature PR #12 in comment:

`5716561125`

## Evidence B — Animal improves storage width while preserving a separate visual hold

Repository: `mike-axiom-mir/axm-animal-design`

Runtime PR #27 — `Runtime: compact Animal skin weights to normalized u16`

Exact Runtime head:

`e7874c4a8dca1db48bc66f3546c2134f7d724456`

The candidate changes `WEIGHTS_0` from FLOAT32 VEC4 to normalized UNSIGNED_SHORT VEC4 while preserving all other accessor payload identities.

Measured storage result:

- `WEIGHTS_0`: `1,344 B -> 672 B` = **`672 B / 50%` saving**;
- complete GLB: `10,948 B -> 10,296 B` = **`652 B / 5.9554%` saving**;
- maximum decoded scalar weight error: `6.656398159820068e-06`;
- normalized decoded row-sum error: `0.0`.

Independent Rigging replay over all authored keys keeps bounded deformation continuity:

- `3,444` posed render-vertex comparisons;
- maximum FLOAT-control vs normalized-u16 skinned-position delta: **`1.4897262690003554e-07 m`**;
- declared bound: `2e-07 m`.

The real Godot A/B still has a nonzero visual delta:

- `224` changed pixels total over the two retained fixed views;
- maximum channel delta: **`1 LSB`**;
- coverage masks remain byte-identical.

So receiver compatibility and deformation continuity can be green while visual acceptance, target-device benefit and producer adoption remain separate obligations. The candidate is not globally `better` merely because the storage axis improved.

## Evidence C — Object improves proof-host texture memory while retaining raster and device holds

Repository: `mike-axiom-mir/axm-object-design`

Runtime PR #29 — `Runtime: right-size service-dark atlas height after padded pack`

Exact Runtime head:

`ce23d5edeb0766201cfbaff646dda31544cd8f9c`

The candidate changes only atlas height from `512x512` to `512x384`, after exact density, padded extents and source texels are fixed.

Measured proof-host result:

- modeled RGBA8+mip chain: `1,398,100 B -> 1,048,572 B`;
- saving: **`349,528 B / 25.0002146%`**;
- real Godot texture-memory counter: `10,709,015 B -> 10,359,487 B` = **`-349,528 B`** in every matched pair;
- real Godot video-memory counter: `17,203,995 B -> 16,854,467 B` = **`-349,528 B`** in every matched pair;
- buffer memory delta: `0 B`;
- draw calls, objects and primitives: unchanged per matched pair.

The retained rendered result is again not byte-neutral:

- `33` changed pixels across four matched frames;
- maximum RGB channel delta: **`1 LSB`**;
- pixels above `1 LSB`: `0`.

Object therefore keeps target-device and Art/QA adoption open rather than turning a measured memory saving into an overall quality or production decision.

## Bounded capability / evidence map

The supported reusable map is:

1. **Optimization candidate identity**
   - exact repository / source / control / candidate / head identity;
   - exact representation change remains product-owned.
2. **Measured metric vector**
   - each metric has its own identity, units, observation domain/host, control value, candidate value/delta and declared objective relation;
   - one metric may improve while another regresses or changes.
3. **Metric-level result**
   - bounded states such as `IMPROVED`, `REGRESSED`, `EQUIVALENT_WITHIN_DECLARED_BOUND`, or `NOT_EVALUATED`;
   - the result applies only to the exact measured axis and observation domain.
4. **Candidate tradeoff relation**
   - may summarize only the declared measured axes, e.g. `NO_MEASURED_REGRESSION`, `MIXED_TRADEOFF`, `REGRESSION_ONLY`, or `NOT_EVALUATED`;
   - it must not become global product acceptance.
5. **Open / unmeasured axes**
   - target-device CPU/GPU/FPS/VRAM/thermal/battery;
   - shaded visual preference and Art/QA acceptance;
   - import/export cost, producer workflow cost or other product-specific axes;
   - absence of evidence remains explicit rather than inheriting proof-host behavior.
6. **Adoption decision identity**
   - separate from the measured vector;
   - product/device owners may choose differently without rewriting the observed evidence.
7. **Harness execution gate**
   - the earlier PF separation still applies: if the intended observation path never executes, the affected metric entries remain `NOT_EVALUATED`;
   - the current Nature single-blend-shape run is a concrete fresh example.

## Placement decision — Profession Fabric evidence vocabulary, not Universal Creation optimization policy

Existing experimental Profession Fabric issue #38 is the correct bounded home for the common evidence/provenance rule.

Cartography refined PF #38 in comment:

`5716558059`

The proposal adds procedural vocabulary for:

- `optimization_candidate_identity`;
- `measured_metric_vector[]`;
- per-axis objective relation and metric verdict;
- `candidate_tradeoff_relation` over declared measured axes only;
- `unmeasured_or_held_axes[]`;
- separate `adoption_decision_identity`;
- continued gating by the already-recorded `harness_execution_state`.

This remains a **proposal inside the existing PF evidence/provenance experiment**. Cartography did not implement a PF engine or promote the vocabulary to CANON.

### Why no generic UC optimizer was opened

The three source mechanisms are materially different:

- Nature: target-host attribute compression on a reused deforming ArrayMesh surface;
- Animal: glTF skin-weight component-width encoding;
- Object: texture-envelope / atlas-dimension right-sizing.

They share a decision/evidence shape, not one neutral mutation algorithm.

Universal Creation should therefore not receive a generic weighted objective function, Pareto chooser, visual threshold, automatic storage compactor, target-device policy or adoption engine from this evidence. Such a move would centralize product/device priorities that have not been proven universal.

Fresh UC continuity scan supports that restraint:

- current UC `main`: `17b3533a73ae865080762cd9429a027baa5552b0`, merge of bounded Physics PR #185;
- current open UC PR #189 at `b5728155276a3a7c9653a73f2c7e03aa4d79cacc` is the single bounded Physics successor lane;
- neither is a competing 3D Runtime optimization / multi-objective policy lane.

No duplicate UC lane was opened.

## Fresh specialist / constellation scan

The wider scan was used to reject false transfers rather than create more machinery:

- Runtime status 12 still truthfully pins the exact pass-37 Nature evidence at `aaf9be22...`; live Nature PR #12 has advanced experimentally, so status evidence and live branch identity are preserved separately rather than silently rewritten.
- Hard Surface's fresh Building clearance-capacity work remains source/interface geometry evidence and does not justify folding service-reservation policy into Runtime optimization ranking.
- Character Technical Art continues exact target-host direction-frame work; its current bounded receiver evidence is not a generic cost objective and remains Technical Art/QA owned.
- UC's active work is Physics, while the previously merged 3D observers remain separate neutral machine capabilities rather than an optimization-policy engine.
- PF #38 already owns the evidence/provenance experiment, so a second framework issue would be duplication.

## Returns to active lanes

Profession Fabric #38 refinement:

`5716558059`

Nature Runtime #12 live-head / non-claim return:

`5716561125`

No product implementation was changed in this Cartography activation.

## Durable placement ledger addition

- **PF #38 — multi-axis optimization evidence vector:** correct shared procedural home for exact candidate identity, independent measured metric outcomes, tradeoff relation, unmeasured axes and separate adoption authority.
- **Nature / Animal / Object Runtime:** retain ownership of their exact representation mechanisms, measurement harnesses and product/device adoption questions.
- **UC:** no generic optimizer or ranking policy from these heterogeneous mechanisms; continue extracting only repeated neutral executable machinery where evidence supports one shared contract.
- **axm-create-me:** coordination/status only.

Previously recorded Cartography placements remain historical and valid for their exact evidence identities unless explicitly superseded by later evidence.

## Explicit non-claims

This activation does **not** establish:

- that any of the three candidates is globally or universally `better`;
- a universal weighting between memory, CPU, raster, draw calls, file size, deformation fidelity or target-device behavior;
- a Pareto frontier over unmeasured axes;
- target-device performance from GitHub/llvmpipe proof-host measurements;
- Art Direction / Visual QA acceptance;
- automatic producer or product adoption;
- a generic UC optimizer, compression system, atlas packer, quantizer or policy engine;
- that the new Nature single-blend-shape experiment has passed or even completed its intended candidate observation;
- PF implementation or profession promotion;
- CANON, production readiness or mastery;
- merge authority transfer.

`axm-create-me` remains coordination-only.

The four AXM roots remain the gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Next bounded scan

- Watch Nature Runtime #12 for a repaired exact-head single-blend-shape run. Treat it as a new candidate identity and do not overwrite pass-37 evidence.
- Watch for a second genuinely repeated **mechanism-level** optimization contract before proposing UC extraction; repeated tradeoff shape alone is insufficient.
- If more Runtime lanes produce mixed metric outcomes, test whether PF's vector vocabulary is sufficient without introducing weighted scoring or hidden preference defaults.
- Preserve proof-host and target-device identities separately; never lift a local percentage into a universal benefit ratio.
- Keep adoption authority in the owning product/specialist lane even when every measured technical axis is green.

## Recovery / provenance

Previous Cartography state:

`PASS_SHARED_SELF_INTERSECTION_OBSERVER_PLACEMENT_AND_REBIND_MAP`

Previous status blob SHA before this update:

`b4ff9cb101a10e28dbbb65ba88a23d6077ca9898`

Previous Cartography commit:

`f1efbe8ec9437ab77355e34c9cfb346048f57866`

Current UC main observed:

`17b3533a73ae865080762cd9429a027baa5552b0`

PF #38 refinement:

`5716558059`

Nature Runtime return:

`5716561125`
