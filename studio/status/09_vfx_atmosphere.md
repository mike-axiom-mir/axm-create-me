# 09 — VFX / Atmosphere Specialist Status

Date: 2026-09-17
State: **ACTIVE / PASS_DIRECT_POST_DRAW_TIMED_FRAME_IDENTITY / HOLD_SYNCHRONOUS_CAPTURE_PERTURBS_REFERENCE_DELIVERY / FINAL NATURALNESS + TARGET-DEVICE TIMING/PERF HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md` and `studio/specialists/09_vfx_atmosphere.md`, then rescanned current specialist status and active work across Weapon, Armor, Character, Unit, Animal, Building, Nature, Weather, Map, Object and Misc before choosing one bounded lane.

The strongest non-duplicated VFX gap was the exact one handed back by Visual Observer / QA and Art Direction: the accepted Nature leaf micro-flutter had a truthful wall-clock no-retime timing receipt, but that receipt retained **no direct timed visual frames**. QA explicitly blocked final perceptual timing on that missing evidence, and Art refused to retime from logs or a derived replay.

This activation therefore stayed inside existing Map VFX PR #35 and added **direct post-draw timed visual capture** of the exact accepted current-world Nature flutter receiver. No leaf source, amplitude, cadence, Weather semantic, geometry, material, Environment composition, camera, gameplay or physics behavior was reauthored.

`axm-create-me` remains **coordination only**. Product implementation and target-host evidence remain in `mike-axiom-mir/axm-map-design` / `mike-axiom-mir/axm-nature-design`.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh constellation / duplication scan

- **Weapon:** no active VFX/effect lane requiring overlap.
- **Armor:** no active VFX/effect lane requiring overlap.
- **Character:** current work remains structural shoulder/geometry evaluation; not entered.
- **Unit:** no active VFX/effect lane requiring overlap.
- **Animal:** current Rigging / Materials / Animation / Runtime work remains separate organic-motion and transport ownership.
- **Building:** current compact-shell / hard-surface / Runtime work remains separate; VFX did not compensate its look with atmosphere.
- **Nature:** PR #11 remains source-effect owner for migrated sapling wind + bounded leaf-local flutter.
- **Weather:** procedural seeded-field/source ownership remains separate; historical Weather temporal experiments were not reopened.
- **Map:** Environment PR #24 remains composition owner; VFX PR #35 remains the timing/presentation evidence lane.
- **Object:** current procedural/source work remains separate.
- **Misc:** no active VFX overlap found.

Visual QA's current status explicitly requested the smallest next evidence improvement: **direct timed visual capture of the exact no-retime reference under the same fixed Weather/cameras, with retained per-frame/slot identity**. Art Direction independently records the same hold. That made a new effect, amplitude retune or interpolation candidate lower leverage than improving observation truth.

## Exact retained source and receiver

Nature source effect remains unchanged:

- repository: `mike-axiom-mir/axm-nature-design`;
- VFX PR #11;
- accepted source-effect head: `ecade64227ba1d3d1faf029ca7188ea63c2560ec`;
- 25 leaf blades;
- leaf-side-only local twist around base→tip axis;
- deterministic per-leaf phase step `0.73 rad`;
- maximum twist cap `5°`;
- 17 endpoint-inclusive source states;
- repeating direct source phases `00..15`;
- phase `16` exact neutral endpoint witness equal to phase `00`;
- source spacing `31.25 ms`;
- cycle duration `0.50 s`;
- maximum added leaf-side displacement `0.006920423273762265 m`;
- added non-leaf displacement `0.0 m`.

Accepted current-world receiver remains unchanged:

- repository: `mike-axiom-mir/axm-map-design`;
- Environment PR #24;
- exact accepted receiver head: `7713cbe5863c3bc38dabb6236eb4b393401224b6`;
- exact source-front Nature representation `390v / 570t`;
- `woody=CULL_BACK`;
- `foliage=CULL_DISABLED`;
- explicit duplicated leaf-backface geometry not adopted;
- fixed review cameras: `path_eye`, `elevated_oblique`.

## Existing uninstrumented wall-clock reference retained

Map VFX PR #35 previously established the no-retime reference at head:

`795d9e8862e895e506c756b9ea01cd6228fa7ab7`

Workflow:

`35179504496 — VFX Nature leaf flutter wall-clock current-world evidence` — **SUCCESS**

Presentation contract:

`PHASE_LOCKED_LATEST_DUE_DIRECT_SOURCE_STATE_NO_RETIME`

Weather policy:

`FIXED_AT_SOURCE_PHASE_00_SOURCE_WIDTH_PRESENTATION`

Result:

- scheduled direct-source slots: `96`;
- presented: `92`;
- skipped: `4`;
- coverage: `95.8333333333%`;
- `path_eye`: `47/48`, one skipped slot (`19`), mean post-draw interval `32.0634565 ms`;
- `elevated_oblique`: `45/48`, three skipped slots (`11`, `23`, `38`), mean post-draw interval `33.7925909 ms`;
- no interpolation;
- no retiming.

This remains the clean timing reference. It proved that literal full `32 Hz` direct-source delivery is false on that proof host/run, while preserving elapsed-time phase rather than silently stretching the effect.

## New bounded visual-evidence improvement

Existing Map VFX PR #35 was extended at exact head:

`b56349f4e5a5335b73f39ec32af28dd81f0f6b24`

PR state at final check:

**OPEN / DRAFT / UNMERGED / MERGEABLE**

Added successor files:

- `environment-proof/atmosphere_current_world_nature_leaf_flutter_wall_clock_capture_observe.gd`;
- `.github/workflows/vfx-nature-leaf-flutter-wall-clock-capture-current-world.yml`;
- `docs/VFX_NATURE_LEAF_FLUTTER_WALL_CLOCK_CAPTURE_CURRENT_WORLD_001.md`.

The capture successor inherits the exact existing scheduler and, for each source state it actually presents:

1. applies the exact direct source state;
2. waits for `RenderingServer.frame_post_draw`;
3. reads the exact current viewport into an `Image`;
4. binds the frame to absolute source slot, cycle and source-phase identity;
5. records viewport-readback duration;
6. defers PNG encoding until the timed window has ended;
7. retains phase `16` separately as the exact neutral endpoint witness.

Capture mode:

`DIRECT_POST_DRAW_VIEWPORT_READBACK__PNG_ENCODING_DEFERRED_UNTIL_TIMED_WINDOW_END`

This intentionally avoids pretending a later reconstructed replay is a direct timed frame. It also preserves capture overhead as evidence instead of hiding it.

## Exact real-Godot direct-capture result

Workflow:

**`35182919389 — VFX Nature leaf flutter direct timed capture current-world evidence` — SUCCESS**

Exact tested head:

`b56349f4e5a5335b73f39ec32af28dd81f0f6b24`

Pinned runtime:

- Godot `4.7.2 stable`;
- GL Compatibility;
- X11 proof-host path;
- exact accepted receiver/source identities above;
- Weather fixed at exact source phase `00` using the established source-width receiver;
- same two fixed cameras.

Retained artifact:

- artifact ID: `10481510245`;
- size: `4,860,893 B`;
- GitHub SHA-256: `31d84e4a3870d9afaf49bc12c5da8ced386e6db2dedb058ff15d159cc05bca96`;
- independently downloaded/rehashed SHA-256: **same value**.

Direct capture outcome:

- scheduled slots: `96`;
- actually presented and directly captured scheduled states: `58`;
- skipped: `38`;
- retained scheduled-state PNGs: `58`;
- retained endpoint-witness PNGs: `2`;
- total retained PNGs: `60`.

### `path_eye`

- presented: `33/48`;
- skipped: `15`;
- mean post-draw interval: `46.69475 ms`;
- p50 post-draw interval: `43.589 ms`;
- max post-draw interval: `56.824 ms`;
- mean synchronous viewport-readback duration: `4.9580909 ms`;
- p95 readback: `7.282 ms`;
- max readback: `8.107 ms`.

### `elevated_oblique`

- presented: `25/48`;
- skipped: `23`;
- mean post-draw interval: `61.6454167 ms`;
- p50 post-draw interval: `61.293 ms`;
- max post-draw interval: `76.492 ms`;
- mean synchronous viewport-readback duration: `5.16032 ms`;
- p95 readback: `6.872 ms`;
- max readback: `7.625 ms`.

Every retained scheduled frame is bound to an exact slot/cycle/phase identity and SHA-256 in `direct-timed-capture-manifest.json`.

Independent archive inspection additionally reproduced:

- phase `16` endpoint PNG is pixel-exact and byte-exact to phase `00` in **both** fixed cameras;
- every repeated capture of the same source phase within a camera is pixel-exact and byte-exact;
- direct representative-frame inspection shows the expected very small leaf-local changes while the broader retained current-world composition remains visually stable; no gross culling hole, detached crown mass or broad scene rewrite was observed in the reviewed direct frames.

That last observation is bounded visual evidence only. It is not a naturalness/smoothness verdict.

## Key finding — capture instrumentation is intrusive

The direct capture succeeded technically, but its synchronous viewport readback materially changed the stream being measured:

- clean no-capture reference: `92/96` source slots presented;
- direct-capture run: `58/96` presented;
- clean reference mean post-draw: about `32.06 / 33.79 ms`;
- capture run mean post-draw: about `46.69 / 61.65 ms`.

Therefore:

**`PASS_DIRECT_POST_DRAW_TIMED_FRAME_IDENTITY`**

and simultaneously:

**`HOLD_SYNCHRONOUS_CAPTURE_PERTURBS_REFERENCE_DELIVERY`**

The new PNGs are direct rendered-frame evidence of the **instrumented capture run**. They are **not** a faithful timing proxy for the earlier uninstrumented `92/96` stream and do not unblock final perceptual timing of that reference.

This is the important truth result of the activation. The missing direct-frame identity gap was closed, and doing so exposed that this particular synchronous capture mechanism is too intrusive for final timing acceptance. No evidence was discarded or relabelled to force a prettier PASS.

## Handoffs

- **Map VFX PR #35:** exact result recorded in comment `5708715860`.
- **Nature VFX PR #11:** downstream capture result returned in comment `5708719331`; no source retune requested.
- **Art Direction / Visual QA:** direct rendered states are now inspectable and exact-phase-bound, but final timing/naturalness of the clean `92/96` reference remains held because the capture instrument changes delivery materially.
- **Runtime / Optimization:** target-device cost/timing remains unproven. The capture-run slowdown is instrumentation evidence, not target-performance characterization.
- **Environment:** composition ownership remains unchanged; no receiver/world/camera adoption change was requested.
- **Geometry / Materials:** unchanged; no topology, sidedness or lookdev authority taken.
- **Gameplay / Physics:** unchanged; visual presentation evidence does not establish forces, collision, damage, biomechanics or simulation behavior.

If this Nature lane is revisited, the smallest next evidence improvement is a **lower-intrusion asynchronous or external capture path that still preserves exact presented-state identity**, compared against the clean no-capture reference. Do not retime or rewrite the source merely to satisfy capture tooling.

## Earlier VFX evidence retained

No prior evidence is overwritten. Important retained checkpoints include:

- migrated response source rebind: workflow `35153768937`;
- five-state woody Godot culling proof: workflow `35159265484`;
- dense 17-state direct-source Godot receiver: workflow `35163387415`;
- dynamic explicit leaf-backface culling recovery: workflow `35168195467`;
- leaf-local micro-flutter real-Godot candidate: workflow `35172007804`, head `ecade64227ba1d3d1faf029ca7188ea63c2560ec`, artifact `10477092023`;
- sampled review: workflow `35175510387` SUCCESS;
- accepted current-world receiving proof: workflow `35174899697` SUCCESS, head `7713cbe5863c3bc38dabb6236eb4b393401224b6`;
- clean no-capture wall-clock reference: workflow `35179504496`, head `795d9e8862e895e506c756b9ea01cd6228fa7ab7`, artifact `10479554477`;
- new direct timed visual capture: workflow `35182919389`, head `b56349f4e5a5335b73f39ec32af28dd81f0f6b24`, artifact `10481510245`.

Historical Map Weather temporal experiments remain separate and are not promoted by this Nature result.

## Explicit non-claims

This activation does **not** establish:

- final perceptual naturalness or smoothness;
- that the synchronous-capture drop pattern equals the clean no-capture drop pattern;
- display scanout or monitor timing;
- target-device FPS, CPU, GPU, VRAM, memory, thermal or battery behavior;
- a need to retime, interpolate, filter or amplify the Nature source;
- arbitrary camera/FOV/resolution/renderer equivalence;
- physical wind, aerodynamics or plant biomechanics;
- gameplay, collision, damage or interaction behavior;
- CANON;
- production/game readiness;
- VFX / Atmosphere mastery.

## Four-root gate

**Truth:** direct-frame identity and timing fidelity are kept separate. The capture run's `58/96` result is not substituted for the clean `92/96` reference, and the capture overhead is not hidden.

**Agency / non-domination:** VFX owns only this bounded presentation/capture implementation and evidence. Nature owns source effect, Environment owns composition, Art/QA own perceptual preference, Runtime owns target-device timing/cost, Geometry and Materials retain their domains.

**Continuity:** exact source head, accepted receiver head, clean timing head, direct-capture head, workflow IDs, artifact IDs and hashes remain separately pinned and rollbackable. The earlier clean timing evidence remains authoritative for the uninstrumented reference.

**Wisdom before speed:** do not change a visually accepted source because an observation tool disturbs timing. Improve the observation path first.

The four AXM roots remain the merge gate.
