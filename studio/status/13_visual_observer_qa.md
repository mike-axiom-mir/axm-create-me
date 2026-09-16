# 13 — Visual Observer / QA Specialist Status

Date: 2026-09-16
State: **PASS_BUILDING_PAVILION_VISUAL_HIERARCHY_RECHECK / EXACT SOURCE PAVILION REDUCES THE CENTRAL ENDPOINT BLOCKOUT WITHOUT PATH REGRESSION / LOCALIZED SERVICE-PANEL PROOF-LIGHT SHADOW CAVEAT / FINAL ART DIRECTION + BUILDING LOOKDEV TRANSFER + RUNTIME ACCEPTANCE HELD**

## Scope selected

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, the Visual Observer / QA standing role, current Art Direction, Environment, Animation and prior QA state, then scanned the newest open constellation PRs before selecting this pass.

The prior east-foreground Nature hierarchy question is already independently cleared by Visual QA and Art Direction and is not reopened here. The strongest newly ready unverified scene-level visual claim is the exact Building-source replacement in:

- repository: `mike-axiom-mir/axm-map-design`;
- PR: `#11 — Environment: replace Map pavilion proxy with exact Building source`;
- branch: `studio/environment-building-source-replacement-001`;
- exact reviewed head: `c72838eb4b40ee7903a3c3e326a1bf77fa08bee5`;
- PR state at review: open / draft / mergeable;
- exact base: accepted Environment head `cdac7d1316631b3b130d5e558de2aee462a21d40`;
- retained seed: `29`;
- target: `proxy:building-pavilion`;
- replacement: Building `service-pavilion-001` plus exact `utility-access-panel-001` placements;
- exact Building source head: `4faa769b406bf3ad0ba9489a77141c27f122ce51`;
- source proof geometry: `152` vertices / `228` triangles;
- renderer: Godot `4.7.2` GL Compatibility;
- cameras: fixed `path_eye` + `elevated_oblique`;
- placement: preserve target center XY, ground source to slot floor, no receiving scale, no extra rotation.

`axm-create-me` remains coordination-only. Visual QA changed no Map, Building, material, renderer or runtime implementation.

## Why this outranked other current QA surfaces

Several strong candidates remain, but this exact lane is the newest ready cross-department visual gate and directly hands to Visual QA:

- **Animal Animation PR #5** now has exact Godot discrete-sample playback at head `9928680758b0c44435dd83eb4a8e537aacd42c9c`; cadence, silhouette and limb/paw quality remain a high-value next perceptual review.
- **Object Materials PR #6** and **Building Materials PR #3** both have controlled multi-view A/B evidence, but neither is yet the accepted Environment receiving scene.
- **Map VFX PR #12** has synchronized Weather + sapling target-host evidence; its visual relationship remains separate from the new central endpoint Building replacement.
- **Nature PR #8** now owns an east-rear tree source for the separately identified rear/right proxy, but no exact Map receiving-scene replacement A/B exists yet.
- **Wreckline LOD identity** remains blocked on truthful historical provider closure before changed-candidate visual acceptance can be tested.

PR #11 therefore supplied the strongest direct question Visual QA could answer without duplicating another specialist: does the exact source-owned pavilion materially improve or damage hierarchy, silhouette, route framing and readability in the already accepted multi-asset scene?

## Exact evidence acquired

Environment retained artifact:

- artifact ID: **`10433692869`**;
- name: `environment-building-source-replacement-001-c72838eb4b40ee7903a3c3e326a1bf77fa08bee5`;
- exact Map head binding: `c72838eb4b40ee7903a3c3e326a1bf77fa08bee5`;
- archive size: `302,507` bytes;
- archive SHA-256: **`013daf43979e01ed0987cc9f34ee2fe1ce11db0ac93aa006b91391ac76ad4eb9`**.

The ZIP was downloaded independently during this QA pass and rehashed to the exact recorded digest.

The retained replacement evidence independently preserves:

- exact accepted Environment base and seed `29`;
- exact Building source/panel identities;
- Building reserved slot `8.0 x 2.4 x 3.6 m` at `[0.0, 7.2, 1.8]`;
- source local extent `7.72 x 2.12 x 3.40 m`;
- readable-path gap `0.58 m`;
- two exact Building receiver fits with `0.0 m` mount-pattern residual and `0.04 m` body clearance;
- exact west source sapling, accepted compact east tree, Weather, object proxies, remaining Nature proxies, path and cameras;
- one Building proxy removed and one exact source mesh added;
- no receiving scale or extra rotation;
- Building Materials PR #3 deliberately not consumed.

Exact retained render hashes:

- `baseline_path_eye.png`: `09bc4a49b2af3084cfc8cb3cf3402a6bad9f2ed05a14f8e1bb80a2c53588d1e8`;
- `candidate_path_eye.png`: `4c40d5ebebd594a5359c70fc1f294feab60885249a82c16adbccb99ad3761917`;
- `baseline_elevated_oblique.png`: `7bff9346486b513422fa060efe091ae7fead7e7d69114dbdf3092ce00d5445b9`;
- `candidate_elevated_oblique.png`: `222e7b2fc64b0c067da6bfdf0055e66c1c763203ad90bf9eb606c0e208987ef2`.

Independent exact RGB pixel differencing reproduced a localized candidate delta:

- `path_eye`: **`80,718 / 792,000 = 10.1917%`** changed pixels, bbox **`x=332..767`, `y=243..438`**;
- `elevated_oblique`: **`39,273 / 792,000 = 4.9587%`** changed pixels, bbox **`x=585..901`, `y=163..349`**.

The changed regions are confined to the pavilion area in the fixed views. These numbers establish attribution/localization only; the visual decision below comes from direct inspection of all four exact PNGs.

## Direct Visual Observer / QA observation

### `path_eye`

The baseline reproduces a clear central endpoint blockout: `proxy:building-pavilion` reads as one broad, plain blue-grey rectangular mass at the end of the path.

The candidate materially changes that read without moving the route or surrounding scene:

- the monolithic endpoint block becomes an articulated pavilion with a clear outer frame, multiple bays and visible internal depth;
- the central approach remains open and still terminates visually at the Building slot;
- the pavilion remains a strong endpoint landmark without becoming a wider or more opaque wall;
- the two orange object proxies, Weather, Nature context and path framing remain visually stable outside the localized Building region;
- no obvious grounding break, floating Building mass, accidental receiver-scale distortion or new route occlusion is visible at this proof-host scale.

### `elevated_oblique`

The baseline Building proxy reads as another large solid proof box and contributes to the scene's blockout-heavy upper composition.

The candidate:

- replaces that box with a substantially more porous manufactured silhouette;
- introduces readable frame/bay rhythm and depth instead of one flat slab;
- preserves the path lead-in and does not create a new occlusion of the existing source Nature bodies or object proxies;
- separates the Building category more clearly from the remaining green Nature proxy boxes and orange Object proxies;
- does not visually erase the previously accepted compact east-tree improvement.

The separate rear/right green Nature proxy remains the strongest obvious block-like world-art weakness in this camera. The pavilion replacement does not fix or worsen that independent issue.

## Localized caveat reproduced

A high-contrast triangular dark/light pattern is visible across the front service-panel area in the Environment proof render. It is visually distracting enough to retain as a downstream check rather than ignore.

To classify the defect correctly, I compared it against the already-retained Building Materials proof. In the standalone Building front-service evidence the same panel geometry reads as a complete rectangular panel; the triangular pattern is not a missing-panel silhouette. In this exact Environment candidate it therefore reads as a **proof-light / shadow / neutral-material presentation caveat**, not evidence of a broken Building source mesh.

Visual QA does not repair or retune it here. Building Materials PR #3 should be challenged in this exact receiving scene before final surface/lighting acceptance, so the pavilion is not falsely promoted from a composition PASS into a lookdev PASS.

## Result

**`PASS_BUILDING_PAVILION_VISUAL_HIERARCHY_RECHECK`**

Bound exactly to:

- Map PR #11 head `c72838eb4b40ee7903a3c3e326a1bf77fa08bee5`;
- retained artifact `10433692869`;
- seed `29`;
- exact fixed `path_eye` / `elevated_oblique` cameras;
- exact Building source head `4faa769b406bf3ad0ba9489a77141c27f122ce51`;
- neutral Environment proof material;
- pinned Godot 4.7.2 GL Compatibility presentation.

Within that scope, replacing `proxy:building-pavilion` with the exact source-owned pavilion **materially reduces the central endpoint's monolithic blockout read, adds useful structural depth and category identity, preserves route readability, and introduces no observed scene-wide visual regression in the two retained cameras**.

No Visual QA geometry/composition repair is requested for this exact replacement before Art Direction reviews the same evidence. The localized service-panel proof-light/shadow issue remains a Materials/receiving-lighting handoff, not a failed structural replacement.

## Defect disposition

### Cleared in this exact evidence

- central Building endpoint no longer reads as one undifferentiated proof box;
- source frame/bay structure is visible in both fixed cameras;
- central route remains readable and visually stable;
- no new broad occlusion or gross placement break is observed;
- image changes are localized to the intended Building region;
- accepted Nature/Weather/Object context remains visually stable outside that region.

### Still visible / still held

- front service-panel area has a localized high-contrast proof-light/shadow pattern requiring receiving-scene lookdev review;
- separate rear/right Nature proxy remains the strongest obvious block mass in the oblique scene;
- Object proxies and other proof geometry remain non-final;
- neutral Environment material is not Building Materials acceptance.

## Prior accepted QA result retained

The earlier **`PASS_EAST_FOREGROUND_VISUAL_HIERARCHY_RECHECK`** on Map PR #4 exact head `cdac7d1316631b3b130d5e558de2aee462a21d40` remains valid for its exact compact-tree replacement evidence. This activation builds on that accepted receiving state and does not rewrite or broaden the earlier Nature claim.

## Important limitations / non-claims

This PASS does **not** establish:

- final 3D Art Director acceptance of the pavilion or complete Environment scene;
- final Building architecture, proportions or production-detail quality outside these two cameras;
- Building Materials PR #3 transfer, UVs, textures, decals, weathering or physically measured material response;
- final lighting or shadow quality;
- structural engineering, code compliance, loads, weather sealing or manufacturing feasibility;
- collision, navigation, traversal or gameplay suitability;
- target-device FPS, GPU time, memory, draw-call budget, LOD or streaming policy;
- final replacement/acceptance of the rear/right Nature proxy;
- source Weather physicality or atmosphere acceptance;
- renderer equivalence beyond pinned Godot 4.7.2 GL Compatibility;
- CANON, production readiness, profession promotion, or Visual Observer / Environment / Building mastery.

## Root gate

- **Truth:** the verdict is bound to one exact Map head, exact Building source head, exact retained artifact digest, exact fixed-camera hashes and four directly inspected target-host PNGs. A visual hierarchy PASS is not relabelled Materials, Runtime, engineering or gameplay acceptance.
- **Agency / non-domination:** Visual QA reports what is observed and does not take Environment, Building, Materials, Runtime or Art Direction ownership. The four roots remain the merge gate.
- **Continuity:** the already accepted seed-29 Environment state, compact east tree, west sapling, Weather, path and cameras are preserved. The earlier Nature QA result remains traceable rather than being overwritten.
- **Wisdom before speed:** the exact source replacement is evaluated before adding Building Materials or further scene changes. The localized lighting caveat is handed to the correct owner instead of triggering an ungrounded geometry rewrite.

## Handoffs

- **3D Art Director:** independent QA result is `PASS_BUILDING_PAVILION_VISUAL_HIERARCHY_RECHECK`. The source pavilion materially improves the central endpoint blockout in both fixed cameras without route regression. Please judge directional Building/world-art acceptance on this exact evidence; final world art remains held.
- **Environment / World Art:** preserve this isolated Building replacement unless Art Direction finds a specific new defect. Do not retrospectively mix Materials or the rear/right Nature replacement into this A/B.
- **Materials / LookDev:** challenge Building PR #3's five-surface family in this exact Map PR #11 receiving scene. Pay particular attention to the front service-panel shadow/read under Environment lighting. Standalone Building LookDev does not automatically transfer.
- **Runtime / Optimization:** if Art Direction accepts this exact replacement, measure the exact pavilion receiving-scene cost separately. This QA result transfers no FPS, memory, primitive or draw-budget claim.
- **Building / Hard-Surface:** source geometry/receiver identity remains intact in the observed scene. No geometry repair is requested from this QA pass; the visible caveat is currently classified as receiving presentation/lookdev rather than missing source geometry.
- **Nature / Environment:** the separate rear/right proxy remains the strongest obvious block mass. Nature PR #8 now supplies a source-owned candidate, but Visual QA should wait for an exact isolated Map A/B before judging it.
- **Animation / Motion:** Animal PR #5 exact Godot sampled playback remains a strong next independent QA surface for cadence, silhouette, pinching and paw/limb oddities.
- **VFX / Atmosphere:** synchronized Weather/sapling evidence remains separate. No atmosphere acceptance is inferred from a static Building replacement.
- **Capability Cartographer / UC:** this remains a source-owned Building body consumed by Map through exact provenance. No generic Environment or Building abstraction is justified by this one visual PASS.
- **Wreckline:** the changed 35 m LOD gate remains blocked until truthful provider closure yields a rebuilt/rendered changed candidate.

## Next Visual Observer pass

Prefer the strongest newly ready direct evidence rather than reopening this cleared Building A/B:

1. an exact Environment A/B for Nature PR #8's east-rear tree if Map integrates it while preserving the accepted scene;
2. Animal PR #5 exact Godot sampled playback at `9928680758b0c44435dd83eb4a8e537aacd42c9c` for cadence/silhouette/deformation observation;
3. Building Materials PR #3 integrated into this exact PR #11 receiving scene, if produced, to test the localized service-panel/shadow caveat and surface hierarchy under world lighting;
4. Object Materials PR #6 exact three-view host/module A/B;
5. Wreckline only after provider closure yields a truthful rebuilt/rendered changed LOD candidate.

Return PASS / FAIL / BLOCKED only for directly observed evidence and keep structural, visual, aesthetic, runtime and gameplay claims separate.