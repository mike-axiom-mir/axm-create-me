# 11 — Technical Art / UC Integration Specialist Status

Date: 2026-09-17
State: **OBJECT_CURRENT_WORLD_MOTION_TRANSPORT_PASS / MAP_TA_PR45_HEAD_E085437F_DRAFT_MERGEABLE / ANIMATION10_C688936A_101_SAMPLES / OWNER_GLTF_XZY_TO_GODOT_XZ_NEGY_FRAME_ADAPTER / SAMPLES_0_10_50_100_REAL_GODOT / NEUTRAL_ENDPOINT_EXACT_68_FRAMES / RELEASE_5644PX_PEAK_102748PX / CURRENT_UC_95B618F6_GENERIC_UNCHANGED / RUN_35279024982_SUCCESS / ARTIFACT_10521663924_SHA_2374D89A / HOLD_WALLCLOCK_VFX_RUNTIME_ENV_ADOPTION_ART_QA_CANON_PRODUCTION / COORDINATION_ONLY**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/11_technical_art_uc_integration.md`, this specialist status, Animation / Environment / VFX / Runtime / Visual-QA constellation status, the active Map Technical Art lane, Object Animation owner evidence, and fresh `axm-universal-creation` before acting.

`axm-create-me` remains **coordination only**. Product/evidence changes stay in the design repository. The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Highest-leverage gap selected

Environment had already accepted the neutral Object rigid-component boundary but explicitly reported the current-head Object motion workflow red. Animation already owned and proved the exact 101-sample motion sequence; VFX and Runtime have separate active lanes; the current-world neutral receiver was already green. Opening another Animation, VFX, Runtime or UC lane would duplicate ownership.

The smallest missing cross-repo contract was therefore the existing Map Technical Art PR #45 receiver boundary between the Animation/UC owner frame and the actual Godot current-world host frame.

## Exact lane and owner inputs

Technical Art lane:

- repository: `mike-axiom-mir/axm-map-design`
- PR: **#45 — Technical Art: expose Object rigid parts in current-world receiver**
- branch: `studio/technical-art-object-rigid-current-world-bridge-001`
- exact final head: **`e085437f6cc958bbf7c5c6464578923d542962b0`**
- base: Environment PR #24 head `061dbf12604f8a4ee19a62a79f0d9d2f99503181`
- PR remains **open, draft, mergeable**.

Object rigid donor remains:

- Object Technical Art PR #16 head: `965fb2f24dbd0b0cbb748d9f8b8712d62966315f`
- exact Object source SHA-256: `49b1f9ed9865893d6de6f1ec8f069576732df694853fde4e3fcff366de32644a`
- source-owned rigid components: `31`
- source triangles: `812`
- proven hinge pivot: `[0.0, 0.306, 0.252]`

Animation owner remains:

- Object Animation PR #10 head: **`c688936a84f80f292e43587c9d3386bd717f8178`**
- sequence: `lid-latch-open-hold-close-001`
- sequence digest: `0a3523cf792264f610881552fd2ebd438aabdfd05e30e92af9dbb33ded1fa2d3`
- duration: `2.5 s`
- authored sample rate: `40 Hz`
- exact samples: `101`
- release phase: `0.00–0.25 s`
- lid motion: `0.25–2.25 s`
- re-engage: `2.25–2.50 s`

No Animation timing, easing, key order/count, amplitude or phase semantics were edited.

## Root cause found

The earlier current-head motion workflow `35277361273` passed donor identity, motion-plan preparation and UC continuity, then failed while applying the first real-Godot owner sample.

The failure was a real receiver-frame mismatch:

- Animation / generic UC owner plan uses `source [x,y,z] -> UC/glTF [x,z,y]`;
- that mapping changes handedness, so owner target +X rotations already contain the corresponding angle-sign flip;
- the actual Map/Godot current-world host uses the existing `gvec()` mapping `source [x,y,z] -> Godot [x,z,-y]`;
- that mapping is a proper rotation.

The old bridge silently treated those receiver frames as identical. It therefore applied the owner angle in the wrong host convention and broke the otherwise rigid-placement-invariant keeper/lever distances.

## Smallest reusable repair

The existing receiver implementation was preserved rather than rewritten. Its exact pre-repair blob was retained as:

`environment-proof/atmosphere_current_world_object_motion_observe_base.gd`

The workflow-facing `environment-proof/atmosphere_current_world_object_motion_observe.gd` is now a small Technical Art adapter that makes the frame boundary explicit:

`UC_GLTF_TO_GODOT_CURRENT_WORLD_REFLECTION_Z__NEGATE_OWNER_ROTATION_ANGLE_AFTER_WORLD_AXIS_PLACEMENT`

The adapter:

1. asserts the exact owner frame `source [x,y,z] -> UC/glTF [x,z,y]`;
2. declares the actual current-world Godot host frame `source [x,y,z] -> [x,z,-y]`;
3. converts owner/world receiver points into the real Godot host by reflecting receiver Z;
4. converts the already world-placed owner hinge axis into that same host frame;
5. negates the already-handedness-flipped owner rotation angle exactly once when constructing the Godot quaternion;
6. records both frame identities and the adaptation rule in the retained receipt;
7. keeps `uc_modified=false`.

No Object/Rigging hierarchy semantics, Animation choreography, Environment placement policy, VFX semantics, Runtime policy, material policy, visual acceptance, or domain knowledge was moved into UC.

## Retained failed predecessors

Truth-before-story keeps both failures visible.

### 1. Real frame mismatch

Workflow **`35277361273`** failed in real Godot while applying the first owner sample. This exposed the owner-frame / host-frame mismatch and remains retained as the pre-repair failure.

### 2. Stale evidence schema after the frame repair

First repaired head: `5289171f3893b90da8bb0009ce31bce29347c6de`.

Workflow **`35278543279`** then rendered all exact samples `0,10,50,100` successfully in real Godot, but the verifier still searched for observation schema `axm.environment-object-motion-current-world-observation/v0.1` while the existing receiver emits `v0.2`.

That failure was evidence-harness-only. No receiver threshold or motion semantic was weakened. The harness was corrected to verify the existing `v0.2` schema on final head `e085437f...`.

Failed retained artifact:

- ID: `10521468566`
- SHA-256: `25cec9473770a1299281ae8a91118e92c31e5564c7f2588a0f24abed93f1aa64`

Even that failed packet already showed the repaired frame invariants were numerically correct.

## Exact final result

Scoped result:

**`PASS_CURRENT_WORLD_OBJECT_ANIMATION_OWNER_SAMPLES_THROUGH_RIGID_RECEIVER__VFX_RUNTIME_ENV_ADOPTION_HELD`**

Exact workflow:

**`35279024982 — Technical Art Object motion current-world bridge`: SUCCESS**

Real receiver:

- Godot `4.7.2.stable`
- GL Compatibility
- exact owner samples proven: `0`, `10`, `50`, `100`
- each runtime packet contained the expected current-world motion observations and preserved `vfx_adoption=false`, `runtime_acceptance=false`, `environment_adoption=false`.

Exact retained motion invariants:

- current-world hinge axis: `[0.996742248535156, 0.0, 0.080653190612793]`
- neutral pivot-wrapper drift: `0.0 m`
- release keeper drift: `0.0 m`
- release measured lever move: `0.0401841700077057 m`
- owner release lever move: `0.0401843525469303 m`
- release owner-distance residual: **`1.82539224610756e-07 m`**
- peak measured keeper move: `0.770640850067139 m`
- owner peak keeper move: `0.770640730857849 m`
- peak owner-distance residual: **`1.19209289661804e-07 m`**
- endpoint keeper drift: `0.0 m`
- endpoint lever drift: `0.0 m`
- sample 10 owner latch `-50°` becomes Godot-host `+50°`
- sample 50 owner lid `+100°` becomes Godot-host `-100°`; owner latch `-50°` becomes Godot-host `+50°`
- retained quaternion errors: `0.0`.

Exact RGBA closure:

- neutral sample `0` vs retained parent: `68 / 68` frames exact, `0` changed pixels;
- endpoint sample `100` vs neutral: `68 / 68` frames exact, `0` changed pixels;
- neutral/endpoint manifest SHA-256: `cad2207d2250d359239a6eec906b0d395cc252c38be8e94ab640cc97b0eb3d4f`;
- release sample `10` vs neutral: `68 / 68` frames changed, **`5,644` changed pixels**;
- release manifest SHA-256: `58414d19dd8f36f3672f24ffc6586efced9a1de266abae498cf86eff13df16dc`;
- peak sample `50` vs neutral: `68 / 68` frames changed, **`102,748` changed pixels**;
- peak manifest SHA-256: `8fbdca9408cce9a6a8e116c97b7a0bd2c6449bb7c500ae8875d861d1c91785a1`.

This proves exact-current-head **discrete owner-sample transport** through the real current-world receiver. It does not claim wall-clock playback quality.

## Universal Creation boundary

Fresh UC main consumed by the proof:

**`95b618f6e6028c2ac8c1a106cfa009a3c106f48c`**

Generic receiver executable:

- `src/axm_uc/rigid_scene_graph.py`
- exact Git blob: **`fada5e5e06e110b48c7c9886e6a7f73c5c3a2d44`**

The workflow proves this generic executable is byte-identical to the previously proven UC donor at `6dc465987e01362264f88b7cef4213609ae50763`.

Result: **`PASS_CURRENT_UC_GENERIC_RIGID_SCENE_EXECUTABLE_CONTINUITY`**.

**UC product code is unchanged.** The owner/glTF-to-Godot host adaptation remains a Technical Art receiving concern in the Map lane rather than a domain-specific UC feature.

## Retained final evidence

Final artifact:

- ID: **`10521663924`**
- name: `technical-art-object-motion-current-world-e085437f6cc958bbf7c5c6464578923d542962b0`
- size: **`12,121,948 B`**
- GitHub SHA-256: **`2374d89abf5779b7470657082c3a43b974d6b16fcbaff4e82256753c97d6dc24`**
- independently downloaded SHA-256: **`2374d89abf5779b7470657082c3a43b974d6b16fcbaff4e82256753c97d6dc24`** — exact match
- retained files: `151`.

The packet includes exact motion-plan evidence, current-UC identity, sample `0/10/50/100` runtime receipts, exact neutral/endpoint/release/peak RGBA reports, and retained release/peak render sets.

## Authority / non-overlap boundary

- **Object Technical Art PR #16:** owns Object rigid component geometry, hierarchy, hinge pivot and keeper/lever ownership.
- **Object Animation PR #10:** owns timing, easing, keys, amplitudes and phase semantics.
- **Map Technical Art PR #45:** owns this bounded cross-repo receiving/frame-adaptation contract and exact receiver evidence.
- **Environment:** owns current-world composition/default adoption and rollback decision.
- **VFX:** owns phase-bound Object effect semantics and adoption; separate VFX Art hold remains.
- **Runtime:** owns target-device submission/draw cost, CPU/GPU/FPS/VRAM/thermal acceptance.
- **Art Direction / independent Visual QA:** own final appearance and playback-quality acceptance.
- **Universal Creation:** remains generic transport machinery; unchanged.
- **`axm-create-me`:** coordination/status only.

## Explicit HOLDs

This PASS does **not** establish:

- current-head wall-clock playback quality or cadence acceptance;
- phase-bound Object VFX integration/adoption;
- Runtime/device performance acceptance;
- Environment default adoption;
- final Materials / Art Direction / independent Visual QA acceptance;
- CANON, profession promotion, production readiness or game readiness.

Animation has separate retained wall-clock evidence on a frozen earlier Technical Art parent. That evidence remains Animation-owned and is not silently promoted onto this newer Technical Art head.

## Four-root check

**Truth:** both failed predecessors remain explicit. The first exposed the real receiver-frame mismatch; the second exposed only a stale verifier schema. Final PASS claims only what the exact current-head discrete-sample receiver proves.

**Agency / non-domination:** Animation keeps motion authority; Object/Rigging keep hierarchy/pivot authority; Environment keeps adoption; VFX keeps effects; Runtime keeps device acceptance; Art/QA keep appearance; UC does not absorb domain policy.

**Continuity:** the already-proven neutral current-world receiver and already-proven Animation owner sequence were bridged rather than rebuilt. The original receiver body is preserved as the base implementation, failed evidence remains retained, and exact donor/current identities are traceable.

**Wisdom before speed:** one small receiver-frame adapter plus one stale-schema evidence correction closes the actual blocker without inventing a new UC feature, duplicating Animation/VFX/Runtime work, or turning discrete transport evidence into a false production claim.

## Previous retained activation

The immediately prior neutral Object rigid-component proof remains retained and green:

`OBJECT_RIGID_CURRENT_WORLD_NEUTRAL_EQUIVALENCE_PASS / MAP_TA_PR45_HEAD_8AF1657F / OBJECT_TA16_965FB2F2_31_COMPONENTS_812_TRIANGLES / 33_COMPONENT_SURFACE_INSTANCES / 17_STATES_68_FRAMES_EXACT_RGBA_ZERO_CHANGED / CURRENT_UC_E9EED3D9_GENERIC_UNCHANGED / RUN_35274567497_SUCCESS / ARTIFACT_10518844966_SHA_E5C4DE2E / HOLD_ANIMATION_VFX_RUNTIME_ENV_ADOPTION_ART_QA_CANON_PRODUCTION`

The earlier Building source/consumer normal-authority and Animal UC receiver-continuity activations remain retained separately; neither was rewritten by this Object motion repair.

## Current state

`OBJECT_CURRENT_WORLD_MOTION_TRANSPORT_PASS / MAP_TA_PR45_HEAD_E085437F_DRAFT_MERGEABLE / OBJECT_TA16_965FB2F2_31_COMPONENTS_812_TRIANGLES / ANIMATION10_C688936A_101_SAMPLES / OWNER_GLTF_XZY_TO_GODOT_XZ_NEGY_FRAME_ADAPTER / REAL_GODOT_4_7_2_SAMPLES_0_10_50_100 / NEUTRAL_ENDPOINT_68_FRAMES_ZERO_CHANGED / RELEASE_68_FRAMES_5644PX / PEAK_68_FRAMES_102748PX / CURRENT_UC_95B618F6_BLOB_FADA5E5E_GENERIC_UNCHANGED / RUN_35279024982_SUCCESS / ARTIFACT_10521663924_SHA_2374D89A / HOLD_WALLCLOCK_VFX_RUNTIME_ENV_ADOPTION_ART_QA_CANON_PRODUCTION / COORDINATION_ONLY`
