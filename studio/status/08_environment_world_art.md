# 08 — Environment / World Art Specialist Status

Date: 2026-09-16
State: **ACTIVE / PASS_CURRENT_WORLD_NATURE_SOURCE_WINDING_MIGRATION_TARGET_HOST_REACHED / ART-DIRECTION + VISUAL-QA NATURE RECEIVER ACCEPTANCE + TARGET-DEVICE PERF HELD**

## Authority / continuity

`axm-create-me` remains **coordination only**. Implementation and retained evidence stay in the existing `mike-axiom-mir/axm-map-design` Environment PR #24; no duplicate Environment lane was opened.

Map owns receiving composition. Nature Geometry and Nature VFX retain source topology and deformation/visual-response authority. Building, Object, Object Materials and Weather/VFX retain their own source/material/presentation authority. Runtime owns target-device performance and optimization acceptance. Art Direction owns visual-direction preference; Visual Observer / QA retains independent visual acceptance.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Prior current-world base preserved

The exact predecessor remains Environment head `b9d9ed28e9a826c4698014db5f91c59aba9dddfc`, workflow `35153287190`, artifact `10470116628`, SHA-256 `89e8accc714c8dc5900eaa835aeb3fd5b3b528dbd3f28e241c9c4b96832d714c`.

That state preserves:

- source-owned segmented Building + accepted Building materials;
- exact five-surface Object material family using Runtime PR #33's indexed representation;
- the Art-Direction-preferred restrained visible west-Object footprint cue;
- Nature woody/foliage material family;
- source-width Weather presentation;
- route, fixed cameras and lighting.

Its 68 current-world frames remained byte-identical across the Object indexing adoption and reproduced the `-34,488 B` observed RenderingServer buffer reduction. Independent cue Visual QA and target-device performance remain separate.

Runtime PR #34's later indexed footprint-cue candidate was inspected this activation but **not adopted**: it proves a small additional memory reduction with a retained one-pixel/one-LSB visual tradeoff, and Art Direction / Visual QA have not yet returned a preference for that tradeoff. Environment did not silently convert Runtime evidence into a visual decision.

## Selected bounded gap

Fresh constellation inspection found a stronger ready dependency than another Object/Building/Weather iteration:

- Nature Geometry PR #9 head `4ddbe66e5c02d22407ef773d5346a2fe6f349a2d` source-owns the proven tapered-cap winding migration for three real Nature sources;
- Nature VFX PR #11 head `0b9167ac6d7b6d94d9fef92720f8c60e3ef45700` rebinds the sapling visual-wind response to that migrated topology while preserving the response profile/vertex behavior;
- both explicitly held current-world receiving acceptance for Environment / Art / QA.

The Environment question was therefore bounded to:

> Can the exact migrated Nature source lineage and rebound sapling response reach the newest real multi-asset current world without changing existing placements, material roles, Building, indexed Object + footprint cue, Weather, route, cameras or lighting?

## Material integration discovery: current world had mixed Nature lineage

The first exact receiving attempt exposed two important continuity facts instead of being papered over.

First, Map Nature receiver vertices are not stored at the Nature source-local origin. They are the exact generated/deformed Nature vertices plus an already-authored constant world-space translation. The first verifier incorrectly compared those receiver vertices directly to source-local vertices and failed with a `7.701644802490107 m` residual on the compact-east tree. That was a coordinate/placement-boundary mistake in the Environment verifier, not a source regression.

The repaired receiver proves:

`receiver_vertex = exact_current_source_or_deformed_vertex + existing_world_translation`

with maximum residual **`8.881784197001252e-16 m`**. No Nature receiver vertex position or world placement is changed.

Second, the parent world had **mixed winding lineage**:

- `sapling-neutral-001`: historical winding; exactly **260** triangle windings replaced by the source-owned migration;
- `compact-east-tree-neutral-001`: historical winding; exactly **260** triangle windings replaced;
- `east-rear-tree-neutral-001`: already on the migrated lineage through the earlier rear-tree Environment lane; exactly **0** triangle changes and preserved as-is.

All three keep exact triangle membership, `390 vertices / 570 triangles`, and the existing `520 woody / 50 foliage` material partition.

## Bounded Environment implementation

Map PR #24 remains on branch:

`studio/environment-weather-variant-object-convergence-001`

Exact final tested Environment head:

`dc9911714365393d3f33038ef8bfda9e057a37e5`

Environment adds only a receiving/proof layer that:

1. checks out exact Nature VFX PR #11 and verifies Nature source migration PR #9 ancestry;
2. regenerates the exact migrated Nature meshes from the source-owned generator;
3. proves current Map placements are exact constant translations of those generated meshes;
4. replaces only the missing sapling + compact-east triangle winding while recognizing the rear tree as already migrated;
5. regenerates the exact migrated sapling response at all 17 current-world sample times and proves its receiver vertex sequence is unchanged up to the same existing world translation;
6. preserves the current Nature woody/foliage materials, Building, indexed Object, visible Object footprint cue, Weather, route, cameras and lighting;
7. runs the real Godot 4.7.2 GL Compatibility receiver and characterizes all retained image deltas rather than declaring them aesthetically neutral.

Composition digest:

`50e3c3f10911514fe00a2431cc4c265e6539672d8e364063112f0b45660a9337`

## Failed drafts preserved

Run `35158672534` failed in proof infrastructure because the GitHub runner did not yet have `pytest` installed. It is not acceptance evidence.

Run `35158854956` then passed the exact Nature migration/VFX tests but failed the Environment structural build because the initial verifier treated Map's baked world translation as a source-geometry mutation. The repair changed the coordinate-boundary assumption only; no source identity, visual threshold or acceptance rule was weakened.

The corrected placement-preserving implementation first passed end-to-end at head `ebd0b95ebca55b98203a24e6862a39f89660c7dd`, workflow `35159148525`. The documentation was then corrected to record the mixed-lineage/placement boundary explicitly, and the exact final head was rerun rather than inheriting the earlier PASS.

## Exact final real-host result

Dedicated workflow **`35159276610 — Environment Nature winding migration current-world evidence` — SUCCESS** on exact head `dc9911714365393d3f33038ef8bfda9e057a37e5`.

Structural result:

**`PASS_CURRENT_WORLD_NATURE_SOURCE_WINDING_MIGRATION_STRUCTURE`**

Target-host result:

**`PASS_CURRENT_WORLD_NATURE_SOURCE_WINDING_MIGRATION_TARGET_HOST_REACHED`**

Retained artifact:

- ID `10472785088`;
- size `6,944,965 B`;
- GitHub SHA-256 `6d54248209b7e5dbfc06b63bdf4867032984941cd2fcb3f63f3f0a16df7b8d4c`;
- independently downloaded/rehashed to the same digest;
- exact retained `environment_head` = `dc9911714365393d3f33038ef8bfda9e057a37e5`.

## Real-scene evidence

The receiver spans the actual current composition: Building + indexed five-surface Object + visible footprint cue + all three Nature receivers/material family + source-width Weather + route/cameras/lighting.

Across `17 states × 2 cameras × 2 Weather modes = 68` exact predecessor/candidate frame pairs:

- `path_eye`: mean **611.4706 changed pixels / 0.0772059%**; min `520`, max `667`; maximum channel delta `137` LSB;
- `elevated_oblique`: mean **5,943.4412 changed pixels / 0.7504345%**; min `5,914`, max `5,974`; maximum channel delta `126` LSB.

The visual delta is real and follows the Nature receiver regions/corrected winding-generated normal/culling response. Environment does **not** convert those measured differences into an aesthetic PASS.

All `1,224` inherited Weather source-width observations remain valid; maximum projected-width residual remains **`0.00974698571769128 px`**, below the inherited `0.05 px` gate.

Proof-host counter deltas relative to the exact indexed-Object current-world predecessor are **zero in both cameras** for:

- draw calls;
- objects;
- primitives;
- observed RenderingServer buffer memory;
- observed texture memory.

This is proof-host characterization only, not target-device performance acceptance.

## Decision / handoffs

Decision:

**`MIGRATED_NATURE_SOURCE_LINEAGE_REACHES_CURRENT_WORLD__FINAL_VISUAL_ACCEPTANCE_REQUIRES_ART_QA_REVIEW`**

Map PR #24 comment `5705646800` returns the exact receiver proof, mixed-lineage discovery, failed-draft provenance, Weather continuity, real image deltas and Runtime boundary to the active Environment lane.

Nature Geometry PR #9 comment `5705648082` reports that the source-owned migration now reaches the multi-asset current world, including the explicit `260 / 260 / 0` mixed-lineage adoption and placement-preservation evidence. Nature remains source owner.

Nature VFX PR #11 comment `5705649233` reports that the exact migrated sapling response reaches all 17 current-world states without changing response profile or receiver vertex sequence beyond the existing Map translation. VFX remains response owner.

Art Direction + Visual Observer / QA: review the retained current-world Nature delta before any visual-reference promotion. This Environment PASS intentionally does not manufacture visual preference.

Runtime: proof-host counter shape is unchanged, but target-device CPU/GPU/FPS/VRAM/heap/thermal/battery acceptance remains held. Runtime PR #34's footprint-index candidate remains a separate visual-tradeoff decision and is not bundled into this Nature receiver.

Building / Object / Object Materials / Weather: no authority or source value changed.

UC / Profession Fabric / Capability Cartography: no generalized extraction or capability move is supported by this one receiving proof.

## Explicit non-claims

This activation does **not** establish:

- final Art Direction or Visual-QA acceptance of the Nature receiver;
- visual neutrality;
- global outward-normal correctness beyond the pinned Nature migration evidence;
- final normals, tangents, UVs, textures or sidedness policy;
- physical wind or botanical/biomechanical correctness;
- arbitrary-camera/FOV/resolution/renderer/display equivalence;
- target-device FPS, CPU, GPU, VRAM, heap, thermal, battery or production performance;
- collision, navigation, interaction or gameplay behavior;
- Object footprint-index adoption from Runtime PR #34;
- CANON;
- production/game readiness;
- Environment mastery.

## Four-root gate

- **Truth:** mixed lineage, baked placement translation, two failed drafts, exact source/VFX heads, image deltas and zero proof-host counter deltas remain separately visible rather than being collapsed into a cleaner story.
- **Agency / non-domination:** Environment receives only the supported source changes; Nature, VFX, Art/QA and Runtime retain their own decision authority.
- **Continuity:** historical sapling/compact winding, already-migrated rear-tree lineage, prior current-world predecessor, failed verifier states, repaired implementation and exact final artifact all remain identifiable and rollbackable.
- **Wisdom before speed:** close the exact missing Nature receiving dependency in the newest real scene rather than reopening source topology, inventing new art, or bundling the separate Runtime footprint-index tradeoff.

The four AXM roots remain the merge gate.
