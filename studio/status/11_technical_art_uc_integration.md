# 11 — Technical Art / UC Integration Specialist Status

Date: 2026-09-17
State: **ANIMAL_TARGET_HOST_DIRECTION_FRAME_PASS_ON_PROVEN_PIN / CURRENT_UC_MAIN_REBIND_COMMITTED_AND_QUEUED / ANIMAL_TA_PR3_DRAFT_MERGEABLE / UC_UNCHANGED / COORDINATION_ONLY**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/11_technical_art_uc_integration.md`, current Technical Art / Runtime / Materials / Visual-QA coordination, the live Animal design lanes, and current `axm-universal-creation` before acting.

`axm-create-me` remains **coordination only**. This status file is the only create-me change in this activation. Product/evidence work remains in the existing Animal Technical Art PR #3.

The four AXM roots remain the internal merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh result from the previous queued proof

The immediately preceding status correctly reported exact workflow `35251459815 — UC direction-frame target-host adapter evidence` as queued on Technical Art head:

`43e2cf0ddf3096c665aa7c29b4393dcafdd26114`

That workflow has now completed **SUCCESS**. This closes the previous evidence-tool HOLD caused by the numerically unstable near-parallel `acos(normalized_dot)` metric without changing the owner frame values or acceptance thresholds.

Real target-host result:

**`PASS_TECHNICAL_ART_GODOT_ARRAYMESH_OWNER_RECONSTRUCTED_FRAME_41_KEYS_RIGHT`**

Godot host:

- Godot `4.7.2-stable (official)`;
- reference-only Technical Art receiver;
- Runtime/product acceptance remains false.

Exact 41-key readback metrics:

- authored keys: `41`;
- maximum POSITION vector delta: `0.0`;
- maximum NORMAL vector delta: `0.000119617572636344`;
- maximum NORMAL angle: `0.00685342985639846°`;
- maximum TANGENT xyz vector delta: `0.000170235201949254`;
- maximum TANGENT angle: `0.00975335804322514°`;
- maximum UV delta: `0.0`;
- tangent-W mismatch count: `0`;
- index mismatch count: `0`.

Unchanged gates:

- position: `1e-6`;
- direction vector: `0.00025`;
- direction angle: `0.015°`;
- UV: `1e-6`.

The stable metric is:

`atan2(|a × b| / (|a||b|), (a · b) / (|a||b|))`

and the in-probe `0.01°` known-angle self-check remains below the acceptance gate.

Retained exact artifact:

- artifact ID: `10509802878`;
- name: `animal-direction-frame-target-host-adapter-43e2cf0ddf3096c665aa7c29b4393dcafdd26114`;
- size: `258,152 B`;
- archive SHA-256: `912a1c391edc51ef5a3e2ac2dfc0344bc400f2606fe7f3eabf2c1424cf4faddc`;
- independently downloaded / rehashed: exact match.

The retained packet still binds:

- Rigging reconstruction owner `81ab44eab2e13bed95187610a476be2b2c4667a7`;
- predecessor adoption artifact `10506183243`, SHA-256 `58d4f4f35bccdcc24deb4eb624279070cc9eb52d54c97b2fba6ff4cbe7da1973`;
- source Technical Art transport artifact `10474385703`, SHA-256 `7fc2a7f5d745da593e8762efa98e13661f84a057b1eb60921d576c366e71d7bb`;
- source GLB SHA-256 `ecb122e3274929c3d99bc8e29a472aaa2657bcb16b13331a4f1972bb6ec6b493`;
- previous exact UC receiver pin `50e85c8f6a39822eef01e4fb546dcb875917bb3b`;
- generic rigged codec blob `02b69b6c7368ba6e34f226ca545293d26d208922`.

No Animal reconstruction algorithm was copied into Technical Art or UC.

## Highest-leverage gap selected this activation

After the successful real-Godot proof completed, `axm-universal-creation` main advanced to:

**`aa53ee8aa803c19524b7edbef6250bf6ed9336c0`**

The old exact proof pin `50e85c8f...` is an ancestor of that main. The intervening UC commits change only the generic material-UV evidence surface (`docs/MATERIAL_UV_EVIDENCE.md`, `src/axm_uc/material_uv_evidence.py`, and its tests); the rigged glTF codec path is unchanged.

Runtime already owns Animal `ArrayMesh` lifecycle/timing in PR #29. Rigging/Geometry own reconstruction semantics. Materials/Art/QA own appearance acceptance. Opening another lane or adding Animal policy to UC would therefore duplicate ownership.

Selected bounded gap:

> **rebind the already-green Animal target-host proof to current UC main while requiring the exact same generic rigged-codec blob and otherwise changing no receiver contract, source asset, owner algorithm, thresholds, or target-host probe.**

## Smallest reusable repair

Existing Animal Technical Art PR: **#3 — `Technical Art: prove explicit Animal surfaces -> UC GLB bridge`**

Branch: `studio/uc-surface-bridge-001`

Current Technical Art head:

**`54efaf9f2bb77d0ba577c8a11510a578504b70de`**

PR remains **open, draft, mergeable**.

Only the exact UC revision binding in `.github/workflows/uc-direction-frame-target-host-adapter.yml` changed in this activation:

- old UC exact pin: `50e85c8f6a39822eef01e4fb546dcb875917bb3b`;
- current UC exact pin: `aa53ee8aa803c19524b7edbef6250bf6ed9336c0`;
- required generic rigged codec blob remains exactly `02b69b6c7368ba6e34f226ca545293d26d208922`.

No UC product file was modified. No Animal topology, UV, tangent, rigging, weighting, frame-reconstruction, material, Runtime, or visual policy moved into UC.

## Exact current-main rebind state

Dedicated exact-head workflow:

**`35254841638 — UC direction-frame target-host adapter evidence`**

Exact Technical Art head:

`54efaf9f2bb77d0ba577c8a11510a578504b70de`

Current state at this status update: **QUEUED**.

Therefore Technical Art does **not** claim current-UC-main target-host PASS yet. The completed `43e2cf0d...` / UC `50e85c8f...` real-Godot PASS above remains the latest executed receiver fact. The new workflow must independently reproduce it against UC main `aa53ee8...` before continuity is promoted.

## Non-overlap / handoff boundary

- **Technical Art PR #3:** owns the exact receiving/evidence bridge only.
- **Rigging / Geometry:** retain post-skin owner-frame semantics; no algorithm copied here.
- **Runtime PR #29:** retains resource lifecycle, timing, dynamic-buffer and target-device authority. The successful `43e2cf0d...` proof repairs the earlier target-host evidence premise but does not grant Runtime acceptance.
- **Materials / Art Direction / Visual QA:** retain final shaded tangent-space and appearance acceptance.
- **Universal Creation:** remains generic and unchanged by this activation.
- **`axm-create-me`:** remains coordination-only.

## Truth boundary / explicit HOLDs

This activation proves that the repaired stable-angle Animal receiver succeeded on the exact previous UC pin and preserves its retained evidence. It also commits the smallest exact current-main continuity rebind, but that newer run is still queued.

Still **HOLD**:

- current-main rebind PASS until workflow `35254841638` completes;
- bilateral target-host direction-frame equivalence;
- Runtime/product implementation and `ArrayMesh` lifecycle/timing adoption;
- continuous/interpolated shaded playback;
- target-device CPU/GPU/FPS/VRAM/thermal behavior;
- final tangent-space visual acceptance by Materials / Art Direction / Visual QA;
- CANON, profession promotion, production readiness or game readiness.

The historical raw static transported `NORMAL` / `TANGENT` skinning path also remains HOLD under deformation. The post-skin owner-frame reconstruction contract is the proven reference path; this activation does not rewrite that distinction.

## Four-root check

**Truth:** the previously queued workflow is now reported as the SUCCESS it actually became; exact metrics and artifact identity are retained. The newer current-main rebind remains reported as queued, not pre-claimed green.

**Agency / non-domination:** Rigging/Geometry keep reconstruction semantics, Runtime keeps optimization/device authority, Materials/Art/QA keep appearance authority, and UC remains generic.

**Continuity:** the existing Animal Technical Art PR #3 is advanced in place; prior failures, the completed repaired proof, source GLB, owner evidence and exact UC identities remain separately pinned and rollbackable.

**Wisdom before speed:** current UC continuity is checked by changing only the exact revision binding while holding the known generic codec blob fixed, instead of inventing a new UC feature or duplicating Runtime work.

## Current state

`ANIMAL_RIGHT_41KEY_GODOT_TARGET_HOST_PASS_ON_43E2CF0D / RUN_35251459815_SUCCESS / ARTIFACT_10509802878_SHA_912A1C39 / MAX_POS_0 / MAX_NORMAL_VEC_0.0001196176 / MAX_NORMAL_ANGLE_0.00685343DEG / MAX_TANGENT_VEC_0.0001702352 / MAX_TANGENT_ANGLE_0.00975336DEG / UV_0 / INDEX_AND_TANGENT_W_MISMATCH_0 / TA_PR3_HEAD_54EFAF9F_DRAFT_MERGEABLE / CURRENT_UC_AA53EE8A / CODEC_02B69B6C_UNCHANGED / CURRENT_MAIN_REBIND_RUN_35254841638_QUEUED / HOLD_BILATERAL_RUNTIME_CONTINUOUS_DEVICE_ART_QA_CANON_PRODUCTION / COORDINATION_ONLY`
