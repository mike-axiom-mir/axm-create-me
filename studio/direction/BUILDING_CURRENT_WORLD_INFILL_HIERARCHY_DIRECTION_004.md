# Building Current-World Infill Hierarchy Direction 004

Date: 2026-09-16
Status: **FAIL_CURRENT_WORLD_BUILDING_MATERIAL_HIERARCHY_AS_PRESENTED / KEEP_CURRENT_WORLD_LIGHTING + COMPOSITION FIXED / REQUEST ONE INFILL-ONLY MATERIAL RESPONSE CANDIDATE / PRESERVE FRAME + SERVICE-ACCENT GAINS / HOLD ROOF CHANGE ON FIRST REPAIR**

## Scope

This packet resolves the creative-authority question left open by the newest integrated Map evidence:

> The exact five-surface Building family reaches the current-world Godot scene correctly, but Visual QA now reproduces a solid-surface-versus-dark-opening ambiguity in the primary `path_eye` composition. Should the first repair change Environment lighting/composition or the Building material response?

Art Direction chooses the **material-side repair first**, while holding the current-world lighting, cameras, path, Weather, Nature, Object, Building geometry and composition fixed.

`axm-create-me` remains coordination-only. This packet does not modify Building, Map, Materials, Environment, Runtime, VFX, Universal Creation or Profession Fabric implementation.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Exact reviewed identities

### Current-world receiving evidence

Repository: `mike-axiom-mir/axm-map-design`

Environment PR #24: `Environment: converge Weather variant with exact Object source`

Exact current head:

`48bc157ad9c3ecb7ef8e9fb08fb4721ac76013c5`

Exact retained current-world material artifact:

- ID: `10447016718`;
- SHA-256: `aeda6e564ae8ac99906c61ac56a692792c4227f2539b0c453e66914b9d15f1ff`;
- Godot: `4.7.2`, GL Compatibility;
- evidence surface: `17` dynamic states × `2` fixed cameras × neutral/five-surface A/B = `68` retained frames.

Environment technical results remain valid:

- `PASS_CURRENT_WORLD_BUILDING_MATERIAL_CONVERGENCE_STRUCTURE`;
- `PASS_CURRENT_WORLD_BUILDING_MATERIAL_CONVERGENCE_TARGET_HOST`.

Art Direction does not reinterpret those technical PASSes as aesthetic acceptance.

### Building Materials source response

Repository: `mike-axiom-mir/axm-building-design`

Materials PR #3 exact current head:

`0c409a88c1952ca04934f9db47cb282db27b5c3c`

Exact material profile SHA-256:

`e8dd0c33b9b2aea108194af57a8fe8de39c7e67bb86109af6dbf3895f22c010b`

Current scalar roles relevant to this decision:

- `frame_galvanized`: albedo `#77838AFF`, metallic `0.68`, roughness `0.38`;
- `infill_coating`: albedo `#344047FF`, metallic `0.16`, roughness `0.68`;
- `roof_membrane`: albedo `#24282BFF`, metallic `0.02`, roughness `0.88`;
- `utility_panel_ochre`: albedo `#6F5A3AFF`, metallic `0.18`, roughness `0.62`;
- `slab_mineral`: albedo `#555A5DFF`, metallic `0.0`, roughness `0.92`.

These are exact current source-owned lookdev values. Art Direction is **not** prescribing a replacement hex/metallic/roughness triplet in this packet; Materials owns the bounded implementation candidate.

### Independent QA result

Visual Observer / QA verdict on the exact same current-world artifact:

`FAIL_CURRENT_WORLD_BUILDING_MATERIAL_VISUAL_HIERARCHY_GATE`

The technical convergence PASS is preserved. The failed visual gate is specifically the enclosure/infill hierarchy in the exact receiving scene.

Across all 17 `path_eye` states, QA measured the candidate changed-Building pixels at approximately:

- median luma `31.02`;
- `57.10%` below luma `32`;
- `43.65%` within `±5` luma of the unchanged local sky median (`~17.51`);
- `46.33%` at or below `sky + 10`.

The elevated-oblique view reproduces the direction at lower severity: approximately `36.68%` of changed pixels below luma `32` and `29.24%` within `±5` of the local sky median.

These are **scene diagnostics**, not universal art thresholds.

### Runtime cost now attached to the choice

Map Runtime PR #26 exact head:

`f2f719b2084a2df9340857658efb13c369b968aa`

Its exact proof-host comparison characterizes the current five-surface response as adding:

- `+12` draw-call counters;
- `+12` objects-in-frame counters;
- `+0` RenderingServer primitives;
- `+0 B` observed buffer memory;
- `+0 B` observed texture memory;

in both fixed cameras relative to the neutral one-surface proof.

This does not decide the visual direction. It means the current five-role look should not be protected merely because it is already implemented; its visual value must justify its receiving complexity.

## Continuity with previous Art Direction

`BUILDING_PAVILION_RECEIVING_LOOKDEV_REVIEW_002.md` previously accepted this refined five-surface family in the earlier, simpler Map PR #14 receiving scene and explicitly said **not to continue scalar micro-tuning unless independent QA or a materially richer representation exposes a new localized defect**.

That condition is now met.

The current world is materially richer than PR #14: exact Weather seed `44021`, moving Nature, exact Object source and the broader current-world receiving composition are now present together. Independent QA names a new localized defect in the enclosure response. Reopening one bounded scalar material question therefore preserves the previous decision rather than contradicting it.

The earlier service-panel repair remains successful and should be protected.

## Direct Art Direction observations

I reviewed the matched current-world neutral/five-surface montage and the exact QA diagnosis rather than treating luminance statistics as a substitute for visual judgement.

### `path_eye`

The five-surface candidate retains two useful improvements:

- the galvanized frame reads as a distinct manufactured structure;
- the muted ochre service panel remains a legible functional accent without becoming the scene's color destination.

The problem is the large enclosure mass behind and between those frame members. In the primary path-eye composition it falls too close to the surrounding near-black field. Several authored solid infill planes can therefore read as deep open/empty bays rather than enclosure surfaces.

That changes category/readability, not merely brightness. The pavilion's frame survives, but part of the building's intended solid-versus-open rhythm becomes ambiguous.

### `elevated_oblique`

The same dark compression is visible but the camera supplies stronger roof/frame perspective cues, so the pavilion remains easier to parse as a complete building. That weaker failure is useful evidence that the source silhouette itself is not the primary problem.

### What remains good

- The service-panel focal-weight repair from the earlier Art Direction packet remains good.
- The frame should remain the clearest manufactured layer.
- The industrial dark roof language remains viable; the roof itself is not the first evidenced repair target.
- No geometry change is justified by this visual gate.

## Art Direction decision

**`FAIL_ART_DIRECTION_CURRENT_WORLD_BUILDING_INFILL_HIERARCHY_004`**

**`KEEP_CURRENT_WORLD_LIGHTING_AND_COMPOSITION_FIXED_FOR_FIRST_REPAIR`**

**`REQUEST_ONE_INFILL_ONLY_MATERIAL_SEPARATION_CANDIDATE`**

**`PRESERVE_FRAME_AND_SERVICE_ACCENT_GAINS`**

**`HOLD_ROOF_CHANGE_ON_FIRST_REPAIR`**

Exact meaning:

> The current five-surface candidate is not visually accepted in the exact PR #24 current-world presentation because the authored infill/enclosure response can collapse toward the near-black background strongly enough to confuse solid surface with open void. The first repair should keep the accepted current-world composition and lighting fixed and change only the Building-owned `infill_coating` response. Do not change Environment lighting and Building materials in the same proof, and do not broaden the first repair into roof, frame, slab, service-panel, geometry or camera changes.

Why material-first:

1. QA localized the decisive defect to the enclosure/infill response rather than a global scene-exposure failure.
2. The current Environment scene already has strong exact multi-asset/Weather evidence; changing its light would perturb every other visual relationship and weaken attribution.
3. The previous service-panel source-owned material repair worked without a receiving-scene cheat.
4. A one-role response candidate is the smallest reversible experiment that can answer whether solid/open separation can be restored while preserving the established industrial language.

This is direction for the **next candidate**, not permission to promote any unrendered numeric tweak.

## Bounded successor target

Materials / LookDev should create one successor candidate that changes only `infill_coating` response while preserving:

- exact Building source geometry and component mapping;
- exact five material-role topology;
- `frame_galvanized` values;
- `roof_membrane` values on the first repair;
- `slab_mineral` values;
- `utility_panel_ochre` values;
- exact Map PR #24 path, cameras, lighting, Weather, Nature and Object state;
- Godot `4.7.2` GL Compatibility proof host for direct continuity.

Visual target:

- authored infill must read as **solid enclosure**, not deep empty/open bay, in `path_eye`;
- infill remains materially darker/quieter than the galvanized frame;
- infill remains less focal than the ochre service accent;
- the pavilion must retain the darker industrial hierarchy rather than flattening back toward the neutral proof;
- frame separation and service-panel readability must not regress.

Evidence target:

- rerun the same `17 × 2` current-world discipline so the repair is not judged on one lucky state;
- compare directly against the exact current five-surface candidate, not only the neutral proof;
- the existing scene-specific diagnostics (`below-32`, sky-near fraction, candidate median) should move in the direction of greater infill/background separation across the full sequence;
- **do not encode those current diagnostic values as generic acceptance thresholds**. Direct QA and Art Direction judgement remain required.

If one infill-only candidate cannot restore solid/open readability without destroying the dark industrial hierarchy, then and only then reopen the next variable—likely roof response or Environment lighting—as a separate proof.

## Lane isolation / avoid duplication

- **Materials / LookDev:** owns the successor scalar/material response candidate.
- **Environment / World Art:** keep the current exact light/composition fixed for the first repair; do not add a compensating light before the material-only question is answered.
- **Visual Observer / QA:** independently re-run the same exact visual hierarchy gate after a real successor candidate exists.
- **Runtime / Optimization:** do not merge/flatten material roles to win counters before the appearance to preserve is accepted. If the successor changes only scalar PBR values while the exact five-surface representation remains unchanged, the existing Runtime result stays historical truth for its exact candidate, but successor performance acceptance must not be silently inherited.
- **Geometry / Hard Surface:** no form/topology/source-mechanical change is requested from this gate.
- **VFX:** PR #25 currently owns its own source-width/live-host problem; no atmosphere change should be used to repair Building hierarchy.
- **Character / Animal / Object:** no result transfers to their current form/motion lanes.
- **UC / Profession Fabric:** one Building receiving-scene repair does not justify a generic contrast system, auto-lookdev policy or profession promotion.

## Non-claims

This packet does **not** establish:

- the exact successor `infill_coating` values;
- final Building palette or style;
- that material response is the only possible long-term solution;
- final roof response;
- final Environment lighting, exposure, grading or cinematography;
- a universal luma/contrast rule;
- physical material correctness;
- UV, texture, decal, weathering, normal or tangent quality;
- Building topology/source migration of Geometry PR #6;
- renderer equivalence outside the exact proof host;
- target-device performance, FPS, GPU time, VRAM, memory or batching acceptance;
- collision, navigation, gameplay or gameplay readability;
- CANON, production readiness, game readiness or Art Direction / Materials / Environment mastery.

## Four-root gate

- **Truth:** the earlier Art Direction PASS remains historical truth for the earlier Map PR #14 context; the newer integrated current-world QA failure is accepted rather than explained away. Technical convergence, visual acceptance and Runtime cost remain separate claims.
- **Agency / non-domination:** Art Direction chooses the visual target and isolates the next variable; Materials owns the candidate implementation, Environment owns scene lighting/composition, QA owns independent reproduction, Runtime owns performance evidence, and the roots remain the merge gate.
- **Continuity:** the frame, muted service panel, dark roof language, current-world scene and all exact source identities remain fixed while one infill response variable is challenged. No prior evidence is silently rewritten.
- **Wisdom before speed:** test one reversible material role before changing lighting, roof, geometry, renderer, texture complexity or scene composition together.

## Handoffs

### Materials / LookDev — Building PR #3

Produce one exact successor material profile/candidate that changes only `infill_coating`. Preserve the other four current role values for the first repair. Do not choose a value from this packet alone; render and compare it in the exact current-world receiver.

### Environment / Map PR #24

Keep the current exact world, cameras and lighting as the control receiving surface. Rebind only after Materials provides a distinct successor profile identity; do not solve this first pass with an Environment light tweak.

### Visual Observer / QA

On successor evidence, repeat the exact full-sequence review and answer the same narrow question: do authored infill planes remain visually solid and distinct from near-black world/background without sacrificing frame/service hierarchy?

### Runtime / Optimization

Keep the `+12` proof-host submission observation attached to the current exact five-surface candidate. Do not optimize the material-role count before the visually preferred representation is known, and do not claim successor performance equivalence without exact evidence.

### Geometry / Hard Surface / Procedural / Capability Cartography

No geometry, receiver, procedural grammar or source-migration decision changes from this Art Direction gate. Building topology migration remains its own exact dependency chain.
