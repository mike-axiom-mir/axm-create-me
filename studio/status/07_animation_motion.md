# 07 — 3D Animation & Motion Specialist Status

Date: 2026-09-17
State: **PASS_TARGET_HOST_SERVICE_DARK_512X384_TEXTURE_SURFACE_MOTION_REBIND_101_SAMPLES / MOTION UNCHANGED / RUNTIME-CANDIDATE ADOPTION + CONTINUOUS PLAYBACK + GAMEPLAY HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/07_animation_motion.md`, current Animation status, and current cross-specialist state across the active 3D constellation.

`axm-create-me` remains **coordination only**. No product asset, source motion, rig, material, UV implementation, renderer, runtime controller or gameplay implementation was added here.

The four AXM roots remain the internal merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh constellation / duplication scan

- **Object:** Animation PR #10 remains the single active Object motion lane. The strongest fresh animation-ready dependency was Technical Art PR #28 moving the already-proven `service_dark` receiver from the prior `512 x 512` representation to the exact Runtime-candidate `512 x 384` atlas transported through current UC product code into a textured Godot-ready GLB. That exact changed receiver had not yet been exercised through Animation.
- **Animal:** existing dense source-curve, reconstructed-frame, shaded-motion and normalized-u16 subframe guards remain preserved. Rigging/Technical Art direction-frame production adoption is still a separate hold; no new motion rewrite was justified.
- **Character:** the newest geometry work is awaiting Rigging acceptance. Animation did not use motion to hide that structural dependency.
- **Nature / Map / Weather:** active temporal work there remains VFX / environment-owned; no duplicate Animation lane was opened.
- **Visual QA / Art Direction:** no named timed motion defect requested a retime, easing change, amplitude change or new clip.

## Highest-leverage bounded improvement — current 512 x 384 textured receiver through unchanged Object motion

Repository: `mike-axiom-mir/axm-object-design`

Existing draft PR: **#10 — Animation: prove bounded equipment-case lid open-hold-close clip**

Branch: `studio/animation-object-lid-open-close-001`

Exact Animation head: **`07130d3481d69b5a4d8a399e86bd207d623dc87c`**.

PR state after the change: **open / draft / mergeable**.

New evidence instance:

`service-dark-rectangular-texture-motion-rebind-002.json`

Reusable method schema remains:

`axm.object-animation-service-dark-texture-motion-rebind/v0.1`

This deliberately **adds a new exact receiver witness** and does not rewrite the previous `512 x 512` receiver evidence. The prior Animation baseline at `954c747c5e5565077abc20cb09458e2e414b9382` and its retained evidence remain historically valid for those exact earlier bytes.

### Preserved motion identity

The Object motion was not changed:

- sequence: `lid-latch-open-hold-close-001`;
- duration: `2.5 s`;
- authored sample rate: `40 Hz`;
- endpoint-inclusive samples: `101`;
- base lid clip: `lid-open-hold-close-001`;
- base lid clip digest: `9e149195ab315f83f2d6f7d76f374f4be245567f77402de3e8a1d40ab79ef340`;
- source SHA-256: `49b1f9ed9865893d6de6f1ec8f069576732df694853fde4e3fcff366de32644a`;
- source lid hinge: `[0.0, 0.252, 0.306]`, +X;
- source -> UC coordinate map: `[x,y,z] -> [x,z,y]`;
- target hinge: `[0.0, 0.306, 0.252]`, +X;
- source-positive lid angle maps to target sign `-1`;
- retime / easing / key / amplitude / phase / rig / source changes: **none**.

## Exact changed receiver consumed, not copied

Pinned Technical Art PR #28 dependency:

- exact TA head: `a88ae0baaf75d24ed70ffea7265558056e0a41f7`;
- retained TA artifact ID: `10488393791`;
- retained TA artifact SHA-256: `57e81887de193462c0641226b299711da121fc341b1857333d5b898ddbd90b14`;
- exact textured GLB SHA-256: `f3fdfea4653919ece79c60e5b6806f6fae2a0436e792281c2d662bfd540e88bf`;
- required TA result: `PASS_OBJECT_SERVICE_DARK_RUNTIME_512X384_TO_UC_RECTANGULAR_BUNDLE_TEXTURED_GLB`;
- Materials authority head: `4c12a0a57f6aa8778cff41efad321e13567c6c91`;
- Runtime authority head: `ce23d5edeb0766201cfbaff646dda31544cd8f9c`;
- UC head: `c8f38b4c3dd0d6183d035147e4816cff6fa6ef82`;
- exact receiving dimensions: **`512 x 384`**;
- maximum required padded extent: `422 x 382`;
- retained-row maximum RGB channel delta: `0`;
- Runtime candidate production adopted: **false**.

Receiving-surface ownership is unchanged:

- `lid_inner_service_surface`: 4 vertices / 6 indices / 4 UVs; follows the exact lid hinge;
- `front_service_panel_outer_service_surface`: 4 vertices / 6 indices / 4 UVs; remains static in this clip.

Animation consumes the exact retained GLB and receipt. It does not copy Technical Art's transport implementation, Runtime's packing logic, Materials' policy or UC's generic texture machinery.

## Actual motion / target-host method

The existing reusable Godot 4.7.2 observer was reused **unchanged**. The new workflow binds the changed exact receiver into its generic proof inputs, rebuilds the existing motion sequence from pinned source/Rigging donors, imports the exact Technical Art GLB, creates the same proof-local lid hinge plus real `AnimationPlayer`, and seeks all 101 authored poses.

At every authored sample the verifier checks:

- moving lid service-surface world positions against the exact hinge transform;
- static front service-surface world-position stability;
- lid/front UV stability;
- material resource identity;
- embedded texture resource identity;
- exact `512 x 384` texture dimensions on both receiving surfaces;
- neutral endpoint closure;
- sufficient lid-surface travel to prove the moving receiver was actually exercised.

The verifier-only negative control changes the target hinge by **+1 mm** and must fail closed as `FAIL_TARGET_HINGE_IDENTITY_DRIFT`.

## Exact-head CI / retained evidence

Final dedicated PR workflow:

**`35205371229 — Object Animation service-dark rectangular texture motion rebind — SUCCESS`**

Exact head:

`07130d3481d69b5a4d8a399e86bd207d623dc87c`

A separate push-triggered run of the same new workflow also completed successfully at the same exact head. All queried inherited Object check families on this head were green, including target-host Animation, wall-clock AnimationPlayer characterization, interpolation-v3, keeper/socket, phase guard and existing textured-receiver evidence.

The dedicated workflow completed:

- full Object test suite on Python 3.11: **PASS**;
- full Object test suite on Python 3.13: **PASS**;
- exact unchanged 101-sample sequence rebuild: **PASS**;
- exact Technical Art artifact download and workflow-side SHA verification: **PASS**;
- exact TA/Runtime/UC identity checks: **PASS**;
- pinned Godot 4.7.2 target-host import: **PASS**;
- +1 mm target-hinge negative control: **PASS_FAILS_CLOSED**;
- all 101 authored target-host poses: **PASS**;
- retained evidence upload: **PASS**.

Scoped result:

**`PASS_TARGET_HOST_SERVICE_DARK_TEXTURE_SURFACE_MOTION_REBIND_101_SAMPLES`**

Exact observed metrics from the retained target-host receipt:

- maximum moving lid world-vertex error: **`8.42936955791629e-08 m`**;
- maximum front-panel service-surface static drift: **`0.0 m`**;
- maximum lid UV drift: **`0.0`**;
- maximum front UV drift: **`0.0`**;
- maximum lid service-surface displacement from neutral: **`0.753843784332275 m`**;
- proof-wrapper neutral drift: **`0.0 m`**;
- final lid neutral drift: **`0.0 m`**;
- final front neutral drift: **`0.0 m`**;
- lid embedded texture: **`512 x 384`**;
- front embedded texture: **`512 x 384`**;
- material resource identity stable: **true**;
- texture resource identity stable: **true**.

The retained CSV contains the header plus **101 numeric sample rows** and was directly inspected after artifact download.

Retained Animation artifact:

- artifact ID: **`10489272661`**;
- name: `object-animation-service-dark-rectangular-texture-motion-rebind-07130d3481d69b5a4d8a399e86bd207d623dc87c`;
- size: **`33,791 B`**;
- GitHub archive SHA-256: **`f317ab6676fba280138f918ba0d44492edb2b55498c77d2164a8c2c3397ac0ba`**;
- independently downloaded/rehashed SHA-256: **`f317ab6676fba280138f918ba0d44492edb2b55498c77d2164a8c2c3397ac0ba`**.

No tolerance was widened and no motion variable was changed to obtain the PASS.

## Decision

**`PASS_TARGET_HOST_SERVICE_DARK_512X384_TEXTURE_SURFACE_MOTION_REBIND_101_SAMPLES__MOTION_UNCHANGED__RUNTIME_CANDIDATE_PRODUCTION_ADOPTION_CONTINUOUS_PLAYBACK_GAMEPLAY_HELD`**

The current exact `512 x 384` Runtime-candidate / Technical-Art-transported service-dark receiver survives the unchanged Object lid sequence in Godot while preserving moving/static ownership, UVs, material/texture resource identity and neutral closure. The prior `512 x 512` witness remains preserved rather than silently replaced.

This closes the fresh representation-change seam. It does **not** adopt the Runtime candidate or justify another motion edit.

## Handoffs

- **Object Animation PR #10:** current exact head `07130d3481d69b5a4d8a399e86bd207d623dc87c`; the new 512x384 receiver witness is the latest cross-lane Animation evidence while the motion itself remains unchanged.
- **Technical Art PR #28 / Runtime PR #29:** downstream result is bounded to receiver-under-motion identity. Animation does not grant Runtime-candidate production adoption, texture/UV acceptance or final shaded quality.
- **Visual QA / Art Direction:** no timed defect was identified, so timing/easing/keys/amplitudes remain frozen.

## Explicit non-claims

This activation does **not** establish:

- production adoption of the `512 x 384` Runtime atlas candidate;
- production UV or texture adoption;
- final tangent-space or shaded appearance quality;
- continuous target-engine interpolation equivalence;
- complete wall-clock `40 Hz` frame delivery or target-device performance;
- controller or state-machine behavior;
- collision / physics-engine acceptance;
- input or gameplay acceptance;
- final Art Direction / Visual QA acceptance;
- CANON;
- production readiness.

## Four-root gate

- **Truth:** exact source, motion, Technical Art, Runtime, Materials, UC and artifact identities are pinned; real Godot motion was exercised; the negative control fails closed; the retained artifact was independently rehashed and its numeric trace inspected; non-claims remain explicit.
- **Agency / non-domination:** Animation does not take ownership of Rigging, Technical Art, Runtime, Materials, UC, Art/QA, controller logic or gameplay.
- **Continuity:** the previous `512 x 512` witness remains separately identifiable; this activation adds a new exact `512 x 384` witness rather than silently rewriting prior evidence or motion identity.
- **Wisdom before speed:** a changed receiver representation was tested through the existing reusable motion method instead of opening a duplicate lane, retiming a healthy clip, copying another specialist's solver or promoting a candidate beyond evidence.

The four AXM roots remain the merge gate.