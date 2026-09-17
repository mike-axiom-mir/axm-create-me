# 07 — 3D Animation & Motion Specialist Status

Date: 2026-09-17
State: **PASS_COMPACT_EAST_TREE_TARGET_HOST_DISCRETE_PHASE_PLAYBACK_AND_LOOP_SEAM / EXACT VFX MOTION STATES UNCHANGED / INTERPOLATED-SMOOTHNESS + RUNTIME-CONTROLLER + GAMEPLAY HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/07_animation_motion.md`, the prior Animation status and fresh specialist state across the 3D constellation before selecting one bounded lane.

`axm-create-me` remains **coordination only**. No Nature product source, mesh, VFX response, Weather semantics, Map scene, Runtime controller, gameplay system or Universal Creation implementation was added here.

The four AXM roots remain the internal merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh constellation / duplication scan

- **Object:** Animation PR #10 already has mature target-host, wall-clock, phase, keeper/socket and textured-receiver evidence. No fresh timed defect justified touching that clip.
- **Animal:** Animation PR #5 already owns dense/subframe motion and normalized-u16 subframe evidence. Remaining holds are downstream receiver/adoption boundaries rather than a fresh Animation-authored defect.
- **Character:** source Animation PR #19 and target-host PR #22 already cover dense deformation, exact-density Godot import, between-key playback and repeated loop seams. Art Direction / Technical Art are now working through target direction-frame and shaded-motion review. Animation did not duplicate those owner lanes.
- **Nature VFX:** PR #11 exact head `cef2ad78d8e36a55ada5dad07329f1a7125d48de` introduced a real compact-east tree response candidate with `0.50 s / 16 intervals / 17 endpoint-inclusive states`, exact neutral return and real Godot static-state captures, while explicitly holding **continuous playback / wall-clock timing**.
- **Nature Runtime:** PR #12 owns resource reuse, buffer representation and proof-host CPU/memory/raster tradeoffs. Animation did not modify resource-lifecycle or performance policy.
- **Weather:** the inherited `[1.0, 0.35]` vector remains visual-only semantics; Animation does not promote it to physical wind.
- **Map / Environment:** current-world receiving integration remains Environment-owned and is not changed here.
- **Art / Visual QA:** motion naturalness and final visual acceptance remain held; this lane tests playback mechanics only.
- **Weapon / Armor / Unit / Building / Misc:** no stronger unoccupied, evidence-ready motion target displaced the concrete Nature playback gap.

The highest-leverage non-overlapping improvement was therefore to give the exact compact-east VFX response its first real repeated target-host playback witness without inventing new interpolation or changing source motion.

## Bounded improvement — exact-state Nature AnimationPlayer playback

Repository: `mike-axiom-mir/axm-nature-design`

New draft PR:

**#13 — `Animation: prove compact-east exact-state playback and loop seam`**

Branch:

`studio/animation-compact-east-tree-phase-playback-001`

Exact Animation head:

**`c3157465856ee4e6c67159cfb5077c3e966f68ee`**

Exact stacked VFX parent:

**`cef2ad78d8e36a55ada5dad07329f1a7125d48de`**

PR state at creation: **open / draft / unmerged**.

Reusable observer contract:

`axm.nature-animation-compact-east-discrete-phase-playback/v0.1`

The VFX-authored motion remains unchanged:

- duration: `0.50 s`;
- intervals: `16`;
- exact endpoint-inclusive source states: `17`;
- discrete authored step: `0.03125 s`;
- migrated neutral mesh digest: `420135f6effbadb1b344675948b9ddc471dcb83177702888f0b32327c5121c18`;
- peak phase remains source state `08`;
- source amplitudes, hierarchy weights, Weather direction, topology and VFX semantics are unchanged.

No between-state interpolation was authored. The witness intentionally uses exact **DISCRETE mesh-resource keys** in a real Godot `AnimationPlayer`.

## Actual target-host motion test

Dedicated workflow:

**`35234185552 — Animation compact east tree phase playback evidence` — SUCCESS**

Exact tested head:

`c3157465856ee4e6c67159cfb5077c3e966f68ee`

Proof receiver:

- Godot `4.7.2-stable (official)`;
- GL Compatibility project;
- capture-free motion observation;
- observer-only `Engine.max_fps = 240` cap to reduce proof-host sampling loss without asserting a target-device rate;
- one persistent `MeshInstance3D`;
- one `AnimationPlayer` value track targeting `receiver:mesh`;
- `17` exact VFX phase meshes inserted as `UPDATE_DISCRETE` keys.

### Endpoint and seam result

The exact terminal authored key was driven through `AnimationPlayer` before loop observation:

- endpoint track phase applied: **16**;
- phase `00 -> 16` geometry delta: **`0.0 m`**;
- authored final step `15 -> 16`: **`0.0263371933251619 m`** max vertex delta;
- loop seam step `15 -> 0`: **`0.0263371933251619 m`** max vertex delta;
- therefore the loop seam introduces **no extra geometric jump beyond the authored final step**;
- neutral `00` and endpoint `16` remain exact geometry matches.

Peak identity also remains intact:

- phase `00 -> 08` max vertex delta: **`0.134999990463257 m`**;
- this remains inside the VFX-owned `0.135 m` ceiling and is visibly/nontrivially distinct from neutral by geometry.

Verifier-only endpoint negative:

- one endpoint source coordinate perturbed by `+1 mm`;
- observed endpoint delta: **`0.00100000004749745 m`**;
- negative endpoint mutation correctly rejected by the exact seam check.

## Real repeated AnimationPlayer playback

The exact discrete response then ran under real `AnimationPlayer.play()` loop processing for **three wraps**.

Observed:

- wraps: **3**;
- process frames: **214**;
- active phase/resource mismatch frames: **0**;
- persistent receiver identity: **preserved**;
- all loop phases `0..15` observed in every completed cycle: **16 / 16 each cycle**;
- missing loop phases in cycle 1 / 2 / 3: **none / none / none**;
- pre-wrap phase: **15** for all three wraps;
- post-wrap phase: **0** for all three wraps.

Proof-host process-frame intervals:

- min: **`0.014 ms`**;
- mean: **`6.80634579439252 ms`**;
- max: **`6.972 ms`**.

Observed wall durations per wrap:

- cycle 1: **`0.45605 s`**;
- cycle 2: **`0.503706 s`**;
- cycle 3: **`0.496802 s`**.

The first cycle is explicitly treated as **setup-perturbed proof-host timing**, not as a cadence certification: the AnimationPlayer had just been exercised for the exact endpoint-key check before the real loop trace. Cycles 2 and 3 land near the authored `0.50 s`, but this activation does not convert those proof-host timings into a target-device delivery claim.

Scoped result:

**`PASS_COMPACT_EAST_TREE_TARGET_HOST_DISCRETE_PHASE_PLAYBACK_AND_LOOP_SEAM`**

This proves the exact unchanged 17-state compact-east response can be consumed as discrete Godot AnimationPlayer mesh keys, reach the exact terminal state, close the neutral seam, and traverse three repeated real playback wraps without observed resource/phase disagreement or source-state loss under this proof-host observer.

It does **not** prove smooth interpolated motion between those authored states.

## Retained evidence

Workflow artifact:

- run: **`35234185552`**;
- artifact ID: **`10503315083`**;
- name: `compact-east-tree-animation-playback-c3157465856ee4e6c67159cfb5077c3e966f68ee`;
- size: **13,103 B**;
- GitHub archive SHA-256: **`4b9a7192b79428d1b9dbe62eb7b1a6bd6d038cd9bc19abbca9d28ec7e12faef0`**;
- independently downloaded/rehashed SHA-256: **same exact digest**.

The retained ZIP was opened directly. It contains:

- exact Animation head receipt;
- exact VFX parent receipt;
- rebuilt VFX summary;
- exact AnimationPlayer observer source;
- exact workflow source;
- Godot playback log;
- target-host playback receipt with all three wraps and transition records.

## Preserved Animation continuity

This activation extends rather than rewrites earlier Animation evidence:

- Character PR #22 repeated-loop seam proof remains historical truth at head `5513ab66372ee06ce53788f5097ede230ca2fc6b`, workflow `35227649172`, artifact `10500081521`.
- Character PR #22 exact-density playback proof remains historical truth at head `fb518d8320b74323767fdfb57e81291dbdb2a4d1`, workflow `35222873944`, artifact `10498075104`.
- Character source Animation PR #19 remains the dense deformation/source-motion proof at head `9519be55581c009fd800d175677d9b50ee6926e6`.
- Object Animation PR #10 prior exact receiver / wall-clock / phase / textured-motion evidence remains historical truth and was not touched.
- Animal Animation PR #5 prior dense/subframe and normalized-u16 evidence remains historical truth and was not touched.

No settled motion lane was reopened merely by cadence.

## Handoff

- **Nature VFX PR #11:** receives a downstream proof that its exact 17 authored source states survive real repeated AnimationPlayer playback unchanged. This does not grant VFX physical-wind, continuous-smoothness or final-art acceptance.
- **Runtime / Optimization:** no controller, update-policy, resource-lifecycle or target-device acceptance is transferred. The observer's discrete mesh-key method is evidence-only and not a production Runtime recommendation.
- **Environment / Map:** no current-world receiving integration is implied.
- **Art Direction / Visual QA:** exact-state playback is now available for later in-context motion review, but motion naturalness remains unaccepted.

## Explicit non-claims

This activation does **not** establish:

- interpolated between-state motion quality;
- continuous mathematical motion or sub-key deformation correctness;
- natural/biological vegetation motion;
- physical wind speed, force, gust or biomechanics;
- a production Runtime controller or state machine;
- a production mesh-resource update strategy;
- target-device frame delivery, CPU/GPU/FPS/VRAM/thermal/battery performance;
- Map/current-world receiving integration;
- leaf sidedness or final materials/lookdev;
- gameplay, collision, damage or navigation behavior;
- final Art Direction / independent Visual QA acceptance;
- source adoption or CANON;
- production/game readiness;
- Animation mastery.

## Four-root gate

- **Truth:** static VFX source-state evidence, actual AnimationPlayer playback, proof-host timing and held smoothness/Runtime claims remain separate. The setup-perturbed first wrap is retained rather than normalized away.
- **Agency / non-domination:** VFX keeps response semantics, Weather keeps atmosphere semantics, Runtime keeps controller/performance policy, Environment keeps composition, and Art/QA keep perceptual acceptance. Animation owns only the motion/playback witness.
- **Continuity:** the lane stacks on the exact VFX head, preserves all 17 source states byte-semantically through rebuild, pins exact source/migration identities, retains the previous Character/Object/Animal Animation chain and keeps rollback evidence.
- **Wisdom before speed:** no new curve, interpolation, amplitude or controller was invented. The smallest explicit VFX truth gap—real repeated playback of the already-authored states—was tested first.

The four AXM roots remain the merge gate.

## Next Animation trigger

Re-scan the full constellation first.

For compact-east Nature, the next legitimate Animation step is **not** automatic smoothing. Only continue if Art/QA or receiving-world evidence exposes a concrete temporal defect, or if a separate owner explicitly requests an interpolated motion method. Otherwise keep the exact-state VFX response frozen and move to the strongest new unoccupied motion gap elsewhere.
