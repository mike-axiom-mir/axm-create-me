# 07 — 3D Animation & Motion Specialist Status

Date: 2026-09-18
State: **PASS_OBJECT_CURRENT_TA_TARGET_HOST_DISCRETE_REPLAY / OBJECT_PR10_8415E2D8 / TA_PR16_DAD13CE2 / PREDECESSOR_TA_965FB2F2_CONTINUITY_GATED / UC_6DC46598 / 3X101_KEYS / SOURCE_MOTION_FROZEN / WALLCLOCK_RUNTIME_PHYSICS_GAMEPLAY_ART_QA_HELD / COORDINATION_ONLY**

> Continuity note: earlier Character, Animal, Nature, Object and Map Animation heads, workflows, retained artifacts, failed observer attempts and authority boundaries remain preserved in Git history and their owning PR evidence. The immediately preceding Object hinge-knuckle parent-motion PASS at Object PR #10 head `aaacdb053a3ca66218287d7746ce85adc3d244c0` remains valid for its historical source/Rigging partition; this activation does not rewrite or broaden it.

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/07_animation_motion.md`, this status, and fresh specialist / PR state across the constellation before choosing work.

`axm-create-me` remains **coordination only**. Product/evidence implementation lives in `mike-axiom-mir/axm-object-design`. The four AXM roots remain the internal merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh constellation / duplication scan

Character, Animal, Nature and the current-world Object/Map motion lanes already have substantial exact-head evidence. Visual Observer / QA did not report a fresh Animation-owned motion defect, and Runtime/controller authority remains downstream and separate.

The fresh non-duplicated seam was Technical Art's current Object rigid-scene receiver. Existing Object Animation target-host evidence was still pinned to Technical Art head `965fb2f24dbd0b0cbb748d9f8b8712d62966315f`, while current draft Technical Art PR #16 had advanced to exact head `dad13ce23a0fd8e0ec3e612ac1e72f01c5155284`. The current TA head is nine commits ahead of the predecessor. Those commits add Technical-Art orientation/front-face evidence, but exact receiver transfer was not assumed merely because the branch looked compatible.

The existing Object Animation PR #10 was therefore extended in place. No duplicate Animation PR or new motion lane was opened.

## Selected bounded improvement

Repository: `mike-axiom-mir/axm-object-design`

Existing draft Animation PR: **#10 — `Animation: prove bounded equipment-case lid open-hold-close clip`**

Branch: `studio/animation-object-lid-open-close-001`

Exact tested Animation head: **`8415e2d8af09f5f0b402b9aa6e22c06667a93d64`**.

Observed PR state: **open / draft / mergeable / unmerged**.

Current exact Technical Art receiver:

- TA PR #16 exact head: `dad13ce23a0fd8e0ec3e612ac1e72f01c5155284`;
- predecessor TA head: `965fb2f24dbd0b0cbb748d9f8b8712d62966315f`;
- exact UC donor: `6dc465987e01362264f88b7cef4213609ae50763`;
- exact rebound rigid-scene GLB SHA-256: `9788bc7d405b1837961409de20bc9f76d72facae63726cdc7bf7a3ffd2ac3914`.

Frozen source/motion identity:

- asset `modular-equipment-case-001`;
- host source SHA-256 `49b1f9ed9865893d6de6f1ec8f069576732df694853fde4e3fcff366de32644a`;
- sequence `lid-latch-open-hold-close-001`;
- sequence digest `0a3523cf792264f610881552fd2ebd438aabdfd05e30e92af9dbb33ded1fa2d3`;
- duration `2.5 s`;
- authored sample rate `40 Hz`;
- `101` endpoint-inclusive samples;
- three target-host `AnimationPlayer` tracks: lid plus bilateral latch pivots;
- exact source/UC coordinate relation remains `source [x,y,z] -> UC/glTF [x,z,y]`, with target +X rotation carrying the handedness-conversion sign.

Retimed: **false**. Authored keys changed: **false**. Easing changed: **false**. Amplitudes changed: **false**. Source geometry changed: **false**. Rig ownership changed: **false**. Runtime/controller authority changed: **false**.

## Reusable method improvement

The existing target-host contract remains `axm.object-animationplayer-target-proof/v0.1`; motion semantics and the Godot observer did not need a new contract version. The reusable improvement is an explicit **receiver-successor continuity gate** before replaying unchanged Animation evidence on a newer Technical Art exact head.

The updated workflow now requires all of the following before the Godot motion proof can run:

1. the current TA exact head must descend from the previously proven TA head;
2. source, front-latch ownership, rigid-scene builder and target observer blobs must be byte-identical between predecessor and current TA heads;
3. the current TA receiver must be rebuilt against the exact pinned UC commit;
4. the rebuilt rebound GLB must match the independently pinned expected SHA-256;
5. only then may the unchanged 101-sample Animation sequence be rebound and observed in real Godot.

Continuity blob identities that passed:

- `source.json`: `018e36bb08539f212d2c65e6408566e3540fd983`;
- `front-latch-ownership-001.json`: `220b653a582b7d1c0e11d814615eb650979fbaf7`;
- `build_object_uc_rigid_scene_handoff.py`: `ea51448581da2a7caae1c3e534191bee3002dd3f`;
- `rigid-proof/observe.gd`: `fcd48586f04ab8f38e2950067d1c26e3bee78d8d`.

This pattern permits evidence reuse only after exact successor continuity is proven; it does not silently promote a newer receiver because it shares a branch or asset name.

## Exact green result

Dedicated workflow: **`35295638365 — Object AnimationPlayer target-host evidence` — SUCCESS**.

Exact branch evidence head: **`8415e2d8af09f5f0b402b9aa6e22c06667a93d64`**.

Scoped result:

**`PASS_TARGET_HOST_DISCRETE_ANIMATIONPLAYER_SAMPLED_SEEK`** on current TA head `dad13ce23a0fd8e0ec3e612ac1e72f01c5155284`.

The complete exact-head workflow passed:

- Technical Art predecessor -> successor ancestry and byte-identity gate;
- Python 3.11 full inherited Object suite: **50 tests**;
- Python 3.13 full inherited Object suite: **50 tests**;
- exact current TA rigid-scene rebuild against UC `6dc465987e01362264f88b7cef4213609ae50763`;
- exact rebound GLB byte-identity check;
- unchanged lid clip and ordered latch/lid sequence rebuild;
- exact cross-repo source/sequence/rig/TA identity gate;
- pinned Godot **4.7.2** target-host execution;
- retained sampled-state render evidence and receipt validation;
- retained artifact upload.

Current TA receiver evidence retained by the workflow:

- rigid-scene result: `PASS_OBJECT_SOURCE_OWNED_RIGID_PARTS_THROUGH_UC_SCENE_GRAPH`;
- mesh nodes: `31`;
- triangles: `812`;
- lid-owned direct children: `hinge_lid_l0`, `hinge_lid_l1`, `latch_0_keeper`, `latch_1_keeper`;
- fixed front-service-panel levers: `latch_0_lever`, `latch_1_lever`;
- UC rigid-scene binary geometry payload preserved: **true**.

Measured positive Godot Animation evidence:

- `AnimationPlayer` tracks: **3**;
- keys per track: **101 / 101 / 101**;
- interpolation: **NEAREST**;
- update mode: **DISCRETE_AUTHORED_SAMPLES**;
- maximum lid sampled-seek error: **`0.00000762939453125°`**;
- maximum latch sampled-seek error: **`0.000003814697265625°`**;
- proof-local pivot-wrapper neutral drift: **`0.0 m`**;
- release keeper drift: **`0.0 m`**;
- minimum release lever movement: **`0.0401843525469303 m`**;
- minimum keeper movement at peak lid state: **`0.770640730857849 m`**;
- endpoint keeper drift: **`0.0 m`**;
- endpoint lever drift: **`0.0 m`**;
- closed -> release changed pixels: **`1,735`**;
- closed -> peak changed pixels: **`92,810`**;
- closed -> endpoint changed pixels: **`0`**.

Ten retained target-host review frames cover authored sample indices `0, 5, 10, 25, 40, 50, 60, 90, 95, 100`, including neutral, latch release, opening, peak/hold, close, reengagement and exact neutral return.

## Retained exact evidence

Artifact ID: **`10527637547`**.

Artifact name: `object-animationplayer-target-8415e2d8af09f5f0b402b9aa6e22c06667a93d64`.

Size: **`266,688 B`**.

Archive SHA-256: **`f12373db7c41027aff4c6dabbf44f901631c6a019f1a12995f2eca750fa10707`**.

The artifact was downloaded after CI and independently rehashed to the same digest. It retains the frozen source sequence, exact current TA rebound GLB and handoff receipt, exact Rigging receipt, AnimationPlayer target receipt and the ten sampled render frames.

The predecessor target-host artifact on TA head `965fb2f24dbd0b0cbb748d9f8b8712d62966315f` remains separately preserved as artifact `10526497245`; it is not rewritten into the current result.

## Truth boundary / authority

This PASS proves only that the **unchanged authored discrete Object Animation sequence** can be rebound to the exact current Technical Art rigid-scene receiver and sought through a real Godot 4.7.2 `AnimationPlayer` while preserving the verified source-owned keeper hierarchy, exact source/TA/UC identity and proof-local latch-pivot binding.

It does **not** establish:

- continuous interpolation quality between authored samples;
- wall-clock `40 Hz` presentation or display scanout;
- a production Runtime controller, state machine or input path;
- collision, physics, mechanical retention or latch force;
- gameplay or interaction acceptance;
- target-device CPU/GPU/FPS/thermal behavior;
- final motion weight, timing style or naturalness;
- Art Direction or independent Visual Observer / QA acceptance;
- CANON or production readiness.

The latch pivot wrappers used by the Animation proof remain **proof-local**, derived from exact Rigging evidence. This result does not claim that Technical Art has adopted those wrappers as its production articulation implementation.

Animation retains only motion/clip/playback evidence authority. Rigging retains articulation/deformation constraints; Hard Surface retains source ownership; Technical Art retains transport/receiver construction; Runtime retains controller/device/performance; gameplay, physics and Art/QA retain their own acceptance authority.

## Preserved Animation continuity

- Object PR #10 hinge-knuckle parent-motion PASS at `aaacdb053a3ca66218287d7746ce85adc3d244c0` remains valid for its exact historical source/Rigging partition.
- Object PR #10 predecessor target-host sampled-seek PASS on TA head `965fb2f24dbd0b0cbb748d9f8b8712d62966315f` remains preserved; this activation adds exact current-TA continuity rather than replacing it.
- Animal PR #5 Godot quaternion interpolation equivalence remains PASS at `eb21e0e0fd888bbb5fa41c73a6c0f1c731f662c2`.
- Object/Map PR #48 wall-clock replay remains separately scoped to its own exact Technical Art receiver and is not transferred here.
- Map PR #44 compact-east exact-key/real-loop characterization remains PASS while full 31.25 ms source-slot presentation remains held.
- Nature PR #13 exact-state DISCRETE and single-shape LINEAR characterization remain preserved.
- Character PR #22 exact-density target-host and repeated-loop evidence remain preserved.
- Wreckline mechanical-motion work remains separate and was not duplicated.

## Four-root gate

- **Truth:** exact predecessor/current TA identities, byte continuity, current GLB digest, real Godot output and the nonclaims remain explicit; no receiver transfer was assumed without proof.
- **Agency / non-domination:** Animation does not seize Rigging, Hard Surface, Technical Art, Runtime, physics/gameplay or Art/QA authority.
- **Continuity:** predecessor evidence remains addressable, the successor receiver is explicitly bound, and the unchanged source/motion identity is preserved across the handoff.
- **Wisdom before speed:** the smallest fresh receiver-continuity seam was closed without retiming or reauthoring a motion that already had valid exact-source evidence.

The four AXM roots remain the merge gate.

## Next Animation trigger

Do not retime or rewrite this Object motion from this result. Reopen this receiver-continuity lane only if Technical Art materially changes source/ownership/rigid-scene construction or receiving hierarchy, Rigging/Hard Surface explicitly authorize a newer source articulation for Animation, or Art/QA reports a concrete motion defect. Runtime controller/state-machine, gameplay, physics and target-device acceptance remain downstream and separate.
