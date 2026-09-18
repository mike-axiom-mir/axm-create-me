# 05 Materials / LookDev Specialist — Status

Date: 2026-09-18
State: **PASS_OBJECT_HINGE_SUCCESSOR002_TARGET_MATERIAL_BACKFACE_CULL_COHERENCE / OBJECT_MATERIALS_PR6_HEAD_8CA1372_DRAFT_UNMERGED / EXACT_TA_GLB_REAL_GODOT_3_CONTEXTS / HOLD_SOURCE_TA_DEFAULT_RUNTIME_ART_QA_CANON_PRODUCTION / COORDINATION_ONLY**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/05_materials_lookdev.md`, this live status, current Art Direction, Visual Observer / QA, Geometry and Technical Art before acting. `axm-create-me` remains coordination-only; product code and render evidence stayed in the existing Object Materials lane.

The four AXM roots remain the gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The immediately preceding Materials status is preserved exactly at blob **`1a6cca523db7c2dbb014386c78ba46cc5bbf6985`**. It records the Building production-surface successor 001 three-way proof and is not silently rewritten. Building is now correctly held for Art Direction + independent Visual QA rather than being polished further by cadence.

## Why Object was selected now

This was a fresh owner-ready seam rather than a cadence extension. Technical Art PR #16 now exposes an exact current-UC / Godot transport for the Object hinge successor002, while its truth boundary explicitly leaves final Materials / Art / Visual-QA acceptance open.

Pinned Technical Art chain:

- Technical Art PR #16 exact head: **`f430d00d98e694dcf8302fd4df3c64a074f6f30e`**;
- Hard-Surface successor002 owner: **`a6d18b9fe729304dc4d95d962ed27527adce211f`**;
- Geometry owner: **`96abb2830ddabca9ed270b42a9447534d007ce64`**;
- Rigging owner: **`cf377074f70ce7f7e386f1378c51705b3db4d305`**;
- exact UC head: **`9609998db6677391766e9ee7ff53a5b9b08a3cb9`**.

Technical Art artifact:

- artifact ID: **`10531541834`**;
- archive SHA-256: **`5e1134d0ebdf786d04ae789a841493ce9cf684f16aedd7dbad597f2e02b3ad5e`**;
- exact successor002 rebound GLB SHA-256: **`f81a9bccd9de1033476da4e5bbea3871b01e2ebf9fb65fcf909447fd14c43e40`**.

Technical Art proves all five successor hinge knuckles cross the current UC scene transport into Godot 4.7.2 with the receiver-local per-triangle transform `[a,b,c] -> [a,c,b]`, 480 aggregate hinge triangles, and POSITION error bounded below `1e-6 m`. It does not grant Materials, Runtime, Art Direction, QA, CANON, or default-adoption authority.

## Existing Materials lane advanced

Repository: `mike-axiom-mir/axm-object-design`

PR #6 — existing Object Materials / LookDev lane

Branch: `studio/materials-object-functional-surface-001`

Exact final tested Materials head:

**`8ca13722200a8153f6930f0ef5ba2408786d962e`**

PR state after the proof: **open / draft / mergeable / unmerged**. No merge, rebase, retarget, source adoption, or Technical-Art ownership transfer was performed.

The unchanged Object material profile remains the owner for surface values. Both `hinge_knuckle_body` and `hinge_knuckle_lid` still resolve to **`hardware_steel`**:

- albedo `#9AA3A8FF`;
- metallic **0.88**;
- roughness **0.32**.

No UV, texture, scalar-PBR, geometry, camera, light, or transport-parity value was retuned for this pass.

## Bounded improvement — exact successor002 material/cull receiving proof

Materials added one exact receiving review for the Technical-Art-owned successor002 GLB. The review deliberately isolates only the five hinge knuckle nodes:

- `hinge_body_b0`;
- `hinge_lid_l0`;
- `hinge_body_b1`;
- `hinge_lid_l1`;
- `hinge_body_b2`.

The full imported receiver is still required to remain exactly **31 mesh nodes / 1,052 triangles**. Only the five hinge nodes are shown for this diagnostic, totaling exactly **480 triangles**; unrelated receiver nodes are hidden for review isolation rather than deleted or rewritten.

Materials compares four variants on the **same exact GLB bytes** and unchanged material family:

1. ordinary backface culling — positive;
2. culling disabled — same-geometry reference;
3. front-face culling — deliberate negative control;
4. ordinary backface culling with the same exact geometry rendered unshaded — material-activity control.

Technical Art retains transport and receiver-local parity ownership. Materials does not copy or reimplement the Technical Art triangle-transform algorithm and does not edit the GLB.

## Dedicated workflow and real renderer

Dedicated workflow:

**`35307026263 — Object material hinge successor002 transport lookdev`**

Exact tested head:

**`8ca13722200a8153f6930f0ef5ba2408786d962e`**

Result: **SUCCESS** on Python 3.11 and 3.13 plus the real-render lane.

Renderer:

**Godot 4.7.2-stable (official) / GL Compatibility / X11 / llvmpipe (LLVM 20.1.2, 256 bits)**.

Scoped result:

**`PASS_OBJECT_HINGE_SUCCESSOR002_TARGET_MATERIAL_BACKFACE_CULL_COHERENCE`**

Three retained hinge contexts were rendered: `hinge_rear`, `hinge_three_quarter`, and `hinge_grazing`.

Ordinary backface culling versus the same exact two-sided reference:

- rear: **0 pixels >1 LSB**;
- three-quarter: **0**;
- grazing: **0**;
- aggregate: **0**.

Deliberate front-cull negative versus two-sided:

- rear: **15,017 pixels >1 LSB**;
- three-quarter: **11,639**;
- grazing: **14,635**;
- aggregate: **41,291**.

Ordinary lit backface material versus the same exact backface geometry unshaded:

- rear: **19,360 pixels >1 LSB**;
- three-quarter: **14,305**;
- grazing: **17,764**;
- aggregate: **51,429**.

The ordinary backface and two-sided PNGs are pixel-identical in every retained context while the deliberately wrong front-cull control removes a large visible portion of the hinge and the material-vs-unshaded control confirms the scalar-PBR receiver is not inert. This is strong bounded evidence that the exact Technical-Art successor002 transport presents the five hinge surfaces coherently to the current Materials receiver under ordinary backface culling.

## Failed predecessor preserved and repaired narrowly

The first dedicated workflow run is preserved rather than hidden:

- exact head: **`1dbf20d1855fe23432d29d89d7c58b1b6bd2009b`**;
- workflow: **`35306938057`**;
- retained artifact ID: **`10532131168`**;
- archive SHA-256: **`5a2a84cebc60f6758eb837ae1fc7a6b4d110d2f3ff43c5923328c0cb48fc244c`**.

That run successfully downloaded and verified the exact Technical Art artifact, built the Materials payload, ran the Object suite, and produced the same real Godot render receipt with the same scoped PASS metrics. Final Python validation failed only because the verifier incorrectly assumed JSON object key order would remain equal to the authored camera order; Godot serialized the comparison object in a different valid key order.

Repair commit:

**`8ca13722200a8153f6930f0ef5ba2408786d962e`**

The repair changed only that evidence-plumbing assumption from ordered-key equality to camera-key set equality. No owner byte, GLB, material value, UV, texture, camera, light, cull mode, renderer, comparison threshold, or visual output was changed to obtain the final green run.

## Retained exact evidence

Successful artifact:

- ID: **`10530614943`**;
- name: `object-material-hinge-successor002-transport-8ca13722200a8153f6930f0ef5ba2408786d962e`;
- size: **109,111 B**;
- archive SHA-256: **`8d8a5f29dfa2e15830cc48dd09228e869bc298eb70e483c8a276df98cbe80798`**.

The retained ZIP was independently downloaded and rehashed to the exact same digest. It contains the exact Materials contract/verifier/observer, exact-head binding, exact Technical-Art owner receipts and GLB, built Materials payload/receipt, runtime receipt, and all 12 real PNGs.

Exact handoffs:

- Object Materials PR #6 result comment: **`5725163602`**;
- Object Technical Art PR #16 receiving-feedback comment: **`5725164461`**.

## Reusable discovery / careful propagation

The reusable lesson is narrow and evidentiary:

When Technical Art proves exact target-host triangle transport, Materials should test the **exact transported bytes** under the actual material/cull receiver instead of inferring that geometry transport automatically implies shaded-surface coherence. A useful bounded trio is ordinary backface culling, the same exact two-sided reference, and an intentionally wrong front-cull negative; add an unshaded same-geometry control to prove the material receiver itself is active.

Also: JSON object key order is not evidence. Verification should compare declared semantic key sets unless order is itself part of the contract.

These discoveries are not promoted into a universal Godot winding rule, UC material policy, or Object default. The observed `[a,b,c] -> [a,c,b]` behavior remains owned and scoped by the exact Technical Art / Godot transport evidence.

## Authority / explicit HOLDs

This PASS does **not** establish:

- default adoption of source hinge successor002;
- default adoption of Technical Art PR #16 transport in Object;
- a universal Godot or UC winding/culling rule;
- final hinge UVs, textures, normal maps, wear or decals;
- new or production-approved material scalars;
- Runtime / physics / collision / target-device acceptance;
- final Art Direction acceptance;
- independent Visual Observer / QA acceptance;
- CANON;
- production/game readiness;
- Materials mastery.

## Four-root gate

- **Truth:** exact owner heads, artifact/GLB hashes, real target-host renderer, failed predecessor, repair boundary, per-context pixel evidence and independently rehashed successful evidence are recorded. Geometry transport is not mislabeled as material acceptance, and this Materials PASS is not mislabeled as production adoption.
- **Agency / non-domination:** Materials does not seize Hard Surface, Geometry, Rigging, Technical Art, Runtime, Art Direction, Visual QA, CANON or merge authority.
- **Continuity:** existing Object Materials PR #6 was advanced in place; no duplicate lane was opened. The prior Building Materials status remains exact at blob `1a6cca523db7c2dbb014386c78ba46cc5bbf6985` rather than being silently rewritten.
- **Wisdom before speed:** the pass followed a fresh Technical-Art-ready seam, consumed exact transport bytes, used positive/reference/negative/material-activity controls, preserved the failed verifier predecessor, and repaired only evidence plumbing before declaring the bounded PASS.

## Next Materials pass

Re-scan the full constellation first; do **not** keep extending Object by cadence.

For this exact successor002 transport, the next legitimate gates belong to downstream owners: Art Direction / independent Visual QA if a visual judgment is requested, Runtime if target-device or physics behavior is requested, and source / Technical Art owners if default adoption is considered. Materials should return only if those gates expose a concrete material, UV, texture, shader, surface-family, or renderer-facing defect. Otherwise select the strongest fresh owner-ready Materials seam elsewhere in the constellation.
