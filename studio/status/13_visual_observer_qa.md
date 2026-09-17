# 13 — Visual Observer / QA Specialist Status

Date: 2026-09-17

State: **PASS_COMPACT_EAST_ANIMATIONPLAYER_EXACT_KEY_BINDING_AND_REPRESENTATIVE_VISUAL_RESPONSE / FAIL_COMPACT_EAST_PROOF_HOST_PROCESS_FRAME_OBSERVATION_OF_FULL_31_25MS_SOURCE_SLOT_CADENCE / BLOCKED_FINAL_COMPACT_EAST_CONTINUOUS_MOTION_VISUAL_ACCEPTANCE__REVIEWABLE_WALL_CLOCK_SEQUENCE_DISPLAY_RUNTIME_ART_PENDING**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/13_visual_observer_qa.md`, prior QA state, fresh owner-lane PR/evidence state, and new runtime/render evidence across the constellation.

`axm-create-me` remains **coordination only**. QA changed no Map scene/effect implementation, Nature source/VFX response, Animation source timing or keys, Weather semantics, west-sapling motion, Runtime product code, Materials, Universal Creation product code, Profession Fabric product code, camera, light, or gameplay code.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Selection / duplication scan

The strongest newly completed unverified visual/runtime claim is the compact-east current-world `AnimationPlayer` receiving lane on `mike-axiom-mir/axm-map-design` PR #44.

This is the direct downstream question left open by the preceding QA activation on Map PR #43. Art Direction had accepted the sampled spatial response as the frozen visual baseline and requested delivered playback evidence sufficient to review timing/rhythm/loop naturalness. PR #44 owns playback instrumentation; QA therefore inspects its retained runtime/render outputs without retiming, reshaping, or repairing the owner source.

Fresh Building hard-surface/procedural successors are source/geometry truth lanes rather than stronger direct visual/runtime evidence. Character playback has its own Animation lane. QA does not duplicate those owner-specialist scopes.

## Exact evidence identity

Repository: `mike-axiom-mir/axm-map-design`

PR: **#44 — `Animation: prove compact-east current-world exact-state playback`**

Exact head inspected: `48dc93848aa336f9b6079ccfe738acbe539253ac`.

PR state at inspection: **OPEN / DRAFT / UNMERGED / mergeable**. Mergeability is metadata, not visual authority.

Exact source/runtime contract retained by the lane:

- Nature VFX owner: `cef2ad78d8e36a55ada5dad07329f1a7125d48de`;
- parent current-world receiving head: `29ef2d4cc4398b3f26290e4e1f1f10398ca9898c`;
- source duration: `0.50 s`;
- `16` unique loop states from `17` endpoint-inclusive source states;
- source cadence: `31.25 ms`;
- interpolation: `NEAREST`;
- update mode: `DISCRETE`;
- loop mode: `LOOP_LINEAR`;
- phase `16`: duplicate-neutral seam witness, not an additional loop key;
- Weather and west-sapling: frozen at phase `00` for this receiver proof.

Exact-head workflow `35253584821 — Animation compact-east current-world playback evidence` completed **SUCCESS**.

Retained artifact `10511028441` was independently downloaded and rehashed:

`b65f1ddee546a59b716dc1de8f72995ceeff3c7cad49d6a518d90e135c7477a1` — exact match to GitHub's retained digest.

The artifact contains the exact-head marker, Godot log, runtime/report JSON, and three retained exact-seek frames at phases `00 / 08 / 15` from Godot 4.7.2 GL Compatibility on Mesa llvmpipe.

## PASS — exact-key binding and representative visual response survive the AnimationPlayer receiver

**`PASS_COMPACT_EAST_ANIMATIONPLAYER_EXACT_KEY_BINDING_AND_REPRESENTATIVE_VISUAL_RESPONSE`**

Independent inspection/recomputation confirms:

- all **16/16** unique loop keys are deterministically seekable and apply the exact expected phase mesh resource;
- phase `16` is geometrically identical to phase `00` (`0.0 m` endpoint geometry delta);
- authored phase `15 → 16` step equals loop phase `15 → 00` step exactly at `0.0263375788927078 m` residual `0.0`;
- the verifier-only `+1 mm` endpoint mutation is rejected as required;
- receiver and AnimationPlayer identities remain persistent through the real-loop trace.

Direct retained raster inspection also shows a clear exact-key visual response with unrelated Weather/west-sapling motion frozen:

- phase `08` vs phase `00`: **7,439 changed pixels**, **7,239 >1 LSB**, max RGB-channel delta **191 LSB**, bbox `x=715..939, y=429..671`;
- phase `15` vs phase `00`: **4,788 changed pixels**, **3,866 >1 LSB**, max delta **142 LSB**, bbox `x=715..931, y=429..670`.

QA additionally isolated the Animation exact-key effect field `(animation phase - animation phase00)` and compared it with the previously accepted sampled current-world effect field `(PR #43 current - accepted parent)`, which cancels unrelated per-phase world motion:

- phase `08`: Animation support `7,439` pixels vs accepted sampled support `7,440`; support XOR **1 pixel**; effect-field residual **30 pixels total**, **19 >1 LSB**, max **22 LSB** — residual on about **0.403%** of Animation changed support;
- phase `15`: Animation support `4,788` vs accepted sampled support `4,792`; support XOR **6 pixels**; effect-field residual **16 pixels total**, **5 >1 LSB**, max **92 LSB** — residual on about **0.334%** of changed support.

This is strong retained visual continuity at the supplied representative exact keys. QA does **not** call the rasters byte-identical and does not treat amplified difference diagnostics as authored appearance.

## FAIL — proof-host process-frame observation does not deliver every 31.25 ms source slot

**`FAIL_COMPACT_EAST_PROOF_HOST_PROCESS_FRAME_OBSERVATION_OF_FULL_31_25MS_SOURCE_SLOT_CADENCE`**

The current v0.2 lane correctly preserves this as evidence rather than hiding it.

Real `AnimationPlayer.play()` crosses three loop seams, with observed loop durations:

- `0.500174 s`;
- `0.504166 s`;
- `0.508115 s`.

The proof host's observed process-frame cadence is:

- minimum `40.917 ms`;
- mean `42.0126388888889 ms`;
- maximum `43.481 ms`;

against a source slot of `31.25 ms`.

Observed exact source phases by loop:

1. `[0,2,3,5,6,7,9,10,11,13,14]` — missing `[1,4,8,12,15]`;
2. `[0,1,2,4,5,6,8,9,10,12,13,14]` — missing `[3,7,11,15]`;
3. `[0,1,2,4,5,6,8,9,10,12,13,14]` — missing `[3,7,11,15]`.

Phase `15` is never observed at a `process_frame` sample point across the three retained loops.

This FAIL is deliberately narrow. It proves only that this proof-host process-frame observer does **not** sample every authored 31.25 ms source state. It does **not** prove that an unobserved key was never internally applied between callbacks, and it does not establish display-scanout loss or a target-device defect. QA therefore requests no retiming or reshaping of the accepted source motion.

## BLOCKED — final continuous-motion visual acceptance

**`BLOCKED_FINAL_COMPACT_EAST_CONTINUOUS_MOTION_VISUAL_ACCEPTANCE__REVIEWABLE_WALL_CLOCK_SEQUENCE_DISPLAY_RUNTIME_ART_PENDING`**

The current artifact contains three deterministic-seek PNGs plus numerical wall-clock phase/timing traces. It does **not** retain a rendered wall-clock frame sequence/video sufficient for Visual QA or Art Direction to judge:

- perceptual timing and rhythm;
- whether skipped proof-host observation slots create visible stepping at presentation time;
- loop-seam naturalness in actual rendered playback;
- display-scanout behavior;
- target-device Runtime delivery/performance.

Therefore the Animation v0.2 PASS may support exact-key binding and truthful loop-delivery characterization, but it is not final visual playback acceptance.

## Handoff / review return

Independent QA was returned to Map PR #44 exact head `48dc93848aa336f9b6079ccfe738acbe539253ac` as review **`5239494610`**.

Animation retains source/receiver playback ownership. Art Direction retains timing/rhythm/naturalness preference. Runtime retains target-device delivery/performance authority. Map/Environment retains current-world composition. Nature retains source-response ownership. Weather retains visual-direction-only semantics.

The smallest next Art/QA-relevant evidence is a retained wall-clock rendered sequence from the exact frozen PR #44 receiver, with timestamps/observed source phase attached per captured frame and no source retime. QA does not require such evidence to prove deterministic key binding; it is required only before claiming perceptual continuous-motion acceptance.

QA authored no product repair in the owner repository.

## Prior retained QA state

The immediately preceding Map sampled-state result remains historical evidence and is not rewritten:

- `PASS_COMPACT_EAST_CURRENT_WORLD_SAMPLED_EFFECT_READABILITY__ELEVATED_OBLIQUE_BOTH_WEATHER_MODES`;
- `BLOCKED_FINAL_COMPACT_EAST_CURRENT_WORLD_VISUAL_ACCEPTANCE__PATH_EYE_NONOBSERVING_CONTINUOUS_PLAYBACK_ART_RUNTIME_PENDING`.

The preceding Animal result also remains historical evidence:

- `PASS_ANIMAL_POST_SKIN_POSITION_RECONSTRUCTION_RETAINS_OWNER_TANGENT_SPACE_APPEARANCE__RIGHT_REPRESENTATIVE_KEYS`;
- `FAIL_ANIMAL_STATIC_TRANSPORTED_DIRECTION_FRAME_VISUAL_EQUIVALENCE__RIGHT_DEFORMED_REPRESENTATIVE_KEYS`;
- `BLOCKED_FINAL_ANIMAL_RECONSTRUCTED_DIRECTION_FRAME_ADOPTION__TARGET_RUNTIME_BILATERAL_DENSE_MOTION_ART_PENDING`.

This activation transfers no acceptance between those systems.

## Explicit non-claims

This activation does **not** establish physical wind or biomechanics; smooth interpolation; full 31.25 ms source-slot presentation delivery; display scanout; arbitrary-camera readability; final leaf-sidedness/material acceptance; target-device CPU/GPU/FPS/VRAM/thermal behavior; Runtime controller/state-machine correctness; gameplay/collision/navigation acceptance; final Art Direction timing/naturalness preference; CANON; game readiness; production readiness; or Visual Observer / QA mastery.

## Four-root gate

- **Truth:** exact artifact identity is rehashed; retained raster effects are independently recomputed; exact-key success and missed process-frame observations are both reported.
- **Agency / non-domination:** QA does not retime Nature/VFX, change Animation semantics, rewrite Runtime policy, or promote a proof-host trace into Art/CANON authority.
- **Continuity:** the accepted sampled-state baseline, the preserved failed v0.1 observer, the current v0.2 receiving proof, and older QA states remain separately identified and rollbackable.
- **Wisdom before speed:** green exact-key CI is not promoted into smooth presentation, naturalness, target-device delivery, or production acceptance without direct evidence.

The four AXM roots remain the merge gate.
