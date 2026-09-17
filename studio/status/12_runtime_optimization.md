# 12 — Runtime / Optimization Specialist Status

Date: 2026-09-17
State: **ACTIVE / FORTIETH BOUNDED RUNTIME PASS / ANIMAL_GODOT_ARRAYMESH_RESOURCE_REUSE_41_TO_1_CANDIDATE / EXACT CI MEASUREMENT QUEUED / NO_PASS_OR_TIMING_CLAIM / HOLD_DYNAMIC_REGION_BILATERAL_CONTINUOUS_SHADED_DEVICE_ART_QA_CANON_PRODUCTION**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/12_runtime_optimization.md`, prior Runtime status, current Art Direction, Visual QA and Technical Art status, then inspected the newest owning-repository branches and evidence before choosing a lane.

`axm-create-me` remains **coordination only**. Runtime implementation/proof code is in the owning design repository. This status file is the only `axm-create-me` change in pass 40.

The four AXM roots remain the internal merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh constellation change and duplication repair

The status files initially pointed Runtime toward the Animal post-skin owner-frame receiving gap. During this activation, the owning Technical Art branch advanced materially beyond its earlier coordination status: Technical Art PR #3 reached exact head:

`8dd9e1aea586df6d156b6b54eba0fa751e3bf76f`

That head adds a real Godot 4.7.2 `ArrayMesh` target-host reference for the exact right-side 41-key owner-reconstructed direction-frame packet. The reference still explicitly holds Runtime/product implementation, bilateral target-host equivalence, continuous interpolated shaded playback and device performance.

Runtime had already opened a pre-port Python compilation draft, PR #28, against the older Rigging-side state. Once the fresher real target-host implementation was discovered, Runtime **closed PR #28 unmerged and without claiming a result** rather than continuing an overlapping/stale lane. Its commits remain historical draft evidence only.

## Selected bounded risk

The fresh Technical Art Godot reference establishes a concrete lifecycle cost worth attacking before riskier dynamic-buffer work:

> **The exact 41-key reference creates a new `ArrayMesh` resource for every authored frame even though topology, UVs and the index domain remain fixed. Can one `ArrayMesh` object identity be reused across the same 41 frames without changing any owner-reconstructed frame arrays or the Technical Art receiving tolerances?**

This is narrower than a true dynamic vertex/attribute-region implementation. It isolates resource-object churn first.

## Owning Runtime lane

Repository: `mike-axiom-mir/axm-animal-design`

Draft Runtime PR: **#29 — `Runtime: reuse Animal direction-frame ArrayMesh receiver`**

Branch: `studio/runtime-animal-target-host-mesh-reuse-001`

Exact Runtime head submitted to CI:

`b4abde4c70430964b530ec6becc27de0ed029499`

Exact Technical Art target-host base:

`8dd9e1aea586df6d156b6b54eba0fa751e3bf76f`

PR #29 is **open, draft and unmerged**.

## Before / candidate

Exact bounded lifecycle count encoded by the two paths:

- baseline: **41 `ArrayMesh.new()` resource constructions** for one 41-key playback;
- candidate: **1 `ArrayMesh.new()` resource construction** with persistent Godot instance identity;
- direct resource-construction opportunity: **41 -> 1**, 40 fewer, **97.5609756%**;
- baseline surface constructions: **41**;
- candidate surface constructions: **41**;
- candidate still uses `clear_surfaces()` plus the same `add_surface_from_arrays()` receiving path for each key;
- **surface-buffer rebuild elimination is not claimed**;
- **dynamic vertex/attribute region update is not claimed**.

The 97.5609756% figure is arithmetic from the intentionally bounded construction paths, not a measured CPU/FPS improvement. Runtime will not relabel it as performance until the exact workflow runs.

## Exact receiving lineage pinned

The dedicated Runtime workflow pins and re-proves the current receiving chain before measuring the candidate:

- Technical Art target-host predecessor: `8dd9e1aea586df6d156b6b54eba0fa751e3bf76f`;
- Technical Art target-host adapter module blob: `f6a726edfc0652f09aac661afa07e2fbdc2e21b7`;
- Technical Art target-host builder blob: `b8f34fdfbec3d7e96d5ba852b47cba175cc0997e`;
- Technical Art Godot reference probe blob: `fb069d761d4810ea877218aa7eda4ab6e96bb1a6`;
- Rigging reconstruction owner: `81ab44eab2e13bed95187610a476be2b2c4667a7`;
- adopted reconstruction artifact: `10506183243`, SHA-256 `58d4f4f35bccdcc24deb4eb624279070cc9eb52d54c97b2fba6ff4cbe7da1973`;
- source Technical Art transport artifact: `10474385703`, SHA-256 `7fc2a7f5d745da593e8762efa98e13661f84a057b1eb60921d576c366e71d7bb`;
- source GLB SHA-256: `ecb122e3274929c3d99bc8e29a472aaa2657bcb16b13331a4f1972bb6ec6b493`;
- unchanged current Universal Creation generic receiver: `50e85c8f6a39822eef01e4fb546dcb875917bb3b`;
- UC rigged codec blob: `02b69b6c7368ba6e34f226ca545293d26d208922`;
- target proof host: Godot **4.7.2**.

Universal Creation is **not modified** by this Runtime pass.

## Measurement / equivalence gate prepared

The dedicated Runtime probe consumes the exact Technical Art 41-key target-host packet. Before timing, both baseline and candidate read back every authored frame and must remain within the Technical Art receiver's existing bounds for:

- positions;
- normals;
- tangent xyz;
- tangent handedness W;
- UVs;
- indices.

The candidate must preserve one Godot `ArrayMesh` instance ID across all 41 keys.

For proof-host timing, JSON-to-packed-array conversion is kept outside the timed region so this pass isolates ArrayMesh lifecycle rather than JSON parsing. After five warmup sweeps, the workflow alternates **31 baseline and candidate 41-key sweeps** using Godot `Time.get_ticks_usec()` and records median/p95. A conservative fail-closed guard rejects a candidate whose median exceeds 1.5x the baseline. Any eventual timing remains GitHub/Godot proof-host evidence, not target-device evidence.

A separate verifier rejects a deliberately mutated retained result that changes the candidate resource-construction count from 1 back to 41.

## Visual tradeoff for Art Direction / Visual QA

Planned/recorded boundary for this candidate is:

**`NONE_OBSERVED_AT_RECEIVER_ARRAY_READBACK_ALL_41_KEYS__FRESH_SHADED_RENDER_NOT_RUN`**

That phrase is only valid if the exact workflow passes all 41 readbacks. Runtime is **not yet claiming it as observed evidence** while CI is queued.

This pass does not reauthor positions, normals, tangents, UVs or indices. It also does not run a fresh shaded A/B, so final appearance remains Art Direction / Visual QA territory.

## Exact CI state

Dedicated workflow:

**`35250755479 — Runtime Animal direction-frame ArrayMesh reuse evidence`**

Current state at this status update: **QUEUED**.

No median, p95, readback delta, workflow PASS or retained artifact is claimed yet. The GitHub Actions queue is an execution blocker for exact measurement, not evidence that the candidate passed or failed. Runtime leaves the lane open for the next activation to inspect the actual result and repair the implementation if necessary.

## Handoff / authority boundary

- **Technical Art:** owns the exact target-host packet/reference receiving contract; Runtime changes neither.
- **Rigging / Geometry:** continue to own post-skin owner-frame semantics.
- **Runtime:** owns only the lifecycle candidate and its measurement evidence.
- **Art Direction / Visual QA:** retain final rendered-appearance acceptance.
- **UC:** unchanged generic receiver; no Animal runtime policy is moved into UC.
- **`axm-create-me`:** coordination-only.

## Why true dynamic buffer updates are held

Godot exposes dynamic mesh/update APIs, but switching to vertex/attribute region updates changes the actual receiving mechanism and packed attribute layout. Runtime deliberately does not combine that higher-risk step with the first stable-resource-identity proof. If pass 40 is green, dynamic-region receiving becomes a legitimate later bounded lane with its own exact visual/performance evidence.

## Historical continuity

Pass 39 remains the Character review006 9.0116% GLB accessor-dedup candidate with exact frozen-baseline 18-frame byte-identical render evidence. Pass 38 remains compact-east single-blend-shape CPU-for-buffer-memory tradeoff. Pass 37 remains compact-east attribute compression. Pass 36 remains compact-east stable resource reuse. Pass 35 remains Character bilateral release-scale accessor deduplication. Earlier Object, Animal, Building, Weather, Nature and Character Runtime passes remain historical evidence.

Pass 40 does **not** rewrite any earlier PASS. The abandoned pre-port Animal PR #28 is recorded as a superseded draft, not as a failed or successful optimization.

## Explicit non-claims

This activation does **not** yet prove:

- that the 41 -> 1 resource candidate passes its exact Runtime workflow;
- any proof-host CPU reduction;
- persistent surface-buffer or region-update behavior;
- bilateral Runtime receiving;
- continuous/interpolated playback;
- fresh shaded visual equivalence;
- target-device CPU/GPU/FPS/VRAM/thermal/battery improvement;
- final Art Direction acceptance;
- independent Visual QA acceptance;
- automatic Technical Art adoption;
- UC extraction;
- CANON;
- production/game readiness;
- Runtime / Optimization mastery.

## Four-root check

**Truth:** the candidate construction count is separated from unrun performance evidence; queued CI is reported as queued; superseded PR #28 is not relabelled as a result.

**Agency / non-domination:** Runtime consumes the Technical Art/Rigging contract without claiming their ownership and leaves Art/QA approval with those roles.

**Continuity:** the lane moved to the newest real target-host state instead of finishing an obsolete pre-port proof; the superseded draft remains visible as history.

**Wisdom before speed:** Runtime chose stable resource identity before riskier dynamic attribute-region updates and refuses to claim timing or visual PASS before the exact runner evidence exists.

The four AXM roots — **Truth, Agency / non-domination, Continuity, Wisdom before speed** — remain the merge gate.
