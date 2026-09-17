# 12 — Runtime / Optimization Specialist Status

Date: 2026-09-17
State: **PASS_44_OBJECT_CURRENT_WORLD_STATIC_COMPONENT_BATCHING / 33_TO_14_RENDER_SURFACES / MINUS38_TOTAL_DRAW_CALLS_AT_ALL_4_KEYS / MINUS89360B_RENDERER_BUFFER / 4_OF_4_SHADED_PAIRS_BYTE_IDENTICAL / HOLD_FUTURE_ARTICULATION_ART_QA_TARGET_DEVICE_CANON**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/12_runtime_optimization.md`, current Runtime status, and fresh Art Direction / VFX / Environment / Technical Art / Animation state before changing Runtime state.

`axm-create-me` remains **coordination only**. Runtime implementation and measured evidence live in `mike-axiom-mir/axm-map-design`. Universal Creation product code was not modified.

The four AXM roots remain the internal merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Constellation scan / non-overlap

Pass 43's Object VFX MultiMesh representation remains useful historical Runtime evidence, but current Art Direction explicitly holds that owner VFX presentation for a VFX-owned repair. Runtime therefore did **not** reopen PR #32 or optimize the held 18-mote effect again.

The fresh reusable risk is the newly proven articulated Object receiver in the current world:

- Technical Art exact retained parent `d2974dec5043ed9afad346574b23ef8bd4438a76` exposes **31 source-owned rigid component nodes / 33 component-surface instances / 812 triangles**;
- Animation exact green head `c2695f654f9dd44312ca5d205eceb27f7c2680ee` proves the exact **2.5 s / 40 Hz / 101-sample** lid/latch owner sequence through that receiver in real Godot wall-clock playback;
- Runtime/device acceptance for that 31-node / 33-surface representation was explicitly still held;
- no competing Runtime lane was batching the static subset of this exact articulated receiver.

For the pinned owner sequence, Runtime identifies **7 moving components** and **24 components that remain static for the entire exact sequence**. This created a bounded draw-call/memory opportunity without changing owner animation or source ownership.

## Selected bounded improvement — completed pass 44

Repository: `mike-axiom-mir/axm-map-design`

Draft Runtime PR: **#47 — `Runtime: batch static Object rigid components in current world`**

Branch: `studio/runtime-object-current-world-static-component-batching-001`

Base: `studio/animation-object-current-world-wallclock-001`

Exact measured Runtime head:

`08c5514835acc942858820b27874498c1c84c2ae`

PR #47 is **open / draft / unmerged / mergeable**.

Scoped result:

**`PASS_OBJECT_CURRENT_WORLD_STATIC_COMPONENT_BATCHING__HOLD_ART_QA_TARGET_DEVICE_FUTURE_ARTICULATION`**

Decision:

**`PASS_SEQUENCE_BOUND_STATIC_RENDER_BATCH__NO_AUTO_ADOPTION`**

### Representation

Runtime keeps:

- all **31 semantic component nodes** present and addressable;
- all **7 moving component render meshes** individual;
- the exact owner `AnimationPlayer`, keys, timing, easing and hierarchy;
- exact indexed component geometry, materials and **812 triangles**.

Only the **24 components proven static under this exact pinned 101-key sequence** surrender their individual renderer meshes. Their exact indexed surfaces are unioned only when material and non-index attribute domains match, into one shared static `ArrayMesh`.

This is intentionally **sequence-bound**. A future Object sequence that moves any component classified static here must debatch/rebind that component. Preserving the semantic node does not silently grant arbitrary future-articulation safety after its renderer mesh is detached.

## Before / after measured receiver evidence

Pinned proof host:

- Godot `4.7.2-stable`;
- X11;
- GL Compatibility;
- Mesa llvmpipe.

Retained owner sample indices:

`0 / 10 / 50 / 100` = `0.00 / 0.25 / 1.25 / 2.50 s`.

Receiver representation:

- control component-surface instances: **33**;
- control moving surface instances: **8**;
- control static surface instances: **25**;
- candidate static-batch surfaces: **6**;
- candidate total rendered surfaces: **14**;
- rendered-surface reduction: **33 -> 14**, saving **19 / 57.5757576%**;
- semantic component nodes: **31 -> 31**;
- triangles: **812 -> 812**.

Measured total-frame draw calls:

- key 0: **103 -> 65**;
- key 10: **105 -> 67**;
- key 50: **111 -> 73**;
- key 100: **103 -> 65**.

That is exactly **38 fewer total draw calls at every retained owner key**. Because this is a complete current-world proof frame rather than an isolated Object micro-scene, Runtime records the exact total-frame delta and does not mislabel all 38 as Object-only shader submissions.

Measured visible objects follow the same exact reduction:

- **103 -> 65**;
- **105 -> 67**;
- **111 -> 73**;
- **103 -> 65**.

Primitive counts remain matched per corresponding control/candidate frame:

- `6328 -> 6328`;
- `6352 -> 6352`;
- `6484 -> 6484`;
- `6328 -> 6328`.

## Memory evidence / tradeoff

Renderer buffer memory is stable across all four retained samples:

- control: **6,687,928 B**;
- candidate: **6,598,568 B**;
- reduction: **89,360 B / 1.3361388%**.

Texture memory is unchanged at **14,273,815 B**.

This is proof-host renderer evidence only. Runtime does not convert it into a target-device VRAM, GPU-time, FPS, thermal, battery or production-memory claim.

## Renderer-visible correctness / Art tradeoff

All four fixed current-world shaded control/candidate comparisons are **byte-identical**:

- image size: `1100 x 720` = **792,000 pixels** per pair;
- changed pixels across all four pairs: **0**;
- pixels over 1 LSB: **0**;
- maximum channel delta: **0 LSB**.

Owner moving-state equivalence is exact in the retained proof:

- maximum owner pose delta: **0.0 deg**;
- maximum moving-component receiver-center delta: **0.0 m**.

Visual tradeoff recorded for Art Direction:

**`NONE_OBSERVED_ALL_RETAINED_SHADED_PAIRS_PIXEL_IDENTICAL`**.

This still does **not** grant final Art Direction / Visual QA acceptance, arbitrary cameras, arbitrary future sequences, target-device acceptance or production readiness.

## Preserved failed predecessor / repair

The first dedicated pass-44 workflow is intentionally preserved as a tooling failure:

- workflow **`35279473269`**;
- candidate head before repair: `ea10534cfd29037e87cf97057bccc34dc27ca1ca`;
- failure occurred before measurement because Godot could not infer the return types of two local mesh-count variables.

The repair changed only those two locals to explicit `int` typing. It did **not** change the candidate representation, owner data or acceptance thresholds.

Final measured head is `08c5514835acc942858820b27874498c1c84c2ae`.

## Verification / fail-closed evidence

Dedicated final workflow:

**`35279605460 — Runtime Object current-world static component batching` — SUCCESS**.

Explicit negative controls pass fail-closed:

- removing the draw-call win is rejected;
- inflating the candidate to claim arbitrary future-articulation safety is rejected.

Retained artifact:

- ID **`10522290719`**;
- size **2,613,854 B**;
- GitHub SHA-256 **`a93a66ebc035c7d11ec00389b9c9f3b70c163dd83138f32a418e45f103963ee3`**;
- independently downloaded and rehashed to the same digest.

The retained artifact contains the exact Runtime summary/receipt, the exact green Animation and Technical Art parent evidence, negative-control receipts/logs, and all eight control/candidate shaded PNGs.

## Handoff / authority state

The measured result is recorded on Runtime PR #47 and returned to Animation PR #46 as an **option only**. No automatic adoption was requested.

Authority remains separated:

- Technical Art owns the 31-component receiver and hierarchy;
- Animation owns timing/easing/owner samples;
- Runtime owns this representation/performance evidence;
- VFX retains its own effect identity and current repair lane;
- Environment owns current-world composition adoption;
- Art Direction and Visual QA own perceptual/final acceptance.

## Continuity from pass 43

Pass 43 Object VFX MultiMesh evidence remains valid historical Runtime evidence and is not overwritten. Its exact owner representation demonstrated an 18-to-1 VFX draw-call reduction, but Art Direction subsequently held that owner VFX presentation pending VFX-owned repair. Runtime therefore preserves the pass-43 evidence while **not** using it as a reason to push the held effect into the current world.

Pass 42 Animal and earlier Runtime evidence remain recoverable in Git history and are not silently reinterpreted by this activation.

## Highest-value next Runtime gap

This exact current-owner-sequence static batching question is now answered on the proof host and should not be reopened without a materially different receiver or sequence.

The strongest remaining risks are:

- target-device CPU/GPU/FPS/VRAM/thermal behavior for the articulated Object receiver;
- proving safe dynamic rebatching/debatching when a future sequence activates a previously static component;
- current-world adoption after Environment and Art/QA choose the receiver;
- repaired Object VFX integration once VFX supplies a new owner presentation.

A later Runtime pass should choose only one when the owning lane is ready.

## Explicit non-claims

Pass 44 does **not** establish:

- arbitrary future-articulation safety for the 24 currently static components;
- target-device CPU/GPU/FPS/VRAM/thermal/battery benefit;
- automatic Environment adoption;
- automatic VFX adoption;
- final Art Direction acceptance;
- independent Visual QA acceptance;
- collision/gameplay behavior;
- UC extraction;
- CANON;
- production/game readiness;
- Runtime / Optimization mastery.

## Four-root check

**Truth:** the exact surface, draw-call, object, primitive, buffer-memory and raster deltas are retained together with the sequence-bound limitation and the failed predecessor. No target-device claim is inferred from llvmpipe.

**Agency / non-domination:** Runtime changes only the representation of components proven static in the pinned owner sequence. Technical Art, Animation, Environment, VFX, Art Direction and Visual QA retain their separate authority; no automatic adoption is requested.

**Continuity:** all 31 source-owned semantic component nodes remain present, the exact green Animation/Technical Art lineage is pinned, pass 43 remains visible, and the first failed workflow is preserved rather than rewritten away.

**Wisdom before speed:** the candidate stays draft despite strong proof-host draw-call, object-count, buffer-memory and pixel-equivalence evidence because future articulation, target-device performance and final Art/QA adoption remain unproven.

The four AXM roots — **Truth, Agency / non-domination, Continuity, Wisdom before speed** — remain the merge gate.
