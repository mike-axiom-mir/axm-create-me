# 07 — 3D Animation & Motion Specialist Status

Date: 2026-09-17
State: **HOLD_COMPACT_EAST_CURRENT_WORLD_PLAYBACK_EXACT_HEAD_PENDING / SOURCE MOTION FROZEN / VERIFIER REPAIRS PRESERVED**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/07_animation_motion.md`, the prior Animation status and fresh specialist/PR state across the 3D constellation before choosing a lane.

`axm-create-me` remains **coordination only**. Product motion/proof work is in its owning repository. The four AXM roots remain the internal merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

### Why this lane

The strongest fresh non-duplicated Animation seam was Map/VFX PR #43's accepted current-world receiver for the compact-east Nature response. VFX had already proved that the exact Nature VFX response is visible in the current world, but explicitly did not establish real repeated `AnimationPlayer` playback there. Existing Nature Animation PR #13 already covers source-local DISCRETE playback and the separate one-shape LINEAR candidate, so this activation does not retime or duplicate those proofs.

Character PR #22, Object PR #10 and Animal PR #5 retain their prior Animation evidence; no settled lane was reopened merely because another activation occurred. Separate west-sapling leaf-flutter timing remains outside this lane and is frozen here.

## Bounded improvement — current-world exact-state playback

Repository: `mike-axiom-mir/axm-map-design`

New draft PR:

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

**`abad9beeb57dc99ba60aad60d3fb38046395972e`**

PR state at this status update: **open / draft / mergeable / unmerged**.

Reusable contract:

`axm.animation-compact-east-current-world-discrete-playback/v0.1`

The source motion is frozen:

- duration: `0.50 s`;
- intervals: `16`;
- endpoint-inclusive VFX source states: `17`;
- exact source step: `31.25 ms`;
- loop track: the 16 unique phases `00..15`;
- phase `16` remains an explicit duplicate-neutral endpoint/seam witness rather than being silently discarded;
- track interpolation: `NEAREST`;
- update mode: `DISCRETE`;
- loop mode: `LOOP_LINEAR`;
- proof view: the parent receiver's accepted `elevated_oblique` context;
- Weather and west-sapling motion are frozen at exact phase `00` to isolate compact-east motion.

The observer checks phase `00 == 16` geometry, checks that the loop transition `15 -> 00` adds no displacement beyond the authored final transition `15 -> 16`, performs a verifier-only `+1 mm` neutral-endpoint corruption test, seeks all 16 unique keys through a real Godot `AnimationPlayer`, retains current-world captures, and then attempts three capture-free real playback wraps with persistent receiver/player identity.

## Preserved failure / repair trail

No failed run has been relabeled as a motion PASS.

1. Initial head `cd43f910609fed57b6fdb102ee98d9de168e74e7`: observer parser/API defects (`_compact` name and unsupported `Dictionary.update`) prevented the Godot proof from running. Repaired only observer plumbing.
2. Head `dc6b8313dc443bac2c7bfbff3abade33c7a52605`, workflow `35247561336`: exact parent prerequisite passed, but the observer attempted Weather projection before camera/tree readiness. Receipt failed as infrastructure. Added scene settling; no source state, timing, tolerance or motion changed.
3. Head `ec58d180a5f72b43de3ed93bae579465bac037b6`, workflow `35247957361`: exact parent prerequisite again passed, but Godot reported the Animation track could not resolve `compact-east-animation-receiver:mesh`; deterministic phase `01` therefore remained at phase `00` and the proof failed closed. This isolated a nested receiver-path defect, not a demonstrated source-motion defect.
4. Current head `abad9beeb57dc99ba60aad60d3fb38046395972e`: track binding now derives the real nested receiver path from the current-world scene tree. The exact-head dedicated workflow `35248112953` is queued at the time of this status commit, so **no final playback PASS is claimed yet**.

The repair rule remains strict: observer representation/lifecycle defects may be repaired; VFX source timing, source geometry, acceptance thresholds and unrelated owner state are not changed to manufacture a pass.

## Current truth boundary

Until the exact current head completes successfully, this lane remains **HOLD**. Previous failed runs do establish that the exact parent VFX artifact and source lineage are being loaded and that the observer fails closed when the target path is not actually driven; they do not establish successful current-world repeated playback.

Even a later scoped PASS would prove only exact-state DISCRETE playback and loop continuity in this exact proof receiver. It would not establish smooth interpolation, physical wind/biomechanics, final motion naturalness, a production Runtime controller/state machine, target-device performance or delivery, collision/gameplay, Art Direction / Visual QA acceptance, CANON or production readiness.

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

- **Truth:** failed observer runs remain visible and are not converted into motion evidence; exact donor/source identities remain pinned.
- **Agency / non-domination:** VFX retains source-response semantics; Map/Environment retains receiving-world authority; Runtime retains controller/state-machine authority; Art/QA retains perceptual acceptance; Animation owns only the bounded playback witness.
- **Continuity:** PR #44 stacks directly on exact VFX/current-world parent `29ef2d4...`; the 17 source states and 31.25 ms cadence remain frozen; prior Nature/Character/Object/Animal evidence remains named rather than silently rewritten.
- **Wisdom before speed:** the current lane stays HOLD until its exact-head proof runs cleanly; infrastructure defects are repaired before any broader claim.

The four AXM roots remain the merge gate.

## Next Animation trigger

Resolve only the current PR #44 observer/verification lane until it either earns a scoped exact-head result or exposes a genuine motion defect. Do not alter source timing to satisfy the verifier. After that, re-scan the constellation and avoid further Nature retiming unless a concrete receiving-world or Art/QA defect requires it.
