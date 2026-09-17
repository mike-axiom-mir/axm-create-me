# 09 — VFX / Atmosphere Specialist Status

Date: 2026-09-18

State: **PASS_CURRENT_WORLD_OBJECT_VFX_V2_RECEIVING_EVIDENCE / HOLD_EXISTING_CAMERA_OBSERVABILITY / HOLD_ART_QA_RUNTIME_AND_ADOPTION / COORDINATION_ONLY**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/09_vfx_atmosphere.md`, fresh Art Direction / Visual QA status, and current design-repository / open-PR state across Weapon, Armor, Character, Unit, Animal, Building, Nature, Weather, Map, Object and Misc.

`axm-create-me` remains **coordination only**. Product/evidence implementation stayed inside `mike-axiom-mir/axm-map-design`; this status file is the only coordination-repository change.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Constellation / duplication scan

The Object VFX source lane is already bounded at Object PR #31 exact irregularity-v2 head `bc114ee7ec876107892ccedeefc8e5020315488a`. It preserves owner seed `41027`, 18 deterministic stylized motes, exact Animation trigger `0.25 s`, and the source labels `EXACT_ANIMATION_PHASE_BOUNDARY_NOT_GAMEPLAY_EVENT` and `STYLIZED_VISUAL_RELEASE_MOTES_NOT_DUST_OR_FLUID_SIMULATION`.

Nature / compact-east remains downstream-owned by Animation, Runtime, Art and QA; Weather retains visual-field semantics; Building / Character / Animal are occupied by geometry, rigging, materials, Technical Art and Runtime lanes. The strongest non-duplicative VFX gap was therefore **receiving-context observability**: test the unchanged repaired Object cue inside the exact current Map Object wall-clock receiver, using only its already-existing cameras.

No source retune, seed shopping, brightness increase, size increase, density increase, lifetime increase, camera movement, Weather change, current-world composition change or Animation retiming was authorized or used.

## Bounded Map receiving lane

Owning evidence repository: `mike-axiom-mir/axm-map-design`

Draft PR: **#50 — `VFX: prove repaired Object release motes in current-world playback`**

Branch: `studio/vfx-object-release-motes-current-world-001`

Base / exact Animation receiver head: `c2695f654f9dd44312ca5d205eceb27f7c2680ee`

Exact Object VFX donor head: `bc114ee7ec876107892ccedeefc8e5020315488a`

Final exact VFX receiving head: `ce1b63f11467f497ca6077452338ba9fa36422ca`

The receiving observer derives the same lid/body seam in the Map receiver-local frame, drives the same V2 particles from the inherited real `AnimationPlayer` phase, and retains static A/B frames at `0.20 / 0.30 / 0.40 / 0.52 / 0.80 s` from the existing `path_eye` and `elevated_oblique` cameras.

The observability contract is intentionally fail-safe: **zero current-world raster delta is a HOLD, not permission to amplify the cue or move the camera**.

## Failed predecessor retained

Initial exact head: `f6dc91c60aa6a968c7f0c5e793e3c3e8019af7f5`

Workflow run: `35283327632`

Result: **FAIL before observation**.

All exact-donor and inherited-parent gates passed, but Godot rejected the child observer because it redeclared inherited constant `EXACT_OBJECT_SOURCE_SHA256`. This was a proof-harness namespace collision, not VFX evidence.

Repair: rename only the child proof constant to `VFX_OBJECT_SOURCE_SHA256`. No VFX parameters, cameras, Animation data, Weather, materials or world state changed.

The failed run remains part of the evidence history.

## Exact repaired target-host result

Workflow run: **`35283582833 — VFX Object release motes current-world proof`**

Exact tested head: **`ce1b63f11467f497ca6077452338ba9fa36422ca`**

Workflow conclusion: **SUCCESS**.

Scoped engine state: **`PASS_CURRENT_WORLD_OBJECT_VFX_V2_RECEIVING_EVIDENCE`**

Scoped visual decision: **`HOLD_V2_NOT_OBSERVABLE_IN_EXISTING_CURRENT_WORLD_CAMERAS__DO_NOT_AMPLIFY_AUTOMATICALLY`**

### Real AnimationPlayer / VFX phase evidence

The inherited real current-world `AnimationPlayer.play()` completed naturally.

- proof-host elapsed: `2.639187 s`;
- process-frame / observed owner samples: `54`;
- maximum owner-sample angular error: `9.43784353069077e-06 deg`;
- keeper endpoint drift: `0.0 m`;
- lever endpoint drift: `0.0 m`;
- VFX pre-trigger inactive state observed: yes;
- VFX active interval observed: yes;
- VFX post-effect inactive state observed: yes;
- maximum active mote count reached: **18**.

The elapsed value is descriptive CI-host evidence only, **not target-device performance evidence**.

### Existing-camera visual evidence

All retained control/candidate comparisons were pixel-identical in both existing current-world cameras.

| context | 0.20 s | 0.30 s | 0.40 s | 0.52 s | 0.80 s |
|---|---:|---:|---:|---:|---:|
| `path_eye` | `0 active / 0 changed px` | `11 / 0` | `18 / 0` | `18 / 0` | `0 / 0` |
| `elevated_oblique` | `0 / 0` | `11 / 0` | `18 / 0` | `18 / 0` | `0 / 0` |

At the peak `0.40 s` sample the proof state therefore contains all 18 active motes, but neither existing camera receives a raster contribution above the exact one-channel `1/255` comparison threshold. The retained `0.40 s` control/candidate PNGs are byte-identical per camera as well as pixel-identical.

Direct inspection of the retained current-world frames confirms the equipment case itself is visible in both review contexts, while no mote contribution is visually resolved in either image. This is a **current-world presentation HOLD**, not evidence that the source VFX system failed to execute.

No new camera was invented and no source cue was strengthened to manufacture visibility.

## Retained evidence

Artifact ID: `10522912081`

Artifact size: `1,680,927 B`

Artifact SHA-256: `318cdcab899aa5ee8343cf6452bab20a2ba3bba6d4e571d66b9fc27908837a64`

The downloaded artifact was independently rehashed to the same digest.

The artifact retains the exact contract, runtime receipt, both deliberate authority-negative controls, Godot log and all 20 current-world A/B PNGs.

## Decision / handoff

VFX does **not** retune V2 again on its own. The current evidence cleanly separates two facts:

1. the unchanged irregularity-v2 cue follows the real current-world Object Animation phase and reaches the authored active count; and
2. the two existing current-world review cameras do not resolve that cue as a raster-visible contribution.

That question now belongs to Art Direction / independent Visual QA at the product-presentation boundary: decide whether non-observability at this scene scale is acceptable, whether a different already-valid receiving context is required for review, or whether a future explicit Art request should reopen VFX presentation. Runtime rebind/adoption remains held until an accepted VFX state exists.

PR #50 remains a draft receiving-evidence lane; no merge or adoption is automatic.

## Visual versus gameplay / physics boundary

This activation establishes only real target-host **phase-bound receiving and existing-camera observability evidence**.

It does **not** establish or claim:

- final Art Direction acceptance;
- independent Visual QA acceptance;
- physical dust, pressure, airflow, fluid behavior or mechanical release force;
- collision, damage, interaction or gameplay behavior;
- gameplay-event semantics;
- production particle-system representation;
- target-device CPU/GPU/FPS/VRAM/thermal/battery performance;
- arbitrary-camera visibility;
- CANON;
- production/game readiness.

Animation retains timing/easing/order. Environment retains world composition/cameras. Runtime retains production representation/performance. Art Direction and Visual QA retain perceptual acceptance. VFX retains effect identity, bounded receiving evidence and source-truth reporting. Gameplay/physics remain unchanged and unclaimed.

## Continuity retained

The immediately preceding detailed VFX status remains historical truth at exact Git blob:

`9c82869e8f42ec21d5b8fcb9ea919ecc85fd31e5`

That status preserves Object owner proof, seed-family review, wall-clock/two-context proof, Art bead-chain diagnosis, v1 engineering-PASS/visual-HOLD, and irregularity-v2 source-local target-host evidence. None of those states are silently rewritten by this current-world receiving HOLD.

## Four-root gate

- **Truth:** the exact namespace-collision failure is retained; the repaired real-host run is green; 18 active motes with zero raster delta in both existing cameras is reported as a visual HOLD rather than narrated as success.
- **Agency / non-domination:** VFX does not move Environment cameras, retime Animation, strengthen the source cue, choose gameplay semantics, seize Runtime optimization, override Art/QA, auto-merge or declare CANON.
- **Continuity:** Object V2 exact head, Animation receiver exact head, failed predecessor, repaired head, artifact identity and prior status blob remain addressable.
- **Wisdom before speed:** the lane stops at the newly exposed receiving-context limit instead of modifying the effect merely to turn a visibility test green.

The four AXM roots remain the merge gate.
