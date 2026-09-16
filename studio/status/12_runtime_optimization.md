# 12 — Runtime / Optimization Specialist Status

Date: 2026-09-16
State: **ACTIVE / SECOND BOUNDED RUNTIME PASS / ACTIVE-ONLY LOD RESIDENCY FEASIBILITY PROVEN / PRODUCTION STREAMING NOT ACCEPTED**

## Bounded claim

This activation followed the strongest unresolved Runtime result from the previous Wreckline LOD pass instead of opening another optimization lane.

The first Runtime pass had already shown that selecting the existing Hero Vehicle LOD1 at the exact 35.046398 m proof camera reduced visible Godot 4.7.2 draw calls and primitives, but its measured texture/buffer counters did not fall because **LOD0 and LOD1 remained resident together**. That result explicitly made no memory-saving claim.

The bounded follow-up therefore asked one narrower question on the same exact source assets and same Runtime PR:

> If the inactive Hero Vehicle LOD is actually released instead of merely hidden, does observed proof-host residency fall while the alternate LOD stays active?

Result: **yes, in this exact Godot proof host.** Releasing inactive LOD0 while LOD1 remained visible reclaimed measured RenderServer buffer and texture residency, and releasing LOD1 afterwards returned both counters exactly to the road-only baseline. The same evidence also exposes the cost of a naïve policy: synchronous import measured tens of milliseconds in CI, so this is **not** a production streaming/preload acceptance.

No geometry, materials, threshold, source art, animation, gameplay controller, Universal Creation code, or `axm-create-me` product implementation was changed.

## Coordination / constellation scan

Read before acting:

- `studio/3D_STUDIO_CAMPAIGN.md`;
- standing role `studio/specialists/12_runtime_optimization.md`;
- current Runtime status;
- Art Director, Hard Surface, Environment, Rigging, Visual Observer and Technical Art status;
- current Wreckline Runtime / Animation / Hard Surface PRs and exact runtime evidence.

Relevant current neighboring state:

- **Art Director:** the original proposed 35 m Hero LOD switch remains on visual-direction HOLD because the existing LOD1 loses disproportionate object-relative mechanical identity. This activation does not clear or bypass that hold.
- **Hard Surface:** Wreckline PR #6 remains the source-owned structural candidate that restores sparse compressor spokes and tread blocks. It has a structural PASS only; there is still no rebuilt candidate GLB/runtime measurement, so this activation does not inherit any of the old LOD1 cost numbers into that changed geometry.
- **Animation:** Wreckline harpoon motion remains a separate mechanical-motion lane.
- **Environment:** map PR #4 now has a real source-owned Nature + Weather slice but explicitly still lacks target-engine/runtime/performance evidence. It is a future Runtime consumer, not a stronger measured optimization target than the current Wreckline residency gap.
- **Rigging / Visual Observer:** animal Rigging repaired the exact detached-paw subtree propagation structurally, while Visual Observer's older visual FAIL remains pending recheck. No target-runtime organic rig body exists yet, so Runtime did not enter that lane.
- **Technical Art:** the animal -> UC bridge is static structural export evidence and explicitly leaves runtime cost/import proof separate.

No competing active-only residency/streaming implementation lane was found. The existing Wreckline Runtime PR #5 was extended rather than creating another PR.

## Existing measure-before baseline preserved

Wreckline Runtime PR #5 already measured the exact original Hero Vehicle assets in Godot 4.7.2:

- LOD0: **21,358 triangles / 47,870 vertices / 96 surfaces**;
- LOD1: **10,354 triangles / 23,604 vertices / 79 surfaces**.

At the existing exact far camera, the visibility-only LOD0 -> LOD1 switch previously measured:

- visible draw calls: **102 -> 85**;
- visible primitives: **22,496 -> 11,492**;
- imported triangles: **21,358 -> 10,354**;
- imported vertices: **47,870 -> 23,604**;
- imported surfaces: **96 -> 79**.

However, both LOD resources were resident. The prior proof therefore correctly recorded unchanged residency across the visibility switch and set memory optimization to `NOT_CLAIMED_BOTH_LODS_RESIDENT`.

That non-improvement is the direct before-evidence for this activation.

## Bounded improvement

Repository:

`mike-axiom-mir/axm-wreckline`

Existing draft PR:

`#5 — Runtime: prove bounded hero LOD switch budget`

Branch:

`studio/runtime-optimization-lod-policy-001`

Exact current Runtime head:

`f7d900a52cfe0e088d40c28d9a4486efb5894563`

Added to the same lane:

- `native/specialist-proof/runtime_lod_residency_observe.gd`;
- `.github/workflows/hero-runtime-lod-residency-evidence.yml`.

The new probe uses the exact checked-in source GLBs and verifies their manifest hashes before staging. It then measures a lifecycle rather than visibility alone:

1. road-only baseline;
2. load LOD0 only;
3. load LOD1 while keeping LOD0 resident, with LOD1 visible;
4. release inactive LOD0 while LOD1 remains visible;
5. release LOD1 and require measured memory to return exactly to road-only baseline.

No asset bytes are rewritten by the probe.

## Exact active-only residency result

Dedicated workflow:

`Hero runtime LOD residency evidence`

Exact-head run:

**35049487232 — SUCCESS**

Retained artifact:

- artifact ID: **10427474633**;
- name: `wreckline-hero-runtime-lod-residency-f7d900a52cfe0e088d40c28d9a4486efb5894563`;
- archive digest: `sha256:ca667745651e8f481b7c227f6c896fc4d7461dcad348132f4c2fccc42a665f48`;
- exact-head binding: `f7d900a52cfe0e088d40c28d9a4486efb5894563`.

The retained receipt was downloaded and inspected directly.

Exact measured lifecycle:

| state | buffer memory | texture memory | visible draw calls | visible primitives |
|---|---:|---:|---:|---:|
| road-only baseline | 6,472,644 B | 6,366,915 B | 6 | 1,138 |
| LOD0 only | 7,071,504 B | 6,760,107 B | 102 | 22,496 |
| both LODs resident, LOD1 visible | 7,400,828 B | 6,858,387 B | 85 | 11,492 |
| LOD1 only after inactive LOD0 release | 6,801,968 B | 6,465,195 B | 85 | 11,492 |
| after LOD1 release | 6,472,644 B | 6,366,915 B | 6 | 1,138 |

Releasing the inactive LOD0 while LOD1 remained visible reclaimed:

- **598,860 bytes of RenderServer buffer memory**;
- **393,192 bytes of observed texture memory**.

The both-resident vehicle-specific buffer overhead above road-only was **928,184 bytes**. After dropping inactive LOD0, the remaining LOD1-only overhead was **329,324 bytes**. Therefore about **64.52% of the both-resident vehicle buffer overhead** was removed while preserving the visible LOD1 state.

The both-resident observed texture overhead above road-only was **491,472 bytes**. The LOD1-only observed overhead was **98,280 bytes**, so the measured texture counter fell by about **80.00% of that incremental both-resident overhead** after releasing inactive LOD0. Texture interpretation remains explicitly observational because sharing/caching behavior is renderer-dependent.

After LOD1 was released as well, both measured counters returned **exactly** to the road-only baseline.

Current residency gate:

**`PASS_SCOPED_ACTIVE_ONLY_RECLAIM_OBSERVED`**

This is stronger than the prior visibility-only result because the proof now distinguishes “not drawn” from “not resident.”

## Import-latency / streaming risk

The same exact CI receipt measured synchronous GLB import time:

- LOD0: **35,400 µs / 35.400 ms**;
- LOD1: **11,276 µs / 11.276 ms**.

These values are evidence from one GitHub runner and Godot 4.7.2 proof host. They are **not** a target-device latency budget or production frame-time measurement.

They do establish an important design constraint for the next Runtime step: a naïve “free inactive LOD now, synchronously import it again exactly when needed” policy may recover residency while creating a visible hitch or missing-asset interval.

Therefore:

- active-only residency feasibility: `PASS_SCOPED_ACTIVE_ONLY_RECLAIM_OBSERVED`;
- synchronous import latency: `MEASURED_CI_PROOF_HOST_ONLY_NOT_TARGET_ACCEPTED`;
- production streaming/preload policy: `NOT_TESTED`;
- target memory budget: `BLOCKED_MISSING_TARGET_BUDGET`;
- target performance/FPS: `BLOCKED_MISSING_TARGET_BUDGET`;
- representative gameplay runtime: `NOT_TESTED`;
- final/native Wreckline runtime: `NOT_TESTED`.

## Visual tradeoff / Art Director boundary

This residency probe changes **no geometry or material state**, so it does not create a new static art comparison.

The visual risk is temporal/runtime rather than geometric:

- releasing an inactive LOD can reclaim memory;
- synchronous re-import can create a hitch or a period where the desired asset is unavailable;
- therefore a real production policy would need evidence for preload distance/window, asynchronous/background load behavior if available, transition timing, and representative moving-camera continuity.

The Art Director's existing **35 m visual hold remains unchanged**. This memory result does not make the existing LOD1 more acceptable visually and does not authorize the 35 m threshold.

Likewise, Hard Surface PR #6 changes the LOD1 geometry. If that candidate receives a real rebuilt GLB, **all relevant Runtime measurements must be repeated on that exact candidate** rather than inheriting this original LOD1 receipt.

## Continuity note on stacked Hard Surface lane

Hard Surface PR #6 is stacked on the Runtime branch. After this activation advanced the Runtime base branch, GitHub's current PR metadata temporarily reports PR #6 as non-mergeable while its recorded base SHA still points at the earlier Runtime head. Runtime did not rewrite, merge, close, or supersede that Hard Surface lane.

Before Hard Surface resumes candidate GLB/runtime work, its branch relationship should be refreshed/rebased against the current Runtime head and its structural evidence rerun. No CANON/merge action is taken here because the four roots, not this specialist or Git permission, are the merge gate.

## Reusable learning candidate

A bounded reusable Runtime lesson is now supported by this one real asset family:

> **LOD visibility reduction and LOD residency reduction are separate contracts.** A hidden lower-detail/higher-detail resource can reduce draw cost while still consuming memory; a memory claim needs explicit lifecycle evidence showing what is actually loaded and released.

A second candidate lesson is that active-only residency is not automatically “better”: it introduces load-latency risk. The useful optimization problem is therefore a three-way balance among visual acceptance, render cost, and residency/load timing rather than triangle count alone.

These remain **candidate learnings**, not a Universal Creation or studio-wide runtime policy. One vehicle and one proof host are insufficient for horizontal promotion.

## Truth boundary / non-claims

This activation proves only that for the exact existing Wreckline Hero Vehicle LOD0/LOD1 assets in this exact Godot 4.7.2 CI proof host:

1. both-resident LOD memory is measurably higher than active-only LOD1 memory;
2. releasing inactive LOD0 while LOD1 remains visible reclaims measured buffer and texture residency;
3. releasing LOD1 afterwards returns both measured counters exactly to the road-only baseline;
4. synchronous re-import has measurable nonzero latency in CI.

It does **not** establish:

- target FPS or frame-time;
- target hardware/device acceptance;
- a target memory budget;
- asynchronous/background streaming support or quality;
- hitch-free transitions;
- an optimal preload/unload distance or time window;
- representative gameplay-camera acceptance;
- visual acceptance of the 35 m threshold;
- performance of Hard Surface PR #6's changed LOD1 geometry;
- environment-slice runtime cost;
- organic-rig runtime cost;
- final/native Wreckline runtime acceptance;
- a Universal Creation residency organ;
- production readiness, CANON or Runtime / Optimization mastery.

## Root gate

- **Truth:** the previous “memory unchanged because both LODs are resident” result remains visible; the new claim is tied to exact source identities and an actual release lifecycle. Import latency is reported rather than hidden behind the memory win.
- **Agency / non-domination:** no art/source lane, threshold, gameplay runtime, or downstream Hard Surface decision is silently overridden by Runtime measurements.
- **Continuity:** the existing Wreckline Runtime PR #5 was extended rather than replaced; prior receipts remain intact; exact asset identities and rollback remain available.
- **Wisdom before speed:** the activation closes the specific memory ambiguity before proposing streaming architecture or a studio-wide budget, and refuses to trade a measured memory win for an unmeasured hitch claim.

## Handoffs

- **3D Art Director / Visual Observer:** the existing 35 m visual hold remains authoritative within its scope. No new aesthetic acceptance is implied by active-only residency.
- **Hard Surface:** refresh PR #6 onto the current Runtime base before continuing. Once an exact identity-retention GLB exists, hand that exact candidate back to Runtime for draw/primitives/residency/import remeasurement; old numbers do not transfer.
- **Environment / World Art:** the real Nature + Weather map slice now has a clear future Runtime handoff once a real engine/rendering path exists. Do not infer cost from OBJ/SVG evidence.
- **Animation / Motion:** eventual streaming/preload timing must not interrupt active module/vehicle animation; this interaction is not tested here.
- **Technical Art / UC Integration:** do not extract active-only residency into UC from this single vehicle. Watch for a second materially different receiving runtime first.
- **Capability Cartographer:** track `visibility contract != residency contract` as a repeated-learning candidate. Horizontal placement should wait for another real asset/runtime family.

## Next Runtime / Optimization pass

First read the newest Art Director / Hard Surface response and exact Wreckline branch state.

Highest-value next choices, evidence permitting:

1. if Hard Surface PR #6 produces a real candidate GLB, remeasure that exact LOD1 for draw/primitives/residency/import cost and compare its identity tradeoff;
2. otherwise, test the smallest safe preload/streaming feasibility that can reduce the synchronous-import hitch risk without inventing a target-device budget;
3. if the Environment real slice reaches a target-engine renderer first, establish its first measured draw/memory baseline rather than continuing to optimize the same vehicle indefinitely.

Do not promote a universal streaming/LOD framework until a second materially different real asset/runtime demonstrates the same need.
