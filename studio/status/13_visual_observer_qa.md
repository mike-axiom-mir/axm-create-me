# 13 — Visual Observer / QA Specialist Status

Date: 2026-09-16
State: **PASS_CURRENT_WORLD_OBJECT_MATERIAL_FAMILY_VISUAL_READABILITY_GATE / OBJECT SCALE + FOOTPRINT CUE + NATURE QA + INNER LID + TARGET PERF HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/13_visual_observer_qa.md`, the current Visual-QA status, newest Art Direction / Materials status, and current completed PR evidence across the design constellation before selecting one bounded gate.

`axm-create-me` remains **coordination only**. Visual QA changed no Map, Object, Nature, Building, Weather, Animal, Character, Runtime, Universal Creation, Profession Fabric or gameplay implementation.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh constellation / duplication scan

The most consequential completed unverified visual claim is the **current-world Object base five-surface material family** on Map Environment PR #24 exact head `6575cc38db9f0f62b14a82b352d8582edf89856d`.

Why this gate was selected:

- Environment has a real Godot `17 states × 2 cameras × 2 Weather modes = 68` retained-frame receiving proof for the exact Object material family.
- 3D Art Direction has already preferred this exact family under `PASS_ART_DIRECTION_CURRENT_WORLD_OBJECT_MATERIAL_FAMILY_PREFERENCE_011`, but explicitly held independent Visual QA.
- The material delta is larger and more consequential to Object readability than the newer `161 / 106` pixel Map footprint cue. The footprint cue is now attribution-clean at Environment head `2755dd3b275de9e62c933bd5d0653ddf9aa6fbcd`, but remains a separate later visual decision rather than a reason to skip the base material gate.
- Object Materials' newer inner-lid source-identity rebind is provenance-only in its retained contexts: its 12 renders are byte-identical to the previous review. That is useful but less consequential than the current-world base-material change.
- Character shoulder work still retains nonzero sampled self-intersections after the latest stitch-edge repair/rebind, so stronger Character deformation acceptance remains premature.
- Animal bilateral source/deformation evidence is structurally newer, but its right-side chain still has separate Geometry/Animation/visual dependencies; it does not outrank a ready current-world 68-frame visual handoff.
- The previous Weather two-tap result remains truthfully held behind `FAIL_TEMPORAL_SMOOTHING_ATTRIBUTION__STATIC_OPACITY_ATTENUATION_CONFOUND`; no attribution-clean successor was silently inferred here.

No duplicate Materials, Environment, Runtime, Art-Direction, Geometry, Rigging or VFX implementation lane was opened.

## Exact reviewed identity

Repository: `mike-axiom-mir/axm-map-design`

PR: **#24 — `Environment: converge Weather variant with exact Object source`**

Exact Object-material current-world head:

`6575cc38db9f0f62b14a82b352d8582edf89856d`

Exact fixed parent:

`72d4128b602e27c886a0731ddd670ec8c14aaa7e`

The parent already contains the current Building segmentation receiving state, Nature woody/foliage family and inherited Map Object footprint context. This review treats those as **fixed comparison context only**; it does not independently accept Nature materials or the footprint cue.

Exact Object source authority:

`mike-axiom-mir/axm-object-design@d3fa10a270faae7925811f44f03381fe5c5d0215`

Exact Object material authority consumed by Environment:

- Materials head `c85517446a769e0d5f880fc0e9e32f47124f7b5e`;
- material profile SHA-256 `dc200229d6c25fa84063aa51f66103abc022efa54b2167e4432a5b47fc40360c`;
- exact host geometry remains `468 vertices / 812 triangles`;
- five current-world roles are `shell_coating`, `service_dark`, `hardware_steel`, `rubber_guard`, `interface_orange`;
- utility-module `module_housing` and the newer inner-lid experiment are excluded.

## Retained evidence independently obtained

Candidate Environment artifact:

- ID `10466065113`;
- size `6,925,693 B`;
- GitHub SHA-256 `87dd366302e94b5a6f8241e110e9629c2d81a0d7321197b14a52b860642fd519`;
- independently downloaded and rehashed to the exact same digest;
- retained `exact-head.txt = 6575cc38db9f0f62b14a82b352d8582edf89856d`.

Exact parent artifact:

- ID `10463255035`;
- size `6,852,056 B`;
- SHA-256 `a4dbc0e2b8ef6f16bb846d0f639b7935b414ddfe4222463f397d11a16cfc0a45`;
- independently downloaded and rehashed identically;
- retained `exact-head.txt = 72d4128b602e27c886a0731ddd670ec8c14aaa7e`.

Visual QA independently compared **all 68 exact parent/candidate frame pairs**.

## Exact all-frame reproduction

The Object material change is static, localized and attribution-clean across the entire retained dynamic sequence.

### `path_eye`

Across all `17 states × 2 Weather modes`:

- exactly `1,850 / 792,000` pixels change by more than 1 LSB in every pair;
- fixed bounding box `(300,425)-(366,454)`;
- the binary >1-LSB delta mask is bit-identical across all 34 pairs;
- changed-pixel median luma moves approximately `130.655 -> 47.368`;
- `1,845 / 1,850` changed pixels darken by more than 1 LSB;
- `738 / 1,850` changed pixels are below luma 32 in the candidate.

### `elevated_oblique`

Across all `17 states × 2 Weather modes`:

- exactly `632 / 792,000` pixels change in every pair;
- fixed bounding box `(543,295)-(578,319)`;
- the binary >1-LSB delta mask is bit-identical across all 34 pairs;
- changed-pixel median luma moves approximately `140.655 -> 57.877`;
- all `632 / 632` changed pixels darken by more than 1 LSB;
- `219 / 632` changed pixels are below luma 32 in the candidate.

The substantial value reduction is therefore real and not hidden.

## Readability / hierarchy check

The darker values do **not** reproduce the earlier Building-infill failure in this exact receiving context.

The key difference is background relation: the west Object sits predominantly against the light receiving ground rather than the near-black world background. On the exact candidate:

- local 2–3 px comparison-ring median luma is about `181.47` around the `path_eye` changed footprint and `168.40` around `elevated_oblique`, versus changed-material medians `47.37` and `57.88`;
- on the exact changed-material boundary, median minimum adjacent luma separation is about `113.23` in `path_eye` and `105.18` elevated;
- only about `1.03%` of `path_eye` changed-boundary samples fall below 10 luma separation, none fall below 5; elevated has none below 10.

These are exact-scene diagnostics, not universal acceptance thresholds.

Direct enlarged inspection of states `0 / 8 / 16` in both cameras shows:

- the case silhouette remains clearly separated from the light ground;
- the darker shell/service body reads as one compact industrial body rather than a pale proof proxy;
- steel hardware remains visibly brighter than the body and still explains the lid/front construction;
- the orange interface remains a small subordinate accent rather than becoming the scene focal point;
- no new material-edge halo, culling hole, clipping artifact, shading discontinuity, frame-specific disappearance or mode-specific Object corruption is visible.

Within a fixed Object inspection window, switching the inherited Weather thin-line/source-width presentation changes **0 Object-window pixels >1 LSB in every state and both cameras**. The material read is therefore not being rescued or hidden by the Weather-width presentation in this proof.

The historical source-scale/readability question remains separate: this PASS does not claim the Object is large enough, only that the five-surface material family does not introduce a new readability defect at the exact retained scale/context.

## QA verdict

### Environment technical receiving PASS — preserved

`PASS_CURRENT_WORLD_OBJECT_MATERIAL_FAMILY_STRUCTURE`

`PASS_CURRENT_WORLD_OBJECT_MATERIAL_FAMILY_TARGET_HOST`

Nothing in this review overturns Environment's source/receiving evidence.

### Visual QA — PASS

**`PASS_CURRENT_WORLD_OBJECT_MATERIAL_FAMILY_VISUAL_READABILITY_GATE`**

Exact meaning:

> In the exact retained current-world parent context and two fixed `1100×720` cameras, the Object five-surface material family produces a strong intentional darkening but preserves readable silhouette and material-role hierarchy across all 68 retained states/modes. Bright hardware remains differentiated, the orange interface remains subordinate, and no state- or Weather-mode-specific visual defect is reproduced.

This is a visual defect/non-regression PASS for the exact material-family delta, not a general production-material approval.

## Handoffs

### Environment / Map PR #24

This exact Object-material parent is now independently Visual-QA green in its fixed-camera scope.

The newer Environment head `2755dd3b275de9e62c933bd5d0653ddf9aa6fbcd` deliberately isolates the Map-owned west Object footprint cue on top of this preferred material context. That cue remains a **separate** Art Direction / Visual-QA decision and receives no automatic acceptance from this material PASS.

### 3D Art Direction

`PASS_ART_DIRECTION_CURRENT_WORLD_OBJECT_MATERIAL_FAMILY_PREFERENCE_011` is compatible with this QA result. No whole-case brightening or material flattening is requested from QA.

### Object Materials

The exact base five-role family gains fixed-camera current-world QA support. The newer source-owned inner-lid `service_dark` review remains separate and is not accepted by this result.

### Nature

The woody/foliage parent remains fixed context only. This Object-material PASS does not close Nature's independent Visual-QA gate.

### Runtime / Optimization

Environment's exact proof-host material-family delta remains `+8 draw calls / +8 objects` in both fixed cameras, with no primitive, observed buffer-memory or texture-memory delta. This QA result makes no target-device performance decision and requests no material-role collapse on proof-host counters alone.

## Continuity from previous QA result

The prior Weather result remains historical truth:

- `PASS_TWO_TAP_RETAINED_FRAME_SPATIAL_NONCORRUPTION`;
- `FAIL_TEMPORAL_SMOOTHING_ATTRIBUTION__STATIC_OPACITY_ATTENUATION_CONFOUND`;
- perceptual smoothness and authored 32 Hz remain held.

This Object-material review does not rewrite or supersede that dynamic Weather boundary.

## Explicit non-claims

This activation does **not** establish:

- final Object source scale or transform acceptance;
- final Map Object footprint-cue preference;
- independent Nature woody/foliage Visual-QA acceptance;
- Object inner-lid material adoption;
- utility-module material adoption;
- articulation, keeper/lever mechanism or dynamic material behavior;
- UVs, textures, decals, edge wear, baked normal/AO or physically measured coating correctness;
- arbitrary camera/FOV/resolution/renderer/display equivalence;
- target-device FPS/CPU/GPU/VRAM/memory/thermal/battery acceptance;
- collision, navigation, gameplay or interaction readiness;
- CANON, production/game readiness, or Visual Observer / QA mastery.

## Root gate

- **Truth:** the strong material darkening is retained as measured evidence rather than softened into a story; the PASS is based on exact scene/background separation and all-frame review.
- **Agency / non-domination:** Object retains source/material authority, Map retains receiving ownership, Art Direction retains preference ownership, Runtime retains cost authority, and QA changes no implementation.
- **Continuity:** the Nature parent, Object material successor, newer footprint-cue successor, inner-lid experiment and prior Weather temporal result remain separate exact identities.
- **Wisdom before speed:** close the larger base-material readability gate before judging the tiny footprint cue or adding another visual variable.

The four AXM roots remain the merge gate.
