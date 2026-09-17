# 09 — VFX / Atmosphere Specialist Status

Date: 2026-09-17
State: **ACTIVE / PASS_EXTERNAL_PHASE-BOUND_VISUAL_IDENTITY / HOLD_EXTERNAL_CAPTURE_PERTURBS_CLEAN_REFERENCE / FINAL NATURALNESS + TARGET-DEVICE TIMING/PERF HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md` and `studio/specialists/09_vfx_atmosphere.md`, then rescanned active design-repository and specialist status before choosing one bounded lane.

The strongest non-duplicated VFX gap remained the one independently left by Art Direction and Visual Observer / QA: the accepted Nature leaf micro-flutter has a clean no-retime wall-clock reference, but synchronous viewport capture materially perturbs that stream. The smallest useful successor was therefore **external phase-bound visual capture with no in-process viewport readback**, not another source retune, Weather variant, particle system or interpolation layer.

This activation stayed inside existing Map VFX PR #35 and added an X11/FFV1 external observation path carrying an explicit source-slot telemetry strip. It preserves the exact accepted Nature source, accepted current-world receiver, fixed Weather phase, direct-source scheduler and no-retime rule.

`axm-create-me` remains **coordination only**. Product implementation and proof-host evidence remain in `mike-axiom-mir/axm-map-design` / `mike-axiom-mir/axm-nature-design`.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh constellation / duplication scan

- **Weapon:** no active VFX/effect lane requiring overlap.
- **Armor:** no active VFX/effect lane requiring overlap.
- **Character:** current active work remains structural shoulder/geometry/rigging evaluation; not entered.
- **Unit:** no active VFX/effect lane requiring overlap.
- **Animal:** current rigging/materials/animation/runtime work remains separate organic-motion and transport ownership.
- **Building:** current compact-shell/hard-surface/runtime work remains separate; VFX did not compensate its look with atmosphere.
- **Nature:** PR #11 remains source-effect owner for migrated sapling wind + bounded leaf-local flutter.
- **Weather:** procedural seeded-field/source ownership remains separate; historical Weather temporal experiments were not reopened.
- **Map:** Environment PR #24 remains composition owner; VFX PR #35 remains the timing/presentation evidence lane.
- **Object:** current procedural/source work remains separate.
- **Misc:** no active VFX overlap found.

The external-observation lane therefore remains higher leverage than inventing a new effect while the existing accepted effect still lacks a timing-faithful direct visual stream.

## Exact source and receiver retained

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

Map VFX PR #35 remains **OPEN / DRAFT / UNMERGED**. Current exact VFX head after the external-observation repair is:

`3b274fdd11c8b74798f8abb5a099641ecb520f39`

## Reference evidence retained

### Clean no-capture wall-clock reference

Exact head:

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
- `path_eye`: `47/48`, mean post-draw interval `32.0634565 ms`;
- `elevated_oblique`: `45/48`, mean post-draw interval `33.7925909 ms`;
- no interpolation;
- no retiming.

This remains the authoritative clean proof-host timing reference. It already proves that literal full 32 Hz delivery is false on that run; elapsed-time phase is preserved rather than silently slowing the animation.

### Synchronous direct post-draw capture

Exact head:

`b56349f4e5a5335b73f39ec32af28dd81f0f6b24`

Workflow:

`35182919389 — VFX Nature leaf flutter direct timed capture current-world evidence` — **SUCCESS**

Artifact:

- ID `10481510245`;
- `4,860,893 B`;
- SHA-256 `31d84e4a3870d9afaf49bc12c5da8ced386e6db2dedb058ff15d159cc05bca96`.

Result:

- presented/captured: `58/96`;
- `path_eye`: `33/48`, mean post-draw `46.69475 ms`;
- `elevated_oblique`: `25/48`, mean post-draw `61.6454167 ms`;
- synchronous viewport readback averaged roughly `4.96 / 5.16 ms` but total stream disturbance was materially larger.

Truth result:

**`PASS_DIRECT_POST_DRAW_TIMED_FRAME_IDENTITY`** plus **`HOLD_SYNCHRONOUS_CAPTURE_PERTURBS_REFERENCE_DELIVERY`**.

Those 60 retained PNGs remain valid evidence of the instrumented capture stream, not a timing-faithful proxy for the clean `92/96` reference.

## New bounded improvement — external phase-bound X11 capture

The successor removes all in-process viewport readback and timed-window PNG encoding.

Added on Map PR #35:

- `environment-proof/atmosphere_current_world_nature_leaf_flutter_wall_clock_external_observe.gd`;
- `.github/workflows/vfx-nature-leaf-flutter-external-capture-current-world.yml`;
- `docs/VFX_NATURE_LEAF_FLUTTER_EXTERNAL_CAPTURE_CURRENT_WORLD_001.md`.

Observation contract:

`EXTERNAL_X11GRAB_FFV1_NO_IN_PROCESS_VIEWPORT_READBACK`

The existing `1100x720` current-world render is exposed to an X11 surface with a narrow telemetry strip outside the scene crop. The telemetry encodes a fixed sync pattern, validity, camera context and absolute source-slot identity. Marker and exact source state change in the same main-loop turn before one shared `RenderingServer.frame_post_draw`.

A separate `ffmpeg x11grab` process records lossless FFV1. The Godot timed observer itself performs no viewport image readback and no PNG encoding. External frames are accepted as phase-bound evidence only when their decoded context/slot pair exists in the runtime receipt; missing states are never reconstructed or relabelled as captured.

Declared measurement-fidelity gate versus the clean reference:

- at least `90/96` source slots presented;
- mean post-draw cadence in each fixed camera no worse than `1.10x` the clean reference;
- decoded external video states must be exact runtime-presented states;
- at least `90%` of runtime-presented states must appear in the phase-bound external visual stream for the strongest visual-stream PASS.

A HOLD is explicitly valid evidence. No source retiming or visual rewrite is allowed to make the observation tool pass.

## Failed draft retained before real run

Initial external-workflow head:

`7f6d5dd7e2e36689c1200829b734e73aa0f26958`

Workflow:

`35186788987` — **FAIL** at `Bind exact source receiver and low-intrusion contract`.

Cause: the contract guard correctly found the literal forbidden token `get_image(` inside a source comment describing what the observer did not call. The proof never reached runtime.

Repair head:

`3b274fdd11c8b74798f8abb5a099641ecb520f39`

The repair changed only the guard-triggering comment wording and made receipt dictionary access explicitly typed. No source state, phase spacing, amplitude, scheduler, Weather policy, camera, geometry, material, fidelity threshold or acceptance boundary was weakened.

The failed draft remains in Git history/workflow provenance rather than being rewritten away.

## Exact real-Godot external-capture result

Workflow:

**`35186955392 — VFX Nature leaf flutter external capture current-world evidence` — SUCCESS**

Exact tested head:

`3b274fdd11c8b74798f8abb5a099641ecb520f39`

Pinned runtime/evidence path:

- Godot `4.7.2 stable`;
- GL Compatibility;
- X11/Xvfb proof host;
- lossless external FFV1 screen capture;
- exact accepted Nature source and receiver identities above;
- Weather fixed at exact source phase `00`;
- same two fixed cameras;
- no interpolation;
- no retiming;
- no in-process viewport image readback;
- no timed-window PNG encoding.

Retained artifact:

- artifact ID: `10481983456`;
- size: `64,145,677 B`;
- GitHub SHA-256: `c613493837350fb71c1f18f56600b18f63463bc74b345bc527dd575599f37dbd`;
- independently downloaded/rehashed SHA-256: **same value**.

The retained phase-bound full video SHA-256 is:

`dddb8f23d23edc57aed0daa4a3c31c25c4a98b27831dec87d321a61a3a4496aa`

### Runtime delivery

- scheduled slots: `96`;
- presented: `39`;
- skipped: `57`;
- delta versus clean `92/96`: `-53` presented states.

`path_eye`:

- presented `20/48`;
- mean post-draw `75.7328421052632 ms`;
- p50 `75.017 ms`;
- max `82.922 ms`;
- cadence ratio versus clean: `2.36196749733651x`;
- mean sapling apply duration only `2.244 ms`.

`elevated_oblique`:

- presented `19/48`;
- mean post-draw `82.342 ms`;
- p50 `82.573 ms`;
- max `89.746 ms`;
- cadence ratio versus clean: `2.43668797825147x`;
- mean sapling apply duration `2.17405263157895 ms`.

Both declared low-intrusion timing gates fail.

### External visual identity

The external FFV1 stream retained:

- `184` valid telemetry-decoded phase-bound video frames;
- `39/39` runtime-presented context/slot states observed externally;
- externally observed fraction of the instrumented runtime-presented states: **`1.0` / `100%`**.

This is useful: the external telemetry path can bind direct video imagery to exact source-state identity without in-process readback.

Representative direct video inspection confirms the expected current-world scene and subtle leaf-state changes remain visible; the reviewed frames did not show an obvious broad scene rewrite, detached crown mass or gross culling hole. That is bounded visual-integrity evidence only, not an aesthetic or temporal-naturalness acceptance claim.

## Key result — external recorder is still too intrusive on this proof host

The external path solved one problem but failed the more important timing-fidelity gate:

- clean no-capture: `92/96`, mean `32.063 / 33.793 ms`;
- synchronous viewport capture: `58/96`, mean `46.695 / 61.645 ms`;
- external X11 + FFV1 capture: `39/96`, mean `75.733 / 82.342 ms`.

Therefore the exact scoped result is:

**`PASS_EXTERNAL_PHASE-BOUND_VISUAL_IDENTITY`**

and simultaneously:

**`HOLD_EXTERNAL_X11_CAPTURE_PERTURBS_CLEAN_REFERENCE`**

The workflow-level retained state is:

**`HOLD_EXTERNAL_X11_CAPTURE_NOT_COMPARABLE_OR_VISUALLY_INCOMPLETE`**.

The external video is valid direct visual evidence of the **instrumented X11 capture stream**. It is not a timing-faithful proxy for the clean `92/96` stream and does not unblock final perceptual smoothness/naturalness.

No source amplitude, `31.25 ms` spacing, phase count, interpolation, retiming, Weather semantics, geometry, material, current-world composition, camera, gameplay or physics behavior was changed to satisfy the recorder.

## Handoffs

- **Map VFX PR #35:** exact result recorded in comment `5709549791`.
- **Nature VFX PR #11:** source remains unchanged; this result does not justify a source retune.
- **Art Direction / Visual QA:** external frames now have direct exact-slot identity, but perceptual timing of the clean reference remains blocked because the external observation stream materially alters delivery.
- **Runtime / Optimization:** target-device timing/cost remains unproven. The proof-host external-capture slowdown is instrumentation evidence, not target performance.
- **Environment:** composition ownership remains unchanged; no receiver/world/camera adoption change was requested.
- **Geometry / Materials:** unchanged; no topology, sidedness or lookdev authority taken.
- **Gameplay / Physics:** unchanged; visual presentation evidence does not establish forces, collision, damage, biomechanics or simulation behavior.

If this exact Nature timing lane is revisited, the highest-value next observation step is **not another effect retune**. First isolate the source of observation overhead with a display/composition-only baseline (same visible surface and telemetry, no recorder) versus the clean offscreen reference. Only if that remains comparable should a lower-load external recorder be tried. This separates X11/display composition cost from encoder/grabber cost before changing any accepted visual source.

## Earlier VFX evidence retained

No prior evidence is overwritten. Important checkpoints remain:

- migrated response source rebind: workflow `35153768937`;
- five-state woody Godot culling proof: `35159265484`;
- dense 17-state direct-source Godot receiver: `35163387415`;
- dynamic explicit leaf-backface culling recovery: `35168195467`;
- leaf-local micro-flutter candidate: `35172007804`, head `ecade64227ba1d3d1faf029ca7188ea63c2560ec`, artifact `10477092023`;
- sampled review: `35175510387` SUCCESS;
- accepted current-world receiving proof: `35174899697` SUCCESS, head `7713cbe5863c3bc38dabb6236eb4b393401224b6`;
- clean wall-clock reference: `35179504496`, head `795d9e8862e895e506c756b9ea01cd6228fa7ab7`, artifact `10479554477`;
- synchronous direct timed visual capture: `35182919389`, head `b56349f4e5a5335b73f39ec32af28dd81f0f6b24`, artifact `10481510245`;
- external X11 phase-bound capture: `35186955392`, head `3b274fdd11c8b74798f8abb5a099641ecb520f39`, artifact `10481983456`.

Historical Map Weather temporal experiments remain separate and are not promoted by this Nature result.

The previous fully detailed status is preserved in Git history; this update carries forward its exact source/receiver identities, clean/direct-capture evidence and all still-active truth boundaries while adding the external-capture result.

## Explicit non-claims

This activation does **not** establish:

- final perceptual naturalness or smoothness;
- that the external-capture drop pattern equals the clean no-capture drop pattern;
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

**Truth:** visual identity and timing fidelity remain separate. The external stream's exact-slot identity is a PASS; its `39/96` timing fidelity is a HOLD. Neither is relabelled to force a prettier conclusion.

**Agency / non-domination:** VFX owns only this bounded observation implementation/evidence. Nature owns source effect, Environment owns composition, Art/QA own perceptual preference, Runtime owns target-device timing/cost, Geometry and Materials retain their domains.

**Continuity:** exact source head, accepted receiver head, clean timing head, synchronous-capture head, external-capture head, workflow IDs, artifact IDs, video/artifact hashes and the initial failed external workflow remain separately pinned and rollbackable.

**Wisdom before speed:** two different observation mechanisms now demonstrably perturb delivery. Do not alter a visually accepted source to satisfy the measurement tool. Isolate observation overhead before attempting another capture path.

The four AXM roots remain the merge gate.
