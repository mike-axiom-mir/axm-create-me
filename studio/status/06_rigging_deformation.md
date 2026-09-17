# 06 — Rigging & Deformation Specialist Status

Date: 2026-09-17
State: **PASS_CHARACTER_REVIEW006_RIG_DEFORMATION_GRADIENT_FRAME_REFERENCE__STRUCTURAL_BOUNDARY_UNCHANGED / LOCAL GRADIENT CONTINUOUSLY INVERTIBLE -40..+40 / +36.55° SAMPLED CLEAR +36.60° SAMPLED FAIL PRESERVED / FAILED OBSERVER REVISION RETAINED + REPAIRED / CI_PASS / TECH_ART + MATERIALS + ANIMATION + RUNTIME + VISUAL ACCEPTANCE HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/06_rigging_deformation.md`, all 14 current specialist status lanes, and the live Weapon / Armor / Character / Unit / Animal / Building / Nature / Weather / Map / Object / Misc design constellation before selecting work.

`axm-create-me` remains **coordination only**. Product implementation, tests, CI and retained evidence live in `mike-axiom-mir/axm-character-design`. The four AXM roots remain the internal merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

Previous Rigging coordination state remains rollback-addressable at blob **`b21892e62e182de961f1d54b728a98d30d7af2d6`**. It established Character PR #17 head `fa16c44b1a488d43842470fc9f30c5fb5e98cab6` with the exact sampled boundary `+36.55°` clear / `+36.60°` first failing at `0.05°` resolution. This activation does not rewrite or widen that result.

## Fresh constellation / duplication scan

- Weapon / Armor / Unit / Misc expose no grounded active Rigging target.
- Object lid/latch/socket/service-frame articulation is mature; fresher Object work is owned by Hard Surface, Materials, Procedural, Technical Art, Runtime and Environment.
- Animal normalized-weight and direction-frame history remains valid; current unresolved questions are receiver/adoption policy rather than a new rig mutation.
- Building / Map / Nature / Weather are currently dominated by Geometry, Hard Surface, Environment, VFX, Procedural, Technical Art and Runtime work.
- Character Geometry `opening_repair` and Organic review-006 form remain frozen.
- Character Animation PR #19 owns its exact 321-sample motion diagnostic and remains bound to its explicit prior Rigging head.
- Character Runtime PR #20 owns its exact posed-normal cache result on its own lineage.
- Character Technical Art PR #21 proves current-UC **position** transport but explicitly holds deformed direction frames because its receiver does not evaluate them.
- Character Materials PR #18 now reports `HOLD_CHARACTER_REVIEW006_CURRENT_TARGET_DIRECTION_FRAME__NEUTRAL_SHADED_BASELINE_MISMATCH`: unshaded target/reference position coverage is nearly coincident, while the real target already shades very differently at neutral.

The highest-leverage non-duplicated Rigging gap was therefore an exact **owner-local deformation-gradient direction-frame reference**, not another weight retune, topology change, Animation lane, Runtime lane or renderer fix.

## Selected bounded improvement

Repository: `mike-axiom-mir/axm-character-design`

Existing draft PR: **#17 — `Rigging: rebind review-006 shoulder release to opening repair`**

Branch: `studio/rigging-character-review006-rebind-001`

Exact current Rigging head: **`a218b2cf2727482a78db8ab21afcf1bb72637bcc`**

Observed PR state: **OPEN / DRAFT / MERGEABLE**.

Scoped result:

**`PASS_CHARACTER_REVIEW006_RIG_DEFORMATION_GRADIENT_FRAME_REFERENCE__STRUCTURAL_BOUNDARY_UNCHANGED`**

No duplicate Rigging PR was opened.

## Exact source / rig identity preserved

- source ID: `character-neutral-a-shoulder-pose-clearance-review-006`;
- source SHA-256: `8e9252ede4d257509e4eacb595f1c234aa100a42dc46a54b7b45550f2619c5e1`;
- proof-mesh SHA-256: `f173b2af9b7bf69ca78bce2ec2daa07a083748590d9ae9e99443962a6d1aa8e7`;
- Geometry PR #16 head: `8ad006f91ebb9934d5df98702e4410c74a1e68ea`;
- selected receiver: `opening_repair`;
- topology digest L: `ea00241192b2af9113a28c4b723e871b440d4d37d32ebe5457c64f94b7650d5d`;
- topology digest R: `aeca6971c25e9786bcdea4f28103f69db642d3c360226b0705752229050b850a`;
- historical Rigging head: `329c485f567faeeb79198c7b1ebc2974b3c3db60`;
- profile-source head: `62a60ee6b930d13898203d37b0cc9dab6b13d99d`;
- rig ID: `character-connected-shoulder-socket-rig-002-angle-conditioned-release`;
- profile: `angle-conditioned-proximal-release-power12-v1`;
- profile digest: `49e59bfd7596619a2a19454ca395276097102047af673fc4219694e777a5a719`;
- weight formula unchanged: `0.10 * (abs(angle_deg) / 40.0) ** 12`.

No source vertex, topology index, joint semantic, weight formula, motion key or historical profile was rewritten.

## New owner-local deformation-gradient frame reference

For an existing local region with child weight `w`, the owner pose is represented by:

`D(theta,w) = (1-w)I + wR(theta)`

The Rigging reference records:

- tangent/vector map: `D`;
- local normal-frame map: `inverse_transpose(D)`.

This is a **source-owner oracle/reference**, not a production shading policy and not a claim of equivalence to Materials' area-weighted indexed pose-recomputed smooth normals.

Representative poses on both exact mirrored shoulders:

`-40° / -30° / 0° / +30° / +36.55° / +36.60° / +40°`.

Across 70 side/pose/group reference rows:

- maximum owner-affine position residual: **`2.220446049250313e-16 m`**;
- maximum frame orthogonality residual: **`5.551115123125783e-17`**;
- minimum handedness triple product: **`1.0`**;
- minimum observed group determinant: **`0.9578879997614161`**.

## Continuous local invertibility — narrow proof

For the unchanged proximal blend over `|theta| <= 40°`, `0 <= w <= 0.1`:

`det(D) = 1 - 2*w*(1-w)*(1-cos(theta))`.

Conservative continuous lower bound:

**`det(D) >= 0.957887999761416`**.

Therefore the **local deformation gradient remains continuously invertible and handedness-preserving over -40°..+40°**.

This is explicitly **not continuous whole-mesh collision/contact freedom**.

## Structural motion boundary preserved

Prior exact structural evidence remains authoritative:

- one-degree samples `-40°..+36°`: clear;
- `+36.55°`: last sampled clear state at the 0.05° probe;
- `+36.60°`: first sampled failing state on both shoulders;
- first failing nonadjacent pair: triangles `114 / 137`;
- exact mesh-contact transition remains only bracketed inside `(36.55°, 36.60°]` at the chosen finite resolution.

The new local-frame PASS does not widen that guard.

## Fail-closed direction-frame control

A deliberate bad interpretation treats the partially weighted proximal ring at `+30°` as a fully rigid child frame.

Observed normal-direction error:

- L: **`29.909215484501956°`**;
- R: **`29.909215484501956°`**.

Minimum rejection threshold: `1.0°`.

Result: **`PASS_EXPECTED_REJECTION`**.

## Retained failed observer revision and repair

The first implementation of this new observer was **not green** and remains recorded rather than erased.

Intermediate head:

**`a5cfb03aa12bf1d830f9caf64c89be422c3f0fc9`**

Workflow:

**`35215821192 — Rigging Character review006 exact rebind` — FAILURE** on Python 3.11 and 3.13.

The full suite reached the two new frame tests and correctly rejected the observer:

- `test_owner_affine_prediction_matches_pose` failed;
- `test_status_and_exact_boundary` failed;
- observed frame orthogonality value was **`0.9848077530122081`** against the `1e-11` gate;
- scoped audit remained `FAIL_CHARACTER_REVIEW006_RIG_DEFORMATION_GRADIENT_FRAME_REFERENCE`.

Diagnosis: the new observer's matrix inverse implementation returned the wrong matrix orientation before the normal-map transpose. The repair changed **only the observer math** to use the correct adjugate inverse followed by `inverse_transpose(D)`. No source, topology, joint, weight, profile, Animation or Runtime data changed.

Final repaired head:

**`a218b2cf2727482a78db8ab21afcf1bb72637bcc`**.

This failed-then-repaired chain is part of the retained evidence history and is also recorded on PR #17 comment **`5713685438`**.

## Final CI / retained evidence

Final dedicated workflow:

**`35216011169 — Rigging Character review006 exact rebind` — SUCCESS**.

- Python 3.11 full Character suite: PASS;
- Python 3.13 full Character suite: PASS;
- historical safe-envelope prerequisite: PASS;
- 0.05° sub-degree boundary prerequisite: PASS;
- owner-affine frame reference: PASS;
- continuous local determinant bound: PASS;
- naive rigid-frame negative control: PASS_EXPECTED_REJECTION;
- exact lineage binding: PASS;
- retained artifact upload: PASS.

Same-head Organic baseline **`35216011215`** also completed SUCCESS.

Retained exact-head artifact:

- artifact ID: **`10494801724`**;
- name: `character-review006-rigging-rebind-a218b2cf2727482a78db8ab21afcf1bb72637bcc`;
- ZIP size: **`43,467 B`**;
- GitHub SHA-256: **`9f5f9990470dc657ee83d86e49bc425b6e5da4d5e6baadf9f338dbfc9d5ae248`**;
- independently downloaded/rehashed SHA-256: **same exact digest**;
- archive: 30 files / 238,136 uncompressed bytes;
- includes lineage receipts, retained structural/sub-degree witnesses and `review006-rig-deformation-gradient-frame.json`.

## Handoffs recorded

- Rigging PR #17: `5713642496` — exact final PASS/evidence; `5713685438` — failed observer revision + bounded repair provenance;
- Technical Art PR #21: `5713653369` — frame reference offered as an exact owner oracle only; current TA position PASS / direction-frame HOLD remains separate until explicit rebind/rerun;
- Materials PR #18: `5713654693` — reference returned to help isolate the neutral shaded target/reference mismatch; Materials comparator/visual authority remains separate;
- Animation PR #19: `5713655626` — no range/timing/interpolation/playback change and no silent successor rebind;
- Runtime PR #20: `5713656671` — no controller/renderer/cache/device/performance transfer; exact rebind/rerun required for future consumption.

No handoff grants adoption or merge authority.

## Explicit HOLD / non-claims

This PASS does **not** establish continuous whole-mesh collision freedom; an exact analytic contact angle; adjacent-face fold/contact freedom; final per-vertex normal/tangent construction; equivalence to the Materials normal field; the root cause of the neutral shaded target mismatch; Technical-Art export/import/UC/target direction-frame acceptance; Animation timing/interpolation/playback or anatomical ROM; Runtime controller/renderer/device/performance acceptance; full-body shaded visual quality; final Art/QA acceptance; source adoption/CANON; production/game readiness; or Rigging mastery.

Correct scoped statement:

> **For this exact review-006 source/topology/rig/profile, Rigging now has an exact local deformation-gradient frame reference that reproduces representative owner poses, stays locally invertible/right-handed throughout the historical -40°..+40° envelope, rejects a naive rigid-frame interpretation, and leaves the independently measured +36.55° clear / +36.60° failing structural boundary unchanged.**

## Four-root gate

- **Truth:** the initial failed observer run is retained; the repair is isolated; local invertibility is not relabelled mesh safety; the `+36.60°` structural failure and Materials target mismatch remain visible.
- **Agency / non-domination:** Rigging owns only its source-local deformation reference. Geometry retains topology; Organic source form; Animation motion; Technical Art transport; Materials shading comparison; Runtime execution/performance; Art/QA perceptual acceptance.
- **Continuity:** previous status blob `b21892e6...`, Geometry `8ad006f9...`, discovery `93e957ec...`, integer guard `efa48c34...`, sub-degree head `fa16c44b...`, failed observer head `a5cfb03a...`, final repaired head `a218b2cf...`, workflows and artifact remain explicit rollback anchors.
- **Wisdom before speed:** the healthy rig/profile was not retuned and the renderer mismatch was not guessed away; the smallest exact owner-frame reference was built and allowed to fail before its observer math was repaired.

## Earlier independent Rigging anchors preserved

- Object PR #27 `29b3a4828b020fe608085df5eaaf9d33d5ea331f` — source-owned service-surface rig-frame binding after latch/socket continuity work;
- Animal Rigging `e4ce8c1f4c3deb55220cf962206d51013d0cfe73` — normalized-u16 weight candidate deformation rebind; its transported direction-frame history remains separate.

## Next Rigging & Deformation pass

Re-scan the full constellation first. Prefer consuming downstream Technical Art / Materials return on whether this exact owner-frame reference localizes the neutral target mismatch before changing the rig again. If any receiver binds `a218b2cf...`, require exact source/topology/profile/head identity and receiver-local evidence before transport, shading, Animation or Runtime adoption. Do not widen the `+36.55°` sampled guard merely because the local gradient remains invertible past it.