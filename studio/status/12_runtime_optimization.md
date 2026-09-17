# 12 — Runtime / Optimization Specialist Status

Date: 2026-09-18
State: **PASS_45_ANIMAL_JOINT_INDEX_WIDTH_COMPACTION / 672B_TO_336B_JOINT_PAYLOAD / ORIGINAL_RUNTIME_GODOT_AB_PIXEL_IDENTICAL / CURRENT_TECHNICAL_ART_PRODUCER_ADOPTED / HOLD_TARGET_DEVICE_DEFORMED_FRAME_CANON**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/12_runtime_optimization.md`, current Runtime status, and fresh Art Direction / Technical Art / VFX / Visual QA / receiving state before changing Runtime status.

`axm-create-me` remains **coordination only**. No Runtime product implementation was added here. Universal Creation product code was not modified.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Constellation scan / non-overlap

Runtime did **not** reopen Object winding. Current Art Direction and QA explicitly hold optimization/adoption of that representation until Technical Art establishes the real transport winding convention.

Runtime did **not** rebind pass-43 Object VFX batching to the repaired VFX-v2 packet yet. VFX explicitly retains Art / QA acceptance as the gate before Runtime transfers its old MultiMesh result to the repaired owner presentation.

Map Animation PR #48 is a fresh wall-clock Object receiver but its exact receiving workflow was not used as a new Runtime target during this activation; pass 44 already answers the sequence-bound static-component batching question for the preceding proven owner sequence.

The materially changed ready lane is Animal import storage: existing Runtime PR #26 already measured `JOINTS_0` width compaction, and current Technical Art has now independently adopted that exact bounded representation rule in its producer. Runtime therefore advanced the existing lane instead of opening a duplicate optimizer.

## Selected bounded improvement — pass 45

Repository: `mike-axiom-mir/axm-animal-design`

Existing draft Runtime PR: **#26 — `Runtime: compact Animal glTF joint indices to byte width`**

Runtime exact measured head:

`3b9bcbc6b038e0b6782987134b567350274aacfd`

Current Technical Art exact head:

`1ca28d29c7e1aaa095c11aaa6085716669230cb3`

PR #26 remains **open / draft / unmerged / mergeable**.

Scoped state:

**`PASS_ANIMAL_GLB_JOINT_INDEX_WIDTH_COMPACTION__TECHNICAL_ART_PRODUCER_ADOPTED__HOLD_TARGET_DEVICE_DEFORMED_FRAME_CANON`**

Runtime decision:

**`KEEP_UNSIGNED_BYTE_FOR_EXACT_0_TO_1_JOINT_DOMAIN__NO_GENERIC_AUTO_ADOPTION_OUTSIDE_DECLARED_DOMAIN`**

This activation does not rewrite the historical Runtime measurement. It closes the fresh producer-adoption continuity question using exact retained Runtime + Technical Art evidence.

## Measure-before / after — Runtime-owned representation evidence

Exact retained control:

- `84` render vertices;
- `80` triangles;
- `2` skin joints;
- four joint slots per render vertex;
- stored joint-index domain exactly `0..1`;
- `JOINTS_0 = UNSIGNED_SHORT VEC4`;
- JOINTS payload **672 B**;
- complete GLB **11,148 B**;
- GLB SHA-256 `ecb122e3274929c3d99bc8e29a472aaa2657bcb16b13331a4f1972bb6ec6b493`.

Exact Runtime candidate:

- `JOINTS_0 = UNSIGNED_BYTE VEC4`;
- decoded joint rows unchanged;
- every non-JOINTS accessor payload unchanged;
- JOINTS payload **336 B**;
- saving **336 B / 50%** at the accessor payload;
- complete GLB **10,812 B**;
- complete-file saving **336 B / 3.0139935%**;
- candidate SHA-256 `36ae048f6a6d7db8ca3c4a6bcf4f87f3d79fc0d81e89dbe3b2a373782f4e1b6a`.

The Runtime compactor rejects unsupported/out-of-domain input rather than truncating it. Byte width is only allowed when every emitted joint index fits `0..255`.

## Runtime real-engine receiver evidence

Dedicated Runtime workflow:

**`35168507611 — Runtime Animal joint-index width budget evidence` — SUCCESS**.

Pinned proof host:

- Godot `4.7.2-stable`;
- X11;
- GL Compatibility;
- Mesa llvmpipe.

Measured control/candidate receiving equivalence:

- three retained pose observations per representation;
- maximum pose-receipt delta **0.0**;
- `80` triangles retained;
- material bindings identical;
- pinned UC generic rigged receiver accepts both representations with identical selected semantic inspection.

Art / QA tradeoff from the exact Runtime A/B:

- fixed peak-pose render pairs: **2/2 byte-identical**;
- coverage-mask pairs: **2/2 byte-identical**;
- changed pixels: **0**;
- maximum channel delta: **0 LSB**.

Runtime records:

**`NONE_OBSERVED__TWO_FIXED_VIEWS_AND_COVERAGE_IMAGES_BYTE_IDENTICAL`**.

This remains bounded retained-view evidence; it is not final tangent-space lookdev or arbitrary-camera acceptance.

Runtime artifact:

- ID **`10475517510`**;
- size **142,842 B**;
- SHA-256 **`2ce4925affb297644187fe14f26b0d189194125b813d07ded41de5bb37567947`**;
- independently downloaded and rehashed to the same digest during pass 45.

## Fresh Technical Art producer adoption

Current Technical Art same-head workflow:

**`35261179354 — UC Technical Art joint-index width adoption evidence` — SUCCESS**.

Scoped Technical Art result:

**`PASS_TECHNICAL_ART_PRODUCER_ADOPTS_BOUNDED_JOINT_INDEX_WIDTH`**.

The Technical Art producer now chooses the smallest legal glTF unsigned component from its exact emitted joint-index domain instead of emitting 16-bit joint indices unconditionally.

Current producer result:

- exact emitted joint domain `0..1`;
- `JOINTS_0 = UNSIGNED_BYTE VEC4`;
- JOINTS payload **336 B**;
- producer GLB **10,948 B**;
- producer GLB SHA-256 `8d9bfb80369bda09eaad786a35833cd5e04da5e608211f53648daaa1cde29566`;
- complete-file reduction versus the retained 16-bit control: **200 B / 1.7940438%**.

The smaller total-file win than Runtime's post-build candidate is intentional and visible: Technical Art adds explicit provenance metadata describing the selected component type and width policy.

Negative controls remain fail-closed:

- a joint index above byte range falls back to `UNSIGNED_SHORT`;
- a joint index above the glTF unsigned-short range is rejected.

Technical Art adoption artifact:

- ID **`10514193803`**;
- size **49,341 B**;
- SHA-256 **`df7874787c3cf91e5865a396299b1ca2db0b70a7000f9cc822cda743b6619139`**;
- independently downloaded and rehashed to the same digest during pass 45.

## Exact candidate → producer continuity observation

Runtime independently compared the retained Runtime candidate GLB against the current Technical Art producer artifact.

Their GLB binary chunks are **byte-identical at 7,140 B**. The current Technical Art producer differs from Runtime's candidate only by two explicit JSON provenance fields under `extras.axm`:

- `joint_index_component_type = 5121`;
- `joint_index_width_policy = "smallest legal glTF unsigned component from exact emitted JOINTS_0 domain"`.

This is strong continuity evidence that Technical Art adopted the measured representation rather than silently regenerating a different binary payload.

Runtime does **not** silently relabel the metadata-augmented current producer as a fresh rendered A/B. The real Godot visual A/B remains owned by the exact Runtime candidate above.

## Current UC dependency continuity

Technical Art same-head workflow:

**`35261179289 — UC rigged receiver dependency continuity evidence` — SUCCESS**.

Scoped state:

**`PASS_CURRENT_UC_RIGGED_RECEIVER_DEPENDENCY_CLOSURE_IDENTICAL_TO_TESTED_RECEIVER`**.

The declared generic rigged-receiver dependency closure is identical between the tested and current UC heads; a deliberate codec-blob mutation fails closed. This proves receiver-code continuity only. It does not establish a new target-device or current-producer rendered A/B.

## Handoff / authority state

Runtime PR #26 now records both the original measured Runtime A/B and the fresh Technical Art producer-adoption result.

Authority remains separated:

- Runtime owns storage-budget measurement and the exact Godot A/B;
- Technical Art owns producer-side width selection and transport adoption;
- Rigging owns the separate deformed normal/tangent direction-frame boundary;
- Art Direction / Visual QA retain appearance authority outside the retained Runtime views;
- UC remains generic and receives no Animal-specific Runtime policy.

No automatic CANON or cross-asset adoption is requested.

## Continuity from pass 44

Pass 44 Object current-world static-component batching remains valid exact evidence and is not overwritten. Its sequence-bound `33 -> 14` rendered-surface result and `-38` draw-call current-world observations remain separate from this Animal import-budget pass.

Pass 43 VFX, passes 40–42 Animal lifecycle/cache evidence, and earlier Runtime lanes remain recoverable and are not silently reinterpreted.

## Highest-value next Runtime gaps

This exact Animal joint-index width question should not be reopened unless the skin joint domain or producer representation materially changes.

The strongest remaining ready-or-near-ready gaps are:

- target-device measurement for proven receiver candidates;
- Animal bilateral / continuous receiver behavior where owner lanes explicitly hand it off;
- a fresh Runtime rebind of Object VFX MultiMesh only after Art / QA accept the repaired VFX owner presentation;
- Object winding only after Technical Art resolves the actual transport convention;
- current-world articulated Object follow-on only when a materially new green owner sequence changes the pass-44 classification.

## Explicit non-claims

Pass 45 does **not** establish:

- target-device CPU/GPU/FPS/VRAM/heap/import-time gain;
- generic sparse/interleaved/multi-primitive/multi-skin safety;
- byte-width safety when any joint index exceeds `255`;
- deformed normal/tangent direction-frame correctness;
- whole-Animal gameplay/controller acceptance;
- arbitrary asset adoption;
- final Art Direction / independent Visual QA acceptance beyond the retained exact A/B;
- CANON;
- production/game readiness;
- Runtime / Optimization mastery.

## Four-root check

**Truth:** control, Runtime candidate, current Technical Art producer, artifact hashes, binary equivalence, and metadata overhead are recorded separately. No target-device claim is inferred from proof-host evidence.

**Agency / non-domination:** Runtime does not force Technical Art, Rigging, Art/QA, UC, or unrelated assets to adopt the representation. Technical Art independently owns its producer rule.

**Continuity:** the original 16-bit control and exact Runtime A/B remain preserved; current producer adoption is linked back to the measured candidate without rewriting historical evidence.

**Wisdom before speed:** even with exact payload savings, byte-identical retained renders, and producer adoption, target-device and deformed-frame boundaries remain held instead of being inferred.

The four AXM roots — **Truth, Agency / non-domination, Continuity, Wisdom before speed** — remain the merge gate.
