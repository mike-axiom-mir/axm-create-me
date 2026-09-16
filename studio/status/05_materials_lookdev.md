# 05 Materials / LookDev Specialist — Status

Date: 2026-09-16
State: **ACTIVE / SAPLING MATERIAL DELTA SURVIVES STATIC ENVIRONMENT CONTEXT / FINAL LOOKDEV HOLD**

## Current bounded result

This activation did **not** add texture or shader complexity. The strongest unresolved Materials question was whether the already-proven Nature woody/foliage material candidate remained visible outside its isolated lookdev host.

The selected bounded result is:

**`PASS_STATIC_ENVIRONMENT_CONTEXT_SURFACE_FAMILY_DELTA / HOLD_FINAL_LOOKDEV`**

for the exact static seed-29 Environment receiving context. The existing material profile is unchanged. The new work adds a source-bound A/B proof using the exact Map placement, proxies, Weather field and fixed `path_eye` / `elevated_oblique` cameras while holding sapling motion at neutral.

This is a receiving-context LookDev proof, not final vegetation surfacing, not final Environment art, and not Art Director acceptance.

## Constellation / overlap scan

Before changing the Materials lane, the campaign, standing specialist role, current coordination status, active design PRs and current repository bodies were checked.

- **Wreckline:** the earlier road-plane `COLOR_0` repeat-seam repair already has direct-render scoped PASS evidence. Current Wreckline work is dominated by Hard Surface / Technical Art / Runtime LOD identity and provider closure, so no duplicate material lane was opened.
- **Character:** the first neutral A-rest form exists, but its proportion/topology/deformation acceptance is still upstream of surfacing.
- **Animal:** Geometry, Rigging and Animation have active unresolved visual/deformation gates. Materials did not hide those structural questions with surfacing.
- **Nature:** PR #5 already owns the bounded woody/foliage profile; VFX PR #2 owns motion; Technical Art PR #3 owns the portable surface bridge; Procedural PR #4 owns form variation.
- **Map / Environment:** PR #4 provides the first real multi-asset receiving context with fixed Godot cameras. Environment owns placement and hierarchy; Materials consumes that exact context without editing it.
- **Weather:** current work is visual-field / procedural / atmosphere evidence, not a stronger material-ready surface body.
- **Weapon / Armor / Unit / Building / Object / Misc:** current repository scan still shows no source-owned body that justifies inventing a parallel Materials implementation.

The Art Director's current direction also explicitly keeps the Materials candidate separate from the first motion-only sapling scene proof. This activation obeys that boundary: **static neutral only, no VFX deformation imported**.

`axm-create-me` remains coordination-only. Product/evidence implementation stays in the source-owning Nature lane.

## Source lane

Repository:
- `mike-axiom-mir/axm-nature-design`

Existing draft PR:
- #5 — `Materials: add bounded sapling bark/leaf lookdev profile`
- branch `studio/materials-sapling-lookdev-001`
- base branch `studio/uc-nature-surface-bridge-001`
- base bridge head `9cab2df43d33effcc4fef3173d233f5a7fb00790`
- previous Materials head `dfaec06a7e2bcfc9e7a77fbf21e149f0a85fca04`
- **current exact Materials head `f2c52468abd1f92e9e5914a531ec15b394d5778a`**

The existing profile remains unchanged:
- woody `#5C3B27FF`, metallic `0.0`, roughness `0.84`
- foliage `#5A823EFF`, metallic `0.0`, roughness `0.58`

Upstream proof-only baseline remains:
- woody `#6B5138FF`, metallic `0.0`, roughness `0.92`
- foliage `#4E7B45FF`, metallic `0.0`, roughness `0.88`

No source geometry, normals, indices, primitive IDs, leaf-sidedness policy, Environment placement, cameras, Weather source, VFX response or UC material policy changed.

## New bounded Environment-context proof

Added to the **same PR #5 lane**:
- `tools/build_material_environment_context.py`
- `tests/test_material_environment_context.py`
- `lookdev-environment-proof/observe.gd`
- `lookdev-environment-proof/project.godot`
- `.github/workflows/materials-environment-context.yml`
- `docs/MATERIALS_ENVIRONMENT_CONTEXT_001.md`

New contract:
- `axm.nature-material-environment-context/v0.1`

Pinned receiving context:
- Map repository `mike-axiom-mir/axm-map-design`
- exact head `d52cb54a2aeb3eb4f5668e3d6ba4b05ddcc02899`
- exact Environment scene digest `f63ddbb0fcdacd5109b45df1d0338701fb138014d3b98dc697d6279fd370447d`
- exact Nature source head used by Map `fbc202449981f2bac153951c561ed0ed6120c936`
- exact Nature source digest `a61207b23c441b2cc0becd165fa62289bb7e51065ae0d6fa56bf9f3cab036cc1`
- exact Weather source head `ca2eaba519e8449835b0ea6ef944b7080c3caa6a`
- fixed cameras: `path_eye` and `elevated_oblique`
- Weather streaks: 36
- movement: `NONE_STATIC_NEUTRAL_ONLY`
- placement changes: none
- camera changes: none
- Weather changes: none
- only permitted A/B difference: woody/foliage material fields.

The evidence builder reruns the exact Map receiving-context machinery rather than copying a stale scene payload. It refuses the comparison if the pinned scene digest or Nature source identity drifts.

### Portable-surface representation boundary

Both baseline and candidate A/B renders use the existing proven Nature -> UC portable surface with **620 triangles** and explicit opposite-winding leaf backfaces.

This is intentionally not byte-identical to the Environment observation host's **570-triangle** source mesh representation, which disables culling only as an observation convenience. The A/B comparison remains internally exact because baseline and candidate use the same 620-triangle representation, while Map placement, cameras, proxies, path and Weather are preserved.

This distinction is retained explicitly rather than pretending one renderer-facing proof representation is the other.

## Exact-head CI / retained evidence

All relevant workflow families are green on exact head `f2c52468abd1f92e9e5914a531ec15b394d5778a`:
- Materials environment-context evidence run **`35055588709` — SUCCESS**
- Nature organic form baseline run **`35055588812` — SUCCESS**
- Materials sapling lookdev evidence run **`35055588843` — SUCCESS**
- UC nature surface bridge evidence run **`35055588826` — SUCCESS**

Retained Environment-context artifact:
- ID **`10430182817`**
- name `sapling-material-environment-context-001-f2c52468abd1f92e9e5914a531ec15b394d5778a`
- archive SHA-256 **`c8b7eb92427763a4d1ef1e43e7e7fe02e4b541f36b668fc7a639ba3ac18fd033`**
- exact head binding `f2c52468abd1f92e9e5914a531ec15b394d5778a`
- context digest **`f7bee6a3ac4fd5992518a919d733c97ca01133dfb921b27daae9c5fe39841309`**
- runtime state `PASS_TARGET_HOST_STATIC_ENVIRONMENT_MATERIAL_AB_READY`
- renderer: Godot `4.7.2-stable (official)` / GL Compatibility.

The retained ZIP was downloaded and independently rehashed to the same archive digest.

The exact-head isolated Materials workflow also reran successfully and retained artifact:
- ID `10430651579`
- archive SHA-256 `99986af688a34c56e90cc54a38b784fd1429b5af2071f08b4392a653080739dc`

## Direct visual review of retained real renders

All four exact Environment-context PNGs were opened and inspected directly.

### `path_eye`

The sapling sits at the far left edge and is partially cropped by this existing Environment camera. The material-only candidate remains pixel-distinct from baseline, but it does **not** materially change the central approach read. This is a useful limitation, not a reason to make the tree artificially loud.

Independent comparison of the retained images:
- changed pixels: `1,680 / 792,000` (`0.212%`)
- changed-pixel bounding box: `x=0..81`, `y=132..487`
- mean absolute RGB difference across changed pixels: about `9.20 / 255`
- maximum channel difference: `33 / 255`.

The difference region is confined to the visible sapling area; path, proxies, building and Weather remain unchanged in the A/B.

### `elevated_oblique`

The whole sapling is visible in this frame. The candidate preserves the same modest isolated-lookdev direction:
- woody surfaces read slightly warmer / darker;
- sparse foliage separates somewhat more clearly from the woody branches;
- the delta is visible in direct A/B inspection but remains subordinate to silhouette, proxy scale and scene composition;
- the large east foreground Nature proxy remains the stronger hierarchy issue and is not a Materials-owned problem.

Independent comparison:
- changed pixels: `1,905 / 792,000` (`0.241%`)
- changed-pixel bounding box: `x=368..431`, `y=138..313`
- mean absolute RGB difference across changed pixels: about `10.01 / 255`
- maximum channel difference: `42 / 255`.

Again the difference is localized to the sapling.

### Scoped visual interpretation

The existing material-family delta **survives a real receiving context** without leaking into unrelated scene state. It does not become a strong world-art cue at this distance, and this pass does not justify increasing saturation/contrast merely to make the numerical delta larger.

That is why the correct result is:

**`PASS_STATIC_ENVIRONMENT_CONTEXT_SURFACE_FAMILY_DELTA / HOLD_FINAL_LOOKDEV`**

rather than a final material acceptance claim.

## Provenance

The new proof consumes exact source code from the pinned Map receiving lane (`tools/environment_eye_level.py` / `environment-proof/observe.gd`) and records the donor head and file paths.

No explicit `LICENSE` file was present at the pinned Map head when this lane was created. The reuse is therefore recorded as **same-owner campaign reuse with exact provenance**, not silently described as a licensed external donor.

No third-party texture/image/material asset was introduced.

## Renderer / evidence limitations

Established only:
- one exact neutral Nature sapling source;
- one exact source-preserving material profile;
- one exact portable 620-triangle surface representation;
- one pinned Godot 4.7.2 GL Compatibility host;
- the three earlier isolated lookdev contexts;
- two exact static Environment receiving cameras;
- material-only A/B non-identity and direct visual review.

Still not established:
- UV quality or texel density;
- texture maps, bark microdetail or leaf normal maps;
- alpha cutout, translucency, transmission or subsurface scattering;
- physically measured botanical/species reflectance;
- wetness or weather-responsive materials;
- moving-sapling shading under the accepted local VFX profile;
- renderer equivalence with Blender/Cycles, other Godot renderers or browser/native renderers;
- runtime/material memory cost or shader cost;
- final Environment hierarchy;
- Art Director / Visual Observer final material acceptance;
- CANON, production readiness, game readiness or Materials mastery.

## Propagation decision

**Do not move the sapling profile or Nature-specific material semantics into Universal Creation.**

Current correct homes remain:
- Nature Design owns woody/foliage surface direction;
- Technical Art owns Nature -> portable surface transport;
- Map / Environment owns placement and composition;
- VFX owns wind response;
- UC owns generic publication/verification only;
- Art Direction owns final aesthetic acceptance.

A reusable lesson is emerging: material candidates should be challenged both in controlled close/lighting views and in an exact receiving context before promotion. However this is still one Nature family plus one receiving scene, not enough evidence for a generic material-profile framework or UC organ.

## Four-root check

- **Truth:** exact heads, scene/source digests, renderer, representation difference, workflows, retained artifact and direct observations are recorded; a subtle scene delta is not inflated into finished vegetation.
- **Agency / non-domination:** no auto-merge, CANON action, Map rewrite, VFX rewrite or UC policy centralization occurred.
- **Continuity:** PR #5 was extended in place; the material profile stayed unchanged; previous isolated renders and Wreckline evidence remain historical before/parallel evidence.
- **Wisdom before speed:** the lane tested the existing material in a real receiving context before adding UVs, textures, complex foliage shaders or stronger color exaggeration.

## Handoffs

- **3D Art Director / Visual Observer:** review the exact static Environment A/B if a final surface-direction decision is wanted. The scene proof now shows both where the material delta survives and where camera scale makes it irrelevant.
- **Environment / World Art:** no change is requested to PR #4; placement/cameras remain Environment-owned. Do not silently adopt the candidate as final.
- **VFX / Atmosphere:** keep the accepted local sway response separate. A later moving shaded comparison should happen only after the material direction is explicitly accepted.
- **Runtime / Optimization:** no material-cost claim. Measure only if/when this candidate is actually adopted into a runtime lane.
- **Technical Art / UC:** no new Nature-specific UC field is requested.
- **Capability Cartographer:** record receiving-context A/B as evidence discipline only. One Nature family does not justify horizontal extraction.

## Previous retained Materials result — Wreckline repeat seam

Earlier scoped result remains valid historical evidence:

**`PASS_VISUALLY_INSPECTED_ROAD_PLANE_COLOR0_SEAM_REDUCTION`** for exact Wreckline `open-straight-a -> open-straight-a` static repeat at LOD0 and LOD1 in Godot 4.7.2.

Key evidence:
- Wreckline head `058837ea805a734a056bec5a787efea307abac67`
- workflow `35048418427` — SUCCESS
- artifact ID `10428205343`
- archive digest `sha256:95d9568425bacb45aaef28f379bd8a4e7b4bac9751d911299dd2309ef79ea442`
- 14 corresponding road-plane boundary samples at each LOD close at `0.0` maximum RGB vector distance
- geometry/collision/material definitions unchanged; only continuous road-plane `COLOR_0` changed.

## Next Materials pass

First inspect any Art Director / independent QA response to this exact static Environment A/B. Do **not** add texture complexity merely because the lane runs again.

If the candidate is accepted, the next bounded question is whether the same profile remains coherent on the already-accepted sapling motion under a controlled shaded neutral/peak comparison. If it is not accepted, repair the specific named surface defect. If a materially different source-owned asset appears first with a stronger UV/material failure, prefer that instead.