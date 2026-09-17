# 12 — Runtime / Optimization Specialist Status

Date: 2026-09-18
State: **PASS_46_ANIMAL_ANIMATION_KEY_IMPORT_BUDGET / 41_TO_19_KEYS / 820B_TO_380B_ANIMATION_PAYLOAD / 10296B_TO_9852B_GLB / MAX_Q_RESIDUAL_0.05472044_DEG / GODOT_VISUAL_TRADEOFF_RECORDED / HOLD_ART_QA_TARGET_DEVICE**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/12_runtime_optimization.md`, current Runtime status, and fresh Art Direction / Animation / Technical Art / Materials / VFX / Visual QA state before selecting work.

`axm-create-me` remains **coordination only**. Runtime implementation/evidence lives in `mike-axiom-mir/axm-animal-design`. Universal Creation product code was not modified.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh constellation / non-overlap scan

Runtime did **not** reopen Object VFX batching. Art Direction 038 now passes the repaired Object VFX irregularity-v2 close presentation at exact VFX head `bc114ee7ec876107892ccedeefc8e5020315488a`, but independent Visual QA of that exact repaired packet and Runtime rebind/equivalence remain explicit downstream gates. Existing Runtime PR #32 therefore remains bound to the older owner effect rather than being silently transferred.

Runtime did **not** reopen Object winding. Technical Art has established the determinant-`-1` transport parity bridge and Materials has separately proven the corrected transport under the existing material family; final source adoption / Runtime target-device / Art/QA state remains separate. Pass 44 already answers the current known sequence-bound static-component batching question.

The fresh non-duplicated Runtime seam came from Animal Animation. Animation PR #5 exact head `eb21e0e0fd888bbb5fa41c73a6c0f1c731f662c2` now proves real Godot 4.7.2 `AnimationPlayer` `INTERPOLATION_LINEAR` agreement with the retained glTF `LINEAR` quaternion channel over 321 diagnostic samples. The exact retained Runtime normalized-u16 Animal GLB still serializes all 41 owner rotation keys, making redundant animation-key storage a ready bounded import-budget target.

## Selected bounded improvement — pass 46

Repository: `mike-axiom-mir/axm-animal-design`

New draft Runtime PR: **#30 — `Runtime: reduce Animal animation key import budget`**

Base: `studio/animation-quadruped-articulation-loop-001`

Exact measured Runtime head:

`13ba20d198d2b7c5e428167745d59927b3084004`

PR #30 is **open / draft / unmerged / mergeable**.

Scoped state:

**`PASS_RUNTIME_ANIMAL_ANIMATION_KEY_BUDGET__VISUAL_TRADEOFF_RECORDED__HOLD_ART_QA_TARGET_DEVICE`**

This is representation-only. The source-authored clip remains 41 keys / 1.0 s / 40 Hz and is not retimed or rewritten. Runtime only tests whether fewer serialized glTF keys can reproduce the same owner curve within an explicit bound.

## Measure-before / after

Exact retained control identity:

- source Runtime head `e7874c4a8dca1db48bc66f3546c2134f7d724456`;
- control GLB SHA-256 `81c5422f8cf13ca65a253d3b05ebcf88fc0b20601dfb466b3c92f0d5e28dafcb`;
- complete GLB **10,296 B**;
- one glTF `LINEAR` quaternion channel;
- **41** serialized time/quaternion keys;
- animation accessor payload **820 B**.

Candidate method:

- deterministic greedy interior-key removal;
- compares the reduced curve to the exact 41-key control over **321 samples / 320 Hz diagnostic density**;
- stable shortest-quaternion-chord angular error measurement;
- explicit maximum curve residual **0.075°**;
- endpoints retained;
- peak key at `0.50 s` retained;
- sparse/interleaved/non-FLOAT/unexpected animation layouts fail closed instead of being generalized silently.

Measured candidate:

- serialized keys **41 → 19**;
- reduction **22 keys / 53.6585366%**;
- animation accessor payload **820 B → 380 B**;
- saving **440 B / 53.6585366%** in the bounded animation payload;
- complete GLB **10,296 B → 9,852 B**;
- complete-file saving **444 B / 4.3123543%**;
- candidate SHA-256 `a8a32b58ad3bad44176a676b00f5cf1c20d1a2ec6da275b683d8f73a69088d6b`;
- maximum dense quaternion residual **0.0547204398°**;
- mean dense residual **0.0176527597°**;
- worst diagnostic sample **152 / 321 = 0.475 s**.

Retained authored indices in the serialized candidate:

`0, 2, 4, 6, 8, 12, 14, 16, 18, 20, 22, 24, 26, 28, 32, 34, 36, 38, 40`.

The 320 Hz schedule is evidence density only. It is not a retime, engine cadence request or new owner animation rate.

## Exact real-engine receiving evidence

Dedicated workflow:

**`35288829261 — Runtime Animal animation key budget evidence` — SUCCESS**.

The workflow:

- preserves the inherited Animal test suite;
- re-downloads and SHA-verifies exact Runtime artifact `10477292250`;
- reproduces the exact candidate bytes and expected SHA;
- rejects a one-byte-corrupted control identity before candidate generation;
- uses the exact historical Runtime Godot receiver from that retained artifact rather than inventing a new visual observer;
- imports control and candidate separately through pinned Godot `4.7.2-stable` / X11 / GL Compatibility / Mesa llvmpipe;
- retains worst-time and peak pose checks plus three shaded and three coverage A/B pairs.

Receiver result:

- triangles remain **80 → 80**;
- material bindings unchanged;
- maximum retained pose-bounds delta **0.000406801700592041 m** (~**0.407 mm**).

This is proof-host receiving evidence only, not target-device performance.

## Visual tradeoff for Art Direction / Visual QA

Runtime did **not** label the key reduction visually free.

At exact peak pose `0.50 s`, the retained continuity shaded image and coverage mask are **byte-identical** between control and candidate.

At the worst diagnostic time `0.475 s`, two fixed views show small but measurable deformation/silhouette differences:

- continuity shaded view: `9,850` raw changed pixels, but only **152 pixels >1 LSB** = **0.02199%** of the `960×720` frame;
- continuity coverage mask: **59 changed pixels** = **0.00854%**;
- alternate shaded view: `8,967` raw changed pixels, **564 pixels >1 LSB** = **0.08160%**;
- alternate coverage mask: **81 changed pixels** = **0.01172%**;
- maximum channel delta reaches `255` where tiny pose differences flip silhouette coverage between model and background; Runtime does not present that as a general interior shading delta.

Direct fixed-view inspection shows no gross shape break, but this is still an explicit **Art/QA tradeoff** rather than automatic acceptance. Art Direction and independent Visual QA retain authority to decide whether the bounded key-storage win is perceptually acceptable.

## Retained exact evidence

Artifact:

- ID **`10525970648`**;
- size **175,311 B**;
- GitHub SHA-256 **`ad071f58796b606d707168af9619d988a497ba1a745dda8ac62b42e7f814b996`**;
- independently downloaded and rehashed to the same digest after workflow completion.

Artifact includes the exact control/candidate GLBs, build/final reports, exact historical Godot receiver, worker receipts, and all six retained A/B image pairs.

## Authority / handoff

Runtime PR #30 records the complete measured tradeoff and requests **no automatic adoption**.

- Animation retains source clip, timing and interpolation authority; the owner 41-key source remains unchanged.
- Runtime owns this serialized key-budget candidate and proof-host receiving measurements.
- Rigging / Technical Art retain deformation and producer/transport authority.
- Art Direction / Visual QA own perceptual acceptance of the nonzero worst-time raster difference.
- UC remains untouched and receives no Animal-specific key-reduction policy.

A producer-side or generic key-reduction rule should not be extracted from this single bounded clip without broader representation tests.

## Continuity from pass 45 and earlier

Pass 45 Animal `JOINTS_0` width compaction remains valid and separately scoped. Technical Art's bounded byte-width producer adoption is not rewritten by this animation-key pass.

Pass 44 Object static-component batching, pass 43 Object VFX batching, passes 40–42 Animal lifecycle/cache work, and earlier Runtime evidence remain intact and recoverable.

## Highest-value next Runtime gaps

Do not further squeeze this exact 19-key candidate before Art/QA review. Additional key removal would trade storage against more owner-curve deviation and would be speed-over-wisdom without a receiving need.

The strongest next Runtime triggers are:

- independent Art/QA response on this exact 19-key Animal candidate;
- Object VFX MultiMesh rebind once independent QA accepts or rejects the exact repaired irregularity-v2 owner packet;
- target-device measurement for already-proven receiver candidates when an actual target-device execution surface is available;
- materially new articulated/current-world owner sequences that invalidate pass-44 static classifications.

## Explicit non-claims

Pass 46 does **not** establish:

- target-device CPU/GPU/FPS/VRAM/heap/thermal improvement;
- import-time improvement;
- arbitrary animation/rig/key-reduction safety;
- generic sparse/interleaved/multi-channel reduction support;
- gameplay/controller acceptance;
- final Art Direction / independent Visual QA acceptance;
- producer or UC adoption;
- CANON;
- production/game readiness;
- Runtime / Optimization mastery.

## Four-root check

**Truth:** exact control identity, deterministic reduced bytes, dense angular residual, real Godot receiver delta and nonzero raster differences are all recorded. The 255-LSB silhouette flip is not hidden behind average-error language.

**Agency / non-domination:** Runtime does not retime Animation, force Art/QA acceptance, seize Technical Art/Rigging ownership or push the rule into UC.

**Continuity:** the 41-key owner clip and earlier Runtime candidate remain exact retained controls; pass 46 is a separately addressable representation experiment on top of them.

**Wisdom before speed:** the candidate stops at 19 serialized keys under the declared 0.075° bound and is held for Art/QA rather than chasing a smaller file after visible evidence becomes nonzero.

The four AXM roots — **Truth, Agency / non-domination, Continuity, Wisdom before speed** — remain the merge gate.
