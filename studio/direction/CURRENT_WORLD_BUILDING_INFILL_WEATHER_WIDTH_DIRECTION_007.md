# 3D Art Direction — Current-world Building infill + Weather width direction 007

Date: 2026-09-16
State: **PASS_ART_DIRECTION_CURRENT_WORLD_BUILDING_INFILL_WEATHER_WIDTH_COMBINED_PREFERENCE**

## Scope

This packet is coordination-only. It does not move product implementation into `axm-create-me`.

Exact reviewed receiving identity:

- repository: `mike-axiom-mir/axm-map-design`;
- PR: `#24 — Environment: converge Weather variant with exact Object source`;
- exact Environment head: `5b9b55ec67e31655f51d1acc67284816067e5be6`;
- exact parent Environment head: `0d8b2279ecbba47b9696a951db9513883fbef6c5`;
- exact Building Materials donor: `225cf82a61ec1512553fda2785ca101a54a6bd30`;
- exact Building source authority: `57f66b1245812f0c3d402232a046b86c0b5c72d8`;
- exact VFX source-width donor: `15a03b7c3ba3aaa7c0475ca1a3091c15581f559b`;
- candidate Building material profile: `0c4834bf0fc9c0b7aa1a053f35f307b64596e13f305287ca3018b6182b2f6fe9`;
- exact Environment composition digest: `e6cea4098c4946dcfa80573d3e30d6d07a1e7c7b4c037b5962eeb3105ac8dfe1`.

The only Building material change relative to the exact Environment parent remains `infill_coating.albedo #344047FF -> #59666DFF`. Weather source width is the already-preferred source-authored presentation; density, opacity, color, streak length, seed, layout and unrelated world state remain held.

## Exact evidence reviewed

Environment workflow `35117140030 — Environment Building infill + Weather source-width composition evidence` succeeded on Godot 4.7.2 GL Compatibility.

Retained artifact:

- artifact ID `10454469590`;
- size `50,494,030 bytes`;
- expected SHA-256 `12d1a61e54913a47ca4f40383deac83c3be48dcbf66da1ea96aa76e0f19ad7ae`;
- independently downloaded and rehashed during this Art Direction activation to the same SHA-256;
- retained exact head `5b9b55ec67e31655f51d1acc67284816067e5be6`.

The artifact contains the exact parent archive, exact Building material donor archive, structural payload, Godot log/runtime receipt, target-host report and all `17 × 2 × 2 = 68` retained frames.

Environment owner results remain owner-scoped:

- `PASS_CURRENT_WORLD_BUILDING_INFILL_WEATHER_WIDTH_STRUCTURE`;
- `PASS_CURRENT_WORLD_BUILDING_INFILL_WEATHER_WIDTH_TARGET_HOST`.

Independent Visual QA result:

- `PASS_CURRENT_WORLD_BUILDING_INFILL_WEATHER_WIDTH_VISUAL_INTEGRATION_GATE`.

QA reproduced the one-variable Building change across all 34 matched source-width frames:

- `path_eye`: exactly `29,492` changed pixels/frame, bbox `(384,290)-(715,407)`;
- `elevated_oblique`: exactly `11,289` changed pixels/frame, bbox `(640,199)-(872,326)`;
- candidate changed-pixel median luma `39.8086`;
- candidate changed pixels below luma 32: `0%` in both retained contexts.

QA also reproduced that the Weather source-width visual-delta mask is bit-identical before and after Building material integration across all 34 camera/state pairs, with `0` XOR-mask pixels in every comparison.

## Direct Art Direction observation

Art Direction directly inspected the exact retained combined frames for states `0 / 8 / 16` in both fixed cameras, comparing thin-line control against source-width candidate.

### `path_eye`

The repaired infill remains clearly legible as solid enclosure instead of near-black/open bays. The galvanized frame remains the strongest structural layer. The roof stays quieter and darker. The muted ochre service panel remains the warmer accent.

The source-width Weather streaks add useful atmospheric presence without obscuring the pavilion, route or vegetation. They remain sparse and subordinate to the primary environment forms.

No new combined contrast wash, halo, panel-edge discontinuity, obvious streak wedge or focal inversion was observed in the inspected retained states.

### `elevated_oblique`

The same hierarchy survives the wider world view. The pavilion remains readable at distance, the route stays dominant as a navigation/composition axis, vegetation remains secondary scene structure, and the Weather-width candidate remains a light atmosphere layer rather than a competing focal system.

The material repair and Weather-width preference coexist cleanly in the inspected states. The combined scene still reads as a proof-world rather than final production art; this PASS is therefore about the exact bounded hierarchy and integration decision, not overall art completion.

## Art Direction decision

### PASS

**`PASS_ART_DIRECTION_CURRENT_WORLD_BUILDING_INFILL_WEATHER_WIDTH_COMBINED_PREFERENCE_007`**

**`PREFER_EXACT_COMBINED_ENVIRONMENT_HEAD_5B9B55EC_AS_CURRENT_FIXED_CAMERA_VISUAL_REFERENCE`**

Exact meaning:

> In the exact retained current-world proof at Map Environment head `5b9b55ec67e31655f51d1acc67284816067e5be6`, the accepted `#59666DFF` Building infill repair remains visually successful when composed with the accepted source-authored Weather-width presentation. The pavilion hierarchy remains clear and the atmosphere remains subordinate. This exact combined head is the current preferred fixed-camera visual reference for later integration work unless a newer evidence-backed successor is explicitly reviewed.

This closes the prior combined-world Art Direction hold for this exact proof surface.

## Handoffs

### Environment / Map PR #24

Keep this exact combined head and evidence as the current preferred visual reference. No further material or atmosphere retune is requested by Art Direction before another explicit visual defect is returned.

Do not silently fold unrelated lighting, Nature, Object-scale, topology or runtime changes into this PASS.

### Building Materials

The `#59666DFF` infill successor remains accepted in the exact combined world. No further scalar adjustment is requested here. Preserve the predecessor and insufficient first attempt as historical evidence.

### VFX / Weather

The source-authored width presentation remains the preferred fixed-state atmosphere representation in this combined world. This does not repair or relabel the separate wall-clock cadence FAIL.

### Runtime / Technical Art

Runtime PR #29 and the VFX cadence work may pursue representation/timing repair, but this visual PASS must not be converted into a performance PASS. If a future runtime representation is adopted into this combined world, preserve the exact fixed-state visual result or return any visible delta for Art Direction / QA review.

### Visual Observer / QA

The exact combined QA PASS is accepted. Re-open only if a newer Environment, material, lighting, Weather representation, camera or runtime presentation changes the visual surface.

### Character / Animal

Do not inherit this PASS. Character connected shoulders remain blocked by a sampled neutral self-intersection defect, while Animal balanced elbow relief remains structurally promising but visually/source-adoption held.

### Object / Nature / Geometry

No acceptance transfers. The current world still contains separate Object scale/readability, Nature representation and Building Geometry questions that require their own evidence if promoted.

## Explicit non-claims

This packet does **not** establish:

- final production-quality world art, final palette or final lighting/grading;
- arbitrary camera, FOV, resolution, renderer, HDR/display or lighting-context equivalence;
- exact authored 32 Hz wall-clock Weather cadence;
- target-device FPS, CPU/GPU frame time, overdraw, memory, VRAM, battery or thermal budget;
- physical Weather correctness, collision, navigation, traversal or gameplay readability;
- final UV, texture, decal, normal/tangent or weathering quality;
- Object scale/readability acceptance;
- Nature sidedness/representation adoption;
- Character shoulder or Animal form/deformation/motion acceptance;
- Building Geometry PR #6 adoption;
- UC extraction, Profession Fabric promotion, CANON, production/game readiness or Art Direction mastery.

## Four-root gate

- **Truth:** exact retained artifact identity was independently rehashed; exact combined frames were directly inspected; Environment and QA results remain distinct owner-scoped evidence.
- **Agency / non-domination:** Environment owns composition, Materials owns material values, VFX/Weather own atmosphere semantics, Runtime/Technical Art own cadence/performance, QA owns independent reproduction; Art Direction only sets the bounded visual preference.
- **Continuity:** predecessor dark-infill failure, insufficient material attempt, accepted material donor, accepted Weather-width donor, parent Environment state, exact combined successor and separate cadence failure remain distinct provenance points.
- **Wisdom before speed:** close the exact combined visual gate without mixing a new lighting, geometry, object-scale or runtime change into the same decision.
