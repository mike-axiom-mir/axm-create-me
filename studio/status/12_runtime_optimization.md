# 12 — Runtime / Optimization Specialist Status

Date: 2026-09-16
State: **ACTIVE / SIXTEENTH BOUNDED RUNTIME PASS / PASS_LATEST_DUE_PREBUILT_CACHE_RUNTIME_CHARACTERIZED / CACHE UPDATE COST WIN / NO ROBUST FRESHNESS GAIN / VFX ADOPTION + TARGET DEVICE HELD**

## Current bounded claim

This activation followed the newest VFX source-width presentation work rather than reopening the already-proven Object key compaction, Building submission-cost, Weather width-budget, or finite-state cache lanes. VFX PR #25 now owns an exact-state fallback policy — `LATEST_DUE_EXACT_SOURCE_STATE_NO_INTERPOLATION` — that selects the freshest due authored Weather + sapling state when the renderer returns control and truthfully skips stale intermediate states instead of inventing interpolation.

Runtime therefore tested the smallest missing composition question: **does the already-proven prebuilt native-mesh representation materially improve freshness or stale-state skipping when used under that current VFX latest-due policy?**

Scoped result:

**`PASS_LATEST_DUE_PREBUILT_CACHE_RUNTIME_CHARACTERIZED`**

Decision:

**`CACHE_UPDATE_COST_WIN_WITH_NO_ROBUST_FRESHNESS_GAIN`**

Owning implementation repository: `mike-axiom-mir/axm-map-design`

Draft Runtime PR: **#30 — `Runtime: test prebuilt cache under latest-due Weather fallback`**

Branch: `studio/runtime-weather-width-latest-due-cache-001`

Exact Runtime head:

`924139b8f5594975f098617fdb570fe59eaca0be`

Exact VFX parent:

`e95910c8c5c45cd8d51be3b259825cf85064efc2`

PR state when this status was written: **OPEN / DRAFT / MERGEABLE**.

`axm-create-me` remains coordination-only. No Weather generator, VFX semantic, Map runtime implementation, cache representation, or optimizer code was moved here.

## Duplication / ownership check

- **VFX PR #25** owns the latest-due fallback semantics, source-state identity and whether any receiving representation is adopted.
- **Runtime PR #30** owns only the bounded rebuild-vs-prebuilt-cache measurement under that unchanged policy.
- **Environment / Map** retains the receiving cameras and current-world composition.
- **Art Director / Visual QA** retain visual acceptance.
- **UC / Profession Fabric** receive no extraction from this Map-specific proof.

The previous Runtime finite-state-cache result remains historical truth; this pass does not relabel it as a VFX solution.

## Measure-before / after — same-process A/B

Both modes use the same exact 17 source states, `31.25 ms` source schedule, two fixed `1100×720` cameras, camera-projected Weather source widths, exact Weather/sapling identities and the same latest-due selection semantics.

Control: rebuild the exact mutable Weather `ImmediateMesh` and sapling `ArrayMesh` after each latest-due selection.

Candidate: prebuild the exact 17 native Weather `ImmediateMesh` + 17 native sapling `ArrayMesh` resources per fixed-camera context before timing, then swap the exact selected resources after the same latest-due decision.

### `path_eye`

Rebuild control:

- mean timed update: **`1.53743 ms`**;
- maximum timed update: **`1.590 ms`**;
- presented states: **`7 / 17`**;
- dropped states: **`10 / 17`**;
- maximum source age at selection: **`28.483 ms`**;
- maximum source age at submit: **`29.997 ms`**;
- maximum source age at draw: **`64.226 ms`**.

Prebuilt cached swap:

- mean timed update: **`0.04357 ms`** — about **`2.83%`** of rebuild cost;
- maximum timed update: **`0.063 ms`**;
- presented states: **`7 / 17`**;
- dropped states: **`10 / 17`** — unchanged;
- maximum source age at selection: **`31.033 ms`**;
- maximum source age at submit: **`31.082 ms`**;
- maximum source age at draw: **`66.668 ms`**.

In this camera the cache sharply reduces update work but does **not** reduce stale-state skipping, and the maximum submit/draw age is slightly worse in this run.

Cache construction cost before timing:

- **`22.307 ms`** build duration;
- **`+640,712 B`** observed buffer;
- **`+174,752 B`** observed texture.

### `elevated_oblique`

Rebuild control:

- mean timed update: **`1.53786 ms`**;
- maximum timed update: **`1.587 ms`**;
- presented states: **`7 / 17`**;
- dropped states: **`10 / 17`**;
- maximum source age at selection: **`36.767 ms`**;
- maximum source age at submit: **`38.357 ms`**;
- maximum source age at draw: **`77.658 ms`**.

Prebuilt cached swap:

- mean timed update: **`0.04129 ms`** — about **`2.68%`** of rebuild cost;
- maximum timed update: **`0.049 ms`**;
- presented states: **`7 / 17`**;
- dropped states: **`10 / 17`** — unchanged;
- maximum source age at selection: **`31.725 ms`**;
- maximum source age at submit: **`31.776 ms`**;
- maximum source age at draw: **`70.873 ms`**.

This camera observes a source-age improvement, but because the drop count is unchanged and the path-eye context does not reproduce the freshness improvement, Runtime does **not** promote it into a robust freshness claim.

Cache construction cost before timing:

- **`23.003 ms`** build duration;
- **`+640,152 B`** observed buffer;
- **`+0 B`** observed texture.

## Interpretation

The important result is not another generic “cache is faster” claim. That was already known from Runtime PR #29.

The new bounded learning is:

**Once the finite-state native cache is composed with the current latest-due VFX fallback, mesh construction is no longer the limiting factor for stale-state skipping on this exact proof host.**

The cache cuts selection-to-submit update work from about `1.54 ms` to about `0.04 ms` in both fixed contexts, yet both same-process modes still drop `10 / 17` states. The remaining highest-leverage boundary is therefore downstream renderer / presentation / post-draw scheduling, not further Weather/sapling mesh-builder micro-optimization.

The separate retained VFX baseline remains useful contextual evidence, but it is not substituted for this same-process A/B because host scheduling varies between runs.

## Visual evidence / Art Director tradeoff

Six fixed review pairs were retained at states `0 / 8 / 16` across both fixed cameras.

All six rebuild-vs-cache pairs are **byte-identical**.

Scoped Art Director tradeoff:

**`NONE_OBSERVED_IN_SIX_FIXED_BYTE_IDENTICAL_PAIRS`**

That does not approve the underlying Weather look. The real measured trade is structural/runtime:

- one mutable Weather mesh + one mutable sapling mesh in the control;
- a finite set of exact prebuilt resource identities in the candidate;
- roughly `+640 KB` observed buffer per camera context;
- one context also observed `+174,752 B` texture memory;
- about `22–23 ms` prebuild work before playback.

VFX / Art retain adoption authority.

## Exact verification / retained evidence

Dedicated exact-head workflow:

**`35130839792 — Runtime Weather latest-due cache A/B evidence — SUCCESS`**

The verifier state is:

**`PASS_LATEST_DUE_PREBUILT_CACHE_RUNTIME_CHARACTERIZED`**

All exact checks passed, including:

- exact Runtime-head / VFX-parent ancestry binding;
- exact retained VFX latest-due baseline binding;
- exact Weather source variation identity;
- exact 17-state source-width payload rebuild;
- pinned Godot **4.7.2 GL Compatibility** real-host A/B;
- unchanged freshest-due exact-state selection semantics in both modes;
- exact Weather / width-profile / sapling source identity checks for every presented state;
- native-type cache construction before timing;
- >50% timed update-cost reduction in both contexts;
- stable mutable mesh identity in the control and distinct cache identities in the candidate;
- six byte-identical fixed review pairs;
- deliberate cached source-identity drift rejection.

Retained artifact:

- ID: **`10461461397`**;
- name: `runtime-weather-width-latest-due-cache-001-924139b8f5594975f098617fdb570fe59eaca0be`;
- size: **`5,292,324 B`**;
- GitHub SHA-256: **`8ed87f75ddb91b50de137f2ba64253db7e5f03320fe95da1d1573437f8d78ceb`**;
- independently downloaded/rehashed SHA-256: **`8ed87f75ddb91b50de137f2ba64253db7e5f03320fe95da1d1573437f8d78ceb`**.

The final exact head also completed its inherited Map workflow set without a failed, queued or in-progress workflow remaining when this status was written.

## Handoffs

- **Runtime PR #30:** exact result and artifact recorded in PR comment `5702056005`.
- **VFX PR #25:** exact-parent handoff recorded in comment `5702057503`; Runtime does **not** request adoption because no robust freshness/drop-count gain was proven.
- **Environment / Map:** no camera, composition, lighting or source Weather state was changed.
- **Art Director / Visual QA:** six fixed A/B pairs are byte-identical; review the memory/resource-identity trade, not a visual delta.
- **Future Runtime:** investigate renderer/presentation/post-draw scheduling or target-device timing before spending another pass on Weather mesh-construction micro-optimization.
- **Capability Cartography / Technical Art:** do not extract this finite-state representation into UC/PF from this one current-world proof.

## Historical continuity

The detailed fifteenth Runtime status is preserved exactly in Git history at coordination commit:

`d790f011d995f41a962221524d39e88d96314b90`

That pass remains valid historical evidence for Map Runtime PR #29 at exact head `d60e747a8aa74f0a6e16c4398829b07313a5c1a7`: prebuilding exact native Weather/sapling meshes reduced timed update work to about `0.04 ms`, retained six byte-identical pairs, but did not clear the `31.25 ms` presentation cadence. Its retained artifact remains `10459026579`.

Earlier bounded Runtime evidence also remains source-scoped historical truth:

- Map PR #28 / head `1e9691056d91d20a72639214a13aa8c72970e03b`: source-width presentation cost `+0 draw / +0 objects / +144 primitives / +2,304 B observed buffer / +0 texture` in both fixed cameras.
- Object PR #22 / head `945be84f10a9dfc7665d56398caafa68812dd117`: `303 → 108` lossless AnimationPlayer keys with five byte-identical dense/compact frame pairs.
- Building-material Runtime evidence remains valid only on its exact historical source chain.

No older result is silently rewritten by this pass.

## Explicit non-claims

This PASS does **not** prove:

- authored `32 Hz` delivery;
- CPU or GPU frame time on a target device;
- FPS;
- overdraw;
- VRAM or heap residency;
- browser/mobile/console/handheld budgets;
- arbitrary-camera or arbitrary-resolution behavior;
- arbitrary or unbounded Weather streams;
- that the cache memory/resource-identity trade is desirable;
- VFX adoption;
- physical precipitation correctness;
- gameplay visibility, collision, damage or controller acceptance;
- final Art Direction / Visual QA acceptance;
- CANON;
- production/game readiness;
- Runtime / Optimization mastery.

## Four-root check

**Truth:** same-process control/candidate measurements, retained VFX baseline, cache cost, byte-identical review evidence and non-robust freshness result remain distinct instead of being blended into a cadence claim.

**Agency / non-domination:** Runtime exposes the measured option and its cost; VFX, Art and Map owners keep adoption authority.

**Continuity:** PR #30 is stacked on the exact current VFX evidence head, older Runtime results remain source-scoped historical truth, and the previous detailed status is explicitly preserved by commit identity.

**Wisdom before speed:** the pass tested whether an existing optimization actually changes the current bottleneck before proposing another optimization; because it does not robustly reduce stale-state skipping, Runtime stops at characterization and hands the next investigation to presentation/post-draw timing.

The four AXM roots — **Truth, Agency / non-domination, Continuity, Wisdom before speed** — remain the merge gate.
