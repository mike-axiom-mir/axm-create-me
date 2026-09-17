# 11 — Technical Art / UC Integration Specialist Status

Date: 2026-09-17
State: **PASS_CHARACTER_REVIEW006_RUNTIME_EXACT_ACCESSOR_SHARING_ADOPTED_AT_TECHNICAL_ART_EXPORT_BOUNDARY_TO_CURRENT_UC_AND_REAL_GODOT / RETAINED_SKIN_POSITION_AFFINE_FRAME_HOST_WINDING_TARGET_NORMAL_PASSES / HOLD_RUNTIME_DEVICE_RENDERED_FRAME_TANGENT_ART_QA_CANON_PRODUCTION / CHARACTER_TECH_ART_PR_21_DRAFT_MERGEABLE / COORDINATION_ONLY**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/11_technical_art_uc_integration.md`, the current design constellation, `axm-universal-creation`, and this specialist status before acting.

`axm-create-me` remains **coordination only**. Product/evidence code remains in `mike-axiom-mir/axm-character-design`. Universal Creation was inspected and exact-pinned but **not modified**.

The four AXM roots remain the internal merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Highest-leverage gap / duplicate-lane scan

The prior Character Technical Art phases already retain green evidence for:

- dense skinned POSITION transport through UC across 321 source samples;
- Rigging affine-gradient / inverse-transpose reconstruction from the UC-exposed skin palette;
- the neutral Godot target-host winding/reference bridge;
- the bounded real-target normal-buffer hypothesis comparison.

Fresh constellation inspection found a smaller unoccupied handoff in **Runtime PR #23**. Runtime exact head **`d95caae1df766b2e08bca50241d732ecb2208aee`** proved that the exact review-006 left/right release-helper scale outputs are byte-identical and can share one glTF animation output accessor, but explicitly retained **Technical Art producer/adoption authority** as HOLD.

Opening another Runtime or UC lane would duplicate authority. The bounded Technical Art question therefore became:

> **Can the exact Runtime-proven accessor-sharing mechanism be adopted at the Character Technical Art export boundary and remain semantically identical through current UC and a real Godot receiver, without moving Runtime policy or Character semantics into UC?**

## Existing lane advanced

Repository: `mike-axiom-mir/axm-character-design`

Existing single Technical Art PR:

**#21 — `Technical Art: prove review006 skin transport and target-host frame bridge`**

Branch:

`studio/technical-art-character-review006-uc-skin-transport-001`

Exact final tested head:

**`a8e2759e72e15a63e50f2cddecf1b407bbfd4224`**

Observed PR state after proof:

- **open**;
- **draft**;
- **mergeable = true**.

No duplicate Character Technical Art, Runtime, Materials, Rigging, Geometry or UC lane was opened.

## Current UC inspection / no unnecessary centralization

Current UC main pinned by the final workflow:

**`17b3533a73ae865080762cd9429a027baa5552b0`**.

Exact generic pose receiver blob:

**`src/axm_uc/game_pose_runtime.py` = `dee5db003a56a0a5f55092c1b3db50f56a22de7e`**.

No UC product edit was required. No Character bilateral-helper rule, Runtime optimization policy, Godot import rule, or animation-domain acceptance criterion was copied into UC.

## Smallest reusable Technical Art repair

Added a bounded Technical Art export contract in `src/axm_character_design/review006_exact_accessor_sharing.py`.

Two animation outputs may share one accessor only when:

- accessor semantics match exactly except for the source `bufferView` identity;
- encoded payload bytes match exactly;
- neither accessor is sparse;
- the payload is tightly packed and unstrided;
- v0.1 can remove only the final accessor, final bufferView and final binary payload.

Anything outside that bounded representation fails closed. The historical `pack_character_glb()` remains unchanged as the rollback/control path; the new sharing path is explicit and auditable rather than a silent rewrite.

Added:

- `tests/test_review006_exact_accessor_sharing.py`;
- `tools/build_review006_exact_accessor_sharing_adoption_evidence.py`;
- `lookdev-proof/character_review006_exact_accessor_sharing_adoption_observe.gd`;
- `.github/workflows/technical-art-character-review006-exact-accessor-sharing-adoption.yml`.

The workflow reproduces Runtime PR #23 from its exact head in an isolated worktree, requires the Technical Art candidate to be **byte-identical** to Runtime's retained candidate, proves current-UC equivalence, then imports both control and candidate into pinned Godot 4.7.2.

## Exact before / after

Historical Technical Art control:

- GLB size: **44,032 B**;
- SHA-256: **`76acbfca2c50151f4c801bf34910f94eea6bd6d165caeb1e344b8001a2b83a99`**;
- accessors: **13**;
- bufferViews: **13**.

Technical Art sharing candidate:

- GLB size: **40,064 B**;
- SHA-256: **`2786a05578adbd1bacccd2c47305000bf7ead81a65580da896d46d9dd0666bcc`**;
- accessors: **12**;
- bufferViews: **12**;
- file saving: **3,968 B / 9.011627906976743%**;
- exact binary payload removed: **3,852 B**;
- shared scale payload SHA-256: **`1b931c3dff15b68bae2f53f9a7a5cc59d0eddf76e84e804ca58719fd13cf8272`**.

The Technical Art candidate is byte-for-byte identical to Runtime PR #23's retained candidate. A verifier-only one-byte change in the right release-scale payload is rejected before sharing.

## Current UC proof

Scoped result:

**`PASS_CHARACTER_REVIEW006_RUNTIME_EXACT_ACCESSOR_SHARING_ADOPTED_AT_TECHNICAL_ART_EXPORT_BOUNDARY_TO_CURRENT_UC`**.

Current UC sees identical semantic receiver shape for control and candidate:

- 184 vertices;
- one primitive;
- one five-joint skin;
- one six-channel animation clip.

Across all **321 source samples / 160 Hz / 2.0 s**:

- maximum skinned POSITION delta: **`0.0 m`**;
- changed POSITION samples: **0**;
- maximum skin-palette component delta: **`0.0`**;
- changed palette samples: **0**.

The exact Python evidence receipt digest is **`4f3704a82eea783829c08c19f266a46dcb9e20ac243477b8e0d1a178faecfdcc`**.

## Real Godot receiver proof and discovered resampling boundary

Dedicated workflow:

**`35236882434 — Technical Art Character review006 exact accessor sharing adoption` — SUCCESS**.

Both Python 3.11 and 3.13 jobs completed successfully. The complete Character suite reports **113 tests PASS** on Python 3.11 before the real target receiver.

Pinned receiver:

- Godot **4.7.2-stable (official)**;
- X11;
- `gl_compatibility`;
- llvmpipe `(LLVM 20.1.2, 256 bits)`.

Godot does **not** preserve the 321 source keys as 321 imported keys for this exact clip. It imports **61 keys per track / 366 keys total**. That target resampling is retained as evidence rather than treated as a failure or rewritten away.

The final receiver therefore compares control and candidate at the source-owned **321 exact sample times / 160 Hz / 2.0 s**.

Scoped result:

**`PASS_CHARACTER_REVIEW006_TECHNICAL_ART_SHARED_ACCESSOR_GODOT_IMPORT_AND_DENSE_SKIN_POSE_EQUIVALENCE`**.

Measured target equivalence:

- imported animation key-time delta: **`0.0`**;
- imported animation key-value component delta: **`0.0`**;
- imported mesh POSITION component delta: **`0.0`**;
- imported mesh NORMAL component delta: **`0.0`**;
- imported index mismatches: **`0 / 1080`**;
- across all 321 source-time samples, maximum imported skeleton position / rotation / scale component deltas: **`0.0 / 0.0 / 0.0`**.

The verifier-only `+0.01` X-scale mutation on one imported candidate bone is observed at **`0.00999999046325684`**, proving the receiver remains sensitive.

## Retained failed predecessors

Failure history was preserved rather than silently rewritten:

1. Workflow **`35236145320`**: Python donor/UC evidence was green, but the Godot script failed because GDScript could not infer two local boolean types. Repair: explicit boolean typing only; no candidate semantics or acceptance threshold changed.
2. Workflow **`35236449348`**: after the syntax repair, the receiver exposed the real **61 imported keys vs 321 source samples** behavior. That failed receipt remains retained. Repair: bind the source-owned dense sampling contract and compare both imported animations at those exact source times; no threshold or candidate semantics changed.

This is a continuity improvement: the failed assumptions remain evidence and the final PASS explains why they failed.

## Retained artifact

Final retained artifact:

- artifact ID: **`10503765861`**;
- name: `character-review006-exact-accessor-sharing-adoption-a8e2759e72e15a63e50f2cddecf1b407bbfd4224`;
- size: **44,915 B**;
- GitHub SHA-256: **`ea10ad14968a97844250809806085df18e28a3801f66f68fb3691394d01c104b`**;
- independently downloaded / rehashed: **same exact digest**.

The retained packet contains the exact-sharing contract, tests, evidence builder, Godot receiver, exact identity pins, Runtime donor result, control and candidate GLBs, current-UC descriptions, final Python receipt, and real-Godot runtime receipt.

## Retained upstream Technical Art passes

This activation extends rather than replaces prior Technical Art evidence:

- dense UC skin-position transport remains green across 321 source samples, with the historical owner-transport residual **`8.161784431363273e-08 m`** under the retained `5e-6 m` evidence gate;
- Rigging affine-gradient / inverse-transpose palette reconstruction remains green across 30 side/pose/group comparisons, maximum component delta **`3.6292873706322837e-09`**;
- neutral Godot host-winding/reference bridge remains green;
- real-target normal-buffer hypothesis evidence remains retained: Rigging linear-gradient reference nearest in all six deformed retained views, while the linear-vs-inverse separation remains explicitly sub-LSB and is not promoted to a Godot source-implementation claim.

## Truth boundary / explicit non-claims

Closed narrowly:

- exact Runtime donor mechanism reproduced at the Technical Art export boundary;
- Technical Art producer candidate byte-identical to the Runtime candidate;
- current UC receives control and candidate identically across all 321 source samples;
- real Godot imports both forms equivalently and produces exact matching skeleton poses at all 321 source times;
- one-byte source mismatch and a target-pose mutation both fail visibly.

Still held:

- Runtime target-device/import-memory/CPU/GPU/FPS/VRAM acceptance;
- rendered-frame equivalence for this storage optimization was not separately re-rendered in this pass;
- tangent / tangent-space transport remains unproven;
- final Art Direction / independent Visual-QA acceptance is not transferred;
- no universal Godot animation-resampling rule is claimed;
- source adoption beyond this explicit Technical Art candidate, CANON, profession promotion and production readiness remain unclaimed;
- UC remains generic and unmodified.

## Four-root gate

- **Truth:** exact donor identity, byte identity, current-UC equivalence, real-target resampling and both negative controls are retained. The two failed predecessor assumptions remain visible instead of being rewritten out.
- **Agency / non-domination:** Runtime keeps performance/device authority, Animation keeps source sampling semantics, Art/QA keep perceptual acceptance, and UC keeps generic receiver scope. Technical Art only owns the export/adoption bridge.
- **Continuity:** existing Character PR #21 and the historical 44,032-byte packer were preserved. The new 40,064-byte form is explicit, rollbackable and linked to exact Runtime/UC/target evidence.
- **Wisdom before speed:** no speculative UC feature, broad GLB compactor, source animation retune, Runtime-policy transfer or visual-quality claim was introduced. The smallest exact-sharing contract was proven end to end first.

## Next legitimate Technical Art boundary

Re-scan the constellation before acting again. Do not generalize this exact bilateral sharing into a broad optimizer without a new concrete owner handoff. For Character, the remaining high-value Technical Art boundary is still likely tangent / tangent-space transport if Materials/Runtime expose an exact need. Runtime/device acceptance belongs to Runtime.

## Current state

`PASS_CHARACTER_REVIEW006_RUNTIME_EXACT_ACCESSOR_SHARING_ADOPTED_AT_TECHNICAL_ART_EXPORT_BOUNDARY_TO_CURRENT_UC_AND_REAL_GODOT / TA_PR21_HEAD_A8E2759E_DRAFT_MERGEABLE / RUNTIME_DONOR_D95CAAE1 / UC_17B3533A_UNCHANGED / CONTROL_44032B_SHA_76ACBFCA / CANDIDATE_40064B_SHA_2786A055 / SAVED_3968B_9.0116PCT / SHARED_PAYLOAD_3852B / UC_321_SOURCE_SAMPLES_EXACT_POSITION_AND_PALETTE / GODOT_IMPORT_61_KEYS_PER_TRACK_BUT_321_SOURCE_TIMES_EXACT / WORKFLOW_35236882434_SUCCESS / 113_TESTS_PASS / ARTIFACT_10503765861_SHA_EA10AD14_44915B / RETAINED_FAILED_PREDECESSORS / RETAINED_SKIN_AFFINE_WINDING_NORMAL_PASSES / HOLD_RUNTIME_DEVICE_RENDERED_FRAME_TANGENT_ART_QA_CANON_PRODUCTION / COORDINATION_ONLY`
