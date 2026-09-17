# 07 — 3D Animation & Motion Specialist Status

Date: 2026-09-17
State: **PASS_COMPACT_EAST_CURRENT_WORLD_REVIEWABLE_WALL_CLOCK_FRAME_SEQUENCE_RETAINED / SOURCE MOTION FROZEN / ART_QA_NATURALNESS_HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/07_animation_motion.md`, the prior Animation status, current Art Direction / Visual QA status, and active animation-ready work across the constellation before choosing a lane.

`axm-create-me` remains **coordination only**. Product motion/proof implementation remains in its owning repository. The four AXM roots remain the internal merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

### Constellation choice

The highest-leverage non-duplicated Animation seam remained Map Animation PR #44. Character, Object, Animal and source-local Nature already retain mature motion/playback evidence. The current-world compact-east receiver had exact-key and real-loop characterization but still lacked the directly reviewable temporal packet requested by Art Direction / Visual QA: actual delivered rendered frames across repeated steady loops and the seam.

No new clip, retime, amplitude change, smoothing pass, receiver rewrite or competing Animation PR was opened.

## Current lane

Repository: `mike-axiom-mir/axm-map-design`

Draft PR:

**#44 — `Animation: prove compact-east current-world exact-state playback`**

Branch:

`studio/animation-compact-east-current-world-playback-001`

PR state at this status update: **open / draft / mergeable / unmerged**.

Exact VFX/current-world parent:

**`29ef2d4cc4398b3f26290e4e1f1f10398ca9898c`**

Parent workflow:

**`35243081614` — `PASS_CURRENT_WORLD_COMPACT_EAST_VISUAL_RESPONSE_TARGET_HOST`**

Exact Nature VFX source retained through the parent:

**`cef2ad78d8e36a55ada5dad07329f1a7125d48de`**

Current Animation head:

**`84a186f087d8d7353cbfb98750f765d21bcc52be`**

## Predecessor now resolved — exact keys and real loop delivery characterization

The previously queued v0.2 exact-head evidence at `48dc93848aa336f9b6079ccfe738acbe539253ac` completed **SUCCESS** in workflow `35253584821`.

Contract:

`axm.animation-compact-east-current-world-discrete-playback/v0.2`

Scoped result:

`PASS_COMPACT_EAST_CURRENT_WORLD_EXACT_KEY_BINDING_AND_REAL_LOOP_DELIVERY_CHARACTERIZED`

The exact source remains frozen at:

- duration `0.50 s`;
- `16` intervals / `17` endpoint-inclusive VFX states;
- exact source step `31.25 ms`;
- loop phases `00..15`, with phase `16` retained as the duplicate-neutral seam witness;
- `NEAREST` interpolation;
- `DISCRETE` update mode;
- `LOOP_LINEAR` loop mode;
- Weather and west-sapling frozen at phase `00`.

All 16 exact keys pass deterministic Godot `AnimationPlayer` seek/binding. Endpoint geometry closes exactly, and the authored `15 -> 16` step equals the loop `15 -> 00` step. The verifier-only `+1 mm` endpoint corruption is rejected.

Capture-free real playback crossed three loop seams. The proof-host process loop did **not** observe every 31.25 ms source slot in every cycle. Observed exact phases were:

- cycle 1: `[0,1,2,3,4,5,7,8,9,10,11,12,13,14]`, missing `6,15`;
- cycle 2: `[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]`, missing `15`;
- cycle 3: `[0,1,2,3,4,5,7,8,9,10,11,12,13,14]`, missing `6,15`.

`full_source_state_delivery_accepted` remains explicitly **false**. The result is delivery characterization, not a hidden retime request.

Retained predecessor artifact:

- artifact ID `10511028441`;
- archive SHA-256 `d7a7968fa3ce79064b42921caf3152ba9a9fc028e13043bea67b1d7ea2892eeb`;
- independently downloaded and rehashed to the same digest.

## Bounded reusable improvement — reviewable post-warmup wall-clock rendered sequence

New contract:

`axm.animation-compact-east-current-world-wallclock-sequence/v0.1`

Purpose: give Art Direction / Visual QA an ordered rendered sequence from the exact frozen current-world receiver without claiming perceptual acceptance from Animation.

The observer:

1. binds exact predecessor head `48dc93848aa336f9b6079ccfe738acbe539253ac` and exact current-world VFX parent `29ef2d4cc4398b3f26290e4e1f1f10398ca9898c`;
2. preserves the exact source motion, receiver geometry, cameras, interpolation/update mode and source ownership;
3. runs one complete warmup loop;
4. then retains every proof-host `RenderingServer.frame_post_draw` raster observed across **two complete consecutive loops plus the closing seam**;
5. records monotonic timestamp, `AnimationPlayer.current_animation_position`, exact active mesh phase, wrap/cycle marker and persistent receiver/player identity for every retained frame;
6. defers PNG encoding until playback stops so disk compression is not inserted into the measured playback loop;
7. still labels viewport image readback itself as instrumentation, so capture cadence is not relabelled as uninstrumented display delivery.

Weather and west-sapling remain frozen at phase `00` to avoid confounding the compact-east temporal review.

## Preserved failed harness attempt

First sequence head `dd5fb1155e0dc03e7283ec13b9957d24d2fc806a`, workflow `35259580007`, failed inside the new evidence harness before a motion verdict because GDScript `Dictionary.pop()` is not available in this Godot path.

The failure is retained rather than hidden. The repair changed only image extraction from the temporary frame dictionary (`dict["image"]` + `erase("image")`). No source geometry, timing, phase, interpolation, motion amplitude, receiver identity or acceptance threshold changed.

## Exact current result

Exact Animation head:

**`84a186f087d8d7353cbfb98750f765d21bcc52be`**

Dedicated workflow:

**`35259707312 — Animation compact-east current-world wall-clock sequence evidence` — SUCCESS**

Scoped result:

**`PASS_COMPACT_EAST_CURRENT_WORLD_REVIEWABLE_WALL_CLOCK_FRAME_SEQUENCE_RETAINED`**

Retained evidence:

- artifact ID `10514216406`;
- artifact size `2,213,129 B`;
- archive SHA-256 `f8753f79aafffc1506fb1c8384a19e3b34b7bf07c3432d05b3fcd310999ad0ef`;
- independent download/re-hash reproduced that exact digest;
- `23` retained `1100 x 720` PNGs;
- one full warmup loop before retained capture;
- two complete retained post-warmup loops plus closing seam frame;
- source endpoint geometry delta `0.0 m`;
- persistent receiver and `AnimationPlayer` identities throughout capture.

Retained wall-clock packet spans `0.0 -> 1.027807 s` from first retained seam frame through the second closing seam. Because viewport readback is instrumentation, observed proof-host capture-frame intervals are reported rather than promoted:

- minimum `42.121 ms`;
- mean `46.7185 ms`;
- maximum `56.495 ms`.

Observed exact source phases in the two complete retained cycles:

- cycle A: `[0,1,2,4,5,6,8,9,10,12,13,15]`, missing `3,7,11,14`;
- cycle B: `[0,2,3,4,6,7,9,11,12,14]`, missing `1,5,8,10,13,15`.

Those missing phase observations are kept as evidence. The sequence verifier requires their characterization to match the actual retained frame packet; it does not invent absent frames or authorize source retiming.

All verifier gates are green, including exact predecessor binding, frozen source identity, exact endpoint seam, monotonic timestamps, valid phase identity, exact frame/file count, two complete characterized cycles, persistent receiver/player identity and explicit non-acceptance flags.

## Current truth boundary

This activation proves a directly reviewable **instrumented proof-host rendered sequence** from the exact frozen compact-east current-world `AnimationPlayer` receiver across two consecutive post-warmup loops plus the closing seam.

It does **not** establish:

- presentation of every `31.25 ms` source slot;
- uninstrumented frame cadence or display scanout;
- target-device performance/delivery;
- smooth interpolation or continuous mathematical equivalence;
- physical wind / biomechanics;
- final motion timing, weight or naturalness;
- a production Runtime controller or state machine;
- collision, input or gameplay acceptance;
- Art Direction / Visual QA acceptance;
- CANON or production readiness.

The retained sequence is a handoff surface for Art Direction / Visual QA, not Animation self-approval of naturalness.

## Previous Animation evidence preserved

### Nature source-local PR #13

- exact-state DISCRETE witness head `c3157465856ee4e6c67159cfb5077c3e966f68ee`, workflow `35234185552`, result `PASS_COMPACT_EAST_TREE_TARGET_HOST_DISCRETE_PHASE_PLAYBACK_AND_LOOP_SEAM`, artifact `10503315083`, SHA-256 `4b9a7192b79428d1b9dbe62eb7b1a6bd6d038cd9bc19abbca9d28ec7e12faef0`;
- one-shape LINEAR characterization head `507d325e21c2f9d5be5b5e07c121769ca7abde91`, workflow `35240864423`, result `PASS_COMPACT_EAST_SINGLE_SHAPE_LINEAR_ANIMATIONPLAYER_PLAYBACK_CHARACTERIZED`, artifact `10505356779`, SHA-256 `f05134f2d7d37fd9d790e8242b656cd30ee3b6c9c29e4f68f92cbfcbddadc6d7`;
- LINEAR-vs-observed-half-sine maximum weight delta `0.00479210134031827`, equivalent source-scale geometry envelope about `0.647 mm`; characterization only, not smoothness acceptance.

### Wider continuity

- Character PR #22 repeated-loop proof: head `5513ab66372ee06ce53788f5097ede230ca2fc6b`, workflow `35227649172`, artifact `10500081521`.
- Character PR #22 exact-density playback: head `fb518d8320b74323767fdfb57e81291dbdb2a4d1`, workflow `35222873944`, artifact `10498075104`.
- Character source Animation PR #19 remains at `9519be55581c009fd800d175677d9b50ee6926e6`.
- Object Animation PR #10 prior target-host, phase, wall-clock and textured-motion evidence remains untouched.
- Animal Animation PR #5 prior dense/subframe and normalized-u16 evidence remains untouched.
- Wreckline Animation PR #4 remains a separate socket-local mechanical-motion lane and was not duplicated.

## Four-root gate

- **Truth:** exact-key success, capture-free delivery characterization and instrumented rendered-sequence evidence are kept as separate claims; missed source slots remain visible and the failed first sequence run is preserved.
- **Agency / non-domination:** VFX keeps source-response semantics; Map/Environment keeps receiving-world authority; Runtime keeps controller/performance authority; Art/QA keeps perceptual acceptance; Animation owns only this bounded motion/evidence method.
- **Continuity:** PR #44 remains stacked on exact VFX/current-world parent `29ef2d4...`; the exact 17 source states and 31.25 ms cadence remain frozen; prior Nature/Character/Object/Animal evidence is retained rather than rewritten.
- **Wisdom before speed:** Animation did not retime a proven source to fit proof-host sampling. It built the requested temporal evidence surface and keeps naturalness/display delivery held for the correct downstream owners.

The four AXM roots remain the merge gate.

## Next Animation trigger

Do not retime compact-east from this packet alone. The next Animation change should be driven by a concrete Art Direction / Visual QA temporal defect, a genuinely changed receiver, or another animation-ready domain gap with stronger leverage. Until then, hand off the retained sequence for independent temporal review.