# 07 — 3D Animation & Motion Specialist Status

Date: 2026-09-17
State: **HOLD_COMPACT_EAST_CURRENT_WORLD_V02_EXACT_HEAD_QUEUED / EXACT KEYS HARD-GATED / REAL DELIVERY CHARACTERIZED / SOURCE MOTION FROZEN**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/07_animation_motion.md`, the prior Animation status, fresh Art Direction / Visual QA / VFX / Runtime coordination state, and current Animation-ready pull requests before choosing a lane.

`axm-create-me` remains **coordination only**. Product motion/proof work remains in its owning repository. The four AXM roots remain the internal merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

### Constellation choice

The strongest non-duplicated Animation seam remains Map Animation PR #44. Art Direction has explicitly frozen the sampled compact-east spatial response for playback review, while Visual QA continues to hold final acceptance on current-world playback evidence. Existing source-local Nature PR #13 already covers DISCRETE exact-state playback and the separate one-shape LINEAR candidate. Character PR #22, Object PR #10 and Animal PR #5 retain mature evidence and were not reopened. Separate west-sapling timing remains owned by its own Map lane and stays frozen here.

## Bounded improvement — separate exact-key correctness from proof-host delivery observation

Repository: `mike-axiom-mir/axm-map-design`

Draft PR:

**#44 — `Animation: prove compact-east current-world exact-state playback`**

Branch:

`studio/animation-compact-east-current-world-playback-001`

Exact VFX/current-world parent:

**`29ef2d4cc4398b3f26290e4e1f1f10398ca9898c`**

Parent green workflow:

**`35243081614` — `PASS_CURRENT_WORLD_COMPACT_EAST_VISUAL_RESPONSE_TARGET_HOST`**

Exact Nature VFX source identity retained through the parent:

**`cef2ad78d8e36a55ada5dad07329f1a7125d48de`**

Current Animation head:

**`48dc93848aa336f9b6079ccfe738acbe539253ac`**

PR state at this status update: **open / draft / mergeable / unmerged**.

Reusable contract:

`axm.animation-compact-east-current-world-discrete-playback/v0.2`

The source motion remains frozen:

- duration: `0.50 s`;
- intervals: `16`;
- endpoint-inclusive VFX source states: `17`;
- exact source step: `31.25 ms`;
- loop track: the 16 unique phases `00..15`;
- phase `16` remains an explicit duplicate-neutral endpoint/seam witness;
- track interpolation: `NEAREST`;
- update mode: `DISCRETE`;
- loop mode: `LOOP_LINEAR`;
- proof view: parent receiver's accepted `elevated_oblique` context;
- Weather and west-sapling motion stay frozen at exact phase `00`.

No source geometry, amplitude, timing, phase resources, interpolation/update mode, camera, light or unrelated owner state changed in this activation.

### Why v0.2 was necessary

The previously pending exact-head workflow `35248112953` for head `abad9beeb57dc99ba60aad60d3fb38046395972e` completed **FAILURE**, and the retained artifact was inspected rather than relabeled.

The observer had already reached real `AnimationPlayer` playback. Its first wall-clock cycle observed exact source phases:

`[0, 2, 3, 5, 6, 7, 9, 10, 11, 12, 14, 15]`

so phases `1 / 4 / 8 / 13` were not sampled by the proof-host `process_frame` observer. The v0.1 verifier treated that as a source-motion failure by requiring every 31.25 ms slot to be observed in every 0.50 s cycle. That mixes two different claims: whether every exact key is valid and whether every source slot is observed by one wall-clock sampling loop.

Art Direction explicitly froze the sampled spatial response rather than authorizing a retime. The correct Animation repair is therefore an evidence-method repair, not a motion rewrite.

### v0.2 proof split

1. **Exact-key binding remains a hard gate.** The Godot observer deterministically seeks all 16 unique source keys and requires the exact mesh resource for every key. Neutral endpoint equality, authored `15 -> 16` versus loop `15 -> 00` seam equivalence, the verifier-only `+1 mm` endpoint corruption, receiver/player identity and unknown-resource rejection remain fail-closed.
2. **Real wall-clock playback is characterized separately.** The same real `AnimationPlayer.play()` path must still progress and cross three loop seams, but the observer now records which source phases were actually seen per cycle, which were not observed, wrap timing and process-frame interval statistics. Missing proof-host observation slots remain evidence and are not converted into permission to retime the source.

The result label for a future green exact-head run is intentionally bounded:

`PASS_COMPACT_EAST_CURRENT_WORLD_EXACT_KEY_BINDING_AND_REAL_LOOP_DELIVERY_CHARACTERIZED`

and the retained receipt must keep:

`full_source_state_delivery_accepted = false`.

This follows the same source-integrity principle already used by the separate west-sapling timing lane: record delivery drops rather than silently hide them or change source timing to fit the observer.

## Preserved repair / failure trail

No failed run has been rewritten as a motion PASS.

1. `cd43f910609fed57b6fdb102ee98d9de168e74e7`: observer parser/API defects prevented proof execution; observer plumbing only was repaired.
2. `dc6b8313dc443bac2c7bfbff3abade33c7a52605`, workflow `35247561336`: Weather projection ran before camera/tree readiness; scene settling only was repaired.
3. `ec58d180a5f72b43de3ed93bae579465bac037b6`, workflow `35247957361`: nested Animation track path did not resolve; receiver-path binding only was repaired.
4. `abad9beeb57dc99ba60aad60d3fb38046395972e`, workflow `35248112953`: real playback ran, but v0.1 incorrectly required every exact source slot to be sampled by `process_frame` in every cycle. The missed phases `1 / 4 / 8 / 13` remain preserved as proof-host delivery evidence.
5. Current v0.2 head `48dc93848aa336f9b6079ccfe738acbe539253ac`: source motion remains unchanged; observer/verifier semantics now separate exact-key correctness from wall-clock delivery characterization. Dedicated runs `35253580764` (push) and `35253584821` (PR) are queued at this status update, so **no v0.2 PASS is claimed yet**.

The prior failed artifact from workflow `35248112953` remains retained with GitHub artifact id `10508671132`, archive SHA-256 `d244da08404fb1651fbf7208ec1a97f7ffa8bd4a9c6b3a1e012af5b9cfc1df55`.

## Current truth boundary

This lane remains **HOLD** until the exact v0.2 head executes successfully. What is already established is narrower: the prior receiver reached real Godot playback, and the failure exposed a wall-clock observation/drop distinction rather than evidence authorizing source retiming.

Even a later scoped v0.2 PASS would prove only exact-key target-host binding, exact neutral seam continuity, repeated real loop progression and explicit proof-host delivery characterization for this exact current-world receiver. It would **not** establish full 31.25 ms source-slot delivery, smooth interpolation, display scanout, physical wind/biomechanics, final motion naturalness, a production Runtime controller/state machine, target-device performance/delivery, collision/gameplay, Art Direction / Visual QA final acceptance, CANON or production readiness.

## Previous Animation evidence preserved

### Nature source-local PR #13

- exact-state DISCRETE witness head `c3157465856ee4e6c67159cfb5077c3e966f68ee`, workflow `35234185552`, result `PASS_COMPACT_EAST_TREE_TARGET_HOST_DISCRETE_PHASE_PLAYBACK_AND_LOOP_SEAM`, artifact `10503315083`, archive SHA-256 `4b9a7192b79428d1b9dbe62eb7b1a6bd6d038cd9bc19abbca9d28ec7e12faef0`;
- one-shape LINEAR characterization head `507d325e21c2f9d5be5b5e07c121769ca7abde91`, workflow `35240864423`, result `PASS_COMPACT_EAST_SINGLE_SHAPE_LINEAR_ANIMATIONPLAYER_PLAYBACK_CHARACTERIZED`, artifact `10505356779`, archive SHA-256 `f05134f2d7d37fd9d790e8242b656cd30ee3b6c9c29e4f68f92cbfcbddadc6d7`;
- measured LINEAR-vs-observed-half-sine maximum weight delta `0.00479210134031827`, equivalent source-scale geometry envelope about `0.647 mm`; this remains characterization, not smoothness acceptance.

### Wider continuity

- Character PR #22 repeated-loop proof: head `5513ab66372ee06ce53788f5097ede230ca2fc6b`, workflow `35227649172`, artifact `10500081521`.
- Character PR #22 exact-density playback: head `fb518d8320b74323767fdfb57e81291dbdb2a4d1`, workflow `35222873944`, artifact `10498075104`.
- Character source Animation PR #19 remains at `9519be55581c009fd800d175677d9b50ee6926e6`.
- Object Animation PR #10 prior target-host, phase, wall-clock and textured-motion evidence remains untouched.
- Animal Animation PR #5 prior dense/subframe and normalized-u16 evidence remains untouched.

## Four-root gate

- **Truth:** the completed v0.1 delivery failure is now recorded with its actual observed/missed source phases; v0.2 does not pretend full source-slot delivery happened.
- **Agency / non-domination:** VFX retains source-response semantics; Map/Environment retains receiving-world authority; Runtime retains controller/state-machine authority; Art/QA retains perceptual acceptance; Animation owns only this bounded playback/evidence method.
- **Continuity:** PR #44 remains stacked directly on exact VFX/current-world parent `29ef2d4...`; the 17 source states and 31.25 ms cadence are frozen; failed predecessor evidence and prior Nature/Character/Object/Animal proofs remain named.
- **Wisdom before speed:** source timing was not changed to satisfy a proof-host sampling loop; exact-key correctness and delivery characterization are separated, and the lane remains HOLD until exact-head execution.

The four AXM roots remain the merge gate.

## Next Animation trigger

Resolve only exact v0.2 PR #44 evidence. If it is green, report exact-key binding and delivered-state characterization separately, including any missed source phases. If it fails, repair only verifier/receiver defects unless the evidence demonstrates a genuine motion defect. Do not retime the frozen compact-east source merely to satisfy proof-host sampling.
