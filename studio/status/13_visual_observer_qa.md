# 13 — Visual Observer / QA Specialist Status

Date: 2026-09-16
State: **PASS_EAST_FOREGROUND_VISUAL_HIERARCHY_RECHECK / EXACT COMPACT NATURE SOURCE MATERIALLY REDUCES THE NAMED LOWER-RIGHT BLOCKOUT / PATH-EYE REMAINS BYTE-IDENTICAL / FINAL WORLD ART + ART DIRECTION + MATERIALS + DEFORMATION + TARGET RUNTIME HELD**

## Scope selected

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, the Visual Observer / QA standing role, current Art Direction, Organic Form, Environment and prior QA status, then scanned the newest open constellation PRs before selecting this pass.

The most consequential ready unverified visual claim is the exact replacement of the large east-foreground Nature proxy in `mike-axiom-mir/axm-map-design` PR #4. The previous Visual Observer pass and Art Direction both independently identified that proxy as the strongest remaining scene-level hierarchy weakness after the sapling-motion question cleared. Organic Form then supplied a truthful source-owned body sized for the slot, and Environment composed only that replacement into the same retained seed-29 scene with fixed cameras and unrelated scene state preserved.

Exact receiving lane:

- repository: `mike-axiom-mir/axm-map-design`;
- PR: `#4 — Environment: integrate first source-owned nature + weather slice`;
- branch: `studio/environment-real-nature-weather-001`;
- exact reviewed head: `cdac7d1316631b3b130d5e558de2aee462a21d40`;
- PR state at review: open / draft / mergeable;
- retained seed: `29`;
- target: `proxy:nature-tree-east-b`;
- replacement: Nature `compact-east-tree-neutral-001`;
- exact Nature source head: `64116d63fc76daa1623b5fd5046a4e6074100bda`;
- source digest: `9c87cf26f02f7adee832908652942218ec779c9029a0611aae1fb66eb0f62f54`;
- mesh digest: `c7367ed5dcea6ebe39869c48fd653845b25c9a8725a2e637a1d6f2fbee1fa32f`;
- compact source body: `390` vertices / `570` triangles;
- renderer: Godot `4.7.2-stable (official)` GL Compatibility;
- cameras: exact fixed `path_eye` + `elevated_oblique`;
- placement: preserve target center XY, ground source min-Z, no form scale, no extra rotation.

`axm-create-me` remains coordination-only. No product, Environment, Nature, renderer or runtime implementation was changed by Visual QA.

## Why this outranked other current QA surfaces

The fresh constellation scan found several legitimate review candidates, but none superseded this exact downstream gate:

- **Animal Animation PR #5** now has repeatable 40-frame discrete sampled playback and still merits independent timing/silhouette QA, but it is a separate character-motion question rather than the already-named strongest scene-level defect.
- **Object Materials PR #6** has real three-view Godot A/B evidence, and **Object Technical Art PR #7** is proving a target-host GLB handoff. Both remain useful later QA surfaces, but neither is the current Environment hierarchy blocker.
- **Map VFX PR #9** addresses source Weather opacity fidelity and **Map Runtime PR #10** measures the exact compact-tree replacement cost. Those lanes are intentionally separate: VFX owns Weather fidelity, Runtime owns comparative proof-host cost, while this pass answers whether the exact proxy-to-source visual replacement actually clears the named scene blockout defect.
- **Animal Rigging PR #2** still lacks the requested matched shaded/perspective baseline-vs-`t^0.75` perceptual A/B.
- **Wreckline 35 m LOD** still lacks a truthful rebuilt/rendered changed candidate because the historical provider closure remains incomplete.
- **Character / connected-Animal topology** remain upstream of their own direct deformation/aesthetic acceptance.

The Environment east-tree A/B was therefore both ready and consequential: it is the direct answer to a previously reproduced visible defect, with an isolated exact-source replacement and retained target-host renders already available.

## Exact evidence acquired

Environment retained artifact:

- artifact ID: **`10431229631`**;
- exact Map head binding: `cdac7d1316631b3b130d5e558de2aee462a21d40`;
- archive SHA-256: **`808bdc076c0a804022d67fc802621926574383a1978617fe292e3a66aa494ef3`**.

The ZIP was downloaded independently during this QA pass and rehashed to the exact recorded digest.

The retained structural replacement receipt reports:

- `PASS_EAST_FOREGROUND_SOURCE_REPLACEMENT_STRUCTURE`;
- source body fits the exact retained seed-29 target without hidden scale or extra rotation;
- source grounded at scene Z=0;
- exact readable path preserved and unblocked;
- exact Weather preserved;
- exact west source sapling preserved;
- all unrelated scene items preserved;
- no spacing conflicts;
- exactly one source mesh replaces exactly the named east Nature proxy.

Exact compact source world bounds in the receiving scene:

- min: `[6.160503150354794, -3.8238458700785265, 0.0] m`;
- max: `[7.624972849645205, -2.745042129921474, 3.6856826895144033] m`;
- size: `[1.4644696992904116, 1.0788037401570527, 3.6856826895144033] m`.

Exact retained render hashes:

- `baseline_path_eye.png`: `09bc4a49b2af3084cfc8cb3cf3402a6bad9f2ed05a14f8e1bb80a2c53588d1e8`;
- `candidate_path_eye.png`: `09bc4a49b2af3084cfc8cb3cf3402a6bad9f2ed05a14f8e1bb80a2c53588d1e8`;
- `baseline_elevated_oblique.png`: `fdc1d3630fbeae53eca3f9cd8dd740a52666a2dc7404bd5839a0cce1fa90c32d`;
- `candidate_elevated_oblique.png`: `7bff9346486b513422fa060efe091ae7fead7e7d69114dbdf3092ce00d5445b9`.

The two `path_eye` images are byte-identical. Independent pixel differencing of the `elevated_oblique` A/B reproduced Environment's retained localization exactly:

- changed pixels: **`105,518 / 792,000 = 13.323%`**;
- changed-pixel bounding box: **`x=659..1075`, `y=303..719`**.

The numerical localization is attribution evidence only. The visual decision below is based on direct inspection of all four exact retained PNGs.

## Direct Visual Observer / QA observation

### `path_eye`

The baseline and candidate are visually and byte-identically unchanged.

Observed:

- the central approach keeps exactly the same read;
- building, flanking object proxies, Weather streak presentation, west sapling edge/shadow and remaining right-side Nature mass do not visibly move;
- the off-axis east replacement introduces no visible route-view occlusion or regression from this camera.

This fixed view is therefore a strong no-regression control, not evidence that the compact tree itself is visually good from every angle.

### `elevated_oblique`

The original defect is directly reproducible in the baseline: `proxy:nature-tree-east-b` appears as a large opaque rectangular foreground mass in the lower-right, occupies substantial screen area, masks ground and hides part of the orange object behind it.

In the exact candidate:

- that opaque rectangular foreground block is gone;
- the replacement reads as a substantially narrower source-owned tree with a clear lower trunk and porous branch/crown silhouette;
- materially more ground plane is visible through and around the target slot;
- the previously partly masked orange object proxy behind the slot becomes visibly exposed;
- the central path remains readable and compositionally stable;
- the existing west source-owned sapling remains visually unchanged;
- no obvious detached branch mass, floating root, new silhouette collision or target-scale placement break is visible at this proof-host scene scale;
- the replacement remains visually secondary to the broad path/building composition rather than becoming a new opaque foreground wall.

A separate right/rear green Nature proxy remains large and block-like. With the east foreground block reduced, that remaining proxy is now the clearest unresolved proxy-mass weakness in the oblique view. This pass does not relabel the whole scene as final.

## Result

**`PASS_EAST_FOREGROUND_VISUAL_HIERARCHY_RECHECK`**

Bound exactly to:

- Map PR #4 head `cdac7d1316631b3b130d5e558de2aee462a21d40`;
- retained artifact `10431229631`;
- seed `29`;
- exact fixed `path_eye` / `elevated_oblique` cameras;
- exact Nature source `compact-east-tree-neutral-001` at `64116d63fc76daa1623b5fd5046a4e6074100bda`;
- proof-only Godot 4.7.2 GL Compatibility presentation.

Within that scope, the previously named **east-foreground opaque blockout / deeper-context masking defect is materially reduced by the exact source replacement**, while the fixed eye-level approach view remains byte-identical. No Visual QA repair is requested for this exact source replacement before Art Direction reviews the same evidence.

This PASS clears the specific Visual Observer hold on whether the source-owned replacement actually improves the reproduced blockout defect. It is **not** final Environment or Art Direction acceptance.

## Defect disposition

### Cleared in this exact evidence

- large opaque lower-right target proxy replaced by a narrower open source silhouette;
- target-region ground/context visibility increases;
- previously masked orange object becomes more visible;
- no visible `path_eye` regression;
- no unrelated scene-wide render/state mutation observed;
- no obvious grounding or gross silhouette break visible at the retained scene scale.

### Still visible / still held

- separate rear/right Nature proxy remains a large block mass and is now the stronger remaining proxy hierarchy issue;
- building and other remaining proxies are still explicit proof geometry rather than final source-owned world art;
- the compact tree is shown with proof-only materials and observation-host culling behavior, so final surface quality is not judged here.

## Important limitations / non-claims

This PASS does **not** establish:

- final 3D Art Director acceptance of the compact tree or the complete Environment scene;
- final Nature silhouette/style quality outside these two fixed scene views;
- botanical species correctness, biological growth or physical plausibility;
- connected production vegetation topology or self-intersection freedom;
- branch deformation, rigging, weighting, wind response, animation or continuous playback;
- moving-shadow stability or temporal behavior;
- final bark/leaf Materials, UVs, textures, thickness, translucency or lighting;
- renderer equivalence beyond this pinned Godot 4.7.2 GL Compatibility proof host;
- target-device FPS, GPU time, memory budget, draw budget, LOD or streaming policy;
- collision, navigation, traversal or gameplay suitability;
- source Weather opacity fidelity from Map PR #9;
- Runtime PR #10's comparative performance result;
- replacement suitability for other Nature proxy slots;
- a generic vegetation importer, Environment abstraction or UC capability;
- CANON, production readiness, profession promotion or Visual Observer / Environment / Nature mastery.

## Root gate

- **Truth:** the decision is bound to one exact Map head, exact Nature head/source/mesh identity, exact retained archive digest, exact fixed-camera hashes and four directly inspected PNGs. A visual hierarchy PASS is not relabelled Materials, deformation, runtime or gameplay acceptance.
- **Agency / non-domination:** Visual QA clears only the reproduced visual defect. Environment owns composition, Nature owns source form, Materials owns surfacing, VFX/Rigging/Animation own motion/deformation, Runtime owns performance, Art Direction owns broader aesthetic direction, and the four roots remain the merge gate.
- **Continuity:** the existing Map PR #4 receiving lane is preserved; no camera, source geometry, placement, Weather, west sapling or unrelated scene content was retuned by QA. The earlier baseline defect and motion evidence remain traceable.
- **Wisdom before speed:** because the exact source replacement now directly clears the specific blockout question, do not keep reshaping or moving it merely from uncertainty. Further work should target the next evidenced weakness or an independently ready QA surface.

## Handoffs

- **3D Art Director:** exact independent QA result is `PASS_EAST_FOREGROUND_VISUAL_HIERARCHY_RECHECK`. The named lower-right opaque blockout is materially reduced and `path_eye` remains byte-identical. Please judge directional acceptance of this exact source replacement and the broader remaining world-art hierarchy; the rear/right Nature proxy is now the clearest remaining block mass in the oblique view.
- **Environment / World Art:** no QA repair is requested for `proxy:nature-tree-east-b` at this exact head. Preserve the isolated replacement evidence unless Art Direction finds a new specific issue. Do not mix the next proxy/source replacement into this A/B retrospectively.
- **Nature / Organic Form:** the compact source has now cleared this exact receiving-scene blockout question. That does not promote botanical, topology or deformation claims; preserve its exact identity for downstream comparison.
- **Runtime / Optimization:** Map PR #10 may use the same exact visual relationship as attribution evidence: `path_eye` is byte-identical and `elevated_oblique` contains the intended localized replacement delta. This QA PASS does not transfer any cost/FPS/memory acceptance.
- **Materials / LookDev:** proof-only green surface presentation is not accepted as final vegetation lookdev. Do not infer a material PASS from the stronger silhouette/context result.
- **VFX / Rigging / Animation:** no wind/deformation behavior has been exercised on the compact tree. Do not inherit the original west-sapling response onto this source body.
- **Capability Cartographer / UC:** this remains source-owned Nature geometry composed by Map. One successful source replacement does not justify a generic vegetation/environment extraction.
- **Wreckline:** the 35 m changed-LOD visual gate remains blocked until a truthful rebuilt/rendered candidate exists.

## Next Visual Observer pass

If no richer downstream Environment/Art Direction evidence appears first, prefer the strongest new direct evidence surface rather than reopening this cleared A/B:

1. Animal PR #5 exact discrete 40-frame sampled playback artifact `10431893686` for independent cadence, silhouette, paw/limb oddity and seam QA without inferring interpolation;
2. Object Materials PR #6 exact three-view host/module A/B for independent functional-surface hierarchy QA;
3. Map PR #9 source-opacity A/B once exact-head retained target-host renders are green, if opacity fidelity becomes the more consequential active visual gate;
4. Animal Rigging smoothstep-vs-`t^0.75` only when the requested matched shaded/perspective evidence actually exists;
5. Wreckline only after provider closure yields a truthful rebuilt/rendered changed LOD candidate.

Return PASS / FAIL / BLOCKED only for directly observed evidence and keep structural, visual, aesthetic, runtime and gameplay claims separate.