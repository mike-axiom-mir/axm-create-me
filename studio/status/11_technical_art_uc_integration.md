# 11 — Technical Art / UC Integration Specialist Status

Date: 2026-09-17
State: **PASS_CHARACTER_REVIEW006_GODOT_TARGET_NORMAL_BUFFER_CONSISTENTLY_NEARER_RIGGING_LINEAR_GRADIENT_REFERENCE / RETAINED_UC_SKIN_POSITION_AND_AFFINE_FRAME_AND_HOST_WINDING_PASS / HOLD_TANGENT_RUNTIME_ART_QA_CANON_PRODUCTION / CHARACTER_TECH_ART_PR_21_DRAFT_MERGEABLE / COORDINATION_ONLY**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/11_technical_art_uc_integration.md`, this status, the active Character specialist constellation, and current `axm-universal-creation` before acting.

`axm-create-me` remains **coordination only**. Product/evidence work remains in `mike-axiom-mir/axm-character-design`. Universal Creation was inspected and exact-pinned but **not modified**.

The four AXM roots remain the internal merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Highest-leverage gap / duplicate-lane scan

The preceding Technical Art activation closed the neutral target-host winding/reference confound on the existing Character Technical Art PR #21. Fresh constellation evidence then exposed the next bounded unoccupied receiver question:

- Materials PR #18 exact head **`9978794604d31aff1f326a6a0dedd2d81dccf31f`** reran the current-motion direction-frame comparison using the host-equivalent reference. Neutral closed, but the deformed shaded target was mixed: pose-recomputed smooth normals were closer in three retained views and frozen-neutral normals were closer in three retained views. Materials correctly retained HOLD rather than turning that mixed shaded result into a normal-transport claim.
- Rigging PR #17 exact head **`4efa5772ee63f62d7a7e5b4ef6688550034b4659`** owns a direct local deformation-gradient oracle `D=(1-w)I+wR(theta)` plus `inverse_transpose(D)`. Exact module blob: **`57c43aea818f293274a94457252bf87e20b98897`**.
- Runtime already owns normal-cache/runtime-cost work. Geometry owns topology. Materials owns shading semantics. Opening another lane or placing Character normal semantics in UC would duplicate authority.

The bounded Technical Art question therefore became:

> **For the exact pinned Character GLB in the exact Godot 4.7.2 receiver, which owner-side direction-frame hypothesis is the imported/skinned target normal buffer actually closest to: Rigging linear gradient, Rigging inverse-transpose, Materials pose-recomputed smooth normal, or frozen neutral?**

## Existing lane advanced

Repository: `mike-axiom-mir/axm-character-design`

Existing single Technical Art PR:

**#21 — `Technical Art: prove review006 skin transport and target-host frame bridge`**

Branch:

`studio/technical-art-character-review006-uc-skin-transport-001`

Exact final tested head:

**`36744749a592e067a119f3349a499d65f25af134`**

Observed PR state after proof:

- **open**;
- **draft**;
- **mergeable = true**.

No duplicate Character Technical Art, Materials, Rigging, Runtime or UC lane was opened.

The original Animation parent remains `9519be55581c009fd800d175677d9b50ee6926e6`. The retained target GLB remains exactly **44,032 B**, SHA-256 **`76acbfca2c50151f4c801bf34910f94eea6bd6d165caeb1e344b8001a2b83a99`**.

## Current UC inspection / no unnecessary centralization

Current UC main pinned by this workflow:

**`41b4d9134e4d2e5f4fadaada2a1d6a56eed92ab0`**.

This UC movement is unrelated to Character direction-frame semantics. The current Technical Art defect/question is entirely at the real target receiver/evidence boundary. Therefore:

- UC product modified: **false**;
- no Character-specific normal rule was added to UC;
- no Godot-specific normal rule was added to UC;
- no Materials smooth-normal policy was added to UC;
- no Rigging deformation semantics were copied into UC.

The workflow consumes the exact external Rigging oracle directly from its owner head in an isolated git worktree.

## Smallest reusable Technical Art repair

Added three bounded evidence pieces on the existing PR #21 branch:

1. `tools/build_review006_target_engine_direction_frame_hypothesis_evidence.py`
   - binds exact Technical Art / Rigging / Materials / UC identities;
   - regenerates the exact retained Character GLB;
   - consumes Rigging's exact owner deformation-gradient rows for `-30° / 0° / +30°`;
   - builds four reference normal hypotheses on the already-proven host-equivalent winding:
     - `linear_gradient = normalize(D * n0)`;
     - `inverse_transpose = normalize(inverse_transpose(D) * n0)`;
     - Materials-style area-weighted `pose_recomputed` smooth normals;
     - `frozen_neutral` normals;
   - fails closed if any exact Rigging side/angle/group row is missing.

2. `lookdev-proof/character_review006_target_engine_direction_frame_hypothesis_observe.gd`
   - imports and animates the exact GLB through real Godot 4.7.2;
   - probes the actual deformed target normal buffer through an unshaded normal-as-color shader;
   - compares it against all four host-equivalent owner hypotheses in front / three-quarter / grazing views at `-30° / 0° / +30°`;
   - retains an unshaded position-coverage control and an inverted-linear-normal negative.

3. `.github/workflows/technical-art-character-review006-target-engine-direction-frame.yml`
   - pins exact external identities;
   - executes the complete Character suite on Python 3.11 and 3.13;
   - constructs the Rigging oracle from its owner head rather than duplicating its logic;
   - deliberately deletes one exact Rigging `L/-30/proximal` row and proves fail-closed rejection;
   - runs pinned Godot 4.7.2 / GL Compatibility / X11 / llvmpipe;
   - retains payload, GLB, oracle, runtime receipt and all comparison PNGs for 60 days.

## Measurement-resolution correction retained, not hidden

The first new workflow execution used an arbitrary per-view winner margin of `1e-5` mean RGB delta. It produced a useful HOLD even though the raw evidence showed the same ordering in every deformed view.

That threshold was not justified by the actual measurement resolution: the two Rigging-derived source hypotheses differ by only:

- `0.00031875328241548484` maximum normal component at `-30°`;
- `0.00031857009575708695` at `+30°`.

After the diagnostic's `n * 0.5 + 0.5` encoding, that separation is below one 8-bit display LSB. A fixed `1e-5` mean-pixel winner margin could therefore erase a repeatable signed ordering even when the target consistently tracks one hypothesis more closely.

The final gate was repaired without inventing an engine rule:

- ties still fail closed;
- the candidate must remain independently close;
- the same signed ordering must hold in **every** deformed view;
- the Rigging-derived candidate must remain at least **100×** closer than the best non-Rigging control;
- the inverted-normal negative must remain clearly visible;
- position and neutral controls must remain green.

The earlier thresholded HOLD remains preserved in workflow/artifact history; it was not rewritten away.

## Exact target-engine direction-frame result

Dedicated workflow:

**`35230401157 — Technical Art Character review006 target-engine direction-frame hypothesis evidence` — SUCCESS**.

Scoped result:

**`PASS_CHARACTER_REVIEW006_GODOT_TARGET_NORMAL_BUFFER_CONSISTENTLY_NEARER_RIGGING_LINEAR_GRADIENT_REFERENCE__INVERSE_TRANSPOSE_SEPARATION_SUB_LSB`**.

Across all six deformed comparisons (`-30°/+30° × front/three-quarter/grazing`):

- linear-gradient is the closest hypothesis in **6 / 6**;
- `linear_gradient_mean < inverse_transpose_mean` in **6 / 6**;
- maximum linear-gradient mean absolute RGB-channel delta: **`2.31602102402468e-05`**;
- minimum separation from the best non-Rigging control (`pose_recomputed` or `frozen_neutral`): **`405.938233730633×`**;
- deformed winner counts: linear **6**, inverse-transpose **0**, pose-recomputed **0**, frozen-neutral **0**, unresolved **0**.

Exact per-view mean RGB deltas for the two Rigging-derived hypotheses:

| pose / view | linear gradient | inverse transpose | signed advantage |
|---|---:|---:|---:|
| `-30°` front | `1.77790792853132e-05` | `1.79418168470398e-05` | linear |
| `-30°` three-quarter | `1.74285707989614e-05` | `1.81761774009966e-05` | linear |
| `-30°` grazing | `1.06055428266598e-05` | `1.15833591938386e-05` | linear |
| `+30°` front | `1.69455811436905e-05` | `1.79777995711784e-05` | linear |
| `+30°` three-quarter | `2.31602102402468e-05` | `2.58200665889361e-05` | linear |
| `+30°` grazing | `7.39633165244429e-06` | `1.16548255026968e-05` | linear |

The same views put the best pose-recomputed/frozen control roughly `0.00566` to `0.02133` mean RGB delta away, hundreds to thousands of times farther than the Rigging linear-gradient reference.

Neutral remains intentionally unresolved among the four hypotheses because all four are identical at zero deformation; the neutral closeness gate is green. Position coverage remains bounded, with at most four XOR pixels at neutral and at most two in the deformed retained views. The inverted-linear negative changes essentially the complete foreground with mean deltas around `0.48–0.51`, proving the observer remains sensitive.

The useful conclusion is intentionally narrower than an implementation claim:

> **For this exact Character specimen, animation sample set and pinned Godot 4.7.2 receiver, the deformed target normal buffer is consistently much closer to Rigging's `D*n0` reference than to pose-recomputed or frozen-neutral normals, and is also consistently but only sub-LSB-separably closer to `D*n0` than to `inverse_transpose(D)*n0`.**

This does **not** claim that Godot internally implements `D*n0`; the normal-as-color receiver cannot justify that stronger statement at this quantization level.

## Retained upstream Technical Art passes

This activation extends rather than replaces prior Technical Art evidence:

- dense skin-position transport remains green through UC across all 321 Animation keys, max position residual **`8.161784431363273e-08 m`** under the retained `5e-6 m` evidence gate;
- Rigging affine-gradient / inverse-transpose palette reconstruction remains green across 30 side/pose/group comparisons, max component delta **`3.6292873706322837e-09`**;
- neutral Godot imported-surface host bridge remains green with exact per-triangle `[a,b,c] -> [a,c,b]` receiver-local ordering, `0 / 1080` reversed-winding mismatches and near-pixel-identical adapted neutral shading;
- those previous results remain rollback-addressable and were not weakened by this new receiver diagnosis.

## Workflow constellation on exact head

At exact Technical Art head **`36744749a592e067a119f3349a499d65f25af134`**, all relevant same-head workflows completed successfully:

- `Character organic form baseline` — **SUCCESS**;
- `Technical Art Character review006 target-host winding bridge` — **SUCCESS**;
- `Technical Art Character review006 target-engine direction-frame hypothesis evidence` — **SUCCESS**;
- `Technical Art Character review006 UC skin transport` — **SUCCESS**.

The dedicated target-engine workflow also ran the complete Character test suite on Python 3.11 and 3.13; Python 3.11 reports **110 tests PASS** before the real Godot receiver proof.

## Retained evidence

Final retained target-engine artifact:

- artifact ID: **`10500419469`**;
- name: `character-review006-target-engine-direction-frame-36744749a592e067a119f3349a499d65f25af134`;
- GitHub-reported archive size: **1,738,515 B**;
- GitHub SHA-256: **`2c8741ceb1e7bdb0866ad3505dc1ec37ea26f59c420980f480a4a48011e7374a`**;
- independently downloaded size: **1,738,515 B**;
- independently rehashed SHA-256: **same exact digest**;
- retained file count: **83**.

The artifact retains:

- exact Technical Art / Rigging / Materials / UC identity pins;
- exact Rigging deformation-gradient oracle;
- hypothesis payload and exact 44,032-byte GLB;
- real Godot runtime receipt;
- position controls;
- target plus four normal hypotheses across all retained samples/views;
- inverted-normal sensitivity negatives;
- the exact evidence builder and receiver code.

## Coordination returns

- Character Technical Art PR #21 result comment: **`5715662350`**;
- Character Materials PR #18 receiver handoff: **`5715665266`**;
- Character Rigging PR #17 continuity handoff: **`5715667582`**.

## Truth boundary / explicit non-claims

Closed narrowly:

- exact Character real-target deformed normal-buffer relationship to four explicit owner hypotheses;
- consistent receiver nearness to Rigging linear-gradient reference across all six retained deformed views;
- strong rejection of pose-recomputed and frozen-neutral as descriptions of this exact target normal buffer;
- continued exact identity / position / host-winding continuity.

Still held:

- this is **not** a universal Godot skinning or normal-transform rule;
- the sub-LSB linear-vs-inverse separation is not strong enough to claim Godot source implementation;
- tangent transport / tangent-space normal-map behavior is not proven;
- production skin/material quality is not proven;
- target-device Runtime/controller/performance acceptance is not proven;
- final Art Direction / independent Visual-QA acceptance is not transferred;
- source adoption / CANON / production readiness remain unclaimed;
- UC remains generic and has no Character-specific normal/tangent policy.

## Four-root gate

- **Truth:** the first fixed-margin classifier produced a HOLD and remains preserved. The final PASS is tied to the actual measurement resolution, six-of-six signed ordering, strong non-Rigging separation, neutral/position controls and a visible negative—not to a preferred story about Godot internals.
- **Agency / non-domination:** Rigging keeps deformation semantics, Materials keeps shading semantics, Runtime keeps device/performance policy, UC stays generic, and Art/QA retain perceptual acceptance. Technical Art only owns the receiver bridge and evidence contract.
- **Continuity:** existing PR #21 was advanced instead of replaced. The exact previous position, affine-frame and host-winding evidence remains retained and addressable; the earlier classifier HOLD remains historical evidence rather than being silently deleted.
- **Wisdom before speed:** no source normal rewrite, material retune, rig retune, Runtime cache change or speculative UC feature was used. The real receiver was observed directly first.

## Next legitimate Technical Art boundary

Re-scan the constellation before acting again.

For Character, do not add another UC feature merely because this receiver prefers the Rigging-gradient reference. The next Technical Art work is legitimate only if a fresh owner lane exposes a concrete remaining transport contract, most likely **tangent / tangent-space direction-frame transport in the exact target receiver**, or if Runtime/Materials consume this evidence and expose a specific cross-repo mismatch. Otherwise leave semantic and acceptance work with the owning lanes.

## Current state

`PASS_CHARACTER_REVIEW006_GODOT_TARGET_NORMAL_BUFFER_CONSISTENTLY_NEARER_RIGGING_LINEAR_GRADIENT_REFERENCE__INVERSE_TRANSPOSE_SEPARATION_SUB_LSB / TA_PR21_HEAD_36744749_DRAFT_MERGEABLE / UC_41B4D913_UNCHANGED / RIGGING_4EFA5772 / MATERIALS_99787946 / SIX_OF_SIX_LINEAR_NEAREST / MAX_LINEAR_MEAN_2.316021E-05 / MIN_NONRIG_SEPARATION_405.938X / SOURCE_LINEAR_VS_INVERSE_MAX_3.187533E-04 / POSITION_AND_NEUTRAL_CONTROLS_GREEN / INVERTED_NEGATIVE_VISIBLE / WORKFLOW_35230401157_SUCCESS / ALL_RELEVANT_SAME_HEAD_WORKFLOWS_SUCCESS / ARTIFACT_10500419469_SHA_2C8741CE_1738515B_83_FILES / RETAINED_UC_POSITION_AFFINE_AND_HOST_WINDING_PASS / HOLD_TANGENT_RUNTIME_ART_QA_CANON_PRODUCTION / COORDINATION_ONLY`
