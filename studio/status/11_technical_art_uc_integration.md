# 11 — Technical Art / UC Integration Specialist Status

Date: 2026-09-17
State: **PASS_GEOMETRY_UV_TANGENT_RENDER_DOMAIN_WITH_SKIN_KEYS_TO_CURRENT_UC_CODEC / 42_SOURCE_TO_84_RENDER_SPLIT_PRESERVED / UV_UNCHANGED / TANGENT_HANDEDNESS_FLIPPED_ACROSS_DET_MINUS_ONE / UC_GENERIC_RIGGED_CODEC_REUSED_UNCHANGED / HOLD_DEFORMED_TANGENT_EQUIVALENCE / HOLD_FINAL_UV_TEXTURE_LOOKDEV / HOLD_ENGINE_IMPORT_PLAYBACK / HOLD_RUNTIME_CONTROLLER_GAMEPLAY_PERFORMANCE / HOLD_UC_PROMOTION / ANIMAL PR #3 DRAFT**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/11_technical_art_uc_integration.md`, this specialist status, the newest Animal Geometry / Rigging / Animation constellation evidence, and current `axm-universal-creation` before changing implementation evidence.

`axm-create-me` remains **coordination only**. Product code and retained execution evidence remain in `mike-axiom-mir/axm-animal-design`. The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The previous full Technical Art status remains historical truth in Git at coordination commit `9de65669de90329306edfaf8c4f60e0e7984d575`, including the earlier exact-mirror two-joint / 41-key rigged-glTF proof. This activation advances that same existing Technical Art lane; it does not relabel or erase the earlier proof.

## Fresh constellation / duplication scan

The highest-leverage new owner-side handoff is Animal Geometry PR #20, exact head:

**`ca4bb8a2f144231f8755eacc980785d1807b79db`**

Gate:

**`PASS_BILATERAL_UV_TANGENT_BASIS_CANDIDATE__FINAL_UV_VISUAL_TRANSPORT_HELD`**

Geometry now owns a structural UV / explicit-normal / explicit-tangent render domain for the exact-mirror selected-003 forelimbs. It preserves the 42-source-vertex / 80-triangle source while exposing **84 render vertices** because UV seams, cap/side splits and pole tangent identity require a larger render-attribute domain. The source-to-render map is explicit and deterministic.

Rigging PR #22 separately exercises that Geometry basis under deformation. That lane owns structural deformed tangent-frame observation and is not duplicated here. Technical Art therefore selected only the missing receiving boundary: transport Geometry's exact 84-vertex attribute domain through the existing skin/key GLB boundary and current UC generic receiver without collapsing it back to 42 vertices.

Existing Animal Technical Art PR #3 remains the correct implementation home. No duplicate PR was opened.

## Selected bounded gap

Question:

> Can Geometry's exact 84-vertex UV/normal/tangent render domain coexist with the already-owned RIGHT elbow skin weights and 41 authored Animation keys in one GLB, while preserving the explicit Animal -> UC handedness boundary and being accepted by current UC's unchanged generic rigged-glTF codec?

This is deliberately a **receiver/transport proof**, not a UV generator, tangent generator, rig author, animation author, lookdev system or whole-animal exporter.

## Current UC inspected

Current `axm-universal-creation` proof pin:

**`2a798836378d47a787221597aa8fece0fd637e6a`**

Consumed generic module:

`capabilities/platform-hands/shared/asset-hands/rigged-gltf-codec.js`

Exact Git blob:

**`b1f2e68bb6c6800af5496decc95a8044d141edc9`**

The generic receiver remained sufficient. **No UC product code changed.** No Animal UV, topology, weighting, tangent or motion policy was promoted into UC.

## Existing Technical Art lane advanced

Repository: `mike-axiom-mir/axm-animal-design`

Existing draft PR: **#3 — `Technical Art: prove explicit Animal surfaces -> UC GLB bridge`**

Branch: `studio/uc-surface-bridge-001`

Exact tested Technical Art head:

**`4649d144841fbd1f3f43e9c7deb6f37b91fbd93d`**

Added receiver-side tooling only:

- `src/axm_animal_design/uc_rigged_tangent_bridge.py`;
- `tools/build_uc_rigged_tangent_bridge_evidence.py`;
- `tests/test_uc_rigged_tangent_bridge.py`;
- `.github/workflows/uc-rigged-tangent-bridge.yml`.

The workflow rebuilds Geometry's exact owner basis and Animation's exact owner frames from pinned owner heads before Technical Art transport. Technical Art does not copy or silently regenerate Geometry's UV/tangent policy.

## Smallest reusable transport contract

1. Require exact Geometry, Rigging, rig-donor, Animation and UC identities plus exact Geometry/UC module blobs.
2. Rebuild Geometry's exact owner evidence first and require its PASS.
3. Preserve source domain `42 vertices / 80 triangles` and render domain `84 vertices / 80 triangles` with the exact `render_source_indices` map.
4. Copy `TEXCOORD_0` unchanged from Geometry.
5. Transform normal and tangent XYZ as ordinary directions through the established Animal -> UC basis `M`.
6. Because that basis has determinant `-1`, transform glTF tangent handedness as **`target_w = det(M) * source_w = -source_w`** so `w * cross(N,T)` remains the transformed source bitangent.
7. Reverse triangle winding for the handedness change.
8. Duplicate the existing 42-source-vertex `smoothstep-v0` skin joints/weights **only through Geometry's exact source->render map**; do not invent render-domain weights independently.
9. Preserve the existing handedness-aware animation rotation-axis rule `det(M) * M * source_axis` and the 41 already-authored keys.
10. Emit one GLB primitive containing `POSITION`, `NORMAL`, `TANGENT`, `TEXCOORD_0`, `JOINTS_0`, `WEIGHTS_0` together.
11. Decode the emitted GLB bytes and require an exact float32 payload round-trip before asking current UC's generic codec to inspect it.
12. Fail closed on render-domain collapse, owner tangent-hand drift and UC codec-blob drift.

## First run — retained failure and repair

First exact attempt:

**`35164096268 — UC rigged UV tangent bridge evidence` — FAILURE**

All exact checkouts, identity gates, Technical Art tests, Geometry owner rebuild and Animation owner rebuild passed. The Technical Art packer then failed with `KeyError: 'color'`: it had incorrectly assumed the already-converted UC material key while the source Animal material contract correctly owns `base_color`.

The failure remains retained. The repair did **not** alter Geometry, Materials or UC schemas and did not weaken a gate. Technical Art now preserves the Animal source material contract and maps its existing `base_color` directly to glTF `baseColorFactor` at the transport boundary.

## Exact successful result

Scoped result:

**`PASS_ANIMAL_GEOMETRY_UV_TANGENT_RENDER_DOMAIN_WITH_SKIN_KEYS_TO_CURRENT_UC_CODEC`**

Dedicated workflow:

**`35164270917 — UC rigged UV tangent bridge evidence` — SUCCESS**

Exact retained identities/findings:

- Technical Art head: `4649d144841fbd1f3f43e9c7deb6f37b91fbd93d`;
- Geometry head: `ca4bb8a2f144231f8755eacc980785d1807b79db`;
- Geometry basis module blob: `ba0b4e620f132413606177358e47bd32ae4d4965`;
- Geometry basis digest: `b980dac912b685fc5a94e4b97f5db0a49745711c369322753b63dd968c801058`;
- Animation head: `1a8c929ce4372c4b1b1f29e9ac4cadd0cc26ac48`;
- Rigging head: `4acd9286140dd008f2a4f01ff513912497313e4f`;
- rig-plan donor: `04760112deb81a8d145226fe7ee02923107c9916`;
- UC head: `2a798836378d47a787221597aa8fece0fd637e6a`;
- UC rigged-codec blob: `b1f2e68bb6c6800af5496decc95a8044d141edc9`;
- source domain: `42 vertices / 80 triangles`;
- render domain: **`84 vertices / 80 triangles`**;
- skin joints: `2`;
- animation channels / keys: `1 / 41` over `1.0 s`;
- decoded GLB attribute payload: `PASS_EXACT_FLOAT32_PAYLOAD`;
- maximum expanded authored-key position residual versus Animation owner frames: **`8.007841300544171e-08 m`** against a `1e-06 m` gate;
- emitted GLB size: **`11,148 B`**;
- emitted GLB SHA-256: **`ecb122e3274929c3d99bc8e29a472aaa2657bcb16b13331a4f1972bb6ec6b493`**;
- UC inspection: `pass=true`, `84` vertices, `80` triangles, `2` joints, normalized weights PASS, joint indices PASS, `41` animation frames, CPU deformation `pass=true` and `changed=true`;
- UC product modified: `false`.

The same run rebuilt Geometry and retained its owner-side observations, including `42 -> 84` source/render vertices, `80` triangles, naive cylindrical U span `0.9`, seam-aware maximum U span `0.10000000000000009`, and bilateral tangent residual `0.0`.

Technical Art test discovery is green at **25 tests**, including explicit tangent-W handedness and render-domain-collapse controls.

## Fail-closed controls

- **84 -> 83 render-domain collapse:** rejected with `Geometry source/render vertex-count contract drift`.
- **owner tangent-handedness mutation:** owner basis digest changes from `b980dac9...` to `c01f9ff1...` and is rejected by the exact owner digest gate.
- **UC receiver drift:** exact codec blob must remain `b1f2e68b...` or the proof fails.

## Retained artifact

Artifact:

- ID: **`10474385703`**;
- name: `animal-current-uc-rigged-uv-tangent-4649d144841fbd1f3f43e9c7deb6f37b91fbd93d`;
- files: `17`;
- size: **`47,385 B`**;
- GitHub archive SHA-256: **`7fc2a7f5d745da593e8762efa98e13661f84a057b1eb60921d576c366e71d7bb`**.

The archive was downloaded and independently rehashed to the same SHA-256. It retains the GLB, Technical Art receipt, current-UC inspection, exact repository/head/blob identities, Geometry owner basis + receipt, and Animation owner receipt + all 41 owner frames.

## Authority / truth boundary

- Geometry owns source topology, the `42 -> 84` source/render split, UVs, explicit normals, tangents and their structural basis evidence.
- Rigging owns the joint plan, weighting semantics and separate deformed tangent-frame structural observation.
- Animation owns clip timing and authored owner-frame positions.
- Technical Art owns only the explicit coordinate/handedness, skin duplication-through-owner-map, GLB packing and receiving proof.
- UC owns only the generic rigged-glTF receiving/inspection codec.
- Materials / Visual QA / Art Direction own final textured/tangent-space shaded appearance acceptance.

This activation does **not** prove final texture UV placement, texel density, texture maps/lookdev, tangent-space normal-map shaded appearance, deformed tangent-frame equivalence, continuous animation interpolation equivalence, whole-animal/four-joint export, target-engine import/playback, runtime/controller/gameplay/performance, UC promotion, Profession Fabric promotion, CANON or production readiness.

## Four-root gate

- **Truth:** the material-key failure is retained; exact owner heads/blobs/digests, exact source/render domains, byte-decoded GLB payload and non-claims are explicit.
- **Agency / non-domination:** Geometry, Rigging, Animation and UC keep their own authority; Technical Art does not regenerate or centralize their domain semantics.
- **Continuity:** the previous skinned-key proof remains a historical rollback point; this activation adds the UV/tangent render-domain layer on the same PR rather than rewriting it.
- **Wisdom before speed:** one missing receiver contract was repaired; no premature whole-animal exporter or UC abstraction was introduced.

## Current state

`PASS_GEOMETRY_UV_TANGENT_RENDER_DOMAIN_WITH_SKIN_KEYS_TO_CURRENT_UC_CODEC / TECHNICAL_ART_HEAD_4649D144 / GEOMETRY_HEAD_CA4BB8A2 / 42_SOURCE_TO_84_RENDER_VERTICES / 80_TRIANGLES / TWO_JOINT_SKIN / 41_AUTHORED_KEYS / TANGENT_W_FLIPS_ACROSS_DET_MINUS_ONE / EXACT_FLOAT32_GLB_PAYLOAD_ROUNDTRIP / MAX_OWNER_POSE_RESIDUAL_8.007841300544171E-08_M / CURRENT_UC_2A798836_GENERIC_CODEC_UNCHANGED / HOLD_DEFORMED_TANGENT_EQUIVALENCE / HOLD_FINAL_UV_TEXTURE_LOOKDEV / HOLD_ENGINE_IMPORT_PLAYBACK / HOLD_RUNTIME_CONTROLLER_GAMEPLAY_PERFORMANCE / HOLD_UC_PROMOTION / HOLD_PROFESSION_PROMOTION / ANIMAL PR #3 DRAFT`
