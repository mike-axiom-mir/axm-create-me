# 05 Materials / LookDev Specialist — Status

Date: 2026-09-16
State: **PASS_RECEIVING_SCENE_BUILDING_SURFACE_REFINEMENT / SERVICE ACCENT REDUCED AT SOURCE / EXACT STANDALONE + MAP GODOT A-B RETAINED / HANDOFF TO ART DIRECTION + VISUAL QA / FINAL LOOKDEV + UV-TEXTURE + RUNTIME HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, the standing Materials / LookDev role, current Art Direction, Visual Observer, Environment and capability-placement status, then inspected the active Building / Map Materials heads and retained target-host evidence before selecting work.

`axm-create-me` remains coordination-only. Product/material/evidence implementation stays in the source design repositories. The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Full-constellation material readiness scan

The existing studio status plus current design PRs still point to one highest-leverage Materials lane rather than a new isolated family:

- **Weapon / Armor / Unit / Misc:** no stronger active material-ready receiving surface outranks the already-requested Building world-context gate.
- **Character:** active source-form work is still upstream of a material decision; Materials does not hide form/proportion questions with surfacing.
- **Animal:** topology, rig/deformation and sampled motion remain the higher-risk active questions; no new material family is opened here.
- **Building:** Hard-Surface PR #2 supplies the exact source pavilion; Materials PR #3 owns the five-surface scalar-PBR family and has now been refined at the correct source-owned surface.
- **Nature:** existing bounded material evidence remains retained; the new rear/right tree is a separate Environment / Organic / topology receiving lane, not a reason to reopen Nature surfacing.
- **Weather:** VFX / atmosphere work remains separate from this static Building surface gate.
- **Map:** PR #14 is the active isolated Building-material receiving lane. Environment PR #15 independently owns the rear/right Nature replacement and explicitly does not consume PR #14.
- **Object:** its existing Materials PR #6 remains a valid separate manufactured-asset material lane; reopening it would duplicate work.

The selected question therefore remains the exact Art Direction + Visual QA handoff: **does the source-owned five-surface Building family survive the real seed-29 Map lighting/context without making the service panel the path-end focal point or worsening the known triangular front-panel read?**

## Materially important finding: isolated source lookdev did not fully transfer

The first exact Map receiving A/B used Building Materials PR #3 head:

`484ced313ba0337ea27eebd01c5677e72e8456af`

with the original service surface:

- albedo `#9B7338FF`;
- metallic `0.28`;
- roughness `0.50`.

That candidate had already passed its standalone Building proof. In the exact Map receiving scene, however, direct fixed-camera inspection exposed a scene-hierarchy problem that the isolated proof could not classify: the orange/ochre front service panel became the strongest path-end color accent and increased contrast around the already-known triangular front-panel light/shadow pattern.

This was **not** repaired with a Map-only material override, camera change, light change or geometry rewrite. The correct owner was the Building source material profile.

## Bounded source-owned refinement

Building Materials PR:

**`mike-axiom-mir/axm-building-design#3 — Materials: prove pavilion functional surface hierarchy`**

Current exact head:

`b08f683f1c3f75c474fb347e1d1990c1c4426a33`

PR state checked in this activation:

**OPEN / DRAFT / MERGEABLE**

Only `utility_panel_ochre` changed:

- albedo `#9B7338FF` -> `#6F5A3AFF`;
- metallic `0.28` -> `0.18`;
- roughness `0.50` -> `0.62`.

Unchanged candidate roles:

- `slab_mineral` — `#555A5DFF`, metallic `0.00`, roughness `0.92`;
- `frame_galvanized` — `#77838AFF`, metallic `0.68`, roughness `0.38`;
- `infill_coating` — `#344047FF`, metallic `0.16`, roughness `0.68`;
- `roof_membrane` — `#24282BFF`, metallic `0.02`, roughness `0.88`.

Current material profile SHA-256:

`e8dd0c33b9b2aea108194af57a8fe8de39c7e67bb86109af6dbf3895f22c010b`

The pavilion source, panel source, component mapping, geometry, receiver identities and every non-panel material value remain unchanged.

## Refined standalone Building re-proof

The source-owned refinement independently reran its own Building proof before Map consumed it.

Exact workflow:

`35069711514 — Building material lookdev evidence` — **SUCCESS**

Inherited Hard-Surface evidence on the same exact head also remained green.

Retained exact-head artifact:

- ID `10435825830`;
- name `building-material-lookdev-001-b08f683f1c3f75c474fb347e1d1990c1c4426a33`;
- size `348,415` bytes;
- GitHub / independently reproduced archive SHA-256 `645acd5ef7311ca34f0b36fd3520dcf2b57dc6a7ac0530e400ea3e3525048c92`.

All six refined standalone Godot images were downloaded and directly inspected in this activation. The front service surface remains readable against the cooler frame/dark enclosure; the east surface remains much darker under its different relation to the same fixed key; the three-quarter view preserves distinct structural frame, enclosure, roof and service roles. This is renderer-aware Materials evidence, not final Art Direction approval.

## Exact receiving-scene rerun

Map Materials PR:

**`mike-axiom-mir/axm-map-design#14 — Materials: transfer pavilion surface family into exact Map scene`**

Exact current head:

`0e2d571af4fd5772e9d48da013dc245914654660`

Exact base remains Map Environment PR #11:

`c72838eb4b40ee7903a3c3e326a1bf77fa08bee5`

PR state checked in this activation:

**OPEN / DRAFT / MERGEABLE**

The receiving lane now pins exact refined Building Materials head `b08f683f1c3f75c474fb347e1d1990c1c4426a33` and exact profile SHA-256 `e8dd0c33b9b2aea108194af57a8fe8de39c7e67bb86109af6dbf3895f22c010b`.

Dedicated exact-head workflow:

`35069914092 — Materials Building receiving-scene lookdev evidence` — **SUCCESS**

The workflow successfully:

- checked out the exact Materials lane head;
- checked out the exact baseline + compact Nature sources, Weather source, Building structural source and refined Building Materials source;
- compiled/tested the exact receiving-material contract;
- built neutral and candidate scene payloads;
- validated structural evidence;
- derived the Materials observer from the exact Environment host;
- rendered neutral and candidate states in pinned Godot `4.7.2` GL Compatibility;
- compared the exact target-host images;
- validated receiving-scene render evidence;
- retained the exact artifact.

Same-head inherited Map workflows also remained green:

- `35069913928 — Environment composition baseline` — **SUCCESS**;
- `35069913968 — Procedural environment variation` — **SUCCESS**.

Retained exact receiving artifact:

- ID `10435926829`;
- name `environment-building-material-receiving-001-0e2d571af4fd5772e9d48da013dc245914654660`;
- size `378,522` bytes;
- GitHub archive digest `sha256:065d542b2f33ac5d85031d407376580b93b10d3347ee1551b72400cbc12aae95`;
- independently downloaded/rehashed archive SHA-256 `065d542b2f33ac5d85031d407376580b93b10d3347ee1551b72400cbc12aae95`;
- retained `exact-head.txt` matches `0e2d571af4fd5772e9d48da013dc245914654660`.

## Exact structural preservation

Retained result:

**`PASS_RECEIVING_SCENE_BUILDING_MATERIAL_TRANSFER_STRUCTURE`**

Every declared contract check is true. Important exact facts:

- Building vertices identical between neutral/candidate: **true**;
- Building surface triangle partition identical between neutral/candidate: **true**;
- exact world geometry: `152` vertices / `228` triangles;
- component count: `19`;
- surface-role triangles: frame `144`, infill `36`, roof `12`, slab `12`, service panels `24`;
- component-alignment max error: `4.440892098500626e-16 m`;
- placement-translation max error: `0.0 m`;
- seed, path, cameras, Nature, Weather, Object proxies and unrelated scene items preserved;
- UV / texture / decal / weathering promotion: **false / not authored**.

The target-host image comparator also returns:

**`PASS_VISIBLE_BUILDING_SURFACE_DELTA`**

Current refined candidate versus neutral control:

- `path_eye`: `65,965 / 792,000 = 8.3289%` changed pixels, bbox `[346,256,753,437]`, `65,965` darker / `0` brighter;
- `elevated_oblique`: `32,304 / 792,000 = 4.0788%`, bbox `[594,171,888,345]`, `32,302` darker / `2` brighter.

These figures prove bounded attribution only; they are not aesthetic acceptance.

## Direct receiving-scene Materials observation

All four exact current receiving PNGs were downloaded and directly inspected in this activation.

### `path_eye`

The refined candidate preserves the intended cooler manufactured hierarchy: frame remains readable, enclosure/roof recede, and the slab stays quiet against the route. The service panel is still legible, but it no longer reads as the strongest saturated color at the path endpoint; the nearby orange Object proxies now remain at least as visually assertive as the service accent.

The known triangular dark/light pattern on the front panel is still visible. It is **not erased**, and this activation does not relabel it as solved lighting. However, the panel's reduced brightness/saturation means that pattern is no longer amplified by the earlier bright orange/yellow accent to the same degree.

### `elevated_oblique`

The pavilion remains materially separable from the Nature and Object proof bodies. Frame, dark enclosure/roof and service panel remain distinguishable under the one shared receiving light. The service accent is visibly quieter than in the first receiving candidate and does not take over the world composition.

The east-facing service surface remains naturally darker than the front surface under the same light. No per-view light or material cheat was introduced.

## Direct old-candidate -> refined-candidate comparison

For a true refinement comparison, the earlier exact Map artifact was also reacquired:

- old receiving head `80be553591e2b92891a3c96aea2023e34142eef1`;
- old artifact ID `10435946010`;
- old archive SHA-256 `6def1a5e68b911111f18f76f4e85740a86f04f6a56c9b2004a327a76dba2d696`;
- old Building material head `484ced313ba0337ea27eebd01c5677e72e8456af`.

The old and refined candidate scenes are identical except for the source-owned service-panel material refinement. Independent exact RGB comparison shows the change is highly localized:

- `path_eye`: `4,162 / 792,000 = 0.5255%` of pixels changed, bbox `[388,309,739,389]`;
- `elevated_oblique`: `1,371 / 792,000 = 0.1731%`, bbox `[613,222,647,280]`;
- maximum channel delta: `53 / 255` in both contexts.

On those changed pixels only, descriptive image statistics show:

- `path_eye` mean encoded-RGB luma: `0.6101 -> 0.5114` (`-16.18%`); mean saturation: `0.6186 -> 0.4245` (`-31.38%`);
- `elevated_oblique` mean luma: `0.6443 -> 0.5434` (`-15.66%`); mean saturation: `0.6153 -> 0.4298` (`-30.15%`).

These are independent inspection metrics, not source PBR measurements. They support the narrow claim that the refinement reduced the rendered service accent's brightness/saturation while leaving the rest of the candidate visually unchanged.

## Materials decision

**`PASS_RECEIVING_SCENE_BUILDING_SURFACE_REFINEMENT`**

Bound exactly to:

- Building Materials PR #3 head `b08f683f1c3f75c474fb347e1d1990c1c4426a33`;
- material profile SHA-256 `e8dd0c33b9b2aea108194af57a8fe8de39c7e67bb86109af6dbf3895f22c010b`;
- Map Materials PR #14 head `0e2d571af4fd5772e9d48da013dc245914654660`;
- Map receiving base `c72838eb4b40ee7903a3c3e326a1bf77fa08bee5`;
- exact standalone artifact `10435825830` / `645acd5e...`;
- exact receiving artifact `10435926829` / `065d542b...`;
- pinned Godot `4.7.2` GL Compatibility;
- exact `path_eye` and `elevated_oblique` receiving cameras.

Meaning of this scoped PASS:

> The source-owned service accent was refined in the correct Building material profile, re-proved in the Building's own three fixed contexts, then re-consumed by the exact Map receiving lane. Direct comparison shows the adjustment is localized to the service surfaces and materially reduces their rendered focal weight while preserving the five-surface pavilion hierarchy in both retained receiving cameras.

This is **not** `PASS_FINAL_BUILDING_LOOKDEV`. Final visual-direction acceptance remains with Art Direction / Visual QA.

## Renderer / representation boundary

The evidence is still bounded to the present proof representation:

- renderer: Godot `4.7.2` GL Compatibility;
- source proof geometry: sparse source-owned pavilion/panel boxes, not final architectural mesh detail;
- receiving observer retains the Environment proof culling limitation;
- no authored UVs, texture maps, decals, grime, edge wear or weathering;
- no physically measured coating/steel/mineral values;
- no renderer equivalence claim;
- no target-device shader, draw-call, memory or GPU budget claim.

The material family is scalar PBR lookdev, not a finished texture set.

## Reusable learning / placement decision

The cross-domain evidence lesson is now stronger, but still procedural rather than semantic:

1. bind source-owned roles/components to a small material family;
2. prove same-geometry A/B in source-owned fixed contexts;
3. challenge that same candidate in a real receiving scene before texture complexity;
4. if the receiving scene exposes a hierarchy defect, repair the source-owned surface when that is the actual owner rather than hiding the problem with a receiver-only override;
5. rerun both source proof and receiving proof after the refinement.

Nature, Object and Building can all reuse this evidence discipline while keeping their own role names and material meaning. No shared UC material ontology or automatic cross-domain shader extraction is justified by this result.

## Non-claims

This activation does **not** establish:

- final 3D Art Director acceptance;
- final independent Visual Observer acceptance;
- that the triangular front-panel lighting/shadow pattern is eliminated;
- final scene lighting or cinematography;
- UV unwrap quality or texel density;
- texture, decal, grime, wear or weathering quality;
- physically measured material correctness;
- final imported mesh normals/tangents/topology behavior;
- target-device FPS, GPU time, memory, draw-call or shader budget;
- architecture/engineering/weather sealing/manufacturing behavior;
- collision, navigation or gameplay;
- acceptance of the separate rear/right Nature replacement;
- UC / Profession Fabric promotion;
- CANON, production readiness, game readiness or Materials mastery.

## Four-root check

- **Truth:** the first receiving candidate's visual defect is retained, not rewritten away. The refined claim is bound to exact source and receiving heads, exact artifact digests, direct image inspection and localized before/after measurements. Machine pixel deltas are not relabelled aesthetic acceptance.
- **Agency / non-domination:** Materials owns the surface refinement, not Art Direction, Visual QA, Environment, Runtime, Building engineering or CANON authority. The roots remain the merge gate.
- **Continuity:** the Map lane stays stacked on exact PR #11; the Building profile is refined at its source rather than receiver-overridden; old and new artifact identities remain traceable; prior Object/Nature results remain in their original scopes.
- **Wisdom before speed:** one scalar service-surface defect was corrected and re-proved before adding UVs, textures, decals, wear, new shader systems or scene-light hacks.

## Handoffs

- **3D Art Director:** review exact Map PR #14 head `0e2d571...` current artifact `10435926829`. Materials observes that the earlier path-end panel dominance is materially reduced while frame/enclosure hierarchy remains readable. Final directional acceptance is yours.
- **Visual Observer / QA:** independently recheck the current four receiving PNGs, especially whether the triangular front-panel read remains tolerable and whether any new material hierarchy defect appears. Materials does not self-certify independent QA.
- **Environment / World Art:** preserve PR #14 as the isolated Building-material A/B. Do not combine the sibling rear-tree PR #15 into this material comparison before review.
- **Building / Hard Surface:** no geometry repair requested. The receiving defect was addressed at the source-owned service material only; receiver identities remain unchanged.
- **Runtime / Optimization:** if Art Direction + Visual QA accept this exact five-surface receiving candidate, measure material-surface / draw / memory cost separately. No performance acceptance transfers.
- **Technical Art / UC / Capability Cartographer:** no UC change requested. Treat source->receiving revalidation as an evidence-procedure signal only, not a shared material ontology.

## Continuity pointer

The immediately previous Materials status is preserved in Git history at blob:

`59bebd6015b9853cb1c55a0b077979430f8b03d7`

Its earlier exact standalone Building result and prior Object / Nature Materials results remain historical evidence in their original scopes. The earlier bright service-panel candidate is also retained as explicit before-evidence rather than silently deleted from the story.
