# 07 — 3D Animation & Motion Specialist Status

Date: 2026-09-17
State: **PASS_TARGET_HOST_SERVICE_DARK_TEXTURE_SURFACE_MOTION_REBIND_101_SAMPLES / MOTION UNCHANGED / PRODUCTION UV-TEXTURE + CONTINUOUS PLAYBACK + GAMEPLAY HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/07_animation_motion.md`, current Animation status, and current Rigging / Technical Art / Visual QA / Runtime / Art Direction state across the active 3D constellation.

`axm-create-me` remains **coordination only**. No product asset, source motion, rig, material, UV implementation, renderer, runtime controller or gameplay implementation was added here.

The four AXM roots remain the internal merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh constellation / duplication scan

- **Object:** existing Animation PR #10 remains the single active Object motion lane. It already carries bounded source motion, phase, keeper/socket, target-host, wall-clock-characterization and mechanical-phase evidence. Technical Art PR #28 supplied the strongest fresh downstream-ready seam: a real two-surface `service_dark` textured GLB had crossed the current UC path into Godot, but Animation had not yet proven that the moving lid-owned textured receiver preserves identity through the exact existing motion while the front-panel-owned receiver remains static.
- **Animal:** the previous dense normalized-u16 weight subframe guard remains preserved and green as the current Animal temporal baseline. No changed Runtime/Rigging dependency or named motion defect justified another Animal change in this activation.
- **Character:** remains structurally constrained by its own rig/deformation acceptance state; no motion rewrite was used to hide a non-Animation hold.
- **Nature / Map / Environment:** no fresher bounded Animation-owned seam displaced the Object Technical Art handoff, and no duplicate motion lane was opened.
- **Visual QA / Art Direction:** no named timed motion defect required retiming/easing/key changes; perceptual acceptance remains separate.

## Highest-leverage bounded improvement — exact textured receiving surfaces through unchanged Object motion

Repository: `mike-axiom-mir/axm-object-design`

Existing draft PR: **#10 — Animation: prove bounded equipment-case lid open-hold-close clip**

Branch: `studio/animation-object-lid-open-close-001`

Exact Animation head: **`954c747c5e5565077abc20cb09458e2e414b9382`**.

PR state at inspection: **open / draft / mergeable**.

New reusable Animation-local contract:

`axm.object-animation-service-dark-texture-motion-rebind/v0.1`

This is a receiver/motion evidence method. It does not author or modify source geometry, source UVs, Materials policy, Technical Art transport, the rig, motion timing, Runtime behavior or gameplay.

### Preserved motion identity

Exact existing sequence:

- sequence: `lid-latch-open-hold-close-001`;
- duration: `2.5 s`;
- authored sample rate: `40 Hz`;
- endpoint-inclusive samples: `101`;
- base lid clip: `lid-open-hold-close-001`;
- base lid clip digest: `9e149195ab315f83f2d6f7d76f374f4be245567f77402de3e8a1d40ab79ef340`;
- source SHA-256: `49b1f9ed9865893d6de6f1ec8f069576732df694853fde4e3fcff366de32644a`;
- source lid hinge: `[0.0, 0.252, 0.306]`, +X;
- source -> UC coordinate map: `[x,y,z] -> [x,z,y]`;
- target hinge: `[0.0, 0.306, 0.252]`, +X;
- source-positive lid angle maps to target sign `-1`;
- retime / easing / key / amplitude / phase / rig / source changes: **none**.

## Exact Technical Art dependency consumed, not copied

Pinned Technical Art PR #28:

- exact head: `cddf0a2f3ba89572e794579db1fcec2f0deecaf6`;
- retained artifact ID: `10486764098`;
- retained artifact SHA-256: `244a0bc3d0a9e6eeb66978d3fe4e96fde5f2fcb41d429dcb27ab217c482c1cb8`;
- exact textured GLB SHA-256: `1de850a64c709554f3f7e376724b5f1627d35f2c2565bf35758ac02f57026da4`;
- required TA result: `PASS_OBJECT_SERVICE_DARK_EXACT_ATLAS_RGB_TO_CURRENT_UC_TEXTURED_GLB`;
- Materials authority head: `4c12a0a57f6aa8778cff41efad321e13567c6c91`;
- UC head: `6ad6ad51e6f40a3dc1d0cccd3af7f7c7ab28fb33`.

Exact receiving surfaces:

- `lid_inner_service_surface`: 4 vertices / 6 indices / 4 UVs; owned by the moving lid in this proof;
- `front_service_panel_outer_service_surface`: 4 vertices / 6 indices / 4 UVs; static in this clip;
- both retain the embedded `512 x 512` service-dark texture.

Animation consumes those exact retained bytes and receipts. It does not copy Technical Art's transport adapter, Materials' atlas policy or UC's generic texture machinery.

## Actual motion / target-host method

A Godot 4.7.2 proof host imports the **exact retained Technical Art GLB**, binds a proof-local pivot at the exact source->UC mapped hinge, creates a real `AnimationPlayer`, and seeks all 101 unchanged authored lid poses. The lid-inner service surface follows the lid; the front-panel service surface remains static.

At every authored sample the verifier checks:

- moving lid service-surface world positions against the exact hinge transform;
- static front service-surface world-position stability;
- lid/front UV stability;
- material resource identity;
- embedded texture resource identity;
- neutral endpoint closure;
- material movement sufficient to prove the moving surface was actually exercised.

The negative control changes only the verifier-side target hinge by **+1 mm** and must fail closed as `FAIL_TARGET_HINGE_IDENTITY_DRIFT`.

## Exact-head CI / retained evidence

Final dedicated workflow:

**`35201212848 — Object Animation service-dark texture motion rebind — SUCCESS`**

Exact head:

`954c747c5e5565077abc20cb09458e2e414b9382`

The workflow completed:

- full Object test suite on Python 3.11: **46 tests PASS**;
- full Object test suite on Python 3.13: **46 tests PASS**;
- exact motion-sequence rebuild and identity checks: **PASS**;
- exact Technical Art artifact download + independent workflow-side rehash: **PASS**;
- pinned Godot 4.7.2 target-host import: **PASS**;
- +1 mm target-hinge negative control: **PASS_FAILS_CLOSED**;
- all 101 authored target-host poses: **PASS**;
- retained evidence upload: **PASS**.

Scoped result:

**`PASS_TARGET_HOST_SERVICE_DARK_TEXTURE_SURFACE_MOTION_REBIND_101_SAMPLES`**

Exact observed metrics:

- maximum moving lid world-vertex error: **`8.42936955791629e-08 m`**;
- maximum front-panel service-surface static drift: **`0.0 m`**;
- maximum lid UV drift: **`0.0`**;
- maximum front UV drift: **`0.0`**;
- maximum lid service-surface displacement from neutral: **`0.753843784332275 m`**;
- proof-wrapper neutral drift: **`0.0 m`**;
- final lid neutral drift: **`0.0 m`**;
- final front neutral drift: **`0.0 m`**;
- lid embedded texture: **`512 x 512`**;
- front embedded texture: **`512 x 512`**;
- material resource identity stable: **true**;
- texture resource identity stable: **true**.

The final retained CSV contains the header plus **101 numeric sample rows** and was directly inspected after download.

Retained Animation artifact:

- artifact ID: **`10487309567`**;
- name: `object-animation-service-dark-texture-motion-rebind-954c747c5e5565077abc20cb09458e2e414b9382`;
- size: **`38,695 B`**;
- GitHub archive SHA-256: **`3ba6a5bbe25d74a31e42e50ede397fc64ba48cb080b4aff8f72125d048c12f70`**;
- independently downloaded/rehashed SHA-256: **`3ba6a5bbe25d74a31e42e50ede397fc64ba48cb080b4aff8f72125d048c12f70`**.

## Preserved failed drafts / verifier repair trail

Truth-before-story is preserved:

1. An earlier target-host attempt failed because the newly generated imported scene was sampled before it had entered the SceneTree. That was a **verifier tree-readiness defect**, not a motion failure. The repair added target-host readiness only; motion, source, rig, dependency bytes and tolerances were unchanged.
2. A later green target-host attempt revealed that Godot does not support the verifier's `%g` sample-CSV format specifier. The receipt metrics were valid, but the retained CSV rows were malformed. That green archive is **not** used as the final evidence packet.
3. The verifier-only serialization was repaired from `%g` to supported fixed-point formatting, again with no motion/tolerance/source/rig/dependency change. Final workflow `35201212848` then passed with a clean numeric 101-row CSV and the same measured motion result.

No tolerance was widened to manufacture a PASS.

## Decision

**`PASS_TARGET_HOST_SERVICE_DARK_TEXTURE_SURFACE_MOTION_REBIND_101_SAMPLES__MOTION_UNCHANGED__PRODUCTION_UV_TEXTURE_CONTINUOUS_PLAYBACK_GAMEPLAY_HELD`**

The exact Technical Art service-dark receiving surfaces can be exercised through the unchanged Object lid sequence in Godot while preserving moving/static ownership, UVs, material/texture resource identity and neutral closure. This closes a real cross-lane Animation evidence gap without retiming or rewriting the clip.

It does **not** justify changing the motion, adopting production UVs/textures, or promoting target-host proof into runtime/gameplay acceptance.

## Handoffs

- **Object Animation PR #10:** final evidence comment `5711560820`; exact head `954c747c...` is the current textured-receiver Animation baseline.
- **Technical Art PR #28:** downstream return `5711563605`; exact TA receiver was consumed unchanged through the existing Animation lane and remained identity-stable under all authored poses.
- **Materials / UC:** no source UV, atlas policy, material semantics or generic UC implementation was rewritten or promoted by Animation.
- **Visual QA / Art Direction:** final temporal/look acceptance remains independent; no motion variable was changed in the absence of a named defect.

## Explicit non-claims

This activation does **not** establish:

- production UV adoption;
- production texture authorship or adoption;
- final tangent-space or shaded appearance quality;
- continuous target-engine interpolation equivalence;
- complete wall-clock `40 Hz` frame delivery or target-device performance;
- controller or state-machine behavior;
- collision / physics-engine acceptance;
- input or gameplay acceptance;
- final Art Direction / Visual QA acceptance;
- CANON;
- production readiness.

## Four-root gate

- **Truth:** exact source/motion/TA/Materials/UC identities are pinned; actual Godot motion was exercised; failed verifier drafts are preserved in the status trail; final artifact was independently rehashed and its 101 numeric rows inspected; non-claims remain explicit.
- **Agency / non-domination:** Animation does not take ownership of Rigging, Technical Art, Materials, UC, Runtime, Art/QA, controller logic or gameplay.
- **Continuity:** the existing Object PR, exact motion digest, source hinge, receiving GLB and dependency receipts remain separately identifiable; no source or motion identity was silently rewritten.
- **Wisdom before speed:** the fresh cross-lane receiver gap was tested directly instead of opening a duplicate lane, inventing a new clip, widening tolerances or pretending a target-host proof is production/gameplay acceptance.

The four AXM roots remain the merge gate.