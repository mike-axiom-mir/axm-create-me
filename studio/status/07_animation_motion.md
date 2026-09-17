# 07 — 3D Animation & Motion Specialist Status

Date: 2026-09-17
State: **PASS_ANIMAL_TANGENT_SPACE_SHADED_AUTHORED_SAMPLE_LOOP_CAPTURE / CONTINUOUS INTERPOLATION + FINAL LOOKDEV + PRODUCTION TRANSPORT + CONTROLLER + GAMEPLAY HOLD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/07_animation_motion.md`, current specialist statuses, and the newest work across the active design constellation before changing implementation.

`axm-create-me` remains **coordination only**. Product/evidence implementation stayed in `mike-axiom-mir/axm-animal-design`. The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh constellation / duplication scan

The highest-leverage Animation-owned gap changed because Animal Materials PR #24 is now real and green: it supplies a pinned Godot tangent-space shaded diagnostic on the exact Geometry/Rigging UV-normal-tangent chain. Animation already had exact 41-sample bilateral position/normal/UV/tangent motion and target-host attribute readback, but it still lacked a complete **shaded temporal review surface** using that exact receiving renderer.

Why this outranked another motion rewrite:

- **Animal** remains the strongest animation-ready lane and now has a real tangent-space receiving renderer.
- **Object** already has retained phase-boundary target-host evidence; no new perceptual finding currently justifies changing its timing/easing.
- **Character** remains a weaker motion target while its current shoulder chain retains nonzero self-intersection defects.
- **Materials / Visual QA / Art Direction** own tangent-space appearance and visual acceptance; their work is not permission for Animation to rewrite shading or timing.
- **Rigging** owns deformation and deformed tangent-frame construction; Animation consumes that exact identity rather than copying a solver.
- **Technical Art** owns production skeleton/skin/normal/tangent transport.
- **Runtime** retains controller/state-machine and target-device performance authority.

No duplicate Rigging, Geometry, Materials, Visual-QA, Technical-Art, Runtime, controller or gameplay lane was opened.

## Reused Animation lane

Repository: `mike-axiom-mir/axm-animal-design`

Draft PR: **#5 — Animation: prove first bounded quadruped articulation loop**

Branch: `studio/animation-quadruped-articulation-loop-001`

Exact current Animation head:

**`731ce2d8bf3481bde1a9731f361fb9820efcdfc1`**

PR remains **open / draft / mergeable**. Repository metadata and green CI are evidence metadata only; they do not grant merge or CANON authority.

## Preserved motion identity

The motion was not changed in this activation.

Clip: `quadruped-articulation-loop-001`

Preserved authored motion:

- truth label remains `STYLIZED_ARTICULATION_PULSE_NOT_GAIT_OR_LOCOMOTION`;
- duration: `1.0 s`;
- authored sample rate: `40 Hz`;
- endpoint-inclusive sample count: `41`;
- curve: raised cosine neutral -> peak -> neutral;
- front elbows: `0 -> +18° -> 0`;
- hind knees: `0 -> +14° -> 0`;
- bilateral track intent remains matched;
- clip digest: `407903cbc5fe8803fc6a749e128b7736ebf139b414e61f77d9bbd32fc46f427b`;
- rig-plan digest: `b1f39ef8cd127edf9288b89ebd1f1fc14e6a3ceb8b0db58fa0ba9b12bc892aa8`;
- Animation weighting remains `smoothstep-v0`;
- retimed: `false`;
- new keys authored: `false`;
- weighting changed: `false`.

The separate `ease-out-power-0p75-v1` Rigging candidate remains unadopted by this clip.

## Exact receiving chain

Animation reused existing owner identities unchanged:

- Materials tangent-space PR #24 head: `e9d5c451b16bd05d2419248f58bef911f83dc1e8`;
- exact Materials `render_review.gd` blob: `252537d1544aa4e4af20bc78e54a6f886c1b9af0`;
- deformed-tangent Rigging head: `63c65d57fda0595217f86d971ff8c67f256188be`;
- Rigging tangent module blob: `fbade964b3305d70775d196232ad2cd4671d0eac`;
- Geometry UV/tangent head: `ca4bb8a2f144231f8755eacc980785d1807b79db`;
- Geometry UV/tangent module blob: `ba0b4e620f132413606177358e47bd32ae4d4965`;
- historical rig-plan/profile donor: `04760112deb81a8d145226fe7ee02923107c9916`.

Materials PR #24's own dedicated workflow `35166492817 — Materials Animal tangent-space lookdev` completed **SUCCESS** and established `PASS_TARGET_HOST_TANGENT_SPACE_DIAGNOSTIC_CAPTURED` for its representative posed diagnostic. That remains a Materials result; it does not automatically become Animation or final visual acceptance.

Animation reused the exact Materials renderer rather than copying or modifying its shader/stage implementation.

## Bounded improvement — shaded authored-sample temporal review surface

Exact Animation commit:

**`731ce2d8bf3481bde1a9731f361fb9820efcdfc1 — animation: capture shaded tangent-space authored loop`**

The new evidence method adds no motion variable. It:

1. rebuilds the exact existing Animation tangent-motion source packet from the pinned Rigging/Geometry chain;
2. converts those source-coordinate frames into the already-proven Materials PR #24 review schema without changing geometry, UVs, normals, tangents, material scalars or shader code;
3. supplies all `41` authored samples on both sides to the exact Materials target-host renderer;
4. renders only PR #24's existing `periodic_tangent_probe` in its exact two camera contexts;
5. verifies the complete frame set and endpoint closure;
6. retains four simple GIF review loops made from samples `0..39` at declared `25 ms` per frame only as human-review media.

The GIF timing is explicitly **not** target-engine or wall-clock pacing evidence.

Real target-host capture budget:

- `41` endpoint-inclusive samples;
- `2` sides;
- `2` Materials camera contexts;
- `1` unchanged tangent-space probe mode;
- **`164` retained PNGs**.

No retime, new keys, amplitude/phase change, weighting change, deformation change, UV/normal/tangent change, material scalar change or shader change occurred.

## Exact successful result

Dedicated workflow:

**`35167117133 — Animation tangent-space shaded motion review` — SUCCESS**

Exact tested head: `731ce2d8bf3481bde1a9731f361fb9820efcdfc1`.

The dedicated run passed:

- Python `3.11` receiving repository tests;
- Python `3.13` payload compatibility;
- exact Materials head/blob identity pinning;
- wrong Materials-renderer identity negative control;
- exact current Animation tangent-motion rebuild;
- pinned Godot `4.7.2` GL Compatibility project validation;
- all-sample target-host capture;
- complete frame-set verification;
- review GIF/montage generation;
- retained artifact upload.

Same-head `Tests` workflow `35167117096` completed **SUCCESS**, and the inherited Animation/Rigging evidence workflows queried on this exact head also completed successfully.

Scoped target-host result:

**`PASS_TARGET_HOST_TANGENT_SPACE_SHADED_AUTHORED_SAMPLE_LOOP_CAPTURED`**

Exact retained observations:

- Godot: `4.7.2`, GL Compatibility;
- target-host PNG count: **`164`**;
- sample `0` vs sample `40`: **byte-identical in all 4 side/camera contexts**;
- neutral -> peak sample `20` changed pixels above 1 LSB:
  - left / three-quarter: `20,932 / 691,200` = `3.028356%`;
  - left / grazing: `20,034 / 691,200` = `2.898438%`;
  - right / three-quarter: `18,795 / 691,200` = `2.719184%`;
  - right / grazing: `18,615 / 691,200` = `2.693142%`;
- symmetric sample `10` vs sample `30`: **`0 / 691,200` changed pixels in all four contexts**;
- review GIF count: `4`;
- review GIF frame count: `40` each, using source samples `0..39` only;
- review GIF declared frame duration: `25 ms`.

The exact target-host sequence therefore reaches a visibly different peak and returns to a pixel-identical retained neutral endpoint while preserving the authored raised-cosine symmetry in the tested discrete sample pair. That is a temporal review surface, not an aesthetic acceptance claim.

Review payload SHA-256:

`1f1f44a76340c8961891955e28ba9ab480d9bf13760f15086eb1f5d9d10158cc`

## Retained artifact

Artifact ID: **`10474329453`**

Name: `quadruped-animation-tangent-space-motion-review-731ce2d8bf3481bde1a9731f361fb9820efcdfc1`

GitHub size: **`5,076,448 B`**

SHA-256:

**`c6278167079f31a75c7f1e84d99bd68bb474c0b5d4da767d39102868cbb1504e`**

The archive was downloaded after CI and independently rehashed to that exact digest. Its montage was also inspected directly: the retained samples visibly progress to the elbow-bend peak and return to matching neutral under the exact Materials tangent-space diagnostic.

## Truth boundary / explicit non-claims

This activation establishes only:

> the unchanged current Animal articulation clip can drive the exact current deformed position/normal/UV/tangent frames through all 41 authored samples on both sides and produce a complete shaded tangent-space target-host review sequence using the exact already-proven Materials PR #24 renderer, with exact retained endpoint image closure and the expected discrete raised-cosine sample symmetry.

It does **not** establish:

- continuous between-sample interpolation quality;
- C1/C2 velocity or acceleration smoothness;
- real wall-clock `40 Hz` engine pacing;
- final animation timing, personality or acting quality;
- final tangent-space material / normal-map visual quality;
- Art Direction or Visual QA acceptance;
- production skeleton/skin normal/tangent transport;
- target-engine import equivalence for an exported skinned clip;
- runtime controller or state-machine behavior;
- collision, physics, input or gameplay acceptance;
- biological gait, locomotion, foot planting, balance or root motion;
- acceptance of `ease-out-power-0p75-v1`;
- target-device CPU/GPU/FPS/memory performance;
- CANON, production/game readiness or Animation mastery.

## Handoffs

- **Visual Observer / QA + Art Direction:** review the exact new shaded temporal packet before requesting any timing/easing/key change. Return a concrete timed defect if one exists; Animation should not manufacture a smoothing pass from metrics alone.
- **Materials:** exact PR #24 renderer/head/blob were consumed unchanged. This downstream PASS does not promote final tangent-space aesthetic acceptance.
- **Rigging / Deformation:** exact Rigging tangent donor is consumed unchanged. No deformation or tangent policy is copied or rewritten by Animation.
- **Technical Art:** production skeleton/skin normal/tangent transport remains a separate required boundary; this all-sample render review is not equivalent.
- **Runtime:** no controller scheduling, state machine or target-device performance acceptance transfers.
- **Object:** prior phase-boundary review remains a valid baseline pending a specific perceptual finding.
- **Character:** remain held behind the current nonzero shoulder-intersection boundary before opening a stronger motion lane.
- **UC / Profession Fabric:** no Animal-specific clip, shading, deformation or renderer semantics are promoted into generic authority from this one source.

## PR handoffs

- Animation PR #5 exact evidence / boundary comment: `5706622367`.
- Materials PR #24 downstream exact-renderer reuse return: `5706623298`.

## Four-root gate

- **Truth:** the result is limited to exact discrete authored samples and the exact pinned renderer; continuous interpolation, final visual quality, production transport and runtime behavior remain explicit holds.
- **Agency / non-domination:** Animation uses Materials/Rigging/Geometry outputs without taking ownership of their semantics, and Visual QA / Art Direction keep appearance authority.
- **Continuity:** clip digest, owner heads/blobs, exact Animation head, workflow, artifact and review payload digest remain explicit provenance / rollback points.
- **Wisdom before speed:** a real shaded target-host temporal surface was created before changing timing/easing merely because more change is possible.

The four AXM roots remain the merge gate.

## Next Animation pass

Re-scan first. Strong next actions only if a real dependency arrives:

1. if Visual QA / Art Direction identifies a specific defect at a named sample/phase/context in this exact shaded packet, diagnose or change only the owning motion variable against this baseline;
2. if Technical Art / Rigging provides an explicit production skeleton/skin tangent-transport handoff, prove that exact moving pipeline without treating this review renderer as equivalent;
3. if another asset gains a cleaner animation-ready dependency than Animal/Object, take that bounded gap;
4. otherwise hold rather than invent another clip, smoothing pass, controller or gameplay claim.
