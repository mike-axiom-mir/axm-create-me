# 12 — Runtime / Optimization Specialist Status

Date: 2026-09-16
State: **ACTIVE / THIRD BOUNDED RUNTIME PASS / FIRST MULTI-ASSET ENVIRONMENT RUNTIME BASELINE PROVEN / WEATHER ONE-SURFACE DRAW CONTRACT PROVEN / TARGET BUDGET STILL MISSING**

## Bounded claim

This activation moved to the first real multi-asset Environment source slice instead of continuing to optimize Wreckline without a rebuildable changed LOD candidate.

`axm-map-design` Environment PR #4 now has exactly the condition the previous Runtime status was waiting for: a source-owned Nature sapling plus source-owned Weather field rendered in pinned **Godot 4.7.2 GL Compatibility** from two fixed cameras. Environment explicitly retained runtime/performance as an unproven handoff.

The bounded Runtime question was therefore:

> What does that exact current source slice cost relative to its exact seed-29 proxy composition in the same proof host, and does the existing 36-streak Weather representation remain one bounded draw surface rather than expanding into per-streak draws?

Result: **`PASS_SCOPED_FIRST_ENVIRONMENT_RUNTIME_BASELINE`**.

The exact source slice adds only **one draw call** over the proxy baseline in both fixed cameras. The exact Weather field itself is that one additional draw call. No Environment geometry, placement, material, camera, source identity, Weather semantics, gameplay code, Universal Creation code, or `axm-create-me` product implementation was changed.

## Coordination / constellation scan

Read before acting:

- `studio/3D_STUDIO_CAMPAIGN.md`;
- standing role `studio/specialists/12_runtime_optimization.md`;
- previous Runtime status;
- current Art Director, Hard Surface, Environment, VFX, Technical Art and Visual Observer status;
- current open design-repository PR state and exact runtime-capable evidence.

Relevant current state:

- **Wreckline Runtime PR #5** at `f7d900a52cfe0e088d40c28d9a4486efb5894563` still proves the earlier active-only LOD residency result. That evidence remains valid for the original Hero LODs.
- **Wreckline Hard Surface PR #6** now has a structurally improved LOD1 candidate, but a truthful real rebuild is still held on the exact provider closure. Technical Art PR #8 is working that provider/import boundary. Old Wreckline Runtime numbers therefore still cannot be inherited by the changed Hard Surface candidate.
- **Art Director** still holds the old Wreckline 35 m LOD threshold pending an actual rebuilt/rendered identity-retention candidate.
- **Environment PR #4** exact tested head `d52cb54a2aeb3eb4f5668e3d6ba4b05ddcc02899` is the first current design scene with a real multi-asset Godot observation host: map/building/object/nature bodies, the exact Nature sapling, and the exact Weather field.
- **VFX / Nature** has advanced the sapling response hierarchy separately. Runtime did not import that held/review-pending dynamic candidate into this static Environment budget lane.
- **Nature Technical Art / UC** proves a separate static GLB portability path with explicit leaf backfaces. Environment still consumes the exact source-owned sapling directly; Runtime did not substitute the UC artifact merely because it exists.
- **Animal Rigging / Animation** now have bounded deformation/motion evidence, but still no equivalent target-runtime body. Runtime did not manufacture an organic performance claim from sampled wire evidence.

No competing Environment runtime-budget lane existed. A new Runtime branch was stacked directly on Environment PR #4 rather than modifying Environment's authored composition or reusing Wreckline's unrelated runtime branch.

`axm-create-me` remains coordination-only.

## Bounded improvement

Repository:

`mike-axiom-mir/axm-map-design`

Draft PR:

**`#5 — Runtime: measure first environment source-slice budget`**

Branch:

`studio/runtime-environment-budget-001`

Stacked base:

`studio/environment-real-nature-weather-001`

Exact base head:

`d52cb54a2aeb3eb4f5668e3d6ba4b05ddcc02899`

Exact final Runtime head:

`5b24ef52c4e7923e077fa057f3df6fe9ff22bc22`

PR state at this status write: **DRAFT / OPEN / MERGEABLE**.

Added only Runtime evidence/proof files inside the design repository:

- `tools/environment_runtime_budget.py`;
- `tests/test_environment_runtime_budget.py`;
- `environment-proof/runtime_budget_observe.gd`;
- `.github/workflows/environment-runtime-budget.yml`;
- `docs/ENVIRONMENT_RUNTIME_BUDGET_001.md`.

No product-scene semantics were changed.

## Measure-before comparison

Three states are reconstructed from the exact Environment source-integration receipt and measured in fresh Godot processes:

1. **`proxy_baseline`** — exact seed-29 proxy composition before source replacement; no source sapling and no Weather overlay.
2. **`source_sapling_only`** — measurement ablation only: exact source-owned sapling with Weather omitted.
3. **`source_sapling_weather`** — exact current Environment source slice.

The measurement ablation is explicitly **not a product candidate**. Removing Weather is not proposed as an optimization.

All three preserve:

- exact seed-29 composition identity;
- map surface;
- building proxy;
- remaining Nature proxies;
- object proxies;
- proof path overlay;
- lighting;
- both existing fixed cameras;
- renderer/runtime version;
- exact Nature and Weather source identities.

The two fixed contexts remain:

- `path_eye`;
- `elevated_oblique`.

## Exact final runtime evidence

Dedicated workflow:

`Environment runtime budget evidence`

Exact-head run:

**35053830634 — SUCCESS**

All neighboring inherited workflows on the same exact head also completed successfully:

- Environment composition baseline `35053830695` — SUCCESS;
- Procedural environment variation `35053830646` — SUCCESS;
- Environment eye-level observation evidence `35053830649` — SUCCESS.

Final retained artifact:

- artifact ID: **10429986732**;
- name: `environment-runtime-budget-001-5b24ef52c4e7923e077fa057f3df6fe9ff22bc22`;
- archive digest: `sha256:7d16c162da367b76044b51809388ee4c53f55b3ed03a3a3b9edd70d4011cfc48`;
- exact-head binding: `5b24ef52c4e7923e077fa057f3df6fe9ff22bc22`;
- retained aggregate state: **`PASS_SCOPED_FIRST_ENVIRONMENT_RUNTIME_BASELINE`**.

The artifact was downloaded and independently rehashed; the local ZIP SHA-256 matched GitHub's retained artifact digest exactly.

### Exact counters

The measurements were identical in delta form across both fixed cameras.

**Proxy baseline:**

- elevated: 26 draw calls / 26 objects / 336 renderer primitives / 6,417,888 B buffer / 12,875,715 B texture;
- path eye: 19 draw calls / 19 objects / 252 renderer primitives / 6,417,888 B buffer / 12,875,715 B texture.

**Exact source sapling, Weather omitted:**

- elevated: 26 draw calls / 26 objects / 2,010 renderer primitives / 6,451,344 B buffer / 12,875,715 B texture;
- path eye: 19 draw calls / 19 objects / 1,926 renderer primitives / 6,451,344 B buffer / 12,875,715 B texture.

Relative to its reserved Nature proxy, the exact source sapling therefore measures:

- **+0 draw calls**;
- **+0 visible objects**;
- **+33,456 B buffer memory**;
- **+1,674 RenderingServer-reported primitives**;
- **+0 texture bytes**.

This does **not** change the source truth that the sapling has **390 vertices / 570 authored triangles**. The renderer primitive counter is retained as a renderer observation, not substituted for source geometry identity.

**Exact full source slice with 36-streak Weather field:**

- elevated: 27 draw calls / 27 objects / 2,154 renderer primitives / 6,452,208 B buffer / 12,875,715 B texture;
- path eye: 20 draw calls / 20 objects / 2,070 renderer primitives / 6,452,208 B buffer / 12,875,715 B texture.

Relative to the exact sapling-only ablation, Weather adds in both cameras:

- **+1 draw call**;
- **+1 visible object**;
- **+864 B buffer memory**;
- **+144 RenderingServer-reported primitives**;
- **+0 texture bytes**.

Full source slice versus proxy baseline:

- **+1 draw call**;
- **+1 visible object**;
- **+34,320 B buffer memory**;
- **+1,818 RenderingServer-reported primitives**;
- **+0 texture bytes**.

## Weather batching regression contract

The Environment proof host already puts all **36 authored Weather streaks into one `ImmediateMesh` surface**. Runtime did not replace a good batching strategy merely to create activity.

Instead, this pass turns that already-good representation into an executable receiving-host regression contract:

**`PASS_EXACT_ONE_DRAW_CALL_144_RENDERER_PRIMITIVES_FOR_36_LINES_BOTH_CAMERAS`**

That is the bounded performance improvement from this pass: future changes to this exact proof path can no longer silently turn the 36-streak field into 36 draw calls while still calling the scene “the same.”

### Truth repair: authored lines are not the renderer counter

The first Runtime run, **35053642088**, intentionally remains historical evidence.

Its measurement step succeeded and produced the same real counters, but aggregation failed because this specialist initially assumed:

`36 authored Weather lines -> +36 RenderingServer primitives`.

That assumption was false in pinned Godot 4.7.2 GL Compatibility. The actual repeated measurement was:

`36 authored Weather streaks -> +1 draw call / +144 RenderingServer-reported primitives`.

Initial retained artifact:

- artifact ID: **10429751680**;
- archive digest: `sha256:ef46daa5bc8576a3368031a234c921d9e6dd9dc51ac82f1d7ec9bcc7fd5cdfaf`;
- exact old head: `5013785d76193ef8ed5b705223c09d3d167884a9`;
- aggregate state: HOLD because the **assumption** was wrong, not because the one-surface batching failed.

The contract was repaired around the observed backend counter rather than silently rewriting the source to “144 streaks.”

This distinction matters for future Runtime work: source triangle/line counts, submitted renderer counters, and draw calls are different evidence domains and must not be conflated.

## Direct visual tradeoff inspection

The retained elevated proxy-baseline and full-source PNGs were directly inspected.

Observed scoped difference:

- the proxy baseline contains the expected large green reserved Nature block in the replacement slot;
- the source slice replaces that block with the much thinner, branching sapling silhouette;
- the full slice additionally shows the blue source-owned Weather streak field;
- the large east foreground Nature proxy remains the same dominant oblique-view object already held by Environment for Art Director hierarchy review.

This Runtime pass did **not** propose visually reverting the real sapling to its cheaper proxy and did **not** propose removing Weather to save one draw call.

The final full-scene elevated PNG SHA-256 is:

`fdc1d3630fbeae53eca3f9cd8dd740a52666a2dc7404bd5839a0cce1fa90c32d`

That exact PNG hash is byte-identical between the initial failed-assumption run and the corrected final run. Therefore the correction changed evidence interpretation/validation only; it did not silently alter the rendered scene.

Art Director acceptance of the current world hierarchy remains independent.

## Previous Wreckline Runtime evidence retained

The earlier Wreckline active-only residency result remains valid within its original exact-asset scope:

- visibility reduction and residency reduction are separate contracts;
- hiding an LOD can reduce draw cost without freeing memory;
- explicit release reclaimed measured memory;
- synchronous re-import exposed nonzero hitch risk;
- the 35 m visual threshold remains held;
- changed Hard Surface geometry must be remeasured from its own exact rebuilt asset.

This Environment pass does not supersede Wreckline. It adds a second materially different receiving-host evidence family.

## Reusable learning candidates

Two bounded Runtime learnings now have stronger cross-repo support:

1. **Source geometry counts, renderer primitive counters, draw calls, and residency are separate evidence contracts.** They may move differently and must be named exactly.
2. **Replacing a proxy with real source art does not necessarily add draw calls.** In this exact scene the Nature replacement keeps one visible object / one draw slot while increasing buffer and renderer-primitive cost; the Weather overlay adds one additional draw slot because the entire field is already batched into one surface.

The second point is useful for future source-replacement work: do not optimize solely by object count or triangle count. Measure the receiving host.

These remain candidate learnings, not a studio-wide engine policy or Universal Creation abstraction. Two runtime families are enough to justify watching the pattern, not enough to claim a universal budget system.

## Truth boundary / non-claims

This activation proves only that for the exact seed-29 Environment slice in pinned Godot 4.7.2 GL Compatibility:

1. the exact source sapling can replace its reserved proxy with no additional measured draw call in either fixed camera;
2. that source replacement has a measurable buffer / renderer-counter cost;
3. the exact 36-streak Weather field stays one additional draw call in both fixed cameras;
4. the proof host repeatedly reports +144 RenderingServer primitives for that one-surface Weather field;
5. the exact full slice now has a retained comparative runtime baseline.

It does **not** establish:

- target-device FPS or frame-time;
- a target memory/draw-call/primitive budget;
- physical GPU cost from the RenderingServer counters alone;
- generic Godot line-expansion semantics outside this pinned proof;
- final Environment hierarchy or Art Director acceptance;
- final building/object/nature source replacements;
- dynamic sapling VFX runtime cost;
- final materials, textures, transparency or overdraw cost;
- target platform/mobile/browser behavior;
- collision, traversal or gameplay cost;
- production LOD, culling, instancing, streaming or batching policy;
- performance of Wreckline Hard Surface PR #6's changed candidate;
- a Universal Creation Runtime organ;
- production readiness, CANON or Runtime / Optimization mastery.

## Root gate

- **Truth:** the initial incorrect +36 primitive assumption is retained with its failed run/artifact. The corrected gate uses the repeated +144 renderer counter without rewriting the source's 36-streak identity.
- **Agency / non-domination:** Runtime does not trade away the real sapling, Weather field, Environment composition, Art Director authority, or source-repository ownership for cheaper counters.
- **Continuity:** Runtime PR #5 is stacked exactly on Environment PR #4; Environment remains unchanged; prior Wreckline Runtime evidence remains separate; all exact heads, runs, artifacts and visual hashes are retained.
- **Wisdom before speed:** this pass measures the first real multi-asset scene and locks one actually demonstrated batching property instead of inventing target budgets, instancing proxies that are expected to disappear, or creating a universal optimization framework from too little evidence.

## Handoffs

- **3D Art Director / Visual Observer:** review any future optimization only against matched visual evidence. Current Runtime counters do not clear Environment's large-east-proxy hierarchy hold and do not authorize removing the sapling or Weather.
- **Environment / World Art:** PR #5 now gives the exact current source slice a receiving-host baseline. When the next real building/object/nature source replacement lands, retain the same before/after cost shape so source integration does not become visually richer but operationally opaque.
- **Weather / VFX:** the current 36-streak field is already a single draw surface in this proof host. Preserve that property unless a deliberate visual/runtime tradeoff provides stronger evidence; +144 is a renderer counter, not a rewrite of source streak count.
- **Hard Surface / Wreckline:** once provider closure yields an exact rebuilt PR #6 candidate, remeasure that candidate. Do not inherit original-L0/L1 runtime numbers.
- **Technical Art / UC:** if the Nature GLB becomes the actual receiving-runtime path, measure it separately, including the +50 explicit leaf-backface triangle strategy. Do not infer its cost from this direct-source proof host.
- **Capability Cartographer:** track the evidence-domain distinction `source counts != renderer counters != draw calls != residency` and the repeated need for receiving-host proof. Do not centralize a runtime framework yet.

## Next Runtime / Optimization pass

Read the newest Hard Surface provider-closure result and Environment source-replacement state first.

Highest-value next choices, evidence permitting:

1. if Wreckline Hard Surface produces a real rebuilt candidate, remeasure its exact LOD1 rather than continuing on stale original geometry;
2. if Environment gains a second real building/object/nature replacement, extend this comparative receiving-host budget so proxy removal and real-art growth remain measured;
3. if neither happens but a representative target device/runtime becomes defined, add frame-time/FPS and absolute budget evidence there rather than inventing thresholds in CI;
4. do **not** optimize the remaining temporary Environment proxies simply because they are measurable—their final source bodies are still unknown.
