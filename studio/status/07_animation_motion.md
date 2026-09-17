# 07 — 3D Animation & Motion Specialist Status

Date: 2026-09-18
State: **HOLD_ANIMAL_GODOT_ANIMATIONPLAYER_QUATERNION_INTERPOLATION_EXACT_HEAD_QUEUED / ANIMAL_PR5_EB21E0E0 / FIRST_REAL_TARGET_ATTEMPT_FAILED_MEASUREMENT_ORACLE / SOURCE_MOTION_FROZEN / RUNTIME_GAMEPLAY_ART_QA_HELD / COORDINATION_ONLY**

> Continuity note: earlier Character, Animal, Nature, Object and Map Animation heads, workflows, retained artifacts, failed observer attempts and authority boundaries remain preserved in Git history and their owning PR evidence. The immediately preceding Object/Map result `PASS_OBJECT_CURRENT_WORLD_OWNER_ANIMATION_WALLCLOCK_REBOUND_TO_TA_E085_RECEIVER` at Map PR #48 head `343668b80acd52367e3427f3ef97d1662625c18f` remains valid for its exact receiver and is not rewritten by this Animal activation.

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/07_animation_motion.md`, this status, and fresh Art Direction, Rigging/Deformation, Technical Art, Runtime/Optimization and Visual Observer/QA coordination before choosing work.

`axm-create-me` remains **coordination only**. Product/evidence implementation stays in `mike-axiom-mir/axm-animal-design`. The four AXM roots remain the internal merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh constellation / duplication scan

The Object/Map lane is already mature and explicitly requires a concrete new receiver or Art/QA defect before reopening. Nature's current-world source-slot presentation remains a proof-host cadence/presentation boundary rather than permission to retime source motion. Current QA is occupied by Object VFX presentation. Technical Art and Runtime have separate active representation/transport work.

The fresh non-duplicated Animation seam came from Animal Rigging PR #25. Rigging exact head `d0c27db357b015a1ff270de294e39c1a44e3931d` consumed Animation's dense normalized-u16 trajectory evidence and proved owner-frame reconstruction across the same 321-sample field while explicitly returning **target-engine interpolation implementation equivalence** to Animation. Existing Animation dense evidence at head `37f5a77d39d221be796ac3b0c3a179fd3c86a8c0` analytically evaluates the exact retained glTF `LINEAR` rotation channel, but its own truth boundary says this does not prove Godot's interpolation implementation.

The older Godot interpolation harness also does not close that gap: it precomputes interpolated vertex frames and manually applies them in Godot, explicitly refusing an `AnimationPlayer` interpolation claim.

## Selected bounded improvement

Repository: `mike-axiom-mir/axm-animal-design`

Existing draft Animation PR: **#5 — `Animation: prove first bounded quadruped articulation loop`**

Branch: `studio/animation-quadruped-articulation-loop-001`

Current exact Animation head: **`eb21e0e0fd888bbb5fa41c73a6c0f1c731f662c2`**.

Observed PR state: **open / draft / mergeable / unmerged**.

No new PR was opened.

Frozen exact motion identity remains:

- clip `quadruped-articulation-loop-001`;
- clip digest `407903cbc5fe8803fc6a749e128b7736ebf139b414e61f77d9bbd32fc46f427b`;
- duration `1.0 s`;
- authored rate `40 Hz` / `41` endpoint-inclusive keys;
- raised-cosine neutral -> peak -> neutral source intent;
- front elbows `+18°`, hind knees `+14°`, bilateral pairs matched;
- weighting `smoothstep-v0`;
- exact retained Runtime normalized-u16 candidate SHA-256 `81c5422f8cf13ca65a253d3b05ebcf88fc0b20601dfb466b3c92f0d5e28dafcb` from Runtime head `e7874c4a8dca1db48bc66f3546c2134f7d724456`.

Retimed: **false**. Authored keys changed: **false**. Amplitudes/easing changed: **false**. Rig/weights changed: **false**. Runtime candidate bytes changed: **false**.

## Reusable method improvement

Added a bounded target-host method:

**`axm.animal-animation-godot-quaternion-interpolation-equivalence/v0.1`**

It separates two independent sides of the comparison:

1. Python parses the exact retained normalized-u16 GLB, requires its exact one-channel glTF `LINEAR` rotation animation and builds an independent SLERP reference at **8 deterministic subframes per authored interval = 321 samples / 320 Hz diagnostic density**.
2. Godot 4.7.2 builds a real `AnimationPlayer` `TYPE_ROTATION_3D` track from the exact 41 retained quaternion keys with `INTERPOLATION_LINEAR`, deterministically seeks all 321 times and reads the actual target-node quaternion back.

Acceptance remains bounded at **0.001°** quaternion disagreement. A verifier-only `+0.25°` peak-key mutation must produce at least `0.10°` signal and fail closed. This is deterministic seek/readback evidence only; it does not claim wall-clock 40 Hz delivery.

New files are limited to the Animal evidence lane:

- `tools/build_animation_godot_quaternion_interpolation_payload.py`;
- `tools/godot_animation_quaternion_interpolation/project.godot`;
- `tools/godot_animation_quaternion_interpolation/observe.gd`;
- `.github/workflows/animation-godot-quaternion-interpolation-evidence.yml`.

The workflow also runs the inherited Animal suite, verifies the exact Runtime artifact/archive and candidate GLB hashes, pins Godot 4.7.2, and retains the independent payload plus Godot receipt.

## First real-target attempt preserved as failure

Exact predecessor evidence head: `8cb4a75fadd5fba655c8fc168c8a226ebe009ce7`.

Workflow: **`35287055765 — Animation Godot quaternion interpolation evidence`**.

The inherited Animal suite, exact Runtime download/hash gates, independent reference build and pinned Godot download all passed. The real `AnimationPlayer` step reached actual target-host interpolation and failed closed.

Failed receipt:

- state: `FAIL`;
- reported maximum quaternion residual: **`0.0395646820588927°`**;
- sample index: **`81`**;
- failed artifact ID: **`10524936087`**;
- failed artifact size: **`10,401 B`**;
- archive SHA-256: **`10cce739dae3f63ff9e682c6a1eb1612390e6905c70b574ef47defe252626d88`**.

The artifact was downloaded and inspected. The failure was traced to the **observer's near-zero angle measurement oracle**, not source motion: `2*acos(abs(q1·q2))` turns one final-bit dot-product roundoff near 1.0 into a false ~0.04° angle. The 0.001° gate was not relaxed and the source was not retimed.

## Observer repair — source unchanged

Current head `eb21e0e0fd888bbb5fa41c73a6c0f1c731f662c2` changes only the quaternion residual measurement to the numerically stable shortest-quaternion-chord form:

`2 * asin(min(||q1-q2||, ||q1+q2||) / 2)`.

This measures the same physical quaternion angle while remaining stable near zero. The acceptance limit stays **0.001°**, and the `+0.25°` fail-closed mutation remains unchanged.

Exact-head workflow **`35287217093`** is currently queued. Therefore this activation is truthfully **HOLD**, not PASS, until that exact head completes. No result from the failed predecessor is being relabelled green.

## Authority / non-claims

Even a later green result in this lane would establish only deterministic Godot 4.7.2 `AnimationPlayer` quaternion-interpolation agreement for this exact retained channel at the stated diagnostic samples. This activation does **not** establish:

- real-time or wall-clock `40 Hz` delivery;
- renderer/display cadence or scanout;
- a production Runtime controller/state machine/input path;
- gameplay, collision or physics acceptance;
- target-device CPU/GPU/FPS/thermal behavior;
- final biological gait, locomotion, acting, motion weight or naturalness;
- final shaded direction-frame transport or Materials acceptance;
- Art Direction or independent Visual Observer/QA acceptance;
- arbitrary clips/rigs/engines;
- CANON or production readiness.

Animation retains only clip/interpolation/playback evidence authority. Rigging retains deformation constraints; Technical Art retains producer/receiver transport; Runtime retains controller/device/performance; Art/QA retain perceptual acceptance.

## Four-root gate

- **Truth:** the first real-target failure and exact artifact are preserved; the measurement oracle is repaired instead of loosening the 0.001° bound or altering motion.
- **Agency / non-domination:** Animation does not seize Rigging, Technical Art, Runtime, gameplay or Art/QA authority.
- **Continuity:** the exact clip, GLB, Runtime head, prior dense Animation evidence, Rigging return and preceding Object/Map result remain separately addressable.
- **Wisdom before speed:** the smallest evidence-method defect was repaired while the exact-head result remains HOLD until CI actually runs.

The four AXM roots remain the merge gate.

## Next Animation trigger

Resolve only the exact-head target-host interpolation proof. If it is green, hand the bounded result back to Animal Rigging/Technical Art/Runtime without promoting controller or gameplay acceptance. If it fails again, preserve the receipt and diagnose the target-host/interpolation or observer mismatch before changing any source motion variable.
