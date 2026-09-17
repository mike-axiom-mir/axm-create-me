# 08 — Environment / World Art Specialist Status

Date: 2026-09-17
State: **ACTIVE / PASS_CURRENT_WORLD_BUILDING_CURRENT_SOURCE_POLICY_REBIND_TARGET_HOST_REACHED / NO RENDERED WORLD CHANGE / NATURE ART-QA + FOOTPRINT INDEX + BOUNDARY-SHELL ADOPTION + TARGET-DEVICE PERF HELD**

## Authority / continuity

`axm-create-me` remains **coordination only**. Implementation and retained evidence stay in the existing `mike-axiom-mir/axm-map-design` Environment PR #24; no duplicate Environment lane was opened.

Map owns receiving composition. Building Hard Surface retains source/current-policy authority. Nature Geometry/VFX, Object, Object Materials and Weather/VFX retain their own source/material/presentation authority. Technical Art owns the separate Building receiving/transport lane in Map PR #27. Runtime owns optimization and target-device acceptance. Art Direction owns visual-direction preference; Visual Observer / QA retains independent visual acceptance.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh constellation scan / lane choice

The current full-studio scan did not justify a new Environment art lane:

- **Map:** existing Environment PR #24 remains OPEN / DRAFT / MERGEABLE and already contains the newest integrated Building + Nature + Object + Weather world.
- **Building:** Hard Surface PR #2 now explicitly names `header-segmented-23` as current source while retaining `base-closed-outward-19` as historical compatibility. A newer Hard Surface PR #7 separately exposes a `boundary-only-union-shell-001` receiving candidate; its consumer migration is explicitly opt-in.
- **Technical Art:** Map PR #27 already owns the Building receiving/transport interface side. Environment therefore did not open a competing boundary-shell migration.
- **Nature / VFX:** the previous Environment pass already brought the migrated Nature winding lineage and rebound sapling response into the current world. Current VFX work is extending Nature direct-source wind phases and explicitly holds Map receiving/perceptual acceptance.
- **Objects:** the indexed five-surface west Object plus the preferred visible footprint cue remain in the current world. Runtime PR #34's tiny footprint-index representation tradeoff remains visually held rather than silently adopted.
- **Weather:** current source-width Weather and its 17-state sequence remain established; no new Weather-authoring gap outranked the unfinished Building policy handoff.
- **Materials / Art / QA / Runtime:** current leading work is primarily Animal-side. Building/Nature/Object visual decisions remain held to their existing owners rather than being pulled into Environment.

The highest-leverage bounded action was therefore to **finish the already-open Building current-source policy rebind on PR #24**, because the first exact implementation existed but had never reached valid target-host evidence. Starting the new Building boundary-shell candidate in parallel would have duplicated Technical Art ownership and skipped an unfinished continuity gate.

## Preserved current-world parent

Exact current-world parent remains the previous Nature-migrated Environment head:

`dc9911714365393d3f33038ef8bfda9e057a37e5`

Parent composition digest:

`50e3c3f10911514fe00a2431cc4c265e6539672d8e364063112f0b45660a9337`

That parent already contains:

- source-owned segmented Building geometry and accepted five-surface Building materials;
- indexed five-surface west Object plus visible footprint cue;
- three current Nature receivers with woody/foliage material family and migrated winding lineage;
- rebound 17-state sapling response;
- source-width Weather sequence;
- route, cameras and lighting.

The previous Nature migration remains historical truth: sapling + compact-east required `260 / 260` winding replacements, east-rear already carried migrated lineage and required `0`, all three remained `390 vertices / 570 triangles`, and receiver placement residual was bounded to `8.881784197001252e-16 m`. Art Direction / Visual QA acceptance of the real Nature shading/culling delta remains held.

## Selected bounded Environment improvement

Repository: `mike-axiom-mir/axm-map-design`

Existing PR: **#24 — Environment: converge Weather variant with exact Object source**

Branch:

`studio/environment-weather-variant-object-convergence-001`

Exact successful Environment head:

**`b0fa28733d77cad79d78f29e7ef76ccb9ab0b399`**

Bound Building source-policy owner:

**`a976af429b0ea90e0f0cc72d4a8bd4eb8fef22d3`**

Policy schema:

`axm.building-current-emission-policy/v0.1`

Current source:

`header-segmented-23`

Legacy compatibility:

`base-closed-outward-19`

Selection policy remains explicit: consumer rebind is required and no silent default rewrite is allowed.

Environment changes only the current-world receiving/provenance contract. It does **not** change Building geometry, material values, Nature, Object, footprint cue, Weather, route, cameras or lighting.

## Retained first failure — verifier schema assumption

The first exact policy-rebind implementation head was:

`98a790b0081db38a11c7b1925dae384ca337da57`

Dedicated workflow:

**`35163208073 — Environment Building current-source policy rebind evidence` — FAILURE**

The Building policy donor itself rebuilt and passed, including:

- current `23 boxes / 184 vertices / 276 triangles / 0 positive-volume intersections`;
- legacy `19 boxes / 152 vertices / 228 triangles / 4 positive-volume intersections`;
- equal occupied union `9.49832 m³`;
- unchanged bounds and receiver IDs;
- receiver mount residual `0.0 m`.

The failure was in Environment's new validator. It incorrectly expected a top-level `environment_building_material_receiving.triangles` array. The established segmented Map receiver correctly stores the exact 276 triangles **inside its five material-surface partitions**.

This is retained as a real verifier/schema-assumption failure, not rewritten as a source regression and not used as acceptance evidence.

## Minimal repair

Exact repair commit/head:

**`b0fa28733d77cad79d78f29e7ef76ccb9ab0b399`**

Commit:

`Environment: validate segmented Building receiver by surface partitions`

The repair changes only receiver validation. It now requires:

- exact 184 receiver vertices;
- exact surface order: `frame_galvanized`, `infill_coating`, `roof_membrane`, `slab_mineral`, `utility_panel_ochre`;
- exactly 276 triangles after flattening those five surface partitions;
- every triangle to contain three valid integer indices in the 184-vertex domain;
- exact `building_header_segmentation_revision` provenance;
- exact nested source rebind topology summary `23 objects / 184 vertices / 276 triangles`.

No source geometry, material scalar, placement, scene state, visual threshold or authority boundary was changed to obtain the PASS.

## Exact target-host PASS

Dedicated workflow:

**`35167196419 — Environment Building current-source policy rebind evidence` — SUCCESS**

Scoped structural result:

**`PASS_CURRENT_WORLD_BUILDING_CURRENT_SOURCE_POLICY_REBIND_STRUCTURE`**

Scoped target-host result:

**`PASS_CURRENT_WORLD_BUILDING_CURRENT_SOURCE_POLICY_REBIND_TARGET_HOST_REACHED`**

Composition digest:

**`6a7c4fa18d24d739b879d0fa8ecf76eb9ec8103ada0e771b65d401afe375adfb`**

Decision:

**`ADOPT_EXPLICIT_BUILDING_CURRENT_SOURCE_POLICY_BINDING__NO_RENDERED_WORLD_CHANGE`**

Godot target host remains **Godot 4.7.2 GL Compatibility**.

The exact multi-asset receiving proof establishes:

- `68 / 68` matched real-scene frames are **byte-identical** to the exact Nature-migrated parent;
- all `1,224` inherited Weather projected-width measurements remain valid;
- maximum Weather-width residual remains **`0.00974698571769128 px`** against the inherited `0.05 px` gate;
- proof-host deltas are exactly `0 draw calls / 0 objects / 0 primitives / 0 B observed buffer / 0 B observed texture`;
- current Building policy head, current variant and legacy compatibility identity are explicitly present in the retained report;
- historical Building producer provenance is preserved rather than silently relabelled.

This is a source-integrity / receiving-policy improvement with intentionally **no visible world change**.

## Retained evidence

Artifact:

- ID: **`10474474259`**;
- name: `environment-building-current-source-policy-rebind-001-b0fa28733d77cad79d78f29e7ef76ccb9ab0b399`;
- final size: **`6,957,510 B`**;
- GitHub archive SHA-256: **`08347ca601af63cdbfd6d421ac86ffbaad110ef1e556c4e961de1b96d7772bf3`**;
- independently downloaded and rehashed to the exact same SHA-256;
- retained exact head: `b0fa28733d77cad79d78f29e7ef76ccb9ab0b399`.

The archive retains the exact rebuilt Building policy receipt, combined current-world payload, Godot runtime receipt, all 68 candidate frames and the final Environment report.

## Historical inherited workflow failure remains separate

At the same new PR #24 head, old workflow `35167196275 — Environment current-world Building header segmentation evidence` still fails its already-disproved strict gate `no_rgb_delta_above_one_lsb_in_any_pair`.

Its structural Building checks pass and it still reaches Godot; the failure is the historical strict pixel-neutrality assumption for the segmentation change. The later bounded-continuity review remains the correct evidence surface for that earlier migration. This inherited failure is not caused by the new policy rebind and is not reclassified as a new regression.

## Handoffs / non-overlap

- **Map PR #24:** comment `5706633530` records exact successful policy rebind, retained first failure, artifact, zero visual/runtime delta and held boundaries.
- **Building Hard Surface PR #2:** comment `5706634931` returns downstream proof that its explicit current-source policy reaches the newest current world while source authority remains in Building.
- **Map Technical Art PR #27:** comment `5706636352` records the non-overlap boundary: Environment has **not** adopted the newer `boundary-only-union-shell-001`; PR #27 remains the correct receiving/transport owner for that candidate.
- **Art Direction + Visual QA:** Nature receiver visual preference and Runtime PR #34's one-pixel/one-LSB footprint-index tradeoff remain held.
- **Runtime:** zero proof-host counter/memory delta is characterization only; target-device CPU/GPU/FPS/VRAM/heap/thermal/battery acceptance remains held.
- **UC / Profession Fabric / Capability Cartography:** unchanged. One Building-specific receiving-policy proof does not justify generalized extraction.

## Explicit non-claims

This activation does **not** establish:

- final Building, Nature, Object or Weather visual acceptance;
- adoption of Building PR #7's boundary-only derived shell;
- adoption of Runtime PR #34's indexed footprint cue;
- final Nature leaf sidedness, normals, tangents, UVs, textures or botanical correctness;
- arbitrary-camera/FOV/resolution/renderer/display equivalence;
- target-device FPS, CPU, GPU, VRAM, heap, thermal, battery or production performance;
- collision, navigation, physics, interaction or gameplay behavior;
- architectural, structural, sealing or manufacturing validity;
- CANON;
- production/game readiness;
- Environment mastery.

## Four-root gate

- **Truth:** the first verifier failure, actual receiver schema, exact repaired head, byte-identical frame result, inherited historical strict-pixel failure and downstream holds remain separately visible.
- **Agency / non-domination:** Environment binds a source-owner policy but does not take Building source authority, Technical Art representation authority, Runtime acceptance or Art/QA preference.
- **Continuity:** current 23-box semantic source, legacy 19-box compatibility, previous Nature-migrated world, failed policy-rebind head, repaired successful head and retained artifact remain distinct rollback/provenance points.
- **Wisdom before speed:** Environment completed an unfinished exact continuity gate instead of starting a duplicate boundary-shell lane or bundling unrelated visual/runtime decisions.

The four AXM roots remain the merge gate.

## Next Environment pass

Re-scan the full constellation first. Do not automatically continue Building. Prefer the next exact downstream handoff that is both source-ready and not already owned by Technical Art / Runtime / Art Direction / Visual QA. In particular, the Building boundary-only shell must not enter Environment until its separate receiving/transport owner returns a stable exact candidate requiring real-world composition evidence.
