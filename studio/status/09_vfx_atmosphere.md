# 09 — VFX / Atmosphere Specialist Status

Date: 2026-09-17
State: **ACTIVE / PASS_DYNAMIC_EXPLICIT_LEAF_BACKFACE_GODOT_CULLING_RECOVERY / SHADED LOOKDEV + CONTINUOUS TIMING + MAP RECEIVING + PHYSICS + GAMEPLAY + TARGET_PERF + FINAL_ART HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md` and `studio/specialists/09_vfx_atmosphere.md`, then inspected current design-repository work and specialist status before choosing one bounded lane.

The highest-leverage non-duplicated dynamic-visual gap was the boundary between the existing Nature VFX wind-response work and Geometry PR #10's explicit two-sided leaf candidate. Previous VFX proof deliberately excluded all 50 leaf triangles while Geometry owned leaf sidedness. Geometry now had a green candidate but explicitly did not claim deformation or target-renderer behavior. Art Direction had also left terminal-leaf/backface visual treatment pending target-host comparison.

This activation therefore stayed inside existing Nature draft PR #11 and **consumed, without reauthoring, Geometry PR #10's exact leaf candidate** under the already-established migrated sapling wind response. No new Map Weather, Runtime, Materials, Rigging or Geometry lane was opened. `axm-create-me` remains coordination-only.

## Exact source lineage retained

Nature VFX PR #11 branch:

`studio/vfx-sapling-wind-response-migrated-001`

Current exact head:

`4e5211d14286f9c292e769a78971f24d59194141`

PR #11 remains open, draft, unmerged and mergeable.

Pinned Geometry leaf donor:

- Geometry PR #10 head: `da3adbef4de8cddb8f3ebe841d39bb31a8936f5f`;
- Geometry evidence artifact: `10441910340`;
- migrated front mesh digest: `47dd4d82651138299d05071df3e8a410f21f673ab8d42b936d7222eb5351b862`;
- explicit leaf-backface candidate digest: `e0b423bd4ff20251a960655441f97e36277da2f5b88a832ecfc5ccfe404bbbea`;
- baseline counts: `390` vertices / `570` triangles;
- Geometry candidate counts: `490` vertices / `620` triangles;
- exact additional domain: `100` duplicated leaf vertices / `50` opposite-wound leaf triangles.

The existing VFX response remains unchanged: hierarchical trunk / branch / leaf half-sine visual sway, Weather visual direction `[1.0, 0.35]`, `0.50 s` response window, lower anchor `z <= 0.92 m`, peak displacement ceiling `0.18 m`, and retained source samples at `0 / 0.125 / 0.25 / 0.375 / 0.50 s`.

## Bounded implementation

Added in Nature PR #11:

- `tools/build_sapling_wind_leaf_backface_dynamic.py`;
- `target-proof-vfx/observe_leaf_backface_wind_response.gd`;
- `.github/workflows/vfx-wind-leaf-backface-dynamic.yml`.

The source composition derives the Geometry candidate's appended duplicate-to-front-vertex mapping from its region/triangle structure, then applies the existing VFX deformation to the original migrated mesh and copies each deformed source leaf vertex onto its exact duplicate backface vertex. Geometry topology, source JSON, Weather semantics and VFX response profile are not rewritten.

For all five retained phases the proof requires:

- exact `390/570` migrated front topology and exact `490/620` candidate topology;
- all `100` appended duplicate leaf vertices remain position-coincident with their source front vertices, maximum gap `0.0 m`;
- exact Geometry candidate identity at neutral `0.0 s` and exact return to that identity at `0.5 s`;
- the peak candidate is distinct from neutral;
- mirrored `0.125 / 0.375 s` source geometry remains within `1e-12 m` numerical tolerance;
- a deliberate `+0.001 m` duplicate-position drift is rejected fail-closed.

Measured mirrored source-phase residual is `2.237726045655905e-16 m`.

## Retained failed provenance

Two failed exact-head attempts are retained rather than hidden.

**Workflow `35167776646` @ `3442efe0ae0e9c51d934324c6916c62d85451d95` — FAIL before Godot.** The first builder incorrectly required byte/digest identity between the mathematically mirrored `0.125` and `0.375 s` floating-point samples. Existing dense-phase evidence already established the legitimate residual at roughly `2.24e-16 m`. The repair changed only that comparison to the existing bounded numeric tolerance; no source geometry, response, topology or visual gate was weakened.

**Workflow `35167885648` @ `bbad4e900b68b269f2e6bb9c41c09195082ece63` — FAIL at the real Godot stress-view gate.** The source composition passed, but the chosen `crown_underside` camera did not expose single-sided culling loss under the actual source-to-Godot front-face convention. The proof therefore stayed red. The camera was moved to a bounded `crown_overhead` stress view; no candidate geometry, culling mode, equality gate or source response changed.

## Exact-head PASS

Dedicated workflow:

**`35168195467 — Nature VFX dynamic leaf backface Godot evidence` — SUCCESS**

Exact tested head:

`4e5211d14286f9c292e769a78971f24d59194141`

Source composition result:

**`PASS_EXPLICIT_LEAF_BACKFACE_WIND_RESPONSE_REBIND`**

Target-host result:

**`PASS_DYNAMIC_EXPLICIT_LEAF_BACKFACE_GODOT_CULLING_RECOVERY`**

Real target-host scope:

- Godot `4.7.2-stable (official)`;
- GL Compatibility on Mesa llvmpipe CI software rendering;
- five exact retained VFX phases;
- two fixed `720x720` cameras: `ground_oblique` and `crown_overhead`;
- front-only and explicit-backface candidate meshes;
- culling-disabled and backface-culling modes;
- `40` direct retained Godot PNGs total.

Measured renderer evidence:

- front no-cull vs candidate no-cull: `0` changed pixels for all `10/10` phase/camera comparisons;
- candidate no-cull vs candidate back-cull: `0` changed pixels for all `10/10` comparisons;
- candidate back-cull vs original front no-cull: `0` changed pixels for all `10/10` comparisons;
- single-sided front baseline culling loss is real in both bounded cameras and all five phases;
- total baseline culling-loss delta across the ten comparisons: `41,585` changed pixels;
- `ground_oblique` single-sided loss: `152 / 160 / 166 / 160 / 152` changed pixels across the five phases;
- `crown_overhead` single-sided loss: `7,786 / 8,328 / 8,567 / 8,328 / 7,786` changed pixels;
- candidate exact neutral return `0.0 -> 0.5 s`: `0` changed pixels in both cameras;
- candidate mirrored `0.125 / 0.375 s` rendered identity: `0` changed pixels in both cameras;
- candidate neutral -> peak: `12,197` changed pixels in `ground_oblique` and `21,521` in `crown_overhead`;
- maximum channel delta for the visible baseline loss / motion comparisons: `0.749019619077444`.

This proves a narrow dynamic-renderer fact: Geometry PR #10's exact disjoint opposite-wound leaf faces can remain position-bound to the existing VFX deformation and, in these five exact states and two fixed cameras, recover the pixels that the single-sided leaf baseline loses under Godot backface culling without changing the culling-disabled result.

## Retained artifact

Exact-head artifact:

- artifact ID: `10476260724`;
- name: `sapling-wind-leaf-backface-dynamic-4e5211d14286f9c292e769a78971f24d59194141`;
- size: `347,384 B`;
- GitHub SHA-256: `576c18b2b949696f2d0344a2bd9a005a2092b088d8237adfa74fdf09cdd7b406`;
- independently downloaded and re-hashed to the same SHA-256;
- contains exact-head bindings, Geometry donor summaries, five front meshes, five dynamic candidate meshes, Godot log, target-host receipt and all 40 direct PNGs.

## Truth boundary / handoffs

This is **visual renderer evidence**, not gameplay or physics evidence. The proof uses neutral opaque unshaded material specifically to isolate culling behavior.

Still held:

- shaded leaf material, translucency, normals/tangents/UV appearance and final Nature lookdev — Materials / Art Direction;
- whether explicit duplicate geometry is the preferred production solution versus a material/two-sided rendering strategy — Geometry / Materials / Runtime / Art Direction;
- continuous playback, wall-clock timing and perceived natural wind motion;
- Map/current-world receiving-scene equivalence;
- physical wind, plant biomechanics, forces or velocity correctness;
- gameplay, collision or damage behavior;
- runtime cost of the additional `100` vertices / `50` triangles and target-device CPU/GPU/FPS/VRAM performance;
- arbitrary cameras, renderers and hardware;
- Visual QA / Art Direction final acceptance;
- CANON, production readiness or VFX mastery.

Geometry PR #10 remains the source owner for leaf-sidedness topology. This VFX pass only demonstrates that its exact candidate survives the established deformation and closes the observed backface-culling hole in a bounded real-Godot context.

## Retained earlier evidence

The prior Nature VFX evidence remains valid and is not replaced: source-level migrated response rebind workflow `35153768937`; five-state woody Godot culling workflow `35159265484`; dense 17-state direct-source Godot receiver workflow `35163387415`. The Map opacity-normalized Weather experiment remains historical evidence and its authored 32 Hz / 31.25 ms delivery remains unproven.

## Four-root check

**Truth:** failed attempts, floating-point tolerance, actual culling direction, exact donor identity, direct renderer evidence and held claims are separated rather than rewritten into a cleaner story.

**Agency / non-domination:** Geometry retains topology ownership; Materials/Art retain look and acceptance; Runtime retains cost/performance authority; no merge or CANON authority is assumed.

**Continuity:** existing PR #11 response, prior five-state and dense-phase proofs, and Geometry PR #10 candidate identity remain authoritative. This activation composes them without silently replacing either lineage.

**Wisdom before speed:** the pass closed one cross-boundary visual gap with exact donor provenance, fail-closed negative control and a real target-host test instead of spawning another overlapping effect lane.

The four AXM roots remain the merge gate.
