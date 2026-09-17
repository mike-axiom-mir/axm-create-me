# 3D Art Direction — Current-World Nature Split Surface Culling — Direction 017

Date: 2026-09-17
Decision: **PASS_ART_DIRECTION_CURRENT_WORLD_NATURE_SPLIT_SURFACE_CULLING_PREFERENCE_017**
Final Nature look state: **HOLD_FINAL_NATURE_LOOK__SHADED_BACKFACE_RESPONSE_FLUTTER_ARBITRARY_VIEW_AND_TARGET_DEVICE_ACCEPTANCE_PENDING**

## Scope

This is a bounded Art Direction decision for one current-world Nature receiving variable only.

`axm-create-me` remains coordination-only. No Map, Nature, Universal Creation, Profession Fabric or product implementation is changed by this packet.

The four AXM roots remain the merge gate:

1. Truth
2. Agency / non-domination
3. Continuity
4. Wisdom before speed

## Exact reviewed receiver

Repository: `mike-axiom-mir/axm-map-design`

Environment PR: #24 — `Environment: converge Weather variant with exact Object source`

Exact candidate head:

`10c6e29790b0b53b20abd603738cb54671af013c`

Exact parent head:

`b0fa28733d77cad79d78f29e7ef76ccb9ab0b399`

Policy:

- schema: `axm.environment-nature-surface-culling-policy/v0.1`;
- policy ID: `source-woody-back__source-foliage-two-sided-001`;
- geometry strategy: `PRESERVE_CURRENT_390V_570T_SOURCE_GEOMETRY`;
- woody surfaces: `CULL_BACK`;
- foliage surfaces: `CULL_DISABLED`;
- exact Nature Materials head: `8b2e0523d7a2b210c6404f15bafb08fbedcad4dd`;
- explicit leaf-backface Geometry candidate head: `da3adbef4de8cddb8f3ebe841d39bb31a8936f5f`;
- explicit leaf-backface geometry adopted by this receiver: `false`.

The candidate holds source geometry, source winding, woody/foliage scalar material values, dynamic sapling vertices, Building, Object, Weather, path, cameras and lighting fixed. It changes only target-host culling by the already-existing Nature material role.

## Exact retained evidence

Candidate artifact:

- ID `10477476774`;
- archive SHA-256 `db67e657dcecb044e7e46b1aeedadc71fcb907c9c3720045f20a753de885f689`;
- exact retained head `10c6e29790b0b53b20abd603738cb54671af013c`.

Parent artifact:

- ID `10474474259`;
- archive SHA-256 `08347ca601af63cdbfd6d421ac86ffbaad110ef1e556c4e961de1b96d7772bf3`;
- exact retained head `b0fa28733d77cad79d78f29e7ef76ccb9ab0b399`.

Both archives were independently downloaded and rehashed during this Art Direction activation to the exact published digests above.

Target host: Godot `4.7.2`, GL Compatibility.

The retained candidate report states:

- `68 / 68` matched current-world frames compared;
- all `1,224` inherited Weather projected-width observations preserved;
- max inherited Weather-width residual remains `0.00974698571769128 px`;
- path-eye: `87–88` changed pixels per frame;
- elevated-oblique: `319–320` changed pixels per frame;
- maximum channel delta: `216` LSB path-eye / `204` LSB elevated-oblique;
- proof-host counter deltas: `0` draw calls, `0` objects, `0` primitives, `0 B` observed buffer memory and `0 B` observed texture memory.

Those counter values are proof-host characterization only, not target-device performance acceptance.

## Independent QA dependency

Visual Observer / QA independently reviewed all 68 matched frames and returned:

- `PASS_CURRENT_WORLD_NATURE_SPLIT_SURFACE_CULLING_VISUAL_INTEGRATION_GATE`;
- `PASS_CURRENT_WORLD_NATURE_FOLIAGE_BACKFACE_RECOVERY_NO_SAMPLED_VISUAL_REGRESSION`.

QA also reproduced a zero-XOR Nature change mask between thin-line and source-width Weather in all 17 states for both cameras, so the retained foliage-recovery result is not being hidden by the Weather presentation.

Its conservative changed-pixel diagnostic reports no sampled foliage-to-non-foliage loss, while the overwhelming majority of changed pixels are background/non-foliage becoming foliage.

## Direct Art Direction observation

I directly inspected enlarged exact parent/candidate/difference comparisons at retained states `0 / 8 / 16` in both fixed cameras.

The useful visual change is small but clear:

- branch tips that previously read bare when a thin leaf plane faced away retain a visible green leaf read;
- the recovered blades remain subordinate details rather than new focal masses;
- woody trunks and branches keep their existing solid/culling read;
- the current open, sparse crown language is preserved instead of being made artificially fuller through form or scale changes;
- no material-brightness, hue, opacity, geometry-thickness, branch-form or wind retune is needed to make the recovery legible;
- the world hierarchy remains stable around the Building, route, Object and Weather layers.

For this stylized sparse vegetation, losing an entire thin terminal blade solely because the viewing side changes reads more like missing foliage than intentional hierarchy. Keeping only foliage two-sided while woody surfaces remain backface-culled is therefore the cleaner current direction.

## Art Direction decision

**`PASS_ART_DIRECTION_CURRENT_WORLD_NATURE_SPLIT_SURFACE_CULLING_PREFERENCE_017`**

Exact meaning:

> At Map Environment PR #24 exact head `10c6e29790b0b53b20abd603738cb54671af013c`, preserve `woody=CULL_BACK / foliage=CULL_DISABLED` with the exact current `390v / 570t` Nature source geometry as the preferred current-world receiving direction for the retained fixed-camera scene. The bounded visual goal is consistent terminal-leaf readability without increasing source form, changing material values or duplicating leaf geometry merely to recover the missing back-facing blade read.

This is an Art Direction preference for the current receiver, not a source-policy rewrite.

## Explicit Geometry alternative boundary

Nature Geometry PR #10 exact head:

`da3adbef4de8cddb8f3ebe841d39bb31a8936f5f`

Its explicit disjoint backface candidate remains valid structural evidence and remains a legitimate alternative for future renderer/transport needs. It changes each exact Nature body from `390v / 570t` to `490v / 620t` by duplicating the 25 existing leaf blades with reversed winding.

Direction 017 does **not** reject that Geometry work as invalid. It says only:

- do not adopt the duplicated-backface topology into the current world solely to solve the visual problem already recovered by the simpler source-geometry-preserving receiver;
- do not convert Art preference into a topology or runtime verdict;
- if a future target requires explicit geometry, compare that exact representation directly against this accepted split-culling receiver under the same materials, cameras and scene state, with Runtime/Technical Art evidence attached.

## Materials boundary

Nature Materials PR #5 current head is:

`8b2e0523d7a2b210c6404f15bafb08fbedcad4dd`

Its current woody/foliage family remains fixed by this receiver comparison. Direction 017 does not establish how final two-sided leaf lighting, normal orientation, translucency/transmission, alpha cutout, texture response or tangent-space shading should behave.

Do not compensate for a future two-sided shading defect by silently changing foliage color/brightness/roughness. Isolate the actual backface-lighting/material variable and prove it separately.

## VFX boundary

Nature VFX PR #11 current head is:

`ecade64227ba1d3d1faf029ca7188ea63c2560ec`

Its migrated-response / leaf-flutter work remains separate. This pass does not accept flutter amplitude, cadence, naturalness, physical wind or current-world motion quality.

Any future VFX visual review should preserve this exact split-culling receiver as the current comparison baseline unless a newer independently accepted receiver supersedes it. Do not infer motion acceptance from static sidedness acceptance.

## Handoffs

### Map Environment PR #24

Preserve the exact split surface-culling candidate as the current preferred receiving reference. No additional brightness, geometry, scale, crown-density or Weather adjustment is requested by Art Direction. Keep the change isolated from future flutter/lookdev experiments.

### Nature Geometry PR #10

Keep the explicit backface candidate as a separately evidenced alternative, not an automatically adopted current-world successor. No further Geometry search is requested merely to make leaf sidedness more visible.

### Nature Materials PR #5

Keep the accepted scalar woody/foliage family fixed for the next two-sided shaded test. If back-facing leaf lighting exposes a defect, isolate that material/shader variable rather than retuning the whole Nature family.

### Nature VFX PR #11

Motion remains separately held. When a current-world VFX receiver exists, compare it on top of this preferred split-culling state instead of assuming the static culling PASS transfers.

### Visual Observer / QA

The bounded current-world culling gate is complete. A later material/VFX/arbitrary-view successor needs fresh independent review; this PASS should not be inherited by similarity.

### Runtime / Technical Art

No target-device cost or transport policy is decided here. The current proof-host zero-counter delta is characterization only. Explicit geometry versus renderer-side two-sided foliage remains a technical/runtime decision if a future target forces that choice.

## Final Nature look remains held

**`HOLD_FINAL_NATURE_LOOK__SHADED_BACKFACE_RESPONSE_FLUTTER_ARBITRARY_VIEW_AND_TARGET_DEVICE_ACCEPTANCE_PENDING`**

Direction 017 does not establish:

- final two-sided/backface normal or lighting response;
- final normals, tangents, UVs, texture packing or texel density;
- final bark/leaf textures, translucency, transmission, subsurface response, alpha cutout or weathering;
- acceptance of the separate explicit duplicated-leaf Geometry representation;
- acceptance of the separate VFX flutter candidate;
- physical wind, plant biomechanics or botanical correctness;
- arbitrary camera, FOV, resolution, renderer or display equivalence;
- target-device CPU/GPU/FPS/VRAM/heap/thermal/battery behavior;
- collision, navigation, interaction or gameplay behavior;
- CANON;
- production/game readiness;
- Nature mastery;
- 3D Art Direction mastery.

## Four-root check

- **Truth:** the small but real leaf-coverage improvement, QA PASS, explicit-geometry alternative, separate VFX work and unresolved final-look/performance boundaries remain distinct facts.
- **Agency / non-domination:** Art Direction selects the bounded visual preference only. Nature Geometry, Materials, VFX, Map Environment, Technical Art, Runtime and QA retain their own authority.
- **Continuity:** parent world, split-culling successor, explicit-backface Geometry candidate and flutter candidate remain separate exact rollback/provenance identities.
- **Wisdom before speed:** prefer the smallest evidenced receiver-side correction that solves the observed current-world visual loss, without bundling geometry duplication, lookdev retuning or motion changes before they are needed.

The four AXM roots remain the merge gate.
