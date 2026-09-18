# 12 — Runtime / Optimization Specialist Status

Date: 2026-09-18
State: **PASS_49_BUILDING_UTILITY_PANEL_OPAQUE_ALPHA_ELISION_RGB8 / RGBA8_MIPS_1398100_TO_RGB8_1048575 / TEXTURE_MEM_SAVE_349525_EXACT_ALL_68 / 68_OF_68_PIXEL_IDENTICAL / NON_OPAQUE_NEGATIVE_FAIL_CLOSED / HOLD_ART_QA_TARGET_DEVICE_GENERIC_POLICY**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/12_runtime_optimization.md`, the preceding Runtime status, and fresh Art Direction / Animation / Technical Art / Environment / Visual QA state before selecting work.

`axm-create-me` remains **coordination only**. Runtime implementation and evidence for this pass live in `mike-axiom-mir/axm-map-design`. Universal Creation product code was not modified.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh constellation / non-overlap scan

Pass 48 already owns Object static-component successor continuity in Map Runtime PR #47, so Runtime did **not** open a duplicate batching lane. Object VFX MultiMesh remains separately bounded and independently visually accepted on its retained evidence, Animal key reduction remains held for its own Art/QA boundary, and current Weather presentation remains an Art/VFX question rather than a Runtime retune request.

The strongest fresh Runtime-owned gap came from Environment PR #51. Environment has now consumed the exact Technical Art + Materials utility-panel UV/image binding in the real current Map/Godot world and retained a 68-pair A/B. That evidence explicitly measured the new exact texture cost as:

- `+576 B` renderer buffer memory;
- `+1,398,100 B` texture memory at every observation.

Environment deliberately left Runtime/device acceptance false. The exact owner image is a `512 × 512` PNG whose decoded RGBA8 identity is already owner-bound by Technical Art.

Runtime therefore selected a narrow reusable import/runtime-budget question instead of changing art, UVs, material values or world composition:

**Can the exact receiving texture safely drop an unused alpha channel if — and only if — every owner alpha sample is proven fully opaque?**

## Selected bounded improvement — pass 49

Repository: `mike-axiom-mir/axm-map-design`

New draft Runtime PR: **#52 — `Runtime: elide opaque utility-panel alpha channel`**

Runtime branch:

`studio/runtime-building-utility-panel-rgb8-001`

Exact tested Runtime head:

`1afa51cb89b536db0d2434328722a1521febe0ad`

Exact Environment parent head:

`595df99daf866b5e3dcaa4be87eeb650af637919`

At final verification PR #52 is **open / draft / unmerged / mergeable**.

Scoped result:

**`PASS_BUILDING_UTILITY_PANEL_RGB8_TEXTURE_MEMORY_REDUCTION__RASTER_EQUIVALENT_RETAINED_68__HOLD_ART_QA_TARGET_DEVICE_GENERIC_POLICY`**

The change is receiving representation only. It does not reauthor the source PNG, UV mapping, Building geometry, material metallic/roughness, Environment composition, cameras, Weather, Nature or articulated Object state.

## Measure-before — exact owner and Environment baseline

Exact Environment baseline:

- PR #51 head `595df99daf866b5e3dcaa4be87eeb650af637919`;
- workflow `35300420073` — SUCCESS;
- artifact ID `10529154954`;
- artifact SHA-256 `3e102488b5e85766ddae4b6b83e44a6347171cbd8d8f6961486c8c3774a608c7`;
- exact material-bound current-world scene texture memory `15,671,915 B` at every retained observation;
- exact material texture contribution above the scalar control `1,398,100 B`.

Exact owner texture identity:

- dimensions: `512 × 512`;
- serialized PNG SHA-256 `e932cdd94d370184c7361862d5064149cc193e3a8fd80b269cab6543c0919198`;
- decoded RGBA8 SHA-256 `02f8f464eabc734a3be687a7706edf8b8f62ece834fa981c8c993fbb8227bb4b`;
- decoded RGB8 SHA-256 `f515fe2a52a5356e1e8e1dfe560e20b53c3dff184047a05059d189ae6cd60192`;
- alpha samples inspected: **262,144 / 262,144**;
- alpha minimum: **255**;
- alpha maximum: **255**.

Therefore the exact owner texture contains no meaningful alpha information in this representation.

Raw payload facts before target-host measurement:

- RGBA8 base level: `1,048,576 B`;
- RGB8 base level: `786,432 B`;
- RGBA8 full mip chain: `1,398,100 B`;
- RGB8 full mip chain: `1,048,575 B`;
- theoretical exact payload saving: **349,525 B / 25%**.

These numbers were treated only as a candidate budget opportunity until real Godot evidence completed.

## Runtime representation

Pass 49 adds a bounded receiver path that:

1. hash-binds the exact serialized owner PNG;
2. reloads and hash-binds the exact RGBA8 owner payload;
3. checks every alpha byte and rejects the representation if any sample is not `255`;
4. converts only the receiving `Image` to RGB8;
5. hash-binds the exact RGB8 payload;
6. regenerates the full mip chain;
7. uses the same UVs, material scalars and current-world receiver as the Environment RGBA8 baseline.

No generic “opaque textures should be RGB8” policy is inferred from this one asset.

## Real Godot before / after evidence

Dedicated workflow:

**`35301057478 — Runtime Building utility-panel RGB8 alpha elision` — SUCCESS**.

Pinned proof host:

- Godot `4.7.2`;
- GL Compatibility / X11;
- same retained current-world composition and the same 68 observation/render slots as the exact Environment baseline.

Measured result at **all 68 retained observations**:

- scene texture memory: **`15,671,915 B → 15,322,390 B`**;
- exact saving: **`349,525 B` every time**;
- retained proof-host total texture-memory reduction: **2.2303%**;
- exact utility-panel texture full-mip footprint: **`1,398,100 B → 1,048,575 B`**, **25% lower**;
- renderer buffer-memory delta: **`0 B`**;
- draw calls: **unchanged**;
- objects in frame: **unchanged**;
- primitives in frame: **unchanged**.

The measured renderer saving exactly matches the alpha-channel payload removed from the full mip chain. Runtime does not reinterpret that proof-host result as target-device VRAM/FPS acceptance.

## Visual tradeoff for Art Direction / Visual QA

The exact RGBA8 Environment baseline and RGB8 Runtime candidate were compared over all **68 retained current-world PNG pairs**.

Observed:

- byte-identical pairs: **68 / 68**;
- total changed pixels: **0**;
- pixels above 1 LSB: **0**;
- maximum channel delta: **0 LSB**.

Recorded visual tradeoff:

**`NONE_OBSERVED__68_OF_68_RETAINED_CURRENT_WORLD_PAIRS_BYTE_IDENTICAL__ART_QA_AND_TARGET_DEVICE_STILL_HELD`**

The real tradeoff is semantic rather than raster-visible: the candidate is valid only while this exact owner texture is fully opaque. A future source revision with meaningful alpha must retain an alpha-capable representation and must not inherit this PASS.

Art Direction and independent Visual QA are not forced to adopt or promote the candidate simply because retained proof pixels are identical.

## Fail-closed evidence

The dedicated workflow includes a deliberate negative control that changes one alpha sample from `255` to `254` before the representation gate.

The verifier rejects it with:

`RGB8_ALPHA_PRECONDITION_REJECTED_NON_OPAQUE_TEXTURE`

Therefore this PASS cannot be reproduced by silently dropping meaningful alpha.

## Retained exact pass-49 evidence

Green artifact:

- ID **`10529517880`**;
- size **`6,393,786 B`**;
- SHA-256 **`825fd23fe2df986cc7b2cb856986d36b426a30e76546d7999e19d0f3bed7d41f`**;
- independently downloaded and rehashed to the exact same digest after workflow completion.

The retained artifact contains the exact-head receipt, bounded contract, Runtime report, Godot log, alpha negative-control log and all 68 RGB8 candidate current-world renders.

## Authority / handoff

- Building / Geometry retain source geometry and surface authority.
- Materials retains owner texture/material meaning and replacement policy.
- Technical Art retains exact UV/image receiving transport authority.
- Environment retains world composition and adoption authority.
- Runtime owns this bounded receiving representation and measured proof-host memory evidence.
- Art Direction / Visual QA retain appearance acceptance authority.
- target-device CPU/GPU/FPS/VRAM/heap/thermal/battery acceptance remains open.
- Universal Creation remains untouched; no generic RGB8 rule was added.
- `axm-create-me` remains coordination/status only.

PR #52 requests no automatic adoption.

## Continuity from pass 48 and earlier

Pass 48 remains intact in Map Runtime PR #47: it proved that the current Object successor still has exact 31-component / 7-moving / 24-static eligibility inputs while explicitly forbidding transfer of pass-44 performance and visual numbers. That lane still requires a fresh current-successor batching A/B if reopened.

Pass 47 Object VFX-v2 MultiMesh remains separately valid on its exact owner/runtime lineage and now has independent retained-view Visual QA acceptance; target-device/production-runtime adoption remains held.

Pass 46 Animal key reduction remains a bounded Art/QA review candidate with measurable silhouette tradeoff. Pass 45 joint-index width, pass 44 historical Object static batching, passes 40–43 and all earlier Runtime evidence remain recoverable and are not rewritten by pass 49.

## Highest-value next Runtime gap

Do **not** generalize pass 49 into a fleet-wide RGB8 conversion rule from one opaque texture.

The next high-value Runtime choice should be selected from fresh owner evidence, with two currently legitimate candidates:

- return to PR #47 and perform the already-authorized fresh current-successor static-batching Godot A/B; or
- test the exact pass-49 representation on a real target/device path if such a target becomes available, before converting proof-host memory savings into device/FPS/VRAM claims.

A broader alpha-elision import rule should only be proposed after repeated owner textures demonstrate the same opaque-alpha condition and the rule can fail closed on alpha-bearing cases.

## Explicit non-claims

Pass 49 does **not** establish:

- Art Direction or independent Visual QA adoption;
- target-device CPU/GPU/FPS/VRAM/heap/thermal/battery improvement;
- a generic PNG/RGB8 import policy;
- safety for any texture with meaningful alpha;
- Environment / Materials / Technical-Art adoption;
- source-image replacement or reauthoring;
- texture compression quality or platform-specific GPU format policy;
- arbitrary renderer/back-end equivalence;
- CANON;
- production/game readiness;
- Runtime / Optimization mastery.

## Four-root check

**Truth:** the exact owner alpha domain is measured before representation change, theoretical payload math is separated from real Godot measurement, and the target-device boundary remains explicit.

**Agency / non-domination:** Runtime changes only its receiving representation, does not rewrite Materials/Technical-Art/Environment authority, and does not force Art/QA or generic UC adoption.

**Continuity:** exact Environment parent, owner PNG/RGBA/RGB identities, workflow, negative control and retained evidence are hash-bound; pass 48 and earlier Runtime lanes remain independently recoverable.

**Wisdom before speed:** one measured unused channel is removed under a strict fail-closed precondition instead of introducing a broad texture optimization policy from a single asset.

The four AXM roots — **Truth, Agency / non-domination, Continuity, Wisdom before speed** — remain the merge gate.
