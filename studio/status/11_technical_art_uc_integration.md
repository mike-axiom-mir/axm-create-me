# 11 — Technical Art / UC Integration Specialist Status

Date: 2026-09-17
State: **PASS_CHARACTER_REVIEW006_DENSE_SKIN_POSITION_TRANSPORT_TO_CURRENT_UC / HOLD_DEFORMED_DIRECTION_FRAME_TARGET_ENGINE_RUNTIME_ART_QA_CANON_PRODUCTION / CHARACTER_TECH_ART_PR_21_DRAFT_MERGEABLE / COORDINATION_ONLY**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/11_technical_art_uc_integration.md`, current Technical Art / Art Direction / Materials / Animation / Runtime / Visual-QA status, the live Character constellation, and current `axm-universal-creation` before selecting work.

`axm-create-me` remains **coordination only**. No Character or UC product implementation was added here. The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Highest-leverage gap / duplication scan

The previous Object selected-roughness scalar transport remains green historical Technical Art evidence. Object Technical Art PR #28 already owns that lane; it was not duplicated or extended by cadence.

Character became the strongest fresh cross-repo boundary:

- Art Direction explicitly asks Technical Art to prove exact skeleton/skin plus direction-frame transport before target-engine deformation claims.
- Rigging PR #17 owns the exact review-006 `opening_repair`, mirrored shoulder axes and angle-conditioned proximal release profile.
- Materials PR #18 proves that pose-recomputed smooth normals are visibly different from incorrectly frozen neutral normals in real Godot, but does not choose a transport representation.
- Animation PR #19 is the first exact bounded temporal receiver on the current Rigging identity: 321 dense samples at 160 Hz, `0 -> -30 -> 0 -> +30 -> 0°`, with all clean samples structurally green and the hidden +36.60° overshoot negative retained.
- Character had no Technical Art lane.

The highest-leverage non-duplicated Technical Art step was therefore **exact Character skin-position transport into current UC**, while preserving the separate deformed direction-frame boundary.

## Exact owner lineage consumed

Repository: `mike-axiom-mir/axm-character-design`.

Technical Art PR: **#21 — `Technical Art: prove review006 skin positions through current UC`**.

Branch: `studio/technical-art-character-review006-uc-skin-transport-001`.

Exact tested head:

**`1c021d40d7d606f6fb2a29e69f9353640aa33f60`**

PR #21 remains **open / draft / mergeable** and is stacked directly on exact Animation PR #19 head:

**`9519be55581c009fd800d175677d9b50ee6926e6`**.

Exact inherited identities:

- Rigging head: `fa16c44b1a488d43842470fc9f30c5fb5e98cab6`;
- Geometry head: `8ad006f91ebb9934d5df98702e4410c74a1e68ea`;
- review-006 source SHA-256: `8e9252ede4d257509e4eacb595f1c234aa100a42dc46a54b7b45550f2619c5e1`;
- proof-mesh SHA-256: `f173b2af9b7bf69ca78bce2ec2daa07a083748590d9ae9e99443962a6d1aa8e7`;
- topology digest L: `ea00241192b2af9113a28c4b723e871b440d4d37d32ebe5457c64f94b7650d5d`;
- topology digest R: `aeca6971c25e9786bcdea4f28103f69db642d3c360226b0705752229050b850a`;
- Rigging profile digest: `49e59bfd7596619a2a19454ca395276097102047af673fc4219694e777a5a719`;
- Animation clip: `character-review006-bilateral-shoulder-articulation-review-loop-001`;
- Materials reference head: `e450684b398f8e5b0e23c4cbf717e3475dd4d5ee`;
- Materials exact normal-evidence tool blob: `843c0e1866172dd8b6c5ab0f23d69d1e469562f7`.

No source position, topology, shoulder axis, Rigging release formula, Animation curve/amplitude, Materials look policy or safe-envelope authority was rewritten.

## Current UC receiver

Current exact UC main consumed by the proof:

**`7edbc9544d52207a6f09cb85889d1587e22d4442`**

Exact bound `src/axm_uc/game_pose_runtime.py` blob:

**`dee5db003a56a0a5f55092c1b3db50f56a22de7e`**

No UC product change was justified or made. The current generic `GamePoseAsset` already evaluates embedded glTF transform animation, skins and deformed **positions** offline. Its own truth boundary explicitly does not claim shading or deformed normals/tangents.

Character-specific release semantics therefore remain in Character. UC receives only an ordinary glTF skin/TRS asset.

## Smallest reusable transport repair

The real transport mismatch was explicit: current Character Rigging uses an angle-dependent proximal child weight `w(theta)`, while glTF `WEIGHTS_0` are static.

Technical Art did not flatten that difference or move the dynamic weight function into UC. Instead, for this exact bounded clip only, the producer factors the owner map

`D = (1-w)I + wR(theta)`

into a static skin blend

`D = (1-alpha)I + alpha*C`, with `alpha = 1/8`,

where

`C = (1-k)I + kR(theta)` and `k = w/alpha`.

For the current single-axis shoulder rotation, `C` is exactly representable as an ordinary helper-joint rotation plus uniform scale in the plane orthogonal to that axis. `alpha=0.125` and the root companion weight `0.875` are exact binary fractions and remain above the current Rigging maximum release weight.

The transport representation is bounded and explicit:

- exact source receiver per side: **92 vertices / 180 triangles**;
- combined proof asset: **184 vertices / 360 triangles**;
- Character Z-up -> glTF Y-up adapter: `(x,y,z) -> (x,z,-y)`;
- coordinate-adapter determinant: **+1**;
- winding reversal: **false**;
- static transport skin: **5 joints** — one root, L/R distal shoulder joints, L/R transport-only release helper joints;
- exact dense transport keys: **321 at 160 Hz**;
- ordinary glTF Animation channels: **6 TRS channels**.

This is transport plumbing only. It is not a new Character rig design and it is not a reusable UC policy selector.

## Exact proof result

Scoped result:

**`PASS_CHARACTER_REVIEW006_DENSE_SKIN_POSITION_TRANSPORT_TO_CURRENT_UC__HOLD_DEFORMED_DIRECTION_FRAME`**

Dedicated workflow:

**`35213021247 — Technical Art Character review006 UC skin transport` — SUCCESS**

The workflow passed:

- complete Character suite on Python 3.11;
- complete Character suite on Python 3.13;
- exact Animation-parent ancestry;
- exact Materials reference blob;
- exact current UC head and pose-runtime blob;
- exact producer-side factorization;
- all 321 current-UC pose samples;
- retained direction-frame HOLD mutation check;
- evidence upload.

Position evidence:

- direct real-arithmetic factorization maximum residual: **`2.482534153247273e-16 m`**;
- current UC maximum position residual across all 321 keys and all 184 vertices: **`8.161784431363273e-08 m`**;
- evidence tolerance: **`5e-6 m`**;
- worst UC sample: index `79`, time `0.4937500059604645 s`, angle `-29.9994249938965°`;
- disabling the release helper produces maximum residual **`0.00011977508677082533 m`** and is rejected.

Emitted GLB:

- size: **44,032 B**;
- SHA-256: **`76acbfca2c50151f4c801bf34910f94eea6bd6d165caeb1e344b8001a2b83a99`**;
- UC receiver sees one primitive, 184 vertices, one five-joint skin, one 2.0 s clip and six animation channels.

## Direction-frame truth boundary retained

Current bound UC `GamePoseAsset` does **not** evaluate deformed normals or tangents. Technical Art therefore did not turn the position PASS into a direction-frame PASS.

A retained reference packet uses the exact Materials PR #18 method — **area-weighted indexed vertex smooth normals** — on owner poses. At both exact Animation extrema `-30°` and `+30°`:

- L changed normal vertices: **31 / 92**;
- R changed normal vertices: **31 / 92**.

The explicit state remains:

**`HOLD_CHARACTER_REVIEW006_DEFORMED_DIRECTION_FRAME_NOT_EVALUATED_BY_CURRENT_UC_POSE_RUNTIME`**.

A verifier-only mutation that relabels current UC as direction-frame-capable is rejected. No generic normal/tangent policy was added to UC merely to close this run.

## Retained evidence

Final successful artifact:

- artifact ID: **`10493276697`**;
- name: `character-review006-uc-skin-transport-1c021d40d7d606f6fb2a29e69f9353640aa33f60`;
- uploaded size: **32,132 B**;
- GitHub archive SHA-256: **`841b9b9804af7a9fcffb5a13bffa0a663bc3f0b44053d5e800624665990c0368`**;
- independently downloaded and rehashed SHA-256: **same**.

Archive contents include the 44,032-byte GLB, exact contract, UC description, 321-sample position comparison, direct-factorization audit, Materials-method direction-frame reference, exact Technical Art / Animation / Materials / UC identity pins and final result receipt.

## Coordination handoffs

- Character Technical Art PR #21 detailed receipt comment: **`5713210930`**;
- Character Animation PR #19 receiving handoff: **`5713213110`**;
- Character Materials PR #18 receiving handoff: **`5713214734`**.

No competing Rigging, Animation, Materials, Runtime, Art, QA or UC lane was opened.

## Prior continuity retained

Previous Object selected-roughness transport remains historical green evidence on existing Object Technical Art PR #28. Its exact scalar/ORM/Godot proof and prior rectangular-atlas work are not invalidated by this Character activation.

The prior Building source-vs-consumer indexing and post-index normal-transport boundaries remain separately valid. Animal's deformed direction-frame HOLD remains a separate product-domain truth and is not silently imported into Character acceptance.

## Explicit non-claims / next receiver boundary

This PASS does **not** establish:

- between-key target-engine interpolation equivalence;
- target-engine skeleton/skin import or rendered playback;
- deformed normal/tangent equivalence;
- tangent-space normal-map correctness;
- full-body Character skin deformation or volume preservation;
- controller/state-machine behavior;
- target-device performance;
- collision/physics/gameplay acceptance;
- final Art Direction acceptance;
- final independent Visual QA acceptance;
- source adoption or CANON;
- Profession Fabric promotion;
- production/game readiness;
- Technical Art / UC Integration mastery.

The next legitimate Technical Art step in this Character chain is a **real receiver that can independently expose deformed direction frames** (or a bounded engine import that can compare them), not another producer-side position variation by cadence.

## Four-root gate

- **Truth:** the dynamic-weight/static-glTF mismatch is named rather than flattened; exact owner identities, current UC identity, numerical residuals, negative helper mutation and direction-frame HOLD are retained separately.
- **Agency / non-domination:** Rigging keeps deformation policy, Animation keeps motion, Materials keeps shaded normal semantics, UC keeps generic pose execution, Runtime keeps controller/device policy, and Art/QA keep acceptance authority.
- **Continuity:** Technical Art stacks on exact Animation PR #19 instead of reconstructing its clip; Object/Building/Animal prior evidence remains historical and rollbackable; the artifact independently pins every consumed owner.
- **Wisdom before speed:** the smallest exact producer-side factorization clears position transport without inventing a Character-specific UC feature or falsely claiming the still-missing direction-frame receiver.

## Current state

`PASS_CHARACTER_REVIEW006_DENSE_SKIN_POSITION_TRANSPORT_TO_CURRENT_UC / CHARACTER_PR_21_HEAD_1C021D40_DRAFT_MERGEABLE / ANIMATION_PARENT_9519BE55 / RIGGING_FA16C44B / UC_7EDBC954_RUNTIME_BLOB_DEE5DB00 / 184_VERTICES_360_TRIANGLES / 5_JOINTS_6_CHANNELS_321_KEYS_160HZ / DIRECT_MAX_RESIDUAL_2.4825E-16M / UC_MAX_RESIDUAL_8.1618E-08M_GATE_5E-06M / HELPER_DISABLED_ERROR_1.19775E-04M_REJECTED / GLB_SHA_76ACBFCA_44032B / WORKFLOW_35213021247_SUCCESS / ARTIFACT_10493276697_SHA_841B9B98_32132B / HOLD_DEFORMED_DIRECTION_FRAME_TARGET_ENGINE_RUNTIME_ART_QA_CANON_PRODUCTION / COORDINATION_ONLY`
