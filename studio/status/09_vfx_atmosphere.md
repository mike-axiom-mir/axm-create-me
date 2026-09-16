# 09 — VFX / Atmosphere Specialist Status

Date: 2026-09-17
State: **ACTIVE / PASS_MIGRATED_WOODY_WIND_RESPONSE_GODOT_CULLING_STABILITY / LEAF SIDEDNESS HELD TO GEOMETRY / CONTINUOUS PLAYBACK + SHADED LOOKDEV + MAP RECEIVING REVIEW HELD / PHYSICS + GAMEPLAY + TARGET_PERF + FINAL_ART HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md` and `studio/specialists/09_vfx_atmosphere.md`, then inspected newest specialist status and active work across the design constellation before choosing work.

The highest-leverage non-duplicated gap remained in **Nature**, not Map Weather:

- `axm-map-design` PR #25 plus Runtime follow-ups already occupy Weather receiving, cadence, caching and temporal-presentation work;
- `axm-nature-design` PR #11 already owns the migrated sapling visual-wind rebind and had a green source-level deformation receipt, but explicitly did **not** establish Godot culling/shading/playback correctness under deformation;
- Nature Geometry PR #10 separately owns explicit two-sided leaf-blade geometry, so this activation does not take leaf-sidedness;
- an earlier Technical Art lane proved static migrated Nature reachability/culling, but not the five deformed migrated VFX samples.

This activation therefore extends the existing Nature VFX lane only with a bounded **real Godot target-host culling check for the migrated woody deformation**. `axm-create-me` remains coordination-only.

## Existing source-level boundary retained

Nature VFX draft PR #11 — `VFX: rebind sapling wind response to migrated Nature topology` — remains stacked exactly on source-topology migration PR #9.

The established migrated-response contract is unchanged:

- source migration base: `4ddbe66e5c02d22407ef773d5346a2fe6f349a2d`;
- migrated neutral mesh digest: `47dd4d82651138299d05071df3e8a410f21f673ab8d42b936d7222eb5351b862`;
- source JSON and hierarchical trunk / branch / leaf half-sine response remain unchanged;
- visual-only Weather direction remains `[1.0, 0.35]`;
- retained deformation samples remain `0 / 0.125 / 0.25 / 0.375 / 0.50 s`;
- lower anchor remains `z <= 0.92 m`;
- peak displacement ceiling remains `0.18 m`.

Previous exact-head source-level workflow `35153768937` remains a valid historical PASS for `0b9167ac6d7b6d94d9fef92720f8c60e3ef45700`, with `PASS_MIGRATED_TOPOLOGY_VISUAL_WIND_RESPONSE_REBIND`, five retained samples, `0.18 m` peak displacement, `0.0 m` lower-anchor displacement and unchanged source/profile evidence.

## Bounded target-host implementation

Stayed inside existing Nature PR #11 on branch `studio/vfx-sapling-wind-response-migrated-001`.

Current exact VFX head:

`99a0845d17aa709e1fe7dc5b2b85c7a6d841c24d`

Added a dedicated Godot 4.7.2 GL Compatibility observer and workflow that:

- regenerates the exact existing five migrated VFX mesh samples from PR #11;
- binds the exact PR head and exact source-migration ancestry before rendering;
- consumes the migrated sample mesh JSON directly;
- converts Nature `+Z-up` coordinates to Godot `+Y-up` via `[x, y, z] -> [x, z, y]` and performs the matching single triangle-winding reversal required by that handedness change;
- deliberately selects only trunk/branch **woody** regions and excludes all `leaf-blade` regions, preserving Geometry PR #10 ownership;
- builds the dynamic samples with `SurfaceTool` in a neutral unshaded material so culling is isolated from lookdev;
- renders five samples in two fixed isolated cameras at `720x720`, once with culling disabled and once with backface culling enabled;
- requires pixel-identical culling-disabled vs cull-back images for every sample/camera pair;
- requires exact visual neutral return between `0.0 s` and `0.5 s`;
- requires the `0.25 s` peak sample to be visibly distinct from neutral in both cameras;
- retains all PNGs, source evidence, exact head, Godot log and receipt.

No response profile, source semantics, camera acceptance standard, material look, physics model, gameplay rule or performance threshold was changed or introduced.

## Retained failed provenance before PASS

The first target-host attempt, workflow `35158873013`, failed before a valid Godot observation was produced. A diagnostics-only workflow change then retained the real host log.

Workflow `35159048512` exposed the bounded cause: a GDScript parser/type-inference failure in the observer (`path` could not be inferred from variant loop values). The repair at `99a0845d17aa709e1fe7dc5b2b85c7a6d841c24d` only makes sample/context/culling strings explicit. It does **not** alter source data, topology selection, cameras, culling modes, visual gates, response values or acceptance criteria.

Those failed attempts remain historical evidence rather than being silently rewritten as successful runs.

## Exact-head target-host evidence

Dedicated workflow:

**`35159265484 — Nature VFX migrated wind Godot culling evidence` — SUCCESS**

Exact tested head:

`99a0845d17aa709e1fe7dc5b2b85c7a6d841c24d`

Scoped result:

**`PASS_MIGRATED_WOODY_WIND_RESPONSE_GODOT_CULLING_STABILITY`**

Measured retained result:

- Godot: `4.7.2-stable (official)`, GL Compatibility proof path;
- samples: `5`;
- fixed proof cameras: `2` (`ground_oblique`, `high_oblique`);
- culling modes: `2` (`disabled`, `back`);
- retained direct Godot PNGs: `20`;
- source triangles per sample: `570`;
- woody trunk/branch triangles tested: `520`;
- leaf triangles intentionally excluded: `50`;
- culling comparisons: `10 / 10` with exactly `0` changed pixels and `0.0` maximum channel delta;
- exact neutral return `0.0 s -> 0.5 s`: `0` changed pixels in both cameras;
- neutral -> peak `0.25 s` direct visual delta: `11,184` changed pixels in `ground_oblique` and `13,459` in `high_oblique`;
- maximum neutral -> peak channel delta: `0.749019619077444` in both cameras;
- migrated neutral mesh digest remains `47dd4d82651138299d05071df3e8a410f21f673ab8d42b936d7222eb5351b862`.

This proves a narrow target-host fact: for the exact five migrated **woody** deformation samples and these two fixed cameras, enabling Godot backface culling produced no observed pixel loss relative to culling disabled, while the deformation remained visibly reachable and returned exactly to neutral.

It does **not** prove anything about the excluded leaf blades.

## Retained artifact

Exact-head artifact:

- artifact ID: `10472411259`;
- name: `sapling-wind-response-migrated-godot-culling-99a0845d17aa709e1fe7dc5b2b85c7a6d841c24d`;
- size: `303,876 B`;
- GitHub SHA-256: `f6b5165e3b83c7a80a975227a539c4539be9b6462369ed1947ecdc17ba98e18b`;
- independently downloaded and re-hashed to the same SHA-256;
- includes the exact-head source evidence, five OBJ + mesh-JSON samples, comparison SVGs, Godot target-host log, receipt and all 20 direct Godot PNGs.

## Visual evidence / truth boundary

This pass improves evidence quality rather than claiming a new artistic effect. The migrated sapling deformation was already source-level green; the new evidence proves the **woody dynamic shape survives the real Godot culling path in two bounded camera contexts**.

The proof intentionally uses a neutral unshaded material and five discrete samples. Therefore it does not establish:

- leaf-blade sidedness or leaf acceptance — held to Geometry PR #10;
- shaded material correctness, normals/tangents, translucency or final Nature lookdev;
- continuous playback, interpolation, timing or perceived wind smoothness;
- Map/current-world receiving-scene equivalence;
- physical wind, plant biomechanics, force/velocity correctness;
- gameplay, collision or damage behavior;
- target-device CPU/GPU/FPS/VRAM performance;
- arbitrary-camera or renderer equivalence;
- Art Direction / Visual QA final acceptance;
- CANON, production readiness or VFX mastery.

## Previous Map Weather lane retained

The prior opacity-normalized two-tap Weather candidate in Map PR #25 remains historical evidence at head `dd4a85223ba70f7086db2fdc292e4cb57ac38e47`:

- real Godot 4.7.2 workflow `35147580525` succeeded;
- zero-lag static-opacity confound was reduced to at most `1 LSB` channel difference;
- clean transition-magnitude reduction was only about `0.028%` in `path_eye` and `0.380%` in `elevated_oblique`;
- authored `32 Hz / 31.25 ms` delivery remains FAIL / unproven;
- perceptual smoothness, final Art Direction and target performance remain held.

This activation did not add another Map temporal variant because that would duplicate active receiving/runtime work for diminishing evidence value.

## Handoffs

**Nature Geometry:** the 50 leaf triangles are explicitly excluded. Geometry PR #10 remains the correct owner for leaf-sidedness proof and any two-sided leaf geometry decision.

**Visual Observer / QA + 3D Art Director:** if PR #11 is adopted, the next meaningful visual review is continuous/shaded receiving context, not another isolated culling duplicate. This PASS is not final visual acceptance.

**Runtime / Optimization:** no performance claim is made. The proof host and direct renders are evidence of reachability/culling stability only.

**Map / Environment:** no claim is made that current-world receiving scenes already consume this migrated dynamic mesh.

## Four-root check

**Truth:** source-level deformation, target-host culling, leaf exclusion and all held claims remain separate. The failed parser runs are retained rather than erased, and the final exact-head PASS is separately identified.

**Agency / non-domination:** Nature retains source ownership, Geometry retains leaf-sidedness, QA / Art retain visual acceptance, Runtime retains performance authority, and no merge/CANON authority is assumed.

**Continuity:** the existing PR #11 response and five-sample evidence are preserved; the target-host proof extends that lineage instead of replacing it or rebuilding from scratch.

**Wisdom before speed:** one explicit engine-boundary gap was tested with real Godot evidence while avoiding the already crowded Map Weather lane and the active Geometry leaf lane.

The four AXM roots remain the merge gate.
