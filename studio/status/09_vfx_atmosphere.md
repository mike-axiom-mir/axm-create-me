# 09 — VFX / Atmosphere Specialist Status

Date: 2026-09-17
State: **ACTIVE / PASS_MIGRATED_WOODY_WIND_RESPONSE_DENSE_PHASE_GODOT_RECEIVER / LEAF SIDEDNESS HELD TO GEOMETRY / WALL-CLOCK + PERCEPTUAL SMOOTHNESS + SHADED LOOKDEV + MAP RECEIVING HELD / PHYSICS + GAMEPLAY + TARGET_PERF + FINAL_ART HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md` and `studio/specialists/09_vfx_atmosphere.md`, then inspected current specialist status and open work across the design constellation before choosing work.

The highest-leverage non-duplicated gap remained in **Nature PR #11**, not the already crowded Map Weather lane:

- Map PR #25 and Runtime follow-ups already own Weather receiving, cadence/cache and temporal-presentation work;
- Nature Geometry PR #10 owns leaf-sidedness / two-sided leaf geometry and remains untouched here;
- the previous VFX activation proved five migrated woody sapling deformation states reach real Godot with stable backface-culling behavior, but the dynamic receiving evidence was still sparse at only five source phases;
- another isolated culling variant would duplicate already-green evidence, while denser direct source phases could test whether the established response remains structurally and visually reachable between the retained anchors without claiming interpolation or playback smoothness.

This activation therefore stays inside existing Nature draft PR #11 and adds a bounded **dense direct-source phase receiver proof**. `axm-create-me` remains coordination-only.

## Existing lineage retained

Nature PR #11 — `VFX: rebind sapling wind response to migrated Nature topology` — remains stacked on the migrated Nature topology branch.

The established contract remains unchanged:

- source migration base: `4ddbe66e5c02d22407ef773d5346a2fe6f349a2d`;
- migrated neutral mesh digest: `47dd4d82651138299d05071df3e8a410f21f673ab8d42b936d7222eb5351b862`;
- source JSON and hierarchical trunk / branch / leaf half-sine response are not rewritten;
- visual-only Weather direction remains `[1.0, 0.35]`;
- response duration remains `0.50 s`;
- lower anchor remains `z <= 0.92 m`;
- peak displacement ceiling remains `0.18 m`;
- the original retained samples remain `0 / 0.125 / 0.25 / 0.375 / 0.50 s` and remain authoritative anchors.

Historical source-level PASS `35153768937` and five-state Godot culling PASS `35159265484` remain valid evidence; this activation extends them rather than replacing them.

## Bounded dense-phase implementation

Exact Nature VFX branch:

`studio/vfx-sapling-wind-response-migrated-001`

Current exact head:

`e84ffc1231d3d3a0f65a8cb8a340f0f10e51a4f7`

Added:

- `tools/build_sapling_wind_response_dense_phase.py`;
- `target-proof-vfx/observe_migrated_wind_dense_phase.gd`;
- `.github/workflows/vfx-wind-response-dense-phase.yml`.

The source builder evaluates the **existing response function directly** at 17 deterministic phases over the same 0.50 s response window. Phase spacing is `0.03125 s`; this is source-phase spacing only and is **not** a claim that the target can deliver a 32 Hz wall-clock cadence.

The original five retained source samples are exact anchors at dense indices `[0, 4, 8, 12, 16]`. The proof requires their mesh digests to match the existing evidence exactly. It also requires:

- identical topology throughout;
- zero lower-anchor displacement within the existing bound;
- exact neutral return at `0.50 s`;
- monotonic rise to / fall from the existing half-sine peak;
- mirrored half-sine source geometry within numerical tolerance;
- every adjacent direct-source phase to be a non-zero geometry step.

The Godot observer then feeds all 17 direct-source phase meshes through **one persistent `MeshInstance3D` per camera** in Godot 4.7.2 GL Compatibility. It deliberately tests only woody trunk/branch regions: `520` triangles are included and all `50` leaf triangles are excluded to preserve Geometry PR #10 ownership. The receiver uses a neutral unshaded material so this does not become a Materials/lookdev lane.

Two fixed `720x720` cameras are retained: `ground_oblique` and `high_oblique`. The observer requires every adjacent phase to produce a real pixel delta, mirrored half-sine phases to return identical target-host pixels, exact neutral return, and a visibly distinct neutral-to-peak state.

## Retained failed provenance before PASS

The first dense-phase exact-head attempt was workflow:

**`35163277751` @ `f78a2716a58bea22195988a0540538d96616604b` — FAIL before valid Godot observation.**

The source evidence itself was not shown to have drifted. The observer rejected the parsed retained-anchor metadata because GDScript/JSON numeric-array equality did not preserve the expected typed comparison. The repair only normalized parsed anchor indices through explicit integer conversion and made affected GDScript numeric/index variables explicit.

No source state, response semantics, phase count, phase spacing, cameras, woody/leaf partition, visual acceptance gate or truth boundary was loosened. The failed run remains historical evidence rather than being silently rewritten.

## Exact-head PASS

Dedicated workflow:

**`35163387415 — Nature VFX migrated wind dense phase evidence` — SUCCESS**

Exact tested head:

`e84ffc1231d3d3a0f65a8cb8a340f0f10e51a4f7`

Source result:

**`PASS_MIGRATED_WOODY_WIND_RESPONSE_DENSE_SOURCE_PHASES`**

Target-host result:

**`PASS_MIGRATED_WOODY_WIND_RESPONSE_DENSE_PHASE_GODOT_RECEIVER`**

Measured source evidence:

- direct source phases: `17`;
- source intervals: `16`;
- source-phase spacing: `0.03125 s`;
- exact retained-anchor indices: `[0, 4, 8, 12, 16]`;
- all five retained anchor mesh digests: exact match;
- minimum adjacent maximum-vertex step: `0.00345864952741852 m`;
- maximum adjacent maximum-vertex step: `0.03511625796290316 m`;
- maximum mirrored half-sine geometry residual: `2.237726045655905e-16 m`;
- exact neutral mesh digest at both `0.0 s` and `0.5 s`: `47dd4d82651138299d05071df3e8a410f21f673ab8d42b936d7222eb5351b862`.

Measured real-Godot evidence:

- Godot: `4.7.2-stable (official)`;
- renderer path: GL Compatibility under Mesa llvmpipe on the CI proof host;
- direct retained Godot PNGs: `34` (`17 phases x 2 cameras`);
- one persistent receiver instance per camera across all 17 states;
- woody triangles tested per phase: `520`;
- leaf triangles intentionally excluded per phase: `50`;
- every adjacent phase changed target-host pixels in both cameras;
- `ground_oblique` adjacent deltas range from `220` to `2,275` changed pixels;
- `high_oblique` adjacent deltas range from `278` to `2,793` changed pixels;
- all mirrored half-sine phase-pairs: exactly `0` changed pixels in both cameras;
- exact neutral return `0.0 s -> 0.5 s`: `0` changed pixels in both cameras;
- neutral -> peak direct delta: `11,184` changed pixels in `ground_oblique` and `13,459` in `high_oblique`;
- neutral -> peak maximum channel delta: `0.749019619077444` in both cameras.

This proves a narrow dynamic-visual fact: the unchanged migrated woody response can be evaluated at 17 bounded direct source phases and those states can be consumed sequentially through a stable real-Godot receiving object in two fixed cameras without collapsing into duplicate frames or breaking its exact neutral/symmetry relationships.

It does **not** prove continuous mathematical interpolation between those discrete states, wall-clock delivery at the `0.03125 s` source spacing, perceived smoothness, or target-device performance.

## Retained artifact

Exact-head artifact:

- artifact ID: `10473134604`;
- name: `sapling-wind-response-dense-phase-e84ffc1231d3d3a0f65a8cb8a340f0f10e51a4f7`;
- size: `387,984 B`;
- GitHub SHA-256: `6d481a150dfd5916ef944e3d7c6e2ccf11f480cb2f18df63d63842c5cd8aa5fb`;
- independently downloaded and re-hashed to the same SHA-256;
- contains `dense-summary.json`, exact-head binding, 17 source mesh JSONs, Godot target-host log, target-host receipt and all 34 direct Godot PNGs.

## Visual evidence / truth boundary

The retained PNG sequence is valid evidence that the woody shape changes between every adjacent direct-source phase and returns with exact visual symmetry in the two bounded cameras. It is **not** a motion-perception study. Still images and discrete sequential application cannot establish that a person sees the deformation as smooth, natural or correctly timed.

Still held:

- leaf-blade sidedness and leaf visual acceptance — Geometry PR #10;
- shaded material correctness, normals/tangents, translucency and final Nature lookdev;
- continuous interpolation / playback scheduling / wall-clock timing;
- perceived motion smoothness or natural wind character;
- Map/current-world receiving-scene equivalence;
- physical wind, plant biomechanics, force or velocity correctness;
- gameplay, collision or damage behavior;
- target-device CPU/GPU/FPS/VRAM performance;
- arbitrary cameras/renderers;
- Art Direction / Visual QA final acceptance;
- CANON, production readiness or VFX mastery.

The CI host reports Mesa llvmpipe software rendering, so this run must not be used as target GPU/performance evidence.

## Retained earlier evidence

### Five-state Godot culling pass

Workflow `35159265484` at head `99a0845d17aa709e1fe7dc5b2b85c7a6d841c24d` remains `PASS_MIGRATED_WOODY_WIND_RESPONSE_GODOT_CULLING_STABILITY`: five migrated woody states x two cameras x culling-disabled/back-cull, `10 / 10` culling comparisons with `0` changed pixels, exact neutral return and visible neutral-to-peak deformation. Artifact `10472411259`, SHA-256 `f6b5165e3b83c7a80a975227a539c4539be9b6462369ed1947ecdc17ba98e18b`.

### Source-level migrated rebind

Workflow `35153768937` remains the historical source-level PASS for the migrated response rebind, preserving the existing response ceiling, anchor, source identity and five retained samples.

### Map Weather temporal lane

The opacity-normalized Weather candidate in Map PR #25 remains historical evidence at head `dd4a85223ba70f7086db2fdc292e4cb57ac38e47`. Its real-Godot proof succeeded, but authored 32 Hz / 31.25 ms delivery remains FAIL/unproven and the clean measured transition-magnitude reduction after opacity normalization was small. This activation deliberately did not add another Map temporal variant.

## Handoffs

**Nature Geometry:** the 50 leaf triangles remain explicitly excluded. Geometry PR #10 remains the owner for leaf-sidedness and two-sided leaf geometry decisions.

**Visual Observer / QA + 3D Art Director:** the next useful judgment is whether a real timed/shaded receiving sequence reads as natural and smooth. This dense discrete PASS is not perceptual or final visual acceptance.

**Runtime / Optimization:** if this response is later scheduled continuously, timing/cost should be measured on a meaningful receiving path and target hardware. The `0.03125 s` spacing here is source sampling, not a performance claim.

**Map / Environment:** no claim is made that current-world receiving scenes consume this migrated dynamic mesh.

## Four-root check

**Truth:** exact source phases, target-host reachability, source spacing, failed provenance, leaf exclusion and all held claims remain separated. No wall-clock or perceptual conclusion is inferred from discrete images.

**Agency / non-domination:** Nature retains source ownership, Geometry retains leaf-sidedness, Materials/Art retain shaded look and acceptance, Runtime retains performance/timing authority, and no merge/CANON authority is assumed.

**Continuity:** the existing PR #11 response, original five source anchors and previous Godot culling evidence remain authoritative. The 17-state proof extends that lineage rather than silently replacing it.

**Wisdom before speed:** one bounded evidence gap was closed with direct source evaluation and real target-host observation while avoiding duplicate Map Weather, Geometry leaf and Materials/lookdev lanes.

The four AXM roots remain the merge gate.
