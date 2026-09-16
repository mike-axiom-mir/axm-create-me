# 07 — 3D Animation & Motion Specialist Status

Date: 2026-09-16
State: **PASS_OBJECT_PHASE_DERIVATIVE_DIAGNOSIS / EXACT CURRENT SOURCE-AUTHORITY MOTION UNCHANGED / SAME-HEAD TARGET-HOST GREEN / ANIMAL NEW SOURCE SUCCESSOR REBIND HELD / VISUAL ACCEPTANCE + SMOOTHING + WALL-CLOCK + CONTROLLER + GAMEPLAY HOLD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/07_animation_motion.md`, previous Animation status, newest Visual QA / Art Director status and fresh animation-ready work across the design constellation before changing product code.

`axm-create-me` remains **coordination only**. Product/evidence implementation stayed in the owning design repository. The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The previous Animal result at exact Animation head `b10ec5aeeb02b5df8d42e13df2772f4dcaae9a3a` remains historical truth: its exact connected forelimb motion has a proven C0 positional interpolation and a retained diagnosis showing C1 velocity discontinuities at all 40 cyclic authored boundaries under that exact older form chain. That result was deliberately held for perceptual review before authoring a smoothing candidate.

A fresh constellation scan changed the dependency picture. Animal Organic Form PR #8 now source-owns the previously reviewed selected-003 elbow direction as non-CANON successor `front-left-connected-chain-elbow-source-successor-003`, exact head `7314a8971abb53f8ee6ef226c2496ab6d5da20d7`, candidate digest `ace2366d8cd14c00df670b5fe1f0780ab2d01992482455ad5f7c4c9cadffeeba`, with zero source-vs-reviewed-shape position residual. Its handoff explicitly requires Geometry and Rigging to rebind before Animation inherits the successor. Existing Animal Animation therefore remains truthful for the previous form chain but is now **dependency-held** rather than a clean place to author a C1 repair.

Character remains behind topology / visual acceptance work. Nature dynamic response remains VFX-owned. Object Animation already has a mature source-authority + real Godot `AnimationPlayer` path and no existing Animation-owned derivative review of its multi-phase mechanical sequence. The highest-leverage non-duplicated action was therefore to advance the **existing Object Animation PR #10** with a reusable phase-boundary derivative diagnosis while changing no motion.

## Reused lane

Repository: `mike-axiom-mir/axm-object-design`

Draft PR: **#10 — `Animation: prove bounded equipment-case lid open-hold-close clip`**

Branch: `studio/animation-object-lid-open-close-001`

Exact current Animation head:

**`7e9c7e6f3a3d8c7743cec0c0756e206b5d0d5339`**

Observed PR state after the change: **OPEN / DRAFT / MERGEABLE**. Repository metadata is evidence metadata only, not merge/CANON authority.

## Exact motion/source identities preserved

This activation diagnoses the exact already-proven Object choreography without modifying it:

- current target-host/source-authority predecessor head: `6c81740c7895c90d6bb3a617d74f0863c52053f6`;
- exact sequence ID: `lid-latch-open-hold-close-001`;
- exact sequence digest: `0a3523cf792264f610881552fd2ebd438aabdfd05e30e92af9dbb33ded1fa2d3`;
- current source mechanical interface head: `6086f39a3da344c57a68653f90d040e03e04cec2`;
- current source Rigging authority head: `a1acd2bcb2074f41e536562f2673508e2cb0a4d5`;
- prior exact Animation choreography donor head: `5cb073f9fcf825014556ed165ee081e1eca71cdc`;
- duration: `2.5 s`;
- authored sample rate: `40 Hz`;
- endpoint-inclusive samples: `101`;
- exact phase samples: `0 closed`, `10 release complete`, `40 lid-hold start`, `50 hold midpoint`, `60 hold end`, `90 lid closed before latch re-engage`, `100 closed endpoint / repeat seam`;
- interpolation under diagnosis: the **existing LINEAR continuous AnimationPlayer key interpolation** already proven by the same Object lane.

The new workflow requires the current head to descend from `6c81740...` and uses `git diff --exit-code` over the motion-affecting sequence, clip and source-authority verifier files before measuring. It then rebuilds the exact prior choreography, current source-owned Rigging acceptance and current source-authority rebind on the new exact head.

No key, source, rig, sequence, phase, retime, retarget, interpolation setting or motion value changed in this activation.

## Bounded improvement

Added to the existing Object Animation PR #10:

- `tools/diagnose_animation_phase_derivatives.py`;
- `tests/test_animation_phase_derivatives.py`;
- `.github/workflows/object-animation-phase-derivatives.yml`.

The observer measures one-sided angular velocities across every interior authored key boundary and the repeated neutral seam for the two choreography tracks:

- lid open angle;
- bilateral latch lever angle represented by the existing exact source-authority choreography.

For each track it records interval count, all 99 interior key-boundary jumps, maximum incident angular speed, worst jump identity, and repeated-seam incoming/outgoing velocity. It also retains the exact named phase handoffs so Animation / Visual QA can review meaningful transitions rather than a generic aggregate.

This is intentionally a **diagnostic method**, not a smoothing implementation. It records:

- `motion_changed: false`;
- `retimed: false`;
- `retargeted: false`;
- `key_count_changed: false`;
- `smoothing_candidate_authored: false`.

Synthetic controls prevent a vacuous observer PASS:

- constant-speed motion -> exactly zero interior velocity jump;
- deliberate speed change -> explicit non-zero jump detection.

Negative controls reject timestamp drift, sequence-digest drift and any authority receipt that claims a motion mutation.

## Exact result

Dedicated workflow:

**`35129539641 — Object animation phase-derivative diagnosis` — SUCCESS**

Both jobs passed:

- exact Python 3.11 evidence / source-authority reconstruction / diagnosis / negative controls;
- Python 3.13 compatibility.

Scoped gate:

**`PASS_OBJECT_PHASE_DERIVATIVE_DIAGNOSIS_MOTION_UNCHANGED`**

Exact retained findings:

### Lid track

- intervals: `100`;
- interior boundaries diagnosed: `99`;
- non-zero interior velocity-jump boundaries: **`60 / 99`**;
- maximum absolute interval velocity: approximately `199.7037037037 deg/s`;
- maximum interior velocity jump: **`24.888888888879997 deg/s`**;
- worst retained interior boundary: sample **`11`**;
- repeated neutral seam velocity jump: **`0.0 deg/s`**.

### Latch track

- intervals: `100`;
- interior boundaries diagnosed: `99`;
- non-zero interior velocity-jump boundaries: **`18 / 99`**;
- maximum absolute interval velocity: approximately `296 deg/s`;
- maximum interior velocity jump: **`96.00000000000023 deg/s`**;
- worst retained interior boundary: sample **`9`**;
- repeated neutral seam: `-55.99999999999999 -> +55.99999999999999 deg/s`;
- repeated neutral seam velocity jump: **`111.99999999999999 deg/s`**.

### Exact phase handoffs

- sample `0 / 100`, closed repeat seam: lid `0 -> 0 deg/s`; latch `-56 -> +56 deg/s`;
- sample `10`, release complete: latch `+56 -> 0 deg/s`; lid `0 -> +13.03703703704 deg/s`;
- sample `40`, lid-hold start: lid `+13.03703703704 -> 0 deg/s`; latch stays `0`;
- sample `50`, hold midpoint: lid and latch both exactly `0 -> 0 deg/s`;
- sample `60`, hold end: lid `0 -> -13.03703703704 deg/s`; latch stays `0`;
- sample `90`, lid closed before re-engage: lid `-13.03703703704 -> 0 deg/s`; latch `0 -> -56 deg/s`.

The key interpretation is precise: **endpoint pose closure remains exact, but the latch repeat seam is not C1 velocity-continuous under the existing linear interpolation.** Interior authored keys also contain expected one-sided velocity changes from the sampled/eased phase construction. This is a mathematical timing/spacing fact, not a visual-quality verdict.

## Same-head regression / target-host state

All queried PR-triggered workflow families on exact head `7e9c7e6f3a3d8c7743cec0c0756e206b5d0d5339` completed SUCCESS:

- `35129539641 — Object animation phase-derivative diagnosis`;
- `35129539556 — Object animation source-authority rebind evidence`;
- `35129539557 — Object AnimationPlayer target-host evidence`;
- `35129539553 — Object AnimationPlayer interpolation evidence v3`;
- `35129539549 — Object animation lid motion evidence`;
- `35129539662 — Object rigging attached-module clearance evidence`;
- `35129539542 — Object rigging registration-key clearance evidence`;
- `35129539559 — Object hard-surface interface evidence`;
- `35129539606 — Object service-module fit evidence`.

This matters because the derivative diagnosis is layered onto an exact head where the existing real target-host evidence still passes; it does not replace or silently reinterpret that target-host proof.

## Retained evidence

Dedicated artifact from run `35129539641`:

- ID: **`10460588717`**;
- name: `object-animation-phase-derivatives-7e9c7e6f3a3d8c7743cec0c0756e206b5d0d5339`;
- size: **`21,621 bytes`**;
- artifact ZIP SHA-256: **`3f743a3fe6dc09f87595632751b76e1c9837c85435bcba4c7004f1b1a54b734c`**;
- archive independently downloaded and rehashed to the same digest;
- retained files include exact diagnosis JSON, derivative SVG, exact-head receipt, exact source-authority rebind evidence and exact 101-sample choreography evidence.

PR #10 received evidence / handoff comment **`5701889712`**.

## Historical repair retained

The first diagnostic head `ec43168d74de5ebe41f13cc6800f8315f2fe79bb` produced failed run **`35129440124`** at the diagnosis stage. The observer incorrectly assumed that serialized `phase_landmarks` dictionary iteration preserved authored phase order, while the retained evidence JSON is key-sorted.

That failed run remains historical evidence. Final head `7e9c7e6...` repairs only the observer: phase landmarks are now matched by exact name and emitted in explicit authored review order. Motion/source/rig/key data were unchanged. The succeeding run re-exercised the full exact path rather than suppressing the failure.

## Truth boundary / explicit non-claims

This activation establishes only:

> the exact current-source-authority Object lid/latch choreography has been measured for one-sided angular-velocity continuity across all authored key boundaries of its existing proven linear interpolation, while the motion itself remains unchanged and all same-head target-host/source-authority workflows remain green.

It does **not** establish:

- that any measured velocity jump is perceptually objectionable;
- that spline, Hermite, extra ease, retiming, more keys or any other smoothing method should be adopted;
- C2 acceleration or jerk quality;
- real wall-clock pacing or scheduler behavior;
- runtime-controller or state-machine integration;
- input, interaction, collision, physics or gameplay acceptance;
- attachment dynamics or physical latch mechanism quality;
- final timing, weight, mechanical personality or Art Direction / Visual QA acceptance;
- target-device performance;
- CANON, production/game readiness or Animation mastery.

## Handoffs

- **Visual Observer / QA + 3D Art Director:** review the exact current Object motion at the now-identified boundaries before Animation edits timing. Highest-value points are the latch repeat seam, release-complete handoff, lid hold entry/exit and re-engage handoff. A non-zero derivative is evidence of a mathematical join, not automatically a visible defect.
- **Animation:** do not globally smooth the sequence next. If visual review identifies a specific objectionable join, change exactly one timing/interpolation variable and compare against this exact retained baseline.
- **Animal Geometry + Rigging:** the new source-owned selected-003 elbow successor must be explicitly rebound before Animal Animation migrates. Existing Animal Animation remains valid only for its previous form chain.
- **Technical Art / Runtime:** the same-head Object target-host proofs remain green. This derivative result does not grant controller/gameplay or runtime-performance acceptance.
- **UC / Profession Fabric:** no Object-specific timing or derivative policy is promoted from a single sequence. The observer method remains local until cross-domain reuse justifies extraction.

## Four-root gate

- **Truth:** exact motion identity, same-head target-host state, C0 endpoint closure and C1 derivative discontinuities are kept as separate claims. The initial observer failure remains visible.
- **Agency / non-domination:** Animation does not bypass the new Animal source-successor dependency, does not consume VFX-owned Nature motion, and does not pre-empt visual review by silently selecting a smoothing style.
- **Continuity:** existing Object PR #10 and exact source-authority choreography were advanced without rewriting prior evidence. All inherited same-head workflows remained green.
- **Wisdom before speed:** a narrow diagnostic was added before editing a mature target-host-proven motion. The lane now knows exactly which phase joins deserve perceptual attention.

## Next Animation pass

Re-scan first. Prefer one of two evidence-led paths only:

1. if Visual QA / Art Direction reviews the exact Object sequence and identifies a specific visible join/ease problem, author one bounded single-variable timing/interpolation candidate against this retained baseline;
2. if Animal Geometry + Rigging explicitly rebind the new selected-003 source successor first, Animation may then rebind the existing clip/playback evidence to that successor before any timing/style change.

If neither dependency arrives, **hold rather than manufacture another derivative metric or speculative smoothing pass**.
