# 12 — Runtime / Optimization Specialist Status

Date: 2026-09-17
State: **PASS_42_ANIMAL_EXACT_KEY_PAYLOAD_DEDUP / PREPARED_PAYLOAD_BYTES_68880_TO_35280_MINUS48P78 / 41_OF_41_RENDER_PAIRS_BYTE_IDENTICAL / PROOF_HOST_LOOKUP_COST_PLUS55P56_MEDIAN_PLUS66P67_P95 / HOLD_PRODUCTION_SHADED_DEVICE_ART_QA_CANON**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/12_runtime_optimization.md`, prior Runtime status, and current Art Direction / Visual QA / Technical Art status before changing Runtime state.

`axm-create-me` remains **coordination only**. Runtime implementation and evidence stay in the owning design repository. Universal Creation product code was not modified.

The four AXM roots remain the internal merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Constellation scan / non-overlap

Runtime continued the already-open Animal Runtime PR #29 rather than opening a duplicate optimizer.

The current ownership picture remains compatible with that choice:

- Animal Technical Art owns the exact Godot target-host packet and receiver/dependency-closure evidence.
- Rigging / Geometry own deformation and direction-frame semantics.
- Art Direction / Visual QA own final rendered appearance and acceptance; both still hold Animal production-shaded acceptance.
- Runtime owns lifecycle, submission, cache/memory tradeoffs, culling budgets and target-device follow-up.
- `axm-create-me` owns coordination/status only.

Current Technical Art receiver authority consumed by this pass:

`1ca28d29c7e1aaa095c11aaa6085716669230cb3`

Pass 41 remains the green persistent-buffer baseline at exact measured Runtime head:

`57d6f10ab04694d4fea8ef0803ac32f8623b15e6`

No UC product code was changed.

## Selected bounded improvement — completed pass 42

Repository: `mike-axiom-mir/axm-animal-design`

Existing draft Runtime PR: **#29 — `Runtime: reuse Animal ArrayMesh, persistent buffer, and exact-key cache`**

Branch: `studio/runtime-animal-target-host-mesh-reuse-001`

Exact measured Runtime head:

`911d1443eff2188a28727f98b79747058998e443`

Documentation-only owner-repo commit after measurement:

`d0b5fe71c0a1f6fe89fc1b6bf6289f0ea163f6d4`

Scoped result:

**`PASS_ANIMAL_EXACT_KEY_VERTEX_PAYLOAD_DEDUP__LOWER_CACHE__41_RENDER_PAIRS_IDENTICAL__HOLD_DEVICE_ART`**

### Why this gap

Pass 41 removed the large lifecycle cost:

- `ArrayMesh` construction already reduced to one stable resource;
- surface rebuilds reduced **41 -> 0**;
- one persistent dynamic surface remains;
- one `surface_update_vertex_region()` call is issued for each authored key;
- proof-host pass-41 submission median/p95 were **164 -> 10 us** and **183 -> 11 us** relative to full surface rebuilds;
- all 41 pass-41 POSITION/NORMAL/TANGENT debug render pairs were byte-identical.

Its remaining explicit memory tradeoff was a prepared exact Godot-packed vertex payload for every authored key:

- `1,680 B/key`;
- `41` payloads;
- `68,880 B` prepared payload bytes.

Pass 42 asks one narrower question only: **can byte-identical authored-key payloads share cached payload storage while preserving the exact pass-41 bytes and receiver behavior?**

No interpolation, quantization, regeneration, retiming or semantic reinterpretation is permitted.

## Before / after prepared payload budget

The exact 41-key sequence contains **21 unique packed payload byte streams**.

Measured key-to-unique pattern:

`0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0`

Budget:

- full pass-41 payload cache: **68,880 B** (`41 × 1,680 B`);
- pass-42 unique payload pool: **35,280 B** (`21 × 1,680 B`);
- prepared payload bytes saved: **33,600 B**;
- prepared payload-byte reduction: **48.780487804878%**.

Every authored key reconstructs the exact pass-41 packed byte stream before submission.

Both control and candidate retain:

- one `ArrayMesh`;
- one persistent dynamic surface;
- one surface construction total;
- zero surface rebuilds during playback;
- 41 vertex-region updates per playback;
- the same full-motion custom AABB.

Important accounting boundary: the **33,600 B** saving is prepared payload bytes only. The proof explicitly excludes the key-to-unique mapping container and does not claim total Runtime heap/allocator savings.

The measured palindrome is source-specific evidence. Runtime does **not** infer a generic symmetric-animation compression rule from one Animal clip.

## Renderer-visible correctness / Art tradeoff

Pinned target host:

- Godot `4.7.2`;
- GL Compatibility;
- Mesa llvmpipe proof host.

Runtime first re-proved the exact current Technical Art target-host packet, then compared full-cache versus deduplicated-cache submissions through the existing POSITION/NORMAL/TANGENT debug observer.

Across all 41 authored keys:

- render pairs: **41**;
- byte-identical pairs: **41 / 41**;
- changed pixels: **0**;
- maximum channel delta: **0 LSB**.

The observer remains demonstrably live:

- key 0 versus key 20 changes **7,811 pixels**;
- maximum observer delta: **214 LSB**.

Measured visual tradeoff:

**`NONE_OBSERVED_41_OF_41_DEBUG_RENDER_PAIRS_BYTE_IDENTICAL`**

Five retained exact PNG control/candidate pairs were independently rehashed after artifact download and each pair matched exactly.

This remains debug POSITION/NORMAL/TANGENT evidence, **not production-material shaded acceptance**. Art Direction / Visual QA retain final visual authority.

## Measured CPU tradeoff

Protocol:

- five warmup sweeps;
- 31 alternating measured sweeps;
- 41 authored keys per sweep.

Observed proof-host submission timing:

- full-cache median: **9 us**;
- deduplicated-cache median: **14 us**;
- median delta: **+55.5555556%**;
- full-cache p95: **9 us**;
- deduplicated-cache p95: **15 us**;
- p95 delta: **+66.6666667%**.

This is the central pass-42 tradeoff: **33.6 KB fewer prepared payload bytes costs additional lookup work on this proof host**.

Those tiny microsecond timings are observations only and are not an acceptance gate or target-device CPU/FPS claim. Pass 42 is therefore an **optional memory-for-lookup-cost representation**, not an unconditional improvement. Pass 41 remains the stronger default when its 68,880 B prepared payload cache is acceptable.

## Fail-closed evidence

Pass 42 retains explicit negative controls:

- replacing the 21-payload result with 41 unique payloads / zero saving is rejected;
- weakening render identity from 41/41 to 40/41 with one changed pixel is rejected.

Pass 41's earlier failed packing/readback/render-harness attempts remain preserved in its exact retained evidence and Git history. Pass 42 extends the green pass-41 receiver rather than rewriting those failures or replacing the pass-41 default.

## Exact successful verification and retained evidence

Dedicated workflow:

**`35269893851 — Runtime Animal exact-key payload dedup evidence` — SUCCESS**.

Retained artifact:

- ID **`10518013399`**;
- size **686,887 B**;
- SHA-256 **`111a43c131dce45f552fad307ce7d93b1a7f0733ec7ea4b994b5ca2912c9b31d`**;
- independently downloaded and rehashed to the same digest.

The artifact retains the exact Technical Art target-host packet/receipt, pass-41 evidence, pass-42 machine result, exact heads, five retained full-cache/deduplicated-cache render pairs, and the ownership/truth-boundary README.

## Current PR state

Animal Runtime PR #29 remains **open / draft / unmerged / mergeable**.

Its title/body now include pass 40, pass 41 and pass 42. Pass 42 remains explicitly bound to exact measured Runtime head `911d1443...`; the later documentation-only commit does not silently become a new measurement head.

## Highest-value next Runtime gap

This exact-key cache question is now answered and should not be reopened without a materially different receiver.

The stronger remaining risks are representativeness rather than another micro-optimization of the same 41-key cache:

- bilateral target-host receiving;
- continuous/interpolated playback between authored keys;
- target-device CPU/GPU/FPS/VRAM, culling and memory behavior;
- production-material shaded equivalence.

A later Runtime pass should choose one only when its owning Technical Art / Art / QA receiver is ready, and should avoid duplicating those active lanes.

## Explicit non-claims

Pass 42 does **not** establish:

- total Runtime heap or allocator savings equal to 33,600 B;
- a generic symmetric-animation cache rule;
- bilateral Runtime receiving;
- continuous/interpolated motion equivalence;
- production-material shaded equivalence;
- target-device CPU/GPU/FPS/VRAM/thermal/battery benefit;
- final Art Direction acceptance;
- independent Visual QA acceptance;
- automatic Technical Art adoption;
- UC extraction;
- CANON;
- production/game readiness;
- Runtime / Optimization mastery.

## Four-root check

**Truth:** the measured memory saving and the measured CPU regression are both retained; the mapping-container exclusion is explicit; pass 42 is not presented as a free win.

**Agency / non-domination:** Runtime changes cache representation only. Technical Art, Rigging, Art Direction and Visual QA retain their own authority.

**Continuity:** pass 41 remains the stronger default and exact baseline. Pass 42 extends it as an optional representation and preserves the earlier failures/results rather than silently replacing them.

**Wisdom before speed:** the lower-memory option is not auto-adopted because proof-host lookup cost rises and target-device behavior is unmeasured.

The four AXM roots — **Truth, Agency / non-domination, Continuity, Wisdom before speed** — remain the merge gate.
