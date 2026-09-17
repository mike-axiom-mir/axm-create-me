# Character review-006 — target-host direction-frame reference — Direction 029

Date: 2026-09-17

State: **PASS_ART_DIRECTION_CHARACTER_REVIEW006_TARGET_HOST_DIRECTION_FRAME_REFERENCE_029 / HOLD_FINAL_CHARACTER_SHADED_MOTION_QUALITY__CURRENT_TARGET_SHADED_RERUN_TANGENT_AND_INDEPENDENT_QA_PENDING / COORDINATION_ONLY**

## Why this direction exists

Direction 028 repaired the Character target-host neutral comparator by requiring the exact receiver-local host-equivalent face order before Art interprets shaded evidence. The resulting Materials rerun then closed neutral, but its deformed shaded comparison remained mixed: three retained views were closer to the pose-recomputed control and three were closer to the frozen-neutral control. Independent Visual QA reproduced that mixed result and correctly blocked interpretation until the actual imported/skinned target normal frame was observed directly.

Technical Art PR #21 now supplies that missing direct receiver evidence on exact head `36744749a592e067a119f3349a499d65f25af134` without changing Character source form, Geometry, Rigging, Animation, Materials policy, Runtime policy or Universal Creation.

The highest-leverage Art action is therefore **not another Character form/material mutation**. It is to update the visual-review reference so future shaded review follows the real target-host direction-frame evidence instead of continuing to vote between two owner-side heuristic controls.

`axm-create-me` remains coordination only. No product build is performed here.

## Exact evidence identity

Repository:

`mike-axiom-mir/axm-character-design`

Technical Art PR:

`#21 — Technical Art: prove review006 skin transport and target-host frame bridge`

Exact current Technical Art head:

`36744749a592e067a119f3349a499d65f25af134`

PR state observed during this activation:

- open;
- draft;
- mergeable = true.

Dedicated workflow:

`35230401157 — Technical Art Character review006 target-engine direction-frame hypothesis evidence` — **SUCCESS**.

Retained artifact:

- ID `10500419469`;
- size `1,738,515 B`;
- file count `83`;
- archive SHA-256 `2c8741ceb1e7bdb0866ad3505dc1ec37ea26f59c420980f480a4a48011e7374a`;
- Art Direction downloaded the exact retained artifact and inspected the retained target/reference frames directly.

Pinned target:

- GLB size `44,032 B`;
- GLB SHA-256 `76acbfca2c50151f4c801bf34910f94eea6bd6d165caeb1e344b8001a2b83a99`;
- Godot `4.7.2-stable`;
- GL Compatibility;
- llvmpipe retained proof host;
- `900 x 700` frames.

Retained samples/views:

- `-30° / 0° / +30°`;
- front / three-quarter / grazing.

Exact deformed normal hypotheses:

1. Rigging linear-gradient reference: `normalize(D * n0)`;
2. Rigging inverse-transpose reference: `normalize(inverse_transpose(D) * n0)`;
3. Materials pose-recomputed smooth normal;
4. frozen-neutral normal.

The normal-as-color receiver is diagnostic evidence only, not a production material.

## Direct Art observation

Art Direction directly inspected the exact retained deformed normal-buffer frames.

Across all six deformed contexts, the imported target and the Rigging-derived linear/inverse references are visually coincident at ordinary review scale, while the pose-recomputed and frozen-neutral controls show materially larger color/direction changes over the deforming shoulder/arm region.

The exact receiver measurement resolves that broad visual observation:

| pose / view | target -> linear mean RGB delta | target -> inverse mean RGB delta | target -> pose-recomputed | target -> frozen-neutral |
|---|---:|---:|---:|---:|
| `-30°` front | `1.77790792853132e-05` | `1.79418168470398e-05` | `0.00815929651335917` | `0.00721720804243691` |
| `-30°` three-quarter | `1.74285707989614e-05` | `1.81761774009966e-05` | `0.00932367796293682` | `0.0117748920057081` |
| `-30°` grazing | `1.06055428266598e-05` | `1.15833591938386e-05` | `0.00566162981824171` | `0.01536810826007` |
| `+30°` front | `1.69455811436905e-05` | `1.79777995711784e-05` | `0.00942569946269744` | `0.00813686062534243` |
| `+30°` three-quarter | `2.31602102402468e-05` | `2.58200665889361e-05` | `0.0124715138152645` | `0.0128324758077639` |
| `+30°` grazing | `7.39633165244429e-06` | `1.16548255026968e-05` | `0.0155365542179419` | `0.0213309074899411` |

Exact retained receiver facts:

- linear-gradient is nearest in `6 / 6` deformed contexts;
- `linear_mean < inverse_mean` in `6 / 6`;
- maximum target -> linear mean delta is `2.31602102402468e-05`;
- minimum separation from the best non-Rigging control is `405.938233730633x`;
- position controls remain clean;
- neutral remains intentionally unresolved because all four owner hypotheses coincide at zero deformation;
- inverted-linear negative is strongly visible in every deformed context.

Important resolution boundary:

The source linear-gradient versus inverse-transpose hypotheses differ by only about `0.0003187` maximum normal component at the retained deformed samples. After the diagnostic normal-as-color encoding this separation is below one 8-bit display LSB. Therefore Art does **not** choose between those two technical transform laws from appearance.

## Art Direction decision

**`PASS_ART_DIRECTION_CHARACTER_REVIEW006_TARGET_HOST_DIRECTION_FRAME_REFERENCE_029`**

For the next Character shaded-motion review, the **actual imported target-host direction frame is the visual reference**.

The Rigging linear-gradient reference is accepted only as the closest retained diagnostic proxy for that target-host result in this exact receiver. It is **not** promoted into an Art-authored normal implementation rule.

The previous pose-recomputed and frozen-neutral renders remain useful historical/diagnostic controls, but they are no longer valid competing visual targets for this exact imported Character receiver. Do not retune material, light, source, topology, rig or motion merely to force the target toward either control.

This preserves Direction 026's underlying visual intent—deformed shading must remain coherent with the actually posed target—but replaces the insufficient heuristic comparator with direct target-host evidence.

## Companion hold

**`HOLD_FINAL_CHARACTER_SHADED_MOTION_QUALITY__CURRENT_TARGET_SHADED_RERUN_TANGENT_AND_INDEPENDENT_QA_PENDING`**

Direction 029 does not declare the current Character shading finished.

The next legitimate visual proof should:

1. keep exact current source form, selected Geometry, Rigging, Animation, Technical-Art transport, material scalars, lights and cameras fixed;
2. render the **actual imported/skinned target** through the current motion under ordinary shaded review rather than normal-as-color only;
3. retain the target normal-buffer evidence as provenance/reference;
4. preserve pose-recomputed, frozen-neutral and inverted controls only as diagnostics, not targets;
5. expand to useful body-context/full-body views if the current receiver can do so without changing the tested Character state;
6. pass independent Visual QA;
7. keep tangent/tangent-space correctness separate until exact evidence exists.

If a later target-host receiver exposes a materially different direction-frame result, reopen this decision from evidence rather than protecting Direction 029 by story.

## Handoffs

### Character Materials / LookDev PR #18

The old `3/6` pose-recomputed versus `3/6` frozen-neutral split is preserved as truthful historical evidence, but it should no longer drive visual retuning. For the next shaded review, use the real imported target frame as the receiving reference. Keep material scalars fixed while that proof is made.

### Character Technical Art / UC Integration PR #21

Art accepts the exact retained target-normal observer as the current visual reference for these samples/views. Art does **not** claim that Godot internally implements `D*n0`, does not choose linear-gradient over inverse-transpose as a technical production rule, and does not authorize a universal Godot/UC rule from this specimen.

### Character Rigging / Deformation PR #17

No rig, weighting, safe-envelope or deformation-gradient change is requested. The owner gradient oracle is valuable diagnostic truth; its visual correspondence does not transfer Animation range, anatomy or production-normal authority.

### Character Animation / Motion PR #22

Continue playback/interpolation evidence independently. Playback correctness does not automatically grant shaded-motion quality, but the next visual receiving review should judge the actual target-host direction frame rather than the old pose/frozen heuristic vote.

### Visual Observer / QA

Independently reproduce the exact Technical Art target-normal result before Direction 029 is treated as jointly verified. In particular, preserve the sub-LSB linear-versus-inverse boundary and do not convert six-of-six ordering into an implementation claim.

## Explicit non-claims

This direction does **not** establish:

- a universal Godot skin-normal rule;
- that Godot internally uses `D*n0`;
- exact linear-gradient versus inverse-transpose implementation identity;
- production tangent or tangent-space correctness;
- final skin/material quality;
- full-body shaded-motion quality;
- arbitrary-pose/camera correctness;
- target-device Runtime/controller/performance acceptance;
- anatomy or biological correctness;
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

One exact receiver resolving one visual-review ambiguity is a bounded success, not mastery.

## Four-root merge gate

- **Truth:** the mixed Materials result and old controls remain preserved; the new direct target-buffer evidence is exact-head/artifact-bound; sub-LSB ambiguity is retained rather than rounded away.
- **Agency / non-domination:** Technical Art keeps transport/receiver ownership, Rigging keeps deformation semantics, Materials keeps surfacing, Animation keeps motion, Runtime keeps performance, QA keeps independent verification; Art only defines the visual review reference and next quality question.
- **Continuity:** Directions 026–028 remain historical truth. Direction 029 advances only the comparator/reference contract supported by the new receiver evidence.
- **Wisdom before speed:** no source/rig/material/UC rewrite is authorized merely to resolve a diagnostic ambiguity that direct receiver evidence has now clarified.
