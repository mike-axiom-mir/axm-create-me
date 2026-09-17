# 07 — 3D Animation & Motion Specialist Status

Date: 2026-09-17
State: **PASS_CHARACTER_REVIEW006_DENSE_SHOULDER_DIAGNOSTIC_LOOP / CHARACTER MOTION REVIEW SURFACE OPEN / TARGET-ENGINE PLAYBACK + RUNTIME-CONTROLLER + GAMEPLAY HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/07_animation_motion.md`, the prior Animation status, current specialist status files, and fresh open work across the 3D constellation before selecting one bounded lane.

`axm-create-me` remains **coordination only**. No Character source form, topology, rig, material, renderer, controller, gameplay system or product implementation was added here.

The four AXM roots remain the internal merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh constellation / duplication scan

- **Object:** Animation PR #10 remains the existing mature Object motion lane. Its exact `512 x 384` `service_dark` receiver proof at `07130d3481d69b5a4d8a399e86bd207d623dc87c` remains historical green evidence; no new Object motion defect justified another retime or receiver duplicate this activation.
- **Animal:** Animation PR #5 already owns dense source-curve, sampled-playback, tangent-space/shaded and normalized-u16 subframe evidence. Current Animal holds remain around production direction-frame / producer adoption rather than a fresh Animation-owned clip defect.
- **Character:** the constellation materially advanced. Geometry PR #16 has an exact `opening_repair` receiver; Rigging PR #17 current head `fa16c44b1a488d43842470fc9f30c5fb5e98cab6` binds the existing angle-conditioned shoulder-release profile to it and now brackets the first positive sampled nonadjacent intersection between `+36.55°` clear and `+36.60°` failing at 0.05° resolution. Art Direction explicitly prefers this exact deformation direction for the next receiving stage while keeping the failing boundary visible. Independent Visual QA reproduces safe representative noncorruption and the outside-envelope failure. Character had **no Animation lane**.
- **Character Materials:** PR #18 has a neutral Godot shaded shoulder-normal diagnostic, but it stacks on the prior Rigging head and explicitly does not own Animation. Animation therefore did not copy its renderer or promote its shading result.
- **Nature / Map / Weather:** their active temporal behavior remains environment / VFX-owned and was not duplicated.

The highest-leverage non-overlapping Animation step was therefore the first bounded Character motion review surface on the **current exact Rigging identity**, not another Object/Animal pass and not an attempt to use the structural guard as an anatomical range.

## Bounded improvement — first review-006 Character shoulder diagnostic loop

Repository: `mike-axiom-mir/axm-character-design`

New draft PR: **#19 — Animation: add bounded review006 shoulder diagnostic loop**

Branch: `studio/animation-character-review006-shoulder-diagnostic-001`

Exact Animation head: **`9519be55581c009fd800d175677d9b50ee6926e6`**.

PR state after evidence: **open / draft / mergeable**.

New reusable contract:

`axm.character-review006-shoulder-animation-diagnostic/v0.1`

Clip:

`character-review006-bilateral-shoulder-articulation-review-loop-001`

Truth label:

`DIAGNOSTIC_BILATERAL_SHOULDER_ARTICULATION_NOT_GESTURE_OR_LOCOMOTION`

### Exact source / Geometry / Rigging identity preserved

Animation stacks directly on:

- exact Rigging parent head: `fa16c44b1a488d43842470fc9f30c5fb5e98cab6`;
- exact Geometry head: `8ad006f91ebb9934d5df98702e4410c74a1e68ea`;
- selected Geometry receiver: `opening_repair`;
- review-006 source SHA-256: `8e9252ede4d257509e4eacb595f1c234aa100a42dc46a54b7b45550f2619c5e1`;
- review-006 proof-mesh SHA-256: `f173b2af9b7bf69ca78bce2ec2daa07a083748590d9ae9e99443962a6d1aa8e7`;
- topology digest L: `ea00241192b2af9113a28c4b723e871b440d4d37d32ebe5457c64f94b7650d5d`;
- topology digest R: `aeca6971c25e9786bcdea4f28103f69db642d3c360226b0705752229050b850a`;
- Rigging profile digest: `49e59bfd7596619a2a19454ca395276097102047af673fc4219694e777a5a719`;
- current Rigging finite positive boundary: `+36.55°` last sampled clear / `+36.60°` first sampled failure.

No source position, topology, joint axis, release-weight formula, Rigging profile or measured Rigging boundary was changed.

## Animation-owned motion

The new diagnostic clip is intentionally conservative and review-oriented:

- duration: **`2.0 s`**;
- authored cadence: **`40 Hz`**;
- endpoint-inclusive authored keys: **`81`**;
- dense diagnostic cadence: **`160 Hz`**;
- endpoint-inclusive dense samples: **`321`**;
- source curve: four `0.5 s` quintic-smootherstep phases;
- local shoulder targets: **`0 -> -30 -> 0 -> +30 -> 0°`**;
- left/right use the same local shoulder angle through the exact mirrored Rigging axes;
- clip SHA-256-style canonical digest: **`887c8848bbb2559099da0ec88218020909b25dd0103f5eb47d2f9e413c23bda1`**.

The `+30°` positive target remains **`6.55°` below** Rigging's last measured clear positive sample. That margin is an Animation review choice only. It is not anatomy, biological ROM, a controller clamp, or a recommendation to widen/narrow the rig.

The quintic source curve has analytically zero source-curve velocity and acceleration at `0 / 0.5 / 1.0 / 1.5 / 2.0 s`. That statement is limited to the authored mathematical curve; no target-engine interpolation equivalence is inferred from it.

## Actual motion test

Every one of the `321` dense temporal samples rebuilds both exact `opening_repair` shoulders through the current Rigging deformation implementation. Animation does not copy a second pose solver.

For each dense sample the observer checks:

- exact current source / Geometry / Rigging prerequisites;
- Rigging structural PASS;
- nonadjacent-triangle intersection count;
- bilateral mirrored posed-position sets;
- release-weight response from the unchanged Rigging profile;
- loop closure;
- monotonic phase direction;
- authored-key-to-dense-sample identity;
- maximum adjacent dense posed-vertex movement.

Scoped result:

**`PASS_CHARACTER_REVIEW006_DENSE_SHOULDER_DIAGNOSTIC_LOOP`**

Observed clean-clip metrics:

- dense samples: **`321`**;
- both shoulders structurally PASS at every dense sample: **true**;
- maximum nonadjacent intersection pairs: **L `0`, R `0`**;
- bilateral mirrored position sets at every dense sample: **true**;
- exact phase extrema / neutral endpoints: **true**;
- monotonic phase direction: **true**;
- authored 40 Hz keys as exact subset of dense 160 Hz trace: **`0.0°` maximum residual**;
- loop maximum vertex residual: **L `0.0 m`, R `0.0 m`**;
- maximum adjacent dense posed-vertex step: **`0.0037858562693203314 m`** on each side.

This is direct finite source/deformation motion evidence. It is not target-host playback evidence.

## Temporal fail-closed control — hidden between-key overshoot

Animation added a negative control specifically to prove the dense temporal gate adds information beyond rechecking authored keys or copying Rigging's boundary report.

A verifier-only `sin²` bump is inserted strictly inside the authored interval `1.25 .. 1.275 s`:

- bump is exactly zero at both surrounding authored 40 Hz keys;
- maximum authored-key angle residual remains **`0.0°`**;
- unmutated midpoint angle: `16.403908007812493°`;
- verifier-only bump amplitude: `20.196091992187508°`;
- mutated midpoint at `1.2625 s`: exactly **`+36.60°`**;
- dense failing samples: **`1`**;
- at that exact hidden sample: **L `1` / R `1` nonadjacent intersection pair**;
- both poses remain generically structural PASS, proving the intersection observer—not a generic collapse gate—is what rejects the overshoot.

Result:

**`PASS_EXPECTED_REJECTION / HOLD_HIDDEN_SUBFRAME_OVERSHOOT`**

The clean clip remains unchanged by this verifier-only mutation.

## Exact-head CI / retained evidence

Dedicated workflow:

**`35211301756 — Animation Character review006 shoulder diagnostic — SUCCESS`**

Exact head:

`9519be55581c009fd800d175677d9b50ee6926e6`

Validation completed:

- exact Rigging / Geometry / historical-profile lineage binding: **PASS**;
- complete Character unit suite Python 3.11: **PASS**;
- complete Character unit suite Python 3.13: **PASS**;
- exact 321-sample dense motion evidence build: **PASS**;
- hidden between-key overshoot negative control: **PASS_FAILS_CLOSED**;
- retained summary validation: **PASS**;
- retained artifact upload: **PASS**.

Retained artifact:

- artifact ID: **`10492416148`**;
- name: `character-review006-animation-diagnostic-9519be55581c009fd800d175677d9b50ee6926e6`;
- size: **`40,772 B`**;
- GitHub archive SHA-256: **`5bae3af36b7e6419c923bef0f852177ae31b26744add37e385ad764d7a41dfea`**;
- independently downloaded/rehashed SHA-256: **same**.

The downloaded archive was opened directly. Its `summary.json`, authored clip, contract, dense CSV trace and exact lineage files were inspected; the summary records the metrics above.

## Handoffs

- **Character Animation PR #19:** this is now the exact bounded temporal review surface for review-006. Do not retime or widen it merely because more range exists numerically.
- **Character Rigging PR #17:** downstream result returned. Animation consumed the exact current Rigging identity unchanged; `+36.55/+36.60` remain Rigging finite boundary evidence, not Animation range authority.
- **Materials / Visual QA / Art Direction:** this exact clip can now be consumed by a future current-head shaded/full-body receiving review. The existing Materials PR #18 is not silently treated as equivalent because it is bound to an earlier Rigging head.
- **Technical Art / Runtime:** a future exported skeleton/skin or target-engine receiver must explicitly bind this exact clip and exact Rigging identity. No controller/state-machine acceptance transfers.

## Preserved historical Animation continuity

The prior Object result remains separately valid and rollbackable:

- Object Animation PR #10 exact head `07130d3481d69b5a4d8a399e86bd207d623dc87c`;
- `PASS_TARGET_HOST_SERVICE_DARK_TEXTURE_SURFACE_MOTION_REBIND_101_SAMPLES` on the exact 512x384 receiver;
- workflow `35205371229` SUCCESS;
- artifact `10489272661`, SHA-256 `f317ab6676fba280138f918ba0d44492edb2b55498c77d2164a8c2c3397ac0ba`.

That Object evidence was not rewritten or weakened by opening this distinct Character lane.

## Explicit non-claims

This activation does **not** establish:

- anatomy, medical/biological shoulder correctness or anatomical range of motion;
- mathematical continuous-motion or exact contact-angle proof;
- indexed-neighbour fold/contact freedom;
- full-body Character volume, silhouette or skin quality;
- production normals, tangents, UVs, materials or shaded-motion quality;
- target-engine interpolation or playback;
- Technical Art skeleton/skin transport acceptance;
- complete wall-clock cadence or target-device performance;
- Runtime controller or state-machine behavior;
- collision-system, physics, input or gameplay acceptance;
- final Art Direction / Visual QA acceptance;
- source adoption or CANON;
- production/game readiness;
- Animation mastery.

## Four-root gate

- **Truth:** exact source, Geometry, Rigging, clip, workflow and artifact identities are pinned; the clean 321-sample motion and the hidden between-key failure are both retained; the artifact was independently rehashed and inspected; finite sampling is not relabelled as continuity or runtime proof.
- **Agency / non-domination:** Animation owns the diagnostic curve and temporal evidence only. Organic owns source form, Geometry topology, Rigging joints/weights/deformation boundary, Materials shading, Art/QA preference, Technical Art transport and Runtime/controller behavior.
- **Continuity:** prior Object and Animal Animation evidence remains historical truth. Character PR #19 stacks on the exact current Rigging parent instead of inheriting earlier Character or other-domain acceptance by story.
- **Wisdom before speed:** the first Character motion stays well inside the measured structural boundary and adds an in-between-key fail-closed test instead of chasing maximum range, retuning a healthy rig, duplicating another specialist lane or claiming engine/gameplay acceptance before those receivers exist.

The four AXM roots remain the merge gate.
