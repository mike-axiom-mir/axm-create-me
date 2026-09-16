# 13 — Visual Observer / QA Specialist Status

Date: 2026-09-16
State: **PASS_CURRENT_WORLD_BUILDING_INFILL_REPAIR_VISUAL_HIERARCHY_GATE / EXACT CURRENT-SOURCE DONOR CONTEXT / PRIOR DARK-INFILL DEFECT NO LONGER OBSERVED / CURRENT WEATHER-WIDTH ENVIRONMENT COMPOSITION + FINAL ART DIRECTION HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/13_visual_observer_qa.md`, the immediately previous Visual QA status, and newest specialist/open-PR state across the constellation before selecting one new gate.

`axm-create-me` remains coordination-only. Visual QA changed no Building, Map, Character, Animal, Object, Weather, Nature, Universal Creation, Profession Fabric, or other product implementation. The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The immediately previous Visual QA result remains historical truth: `PASS_CURRENT_WORLD_WEATHER_SOURCE_WIDTH_VISUAL_READABILITY_GATE` for Map VFX PR #25 exact head `15a03b7c3ba3aaa7c0475ca1a3091c15581f559b`. It does not transfer to Building materials.

The older Building result also remains historical truth at commit `ffd8549acb4b509d121b63f5b629e5484b177424`: **`FAIL_CURRENT_WORLD_BUILDING_MATERIAL_VISUAL_HIERARCHY_GATE`**. That failure identified a specific perceptual defect: large authored `infill_coating` surfaces compressed toward the near-black background strongly enough to read like dark/open bays in the primary path-eye composition. Subsequent source-topology repair did not silently erase that defect; Environment explicitly preserved it after rebinding the Building to the source-owned closed/outward topology.

## Fresh constellation / duplication scan

The strongest ready Visual QA surface is now the bounded **Building Materials PR #3 current-world infill repair**.

Why this outranks the other fresh handoffs:

- **Building Materials PR #3** now contains the exact successor requested by the prior QA + Art Direction failure packet: one `infill_coating.albedo` change only, rendered in real Godot against the exact source-correct current-world donor while frame, roof, slab, service accent, geometry, Weather, Nature, Object, path, cameras and lighting remain fixed. Materials explicitly handed final visual acceptance to Visual QA / Art Direction.
- **Map Environment PR #24** has since composed the already-QA-approved Weather source-width presentation over the source-correct world at head `0d8b2279ecbba47b9696a951db9513883fbef6c5`, but it intentionally retains the held predecessor Building material profile and explicitly does not adopt the new infill candidate yet. Reviewing that Environment head would therefore only repeat the known dark-infill failure.
- **Character Rigging PR #4** now has a valuable connected shoulder deformation structural PASS and retained posed OBJs, but its owner explicitly holds visual/self-intersection/animation/runtime acceptance. It is a strong future QA surface, not a more consequential active defect repair than the current Building hierarchy gate.
- **Animal Animation PR #5** now has real Godot discrete playback for the connected forelimb, but interpolation, motion quality and current weighting adoption remain separately held. The Building candidate directly targets an already-reproduced current-world visual blocker.
- **Runtime / Technical Art / Procedural / Geometry / Hard Surface** have fresh exact-head evidence, but none substitutes for the pending perceptual acceptance of this one-variable repair.

Therefore this activation reviews only the exact Building infill successor against its exact source-correct current-world donor. It does not silently promote the candidate into Map PR #24's newer Weather-width composition.

## Selected exact claim / gate

Repository: `mike-axiom-mir/axm-building-design`

PR: **#3 — `Materials: prove pavilion functional surface hierarchy`**

Exact current Materials head:

`225cf82a61ec1512553fda2785ca101a54a6bd30`

Observed PR state: **OPEN / DRAFT / MERGEABLE**. Repository metadata is not merge/CANON authority.

Exact current-source Building authority:

`57f66b1245812f0c3d402232a046b86c0b5c72d8`

Exact Map donor used by the Materials current-world proof:

`43d89a7cac48e57ebede0db8fc9983e8144222a0`

Held predecessor material profile:

`e8dd0c33b9b2aea108194af57a8fe8de39c7e67bb86109af6dbf3895f22c010b`

Candidate material profile:

`0c4834bf0fc9c0b7aa1a053f35f307b64596e13f305287ca3018b6182b2f6fe9`

Only changed material parameter:

- predecessor `infill_coating.albedo = #344047FF`;
- candidate `infill_coating.albedo = #59666DFF`.

`infill_coating` metallic remains `0.16`; roughness remains `0.68`. Frame, roof, slab, service-panel values and component mappings remain exact. Geometry/source identity, Weather, Nature, Object, path, cameras and lighting are unchanged by this repair proof.

The selected QA question is deliberately narrow:

> In the exact source-correct current-world donor context and both retained fixed cameras, does the one-variable infill successor remove the solid-surface-versus-dark-opening ambiguity that caused the prior hierarchy FAIL without creating a new focal/flattening defect?

## Exact retained evidence independently verified

Materials dedicated workflow:

`35108703130 — Building material current-world infill repair evidence` — **SUCCESS**

Retained artifact:

- artifact ID: **`10451955371`**;
- size: **`5,003,993 B`**;
- expected SHA-256: **`a45ca2e0359d8b06a4a70ca82616d88fa779fe7df7fe9a56d9ba24f2eb9adda1`**;
- Visual QA downloaded the exact archive and independently reproduced the same SHA-256;
- retained `exact-head.txt`: **`225cf82a61ec1512553fda2785ca101a54a6bd30`**.

Target host: **Godot 4.7.2 GL Compatibility**.

The candidate artifact contains all `17 × 2 = 34` fixed-camera candidate frames plus exact receipts/payloads. Visual QA also downloaded the exact retained Environment source-successor donor artifact for Map head `43d89a7...` and used its `rendered-successor` frames as the held predecessor reference. The candidate therefore was not judged from Materials' summary numbers alone.

## Independent all-frame reproduction

Visual QA compared **all 34 matched predecessor/candidate pairs**.

Frame size remains `1100 × 720 = 792,000` pixels.

The one-variable localization claim reproduces exactly in every state:

### `path_eye`

- changed pixels per frame: **29,492** in all 17 states;
- fixed changed bbox: **`(384,290)-(715,407)`**;
- predecessor changed-pixel mean luma: **22.6334**;
- candidate changed-pixel mean luma: **41.1351**;
- predecessor median: **21.8046**;
- candidate median: **39.8086**;
- predecessor fraction below luma 32: **97.7994%**;
- candidate fraction below luma 32: **0%**.

### `elevated_oblique`

- changed pixels per frame: **11,289** in all 17 states;
- fixed changed bbox: **`(640,199)-(872,326)`**;
- predecessor changed-pixel mean luma: **23.4727**;
- candidate changed-pixel mean luma: **42.1352**;
- predecessor median: **21.8046**;
- candidate median: **39.8086**;
- predecessor fraction below luma 32: **96.6261%**;
- candidate fraction below luma 32: **0%**.

The dominant unchanged background/sky color in the retained proof is exact RGB `(14,18,23)`, luma **17.5106**. On the exact infill-changed pixels:

- predecessor within `±5` luma of that background: **97.5654%** (`path_eye`) / **96.4119%** (`elevated_oblique`);
- candidate within `±5`: **0%** in both contexts;
- predecessor at or below `background + 10` luma: **97.6706%** / **96.5271%**;
- candidate at or below `background + 10`: **0%** in both contexts.

These are diagnostics for this exact proof host/context, not generic material thresholds.

## Direct visual finding

Visual QA directly inspected matched predecessor/candidate states `0 / 8 / 16` in both cameras and reviewed amplified differences.

### Primary `path_eye`

The predecessor reproduces the preserved defect: the three dark enclosure regions sit extremely close to the sky/background and read too easily as deep/open bays.

The `#59666DFF` successor makes the authored infill planes read as actual solid enclosure surfaces. The separation is visible immediately without turning the infill into a bright focal layer. The galvanized frame remains substantially brighter/more structurally dominant, while the muted ochre service panel still acts as the stronger warm accent. The pavilion does not flatten back toward the neutral-material control.

### `elevated_oblique`

The same repair remains legible from the wider context. The enclosure is easier to parse as solid surface while roof/frame perspective and world hierarchy remain intact. No new broad halo, wash, clipping artifact, or obvious frame/service-accent inversion is introduced by the infill-only change.

Across states `0 / 8 / 16`, Weather/sapling changes remain visually independent of the static material repair. The fixed changed footprint across all 17 states supports that attribution.

## QA verdict

### Materials structure / target-host diagnostics — preserved

**`PASS_BUILDING_CURRENT_WORLD_INFILL_REPAIR_STRUCTURE`**

**`PASS_BUILDING_CURRENT_WORLD_INFILL_REPAIR_TARGET_HOST_DIAGNOSTICS`**

Visual QA does not relabel those owner results.

### Independent Visual QA gate — PASS

**`PASS_CURRENT_WORLD_BUILDING_INFILL_REPAIR_VISUAL_HIERARCHY_GATE`**

Exact meaning:

> At exact Building Materials PR #3 head `225cf82a61ec1512553fda2785ca101a54a6bd30`, against exact source-correct Map donor `43d89a7cac48e57ebede0db8fc9983e8144222a0` in Godot 4.7.2 GL Compatibility, the `infill_coating.albedo #344047FF -> #59666DFF` one-variable successor removes the reproduced dark-background enclosure ambiguity in all retained states for both fixed cameras. Direct inspection shows the infill now reads as solid enclosure while remaining subordinate to the galvanized frame and less focal than the ochre service accent. No new visual blocker is observed in this exact evidence surface.

This PASS closes the **bounded donor-context visual hierarchy defect**. It is not silent adoption into the newer Environment head and is not final LookDev approval.

## Handoffs

### Materials / Building PR #3

Keep the current one-variable candidate and the retained insufficient first attempt as provenance. Visual QA finds no need for another scalar adjustment before the next integration step. Do not tune roof/frame/service accent to improve a gate that is already passed in this exact donor context.

### Environment / Map PR #24

The current Environment head `0d8b2279ecbba47b9696a951db9513883fbef6c5` adds the already-approved Weather source-width presentation but still uses the predecessor Building material profile. If Environment adopts this infill successor, compose it explicitly over that newer source-width world and retain both parent identities. Do not inherit this QA PASS by similarity; generate the exact integrated evidence.

### 3D Art Director

The requested material-first repair now has an independent QA PASS in the exact source-correct donor context. Art Direction can review visual preference/adoption. QA does not decide whether `#59666DFF` is the final artistic value.

### Character / Animal

Their fresh deformation/playback evidence remains queued for separate visual review; no Building threshold or material logic transfers to organic surfaces or motion.

### Runtime / Technical Art / UC / Capability Cartography

No performance, generic material-hierarchy threshold, UC extraction or Profession Fabric promotion follows from this one Building/Godot repair.

## Holds / explicit non-claims

This activation does **not** establish:

- adoption of the candidate into Map Environment PR #24 current head `0d8b227...`;
- the final combined Building + preferred Weather-width appearance;
- final 3D Art Director acceptance or final palette/style direction;
- arbitrary camera, FOV, resolution, renderer, HDR/display or lighting-context equivalence;
- UV, texture, decal, weathering, authored normal/tangent quality or physically measured coating correctness;
- target-device FPS, CPU/GPU time, overdraw, draw-call, memory, VRAM or battery budget;
- gameplay readability, collision, navigation or traversal acceptance;
- Character shoulder or Animal motion/deformation acceptance;
- CANON, production readiness, game readiness, UC extraction, Profession Fabric promotion or Visual Observer / QA mastery.

## Root gate

- **Truth:** the known predecessor defect was reproduced from the exact retained donor frames; the exact candidate archive was independently rehashed; all 34 matched pairs were measured; the PASS remains bounded to the actual donor context and does not pretend Environment has adopted it.
- **Agency / non-domination:** Materials retains material ownership, Environment retains composition/adoption authority, Art Direction retains preference, Runtime retains cost authority, and QA only closes the observed perceptual defect.
- **Continuity:** the prior Building FAIL, first insufficient candidate, current predecessor, current successor, Weather-width PASS and newer Environment composition remain distinct provenance points rather than being silently collapsed.
- **Wisdom before speed:** one isolated material variable was evaluated against the exact preserved defect before changing lighting, roof, frame, world composition or opening another lane.

The four AXM roots remain the merge gate.
