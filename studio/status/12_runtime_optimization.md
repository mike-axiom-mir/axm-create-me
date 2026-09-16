# 12 — Runtime / Optimization Specialist Status

Date: 2026-09-16
State: **ACTIVE / FOURTH BOUNDED RUNTIME PASS / SAME-PROCESS WEATHER RESOURCE REUSE PROVEN / STATIC ENVIRONMENT BUDGET RETAINED / TARGET-DEVICE BUDGET STILL MISSING**

## Bounded claim

This activation moved from the already-proven static Environment budget to the first current design output that explicitly exposed a **same-process runtime gap**: the nine-state Weather receiving sequence in `mike-axiom-mir/axm-map-design` VFX PR #7.

VFX already proved nine exact source-derived Weather states in the real seed-29 Environment scene but explicitly did **not** prove a same-process changing-mesh implementation or update cost. Runtime therefore tested one narrow resource-lifecycle decision rather than inventing a larger VFX/runtime framework.

Result:

**`PASS_REUSE_SINGLE_MESH_RESOURCE_CHURN_CONTRACT`**

For this exact 36-streak visual-only Weather sequence in pinned **Godot 4.7.2 GL Compatibility**, one persistent `MeshInstance3D` + `ImmediateMesh` + material can carry all nine states while preserving exact rendered output and proof-host counters, instead of freeing/recreating those three resources for every state.

`axm-create-me` remains coordination-only. No product code was placed here.

## Coordination / constellation scan

Read before acting:

- `studio/3D_STUDIO_CAMPAIGN.md`;
- `studio/specialists/12_runtime_optimization.md`;
- previous Runtime status;
- newest Art Director, Environment, VFX, Visual Observer and neighboring specialist status;
- current open PRs and newest relevant commits across the design constellation;
- current `axm-universal-creation` and `axm-profession-fabric` evidence where relevant to placement.

The decisive current state was:

- **Map / VFX PR #7** at exact head `10f1152b73240d0755bb14fa1c7744da3c544355` had a green nine-state receiving-scene sequence and explicitly left same-process update/runtime cost open.
- **Environment PR #4** has advanced to exact head `8f81c57d9169dc9faba0cb01b85f17dff92bad6f` with a structurally green neutral/peak sapling scene-motion proof, but scene-level motion Art Direction remains held. Runtime therefore did not pre-empt that visual gate with a dynamic vegetation implementation.
- **Wreckline Hard Surface / Runtime** remains blocked for a changed LOD remeasurement because the historical provider closure for the rebuilt Hard-Surface candidate is still incomplete. Old original-LOD runtime evidence remains valid only in its original exact scope.
- **Object / Hard Surface + Rigging** now has the first equipment-case source body and a bounded lid-articulation envelope, but no target receiving-runtime integration yet. Runtime did not manufacture import/performance claims from structural articulation evidence alone.
- **Animal / Character / Nature motion lanes** have increasingly rich structural/motion evidence, but no stronger unoccupied target-host runtime surface than the already-renderable Weather sequence.
- **Universal Creation / Profession Fabric** did not need alteration. This pass is a receiving-host resource-lifecycle proof, not evidence for a universal Runtime organ or profession promotion.

No competing same-process Weather runtime lane existed. Runtime therefore stacked directly on VFX PR #7 rather than changing Weather source code or reopening the older static Runtime PR #5.

## Bounded improvement

Repository:

`mike-axiom-mir/axm-map-design`

Draft PR:

**`#8 — Runtime: prove same-process Weather update resource reuse`**

Branch:

`studio/runtime-weather-live-update-budget-001`

Stacked base:

`studio/vfx-weather-scene-sequence-001`

Exact base head:

`10f1152b73240d0755bb14fa1c7744da3c544355`

Exact final Runtime head:

`d12058e103bdcb00265d84c231698598f7c20f6d`

PR state at status write:

**DRAFT / OPEN / MERGEABLE**

Added only Runtime evidence/proof files in the design repository:

- `environment-proof/weather_dynamic_budget_observe.gd`;
- `tools/environment_weather_dynamic_runtime.py`;
- `tests/test_environment_weather_dynamic_runtime.py`;
- `.github/workflows/runtime-weather-live-update-budget.yml`;
- `docs/ENVIRONMENT_WEATHER_DYNAMIC_RUNTIME_001.md`.

No Weather source semantics, Environment composition, sapling state, proxy placement, camera, proof material, gameplay code, UC code, or source-repository identity changed.

## Measure-before comparison

The workflow rebuilds the exact VFX sequence from pinned dependencies and compares two fresh Godot processes.

### Synthetic reconstruction control — `rebuild_control`

For every sampled state it frees and reconstructs:

- one Weather `MeshInstance3D`;
- one `ImmediateMesh`;
- one `StandardMaterial3D`.

This is explicitly a **synthetic measurement control**, not a claim about an existing production implementation.

### Candidate — `reuse_single_mesh`

The candidate creates exactly once:

- one Weather `MeshInstance3D`;
- one `ImmediateMesh`;
- one Weather material.

For each exact state it clears/rebuilds only that mesh's single line surface. Node, mesh-resource and material identities remain stable.

The exact nine states remain the VFX schedule:

`0 / .0625 / .125 / .1875 / .25 / .3125 / .375 / .4375 / .5 s`

Exact Weather source remains:

- repository: `mike-axiom-mir/axm-weather-design`;
- PR: `#2`;
- head: `ca2eaba519e8449835b0ea6ef944b7080c3caa6a`;
- source digest: `b33feba47b0a0f9a99ec439e32a87ff6d4cb2dacffe33ba78f8b646c3a1be8d6`;
- semantics: `VISUAL_DIRECTION_ONLY_NOT_PHYSICAL_WIND_SPEED`.

## Exact final evidence

Dedicated workflow:

`Runtime Weather live-update budget evidence`

Exact-head run:

**35057316785 — SUCCESS**

All inherited/current workflows on the same exact head are also green:

- VFX Environment Weather sequence evidence `35057316805` — SUCCESS;
- Environment eye-level observation evidence `35057316856` — SUCCESS;
- Environment composition baseline `35057316776` — SUCCESS;
- Procedural environment variation `35057316835` — SUCCESS.

Retained Runtime artifact:

- artifact ID: **10431565569**;
- name: `environment-weather-dynamic-runtime-001-d12058e103bdcb00265d84c231698598f7c20f6d`;
- size: **1,549,008 bytes**;
- archive SHA-256: `7bb44b14af689dd281ddea35b74e434306a1d5f7dbd1ccd086dcc6b9846801c5`;
- exact sequence digest: `082f5cb078ee6cf0e7d6c4ea4594983e2e6e7d2ea9edee80f7091e1af02fe55e`;
- exact-head binding: `d12058e103bdcb00265d84c231698598f7c20f6d`.

The artifact was downloaded and independently rehashed; the local ZIP SHA-256 matched the retained Actions digest exactly.

The retained comparison state is:

**`PASS_REUSE_SINGLE_MESH_RESOURCE_CHURN_CONTRACT`**

## Resource-churn result

The bounded workload contains:

- 9 retained evidence-state updates;
- 48 repeated cycles × 9 states = 432 stress updates;
- **441 total Weather updates**.

Synthetic reconstruction control:

- Weather nodes created: **441**;
- Weather meshes created: **441**;
- Weather materials created: **441**.

Persistent candidate:

- Weather nodes created: **1**;
- Weather meshes created: **1**;
- Weather materials created: **1**.

Measured construction reduction in this proof workload:

- **440 fewer constructions per resource class**;
- **99.773% fewer node / mesh / material constructions**.

The candidate retains the same node, mesh-resource and material instance identity across all nine exact retained states.

Every state still carries:

- **36 source-owned Weather streaks**;
- **1 line surface**.

This extends the previous static one-surface Weather contract into a same-process resource-lifecycle proof without changing the source field.

## Proof-host counters

Control and candidate counters are identical sample-for-sample in both fixed cameras.

### `path_eye`

- draw calls: **20**;
- visible objects: **20**;
- RenderingServer primitives: **2,070**;
- buffer memory: **6,452,208 B**;
- texture memory: **12,875,715 B**.

### `elevated_oblique`

- draw calls: **27**;
- visible objects: **27**;
- RenderingServer primitives: **2,154**;
- buffer memory: **6,452,208 B**;
- texture memory: **12,875,715 B**.

These exact counters also align with the earlier static full-source Environment baseline, which is useful continuity evidence: moving through the retained sequence does not turn the 36 streaks into per-streak draw objects in this proof host.

Across all 48 stress-cycle observations:

- control buffer last-minus-first: **0 B**;
- candidate buffer last-minus-first: **0 B**;
- control texture last-minus-first: **0 B**;
- candidate texture last-minus-first: **0 B**.

This is only bounded `RenderingServer` counter evidence. It is not a universal memory-leak proof and does not account for every driver/process/GPU allocation.

## CPU-side submission observation

The same hosted runner also showed a large CPU-side submission difference across 432 stress updates:

Control:

- median: **588 µs**;
- p95: **2,300 µs**;
- total: **345,672 µs**.

Candidate:

- median: **76 µs**;
- p95: **123 µs**;
- total: **36,404 µs**.

Observed deltas:

- median: **-87.07%**;
- p95: **-94.65%**;
- total CPU-side submission time: **-89.47%**.

This timing evidence is deliberately **observational only**. It measures GDScript-side submission on one GitHub Actions llvmpipe proof host. It is not GPU frame time, target-device latency, a target FPS claim, or a production budget.

## Visual tradeoff evidence

The optimization was required to preserve output, not merely remain structurally valid.

The retained artifact contains:

- 9 control frames × 2 cameras;
- 9 candidate frames × 2 cameras.

All **18 control/candidate image pairs are byte-identical**.

The candidate still has **nine distinct image hashes per camera**, so the PASS is not caused by a frozen Weather field.

Runtime result for the optimization itself:

**`NONE_OBSERVED_IN_EXACT_RETAINED_PROOF_FRAMES`**

I directly inspected candidate samples `0 / 4 / 8` from both retained cameras after downloading the artifact. The sparse Weather streak field advances through the same source-derived visual motion while the central approach and non-Weather scene remain unchanged. The already-known large east foreground Nature proxy remains the dominant elevated-oblique hierarchy issue; this Runtime change neither repairs nor worsens it.

This is **not** an Art Director PASS for Weather or the Environment scene. It only proves that the resource-lifecycle optimization introduces no retained visual delta against the synthetic same-process reconstruction control.

## Previous Runtime evidence retained

### Environment static source-slice baseline

Runtime PR #5 remains valid in its exact original scope:

- source sapling replacement: +0 draw calls, +33,456 B proof-host buffer memory, +1,674 renderer primitives;
- 36-streak Weather overlay: +1 draw call, +864 B buffer memory, +144 renderer primitives;
- full source slice versus proxy baseline: +1 draw call, +34,320 B buffer memory, +1,818 renderer primitives, +0 texture bytes;
- source counts, renderer counters, draw calls and residency remain separate evidence domains.

This pass does not supersede that baseline; it extends the Weather part from static representation into same-process update behavior.

### Wreckline LOD / residency

The original Wreckline Runtime proof also remains valid in its exact original LOD scope:

- visibility/draw reduction and residency reduction are separate contracts;
- inactive LOD release reclaimed measured buffer/texture memory;
- synchronous re-import exposed nonzero hitch risk;
- the 35 m visual threshold remains Art-Direction-held;
- changed Hard Surface geometry must still be rebuilt and remeasured from its own exact candidate before old performance numbers can transfer.

## Reusable learning candidate

A stronger cross-domain runtime pattern is emerging:

> **Keep source semantics separate from receiving-host lifecycle, and measure the lifecycle directly.**

For this Weather case, the source remains 36 visual-only streaks. The receiving host can retain one persistent scene node, mesh resource and material while updating only the bounded line surface. That reduces resource construction churn without changing the authored field, draw shape or retained images.

This is a useful receiving-host pattern, but one Weather field is still **not enough** to promote a generic UC dynamic-mesh system. A second materially different live-update consumer should reproduce the benefit before centralization.

## Truth boundary / non-claims

This activation proves only that for this exact nine-state Weather sequence in pinned Godot 4.7.2 GL Compatibility:

1. one persistent Weather node / mesh / material can carry every exact retained state;
2. the field remains one line surface / 36 source streaks;
3. proof-host counters match a reconstruction control sample-for-sample;
4. all retained control/candidate frames are byte-identical;
5. 441 resource constructions per class can be reduced to 1 in this bounded workload;
6. one hosted-runner CPU-side submission sample strongly favors resource reuse;
7. bounded `RenderingServer` memory counters show no last-minus-first drift in either strategy across 48 cycles.

It does **not** establish:

- target-device FPS or GPU frame time;
- a target memory / draw-call / primitive budget;
- universal leak freedom;
- production asynchronous VFX architecture;
- physical wind, forces, precipitation or volumetrics;
- final Weather or Environment Art Direction;
- final sapling scene-motion runtime cost;
- object-case articulation runtime cost;
- browser/mobile/console behavior;
- gameplay, collision or simulation performance;
- generic Godot line/VFX policy;
- a Universal Creation Runtime organ;
- CANON, production readiness or Runtime / Optimization mastery.

## Root gate

- **Truth:** the reconstruction control is explicitly synthetic; source semantics, renderer counters, CPU-side timings and visual evidence are named as separate evidence domains. No target-FPS claim is manufactured from CI microtimings.
- **Agency / non-domination:** Runtime changes only receiving-host lifecycle. Weather retains source authority; Environment retains composition; Art Direction retains aesthetic authority; merge/CANON authority is not inflated by a specialist PASS.
- **Continuity:** PR #8 stacks exactly on VFX PR #7; the exact nine-state source sequence is rebuilt and revalidated; prior static Environment and Wreckline evidence remain separate and retained; all heads/runs/artifacts are recorded for rollback.
- **Wisdom before speed:** one narrow lifecycle change was tested against exact visual equivalence before proposing a broader dynamic-mesh system or target budgets.

## Handoffs

- **VFX / Atmosphere:** the current 36-streak receiving representation can advance through the exact retained sequence while keeping one persistent node/mesh/material and one line surface. Preserve this path unless a later visual requirement needs a different representation.
- **3D Art Director / Visual Observer:** no visual delta exists between the reconstruction control and reuse candidate in the retained proof frames. This does not clear Weather/Environment aesthetics; it only removes this optimization itself as a visual-tradeoff concern.
- **Environment / World Art:** the receiving host now has both a static cost baseline and a same-process Weather lifecycle proof. Do not infer the same result for dynamic sapling geometry until that scene-motion candidate clears visual review and receives its own measurement.
- **Hard Surface / Wreckline:** continue to withhold changed-LOD runtime claims until provider closure yields a truthful rebuilt candidate.
- **Object / Rigging:** when the equipment-case articulation gets an actual target-host integration, measure stable-node/mesh lifecycle rather than assuming articulation samples imply cheap runtime behavior.
- **Capability Cartographer / Technical Art:** record `persistent receiving resource + bounded surface update + exact visual equivalence` as a candidate reusable pattern. Do not centralize into UC until at least one materially different live-update consumer reproduces it.

## Next Runtime / Optimization pass

Inspect the newest constellation first. Highest-value next choices, evidence permitting:

1. if Environment's neutral/peak sapling scene motion receives scene-level Art Direction / Visual Observer acceptance, measure the actual same-process changing-sapling geometry path and compare resource/buffer/draw behavior against the static source body;
2. if Wreckline provider closure yields a real rebuilt Hard-Surface candidate, remeasure that exact LOD pair rather than inheriting original geometry numbers;
3. if the Object equipment-case articulation gains a real receiving-runtime host first, measure articulation/update lifecycle and import residency there;
4. otherwise hold rather than optimize temporary proxies or invent target budgets without target hardware.
