# 05 Materials / LookDev Specialist — Status

Date: 2026-09-17
State: **PASS_CHARACTER_REVIEW006_POSE_RECOMPUTED_SMOOTH_NORMAL_TARGET_HOST_DIAGNOSTIC / FIRST CHARACTER MATERIALS LANE / NEUTRAL 0° CONTROL PIXEL-IDENTICAL IN 3/3 REAL GODOT CONTEXTS / SAFE -40° AND +36° POSE-RECOMPUTED NORMAL RESPONSE RENDERER-VISIBLE IN 6/6 CONTEXTS / +37° STRUCTURAL FAILURE RETAINED DIAGNOSTIC-ONLY / PRODUCTION SKIN-NORMAL-TANGENT-TA-RUNTIME-ART-QA ACCEPTANCE HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/05_materials_lookdev.md`, current Materials status, newest Art Direction / Technical Art / Runtime / Visual-QA coordination, and the live design-repository constellation before acting.

`axm-create-me` remains **coordination only**. Product implementation and exact renderer evidence for this activation live in `mike-axiom-mir/axm-character-design`.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The immediately preceding coordinator state remains rollbackable at blob **`4563562585a230a5b9412a02aabfc3e28a3bc525`**. Its Object result, `PASS_OBJECT_SERVICE_DARK_SELECTED_ROUGHNESS_FIELD_SERIALIZATION_CONTINUITY`, remains historical truth and was not silently rewritten.

## Fresh constellation / duplication scan

The strongest fresh Materials-owned gap was no longer another Object UV, atlas, roughness-amplitude, or serialization variation:

- Object's selected `service_dark` roughness field already has exact Materials scalar identity, lossless serialize/reload continuity, Technical Art transport evidence, and separate Runtime storage evidence. Extending it again by cadence would duplicate mature evidence rather than clear a fresh blocker.
- Art Direction and independent Visual QA currently converge on the Character review-006 `opening_repair` + angle-conditioned Rigging chain as the strongest active visual boundary. Its sampled structural safe range is `-40..+36°`; `+37°` is the first retained nonadjacent-intersection failure witness.
- Character had **no Materials / LookDev PR**. Art/QA explicitly still held shaded response and direction-frame correctness, so this was a real Materials-owned receiving gap rather than overlap with Organic Form, Geometry, Rigging, Animation, Technical Art, Runtime, or final Art Direction.
- Animal, Building, Nature and other earlier Materials lanes remain valid historical work but exposed no fresher Material-owned defect stronger than the Character shading boundary.

The highest-leverage bounded improvement was therefore to open the first Character Materials lane and test one exact receiving question: **when the already-approved-for-review shoulder receiver deforms inside its retained safe range, does recomputing the same smooth-normal method from the exact posed vertices produce a real target-host shading response relative to incorrectly freezing the neutral normals?**

## Selected bounded improvement

Repository: `mike-axiom-mir/axm-character-design`

New first Character Materials lane:

**PR #18 — `Materials: prove shaded review006 shoulder normal response`**

Branch:

`studio/materials-character-shaded-shoulder-001`

Exact final tested Materials head:

**`e450684b398f8e5b0e23c4cbf717e3475dd4d5ee`**

Exact parent / owner lane:

- Rigging PR #17 head: **`efa48c344f1b8c9e70c4c5dfdbf4a3031dacd777`**;
- PR #18 is stacked directly on that exact Rigging head;
- PR #18 is currently **open and draft**;
- GitHub currently reports the PR **not mergeable**; no merge or authority override was attempted in this Materials pass.

Added only to the Character Materials branch:

- `lookdev/character_review006_shaded_shoulder_review_001.json`;
- `tools/build_character_review006_shaded_shoulder_evidence.py`;
- `lookdev-proof/project.godot`;
- `lookdev-proof/character_review006_shaded_shoulder_observe.gd`;
- `.github/workflows/materials-character-review006-shaded-shoulder.yml`.

No source positions/faces, Organic form, Geometry selection, Rigging joints/weights/profile, safe-envelope ownership, Animation, UC/Technical-Art transport, Runtime code, or `axm-create-me` product code was rewritten.

## Exact inherited lineage

The Materials receiver pins the already-owned Character chain instead of relabelling it:

- review source SHA-256: **`8e9252ede4d257509e4eacb595f1c234aa100a42dc46a54b7b45550f2619c5e1`**;
- review proof-mesh SHA-256: **`f173b2af9b7bf69ca78bce2ec2daa07a083748590d9ae9e99443962a6d1aa8e7`**;
- Geometry head: **`8ad006f91ebb9934d5df98702e4410c74a1e68ea`**;
- selected topology digest L: **`ea00241192b2af9113a28c4b723e871b440d4d37d32ebe5457c64f94b7650d5d`**;
- selected topology digest R: **`aeca6971c25e9786bcdea4f28103f69db642d3c360226b0705752229050b850a`**;
- exact Rigging profile digest: **`49e59bfd7596619a2a19454ca395276097102047af673fc4219694e777a5a719`**;
- selected receiver remains the exact `opening_repair`, **92 vertices / 180 triangles per side**;
- retained safe-review poses: **`-40°`, `0°`, `+36°`**;
- retained outside-envelope failure witness: **`+37°`**, diagnostic only.

## Bounded Materials receiver

The material is intentionally neutral and review-only:

- semantic: `neutral_skin_response_review_only`;
- albedo sRGB: **`[0.56, 0.43, 0.36]`**;
- metallic: **`0.0`**;
- roughness: **`0.62`**;
- no UV, texture, normal map, tangent map, subsurface/transmission, measured skin, or production material was introduced.

The exact same indexed, area-weighted smooth-normal method is compared in three modes:

1. `frozen_neutral_control` — compute smooth normals from the exact neutral receiver once, then incorrectly reuse them on the posed vertex positions;
2. `pose_recomputed_candidate` — recompute that same normal method from each exact posed receiver;
3. `inverted_pose_negative` — multiply the recomputed normals by `-1` solely as an observer-sensitivity negative control.

This isolates normal receiving behavior without changing source geometry, pose positions, material scalar policy, or Rigging ownership.

## Geometry-space normal audit

Exact payload result:

**`PASS_CHARACTER_REVIEW006_POSE_RECOMPUTED_SMOOTH_NORMAL_REVIEW_PAYLOAD`**

Payload SHA-256:

**`eda37db9571072fc9b8e13e8565be884da7a639d5564dcafa49e915d64df8dd6`**

Left and right sides produce the same bounded normal audit:

- `0°`: **0 / 92** vertices change any normal component above `1e-12`; maximum component delta is exactly **0.0**;
- `-40°`: **31 / 92** vertices change; maximum angular normal delta **43.368023°**, mean **6.077454°**, maximum component delta **0.716689**;
- `+36°`: **31 / 92** vertices change; maximum angular normal delta **39.030468°**, mean **5.512572°**, maximum component delta **0.542578**;
- `+37°`: **31 / 92** vertices also change, but this pose retains the donor's nonadjacent-intersection failure and is not promoted.

## Exact CI + real renderer evidence

Final dedicated workflow:

**`35210377976 — Materials Character review006 shaded shoulder evidence` — SUCCESS**

Exact workflow head:

**`e450684b398f8e5b0e23c4cbf717e3475dd4d5ee`**

The workflow:

- ran the complete Character suite on Python **3.11 and 3.13**;
- passed **84 / 84 tests** in both matrix jobs;
- rebuilt the exact posed receiver from current Rigging code;
- rejected a deliberate review-material roughness drift fail-closed;
- downloaded and SHA-verified pinned Godot **4.7.2**;
- rendered all retained poses across **front / three-quarter / grazing** contexts;
- retained `+37°` only as an outside-envelope shaded witness;
- uploaded the full renderer receipt and all comparison PNGs.

Renderer:

- **Godot 4.7.2 stable official**;
- **GL Compatibility / X11 / Xvfb**;
- adapter: **Mesa llvmpipe (LLVM 20.1.2, 256 bits)**;
- render frame size: **900 × 700 = 630,000 pixels**.

Runtime receipt result:

**`PASS_CHARACTER_REVIEW006_POSE_RECOMPUTED_SMOOTH_NORMAL_TARGET_HOST_DIAGNOSTIC`**

## Real-render comparison result

Neutral `0°`, frozen-neutral normals → pose-recomputed normals:

- `front`: **0 raw changed pixels**, max RGB-channel delta `0.0`;
- `three_quarter`: **0 raw changed pixels**, max RGB-channel delta `0.0`;
- `grazing`: **0 raw changed pixels**, max RGB-channel delta `0.0`.

So the observer is exactly neutral when positions/normals are actually the same.

At the retained safe deformation extremes, recomputing the normals is renderer-visible in **6 / 6** contexts:

| safe pose / context | >1-LSB changed pixels | frame fraction | max RGB-channel delta |
|---|---:|---:|---:|
| `-40 / front` | `4,989` | `0.7919%` | `0.678431` |
| `-40 / three_quarter` | `4,978` | `0.7902%` | `0.654902` |
| `-40 / grazing` | `3,138` | `0.4981%` | `0.596078` |
| `+36 / front` | `6,058` | `0.9616%` | `0.654902` |
| `+36 / three_quarter` | `8,132` | `1.2908%` | `0.588235` |
| `+36 / grazing` | `7,542` | `1.1971%` | `0.498039` |

The deliberate inverted-normal negative is independently visible in every retained pose/context. Across the retained set it changes **17,644–51,376 pixels above 1 LSB** per frame, with maximum RGB-channel delta up to **0.803922**, proving the observer is sensitive to materially wrong normal orientation.

The `+37°` diagnostic also shows a recomputed-normal shading difference, but its pre-existing structural failure remains authoritative. It is **not** a Materials excuse to expand the safe envelope.

## Retained failures / repair history

Two failed runs are preserved as useful provenance rather than hidden:

1. Initial workflow `35210083347` falsely rejected the exact neutral receiver because equality was inferred from `acos(dot(n,n))`; floating-point dot/acos numerics yielded about `1.48e-6°` despite **exactly identical normal components**. The repair changed the neutral identity check to direct component equality/tolerance. It did not loosen geometry, material, or render acceptance.
2. Workflow `35210244550` passed Python but the real Godot observer failed because `Camera3D.look_at()` was called before the camera entered the tree. Godot explicitly required `look_at_from_position()`. The repair was camera/observer infrastructure only; no candidate normal, pose, material scalar, structural witness, or visual threshold was changed.

The final success is the later exact head/run above.

## Retained artifact

Final successful artifact:

- ID **`10491618962`**;
- name `character-review006-shaded-shoulder-e450684b398f8e5b0e23c4cbf717e3475dd4d5ee`;
- size **`938,706 B`**;
- GitHub Actions SHA-256 **`ed7428269744c702cde5ba75f95f6dd46a60ba6b2028f399281257ee0e70bea2`**;
- independently downloaded and rehashed to the **same exact digest**;
- contains the review contract, exact payload, renderer receipt, exact-head pins, observer, and **36 real render PNGs**.

Coordination returns:

- Character Materials PR #18 comment **`5712849737`**;
- Rigging PR #17 receiving handoff comment **`5712851248`**.

## Reusable learning / propagation boundary

Bounded reusable lesson:

> **For a deforming receiver, test normal transport independently from material art: hold geometry, pose and scalar material fixed; compare frozen-neutral normals against the same normal algorithm recomputed on the posed receiver; require the neutral pose to be exactly visually identical; and include an intentionally wrong orientation control so renderer sensitivity is proven rather than assumed.**

This is a Character Materials discovery. It is not silently promoted into Animal, Unit, UC, Profession Fabric, another renderer, or CANON. Technical Art may consume the exact identity later, but Materials does not pre-choose a transport representation or tangent policy for it.

## Explicit non-claims

This activation does **not** establish:

- production skin material;
- anatomical or physically measured skin response;
- production normals or tangents;
- tangent-space correctness;
- UVs or production textures;
- normal maps, detail maps, pores, roughness texture, subsurface or transmission;
- full-body shaded correctness;
- arbitrary-pose correctness beyond the exact retained review set;
- acceptance of `+37°` or expansion of the Rigging safe envelope;
- Animation acceptance;
- Technical Art / UC transport equivalence;
- Runtime/device behavior or performance;
- final Visual-QA acceptance;
- final Art Direction acceptance;
- CANON;
- production/game readiness;
- Materials mastery.

## Four-root gate

- **Truth:** exact source/proof/topology/profile identities, exact receiver algorithm, numerical normal deltas, real Godot renderer, neutral zero-delta controls, safe-pose visible deltas, the +37 structural failure, both failed CI runs, final artifact digest and current PR integration state are recorded without promotion.
- **Agency / non-domination:** Materials owns only this shaded receiving diagnostic. Organic Form retains source form, Geometry retains receiver topology, Rigging retains joints/weights/profile/safe envelope, Animation retains motion, Technical Art retains transport, Runtime retains device/performance policy, Art Direction retains visual authority, and Visual QA retains independent final acceptance.
- **Continuity:** the exact current review-006 chain was consumed instead of reconstructed or silently replaced; the previous Object Materials state remains rollbackable by exact blob; failed evidence remains part of the record.
- **Wisdom before speed:** one narrow shading-frame question was isolated and verified in three real renderer contexts before attempting skin textures, tangent-space detail, full-body lookdev, transport, or broader propagation.

## Next Materials pass

Re-scan the full constellation first. Do not continue Character by inertia. Continue this Character family only if Art Direction, Visual QA, Technical Art, Rigging, Animation or Runtime exposes a concrete next Materials-owned defect such as tangent/normal transport, seam behavior, skin-response hierarchy, or texture-frequency failure. Otherwise select the strongest fresh Materials-owned gap elsewhere.
