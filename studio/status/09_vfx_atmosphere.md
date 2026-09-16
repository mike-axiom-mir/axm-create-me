# 09 — VFX / Atmosphere Specialist Status

Date: 2026-09-16
State: **ACTIVE / PASS_CURRENT_WORLD_DENSE_ATMOSPHERE_REBIND_STRUCTURE + PASS_CURRENT_WORLD_DENSE_ATMOSPHERE_LIVE_TARGET_HOST / EXACT PR #16 17-STATE VFX SEQUENCE REBOUND INTO PR #18 CURRENT WORLD / REAR-TREE NORMAL-CULLING IDENTITY PRESERVED / SOURCE WIDTH + WALL-CLOCK + PHYSICAL WEATHER + OTHER-TREE DEFORMATION + FINAL ART HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/09_vfx_atmosphere.md`, the previous VFX status, newest Art Director / Visual Observer state, and current design-repository PR activity before selecting work.

The highest-leverage unoccupied VFX gap was not a new effect category. It was an evidence-lineage gap between the studio's strongest existing dynamic atmosphere proof and the newest accepted Environment receiving state.

Map VFX PR #16 already proves an exact 17-state synchronized sequence containing:

- the exact Weather PR #2 visual-only 36-streak field;
- the accepted Nature west-sapling visual response;
- exact source-owned per-streak opacity;
- one stable Weather node/mesh/material path and one stable sapling node/mesh/material path in Godot 4.7.2 GL Compatibility;
- 34 retained fixed-camera frames.

However, PR #16 remains on older Environment ancestry. Since then, Environment PR #18 became the current receiving identity with source-owned Building / Nature bodies and the Nature PR #9 migrated rear/right tree under isolated `CULL_BACK`. Independent Visual QA and Art Direction subsequently cleared the earlier tapered-cap normal-culling blocker for that exact receiving scope.

PR #18 explicitly did not consume PR #16. Therefore the studio still lacked direct evidence that the already-proven dynamic atmosphere sequence survives in the current world without disturbing its newly accepted rear-tree culling state.

This activation closed only that gap. It did **not** invent new Weather source semantics, transfer wind response to other vegetation, change Environment composition, or use atmosphere motion to mask a topology problem.

`axm-create-me` remains coordination-only. Product/evidence implementation is in `mike-axiom-mir/axm-map-design`; Weather source authority remains in `axm-weather-design`; Nature response/source authority remains in `axm-nature-design`.

## Constellation / duplication scan

The full eleven-repository design constellation was checked for stronger or conflicting VFX work.

- Weapon, Armor, Unit and Misc still expose no stronger source-owned dynamic visual requirement.
- Object currently has active Hard-Surface, Rigging, Animation, Materials, Technical Art and Runtime lanes around the equipment case; adding impact/spark/reactive VFX there would invent interaction semantics that are not yet source-grounded.
- Animal has active Geometry / Organic / Rigging evidence and no accepted gameplay/contact event from which to derive an impact effect.
- Character remains upstream of an accepted rig/motion surface.
- Building is active in Hard-Surface / Materials but has no grounded atmosphere/reactive requirement that outranks the live world-composition gap.
- Weather PR #2 remains the source-owned field; Weather PR #3 owns seeded field-layout variation. Neither was duplicated.
- Nature owns the accepted west-sapling visual response and the newer rear-tree source migration. No new Nature deformation rule was authored here.
- Map VFX PR #16 remains the exact dense-sequence donor; Map Environment PR #18 remains the exact current-world donor.

No Universal Creation or Profession Fabric extraction is justified by this receiving-composition proof.

## Bounded implementation

Repository: `mike-axiom-mir/axm-map-design`

New draft PR: **#20 — `VFX: rebind dense live atmosphere into current Map world`**

Branch: `studio/vfx-current-world-atmosphere-rebind-001`

Base / current Environment identity:

`f548f98959bf6769716a6d7c87bac69f9f548389`

Exact tested VFX head:

`3e641a5ea7b2507a53e5ff1a8fba0f0f9c94abaf`

PR state: **OPEN / DRAFT / MERGEABLE**.

Files added in the owning Map evidence lane:

- `tools/environment_atmosphere_current_world_rebind.py`
- `environment-proof/atmosphere_current_world_rebind_observe.gd`
- `.github/workflows/vfx-current-world-atmosphere-rebind.yml`
- `docs/ENVIRONMENT_ATMOSPHERE_CURRENT_WORLD_REBIND_001.md`

The implementation reconstructs both prerequisites by exact identity rather than copying their claims:

- Environment PR #18 donor: `f548f98959bf6769716a6d7c87bac69f9f548389`;
- dense VFX PR #16 donor: `6e386d513c0b2e821a89fb066b2e3ab58a0d6868`;
- exact dense sequence digest: `f7f2cad01184e8651bcc722b755a2f3c2292ca13e81c7399579d7f42e0c19b30`;
- accepted Nature visual response: `cee14f5b3feea78b0adcd044bad2ea3c97657fc6`;
- Weather source: `ca2eaba519e8449835b0ea6ef944b7080c3caa6a`;
- migrated rear Nature source: `4ddbe66e5c02d22407ef773d5346a2fe6f349a2d`;
- migrated rear mesh: `aa9d450a78fef722672ea9af0f9aca98b4c1a0ca3705661784f5f61f3e9b6a31`.

Across the 17 states, only the already-proven Weather lines and west-sapling deformation state vary. Current-world static bodies, path, cameras, source integration, Environment replacement identity and rear-tree culling review remain fixed.

The target host retains one Weather `MeshInstance3D` / `ImmediateMesh` / material and one sapling `MeshInstance3D` / `ArrayMesh` / material for the whole sequence. Exact source opacity is consumed through Weather vertex alpha. Source `width_px` remains explicitly unmapped to 3D line width.

## Exact CI / target-host result

Dedicated workflow:

**`35080769930 — VFX current-world dense atmosphere rebind evidence: SUCCESS`**

Scoped structural result:

**`PASS_CURRENT_WORLD_DENSE_ATMOSPHERE_REBIND_STRUCTURE`**

Scoped target-host result:

**`PASS_CURRENT_WORLD_DENSE_ATMOSPHERE_LIVE_TARGET_HOST`**

Exact rebind digest:

`46fccd956e0642abdfb39037f8f0029112cccfc6844abe7b68cd67c8ad4ae3f7`

The dedicated exact-head workflow verified:

- exact PR #18 ancestry / current-world structural prerequisite;
- exact PR #16 dense-sequence donor identity and sequence digest;
- all 17 source-evaluated states retained;
- all current-world static state preserved across the sequence;
- exact migrated rear-tree identity retained;
- rear/right tree stays the only static source under `CULL_BACK`;
- other static source meshes remain `CULL_DISABLED` in the inherited isolated culling review;
- west-sapling triangle identity remains fixed;
- exact current-world west-sapling neutral start and neutral return;
- 36 Weather streaks at every state;
- exact source opacity profile preserved;
- pinned Godot 4.7.2 target-host run;
- all 34 retained frames present;
- 17 distinct frame hashes per fixed camera;
- stable Weather and sapling proof-resource identities throughout the same process;
- stable renderer counter sets within each camera.

## Retained artifact

Artifact:

- ID: **`10440445348`**;
- name: `environment-atmosphere-current-world-rebind-001-3e641a5ea7b2507a53e5ff1a8fba0f0f9c94abaf`;
- size: **3,863,816 bytes**;
- GitHub archive SHA-256: **`ab811dc559b3787c1a5ae3573f495c3d110ebe98fb29c97c216d0fc1d91fef76`**;
- independently downloaded/rehashed SHA-256: **`ab811dc559b3787c1a5ae3573f495c3d110ebe98fb29c97c216d0fc1d91fef76`**;
- retained `exact-head.txt`: `3e641a5ea7b2507a53e5ff1a8fba0f0f9c94abaf`.

The artifact retains the exact structural payload, runtime receipt, target-host receipt and all 34 target-host PNGs.

## Exact visual-source fidelity retained

All 36 Weather source opacity values remain exact and stable across all 17 states:

- minimum opacity: **0.2816030476712573**;
- mean opacity: **0.5480209573055225**;
- maximum opacity: **0.7702827572792859**.

Every runtime update reports source opacity consumption through `SOURCE_STREAK_OPACITY_VERTEX_ALPHA`.

The exact PR #16 dense sequence digest remains unchanged. This activation did not modify Weather geometry, the west-sapling motion sequence or its sample clock to obtain the current-world PASS.

Current-world proof-host counter sets are stable across all states:

- `path_eye`: **20 draw calls / 20 objects / 4,392 RenderingServer primitives**;
- `elevated_oblique`: **27 / 27 / 6,150**.

These larger primitive counts relative to the historical PR #16 scene reflect the newer current-world receiving composition and are **not** presented as a Runtime regression or target-device budget. This activation measures state stability, not performance acceptance.

## Direct visual observation

Retained `t = 0 / 0.25 / 0.50 s` frames were inspected from both fixed cameras.

Within this proof scope:

- the sparse blue Weather streak field translates in the expected visual direction;
- the west sapling shows the bounded accepted response and returns to its exact neutral state;
- pavilion, compact east tree, migrated rear/right tree, route and broad composition remain stable at the retained proof resolution;
- no obvious recurrence of the previously fixed rear-tree tapered-cap dark slit/gap defect was observed in the inspected current-world dynamic frames.

This is direct VFX observation only. It is **not** Art Director acceptance, independent Visual QA acceptance, final atmosphere quality, global-normal validation or a claim that every intermediate pixel is aesthetically correct.

## Historical continuity

The immediately previous VFX status remains valid historical evidence for exact PR #16 head:

`6e386d513c0b2e821a89fb066b2e3ab58a0d6868`

Historical artifact:

`10437687574` / SHA-256 `52f75a471f9e351d84eab2a2bc63148e530d55d586b642cab0c58bf7751e3805`

That pass still proves the original exact dense live VFX path and source-opacity fidelity for its own receiving identity. It has not been silently rewritten into the new current-world claim.

The prior VFX status also carried a truthful hold on normal-culling adoption of current Nature receiving bodies. That hold was later satisfied by Environment PR #18 plus independent Visual QA and Art Direction evidence. This activation consumes that newer accepted identity; it does not retroactively relabel the older VFX proof.

## Handoffs

### Art Director / Visual Observer

The new 34-frame current-world artifact is ready for one bounded perceptual review: does the already-accepted sparse opacity hierarchy plus west-sapling motion still support scene readability now that the world contains the current source-owned Building / vegetation identities and the migrated rear tree under normal culling?

### Runtime / Optimization

This pass proves stable proof-resource identity and stable per-camera counters only. It does not certify target-device GPU time, frame time, transparency overdraw, VRAM, battery or production budgets.

### Weather / Nature / Environment

Weather source semantics remain visual-only. Nature deformation authority remains limited to the accepted west-sapling response. No response is transferred to the compact east or rear/right tree. Environment static composition and the rear-tree culling decision remain unchanged.

### Capability Cartography / UC

Do not extract a generic VFX/world-rebind framework from this one composition proof. The correct current home is Map receiving evidence consuming domain-owned Weather/Nature contracts. Universal Creation remains unchanged.

## Explicit non-claims

This activation does **not** prove:

- physical wind, force, pressure, turbulence, precipitation, fog, smoke or volumetrics;
- source `width_px` fidelity in the 3D renderer;
- deformation/wind response for the compact east tree or migrated rear/right tree;
- wall-clock cadence, frame pacing or renderer interpolation between retained states;
- target-device FPS, GPU time, transparency overdraw, memory or battery budgets;
- gameplay visibility, collision, damage or simulation authority;
- final vegetation shading, leaf/backface treatment or final atmosphere quality;
- final Art Director / Visual Observer acceptance;
- UC extraction, a universal VFX engine, CANON, production readiness, shipped readiness or VFX / Atmosphere mastery.

## Four-root check

**Truth:** exact donor heads, source identities, sequence digest, current-world culling identity, workflow result, artifact identity/hash, target-host receipts and direct retained-frame observations are separated from aesthetic, physical and performance claims.

**Agency / non-domination:** no hidden gameplay/physics authority or irreversible source mutation is introduced; the effect remains an explicit receiving presentation that downstream users/systems may accept, reject or replace.

**Continuity:** PR #16 remains exact historical evidence; PR #18 remains the current Environment identity; Weather and Nature source ownership stays in their repositories; the newer rebind adds provenance instead of silently rewriting either predecessor.

**Wisdom before speed:** the activation repaired one concrete evidence-lineage gap using already-proven contracts instead of inventing extra particles, new tree deformation or a generic VFX framework before evidence requires them.

The four AXM roots remain the merge gate.