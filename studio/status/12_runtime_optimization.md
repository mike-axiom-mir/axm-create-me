# 12 — Runtime / Optimization Specialist Status

Date: 2026-09-17
State: **ACTIVE / THIRTY-SIXTH BOUNDED RUNTIME PASS / PASS_COMPACT_EAST_ARRAYMESH_RESOURCE_REUSE / 425 -> 1 NODE+ARRAYMESH+MATERIAL CONSTRUCTIONS (-99.7647%) / PROOF-HOST STRESS MEDIAN 1533 -> 1102 US (-28.11%) / 34/34 MATCHED FRAMES BYTE-IDENTICAL / HOLD_CURRENT_WORLD_CONTINUOUS_PLAYBACK_TARGET_DEVICE_ART_QA_ADOPTION_CANON_PRODUCTION**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/12_runtime_optimization.md`, the prior Runtime status, and fresh Art Direction, Visual Observer / QA, Technical Art / UC, VFX / Atmosphere and open constellation PR state before selecting work.

`axm-create-me` remains **coordination only**. Runtime implementation/proof code and retained evidence live in `mike-axiom-mir/axm-nature-design`; this status file is the only `axm-create-me` product-tree change for this activation.

The four AXM roots remain the internal merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh constellation / duplication scan

Existing Runtime lanes remain owned and were not reopened:

- Character Runtime PR #23 already owns exact bilateral dense release-scale accessor deduplication; current Character shaded direction-frame failure remains an Art / QA / target-host issue, not a reason to reopen import storage.
- Character Runtime PR #20 already owns localized posed-normal caching.
- Object Runtime PR #30 already owns scalar roughness L8 storage and selected-field provenance; Object PR #29 already owns atlas-height right-sizing.
- Animal Runtime PR #27 already owns normalized-u16 skin-weight width; remaining work is visual / producer adoption.
- Building / Map Runtime lanes already own post-normal indexing and residual primitive-scaling evidence.
- Map Runtime PR #13 already proves stable `MeshInstance3D` / `ArrayMesh` / material reuse for the synchronized west sapling in a current-world proof.

Fresh VFX state created a materially different receiver rather than another copy of the same west-sapling lane:

- Nature VFX PR #11 exact head `cef2ad78d8e36a55ada5dad07329f1a7125d48de` now contains a source-local compact-east responsive tree candidate.
- It preserves exact migrated neutral mesh digest `420135f6effbadb1b344675948b9ddc471dcb83177702888f0b32327c5121c18`.
- It contains **17 exact response phases**, each `390 vertices / 570 triangles`, under the already-bounded visual-only Weather direction semantics.
- Its source-local Godot observer proves visible response and exact neutral return, but VFX explicitly leaves Runtime target-device timing/performance authority held.

The bounded Runtime question was therefore:

> **Does the stable dynamic-mesh resource lifecycle rule already measured on the west sapling transfer to this second, materially different migrated Nature body without changing its exact VFX phase images or renderer submission shape?**

This is intentionally a transfer/reuse proof rather than a duplicate rewrite of Map Runtime PR #13.

## Owning Runtime lane

Repository: `mike-axiom-mir/axm-nature-design`

Draft Runtime PR: **#12 — `Runtime: reuse compact-east response mesh resources`**

Branch: `studio/runtime-compact-east-resource-reuse-001`

Exact tested Runtime head:

`341b8c66a865138f6ed4b0b573b6a5dfd8fb64ae`

Exact parent VFX head:

`cef2ad78d8e36a55ada5dad07329f1a7125d48de`

PR #12 is **open, draft, unmerged and mergeable**.

Scoped result:

**`PASS_COMPACT_EAST_ARRAYMESH_RESOURCE_REUSE__425_TO_1_RESOURCE_CONSTRUCTIONS__34_FRAME_BYTE_IDENTITY`**

## Measure-before / bounded candidate

Both modes consume the exact same 17 VFX phase meshes, the same source-to-Godot transform, same neutral unshaded proof material, same culling-disabled response-isolation boundary, the same two VFX cameras and pinned Godot `4.7.2` GL Compatibility.

The only bounded variable is dynamic presentation-resource lifecycle:

- `rebuild_resources_control`: synthetic control creates a new `MeshInstance3D`, `ArrayMesh` and material on every measured phase submission;
- `reuse_arraymesh_candidate`: creates one `MeshInstance3D`, one `ArrayMesh` and one material, then clears/recommits only the changing triangle surface for every exact phase.

Per mode:

- retained updates: **17**;
- stress updates: **24 × 17 = 408**;
- total measured updates: **425**.

No Nature source JSON, migrated topology, response phase, amplitude, Weather semantic, camera, material scalar or triangle count is changed.

## Before / after evidence

### Resource constructions

Control:

- `MeshInstance3D`: **425**;
- `ArrayMesh`: **425**;
- material: **425**.

Candidate:

- `MeshInstance3D`: **1**;
- `ArrayMesh`: **1**;
- material: **1**.

Construction reduction:

**99.76470588235294%**.

The candidate's node, mesh and material instance IDs remain stable across all 17 retained phases.

### Proof-host CPU-side submission observations

Retained 17-phase sequence:

- median: **2550 -> 1203 µs (-52.82%)**;
- total: **44,520 -> 21,243 µs (-52.28%)**.

408-update stress sequence:

- median: **1533 -> 1102 µs (-28.11%)**;
- p95: **2094 -> 1166 µs (-44.32%)**;
- total: **645,571 -> 458,224 µs (-29.02%)**.

These are pinned proof-host CPU-side submission observations. They are **not** target-device FPS, GPU-frame-time or portable latency budgets.

### Renderer / memory shape

Across all **34 matched retained frames**:

- draw calls: exact control / candidate match;
- objects in frame: exact match;
- RenderingServer primitives: exact match.

Pre-to-post stress observations:

- control buffer-memory drift: **0 B**;
- candidate buffer-memory drift: **0 B**;
- control texture-memory drift: **0 B**;
- candidate texture-memory drift: **0 B**.

This is useful leak/churn evidence inside the bounded proof, not a complete allocator, VRAM or resident-memory claim.

## Visual tradeoff for Art Direction / Visual QA

All **34 fixed-camera control/candidate PNG pairs are byte-identical**.

Recorded tradeoff:

**`NONE_OBSERVED_34_MATCHED_FRAMES_BYTE_IDENTICAL`**

Runtime therefore observed no raster difference caused by stable resource reuse in this exact neutral proof presentation. Final motion naturalness, culling/leaf-sidedness, shaded materials, current-world composition and Art Direction / Visual QA acceptance remain separate.

## Fail-closed control

The comparison verifier deliberately replaces the candidate's one-resource construction counts with the control counts.

Result: **rejected** because the candidate no longer demonstrates `candidate_reuses_one_resource_set`.

Image identity alone therefore cannot satisfy the Runtime optimization gate.

## Exact CI / retained evidence

Dedicated workflow:

**`35223655530 — Runtime compact-east resource reuse evidence — SUCCESS`**

The exact Runtime head also ran the complete inherited Nature Python 3.11 suite inside this workflow:

**33 / 33 tests PASS**.

The same exact head's inherited Nature source/topology workflows were green as well.

Artifact:

- ID: **`10498250877`**;
- name: `compact-east-runtime-resource-reuse-341b8c66a865138f6ed4b0b573b6a5dfd8fb64ae`;
- uploaded size: **772,079 B**;
- GitHub SHA-256: `b19ea6512785e6b4a19f6cb98448affcdc19ca7700fe863a3a8062ab71b01c6a`;
- independently downloaded and rehashed SHA-256: **same**.

## Handoffs

- **Nature VFX PR #11:** Runtime comment `5714698634` returns exact pass evidence and makes **no automatic implementation/adoption request**.
- **Map Runtime PR #13:** continuity comment `5714700932` records that the earlier west-sapling lifecycle rule has now reproduced on a second materially different deforming Nature body without rewriting that older lane.
- **Art Direction / Visual QA:** 34/34 byte-identical proof frames are reported only as the lifecycle-change visual tradeoff. They do not grant final Nature appearance or motion approval.
- **Environment / Map:** no current-world composition was edited.
- **Weather:** visual-direction semantics are consumed unchanged; no physical-wind claim is introduced.
- **UC:** unchanged; this proof did not require a Universal Creation product change.

## Reusable learning / placement boundary

A stronger cross-source Runtime rule is now supported by two independent deforming Nature bodies:

> **When deformation changes geometry content but topology and presentation identity remain stable, keep the receiving node, mesh resource and material stable; update the changing surface instead of reconstructing presentation resources every state. Re-prove exact frames and renderer submission shape rather than assuming resource reuse is visually inert.**

The west sapling and compact-east tree both support this bounded rule, but two examples still do not justify claiming a universal vegetation runtime system or UC extraction. A broader abstraction should wait for another receiving pattern or a real shared product path where extraction removes duplicated implementation rather than merely creating framework code.

## Historical continuity

Pass 35 remains preserved in repository history: exact Character bilateral release-scale accessor deduplication reduced complete GLB size `44,032 -> 40,064 B` while current UC positions and skin palettes remained exact across all 321 keys.

Pass 34 remains preserved: localized Character posed-normal caching reduced proof-host normal-preparation work while producing exact Materials-reference normal arrays.

Passes 32/33 remain the Object roughness L8 measurement and exact selected-field identity rebind. Earlier Animal, Building, Weather, Nature and other Runtime passes remain separate historical truth.

## Explicit non-claims

This activation does **not** prove:

- target-device CPU/GPU/FPS/VRAM/thermal/battery improvement;
- portable timing budgets from GitHub's llvmpipe proof host;
- continuous wall-clock response playback quality;
- in-place vertex-buffer streaming or a more advanced dynamic-mesh API;
- current-world / Map receiving integration;
- final culling / leaf-sidedness or shaded material behavior;
- physical wind, biomechanics, gameplay, collision or navigation behavior;
- a universal vegetation optimizer;
- automatic VFX / Environment / producer adoption;
- Art Direction or independent Visual QA final acceptance;
- UC extraction;
- CANON;
- production/game readiness;
- Runtime / Optimization mastery.

## Four-root check

**Truth:** exact VFX ancestry, migrated mesh identity, all 17 source phases, before/after construction counts, proof-host timings, all 34 retained frame pairs, renderer counters, memory-drift observations, negative control, workflow and artifact hash are recorded separately from target-device or final-art claims.

**Agency / non-domination:** Runtime changes only the evidence-side resource lifecycle. VFX keeps response ownership, Nature keeps source geometry, Weather keeps semantics, Environment keeps composition, and Art / QA keep appearance acceptance.

**Continuity:** this pass extends rather than overwrites the earlier west-sapling reuse result, preserves the fresh compact-east VFX lineage exactly, and leaves Character/Object/Animal/Building Runtime lanes untouched.

**Wisdom before speed:** Runtime tested one reusable lifecycle rule against the second real deforming Nature body before inventing a generic vegetation framework, in-place streaming system, LOD rewrite or speculative target-device claim.

The four AXM roots — **Truth, Agency / non-domination, Continuity, Wisdom before speed** — remain the merge gate.
