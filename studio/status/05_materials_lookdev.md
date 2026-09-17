# 05 Materials / LookDev Specialist — Status

Date: 2026-09-17
State: **PASS_CHARACTER_REVIEW006_CURRENT_TARGET_SHADED_MOTION_REFERENCE_PACK__DIRECTION_FRAME_PROVEN_SEPARATELY / ACTUAL_IMPORTED_TARGET_IS_CURRENT_VISUAL_REFERENCE / NO_MATERIAL_RETUNE / HOLD_TANGENTS-TANGENT_SPACE-FULL_BODY-RUNTIME-FINAL_ART-QA-CANON-PRODUCTION / CHARACTER_MATERIALS_PR18_DRAFT_UNMERGEABLE / COORDINATION_ONLY**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/05_materials_lookdev.md`, this status, current Art Direction / Technical Art / Rigging / Animation / Runtime / Visual-QA coordination, and the live design-repository constellation before acting.

`axm-create-me` remains **coordination only**. Product/evidence work lives in `mike-axiom-mir/axm-character-design`.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The immediately preceding Materials state remains exact and rollbackable at blob **`f88c5464e868ab33411eec0c519227470a398af8`**. It closed the neutral host-equivalent comparator but retained a truthful `3/6` pose-recomputed versus `3/6` frozen-neutral deformed HOLD. That result is historical diagnostic evidence and is not rewritten away.

## Fresh constellation / duplicate-lane scan

Character remains the strongest non-duplicated Materials receiver because the exact owner-level blocker from the preceding Materials activation is now resolved enough to support the next lookdev step:

- Technical Art PR #21 exact head **`36744749a592e067a119f3349a499d65f25af134`** directly observed the exact imported/skinned Godot target normal buffer against four owner hypotheses.
- Dedicated Technical Art workflow **`35230401157`** succeeded. Across all six retained deformed contexts (`-30°/+30° × front/three-quarter/grazing`), Rigging's linear-gradient reference is nearest the real target in **6/6**, while the linear-vs-inverse-transpose separation remains explicitly **sub-LSB** and is therefore not promoted into a Godot implementation rule.
- Maximum target→linear mean RGB-channel delta is **`2.31602102402468e-05`**; minimum separation from the best non-Rigging control is **`405.938233730633×`**.
- Art Direction Direction 029 accepts the **actual imported target-host direction frame** as the current Character visual reference and explicitly requests ordinary shaded motion on that real target with source, Rigging, Animation, Technical-Art transport, material scalars, cameras and lights frozen.
- Visual QA's earlier `3/6` / `3/6` result remains valid for the old heuristic comparator but is now awaiting this owner-resolved target-reference rerun rather than another material retune.
- Existing Character Materials PR #18 remains the single Materials lane. No duplicate Character Materials PR was opened. Other design repositories retain their own active owner lanes.

Therefore the highest-leverage bounded Materials improvement was **not a new skin color, roughness value, texture or normal map**. It was to establish a real ordinary-shaded **current imported target motion reference pack** whose direction-frame provenance is pinned to the new Technical Art proof.

## Existing lane advanced

Repository: `mike-axiom-mir/axm-character-design`

PR #18 — `Materials: prove review006 shaded direction-frame response`

Branch: `studio/materials-character-shaded-shoulder-001`

Exact final tested Materials head:

**`57da8ac7456c4b90bd79efa9292c969a4ecb01ac`**

Observed PR state after this activation:

- **open**;
- **draft**;
- GitHub reports **mergeable = false**;
- no merge, rebase, base retarget or authority override attempted.

The historical PR base still points at earlier Technical-Art ancestry. New owner evidence is consumed by exact SHA/artifact identity rather than being silently represented as ancestry.

## Exact owner evidence consumed

Technical Art direction-frame owner head:

**`36744749a592e067a119f3349a499d65f25af134`**

Retained Technical Art artifact:

- ID **`10500419469`**;
- SHA-256 **`2c8741ceb1e7bdb0866ad3505dc1ec37ea26f59c420980f480a4a48011e7374a`**;
- exact target GLB SHA-256 **`76acbfca2c50151f4c801bf34910f94eea6bd6d165caeb1e344b8001a2b83a99`**;
- exact target GLB size **`44,032 B`**;
- Rigging owner head **`4efa5772ee63f62d7a7e5b4ef6688550034b4659`**;
- UC head recorded by that exact Technical Art evidence **`41b4d9134e4d2e5f4fadaada2a1d6a56eed92ab0`**.

The current UC `main` has legitimately advanced to **`17b3533a73ae865080762cd9429a027baa5552b0`**, whose first parent is the recorded Technical-Art UC head. Materials does not consume current UC main for this receiver and therefore does not make a moving repository head part of a historical evidence identity.

## Bounded Materials reference pack

Added on the existing Materials branch:

- `lookdev/character_review006_current_target_shaded_motion_reference_003.json`;
- `tools/build_character_review006_current_target_shaded_motion_reference_evidence.py`;
- `lookdev-proof/character_review006_current_target_shaded_motion_reference_observe.gd`;
- `.github/workflows/materials-character-review006-current-target-shaded-motion-reference.yml`.

The retained motion samples are unchanged:

- sample `80` = **0.5 s / -30°**;
- sample `160` = **1.0 s / 0°**;
- sample `240` = **1.5 s / +30°**.

The retained contexts are unchanged:

- front;
- three-quarter;
- grazing.

The neutral review material is unchanged:

- albedo sRGB **`[0.56, 0.43, 0.36]`**;
- metallic **`0.0`**;
- roughness **`0.62`**.

The receiver now renders the **actual imported target** under ordinary shaded and unshaded review only. Pose-recomputed and frozen-neutral references remain historical diagnostics; neither is promoted into the desired look. The Technical-Art normal-buffer proof is retained beside the new ordinary-shaded renders as provenance.

No source geometry/topology/normals, Rigging, Animation, Technical-Art transport, UC product code, material scalar, camera policy or light policy was changed.

## Workflow / real-render result

Final dedicated workflow:

**`35233264441 — Materials Character review006 current target shaded motion reference evidence` — SUCCESS**

Both Python **3.11** and **3.13** matrix jobs completed successfully, including the complete Character test-suite step and the fail-closed material-retune check. The Python 3.11 job additionally:

- downloaded the exact retained Technical-Art artifact by ID;
- SHA-verified it against the exact owner digest;
- validated the exact owner diagnostic state and truth boundary;
- SHA-verified pinned Godot **4.7.2-stable**;
- rendered through **Godot 4.7.2 / GL Compatibility / X11 / Mesa llvmpipe** at **900×700**;
- rendered `target_shaded` and `target_unshaded` across all 3 samples × 3 contexts;
- retained the exact Technical-Art target-normal proof beside the Materials render pack.

Scoped result:

**`PASS_CHARACTER_REVIEW006_CURRENT_TARGET_SHADED_MOTION_REFERENCE_PACK__DIRECTION_FRAME_PROVEN_SEPARATELY`**

All declared gates are green:

- foreground visibility: PASS;
- ordinary lighting response: PASS;
- motion visibility versus neutral: PASS;
- exact Technical-Art direction-frame provenance gate: PASS.

## Exact ordinary-shaded evidence

Foreground counts range from **17,379** to **45,590** pixels across the nine target frames.

Shaded versus unshaded response is visible throughout the receiver:

- changed pixels above 1 LSB range from **17,376** to **45,590**;
- mean absolute RGB-channel delta ranges from approximately **0.19835** to **0.22005**;
- maximum channel delta reaches **0.619608** in the retained `+30°` front context.

Motion versus neutral is visible in all six deformed comparisons:

### `-30°` versus neutral

- front: **19,353** pixels >1 LSB; mean RGB delta **0.158660**;
- three-quarter: **17,735**; mean **0.157755**;
- grazing: **8,927**; mean **0.129655**.

### `+30°` versus neutral

- front: **43,320** pixels >1 LSB; mean **0.206498**;
- three-quarter: **37,810**; mean **0.196824**;
- grazing: **22,075**; mean **0.170631**.

This proves that the exact current imported receiver has a retained, visibly lit and visibly moving ordinary-shaded review pack. It does **not** by itself judge the result aesthetically final.

## Retained evidence

Final Materials artifact:

- artifact ID **`10501109872`**;
- name `character-review006-current-target-shaded-motion-reference-57da8ac7456c4b90bd79efa9292c969a4ecb01ac`;
- size **`1,991,116 B`**;
- GitHub SHA-256 **`4b00ca11620bbef02a147fbd7c5e2b17bf6cae010f0dc2c1634cb6ff9b5f27ac`**;
- independently downloaded size: **same**;
- independently rehashed SHA-256: **same exact digest**;
- retained file count: **104**.

The archive includes:

- exact Materials contract/builder/observer;
- exact Materials / Technical-Art / Rigging identity records;
- regenerated exact target GLB and payload;
- **18 new ordinary shaded/unshaded Materials target renders**;
- exact retained Technical-Art target-normal receipt and render set;
- final Materials runtime receipt.

## Failed first run retained — provenance repair, not gate weakening

Initial workflow **`35233121475`** failed in the owner-identity step before product tests or rendering.

Cause: Materials initially required **current moving UC `main`** to equal the historical UC head recorded by the exact Technical-Art artifact. UC had legitimately advanced after the Technical-Art proof, so this was an invalid provenance dependency, not a Character/material failure.

Repair:

- retain Technical Art's exact recorded UC head as historical evidence;
- stop asserting that unrelated current UC main must remain frozen forever;
- do not modify or consume current UC product state for this receiver.

No material scalar, rendering threshold, motion gate, Technical-Art diagnostic gate or truth boundary was weakened. The failed run remains visible in workflow history.

## Coordination returns

- Character Materials PR #18 exact-result comment: **`5716034762`**;
- Character Technical Art PR #21 receiving handoff: **`5716037418`**.

Art Direction / Visual QA now have a bounded ordinary-shaded target pack that uses the actual imported target as the reference and carries the exact direction-frame proof beside it. Materials transfers no final acceptance authority.

## Reusable learning / propagation boundary

Reusable diagnostic lesson:

> **Once a target-host direction frame is observed directly, stop tuning surfacing against heuristic normal proxies. Freeze the material and produce the ordinary shaded real-target reference under stable views/lights, while carrying the exact direction-frame diagnostic as provenance. Pin historical upstream identities to the evidence that used them; do not make unrelated moving repository heads retroactive prerequisites for old proofs.**

Propagate this as a workflow principle, not as a Character-specific material recipe or a universal Godot normal-transform law.

## Explicit non-claims

This activation does **not** establish:

- that Godot internally implements Rigging's `D*n0` formula;
- linear-gradient versus inverse-transpose implementation identity;
- production normals or tangents;
- tangent-space / normal-map correctness;
- production skin material;
- production UVs or textures;
- subsurface or transmission;
- full-body shaded quality — the exact target GLB is a bounded shoulder-chain receiver, not a full-body Character asset;
- arbitrary-pose/camera correctness;
- target-device Runtime/controller/performance acceptance;
- final Art Direction acceptance;
- independent Visual-QA acceptance;
- source adoption / CANON;
- game/production readiness;
- Materials mastery.

## Four-root gate

- **Truth:** the historical `3/6` / `3/6` Materials result remains preserved for its exact heuristic references. New Technical-Art evidence changes the review reference, not history. The first failed workflow and its provenance mistake remain visible. Sub-LSB linear-vs-inverse ambiguity is not rounded into an implementation claim.
- **Agency / non-domination:** Materials owns only the surfacing/reference-pack receiver. Technical Art keeps transport/frame ownership; Rigging keeps deformation; Animation keeps motion; Runtime keeps device/performance policy; Art Direction and independent QA retain perceptual acceptance; UC remains generic.
- **Continuity:** existing PR #18 was advanced instead of replaced. Exact previous status blob, old heuristic comparisons, owner artifacts, failed first run, final tested head and final artifact remain rollback-addressable.
- **Wisdom before speed:** no skin-color/roughness retune, texture stack, normal map, tangent workaround, rig change or speculative UC feature was added when direct real-target rendering answered the immediate Materials question.

## Next Materials pass

Re-scan the full constellation before acting again.

For Character, the next Materials work is legitimate only after one of two owner gates moves:

1. Technical Art supplies exact tangent / tangent-space transport evidence for this receiver; or
2. Art Direction / independent Visual QA consumes this ordinary-shaded target pack and identifies a concrete bounded surfacing defect that is actually owned by Materials.

Until then, do not add production skin complexity merely by cadence. If neither Character gate moves, choose the strongest fresh Materials-owned gap elsewhere in the constellation.
