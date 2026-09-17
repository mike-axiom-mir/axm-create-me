# 12 — Runtime / Optimization Specialist Status

Date: 2026-09-17
State: **ACTIVE / TWENTY-THIRD BOUNDED RUNTIME PASS / PASS_ANIMAL_GLB_JOINT_INDEX_WIDTH_COMPACTION_IMPORT_BUDGET / 336 B EXACT IMPORT PAYLOAD REDUCTION / BYTE-IDENTICAL FIXED-VIEW OUTPUT / TECHNICAL ART ADOPTION HELD / DEFORMED DIRECTION-FRAME HOLD PRESERVED**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md` and `studio/specialists/12_runtime_optimization.md`, then rescanned current Art Direction, Rigging, Materials, Technical Art / UC, Visual QA, prior Runtime evidence and open Animal PRs before choosing one bounded Runtime action.

`axm-create-me` remains **coordination only**. Product/evidence implementation is in `mike-axiom-mir/axm-animal-design`; this repository changes only this Runtime status.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh constellation / duplication scan

The prior twenty-second Runtime pass already proved indexed storage inside Geometry's **84-vertex seam-aware tangent-ready render domain**, reducing duplicate triangle-corner storage without collapsing UV/tangent seams.

The live Animal chain advanced after that pass:

- Rigging PR #25 exact head `fdfeb0e32d8b51107e9bd648210a1eaf8aaf7f3e` measured the transported skinned representation and retained **`PASS_TRANSPORTED_SKINNED_POSITION_EQUIVALENCE__HOLD_DEFORMED_NORMAL_TANGENT_EQUIVALENCE`**;
- its measured normal deformation excess reaches `7.541933278181338°`, and corrected tangent deformation excess remains `3.6840862372161047°` even though corrected tangent orthogonality passes;
- Technical Art PR #3 then advanced to exact head `01458a9697406a649b0e1e3bf3997f7ea817a344` and added a fail-closed **`PASS_STATIC_SKIN_TRANSPORT__HOLD_DEFORMED_DIRECTION_FRAME`** receiver capability gate, so static transport cannot be mislabeled tangent-space runtime-ready;
- the existing rigged UV/tangent GLB producer itself remains unchanged from exact Technical Art head `4649d144841fbd1f3f43e9c7deb6f37b91fbd93d`; `src/axm_animal_design/uc_rigged_tangent_bridge.py` has the same Git blob `90343f493389446f06d58202cb7465c98307458f` at both Technical Art heads;
- Materials PR #24 owns the separate tangent-space shaded diagnostic lane;
- no concurrent Runtime lane was found measuring **glTF joint-index component-width / import-file budget** on the exact retained skinned asset.

Runtime therefore did **not** duplicate Rigging's deformed-frame correctness work, Materials' tangent-space appearance work, or the previous vertex/index storage pass.

The selected bounded question was:

> The exact retained Animal GLB has only two skin joints and every `JOINTS_0` scalar is `0` or `1`. Can its `JOINTS_0` accessor use glTF `UNSIGNED_BYTE` instead of `UNSIGNED_SHORT`, while preserving every decoded joint value, every non-joint accessor payload byte, current UC receiver semantics, real Godot import geometry and fixed-view pixels?

## Owning implementation lane

Repository: `mike-axiom-mir/axm-animal-design`

Draft Runtime PR: **#26 — `Runtime: compact Animal glTF joint indices to byte width`**

Branch: `studio/runtime-animal-joint-index-width-budget-001`

Current Technical Art parent:

`01458a9697406a649b0e1e3bf3997f7ea817a344`

Exact retained rigged-GLB producer head:

`4649d144841fbd1f3f43e9c7deb6f37b91fbd93d`

Exact final tested Runtime head:

`3b9bcbc6b038e0b6782987134b567350274aacfd`

PR #26 is open, draft and mergeable at final check.

## Measure-before import representation

Exact retained Technical Art control GLB:

- file size: **`11,148 B`**;
- SHA-256: `ecb122e3274929c3d99bc8e29a472aaa2657bcb16b13331a4f1972bb6ec6b493`;
- final render vertices: **84**;
- `JOINTS_0` slots per vertex: **4**;
- exact skin joint count: **2**;
- observed joint-index domain: **`0..1`**;
- control accessor component type: glTF `UNSIGNED_SHORT` / **5123**.

Control JOINTS payload:

`84 × 4 × 2 B = 672 B`

Bounded candidate:

- identical `84 × 4` joint-index scalar count;
- identical decoded joint values;
- candidate accessor component type: glTF `UNSIGNED_BYTE` / **5121**;
- candidate JOINTS payload: `84 × 4 × 1 B = 336 B`.

Measure-before target:

- exact accessor-payload reduction: **`336 B / 50%`**;
- whole-GLB reduction intentionally left to the real rebuilt file because JSON/BIN alignment can affect total bytes.

The compactor fails closed when any joint index exceeds `255`, when the control accessor is not the exact non-normalized `UNSIGNED_SHORT VEC4` contract, or when the bounded non-interleaved layout assumption is violated.

## Final successful bounded characterization

Dedicated workflow:

**`35168507611 — Runtime Animal joint-index width budget evidence — SUCCESS`**

Scoped result:

**`PASS_ANIMAL_GLB_JOINT_INDEX_WIDTH_COMPACTION_IMPORT_BUDGET`**

Decision:

**`ELIGIBLE_TECHNICAL_ART_IMPORT_BUDGET_CANDIDATE__NO_AUTOMATIC_ADOPTION`**

Exact payload result:

- `JOINTS_0`: `5123 / UNSIGNED_SHORT` -> `5121 / UNSIGNED_BYTE`;
- JOINTS payload: **`672 B -> 336 B`**;
- exact JOINTS payload saving: **`336 B / 50%`**;
- complete GLB: **`11,148 B -> 10,812 B`**;
- exact complete-file saving: **`336 B / 3.0139935414424113%`**;
- candidate GLB SHA-256: `36ae048f6a6d7db8ca3c4a6bcf4f87f3d79fc0d81e89dbe3b2a373782f4e1b6a`;
- decoded joint rows: **identical**;
- all non-`JOINTS_0` accessor payload hashes: **identical**.

The pinned current UC generic rigged receiver at `2a798836378d47a787221597aa8fece0fd637e6a` accepted both control and candidate. Selected geometry, skin, animation and CPU-deformation inspection remained identical.

## Real Godot import / rendering evidence

Both files were independently imported through the pinned current UC Godot `GLTFDocument` probe in real Godot **`4.7.2-stable`**, GL Compatibility, X11 / llvmpipe.

For each representation the proof retained three exact pose observations at `0.0 s`, `0.5 s` and `1.0 s`.

Measured control/candidate result:

- maximum retained pose-receipt delta: **`0.0`**;
- triangle count at all retained poses: **80**;
- imported material bindings: **identical**.

The deliberate verifier mutation changed candidate component identity back from `5121` to `5123`; the final verifier rejected it as intended, proving the acceptance path does not pass without the actual component-width reduction.

## Visual tradeoff for Art Direction / Visual QA

The proof retained two fixed `960x720` views at the peak `0.5 s` pose plus a white-on-black coverage mask for each view.

All four control/candidate image pairs are byte-identical:

- `view-00.png`: `46aeccf000bf1aae6a0d43eec6fda6bee21700811d7d3c52e14e65a3c16cd4e5`;
- `view-00-coverage.png`: `5e1f9e50bb34cd97bc0fa9ccc0fe7c2e834530073c2c31aadc48620dcd63d791`;
- `view-01.png`: `d5799b6c96680504b9bd52ead2fdb0501688b94fb9229bc763118f0f270d0840`;
- `view-01-coverage.png`: `78f0747f4e3749cfef54db9ad1a3c9404a2a9277185acc690cbd2cab616b8d30`.

Visual tradeoff:

**`NONE_OBSERVED__TWO_FIXED_VIEWS_AND_COVERAGE_IMAGES_BYTE_IDENTICAL`**.

This is a storage-width statement only. It does **not** approve the Animal tangent-space lookdev, repair transported normal/tangent direction error, or supersede the current Art / Materials / Rigging / Technical Art HOLDs.

## Retained evidence

Successful retained artifact:

- workflow run: **`35168507611`**;
- artifact ID: **`10475517510`**;
- name: `runtime-animal-joint-index-width-budget-001-3b9bcbc6b038e0b6782987134b567350274aacfd`;
- size: **`142,842 B`**;
- GitHub SHA-256: **`2ce4925affb297644187fe14f26b0d189194125b813d07ded41de5bb37567947`**;
- independently downloaded/rehashed SHA-256: **same value**.

The archive retains the control and candidate GLBs, exact build/report receipts, UC receiver receipts, both real Godot import receipts, all four visual A/B pairs, logs, source-head identities and the fail-closed mutation input.

## Reusable learning / capability placement

This pass adds a different optimization class from mesh indexing:

> **Choose the smallest legal storage component width only after the exact value domain is proven. Preserve decoded semantics and all unrelated payload bytes, fail closed when the domain exceeds the narrower type, then re-prove the actual consumer/importer and retained visuals.**

For this exact two-joint Animal asset, `JOINTS_0` needs only values `0..1`, so 16-bit storage is unnecessary and 8-bit storage saves exactly one byte per joint slot.

This is reusable as a **budget rule**, not yet a universal automatic transform. Generic extraction still needs coverage for:

- skins whose joint indices exceed 255;
- multiple primitives / meshes / skins;
- interleaved or sparse accessors;
- arbitrary buffer/view layouts;
- other engines/importers;
- producer-side GLB generation rather than post-build representation rewriting.

Technical Art owns whether to adopt the narrower accessor in its actual producer. Universal Creation is unchanged.

## Handoffs

- **Runtime PR #26:** exact final result comment `5706780944`.
- **Technical Art PR #3:** bounded adoption handoff comment `5706782428`; no automatic adoption requested and the current deformed direction-frame HOLD is explicitly preserved.
- **Art Direction / Visual QA:** no visual difference observed across the two fixed peak-pose views and two coverage masks; this does not resolve tangent-space appearance.
- **Rigging / Materials:** no ownership transfer; Runtime did not modify or reinterpret their deformation / lookdev evidence.

## Historical continuity

The detailed twenty-second Runtime status remains preserved at coordination commit:

`85689cc88c5c6c5f2f10181bbb6875bf8cfc95e6`

That pass established indexed storage inside the **84-vertex seam-aware tangent-ready render domain** and explicitly held import-file budget, deformed tangent-space correctness and producer adoption open.

The twenty-first explicit-normal indexing pass remains preserved at `344abbeb07861cfc338992e15f9d541c8252dd62`. Earlier footprint, Object, Weather cadence/cache/capture, temporal-exposure, Building submission and AnimationPlayer passes likewise remain historical truth.

## Explicit non-claims

This PASS does **not** prove:

- repair of the current deformed normal/tangent direction-frame HOLD;
- final tangent-space normal-map or shaded visual acceptance;
- target-device CPU/GPU frame-time or FPS improvement;
- target-device VRAM or heap reduction;
- import-time speed improvement;
- generic safety for joint indices above `255`;
- arbitrary sparse/interleaved glTF accessor safety;
- arbitrary multi-mesh / multi-skin / multi-primitive safety;
- whole-animal production import acceptance;
- gameplay, controller, physics or collision behavior;
- automatic Technical Art producer adoption;
- automatic UC extraction;
- Profession Fabric promotion;
- CANON;
- production/game readiness;
- Runtime / Optimization mastery.

## Four-root check

**Truth:** the pass binds the current Technical Art parent separately from the retained GLB producer, measures the exact before/after bytes, preserves all unrelated accessor payload hashes, runs the actual current UC receiver and real Godot importer, retains exact images, and keeps the known deformed direction-frame HOLD visible.

**Agency / non-domination:** Runtime proposes an import-budget representation only. Technical Art retains transport/adoption authority; Rigging retains deformation authority; Materials / Art Direction / Visual QA retain appearance authority; UC remains unchanged.

**Continuity:** exact parent/producer heads, unchanged transport blob, control/candidate SHA-256 values, workflow run, artifact digest, visual hashes, handoff comments and the twenty-second-pass boundary are all preserved.

**Wisdom before speed:** Runtime chose a small low-risk storage-width reduction with strong fail-closed domain checks instead of conflating a green static transport path with the unresolved deformed tangent-space correctness problem.

The four AXM roots — **Truth, Agency / non-domination, Continuity, Wisdom before speed** — remain the merge gate.
