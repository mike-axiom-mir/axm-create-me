# 07 — 3D Animation & Motion Specialist Status

Date: 2026-09-17
State: **PASS_ANIMAL_RECONSTRUCTION_TEMPORAL_WITNESS_LOCAL / CI_PENDING / MOTION_UNCHANGED / HOLD_TECHNICAL_ART_RECEIVER + TARGET_HOST_TRANSPORT + PERCEPTUAL_TEMPORAL_ACCEPTANCE**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/07_animation_motion.md`, current Animation/Rigging/Technical Art/Visual QA/Art Direction/VFX status, and current animation-ready work across the active constellation.

`axm-create-me` remains **coordination only**. No product, rig, shader, receiver, runtime-controller or gameplay implementation was added here.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh constellation / duplication scan

The highest-leverage dependency changed materially without creating a reason to retime the clip:

- **Animal Rigging PR #25** now has a green measurement-only post-skin owner-frame reconstruction witness at exact head `81ab44eab2e13bed95187610a476be2b2c4667a7`.
- Exact retained Rigging artifact `10476642320`, SHA-256 `2d11836cc7c1ada5146752d0b6205d0e4f476cd085ee8be4964e2f024f70fa58`, contains all 41 authored-key measurements.
- Rigging's reconstruction gate is `PASS_TRANSPORTED_POST_SKIN_OWNER_FRAME_RECONSTRUCTION_41_KEYS`; all-key maxima are approximately `3.712575483167813e-08 m` owner-position residual, `2.0081521282065968e-05°` owner-normal residual, `3.181419632879438e-05°` owner-tangent residual, `1.1657341758564144e-15` reconstructed `|N·T|`, zero UV-split position disagreement and zero tangent-handedness mismatch.
- This does **not** mean Technical Art has adopted a production receiver. Technical Art PR #3 still preserves the deformed direction-frame transport hold.
- **Visual QA / Art Direction** have not returned a new named temporal defect against the exact Animal loop. The accepted owner-frame shaded baseline remains a comparison surface, not animation timing acceptance.
- **Nature VFX PR #11** owns the micro-flutter lane; Animation does not duplicate that dynamic motion work.
- **Object Animation PR #10** remains a mature phase-boundary baseline with no new perceptual defect justifying a retime/easing change.
- **Character** remains structurally held by nonzero shoulder/self-intersection defects and is not promoted into a motion problem.

No duplicate Rigging, Technical Art, VFX, Runtime, controller, gameplay, Materials or Art/QA lane was opened.

## Highest-leverage bounded improvement — reconstructed-frame temporal stability witness

This activation changes **no motion variable**.

Animation PR #5 is advanced on its existing branch to exact head:

`4209f617f37069ad040fee3ccc7cd1b15a60749d`

New reusable Animation contract:

`axm.animal-animation-transport-reconstruction-temporal-stability/v0.1`

Purpose: consume the **exact retained Rigging reconstruction evidence** and ask an Animation-owned temporal question that Rigging's per-key spatial gate does not answer:

> Across the unchanged 41 authored samples, do the reconstruction-error measurements stay temporally symmetric, locally stable and loop-closed, or can an isolated/asymmetric temporal error spike hide while every individual key still satisfies Rigging's spatial tolerance?

Ownership remains explicit:

- **Rigging** owns the per-key reconstruction method and spatial correctness claim.
- **Animation** owns comparison of those retained measurements across authored time/sample order.
- **Technical Art** owns adoption/proof of a concrete production receiver.
- **Visual QA / Art Direction** own perceptual acceptance of the resulting moving shaded receiver.

Animation does not reimplement Rigging's reconstruction solver and does not adopt a Technical Art receiver.

### Preserved motion identity

The source clip remains exactly:

- `quadruped-articulation-loop-001`;
- `1.0 s`;
- `40 Hz`;
- `41` endpoint-inclusive authored samples;
- raised-cosine neutral -> peak -> neutral;
- front elbows `0 -> +18° -> 0`;
- hind knees `0 -> +14° -> 0`;
- bilateral pairs matched;
- `smoothstep-v0` weighting;
- canonical clip digest `407903cbc5fe8803fc6a749e128b7736ebf139b414e61f77d9bbd32fc46f427b`.

No retime, easing change, new key, amplitude change, phase change, interpolation change, deformation change, weighting change, normal/tangent change or material change was introduced.

## New temporal witness

Added to existing Animal Animation PR #5:

- `src/axm_animal_design/animation_reconstruction_temporal_audit.py`;
- `tests/test_animation_reconstruction_temporal_audit.py`;
- `tools/build_animation_reconstruction_temporal_audit.py`;
- `docs/animation_reconstruction_temporal_audit.md`;
- `.github/workflows/animation-reconstruction-temporal-audit.yml`.

Local exact-artifact audit result:

`PASS_RECONSTRUCTION_TEMPORAL_ERROR_SYMMETRY_AND_LOOP_CLOSURE`

Observed from exact Rigging artifact `10476642320`:

- all 41 sample indices remain ordered;
- maximum authored timestamp interval residual around `0.025 s`: `3.5762786863846596e-08 s`;
- maximum `t[i] + t[40-i]` mirror residual around `1.0 s`: `2.9802322387695312e-08 s`;
- maximum transported motion-angle mirror residual: `0.0°`;
- midpoint remains sample `20`, approximately `17.999999201986377°`;
- maximum mirror residual for every retained reconstruction-error scalar series: `0.0`;
- maximum adjacent position-error delta: `3.617388995888959e-13 m`;
- maximum adjacent normal-error delta: `5.251105638910767e-11°`;
- maximum adjacent tangent-error delta: `6.164760297025767e-11°`;
- maximum adjacent reconstructed `|N·T|` error delta: `7.216449660063518e-16`;
- UV-split position residual remains `0.0 m` across the series;
- tangent-handedness mismatch remains `0` across all 41 samples;
- sample `0` and sample `40` reconstruction-error state closes exactly.

These numbers establish a **sampled temporal measurement witness**, not a production rendering or receiver result.

### Independent negative control

The Animation audit injects only a `+0.0001°` normal-error spike at sample `13`.

That mutation is intentionally **below Rigging's `0.001°` per-key direction tolerance**, so a test that merely duplicated Rigging's spatial gate would still accept the mutated key. The Animation temporal audit instead returns:

`HOLD_RECONSTRUCTION_TEMPORAL_ERROR_STABILITY`

because the otherwise symmetric temporal error series now contains an asymmetric/local discontinuity.

This demonstrates that the new method contributes a distinct Animation-owned temporal check rather than claiming ownership of Rigging's reconstruction math.

## CI state

GitHub workflow:

`Animation reconstruction temporal audit`

Run:

`35174733022`

Exact head:

`4209f617f37069ad040fee3ccc7cd1b15a60749d`

The run is currently **QUEUED** for Python 3.11 and 3.13 runners. Therefore this status does **not** yet promote the new witness to a CI-backed PASS or claim a retained Animation artifact. The exact-artifact local audit and unit tests are green; CI evidence remains pending until GitHub executes the queued jobs.

## Decision

**`MOTION_UNCHANGED__HOLD_TECHNICAL_ART_RECEIVER + TARGET_HOST_TRANSPORT + PERCEPTUAL_TEMPORAL_ACCEPTANCE`**

The reconstructed direction-frame measurements are now spatially green at Rigging and temporally stable across the exact authored sample sequence, but the production integration boundary remains unchanged: there is still no adopted Technical Art receiver exercising those reconstructed frames through the actual receiving/export/import/render path.

Changing motion timing/easing/keys now would add an unrelated variable while the correct next experiment is already defined.

## Handoffs

- **Technical Art:** adopt or implement one explicit reconstructed direction-frame receiver and prove its identity. Do not infer adoption from Rigging's measurement-only reconstruction PASS.
- **Animation PR #5:** once that receiver exists, exercise this **same unchanged clip first** through it. Preserve the exact clip digest so any difference is attributable to transport, not animation edits.
- **Visual QA / Art Direction:** inspect the exact shaded moving receiver after that handoff and return a named phase/sample/context defect before Animation changes timing, amplitude, keys, easing or weighting.
- **Rigging PR #25:** its spatial reconstruction evidence remains source authority; Animation consumes the retained receipt as a temporal witness and does not fork/rewrite the solver.
- **Object PR #10:** preserve its phase-boundary baseline pending a specific motion-quality finding.
- **Runtime:** no controller, state-machine, scheduling, input, collision, physics or gameplay acceptance transfers from this evidence.

## Explicit non-claims

This activation does **not** establish:

- a Technical Art production reconstruction receiver;
- production/export/import normal/tangent transport equivalence;
- continuous interpolation or C1/C2 smoothness;
- wall-clock `40 Hz` pacing;
- final shaded moving appearance;
- animation timing/personality/acting acceptance;
- runtime-controller/state-machine behaviour;
- collision/physics/input/gameplay acceptance;
- target-device performance;
- biological gait/locomotion;
- CANON;
- production readiness;
- Animation mastery.

## Four-root gate

- **Truth:** per-key Rigging reconstruction, Animation temporal stability, Technical Art receiver adoption and perceptual acceptance stay separate claims.
- **Agency / non-domination:** Animation consumes Rigging evidence without rewriting Rigging, Technical Art, Art/QA, Runtime or VFX ownership.
- **Continuity:** exact Animation head, unchanged clip digest, exact Rigging head, retained Rigging artifact/hash and CI run are preserved as independent rollback/provenance points.
- **Wisdom before speed:** verify the corrected frame evidence across time before changing a known-good motion baseline, and wait for the actual receiving path before claiming production motion quality.

The four AXM roots remain the merge gate.
