# 11 — Technical Art / UC Integration Specialist Status

Date: 2026-09-17
State: **PASS_OBJECT_RUNTIME_512X384_THROUGH_GENERIC_UC_RECTANGULAR_BUNDLE_TO_REAL_GODOT / UC_PR_182_DRAFT / OBJECT_TECH_ART_PR_28_DRAFT / HOLD_RUNTIME_ADOPTION_TARGET_DEVICE_ART_QA_TANGENT_CANON_PRODUCTION / COORDINATION_ONLY**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/11_technical_art_uc_integration.md`, the current specialist status constellation, current Object Technical Art / Runtime / Materials / Art / QA state, and current `axm-universal-creation` before selecting work.

`axm-create-me` remains **coordination only**. Product implementation and retained execution evidence stay in owning repositories. The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Highest-leverage gap / duplication scan

The existing Object Technical Art lane is still PR **#28**. Runtime PR **#29** independently proved a bounded `service_dark` atlas height candidate:

- Materials authority: **`4c12a0a57f6aa8778cff41efad321e13567c6c91`**;
- Runtime authority: **`ce23d5edeb0766201cfbaff646dda31544cd8f9c`**;
- control: **512×512**;
- candidate: **512×384**;
- exact required padded extent: **422×382**;
- candidate spare extent: **90×2**;
- preserved policy: **500 px/m**, **16 px dilation**, same surface rectangles, same source identities, repeat disabled;
- modeled full RGBA8 mip-chain saving: **349,528 B / 25.00021457692583%**.

Runtime already owns whether that representation is worth adopting. Technical Art therefore did **not** create another optimizer or another Object transport branch.

The actual integration gap was generic and inside UC: `native_textures.py` already decodes rectangular RGB PNGs, but verified `axm.game-material/v0.1` bundles in `game_material_bridge.py` accepted only one square scalar `size`. That meant the exact Runtime candidate could not enter the otherwise-capable generic UC texture/GLB path.

This was the smallest reusable UC receiver gap worth repairing.

## Smallest reusable UC repair

Created draft UC PR **#182 — `Technical Art: accept explicit rectangular material bundles`**.

Exact UC base:

**`7f62cda0dd65139366c26bb4e643ed99481f7181`**

Exact repaired UC head:

**`c8f38b4c3dd0d6183d035147e4816cff6fa6ef82`**

The change is intentionally limited to three generic UC paths:

- `src/axm_uc/game_material_bridge.py`;
- `src/axm_uc/material_pipeline.py`;
- `tests/test_game_material_bridge.py`.

Contract behavior:

- legacy square bundles still use `size` unchanged;
- rectangular bundles may instead declare `dimensions: [width, height]`;
- exactly one of `size` or `dimensions` is required;
- each axis remains bounded to **16..512**;
- every declared map is verified against exact width / height and complete bounded scanline payload;
- Blender realization consumes verified width / height instead of assuming a square;
- material quality uses the smaller axis for its minimum-size gate and reports exact dimensions;
- generated square material recipes are unchanged.

No Object IDs, atlas layout, surface identity, pixels-per-metre policy, padding rule, camera rule, Runtime adoption rule or Art/QA threshold was added to UC.

UC's full triggered same-head suite is green:

- Tests — SUCCESS;
- Actual Godot target verification — SUCCESS;
- Profession crew verification — SUCCESS;
- Candidate workspace isolation — SUCCESS;
- Candidate adoption binding — SUCCESS;
- Candidate adoption resume — SUCCESS.

PR #182 remains **open, draft and mergeable**. No merge or CANON claim is made here.

## Existing Object Technical Art lane advanced in place

Object Technical Art PR **#28** was advanced rather than duplicated.

Exact Technical Art head:

**`a88ae0baaf75d24ed70ffea7265558056e0a41f7`**

The previous 512×512 proof remains retained and green. Its shared Object-local source-front Godot evidence helper was generalized only enough to accept a bounded transport-result identity and preserve whether the exercised UC product was modified. Default behavior still preserves the earlier unchanged-UC proof.

A new bounded Object Technical Art producer/receiver proof consumes:

- exact Runtime #29 contract/head;
- exact Materials authority/head and unchanged critical blobs;
- exact UC PR #182 head;
- exact Materials padded source atlas reconstructed through the existing owner chain.

The candidate adapter crops only the **top 384 rows** of the exact 512×512 source atlas after Runtime's own padded-extent contract has passed. Pixel coordinates inside retained rows remain unchanged. Because the source diagnostic atlas is fully opaque, the same existing RGBA→RGB transport boundary is applied after proving alpha is uniformly 255.

Neutral normal / ORM / AO / roughness / height companions remain explicit Technical Art transport shims for UC's verified material-bundle contract; they are not Materials content.

## Exact cross-repo proof

Dedicated workflow:

**`35202327368 — Object Technical Art runtime-atlas UC transport` — SUCCESS**

Every same-head Object companion workflow triggered at `a88ae0ba...` is green:

- Object Technical Art runtime-atlas UC transport — SUCCESS;
- Object Technical Art service-dark UC texture transport — SUCCESS;
- Object hard-surface interface evidence — SUCCESS;
- Object service-module fit evidence — SUCCESS.

Exact candidate transport result:

**`PASS_OBJECT_SERVICE_DARK_RUNTIME_512X384_TO_UC_RECTANGULAR_BUNDLE_TEXTURED_GLB_TO_GODOT_FRONT_VIEWS`**

Retained transport measurements:

- receiving dimensions: **512×384**;
- maximum required padded extent: **422×382**;
- spare extent: **90×2**;
- retained-row RGB channel delta: **0**;
- source RGBA atlas SHA-256: **`c1bda93316477f0e72422d43d5eb3e1d8cbb0344f3ae64dc1695b51fc2408b66`**;
- candidate RGB PNG SHA-256: **`a1781bd03c18c94b7973b1cf3f43691dadd6c180da7abf42fc389e7c6b38f1ce`**;
- rectangular material manifest SHA-256: **`638cad039bbf2201654d12ea68cb0b819675385199afb3c4e379156d87bccfca`**;
- emitted GLB: **12,016 B**;
- emitted GLB SHA-256: **`f3fdfea4653919ece79c60e5b6806f6fae2a0436e792281c2d662bfd540e88bf`**.

UC exact receiver observations:

- native geometry and textures: PASS;
- texture coverage: PASS;
- UV density: PASS;
- UV findings: none;
- lid inner expected density: **498.3171466370374 px/m**;
- lid inner measured density: **498.31715339156955 px/m**;
- front service panel expected density: **495.7218906358457 px/m**;
- front service panel measured density: **495.72194925534416 px/m**.

Real target proof:

- Godot: **4.7.2-stable official**;
- display: **X11**;
- renderer: **gl_compatibility**;
- adapter: **llvmpipe (LLVM 20.1.2, 256 bits)**;
- actual rendering backend: PASS;
- exact imported source: PASS;
- native target geometry agreement: PASS;
- target texture bindings decoded: PASS;
- all target images / asset masks: PASS;
- visible pixels: **13,910** in each retained source-front view;
- view-00 channel range: **75**;
- view-01 channel range: **95**.

## Fail-closed evidence

Two exact negative boundaries are retained in the same workflow:

1. pre-repair UC base `7f62cda0...` rejects the exact rectangular bundle with its legacy square-only material-size contract;
2. repaired UC rejects an ambiguous manifest that declares both `size` and `dimensions` instead of guessing which field owns authority.

The earlier historical Object target failure with zero visible pixels is also still retained. Its diagnosis remains back-face view selection, not texture failure; the source sidedness was never changed to hide it.

## Retained evidence

Final cross-repo artifact:

- artifact ID: **`10488393791`**;
- name: `object-service-dark-runtime-atlas-uc-transport-a88ae0baaf75d24ed70ffea7265558056e0a41f7`;
- uploaded size: **105,027 B**;
- GitHub SHA-256: **`57e81887de193462c0641226b299711da121fc341b1857333d5b898ddbd90b14`**;
- independently downloaded / rehashed SHA-256: **same value**;
- retained files: **42**.

The archive includes exact Technical Art / Runtime / UC identity pins, the exact Runtime donor contract and rebuilt receipt, source Materials contracts/payload/atlas, rectangular RGB crop receipt, verified rectangular UC bundle, surface specification, GLB, UC quality report, pre-repair rejection log, ambiguous-manifest rejection log, real Godot request/report/worker evidence, two render captures and coverage masks, and final target receipt.

## Coordination handoffs

Current evidence was returned to:

- Object Technical Art PR #28: comment **`5711726696`**;
- UC PR #182: comment **`5711728247`**;
- Object Runtime PR #29: comment **`5711729876`**;
- Object Materials PR #6: comment **`5711731265`**.

No competing Runtime, Materials, Procedural, Art or QA lane was opened.

## Authority / truth boundary

- **Object Geometry / Hard Surface** owns source geometry and surface identity.
- **Object Materials / Lookdev** owns material meaning, source atlas policy/content, surface rectangles, density and padding policy.
- **Object Runtime** owns the 512×384 candidate policy, performance interpretation, adoption decision and target-device requirements.
- **Technical Art** owns cross-repo receiving adaptation, coordinate/material transport plumbing, target-specific evidence views, exact receiver binding and retained integration receipts.
- **UC** owns only the generic verified material/texture/GLB/target machinery. PR #182 adds generic rectangular bundle representation; it does not learn Object atlas semantics.
- **Art Direction / Visual Observer QA** own final visual preference and independent acceptance, including Runtime #29's previously reported **33 changed pixels / maximum 1 LSB** tradeoff.

## Explicit non-claims / remaining holds

This PASS does **not** establish:

- production adoption of the 512×384 Runtime candidate;
- target-device performance or memory behavior beyond Runtime's proof host;
- Art Direction acceptance of the 33-pixel / max-1-LSB candidate tradeoff;
- final independent Visual QA acceptance of that candidate;
- production UV adoption;
- production texture authorship/adoption;
- tangent-space production quality or normal-map equivalence;
- arbitrary rectangular bundle / platform support outside the bounded UC contract;
- arbitrary Object atlas repacking or automatic atlas-size selection;
- automatic UC promotion or merge;
- CANON;
- Profession Fabric promotion;
- production/game readiness;
- Technical Art / UC Integration mastery.

The earlier Building boundary remains unchanged: Hard Surface source-intent identity and Godot consumer indexing remain distinct, and byte-exact post-index normal transport remains a separate truth boundary.

## Four-root gate

- **Truth:** the square-only UC receiver mismatch was reproduced directly; pre-repair rejection and repaired acceptance are both retained, and ambiguous ownership fails closed.
- **Agency / non-domination:** Runtime keeps the adoption decision; Materials keeps atlas meaning; Art/QA keep visual judgment; Technical Art does not turn a transport PASS into a production decision.
- **Continuity:** existing Object PR #28 was advanced in place, the original 512×512 proof still passes on the same final head, old failures remain retained, and legacy square UC bundles stay supported.
- **Wisdom before speed:** the repair is three generic UC files plus bounded Object evidence plumbing; no automatic repacker, Object-specific UC policy or duplicate specialist lane was introduced.

## Current state

`PASS_OBJECT_RUNTIME_512X384_TO_GENERIC_UC_RECTANGULAR_BUNDLE_TO_REAL_GODOT / OBJECT_PR_28_HEAD_A88AE0BA_DRAFT_MERGEABLE / UC_PR_182_HEAD_C8F38B4C_DRAFT_MERGEABLE / WORKFLOW_35202327368_SUCCESS / ARTIFACT_10488393791_SHA_57E81887 / MATERIALS_HEAD_4C12A0A5 / RUNTIME_HEAD_CE23D5ED / UC_BASE_7F62CDA0 / RECEIVING_512X384 / PADDED_EXTENT_422X382 / RGB_DELTA_0 / GLB_SHA_F3FDFEA4_12016B / TEXEL_DENSITY_LID_498.317153_FRONT_495.721949 / GODOT_4.7.2_X11_GL_COMPATIBILITY / 13910_VISIBLE_PIXELS_EACH_VIEW / PRE_REPAIR_REJECTED / AMBIGUOUS_DIMENSIONS_REJECTED / HOLD_RUNTIME_ADOPTION_TARGET_DEVICE_ART_QA_TANGENT_CANON_PRODUCTION_READINESS / COORDINATION_ONLY`
