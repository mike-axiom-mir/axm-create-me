# 12 — Runtime / Optimization Specialist Status

Date: 2026-09-17
State: **PASS_43_OBJECT_VFX_MULTIMESH_BATCHING / 18_TO_1_VFX_DRAW_CALL / TOTAL_FRAME_49_TO_32_MINUS34P69 / 0_PIXELS_OVER_1LSB_ACROSS_6_AB_PAIRS / HOLD_ART_QA_TARGET_DEVICE_CANON**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/12_runtime_optimization.md`, current Runtime status, and current Art Direction / VFX / Visual QA / Technical Art constellation state before changing Runtime state.

`axm-create-me` remains **coordination only**. Runtime implementation and measured evidence live in the owning Object repository. Universal Creation product code was not modified.

The four AXM roots remain the internal merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Constellation scan / non-overlap

A fresh Object VFX lane is now mature enough for a Runtime representation pass:

- Object VFX PR #31 is open/draft and owns the exact 18-mote lid-release effect, owner seed `41027`, trigger semantics and visual identity.
- VFX has real Godot target-host and wall-clock presentation evidence, while explicitly leaving production representation/performance to Runtime.
- Animation retains timing/easing/order.
- Art Direction / Visual QA retain final appearance acceptance.
- No competing Object VFX Runtime batching lane was open.

Runtime therefore did **not** reopen Animal pass 42, Character, Nature, Building, texture-format or animation-key-budget work. It opened one bounded Object VFX representation lane only.

Exact VFX parent consumed by Runtime:

`1fc2eb89b7869b81a97614a586e04375a7ad0547`

Frozen owner-effect SHA-256:

`f7a038c488405cdd8341368d155db325093907090ddbb74d557139cadf6ba813`

## Selected bounded improvement — completed pass 43

Repository: `mike-axiom-mir/axm-object-design`

Draft Runtime PR: **#32 — `Runtime: batch lid-release motes with one MultiMesh`**

Branch: `studio/runtime-object-lid-release-mote-batching-001`

Exact measured Runtime head:

`b45dfee4c0a6ae92b8bc5056d4846331075fdadc`

Scoped result:

**`PASS_RUNTIME_LID_RELEASE_MOTE_MULTIMESH_BATCHING__HOLD_ART_QA_TARGET_DEVICE`**

Decision:

**`PASS_ONE_MULTIMESH_REPLACES_EIGHTEEN_OWNER_MOTE_MESH_INSTANCES_WITH_REAL_DRAW_CALL_REDUCTION__NO_AUTO_ADOPTION`**

### Why this gap

The proven VFX receiver represented each of the 18 deterministic release motes independently:

- 18 `MeshInstance3D` resources;
- 18 `QuadMesh` resources;
- 18 `StandardMaterial3D` resources;
- one draw call per active mote.

That representation is correct for authoring/proof, but the repeated billboard/material/draw-call shape is a reusable production-runtime risk. Runtime therefore tested the smallest representation-only replacement:

- one `MultiMeshInstance3D`;
- one `MultiMesh`;
- one shared unit `QuadMesh`;
- one shared billboard material;
- per-instance transform preserves the owner mote position and size;
- per-instance color alpha preserves the owner fade envelope.

No seed, spawn time, lifetime, velocity, gravity, emitter seam, trigger, Animation timing/easing/order, source geometry, Rigging or gameplay semantics were changed.

## Measured draw-call / object budget

Pinned target host:

- Godot `4.7.2-stable`;
- X11;
- GL Compatibility;
- Mesa llvmpipe proof host.

At the retained continuity camera at `0.40 s`, all **18 motes are active**.

Measured total-frame counts:

- legacy draw calls: **49**;
- batched draw calls: **32**;
- draw calls saved: **17**;
- total-frame draw-call reduction: **34.6938775510204%**;
- legacy objects in frame: **49**;
- batched objects in frame: **32**;
- primitives: **848 -> 848**.

The no-effect control scene is **31 draw calls** at the same observation. Therefore the isolated VFX contribution is:

- legacy VFX: **18 draw calls**;
- batched VFX: **1 draw call**;
- VFX-specific draw-call reduction: **18 -> 1**, saving **17 / 94.4444444444444%**.

At `0.30 s`, when nine motes are active, total draw calls are **40 legacy -> 32 batched**, matching the same base-scene + one-batched-draw pattern.

At inactive `0.20 s` and `0.80 s`, total draw calls return to the **31-draw** base scene.

## Memory / primitive tradeoff

This pass produced a draw/object-count win, **not a measured proof-host renderer-memory win**.

At the retained 18-active `0.40 s` probe:

- buffer memory: **6,448,804 B -> 6,448,804 B**;
- video memory: **15,759,719 B -> 15,759,719 B**;
- texture memory in the retained comparisons: **9,310,915 B -> 9,310,915 B**;
- primitives: **848 -> 848**.

Runtime therefore does not claim memory reduction, geometry reduction or lower GPU primitive work from this pass.

## Renderer-visible correctness / Art tradeoff

Six fixed control / legacy / batched comparisons were retained:

- continuity three-quarter at `0.20`, `0.30`, `0.40`, `0.52`, `0.80 s`;
- left-oblique seam at `0.40 s`.

Owner visibility is preserved:

- `0.20 s`: 0 active;
- `0.30 s`: 9 active;
- `0.40 s`: 18 active;
- `0.52 s`: 18 active;
- `0.80 s`: 0 active;
- left-oblique `0.40 s`: 18 active.

Candidate/control visibility envelopes match the legacy/control evidence at every retained sample. Legacy versus batched image evidence:

- comparison pairs: **6**;
- byte-identical PNG pairs: **3 / 6**;
- pixels differing by more than 1 LSB across all six pairs: **0**;
- maximum RGB delta: **1 LSB**.

This is recorded as a **very low but nonzero raster tradeoff**, not as literal byte identity across the full set. The retained result is strong enough to show the MultiMesh representation is visually faithful in these contexts, but Art Direction and Visual QA still own acceptance. Transparent-instance ordering and arbitrary cameras/effect families are not generalized from this proof.

## Preserved failed predecessor / repair

The first exact Runtime workflow is intentionally retained as a real failure:

- workflow **`35273776654`**;
- Runtime head `21b796a31cbd2133e0d713b2806f216648a8bfc4`;
- artifact ID `10518778841`;
- artifact size **141,585 B**;
- artifact SHA-256 `cb88a6e308215fe136727bcb93d349e6f9b23059283b79710f4029e1f972dc85`.

The first batched candidate lost per-instance size because the billboard material discarded transform scale. At `0.30 s`, the normal owner receiver changed **1,142 pixels** from control, while the broken batched candidate changed **348,097 pixels** and was rejected by the visual envelope gate with `batched active visibility escaped owner envelope`.

The repair changed only the shared billboard representation by enabling `billboard_keep_scale=true`. It did **not** change owner effect parameters, seed `41027`, spawn/lifetime/velocity/gravity, Animation timing/easing, source geometry or acceptance thresholds.

The repaired exact head is the measured head `b45dfee4...` above.

## Verification / fail-closed evidence

Dedicated successful workflow:

**`35273951531 — Object Runtime lid-release mote MultiMesh batching` — SUCCESS**.

The full Object regression suite passed on both supported proof environments:

- Python 3.11: **46 / 46 tests**;
- Python 3.13: **46 / 46 tests**.

Explicit negative controls also passed fail-closed:

- mutating the candidate to remove the draw-call win is rejected (`49 -> 49`);
- mutating the candidate resource shape back toward 18 MultiMesh instances is rejected.

Retained green artifact:

- ID **`10519870498`**;
- size **470,755 B**;
- SHA-256 **`6e0ca93233394ecfdaba57707625f4340a38bf43bd2dc9d0fad9a6e845154b37`**;
- independently downloaded and rehashed to the same digest.

The artifact retains the frozen owner effect, exact dependency identities, Runtime probe/verifier, receipt and all retained control/legacy/batched PNG evidence.

## Current PR / handoff state

Object Runtime PR #32 is **open / draft / unmerged / mergeable** at exact measured head `b45dfee4c0a6ae92b8bc5056d4846331075fdadc`.

The exact measured result was returned to:

- Runtime PR #32 as its evidence record;
- Object VFX PR #31 as an **option only**, with explicit no-auto-adoption language.

Art Direction / Visual QA remain the owners of final perceptual acceptance. VFX retains effect identity. Runtime retains representation/performance evidence.

## Continuity from pass 42

Pass 42 Animal exact-key payload dedup remains valid historical Runtime evidence and is not overwritten by this pass.

Its scoped result remains:

`PASS_ANIMAL_EXACT_KEY_VERTEX_PAYLOAD_DEDUP__LOWER_CACHE__41_RENDER_PAIRS_IDENTICAL__HOLD_DEVICE_ART`

Measured pass-42 tradeoff remains:

- prepared payload bytes **68,880 -> 35,280 B** (`-33,600 B / -48.7804878%`);
- 41/41 debug render pairs byte-identical;
- proof-host lookup median **9 -> 14 us** and p95 **9 -> 15 us**, so pass 41 remained the stronger Animal default when its larger cache is acceptable.

The full prior pass-42 status remains recoverable in Git history; this activation does not silently reinterpret or promote it.

## Highest-value next Runtime gap

This exact 18-mote draw-call question is answered for the current owner effect and should not be reopened without a materially different receiver.

The stronger remaining Runtime risks are now:

- target-device CPU/GPU/FPS/VRAM/thermal behavior for this batched VFX representation;
- continuous production particle/update cost rather than fixed retained samples;
- batching behavior with multiple simultaneous transparent effects/material families;
- final Art/QA review under production shading/camera contexts.

A later Runtime pass should select only one when its owner lane is ready and must not generalize this single-effect proof into a universal particle-runtime rule.

## Explicit non-claims

Pass 43 does **not** establish:

- a proof-host renderer-memory reduction;
- lower primitive count;
- lower target-device GPU time;
- target-device CPU/FPS/VRAM/thermal/battery benefit;
- arbitrary transparent-effect ordering equivalence;
- a universal MultiMesh rule for every VFX family;
- production particle-system suitability;
- final Art Direction acceptance;
- independent Visual QA acceptance;
- automatic VFX adoption;
- UC extraction;
- CANON;
- production/game readiness;
- Runtime / Optimization mastery.

## Four-root check

**Truth:** the real draw-call win is reported together with the unchanged memory/primitive counts, the 1-LSB raster ceiling, and the preserved failed predecessor. No target-device claim is inferred from llvmpipe.

**Agency / non-domination:** Runtime changes representation only. VFX retains effect identity; Animation retains timing; Art Direction and Visual QA retain perceptual authority; no automatic adoption is requested.

**Continuity:** the exact VFX owner effect and prior green receiver remain frozen. The failed first batching attempt and pass-42 Animal history remain visible rather than being rewritten away.

**Wisdom before speed:** the candidate is kept draft despite a large VFX draw-call reduction because target-device performance and final Art/QA acceptance are still unmeasured.

The four AXM roots — **Truth, Agency / non-domination, Continuity, Wisdom before speed** — remain the merge gate.
