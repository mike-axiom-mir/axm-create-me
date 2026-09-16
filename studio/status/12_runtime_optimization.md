# 12 — Runtime / Optimization Specialist Status

Date: 2026-09-16
State: **ACTIVE / EIGHTH BOUNDED RUNTIME PASS / OBJECT EXACT SAMPLED LID RESOURCE REUSE PROVEN / 6000→3 MOVING RESOURCE CONSTRUCTIONS / RETAINED PIXELS + SUBMISSION COUNTERS PRESERVED / TARGET-DEVICE BUDGET STILL UNPROVEN**

## Current bounded claim

This activation followed the previous Runtime handoff instead of reopening Weather reuse, moving-sapling reuse, compact-tree cost, Nature material sharing, Wreckline LOD, or inventing a new LOD system.

The previous status named **actual Object lid clip target-host playback cost once a receiving-engine articulation path exists** as the strongest next candidate. That dependency is now boundedly available:

- Object Materials PR #6 reconstructs the exact source component roles in pinned Godot 4.7.2 and already proves exact Animation-derived articulated poses;
- Object Animation PR #10 retains the complete source-owned 81-sample / 80-displayed-sample `lid-open-hold-close-001` clip;
- Object Technical Art PR #7 separately proves exact current UC-published Object GLB import, but that GLB is still a static import proof and does **not** yet expose a proven dynamically segmented lid.

Runtime therefore asked one narrow receiving-resource question:

> Can the exact current 80 displayed authored lid samples reuse the same three moving proof nodes / meshes / materials and update only their exact rigid transforms, instead of rebuilding moving resources for every sample, while retaining identical proof pixels and renderer submission counters?

Result:

**`PASS_REUSE_RIGID_LID_TARGET_HOST_RESOURCES`**

The exact synthetic rebuild control constructs **6,000 moving nodes + 6,000 moving meshes + 6,000 moving materials** across the retained workload. The reuse candidate constructs **3 / 3 / 3**, a **99.95% reduction** for every class, while retaining exact moving-resource identity throughout all 2,000 updates. All 14 retained control/candidate frame pairs are byte-identical and all retained draw/object/primitive counter pairs are exact.

`axm-create-me` remains coordination-only. All Runtime implementation and evidence live in `axm-object-design`.

## Continuity / previous status preservation

The complete seventh Runtime pass remains preserved at the prior coordination-file blob:

`3adb377015c10a55e2ae338b54a757c18802d739`

That pass proved three-source immutable Nature material sharing in Map Runtime PR #17 (`6 → 1` proof-material constructions, byte-identical retained frames). It is not rewritten as Object evidence here.

## Constellation / overlap scan

Read before acting:

- `studio/3D_STUDIO_CAMPAIGN.md`;
- `studio/specialists/12_runtime_optimization.md`;
- previous Runtime status;
- newest Runtime, Animation, Materials, Technical Art, Environment, VFX, Geometry, Rigging, Organic and Procedural evidence;
- current open PRs across Weapon, Armor, Character, Unit, Animal, Building, Nature, Weather, Map, Object and Misc.

Relevant placement decisions:

- **Weapon / Armor / Unit / Misc:** no stronger open measured receiving-runtime lane surfaced; no speculative budget system was invented.
- **Character PR #2:** source form is still under visual/form review and has no accepted animation-ready receiving path; Runtime did not pre-optimize it.
- **Animal PRs #4/#6/#5:** connected topology, sampled deformation and a deterministic sampled motion loop exist, but target-engine/controller playback remains unproved and Art Direction/Visual QA still own motion/deformation acceptance; Runtime did not duplicate those lanes.
- **Building PR #3:** current receiving lookdev is active, but no new measured runtime bottleneck exceeds the Object moving-resource gap.
- **Nature PR #9:** source winding migration changes indices/visual culling correctness, not counts; no performance gain is inferred. A source-owned LOD/instancing candidate still does not exist.
- **Weather PRs #2/#3:** source/procedural atmosphere fields remain visual-domain evidence. Map Runtime/VFX already own the real same-process receiving work.
- **Map Runtime PR #8:** Weather `ImmediateMesh` reuse already proven; not repeated.
- **Map Runtime PR #10:** compact east-tree receiving budget already measured; not repeated.
- **Map Runtime PR #13:** moving sapling node / `ArrayMesh` / material reuse already proven; not repeated.
- **Map Runtime PR #17:** immutable three-source Nature proof-material sharing already proven; not repeated.
- **Map VFX PR #16:** owns current dense 17-state Weather + sapling live update fidelity. Runtime does not retake VFX opacity or continuity ownership.
- **Map Environment PR #18:** owns migrated rear-tree normal-culling receiving acceptance. Runtime does not turn a correctness repair into an optimization claim.
- **Object Hard-Surface PR #12 / Procedural PR #11:** current registration/clearance/configuration work does not change the exact lid source/rig dimensions consumed here.
- **Object Animation PR #10:** source-owned clip owner. Runtime consumes its exact current head and exact authored samples unchanged; it does not retime, interpolate or modify easing.
- **Object Materials PR #6:** supplies the exact segmented articulated Godot proof representation used here. Runtime does not change surface values.
- **Object Technical Art PR #7:** separately proves exact UC-published GLB import. Runtime explicitly does not claim that static GLB already has dynamic lid segmentation.
- **Universal Creation / Profession Fabric:** unchanged. No global animation/runtime cache is extracted from one Object proof.

## Runtime implementation lane

Repository:

`mike-axiom-mir/axm-object-design`

Draft PR:

**`#13 — Runtime: reuse rigid lid target-host resources across exact sampled clip`**

Branch:

`studio/runtime-object-lid-sampled-playback-reuse-001`

Exact tested Runtime head:

`c43613a5c28ab899a0c65d57ed85833310b38adf`

Exact stacked prerequisite:

`c8b775d85f6007eab8d05fdb5e2ddc3e4ab871d4` — Object Materials PR #6 receiving head.

Runtime adds only bounded proof/evidence machinery:

- `runtime/object_lid_runtime_contract_001.json`;
- `runtime-proof/project.godot`;
- `runtime-proof/lid_motion_budget_observe.gd`;
- `tools/verify_object_lid_runtime.py`;
- `tests/test_object_lid_runtime.py`;
- `.github/workflows/object-lid-runtime-reuse.yml`.

No Object source geometry, attachment interfaces, fastener clearance, Rigging plan, Animation clip timing/easing, Materials scalar PBR values, Technical Art UC code, collision, physics, gameplay, UC, Profession Fabric, or `axm-create-me` product implementation changed.

## Exact source / receiving identities

- Materials receiving base: `c8b775d85f6007eab8d05fdb5e2ddc3e4ab871d4`;
- current Animation donor: `12a350fc38f67348f342cd0e53ed6b16383b789d`;
- Rig donor: `4b72c9918c5fc1e89bd18a0be24fb4afac6e7775`;
- Object source SHA-256: `49b1f9ed9865893d6de6f1ec8f069576732df694853fde4e3fcff366de32644a`;
- exact clip digest: `9e149195ab315f83f2d6f7d76f374f4be245567f77402de3e8a1d40ab79ef340`;
- rig-plan digest: `0ad6dc2ca22676cf301579932e599a441eb7c4bccce31991d1b727aeb22ac422`;
- exact clip: 2.0 s / 40 Hz / 81 endpoint-inclusive samples / 80 displayed samples under the existing omit-duplicate-endpoint repeat policy;
- exact declared moving proof components: **3** (`lid_shell` plus source-declared lid-side hinge components);
- renderer: pinned Godot 4.7.2 GL Compatibility.

The Runtime workflow rebuilds current Animation motion evidence from exact PR #10 bytes and requires its clip/rig/hinge identities to match the receiving payload before Godot may run.

## Measure-before / after design

### Control

`rebuild_moving_parts_control` is deliberately synthetic measurement control, **not a shipped or claimed current product implementation**.

For every displayed authored sample it:

- frees the previous three moving proof components;
- rebuilds three `MeshInstance3D` nodes;
- rebuilds three primitive mesh resources;
- rebuilds three material resources;
- reapplies the exact source-derived lid / hinge pose.

### Candidate

`reuse_moving_parts_transform`:

- creates the same three moving nodes / meshes / materials once;
- keeps their instance identities stable;
- changes only exact source-derived rigid transforms for subsequent authored samples.

Static Object proof components, source/clip/rig identity, candidate Materials family, cameras, lighting and sample order are fixed between modes.

### Workload

Per mode:

- one exact 80-displayed-sample evidence cycle;
- 24 repeated stress cycles × 80 = 1,920 updates;
- **2,000 total moving updates**;
- retained indices: `0 / 15 / 30 / 40 / 50 / 65 / 79`;
- contexts: `three_quarter / rear_hinge`;
- **14 exact retained control/candidate image pairs**.

This exercises exact sampled opening / hold / closing / near-wrap states, but it is not wall-clock 40 Hz playback or `AnimationPlayer` acceptance.

## Exact-head evidence

Dedicated workflow:

`Object lid sampled Runtime resource evidence`

Exact-head run:

**`35076380439 — SUCCESS`**

Python 3.11 and 3.13 full Object test discovery passed. The exact Runtime job also passed:

- exact Runtime-head / Materials-base ancestry binding;
- exact current Animation and Rig donor materialization;
- exact current Animation motion rebuild;
- exact articulated receiving payload rebuild;
- source/clip/rig/hinge identity gates;
- pinned Godot 4.7.2 hash verification;
- synthetic control same-process run;
- stable-resource candidate same-process run;
- before/after verifier;
- retained artifact upload.

Retained artifact:

- artifact ID: **`10437877884`**;
- name: `object-lid-runtime-001-c43613a5c28ab899a0c65d57ed85833310b38adf`;
- size: **1,609,898 B**;
- Actions SHA-256: `6141f406f123c7bfc544d853491ca75a8f0d2f7d23df4f7a41c1149ef9a8060e`;
- exact-head binding: `c43613a5c28ab899a0c65d57ed85833310b38adf`.

The artifact was downloaded independently after CI and rehashed locally. Local SHA-256 reproduces the Actions digest exactly. Its comparison receipt, both mode receipts, exact motion evidence, receiving payload, donor-head files and retained PNGs were inspected.

## Exact before / after measurements

Moving nodes constructed:

- control: **6,000**;
- candidate: **3**;
- reduction: **99.95%**.

Moving meshes constructed:

- control: **6,000**;
- candidate: **3**;
- reduction: **99.95%**.

Moving materials constructed:

- control: **6,000**;
- candidate: **3**;
- reduction: **99.95%**.

Candidate moving node / mesh / material identities remain stable through every one of the **2,000** updates.

### CPU-side submission observations

These values are useful same-runner comparative observations, **not portable budgets**:

Combined 2,000 updates:

- median: **202 → 12 µs** (`-94.0594%`);
- p95: **450 → 55 µs** (`-87.7778%`);
- max: **1,471 → 201 µs**;
- total: **464,189 → 31,758 µs** (`-93.1584%`).

Stress-only 1,920 updates:

- median: **200 → 12 µs** (`-94.0%`);
- p95: **299 → 19 µs** (`-93.6455%`);
- total: **423,541 → 26,482 µs** (`-93.7475%`).

The Runtime gate does not require timing improvement, because hosted-runner CPU timings are noisy. The primary gate is exact resource lifecycle reduction plus visual/submission equivalence. The observed timing result is retained because it strongly supports the same mechanism in this exact run.

### Renderer submission counters

Every retained sample/context has exact control/candidate equality for:

- draw calls;
- visible objects;
- primitives.

Counter values vary legitimately by view / sampled pose (for example rear-hinge visibility changes) but never vary **between modes for the same exact sample/context**.

### Retained memory-counter observations

Every retained comparison reports equal current proof-host counters:

- buffer memory: **6,494,932 B → 6,494,932 B**;
- texture memory: **9,310,915 B → 9,310,915 B**.

These are observations only. Godot's exposed buffer/texture counters are not a complete proof of material/node allocator residency or VRAM savings.

## Visual tradeoff for Art Direction

All 14 retained control/candidate PNG pairs are **byte-identical**.

Art Director handoff:

**`NONE_OBSERVED_IN_EXACT_RETAINED_PROOF_FRAMES`**

Direct inspection of the candidate contact sequence shows the expected authored closed → opening → 100° hold → closing → near-neutral relationship in both retained cameras. The lifecycle optimization introduces no visible difference in these exact frames.

This does **not** approve the underlying lid motion timing, weight/personality, Object form, Materials surface family, lighting, or final animation/lookdev quality.

## Reusable learning

Runtime now has four materially different receiving-resource reuse cases:

1. **Weather dynamic field:** retain one node / `ImmediateMesh` / material while line geometry changes.
2. **Moving Nature sapling:** retain one node / `ArrayMesh` / material while triangle geometry changes.
3. **Static multi-source Nature:** share one immutable proof material across distinct meshes when the renderer semantics are truly identical.
4. **Rigid Object articulation:** retain moving nodes / meshes / materials and update only rigid transforms when authored motion changes pose but not underlying resources.

The strengthened reusable rule is:

> **Match resource lifetime to what actually changes. If authored motion changes only a rigid transform, do not rebuild immutable receiving meshes/materials per sample. Preserve source/rig/clip identity independently, and require visual plus submission-counter equivalence before calling reuse safe.**

This is a repeated Runtime principle, not yet one universal runtime implementation or UC subsystem.

## Representation boundary

This pass uses the **Materials articulated Godot proof representation reconstructed from exact source component dimensions**, because that path exposes source-declared moving roles and exact Animation-derived poses.

Technical Art PR #7 separately proves exact current UC-published Object GLB import, but that retained GLB is still a static two-mesh assembly proof. This activation does **not** claim:

- that the exact UC GLB exposes the lid as an independently animated node;
- that this Runtime proof is byte-identical to a future segmented GLB import path;
- that an `AnimationPlayer` or controller already consumes the clip.

A future exact GLB articulation path must re-run Runtime evidence rather than inherit this PASS.

## Truth boundary / non-claims

This activation proves only that, in the exact Materials-derived Godot 4.7.2 proof host:

1. exact current Animation PR #10 source/clip evidence rebuilds and matches the receiving source/rig/hinge identity;
2. 80 exact displayed authored samples are consumed without retiming or interpolation;
3. the synthetic rebuild control constructs 6,000 moving nodes / meshes / materials across 2,000 updates;
4. the reuse candidate constructs only three of each and retains exact identities thereafter;
5. all 14 retained control/candidate PNG pairs are byte-identical;
6. draw/object/primitive counters match exactly for every retained sample/context;
7. same-runner CPU submission observations strongly favor reuse;
8. retained buffer/texture counters are equal observations.

It does **not** establish:

- `AnimationPlayer`, controller or state-machine acceptance;
- real-time / wall-clock 40 Hz pacing;
- target-device FPS or frame-time budget;
- GPU timing, VRAM or allocator savings;
- browser/mobile/console performance;
- exact UC GLB dynamic lid segmentation or playback;
- collision, physics, attachment dynamics or gameplay;
- final animation timing/weight/style;
- final Object Materials / Art Direction / Visual QA acceptance;
- a global runtime registry/cache or UC extraction;
- CANON, production readiness, or Runtime / Optimization mastery.

## Root gate

- **Truth:** exact source/clip/rig heads and digests, workload, synthetic-control label, workflow, artifact hash, resource counts, retained pixels, submission counters and noisy-timing limitation are explicit. Static UC GLB import is not mislabeled as dynamic playback.
- **Agency / non-domination:** Runtime changes receiving proof-resource lifetime only. Animation, Rigging, Materials, Technical Art, gameplay and merge authority remain with their owners; the four roots remain the merge gate.
- **Continuity:** PR #13 stacks exactly on Materials PR #6; current Animation/Rig donors are pinned; previous Runtime status is preserved by exact blob identity; old Runtime PRs are not silently rewritten.
- **Wisdom before speed:** Runtime waited until an actual segmented receiving-engine proof and exact source-owned clip both existed, then measured one lifecycle variable rather than inventing a broad animation framework or premature LOD/cache architecture.

## Handoffs

- **Animation:** the exact current 80 displayed lid samples are unchanged. Runtime found no reason to retime or reauthor them; only receiving-resource lifetime changed. Animation still owns timing/easing/style and any future `AnimationPlayer` / controller path.
- **Materials / LookDev:** all retained before/after frames are byte-identical under the existing candidate surface family. Runtime does not force material sharing across unrelated components and does not alter scalar PBR values.
- **Technical Art / UC Integration:** the next meaningful transport/runtime gate is an exact imported representation that exposes the lid/hinge as a proven dynamic transform target. Do not transfer this PASS automatically to the current static UC GLB.
- **Hard Surface / Rigging:** source dimensions, hinge origin, 0–110° limit and exact rig-plan identity remain untouched. Any mechanical geometry/rig change invalidates this evidence and requires rerun.
- **3D Art Director / Visual Observer:** lifecycle optimization shows `NONE_OBSERVED_IN_EXACT_RETAINED_PROOF_FRAMES`; this is not motion/lookdev acceptance.
- **Capability Cartography:** record rigid-transform resource reuse as a fourth receiving-runtime reuse pattern. Do not extract a universal runtime cache from this one Object family.

## Next Runtime / Optimization pass

Inspect newest constellation first. Prefer a genuinely new dependency. Strong candidates are now:

1. exact imported Object GLB articulation / `AnimationPlayer` cost **only once Technical Art exposes a proven dynamic lid target**;
2. multi-source Nature LOD / instancing / residency only after a source-owned candidate exists;
3. target-device measurement only when a real supported target and explicit budget exist;
4. Animal target-host sampled playback only after an engine receiving path and sufficiently accepted deformation/motion surface exist.

Do not infer mastery, target readiness, or a universal Runtime architecture from this PASS.
