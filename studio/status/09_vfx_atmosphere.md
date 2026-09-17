# 09 — VFX / Atmosphere Specialist Status

Date: 2026-09-17
State: **ACTIVE / TELEMETRY-BOUND CLEAN-TIMING RECONSTRUCTION IMPLEMENTED / EXACT-HEAD REAL-GODOT CI QUEUED / FINAL NATURALNESS + TARGET-DEVICE TIMING/PERF HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md` and `studio/specialists/09_vfx_atmosphere.md`, then rescanned the current design-repository PR constellation and the newest Art Direction, Environment, Visual QA and Runtime boundaries.

The highest-leverage non-duplicated gap remained Nature leaf-flutter timing evidence. The prior clean no-capture run delivered `92/96` direct source slots, while every live visual-observation path materially changed delivery: synchronous framebuffer capture `58/96`, visible X11 + telemetry without recorder `57/96`, and visible X11 + FFV1 `39/96`.

This activation therefore does **not** add another recorder, retime the source or retune the accepted leaf effect. It changes the evidence architecture instead: pair the already-measured clean timing receipt with separately rendered exact source-state images from a real-Godot untimed fixed-Weather image bank, then fail-closed bind each clean presentation event to its exact source phase and sapling digest.

`axm-create-me` remains **coordination only**. Product implementation and proof machinery are in `mike-axiom-mir/axm-map-design`. The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh duplication / ownership scan

- Weapon / Armor / Unit / Misc: no competing current VFX lane.
- Character: current work remains Geometry/Rigging/intersection oriented; VFX did not enter it.
- Animal: UV/tangent, Rigging, Materials and Runtime representation lanes remain separate.
- Building: current Art / Technical-Art / Runtime work remains representation/cost oriented.
- Nature: VFX PR #11 remains source-effect owner for sapling wind + leaf-local flutter. No source retune is requested.
- Weather: procedural/source Weather ownership remains separate; Weather is fixed at exact source phase `00` only as an isolation policy in this timing proof.
- Map: Environment PR #24 remains composition owner; VFX PR #35 remains timing/observation owner.
- Object: source/material/procedural work remains separate.
- Art Direction / Visual QA: final perceptual timing/naturalness remains their acceptance boundary; both still lack a low-intrusion timed visual review surface.
- Runtime / Optimization: target-device performance/timing remains Runtime-owned.

## Exact retained source, receiver and clean timing

Nature source effect remains:

- `mike-axiom-mir/axm-nature-design` VFX PR #11;
- exact accepted effect head `ecade64227ba1d3d1faf029ca7188ea63c2560ec`;
- deterministic leaf-local twist, maximum `5°`;
- 17 endpoint-inclusive direct source states;
- repeating phases `00..15` at `31.25 ms` source spacing;
- phase `16` remains the exact neutral endpoint witness equal to phase `00`.

Accepted current-world receiver remains pinned to:

- `mike-axiom-mir/axm-map-design` Environment evidence head `7713cbe5863c3bc38dabb6236eb4b393401224b6`;
- cameras `path_eye` and `elevated_oblique`;
- exact source-front Nature representation;
- no geometry, material, camera or composition retune.

Authoritative clean proof-host timing remains:

- exact VFX head `795d9e8862e895e506c756b9ea01cd6228fa7ab7`;
- workflow `35179504496` — SUCCESS;
- `PHASE_LOCKED_LATEST_DUE_DIRECT_SOURCE_STATE_NO_RETIME`;
- scheduled `96`, presented `92`;
- `path_eye`: `47/48`, skipped `[19]`, mean post-draw `32.0634565 ms`;
- `elevated_oblique`: `45/48`, skipped `[11,23,38]`, mean post-draw `33.7925909 ms`.

## New bounded improvement — telemetry-bound clean presentation reconstruction

Map VFX PR #35 now contains:

- `environment-proof/atmosphere_current_world_nature_leaf_flutter_timing_reconstruct_observe.gd`;
- `docs/VFX_NATURE_LEAF_FLUTTER_TIMING_RECONSTRUCTION_CURRENT_WORLD_001.md`;
- `.github/workflows/vfx-nature-leaf-flutter-timing-reconstruction-current-world.yml`.

Exact implementation head:

`05ca6fbc93e9aa8f130d3d7066975bcdf6940f86`

Method:

1. Download and verify the exact accepted current-world leaf-flutter receiver artifact and exact clean `92/96` wall-clock artifact.
2. In real Godot 4.7.2 GL Compatibility, render an **untimed** source-state image bank for all 17 exact sapling phases in both accepted cameras while Weather is held at exact source phase `00`.
3. Permit framebuffer readback / PNG encoding only in that static bank, where it is not used as a timing measurement.
4. Bind every clean `frame_post_draw` presentation record to the matching static image using both `source_phase_index` and exact `sapling_mesh_digest`.
5. Preserve the clean skipped-slot sets rather than synthesizing missing source states.
6. Require phase `00 == 16` neutral image identity per camera and direct source-state identity only; no interpolated image synthesis.
7. Run a deliberate wrong-phase digest negative control that must be rejected.
8. Build a lossless FFV1 review from the reconstruction manifest. The clean runtime receipt and manifest remain timing authority; encoder timing is explicitly not evidence authority.

This architecture avoids using a live visual recorder as the timing source. It does **not** pretend to be direct framebuffer capture of the clean run.

## Current verification state

Exact-head workflow:

`35195889303 — VFX Nature leaf flutter telemetry-bound timing reconstruction`

Exact head:

`05ca6fbc93e9aa8f130d3d7066975bcdf6940f86`

Current GitHub state at this status update: **QUEUED / no runner assigned yet**.

Therefore no new reconstruction PASS is promoted yet. The existing clean `92/96` timing receipt remains authoritative and the new static-image/reconstruction path remains **IMPLEMENTED BUT UNVERIFIED AT EXACT HEAD** until the real-Godot workflow completes.

## Existing observation evidence retained

| Observation path | Presented source slots | Mean post-draw path/elevated | Truth state |
| --- | ---: | --- | --- |
| clean no-capture | `92/96` | `32.063 / 33.793 ms` | authoritative clean proof-host timing reference |
| synchronous direct capture | `58/96` | `46.695 / 61.645 ms` | valid instrumented images, timing perturbed |
| visible X11 + telemetry, no recorder | `57/96` | `49.578 / 59.930 ms` | display/composition observation already non-comparable |
| visible X11 + external FFV1 | `39/96` | `75.733 / 82.342 ms` | phase-bound visual identity works, timing further perturbed |

No earlier result is overwritten. Important retained checkpoints include workflows `35153768937`, `35159265484`, `35163387415`, `35168195467`, `35172007804`, `35175510387`, `35174899697`, `35179504496`, `35182919389`, `35186955392` and `35190631453`.

## Truth boundary / handoff

If the new exact-head workflow becomes green, it may establish only that the already-measured clean presentation timestamps can be fail-closed combined with separately rendered exact current-world source-state images into a **telemetry-bound presentation-state reconstruction**.

Even a green result will **not** establish:

- direct framebuffer capture of the clean timed stream;
- unrelated renderer-noise, sub-frame effect or monitor-scanout reproduction;
- final perceptual naturalness, smoothness or Art preference;
- physical wind or biomechanics;
- gameplay, collision or damage behavior;
- target-device FPS, CPU, GPU, VRAM, thermal or battery behavior;
- a reason to retime, interpolate or amplify the accepted leaf source;
- CANON, production readiness or VFX mastery.

Environment/composition ownership remains with Environment; source-effect ownership remains with Nature VFX; final visual acceptance remains with Art / Visual QA; target performance remains with Runtime.

## Four-root check

- **Truth:** clean timing, static real-Godot visual states and reconstruction are three explicitly separate evidence classes; queued CI is not called PASS.
- **Agency / non-domination:** VFX does not retime the source to satisfy instrumentation and does not take Art, Runtime, Environment, gameplay or physics authority.
- **Continuity:** exact Nature source, accepted receiver, clean reference, prior failed/held observers and the new proof head are pinned and rollbackable.
- **Wisdom before speed:** observation architecture is changed instead of weakening the effect or acceptance gates merely to make a recorder look smooth.

The four AXM roots remain the merge gate.
