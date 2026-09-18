# 11 — Technical Art / UC Integration Specialist Status

Date: 2026-09-18

State: **PASS_NATURE_RUNTIME_SHADER_NORMAL_TRANSPORT_CURRENT_UC_GODOT / NATURE_TA_PR3_HEAD_1CD1784C_DRAFT_MERGEABLE / RUNTIME_PASS54_520068E1 / CURRENT_RUNTIME_208CB302_SHADER_BUILDER_BLOB_IDENTICAL / CURRENT_UC_520584C8 / 390_VERTICES_390_NORMALS_570_TRIANGLES / TEN_VERTEX_ID_RUNS / FIVE_POSES / CORRECTED_0_PIXELS_GT1_LSB_VS_POSITION_ONLY_NEGATIVE_11027 / RUN_35327290926_SUCCESS / ARTIFACT_10539392132_SHA_0CE6615B / UC_PRODUCT_UNCHANGED / HOLD_TANGENTS_LOOKDEV_DEVICE_PERF_TIMING_CANON_PRODUCTION / COORDINATION_ONLY**

## Activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/11_technical_art_uc_integration.md`, current specialist status, the Nature design constellation, current Runtime / Animation / VFX ownership, the existing Nature Technical Art lane, and fresh `axm-universal-creation`.

`axm-create-me` remains **coordination only**. Product, renderer, target-observer, and test implementation stayed in the existing Nature Technical Art PR #3. The merge gate remains **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Highest-leverage bounded gap

Selected path:

**Runtime pass-54 compressed position-only shader carrier -> Technical Art proof-normal direction transport -> generic current UC GLB -> real Godot 4.7.2 target observation**.

Runtime had already proved the compressed one-surface shader carrier and explicitly retained **deformed normal/tangent correctness as unproven**. Its generated shader transformed `VERTEX` only. The missing cross-repo Technical Art contract was therefore renderer-facing normal-direction transport, not another Runtime representation lane and not a new UC capability.

The current Animation/Runtime rebind lane was already active elsewhere, so this activation did not duplicate it.

## Exact lane and pins

Repository: `mike-axiom-mir/axm-nature-design`

Existing Technical Art PR #3:
- branch `studio/uc-nature-surface-bridge-001`;
- exact successful head **`1cd1784cbc2d0fb5ffdf23e9e2d9a50b50d90641`**;
- state: **open / draft / unmerged / mergeable**.

Consumed identities:
- Runtime semantic owner **`6d89e1fc0f8dc5e2ef6c57fc99c1dc6b1727780f`**;
- exact Runtime pass-54 shader candidate **`520068e1167f369b24e749831954f9bda1cd7aec`**;
- Runtime shader-builder blob **`3214d7198d20e80a2cb7da81eb31c272092f1fd0`**;
- current Runtime PR #20 head observed after selection **`208cb30243c9b464ff1d1c4fd0f606b220af4ea6`**;
- the same shader-builder blob at that current Runtime head is still **`3214d7198d20e80a2cb7da81eb31c272092f1fd0`**;
- fresh/current UC main **`520584c87071837e8dc1ff9a39da140f5efa229d`**;
- UC `src/axm_uc/procedural_3d.py` blob **`cdb654d4d0f68a4ca7539d98a985d7a70cf7ee36`**;
- current-UC receiver GLB SHA-256 **`d19515a6bbb9905aaf4a36f50453cc07f9c7be2ab9dc10a7ebbca97f8fbcd01f`**.

The newer Runtime head adds the Runtime-owned current-Animation rebind. Technical Art records the unchanged shader-builder blob only as transport continuity; it does **not** inherit or seize the newer Animation/Runtime semantic claim.

## Smallest reusable repair

No UC product code changed.

Added Nature-local Technical Art tooling that consumes the exact Runtime-generated shader instead of duplicating its five-group / ten-run selection logic. It fails closed if the Runtime shader shape drifts, if Runtime starts writing `NORMAL` itself, or if the bounded proof is inflated into generic Nature/UC normal policy.

The existing Runtime position transform is preserved exactly. Technical Art adds only proof-normal direction transport:
- source/target map remains `[x,y,z] <-> [x,z,y]`;
- use the **same source-space axis and angle** as the Runtime vertex transform;
- rotate the normal as a direction vector;
- **do not apply pivot translation** to the normal;
- normalize after transport.

The debug material is explicitly `TECHNICAL_ART_NORMAL_DIRECTION_DEBUG_ONLY_NOT_NATURE_LOOKDEV`; it is unshaded and cull-disabled to isolate normal direction. The proof normals remain Technical-Art-generated receiver evidence, **not source or Materials authority**.

## Exact real-target oracle

The exact current-UC receiver contains:
- **390 positions**;
- **390 normals**;
- **570 triangles**;
- one surface;
- Runtime moving window `[110,370)` represented by **10 exact `VERTEX_ID` runs** across five groups.

Real Godot starts from the actual imported receiver and evaluates the exact Runtime witnesses **`-5 / -2.5 / 0 / +2.5 / +5 deg`**.

For every witness it renders three paths:
1. CPU analytic control using the imported neutral positions and normals;
2. exact Runtime shader carrier plus the Technical Art normal-direction correction;
3. retained negative: exact Runtime position-only deformation with normals left static.

This makes the observer discriminating without pretending the proof material is Nature lookdev.

## Exact target-host result

Dedicated workflow **`35327290926` — SUCCESS**. The exact-head build, owner/UC identity checks, authority-inflation negative, pinned Godot 4.7.2 setup, real target render, receipt validation, and evidence retention all passed.

Target state:

**`PASS_NATURE_RUNTIME_SHADER_NORMAL_TRANSPORT_CURRENT_UC_GODOT`**

Across five 630,000-pixel target comparisons:
- corrected Technical Art path: **0 pixels >1 LSB total** versus CPU normal control;
- corrected maximum channel delta: **1 LSB**;
- corrected absolute channel-delta sum: **454**;
- Runtime position-only negative: **11,027 pixels >1 LSB total**;
- negative maximum channel delta: **11 LSB** at ±5 degrees;
- negative absolute channel-delta sum: **110,566**;
- all **4 / 4 nonzero witnesses** discriminate in favor of corrected normal transport;
- neutral remains observationally equivalent for both paths, as expected.

The corrected path still has a small number of 1-LSB changed pixels (454 channel-delta sum over all poses), so exact pixel-byte identity is **not** claimed. The accepted bounded claim is zero pixels above 1 LSB and strong discrimination against the position-only negative.

## Retained failed predecessors

Workflow **`35326746797`** on TA head `347ec6dc...`: the builder packet itself was green, but the retained workflow verifier asked for stale key `uc.normals` instead of emitted `uc.normal_count`; Godot was skipped. Artifact **`10538164699`**, SHA-256 **`0fd1557ffd6a56988368dda9525a8fcfebc760c4e4fc729b9df5e158a087ecb0`**.

Workflow **`35326929818`** on TA head `93e184d2...`: static validation and Godot setup were green, but the target observer stopped on a GDScript warning-as-error because a pixel-delta local inferred `Variant`. The repair was only an explicit `int` type. Artifact **`10538439656`**, SHA-256 **`391d9ac0bd11e714d0d443a2aab19f962e57204a3f1465c87c60f0f0a445c40f`**.

Neither repair changed geometry, Runtime semantics, UC code, acceptance thresholds, or the target oracle.

## Same-head continuity

At final inspection, all **14 observed checks** on exact TA head **`1cd1784c...`** were completed with **no failure**, including baseline tests, UC bridge/source/topology paths, prior Animation target, prior Runtime dynamic-window receiver, and the new normal-transport target proof.

The newest Runtime PR #20 head is not silently substituted into this exact target receipt. Its shader-builder executable blob is byte-identical, which is recorded as continuity only; its newer current-Animation rebind remains Runtime/Animation-owned.

## Retained successful evidence

Artifact **`10539392132`**:
- name `nature-runtime-shader-normal-transport-1cd1784cbc2d0fb5ffdf23e9e2d9a50b50d90641`;
- GitHub payload **443,086 B**;
- **34 files**;
- **521,177 B uncompressed**;
- SHA-256 **`0ce6615bdff5d3a437ae964d5d18a2624444535b8bd9d9379d5902172564e6f7`**;
- downloaded ZIP independently rehashed to the exact same digest.

The retained package includes all **15 target renders** (CPU control / corrected / position-only negative for five poses), exact heads/blob identities, source tooling, both diagnostic shaders, GLB, carrier oracle, Technical Art packet, Godot receipt, and logs.

## Authority boundary / HOLDs

Technical Art clears only the renderer-facing **proof-normal direction transport** blocker for the exact pass-54 shader carrier and current generic UC receiver.

Still HOLD:
- tangent transport;
- source- or Materials-authoritative final normals;
- final Nature material / foliage / lookdev behavior;
- Art Direction / independent Visual-QA acceptance;
- physical wind/VFX semantics;
- continuous Animation/VFX timing through this exact normal path;
- target-device CPU/GPU/FPS/VRAM/heap/thermal/battery performance;
- collision, navigation, gameplay, or physics suitability;
- Map/default-world adoption;
- CANON;
- production/game readiness;
- Technical Art mastery.

## Four-root check

**Truth:** exact pass/fail runs, one-LSB residuals, discriminating negative, current/exact owner identities, and non-claims are explicit.

**Agency / non-domination:** Runtime keeps shader representation/scheduling authority; Animation/VFX/Materials/Art/Map keep their domains. Technical Art does not turn a receiver proof into adoption or visual authority.

**Continuity:** exact TA/Runtime/UC heads, executable blobs, GLB identity, failed predecessors, successful run, target metrics, and artifact digest are retained.

**Wisdom before speed:** repaired the smallest receiver-facing seam on the existing PR #3, reused the exact Runtime carrier, left UC generic, and refused to duplicate the active Runtime/Animation lane.

## Prior activation preserved

The immediately preceding dynamic-window partial-update status remains recoverable in `axm-create-me` Git history. It proved `ArrayMesh.surface_update_vertex_region` equivalence on TA head `da60cd49...`, workflow `35318777686`, with 390 vertices / 570 triangles, exact `[110,370)` window, 3120 B partial packet versus 4680 B full control, and 5 / 5 byte-identical full-vs-partial renders.

## Current state

`PASS_NATURE_RUNTIME_SHADER_NORMAL_TRANSPORT_CURRENT_UC_GODOT / NATURE_TA_PR3_HEAD_1CD1784C_DRAFT_MERGEABLE / RUNTIME_OWNER_6D89E1FC / RUNTIME_PASS54_520068E1 / CURRENT_RUNTIME_208CB302_SHADER_BUILDER_BLOB_3214D719_IDENTICAL / CURRENT_UC_520584C8_PROCEDURAL3D_BLOB_CDB654D4 / RECEIVER_GLB_D19515A6 / 390_POSITIONS_390_NORMALS_570_TRIANGLES / TEN_VERTEX_ID_RUNS_FIVE_GROUPS / FIVE_DRIVER_POSES / CORRECTED_GT1_LSB_0_MAX_1_ABS454 / POSITION_ONLY_NEGATIVE_GT1_LSB_11027_MAX_11_ABS110566 / FOUR_OF_FOUR_NONZERO_DISCRIMINATING / FAILED_RUNS_35326746797_35326929818_RETAINED / RUN_35327290926_SUCCESS / ARTIFACT_10539392132_443086B_34_FILES_SHA_0CE6615B / ALL_14_OBSERVED_SAME_HEAD_CHECKS_NO_FAILURE / UC_PRODUCT_UNCHANGED / HOLD_TANGENTS_LOOKDEV_DEVICE_PERF_TIMING_CANON_PRODUCTION / COORDINATION_ONLY`
