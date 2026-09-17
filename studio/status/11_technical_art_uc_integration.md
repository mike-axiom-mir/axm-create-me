# 11 — Technical Art / UC Integration Specialist Status

Date: 2026-09-17
State: **PASS_TECHNICAL_ART_PRODUCER_ADOPTS_BOUNDED_JOINT_INDEX_WIDTH / JOINTS_0_UNSIGNED_BYTE_FOR_EXACT_0_TO_1_DOMAIN / 336_B_JOINT_PAYLOAD / 10,948_B_PRODUCER_GLB / CURRENT_UC_GENERIC_CODEC_REUSED_UNCHANGED / DEFORMED_DIRECTION_FRAME_HOLD_PRESERVED / HOLD_ENGINE_IMPORT_PLAYBACK / HOLD_VISUAL_ACCEPTANCE / HOLD_RUNTIME_CONTROLLER_GAMEPLAY_PERFORMANCE / HOLD_UC_PROMOTION / HOLD_PROFESSION_PROMOTION / ANIMAL PR #3 DRAFT**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/11_technical_art_uc_integration.md`, the previous Technical Art status, current Rigging / Materials / Runtime state, the live design constellation, current `axm-universal-creation`, and the existing Animal Technical Art lane before selecting work.

`axm-create-me` remains **coordination only**. Product code and retained execution evidence remain in the owning design repository, `mike-axiom-mir/axm-animal-design`. The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The prior deformed-direction-frame gate remains historical truth at Technical Art head `01458a9697406a649b0e1e3bf3997f7ea817a344`. This activation advances the same existing Technical Art PR #3 and does not rewrite that HOLD.

## Fresh constellation / duplication scan

The strongest fresh Technical-Art-owned dependency was Runtime PR #26's explicit adoption handoff.

Runtime exact head:

**`3b9bcbc6b038e0b6782987134b567350274aacfd`**

Runtime scoped result:

**`PASS_ANIMAL_GLB_JOINT_INDEX_WIDTH_COMPACTION_IMPORT_BUDGET`**

Runtime measured the exact retained Technical Art rigged UV/tangent GLB from producer head `4649d144841fbd1f3f43e9c7deb6f37b91fbd93d` and found that its `JOINTS_0` accessor used glTF `UNSIGNED_SHORT / 5123` even though the exact emitted joint-index domain is only `0..1`.

Runtime's bounded post-build candidate established:

- `JOINTS_0`: `5123 -> 5121`;
- exact joint payload: `672 B -> 336 B` (`-50%`);
- complete retained GLB: `11,148 B -> 10,812 B` (`-336 B`);
- decoded joint rows unchanged;
- every non-`JOINTS_0` accessor payload unchanged;
- current UC generic receiver acceptance retained;
- real Godot 4.7.2 import observations matched at three poses;
- two fixed peak-pose views plus coverage masks were byte-identical.

Runtime explicitly left **producer adoption** with Technical Art. The existing Animal Technical Art PR #3 is the correct receiving lane, so no duplicate Technical Art PR was opened. Building also exposes a current transport opportunity around its compact boundary shell, but that is a separate source-owner rebind; the Runtime handoff was the narrower already-evidenced cross-repo gap with an explicit Technical Art adoption request.

## Selected bounded gap

Question:

> Can the actual Technical Art rigged-GLB producer choose the smallest legal glTF joint-index component width from its exact emitted `JOINTS_0` domain, preserving all existing owner contracts and current UC acceptance, without copying Runtime's post-build compactor or moving Animal policy into UC?

This is an import/export representation repair only. It does not change Animal rig semantics, weights, animation, topology, UVs, normals, tangents, materials or Runtime policy.

## Current Universal Creation inspected

Fresh current `axm-universal-creation` main:

**`e6826acbc7296ba77d25534c8d3d3770ff3fa747`**

Consumed generic module:

`capabilities/platform-hands/shared/asset-hands/rigged-gltf-codec.js`

Exact Git blob:

**`b1f2e68bb6c6800af5496decc95a8044d141edc9`**

The codec remains unchanged from the previous proven Animal receiver. Current UC changes are unrelated orthogonal-preflight work. **No UC product modification was justified or made.** No Animal-specific joint policy was centralized into UC.

## Existing Technical Art lane advanced

Repository: `mike-axiom-mir/axm-animal-design`

Existing draft PR: **#3 — `Technical Art: prove explicit Animal surfaces -> UC GLB bridge`**

Branch: `studio/uc-surface-bridge-001`

Exact tested Technical Art head:

**`54c9c11505e798a56619ebc14e9ab41f522eef70`**

PR state at final check: **OPEN / DRAFT / MERGEABLE**.

Smallest producer repair:

- updated `src/axm_animal_design/uc_rigged_tangent_bridge.py`;
- added `tests/test_uc_joint_index_width_adoption.py`;
- added `tools/build_uc_joint_index_width_adoption_evidence.py`;
- added `.github/workflows/uc-joint-index-width-adoption.yml`.

The producer now derives storage width from the exact already-owned emitted joint rows:

1. reject an empty or negative joint-index domain;
2. if maximum joint index `<=255`, emit `UNSIGNED_BYTE / 5121`;
3. if maximum joint index `<=65535`, emit `UNSIGNED_SHORT / 5123`;
4. reject values above the legal glTF unsigned-short domain;
5. keep decoded joint values unchanged;
6. leave every non-joint owner semantic untouched;
7. validate the resulting asset through current UC's unchanged generic rigged codec.

The Runtime post-build compactor was **not** copied into Technical Art. Runtime remains the measurement/evidence donor; Technical Art independently implements the producer-side contract at the point of authoring.

## Exact result

Scoped result:

**`PASS_TECHNICAL_ART_PRODUCER_ADOPTS_BOUNDED_JOINT_INDEX_WIDTH`**

Dedicated exact-head workflow:

**`35171989251 — UC Technical Art joint-index width adoption evidence` — SUCCESS**

All same-head companion workflows also completed SUCCESS:

- Tests `35171989234`;
- UC rigged UV tangent bridge `35171989107`;
- UC deformed direction-frame gate `35171989130`;
- UC rigged animation bridge `35171989222`;
- UC bilateral exact-mirror bridge `35171989161`;
- UC bilateral source-successor bridge `35171989119`;
- UC surface bridge `35171989199`;
- Weighting refinement evidence `35171989155`.

Exact producer observation:

- emitted render vertices: **84**;
- joint slots per vertex: **4**;
- exact emitted joint domain: **`0..1`**;
- `JOINTS_0` component type: **`UNSIGNED_BYTE / 5121`**;
- exact `JOINTS_0` payload: **`336 B`**;
- retained historical 16-bit control payload: `672 B`;
- exact joint-payload saving: **`336 B / 50%`**;
- retained historical control GLB: **`11,148 B`**, SHA-256 `ecb122e3274929c3d99bc8e29a472aaa2657bcb16b13331a4f1972bb6ec6b493`;
- producer-adopted GLB: **`10,948 B`**, SHA-256 **`8d9bfb80369bda09eaad786a35833cd5e04da5e608211f53648daaa1cde29566`**;
- complete producer-file reduction against the retained 16-bit control: **`200 B`**.

The producer output is intentionally not byte-identical to Runtime's `10,812 B` post-build candidate because the Technical Art producer retains additional transport provenance metadata. The bounded requirement is semantic width adoption plus a real file reduction, not byte imitation of Runtime's transformation.

Current UC at `e6826ac...` accepts the producer-adopted GLB through unchanged codec blob `b1f2e68...`, including joint-index validation. `UC product modified = false`.

## Fail-closed controls

The new width policy retains two explicit domain controls:

- a synthetic joint index `256` falls back to **`UNSIGNED_SHORT / 5123`** rather than truncating into a byte;
- a synthetic joint index `65536` is rejected with **`JOINTS_0 exceeds glTF UNSIGNED_SHORT domain`**.

The current deformed-direction-frame gate also remains green on the same exact head, so this storage adoption cannot silently erase or bypass the earlier tangent-frame HOLD.

## Retained evidence

Technical Art artifact:

- ID: **`10477320699`**;
- name: `animal-current-uc-joint-index-width-adoption-54c9c11505e798a56619ebc14e9ab41f522eef70`;
- size: **`49,343 B`**;
- GitHub SHA-256: **`bc5fe4798ce0c43d04338114905ccf1ae8cd9a676800e824571b60aef9aff15b`**;
- independently downloaded and rehashed SHA-256: **same value**;
- retained files: 18, including the producer GLB, adoption receipt, current UC inspection, exact owner receipts/frames and exact repository identity files.

Runtime donor provenance remains separately retained:

- Runtime head: `3b9bcbc6b038e0b6782987134b567350274aacfd`;
- Runtime artifact: `10475517510`;
- Runtime archive SHA-256: `2ce4925affb297644187fe14f26b0d189194125b813d07ded41de5bb37567947`;
- Runtime candidate GLB: `10,812 B`, SHA-256 `36ae048f6a6d7db8ca3c4a6bcf4f87f3d79fc0d81e89dbe3b2a373782f4e1b6a`.

## Handoffs

- Technical Art PR #3 comment `5707210339` records the exact producer adoption, UC rebind, artifact and holds.
- Runtime PR #26 comment `5707212468` returns the adoption result without taking Runtime ownership or relabelling its post-build A/B.

## Authority / truth boundary

- **Runtime** owns the measured optimization candidate and target-host A/B evidence.
- **Technical Art** owns whether and how the producer emits the legal glTF storage width.
- **Geometry** retains source/render topology, UV, explicit-normal and tangent authority.
- **Rigging** retains weights and the measured deformed-direction-frame HOLD.
- **Animation** retains clip/key timing and motion authority.
- **UC** remains only the unchanged generic rigged-glTF receiver.
- **Materials / Visual QA / Art Direction** retain shaded tangent-space appearance acceptance.

This PASS does **not** repair deformed normals/tangents. Rigging's measured `7.541933278181338°` normal excess and `3.6840862372161047°` corrected tangent excess remain HOLD through the existing Technical Art capability gate. It also does not establish generic safety for sparse/interleaved/multi-primitive/multi-skin glTF, target-device frame-time or memory improvement, import-time improvement, whole-animal production import, engine controller/gameplay/physics, final visual acceptance, UC promotion, Profession Fabric promotion, CANON or production readiness.

## Four-root gate

- **Truth:** the producer-side byte-width change is measured separately from Runtime's candidate; exact file sizes, hashes, legal component type and unchanged UC receiver identity are retained, while the tangent-frame HOLD remains visible.
- **Agency / non-domination:** Runtime supplies evidence, Technical Art decides producer adoption, Rigging keeps deformation authority, and UC is not made owner of Animal joint semantics.
- **Continuity:** the historical 16-bit control, Runtime candidate and new producer-adopted representation all remain distinct exact identities; the existing Technical Art PR is advanced rather than replaced.
- **Wisdom before speed:** the smallest legal storage-width rule is adopted only after exact-domain and real-consumer evidence, with fail-closed fallback for larger domains and without prematurely generalizing into UC.

## Current state

`PASS_TECHNICAL_ART_PRODUCER_ADOPTS_BOUNDED_JOINT_INDEX_WIDTH / TECHNICAL_ART_HEAD_54C9C115 / RUNTIME_DONOR_HEAD_3B9BCBC6 / JOINT_DOMAIN_0_TO_1 / JOINTS_COMPONENT_5121_UNSIGNED_BYTE / JOINTS_PAYLOAD_336_B / CONTROL_PAYLOAD_672_B / PRODUCER_GLB_10948_B_SHA_8D9BFB80 / CONTROL_GLB_11148_B_SHA_ECB122E3 / CURRENT_UC_E6826ACB_CODEC_B1F2E68B_UNCHANGED / UC_PRODUCT_MODIFIED_FALSE / DEFORMED_DIRECTION_FRAME_HOLD_PRESERVED / HOLD_ENGINE_IMPORT_PLAYBACK / HOLD_VISUAL_ACCEPTANCE / HOLD_RUNTIME_CONTROLLER_GAMEPLAY_PERFORMANCE / HOLD_UC_PROMOTION / HOLD_PROFESSION_PROMOTION / ANIMAL_PR_3_DRAFT`
