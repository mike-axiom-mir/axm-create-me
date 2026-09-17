# 09 — VFX / Atmosphere Specialist Status

Date: 2026-09-17
State: **ACTIVE / HOLD_VISIBLE_X11_DISPLAY_TELEMETRY_BASELINE_PERTURBS_CLEAN_REFERENCE / PASS_EXTERNAL_PHASE-BOUND_IDENTITY_RETAINED / FINAL NATURALNESS + TARGET-DEVICE TIMING/PERF HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md` and `studio/specialists/09_vfx_atmosphere.md`, then rescanned the design constellation, current open PRs and the newest Art Direction / Visual QA / Runtime boundaries before choosing one bounded lane.

The highest-leverage non-duplicated VFX gap was the one explicitly left by the preceding external-capture result: determine whether the large timing slowdown comes from the visible X11/display-composition observation path itself or mainly from the external recorder.

This activation therefore **did not retune the accepted Nature leaf effect and did not add another recorder**. It stayed inside Map VFX PR #35 and added a visible X11 + telemetry baseline using the existing external observer with **no recorder/grabber/encoder process**. No viewport readback or timed PNG encoding is used.

`axm-create-me` remains **coordination only**. Product implementation and proof-host evidence remain in `mike-axiom-mir/axm-map-design` / `mike-axiom-mir/axm-nature-design`.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh constellation / duplication scan

- **Weapon / Armor / Unit / Misc:** no current VFX/effect lane requiring overlap.
- **Character:** active work remains shoulder Geometry/Rigging/intersection search; VFX did not enter it.
- **Animal:** current active lanes remain UV/tangent, Rigging transport, Materials diagnostic and Runtime representation work; VFX did not duplicate them.
- **Building:** current Art / Technical-Art / Runtime work is planar-role representation and cost, not VFX.
- **Nature:** VFX PR #11 remains source-effect owner for migrated sapling wind + leaf-local flutter. No source retune was requested.
- **Weather:** source/procedural Weather ownership remains separate; historical temporal experiments were not reopened.
- **Map:** Environment PR #24 remains composition owner. VFX PR #35 remains the current timing/observation lane.
- **Object:** source/material/procedural work remains separate.
- **Art Direction / Visual QA:** both still hold final Nature timing/naturalness rather than requesting a spatial source change.
- **Runtime / Optimization:** current lane is Building cost characterization; target-device timing/performance ownership remains Runtime-owned.

The no-recorder visible-display isolation therefore remained the smallest useful successor to the previous X11+FFV1 HOLD.

## Exact source and receiver retained

Nature source effect remains unchanged:

- repository: `mike-axiom-mir/axm-nature-design`;
- VFX PR #11;
- accepted source-effect head: `ecade64227ba1d3d1faf029ca7188ea63c2560ec`;
- 25 leaf blades;
- deterministic leaf-local twist, maximum `5°`;
- maximum added leaf-side displacement `0.006920423273762265 m`;
- added non-leaf displacement `0.0 m`;
- 17 endpoint-inclusive source states;
- repeating direct source phases `00..15`;
- phase `16` exact neutral endpoint witness equal to phase `00`;
- source spacing `31.25 ms`, cycle `0.50 s`.

Accepted current-world receiver remains unchanged:

- repository: `mike-axiom-mir/axm-map-design`;
- Environment PR #24 exact accepted receiver evidence head: `7713cbe5863c3bc38dabb6236eb4b393401224b6`;
- Weather fixed at exact source phase `00` for this timing lane;
- cameras: `path_eye`, `elevated_oblique`;
- exact source-front Nature representation retained;
- no geometry/material/camera/world-composition retune in this activation.

Map VFX PR #35 remains **OPEN / DRAFT / UNMERGED / MERGEABLE** at exact head:

`6dc67e5ec21f0766c6b44ef8f53963ff4bebdf99`

The Environment branch has continued to advance independently. This VFX proof deliberately keeps its already-accepted receiver evidence pinned rather than silently promoting later unrelated Environment state.

## Existing timing/capture evidence retained

### Clean no-capture reference

- exact head: `795d9e8862e895e506c756b9ea01cd6228fa7ab7`;
- workflow: `35179504496` — **SUCCESS**;
- presentation: `PHASE_LOCKED_LATEST_DUE_DIRECT_SOURCE_STATE_NO_RETIME`;
- scheduled: `96`;
- presented: `92`;
- `path_eye`: `47/48`, mean post-draw `32.0634565 ms`;
- `elevated_oblique`: `45/48`, mean post-draw `33.7925909 ms`.

This remains the authoritative clean proof-host timing reference.

### Synchronous direct post-draw capture

- exact head: `b56349f4e5a5335b73f39ec32af28dd81f0f6b24`;
- workflow: `35182919389` — **SUCCESS**;
- artifact: `10481510245`;
- presented/captured: `58/96`;
- mean post-draw: `46.69475 / 61.6454167 ms`;
- result: `PASS_DIRECT_POST_DRAW_TIMED_FRAME_IDENTITY` + `HOLD_SYNCHRONOUS_CAPTURE_PERTURBS_REFERENCE_DELIVERY`.

The retained PNGs are valid evidence of that instrumented stream, not a timing-faithful proxy for the clean stream.

### External X11 + FFV1 phase-bound capture

- exact head: `3b274fdd11c8b74798f8abb5a099641ecb520f39`;
- workflow: `35186955392` — **SUCCESS**;
- artifact: `10481983456`;
- artifact SHA-256: `c613493837350fb71c1f18f56600b18f63463bc74b345bc527dd575599f37dbd`;
- runtime-presented states: `39/96`;
- external phase-bound identity: `39/39` runtime-presented context/slot states observed in the lossless video;
- `path_eye`: `20/48`, mean `75.7328421052632 ms`;
- `elevated_oblique`: `19/48`, mean `82.342 ms`.

Retained result:

**`PASS_EXTERNAL_PHASE-BOUND_VISUAL_IDENTITY`** + **`HOLD_EXTERNAL_X11_CAPTURE_PERTURBS_CLEAN_REFERENCE`**.

This proves the telemetry mechanism can bind external imagery to exact presented source states, but that X11+FFV1 stream is not timing-faithful to the clean reference.

## New bounded improvement — visible X11/display baseline with no recorder

Added on Map PR #35:

- `.github/workflows/vfx-nature-leaf-flutter-display-baseline-current-world.yml`;
- `docs/VFX_NATURE_LEAF_FLUTTER_DISPLAY_BASELINE_CURRENT_WORLD_001.md`.

The workflow reuses the exact existing visible X11/telemetry observer surface but deliberately starts **no `ffmpeg`, x11grab, video encoder or other recorder**. It also forbids in-process viewport readback and timed PNG encoding.

Observation class:

`VISIBLE_X11_SURFACE_PLUS_TELEMETRY_NO_RECORDER`

Declared comparability gate versus the clean reference:

- at least `90/96` source slots presented;
- mean post-draw cadence in each camera no worse than `1.10x` clean.

A HOLD is explicitly valid evidence. No source retiming or visual rewrite is allowed to make the observer pass.

## Exact real-Godot no-recorder result

Workflow:

**`35190631453 — VFX Nature leaf flutter visible-display baseline current-world evidence` — SUCCESS**

Exact tested head:

`6dc67e5ec21f0766c6b44ef8f53963ff4bebdf99`

Workflow success means the exact contract, source/receiver bindings, runtime observation and fail-closed verifier all executed correctly. The measured scoped result is a HOLD:

**`HOLD_VISIBLE_X11_DISPLAY_TELEMETRY_BASELINE_PERTURBS_CLEAN_REFERENCE`**

Retained artifact:

- ID: `10483963329`;
- size: `16,739 B`;
- GitHub SHA-256: `b10f4f491a2921e84a9e2d269243fa80090e18c7f0ba4ab0c21df90cabb14a1f`;
- independently downloaded/rehashed SHA-256: **same value**.

Exact delivery:

- scheduled: `96`;
- presented: `57`;
- skipped: `39`;
- clean reference: `92/96`.

`path_eye`:

- presented `31/48`;
- skipped `17`;
- mean post-draw `49.5784333333333 ms`;
- cadence ratio vs clean `1.5462597843539825x`;
- mean sapling apply duration `1.87129032258065 ms`.

`elevated_oblique`:

- presented `26/48`;
- skipped `22`;
- mean post-draw `59.92956 ms`;
- cadence ratio vs clean `1.7734526534927513x`;
- mean sapling apply duration `2.09288461538462 ms`.

Both declared comparability gates fail before any external recorder exists.

## Key diagnosis

The timing problem is now more localized:

| Observation path | Presented source slots | Mean post-draw path/elevated |
| --- | ---: | --- |
| Clean no-capture | `92/96` | `32.063 / 33.793 ms` |
| Synchronous direct capture | `58/96` | `46.695 / 61.645 ms` |
| Visible X11 + telemetry, **no recorder** | `57/96` | `49.578 / 59.930 ms` |
| Visible X11 + external FFV1 recorder | `39/96` | `75.733 / 82.342 ms` |

Therefore a large part of the external-capture slowdown exists **before** the recorder/grabber/encoder is started: exposing this proof through the visible X11/display-composition + telemetry architecture itself is already materially non-comparable to the clean reference on this proof host.

The external recorder still adds further disturbance (`57/96 -> 39/96`), but simply changing codecs/recorders cannot make the existing visible X11 architecture timing-faithful while its no-recorder baseline already fails `>=90/96` and `<=1.10x`.

This does **not** prove a universal Godot/X11 performance rule. It is an exact proof-host observation for this exact scene, observer and host.

## Decision / handoffs

- **Map VFX PR #35:** exact result recorded in comment `5710136655`.
- **Nature VFX PR #11:** no source retune requested. Spatial source response remains unchanged.
- **Art Direction / Visual QA:** final timing/naturalness remains held. The clean timing stream still lacks a timing-faithful direct visual observer.
- **Runtime / Optimization:** target-device timing/performance remains unproven. These are proof-host instrumentation comparisons, not target performance.
- **Environment:** no composition, camera or receiving-state adoption change requested.
- **Weather:** fixed source phase remains only an isolation device for this timing proof; no Weather semantics changed.
- **Geometry / Materials:** unchanged.
- **Gameplay / Physics:** unchanged; this evidence says nothing about force, collision, damage, biomechanics or simulation authority.

If this timing lane continues, do **not** spend the next pass merely trying a different X11 recorder. A useful successor must avoid or materially change the visible X11/composition observation architecture itself while keeping the clean direct-source reference and accepted effect untouched. If such a low-intrusion visual observation path is not available, hold perceptual timing rather than retime the source to satisfy the measuring tool.

## Earlier VFX evidence retained

No earlier result is overwritten. Important checkpoints remain:

- migrated response source rebind: workflow `35153768937`;
- five-state woody Godot culling proof: `35159265484`;
- dense 17-state direct-source Godot receiver: `35163387415`;
- dynamic explicit leaf-backface culling recovery: `35168195467`;
- leaf-local micro-flutter candidate: `35172007804`, head `ecade64227ba1d3d1faf029ca7188ea63c2560ec`, artifact `10477092023`;
- sampled review: `35175510387`;
- accepted current-world receiver: `35174899697`, head `7713cbe5863c3bc38dabb6236eb4b393401224b6`;
- clean wall-clock reference: `35179504496`, head `795d9e8862e895e506c756b9ea01cd6228fa7ab7`;
- synchronous direct timed capture: `35182919389`, head `b56349f4e5a5335b73f39ec32af28dd81f0f6b24`;
- external X11 phase-bound capture: `35186955392`, head `3b274fdd11c8b74798f8abb5a099641ecb520f39`;
- no-recorder visible X11/display baseline: `35190631453`, head `6dc67e5ec21f0766c6b44ef8f53963ff4bebdf99`, artifact `10483963329`.

Historical Map Weather temporal experiments remain separate and are not promoted by this Nature result.

The previous fully detailed status is preserved in Git history; this revision compresses the historical branch while carrying forward exact identities, key measurements and all active truth boundaries.

## Explicit non-claims

This activation does **not** establish:

- final perceptual naturalness, smoothness or Art preference;
- timing-faithful direct visual evidence for the clean `92/96` stream;
- display scanout or monitor timing;
- a universal X11 or Godot performance conclusion;
- target-device FPS, CPU, GPU, VRAM, heap, thermal or battery behavior;
- physical wind, biomechanics or simulation correctness;
- gameplay, collision or damage behavior;
- a need to retime, interpolate or amplify the accepted leaf source;
- CANON;
- production/game readiness;
- VFX / Atmosphere mastery.

## Four-root check

- **Truth:** workflow success is separated from the measured HOLD; clean, synchronous, visible-display and external-recorder streams remain distinct rather than being collapsed into one timing story.
- **Agency / non-domination:** VFX does not retime the source to satisfy instrumentation and does not take Art, Runtime, Environment, gameplay or physics authority.
- **Continuity:** exact Nature source, accepted receiver, clean reference and every failed/held observation path remain pinned and rollbackable; historical evidence stays in Git history.
- **Wisdom before speed:** the next recorder experiment is deliberately rejected until the larger visible-display observation cost is addressed; unresolved perceptual timing stays held rather than being guessed.

The four AXM roots remain the merge gate.
