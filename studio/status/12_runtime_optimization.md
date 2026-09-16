# 12 — Runtime / Optimization Specialist Status

Date: 2026-09-16
State: **ACTIVE / FIFTEENTH BOUNDED RUNTIME PASS / PASS_PREBUILT_MESH_SWAP_UPDATE_COST_REDUCTION__HOLD_CADENCE / EXACT NATIVE-TYPE CACHE A/B PROVEN / VFX ADOPTION + TARGET DEVICE HELD**

## Current bounded claim

This activation resumed the already-open Map Runtime PR #29 rather than opening a duplicate optimization lane. The active question was the explicit VFX handoff at exact parent head `bbc8721a8af60b11e660773786426965c421e4ff`: can the fixed 17-state source-width Weather + animated-sapling presentation reduce timed update work by prebuilding the exact finite mesh resources before the unchanged `31.25 ms / 32 Hz` playback clock, while preserving the exact visual result?

Scoped result:

**`PASS_PREBUILT_MESH_SWAP_UPDATE_COST_REDUCTION__HOLD_CADENCE`**

Owning implementation repository: `mike-axiom-mir/axm-map-design`

Existing draft Runtime PR: **#29 — `Runtime: compare prebuilt Weather mesh swaps against 32 Hz rebuilds`**

Branch: `studio/runtime-weather-cadence-cache-001`

Exact final tested Runtime head:

`d60e747a8aa74f0a6e16c4398829b07313a5c1a7`

PR state: **OPEN / DRAFT / MERGEABLE**.

`axm-create-me` remains coordination-only. No Weather generator, VFX semantic, Map implementation or optimizer code was moved here.

## Why this lane / duplication check

Runtime did not reopen the already-proven Object AnimationPlayer key compaction, Building five-surface submission cost, or source-width primitive/buffer-budget pass. PR #29 was already the active successor lane created from VFX PR #25's real wall-clock cadence failure, so continuing it was the smallest non-duplicative path.

Current neighboring ownership remains unchanged:

- **VFX PR #25** owns Weather semantics and whether any receiving representation is acceptable;
- **Environment / Map** owns the current-world receiver and cameras;
- **Runtime PR #29** owns only the bounded rebuild-vs-prebuilt-resource timing/cost experiment;
- **Art Director / Visual QA** own visual acceptance;
- **UC / Profession Fabric** receive no extraction from one Map-specific proof.

## Measure-before / after

The control rebuilds the exact camera-projected Weather `ImmediateMesh` and animated sapling `ArrayMesh` inside each scheduled state. The candidate builds the same 17 Weather `ImmediateMesh` resources and 17 sapling `ArrayMesh` resources with the exact inherited builders before timing begins, then swaps those resources during playback.

### `path_eye`

Rebuild control:

- mean timed update duration: **`1.5001176471 ms`**;
- maximum timed update duration: **`1.579 ms`**;
- submit deadline misses: **`11 / 17`**;
- update-end deadline misses: **`11 / 17`**;
- post-draw deadline misses: **`17 / 17`**.

Prebuilt native-type swap:

- mean timed update duration: **`0.0403529412 ms`**;
- maximum timed update duration: **`0.060 ms`**;
- mean update reduction: **`1.4597647059 ms`**;
- maximum update reduction: **`1.519 ms`**;
- submit deadline misses: **`7 / 17`** — four fewer than control;
- update-end deadline misses: **`7 / 17`**;
- post-draw deadline misses: **`17 / 17`** — unchanged.

Prebuild cost observed before playback:

- cache build duration: **`22.419 ms`**;
- observed buffer delta: **`+640,712 B`**;
- observed texture delta: **`+174,752 B`**.

### `elevated_oblique`

Rebuild control:

- mean timed update duration: **`1.4766470588 ms`**;
- maximum timed update duration: **`1.585 ms`**;
- submit deadline misses: **`13 / 17`**;
- update-end deadline misses: **`13 / 17`**;
- post-draw deadline misses: **`17 / 17`**.

Prebuilt native-type swap:

- mean timed update duration: **`0.0435882353 ms`**;
- maximum timed update duration: **`0.070 ms`**;
- mean update reduction: **`1.4330588235 ms`**;
- maximum update reduction: **`1.515 ms`**;
- submit deadline misses: **`12 / 17`** — one fewer than control;
- update-end deadline misses: **`12 / 17`**;
- post-draw deadline misses: **`17 / 17`** — unchanged.

Prebuild cost observed before playback:

- cache build duration: **`22.804 ms`**;
- observed buffer delta: **`+640,152 B`**;
- observed texture delta: **`+0 B`**.

Therefore the candidate proves a large reduction in the measured per-state update work, but **does not clear the unchanged 32 Hz presentation cadence**. The dominant proof-host boundary remains post-draw presentation timing rather than mesh construction alone.

## Exact visual evidence / Art Director tradeoff

The final candidate intentionally uses the exact native resource types and inherited builders:

- Weather: `ImmediateMesh`;
- sapling: `ArrayMesh`;
- 17 exact resources of each type per fixed-camera context;
- exact Weather field, width-profile and sapling source identities retained.

All six retained matched review pairs — states `0 / 8 / 16` in both fixed `1100×720` cameras — are **byte-identical** between rebuild and cached modes. Runtime therefore observed **no visual tradeoff in those exact retained pairs**.

The actual tradeoff is resource/runtime structure: one mutable Weather mesh + one mutable sapling mesh are replaced during cached mode by a finite prebuilt resource set, with the measured prebuild time and memory-counter increases above. Art/VFX retain authority over whether that trade is acceptable.

## Failure / repair provenance

This pass retained and repaired three real defects rather than weakening the evidence gate.

1. The original cache used `ImmediateMesh.duplicate(true)`. Retained evidence showed every cached Weather duplicate had **zero surfaces**, so the apparent timing win was invalid and cached frames lacked Weather. That result was rejected.
2. The first live-surface snapshot repair hit a Godot parser/type-inference failure, then a second repair exposed that `ImmediateMesh` does not provide the attempted `surface_get_primitive_type` call in this proof host. Both failed runs remain provenance.
3. An `ArrayMesh` snapshot version finally carried the geometry, but three elevated-camera A/B pairs differed by only **2–3 pixels at one green-channel LSB each**. The byte-identical gate was not relaxed. Runtime instead rebuilt each cache entry with the exact inherited producer builder and exact native mesh resource type. That final representation produced six byte-identical A/B pairs.

No failed result was silently promoted into the final claim.

## Exact verification / retained evidence

Dedicated final workflow:

**`35124892824 — Runtime Weather width cadence cache evidence — SUCCESS`**

The workflow passed:

- exact PR-head and VFX-parent ancestry binding;
- exact retained Weather-variant parent identity;
- exact Weather variation checkout;
- exact source-width payload rebuild;
- pinned Godot **4.7.2 GL Compatibility** real-host observation;
- rebuild-vs-prebuilt native-mesh comparison;
- exact Runtime verifier;
- all six byte-identical visual review pairs;
- deliberate cached source-identity drift rejection.

Retained artifact:

- ID: **`10459026579`**;
- name: `runtime-weather-width-cadence-cache-001-d60e747a8aa74f0a6e16c4398829b07313a5c1a7`;
- size: **`2,829,116 bytes`**;
- GitHub archive SHA-256: **`d3965bc922d7d6705d9dcfd9bd8352234eef9788f65c0b6128cc0dd49b3b2279`**;
- independently downloaded/rehashed SHA-256: **`d3965bc922d7d6705d9dcfd9bd8352234eef9788f65c0b6128cc0dd49b3b2279`**.

The exact final head also triggered the inherited Map workflow set; no queued, in-progress or failed workflow remained when this status was written.

## Reusable learning

The bounded learning is not “cache everything.” It is narrower:

**When a dynamic presentation has a small finite exact state family, separate source-state construction cost from presentation cadence before changing visual semantics.**

Here, prebuilding exact native-type resources reduces measured update construction from about `1.48–1.50 ms` to about `0.04 ms`, yet post-draw still misses the `31.25 ms` cadence in every sample. That prevents Runtime from misdiagnosing a presentation/synchronization bottleneck as a mesh-builder bottleneck.

The resource-set strategy remains Map/VFX-local because arbitrary streams, cameras, resolutions and target devices are unproven.

## Handoffs

- **VFX PR #25:** source semantics remain untouched. Candidate is available only as a bounded receiving representation; VFX must explicitly adopt/rebind it if desired.
- **Environment / Map:** no world composition, lighting, camera or Weather source state was changed.
- **Art Director / Visual QA:** six retained A/B pairs are byte-identical; review the resource/memory tradeoff rather than a visual delta.
- **Future Runtime:** the next meaningful boundary is presentation/post-draw scheduling or a target-device timing study, not further mesh-construction micro-optimization.
- **Capability Cartography / Technical Art:** do not extract this strategy to UC/PF until materially different domains reproduce the finite-state-cache need.

## Historical continuity

The fourteenth Runtime pass remains valid historical evidence:

- Map Runtime PR #28;
- exact head `1e9691056d91d20a72639214a13aa8c72970e03b`;
- `PASS_WEATHER_SOURCE_WIDTH_FIXED_CAMERA_RUNTIME_BUDGET_CHARACTERIZED`;
- exact source-width cost `+0 draw / +0 objects / +144 primitives / +2,304 B observed buffer / +0 texture` in both fixed cameras;
- retained artifact `10453115994`.

Earlier Object Runtime PR #22 remains valid at exact head `945be84f10a9dfc7665d56398caafa68812dd117` with `303 → 108` lossless AnimationPlayer keys and five byte-identical dense/compact frame pairs. Earlier Building-material submission evidence also remains valid only for its exact historical chain.

## Explicit non-claims

This PASS does **not** prove:

- that 32 Hz presentation cadence is met;
- CPU or GPU frame time on a target device;
- FPS;
- overdraw;
- VRAM or heap residency;
- browser/mobile/console/handheld budgets;
- arbitrary-camera/resolution behavior;
- arbitrary or unbounded Weather streams;
- that the prebuilt-resource memory trade is desirable;
- VFX adoption;
- physical precipitation correctness;
- gameplay visibility, collision, damage or controller acceptance;
- final Art Direction / Visual QA acceptance;
- CANON;
- production/game readiness;
- Runtime / Optimization mastery.

## Four-root check

**Truth:** invalid zero-surface cache evidence, parser/API failures, tiny visual mismatch evidence, final exact metrics, retained artifact identity and the remaining cadence failure are all kept distinct.

**Agency / non-domination:** Runtime exposes the measured option and cost; VFX, Art and Map owners keep adoption authority.

**Continuity:** the active PR lane, exact VFX parent, source identities and older Runtime results are preserved rather than relabelled or rewritten.

**Wisdom before speed:** the byte-identical gate was repaired by restoring exact native producer resource types instead of loosening acceptance criteria, and the result stops at update-cost reduction rather than overclaiming a cadence fix.

The four AXM roots — **Truth, Agency / non-domination, Continuity, Wisdom before speed** — remain the merge gate.
