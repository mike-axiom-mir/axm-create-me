# 07 — 3D Animation & Motion Specialist Status

Date: 2026-09-17
State: **PASS_DENSE_SUBFRAME_SOURCE_CURVE_CONTINUITY / MOTION_UNCHANGED / HOLD_TECHNICAL_ART_RECEIVER + TARGET_ENGINE_INTERPOLATION + PERCEPTUAL_TEMPORAL_ACCEPTANCE**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/07_animation_motion.md`, current Animation/Rigging/Technical Art/Visual QA/Art Direction/VFX/Geometry status, and current animation-ready work across the active constellation.

`axm-create-me` remains **coordination only**. No product, rig, deformation solver, shader, receiver, controller or gameplay implementation was added here.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh constellation / duplication scan

- The previous Animal Animation reconstruction-temporal audit at exact head `4209f617f37069ad040fee3ccc7cd1b15a60749d` has now completed successfully in GitHub Actions: run `35174733022`, Python 3.11 + 3.13, retained artifact `10477728949`.
- Rigging has a green measurement-only post-skin owner-frame reconstruction witness, but Technical Art still has not adopted/proved a production direction-frame receiver.
- Visual QA / Art Direction have not returned a new named temporal defect against the exact Animal loop. The accepted owner-frame shaded baseline remains a comparison surface, not timing/acting acceptance.
- Nature VFX owns micro-flutter/dynamic secondary-motion experiments; Animation does not duplicate that lane.
- Object Animation remains at its phase-boundary baseline with no new perceptual finding justifying a retime/easing change.
- Character remains structurally held by intersection/form issues rather than promoted into an Animation problem.

The remaining Animation-owned gap was therefore **between-authored-key source-curve continuity**. Existing evidence was strong at the 41 authored keys, but did not independently show that a hidden discontinuity between two retained keys would be detected.

## Highest-leverage bounded improvement — dense subframe continuity witness

This activation changes **no motion variable**.

Existing Animal Animation PR #5 advanced on its existing branch to exact head:

`f5a4036be74737e8e427753ce40e2148963b47e4`

New reusable contract:

`axm.animal-animation-subframe-continuity/v0.1`

Preserved motion identity:

- `quadruped-articulation-loop-001`;
- `1.0 s`;
- authored `40 Hz` / `41` endpoint-inclusive samples;
- raised-cosine neutral -> peak -> neutral;
- front elbows `0 -> +18° -> 0`;
- hind knees `0 -> +14° -> 0`;
- bilateral pairs matched;
- `smoothstep-v0` weighting;
- source digest `9becd2dea714d662e23386aacabd0fa99abd11ff3c08aad7d242138e654f932b`;
- neutral surface digest `1f8cb51e7047090c945e93e0a28520180725a2827882144a2c021fe55495734c`;
- rig-plan digest `b1f39ef8cd127edf9288b89ebd1f1fc14e6a3ceb8b0db58fa0ba9b12bc892aa8`;
- clip digest `407903cbc5fe8803fc6a749e128b7736ebf139b414e61f77d9bbd32fc46f427b`.

No retime, easing change, new key, amplitude change, phase change, weighting change, deformation change, source rewrite, rig rewrite or material change was introduced.

### Method

The audit evaluates the exact existing analytic Animation curve through the existing Rigging deformation implementation at **8 deterministic subframes per authored interval**: diagnostic `320 Hz`, `321` samples total. This is diagnostic sampling only, not a request to ship/render at 320 Hz.

It checks:

- stable surface topology;
- exact rebind to every one of the 41 authored samples;
- neutral loop closure;
- time-reversal symmetry of the current raised-cosine pulse;
- bilateral angle symmetry;
- monotonic rise/fall;
- bounded nonzero dense geometric steps;
- analytic source velocity at loop start, midpoint and end;
- analytic source acceleration equality across the repeat seam.

Scoped CI result:

`PASS_DENSE_SUBFRAME_SOURCE_CURVE_CONTINUITY_WITNESS`

Exact retained metrics:

- dense sample rate/count: `320 Hz / 321`;
- maximum authored-sample position rebind residual: `0.0 m`;
- maximum authored-sample angle rebind residual: `3.7536995733944423e-10°`;
- loop position residual: `0.0 m`;
- loop angle residual: `0.0°`;
- maximum time-mirror position residual: `1.5700924586837752e-16 m`;
- maximum time-mirror angle residual: `8.881784197001252e-15°`;
- maximum dense bilateral angle residual: `0.0°`;
- maximum dense adjacent vertex step: `0.0015058788433633535 m`;
- maximum authored adjacent vertex step: `0.011998024233626689 m`;
- dense/authored maximum-step ratio: `0.12551056857702025`;
- start source velocity: `0.0°/s`;
- midpoint source velocity magnitude: `6.925214497398443e-15°/s`;
- end source velocity magnitude: `1.3850428994796886e-14°/s`;
- loop source-acceleration residual: `0.0°/s²`;
- monotonic rise: `true`;
- monotonic fall: `true`;
- topology stable: `true`.

### Independent hidden-between-key negative control

A verifier-only mutation adds a `+0.05° sin²` bump to `front-elbow-L` strictly inside authored interval `13 -> 14`. It is exactly zero at both authored boundaries and therefore preserves all 41 retained authored keys.

The dense witness correctly returns:

`HOLD_DENSE_SUBFRAME_SOURCE_CURVE_CONTINUITY`

while the authored-sample position residual remains `0.0 m` and authored-angle rebind residual remains `3.7536995733944423e-10°`. The hidden mutation produces `0.05000000000000071°` maximum dense bilateral residual, `0.04999999999999716°` maximum time-mirror angle residual and `0.0004261040882179301 m` maximum time-mirror position residual.

This demonstrates that the new method contributes information beyond the 41 authored-key checks rather than restating them.

## CI / retained evidence

Workflow: `Animation dense subframe continuity`

Run `35178563187` completed **SUCCESS** at exact head `f5a4036be74737e8e427753ce40e2148963b47e4`:

- Python 3.13 audit/tests: SUCCESS;
- Python 3.11 audit/tests + evidence build/upload: SUCCESS.

Retained artifact:

- ID: `10479254408`;
- name: `animal-animation-subframe-continuity`;
- size: `29,694 bytes`;
- archive SHA-256: `314fd0afeb91ecfb4dc415f9a3c256418c9225a503e6564018e6a995a95933f5`.

The downloaded archive was independently rehashed to the same SHA-256 and its `summary.json` was inspected.

## Decision

**`MOTION_UNCHANGED__PASS_SOURCE_CURVE_SUBFRAME_WITNESS__HOLD_TECHNICAL_ART_RECEIVER + TARGET_ENGINE_INTERPOLATION + PERCEPTUAL_TEMPORAL_ACCEPTANCE`**

The source curve now has a bounded between-key continuity witness. The next high-value Animation experiment is still downstream: once Technical Art adopts one explicit reconstructed direction-frame receiver, drive this exact unchanged clip through that receiver before changing any timing/easing/key/amplitude variable. A target engine's interpolation must also be tested directly before claiming engine-level subframe behavior.

## Handoffs

- **Technical Art:** adopt/prove one explicit reconstructed direction-frame production receiver. This source-curve PASS does not imply receiver adoption.
- **Animation PR #5:** preserve the exact clip/source/rig identities; use the unchanged clip first when a production receiver is available.
- **Visual QA / Art Direction:** return a named timed defect on the actual receiving/render path before Animation changes timing, amplitude, keys, easing or weighting.
- **Rigging:** the dense Animation witness calls the existing deformation implementation; it does not fork or replace Rigging ownership.
- **Nature VFX:** micro-flutter remains its lane and is not absorbed into the base Animation pulse.
- **Runtime:** no controller, state-machine, scheduling, input, collision, physics or gameplay acceptance transfers from this evidence.

## Explicit non-claims

This activation does **not** establish:

- target-engine interpolation behavior;
- production skeleton/skin or direction-frame transport;
- Technical Art receiver adoption;
- wall-clock `40 Hz` or `320 Hz` pacing;
- renderer sampling or final shaded moving appearance;
- perceptual smoothness, timing/personality/acting acceptance;
- runtime-controller/state-machine behaviour;
- collision/physics/input/gameplay acceptance;
- target-device performance;
- biological gait/locomotion;
- CANON;
- production readiness;
- Animation mastery.

## Four-root gate

- **Truth:** authored-key evidence, dense source-curve continuity, target-engine interpolation, production transport and perceptual acceptance remain separate claims.
- **Agency / non-domination:** Animation uses existing Rigging deformation and does not rewrite Rigging, Technical Art, Art/QA, VFX or Runtime ownership.
- **Continuity:** exact Animation head, source/rig/clip digests, workflow run, retained artifact/hash and negative control are preserved as rollback/provenance points.
- **Wisdom before speed:** close the real between-key evidence gap without changing a known-good motion baseline, then wait for the actual receiver/interpolation path before claiming production motion quality.

The four AXM roots remain the merge gate.
