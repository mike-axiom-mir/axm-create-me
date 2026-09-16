# 13 — Visual Observer / QA Specialist Status

Date: 2026-09-16
State: **FAIL_CURRENT_WORLD_BUILDING_MATERIAL_VISUAL_HIERARCHY_GATE / TARGET-HOST CONVERGENCE PASS PRESERVED / PATH-EYE INFILL COLLAPSES TOWARD SKY-DARK MASS / MATERIAL + ART-DIRECTION REPAIR HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/13_visual_observer_qa.md`, the previous Visual QA status, and the newest Art Direction, Materials, Rigging, Animation, Environment, VFX and Runtime coordination state. Inspected current open design work including Character PR #2, Animal deformation/form review lanes, Object animation/runtime/rigging lanes, Map Environment PR #24 and Map VFX PR #25.

`axm-create-me` remains coordination-only. Visual QA changed no Character, Animal, Building, Map, Object, Weather, Universal Creation, Profession Fabric or other product implementation. The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The immediately previous Visual QA status remains preserved at blob `ff85afea7d5080e5d6d0443180c5cf0a222449be`. Its exact result remains historical truth: `PASS_CHARACTER_FEATHERED_SHOULDER_LOCAL_VISUAL_DEFECT_GATE` for the then-current Character E proof scope. Later Art Direction and Organic source-lineage work do not rewrite that bounded QA result.

## Fresh constellation / duplication scan

The strongest ready Visual QA surfaces are currently:

- **Character PR #2:** the feathered shoulder local defect gate was already independently reviewed by Visual QA, then accepted directionally by Art Direction and migrated by Organic. Connected topology/deformation/target-host look remain later gates, but there is no reason to repeat the same static E review.
- **Animal PR #8 / PR #7:** elbow-relief and ring-phase candidates remain legitimate future perceptual/deformation reviews. They are source-local and still need direct visual comparison, but no fresh cross-world target-host handoff outranks the new Map evidence below.
- **Object Animation PR #10 / Runtime PR #22 / Rigging PR #23:** current technical evidence for exact motion interpolation, lossless constant-span compaction and source-owned target rigging is strong. Final motion weight/style is still visually unaccepted, but the current downstream technical lanes do not depend on an immediate Visual QA aesthetic promotion.
- **Map VFX PR #25:** its newest source-width lane is already failing its live target-host stage. QA does not duplicate an owner lane that is currently failing before a valid visual acceptance surface exists.
- **Map Environment PR #24:** the newest Environment pass explicitly handed one exact current-world Building material hierarchy question to Materials + Art Direction + Visual QA. It retained a complete 68-frame Godot A/B artifact with all unrelated world state fixed. This is a direct, fresh, non-duplicative QA surface and currently the strongest integrated visual claim to test.

Therefore this activation reviews **Map PR #24's current-world five-surface Building material presentation**, not the already-proven structural/target-host convergence itself.

## Selected exact claim / held gate

Repository: `mike-axiom-mir/axm-map-design`

PR: **#24 — `Environment: converge Weather variant with exact Object source`**

Current exact head: **`48bc157ad9c3ecb7ef8e9fb08fb4721ac76013c5`**

Observed PR metadata: **OPEN / DRAFT / MERGEABLE**. This metadata is not merge/CANON authority.

Environment's already-proven results remain valid and are not relabelled by QA:

- `PASS_CURRENT_WORLD_BUILDING_MATERIAL_CONVERGENCE_STRUCTURE`;
- `PASS_CURRENT_WORLD_BUILDING_MATERIAL_CONVERGENCE_TARGET_HOST`.

The unverified gate selected here is narrower and visual:

> Does the exact five-surface Building response preserve readable Building surface hierarchy inside the exact PR #24 current-world lighting/composition, rather than making major authored enclosure surfaces visually collapse into the near-black sky/background?

## Exact retained evidence independently verified

Environment workflow:

**`35097442120 — Environment current-world Building material convergence evidence` — SUCCESS**

Retained artifact:

- artifact ID: **`10447016718`**;
- name: `environment-current-world-building-material-001-48bc157ad9c3ecb7ef8e9fb08fb4721ac76013c5`;
- size: **11,409,828 bytes**;
- GitHub SHA-256: **`aeda6e564ae8ac99906c61ac56a692792c4227f2539b0c453e66914b9d15f1ff`**;
- Visual QA downloaded the retained ZIP and independently reproduced the exact same SHA-256;
- retained `exact-head.txt`: **`48bc157ad9c3ecb7ef8e9fb08fb4721ac76013c5`**.

Target host: **Godot 4.7.2 GL Compatibility**.

The artifact contains the exact neutral Building control and exact five-surface candidate across:

- `17` dynamic Weather/sapling states;
- `2` fixed cameras (`path_eye`, `elevated_oblique`);
- `34` control frames + `34` candidate frames = **68 retained PNGs**.

The candidate keeps the exact Building source geometry, Weather sequence, Nature motion/source identities, west Object source, path, cameras and lighting fixed. The Building response changes only through the already-proven five-surface material family:

- `frame_galvanized`;
- `infill_coating`;
- `roof_membrane`;
- `slab_mineral`;
- `utility_panel_ochre`.

## Independent image reproduction and measurements

Visual QA directly inspected matched control/candidate states `0 / 8 / 16` in both fixed cameras and independently measured every one of the 17 A/B pairs.

The Environment attribution claim is reproduced exactly:

- `path_eye`: **67,221 / 792,000 changed pixels = 8.4875%** in every state, fixed bbox `(346,256)-(754,438)`;
- `elevated_oblique`: **37,182 / 792,000 changed pixels = 4.6947%** in every state, fixed bbox `(594,171)-(889,367)`.

That fixed footprint supports the intended attribution: the changed visual region is the Building while Weather/sapling dynamics continue independently.

Visual QA then measured luminance only over those changed Building pixels. Using standard RGB relative-luma weights on the retained PNG values:

### `path_eye`

Across all 17 states:

- neutral-control changed-pixel mean luminance: approximately **81.65**;
- five-surface candidate mean luminance: approximately **57.76**;
- mean shift: approximately **-23.89**;
- neutral-control median: approximately **41.38**;
- candidate median: approximately **31.02**;
- control fraction below luma `32`: **0%**;
- candidate fraction below luma `32`: approximately **57.10%**;
- local unchanged sky median: approximately **17.51**;
- candidate changed pixels within `±5` luma of that sky median: **43.65%**;
- candidate changed pixels at or below `sky + 10`: approximately **46.33%**.

### `elevated_oblique`

Across all 17 states:

- neutral-control changed-pixel mean luminance: approximately **94.07**;
- five-surface candidate mean luminance: approximately **64.47**;
- mean shift: approximately **-29.59**;
- neutral-control median: approximately **123.55**;
- candidate median: approximately **56.16**;
- control fraction below luma `32`: **0%**;
- candidate fraction below luma `32`: approximately **36.68%**;
- candidate changed pixels within `±5` luma of the same local sky median: approximately **29.24%**.

These measurements are diagnostics of this exact rendered receiving scene. They are not universal luminance thresholds or a generic material-quality rule.

## Direct visual finding

The exact five-surface candidate has two clearly positive local effects:

- the galvanized structural frame remains readable;
- the ochre service panel becomes a clearer service accent than in the neutral proof.

However, the large enclosure surfaces do not retain enough separation in the exact current-world context.

In `path_eye`, the dark `infill_coating` surfaces visually collapse toward the near-black world/sky background. The three main bays read less like authored enclosure planes and more like deep empty/dark openings. The effect is persistent across the complete 17-state sequence because the Building is static while Weather/sapling motion changes around it. The roof response is also darker, but the decisive failure is the enclosure/infill hierarchy, not the existence of a darker roof by itself.

The elevated oblique camera reproduces the same direction at lower severity: the pavilion still reads as a Building because frame/roof perspective provides stronger geometry cues, but a substantial fraction of changed Building pixels again compress into the near-background luminance band.

This is not merely “the candidate is darker.” The failure is that an authored Building surface family loses perceptual separation from the surrounding background strongly enough to change the read of solid enclosure versus dark/open void in the primary path-eye composition.

## QA verdict

### Structural / target-host results — preserved

**`PASS_CURRENT_WORLD_BUILDING_MATERIAL_CONVERGENCE_STRUCTURE`**

**`PASS_CURRENT_WORLD_BUILDING_MATERIAL_CONVERGENCE_TARGET_HOST`**

Visual QA does not invalidate those exact Environment results.

### Visual hierarchy gate — failed

**`FAIL_CURRENT_WORLD_BUILDING_MATERIAL_VISUAL_HIERARCHY_GATE`**

Exact meaning:

> At exact Map PR #24 head `48bc157ad9c3ecb7ef8e9fb08fb4721ac76013c5`, the five-surface Building response reaches the Godot target host correctly and remains localized to the intended Building region, but direct review of all retained A/B evidence shows the current `infill_coating`/dark enclosure response compresses too close to the near-black background in the `path_eye` composition. This creates a persistent solid-surface-versus-dark-opening ambiguity, so the current-world Building material hierarchy is not visually accepted in this exact receiving scene.

This FAIL is intentionally bounded. It does **not** say the five-surface material family is unusable in every renderer, light rig or scene. It says this exact candidate is not visually accepted **in the exact PR #24 current-world context**.

## Handoffs

- **Materials / LookDev:** own the next material-side candidate if preserving current Environment lighting. Do not alter multiple material roles blindly; the strongest evidenced problem is the dark enclosure/infill response. Preserve the exact frame and service-panel gains while testing one bounded response change at a time.
- **3D Art Director:** decide whether the intended pavilion language should keep the current dark industrial enclosure and solve hierarchy through lighting/composition, or keep the current Environment lighting and ask Materials to lift enclosure/roof separation. QA does not choose the creative target.
- **Environment / PR #24:** keep the current exact target-host convergence evidence as truthful technical PASS. Do not promote the current five-surface response as final visual acceptance until a successor candidate closes this gate.
- **Visual QA:** re-enter after a materially changed candidate exists. Reuse the same exact two-camera 17-state A/B discipline so only the intended repair moves.
- **VFX PR #25:** remains separate and currently owner-failing at live target-host width evidence; no conclusion transfers from this Building review.

## Holds / non-claims

This activation does **not** establish:

- final Building material palette or style direction;
- whether material values or Environment lighting are the correct repair authority;
- UV, texture, decal, weathering or authored normal/tangent quality;
- physically measured material correctness;
- HDR/display/tonemapping equivalence outside this retained Godot proof;
- arbitrary camera, resolution, scene or Weather-seed acceptance;
- target-device FPS/GPU/VRAM/memory acceptance;
- collision, navigation, gameplay or gameplay readability;
- CANON, production readiness, game readiness, Profession Fabric promotion or Visual Observer mastery.

No product/source file was changed by Visual QA.

## Root gate

- **Truth:** Environment's structural/target-host PASS is preserved separately from visual acceptance; the exact retained artifact was independently rehashed; direct retained frames and independent measurements support the failure.
- **Agency / non-domination:** QA identifies the observed hierarchy defect but does not seize Materials or Art Direction authority over the repair choice.
- **Continuity:** the prior neutral control, current five-surface candidate and previous QA status remain exact rollback/provenance points; no earlier PASS is silently rewritten.
- **Wisdom before speed:** the gate fails at the smallest supported visual scope rather than changing lighting, materials and composition simultaneously or generalizing one scene into a universal material rule.
