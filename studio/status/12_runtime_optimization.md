# 12 — Runtime / Optimization Specialist Status

Date: 2026-09-16
State: **ACTIVE / FIRST BOUNDED RUNTIME LOD POLICY PASS / STACKED DRAFT PR OPEN**

## Bounded claim

The first Runtime / Optimization activation found that the studio already had a real target-engine LOD comparison in Wreckline, but stopped immediately before the part this specialist owns: a reversible runtime switch policy and measured before/after runtime cost.

This activation therefore did **not** build a new LOD generator, modify source art, invent a studio-wide budget, or move optimization machinery into Universal Creation. It opened one Wreckline-local candidate policy on the exact existing Hero Vehicle LOD evidence and measured its cost in the same Godot 4.7.2 proof context.

Result: at the already-observed far camera distance, selecting the existing Hero Vehicle LOD1 instead of LOD0 reduced visible proof-host draw calls and primitives substantially while retaining a small measured full-frame visual delta. This remains a **proof-host candidate**, not a production threshold or target-performance acceptance.

## Coordination / constellation scan

Read before work:

- `studio/3D_STUDIO_CAMPAIGN.md`;
- standing role `studio/specialists/12_runtime_optimization.md`;
- specialist status packets 01 through 11;
- current open PRs and current design/runtime evidence across the constellation.

Relevant neighboring ownership remains separate:

- Art Director owns visual acceptance and the shared visual baseline;
- Geometry / Topology owns UC topology diagnostics (#133);
- Hard Surface owns UC attachment-frame evidence (#134);
- Organic + Rigging own the animal form/deformation chain;
- Materials owns UC UV-density evidence (#135);
- Animation owns Wreckline harpoon aim/fire/recover PR #4;
- Environment / Procedural own map composition and seeded map variation;
- VFX owns the weather wind visual baseline;
- Technical Art owns the animal-design -> UC static surface/GLB bridge and explicitly leaves runtime cost/import proof to this lane.

The design-department bodies currently provide useful source/structural evidence, but most do **not** yet provide a measured target-engine runtime baseline. Wreckline is the strongest current runtime target because its exact Hero Vehicle already has retained Godot 4.7.2 import, road/chase context, LOD0/LOD1, materials, animation and visual evidence.

No competing runtime LOD switch-policy lane was present when this pass was cut.

## Gap selected

Wreckline PR #3 already had a corrected green road/chase LOD observer using the exact Hero Vehicle and exact road GLBs.

Its own retained gate said:

`automatic_lod_policy_gate = BLOCKED_MISSING_LOD_DISTANCE_CONTRACT`

At its exact far observation distance of **35.0463981628418 m**, it had already measured:

- Hero LOD0: **21,358 triangles / 47,870 vertices / 96 surfaces**;
- Hero LOD1: **10,354 triangles / 23,604 vertices / 79 surfaces**;
- LOD0 -> LOD1 full-frame changed ratio: **0.2833%** in that earlier observer;
- LOD1 / LOD0 silhouette footprint ratio: **0.9372006386**;
- target performance still `BLOCKED_MISSING_TARGET_BUDGET`.

That made a local runtime policy/budget proof higher leverage than creating another generic optimization abstraction.

The earlier v0.1 road/chase observer failed to parse before scene observation. That historical failure remains historical truth. The corrected v0.2 observer/run is the evidence consumed here.

## Bounded improvement

Opened stacked draft PR:

**`mike-axiom-mir/axm-wreckline#5 — Runtime: prove bounded hero LOD switch budget`**

Branch:

`studio/runtime-optimization-lod-policy-001`

Exact Runtime lane head:

`c2e954989d4390cb9b7dd84886c9b87ed6176d95`

Stack/base:

`evidence/3d-specialist-hero-runtime` (Wreckline PR #3)

The PR remains **DRAFT / OPEN** and carries no merge/CANON or production-runtime claim.

Added only three Wreckline-local files:

- `evidence/runtime/hero_vehicle_lod_policy_candidate.json`;
- `native/specialist-proof/runtime_lod_policy_observe.gd`;
- `.github/workflows/hero-runtime-lod-policy-evidence.yml`.

No Hero source GLB, road source GLB, material evidence file, animation file, or UC source was modified.

### Candidate policy

The bounded candidate declares:

- enter LOD1 at **35.0 m**;
- return LOD0 at **34.0 m**;
- one-metre hysteresis only to prove deterministic non-thrashing state transitions;
- Art Director review required;
- target budget state remains `MISSING`;
- promotion effect `NONE`.

The 35 m entry point is deliberately anchored to the exact already-measured **35.046398 m** far observation. It is not inferred as the mathematically optimal threshold and is not generalized to other cameras/assets.

The one-metre return band is an anti-thrash proof mechanism, not a visual tuning claim.

## Measure-before baseline

Before the candidate policy was allowed to select LOD1, the new observer forced LOD0 at the exact same 35.046398 m camera/context.

Godot 4.7.2 runtime counters:

- visible draw calls: **102**;
- visible objects: **102**;
- visible primitives: **22,496**;
- texture memory: **9,623,187 bytes**;
- buffer memory: **7,400,828 bytes**.

Exact Godot import identity for the vehicle remained:

- LOD0: **21,358 triangles / 47,870 vertices / 96 surfaces**;
- LOD1: **10,354 triangles / 23,604 vertices / 79 surfaces**.

The workflow requires those imported counts to keep matching the measured policy basis rather than silently accepting a changed asset under an old threshold.

## After measurement

At the same **35.046398 m** camera/context, the candidate state machine selected LOD1.

Measured Godot runtime counters became:

- visible draw calls: **85**;
- visible objects: **85**;
- visible primitives: **11,492**;
- texture memory: **9,623,187 bytes**;
- buffer memory: **7,400,828 bytes**.

Measured before -> after reductions:

- draw calls: **102 -> 85 = -17 / -16.67%**;
- visible primitives: **22,496 -> 11,492 = -11,004 / -48.92%**;
- imported triangles: **21,358 -> 10,354 = -11,004 / -51.52%**;
- imported vertices: **47,870 -> 23,604 = -24,266 / -50.69%**;
- imported surfaces: **96 -> 79 = -17 / -17.71%**.

State-machine hysteresis also passed the exact bounded sequence:

`34.9 LOD0 -> 35.1 LOD1 -> 34.5 stays LOD1 -> 33.9 LOD0 -> 34.5 stays LOD0`

Current gates from the retained receipt:

- relative runtime budget: `PASS_SCOPED_PROOF_HOST`;
- automatic LOD policy: `PASS_SCOPED_PROOF_HOST_CANDIDATE`;
- target performance: `BLOCKED_MISSING_TARGET_BUDGET`;
- memory: `NOT_CLAIMED_BOTH_LODS_RESIDENT`;
- representative gameplay camera: `NOT_TESTED`;
- final/native runtime: `NOT_TESTED`.

## Exact CI / retained evidence

Exact Runtime lane head:

`c2e954989d4390cb9b7dd84886c9b87ed6176d95`

All three relevant workflows observed for that head completed **SUCCESS**:

- normal `tests` run **35045837516**;
- dedicated `Hero runtime LOD policy evidence` run **35045837518**;
- inherited `Hero specialist runtime evidence` run **35045837477**.

Dedicated retained artifact:

- artifact ID: **10426922362**;
- archive digest: `sha256:2cb280faafc1234111ef59ac046041aa64c9af7140f2316807e8f05acd982d5c`;
- size: **197,148 bytes**;
- retained policy JSON, exact runtime receipt, forced-LOD0 frame, automatic-LOD1 frame.

The artifact was downloaded during this activation and its receipt was inspected directly.

## Visual tradeoff / Art Director handoff

At the exact same far camera, the new retained before/after comparison measured:

- **344 / 144,000 sampled pixels changed**;
- changed ratio **0.2389%**;
- prior exact far silhouette footprint ratio **93.72%**.

I also inspected the two retained frames directly.

Bounded visual observation:

- the same vehicle remains clearly present at the same road position;
- the overall far silhouette/read remains close in the two stills;
- some fine lateral/mechanical detail is visibly simplified/repositioned in the LOD1 image;
- there is no basis here to claim that a live transition is imperceptible, that 35 m is the best artistic switch distance, or that this survives a representative chase camera in motion.

Therefore visual state remains:

**`REVIEW_REQUIRED`**

Art Director / Visual Observer should inspect the exact retained frames and, preferably, an eventual moving threshold-crossing capture before this threshold can be promoted beyond proof-host candidate status.

## Important memory result

This pass produced an important non-improvement as well:

texture/buffer memory counters were unchanged across the switch because **both LOD resources remain resident** in the proof host.

Therefore this lane makes **no memory-saving claim**.

A future residency/streaming lane would need to prove real resource unload/load or target-runtime residency behavior rather than treating hidden geometry as freed memory.

## Why this was not moved into Universal Creation

One successful Wreckline-local LOD state machine does not justify a universal LOD/runtime organ.

The candidate is tied to:

- one vehicle family;
- one Godot proof host;
- one camera context;
- one measured far observation;
- no target device/FPS budget.

If a second materially different real asset family later demonstrates the same policy/evidence need, Technical Art / Capability Cartography can assess whether a horizontal contract exists. Until then, the smallest honest scope is Wreckline-local.

## Truth boundary / non-claims

This pass proves only that, for this exact Hero Vehicle and proof-host context:

1. a reversible 35 m / 34 m candidate state machine behaves deterministically;
2. at the already-measured far camera, selecting existing LOD1 instead of LOD0 reduces measured Godot draw calls and primitives;
3. exact before/after visual evidence exists for human review.

It does **not** establish:

- target FPS;
- target hardware/device acceptance;
- CPU/GPU frame-time acceptance;
- memory optimization;
- residency/streaming behavior;
- an optimal LOD threshold;
- representative gameplay-camera acceptance;
- live transition/pop acceptance;
- final/native Wreckline runtime acceptance;
- a studio-wide LOD budget;
- that every asset should use the same threshold;
- production readiness or runtime-optimization mastery.

## Root gate

- **Truth:** exact source/import identity, before/after runtime counters, retained visual evidence and missing target budget are all explicit; unchanged memory is recorded rather than hidden.
- **Agency / non-domination:** no artist/source lane was rewritten and no provisional threshold was silently promoted into product authority.
- **Continuity:** PR #5 is stacked on the existing Wreckline runtime evidence chain, preserves the earlier failed/corrected evidence history, pins the source hashes/counts, and has `promotion_effect = NONE`.
- **Wisdom before speed:** the lane closes one concrete measured blocker in the strongest current runtime body instead of inventing a universal optimization layer from a single vehicle.

## Handoffs

- **Art Director / Visual Observer:** review artifact `10426922362` before any visual acceptance. Pay special attention to lateral/mechanical detail at the switch point and request a moving threshold-crossing proof if still acceptance is insufficient.
- **Animation / Motion:** PR #4 remains separate. Do not infer that the LOD switch preserves animated module/articulation quality until exercised together.
- **Materials / LookDev:** current LOD1 already has fewer material surfaces/bindings; this pass proves runtime count reduction, not material look parity at switch distance.
- **Technical Art / UC Integration:** do not extract this into UC yet. Watch for a second real engine/asset family needing the same evidence contract first.
- **Environment / World Art:** road remains fixed LOD0 here. Road LOD policy is a separate visual/composition problem; the earlier road LOD delta was much larger and must not inherit the vehicle threshold.
- **Capability Cartography:** record the reusable pattern as a candidate only: exact asset identity + measured context anchor + hysteresis + runtime counters + retained visual review + explicit target-budget/memory non-claims.

## Next Runtime / Optimization pass

First re-read PR #5, Art Director/Visual Observer response, and newest product-runtime evidence.

If the vehicle threshold is not visually accepted, repair this same lane rather than widening it.

If it is visually accepted but no target device/FPS budget exists, do **not** invent one. The next highest-risk measured gap is likely either:

1. representative moving-camera threshold crossing / frame-time evidence; or
2. actual resource residency/streaming, because this pass proves visibility switching does not reduce resident memory.

Only propagate horizontally after a second materially different asset/runtime demonstrates the same need.
