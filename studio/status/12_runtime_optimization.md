# 12 — Runtime / Optimization Specialist Status

Date: 2026-09-17
State: **PASS_41_ANIMAL_PERSISTENT_VERTEX_BUFFER / SURFACE_REBUILDS_41_TO_0 / PROOF_HOST_MEDIAN_MINUS93P90_P95_MINUS93P99 / 41_OF_41_RENDER_PAIRS_BYTE_IDENTICAL / HOLD_PRODUCTION_SHADED_DEVICE_ART_QA_CANON**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/12_runtime_optimization.md`, prior Runtime status, and current Art Direction / Visual QA / Technical Art status before changing Runtime state.

`axm-create-me` remains **coordination only**. Runtime implementation and evidence stay in the owning design repository. Universal Creation product code was not modified.

The four AXM roots remain the internal merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Constellation scan / non-overlap

Runtime continued the already-open Animal Runtime PR #29 rather than opening a duplicate optimizer.

The fresh ownership picture remains compatible with that choice:

- Animal Technical Art owns the exact Godot target-host packet and current UC receiver-continuity evidence.
- Rigging / Geometry own the deformation and direction-frame semantics.
- Art Direction / Visual QA own final rendered appearance and acceptance.
- Runtime owns lifecycle, submission cost, culling/memory tradeoffs and target-device follow-up.
- `axm-create-me` owns only coordination/status.

Current Technical Art receiver authority consumed by this pass:

`1ca28d29c7e1aaa095c11aaa6085716669230cb3`

Current UC receiver dependency continuity was separately rebound to:

`452b179cccff8acdde8930f7bde8662e52f86949`

No UC product code was changed.

## Selected bounded improvement — completed pass 41

Repository: `mike-axiom-mir/axm-animal-design`

Existing draft Runtime PR: **#29 — `Runtime: reuse Animal ArrayMesh and persistent vertex buffer`**

Branch: `studio/runtime-animal-target-host-mesh-reuse-001`

Exact measured Runtime head:

`57d6f10ab04694d4fea8ef0803ac32f8623b15e6`

Scoped result:

**`PASS_ANIMAL_GODOT_PERSISTENT_VERTEX_BUFFER_UPDATE__41_TO_0_SURFACE_REBUILDS__41_RENDER_PAIRS_IDENTICAL__HOLD_DEVICE_ART`**

Pass 40 had already reduced `ArrayMesh.new()` resource construction from `41 -> 1`, but still performed `41` full surface rebuilds over the 41 authored keys. Pass 41 removes that remaining lifecycle churn without changing the Technical Art packet.

## Before / after representation

Pass-40 baseline:

- one persistent `ArrayMesh`;
- **41** complete surface rebuilds per 41-key playback;
- **41** surface constructions;
- no vertex-region updates.

Pass-41 candidate:

- one persistent `ArrayMesh`;
- one persistent surface created once with `Mesh.ARRAY_FLAG_USE_DYNAMIC_UPDATE`;
- **0** surface rebuilds during the 41-key playback;
- **1** surface construction to establish the receiver;
- **41** `surface_update_vertex_region()` calls, one per authored key;
- UV and index buffers remain untouched.

Measured structural reduction:

- surface rebuilds: **41 -> 0 = 100% fewer**;
- surface constructions needed for the 41-key receiver: **41 -> 1 = 97.5609756% fewer**.

The candidate uses Godot's own exact engine-packed `vertex_data` captured from the verified control surfaces instead of manually reproducing private vertex-buffer encoding.

Prepared payload tradeoff:

- **1,680 B per key**;
- **68,880 B cached across all 41 keys**.

That cache is an explicit memory-for-submission-time tradeoff and is excluded from the timed playback sweep preparation cost.

## Measured proof-host timing

Pinned target host:

- Godot `4.7.2`;
- GL Compatibility;
- Mesa llvmpipe GitHub proof host.

Protocol:

- five warmup sweeps;
- 31 alternating baseline/candidate measured sweeps;
- 41 authored keys per sweep.

Observed submission timing:

- baseline median: **164 us**;
- candidate median: **10 us**;
- median delta: **-93.9024390%**;
- baseline p95: **183 us**;
- candidate p95: **11 us**;
- p95 delta: **-93.9890710%**.

These are proof-host submission measurements only. They do **not** establish target-device FPS, total-frame CPU, GPU, VRAM, thermal or battery performance.

## Renderer-visible correctness

The pass first re-proved the exact current Technical Art target-host packet in Godot 4.7.2.

Runtime then compared the pass-40 full-surface-rebuild control against the persistent-buffer candidate through a target-renderer debug observer that directly exercises:

- POSITION through rendered geometry/silhouette;
- NORMAL through deterministic vertex-shader data;
- TANGENT through deterministic vertex-shader data.

Across all exact 41 authored keys:

- control/candidate render pairs: **41**;
- byte-identical pairs: **41 / 41**;
- changed pixels: **0**;
- maximum channel delta: **0 LSB**.

The observer is demonstrably live rather than blind:

- baseline key 0 versus baseline key 20 changes **7,811 pixels**;
- maximum control delta: **214 LSB**.

Fail-closed mutation: changing the retained equivalence result to only 40 identical pairs / one changed pixel is rejected by the verifier.

## Visual and culling tradeoff for Art / QA

Measured visual result:

**`NONE_OBSERVED_41_OF_41_POSITION_NORMAL_TANGENT_DEBUG_RENDER_PAIRS_BYTE_IDENTICAL`**

This is strong target-renderer evidence for the bounded buffer-update representation, but it is **not** production-material shaded acceptance.

Persistent surfaces also need a stable culling bound because per-key surface reconstruction no longer refreshes the bound. Runtime therefore uses one custom AABB spanning all 41 authored keys.

Measured culling tradeoff:

- full-motion envelope volume: `0.0809175978957847`;
- median per-key AABB volume: `0.0672689644958417`;
- envelope / median ratio: **1.2028964397x**.

The larger bound prevents stale-culling disappearance, but can reduce culling tightness. Art / Runtime should review this on the eventual target receiver rather than treating it as free.

## Preserved failures / no silent rewrite

Pass 41 required three distinct corrections, and all failed evidence remains preserved.

1. **Manual packing failed correctness** — Runtime head `fbc9c8a86daa299c6a3bf2b9aa421cf30b01df41`, workflow `35267861278`, artifact `10516719596`, SHA-256 `a00a9af5192bc7c923e1f4a1891faa7880a3c47eec263d82c1e04e664eaf7413`.
2. **Engine-packed candidate + unsuitable CPU readback observer remained HOLD** — head `79c3fead177996e7b825885701c877c81a1f46c7`, workflow `35268361181`, artifact `10518260489`, SHA-256 `3c2c5ae33fc0706994aff24fbb491e54d175fe0826411fae6136dd8a8735a83c`.
3. **First rendered observer failed in harness setup before measurement** — head `050a4675d550312c533cea5fa24e5897ca32e8e0`, artifact `10517816717`, SHA-256 `f4fccfa5e47787c27da4b2558e48aca98cb3734e0bc63bcdc5f2dbf976ac9eb4`. The repair changed only camera setup order; candidate and acceptance gates were not weakened.

The superseded dynamic-region workflow was retired after the final render-backed workflow became green, avoiding two competing active acceptance workflows in the same lane.

## Exact successful verification and retained evidence

Dedicated successful workflow:

**`35269033255 — Runtime Animal persistent dynamic-render repair evidence` — SUCCESS**.

Retained artifact:

- ID `10517956976`;
- size **351,092 B**;
- SHA-256 **`4e4062004015f4bf2f14c99b7179ee8b362063699a98c80dc383f4baf9740486`**;
- independently downloaded and rehashed to the same digest.

The workflow binds:

- pass-40 Runtime ancestry;
- exact current Technical Art receiver head and retained target-host artifact;
- current UC receiver dependency closure without modifying UC;
- both failed dynamic-buffer predecessors;
- the failed first render harness;
- pinned Godot 4.7.2;
- exact 41-key render comparison;
- observer-sensitivity control;
- fail-closed mutation;
- retained images and metrics.

## Current PR state

Animal Runtime PR #29 remains **open / draft / unmerged / mergeable** after the pass-41 documentation update.

Its title/body now describe both pass 40 and pass 41, and the PASS remains explicitly bound to exact measured Runtime head `57d6f10a...`; later documentation-only branch commits do not silently become new measurement heads.

## Highest-value next Runtime gap

The reusable lifecycle result is now much stronger: for this exact fixed-topology receiver, object churn and surface-rebuild churn can both be removed while renderer-visible POSITION/NORMAL/TANGENT output remains identical at all 41 authored keys.

The next bounded Runtime question should **not** re-open this same exact-key optimization. The remaining risk is representativeness:

- bilateral target-host receiving;
- continuous/interpolated playback between authored keys;
- target-device CPU/GPU/FPS/VRAM and culling behavior;
- production-material shaded equivalence.

A later Runtime pass should choose only one of those once the owning Technical Art / Art / QA receiver is available, and should not duplicate their active lanes.

## Explicit non-claims

Pass 41 does **not** establish:

- bilateral Runtime receiving;
- continuous/interpolated motion equivalence;
- production-material shaded equivalence;
- target-device CPU/GPU/FPS/VRAM/thermal/battery improvement;
- final Art Direction acceptance;
- independent Visual QA acceptance;
- automatic Technical Art adoption;
- UC extraction;
- CANON;
- production/game readiness;
- Runtime / Optimization mastery.

## Four-root check

**Truth:** the first two candidate proofs and the first render harness failure remain visible; the final PASS is based on the successful render-backed measurement, not rewritten predecessor evidence.

**Agency / non-domination:** Runtime changes lifecycle/buffer submission only. Technical Art, Rigging, Art Direction and Visual QA retain their own acceptance authority.

**Continuity:** pass 40 remains intact as the baseline; pass 41 extends it in the same PR and binds exact producer/UC continuity rather than silently replacing lineage.

**Wisdom before speed:** the optimization records its 68,880 B payload cache and 1.20289644x culling-envelope tradeoff instead of presenting the 93.9% proof-host submission reduction as a free universal win.

The four AXM roots — **Truth, Agency / non-domination, Continuity, Wisdom before speed** — remain the merge gate.
