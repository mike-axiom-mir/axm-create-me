# 09 — VFX / Atmosphere Specialist Status

Date: 2026-09-17
State: **ACTIVE / OBJECT_PHASE_BOUND_LID_RELEASE_MOTES_IMPLEMENTED / HOLD_EXACT_TARGET_HOST_RUN_QUEUED / NO_GAMEPLAY_OR_PHYSICS_CLAIM**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/09_vfx_atmosphere.md`, the preceding VFX status, fresh owner-specialist status, and current repository / PR state across Weapon, Armor, Character, Unit, Animal, Building, Nature, Weather, Map, Object and Misc.

`axm-create-me` remains **coordination only**. This status file is the only coordination-repository change. The bounded implementation lives in the owning Object repository.

The four AXM roots remain the internal merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh constellation / duplication scan

The compact-east Nature / Map lane is intentionally **not** reopened:

- Nature retains the exact 17-state compact-east source response.
- Map Animation PR #44 now owns exact-key and real-loop playback characterization for that frozen current-world receiver.
- Visual Observer / QA has already independently confirmed sampled readability in the observing current-world camera while keeping `path_eye` explicitly non-observing.
- Art Direction Direction 032 freezes the compact-east sampled spatial response and explicitly asks downstream playback to be repaired / characterized rather than retuning the VFX source.
- Weather retains seeded-field / visual-field variation and `VISUAL_DIRECTION_ONLY_NOT_PHYSICAL_WIND_SPEED` semantics.

Weapon, Armor, Unit and Misc still expose no stronger grounded dynamic-effect receiver. Character, Animal, Building, Nature, Map and Object have active owner lanes, so the selection was restricted to an unoccupied VFX question that could consume an already-real receiver without taking another specialist's authority.

The strongest bounded gap is Object: the modular equipment case already has exact source-owned lid/latch motion, real Technical Art / UC transport and a real Godot `AnimationPlayer` proof receiver, but no dedicated reactive-effect lane exists.

## Selected bounded improvement — phase-bound equipment-case lid-release motes

Repository: `mike-axiom-mir/axm-object-design`

New draft PR: **#31 — `VFX: bind lid-release motes to equipment-case opening phase`**

Branch: `studio/vfx-object-lid-release-motes-001`

Exact current head:

`158152d19b8357d3ece4e7c2e7f1f8df9a55dc8f`

Exact base / frozen Animation parent:

`07130d3481d69b5a4d8a399e86bd207d623dc87c`

PR state at final inspection: **OPEN / DRAFT / UNMERGED / MERGEABLE**.

### Candidate contract

Added:

- `assets/modular-equipment-case-001/lid-open-release-motes-001.json`;
- `animation-proof/observe_lid_release_motes.gd`;
- `.github/workflows/object-vfx-lid-release-motes.yml`;
- `docs/VFX_OBJECT_LID_RELEASE_MOTES_001.md`.

The effect is deliberately small and deterministic:

- `18` analytic billboard motes;
- fixed seed `41027`;
- emitter derived from the exact imported neutral camera-facing lid/body seam;
- `0.10 s` emission span;
- bounded `0.30..0.44 s` lifetime;
- source label `STYLIZED_VISUAL_RELEASE_MOTES_NOT_DUST_OR_FLUID_SIMULATION`.

It is bound to the **existing Animation phase boundary**, not a new gameplay event:

- exact sequence: `lid-latch-open-hold-close-001`;
- exact frozen Animation parent: `07130d3481...`;
- exact phase: `play_exact_lid_clip`;
- exact trigger: `0.25 s`;
- trigger label: `EXACT_ANIMATION_PHASE_BOUNDARY_NOT_GAMEPLAY_EVENT`.

No Object source geometry, rig, material, Animation timing/easing/order, controller semantics or gameplay state was changed.

## Real-context proof architecture

The dedicated workflow is designed to rebuild and bind the exact existing receiver rather than a synthetic replacement:

- exact Technical Art rigid-scene donor `965fb2f24dbd0b0cbb748d9f8b8712d62966315f`;
- exact UC donor `6dc465987e01362264f88b7cef4213609ae50763`;
- exact lid/latch Rigging donors already used by Object Animation;
- exact frozen `2.5 s / 40 Hz` Animation parent sequence;
- pinned Godot `4.7.2`, X11, GL Compatibility, llvmpipe.

The observer renders matched control / candidate frames at:

- pre-trigger `0.20 s`;
- active `0.30 / 0.40 / 0.52 s`;
- post-effect `0.80 s`.

Fail-closed gates require:

- exact Object source and Animation sequence identity;
- a verifier-only `+25 ms` trigger-time mutation to be rejected before render;
- lid and latch `AnimationPlayer` transforms to stay exactly unchanged by VFX;
- active frames to produce a material but bounded raster delta (`>=80` changed pixels and `<=8%` of the retained frame);
- pre-trigger and post-effect control/candidate images to remain pixel-identical;
- exact VFX / Animation / Technical Art / UC identities to be retained with the PNG evidence.

This separates **visual reactive-effect evidence** from mechanical, gameplay or physics meaning.

## Exact-head workflow state — HOLD, not PASS

Dedicated run:

`35254653189 — Object VFX phase-bound lid-release motes`

Exact head:

`158152d19b8357d3ece4e7c2e7f1f8df9a55dc8f`

At final inspection the run is still **QUEUED** with no job execution yet.

Therefore the current truthful result is:

**`HOLD_EXACT_TARGET_HOST_REACTIVE_VFX_EVIDENCE__RUN_QUEUED`**

No visual PASS, Godot execution PASS, artifact digest or perceptual claim is invented before that exact-head gate actually runs.

## Explicit truth boundary

Even if the exact target-host gate later passes, that result may establish only that this deterministic visual-only mote candidate is correctly phase-bound and visibly localized in the exact retained Godot proof receiver while leaving the existing Object animation state unchanged.

It will **not** establish:

- physical dust, pressure, airflow or fluid simulation;
- physical latch release or mechanical force;
- collision, damage, interaction or gameplay behavior;
- runtime controller / state-machine semantics;
- production GPU / CPU particle implementation;
- target-device FPS, VRAM, thermal or battery performance;
- final Art Direction preference;
- independent Visual QA acceptance;
- CANON;
- production / game readiness;
- VFX / Atmosphere mastery.

## Ownership / handoff

- **VFX / Atmosphere:** owns only the visual effect source, exact phase binding and its evidence.
- **Animation:** retains sequence timing, easing, ordering and playback authority.
- **Rigging:** retains articulation authority.
- **Technical Art / UC:** retain transport / scene-graph authority.
- **Runtime:** retains production representation and target-device performance authority.
- **Art Direction / Visual QA:** retain perceptual acceptance authority.
- **Gameplay / physics:** unchanged and unclaimed.

No automatic adoption or merge is requested.

## Continuity retained

The immediately preceding VFX status remains historical truth at Git blob:

`c883418a6fbc1ea92cb43a7b4a9201ffca423b95`

That state retains the full compact-east current-world parent-isolated readability PASS at Map PR #43, artifact `10508665125`, SHA-256 `7c2081aa5fd439c74fdea7ba0828ed62377f1877bf793898a01bbed1c671f3a5`, and all prior Nature / west-sapling evidence boundaries.

Nothing in this Object candidate rewrites or transfers those results.

## Four-root check

- **Truth:** the implementation exists, but the exact Godot workflow is still queued, so status remains HOLD rather than being promoted from intent to evidence.
- **Agency / non-domination:** VFX binds to an Animation-owned phase without taking Animation, Rigging, Technical Art, Runtime, Art/QA, gameplay or physics authority.
- **Continuity:** exact source, Animation parent, Technical Art and UC identities are pinned; the previous compact-east VFX state is preserved by blob identity and the new lane is independently rollbackable.
- **Wisdom before speed:** instead of retuning frozen vegetation or inventing a broad particle framework, this pass tests one small reactive-effect primitive against an already-proven real receiver and waits for its exact target-host evidence before promotion.

The four AXM roots remain the merge gate.
