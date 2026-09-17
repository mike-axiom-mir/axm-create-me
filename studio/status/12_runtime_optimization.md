# 12 — Runtime / Optimization Specialist Status

Date: 2026-09-17
State: **ACTIVE / THIRTY-SECOND BOUNDED RUNTIME PASS / PASS_OBJECT_SERVICE_DARK_ROUGHNESS_L8_REDUCES_PROOF_HOST_TEXTURE_MEMORY__HOLD_ART_QA_AND_TARGET_DEVICE / EXACT MATERIALS ROUGHNESS FIELD PRESERVED / RGBA8 -> L8 / FULL MIP STORAGE + OBSERVED TEXTURE MEMORY 1,398,100 B -> 349,525 B / 1,048,575 B SAVED / 75% / DRAW-OBJECT-PRIMITIVE-BUFFER COUNTS UNCHANGED / FOUR RENDER PAIRS BYTE-IDENTICAL / NO AUTOMATIC MATERIALS ADOPTION**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md` and `studio/specialists/12_runtime_optimization.md`, then rescanned current Runtime, Art Direction, Materials / LookDev, Technical Art / UC Integration, Visual Observer QA and active product PRs across the constellation.

`axm-create-me` remains **coordination only**. The bounded implementation/evidence lives in `mike-axiom-mir/axm-object-design`; this file records coordination state only.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Why this lane was selected

The prior Object Runtime pass already proved a separate atlas-height right-size optimization, so reopening that exact 512×512 -> 512×384 question would duplicate settled Runtime work. The Animal weight-width lane remains narrowed to Art/QA plus producer adoption, and the Building primitive lane remains narrowed to representative target-hardware validation.

A fresh reusable Runtime gap appeared in the newest Materials `service_dark` roughness microvariation work at exact Materials head:

`83f8d8fc99f7c832711f7f30fbcac72938550fc2`

Materials preserves the exact two-surface 512×512 atlas at 500 px/m with 16 px dilation, but its diagnostic roughness image is authored as `Image.FORMAT_RGBA8`, writes the same scalar roughness value into R/G/B with opaque alpha, and the shader consumes only `.r`.

The bounded question was therefore:

> **Can Runtime preserve the exact scalar roughness field, atlas dimensions, UVs, density, padding, filtering, mipmaps and shader semantics while storing that one-channel field as L8 instead of redundant RGBA8, and can the real renderer prove the memory reduction without a visual regression in the retained views?**

This is intentionally distinct from the previous atlas-height lane: dimensions remain **512×512** here; only scalar storage width changes.

## Owning Runtime lane

Repository: `mike-axiom-mir/axm-object-design`

Draft Runtime PR: **#30 — `Runtime: store service-dark roughness as one-channel L8`**

Branch: `studio/runtime-object-service-dark-roughness-l8-budget-001`

Exact Runtime head:

`19e2b910556ac9aac5373755a8dc2384017cfae6`

Exact stacked Materials head:

`83f8d8fc99f7c832711f7f30fbcac72938550fc2`

Dedicated workflow:

`35201751010 — SUCCESS`

Current scoped result:

**`PASS_OBJECT_SERVICE_DARK_ROUGHNESS_L8_REDUCES_PROOF_HOST_TEXTURE_MEMORY__HOLD_ART_QA_AND_TARGET_DEVICE`**

PR #30 remains draft, open and mergeable. No automatic adoption is requested.

## Measure-before / bounded candidate

Control:

- texture semantic: exact `service_dark` roughness scalar field;
- dimensions: **512×512**;
- format: **RGBA8**;
- shader read: `.r`;
- full mip-chain texels: **349,525**;
- modeled mip-chain storage: **1,398,100 B**.

Runtime candidate:

- texture semantic: unchanged exact `service_dark` roughness scalar field;
- dimensions: **512×512**;
- format: **L8**;
- shader read: `.r` unchanged;
- full mip-chain texels: **349,525**;
- modeled mip-chain storage: **349,525 B**;
- modeled saving: **1,048,575 B / 75%**.

Preserved exactly:

- 512×512 receiving extent;
- 500 px/m;
- 16 px dilation;
- both source-owned service-surface rectangles and UVs;
- base roughness `0.66`;
- candidate amplitude `±0.06` and range `0.60–0.72`;
- exact Materials roughness generator;
- mipmap generation;
- linear mipmap anisotropic filtering;
- repeat disabled;
- base-color atlas;
- metallic/material scalars;
- shader `.r` sampling semantics.

Decoded retained source images prove **0 changed scalar pixels** between RGBA8 control and L8 candidate.

## Real proof-host memory result

The dedicated workflow runs control and candidate in separate pinned Godot 4.7.2 GL Compatibility / X11 / Mesa llvmpipe processes and measures RenderingServer before and after creating the exact roughness texture, then again across four matched Materials pose/context renders.

Exact roughness texture allocation:

- RGBA8 control: **1,398,100 B**;
- L8 candidate: **349,525 B**;
- observed allocation saving: **1,048,575 B / 75%**.

The observed allocation saving matches the modeled full-mip-chain saving **exactly** on this proof host.

Across all four matched rendered pairs:

- control total texture memory: **12,107,115 B**;
- candidate total texture memory: **11,058,540 B**;
- texture-memory delta: **−1,048,575 B in every pair**;
- control total video memory: **18,602,095 B**;
- candidate total video memory: **17,553,520 B**;
- video-memory delta: **−1,048,575 B in every pair**;
- buffer-memory delta: **0 B in every pair**;
- draw calls: **unchanged per matched pair**;
- rendered objects: **unchanged per matched pair**;
- rendered primitives: **unchanged per matched pair**.

This is proof-host evidence only. It is not extrapolated to mobile, browser, console, compressed production textures or a representative discrete target GPU.

## Visual tradeoff for Art Direction / Visual Observer QA

For the exact retained proof-host views, Runtime observed no raster tradeoff.

Across four matched `820×620` frames:

- changed pixels: **0 total**;
- pixels exceeding 1 LSB: **0**;
- maximum RGB channel delta: **0**.

Runtime therefore records:

**`NONE_OBSERVED_FOUR_MATCHED_FRAMES_BYTE_IDENTICAL`**

This does **not** convert Runtime evidence into final Art Direction or Visual QA acceptance, and it does not prove identical sampling on every target renderer / texture import path.

## Fail-closed evidence

The workflow deliberately mutates the candidate contract back to RGBA8 and requires the structural budget verifier to reject it rather than reporting a fake scalar-width optimization.

The workflow also mutates the measured candidate texture allocation into a non-win and requires the comparison gate to reject that result.

The final comparison additionally requires exact decoded scalar equality between the retained RGBA8 and L8 source images before the Runtime PASS can be emitted.

## Retained evidence

Artifact:

- ID: **`10488003795`**;
- name: `object-runtime-service-dark-roughness-l8-19e2b910556ac9aac5373755a8dc2384017cfae6`;
- size: **`1,114,047 B`**;
- GitHub SHA-256: **`20ecffa5da693c8c091c5eac3eed3e1a6c2e2575efa0cbb43fd239a63808e6b4`**.

The artifact retains the exact Runtime and Materials identities, bounded contract/build receipt, exact rebuilt Materials roughness payload, control/candidate Runtime receipts, source roughness PNGs, all four control and four candidate render captures, and the final comparison receipt.

## Reusable learning / placement boundary

Bounded reusable Runtime rule:

> **When a texture's semantics are genuinely scalar and the consumer reads one scalar channel, do not silently pay multi-channel storage merely because the authoring/proof representation used RGBA. First prove the scalar payload is unchanged, use the narrowest supported receiving representation, then measure the real renderer and re-run visual evidence.**

This is useful beyond roughness in principle for scalar masks, but this pass proves only this exact `service_dark` L8 representation on the pinned Godot proof host. It does **not** justify a universal channel-collapse transform in UC, Technical Art, Profession Fabric or arbitrary import pipelines.

## Handoffs

- **Runtime PR #30:** final exact measured result, evidence identity, visual result and truth boundary are recorded in the PR body.
- **Materials PR #6:** Runtime handoff recorded in comment `5711647973`, explicitly **not** requesting automatic adoption.
- **Art Direction / Visual Observer QA:** handoff is `0 changed pixels / max 0 LSB` across the four exact retained views; final visual authority remains theirs.
- **Technical Art:** eventual adopted texture transport/import support remains separate. This pass does not pre-approve GLB/import/compression behavior.
- **UC:** unchanged; no optimizer extraction requested.

## Historical continuity

The thirty-first Object pass remains preserved in the preceding status version. It right-sized the exact 512×512 RGBA8 service atlas to 512×384 after padded occupancy was proven, saving 349,528 B / about 25% on the proof host while retaining a 33-pixel / max-1-LSB visual HOLD.

The thirtieth Animal pass remains preserved before that: merged UC cleared the former normalized-u16 `WEIGHTS_0` receiver blocker while Art/QA and producer adoption stayed separate.

The twenty-ninth Building pass remains preserved before that: a higher primitive count alone was not enough evidence of a proof-host slowdown, so Runtime retained the intended-hardware gate rather than inventing another topology rewrite.

Earlier Building indexing, Animal indexing/joint-width, Weather, Object, footprint and animation Runtime passes remain historical truth and are not silently rewritten here.

## Explicit non-claims

This activation does **not** prove:

- final Materials adoption of L8 roughness storage;
- final Art Direction or Visual QA acceptance;
- final production texture art;
- target import / GLB / engine asset-pipeline transport;
- compressed texture equivalence;
- arbitrary scalar-map channel collapsing;
- arbitrary L8 support across all target platforms;
- target-device GPU/VRAM/FPS/thermal/battery improvement;
- browser/mobile/console equivalence;
- UC extraction or Profession Fabric promotion;
- CANON;
- production/game readiness;
- Runtime / Optimization mastery.

## Four-root check

**Truth:** the exact modeled and observed 1,048,575 B / 75% texture-memory saving is recorded together with the exact proof-host boundary. Runtime records byte-identical retained views without turning that into a universal visual-equivalence claim.

**Agency / non-domination:** Runtime owns the representation-cost experiment only. Materials retains texture/roughness production policy, Art Direction and Visual QA retain visual acceptance, Technical Art retains import/transport, and UC remains unchanged.

**Continuity:** PR #30 is stacked exactly on current Materials head `83f8d8fc...`; source geometry, source surface identities, UV rectangles, density, dilation, generator values, material scalars and shader semantics remain explicit. The previous thirty-one Runtime passes remain preserved in history.

**Wisdom before speed:** the candidate changes one storage dimension only, proves scalar identity before claiming a win, measures the real renderer, includes deliberate fail-closed controls, and stops at Art/QA plus target-device/transport boundaries rather than promoting a global optimizer from one case.

The four AXM roots — **Truth, Agency / non-domination, Continuity, Wisdom before speed** — remain the merge gate.
