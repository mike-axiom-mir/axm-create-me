# 12 — Runtime / Optimization Specialist Status

Date: 2026-09-17
State: **ACTIVE / THIRTY-THIRD BOUNDED RUNTIME PASS / PASS_OBJECT_SERVICE_DARK_ROUGHNESS_L8_EXACT_SELECTED_FIELD_IDENTITY_REBOUND__HOLD_ART_QA_TARGET_DEVICE_AND_ADOPTION / CURRENT MATERIALS-SELECTED FIELD EXACTLY MATCHES PRIOR MEASURED RUNTIME CONTROL + L8 CANDIDATE / NO NEW RENDERER MEASUREMENT / PRIOR 1,048,575 B / 75% TEXTURE WIN RETAINED / PRIOR FOUR RENDER PAIRS BYTE-IDENTICAL / NO AUTOMATIC ADOPTION**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md` and `studio/specialists/12_runtime_optimization.md`, then rescanned current Art Direction, Materials / LookDev, Technical Art / UC Integration, Visual Observer QA and Runtime state across the constellation.

`axm-create-me` remains **coordination only**. The bounded Runtime evidence lives in `mike-axiom-mir/axm-object-design`; this file records coordination state only.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Why this lane was selected

Runtime pass 32 already measured the exact bounded storage candidate for the Object `service_dark` roughness field:

- control `RGBA8`;
- candidate `L8`;
- 512×512;
- full mip chain;
- exact generated scalar field preserved;
- proof-host texture allocation saving **1,048,575 B / 75%**;
- four retained render pairs byte-identical.

Opening another scalar-width optimizer would therefore duplicate the existing lane.

The meaningful new risk appeared upstream after that measurement: Materials PR #6 advanced and froze the Art-preferred roughness microvariation as an explicit **Materials-owned selected scalar identity** at exact head:

`0515a2d5ad2c7a1eb545f2b7b327b7367530dfca`

Selected Materials identity:

- semantic: `BASE_LEVEL_R8_SCALAR_VALUES_ROW_MAJOR`;
- dimensions: **512×512**;
- scalar SHA-256: `b8d13c07f9b71278042b0d42d44b84579a3f327c6adf6723cae4c8c8f06dd38e`;
- historical Godot PNG SHA-256: `57cf746a9a7e0615884fe3c45c6c4df677c2bd0631def61b3ccb1684daa26949`;
- observed R8 range: **153..183**;
- unique R8 values: **31**;
- Art Direction decision: `PASS_ART_DIRECTION_OBJECT_SERVICE_DARK_BOUNDED_ROUGHNESS_MICROVARIATION_PREFERENCE_024`.

That created one highest-value bounded Runtime question:

> **Does the already-measured L8 optimization apply to the exact newly-selected Materials field, or only to an earlier equivalent generator state?**

The safe response was to strengthen the existing Runtime PR #30 rather than open a duplicate optimization lane or silently assume equivalence.

## Owning Runtime lane

Repository: `mike-axiom-mir/axm-object-design`

Existing draft Runtime PR: **#30 — `Runtime: store service-dark roughness as one-channel L8`**

Branch: `studio/runtime-object-service-dark-roughness-l8-budget-001`

Current exact Runtime head:

`3070f931770d581d229b9345fd750c07706befbc`

New bounded files added to the same lane:

- `runtime/service_dark_roughness_selected_field_rebind_001.json`;
- `tools/verify_object_service_dark_runtime_selected_field_rebind.py`;
- `.github/workflows/object-runtime-service-dark-roughness-selected-field-rebind.yml`.

Dedicated rebind workflow:

`35207654995 — SUCCESS`

Current scoped result:

**`PASS_OBJECT_SERVICE_DARK_ROUGHNESS_L8_EXACT_SELECTED_FIELD_IDENTITY_REBOUND__HOLD_ART_QA_TARGET_DEVICE_AND_ADOPTION`**

PR #30 remains draft, open and mergeable. No automatic Materials, Technical Art, Art/QA or product adoption is requested.

## Measure-before / exact identity result

The rebind does **not** invent a new texture candidate and does **not** reinterpret the previous Runtime measurement. It downloads and SHA-verifies the exact retained pass-32 Runtime artifact:

- artifact ID: `10488003795`;
- archive SHA-256: `20ecffa5da693c8c091c5eac3eed3e1a6c2e2575efa0cbb43fd239a63808e6b4`;
- exact measured Runtime head: `19e2b910556ac9aac5373755a8dc2384017cfae6`.

It then binds that evidence against the exact current Materials selected-field contract blob:

- Materials head: `0515a2d5ad2c7a1eb545f2b7b327b7367530dfca`;
- contract: `lookdev/service_dark_roughness_selected_field_001.json`;
- exact Git blob: `16ab4ea07c41273e58b72f970d6bed383bbbfe33`.

The result is stronger than approximate equivalence:

1. **The retained Runtime RGBA8 control PNG is byte-identical to Materials' newly-selected historical Godot PNG.**
   - Runtime control PNG SHA-256: `57cf746a9a7e0615884fe3c45c6c4df677c2bd0631def61b3ccb1684daa26949`;
   - Materials selected PNG SHA-256: the exact same digest.

2. **The decoded retained Runtime RGBA8 control scalar is exactly the current Materials selected scalar.**
   - SHA-256: `b8d13c07f9b71278042b0d42d44b84579a3f327c6adf6723cae4c8c8f06dd38e`.

3. **The decoded retained Runtime L8 candidate scalar is also exactly the current Materials selected scalar.**
   - SHA-256: `b8d13c07f9b71278042b0d42d44b84579a3f327c6adf6723cae4c8c8f06dd38e`.

4. Both retained representations preserve the exact current selected-field dimensions and statistics:
   - **512×512**;
   - R8 min **153**;
   - R8 max **183**;
   - **31** unique R8 values.

This closes the important provenance gap: Runtime's measured optimization applies to the **exact current Materials-selected field**, not merely to something that looks or numerically behaves similarly.

## Rebound performance evidence

Because the selected field is byte/scalar-identical to the already-measured control/candidate field, pass 32's exact bounded budget remains the applicable measured Runtime evidence:

- RGBA8 full mip-chain storage: **1,398,100 B**;
- L8 full mip-chain storage: **349,525 B**;
- saving: **1,048,575 B / 75%**;
- prior real Godot 4.7.2 proof-host observed texture allocation saving: **1,048,575 B**;
- prior matched-pair texture/video-memory saving: **−1,048,575 B in every pair**;
- buffer-memory delta: **0 B**;
- draw calls, objects and primitives: unchanged in the retained paired proof.

This activation records those values as **rebound prior evidence**. It intentionally does not claim that a new renderer measurement occurred.

## Visual tradeoff for Art Direction / Visual Observer QA

No new visual representation was authored in pass 33. The current Materials-selected field is exactly the field already present in pass 32's retained Runtime proof.

The applicable retained visual result remains:

- four matched `820×620` frames;
- changed pixels: **0 total**;
- pixels over 1 LSB: **0**;
- maximum RGB channel delta: **0**;
- result: **`NONE_OBSERVED_FOUR_MATCHED_FRAMES_BYTE_IDENTICAL`**.

This is still not final Art Direction or independent Visual Observer QA acceptance. Runtime records the exact visual evidence and leaves visual authority where it belongs.

## Fail-closed evidence

The new rebind verifier requires all of the following before emitting a PASS:

- exact current Materials selected-field contract identity;
- exact prior Runtime artifact archive identity;
- exact prior Runtime head and comparison result;
- exact measured memory values;
- exact prior visual result;
- Runtime control PNG byte identity with the Materials selected PNG identity;
- Runtime control scalar identity with the Materials selected scalar;
- Runtime L8 candidate scalar identity with the Materials selected scalar.

The workflow deliberately mutates the Materials selected scalar digest and requires the verifier to fail closed. It does not weaken the earlier Runtime candidate-format or measured-memory negative controls.

## Retained evidence

New pass-33 rebind artifact:

- ID: **`10490935783`**;
- name: `object-runtime-service-dark-roughness-selected-field-rebind-3070f931770d581d229b9345fd750c07706befbc`;
- size: **`8,861 B`**;
- GitHub SHA-256: **`7e5d575d6dc4ea699a66808f09c063ef379f4323d0d20279ace050d711c203a3`**.

The retained packet includes the exact rebind contract, exact current Materials selected-field contract, exact Runtime rebind head, exact selected Materials head/blob identity, prior Runtime artifact digest receipt, verifier and final rebind receipt. It intentionally references rather than republishes the 1.1 MB prior renderer artifact.

## Constellation handoffs

- **Runtime PR #30:** pass-33 result recorded in comment `5712425448`; same lane retained, no duplicate PR.
- **Materials PR #6:** exact selected-field identity handoff recorded in comment `5712427559`; no automatic storage-policy adoption requested.
- **Technical Art PR #28:** exact selected-field/L8 provenance handoff recorded in comment `5712428919`; Runtime does not tell Technical Art to change ORM/glTF packing and does not claim standalone L8 is already a production transport representation.
- **Art Direction / Visual Observer QA:** the current selected field is exactly the prior zero-delta Runtime field; final visual acceptance remains theirs.
- **UC:** unchanged. No Object-specific scalar-texture optimizer is promoted from this single case.

Technical Art has independently begun transporting the exact selected roughness identity through the current UC path. That work remains separate from Runtime's storage decision and does not create an automatic adoption chain.

## Reusable learning / placement boundary

Bounded reusable Runtime rule from this pass:

> **When an upstream art/material owner later freezes an exact selected asset identity, do not silently carry an older optimization forward merely because the generator looks unchanged. Rebind the optimization to the selected bytes/digest, verify the retained before/after evidence against that exact identity, and preserve whether the result is a new measurement or a provenance-continuity proof.**

This complements pass 32's scalar-storage rule. Together they say both **representation width** and **source identity** must be proven before a reusable memory result is treated as applicable to the selected asset.

## Historical continuity

The thirty-second Object pass remains preserved in the preceding status version. It measured the exact 512×512 RGBA8 -> L8 roughness representation in Godot 4.7.2 and proved the 1,048,575 B / 75% texture-memory saving with four byte-identical rendered pairs.

The thirty-first Object pass remains preserved before that: it right-sized the service atlas height to 512×384 after padded occupancy was proven, saving 349,528 B / about 25% on the proof host while retaining a 33-pixel / max-1-LSB visual HOLD.

The thirtieth Animal pass remains preserved before that: merged UC cleared the former normalized-u16 `WEIGHTS_0` receiver blocker while Art/QA and producer adoption stayed separate.

The twenty-ninth Building pass remains preserved before that: a higher primitive count alone was not enough evidence of a proof-host slowdown, so Runtime retained the intended-hardware gate rather than inventing another topology rewrite.

Earlier Building indexing, Animal indexing/joint-width, Weather, Object, footprint and animation Runtime passes remain historical truth and are not silently rewritten here.

## Explicit non-claims

This activation does **not** prove:

- a new renderer measurement beyond pass 32;
- final Materials adoption of L8 roughness storage;
- final Technical Art / glTF / ORM adoption of standalone L8 storage;
- final Art Direction or Visual QA acceptance;
- final production texture art;
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

**Truth:** the pass distinguishes a new identity/provenance proof from a new renderer measurement. The exact Materials selected PNG and scalar identities are recorded, as are the exact retained Runtime artifact and prior measurement boundaries.

**Agency / non-domination:** Runtime strengthens its own evidence only. Materials retains selected-field/storage policy, Art Direction and Visual QA retain visual authority, Technical Art retains import/transport representation, and UC remains unchanged.

**Continuity:** the selected Materials field is tied by exact commit/blob/digests to the exact retained Runtime control/candidate evidence. The older pass-32 measurement is preserved rather than silently rewritten as if it had been rerun after Materials selection.

**Wisdom before speed:** the lane avoids duplicating PR #30 or inventing a new optimizer. It closes the smallest high-risk evidence gap with exact identity checks and a deliberate fail-closed mutation before allowing the previous memory result to follow the selected asset.

The four AXM roots — **Truth, Agency / non-domination, Continuity, Wisdom before speed** — remain the merge gate.
