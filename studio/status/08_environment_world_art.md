# 08 — Environment / World Art Specialist Status

Date: 2026-09-17
State: **ACTIVE / OBJECT SELECTED-ROUGHNESS MULTISCALE CURRENT-WORLD REVIEW SURFACE IMPLEMENTED / EXACT RETAINED A-B REHASHED AND RECOMPUTED / CI QUEUED / ENVIRONMENT ADOPTION HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/08_environment_world_art.md`, the prior Environment status, and fresh Art Direction, Materials, VFX / Atmosphere, Runtime / Optimization, Visual QA, Map, Object, Nature, Building and Weather lane state.

`axm-create-me` remains **coordination only**. All implementation/evidence code for this activation is in the owning Map repository. This status file is the only `axm-create-me` change.

The four AXM roots remain the internal merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh constellation / duplication scan

Environment did **not** open a new PR.

- Map Environment PR #24 remains the existing Environment receiving lane.
- Map PR #43 already owns compact-east Nature current-world receiving. Runtime explicitly reports that its target-host verification is currently red and therefore does not stack downstream adoption/optimization on that lane. Environment does not duplicate or bypass it.
- Nature Runtime PR #12 already owns the compact-east single-blend-shape CPU/buffer tradeoff. Environment does not reimplement it.
- Building indexing/primitive-scaling and Technical-Art transport lanes remain separate and already active.
- Weather/VFX ownership remains unchanged.
- Object Runtime PR #30 already owns the 512x512 scalar-roughness L8 representation/storage question. Environment does **not** create a competing L8 receiver.
- Art Direction and independent Visual QA are currently occupied on other exact review surfaces and have not returned a final verdict on the Map selected-roughness candidate. Environment does not self-approve appearance.

The highest-leverage non-duplicated Environment gap is therefore **reviewability** of the exact selected-roughness change in the real world. The full-scene signal is valid but deliberately tiny at the two fixed composition cameras; owner review should not require changing cameras, lights, scale or the material itself just to inspect it.

## Owning lane

Repository: `mike-axiom-mir/axm-map-design`

Existing draft Environment PR: **#24 — `Environment: converge Weather variant with exact Object source`**

Branch: `studio/environment-weather-variant-object-convergence-001`

Current exact Map head after this activation:

`0ae90977c4aaf3301398c30765a447b3d4a922ec`

PR state at inspection: **OPEN / DRAFT / UNMERGED / MERGEABLE**.

Exact previous selected-roughness source head remains:

`d8a1d950ed5f21e6ad356404f46407c99c160017`

No source scene/material state from that head is changed by this activation.

## Bounded improvement — derived multiscale current-world review surface

Added:

- `contracts/environment_object_selected_roughness_multiscale_review.json`;
- `tools/environment_object_selected_roughness_multiscale_review.py`;
- `docs/ENVIRONMENT_OBJECT_SELECTED_ROUGHNESS_MULTISCALE_REVIEW_001.md`;
- `.github/workflows/environment-object-selected-roughness-multiscale-review.yml`.

Reusable rule:

`SUBTLE_WORLD_SURFACE_CHANGE_REVIEW_SHOULD_PRESERVE_FULL_SCENE_AUTHORITY_AND_ADD_DERIVED_MULTI_SCALE_INSPECTION_WITHOUT_REAUTHORING_CAMERA_LIGHT_OR_ASSET_STATE`

The exact retained Godot full frames remain authority. The new review surface derives, for representative states `00 / 08 / 16`, both retained presentation modes and both fixed contexts:

1. parent full current-world frame;
2. candidate full current-world frame;
3. candidate Object-neighborhood crop;
4. parent local selected-surface crop;
5. candidate local selected-surface crop;
6. explicitly diagnostic `x32` absolute-RGB-difference crop.

This creates **12 deterministic review sheets** without authoring a new camera, light, asset transform, Object scale, UV, texture value, Weather state, Nature state, Building state or adoption state.

The amplified difference panel is a diagnostic aid only; it is not the desired look and never replaces the original full frame.

## Exact retained evidence lineage independently checked this activation

Exact UV0-only parent:

- Environment head `4eed6da68f746ca2849c89fa88533f82bc836b26`;
- artifact `10501901585`;
- archive SHA-256 `a3e3c3adc794877d84f3735f4f4ff69e3120843588da5c8aaa259d7ab7b965e3`.

Exact selected-roughness real-world candidate:

- Environment head `d8a1d950ed5f21e6ad356404f46407c99c160017`;
- workflow `35235994153` — SUCCESS;
- artifact `10502588586`;
- archive SHA-256 `60c1e589e3e1c3a7dab5430b55ef59542dd7ca35dad8b13653d165c79eee3a1e`.

Both exact artifacts were downloaded again during this activation and independently rehashed to those exact archive digests.

The 68 parent/candidate retained PNG pairs were also independently recomputed in this activation:

- exact dimensions: `1100 x 720`;
- matched frames: `68 / 68`;
- raw changed pixels total: **6,426**;
- pixels above 1 LSB total: **1,666**;
- maximum RGB-channel delta: **7 LSB**;
- `path_eye`: exactly **159 raw / 43 >1-LSB pixels per frame**, raw bbox `x=314..342, y=440..448` in every retained pair;
- `elevated_oblique`: exactly **30 raw / 6 >1-LSB pixels per frame**, raw bbox `x=549..559, y=307..313` in every retained pair.

This independently reproduces the prior selected-roughness report rather than merely trusting its receipt.

The inherited real scene is still the already-proven Building + Nature + indexed Object + visible footprint cue + Weather composition. The source candidate report retains all **1,224** Weather projected-width observations with maximum residual `0.00974698571769128 px` under the existing `0.05 px` gate.

## Fail-closed review boundary

The new verifier pins the two exact observed Object-local raster envelopes above. A deliberate negative-control mode injects an unrelated visible pixel change outside the Object envelope and must be rejected with:

`selected roughness raster change escaped localized Environment envelope`

This is an attribution/provenance gate for this exact retained A/B, **not** a universal aesthetic threshold.

## CI state — truth boundary

Dedicated workflow:

**`35241369800 — Environment Object selected roughness multiscale review`**

Current state at this status update: **QUEUED**.

Therefore Environment does **not** claim the new workflow PASS yet. The implementation, exact-artifact rehash and independent 68-frame recomputation are complete, but the GitHub-hosted negative control / 12-sheet artifact gate is still pending execution.

Expected bounded state if the exact queued workflow passes unchanged:

`PASS_CURRENT_WORLD_OBJECT_SELECTED_ROUGHNESS_MULTI_SCALE_REVIEW_SURFACE__APPEARANCE_ACCEPTANCE_HELD`

`environment_adoption=false` remains fixed regardless.

## Ownership / handoff

Map PR #24 records this activation and pending gate in comment **`5717107679`**.

Current owner boundaries remain:

- **Environment / Map:** derived full-scene + neighborhood + local review composition only;
- **Object / Materials:** selected roughness meaning/value remains source Materials authority;
- **Technical Art:** exact selected-face UV/texture transport remains TA authority;
- **Runtime:** representation/storage/device acceptance remains Runtime authority; the L8 result is not silently adopted here;
- **Art Direction / independent Visual QA:** appearance preference/acceptance remains held for their review;
- **Nature / VFX:** compact-east Map PR #43 remains separate and is not stacked into this pass;
- **Building / Weather:** unchanged;
- **UC / Profession Fabric:** unchanged;
- **CANON / production readiness:** not claimed.

## Continuity

Previous Environment state at exact Map head `d8a1d950ed5f21e6ad356404f46407c99c160017` remains valid historical evidence:

`PASS_CURRENT_WORLD_OBJECT_SELECTED_ROUGHNESS_APPEARANCE_CANDIDATE_REVIEW_READY__ENVIRONMENT_ADOPTION_HELD`

This activation does not silently rewrite that proof or its rollback. The exact UV0-only receiver at `4eed6da68f746ca2849c89fa88533f82bc836b26` remains rollback/default while owner acceptance is held.

## Explicit non-claims

This activation does **not** prove:

- Art Direction or Visual QA preference;
- that the subtle roughness effect should be stronger or weaker;
- target-device Runtime performance/VRAM/FPS/thermal behavior;
- L8 current-world adoption;
- compact-east Nature current-world correctness;
- any new camera, lighting, dressing, Object-scale or gameplay decision;
- arbitrary surface-field review thresholds;
- CANON;
- production/game readiness;
- Environment / World Art mastery.

## Four-root gate

- **Truth:** exact retained archives were rehashed and the 68-frame raster facts were recomputed; queued CI is named queued, not green.
- **Agency / non-domination:** Environment improves reviewability without taking Materials, TA, Runtime, Art or QA authority.
- **Continuity:** the exact full-scene evidence and UV0-only rollback remain intact; derived crops do not replace original frames.
- **Wisdom before speed:** no material/light/camera retune is used to make a subtle effect easier to judge, and no new adoption stacks on the red compact-east current-world lane.

The four AXM roots remain the merge gate.
