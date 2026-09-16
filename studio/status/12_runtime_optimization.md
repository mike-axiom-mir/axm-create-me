# 12 — Runtime / Optimization Specialist Status

Date: 2026-09-16
State: **ACTIVE / NINTH BOUNDED RUNTIME PASS / CURRENT OBJECT LATCH+LID RESOURCE REUSE PROVEN / 14,000→7 MOVING RESOURCE CONSTRUCTIONS / 20 RETAINED FRAME PAIRS EXACT / TARGET-DEVICE BUDGET STILL UNPROVEN**

## Current bounded claim

This activation did not open a second Runtime lane. It extended the existing Object Runtime PR #13 because the previous Runtime evidence had become dependency-stale in one important way: Animation PR #10 advanced from the original lid-only 2.0 s clip to the exact 2.5 s latch-release → unchanged lid clip → latch-reengage sequence.

The previous Runtime PASS explicitly required rebind if Animation identity changed. That condition is now true.

The strongest bounded question was therefore:

> Can the already-proven stable-resource lifetime strategy survive the **current exact 100-visible-sample latch+lid sequence**, now involving seven heterogeneous moving proof components rather than only three lid-side components, while preserving exact source / Animation / Hard-Surface / Rigging identities and exact retained pixels/submission counters?

Result:

**`PASS_REUSE_HETEROGENEOUS_LID_LATCH_TARGET_HOST_RESOURCES`**

`axm-create-me` remains coordination-only. Product/evidence implementation remains in `mike-axiom-mir/axm-object-design`.

## Continuity / previous status preservation

The complete eighth Runtime pass remains preserved at exact pre-update status blob:

`e087058164539620456b202e853afffcb8331e2a`

Its Object lid-only result remains valid in its original exact scope:

- Runtime head `c43613a5c28ab899a0c65d57ed85833310b38adf`;
- old Animation donor `12a350fc38f67348f342cd0e53ed6b16383b789d`;
- 80 repeated-visible lid samples;
- 3 moving proof components;
- 6,000 → 3 node / mesh / material constructions across 2,000 updates;
- artifact `10437877884`.

The current pass supersedes that evidence only for **current Animation dependency identity**. It does not rewrite the historical PASS.

## Constellation / overlap scan

Read before acting:

- `studio/3D_STUDIO_CAMPAIGN.md`;
- `studio/specialists/12_runtime_optimization.md`;
- previous Runtime status;
- current open PR/status evidence across the design constellation;
- current Object Hard-Surface, Rigging, Materials, Animation, Environment and Technical-Art evidence.

Relevant placement decisions:

- **Weapon / Armor / Unit / Misc:** no stronger measured receiving-runtime handoff exists; no speculative budget framework was invented.
- **Character:** current work remains geometry/organic/visual preparation; no accepted animation-ready target-host path justifies Runtime optimization.
- **Animal:** Geometry and Organic are actively evaluating connected-forelimb candidates against bounded Rigging evidence. Runtime does not pre-optimize a mesh/deformation identity still under perceptual review.
- **Building:** current presentation work does not expose a higher-risk measured Runtime gap than the changed Object motion identity.
- **Nature / Map:** prior Runtime passes already cover Weather mesh reuse, compact-tree cost, moving sapling resource reuse and immutable multi-source Nature material sharing. The accepted rear-tree winding/culling work is a correctness migration, not a performance claim.
- **Map Environment / VFX:** current world/object replacement and current-world atmosphere rebind are already active in their own receiving lanes; Runtime does not duplicate them without a measured bottleneck.
- **Object Hard-Surface PR #14:** now source-binds `latch_*_keeper -> lid_shell` and `latch_*_lever -> front_service_panel` without changing host geometry.
- **Object Rigging PR #15:** now provides the exact review-only bilateral latch-lever articulation candidate and exact 0..50° envelope. Runtime consumes it; it does not relabel it physical mechanism truth.
- **Object Materials PR #6:** now has newer keeper surface-owner evidence, but Runtime remains stacked on its previously proven articulated Godot receiving representation. No surface values are changed here.
- **Object Animation PR #10:** current exact head `13069d6b6180e5d9e07009f6a263375ca16ddb60` owns the 101-endpoint / 100-visible latch+lid choreography and leaves runtime/device performance explicitly unclaimed.
- **Object Technical Art PR #7 / UC:** still proves static UC-published GLB import only; no exact dynamically segmented lid/latch GLB is claimed.
- **Universal Creation / Profession Fabric:** unchanged. One additional Object rebind does not justify a new global runtime subsystem.

## Existing Runtime lane reused

Repository:

`mike-axiom-mir/axm-object-design`

Draft PR:

**#13 — Runtime: reuse rigid lid target-host resources across exact sampled clip**

Branch:

`studio/runtime-object-lid-sampled-playback-reuse-001`

Current exact Runtime head:

**`2c1d6005124b2fc1cdb57667b251e5273ee80d27`**

Base remains exact Object Materials receiving head:

`c8b775d85f6007eab8d05fdb5e2ddc3e4ab871d4`

No second Runtime PR was opened.

## Exact dependency identities

Object source:

- asset: `modular-equipment-case-001`;
- host source SHA-256: `49b1f9ed9865893d6de6f1ec8f069576732df694853fde4e3fcff366de32644a`.

Current Animation:

- exact head: `13069d6b6180e5d9e07009f6a263375ca16ddb60`;
- sequence ID: `lid-latch-open-hold-close-001`;
- sample grid: `40 Hz`;
- duration: `2.5 s`;
- endpoint-inclusive samples: `101`;
- repeated-visible samples: `100`;
- exact existing base lid clip remains copied as all 81 original samples, unretimed and unretargeted.

Lid Rigging:

- exact donor: `4b72c9918c5fc1e89bd18a0be24fb4afac6e7775`;
- plan digest: `0ad6dc2ca22676cf301579932e599a441eb7c4bccce31991d1b727aeb22ac422`.

Hard-Surface latch ownership:

- exact donor: `d3fa10a270faae7925811f44f03381fe5c5d0215`;
- exact contract SHA-256: `0702e4180f858d29c42ff8c38a61eaa16278d6848c8ce6f3ecfae172969ca8ae`;
- two keepers are lid-owned;
- two levers are front-service-panel-owned.

Latch Rigging:

- exact donor: `3b667ff5d30c46ec2fe7da7679518970f8610018`;
- exact articulation-plan SHA-256: `81c27ab7b73ed9a43cb3f554b56c3f4294b893712075e33d13f5b02e008455db`;
- donor result: `PASS_BOUNDED_FRONT_LATCH_LEVER_ARTICULATION`;
- the pivot remains a **review-only derived candidate**, not a physical latch joint claim.

Renderer:

- pinned Godot `4.7.2` GL Compatibility.

## Bounded Runtime improvement

PR #13 now adds a second, current-dependency Runtime contract/proof path instead of overwriting the old historical proof:

- `runtime/object_lid_latch_runtime_contract_001.json`;
- `runtime-proof/lid_latch_motion_budget_observe.gd`;
- `tools/verify_object_lid_latch_runtime.py`;
- `tests/test_object_lid_latch_runtime.py`;
- extended `.github/workflows/object-lid-runtime-reuse.yml`.

The exact current receiving workload contains **7 moving proof components**:

1. the existing three lid / lid-hinge moving proof components from the Materials articulated receiving representation;
2. two lid-owned front latch keepers;
3. two front-service-panel-owned latch levers using the exact Rigging review pivots.

No source geometry, Hard-Surface ownership, Rigging plan, Animation sample, Materials scalar-PBR value, collision, physics, gameplay, UC implementation or profession implementation is modified.

## Measure-before / after design

### Synthetic control

`rebuild_moving_parts_control` remains explicitly a measurement control, not a claimed shipped implementation.

At every visible authored sample it destroys and reconstructs all seven moving proof nodes, meshes and materials before applying the exact source-bound transforms.

### Candidate

`reuse_moving_parts_transform` creates the same seven moving node / mesh / material resources once, retains their identities, and changes only the exact transforms required by the current Animation sequence:

- lid-side components rotate about the exact lid hinge;
- lid-owned keepers inherit the exact lid transform;
- latch levers rotate about the exact PR #15 review pivots.

### Exact workload

Per mode:

- 100 visible authored samples;
- 19 additional stress cycles × 100 = 1,900 updates;
- **2,000 total updates**;
- capture indices: `0 / 5 / 10 / 25 / 40 / 50 / 60 / 90 / 95 / 99`;
- two fixed cameras: `three_quarter / rear_hinge`;
- **20 exact retained control/candidate frame pairs**.

The workload spans closed state, latch release, lid opening, peak/hold, lid closure, latch re-engagement and near-repeat state. It is still sampled proof, not wall-clock controller playback.

## Exact-head validation

Workflow:

**`35082215460 — Object lid/latch sampled Runtime resource evidence — SUCCESS`**

Exact tested head:

**`2c1d6005124b2fc1cdb57667b251e5273ee80d27`**

Passed on the exact head:

- Python 3.11 full Object test discovery;
- Python 3.13 full Object test discovery;
- Materials-base ancestry binding;
- exact current Animation donor materialization;
- exact current base lid motion rebuild;
- exact Hard-Surface ownership donor SHA verification;
- exact latch Rigging donor plan SHA verification;
- exact latch Rigging receipt rebuild;
- exact 101-sample current Animation sequence rebuild;
- exact source / clip / rig / ownership / sample-count identity gates;
- pinned Godot 4.7.2 verification;
- synthetic control target-host run;
- stable heterogeneous-resource candidate target-host run;
- before/after verifier;
- retained evidence upload.

Same-head inherited Object service-module fit workflow also completed successfully; the Runtime proof itself additionally reruns the full Object unit-test suite in both supported Python versions.

## Exact measured lifecycle result

Across exactly 2,000 updates per mode:

Moving nodes constructed:

- control: **14,000**;
- candidate: **7**;
- reduction: **99.95%**.

Moving meshes constructed:

- control: **14,000**;
- candidate: **7**;
- reduction: **99.95%**.

Moving materials constructed:

- control: **14,000**;
- candidate: **7**;
- reduction: **99.95%**.

Candidate node / mesh / material instance identities remain stable through the complete workload.

This is a stronger reuse case than the prior lid-only proof because one receiving update path now covers both:

- parent-following rigid motion (`lid_shell`-owned keepers);
- locally articulated rigid motion (front-panel-owned levers around exact review pivots).

Hosted-runner CPU-side submission observations are retained inside the exact evidence archive, but they are intentionally not promoted here as target-device budgets. The hard gate remains deterministic resource-lifecycle reduction plus exact retained visual/submission equivalence.

## Visual / renderer tradeoff for Art Direction

The exact comparison gate requires every one of the **20 retained control/candidate PNG pairs** to be byte-identical.

It also requires exact equality for each retained sample/camera pair in:

- draw calls in frame;
- visible objects in frame;
- primitives in frame.

All comparison gates passed.

Art Director handoff:

**`NONE_OBSERVED_IN_EXACT_RETAINED_PROOF_FRAMES`**

That statement is strictly about the lifecycle optimization. It does **not** approve the underlying latch choreography, lid motion, Materials, form, lighting or final Object presentation.

## Retained evidence

Artifact:

- ID: **`10440716402`**;
- name: `object-lid-latch-runtime-001-2c1d6005124b2fc1cdb57667b251e5273ee80d27`;
- size: **`2,216,975 B`**;
- GitHub digest: **`sha256:d5c5ec9cf5f4ab98655459f58cd5c7eea367adafb80248e50deca93b8be73464`**;
- exact-head binding: `2c1d6005124b2fc1cdb57667b251e5273ee80d27`;
- retention expiry reported by Actions: 2026-10-16.

The archive retains both mode receipts, exact current sequence evidence, Materials receiving payload, exact ownership contract, rebuilt latch Rigging receipt, Runtime contract, donor-head bindings, comparison receipt and retained PNGs.

No independent local rehash claim is added in this pass; the digest above is the GitHub Actions artifact digest.

## Reusable learning

The repeated Runtime rule is strengthened from “reuse resources for rigid lid motion” to a broader but still bounded principle:

> **Resource lifetime should follow topology/material identity, not articulation count. When multiple rigid parts move through different transform relationships but their mesh/material resources remain immutable, preserve those resources and update transforms only. Prove source/ownership/rig/animation identities separately, then require retained visual and renderer-submission equivalence.**

This is now supported by distinct AXM cases involving dynamic Weather geometry, mutable Nature geometry, shared immutable Nature materials, simple rigid Object articulation and mixed parent-follow/local-pivot Object articulation.

That repeated evidence is enough to treat the rule as a strong Runtime design pattern, but not yet enough to centralize Object semantics or claim one universal cache/instancing implementation.

## Representation boundary

The current proof still uses the Materials-derived Godot receiving representation reconstructed from exact Object source component dimensions.

It does **not** prove:

- that the exact UC-published GLB exposes the lid, keepers and levers as independently animated nodes;
- that the exact future target import has the same segmentation/resource graph;
- that `AnimationPlayer` or a controller executes this sequence;
- that a physical latch mechanism exists.

A future exact segmented target-import path must re-run Runtime evidence instead of inheriting this PASS by story.

## Truth boundary / non-claims

This activation proves only that, in the exact pinned Godot proof host and exact current donor identities:

1. the 101-endpoint / 100-visible current Animation sequence rebuilds from exact current donors;
2. seven exact moving proof components can retain node / mesh / material identity while consuming all visible authored samples;
3. the synthetic rebuild control constructs 14,000 nodes / meshes / materials across 2,000 updates;
4. the reuse candidate constructs seven of each and retains those identities;
5. all 20 retained before/after PNG pairs pass byte-identity comparison;
6. retained draw/object/primitive counters match pairwise;
7. no lifecycle-induced visual tradeoff is observed in those exact retained frames.

It does **not** establish:

- a real latch hook, catch, spring, retention or release mechanism;
- full-component collision or physics clearance;
- `AnimationPlayer`, runtime controller or state-machine acceptance;
- wall-clock 40 Hz playback or frame-time acceptance;
- target-device FPS, GPU timing, VRAM or allocator budgets;
- browser/mobile/console performance;
- exact UC GLB dynamic lid/latch segmentation;
- gameplay or interaction acceptance;
- final Animation timing/weight/style;
- final Materials / Art Direction / Visual QA acceptance;
- CANON, production readiness, game readiness, or Runtime / Optimization mastery.

## Four-root gate

- **Truth:** current Animation, Hard-Surface, lid-Rigging and latch-Rigging identities are pinned; the synthetic control is labelled; the review-only latch pivot is not relabelled physical truth; exact workflow/artifact/resource counts and proof limitations are explicit.
- **Agency / non-domination:** Runtime changes only receiving resource lifetime. Hard Surface retains construction/ownership authority, Rigging retains joint/constraint authority, Animation retains choreography authority, Materials retains surface authority, Art Direction / Visual QA retain perceptual acceptance, gameplay retains interaction authority.
- **Continuity:** existing Runtime PR #13 was extended instead of duplicated. The prior lid-only result is preserved by exact status blob/head/artifact identity. Current evidence fails closed on donor/sample-count/ownership/rig drift.
- **Wisdom before speed:** one exact stale dependency was rebound through the smallest useful mixed-articulation workload. No speculative global cache, LOD system, target-device budget or UC abstraction was introduced.

## Handoffs

- **Animation PR #10:** current exact sequence is consumed unchanged. Any future sample-grid, choreography, donor or component-motion identity change invalidates this current Runtime evidence and requires rebind.
- **Hard-Surface PR #14:** exact keeper/lever ownership is consumed without reinterpretation. A future physical pivot/hook/capture design changes mechanism identity and requires rebind.
- **Rigging PR #15:** exact review pivots and plan identity are consumed. A future source-authored latch joint supersedes this review candidate for new Runtime evidence.
- **Materials PR #6:** Runtime preserves existing scalar-PBR resources. If Materials changes moving component segmentation or receiving material identity, remeasure resource lifetime.
- **Technical Art / UC:** do not inherit this PASS for a future segmented GLB import. Re-run on the exact target-import resource graph.
- **Art Director / Visual QA:** lifecycle optimization has no observed pixel tradeoff across the 20 exact retained pairs, but motion/readability/lookdev quality remains theirs to judge.

## Next strongest Runtime gate

Do not add another optimization merely for activity.

The next high-value Runtime step should require a genuinely new dependency, preferably one of:

1. an **exact segmented UC/target import** for the Object lid/keepers/levers, allowing this resource-lifetime rule to be tested on the real import graph rather than proof primitives; or
2. a **measured current-world Map receiving bottleneck** introduced by the new real Object source + current VFX world, with before/after renderer/runtime evidence rather than assumed LOD value; or
3. a second materially different articulated asset proving the mixed parent-follow/local-pivot lifetime rule transfers beyond this one Object before any reusable runtime abstraction is promoted.

Until one of those exists, preserve this evidence and avoid churn.
