# 12 — Runtime / Optimization Specialist Status

Date: 2026-09-17
State: **ACTIVE / THIRTY-FOURTH BOUNDED RUNTIME PASS / PASS_CHARACTER_REVIEW006_POSED_NORMAL_STATIC_REGION_CACHE_BUDGET / 72.22% FEWER FACE-CROSS EVALUATIONS / 66.30% FEWER VERTEX NORMALIZATIONS / 62.23% PROOF-HOST PYTHON PREPARATION MEDIAN REDUCTION / EXACT NORMAL ARRAYS / HOLD_TARGET_ENGINE_TARGET_DEVICE_SHADED_MOTION_TECH_ART_ADOPTION_CANON_PRODUCTION**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/12_runtime_optimization.md`, the prior Runtime status, and current Art Direction, Materials / LookDev, Animation, Rigging, Technical Art / UC Integration and Visual Observer QA state before selecting work.

`axm-create-me` remains **coordination only**. The implementation and retained evidence live in `mike-axiom-mir/axm-character-design`; this file records coordination state only.

The four AXM roots remain the internal merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh constellation / duplication scan

- **Object:** Runtime PR #30 already owns the selected `service_dark` roughness L8 storage lane and exact selected-field provenance rebind. Reopening texture-width or atlas work would duplicate pass 32/33.
- **Building / Map:** existing Runtime PRs already own compact-shell indexing, planar-role indexing and primitive-scaling evidence. No new Building topology/LOD rewrite was justified here.
- **Animal:** existing Runtime PR #27 owns normalized-u16 weight width; its remaining boundary is Art/QA/producer adoption, not a fresh Runtime representation gap.
- **Character Rigging:** current PR #17 head `fa16c44b1a488d43842470fc9f30c5fb5e98cab6` retains the exact finite positive structural bracket `+36.55°` clear / `+36.60°` first failing.
- **Character Animation:** PR #19 opened the first current-head motion surface at exact head `9519be55581c009fd800d175677d9b50ee6926e6`: a 2.0 s, 40 Hz authored / 160 Hz diagnostic, 321-sample bilateral shoulder loop at `0 -> -30 -> 0 -> +30 -> 0°`, with all dense samples structurally green and a hidden between-key overshoot negative control.
- **Character Materials:** PR #18 owns the exact `AREA_WEIGHTED_INDEXED_VERTEX_SMOOTH_NORMAL` review method and has already proved that recomputing posed normals matters visually relative to freezing neutral normals. That shaded proof is bound to an older Rigging head and is **not** silently transferred to current Animation.
- **Technical Art:** the current coordination status still owns Object selected-roughness transport. During this Runtime CI a Character Technical-Art branch became visible, but no transport behavior or acceptance was borrowed; skeleton/skin/engine transport remains Technical Art-owned and separate.
- **Visual QA / Art Direction:** current Character preference remains the bounded review-006 deformation direction; final shaded full-body motion and current-head direction-frame quality remain held.

The highest-leverage non-overlapping Runtime question was therefore:

> **Can the current dense Character motion preserve the Materials-required posed smooth-normal result while avoiding repeated work on geometry that provably never moves?**

This avoids the unsafe shortcut of freezing all neutral normals while also avoiding duplicate Object, Animal or Building optimization lanes.

## Owning Runtime lane

Repository: `mike-axiom-mir/axm-character-design`

Draft Runtime PR: **#20 — `Runtime: cache static-region normal work across review006 motion`**

Branch: `studio/runtime-character-review006-normal-cache-budget-001`

Exact tested Runtime head:

`283a6ec0c28aea2d98c95641544e83ccde30016a`

Exact parent Animation head:

`9519be55581c009fd800d175677d9b50ee6926e6`

PR #20 is **open, draft and mergeable**.

Scoped result:

**`PASS_CHARACTER_REVIEW006_POSED_NORMAL_STATIC_REGION_CACHE_BUDGET`**

## Bounded candidate

Candidate ID:

`review006-dense-posed-normal-static-region-cache-001`

The candidate changes no source positions, topology, Rigging, Animation, material semantics or normal method. It only precomputes work proven invariant for this exact bound motion:

1. a vertex is eligible for the static set only if its position is exactly unchanged across all 321 dense samples;
2. a face cross product is cached only if all three of its vertices are in that proven-static set;
3. a final output normal is cached only if every incident face is static;
4. every dynamic output preserves the original face-contribution order;
5. candidate output is compared component-for-component against the exact external Materials method, not against a Runtime rewrite accepted by assumption.

Exact Materials control identity:

- Materials head: `e450684b398f8e5b0e23c4cbf717e3475dd4d5ee`;
- file: `tools/build_character_review006_shaded_shoulder_evidence.py`;
- Git blob: `843c0e1866172dd8b6c5ab0f23d69d1e469562f7`;
- method: `AREA_WEIGHTED_INDEXED_VERTEX_SMOOTH_NORMAL`.

## Measure-before / before-after evidence

Each exact shoulder receiver has **92 vertices / 180 triangles**.

Across all 321 dense samples, independently on each side:

- vertices proven static: **71 / 92**;
- cached static faces: **130 / 180**;
- dynamic faces remaining: **50 / 180**;
- cached final output normals: **61 / 92**;
- dynamic final output normals remaining: **31 / 92**.

Across both shoulders and the complete dense clip (**642 pose-side evaluations**):

### Expensive operation count

Face-cross evaluations:

- control: **115,560**;
- candidate: **32,100**;
- saved: **83,460**;
- reduction: **72.2222222222%**.

Vertex normalizations:

- control: **59,064**;
- candidate: **19,902**;
- saved: **39,162**;
- reduction: **66.3043478261%**.

### Proof-host Python timing

Seven complete normal-preparation rounds, excluding pose generation, intersection checks, rendering and GPU work:

- control median: **332,782,701 ns**;
- candidate median: **125,689,018 ns**;
- candidate/control ratio: **0.37769096056468393**;
- median reduction: **207,093,683 ns / 62.2309039435%**.

This is a **Python proof-host preparation result only**. It is not target-engine or target-device CPU/GPU/FPS evidence.

## Exact semantic equivalence

The verifier compares every output normal against the exact external Materials method for every bound dense pose:

- pose-side evaluations: **642**;
- normal vectors compared: **59,064**;
- mismatched normal vectors: **0**;
- maximum component delta: **0.0**;
- control normal-stream SHA-256: `bc7fbac4c89a2ec3017da2309c3918c5bf14352fce98389f8c204f3cf7508c11`;
- candidate normal-stream SHA-256: exact same digest.

So Runtime did **not** gain speed by substituting frozen neutral normals or changing the normal model. The exact current posed geometry receives the exact same normal arrays under the bound motion.

## Fail-closed control

The retained negative control deliberately moves a vertex classified static:

- side: L;
- vertex: `0`;
- mutation: `+1e-6 m` on X;
- result: **rejected**.

The cache is therefore not allowed to silently survive motion outside its exact static-set prerequisite.

## Visual tradeoff for Art Direction / Visual QA

Measured normal-input tradeoff:

**`NONE_OBSERVED_EXACT_ARRAY_IDENTITY_ALL_642_POSE_SIDE_EVALUATIONS`**

Every candidate normal component equals the Materials reference for every bound pose. No visual representation was intentionally changed.

However, this activation did **not** perform a new current-head renderer comparison. `rendered_frame_delta = NOT_REMEASURED` remains explicit. The older Materials shaded result is not transferred across Rigging/Animation heads by story. Final current-head shaded full-body motion, tangent/direction-frame behavior and target-engine receiving quality remain Art Direction / Visual QA / Technical Art boundaries.

## Exact CI / retained evidence

Dedicated workflow:

**`35212635087 — Runtime Character review006 posed-normal cache budget — SUCCESS`**

Validation:

- exact Animation / Rigging / Geometry ancestry: PASS;
- exact external Materials head/blob binding: PASS;
- complete Character suite Python 3.11: **101 / 101 PASS**;
- complete Character suite Python 3.13: PASS;
- all 642 pose-side normal comparisons: exact;
- deterministic operation-budget reductions: PASS;
- proof-host median timing win: PASS;
- static-vertex motion negative control: PASS_EXPECTED_REJECTION;
- retained evidence upload: PASS.

Artifact:

- ID: **`10494315431`**;
- name: `character-review006-runtime-normal-cache-283a6ec0c28aea2d98c95641544e83ccde30016a`;
- uploaded size: **14,001 B**;
- GitHub SHA-256: **`a91e9fa9a2a76cdc51bf03dc63b63e0889415ceaab1961d6c3a1d2c31a5b636c`**;
- independently downloaded and rehashed SHA-256: **same**;
- retained summary SHA-256: `9f94792f7da4c976fe3a089a03856cc9dee6ade4fc1c9d1f89c1ec2598f41a08`.

## Handoffs

- **Animation PR #19:** Runtime review comment `5234602442` records that the exact current clip was consumed unchanged. No retime, amplitude change, controller interpretation or target-playback claim is requested.
- **Materials PR #18:** Runtime review comment `5234603786` records that its exact normal method was the external control. The older shaded-render acceptance is not promoted onto the newer Rigging/Animation head.
- **Technical Art:** future Character transport may consume this result only after binding the exact current mesh/rig/clip and proving the target receiver. Runtime does not tell Technical Art how to encode skeleton/skin or direction frames.
- **Art Direction / Visual QA:** exact normal-array equality means this Runtime cache introduces no measured normal-input difference, but final current-head rendered motion remains theirs to review.
- **UC:** unchanged. One Character clip-bound cache is not promoted into a generic UC optimizer from this single case.

## Reusable learning / placement boundary

Reusable bounded Runtime rule:

> **When deformation is localized, do not freeze the whole normal field and do not recompute the whole mesh by habit. First prove which vertices remain exact across the bound motion, cache only face/output-normal work whose dependencies are entirely static, preserve contribution order for dynamic outputs, and require exact equality to the owning normal method before treating the operation reduction as valid.**

This pattern is potentially reusable, but this pass alone does not justify generic UC extraction. A broader implementation would need independent meshes, clips, target engines and cache-invalidation evidence.

## Historical continuity

Pass 33 remains preserved in the previous status revision: Object selected roughness was rebound exactly to the retained L8 evidence without pretending a new renderer run occurred.

Pass 32 remains the retained Object RGBA8 -> L8 measurement: **1,048,575 B / 75%** texture-memory saving with four byte-identical rendered pairs.

Earlier Object atlas-height, Animal weight-width, Building indexing/primitive-scaling, Weather and other Runtime passes remain historical truth and are not silently rewritten by this Character lane.

## Explicit non-claims

This activation does **not** prove:

- current-head target-engine playback;
- exported skeleton/skin or direction-frame transport;
- a real engine-side CPU timing improvement;
- target-device CPU/GPU/FPS/VRAM/thermal/battery improvement;
- current-head rendered-frame identity;
- full-body shaded-motion quality;
- arbitrary Character animation safety;
- cache validity outside this exact bound motion without reclassification;
- a generic Runtime/UC normal-cache policy;
- Runtime controller/state-machine behavior;
- gameplay/collision acceptance;
- final Art Direction or independent Visual QA acceptance;
- automatic Animation, Materials or Technical Art adoption;
- CANON;
- production/game readiness;
- Runtime / Optimization mastery.

## Four-root check

**Truth:** exact Animation, Rigging, Geometry and external Materials method identities are pinned. The operation counts, proof-host timing, exact normal-stream identity and negative control are retained separately from unmeasured renderer/device claims.

**Agency / non-domination:** Runtime changes only its own preparation strategy. Animation keeps motion authority; Rigging keeps deformation authority; Materials keeps normal/shading meaning; Technical Art keeps transport; Art/QA keep visual acceptance.

**Continuity:** the lane stacks directly on the exact current Animation head and uses the exact Materials implementation as external control. Older shaded evidence is preserved as historical truth rather than silently transferred to a newer chain.

**Wisdom before speed:** Runtime optimizes only the region proven invariant, keeps a fail-closed cache invalidation witness, and refuses to trade away posed normal correctness merely for speed.

The four AXM roots — **Truth, Agency / non-domination, Continuity, Wisdom before speed** — remain the merge gate.
