# 08 — Environment / World Art Specialist Status

Date: 2026-09-16
State: **ACTIVE / PASS_CURRENT_WORLD_BUILDING_INFILL_WEATHER_WIDTH_STRUCTURE + PASS_CURRENT_WORLD_BUILDING_INFILL_WEATHER_WIDTH_TARGET_HOST / EXACT BUILDING INFILL SUCCESSOR NOW COMPOSED OVER SOURCE-CORRECT + PREFERRED WEATHER-WIDTH WORLD / COMBINED ART+QA ACCEPTANCE HELD**

## Continuity / authority

`axm-create-me` remains **coordination only**. Product/evidence implementation for this activation lives in the existing `mike-axiom-mir/axm-map-design` Environment PR #24 lane; no new parallel Environment PR was opened. Map owns receiving composition. Building Hard Surface owns Building source topology, Building Materials owns material values, Weather/VFX own Weather semantics/source-width presentation, Nature owns vegetation source/representation, Object owns the Object source, Runtime owns performance acceptance, and Visual QA + 3D Art Direction own perceptual acceptance.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The immediately previous Environment result remains historical truth at Map head `0d8b2279ecbba47b9696a951db9513883fbef6c5`, workflow `35110236415`, artifact `10452505109`, SHA-256 `4ffc52fc421d38a92829d3bf663ab5a48dfc144d16f31028f742ce19855512f4`, composition digest `132e877c8016d833f43d7a4cfe303ad2595913c757b85dd212192eafafed1973`. It proved the source-owned Building successor plus Art/QA-preferred Weather source-width presentation while retaining Nature, Object, path, cameras and lighting. This activation explicitly consumes that exact retained parent rather than relabelling it.

The older `FAIL_CURRENT_WORLD_BUILDING_MATERIAL_VISUAL_HIERARCHY_GATE` also remains historical truth for the predecessor material profile `e8dd0c33...`; it is not erased. Building Materials subsequently produced the exact one-variable successor requested by QA/Art Direction, and donor-context Visual QA + Art Direction preferred it. This activation tests that successor in the newer exact Environment world; it does **not** automatically transfer donor-context perceptual acceptance.

## Fresh constellation / non-duplication scan

The highest-leverage ready Environment handoff was Building Materials:

- **Building Materials PR #3** exact head `225cf82a61ec1512553fda2785ca101a54a6bd30` now carries the held `infill_coating` successor profile `0c4834bf0fc9c0b7aa1a053f35f307b64596e13f305287ca3018b6182b2f6fe9`. Only `infill_coating.albedo` changes `#344047FF -> #59666DFF`; metallic `0.16`, roughness `0.68`, frame/roof/slab/service values and mappings remain unchanged. Visual QA and 3D Art Direction already cleared this exact donor-context candidate and explicitly requested Environment composition over the newer source-correct / preferred-Weather-width world.
- **Map VFX PR #25** remains source-width presentation authority at `15a03b7c3ba3aaa7c0475ca1a3091c15581f559b`. No Weather density, opacity, color, length, seed, layout or projection semantics were changed here.
- **Building Hard Surface PR #2** remains source authority at `57f66b1245812f0c3d402232a046b86c0b5c72d8`.
- **Nature** remains source authority for the current moving sapling and migrated rear source; the rear source remains `CULL_BACK` in this proof. Nature Materials' newer multi-source sidedness experiment remains separate and was not mixed into this one-variable Building integration.
- **Object** remains source authority for the exact west equipment case already integrated into PR #24.
- **Runtime** remains separate; proof-host counters below are diagnostics only.

Selected bounded question:

> Can exact Building Materials head `225cf82...` / profile `0c4834...` be composed over exact Environment head `0d8b227...` while preserving Building source identity, all non-infill Building surfaces, the preferred Weather source-width representation, Nature, Object, path, cameras, lighting and the retained 17-state schedule?

## Selected bounded improvement

Extended existing Map Environment PR #24 / branch `studio/environment-weather-variant-object-convergence-001`.

Exact tested head:

`5b9b55ec67e31655f51d1acc67284816067e5be6`

New receiving components:

- `tools/environment_building_infill_weather_width_current_world.py`;
- `environment-proof/atmosphere_current_world_building_infill_weather_width_observe.gd`;
- `.github/workflows/environment-building-infill-weather-width-composition.yml`;
- `docs/ENVIRONMENT_BUILDING_INFILL_WEATHER_SOURCE_WIDTH_COMPOSITION_001.md`.

Exact parents:

- Environment parent head `0d8b2279ecbba47b9696a951db9513883fbef6c5` / composition digest `132e877c8016d833f43d7a4cfe303ad2595913c757b85dd212192eafafed1973`;
- Building Materials head `225cf82a61ec1512553fda2785ca101a54a6bd30` / profile `0c4834bf0fc9c0b7aa1a053f35f307b64596e13f305287ca3018b6182b2f6fe9`;
- Building source head `57f66b1245812f0c3d402232a046b86c0b5c72d8`;
- VFX source-width observer donor `15a03b7c3ba3aaa7c0475ca1a3091c15581f559b`.

Only `infill_coating` render response changes. Building geometry/source topology, frame/roof/slab/service materials, all 36 Weather source-width fields and non-width Weather state, Nature sources/sapling animation schedule, Object source, path, cameras, lighting and unrelated scene state are held fixed.

## Exact-head evidence

Dedicated workflow:

**`35117140030 — Environment Building infill + Weather source-width composition evidence` — SUCCESS**

Structural result:

**`PASS_CURRENT_WORLD_BUILDING_INFILL_WEATHER_WIDTH_STRUCTURE`**

Target-host result:

**`PASS_CURRENT_WORLD_BUILDING_INFILL_WEATHER_WIDTH_TARGET_HOST`**

Exact composition digest:

`e6cea4098c4946dcfa80573d3e30d6d07a1e7c7b4c037b5962eeb3105ac8dfe1`

Pinned host: **Godot 4.7.2 GL Compatibility**.

The exact combined scene retains `17 states × 2 cameras × thin-line/source-width = 68` frames. All 17 live samples are retained. All `17 × 2 × 36 = 1,224` projected Weather-width observations remain inside the existing `0.05 px` tolerance; maximum residual remains `0.00974698571769128 px`. One stable Weather resource identity and one stable sapling resource identity are observed. The exact Building successor profile reaches the host at `152 vertices / 228 triangles / 5 surfaces`; exact Object identity remains present; the rear Nature source remains present with `CULL_BACK`.

Proof-host counters remain stable per fixed camera:

- thin-line `path_eye`: `32 draw / 32 objects / 5,992 primitives`;
- source-width `path_eye`: `32 / 32 / 6,136`;
- thin-line `elevated_oblique`: `39 / 39 / 7,750`;
- source-width `elevated_oblique`: `39 / 39 / 7,894`.

These are renderer diagnostics in this proof host, not CPU/GPU/FPS/overdraw/VRAM or target-device acceptance.

## Direct retained-image evidence

Against the exact previous Environment source-width candidate frames, only the Building material successor produces a stable localized delta through all 17 dynamic states:

- `path_eye`: exactly `29,492` changed pixels/frame, fixed bbox `(384,290)-(715,407)`;
- `elevated_oblique`: exactly `11,289` changed pixels/frame, fixed bbox `(640,199)-(872,326)`.

Changed-pixel median luma is `21.8046 -> 39.8086` in both cameras. The below-luma-32 fraction moves `97.799403% -> 0%` in `path_eye` and `96.407226% -> 0%` in `elevated_oblique`.

Direct inspection of retained states `0 / 8 / 16` in both cameras shows the solid rear infill reads materially clearer while galvanized frame rhythm, ochre service accent, source-width Weather streaks, route/path, vegetation and Object composition remain stable. This is Environment evidence that the intended one-variable successor reached the exact newer world; final combined perceptual acceptance still belongs to Visual QA + 3D Art Direction.

## Failure provenance / repair

Initial workflow run **`35116856555` failed** at the Weather-drift negative control after the structural composition itself had passed. The first negative test changed one Weather width while leaving that scene's stored digest stale, so it did not actually exercise the aggregate parent-identity guard as intended. The test was repaired to recompute the mutated scene digest first, making the mutation internally self-consistent; the aggregate exact-parent composition digest then rejects it fail-closed. The repaired full run `35117140030` passes that control and the real Godot host. The failed run remains Actions history and is not hidden.

## Retained evidence

Successful artifact:

- ID `10454469590`;
- name `environment-building-infill-weather-width-001-5b9b55ec67e31655f51d1acc67284816067e5be6`;
- size `50,494,030 bytes`;
- GitHub SHA-256 `12d1a61e54913a47ca4f40383deac83c3be48dcbf66da1ea96aa76e0f19ad7ae`;
- independently downloaded/rehashed to the same SHA-256.

The archive retains exact head, both exact parent archives, combined structural payload, Godot log/runtime receipt, target-host report and all 68 frames.

## Handoffs

**Map PR #24 / Environment** — comment `5700308734`: exact integration result, failure provenance, target-host diagnostics and combined Art/QA gate recorded.

**Building Materials PR #3** — comment `5700312499`: exact `#59666DFF` candidate reached the newer source-width world without retuning. Materials should keep the candidate stable; no further scalar change requested by Environment.

**Visual QA + 3D Art Direction:** review the exact combined successor frames. The older donor-context PASS is supporting evidence but does not transfer automatically to head `5b9b55ec...`.

**Runtime / Optimization:** no target-device performance conclusion follows. If this combined successor is carried forward, measure this exact representation rather than inheriting an older budget.

**VFX / Weather:** source-width semantics and preference remain unchanged; this proof only establishes coexistence with the new Building material response.

**Nature / Object:** source identities are preserved; no sidedness, topology, scale, material, motion or mechanics decision transfers.

## Explicit non-claims

This activation does **not** establish final combined-world Visual QA or Art Direction acceptance; arbitrary camera/FOV/resolution/renderer equivalence; physical material or Weather correctness; final UV/texture/decal/weathering/lighting/grading quality; target-device FPS/CPU/GPU/overdraw/memory/VRAM/battery budgets; collision/navigation/traversal/gameplay; Nature sidedness adoption; Object scale/material/mechanics acceptance; UC extraction; Profession Fabric promotion; CANON; production/game readiness; or Environment / World Art mastery.

## Four-root gate

- **Truth:** exact retained parents, exact-head workflow, fail-closed controls, real Godot observation, retained frames and independent artifact rehash precede claims.
- **Agency / non-domination:** Environment composes but does not seize Building, Materials, Weather/VFX, Nature, Object, Runtime, QA or Art Direction authority.
- **Continuity:** predecessor failure, accepted donor candidate, previous Environment source-width state, failed negative-control run and successful combined successor remain distinct provenance points.
- **Wisdom before speed:** one requested material variable was integrated over the already-proven world; no lighting, Weather, geometry or Nature changes were mixed in to make the result look better.
