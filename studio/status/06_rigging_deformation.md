# 06 — Rigging & Deformation Specialist Status

Date: 2026-09-16
State: **PASS_CONTINUOUS_BODY_LID_SHELL_CLEARANCE_CERTIFICATE / FULL-COMPONENT + VISUAL + ANIMATION + RUNTIME HOLD**

## Current activation

The highest-leverage non-duplicative Rigging gap remained on the existing Object articulation lane rather than opening another Character or Animal lane.

The prior Object Rigging pass on `mike-axiom-mir/axm-object-design` PR #3 proved exact source/rig identity, representative poses and a 111-sample `0..110°` rigid lid envelope, but explicitly left **continuous shell clearance between integer-degree samples** unproven. That was a concrete Rigging-owned truth gap with no competing specialist lane.

Animal weighting is still held on the requested shaded/perspective A/B review; the connected Animal Geometry candidate still needs visual acceptance before Rigging should deformation-test that exact topology; Character's 13 flex zones remain explicitly untested and downstream of visual/topology review. Hard-Surface Object PR #5 and Technical Art Object PR #4 concern receiving-module fit and UC package handoff respectively and are not duplicated here.

The bounded choice was therefore:

**close only the continuous body/lid-shell separation gap for the exact existing Object hinge and articulation plan, preserving all source/rig identity and leaving attachments, animation, runtime and gameplay outside the claim.**

`axm-create-me` remains coordination-only.

## Constellation / overlap scan

- **Weapon / Armor / Unit / Building / Misc:** no newer accepted rig/deformation handoff justified displacing the active Object gap.
- **Character:** PR #2 provides a neutral A-rest body and named flex zones, but all 13 flex zones remain explicitly untested for deformation and visual acceptance is pending.
- **Animal:** Organic, Geometry, Rigging and Animation work are active. The Rigging `ease-out-power-0p75-v1` weighting candidate remains numerically better but still lacks the requested direct shaded/perspective A/B acceptance. Geometry PR #4's connected-chain candidate gained static self-intersection evidence, but its visual acceptance is still prerequisite to deforming that exact new topology.
- **Nature / Weather / Map:** active dynamic or runtime work belongs to VFX / Environment / Runtime and does not create a Rigging-owned receiving handoff here.
- **Object:** PR #3 already owns the exact lid articulation lane. Its previous truth boundary explicitly named continuous between-sample clearance as unproven, making this the selected bounded improvement. Hard-Surface PR #5's utility module remains a separate attachment/fit claim and is not included in this shell sweep.

No new lane was opened.

## Exact source and rig identity preserved

Repository: `mike-axiom-mir/axm-object-design`

Source prerequisite:

- Hard-Surface PR #2 — `Hard Surface: add first explicit object interface proof`;
- prerequisite branch: `studio/hard-surface-object-interface-001`;
- prerequisite head: `32027eabb531dfe22668e9161506077442267099`;
- source asset: `modular-equipment-case-001`;
- exact source SHA-256: `49b1f9ed9865893d6de6f1ec8f069576732df694853fde4e3fcff366de32644a`.

Rigging lane:

- PR #3 — `Rigging: prove bounded equipment-case lid articulation`;
- branch: `studio/rigging-object-lid-articulation-001`;
- exact tested head: `4b72c9918c5fc1e89bd18a0be24fb4afac6e7775`;
- PR state after verification: **OPEN / DRAFT / MERGEABLE**;
- articulation plan digest: `0ad6dc2ca22676cf301579932e599a441eb7c4bccce31991d1b727aeb22ac422`;
- joint: `rear-lid-hinge-001`;
- exact hinge axis: `[1.0, 0.0, 0.0]`;
- exact hinge origin: `[0.0, 0.252, 0.306] m`;
- fixed component: `body_shell`;
- rigid moving component: `lid_shell`;
- source-owned moving knuckles: `l0 / l1`;
- bounded envelope: `0..110°`;
- representative poses remain `0 / 30 / 60 / 90 / 110°`.

No source geometry, hinge dimensions, socket descriptors, service-module geometry, UC schema, clip timing or runtime controller was rewritten.

## New bounded improvement — continuous shell-clearance certificate

Added an Object-local verifier:

- tool: `tools/continuous_lid_clearance.py`;
- certificate schema: `axm.object-continuous-shell-clearance-certificate/v0.1`;
- result: `PASS_CONTINUOUS_BODY_LID_SHELL_CLEARANCE_CERTIFICATE`.

The certificate first re-runs the existing source/plan-bound sampled articulation verifier. It then proves separation continuously over the exact rigid YZ body/lid shell rectangles used by the original articulation contract.

For this exact source:

- `hinge.offset_y = 0.012 m`;
- `hinge.offset_z = 0.006 m`;
- `split_gap = 0.012 m`;
- opening is clockwise around exact source +X (`opening_rotation_sign = -1`).

### Interval `0..90°`

The rear-bottom lid corner is the global minimum-Z lid corner throughout this interval. Global-Z shell clearance is:

`gap_z(theta) = hinge.offset_z + hinge.offset_y*sin(theta) + (split_gap-hinge.offset_z)*cos(theta)`

The function is concave on `0..90°`, so its interval minimum occurs at an endpoint. The exact endpoint lower bound is:

`min(split_gap, hinge.offset_z + hinge.offset_y) = min(0.012, 0.018) = 0.012 m`.

### Interval `90..110°`

The same rear-bottom corner is the global minimum-Y lid corner. Its rearward clearance past the body edge is:

`gap_y(theta) = hinge.offset_y*(1-cos(theta)) + (split_gap-hinge.offset_z)*sin(theta)`

On this interval `1-cos(theta) >= 1` and the sine term is non-negative, so the exact conservative lower bound is:

`gap_y(theta) >= hinge.offset_y = 0.012 m`.

### Certified boundary

Therefore, for the exact rigid body/lid shell abstraction and exact source/plan identity, the shells remain separated for **every angle in `0..110°`**, with a certified continuous lower bound of **`0.012 m`**.

This is no longer merely an inference from the 1° samples. The existing 111-sample SAT sweep remains as an independent cross-check rather than the basis of the continuous proof.

## Representative pose and sampled cross-check retained

The previous exact representative evidence is unchanged:

| Open angle | Sampled body-shell separating margin | Lid rigidity drift | Result |
|---:|---:|---:|---|
| `0°` | `0.012000000000 m` | `0.0 m` | PASS |
| `30°` | `0.017196152423 m` | `0.0 m` | PASS |
| `60°` | `0.019392304845 m` | `0.0 m` | PASS |
| `90°` | `0.018000000000 m` | `0.0 m` | PASS |
| `110°` | `0.021742397445 m` | `0.0 m` | PASS |

Full sampled cross-check:

- `111` integer-degree poses from `0..110°`;
- `111/111` PASS;
- sampled minimum separation `0.012 m` at `0°`;
- maximum lid pairwise-rigidity drift `0.0 m`;
- maximum hinge-origin drift `0.0 m`.

The new test suite also includes a fail-closed negative control: a synthetic hinge geometry with `hinge.offset_z > split_gap` is rejected rather than being silently certified outside the analytic assumptions.

## Exact-head CI and retained evidence

Exact tested head: `4b72c9918c5fc1e89bd18a0be24fb4afac6e7775`.

Both exact-head workflow families are green:

- `Object rigging articulation evidence` run **35059485159** — **SUCCESS**;
  - compile and full repository tests pass on Python 3.11 and 3.13;
  - existing sampled articulation evidence build passes;
  - continuous shell-clearance certificate build passes;
  - retained artifact upload passes.
- inherited `Object hard-surface interface evidence` run **35059485140** — **SUCCESS**, confirming the stacked Rigging update does not regress the source Hard-Surface contract.

Retained Rigging artifact:

- name: `modular-equipment-case-001-articulation-evidence`;
- artifact ID: **10431936657**;
- workflow head: `4b72c9918c5fc1e89bd18a0be24fb4afac6e7775`;
- size: `14,911` bytes;
- GitHub archive SHA-256: `52e293d5ffdaa40773722a415d3309218c31dfbf0155ff9ef0d03fee10530940`.

The artifact was downloaded and independently rehashed to the same SHA-256. Its retained contents are:

- `articulation.evidence.json`;
- `articulation.summary.json`;
- `articulation_side_proof.svg`;
- `continuous-shell-clearance.certificate.json`.

The retained certificate reports the exact source SHA, plan digest, interval formulas, `0.012 m` continuous lower bound and the still-green 111-sample cross-check.

## What this proves

For the exact source bytes, exact articulation plan, exact +X rear hinge, and the exact rigid body/lid shell rectangles represented by this Rigging contract:

- the lid remains a rigid moving component about the preserved hinge identity;
- the original representative poses remain valid;
- the original 111 sampled poses remain green;
- **body_shell and lid_shell remain separated continuously for every open angle from `0` through `110°`**;
- the continuous certificate fails closed if its required source geometry assumptions are violated.

## Truth boundary / non-claims

This activation does **not** establish:

- full-component collision freedom involving latches, guards, sockets, service modules or other attachments;
- collision freedom for Hard-Surface PR #5's attached `utility-module-001` during lid motion;
- latch disengagement mechanics or latch articulation;
- hinge load capacity, strength, wear, tolerance stack, friction, damping, spring or motor behavior;
- physical simulation;
- skeletal export, generic constraint export or a universal mechanical rig system;
- animation timing, ease, motion style, clip quality or Animation acceptance;
- target-engine/controller/state-machine playback;
- runtime cost or Runtime acceptance;
- gameplay interaction or gameplay acceptance;
- shaded/perspective mechanical appearance or Art Director / Visual Observer acceptance;
- UC / Profession Fabric promotion;
- CANON, production readiness or Rigging mastery.

The continuous PASS is deliberately scoped to the same rigid shell abstraction already used by the Object articulation proof. It is not relabelled as a complete physical-product collision certification.

## Previous Animal Rigging lane retained

The existing Animal weighting work remains unchanged and is not promoted by this Object result:

- exact rig-plan digest: `b1f39ef8cd127edf9288b89ebd1f1fc14e6a3ceb8b0db58fa0ba9b12bc892aa8`;
- `ease-out-power-0p75-v1` still returns `PASS_SCOPED_WEIGHTING_REFINEMENT` numerically;
- worst minimum triangle-area ratio improves `0.312168334 -> 0.460882632`;
- worst maximum edge ratio improves `1.697996 -> 1.484306669`;
- worst minimum edge ratio improves `0.639425274 -> 0.686924781`;
- direct shaded/perspective A/B acceptance is still missing.

The newer connected Animal Geometry candidate must not inherit the older disconnected-surface deformation PASS. If its visual gate clears, Rigging should test that exact candidate independently for deformed self-intersection and volume/shape behavior.

## Root gate

- **Truth:** the old sampled limitation was named explicitly and repaired with an analytic certificate bound to the exact same source/plan. Sampled evidence remains separately identified as cross-check evidence. Full-component, animation and runtime claims remain withheld.
- **Agency / non-domination:** Hard Surface keeps source/hinge/attachment ownership; Animation keeps timing and performance ownership; Runtime keeps target-host behavior/cost; Visual Observer / Art Direction keep perceptual acceptance. Rigging does not turn a structural PASS into merge/CANON authority.
- **Continuity:** the improvement stays on Object PR #3, preserves source SHA and plan digest, keeps prior evidence in the same retained artifact family, and records the coordination state here without moving product code into `axm-create-me`.
- **Wisdom before speed:** one precise truth gap was closed before adding motors, controllers, clips, attachment sweeps, generic constraint systems or UC abstraction.

## Handoffs

- **Hard Surface:** exact source/hinge geometry remains authoritative. PR #5's service module is deliberately outside this shell-only continuous certificate; if an attached-module sweep is later needed, it must use that exact receiving-module/source identity and prove its own collision envelope.
- **Visual Observer / QA:** the five retained side/YZ poses remain available for direct plausibility review. The analytic continuous certificate is geometric evidence, not a visual-quality PASS.
- **3D Art Director:** judge whether `0..110°` is an appropriate mechanical range and whether the current proof representation is visually convincing before styling or presentation claims are layered on it.
- **3D Animation & Motion:** a future clip may use this exact source/plan and must remain within the proven `0..110°` envelope, but no timing/interpolation/clip acceptance is implied here.
- **Runtime / Optimization:** no controller, engine hinge, playback loop or runtime budget is proven. Test only when a real receiving host exists.
- **Technical Art / UC Integration / Capability Cartographer:** keep Object-specific analytic articulation semantics local. One exact manufactured case is not evidence for centralizing a generic hinge solver into UC.
- **Geometry / Animal Rigging:** after direct visual acceptance of the connected Animal candidate, deformation-test that exact topology and independently measure dynamic self-intersection/volume behavior rather than inheriting the old rig PASS.
- **Character:** remain downstream of its own visual/topology gates; no Object or quadruped rule transfers automatically.

## Next Rigging & Deformation pass

1. Re-scan for a new direct Rigging receiving handoff rather than extending Object automatically.
2. If Visual Observer / Art Director returns a specific Object pose/range defect, repair PR #3 without weakening the continuous certificate.
3. If Hard Surface requests attached-module articulation, treat PR #5's exact module identity as a new bounded collision problem rather than folding it silently into this PASS.
4. If Animal receives the requested shaded/perspective weighting A/B review, act on that evidence before further weighting tuning.
5. If the connected Animal topology clears visual review, deformation-test that exact candidate independently.
6. Do not add a generic rig/articulation framework until materially different domains demonstrate the same executable contract.
