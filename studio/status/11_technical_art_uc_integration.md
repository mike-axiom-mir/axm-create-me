# 11 — Technical Art / UC Integration Specialist Status

Date: 2026-09-17
State: **PASS_STATIC_SKIN_TRANSPORT__HOLD_DEFORMED_DIRECTION_FRAME / POSITION_UV_HANDEDNESS_PASS / POST_SKIN_GRAM_SCHMIDT_ORTHOGONALITY_PASS_ONLY / TANGENT_SPACE_RUNTIME_PROMOTION_FAIL_CLOSED / CURRENT_UC_GENERIC_CODEC_REUSED_UNCHANGED / HOLD_DEFORMED_FRAME_RECONSTRUCTION_OR_CORRECTION / HOLD_ENGINE_IMPORT_PLAYBACK / HOLD_VISUAL_ACCEPTANCE / HOLD_RUNTIME_CONTROLLER_GAMEPLAY_PERFORMANCE / HOLD_UC_PROMOTION / ANIMAL PR #3 DRAFT**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/11_technical_art_uc_integration.md`, current specialist status, the live Animal design constellation, current `axm-universal-creation`, and the existing Technical Art PR before selecting work.

`axm-create-me` remains **coordination only**. Product tooling and retained execution evidence stay in `mike-axiom-mir/axm-animal-design`. The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The previous full UV/tangent rigged-GLB activation remains preserved in Git at coordination commit `3ba6cb4708770cdcc6cfb78ea5bfed8b666f1a65`. This activation advances the same existing Technical Art PR #3; it does not rewrite that earlier PASS.

## Fresh constellation / duplication scan

Rigging PR #25 is now the highest-leverage owner-side handoff for Technical Art.

Exact Rigging head:

**`fdfeb0e32d8b51107e9bd648210a1eaf8aaf7f3e`**

Owner result:

**`PASS_TRANSPORTED_SKINNED_POSITION_EQUIVALENCE__HOLD_DEFORMED_NORMAL_TANGENT_EQUIVALENCE`**

Rigging consumed Technical Art's exact retained GLB from head `4649d144841fbd1f3f43e9c7deb6f37b91fbd93d`, GLB SHA-256 `ecb122e3274929c3d99bc8e29a472aaa2657bcb16b13331a4f1972bb6ec6b493`, and measured the already-transported 84-vertex render domain across all 41 authored keys.

Owner measurements:

- maximum skinned position residual: **`3.712575483167813e-08 m`** against `1e-06 m` — PASS;
- maximum UV residual: **`2.6656007523325565e-08`** — PASS;
- tangent handedness mismatches: **`0`** — PASS;
- post-skin Gram–Schmidt maximum `|N·T|`: **`1.6653345369377348e-16`** — orthogonality PASS;
- normal deformation excess: **`7.541933278181338°`** — HOLD;
- corrected tangent deformation excess: **`3.6840862372161047°`** — HOLD.

That owner lane already computes the deformation observation. Technical Art therefore did **not** duplicate Rigging's tangent-frame math, Geometry's basis generation, Materials lookdev, or Runtime implementation. The missing cross-repo integration gap was narrower: the receiving pipeline had no reusable fail-closed capability contract preventing a green static GLB/UC path plus restored orthogonality from being silently promoted to "tangent-space runtime ready" despite Rigging's measured direction-frame HOLD.

Existing Animal Technical Art PR #3 remains the correct implementation home. No duplicate PR was opened.

## Selected bounded gap

Question:

> Can Technical Art consume Rigging's exact deformation receipt as source authority, preserve the already-green static skin/UV/handedness transport, and fail closed on deformed normal/tangent readiness until a separately proven correction or reconstruction exists?

This is deliberately a **capability-negotiation / truth-boundary repair**, not a new Animal normal/tangent algorithm and not a UC domain feature.

## Current UC inspected

Current `axm-universal-creation` head:

**`eb571ebd67b0e6c82387f1da32700e9be844b2af`**

Consumed generic module:

`capabilities/platform-hands/shared/asset-hands/rigged-gltf-codec.js`

Exact Git blob remains:

**`b1f2e68bb6c6800af5496decc95a8044d141edc9`**

A compare from the previous proven UC pin `2a798836378d47a787221597aa8fece0fd637e6a` to current main shows only unrelated physics-preflight files changed. The rigged glTF codec is unchanged. **No UC product change was justified or made.** No Animal deformation semantics were centralized into UC.

## Existing Technical Art lane advanced

Repository: `mike-axiom-mir/axm-animal-design`

Existing draft PR: **#3 — `Technical Art: prove explicit Animal surfaces -> UC GLB bridge`**

Branch: `studio/uc-surface-bridge-001`

Exact tested Technical Art gate head:

**`01458a9697406a649b0e1e3bf3997f7ea817a344`**

Added smallest reusable receiving tooling:

- `src/axm_animal_design/uc_deformed_frame_gate.py`;
- `tests/test_uc_deformed_frame_gate.py`;
- `tools/build_uc_deformed_frame_gate_evidence.py`;
- `.github/workflows/uc-deformed-frame-gate.yml`.

The gate consumes Rigging's retained observation instead of recomputing it. It keeps four capabilities separate:

1. base static skin / UV / tangent transport;
2. position / UV / tangent-handedness deformation identity;
3. post-skin normal/tangent orthogonality;
4. actual deformed normal/tangent direction equivalence.

A PASS in the first three is not allowed to imply the fourth.

## Smallest reusable contract

Schema:

**`axm.deformed-direction-frame-transport-gate/v0.1`**

Rules:

1. Require the exact Rigging deformation receipt schema and bounded PASS/HOLD state.
2. Bind the receipt to the exact Technical Art source-transport head and GLB SHA-256.
3. Preserve Rigging's position/UV/handedness PASS independently of direction-frame status.
4. Preserve Gram–Schmidt orthogonality as a separate measurement only; orthogonality does **not** count as direction equivalence.
5. Require owner state `PASS_TRANSPORTED_SKINNED_TANGENT_FRAME_EQUIVALENCE` **and** direction excess within `1e-06°` before `tangent_space_runtime_ready=true` can exist.
6. Otherwise return **`PASS_STATIC_SKIN_TRANSPORT__HOLD_DEFORMED_DIRECTION_FRAME`** and require a separately proven reconstruction/correction path.
7. A caller that attempts tangent-space runtime promotion while the gate is HOLD receives a hard error.
8. Bind current UC head plus exact unchanged generic codec blob; do not promote Animal-specific logic into UC.

## Exact result

Scoped result:

**`PASS_STATIC_SKIN_TRANSPORT__HOLD_DEFORMED_DIRECTION_FRAME`**

Dedicated workflow:

**`35168258833 — UC deformed direction-frame gate evidence` — SUCCESS**

Same-head companion workflows on `01458a9697406a649b0e1e3bf3997f7ea817a344` are also green:

- Tests `35168258810` — SUCCESS;
- UC rigged UV tangent bridge `35168258790` — SUCCESS;
- UC rigged animation bridge `35168258787` — SUCCESS;
- UC bilateral exact-mirror bridge `35168258771` — SUCCESS;
- UC bilateral source-successor bridge `35168258831` — SUCCESS;
- UC surface bridge `35168258768` — SUCCESS;
- Weighting refinement evidence `35168258859` — SUCCESS.

Exact dependency / receiver identities retained by the new proof:

- gate Technical Art head: `01458a9697406a649b0e1e3bf3997f7ea817a344`;
- source transport Technical Art head: `4649d144841fbd1f3f43e9c7deb6f37b91fbd93d`;
- source GLB SHA-256: `ecb122e3274929c3d99bc8e29a472aaa2657bcb16b13331a4f1972bb6ec6b493`;
- Rigging owner head: `fdfeb0e32d8b51107e9bd648210a1eaf8aaf7f3e`;
- Rigging retained artifact: `10475208614`;
- Rigging archive SHA-256: `05faacebcbc88a75ebf607d4b1c57aa7326be8894f2cd313a0962b2d44971f9b`;
- exact Rigging receipt SHA-256: `9a38c5a6659dd6c012c4d514e3fe032bfd727d5b19ca79cd26352dca4cc3fad0`;
- current UC head: `eb571ebd67b0e6c82387f1da32700e9be844b2af`;
- current UC rigged-codec blob: `b1f2e68bb6c6800af5496decc95a8044d141edc9`;
- UC product modified: `false`.

## Fail-closed control

The retained decision has `tangent_space_runtime_ready=false`. The evidence builder deliberately calls the promotion guard anyway. Exact negative result:

**`PASS_REJECTED: deformed direction-frame equivalence is HOLD; tangent-space runtime promotion refused`**

This means a green GLB, green UC receiver, position PASS, UV PASS, handedness PASS and Gram–Schmidt orthogonality PASS can no longer be mistaken for deformed tangent-frame equivalence in this Technical Art lane.

## Retained artifact

Artifact:

- ID: **`10476425239`**;
- name: `animal-current-uc-deformed-frame-gate-01458a9697406a649b0e1e3bf3997f7ea817a344`;
- size: **`6,745 B`**;
- GitHub / independently reproduced archive SHA-256: **`15439348ee7669a16f5fd43eb43b3e30f9088998f53efa4c2a08836e42474210`**;
- gate evidence JSON SHA-256: **`3c6499369e788e2fd4f3a77b38f439abc189f32e7bc69536de6f4624c67b979b`**.

The archive retains the exact Rigging observation beside the Technical Art gate decision and the exact Technical Art / Rigging / UC identity files.

## Authority / truth boundary

- **Rigging** owns the deformation-frame observation and its measured HOLD.
- **Geometry** keeps source/render topology, UV, explicit-normal and explicit-tangent authority.
- **Animation** keeps clip timing and authored motion authority.
- **Technical Art** now owns only the fail-closed receiver capability decision layered over those owner facts.
- **UC** remains only the generic rigged-glTF receiver; it received no Animal-specific deformation policy.
- **Materials / Visual QA / Art Direction** retain shaded tangent-space appearance acceptance.
- **Runtime** retains any future target-engine tangent reconstruction/optimization implementation.

This activation does **not** repair deformed normals/tangents themselves. It repairs the integration contract so that the known mismatch cannot be silently promoted. A future implementation may close the HOLD only with separately retained evidence for a reconstruction/correction path. Engine import/playback, continuous interpolation equivalence, whole-animal export, visual acceptance, gameplay/physics/performance, UC promotion, Profession Fabric promotion, CANON and production readiness remain unclaimed.

## Four-root gate

- **Truth:** the measured `7.541933278181338° / 3.6840862372161047°` direction mismatch is retained rather than hidden behind green transport or orthogonality.
- **Agency / non-domination:** Rigging's owner observation is consumed, not overwritten; UC is not made the owner of Animal tangent semantics.
- **Continuity:** the previous `4649d144...` GLB PASS remains intact and reproducible; the new gate layers on top of it without relabelling history.
- **Wisdom before speed:** the smallest reusable fail-closed contract was added before attempting a larger morph/shader/runtime correction whose interpolation and engine behavior are not yet proven.

## Current state

`PASS_STATIC_SKIN_TRANSPORT__HOLD_DEFORMED_DIRECTION_FRAME / TECHNICAL_ART_GATE_HEAD_01458A96 / SOURCE_TRANSPORT_HEAD_4649D144 / RIGGING_HEAD_FDFEB0E3 / POSITION_MAX_RESIDUAL_3.712575483167813E-08_M_PASS / UV_MAX_RESIDUAL_2.6656007523325565E-08_PASS / TANGENT_W_MISMATCH_0_PASS / GRAM_SCHMIDT_N_DOT_T_1.6653345369377348E-16_PASS_ORTHOGONALITY_ONLY / NORMAL_EXCESS_7.541933278181338_DEG_HOLD / TANGENT_EXCESS_3.6840862372161047_DEG_HOLD / RUNTIME_PROMOTION_REJECTED / CURRENT_UC_EB571EBD_CODEC_B1F2E68B_UNCHANGED / HOLD_DEFORMED_FRAME_RECONSTRUCTION_OR_CORRECTION / HOLD_ENGINE_IMPORT_PLAYBACK / HOLD_VISUAL_ACCEPTANCE / HOLD_RUNTIME_CONTROLLER_GAMEPLAY_PERFORMANCE / HOLD_UC_PROMOTION / HOLD_PROFESSION_PROMOTION / ANIMAL PR #3 DRAFT`
