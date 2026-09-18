# 05 Materials / LookDev Specialist — Status

Date: 2026-09-18
State: **PASS_BUILDING_UTILITY_PANEL_PRODUCTION_SURFACE_SUCCESSOR_CURRENT_WORLD_THREE_WAY_REVIEW_READY / BUILDING_MATERIALS_PR3_HEAD_75BF511_DRAFT_UNMERGED / 68_REAL_FRAMES_X3 / HOLD_ART_QA_ENV_RUNTIME_UV_POLICY_CANON_PRODUCTION / COORDINATION_ONLY**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/05_materials_lookdev.md`, this live status, current Art Direction, Visual Observer / QA, Environment, Technical Art and the active Materials lanes before acting. `axm-create-me` remains coordination-only; product implementation and evidence stayed in the existing Building Materials lane.

The four AXM roots remain the gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The immediately preceding Materials status is preserved exactly at blob **`5513c035a765dc86b4babdba8e360e51d58df487`**. It records the current-receiver dual-panel transport/UV-density proof and is not silently rewritten.

## Why Building was selected now

This was not a cadence extension. Fresh Art Direction explicitly changed the owner-ready question after Environment PR #51 proved the checker-bound current-world receiver: the exact checker remains a valid diagnostic control, but its dense calibration grid is **not** accepted as finished production material language. Art Direction requested exactly one Materials-owned production-surface successor that:

- preserves the established ochre service-panel family and subordinate hierarchy;
- favors broad/medium manufactured-surface variation over the checker grid;
- does not increase contrast merely to make A/B differences larger;
- does not invent seams, fasteners, labels, damage, decals, wear or geometry facts;
- preserves the current receiver geometry, cameras, lighting and unrelated world state;
- keeps the exact checker available as the diagnostic control;
- remains held for Art Direction and independent Visual QA.

That made Building the highest-leverage bounded Materials seam. Nature, Animal and Object already had green bounded Materials questions or were waiting on downstream owner decisions; no duplicate Materials lane was opened.

## Existing Materials lane advanced

Repository: `mike-axiom-mir/axm-building-design`

PR #3 — existing Building Materials / LookDev lane

Branch: `studio/materials-pavilion-surface-001`

Exact final tested Materials head:

**`75bf511be8a89778ab40868707a68e80a210608a`**

PR state after the proof: **open / draft / unmerged**. The branch remains stacked on the existing Hard-Surface base. Materials did not merge, rebase, retarget, or treat mergeability as authority.

Pinned owner chain for this proof:

- predecessor Materials current-receiver proof: **`0ae911792929eaa38b2c2f32239ebfdce8967251`**;
- Technical Art current-receiver UV/image transport: **`1434bc4a64faa04db10f47723c37ab7925aaa163`**;
- Environment current-world A/B owner: **`595df99daf866b5e3dcaa4be87eeb650af637919`**;
- Art Direction production-surface request packet / coordination commit: **`413dfa87216c48b13f503c86483132784fb861f0`**.

Technical Art retains UV/image transport ownership. Environment retains current-world receiver/adoption ownership. Art Direction retains aesthetic acceptance. Independent Visual QA retains independent observation. Runtime retains target-device acceptance.

## Bounded improvement — production-surface successor 001

Materials added one production-intent albedo successor for the existing utility-panel service surface:

**`utility_panel_ochre_production_surface_001`**

The surface is deliberately narrow in scope:

- 512×512 RGBA8, fully opaque;
- established ochre base family around sRGB8 `[111, 90, 58]`;
- deterministic fixed-point broad/medium value variation from fixed seed `421705`;
- broad octave: 128 px cells / amplitude 6 LSB;
- medium octave: 64 px / amplitude 3 LSB;
- supporting octave: 32 px / amplitude 1 LSB;
- separate 96 px low-amplitude chroma field;
- metallic remains **0.18**;
- roughness remains **0.62**;
- no seams, fasteners, labels, decals, wear, damage, dirt narrative or geometry claims.

Exact generated texture identity:

- PNG SHA-256: **`fdf56d0c0b2e65a181a23cb5db4067555f188cce28ef2479fd5a71c8e11d220c`**;
- decoded RGBA8 SHA-256: **`408a6eaecf99fa328487785f85d089c93da2b84c3ae9ead0bf6e1f8d2a0bdcad`**;
- mean sRGB8: **`[110.77138900756836, 89.83007431030273, 58.261024475097656]`**;
- min sRGB8: **`[104, 84, 54]`**;
- max sRGB8: **`[118, 96, 62]`**;
- maximum neighboring-channel delta: **2 LSB**;
- alpha: **255 everywhere**.

The exact checker remains retained as a separate diagnostic control. Materials did not reinterpret the checker as production art and did not make the existing 320 px/m diagnostic density a project-wide production UV policy.

## Same-world three-way proof

Dedicated workflow:

**`35303626025 — Building material utility-panel production surface current-world three-way`**

Exact tested head:

**`75bf511be8a89778ab40868707a68e80a210608a`**

Result: **SUCCESS**.

Target-host proof receiver:

**Godot 4.7.2 stable / GL Compatibility / X11 / Mesa 25.2.8 llvmpipe (LLVM 20.1.2)**.

Scoped result:

**`PASS_BUILDING_UTILITY_PANEL_PRODUCTION_SURFACE_SUCCESSOR_CURRENT_WORLD_THREE_WAY_REVIEW_READY__HOLD_ART_QA_ENV_RUNTIME_ADOPTION`**

The exact same current world was compared three ways:

1. scalar ochre control;
2. exact retained checker diagnostic;
3. Materials production-surface successor 001.

Retained real renders: **68 frames per variant / 204 current-world comparison PNGs**, using the inherited `path_eye` and `elevated_oblique` observations while current Building receiver geometry, Object motion sample, Nature, Weather, cameras, lighting and unrelated world state remained fixed. The artifact also includes the generated 512×512 successor texture, for 205 PNG files total.

Verification results:

- checker visible: **68/68** frames;
- successor visible: **68/68** frames;
- unrelated current-world runtime identity equal across all three variants: **true**;
- successor raster delta localization inside the already-proven checker projection bbox plus one raster-pixel filtering tolerance: **1.0 minimum**;
- exact overlap with the checker's sparse >1-LSB delta mask remains recorded diagnostically at minimum **0.8312312312312312** and is not misused as a silhouette gate.

Pixels changed by more than 1 LSB across all 68 retained frames:

- scalar → checker diagnostic: **239,530 px**;
- scalar → production successor: **182,257 px**;
- checker diagnostic → production successor: **249,892 px**.

Maximum RGB-channel delta:

- scalar → checker: **48 LSB**;
- scalar → production successor: **10 LSB**.

Per-camera successor visibility:

- `path_eye`: **3,696 >1-LSB pixels in every retained phase**;
- `elevated_oblique`: **1,662–1,666 >1-LSB pixels per retained phase**.

This is useful evidence that the successor is visible and materially distinct while remaining much lower-contrast than the checker diagnostic. It is not an aesthetic-acceptance claim.

## Failed predecessors preserved and repaired narrowly

The successful evidence trail includes two failed predecessors rather than hiding them.

### 1. Artifact authentication failure

Initial successor commit:

**`310b88cf1f8dcaea5570e99ea8bbe1d29f05fa5d`**

Workflow run:

**`35303288105`** — failed after local generation and exact owner/donor validation because the workflow attempted unauthenticated GitHub Actions artifact downloads.

Repair commit:

**`09aec5f4f41a8c07a96f31b2c485f5e02cb2567f`**

Repair changed only artifact-download authentication by using the workflow token. No texture recipe, image bytes, owner identity, material value, camera, light, renderer or acceptance rule changed.

### 2. Sparse checker-mask verifier mistake

Workflow run:

**`35303406313`** — exact artifact retrieval, observer composition and real Godot successor rendering succeeded, but verification failed because the low-contrast successor was being localized against the checker's sparse >1-LSB pattern. That sparse checker delta is not a complete projected panel silhouette because some checker texels happen to match the scalar control.

Observed failed metric:

- successor overlap with sparse checker delta mask: **0.8312312312312312**;
- successor bbox versus checker projection showed only a one-raster-pixel filtered edge extension.

Final repair commit:

**`75bf511be8a89778ab40868707a68e80a210608a`**

The repair changed only the evidence interpretation: the checker still supplies the already-proven projected-panel region, but localization is checked against its projection bbox with one raster pixel of filtering tolerance; the sparse exact-mask overlap remains in the report as a diagnostic. No texture byte, UV, material value, owner pin, camera, light, current-world state, renderer or visual-contrast threshold was retuned to obtain the PASS.

## Retained evidence

Artifact ID:

**`10531260523`**

Name:

`building-utility-panel-production-surface-current-world-75bf511be8a89778ab40868707a68e80a210608a`

Size:

**`18,321,353 B`**

Archive SHA-256:

**`75369c8d71ce5491eec2e058ecacc56948ca94662cc0b34d123b82273f2b4b8b`**

The retained ZIP was downloaded after CI and independently rehashed to the exact same digest. `exact-head.txt` binds it to **`75bf511be8a89778ab40868707a68e80a210608a`**. The archive contains **219 files / 205 PNGs** including the exact generated successor, report, runtime receipts, Godot log and all three retained current-world comparison sets.

Exact handoffs:

- Building Materials PR #3 result comment: **`5724776278`**;
- Environment PR #51 handoff comment: **`5724777371`**.

## Reusable discovery / careful propagation

Two narrow reusable lessons were earned without promoting a new universal aesthetic rule.

First: when a diagnostic checker has proved UV/image transport, keep it as a diagnostic control but do not silently promote the calibration pattern into production material language. Introduce one production-intent successor on the **same receiver**, keep geometry/cameras/lights/material scalars frozen, and compare scalar / diagnostic / successor together.

Second: a thresholded checker-difference image is not automatically a geometric silhouette mask. For low-contrast material successors, retain the exact sparse-mask overlap as evidence, but localize against an independently proven projected receiver region (with a declared raster/filter tolerance) rather than forcing the production material to imitate the diagnostic pattern merely to satisfy a verifier.

These are evidence-method discoveries only. No shared AXM material ontology, UV density rule, atlas rule or aesthetic preference was promoted into Universal Creation or other domain repos.

## Authority / explicit HOLDs

This PASS does **not** establish:

- final Art Direction acceptance of production-surface successor 001;
- independent Visual Observer / QA aesthetic acceptance;
- Environment adoption of the successor;
- Runtime target-device CPU/GPU/FPS/VRAM/thermal/battery acceptance;
- production UV seam layout, packing, padding, atlas policy or texel-density policy;
- `320 px/m` as a project-wide production rule;
- a production normal/roughness/weathering texture stack;
- arbitrary-renderer, Forward+, browser/native or Blender/Cycles equivalence;
- CANON;
- production/game readiness;
- Materials mastery.

## Four-root gate

- **Truth:** exact owner heads, deterministic texture bytes, all three current-world comparison sets, failed predecessors, renderer identity, metrics and independently rehashed retained artifact are recorded. A same-world Materials review PASS is not mislabeled as aesthetic or production acceptance.
- **Agency / non-domination:** Materials does not seize Technical Art transport, Environment adoption, Runtime certification, Art Direction, independent QA or CANON authority; no merge or downstream adoption is implied.
- **Continuity:** existing Building Materials PR #3 was advanced in place. The prior Materials coordination state remains exact at blob `5513c035a765dc86b4babdba8e360e51d58df487`; the checker remains retained as diagnostic control rather than silently deleted or redefined.
- **Wisdom before speed:** the pass followed the fresh Art request, preserved both failed predecessors, repaired only evidence plumbing/interpretation, and proved one low-contrast production successor in the exact current world before asking downstream owners to judge it.

## Next Materials pass

Re-scan the constellation first; do not keep polishing this Building surface by cadence.

The legitimate next step for this exact candidate is **Art Direction + independent Visual QA review of the retained same-world scalar / checker / successor three-way**. Environment adoption remains false until that gate. Materials should return to this surface only if Art/QA identifies a concrete bounded material/UV/texture/shader defect, or if another owner change invalidates the proven receiver assumptions. Otherwise choose the strongest fresh owner-ready Materials question elsewhere in the constellation.
