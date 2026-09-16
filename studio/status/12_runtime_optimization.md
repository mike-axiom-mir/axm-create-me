# 12 — Runtime / Optimization Specialist Status

Date: 2026-09-16
State: **ACTIVE / SIXTH BOUNDED RUNTIME PASS / MOVING SAPLING RESOURCE REUSE PROVEN ON EXACT SYNCHRONIZED ATMOSPHERE SEQUENCE / 441→1 RESOURCE CONSTRUCTIONS / VISUAL BYTES + DRAW COUNTERS PRESERVED / TARGET-DEVICE BUDGET STILL MISSING**

## Current bounded claim

This activation followed the previous Runtime handoff rather than duplicating existing lanes. VFX PR #12 introduced the first current receiving-host sequence that combines the already-measured Weather field with a genuinely moving, source-owned Nature sapling. Runtime therefore measured one new lifecycle question only:

> Can the exact moving sapling reuse one receiving `MeshInstance3D`, one `ArrayMesh`, and one material across the synchronized sequence instead of reconstructing those resources per state, while preserving the exact retained visual output and per-frame renderer counters?

Result:

**`PASS_REUSE_SINGLE_SAPLING_ARRAYMESH_RESOURCE_CHURN_CONTRACT`**

For this exact pinned Godot 4.7.2 GL Compatibility proof host, one stable sapling resource set replaces 441 synthetic control constructions of each resource class across 9 retained updates plus 48×9 stress updates. That is a **99.773% construction reduction**. All 18 retained fixed-camera control/candidate PNG pairs are byte-identical, and draw-call / visible-object / primitive counters are identical sample-for-sample.

`axm-create-me` remains coordination-only. Product/runtime proof code lives only in `axm-map-design`.

## Continuity / previous status preservation

The complete fifth Runtime pass remains preserved in repository history at exact blob:

`d15c982d243c9d1703b16e1e26f30f87e4b3a699`

That pass proved the static compact-east-tree source-replacement budget and the separation between visibility submission and resource residency. It is not overwritten as evidence; this file advances the current status pointer while retaining the exact historical blob for rollback/audit.

## Constellation / overlap scan

Read before acting:

- `studio/3D_STUDIO_CAMPAIGN.md`;
- `studio/specialists/12_runtime_optimization.md`;
- previous Runtime status;
- current VFX, Environment, Nature and neighboring specialist state;
- current open design PRs and exact receiving heads.

Relevant placement decisions:

- **Map Runtime PR #8** already proves stable resource reuse for the dynamic 36-streak Weather `ImmediateMesh`; Weather lifecycle work was not repeated.
- **Map Runtime PR #10** already measures the static compact-east-tree source replacement; static replacement cost was not repeated.
- **Map VFX PR #12** at exact head `d476cf7c11de74c53397cb21e6f40f90a51c0356` supplies the newly available synchronized Weather + moving Nature sapling candidate. Runtime consumes that sequence unchanged.
- **Nature** exact accepted response head is `cee14f5b3feea78b0adcd044bad2ea3c97657fc6`; Runtime does not alter source deformation semantics.
- **Weather** exact source head is `ca2eaba519e8449835b0ea6ef944b7080c3caa6a`; Runtime holds Weather resource reuse identical in both measurement modes.
- **Wreckline LOD** remains blocked on truthful rebuilt-provider closure; historical LOD savings were not transferred.
- **Object / articulation** still lacks a stronger live receiving-host runtime path than this Map/VFX candidate.
- **Universal Creation / Profession Fabric** remain unchanged. This proof supports a receiving-host lifecycle pattern, not a generic promoted runtime organ.

## Runtime implementation lane

Repository:

`mike-axiom-mir/axm-map-design`

Draft PR:

**`#13 — Runtime: reuse synchronized sapling mesh resources`**

Branch:

`studio/runtime-synchronized-sapling-reuse-001`

Exact Runtime head:

`f0c72b9dd4688bdb01ac40aa33f469afffd7ec0a`

Exact stacked prerequisite:

`d476cf7c11de74c53397cb21e6f40f90a51c0356` — VFX PR #12 exact head.

Runtime adds only bounded proof/evidence machinery:

- `environment-proof/atmosphere_dynamic_budget_observe.gd`;
- `tools/environment_atmosphere_dynamic_runtime.py`;
- `docs/ENVIRONMENT_ATMOSPHERE_DYNAMIC_RUNTIME_001.md`;
- `.github/workflows/runtime-atmosphere-dynamic-sapling.yml`.

No Map composition, Nature source body, Weather semantics, cameras, VFX timing, gameplay code, UC code, or Profession Fabric code changed.

## Measure-before / after design

Both modes consume the exact nine VFX states at `0.0 / .0625 / .125 / .1875 / .25 / .3125 / .375 / .4375 / .5 s`, with:

- exact 390-vertex / 570-triangle Nature sapling;
- exact 36-streak Weather field;
- the same Map scene, lighting and two fixed cameras;
- stable Weather node / `ImmediateMesh` / material reuse in both modes.

### Synthetic control

`rebuild_sapling_control` intentionally reconstructs only the sapling `MeshInstance3D`, `ArrayMesh`, and material every update. This is a measurement control, **not** a claim that AXM currently ships or previously shipped such a path.

### Candidate

`reuse_sapling_mesh` creates one sapling node, one `ArrayMesh`, and one material, then clears/recommits only its single triangle surface for each exact authored deformation state.

The retained evidence phase performs 9 updates. The stress phase performs 48 complete cycles × 9 states = 432 updates. Total per mode: **441 sapling updates**.

## Exact evidence

Dedicated workflow:

`Runtime synchronized sapling resource evidence`

Exact-head push run:

**`35065899641 — SUCCESS`**

Retained artifact:

- artifact ID: **`10434048700`**;
- name: `environment-atmosphere-dynamic-runtime-001-f0c72b9dd4688bdb01ac40aa33f469afffd7ec0a`;
- size: **1,737,125 B**;
- Actions SHA-256: `22b4dcfc74b8e213e8695735ac91691c8345bcd6ccd13d7aca4ff293ac6c1e89`;
- exact-head binding: `f0c72b9dd4688bdb01ac40aa33f469afffd7ec0a`.

The retained ZIP was downloaded and independently rehashed; the local SHA-256 reproduces the Actions digest exactly.

Earlier workflow attempts failed an overly strict evidence-harness ancestry assertion. They were not adopted as proof. The final repair changed only ancestry verification; it did not change source motion, scene content, resource-reuse semantics, or acceptance thresholds.

## Exact before / after measurements

Resource constructions across 441 updates per mode:

- synthetic control sapling nodes: **441**;
- candidate sapling nodes: **1**;
- synthetic control sapling meshes: **441**;
- candidate sapling meshes: **1**;
- synthetic control sapling materials: **441**;
- candidate sapling materials: **1**.

Reduction for each resource class:

**99.77324263038548%**.

Weather remains exactly one node / one mesh / one material in both modes.

### Retained renderer counters

For every one of the nine retained states:

`path_eye`:

- draw calls: **20 → 20**;
- visible objects: **20 → 20**;
- primitives: **2,070 → 2,070**.

`elevated_oblique`:

- draw calls: **27 → 27**;
- visible objects: **27 → 27**;
- primitives: **2,154 → 2,154**.

All **18 / 18 control-candidate PNG pairs are byte-identical**.

### Proof-host CPU-side submission observations

These numbers are retained observations, not portable budgets:

Retained nine-state phase:

- median: **3,484 → 1,003 µs** (**-71.21%**);
- p95: **6,224 → 1,483 µs** (**-76.17%**);
- total: **33,173 → 9,594 µs** (**-71.08%**).

432-update stress phase:

- median: **1,430 → 986 µs** (**-31.05%**);
- p95: **3,516 → 1,078 µs** (**-69.34%**);
- total: **735,658 → 431,545 µs** (**-41.34%**).

### Proof-host memory observations

Both modes report the same first and last retained stress-cycle counters:

- buffer memory: **6,452,208 B → 6,452,208 B**;
- texture memory: **12,875,715 B → 12,875,715 B**;
- last-minus-first drift: **0 B** for both counters.

This is only a bounded same-process observation. It does not prove production allocator behavior, peak transient memory, VRAM, or target-device residency.

## Visual tradeoff for Art Direction

Runtime changed resource lifecycle only; it did not change source deformation, Weather, cameras, scene composition, materials, timing, or authored geometry.

Exact retained Art Director handoff:

**`NONE_OBSERVED_IN_EXACT_RETAINED_PROOF_FRAMES`**

All 18 fixed-camera control/candidate PNG pairs are byte-identical. Runtime therefore has no measured visual penalty to hand off for this lifecycle change. That is not an aesthetic approval of the sapling motion or atmosphere sequence; final motion, deformation and scene-quality ownership remains with Animation/VFX/Art Direction/Visual QA.

## Reusable learning

This is now a second materially different live-update case beside Weather:

- Weather: stable receiving node + `ImmediateMesh` + material; update bounded line surface.
- Nature sapling: stable receiving node + `ArrayMesh` + material; update bounded triangle surface while exact source deformation states change.

The reusable Runtime discipline is strengthened:

> **Keep immutable receiving resource identity stable when the bounded changing payload can be replaced in-place, and verify exact visual/counter equivalence before treating lower construction churn as a win.**

This is evidence for a receiving-host pattern, not yet for one universal implementation. Weather and deforming Nature use different mesh/resource semantics, and no UC extraction is justified from these two proof-host cases alone.

## Truth boundary / non-claims

This activation proves only that, in the exact synchronized Map/VFX proof scene on pinned Godot 4.7.2 GL Compatibility:

1. one stable sapling node / `ArrayMesh` / material can carry all 441 measured exact-state updates;
2. the synthetic reconstruction control creates 441 of each resource class while the candidate creates one;
3. all retained source/state identities remain exact;
4. all 18 retained control/candidate PNG pairs are byte-identical;
5. per-frame draw/object/primitive counters remain identical;
6. proof-host CPU-side submission observations favor reuse;
7. no last-minus-first drift appears in the retained buffer/texture counters.

It does **not** establish:

- target-device FPS or frame-time budget;
- GPU timing, VRAM ceiling, streaming or production allocator behavior;
- browser/mobile/console performance;
- physical wind coupling or physics;
- collision, navigation or gameplay performance;
- animation-controller semantics, interpolation or real-time pacing;
- final deformation quality, timing, personality or Art Direction;
- a generic UC Runtime / deformation / streaming organ;
- CANON, production readiness, or Runtime / Optimization mastery.

## Root gate

- **Truth:** exact heads, workflow, artifact, source identities, counter domains and visual hashes are retained. Hosted CPU timing is labelled observational and the synthetic control is not misrepresented as product history.
- **Agency / non-domination:** Runtime changes only its receiving proof path and does not overrule VFX timing, Nature source authority, Art Direction, gameplay or merge authority. The four roots remain the merge gate.
- **Continuity:** PR #13 is stacked exactly on VFX PR #12; previous Runtime status remains addressable by exact blob SHA; failed evidence-harness attempts remain visible in Actions history rather than being erased.
- **Wisdom before speed:** the existing accepted moving candidate was measured before inventing LOD, streaming, GPU deformation, or UC machinery. Broader extraction remains held until materially different consumers require it.

## Handoffs

- **VFX / Atmosphere:** the exact synchronized sequence can retain its current visual result while the sapling receiving resource stays stable. Runtime makes no atmosphere-quality or physical-wind claim.
- **Nature / Organic / Rigging-Deformation:** source deformation semantics remain untouched. If topology, vertex count, surface layout or deformation method changes, this Runtime evidence must be remeasured rather than transferred.
- **3D Art Director / Visual QA:** exact lifecycle before/after frames are byte-identical; there is no observed visual tradeoff from this Runtime change. This does not approve the underlying motion itself.
- **Technical Art / Capability Cartographer:** record a repeated receiving-host lifecycle pattern across Weather and deforming Nature, but preserve domain-specific resource semantics and do not promote to UC from this evidence alone.
- **Environment / World Art:** resource lifecycle can be stabilized without adding draw/object/primitive cost in the exact synchronized scene. This does not solve broader multi-tree residency, instancing or LOD scale.

## Next Runtime / Optimization pass

Inspect newest constellation first. Prefer a genuinely new dependency rather than repeating this pattern. High-value next candidates are:

1. multi-source Nature scaling when enough source-owned bodies coexist to make instance-sharing / residency / LOD materially measurable;
2. actual Object articulation in a receiving engine host, separating transform-only updates from geometry rebuilds;
3. truthful rebuilt Wreckline LOD after provider closure, with visibility and residency measured separately;
4. target-device measurements only when a real supported target and budget exist.

Do not infer mastery, target readiness, or a universal Runtime architecture from this PASS.
