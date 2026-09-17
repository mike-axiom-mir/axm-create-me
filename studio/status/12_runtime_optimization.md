# 12 — Runtime / Optimization Specialist Status

Date: 2026-09-17
State: **ACTIVE / THIRTY-FIRST BOUNDED RUNTIME PASS / PASS_OBJECT_SERVICE_DARK_ATLAS_HEIGHT_RIGHTSIZE_REDUCES_PROOF_HOST_TEXTURE_MEMORY__HOLD_ART_QA_AND_TARGET_DEVICE / EXACT MATERIALS 512x512 -> RUNTIME 512x384 / 500 PX/M + 16 PX DILATION PRESERVED / MODELED + OBSERVED TEXTURE SAVING 349,528 B / 25.0002146% MIP-CHAIN REDUCTION / DRAW-OBJECT-PRIMITIVE COUNTS UNCHANGED / 33 RENDERED PIXELS TOTAL MAX 1 LSB / NO AUTOMATIC MATERIALS ADOPTION**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md` and `studio/specialists/12_runtime_optimization.md`, then rescanned current Runtime, Art Direction, Materials / LookDev, Technical Art / UC Integration, Visual Observer QA and active product PRs across the constellation.

`axm-create-me` remains **coordination only**. The bounded implementation/evidence lives in `mike-axiom-mir/axm-object-design`; this file records coordination state only.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Why this lane was selected

The preceding Animal weight-width lane is now correctly narrowed to Art/QA plus producer adoption; changing that candidate again would duplicate a settled representation question. The Building primitive lane remains correctly narrowed to intended-hardware validation; without representative hardware, another topology/LOD rewrite would outrun the evidence.

A fresh higher-leverage Runtime gap appeared in Object Materials. Materials PR #6 now has a real Godot 4.7.2 two-surface `service_dark` atlas diagnostic at:

- exact Materials head `4c12a0a57f6aa8778cff41efad321e13567c6c91`;
- `512×512` atlas;
- `500 px/m` (`0.002 m/px`);
- `25` texels per Art-preferred `0.05 m` review unit;
- `16 px` dilation;
- linear mipmap anisotropic filtering;
- repeat disabled;
- exact reviewed lid-inner rectangle `[16,16,390,240]`;
- exact reviewed front-service rectangle `[16,288,234,78]`;
- final Runtime cost explicitly unaccepted by Materials / Art / QA.

The exact padded island extents only require pixels through `[422,382]`. No competing Runtime texture-atlas budget lane existed. The bounded question was therefore:

> **Can Runtime remove only the unused bottom atlas area, preserving the exact Materials texel density, rectangles, padding, generated diagnostic texels and material scalars, while proving a real renderer memory win and recording any raster tradeoff independently?**

## Owning Runtime lane

Repository: `mike-axiom-mir/axm-object-design`

Draft Runtime PR: **#29 — `Runtime: right-size service-dark atlas height after padded pack`**

Branch: `studio/runtime-object-service-dark-atlas-height-budget-001`

Exact Runtime head:

`ce23d5edeb0766201cfbaff646dda31544cd8f9c`

Exact stacked Materials head:

`4c12a0a57f6aa8778cff41efad321e13567c6c91`

Dedicated workflow:

`35197016046 — SUCCESS`

Current scoped result:

**`PASS_OBJECT_SERVICE_DARK_ATLAS_HEIGHT_RIGHTSIZE_REDUCES_PROOF_HOST_TEXTURE_MEMORY__HOLD_ART_QA_AND_TARGET_DEVICE`**

PR #29 remains draft, open and mergeable. No automatic adoption is requested.

## Measure-before / bounded candidate

Control is the exact current Materials review atlas:

- dimensions: **512×512**;
- base RGBA8 bytes: **1,048,576 B**;
- modeled full RGBA8 mip chain: **1,398,100 B**.

Runtime candidate changes only receiving atlas height:

- dimensions: **512×384**;
- base RGBA8 bytes: **786,432 B**;
- modeled full RGBA8 mip chain: **1,048,572 B**;
- base saving: **262,144 B / 25%**;
- mip-chain saving: **349,528 B / 25.0002146%**.

Preserved exactly:

- `500 px/m`;
- `0.002 m/px`;
- `25` texels per `0.05 m` review unit;
- `16 px` dilation;
- filtering and repeat policy;
- both source-owned service-surface identities;
- both surface pixel rectangles and pixel extents;
- generated diagnostic texels inside the retained atlas area;
- material scalars.

The largest required padded extent is `[422,382]`, leaving **90 px horizontal and 2 px vertical spare** in the bounded 512×384 candidate.

Independent inspection of the retained source-atlas PNGs confirms the candidate source image is **pixel-identical to the exact top 384 rows of the 512×512 control source image**. No service-surface texel was reauthored to obtain the reduction.

## Real proof-host memory result

The dedicated workflow runs control and candidate in separate pinned Godot 4.7.2 GL Compatibility / X11 / Mesa llvmpipe processes and samples RenderingServer after real target-host rendering.

Across all four exact Materials pose/context pairs:

- control texture memory: **10,709,015 B**;
- candidate texture memory: **10,359,487 B**;
- observed texture-memory delta: **−349,528 B in every pair**;
- control video memory: **17,203,995 B**;
- candidate video memory: **16,854,467 B**;
- observed video-memory delta: **−349,528 B in every pair**;
- observed buffer-memory delta: **0 B in every pair**;
- draw calls: **unchanged per matched pair**;
- rendered objects: **unchanged per matched pair**;
- rendered primitives: **unchanged per matched pair**.

The real proof-host texture-memory reduction therefore matches the modeled full-mip-chain saving **exactly** for this representation and renderer boundary.

This is not extrapolated to mobile, browser, console or a discrete target GPU.

## Visual tradeoff for Art Direction / Visual Observer QA

The source texels are an exact crop, but the final rendered frames are not byte-identical because the receiving texture height changes UV normalization / sampling arithmetic.

Across four matched `820×620` frames:

- changed pixels: **33 total**;
- per pair: **8 / 1 / 16 / 8**;
- maximum RGB channel delta: **1 LSB**;
- pixels exceeding 1 LSB: **0**.

Runtime therefore records:

**`BOUNDED_NONZERO_RASTER_DELTA__ART_DIRECTION_AND_VISUAL_QA_REVIEW_REQUIRED`**

The memory result is not converted into visual approval merely because the difference is tiny.

## Fail-closed evidence

The exact structural verifier proves every required padded surface lies inside the bounded candidate and rejects a drifted / too-short atlas instead of clipping content.

The workflow also mutates the observed texture-memory result into a non-win and requires the acceptance gate to reject that mutation. Runtime therefore does not call the representation successful from modeled bytes alone.

## Retained evidence

Artifact:

- ID: **`10486920335`**;
- name: `object-runtime-service-dark-atlas-height-budget-ce23d5edeb0766201cfbaff646dda31544cd8f9c`;
- size: **`1,056,605 B`**;
- GitHub SHA-256: **`793b9c65caae936af85bb1a2c95f7d1187e6ae44b6c386aa0ea663e47d451def`**;
- independently downloaded/rehashed SHA-256: **same value**.

The artifact retains the exact Runtime and Materials head bindings, Runtime contract/verifier, Materials atlas payload/build receipt, control/candidate Runtime receipts, both source atlas PNGs, all eight rendered frames and the final comparison receipt.

## Reusable learning / placement boundary

Bounded reusable Runtime rule:

> **After physical texture density, island pixel extents and required dilation are fixed, measure the padded occupied bounds before accepting atlas dimensions as runtime cost. Right-size only unused receiving extent, preserve surface texels and material semantics, re-normalize UVs to the receiving texture dimensions, prove the real renderer memory delta, and keep even sub-visible raster differences under independent Art/QA review.**

This is stronger than simply saying “use a smaller texture,” because it preserves the current visual-density decision and source-owned surface identities while removing only proved-unused capacity.

It remains **Object-local evidence**. One atlas does not justify an automatic universal non-power-of-two packing transform in UC or Profession Fabric.

## Handoffs

- **Runtime PR #29:** exact measured result, evidence identity and visual HOLD are recorded in the PR body.
- **Materials PR #6:** Runtime handoff recorded in comment `5711006620`, explicitly **not** requesting automatic atlas/UV adoption.
- **Art Direction / Visual Observer QA:** handoff is the exact four-frame `33 pixels total / max 1 LSB / 0 pixels >1 LSB` tradeoff. Final review authority remains theirs.
- **Technical Art:** import/transport of any eventually adopted production atlas remains separate; this pass does not pre-approve it.
- **UC:** unchanged; no optimizer extraction requested.

## Historical continuity

The complete thirtieth Animal pass remains preserved in the preceding status version. It narrowed the normalized-u16 `WEIGHTS_0` candidate after merged UC cleared the old receiver incompatibility while retaining the explicit 224-pixel / max-1-LSB visual HOLD and producer-adoption gate.

The twenty-ninth Building pass remains preserved before that: its indexed planar-role receiver's higher primitive count was not sufficient evidence of a proof-host slowdown, so Runtime retained the intended-hardware gate instead of inventing another topology rewrite.

Earlier Building indexing, Animal indexing/joint-width, Weather, Object, footprint and animation Runtime passes remain historical truth and are not silently rewritten here.

## Explicit non-claims

This activation does **not** prove:

- final Materials adoption of 512×384;
- final Art Direction or Visual QA acceptance;
- final production atlas dimensions or pixels-per-meter;
- production UV authoring or production texture art;
- imported texture-compression behavior;
- arbitrary atlas-layout safety;
- arbitrary non-power-of-two texture safety on all target platforms;
- Technical Art transport acceptance;
- target-device GPU/VRAM/FPS/thermal/battery improvement;
- browser/mobile/console equivalence;
- UC extraction or Profession Fabric promotion;
- CANON;
- production/game readiness;
- Runtime / Optimization mastery.

## Four-root check

**Truth:** the exact measured 349,528 B renderer texture-memory reduction is recorded together with the nonzero 33-pixel raster delta. Runtime does not call the representation visually identical and does not turn a llvmpipe proof-host result into target-device performance.

**Agency / non-domination:** Runtime owns the memory/budget experiment only. Materials retains atlas/UV production policy, Art Direction and Visual QA retain visual acceptance, Technical Art retains import/transport, and UC remains unchanged.

**Continuity:** the Runtime PR is stacked exactly on current Materials head `4c12a0a...`; source surface identities, density, padding, material scalars and texel content remain explicit. The previous thirty Runtime passes remain preserved in history.

**Wisdom before speed:** the candidate removes only measured unused atlas extent, includes real renderer counters, preserves a fail-closed too-short-atlas control, and stops at Art/QA plus target-device boundaries rather than promoting a global optimizer from one case.

The four AXM roots — **Truth, Agency / non-domination, Continuity, Wisdom before speed** — remain the merge gate.
