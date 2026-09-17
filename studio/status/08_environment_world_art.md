# 08 — Environment / World Art Specialist Status

Date: 2026-09-17
State: **PASS_CURRENT_WORLD_OBJECT_SELECTED_ROUGHNESS_APPEARANCE_CANDIDATE_REVIEW_READY / ENVIRONMENT_ADOPTION_HELD**

## Authority / continuity

`axm-create-me` remains **coordination only**. Product code, receiving contracts, Godot observers, verifier logic and retained render evidence remain in their owning repositories.

The four AXM roots remain the internal merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The immediately preceding status is preserved in Git history at blob `a5579d7391960c186912f03792b068a01cfc5e8b`. It recorded the selected-roughness full-world candidate as implemented but still queued. The older UV0 receiving PASS remains preserved at Map head `4eed6da68f746ca2849c89fa88533f82bc836b26` and remains the rollback/default receiver.

## Fresh constellation / duplication scan

Environment stayed on the existing `mike-axiom-mir/axm-map-design` PR **#24**, branch `studio/environment-weather-variant-object-convergence-001`.

Fresh status inspection showed a separate active Nature compact-east current-world lane on Map PR #43 plus independent Building, Weather, source-owner, Technical-Art and Runtime work. Environment therefore did **not** duplicate Nature, Weather, Building, Hard Surface, Materials, Technical Art or Runtime authorship.

The highest-leverage open Environment gap remained the previous status's explicit next step: render the exact Materials-selected Object roughness field only through the already source-segmented and exact-UV0-bound service faces as a separate real assembled-world appearance candidate.

Exact final Map Environment head:

`d8a1d950ed5f21e6ad356404f46407c99c160017`

PR #24 state after the final proof: **OPEN / DRAFT / UNMERGED / MERGEABLE**.

## Bounded Environment improvement

The candidate remains entirely in `axm-map-design`, not `axm-create-me`:

- `contracts/environment_object_selected_roughness_current_world.json`;
- `environment-proof/atmosphere_current_world_object_selected_roughness_observe.gd`;
- `tools/environment_object_selected_roughness_current_world.py`;
- `docs/ENVIRONMENT_OBJECT_SELECTED_ROUGHNESS_CURRENT_WORLD_001.md`;
- `.github/workflows/environment-object-selected-roughness-current-world.yml`.

Reusable receiving rule:

**`SPATIAL_MATERIAL_FIELD_MAY_ENTER_CURRENT_WORLD_REVIEW_ONLY_AFTER_EXACT_SURFACE_AND_UV_IDENTITY__APPEARANCE_AND_RUNTIME_ACCEPTANCE_REMAIN_SEPARATE`**

Exact pinned field / owners:

- Object source remains source-owned; no geometry rewrite;
- Materials authority head: `0515a2d5ad2c7a1eb545f2b7b327b7367530dfca`;
- selected field: 512×512 scalar roughness;
- scalar R8 SHA-256: `b8d13c07f9b71278042b0d42d44b84579a3f327c6adf6723cae4c8c8f06dd38e`;
- serialized PNG SHA-256: `57cf746a9a7e0615884fe3c45c6c4df677c2bd0631def61b3ccb1684daa26949`;
- observed R8 range: 153..183;
- unique scalar values: 31;
- Technical Art authority head: `1bcdbae786e02f3ca46a89e4e0ff608d74f364b4`;
- exact selected-surface spec SHA-256: `1f87a7b287c7caa138deee64b687d0aba67a3485ddeae6f80a38ebd906a86aec`.

The selected field is bound only to:

- `lid_inner_service_surface`, receiver surface index 1;
- `front_service_panel_outer_service_surface`, receiver surface index 3.

The candidate reuses the current seven-surface receiver's geometry positions, generated normals, index streams and exact UV0 arrays. Current per-face albedo and metallic are preserved. Non-selected Object surfaces receive no roughness texture. Technical-Art proof positions are not promoted to Object source/world authority.

Observed selected-face receiver state:

- lid inner: UV0 count 16, parent roughness ~0.54, metallic ~0.42;
- front outer: UV0 count 8, parent roughness ~0.66, metallic ~0.18;
- roughness texture channel: RED;
- candidate scalar multiplier: 1.0 on both;
- base color and metallic preservation: PASS on both.

## Truthful repair trail

The first exact-head run is retained as a failure rather than rewritten as green.

**`35235433905 — Environment Object selected roughness current-world evidence` — FAILURE** at Map head `cc0d9911accba7c4cdf38c2fd9c8e21ff2dfed32`.

All donor downloads/identity checks were green, but Godot rejected the child observer before rendering because two child constants redeclared names already inherited from the earlier roughness-readiness observer:

- `SELECTED_ROUGHNESS_RULE`;
- `SELECTED_ROUGHNESS_SCALAR_SHA256`.

The repair changed only child-local symbol names to `SELECTED_APPEARANCE_RULE` and `SELECTED_FIELD_SCALAR_SHA256`. Exact values, donor identities, selected texture bytes, scene composition, Weather tolerance, visual classification, negative control and adoption policy were unchanged.

Failed retained artifact:

- ID `10502607843`;
- size `42,752 B`;
- SHA-256 `29de17d4b8f8ed00e33c43a2f48ecc95cd6f1af86d4177ed4a35be30ced1b03d`.

## Exact final result

Dedicated repaired workflow:

**`35235994153 — Environment Object selected roughness current-world evidence` — SUCCESS**

Exact Map head:

**`d8a1d950ed5f21e6ad356404f46407c99c160017`**

Scoped result:

**`PASS_CURRENT_WORLD_OBJECT_SELECTED_ROUGHNESS_APPEARANCE_CANDIDATE_REVIEW_READY__ENVIRONMENT_ADOPTION_HELD`**

Binding result:

**`PASS_CURRENT_WORLD_OBJECT_SELECTED_ROUGHNESS_APPEARANCE_CANDIDATE_BOUND__ENVIRONMENT_ADOPTION_HELD`**

`environment_adoption = false` remains mandatory.

The deliberate negative control mutates the selected-field PNG and is rejected fail-closed on exact PNG identity before review can pass.

## Real assembled-world evidence

Pinned Godot **4.7.2 GL Compatibility** rerendered the full retained **17-state / 68-frame** current world containing Building + Nature + indexed Object + visible footprint cue + Weather.

Versus the exact UV0-only parent `4eed6da68f746ca2849c89fa88533f82bc836b26`:

- matched frames: **68**;
- changed frames: **68 / 68**;
- raw changed pixels across all frames: **6,426**;
- pixels above 1 LSB across all frames: **1,666**;
- maximum RGB channel delta: **7 LSB**.

The change is tightly localized and static across the 17 Weather states, supporting attribution to the intended Object roughness field rather than broader world drift.

Per rendered frame:

- `path_eye`: 159 raw changed pixels, **43 pixels >1 LSB**, max 7 LSB, bounding box `x=314..342, y=440..448`;
- `elevated_oblique`: 30 raw changed pixels, **6 pixels >1 LSB**, max 2 LSB, bounding box `x=549..559, y=307..313`.

Each retained frame is 1100×720 / 792,000 pixels, so the >1-LSB change remains very small but genuinely resolved:

- path-eye: about **0.00543%** of a frame;
- elevated-oblique: about **0.000758%** of a frame.

Environment therefore records a **review-ready appearance candidate**, not a visual acceptance decision.

## Weather and multi-asset continuity

All inherited Weather source-width continuity checks remain green:

- projected-width measurements: **1,224**;
- maximum residual: **`0.00974698571769128 px`**;
- tolerance: **`0.05 px`**.

No Building, Nature, footprint, route, camera, light or Weather authorship was changed for the roughness candidate.

## Proof-host Runtime observation

Against the exact UV0-only parent, every matched proof-host observation reports:

- draw-call delta: **0**;
- object-count delta: **0**;
- primitive delta: **0**;
- buffer-memory delta: **0 B**;
- texture-memory delta: **+1,398,100 B**.

That exact +1,398,100 B matches Object Runtime PR #30's independently measured complete 512×512 RGBA8 + mip-chain roughness allocation. Runtime PR #30 separately proves that the same scalar source can be represented as L8 at 349,525 B, saving 1,048,575 B / 75% in its bounded Runtime proof.

Environment does **not** silently adopt L8 or transfer Runtime's local proof into current-world/device acceptance. The clean next Runtime handoff is to test that exact L8 representation in this same full-world receiver if Runtime chooses to advance it.

## Retained evidence

Final artifact:

- ID **`10502588586`**;
- name `environment-object-selected-roughness-current-world-001-d8a1d950ed5f21e6ad356404f46407c99c160017`;
- size **5,797,603 B**;
- GitHub SHA-256 **`60c1e589e3e1c3a7dab5430b55ef59542dd7ca35dad8b13653d165c79eee3a1e`**;
- independent download/re-hash reproduced the exact same digest.

The archive retains exact-head binding, donor receipts, the candidate runtime receipt, all 68 candidate frames, verifier report/log and negative-control log.

## Decision / rollback / handoffs

The exact UV0-only untextured receiver at Map head `4eed6da68f746ca2849c89fa88533f82bc836b26` remains the rollback/default Environment receiver.

The textured selected-roughness receiver is now **review-ready only**. It is not default and not adopted.

Recorded handoffs:

- Map Environment PR #24: pending-scope comment `5716325674`; final SUCCESS comment **`5716408095`**.
- Object Materials PR #6: pending comment `5716327621`; final downstream result **`5716410388`**.
- Object Technical Art PR #28: pending comment `5716330035`; final downstream result **`5716412759`**.
- Object Runtime PR #30: pending comment `5716334419`; final current-world cost handoff **`5716414957`**.

Art Direction and independent Visual QA retain final appearance acceptance. Runtime retains storage/device acceptance. No duplicate Art/QA or Runtime lane was opened by Environment.

## Reusable composition learning

> **Once exact source-surface identity and exact UV receiving identity exist, a spatial material field can be tested safely as a separate assembled-world candidate: reuse the proven mesh/UV receiver, bind only the authorized surfaces, preserve rollback, measure the localized raster and real renderer cost, and keep appearance and representation acceptance with their proper owners.**

This remains a bounded Environment receiving lesson and is not automatically promoted into Universal Creation or global CANON from one Object case.

## Explicit non-claims

This activation does **not** establish final selected-roughness aesthetic preference, final Materials adoption, L8 current-world adoption, target-device GPU/VRAM/FPS/thermal behavior, final atlas/storage choice, final Object readability at all scales, Building production adoption, Nature naturalness, Weather preference/physical correctness, collision/navigation/gameplay suitability, CANON, production/game readiness, or Environment / World Art mastery.

## Four-root merge gate

- **Truth:** the first parser failure remains recorded; the repaired exact-head workflow is independently green; visual and memory deltas are measured rather than narrated; mutated texture identity fails closed.
- **Agency / non-domination:** Object owns source surfaces; Materials owns roughness meaning; Technical Art owns UV/channel/transport evidence; Environment owns assembled-world receiving/composition evidence; Runtime owns representation/device acceptance; Art/QA own appearance judgment.
- **Continuity:** existing Map PR #24, the exact UV0-only rollback, the accepted 17-state world and all Building/Nature/Object/Weather identities are preserved.
- **Wisdom before speed:** the field advanced only from UV readiness to a review-ready appearance candidate. Environment explicitly stopped before default adoption or Runtime/Art/QA substitution.
