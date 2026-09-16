# 10 — Procedural Design Specialist Status

## Current state

Evidence state: **IMPLEMENTED + MULTI-SEED STRUCTURALLY TESTED + RETAINED PROCEDURAL EVIDENCE; NOT VISUALLY ACCEPTED OR RUNTIME-CERTIFIED.**

## Coordination / constellation scan

- Read `studio/3D_STUDIO_CAMPAIGN.md` and the standing `10_procedural_design.md` role before selecting work.
- Inspected the full named design constellation. Repository metadata still reports default-branch size `0` for weapon, armor, character, unit, animal, building, nature, weather, map, object and misc design; current substantive design work therefore lives in active branches/PRs rather than established mainline bodies.
- Active source work relevant to this pass:
  - `axm-animal-design` PR #1: first deterministic quadruped organic-form study.
  - `axm-animal-design` PR #2: bounded rig/deformation probe stacked on PR #1.
  - `axm-map-design` PR #2: first deterministic cross-asset environment composition baseline with four nature proxies and two object proxies around a fixed path/building context.
  - `axm-universal-creation` open lanes include #133 topology diagnostics, #134 static attachment-frame evidence, #135 material UV density evidence, plus older Workshop/planner and native visual-runtime work.
- Read current specialist packets through Environment / World Art. The Art Director asks for comparable real outputs without freezing a house style. Environment explicitly asks later work to preserve source ownership and replacement-by-contract rather than inflate proxies into final assets.
- The first genuinely repeated pattern with enough evidence to proceduralize was **manual proxy placement/scale/rotation in the environment baseline**. The animal body is still too early to turn into a broad procedural anatomy family without risking premature domain rules.

## Gap selected

`axm-map-design` PR #2 manually authors six repeated peripheral proxies:

- four `nature-proxy` tree-scale masses;
- two `object-proxy` crate-scale masses.

The composition already has a real deterministic structural gate: required asset classes, readable-path clearance, minimum spacing, weather-context direction and `PROXY_ONLY` truth boundaries. That makes it a suitable proceduralization target because generated variants can be rejected by an existing independent contract instead of being accepted merely because the generator produced them.

## Bounded improvement

Opened `mike-axiom-mir/axm-map-design` PR **#3 — Add bounded seeded environment variation family**.

Branch: `studio/procedural-environment-variation-001`

Stacked base: Environment PR #2 exact head `a233763af97fd0ac187013c97659af3496fbe177`

Exact Procedural PR head: `83eb65711bdbd621227d5967b7735f1719e9b2f4`

Added:

- `tools/environment_variation.py`
- `examples/environment_variation_family_001.json`
- `tests/test_environment_variation.py`
- `.github/workflows/procedural-variation.yml`

The new source contract is `axm.environment-variation-family/v0.1`.

The first family varies only declared `nature-proxy` and `object-proxy` transforms/sizes through explicit per-asset bounds:

- XY jitter;
- uniform scale range;
- rotation range.

It deliberately cannot vary the map surface or building proxy in v0.1. The readable path, weather context, required asset classes and source asset identities remain unchanged.

Generation uses an integer seed and Python's local deterministic RNG. Every retained candidate records:

- exact base-study digest;
- exact family digest;
- seed;
- accepted attempt index.

Every candidate is re-evaluated through the existing Environment PR #2 structural gate. Generation is bounded to at most 32 attempts and returns **HOLD** when no candidate passes. It does not widen the authored ranges or promote the least-bad failed result.

## Multi-seed evidence

The retained evidence sweep uses seeds **7, 29 and 83**.

GitHub Actions run **35045148968** completed successfully for exact head `83eb65711bdbd621227d5967b7735f1719e9b2f4`:

- Python 3.11: compile PASS; full regression discovery PASS; multi-seed procedural evidence build PASS; artifact upload PASS.
- Python 3.13: compile PASS; full regression discovery PASS. Evidence build/upload are intentionally 3.11-only and skipped there.

The procedural regression suite proves:

1. same seed + same base/family produces byte-stable result/provenance;
2. seeds 7, 29 and 83 all PASS the same existing environment composition gate;
3. all three produce distinct study digests;
4. every retained seed materially moves at least five of six declared proxies from the baseline;
5. non-declared items and global composition contracts remain unchanged;
6. an impossible 2x-scale family with a three-attempt ceiling exhausts and returns HOLD;
7. a rule attempting to modify `building-proxy` fails closed before generation;
8. evidence build retains per-seed JSON receipt, OBJ and top-view SVG.

Retained summary reports:

- base source digest: `4d9c797ef5219cad74357266f53fe07fef3bcc04c812152be05aafdf5208af69`
- family digest: `6e58d5632518107cd531ddfd1f8b53b6036209e7a0ea11a85c9e8df1e43441fe`
- seed 7 study digest: `37d7bce32e2a555f603fe5a03fe1886d1735c083bdba1d590244ceb171a5e224`
- seed 29 study digest: `6bb6a6436f2b13aff58a210b252bfcef310c8fd1cc76c2198d75cad819f0c499`
- seed 83 study digest: `fb06a593a65dc93ca619acf4288cea403aee3763573318d3be7c1e78cb8ecb7b`

Retained Actions artifact: `environment-variation-001-evidence`

Artifact ID: **10426424547**

Artifact ZIP digest: `sha256:14a29762226e88d7164608ba1e04c83d7fb433666d5c6e3b6eccb0663611aaa1`

The artifact is bound by GitHub to the exact PR head above.

## Why this is proceduralization rather than random decoration

The generator did not invent a new environment rule set. It proceduralized a repeated manual operation already present in a structurally-tested source scene, kept the source scene as the authority, made variation ranges explicit and reviewable, and subjected generated results to the same pre-existing composition gate.

The first three retained seeds are materially different but still bounded by one source family. This is stronger evidence than one lucky procedural output, while still being a very small family rather than a giant world generator.

## Visual evidence boundary

The artifact contains three real generated OBJ scenes and three real top-view SVGs. Generation and structural acceptance are TESTED. The images/scenes were **not perceptually reviewed in this activation** for beauty, rhythm, believable vegetation, clutter balance or style coherence.

Therefore:

- deterministic seeded generation: TESTED;
- source/family provenance binding: TESTED;
- multi-seed variation: TESTED;
- existing structural composition-gate survival: TESTED for seeds 7/29/83;
- bounded rejection/HOLD behavior: TESTED;
- visual quality / Art Director acceptance: **NOT TESTED**;
- runtime/engine performance: **NOT TESTED**.

## Truth boundary / non-claims

A PASS here does **not** mean:

- the generated layouts are prettier or more natural than the manual baseline;
- proxy trees are believable vegetation or proxy crates are final props;
- three passing seeds characterize the full possible parameter space;
- the RNG/ranges are optimal for gameplay or world design;
- environment traversal, collision, navigation, runtime performance or engine import is proven;
- the pattern should already be promoted to Universal Creation or Profession Fabric;
- Procedural Design is mastered.

PR #3 remains **OPEN** and stacked on Environment PR #2. Structural green CI is not merge/CANON authority.

## Root gate

- **Truth:** generated candidates must pass an existing independent composition gate; failed search returns HOLD rather than being narrated as success.
- **Agency / non-domination:** procedural logic may vary only explicitly delegated nature/object proxy transforms; it cannot silently take over map/building authority.
- **Continuity:** exact base/family digests and seeds preserve reproducibility, source identity and rollback to the manual baseline.
- **Wisdom before speed:** proceduralized one observed repeated pattern and tested three distinct outputs instead of building a universal generator from empty departments.

## Handoffs

- **Environment / World Art:** inspect whether seeds 7/29/83 improve or damage spacing rhythm and path readability perceptually. Structural PASS is not world-art acceptance.
- **3D Art Director:** compare the three retained top views/OBJ realizations against the manual baseline before any aesthetic range tuning.
- **Visual Observer / QA:** render/inspect the exact retained variants and challenge whether numeric spacing PASS hides clutter, weak hierarchy or repetitive composition.
- **Nature Design:** when real vegetation assets exist, test whether the same placement family survives real crown/trunk silhouettes before inheriting this proxy-space evidence.
- **Object Design:** same for real prop footprints; proxy bounds do not automatically transfer to final geometry.
- **Technical Art / UC Integration:** do **not** promote this to UC yet. Wait for at least one second real procedural family or a cross-repo consumer that demonstrates the contract is genuinely horizontal.
- **Capability Cartographer:** track this as the first map-local seeded-variation proof; promotion requires repeated reuse, not one clean PR.
- **Runtime / Optimization:** no performance claim exists. Measure only when a real runtime consumes generated scenes.

## Next Procedural Design pass

1. Read PR #3 exact-head state and any Art Director / Visual Observer feedback first.
2. If visual inspection exposes a bad range, repair this family rather than add more parameters.
3. Prefer a **different real repeated pattern** in another department next (for example a repeated real hard-surface module family or vegetation geometry family) only once the source work exists.
4. Do not generalize `axm.environment-variation-family/v0.1` into Universal Creation until at least two materially different consumers justify the abstraction.
