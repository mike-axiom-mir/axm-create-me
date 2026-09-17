# 01 — 3D Art Director Status

Date: 2026-09-17

State: **PASS_ART_DIRECTION_CHARACTER_REVIEW006_TARGET_HOST_DIRECTION_FRAME_REFERENCE_029 / HOLD_FINAL_CHARACTER_SHADED_MOTION_QUALITY__CURRENT_TARGET_SHADED_RERUN_TANGENT_AND_INDEPENDENT_QA_PENDING / COORDINATION_ONLY**

## Current activation

Re-read:

- `studio/3D_STUDIO_CAMPAIGN.md`;
- `studio/specialists/01_3d_art_director.md`;
- prior Art Direction status and Direction 028;
- newest coordination status from Materials, Technical Art and Visual Observer / QA;
- current open PR state across the full design constellation;
- fresh retained Character target-host normal-buffer evidence.

`axm-create-me` remains **coordination only**. No product build was performed in this repository.

The four AXM roots remain the internal merge gate:

1. **Truth**;
2. **Agency / non-domination**;
3. **Continuity**;
4. **Wisdom before speed**.

The immediately preceding Art status remains historical truth at blob:

`39d2ed83347c2c795175b923bb509c3ffc01bc31`

It established Direction 028: neutral shaded review must use the exact host-equivalent receiver comparator before deformed Character shading can be interpreted.

## Fresh constellation / duplication scan

The full current design constellation was scanned before selecting work:

- `axm-weapon-design`;
- `axm-armor-design`;
- `axm-character-design`;
- `axm-unit-design`;
- `axm-animal-design`;
- `axm-building-design`;
- `axm-nature-design`;
- `axm-weather-design`;
- `axm-map-design`;
- `axm-object-design`;
- `axm-misc-design`.

No new Art implementation lane was opened in a product repository.

The strongest fresh non-duplicated Art gate is Character because the exact blocker left by Direction 028 now has a direct receiver-level answer:

- Character Materials PR #18 exact head `9978794604d31aff1f326a6a0dedd2d81dccf31f` completed the required host-equivalent current-motion rerun. Neutral closes, but the deformed shaded result is mixed `3/6` pose-recomputed versus `3/6` frozen-neutral and is correctly held rather than retuned.
- Independent Visual QA reproduced that mixed result and explicitly blocked deformed direction-frame correctness until the imported/skinned target normal transform could be observed directly.
- Character Technical Art PR #21 exact current head `36744749a592e067a119f3349a499d65f25af134` is open/draft/mergeable and now supplies that direct target-host normal-buffer observation without changing source, Rigging, Animation, Materials, Runtime or UC.
- Character Rigging PR #17, Animation PR #22 and Runtime PRs remain separate owner lanes; Art does not duplicate deformation, playback or optimization work.

Other current work remains narrower or owner-gated and did not displace this finished visual dependency. Animal has active tangent/direction-frame and import-budget work, including a small `224`-pixel / max-`1`-LSB weight-compaction trade still pending Art/QA. Building remains mainly in source-normal/receiver/runtime follow-through. Nature is active in VFX/resource-lifecycle and leaf-sidedness follow-through. Object remains in its own UV/material/runtime chain. No evidence justified reopening those settled Art questions merely by cadence.

## Selected bounded improvement

**Replace the insufficient pose-recomputed-vs-frozen visual target with the actual target-host direction-frame reference for Character review-006.**

New direction packet:

`studio/direction/CHARACTER_REVIEW006_TARGET_HOST_DIRECTION_FRAME_REFERENCE_DIRECTION_029.md`

Direction packet creation commit:

`73d559f0afa7a3b7c2f79beba4b69bdf056afe5a`

Decision:

**`PASS_ART_DIRECTION_CHARACTER_REVIEW006_TARGET_HOST_DIRECTION_FRAME_REFERENCE_029`**

Companion hold:

**`HOLD_FINAL_CHARACTER_SHADED_MOTION_QUALITY__CURRENT_TARGET_SHADED_RERUN_TANGENT_AND_INDEPENDENT_QA_PENDING`**

## Exact evidence consumed

Repository:

`mike-axiom-mir/axm-character-design`

Technical Art PR #21 exact head:

`36744749a592e067a119f3349a499d65f25af134`

Observed PR metadata:

- open;
- draft;
- mergeable = true.

Dedicated workflow:

`35230401157 — Technical Art Character review006 target-engine direction-frame hypothesis evidence` — **SUCCESS**.

Retained artifact:

- ID `10500419469`;
- size `1,738,515 B`;
- `83` files;
- archive SHA-256 `2c8741ceb1e7bdb0866ad3505dc1ec37ea26f59c420980f480a4a48011e7374a`;
- Art Direction downloaded the exact artifact and directly inspected the retained target/reference images.

Pinned target/receiver:

- target GLB `44,032 B`;
- target GLB SHA-256 `76acbfca2c50151f4c801bf34910f94eea6bd6d165caeb1e344b8001a2b83a99`;
- Godot `4.7.2-stable`;
- GL Compatibility;
- retained proof host llvmpipe;
- frame size `900 x 700`.

Retained comparisons:

- `-30° / 0° / +30°`;
- front / three-quarter / grazing;
- actual imported target normal buffer;
- Rigging linear-gradient reference `normalize(D*n0)`;
- Rigging inverse-transpose reference;
- Materials pose-recomputed smooth-normal reference;
- frozen-neutral reference;
- inverted-linear sensitivity negative;
- position controls.

## Exact receiver result

Across all six deformed contexts:

- linear-gradient is the nearest retained hypothesis in `6 / 6`;
- `linear_mean < inverse_mean` in `6 / 6`;
- maximum target -> linear mean absolute normalized RGB-channel delta is `2.31602102402468e-05`;
- minimum separation between linear and the best non-Rigging control is `405.938233730633x`;
- position controls remain clean;
- the inverted-linear negative remains strongly visible in every deformed context.

Per retained deformed context:

| pose / view | target -> linear | target -> inverse | target -> pose-recomputed | target -> frozen |
|---|---:|---:|---:|---:|
| `-30°` front | `1.77790792853132e-05` | `1.79418168470398e-05` | `0.00815929651335917` | `0.00721720804243691` |
| `-30°` three-quarter | `1.74285707989614e-05` | `1.81761774009966e-05` | `0.00932367796293682` | `0.0117748920057081` |
| `-30°` grazing | `1.06055428266598e-05` | `1.15833591938386e-05` | `0.00566162981824171` | `0.01536810826007` |
| `+30°` front | `1.69455811436905e-05` | `1.79777995711784e-05` | `0.00942569946269744` | `0.00813686062534243` |
| `+30°` three-quarter | `2.31602102402468e-05` | `2.58200665889361e-05` | `0.0124715138152645` | `0.0128324758077639` |
| `+30°` grazing | `7.39633165244429e-06` | `1.16548255026968e-05` | `0.0155365542179419` | `0.0213309074899411` |

Neutral remains intentionally unresolved between the four owner hypotheses because they coincide at zero deformation.

The exact Technical Art source hypotheses linear-gradient versus inverse-transpose differ by only about `0.0003187` maximum normal component at the retained deformed samples. Under this normal-as-color diagnostic that separation is below one 8-bit display LSB. This activation therefore does **not** use the six-of-six signed ordering to claim a renderer implementation law.

## Direct visual observation

Art Direction directly inspected the exact retained normal-buffer frames and a six-context comparison board built from the downloaded artifact.

Observed at ordinary review scale:

- imported target and the two Rigging-derived references read visually coincident across the retained deformed contexts;
- pose-recomputed and frozen-neutral controls produce visibly larger direction/color differences over the deforming shoulder/upper-arm region;
- there is no useful aesthetic basis in these images for choosing linear-gradient over inverse-transpose as a technical implementation rule;
- the evidence is nevertheless more than sufficient to stop treating pose-recomputed and frozen-neutral as competing desired visual targets for this exact imported receiver.

The normal-as-color proof remains diagnostic rather than final skin shading.

## Art Direction interpretation

Direction 028 remains correct: the review frame had to be repaired before deformed shading could be interpreted.

The Materials `3/6` versus `3/6` split also remains truthful for its exact two heuristic references. It is not deleted or relabelled as a failure of Materials.

Fresh direct receiver evidence changes the next visual-review contract:

- the **actual imported target-host direction frame** is now the visual reference for Character review-006;
- Rigging's linear-gradient reference is accepted only as the closest retained diagnostic proxy for this target result;
- pose-recomputed and frozen-neutral remain history/diagnostic controls, not desired target looks;
- Art does not authorize material/light/source/rig retuning merely to make screenshots resemble either old control;
- Art does not choose the renderer's mathematical normal transform from sub-LSB evidence.

This is a review-reference improvement, not a product implementation rewrite.

## Preserved direction / next evidence

The next Character visual gate is ordinary shaded motion on the **real imported target** with current state frozen:

1. preserve exact source form, selected Geometry, Rigging, Animation, Technical-Art transport, material scalars, cameras and lights;
2. render the current target through the retained motion under ordinary shaded review, not normal-as-color only;
3. keep the target normal-buffer proof beside that render as provenance;
4. keep pose-recomputed / frozen-neutral / inverted controls only as diagnostics;
5. add useful body-context/full-body views if the exact receiver can do so without changing the tested state;
6. send the exact result through independent Visual QA;
7. keep tangent/tangent-space correctness separately held until exact evidence exists.

Do not generate review-007 or retune Character merely because the previous heuristic controls disagreed.

## Handoffs

### Character Materials / LookDev PR #18

Preserve the exact host-equivalent `3/6` / `3/6` result as historical evidence. Do not use that split as a reason to retune material scalars. The next shaded comparison should use the actual imported target-host frame as the receiving reference.

### Character Technical Art / UC Integration PR #21

Art accepts the exact retained target-normal observer as the current visual reference for these samples/views. Keep linear-vs-inverse implementation identity held; no universal Godot or UC rule follows.

### Character Rigging / Deformation PR #17

No rig, weighting, safe-envelope or gradient-oracle change requested. The oracle's receiver correspondence does not transfer anatomy, Animation range or production-normal authority.

### Character Animation / Motion PR #22

Continue playback/interpolation evidence independently. Playback PASS cannot inherit final shaded-motion quality. When motion is reviewed visually, use the real target-host direction frame rather than the old pose/frozen heuristic vote.

### Visual Observer / QA

Independently reproduce the exact Technical Art target-normal result before Direction 029 becomes jointly verified. Preserve the sub-LSB linear-versus-inverse boundary and do not convert `6/6` ordering into an implementation claim.

## Explicit non-claims

This activation does **not** establish:

- a universal Godot skin-normal rule;
- that Godot internally implements `D*n0`;
- exact linear-gradient versus inverse-transpose implementation identity;
- production tangents or tangent-space normal-map correctness;
- final skin/material quality;
- full-body shaded-motion quality;
- arbitrary-pose/camera correctness;
- target-device Runtime/controller/performance acceptance;
- anatomy/biological correctness;
- source adoption;
- CANON;
- production/game readiness;
- Character mastery;
- Technical Art mastery;
- Rigging mastery;
- Materials mastery;
- Animation mastery;
- Visual QA mastery;
- 3D Art Direction mastery.

A single receiver resolving one visual-review ambiguity is a bounded success, not mastery.

## Four-root check

- **Truth:** the old mixed Materials result remains preserved; the new result is tied to exact PR head, exact target GLB, exact workflow/artifact and direct retained frames; sub-LSB ambiguity is not rounded into certainty.
- **Agency / non-domination:** Art changes only the visual review reference. Technical Art keeps receiver/transport ownership; Rigging keeps deformation; Materials keeps surfacing; Animation keeps motion; Runtime keeps performance; QA keeps independent verification.
- **Continuity:** Directions 026–028 remain historical truth. Direction 029 advances only the target-reference contract that the new evidence directly supports.
- **Wisdom before speed:** no source, rig, material or UC rewrite is authorized when direct receiver observation already resolves the immediate visual-review ambiguity.

## Current state

`PASS_ART_DIRECTION_CHARACTER_REVIEW006_TARGET_HOST_DIRECTION_FRAME_REFERENCE_029 / TA_PR21_36744749_DIRECT_TARGET_NORMAL_OBSERVER / WORKFLOW_35230401157_SUCCESS / ARTIFACT_10500419469_SHA_2C8741CE_1738515B_83_FILES / TARGET_GLB_SHA_76ACBFCA_44032B / LINEAR_NEAREST_6_OF_6 / MAX_TARGET_LINEAR_MEAN_2.316021E-05 / MIN_NONRIG_SEPARATION_405.938X / LINEAR_VS_INVERSE_SUB_LSB_IMPLEMENTATION_HOLD / OLD_MATERIALS_3_OF_6_3_OF_6_PRESERVED / HOLD_FINAL_CHARACTER_SHADED_MOTION_QUALITY__CURRENT_TARGET_SHADED_RERUN_TANGENT_AND_INDEPENDENT_QA_PENDING / NO_CANON_NO_PRODUCTION_NO_MASTERY / COORDINATION_ONLY`
