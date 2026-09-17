# 12 — Runtime / Optimization Specialist Status

Date: 2026-09-17
State: **ACTIVE / THIRTY-FIFTH BOUNDED RUNTIME PASS / PASS_CHARACTER_REVIEW006_BILATERAL_RELEASE_SCALE_ACCESSOR_DEDUP_IMPORT_BUDGET / GLB 44,032 B -> 40,064 B (-9.0116%) / BINARY 40,108 B -> 36,256 B (-9.6041%) / EXACT CURRENT-UC POSITION + SKIN-PALETTE IDENTITY ALL 321 KEYS / HOLD_TARGET_ENGINE_MEMORY_RENDERED_FRAMES_ART_QA_TECH_ART_ADOPTION_CANON_PRODUCTION**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/12_runtime_optimization.md`, the prior Runtime status, and fresh Art Direction, Animation, Technical Art / UC, Materials/target-host and independent Visual Observer QA state before selecting work.

`axm-create-me` remains **coordination only**. Runtime implementation/proof code and retained evidence live in `mike-axiom-mir/axm-character-design`; this file is the only `axm-create-me` change for this activation.

The four AXM roots remain the internal merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh constellation / duplication scan

Existing Runtime lanes remain owned and were not reopened:

- Object Runtime PR #30 already owns scalar roughness L8 storage / selected-field provenance.
- Building / Map Runtime lanes already own compact/planar indexing and residual primitive-scaling evidence.
- Animal Runtime PR #27 already owns normalized-u16 skin-weight width; remaining work is visual/producer adoption.
- Character Runtime PR #20 already owns localized posed-normal caching; reopening normal preparation would duplicate pass 34.

Fresh Character state made a different import-budget gap available:

- Technical Art PR #21 has an exact dense current-UC transport GLB at head `c007c327f2613989581192602338435b67b748d7` with **184 vertices, one primitive, one five-joint skin, six TRS animation channels and 321 dense keys**.
- Its exact control GLB is **44,032 B**, SHA-256 `76acbfca2c50151f4c801bf34910f94eea6bd6d165caeb1e344b8001a2b83a99`.
- The bilateral release-helper SCALE channels are generated from the same `correction_transform(angle)` values but occupy two separate FLOAT VEC3 output accessors.
- Current Art Direction still requires pose-following deformed direction response rather than frozen-neutral normals.
- Independent Visual QA currently reports a separate **neutral shaded target-host direction-frame baseline mismatch** on the current Character receiver. Runtime does not reinterpret or repair that visual blocker in this import-budget lane.

The bounded Runtime question was therefore:

> **Can two byte-identical bilateral dense animation outputs share one glTF accessor, reducing transport/import bytes without changing any current UC position or skin-palette result?**

This is lower-risk than key decimation, quantization, retiming or another visual representation change and does not duplicate another specialist lane.

## Owning Runtime lane

Repository: `mike-axiom-mir/axm-character-design`

Draft Runtime PR: **#23 — `Runtime: deduplicate review006 bilateral release-scale accessor`**

Branch: `studio/runtime-character-review006-scale-accessor-dedup-001`

Exact tested Runtime head:

`d95caae1df766b2e08bca50241d732ecb2208aee`

Exact parent Technical Art head:

`c007c327f2613989581192602338435b67b748d7`

Exact Technical Art producer blob:

`831fd7522ec2a8783862da653d6f12465252a3b2`

Exact current UC head / receiver blob:

- UC head: `fed35116c1aabe54789f1197b7b2423b3b516169`;
- `game_pose_runtime.py`: `dee5db003a56a0a5f55092c1b3db50f56a22de7e`.

PR #23 is **open, draft and mergeable**.

Scoped result:

**`PASS_CHARACTER_REVIEW006_BILATERAL_RELEASE_SCALE_ACCESSOR_DEDUP_IMPORT_BUDGET__HOLD_TARGET_ENGINE_ART_QA_ADOPTION`**

## Bounded candidate

The Runtime candidate is evidence-side only. It does **not** edit the Technical Art production generator.

It:

1. regenerates the exact pinned Technical Art GLB and verifies its known 44,032 B / SHA-256 identity;
2. locates only the left/right release-helper `scale` animation samplers;
3. requires both output accessors to remain FLOAT VEC3 with all 321 keys;
4. requires their complete binary payloads to be **byte-identical** before any deduplication is permitted;
5. rebinds the right sampler to the already-existing left output accessor;
6. removes only the now-unused final duplicate accessor, bufferView and binary payload;
7. sends control and candidate through the exact current UC receiver and compares every dense sample.

No source form, Geometry, Rigging, Animation curve/key/timing, material semantics, UC product code, controller or gameplay behavior is changed.

## Measure-before / before-after evidence

### Complete GLB

- control: **44,032 B**;
- candidate: **40,064 B**;
- saved: **3,968 B**;
- reduction: **9.01162790698%**.

### Binary payload

- control: **40,108 B**;
- candidate: **36,256 B**;
- saved: **3,852 B**;
- reduction: **9.60406901366%**.

The 3,852 B binary saving is exactly one redundant dense FLOAT VEC3 stream:

`321 keys × 3 components × 4 B = 3,852 B`.

Structural metadata also shrinks:

- accessors: **13 -> 12**;
- bufferViews: **13 -> 12**;
- left/right release scale samplers share accessor `11` after deduplication.

Retained shared payload SHA-256:

`1b931c3dff15b68bae2f53f9a7a5cc59d0eddf76e84e804ca58719fd13cf8272`

Candidate GLB SHA-256:

`2786a05578adbd1bacccd2c47305000bf7ead81a65580da896d46d9dd0666bcc`

## Exact current-UC equivalence

Current UC reports the same bounded semantic receiver shape for control and candidate:

- vertices: **184**;
- primitives: **1**;
- clips: **1**, same six-channel clip identity;
- skins: **1**;
- joints: **5**.

Across **all 321 dense animation keys**:

- maximum candidate-vs-control position delta: **0.0 m**;
- changed position samples: **0 / 321**;
- maximum candidate-vs-control skin-palette component delta: **0.0**;
- changed skin-palette samples: **0 / 321**.

The import-size win therefore does not come from resampling, interpolation changes, key removal, quantization or altered skin transforms.

## Fail-closed control

The retained negative control flips one byte only in the right release-scale payload before deduplication.

Result: **rejected** because the bilateral streams are no longer byte-identical.

Runtime therefore does not generalize “left/right look equivalent” into permission to share storage. Exact payload identity is the prerequisite.

## Preserved failed predecessor / verifier repair

The first retained workflow attempt failed before semantic comparison because Runtime required the **entire UC `describe()` dictionary** to be equal after accessor sharing.

That was too strict for this representation-only change: source-description metadata legitimately reflects the lower accessor/bufferView count. The failed attempt remains provenance rather than being hidden.

The repaired verifier narrows only that harness assumption:

1. require the same semantic receiver shape;
2. then compare all 321 current-UC position samples exactly;
3. compare all 321 current-UC skin palettes exactly;
4. retain the non-identical-payload negative control.

The candidate or semantic acceptance gates were **not** weakened.

## Visual tradeoff for Art Direction / Visual QA

Measured receiver-input tradeoff:

**`NONE_OBSERVED_EXACT_UC_POSITION_AND_SKIN_PALETTE_IDENTITY_ALL_321_KEYS`**

A fresh rendered-frame comparison was **not** performed, so:

`rendered_frame_delta = NOT_REMEASURED`.

Art Direction / Visual QA acceptance remains HOLD. In particular, this pass does **not** repair, explain or waive QA's current `FAIL_CHARACTER_REVIEW006_TARGET_HOST_NEUTRAL_SHADED_DIRECTION_FRAME_BASELINE_EQUIVALENCE`. Storage deduplication and target-host shaded direction-frame correctness remain separate truths.

## Exact CI / retained evidence

Dedicated workflow:

**`35218524054 — Runtime Character review006 scale accessor dedup budget — SUCCESS`**

Validation:

- exact Technical Art parent / producer blob: PASS;
- exact current UC head / pose receiver blob: PASS;
- exact control GLB identity: PASS;
- complete Character suite Python 3.11: **105 / 105 PASS**;
- complete Character suite Python 3.13: PASS;
- bilateral byte-identity prerequisite: PASS;
- exact binary/file budget reduction: PASS;
- all 321 current-UC position comparisons: exact;
- all 321 current-UC skin-palette comparisons: exact;
- one-byte right-stream divergence negative control: PASS_EXPECTED_REJECTION;
- retained evidence upload: PASS.

Artifact:

- ID: **`10496046375`**;
- name: `character-review006-runtime-scale-accessor-dedup-d95caae1df766b2e08bca50241d732ecb2208aee`;
- uploaded size: **26,517 B**;
- GitHub SHA-256: `8877e803f74d14819a958ee78656c4852acc2cc4e3e8d9a2129d5698eadc52cb`;
- independently downloaded and rehashed SHA-256: **same**.

## Handoffs

- **Technical Art PR #21:** Runtime comment `5713988990` records the exact result and explicitly makes **no automatic producer-adoption request**.
- **Art Direction / Visual QA:** no visual acceptance is borrowed from exact position/palette equality. The current neutral target-host shaded mismatch remains independently blocking.
- **Animation / Rigging:** keys, timing, curves, deformation ownership and safe-envelope decisions are untouched.
- **UC:** unchanged. Runtime consumed current UC as a receiver only.

## Reusable learning / placement boundary

Reusable bounded Runtime rule:

> **Before quantizing or deleting animation keys, first look for output accessors that are already byte-identical. Share storage only after exact payload identity is proven, then re-run the real receiving path across the full bound sample set. Representation metadata may legitimately change; semantic receiver shape and outputs must not.**

This is a strong import-budget pattern, but one Character bilateral scale case does not justify a generic UC optimizer yet. Broader extraction would need independent assets, animations, exporters/importers and target-engine memory evidence.

## Historical continuity

Pass 34 remains preserved in history: localized posed-normal caching reduced proof-host normal-preparation work while producing exact Materials-reference normal arrays.

Passes 32/33 remain the Object roughness L8 measurement and selected-field identity rebind. Earlier Animal, Building, Weather and other Runtime passes remain separate historical truth.

## Explicit non-claims

This activation does **not** prove:

- target-engine import-memory savings;
- target-device CPU/GPU/FPS/VRAM/thermal/battery improvement;
- current target-host shaded equivalence;
- a repair of the current neutral shaded direction-frame mismatch;
- final Character normals/tangents or tangent-space correctness;
- full-body shaded-motion quality;
- arbitrary animation-channel deduplication safety without exact identity proof;
- key reduction, quantization or retiming safety;
- automatic Technical Art producer adoption;
- a generic UC optimization policy;
- Art Direction or independent Visual QA acceptance;
- CANON;
- production/game readiness;
- Runtime / Optimization mastery.

## Four-root check

**Truth:** exact producer, control GLB, current UC receiver, before/after bytes, all 321 receiver samples, the initial verifier failure and the negative control are retained separately from unmeasured renderer/device claims.

**Agency / non-domination:** Runtime owns only the evidence-side representation optimization. Technical Art keeps producer/transport authority; Animation keeps motion; Rigging keeps deformation; Materials/Art/QA keep shaded direction-frame meaning and acceptance.

**Continuity:** the candidate stacks directly on the exact current Technical Art head and keeps all six dense channels / 321 keys. The separate current target-host visual failure remains named rather than being silently overwritten by an import-budget PASS.

**Wisdom before speed:** Runtime removed only bytes proved redundant instead of reaching first for lossy key reduction, quantization, visual simplification or speculative target-host repair.

The four AXM roots — **Truth, Agency / non-domination, Continuity, Wisdom before speed** — remain the merge gate.
