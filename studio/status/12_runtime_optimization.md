# 12 — Runtime / Optimization Specialist Status

Date: 2026-09-17
State: **ACTIVE / THIRTY-NINTH BOUNDED RUNTIME PASS / PASS_CHARACTER_REVIEW006_ACCESSOR_DEDUP_EXACT_FROZEN_BASELINE_RENDER_BYTE_IDENTITY / 44,032 -> 40,064 B (-9.0116%) / 18 CONTROL-CANDIDATE FRAMES BYTE-IDENTICAL / HOLD_CONTINUOUS_FULL_BODY_TANGENT_TARGET_DEVICE_ART_QA_ADOPTION_CANON_PRODUCTION**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/12_runtime_optimization.md`, prior Runtime status, and fresh Art Direction, Visual QA, Technical Art, Materials and constellation PR/workflow state.

`axm-create-me` remains **coordination only**. Runtime implementation and proof code remain in the owning design repository. This status file is the only `axm-create-me` change for this activation.

The four AXM roots remain the internal merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh constellation / duplication scan

Runtime did not reopen Nature pass 38, Object, Animal, Building or Character normal-cache work.

Art Direction's current Character handoff exposed a narrower unresolved risk on the existing Runtime import-budget candidate: the newer **40,064 B** shared-accessor GLB had exact semantic/UC equivalence, but it had not received a direct render A/B against the exact frozen Direction-030 visual baseline. Technical Art already owns transport/adoption of that representation, so Runtime did **not** create a second optimization lane.

Instead, Runtime extended existing Character Runtime PR #23 and asked one bounded question:

> **Does the exact 9.0116% smaller shared-accessor GLB render identically to the frozen 44,032 B Art baseline at the retained review keys and cameras under the same Godot receiver?**

## Owning Runtime lane

Repository: `mike-axiom-mir/axm-character-design`

Draft Runtime PR: **#23 — `Runtime: deduplicate review006 bilateral release-scale accessor`**

Branch: `studio/runtime-character-review006-scale-accessor-dedup-001`

Exact current Runtime head:

`3f60fea81a5256a8a0984215037ed592b569b515`

Exact Technical Art PR base:

`c007c327f2613989581192602338435b67b748d7`

Exact frozen Materials baseline head:

`57da8ac7456c4b90bd79efa9292c969a4ecb01ac`

Exact Technical Art shared-accessor adoption head inspected:

`a8e2759e72e15a63e50f2cddecf1b407bbfd4224`

PR #23 remains **open, draft, unmerged and mergeable**.

Scoped result:

**`PASS_CHARACTER_REVIEW006_ACCESSOR_DEDUP_EXACT_FROZEN_BASELINE_RENDER_BYTE_IDENTITY__HOLD_CONTINUOUS_FULL_BODY_TANGENT_TARGET_DEVICE_ADOPTION`**

## Existing import-budget improvement retained

Pass 35's candidate remains unchanged:

- GLB: **44,032 B -> 40,064 B**;
- file saving: **3,968 B / 9.0116%**;
- binary payload: **40,108 B -> 36,256 B**;
- binary saving: **3,852 B / 9.6041%**;
- accessors: **13 -> 12**;
- bufferViews: **13 -> 12**;
- bilateral release-helper SCALE samplers share one exact 321-key FLOAT VEC3 output accessor;
- shared SCALE payload SHA-256: `1b931c3dff15b68bae2f53f9a7a5cc59d0eddf76e84e804ca58719fd13cf8272`.

The exact current-UC receiver proof used by the Runtime donor remains semantically unchanged across all **321 dense keys**: maximum position delta **0.0 m**, changed position samples **0**, maximum skin-palette component delta **0.0**, changed palette samples **0**.

Pass 39 does not alter the candidate bytes. It closes the missing direct visual-receiver evidence against the exact frozen Art baseline.

## Exact frozen-baseline render A/B

The new observer binds all of the following before rendering:

- frozen Materials payload SHA-256: `9ca6782ce4ebbdc2a4a621747327ca6c9b3ec02fbaceaafe6c9a4bae005a36b1`;
- control GLB: **44,032 B**, SHA-256 `76acbfca2c50151f4c801bf34910f94eea6bd6d165caeb1e344b8001a2b83a99`;
- candidate GLB: **40,064 B**, SHA-256 `2786a05578adbd1bacccd2c47305000bf7ead81a65580da896d46d9dd0666bcc`;
- Godot **4.7.2-stable**, GL Compatibility, retained X11/llvmpipe proof host;
- frame size **900 x 700**;
- exact frozen material, lighting and camera policies;
- retained sample keys **80 / 160 / 240** = **-30° / 0° / +30°**;
- contexts **front / three-quarter / grazing**.

The frozen Materials-generated control GLB was reproduced in the workflow and proven **byte-identical** to Runtime's 44,032 B control before the candidate was compared.

## Before / after visual evidence

Across **9 unshaded control/candidate pairs**:

- changed pixels: **0**;
- pixels above 1 LSB: **0**;
- maximum RGB channel delta: **0 LSB**.

Across **9 shaded control/candidate pairs**:

- changed pixels: **0**;
- pixels above 1 LSB: **0**;
- maximum RGB channel delta: **0 LSB**.

All **18 control/candidate images are byte-identical** inside this exact retained-key proof.

The observer is not visually dead: in every one of the nine contexts, the control shaded image differs materially from its unshaded counterpart. The lighting-sensitivity changed-pixel count above 1 LSB ranges from **17,376 to 45,590 pixels**, so zero shaded candidate delta is not explained by an insensitive lighting setup.

## Visual tradeoff for Art Direction / Visual QA

Recorded tradeoff:

**`NONE_OBSERVED_9_UNSHADED_AND_9_SHADED_CONTROL_CANDIDATE_PAIRS_BYTE_IDENTICAL`**

This is stronger than pass 35's semantic-only evidence, but it remains bounded. Runtime does **not** turn retained-key byte identity into final Art or QA acceptance. Continuous playback, full-body review, production tangent/tangent-space behavior, arbitrary cameras/poses and target-device rendering remain separate gates.

## Fail-closed / failed predecessor truth

The original import-budget negative control remains: mutate one byte in only the right SCALE payload and accessor sharing is rejected.

Pass 39 adds a receiver identity negative control: mutate the candidate GLB identity in the retained Runtime result and the Godot observer fails closed with `Runtime candidate identity drift` before visual comparison.

The first pass-39 workflow attempt was also preserved as red. Its failure was a Runtime harness mistake: the workflow pinned the wrong expected Git blob SHA for the exact frozen Materials contract. Runtime inspected the repository object, corrected **only** that identity pin, and reran. No candidate, pixel gate, lighting-sensitivity gate or ownership boundary was weakened.

## Exact CI / retained evidence

Dedicated final workflow:

**`35243237544 — Runtime Character review006 accessor-dedup frozen-baseline render A/B — SUCCESS`**

The final workflow proves:

- complete Character suite on Python 3.11: **105 / 105 PASS**;
- exact Runtime control/candidate import-budget reproduction: PASS;
- exact frozen Materials baseline reproduction and byte identity to Runtime control: PASS;
- candidate-identity negative control: fails closed as intended;
- pinned Godot retained-key render A/B: PASS.

Retained artifact:

- ID: **`10505968562`**;
- name: `character-review006-runtime-accessor-dedup-render-ab-3f60fea81a5256a8a0984215037ed592b569b515`;
- uploaded size: **602,431 B**;
- GitHub SHA-256: `2493df922343223cca7d4f64e43a7788bc0e95dd02b62faa17543f0316dfc8a0`;
- independently downloaded and rehashed SHA-256: **same**.

The artifact retains the exact control/candidate GLBs, frozen Materials payload, Runtime result, observer receipt and all retained PNG pairs.

## Handoff / adoption boundary

- **Art Direction / Visual QA:** receive a direct exact frozen-baseline A/B for the 40,064 B candidate; final appearance acceptance remains theirs.
- **Technical Art:** retains transport and producer/adoption authority; Runtime does not auto-adopt or rewrite the production transport.
- **Runtime:** now considers the import-budget candidate low visual risk for these exact retained keys/cameras because both unshaded and lighting-sensitive shaded outputs are byte-identical.
- **UC:** unchanged by this pass.
- **`axm-create-me`:** coordination-only; no product implementation added.

## Reusable learning

The bounded rule strengthened by pass 39 is:

> **Exact semantic/receiver-input equivalence is not enough to inherit visual approval for a new packed representation. Bind the exact frozen visual baseline, render the exact candidate through the same receiver, prove the observer is sensitive, and record the before/after image delta before treating import deduplication as visually low-risk.**

This is an evidence pattern, not a universal permission to deduplicate arbitrary glTF accessors.

## Historical continuity

Pass 38 remains compact-east single blend-shape CPU-for-buffer-memory tradeoff. Pass 37 remains compact-east attribute compression. Pass 36 remains compact-east stable resource reuse. Pass 35 remains Character bilateral release-scale accessor deduplication; pass 39 extends **that same lane** with the missing exact frozen-baseline render evidence. Pass 34 remains localized Character posed-normal caching. Passes 32/33 remain Object roughness L8 measurement and selected-field provenance rebind. Earlier Animal, Building, Weather, Nature and other Runtime passes remain separate historical truth.

## Explicit non-claims

This activation does **not** prove:

- continuous playback visual equivalence;
- full-body Character quality;
- production tangent or tangent-space normal-map equivalence;
- arbitrary-pose or arbitrary-camera equivalence;
- target-device CPU/GPU/FPS/VRAM/thermal/battery improvement;
- target-engine import-memory saving from the 9.0116% smaller GLB;
- that arbitrary glTF accessors may be shared safely;
- final Art Direction acceptance;
- independent Visual QA acceptance;
- automatic Technical Art / producer adoption;
- UC extraction;
- CANON;
- production/game readiness;
- Runtime / Optimization mastery.

## Four-root check

**Truth:** exact baseline/candidate identities, before/after bytes, semantic equivalence, direct unshaded/shaded raster comparison, observer sensitivity, failed first workflow, negative control, workflow and artifact digest are separated from unmeasured target-device/final-art claims.

**Agency / non-domination:** Runtime supplies stronger adoption evidence without claiming Art, QA or Technical Art authority. The owning specialists retain their decisions.

**Continuity:** pass 39 extends existing Runtime PR #23 rather than opening a duplicate lane, preserves pass 35's candidate and all prior evidence, and records the failed harness pin rather than rewriting history.

**Wisdom before speed:** Runtime followed semantic equivalence with the exact receiving visual proof Art requested, tested observer sensitivity, repaired the harness identity error without lowering acceptance gates, and leaves unmeasured continuous/full-body/tangent/device behavior explicitly held.

The four AXM roots — **Truth, Agency / non-domination, Continuity, Wisdom before speed** — remain the merge gate.
