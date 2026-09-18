# 12 — Runtime / Optimization Specialist Status

Date: 2026-09-18
State: **PASS_47_OBJECT_VFX_V2_MULTIMESH_REBIND / 18_TO_1_VFX_DRAW_CALL / 49_TO_32_TOTAL_FRAME_DRAWS / EXACT_OWNER_V2_RASTER_BOUND / <=1_LSB_RUNTIME_AB / HOLD_VISUAL_QA_TARGET_DEVICE**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/12_runtime_optimization.md`, current Runtime status, and fresh Art Direction / VFX / Technical Art / Visual QA state before selecting work.

`axm-create-me` remains **coordination only**. Runtime implementation/evidence lives in `mike-axiom-mir/axm-object-design`. Universal Creation product code was not modified.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh constellation / non-overlap scan

Pass 46 left Object VFX MultiMesh rebind as a downstream trigger once the repaired irregularity-v2 owner packet was stable. That trigger is now real:

- Object VFX PR #31 branch `studio/vfx-object-lid-release-motes-001` is at exact head `bc114ee7ec876107892ccedeefc8e5020315488a`;
- Art Direction passed the repaired owner presentation at that exact VFX head;
- the VFX source lane is frozen rather than asking Runtime to retune it;
- independent Visual QA of the owner packet remains separate;
- existing Runtime PR #32 already owns the bounded 18-billboard → one-MultiMesh representation question, so Runtime extended that lane rather than opening a duplicate PR.

Runtime did **not** reopen Animal key reduction, Animal joint-index width, Object winding, Object static-component batching, or other already-owned lanes.

## Selected bounded improvement — pass 47

Repository: `mike-axiom-mir/axm-object-design`

Existing draft Runtime PR: **#32 — `Runtime: batch lid-release motes with one MultiMesh`**

Runtime branch: `studio/runtime-object-lid-release-mote-batching-001`

Exact measured Runtime head:

`f7408712a90e5b0b7f3043f577580d912d8d0527`

Exact repaired VFX-v2 owner head:

`bc114ee7ec876107892ccedeefc8e5020315488a`

PR #32 is **open / draft / unmerged / mergeable**.

Scoped result:

**`PASS_RUNTIME_LID_RELEASE_MOTE_V2_MULTIMESH_REBIND__HOLD_QA_TARGET_DEVICE`**

The source-owned effect remains 18 motes with owner seed `41027`. Runtime does not modify owner motion, timing, lifetime, velocity, gravity, trigger semantics, geometry, gameplay or physics.

The repaired VFX-v2 presentation details are preserved, including:

- sampler `DECORRELATED_INTEGER_MIX_V2_IRREGULAR_MARKS`;
- billboard aspect `0.58..1.0`;
- alpha scale `0.55..1.0`;
- vertical spawn jitter `±0.012 m`;
- curve amplitude `±0.01 m`;
- curve vertical ratio `0.65`.

Only the receiving representation changes:

- legacy: **18** `MeshInstance3D` resources + **18** `QuadMesh` resources + **18** materials;
- candidate: **1** `MultiMeshInstance3D` + **1** `MultiMesh` + **1** shared unit `QuadMesh` + **1** shared material;
- per-instance transform preserves owner size/aspect and position;
- per-instance color preserves owner alpha envelope;
- `billboard_keep_scale=true` remains the preserved pass-43 repair that prevents billboard scale loss.

## Measure-before / after

Dedicated workflow:

**`35293235512 — Object Runtime lid-release mote v2 MultiMesh rebind` — SUCCESS**.

At retained `0.40 s` continuity with all 18 motes active:

- total-frame draw calls **49 → 32**;
- saving **17 draw calls / 34.69387755%** of the complete measured frame;
- no-effect base scene: **31 draw calls**;
- isolated VFX contribution **18 → 1 draw call**, saving **17 / 94.44444444%**;
- objects in frame **49 → 32**;
- primitives **848 → 848**;
- renderer buffer memory **6,448,804 B → 6,448,804 B**;
- video memory **15,759,719 B → 15,759,719 B**;
- retained texture memory remains **9,310,915 B**.

This is therefore a real proof-host **draw-call / object-count** win, not a measured primitive-count, renderer-buffer-memory or video-memory win.

## Exact owner continuity proof

The Runtime workflow does not merely regenerate something visually similar. It downloads and SHA-binds the exact green repaired VFX-v2 owner artifact before measurement.

Exact VFX-v2 donor evidence:

- owner workflow `35278507621`;
- owner artifact ID `10521288521`;
- owner artifact SHA-256 `521575306651a0c3b41280315da4c75df6d55ae3a2ae0e6e8b40ba740bf81d17`;
- exact effect JSON SHA-256 `9f16e2789e547f420781af09d2a90724ead5bf4155783c5ecfd96b8f4e8ff6d7`;
- donor head `bc114ee7ec876107892ccedeefc8e5020315488a`.

The Runtime verifier requires the legacy receiver raster SHA to reproduce the exact retained VFX-v2 owner raster at:

- continuity `0.20 s`;
- continuity `0.40 s`;
- continuity `0.80 s`;
- left-oblique seam `0.40 s`.

Those exact raster bindings passed before the batched candidate was accepted.

This closes the continuity hole from pass 43: the draw-call optimization is now measured against the **current repaired owner packet**, not silently inherited from the older owner presentation.

## Visual tradeoff for Art Direction / Visual QA

Six fixed legacy-versus-batched A/B comparisons were retained:

- continuity `0.20 s`;
- continuity `0.30 s`;
- continuity `0.40 s`;
- continuity `0.52 s`;
- continuity `0.80 s`;
- left-oblique seam `0.40 s`.

Measured Runtime A/B:

- **0 pixels differ by more than 1 LSB** across all six pairs;
- maximum RGB delta is **1 LSB**;
- **2/6 pairs are byte-identical**;
- active mote counts match exactly;
- inactive `0.20 s` / `0.80 s` closure matches exactly;
- no-effect versus batched visibility remains nonzero and owner-bounded at the active samples;
- at `0.40 s`, the repaired owner effect changes **1,239 pixels** in continuity and **1,643 pixels** in the seam view relative to no-effect control, demonstrating that the observer is seeing the effect rather than comparing two empty frames.

Recorded tradeoff:

**`NONE_OBSERVED_ABOVE_1_LSB_IN_6_FIXED_RUNTIME_AB_PAIRS__MAX_1_LSB__HOLD_VISUAL_QA_TARGET_DEVICE`**

Art Direction acceptance of the **owner effect** is not silently inherited by this new receiving representation. Independent Visual QA remains authoritative for the Runtime A/B, and arbitrary transparent-effect ordering is not generalized from this one effect.

## Fail-closed evidence

The workflow deliberately corrupts two claims after the good receipt is produced:

- removes the measured draw-call win;
- injects a visual-equivalence regression.

Both mutations are rejected before the good receipt is restored and re-verified.

The older pass-43 failed candidate also remains preserved: its first MultiMesh representation lost billboard scale and produced grossly oversized motes. Runtime repaired representation only with `billboard_keep_scale=true`; it did not weaken the visual gate or retune the source effect.

## Retained exact Runtime evidence

Green artifact:

- ID **`10527058339`**;
- size **476,207 B**;
- GitHub SHA-256 **`4855242783de6fd828aaf7dd9f232815d74c9f4bab676c639b17f46fe1935795`**;
- independently downloaded and rehashed to the same digest after workflow completion.

The retained artifact contains the exact owner evidence binding, Runtime receipt, observer/verifier, and all 18 control / legacy / batched PNGs for the six retained comparisons.

## Authority / handoff

Runtime PR #32 now documents pass 43 history plus pass 47 exact VFX-v2 rebind and requests **no automatic adoption**.

- VFX retains owner presentation/effect authority.
- Animation retains mechanical timing/easing/order authority.
- Runtime owns the one-MultiMesh receiving representation and proof-host draw-call measurements.
- Art Direction retains owner-effect artistic authority; its source acceptance is not rewritten.
- Visual QA retains independent Runtime-representation acceptance authority.
- target-device CPU/GPU/FPS/VRAM/thermal acceptance remains open.
- UC remains untouched and receives no Object-specific MultiMesh policy.

## Continuity from pass 46 and earlier

Pass 46 Animal animation-key budget remains valid and separately held for Art/QA because it has a measurable silhouette tradeoff. Runtime did not squeeze it further.

Pass 45 Animal joint-index width, pass 44 Object static-component batching, pass 43 original Object VFX batching, passes 40–42 Animal lifecycle/cache work, and earlier Runtime evidence remain intact and recoverable.

Pass 47 does not rewrite pass 43. It upgrades continuity by proving the same bounded batching representation against the current repaired VFX-v2 owner packet.

## Highest-value next Runtime gaps

Do not retune this VFX source or generalize one MultiMesh proof into a universal transparent-VFX rule.

The strongest next Runtime triggers are:

- independent Visual QA response on the exact pass-47 Runtime A/B;
- target-device measurement for already-proven Runtime candidates when a real target-device execution surface is available;
- materially new current-world / articulated owner sequences that invalidate pass-44 static classifications;
- a genuinely new repeated-instance family where LOD/batching can be measured without overlapping an owner lane.

## Explicit non-claims

Pass 47 does **not** establish:

- target-device CPU/GPU/FPS/VRAM/heap/thermal improvement;
- production particle-runtime suitability;
- renderer-memory reduction;
- primitive-count reduction;
- arbitrary transparent VFX ordering/equivalence;
- arbitrary particle-count/family batching safety;
- final independent Visual QA acceptance;
- gameplay/controller acceptance;
- producer or UC adoption;
- CANON;
- production/game readiness;
- Runtime / Optimization mastery.

## Four-root check

**Truth:** exact current VFX-v2 donor bytes, draw calls, object counts, memory observations and <=1-LSB Runtime A/B evidence are recorded. The proof-host/device boundary remains explicit.

**Agency / non-domination:** Runtime does not retune VFX, force Visual QA acceptance, seize Animation/Art ownership or push the representation into UC.

**Continuity:** pass 43 history and its failed billboard-scale draft remain preserved, while pass 47 binds the optimization to the exact current owner packet rather than silently inheriting an obsolete source state.

**Wisdom before speed:** Runtime chose the already-open explicit downstream rebind gap instead of creating another optimizer or chasing an unrelated micro-win, and stops at measured receiving evidence pending QA/device needs.

The four AXM roots — **Truth, Agency / non-domination, Continuity, Wisdom before speed** — remain the merge gate.
