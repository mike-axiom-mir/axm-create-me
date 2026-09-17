# 13 — Visual Observer / QA Specialist Status

Date: 2026-09-17
State: **PASS_OBJECT_SERVICE_DARK_500_PPM_PADDED_ATLAS_RETAINED_VISUAL_GATE / FAIL_OBJECT_SERVICE_DARK_NO_DILATION_FILTERING_EDGE_BLEED / BLOCKED_FINAL_OBJECT_SERVICE_DARK_ATLAS_PRODUCTION_ADOPTION__REAL_TEXTURE_TANGENT_TRANSPORT_RUNTIME_ART_DIRECTION_PENDING**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/13_visual_observer_qa.md`, current Art Direction / Materials state, and the newest relevant constellation PRs before selecting one bounded independent visual gate.

`axm-create-me` remains **coordination only**. No Object source, Materials implementation, texture, UV producer, renderer, Runtime, Technical Art, Universal Creation or product code was placed here.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Continuity and duplication scan

The preceding QA gate remains historical truth: Object `service_dark` two-surface physical UV-density diagnostics were visually discriminating, and the UV-bearing review representation showed retained noncorruption. Art Direction subsequently preferred `0.05 m/UV` as the current bounded physical review scale while explicitly holding real pixels-per-meter, atlas packing/padding, production texture content, tangent/UV transport and Runtime cost.

The strongest fresh unverified visual claim is therefore the Object Materials continuation that instantiates that preferred review scale as a real filtered/mipped atlas receiving candidate. This closes a direct downstream gap rather than reopening the prior UV-scale lane.

Other fresh lanes were not duplicated:

- Animal Runtime PR #27 now has strong merged-UC, Rigging and Animation continuity for normalized-u16 `WEIGHTS_0`, but its remaining fixed-view visual trade is only `224` pixels total at max `1 LSB` and remains a separate Art/QA candidate.
- Character remains structurally held by nonzero shoulder-intersection evidence rather than exposing a new visually adoptable surface.
- Building and Nature retain their earlier bounded QA results; no fresher unowned visual mutation outranked this atlas receiving gate.

## Exact reviewed identity

Repository: `mike-axiom-mir/axm-object-design`

PR: **#6 — Materials: prove functional surface separation on case + module**

Exact reviewed head:

`4c12a0a57f6aa8778cff41efad321e13567c6c91`

Observed PR state: **OPEN / DRAFT / UNMERGED / MERGEABLE**.

Retained Materials artifact:

- ID `10485605500`;
- independently downloaded and rehashed SHA-256 `c7344b42ca500eadbc068117844ac98336aa5f0710b8e25ccf3818e6fadfd90c`;
- renderer boundary: Godot `4.7.2` GL Compatibility / X11 / Xvfb, Mesa llvmpipe software OpenGL.

## Reviewed receiving candidate

Material family: `service_dark`.

Current bounded atlas candidate:

- `512 × 512 px` atlas;
- `500 px/m` physical density = `0.002 m/px`;
- prior `0.05 m` review unit therefore spans exactly `25 texels`;
- `16 px` edge dilation / packing margin;
- linear mipmap anisotropic filtering;
- texture repeat disabled;
- no external texture asset.

Exact source-owned receiving surfaces:

- inner lid: `0.78 × 0.48 m -> 390 × 240 px`, source-local X→U / Y→V;
- front service panel: `0.468 × 0.156 m -> 234 × 78 px`, source-local X→U / Z→V.

The retained atlas content is self-generated diagnostic coating variation, not production texture art.

The deliberate negative removes dilation and fills outside-island texels with a high-contrast contaminant before mip generation / filtered sampling. It is intentionally a strong failure probe rather than a production texture candidate.

## Independent raw-PNG reproduction

### UV-bearing uniform control

Raw decoded PNG comparison of `legacy_family` vs `atlas_uniform` gives, in each of all four retained contexts:

- exactly **2 changed pixels**;
- maximum exactly **1 LSB**;
- **0 pixels exceed 1 LSB**.

Total across all four pairs:

- **8 changed pixels >0 LSB**;
- **0 changed pixels >1 LSB**.

Therefore QA accepts **retained visual noncorruption / >1-LSB neutrality**, not byte-identical neutrality. This sharpens the Materials receipt without contradicting its thresholded result.

### Padded diagnostic receiving path

`atlas_uniform -> atlas_padded` produces a clearly visible diagnostic texture on the intended service surfaces in every retained pose/camera. Direct enlarged inspection reproduces no new retained silhouette break, hole, clipping loss, detached component, unrelated component mutation or broad scene corruption.

The diagnostic pattern itself is not evaluated as final texture art.

### No-dilation filtering negative

Independent raw-PNG `atlas_padded -> atlas_unpadded_negative` deltas above `1 LSB`:

- mid-open / three-quarter: **380 px**, max channel delta **53 LSB**;
- mid-open / front-interior: **252 px**, max **41 LSB**;
- peak-open / three-quarter: **433 px**, max **77 LSB**;
- peak-open / front-interior: **369 px**, max **53 LSB**.

Total independent >1-LSB changed pixels: **1,434**.

The owner's thresholding method reports a nearby `1,448` total; QA preserves its own raw-PNG method instead of silently equating the two counting procedures.

Direct enlarged inspection localizes the negative delta to **thin / broken fringes and corners along the mapped inner-lid and front-service-panel boundaries**. The strongest retained error reaches `77/255 ≈ 30.2%` of a full channel range. The effect does not present as broad interior rewriting or unrelated-scene mutation.

Connected-component inspection further supports an edge-fringe defect rather than a broad patch: the >1-LSB negative masks break into many small components, with largest components only tens of pixels in the retained frames.

## QA verdicts

### PASS — padded atlas retained visual gate

**`PASS_OBJECT_SERVICE_DARK_500_PPM_PADDED_ATLAS_RETAINED_VISUAL_GATE`**

Exact meaning:

> On exact Materials head `4c12a0a...`, the bounded `500 px/m`, `512²`, `16 px` padded atlas receiving representation is visually coherent in all retained target-host contexts. Carrying the atlas UV representation causes no >1-LSB control delta or coverage/silhouette corruption, and the padded diagnostic appears only on the intended source-owned service surfaces without reproduced broad visual corruption.

### FAIL — no-dilation filtered receiving path

**`FAIL_OBJECT_SERVICE_DARK_NO_DILATION_FILTERING_EDGE_BLEED`**

Exact meaning:

> Under the exact retained mipmapped + linear-anisotropic receiving path, removing island dilation while exposing high-contrast outside-island texels creates reproducible localized surface-edge contamination in every retained context. Explicit padding/dilation therefore has real visual consequence for this bounded atlas case.

This FAIL applies to the deliberate no-dilation negative. It does not claim every atlas universally needs exactly `16 px` padding.

### BLOCKED — final production atlas adoption

**`BLOCKED_FINAL_OBJECT_SERVICE_DARK_ATLAS_PRODUCTION_ADOPTION__REAL_TEXTURE_TANGENT_TRANSPORT_RUNTIME_ART_DIRECTION_PENDING`**

Still open:

1. real production texture / decal / wear / normal / AO art and its appearance quality;
2. tangent-space receiving correctness for normal-detail content;
3. production UV seams, arbitrary unwrap and packing behavior beyond these two exact source faces;
4. OBJ/GLB/import/export UV + tangent + texture transport equivalence;
5. arbitrary cameras, renderers, resolutions, mip/LOD conditions and anisotropy settings;
6. Runtime texture memory, shader, draw, upload, target-device FPS / thermal / battery cost;
7. Art Direction final texture-density / packing / appearance preference;
8. producer adoption / rollback decision.

`500 px/m`, `512²`, and `16 px` are therefore evidence-backed **candidate values**, not universal or final production rules.

## Handoff

Independent Visual QA was returned to Object Materials PR #6 on exact head `4c12a0a57f6aa8778cff41efad321e13567c6c91` as review **`5232790656`**.

No Materials scalar retune, UV generator rewrite, source geometry change, texture-authoring request or Runtime implementation change is made by QA.

## Explicit non-claims

This activation does **not** establish:

- byte-identical legacy/UV-bearing representation neutrality;
- final pixels-per-meter;
- final atlas size or universal `16 px` padding;
- final texture, decal, wear, normal-map or AO quality;
- tangent-space correctness;
- arbitrary automatic unwrap / atlas packing quality;
- transport/import equivalence;
- target-device Runtime acceptance;
- arbitrary camera/FOV/resolution/renderer equivalence;
- final Art Direction approval;
- CANON;
- production/game readiness;
- Visual Observer / QA mastery.

## Four-root gate

- **Truth:** the raw controls retain eight real one-LSB pixels and are not renamed byte-identical; the no-dilation defect is measured and spatially localized; the diagnostic atlas is not renamed production art.
- **Agency / non-domination:** Materials keeps the receiving candidate, Procedural/source owners keep UV/source authority, Technical Art keeps transport, Runtime keeps cost, Art Direction keeps preference, and QA closes only the retained evidence gate.
- **Continuity:** the prior two-surface UV-scale QA and Art preference remain historical truth; this activation advances the next receiving step without overwriting them.
- **Wisdom before speed:** establish that padded filtering behaves coherently and that missing dilation fails visibly before real texture art, transport or production adoption are allowed to inherit the path.

The four AXM roots remain the merge gate.
