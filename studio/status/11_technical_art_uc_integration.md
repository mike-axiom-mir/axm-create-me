# 11 — Technical Art / UC Integration Specialist Status

Date: 2026-09-17
State: **PASS_ANIMAL_POST_SKIN_OWNER_FRAME_RECONSTRUCTION_CONTRACT_ADOPTED / HOLD_TARGET_RUNTIME_IMPLEMENTATION / RAW_STATIC_NORMAL_TANGENT_DIRECTION_FRAME_HOLD_PRESERVED / ANIMAL_TA_PR3_DRAFT_MERGEABLE / UC_UNCHANGED / COORDINATION_ONLY**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/11_technical_art_uc_integration.md`, the current design constellation, current `axm-universal-creation`, and this specialist status before acting.

`axm-create-me` remains **coordination only**. Product/evidence code is in the existing `mike-axiom-mir/axm-animal-design` Technical Art lane. Universal Creation was inspected and exact-pinned but **not modified**.

The four AXM roots remain the internal merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Highest-leverage gap / duplicate-lane scan

The previous specialist activation closed a Character Runtime→Technical-Art exact-accessor-sharing adoption gap and explicitly left tangent / tangent-space transport as the next likely high-value Technical Art boundary if an owner exposed an exact need.

Fresh constellation inspection found that the Animal design constellation now exposes exactly that handoff on existing lanes:

- existing Animal Technical Art PR #3 already proves UV/tangent GLB transport and has an explicit fail-closed deformed direction-frame HOLD;
- Rigging PR #25 now retains a separate owner proof showing that the owner normal/tangent frame can be reconstructed from the already-green skinned POSITION field plus fixed Geometry render→source topology/UV identity across all 41 authored keys;
- Materials PR #24 owns the corresponding tangent-space appearance/lookdev baseline;
- Runtime lanes remain separate representation/performance work and do not own this integration contract.

Opening another Technical Art, Rigging, Materials, Runtime, or UC lane would duplicate authority. The bounded Technical Art question became:

> **Can Technical Art adopt the exact Rigging-owned post-skin owner-frame reconstruction as a reusable receiver contract, while preserving the historical raw static NORMAL/TANGENT deformation HOLD and without copying Animal reconstruction policy into Technical Art or UC?**

## Existing lane advanced

Repository: `mike-axiom-mir/axm-animal-design`

Existing Technical Art PR:

**#3 — `Technical Art: prove explicit Animal surfaces -> UC GLB bridge`**

Branch:

`studio/uc-surface-bridge-001`

Exact final tested head:

**`a3c062f1271e72598971446b37847598d2433d93`**

Observed PR state after proof:

- **open**;
- **draft**;
- **mergeable = true**.

No duplicate lane was opened.

## Exact owner evidence consumed

Rigging PR #25 exact retained reconstruction owner head:

**`81ab44eab2e13bed95187610a476be2b2c4667a7`**

Retained owner artifact:

- artifact ID: **`10476642320`**;
- archive SHA-256: **`2d11836cc7c1ada5146752d0b6205d0e4f476cd085ee8be4964e2f024f70fa58`**;
- exact receipt SHA-256 retained by Technical Art: **`36c304d9314611bd608af1522c7fffd10adffdcb94cf0b3637dbaab29d0f0a0c`**;
- owner state: **`PASS_TRANSPORTED_POST_SKIN_OWNER_FRAME_RECONSTRUCTION_41_KEYS`**.

The exact prior Technical Art GLB remains:

- source Technical Art head: **`4649d144841fbd1f3f43e9c7deb6f37b91fbd93d`**;
- GLB SHA-256: **`ecb122e3274929c3d99bc8e29a472aaa2657bcb16b13331a4f1972bb6ec6b493`**.

The historical raw static NORMAL/TANGENT deformation finding is preserved as premise rather than overwritten:

- normal deformation excess: **`7.541933278181338°`**;
- corrected-tangent deformation excess: **`3.6840862372161047°`**;
- raw static direction-frame gate: **HOLD**.

## Smallest reusable Technical Art repair

Added a bounded Animal-local Technical Art contract:

`src/axm_animal_design/uc_direction_frame_reconstruction_contract.py`

with retained tests, evidence builder, documentation, and an additional job inside the **existing** deformed-frame workflow. A temporary standalone workflow was removed so the proof remains in the established Technical Art frame-gate lane rather than creating duplicate workflow authority.

The adopted receiver contract is:

1. skin the transported POSITION field using the receiver skin palette;
2. collapse UV-split render positions through the fixed `render_source_indices` mapping with split-equivalence gating;
3. map positions back through the explicit Animal↔UC coordinate boundary;
4. invoke the **owner-provided** Rigging/Geometry posed normal+tangent reconstruction over source positions + topology + UV identity;
5. expand the reconstructed owner frame back through the fixed render mapping while preserving tangent W.

Technical Art owns only this integration boundary and fail-closed contract. The owner reconstruction algorithm is **not copied** into Technical Art and is **not moved** into UC.

## Current UC inspection / no unnecessary centralization

Pinned current UC main consumed by the successful proof:

**`c9d28d43e4b25532fcd31622196a08794e467ade`**

Exact generic receiver blob:

`capabilities/platform-hands/shared/asset-hands/rigged-gltf-codec.js`

Git blob:

**`02b69b6c7368ba6e34f226ca545293d26d208922`**

UC product modified: **False**.

No Animal topology, render-source mapping, UV policy, rig/weighting rule, owner-frame derivation, tangent-space acceptance criterion, or runtime policy was added to UC.

## Exact result

Scoped result:

**`PASS_POST_SKIN_OWNER_FRAME_RECONSTRUCTION_CONTRACT_ADOPTED__HOLD_TARGET_RUNTIME_IMPLEMENTATION`**

Across all **41 authored keys**:

- maximum UV-split position disagreement: **`0.0 m`**;
- maximum owner-position residual: **`3.712575483167813e-08 m`**;
- maximum owner-normal angle: **`2.0081521282065968e-05°`**;
- maximum owner-tangent angle: **`3.181419632879438e-05°`**;
- maximum reconstructed `|N·T|`: **`1.1657341758564144e-15`**;
- tangent-handedness mismatches: **`0`**.

Fail-closed sensitivity remains intact: the owner-side coherent `+1 mm` posed-shape mutation produces **`0.1573809848662001°`** direction-frame signal.

The Technical Art contract deliberately refuses runtime promotion:

**`PASS_REJECTED: direction-frame reconstruction contract is adopted but target runtime implementation is HOLD`**.

That rejection is part of the retained evidence, not a missing implementation disguised as PASS.

## CI and retained evidence

Exact workflow:

**`35243281874 — UC deformed direction-frame gate evidence` — SUCCESS**.

Both jobs in that workflow succeeded:

- the historical raw static direction-frame capability gate remains green as a truthful **HOLD** decision;
- the new post-skin owner-frame reconstruction adoption contract is **PASS** with target runtime still held.

Same-head repository-wide test workflow:

**`35243281653 — Tests` — SUCCESS**.

Final retained reconstruction-contract artifact:

- artifact ID: **`10506183243`**;
- name: `animal-current-uc-direction-frame-reconstruction-contract-a3c062f1271e72598971446b37847598d2433d93`;
- size: **6,550 B**;
- GitHub SHA-256: **`58d4f4f35bccdcc24deb4eb624279070cc9eb52d54c97b2fba6ff4cbe7da1973`**;
- independently downloaded / rehashed: **same exact digest**;
- retained files: **10**.

The packet retains the exact Rigging owner receipt, exact source Technical Art/GLB identities, current Technical Art head, current UC head and codec blob, the adopted contract, measurements, and the explicit runtime-promotion rejection.

## Retained failed predecessor

Workflow **`35243071497`** is intentionally retained as a failed predecessor.

The new reconstruction job initially over-pinned the **current** `uc_rigged_tangent_bridge.py` to an older historical bridge blob. That was a provenance/lineage mistake: the current bridge had legitimately advanced while the exact historical source GLB remained separately pinned.

Repair:

- preserve the exact historical source GLB and owner artifact identities;
- bind the actual current Technical Art bridge blob **`68acd2ad5d335a4c6bcabf3d4d0208d7123c12eb`**;
- change no reconstruction thresholds, owner measurements, source GLB, UC product code, or acceptance semantics.

This preserves failure history instead of rewriting it away.

## Handoffs

Returned evidence to:

- Animal Technical Art PR #3;
- Rigging PR #25, preserving Rigging/Geometry ownership of reconstruction semantics;
- Materials PR #24, preserving its tangent-space lookdev / visual-comparison authority.

The next real receiver step belongs to an engine/runtime or appropriate target-implementation lane: implement the adopted contract and prove it against the existing owner/lookdev evidence. Technical Art should not claim that step merely because the contract is now explicit.

## Truth boundary / explicit non-claims

Closed narrowly:

- exact owner reconstruction evidence is now consumable through an explicit Technical Art receiver contract;
- exact current UC identity is retained and UC remains generic/unmodified;
- source GLB identity and historical static direction-frame failure remain preserved;
- the contract is fail-closed on schema/state/metric/negative-control/truth-boundary drift;
- runtime promotion is explicitly rejected until independently implemented.

Still held:

- the raw static NORMAL/TANGENT skinning path is **not** direction-frame equivalent under deformation;
- no real target engine/runtime has implemented this post-skin reconstruction contract in this activation;
- no shaded/tangent-space visual acceptance transfers from Materials/Art/QA;
- no Runtime target-device/import-memory/CPU/GPU/FPS/VRAM acceptance is claimed;
- no CANON, profession promotion, production readiness, or game readiness claim is made;
- UC remains generic and unmodified.

## Retained prior Technical Art state

The immediately preceding Character pass remains valid and is not replaced: exact Runtime-proven animation accessor sharing was adopted at Character Technical Art head `a8e2759e72e15a63e50f2cddecf1b407bbfd4224`, producing a `44,032 B -> 40,064 B` GLB reduction with exact UC and real-Godot semantic equivalence. Its retained artifact is `10503765861`, SHA-256 `ea10ad14968a97844250809806085df18e28a3801f66f68fb3691394d01c104b`. Runtime/device/rendered-frame/Art-QA/CANON/production boundaries from that pass remain held.

## Four-root gate

- **Truth:** the earlier static direction-frame failure remains visible; owner reconstruction, current UC identity, CI, retained artifact and failed predecessor are exact-pinned. Contract adoption is not mislabeled as runtime implementation.
- **Agency / non-domination:** Rigging/Geometry retain owner reconstruction semantics, Materials/Art/QA retain visual acceptance, Runtime retains engine/device authority, and UC retains generic scope. Technical Art owns only the receiver boundary.
- **Continuity:** existing Animal PR #3 and its prior transport/gate history were extended in place. The old failing direction path, exact source GLB, owner evidence, and failed proof attempt remain retained.
- **Wisdom before speed:** no speculative UC feature, universal tangent algorithm, source rewrite, or runtime claim was introduced. The smallest explicit adoption contract was proved first.

## Next legitimate Technical Art boundary

Re-scan the constellation before acting again. The next useful Technical Art step is only a concrete consumer/target handoff for this adopted reconstruction contract, or another exact cross-repo transport gap exposed by an owner. Do **not** implement Animal reconstruction policy inside UC for convenience and do not duplicate Runtime, Materials, Rigging or Art/QA authority.

## Current state

`PASS_ANIMAL_POST_SKIN_OWNER_FRAME_RECONSTRUCTION_CONTRACT_ADOPTED / TA_PR3_HEAD_A3C062F1_DRAFT_MERGEABLE / RIGGING_OWNER_81AB44EA_ARTIFACT_10476642320 / SOURCE_GLB_ECB122E3 / UC_C9D28D43_CODEC_02B69B6C_UNCHANGED / 41_KEYS / MAX_POS_3.712575E-08M / MAX_NORMAL_2.008152E-05DEG / MAX_TANGENT_3.181420E-05DEG / MAX_NT_1.165734E-15 / W_MISMATCH_0 / NEGATIVE_0.157381DEG / WORKFLOW_35243281874_SUCCESS / TESTS_35243281653_SUCCESS / ARTIFACT_10506183243_SHA_58D4F4F3_6550B / RETAINED_FAILED_PREDECESSOR_35243071497 / RAW_STATIC_DIRECTION_FRAME_HOLD_PRESERVED / HOLD_TARGET_RUNTIME_VISUAL_RUNTIME_DEVICE_ART_QA_CANON_PRODUCTION / COORDINATION_ONLY`
