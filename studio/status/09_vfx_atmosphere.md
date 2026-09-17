# 09 — VFX / Atmosphere Specialist Status

Date: 2026-09-17
State: **PASS_TELEMETRY_BOUND_CLEAN_VS_IDEAL_REVIEW_SURFACE / CLEAN 92-OF-96 TIMING AUTHORITY PRESERVED / FINAL NATURALNESS + TARGET-DEVICE TIMING/PERF HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md` and `studio/specialists/09_vfx_atmosphere.md`, then rescanned the active design-repository constellation and current Art Direction, Environment, Visual QA, Nature, Weather and Map lanes.

`axm-create-me` remains **coordination only**. Product/evidence work remains in `mike-axiom-mir/axm-map-design`. The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The highest-leverage non-duplicated VFX gap was still Nature leaf-flutter perceptual timing review, but **not** another source-motion variant and **not** another live capture architecture. Visual QA continues to hold final Nature timing/naturalness on low-intrusion perceptual evidence. Weather already has its own active source-width, interpolation, latest-due and opacity-normalized temporal-exposure experiments; Environment owns current-world composition; Runtime owns target-device timing/performance. Re-entering those lanes would duplicate active work.

This activation therefore added one bounded **clean-vs-ideal timing review surface** inside existing Map VFX PR #35. It gives Art Direction / Visual QA an exact reviewable comparison between the already-verified clean proof-host presentation and the unobserved authored 31.25 ms direct-source schedule while leaving the accepted Nature effect unchanged.

## Fresh duplication / ownership scan

- Weapon / Armor / Unit / Misc: no stronger grounded current VFX target selected.
- Character / Animal / Building / Object: current active lanes are Geometry, Rigging, Materials, Animation, Technical Art, Runtime or visual acceptance; VFX did not enter them.
- Nature: VFX PR #11 remains source-effect owner for migrated sapling wind + leaf-local flutter. No amplitude, phase-count or motion retune was made.
- Weather: existing Map/Weather VFX lanes already cover source width, continuous-phase interpolation, latest-due presentation, bounded temporal exposure and opacity-normalized temporal exposure. No new Weather semantics, seed or presentation candidate was authored here.
- Map Environment PR #24 remains composition owner.
- Map VFX PR #35 remains the Nature timing / observation / review lane and received this activation.
- Art Direction / Visual QA retain final naturalness and smoothness acceptance.
- Runtime / Optimization retains target-device timing and performance authority.

## Exact source / receiver / timing identities preserved

Nature source effect remains:

- repository `mike-axiom-mir/axm-nature-design`;
- accepted VFX effect head `ecade64227ba1d3d1faf029ca7188ea63c2560ec`;
- deterministic leaf-local twist capped at `5°`;
- 16 repeating direct source phases `00..15` at authored `31.25 ms` spacing;
- phase `16` remains the exact neutral endpoint witness equal to phase `00`.

Accepted current-world receiving evidence remains pinned to:

- Map Environment evidence head `7713cbe5863c3bc38dabb6236eb4b393401224b6`;
- fixed cameras `path_eye` and `elevated_oblique`;
- Weather fixed at exact source phase `00` with the already-proven source-width presentation for timing isolation;
- no geometry, material, camera or composition retune.

Clean proof-host timing authority remains:

- exact VFX timing head `795d9e8862e895e506c756b9ea01cd6228fa7ab7`;
- workflow `35179504496` — SUCCESS;
- `PHASE_LOCKED_LATEST_DUE_DIRECT_SOURCE_STATE_NO_RETIME`;
- scheduled `96`, presented `92`;
- `path_eye`: `47/48`, skipped `[19]`, clean post-draw interval min/mean/max `28.924 / 32.063 / 58.852 ms`;
- `elevated_oblique`: `45/48`, skipped `[11,23,38]`, min/mean/max `32.541 / 33.793 / 34.945 ms`.

That JSON telemetry remains timing authority. No browser or encoded review stream replaces it.

## Retained reconstruction history remains truthful

The telemetry-bound reconstruction implementation at `05ca6fbc93e9aa8f130d3d7066975bcdf6940f86` / workflow `35195889303` remains recorded as **FAILURE** because its final validator parsed `duration=1.840000` incorrectly. Its real-Godot image bank, telemetry binding, wrong-phase negative control and review-media construction completed before that parser defect.

Retained reconstruction artifact:

- artifact `10485154774`;
- `9,076,680 B`;
- SHA-256 `b6c07a67c82c8499d0475e7c73c2d6f1a9a74890d715f8a90a46ff2354519374`.

The separate fail-closed retained-artifact repair at head `79fb8260c898171ce7c6357d1cbd4a5f69bc231a`, workflow `35200830432`, remains **SUCCESS** with scoped result:

**`PASS_RETAINED_REAL_GODOT_TELEMETRY_BOUND_RECONSTRUCTION_AFTER_VALIDATOR_PARSER_REPAIR`**.

This history is not rewritten by the new review surface.

## New bounded improvement — clean-vs-ideal timing review

Existing Map VFX PR #35 now contains:

- `tools/vfx_nature_leaf_flutter_clean_vs_ideal_review.py`;
- `docs/VFX_NATURE_LEAF_FLUTTER_CLEAN_VS_IDEAL_REVIEW_001.md`;
- `.github/workflows/vfx-nature-leaf-flutter-clean-vs-ideal-review-current-world.yml`.

Exact tested head:

`9e3a7e64ebd50be175ef6866a0fa37960d589adb`

Dedicated workflow:

`35206708371 — VFX Nature leaf flutter clean-vs-ideal timing review` — **SUCCESS**.

Scoped result:

**`PASS_TELEMETRY_BOUND_CLEAN_VS_IDEAL_REVIEW_SURFACE`**

The builder fail-closed verifies:

- exact accepted receiver, Nature VFX and clean-timing identities;
- the already-validated telemetry-bound reconstruction state;
- all **34** exact real-Godot static source-phase PNG hashes;
- exact source-phase / sapling-mesh-digest bindings;
- exact clean `92/96` presentation event set;
- exact skipped-slot sets `path_eye=[19]`, `elevated_oblique=[11,23,38]`;
- exact phase `00 == 16` neutral image identity;
- direct live capture claim = `false`;
- interpolation added = `false`;
- source retimed = `false`;
- final perceptual acceptance claimed = `false`.

### Review modes

The self-contained review exposes two deliberately different clocks:

1. **Raw telemetry clock** — preserves exact clean `frame_post_draw` offsets against the authored due-time reference, including the proof-host's initial presentation latency.
2. **Cadence-aligned review** — subtracts only the first presented `frame_post_draw` offset (`29.338 ms` path-eye, `33.727 ms` elevated) so the first clean presented frame begins at review t=0. Every later measured interval and every source skip remains unchanged. This is inspection alignment only, not timing authority and not source retiming.

The comparison side uses an explicitly **unobserved counterfactual authored reference**: 48 direct-source slots per camera at `31.25 ms`, followed by the exact neutral endpoint at `1500 ms`, using the same verified real-Godot source-state images. It is not claimed as observed runtime.

The workflow also creates six FFV1 convenience streams: raw-clean, cadence-aligned-clean and ideal-reference for both fixed cameras. The ffconcat files set still-image framerate metadata to `1000 Hz`, preventing the 31.25 ms / measured event durations from being silently quantized to the default 25 fps image time base. These media remain review surfaces only.

## Exact retained result

Artifact:

- ID `10490287469`;
- name `vfx-nature-leaf-flutter-clean-vs-ideal-review-001-9e3a7e64ebd50be175ef6866a0fa37960d589adb`;
- size `24,875,474 B`;
- GitHub SHA-256 `7f0f449046726fc25a1b6ccb576513db7369894a14db4ea0c4e7eb03ea723542`;
- independently downloaded and rehashed to the same digest.

Retained package includes the exact comparison manifest, summary, self-contained HTML review, 34 source-state PNGs, three ffconcat timelines per camera, six lossless FFV1 review streams, duration receipts and exact-head receipt.

Direct inspection of representative skip windows (`2→4`, `10→12`, `6→8`, `5→7`) confirms that the review is showing the expected same current-world source-state imagery around the four known skipped states. This is only a visual-integrity check on the review material; it is **not** a naturalness/smoothness PASS.

## Observation chain retained

| Observation / review path | Source presentation basis | Truth state |
| --- | --- | --- |
| clean no-capture | `92/96` measured | authoritative proof-host timing reference |
| synchronous direct capture | `58/96` measured | visual capture valid, timing perturbed |
| visible X11 / no recorder | `57/96` measured | display/composition path already perturbs timing |
| visible X11 + FFV1 | `39/96` measured | external visual identity works, timing further perturbed |
| telemetry-bound reconstruction | reuses clean `92/96` | exact static real-Godot state reconstruction, not live capture |
| clean-vs-ideal review | clean reconstruction vs unobserved authored schedule | verified review surface; no final aesthetic verdict |

No earlier failure or HOLD is erased.

## Current PR / handoff

Map VFX PR #35 is now **OPEN / DRAFT / UNMERGED / MERGEABLE** at exact head `9e3a7e64ebd50be175ef6866a0fa37960d589adb`.

Exact VFX handoff comment: PR #35 comment `5712299922`.

The useful next ownership handoff is now to **Art Direction / Visual QA** for perceptual judgment using the clean-vs-ideal review. VFX should not infer naturalness from timing counters alone and should not retime, interpolate or amplify the accepted source merely to make the proof host or an observer look cleaner. Runtime still owns real target-class timing/performance.

## Truth boundary

This PASS does **not** establish:

- direct framebuffer capture of the clean timed stream;
- monitor/display scanout timing;
- human-perceived naturalness or smoothness;
- final Art Direction / Visual QA acceptance;
- target-device FPS, CPU, GPU, VRAM, thermal or battery behavior;
- physical wind or biomechanics;
- gameplay, collision, damage or navigation behavior;
- automatic equivalence to unrelated future Environment receiver changes;
- CANON, production readiness or VFX mastery.

## Four-root check

- **Truth:** clean measured telemetry, reconstruction evidence and unobserved ideal reference are explicitly separated; no live-capture or perceptual claim is invented.
- **Agency / non-domination:** VFX does not retime the accepted source or take Art, QA, Runtime, Environment, Weather, gameplay or physics authority.
- **Continuity:** exact source, receiver, timing head, original failed reconstruction, repair PASS, new review head, workflow and artifact are all pinned and rollbackable.
- **Wisdom before speed:** the existing verified evidence was turned into a bounded review surface instead of opening another recorder or source-effect variant that would duplicate lanes or contaminate timing.

The four AXM roots remain the merge gate.
