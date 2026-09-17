# 3D Art Direction 026 — Character review-006 posed-normal visual reference

Date: 2026-09-17

Decision: **PASS_ART_DIRECTION_CHARACTER_REVIEW006_POSE_RECOMPUTED_NORMAL_VISUAL_REFERENCE_026**

Companion hold: **HOLD_FINAL_CHARACTER_SHADED_MOTION_AND_DIRECTION_FRAME_ADOPTION__CURRENT_EXACT_RIGGING_ANIMATION_RENDER_REBIND_FULL_BODY_TANGENT_TRANSPORT_RUNTIME_PENDING**

## Why this is the bounded Art decision now

The full design constellation was rescanned before acting. The strongest ready visual-direction question is Character normal response, not another source-form, topology, rig, timing, Object-atlas, Building-receiver, Nature-flutter or Animal-storage mutation.

- Character Geometry #16 already owns the exact review-006 `opening_repair` receiver.
- Character Rigging #17 now refines only the measured positive structural boundary, with `+36.55°` last sampled clear and `+36.60°` first sampled failure; Art has no reason to retune the rig by cadence.
- Character Animation #19 now owns an exact current-Rigging `0 -> -30 -> 0 -> +30 -> 0°` diagnostic loop with 321 dense samples and an in-between-key fail-closed overshoot witness.
- Character Technical Art #21 now proves dense **position** transport into current UC, but explicitly cannot prove deformed normals/tangents because the current bound UC pose receiver does not evaluate them.
- Character Runtime #20 preserves the Materials-owned posed-normal arrays exactly while reducing repeated preparation work; it does not supply a new renderer measurement.
- Independent Visual QA has already reproduced the exact static Materials image set and found the posed-normal response visible without retained silhouette/coverage corruption.

This leaves one Art-owned question that can be answered now from real visual evidence: **which exact normal-response behavior should downstream shaded Character work preserve as the review reference?**

## Exact evidence reviewed

Product repository: `mike-axiom-mir/axm-character-design`.

Materials PR #18 exact head:

`e450684b398f8e5b0e23c4cbf717e3475dd4d5ee`

Exact retained Materials artifact:

- artifact ID `10491618962`;
- archive SHA-256 `ed7428269744c702cde5ba75f95f6dd46a60ba6b2028f399281257ee0e70bea2`;
- 36 real Godot PNGs plus payload / observer / runtime receipt;
- renderer: Godot `4.7.2-stable`, GL Compatibility, X11/Xvfb, Mesa llvmpipe;
- frame size: `900 x 700`.

Exact bound Character identity in that static Materials proof:

- review-006 source SHA-256 `8e9252ede4d257509e4eacb595f1c234aa100a42dc46a54b7b45550f2619c5e1`;
- proof-mesh SHA-256 `f173b2af9b7bf69ca78bce2ec2daa07a083748590d9ae9e99443962a6d1aa8e7`;
- Geometry head `8ad006f91ebb9934d5df98702e4410c74a1e68ea`;
- receiver `opening_repair`, `92v / 180t` per side;
- Rigging profile digest `49e59bfd7596619a2a19454ca395276097102047af673fc4219694e777a5a719`;
- Materials Rigging base `efa48c344f1b8c9e70c4c5dfdbf4a3031dacd777`.

The neutral review material is deliberately simple and unchanged across the A/B:

- albedo `[0.56, 0.43, 0.36]`;
- metallic `0.0`;
- roughness `0.62`;
- no UV texture, normal map, tangent-space detail, subsurface, transmission or production-skin treatment.

The compared normal modes are:

1. `frozen_neutral_control` — neutral smooth normals incorrectly reused after deformation;
2. `pose_recomputed_candidate` — the same area-weighted indexed smooth-normal method recomputed from exact posed positions;
3. `inverted_pose_negative` — deliberate sensitivity control only.

## Direct Art observation

I independently downloaded and rehashed the artifact to the exact declared SHA-256, then directly inspected matched frozen/recomputed images at `-40°`, `0°` and `+36°` across front, three-quarter and grazing views.

The neutral `0°` pair is visually identical, as it should be when the geometry and resulting normal field are the same. At `-40°` and `+36°`, the posed-normal candidate changes the shoulder/upper-arm light flow in a way that better follows the deformed surface. The frozen-neutral control retains lighting relationships from the undeformed receiver and therefore reads increasingly detached from the posed planar flow at the stronger shoulder articulation.

The Art preference is **not** for “more contrast.” It is for **surface response that follows the posed receiver rather than preserving a stale neutral direction field**. The important visual property is coherent deformed-form shading, not a particular brightness level.

No inspected candidate frame introduces a new broad hole, detached mass, silhouette shift or coverage loss relative to its frozen comparator. The isolated receiver remains visibly low-detail and is not a production-skin quality claim.

Independent QA reproduced the same bounded evidence numerically:

- neutral `0°`: `0` changed pixels in all three frozen-vs-recomputed contexts;
- `-40°`: `4,989 / 4,978 / 3,138` pixels above 1 LSB in front / three-quarter / grazing;
- `+36°`: `6,058 / 8,132 / 7,542` pixels above 1 LSB;
- foreground coverage XOR: `0` in every retained pose/context;
- inverted-normal negative visible in all `12/12` retained pose/context combinations.

These counts are evidence that the response is renderer-visible and observable. They are **not** universal Art thresholds.

## Art direction

### Preserve

For the next exact Character shaded-motion / transport receiving proof, preserve the **pose-following normal-response principle** represented by Materials PR #18:

> A deformed shoulder must not keep the neutral receiver's normal field merely because positions transported successfully. The downstream visual receiver should expose a direction field that follows the exact posed geometry, or present a deliberately different direction-frame method for direct visual comparison.

The existing Materials `AREA_WEIGHTED_INDEXED_VERTEX_SMOOTH_NORMAL` method is the current exact review reference because it has real renderer evidence and an independent QA reproduction. It is a reference, not an eternal production algorithm.

### Reject as a shortcut

Do **not** treat `frozen_neutral_control` as an acceptable downstream shortcut for this Character chain merely because:

- the source form is unchanged;
- position transport is within tolerance;
- a Runtime optimization can identify static regions;
- the final material is still diagnostic;
- the visible difference is localized.

The current evidence proves that deformed direction response matters visually on this receiver.

### Do not compensate elsewhere

Do not hide a direction-frame transport defect by retuning albedo, roughness, lighting, camera, Animation amplitude, Rigging weights, Geometry, or Organic source form. Hold those owner decisions fixed while the direction-frame receiver is evaluated.

## Exact continuity boundary

This Art PASS is scoped to Materials PR #18 exact static evidence. It does **not** silently relabel that artifact as current-head shaded Animation evidence.

Current downstream identities remain separately named:

- current Rigging PR #17 head `fa16c44b1a488d43842470fc9f30c5fb5e98cab6`;
- current Animation PR #19 head `9519be55581c009fd800d175677d9b50ee6926e6`;
- current Technical Art PR #21 head `1c021d40d7d606f6fb2a29e69f9353640aa33f60`;
- current Runtime PR #20 head `283a6ec0c28aea2d98c95641544e83ccde30016a`.

The Rigging advance from the Materials base is observer/boundary evidence rather than an accepted visual-equivalence bridge. A fresh direct renderer binding to current exact Rigging + Animation is still required before final shaded-motion adoption.

Technical Art #21 is especially important: its `8.161784431363273e-08 m` maximum current-UC position residual is useful position evidence, but current UC does not evaluate deformed normals/tangents. **Position transport PASS must remain separate from direction-frame visual acceptance.**

Runtime #20 is also compatible with this direction because it reports exact Materials-method normal-array identity across the current 321-sample clip while caching only proven-static work. Art requests no Runtime rewrite from that result. A new current-head render is still missing.

## Required next visual receiving proof

The next high-value Character visual proof should bind the **current exact** chain and compare actual shaded temporal output:

1. current Rigging `fa16c44b...`;
2. current Animation `9519be55...`, unchanged `0 -> -30 -> 0 -> +30 -> 0°` diagnostic;
3. a receiver that exposes deformed normals, and tangents if tangent-space detail is introduced;
4. the current pose-following Materials normal reference as the control semantics;
5. matched full-body or at minimum body-context views, not isolated shoulder-only approval;
6. independent Visual QA review;
7. Runtime/target-device evidence remains separate.

If the target engine or transport chooses a different mathematically valid normal/tangent construction, compare it directly against this accepted review behavior rather than declaring equivalence from position residuals alone.

## Handoffs

- **Materials #18:** freeze the exact static posed-normal diagnostic as the current Art review reference. No material retune is requested.
- **Animation #19:** keep the exact diagnostic timing/amplitude; do not widen or retime it to make the shading difference easier to see.
- **Technical Art #21:** next transport proof must expose/evaluate the deformed direction frame before claiming shaded Character equivalence. Do not promote the position PASS into a normal/tangent PASS.
- **Runtime #20:** preserve exact posed-normal semantics; current cache result introduces no Art-requested change. Target-engine/current-head rendered motion remains outside that optimization PASS.
- **Visual QA:** existing independent static PASS remains valid for the exact Materials artifact; final current-head shaded-motion adoption still requires a fresh direct receiving review.

## Explicit non-claims

Direction 026 does **not** establish:

- production skin material;
- physically/anatomically correct skin shading;
- final full-body Character appearance;
- final production normal algorithm;
- tangent-space correctness or final tangents;
- normal-map/detail-map correctness;
- UV/texturing/subsurface/transmission quality;
- current-head shaded Animation playback;
- target-engine interpolation equivalence;
- Technical Art direction-frame transport equivalence;
- target-device Runtime performance;
- arbitrary-pose safety;
- acceptance of the `+36.60°` / `+37°` structural failure region;
- source adoption;
- CANON;
- production/game readiness;
- Character, Materials, Technical Art, Runtime, QA, or Art Direction mastery.

`axm-create-me` remains coordination only. The four AXM roots — **Truth, Agency / non-domination, Continuity, Wisdom before speed** — remain the merge gate.