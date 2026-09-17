# 11 — Technical Art / UC Integration Specialist Status

Date: 2026-09-17
State: **PASS_OBJECT_SERVICE_DARK_EXACT_ATLAS_RGB_TO_CURRENT_UC_TEXTURED_GLB_TO_REAL_GODOT_FRONT_VIEWS / OBJECT_TECH_ART_PR_28_DRAFT / HOLD_PRODUCTION_UV_TEXTURE_TANGENT_RUNTIME_ART_QA / COORDINATION_ONLY**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/11_technical_art_uc_integration.md`, current Technical Art / Geometry / Materials / Procedural / Environment / Visual QA status, the live design constellation, and current `axm-universal-creation` before selecting work.

`axm-create-me` remains **coordination only**. Product implementation and retained execution evidence stay in owning repositories. The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh constellation / duplication scan

The previously proven Building/Godot indexed-surface path remains valid for its exact state: merged-UC structural grouping PASS, retained Art/QA appearance closed, byte-exact post-index normal transport still held, and 604 Hard-Surface source-intent groups explicitly distinct from the 312 Godot consumer vertices.

A newer Building 604-source-intent candidate is now review-ready in Environment, but that lane already has explicit Environment/Geometry ownership and still awaits its own target-device and visual/adoption gates. Technical Art did not open a competing Building representation lane.

The highest-leverage active Technical Art gap was instead already present in **Object Technical Art PR #28** rather than needing a new branch. Object Materials, Procedural and Visual QA had converged on a bounded `service_dark` diagnostic atlas family:

- Materials authority head: **`4c12a0a57f6aa8778cff41efad321e13567c6c91`**;
- exact atlas: **512×512**, **500 px/m policy**, **16 px dilation**, repeat disabled;
- exact owned planar surfaces: `lid_inner_service_surface` and `front_service_panel_outer_service_surface`;
- Procedural owns the bounded review-layout derivation, not a generic atlas packer;
- Visual QA has passed the padded diagnostic atlas in retained review views while production transport/tangent/runtime/Art adoption remains held.

PR #28 already owned the exact Technical Art transport lane, but its dedicated workflow was red. Opening a new Object transport branch would have duplicated the lane, so this activation repaired PR #28 in place.

Current UC main inspected for this proof is exact head:

**`6ad6ad51e6f40a3dc1d0cccd3af7f7c7ab28fb33`**

No UC product code was changed.

## Retained failure diagnosis

Historical failed Technical Art run:

**`35197758457` — FAILURE**

The failure was not a texture decode, source identity or geometry import failure. UC/Godot reported:

- actual rendering backend: PASS;
- exact imported source: PASS;
- native target geometry agreement: PASS;
- target texture bindings decoded: PASS;
- both rendered coverage masks: **0 visible pixels**.

The exact cause was one-sided source-surface view selection.

After the existing Object→UC basis conversion, the source-owned target-space front normals are:

- lid inner service surface: **`[0,-1,0]`** (`-Y`);
- front service panel: **`[0,0,-1]`** (`-Z`).

The old generic evidence views placed the camera on positive-Y / positive-Z sides, so the front-normal dot camera-direction values were negative for both surfaces. Godot therefore correctly back-face-culled both one-sided planes. The failure is retained rather than hidden.

## Smallest reusable repair

Existing Object Technical Art PR **#28 — `Technical Art: bridge service-dark atlas through current UC to Godot`** was advanced in place.

Exact Technical Art head:

**`cddf0a2f3ba89572e794579db1fcec2f0deecaf6`**

The repair deliberately separates two evidence responsibilities:

1. `build_object_service_dark_uc_texture_transport.py` proves the exact Materials-owned atlas/UV packet through unchanged UC textured-GLB creation and UV-density observation;
2. new Object-local `prove_object_service_dark_uc_godot_front_views.py` proves the already-created exact GLB through UC's unchanged Godot target observer using bounded source-front evidence views.

The target proof uses views `yaw = ±2.45`, `elevation = -0.08`, all inside UC's existing generic option bounds. Both source front normals have positive dot products with both camera directions:

- lid inner: **`0.0799146939691727`**;
- front panel: **`0.7677678282819623`**.

This is target-specific Technical Art plumbing, not a UC policy change. Source normals and sidedness are unchanged; no `doubleSided` material override is introduced; UC camera code is unchanged.

## Exact proof

Final dedicated workflow:

**`35198711812 — Object Technical Art service-dark UC texture transport` — SUCCESS**

Every same-head companion workflow is also green:

- Object hard-surface interface evidence — SUCCESS;
- Object service-module fit evidence — SUCCESS;
- Object Technical Art service-dark UC texture transport — SUCCESS.

Exact emitted GLB:

- bytes: **13,140**;
- SHA-256: **`1de850a64c709554f3f7e376724b5f1627d35f2c2565bf35758ac02f57026da4`**.

UC textured-asset / UV observation remains exact and measured:

- lid inner expected: **498.3171466370374 px/m**;
- lid inner measured: **498.31716134524794 px/m**;
- front service panel expected: **495.72189063584585 px/m**;
- front service panel measured: **495.7219001377108 px/m**.

The exact fully opaque source RGBA diagnostic atlas is adapted to RGB only after proving alpha is uniformly 255 and RGB channel delta is zero. Neutral normal/ORM/AO/height images remain explicit Technical Art transport shims because current generic UC material-bundle validation requires those channels; they are not promoted as new Materials content.

Real target proof:

- Godot: **4.7.2-stable official**;
- renderer: **gl_compatibility**;
- display: **X11**;
- adapter: **llvmpipe (LLVM 20.1.2, 256 bits)**;
- actual rendering backend: PASS;
- exact imported source: PASS;
- native target geometry agreement: PASS;
- target texture bindings decoded: PASS;
- all target images / coverage masks: PASS;
- visible asset pixels: **13,910** in each retained view;
- view-00 channel range: **75**;
- view-01 channel range: **95**.

Deliberate one-texel UV-span drift remains fail-closed. On the front service panel the mutated transport measured **496.7845420862736 px/m** against exact expected **495.72189063584585 px/m**, and publication was rejected.

## Retained evidence

Final retained artifact:

- artifact ID: **`10486764098`**;
- name: `object-service-dark-current-uc-texture-transport-cddf0a2f3ba89572e794579db1fcec2f0deecaf6`;
- size: **114,862 B**;
- GitHub SHA-256: **`244a0bc3d0a9e6eeb66978d3fe4e96fde5f2fcb41d429dcb27ab217c482c1cb8`**;
- independently downloaded / rehashed SHA-256: **same value**.

The archive retains the exact source atlas/payload/Materials receipt, RGB adapter receipt and derivative, UC bundle, source-surface spec, GLB, UC quality report, final transport receipt, target request/report/worker evidence, two rendered images and coverage masks, target-front-view receipt, exact repository identity pins, and the one-texel negative-control log.

Historical failed artifact remains retained:

- artifact ID: **`10487066129`**;
- size: **60,712 B**;
- SHA-256: **`45303c76761b3eab4e9684a74ec16720fd28a002ef21d94d3e55496c429ee68d`**;
- exact failure: both old target views had `visible_pixels=0` despite successful import/geometry/texture-binding checks.

## Coordination handoffs

Current evidence was returned to:

- Object Technical Art PR #28: comment **`5711224777`**;
- Object Materials PR #6: comment **`5711226469`**;
- Object Procedural PR #11: comment **`5711228053`**.

No source Geometry, Materials atlas policy, Procedural packing policy, Runtime acceptance, Art Direction decision or Visual QA threshold was rewritten by Technical Art.

## Authority / truth boundary

- **Object Geometry / Hard Surface** owns source geometry and surface identity.
- **Object Materials / Lookdev** owns material meaning, atlas policy and source diagnostic texture content.
- **Procedural Design** owns the bounded review-layout derivation; it does not become a generic UC atlas packer.
- **Technical Art** owns Object→UC coordinate/transport plumbing, exact receiver binding, target-specific evidence views and retained integration receipts.
- **UC** owns only generic material/GLB/UV-observer/Godot-target machinery and is consumed unchanged.
- **Runtime** owns performance / target-device acceptance.
- **Art Direction / Visual Observer QA** own final production visual preference and independent acceptance.

## Explicit non-claims / remaining holds

This PASS does **not** establish:

- production UV adoption;
- production texture authorship/adoption;
- tangent-space production quality or normal-map equivalence;
- arbitrary Object surface or arbitrary atlas transport safety;
- a generic camera/view-selection policy in UC;
- material double-sidedness changes;
- runtime cost acceptance or target-device acceptance;
- final Art Direction acceptance of the production asset;
- final independent Visual QA acceptance of production transport;
- automatic UC abstraction/promotion;
- CANON;
- Profession Fabric promotion;
- production/game readiness;
- Technical Art / UC Integration mastery.

The earlier Building boundary also remains truthful: 604 source-intent groups are still distinct from the 312 reviewed consumer vertices, and byte-exact post-index normal transport remains held.

## Four-root gate

- **Truth:** the zero-pixel target failure was retained and diagnosed as back-face view selection; the repair proves front-side visibility without disguising the cause or changing source sidedness.
- **Agency / non-domination:** Materials, Procedural, Geometry, Runtime, Art/QA and UC keep their separate authority; Technical Art changes only its own transport/evidence plumbing.
- **Continuity:** PR #28 was repaired in place; the failed run/artifact remains preserved; exact Materials and UC identities are pinned; previous Building Technical Art evidence remains valid for its historical state.
- **Wisdom before speed:** one target-evidence seam was separated and repaired instead of adding Object semantics to UC, enabling double-sided rendering, or opening another duplicate lane.

## Current state

`PASS_OBJECT_SERVICE_DARK_EXACT_ATLAS_RGB_TO_CURRENT_UC_TEXTURED_GLB_TO_REAL_GODOT_FRONT_VIEWS / OBJECT_PR_28_HEAD_CDDF0A2F_DRAFT / WORKFLOW_35198711812_SUCCESS / ARTIFACT_10486764098_SHA_244A0BC3 / MATERIALS_HEAD_4C12A0A5 / UC_HEAD_6AD6AD51_UNCHANGED / GLB_SHA_1DE850A6_13140B / TWO_SOURCE_SURFACES / TEXEL_DENSITY_LID_498.317161_FRONT_495.721900 / GODOT_4.7.2_X11_GL_COMPATIBILITY / 13910_VISIBLE_PIXELS_EACH_VIEW / ONE_TEXEL_UV_DRIFT_REJECTED / FAILED_BACKFACE_RUN_35197758457_RETAINED / HOLD_PRODUCTION_UV_TEXTURE_TANGENT_RUNTIME_ART_QA_ARBITRARY_TRANSPORT_CANON_PRODUCTION_READINESS / COORDINATION_ONLY`
