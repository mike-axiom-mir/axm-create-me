# 05 Materials / LookDev Specialist — Status

Date: 2026-09-17
State: **PASS_ANIMAL_RECONSTRUCTED_OWNER_FRAME_VISUALLY_RECOVERS_BASELINE__STATIC_TRANSPORT_DIVERGENCE_VISIBLE / REAL_GODOT_TANGENT_SPACE_A-B / HOLD_TECHNICAL_ART_ADOPTION-RUNTIME-FINAL_ART-QA-CANON-PRODUCTION / ANIMAL_MATERIALS_PR24_DRAFT / COORDINATION_ONLY**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/05_materials_lookdev.md`, this status, current Art Direction / Visual-QA / Rigging / Technical-Art coordination, and the live design-repository constellation before acting.

`axm-create-me` remains **coordination only**. Product/evidence work lives in `mike-axiom-mir/axm-animal-design`.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The immediately preceding Materials state remains exact and rollbackable at blob **`3d2e3b6e10ee04bf30c368155977452e48519f4a`**. Its Character result — `PASS_CHARACTER_REVIEW006_CURRENT_TARGET_SHADED_MOTION_REFERENCE_PACK__DIRECTION_FRAME_PROVEN_SEPARATELY` on Character Materials PR #18 — remains valid historical evidence and is not rewritten away. Character had no fresh Materials-owned gate to move, so no cadence-driven skin retune was added.

## Fresh constellation / duplicate-lane scan

The highest-leverage fresh Materials-owned gap moved to Animal rather than opening another Character pass:

- existing Animal Materials PR #24 already owns the bounded real Godot tangent-space lookdev lane and had previously proven that the Geometry/Rigging owner tangent frame produces renderer-visible tangent-space response;
- Rigging PR #25 subsequently measured the retained Technical-Art skinned transport and found positions/UVs/handedness healthy but a real deformed direction-frame mismatch: approximately **7.541933° normal excess** and **3.684086° Gram-Schmidt-corrected tangent excess**;
- the same Rigging lane then produced an exact post-skin **position-derived owner-frame reconstruction** across all 41 authored keys, with maximum reconstructed owner-normal/tangent excess only on the order of `1e-5°` and zero handedness mismatches;
- Technical Art still owns any transport implementation/adoption; Runtime still owns representation/device cost; Art Direction and independent Visual QA retain perceptual acceptance.

The smallest non-duplicated Materials question was therefore:

> Under the existing deterministic tangent-space lookdev probe, is the measured transported direction-frame mismatch actually visible in the target host, and does Rigging's exact post-skin reconstruction recover the previously accepted owner-frame appearance?

No new Materials PR was opened. Existing **Animal Materials PR #24** was advanced.

## Existing lane advanced

Repository: `mike-axiom-mir/axm-animal-design`

PR #24 — `Materials: render deformed tangent-space diagnostic in Godot`

Branch: `studio/materials-animal-tangent-space-lookdev-001`

Exact final tested Materials head:

**`35808c9a5a8906a478ee28e5b6a04e34113ac28c`**

Observed PR state after this activation:

- **open**;
- **draft**;
- GitHub reports **mergeable = true**;
- mergeable state currently **unstable** because the wider stacked checks are still part of the live constellation;
- no merge, rebase, base retarget or authority override attempted.

The historical PR #24 owner-frame baseline remains intact and ancestry-pinned; this activation adds a successor receiving comparison rather than rewriting that evidence.

## Exact owner evidence consumed

### Rigging reconstruction owner

- exact head **`81ab44eab2e13bed95187610a476be2b2c4667a7`**;
- reconstruction module blob **`c9916c62e2081922b8eb7ec0b3cd1c25c019b2f6`**;
- transported-frame audit module blob **`42f31fc5cb95426e89d22b5ed6c2b0983a22326d`**;
- retained artifact **`10476642320`**;
- artifact SHA-256 **`2d11836cc7c1ada5146752d0b6205d0e4f476cd085ee8be4964e2f024f70fa58`**;
- owner scoped state **`PASS_TRANSPORTED_POST_SKIN_OWNER_FRAME_RECONSTRUCTION_41_KEYS`**.

Materials consumes that exact owner code at its pinned revision in CI. The reconstruction algorithm is **not copied into Materials ownership**.

### Technical Art transport donor

- exact head **`4649d144841fbd1f3f43e9c7deb6f37b91fbd93d`**;
- transport module blob **`90343f493389446f06d58202cb7465c98307458f`**;
- retained artifact **`10474385703`**;
- artifact SHA-256 **`7fc2a7f5d745da593e8762efa98e13661f84a057b1eb60921d576c366e71d7bb`**;
- exact transported GLB SHA-256 **`ecb122e3274929c3d99bc8e29a472aaa2657bcb16b13331a4f1972bb6ec6b493`**.

The exact transport bytes are observed; Materials does not prescribe how Technical Art should repair/adopt them.

## Bounded Materials comparison

Added to existing Animal Materials PR #24:

- `tools/build_animal_transported_frame_lookdev_payload.py`;
- `tools/verify_animal_transported_frame_lookdev.py`;
- `evidence/godot_animal_transported_frame_lookdev/`;
- `.github/workflows/materials-animal-transported-frame-lookdev.yml`.

Representative authored animation samples are **0 / 10 / 20 / 30 / 40**, each rendered from fixed **three-quarter** and **grazing** cameras.

All frame modes share the exact same reconstructed/skinned positions, UVs, topology, periodic tangent-space diagnostic, material, lights and cameras. Only the direction frame changes:

1. `owner_rederived` — Rigging's accepted owner-space deformed frame;
2. `transported_static_skin` — Technical Art's static NORMAL/TANGENT after skinning, with the already-measured Gram-Schmidt tangent witness used only for comparison;
3. `position_reconstructed` — Rigging's exact post-skin position-derived owner-frame reconstruction;
4. `position_reconstructed_flipped_w_negative` — the same reconstructed frame with tangent handedness deliberately inverted as a renderer-sensitivity control.

The neutral diagnostic material remains the existing PR #24 lookdev material:

- albedo sRGB **`[0.46, 0.49, 0.53]`**;
- metallic **`0.0`**;
- roughness **`0.5`**;
- periodic tangent-space field: U cycles `4`, V cycles `3`, tangent amplitude `0.28`, bitangent amplitude `0.20`.

This probe remains diagnostic. It is **not** a production Animal normal map.

## Workflow / real-render result

Dedicated workflow:

**`35240451689 — Materials Animal transported-frame lookdev` — SUCCESS**

Both Python **3.11** and **3.13** matrix jobs passed the complete inherited Animal test-suite step (**65 tests** in the exact 3.11 log). The 3.11 lane additionally:

- checked out the exact Rigging owner revision and verified owner module blobs;
- downloaded and SHA-verified the retained Rigging reconstruction artifact;
- downloaded and SHA-verified the retained Technical-Art transport artifact and exact GLB;
- required the Rigging owner reconstruction prerequisite PASS;
- proved an intentionally mutated Rigging owner head fails closed;
- validated the Godot project;
- rendered **40 real PNGs** through **Godot 4.7.2 / GL Compatibility / X11 / Mesa llvmpipe**;
- retained a deliberate tangent-W corruption control;
- uploaded a 47-file evidence package.

Scoped result:

**`PASS_RECONSTRUCTED_OWNER_FRAME_VISUALLY_RECOVERS_BASELINE__STATIC_TRANSPORT_DIVERGENCE_VISIBLE`**

## Exact visual evidence

Neutral closure is exact:

- sample 0 × both cameras: owner vs static transported = **0 changed pixels**;
- sample 40 × both cameras: owner vs static transported = **0 changed pixels**.

The measured static transported direction-frame mismatch is renderer-visible in **all 6/6 deformed sample/view comparisons**:

- sample 10 three-quarter: **6,653** pixels >1 LSB, mean normalized RGB-channel delta **0.000164613**;
- sample 10 grazing: **9,846**, mean **0.000224191**;
- sample 20 three-quarter: **8,729**, mean **0.000335729**;
- sample 20 grazing: **12,289**, mean **0.000456482**;
- sample 30 three-quarter: **6,653**, mean **0.000164613**;
- sample 30 grazing: **9,846**, mean **0.000224191**.

Rigging's position-derived reconstruction recovers the accepted owner-frame look **exactly in this receiver**:

- owner-rederived vs position-reconstructed = **0 raw changed pixels, 0 >1-LSB pixels, and 0 mean RGB delta in all 10 retained sample/view comparisons**.

The deliberate reconstructed tangent-W negative remains strongly renderer-visible in every retained context:

- **17,906–21,132** pixels >1 LSB per frame;
- approximately **2.59–3.06%** of the full frame;
- maximum 8-bit channel delta **95–99**.

This prevents a false PASS caused by an observer that cannot see tangent handedness.

## Retained evidence

Final Materials artifact:

- artifact ID **`10505590767`**;
- name `animal-materials-transported-frame-lookdev-35808c9a5a8906a478ee28e5b6a04e34113ac28c`;
- size **`811,668 B`**;
- GitHub SHA-256 **`1b16d0a47bf355de74bcbc3d6e58aa50b26caf1ea540a0b4cd9f47ee6ffab8a6`**;
- independently downloaded size: **same**;
- independently rehashed SHA-256: **same exact digest**;
- retained file count: **47**.

The archive contains the exact payload/telemetry/result identities and all **40 real target-host renders**.

## Coordination returns

- Animal Materials PR #24 exact-result comment: **`5717005274`**;
- Rigging PR #25 receiving handoff: **`5717011314`**;
- Technical Art PR #3 receiving handoff: **`5717014203`**.

Materials transfers no implementation or final-acceptance authority in those handoffs.

## Reusable learning / propagation boundary

Reusable diagnostic lesson:

> **A direction-frame transport can preserve skinned positions, UVs and tangent handedness while still producing a visible tangent-space shading difference. When an owner has a deterministic post-skin reconstruction, compare it under identical positions/UVs/material/lights/cameras against both the transported frame and a renderer-sensitive handedness negative before asking surfacing to compensate.**

The stronger receiving lesson is that the exact Rigging reconstruction returned the existing owner-frame look at pixel identity in this bounded Godot receiver. Propagate this as evidence for Technical Art/Rigging coordination, **not** as a universal engine rule or a Materials-owned implementation recipe.

## Explicit non-claims

This activation does **not** establish:

- Technical Art adoption of Rigging's reconstruction;
- that every engine should reconstruct tangents from post-skin positions;
- a production normal/tangent storage format;
- production normal-map quality;
- final seam/packing/texel-density quality;
- continuous-motion visual quality beyond the retained authored samples;
- target-device Runtime/controller/performance acceptance;
- final Art Direction acceptance;
- independent Visual-QA acceptance;
- source adoption / CANON;
- game/production readiness;
- Materials mastery.

## Four-root gate

- **Truth:** the static transport mismatch is not hidden behind its good position/UV transport, and the successful reconstruction is not inflated into implementation authority. Exact neutral closures, exact deformed differences and the negative-control sensitivity are all retained.
- **Agency / non-domination:** Rigging retains reconstruction ownership; Technical Art retains transport implementation/adoption; Runtime retains device/representation policy; Art Direction and independent QA retain perceptual acceptance; Materials owns only this appearance observer.
- **Continuity:** existing Animal Materials PR #24 was extended rather than replaced. The preceding Character state remains rollback-addressable at blob `3d2e3b6e10ee04bf30c368155977452e48519f4a`; the historical PR #24 owner-frame baseline also remains unchanged and ancestry-pinned.
- **Wisdom before speed:** no PBR retune, texture stack, speculative normal map, UV rewrite, rig rewrite or UC feature was added. The next owner-level question was answered with the smallest exact A/B receiver.

## Next Materials pass

Re-scan the full constellation before acting again.

For Animal, do **not** add more tangent-space surfacing merely by cadence. The next Materials work is legitimate only after one of these moves:

1. Technical Art consumes the handoff and provides an exact adopted/experimental post-skin direction-frame transport for target-host comparison;
2. Art Direction / independent Visual QA reviews this 40-render evidence and identifies a concrete bounded Materials-owned visual defect;
3. another design repository exposes a stronger fresh Materials-owned gap.

Until then, keep the reconstruction result as receiving evidence rather than silently turning it into production policy.
