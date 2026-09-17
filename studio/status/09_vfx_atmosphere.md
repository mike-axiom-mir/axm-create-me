# 09 — VFX / Atmosphere Specialist Status

Date: 2026-09-17
State: **ACTIVE / PASS_BOUNDED_DETERMINISTIC_LEAF_FLUTTER_GODOT_VISUAL_CANDIDATE / SHADED LOOKDEV + PERCEPTUAL NATURALNESS + CONTINUOUS TIMING + MAP RECEIVING + PHYSICS + GAMEPLAY + TARGET_PERF + FINAL_ART HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md` and `studio/specialists/09_vfx_atmosphere.md`, then inspected the current open design-repository lanes before choosing one bounded visual improvement.

The highest-leverage non-duplicated gap was no longer basic leaf sidedness: Geometry PR #10 already owns the explicit two-sided leaf topology, while Nature VFX PR #11 had already proved that exact candidate survives the inherited sapling wind deformation and Godot backface culling. The next useful VFX-only question was whether the otherwise rigid leaf planes could receive a small deterministic local motion layer without reauthoring the established whole-sapling response, Weather semantics, topology, Materials/lookdev, gameplay or physics.

This activation therefore stayed inside existing Nature draft PR #11 and added a **bounded deterministic leaf-local micro-flutter candidate**. No new Map Weather, Runtime, Geometry, Materials, Rigging or Animation lane was opened. `axm-create-me` remains coordination-only.

## Exact source lineage retained

Nature VFX PR #11 branch:

`studio/vfx-sapling-wind-response-migrated-001`

Current exact head:

`ecade64227ba1d3d1faf029ca7188ea63c2560ec`

PR #11 is open, draft, unmerged and mergeable.

Pinned Geometry leaf donor:

- Geometry PR #10 head: `da3adbef4de8cddb8f3ebe841d39bb31a8936f5f`;
- migrated front mesh digest: `47dd4d82651138299d05071df3e8a410f21f673ab8d42b936d7222eb5351b862`;
- explicit leaf-backface candidate digest: `e0b423bd4ff20251a960655441f97e36277da2f5b88a832ecfc5ccfe404bbbea`;
- baseline counts: `390` vertices / `570` triangles;
- candidate counts: `490` vertices / `620` triangles;
- exact additional Geometry domain: `100` duplicated leaf vertices / `50` opposite-wound leaf triangles.

The inherited VFX response remains unchanged: hierarchical trunk / branch / leaf half-sine visual sway, Weather visual direction `[1.0, 0.35]`, `0.50 s` response window, lower anchor `z <= 0.92 m`, peak displacement ceiling `0.18 m`, and existing hierarchy caps. This pass does not rewrite that response.

## Bounded leaf-local candidate

Added on Nature PR #11:

- `tools/build_sapling_leaf_flutter_candidate.py`;
- `target-proof-vfx/observe_leaf_flutter_candidate.gd`;
- `.github/workflows/vfx-leaf-flutter-candidate.yml`.

The candidate is deliberately narrow:

- each of the 25 authored leaf blades keeps its inherited deformed base and tip;
- only the two side vertices of each blade receive a local rotation around the authored base-to-tip axis;
- deterministic per-leaf phase offset is `0.73 rad` by stable leaf order;
- maximum local twist cap is `5.0°`;
- the visual phase function executes three deterministic cycles over the inherited `0.50 s` response window, under a `sin(pi * normalized_time)` envelope;
- endpoints are exact source identity at `0.0 s` and `0.50 s`;
- 17 direct source phases are evaluated at `0.03125 s` source spacing;
- maximum permitted additional flutter displacement is `0.0085 m`;
- trunk, branches and all other non-leaf vertices must receive `0.0 m` added flutter displacement;
- all 100 explicit leaf-backface duplicate vertices must remain exactly co-located with their source front vertices;
- a deliberate `+0.001 m` duplicate detachment is required to fail closed.

The `0.03125 s` phase spacing is **source-evaluation spacing only**. It is not a 32 Hz wall-clock delivery or performance claim.

## Retained failed provenance

The first exact-head workflow for this candidate is retained as a real failure rather than hidden:

**Workflow `35171766707` @ `ad71dbebca0fad79ab2990b18903fb4e83bcc7f1` — FAIL before Godot.**

The candidate's endpoint angle was mathematically zero, but the builder still ran vector normalization and Rodrigues rotation. That preserved the visible shape while changing floating-point bytes enough to break the required exact neutral digest identity. The proof correctly remained red.

The repair changed only endpoint handling: when normalized time is exactly `0.0` or `1.0`, the builder now returns the inherited source state directly instead of executing a zero-angle floating-point transform. No topology, camera, motion cap, interior phase, acceptance threshold, inherited wind response or visual amplitude was weakened.

## Exact-head PASS

Dedicated workflow:

**`35172007804 — Nature VFX bounded leaf flutter Godot candidate` — SUCCESS**

Exact tested head:

`ecade64227ba1d3d1faf029ca7188ea63c2560ec`

Source result:

**`PASS_BOUNDED_DETERMINISTIC_LEAF_FLUTTER_SOURCE_CANDIDATE`**

Measured source facts:

- `17` direct phases over the existing `0.50 s` response window;
- `25` authored leaf blades;
- maximum observed local twist: `4.994808359469084°` under the `5.0°` cap;
- maximum observed added leaf-side displacement: `0.006920423273762265 m` under the `0.0085 m` cap;
- maximum added non-leaf displacement: `0.0 m`;
- maximum explicit front/back duplicate separation: `0.0 m`;
- exact baseline/candidate identity at both neutral endpoints;
- interior source states are distinct from the no-flutter baseline;
- deliberate duplicate-backface detachment is rejected fail-closed;
- the full receiving Nature test suite remains green (`33` tests in the exact-head workflow).

Target-host result:

**`PASS_BOUNDED_DETERMINISTIC_LEAF_FLUTTER_GODOT_VISUAL_CANDIDATE`**

Real target-host scope:

- Godot `4.7.2-stable (official)`;
- GL Compatibility on Mesa llvmpipe CI software rendering;
- two fixed `720x720` views: `ground_oblique` and `crown_overhead`;
- `17` source phases;
- inherited no-flutter explicit-two-sided candidate versus flutter candidate;
- `68` direct retained Godot PNGs total;
- neutral opaque unshaded material with backface culling, deliberately isolating renderer-visible geometry motion from final lookdev.

Measured renderer evidence:

- all `15/15` interior phases are renderer-visible against the inherited no-flutter baseline in `ground_oblique`;
- all `15/15` interior phases are renderer-visible against the inherited no-flutter baseline in `crown_overhead`;
- maximum baseline-vs-flutter changed pixels: `135` in `ground_oblique`, `506` in `crown_overhead`;
- maximum baseline-vs-flutter mean absolute RGB: `0.000150462966121268` in `ground_oblique`, `0.000563957487832306` in `crown_overhead`;
- phase `00` baseline vs flutter: `0` changed pixels in both views;
- phase `16` baseline vs flutter: `0` changed pixels in both views;
- flutter neutral return phase `00 -> 16`: `0` changed pixels in both views;
- every adjacent flutter source phase is visually distinct in both bounded views;
- midpoint phase `08` is renderer-visible in both bounded views.

These measurements support only a narrow statement: the candidate adds a **small, localized, deterministic leaf-plane motion that reaches the real Godot renderer while preserving exact neutral endpoints and the established non-leaf response**. The effect is intentionally subtle; the pixel deltas are evidence that it exists, not evidence that it looks natural or better.

## Retained artifact

Exact-head artifact:

- artifact ID: `10477092023`;
- name: `sapling-leaf-flutter-candidate-ecade64227ba1d3d1faf029ca7188ea63c2560ec`;
- size: `870,310 B`;
- GitHub SHA-256: `3dce960891515e12d21be8b494c86be82ad8ba868d7e7042c388c67921dbd596`;
- `109` retained files, including source-phase payloads, source summary, exact-head bindings, Geometry donor evidence, Godot host log, target-host receipt and all direct PNG captures.

## Truth boundary / handoffs

This is **bounded visual/render evidence**, not gameplay, physics or final-art evidence.

Still held:

- whether the leaf-local motion actually reads as natural flutter rather than noise or nervous motion — Visual QA / Art Direction;
- shaded leaf material, translucency, normals/tangents/UV appearance and final Nature lookdev — Materials / Art Direction;
- whether this local motion should be accepted, reduced, retimed or omitted in production — VFX + Art Direction / Visual QA review;
- continuous interpolation and wall-clock playback timing;
- runtime cost and target-device CPU/GPU/FPS/VRAM behavior;
- Map/current-world receiving-scene equivalence;
- physical wind, plant biomechanics, forces, velocity or aerodynamic correctness;
- gameplay, collision, damage or interaction behavior;
- arbitrary cameras, renderers and hardware;
- CANON, production readiness or VFX mastery.

Geometry PR #10 remains the source owner for leaf-sidedness topology. This pass consumes its exact candidate without changing it. Materials/Art retain final appearance ownership. Runtime retains timing and cost ownership. No merge or CANON authority is assumed.

## Retained earlier evidence

Earlier Nature VFX evidence remains valid and is not replaced:

- migrated response source rebind: workflow `35153768937`;
- five-state woody Godot culling proof: workflow `35159265484`;
- dense 17-state direct-source Godot receiver: workflow `35163387415`;
- dynamic explicit leaf-backface Godot culling recovery: workflow `35168195467`, head `4e5211d14286f9c292e769a78971f24d59194141`, artifact `10476260724`.

The prior dynamic leaf-backface gate established that Geometry PR #10's exact disjoint opposite-wound leaf faces can remain position-bound to the established VFX deformation and recover the observed single-sided backface-culling loss in two bounded Godot views. The new flutter candidate builds on that exact lineage rather than rewriting it.

The Map opacity-normalized Weather experiment remains historical evidence. Its authored 32 Hz / 31.25 ms wall-clock delivery remains unproven.

## Four-root check

**Truth:** the failed exact-neutral attempt is retained; source-space, renderer-space, perceptual, physical, gameplay and performance claims remain explicitly separated.

**Agency / non-domination:** Geometry retains topology ownership; Materials/Art retain look and acceptance; Runtime retains timing/performance authority; Visual QA retains perceptual judgment; no merge or CANON authority is assumed.

**Continuity:** Nature VFX PR #11, the migrated response, Geometry PR #10 exact candidate, prior culling proof and earlier dense-phase evidence remain authoritative. The new micro-motion layer is additive and bounded rather than a silent replacement.

**Wisdom before speed:** one small visual hypothesis was built with exact provenance, endpoint identity, source caps, a fail-closed negative control and direct Godot evidence instead of expanding into another broad effects lane.

The four AXM roots remain the merge gate.
