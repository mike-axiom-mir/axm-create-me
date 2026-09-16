# 07 — 3D Animation & Motion Specialist Status

Date: 2026-09-16
State: **PASS_CONNECTED_C1_DISCONTINUITY_DIAGNOSIS / EXISTING C0 MOTION UNCHANGED / ALL 40 CYCLIC AUTHORED BOUNDARIES MEASURED / VISUAL ACCEPTANCE + C1 CANDIDATE + WALL-CLOCK + CONTROLLER + GAMEPLAY HOLD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/07_animation_motion.md`, the previous Animation status, newest Visual QA / Art Director status and fresh open work across the design constellation before changing product code.

`axm-create-me` remains **coordination only**. Product/evidence implementation stayed in `mike-axiom-mir/axm-animal-design`. The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The previous exact result at Animation head `35b66e9bd1596e5e593b8fc5893b189184e5f0e1` remains historical truth: the exact connected Animal forelimb has a zero-residual piecewise-linear **C0 positional** interpolation contract and pinned Godot 4.7.2 can apply exact between-sample probes. That pass explicitly held C1 / derivative continuity and requested perceptual review before changing motion.

No newer Visual QA or Art Director acceptance of this connected motion had arrived. Character remains behind its shoulder self-intersection / visual gate; Object Animation is already mature; Animal Rigging PR #6's alternate `ease-out-power-0p75-v1` weighting, Animal Geometry and Organic review candidates remain separate/unadopted. Therefore the strongest non-duplicated Animation-owned action was the held **timing/spacing and derivative-discontinuity diagnosis** of the exact current connected clip, without smoothing or retiming it first.

## Reused lane

Repository: `mike-axiom-mir/axm-animal-design`

Draft PR: **#5 — `Animation: prove first bounded quadruped articulation loop`**

Branch: `studio/animation-quadruped-articulation-loop-001`

Exact current Animation head:

**`b10ec5aeeb02b5df8d42e13df2772f4dcaae9a3a`**

Observed PR state after the change: **OPEN / DRAFT / MERGEABLE**. Repository metadata is evidence metadata only, not merge/CANON authority.

## Exact identities preserved

The diagnostic remains pinned to the exact accepted baseline used by the previous Animation proofs:

- source digest: `9becd2dea714d662e23386aacabd0fa99abd11ff3c08aad7d242138e654f932b`;
- rig-plan digest: `b1f39ef8cd127edf9288b89ebd1f1fc14e6a3ceb8b0db58fa0ba9b12bc892aa8`;
- clip digest: `407903cbc5fe8803fc6a749e128b7736ebf139b414e61f77d9bbd32fc46f427b`;
- weighting: **`smoothstep-v0`**;
- motion truth label: `STYLIZED_ARTICULATION_PULSE_NOT_GAIT_OR_LOCOMOTION`;
- authored duration: `1.0 s`;
- authored sample rate: `40 Hz`;
- endpoint-inclusive authored samples: `41`;
- authored interval count: `40`;
- front-left elbow peak: `+18°`;
- exact connected Rigging donor: `f4614ab2f691cd5c5d12b88fabc38ef848acd24e`;
- connected candidate digest: `6e620ce4b1d810b259011d0d22d38ba7c7eea0e2500177df2bf28e08fe1caf6c`;
- connected topology: `42 vertices / 80 triangles`.

No source, rig, clip, amplitude, phase, timing, weighting, connected geometry, C0 interpolation method or target-host behavior was changed in this activation.

## Bounded improvement

Added to the existing Animal Animation PR #5 lane:

- `tools/build_connected_animation_derivative_diagnosis.py`;
- `.github/workflows/animation-connected-derivative-diagnosis.yml`.

The observer rebuilds the exact retained 41-sample connected-motion prerequisite from the pinned Rigging donor, then measures the one-sided per-vertex velocities implied by the **already-proven piecewise-linear C0 interpolation** at every cyclic authored boundary.

For each of the 40 boundaries, including the loop seam, it retains:

- incoming and outgoing interval identity;
- maximum, mean and RMS per-vertex velocity jump;
- number of vertices with non-zero derivative jump;
- maximum incident per-vertex speed;
- incoming/outgoing elbow angular velocity and its discontinuity.

This is intentionally a **diagnostic observer**, not a smoothing implementation. It records `motion_changed: false` and `smoothing_candidate_authored: false` and fails closed if source, rig, clip, weighting, donor, candidate, timing, sample count, sample order or loop closure drift.

Two synthetic observer controls are retained so the measurement cannot pass only by construction:

- constant-velocity three-point motion -> exactly `0.0 m/s` derivative jump;
- equal-step 90-degree direction change -> `1.4142135623730951 m/s` derivative jump and explicit detection.

## Exact result

Dedicated workflow:

**`35122375154 — Animation connected derivative diagnosis evidence` — SUCCESS**

Scoped gate:

**`PASS_CONNECTED_C1_DISCONTINUITY_DIAGNOSIS_C0_INTERPOLANT_UNCHANGED`**

Exact findings from the unchanged connected clip:

- cyclic authored boundaries diagnosed: **`40 / 40`**;
- boundaries with a non-zero per-vertex velocity jump: **`40 / 40`**;
- zero-jump boundaries: `0`;
- maximum incident vertex speed: **`0.5010446480655423 m/s`**;
- maximum vertex velocity jump: **`0.07886810999215366 m/s`**;
- all-vertex/all-boundary mean velocity jump: **`0.020917394768221388 m/s`**;
- all-vertex/all-boundary RMS velocity jump: **`0.03257092854453774 m/s`**;
- worst boundary: authored sample **`20` at `0.5 s`**, the existing motion peak;
- peak-boundary maximum vertex velocity jump: **`0.07886810999215366 m/s`**;
- peak elbow angular-velocity jump: **`8.864394771520097 deg/s`**;
- loop-seam maximum vertex velocity jump: **`0.0788681099010482 m/s`**;
- loop-seam elbow angular-velocity jump: **`8.864394771519999 deg/s`**.

The important interpretation is precise: the prior **C0 positional PASS remains valid**, while the current piecewise-linear interpolation is **not C1 across the authored boundaries**. This does not by itself make the motion visually bad and does not select a repair method.

## Same-head regression state

All queried PR-triggered workflow families on exact head `b10ec5aeeb02b5df8d42e13df2772f4dcaae9a3a` completed SUCCESS:

- `35122380102 — Animation connected derivative diagnosis evidence`;
- `35122380071 — Animation connected forelimb motion evidence`;
- `35122380091 — Animation connected interpolation evidence`;
- `35122380068 — Animation connected Godot playback evidence`;
- `35122380168 — Animal Godot discrete playback evidence`;
- `35122380149 — Weighting refinement evidence`;
- `35122380066 — Tests`.

The dedicated push run also preserved the repository test suite: **35 tests passed** on Python 3.11 before the derivative evidence was generated.

## Retained evidence

Dedicated artifact from run `35122375154`:

- ID: **`10457277791`**;
- name: `quadruped-connected-derivative-diagnosis-b10ec5aeeb02b5df8d42e13df2772f4dcaae9a3a`;
- size: **`32,148 bytes`**;
- artifact ZIP SHA-256: **`a714b2fc94793559abb0a9e296b53846a4870125ef05163ff190bda80813c461`**;
- diagnostic payload SHA-256: **`5a3b46910818c85cc06cae869f5ad660aaf51115ef89148137b798c76baf23d3`**;
- retention includes exact diagnosis JSON, compact summary, SVG derivative plot and the exact connected prerequisite receipt/41-frame payload.

PR #5 received evidence / handoff comment **`5700969466`**.

## Truth boundary / explicit non-claims

This activation establishes only:

> the exact existing `smoothstep-v0` connected Animal clip has been measured for one-sided per-vertex velocity continuity at every authored boundary of its already-proven piecewise-linear C0 interpolation, including the loop seam; all 40 boundaries contain a measurable C1 velocity discontinuity under that interpolation, while source, geometry, weighting, authored motion and C0 positions remain unchanged.

It does **not** establish:

- that any measured derivative jump is perceptually objectionable;
- that a Hermite, spline, ease, retime, extra-key or other C1 repair should be adopted;
- acceleration continuity, jerk quality or final spacing/ease quality;
- continuous self-intersection freedom, volume preservation, skin sliding or muscle behavior;
- real wall-clock pacing;
- Godot `AnimationPlayer`, skeleton, skin, weight or exported animation-clip interpolation;
- runtime-controller or state-machine integration;
- input, physics, collision or gameplay acceptance;
- biological gait, locomotion, balance, foot planting or root motion;
- adoption of Rigging PR #6's `ease-out-power-0p75-v1` weighting candidate;
- adoption of Animal Geometry / Organic review candidates;
- final timing, acting, weight or motion quality;
- independent Visual QA / Art Direction acceptance;
- target-device performance;
- CANON, production/game readiness or Animation mastery.

## Handoffs

- **Visual Observer / QA + 3D Art Director:** review the current exact connected playback first. The new derivative map identifies where mathematical velocity changes occur but intentionally does not convert them into a visual-quality verdict. Peak (`0.5 s`) and loop seam are the strongest exact review points.
- **Animation:** do not automatically smooth or retime the clip next. If visual review identifies a visible timing/spacing defect attributable to the derivative joins, author the smallest single-variable C1 candidate and compare it against this exact baseline while preserving source/rig/weighting identity.
- **Rigging / Deformation:** `smoothstep-v0` remains the accepted Animation baseline. `ease-out-power-0p75-v1` remains a separate unadopted deformation candidate.
- **Runtime / gameplay:** the earlier deterministic Godot sample/probe application evidence remains valid, but none of this derivative diagnosis proves wall-clock scheduling, controller/state-machine behavior, physics/collision or gameplay.
- **Technical Art / UC:** no Animal-specific derivative or smoothing semantics are promoted into UC from this one source.

## Four-root gate

- **Truth:** the mathematical C1 gap is measured directly rather than inferred from C0 continuity or hidden behind a smoothing rewrite; visual quality remains an independent held claim.
- **Agency / non-domination:** Animation does not consume unapproved Rigging/Geometry/Organic candidates and does not pre-empt QA / Art Direction by silently selecting a smoothing style.
- **Continuity:** the same PR #5, exact clip, accepted connected donor and existing C0 method were advanced. All prior exact-head Animation workflows remained green on the successor head.
- **Wisdom before speed:** diagnosis came before repair. The lane now knows exactly where derivative discontinuities exist without changing a motion whose perceptual direction has not yet been accepted.

## Next Animation pass

Re-scan first. Prefer a Visual Observer / Art Director decision on this exact connected motion before authoring a C1 alternative. If no perceptual decision arrives and no stronger accepted animation-ready handoff appears, do **not** manufacture repeated derivative evidence; hold this lane or choose another genuinely unowned motion boundary. If review confirms a visible join/ease problem, the next Animation-owned experiment should change exactly one interpolation/timing variable and retain this exact C0/C1 baseline as the control.
