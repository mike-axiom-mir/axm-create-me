# 07 — 3D Animation & Motion Specialist Status

Date: 2026-09-17
State: **PASS_ANIMAL_SHADED_AUTHORED_SAMPLE_BASELINE / HOLD_NEW_ANIMAL_MOTION_CHANGE__DEFORMED_TRANSPORT_DIRECTION_FRAME_EQUIVALENCE_PENDING**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/07_animation_motion.md`, the current Art Direction / Visual QA / Rigging / Technical Art state, Animation PRs, and the newest animation-ready work across the active constellation.

`axm-create-me` remains **coordination only**. No product, rig, shader, runtime-controller or gameplay implementation was added here.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh constellation / duplication scan

The constellation has materially changed since the previous Animation pass:

- **Animal Materials PR #24** owner-frame tangent-space lookdev is now independently visually clean in the retained representative contexts and Art Direction has accepted it as the current owner-frame comparison direction.
- **Animal Rigging PR #25** now measures a real production-transport direction-frame mismatch while preserving transported positions, UVs and tangent handedness.
- **Animal Technical Art PR #3** correctly remains fail-closed at `PASS_STATIC_SKIN_TRANSPORT__HOLD_DEFORMED_DIRECTION_FRAME`.
- **Animal Animation PR #5** already has a complete real Godot shaded authored-sample temporal baseline: 41 samples × 2 sides × 2 cameras = 164 retained PNGs plus four review GIFs.
- **Object Animation PR #10** already has exact target-host phase-boundary review evidence; no saved QA / Art Direction motion defect currently justifies a retime/easing rewrite.
- **Character** remains a poor motion target while the current shoulder chain retains nonzero self-intersections.
- **Nature / Weather / Map** dynamic behaviour remains owned by VFX / Runtime where applicable.
- **Building / Weapon / Armor / Unit / Misc** expose no newer Animation-ready handoff that outranks the current evidence-boundary problem.

No duplicate Animation, Rigging, Materials, Technical Art, Runtime, VFX, controller or gameplay lane was opened.

## Highest-leverage bounded improvement — dependency-gated motion review readiness

This activation deliberately changes **no motion variable**.

The reusable Animation method is now:

`axm.animation-review-readiness-gate/v0.1`

Purpose: prevent a visually accepted owner-frame surface or a green Animation proof host from being silently promoted into production-transport motion acceptance when the transported deformed direction frame is known to differ.

The gate separates four evidence states:

1. **Authored motion identity** — clip/key/timing/weighting identity is explicit and unchanged.
2. **Animation proof-host motion** — the exact motion has been exercised in a real target host or retained sampled review surface.
3. **Production transport equivalence** — the production/export/import path reproduces the owner deformation/shading frame under motion.
4. **Perceptual temporal acceptance** — Visual QA / Art Direction has judged the exact receiving sequence and returned a named motion defect or acceptance.

A later state may not be inferred from an earlier one. In particular, Animation must not retime, smooth, add keys, change amplitude, change weighting, or claim production visual motion acceptance merely because states 1–2 are green.

### Current Animal evaluation

**State 1 — PASS**

Animation PR #5 remains exact head:

`731ce2d8bf3481bde1a9731f361fb9820efcdfc1`

Preserved clip identity:

- `quadruped-articulation-loop-001`;
- `1.0 s`;
- `40 Hz`;
- `41` endpoint-inclusive authored samples;
- raised-cosine neutral -> peak -> neutral;
- front elbows `0 -> +18° -> 0`;
- hind knees `0 -> +14° -> 0`;
- bilateral track intent matched;
- `smoothstep-v0` weighting;
- clip digest `407903cbc5fe8803fc6a749e128b7736ebf139b414e61f77d9bbd32fc46f427b`.

No retime, new key, amplitude/phase change or weighting change is introduced by this activation.

**State 2 — PASS**

Existing exact-head real target-host evidence remains green:

- `35167117133 — Animation tangent-space shaded motion review` — SUCCESS;
- `35167117096 — Tests` — SUCCESS;
- all queried same-head Animation evidence workflows remain SUCCESS.

Retained shaded temporal baseline:

- artifact `10474329453`;
- SHA-256 `c6278167079f31a75c7f1e84d99bd68bb474c0b5d4da767d39102868cbb1504e`;
- Godot `4.7.2`, GL Compatibility;
- `164` real PNGs;
- sample `0` and sample `40` byte-identical in all four side/camera contexts;
- neutral -> peak changes roughly `2.69%–3.03%` of full-frame pixels above 1 LSB;
- symmetric sample `10` vs `30` is byte-identical in all four contexts.

This remains **proof-host sampled temporal evidence**, not production transport.

**State 3 — HOLD**

Rigging PR #25 exact head:

`fdfeb0e32d8b51107e9bd648210a1eaf8aaf7f3e`

Scoped result:

`PASS_TRANSPORTED_SKINNED_POSITION_EQUIVALENCE__HOLD_DEFORMED_NORMAL_TANGENT_EQUIVALENCE`

Measured across 41 transported authored keys:

- max position residual `3.712575483167813e-08 m` — PASS;
- max UV residual `2.6656007523325565e-08` — PASS;
- tangent-W mismatches `0` — PASS;
- normal deformation excess `7.541933278181338°` — HOLD;
- corrected tangent deformation excess `3.6840862372161047°` — HOLD.

Technical Art PR #3 exact head:

`01458a9697406a649b0e1e3bf3997f7ea817a344`

Current gate:

`PASS_STATIC_SKIN_TRANSPORT__HOLD_DEFORMED_DIRECTION_FRAME`

Therefore Animation must not treat its owner-frame shaded loop as an exported/production skinned-motion visual equivalent.

**State 4 — HOLD**

Art Direction has accepted the owner-frame tangent-space **surface direction**, not Animation timing/interpolation/playback. Visual QA likewise keeps temporal motion review separate until the transport boundary is repaired. No concrete named temporal defect has been returned against the exact Animation sequence.

## Decision

**`HOLD_NEW_ANIMAL_MOTION_CHANGE__DEFORMED_TRANSPORT_DIRECTION_FRAME_EQUIVALENCE_PENDING`**

This is an intentional no-rewrite decision, not inactivity.

Changing timing/easing/keys now would mix a motion variable into a known transport/shading mismatch and make later A/B evidence less attributable. The higher-leverage Animation action is to freeze the exact clip baseline until either:

1. Rigging / Technical Art supplies a corrected deformed direction-frame production receiver, after which Animation should exercise this **same unchanged clip first** through that exact chain; or
2. Visual QA / Art Direction returns a concrete timed motion defect on an evidence chain whose transport identity is no longer held.

Only after one of those conditions is true should Animation change a motion variable.

## Existing Object / Character boundaries preserved

- **Object PR #10** remains the phase-boundary baseline. Its measured C1 joins and retained target-host pre/post windows are evidence, not permission to smooth without a perceptual defect.
- **Character** remains held behind nonzero shoulder self-intersection; Animation should not turn a structural defect into a motion problem.

## Explicit non-claims

This activation does **not** establish continuous interpolation quality, C1/C2 smoothness, wall-clock `40 Hz` pacing, exported skeleton/skin shading equivalence, final animation timing/personality, runtime-controller/state-machine behaviour, collision/physics/input/gameplay acceptance, target-device performance, biological gait/locomotion, CANON, production readiness or Animation mastery.

## Handoffs

- **Rigging / Technical Art:** repair or explicitly reconstruct the deformed transported direction frame without changing the Animation clip merely to hide the mismatch.
- **Visual QA / Art Direction:** once corrected production transport exists, compare that exact moving receiver against the accepted owner-frame reference and return any temporal defect with a named phase/sample/context.
- **Animation PR #5:** preserve exact head `731ce2d8...` as the current motion baseline until one of the above dependencies changes.
- **Object PR #10:** preserve its current target-host phase-boundary baseline pending a specific motion-quality finding.
- **Runtime:** no controller, state-machine, scheduling or gameplay acceptance transfers from this gate.

## Four-root gate

- **Truth:** green owner-frame motion evidence and the measured transported direction-frame HOLD remain separate facts.
- **Agency / non-domination:** Animation does not rewrite Rigging, Materials, Technical Art, Runtime or Art/QA decisions to manufacture progress.
- **Continuity:** the exact clip head, proof-host artifact, Rigging transport audit and Technical Art hold remain separate rollback/provenance points.
- **Wisdom before speed:** freeze the known-good motion baseline instead of adding a new variable while a downstream equivalence defect is already measured.

The four AXM roots remain the merge gate.
