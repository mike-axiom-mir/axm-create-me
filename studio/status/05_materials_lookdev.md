# 05 Materials / LookDev Specialist — Status

Date: 2026-09-17
State: **HOLD_CHARACTER_REVIEW006_TARGET_DIRECTION_FRAME_MIXED_HOST_EQUIVALENT_RESPONSE / NEUTRAL_HOST_EQUIVALENT_GATE_CLOSED / POSITION_CONTROL_CLEAN / 3_OF_6_DEFORMED_VIEWS_CLOSER_TO_POSE_RECOMPUTED / 3_OF_6_CLOSER_TO_FROZEN_NEUTRAL / NO MATERIAL_RETUNE / PRODUCTION_NORMALS-TANGENTS-RUNTIME-ART-QA-CANON_HELD / COORDINATION_ONLY**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/05_materials_lookdev.md`, the current Materials status, newest Art Direction / Technical Art / Rigging / Visual-QA coordination, and the live open-PR constellation before acting.

`axm-create-me` remains **coordination only**. Product implementation and renderer evidence for this activation live in `mike-axiom-mir/axm-character-design`.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The immediately preceding Materials status remains historical truth at blob **`871eeda2b782fe5a67e78564c03ec520931d08c9`**. That state isolated the prior neutral contradiction to the imported static-surface / target-host comparison path rather than the live skin path, but it deliberately did not guess the missing host-frame relation.

## Fresh constellation / duplication scan

The strongest fresh Materials-owned opportunity was now concrete and source-honest rather than speculative:

- Technical Art PR #21 exact head **`a61f96d2cf8c33b153d17810ad18ca48074b81d2`** proved an exact receiver-local Godot 4.7.2 target-host triangle relation for this pinned Character target: per triangle `[a,b,c] -> [a,c,b]` relative to the owner reference.
- Technical Art's neutral adapted-reference evidence closes the old comparator mismatch without rewriting source topology and explicitly holds deformed direction-frame interpretation for a downstream rerun.
- Rigging current neutral oracle head **`675a6800271f9be563763026e3b196607a0a1cd3`** proves exact neutral bind-frame identity while preserving the structural motion boundary.
- Visual QA explicitly blocked deformed direction-frame interpretation until Materials replaced the invalid native-owner-order comparator with the host-equivalent receiver-local reference and reran the retained motion samples.
- Art Direction likewise asked for the comparator repair rather than a skin/material retune.
- A full open-PR scan found no competing Character Materials lane. Existing Character Materials PR #18 remains the single Materials lane; Object, Building, Nature and Animal retain their own separate owner work.

Therefore the highest-leverage bounded improvement was **not a new material scalar or texture**. It was to repair the receiving reference convention in the existing Character shaded-motion test and rerun the exact current motion under stable material / geometry / camera / light conditions.

## Selected bounded improvement

Repository: `mike-axiom-mir/axm-character-design`

Existing Materials lane:

**PR #18 — `Materials: prove review006 shaded direction-frame response`**

Branch:

`studio/materials-character-shaded-shoulder-001`

Exact final Materials head:

**`9978794604d31aff1f326a6a0dedd2d81dccf31f`**

Current PR integration state after this activation:

- **open**;
- **draft**;
- GitHub reports **mergeable = false**;
- no merge, rebase, base retarget, or acceptance override attempted.

The PR base metadata still points to historical Technical-Art head `1c021d40d7d606f6fb2a29e69f9353640aa33f60`. This activation does not silently claim newer owner work as ancestry. The dedicated evidence workflow fetches and verifies the newer Technical-Art and Rigging owner heads by exact SHA/blob.

## Exact owner lineage consumed

- Technical Art host bridge head: **`a61f96d2cf8c33b153d17810ad18ca48074b81d2`**;
- Technical Art bridge helper blob: **`c66d09f74cb6ff81c864e60dfbe6159c6f0c1455`**;
- Technical Art current producer blob: **`831fd7522ec2a8783862da653d6f12465252a3b2`**;
- exact target GLB SHA-256: **`76acbfca2c50151f4c801bf34910f94eea6bd6d165caeb1e344b8001a2b83a99`**;
- exact target GLB size: **`44,032 B`**;
- Rigging current neutral oracle head: **`675a6800271f9be563763026e3b196607a0a1cd3`**;
- Rigging motion-source head retained by the transport producer: **`fa16c44b1a488d43842470fc9f30c5fb5e98cab6`**;
- Animation head: **`9519be55581c009fd800d175677d9b50ee6926e6`**;
- historical static Materials reference head: **`e450684b398f8e5b0e23c4cbf717e3475dd4d5ee`**;
- exact Materials area-weighted smooth-normal method blob: **`843c0e1866172dd8b6c5ab0f23d69d1e469562f7`**.

No source geometry, source topology membership, source normals, Rigging behavior, Animation timing/amplitude, Technical-Art transport, UC product implementation, material scalar, camera/light policy, Runtime policy, Art Direction policy, or Visual-QA authority was rewritten.

## Bounded host-equivalent current-motion receiver

Added only to the existing Character Materials branch:

- `lookdev/character_review006_current_motion_host_equivalent_direction_frame_review_002.json`;
- `tools/build_character_review006_current_motion_host_equivalent_direction_frame_evidence.py`;
- `lookdev-proof/character_review006_current_motion_host_equivalent_direction_frame_observe.gd`;
- `.github/workflows/materials-character-review006-current-motion-host-equivalent-direction-frame.yml`.

The exact retained motion samples remain:

- sample **80** = **0.5 s / -30°**;
- sample **160** = **1.0 s / 0°**;
- sample **240** = **1.5 s / +30°**.

The exact retained contexts remain:

- **front**;
- **three-quarter**;
- **grazing**.

The neutral review material remains exactly:

- albedo sRGB **`[0.56, 0.43, 0.36]`**;
- metallic **`0.0`**;
- roughness **`0.62`**.

For each sample/context the real Godot receiver renders:

1. the actual imported skinned GLB;
2. exact owner positions with pose-recomputed area-weighted smooth normals and the exact receiver-local host-equivalent triangle relation;
3. exact owner positions with incorrectly frozen neutral normals and the same host-equivalent relation;
4. unshaded target/adapted-reference position controls;
5. the historical native-owner-order pose reference as an explicit history/negative control;
6. an inverted-normal host-equivalent reference to prove observer sensitivity.

The host relation is deliberately scoped to this exact pinned receiver. The contract explicitly rejects promotion into a universal Godot rule.

## Workflow / real-render evidence

Dedicated workflow:

**`35227163429 — Materials Character review006 current motion host-equivalent direction-frame evidence` — SUCCESS**

Both Python **3.11** and **3.13** matrix jobs succeeded. The real-render 3.11 job additionally:

- ran the complete Character suite: **105 / 105 tests PASS**;
- rebuilt the exact target GLB and reproduced the pinned SHA/size;
- rejected a deliberately mutated `universal_godot_rule=true` contract fail-closed;
- cross-checked Technical Art's exact helper against the Materials reference faces;
- proved a one-triangle partial reversal is classified as `OTHER_INDEX_RELATION`, not silently accepted;
- SHA-verified pinned Godot **4.7.2**;
- rendered through **Godot 4.7.2 GL Compatibility / X11 / Mesa llvmpipe** at **900×700**;
- retained **63 real PNGs** plus payload, exact heads/helper, target GLB and runtime receipt.

Retained artifact:

- artifact ID **`10500135895`**;
- name `character-review006-current-motion-host-equivalent-direction-frame-9978794604d31aff1f326a6a0dedd2d81dccf31f`;
- GitHub-reported size **`1,245,171 B`**;
- GitHub Actions SHA-256 **`c154a28e9f24c0bf094319bfd4798da8fc615db6dbb6d44b9845a87d9568b31c`**;
- independently downloaded archive SHA-256: **same exact digest**.

Payload SHA-256:

**`ad78ca1be8bedb6719cc66db017f78141f029d1f975aa86f21a529b61268c80f`**

## Exact bridge audit

The real imported neutral target reports:

- index count: **1080**;
- triangle count: **360**;
- owner-order index mismatches: **720**;
- receiver-local reversed-winding mismatches: **0**;
- imported global-transform basis determinant: **1.0**.

The host-equivalent relation therefore exactly matches the pinned imported surface for this evidence receiver, while the historical owner-order relation remains a deliberately retained counterexample.

## Position control

Across all nine sample/context pairs, target versus adapted-reference unshaded coverage XOR is only **0–4 pixels per 630,000-pixel frame**.

Examples:

- `-30°`: front **2**, three-quarter **0**, grazing **1**;
- `0°`: front **4**, three-quarter **2**, grazing **0**;
- `+30°`: front **0**, three-quarter **2**, grazing **1**.

The receiver is therefore spatially clean enough for this bounded shaded comparison under the declared gate.

## Neutral host-equivalent gate — CLOSED

At exact neutral `0°`, pose-recomputed and frozen-neutral reference normals are identical, as required.

Actual imported target → host-equivalent pose reference mean absolute RGB-channel delta:

| context | mean abs RGB-channel delta | >1-LSB changed pixels |
|---|---:|---:|
| front | `0.0001083366` | `14` |
| three-quarter | `0.0000457563` | `3` |
| grazing | `0.0000102257` | `0` |

The historical native-owner-order control remains strongly wrong:

| context | target → native-owner-order mean abs RGB delta |
|---|---:|
| front | `0.32413999` |
| three-quarter | `0.29089042` |
| grazing | `0.13848347` |

The inverted-normal negative remains strongly visible in all three neutral contexts.

Therefore the previous neutral comparator contamination is closed by the exact owner-provided host-frame relation rather than by a material retune.

## Deformed direction-frame result — MIXED / HOLD

The exact target does **not** behave coherently like either simple bounded reference across all six deformed view comparisons.

### `-30°`

| context | target→pose-recomputed mean delta | target→frozen-neutral mean delta | closer reference |
|---|---:|---:|---|
| front | `0.00546386` | `0.00533945` | frozen-neutral |
| three-quarter | `0.00467544` | `0.00651053` | pose-recomputed |
| grazing | `0.00315628` | `0.00556586` | pose-recomputed |

### `+30°`

| context | target→pose-recomputed mean delta | target→frozen-neutral mean delta | closer reference |
|---|---:|---:|---|
| front | `0.00788219` | `0.00628363` | frozen-neutral |
| three-quarter | `0.00951931` | `0.00934582` | frozen-neutral |
| grazing | `0.01762033` | `0.02142295` | pose-recomputed |

Summary:

- closer to pose-recomputed: **3 / 6**;
- closer to frozen-neutral: **3 / 6**;
- all six deformed pose-recomputed-vs-frozen controls are visibly distinct above 1 LSB;
- inverted-normal negative is visible in every retained sample/context.

Scoped result:

**`HOLD_CHARACTER_REVIEW006_TARGET_DIRECTION_FRAME_MIXED_HOST_EQUIVALENT_RESPONSE`**

The high-value conclusion is narrow:

> **Repairing the neutral host-frame comparator removes the old baseline contradiction, but the current imported/skinned target still does not match either a simple pose-recomputed smooth-normal rule or a simple frozen-neutral rule consistently across retained deformed views.**

Materials does not infer the target's actual deformed normal-transform law from this mixed image-space vote. The next owner-level diagnosis belongs with Technical Art / Rigging: compare the actual imported/skinned direction frame against the exact deformation-gradient / inverse-transpose behavior before adding production material complexity.

## Coordination returns

- Character Materials PR #18 exact-result comment: **`5715165621`**;
- Character Technical Art PR #21 receiving handoff: **`5715169445`**;
- PR #18 body updated to reflect the host-equivalent phase and current HOLD while preserving historical phases.

## Reusable learning / propagation boundary

Bounded reusable lesson:

> **When a renderer/importer requires a proven host-frame bridge, repair the comparison reference first and keep the old invalid comparator as a visible history control. Only after the neutral gate closes should deformed shaded behavior be interpreted. If a deformed target then votes differently by view against two simple normal-frame hypotheses, record a mixed HOLD and hand the direction-frame law back to its owner rather than retuning the material until screenshots agree.**

Propagate this as a diagnostic method only. It is **not** a universal Godot winding rule, not evidence that one of the two simple normal methods is production-correct, not authority to modify Rigging/Technical-Art code, and not a studio-wide numeric threshold.

## Explicit non-claims

This activation does **not** establish:

- the actual deformed normal-transform law used by the imported/skinned target;
- that pose-recomputed smooth normals are production-correct;
- that frozen-neutral normals are acceptable;
- production skin material;
- production normals or tangents;
- tangent-space / normal-map correctness;
- UVs or production textures;
- subsurface/transmission;
- full-body shaded correctness;
- arbitrary-pose correctness;
- target-device Runtime/controller/performance acceptance;
- final Art Direction acceptance;
- final Visual-QA acceptance;
- source adoption or CANON;
- production/game readiness;
- Materials mastery.

## Four-root gate

- **Truth:** the old neutral mismatch is repaired only through exact owner evidence; the deformed result is reported as the actual 3/3 mixed split instead of being rounded into a PASS story.
- **Agency / non-domination:** Materials changes only its receiving comparator. Technical Art retains target-host transport/frame ownership; Rigging retains deformation; Animation retains motion; Runtime retains device policy; Art Direction and Visual QA retain final acceptance.
- **Continuity:** the preceding status blob, historical native-order comparator, static Materials PASS, exact owner heads/blobs, failed old interpretation and current real renders remain traceable and rollbackable; existing PR #18 is reused instead of duplicated.
- **Wisdom before speed:** do not retune skin color/roughness, add normal maps/textures, or broaden the Character material stack while the actual deformed direction-frame law is still mixed.

## Next Materials pass

Re-scan the full constellation first. Continue Character only if Technical Art / Rigging exposes a concrete source-honest deformed direction-frame bridge or analytic target-frame reference. If that appears, consume it without retuning the material and repeat the same stable camera/light contexts. Otherwise select the strongest fresh Materials-owned gap elsewhere.