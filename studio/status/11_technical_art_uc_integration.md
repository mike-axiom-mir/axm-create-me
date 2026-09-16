# 11 — Technical Art / UC Integration Specialist Status

Date: 2026-09-17
State: **PASS_EXACT_MIRROR_RIGHT_FORELIMB_SKINNED_AUTHORED_KEYS_TO_CURRENT_UC_CODEC / UC_GENERIC_RIGGED_CODEC_REUSED_UNCHANGED / EXPLICIT_HANDEDNESS_AWARE_AXIAL_AXIS_CONTRACT / ANIMATION_OWNER_REBIND_CONSUMED / RIGGING_WEIGHT_AUTHORITY_RETAINED / HOLD_WHOLE_ANIMAL_FOUR_JOINT_TRANSPORT / HOLD_CONTINUOUS_INTERPOLATION_EQUIVALENCE / HOLD_FINAL_NORMAL_TANGENT_VISUAL_ACCEPTANCE / HOLD_ENGINE_IMPORT_PLAYBACK / HOLD_RUNTIME_CONTROLLER_GAMEPLAY / HOLD_UC_PROMOTION / ANIMAL PR #3 DRAFT**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/11_technical_art_uc_integration.md`, current specialist status, newest Animal Geometry / Rigging / Animation evidence, current design-constellation Technical Art lanes and current `axm-universal-creation` before changing implementation evidence.

`axm-create-me` remains **coordination only**. Product code and retained execution evidence remain in `mike-axiom-mir/axm-animal-design`. The four AXM roots remain the internal merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

Earlier Animal -> UC static-surface, exact-mirror topology and runtime-clock proofs remain historical truth. This activation does not relabel them.

## Fresh constellation / duplication scan

The prior Technical Art hold was no longer merely hypothetical. Animation PR #5 now owns an exact current successor result at:

**`1a8c929ce4372c4b1b1f29e9ac4cadd0cc26ac48`**

with gate:

**`PASS_BILATERAL_EXACT_MIRROR_SURFACE_41_SAMPLE_MOTION_REBIND`**

That owner evidence consumes:

- Geometry exact-mirror source head `bdbb51303bd1b96866b06a71730ccc328bf4f2f6`;
- exact RIGHT candidate `front-right-connected-chain-elbow-source-successor-003-mirror-surface-topology-001`;
- exact RIGHT candidate SHA-256 `086ffe6f48af0cc3506871a4754b7395ba4c1fa3155eb4f420854a37e92181db`;
- Rigging exact-mirror head `4acd9286140dd008f2a4f01ff513912497313e4f`;
- rig-plan donor `04760112deb81a8d145226fe7ee02923107c9916`;
- exact rig-plan SHA-256 `b1f39ef8cd127edf9288b89ebd1f1fc14e6a3ceb8b0db58fa0ba9b12bc892aa8`;
- weighting profile `smoothstep-v0`;
- exact clip SHA-256 `407903cbc5fe8803fc6a749e128b7736ebf139b414e61f77d9bbd32fc46f427b`;
- `1.0 s / 40 Hz / 41 endpoint-inclusive authored samples`.

The open design-constellation scan found no competing Technical Art / UC rigged-animation lane. Existing Animal Technical Art PR #3 therefore remains the correct implementation home. No duplicate PR was opened.

## Selected bounded gap

Question:

> Can one exact current Animal deformation chain — the RIGHT selected-003 exact-mirror forelimb, its already-owned smoothstep elbow weights, and Animation's already-authored 41 key poses — cross a real skinned glTF boundary and be accepted by current UC's generic rigged-glTF verifier without moving Animal rigging or motion semantics into UC?

The scope is deliberately one deforming surface and one articulated child joint, represented as a minimal two-joint glTF skin. It is not a whole-animal exporter.

## Current UC inspected

Current `axm-universal-creation` proof pin:

**`ae76436052a13e2d9214ba527c9b84e1cffc622c`**

Consumed generic module:

`capabilities/platform-hands/shared/asset-hands/rigged-gltf-codec.js`

Exact Git blob:

**`b1f2e68bb6c6800af5496decc95a8044d141edc9`**

The existing generic codec already validates glTF skins with `JOINTS_0`, `WEIGHTS_0`, inverse-bind matrices, rotation animation channels, joint-index bounds, normalized weight sums and sampled CPU skin deformation. No open competing UC rigged-animation PR was found.

**No UC product code changed.** Animal topology, landmarks, weighting, timing and motion policy remain outside UC.

## Existing Technical Art lane advanced

Repository: `mike-axiom-mir/axm-animal-design`

Existing draft PR: **#3 — `Technical Art: prove explicit Animal surfaces -> UC GLB bridge`**

Branch: `studio/uc-surface-bridge-001`

Exact tested Technical Art head:

**`454d259cce81e5efd9874b4e764770c71e9ea5a8`**

PR remains open / draft / mergeable. No duplicate Technical Art lane was created.

Technical Art added only receiver/integration tooling:

- `src/axm_animal_design/uc_rigged_animation_bridge.py`;
- `tests/test_uc_rigged_animation_bridge.py`;
- `tools/build_uc_rigged_animation_bridge_evidence.py`;
- `.github/workflows/uc-rigged-animation-bridge.yml`.

The owner Animation evidence is rebuilt from its exact head inside the workflow and retained beside the Technical Art receipt. Technical Art does not copy an unverified pose table into its own authority.

## Smallest reusable contract

The transport contract is explicit and intentionally narrow:

1. require exact Geometry, Rigging, rig-donor, Animation and UC identities;
2. rebuild Animation's exact 41 owner samples through the owner tool first;
3. preserve the exact 42-vertex / 80-triangle RIGHT surface;
4. re-express only Rigging's existing `smoothstep-v0` RIGHT-elbow deformation as glTF `JOINTS_0` / `WEIGHTS_0`;
5. encode a minimal two-joint skin: identity parent plus existing `front-elbow-R` child at the source-owned elbow pivot;
6. preserve the established Animal -> UC component map `[x_forward,y_left,z_up] -> [-y_left,z_up,x_forward]` and winding reversal;
7. treat rotation axes correctly as **axial vectors** across the determinant `-1` basis change: `axis_uc = det(M) * M * axis_source`; source `+Y` therefore becomes UC `+X`, rather than the ordinary-vector `-X` result;
8. encode the 41 already-authored elbow keys as one glTF rotation channel;
9. compare every encoded authored-key pose back to Animation's exact owner positions before accepting UC inspection;
10. ask current UC's existing generic rigged codec to inspect the emitted GLB;
11. fail closed on source-rest drift, receiver-weight drift and UC codec-blob drift.

Generated normals remain **transport-only**. The glTF sampler is explicitly `LINEAR`; this activation does not claim continuous raised-cosine equivalence between authored keys.

## First run — retained failure and repair

First dedicated attempt:

**`35159518011 — UC rigged animation bridge evidence` — FAILURE**

The exact dependency checkout, Technical Art tests and owner Animation rebuild all passed. The receiving evidence builder then failed because it imported a newer Animal helper module (`connected_deformation.digest`) that does not exist on Technical Art PR #3's historical base.

The failed run remains evidence. The repair did not add the newer domain implementation to Technical Art and did not weaken any identity check. Instead, the receiver computes the already-defined canonical JSON SHA-256 locally for the donor rig-plan gate. This keeps the dependency contract small and prevents accidental source-implementation centralization.

## Exact successful result

Scoped result:

**`PASS_ANIMAL_EXACT_MIRROR_RIGHT_FORELIMB_SKINNED_41_KEY_GLB_TO_CURRENT_UC_CODEC`**

Dedicated workflow:

**`35159635802 — UC rigged animation bridge evidence` — SUCCESS**

Same-head companion workflows also completed successfully:

- `35159635767 — Tests`;
- `35159635760 — Weighting refinement evidence`;
- `35159635791 — UC bilateral source-successor surface bridge evidence`;
- `35159635792 — UC surface bridge evidence`;
- `35159635822 — UC bilateral mirror-surface topology bridge evidence`.

Exact retained findings:

- Technical Art head: `454d259cce81e5efd9874b4e764770c71e9ea5a8`;
- Geometry head: `bdbb51303bd1b96866b06a71730ccc328bf4f2f6`;
- RIGHT candidate SHA-256: `086ffe6f48af0cc3506871a4754b7395ba4c1fa3155eb4f420854a37e92181db`;
- Rigging head: `4acd9286140dd008f2a4f01ff513912497313e4f`;
- rig donor: `04760112deb81a8d145226fe7ee02923107c9916`;
- weighting: `smoothstep-v0`;
- Animation head: `1a8c929ce4372c4b1b1f29e9ac4cadd0cc26ac48`;
- authored duration / samples: `1.0 s / 41 keys`;
- source geometry: `42 vertices / 80 triangles`;
- exported skin joints: `2`;
- animation channels: `1`;
- source rotation axis: `[0,+1,0]`;
- UC axial rotation axis: `[+1,0,0]`;
- maximum all-key pose residual versus Animation owner frames: **`8.007841300544171e-08 m`**;
- required pose tolerance: **`1e-06 m`**;
- worst authored sample index: `8`;
- GLB bytes: `6,488`;
- GLB SHA-256: **`170ae70d8588c80a823acbb6ff766b1caa2b4616bcfe48bd3681e47d71052f81`**;
- current UC head: `ae76436052a13e2d9214ba527c9b84e1cffc622c`;
- exact UC codec blob: `b1f2e68bb6c6800af5496decc95a8044d141edc9`;
- UC product modified: `false`.

Current UC inspection reports:

- `pass=true`;
- `42` vertices / `80` triangles;
- skin joints `2`;
- joint indices PASS;
- weight sums PASS;
- animation `1` channel / `41` frames / `1.0 s`;
- CPU deformation observer `pass=true` and `changed=true`.

## Fail-closed controls

Three receiver controls are retained:

- **+1 mm neutral-source mutation:** rejected because exact endpoint-neutral closure no longer matches;
- **receiver weight drift:** maximum owner-frame residual becomes `0.006678126414991851 m`, far above the `1e-06 m` gate, and is rejected;
- **UC codec drift:** exact Git blob must remain `b1f2e68bb6c6800af5496decc95a8044d141edc9` or the proof fails.

## Retained artifact

Artifact:

- ID: **`10472785685`**;
- name: `animal-current-uc-rigged-animation-454d259cce81e5efd9874b4e764770c71e9ea5a8`;
- size: **`35,955 B`**;
- GitHub archive SHA-256: **`e58ffbb6d9d73df17dbde1f94c3619977b64fca718ec354c306a7c0f3ba35fad`**.

The archive was downloaded and independently rehashed to the same SHA-256. It retains the emitted GLB, current-UC inspection, Technical Art receipt, exact Technical Art / Animation / Rigging / UC identities and the owner Animation receipt + all 41 owner frames.

## Handoffs / authority boundaries

Evidence handoffs recorded:

- Technical Art PR #3 comment `5705684316`;
- Animation PR #5 comment `5705685308`;
- Rigging PR #15 comment `5705687668`.

Authority remains separated:

- Geometry owns the exact-mirror positions/indices and candidate identity;
- Rigging owns the joint plan and `smoothstep-v0` weighting semantics;
- Animation owns the authored clip/timing/sample positions;
- Technical Art owns only cross-repo coordinate/skin/key transport and receiving evidence;
- UC owns the generic glTF receiving/inspection codec;
- Materials / Visual QA / Art Direction still own final normal/tangent/shaded visual acceptance.

No Profession Fabric extraction is justified from this single Animal transport proof. No Animal-specific UC promotion is justified.

## Truth boundary / explicit non-claims

This activation proves only that one exact source-owned Animal RIGHT forelimb can be encoded as a two-joint glTF skin with the existing exact smoothstep weights, that all 41 already-authored elbow-key poses reproduce the Animation-owner sampled positions within the retained numeric gate after the explicit handedness-aware transform, and that current UC's unchanged generic rigged-glTF codec accepts the resulting skin, weights, joint indices, animation channel and sampled CPU deformation.

It does **not** prove:

- whole-animal or four-joint skeleton/skin export;
- hind-leg animation transport;
- continuous raised-cosine, C1 or C2 equivalence between authored keys;
- final authored normals, tangents, UVs, textures or shaded appearance;
- target-engine import/playback;
- runtime controller or state-machine behavior;
- collision, physics, gameplay or target-device performance;
- UC promotion of Animal-specific semantics;
- Profession Fabric promotion;
- CANON, merge authority, production/game readiness or Technical Art mastery.

## Four-root gate

- **Truth:** the first failed evidence run is retained; the repaired run preserves exact producer heads, candidate/rig/clip hashes, every owner sample and exact UC codec identity. Authored-key equality is separated from continuous interpolation claims.
- **Agency / non-domination:** Geometry keeps topology authority, Rigging keeps weighting authority, Animation keeps motion authority, UC keeps the generic receiving contract, and Technical Art does not silently rewrite any domain owner.
- **Continuity:** previous static and clock proofs remain distinct rollback/evidence points; this activation adds the first exact skinned authored-key transport without relabelling older evidence.
- **Wisdom before speed:** the smallest receiver contract reuses the existing UC codec rather than adding Animal policy to UC or building a premature whole-animal exporter.

## Current state

`PASS_EXACT_MIRROR_RIGHT_FORELIMB_SKINNED_AUTHORED_KEYS_TO_CURRENT_UC_CODEC / 42V_80T / TWO_JOINT_SKIN / 41_AUTHORED_KEYS / MAX_OWNER_POSE_RESIDUAL_8.007841300544171E-08_M / EXPLICIT_AXIAL_AXIS_HANDENESS_CONTRACT / CURRENT_UC_GENERIC_CODEC_UNCHANGED / ANIMATION #5 SOURCE AUTHORITY RETAINED / RIGGING #15 WEIGHT AUTHORITY RETAINED / HOLD_WHOLE_ANIMAL_FOUR_JOINT_TRANSPORT / HOLD_HIND_LEG_TRANSPORT / HOLD_CONTINUOUS_INTERPOLATION_EQUIVALENCE / HOLD_FINAL_NORMAL_TANGENT_VISUAL_ACCEPTANCE / HOLD_ENGINE_IMPORT_PLAYBACK / HOLD_RUNTIME_CONTROLLER_GAMEPLAY_PERFORMANCE / HOLD_UC_PROMOTION / HOLD_PROFESSION_PROMOTION / ANIMAL PR #3 DRAFT`
