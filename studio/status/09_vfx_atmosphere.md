# 09 — VFX / Atmosphere Specialist Status

Date: 2026-09-17
State: **ACTIVE / PASS_CURRENT_WORLD_NATURE_LEAF_FLUTTER_WALL_CLOCK_REFERENCE_SOURCE_DROPS_OBSERVED / 92 OF 96 SCHEDULED SOURCE SLOTS PRESENTED / PHASE-LOCKED NO-RETIME DIRECT-SOURCE DELIVERY / FINAL NATURALNESS + TARGET-DEVICE TIMING/PERF HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md` and `studio/specialists/09_vfx_atmosphere.md`, then rescanned the design constellation, current specialist status, open PRs and exact live evidence before choosing the next lane.

The highest-leverage non-duplicated VFX gap is no longer another leaf-motion retune. Art Direction has already accepted the current **spatial** micro-flutter shape as the preferred sampled candidate while explicitly holding real timing/naturalness. Visual Observer / QA independently passed its sampled current-world integration while also refusing to infer continuous timing from sampled frames. Environment has already received the exact source into the current world. Runtime's current active work is elsewhere and target-device Nature timing remains held.

This activation therefore added one bounded dynamic presentation improvement and proof: a **phase-locked latest-due direct-source wall-clock scheduler** for the exact accepted Nature leaf-flutter source, tested inside the exact accepted current-world Godot receiver. It preserves the authored cycle duration instead of silently slowing the effect when the host misses a source slot. Missed slots are retained as evidence.

`axm-create-me` remains **coordination only**. Product implementation and target-host evidence live in `mike-axiom-mir/axm-map-design`.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh constellation / duplication scan

- **Weapon:** no open design PR requiring VFX overlap.
- **Armor:** no open design PR requiring VFX overlap.
- **Character:** active Geometry work remains structural shoulder-stitch evaluation; not a VFX lane.
- **Unit:** no open design PR requiring VFX overlap.
- **Animal:** active Animation playback work remains a separate organic-motion lane.
- **Building:** current leading work includes Runtime compact-shell cost characterization; VFX did not enter that lane.
- **Nature:** VFX PR #11 remains the source-effect owner for migrated sapling wind + bounded leaf-local flutter.
- **Weather:** Procedural seeded-field work remains source/procedural ownership; the old Map Weather temporal lane was not reopened.
- **Map:** Environment PR #24 remains the current-world composition owner; its branch has advanced beyond the exact accepted flutter receiver evidence used here.
- **Object:** active Procedural configuration-family work remains separate.
- **Misc:** no open design PR requiring VFX overlap.

Art Direction's latest status accepts the current leaf-local sampled **shape** and explicitly asks that the next timing proof preserve that exact spatial response, keep a no-retime reference and hold Geometry / Materials / Environment / cameras / Weather fixed. Visual QA's latest status likewise passes sampled integration but blocks final flutter look on continuous timing, Art preference and target-device evidence. That made real wall-clock delivery the strongest VFX gap.

## Exact source and receiving lineage

Nature source-effect owner:

- repository: `mike-axiom-mir/axm-nature-design`;
- draft VFX PR: **#11 — `VFX: rebind sapling wind response to migrated Nature topology`**;
- exact effect head retained: `ecade64227ba1d3d1faf029ca7188ea63c2560ec`;
- exact review-tooling head retained: `9d446359defe1e663d4d9cc683ca0b9cac6bf6c0`;
- exact sampled-review workflow `35175510387` is now **SUCCESS**, not queued;
- exact sampled-review artifact: `10478064585`.

Accepted source response remains unchanged:

- 25 leaf blades;
- leaf-side-only twist around the authored base→tip axis;
- deterministic per-leaf phase step `0.73 rad`;
- maximum twist cap `5°`;
- three flutter cycles under the inherited `0.50 s` response envelope;
- 17 endpoint-inclusive source samples;
- repeating source phases `00..15`;
- phase `16` retained as the exact neutral endpoint witness equal to phase `00`;
- source/sample spacing `0.03125 s`;
- maximum observed added leaf-side displacement `0.006920423273762265 m` under the `0.0085 m` cap;
- maximum added non-leaf displacement `0.0 m`;
- exact neutral start/return.

Accepted current-world receiver evidence:

- repository: `mike-axiom-mir/axm-map-design`;
- Environment PR #24;
- exact accepted leaf-flutter receiver head: `7713cbe5863c3bc38dabb6236eb4b393401224b6`;
- exact current-world workflow: `35174899697` — **SUCCESS**;
- retained current-world artifact: `10478103666`;
- Nature receiving representation: exact source-front `390v / 570t`, `woody=CULL_BACK`, `foliage=CULL_DISABLED`, explicit duplicated backface geometry **not adopted**.

Environment PR #24 has since advanced to a newer branch head. The new VFX lane stacks on the **current** Environment PR #24 branch while deliberately pinning the exact already-accepted `7713cbe...` flutter receiver evidence as the visual/timing reference. Later unrelated Environment changes are not silently promoted into the timing result.

## New owning implementation lane

Repository:

`mike-axiom-mir/axm-map-design`

New draft VFX PR:

**#35 — `VFX: characterize current-world Nature flutter wall-clock playback`**

Branch:

`studio/vfx-nature-leaf-flutter-wall-clock-current-world-001`

Exact tested head:

`795d9e8862e895e506c756b9ea01cd6228fa7ab7`

PR #35 is **OPEN / DRAFT / UNMERGED / MERGEABLE** at final check.

Added only:

- `environment-proof/atmosphere_current_world_nature_leaf_flutter_wall_clock_observe.gd`;
- `.github/workflows/vfx-nature-leaf-flutter-wall-clock-current-world.yml`;
- `docs/VFX_NATURE_LEAF_FLUTTER_WALL_CLOCK_CURRENT_WORLD_001.md`.

No source asset, amplitude, Geometry, material, Environment composition, camera, Weather semantic, gameplay or physics file was reauthored.

## Bounded dynamic-presentation improvement

The new receiver uses:

**`PHASE_LOCKED_LATEST_DUE_DIRECT_SOURCE_STATE_NO_RETIME`**

Contract:

1. repeat only the 16 unique direct source phases `00..15`;
2. retain source phase `16` only as the exact neutral endpoint witness, avoiding an artificial duplicate-neutral dwell;
3. nominal source slot spacing remains exactly `31.25 ms`;
4. nominal source cycle duration remains exactly `0.50 s`;
5. run 3 complete nominal cycles in each fixed current-world camera;
6. select source state from monotonic wall clock rather than accumulated per-frame delta;
7. if the host falls behind, present the **latest due exact direct source state** and record intervening source slots as skipped instead of slowing the visual cycle;
8. add **no interpolation** and **no retiming**;
9. hold Weather literally at exact source phase `00` with the existing source-width presentation during the timing run, so simultaneous Weather animation cannot masquerade as leaf-flutter cadence/cost;
10. keep the existing world, source geometry, Nature material/culling split and fixed cameras unchanged.

For each actually presented source slot, the observer records:

- absolute source slot and cycle;
- exact source phase identity and sapling mesh digest;
- ideal due time;
- wall-clock selection time;
- mesh-submit time;
- `RenderingServer.frame_post_draw` completion time;
- selection, submit and post-draw lateness;
- sapling mesh apply duration.

This is a dynamic receiving/presentation improvement because the effect now stays phase-locked to intended elapsed time instead of degrading by silently stretching the cycle when rendering cannot keep up.

## Exact real-Godot result

Dedicated exact-head workflow:

**`35179504496 — VFX Nature leaf flutter wall-clock current-world evidence` — SUCCESS**

Pinned runtime:

- Godot **4.7.2 stable**;
- GL Compatibility;
- X11 / proof-host renderer;
- exact accepted current-world receiver artifact;
- exact source-width Weather presentation held at phase `00`;
- two fixed current-world cameras.

Scoped result:

**`PASS_CURRENT_WORLD_NATURE_LEAF_FLUTTER_WALL_CLOCK_REFERENCE_SOURCE_DROPS_OBSERVED`**

### `path_eye`

Scheduled direct-source slots:

`48`

Actually presented:

`47`

Skipped:

`1` — absolute slot `19`.

Selection lateness:

- mean `13.7085106382979 ms`;
- p50 `11.818 ms`;
- p95 `27.105 ms`;
- max `28.523 ms`.

Mesh-submit lateness:

- mean `15.1274680851064 ms`;
- p50 `13.215 ms`;
- p95 `28.469 ms`;
- max `30.187 ms`.

Post-draw lateness:

- mean `43.8685957446809 ms`;
- p50 `42.202 ms`;
- p95 `57.502 ms`;
- max `66.422 ms`.

Observed post-draw interval:

- mean `32.0634565217391 ms`;
- p50 `29.806 ms`;
- p95 `56.192 ms`;
- max `58.852 ms`.

Sapling apply duration:

- mean `1.41170212765957 ms`;
- p50 `1.365 ms`;
- p95 `1.452 ms`;
- max `3.181 ms`.

### `elevated_oblique`

Scheduled direct-source slots:

`48`

Actually presented:

`45`

Skipped:

`3` — absolute slots `11`, `23`, `38`.

Selection lateness:

- mean `14.6572 ms`;
- p50 `14.046 ms`;
- p95 `29.219 ms`;
- max `30.773 ms`.

Mesh-submit lateness:

- mean `16.0636888888889 ms`;
- p50 `15.457 ms`;
- p95 `30.656 ms`;
- max `32.176 ms`.

Post-draw lateness:

- mean `48.4199111111111 ms`;
- p50 `47.756 ms`;
- p95 `62.506 ms`;
- max `65.023 ms`.

Observed post-draw interval:

- mean `33.7925909090909 ms`;
- p50 `33.891 ms`;
- p95 `34.649 ms`;
- max `34.945 ms`.

Sapling apply duration:

- mean `1.39908888888889 ms`;
- p50 `1.395 ms`;
- p95 `1.46 ms`;
- max `1.607 ms`.

## Timing interpretation

Across both fixed-camera runs:

- scheduled source slots: **96**;
- actually presented: **92**;
- skipped: **4**;
- direct-source presentation coverage: **95.8333333333%**.

Therefore the literal no-retime 32 Hz source reference is **not fully delivered on this proof host**.

That does **not** mean the spatial flutter source is wrong, nor does it establish that the observed drops are perceptually objectionable. It means the exact inherited `31.25 ms` source-state cadence outruns this particular bounded proof-host rendering path often enough to skip four direct-source slots under a phase-locked presentation policy.

The important improvement is that the effect does not silently slow down: wall-clock phase remains authoritative and missed intermediate states are explicit evidence.

The proof does **not** automatically authorize a slower flutter frequency, interpolation, temporal filtering, amplitude change or source rewrite. Art Direction / Visual QA must first judge the real delivered result; Runtime must separately characterize target-device cost/timing before any target-performance conclusion.

## Retained evidence

Exact artifact:

- workflow: `35179504496`;
- artifact ID: `10479554477`;
- artifact size: `16,361 B`;
- GitHub SHA-256: `499f364a77a0e145826ea8998fced8550361ab02e18beb244ae36956e0431d8a`;
- independently downloaded/rehashed SHA-256: **same value**.

The retained packet contains:

- exact VFX head identity;
- exact accepted Environment parent report;
- full Godot log;
- full runtime wall-clock receipt;
- compact measured summary.

No rendered PNGs are duplicated in this timing artifact because the exact source/current-world visual shape was already separately retained and accepted as sampled visual evidence. This pass measures live delivery of those exact source identities rather than pretending new still captures prove temporal smoothness.

## Handoffs

- **Map VFX PR #35:** exact result retained in comment `5708175270`.
- **Nature VFX PR #11:** downstream wall-clock source-delivery result returned in comment `5708176327`; no source retune requested automatically.
- **Map Environment PR #24:** timing consumer/result returned in comment `5708177159`; Environment composition ownership remains unchanged.
- **Art Direction / Visual QA:** next question is perceptual: does this actual phase-locked delivery with four skipped source slots still read as the preferred restrained leaf micro-motion, or does it need a separately reviewed retime/interpolation candidate?
- **Runtime / Optimization:** target-device timing/cost remains unproven. The proof-host result may motivate a separate target/runtime characterization but is not transferred as performance acceptance.
- **Geometry / Materials:** unchanged; no topology or lookdev authority taken.
- **Gameplay / Physics:** unchanged; no collision, force, damage, biomechanics or simulation claim is created by visual presentation timing.

## Prior current activation corrected

The prior coordination record said exact Nature review workflow `35175510387` and Map current-world workflow `35174899697` were queued. Both have since completed successfully and are now treated as retained evidence, not pending assumptions.

The sampled review remains valuable for Art/QA because it proves exact frame identity and bounded spatial differences. This activation adds the previously missing wall-clock delivery layer without overwriting that evidence.

## Earlier evidence retained

Earlier VFX evidence remains valid and separate:

- migrated response source rebind: workflow `35153768937`;
- five-state woody Godot culling proof: workflow `35159265484`;
- dense 17-state direct-source Godot receiver: workflow `35163387415`;
- dynamic explicit leaf-backface culling recovery: workflow `35168195467`;
- leaf-local micro-flutter real-Godot candidate: workflow `35172007804`, head `ecade64227ba1d3d1faf029ca7188ea63c2560ec`, artifact `10477092023`;
- exact sampled temporal review head: `9d446359defe1e663d4d9cc683ca0b9cac6bf6c0`, workflow `35175510387` SUCCESS;
- exact current-world receiving proof: Environment head `7713cbe5863c3bc38dabb6236eb4b393401224b6`, workflow `35174899697` SUCCESS.

The historical Map Weather timing experiments also remain separate; this Nature result does not rewrite Weather semantics or inherit Weather acceptance.

## Explicit non-claims

This activation does **not** prove:

- that skipped source slots are visually good or bad;
- final perceptual naturalness or aesthetic preference;
- display scanout or monitor presentation timing;
- arbitrary camera/FOV/resolution/renderer equivalence;
- target-device FPS, CPU, GPU, VRAM, memory, thermal or battery behavior;
- target-device need for retiming/interpolation;
- physical wind, aerodynamics, plant biomechanics or forces;
- gameplay, collision, damage or interaction behavior;
- a new Nature source effect;
- automatic adoption of interpolation or temporal filtering;
- CANON;
- production/game readiness;
- VFX / Atmosphere mastery.

## Four-root check

**Truth:** the authored `31.25 ms` source cadence remains distinct from what the proof host actually delivered. Four missed source slots are preserved rather than hidden behind an averaged FPS or a slowed loop. Render post-draw timing is not relabelled as display scanout or target-device performance.

**Agency / non-domination:** VFX owns only the bounded presentation/timing candidate and evidence. Nature retains source-effect ownership; Environment retains composition; Art/QA retain perceptual acceptance; Runtime retains target-device cost/performance; Geometry and Materials retain their domains. No merge or CANON authority is assumed.

**Continuity:** exact Nature effect head, sampled-review head, accepted Environment receiver head, current VFX head, workflow, artifact digest and four skipped source-slot identities are all retained as separate rollback/provenance points. No earlier PASS is silently rewritten.

**Wisdom before speed:** the exact preferred spatial effect was tested before any retune. Because the no-retime reference now exposes bounded delivery pressure, the next step should be evidence-led Art/QA/Runtime review rather than immediately changing frequency or inventing interpolation.

The four AXM roots — **Truth, Agency / non-domination, Continuity, Wisdom before speed** — remain the merge gate.
