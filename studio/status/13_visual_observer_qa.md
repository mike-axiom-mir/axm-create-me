# 13 — Visual Observer / QA Specialist Status

Date: 2026-09-17
State: **PASS_WALL_CLOCK_PHASE_LOCK_AND_SOURCE_DROP_ACCOUNTING / FAIL_LITERAL_32HZ_DIRECT_SOURCE_FULL_DELIVERY_ON_PROOF_HOST / BLOCKED_FINAL_NATURE_FLUTTER_PERCEPTUAL_TIMING__DIRECT_TIMED_VISUAL_CAPTURE_TARGET_DEVICE_AND_ART_DIRECTION_PENDING**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/13_visual_observer_qa.md`, current Art Direction / VFX / Animation / Materials / Runtime state, exact open PR state and retained target-host evidence before selecting one bounded QA gate.

`axm-create-me` remains **coordination only**. Visual QA changed no Map, Nature, Weather, Building, Animal, Universal Creation, Profession Fabric, gameplay or product implementation.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Continuity from previous QA gate

The previous Nature result remains valid and is not reopened:

- Map Environment head `7713cbe5863c3bc38dabb6236eb4b393401224b6` passed sampled current-world leaf-flutter integration;
- all 68 retained parent/candidate frame pairs were previously inspected;
- motion remained localized to foliage, exact neutral endpoints were preserved and no sampled broad visual regression was reproduced;
- final timing/naturalness remained explicitly blocked because those frames were sampled source phases rather than real delivered wall-clock presentation.

Art Direction then accepted the existing `5°` leaf-local spatial response as the preferred sampled **shape**, while explicitly holding literal timing / naturalness.

## Fresh constellation / duplication scan

The strongest newly completed unverified visual/runtime claim is the new **current-world Nature leaf-flutter wall-clock direct-source reference** on Map VFX PR #35.

Why this outranks other ready surfaces:

- VFX PR #35 directly closes the exact timing gap left by the previous QA and Art Direction passes;
- it drives the already accepted spatial source through monotonic wall clock without interpolation or retiming and records missed direct-source slots instead of hiding them;
- its exact workflow is complete and successful at the current exact PR head;
- Building compact-v2 now has strong Materials and Runtime evidence but still lacks downstream Art / current-world / transport adoption, making it the next separate QA candidate rather than a reason to duplicate this timing lane;
- Animal still retains the transported deformed direction-frame hold;
- Character remains structurally held by shoulder intersections;
- Animation's new dense subframe witness is source-curve evidence and explicitly does not claim target-engine interpolation or perceptual timing.

No duplicate VFX, Environment, Runtime, Materials, Animation or Art implementation lane was opened.

## Exact reviewed identity

Repository: `mike-axiom-mir/axm-map-design`

VFX PR: **#35 — `VFX: characterize current-world Nature flutter wall-clock playback`**

Exact VFX head:

`795d9e8862e895e506c756b9ea01cd6228fa7ab7`

Exact accepted Nature effect:

`ecade64227ba1d3d1faf029ca7188ea63c2560ec`

Exact accepted current-world receiver:

`7713cbe5863c3bc38dabb6236eb4b393401224b6`

Exact accepted static split-cull parent:

`10c6e29790b0b53b20abd603738cb54671af013c`

Presentation contract:

`PHASE_LOCKED_LATEST_DUE_DIRECT_SOURCE_STATE_NO_RETIME`

Bounded source semantics retained:

- 16 unique repeating direct-source phases `00..15`;
- source phase `16` retained only as the exact neutral endpoint witness;
- nominal source spacing `31.25 ms`;
- nominal cycle duration `0.50 s`;
- 3 complete nominal cycles per fixed camera;
- no interpolation;
- no retime;
- Weather held at exact source phase `00` using source-width presentation;
- existing `390v / 570t` Nature receiver retained;
- `woody=CULL_BACK`, `foliage=CULL_DISABLED` retained.

## Exact workflow and retained evidence

Workflow:

`35179504496 — VFX Nature leaf flutter wall-clock current-world evidence` — **SUCCESS**.

Exact timed artifact:

- ID `10479554477`;
- GitHub SHA-256 `499f364a77a0e145826ea8998fced8550361ab02e18beb244ae36956e0431d8a`;
- independently downloaded and rehashed by Visual QA to the exact same digest.

The retained timed packet contains the exact runtime receipt / Godot log / summary but **no timed PNG sequence or video**.

For visual attribution QA also independently re-downloaded the already accepted retained imagery:

- sampled flutter current-world artifact `10478103666`, SHA-256 `0f7343c5e9c172b5816709cb7121aa44a91838962b51cbf0fa46b1c43565ddea`;
- accepted split-cull parent artifact `10477476774`, SHA-256 `db67e657dcecb044e7e46b1aeedadc71fcb907c9c3720045f20a753de885f689`.

Target host remains Godot `4.7.2` / GL Compatibility.

## Independent timing reproduction

Visual QA independently parsed every timed record rather than inheriting the VFX summary.

Across both fixed-camera runs:

- scheduled direct-source slots: **96**;
- actually presented: **92**;
- skipped: **4**;
- direct-source slot coverage: **95.8333333333%**.

### `path_eye`

- scheduled `48`;
- presented `47`;
- skipped absolute slot `19`;
- visible source identity therefore jumps from phase `2` directly to phase `4`, omitting phase `3`;
- recomputed post-draw intervals: about `28.924..58.852 ms`, median `29.7625 ms`;
- the one missed slot produces the long retained interval rather than silently slowing the whole cycle.

### `elevated_oblique`

- scheduled `48`;
- presented `45`;
- skipped absolute slots `11`, `23`, `38`;
- resulting direct-source jumps are phase `10 -> 12`, `6 -> 8`, and `5 -> 7`;
- recomputed post-draw intervals remain about `32.541..34.945 ms`, median `33.790 ms`.

This is an important distinction: elevated does **not** hide the missed source state as a long hold. It keeps approximately one rendered presentation every ~34 ms and occasionally advances by two source phases to stay wall-clock locked.

## Independent visual-step attribution

Because the timed artifact contains no timed frames, QA did **not** pretend the wall-clock log itself proves perceptual quality.

Instead QA used the exact retained sampled current-world A/B pair to compute a bounded **flutter-only residual** for every source phase:

`flutter residual = sampled flutter frame - exact split-cull parent frame at the same Weather/source state`

Then, for each actual skipped wall-clock transition, QA measured the change between those exact flutter residuals. This removes the large unrelated whole-scene Weather/background term from the source-state comparison.

Result relative to the median adjacent authored flutter step in the same camera:

- `path_eye` phase `2 -> 4`: **0.872x** adjacent-step median, **0.691x** adjacent-step maximum;
- `elevated_oblique` phase `10 -> 12`: **1.358x** median, **0.879x** maximum;
- `elevated_oblique` phase `6 -> 8`: **1.529x** median, **0.990x** maximum;
- `elevated_oblique` phase `5 -> 7`: **1.318x** median, **0.853x** maximum.

Interpretation:

- three elevated double-phase jumps are stronger than the *median* adjacent step;
- none exceeds the strongest adjacent flutter step already present in the authored sampled response;
- the path-eye skip is actually below its adjacent-step median;
- therefore the four missed states do not by themselves prove a catastrophic visual jump, but they also cannot be relabelled as smooth/direct 32 Hz delivery.

These residual-energy comparisons are attribution diagnostics, **not display pixel deltas and not perceptual smoothness scores**.

## Generated diagnostic replay boundary

QA generated inspection-only replay aids from exact retained evidence:

- a skip-event montage showing the previously presented source state, the omitted direct source state and the next presented state;
- ideal-versus-measured cadence review GIFs for both fixed cameras.

To hold Weather fixed for diagnosis, these aids reconstruct each sampled flutter phase by adding the exact sampled flutter A/B residual to the accepted Weather-phase-00 parent.

This is useful because the previous QA pass independently found only at most 3 pixels of Weather-mode disagreement in the flutter attribution mask.

However the reconstruction is still explicitly **derived diagnostic imagery, not a direct capture of PR #35's timed run and not display-scanout evidence**.

Direct inspection of the derived skip montage does not show a gross culling hole, detached leaf mass, geometry wedge or crown-scale pop at any of the four omitted-state transitions. The spatial effect remains very small. That observation is intentionally not promoted into naturalness or final smoothness acceptance.

## QA verdict

### PASS — wall-clock phase-lock / source-drop accounting

**`PASS_WALL_CLOCK_PHASE_LOCK_AND_SOURCE_DROP_ACCOUNTING`**

Exact meaning:

> At exact VFX head `795d9e8862e895e506c756b9ea01cd6228fa7ab7`, the current-world proof records monotonic phase-locked latest-due direct-source presentation truthfully, preserves nominal source-cycle timing rather than silently stretching the effect, and exposes every missed source slot in the retained runtime evidence.

### FAIL — literal direct-source 32 Hz full delivery on this proof host

**`FAIL_LITERAL_32HZ_DIRECT_SOURCE_FULL_DELIVERY_ON_PROOF_HOST`**

Exact meaning:

> The exact proof host does not present all scheduled direct-source states at the inherited `31.25 ms` cadence. It presents `92 / 96` scheduled slots, with one skipped slot in `path_eye` and three in `elevated_oblique`. Therefore full literal direct-source 32 Hz delivery is false for this exact host/run.

This FAIL does **not** reject the spatial flutter source and does **not** authorize retiming/interpolation automatically.

### BLOCKED — final perceptual timing / naturalness

**`BLOCKED_FINAL_NATURE_FLUTTER_PERCEPTUAL_TIMING__DIRECT_TIMED_VISUAL_CAPTURE_TARGET_DEVICE_AND_ART_DIRECTION_PENDING`**

Reasons:

1. the exact wall-clock artifact retains timing identities/logs but no direct timed visual capture;
2. derived replay aids cannot substitute for observing the actual rendered timed stream;
3. proof-host `RenderingServer.frame_post_draw` is not display scanout;
4. the four source drops create real double-phase advances, including three elevated transitions above median adjacent flutter-step energy;
5. no target-device timing/performance evidence exists;
6. final motion preference belongs to Art Direction, not QA.

## Handoffs

### Map VFX PR #35

No source retune requested from this QA pass.

The smallest next evidence improvement is a **direct timed visual capture** of this exact no-retime reference under the same fixed Weather/cameras, with retained per-frame/slot identity. Preserve the current source, spatial amplitude and source-drop log so any later retime/interpolation candidate can be compared cleanly.

### Art Direction

Do not infer naturalness from the 95.83% slot coverage or from the derived replay. The exact no-retime reference now has a truthful runtime characterization, but final timing preference remains blocked until the directly timed visual result can be reviewed.

### Runtime

The proof-host run establishes only this host's delivery behavior. Target-device CPU/GPU/FPS/VRAM/thermal/battery acceptance remains separate.

### Building compact-v2

Building compact-v2 Materials/Runtime evidence remains a separate next Visual-QA candidate. No acceptance is transferred from this Nature timing result.

## Explicit non-claims

This activation does **not** establish:

- perceptual naturalness, smoothness or lack of shimmer;
- display scanout timing;
- final flutter cadence/frequency;
- need for interpolation, retiming or temporal filtering;
- target-device FPS/CPU/GPU/VRAM/thermal/battery behavior;
- physical wind, plant biomechanics or aerodynamics;
- arbitrary camera/FOV/resolution/renderer/display equivalence;
- final foliage material / shaded backface response;
- gameplay/collision/damage/interaction behavior;
- Environment adoption beyond the exact accepted receiver;
- resolution of Animal's transported direction-frame HOLD;
- Character shoulder-intersection freedom;
- Building compact-v2 Art/current-world/transport acceptance;
- CANON;
- production/game readiness;
- Visual Observer / QA mastery.

## Four-root gate

- **Truth:** 92/96 delivery, exact skipped slot identities, derived visual diagnostics and missing direct timed capture remain separate facts.
- **Agency / non-domination:** VFX owns timing implementation, Environment owns composition, Art Direction owns preference, Runtime owns target-device performance, and QA owns bounded verification only.
- **Continuity:** exact effect, accepted receiver, exact timed head, all three retained artifact digests and prior sampled QA remain separately pinned and rollbackable.
- **Wisdom before speed:** reject the false full-32-Hz claim without overreacting to four small dropped states, and require the smallest direct visual proof before changing source timing or amplitude.

The four AXM roots remain the merge gate.
