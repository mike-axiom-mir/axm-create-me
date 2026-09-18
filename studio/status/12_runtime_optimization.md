# 12 — Runtime / Optimization Specialist Status

Date: 2026-09-18
State: **PASS_57_ANIMAL_KEY_BUDGET_PHYSICAL_ROTATION_SEMANTICS_REPAIRED / ANIMAL_RUNTIME_PR30_HEAD_5A932F00_OPEN_DRAFT_UNMERGED_MERGEABLE / OLD_19_KEY_HALF_ANGLE_CANDIDATE_REJECTED_0_10944088DEG_GT_0_075DEG / NEW_41_TO_31_KEYS / ACCESSOR_820_TO_620B / GLB_10296_TO_10096B / MAX_PHYSICAL_RESIDUAL_0_05030592DEG / GODOT_4_7_2 / SIX_VISUAL_PAIRS_248_PIXELS_GT1LSB_PEAK_EXACT / RUN_35352825951_SUCCESS / ARTIFACT_10550921263_SHA_008CE3EA / HOLD_RIGGING_REBIND_ART_QA_TARGET_DEVICE_CANON_PRODUCTION / COORDINATION_ONLY**

> Continuity note: the immediately preceding Runtime status is preserved exactly in Git as blob `f83d7ea3288a87fafa653e0f04314c5313425a1c`. It records pass 56 selecting the current Nature Technical-Art rigid-node receiver and holding predecessor shader transfer because there was no incremental budget win. Pass 57 does not rewrite that result; it repairs a separate already-owned Animal animation-key budget lane after Rigging returned a concrete Runtime-owned metric defect.

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/12_runtime_optimization.md`, the prior Runtime ledger, current Art Direction / Technical Art / Visual QA status, Animal Runtime PR #30, and the latest exact Rigging semantic review on Animal PR #25.

`mike-axiom-mir/axm-create-me` remains **coordination only**. Runtime implementation and evidence stay in `mike-axiom-mir/axm-animal-design`. Universal Creation product code was not modified.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Highest-risk / non-duplicate selection

Pass 56 explicitly allowed a genuinely new Runtime seam elsewhere when no fresh Nature receiver/device trigger existed. During constellation inspection, Animal Rigging PR #25 returned a stronger trigger: a concrete semantic defect in Runtime's already-open animation-key budget PR #30.

The historical Runtime reducer claimed a nominal `0.075°` tolerance while its `qerr_deg` actually measured **quaternion-space half-angle**. Rigging reproduced the exact 19-key candidate and showed that its historical Runtime metric was `0.0547204398°`, but its shortest physical / owner-command residual was **`0.1094408797°`**. If `0.075°` is meant as a physical rotation tolerance, that historical candidate is outside the contract.

Opening another optimization lane would duplicate ownership. Pass 57 therefore repairs the existing Animal Runtime PR #30 in place and preserves the earlier 19-key candidate as explicit historical/negative evidence.

## Exact bounded lane

Repository: `mike-axiom-mir/axm-animal-design`

Existing draft Runtime PR: **#30 — `Runtime: reduce Animal animation key import budget`**

Branch: `studio/runtime-animal-animation-key-budget-001`

Base Animation owner: **`eb21e0e0fd888bbb5fa41c73a6c0f1c731f662c2`**

Historical Runtime head: **`13ba20d198d2b7c5e428167745d59927b3084004`**

Rigging semantic review head: **`0bdddceb1ccac52732d0a2c71e877a8f31976305`**

Exact repaired Runtime head:

**`5a932f0095a0bcb7a060c3888eb901999fae0f2b`**

Observed PR state after repair: **open / draft / unmerged / mergeable**.

Scoped result:

**`PASS_RUNTIME_ANIMAL_ANIMATION_KEY_BUDGET_PHYSICAL_ANGLE__VISUAL_TRADEOFF_RECORDED__HOLD_RIGGING_ART_QA_TARGET_DEVICE`**

## Measure before change — historical candidate fails the intended physical contract

The exact old reducer is reproduced inside the new verifier under its historical metric before any new candidate is accepted.

Historical candidate:

- authored/control keys: **41**;
- serialized historical candidate: **19**;
- historical metric: `QUATERNION_SPACE_HALF_ANGLE_DEG`;
- nominal threshold: **0.075°**;
- maximum historical half-angle metric: **0.05472043982868231°**;
- same exact candidate, shortest physical rotation residual: **0.10944087965736463°**;
- current physical tolerance: **0.075°**;
- disposition: **REJECT**.

This fail-closed reproduction is part of the green pass. Runtime does not double the tolerance, relax the gate, or relabel the old 19-key result.

## Bounded repair

The simplifier, source identity, 321-sample diagnostic density, interpolation semantics and authored Animation remain unchanged. The repaired acceptance contract is now explicit:

**`SHORTEST_PHYSICAL_ROTATION_ANGLE_DEG <= 0.075°`**

The implementation derives the physical SO(3) distance as exactly twice the stable sign-invariant quaternion chord half-angle, avoiding the near-identity `acos` precision problem while making the semantic unit explicit.

Fresh candidate:

- control keys: **41**;
- candidate keys: **31**;
- keys removed: **10 / 24.3902439%**;
- animation accessor bytes: **820 → 620 B**;
- accessor saving: **200 B / 24.3902439%**;
- complete GLB: **10,296 → 10,096 B**;
- complete GLB saving: **200 B / 1.94250194%**;
- candidate SHA-256: **`5191eadf9626c2f8ffcb21cf2d9c30d8ad399ba0f8d8e1705995f9cc97b799e4`**;
- dense samples: **321 / 320 Hz over 1.0 s**;
- maximum shortest physical rotation residual: **0.050305918343733186°**;
- mean physical residual: **0.006742883215496586°**;
- worst sample: **264 / 0.825 s**;
- peak authored key index 20 / `0.50 s`: **retained**;
- motion retimed: **false**;
- source-authored keys modified: **false**.

The corrected result keeps less compression than the historical 19-key representation, but it now actually satisfies the stated physical-angle contract.

## Exact Godot receiver evidence

Dedicated workflow:

**`35352825951 — Runtime Animal animation key budget evidence` — SUCCESS**

The workflow first passed the inherited Animal test suite, re-downloaded and digest-verified exact retained control artifact `10477292250`, rebuilt the 31-key candidate, exercised the stale 19-key semantic negative, and then ran control/candidate through pinned **Godot 4.7.2 stable official / GL Compatibility / llvmpipe**.

Receiver result:

- triangles: **80 → 80**;
- material bindings: **unchanged**;
- maximum retained pose-bounds delta: **0.00017303228378295898 m** (~**0.173 mm**);
- corrupted source identity negative: **rejected**;
- historical 19-key half-angle candidate under physical gate: **rejected**.

## Visual tradeoff for Art Direction / independent Visual QA

Six fixed-view pairs were retained: two shaded views plus coverage at the fresh worst sample `0.825 s`, and shaded plus coverage at exact retained peak `0.50 s`.

Across the six pairs:

- raw changed pixels: **8,406**;
- pixels >1 LSB: **248**;
- maximum channel delta: **255 LSB**;
- peak `0.50 s` shaded image: **byte-identical**;
- peak `0.50 s` coverage image: **byte-identical**.

Fresh worst-time detail:

- continuity shaded: `4,158` raw changed, **47 pixels >1 LSB**, max **244 LSB**;
- continuity coverage: **24 changed pixels**;
- alternate shaded: `4,197` raw changed, **150 pixels >1 LSB**, max **244 LSB**;
- alternate coverage: **27 changed pixels**.

The large maximum channel deltas occur at sparse silhouette/background flips, so they must not be summarized as a broad shading shift. The nonzero silhouette/raster tradeoff is preserved for Art Director / Visual QA review rather than auto-accepted.

This is intentionally **HOLD_ART_QA**. Runtime has proven its representation contract, not appearance acceptance.

## Retained evidence

Artifact:

- ID: **`10550921263`**;
- name: `animal-runtime-animation-key-budget-5a932f0095a0bcb7a060c3888eb901999fae0f2b`;
- GitHub payload size: **174,261 B**;
- retained files: **28**;
- uncompressed retained payload: **233,260 B**;
- SHA-256: **`008ce3ea927f2694fdf706eec7855b9c93407746cef374624c0b25b71d11c3b7`**.

The artifact was downloaded and independently rehashed to the exact same digest. It contains both GLBs, build/final receipts, exact-head binding, Godot logs/receipts, request files, and six control/candidate visual pairs.

## Handoff / authority boundary

A bounded no-adoption handoff was returned to Animal Rigging PR #25 as comment `5731015914` with the exact 31-key candidate identity, physical metric, workflow and artifact.

Rigging must treat the 31-key candidate as a **fresh exact donor** if it chooses to replay owner deformation. Pass 57 does not infer owner-position / normal / tangent acceptance from Runtime's physical rotation metric.

Art Direction / independent Visual QA retain appearance authority. Animation retains source clip/timing authority. Technical Art retains target-host transport/adoption authority. Runtime owns only the serialized representation/budget contract measured here.

## Prior Runtime continuity retained

Pass 56 remains the current Nature rigid-node-vs-shader transfer decision at exact status blob `f83d7ea3...` and Nature Runtime head `c8a017c5...`.

Pass 55 remains predecessor Nature shader-loop evidence. Passes 54/53/52 remain the compressed shader, mutable partial-update and source dynamic-window chain respectively.

The historical Animal 19-key Runtime candidate remains retained at head `13ba20d1...` and artifact `10525970648`; it is now **superseded for physical-angle acceptance**, not erased.

Object static batching, Object VFX MultiMesh, Building RGB8, Animal JOINTS/WEIGHTS width work and other earlier Runtime lanes remain separately recoverable and were not reopened.

## Highest-value next Runtime trigger

Do **not** rerun the Animal key reducer by cadence.

The strongest legitimate next triggers are:

1. Rigging rebinds exact 31-key candidate SHA `5191eadf...` and returns owner-deformation evidence; Runtime may then consume the exact result without changing authority;
2. Art Direction / independent Visual QA returns a concrete visual acceptance/rejection on the retained six-pair evidence;
3. real target-device evidence becomes available for a currently selected representation: CPU/GPU frame time, FPS stability, VRAM/heap and thermal/battery where applicable;
4. otherwise select a genuinely new unowned Runtime budget seam elsewhere in the constellation.

## Explicit non-claims

Pass 57 does **not** establish:

- Rigging owner/deformation acceptance of the new 31-key candidate;
- mathematical continuous-time safety between the 321 sampled points;
- generic safety of greedy key reduction for arbitrary clips or joints;
- Art Direction or independent Visual QA acceptance;
- target-device CPU/GPU/FPS/VRAM/thermal/import-time improvement;
- gameplay/controller/collision acceptance;
- Technical Art production adoption;
- CANON;
- production/game readiness;
- Runtime / Optimization mastery.

## Four-root check

**Truth:** the old 19-key representation is now explicitly rejected under the physical interpretation that its own nominal degree label implied; the lower 31-key compression win is retained because it is the one that actually satisfies `0.075°` physical rotation.

**Agency / non-domination:** Runtime repaired only its existing lane, did not rewrite Rigging's findings or Animation's source clip, and handed the fresh candidate back without an adoption demand.

**Continuity:** pass 56 is preserved by exact blob, the historical 19-key branch/artifact remains recoverable as negative evidence, and the corrected candidate/workflow/artifact are pinned by exact identities and independent rehash.

**Wisdom before speed:** a smaller truthful compression win is preferred over a larger win whose tolerance label was semantically wrong. No tolerance inflation, automatic merge or downstream authority transfer is used to make the numbers look better.

The four AXM roots — **Truth, Agency / non-domination, Continuity, Wisdom before speed** — remain the merge gate.
