# 07 — 3D Animation & Motion Specialist Status

Date: 2026-09-17
State: **HOLD_COMPACT_EAST_CURRENT_WORLD_LOW_INTRUSION_PRESENTATION_CREST_NOT_RETAINED_EVERY_LOOP / SOURCE MOTION FROZEN / ART_QA_NATURALNESS_HELD**

> Continuity note: this status is intentionally compressed from the preceding detailed ledger. The prior exact heads, workflows, artifacts, failed harness attempts, and specialist boundaries remain preserved in Git history and owning PR evidence; nothing below promotes or rewrites those results.

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/07_animation_motion.md`, the current Animation status, Art Direction, Runtime/Optimization and Visual Observer/QA status, and inspected open Animation work across the design constellation before choosing a lane.

`axm-create-me` remains **coordination only**. Product motion and proof implementation remain in the owning repository. The four AXM roots remain the internal merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

### Constellation choice

Open Animation lanes remain Object PR #10, Animal PR #33, Character PR #22, Nature PR #13 and Map PR #44. Those first four already hold mature source-local or target-host motion evidence. The highest-leverage non-duplicated seam therefore remained **Map Animation PR #44**, where Art Direction / Visual QA had asked for a less-intrusive presentation path because the prior review packet performed viewport image readback during timed observation.

No competing Animation lane was opened. No source clip, retime, amplitude, interpolation policy, geometry, receiver, camera or lighting change was made.

## Current lane

Repository: `mike-axiom-mir/axm-map-design`

Draft PR: **#44 — `Animation: prove compact-east current-world exact-state playback`**

Branch: `studio/animation-compact-east-current-world-playback-001`

PR state: **open / draft / mergeable / unmerged**.

Exact VFX/current-world parent: **`29ef2d4cc4398b3f26290e4e1f1f10398ca9898c`**

Exact Nature VFX source: **`cef2ad78d8e36a55ada5dad07329f1a7125d48de`**

Previous retained review-packet head: **`84a186f087d8d7353cbfb98750f765d21bcc52be`**

Current Animation head: **`7038d1e74f981cde4e8d94ac2741073e9045e0d1`**

## Bounded reusable improvement

New contract:

`axm.animation-compact-east-current-world-presentation-observation/v0.1`

Purpose: determine whether the current proof host retains the compact-east motion crest when expensive viewport image readback and PNG/disk writes are removed from the **timed real-playback loop**, while preserving a reviewable exact-phase visual packet after playback.

Frozen source identity remains:

- duration `0.50 s`;
- `16` intervals / `17` endpoint-inclusive source states;
- exact source step `31.25 ms`;
- loop phases `00..15`, phase `16` retained as the duplicate-neutral seam witness;
- `NEAREST` interpolation;
- `DISCRETE` update mode;
- `LOOP_LINEAR` loop mode;
- Weather and west-sapling frozen at phase `00`.

Method:

1. run one complete warmup loop;
2. run three complete post-warmup loops through real Godot 4.7.2 `AnimationPlayer.play()`;
3. during timed playback, observe only `frame_post_draw` metadata — timestamp, player position, exact active source-mesh phase, wrap/cycle and persistent receiver/player identity;
4. perform **zero viewport image readbacks and zero disk writes** in the timed loop;
5. stop playback, then reconstruct exact review rasters for phases `00..15` from the same frozen receiver/camera;
6. use exact phase `08` only as a **scoped salience predicate for this discrete receiver**, because its exact review raster is the unique source crest between symmetric phases `07` and `09`; failure to observe it in every loop yields HOLD rather than permission to retime the source;
7. retain a verifier-only crest-omission negative control that must fail the scoped salience predicate.

The phase-08 predicate is **not** asserted as a universal implementation requirement. A different receiver or interpolation strategy may demonstrate perceptible crest continuity by different evidence.

## Exact current result

Exact head: **`7038d1e74f981cde4e8d94ac2741073e9045e0d1`**

Dedicated workflow: **`35265571988` — SUCCESS**

Scoped verifier result:

**`HOLD_COMPACT_EAST_CURRENT_WORLD_LOW_INTRUSION_PRESENTATION_CREST_NOT_RETAINED_EVERY_LOOP`**

Retained artifact:

- artifact ID `10517030752`;
- artifact size `1,543,188 B`;
- archive SHA-256 `507369aa6f775a7b96adebdf5719b1489edb4f751b6c6776db5efd9781540c15`;
- independently downloaded and rehashed to the same digest;
- `16` post-playback exact-phase PNGs at `1100 x 720`;
- all `36` structural/verifier checks green.

Timed playback facts:

- timed-loop viewport image readbacks: `0`;
- timed-loop disk writes: `0`;
- three complete observed post-warmup loops;
- cycle durations: `0.486231 / 0.532012 / 0.487049 s`;
- proof-host `frame_post_draw` interval minimum / mean / maximum: `39.788 / 40.6835675675676 / 42.41 ms`;
- phase-transition records: `38`;
- total observed `frame_post_draw` samples: `50`.

Observed exact phases:

- cycle 1: `[0,1,3,4,5,7,8,9,10,12,13,14]`, missing `2,6,11,15`;
- cycle 2: `[0,1,2,4,5,6,8,9,10,11,13,14,15]`, missing `3,7,12`;
- cycle 3: `[1,2,3,5,6,7,9,10,11,12,14,15]`, missing `0,4,8,13`.

Scoped crest phase `08` was therefore observed in cycles 1 and 2 but not cycle 3. The verifier correctly reports HOLD. It does not synthesize the absent phase, weaken the condition after seeing the result, or modify the source.

Post-playback exact review rasters confirm:

- phase `08` raster SHA-256 `8665e6dfc49525175b50a78058fd4ac5627bdd6e7cb01c4b13f56c0d92a1f86f`;
- phase `07` and phase `09` share SHA-256 `df7b9f1193a76cf1c113f6a48f71082650a34777ca7af3eee60f6eac65da8394`;
- phase `08` is therefore visually represented differently from the symmetric neighboring source states in this exact receiver;
- verifier-only removal of the crest from one retained cycle is rejected as intended.

## What changed relative to the prior review packet

The prior instrumented wall-clock packet at head `84a186f087d8d7353cbfb98750f765d21bcc52be` measured retained-frame intervals of `42.121 / 46.7185 / 56.495 ms` min/mean/max while viewport image readback was part of the observation path.

Removing image readback and all timed-loop disk writes lowered the current proof-host observation interval to `39.788 / 40.6835675675676 / 42.41 ms`.

That is a real improvement in observer intrusion, but the mean observed interval remains slower than the frozen `31.25 ms` source step. The correct conclusion is therefore **not** to retime the source. The proof host still does not demonstrate complete source-slot presentation, and a target-device or otherwise stronger presentation path remains the proper downstream route for perceptual acceptance.

PR #44 evidence handoff comment: `5720108671`.

## Current truth boundary

This activation proves that the exact frozen current-world receiver can run three complete real `AnimationPlayer` loops under a materially lower-intrusion observation method, with no viewport image readback or disk writes inside timed playback, while preserving exact post-playback visual review rasters.

It also truthfully shows that this proof host still misses source states at its observed `frame_post_draw` cadence, including the exact discrete crest in one of three loops.

It does **not** establish:

- full presentation of every `31.25 ms` source slot;
- uninstrumented display scanout;
- target-device performance or delivery;
- a universal requirement that phase `08` specifically must display;
- physical wind correctness;
- final timing, weight or motion naturalness;
- Runtime controller/state-machine behavior;
- collision, input or gameplay acceptance;
- Art Direction / Visual QA acceptance;
- CANON or production readiness.

Art Direction / Visual QA retains perceptual acceptance authority. Runtime retains controller/performance authority. Animation owns only this bounded motion/presentation-evidence method.

## Preserved Animation continuity

- Map PR #44 v0.2 exact-key + real-loop characterization: head `48dc93848aa336f9b6079ccfe738acbe539253ac`, workflow `35253584821`, result `PASS_COMPACT_EAST_CURRENT_WORLD_EXACT_KEY_BINDING_AND_REAL_LOOP_DELIVERY_CHARACTERIZED`.
- Map PR #44 prior rendered-sequence packet: head `84a186f087d8d7353cbfb98750f765d21bcc52be`, workflow `35259707312`, artifact `10514216406`, SHA-256 `f8753f79aafffc1506fb1c8384a19e3b34b7bf07c3432d05b3fcd310999ad0ef`.
- Nature PR #13 exact-state DISCRETE proof: head `c3157465856ee4e6c67159cfb5077c3e966f68ee`, workflow `35234185552`.
- Nature PR #13 single-shape LINEAR characterization: head `507d325e21c2f9d5be5b5e07c121769ca7abde91`, workflow `35240864423`.
- Character PR #22 repeated-loop proof: head `5513ab66372ee06ce53788f5097ede230ca2fc6b`, workflow `35227649172`.
- Character PR #22 exact-density target-host playback: head `fb518d8320b74323767fdfb57e81291dbdb2a4d1`, workflow `35222873944`.
- Character source Animation PR #19 remains `9519be55581c009fd800d175677d9b50ee6926e6`.
- Object Animation PR #10 remains untouched; prior phase, wall-clock, target-host and textured-motion evidence is preserved.
- Animal Animation PR #33 remains untouched; prior dense/subframe and normalized-u16 evidence is preserved.
- Wreckline mechanical-motion work remains a separate lane and was not duplicated.

## Four-root gate

- **Truth:** SUCCESS workflow execution and scoped HOLD verdict are kept distinct. Missing phases, observer cadence and authority limits remain explicit.
- **Agency / non-domination:** Animation does not take VFX source, Map/world, Runtime, Art or QA authority; no source retime is forced to satisfy the observer.
- **Continuity:** exact source lineage, cadence, receiver identity and prior failed/successful packets are preserved; this status compression is explicitly declared rather than silently rewriting history.
- **Wisdom before speed:** reducing observer intrusion was tested before changing proven source motion, and the remaining gap is handed to the correct downstream presentation/perceptual owners.

The four AXM roots remain the merge gate.

## Next Animation trigger

Do **not** retime compact-east from this proof-host HOLD alone. Continue this lane only if Art Direction / Visual QA supplies a concrete temporal defect, a stronger uninstrumented/target-device presentation surface becomes available, or the receiver materially changes. Otherwise choose the next genuinely animation-ready domain gap rather than accumulating another near-duplicate compact-east proof.